// Numbered lines run together.
//
// A translation of an ancient text is written a line of the tablet per line of the file, each opening
// with its number: `**1** כאשר אָנוּ הנעלה,`, `**2** מלך הָאֲנוּנָּכִּי,`. A tablet's line is often two
// words, and a page of them is a narrow column down one edge of the sheet. So on the page, consecutive
// numbered lines flow together as far as the width allows - each line kept whole, never split - with a
// thin separator between two lines sharing a row, and the number shown only for the line a row starts
// with, in a margin of its own.
//
// Where the rows break is the browser's to know, not ours: the page carries a small script
// (VERSE_RUNS_SCRIPT) that measures where every line landed, and marks which ones start a row and
// which end one. Marking changes only what is visible - the number sits in the margin, the separator
// keeps its width - so one pass is enough. Without the script each line stands on a row of its own,
// its number in the margin, which is how the file reads anyway.
//
// For paper the measuring is done at the sheet's width: on `beforeprint` (which pdf-mirror.ts sends
// before every PDF) the page is laid out the way @media print will lay it out, measured, and let go.

import type { StateCore, Token } from "markdown-it";
import { ROW_MARK } from "./layout-marks";

/** The margin of a printed sheet, on either side - `@page` in PAGE_STYLE, and the width measured for print. */
export const PRINT_MARGIN_INLINE_MM = 16;
export const PRINT_MARGIN_BLOCK_MM = 18;
export const PRINT_FONT_SIZE_PT = 11.5;
export const PRINT_FONT_SIZE = `${PRINT_FONT_SIZE_PT}pt`;

/**
 * A line number as a list of pieces - the numbers and what stands between them - which concatenate
 * back to the label: `A.i.5` → `["A.i.", "5"]`, `12 II 712x7` → `["12", " II ", "712", "x", "7"]`.
 */
export function labelPieces(label: string): string[] {
    return label.split(/(\d+)/).filter(piece => piece !== "");
}

/**
 * Whether `next` is the line right after `previous`: the same label, but for one number that went up
 * by exactly one. `o iii 12` → `o iii 13` is; `A.i.30` → `A.ii.1` (a new column), `12–14` → `15–17`
 * (a range that is not next) and `5` → `7` (a gap) are not - and those are just the places a reader should see a break.
 *
 * A letter after the number - Hebrew, or a lowercase Latin one - marks a line that only some manuscripts
 * have, read after the line of that number: `363` → `363א` → `363ב` → … → `364` is a run too, and so is
 * `E 78` → `E 78a` → `E 79`. A range is a line standing for several: `65` → `66–67` → `68`.
 */
export function continuesLabel(previous: string, next: string): boolean {
    const a = splitVariant(rangeEnds(previous)[1]);
    const b = splitVariant(rangeEnds(next)[0]);
    if (!a.letter && !b.letter) return numbersContinue(a.base, b.base);
    const letters = (a.letter ?? b.letter)!.match(/[a-z]/) ? LATIN_LETTERS : HEBREW_LETTERS;
    if (a.letter && b.letter) return a.base === b.base && letters.includes(b.letter) && letters.indexOf(b.letter) === letters.indexOf(a.letter) + 1;
    if (!a.letter && b.letter) return a.base === b.base && b.letter === letters[0];
    return numbersContinue(a.base, b.base);
}

const HEBREW_LETTERS = "אבגדהוזחטיכלמנסעפצקרשת";
const LATIN_LETTERS = "abcdefghijklmnopqrstuvwxyz";

/** `363ב` → `363` and `ב`, `E 78a` → `E 78` and `a`; a label with no such letter is all base. */
function splitVariant(label: string): { base: string, letter: string | null } {
    const match = /^(.*\d)([א-תa-z])$/.exec(label);
    return match ? { base: match[1], letter: match[2] } : { base: label, letter: null };
}

/** A range stands for its first line and its last: `E 66–67` → `E 66`, `E 67`. Any other label for both. */
function rangeEnds(label: string): [string, string] {
    const match = /^(.*?)(\d+)[–-](\d+)(\D*)$/.exec(label);
    if (!match || Number(match[3]) <= Number(match[2])) return [label, label];
    return [match[1] + match[2] + match[4], match[1] + match[3] + match[4]];
}

