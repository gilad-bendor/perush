import { describe, expect, test } from "bun:test";
import { editTableAtCursor, formatTables, isAiGeneratedFile, isRtlFile, isTableRuleLine, mirrorBoxCharacters, visualWidth } from "../public/src/tables.js";

/** Formats and returns just the text, for the common case where the cursor is irrelevant. */
function format(content: string, isRtl = false): string {
    return formatTables(content, isRtl).content;
}

/**
 * Formats content in which "%" marks the cursor, and returns the result with the mapped
 * cursor marked the same way. Makes the cursor-mapping expectations readable.
 */
function formatWithCursor(marked: string, isRtl = false): string {
    const position = marked.indexOf("%");
    expect(position).toBeGreaterThanOrEqual(0);
    const content = marked.slice(0, position) + marked.slice(position + 1);
    const result = formatTables(content, isRtl, [position]);
    return result.content.slice(0, result.positions[0]) + "%" + result.content.slice(result.positions[0]);
}

describe("visualWidth", () => {
    test("ignores Hebrew combining marks", () => {
        expect(visualWidth("לָאוֹר")).toBe(4);
        expect(visualWidth("abc")).toBe(3);
        expect(visualWidth("")).toBe(0);
    });
});

describe("isRtlFile", () => {
    test("*.rtl.md is always RTL", () => {
        expect(isRtlFile("a/b.rtl.md", "English only")).toBe(true);
    });
    test("*.md is decided by the first line holding a letter", () => {
        expect(isRtlFile("a/b.md", "\n\n# כותרת\nmixed english")).toBe(true);
        expect(isRtlFile("a/b.md", "# Title\nעברית")).toBe(false);
        expect(isRtlFile("a/b.md", "# כותרת with English")).toBe(false);
        expect(isRtlFile("a/b.md", "")).toBe(false);
    });
});

describe("mirrorBoxCharacters", () => {
    test("is its own inverse", () => {
        const nice = "┌──┬──┐\n│ a│ b│\n├──┼──┤\n└──┴──┘";
        expect(mirrorBoxCharacters(mirrorBoxCharacters(nice))).toBe(nice);
        expect(mirrorBoxCharacters(nice)).toBe("┐──┬──┌\n│ a│ b│\n┤──┼──├\n┘──┴──└");
    });
});

describe("format conversion", () => {
    const expected = [
        "┌───────┬──────┐",
        "│ a     │ b    │",
        "├───────┼──────┤",
        "│ one   │ two  │",
        "├───────┼──────┤",
        "│ three │ four │",
        "└───────┴──────┘",
    ].join("\n");

    test("Markdown becomes the box format", () => {
        expect(format([
            "| a | b |",
            "|---|---|",
            "| one | two |",
            "| three | four |",
        ].join("\n"))).toBe(expected);
    });

    test("a ragged Markdown table is squared up", () => {
        expect(format([
            "|a|b|",
            "|---|---|",
            "|one|two|",
            "|three|four|",
        ].join("\n"))).toBe(expected);
    });

    test("REVERSED-NICE input becomes NICE for an LTR file", () => {
        expect(format(mirrorBoxCharacters(expected))).toBe(expected);
    });

    test("NICE input becomes REVERSED-NICE for an RTL file", () => {
        expect(format(expected, true)).toBe(mirrorBoxCharacters(expected));
    });

    test("all three formats agree", () => {
        const markdown = "| a | b |\n|---|---|\n| one | two |\n| three | four |";
        expect(format(markdown)).toBe(format(expected));
        expect(format(markdown)).toBe(format(mirrorBoxCharacters(expected)));
    });

    test("is idempotent", () => {
        for (const isRtl of [false, true]) {
            const once = format(expected, isRtl);
            expect(format(once, isRtl)).toBe(once);
        }
    });

    test("Markdown alignment markers are honoured as separators and then dropped", () => {
        expect(format("| a | b |\n|:---|---:|\n| one | two |")).toBe([
            "┌─────┬─────┐",
            "│ a   │ b   │",
            "├─────┼─────┤",
            "│ one │ two │",
            "└─────┴─────┘",
        ].join("\n"));
    });
});

