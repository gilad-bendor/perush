import { afterAll, describe, expect, test } from "./test-kit.ts";
import { chromium, type Browser, type Page } from "playwright";
import { renderMarkdownPage } from "../src/html/md-to-html.ts";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK } from "../src/html/layout-marks.ts";

let browser: Browser | null = null;
afterAll(async () => { await browser?.close(); });

const PAGE = [
    "שורה ראשונה בלי הערה\nשורה **שנייה** עם הערה[^a] ועוד מילים\nשורה שלישית",
    `${GROUP_MARK} **1** ${MARGIN_MARK} אחת\n${LINE_MARK} **2** ${MARGIN_MARK} שתיים[^b]`,
    "[^a]: הערה א", "[^b]: הערה ב",
].join("\n\n");

async function open(): Promise<Page> {
    browser ??= await chromium.launch();
    const tab = await browser.newPage();
    await tab.setContent(renderMarkdownPage(PAGE, "t.rtl.md"), { waitUntil: "load" });
    return tab;
}

/** The marks laid over the page, and the box of what they should cover. */
async function marksOver(tab: Page, selector: string): Promise<{ marks: { top: number, bottom: number, left: number, right: number }[], box: DOMRect }> {
    return tab.evaluate(selector => ({
        marks: [...document.querySelectorAll<HTMLElement>(".footnote-line-flash")].map(mark => {
            const r = mark.getBoundingClientRect();
            return { top: r.top, bottom: r.bottom, left: r.left, right: r.right };
        }),
        box: document.querySelector(selector)!.getBoundingClientRect().toJSON(),
    }), selector);
}

describe("following a footnote link", () => {
    test("↩ flashes the whole line the reference stands in - not its neighbours - and the mark fades and goes", async () => {
        const tab = await open();
        try {
            await tab.click('a.footnote-backref[href="#fnref-1"]');
            await tab.waitForSelector(".footnote-line-flash");
            const { marks } = await marksOver(tab, "p");
            expect(marks).toHaveLength(1);
            // The line from its first word to its last: "שורה **שנייה** עם הערה[^a] ועוד מילים".
            const line = await tab.evaluate(() => {
                const p = document.querySelector("p")!;
                const range = document.createRange();
                range.setStartAfter(p.querySelectorAll("br")[0]);
                range.setEndBefore(p.querySelectorAll("br")[1]);
                return range.getBoundingClientRect().toJSON();
            });
            expect(Math.abs(marks[0].top - line.top)).toBeLessThan(1);
            expect(Math.abs(marks[0].bottom - line.bottom)).toBeLessThan(1);
            expect(marks[0].right - marks[0].left).toBeGreaterThan(line.width);
            expect(await tab.evaluate(() => getComputedStyle(document.querySelector(".footnote-line-flash")!).animationDuration)).toBe("2s");
            await tab.waitForSelector(".footnote-line-flash", { state: "detached", timeout: 3000 });
        } finally {
            await tab.close();
        }
    });

    test("in a line group, the line is the grouped line", async () => {
        const tab = await open();
        try {
            await tab.click('a.footnote-backref[href="#fnref-2"]');
            await tab.waitForSelector(".footnote-line-flash");
            const { marks, box } = await marksOver(tab, ".grouped-line:last-of-type");
            expect(marks).toHaveLength(1);
            expect(Math.abs(marks[0].top - box.top)).toBeLessThan(2);
        } finally {
            await tab.close();
        }
    });

    test("a reference flashes its note, fading - again on a second click", async () => {
        const tab = await open();
        try {
            for (let i = 0; i < 2; i++) {
                await tab.click('sup.footnote-ref a[href="#fn-1"]');
                await tab.waitForFunction(() => document.getElementById("fn-1")!.classList.contains("flash"));
                expect(await tab.evaluate(() => getComputedStyle(document.getElementById("fn-1")!).animationName)).toBe("footnote-flash");
            }
        } finally {
            await tab.close();
        }
    });
});
