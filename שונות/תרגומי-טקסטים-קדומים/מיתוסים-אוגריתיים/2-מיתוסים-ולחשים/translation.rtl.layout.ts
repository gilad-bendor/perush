// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Eight short Ugaritic myths and incantations (KTU 1.23, 1.24, 1.114, 1.100, 1.107, 1.108, 1.82, 1.83): verse,
// much of it broken, written a tablet line per line - and the tablet's lines run over the verse's: a clause, a
// phrase, even a word ("ב־ | המרקדות", "ו | ענה") goes on from one line to the next. So the couplets are not
// the lines, and the rule is about the seams: the default cost of a break (punctuation); a word split over two
// lines never split between rows; a line ending with no pause, or with a dash, is inside its clause, and a
// break after it is dearer; a lacuna is a free break. What the punctuation does not show is said below.
// The twelve stanzas of the mare's call to Shapsh (1.100) are laid out alike where their lines are; their
// line division differs from stanza to stanza, so their rows do too ("similar" set the call formula on a row of
// its own, its "אל" cut from the god it names).

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "1832e0426ffc9ff4bdc6e488cea2705a";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line that is all, or nearly all, lacuna: fewer than six letters. */
const lacuna = (t: string) => bare(t).replace(/[^א-ת]/g, "").length < 6;
/** A word split over two lines: the line ends with a maqaf ("ב־"), or with a lone letter ("ו", "בת [א] | ביה"). */
const splitsWord = (t: string) => /־$/.test(bare(t)) || /(^|\s)[א-ת]$/.test(bare(t).replace(/[\[\]⟨⟩]/g, ""));
/** A line that ends inside its clause: no punctuation at its end, or a dash. */
const runsOn = (t: string) => !/[.,;:!?"”'’…]\]?$/.test(bare(t).replace(/\)$/, "")) || /[–—]$/.test(bare(t));

/** A row must not end after a line whose words end so (footnotes, brackets and vowel points aside). */
const KEEP_WITH_NEXT: readonly string[] = [
    'הנה זו צווחת: "אבא, אבא',   // 1.23 32-33: "... צווחת: 'אבא, אבא!'" | "והנה זו צווחת: 'אֵם, אֵם!'" - the two cries
    "הובילי קול אל",              // 1.100: the call "... הובילי קול אל | [the god]" - not cut from the god it names
];
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
    // Eight texts of a page or two each: the index lists them, not their sections (a few lines each); the
    // footer names the text the sheet is in, without its KTU number ("נִכַּל וְיָרִחַ").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
