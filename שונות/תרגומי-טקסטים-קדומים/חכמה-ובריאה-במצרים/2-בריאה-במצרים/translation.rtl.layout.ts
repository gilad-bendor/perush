// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Five Egyptian creation texts - Merikare, four Pyramid Texts, the Memphite Theology - each numbered by the
// lines or columns of its monument: a line of the translation is a whole column of a pyramid's wall or of the
// Shabaka Stone, mostly two or three printed rows long, and runs on mid-sentence into the next. So nearly every
// line is a row of its own (33 are wider than a row), the rows are the fewest possible whatever a rule says, and
// the default rule (punctuation, rows as full as they can be) is all there is. Where it has a choice, it pairs
// the Shabaka Stone's split columns - Geb's words (a) with their caption (b), "דברים לאמר, גֶּבּ אל [סֵת]: ... |
// סֵת: הדרום." - which is the stone's own layout.
//
// 32 lines are in no run - the Shabaka Stone's broken columns (24a,b, 28a-35a, ...) and those whose numbering
// jumps as the stone's does (10c after 12b, 48-52b) - each a row of its own.
//
// The PDF's index lists the five texts (##); their ###s are mostly one or two rows each. The footer is the
// title and the text, each without what follows its colon or in its parenthesis.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "9a29a7af278c6b5d99c6c8d98c36f2c5";

/** What ending a row after a line costs: the default (punctuation). */
function rowBreak({ cost }: BreakContext): BreakCost {
    return cost;
}

/** A heading, short: without what follows its colon, or its parenthesis. */
const short = (text: string) => text.replace(/:.*$/, "").replace(/ \(.*\)$/, "");

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => short(h.text)).join(" / "),
    },
});
export default layout;
