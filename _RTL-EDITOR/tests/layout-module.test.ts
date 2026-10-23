import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, utimes, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { dirname, join, relative } from "path";
import {
    applyLayout, folderLayoutPathsFor, isFolderLayoutFile, isLayoutFile, layoutChainFor, layoutFileOf, layoutFor,
    layoutPathFor, loadLayoutModule, md5Of, outputOf, resolveLayout, runChain, type LayoutChain, type ResolvedLayout,
} from "../src/html/layout-module";
import type { LayoutEntries, LayoutOfFile } from "../src/html/layout-schema";
import { markdownWidthEm, runGeometry, textWidthEm } from "../src/html/text-measure";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html";
import { NO_PAGE_BREAK_MARK, PAGE_BREAK_MARK, ROW_MARK } from "../src/html/layout-marks";
import { isIgnoredWatchPath } from "../src/fs-changes";

const TEXT = "# לוח\n\n**1** אחת,\n**2** שתיים.\n**3** שלוש,\n**4** ארבע.\n\n## סוף\n\n**10** עשר\n**11** אחת עשרה";
const MD5 = md5Of(TEXT);
const file = () => layoutFileOf("a/translation.rtl.md", TEXT);

/** A chain whose merged answer is `entries` - as if the file's own module had given them. */
const chainOf = (entries: LayoutEntries): LayoutChain =>
    ({ file: file(), folders: [], own: { sourceMd5: MD5, ...entries }, merged: entries, answered: true, problems: [] });
const resolved = (entries: LayoutEntries) => resolveLayout(chainOf(entries)) as ResolvedLayout;

describe("the layout modules of a file", () => {
    test("are every folder's .layout.ts above it, the root's first, then its own <name>.layout.ts", () => {
        expect(layoutPathFor("a/b/translation.rtl.md")).toBe("a/b/translation.rtl.layout.ts");
        expect(folderLayoutPathsFor("a/b/c.md")).toEqual([".layout.ts", "a/.layout.ts", "a/b/.layout.ts"]);
        expect(layoutChainFor("c.md")).toEqual([".layout.ts", "c.layout.ts"]);
        expect(isLayoutFile("a/c.layout.ts") && isLayoutFile("a/.layout.ts")).toBe(true);
        expect(isFolderLayoutFile("a/.layout.ts")).toBe(true);
        expect(isFolderLayoutFile("a/c.layout.ts")).toBe(false);
    });

    test("are watched, though they are no Markdown", () => {
        expect(isIgnoredWatchPath("a/c.layout.ts", new Set())).toBe(false);
        expect(isIgnoredWatchPath("a/.layout.ts", new Set())).toBe(false);
        expect(isIgnoredWatchPath("a/other.ts", new Set())).toBe(true);
    });
});

