// A file's chain of layout modules (the contract: layout-schema.ts) - found, loaded, run for the file,
// merged, and put into its text for the renderer to read.
//
//     layoutChainFor()     the modules that lay a file out: every folder's `.layout.ts` above it, then its own
//     loadLayoutModule()   a module, checked: no runtime import, a function for its default export
//     layoutFileOf()       what a module is told about a file (LayoutFile) - read lazily
//     runChain()           what each module of the chain answers, checked, and merged
//     resolveLayout()      the merged answer with every function in it called - plain data (ResolvedLayout)
//     applyLayout()        the file's text with the marks of layout-marks.ts in it
//     layoutFor()          all of it, for the mirror and the layout tool alike
//     outputOf()           only whether the file gets a page at all - cheap
//
// A module is imported afresh whenever its file changes (a `?v=<mtime>` on the import, as Bun keeps every
// module it has loaded). What goes wrong - a runtime import, a syntax error, a function that throws, an
// answer of the wrong shape - is an error for the page to show, never an exception: the page is still
// made, without what that module would have said.

import { readFileSync } from "fs";
import { readFile, stat } from "fs/promises";
import { posix, resolve } from "path";
import { fenceScanner } from "./includes";
import { NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK } from "./layout-marks";
import type {
    FileLayout, FolderLayout, Heading, HeadingContext, LayoutEntries, LayoutFile, LayoutOfFile, LayoutOfFolder, Measure,
    NumberedLine, Output, PageSettings, Row, RowContext,
} from "./layout-schema";
import { markdownWidthEm, ROW_SAFETY_PX, runGeometry } from "./text-measure";
import { applyVerseLayout, breakPenalty, labeledLines } from "./verse-layout";
import { continuesLabel, PRINT_FONT_SIZE_PT, PRINT_MARGIN_INLINE_MM } from "./verse-runs";

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
    return new Bun.CryptoHasher("md5").update(text).digest("hex");
}

// ------------------------------------------------------------------------------------------------
// Loading

export type LoadedLayout = { layout: (...args: never[]) => unknown } | { error: string };

const transpiler = new Bun.Transpiler({ loader: "ts" });
const loadedModules = new Map<string, { mtimeMs: number, loaded: LoadedLayout }>();

/**
 * The layout module at `path` - null when there is none.
 *
 * @param path  absolute, or relative to the current folder - made absolute here, as `import()` would take a
 *              relative path to be relative to this module (the server's root is "..")
 */
export async function loadLayoutModule(path: string): Promise<LoadedLayout | null> {
    path = resolve(path);
    const info = await stat(path).catch(() => null);
    if (!info?.isFile()) return null;
    const cached = loadedModules.get(path);
    if (cached?.mtimeMs === info.mtimeMs) return cached.loaded;

    let loaded: LoadedLayout;
    try {
        const source = await readFile(path, "utf-8");
        // `import type` is gone once transpiled, and scanImports() does not list it: whatever it lists runs.
        const imports = transpiler.scanImports(source).map(entry => entry.path);
        if (imports.length) {
            loaded = { error: `a layout module may import types only (\`import type\`), and this one imports ${imports.join(", ")}` };
        } else {
            const module = await import(`${path}?v=${info.mtimeMs}`);
            loaded = typeof module.default === "function" ? { layout: module.default }
                : { error: "its default export must be a function: (file, above) => its layout" };
        }
    } catch (error) {
        loaded = { error: `it does not load: ${(error as Error).message}` };
    }
    loadedModules.set(path, { mtimeMs: info.mtimeMs, loaded });
    return loaded;
}

// ------------------------------------------------------------------------------------------------
// What a module is told

