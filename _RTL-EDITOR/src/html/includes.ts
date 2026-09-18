// `<כלול-בהדפסה מקור="..." מ="..." עד="..." כותרות="+1">` - one Markdown file embedded into another.
//
// The embedding happens *in memory only*, on the way to the HTML page: no Markdown file is ever
// rewritten. What comes out is one Markdown document - the including file's text with each
// directive line replaced by the lines it names - which md-to-html.ts then renders as usual. The
// seam is deliberately invisible: an embedded heading joins the page's תוכן העניינים like any
// other, because the point of the tag is a document that reads as one piece.
//
// The attributes:
//
//   מקור      mandatory. A *relative* path to another *Markdown* file, within the served tree.
//   מ         optional. The text of a heading in מקור - the block starts at that heading's line.
//             Left out: the first non-blank line of the file.
//   עד        optional. The text of a heading in מקור - the block stops *before* that heading
//             ("עד ולא עד בכלל"). Left out: the last non-blank line of the file.
//   כותרות    optional. A signed one-digit number: every heading of the embedded block moves by it,
//             so `כותרות="-2"` turns a `### x` into a `# x`.
//
// Every value must be wrapped in one of four quote characters - " ' ׳ ״ - and closed by the same
// one. The tag has to stand alone on its line. Anything else is an error, and an error is *shown*
// rather than thrown: it becomes a `שגיאה-N` block where the directive was, and the page opens with
// the list of them. That way a file with a typo still renders, and says what is wrong with it.
//
// Pure but for the loader it is handed: which file's text comes back for a path is html-mirror.ts's
// business, and so is what to do with the dependencies this reports.

import { posix } from "path";
import { markdownLinksInLine } from "../../public/src/links.js";
import { INCLUDE_TAG_NAME } from "../../public/src/pseudo-tags.js";

const TAG = INCLUDE_TAG_NAME;
const SOURCE = "מקור";
const FROM = "מ";
const TO = "עד";
const SHIFT = "כותרות";
const KNOWN_ATTRIBUTES = new Set([SOURCE, FROM, TO, SHIFT]);

/** The quote characters a value may be wrapped in - the ASCII pair and the Hebrew geresh/gershayim. */
const QUOTE_CHARS = "\"'׳״";

/** The deepest heading Markdown has; a shift may not push one past either end. */
const DEEPEST_HEADING = 6;

/**
 * The character that marks a line this module put into the expanded text.
 *
 * It is stripped from every file that is read, so no file can forge one - the same reason
 * markdown-it replaces a NUL in its input (which is why a NUL could not be used here).
 */
const SENTINEL = "";
const ERROR_LINE = new RegExp(`^${SENTINEL}error:(\\d+)${SENTINEL}$`);

/** One thing that is wrong with the document, named by the page and pointed at from its top. */
export type EmbedError = {
    /** The anchor id, and what the page calls it: "שגיאה-1". */
    id: string;
    /** The file holding the faulty line, as the file tree names it. */
    file: string;
    /** Its 1-based line number in that file. */
    line: number;
    /** What is wrong, in Hebrew. */
    message: string;
};

export type ExpandResult = {
    /** The including file's Markdown, with every directive replaced by what it names. */
    content: string;
    /** In the order they appear in `content`, which is the order their ids were given in. */
    errors: EmbedError[];
    /**
     * Every Markdown file the result was built from - the including file itself, everything
     * embedded into it at any depth, and the files that were *meant* to be embedded but could not
     * be read. The last of those matter as much as the rest: the page has to be rebuilt when one
     * of them finally appears.
     */
    dependencies: Set<string>;
};

/** Reads a Markdown file of the tree, or answers null when there is none. */
export type MarkdownLoader = (mdPath: string) => Promise<string | null>;

/**
 * Is this line one of the `שגיאה-N` markers, and which error is it?  (md-to-html.ts's business.)
 */
export function errorLineIndex(lineText: string): number | null {
    const match = ERROR_LINE.exec(lineText);
    return match ? Number(match[1]) : null;
}

// ------------------------------------------------------------------------------------------------
// The directive line

/** What `מקור`, `מ`, `עד` and `כותרות` came to, once the line was found to be well-formed. */
export type IncludeDirective = {
    source: string;
    from?: string;
    to?: string;
    /** 0 when `כותרות` was left out - and then nothing is shifted. */
    headingShift: number;
};

