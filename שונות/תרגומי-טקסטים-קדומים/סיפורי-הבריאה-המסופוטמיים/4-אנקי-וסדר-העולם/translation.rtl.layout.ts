// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Enki and the World Order: a Sumerian hymn-narrative whose lines are long (20-70% of a row), one to three to
// a row, each a clause ending with ";" or "," - a sentence is often a chain of them. The default
// (punctuation) is near the fewest rows already; the rules move breaks to where the sense pauses: a direct
// speech ends its row, a line ending in a dash leads into what completes it (above all an appointee's name
// into "אנקי לצידו העמיד."), a line with no punctuation is inside its clause. The rest - couplets the
// punctuation does not show, refrains - is named below by the words of the lines.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f893931fe75f4867522859a452ec1c20";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "תאו נולד, איל נולד,",                         // 12-13: the wild animals born - a couplet
    "הדבר שלך – לעלמה, כמו חנה – על הראש נתן;",    // 34-35: the second of "your word" couplets (32-33, 34-35)
    "לומר (להם) שלום –",                           // 39-40: "to greet them - / with you Enlil commanded."
    "החכמים, אנשי־האבריג, האנשים אשר עין",          // 102-103: one clause over two lines
    "האנכום והנינכום – את היד לי מיישרים;",         // 104-105: the priests' service, a couplet
    "כשתצא,",                                      // 55-56, 58: "when you go out to ... -" leads into what follows
    "גשם השפע מן השמים נמטר;",                     // 90-91: "when I go to heaven ... / when I go to earth ..." - a couplet
    "עץ־המס, המעוטר מן האפסו,",                    // 171-172: the epithet, with its relative clause "שבארידו ..."
    "המלך, שאנליל כוח נתן לו,",                    // 244-245: the king - the subject of "destroyed their houses"
    "אין לו בית,",                                // 131-132, 248-249: "to him who has no city, no house, / to the Martu -"
    "נכסים מילא;",                                 // 261-262, 299-300, 368-369: the refrain "filled the Ekur ... / Enlil rejoiced with Enki"
    "לזרועו השמאלית את הארץ הדביק;",               // 265-266: the land at his left arm / abundance came to him from it
    "האדון גוזר הגורל, אנקי, מלך האפסו,",          // 271-273: the subject, with its appointment
    "קניך – קנים גדולים יהיו, קני יהיו!",          // 223-224: Meluhha's reeds / the hero's weapon (of reed)
    "שווריך – שוורים גדולים יהיו, שוורי ההר יהיו!", // 225-226: its bulls / their roar
    "ציפוריך – טוסים יהיו!",                      // 229-230: its birds / their cry
    "כספך – זהב יהי!",                             // 231-232: its silver / its copper
    "חוט מיושר – סיבכת וסיבכת;",                    // 440-441: the straight thread tangled / the tangled straightened
    "לבדידותי מה אמרת",                           // 393-394, 422-423: Inanna's refrain, a couplet
    "לבדידותי מה עשית",
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אנקי, אדון השפע, אדון הבינה",                 // 41: a new chain of epithets, after "... Enlil commanded."
    "אחותי הנכבדה",                                // 403, 406, 412: each of Inanna's sisters starts a row
    "ננשה, הגבירה הנישאה",                         // 418: and the last of them
];
/** Lines whose closing dash ends an address, not a clause: a break after them costs what punctuation says. */
const DASH_CLOSES: readonly string[] = [
    "יער החשור, רחב הצל, שסמכותו מכוחו –",          // 214: the last of Ur's epithets, before "your me ... shall be set right!"
];

/** A line's text without footnote marks and italics. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words, as the exceptions name them: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]⟨⟩?…]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^\[?["“]/.test(bare(t));
const closesSpeech = (t: string) => /["”]\s*\]?$/.test(bare(t));
/** A speech formula: "... אומר:", "... גוזר:", "... משיב:" - a line ending with ":". */
const formula = (t: string) => /:$/.test(bare(t));

/** The appointment formula, "(את X –) אנקי לצידו העמיד.", ending the sentence that names the appointee. */
const appoints = (t: string) => /לצידו העמיד/.test(plainWords(t));
const endsClause = (t: string) => /[.;:!]["”]?$/.test(bare(t));
/** Whether run[i] opens a sentence that ends with the appointment formula (and is longer than the formula line). */
function opensAppointment(run: readonly NumberedLine[], i: number): boolean {
    if (i === 0 || !endsClause(run[i - 1].text)) return false;
    for (let j = i; j < run.length; j++) {
        if (appoints(run[j].text)) return j > i;
        if (endsClause(run[j].text)) return false;
    }
    return false;
}

/** What ending a row after `line` costs. */
function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => plainWords(next.text).replace(/^["“]/, "").startsWith(w))) return "always";
    // A speech that closes ends its row - unless a speech formula or another speech follows.
    if (closesSpeech(line.text) && !formula(next.text) && !opensSpeech(next.text)) return "always";
    // An appointment - the appointee's epithets, his name, "אנקי לצידו העמיד." - would rather start a row
    // (not always: a lacuna line before it may join it).
    if (opensAppointment(run, position + 1)) return cost - 80;
    // The formula alone ("אנקי לצידו העמיד.") is not left on a row of its own.
    if (appoints(next.text) && plainWords(next.text).length < 25) return cost + 150;
    // A line ending in a dash leads into what completes it ("X – | אנקי לצידו העמיד.").
    if (/[–—]$/.test(bare(line.text)) && !DASH_CLOSES.some(w => words.endsWith(w))) return cost + 60;
    // A line with no punctuation at its end is inside its clause (the verb comes last).
    if (!/[.,;:!?"”)\]–—]$/.test(bare(line.text))) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike", minimumFill: 30 }),
    pdf: {
        // The ## sections are the hymn's subjects - the lands whose fate Enki decrees, the gods he appoints,
        // Inanna's complaint - short (a fifth of a page or so) but what a reader looks for: the way in.
        indexDepth: 2,
        // One subject: the title alone.
        footerTitle: ({ chain }) => chain.find(h => h.level === 1)?.text ?? "",
    },
});
export default layout;
