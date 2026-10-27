// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Debate between Summer and Winter is a Sumerian disputation of ~320 lines: a mythic prologue, two lists of
// offerings, and long speeches. Its lines are long (most 40-60% of a row) and each is a clause of its own, so a
// row holds one line or two. Laid out by rule: the default cost of a break (punctuation); a full stop ends its
// row; a speech ends its row, but for the formula that closes it ("ביום ההוא / שנית – X את Y חירף."), which
// stays with the speech's last line, and ends the row there; a line ending with ":" that does not open a speech
// (a list, the colophon) ends its row. The few pairs that punctuation does not show are named below.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "064b18ace7a0d05645454cf4849a0037";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "יום טוב בשגשוג,",                 // 4-5: to make the day grow / the night appear - a couplet
    "קשר השמים לעשות,",                // 9-10: Summer - ... / Winter - ... - a couplet
    "את בינתו העמיד.",                 // 11-12: the long period 4-11 closes, the myth begins - the two share a row
    "לעז גדי נתן;",                    // 50-51: the ewe and the goat / the cow - Winter's flocks
    "קן הדביקה;",                      // 53-54: the bird of heaven / the fish of the marsh - a couplet (as 31)
    "פרי נשא;",                        // 56-57: the tree's fruit / the beds' vegetables
    "צוואר השמין;",                    // 58-59 and 291-292: barley in the furrow / Dagan like a maiden - a couplet
    "שזרועו אינה חדלה,",               // 151-152: Summer - a slave / a hireling - a couplet
    "מטיב ומטיב אני;",                 // 251-252: for my king I make the palace good / the cooler of my king - I!
    "כל אשר חורף חירף –",              // 262-263: the insults / he said of them - one sentence
    "חורף הוא המפקח עליהם;",           // 305-306: Enlil's verdict - a couplet
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בשמחה להופיע,",                   // 5: after the day/night couplet, the infinitives go on
    "לב שימח ושימח;",                  // 52: the wild animals, before the bird/fish couplet
    "דבש ויין לארץ הגיע והגיע;",        // 55: the orchards, before the tree/beds pair
    "בגאון עמדו;",                     // 107 and 285: "both stood proudly" - what follows is a new sentence
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "זרע יקר",                         // 41: the lacuna 37-42 in two rows, not a row of a single "[…] …"
];
/** Closing formulas that go with the narrative after them, not with the speech before (151-152 is a couplet). */
const FORMULA_WITH_NARRATIVE: readonly string[] = [
    "ביום ההוא חורף את קיץ חירף.",     // 153
];

/** A line's text without footnote marks and emphasis. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“]/.test(bare(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** The formula that closes a speech: "ביום ההוא חורף את קיץ חירף." / "שנית – קיץ את חורף חירף." */
const closingFormula = (t: string) => /חירף\.$/.test(bare(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = bare(line.text), words = plainWords(line.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => plainWords(next.text).startsWith(w))) return "always";
    // The closing formula stays with the speech's last line, and the narrative goes on on a row of its own.
    const withNarrative = (t: string) => FORMULA_WITH_NARRATIVE.includes(plainWords(t));
    if (closesSpeech(text) && closingFormula(next.text)) return withNarrative(next.text) ? "always" : "never";
    if (closingFormula(text)) return withNarrative(text) ? cost : "always";
    // A speech ends its row; one starts a row, unless its formula ("... משיב:") is before it - and the two
    // share a row, unless the speech's first lines are a pair that would not fit beside it (304-306).
    if (closesSpeech(text)) return "always";
    if (opensSpeech(next.text)) return text.endsWith(":") ? cost + 100 : "always";
    // A ":" that opens no speech opens a list (the offerings) or the colophon: they start a row.
    if (text.endsWith(":")) return "always";
    // A full stop ends a passage.
    if (text.endsWith(".")) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Ten sections, each a page or so: an index of them, and the section in the footer - without its range of
    // lines ("1–18: ").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/^[\d–-]+:\s*/, "")).join(" / "),
    },
});
export default layout;
