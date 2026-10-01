import { describe, expect, test } from "bun:test";
import { hebrewSearchPattern } from "../public/src/hebrew-search.js";

// The flags CodeMirror compiles a search with (`u` included), case-insensitive.
const find = (query: string, text: string) => text.match(new RegExp(hebrewSearchPattern(query), "gmui"))?.[0] ?? null;

const SHIN = "ש", SHIN_DOT = "ׁ", SIN_DOT = "ׂ";

describe("marks in the text are skipped", () => {
    test("a query without niqqud finds the word with it", () => {
        expect(find("ויאמר", "רצף של וַיֹּאמֶר - רצף")).toBe("וַיֹּאמֶר");
    });
    test("and across gershayim inside a word", () => {
        expect(find("צהל", "חיילי צה״ל")).toBe("צה״ל");
    });
    test("and across a space", () => {
        expect(find("רוח אלהים", "וְרוּחַ אֱלֹהִים מְרַחֶפֶת")).toBe("רוּחַ אֱלֹהִים");
    });
});

describe("precomposed letters", () => {
    test("a plain letter finds its precomposed form", () => {
        expect(find("נפש", "עַל נַפְ\ufb2a\u05b6ךָ")).toBe("נַפְ\ufb2a\u05b6");
    });
    test("a precomposed letter finds the letter written with its mark", () => {
        expect(find("\ufb31", "בּית")).toBe("בּ");
    });
    test("a typed mark is found baked into a precomposed letter", () => {
        expect(find("בּ", "\ufb31ית")).toBe("\ufb31");
    });
    test("a precomposed query letter finds the same precomposed letter", () => {
        expect(find("\ufb31", "\ufb31ית")).toBe("\ufb31");
    });
});

describe("a mark typed in the query must be there", () => {
    test("a dagesh is not found on a letter without one", () => {
        expect(find("בּ", "בית")).toBeNull();
    });
    test("the marks may come in any order", () => {
        expect(find("בָּ", "בָּרא")).toBe("בָּ");
    });
});

describe("shin and sin", () => {
    const texts = {
        plain: SHIN,
        shinDot: SHIN + SHIN_DOT,
        sinDot: SHIN + SIN_DOT,
        precomposedShin: "\ufb2a",
        precomposedSin: "\ufb2b",
        shinDotAfterVowel: SHIN + "ָ" + SHIN_DOT,
        sinDotAfterVowel: SHIN + "ָ" + SIN_DOT,
    };
    const found = (query: string) => Object.entries(texts).filter(([, text]) => find(query, `א${text}ר`)).map(([name]) => name);

    test("a dotless ש finds every shin and sin, in either spelling", () => {
        expect(found(SHIN)).toEqual(Object.keys(texts));
    });
    test("שׁ finds a shin with no dot, or a shin dot - never a sin dot", () => {
        expect(found(SHIN + SHIN_DOT)).toEqual(["plain", "shinDot", "precomposedShin", "shinDotAfterVowel"]);
        expect(found("\ufb2a")).toEqual(["plain", "shinDot", "precomposedShin", "shinDotAfterVowel"]);
    });
    test("שׂ finds a shin with no dot, or a sin dot - never a shin dot", () => {
        expect(found(SHIN + SIN_DOT)).toEqual(["plain", "sinDot", "precomposedSin", "sinDotAfterVowel"]);
        expect(found("\ufb2b")).toEqual(["plain", "sinDot", "precomposedSin", "sinDotAfterVowel"]);
    });
});

describe("anything else is matched as it is", () => {
    test("RegExp syntax is literal", () => {
        expect(find("a.b (c)", "a.b (c) axb c")).toBe("a.b (c)");
    });
    test("punctuation that was not u-safe to escape before", () => {
        expect(find("ה-אלהים, #1", "את ה-אֱלֹהִים, #1")).toBe("ה-אֱלֹהִים, #1");
    });
    test("English is case-insensitive, as CodeMirror's flags say", () => {
        expect(find("weltgeist", "״Weltgeist״")).toBe("Weltgeist");
    });
});

describe("loose whitespace (terminal recordings)", () => {
    const findLoose = (query: string, text: string) =>
        text.match(new RegExp(hebrewSearchPattern(query, { looseWhitespace: true }), "gmui"))?.[0] ?? null;
    test("a space finds a line break and the indentation after it", () => {
        expect(findLoose("a b c", "x a\n    b c y")).toBe("a\n    b c");
    });
    test("a run of spaces in the query is one run", () => {
        expect(findLoose("a  \t b", "a b")).toBe("a b");
    });
    test("Hebrew still skips its marks around the whitespace", () => {
        expect(findLoose("רוח אלהים", "וְרוּחַ\n  אֱלֹהִים")).toBe("רוּחַ\n  אֱלֹהִים");
    });
    test("whitespace is still required", () => {
        expect(findLoose("a b", "ab")).toBeNull();
    });
    test("off by default: a space is a space", () => {
        expect(find("a b", "a\nb")).toBeNull();
    });
});
