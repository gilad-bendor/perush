// Lines that share printed rows - a primitive a file's layout uses, with no idea of what the lines are.
//
// A layout (layout-module.ts) may gather consecutive source lines of a paragraph into a **group**, and say
// where the group's printed rows start, and what of each line's start is a note for the margin - a
// translation's line numbers, say. It says so with marks in the text (layout-marks.ts), which this core
// rule reads, and drops:
//
//     GROUP_MARK  this line opens a group            LINE_MARK   this line goes on with the group above
//     ROW_MARK    (after LINE_MARK) and starts a row  MARGIN_MARK what stands before it is the margin note
//
// On the page a group is a `.line-group` of `.line-row`s (blocks) of `.grouped-line`s: the lines of a row
// stand side by side, a thin grey bar between them, each whole; only the note of the line a row starts
// with shows, in a margin of its own - one width for the paragraph, made for its widest note, so its
// groups line up. A group that names no rows (the layout's `"auto"`) is one row, which wraps where the
// width runs out.
//
// Which line a row - as the browser wrapped it - starts with is the browser's to know: the page carries a
// small script (LINE_ROWS_SCRIPT) that marks `.row-start` / `.row-end` by where each line landed. That changes
// only what is visible - the note sits in the margin, the separator keeps its width - so one pass is
// enough. Without the script every line stands on a row of its own, its note in the margin. For paper the
// measuring is done at the sheet's width: on `beforeprint` (which pdf-mirror.ts sends before every PDF) the
// page is laid out as @media print will lay it out, measured, and let go.

import type { StateCore, Token } from "markdown-it";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK, ROW_MARK, stripLayoutMarks } from "./layout-marks";

/** The printed sheet: its margins on either side and top and bottom, and the text's size - `@page` in PAGE_STYLE. */
export const PRINT_MARGIN_INLINE_MM = 16;
export const PRINT_MARGIN_BLOCK_MM = 18;
export const PRINT_FONT_SIZE_PT = 11.5;
export const PRINT_FONT_SIZE = `${PRINT_FONT_SIZE_PT}pt`;

type Env = { hasLineRows?: boolean, sourceLines?: boolean };

/** The core rule: every paragraph's marked groups become `.line-group`s; every mark is dropped. */
export function lineRowsRule(state: StateCore): void {
    const env = state.env as Env;
    for (const block of state.tokens) {
        if (block.type !== "inline" || !block.children) continue;
        const marked = block.children.some(token => token.type === "text" && /[]/.test(token.content));
        if (marked) {
            const firstLine = env.sourceLines && block.map ? block.map[0] : null;
            block.children = regroup(block.children, state, firstLine);
            env.hasLineRows = true;
        }
        for (const token of block.children) {
            if (token.type === "text") token.content = stripLayoutMarks(token.content);
        }
    }
}

type Line = {
    tokens: Token[];
    lineBreak: Token | null;
    group: "opens" | "goes-on" | null;
    rowStart: boolean;
    /** The tokens of its margin note - before MARGIN_MARK - and of the rest of it. */
    margin: Token[];
    body: Token[];
};

function isBreak(token: Token): boolean {
    return token.type === "softbreak" || token.type === "hardbreak";
}

function splitLines(children: Token[], state: StateCore): Line[] {
    const lines: Line[] = [];
    let tokens: Token[] = [];
    const end = (lineBreak: Token | null) => {
        lines.push(readLine(tokens, lineBreak, state));
        tokens = [];
    };
    for (const token of children) {
        if (isBreak(token)) end(token);
        // The emphasis parser leaves an empty text token where a `**` opened a line.
        else if (!(token.type === "text" && token.content === "")) tokens.push(token);
    }
    end(null);
    return lines;
}

/** A line's marks read off its start, and its margin note split from the rest. */
function readLine(tokens: Token[], lineBreak: Token | null, state: StateCore): Line {
    const first = tokens[0];
    const lead = first?.type === "text" ? /^[]*/.exec(first.content)![0] : "";
    const group = lead.includes(GROUP_MARK) ? "opens" : lead.includes(LINE_MARK) ? "goes-on" : null;
    const line: Line = { tokens, lineBreak, group, rowStart: lead.includes(ROW_MARK), margin: [], body: tokens };
    if (!group) return line;

    const text = (content: string) => Object.assign(new state.Token("text", "", 0), { content });
    const rest = [...tokens];
    rest[0] = text(first.content.slice(lead.length).replace(/^\s+/, ""));
    const at = rest.findIndex(token => token.type === "text" && token.content.includes(MARGIN_MARK));
    if (at < 0) {
        line.body = rest;
        return line;
    }
    const [before, after] = [rest[at].content.slice(0, rest[at].content.indexOf(MARGIN_MARK)),
        rest[at].content.slice(rest[at].content.indexOf(MARGIN_MARK) + 1)];
    line.margin = [...rest.slice(0, at), ...before.trimEnd() ? [text(before.trimEnd())] : []]
        .filter(token => !(token.type === "text" && token.content === ""));
    line.body = [...after.replace(/^\s+/, "") ? [text(after.replace(/^\s+/, ""))] : [], ...rest.slice(at + 1)];
    return line;
}

