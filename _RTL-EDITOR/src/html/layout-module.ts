// A file's chain of layout modules (the contract: layout-schema.ts) - found, loaded, run for the file,
// merged, and put into its text for the renderer to read.
//
//     layoutChainFor()     the modules that lay a file out: every folder's `.layout.ts` above it, then its own
//     loadLayoutModule()   a module, loaded with what it imports, checked
//     layoutFileOf()       what a module is told about a file (LayoutFile) - read lazily
//     runChain()           what each module of the chain answers, checked, and merged
//     resolveLayout()      the merged answer with every function in it called - plain data (ResolvedLayout)
//     applyLayout()        the file's text with the marks of layout-marks.ts in it
//     layoutFor()          all of it, for the mirror and the layout tools alike
//     outputOf()           only whether the file gets a page at all - cheap
//
// The editor knows nothing of what the file is about: it hands the modules elementary capabilities, and
// takes back elementary decisions (layout-schema.ts). What goes wrong - an import that is not a file of
// the repository, a syntax error, a function that throws, an answer of the wrong shape - is a problem for
// the page to show, never an exception: the page is still made, without what that module would have said.

import { createHash } from "crypto";
import { readFileSync, statSync } from "fs";
import { stat } from "fs/promises";
import { registerHooks } from "module";
import { dirname, posix, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { isRtlFile } from "../../public/src/tables.js";
import { fenceScanner } from "./includes.ts";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK, NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK, ROW_MARK, stripLayoutMarks } from "./layout-marks.ts";
import type {
    FileLayout, FolderLayout, FooterContext, Heading, HeadingContext, LayoutEntries, LayoutFile, LayoutOfFile, LayoutOfFolder,
    LineGroup, Output, PageSettings, RunningHeading, Static,
} from "./layout-schema.ts";
import { paragraphRanges } from "./md-to-html.ts";
import { measureAt } from "./text-measure.ts";

/** A folder's layout module - for every file under it. */
export const FOLDER_LAYOUT_NAME = ".layout.ts";
const LAYOUT_SUFFIX = ".layout.ts";

/** A file's own layout module: `a/b/c.md` → `a/b/c.layout.ts`. */
export function layoutPathFor(mdPath: string): string {
    return mdPath.replace(/\.md$/, LAYOUT_SUFFIX);
}

/** Every folder's layout module above a file, the root's first - there or not. */
export function folderLayoutPathsFor(mdPath: string): string[] {
    const folder = posix.dirname(mdPath);
    const parts = folder === "." ? [] : folder.split("/");
    return [FOLDER_LAYOUT_NAME, ...parts.map((_, i) => posix.join(...parts.slice(0, i + 1), FOLDER_LAYOUT_NAME))];
}

/** The modules that lay a file out, in the order they are run - there or not. */
export function layoutChainFor(mdPath: string): string[] {
    return [...folderLayoutPathsFor(mdPath), layoutPathFor(mdPath)];
}

export function isLayoutFile(path: string): boolean {
    return posix.basename(path).endsWith(LAYOUT_SUFFIX);
}

export function isFolderLayoutFile(path: string): boolean {
    return posix.basename(path) === FOLDER_LAYOUT_NAME;
}

/** The MD5 a file's own layout records of it (`sourceMd5`) - of its text as it is on disk. */
export function md5Of(text: string): string {
    return createHash("md5").update(text).digest("hex");
}

// ------------------------------------------------------------------------------------------------
// Loading
//
// A module is imported as `file:///.../x.layout.ts?layout=<version>`, a version never used before, and every import
// made from a URL carrying `?layout=` is given the same one (the hook below). A new version is a new URL at every
// depth, so a module that changed - or any file it imports - is loaded afresh: Node's own cache of modules cannot be
// cleared. As that cache never forgets, an old version stays in memory once loaded - a few KB per edit.

/** A module, ready to run - and every file it was loaded from (absolute), for the page to depend on. */
export type LoadedLayout = { layout: (...args: never[]) => unknown, files: string[] } | { error: string, files: string[] };

