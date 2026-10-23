// The contract of a layout module: what it is given, and what it gives back.
//
// Every Markdown file is laid out by a chain of modules, each a function - its default export - called for
// the file, and given what the ones before it returned:
//
//     .layout.ts                      the root folder's: every file under it
//     a/.layout.ts                    a folder's: every file under it, at any depth
//     a/b/.layout.ts
//     a/b/c.layout.ts                 the file's own, for a/b/c.md (translation.rtl.md → translation.rtl.layout.ts)
//
// Any of them may be missing. A folder's (LayoutOfFolder) decides for many files at once - above all
// whether a file gets a page and a PDF at all (`output`), and whether it should have a layout of its own, made by a
// layout session. A file's own (LayoutOfFile) is that session's work, and holds the MD5 of the file it
// was made for (`sourceMd5`), so that a tool can tell when the file has changed since.
//
// What the chain answers is merged, the nearer a module the stronger: an entry one leaves out is taken
// from the modules before it (and `page` field by field). Every entry is either a value (static) or a
// function of a context (dynamic) - SchemaValue - and the mirror calls every function (layout-module.ts)
// before the page is made.
//
//     import type { FileLayout, LayoutOfFile } from "<relative path to>/_RTL-EDITOR/src/html/layout-schema";
//
//     const layout: LayoutOfFile = (file, above): FileLayout => ({
//         sourceMd5: SOURCE_MD5,
//         page: { fontSize: 11 },
//         rowStart: ({ line, row }) => ROW_STARTS.has(line.key) || !row.fits(line),
//     });
//     export default layout;
//
// (The return type is spelled out because TypeScript checks an object literal's entries against it only then:
// without it, a misspelled entry - `pageBreak` - passes the type check, and only the run-time check refuses it.)
//
// The rules of a module, which layout-module.ts enforces where it can:
// - **No runtime imports.** `import type` only - everything a layout needs comes in its arguments.
//   That keeps a module one file: a page depends on its chain of modules and on nothing else of theirs.
// - **Pure.** The same arguments give the same result: no file reading, no clock, no randomness. A page
//   that changed without its sources changing would defeat the mirror's freshness test, and every PDF
//   would be printed again for nothing.
// - **Static values are plain data** (Static) - never a function, so a function in an entry can only be
//   the dynamic form.
//
// This file holds types (and nothing else that runs), so that a layout module type-checks against it alone.

// ------------------------------------------------------------------------------------------------
// The schema's building blocks

/** A value with no function in it, at any depth. */
export type Static = string | number | boolean | null | readonly Static[] | { readonly [key: string]: Static };

/** A schema entry: the value itself, or a function that computes it from its context. */
export type SchemaValue<Context, T extends Static> = T | ((context: Context) => T);

// ------------------------------------------------------------------------------------------------
// What the module is given

/** A numbered line of the file: `**12** text`. */
export type NumberedLine = {
    /** The name a layout knows it by: its label, or `label#n` for the n-th line with that label. */
    readonly key: string;
    /** The bold text the line opens with: `12`, `A.i.5`, `363א`. */
    readonly label: string;
    /** The rest of the line, as Markdown - what is printed for it. */
    readonly text: string;
    /** Its 0-based line in the file. */
    readonly index: number;
};

/** A heading of the file: `## text`. */
export type Heading = {
    /** 1 for `#`, 2 for `##`, ... */
    readonly level: number;
    /** Its text, as Markdown. */
    readonly text: string;
    /** Its 0-based line in the file. */
    readonly index: number;
};

/** Helpers the module may use - given rather than imported (no runtime imports). */
export type LayoutHelpers = {
    /** An entry's value, whichever form it has - to build on what a module before gave (`above`). */
    readonly resolve: <Context, T extends Static>(value: SchemaValue<Context, T>, context: Context) => T;
    /** How bad a row ending after `text` is: 0 after a sentence, 4 after a clause, 12 mid-phrase (+4 before a ו). */
    readonly breakPenalty: (text: string, next?: string) => number;
    /** Whether `next` is the line right after `label` in the numbering: `12` → `13`, `363` → `363א`. */
    readonly continuesLabel: (label: string, next: string) => boolean;
};

/**
 * The file a layout is asked about. Only `path` and `name` cost nothing: the rest is read and parsed the
 * first time it is asked for - so a folder's module that decides by the path alone is cheap to ask about
 * every file of the tree.
 */
export type LayoutFile = {
    /** Its path from the repository root. */
    readonly path: string;
    /** Its name - which file of the folder it is: `translation.rtl.md`. */
    readonly name: string;
    /** Its whole text. */
    readonly content: string;
    /** Its numbered lines, in order. */
    readonly lines: readonly NumberedLine[];
    /**
     * Its runs: stretches of numbered lines that follow one another in one paragraph, with no break in
     * the numbering - the lines that may share rows. A line in no run is a row of its own anyway.
     */
    readonly runs: readonly (readonly NumberedLine[])[];
    /** Its headings, in order (outside code fences). */
    readonly headings: readonly Heading[];
    readonly helpers: LayoutHelpers;
};

// ------------------------------------------------------------------------------------------------
// What the module gives back

