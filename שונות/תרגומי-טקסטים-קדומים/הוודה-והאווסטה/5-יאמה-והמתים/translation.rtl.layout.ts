// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Six Rigveda hymns of Yama and the dead (10.10, 10.14-18), mostly trishtubh, a line per pada (`1a`..`1d`): each
// stanza is a run of its own, its letters breaking the numbering at every `a`. A stanza is two half-verses
// (ab | cd), the Vedic metre's own pause - so a unit is a half-verse, ending at a pada with an even letter (b, d),
// and a break inside one is dear. Nearly every stanza is two rows, one per half-verse; six stanzas of short padas
// fit one row; in four a half-verse is too wide for a row, and its two padas take a row each (10.14.3cd,
// 10.15.10ab and 13ab, 10.17.2ab - 10.15.13ab by 1%, the width of its footnote's mark).
// The default had split a half-verse in 28 stanzas, running three padas together.
//
// The PDF's index goes down to the six hymns (##); their sections (###) are two to five stanzas, a third of a page
// or less. The footer is the hymn at the top of the sheet, with its Rigveda number, or the title before the first.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "41a7c844722b09a6b0b696036d42e92c";

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
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text ?? "",
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
