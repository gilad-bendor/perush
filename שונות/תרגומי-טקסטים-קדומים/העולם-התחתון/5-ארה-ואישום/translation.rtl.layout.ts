// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Erra and Ishum, tablet I: Akkadian epic verse (191 lines), long lines - two to a row at most - mostly in
// couplets, with long speeches. Its rows are laid out by rule: the default cost of a break (punctuation), a
// break inside a sentence dearer (+30), a line ending with a dash kept with the line it leads to, a speech
// ending its row, the speech formula starting one. What punctuation does not show is named below by words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "7eb9afc97691c4c49c0d52a2a4ff59f7";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "ארה הגיבור, צא אל השדה",       // 60: the Seven's call to battle starts a row, and the "ישמעו" series after it pairs from its start
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“]/.test(bare(t).replace(/^\[[^\]]*\]\s*/, ""));
/** A line that closes a speech opened on an earlier line - not a short quotation within the line ("התעטפו!"). */
const closesSpeech = (t: string) => /["”]$/.test(bare(t)) && (bare(t).match(/["“”]/g) ?? []).length % 2 === 1;
/** The speech formula: "פתח את פיו, אל X דיבר:", "שמע אותו X," "X – כשמעו את זאת,". */
const formula = (t: string) => /פתח את פיו|^שמע אות|כשמעו את זאת/.test(plainWords(t));

function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    // A line ending with a dash leads into the next: "של יושב העיר – יהא אונו עצום – | אל ההולך אל השדה ...".
    if (/[–—]$/.test(bare(line.text))) c += 150;
    if (formula(next.text) && !formula(line.text)) c -= 25;   // a row would rather start with the speech formula
    // Inside a sentence (unit) a break is dearer: keep the couplets it is made of.
    return endsUnit ? c : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text).join(" / "),
    },
});
export default layout;
