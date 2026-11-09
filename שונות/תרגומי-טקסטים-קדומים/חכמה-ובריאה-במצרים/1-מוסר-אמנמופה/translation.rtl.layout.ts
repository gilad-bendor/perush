// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Instruction of Amenemope is wisdom verse numbered by the page and line of the papyrus (BM EA 10474: "4.12"),
// a papyrus line a verse line - mostly distichs, "אל תושיט את ידך לגעת בזקן, | ואל תיטול את פי הגדול.", with
// tercets and the long lists of the prologue - and 30 chapters, each opening with its title line ("הבית השני.").
// Lines are 15-55% of a row, so two to four share one. The rows are laid out by rule: the default cost of a break
// (punctuation), and a break inside a sentence dear - dearer inside a couplet (after the 1st, 3rd, ... line of
// the sentence, +40) than between two (+20). (A ";" ends a couplet as often as it joins two, so it does not end a
// unit: counting it moved twelve places, half of them for the worse.) A chapter's title is a sentence of its own,
// and shares its row with the first couplet where they fit, or takes a row of its own where they do not. Nothing
// needs an exception. A new page of the papyrus starts a new run, and so a new row - which strands a line now
// and then (13.9, 22.22, 25.21) and leaves two chapter titles in no run (5.20, 21.21).
//
// Repeated passages are laid out freely: "alike" copied the first refrain "ובכן, אינך יודע את עצות האל ..." into
// its repetition (23.8-11) across a couplet, and broke "מוטב החן ... | מעושר באוצר;" (16.11-12, which repeats
// 9.6-8 but for its first line) apart.
//
// The PDF's index lists the prologue's parts and the thirty chapters (###), each a third of a page or more. The
// footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "c2ddb9493a85eb9f97247898d1d1142a";

/** What ending a row after `line` costs. */
function rowBreak({ position, unit, endsUnit, cost }: BreakContext): BreakCost {
    if (endsUnit) return cost;
    // Inside a sentence: dearer inside a couplet (after its 1st, 3rd, ... line) than between two.
    return cost + ((position - unit.first) % 2 === 0 ? 40 : 20);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "free" }),
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
