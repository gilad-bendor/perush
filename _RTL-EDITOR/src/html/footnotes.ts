// Footnotes - `text[^a]` and, anywhere in the file (at its end, usually), `[^a]: the note`.
//
// markdown-it-footnote parses them; this is how a page shows them. On the page, the usual way: the references
// numbered 1, 2, 3... through the page, superscript links to their notes, and the notes gathered at the page's end,
// each linking back to its reference(s). On paper (the PDF), the notes stand at the foot of the sheet where they
// are first referred to, numbered from 1 on every sheet - which pdf-sheets.ts does, as the page lays itself out in
// sheets for that; what is here is what it works with:
//
// - Every reference is a `sup.footnote-ref`, saying which note it is (`data-footnote`, the page's number) and the
//   label it was written with (`data-label` - the layout tools measure a line as written, tool-kit.ts).
// - **On paper a reference is a box of a fixed width** (FOOTNOTE_REF_EM): two digits, or - for a further reference to
//   a note, `.again` - the room of `99 (עמ' 999)`, a reference to a note on an earlier sheet. The number written into
//   it moves nothing, so the sheets can be decided before the numbers are known. It is the same box under
//   `html.measuring-print`, where the layout tools measure a page as it is printed, and text-measure.ts reckons with it.
// - The notes are `section.footnotes > ol > li.footnote-item`, also with `data-footnote`.
//
// - Following a link between a reference and its note flashes what it leads to - the note, or the whole line the
//   reference stands in - yellow, fading out (FOOTNOTES_SCRIPT).
//
// Only a page with footnotes gets their style (footnotesStyle()) and script - every other page stays exactly as it was.

import type { MarkdownIt } from "markdown-it";
import type { Token } from "markdown-it";
import footnotePlugin from "markdown-it-footnote";
import { FOOTNOTE_REF_EM, FOOTNOTE_REF_SCALE } from "./text-measure.ts";

/** What markdown-it-footnote keeps in the env. */
type FootnotesEnv = { footnotes?: { list?: { label?: string, count?: number }[] } };

type Meta = { id: number, subId?: number, label?: string };

/** Whether the document has any footnote - after it is parsed. */
export function hasFootnotes(env: object): boolean {
    return !!(env as FootnotesEnv).footnotes?.list?.length;
}

/** How many times each note is referred to, by label - after the document is parsed. */
export function footnoteReferenceCounts(env: object): Map<string, number> {
    const list = (env as FootnotesEnv).footnotes?.list ?? [];
    return new Map(list.filter(note => note.label !== undefined).map(note => [note.label!, note.count ?? 0]));
}

/** Footnotes, for `markdown` - the page's renderer. */
export function useFootnotes(markdown: MarkdownIt): void {
    markdown.use(footnotePlugin);
    // `^[an inline note]` would turn text that happens to look like one into a note, on pages that have no footnotes.
    markdown.inline.ruler.disable("footnote_inline");
    const escape = markdown.utils.escapeHtml;
    const rules = markdown.renderer.rules;
    const number = (meta: Meta) => meta.id + 1;
    const refId = (meta: Meta) => `fnref-${number(meta)}${meta.subId ? `-${meta.subId + 1}` : ""}`;
    const countOf = (env: object | undefined, meta: Meta) => (env as FootnotesEnv | undefined)?.footnotes?.list?.[meta.id]?.count ?? 0;

    rules.footnote_ref = (tokens, index) => {
        const meta = tokens[index].meta as Meta;
        const again = meta.subId ? " again" : "";
        return `<sup class="footnote-ref${again}" data-footnote="${number(meta)}" data-label="${escape(meta.label ?? "")}">`
            + `<a href="#fn-${number(meta)}" id="${refId(meta)}">${number(meta)}</a></sup>`;
    };
    rules.footnote_block_open = () => `<section class="footnotes">\n<ol class="footnotes-list">\n`;
    rules.footnote_block_close = () => "</ol>\n</section>\n";
    rules.footnote_open = (tokens, index) => {
        const meta = tokens[index].meta as Meta;
        return `<li id="fn-${number(meta)}" class="footnote-item" data-footnote="${number(meta)}">`;
    };
    rules.footnote_close = () => "</li>\n";
    // Back to the reference - to each of them, numbered, when there are several.
    rules.footnote_anchor = (tokens, index, _options, env) => {
        const meta = tokens[index].meta as Meta;
        const which = countOf(env, meta) > 1 ? `<sup>${(meta.subId ?? 0) + 1}</sup>` : "";
        return ` <a href="#${refId(meta)}" class="footnote-backref">↩︎${which}</a>`;
    };
}

/** A heading's tokens without its footnote references - for an index entry, or a footer's title. */
export function withoutFootnoteRefs(tokens: Token[]): Token[] {
    return tokens.filter(token => token.type !== "footnote_ref");
}

/** How long what a footnote link leads to stays coloured - fading all along. */
const FLASH_SECONDS = 2;

