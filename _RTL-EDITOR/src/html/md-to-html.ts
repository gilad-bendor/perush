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
// - Lines a file's layout gathers into groups share printed rows (line-rows.ts).
// - `<תוכן-העניינים>`, alone on its line, becomes an index of the headings below it - titled
//   "תוכן העניינים" in an RTL page, "Contents" in an LTR one. A file without that line gets none.
//
// Pure: content in, HTML out. Which file goes where, and when, is html-mirror.ts's business.

import MarkdownIt from "markdown-it";
import type { StateBlock, StateCore, StateInline, Token } from "markdown-it";
import { isRtlFile, parseTables } from "../../public/src/tables.js";
import { INDEX_TAG_NAME, isVoidPseudoTag } from "../../public/src/pseudo-tags.js";
import { headingSlug } from "../../public/src/links.js";
import { errorLineIndex } from "./includes";
import type { EmbedError } from "./includes";
import { LINE_ROWS_SCRIPT, LINE_ROWS_STYLE, lineRowsRule, PRINT_FONT_SIZE, PRINT_MARGIN_BLOCK_MM, PRINT_MARGIN_INLINE_MM } from "./line-rows";
import { NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK, stripLayoutMarks } from "./layout-marks";
import { FONT_FACES, FONT_FAMILIES, FONTS_DIR, LAST_RESORT, type FontFace, type FontRole } from "./text-measure";
import type { PageSettings, RunningHeading } from "./layout-schema";
import { readFileSync } from "fs";
import { join } from "path";

export type RenderOptions = {
    /** Rewrites a link's href - the page does not live next to the file it was made from. */
    hrefFor?: (href: string) => string;
    /**
     * What is wrong with the document, as expandIncludes() found it - in the order the `שגיאה-N`
     * markers of the content refer to them by.
     */
    errors?: EmbedError[];
    /**
     * The way up from the page to the top of the site, shown above it (renderBreadcrumbs()) - and
     * only on screen: a trail of links is nothing to print. Left out, the page has none.
     */
    breadcrumbs?: Breadcrumb[];
    /**
     * An index of every `#`..`###` of the page, right below the breadcrumb trail (renderPageIndex()) -
     * on screen only, like the trail. Given whatever the file asks for with `<תוכן-העניינים>`.
     */
    pageIndex?: boolean;
    /**
     * Writes every grouped line's source line on it, as `data-source-line` - for the layout tools, which
     * have to know which line is which. Never for the mirror.
     */
    sourceLines?: boolean;
    /**
     * Where a right-to-left page loads its font from (fonts/, see text-measure.ts): a folder's URL,
     * relative to the page - or "embed", every face written into the page itself, for a page with no
     * folder around it (the layout tool's). Left out, the page names the font but does not load it, and
     * a browser without it falls back to David.
     */
    fonts?: string;
    /** The printed page as the file's layout has it (layout-schema.ts) - anything left out as PAGE_STYLE has it. */
    page?: PageSettings;
    /**
     * What the PDF printer needs of the page, as the file's layout has it (layout-schema.ts's PdfSettings) - left
     * out, the page is made for the screen alone: no index of its own for the PDF, no footer titles. See "The
     * PDF's pages" below.
     */
    pdf?: PdfOptions;
};

/** RenderOptions.pdf. */
export type PdfOptions = {
    /** The deepest heading the printed index lists - 0 for none. */
    indexDepth: number;
    /** The footer's title for the headings in force at the top of a sheet - "" for a function that throws or gives no string. */
    footerTitle: (chain: readonly RunningHeading[]) => unknown;
};

/** One step of a breadcrumb trail - a folder's index to go up to, or, with no href, the page itself. */
export type Breadcrumb = { name: string; href?: string };

