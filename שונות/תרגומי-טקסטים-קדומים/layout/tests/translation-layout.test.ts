import { describe, expect, test } from "bun:test";
import { layoutFileOf } from "../../../../_RTL-EDITOR/src/html/layout-module";
import { translationFile, translationLayout, type TranslationRows } from "../translation-layout";

const TEXT = "# לוח\n\n**1** אחת,\n**2** שתיים.\n**3** שלוש,\n**4** ארבע.\n\n## סוף\n\n**10** עשר\n**11** אחת עשרה";
const SPEECH = "**1** אמר המלך לעבדיו,\n**2** לכו אל העיר.\n**3** שאו את הכסף,\n**4** והביאו אותו לכאן.\n"
    + "**5** הלכו העבדים,\n**6** לכוּ אל העִיר!\n**7** שאו את הכסף,\n**8** והביאו אותו לכאן.";

const laidOut = (text: string, rows: TranslationRows, name = "t.rtl.md") => translationLayout(layoutFileOf(name, text), [], rows);
/** The keys of the lines that start a row - as the answer's data says. */
const starts = (text: string, rows: TranslationRows) => laidOut(text, rows).data!.rowStarts as string[] | null;

describe("a translation's layout", () => {
    test("gives every run as a group, its labels in the margin", () => {
        const layout = laidOut(TEXT, {});
        expect(layout.groups).toEqual([
            { from: 2, to: 5, rowStarts: "auto", margins: [5, 5, 5, 5] },
            { from: 9, to: 10, rowStarts: "auto", margins: [6, 6] },
        ]);
        expect(layout.data!.rowsBy).toBe("auto");
    });

    test("a list of row starts is taken as it is - and a name that matches no line is stale, for a session to see", () => {
        const layout = laidOut(TEXT, { rowStart: ["3", "7"], review: ["3"] });
        expect(layout.groups![0].rowStarts).toEqual([4]);
        expect(layout.data!.stale).toEqual(["7"]);
        expect(layout.attention).toEqual(["1 rows a tool made are not read yet (review)", "1 row starts name no line (stale): 7"]);
    });

    test("a boolean is one answer for every line: a row each, or one row per run", () => {
        expect(starts(TEXT, { rowStart: true })).toEqual(["1", "2", "3", "4", "10", "11"]);
        expect(starts(TEXT, { rowStart: false })).toEqual(["1", "10"]);
    });

    test("a function is asked about every line but a run's first, with the row so far", () => {
        const asked: string[] = [];
        expect(starts(TEXT, {
            rowStart: ({ line, previous, row }) => {
                asked.push(`${previous.key}>${line.key}:${row.lines.length}`);
                return previous.text.endsWith(".");
            },
        })).toEqual(["1", "3", "10"]);
        expect(asked).toEqual(["1>2:1", "2>3:2", "3>4:1", "10>11:1"]);
    });

    test("widths are percentages of the row, and a row knows what still fits", () => {
        const widths: number[] = [];
        starts(TEXT, {
            rowStart: ({ line, row, measure }) => {
                widths.push(measure.line(line));
                expect(row.fits(line)).toBe(row.width + measure.gap + measure.line(line) <= measure.room);
                return !row.fits(line);
            },
        });
        for (const width of widths) expect(width).toBeGreaterThan(1);
        for (const width of widths) expect(width).toBeLessThan(30);
        // A bigger font, from the modules above, gives wider lines.
        const big: number[] = [];
        translationLayout(layoutFileOf("t.rtl.md", TEXT), [{ page: { fontSize: 23 } }],
            { rowStart: ({ line, measure }) => { big.push(measure.line(line)); return false; } });
        expect(big[0] / widths[0]).toBeGreaterThan(1.8);
    });

    test("a function that throws is said where", () => {
        expect(() => starts(TEXT, { rowStart: ({ line }) => { if (line.key === "3") throw new Error("no"); return false; } }))
            .toThrow('"rowStart" threw at line 3: no');
        expect(() => starts(TEXT, { rowBreak: () => "yes" as never })).toThrow("at line 1");
    });

    test("a left-to-right page - an English source - is left to the browser, whatever it is told", () => {
        expect(laidOut("**1** one\n**2** two", { rowBreak: 0 }, "s.md").groups![0].rowStarts).toBe("auto");
    });
});

