// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// A Sumerian debate poem: long lines (30-60% of a row), so a row holds one or two of them, and the default
// (punctuation) is already at the fewest rows. The rules below only move breaks to where the sense pauses:
// a direct speech ends its row, and a few lines are kept with the line they lead into or pair with.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "12042d195e5fdfd99d6015186ba2b87d";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [
    "לאכילתם ולשתייתם נתן;",           // a pair with "את שפע האלים – בצידו העמיד;" (and in the plea, 150)
    "אחרי שעיצב ועיצב –",            // leads into "דגים וציפורים – את סבך הקנים ... מילא"
    "את מקומות עמידתם להם מצא,",       // a couplet with "את צורותיהם לעיניהם הודיע."
    "לבית־המפטם מכניסים אותך,",        // the fattening house: three lines of one picture
    "כשור וכצאן – גורמים לך להמות;",
    "את שאונך – מעל קודקודי!",         // "מן הבצה צאי!" ... "אל בור תל האשפה צאי"
    "לשיבוץ שעוטרתי בו;",              // my work / "לדונג הטהור שלך – עבודה לא הוטלה!"
    "עינו עליי קיימת;",                // a pair: "... קיימת; | ... קיימת!"
    "את עוביו אודיעך;",                // the closing threat, with "בידך אמלא!"
    "לדעת את העובי ואת רוממותו –",     // leads into "בתוך אֶרִידוּ – את הריב לארץ הדביקו"
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "אני – ציפור נאה ובקיאה אני!",     // the bird's self-presentation, a line of its own
];

const plain = (text: string) => text.replace(/\[\^\d+\]$/, "");

/** What ending a row after a line costs: the default (punctuation), but for the exceptions. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => text.endsWith(words))) return "always";
    // A direct speech ends its row - unless another speech follows at once.
    if (text.endsWith('"') && !next.text.startsWith('"')) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The ## sections are the poem's movements (the speeches, the fight, the verdict) - the way in.
        indexDepth: 2,
        // One subject: the title alone.
        footerTitle: ({ chain }) => chain.find(h => h.level === 1)?.text ?? "",
    },
});
export default layout;
