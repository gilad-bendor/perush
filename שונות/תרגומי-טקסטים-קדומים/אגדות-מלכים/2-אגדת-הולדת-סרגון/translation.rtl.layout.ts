// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Sargon Birth Legend is a short narû-style text: each tablet line is a whole clause, most of them a
// sentence, so the default cost of a break (punctuation) lays it out well. One thing punctuation does not
// show: the parallel couplet of the mountains - "the upper mountains, / the lower mountains" - which is said
// twice, by Sargon (I.16-17) and in his charge to the king after him (I.26-27, where a ";" stands between) -
// and the charge, which repeats the deeds with small changes, is laid out as they are.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "cb91b2350351bb849d35662434f47fb6";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "את ההרים העליונים",   // I.16-17, I.26-27: the upper mountains ‖ the lower mountains - a couplet
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אל דור־אילו",         // I.20, I.30: Der-ilu starts a row - the charge laid out as the deeds (Sea Land + Dilmun | Der-ilu ...)
];

/** A line's words: no footnotes, markup, brackets, vowel points (the maqaf stays) or punctuation at its end. */
const plainWords = (t: string) => t
    .replace(/\[\^[^\]]*\]/g, "").replace(/[\u0591-\u05BD\u05BF-\u05C7]/g, "").replace(/[\[\]*]/g, "")
    .replace(/[\s.,;:!?…–—"]+$/u, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for the exceptions. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(words => plainWords(line.text).endsWith(words))) return "never";
    if (BREAK_BEFORE.some(words => plainWords(next.text).startsWith(words))) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // A short text of one subject: its four sections are a few rows each - no index; the title in the footer.
    pdf: { indexDepth: 0, footerTitle: ({ chain }) => chain.find(h => h.level === 1)?.text ?? "" },
});
export default layout;
