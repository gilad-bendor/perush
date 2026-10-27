// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Enuma Elish is Akkadian verse in couplets: a line is a fifth to two fifths of a row, so a row is a couplet, or
// two short ones. A unit is two lines, counted from each run's first (every section, ###, starts on a couplet),
// and a break inside one is dear. Where the poem has a tercet or a line standing alone, the count would slip by
// one for the rest of the section; those lines are named below by their words, and the count goes on after them.
// The count holds almost everywhere: the poem's long repetitions (Tiamat's army, four times; Anshar's message, twice;
// Marduk's terms, three times) come out alike by it alone. A line that is all lacuna pairs with nothing, so a break
// beside one is free (Tablet V is broken in many places).
//
// The PDF's index goes down to the seven tablets (##): the sections (###) are some 110, most of them a few rows -
// in Tablet VII, one name and its two lines each. The footer is the poem and the tablet at the top of the sheet
// ("אֱנוּמָה אֱלִישׁ / לוח IV"), each without what follows its colon.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "83b34b01a7c45542c92c28ff34770815";

/** A unit of three lines starts at a line whose words begin so. */
const TERCET: readonly string[] = [
    "שמע אאה, וכבדו רנן",       // VII 138-140: Ea heard and rejoiced - "thus: he whose fathers glorified his name - / he is like me" (141-142 pair after it)
];
/** A line that is a unit of its own. */
const SINGLE: readonly string[] = [
    "ירח בירחו",                // V 14: "month by month ... with a crown fashion him:" - the orders to the moon (15-26) pair after it
    "חמש שישיות איגיגי",        // VI 69: the Igigi and the Anunnaki gathered - a long line between the daises (67-68) and the feast (70-81)
    "יאסור את תיאמת",           // VII 132: "may he bind Tiamat" - "for the future of people ... / may she recede forever" (133-134) pair after it
];
/** A row must not end after a line whose words begin so. */
const KEEP_WITH_NEXT: readonly string[] = [];
/** A row must end after a line whose words begin so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's words, as the exceptions name them: no footnotes, markup, vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩"“”]/g, "").replace(/\s+/g, " ").trim();
const startsWith = (names: readonly string[], line: NumberedLine) => names.some(words => plainWords(line.text).startsWith(words));

/** The run's units: couplets counted from its first line, but for the named tercets and single lines. */
const parsed = new WeakMap<readonly NumberedLine[], boolean[]>();
function unitEnds(run: readonly NumberedLine[]): boolean[] {
    let ends = parsed.get(run);
    if (ends) return ends;
    ends = run.map(() => false);
    let i = 0;
    while (i < run.length) {
        let size = startsWith(SINGLE, run[i]) ? 1 : startsWith(TERCET, run[i]) ? 3 : 2;
        // A couplet does not reach into a tercet or a single line that starts after its first line.
        if (size === 2 && i + 1 < run.length && (startsWith(SINGLE, run[i + 1]) || startsWith(TERCET, run[i + 1]))) size = 1;
        const last = Math.min(i + size, run.length) - 1;
        ends[last] = true;
        i = last + 1;
    }
    parsed.set(run, ends);
    return ends;
}
const unitEnd = ({ run, position }: UnitContext): boolean => unitEnds(run)[position];

/** A line with no words left - all lacuna ("[…] … […]"). */
const isLacuna = (line: NumberedLine) => /^[\s.,;:–-]*$/.test(plainWords(line.text));

/** What ending a row after `line` costs: cheap between units, dear inside one - but beside a lacuna, which pairs with nothing. */
function rowBreak({ line, next, endsUnit, cost }: BreakContext): BreakCost {
    if (startsWith(KEEP_WITH_NEXT, line)) return "never";
    if (startsWith(BREAK_AFTER, line)) return "always";
    if (endsUnit || isLacuna(line) || isLacuna(next)) return cost;
    return cost + 150;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/:.*$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
