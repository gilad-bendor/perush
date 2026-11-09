// A page with footnotes, laid out by itself in the sheets of its PDF - each note at the foot of the sheet where it is
// first referred to.
//
// Chromium cannot put a note "at the foot of whichever sheet its reference lands on" (CSS's `float: footnote` is not
// there), and the question is circular: the notes a sheet holds take room from its text, which may push the reference
// itself on to the next sheet. So before such a page is printed (pdf-pages.ts), paginateSheets() runs in it and
// decides the sheets itself, one after the other, each once:
//
// - **A sheet is a box of the printed page's size** (`.pdf-sheet`, a forced break after it): its text at the top
//   (`.pdf-sheet-body`), its notes at the foot (`.pdf-notes`), under a short rule. Chromium prints each on a sheet of
//   its own and breaks nowhere else.
// - **The page's blocks are moved into the sheets one by one**, and measured where they stand - at the sheet's width,
//   under print media (pdf-pages.ts emulates it), in the page's own fonts - with the notes of every reference placed
//   so far. A block that does not fit is split at the last place that does: between its blocks, between the rows of a
//   line group (line-rows.ts), between the lines of a paragraph, between a list's items or a table's rows - a split
//   element goes on in a copy of itself on the next sheet (a numbered list keeps counting, a table repeats its head).
//   Where that place is, is found by trying: split, measure, put back - nothing about a layout is guessed.
// - **What Chromium honours, this honours** - read off the computed style, not copied from the CSS: a forced break
//   before a block (every `#` but the first, a layout's `pageBreakBefore`), a heading kept with what follows it
//   (`break-after: avoid`), a block kept whole (`break-inside: avoid`) if a sheet can hold it, orphans and widows.
//   The top margin of a sheet's first block is dropped, as Chromium drops it after a break of its own - but not
//   after a forced one, nor on the first sheet.
// - **The notes of a sheet are numbered from 1.** A further reference to a note on the same sheet has its number; one
//   on a later sheet says where the note is, `3 (עמ' 42)`, a link to it. The reference's box is as wide as that
//   already (footnotes.ts), so writing the number in moves nothing.
// - **A note too long for the room left**: rather than split it, its reference's line goes to the next sheet, with the
//   note - if that leaves no more than a fifth of the sheet empty. Otherwise the note is split by its lines (two at
//   least stay), and goes on - unnumbered - at the head of the next sheet's notes.
//
// What goes wrong is not thrown: the page is put back as it was - its notes at the end - and the answer says why.
//
// Everything below runs in the page (Playwright's `evaluate()`), so it is one function, its helpers inside it.

/** What paginateSheets() did. */
export type SheetsResult =
    | {
        sheets: number,
        notes: number,
        /** The sheets (1-based) whose notes open with the rest of a note split on the sheet before. */
        continued: number[],
        warnings: string[],
    }
    | { error: string };

/** How much of a sheet may be left empty to keep a note whole, rather than split it. */
export const KEEP_NOTE_WHOLE_EMPTY_SHARE = 0.2;

