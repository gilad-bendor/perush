// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Dialogue of Pessimism is a dialogue in eleven stanzas, each in one frame: the call and the answer, the
// master's wish, the slave's praise of it, the master's "no", the slave's warning. Its rows follow the speeches:
// a unit is a sentence, a speech or a quotation (a row ends where one closes, and starts where one opens), and
// a unit is kept whole. A unit too long for one row is split into pairs of lines - the field stanza's man, dog,
// raven and onager two by two, the same both times.
//
// The PDF has no index: it is four pages, and its stanzas - the only sections - are five or six rows each, all
// seen at a glance; listed down to them, the index would be as long as a stanza. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout";
import { endsSentence } from "../../layout/rows";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "b193219dc5f2458062314e297e39a678";

/** A line's beginning: without footnotes and opening brackets. */
const lead = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim().replace(/^[\[(*]+/, "");
/** A speech ("...") or a quotation inside one ('...') opens with the line. */
const opens = (t: string) => /^["'“‘]/.test(lead(t));

/** A unit ends with a sentence, or before a speech or a quotation opens. */
function unitEnd({ line, next }: UnitContext): boolean {
    return endsSentence(line.text) || (next !== null && opens(next.text));
}

/** A break inside a unit is dear, dearer inside a pair of its lines (after an odd line of it) than between two. */
function rowBreak({ line, run, position, unit, endsUnit, cost }: BreakContext): BreakCost {
    if (endsUnit) return cost;
    const inUnit = position - unit.first;
    return cost + (inUnit % 2 === 0 ? 150 : 60);
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
