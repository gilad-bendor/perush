import { describe, expect, test } from "bun:test";
import { expandIncludes, parseIncludeLine } from "../src/html/includes";
import type { EmbedError } from "../src/html/includes";

const loaderFor = (files: Record<string, string>) =>
    async (path: string) => files[path] ?? null;

/** The expansion of `files[entry]`, with the error markers turned back into their messages. */
async function expand(entry: string, files: Record<string, string>) {
    const { content, errors, dependencies } = await expandIncludes(entry, files[entry], loaderFor(files));
    const readable = content.replace(/error:(\d+)/g, (_, index) => `[${errors[Number(index)].id}]`);
    return { text: readable.split("\n").filter(line => line.trim()).join("\n"), errors, dependencies };
}

const messages = (errors: EmbedError[]) => errors.map(error => error.message);

describe("parseIncludeLine", () => {
    const directive = (line: string) => {
        const parsed = parseIncludeLine(line);
        if (parsed.kind !== "include") throw new Error(`expected an include, got: ${JSON.stringify(parsed)}`);
        return parsed.directive;
    };
    const message = (line: string) => {
        const parsed = parseIncludeLine(line);
        if (parsed.kind !== "error") throw new Error(`expected an error, got: ${JSON.stringify(parsed)}`);
        return parsed.message;
    };

    test("a line that does not hold the tag is none of its business", () => {
        expect(parseIncludeLine("סתם טקסט").kind).toBe("none");
        expect(parseIncludeLine("<עיון>").kind).toBe("none");
        expect(parseIncludeLine("<כלול-בהדפסהX מקור=\"a.md\">").kind).toBe("none");
    });

    test("reads the four attributes, in any of the four quote characters", () => {
        expect(directive('<כלול-בהדפסה מקור="a.md" מ=\'כותרת\' עד=׳אחרת׳ כותרות=״-2״>')).toEqual({
            source: "a.md",
            from: "כותרת",
            to: "אחרת",
            headingShift: -2,
        });
    });

    test("leading and trailing whitespace on the line is allowed", () => {
        expect(directive('   <כלול-בהדפסה מקור="a.md">  ').source).toBe("a.md");
    });

    test("anything else on the line is not", () => {
        expect(message('טקסט <כלול-בהדפסה מקור="a.md">')).toContain("לעמוד לבדו בשורה");
        expect(message('<כלול-בהדפסה מקור="a.md"> טקסט')).toContain("לעמוד לבדו בשורה");
    });

    test("an unquoted value, and quotes that do not match, are errors", () => {
        expect(message("<כלול-בהדפסה מקור=a.md>")).toContain("מוקף במרכאות");
        expect(message("<כלול-בהדפסה מקור=\"a.md'>")).toContain("אסור לערבב סוגי מרכאות");
        expect(message("<כלול-בהדפסה מקור=״a.md׳>")).toContain("אסור לערבב סוגי מרכאות");
    });

    test("מקור is mandatory, and the other names are checked", () => {
        expect(message("<כלול-בהדפסה>")).toContain('חסרה התכונה "מקור"');
        expect(message('<כלול-בהדפסה מקור="a.md" כותרת="x">')).toContain("תכונה לא מוכרת");
        expect(message('<כלול-בהדפסה מקור="a.md" מקור="b.md">')).toContain("יותר מפעם אחת");
        expect(message('<כלול-בהדפסה מקור>')).toContain("חסר ערך");
    });

    test("כותרות must be a signed one-digit number", () => {
        expect(directive('<כלול-בהדפסה מקור="a.md" כותרות="+1">').headingShift).toBe(1);
        expect(directive('<כלול-בהדפסה מקור="a.md" כותרות="-0">').headingShift).toBe(0);
        expect(message('<כלול-בהדפסה מקור="a.md" כותרות="2">')).toContain("עם סימן");
        expect(message('<כלול-בהדפסה מקור="a.md" כותרות="-12">')).toContain("חד-ספרתי");
    });

    test("a tag that is never closed", () => {
        expect(message('<כלול-בהדפסה מקור="a.md"')).toContain('אינו נסגר בתו ">"');
    });
});

