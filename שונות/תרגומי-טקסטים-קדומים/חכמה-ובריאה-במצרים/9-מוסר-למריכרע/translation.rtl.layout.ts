// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Instruction for Merikare is numbered by the 149 lines of its papyrus (St Petersburg 1116A verso, E1-E149),
// each papyrus line a line of the translation, broken mid-sentence where the papyrus breaks it. A line is 45-120%
// of a printed row (18 are wider than a row and wrap inside themselves), so only a handful of pairs share a row,
// mostly in the broken opening, and the rows are the fewest possible (140) whatever a rule says. The rule is the
// Shipwrecked Sailor's and Sinuhe's: the default cost of a break (punctuation), and a line that ends with no pause
// at all dearer (+30) - it ends inside a phrase. It moves nothing here; it is kept so that an edit is laid out
// the same way. "alike", "similar" and "free" lay it out the same.
//
// The PDF's index lists the fourteen sections (###), each a few rows or more. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "c4fa285f7408f92d0d5ca5a13d61f1d6";

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
        footerTitle: ({ chain }) => chain[0]?.text ?? file.headings[0]?.text ?? "",
    },
});
export default layout;
