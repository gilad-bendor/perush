// Every page of the HTML mirror, printed to PDF - easier to print, and to share, than a page:
//
//     docs/_HTML-FROM-MD/<path>/<name>.html   -->   docs/_PDF-FROM-MD/<path>/<name>.pdf
//
// A PDF is printed from its HTML page, not from the Markdown file: the page is what the reader sees,
// and its `@media print` block (md-to-html.ts) is already the layout meant for paper. So a PDF is
// stale when it is missing or older than its page, or older than this code - the same `make` rule
// the HTML mirror follows one step earlier. The folder indexes get no PDF; a list of links is no
// document to print.
//
// Printing is Chromium's, through Playwright: one browser, launched when there is something to print
// and closed again once the queue has been idle a while. The files are printed one at a time, in
// the background - the whole tree, ~700 pages, takes a couple of minutes the first time.
//
// The folder indexes of this mirror are HtmlMirror's work, as they list the very same pages.
//
// **The links are rewritten on the way.** The page is loaded as a file, so every link in it is a
// file:// URL - which Chrome writes into the PDF as it is, and which leads nowhere once the PDF is
// shared. A link into docs/ is pointed at the same file on GitHub Pages, and a link to anything else
// in the repository at the file on GitHub (publicUrls()). A link within the page (`#heading`) is left
// alone, which is what keeps the index of headings working inside the PDF.
//
// HtmlMirror drives it (the `companion` it is given): every page it syncs is scheduled here, and
// every sweep of the tree is one here too, which deletes the PDFs whose file is gone.

import { dirname, join, posix, resolve } from "path";
import { readdir, rmdir, stat, unlink } from "fs/promises";
import type { Stats } from "fs";
import { pathToFileURL } from "url";
import type { Browser } from "playwright";
import { htmlPathFor, isMirroredFile, PDF_MIRROR_DIR, pdfPathFor } from "./html-mirror";
import { writeFileSafe } from "../write-file-safe";

// The PDF mirror's paths are html-mirror.ts's, which lists this mirror in its indexes too.
export { PDF_MIRROR_DIR, PDF_MIRROR_NAME, pdfPathFor } from "./html-mirror";

/** The code a PDF depends on besides its page. */
const RENDERER_FILES = [join(import.meta.dir, "pdf-mirror.ts")];

/** How long the browser is kept once the queue runs dry - a burst of saves costs one launch. */
const BROWSER_IDLE_MS = 30_000;

export type PdfOutcome = "printed" | "fresh" | "removed" | "absent";

/** Where a link of a PDF leads once the PDF has left this machine - see the note at the top. */
export type PublicUrls = {
    /** file:// URL of docs/, and the URL GitHub Pages serves it at. */
    docs: [string, string];
    /** file:// URL of the repository, and the URL GitHub shows its files at. */
    repo: [string, string];
};

/**
 * The public URLs of this repository, from its "origin" remote - null for one that is not on GitHub.
 * GitHub Pages serves docs/ at https://<owner>.github.io/<repo>/, which is the default for a project
 * site; a custom domain would have to be written in here.
 */
export async function publicUrls(root: string): Promise<PublicUrls | null> {
    const run = async (...args: string[]) => {
        try {
            const git = Bun.spawn(["git", ...args], { cwd: root, stdout: "pipe", stderr: "ignore" });
            const output = (await new Response(git.stdout).text()).trim();
            return await git.exited === 0 ? output : null;
        } catch {
            return null;
        }
    };
    const [remote, top, branch] = await Promise.all([
        run("remote", "get-url", "origin"),
        run("rev-parse", "--show-toplevel"),
        run("rev-parse", "--abbrev-ref", "HEAD"),
    ]);
    const github = remote?.match(/github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/);
    if (!github || !top) return null;
    const [, owner, repo] = github;
    const fileUrl = (path: string) => pathToFileURL(path).href.replace(/\/?$/, "/");
    return {
        docs: [fileUrl(join(top, "docs")), `https://${owner.toLowerCase()}.github.io/${repo}/`],
        repo: [fileUrl(top), `https://github.com/${owner}/${repo}/blob/${branch && branch !== "HEAD" ? branch : "main"}/`],
    };
}

/** Anything that wants to hear of the pages HtmlMirror syncs - which is what PdfMirror is. */
export type PageCompanion = {
    /** A page was synced - brought up to date, or found fresh, or removed. */
    schedule(mdPath: string): void;
    /** A sweep of the whole tree: `mdPaths` is every file that has a page. */
    sweep(mdPaths: string[]): Promise<void>;
};

export class PdfMirror implements PageCompanion {
    private readonly queue = new Set<string>();
    private readonly inFlight = new Map<string, Promise<PdfOutcome>>();
    private draining: Promise<void> | null = null;
    private browser: Promise<Browser> | null = null;
    private idleTimer: ReturnType<typeof setTimeout> | undefined;

    /**
     * @param root             the root of the served tree
     * @param rendererMtimeMs  PDFs older than this are stale whatever their page says
     * @param urls             where the links of a PDF are pointed - null leaves them as they are
     */
    constructor(private readonly root: string, private readonly rendererMtimeMs: number,
                private readonly urls: PublicUrls | null) {}

