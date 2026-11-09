// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Five Rigveda hymns of the beginning - 10.129 and 10.121 in trishtubh, 10.72, 10.190 and 10.90 mostly in short
// eight-syllable padas - a line per pada (`1a`..`1d`): each stanza is a run of its own, its letters breaking the numbering at
// every `a`. A stanza is two half-verses (ab | cd), the Vedic metre's own pause - so a unit is a half-verse, ending
// at a pada with an even letter (b, d), and a break inside one is dear. A trishtubh stanza is two rows, one per
// half-verse; an anushtubh stanza of short padas is one row where its four padas fit (8 of the 29), and two
// half-verse rows where they do not - the stanza, not the hymn, decides. The default ran three padas together and
// left the fourth alone in 21 stanzas ("את קרבת היֵשׁ בָּאַיִן מצאו | אחרי שחיפשו בלבם...").
//
// The PDF's index goes down to the five hymns (##); their sections (###) are a stanza or a few, a third of a page
// or less. The footer is the hymn at the top of the sheet, with its Rigveda number - the title above it would make
// the line too long - or the title before the first hymn.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "eb28fb94bb27ca1cf281b01ecb619fe9";

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