type Env = {
    tablesByFirstLine?: Map<number, { lineCount: number, headerRows: number, rows: string[][][] }>;
    hrefFor?: (href: string) => string;
    errors?: EmbedError[];
    /** What each `<תוכן-העניינים>` line stands for, by its token's position - they differ. */
    indexesByToken?: Map<number, string>;
    /** A right-to-left page drops its line-delimited HTML comments - see commentBlockRule(). */
    isRtl?: boolean;
    /** Set by lineRowsRule() when the page has lines that share rows - and so needs its script. */
    hasLineRows?: boolean;
    sourceLines?: boolean;
    /** The PDF's own index, and the position of the heading_close it follows - see printIndex(). */
    printIndex?: { html: string, after: number };
};

const markdown = new MarkdownIt({
    // Raw HTML is shown as text, the way the editor shows it: nothing in a file may break the page.
    html: false,
    breaks: true,
    linkify: false,
    typographer: false,
});

/**
 * A URL as a reader would write it - Hebrew as Hebrew, not as `%D7%90`. Only what cannot stand in a URL
 * as it is gets escaped: whitespace, control characters, the few ASCII characters a URL may not hold,
 * and a `%` that starts no escape. An escaped non-ASCII character already in it is decoded back - the
 * browser encodes it when it follows the link, and shows it decoded in the address bar all the same.
 * `#` and `?` are kept, as a URL's own - see readablePath() for a path, where they are part of a name.
 */