const loadedModules = new Map<string, { files: string[], stamp: string, loaded: LoadedLayout }>();

const VERSION_PARAMETER = "layout";
let lastVersion = 0;
/** Every file a version being loaded has asked for, the module's own first - with its mtime when it was asked for. */
const versionFiles = new Map<string, Map<string, number | undefined>>();

/** An import a layout module may not make - said as it is, not as a failure to load. */
class RefusedImport extends Error {}

/** The version a module's URL carries - null for any module but a layout module's or what it imports. */
function versionOf(url: string | undefined): string | null {
    return url?.startsWith("file:") ? new URL(url).searchParams.get(VERSION_PARAMETER) : null;
}

/**
 * A `.ts` file is an ES module, said so here: the repository's root has no package.json to say it (one would turn
 * scripts/*.js into ES modules), and Node would warn that it had to guess, for the root's `.layout.ts`.
 */
function formatOf(path: string): string | undefined {
    return /\.ts(\?|$)/.test(path) ? "module-typescript" : undefined;
}

registerHooks({
    resolve(specifier, context, nextResolve) {
        const version = versionOf(context.parentURL);
        // The module itself is taken as it is asked for - not by its real path, so that its imports are found from
        // where it is said to be, and are recorded under that path.
        if (version === null) return versionOf(specifier) === null ? nextResolve(specifier, context) : { url: specifier, format: formatOf(specifier), shortCircuit: true };
        // A type-only import is gone before it gets here: whatever is asked for here runs.
        const importer = fileURLToPath(context.parentURL!);
        if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
            throw new RefusedImport(`a layout module may import only files of the repository, by a relative path - not "${specifier}"`);
        }
        const target = resolve(dirname(importer), specifier);
        const info = statSync(target, { throwIfNoEntry: false });
        if (!info?.isFile()) {
            const hint = posix.extname(specifier) ? "" : ` - an import names its file in full: "${specifier}.ts"`;
            throw new RefusedImport(`${posix.basename(importer)} imports "${specifier}", which is no file${hint}`);
        }
        const files = versionFiles.get(version);
        if (files && !files.has(target)) files.set(target, info.mtimeMs);
        return { url: `${pathToFileURL(target).href}?${VERSION_PARAMETER}=${version}`, format: formatOf(target), shortCircuit: true };
    },
});

/** What a module's files are, as of now - their mtimes. */
async function stampOf(files: string[]): Promise<string> {
    return (await Promise.all(files.map(async file => `${file}:${(await stat(file).catch(() => null))?.mtimeMs}`))).join("|");
}

/** Where a syntax error is - Node says it only on the first line of the stack: `<path or URL>:<line>`. */
function whereOf(error: unknown): string {
    const where = error instanceof SyntaxError ? /^(\S.*?)(?:\?\S*)?:(\d+)\n/.exec(error.stack ?? "") : null;
    return where ? ` (${posix.basename(where[1])}, line ${where[2]})` : "";
}

/**
 * The layout module at `path`, loaded with what it imports - null when there is none. Loaded again when
 * any of its files changes, and only then.
 *
 * @param path  absolute, or relative to the current folder - made absolute here, as `import()` would take a
 *              relative path to be relative to this module (the server's root is "..")
 */
export async function loadLayoutModule(path: string): Promise<LoadedLayout | null> {
    path = resolve(path);
    const info = await stat(path).catch(() => null);
    if (!info?.isFile()) return null;

    // Unchanged files are what it was: no reading, no loading - only a stat of each.
    const cached = loadedModules.get(path);
    if (cached && await stampOf(cached.files) === cached.stamp) return cached.loaded;

    // Each file's mtime is taken before Node reads it, so that a change made meanwhile is a change of the stamp.
    const version = String(++lastVersion);
    const seen = new Map<string, number | undefined>([[path, info.mtimeMs]]);
    versionFiles.set(version, seen);
    let loaded: LoadedLayout;
    try {
        const module = await import(`${pathToFileURL(path).href}?${VERSION_PARAMETER}=${version}`);
        loaded = typeof module.default === "function" ? { layout: module.default, files: [...seen.keys()] }
            : { error: "its default export must be a function: (file, above) => its layout", files: [...seen.keys()] };
    } catch (error) {
        const message = error instanceof RefusedImport ? error.message : `it does not load: ${(error as Error).message}${whereOf(error)}`;
        loaded = { error: message, files: [...seen.keys()] };
    } finally {
        versionFiles.delete(version);
    }
    const stamp = [...seen].map(([file, mtimeMs]) => `${file}:${mtimeMs}`).join("|");
    loadedModules.set(path, { files: loaded.files, stamp, loaded });
    return loaded;
}

