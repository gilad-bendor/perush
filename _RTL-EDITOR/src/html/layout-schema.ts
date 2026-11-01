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
// Any of them may be missing. What the chain answers is merged, the nearer a module the stronger: an entry
// one leaves out is taken from the modules before it (`page` and `pdf` field by field).
//
// **The editor knows nothing of what a file is about.** It gives a module elementary capabilities - the
// file's lines and paragraphs, and the width of any text on paper (LayoutFile) - and takes back elementary
// decisions (LayoutEntries): whether the file gets a page, the printed page's settings, which headings
// start a sheet, which of its lines share printed rows (`groups`), and its PDF's index and footers (`pdf`). Everything else - what a numbered
// line is, where a row should break, what a translation's layout session decided - is the business of the
// modules, and of the code they import: a translation's rows are worked out in
// שונות/תרגומי-טקסטים-קדומים/layout/, by its .layout.ts.
//
//     import type { FileLayout, LayoutOfFile } from "<relative path to>/_RTL-EDITOR/src/html/layout-schema.ts";
//     import { translationLayout } from "../../layout/translation-layout.ts";
//
//     const layout: LayoutOfFile = (file, above): FileLayout => ({
//         sourceMd5: SOURCE_MD5,
//         ...translationLayout(file, above, { rowStart: ROW_STARTS }),
//     });
//     export default layout;
//
// (The return type is spelled out because TypeScript checks an object literal's entries against it only then:
// without it, a misspelled entry passes the type check, and only the run-time check refuses it.)
//
// The rules of a module, which layout-module.ts enforces where it can:
// - **Imports: files of the repository only, by a relative path** (and types from anywhere). The editor
//   loads a module with what it imports, and every file it loads is an input of the page.
// - **Pure.** The same arguments give the same result: no file reading, no clock, no randomness. A page
//   that changed without its sources changing would defeat the mirror's freshness test, and every PDF
//   would be printed again for nothing.
// - **Static values are plain data** (Static) - never a function, so a function in an entry can only be
//   the dynamic form of SchemaValue.
//
// This file holds types (and nothing else that runs), so that a layout module type-checks against it alone.

// ------------------------------------------------------------------------------------------------
// The schema's building blocks

/** A value with no function in it, at any depth. */
export type Static = string | number | boolean | null | readonly Static[] | { readonly [key: string]: Static };

/** A schema entry: the value itself, or a function that computes it from its context. */
export type SchemaValue<Context, T extends Static> = T | ((context: Context) => T);

// ------------------------------------------------------------------------------------------------
// What a module is given

/** A heading of the file: `## text`. */
export type Heading = {
    /** 1 for `#`, 2 for `##`, ... */
    readonly level: number;
    /** Its text, as Markdown. */
    readonly text: string;
    /** Its 0-based line in the file. */
    readonly index: number;
};

/** A paragraph of the file, as the source lines it spans - 0-based, both ends included. */
export type Paragraph = { readonly from: number, readonly to: number };

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
 * What only a PDF has - an HTML page has no pages: the page numbers of its index, and the footer of every sheet.
 * Left out, an entry keeps the mirror's own value.
 */
export type PdfSettings = {
    /**
     * The deepest heading the PDF's index lists: 0 for no index at all, 1 for the `#`s only, 2 for `#` and `##`, ...
     * The mirror's own: 6, every heading. Each entry is `<the heading>.......<its page>`.
     *
     * The index is the file's own `<תוכן-העניינים>` if it has one, or else one the PDF adds of itself - right
     * below the page's opening `#`, or at its top when it opens with none.
     */
    readonly indexDepth?: number;
    /**
     * The title in the middle of every sheet's footer (its page number stands at the line's end). A function is
     * asked with the headings in force at the *top* of the sheet. The mirror's own: the outermost of them -
     * `chain[0]`, or "" before the first heading.
     */
    readonly footerTitle?: SchemaValue<FooterContext, string>;
};

/** A heading in force at some point of the page, as printed - plain text, no Markdown. */
export type RunningHeading = {
    /** 1 for `#`, 2 for `##`, ... */
    readonly level: number;
    readonly text: string;
};

/** What `footerTitle` is asked with. */
export type FooterContext = {
    /**
     * The headings in force at the top of the sheet, the outermost first: the last heading before it, and each
     * shallower one above that - `[# חוקי אשנונה, ## מחירים ושכר, ### §3 – שכירות עגלה]`. A heading standing at
     * the very top of the sheet counts. Empty before the first heading. Only the page's own headings, as an
     * index has them - not one inside a pseudo-tag, a quote or a list. A book's include those of the files it
     * embeds.
     */
    readonly chain: readonly RunningHeading[];
    readonly file: LayoutFile;
};

