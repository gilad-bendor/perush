import { describe, expect, test } from "bun:test";
import { markdownToHtml, renderMarkdownPage } from "../src/html/md-to-html";
import type { EmbedError } from "../src/html/includes";

const html = (markdown: string) => markdownToHtml(markdown).trim();

describe("readable Markdown", () => {
    test("a single line break is a line break", () => {
        expect(html("שורה אחת\nשורה שתיים")).toBe("<p>שורה אחת<br>\nשורה שתיים</p>");
    });

    test("the syntax characters are gone", () => {
        expect(html("## כותרת")).toBe('<h2 id="כותרת">כותרת</h2>');
        expect(html("**מודגש** ו-*נטוי*")).toBe("<p><strong>מודגש</strong> ו-<em>נטוי</em></p>");
        expect(html("> בראשית א א")).toBe("<blockquote>\n<p>בראשית א א</p>\n</blockquote>");
    });

    test("raw HTML is shown as text, never let through", () => {
        expect(html('<div dir="rtl">')).toBe("<p>&lt;div dir=&quot;rtl&quot;&gt;</p>");
    });
});

describe("the raw-HTML fence", () => {
    test("a ```html fence goes to the page as it is, its own lines gone", () => {
        expect(html('לפני\n\n```html\n<div class="x">שלום <b>עולם</b></div>\n```\n\nאחרי')).toBe([
            "<p>לפני</p>",
            '<div class="x">שלום <b>עולם</b></div>',
            "<p>אחרי</p>",
        ].join("\n"));
    });

    test("the text between the fences is not touched - not even text that is not HTML", () => {
        expect(html("```html\na *b* `c` <עיון>\n```")).toBe("a *b* `c` <עיון>");
    });

    test("the info string is read as a language: `html` whatever follows it, and nothing else", () => {
        expect(html("```HTML  הערה\n<hr>\n```")).toBe("<hr>");
        expect(html("```htmlish\n<hr>\n```")).toBe('<pre><code class="language-htmlish">&lt;hr&gt;\n</code></pre>');
    });

    test("every other fence is still a code block, escaped", () => {
        expect(html("```\n<div>x</div>\n```")).toBe("<pre><code>&lt;div&gt;x&lt;/div&gt;\n</code></pre>");
        expect(html("```js\nlet a = 1 < 2;\n```")).toBe('<pre><code class="language-js">let a = 1 &lt; 2;\n</code></pre>');
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

    test("a Markdown table's declared header becomes a thead of th cells", () => {
        expect(html("| x | y |\n|---|---|\n| 1 | 2 |")).toBe([
            "<table>",
            "<thead>", "<tr>", "<th>x</th>", "<th>y</th>", "</tr>", "</thead>",
            "<tbody>", "<tr>", "<td>1</td>", "<td>2</td>", "</tr>", "</tbody>",
            "</table>",
        ].join("\n"));
    });

    test("a box table's doubled rule says the same thing", () => {
        const out = html("┌───┬───┐\n│ x │ y │\n╞═══╪═══╡\n│ 1 │ 2 │\n└───┴───┘");
        expect(out).toContain("<th>x</th>");
        expect(out).toContain("<td>1</td>");
        expect(out).not.toContain("═");
    });

    test("a Markdown table with no separator row declares no header", () => {
        const out = html("| x | y |\n| 1 | 2 |");
        expect(out).not.toContain("<th");
        expect(out).toContain("<td>x</td>");
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
            '<h3 id="כותרת">כותרת</h3>',
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

    test("a void tag is a box of its caption alone, and closes nothing", () => {
        expect(html('טקסט\n<כלול-בהדפסה קטע="א">\nעוד טקסט')).toBe([
            "<p>טקסט</p>",
            '<div class="pseudo-tag" data-tag="כלול-בהדפסה">',
            '<div class="pseudo-tag-caption">כלול-בהדפסה: א</div>',
            "</div>",
            "<p>עוד טקסט</p>",
        ].join("\n"));
    });

    test("a void tag inside another tag leaves it closing as it was", () => {
        const out = html("<עיון>\n<כלול-בהדפסה>\n</עיון>\nאחרי");
        expect(out).toMatch(/<\/div>\n<\/div>\n<p>אחרי<\/p>$/);
    });

    test("an ASCII tag name is not a pseudo-tag", () => {
        expect(html("<div>\ntext\n</div>")).not.toContain("pseudo-tag");
    });
});

describe("the errors of the included files", () => {
    const errors: EmbedError[] = [
        { id: "שגיאה-1", file: "פירוש/a.rtl.md", line: 12, message: 'חסרה התכונה "מקור"' },
        { id: "שגיאה-2", file: "פירוש/b.rtl.md", line: 3, message: "הפניה מעגלית" },
    ];
    const marker = (index: number) => `\uE000error:${index}\uE000`;

    test("a marker becomes the block that says what is wrong, where it went wrong", () => {
        expect(markdownToHtml(`לפני\n\n${marker(0)}\n\nאחרי`, { errors }).trim()).toBe([
            "<p>לפני</p>",
            '<div class="embed-error" id="שגיאה-1">שגיאה-1 &ndash; פירוש/a.rtl.md, שורה 12: חסרה התכונה &quot;מקור&quot;</div>',
            "<p>אחרי</p>",
        ].join("\n"));
    });

    test("a marker with no error behind it leaves nothing", () => {
        expect(markdownToHtml(marker(7), { errors })).toBe("");
    });

    test("a line that merely looks like one is text", () => {
        expect(markdownToHtml("error:0", { errors }).trim()).toBe("<p>error:0</p>");
    });

    test("the page opens with the list of them, each linking to its own block", () => {
        const page = renderMarkdownPage(`${marker(0)}\n\n# כותרת\n\n${marker(1)}`, "פירוש/a.rtl.md", { errors });
        const list = page.slice(page.indexOf("<main>"), page.indexOf("</nav>"));
        expect(list).toContain("<div class=\"embed-errors-title\">שגיאות</div>");
        expect(list).toContain(`<a href="#${encodeURIComponent("שגיאה-1")}">שגיאה-1 &ndash; פירוש/a.rtl.md, שורה 12:`);
        expect(list).toContain(`<a href="#${encodeURIComponent("שגיאה-2")}">שגיאה-2 &ndash; פירוש/b.rtl.md, שורה 3:`);
        // And before the index, which is itself before the body.
        expect(page.indexOf('class="embed-errors"')).toBeLessThan(page.indexOf("<h1"));
    });

    test("an LTR page calls them Errors", () => {
        expect(renderMarkdownPage(marker(0), "docs/notes.md", { errors })).toContain("<div class=\"embed-errors-title\">Errors</div>");
    });

    test("a page with no errors says nothing of them", () => {
        expect(renderMarkdownPage("טקסט", "a.rtl.md")).not.toContain('<nav class="embed-errors">');
    });
});

describe("links", () => {
    test("go through hrefFor, as written", () => {
        const out = markdownToHtml("[קישור](../ניתוחים/עדן.rtl.md#x)", { hrefFor: href => `[${href}]` });
        expect(decodeURI(out.match(/href="([^"]*)"/)![1])).toBe("[../ניתוחים/עדן.rtl.md#x]");
    });
});

describe("the index", () => {
    const TAG = "<תוכן-העניינים>";
    const sections = `${TAG}\n# חלק א\n## א1. ההצעה\n### פרט\n#### עמוק מדי\n# חלק ב\n`;

    test("the tag's line becomes the index, linking every section down to ###", () => {
        const page = renderMarkdownPage(sections, "פירוש/a.rtl.md");
        expect(page).toMatch(/<main>\n<nav class="index">\n<details open>\n<summary>תוכן העניינים<\/summary>/);
        expect(page.match(/<li class="index-depth-(\d)">/g)).toEqual([
            '<li class="index-depth-0">', '<li class="index-depth-1">', '<li class="index-depth-2">', '<li class="index-depth-0">',
        ]);
        expect(page).not.toContain(">עמוק מדי</a>");
        expect(page).toContain('<h2 id="א1-ההצעה">');
        expect(page).toContain(`<a href="#${encodeURIComponent("א1-ההצעה")}">א1. ההצעה</a>`);
    });

    test("no tag, no index - but the headings still get their ids", () => {
        const page = renderMarkdownPage(sections.replace(`${TAG}\n`, ""), "פירוש/a.rtl.md");
        expect(page).not.toContain('class="index"');
        expect(page).toContain('<h2 id="א1-ההצעה">');
    });

    test("the index stands where the tag stood, not at the top of the page", () => {
        const page = renderMarkdownPage(`# כותרת\n\nפתיחה\n\n${TAG}\n\n## סעיף`, "a.rtl.md");
        expect(page.indexOf("<p>פתיחה</p>")).toBeLessThan(page.indexOf('<nav class="index">'));
        expect(page.indexOf('<nav class="index">')).toBeLessThan(page.indexOf('<h2 id="סעיף">'));
    });

    test("an LTR page calls it Contents", () => {
        const page = renderMarkdownPage(`Notes\n\n${TAG}\n## One\n## Two`, "docs/notes.md");
        expect(page).toContain("<summary>Contents</summary>");
        expect(page).toContain('<li class="index-depth-0"><a href="#one">One</a></li>');
    });

    test("a single heading is index enough - the file asked for one", () => {
        expect(renderMarkdownPage(`Notes\n\n${TAG}\n## One`, "docs/notes.md")).toContain('<a href="#one">One</a>');
    });

    test("an index lists the headings below it, and only those", () => {
        const page = renderMarkdownPage(`## לפני\n${TAG}\n## אחרי`, "a.rtl.md");
        expect(page).toContain(">אחרי</a>");
        expect(page).not.toContain(">לפני</a>");
        // The heading above it is not listed, but it is still a place a link can point at.
        expect(page).toContain('<h2 id="לפני">');
    });

    test("a tag below the last heading leaves no trace", () => {
        const page = renderMarkdownPage(`## א\n## ב\n\n${TAG}`, "a.rtl.md");
        expect(page).not.toContain('class="index"');
        expect(page).not.toContain(TAG);
    });

    test("a file with no heading to list drops the tag's line rather than showing an empty box", () => {
        const page = renderMarkdownPage(`${TAG}\n\nטקסט`, "a.rtl.md");
        expect(page).not.toContain('class="index"');
        expect(page).not.toContain(TAG);
    });

    test("anything else on the line, and it is an ordinary line of text", () => {
        expect(html(`${TAG} כאן\n## סעיף`)).not.toContain('class="index"');
        expect(html(`לפני ${TAG}\n## סעיף`)).not.toContain('class="index"');
    });

    test("every tag line of a file gets an index, each of what follows it", () => {
        const page = renderMarkdownPage(`${TAG}\n## א\n${TAG}\n## ב`, "a.rtl.md");
        const indexes = page.split('<nav class="index">').slice(1);
        expect(indexes).toHaveLength(2);
        expect(indexes[0]).toContain(">א</a>");
        expect(indexes[1]).not.toContain(">א</a>");
        expect(indexes[1]).toContain(">ב</a>");
    });

    test("niqqud and punctuation leave the id, and a repeated heading gets a distinct one", () => {
        const page = renderMarkdownPage(`${TAG}\n## יוֹם רִאשׁוֹן: אוֹר\n## יום ראשון אור\n## \`כָּל\` - *המילה*`, "a.rtl.md");
        expect(page).toContain('<h2 id="יום-ראשון-אור">');
        expect(page).toContain('<h2 id="יום-ראשון-אור-2">');
        expect(page).toContain('<h2 id="כל-המילה">');
        expect(page).toContain("<code>כָּל</code> - <em>המילה</em></a>");
    });

    test("a heading inside a pseudo-tag is not a section", () => {
        const page = renderMarkdownPage(`${TAG}\n## א\n<עיון>\n## בתוך העיון\n</עיון>`, "a.rtl.md");
        expect(page).not.toContain(">בתוך העיון</a>");
    });

    test("a link in a heading keeps its text, without nesting a link in the entry", () => {
        const page = renderMarkdownPage(`${TAG}\n## [א](x.md)\n## ב`, "a.rtl.md");
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
