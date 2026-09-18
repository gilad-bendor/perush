// Every Markdown file of the tree, kept as a readable HTML page under HTML-FROM-MD/.
//
//     <path>/<name>.md   -->   HTML-FROM-MD/<path>/<name>.html
//
// The mirror works like `make`: a page is (re-)rendered when it is missing, or older than its file,
// or older than the code that renders it - so a renderer change rebuilds every page, and a server
// restart only redoes what went stale while it was down. A page whose file is gone is deleted.
//
// Every folder of the mirror, the root included, also gets an index.html listing its pages (see
// folder-index.ts). An index depends only on which pages exist, so it is rewritten whenever its
// content would change, rather than by date - and removed, with its folder, once no page is left under it.
//
// Nothing here decides *when* to look; server.ts calls scheduleSync() for a file the watcher saw
// change, and syncTree() at startup and on its periodic rescan.

import { dirname, join, posix } from "path";
import { readdir, readFile, rmdir, stat, unlink } from "fs/promises";
import type { Stats } from "fs";
import { renderMarkdownPage } from "./md-to-html";
import { FOLDER_INDEX_NAME, folderIndexPages } from "./folder-index";
import { writeFileSafe } from "../write-file-safe";

/** The mirror's folder, at the root of the served tree. */
export const HTML_MIRROR_DIR = "HTML-FROM-MD";

/** The code a page depends on besides its file - a change to any of them makes every page stale. */
const RENDERER_FILES = [
    join(import.meta.dir, "md-to-html.ts"),
    join(import.meta.dir, "html-mirror.ts"),
    join(import.meta.dir, "../../public/src/tables.js"),
    join(import.meta.dir, "../../public/src/pseudo-tags.js"),
];

/** How long a changed file is left to settle before its page is rendered - one render for a burst of saves. */
const SYNC_DEBOUNCE_MS = 300;
/** The same for the indexes - one rewrite for a whole folder that came or went. */
const INDEX_DEBOUNCE_MS = 300;

/**
 * Does this Markdown file get a page? Every `.md` file does, except the verbatim records -
 * AI output (`*.ai.md`, `*.ai.rtl.md`) and terminal recordings (`*.script.md`, `*.script.rtl.md`).
 *
 * @param mdPath  relative to the root of the served tree
 */
export function isMirroredFile(mdPath: string): boolean {
    return mdPath.endsWith(".md") && !/\.(ai|script)(\.rtl)?\.md$/.test(mdPath);
}

/**
 * Where the page of a Markdown file goes, relative to the root of the served tree.
 *
 * A file named `index.md` would take its folder's index.html, so its page is `index.md.html`.
 */
export function htmlPathFor(mdPath: string): string {
    const pagePath = posix.basename(mdPath) === "index.md" ? `${mdPath}.html` : mdPath.replace(/\.md$/, ".html");
    return posix.join(HTML_MIRROR_DIR, pagePath);
}

// A scheme ("https:", "mailto:") or a protocol-relative URL - not a path in the tree.
const EXTERNAL_HREF = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * A link's href as the *page* needs it, for a link written in the Markdown file `fromFilePath`.
 *
 * A link to a file that has a page of its own leads to that page. Anything else - a file with no
 * page, an image, a folder - leads back to the original, which is one folder further away from the
 * page than from the file. A leading "/" is the root of the served tree, as in the editor.
 */
