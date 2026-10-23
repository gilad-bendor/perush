// The layout of the ancient-text translations - a link of every file's chain of layout modules here (see
// _RTL-EDITOR/src/html/layout-schema.ts). Pure, and imports types only.
//
// A translation's reading file (translation.rtl.md, built from the per-tablet files beside it) should have
// printed rows of its own, decided by a layout session (_RTL-EDITOR/layout-guidelines/) in its
// translation.rtl.layout.ts. Nothing else here asks for one.

import type { FolderLayout, LayoutOfFolder } from "../../_RTL-EDITOR/src/html/layout-schema";

const layout: LayoutOfFolder = (file): FolderLayout | null =>
    file.name === "translation.rtl.md" ? { output: "laid-out" } : null;
export default layout;