describe("embedding a whole file", () => {
    test("the file's text takes the directive's place, its blank margins trimmed", async () => {
        const { text, errors } = await expand("a.rtl.md", {
            "a.rtl.md": 'לפני\n<כלול-בהדפסה מקור="b.rtl.md">\nאחרי',
            "b.rtl.md": "\n\n# כותרת\nגוף\n\n",
        });
        expect(errors).toEqual([]);
        expect(text).toBe("לפני\n# כותרת\nגוף\nאחרי");
    });

    test("every file it was built from is reported, at any depth", async () => {
        const { dependencies } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="dir/b.md">',
            "dir/b.md": '<כלול-בהדפסה מקור="../c.md">',
            "c.md": "עלה",
        });
        expect([...dependencies].sort()).toEqual(["a.md", "c.md", "dir/b.md"]);
    });

    test("a file that is not there is reported as a dependency all the same", async () => {
        const { errors, dependencies } = await expand("a.md", { "a.md": '<כלול-בהדפסה מקור="b.md">' });
        expect(messages(errors)[0]).toContain('הקובץ "b.md" לא נמצא');
        expect(dependencies.has("b.md")).toBe(true);
    });

    test("a directive inside a code fence is sample text", async () => {
        const { text, errors } = await expand("a.md", {
            "a.md": '```\n<כלול-בהדפסה מקור="b.md">\n```',
            "b.md": "גוף",
        });
        expect(errors).toEqual([]);
        expect(text).toContain("<כלול-בהדפסה");
        expect(text).not.toContain("גוף");
    });
});

describe("מ and עד", () => {
    const source = [
        "# פרק א",
        "טקסט א",
        "## סעיף א1",
        "טקסט א1",
        "# פרק ב",
        "טקסט ב",
        "# פרק ג",
        "טקסט ג",
    ].join("\n");

    const range = async (attributes: string) => (await expand("a.md", {
        "a.md": `<כלול-בהדפסה מקור="b.md" ${attributes}>`,
        "b.md": source,
    })).text;

    test("מ starts at its heading's own line", async () => {
        expect(await range('מ="פרק ב"')).toBe("# פרק ב\nטקסט ב\n# פרק ג\nטקסט ג");
    });

    test("עד stops before its heading - עד ולא עד בכלל", async () => {
        expect(await range('מ="פרק א" עד="פרק ב"')).toBe("# פרק א\nטקסט א\n## סעיף א1\nטקסט א1");
        expect(await range('עד="פרק ב"')).toBe("# פרק א\nטקסט א\n## סעיף א1\nטקסט א1");
    });

    test("a heading is found through its niqqud", async () => {
        const { text, errors } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" מ="ויאמר אלהים">',
            "b.md": "פתיחה\n## וַיֹּאמֶר אֱלֹהִים\nיהי אור",
        });
        expect(errors).toEqual([]);
        expect(text).toBe("## וַיֹּאמֶר אֱלֹהִים\nיהי אור");
    });

    test("a heading that is not there, or that is there twice", async () => {
        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" מ="אין כזאת">',
            "b.md": source,
        })).errors)[0]).toContain("לא נמצאה בקובץ");

        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" מ="פרק א">',
            "b.md": "# פרק א\nx\n# פרק א\ny",
        })).errors)[0]).toContain("ואי אפשר לדעת לאיזו מהן הכוונה");
    });

    test("עד before מ is an error", async () => {
        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" מ="פרק ב" עד="פרק א">',
            "b.md": source,
        })).errors)[0]).toContain('אינה מופיעה בקובץ "b.md" אחרי');
    });

    test("a heading inside a code fence is not one", async () => {
        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" מ="לא כותרת">',
            "b.md": "```\n# לא כותרת\n```",
        })).errors)[0]).toContain("לא נמצאה בקובץ");
    });
});

describe("כותרות", () => {
    test("moves every heading of the embedded block", async () => {
        const { text, errors } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" כותרות="-2">',
            "b.md": "### שלוש\nגוף\n#### ארבע",
        });
        expect(errors).toEqual([]);
        expect(text).toBe("# שלוש\nגוף\n## ארבע");
    });

    test("and nothing outside it", async () => {
        const { text } = await expand("a.md", {
            "a.md": '# של המארח\n<כלול-בהדפסה מקור="b.md" כותרות="+1">',
            "b.md": "# של המוטמע",
        });
        expect(text).toBe("# של המארח\n## של המוטמע");
    });

    test("a move off either end of the scale is an error", async () => {
        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" כותרות="-2">',
            "b.md": "# אחת",
        })).errors)[0]).toContain("מתחת לרמה 1");

        expect(messages((await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" כותרות="+2">',
            "b.md": "##### חמש",
        })).errors)[0]).toContain("מעל לרמה 6");
    });

    test("nested shifts compose", async () => {
        const { text } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md" כותרות="+1">',
            "b.md": '<כלול-בהדפסה מקור="c.md" כותרות="+1">',
            "c.md": "# אחת",
        });
        expect(text).toBe("### אחת");
    });
});

