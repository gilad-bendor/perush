import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, readFile, rm, stat, utimes, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { HtmlMirror, htmlPathFor, isMirroredFile, mirroredHref } from "../src/html/html-mirror";
import { folderIndexPages } from "../src/html/folder-index";

describe("isMirroredFile", () => {
    test("every Markdown file gets a page", () => {
        expect(isMirroredFile("פירוש/a.rtl.md")).toBe(true);
        expect(isMirroredFile("docs/notes.md")).toBe(true);
        expect(isMirroredFile("_scratch_1.rtl.md")).toBe(true);
    });

    test("AI output included - its bytes are verbatim, its reading is not", () => {
        expect(isMirroredFile("a.ai.md")).toBe(true);
        expect(isMirroredFile("a.ai.rtl.md")).toBe(true);
    });

    test("except the terminal recordings, which are not Markdown at all", () => {
        expect(isMirroredFile("claude-sessions/a.script.md")).toBe(false);
        expect(isMirroredFile("claude-sessions/a.script.rtl.md")).toBe(false);
    });

    test("and anything that is not Markdown", () => {
        expect(isMirroredFile("a.txt")).toBe(false);
    });
});

describe("htmlPathFor", () => {
    test("mirrors the path under HTML-FROM-MD, .md becoming .html", () => {
        expect(htmlPathFor("פירוש/1-בראשית/a.rtl.md")).toBe("HTML-FROM-MD/פירוש/1-בראשית/a.rtl.html");
        expect(htmlPathFor("notes.md")).toBe("HTML-FROM-MD/notes.html");
    });

    test("a path climbing out of the tree leaves the mirror's prefix behind", () => {
        // What the /api/print/ handler checks for, to keep the endpoint from serving any .html on disk.
        expect(htmlPathFor("../../../etc/passwd.md").startsWith("HTML-FROM-MD/")).toBe(false);
        expect(htmlPathFor("a/../../b.md").startsWith("HTML-FROM-MD/")).toBe(false);
        expect(htmlPathFor("a/../b.md")).toBe("HTML-FROM-MD/b.html");
    });

    test("an index.md does not take its folder's index.html", () => {
        expect(htmlPathFor("a/index.md")).toBe("HTML-FROM-MD/a/index.md.html");
        expect(htmlPathFor("a/index.rtl.md")).toBe("HTML-FROM-MD/a/index.rtl.html");
    });
});

describe("mirroredHref", () => {
    const from = "פירוש/1-בראשית/a.rtl.md";

    test("a link to a mirrored file leads to its page, the path as relative as before", () => {
        expect(mirroredHref(from, "../../נספחים/b.rtl.md")).toBe("../../נספחים/b.rtl.html");
        expect(mirroredHref(from, "c.md")).toBe("c.html");
    });

    test("keeps an anchor", () => {
        expect(mirroredHref(from, "c.rtl.md#section")).toBe("c.rtl.html#section");
    });

    test("a leading / is the root of the served tree", () => {
        expect(mirroredHref(from, "/נספחים/b.rtl.md")).toBe("../../נספחים/b.rtl.html");
    });

    test("a file with no page is reached back in the tree - one folder further away", () => {
        expect(mirroredHref(from, "b.script.md")).toBe("../../../פירוש/1-בראשית/b.script.md");
        expect(mirroredHref(from, "image.png")).toBe("../../../פירוש/1-בראשית/image.png");
        expect(mirroredHref("notes.md", "dir/")).toBe("../dir/");
    });

    test("leaves external links and bare anchors alone", () => {
        expect(mirroredHref(from, "https://example.com/a.md")).toBe("https://example.com/a.md");
        expect(mirroredHref(from, "mailto:a@b.c")).toBe("mailto:a@b.c");
        expect(mirroredHref(from, "#section")).toBe("#section");
    });
});