describe("layout rules", () => {
    test("every row is start-aligned - there is no header row", () => {
        expect(format("| aa | b |\n|---|---|\n| c | dddd |")).toBe([
            "┌────┬──────┐",
            "│ aa │ b    │",
            "├────┼──────┤",
            "│ c  │ dddd │",
            "└────┴──────┘",
        ].join("\n"));
    });

    test("a single-row table has no header", () => {
        expect(format("| a | bbbb |")).toBe([
            "┌───┬──────┐",
            "│ a │ bbbb │",
            "└───┴──────┘",
        ].join("\n"));
    });

    test("the minimum column width is two", () => {
        expect(format("┌──┬──┐\n│  │  │\n└──┴──┘")).toBe("┌──┬──┐\n│  │  │\n└──┴──┘");
        expect(format("│x││\n")).toBe("┌───┬──┐\n│ x │  │\n└───┴──┘\n");
    });

    test("column width ignores Hebrew Nikud", () => {
        expect(format("| לָאוֹר | b |\n|---|---|\n| c | d |")).toBe([
            "┌──────┬───┐",
            "│ לָאוֹר │ b │",
            "├──────┼───┤",
            "│ c    │ d │",
            "└──────┴───┘",
        ].join("\n"));
    });

    test("multi-line cells keep their line breaks and are not re-wrapped", () => {
        const table = [
            "┌──────┬──────┐",
            "│ a    │ b    │",
            "│ cont │      │",
            "└──────┴──────┘",
        ].join("\n");
        expect(format(table)).toBe([
            "┌──────┬───┐",
            "│ a    │ b │",
            "│ cont │   │",
            "└──────┴───┘",
        ].join("\n"));
    });

    test("indented tables keep their indentation", () => {
        expect(format("  | a | b |\n  |---|---|\n  | c | d |")).toBe([
            "  ┌───┬───┐",
            "  │ a │ b │",
            "  ├───┼───┤",
            "  │ c │ d │",
            "  └───┴───┘",
        ].join("\n"));
    });
});

describe("what is not a table", () => {
    test("prose mentioning pipes is left alone", () => {
        const prose = 'type X = "a" | "b" | "c" | "d";';
        expect(format(prose)).toBe(prose);
    });

    test("a line that starts but does not end with a pipe is left alone", () => {
        const prose = "| this is not a table row, it just starts with a pipe | and trails off";
        expect(format(prose)).toBe(prose);
    });

    test("two pipes are not enough", () => {
        expect(format("| a |")).toBe("| a |");
    });

    test("tables inside a fenced code block are left alone", () => {
        const fenced = "```\n| a | b |\n|---|---|\n| c | d |\n```";
        expect(format(fenced)).toBe(fenced);
    });

    test("surrounding text is preserved verbatim", () => {
        const document = "before\n\n| a | b |\n\nafter";
        expect(format(document)).toBe("before\n\n┌───┬───┐\n│ a │ b │\n└───┴───┘\n\nafter");
    });
});

describe("cursor mapping", () => {
    test("a cursor outside any table shifts with the text before it", () => {
        expect(formatWithCursor("|a|b|\n\ndone%")).toBe("┌───┬───┐\n│ a │ b │\n└───┴───┘\n\ndone%");
    });

    test("a cursor inside a cell stays on the same character", () => {
        expect(formatWithCursor("|ab%c|d|")).toBe("┌─────┬───┐\n│ ab%c │ d │\n└─────┴───┘");
    });

    test("a trailing space is trimmed but the cursor keeps its place in the padding", () => {
        // The user typed a space at the end of "ab": the space itself is dropped, but the
        // cursor stays one position past the text, so the next character lands after a space.
        expect(formatWithCursor("┌────┬────┐\n│ ab %│ cd │\n└────┴────┘")).toBe(
            "┌────┬────┐\n│ ab %│ cd │\n└────┴────┘");
    });

    test("typing after that padding cursor produces exactly one space", () => {
        expect(format("┌────┬────┐\n│ ab x│ cd │\n└────┴────┘")).toBe(
            "┌──────┬────┐\n│ ab x │ cd │\n└──────┴────┘");
    });

    test("spaces inside a cell are never collapsed", () => {
        expect(format("| a   y   z | b |")).toBe([
            "┌───────────┬───┐",
            "│ a   y   z │ b │",
            "└───────────┴───┘",
        ].join("\n"));
    });

    test("a cursor on a Markdown separator row lands on the rule that replaces it", () => {
        const result = formatWithCursor("| a | b |\n|-%--|---|\n| c | d |");
        expect(result.split("\n")[2]).toContain("%");
        expect(result.split("\n")[2].replace("%", "")).toBe("├───┼───┤");
    });
});