/**
 * Widths on the printed page, in CSS pixels (96 to the inch), as the page sets them at a size and margins
 * (LayoutFile.measure()). Computed from the very font files the page is printed in, so they are the
 * PDF's to within a hundredth of a pixel - a character the fonts lack aside.
 */
export type Measure = {
    /** The width of Markdown inline text: `**bold**` and `*italics*` in their own faces, whitespace collapsed. */
    readonly text: (markdown: string) => number;
    /**
     * What one row of a group holds: the column less the margin made for these notes - every margin note
     * of the paragraph, as the page makes one margin for all its groups (line-rows.ts).
     */
    readonly row: (marginNotes: readonly string[]) => number;
    /** The separator after a grouped line - which a line's width includes, the row's last one too. */
    readonly separator: number;
    /** The space between two lines of a row - beside their separators. */
    readonly gap: number;
    /** What a row should leave free, for sub-pixel rounding. */
    readonly safety: number;
};

/** Helpers a module may use - given rather than imported. */
export type LayoutHelpers = {
    /** An entry's value, whichever form it has - to build on what a module before gave (`above`). */
    readonly resolve: <Context, T extends Static>(value: SchemaValue<Context, T>, context: Context) => T;
};

/**
 * The file a layout is asked about. Only `path` and `name` cost nothing: the rest is read and parsed the
 * first time it is asked for - so a folder's module that decides by the path alone is cheap to ask about
 * every file of the tree.
 */
export type LayoutFile = {
    /** Its path from the repository root. */
    readonly path: string;
    /** Its name: `translation.rtl.md`. */
    readonly name: string;
    /** Its whole text, `\n`-separated. */
    readonly content: string;
    /** Its lines - `content` split. */
    readonly lines: readonly string[];
    /** Its paragraphs, in order - the only stretches whose lines can share rows. */
    readonly paragraphs: readonly Paragraph[];
    /** Its headings, in order (outside code fences). */
    readonly headings: readonly Heading[];
    /** Whether its page is right-to-left - the pages the measuring fonts are for. */
    readonly rtl: boolean;
    /** Widths as the page sets them, at these settings - the mirror's own where left out. */
    readonly measure: (page?: PageSettings) => Measure;
    readonly helpers: LayoutHelpers;
};

// ------------------------------------------------------------------------------------------------
// What a module gives back

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

/**
 * Consecutive lines of one paragraph that share printed rows (line-rows.ts): side by side, a thin bar
 * between them, each kept whole; a row's first line shows its margin note.
 */
export type LineGroup = {
    /** Its first source line, 0-based. */
    readonly from: number;
    /** Its last source line - of the same paragraph. */
    readonly to: number;
    /**
     * The lines that start a printed row, by source line - `from` always does, listed or not. `"auto"`: one
     * row, which the browser wraps where the width runs out.
     */
    readonly rowStarts: readonly number[] | "auto";
    /**
     * How many characters of each line, from its start - after its indentation, and a quotation's `>` markers -
     * are its margin note: a translation's `**12**`; 0 for none. One per line, `from` first. Left out, no line has one.
     */
    readonly margins?: readonly number[];
};

/** What a module may say of a file. Every entry may be left out, and is then taken from the modules before it. */
export type LayoutEntries = {
    readonly output?: Output;
    /** Applies to the file's own page only - not to a book that embeds it, which has its own. */
    readonly page?: PageSettings;
    /** Its PDF's index and footers. The file's own PDF only - a book that embeds it has its own. */
    readonly pdf?: PdfSettings;
    /**
     * Which of its lines share printed rows. Applies wherever the file is printed - its own page, and a
     * book embedding it. A nearer module's list replaces a farther one's whole.
     */
    readonly groups?: readonly LineGroup[];
    /**
     * Whether a heading starts a new sheet: `true` it does, `false` it does not, `null` as the mirror
     * would have it (every `#` but the page's first). The file's own page only.
     */
    readonly pageBreakBefore?: SchemaValue<HeadingContext, boolean | null>;
    /** What a layout session should look at - listed by the layout tools (`layout-status`), shown nowhere else. */
    readonly attention?: readonly string[];
    /** Whatever the modules want to tell each other, or their tools - the editor passes it on, and nothing more. */
    readonly data?: { readonly [key: string]: Static };
};

/** What `pageBreakBefore` is asked with. */
export type HeadingContext = {
    readonly heading: Heading;
    /** Its place among the file's headings - 0 for the first. */
    readonly position: number;
    readonly file: LayoutFile;
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