describe("a layout module", () => {
    let dir: string;
    beforeEach(async () => { dir = await mkdtemp(join(tmpdir(), "layout-module-")); });
    afterEach(async () => { await rm(dir, { recursive: true, force: true }); });
    const module = async (path: string, source: string) => {
        await mkdir(dirname(join(dir, path)), { recursive: true });
        await writeFile(join(dir, path), source);
        return join(dir, path);
    };

    test("may import types, and nothing that runs", async () => {
        const typed = await module("t.layout.ts", 'import type { LayoutOfFile } from "./nowhere";\nconst l: LayoutOfFile = () => ({ sourceMd5: "" });\nexport default l;');
        expect(await loadLayoutModule(typed)).toHaveProperty("layout");
        const importing = await module("i.layout.ts", 'import { x } from "./x";\nexport default () => x;');
        expect((await loadLayoutModule(importing) as { error: string }).error).toContain("import types only");
    });

    test("must export a function, and load", async () => {
        expect((await loadLayoutModule(await module("f.layout.ts", "export default 5;")) as { error: string }).error).toContain("must be a function");
        expect(await loadLayoutModule(await module("s.layout.ts", "export default ( =>;"))).toHaveProperty("error");
        expect(await loadLayoutModule(join(dir, "none.ts"))).toBeNull();
    });

    test("is loaded afresh once it changes", async () => {
        const path = await module("x.layout.ts", "export default () => ({ rowStart: true });");
        const first = await loadLayoutModule(path) as { layout: () => unknown };
        await writeFile(path, "export default () => ({ rowStart: false });");
        await utimes(path, new Date(), new Date(Date.now() + 5000));
        const second = await loadLayoutModule(path) as { layout: () => unknown };
        expect(second.layout()).toEqual({ rowStart: false });
        expect(first.layout()).toEqual({ rowStart: true });
    });

    test("is told what the folders above it said, and the nearer one wins - `page` field by field", async () => {
        await module(".layout.ts", 'export default () => ({ output: "plain", page: { fontSize: 10, marginBlock: 20 } });');
        await module("a/.layout.ts", "export default () => null;");
        await module("a/b/.layout.ts", "export default (file: unknown, above: unknown[]) => ({ page: { fontSize: 12 }, rowStart: above.length === 1 });");
        await module("a/b/c.layout.ts", `export default (file: unknown, above: unknown[]) =>
            ({ sourceMd5: "${"0".repeat(32)}", output: "laid-out", review: [String(above.length)] });`);
        const chain = await runChain(dir, layoutFileOf("a/b/c.md", "x"));
        expect(chain.problems).toEqual([]);
        expect(chain.folders.length).toBe(2);
        expect(chain.merged).toEqual({ output: "laid-out", page: { fontSize: 12, marginBlock: 20 }, rowStart: true });
        expect(chain.own?.review).toEqual(["2"]);
    });

    test("of a file must say its file's MD5 - and when the file changed since, the layout is still used, but obsolete", async () => {
        await module("c.layout.ts", "export default () => ({ rowStart: true });");
        expect((await layoutFor(dir, "c.md", TEXT, true)).problems[0].message).toContain("sourceMd5");
        await module("d.layout.ts", `export default () => ({ sourceMd5: "${MD5}", rowStart: ["1", "3"] });`);
        const fresh = await layoutFor(dir, "d.md", TEXT, true);
        expect(fresh.obsolete).toBe(false);
        expect(fresh.content).toContain(`${ROW_MARK}**3**`);
        const changed = await layoutFor(dir, "d.md", `${TEXT}\n`, true);
        expect(changed.obsolete).toBe(true);
        expect(changed.content).toContain(`${ROW_MARK}**3**`);
    });

    test("goes wrong into a problem for the page, never an exception - and the rest of the chain still counts", async () => {
        await module(".layout.ts", 'export default () => { throw new Error("oops"); };');
        await module("c.layout.ts", `export default () => ({ sourceMd5: "${MD5}", rowStart: true });`);
        const laidOut = await layoutFor(dir, "c.md", TEXT, true);
        expect(laidOut.problems).toEqual([{ file: ".layout.ts", message: "it threw: oops" }]);
        expect(laidOut.resolved?.rowStarts).toEqual(["1", "2", "3", "4", "10", "11"]);
    });

    test("is found from a root given relative to the current folder - as the server gives \"..\"", async () => {
        await module(".layout.ts", 'export default () => ({ output: "none" });');
        expect(await outputOf(relative(process.cwd(), dir), "c.md")).toBe("none");
    });

    test("decides the output - reading the file only if it asks for more than its path", async () => {
        await module(".layout.ts", 'export default (file: { path: string }) => file.path.startsWith("tech/") ? { output: "none" } : null;');
        expect(await outputOf(dir, "tech/never-written.md")).toBe("none");
        expect(await outputOf(dir, "other.md")).toBe("plain");
    });
});

describe("what a module is told", () => {
    test("the numbered lines, their runs, and the headings", () => {
        const f = file();
        expect(f.name).toBe("translation.rtl.md");
        expect(f.lines.map(line => line.key)).toEqual(["1", "2", "3", "4", "10", "11"]);
        expect(f.lines[0].text).toBe("אחת,");
        expect(f.runs.map(run => run.map(line => line.key))).toEqual([["1", "2", "3", "4"], ["10", "11"]]);
        expect(f.headings.map(heading => [heading.level, heading.text])).toEqual([[1, "לוח"], [2, "סוף"]]);
    });

    test("a helper to build on what a module above gave, whichever form it has", () => {
        const { resolve } = file().helpers;
        expect(resolve(true, null)).toBe(true);
        expect(resolve((n: number) => n > 1, 2)).toBe(true);
    });
});

