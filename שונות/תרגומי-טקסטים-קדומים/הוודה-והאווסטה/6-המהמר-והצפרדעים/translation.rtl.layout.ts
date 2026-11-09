// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Two Rigveda hymns, the Gambler (10.34, trishtubh) and the Frogs (7.103, trishtubh and anushtubh), a line per
// pada (`1a`..`1d`): each stanza is a run of its own, its letters breaking the numbering at every `a`. A stanza is
// two half-verses (ab | cd), the Vedic metre's own pause - so a unit is a half-verse, ending at a pada with an even
// letter (b, d), and a break inside one is dear. A stanza is two rows, one per half-verse - but for the Frogs'
// short first stanza, whose four padas fill one row. The default ran three padas together and left the fourth
// alone in 13 stanzas, mostly mid-sentence ("בגלל קובייה אחת־יותר | הרחקתי את אשתי המסורה").
//
// The PDF's index goes down to the two hymns (##); their sections (###) are a few stanzas, a third of a page or
// so. The footer is the title and the hymn.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "356bf65a73395c0d1fc4c17268e5a273";

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
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