describe("HtmlMirror", () => {
    let root: string;
    const RENDERER_MTIME = 1_000_000;       // long before any file the tests write
    const mirror = () => new HtmlMirror(root, RENDERER_MTIME);
    const page = (mdPath: string) => join(root, htmlPathFor(mdPath));
    const write = async (mdPath: string, content: string) => {
        await mkdir(dirname(join(root, mdPath)), { recursive: true });
        await writeFile(join(root, mdPath), content);
    };

    beforeEach(async () => {
        root = await mkdtemp(join(tmpdir(), "html-mirror-"));
    });
    afterEach(async () => {
        await rm(root, { recursive: true, force: true });
    });

    test("renders a missing page, and leaves a fresh one alone", async () => {
        await write("a/b.rtl.md", "# כותרת");
        const m = mirror();
        expect(await m.syncFile("a/b.rtl.md")).toBe("rendered");
        expect(await readFile(page("a/b.rtl.md"), "utf-8")).toContain('<h1 id="כותרת">כותרת</h1>');
        expect(await m.syncFile("a/b.rtl.md")).toBe("fresh");
    });

    test("a mirror that knows no dependencies yet renders the page, and writes nothing", async () => {
        await write("b.md", "one");
        await mirror().syncFile("b.md");
        // A fresh mirror cannot tell what the page was built from, so it has to build it again -
        // which is the startup sweep, and why it costs almost no writes.
        expect(await mirror().syncFile("b.md")).toBe("unchanged");
    });

    test("re-renders a page older than its file", async () => {
        await write("b.md", "one");
        await mirror().syncFile("b.md");
        await write("b.md", "two");
        const old = new Date(Date.now() - 60_000);
        await utimes(page("b.md"), old, old);
        expect(await mirror().syncFile("b.md")).toBe("rendered");
        expect(await readFile(page("b.md"), "utf-8")).toContain("two");
    });

    test("a renderer newer than the page keeps it from ever being called fresh", async () => {
        await write("b.md", "one");
        const m = mirror();
        await m.syncFile("b.md");
        expect(await m.syncFile("b.md")).toBe("fresh");

        // The same page and the same dependencies, but a renderer that has moved on since.
        const newer = new HtmlMirror(root, Date.now() + 60_000);
        await newer.syncFile("b.md");
        expect(await newer.syncFile("b.md")).toBe("unchanged");
    });

    test("a page identical to the one on disk is touched, so the next sweep skips it", async () => {
        await write("b.md", "one");
        const m = mirror();
        await m.syncFile("b.md");
        const old = new Date(Date.now() - 60_000);
        await utimes(page("b.md"), old, old);
        expect(await mirror().syncFile("b.md")).toBe("unchanged");
        expect((await stat(page("b.md"))).mtimeMs).toBeGreaterThan(old.getTime());
    });

    test("deletes the page of a file that is gone, and the folders left empty", async () => {
        await write("x/y/b.md", "text");
        await write("x/c.md", "text");
        await mirror().syncFile("x/y/b.md");
        await mirror().syncFile("x/c.md");
        await rm(join(root, "x/y/b.md"));
        expect(await mirror().syncFile("x/y/b.md")).toBe("removed");
        expect(existsSync(join(root, "HTML-FROM-MD/x/y"))).toBe(false);
        expect(existsSync(page("x/c.md"))).toBe(true);
        expect(await mirror().syncFile("x/y/b.md")).toBe("absent");
    });

    test("renders AI output like anything else", async () => {
        await write("a.ai.rtl.md", "| x | y |\n|---|---|\n| 1 | 2 |");
        expect(await mirror().syncFile("a.ai.rtl.md")).toBe("rendered");
        expect(await readFile(page("a.ai.rtl.md"), "utf-8")).toContain("<th>x</th>");
    });

    test("never renders a terminal recording", async () => {
        await write("a.script.rtl.md", "text");
        expect(await mirror().syncFile("a.script.rtl.md")).toBe("absent");
        expect(existsSync(page("a.script.rtl.md"))).toBe(false);
    });

    test("syncTree renders the tree and deletes the pages it no longer holds", async () => {
        await write("a.md", "a");
        await write("dir/b.rtl.md", "b");
        expect(await mirror().syncTree(["a.md", "dir/", "dir/b.rtl.md"])).toEqual({ rendered: 2, removed: 0, indexes: 2 });

        expect(await mirror().syncTree(["a.md"])).toEqual({ rendered: 0, removed: 1, indexes: 2 });
        expect(existsSync(page("dir/b.rtl.md"))).toBe(false);
        expect(existsSync(join(root, "HTML-FROM-MD/dir"))).toBe(false);
    });

    test("syncTree takes an empty tree for a failed walk, and deletes nothing", async () => {
        await write("a.md", "a");
        await mirror().syncTree(["a.md"]);
        expect(await mirror().syncTree([])).toEqual({ rendered: 0, removed: 0, indexes: 0 });
        expect(existsSync(page("a.md"))).toBe(true);
    });

    test("every folder gets an index, rewritten only when the pages change", async () => {
        await write("a.md", "a");
        await write("x/y/b.rtl.md", "b");
        const m = mirror();
        expect((await m.syncTree(["a.md", "x/", "x/y/", "x/y/b.rtl.md"])).indexes).toBe(3);
        for (const folder of ["", "x/", "x/y/"]) {
            expect(existsSync(join(root, `HTML-FROM-MD/${folder}index.html`))).toBe(true);
        }
        expect((await m.syncTree(["a.md", "x/", "x/y/", "x/y/b.rtl.md"])).indexes).toBe(0);
    });

    test("an index is not mistaken for a page whose file is gone", async () => {
        await write("x/b.md", "b");
        const m = mirror();
        await m.syncTree(["x/", "x/b.md"]);
        expect((await m.syncTree(["x/", "x/b.md"])).removed).toBe(0);
    });

    test("a page embedding another file is rebuilt when that file changes", async () => {
        await write("a.rtl.md", '# מארח\n<כלול-בהדפסה מקור="dir/b.rtl.md">');
        await write("dir/b.rtl.md", "טקסט ראשון");
        const m = mirror();
        expect(await m.syncFile("a.rtl.md")).toBe("rendered");
        expect(await readFile(page("a.rtl.md"), "utf-8")).toContain("טקסט ראשון");

        await write("dir/b.rtl.md", "טקסט שני");
        expect(await m.syncFile("a.rtl.md")).toBe("rendered");
        expect(await readFile(page("a.rtl.md"), "utf-8")).toContain("טקסט שני");
    });

    test("an embedded file that changes brings every page that holds it along", async () => {
        await write("a.rtl.md", '<כלול-בהדפסה מקור="b.rtl.md">');
        await write("c.rtl.md", '<כלול-בהדפסה מקור="b.rtl.md">');
        await write("b.rtl.md", "ראשון");
        const m = mirror();
        await m.syncTree(["a.rtl.md", "b.rtl.md", "c.rtl.md"]);

        await write("b.rtl.md", "שני");
        m.scheduleSync("b.rtl.md");
        await Bun.sleep(600);
        for (const holder of ["a.rtl.md", "c.rtl.md"]) {
            expect(await readFile(page(holder), "utf-8")).toContain("שני");
        }
    });

    test("a file that was missing when the page was built is a dependency all the same", async () => {
        await write("a.rtl.md", '<כלול-בהדפסה מקור="b.rtl.md">');
        const m = mirror();
        await m.syncFile("a.rtl.md");
        expect(await readFile(page("a.rtl.md"), "utf-8")).toContain("לא נמצא");

        await write("b.rtl.md", "הנה הוא");
        m.scheduleSync("b.rtl.md");
        await Bun.sleep(600);
        expect(await readFile(page("a.rtl.md"), "utf-8")).toContain("הנה הוא");
    });

    test("two files that embed each other settle rather than rebuild one another for ever", async () => {
        await write("a.rtl.md", 'א\n<כלול-בהדפסה מקור="b.rtl.md">');
        await write("b.rtl.md", 'ב\n<כלול-בהדפסה מקור="a.rtl.md">');
        const m = mirror();
        await m.syncTree(["a.rtl.md", "b.rtl.md"]);
        m.scheduleSync("a.rtl.md");
        await Bun.sleep(600);
        expect(await readFile(page("a.rtl.md"), "utf-8")).toContain("הפניה מעגלית");
        expect(await m.syncFile("a.rtl.md")).toBe("fresh");
    });

    test("a folder left with no page loses its index, and is removed", async () => {
        await write("a.md", "a");
        await write("x/y/b.md", "b");
        const m = mirror();
        await m.syncTree(["a.md", "x/", "x/y/", "x/y/b.md"]);
        await rm(join(root, "x"), { recursive: true });
        expect(await m.syncTree(["a.md"])).toEqual({ rendered: 0, removed: 1, indexes: 3 });   // root rewritten, x and x/y removed
        expect(existsSync(join(root, "HTML-FROM-MD/x"))).toBe(false);
        expect(existsSync(join(root, "HTML-FROM-MD/index.html"))).toBe(true);
    });
});

