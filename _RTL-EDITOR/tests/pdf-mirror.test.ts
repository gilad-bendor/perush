import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, readFile, rm, utimes, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { pathToFileURL } from "url";
import { HtmlMirror } from "../src/html/html-mirror";
import { PdfMirror, pdfPathFor, publicUrls, readStamp, sourceStamp } from "../src/html/pdf-mirror";

describe("pdfPathFor", () => {
    test("mirrors the page's path under _PDF-FROM-MD, .html becoming .pdf", () => {
        expect(pdfPathFor("פירוש/a.rtl.md")).toBe("docs/_PDF-FROM-MD/פירוש/a.rtl.pdf");
        expect(pdfPathFor("a/index.md")).toBe("docs/_PDF-FROM-MD/a/index.md.pdf");
    });
});

describe("publicUrls", () => {
    test("GitHub Pages for docs/, GitHub for the rest - from the origin remote", async () => {
        const root = await mkdtemp(join(tmpdir(), "pdf-urls-"));
        const git = (...args: string[]) => Bun.spawnSync(["git", ...args], { cwd: root });
        git("init", "-q", "-b", "main");
        git("remote", "add", "origin", "git@github.com:Some-One/perush.git");
        const urls = (await publicUrls(root))!;
        const top = Bun.spawnSync(["git", "rev-parse", "--show-toplevel"], { cwd: root }).stdout.toString().trim();
        expect(urls.docs).toEqual([pathToFileURL(join(top, "docs")).href + "/", "https://some-one.github.io/perush/"]);
        expect(urls.repo).toEqual([pathToFileURL(top).href + "/", "https://github.com/Some-One/perush/blob/main/"]);

        git("remote", "set-url", "origin", "https://gitlab.com/x/y.git");
        expect(await publicUrls(root)).toBeNull();
        await rm(root, { recursive: true, force: true });
    });
});

