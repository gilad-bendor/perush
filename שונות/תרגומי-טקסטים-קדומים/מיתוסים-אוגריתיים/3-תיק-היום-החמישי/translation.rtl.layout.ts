// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The dossier of the fifth day sets nine short passages on the sea monster side by side, each numbered as its
// own source is: Egyptian papyri by page and line (Westcar, Bremner-Rhind - prose broken mid-sentence where the
// papyrus breaks it, and Merikare), Hesiod and the Hurrian Hedammu by verse, the Hittite Illuyanka by column
// line, the Rigveda by half-verse (1a-1d), Hymiskviða by stanza line, the Kojiki by sentence. So one rule has to
// serve prose and several kinds of verse, and it does with three terms: the default cost of a break
// (punctuation); a line that ends with no pause at all dearer (+30 - a papyrus line ending mid-phrase, as in the
// Shipwrecked Sailor); and a break inside a sentence dearer (+20 - Illuyanka's feast and Hedammu's sleep each a
// sentence of its own row). A Rigveda verse's half-verses (a-b | c-d) are its rows: a break after "b" is cheaper
// (-30). The one exception is a sentence of Hedammu that no punctuation shows.
//
// The PDF's index lists the nine passages (##) - their ###s are a row or a few. The footer is the dossier's
// title (before its colon) and the passage, without its source in parentheses.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f4c4758aadd54f1459aaf249329aac72";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "את שרתפשורוחי, בתי –",              // Hedammu 6:16-18: "and her - Šertapšuruḫi, my daughter - / in her length [...] /
    "ובאורכה",                            //   in her width - one furlong": one sentence, on one row
];

/** What ending a row after `line` costs. */
function rowBreak({ line, cost, endsUnit }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(w => plainWords(line.text).endsWith(w))) return "never";
    let c = cost;
    // A line that ends with no pause at all ends inside a phrase - a papyrus line broken mid-sentence.
    if (!/[.,;:!?…–—]["”'’)\]⸣〉]*$/u.test(bare(line.text))) c += 30;
    // A Rigveda verse is two half-verses (a-b, c-d): a row would rather end after the first.
    if (/^\d+b$/.test(line.label)) c -= 30;
    return endsUnit ? c : c + 20;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.level === 1 ? h.text.replace(/:.*$/, "") : h.text.replace(/ \(.*\)$/, ""))
            .join(" / "),
    },
});
export default layout;
