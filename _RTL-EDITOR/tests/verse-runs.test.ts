import { describe, expect, test } from "bun:test";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html";
import { ROW_MARK, continuesLabel, isVerseLabel, labelPieces } from "../src/html/verse-runs";

const html = (markdown: string) => markdownToHtml(markdown).trim();

describe("line labels", () => {
    test("a label is cut into its numbers and what stands between them", () => {
        expect(labelPieces("A.i.5")).toEqual(["A.i.", "5"]);
        expect(labelPieces(" 12 II 712x7 ")).toEqual([" ", "12", " II ", "712", "x", "7", " "]);
    });

    test("the next line is the same label with one number one higher", () => {
        expect(continuesLabel("9", "10")).toBe(true);
        expect(continuesLabel("12 II 712x7", "12 II 713x7")).toBe(true);
        expect(continuesLabel("o iii 12", "o iii 13")).toBe(true);
        expect(continuesLabel("5'", "6'")).toBe(true);
    });

    test("a manuscript's extra lines - a Hebrew letter after the number - are read in their place", () => {
        expect(continuesLabel("363", "363א")).toBe(true);
        expect(continuesLabel("363א", "363ב")).toBe(true);
        expect(continuesLabel("363ו", "364")).toBe(true);
        expect(continuesLabel("E 36", "E 36א")).toBe(true);
        expect(continuesLabel("363", "363ב")).toBe(false);
        expect(continuesLabel("363א", "363ג")).toBe(false);
        expect(continuesLabel("363ו", "365")).toBe(false);
        expect(continuesLabel("363א", "364א")).toBe(false);
        expect(continuesLabel("E 78", "E 78a")).toBe(true);
        expect(continuesLabel("E 78a", "E 78b")).toBe(true);
        expect(continuesLabel("E 78i", "E 79")).toBe(true);
        expect(continuesLabel("E 78a", "E 78c")).toBe(false);
    });

    test("a range is a line standing for several", () => {
        expect(continuesLabel("65", "66–67")).toBe(true);
        expect(continuesLabel("66–67", "68")).toBe(true);
        expect(continuesLabel("E 12-14", "E 15")).toBe(true);
        expect(continuesLabel("66–67", "67")).toBe(false);
        expect(continuesLabel("12–14", "15–17")).toBe(true);
    });

    test("anything else is a break", () => {
        expect(continuesLabel("12 II 712x7", "12 II 711x7")).toBe(false);   // down
        expect(continuesLabel("5", "7")).toBe(false);                       // a gap
        expect(continuesLabel("A.i.30", "A.ii.1")).toBe(false);             // a new column
        expect(continuesLabel("12–14", "16–17")).toBe(false);               // a range, not next
        expect(continuesLabel("12 1", "13 2")).toBe(false);                 // two numbers moved
        expect(continuesLabel("5", "5")).toBe(false);
    });

    test("a label holds a digit and no Hebrew", () => {
        expect(isVerseLabel("A.i.5")).toBe(true);
        expect(isVerseLabel("obv. 12")).toBe(true);
        expect(isVerseLabel("36א")).toBe(true);
        expect(isVerseLabel("36אב")).toBe(false);
        expect(isVerseLabel("א36")).toBe(false);
        expect(isVerseLabel("1. הצבה פיזית")).toBe(false);
        expect(isVerseLabel("המהדורות.")).toBe(false);
    });
});

describe("numbered lines run together", () => {
    test("consecutive lines become one run, each line keeping its label", () => {
        const out = html("**1** אאא,  \n**2** בבב,  \n**3** גגג.");
        expect(out).toContain('<span class="verse-run" style="--label-width: 1.1ch">');
        expect(out.match(/class="verse-line"/g)?.length).toBe(3);
        expect(out).toContain('<b class="verse-label">2</b>בבב,<span class="verse-sep" aria-hidden="true"></span></span>');
        expect(out).not.toContain("<br>");
    });

    test("a break in the numbering starts a new run", () => {
        const out = html("**A.i.29** אאא\n**A.i.30** בבב\n**A.ii.1** גגג\n**A.ii.2** דדד");
        expect(out.match(/class="verse-run"/g)?.length).toBe(2);
    });

    test("a lone numbered line, or lines among prose, are left as they were", () => {
        expect(html("**1** אאא\nפרוזה\n**2** בבב")).not.toContain("verse-run");
        const out = html("פתיחה\n**1** אאא\n**2** בבב\nסיום");
        expect(out).toMatch(/^<p>פתיחה<span class="verse-run".*<\/span>סיום<\/p>$/s);
    });

    test("the label must be the line's opening bold, followed by a space", () => {
        expect(html("**1**אאא\n**2**בבב")).not.toContain("verse-run");
        expect(html("**1. הצבה** אאא\n**2. הצבה** בבב")).not.toContain("verse-run");
    });

    test("only a page with a run carries the script", () => {
        expect(renderMarkdownPage("**1** אאא\n**2** בבב", "x.rtl.md")).toContain("<script>");
        expect(renderMarkdownPage("**1** אאא", "x.rtl.md")).not.toContain("<script>");
    });
});

describe("rows marked in the text", () => {
    test("a row mark starts a new row within the run, and is gone from the page", () => {
        const out = html(`**1** א\n**2** ב\n${ROW_MARK}**3** ג\n**4** ד`);
        expect(out.match(/class="verse-run"/g)?.length).toBe(1);
        expect(out.match(/class="verse-row"/g)?.length).toBe(2);
        expect(out).toContain('ב<span class="verse-sep" aria-hidden="true"></span></span></span><span class="verse-row"><span class="verse-line"><b class="verse-label">3</b>');
        expect(out).not.toContain(ROW_MARK);
    });

    test("a row mark where there is no run is dropped", () => {
        expect(html(`${ROW_MARK}**1** א`)).toBe("<p><strong>1</strong> א</p>");
        expect(html(`פרוזה\n${ROW_MARK}**1** א`)).not.toContain(ROW_MARK);
    });

    test("every run of a paragraph has the same margin, made for its widest label", () => {
        const out = html("**A.i.9** א\n**A.i.10** ב\n**A.ii.1** ג\n**A.ii.2** ד");
        expect(out.match(/--label-width: 6\.6ch/g)?.length).toBe(2);
    });
});