export function mirroredHref(fromFilePath: string, href: string): string {
    if (!href || href.startsWith("#") || EXTERNAL_HREF.test(href)) return href;

    const suffixStart = href.search(/[?#]/);
    const pathPart = suffixStart < 0 ? href : href.slice(0, suffixStart);
    const suffix = suffixStart < 0 ? "" : href.slice(suffixStart);
    if (!pathPart) return href;

    const fromDir = posix.dirname(fromFilePath);
    const target = pathPart.startsWith("/")
        ? posix.normalize(pathPart.slice(1))
        : posix.join(fromDir, pathPart);
    const destination = isMirroredFile(target) && !target.startsWith("../") ? htmlPathFor(target) : target;

    let relative = posix.relative(posix.join(HTML_MIRROR_DIR, fromDir), destination) || ".";
    if (pathPart.endsWith("/") && !relative.endsWith("/")) relative += "/";
    return relative + suffix;
}

export type SyncOutcome = "rendered" | "fresh" | "removed" | "absent";
export type SweepResult = { rendered: number; removed: number; indexes: number };

export class HtmlMirror {
    private readonly timers = new Map<string, ReturnType<typeof setTimeout>>();
    private indexTimer: ReturnType<typeof setTimeout> | undefined;
    private sweeping: Promise<SweepResult> | null = null;
    /**
     * The files that have a page - what the indexes list. Taken from the tree by every sweep, and
     * kept up to date in between by the syncs of single files. `null` until the first sweep: a single
     * file's sync knows nothing of the rest of the tree, and must not write indexes that say otherwise.
     */
    private pagedFiles: Set<string> | null = null;

    /**
     * @param root             the root of the served tree
     * @param rendererMtimeMs  pages older than this are stale whatever their file says
     */
    constructor(private readonly root: string, private readonly rendererMtimeMs: number) {}

    /** A mirror whose pages go stale whenever the rendering code changes. */
    static async create(root: string): Promise<HtmlMirror> {
        const mtimes = await Promise.all(RENDERER_FILES.map(async file => (await stat(file)).mtimeMs));
        return new HtmlMirror(root, Math.max(...mtimes));
    }

    /** Brings one file's page up to date, soon - many calls in a row cost one render. */
    scheduleSync(mdPath: string): void {
        if (!mdPath.endsWith(".md")) return;
        clearTimeout(this.timers.get(mdPath));
        this.timers.set(mdPath, setTimeout(() => {
            this.timers.delete(mdPath);
            this.syncFile(mdPath)
                .then(outcome => this.notePage(mdPath, outcome === "rendered" || outcome === "fresh"))
                .catch(error => console.error(`HTML mirror: cannot sync ${mdPath}:`, error));
        }, SYNC_DEBOUNCE_MS));
    }

    /** A page came or went - if that is news, the indexes have to follow. */
    private notePage(mdPath: string, hasPage: boolean): void {
        if (!this.pagedFiles) return;
        let changed: boolean;
        if (hasPage) {
            changed = !this.pagedFiles.has(mdPath);
            this.pagedFiles.add(mdPath);
        } else {
            changed = this.pagedFiles.delete(mdPath);
        }
        if (!changed) return;
        clearTimeout(this.indexTimer);
        this.indexTimer = setTimeout(() => {
            this.syncIndexes().catch(error => console.error("HTML mirror: cannot sync the indexes:", error));
        }, INDEX_DEBOUNCE_MS);
    }

    /** Brings one file's page up to date now: renders it if stale, deletes it if the file is gone. */
    async syncFile(mdPath: string): Promise<SyncOutcome> {
        const sourcePath = join(this.root, mdPath);
        const pagePath = join(this.root, htmlPathFor(mdPath));

        for (let attempt = 0; ; attempt++) {
            const source = isMirroredFile(mdPath) ? await statOrNull(sourcePath) : null;
            if (!source?.isFile()) {
                return await this.removePage(pagePath) ? "removed" : "absent";
            }
            const page = await statOrNull(pagePath);
            if (attempt === 0 && page && page.mtimeMs >= Math.max(source.mtimeMs, this.rendererMtimeMs)) {
                return "fresh";
            }

            const content = await readFile(sourcePath, "utf-8");
            await writeFileSafe(pagePath, renderMarkdownPage(content, mdPath, {
                hrefFor: href => mirroredHref(mdPath, href),
            }));

            // The page was written after the file was read, so it is now the newer of the two - which
            // is exactly what would hide a change made to the file *during* the render. Hence: look again.
            const after = await statOrNull(sourcePath);
            if (!after || after.mtimeMs === source.mtimeMs || attempt >= 2) {
                return "rendered";
            }
        }
    }

    /**
     * Brings every page up to date, and deletes the pages whose file is no longer in the tree.
     *
     * @param treePaths  every path of the tree - as snapshotOfTree() lists it, folders ending with "/"
     */
    syncTree(treePaths: Iterable<string>): Promise<SweepResult> {
        // One sweep at a time: a slow first one must not be joined by the periodic one.
        this.sweeping ??= this.sweep([...treePaths]).finally(() => this.sweeping = null);
        return this.sweeping;
    }

    private async sweep(treePaths: string[]): Promise<SweepResult> {
        const mdPaths = treePaths.filter(path => !path.endsWith("/") && isMirroredFile(path));
        let rendered = 0;
        let removed = 0;

        for (const mdPath of mdPaths) {
            try {
                if (await this.syncFile(mdPath) === "rendered") rendered++;
            } catch (error) {
                console.error(`HTML mirror: cannot sync ${mdPath}:`, error);
            }
        }

        // An empty tree is far likelier a walk that failed than a project that was deleted - and
        // taking it at its word would wipe out the whole mirror.
        let indexes = 0;
        if (mdPaths.length) {
            const wanted = new Set(mdPaths.map(htmlPathFor));
            for (const pagePath of await this.listHtmlFiles(false)) {
                if (!wanted.has(pagePath) && await this.removePage(join(this.root, pagePath))) removed++;
            }
            this.pagedFiles = new Set(mdPaths);
            indexes = await this.syncIndexes();
        }

        return { rendered, removed, indexes };
    }

    /**
     * Writes every folder's index whose content changed, and removes the indexes - and so the
     * folders - that no page is left under. @returns how many were written or removed.
     */
    async syncIndexes(): Promise<number> {
        if (!this.pagedFiles?.size) return 0;
        const mirrorRoot = join(this.root, HTML_MIRROR_DIR);
        const pages = [...this.pagedFiles].map(mdPath => posix.relative(HTML_MIRROR_DIR, htmlPathFor(mdPath)));
        const wanted = folderIndexPages(pages, HTML_MIRROR_DIR);
        let changed = 0;

        for (const [indexPath, html] of wanted) {
            const fullPath = join(mirrorRoot, indexPath);
            if (await readFileOrNull(fullPath) !== html) {
                await writeFileSafe(fullPath, html);
                changed++;
            }
        }

        // Deepest first: a folder is empty - and removePage() prunes it - only once its subfolders are gone.
        const stale = (await this.listHtmlFiles(true))
            .filter(indexPath => !wanted.has(posix.relative(HTML_MIRROR_DIR, indexPath)))
            .sort((a, b) => b.split("/").length - a.split("/").length);
        for (const indexPath of stale) {
            if (await this.removePage(join(this.root, indexPath))) changed++;
        }
        return changed;
    }

    /** Every page - or every folder index - in the mirror, relative to the root of the served tree. */
    private async listHtmlFiles(indexes: boolean): Promise<string[]> {
        try {
            const entries = await readdir(join(this.root, HTML_MIRROR_DIR), { recursive: true });
            return entries
                .filter(entry => entry.endsWith(".html") && !posix.basename(entry).startsWith(".tmp."))
                .filter(entry => (posix.basename(entry) === FOLDER_INDEX_NAME) === indexes)
                .map(entry => posix.join(HTML_MIRROR_DIR, entry));
        } catch {
            return [];
        }
    }

    /** Deletes a page, and then every folder above it that is left empty. @returns whether there was a page. */
    private async removePage(pagePath: string): Promise<boolean> {
        try {
            await unlink(pagePath);
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code === "ENOENT") return false;
            throw error;
        }
        const mirrorRoot = join(this.root, HTML_MIRROR_DIR);
        for (let dir = dirname(pagePath); dir.startsWith(mirrorRoot + "/"); dir = dirname(dir)) {
            try {
                await rmdir(dir);           // fails - and ends the climb - on the first folder that is not empty
            } catch {
                break;
            }
        }
        return true;
    }
}

async function readFileOrNull(path: string): Promise<string | null> {
    try {
        return await readFile(path, "utf-8");
    } catch {
        return null;
    }
}

async function statOrNull(path: string): Promise<Stats | null> {
    try {
        return await stat(path);
    } catch {
        return null;
    }
}
