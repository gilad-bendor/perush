// A Markdown file as a readable, self-contained HTML page.
//
// The page is meant to *look* like the file does in the editor - the same fonts, heading sizes,
// shaded inline code and coloured pseudo-tag blocks - but to *read* like a document: the Markdown
// syntax characters are gone. On top of plain Markdown it knows this project's own conventions:
//
// - A single line break is a line break. The files are written a sentence per line, and the editor
//   shows them that way; standard Markdown would run the lines together into one paragraph.
// - A table in any of tables.js's three formats becomes an HTML <table>. Its header row, if it
//   declares one - "|---|---|" in Markdown, a doubled "╞═══╪═══╡" rule in the box formats - becomes
//   a <thead> of <th> cells; a table that declares none gets no header, as in the editor.
// - `<עיון>` ... `</עיון>` on lines of their own become a box captioned with the tag's name, holding
//   the Markdown between them; a void tag (`<כלול-בהדפסה ...>`) becomes a box of its caption alone.
// - `*...*` and `**...**` inside an inline-code span are bold, as inlineCodeEmphasisPlugin shows them.
// - A ```html fence is written to the page as raw HTML, fence lines gone - the one way out of the
//   escaping that everything else in a file gets.
// - A `שגיאה-N` marker left by includes.ts becomes a dark-red block where the faulty directive was,
//   and the page opens with the list of them.
// - `<תוכן-העניינים>`, alone on its line, becomes an index of the headings below it - titled
//   "תוכן העניינים" in an RTL page, "Contents" in an LTR one. A file without that line gets none.
//
// Pure: content in, HTML out. Which file goes where, and when, is html-mirror.ts's business.

import MarkdownIt from "markdown-it";
import type { StateBlock, StateCore, Token } from "markdown-it";
import { isRtlFile, parseTables } from "../../public/src/tables.js";
import { INDEX_TAG_NAME, isVoidPseudoTag } from "../../public/src/pseudo-tags.js";
import { errorLineIndex } from "./includes";
import type { EmbedError } from "./includes";

export type RenderOptions = {
    /** Rewrites a link's href - the page does not live next to the file it was made from. */
    hrefFor?: (href: string) => string;
    /**
     * What is wrong with the document, as expandIncludes() found it - in the order the `שגיאה-N`
     * markers of the content refer to them by.
     */
    errors?: EmbedError[];
};

type Env = {
    tablesByFirstLine?: Map<number, { lineCount: number, headerRows: number, rows: string[][][] }>;
    hrefFor?: (href: string) => string;
    errors?: EmbedError[];
    /** What each `<תוכן-העניינים>` line stands for, by its token's position - they differ. */
    indexesByToken?: Map<number, string>;
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

    const { rows, lineCount, headerRows } = table;

    const nextLine = startLine + lineCount;
    state.push("table_open", "table", 1).map = [startLine, nextLine];
    // A <thead> only when the table says it has one; most of them do not, and get a bare <tbody>.
    let section: "thead" | "tbody" | null = null;
    rows.forEach((row, rowIndex) => {
        const wanted = rowIndex < headerRows ? "thead" : "tbody";
        if (section !== wanted) {
            if (section) state.push(`${section}_close`, section, -1);
            state.push(`${wanted}_open`, wanted, 1);
            section = wanted;
        }
        const cell = wanted === "thead" ? "th" : "td";
        state.push("tr_open", "tr", 1);
        const columnCount = row[0]?.length ?? 0;
        for (let column = 0; column < columnCount; column++) {
            state.push(`${cell}_open`, cell, 1);
            const inline = state.push("inline", "", 0);
            // A cell split over several lines keeps its line breaks. The other columns of such a row
            // have been padded with empty lines, which must not turn into trailing breaks.
            inline.content = row.map(line => line[column] ?? "").join("\n").replace(/^\n+|\n+$/g, "");
            inline.children = [];
            state.push(`${cell}_close`, cell, -1);
        }
        state.push("tr_close", "tr", -1);
    });
    if (section) state.push(`${section}_close`, section, -1);
    state.push("table_close", "table", -1);
    state.line = nextLine;
    return true;
}

