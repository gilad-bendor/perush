// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Curse of Akkad is Sumerian narrative verse: lines of "topic – comment", the verb last, mostly in parallel
// pairs. Its rows are laid out by rule (§2): a unit is a clause, up to a line ending with `;` or a sentence's end,
// and a break inside one is dear; a break at a `;` that does not end the sentence costs a little more than one
// at a `.` or `!`. A simile ("כגבר ...,") stays with the clause it is a simile of; a line ending with a dash leads
// into the next (more so when the next opens with a dash too); two lines nearly alike in letters stay together.
// The parallel pairs no punctuation shows are named below by their words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout";
import { lineSimilarity } from "../../layout/numbered-lines";
import { endsSentence } from "../../layout/rows";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "11aaeb873a81345c5c08587be9e0fa5d";

/** A row must not end after a line whose words (as plain() gives them) end so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "אנשים שאינם יודעים שעורה,",           // 46-47: the Martu / bring the oxen to her - a couplet, like Meluhha 48-49
    "לקבל לא ידעה;",                        // 55-56: Inanna could not take the offerings / was not sated - a couplet
    "את זוהרה, שהגיע השמימה,",              // 72-73 (and A2-A3): her radiance / An raised it - object and verb
    "ראש מנפץ;",                            // 79-82: the four similes in two pairs (elephant, bull | dragon, battle)
    "אל הבית – ספינות גדולות ברציף עגן;",   // 143-144: to the house / to Enlil's house ships moored - a couplet
    "השמה את הארץ יחד,",                    // 149-150: storm / flood - Enlil's two epithets, a pair before him
    "על הגג מת;",                           // 181-182: who lay on the roof / who lay in the house - a couplet
    "מלמעלה שכב;",                          // 191-192: youth upon youth / blood upon blood - a couplet
    "פיזר לו;",                             // C2-C3: the early version's 100-101, kept as there
    "במעדר הפיל;",                          // D2-D3: the gate of peace / peace in all lands, as 125-126
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "העומדים בבית –",                       // 131 | 132-133: the "though" clause goes with "Naram-Suen threw into the fire"
    "הנפח הולם.",                           // 141 | 142: the smiths' sentence ends; "– though ..." leads to 143
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אכד הנשחתת",                           // 281: the closing praise line, a row of its own
];

/** A line's words: no footnotes, emphasis, vowel points (the maqaf kept) or brackets. */
const plain = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[*]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]]/g, "").trim();

/** A unit is a clause: it ends where a sentence ends, or at a `;`. */
const unitEnd = ({ line }: UnitContext): boolean => endsSentence(line.text) || /;$/.test(plain(line.text));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const t = plain(line.text), n = plain(next.text);
    if (KEEP_WITH_NEXT.some(w => t.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => t.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => n.startsWith(w))) return "always";
    // A simile ("כנער ..., / כגבר ...,") leads to the clause it is a simile of.
    if (/^כ/.test(t) && /,$/.test(t)) return "never";
    let c = cost;
    if (/[–—]$/.test(t)) c += 40;                              // "X –" leads into what is said of X
    if (/[–—]$/.test(t) && /^[–—]/.test(n)) c += 40;           // ... and the more so into a dash's parenthesis
    if (!/[.,;:!?–—…"]$/.test(t)) c += 40;                     // no punctuation: inside its clause (the verb is last)
    const alike = lineSimilarity(line.text, next.text);        // a parallel pair in the same words
    if (alike >= 0.55) c += 30;
    if (alike >= 0.8) c += 60;
    if (!endsUnit) c += 60;
    else if (!endsSentence(line.text)) c += 10;                // a `;` inside a sentence: a weaker pause than its end
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        // The ## sections are the poem's movements, each with its lines - the way in.
        indexDepth: 2,
        // One subject: the title alone.
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
