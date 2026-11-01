// What a PDF has and its page does not - pages: the page numbers of its index, and a footer on every sheet.
//
// A page of the mirror is one long scroll; only the printer knows where its sheets break. So the page
// carries what is needed, unseen on screen (md-to-html.ts, "The PDF's pages") - an index with room for page
// numbers, and on every heading the footer's title of a sheet that opens under it - and printPages() does
// the rest, in the tab the page is loaded in:
//
// 1. **Print once, and see where every heading landed.** Chromium writes a named destination for every id a
//    link points to: its sheet, and its height on it. So a hidden link points at each heading, and the PDF is
//    read back (pdf-lib). The height is measured from the top of the sheet's *content* - Chromium leaves the
//    margin out - which is what tells whether a heading stands at the very top of its sheet: nothing above it
//    but its own top margin.
// 2. **Fill in the index, and print again.** Each `.index-page` gets the sheet of the heading its entry links
//    to. The numbers have a column of their own, a fixed width, so filling them in moves nothing - which the
//    second print is checked for, and printed again if it did.
// 3. **Print the footers apart, and lay them over the sheets.** The footers are a document of their own,
//    printed in the same tab, a sheet per sheet: the title of the heading in force at the top of the sheet,
//    in the middle, and the sheet's number at the line's end. Chromium sets them - in the page's own fonts,
//    the Hebrew shaped and its direction right - and pdf-lib lays each over its sheet, as a form.
//
// CSS can number pages (`@page { @bottom-right { content: counter(page) } }`), but not say what heading a
// sheet opens under, nor put a heading's page number in an index (`target-counter()`): Chromium has
// neither. Hence the two prints.

import type { Page } from "playwright";

/** How every PDF of the mirror is printed. */
export const PRINT_OPTIONS = { printBackground: true, preferCSSPageSize: true, format: "A4" } as const;

/** How often the index is filled in and printed again before its numbers are taken as they are. */
const MAX_INDEX_PRINTS = 3;

/** A heading's top margin, in points, a little over which it is no longer taken to stand at the top of its sheet. */
const TOP_TOLERANCE_PT = 1;

/** What the page says of its headings and its sheet - see probe(). */
type Probe = {
    /** Every heading carrying a footer title, in order: its id, the title, and its top margin on paper, in points. */
    headings: { id: string, title: string, marginTop: number }[];
    /** The title of a sheet before the first heading. */
    emptyTitle: string;
    /** The ids the index entries link to, in order - one per `.index-page`. */
    indexTargets: string[];
    marginInline: number;
    marginBlock: number;
};

/** Where a destination is: its sheet (0-based), and how far below the top of the sheet's content, in points. */
type Place = { page: number, offset: number };

/** A page printed by printPages() - and, for the tests, what it decided. */
export type PrintedPages = {
    pdf: Uint8Array;
    /** Every sheet's footer title - none for a page made without RenderOptions.pdf. */
    titles: string[];
    /** Every index entry's page number, in order - "" for an entry whose heading was not printed. */
    indexNumbers: string[];
};

/**
 * The page loaded in `tab` - its fonts in, laid out for paper (`beforeprint` dispatched) - printed as a PDF
 * with its index's page numbers and its footers. A page made without RenderOptions.pdf is printed as it is.
 *
 * The tab is left holding the footers, not the page: close it afterwards.
 */
export async function printPages(tab: Page): Promise<PrintedPages> {
    // The headings' margins are read as paper has them.
    await tab.emulateMedia({ media: "print" });
    const probe = await tab.evaluate(probePage);
    if (!probe) return { pdf: await tab.pdf(PRINT_OPTIONS), titles: [], indexNumbers: [] };

    let pdf = await tab.pdf(PRINT_OPTIONS);
    let places = await destinations(pdf);
    let indexNumbers: string[] = [];
    for (let print = 1; probe.indexTargets.length && print <= MAX_INDEX_PRINTS; print++) {
        indexNumbers = probe.indexTargets.map(id => places.has(id) ? String(places.get(id)!.page + 1) : "");
        await tab.evaluate(fillIndex, indexNumbers);
        pdf = await tab.pdf(PRINT_OPTIONS);
        const before = places;
        places = await destinations(pdf);
        if (probe.indexTargets.every(id => places.get(id)?.page === before.get(id)?.page)) break;
    }

    const { PDFDocument } = await import("pdf-lib");
    const document = await PDFDocument.load(pdf, { updateMetadata: false });
    const sheets = document.getPageCount();
    const titles = sheetTitles(probe, places, sheets);
    await tab.evaluate(makeFooters, { titles, marginInline: probe.marginInline, marginBlock: probe.marginBlock });
    const footers = await PDFDocument.load(await tab.pdf(PRINT_OPTIONS));
    if (footers.getPageCount() < sheets) throw new Error(`the footers came out ${footers.getPageCount()} sheets, not ${sheets}`);
    const forms = await document.embedPdf(footers, [...Array(sheets).keys()]);
    document.getPages().forEach((page, i) => page.drawPage(forms[i], { x: 0, y: 0, ...page.getSize() }));
    // No object streams - pdf-mirror.ts's stamp has to stay readable at the head of the file.
    return { pdf: await document.save({ useObjectStreams: false }), titles, indexNumbers };
}

