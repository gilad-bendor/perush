import { describe, expect, test } from "../../../../_RTL-EDITOR/tests/test-kit.ts";
import { breakPenalty, endsSentence, proposeRows } from "../rows.ts";

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
        expect(proposeRows(lines, 32, 1, () => 0)).toEqual([0, 3]);
        // A decision overrides the costs: "always" ends a row, "never" keeps two lines together where they fit.
        expect(proposeRows(lines, 32, 1, i => i === 0 ? "always" : 0)).toEqual([0, 1, 4]);
        expect(proposeRows(lines, 32, 1, i => i === 1 ? "never" : 12)[1]).not.toBe(2);
    });

    test("a line too wide for any row gets one of its own", () => {
        expect(proposeRows([line("a"), line("b", 100), line("c")], 50, 1)).toEqual([0, 1, 2]);
    });

    test("a sentence ends at a full stop or a colon, at a real question, or where a speech closes - not at a semicolon", () => {
        expect(endsSentence("קראו.")).toBe(true);
        expect(endsSentence("ודיבר אל האלים:")).toBe(true);
        expect(endsSentence("מי הוא?\"")).toBe(true);
        expect(endsSentence("עמוד לפניי!\"[^3]")).toBe(true);
        expect(endsSentence("הביאו מאפה לפניו,\"")).toBe(true);
        expect(endsSentence("לו;")).toBe(false);
        expect(endsSentence("קדמון?")).toBe(false);
        expect(endsSentence("הביאו מאפה לפניו,'")).toBe(false);
        expect(endsSentence("הארץ,")).toBe(false);
    });

    test("a minimum fill keeps a short line from a row of its own, where the next one would still fit", () => {
        // A break after a short line much wanted: the cheapest rows leave it alone on a row - unless rows must be fuller.
        const lines = [line("a.", 5), line("b", 30), line("c", 30), line("d", 30)];
        const cost = (i: number) => i === 0 ? -100 : 12;
        expect(proposeRows(lines, 70, 1, cost)).toEqual([0, 1, 3]);
        expect(proposeRows(lines, 70, 1, cost, { minimumFill: 50 })).toEqual([0, 3]);
        // A row that cannot be fuller - the next line does not fit on it - is no fault.
        expect(proposeRows([line("a", 20), line("b", 60)], 70, 1, () => 0, { minimumFill: 50 })).toEqual([0, 1]);
    });
});
