// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Shield of Heracles is Greek hexameter, a Hebrew line per Greek line, each section (##) one run - laid out by
// the rules of the Theogony and Works and Days (הסיודוס/1-תולדות-האלים, 2-מעשים-וימים), word for word. The verse is
// stichic and runs on from line to line; a line is 40-60% of a row, so a row is two lines, and what is left to decide
// is where the pairs start. On top of the default's punctuation:
// - +30 after a line that ends with no punctuation at all - an enjambment: a row ending there cuts a phrase;
// - +15 after any other line inside a sentence (the default unit): a row should end where a sentence does;
// - +25 after a line that opens a speech (a verb of saying and a colon): the formula goes with what is said.
//
// The PDF's index goes down to the 17 sections (##) - the file has no ###. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "c890db33931376cb51dcac39a3d21ea0";

/** A line's words: no footnotes, markup or vowel points (the maqaf kept). */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[*_]/g, "").replace(/\s+/g, " ").trim();
/** A line that runs on into the next: it ends with a word, not with punctuation. */
const runsOn = (line: NumberedLine) => /[א-ת׳״'"\])]$/.test(plainWords(line.text)) && !/[.;:!?,–][")\]]*$/.test(plainWords(line.text));
/** A line that opens a speech: a verb of saying, and a colon. */
const opensSpeech = (line: NumberedLine) => /:$/.test(plainWords(line.text)) && /(אמר|אומר|דבר|דיבר|קרא|ענה|השיב)/.test(plainWords(line.text));

/** What ending a row after a line costs: the default (punctuation), dearer inside a sentence, dearest inside a phrase. */
function rowBreak({ line, cost, endsUnit }: BreakContext): BreakCost {
    if (runsOn(line)) return cost + 30;
    if (!endsUnit) cost += 15;
    if (opensSpeech(line)) return cost + 25;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
