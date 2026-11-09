import { afterAll, describe, expect, test } from "./test-kit.ts";
import { chromium, type Browser } from "playwright";
import { renderMarkdownPage } from "../src/html/md-to-html.ts";
import { DEFAULT_PDF_SETTINGS } from "../src/html/layout-module.ts";
import { KEEP_NOTE_WHOLE_EMPTY_SHARE, paginateSheets, type SheetsResult } from "../src/html/pdf-sheets.ts";
import { printPages } from "../src/html/pdf-pages.ts";

// A sheet of A4 at the mirror's margins holds 297mm - 2 * 18mm of content: some 984px.
const block = (height: number) => `\`\`\`html\n<div class="filler" style="height: ${height}px"></div>\n\`\`\``;
const lines = (count: number, word = "שורה") => Array.from({ length: count }, (_, i) => `${word} ${i + 1}`).join("\n");

let browser: Browser | null = null;
afterAll(async () => { await browser?.close(); });

type Sheet = { forced: boolean, refs: string[], notes: string[], text: string, html: string };

/** The page of `markdown`, laid out in sheets as the PDF printer does - and what each sheet holds. */
async function sheetsOf(markdown: string): Promise<{ result: SheetsResult, sheets: Sheet[] }> {
    browser ??= await chromium.launch();
    const tab = await browser.newPage();
    try {
        await tab.setContent(renderMarkdownPage(markdown, "t.rtl.md", { pdf: DEFAULT_PDF_SETTINGS, fonts: "embed" }), { waitUntil: "load" });
        await tab.evaluate(async () => {
            await document.fonts.ready;
            window.dispatchEvent(new Event("beforeprint"));
        });
        await tab.emulateMedia({ media: "print" });
        const result = await tab.evaluate(paginateSheets, KEEP_NOTE_WHOLE_EMPTY_SHARE);
        const sheets = await tab.evaluate(() => [...document.querySelectorAll(".pdf-sheet")].map(sheet => ({
            forced: sheet.classList.contains("forced"),
            refs: [...sheet.querySelectorAll(".pdf-sheet-body sup.footnote-ref")].map(ref => ref.textContent ?? ""),
            notes: [...sheet.querySelectorAll(".pdf-note")].map(note => `${note.querySelector(".pdf-note-number")!.textContent}|${note.querySelector(".pdf-note-text")!.textContent!.trim()}`),
            text: sheet.querySelector(".pdf-sheet-body")!.textContent ?? "",
            html: sheet.querySelector(".pdf-sheet-body")!.innerHTML,
        })));
        return { result, sheets };
    } finally {
        await tab.close();
    }
}

