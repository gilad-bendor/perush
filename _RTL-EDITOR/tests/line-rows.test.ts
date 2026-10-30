import { describe, expect, test } from "./test-kit.ts";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html.ts";
import { GROUP_MARK, LINE_MARK, MARGIN_MARK, ROW_MARK } from "../src/html/layout-marks.ts";

const html = (markdown: string) => markdownToHtml(markdown).trim();
const G = GROUP_MARK, L = LINE_MARK, R = ROW_MARK, M = MARGIN_MARK;

describe("lines that share rows", () => {
    test("a group's lines stand in one row, a separator after each, their margin notes cut off into the margin", () => {
        const out = html(`${G}**1**${M} אחת,\n${L}**2**${M} שתיים.`);
        expect(out).toBe('<p><span class="line-group" style="--margin-width: 1.1ch"><span class="line-row">'
            + '<span class="grouped-line"><span class="line-margin"><strong>1</strong></span>אחת,<span class="line-sep" aria-hidden="true"></span></span>'
            + ' <span class="grouped-line"><span class="line-margin"><strong>2</strong></span>שתיים.<span class="line-sep" aria-hidden="true"></span></span>'
            + "</span></span></p>");
    });

    test("a row mark starts a new row; a line with no mark ends the group", () => {
        const out = html(`לפני\n${G}**1**${M} א\n${L}**2**${M} ב\n${L}${R}**3**${M} ג\nאחרי`);
        expect(out.match(/class="line-row"/g)?.length).toBe(2);
        expect(out).toMatch(/^<p>לפני<span class="line-group"/);
        expect(out).toContain("</span></span>אחרי</p>");
    });

    test("two groups of one paragraph share one margin, made for the widest note", () => {
        const out = html(`${G}**9**${M} א\n${L}**10**${M} ב\n${G}**A.ii.1**${M} ג\n${L}**A.ii.2**${M} ד`);
        expect(out.match(/--margin-width: 6\.6ch/g)?.length).toBe(2);
    });

    test("a line with no margin note has an empty margin; no mark ever reaches the page", () => {
        const out = html(`${G}א\n${L}ב`);
        expect(out).toContain('<span class="line-margin"></span>א');
        expect(out).not.toMatch(/[-]/);
        expect(html(`${M}x ${R}y`)).toBe("<p>x y</p>");
    });

    test("only a page with groups carries the script, and every line its source line when asked", () => {
        const text = `${G}**1**${M} א\n${L}**2**${M} ב`;
        expect(renderMarkdownPage(text, "x.rtl.md")).toContain("<script>");
        expect(renderMarkdownPage("**1** א\n**2** ב", "x.rtl.md")).not.toContain("<script>");
        expect(renderMarkdownPage(text, "x.rtl.md", { sourceLines: true })).toContain('data-source-line="1"');
    });
});
