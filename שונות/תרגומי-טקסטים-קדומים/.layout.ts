// The layout of the ancient-text translations - a link of every file's chain of layout modules (see
// _RTL-EDITOR/src/html/layout-schema.ts). Pure: it imports only the translations' layout logic (layout/).
//
// Every Markdown file here has its numbered lines (`**12** ...`) run together into printed rows
// (layout/translation-layout.ts). A translation's reading file (translation.rtl.md, built from the
// per-tablet files beside it) should have rows of its own, decided by a layout session in its
// translation.rtl.layout.ts; until it has, its rows are the ones that cost least - each as full as it can
// be, broken where the text pauses, a repeated passage laid out like the first time it was said. Any other
// file - a per-tablet working file, a source - has each run on one row, which the browser wraps.
//
// Only the books of הדפסה/ are published - a page and a PDF each: every other file is read, and printed, in the book
// that embeds it. Its layout counts all the same: a translation should still have one of its own (`"laid-out"`).

import type { FolderLayout, LayoutOfFolder } from "../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout } from "./layout/translation-layout.ts";

/** The folder of the books - the only files here published on their own. */
const BOOKS = "שונות/תרגומי-טקסטים-קדומים/הדפסה/";

const layout: LayoutOfFolder = (file, above): FolderLayout | null => ({
    ...file.name === "translation.rtl.md"
        ? { output: "laid-out", ...translationLayout(file, above, { rowBreak: ({ cost }) => cost, repeatedPassages: "alike" }) }
        : translationLayout(file, above, {}),
    ...file.path.startsWith(BOOKS) ? {} : { publish: "embedded-only" },
});
export default layout;
