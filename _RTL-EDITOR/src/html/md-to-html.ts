// A Markdown file as a readable, self-contained HTML page.
//
// The page is meant to *look* like the file does in the editor - the same fonts, heading sizes,
// shaded inline code and coloured pseudo-tag blocks - but to *read* like a document: the Markdown
// syntax characters are gone. On top of plain Markdown it knows this project's own conventions:
//
// - A single line break is a line break. The files are written a sentence per line, and the editor
//   shows them that way; standard Markdown would run the lines together into one paragraph.
// - A table in any of tables.js's three formats becomes an HTML <table>, with no header row - the
//   editor has none either (see renderTable() in tables.js).
// - `<עיון>` ... `</עיון>` on lines of their own become a box captioned with the tag's name, holding
//   the Markdown between them.
// - `*...*` and `**...**` inside an inline-code span are bold, as inlineCodeEmphasisPlugin shows them.
// - A file with enough headings opens with an index of them - "תוכן העניינים" in an RTL page,
//   "Contents" in an LTR one.
//
// Pure: content in, HTML out. Which file goes where, and when, is html-mirror.ts's business.

import MarkdownIt from "markdown-it";
import type { StateBlock, StateCore, Token } from "markdown-it";
import { isRtlFile, parseTables } from "../../public/src/tables.js";

export type RenderOptions = {
    /** Rewrites a link's href - the page does not live next to the file it was made from. */
    hrefFor?: (href: string) => string;
};

type Env = {
    tablesByFirstLine?: Map<number, { lineCount: number, rows: string[][][] }>;
    hrefFor?: (href: string) => string;
};

const markdown = new MarkdownIt({
    // Raw HTML is shown as text, the way the editor shows it: nothing in a file may break the page.
    html: false,
    breaks: true,
    linkify: false,
    typographer: false,
});

// Our table rule replaces the GFM one: it knows the box formats too, and makes no header row.
markdown.disable("table");

// ------------------------------------------------------------------------------------------------
// Tables

markdown.block.ruler.before("code", "box_table", boxTableRule, { alt: ["paragraph", "reference", "blockquote", "list"] });

