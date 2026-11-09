// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Rigveda 1.32 is a hymn of fifteen trishtubh stanzas, a line per pada (`1a`..`1d`): each stanza is a run of its
// own, its letters breaking the numbering at every `a`. A stanza is two half-verses (ab | cd), the Vedic
// metre's own pause - so a unit is a half-verse, ending at a pada with an even letter (b, d), and a break inside
// one is dear. Two padas fill a row to 45-85%, so a stanza is two rows, one per half-verse; the default had
// split two stanzas (8, 13) three lines and one, mid-sentence.
//
// The PDF's index: the hymn's ten sections (###) are a stanza or two each, a third of a page or less, and its
// `#` and `##` say the same - so no index at all. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f277dbada939d33745eb1dc77d87602e";

/** A half-verse ends at a pada whose letter is the second, fourth, sixth... of its stanza. */
const unitEnd = ({ line }: UnitContext): boolean => /[bdfhj]$/.test(line.label);

/** What ending a row after a line costs: cheap between half-verses, dear inside one. */
function rowBreak({ endsUnit, cost }: BreakContext): BreakCost {
    return endsUnit ? cost : cost + 150;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 0,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
