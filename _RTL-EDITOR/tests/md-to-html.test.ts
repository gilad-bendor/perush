import { describe, expect, test } from "bun:test";
import { markdownToHtml, renderMarkdownPage } from "../src/md-to-html";

const html = (markdown: string) => markdownToHtml(markdown).trim();

describe("readable Markdown", () => {
    test("a single line break is a line break", () => {
        expect(html("שורה אחת\nשורה שתיים")).toBe("<p>שורה אחת<br>\nשורה שתיים</p>");
    });

    test("the syntax characters are gone", () => {
        expect(html("## כותרת")).toBe("<h2>כותרת</h2>");
        expect(html("**מודגש** ו-*נטוי*")).toBe("<p><strong>מודגש</strong> ו-<em>נטוי</em></p>");
        expect(html("> בראשית א א")).toBe("<blockquote>\n<p>בראשית א א</p>\n</blockquote>");
    });

    test("raw HTML is shown as text, never let through", () => {
        expect(html('<div dir="rtl">')).toBe("<p>&lt;div dir=&quot;rtl&quot;&gt;</p>");
    });
});

describe("emphasis inside inline code", () => {
    test("* and ** are bold, without their stars", () => {
        expect(html("`a *b* c **d**`")).toBe("<p><code>a <strong>b</strong> c <strong>d</strong></code></p>");
    });

    test("a lone star stays a star, and the text around it is escaped", () => {
        expect(html("`a * <b>`")).toBe("<p><code>a * &lt;b&gt;</code></p>");
    });
});

describe("tables", () => {
    test("a box table becomes an HTML table with no header row", () => {
        const table = [
            "┌─────┬─────┐",
            "│ a   │ b   │",
            "├─────┼─────┤",
            "│ c   │ d   │",
            "└─────┴─────┘",
        ].join("\n");
        const out = html(table);
        expect(out).not.toContain("<th");
        expect(out).not.toContain("─");
        expect(out.match(/<tr>/g)).toHaveLength(2);
        expect(out.match(/<td>/g)).toHaveLength(4);
    });

    test("a mirrored (REVERSED-NICE) table is recognised too", () => {
        expect(html("┐─────┬─────┌\n│ a   │ b   │\n┘─────┴─────└")).toContain("<td>a</td>");
    });

    test("a cell over several lines keeps its line breaks, and the other cells gain no empty ones", () => {
        const out = html("┌─────┬─────┐\n│ a   │ b   │\n│ a2  │     │\n└─────┴─────┘");
        expect(out).toContain("<td>a<br>\na2</td>");
        expect(out).toContain("<td>b</td>");
    });

    test("a cell's Markdown is rendered", () => {
        expect(html("┌─────────┐\n│ `קוד`   │\n└─────────┘")).toContain("<td><code>קוד</code></td>");
    });

    test("a Markdown table has no header row either", () => {
        const out = html("| x | y |\n|---|---|\n| 1 | 2 |");
        expect(out).not.toContain("<th");
        expect(out).toContain("<td>x</td>");
        expect(out).toContain("<td>2</td>");
    });

    test("a table may follow a line of text directly", () => {
        expect(html("טקסט:\n┌───┐\n│ a │\n└───┘")).toMatch(/^<p>טקסט:<\/p>\n<table>/);
    });

    test("a table drawn inside a code fence stays sample text", () => {
        expect(html("```\n┌───┐\n│ a │\n└───┘\n```")).not.toContain("<table");
    });
});

describe("pseudo-tags", () => {
    test("become a box captioned with the tag's name, holding Markdown", () => {
        expect(html("<עיון>\n### כותרת\n- פריט\n</עיון>")).toBe([
            '<div class="pseudo-tag" data-tag="עיון">',
            '<div class="pseudo-tag-caption">עיון</div>',
            "<h3>כותרת</h3>",
            "<ul>",
            "<li>פריט</li>",
            "</ul>",
            "</div>",
        ].join("\n"));
    });

    test("an attribute's value joins the caption", () => {
        expect(html('<ניתוח-לשוני ביטוי="רֶמֶשׂ">\nתוכן\n</ניתוח-לשוני>'))
            .toContain('<div class="pseudo-tag-caption">ניתוח-לשוני: רֶמֶשׂ</div>');
    });

    test("an indented one inside a list item, right after a line of text", () => {
        const out = html("1. פריט\n   המשך\n   <מדרש>\n   תוכן\n   </מדרש>\n2. שני");
        expect(out).toMatch(/<li>פריט<br>\nהמשך<div class="pseudo-tag" data-tag="מדרש">[^]*<p>תוכן<\/p>\n<\/div>\n<\/li>\n<li>שני<\/li>/);
    });

    test("nested tags of the same name close in order", () => {
        const out = html("<עיון>\nא\n<עיון>\nב\n</עיון>\nג\n</עיון>");
        expect(out.match(/class="pseudo-tag"/g)).toHaveLength(2);
        expect(out).toMatch(/<p>ב<\/p>\n<\/div>\n<p>ג<\/p>\n<\/div>$/);
    });

    test("a tag never closed is just text", () => {
        expect(html("<עיון>\nתוכן")).toBe("<p>&lt;עיון&gt;<br>\nתוכן</p>");
    });

    test("an ASCII tag name is not a pseudo-tag", () => {
        expect(html("<div>\ntext\n</div>")).not.toContain("pseudo-tag");
    });
});