describe("rows by rule (rowBreak)", () => {
    test("a passage that repeats an earlier one word for word - vowel points and punctuation aside - is found", () => {
        expect([...translationFile(layoutFileOf("s.rtl.md", SPEECH)).echoes].map(([key, first]) => `${key}>${first.key}`))
            .toEqual(["6>2", "7>3", "8>4"]);
    });

    test("the rows that cost least, by the rule's costs - the default cost given to build on", () => {
        const costs: number[] = [];
        starts(SPEECH, { rowBreak: ({ cost }) => { costs.push(cost); return cost; } });
        expect(costs[1]).toBe(0);                   // after "העיר." - a sentence's end
        expect(costs[0]).toBe(4);                   // after "לעבדיו," - a clause's
        expect(starts(SPEECH, { rowBreak: "always" })).toEqual(["1", "2", "3", "4", "5", "6", "7", "8"]);
        // "never" cannot keep together what does not fit one row: it breaks as seldom as the width allows.
        expect(starts(SPEECH, { rowBreak: "never" })?.length).toBe(2);
        expect(starts(SPEECH, { rowBreak: ({ line }) => line.key === "2" ? "always" : 0 })).toEqual(["1", "3"]);
    });

    test("a repeated passage breaks where its first occurrence does, when asked to", () => {
        const rowBreak = ({ line }: { line: { key: string } }) => line.key === "2" ? "always" as const : 0;
        expect(starts(SPEECH, { rowBreak, repeatedPassages: "free" })).toEqual(["1", "3"]);
        expect(starts(SPEECH, { rowBreak, repeatedPassages: "alike" })).toEqual(["1", "3", "7"]);
    });

    test("an exception decided outright stands, where the repetition would have broken otherwise", () => {
        // "always" after line 2, which line 6 repeats - but line 6 is named to run on.
        const rowBreak = ({ line }: { line: { key: string } }) => line.key === "2" ? "always" as const : line.key === "6" ? "never" as const : 0;
        expect(starts(SPEECH, { rowBreak, repeatedPassages: "alike" })).not.toContain("7");
    });

    test("a list of row starts decides outright, rules or no rules", () => {
        expect(starts(SPEECH, { rowStart: ["1", "5"], rowBreak: "always" })).toEqual(["1", "5"]);
    });

    test("a run is parsed into units - sentences by default - and a rule is told each line's", () => {
        const seen: string[] = [];
        starts(SPEECH, { rowBreak: ({ line, unit, endsUnit, cost }) => { seen.push(`${line.key}:${unit.first}-${unit.last}${endsUnit ? "!" : ""}`); return cost; } });
        expect(seen).toEqual(["1:0-1", "2:0-1!", "3:2-3", "4:2-3!", "5:4-5", "6:4-5!", "7:6-7"]);
        // Units of the layout's own: here a couplet is every two lines.
        const couplets: string[] = [];
        starts(SPEECH, { unitEnd: ({ position }) => position % 2 === 1, rowBreak: ({ line, endsUnit }) => { couplets.push(`${line.key}${endsUnit ? "!" : ""}`); return 0; } });
        expect(couplets).toEqual(["1", "2!", "3", "4!", "5", "6!", "7"]);
        // Kept whole: no break inside a unit, wherever the fill would have put one.
        const whole = starts(SPEECH, { rowBreak: ({ endsUnit, cost }) => endsUnit ? cost : "never" })!;
        expect(whole.every(key => ["1", "3", "5", "7"].includes(key))).toBe(true);
    });

    test("a passage repeated with small changes of wording is found with \"similar\", and laid out alike", () => {
        const told = "**1** צוו, ויקראו הכרוזים;\n**2** ירימו קול בארץ:\n**3** את נמתר – בקשו את שערו,\n**4** הביאו מאפה לפניו.\n\n"
            + "**10** אמרו, ועשו כן.\n\n**20** [צו]ו, וקראו [הכרוזים];\n**21** [ק]ול הרימו [בארץ]:\n**22** את אדד – בקשו את שערו,\n**23** הביאו מאפה לפניו.";
        const file = translationFile(layoutFileOf("h.rtl.md", told));
        expect([...file.echoes.keys()]).toEqual([]);
        expect([...file.similarEchoes].map(([key, first]) => `${key}>${first.key}`)).toEqual(["20>1", "21>2", "22>3", "23>4"]);
        const rowBreak = ({ line }: { line: { key: string } }) => line.key === "1" ? "always" as const : 0;
        expect(starts(told, { rowBreak, repeatedPassages: "alike" })).toEqual(["1", "2", "20"]);
        expect(starts(told, { rowBreak, repeatedPassages: "similar" })).toEqual(["1", "2", "20", "21"]);
    });

    test("a minimum fill is passed on to the rows", () => {
        // A break after line 1 is much wanted - but not decided: "always" would end the row however empty.
        const rowBreak = ({ line }: { line: { key: string } }) => line.key === "1" ? -200 : 12;
        expect(starts(SPEECH, { rowBreak })).toContain("2");
        expect(starts(SPEECH, { rowBreak, minimumFill: 60 })).not.toContain("2");
    });
});
