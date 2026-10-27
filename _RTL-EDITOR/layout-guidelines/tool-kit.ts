// What a layout tool needs from the editor, whatever it lays out: the tree's files, a page made exactly as the
// mirror makes it, that page measured in Chromium, printed to a PDF, and a layout module type-checked.
//
// Here because it is generic - it knows line groups (layout-schema.ts), not what is in them - and because the
// packages it uses (playwright, pdf-lib, typescript) are the editor's: a tool elsewhere in the repository - the
// translations' layout/rows-tool.ts - imports this, and the packages are found from here.

import { chromium, type Browser } from "playwright";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, relative } from "path";
import { spawnSync } from "child_process";
import { PDFDocument } from "pdf-lib";
import { renderMarkdownPage } from "../src/html/md-to-html";
import { applyLayout, DEFAULT_PDF_SETTINGS, type ResolvedLayout, type ResolvedPdfSettings } from "../src/html/layout-module";
import { printPages } from "../src/html/pdf-pages";
import type { LineGroup, PageSettings } from "../src/html/layout-schema";
import { REPO_ROOT } from "./tree";

export { markdownFiles, REPO_ROOT } from "./tree";
export { layoutFileOf, layoutFor, layoutPathFor, md5Of, outputOf, type PageLayout } from "../src/html/layout-module";
export { ROW_SAFETY_PX } from "../src/html/text-measure";

/** A file's text, `\n`-separated. */
export function readSource(mdFile: string): string {
    return readFileSync(mdFile, "utf-8").replace(/\r\n?/g, "\n");
}

/**
 * The page of `mdFile` (absolute) as the mirror would make it, with these groups and settings - its fonts
 * embedded, as it has no folder around it; with `sourceLines`, every grouped line says which line it is.
 */
export function pageHtml(mdFile: string, content: string, groups: readonly LineGroup[], page: PageSettings | null,
                         options: { sourceLines?: boolean, pageBreaks?: Map<number, boolean>, pdf?: ResolvedPdfSettings } = {}): string {
    const pdf = options.pdf ?? DEFAULT_PDF_SETTINGS;
    const resolved: ResolvedLayout = {
        output: "plain", page, pdf, groups, pageBreaks: options.pageBreaks ?? new Map(), attention: [], data: {}, sourceMd5: null,
    };
    return renderMarkdownPage(applyLayout(content, resolved, true), relative(REPO_ROOT, mdFile),
        { sourceLines: options.sourceLines, fonts: "embed", page: page ?? undefined, pdf });
}

let browser: Browser | null = null;

export async function closeBrowser(): Promise<void> {
    await browser?.close();
    browser = null;
}

/** A group of the page as Chromium lays it out on paper. */
export type MeasuredGroup = {
    /** What one of its rows holds, in pixels. */
    column: number;
    /** The space Chromium leaves between two lines of a row. */
    gap: number;
    /** Its lines: which source line, how wide (alone, unwrapped - its separator included), the text after its margin note. */
    lines: { sourceLine: number, width: number, text: string, rowStart: boolean }[];
    /** The rows that wrap on paper - by the source line of their first line. */
    wrapped: number[];
};

/** Every group of a page (made with `sourceLines`), measured at the printed width - as the PDF printer lays it out. */
export async function measureGroups(html: string): Promise<MeasuredGroup[]> {
    browser ??= await chromium.launch();
    const tab = await browser.newPage();
    try {
        await tab.setContent(html, { waitUntil: "load" });
        return await tab.evaluate(async () => {
            await document.fonts.ready;
            // The script lays the page out for paper on beforeprint, and leaves its marks behind.
            window.dispatchEvent(new Event("beforeprint"));
            const root = document.documentElement;
            root.classList.add("measuring-print");
            const result = [...document.querySelectorAll<HTMLElement>(".line-group")].map(group => {
                const rows = [...group.querySelectorAll<HTMLElement>(":scope > .line-row")];
                const column = rows[0].getBoundingClientRect().width;
                const gaps: number[] = [];
                const lines = rows.flatMap(row => {
                    const elements = [...row.querySelectorAll<HTMLElement>(":scope > .grouped-line")];
                    // Between two lines on one row: the space the browser left.
                    elements.forEach((element, i) => {
                        if (i === 0) return;
                        const a = elements[i - 1].getBoundingClientRect(), b = element.getBoundingClientRect();
                        if (Math.abs(a.top - b.top) < 1) gaps.push(Math.max(a.left - b.right, b.left - a.right));
                    });
                    return elements.map((element, i) => {
                        element.style.whiteSpace = "nowrap";
                        element.style.maxWidth = "none";
                        const width = element.getBoundingClientRect().width;
                        element.style.whiteSpace = element.style.maxWidth = "";
                        const note = element.querySelector(".line-margin")?.textContent ?? "";
                        return { sourceLine: Number(element.dataset.sourceLine), width, text: element.textContent!.slice(note.length).trim(), rowStart: i === 0 };
                    });
                });
                const wrapped = rows.filter(row => row.querySelectorAll(":scope > .grouped-line.row-start").length > 1)
                    .map(row => Number((row.querySelector(".grouped-line") as HTMLElement).dataset.sourceLine));
                gaps.sort((a, b) => a - b);
                return { column, gap: gaps.length ? gaps[gaps.length >> 1] : 4, lines, wrapped };
            });
            root.classList.remove("measuring-print");
            return result;
        });
    } finally {
        await tab.close();
    }
}

/** Prints a page to `<out>/preview.pdf` as the PDF mirror would - page numbers, footers and all, and these of its pages to PNGs (pdftoppm). */
export async function printPreview(html: string, pages: number[] | null, out: string): Promise<{ pdf: string, pageCount: number, pngs: string[] }> {
    browser ??= await chromium.launch();
    mkdirSync(out, { recursive: true });
    const pdf = join(out, "preview.pdf");
    const tab = await browser.newPage();
    try {
        await tab.setContent(html, { waitUntil: "load" });
        await tab.evaluate(async () => {
            await document.fonts.ready;
            window.dispatchEvent(new Event("beforeprint"));
        });
        // With the index's page numbers and the footers, as the mirror prints it.
        writeFileSync(pdf, (await printPages(tab)).pdf);
    } finally {
        await tab.close();
    }
    const pageCount = (await PDFDocument.load(readFileSync(pdf))).getPageCount();
    const wanted = (pages ?? [1, 2, 3]).filter(page => page >= 1 && page <= pageCount);
    const pngs: string[] = [];
    for (const page of wanted) {
        const name = join(out, `page-${String(page).padStart(3, "0")}`);
        const png = spawnSync("pdftoppm", ["-r", "80", "-f", String(page), "-l", String(page), "-singlefile", "-png", pdf, name]);
        if (png.error) throw new Error("pdftoppm is not installed - no PNGs (brew install poppler)");
        if (png.status !== 0) throw new Error(`pdftoppm failed on page ${page}: ${png.stderr}`);
        pngs.push(`${name}.png`);
    }
    return { pdf, pageCount, pngs };
}

/** What tsc says of a layout module - nothing when it type-checks. */
export function typeErrors(modulePath: string): string {
    const editor = join(import.meta.dir, "..");
    const result = spawnSync(join(editor, "node_modules/.bin/tsc"), ["--noEmit", "--strict", "--target", "es2022", "--lib", "es2022",
        "--module", "esnext", "--moduleResolution", "bundler", "--skipLibCheck", "--types", "bun-types", modulePath], { cwd: editor, encoding: "utf-8" });
    if (result.error) return `tsc did not run: ${result.error.message}`;
    return result.status === 0 ? "" : (result.stdout + result.stderr).trim();
}
