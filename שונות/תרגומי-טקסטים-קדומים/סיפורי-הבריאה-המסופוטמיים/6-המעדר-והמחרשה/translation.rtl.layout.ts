// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Hoe and the Plough is a Sumerian debate poem: long lines (25-60% of a row), two or three to a row, and
// the default (punctuation) is already at the fewest rows. The rules below only move breaks to where the sense
// pauses: a line ending with a dash is a fronted clause or topic ("כשאת יוצאת אל השדה אחריי –") whose main
// clause is the next line, and the row goes on to it; the hoe's refrain ("... את אשתו ואת ילדיו – בי כלכל.")
// ends its row. What the punctuation does not show - parallel pairs, and the building list that the hoe says
// back to the plough (13-17 / 122-126), laid out alike - is named below by its words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "df6258c08fecb6265036b4a41d154859";

/** Where a row must not end: after a line whose words end so (without vowel points or markup). */
const KEEP_WITH_NEXT: readonly string[] = [
    "לאנליל אני צוברת;",                 // 43-44: "I heap for Enlil / for him I pile emmer and wheat" - "לו" is Enlil
    "אנחנו – את החורף כקציר שקלת;",      // 174-175: winter / summer and winter - a couplet
    "תנובה יוצאת;",                      // 148-149: fruit comes out / its fruit adorns the gods' house
    "וספינת־מגילום בניתי לו,",           // 140-141: "after I built him boats, / the sailor feeds ... by me"
];
/** Dashes that do not lead on: a row may end after them at the default cost. */
const DASH_MAY_END: readonly string[] = [
    "הבורח מתוך הסחבה –",                // 5: the last of the hoe's epithets - 6 names him again ("מעדר – עם מחרשה ...")
    "במקום אשר אין בו מים –",            // 160: a fronted place; 161-162 are a sentence, and 163-164 a pair after them
];
/** Where a row must start: at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "כרי־התל",                           // 43: a new pair after "הר ירקרק – טעון חן הוא."
    "יסוד בארץ",                         // 14 / 123: the building list in pairs - foundation and wall,
    "גג של איש נאמן",                    // 16 / 125:   roof and street - the plough's taunt and the hoe's reply alike
    "ימי צדי",                           // 105-108: my twelve months / your four; your eight / twice your standing
    "ימי פרישתך",
    "כשאת ראשך",                         // 93-95: two "when" clauses and "your tooth broke", after 91-92
    "שנית – נגר",                        // 98: "secondly" - the repairs begin
    "אני – מעדר אני",                    // 117: the hoe's self-praise, after the plough's insult ends (116)
    "עבד הדבק בבעליו",                   // 119-121: "– אני;" three times
    "הפקידים והממונים",                  // 131: after the palace sentence (127-130) closes - a row of its own,
    "טיט חולה",                          // 132:   and the houses (132-133) another
    "כאשר בבית הבנוי",                   // 166-171: the six clauses in their pairs - "after", "when", "after Enlil"
    "אחרי שאנליל את הקציר",
    "אנליל אותנו מידו לא שמט",           // 172: the main clause after the six "after / when" lines, with 173
];

/** A line's words: no footnote marks, no italics, no vowel points (the range keeps the maqaf). */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for this text's rules and exceptions. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    if (BREAK_BEFORE.some(words => plain(next.text).startsWith(words))) return "always";
    // The hoe's refrain - the labourer, the sailor, the gardener "feeds his wife and children by me" - ends its row.
    if (/בי (כלכל|מכולכל)\.$/.test(text)) return "always";
    // A direct speech ends its row ("איכרך לך בשם קורא: "המחרשה הזאת – תמה!"").
    if (/["”]$/.test(text) && !/^["“]/.test(plain(next.text))) return "always";
    // A line that ends with a dash leads into the next: its main clause, or the rest of its sentence.
    if (/[–—]$/.test(text) && !DASH_MAY_END.some(words => text.endsWith(words))) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The ##s are the poem's movements (each speech, its topics, the verdict) - the way in.
        indexDepth: 2,
        // One subject: the title alone.
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
