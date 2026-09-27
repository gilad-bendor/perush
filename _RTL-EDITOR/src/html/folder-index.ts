// An index.html for a mirror - _HTML-FROM-MD/ or _PDF-FROM-MD/ - and for each of its folders:
//
// 1. the subfolders and pages directly in the folder, and
// 2. a nested list of every page anywhere under it - each folder linking to its own index.
//
// And one for the folder the mirrors stand in, docs/ - the page GitHub Pages opens with - listing
// what is directly in it: the mirrors, and whatever else was put there (siteIndexPage()).
//
// Some pages are "technical" (a .printignore says so - see html-mirror.ts). They are listed like any
// other but hidden, and a toggle at the top of every index - "הצג קבצים טכניים" - shows them. The
// toggle is the URL's hash, #show-technical, so a link can be shared as it is seen and Back/Forward
// step through it; every link of the index carries the hash on to where it leads.
//
// Pure: the list of pages in, a page per folder out. html-mirror.ts decides when to write them.

import { posix } from "path";
import MarkdownIt from "markdown-it";
import { PAGE_STYLE, readablePath } from "./md-to-html";

/** The file name every folder's index takes. */
export const FOLDER_INDEX_NAME = "index.html";

/** The URL hash that shows the technical pages. */
export const SHOW_TECHNICAL_HASH = "#show-technical";

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
    /** Of those, the ones that are not technical - what is shown while the toggle is off. */
    plainCount: number;
};

/** A mirror, as the site's index lists it. */
export type MirrorSummary = { name: string; pageCount: number; plainCount: number };

/**
 * Every folder's index page.
 *
 * @param pages      every page to list, relative to the mirror's root - "פירוש/1-בראשית/a.rtl.html"
 * @param rootName   what the root folder is called on its own index and in every breadcrumb trail
 * @param technical  the pages among them that are hidden until asked for
 * @param siteTitle  the folder above the mirror's root, whose own index is its "..": every trail starts
 *                   there. Left out, the mirror's root is the top of the trail, with no "..".
 * @returns          index path (relative to the mirror's root, "פירוש/index.html") → its HTML
 */
export function folderIndexPages(pages: Iterable<string>, rootName: string,
                                 technical: ReadonlySet<string> = new Set(), siteTitle?: string): Map<string, string> {
    const root = folderTree(pages, rootName, technical);
    const indexes = new Map<string, string>();
    const visit = (folder: Folder) => {
        indexes.set(posix.join(folder.path, FOLDER_INDEX_NAME), renderFolderIndex(folder, rootName, technical, siteTitle));
        for (const child of folder.folders.values()) visit(child);
    };
    if (root.pageCount) visit(root);
    return indexes;
}

/** How many pages a mirror lists, and how many of them are not technical - for the site's index. */
export function mirrorSummary(pages: Iterable<string>, name: string, technical: ReadonlySet<string> = new Set()): MirrorSummary {
    const { pageCount, plainCount } = folderTree(pages, name, technical);
    return { name, pageCount, plainCount };
}

/**
 * docs/index.html: what is directly in the folder the mirrors stand in - the mirrors, each linking to
 * its own index, and any other file there. No nested list: it would only be every mirror over again.
 */
export function siteIndexPage(siteTitle: string, mirrors: MirrorSummary[], files: string[]): string {
    const root = newFolder("", siteTitle);
    for (const mirror of mirrors) {
        if (mirror.pageCount) root.folders.set(mirror.name, { ...newFolder(mirror.name, mirror.name), ...mirror });
    }
    root.files.push(...files);
    root.pageCount = files.length + mirrors.reduce((sum, mirror) => sum + mirror.pageCount, 0);
    root.plainCount = files.length + mirrors.reduce((sum, mirror) => sum + mirror.plainCount, 0);
    return renderFolderIndex(root, siteTitle, new Set(), undefined, false);
}

function folderTree(pages: Iterable<string>, rootName: string, technical: ReadonlySet<string>): Folder {
    const root = newFolder("", rootName);
    for (const page of pages) {
        const isTechnical = technical.has(page);
        const segments = page.split("/");
        const fileName = segments.pop()!;
        let folder = root;
        count(folder, isTechnical);
        for (const segment of segments) {
            let child = folder.folders.get(segment);
            if (!child) {
                child = newFolder(posix.join(folder.path, segment), segment);
                folder.folders.set(segment, child);
            }
            folder = child;
            count(folder, isTechnical);
        }
        folder.files.push(fileName);
    }
    return root;
}

function newFolder(path: string, name: string): Folder {
    return { path, name, folders: new Map(), files: [], pageCount: 0, plainCount: 0 };
}

