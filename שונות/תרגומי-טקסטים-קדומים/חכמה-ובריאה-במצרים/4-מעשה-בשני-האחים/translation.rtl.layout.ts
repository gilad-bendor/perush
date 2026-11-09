// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Tale of Two Brothers is prose numbered by the page and line of the papyrus (d'Orbiney: "3,5" is page 3,
// line 5), each papyrus line a line of the translation, broken mid-sentence where the papyrus breaks it. A
// papyrus line is 55-140% of a printed row, so no two ever fit together: every line is a row of its own, the
// rows are the fewest possible whatever a rule says, and the default rule is all there is. (A new page of the
// papyrus starts a new run, which changes nothing here.) The colophon's last two lines (19,9-19,10) are the
// one pair that shares a row.
//
// The PDF's index lists the fourteen episodes (###), each half a page or more. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "6325558a663b82ad1a7057d754997c89";

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