function numbersContinue(previous: string, next: string): boolean {
    const a = labelPieces(previous);
    const b = labelPieces(next);
    if (a.length !== b.length) return false;
    let differing = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) continue;
        if (++differing > 1) return false;
        if (!/^\d+$/.test(a[i]) || !/^\d+$/.test(b[i]) || Number(b[i]) !== Number(a[i]) + 1) return false;
    }
    return differing === 1;
}

/**
 * Whether the bold text a line opens with is a line number: short, holding a digit, and with no
 * Hebrew or Arabic letter - which is what tells `**A.i.5**` from `**1. הצבה פיזית**` or `**ת0.1**` -
 * but for one Hebrew letter right after its last digit, a manuscript's extra line: `**363א**`.
 */
export function isVerseLabel(text: string): boolean {
    const base = splitVariant(text).base;
    return text.length <= 24 && /\d/.test(base) && !/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF*]/.test(base);
}

/** Put at the start of a line, before its label: "a new row starts here" - see layout-marks.ts. */
export { ROW_MARK };

type Env = { hasVerseRuns?: boolean, verseSourceLines?: boolean };

/**
 * The core rule: every paragraph's runs of two or more consecutive numbered lines become a `.verse-run`,
 * of one `.verse-row` - or of several, where the text marks a row's start.
 */
export function verseRunsRule(state: StateCore): void {
    const env = state.env as Env;
    for (const block of state.tokens) {
        if (block.type !== "inline" || !block.children) continue;
        if (!block.children.some(isBreak)) {
            // No run without a second line - but a row mark may still be there to drop.
            for (const token of block.children) stripRowMark(token);
            continue;
        }
        const firstLine = env.verseSourceLines && block.map ? block.map[0] : null;
        const regrouped = regroup(block.children, state, firstLine);
        if (regrouped) {
            block.children = regrouped;
            env.hasVerseRuns = true;
        }
    }
}

type Line = { tokens: Token[], lineBreak: Token | null, label: string | null, rowStart: boolean };

function isBreak(token: Token): boolean {
    return token.type === "softbreak" || token.type === "hardbreak";
}

/** Drops a row mark from a text token - and says whether there was one. */
function stripRowMark(token: Token): boolean {
    if (token.type !== "text" || !token.content.includes(ROW_MARK)) return false;
    token.content = token.content.split(ROW_MARK).join("");
    return true;
}

function splitLines(children: Token[]): Line[] {
    const lines: Line[] = [];
    let tokens: Token[] = [];
    let rowStart = false;
    const end = (lineBreak: Token | null) => {
        lines.push({ tokens, lineBreak, label: lineLabel(tokens), rowStart });
        tokens = [];
        rowStart = false;
    };
    for (const token of children) {
        if (isBreak(token)) {
            end(token);
            continue;
        }
        if (stripRowMark(token)) rowStart = true;
        // The emphasis parser leaves an empty text token where a `**` opened a line.
        if (!(token.type === "text" && token.content === "")) tokens.push(token);
    }
    end(null);
    return lines;
}

/** `**<label>**` opening the line, and a space or nothing after it. */
function lineLabel(tokens: Token[]): string | null {
    const [open, text, close, after] = tokens;
    if (open?.type !== "strong_open" || open.markup !== "**") return null;
    if (text?.type !== "text" || close?.type !== "strong_close") return null;
    if (after && !(after.type === "text" && /^\s/.test(after.content))) return null;
    return isVerseLabel(text.content) ? text.content : null;
}

/** The runs of a paragraph's lines, as [first, last] index pairs - two lines or more each. */
function findRuns(lines: Line[]): [number, number][] {
    const runs: [number, number][] = [];
    for (let i = 0; i < lines.length;) {
        let last = i;
        if (lines[i].label !== null) {
            while (last + 1 < lines.length && lines[last + 1].label !== null
                && continuesLabel(lines[last].label!, lines[last + 1].label!)) last++;
        }
        if (last > i) runs.push([i, last]);
        i = last + 1;
    }
    return runs;
}

/**
 * The paragraph's tokens with its runs wrapped up, or null when it has none.
 *
 * @param firstLine  the paragraph's first source line, to be written on every line of a run as
 *                   `data-source-line` - for the layout tool, which has to know which line is which
 */
