// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Book of the Heavenly Cow is numbered by the 95 columns of the wall in the tomb of Seti I: a column is one
// line of the translation, mid-sentence where the sentence runs on into the next. Almost every column is wider
// than a printed row (57 of 95), and no two of the others fit together, but in one place: the short columns
// 63-70 (Thoth's appointment, written around the figure), which run three to a row. So the rows are the fewest
// possible whatever a rule says, and the default rule (punctuation, rows as full as they can be) is all there
// is. In 63-70 it breaks after "בתוכם," and, mid-sentence, after "יען כי אני" - every three-row split of that
// sentence breaks inside a phrase somewhere, and a fourth row would not end any better.
//
// The PDF's index lists the fifteen episodes (###) - they are the story's divisions, and what a reader looks
// for. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "149f8fd1b057df297c460712ac08e4d7";

/** What ending a row after a line costs: the default (punctuation). */
function rowBreak({ cost }: BreakContext): BreakCost {
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
