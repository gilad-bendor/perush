// Every page of the HTML mirror, printed to PDF - easier to print, and to share, than a page:
//
//     docs/_HTML-FROM-MD/<path>/<name>.html   -->   docs/_PDF-FROM-MD/<path>/<name>.pdf
//
// A PDF is printed from its HTML page, not from the Markdown file: the page is what the reader sees,
// and its `@media print` block (md-to-html.ts) is already the layout meant for paper. The folder
// indexes get no PDF; a list of links is no document to print.
//
// **A PDF carries the stamp of what it was printed from**, and is stale when that stamp is not the
// one its page would give now - or when it is missing. The stamp is an MD5 of the page's content,
// of this file's and of where the links are pointed (sourceStamp()), and it is written into the
// PDF's document info as `/PerushSource`. Dates are not used, as they are for the HTML mirror: the
// PDFs are committed, and a fresh clone dates every file by the order git happened to write it in -
// which would reprint a PDF that is right, or, worse, keep one that is not. A stamp says the same
// thing on any disk. Reading it costs a few KB of the file, and is cached by the file's stat, so
// the 15 s sweep reads nothing that has not changed.
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
import { open, readdir, readFile, rmdir, stat, unlink } from "fs/promises";
import type { Stats } from "fs";
import { createHash } from "crypto";
import { pathToFileURL } from "url";
import type { Browser } from "playwright";
import { htmlPathFor, isMirroredFile, logSiteChange, PDF_MIRROR_DIR, pdfPathFor } from "./html-mirror";
import { writeFileSafe } from "../write-file-safe";

// The PDF mirror's paths are html-mirror.ts's, which lists this mirror in its indexes too.
export { PDF_MIRROR_DIR, PDF_MIRROR_NAME, pdfPathFor } from "./html-mirror";

/** The code a PDF depends on besides its page. */
const RENDERER_FILES = [join(import.meta.dir, "pdf-mirror.ts")];

/** The document-info key a PDF's stamp is kept under. */
const STAMP_KEY = "PerushSource";

/**
 * How much of a PDF is read for its stamp before reading all of it. Chromium makes the document
 * info object 1, and pdf-lib writes the objects in order, so it normally sits in the first ~500 bytes.
 */
const STAMP_HEAD_BYTES = 8192;

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
    /** The stamp of each page and each PDF last read, keyed by path - valid while `stats` still match. */
    private readonly stamps = new Map<string, { stats: string, stamp: string | null }>();

    /**
     * @param root     the root of the served tree
     * @param printer  what, besides its page, a PDF is printed by - a change to it reprints them all
     * @param urls     where the links of a PDF are pointed - null leaves them as they are
     */
    constructor(private readonly root: string, private readonly printer: string,
                private readonly urls: PublicUrls | null) {}

    static async create(root: string): Promise<PdfMirror> {
        const code = await Promise.all(RENDERER_FILES.map(file => readFile(file, "utf-8")));
        return new PdfMirror(root, code.join("\0"), await publicUrls(root));
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
        const stamp = await this.cached(pagePath, page, async () =>
            sourceStamp(await readFile(pagePath, "utf-8"), this.printer, this.urls));
        const pdf = await statOrNull(pdfPath);
        if (pdf && await this.cached(pdfPath, pdf, () => readStamp(pdfPath)) === stamp) return "fresh";

        // Should the page change while it is printed, the PDF bears the old stamp - and is printed again.
        const browser = await this.launch();
        const tab = await browser.newPage();
        let printed: Uint8Array;
        try {
            await tab.goto(pathToFileURL(resolve(pagePath)).href, { waitUntil: "load" });
            if (this.urls) await tab.evaluate(pointLinksAt, this.urls);
            printed = await tab.pdf({ printBackground: true, preferCSSPageSize: true, format: "A4" });
        } finally {
            await tab.close();
        }
        await writeFileSafe(pdfPath, await withStamp(printed, stamp));
        logSiteChange(this.root, "wrote", pdfPath);
        this.stamps.delete(pdfPath);
        return "printed";
    }

    /** `compute()`, or what it gave last time for this path if the file has not changed since. */
    private async cached<T extends string | null>(path: string, stats: Stats, compute: () => Promise<T>): Promise<T> {
        const key = `${stats.mtimeMs}:${stats.size}:${stats.ino}`;
        const known = this.stamps.get(path);
        if (known?.stats === key) return known.stamp as T;
        const stamp = await compute();
        this.stamps.set(path, { stats: key, stamp });
        return stamp;
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
        logSiteChange(this.root, "deleted", pdfPath);
        const mirrorRoot = join(this.root, PDF_MIRROR_DIR);
        for (let dir = dirname(pdfPath); dir.startsWith(mirrorRoot + "/"); dir = dirname(dir)) {
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

/** What a PDF printed from this page, by this code, with its links pointed at `urls`, is stamped with. */
export function sourceStamp(pageHtml: string, printer: string, urls: PublicUrls | null): string {
    return createHash("md5").update(printer).update("\0").update(JSON.stringify(urls))
        .update("\0").update(pageHtml).digest("hex");
}

/** A printed PDF with `stamp` added to its document info. */
async function withStamp(pdf: Uint8Array, stamp: string): Promise<Uint8Array> {
    // Imported here, like Playwright: only printing needs it.
    const { PDFDict, PDFDocument, PDFName, PDFString } = await import("pdf-lib");
    const document = await PDFDocument.load(pdf, { updateMetadata: false });
    const { context } = document;
    let info = context.trailerInfo.Info && context.lookupMaybe(context.trailerInfo.Info, PDFDict);
    if (!info) context.trailerInfo.Info = context.register(info = context.obj({}));
    info.set(PDFName.of(STAMP_KEY), PDFString.of(stamp));
    // No object streams - they would compress the stamp out of readStamp()'s sight.
    return document.save({ useObjectStreams: false });
}

/** The stamp a PDF was printed with - null for one printed without, or not by this code at all. */
export async function readStamp(pdfPath: string): Promise<string | null> {
    const pattern = new RegExp(`/${STAMP_KEY} \\(([0-9a-f]{32})\\)`);
    try {
        const file = await open(pdfPath);
        try {
            const head = Buffer.alloc(STAMP_HEAD_BYTES);
            const { bytesRead } = await file.read(head, 0, STAMP_HEAD_BYTES, 0);
            const found = head.subarray(0, bytesRead).toString("latin1").match(pattern);
            if (found || bytesRead < STAMP_HEAD_BYTES) return found?.[1] ?? null;
        } finally {
            await file.close();
        }
        return (await readFile(pdfPath)).toString("latin1").match(pattern)?.[1] ?? null;
    } catch {
        return null;
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
