import { describe, expect, test } from "bun:test";
import { applyVerseLayout, breakPenalty, labeledLines, proposeRows } from "../src/html/verse-layout";
import { ROW_MARK } from "../src/html/verse-runs";

describe("lines and their names", () => {
    test("a repeated label is named by its occurrence; a fence and prose are no lines", () => {
        const content = "# x\n**1** א\n**2** ב\nפרוזה **3**\n```\n**9** קוד\n```\n**1** ג\n**36א** ד\n**ת0.1** ה";
        expect(labeledLines(content).map(line => [line.index, line.key])).toEqual([[1, "1"], [2, "2"], [7, "1#2"], [8, "36א"]]);
    });

    test("a layout marks the lines that start a row, and reports the names that match none", () => {
        const { content, unknownRows } = applyVerseLayout("**1** א\n**2** ב\n**1** ג", { rows: ["2", "1#2", "7"] });
        expect(content).toBe(`**1** א\n${ROW_MARK}**2** ב\n${ROW_MARK}**1** ג`);
        expect(unknownRows).toEqual(["7"]);
    });

    test("marks already in the text are not doubled", () => {
        expect(applyVerseLayout(`${ROW_MARK}**1** א`, { rows: ["1"] }).content).toBe(`${ROW_MARK}**1** א`);
    });
});

describe("proposing rows", () => {
    const line = (text: string, width = 10) => ({ key: text, width, text });

    test("a sentence's end is a better place to break than the middle of a clause", () => {
        expect(breakPenalty("קראו.")).toBe(0);
        expect(breakPenalty("לו;[^4]")).toBe(0);
        expect(breakPenalty("„אמר:״")).toBe(0);
        expect(breakPenalty("הארץ,")).toBeLessThan(breakPenalty("הבן הראשון"));
        expect(breakPenalty("השבעה(?)")).toBe(12);
        expect(breakPenalty("קדמון?")).toBe(4);
        expect(breakPenalty("מי הוא?'")).toBe(0);
        expect(breakPenalty("לו.", "ואמר")).toBe(4);
        expect(breakPenalty("לו.", "[ו]אמר")).toBe(4);
    });

    test("rows are filled, and never overfilled", () => {
        const lines = Array.from({ length: 10 }, (_, i) => line(`w${i},`));
        const starts = proposeRows(lines, 45, 1);
        expect(starts[0]).toBe(0);
        for (let i = 0; i < starts.length; i++) {
            const end = starts[i + 1] ?? lines.length;
            expect((end - starts[i]) * 10 + (end - starts[i] - 1)).toBeLessThanOrEqual(45);
        }
        expect(starts).toEqual([0, 4, 8]);
    });

    test("a row gives up a little width to end where the text pauses", () => {
        const lines = [line("a", 12), line("b.", 12), line("c", 6), line("d"), line("e")];
        // Three fit the first row exactly; the full stop is after two.
        expect(proposeRows(lines, 32, 1)).toEqual([0, 2]);
        expect(proposeRows(lines, 32, 1, true)).toEqual([0, 3]);
    });

    test("a line too wide for any row gets one of its own", () => {
        expect(proposeRows([line("a"), line("b", 100), line("c")], 50, 1)).toEqual([0, 1, 2]);
    });
});