function count(folder: Folder, isTechnical: boolean): void {
    folder.pageCount++;
    if (!isTechnical) folder.plainCount++;
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

/** How many pages - the plain ones while the toggle is off, all of them while it is on. */
function countOf(folder: Folder): string {
    return folder.plainCount === folder.pageCount
        ? `<span class="count">(${folder.pageCount})</span>`
        : `<span class="count"><span class="plain-count">(${folder.plainCount})</span>`
            + `<span class="all-count">(${folder.pageCount})</span></span>`;
}

/** A subfolder, linking to its own index - with `nestedList` inside it, if given. */
function folderItem(prefix: string, folder: Folder, nestedList = ""): string {
    const technical = folder.plainCount ? "" : " technical";
    return `<li class="folder${technical}"><a dir="auto" href="${href(`${prefix}${folder.name}/${FOLDER_INDEX_NAME}`)}">${escape(folder.name)}</a>`
        + ` ${countOf(folder)}${nestedList && `\n${nestedList}`}</li>`;
}

/** @param folderPath  the files' folder, relative to the mirror's root - to tell the technical ones */
function fileItems(prefix: string, folderPath: string, fileNames: string[], technicalFiles: ReadonlySet<string>): string[] {
    const names = displayNames(fileNames);
    return fileNames.map(fileName => {
        const technical = technicalFiles.has(posix.join(folderPath, fileName)) ? " technical" : "";
        return `<li class="file${technical}"><a dir="auto" href="${href(prefix + fileName)}">${escape(names.get(fileName)!)}</a></li>`;
    });
}

/**
 * @param siteTitle  the folder above `rootName`, if the trail goes up to it - see folderIndexPages()
 * @param withTree   whether to add the nested list of every page under the folder
 */
function renderFolderIndex(folder: Folder, rootName: string, technicalFiles: ReadonlySet<string>,
                           siteTitle?: string, withTree = true): string {
    const segments = folder.path ? folder.path.split("/") : [];

    // Up the tree: the site, the root, then every folder down to this one - which is not a link to itself.
    const names = [...(siteTitle === undefined ? [] : [siteTitle]), rootName, ...segments];
    const trail = `<nav class="breadcrumbs">${names.map((name, depth) => depth === names.length - 1
        ? `<span dir="auto">${escape(name)}</span>`
        : `<a dir="auto" href="${href("../".repeat(names.length - 1 - depth) + FOLDER_INDEX_NAME)}">${escape(name)}</a>`
    ).join(" / ")}</nav>\n`;

    // Only where there is something for it to show or hide.
    const toggle = folder.plainCount < folder.pageCount
        ? `<label class="technical-toggle"><input type="checkbox" id="show-technical"> הצג קבצים טכניים</label>\n`
        : "";

    // "..", heading both lists - in every folder but the top one, which has nowhere to go up to.
    const up = names.length > 1 ? [`<li class="folder up"><a href="../${FOLDER_INDEX_NAME}">..</a></li>`] : [];

    // A folder only has an index if some page is under it, so this list is never empty.
    const direct = `<ul class="files">\n${[
        ...up,
        ...sortedFolders(folder).map(child => folderItem("", child)),
        ...fileItems("", folder.path, sortedFiles(folder), technicalFiles),
    ].join("\n")}\n</ul>`;

    const nested = (current: Folder, prefix: string): string => {
        const items = [
            ...(current === folder ? up : []),
            ...sortedFolders(current).map(child => folderItem(prefix, child, nested(child, `${prefix}${child.name}/`))),
            ...fileItems(prefix, current.path, sortedFiles(current), technicalFiles),
        ];
        return `<ul>\n${items.join("\n")}\n</ul>`;
    };

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
${toggle}${trail}
<h1><bdi>${escape(folder.name)}</bdi></h1>
<h2>קבצים בתיקייה</h2>
${direct}
${withTree ? `<h2>כל הקבצים ${countOf(folder)}</h2>
<div class="tree">
${nested(folder, "")}
</div>
` : ""}</main>
<script>${INDEX_SCRIPT}</script>
</body>
</html>
`;
}

// The file tree's own marks, from public/style.css - and the technical pages, hidden until asked for.
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
.technical-toggle {
    position: sticky; top: 0; z-index: 1; display: block; width: fit-content; margin-inline-start: auto;
    padding: 4px 8px; background: white; border: 1px solid #ddd; border-radius: 0 0 6px 6px;
    font-size: 0.9em; color: #444; cursor: pointer; user-select: none;
}
body:not(.show-technical) .technical, body:not(.show-technical) .all-count, body.show-technical .plain-count { display: none; }
@media print { .technical-toggle { display: none; } }
`;

// The toggle is the hash: it sets it, and follows it - on load, and on Back/Forward. Every link
// carries the hash on, so the next index opens the way this one was left - an index with no toggle
// of its own (nothing technical under it) included, so the hash is not lost on the way through.
const INDEX_SCRIPT = `
(() => {
    const HASH = ${JSON.stringify(SHOW_TECHNICAL_HASH)};
    const toggle = document.getElementById("show-technical");
    const links = [...document.querySelectorAll("main a[href]")].map(a => [a, a.getAttribute("href")]);
    const apply = () => {
        const on = location.hash === HASH;
        if (toggle) toggle.checked = on;
        document.body.classList.toggle("show-technical", on);
        for (const [a, href] of links) a.setAttribute("href", on ? href + HASH : href);
    };
    toggle?.addEventListener("change", () => {
        history.pushState(null, "", location.pathname + location.search + (toggle.checked ? HASH : ""));
        apply();
    });
    addEventListener("popstate", apply);
    addEventListener("hashchange", apply);
    apply();
})();
`;
