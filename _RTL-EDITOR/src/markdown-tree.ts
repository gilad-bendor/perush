// The tree of Markdown files the editor shows - shared by the server and by scripts/build-html.ts.

import { join, extname } from "path";
import { readdir, stat } from "fs/promises";
import { HTML_MIRROR_DIR } from "./html-mirror";

/** The root of the served tree. Every path the API, the file tree and the HTML mirror use is relative to it. */
export const MARKDOWN_DIR = "..";

/** Names skipped at any depth - neither shown in the tree nor watched. */
export const exclusions = new Set(["scripts", ".idea", ".git", ".DS_Store", "node_modules", HTML_MIRROR_DIR]);

export type FileData = {
    name: string;
    type: "directory" | "file";
    path: string;
    children: FileData[];
};

export async function getMarkdownFiles(dir: string, basePath = ""): Promise<FileData[]> {
    try {
        const entries = await readdir(dir, { withFileTypes: true });
        const files: any[] = [];

        for (const entry of entries) {
            if (exclusions.has(entry.name)) {
                continue;
            }
            const fullPath = join(dir, entry.name);
            const relativePath = join(basePath, entry.name);

            // Use stat() instead of checking entry type to follow symbolic links
            let stats;
            try {
                stats = await stat(fullPath);
            } catch {
                // Skip entries that can't be accessed
                continue;
            }

            if (stats.isDirectory()) {
                // Symlinks to directories are not followed (avoids cycles / duplicate trees).
                // Symlinks to files are listed like regular files.
                if (entry.isSymbolicLink()) {
                    continue;
                }
                const children = await getMarkdownFiles(fullPath, relativePath);
                // Only include directories that have .md file descendants
                if (children.length > 0) {
                    files.push({
                        name: entry.name,
                        type: "directory",
                        path: relativePath,
                        children
                    });
                }
            } else if (stats.isFile() && extname(entry.name) === ".md") {
                files.push({
                    name: entry.name,
                    type: "file",
                    path: relativePath
                });
            }
        }

        return files.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === "directory" ? -1 : 1;
        });
    } catch {
        return [];
    }
}
