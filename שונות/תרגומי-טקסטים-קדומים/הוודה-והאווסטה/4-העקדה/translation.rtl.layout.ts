// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Three texts of the substituted sacrifice:
// - Shunahshepa (Aitareya Brahmana) is prose, a TITUS line per line (`13.1a`), each sentence a run, with gathas -
//   a half-verse per line - and their speech formulas ("אמר שׁוּנַהְשֵׁפָּה:", "(עד כאן דבריו.)"). The default's
//   punctuation does nearly all of it; two rules set what it got wrong. A line that ends with a colon - a speaker,
//   a list - goes with what it introduces (+40 for a row ending on it): six times the default had left the formula
//   at a row's end and its gatha below. And a line of a few words (under 12% - "נדוד!", the refrain of Indra's
//   five songs) is not left alone on a row (+60 for a break before it). A wider threshold took "(עד כאן דבריו.)"
//   too, and pushed the next speaker's formula back to the row's end - so it stays at 12.
// - The Sacrificial Essence (Shatapatha Brahmana) is prose, a short line and a long one per paragraph.
// - Nachiketas (Katha Upanishad) is verse, a half-stanza per line (`1.1a`), a stanza a run: two halves share a row
//   where they fit, and mostly they do not.
// `repeatedPassages`: "alike" and "free" give the same rows; "similar" moved four places, none for the better
// (a speech formula back to a row's end, a Katha stanza that fits one row split in two).
//
// The PDF's index goes down to the three texts (##): the sections (###) are a third of a page or less in
// Nachiketas and the Sacrificial Essence. The footer is the title (without what follows its colon) and the text
// (without its source's parenthesis).

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "8a7c307355982f316cefddf3aa2d870c";

/** A line's words: no footnotes, markup or vowel points (the maqaf kept). */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[*_]/g, "").replace(/\s+/g, " ").trim();
/** A line that introduces what follows: a speaker ("אמר וִישְׁוָמִיטְרָה:"), a list ("היו לו שלושה בנים:"). */
const introduces = (line: NumberedLine) => /:$/.test(plainWords(line.text));

/** What ending a row after a line costs: the default (punctuation), but dearer after an introduction and before a refrain. */
function rowBreak({ line, next, cost, measure }: BreakContext): BreakCost {
    if (introduces(line)) return cost + 40;
    if (measure.line(next) < 12) return cost + 60;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.level === 1 ? h.text.replace(/:.*$/, "") : h.text.replace(/ \(.*\)$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