// ------------------------------------------------------------------------------------------------
// The errors of the included files
//
// expandIncludes() leaves a marker line where a faulty `<כלול-בהדפסה>` directive stood; here it
// becomes the block that says so. The message itself travels in the env rather than in the line,
// so that nothing a file could hold can be mistaken for one.

markdown.block.ruler.before("code", "embed_error", embedErrorRule, { alt: ["paragraph", "reference", "blockquote", "list"] });

function embedErrorRule(state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean {
    const index = errorLineIndex(lineText(state, startLine));
    if (index === null) return false;
    if (silent) return true;
    const token = state.push("embed_error", "div", 0);
    token.block = true;
    token.meta = { index };
    token.map = [startLine, startLine + 1];
    state.line = startLine + 1;
    return true;
}

markdown.renderer.rules.embed_error = (tokens, index, _options, env) => {
    const error = (env as Env).errors?.[(tokens[index].meta as { index: number }).index];
    if (!error) return "";
    return `<div class="embed-error" id="${markdown.utils.escapeHtml(error.id)}">${errorText(error)}</div>\n`;
};

/** An error as both its own block and its entry at the top of the page read it. */
function errorText(error: EmbedError): string {
    const escape = markdown.utils.escapeHtml;
    return `${escape(error.id)} &ndash; ${escape(error.file)}, שורה ${error.line}: ${escape(error.message)}`;
}

/** The list of every error, at the head of the page - the first thing it has to say. */
function renderErrors(errors: EmbedError[], isRtl: boolean): string {
    if (!errors.length) return "";
    const items = errors.map(error =>
        `<li><a href="#${markdown.utils.escapeHtml(encodeURIComponent(error.id))}">${errorText(error)}</a></li>`
    ).join("\n");
    return `<nav class="embed-errors">
<div class="embed-errors-title">${isRtl ? "שגיאות" : "Errors"}</div>
<ul>
${items}
</ul>
</nav>
`;
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

    // A void tag holds nothing and closes nothing - the line itself is the whole block, and all
    // there is to show is its caption.
    if (isVoidPseudoTag(name)) {
        if (silent) return true;
        pushOpenToken(state, name, attributes, [startLine, startLine + 1]);
        state.push("pseudo_tag_close", "div", -1).block = true;
        state.line = startLine + 1;
        return true;
    }

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

    pushOpenToken(state, name, attributes, [startLine, closingLine + 1]);

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

function pushOpenToken(state: StateBlock, name: string, attributes: string, map: [number, number]): void {
    const openToken = state.push("pseudo_tag_open", "div", 1);
    openToken.block = true;
    openToken.info = name;
    openToken.meta = { attributeValues: [...attributes.matchAll(/=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g)].map(m => m[1] ?? m[2] ?? m[3]) };
    openToken.map = map;
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
// The raw-HTML fence
//
// A ```html fence is the one way a file can put HTML on its page. Everything else is escaped -
// `html: false` is what makes a stray `<div>` in the prose show as the four characters it is - and
// that stays true: the way out has to be something a writer types on purpose, on a line of its own,
// and can see the whole extent of in the editor. A fence is exactly that shape, and the editor
// already draws it as a block.
//
// The fence's own lines go; what was between them is written to the page untouched, not even
// re-indented. A file may therefore break its own page, which is the price of the capability and
// the reason it is not spelt `<html>` somewhere in a paragraph.

/** The info string that makes a fence raw HTML - ```html, whatever follows it on the line. */
const RAW_HTML_INFO = "html";

const renderFence = markdown.renderer.rules.fence!;

markdown.renderer.rules.fence = (tokens, index, options, env, renderer) => {
    const token = tokens[index];
    if (token.info.trim().split(/\s+/)[0].toLowerCase() !== RAW_HTML_INFO) {
        return renderFence(tokens, index, options, env, renderer);
    }
    return token.content;
};

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

/**
 * The document parsed and ready to render: every heading has its `id`, and the index each
 * `<תוכן-העניינים>` line stands for is in the env, where its renderer rule will find it.
 *
 * Both has to happen before the body is rendered, and both need the whole token stream, which is
 * why parsing and rendering are two steps here rather than one `markdown.render()`.
 */
function prepareDocument(content: string, isRtl: boolean, options: RenderOptions): { tokens: Token[], env: Env } {
    const env: Env = { hrefFor: options.hrefFor, errors: options.errors };
    const tokens = markdown.parse(content, env);
    env.indexesByToken = renderIndexes(tokens, isRtl, env);
    return { tokens, env };
}

/** The body of the page - exported for the tests. */
export function markdownToHtml(content: string, options: RenderOptions = {}): string {
    const { tokens, env } = prepareDocument(content, isRtlFile("x.md", content), options);
    return markdown.renderer.render(tokens, markdown.options, env);
}

/**
 * A whole, self-contained HTML page for the Markdown file at `filePath`.
 *
 * @param filePath  as the file tree names it - decides the direction and the fallback title
 */
export function renderMarkdownPage(content: string, filePath: string, options: RenderOptions = {}): string {
    const isRtl = isRtlFile(filePath, content);
    const { tokens, env } = prepareDocument(content, isRtl, options);
    const errors = renderErrors(options.errors ?? [], isRtl);
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
${errors}${body}</main>
</body>
</html>
`;
}

// ------------------------------------------------------------------------------------------------
// The index
//
// `<תוכן-העניינים>`, alone on its line, is where the index goes - and the only thing that puts one
// on a page. It lists the headings *below* it, which is why where it stands is a real choice and
// not only a matter of layout. It was once added to every page automatically, which is a decision a file cannot argue
// with: a short file got an index that only repeated what was already in sight, and a long one
// could not choose to open with its first paragraph instead. So the file says where, or says
// nothing and gets none.
//
// The tag is void (pseudo-tags.js), like `<כלול-בהדפסה>` and for the same reason - it has no
// content of its own to close over - and the editor shows the line itself, as it shows every other
// pseudo-tag.

/** The deepest heading the index lists - below that it is a list of details, not of sections. */
const INDEX_DEEPEST_LEVEL = 3;

/** `<תוכן-העניינים>` and nothing else on the line; the indentation, like any other block's, is its own. */
const INDEX_TAG_LINE = new RegExp(`^<${INDEX_TAG_NAME}>\\s*$`);

// Before the pseudo-tag rule, which would otherwise make a caption box of the line: this tag is a
// marker for the renderer rather than a block to show.
markdown.block.ruler.before("pseudo_tag", "index_tag", indexTagRule, { alt: ["paragraph", "reference", "blockquote", "list"] });

function indexTagRule(state: StateBlock, startLine: number, _endLine: number, silent: boolean): boolean {
    if (!INDEX_TAG_LINE.test(lineText(state, startLine))) return false;
    if (silent) return true;
    const token = state.push("index_tag", "nav", 0);
    token.block = true;
    token.map = [startLine, startLine + 1];
    state.line = startLine + 1;
    return true;
}

// An index is built from the token stream around it, so it cannot be rendered from inside it:
// prepareDocument() puts them all in the env before the body is rendered, and this rule takes the
// one that belongs to this line. A tag with no heading below it leaves its line out altogether
// rather than showing an empty box.
markdown.renderer.rules.index_tag = (_tokens, index, _options, env) => (env as Env).indexesByToken?.get(index) ?? "";

/**
 * What each `<תוכן-העניינים>` line of the document stands for, by the position of its token -
 * which is what its renderer rule has to go on.
 *
 * **An index lists the headings below it, and only those.** A table of contents is the way into
 * what comes next; a section already read is not something to be sent back to. So a tag in the
 * middle of a file indexes the second half of it, and one at the foot of a long chapter - where a
 * reader arrives having read it - is empty and leaves no trace.
 *
 * Every heading gains an `id` here, whether the file asked for an index or not, so a link can
 * always point at a section. That is this pass's other job, and why it runs for every page.
 */
function renderIndexes(tokens: Token[], isRtl: boolean, env: Env): Map<number, string> {
    const entries = documentHeadings(tokens, env);
    const indexes = new Map<number, string>();
    tokens.forEach((token, position) => {
        if (token.type !== "index_tag") return;
        indexes.set(position, renderIndex(entries.filter(entry => entry.position > position), isRtl));
    });
    return indexes;
}

/** A heading of the document, as an index would list it - and where in the token stream it stands. */
type HeadingEntry = { position: number, level: number, id: string, html: string };

/**
 * Every heading an index may list, in the order they stand in - and, on the way, an `id` on every
 * heading there is, listable or not.
 *
 * Only headings of the document itself are listed: one inside a pseudo-tag, a quote or a list is a
 * detail of that block, not a section.
 */
function documentHeadings(tokens: Token[], env: Env): HeadingEntry[] {
    const usedIds = new Set<string>();
    const entries: HeadingEntry[] = [];

    tokens.forEach((token, position) => {
        if (token.type !== "heading_open") return;
        const children = tokens[position + 1].children ?? [];
        const id = uniqueId(headingSlug(children), usedIds);
        token.attrSet("id", id);

        const level = Number(token.tag.slice(1));
        if (token.level !== 0 || level > INDEX_DEEPEST_LEVEL) return;
        // The entry is a link itself, so a link inside the heading keeps its text and loses its <a>.
        const inline = children.filter(child => child.type !== "link_open" && child.type !== "link_close");
        const html = markdown.renderer.renderInline(inline, markdown.options, env).trim();
        if (html) entries.push({ position, level, id, html });
    });

    return entries;
}

/** One index, of the headings given - or "" when there are none, which leaves the tag's line out. */
function renderIndex(entries: HeadingEntry[], isRtl: boolean): string {
    if (!entries.length) return "";

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
td, th { border: 1px solid #999; padding: 0.25em 0.6em; vertical-align: top; text-align: start; }
th { background: rgba(128, 128, 128, 0.15); font-weight: bold; }

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
/* A void tag: its caption is the whole box, so it keeps the full colour of a marker. */
.pseudo-tag[data-tag="כלול-בהדפסה"] { background: #fffbc0; }
.pseudo-tag[data-tag="כלול-בהדפסה"] > .pseudo-tag-caption { opacity: 1; margin: 0; }

/* Whatever else the page says, a faulty <כלול-בהדפסה> has to be impossible to read past. */
.embed-errors, .embed-error {
    background: #7a0f0f;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    padding: 0.4em 1em;
    margin: 0 0 1em;
}
.embed-errors a, .embed-error a { color: white; text-decoration: none; }
.embed-errors a:hover { text-decoration: underline; }
.embed-errors-title { font-size: 1.2em; }
.embed-errors ul { list-style: none; margin: 0.3em 0 0; padding: 0; }
.embed-errors li { margin: 0.2em 0; }
.embed-error code, .embed-errors code { background: rgba(255, 255, 255, 0.2); color: white; -webkit-text-stroke: 0; }

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

/* On paper. The print button (and הדפסה.rtl.md, a file that exists to be printed) makes this a
   real destination rather than a courtesy, so the page is laid out for the sheet it lands on. */
@media print {
    /* The reading column is the sheet, so the margins move from the body to the page box. */
    @page { margin: 18mm 16mm; }
    body { padding: 0; font-size: 11.5pt; }
    main { max-width: none; }

    /* The backgrounds are not decoration - the colour is what says whether a block is an עיון or a
       מדרש - so they have to reach the paper, which by default they do not. Inherited, hence body. */
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }

    /* A heading belongs with what follows it; a box, a row or a quote is one thing and is not split. */
    h1, h2, h3, h4, h5, h6 { break-after: avoid; break-inside: avoid; }
    .pseudo-tag, blockquote, table, pre, tr, li { break-inside: avoid; }
    p { orphans: 3; widows: 3; }

    /* Every top-level heading opens a sheet: an embedded file begins with its own, so a collection
       of them prints as the chapters it is. Drop this one rule for a continuous scroll instead. */
    h1 { break-before: page; }
    main > :first-child { break-before: auto; }

    /* An index the reader had collapsed would otherwise print as its title and nothing else. */
    .index details > :not(summary) { display: block; }

    /* A link on paper cannot be followed; the blue and the underline are only noise. */
    a { color: inherit; text-decoration: none; }
}
`;
