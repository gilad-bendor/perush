// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Hittite elimination rituals (Ashella, Uhhamuwa, Pulisha, Ambazzi twice): ritual instructions in prose,
// a section (§) a run, a tablet line most often a clause of its own ending with ";" - "ואותם מסיעים אל
// הבָּר; | ועלווה פורשים;" - and the words said over the offerings in quotation marks. The rows are laid out
// by rule: the default cost of a break (punctuation), a spoken formula ending its row when it closes, and
// the formula that introduces it ("ועליהם כך אומרים:") rather starting a row than ending one.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "6ca09e42fbb30507ec7ed1c03d780da9";

/** Where a row must not end: after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "שנים ארוכות תן!\"",          // Ambazzi §6, §36: the blessing, and its coda "and the string – so she does; and says so" on its row
];
/** Where a row must end: after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*" or "?". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]*?⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line that closes a speech opened on an earlier line - not a quotation within the line. */
const closesSpeech = (t: string) => /["”]$/.test(bare(t)) && (bare(t).match(/["“”]/g) ?? []).length % 2 === 1;
const opensSpeech = (t: string) => /^["“]/.test(plainWords(t));
/** The formula that introduces the words said: "ועליהם כך אומרים:", "ואומרת כך:". */
const formula = (t: string) => /כך (ממש )?(אומר|אומרת|אומרים|אומרות|אמר)[^ ]*:$|^ואומר[^ ]* כך:$/.test(plainWords(t));

function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    // A spoken formula that closes ends its row - unless another one answers it.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    // The formula that introduces the words said rather starts a row than ends one.
    if (formula(next.text)) c -= 10;
    if (formula(line.text)) c += 20;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "free": the rounds of Ambazzi repeat one another nearly word for word, but a round's lines fill its rows
    // differently (a restored word, a name), and copying the first round's breaks stranded "ואומרת:" on a row
    // of 9% and split "והוא מלבין – | כך ..."; "similar" did worse still.
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "free" }),
    pdf: {
        // The rituals (##); their sections (###, some fifty in Ambazzi) are a few rows each.
        indexDepth: 2,
        // The ritual the sheet is in, without its CTH number; the general title before the first one.
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \([^)]*\)$/, "") ?? "",
    },
});
export default layout;