const HEADING = /^ {0,3}(#{1,6})[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/;

const helpers: LayoutFile["helpers"] = {
    resolve: (value, context) => typeof value === "function" ? value(context) : value,
    breakPenalty,
    continuesLabel,
};

/**
 * A file as a layout module sees it - its text read, and parsed, only once something asks.
 *
 * @param content  its text, or how to read it
 */
export function layoutFileOf(mdPath: string, content: string | (() => string)): LayoutFile {
    let text: string | undefined;
    const textOf = () => text ??= (typeof content === "string" ? content : content()).replace(/\r\n?/g, "\n");
    let parsed: { lines: NumberedLine[], runs: NumberedLine[][], headings: Heading[] } | undefined;
    const parse = () => parsed ??= parseFile(textOf());
    return {
        path: mdPath,
        name: posix.basename(mdPath),
        get content() { return textOf(); },
        get lines() { return parse().lines; },
        get runs() { return parse().runs; },
        get headings() { return parse().headings; },
        helpers,
    };
}

function parseFile(text: string): { lines: NumberedLine[], runs: NumberedLine[][], headings: Heading[] } {
    const sourceLines = text.split("\n");
    const lines: NumberedLine[] = labeledLines(text).map(line => ({
        key: line.key,
        label: line.label,
        text: sourceLines[line.index].replace(/^\s*\*\*[^*\n]+\*\*/, "").trim(),
        index: line.index,
    }));

    // A run: lines one right below the other - one paragraph, as nothing else stands between them -
    // whose numbering goes on. As verse-runs.ts finds them on the page.
    const runs: NumberedLine[][] = [];
    let current: NumberedLine[] = [];
    lines.forEach((line, i) => {
        const previous = lines[i - 1];
        if (previous && previous.index + 1 === line.index && continuesLabel(previous.label, line.label)) {
            current.push(line);
            return;
        }
        if (current.length > 1) runs.push(current);
        current = [line];
    });
    if (current.length > 1) runs.push(current);

    const headings: Heading[] = [];
    const inFence = fenceScanner();
    sourceLines.forEach((line, index) => {
        if (inFence(line)) return;
        const match = HEADING.exec(line);
        if (match) headings.push({ level: match[1].length, text: match[2], index });
    });
    return { lines, runs, headings };
}

// ------------------------------------------------------------------------------------------------
// What the chain answers

const ENTRIES = new Set(["output", "page", "rowStart", "pageBreakBefore"]);
const FILE_ENTRIES = new Set([...ENTRIES, "sourceMd5", "review"]);
const OUTPUTS = new Set(["laid-out", "plain", "none"]);
const PAGE_ENTRIES = new Set(["fontSize", "marginInline", "marginBlock"]);

const isNames = (value: unknown): value is readonly string[] => Array.isArray(value) && value.every(name => typeof name === "string");

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
    const rowStart = layout.rowStart;
    if (rowStart !== undefined && !isNames(rowStart) && typeof rowStart !== "boolean" && typeof rowStart !== "function") {
        return "\"rowStart\" must be a list of line names, a boolean, or a function";
    }
    if (layout.review !== undefined && !isNames(layout.review)) return "\"review\" must be a list of line names";
    const pageBreak = layout.pageBreakBefore;
    if (pageBreak !== undefined && pageBreak !== null && typeof pageBreak !== "boolean" && typeof pageBreak !== "function") {
        return "\"pageBreakBefore\" must be a boolean, null, or a function";
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
};

/** The answers merged in order, each entry the last one given - `page` field by field. */
function merge(answers: readonly LayoutEntries[]): LayoutEntries {
    const merged: Record<string, unknown> = {};
    for (const answer of answers) {
        for (const key of ENTRIES) {
            const value = (answer as Record<string, unknown>)[key];
            if (value === undefined) continue;
            merged[key] = key === "page" ? { ...merged.page as object, ...value as object } : value;
        }
    }
    return merged as LayoutEntries;
}

/**
 * Runs the file's chain of modules.
 *
 * @param root     the folder `file.path` is relative to
 * @param ownPath  another module to be the file's own, absolute - the layout tool's `--layout=`
 */
export async function runChain(root: string, file: LayoutFile, ownPath?: string): Promise<LayoutChain> {
    const problems: LayoutProblem[] = [];
    const folders: FolderLayout[] = [];
    let own: FileLayout | null = null;
    let answered = false;

    const run = async (relativePath: string, absolutePath: string, isOwn: boolean) => {
        const loaded = await loadLayoutModule(absolutePath);
        if (!loaded) return;
        const fail = (message: string) => problems.push({ file: relativePath, message });
        if ("error" in loaded) return fail(loaded.error);
        let answer: unknown;
        try {
            answer = (loaded.layout as LayoutOfFolder | LayoutOfFile)(file, [...folders]);
        } catch (error) {
            return fail(`it threw: ${(error as Error).message}`);
        }
        const wrong = shapeError(answer, isOwn);
        if (wrong && !(answer === null && !isOwn)) return fail(wrong);
        if (answer === null) return;
        answered = true;
        if (isOwn) own = answer as FileLayout;
        else folders.push(answer as FolderLayout);
    };

    for (const path of folderLayoutPathsFor(file.path)) await run(path, posix.join(root, path), false);
    const ownRelative = ownPath ? posix.relative(root, ownPath) : layoutPathFor(file.path);
    await run(ownRelative, ownPath ?? posix.join(root, ownRelative), true);

    const ownAnswer = own as FileLayout | null;
    return { file, folders, own: ownAnswer, merged: merge(ownAnswer ? [...folders, ownAnswer] : folders), answered, problems };
}

/**
 * Whether the file gets a page and a PDF, and should have a layout of its own (layout-schema.ts's Output).
 * Reads the file only if a module asks for more of it than its path.
 */
export async function outputOf(root: string, mdPath: string): Promise<Output> {
    const file = layoutFileOf(mdPath, () => readFileSync(posix.join(root, mdPath), "utf-8"));
    try {
        return (await runChain(root, file)).merged.output ?? "plain";
    } catch {
        return "plain";
    }
}

// ------------------------------------------------------------------------------------------------
// The answer, resolved

/** A file's layout with no function left in it - what the page is made with. */
export type ResolvedLayout = {
    output: Output;
    page: PageSettings | null;
    /** The keys of the lines that start a row - null when the layout says nothing of rows. */
    rowStarts: string[] | null;
    review: string[];
    /** Whether each heading starts a sheet, by its line - those the layout left to the mirror are not here. */
    pageBreaks: Map<number, boolean>;
    /** What the file's own layout says its MD5 was - null when it has none. */
    sourceMd5: string | null;
};

class LayoutError extends Error {}

/** Calls an entry's function, and makes sure of its answer's type. */
function call<C, T>(entry: string, at: string, fn: (context: C) => T, context: C, isRight: (value: unknown) => boolean, type: string): T {
    let value: T;
    try {
        value = fn(context);
    } catch (error) {
        throw new LayoutError(`"${entry}" threw at ${at}: ${(error as Error).message}`);
    }
    if (!isRight(value)) throw new LayoutError(`"${entry}" returned ${JSON.stringify(value)} at ${at} - not ${type}`);
    return value;
}

/** The widths a run's lines are measured with, as its page sets them. */
function measureFor(run: readonly NumberedLine[], widestLabel: number, page: PageSettings | null): Measure {
    const geometry = runGeometry(page?.fontSize ?? PRINT_FONT_SIZE_PT, page?.marginInline ?? PRINT_MARGIN_INLINE_MM, widestLabel);
    const percent = (px: number) => px / geometry.row * 100;
    const widths = new Map<NumberedLine, number>();
    return {
        line: line => {
            let width = widths.get(line);
            if (width === undefined) {
                width = percent(markdownWidthEm(line.text) * geometry.em + geometry.separator);
                widths.set(line, width);
            }
            return width;
        },
        text: markdown => percent(markdownWidthEm(markdown) * geometry.em),
        gap: percent(geometry.gap),
        room: 100 - percent(ROW_SAFETY_PX),
    };
}

/** The longest label of each run's paragraph - which sets the margin of all its runs. */
function widestLabels(file: LayoutFile): Map<readonly NumberedLine[], number> {
    const paragraphOf = new Map<number, number>();
    let paragraph = 0;
    file.content.split("\n").forEach((line, index) => {
        if (!line.trim()) paragraph++;
        else paragraphOf.set(index, paragraph);
    });
    const widest = new Map<number, number>();
    for (const run of file.runs) {
        const p = paragraphOf.get(run[0].index)!;
        widest.set(p, Math.max(widest.get(p) ?? 0, ...run.map(line => line.label.length)));
    }
    return new Map(file.runs.map(run => [run, widest.get(paragraphOf.get(run[0].index)!)!]));
}

/** Every line of every run's width, as `Measure.line()` gives it to a layout - for the tool to check against Chromium. */
export function predictedLineWidths(file: LayoutFile, page: PageSettings | null): Map<string, number> {
    const widest = widestLabels(file);
    const widths = new Map<string, number>();
    for (const run of file.runs) {
        const measure = measureFor(run, widest.get(run)!, page);
        for (const line of run) widths.set(line.key, measure.line(line));
    }
    return widths;
}

/** The chain's merged answer for its file, every function in it called. */
export function resolveLayout(chain: LayoutChain): ResolvedLayout | { error: string } {
    const { file, merged } = chain;
    try {
        const page = merged.page ?? null;

        let rowStarts: string[] | null = null;
        const rowStart = merged.rowStart;
        if (isNames(rowStart)) {
            rowStarts = [...rowStart];
        } else if (rowStart !== undefined) {
            rowStarts = [];
            const widest = widestLabels(file);
            for (const run of file.runs) {
                rowStarts.push(run[0].key);
                if (typeof rowStart === "boolean") {
                    if (rowStart) rowStarts.push(...run.slice(1).map(line => line.key));
                    continue;
                }
                const measure = measureFor(run, widest.get(run)!, page);
                let lines: NumberedLine[] = [run[0]];
                let width = measure.line(run[0]);
                for (let i = 1; i < run.length; i++) {
                    const line = run[i];
                    const rowWidth = width;
                    const row: Row = {
                        lines,
                        width: rowWidth,
                        fits: candidate => rowWidth + measure.gap + measure.line(candidate) <= measure.room,
                    };
                    const context: RowContext = { line, previous: run[i - 1], next: run[i + 1] ?? null, row, run, measure, file };
                    if (call("rowStart", `line ${line.key}`, rowStart, context, value => typeof value === "boolean", "a boolean")) {
                        rowStarts.push(line.key);
                        lines = [line];
                        width = measure.line(line);
                    } else {
                        lines = [...lines, line];
                        width += measure.gap + measure.line(line);
                    }
                }
            }
        }

        const pageBreaks = new Map<number, boolean>();
        const pageBreak = merged.pageBreakBefore;
        if (pageBreak !== undefined && pageBreak !== null) {
            file.headings.forEach((heading, position) => {
                const breaks = typeof pageBreak === "boolean" ? pageBreak
                    : call("pageBreakBefore", `heading "${heading.text}"`, pageBreak, { heading, position, file } satisfies HeadingContext,
                        value => value === null || typeof value === "boolean", "a boolean or null");
                if (breaks !== null) pageBreaks.set(heading.index, breaks);
            });
        }

        return {
            output: merged.output ?? "plain",
            page,
            rowStarts,
            review: [...chain.own?.review ?? []],
            pageBreaks,
            sourceMd5: chain.own?.sourceMd5 ?? null,
        };
    } catch (error) {
        if (error instanceof LayoutError) return { error: error.message };
        throw error;
    }
}

// ------------------------------------------------------------------------------------------------
// Into the text

/**
 * The file's text with its layout's marks in it (layout-marks.ts).
 *
 * @param ownPage  whether this is the file's own page - else only the rows apply (layout-schema.ts)
 * @returns        also the row names that match no line - stale, and ignored
 */
export function applyLayout(content: string, resolved: ResolvedLayout, ownPage: boolean): { content: string, unknownRows: string[] } {
    let result = resolved.rowStarts ? applyVerseLayout(content, { rows: resolved.rowStarts }) : { content, unknownRows: [] };
    if (ownPage && resolved.pageBreaks.size) {
        const lines = result.content.split("\n");
        for (const [index, breaks] of resolved.pageBreaks) {
            lines[index] = lines[index].replace(/^( {0,3}#{1,6}[ \t]+)/, `$1${breaks ? PAGE_BREAK_MARK : NO_PAGE_BREAK_MARK}`);
        }
        result = { ...result, content: lines.join("\n") };
    }
    return result;
}

/** A file's layout, as the page gets it. */
export type PageLayout = {
    /** The text, with the layout's marks in it - as it was when there is no layout. */
    content: string;
    /** The modules of its chain, from the root - there or not: the day one appears, the page changes. */
    layoutPaths: string[];
    resolved: ResolvedLayout | null;
    unknownRows: string[];
    /** What went wrong, for the page to show - and then it is made without what that module would have said. */
    problems: LayoutProblem[];
    /** Whether the file has changed since its own layout was made (its `sourceMd5`). */
    obsolete: boolean;
};

/**
 * @param root     the folder `mdPath` is relative to
 * @param ownPage  see applyLayout()
 * @param ownPath  another module to be the file's own, absolute - the layout tool's `--layout=`
 */
export async function layoutFor(root: string, mdPath: string, content: string, ownPage: boolean, ownPath?: string): Promise<PageLayout> {
    const chain = await runChain(root, layoutFileOf(mdPath, content), ownPath);
    const layoutPaths = layoutChainFor(mdPath);
    const obsolete = chain.own !== null && chain.own.sourceMd5 !== md5Of(content);
    const none: PageLayout = { content, layoutPaths, resolved: null, unknownRows: [], problems: chain.problems, obsolete };
    if (!chain.answered) return none;
    const resolved = resolveLayout(chain);
    if ("error" in resolved) {
        const file = chain.own ? (ownPath ? posix.relative(root, ownPath) : layoutPathFor(mdPath)) : folderLayoutPathsFor(mdPath).at(-1)!;
        return { ...none, problems: [...chain.problems, { file, message: `${resolved.error} (for ${posix.basename(mdPath)})` }] };
    }
    return { ...applyLayout(content, resolved, ownPage), layoutPaths, resolved, problems: chain.problems, obsolete };
}