export type ParsedIncludeLine =
    | { kind: "none" }
    | { kind: "error"; message: string }
    | { kind: "include"; directive: IncludeDirective };

const IS_SPACE = /\s/;

/**
 * A single line, read as a `<כלול-בהדפסה>` directive.
 *
 * A line that does not mention the tag at all is `none`; one that mentions it and gets it wrong is
 * an `error`, never plain text - a silently ignored typo in a printing directive is the one outcome
 * worth avoiding.
 */
export function parseIncludeLine(line: string): ParsedIncludeLine {
    const start = line.indexOf(`<${TAG}`);
    if (start < 0) return { kind: "none" };
    const afterName = line[start + 1 + TAG.length];
    // `<כלול-בהדפסהX` is a different name, and none of our business.
    if (afterName !== undefined && afterName !== ">" && !IS_SPACE.test(afterName)) return { kind: "none" };

    const error = (message: string): ParsedIncludeLine => ({ kind: "error", message });
    const attributes = new Map<string, string>();
    let i = start + 1 + TAG.length;

    for (;;) {
        while (i < line.length && IS_SPACE.test(line[i])) i++;
        if (i >= line.length) return error(`התג <${TAG}> אינו נסגר בתו ">"`);
        if (line[i] === ">") {
            i++;
            break;
        }

        const nameStart = i;
        while (i < line.length && !IS_SPACE.test(line[i]) && line[i] !== "=" && line[i] !== ">"
            && !QUOTE_CHARS.includes(line[i])) i++;
        const name = line.slice(nameStart, i);
        if (!name) return error(`תו לא צפוי בתג <${TAG}>: ${line[i]}`);
        if (!KNOWN_ATTRIBUTES.has(name)) {
            return error(`תכונה לא מוכרת בתג <${TAG}>: "${name}". התכונות המוכרות הן: ${[...KNOWN_ATTRIBUTES].join(", ")}`);
        }
        if (attributes.has(name)) return error(`התכונה "${name}" מופיעה בתג יותר מפעם אחת`);

        while (i < line.length && IS_SPACE.test(line[i])) i++;
        if (line[i] !== "=") return error(`לתכונה "${name}" חסר ערך`);
        i++;
        while (i < line.length && IS_SPACE.test(line[i])) i++;

        const quote = line[i];
        if (!quote || !QUOTE_CHARS.includes(quote)) {
            return error(`ערך התכונה "${name}" חייב להיות מוקף במרכאות - ${quotesForMessage()}`);
        }
        const close = line.indexOf(quote, i + 1);
        if (close < 0) {
            return error(`ערך התכונה "${name}" נפתח בתו ${quote} ואינו נסגר באותו תו - אסור לערבב סוגי מרכאות`);
        }
        attributes.set(name, line.slice(i + 1, close));
        i = close + 1;
        if (i < line.length && !IS_SPACE.test(line[i]) && line[i] !== ">") {
            return error(`חסר רווח אחרי ערך התכונה "${name}"`);
        }
    }

    if (line.slice(0, start).trim() || line.slice(i).trim()) {
        return error(`התג <${TAG}> חייב לעמוד לבדו בשורה, בלי שום טקסט נוסף לפניו או אחריו`);
    }

    const source = attributes.get(SOURCE);
    if (source === undefined) return error(`חסרה התכונה "${SOURCE}", שהיא חובה`);
    if (!source.trim()) return error(`התכונה "${SOURCE}" ריקה`);

    const shiftText = attributes.get(SHIFT);
    if (shiftText !== undefined && !/^[+-]\d$/.test(shiftText)) {
        return error(`ערך התכונה "${SHIFT}" חייב להיות מספר חד-ספרתי עם סימן, למשל "+1" או "-2" - ולא "${shiftText}"`);
    }

    return {
        kind: "include",
        directive: {
            source: source.trim(),
            from: attributes.get(FROM),
            to: attributes.get(TO),
            headingShift: Number(shiftText) || 0,          // `|| 0` for the "-0" a lone minus gives
        },
    };
}

function quotesForMessage(): string {
    return [...QUOTE_CHARS].map(quote => `${quote}...${quote}`).join(" או ");
}

// ------------------------------------------------------------------------------------------------
// Fenced code, headings

