// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Shipwrecked Sailor is a prose tale numbered by the 189 lines of the papyrus (St Petersburg 1115), each a
// line of the translation and broken where the papyrus breaks it - mostly mid-sentence ("יהיה שלם | לבך,
// הנגיד!"). So a row can rarely end where a sentence does; what it can do is end where a line ends with a pause.
// The rows are laid out by rule: the default cost of a break (punctuation), and a line that ends with no pause
// at all dearer still (+30) - it ends inside a phrase. The rows are the fewest possible either way; the rule
// moves one place (131-138: the snake's counsel, now broken at "לבך," and at "טוב הוא מכל דבר."). The storm,
// told twice, falls on other papyrus lines the second time, so "alike" and "free" lay it out the same, and
// "similar" only trades one mid-phrase break for another.
//
// Three lines are in no run: the two lines written between the lines (30-31, 40-41) and the line after the
// second (41) - each a row of its own, which no layout can change.
//
// The PDF's index lists the ten episodes (###). The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "88545e8d208d3ba6371b5165f5d417da";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();

/** What ending a row after `line` costs. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    // A papyrus line that ends with no pause breaks inside a phrase ("יהיה שלם | לבך"): a row would rather not end there.
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
