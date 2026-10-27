import { describe, expect, test } from "bun:test";
import { applyLayout, DEFAULT_PDF_SETTINGS, layoutFileOf } from "../../../../_RTL-EDITOR/src/html/layout-module";
import { markdownToHtml, renderMarkdownPage } from "../../../../_RTL-EDITOR/src/html/md-to-html";
import { continuesLabel, echoesOf, isNumberLabel, labelPieces, lineSimilarity, numberedLines, runsOf } from "../numbered-lines";
import { translationLayout } from "../translation-layout";

/** A file laid out as the translations' .layout.ts lays out a file with no layout of its own - and rendered. */
const html = (markdown: string, rows: Parameters<typeof translationLayout>[2] = {}) => {
    const file = layoutFileOf("x.rtl.md", markdown);
    const layout = translationLayout(file, [], rows);
    const resolved = { output: "plain" as const, page: null, pdf: DEFAULT_PDF_SETTINGS, groups: layout.groups ?? [], pageBreaks: new Map(), attention: [], data: {}, sourceMd5: null };
    return markdownToHtml(applyLayout(markdown, resolved, true)).trim();
};

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
        expect(isNumberLabel("A.i.5")).toBe(true);
        expect(isNumberLabel("obv. 12")).toBe(true);
        expect(isNumberLabel("36א")).toBe(true);
        expect(isNumberLabel("36אב")).toBe(false);
        expect(isNumberLabel("א36")).toBe(false);
        expect(isNumberLabel("1. הצבה פיזית")).toBe(false);
        expect(isNumberLabel("המהדורות.")).toBe(false);
    });
});

describe("numbered lines", () => {
    test("a repeated label is named by its occurrence; a fence and prose are no lines", () => {
        const content = "# x\n**1** א\n**2** ב\nפרוזה **3**\n```\n**9** קוד\n```\n**1** ג\n**36א** ד\n**ת0.1** ה";
        expect(numberedLines(content.split("\n")).map(line => [line.index, line.key])).toEqual([[1, "1"], [2, "2"], [7, "1#2"], [8, "36א"]]);
    });

    test("a line's text is what follows its label; its label's length is what goes to the margin", () => {
        const [line] = numberedLines(["  **E 12** טקסט,  "]);
        expect([line.label, line.text, line.labelLength]).toEqual(["E 12", "טקסט,", 8]);
    });

    test("a run is lines of one paragraph, one below the other, whose numbering goes on", () => {
        const runs = (markdown: string) => {
            const file = layoutFileOf("x.rtl.md", markdown);
            return runsOf(file, numberedLines(file.lines)).map(run => run.map(line => line.key).join(","));
        };
        expect(runs("**1** א\n**2** ב\n**3** ג")).toEqual(["1,2,3"]);
        expect(runs("**A.i.29** א\n**A.i.30** ב\n**A.ii.1** ג\n**A.ii.2** ד")).toEqual(["A.i.29,A.i.30", "A.ii.1,A.ii.2"]);
        expect(runs("**1** א\n\n**2** ב")).toEqual([]);                  // two paragraphs
        expect(runs("**1** א\nפרוזה\n**2** ב")).toEqual([]);
        expect(runs("**1**א\n**2**ב")).toEqual([]);                       // no space after the label
    });
});

describe("numbered lines run together on the page", () => {
    test("consecutive lines become one group, each line's label in the margin", () => {
        const out = html("**1** אאא,  \n**2** בבב,  \n**3** גגג.");
        expect(out).toContain('<span class="line-group" style="--margin-width: 1.1ch">');
        expect(out.match(/class="grouped-line"/g)?.length).toBe(3);
        expect(out).toContain('<span class="line-margin"><strong>2</strong></span>בבב,<span class="line-sep" aria-hidden="true"></span></span>');
        expect(out).not.toContain("<br>");
    });

    test("a lone numbered line, or lines among prose, are left as they were", () => {
        expect(html("**1** אאא\nפרוזה\n**2** בבב")).not.toContain("line-group");
        expect(html("פתיחה\n**1** אאא\n**2** בבב\nסיום")).toMatch(/^<p>פתיחה<span class="line-group".*<\/span>סיום<\/p>$/s);
        expect(html("**1. הצבה** אאא\n**2. הצבה** בבב")).not.toContain("line-group");
    });

    test("rows start where the layout says - and every run of a paragraph has one margin, made for its widest label", () => {
        const out = html("**1** א\n**2** ב\n**3** ג\n**4** ד", { rowStart: ["3"] });
        expect(out.match(/class="line-row"/g)?.length).toBe(2);
        expect(html("**A.i.9** א\n**A.i.10** ב\n**A.ii.1** ג\n**A.ii.2** ד").match(/--margin-width: 6\.6ch/g)?.length).toBe(2);
    });

    test("a label ending in punctuation, or opening with it, is bold in the margin all the same", () => {
        const out = html("**C₀ iv 1'** \"עתה,\n**C₀ iv 2'** האלים\n\n**(1)** א\n**(2)** _ב_");
        expect(out).toContain("<em>ב</em>");
        expect(out).toContain("<strong>C₀ iv 1'</strong>");
        expect(out).toContain('<span class="line-margin"><strong>C₀ iv 2\'</strong></span>האלים');
        expect(out).not.toContain("**");
    });

    test("the editor groups nothing by itself: without a layout, numbered lines are plain lines", () => {
        expect(renderMarkdownPage("**1** אאא\n**2** בבב", "x.rtl.md")).not.toContain("<script>");
        expect(html("**1** אאא\n**2** בבב")).toContain("line-group");
    });
});

describe("lines nearly the same", () => {
    const runs = (text: string) => runsOf(layoutFileOf("t.rtl.md", text), numberedLines(text.split("\n")));
    const echoes = (text: string) => [...echoesOf(runs(text), "similar")].map(([key, first]) => `${key}>${first.key}`);

    test("are told by their letters - a letter, a name or brackets changed - and an editor's note says nothing", () => {
        expect(lineSimilarity("צוו, ויקראו הכרוזים;", "[צו]ו, וקראו [הכרוזים];")).toBeGreaterThan(0.85);
        expect(lineSimilarity("את נמתר – בקשו את שערו,", "את אדד – בקשו את שערו,")).toBeGreaterThan(0.7);
        expect(lineSimilarity("אל תיראו את אליכם,", "הביאו מאפה לפניו;")).toBeLessThan(0.3);
        expect(lineSimilarity("{נוסח אשורי} […]", "{נוסח אשורי} […]")).toBe(0);
    });

    test("a litany, each line like the one before, repeats nothing", () => {
        expect(echoes("**1** הגדול באלים,\n**2** הגדול באלות,\n**3** הגדול בארצות,\n**4** הגדול בערים,")).toEqual([]);
    });

    test("a passage found once goes on with the next lines, rather than jumping to another like it", () => {
        const text = "**1** אמר לו המלך,\n**2** קום לך אל העיר.\n\n**10** אמר לו המלך,\n**11** שב לך בביתך.\n\n"
            + "**20** אמר לו המלכה,\n**21** שב לך בביתך.";
        expect(echoes(text)).toEqual(["20>10", "21>11"]);
    });
});