    static async create(root: string): Promise<PdfMirror> {
        const mtimes = await Promise.all(RENDERER_FILES.map(async file => (await stat(file)).mtimeMs));
        return new PdfMirror(root, Math.max(...mtimes), await publicUrls(root));
    }

    /** Prints a file's PDF soon, if it is stale - in the background, one file at a time. */
    schedule(mdPath: string): void {
        if (!isMirroredFile(mdPath)) return;
        this.queue.add(mdPath);
        this.draining ??= this.drain().finally(() => this.draining = null);
    }

    /** Resolves once everything scheduled so far has been printed. */
    async idle(): Promise<void> {
        while (this.draining) await this.draining;
    }

    private async drain(): Promise<void> {
        clearTimeout(this.idleTimer);
        for (const mdPath of this.queue) {
            this.queue.delete(mdPath);
            try {
                await this.syncFile(mdPath);
            } catch (error) {
                console.error(`PDF mirror: cannot print ${mdPath}:`, error);
            }
        }
        this.idleTimer = setTimeout(() => void this.close(), BROWSER_IDLE_MS);
    }

    /** Brings one file's PDF up to date now: prints it if stale, deletes it if its page is gone. */
    syncFile(mdPath: string): Promise<PdfOutcome> {
        // Two callers asking for one file - the queue and the print button - share one print.
        let running = this.inFlight.get(mdPath);
        if (!running) {
            running = this.print(mdPath).finally(() => this.inFlight.delete(mdPath));
            this.inFlight.set(mdPath, running);
        }
        return running;
    }

    private async print(mdPath: string): Promise<PdfOutcome> {
        const pagePath = join(this.root, htmlPathFor(mdPath));
        const pdfPath = join(this.root, pdfPathFor(mdPath));
        const page = isMirroredFile(mdPath) ? await statOrNull(pagePath) : null;
        if (!page?.isFile()) {
            return await this.removePdf(pdfPath) ? "removed" : "absent";
        }
        const pdf = await statOrNull(pdfPath);
        if (pdf && pdf.mtimeMs >= Math.max(page.mtimeMs, this.rendererMtimeMs)) return "fresh";

        const browser = await this.launch();
        const tab = await browser.newPage();
        try {
            await tab.goto(pathToFileURL(resolve(pagePath)).href, { waitUntil: "load" });
            if (this.urls) await tab.evaluate(pointLinksAt, this.urls);
            await writeFileSafe(pdfPath, await tab.pdf({ printBackground: true, preferCSSPageSize: true, format: "A4" }));
        } finally {
            await tab.close();
        }
        return "printed";
    }

    /** Schedules every file, and deletes the PDFs whose file has no page any more. */
    async sweep(mdPaths: string[]): Promise<void> {
        // An empty tree is far likelier a walk that failed than a project that was deleted.
        if (!mdPaths.length) return;
        for (const mdPath of mdPaths) this.schedule(mdPath);

        const wanted = new Set(mdPaths.filter(isMirroredFile).map(pdfPathFor));
        for (const pdfPath of await this.listPdfFiles()) {
            if (!wanted.has(pdfPath)) await this.removePdf(join(this.root, pdfPath));
        }
    }

    /** Closes the browser, if there is one - it is launched again when next needed. */
    async close(): Promise<void> {
        clearTimeout(this.idleTimer);
        const browser = this.browser;
        this.browser = null;
        if (browser) await (await browser).close();
    }

    private launch(): Promise<Browser> {
        clearTimeout(this.idleTimer);
        // Imported here, not at the top: a server that never prints never loads Playwright.
        this.browser ??= import("playwright").then(({ chromium }) => chromium.launch());
        return this.browser;
    }

    /** Every PDF in the mirror, relative to the root of the served tree. */
    private async listPdfFiles(): Promise<string[]> {
        try {
            const entries = await readdir(join(this.root, PDF_MIRROR_DIR), { recursive: true });
            return entries
                .filter(entry => entry.endsWith(".pdf") && !posix.basename(entry).startsWith(".tmp."))
                .map(entry => posix.join(PDF_MIRROR_DIR, entry));
        } catch {
            return [];
        }
    }

    /** Deletes a PDF, and then every folder above it that is left empty. @returns whether there was one. */
    private async removePdf(pdfPath: string): Promise<boolean> {
        try {
            await unlink(pdfPath);
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code === "ENOENT") return false;
            throw error;
        }
        const mirrorRoot = join(this.root, PDF_MIRROR_DIR);
        for (let dir = dirname(pdfPath); dir.startsWith(mirrorRoot + "/"); dir = dirname(dir)) {
            try {
                await rmdir(dir);           // fails - and ends the climb - on the first folder that is not empty
            } catch {
                break;
            }
        }
        return true;
    }
}

/**
 * Runs in the page, before it is printed: points every link at where it can be followed from a
 * shared PDF. A link within the page is left alone - it becomes a link within the PDF.
 */
function pointLinksAt(urls: PublicUrls): void {
    for (const link of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
        if (link.getAttribute("href")!.startsWith("#")) continue;
        for (const [local, published] of [urls.docs, urls.repo]) {
            if (link.href.startsWith(local)) {
                link.href = published + link.href.slice(local.length);
                break;
            }
        }
    }
}

async function statOrNull(path: string): Promise<Stats | null> {
    try {
        return await stat(path);
    } catch {
        return null;
    }
}
