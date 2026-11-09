// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Rephaim texts (KTU 1.20-1.22) and the funeral liturgy of the shades (1.161): Ugaritic verse, broken,
// written a tablet line per line - and the tablet's lines run over the verse's: a clause, a phrase, even a
// word ("רְפָ־ | [אִים]", "תַּר־ | עַלְלְמָן") goes on from one line to the next. So the couplets are not the
// lines, and the rule is about the seams: the default cost of a break (punctuation); a word split over two
// lines never split between rows; a line ending with no pause, or with a dash, is inside its clause, and a
// break after it is dearer; a lacuna is a free break. What the punctuation does not show is said below.
// The invitation refrain ("לכו אל ביתי ... אחריו הרפאים אכן ינדדו") is laid out alike each time ("alike").

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "b2bd5c72e8bce32cd911232524551b52";

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
    "האלים – אל",        // 1.20 II:6-7: "הָאֵ[לִים – אל] | המטעים." - the preposition and its noun
    "סעדו הרפאים",       // 1.22 I:23-24: "סעדו הרפאים, | שתו" - "they ate, they drank", as in I:21-22
    "בקרב",              // 1.22 II:9-10: "בקרב] | היכלי;" - the preposition and its noun
];
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The words the exceptions name: plainWords() without the quotes and punctuation at its end. */
const core = (t: string) => plainWords(t).replace(/[\s"'”’.,;:!–—-]+$/, "");

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    if (splitsWord(line.text)) return "never";
    if (KEEP_WITH_NEXT.some(w => core(line.text).endsWith(w))) return "never";
    if (lacuna(line.text) || lacuna(next.text)) return Math.min(cost, 4);
    return runsOn(line.text) ? cost + 30 : cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Four broken tablets of a page or so each: the index lists them, not their sections (a few lines each);
    // the footer names the tablet the sheet is in, without its KTU number ("הרפאים, לוח א: המסע אל הגרנות").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
