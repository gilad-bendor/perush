// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The other Akkadian flood versions: a dozen manuscripts, each a short run of verse lines, many of them broken
// (`[…]`). The rows are laid out by rule: the default cost of a break (punctuation), dearer inside a sentence
// (+30), dearest after a line that ends with a dash (it leads to what follows: "יפתול לך ביתי פתיל – / "ארבעה
// שאר..."), cheap before a speech formula ("פתח את פיו") or a speech that opens, and before a line that is all
// lacuna. What the punctuation does not show - mostly pairs of lines - is said below, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "47c176064c407f1ed7a842b39c21d18a";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "ליבי – תיטול!",                      // Ark 46-48: the prayer and the broken lines after it stay on its row
    "זולגות דמעותיו.",                    // C₀ iv 10′-12′: the formula ends the narration's row, not a row of 38% of its own
    "כאלים – חיים אכן תקבל.",             // I r. 4′-6′: the speech's last line with the colophon, rather than two short rows
    "האזנתי אני למאמר",                  // I₂ 7-8: "I listened to the word / of Ea my lord" - a construct chain
    "לקחתי מעדר וגרזן נחושת,",            // I₂ 9-10: "I took a hoe and a copper axe, / made a window" - carrying out the order
    "פותח את פיו ואומר:",                 // J₁ 4′: the formula stays with the speech it opens
    "את המועד אשר אשלח אליך,",            // W 5′-6′: "watch the time I send you, / come into the ship" - one order
    "רכב – פרדיו:",                       // U r. 5′-6′: "Adad rode the four winds - his mules: / south, north, east, west."
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "עליתי אל הגג",                       // Ark 45: the prayer to Sin, with the speech it opens, a row of its own
    "את פיו פותח",                        // J₁ 8′: the second speech formula starts a row, as the first (4′)
    "אאה פתח את פיו",                     // BM 38917 obv. 10′ (and U 13): Ea's answer starts a row
    "קורתה תהיה חזקה",                    // W 3′: the ship's structure, with the order to seal it (4′)
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?", "…" or quotes. */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩"“”']/g, "").replace(/\s+/g, " ").trim();
const closesSpeech = (t: string) => /["”]\s*\]?$/.test(bare(t));
const opensSpeech = (t: string) => /^[\[(]*["“]/.test(bare(t));
/** A line that is all lacuna: "… … …", "[…] … […]", "(שבורות)", "(עקבות)". */
const lacuna = (t: string) => /^[\s\[\]…./]*$/.test(bare(t)) || /^\((שבור|שבורות|עקבות)\)$/.test(bare(t));
/** The speech formula: "X פתח את פיו (ואמר)", "את פיו פותח". */
const formula = (t: string) => /פתח(ה)? את פי(ו|ה)|את פיו (פתח|פותח)|פותח את פיו/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    let c = cost;
    // A line that ends with a dash leads to what follows - an order, its object, the speech it introduces.
    if (/[–—]$/.test(bare(line.text).replace(/["”]+$/, ""))) c += 100;
    if (closesSpeech(line.text)) c -= 30;                        // a speech that closes ends its row, if it can
    if (formula(next.text) || opensSpeech(next.text)) c -= 20;   // a row would rather start with a speech
    if (lacuna(next.text) || lacuna(line.text)) c -= 8;          // a broken line is a free place for a break
    // Inside a sentence (unit) a break is dearer.
    return endsUnit ? c : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "similar" }),
    // The index lists the sections (##) and the manuscripts of the sections that hold several (###); the ####s are
    // passages of a dozen lines each. The footer says which manuscript the sheet is in - its museum number dropped.
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => {
            const where = chain.filter(h => h.level === 2 || h.level === 3).map(h => h.text.replace(/ \([^)]*\d[^)]*\)/g, ""));
            return where.length ? where.join(" / ") : chain[0]?.text ?? "";
        },
    },
});
export default layout;