describe("paginateSheets", () => {
    test("a note stands on the sheet of its first reference, numbered from 1 there; a further one on a later sheet says where", async () => {
        const { result, sheets } = await sheetsOf([
            "# ספר", "פתיחה[^a] ושוב[^a]", lines(60), "סוף[^b] ושוב א[^a]", "[^a]: הערה א", "[^b]: הערה ב",
        ].join("\n\n"));
        expect(result).toMatchObject({ sheets: 2, notes: 2, continued: [], warnings: [] });
        expect(sheets[0].refs).toEqual(["1", "1"]);
        expect(sheets[0].notes).toEqual(["1|הערה א"]);
        expect(sheets[1].refs).toEqual(["1", "1 (עמ' 1)"]);
        expect(sheets[1].notes).toEqual(["1|הערה ב"]);
        // The reference links to its note - on its sheet or on another.
        expect(sheets[1].html).toMatch(/<a href="#pdf-note-1"[^>]*>1 \(עמ' 1\)<\/a>/);
    });

    test("the text of a sheet and its notes never overflow it; every line is printed once, in order", async () => {
        const { result, sheets } = await sheetsOf([
            ...Array.from({ length: 6 }, (_, i) => `${lines(25, `פסקה${i + 1}`)}\nעם הערה[^n${i}]`),
            ...Array.from({ length: 6 }, (_, i) => `[^n${i}]: ${"הערה ארוכה למדי, ".repeat(12)}`),
        ].join("\n\n"));
        expect(result).toMatchObject({ warnings: [] });
        const printed = sheets.map(sheet => sheet.text).join(" ").match(/פסקה\d \d+/g)!;
        expect(printed).toEqual(Array.from({ length: 6 }, (_, p) => Array.from({ length: 25 }, (_, i) => `פסקה${p + 1} ${i + 1}`)).flat());
        // A paragraph is not split leaving fewer than 3 of its lines on a sheet (orphans, widows).
        for (const sheet of sheets.slice(1)) {
            const first = /פסקה(\d) (\d+)/.exec(sheet.text);
            if (first && first[2] !== "1") expect(Number(first[2])).toBeGreaterThan(3);
        }
    });

    test("a note too long for the room left goes, with its reference's line, to the next sheet - if that leaves no more than a fifth empty", async () => {
        const { result, sheets } = await sheetsOf([block(880), "השורה עם ההפניה[^long]", "ואחריה עוד שורה", `[^long]: ${"הערה ארוכה. ".repeat(60)}`].join("\n\n"));
        expect(result).toMatchObject({ continued: [], warnings: [] });
        expect(sheets[0].refs).toEqual([]);
        expect(sheets[1].refs).toEqual(["1"]);
        expect(sheets[1].notes).toHaveLength(1);
    });

    test("- and otherwise is split: it goes on, unnumbered, at the head of the next sheet's notes", async () => {
        const { result, sheets } = await sheetsOf([block(380), "השורה עם ההפניה[^long]", lines(40), `[^long]: ${"הערה ארוכה מאוד. ".repeat(220)}`].join("\n\n"));
        expect(result).toMatchObject({ continued: [2], warnings: [] });
        expect(sheets[0].refs).toEqual(["1"]);
        expect(sheets[0].notes[0]).toStartWith("1|הערה ארוכה מאוד.");
        expect(sheets[1].notes[0]).toStartWith("|");
        const words = (sheets[0].notes[0] + sheets[1].notes[0]).match(/הערה ארוכה מאוד\./g)!;
        expect(words).toHaveLength(220);
    });

    test("a heading is not left at the foot of a sheet - it goes on with what follows it", async () => {
        const { sheets } = await sheetsOf([block(905), "## כותרת", lines(4), "הערה[^a]", "[^a]: א"].join("\n\n"));
        expect(sheets[0].html).not.toMatch(/<h2/);
        expect(sheets[1].html).toMatch(/^<h2/);
    });

    test("every # but the first opens a sheet of its own; that sheet keeps its top margin, one Chromium broke does not", async () => {
        const { sheets } = await sheetsOf(["# אחד", "טקסט[^a]", "# שניים", "טקסט", lines(70), "[^a]: א"].join("\n\n"));
        expect(sheets.map(sheet => sheet.forced)).toEqual([true, true, false]);
        expect(sheets[1].html).toMatch(/^<h1/);
    });

    test("a numbered list goes on counting on the next sheet, and a table goes on with its head", async () => {
        const items = Array.from({ length: 60 }, (_, i) => `${i + 1}. פריט ${i + 1}`).join("\n");
        const table = ["| א | ב |", "|---|---|", ...Array.from({ length: 50 }, (_, i) => `| ${i + 1} | שורה |`)].join("\n");
        const { sheets } = await sheetsOf([items, "הערה[^a]", table, "[^a]: א"].join("\n\n"));
        const listed = sheets.map(sheet => [...sheet.html.matchAll(/<li[^>]*>פריט (\d+)/g)].map(m => Number(m[1])));
        const second = sheets.findIndex((_, i) => i > 0 && listed[i].length);
        expect(sheets[second].html).toMatch(new RegExp(`^<ol[^>]* start="${listed[second][0]}"`));
        expect(listed[second][0]).toBe(listed[second - 1].at(-1)! + 1);
        const withRows = sheets.filter(sheet => /<td>\d+<\/td>/.test(sheet.html));
        expect(withRows.length).toBeGreaterThan(1);
        for (const sheet of withRows) expect(sheet.html).toMatch(/<thead[ >]/);
    });

    test("printed: one sheet a page, the index numbered, the footers in place", async () => {
        browser ??= await chromium.launch();
        const tab = await browser.newPage();
        try {
            const markdown = ["# ספר", "<תוכן-העניינים>", "## א", "טקסט[^a]", lines(60), "## ב", "טקסט[^a]", "[^a]: הערה"].join("\n\n");
            await tab.setContent(renderMarkdownPage(markdown, "t.rtl.md", { pdf: DEFAULT_PDF_SETTINGS, fonts: "embed" }), { waitUntil: "load" });
            await tab.evaluate(async () => {
                await document.fonts.ready;
                window.dispatchEvent(new Event("beforeprint"));
            });
            const printed = await printPages(tab);
            expect(printed.sheets).toMatchObject({ sheets: 2, warnings: [] });
            expect(printed.indexNumbers).toEqual(["1", "2"]);
            expect(printed.titles).toEqual(["ספר", "ספר"]);
        } finally {
            await tab.close();
        }
    });

    test("a page without footnotes is left to Chromium", async () => {
        browser ??= await chromium.launch();
        const tab = await browser.newPage();
        try {
            await tab.setContent(renderMarkdownPage("# ספר\n\nטקסט", "t.rtl.md", { pdf: DEFAULT_PDF_SETTINGS }), { waitUntil: "load" });
            expect((await printPages(tab)).sheets).toBeUndefined();
        } finally {
            await tab.close();
        }
    });
});