describe("table-aware editing", () => {
    /**
     * Applies an operation at the "%" marker and returns the result with the new cursor
     * marked the same way, or "(null)" when the cursor was not inside a table.
     */
    function edit(marked: string, operation: "split" | "addRow" | "deleteForward" | "deleteBackward"): string {
        const position = marked.indexOf("%");
        expect(position).toBeGreaterThanOrEqual(0);
        const content = marked.slice(0, position) + marked.slice(position + 1);
        const result = editTableAtCursor(content, false, position, operation);
        if (!result) {
            return "(null)";
        }
        return result.content.slice(0, result.positions[0]) + "%" + result.content.slice(result.positions[0]);
    }

    test("Enter splits the cell and puts the cursor on the new line", () => {
        expect(edit("┌───────┬───┐\n│ ab%cd │ x │\n└───────┴───┘", "split")).toBe([
            "┌────┬───┐",
            "│ ab │ x │",
            "│ %cd │   │",
            "└────┴───┘",
        ].join("\n"));
    });

    test("Enter outside a table is left to the editor", () => {
        expect(edit("plain te%xt", "split")).toBe("(null)");
    });

    test("Delete at the end of a cell line joins it with the next", () => {
        expect(edit([
            "┌────┬───┐",
            "│ ab%│ x │",
            "│ cd │   │",
            "└────┴───┘",
        ].join("\n"), "deleteForward")).toBe("┌──────┬───┐\n│ ab%cd │ x │\n└──────┴───┘");
    });

    test("Backspace at the start of a cell line joins it with the previous", () => {
        expect(edit([
            "┌────┬───┐",
            "│ ab │ x │",
            "│ %cd │   │",
            "└────┴───┘",
        ].join("\n"), "deleteBackward")).toBe("┌──────┬───┐\n│ ab%cd │ x │\n└──────┴───┘");
    });

    test("a merge only drops the row's last line when every column is empty there", () => {
        // The second column still has text on line 2, so the row keeps both lines.
        const result = edit([
            "┌────┬─────┐",
            "│ ab │ x   │",
            "│ %cd │ y   │",
            "└────┴─────┘",
        ].join("\n"), "deleteBackward");
        expect(result.split("\n").length).toBe(4);
        expect(result).toContain("ab%cd");
        expect(result).toContain("y");
    });

    test("Enter then Backspace round-trips", () => {
        const start = "┌──────┬───┐\n│ abcd │ x │\n└──────┴───┘";
        const split = editTableAtCursor(start, false, start.indexOf("cd"), "split")!;
        const merged = editTableAtCursor(split.content, false, split.positions[0], "deleteBackward")!;
        expect(merged.content).toBe(start);
        expect(merged.positions[0]).toBe(start.indexOf("cd"));
    });

    test("Backspace on the opening box character is swallowed, not allowed to break the grid", () => {
        const table = "┌────┬───┐\n│ ab │ x │\n└────┴───┘";
        const result = editTableAtCursor(table, false, table.indexOf("│ ab") + 1, "deleteBackward")!;
        expect(result.content).toBe(table);
    });

    test("a keystroke on a rule line is swallowed", () => {
        const table = "┌────┬───┐\n│ ab │ x │\n└────┴───┘";
        const result = editTableAtCursor(table, false, 3, "split")!;
        expect(result.content).toBe(table);
    });
});

