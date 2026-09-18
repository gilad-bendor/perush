// An index.html for HTML-FROM-MD/ and for each of its folders:
//
// 1. the subfolders and pages directly in the folder, and
// 2. a nested list of every page anywhere under it - each folder linking to its own index.
//
// Pure: the list of pages in, a page per folder out. html-mirror.ts decides when to write them.

import { posix } from "path";
import MarkdownIt from "markdown-it";
import { PAGE_STYLE } from "./md-to-html";

/** The file name every folder's index takes. */
export const FOLDER_INDEX_NAME = "index.html";

const escape = new MarkdownIt().utils.escapeHtml;

type Folder = {
    /** Relative to the mirror's root; "" for the root itself. */
    path: string;
    name: string;
    folders: Map<string, Folder>;
    /** Page file names. */
    files: string[];
    /** Pages anywhere under the folder. */
    pageCount: number;
};

/**
 * Every folder's index page.
 *
 * @param pages      every page of the mirror, relative to its root - "פירוש/1-בראשית/a.rtl.html"
 * @param rootName   what the root folder is called on its own index and in every breadcrumb trail
 * @returns          index path (relative to the mirror's root, "פירוש/index.html") → its HTML
 */
export function folderIndexPages(pages: Iterable<string>, rootName: string): Map<string, string> {
    const root = newFolder("", rootName);
    for (const page of pages) {
        const segments = page.split("/");
        const fileName = segments.pop()!;
        let folder = root;
        folder.pageCount++;
        for (const segment of segments) {
            let child = folder.folders.get(segment);
            if (!child) {
                child = newFolder(posix.join(folder.path, segment), segment);
                folder.folders.set(segment, child);
            }
            folder = child;
            folder.pageCount++;
        }
        folder.files.push(fileName);
    }

    const indexes = new Map<string, string>();
    const visit = (folder: Folder) => {
        indexes.set(posix.join(folder.path, FOLDER_INDEX_NAME), renderFolderIndex(folder, rootName));
        for (const child of folder.folders.values()) visit(child);
    };
    if (root.pageCount) visit(root);
    return indexes;
}

function newFolder(path: string, name: string): Folder {
    return { path, name, folders: new Map(), files: [], pageCount: 0 };
}

/** The order the editor's file tree uses: folders first, then files, each by name. */
function sortedFolders(folder: Folder): Folder[] {
    return [...folder.folders.values()].sort((a, b) => a.name.localeCompare(b.name));
}
function sortedFiles(folder: Folder): string[] {
    return [...folder.files].sort((a, b) => a.localeCompare(b));
}

/**
 * A page's name as a reader would call its file: "a.rtl.html" → "a". Two pages of one folder that
 * would share a name - "a.html" and "a.rtl.html" - are both shown in full, extension and all.
 */
function displayNames(fileNames: string[]): Map<string, string> {
    const short = (fileName: string) => fileName.replace(/(\.rtl)?\.html$/, "");
    const counts = new Map<string, number>();
    for (const fileName of fileNames) counts.set(short(fileName), (counts.get(short(fileName)) ?? 0) + 1);
    return new Map(fileNames.map(fileName =>
        [fileName, counts.get(short(fileName))! > 1 ? fileName.replace(/\.html$/, ".md") : short(fileName)]));
}

/** An href for a path relative to the index - each segment encoded, the slashes kept. */
function href(relativePath: string): string {
    return escape(relativePath.split("/").map(encodeURIComponent).join("/"));
}

/** A subfolder, linking to its own index - with `nestedList` inside it, if given. */
function folderItem(prefix: string, folder: Folder, nestedList = ""): string {
    return `<li class="folder"><a dir="auto" href="${href(`${prefix}${folder.name}/${FOLDER_INDEX_NAME}`)}">${escape(folder.name)}</a>`
        + ` <span class="count">(${folder.pageCount})</span>${nestedList && `\n${nestedList}`}</li>`;
}

function fileItems(prefix: string, fileNames: string[]): string[] {
    const names = displayNames(fileNames);
    return fileNames.map(fileName =>
        `<li class="file"><a dir="auto" href="${href(prefix + fileName)}">${escape(names.get(fileName)!)}</a></li>`);
}

function renderFolderIndex(folder: Folder, rootName: string): string {
    const segments = folder.path ? folder.path.split("/") : [];

    // Up the tree: the root, then every folder down to this one - which is not a link to itself.
    const trail = [rootName, ...segments].map((name, depth) => depth === segments.length
        ? `<span dir="auto">${escape(name)}</span>`
        : `<a dir="auto" href="${href("../".repeat(segments.length - depth) + FOLDER_INDEX_NAME)}">${escape(name)}</a>`
    ).join(" / ");

    // A folder only has an index if some page is under it, so this list is never empty.
    const direct = `<ul class="files">\n${[
        ...sortedFolders(folder).map(child => folderItem("", child)),
        ...fileItems("", sortedFiles(folder)),
    ].join("\n")}\n</ul>`;

    const nested = (current: Folder, prefix: string): string => {
        const items = [
            ...sortedFolders(current).map(child => folderItem(prefix, child, nested(child, `${prefix}${child.name}/`))),
            ...fileItems(prefix, sortedFiles(current)),
        ];
        return `<ul>\n${items.join("\n")}\n</ul>`;
    };

    return `<!doctype html>
<!-- Generated by _RTL-EDITOR - the index of a folder of HTML-FROM-MD. -->
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(folder.name)}</title>
<style>${PAGE_STYLE}${INDEX_STYLE}</style>
</head>
<body class="rtl folder-index">
<main>
<nav class="breadcrumbs">${trail}</nav>
<h1><bdi>${escape(folder.name)}</bdi></h1>
<h2>קבצים בתיקייה</h2>
${direct}
<h2>כל הקבצים <span class="count">(${folder.pageCount})</span></h2>
<div class="tree">
${nested(folder, "")}
</div>
</main>
</body>
</html>
`;
}

// The file tree's own marks, from public/style.css.
const INDEX_STYLE = `
.breadcrumbs { color: #666; font-size: 0.95em; }
.breadcrumbs a { color: inherit; }
.folder-index h1 { margin-top: 0.3em; }
.folder-index ul { list-style: none; padding-inline-start: 0; margin: 0 0 0.2em; }
.folder-index .tree ul ul { padding-inline-start: 1.4em; border-inline-start: 1px dotted #aaa; margin-inline-start: 0.4em; }
.folder-index li.folder::before { content: "📁 "; }
.folder-index li.file::before { content: "📄 "; }
.folder-index li.folder > a { font-weight: bold; }
.folder-index .count { color: #888; font-weight: normal; font-size: 0.85em; }
`;