describe("the path in מקור", () => {
    const failure = async (source: string) => messages((await expand("dir/a.md", {
        "dir/a.md": `<כלול-בהדפסה מקור="${source}">`,
    })).errors)[0];

    test("must be relative", async () => {
        expect(await failure("/b.md")).toContain("חייב להיות יחסי");
    });

    test("must name a Markdown file", async () => {
        expect(await failure("b.txt")).toContain('שסיומתו ".md"');
    });

    test("may not climb out of the served tree", async () => {
        expect(await failure("../../b.md")).toContain("מחוץ לתיקיית השורש");
    });

    test("is resolved against the including file's own folder", async () => {
        const { text } = await expand("dir/a.md", {
            "dir/a.md": '<כלול-בהדפסה מקור="../top.md">',
            "top.md": "למעלה",
        });
        expect(text).toBe("למעלה");
    });
});

describe("cycles", () => {
    test("a file that embeds itself", async () => {
        const { errors } = await expand("a.md", { "a.md": '<כלול-בהדפסה מקור="a.md">' });
        expect(messages(errors)[0]).toContain("הפניה מעגלית");
    });

    test("a ring of three, named in full", async () => {
        const { errors } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md">',
            "b.md": '<כלול-בהדפסה מקור="c.md">',
            "c.md": '<כלול-בהדפסה מקור="a.md">',
        });
        expect(messages(errors)[0]).toContain("a.md ← b.md ← c.md ← a.md");
        expect(errors[0].file).toBe("c.md");
    });

    test("the same file twice, side by side, is not a cycle", async () => {
        const { text, errors } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="b.md">\n<כלול-בהדפסה מקור="b.md">',
            "b.md": "גוף",
        });
        expect(errors).toEqual([]);
        expect(text).toBe("גוף\nגוף");
    });
});

describe("links of an embedded file", () => {
    test("are rooted at the served tree, so they point where they used to", async () => {
        const { text } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="dir/b.md">',
            "dir/b.md": "[אחד](c.md) [שניים](../top.md#פרק) [חוץ](https://example.com/x.md) [כאן](#פרק)",
        });
        expect(text).toBe("[אחד](/dir/c.md) [שניים](/top.md#פרק) [חוץ](https://example.com/x.md) [כאן](#פרק)");
    });

    test("and rewriting them twice changes nothing", async () => {
        const { text } = await expand("a.md", {
            "a.md": '<כלול-בהדפסה מקור="x/b.md">',
            "x/b.md": '<כלול-בהדפסה מקור="y/c.md">',
            "x/y/c.md": "[אל](../d.md)",
        });
        expect(text).toBe("[אל](/x/d.md)");
    });

    test("the including file's own links are left as written", async () => {
        const { text } = await expand("dir/a.md", { "dir/a.md": "[אל](b.md)" });
        expect(text).toBe("[אל](b.md)");
    });
});

describe("errors", () => {
    test("are numbered in the order they are met, each naming its own file and line", async () => {
        const { errors } = await expand("a.md", {
            "a.md": 'ראש\n<כלול-בהדפסה מקור="b.md">\n<כלול-בהדפסה>',
            "b.md": "גוף\n<כלול-בהדפסה מקור=nope.md>",
        });
        expect(errors.map(error => [error.id, error.file, error.line])).toEqual([
            ["שגיאה-1", "b.md", 2],
            ["שגיאה-2", "a.md", 3],
        ]);
    });

    test("stand where the faulty directive stood, and the rest of the file is kept", async () => {
        const { text } = await expand("a.md", { "a.md": "לפני\n<כלול-בהדפסה>\nאחרי" });
        expect(text).toBe("לפני\n[שגיאה-1]\nאחרי");
    });

    test("a file cannot forge one", async () => {
        const { text, errors } = await expand("a.md", { "a.md": "error:0" });
        expect(errors).toEqual([]);
        expect(text).toBe("error:0");
    });
});