function regroup(children: Token[], state: StateCore, firstLine: number | null): Token[] | null {
    const lines = splitLines(children);
    const runs = findRuns(lines);
    if (!runs.length) return null;

    const html = (content: string) => Object.assign(new state.Token("html_inline", "", 0), { content });
    const text = (content: string) => Object.assign(new state.Token("text", "", 0), { content });
    const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    // One margin for the paragraph, so that its rows - and runs - all begin at the same place.
    const widest = Math.max(...runs.flatMap(([from, to]) => lines.slice(from, to + 1).map(line => line.label!.length)));
    const margin = `--label-width: ${(widest * 1.1).toFixed(1)}ch`;

    const out: Token[] = [];
    let next = 0;
    for (const [from, to] of runs) {
        for (; next < from; next++) {
            out.push(...lines[next].tokens);
            if (lines[next].lineBreak) out.push(lines[next].lineBreak!);
        }
        // A run is a block: the line break before it, and the one after it, would only add an empty row.
        if (out.length && isBreak(out[out.length - 1])) out.pop();
        out.push(html(`<span class="verse-run" style="${margin}"><span class="verse-row">`));
        for (let k = from; k <= to; k++) {
            const line = lines[k];
            if (k > from) out.push(line.rowStart ? html(`</span><span class="verse-row">`) : text(" "));
            const rest = line.tokens.slice(3);
            if (rest[0]?.type === "text") rest[0] = text(rest[0].content.replace(/^\s+/, ""));
            const source = firstLine === null ? "" : ` data-source-line="${firstLine + k}"`;
            out.push(html(`<span class="verse-line"${source}><b class="verse-label">${escape(line.label!)}</b>`));
            out.push(...rest);
            out.push(html(`<span class="verse-sep" aria-hidden="true"></span></span>`));
        }
        out.push(html("</span></span>"));
        next = to + 1;
    }
    for (; next < lines.length; next++) {
        out.push(...lines[next].tokens);
        if (lines[next].lineBreak) out.push(lines[next].lineBreak!);
    }
    return out;
}

export const VERSE_RUNS_STYLE = `
/* Numbered lines run together (verse-runs.ts). Without the script, a line per row and its number in
   the margin; with it (.flowing), the lines share rows and only a row's first number shows. */
.verse-run { display: block; padding-inline-start: calc(var(--label-width) + 0.5em); }
.verse-row { display: block; }
.verse-line { display: block; position: relative; }
.verse-label { position: absolute; inset-inline-end: 100%; padding-inline-end: 0.5em; white-space: nowrap; unicode-bidi: isolate; }
.verse-sep { display: none; }
.verse-run.flowing .verse-line { display: inline-block; max-width: 100%; vertical-align: top; }
.verse-run.flowing .verse-line:not(.row-start) > .verse-label { visibility: hidden; }
.verse-run.flowing .verse-sep {
    display: inline-block;
    width: 1px;
    height: 0.85em;
    margin-inline: 0.45em 0.2em;
    vertical-align: -0.05em;
    background: #aaa;
}
.verse-run.flowing .verse-line.row-end > .verse-sep { visibility: hidden; }
/* For the moment of measuring before print: the column as @media print will make it. */
html.measuring-print body { padding: 0; font-size: ${PRINT_FONT_SIZE}; }
html.measuring-print main { max-width: none; width: calc(210mm - ${2 * PRINT_MARGIN_INLINE_MM}mm); }
@media print { .verse-line { break-inside: avoid; } }
`;

// Marks every line that starts a row (.row-start) and every one that ends one (.row-end) - within each
// .verse-row, whose first line always starts one. Run again on
// a resize, once the fonts are in, and before printing - at the sheet's width, under .measuring-print.
export const VERSE_RUNS_SCRIPT = `
(() => {
    const runs = document.querySelectorAll(".verse-run");
    let printing = false;
    function layout() {
        for (const run of runs) run.classList.add("flowing");
        for (const row of document.querySelectorAll(".verse-row")) {
            let previous = null, previousTop = 0;
            for (const line of row.querySelectorAll(":scope > .verse-line")) {
                const top = line.getBoundingClientRect().top;
                const starts = previous === null || top > previousTop + 1;
                line.classList.toggle("row-start", starts);
                if (previous) previous.classList.toggle("row-end", starts);
                previous = line;
                previousTop = top;
            }
            if (previous) previous.classList.add("row-end");
        }
    }
    layout();
    document.fonts && document.fonts.ready.then(() => printing || layout());
    let frame = 0;
    addEventListener("resize", () => {
        if (printing) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(layout);
    });
    addEventListener("beforeprint", () => {
        printing = true;
        const root = document.documentElement;
        root.classList.add("measuring-print");
        layout();
        root.classList.remove("measuring-print");
    });
    addEventListener("afterprint", () => { printing = false; layout(); });
})();
`;
