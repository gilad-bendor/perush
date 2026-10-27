// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Gilgamesh XI 1-208 is narrative verse, mostly couplets, in fourteen short sections (each a run). Its rows are
// laid out by rule: the default cost of a break (punctuation), a break inside a sentence dear - dearer in the
// middle of a couplet (after an odd line of the sentence) than between two - a line ending with ":" kept with
// what it introduces, a speech ending its row, and the speech formula ("X פתח את פיו ואמר,") starting one.
// What the punctuation does not show - parallel pairs of one-line sentences, a new step of the story - is said
// below, line by line, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "2ad4b8684bd30bc9ebb22451875db7ff";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "גדר־קנה, גדר־קנה! קיר, קיר!",            // 21-22: "reed wall, reed wall! wall, wall! / listen, reed wall! wall, hear!" - a couplet
    "עזוב עושר ובקש חיים!",                   // 25-26: abandon wealth / despise possessions - a couplet (and 27 with them)
    "וכל בני האנוש נהפכו לטיט.",              // 134-136: what he saw - the silence, mankind clay, the flat plain
    "ישב אותנפישתי במרחקים, בפי הנהרות!\"",   // 205-206: Enlil's decree and its fulfilment, in the same words
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "לכם ימטיר",                              // 43: from Utnapishti's departure to the promised abundance (43-45)
    "ביום החמישי",                            // 57: the fifth day - from the workers to the ship's plan
    "מלבד",                                   // 69: "besides ... / two shar ..." - a sentence of its own after the three "שלושה שאר"
    "היו קשים מאוד",                          // 78: the launching (78-80), after the ship is finished
    "האלים יראו את המבול",                    // 114: from mankind to the gods (114-116)
    "תחת אשר חוללת מבול",                     // 188-195: Ea's four "instead of your flood" couplets, a row each
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“'‘]/.test(plainWords(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** The speech formula: "X פתח את פיו ואמר," and "X דיבר אליו, אל Y:". */
const formula = (t: string) => /פתח את פיו|^\S+ דיבר אליו/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, position, unit, endsUnit, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“'‘]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    // A line ending with ":" stays with what it introduces ("הסתכלתי אל קצות הארץ ...: / בארבעה־עשר ...") -
    // unless that is a speech in quotes, which may start a row of its own.
    if (/:$/.test(words) && !opensSpeech(next.text)) c += 100;
    if (formula(next.text)) c -= 25;   // a row would rather start with the speech formula
    if (endsUnit) return c;
    // Inside a sentence: after an even number of its lines (between couplets) dear, after an odd one dearer.
    return c + ((position - unit.first + 1) % 2 === 0 ? 60 : 150);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // A few pages of fourteen episodes: an index of them (the reader looks for "the birds", "the sacrifice"), and
    // in the footer the title alone - one story - without its parenthesis ("(שורות 1–208)").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain[0]?.text ?? "").replace(/ \(.*\)$/, ""),
    },
});
export default layout;
