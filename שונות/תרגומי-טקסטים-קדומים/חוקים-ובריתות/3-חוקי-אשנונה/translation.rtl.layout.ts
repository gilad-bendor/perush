// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic (../../layout/), and everything else comes in its arguments.
//
// The rows are laid out by rule: the default cost of a break (punctuation), and four rules of this text.
// A law here is short - a run of two to five tablet lines, one or two rows - and the last row of a run costs
// nothing however empty it is, so the default fills the first row and leaves the law's tail alone on the
// second, mid-phrase. The rules below are what keeps the protasis and the apodosis apart instead.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "2258cbdc231ad082c51aa1b1f640ead0";

/** Where a row must end: after a line whose text ends so - named by its words, not its number. */
const BREAK_AFTER: readonly string[] = [
    "ואחרת נשא,",           // §59: the protasis (he had sons, left his wife, married another) | its sentence
];

/** A line's text without its footnote marks. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for the rules of this text. */
function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const text = plain(line.text), after = plain(next.text);
    if (BREAK_AFTER.some(words => text.endsWith(words))) return "always";

    // Parallel laws laid out alike: the warned owner's ox, mad dog and leaning wall (§54, §56, §58) -
    // "the owner was told, and did not ...," | "and it gored / bit / fell and killed - <the penalty>".
    if (/^ו\S* (נגף|נשך|נפל) והמית/u.test(after)) return "always";

    // A line that opens with a lacuna: the reading breaks there anyway - as cheap as a clause's end.
    if (/^\[…\]/u.test(after)) return Math.min(cost, 4);

    let total = cost;
    // The Hebrew keeps the Akkadian order, verb last: a line ending with no pause is inside its clause,
    // most often before its verb ("ולאשנונה | לא הוליך"), or between an apodosis' object and its verb
    // ("עשרה מנים | (את דמי) גידול בנו ישקול"). Worth more than the fill a two-row law could gain.
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) total += 40;
    // Inside direct speech - the oath of §37: a quotation is not split across rows.
    const quotes = run.slice(0, position + 1).reduce((n, l) => n + (l.text.match(/"/g) ?? []).length, 0);
    if (quotes % 2 === 1) total += 30;
    return total;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