describe("escaped pipes", () => {
    test("a \\| inside a Markdown cell is text, not a separator", () => {
        expect(format("| a | x \\| y |\n|---|---|\n| b | c |")).toBe([
            "┌───┬────────┐",
            "│ a │ x \\| y │",
            "├───┼────────┤",
            "│ b │ c      │",
            "└───┴────────┘",
        ].join("\n"));
    });

    test("a row ending in an escaped pipe is not a table row", () => {
        const prose = "| a | b \\|";
        expect(format(prose)).toBe(prose);
    });
});

describe("adding a row", () => {
    function addRow(marked: string): string {
        const position = marked.indexOf("%");
        const content = marked.slice(0, position) + marked.slice(position + 1);
        const result = editTableAtCursor(content, false, position, "addRow");
        if (!result) {
            return "(null)";
        }
        return result.content.slice(0, result.positions[0]) + "%" + result.content.slice(result.positions[0]);
    }

    test("at the end of a cell it starts an empty row", () => {
        expect(addRow([
            "┌─────┬─────┐",
            "│ a   │ b   │",
            "├─────┼─────┤",
            "│ one%│ two │",
            "└─────┴─────┘",
        ].join("\n"))).toBe([
            "┌─────┬─────┐",
            "│ a   │ b   │",
            "├─────┼─────┤",
            "│ one │ two │",
            "├─────┼─────┤",
            "│ %    │     │",
            "└─────┴─────┘",
        ].join("\n"));
    });

    test("mid-cell it carries the text after the cursor into the new row", () => {
        expect(addRow([
            "┌─────┬─────┐",
            "│ a   │ b   │",
            "├─────┼─────┤",
            "│ o%ne │ two │",
            "└─────┴─────┘",
        ].join("\n"))).toBe([
            "┌────┬─────┐",
            "│ a  │ b   │",
            "├────┼─────┤",
            "│ o  │ two │",
            "├────┼─────┤",
            "│ %ne │     │",
            "└────┴─────┘",
        ].join("\n"));
    });

    test("the new row goes below the whole current row, not inside it", () => {
        const result = addRow([
            "┌──────┬──────┐",
            "│ a%aa  │ bbb  │",
            "│ cont │ more │",
            "└──────┴──────┘",
        ].join("\n"));
        // The current row keeps both of its lines; the new row follows the separator.
        expect(result.split("\n")).toEqual([
            "┌──────┬──────┐",
            "│ a    │ bbb  │",
            "│ cont │ more │",
            "├──────┼──────┤",
            "│ %aa   │      │",
            "└──────┴──────┘",
        ]);
    });

    test("outside a table it is left to the editor", () => {
        expect(addRow("plain te%xt")).toBe("(null)");
    });

    test("on a rule line it is swallowed", () => {
        const table = "┌────┬───┐\n│ ab │ x │\n└────┴───┘";
        expect(editTableAtCursor(table, false, 3, "addRow")!.content).toBe(table);
    });
});

describe("the on-disk form", () => {
    // The server's POST handler writes formatTables(content, false), so that text is by
    // definition the canonical disk form. The editor decides whether a freshly-opened file
    // needs saving by asking whether it already equals that - which only works if the
    // properties below hold.
    const markdown = "כותרת\n\n| א | ב |\n|---|---|\n| ג | ד |\n\nסוף";
    const onDisk = formatTables(markdown, false).content;
    const inRtlEditor = formatTables(markdown, true).content;

    test("the disk form is a fixed point, so a correct file is never re-saved", () => {
        expect(formatTables(onDisk, false).content).toBe(onDisk);
    });

    test("the RTL editor form saves back to exactly the disk form", () => {
        expect(inRtlEditor).not.toBe(onDisk);                       // mirrored, so they differ...
        expect(formatTables(inRtlEditor, false).content).toBe(onDisk);   // ...but round-trip exactly
    });

    test("the disk form re-opens as the same editor form", () => {
        expect(formatTables(onDisk, true).content).toBe(inRtlEditor);
    });

    test("a file left mirrored on disk is recognised as needing a save", () => {
        // This is the regression: the editor used to compare its own text with the file's, which
        // always differ for an RTL file with a table - so a mirrored file looked unchanged and
        // stayed broken, while a correct one was pointlessly re-saved on every open.
        expect(formatTables(inRtlEditor, false).content).not.toBe(inRtlEditor);
        expect(formatTables(onDisk, false).content).toBe(onDisk);
    });
});

