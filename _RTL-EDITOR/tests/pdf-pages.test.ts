import { afterAll, describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { chromium, type Browser } from "playwright";
import { renderMarkdownPage, type RenderOptions } from "../src/html/md-to-html";
import { printPages } from "../src/html/pdf-pages";

// A sheet of A4 at the mirror's margins holds 297mm - 2 * 18mm of content.
const FULL_SHEET = "calc(297mm - 36mm - 1px)";
const fill = (height: string, breaks = false) =>
    `\`\`\`html\n<div style="height: ${height};${breaks ? " break-before: page;" : ""}"></div>\n\`\`\``;

// Sheet 1: # Book, its index, ## A - whose filler runs on into sheet 2, where ## B starts mid-sheet.
// Sheet 3: a filler of a whole sheet, under B; so ## C lands at the top of sheet 4, by a break of the browser's.
// Sheet 5: # Two, which breaks the sheet itself (every # does), and ## D under it.
const DOCUMENT = [
    "# Book", "## A", fill("1500px"), "## B", "text", fill(FULL_SHEET, true), "## C", "text", "# Two", "## D", "text",
].join("\n\n");

let browser: Browser | null = null;
afterAll(async () => { await browser?.close(); });

async function print(options: RenderOptions) {
    browser ??= await chromium.launch();
    const tab = await browser.newPage();
    try {
        await tab.setContent(renderMarkdownPage(DOCUMENT, "book.md", options), { waitUntil: "load" });
        return await printPages(tab);
    } finally {
        await tab.close();
    }
}

const joined = { indexDepth: 6, footerTitle: (chain: readonly { text: string }[]) => chain.map(h => h.text).join(" / ") };

describe("printPages", () => {
    test("every sheet's footer is titled by the headings in force at its top - one standing at the very top included", async () => {
        const { titles } = await print({ pdf: joined });
        expect(titles).toEqual(["Book", "Book / A", "Book / B", "Book / C", "Two"]);
    });

    test("the index gets the sheet of every heading, and the footers reach the PDF - title and number", async () => {
        const { pdf, indexNumbers } = await print({ pdf: joined });
        expect(indexNumbers).toEqual(["1", "2", "4", "5", "5"]);

        const dir = await mkdtemp(join(tmpdir(), "pdf-pages-"));
        try {
            await writeFile(join(dir, "book.pdf"), pdf);
            const text = (sheet: number) => Bun.spawnSync(["pdftotext", "-f", String(sheet), "-l", String(sheet), "-layout", join(dir, "book.pdf"), "-"])
                .stdout.toString();
            if (!Bun.which("pdftotext")) return;          // poppler is not installed - the rest is checked above
            expect(text(2)).toMatch(/Book \/ A\s+2\s*$/);
            // The index, with its dotted leaders drawn as a border, not as text: "A ... 1".
            expect(text(1)).toMatch(/^\s*Two\s+5\s*$/m);
        } finally {
            await rm(dir, { recursive: true, force: true });
        }
    });

    test("a page made for the screen alone is printed as it is", async () => {
        const { titles, indexNumbers, pdf } = await print({});
        expect(titles).toEqual([]);
        expect(indexNumbers).toEqual([]);
        expect(pdf.length).toBeGreaterThan(1000);
    });
});
