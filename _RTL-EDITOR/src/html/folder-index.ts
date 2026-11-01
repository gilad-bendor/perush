// An index.html for a mirror - _HTML-FROM-MD/ or _PDF-FROM-MD/ - and for each of its folders:
// the subfolders and pages directly in the folder, each subfolder linking to its own index.
//
// And one for the folder the mirrors stand in, docs/ - the page GitHub Pages opens with - listing
// what is directly in it: the mirrors, and whatever else was put there (siteIndexPage()).
//
// Pure: the list of pages in, a page per folder out. html-mirror.ts decides when to write them.

import { posix } from "path";
import MarkdownIt from "markdown-it";
import { PAGE_STYLE, readablePath, renderBreadcrumbs } from "./md-to-html.ts";

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

/** A mirror, as the site's index lists it. */
export type MirrorSummary = { name: string; pageCount: number };

/**
 * Every folder's index page.
 *
 * @param pages      every page to list, relative to the mirror's root - "פירוש/1-בראשית/a.rtl.html"
 * @param rootName   what the root folder is called on its own index and in every breadcrumb trail
 * @param siteTitle  the folder above the mirror's root, whose own index is its "..": every trail starts
 *                   there. Left out, the mirror's root is the top of the trail, with no "..".
 * @returns          index path (relative to the mirror's root, "פירוש/index.html") → its HTML
 */
export function folderIndexPages(pages: Iterable<string>, rootName: string, siteTitle?: string): Map<string, string> {
    const root = folderTree(pages, rootName);
    const indexes = new Map<string, string>();
    const visit = (folder: Folder) => {
        indexes.set(posix.join(folder.path, FOLDER_INDEX_NAME), renderFolderIndex(folder, rootName, siteTitle));
        for (const child of folder.folders.values()) visit(child);
    };
    if (root.pageCount) visit(root);
    return indexes;
}

/** How many pages a mirror lists - for the site's index. */
export function mirrorSummary(pages: Iterable<string>, name: string): MirrorSummary {
    return { name, pageCount: folderTree(pages, name).pageCount };
}

/**
 * docs/index.html: what is directly in the folder the mirrors stand in - the mirrors, each linking to
 * its own index, and any other file there.
 */
export function siteIndexPage(siteTitle: string, mirrors: MirrorSummary[], files: string[]): string {
    const root = newFolder("", siteTitle);
    for (const mirror of mirrors) {
        if (mirror.pageCount) root.folders.set(mirror.name, { ...newFolder(mirror.name, mirror.name), ...mirror });
    }
    root.files.push(...files);
    root.pageCount = files.length + mirrors.reduce((sum, mirror) => sum + mirror.pageCount, 0);
    return renderFolderIndex(root, siteTitle);
}

function folderTree(pages: Iterable<string>, rootName: string): Folder {
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
    return root;
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
    const short = (fileName: string) => fileName.replace(/(\.rtl)?\.(html|pdf)$/, "");
    const counts = new Map<string, number>();
    for (const fileName of fileNames) counts.set(short(fileName), (counts.get(short(fileName)) ?? 0) + 1);
    return new Map(fileNames.map(fileName =>
        [fileName, counts.get(short(fileName))! > 1 ? fileName.replace(/\.(html|pdf)$/, ".md") : short(fileName)]));
}

/** An href for a path relative to the index - Hebrew kept as it is (readablePath()). */
function href(relativePath: string): string {
    return escape(readablePath(relativePath));
}

/** A subfolder, linking to its own index. */
function folderItem(folder: Folder): string {
    return `<li class="folder"><a dir="auto" href="${href(`${folder.name}/${FOLDER_INDEX_NAME}`)}">${escape(folder.name)}</a></li>`;
}

function fileItems(fileNames: string[]): string[] {
    const names = displayNames(fileNames);
    return fileNames.map(fileName => `<li class="file"><a dir="auto" href="${href(fileName)}">${escape(names.get(fileName)!)}</a></li>`);
}

/** @param siteTitle  the folder above `rootName`, if the trail goes up to it - see folderIndexPages() */
function renderFolderIndex(folder: Folder, rootName: string, siteTitle?: string): string {
    const segments = folder.path ? folder.path.split("/") : [];

    // Up the tree: the site, the root, then every folder down to this one - which is not a link to itself.
    const names = [...(siteTitle === undefined ? [] : [siteTitle]), rootName, ...segments];
    const trail = `${renderBreadcrumbs(names.map((name, depth) => depth === names.length - 1
        ? { name }
        : { name, href: "../".repeat(names.length - 1 - depth) + FOLDER_INDEX_NAME }))}\n`;

    // "..", heading the list - in every folder but the top one, which has nowhere to go up to.
    const up = names.length > 1 ? [`<li class="folder up"><a href="../${FOLDER_INDEX_NAME}">..</a></li>`] : [];

    // A folder only has an index if some page is under it, so this list is never empty.
    const direct = `<ul class="files">\n${[
        ...up,
        ...sortedFolders(folder).map(folderItem),
        ...fileItems(sortedFiles(folder)),
    ].join("\n")}\n</ul>`;

    return `<!doctype html>
<!-- Generated by _RTL-EDITOR - the index of a folder of ${escape(rootName)}. -->
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(folder.name)}</title>
<style>${PAGE_STYLE}${INDEX_STYLE}</style>
</head>
<body class="rtl folder-index">
<main>
${trail}
<h1><bdi>${escape(folder.name)}</bdi></h1>
<h2>קבצים בתיקייה</h2>
${direct}
</main>
</body>
</html>
`;
}

// The file tree's own marks, from public/style.css.
const INDEX_STYLE = `
.folder-index h1 { margin-top: 0.3em; }
.folder-index ul { list-style: none; padding-inline-start: 0; margin: 0 0 0.2em; }
.folder-index li.folder::before { content: "📁 "; }
.folder-index li.file::before { content: "📄 "; }
.folder-index li.folder > a { font-weight: bold; }
`;