function boxTableRule(state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean {
    const env = state.env as Env;
    // Parsed once per document. Line numbers are the source's own, nested blocks included - a
    // pseudo-tag's content is tokenized on the very same state - so they can be looked up directly.
    env.tablesByFirstLine ??= new Map(parseTables(state.src).map(table => [table.firstLine, table]));
    const table = env.tablesByFirstLine.get(startLine);
    if (!table || startLine + table.lineCount > endLine) return false;
    if (silent) return true;

    const { rows, lineCount } = table;

    const nextLine = startLine + lineCount;
    state.push("table_open", "table", 1).map = [startLine, nextLine];
    state.push("tbody_open", "tbody", 1);
    for (const row of rows) {
        state.push("tr_open", "tr", 1);
        const columnCount = row[0]?.length ?? 0;
        for (let column = 0; column < columnCount; column++) {
            state.push("td_open", "td", 1);
            const inline = state.push("inline", "", 0);
            // A cell split over several lines keeps its line breaks. The other columns of such a row
            // have been padded with empty lines, which must not turn into trailing breaks.
            inline.content = row.map(line => line[column] ?? "").join("\n").replace(/^\n+|\n+$/g, "");
            inline.children = [];
            state.push("td_close", "td", -1);
        }
        state.push("tr_close", "tr", -1);
    }
    state.push("tbody_close", "tbody", -1);
    state.push("table_close", "table", -1);
    state.line = nextLine;
    return true;
}

// ------------------------------------------------------------------------------------------------
// Pseudo-tags

// `<עיון>` or `<ניתוח-לשוני ביטוי="רֶמֶשׂ">`, alone on its line. The name has to hold a non-ASCII
// letter: a real HTML tag name is ASCII-only, so that is what tells `<עיון>` from a stray `<div>`.
const PSEUDO_TAG_OPEN = /^<([-\p{L}\d]*[^\x00-\x7F][-\p{L}\d]*)((?:\s+[^>]*)?)>\s*$/u;

markdown.block.ruler.before("fence", "pseudo_tag", pseudoTagRule, { alt: ["paragraph", "reference", "blockquote", "list"] });

function lineText(state: StateBlock, line: number): string {
    return state.src.slice(state.bMarks[line] + state.tShift[line], state.eMarks[line]);
}

function pseudoTagRule(state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean {
    const open = PSEUDO_TAG_OPEN.exec(lineText(state, startLine));
    if (!open) return false;
    const [, name, attributes] = open;

    // Only a tag that is closed further down is a block - otherwise the line is just text.
    let closingLine = -1;
    let depth = 0;
    for (let line = startLine + 1; line < endLine; line++) {
        const text = lineText(state, line);
        const nested = PSEUDO_TAG_OPEN.exec(text);
        if (nested && nested[1] === name) {
            depth++;
        } else if (text.trimEnd() === `</${name}>`) {
            if (depth === 0) {
                closingLine = line;
                break;
            }
            depth--;
        }
    }
    if (closingLine < 0) return false;
    if (silent) return true;

    const openToken = state.push("pseudo_tag_open", "div", 1);
    openToken.block = true;
    openToken.info = name;
    openToken.meta = { attributeValues: [...attributes.matchAll(/=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g)].map(m => m[1] ?? m[2] ?? m[3]) };
    openToken.map = [startLine, closingLine + 1];

    const oldParentType = state.parentType;
    const oldLineMax = state.lineMax;
    state.parentType = "pseudo_tag";
    state.lineMax = closingLine;
    state.md.block.tokenize(state, startLine + 1, closingLine);
    state.parentType = oldParentType;
    state.lineMax = oldLineMax;

    state.push("pseudo_tag_close", "div", -1).block = true;
    state.line = closingLine + 1;
    return true;
}

markdown.renderer.rules.pseudo_tag_open = (tokens, index) => {
    const { info: name, meta } = tokens[index];
    const escape = markdown.utils.escapeHtml;
    const values = (meta as { attributeValues: string[] }).attributeValues;
    const caption = escape(name) + (values.length ? `: ${values.map(escape).join(", ")}` : "");
    return `<div class="pseudo-tag" data-tag="${escape(name)}">\n<div class="pseudo-tag-caption">${caption}</div>\n`;
};
markdown.renderer.rules.pseudo_tag_close = () => "</div>\n";

// ------------------------------------------------------------------------------------------------
// Emphasis inside inline code

// The same expression inlineCodeEmphasisPlugin uses: ** before *, neither empty nor across a line.
const CODE_EMPHASIS = /\*\*[^*\n]+\*\*|\*[^*\n]+\*/g;

markdown.renderer.rules.code_inline = (tokens, index, _options, _env, renderer) => {
    const token = tokens[index];
    const escape = markdown.utils.escapeHtml;
    let html = "";
    let last = 0;
    for (const match of token.content.matchAll(CODE_EMPHASIS)) {
        const stars = match[0].startsWith("**") ? 2 : 1;
        html += escape(token.content.slice(last, match.index))
            + `<strong>${escape(match[0].slice(stars, -stars))}</strong>`;
        last = match.index + match[0].length;
    }
    html += escape(token.content.slice(last));
    return `<code${renderer.renderAttrs(token)}>${html}</code>`;
};

// ------------------------------------------------------------------------------------------------
// Links

markdown.core.ruler.push("rewrite_hrefs", (state: StateCore) => {
    const { hrefFor } = state.env as Env;
    if (!hrefFor) return;
    const visit = (tokens: Token[]) => {
        for (const token of tokens) {
            if (token.type === "link_open") {
                const href = token.attrGet("href");
                // The href is stored normalized (percent-encoded); the rewriting works on the path as written.
                if (typeof href === "string" && href) token.attrSet("href", markdown.normalizeLink(hrefFor(safeDecodeUri(href))));
            }
            if (token.children) visit(token.children);
        }
    };
    visit(state.tokens);
});

function safeDecodeUri(href: string): string {
    try {
        return decodeURI(href);
    } catch {
        return href;
    }
}

// ------------------------------------------------------------------------------------------------
// The page

/** The body of the page - exported for the tests. */
export function markdownToHtml(content: string, options: RenderOptions = {}): string {
    const env: Env = { hrefFor: options.hrefFor };
    return markdown.render(content, env);
}

/**
 * A whole, self-contained HTML page for the Markdown file at `filePath`.
 *
 * @param filePath  as the file tree names it - decides the direction and the fallback title
 */
export function renderMarkdownPage(content: string, filePath: string, options: RenderOptions = {}): string {
    const env: Env = { hrefFor: options.hrefFor };
    const tokens = markdown.parse(content, env);
    const isRtl = isRtlFile(filePath, content);
    // Before the body is rendered: it is what gives the headings their ids.
    const index = renderIndex(tokens, isRtl, env);
    const body = markdown.renderer.render(tokens, markdown.options, env);
    const fileName = filePath.split("/").pop() ?? filePath;
    const title = firstHeadingText(tokens) ?? fileName.replace(/(\.rtl)?\.md$/, "");
    const escape = markdown.utils.escapeHtml;

    return `<!doctype html>
<!-- Generated by _RTL-EDITOR from ${escape(filePath)} - edit that file, not this one. -->
<html${isRtl ? ' lang="he" dir="rtl"' : ' dir="ltr"'}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<style>${PAGE_STYLE}</style>
</head>
<body class="${isRtl ? "rtl" : "ltr"}">
<main>
${index}${body}</main>
</body>
</html>
`;
}

// ------------------------------------------------------------------------------------------------
// The index

/** The deepest heading the index lists - below that it is a list of details, not of sections. */
const INDEX_DEEPEST_LEVEL = 3;
/** Fewer headings than this, and the index would only repeat what is already in sight. */
const INDEX_MIN_ENTRIES = 3;

/**
 * The index at the top of the page, or "" for a file with too few headings - and, either way, an
 * `id` on every heading of the document, so a link can point at a section.
 *
 * Only headings of the document itself are listed: one inside a pseudo-tag, a quote or a list is a
 * detail of that block, not a section.
 */
function renderIndex(tokens: Token[], isRtl: boolean, env: Env): string {
    const usedIds = new Set<string>();
    const entries: { level: number, id: string, html: string }[] = [];

    tokens.forEach((token, index) => {
        if (token.type !== "heading_open") return;
        const children = tokens[index + 1].children ?? [];
        const id = uniqueId(headingSlug(children), usedIds);
        token.attrSet("id", id);

        const level = Number(token.tag.slice(1));
        if (token.level !== 0 || level > INDEX_DEEPEST_LEVEL) return;
        // The entry is a link itself, so a link inside the heading keeps its text and loses its <a>.
        const inline = children.filter(child => child.type !== "link_open" && child.type !== "link_close");
        const html = markdown.renderer.renderInline(inline, markdown.options, env).trim();
        if (html) entries.push({ level, id, html });
    });

    if (entries.length < INDEX_MIN_ENTRIES) return "";

    // Indented relative to the shallowest heading present: a file whose sections are all ## starts flush.
    const topLevel = Math.min(...entries.map(entry => entry.level));
    const items = entries.map(({ level, id, html }) =>
        `<li class="index-depth-${level - topLevel}"><a href="#${markdown.utils.escapeHtml(encodeURIComponent(id))}">${html}</a></li>`
    ).join("\n");
    return `<nav class="index">
<details open>
<summary>${isRtl ? "תוכן העניינים" : "Contents"}</summary>
<ul>
${items}
</ul>
</details>
</nav>
`;
}

/** A heading's id: its words joined by a single "-", with the punctuation and niqqud gone. */
function headingSlug(children: Token[]): string {
    return children
        .filter(child => child.type === "text" || child.type === "code_inline")
        .map(child => child.content)
        .join("")
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .replace(/[^\p{L}\p{N}\s_-]/gu, "")
        .trim()
        .replace(/[\s-]+/g, "-")
        .toLowerCase();
}

function uniqueId(slug: string, usedIds: Set<string>): string {
    const base = slug || "section";
    let id = base;
    for (let n = 2; usedIds.has(id); n++) id = `${base}-${n}`;
    usedIds.add(id);
    return id;
}

function firstHeadingText(tokens: Token[]): string | null {
    const index = tokens.findIndex(token => token.type === "heading_open" && token.tag === "h1");
    if (index < 0) return null;
    const text = (tokens[index + 1].children ?? [])
        .filter(child => child.type === "text" || child.type === "code_inline")
        .map(child => child.content)
        .join("")
        .trim();
    return text || null;
}

// The editor's look, from public/style.css and the HighlightStyle in markdown-editor.js - keep the
// two in step when either changes. The folder indexes (folder-index.ts) build on it too.
export const PAGE_STYLE = `
* { box-sizing: border-box; }
body {
    margin: 0;
    padding: 16px;
    background: white;
    color: #111;
    font-size: 16px;
    line-height: 1.6;
}
body.rtl { font-family: 'David', 'Narkisim', 'Times New Roman', serif; }
body.ltr { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif; }
main { max-width: 60rem; margin: 0 auto; }

h1, h2, h3, h4, h5, h6 { font-weight: bold; line-height: 1.3; margin: 1em 0 0.4em; }
h1 { font-size: 2em; } h2 { font-size: 1.5em; } h3 { font-size: 1.3em; }
h4 { font-size: 1.1em; } h5 { font-size: 1em; } h6 { font-size: 0.9em; }
p, ul, ol, blockquote, table, pre, .pseudo-tag { margin: 0 0 1em; }
li > ul, li > ol { margin: 0; }
ul, ol { padding-inline-start: 1.6em; }

a { color: #0066cc; text-decoration: underline; }
hr { border: 0; border-top: 2px solid rgba(128, 128, 128, 0.3); margin: 1em 0; }

code, blockquote {
    background: rgba(128, 128, 128, 0.1);
    font-family: system-ui, sans-serif;
    -webkit-text-stroke: 0.3px black;
}
code { font-size: 0.9em; padding: 0 0.15em; border-radius: 3px; }
blockquote { font-size: 0.9em; padding: 0.3em 0.8em; border-inline-start: 3px solid rgba(128, 128, 128, 0.4); }
blockquote code { font-size: inherit; background: none; }
pre { background: rgba(128, 128, 128, 0.1); padding: 0.5em 0.8em; overflow-x: auto; direction: ltr; text-align: left; }
pre code { background: none; font-family: monospace; -webkit-text-stroke: 0; }

table { border-collapse: collapse; }
td { border: 1px solid #999; padding: 0.25em 0.6em; vertical-align: top; text-align: start; }

.pseudo-tag {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 0.2em 0.9em 0.1em;
    background: #f4f4f4;
}
.pseudo-tag-caption { text-align: center; font-weight: bold; opacity: 0.7; margin-bottom: 0.2em; }
.pseudo-tag > :last-child { margin-bottom: 0.5em; }
blockquote > :last-child, li > :last-child { margin-bottom: 0; }
.pseudo-tag[data-tag="ניתוח-לשוני"] { background: #ffe8e8; font-size: 0.85em; }
.pseudo-tag[data-tag="הקבלה-היסטורית"] { background: #e0f0ff; }
.pseudo-tag[data-tag="עיון"] { background: #e8ffe8; }
.pseudo-tag[data-tag="מדרש"] { background: #f0e8ff; }
.pseudo-tag[data-tag="הצעת-קלוד"] { background: #fff0e0; }

.index {
    margin: 0 0 1.5em;
    padding: 0.4em 1em 0.6em;
    border: 1px solid rgba(128, 128, 128, 0.35);
    border-radius: 6px;
    background: #fafafa;
}
.index summary { font-weight: bold; font-size: 1.2em; cursor: pointer; }
.index ul { list-style: none; margin: 0.4em 0 0; padding: 0; }
.index li { line-height: 1.45; }
.index a { color: inherit; text-decoration: none; }
.index a:hover { color: #0066cc; text-decoration: underline; }
.index .index-depth-0 { font-weight: bold; margin-top: 0.35em; }
.index .index-depth-0:first-child { margin-top: 0; }
.index .index-depth-1 { padding-inline-start: 1.5em; }
.index .index-depth-2 { padding-inline-start: 3em; font-size: 0.93em; }
`;