/** Runs in the page, with print media emulated - see the top of this file. */
export function paginateSheets(keepWholeShare: number): SheetsResult {
    const main = document.querySelector("main");
    const section = main?.querySelector(":scope > section.footnotes");
    if (!main || !section) return { sheets: 0, notes: 0, continued: [], warnings: [] };
    const body = document.body;
    const rtl = document.documentElement.dir === "rtl";
    const marginInline = Number(body.dataset.marginInline), marginBlock = Number(body.dataset.marginBlock);

    const saved = main.innerHTML;
    const style = document.head.appendChild(document.createElement("style"));
    style.textContent = `
        .pdf-sheet { width: ${210 - 2 * marginInline}mm; height: calc(${297 - 2 * marginBlock}mm - 2px); display: flex;
                     flex-direction: column; overflow: hidden; break-after: page; break-inside: avoid; }
        .pdf-sheet:last-child { break-after: auto; }
        .pdf-sheet-body { flex: 0 1 auto; min-height: 0; display: flow-root; }
        .pdf-sheet.building > .pdf-sheet-body { flex: none; }
        .pdf-sheet-body * { break-before: auto !important; }
        .pdf-sheet:not(.forced) > .pdf-sheet-body > :first-child { margin-top: 0 !important; }
        li[data-pdf-continued] { list-style-type: none; }
        .pdf-notes { flex: none; margin-top: auto; padding-top: 0.9em; font-size: 0.85em; line-height: 1.4; }
        .pdf-notes:not(:has(.pdf-note)) { display: none; }
        .pdf-notes-rule { width: 30%; border-top: 0.75px solid #444; margin-bottom: 0.4em; }
        .pdf-note { display: flex; align-items: baseline; gap: 0.3em; }
        .pdf-note + .pdf-note { margin-top: 0.15em; }
        .pdf-note-number { flex: none; width: 1.4em; text-align: end; font-size: 0.85em; position: relative; top: -0.3em; }
        .pdf-note-text { flex: 1 1 auto; min-width: 0; }
        .pdf-note-text > p { margin: 0; }
        .pdf-note-text > p + p { margin-top: 0.3em; }
        .pdf-note-text a.footnote-backref { display: none; }`;

    try {
        return paginate();
    } catch (error) {
        main.innerHTML = saved;
        style.remove();
        return { error: error instanceof Error ? error.stack ?? error.message : String(error) };
    }

    function paginate(): SheetsResult {
        // ---- The notes, and the blocks to lay out - their breaks read while they still stand in <main>.
        type Note = { number: number, item: Element, home: number | null, local: number };
        const notes = new Map<number, Note>();
        for (const item of section!.querySelectorAll(":scope > ol > li[data-footnote]")) {
            notes.set(Number((item as HTMLElement).dataset.footnote), { number: Number((item as HTMLElement).dataset.footnote), item, home: null, local: 0 });
        }
        section!.remove();
        const blocks = [...main!.children] as HTMLElement[];
        const forcedBefore = new Set(blocks.filter(block => isForced(getComputedStyle(block).breakBefore)));
        const keptWithNext = new Set(blocks.filter(block => /avoid/.test(getComputedStyle(block).breakAfter)));
        main!.replaceChildren();

        // ---- Sheets
        type Sheet = {
            element: HTMLElement, body: HTMLElement, notes: HTMLElement, index: number,
            count: number,
        };
        const sheets: Sheet[] = [];
        const warnings: string[] = [];
        let carried: HTMLElement[] = [];             // the rest of a note split on the sheet before
        let sheet = openSheet(true);
        const room = sheet.element.clientHeight;
        const minimumText = 3 * parseFloat(getComputedStyle(sheet.body).lineHeight || "20") || 60;

        function openSheet(forced: boolean): Sheet {
            const element = main!.appendChild(document.createElement("div"));
            element.className = `pdf-sheet building${forced ? " forced" : ""}`;
            const sheetBody = element.appendChild(document.createElement("div"));
            sheetBody.className = "pdf-sheet-body";
            const notesArea = element.appendChild(document.createElement("div"));
            notesArea.className = "pdf-notes";
            notesArea.appendChild(document.createElement("div")).className = "pdf-notes-rule";
            const opened: Sheet = { element, body: sheetBody, notes: notesArea, index: sheets.length, count: 0 };
            sheets.push(opened);
            for (const part of carried) notesArea.appendChild(part);
            carried = [];
            return opened;
        }

        function closeSheet(nextForced: boolean): void {
            // Notes carried on from the sheet before take no more than leaves a few lines of text.
            sheet = openSheet(nextForced);
            const parts = [...sheet.notes.querySelectorAll<HTMLElement>(":scope > .pdf-note")];
            if (parts.length && notesHeight() > room - minimumText) {
                const last = parts[parts.length - 1];
                const rest = splitNoteToFit(last, () => notesHeight() <= room - minimumText, 1);
                if (rest) carried.push(rest);
            }
        }

        function hasContent(): boolean {
            return [...sheet.body.children].some(child => (child as HTMLElement).getClientRects().length > 0);
        }

        function contentBottom(): number {
            const top = sheet.body.getBoundingClientRect().top;
            let bottom = 0;
            for (const child of sheet.body.children) {
                const rect = child.getBoundingClientRect();
                if (rect.height || rect.width) bottom = Math.max(bottom, rect.bottom - top);
            }
            return bottom;
        }

        function notesHeight(): number {
            return sheet.notes.querySelector(":scope > .pdf-note") ? sheet.notes.getBoundingClientRect().height : 0;
        }

        function fits(): boolean {
            return contentBottom() + notesHeight() <= room;
        }

        // ---- Notes

        function noteElement(note: Note, local: number | null): HTMLElement {
            const element = document.createElement("div");
            element.className = "pdf-note";
            const number = element.appendChild(document.createElement("span"));
            number.className = "pdf-note-number";
            number.textContent = local === null ? "" : String(local);
            const text = element.appendChild(document.createElement("div"));
            text.className = "pdf-note-text";
            for (const child of note.item.childNodes) text.appendChild(child.cloneNode(true));
            text.querySelectorAll("a.footnote-backref").forEach(link => link.remove());
            return element;
        }

        /** The notes `refs` would add to this sheet - those first referred to there - in order. */
        function newNotes(refs: HTMLElement[]): Note[] {
            const added: Note[] = [];
            for (const ref of refs) {
                const note = notes.get(Number(ref.dataset.footnote));
                if (note && note.home === null && !added.includes(note)) added.push(note);
            }
            return added;
        }

        /** Whether the sheet holds its text and the notes of `refs` - which are put back as they were. */
        function fitsWith(refs: HTMLElement[]): boolean {
            const added = newNotes(refs).map(note => sheet.notes.appendChild(noteElement(note, 0)));
            const answer = fits();
            added.forEach(element => element.remove());
            return answer;
        }

        /** The references in `element`, the ones laid out already left out. */
        function refsIn(element: Element): HTMLElement[] {
            return [...element.querySelectorAll<HTMLElement>("sup.footnote-ref:not([data-pdf-placed])")];
        }

        /**
         * Places the references of `element` on this sheet: numbers them, and adds the notes they are the first of.
         * @returns the notes it added, and how to take all of it back
         */
        function commit(element: Element): { added: HTMLElement[], undo: () => void } {
            const added: HTMLElement[] = [];
            const undo: (() => void)[] = [];
            for (const ref of refsIn(element)) {
                const note = notes.get(Number(ref.dataset.footnote));
                if (!note) continue;
                const target = ref.querySelector("a") ?? ref;
                const [text, href] = [target.textContent, target.getAttribute("href")];
                ref.dataset.pdfPlaced = "";
                undo.push(() => {
                    delete ref.dataset.pdfPlaced;
                    target.textContent = text;
                    if (href !== null) target.setAttribute("href", href);
                });
                if (note.home === null) {
                    note.home = sheet.index;
                    note.local = ++sheet.count;
                    const element = sheet.notes.appendChild(noteElement(note, note.local));
                    element.id = `pdf-note-${note.number}`;
                    added.push(element);
                    undo.push(() => {
                        note.home = null;
                        note.local = 0;
                        sheet.count--;
                        element.remove();
                    });
                }
                target.textContent = note.home === sheet.index ? String(note.local) : `${note.local} (${rtl ? "עמ'" : "p."} ${note.home + 1})`;
                if (target !== ref) target.setAttribute("href", `#pdf-note-${note.number}`);
            }
            return { added, undo: () => undo.reverse().forEach(step => step()) };
        }

        /**
         * Splits a note so that `ok()` holds, at least `minLines` of it staying, and gives back the rest - unnumbered - for
         * the next sheet; null, changing nothing, when it cannot be split so.
         */
        function splitNoteToFit(element: HTMLElement, ok: () => boolean, minLines: number): HTMLElement | null {
            const text = element.querySelector<HTMLElement>(":scope > .pdf-note-text")!;
            const points = breakPoints(text);
            let best = -1;
            for (let lo = minLines - 1, hi = points.length - 1; lo <= hi;) {
                const mid = (lo + hi) >> 1;
                const rest = splitAt(text, points[mid]);
                const good = ok();
                unsplit(text, rest);
                if (good) { best = mid; lo = mid + 1; } else hi = mid - 1;
            }
            if (best < 0) return null;
            const restText = splitAt(text, points[best]);
            const rest = document.createElement("div");
            rest.className = "pdf-note continued";
            rest.appendChild(document.createElement("span")).className = "pdf-note-number";
            rest.appendChild(restText);
            return rest;
        }

        // ---- Where a block may break

        type Point = { node: Node, offset: number, allowed: boolean };

        function isForced(value: string): boolean {
            return ["page", "left", "right", "recto", "verso"].includes(value);
        }

        function isBlockLevel(display: string): boolean {
            return !/^(inline|contents|none|ruby)/.test(display);
        }

        /** Whether an element is laid out whole - an image, an inline box, or a block kept whole that a sheet can hold. */
        function isAtomic(element: HTMLElement): boolean {
            if (/^(IMG|SVG|VIDEO|CANVAS|IFRAME|HR|SUMMARY)$/i.test(element.tagName)) return true;
            const computed = getComputedStyle(element);
            if (/^inline-/.test(computed.display)) return true;
            return /avoid/.test(computed.breakInside) && element.getBoundingClientRect().height <= room;
        }

        /** The place right before a node - in its parent. */
        function before(node: Node): { node: Node, offset: number } {
            const parent = node.parentNode!;
            return { node: parent, offset: Array.prototype.indexOf.call(parent.childNodes, node) };
        }

        /** Every place a block may break at, in order - its start excluded. */
        function breakPoints(container: HTMLElement): Point[] {
            const points: Point[] = [];
            const children = [...container.childNodes];
            const inline = children.some(child => child.nodeType === Node.TEXT_NODE ? !!child.textContent!.trim()
                : child.nodeType === Node.ELEMENT_NODE && !isBlockLevel(getComputedStyle(child as Element).display));
            if (!inline) {
                let previous: HTMLElement | null = null;
                for (const child of children) {
                    if (!(child instanceof HTMLElement) || !child.getClientRects().length) continue;
                    if (previous) {
                        const allowed = !/avoid/.test(getComputedStyle(previous).breakAfter) && !/avoid/.test(getComputedStyle(child).breakBefore)
                            && !(previous.tagName === "THEAD");
                        points.push({ ...before(child), allowed });
                    }
                    if (!isAtomic(child)) points.push(...breakPoints(child));
                    previous = child;
                }
                return points;
            }

            // Inline content: a point before every line but the first, and around every block within it.
            type Piece = { at: { node: Node, offset: number }, top: number, bottom: number } | { block: HTMLElement };
            const pieces: Piece[] = [];
            const collect = (node: Node) => {
                for (const child of [...node.childNodes]) {
                    if (child.nodeType === Node.TEXT_NODE) {
                        const text = child.textContent!;
                        for (const word of text.matchAll(/\S+/g)) {
                            const range = document.createRange();
                            range.setStart(child, word.index!);
                            range.setEnd(child, word.index! + word[0].length);
                            const rect = range.getBoundingClientRect();
                            if (rect.height) pieces.push({ at: { node: child, offset: word.index! }, top: rect.top, bottom: rect.bottom });
                        }
                    } else if (child instanceof HTMLElement) {
                        const display = getComputedStyle(child).display;
                        if (display === "none") continue;
                        if (isBlockLevel(display)) pieces.push({ block: child });
                        else if (/^inline-/.test(display) || child.tagName === "IMG") {
                            const rect = child.getBoundingClientRect();
                            if (rect.height) pieces.push({ at: before(child), top: rect.top, bottom: rect.bottom });
                        } else collect(child);
                    }
                }
            };
            collect(container);

            const lines: Point[] = [];
            let hasBlocks = false;
            let lineBottom = -Infinity, first = true;
            for (const piece of pieces) {
                if ("block" in piece) {
                    hasBlocks = true;
                    if (!first) lines.push({ ...before(piece.block), allowed: true });
                    if (!isAtomic(piece.block)) lines.push(...breakPoints(piece.block));
                    lineBottom = -Infinity;
                    first = false;
                    continue;
                }
                if (piece.top > lineBottom - 1) {
                    if (!first) lines.push({ ...piece.at, allowed: true });
                    lineBottom = piece.bottom;
                } else {
                    lineBottom = Math.max(lineBottom, piece.bottom);
                }
                first = false;
            }
            // Orphans and widows, in a paragraph of lines alone.
            const computed = getComputedStyle(container);
            const orphans = Number(computed.orphans) || 1, widows = Number(computed.widows) || 1;
            if (!hasBlocks) lines.forEach((point, i) => point.allowed = i + 1 >= orphans && lines.length - i >= widows);
            return lines;
        }

        // ---- Splitting an element, and putting it back

        /**
         * Splits `element` at `point`: it keeps what stands before, and a copy of it - given back - takes the rest. The
         * copies of the elements the point is inside are marked (`data-pdf-clone`), have no id, and go on as the
         * originals would: a list counting on, an item split in two without its marker again, a table with its head.
         */
        function splitAt(element: HTMLElement, point: Point): HTMLElement {
            let { node, offset } = point;
            // A point at the very start of a node is the point before it - no empty copy is left behind.
            while (node !== element && offset === 0) ({ node, offset } = before(node));
            const chain: Element[] = [element];
            for (let at: Node | null = node.nodeType === Node.TEXT_NODE ? node.parentNode : node; at && at !== element; at = at.parentNode) {
                chain.splice(1, 0, at as Element);
            }
            const range = document.createRange();
            range.setStart(node, offset);
            range.setEnd(element, element.childNodes.length);
            const rest = element.cloneNode(false) as HTMLElement;
            rest.append(range.extractContents());
            // The copies, level by level - each the first child of the one above.
            const copies: HTMLElement[] = [];
            for (let copy: Element | null = rest, level = 0; copy && level < chain.length; copy = copy.firstElementChild, level++) {
                copies.push(copy as HTMLElement);
            }
            copies.forEach((copy, level) => {
                const original = chain[level];
                copy.removeAttribute("id");
                copy.dataset.pdfClone = "";
                if (original.tagName === "LI" && level > 0) copy.dataset.pdfContinued = "";
                if (original instanceof HTMLOListElement) {
                    // The item split in two is counted once - in the part that stays; its copy has no marker.
                    const continued = copies[level + 1]?.hasAttribute("data-pdf-continued") ? 1 : 0;
                    (copy as HTMLOListElement).start = (original.start || 1) + original.children.length - continued;
                }
                const head = original.tagName === "TABLE" ? original.querySelector(":scope > thead") : null;
                if (head && !copy.querySelector(":scope > thead")) {
                    const headCopy = head.cloneNode(true) as HTMLElement;
                    headCopy.dataset.pdfHead = "";
                    copy.prepend(headCopy);
                }
            });
            return rest;
        }

        /** Puts back what splitAt() took out of `element`. */
        function unsplit(element: Element, rest: Element): void {
            rest.querySelectorAll("[data-pdf-head]").forEach(head => head.remove());
            const merge = (target: Element, copy: Element) => {
                const first = copy.firstChild;
                if (first instanceof HTMLElement && first.hasAttribute("data-pdf-clone") && target.lastChild instanceof Element) {
                    merge(target.lastChild, first);
                    first.remove();
                }
                target.append(...copy.childNodes);
            };
            merge(element, rest);
            element.normalize();
        }

        /** Whether a node stands before a point. */
        function isBefore(node: Node, point: Point): boolean {
            const range = document.createRange();
            range.setStart(point.node, point.offset);
            return range.comparePoint(node, 0) < 0;
        }

        /** Whether the sheet holds anything but `block`. */
        function hasContentBesides(block: HTMLElement): boolean {
            return [...sheet.body.children].some(child => child !== block && (child as HTMLElement).getClientRects().length > 0);
        }

        // ---- Laying the blocks out

        const queue = [...blocks];
        while (queue.length) {
            const block = queue.shift()!;
            if (getComputedStyle(block).display === "none") {
                sheet.body.appendChild(block);
                continue;
            }
            if (forcedBefore.has(block) && hasContent()) closeSheet(true);
            sheet.body.appendChild(block);
            if (fitsWith(refsIn(block))) {
                commit(block);
                continue;
            }

            // It does not fit whole. prefix(i): the block up to its i-th break point - -1 none of it, `n` all of it.
            const points = breakPoints(block);
            const n = points.length;
            const withPrefix = <T>(i: number, measure: () => T): T => {
                if (i >= n) return measure();
                if (i < 0) {
                    block.remove();
                    try { return measure(); } finally { sheet.body.appendChild(block); }
                }
                const rest = splitAt(block, points[i]);
                try { return measure(); } finally { unsplit(block, rest); }
            };
            // The references before each point - worked out on the whole block, before any trial splits it.
            const refs = refsIn(block);
            const refsBefore = points.map(point => refs.filter(ref => isBefore(ref, point)));
            const refsUpTo = (i: number) => i >= n ? refs : i < 0 ? [] : refsBefore[i];

            // The last place it still fits up to - with the notes of what it holds up to there - and the last one there
            // a break is welcome at.
            let last = -1;
            for (let lo = 0, hi = n - 1; lo <= hi;) {
                const mid = (lo + hi) >> 1;
                if (withPrefix(mid, () => fitsWith(refsUpTo(mid)))) { last = mid; lo = mid + 1; } else hi = mid - 1;
            }
            let chosen = last;
            while (chosen >= 0 && !points[chosen].allowed) chosen--;
            if (chosen < 0) chosen = last;
            const sheetHasMore = hasContentBesides(block);

            // The text of the next stretch would fit, but not with its notes: the stretch goes to the next sheet, with
            // its note whole - unless that leaves more than its share of this sheet empty; then the note is split.
            const next = chosen + 1;
            if (chosen >= 0 || sheetHasMore) {
                const textFits = withPrefix(next, () => fitsWith(refsUpTo(chosen)));
                const empty = withPrefix(chosen, () => {
                    const added = newNotes(refsUpTo(chosen)).map(note => sheet.notes.appendChild(noteElement(note, 0)));
                    const free = room - contentBottom() - notesHeight();
                    added.forEach(element => element.remove());
                    return free;
                });
                if (textFits && empty > keepWholeShare * room && placeSplittingNote(block, points, next)) continue;
            }

            if (chosen < 0 && sheetHasMore) {
                // The whole block goes to the next sheet - and a heading right above it, with it.
                block.remove();
                const moved: HTMLElement[] = [block];
                for (;;) {
                    const children = [...sheet.body.children] as HTMLElement[];
                    const lastChild = children[children.length - 1];
                    if (!lastChild || children.length === 1 || !keptWithNext.has(lastChild)
                        || lastChild.querySelector("sup.footnote-ref")) break;
                    lastChild.remove();
                    moved.unshift(lastChild);
                }
                queue.unshift(...moved);
                closeSheet(false);
                continue;
            }
            if (chosen < 0) {
                // Alone on its sheet, and not even its first stretch fits with its notes: the note is split - or, for a
                // block too tall for any sheet, it is laid out as it comes, and said.
                if (n && placeSplittingNote(block, points, 0)) continue;
                if (!n) {
                    commit(block);
                    warnings.push(`sheet ${sheet.index + 1}: a block too tall for a sheet (${block.tagName.toLowerCase()}) is cut`);
                    closeSheet(false);
                    continue;
                }
                chosen = 0;
            }
            const rest = splitAt(block, points[chosen]);
            commit(block);
            queue.unshift(rest);
            closeSheet(false);
        }
        // The rest of a note split on the last sheet gets a sheet of its own.
        while (carried.length) closeSheet(false);
        for (const each of sheets) each.element.classList.remove("building");

        // Every sheet checked: its text and its notes within it.
        for (const each of sheets) {
            const overflow = Math.round(each.body.scrollHeight - each.body.clientHeight);
            if (overflow > 1) warnings.push(`sheet ${each.index + 1}: its text runs ${overflow}px into its notes`);
        }
        const continued = sheets.filter(each => each.notes.querySelector(":scope > .pdf-note.continued")).map(each => each.index + 1);
        return { sheets: sheets.length, notes: notes.size, continued, warnings };

        /**
         * Places the block up to point `upTo` (`points.length`: all of it) on this sheet, the last note it adds split to
         * fit - at least two of its lines here - and closes the sheet. @returns false, changing nothing, when it cannot.
         */
        function placeSplittingNote(block: HTMLElement, points: Point[], upTo: number): boolean {
            const rest = upTo < points.length ? splitAt(block, points[upTo]) : null;
            const placed = commit(block);
            const lastNote = placed.added[placed.added.length - 1];
            const restOfNote = lastNote ? splitNoteToFit(lastNote, fits, 2) : null;
            if (!restOfNote) {
                placed.undo();
                if (rest) unsplit(block, rest);
                return false;
            }
            carried.push(restOfNote);
            if (rest) queue.unshift(rest);
            closeSheet(false);
            return true;
        }
    }
}