/** A margin note's plain text - what its width is reckoned by. */
function plainText(tokens: Token[]): string {
    return tokens.map(token => token.type === "text" || token.type === "code_inline" ? token.content : "").join("");
}

/**
 * The paragraph's tokens with its groups wrapped up.
 *
 * @param firstLine  the paragraph's first source line, to be written on every grouped line as
 *                   `data-source-line` - for the layout tools, which have to know which line is which
 */
function regroup(children: Token[], state: StateCore, firstLine: number | null): Token[] {
    const lines = splitLines(children, state);
    // The groups, as [first, last] line indexes: a line that opens one, and the lines that go on with it.
    const groups: [number, number][] = [];
    for (let i = 0; i < lines.length;) {
        if (!lines[i].group) { i++; continue; }
        let last = i;
        while (last + 1 < lines.length && lines[last + 1].group === "goes-on") last++;
        groups.push([i, last]);
        i = last + 1;
    }

    const html = (content: string) => Object.assign(new state.Token("html_inline", "", 0), { content });
    const text = (content: string) => Object.assign(new state.Token("text", "", 0), { content });
    // One margin for the paragraph, so that its rows - and groups - all begin at the same place.
    const widest = Math.max(0, ...groups.flatMap(([from, to]) => lines.slice(from, to + 1).map(line => plainText(line.margin).length)));
    const margin = `--margin-width: ${(widest * 1.1).toFixed(1)}ch`;

    const out: Token[] = [];
    let next = 0;
    const plain = (line: Line) => {
        out.push(...line.tokens);
        if (line.lineBreak) out.push(line.lineBreak);
    };
    for (const [from, to] of groups) {
        for (; next < from; next++) plain(lines[next]);
        // A group is a block: the line break before it, and the one after it, would only add an empty row.
        if (out.length && isBreak(out[out.length - 1])) out.pop();
        out.push(html(`<span class="line-group" style="${margin}"><span class="line-row">`));
        for (let k = from; k <= to; k++) {
            const line = lines[k];
            if (k > from) out.push(line.rowStart ? html(`</span><span class="line-row">`) : text(" "));
            const source = firstLine === null ? "" : ` data-source-line="${firstLine + k}"`;
            out.push(html(`<span class="grouped-line"${source}><span class="line-margin">`), ...line.margin, html("</span>"));
            out.push(...line.body);
            out.push(html(`<span class="line-sep" aria-hidden="true"></span></span>`));
        }
        out.push(html("</span></span>"));
        next = to + 1;
    }
    for (; next < lines.length; next++) plain(lines[next]);
    return out;
}

export const LINE_ROWS_STYLE = `
/* Lines that share rows (line-rows.ts). Without the script, a line per row and its note in the margin;
   with it (.flowing), the lines share rows and only a row's first note shows. */
.line-group { display: block; padding-inline-start: calc(var(--margin-width) + 0.5em); }
.line-row { display: block; }
.grouped-line { display: block; position: relative; }
.line-margin { position: absolute; inset-inline-end: 100%; padding-inline-end: 0.5em; white-space: nowrap; unicode-bidi: isolate; }
.line-sep { display: none; }
.line-group.flowing .grouped-line { display: inline-block; max-width: 100%; vertical-align: top; }
.line-group.flowing .grouped-line:not(.row-start) > .line-margin { visibility: hidden; }
.line-group.flowing .line-sep {
    display: inline-block;
    width: 1px;
    height: 0.85em;
    margin-inline: 0.45em 0.2em;
    vertical-align: -0.05em;
    background: #aaa;
}
.line-group.flowing .grouped-line.row-end > .line-sep { visibility: hidden; }
/* For the moment of measuring before print: the column as @media print will make it. */
html.measuring-print body { padding: 0; font-size: ${PRINT_FONT_SIZE}; }
html.measuring-print main { max-width: none; width: calc(210mm - ${2 * PRINT_MARGIN_INLINE_MM}mm); }
@media print { .grouped-line { break-inside: avoid; } }
`;

// Marks every line that starts a row (.row-start) and every one that ends one (.row-end) - within each
// .line-row, whose first line always starts one. Run again on a resize, once the fonts are in, and before
// printing - at the sheet's width, under .measuring-print.
export const LINE_ROWS_SCRIPT = `
(() => {
    const groups = document.querySelectorAll(".line-group");
    let printing = false;
    function layout() {
        for (const group of groups) group.classList.add("flowing");
        for (const row of document.querySelectorAll(".line-row")) {
            let previous = null, previousTop = 0;
            for (const line of row.querySelectorAll(":scope > .grouped-line")) {
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