export function readableUrl(url: string): string {
    return url
        .replace(/(?:%[89a-f][0-9a-f])+/gi, run => {
            try {
                return decodeURIComponent(run);
            } catch {
                return run;
            }
        })
        .replace(/%(?![0-9a-f]{2})|[\u0000-\u0020\u007f"<>\\^`{|}]/gi, character => encodeURIComponent(character));
}

/** A file's path as an href - readableUrl()'s rule, but every `%`, `#` and `?` in it is part of a name. */
export function readablePath(path: string): string {
    return path.replace(/[%#?\u0000-\u0020\u007f"<>\\^`{|}]/g, character => encodeURIComponent(character));
}

// Every link of a page is written the readable way. markdown-it's own normalizeLink() percent-encodes
// every non-ASCII character, and punycodes a host name - neither of which a reader wants to see.
markdown.normalizeLink = readableUrl;

// A link target may hold spaces - `[x](מחקר ראשוני - פרומפט.rtl.md)` - as file names here do, and as the editor's
// Cmd+click (links.js) already allows. CommonMark stops a bare target at the first space; this reads on to
// the closing parenthesis, unless what follows the space is a title (`"t"`, `'t'`, `(t)`) or a newline.
const parseLinkDestination = markdown.helpers.parseLinkDestination;
markdown.helpers.parseLinkDestination = (str: string, start: number, max: number) => {
    const result = parseLinkDestination(str, start, max);
    if (!result.ok || str.charCodeAt(result.pos) !== 0x20) return result;
    let level = 0;
    let pos = result.pos;
    for (; pos < max; pos++) {
        const code = str.charCodeAt(pos);
        if (code === 0x0a) return result;
        if (code === 0x28) level++;
        if (code === 0x29 && level-- === 0) break;
    }
    const target = str.slice(start, pos).trimEnd();
    if (pos >= max || /\s["'(]/.test(target.slice(result.pos - start))) return result;
    return { ok: true, pos: start + target.length, str: markdown.utils.unescapeAll(target) };
};

// Our table rule replaces the GFM one: it knows the box formats too, and makes no header row.
markdown.disable("table");

// ------------------------------------------------------------------------------------------------
// Lists

// `a`\`b` is how the files write "a or b": two code spans and a backslash between them. CommonMark reads
// that `\`` as an escaped backtick, which leaves the second span unopened - so a backslash right after a
// backtick and right before one is a plain character here. The editor's `codeSeparatorExtension` agrees.
markdown.inline.ruler.before("escape", "code_separator", codeSeparatorRule);

function codeSeparatorRule(state: StateInline, silent: boolean): boolean {
    const { src, pos } = state;
    if (src[pos] !== "\\" || src[pos - 1] !== "`" || src[pos + 1] !== "`") return false;
    if (!silent) state.pending += "\\";
    state.pos++;
    return true;
}

// A line indented less than a list item's text is not part of the item. CommonMark would take it as a
// "lazy" continuation of the item's last paragraph - `- bbb` and then `Here is list two:` on the next line
// make one item of two lines - but the files here are written a sentence per line, and a line brought back
// to the margin is meant as one that left the list. So such a line ends the paragraph it would have
// continued, and with it the item: a terminator of the paragraph rule, and nothing else.
markdown.block.ruler.before("paragraph", "dedent_ends_paragraph", dedentEndsParagraphRule, { alt: ["paragraph"] });

function dedentEndsParagraphRule(state: StateBlock, startLine: number, _endLine: number, silent: boolean): boolean {
    return silent && state.sCount[startLine] >= 0 && state.sCount[startLine] < state.blkIndent;
}

// An HTML comment whose `<!--` and `-->` each stand on a line of their own - whitespace aside - is
// dropped from a right-to-left page, with everything between them: it is a note to whoever edits
// the file (`GENERATED FILE. Do not edit by hand.`), not text for the reader. Any other comment -
// one sharing a line with text, or never closed - is shown as text, as raw HTML always is here.
// Being a block rule, it leaves a comment inside a code fence alone.
markdown.block.ruler.before("code", "comment_block", commentBlockRule, { alt: ["paragraph", "reference", "blockquote", "list"] });

function commentBlockRule(state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean {
    if (!(state.env as Env).isRtl) return false;
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    if (lineText(state, startLine).trimEnd() !== "<!--") return false;
    let line = startLine + 1;
    while (line < endLine && lineText(state, line).trim() !== "-->") line++;
    if (line >= endLine) return false;
    if (silent) return true;
    state.line = line + 1;
    return true;
}

// A paragraph with a list right under it - no blank line between them - is the list's own heading line,
// `Here is list one:`, and is drawn with no space below it. A blank line keeps the usual space.
markdown.core.ruler.push("paragraph_heads_list", (state: StateCore) => {
    const tokens = state.tokens;
    for (let i = 2; i + 1 < tokens.length; i++) {
        const list = tokens[i + 1];
        if (tokens[i].type !== "paragraph_close" || (list.type !== "bullet_list_open" && list.type !== "ordered_list_open")) continue;
        const open = tokens[i - 2];   // paragraph_open, inline, paragraph_close
        if (open?.map && list.map && open.map[1] === list.map[0]) open.attrJoin("class", "heads-list");
    }
});

// The other way round, too: a paragraph right under a list - `Here is list two:` after `- bbb` - follows on
// from it, and the list is drawn with no space below it. A list's map takes in the blank line after it, so
// whether there is one is read off the source.
markdown.core.ruler.push("list_runs_on", (state: StateCore) => {
    const tokens = state.tokens;
    let lines: string[] | undefined;
    for (let i = 1; i < tokens.length; i++) {
        const paragraph = tokens[i];
        const close = tokens[i - 1];
        if (paragraph.type !== "paragraph_open" || !paragraph.map || paragraph.map[0] === 0) continue;
        if (close.type !== "bullet_list_close" && close.type !== "ordered_list_close") continue;
        lines ??= state.src.split("\n");
        if (!/\S/.test(lines[paragraph.map[0] - 1] ?? "")) continue;
        const open = tokens.findLast((token, j) => j < i && token.level === close.level && token.type === close.type.replace("_close", "_open"));
        open?.attrJoin("class", "runs-on");
    }
});

// Lines a file's layout gathers into groups share printed rows: see line-rows.ts.
markdown.core.ruler.push("line_rows", lineRowsRule);

/**
 * A heading a layout starts a sheet with - or keeps from starting one - carries the mark right after its
 * `#`s (layout-marks.ts), which becomes a class here. Any other layout mark left in the text is dropped.
 */
markdown.core.ruler.push("page_breaks", (state: StateCore) => {
    state.tokens.forEach((token, i) => {
        if (token.type !== "inline") return;
        const opening = state.tokens[i - 1];
        if (opening?.type === "heading_open") {
            const breaks = token.content.startsWith(PAGE_BREAK_MARK), keeps = token.content.startsWith(NO_PAGE_BREAK_MARK);
            if (breaks || keeps) opening.attrJoin("class", breaks ? "page-break-before" : "no-page-break-before");
        }
        token.content = stripLayoutMarks(token.content);
        for (const child of token.children ?? []) if (child.type === "text") child.content = stripLayoutMarks(child.content);
    });
});

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
        `<li><a href="#${markdown.utils.escapeHtml(readableUrl(error.id))}">${errorText(error)}</a></li>`
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

// A link with no text of its own - `[](aaa/bbb.md)` - would be an invisible <a>; it shows its target instead,
// as written. Pushed before rewrite_hrefs, so the text is the path in the file, not the page's href.
markdown.core.ruler.push("empty_link_text", (state: StateCore) => {
    for (const token of state.tokens) {
        const children = token.children;
        if (!children) continue;
        for (let i = children.length - 2; i >= 0; i--) {
            if (children[i].type !== "link_open" || children[i + 1].type !== "link_close") continue;
            const href = children[i].attrGet("href");
            if (typeof href !== "string" || !href) continue;
            const text = new state.Token("text", "", 0);
            text.content = safeDecodeUri(href);
            children.splice(i + 1, 0, text);
        }
    }
});

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
function prepareDocument(content: string, isRtl: boolean, options: RenderOptions):
        { tokens: Token[], env: Env, headings: HeadingEntry[] } {
    const env: Env = { hrefFor: options.hrefFor, errors: options.errors, isRtl, sourceLines: options.sourceLines };
    const tokens = markdown.parse(content, env);
    const headings = documentHeadings(tokens, env);
    env.indexesByToken = renderIndexes(tokens, headings, isRtl);
    if (options.pdf) {
        setRunningTitles(tokens, headings, options.pdf);
        const ownIndex = [...env.indexesByToken.values()].some(Boolean);
        if (!ownIndex) env.printIndex = printIndex(tokens, headings, isRtl, options.pdf.indexDepth);
    }
    return { tokens, env, headings };
}

/**
 * Every paragraph of the document, as the source lines it spans (0-based, both ends included) - what a
 * layout may gather lines of into groups (line-rows.ts), as the renderer sees them.
 */
export function paragraphRanges(content: string): { from: number, to: number }[] {
    return markdown.parse(content, {}).filter(token => token.type === "paragraph_open" && token.map)
        .map(token => ({ from: token.map![0], to: token.map![1] - 1 }));
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
    const { tokens, env, headings } = prepareDocument(content, isRtl, options);
    const errors = renderErrors(options.errors ?? [], isRtl);
    const trail = options.breadcrumbs?.length ? `${renderBreadcrumbs(options.breadcrumbs)}\n` : "";
    const pageIndex = options.pageIndex ? renderPageIndex(headings, isRtl) : "";
    // The PDF's own index follows the page's opening `#` - or, with none, opens the page.
    const printIndexHtml = env.printIndex?.after === -1 ? env.printIndex.html : "";
    const pdfCss = options.pdf ? pdfStyle(options.pdf) : "";
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
${isRtl && options.fonts ? `<style>${fontsStyle(options.fonts)}</style>\n` : ""}${options.page ? `<style>${pageSettingsStyle(options.page)}</style>\n` : ""}${pdfCss ? `<style>${pdfCss}</style>\n` : ""}</head>
<body class="${isRtl ? "rtl" : "ltr"}"${options.pdf ? pdfAttributes(options.page ?? {}) : ""}>
<main${options.pdf ? ` data-running-title="${escape(footerTitleOf(options.pdf, []))}"` : ""}>
${trail}${pageIndex}${errors}${printIndexHtml}${body}</main>
${env.hasLineRows ? `<script>${LINE_ROWS_SCRIPT}</script>\n` : ""}</body>
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

/**
 * The deepest heading an index lists on screen - below that it is a list of details, not of sections. On paper
 * the file's layout decides (PdfOptions.indexDepth), so an index holds every heading, and hides the deeper ones.
 */
const INDEX_DEEPEST_LEVEL = 3;
const DEEPEST_HEADING = 6;

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
function renderIndexes(tokens: Token[], entries: HeadingEntry[], isRtl: boolean): Map<number, string> {
    const indexes = new Map<number, string>();
    tokens.forEach((token, position) => {
        if (token.type !== "index_tag") return;
        indexes.set(position, renderIndex(entries.filter(entry => entry.position > position), isRtl));
    });
    return indexes;
}

/**
 * A heading of the document, as an index would list it - and where in the token stream it stands. `text` is
 * what a footer's title is made of: the heading as plain text.
 */
type HeadingEntry = { position: number, level: number, id: string, html: string, text: string };

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
        const id = uniqueId(headingId(children), usedIds);
        token.attrSet("id", id);

        const level = Number(token.tag.slice(1));
        if (token.level !== 0) return;
        // The entry is a link itself, so a link inside the heading keeps its text and loses its <a>.
        const inline = children.filter(child => child.type !== "link_open" && child.type !== "link_close");
        const html = markdown.renderer.renderInline(inline, markdown.options, env).trim();
        const text = children.filter(child => child.type === "text" || child.type === "code_inline")
            .map(child => child.content).join("").replace(/\s+/g, " ").trim();
        if (html) entries.push({ position, level, id, html, text });
    });

    return entries;
}

/**
 * The index every page of the mirror opens with, under its breadcrumb trail: all of its headings,
 * `#`..`###`, wherever they stand - it is a way around the page, not the file's own table of
 * contents. Like the trail it is on screen only, and cannot be selected, so a copy of the text does
 * not bring it along. A page with one heading or none gets none: an index of one entry says nothing.
 */
function renderPageIndex(entries: HeadingEntry[], isRtl: boolean): string {
    const shown = entries.filter(entry => entry.level <= INDEX_DEEPEST_LEVEL);
    return shown.length > 1 ? renderIndex(shown, isRtl, "index page-index") : "";
}

/** One index, of the headings given - or "" when there are none, which leaves the tag's line out. */
function renderIndex(entries: HeadingEntry[], isRtl: boolean, className = "index"): string {
    if (!entries.length) return "";

    // Indented relative to the shallowest heading present: a file whose sections are all ## starts flush.
    const topLevel = Math.min(...entries.map(entry => entry.level));
    // Each entry has room for its page number, which only the PDF printer fills in (pdf-pages.ts) - and which only
    // paper shows, after a dotted leader.
    const items = entries.map(({ level, id, html }) =>
        `<li class="index-depth-${level - topLevel} index-level-${level}"><a href="#${markdown.utils.escapeHtml(readableUrl(id))}">`
        + `<span class="index-text">${html}</span><span class="index-leader"></span><span class="index-page"></span></a></li>`
    ).join("\n");
    return `<nav class="${className}">
<details open>
<summary>${isRtl ? "תוכן העניינים" : "Contents"}</summary>
<ul>
${items}
</ul>
</details>
</nav>
`;
}

// ------------------------------------------------------------------------------------------------
// The PDF's pages
//
// A page of the mirror has no pages - only its PDF does. So the page carries what the PDF printer
// (pdf-pages.ts) needs, unseen on screen, and the printer does the rest once it knows where the sheets
// break:
//
// - **Every index has room for page numbers** (`.index-leader`, `.index-page`), shown on paper only, and
//   filled in by the printer. An index holds every heading; how deep paper goes is the layout's
//   `pdf.indexDepth` (pdfStyle()), how deep the screen goes INDEX_DEEPEST_LEVEL.
// - **A page with no index of its own gets one for paper** (printIndex()), as if `<תוכן-העניינים>` stood
//   right below its opening `#`.
// - **Every heading carries the footer's title** for a sheet that opens under it (`data-running-title`, and
//   `<main>`'s for a sheet before the first heading) - worked out here, as the layout's function cannot be
//   handed to the browser. The printer picks, for each sheet, the heading in force at its top.

/** Calls the layout's footerTitle - "" for one that throws, or does not answer with a string. */
function footerTitleOf(pdf: PdfOptions, chain: readonly RunningHeading[]): string {
    try {
        const title = pdf.footerTitle(chain);
        return typeof title === "string" ? title : "";
    } catch {
        return "";
    }
}

/** Puts on every heading of the document the footer's title of a sheet that opens under it. */
function setRunningTitles(tokens: Token[], entries: HeadingEntry[], pdf: PdfOptions): void {
    let chain: RunningHeading[] = [];
    for (const { position, level, text } of entries) {
        chain = [...chain.filter(outer => outer.level < level), { level, text }];
        tokens[position].attrSet("data-running-title", footerTitleOf(pdf, chain));
    }
}

/**
 * The index the PDF opens with when the file has none of its own: the headings below the page's opening `#`
 * (the title, which a reader has just read), placed right after it - or, for a page that opens with no `#`,
 * all of them, at its top. Not for a page with fewer than two headings that deep: an index of one entry says
 * nothing.
 */
function printIndex(tokens: Token[], entries: HeadingEntry[], isRtl: boolean, depth: number): { html: string, after: number } | undefined {
    const first = entries[0];
    const opening = first?.level === 1 ? first : null;
    const listed = entries.filter(entry => entry !== opening && entry.level <= depth);
    if (listed.length < 2) return undefined;
    const after = opening ? tokens.findIndex((token, i) => i > opening.position && token.type === "heading_close") : -1;
    return { html: renderIndex(listed, isRtl, "index print-index"), after };
}

const renderHeadingClose = markdown.renderer.rules.heading_close
    ?? ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options));
markdown.renderer.rules.heading_close = (tokens, index, options, env, self) => {
    const after = (env as Env).printIndex;
    return renderHeadingClose(tokens, index, options, env, self) + (after?.after === index ? after.html : "");
};

/** How deep the indexes go on paper. */
function pdfStyle(pdf: PdfOptions): string {
    const hidden = pdf.indexDepth === 0 ? [".index"]
        : Array.from({ length: DEEPEST_HEADING - pdf.indexDepth }, (_, i) => `.index li.index-level-${pdf.indexDepth + i + 1}`);
    return hidden.length ? `@media print { ${hidden.join(", ")} { display: none; } }` : "";
}

/** The sheet's margins, in millimetres, for the printer to put the footer in. */
function pdfAttributes(page: PageSettings): string {
    return ` data-margin-inline="${page.marginInline ?? PRINT_MARGIN_INLINE_MM}" data-margin-block="${page.marginBlock ?? PRINT_MARGIN_BLOCK_MM}"`;
}

/** A heading's id - see headingSlug() in links.js, which the editor finds an "#anchor" by too. */
function headingId(children: Token[]): string {
    return headingSlug(children
        .filter(child => child.type === "text" || child.type === "code_inline")
        .map(child => child.content)
        .join(""));
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

/**
 * A breadcrumb trail - "a / b / c", every step but the one of the page itself linking up to its
 * folder's index. The folder indexes (folder-index.ts) open with one too.
 */
export function renderBreadcrumbs(steps: Breadcrumb[]): string {
    const escape = markdown.utils.escapeHtml;
    return `<nav class="breadcrumbs">${steps.map(step => step.href === undefined
        ? `<span dir="auto">${escape(step.name)}</span>`
        : `<a dir="auto" href="${escape(readablePath(step.href))}">${escape(step.name)}</a>`
    ).join(" / ")}</nav>`;
}

// The editor's look, from public/style.css and the HighlightStyle in markdown-editor.js - keep the
// two in step when either changes. The folder indexes (folder-index.ts) build on it too.
const FACE_CSS: Record<FontFace, string> = {
    regular: "font-weight: normal; font-style: normal",
    bold: "font-weight: bold; font-style: normal",
    italic: "font-weight: normal; font-style: italic",
    boldItalic: "font-weight: bold; font-style: italic",
};
const embeddedFonts = new Map<string, string>();

/** The page's two fonts, loaded from `fonts` - a folder's URL, or "embed" (RenderOptions.fonts). */
function fontsStyle(fonts: string): string {
    const url = (file: string) => {
        if (fonts !== "embed") return `${fonts.replace(/\/?$/, "/")}${file}`;
        if (!embeddedFonts.has(file)) embeddedFonts.set(file, `data:font/otf;base64,${readFileSync(join(FONTS_DIR, file)).toString("base64")}`);
        return embeddedFonts.get(file)!;
    };
    return [
        ...(Object.keys(FONT_FACES) as FontFace[]).flatMap(face => (["main", "fallback"] as FontRole[]).map(role =>
            `@font-face { font-family: '${FONT_FAMILIES[role]}'; src: url("${url(FONT_FACES[face][role])}") format("opentype"); ${FACE_CSS[face]}; }`,
        )),
        `@font-face { font-family: '${LAST_RESORT.family}'; src: url("${url(LAST_RESORT.file)}") format("opentype"); }`,
    ].join("\n");
}

/** The printed page as a file's layout sets it - for paper, and for the moment of measuring before it. */
function pageSettingsStyle(page: PageSettings): string {
    const fontSize = page.fontSize === undefined ? null : `${page.fontSize}pt`;
    const inline = page.marginInline ?? PRINT_MARGIN_INLINE_MM, block = page.marginBlock ?? PRINT_MARGIN_BLOCK_MM;
    const margins = page.marginInline !== undefined || page.marginBlock !== undefined;
    return [
        "@media print {",
        margins ? `    @page { margin: ${block}mm ${inline}mm; }` : "",
        fontSize ? `    body { font-size: ${fontSize}; }` : "",
        "}",
        fontSize ? `html.measuring-print body { font-size: ${fontSize}; }` : "",
        margins ? `html.measuring-print main { width: calc(210mm - ${2 * inline}mm); }` : "",
    ].filter(Boolean).join("\n");
}

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
body.rtl { font-family: '${FONT_FAMILIES.main}', '${FONT_FAMILIES.fallback}', '${LAST_RESORT.family}', 'David', 'Narkisim', 'Times New Roman', serif; }
body.ltr { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif; }
main { max-width: 60rem; margin: 0 auto; }

h1, h2, h3, h4, h5, h6 { font-weight: bold; line-height: 1.3; margin: 1em 0 0.4em; }
h1 { font-size: 2em; } h2 { font-size: 1.5em; } h3 { font-size: 1.3em; }
h4 { font-size: 1.1em; } h5 { font-size: 1em; } h6 { font-size: 0.9em; }
p, ul, ol, blockquote, table, pre, .pseudo-tag { margin: 0 0 1em; }
li > ul, li > ol { margin: 0; }
ul, ol { padding-inline-start: 1.6em; }

a { color: #0066cc; text-decoration: underline; }
.breadcrumbs { font-size: 0.95em; margin-bottom: 1em; }
p.heads-list, ul.runs-on, ol.runs-on { margin-bottom: 0; }
/* The way around the site, and around the page: in the text's own colour, links in theirs, all faded. */
.breadcrumbs, .page-index { opacity: 0.7; }
body:not(.folder-index) .breadcrumbs, .page-index { user-select: none; }
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
    padding: 0 0.9em 0.1em;
    background: #f4f4f4;
}
.pseudo-tag-caption { text-align: center; font-weight: bold; opacity: 0.7; }
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
.index .index-depth-3 { padding-inline-start: 4.5em; font-size: 0.93em; }
.index .index-depth-4 { padding-inline-start: 6em; font-size: 0.93em; }
.index .index-depth-5 { padding-inline-start: 7.5em; font-size: 0.93em; }
/* What only paper has: the deeper headings, the page numbers, and the PDF's own index - see "The PDF's pages". */
.index .index-level-4, .index .index-level-5, .index .index-level-6, .index .index-leader, .index .index-page, .print-index { display: none; }
.page-index { margin-top: 0.6em; }
.page-index a { color: #0066cc; }
${LINE_ROWS_STYLE}
/* On paper. The print button (and הדפסה.rtl.md, a file that exists to be printed) makes this a
   real destination rather than a courtesy, so the page is laid out for the sheet it lands on. */
@media print {
    /* The reading column is the sheet, so the margins move from the body to the page box. */
    @page { margin: ${PRINT_MARGIN_BLOCK_MM}mm ${PRINT_MARGIN_INLINE_MM}mm; }
    body { padding: 0; font-size: ${PRINT_FONT_SIZE}; }
    main { max-width: none; }

    /* The backgrounds are not decoration - the colour is what says whether a block is an עיון or a
       מדרש - so they have to reach the paper, which by default they do not. Inherited, hence body. */
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }

    /* A heading belongs with what follows it; a box, a row or a quote is one thing and is not split. */
    h1, h2, h3, h4, h5, h6 { break-after: avoid; break-inside: avoid; }
    .pseudo-tag, blockquote, table, pre, tr, li { break-inside: avoid; }
    p { orphans: 3; widows: 3; }

    /* Every top-level heading opens a sheet: an embedded file begins with its own, so a collection
       of them prints as the chapters it is. Drop this one rule for a continuous scroll instead.
       Not the first one, though: whatever stands above it - a line of credit, a link - would
       otherwise be a sheet of its own, nearly blank. */
    h1 { break-before: page; }
    main > :first-child, main > h1:first-of-type { break-before: auto; }

    /* A heading a file's layout starts a sheet with, or keeps from starting one (layout-schema.ts). */
    .page-break-before { break-before: page !important; }
    .no-page-break-before { break-before: auto !important; }

    /* The way around the site, which paper - and so every PDF - has no use for. */
    .breadcrumbs, .page-index { display: none; }

    /* An index the reader had collapsed would otherwise print as its title and nothing else. */
    .index details > :not(summary) { display: block; }

    /* On paper an index is "<heading> ........ <page>", the numbers lined up at the line's end (pdf-pages.ts
       fills them in); how deep it goes is the file's layout's to say (pdfStyle()). */
    .print-index { display: block; }
    .index .index-level-4, .index .index-level-5, .index .index-level-6 { display: list-item; }
    .index li a { display: flex; align-items: baseline; }
    .index .index-text { flex: 0 1 auto; }
    .index .index-leader {
        display: block; flex: 1 1 1.5em; min-width: 1.5em; margin: 0 0.35em;
        border-bottom: 1.5px dotted currentColor; opacity: 0.55; transform: translateY(-0.28em);
    }
    .index .index-page { display: block; min-width: 2em; text-align: end; font-variant-numeric: tabular-nums; }

    /* A link on paper cannot be followed; the blue and the underline are only noise. */
    a { color: inherit; text-decoration: none; }
}
`;