describe("links", () => {
    test("go through hrefFor, as written", () => {
        const out = markdownToHtml("[קישור](../ניתוחים/עדן.rtl.md#x)", { hrefFor: href => `[${href}]` });
        expect(decodeURI(out.match(/href="([^"]*)"/)![1])).toBe("[../ניתוחים/עדן.rtl.md#x]");
    });
});

describe("the index", () => {
    const sections = "# חלק א\n## א1. ההצעה\n### פרט\n#### עמוק מדי\n# חלק ב\n";

    test("an RTL page opens with תוכן העניינים, linking every section down to ###", () => {
        const page = renderMarkdownPage(sections, "פירוש/a.rtl.md");
        expect(page).toMatch(/<main>\n<nav class="index">\n<details open>\n<summary>תוכן העניינים<\/summary>/);
        expect(page.match(/<li class="index-depth-(\d)">/g)).toEqual([
            '<li class="index-depth-0">', '<li class="index-depth-1">', '<li class="index-depth-2">', '<li class="index-depth-0">',
        ]);
        expect(page).not.toContain(">עמוק מדי</a>");
        expect(page).toContain('<h2 id="א1-ההצעה">');
        expect(page).toContain(`<a href="#${encodeURIComponent("א1-ההצעה")}">א1. ההצעה</a>`);
    });

    test("an LTR page calls it Contents", () => {
        const page = renderMarkdownPage("## One\n## Two\n## Three", "docs/notes.md");
        expect(page).toContain("<summary>Contents</summary>");
        expect(page).toContain('<li class="index-depth-0"><a href="#one">One</a></li>');
    });

    test("too few headings, no index - but the headings still get their ids", () => {
        const page = renderMarkdownPage("# כותרת\nטקסט\n## סעיף", "a.rtl.md");
        expect(page).not.toContain('class="index"');
        expect(page).toContain('<h1 id="כותרת">');
    });

    test("niqqud and punctuation leave the id, and a repeated heading gets a distinct one", () => {
        const page = renderMarkdownPage("## יוֹם רִאשׁוֹן: אוֹר\n## יום ראשון אור\n## `כָּל` - *המילה*", "a.rtl.md");
        expect(page).toContain('<h2 id="יום-ראשון-אור">');
        expect(page).toContain('<h2 id="יום-ראשון-אור-2">');
        expect(page).toContain('<h2 id="כל-המילה">');
        expect(page).toContain("<code>כָּל</code> - <em>המילה</em></a>");
    });

    test("a heading inside a pseudo-tag is not a section", () => {
        const page = renderMarkdownPage("## א\n## ב\n## ג\n<עיון>\n## בתוך העיון\n</עיון>", "a.rtl.md");
        expect(page).not.toContain(">בתוך העיון</a>");
    });

    test("a link in a heading keeps its text, without nesting a link in the entry", () => {
        const page = renderMarkdownPage("## [א](x.md)\n## ב\n## ג", "a.rtl.md");
        expect(page).toContain(`<a href="#${encodeURIComponent("א")}">א</a></li>`);
    });
});

describe("the page", () => {
    test("an RTL file gets a Hebrew right-to-left page, titled by its first heading", () => {
        const page = renderMarkdownPage("# שבעת ימי הבריאה\nטקסט", "פירוש/a.rtl.md");
        expect(page).toContain('<html lang="he" dir="rtl">');
        expect(page).toContain("<title>שבעת ימי הבריאה</title>");
        expect(page).toContain('<body class="rtl">');
    });

    test("an LTR file gets a left-to-right page, titled by its name when it has no heading", () => {
        const page = renderMarkdownPage("Some text", "docs/notes.md");
        expect(page).toContain('<html dir="ltr">');
        expect(page).toContain("<title>notes</title>");
    });
});
