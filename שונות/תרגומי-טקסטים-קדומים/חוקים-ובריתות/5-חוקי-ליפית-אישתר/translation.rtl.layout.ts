// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule, as Eshnunna's and Middle Assyrian B's are: a law code of short laws (§4-§38),
// each a run of its own, between a royal prologue and an epilogue in which the king speaks. The default cost of
// a break (punctuation); a line with no pause at its end is inside its clause (+40); a lacuna is a cheap place
// to break. The exceptions below are named by their words: in the laws, where a protasis ends and an apodosis
// begins (or its clauses) and the default would split them for fill; in the prologue and the epilogue, where
// a sentence or a couplet ends. No `repeatedPassages`: it changes nothing here but §32, where it copied §31's
// break after "אחרי אשר האב מת," - which in §31 ends a full row, and in §32 opens the apodosis.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "386c3b168e6907dab2f044375d7a9539";

/** Where a row must not end: after a line whose text (with the line before it) ends so - named by its words (no markup, brackets or vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בן מושל הצבא,",                  // the prologue's remnants: "son of the general, | son of the palace man, son of his overseer"
    "לזונה ההיא",                     // §27: "to that prostitute | he gives rations of barley, oil and wool" - the object and its verb
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "האדון הגוזר את הגורלות,",        // prologue: the givers (An, Enlil) | the receivers (Nininsina, Isin)
    "את הבן לאביו השאתי,",            // prologue: "father to sons, son to father" | "father with sons, son with father" - couplets
    "את הבן עם אביו העמדתי.",
    "בירח עשרה ימים העמדתי.",         // prologue: the end of the service days | the broken lines after them
    "בתוך העיר נמלט,",                // §12: "fled in the city, | dwelt in a man's house a month, (it was) proven, he gives slave for slave" -
                                      //   a lone "כונן," would start the apodosis' row otherwise
    "לא יוציאנו;",                    // §18: the protasis ends ("did not evict him for three years;") | the apodosis whole
    "יורשיו הם;",                     // §26: "the sons of the chosen wife are his heirs;" | "the slave woman's son ... is as a free man's"
    "יורשו הוא;",                     // §27: "the son ... is his heir;" | "as long as his wife lives, ..." - a clause each
    "דין אמת התפשתי.",                // epilogue: a sentence | "by Enlil's word, I, Lipit-Ishtar, ..."
    "רשע וחבלה דחיתי,",               // epilogue: three deeds of the king | on a row together
    "בנשק ממנו ייקח.",                // epilogue: the curses, a sentence a row
    "יורש אל יהיה לו.",               // epilogue: a curse | the next one (Dagan and Shakan ...)
    "ידחה.",                          // epilogue: "... reject" | "Utu, judge of heaven and earth, ... take from him"
];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without the editor's brackets and vowel points, to name a line by its words. */
const words = (text: string) => plain(text).replace(/[\[\]⟨⟩]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.?]*$/u.test(plain(text));

function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    // A line's words with the line before it, so that a short line ("השאתי,") is named by what it ends.
    const w = (position > 0 ? words(run[position - 1].text) + " " : "") + words(line.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";

    // After a line that is all lacuna the reading breaks anyway; before one, not more than the default.
    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    // Verb last, as in Sumerian and Akkadian: a line ending with no pause is inside its clause.
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak }),
    pdf: {
        // The prologue, the groups of laws and the epilogue (##); the laws and the prologue's sections (###) are
        // a few rows each.
        indexDepth: 2,
        // "<the title> / <the group>", without their parentheses (the date, the colophon's line numbers).
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \([^)]*\)/g, "")).join(" / "),
    },
});
export default layout;
