import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, utimes, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { dirname, join, relative } from "path";
import {
    applyLayout, folderLayoutPathsFor, isFolderLayoutFile, isLayoutFile, layoutChainFor, layoutFileOf, layoutFor,
    layoutPathFor, loadLayoutModule, md5Of, outputOf, resolveLayout, runChain, type ResolvedLayout,
} from "../src/html/layout-module";
import type { LayoutOfFile } from "../src/html/layout-schema";
import { markdownWidthEm, measureAt, textWidthEm } from "../src/html/text-measure";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK, NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK, ROW_MARK } from "../src/html/layout-marks";
import { isIgnoredWatchPath } from "../src/fs-changes";

const TEXT = "# לוח\n\n**1** אחת,\n**2** שתיים.\n**3** שלוש,\n\n## סוף";
const MD5 = md5Of(TEXT);
const nothing: ResolvedLayout = { output: "plain", page: null, groups: [], pageBreaks: new Map(), attention: [], data: {}, sourceMd5: null };

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

    test("may import files of the repository by a relative path - bundled with them - and types from anywhere", async () => {
        await module("lib/logic.ts", "export const answer = () => ({ output: \"none\" });");
        const path = await module("a/.layout.ts", 'import type { X } from "nowhere";\nimport { answer } from "../lib/logic";\nexport default answer;');
        const loaded = await loadLayoutModule(path) as { layout: () => unknown, files: string[] };
        expect(loaded.layout()).toEqual({ output: "none" });
        expect(loaded.files.map(file => relative(dir, file))).toEqual(["a/.layout.ts", "lib/logic.ts"]);
    });

    test("may import a file whose path is Hebrew", async () => {
        await module("שונות/לוגיקה.ts", "export const answer = () => ({ output: \"none\" });");
        const path = await module("a/.layout.ts", 'import { answer } from "../שונות/לוגיקה";\nexport default answer;');
        expect((await loadLayoutModule(path) as { layout: () => unknown }).layout()).toEqual({ output: "none" });
    });

    test("may not import a package, nor a file that is not there", async () => {
        expect(await failure(await module("p.layout.ts", 'import { x } from "fontkit";\nexport default () => x;'))).toContain('not "fontkit"');
        expect(await failure(await module("m.layout.ts", 'import { x } from "./missing";\nexport default () => x;'))).toContain("which is no file");
    });

    test("must export a function, and load", async () => {
        expect(await failure(await module("f.layout.ts", "export default 5;"))).toContain("must be a function");
        expect(await loadLayoutModule(await module("s.layout.ts", "export default ( =>;"))).toHaveProperty("error");
        expect(await loadLayoutModule(join(dir, "none.ts"))).toBeNull();
    });

    test("is loaded afresh once it changes - or anything it imports does", async () => {
        await module("lib/v.ts", "export const v = 1;");
        const path = await module("x.layout.ts", 'import { v } from "./lib/v";\nexport default () => ({ data: { v } });');
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
