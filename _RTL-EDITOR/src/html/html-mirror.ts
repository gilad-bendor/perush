// Every Markdown file of the tree, kept as a readable HTML page under docs/_HTML-FROM-MD/ - inside
// docs/ so that GitHub Pages can serve it.
//
//     <path>/<name>.md   -->   docs/_HTML-FROM-MD/<path>/<name>.html
//
// The mirror works like `make`: a page is (re-)rendered when it is missing, older than any of the
// files it was built from, or older than the code that renders it - so a renderer change rebuilds
// every page, and a server restart only redoes what went stale while it was down. A page whose file
// is gone is deleted.
//
// "The files it was built from" is more than the one file, because `<כלול-בהדפסה>` embeds another
// Markdown file into a page (see includes.ts). Those dependencies are only known once a page has
// been rendered, so a mirror that has just been made knows none of them and renders everything -
// which is what the server's first sweep is for. From then on `dependents` answers the other
// direction: a file that changed names every page that has to be rebuilt because of it.
//
// A render is therefore no longer the same thing as a write. The rendered HTML is compared with the
// page on disk and written only if it differs, and only a page that really changed makes its own
// dependents be re-synced - which is what stops two files that embed each other from rebuilding one
// another for ever.
//
// Every folder of the mirror, the root included, also gets an index.html listing its pages (see
// folder-index.ts). An index depends only on which pages exist, so it is rewritten whenever its
// content would change, rather than by date - and removed, with its folder, once no page is left under it.
// The indexes list only the pages whose file git does not ignore, and mark as technical those a
// .printignore names. docs/index.html, the page GitHub Pages opens with, is the root's index again.
//
// Whatever `companion` is set to (the PDF mirror - see pdf-mirror.ts) hears of every page synced, and
// of every sweep.
//
// Nothing here decides *when* to look; server.ts calls scheduleSync() for a file the watcher saw
// change, and syncTree() at startup and on its periodic rescan.

import { dirname, join, posix, relative } from "path";
import { readdir, readFile, rmdir, stat, unlink, utimes } from "fs/promises";
import type { Stats } from "fs";
import { renderMarkdownPage } from "./md-to-html";
import type { Breadcrumb } from "./md-to-html";
import { expandIncludes, hasIncludeDirective } from "./includes";
import { FOLDER_INDEX_NAME, folderIndexPages, mirrorSummary, siteIndexPage } from "./folder-index";
import type { MirrorSummary } from "./folder-index";
import { writeFileSafe } from "../write-file-safe";
import type { PageCompanion } from "./pdf-mirror";

/** The mirror's folder, relative to the root of the served tree - under docs/, which GitHub Pages serves. */
export const HTML_MIRROR_DIR = "docs/_HTML-FROM-MD";
/** The mirror folder's own name - what its root index and every breadcrumb trail call it. */
export const HTML_MIRROR_NAME = posix.basename(HTML_MIRROR_DIR);
/** The PDF mirror's folder, beside the HTML mirror (see pdf-mirror.ts, which prints it). */
export const PDF_MIRROR_DIR = "docs/_PDF-FROM-MD";
/** The PDF mirror folder's own name. */
export const PDF_MIRROR_NAME = posix.basename(PDF_MIRROR_DIR);
/** The folder the mirrors stand in - docs/, which GitHub Pages serves. */
export const SITE_DIR = posix.dirname(HTML_MIRROR_DIR);
/** What the site is called - the title of docs/index.html, and the first step of every breadcrumb trail. */
const SITE_TITLE = "פירוש";
/** The index of docs/ itself - the page GitHub Pages opens with. */
export const SITE_INDEX_PATH = posix.join(SITE_DIR, FOLDER_INDEX_NAME);
/**
 * Tells GitHub Pages to publish docs/ as it is. Without it Pages runs Jekyll, which drops every file
 * and folder whose name starts with "_" - both mirrors among them. Only its presence counts; the text
 * is for whoever finds it.
 */
export const NO_JEKYLL_PATH = posix.join(SITE_DIR, ".nojekyll");
const NO_JEKYLL_TEXT = "Tells GitHub Pages to serve docs/ as is, without Jekyll - which would drop every name starting with \"_\".\n"
    + "Written by _RTL-EDITOR (html-mirror.ts).\n";

/**
 * Says on the console what was changed under docs/ - every file written or deleted there, and every
 * folder deleted - by either mirror.
 * @param fullPath  as joined onto `root`
 */
