// The marks a file's layout (layout-module.ts) puts into its text on the way to the renderer - which is
// how a layout reaches the page through the text, even when the file is embedded into another.
// Private Use characters, so no file means them; the renderer drops every one, and none reaches the page.

/** Before a numbered line's label: a new printed row starts here (verse-runs.ts). */
export const ROW_MARK = "";
/** Right after a heading's `#`s: the heading starts a new sheet. */
export const PAGE_BREAK_MARK = "";
/** Right after a heading's `#`s: the heading does not start a new sheet. */
export const NO_PAGE_BREAK_MARK = "";

const ANY_MARK = /[-]/g;

/** The text with every layout mark taken out. */
export function stripLayoutMarks(text: string): string {
    return text.replace(ANY_MARK, "");
}
