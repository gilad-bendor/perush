import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, readFile, rm, utimes, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { pathToFileURL } from "url";
import { HtmlMirror } from "../src/html/html-mirror";
import { PdfMirror, pdfPathFor, publicUrls } from "../src/html/pdf-mirror";

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
    const pdfMirror = new PdfMirror("", 0, null);      // replaced per test, below
    let mirror = pdfMirror;
    const write = async (path: string, content: string) => {
        await mkdir(dirname(join(root, path)), { recursive: true });
        await writeFile(join(root, path), content);
    };

    beforeEach(async () => {
        await mirror.close();
        root = await mkdtemp(join(tmpdir(), "pdf-mirror-"));
        mirror = new PdfMirror(root, 1_000_000, {
            docs: [pathToFileURL(join(root, "docs")).href + "/", "https://example.github.io/repo/"],
            repo: [pathToFileURL(root).href + "/", "https://github.com/example/repo/blob/main/"],
        });
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

        const later = new Date(Date.now() + 60_000);
        await utimes(join(root, "docs/_HTML-FROM-MD/a.html"), later, later);
        expect(await mirror.syncFile("a.md")).toBe("printed");      // the page moved on

        await rm(join(root, "a.md"));
        await htmlMirror.syncFile("a.md");
        expect(await mirror.syncFile("a.md")).toBe("removed");
        expect(existsSync(join(root, pdfPathFor("a.md")))).toBe(false);
    }, 30_000);

    test("its links lead to GitHub Pages and GitHub, not to this disk", async () => {
        await write("x/a.md", "[b](b.md) [image](image.png) [here](#a)\n\n# a");
        await write("x/b.md", "b");
        await new HtmlMirror(root, 1_000_000).syncFile("x/a.md");
        await mirror.syncFile("x/a.md");
        const pdf = (await readFile(join(root, pdfPathFor("x/a.md")))).toString("latin1");
        expect(pdf).toContain("https://example.github.io/repo/_HTML-FROM-MD/x/b.html");
        expect(pdf).toContain("https://github.com/example/repo/blob/main/x/image.png");
        expect(pdf).not.toContain("file://");
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
