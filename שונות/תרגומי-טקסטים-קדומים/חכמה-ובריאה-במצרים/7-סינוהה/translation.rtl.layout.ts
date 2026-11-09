// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Story of Sinuhe is numbered by the lines of its two papyri (R - the Ramesseum papyrus, for the opening;
// B - Berlin 3022, for the rest), each papyrus line a line of the translation, broken mid-sentence where the
// papyrus breaks it - the hymn to Senusret, the prayer and the letters included. A line is 40-95% of a printed
// row, so two share a row now and then, and the rows are the fewest possible (227) whatever a rule says. The
// rule is the Shipwrecked Sailor's: the default cost of a break (punctuation), and a line that ends with no pause
// at all dearer (+30) - which moves one place (B239-241: "...על שבטי, | כל רכושי בידו: אנשיי, מקני | כולו,"
// now breaks at the comma). "alike", "similar" and "free" lay it out the same.
//
// The PDF's index lists the sixteen episodes (###). The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "29264b80e5efb1000f48e6a3998d74e9";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();

/** What ending a row after `line` costs. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    // A papyrus line that ends with no pause breaks inside a phrase: a row would rather not end there.
    if (!/[.,;:!?…–—]["”'’)\]]*$/u.test(bare(line.text))) return cost + 30;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