/**
 * The printed page. Static only: its context would be the file, which the module already has.
 * Left out, an entry keeps the mirror's own value.
 */
export type PageSettings = {
    /** The text's size on paper, in points. The mirror's own: 11.5. */
    readonly fontSize?: number;
    /** The sheet's left and right margins, in millimetres. The mirror's own: 16. */
    readonly marginInline?: number;
    /** Its top and bottom margins, in millimetres. The mirror's own: 18. */
    readonly marginBlock?: number;
};

/**
 * The widths of things on the printed page, as a percentage of a row of the current run - the column,
 * less the margin its numbers stand in. Computed from the very font file the page is printed in, so
 * they are the PDF's to within a fraction of a percent; the layout tool's `check` measures the real thing.
 */
export type Measure = {
    /** A line's width on its row: its text and the separator after it - not its number, which is in the margin. */
    readonly line: (line: NumberedLine) => number;
    /** Any Markdown text, set as a line's text is (bold, italics and code in their own faces). */
    readonly text: (markdown: string) => number;
    /** The space between two lines of a row - beside their separator, which `line()` counts. */
    readonly gap: number;
    /** How much of a row its lines may take: a little under 100, for sub-pixel rounding. */
    readonly room: number;
};

/** The row a line would join, as it stands before that line. */
export type Row = {
    /** Its lines so far - at least one. */
    readonly lines: readonly NumberedLine[];
    /** How much of the row they take, in percent: their widths and the gaps between them. */
    readonly width: number;
    /** Whether `line` would still fit on it, after a gap: `width + gap + line(line) <= room`. */
    readonly fits: (line: NumberedLine) => boolean;
};

/** What `rowStart` is asked with: whether `line` starts a new row. */
export type RowContext = {
    readonly line: NumberedLine;
    /** The line before it - the last one of `row`. */
    readonly previous: NumberedLine;
    /** The line after it in the run, if there is one. */
    readonly next: NumberedLine | null;
    readonly row: Row;
    /** The whole run the line is in. */
    readonly run: readonly NumberedLine[];
    readonly measure: Measure;
    readonly file: LayoutFile;
};

/** What `pageBreakBefore` is asked with. */
export type HeadingContext = {
    readonly heading: Heading;
    /** Its place among the file's headings - 0 for the first. */
    readonly position: number;
    readonly file: LayoutFile;
};

/**
 * What becomes of a file:
 * - `"laid-out"`: it gets an HTML page and a PDF, and should have a layout of its own (`<name>.layout.ts`),
 *   made by a layout session - the files the layout tools list when it is missing or obsolete;
 * - `"plain"`: it gets a page and a PDF, and needs no layout of its own (it may still have one, which is used);
 * - `"none"`: it gets neither - a technical file, say. It can still be embedded in another (`<כלול-בהדפסה>`).
 *
 * Left to no module, a file is `"plain"`.
 */
export type Output = "laid-out" | "plain" | "none";

/** What a module may say of a file. Every entry may be left out, and is then taken from the modules before it. */
export type LayoutEntries = {
    readonly output?: Output;
    /** Applies to the file's own page only - not to a book that embeds it, which has its own. */
    readonly page?: PageSettings;
    /**
     * Where the printed rows break: whether each numbered line starts a new row - asked for every line of
     * every run but the first, which always starts one, in order. Static, it is either the list of the
     * lines that start a row, by key (any other line continues the row before it), or one answer for
     * every line: `true` a row per line, `false` one row per run, which wraps where the width runs out.
     * Applies wherever the file is printed - its own page, and a book embedding it.
     */
    readonly rowStart?: readonly string[] | SchemaValue<RowContext, boolean>;
    /**
     * Whether a heading starts a new sheet: `true` it does, `false` it does not, `null` as the mirror
     * would have it (every `#` but the page's first). The file's own page only.
     */
    readonly pageBreakBefore?: SchemaValue<HeadingContext, boolean | null>;
};

/** What a folder's `.layout.ts` says of a file under it - null for nothing. */
export type FolderLayout = LayoutEntries;

/** What a file's own `<name>.layout.ts` says of it. */
export type FileLayout = LayoutEntries & {
    /**
     * The MD5 (hex) of the Markdown file as it was when this layout was made. A layout whose file has changed
     * since is still used, but the tools list it as obsolete, for a layout session to look at again.
     */
    readonly sourceMd5: string;
    /**
     * Rows a tool changed without reading them (`propose --fix`), by the key of their first line - for a
     * layout session to read again. They change nothing on the page; the tool's `check` fails while any
     * is listed.
     */
    readonly review?: readonly string[];
};

/**
 * A folder's `.layout.ts`'s default export.
 *
 * @param above  what the folders above it answered for the file, the outermost first - those that said nothing left out
 */
export type LayoutOfFolder = (file: LayoutFile, above: readonly FolderLayout[]) => FolderLayout | null;

/**
 * A file's `<name>.layout.ts`'s default export.
 *
 * @param above  what the folders' modules answered for the file, the outermost first - those that said nothing left out
 */
export type LayoutOfFile = (file: LayoutFile, above: readonly FolderLayout[]) => FileLayout;