describe("resolving a layout", () => {
    test("a list of row starts is taken as it is", () => {
        expect(resolved({ rowStart: ["1", "3"] }).rowStarts).toEqual(["1", "3"]);
    });

    test("a boolean is one answer for every line: a row each, or one row per run", () => {
        expect(resolved({ rowStart: true }).rowStarts).toEqual(["1", "2", "3", "4", "10", "11"]);
        expect(resolved({ rowStart: false }).rowStarts).toEqual(["1", "10"]);
    });

    test("a function is asked about every line but a run's first, with the row so far", () => {
        const asked: string[] = [];
        const layout = resolved({
            rowStart: ({ line, previous, row }) => {
                asked.push(`${previous.key}>${line.key}:${row.lines.length}`);
                return previous.text.endsWith(".");
            },
        });
        expect(layout.rowStarts).toEqual(["1", "3", "10"]);
        expect(asked).toEqual(["1>2:1", "2>3:2", "3>4:1", "10>11:1"]);
    });

    test("widths are percentages of the row, and a row knows what still fits", () => {
        const widths: number[] = [];
        resolved({
            rowStart: ({ line, row, measure }) => {
                widths.push(measure.line(line));
                expect(row.fits(line)).toBe(row.width + measure.gap + measure.line(line) <= measure.room);
                return !row.fits(line);
            },
        });
        for (const width of widths) expect(width).toBeGreaterThan(1);
        for (const width of widths) expect(width).toBeLessThan(30);
        // A bigger font gives wider lines.
        const big: number[] = [];
        resolved({ page: { fontSize: 23 }, rowStart: ({ line, measure }) => { big.push(measure.line(line)); return false; } });
        expect(big[0] / widths[0]).toBeGreaterThan(1.8);
    });

    test("which headings start a sheet", () => {
        expect([...resolved({ pageBreakBefore: ({ heading, position }) => position === 0 ? null : heading.level === 2 }).pageBreaks])
            .toEqual([[7, true]]);
        expect([...resolved({ pageBreakBefore: false }).pageBreaks]).toEqual([[0, false], [7, false]]);
    });

    test("a function that throws or answers wrong is said where", () => {
        const error = (entries: unknown) => (resolveLayout(chainOf(entries as LayoutEntries)) as { error: string }).error;
        expect(error({ rowStart: () => "yes" })).toContain("at line 2");
        expect(error({ rowStart: ({ line }: { line: { key: string } }) => { if (line.key === "3") throw new Error("no"); return false; } }))
            .toBe('"rowStart" threw at line 3: no');
    });
});

describe("an answer of the wrong shape", () => {
    let dir: string;
    beforeEach(async () => { dir = await mkdtemp(join(tmpdir(), "layout-shape-")); });
    afterEach(async () => { await rm(dir, { recursive: true, force: true }); });
    let version = 0;
    const problem = async (answer: string, own = true) => {
        const path = join(dir, own ? "c.layout.ts" : ".layout.ts");
        await writeFile(path, `export default () => (${answer});`);
        await utimes(path, new Date(), new Date(Date.now() + 1000 * ++version));
        return (await runChain(dir, layoutFileOf("c.md", TEXT))).problems[0]?.message;
    };

    test("is said what is wrong with", async () => {
        expect(await problem(`{ sourceMd5: "${MD5}", rowStarts: [] }`)).toContain("unknown entries: rowStarts");
        expect(await problem(`{ sourceMd5: "${MD5}", page: { fontSize: -1 } }`)).toContain("positive number");
        expect(await problem(`{ sourceMd5: "${MD5}", output: "some" }`)).toContain('"output"');
        expect(await problem("null")).toContain("cannot be null");
        await rm(join(dir, "c.layout.ts"));
        expect(await problem(`{ sourceMd5: "${MD5}", review: [] }`, false)).toContain("unknown entries: sourceMd5, review");
        expect(await problem("null", false)).toBeUndefined();
    });
});

describe("a layout in the text", () => {
    test("rows everywhere, page breaks on the file's own page only", () => {
        const layout = resolved({ rowStart: ["1", "3"], pageBreakBefore: ({ heading }) => heading.level === 2 });
        const own = applyLayout(TEXT, layout, true).content.split("\n");
        expect(own[2]).toBe(`${ROW_MARK}**1** אחת,`);
        expect(own[3]).toBe("**2** שתיים.");
        expect(own[4]).toBe(`${ROW_MARK}**3** שלוש,`);
        expect(own[0]).toBe(`# ${NO_PAGE_BREAK_MARK}לוח`);
        expect(own[7]).toBe(`## ${PAGE_BREAK_MARK}סוף`);
        const embedded = applyLayout(TEXT, layout, false).content;
        expect(embedded).toContain(`${ROW_MARK}**3**`);
        expect(embedded).not.toContain(PAGE_BREAK_MARK);
    });

    test("a heading's mark becomes its class, and no mark reaches the page", () => {
        const html = markdownToHtml(`# ${PAGE_BREAK_MARK}א\n\n## ${NO_PAGE_BREAK_MARK}ב\n\nג${PAGE_BREAK_MARK}`);
        expect(html).toContain('<h1 class="page-break-before" id="א">א</h1>');
        expect(html).toContain('<h2 class="no-page-break-before" id="ב">ב</h2>');
        expect(html).not.toMatch(/[-]/);
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

    test("a row is the column less the numbers' margin", () => {
        const narrow = runGeometry(11.5, 16, 2), wide = runGeometry(11.5, 16, 10);
        expect(narrow.row).toBeGreaterThan(wide.row);
        expect(narrow.row).toBeLessThan((210 - 32) * 96 / 25.4);
    });
});

// The contract used as a module uses it - so that it is type-checked along with the tests.
const typed: LayoutOfFile = (file, above) => ({ sourceMd5: MD5, rowStart: above.length ? true : ["1"] });
void typed;
