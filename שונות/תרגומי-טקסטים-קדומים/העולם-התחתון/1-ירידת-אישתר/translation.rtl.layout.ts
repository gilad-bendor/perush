// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Descent of Ishtar is short verse (138 lines), mostly couplets and the repeated formulas of the gates.
// Its rows are laid out by rule: the default cost of a break (punctuation), a break inside a sentence dearer
// (+30), a speech ending its row, the speech formula starting one, and each gate a row of its own. What the
// punctuation does not show - mostly parallel pairs - is said below, line by line, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "7286ef7e827f6a361a5320b581bc075b";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בפנים המתיני, הדלת תיפתח.\"",      // 23a-24: the gatekeeper's speech goes on in 24 (see the report: 23a's closing quote)
    "עם האנונכי מים אשתה,",             // 32-33: I drink water with the Anunnaki / eat clay as bread - a couplet
    "אשר עזבו את כלותיהם,",              // 34-35: I weep for the young men / for the young women - a couplet
    "אל שער כורנוגי שים פניך,",          // 93-94: "go to Kurnugi's gate / its seven gates will open for you"
    "כאשר ינוח לבה, כבדה יאור,",         // 96-97: "when her heart is calm ..." is the clause of "make her swear"
    "אל הנאד שים את אזנך:",              // 98-99: "set your mind on the waterskin: / saying, '...'"
    "אגדפך גידוף גדול,",                 // 103-103a: I curse you / I decree you a fate - a couplet before the curses
    "על כסא זהב הושב;",                  // 113-114: Ereshkigal's orders two by two -
    "על כסא זהב הושיב;",                 //   and Namtar's carrying them out, alike (115-118)
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אל הבית החשוך",                     // 4: the series "to the house ..." starts a row, after the opening tercet 1-3
    "בת סין את אזנה פתחה",               // NA9: from the description of Irkalla back to the goddess (as 2-3)
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points, brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“']/.test(plainWords(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** The speech formula, "X פתח את פיו ואמר, / ... דיבר אל Y:". */
const formula = (t: string) => /פתח(ה)? את פי(ו|ה)|^בא השוער, דיבר/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // Each gate - going down (42-62) and coming up (119-125) - starts a row.
    if (/^בשער ה/.test(after)) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    if (formula(next.text)) c -= 25;   // a row would rather start with the speech formula
    // Inside a sentence (unit) a break is dearer: keep the couplets it is made of.
    return endsUnit ? c : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The poem is a few pages of nine short sections: an index of them, and the section in the footer - its
    // parenthesis dropped ("הנוסח הניאו־אשורי מאשור (...)").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \(.*\)$/, "")).join(" / "),
    },
});
export default layout;
