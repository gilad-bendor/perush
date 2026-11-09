// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Three Ugaritic ritual texts: the purification formula said four times (KTU 1.40), a month's offerings with
// a prayer for a besieged city (1.119), a list of offerings (1.39). Not verse: prose written line by line on
// the tablet, its clauses running over from one line to the next - often mid-phrase, sometimes mid-word
// ("בשבעה־ | עשר"). The 1.40 lines are long (half a row and more), so most are a row of their own anyway.
// Its rows are laid out by rule: the default cost of a break (punctuation); a word split over two lines is
// never split between rows; a line ending with no pause, or with a dash ("בא שַׁפְּשׁ –", "דַּקִּית –" - a
// god and his offering), is inside its clause, and a break after it is dearer; a lacuna is a free break.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "6ec8233b5dfafd3c1644936976ebee78";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line that is all, or nearly all, lacuna: fewer than six letters. */
const lacuna = (t: string) => bare(t).replace(/[^א-ת]/g, "").length < 6;
/** A word split over two lines: the line ends with a maqaf ("בשבעה־"), or with a lone letter ("ו", "בת [א] | ביה"). */
const splitsWord = (t: string) => /־$/.test(bare(t)) || /(^|\s)[א-ת]$/.test(bare(t).replace(/[\[\]⟨⟩]/g, ""));
/** A line that ends inside its clause: no punctuation at its end, or a dash. */
const runsOn = (t: string) => !/[.,;:!?"”'’…]\]?$/.test(bare(t).replace(/\)$/, "")) || /[–—]$/.test(bare(t));

/** A row must not end after a line whose words end so (footnotes, brackets and vowel points aside). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אכן יזבח",          // 1.119 13-14: "... אכן יזבח | המלך" - the verb and its subject
];
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    if (splitsWord(line.text)) return "never";
    if (KEEP_WITH_NEXT.some(w => plainWords(line.text).endsWith(w))) return "never";
    if (lacuna(line.text) || lacuna(next.text)) return Math.min(cost, 4);
    return runsOn(line.text) ? cost + 30 : cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Three texts of a page or two each: the index lists them, not their sections (a few lines each); the
    // footer names the text the sheet is in, without its KTU number.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
