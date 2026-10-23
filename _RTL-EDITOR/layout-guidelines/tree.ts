// The Markdown files the layout tools look at: those of the editor's tree (markdown-tree.ts) that the
// mirror makes pages of - the same files, so that a tool never reports on one the mirror ignores.

import { join, relative } from "path";
import { snapshotOfTree } from "../src/fs-changes";
import { isMirroredFile } from "../src/html/html-mirror";
import { getMarkdownFiles } from "../src/markdown-tree";

export const REPO_ROOT = join(import.meta.dir, "../..");

/** Every such file under `folder` (absolute; the whole tree by default), as a path from the repo root. */
export async function markdownFiles(folder = REPO_ROOT): Promise<string[]> {
    const under = relative(REPO_ROOT, folder);
    const paths = [...snapshotOfTree(await getMarkdownFiles(REPO_ROOT))];
    return paths.filter(path => !path.endsWith("/") && isMirroredFile(path) && (!under || path.startsWith(`${under}/`))).sort();
}