describe("AI-generated files", () => {
    test("*.ai.md and *.ai.rtl.md are recognised", () => {
        expect(isAiGeneratedFile("ניתוחים/דור.ai.rtl.md")).toBe(true);
        expect(isAiGeneratedFile("notes.ai.md")).toBe(true);
    });

    test("ordinary files are not", () => {
        expect(isAiGeneratedFile("פירוש/1010-בראשית.rtl.md")).toBe(false);
        expect(isAiGeneratedFile("notes.md")).toBe(false);
        expect(isAiGeneratedFile("ai.md")).toBe(false);             // no ".ai" suffix, just the name
        expect(isAiGeneratedFile("transcript.script.rtl.md")).toBe(false);
    });

    test("the exemption is on the path, not the content", () => {
        // The callers - openFile(), updateFromServer() and the POST handler - skip formatTables()
        // entirely for these paths; the formatter itself has no opinion about them.
        const markdown = "| a | b |\n|---|---|\n| c | d |";
        expect(formatTables(markdown, true).content).not.toBe(markdown);
    });
});

describe("isTableRuleLine", () => {
    test("recognises every rule, in both spellings", () => {
        for (const rule of ["┌──┬──┐", "├──┼──┤", "└──┴──┘", "┐──┬──┌", "┤──┼──├", "┘──┴──└"]) {
            expect(isTableRuleLine(rule)).toBe(true);
        }
    });

    test("ignores indentation", () => {
        expect(isTableRuleLine("    ├──┼──┤")).toBe(true);
    });

    test("a row of cells is not a rule", () => {
        expect(isTableRuleLine("│ a │ b │")).toBe(false);
        expect(isTableRuleLine("│ a─b │ c │")).toBe(false);   // a dash inside a cell
        expect(isTableRuleLine("plain text")).toBe(false);
        expect(isTableRuleLine("---")).toBe(false);
    });
});

describe("ordinary deletion inside a cell", () => {
    // The regression: these used to return the document unchanged, which the key handler read as
    // "swallow this keystroke" - so Delete and Backspace did nothing at all inside a cell.
    // They must return null instead, leaving CodeMirror to delete the character normally.
    const table = ["┌──────┬───┐",
                   "│ abcd │ x │",
                   "└──────┴───┘"].join("\n");
    const cell = table.indexOf("abcd");

    test("Delete in the middle of a cell is left to the editor", () => {
        expect(editTableAtCursor(table, false, cell + 2, "deleteForward")).toBeNull();
    });

    test("Backspace in the middle of a cell is left to the editor", () => {
        expect(editTableAtCursor(table, false, cell + 2, "deleteBackward")).toBeNull();
    });

    test("Delete just before the cell's last character is left to the editor", () => {
        expect(editTableAtCursor(table, false, cell + 3, "deleteForward")).toBeNull();
    });

    test("Backspace just after the cell's first character is left to the editor", () => {
        expect(editTableAtCursor(table, false, cell + 1, "deleteBackward")).toBeNull();
    });

    test("Backspace in the trailing padding is left to the editor", () => {
        // "│ ab   │" - the cursor sits two spaces past the text; Backspace should eat one of
        // them, walking back towards the text, which is exactly what the editor does anyway.
        const padded = "┌──────┬───┐\n│ ab   │ x │\n└──────┴───┘";
        expect(editTableAtCursor(padded, false, padded.indexOf("ab") + 4, "deleteBackward")).toBeNull();
    });

    test("but at the very end of a single-line cell the key is still swallowed", () => {
        // Nothing to join onto, and the next character is the cell's "│".
        expect(editTableAtCursor(table, false, cell + 4, "deleteForward")!.content).toBe(table);
    });

    test("and at the very start of a single-line cell too", () => {
        expect(editTableAtCursor(table, false, cell, "deleteBackward")!.content).toBe(table);
    });
});