/** The title of each sheet's footer: that of the last heading before its top - or at it. */
function sheetTitles(probe: Probe, places: Map<string, Place>, sheets: number): string[] {
    const titles: string[] = [];
    let heading = 0, title = probe.emptyTitle;
    for (let sheet = 0; sheet < sheets; sheet++) {
        for (; heading < probe.headings.length; heading++) {
            const { id, marginTop } = probe.headings[heading];
            const place = places.get(id);
            if (!place) continue;               // not printed at all - in a collapsed box, say
            const atTop = place.page === sheet && place.offset <= marginTop + TOP_TOLERANCE_PT;
            if (place.page >= sheet && !atTop) break;
            title = probe.headings[heading].title;
        }
        titles.push(title);
    }
    return titles;
}

/** Every named destination of a PDF, by the id it was made for. */
async function destinations(pdf: Uint8Array): Promise<Map<string, Place>> {
    const { PDFArray, PDFDict, PDFDocument, PDFName, PDFNumber } = await import("pdf-lib");
    const document = await PDFDocument.load(pdf, { updateMetadata: false });
    const sheets = new Map(document.getPages().map((page, i) => [page.ref.toString(), i]));
    const height = (i: number) => document.getPage(i).getHeight();
    const places = new Map<string, Place>();
    const dests = document.catalog.lookupMaybe(PDFName.of("Dests"), PDFDict);
    for (const [name, value] of dests?.entries() ?? []) {
        let target = document.context.lookup(value);
        if (target instanceof PDFDict) target = target.lookup(PDFName.of("D"));
        if (!(target instanceof PDFArray)) continue;
        const page = sheets.get(target.get(0).toString());
        const top = target.lookupMaybe(3, PDFNumber)?.asNumber();
        if (page === undefined || top === undefined) continue;
        // Chromium names a destination by the link's fragment, percent-encoded.
        const encoded = name.decodeText();
        let id = encoded;
        try {
            id = decodeURIComponent(encoded);
        } catch { /* not encoded after all */ }
        places.set(id, { page, offset: height(page) - top });
    }
    return places;
}

// ------------------------------------------------------------------------------------------------
// In the page

/**
 * Runs in the page: what printPages() needs of it - null for a page made without RenderOptions.pdf - and a
 * hidden link to every heading and every index entry's target, for Chromium to write their destinations.
 */
function probePage(): Probe | null {
    const body = document.body;
    if (!body.dataset.marginInline) return null;
    const points = (css: string) => parseFloat(css) * 0.75;
    const headings = [...document.querySelectorAll<HTMLElement>("main [data-running-title]")].map(heading => ({
        id: heading.id, title: heading.dataset.runningTitle ?? "", marginTop: points(getComputedStyle(heading).marginTop),
    }));
    const pageNumbers = [...document.querySelectorAll<HTMLElement>(".index .index-page")];
    const indexTargets = pageNumbers.map(span => {
        const href = span.closest("a")?.getAttribute("href") ?? "";
        try {
            return decodeURIComponent(href.slice(1));
        } catch {
            return href.slice(1);
        }
    });
    const targets = body.appendChild(document.createElement("div"));
    targets.style.cssText = "position: absolute; top: 0; left: 0; width: 1px; height: 1px; overflow: hidden";
    for (const id of new Set([...headings.map(heading => heading.id), ...indexTargets])) {
        if (id) targets.appendChild(document.createElement("a")).href = "#" + encodeURIComponent(id);
    }
    return {
        headings, indexTargets,
        emptyTitle: document.querySelector<HTMLElement>("main")?.dataset.runningTitle ?? "",
        marginInline: Number(body.dataset.marginInline), marginBlock: Number(body.dataset.marginBlock),
    };
}

/** Runs in the page: puts its page number into every index entry - in probe()'s order. */
function fillIndex(numbers: string[]): void {
    document.querySelectorAll(".index .index-page").forEach((span, i) => span.textContent = numbers[i] ?? "");
}

/**
 * Runs in the page, and replaces it: a document of one footer per sheet, each on a sheet of its own, at the
 * page's margins - the title in the middle, the sheet's number at the line's end. Only the page's fonts are
 * kept, and the direction of its root.
 */
function makeFooters({ titles, marginInline, marginBlock }: { titles: string[], marginInline: number, marginBlock: number }): void {
    const font = getComputedStyle(document.body).fontFamily;
    for (const element of document.querySelectorAll("style, link, script")) {
        if (!(element instanceof HTMLStyleElement && element.textContent?.includes("@font-face"))) element.remove();
    }
    const style = document.head.appendChild(document.createElement("style"));
    style.textContent = `
        @page { size: A4; margin: 0; }
        html, body { margin: 0; padding: 0; background: none; }
        body { font-family: ${font}; font-size: 9pt; color: #555; }
        .sheet { position: relative; width: 210mm; height: 297mm; overflow: hidden; break-after: page; }
        .sheet:last-child { break-after: auto; }
        .footer { position: absolute; bottom: ${(marginBlock * 0.4).toFixed(2)}mm; inset-inline: ${marginInline}mm;
                  text-align: center; line-height: 1.2; }
        .title { display: block; padding-inline: 3em; }
        .number { position: absolute; inset-inline-end: 0; bottom: 0; font-variant-numeric: tabular-nums; }`;
    document.body.replaceChildren(...titles.map((title, i) => {
        const sheet = document.createElement("div");
        sheet.className = "sheet";
        const footer = sheet.appendChild(document.createElement("div"));
        footer.className = "footer";
        const name = footer.appendChild(document.createElement("span"));
        name.className = "title";
        name.textContent = title || "\u00a0";
        const number = footer.appendChild(document.createElement("span"));
        number.className = "number";
        number.textContent = String(i + 1);
        return sheet;
    }));
}