describe("folderIndexPages", () => {
    const pages = ["top.html", "פירוש/הקדמה.rtl.html", "פירוש/1-בראשית/b.rtl.html", "פירוש/1-בראשית/a.rtl.html"];
    const indexes = folderIndexPages(pages, "HTML-FROM-MD");
    const section = (html: string, from: string, to: string) => html.slice(html.indexOf(from), html.indexOf(to));

    test("one for the root and one for every folder", () => {
        expect([...indexes.keys()].sort()).toEqual(["index.html", "פירוש/1-בראשית/index.html", "פירוש/index.html"]);
    });

    test("lists the folder's own subfolders and then its own pages, by their names", () => {
        const direct = section(indexes.get("פירוש/index.html")!, "<h2>קבצים בתיקייה</h2>", "<h2>כל הקבצים");
        const folderLink = direct.indexOf(`href="${encodeURIComponent("1-בראשית")}/index.html">1-בראשית</a> <span class="count">(2)</span></li>`);
        const fileLink = direct.indexOf(`href="${encodeURIComponent("הקדמה.rtl.html")}">הקדמה</a>`);
        expect(folderLink).toBeGreaterThanOrEqual(0);
        expect(fileLink).toBeGreaterThan(folderLink);
        expect(direct).not.toContain("b.rtl.html");
    });

    test("two pages that would share a name are both shown in full", () => {
        const index = folderIndexPages(["a.html", "a.rtl.html", "b.rtl.html"], "HTML-FROM-MD").get("index.html")!;
        expect(index).toContain(">a.md</a>");
        expect(index).toContain(">a.rtl.md</a>");
        expect(index).toContain(">b</a>");
    });

    test("a folder holding only folders lists them", () => {
        const index = folderIndexPages(["x/y/a.html"], "HTML-FROM-MD").get("x/index.html")!;
        expect(section(index, "<h2>קבצים בתיקייה</h2>", "<h2>כל הקבצים")).toContain('href="y/index.html">y</a>');
    });

    test("then nests every page under it - folders first, each linking to its index", () => {
        const all = section(indexes.get("index.html")!, "<h2>כל הקבצים", "</main>");
        const order = ["פירוש/index.html", "פירוש/1-בראשית/index.html", "פירוש/1-בראשית/a.rtl.html", "פירוש/1-בראשית/b.rtl.html", "פירוש/הקדמה.rtl.html", "top.html"]
            .map(path => all.indexOf(`href="${path.split("/").map(encodeURIComponent).join("/")}"`));
        expect(order.every(position => position >= 0)).toBe(true);
        expect([...order].sort((a, b) => a - b)).toEqual(order);
        expect(all).toContain("(4)");
    });

    test("a breadcrumb trail leads back up", () => {
        const index = indexes.get("פירוש/1-בראשית/index.html")!;
        expect(index).toContain('<a dir="auto" href="../../index.html">HTML-FROM-MD</a>');
        expect(index).toContain(`<a dir="auto" href="../index.html">פירוש</a>`);
    });
});