describe("PdfMirror", () => {
    let root: string;
    const pdfMirror = new PdfMirror("", "", null);      // replaced per test, below
    let mirror = pdfMirror;
    const write = async (path: string, content: string) => {
        await mkdir(dirname(join(root, path)), { recursive: true });
        await writeFile(join(root, path), content);
    };

    const urlsOf = (root: string) => ({
        docs: [pathToFileURL(join(root, "docs")).href + "/", "https://example.github.io/repo/"] as [string, string],
        repo: [pathToFileURL(root).href + "/", "https://github.com/example/repo/blob/main/"] as [string, string],
    });

    beforeEach(async () => {
        await mirror.close();
        root = await mkdtemp(join(tmpdir(), "pdf-mirror-"));
        mirror = new PdfMirror(root, "printer v1", urlsOf(root));
    });
    afterAll(async () => {
        await mirror.close();
    });

    test("prints a page, leaves a fresh PDF alone, and deletes it with its page", async () => {
        await write("a.md", "# a");
        const htmlMirror = new HtmlMirror(root, 1_000_000);
        await htmlMirror.syncFile("a.md");
        expect(await mirror.syncFile("a.md")).toBe("printed");
        expect((await readFile(join(root, pdfPathFor("a.md")))).subarray(0, 5).toString()).toBe("%PDF-");
        expect(await mirror.syncFile("a.md")).toBe("fresh");

        await write("a.md", "# b");
        await htmlMirror.syncFile("a.md");
        expect(await mirror.syncFile("a.md")).toBe("printed");      // the page moved on

        await rm(join(root, "a.md"));
        await htmlMirror.syncFile("a.md");
        expect(await mirror.syncFile("a.md")).toBe("removed");
        expect(existsSync(join(root, pdfPathFor("a.md")))).toBe(false);
    }, 30_000);

    test("a PDF is stamped with its page, and judged by the stamp - not by the dates", async () => {
        await write("a.md", "# a");
        await new HtmlMirror(root, 1_000_000).syncFile("a.md");
        const pagePath = join(root, "docs/_HTML-FROM-MD/a.html");
        const pdfPath = join(root, pdfPathFor("a.md"));
        expect(await mirror.syncFile("a.md")).toBe("printed");
        const stamp = sourceStamp(await readFile(pagePath, "utf-8"), "printer v1", urlsOf(root));
        expect(await readStamp(pdfPath)).toBe(stamp);

        // What a fresh clone does: any order of dates at all. The page is newer, and the PDF is still right.
        const earlier = new Date(Date.now() - 3_600_000), later = new Date(Date.now() + 60_000);
        await utimes(pdfPath, earlier, earlier);
        await utimes(pagePath, later, later);
        expect(await mirror.syncFile("a.md")).toBe("fresh");

        // ... and the other way round: a PDF newer than its page, but printed from another one.
        await writeFile(pagePath, (await readFile(pagePath, "utf-8")).replace("<h1", "<h2"));
        await utimes(pagePath, earlier, earlier);
        await utimes(pdfPath, later, later);
        expect(await mirror.syncFile("a.md")).toBe("printed");

        // New printing code reprints every PDF, as would links pointed elsewhere.
        const newPrinter = new PdfMirror(root, "printer v2", urlsOf(root));
        expect(await newPrinter.syncFile("a.md")).toBe("printed");
        expect(await newPrinter.syncFile("a.md")).toBe("fresh");
        await newPrinter.close();
        const otherLinks = new PdfMirror(root, "printer v2", null);
        expect(await otherLinks.syncFile("a.md")).toBe("printed");
        await otherLinks.close();

        await writeFile(pdfPath, "%PDF-1.4 printed by someone else");
        expect(await readStamp(pdfPath)).toBeNull();
        expect(await mirror.syncFile("a.md")).toBe("printed");
    }, 30_000);

    test("its links lead to GitHub Pages and GitHub, not to this disk", async () => {
        await write("x/a.md", "[b](b.md) [image](image.png) [here](#a) [folder](./)\n\n# a");
        await write("x/b.md", "b");
        await new HtmlMirror(root, 1_000_000).syncFile("x/a.md");
        await mirror.syncFile("x/a.md");
        const pdf = (await readFile(join(root, pdfPathFor("x/a.md")))).toString("latin1");
        expect(pdf).toContain("https://example.github.io/repo/_PDF-FROM-MD/x/b.pdf)");
        expect(pdf).toContain("https://github.com/example/repo/blob/main/x/image.png");
        expect(pdf).not.toContain("file://");
    }, 30_000);

    test("read from this server, a PDF's links lead back to this server - on disk, to GitHub Pages", async () => {
        await write("x/a.md", "[b](b.md#ב) [image](image.png)");
        await write("x/b.md", "# ב");
        await new HtmlMirror(root, 1_000_000).syncFile("x/a.md");
        await mirror.syncFile("x/a.md");
        const served = await mirror.servedFrom(pdfPathFor("x/a.md"), "http://localhost:4000/docs/");
        const text = Buffer.from(served!).toString("latin1");
        expect(text).toContain("(http://localhost:4000/docs/_PDF-FROM-MD/x/b.pdf#nameddest=");
        expect(text).toContain("https://github.com/example/repo/blob/main/x/image.png");
        expect(text).not.toContain("example.github.io");
        expect((await readFile(join(root, pdfPathFor("x/a.md")))).toString("latin1"))
            .toContain("https://example.github.io/repo/_PDF-FROM-MD/x/b.pdf");
        expect(await mirror.servedFrom(pdfPathFor("x/a.md"), "https://example.github.io/repo/")).toBeNull();
    }, 30_000);

    test("a link to a heading of another page scrolls its PDF there, by a destination with an ASCII name", async () => {
        await write("x/a.md", "[b](b.md#שני_ב) [same](#ראשון)\n\n# ראשון");
        await write("x/b.md", "# אחד\n\nטקסט\n\n# שני_ב\n\nטקסט");
        const htmlMirror = new HtmlMirror(root, 1_000_000);
        await htmlMirror.syncFile("x/a.md");
        await htmlMirror.syncFile("x/b.md");
        await mirror.syncFile("x/a.md");
        await mirror.syncFile("x/b.md");
        const name = (id: string) => encodeURIComponent(id).replace(/_/g, "%5F").replace(/%/g, "_");
        const a = (await readFile(join(root, pdfPathFor("x/a.md")))).toString("latin1");
        expect(a).toContain(`_PDF-FROM-MD/x/b.pdf#nameddest=${name("שני_ב")})`);
        expect(a).toContain(`/Dest /${name("ראשון")}`);

        // Every heading of b is a destination - though nothing in b links to it.
        const { PDFDict, PDFDocument, PDFName } = await import("pdf-lib");
        const b = await PDFDocument.load(await readFile(join(root, pdfPathFor("x/b.md"))));
        const dests = b.catalog.lookup(PDFName.of("Dests"), PDFDict).keys().map(key => key.decodeText());
        expect(dests).toEqual(expect.arrayContaining([name("אחד"), name("שני_ב")]));
    }, 30_000);

    test("HtmlMirror schedules every page it syncs, and a sweep deletes the orphans", async () => {
        await write("a.md", "a");
        await write("orphan.md", "o");
        const htmlMirror = new HtmlMirror(root, 1_000_000);
        htmlMirror.companion = mirror;
        await htmlMirror.syncTree(["a.md", "orphan.md"]);
        await mirror.idle();
        expect(existsSync(join(root, pdfPathFor("orphan.md")))).toBe(true);

        await rm(join(root, "orphan.md"));
        await htmlMirror.syncTree(["a.md"]);
        await mirror.idle();
        expect(existsSync(join(root, pdfPathFor("a.md")))).toBe(true);
        expect(existsSync(join(root, pdfPathFor("orphan.md")))).toBe(false);
    }, 30_000);
});
