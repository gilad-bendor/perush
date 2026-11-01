// The layout of every Markdown file of the repository - the first of each file's chain of layout modules
// (see _RTL-EDITOR/src/html/layout-schema.ts). Pure, and imports types only.
//
// It replaces the .printignore that stood here: the editor's own folders are tooling, and their Markdown
// files get no HTML page and no PDF.

import type { FolderLayout, LayoutOfFolder } from "./_RTL-EDITOR/src/html/layout-schema.ts";

/** Folders of tooling, not of content. */
const TOOLING = ["_BIBLE-VIEWER/", "_DELIBERATION-ROOM/", "_RTL-EDITOR/"];

const layout: LayoutOfFolder = (file): FolderLayout | null =>
    TOOLING.some(folder => file.path.startsWith(folder)) ? { output: "none" } : null;
export default layout;
