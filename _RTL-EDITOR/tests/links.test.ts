import { describe, expect, test } from "bun:test";
import { markdownLinkAt, markdownLinksInLine, resolveMarkdownLink } from "../public/src/links.js";

describe("markdownLinksInLine", () => {
    test("finds a link and its span", () => {
        const line = "see [the intro](פירוש/הקדמה-לפירוש.rtl.md) for more";
        const links = markdownLinksInLine(line);
        expect(links).toHaveLength(1);
        expect(links[0].text).toBe("the intro");
        expect(links[0].rawTarget).toBe("פירוש/הקדמה-לפירוש.rtl.md");
        expect(line.slice(links[0].from, links[0].to)).toBe("[the intro](פירוש/הקדמה-לפירוש.rtl.md)");
    });

    test("finds several links in one line", () => {
        expect(markdownLinksInLine("[a](a.md) and [b](b.md)").map(link => link.rawTarget))
            .toEqual(["a.md", "b.md"]);
    });

    test("takes a pair of parentheses inside the target", () => {
        expect(markdownLinksInLine("[x](dir/a (1).md)")[0].rawTarget).toBe("dir/a (1).md");
    });

    test("ignores text that is not a link", () => {
        expect(markdownLinksInLine("[just brackets] and (just parens)")).toEqual([]);
        expect(markdownLinksInLine("nothing here")).toEqual([]);
    });

    test("an image's target is a link like any other", () => {
        expect(markdownLinksInLine("![alt](pic.png)")[0].rawTarget).toBe("pic.png");
    });
});

describe("markdownLinkAt", () => {
    const line = "aa [text](path.md) bb";
    const from = line.indexOf("[");
    const to = line.indexOf(")") + 1;

    test("covers the whole construct, from its first character", () => {
        expect(markdownLinkAt(line, from)?.rawTarget).toBe("path.md");
        expect(markdownLinkAt(line, from + 5)?.rawTarget).toBe("path.md");
        expect(markdownLinkAt(line, to - 1)?.rawTarget).toBe("path.md");
    });

    test("excludes the end offset, where a click in the line's empty space lands", () => {
        expect(markdownLinkAt(line, to)).toBeNull();
        expect(markdownLinkAt(line, from - 1)).toBeNull();
        expect(markdownLinkAt(line, 0)).toBeNull();
    });
});

describe("resolveMarkdownLink", () => {
    test("resolves against the linking file's own directory", () => {
        expect(resolveMarkdownLink("פירוש/1-בראשית/1010-א.rtl.md", "1020-ב.rtl.md"))
            .toEqual({ kind: "file", path: "פירוש/1-בראשית/1020-ב.rtl.md" });
        expect(resolveMarkdownLink("פירוש/1-בראשית/1010-א.rtl.md", "../הקדמה-לפירוש.rtl.md"))
            .toEqual({ kind: "file", path: "פירוש/הקדמה-לפירוש.rtl.md" });
        expect(resolveMarkdownLink("CLAUDE.md", "פירוש/הקדמה-לפירוש.rtl.md"))
            .toEqual({ kind: "file", path: "פירוש/הקדמה-לפירוש.rtl.md" });
        expect(resolveMarkdownLink("a/b/c.md", "./d.md"))
            .toEqual({ kind: "file", path: "a/b/d.md" });
    });

    test("a leading slash is the root of the served tree", () => {
        expect(resolveMarkdownLink("a/b/c.md", "/x/y.md")).toEqual({ kind: "file", path: "x/y.md" });
    });

    test("refuses to climb out of the served tree", () => {
        expect(resolveMarkdownLink("a/b.md", "../../outside.md")).toBeNull();
        expect(resolveMarkdownLink("a.md", "../outside.md")).toBeNull();
    });

    test("decodes a percent-encoded path", () => {
        expect(resolveMarkdownLink("a/b.md", "with%20space.md"))
            .toEqual({ kind: "file", path: "a/with space.md" });
        expect(resolveMarkdownLink("a/b.md", "%D7%90.md"))
            .toEqual({ kind: "file", path: "a/א.md" });
        expect(resolveMarkdownLink("a/b.md", "100%.md"))
            .toEqual({ kind: "file", path: "a/100%.md" });
    });

    test("drops an anchor, and refuses one that names no file", () => {
        expect(resolveMarkdownLink("a/b.md", "c.md#somewhere"))
            .toEqual({ kind: "file", path: "a/c.md" });
        expect(resolveMarkdownLink("a/b.md", "#somewhere")).toBeNull();
    });

    test("takes the path out of <> and drops a title", () => {
        expect(resolveMarkdownLink("a/b.md", "<a file.md>"))
            .toEqual({ kind: "file", path: "a/a file.md" });
        expect(resolveMarkdownLink("a/b.md", "<c.md> \"title\""))
            .toEqual({ kind: "file", path: "a/c.md" });
        expect(resolveMarkdownLink("a/b.md", "c.md \"title\""))
            .toEqual({ kind: "file", path: "a/c.md" });
        expect(resolveMarkdownLink("a/b.md", "c.md 'title'"))
            .toEqual({ kind: "file", path: "a/c.md" });
    });

    test("an address is not a path", () => {
        expect(resolveMarkdownLink("a/b.md", "https://example.com/x"))
            .toEqual({ kind: "external", url: "https://example.com/x" });
        expect(resolveMarkdownLink("a/b.md", "mailto:someone@example.com"))
            .toEqual({ kind: "external", url: "mailto:someone@example.com" });
        expect(resolveMarkdownLink("a/b.md", "//example.com/x"))
            .toEqual({ kind: "external", url: "//example.com/x" });
    });

    test("an empty target points nowhere", () => {
        expect(resolveMarkdownLink("a/b.md", "")).toBeNull();
        expect(resolveMarkdownLink("a/b.md", "   ")).toBeNull();
        expect(resolveMarkdownLink("a/b.md", "./")).toBeNull();
    });

    test("a directory is not a file to open", () => {
        expect(resolveMarkdownLink("a/b.md", "sub/")).toBeNull();
        expect(resolveMarkdownLink("a/b.md", "..")).toBeNull();
        expect(resolveMarkdownLink("a/b.md", "sub/..")).toBeNull();
        expect(resolveMarkdownLink("a/b.md", ".")).toBeNull();
    });
});
