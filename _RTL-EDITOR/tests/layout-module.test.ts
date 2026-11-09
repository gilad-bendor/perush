import { afterEach, beforeEach, describe, expect, test } from "./test-kit.ts";
import { mkdir, mkdtemp, rm, utimes, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { dirname, join, relative } from "path";
import {
    applyLayout, DEFAULT_PDF_SETTINGS, folderLayoutPathsFor, isFolderLayoutFile, isLayoutFile, layoutChainFor, layoutFileOf, layoutFor,
    layoutPathFor, loadLayoutModule, md5Of, outputOf, publicationOf, resolveLayout, runChain, type ResolvedLayout,
} from "../src/html/layout-module.ts";
import type { LayoutOfFile } from "../src/html/layout-schema.ts";
import { FOOTNOTE_REF_EM, FOOTNOTE_REF_SCALE, markdownWidthEm, measureAt, textWidthEm } from "../src/html/text-measure.ts";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html.ts";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK, NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK, ROW_MARK } from "../src/html/layout-marks.ts";
import { isIgnoredWatchPath } from "../src/fs-changes.ts";

const TEXT = "# לוח\n\n**1** אחת,\n**2** שתיים.\n**3** שלוש,\n\n## סוף";
const MD5 = md5Of(TEXT);
const nothing: ResolvedLayout = {
    output: "plain", page: null, pdf: DEFAULT_PDF_SETTINGS, groups: [], pageBreaks: new Map(), attention: [], data: {}, sourceMd5: null,
};

describe("the layout modules of a file", () => {
    test("are every folder's .layout.ts above it, the root's first, then its own <name>.layout.ts", () => {
        expect(layoutPathFor("a/b/translation.rtl.md")).toBe("a/b/translation.rtl.layout.ts");
        expect(folderLayoutPathsFor("a/b/c.md")).toEqual([".layout.ts", "a/.layout.ts", "a/b/.layout.ts"]);
        expect(layoutChainFor("c.md")).toEqual([".layout.ts", "c.layout.ts"]);
        expect(isLayoutFile("a/c.layout.ts") && isLayoutFile("a/.layout.ts")).toBe(true);
        expect(isFolderLayoutFile("a/.layout.ts")).toBe(true);
        expect(isFolderLayoutFile("a/c.layout.ts")).toBe(false);
    });

    test("are watched, though they are no Markdown - and so is any TypeScript they may import", () => {
        expect(isIgnoredWatchPath("a/c.layout.ts", new Set())).toBe(false);
        expect(isIgnoredWatchPath("a/layout/logic.ts", new Set())).toBe(false);
        expect(isIgnoredWatchPath("a/other.json", new Set())).toBe(true);
    });
});

describe("a layout module", () => {
    let dir: string;
    beforeEach(async () => { dir = await mkdtemp(join(tmpdir(), "layout-module-")); });
    afterEach(async () => { await rm(dir, { recursive: true, force: true }); });
    let version = 0;
    const module = async (path: string, source: string) => {
        await mkdir(dirname(join(dir, path)), { recursive: true });
        await writeFile(join(dir, path), source);
        await utimes(join(dir, path), new Date(), new Date(Date.now() + 1000 * ++version));
        return join(dir, path);
    };
    const failure = async (path: string) => (await loadLayoutModule(path) as { error: string }).error;

    test("may import files of the repository by a relative path - loaded with them - and types from anywhere", async () => {
        await module("lib/logic.ts", "export const answer = () => ({ output: \"none\" });");
        const path = await module("a/.layout.ts", 'import type { X } from "nowhere";\nimport { answer } from "../lib/logic.ts";\nexport default answer;');
        const loaded = await loadLayoutModule(path) as { layout: () => unknown, files: string[] };
        expect(loaded.layout()).toEqual({ output: "none" });
        expect(loaded.files.map(file => relative(dir, file))).toEqual(["a/.layout.ts", "lib/logic.ts"]);
    });

    test("may import a file whose path is Hebrew", async () => {
        await module("שונות/לוגיקה.ts", "export const answer = () => ({ output: \"none\" });");
        const path = await module("a/.layout.ts", 'import { answer } from "../שונות/לוגיקה.ts";\nexport default answer;');
        expect((await loadLayoutModule(path) as { layout: () => unknown }).layout()).toEqual({ output: "none" });
    });

    test("may not import a package, nor a file that is not there", async () => {
        expect(await failure(await module("p.layout.ts", 'import { x } from "fontkit";\nexport default () => x;'))).toContain('not "fontkit"');
        expect(await failure(await module("m.layout.ts", 'import { x } from "./missing.ts";\nexport default () => x;'))).toContain("which is no file");
    });

    test("must export a function, and load", async () => {
        expect(await failure(await module("f.layout.ts", "export default 5;"))).toContain("must be a function");
        expect(await loadLayoutModule(await module("s.layout.ts", "export default ( =>;"))).toHaveProperty("error");
        expect(await loadLayoutModule(join(dir, "none.ts"))).toBeNull();
    });

    test("is loaded afresh once it changes - or anything it imports does", async () => {
        await module("lib/v.ts", "export const v = 1;");
        const path = await module("x.layout.ts", 'import { v } from "./lib/v.ts";\nexport default () => ({ data: { v } });');
        expect((await loadLayoutModule(path) as { layout: () => unknown }).layout()).toEqual({ data: { v: 1 } });
        await module("lib/v.ts", "export const v = 2;");
        expect((await loadLayoutModule(path) as { layout: () => unknown }).layout()).toEqual({ data: { v: 2 } });
    });

    test("is told what the folders above it said, and the nearer one wins - `page` field by field", async () => {
        await module(".layout.ts", 'export default () => ({ output: "plain", page: { fontSize: 10, marginBlock: 20 } });');
        await module("a/.layout.ts", "export default () => null;");
        await module("a/b/.layout.ts", "export default (file: unknown, above: unknown[]) => ({ page: { fontSize: 12 }, data: { above: above.length } });");
        await module("a/b/c.layout.ts", `export default (file: unknown, above: unknown[]) =>
            ({ sourceMd5: "${"0".repeat(32)}", output: "laid-out", attention: [String(above.length)] });`);
        const chain = await runChain(dir, layoutFileOf("a/b/c.md", "x"));
        expect(chain.problems).toEqual([]);
        expect(chain.folders.length).toBe(2);
        expect(chain.merged).toEqual({ output: "laid-out", page: { fontSize: 12, marginBlock: 20 }, data: { above: 1 }, attention: ["2"] });
        expect(chain.files).toEqual([".layout.ts", "a/.layout.ts", "a/b/.layout.ts", "a/b/c.layout.ts"]);
    });

    test("of a file must say its file's MD5 - and when the file changed since, the layout is still used, but obsolete", async () => {
        await module("c.layout.ts", "export default () => ({ output: \"plain\" });");
        expect((await layoutFor(dir, "c.md", TEXT, true)).problems[0].message).toContain("sourceMd5");
        await module("d.layout.ts", `export default () => ({ sourceMd5: "${MD5}", groups: [{ from: 2, to: 4, rowStarts: [4] }] });`);
        const fresh = await layoutFor(dir, "d.md", TEXT, true);
        expect(fresh.obsolete).toBe(false);
        expect(fresh.content).toContain(`${LINE_MARK}${ROW_MARK} **3**`);
        const changed = await layoutFor(dir, "d.md", `${TEXT}\n`, true);
        expect(changed.obsolete).toBe(true);
        expect(changed.content).toContain(`${LINE_MARK}${ROW_MARK} **3**`);
        expect(changed.layoutPaths).toContain("d.layout.ts");
    });

    test("goes wrong into a problem for the page, never an exception - and the rest of the chain still counts", async () => {
        await module(".layout.ts", 'export default () => { throw new Error("oops"); };');
        await module("c.layout.ts", `export default () => ({ sourceMd5: "${MD5}", output: "laid-out" });`);
        const laidOut = await layoutFor(dir, "c.md", TEXT, true);
        expect(laidOut.problems).toEqual([{ file: ".layout.ts", message: "it threw: oops" }]);
        expect(laidOut.resolved?.output).toBe("laid-out");
    });

    test("decides the output - reading the file only if it asks for more than its path - from a root given as the server gives it", async () => {
        await module(".layout.ts", 'export default (file: { path: string }) => file.path.startsWith("tech/") ? { output: "none" } : null;');
        expect(await outputOf(dir, "tech/never-written.md")).toBe("none");
        expect(await outputOf(dir, "other.md")).toBe("plain");
        expect(await outputOf(relative(process.cwd(), dir), "tech/x.md")).toBe("none");
        // A change to the module changes the answer.
        await module(".layout.ts", "export default () => null;");
        expect(await outputOf(dir, "tech/never-written.md")).toBe("plain");
    });

    test("a file may be published as a page alone, or only in a book that embeds it - and still be laid out", async () => {
        await module(".layout.ts", `export default (file: { path: string }) => file.path.startsWith("books/") ? null
            : { output: "laid-out", publish: file.path.startsWith("p/") ? "page-only" : "embedded-only" };`);
        expect(await publicationOf(dir, "books/b.md")).toEqual({ output: "plain", page: true, pdf: true });
        expect(await publicationOf(dir, "p/x.md")).toEqual({ output: "laid-out", page: true, pdf: false });
        expect(await publicationOf(dir, "t/translation.md")).toEqual({ output: "laid-out", page: false, pdf: false });
        expect(await outputOf(dir, "t/translation.md")).toBe("laid-out");
        await module(".layout.ts", 'export default () => ({ output: "none", publish: "page-and-pdf" });');
        expect(await publicationOf(dir, "x.md")).toEqual({ output: "none", page: false, pdf: false });
        await module(".layout.ts", 'export default () => ({ publish: "pdf" });');
        expect((await layoutFor(dir, "x.md", TEXT, true)).problems[0].message).toBe('"publish" must be one of page-and-pdf, page-only, embedded-only');
    });

    test("pdf is merged field by field, the nearer module the stronger", async () => {
        await module(".layout.ts", 'export default () => ({ pdf: { indexDepth: 1, footerTitle: "root" } });');
        await module("p.layout.ts", `export default () => ({ sourceMd5: "${MD5}", pdf: { indexDepth: 2 } });`);
        const { resolved } = await layoutFor(dir, "p.md", TEXT, true);
        expect(resolved!.pdf.indexDepth).toBe(2);
        expect(resolved!.pdf.footerTitle([{ level: 1, text: "x" }])).toBe("root");
    });

    describe("a book made of one whole file", () => {
        const TITLE = `({ chain, file }: { chain: { level: number, text: string }[], file: { path: string } }) =>
            chain.filter(h => h.level <= 2).map(h => h.level + h.text).join(" / ") + " @" + file.path`;
        const translation = async (pdf = `{ indexDepth: 2, footerTitle: ${TITLE} }`) => {
            await module("lib/title.ts", `export const title = ${TITLE};`);
            await module("t/translation.layout.ts", `import { title } from "../lib/title.ts";
                export default () => ({ sourceMd5: "${MD5}", page: { fontSize: 10 }, pdf: { ...${pdf}, footerTitle: title } });`);
            await writeFile(join(dir, "t/translation.md"), TEXT);
        };

        test("prints with that file's page and pdf - its footer asked with that file - and depends on its modules", async () => {
            await translation();
            const book = await layoutFor(dir, "books/b.md", '\n<כלול-בהדפסה מקור="../t/translation.md">\n', true);
            expect(book.problems).toEqual([]);
            expect(book.resolved!.page).toEqual({ fontSize: 10 });
            expect(book.resolved!.pdf.indexDepth).toBe(2);
            expect(book.resolved!.pdf.footerTitle([{ level: 1, text: "לוח" }, { level: 2, text: "סוף" }, { level: 3, text: "x" }]))
                .toBe("1לוח / 2סוף @t/translation.md");
            expect(book.layoutPaths).toContain("t/translation.layout.ts");
            expect(book.layoutPaths).toContain("lib/title.ts");
            // Embedded in another page, the file is that page's - nothing is taken from it.
            expect((await layoutFor(dir, "books/b.md", '<כלול-בהדפסה מקור="../t/translation.md">', false)).resolved).toBeNull();
        });

        test("whatever the book's own chain says wins - field by field", async () => {
            await translation();
            await module("books/.layout.ts", 'export default () => ({ page: { marginBlock: 30 }, pdf: { footerTitle: "ספר" } });');
            const { resolved } = await layoutFor(dir, "books/b.md", '<כלול-בהדפסה מקור="../t/translation.md">', true);
            expect(resolved!.page).toEqual({ fontSize: 10, marginBlock: 30 });
            expect(resolved!.pdf.indexDepth).toBe(2);
            expect(resolved!.pdf.footerTitle([{ level: 1, text: "לוח" }])).toBe("ספר");
        });

        test("shifts what it takes by the headings' shift, and asks the footer at its file's own levels", async () => {
            await translation();
            const { resolved } = await layoutFor(dir, "books/b.md", '<כלול-בהדפסה מקור="../t/translation.md" כותרות="+1">', true);
            expect(resolved!.pdf.indexDepth).toBe(3);
            expect(resolved!.pdf.footerTitle([{ level: 2, text: "לוח" }, { level: 3, text: "סוף" }, { level: 4, text: "x" }]))
                .toBe("1לוח / 2סוף @t/translation.md");
            await translation("{ indexDepth: 0 }");
            expect((await layoutFor(dir, "books/b.md", '<כלול-בהדפסה מקור="../t/translation.md" כותרות="+1">', true)).resolved!.pdf.indexDepth).toBe(0);
        });

        test("takes it through a book of a book, and a cycle ends", async () => {
            await translation();
            await writeFile(join(dir, "inner.md"), '<כלול-בהדפסה מקור="t/translation.md" כותרות="+1">');
            const { resolved, layoutPaths } = await layoutFor(dir, "outer.md", '<כלול-בהדפסה מקור="inner.md" כותרות="+1">', true);
            expect(resolved!.pdf.indexDepth).toBe(4);
            expect(resolved!.pdf.footerTitle([{ level: 3, text: "לוח" }])).toBe("1לוח @t/translation.md");
            expect(layoutPaths).toContain("inner.layout.ts");
            expect(layoutPaths).toContain("t/translation.layout.ts");
            await writeFile(join(dir, "a.md"), '<כלול-בהדפסה מקור="b.md">');
            await writeFile(join(dir, "b.md"), '<כלול-בהדפסה מקור="a.md">');
            expect((await layoutFor(dir, "a.md", '<כלול-בהדפסה מקור="b.md">', true)).resolved).toBeNull();
        });

        test("is only that: a book embedding a part of a file, or more than one, or with text of its own, takes nothing", async () => {
            await translation();
            for (const book of [
                '<כלול-בהדפסה מקור="../t/translation.md" מ="סוף">',
                '<כלול-בהדפסה מקור="../t/translation.md">\n<כלול-בהדפסה מקור="../t/translation.md">',
                '# ספר\n<כלול-בהדפסה מקור="../t/translation.md">',
                '<כלול-בהדפסה מקור="../t/missing.md">',
                '<כלול-בהדפסה מקור="/t/translation.md">',
            ]) {
                expect((await layoutFor(dir, "books/b.md", book, true)).resolved).toBeNull();
            }
        });

        test("does without a footer title that goes wrong for its file - which the page embedding that file says", async () => {
            await module("t/translation.layout.ts", `export default () => ({ sourceMd5: "${MD5}",
                pdf: { indexDepth: 1, footerTitle: ({ chain }: { chain: unknown[] }) => chain.length ? 5 : "" } });`);
            await writeFile(join(dir, "t/translation.md"), TEXT);
            const { resolved, problems } = await layoutFor(dir, "books/b.md", '<כלול-בהדפסה מקור="../t/translation.md">', true);
            expect(problems).toEqual([]);
            expect(resolved!.pdf.indexDepth).toBe(1);
            expect(resolved!.pdf.footerTitle([{ level: 1, text: "לוח" }])).toBe("לוח");
            expect((await layoutFor(dir, "t/translation.md", TEXT, false)).problems[0].message).toContain("not a string");
        });
    });

    test("an answer of the wrong shape is said what is wrong with", async () => {
        const problem = async (answer: string, own = true) => {
            await module(own ? "w.layout.ts" : "sub/.layout.ts", `export default () => (${answer});`);
            return (await runChain(dir, layoutFileOf(own ? "w.md" : "sub/w.md", TEXT))).problems[0]?.message;
        };
        expect(await problem(`{ sourceMd5: "${MD5}", rows: [] }`)).toContain("unknown entries: rows");
        expect(await problem(`{ sourceMd5: "${MD5}", page: { fontSize: -1 } }`)).toContain("positive number");
        expect(await problem(`{ sourceMd5: "${MD5}", output: "some" }`)).toContain('"output"');
        expect(await problem(`{ sourceMd5: "${MD5}", groups: [{ from: 3, to: 2, rowStarts: "auto" }] }`)).toContain('"from" .. "to"');
        expect(await problem(`{ sourceMd5: "${MD5}", groups: [{ from: 2, to: 3, rowStarts: [9] }] }`)).toContain("rowStarts");
        expect(await problem(`{ sourceMd5: "${MD5}", groups: [{ from: 2, to: 3, rowStarts: "auto", margins: [1] }] }`)).toContain("margins");
        expect(await problem(`{ sourceMd5: "${MD5}", data: { f: () => 1 } }`)).toContain("plain data");
        expect(await problem(`{ sourceMd5: "${MD5}", pdf: { depth: 2 } }`)).toContain('unknown entry "pdf.depth"');
        expect(await problem(`{ sourceMd5: "${MD5}", pdf: { indexDepth: 7 } }`)).toContain("0 to 6");
        expect(await problem(`{ sourceMd5: "${MD5}", pdf: { indexDepth: 1.5 } }`)).toContain("0 to 6");
        expect(await problem(`{ sourceMd5: "${MD5}", pdf: { footerTitle: 3 } }`)).toContain("a string, or a function");
        expect(await problem("null")).toContain("cannot be null");
        expect(await problem(`{ sourceMd5: "${MD5}" }`, false)).toContain("unknown entries: sourceMd5");
        expect(await problem("null", false)).toBeUndefined();
    });
});

describe("what a module is told", () => {
    test("the file's lines, paragraphs as the renderer sees them, headings and direction", () => {
        const file = layoutFileOf("a/x.rtl.md", "# כותרת\n\nשורה\nשורה\n\n- פריט\n\n```\n# לא כותרת\n```");
        expect(file.name).toBe("x.rtl.md");
        expect(file.lines.length).toBe(10);
        expect(file.paragraphs).toEqual([{ from: 2, to: 3 }, { from: 5, to: 5 }]);
        expect(file.headings.map(heading => [heading.level, heading.text, heading.index])).toEqual([[1, "כותרת", 0]]);
        expect(file.rtl).toBe(true);
        expect(layoutFileOf("b.md", "English").rtl).toBe(false);
    });

    test("widths on paper, at the page's settings", () => {
        const file = layoutFileOf("x.rtl.md", "");
        const m = file.measure();
        expect(m.text("שלום")).toBeCloseTo(textWidthEm("שלום") * 11.5 * 96 / 72, 5);
        expect(file.measure({ fontSize: 23 }).text("שלום") / m.text("שלום")).toBeCloseTo(2, 5);
        expect(m.row(["12"])).toBeGreaterThan(m.row(["12 II 712x7"]));
        expect(m.row([])).toBeLessThan((210 - 32) * 96 / 25.4);
        expect(file.measure({ marginInline: 10 }).row([])).toBeGreaterThan(m.row([]));
    });

    test("a helper to build on what a module above gave, whichever form it has", () => {
        const { resolve } = layoutFileOf("x.md", "").helpers;
        expect(resolve(true, null)).toBe(true);
        expect(resolve((n: number) => n > 1, 2)).toBe(true);
    });
});

describe("a layout in the text", () => {
    test("groups wherever the file is printed - their lines marked, their margin notes cut off; page breaks on its own page only", () => {
        const layout: ResolvedLayout = {
            ...nothing,
            groups: [{ from: 2, to: 4, rowStarts: [4], margins: [5, 5, 5] }],
            pageBreaks: new Map([[0, false], [6, true]]),
        };
        const own = applyLayout(TEXT, layout, true).split("\n");
        expect(own[2]).toBe(`${GROUP_MARK} **1** ${MARGIN_MARK} אחת,`);
        expect(own[3]).toBe(`${LINE_MARK} **2** ${MARGIN_MARK} שתיים.`);
        expect(own[4]).toBe(`${LINE_MARK}${ROW_MARK} **3** ${MARGIN_MARK} שלוש,`);
        expect(own[0]).toBe(`# ${NO_PAGE_BREAK_MARK}לוח`);
        expect(own[6]).toBe(`## ${PAGE_BREAK_MARK}סוף`);
        const embedded = applyLayout(TEXT, layout, false);
        expect(embedded).toContain(GROUP_MARK);
        expect(embedded).not.toContain(PAGE_BREAK_MARK);
    });

    test("a heading's mark becomes its class, and no mark reaches the page", () => {
        const html = markdownToHtml(`# ${PAGE_BREAK_MARK}א\n\n## ${NO_PAGE_BREAK_MARK}ב\n\nג${PAGE_BREAK_MARK}`);
        expect(html).toContain('<h1 class="page-break-before" id="א">א</h1>');
        expect(html).toContain('<h2 class="no-page-break-before" id="ב">ב</h2>');
        expect(html).not.toMatch(/[-]/);
    });

    test("a page loads its fonts as told, and sets the print as its layout does", () => {
        const page = renderMarkdownPage("שלום", "x.rtl.md", { fonts: "../_fonts", page: { fontSize: 10, marginInline: 20 } });
        expect(page).toContain(`font-family: 'Perush David'; src: url("../_fonts/DavidCLM-Bold.otf")`);
        expect(page).toContain(`font-family: 'Perush Serif'; src: url("../_fonts/FreeSerifBold.otf")`);
        expect(page).toContain("html.measuring-print main { width: calc(210mm - 40mm); }");
        expect(page).toContain("@page { margin: 18mm 20mm; }");
        expect(renderMarkdownPage("שלום", "x.rtl.md", { fonts: "embed" })).toContain("data:font/otf;base64,");
        expect(renderMarkdownPage("hello", "x.md", { fonts: "../_fonts" })).not.toContain("@font-face");
    });

    test("pdf: every heading, and the outermost heading as the footer's title - unless the layout says otherwise", async () => {
        const chain = await runChain("/nowhere", layoutFileOf("c.md", TEXT));
        const resolved = (entries: object) => resolveLayout({ ...chain, merged: entries, answered: true });
        const plain = resolved({}) as ResolvedLayout;
        expect(plain.pdf.indexDepth).toBe(6);
        expect(plain.pdf.footerTitle([{ level: 1, text: "ספר" }, { level: 2, text: "פרק" }])).toBe("ספר");
        expect(plain.pdf.footerTitle([])).toBe("");
        const joined = resolved({ pdf: { footerTitle: ({ chain }: { chain: { text: string }[] }) => chain.map(h => h.text).join(" / ") } });
        expect((joined as ResolvedLayout).pdf.footerTitle([{ level: 1, text: "ספר" }, { level: 2, text: "פרק" }])).toBe("ספר / פרק");
    });

    test("a footerTitle that throws, or answers no string, is caught at once - asked of every chain of the file's headings", async () => {
        const chain = await runChain("/nowhere", layoutFileOf("c.md", TEXT));
        const resolved = (footerTitle: unknown) => resolveLayout({ ...chain, merged: { pdf: { footerTitle } } as object, answered: true });
        const asked: string[][] = [];
        resolved(({ chain }: { chain: { text: string }[] }) => (asked.push(chain.map(h => h.text)), ""));
        expect(asked).toEqual([[], ["לוח"], ["לוח", "סוף"]]);
        expect((resolved(({ chain }: { chain: unknown[] }) => chain.length > 1 ? 7 : "") as { error: string }).error)
            .toContain('"pdf.footerTitle" returned 7 at ["לוח","סוף"] - not a string');
        expect((resolved(() => { throw new Error("oops"); }) as { error: string }).error).toContain("threw at []: oops");
    });

    test("pageBreakBefore is resolved per heading, and its answer checked", async () => {
        const chain = await runChain("/nowhere", layoutFileOf("c.md", TEXT));
        const resolved = (entries: object) => resolveLayout({ ...chain, merged: entries, answered: true });
        expect([...(resolved({ pageBreakBefore: ({ position }: { position: number }) => position === 0 ? null : true }) as ResolvedLayout).pageBreaks])
            .toEqual([[6, true]]);
        expect((resolved({ pageBreakBefore: () => "yes" }) as { error: string }).error).toContain("not a boolean");
    });
});

describe("measuring text", () => {
    test("vowel points take no width; bold is wider; whitespace collapses as a browser's does", () => {
        expect(textWidthEm("שָׁלוֹם")).toBeCloseTo(textWidthEm("שלום"), 5);
        expect(markdownWidthEm("**שלום**")).toBeGreaterThan(markdownWidthEm("שלום"));
        expect(markdownWidthEm("  שלום   עולם  ")).toBeCloseTo(markdownWidthEm("שלום עולם"), 5);
        expect(markdownWidthEm("*a* b")).toBeCloseTo(textWidthEm("a", "italic") + textWidthEm(" b"), 5);
    });

    test("a character David lacks is taken from FreeSerif, as the browser does", () => {
        expect(textWidthEm("š")).toBeGreaterThan(0.3);
        expect(textWidthEm("š")).toBeLessThan(0.6);
        expect(textWidthEm("⟨", "bold")).toBeGreaterThan(0.2);
    });

    test("a footnote reference is the box it is on paper, whatever its label - a wider one for a note referred to again", () => {
        const box = FOOTNOTE_REF_EM.first * FOOTNOTE_REF_SCALE;
        expect(markdownWidthEm("למים,[^RV1.32-1]")).toBeCloseTo(markdownWidthEm("למים,") + box, 5);
        expect(markdownWidthEm("למים,[^1]")).toBeCloseTo(markdownWidthEm("למים,[^RV1.32-1]"), 5);
        expect(markdownWidthEm("למים,[^1]", new Set(["1"]))).toBeCloseTo(markdownWidthEm("למים,") + FOOTNOTE_REF_EM.again * FOOTNOTE_REF_SCALE, 5);
        // Narrower than the label it stands for, so a line with a reference only ever gets narrower.
        expect(box).toBeLessThan(textWidthEm("[^1]"));
    });

    test("a file's measure knows the notes it refers to more than once - not counting a reference in a comment it drops", () => {
        const text = "<!--\n[^a] in a comment\n-->\n\n**1** א[^a]\n**2** ב[^b] ושוב[^b]\n\n[^a]: א\n[^b]: ב";
        const measure = layoutFileOf("x.rtl.md", text).measure();
        expect(measure.text("א[^b]")).toBeGreaterThan(measure.text("א[^a]"));
    });

    test("the page's geometry: a separator, a gap, a safety margin", () => {
        const m = measureAt();
        expect(m.separator).toBeGreaterThan(1);
        expect(m.gap).toBeGreaterThan(3);
        expect(m.safety).toBe(1);
    });
});

// The contract used as a module uses it - so that it is type-checked along with the tests.
const typed: LayoutOfFile = (file, above) => ({ sourceMd5: MD5, groups: above.length ? [] : [{ from: 0, to: 1, rowStarts: "auto" }] });
void typed;
