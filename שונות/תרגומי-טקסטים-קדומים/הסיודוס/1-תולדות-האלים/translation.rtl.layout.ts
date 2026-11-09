// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Theogony is Greek hexameter, a Hebrew line per Greek line, each section (##) one run - the rules of Works and
// Days, its companion (הסיודוס/2-מעשים-וימים), word for word. The verse is stichic - no couplets, no stanzas - and
// runs on from line to line all the time. A line is 40-60% of a row, so a row is two lines, and what is left to
// decide is where the pairs start. Three costs set that, on top of the default's punctuation:
// - +30 after a line that ends with no punctuation at all - an enjambment ("ואת כל | כוחו הראה", "את העלבון הרע
//   של אב | שלכם"): the Hebrew keeps the Greek's run-on, and a row ending there cuts a phrase;
// - +15 after any other line inside a sentence (the default unit): a row should end where a sentence does;
// - +25 after a line that opens a speech (a verb of saying and a colon): the formula goes with what is said
//   ("ואמרה, בעודדה (אותם), מדוכדכת בקרבה: | ילדיי, ובני אב פרוע..."). Not every colon - one that ends a clause
//   is a pause like a full stop.
// They changed 20 places of the default's, nearly all to a row that starts with a sentence or a phrase. The
// catalogues (the Nereids, the Oceanids) are long sentences of names, a comma after each line: there the default's
// fill decides, as it should. 562 rows against the fewest possible 554. `repeatedPassages`: "alike", "similar" and
// "free" give the same rows.
//
// The PDF's index goes down to the 36 sections (##) - the file has no ###; most are half a page or more, and their
// titles are the poem's map. The footer is the title: the sections' titles are too long for a footer, and change
// every page or so.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "c4a80d5ddb196412618060f8b8face4e";

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