/** What a module is, as of now - the stamp of the files it was loaded from; "" when there is none. */
async function moduleStamp(path: string): Promise<string> {
    return await loadLayoutModule(path) ? loadedModules.get(resolve(path))!.stamp : "";
}

// ------------------------------------------------------------------------------------------------
// What a module is told

const HEADING = /^ {0,3}(#{1,6})[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/;

const helpers: LayoutFile["helpers"] = {
    resolve: (value, context) => typeof value === "function" ? value(context) : value,
};

/**
 * A file as a layout module sees it - its text read, and parsed, only once something asks.
 *
 * @param content  its text, or how to read it
 */
export function layoutFileOf(mdPath: string, content: string | (() => string)): LayoutFile {
    const once = <T>(make: () => T) => {
        let value: T | undefined;
        return () => value ??= make();
    };
    const text = once(() => stripLayoutMarks((typeof content === "string" ? content : content()).replace(/\r\n?/g, "\n")));
    const lines = once(() => text().split("\n"));
    const paragraphs = once(() => paragraphRanges(text()));
    const headings = once(() => {
        const found: Heading[] = [];
        const inFence = fenceScanner();
        lines().forEach((line, index) => {
            if (inFence(line)) return;
            const match = HEADING.exec(line);
            if (match) found.push({ level: match[1].length, text: match[2], index });
        });
        return found;
    });
    const measures = new Map<string, ReturnType<typeof measureAt>>();
    return {
        path: mdPath,
        name: posix.basename(mdPath),
        get content() { return text(); },
        get lines() { return lines(); },
        get paragraphs() { return paragraphs(); },
        get headings() { return headings(); },
        get rtl() { return isRtlFile(mdPath, text()); },
        measure: page => {
            const key = JSON.stringify(page ?? {});
            let measure = measures.get(key);
            if (!measure) measures.set(key, measure = measureAt(page));
            return measure;
        },
        helpers,
    };
}

// ------------------------------------------------------------------------------------------------
// What the chain answers

const ENTRIES = new Set(["output", "page", "pdf", "groups", "pageBreakBefore", "attention", "data"]);
const FILE_ENTRIES = new Set([...ENTRIES, "sourceMd5"]);
const OUTPUTS = new Set(["laid-out", "plain", "none"]);
const PAGE_ENTRIES = new Set(["fontSize", "marginInline", "marginBlock"]);
const PDF_ENTRIES = new Set(["indexDepth", "footerTitle"]);
/** The deepest heading there is - an index that deep lists them all. */
export const DEEPEST_HEADING = 6;

const isStrings = (value: unknown): value is readonly string[] => Array.isArray(value) && value.every(item => typeof item === "string");
const isCount = (value: unknown): value is number => Number.isInteger(value) && (value as number) >= 0;

/** Whether a value is plain data, at any depth - no function, nothing that is not JSON. */
function isStatic(value: unknown): value is Static {
    if (value === null || ["string", "number", "boolean"].includes(typeof value)) return true;
    if (Array.isArray(value)) return value.every(isStatic);
    return typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype && Object.values(value as object).every(isStatic);
}

/** What is wrong with a line group, if anything. */
function groupError(group: unknown, at: number): string | null {
    if (typeof group !== "object" || group === null) return `"groups"[${at}] must be an object`;
    const g = group as Partial<LineGroup>;
    if (!isCount(g.from) || !isCount(g.to) || g.to < g.from) return `"groups"[${at}] must have lines "from" .. "to", 0-based, in order`;
    const { from, to } = g as LineGroup;
    if (g.rowStarts !== "auto" && !(Array.isArray(g.rowStarts) && g.rowStarts.every(line => isCount(line) && line >= from && line <= to))) {
        return `"groups"[${at}].rowStarts must be "auto", or lines of the group`;
    }
    if (g.margins !== undefined && !(Array.isArray(g.margins) && g.margins.length === to - from + 1 && g.margins.every(isCount))) {
        return `"groups"[${at}].margins must be a count of characters for every line of the group`;
    }
    return null;
}

/** What is wrong with a module's answer, as plain JavaScript sees it - the types are not there at run time. */
function shapeError(answer: unknown, own: boolean): string | null {
    if (typeof answer !== "object" || answer === null || Array.isArray(answer)) {
        return own ? "it must return an object (a file's own layout cannot be null)" : "it must return an object, or null";
    }
    const layout = answer as Record<string, unknown>;
    const known = own ? FILE_ENTRIES : ENTRIES;
    const unknown = Object.keys(layout).filter(key => !known.has(key));
    if (unknown.length) return `unknown entries: ${unknown.join(", ")} (known: ${[...known].join(", ")})`;
    if (own && (typeof layout.sourceMd5 !== "string" || !/^[0-9a-f]{32}$/.test(layout.sourceMd5))) {
        return "\"sourceMd5\" must be the MD5 of the Markdown file, 32 hex digits";
    }
    if (layout.output !== undefined && !OUTPUTS.has(layout.output as string)) return `"output" must be one of ${[...OUTPUTS].join(", ")}`;
    if (layout.page !== undefined) {
        if (typeof layout.page !== "object" || layout.page === null) return "\"page\" must be an object";
        for (const [key, value] of Object.entries(layout.page)) {
            if (!PAGE_ENTRIES.has(key)) return `unknown entry "page.${key}" (known: ${[...PAGE_ENTRIES].join(", ")})`;
            if (value !== undefined && (typeof value !== "number" || !(value > 0))) return `"page.${key}" must be a positive number`;
        }
    }
    if (layout.pdf !== undefined) {
        if (typeof layout.pdf !== "object" || layout.pdf === null) return "\"pdf\" must be an object";
        for (const [key, value] of Object.entries(layout.pdf)) {
            if (!PDF_ENTRIES.has(key)) return `unknown entry "pdf.${key}" (known: ${[...PDF_ENTRIES].join(", ")})`;
        }
        const { indexDepth, footerTitle } = layout.pdf as Record<string, unknown>;
        if (indexDepth !== undefined && !(isCount(indexDepth) && indexDepth <= DEEPEST_HEADING)) {
            return `"pdf.indexDepth" must be a whole number, 0 to ${DEEPEST_HEADING}`;
        }
        if (footerTitle !== undefined && typeof footerTitle !== "string" && typeof footerTitle !== "function") {
            return "\"pdf.footerTitle\" must be a string, or a function";
        }
    }
    if (layout.groups !== undefined) {
        if (!Array.isArray(layout.groups)) return "\"groups\" must be a list";
        for (const [i, group] of layout.groups.entries()) {
            const wrong = groupError(group, i);
            if (wrong) return wrong;
        }
    }
    const pageBreak = layout.pageBreakBefore;
    if (pageBreak !== undefined && pageBreak !== null && typeof pageBreak !== "boolean" && typeof pageBreak !== "function") {
        return "\"pageBreakBefore\" must be a boolean, null, or a function";
    }
    if (layout.attention !== undefined && !isStrings(layout.attention)) return "\"attention\" must be a list of strings";
    if (layout.data !== undefined && !(typeof layout.data === "object" && layout.data !== null && isStatic(layout.data))) {
        return "\"data\" must be an object of plain data";
    }
    return null;
}

/** Something a module of the chain got wrong - its path from the root, and what. */
export type LayoutProblem = { file: string, message: string };

export type LayoutChain = {
    file: LayoutFile;
    /** What the folders' modules answered, the root's first - those that said nothing left out. */
    folders: FolderLayout[];
    /** The file's own layout - null when it has none, or it went wrong. */
    own: FileLayout | null;
    /** All of it merged: the nearer a module, the stronger. */
    merged: LayoutEntries;
    /** Whether any module answered at all. */
    answered: boolean;
    problems: LayoutProblem[];
    /** Every file the chain's modules were loaded from, from the root - for the page to depend on. */
    files: string[];
};

/** The answers merged in order, each entry the last one given - `page` and `pdf` field by field. */
function merge(answers: readonly LayoutEntries[]): LayoutEntries {
    const merged: Record<string, unknown> = {};
    for (const answer of answers) {
        for (const key of ENTRIES) {
            const value = (answer as Record<string, unknown>)[key];
            if (value === undefined) continue;
            merged[key] = key === "page" || key === "pdf" ? { ...merged[key] as object, ...value as object } : value;
        }
    }
    return merged as LayoutEntries;
}

/**
 * Runs the file's chain of modules.
 *
 * @param root     the folder `file.path` is relative to
 * @param ownPath  another module to be the file's own, absolute - the layout tools' `--layout=`
 */
export async function runChain(root: string, file: LayoutFile, ownPath?: string): Promise<LayoutChain> {
    const problems: LayoutProblem[] = [];
    const folders: FolderLayout[] = [];
    const files = new Set<string>();
    let own: FileLayout | null = null;
    let answered = false;

    const run = async (relativePath: string, absolutePath: string, isOwn: boolean) => {
        const loaded = await loadLayoutModule(absolutePath);
        if (!loaded) return;
        for (const used of loaded.files) files.add(posix.relative(resolve(root), used));
        const fail = (message: string) => problems.push({ file: relativePath, message });
        if ("error" in loaded) return fail(loaded.error);
        let answer: unknown;
        try {
            answer = (loaded.layout as LayoutOfFolder | LayoutOfFile)(file, [...folders]);
        } catch (error) {
            return fail(`it threw: ${(error as Error).message}`);
        }
        if (answer === null && !isOwn) return;
        const wrong = shapeError(answer, isOwn);
        if (wrong) return fail(wrong);
        answered = true;
        if (isOwn) own = answer as FileLayout;
        else folders.push(answer as FolderLayout);
    };

    for (const path of folderLayoutPathsFor(file.path)) await run(path, posix.join(root, path), false);
    const ownRelative = ownPath ? posix.relative(resolve(root), resolve(ownPath)) : layoutPathFor(file.path);
    await run(ownRelative, ownPath ?? posix.join(root, ownRelative), true);

    const ownAnswer = own as FileLayout | null;
    return {
        file, folders, own: ownAnswer, merged: merge(ownAnswer ? [...folders, ownAnswer] : folders), answered, problems,
        files: [...files],
    };
}

/**
 * Whether the file gets a page and a PDF, and should have a layout of its own (layout-schema.ts's Output).
 * Reads the file only if a module asks for more of it than its path.
 */
export async function outputOf(root: string, mdPath: string): Promise<Output> {
    // Asked of every file at every sweep: the answer stands until the file or a module of its chain changes.
    const source = await stat(posix.join(root, mdPath)).catch(() => null);
    const stamps = await Promise.all(layoutChainFor(mdPath).map(path => moduleStamp(posix.join(root, path))));
    const key = `${resolve(root)}|${mdPath}`, stamp = `${source?.mtimeMs}|${stamps.join("|")}`;
    const known = outputs.get(key);
    if (known?.stamp === stamp) return known.output;

    const file = layoutFileOf(mdPath, () => readFileSync(posix.join(root, mdPath), "utf-8"));
    let output: Output;
    try {
        output = (await runChain(root, file)).merged.output ?? "plain";
    } catch {
        output = "plain";
    }
    outputs.set(key, { stamp, output });
    return output;
}

const outputs = new Map<string, { stamp: string, output: Output }>();

// ------------------------------------------------------------------------------------------------
// The answer, resolved

/**
 * A file's layout with no function left in it - what the page is made with - but one: the footer's title,
 * whose context (the headings at the top of a sheet) exists only once the page is made, and for a book only
 * once the files it embeds are in it.
 */
export type ResolvedLayout = {
    output: Output;
    page: PageSettings | null;
    pdf: ResolvedPdfSettings;
    groups: readonly LineGroup[];
    /** Whether each heading starts a sheet, by its line - those the layout left to the mirror are not here. */
    pageBreaks: Map<number, boolean>;
    attention: readonly string[];
    data: { readonly [key: string]: Static };
    /** What the file's own layout says its MD5 was - null when it has none. */
    sourceMd5: string | null;
};

/** What the PDF is made with (PdfSettings) - every entry given. */
export type ResolvedPdfSettings = {
    indexDepth: number;
    /** The footer's title for the headings in force at the top of a sheet. May throw, or answer a non-string. */
    footerTitle: (chain: readonly RunningHeading[]) => unknown;
};

/** The mirror's own footer title: the outermost heading in force. */
export const defaultFooterTitle = (chain: readonly RunningHeading[]): string => chain[0]?.text ?? "";

/** What a file no module says anything of is printed with. */
export const DEFAULT_PDF_SETTINGS: ResolvedPdfSettings = { indexDepth: DEEPEST_HEADING, footerTitle: defaultFooterTitle };

/** A heading's Markdown as plain text - near enough to what the page prints, for checking a module early. */
function plainText(markdown: string): string {
    return markdown.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[\^[^\]]*\]/g, "").replace(/[*_`]/g, "").trim();
}

/** Every chain of headings a sheet could open under - the empty one, and the one each heading begins. */
function headingChains(headings: readonly Heading[]): RunningHeading[][] {
    const chains: RunningHeading[][] = [[]];
    let chain: RunningHeading[] = [];
    for (const { level, text } of headings) {
        chain = [...chain.filter(outer => outer.level < level), { level, text: plainText(text) }];
        chains.push(chain);
    }
    return chains;
}

/** The chain's merged answer for its file, every function in it called. */
export function resolveLayout(chain: LayoutChain): ResolvedLayout | { error: string } {
    const { file, merged } = chain;
    const title = merged.pdf?.footerTitle;
    const footerTitle = title === undefined ? defaultFooterTitle
        : typeof title === "string" ? () => title
        : (headings: readonly RunningHeading[]) => title({ chain: headings, file } satisfies FooterContext);
    // Asked now of every chain the file's own headings make, so that a function that goes wrong is said at
    // the top of the page; a book's are known only later, and a wrong answer there leaves its footer blank.
    for (const headings of typeof title === "function" ? headingChains(file.headings) : []) {
        let answer: unknown;
        try {
            answer = footerTitle(headings);
        } catch (error) {
            return { error: `"pdf.footerTitle" threw at ${JSON.stringify(headings.map(h => h.text))}: ${(error as Error).message}` };
        }
        if (typeof answer !== "string") {
            return { error: `"pdf.footerTitle" returned ${JSON.stringify(answer)} at ${JSON.stringify(headings.map(h => h.text))} - not a string` };
        }
    }
    const pageBreaks = new Map<number, boolean>();
    const pageBreak = merged.pageBreakBefore;
    if (pageBreak !== undefined && pageBreak !== null) {
        for (const [position, heading] of file.headings.entries()) {
            let breaks: unknown;
            try {
                breaks = typeof pageBreak === "boolean" ? pageBreak : pageBreak({ heading, position, file } satisfies HeadingContext);
            } catch (error) {
                return { error: `"pageBreakBefore" threw at heading "${heading.text}": ${(error as Error).message}` };
            }
            if (breaks !== null && typeof breaks !== "boolean") {
                return { error: `"pageBreakBefore" returned ${JSON.stringify(breaks)} at heading "${heading.text}" - not a boolean or null` };
            }
            if (breaks !== null) pageBreaks.set(heading.index, breaks);
        }
    }
    return {
        output: merged.output ?? "plain",
        page: merged.page ?? null,
        pdf: { indexDepth: merged.pdf?.indexDepth ?? DEEPEST_HEADING, footerTitle },
        groups: merged.groups ?? [],
        pageBreaks,
        attention: merged.attention ?? [],
        data: merged.data ?? {},
        sourceMd5: chain.own?.sourceMd5 ?? null,
    };
}

// ------------------------------------------------------------------------------------------------
// Into the text

/**
 * The file's text with its layout's marks in it (layout-marks.ts): its groups wherever it is printed, its
 * page breaks on its own page only (a book embedding it has its own).
 */
export function applyLayout(content: string, resolved: ResolvedLayout, ownPage: boolean): string {
    const lines = stripLayoutMarks(content).split("\n");
    // Where a line's own text starts: after its indentation, and a quotation's `>` markers.
    const leadOf = (text: string) => /^(?:\s*>)*\s*/.exec(text)![0].length;
    for (const group of resolved.groups) {
        if (group.to >= lines.length) continue;
        const starts = new Set(group.rowStarts === "auto" ? [] : group.rowStarts);
        for (let index = group.from; index <= group.to; index++) {
            const text = lines[index];
            const indent = leadOf(text);
            const lead = index === group.from ? GROUP_MARK : LINE_MARK + (starts.has(index) ? ROW_MARK : "");
            const body = text.slice(indent);
            const margin = Math.min(group.margins?.[index - group.from] ?? 0, body.length);
            // Every mark with a space on either side, which the renderer drops again: a delimiter beside a mark -
            // neither space nor punctuation to the parser - may no longer be read as one (the closing `**` of
            // `**C₀ iv 1'**`, the opening `_` of `_a-šar_`).
            const marked = margin ? `${body.slice(0, margin)} ${MARGIN_MARK} ${body.slice(margin).trimStart()}` : body;
            lines[index] = `${text.slice(0, indent)}${lead} ${marked}`;
        }
    }
    if (ownPage) {
        for (const [index, breaks] of resolved.pageBreaks) {
            lines[index] = lines[index].replace(/^( {0,3}#{1,6}[ \t]+)/, `$1${breaks ? PAGE_BREAK_MARK : NO_PAGE_BREAK_MARK}`);
        }
    }
    return lines.join("\n");
}

/** A file's layout, as the page gets it. */
export type PageLayout = {
    /** The text, with the layout's marks in it - as it was when there is no layout. */
    content: string;
    /**
     * The modules of its chain, from the root - there or not: the day one appears, the page changes - and
     * every file they import.
     */
    layoutPaths: string[];
    resolved: ResolvedLayout | null;
    /** What went wrong, for the page to show - and then it is made without what that module would have said. */
    problems: LayoutProblem[];
    /** Whether the file has changed since its own layout was made (its `sourceMd5`). */
    obsolete: boolean;
};

/**
 * @param root     the folder `mdPath` is relative to
 * @param ownPage  see applyLayout()
 * @param ownPath  another module to be the file's own, absolute - the layout tools' `--layout=`
 */
export async function layoutFor(root: string, mdPath: string, content: string, ownPage: boolean, ownPath?: string): Promise<PageLayout> {
    const chain = await runChain(root, layoutFileOf(mdPath, content), ownPath);
    const layoutPaths = [...new Set([...layoutChainFor(mdPath), ...chain.files])];
    const obsolete = chain.own !== null && chain.own.sourceMd5 !== md5Of(content);
    const none: PageLayout = { content, layoutPaths, resolved: null, problems: chain.problems, obsolete };
    if (!chain.answered) return none;
    const resolved = resolveLayout(chain);
    if ("error" in resolved) {
        const file = chain.own ? (ownPath ? posix.relative(resolve(root), resolve(ownPath)) : layoutPathFor(mdPath)) : folderLayoutPathsFor(mdPath).at(-1)!;
        return { ...none, problems: [...chain.problems, { file, message: `${resolved.error} (for ${posix.basename(mdPath)})` }] };
    }
    return { content: applyLayout(content, resolved, ownPage), layoutPaths, resolved, problems: chain.problems, obsolete };
}