/** The style of a page with footnotes. */
export function footnotesStyle(): string {
    // `scope` is "" on paper, and "html.measuring-print " where the layout tools measure for it.
    const boxes = (scope: string) => [
        `${scope}.footnote-ref { display: inline-block; text-align: start; text-indent: 0; }`,
        `${scope}body.rtl .footnote-ref { width: ${FOOTNOTE_REF_EM.first}em; }`,
        `${scope}body.rtl .footnote-ref.again { width: ${FOOTNOTE_REF_EM.again}em; }`,
        `${scope}body.ltr .footnote-ref { width: ${FOOTNOTE_REF_EM.firstLtr}em; }`,
        `${scope}body.ltr .footnote-ref.again { width: ${FOOTNOTE_REF_EM.againLtr}em; }`,
    ];
    return `
/* Footnotes (footnotes.ts). A reference does not make its line taller. */
.footnote-ref { font-size: ${FOOTNOTE_REF_SCALE}em; line-height: 0; vertical-align: super; white-space: nowrap; }
.footnote-ref a { text-decoration: none; }
.footnotes { margin-top: 2em; padding-top: 0.6em; border-top: 1px solid rgba(128, 128, 128, 0.5); font-size: 0.9em; }
.footnotes-list { margin: 0; padding-inline-start: 2.2em; }
.footnote-item { margin-bottom: 0.3em; }
.footnote-item > p { margin: 0; }
.footnote-backref { text-decoration: none; }
/* What a link between a reference and its note leads to flashes, and fades (FOOTNOTES_SCRIPT). */
@keyframes footnote-flash { from { background-color: #fff3b0; } to { background-color: transparent; } }
@keyframes footnote-flash-fade { from { opacity: 1; } to { opacity: 0; } }
.footnote-item.flash { animation: footnote-flash ${FLASH_SECONDS}s ease-in forwards; }
.footnote-line-flash { position: absolute; background: #fff3b0; mix-blend-mode: multiply; pointer-events: none;
                       border-radius: 3px; animation: footnote-flash-fade ${FLASH_SECONDS}s ease-in forwards; }
@media print { .footnote-line-flash { display: none; } }
/* On paper - and as the layout tools measure for it - a reference is a box of a fixed width. */
@media print {
    ${boxes("").join("\n    ")}
}
${boxes("html.measuring-print ").join("\n")}
`;
}

// Following a link between a reference and its note - either way - flashes what it leads to: the note, or the whole
// line the reference stands in, which `:target` cannot reach (the target is the reference's own link). A line is the
// reference's grouped line (line-rows.ts), or else the stretch between the line breaks around it in its block; it is
// marked by boxes laid over its rows, which fade and go. A click is listened to, not `hashchange`, which does not fire
// for a link followed a second time; a page opened at a note's or a reference's address flashes it too.
export const FOOTNOTES_SCRIPT = `
(() => {
    const MS = ${FLASH_SECONDS * 1000};
    function lineOf(ref) {
        const range = document.createRange();
        const grouped = ref.closest(".grouped-line");
        if (grouped) {
            range.selectNodeContents(grouped);
            return range;
        }
        const block = ref.closest("p, li, td, th, h1, h2, h3, h4, h5, h6, .line-row") || ref.parentNode;
        let node = ref;
        while (node.parentNode !== block) node = node.parentNode;
        let first = node, last = node;
        while (first.previousSibling && first.previousSibling.nodeName !== "BR") first = first.previousSibling;
        while (last.nextSibling && last.nextSibling.nodeName !== "BR") last = last.nextSibling;
        range.setStartBefore(first);
        range.setEndAfter(last);
        return range;
    }
    function flashLine(ref) {
        // One box a row: the range's boxes merged by the row they stand on.
        const rows = [];
        for (const rect of lineOf(ref).getClientRects()) {
            if (!rect.width || !rect.height) continue;
            const row = rows.find(r => rect.top < r.bottom - 2 && rect.bottom > r.top + 2);
            if (row) Object.assign(row, { left: Math.min(row.left, rect.left), right: Math.max(row.right, rect.right),
                                          top: Math.min(row.top, rect.top), bottom: Math.max(row.bottom, rect.bottom) });
            else rows.push({ left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });
        }
        for (const row of rows) {
            const mark = document.body.appendChild(document.createElement("div"));
            mark.className = "footnote-line-flash";
            Object.assign(mark.style, { left: row.left + scrollX - 2 + "px", top: row.top + scrollY + "px",
                                        width: row.right - row.left + 4 + "px", height: row.bottom - row.top + "px" });
            setTimeout(() => mark.remove(), MS);
        }
    }
    function flashNote(item) {
        item.classList.remove("flash");
        void item.offsetWidth;              // restarts the animation of a note flashed a moment ago
        item.classList.add("flash");
    }
    function flash(id) {
        const target = id && document.getElementById(id);
        if (!target) return;
        if (target.classList.contains("footnote-item")) flashNote(target);
        const ref = target.closest("sup.footnote-ref");
        if (ref) flashLine(ref);
    }
    const idOf = hash => { try { return decodeURIComponent(hash.slice(1)); } catch { return hash.slice(1); } };
    document.addEventListener("click", event => {
        const link = event.target.closest && event.target.closest(".footnote-ref a, a.footnote-backref");
        if (link) setTimeout(() => flash(idOf(link.getAttribute("href"))), 0);
    });
    if (location.hash) addEventListener("load", () => flash(idOf(location.hash)));
})();
`;