export function logSiteChange(root: string, change: "wrote" | "deleted" | "deleted folder", fullPath: string): void {
    console.log(`docs/: ${change} ${relative(root, fullPath)}`);
}

/** The code a page depends on besides its file - a change to any of them makes every page stale. */
const RENDERER_FILES = [
    join(import.meta.dir, "md-to-html.ts"),
    join(import.meta.dir, "html-mirror.ts"),
    join(import.meta.dir, "includes.ts"),
    join(import.meta.dir, "../../public/src/tables.js"),
    join(import.meta.dir, "../../public/src/pseudo-tags.js"),
    join(import.meta.dir, "../../public/src/links.js"),
];

/** How long a changed file is left to settle before its page is rendered - one render for a burst of saves. */
const SYNC_DEBOUNCE_MS = 300;
/** The same for the indexes - one rewrite for a whole folder that came or went. */
const INDEX_DEBOUNCE_MS = 300;

/**
 * Does this Markdown file get a page? Every `.md` file does, except the terminal recordings
 * (`*.script.md`, `*.script.rtl.md`), which are a raw VT control stream rather than Markdown - only
 * the GET handler's renderTerminalOutput() can make text of them.
 *
 * AI output (`*.ai.md`, `*.ai.rtl.md`) is mirrored like anything else. Being a verbatim record is
 * about the *bytes on disk* - the table formatter leaves those files alone (isAiGeneratedFile() in
 * tables.js) - and says nothing about how they are read.
 *
 * @param mdPath  relative to the root of the served tree
 */
