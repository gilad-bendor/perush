// The layout of the ancient-text translations - a link of every file's chain of layout modules (see
// _RTL-EDITOR/src/html/layout-schema.ts). Pure: it imports only the translations' layout logic (layout/).
//
// Every Markdown file here has its numbered lines (`**12** ...`) run together into printed rows
// (layout/translation-layout.ts). A translation's reading file (translation.rtl.md, built from the
// per-tablet files beside it) should have rows of its own, decided by a layout session in its
// translation.rtl.layout.ts; until it has, its rows are the ones that cost least - each as full as it can
// be, broken where the text pauses, a repeated passage laid out like the first time it was said. Any other
// file - a per-tablet working file, a source - has each run on one row, which the browser wraps.

import type { FolderLayout, LayoutOfFolder } from "../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout } from "./layout/translation-layout.ts";

const layout: LayoutOfFolder = (file, above): FolderLayout | null => file.name === "translation.rtl.md"
    ? { output: "laid-out", ...translationLayout(file, above, { rowBreak: ({ cost }) => cost, repeatedPassages: "alike" }) }
    : translationLayout(file, above, {});
export default layout;
