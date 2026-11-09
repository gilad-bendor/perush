import { describe, expect, test } from "./test-kit.ts";
import { footnoteAt, parseFootnotes, referenceNumeral, referencesTo, unreferencedDefinitions } from "../public/src/footnotes.js";

/** A definition's note, as text. */
function body(text: string, label: string): string | undefined {
    const definition = parseFootnotes(text).definitions.get(label);
    return definition && text.slice(definition.bodyFrom, definition.bodyTo);
}

describe("parseFootnotes - references", () => {
    test("finds the references to defined notes, in order, with their spans", () => {
        const text = "a[^1] b[^x] c[^1]\n\n[^1]: one\n[^x]: ex";
        const { references } = parseFootnotes(text);
        expect(references.map(r => r.label)).toEqual(["1", "x", "1"]);
        expect(references.map(r => text.slice(r.from, r.to))).toEqual(["[^1]", "[^x]", "[^1]"]);
    });

    test("a reference to a note that is not defined is plain text", () => {
        expect(parseFootnotes("a[^zz] b[^1]\n\n[^1]: one").references.map(r => r.label)).toEqual(["1"]);
    });

    test("a label with a space is no label", () => {
        expect(parseFootnotes("a[^x y]\n\n[^x y]: no").definitions.size).toBe(0);
    });

    test("code is left out - a fence, and an inline code span", () => {
        const text = "```\na[^1]\n```\n`b[^1]` c[^1]\n\n[^1]: one";
        const { references } = parseFootnotes(text);
        expect(references).toHaveLength(1);
        expect(references[0].from).toBe(text.indexOf("c[^1]") + 1);
    });

    test("a note may refer to another note", () => {
        const text = "a[^1]\n\n[^1]: see[^2]\n[^2]: two";
        expect(parseFootnotes(text).references.map(r => r.label)).toEqual(["1", "2"]);
    });

    test("referencesTo() lists one note's references", () => {
        const footnotes = parseFootnotes("a[^1] b[^2] c[^1]\n\n[^1]: one\n[^2]: two");
        expect(referencesTo(footnotes, "1")).toHaveLength(2);
        expect(referencesTo(footnotes, "2")).toHaveLength(1);
    });
});

describe("parseFootnotes - a definition's note", () => {
    test("the marker is [^label], without the colon", () => {
        const text = "a[^1]\n\n[^1]: one";
        const definition = parseFootnotes(text).definitions.get("1")!;
        expect(text.slice(definition.markerFrom, definition.markerTo)).toBe("[^1]");
    });

    test("one line, blank space at its ends left out", () => {
        expect(body("a[^1]\n\n[^1]:   one  ", "1")).toBe("one");
    });

    test("a lazy line goes on with it, as on the page", () => {
        expect(body("a[^1]\n\n[^1]: one\nlazy two\n\nafter", "1")).toBe("one\nlazy two");
    });

    test("after a blank line, an indented line goes on with it", () => {
        expect(body("a[^1]\n\n[^1]: one\n\n    para two\n\nafter", "1")).toBe("one\n\n    para two");
    });

    test("after a blank line, a line at the margin does not", () => {
        expect(body("a[^1]\n\n[^1]: one\n\nafter", "1")).toBe("one");
    });

    test("a block of its own ends it - a list, a heading, a quote, a pseudo-tag, another definition", () => {
        for (const next of ["- item", "1. item", "# H", "> q", "<עיון>", "[^2]: two"]) {
            expect(body(`a[^1] b[^2]\n\n[^1]: one\n${next}\n\n[^2]: x`, "1")).toBe("one");
        }
    });

    test("a note may start on the line below", () => {
        expect(body("a[^1]\n\n[^1]:\n    body below", "1")).toBe("body below");
    });

    test("an empty note is empty, right after the colon", () => {
        const text = "a[^1]\n\n[^1]:";
        const definition = parseFootnotes(text).definitions.get("1")!;
        expect(definition.bodyFrom).toBe(text.length);
        expect(definition.bodyTo).toBe(text.length);
    });

    test("up to 3 spaces of indentation; 4 is code, not a definition", () => {
        expect(body("a[^1]\n\n   [^1]: three", "1")).toBe("three");
        expect(parseFootnotes("a[^1]\n\n    [^1]: four").definitions.size).toBe(0);
    });

    test("a label defined twice keeps its first note", () => {
        expect(body("a[^1]\n\n[^1]: first\n\n[^1]: second", "1")).toBe("first");
    });

    test("Hebrew text and labels", () => {
        expect(body("שלום[^א]\n\n[^א]: הערה ראשונה", "א")).toBe("הערה ראשונה");
    });
});

describe("mistakes", () => {
    test("a reference to a note nothing defines is listed apart", () => {
        const text = "a[^zz] b[^1] `c[^yy]`\n\n[^1]: one";
        const footnotes = parseFootnotes(text);
        expect(footnotes.undefinedReferences.map(r => text.slice(r.from, r.to))).toEqual(["[^zz]"]);
    });

    test("a note nothing refers to", () => {
        const footnotes = parseFootnotes("a[^1]\n\n[^1]: one\n[^2]: two, referred to only in code: `[^2]`");
        expect(unreferencedDefinitions(footnotes).map(d => d.label)).toEqual(["2"]);
    });

    test("a note referred to only from another note is referred to", () => {
        expect(unreferencedDefinitions(parseFootnotes("a[^1]\n\n[^1]: see[^2]\n[^2]: two"))).toEqual([]);
    });
});

describe("footnoteAt", () => {
    const text = "a[^1] b\n\n[^1]: one";
    const footnotes = parseFootnotes(text);
    const ref = text.indexOf("[^1]");
    const def = text.lastIndexOf("[^1]");

    test("a reference, from its first character to its last", () => {
        expect(footnoteAt(footnotes, ref)).toMatchObject({ reference: { label: "1" } });
        expect(footnoteAt(footnotes, ref + 3)).toMatchObject({ reference: { label: "1" } });
        expect(footnoteAt(footnotes, ref + 4)).toBeNull();
    });

    test("a definition's marker - not its colon", () => {
        expect(footnoteAt(footnotes, def)).toMatchObject({ definition: { label: "1" } });
        expect(footnoteAt(footnotes, def + 4)).toBeNull();
    });
});

describe("referenceNumeral", () => {
    test("➀ .. ➉, and plain numbers after them", () => {
        expect([1, 2, 3, 10, 11, 13].map(referenceNumeral)).toEqual(["➀", "➁", "➂", "➉", "11", "13"]);
    });
});
