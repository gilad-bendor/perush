// The layout of every Markdown file of the repository - the first of each file's chain of layout modules
// (see _RTL-EDITOR/src/html/layout-schema.ts). Pure, and imports types only.
//
// It replaces the .printignore that stood here: the editor's own folders are tooling, and their Markdown
// files get no HTML page and no PDF - nor do the files of working material listed below.

import type { FolderLayout, LayoutOfFolder } from "./_RTL-EDITOR/src/html/layout-schema.ts";

/** Folders of tooling, not of content. */
const TOOLING = ["_BIBLE-VIEWER/", "_DELIBERATION-ROOM/", "_RTL-EDITOR/"];

/**
 * Files and folders that are working material, not for readers - by the start of their path: the Claude sessions'
 * prompts and instructions, the raw gathering before a linguistic analysis, the scratch files at the root.
 */
const WORKING = [
    "claude/",
    "CLAUDE.md",
    "_scratch",
    "בלשנות/איסוף-מקדים-לניתוחים-לשוניים/",
    "בלשנות/ניתוחים-לשוניים/_פרומפט-לתמצות-ניתוח-לשוני.rtl.md",
    "בלשנות/ניתוחים-לשוניים-בינה-מלאכותית/_פרומפט-ניתוח-לשוני.rtl.md",
];

const layout: LayoutOfFolder = (file): FolderLayout | null =>
    [...TOOLING, ...WORKING].some(start => file.path.startsWith(start)) ? { output: "none" } : null;
export default layout;