/**
 * A running answer to "is this line code rather than Markdown?" - true for a fence marker and for
 * every line between a pair of them. Nothing inside a fence is a heading or a directive.
 */
function fenceScanner(): (line: string) => boolean {
    let fence: string | null = null;
    return line => {
        const match = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line);
        if (fence === null) {
            // An info string may not hold a backtick, which is what tells ```` ``a`` ```` from a fence.
            if (match && !(match[1][0] === "`" && match[2].includes("`"))) {
                fence = match[1];
                return true;
            }
            return false;
        }
        if (match && match[1][0] === fence[0] && match[1].length >= fence.length && !match[2].trim()) {
            fence = null;
        }
        return true;
    };
}

const ATX_HEADING = /^( {0,3})(#{1,6})(\s.*)?$/;

type Heading = { line: number; level: number; text: string };

/** Every ATX heading of these lines, the ones inside a code fence left out. */
function headingsOf(lines: string[]): Heading[] {
    const headings: Heading[] = [];
    const inFence = fenceScanner();
    lines.forEach((line, index) => {
        if (inFence(line)) return;
        const match = ATX_HEADING.exec(line);
        if (match) {
            headings.push({
                line: index,
                level: match[2].length,
                text: (match[3] ?? "").trim().replace(/\s+#+$/, "").trim(),
            });
        }
    });
    return headings;
}

/**
 * A heading's text as it is compared - niqqud, punctuation and doubled spaces gone.
 *
 * `מ="ויאמר אלהים"` should find `## וַיֹּאמֶר אֱלֹהִים`: asking the author to reproduce the niqqud
 * exactly would make the attribute unusable in this project's files.
 */
function headingKey(text: string): string {
    return text
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .replace(/[^\p{L}\p{N}\s]/gu, "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
}

type Found = { heading: Heading } | { message: string };

/** The one heading of `headings` that `value` names - or what to say about there being none, or several. */
function findHeading(headings: Heading[], value: string, attribute: string, sourcePath: string): Found {
    const wanted = value.trim();
    let matches = headings.filter(heading => heading.text === wanted);
    if (!matches.length) {
        const key = headingKey(wanted);
        matches = key ? headings.filter(heading => headingKey(heading.text) === key) : [];
    }
    if (!matches.length) {
        return { message: `לא נמצאה בקובץ "${sourcePath}" כותרת שנוסחה "${wanted}" (התכונה "${attribute}")` };
    }
    if (matches.length > 1) {
        return {
            message: `בקובץ "${sourcePath}" יש ${matches.length} כותרות שנוסחן "${wanted}"`
                + ` (בשורות ${matches.map(heading => heading.line + 1).join(", ")}), ואי אפשר לדעת לאיזו מהן הכוונה`
                + ` (התכונה "${attribute}")`,
        };
    }
    return { heading: matches[0] };
}

// ------------------------------------------------------------------------------------------------
// Choosing the block, and moving its headings

type Range = { from: number; to: number };

/**
 * The half-open line range `מ`/`עד` choose out of the source file.
 *
 * `מ` is the heading's own line; `עד` is the line *before* its heading - "עד ולא עד בכלל" - so
 * `מ="פרק א" עד="פרק ב"` is exactly the first chapter. Blank lines at either end are dropped,
 * which is also what makes the defaults (the whole file) skip the file's own blank margins.
 */
function selectRange(lines: string[], directive: IncludeDirective, sourcePath: string): Range | { message: string } {
    const headings = directive.from === undefined && directive.to === undefined ? [] : headingsOf(lines);

    let from = 0;
    if (directive.from !== undefined) {
        const found = findHeading(headings, directive.from, FROM, sourcePath);
        if ("message" in found) return found;
        from = found.heading.line;
    }

    let to = lines.length;
    if (directive.to !== undefined) {
        const found = findHeading(headings, directive.to, TO, sourcePath);
        if ("message" in found) return found;
        to = found.heading.line;
    }

    if (to <= from) {
        return {
            message: `הכותרת שבתכונה "${TO}" ("${directive.to}") אינה מופיעה בקובץ "${sourcePath}"`
                + ` אחרי זו שבתכונה "${FROM}" ("${directive.from ?? ""}")`,
        };
    }
    while (from < to && !lines[from].trim()) from++;
    while (to > from && !lines[to - 1].trim()) to--;
    if (from === to) return { message: `הקטע הנבחר מן הקובץ "${sourcePath}" ריק` };
    return { from, to };
}

/** Every heading of the block, moved by `shift` levels - or what to say about a move off the scale. */
function shiftHeadings(lines: string[], shift: number, sourcePath: string): string[] | { message: string } {
    if (!shift) return lines;
    const inFence = fenceScanner();
    const shifted: string[] = [];
    for (const line of lines) {
        const match = inFence(line) ? null : ATX_HEADING.exec(line);
        if (!match) {
            shifted.push(line);
            continue;
        }
        const level = match[2].length + shift;
        const heading = line.trim();
        if (level < 1) {
            return {
                message: `התכונה "${SHIFT}" ("${signed(shift)}") מורידה את הכותרת "${heading}" של הקובץ`
                    + ` "${sourcePath}" מתחת לרמה 1, ואין רמה כזאת`,
            };
        }
        if (level > DEEPEST_HEADING) {
            return {
                message: `התכונה "${SHIFT}" ("${signed(shift)}") מעלה את הכותרת "${heading}" של הקובץ`
                    + ` "${sourcePath}" מעל לרמה ${DEEPEST_HEADING}, שהיא העמוקה ביותר`,
            };
        }
        shifted.push(match[1] + "#".repeat(level) + (match[3] ?? ""));
    }
    return shifted;
}

function signed(shift: number): string {
    return shift > 0 ? `+${shift}` : String(shift);
}

// ------------------------------------------------------------------------------------------------
// Links of an embedded file

// A scheme ("https:", "mailto:") or a protocol-relative URL - not a path in the tree.
const EXTERNAL_TARGET = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
// Only a plain path is rewritten: one with a title after it, or wrapped in <>, is left as written.
const PLAIN_TARGET = /^[^\s<>]+$/;

/**
 * The links of an embedded block, made to point at the same files from their new home.
 *
 * A link is written relative to the file it stands in, and that file is not the one whose page this
 * is about to become - so every relative target is turned into a "/"-rooted one, which means the
 * root of the served tree wherever it ends up. Already-rooted targets pass through unchanged, which
 * is what lets a file embedded two levels deep be rewritten once per level with the same result.
 */
function rewriteLinks(lines: string[], fromFilePath: string): string[] {
    const inFence = fenceScanner();
    return lines.map(line => {
        if (inFence(line)) return line;
        const links = markdownLinksInLine(line);
        if (!links.length) return line;
        let rewritten = "";
        let last = 0;
        for (const link of links) {
            const targetStart = link.to - 1 - link.rawTarget.length;
            const target = rootedTarget(fromFilePath, link.rawTarget);
            if (target === null) continue;
            rewritten += line.slice(last, targetStart) + target;
            last = link.to - 1;
        }
        return rewritten + line.slice(last);
    });
}

/**
 * A link target rooted at the served tree, or null for one that must be left alone.
 *
 * The target is never decoded: what goes back into the Markdown has to be spelled the way a link
 * target is, percent-escapes and all - md-to-html.ts decodes it when it rewrites the href.
 */
function rootedTarget(fromFilePath: string, rawTarget: string): string | null {
    if (!PLAIN_TARGET.test(rawTarget) || EXTERNAL_TARGET.test(rawTarget)) return null;
    const hash = rawTarget.indexOf("#");
    const pathPart = hash < 0 ? rawTarget : rawTarget.slice(0, hash);
    const suffix = hash < 0 ? "" : rawTarget.slice(hash);
    if (!pathPart) return null;                                 // "#somewhere" - inside this very page

    const segments = pathPart.startsWith("/") ? [] : fromFilePath.split("/").slice(0, -1);
    for (const segment of pathPart.split("/")) {
        if (!segment || segment === ".") continue;
        if (segment === "..") {
            if (!segments.length) return null;                  // climbs out of the tree - leave it be
            segments.pop();
            continue;
        }
        segments.push(segment);
    }
    if (!segments.length) return null;
    return "/" + segments.join("/") + suffix;
}

// ------------------------------------------------------------------------------------------------
// Expanding

/**
 * One Markdown document out of a file and everything it embeds.
 *
 * @param filePath  the including file, as the file tree names it
 * @param content   its text
 * @param load      how to read another file of the tree
 */
export async function expandIncludes(
    filePath: string,
    content: string,
    load: MarkdownLoader,
): Promise<ExpandResult> {
    const errors: EmbedError[] = [];
    const dependencies = new Set<string>([filePath]);
    const loaded = new Map<string, string[] | null>();

    /** Records an error and gives back the line that stands for it in the expanded text. */
    const fail = (file: string, lineIndex: number, message: string): string => {
        errors.push({ id: `שגיאה-${errors.length + 1}`, file, line: lineIndex + 1, message });
        return `${SENTINEL}error:${errors.length - 1}${SENTINEL}`;
    };

    const loadLines = async (mdPath: string): Promise<string[] | null> => {
        if (!loaded.has(mdPath)) loaded.set(mdPath, toLines(await load(mdPath)));
        return loaded.get(mdPath)!;
    };

    /**
     * @param stack  the chain of files that led here, this one last - which is what a cycle is found in
     */
    const expand = async (path: string, lines: string[], stack: string[]): Promise<string[]> => {
        const out: string[] = [];
        const inFence = fenceScanner();

        for (let index = 0; index < lines.length; index++) {
            const line = lines[index];
            if (inFence(line)) {
                out.push(line);
                continue;
            }
            const parsed = parseIncludeLine(line);
            if (parsed.kind === "none") {
                out.push(line);
                continue;
            }
            if (parsed.kind === "error") {
                out.push(fail(path, index, parsed.message));
                continue;
            }

            const directive = parsed.directive;
            const target = sourcePathOf(path, directive.source);
            if ("message" in target) {
                out.push(fail(path, index, target.message));
                continue;
            }
            dependencies.add(target.path);

            if (stack.includes(target.path)) {
                out.push(fail(path, index, `הפניה מעגלית: הקובץ "${target.path}" כבר נמצא בשרשרת ההכללה`
                    + ` (${[...stack, target.path].join(" ← ")})`));
                continue;
            }
            const sourceLines = await loadLines(target.path);
            if (!sourceLines) {
                out.push(fail(path, index, `הקובץ "${target.path}" לא נמצא, או שאי אפשר לקרוא אותו`));
                continue;
            }

            const range = selectRange(sourceLines, directive, target.path);
            if ("message" in range) {
                out.push(fail(path, index, range.message));
                continue;
            }
            const expanded = await expand(
                target.path,
                sourceLines.slice(range.from, range.to),
                [...stack, target.path],
            );
            const shifted = shiftHeadings(rewriteLinks(expanded, target.path), directive.headingShift, target.path);
            if ("message" in shifted) {
                out.push(fail(path, index, shifted.message));
                continue;
            }
            // A blank line on either side: the block is a document of its own, and must not run
            // into the paragraph above or below it.
            out.push("", ...trimBlankLines(shifted), "");
        }
        return out;
    };

    const expanded = await expand(filePath, toLines(content)!, [filePath]);
    return { content: expanded.join("\n"), errors, dependencies };
}

/** The path `מקור` names, or what to say about it not being one. */
function sourcePathOf(fromFilePath: string, source: string): { path: string } | { message: string } {
    if (source.startsWith("/")) {
        return { message: `הנתיב שבתכונה "${SOURCE}" חייב להיות יחסי, ולא להתחיל ב-"/": "${source}"` };
    }
    if (!source.endsWith(".md")) {
        return { message: `הנתיב שבתכונה "${SOURCE}" חייב להצביע על קובץ Markdown, שסיומתו ".md": "${source}"` };
    }
    const path = posix.join(posix.dirname(fromFilePath), source);
    if (path.startsWith("../") || path === "..") {
        return { message: `הנתיב שבתכונה "${SOURCE}" יוצא אל מחוץ לתיקיית השורש: "${source}"` };
    }
    return { path };
}

function toLines(content: string | null): string[] | null {
    if (content === null) return null;
    // The sentinel is stripped here, and nowhere else: this is the one door a file's text comes in by.
    return content.replace(/\r\n?/g, "\n").split(SENTINEL).join("").split("\n");
}

function trimBlankLines(lines: string[]): string[] {
    let from = 0;
    let to = lines.length;
    while (from < to && !lines[from].trim()) from++;
    while (to > from && !lines[to - 1].trim()) to--;
    return lines.slice(from, to);
}
