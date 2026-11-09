// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The tales of Papyrus Westcar are prose numbered by the page and line of the papyrus ("3,5"), each papyrus line
// a line of the translation, broken mid-sentence where the papyrus breaks it. A line is 40-100% of a printed
// row, so two share a row now and then - and the rows are the fewest possible (249) whatever a rule says. The
// rule is the Shipwrecked Sailor's: the default cost of a break (punctuation), and a line that ends with no
// pause at all dearer (+30). Here it changes nothing - every break is forced by the widths - but it says what
// a break should be, for a later version of the text. "alike", "similar" and "free" lay it out the same.
//
// Ten lines are in no run, each a row of its own: the rubrics written between the lines ("הכוהן־הקורא
// החרטום", 1,15-16 and its like, 8,5-6 "ואחרי") and a line after one, or alone between two headings.
//
// The PDF's index lists the nineteen episodes (###). The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "0862476b31261390d7c7937f23d9fe57";

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