export function isMirroredFile(mdPath: string): boolean {
    return mdPath.endsWith(".md") && !/\.script(\.rtl)?\.md$/.test(mdPath);
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

/** Where the PDF of a Markdown file goes, relative to the root of the served tree - its page's path, in the PDF mirror. */
export function pdfPathFor(mdPath: string): string {
    return posix.join(PDF_MIRROR_DIR, posix.relative(HTML_MIRROR_DIR, htmlPathFor(mdPath)).replace(/\.html$/, ".pdf"));
}

// A scheme ("https:", "mailto:") or a protocol-relative URL - not a path in the tree.
const EXTERNAL_HREF = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * A link's href as the *page* needs it, for a link written in the Markdown file `fromFilePath`.
 *
 * A link to a file that has a page of its own leads to that page. Anything else - a file with no
 * page, an image, a folder - leads back to the original, which is two folders further away from the
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

/**
 * The trail above a file's page - the one its folder's index opens with, and the page itself at the
 * end of it: "פירוש / _HTML-FROM-MD / פירוש / 1-בראשית / <file>". Shown on screen only; the page's
 * print style drops it, and with it every PDF does.
 */
export function pageBreadcrumbs(mdPath: string): Breadcrumb[] {
    const pagePath = posix.relative(HTML_MIRROR_DIR, htmlPathFor(mdPath));
    const folders = [SITE_TITLE, HTML_MIRROR_NAME, ...posix.dirname(pagePath).split("/").filter(name => name !== ".")];
    return [
        ...folders.map((name, depth) => ({ name, href: "../".repeat(folders.length - 1 - depth) + FOLDER_INDEX_NAME })),
        { name: posix.basename(mdPath).replace(/(\.rtl)?\.md$/, "") },
    ];
}

/**
 * What became of one file's page.
 *
 * `fresh` and `unchanged` both mean "the page on disk is right": the first was decided by the
 * dates alone, the second by rendering the page and finding it identical to the one already there.
 * Only `rendered` and `removed` are changes anybody else has to hear about.
 */
export type SyncOutcome = "rendered" | "unchanged" | "fresh" | "removed" | "absent";
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
    /** Told of every page synced, and of every sweep - the PDF mirror, when there is one. */
    companion: PageCompanion | null = null;
    /** md path -> every file its page was last built from, itself included (see the note at the top). */
    private readonly dependencies = new Map<string, Set<string>>();
    /** The same, the other way round: md path -> the pages that have to be rebuilt when it changes. */
    private readonly dependents = new Map<string, Set<string>>();

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

    /**
     * Brings one file's page up to date, soon - many calls in a row cost one render.
     *
     * And with it every page that embeds the file, which is what makes an edit to an embedded file
     * show up in the pages that hold it. They are taken from the dependency map rather than followed
     * one link at a time, because the map is already flat: a page depends on everything it embeds at
     * any depth, so no chain has to be walked here.
     */
    scheduleSync(mdPath: string): void {
        this.scheduleOne(mdPath);
        for (const dependent of this.dependents.get(mdPath) ?? []) {
            if (dependent !== mdPath) this.scheduleOne(dependent);
        }
    }

    private scheduleOne(mdPath: string): void {
        if (!mdPath.endsWith(".md")) return;
        clearTimeout(this.timers.get(mdPath));
        this.timers.set(mdPath, setTimeout(() => {
            this.timers.delete(mdPath);
            this.syncFile(mdPath)
                .then(outcome => this.notePage(mdPath, outcome !== "removed" && outcome !== "absent"))
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
        const outcome = await this.syncPage(mdPath);
        this.companion?.schedule(mdPath);
        return outcome;
    }

    private async syncPage(mdPath: string): Promise<SyncOutcome> {
        const sourcePath = join(this.root, mdPath);
        const pagePath = join(this.root, htmlPathFor(mdPath));

        for (let attempt = 0; ; attempt++) {
            const source = isMirroredFile(mdPath) ? await statOrNull(sourcePath) : null;
            if (!source?.isFile()) {
                this.recordDependencies(mdPath, null);
                return await this.removePage(pagePath) ? "removed" : "absent";
            }
            const page = await statOrNull(pagePath);
            if (attempt === 0 && page && await this.isFresh(mdPath, page.mtimeMs)) return "fresh";

            const content = await readFile(sourcePath, "utf-8");
            const expanded = await expandIncludes(mdPath, content, path => this.loadMarkdown(path));
            this.recordDependencies(mdPath, expanded.dependencies);
            const html = renderMarkdownPage(expanded.content, mdPath, {
                hrefFor: href => mirroredHref(mdPath, href),
                errors: expanded.errors,
                breadcrumbs: pageBreadcrumbs(mdPath),
                // A file made of others - הדפסה.rtl.md - is a book, and has its own index if it wants one.
                pageIndex: !hasIncludeDirective(content),
            });

            let outcome: SyncOutcome;
            if (await readFileOrNull(pagePath) === html) {
                // Nothing to write - but the dates have to say so, or the next sweep renders it again.
                outcome = "unchanged";
                const newest = await this.newestInputMtime(expanded.dependencies);
                if (!page || page.mtimeMs < newest) await touch(pagePath);
            } else {
                await writeFileSafe(pagePath, html);
                logSiteChange(this.root, "wrote", pagePath);
                outcome = "rendered";
            }

            // The page was written after the file was read, so it is now the newer of the two - which
            // is exactly what would hide a change made to the file *during* the render. Hence: look again.
            const after = await statOrNull(sourcePath);
            if (!after || after.mtimeMs === source.mtimeMs || attempt >= 2) {
                return outcome;
            }
        }
    }

    /**
     * Is the page on disk younger than everything it was made from?
     *
     * A file the page depends on but that is not there contributes nothing: it was missing when the
     * page was rendered too, and the day it appears the watcher says so - and `dependents` then
     * names this very page. A page whose dependencies are not known at all is never fresh, which is
     * what makes a newly created mirror render the whole tree once.
     */
    private async isFresh(mdPath: string, pageMtimeMs: number): Promise<boolean> {
        const dependencies = this.dependencies.get(mdPath);
        return !!dependencies && pageMtimeMs >= await this.newestInputMtime(dependencies);
    }

    private async newestInputMtime(dependencies: Iterable<string>): Promise<number> {
        let newest = this.rendererMtimeMs;
        for (const dependency of dependencies) {
            const stats = await statOrNull(join(this.root, dependency));
            if (stats) newest = Math.max(newest, stats.mtimeMs);
        }
        return newest;
    }

    /** What a page was built from, and - the other way round - what a changed file makes stale. */
    private recordDependencies(mdPath: string, dependencies: Set<string> | null): void {
        for (const old of this.dependencies.get(mdPath) ?? []) {
            const pages = this.dependents.get(old);
            if (pages?.delete(mdPath) && !pages.size) this.dependents.delete(old);
        }
        if (!dependencies) {
            this.dependencies.delete(mdPath);
            return;
        }
        this.dependencies.set(mdPath, dependencies);
        for (const dependency of dependencies) {
            let pages = this.dependents.get(dependency);
            if (!pages) this.dependents.set(dependency, pages = new Set());
            pages.add(mdPath);
        }
    }

    /** Reads a file of the tree for an embedding page - null for one that is not there. */
    private async loadMarkdown(mdPath: string): Promise<string | null> {
        return await readFileOrNull(join(this.root, mdPath));
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
            for (const pagePath of await this.listMirrorFiles(HTML_MIRROR_DIR, ".html", false)) {
                if (!wanted.has(pagePath) && await this.removePage(join(this.root, pagePath))) removed++;
            }
            this.pagedFiles = new Set(mdPaths);
            await this.companion?.sweep(mdPaths);
            indexes = await this.syncIndexes();
        }

        return { rendered, removed, indexes };
    }

    /**
     * Writes every folder's index whose content changed, and removes the indexes - and so the
     * folders - that no page is left under. @returns how many were written or removed.
     *
     * An index lists only the pages whose file git does not ignore - tracked, or new and not yet
     * added - and marks as technical the ones a .printignore names (see gitListing()). Neither a
     * .gitignore nor a .printignore is a Markdown file, so an edit to one reaches here through the
     * periodic sweep, within 15 s.
     */
    async syncIndexes(): Promise<number> {
        if (!this.pagedFiles?.size) return 0;
        const listing = await gitListing(this.root);
        const listed = [...this.pagedFiles].filter(mdPath => !listing || listing.notIgnored.has(mdPath));
        const technical = listed.filter(mdPath => listing?.technical.has(mdPath));

        // The PDF mirror holds the same pages as this one, so its indexes are these very lists - it
        // gets them here rather than working them out again. A PDF not printed yet is listed a moment early.
        let changed = 0;
        const mirrors: MirrorSummary[] = [];
        for (const [mirrorDir, pathFor] of [[HTML_MIRROR_DIR, htmlPathFor], [PDF_MIRROR_DIR, pdfPathFor]] as const) {
            const pageOf = (mdPath: string) => posix.relative(mirrorDir, pathFor(mdPath));
            const pages = listed.map(pageOf);
            const technicalPages = new Set(technical.map(pageOf));
            const name = posix.basename(mirrorDir);
            changed += await this.syncMirrorIndexes(mirrorDir, folderIndexPages(pages, name, technicalPages, SITE_TITLE));
            mirrors.push(mirrorSummary(pages, name, technicalPages));
        }
        if (await this.syncSiteIndex(mirrors)) changed++;
        return changed;
    }

    /** Writes a mirror's indexes whose content changed, and removes the ones no page is left under. */
    private async syncMirrorIndexes(mirrorDir: string, wanted: Map<string, string>): Promise<number> {
        const mirrorRoot = join(this.root, mirrorDir);
        let changed = 0;
        for (const [indexPath, html] of wanted) {
            const fullPath = join(mirrorRoot, indexPath);
            if (await readFileOrNull(fullPath) !== html) {
                await writeFileSafe(fullPath, html);
                logSiteChange(this.root, "wrote", fullPath);
                changed++;
            }
        }

        // Deepest first: a folder is empty - and removePage() prunes it - only once its subfolders are gone.
        const stale = (await this.listMirrorFiles(mirrorDir, ".html", true))
            .filter(indexPath => !wanted.has(posix.relative(mirrorDir, indexPath)))
            .sort((a, b) => b.split("/").length - a.split("/").length);
        for (const indexPath of stale) {
            if (await this.removePage(join(this.root, indexPath), mirrorDir)) changed++;
        }
        return changed;
    }

    /**
     * docs/index.html: what is directly in docs/ - the mirrors that list anything, and every other
     * page or PDF standing there (bible-viewer.html). Removed once there is nothing to list.
     * @returns whether the file changed.
     */
    private async syncSiteIndex(mirrors: MirrorSummary[]): Promise<boolean> {
        const indexPath = join(this.root, SITE_INDEX_PATH);
        const mirrorNames = new Set([HTML_MIRROR_NAME, PDF_MIRROR_NAME]);
        let files: string[] = [];
        try {
            files = (await readdir(join(this.root, SITE_DIR), { withFileTypes: true }))
                .filter(entry => entry.isFile() && /\.(html|pdf)$/.test(entry.name)
                    && entry.name !== FOLDER_INDEX_NAME && !entry.name.startsWith(".") && !mirrorNames.has(entry.name))
                .map(entry => entry.name);
        } catch {}
        if (!files.length && !mirrors.some(mirror => mirror.pageCount)) {
            if (!await unlinkIfThere(indexPath)) return false;
            logSiteChange(this.root, "deleted", indexPath);
            return true;
        }

        // Whenever there is a site to serve, so that deleting docs/ whole is no harm: it all comes back.
        const noJekyllPath = join(this.root, NO_JEKYLL_PATH);
        if (await readFileOrNull(noJekyllPath) !== NO_JEKYLL_TEXT) {
            await writeFileSafe(noJekyllPath, NO_JEKYLL_TEXT);
            logSiteChange(this.root, "wrote", noJekyllPath);
        }

        const html = siteIndexPage(SITE_TITLE, mirrors, files);
        if (await readFileOrNull(indexPath) === html) return false;
        await writeFileSafe(indexPath, html);
        logSiteChange(this.root, "wrote", indexPath);
        return true;
    }

    /** Every file of a mirror with this extension - its pages, or its indexes - relative to the root of the served tree. */
    private async listMirrorFiles(mirrorDir: string, extension: string, indexes: boolean): Promise<string[]> {
        try {
            const entries = await readdir(join(this.root, mirrorDir), { recursive: true });
            return entries
                .filter(entry => entry.endsWith(extension) && !posix.basename(entry).startsWith(".tmp."))
                .filter(entry => (posix.basename(entry) === FOLDER_INDEX_NAME) === indexes)
                .map(entry => posix.join(mirrorDir, entry));
        } catch {
            return [];
        }
    }

    /** Deletes a page, and then every folder above it that is left empty. @returns whether there was a page. */
    private async removePage(pagePath: string, mirrorDir = HTML_MIRROR_DIR): Promise<boolean> {
        try {
            await unlink(pagePath);
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code === "ENOENT") return false;
            throw error;
        }
        logSiteChange(this.root, "deleted", pagePath);
        const mirrorRoot = join(this.root, mirrorDir);
        for (let dir = dirname(pagePath); dir.startsWith(mirrorRoot + "/"); dir = dirname(dir)) {
            try {
                await rmdir(dir);           // fails - and ends the climb - on the first folder that is not empty
            } catch {
                break;
            }
            logSiteChange(this.root, "deleted folder", dir);
        }
        return true;
    }
}

/**
 * Which files of the tree the indexes list, as git sees them - or null when `root` is not in a git
 * work tree, and git cannot be asked.
 *
 * - `notIgnored`: every file git does not ignore - the tracked ones, and the untracked ones not ignored.
 * - `technical`: the files a `.printignore` matches. It is read exactly like a .gitignore - in any
 *   folder, for the files under it - which is why git itself is asked to read it.
 */
async function gitListing(root: string): Promise<{ notIgnored: Set<string>; technical: Set<string> } | null> {
    // -z: names as they are, where the default would quote every Hebrew one in octal escapes.
    // --others: the untracked files too. --directory keeps the second walk out of untracked folders
    // it would list whole (node_modules and the like), and "*.md" out of everything else.
    const notIgnored = await gitLsFiles(root, ["--cached", "--others", "--exclude-standard"]);
    const technical = await gitLsFiles(root, ["--cached", "--others", "--ignored", "--directory",
        "--exclude-per-directory=.printignore", "--", "*.md"]);
    if (!notIgnored || !technical) return null;

    // A whole folder named in a .printignore comes back as the folder: "dir/".
    const folders = [...technical].filter(path => path.endsWith("/"));
    if (folders.length) {
        for (const file of notIgnored) {
            if (folders.some(folder => file.startsWith(folder))) technical.add(file);
        }
    }
    return { notIgnored, technical };
}

async function gitLsFiles(root: string, args: string[]): Promise<Set<string> | null> {
    try {
        const git = Bun.spawn(["git", "ls-files", "-z", ...args], { cwd: root, stdout: "pipe", stderr: "ignore" });
        const output = await new Response(git.stdout).text();
        if (await git.exited !== 0) return null;
        return new Set(output.split("\0").filter(Boolean));
    } catch {
        return null;
    }
}

async function unlinkIfThere(path: string): Promise<boolean> {
    try {
        await unlink(path);
        return true;
    } catch {
        return false;
    }
}

async function readFileOrNull(path: string): Promise<string | null> {
    try {
        return await readFile(path, "utf-8");
    } catch {
        return null;
    }
}

/** Says a page is as new as what it was made from, after a render found nothing to change. */
async function touch(path: string): Promise<void> {
    const now = new Date();
    try {
        await utimes(path, now, now);
    } catch {
        // The page has just been read, so this is a race worth losing quietly.
    }
}

async function statOrNull(path: string): Promise<Stats | null> {
    try {
        return await stat(path);
    } catch {
        return null;
    }
}
