// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Gudea cylinders: Sumerian hymnic narrative, a line of the cylinder per line - short clauses, most of them
// a topic and its comment joined by dashes ("לבית – את צורתו שָׂם;"), two to four to a row. Its rows are laid
// out by rule: the default cost of a break (punctuation); a line ending in a dash leads into what completes it,
// and a line with no punctuation is inside its clause; a short closing verb ("לו מַגִּיעָה.") does not start a
// row; parallel lines - found by their letters - are kept on a row; a speech ends its row, and would rather
// start one. What none of these shows - the couplets of a narrative sequence, the shape of a list (the levies
// and their standards, the seven squares, the gods' gifts, the appointees and their epithets) - is named below
// by the words of the lines, in the order of the file.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";
import { lineSimilarity } from "../../layout/numbered-lines";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "735fe262c1aaa05fc15535a1cd1c70c0";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "נינגירסו, מהולל באפסו,",               // A.ii.10-12: the vocative's three epithets, one row
    "השני – גיבור היה:",                    // A.v.2-4: "the second was a hero: / ... a tablet in his hand; / he set the house's plan"
    "לוח־כתב ספיר בידו אחז;",
    "השני, שגיבור היה, זרוע כפף,",          // A.vi.3-5: "the second, who was a hero ... - Nindub he is"
    "כשלמלכך מרכבה תתקין,",                 // A.vi.17-18: the chariot / its donkey - a couplet
    "ובספיר תקשט –",                        // A.vi.19-20: the chariot adorned / its arrows
    "אושומגל־כלמה,",                        // A.vi.24, A.vii.24, B.xv.21: the balag, with its epithet or its office
    "את החמור שלה, פיריג־כשה־פדה,",         // A.vii.20-21, B.ix.16-17: the chariot's donkey, with its harnessing
    "עמו אליו נכנס;",                       // A.vii.28-30: "into the Eninnu ... he went in; / into the house he brought it"
    "כשעל טנא המלבן שרטט,",                 // A.xiii.20-21: "when he drew ... / and when he set ..." - a couplet
    "– ציווה;",                             // A.xv.11, 15: "Ninzaga he commanded; / his copper ..." - the god with his gift
    "ספינות חאונה, ספינות נלואה,",          // A.xvi.7-9: the ships, the bitumen - from the mountains of Madga
    "בנחושת ובבדיל – בונה;",                // A.xvi.28-30: building in copper and tin - with the chief smith
    "שנת הלילה של השמים – אינה נכנסת;",     // A.xvii.8-9: no sleep at night / no rest at noon - a couplet
    "איקו של אמת הוא – חבל שם ושם;",        // A.xvii.26-27: the cord stretched / the peg set - a couplet
    "כשהרחם – כנהר נשגב – קם,",             // A.xix.10-11: "when the womb rose ... / king Enki decreed"
    "כאיש שלחם מעט עומד בפיו,",             // A.xix.26-27: the third simile with its verb, as the two before it
    "בניית בית מלכו,",                      // A.xx.9-11: what the dream showed - "the building of his master's house ... was set before his eyes"
    "מן המזוזה – ישב:",                     // A.xxi.15-16: "from the doorpost he sat: / the lofty house embraces heaven"
    "את המרתום – את צורת הקרב שלהם –",      // B.vii.15-16: the weapons' battle order / "to set right"
    "חמור נמוך, חמור ארידו –",              // B.ix.18-19: the donkeys / "to say: enter"
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "כשעצים ממנו תשים החוצה,",              // A.vi.16: the seal changed, the wood set out - a row; the chariot next
    "מן האשפה כאור היום יוצאים –",          // A.vi.20: the arrows close the chariot's sentence
    "כשאת שמך עליו תכתוב,",                 // A.vi.21-23: the three "כשאת ..." of the weapons and the standard
    "ראש שפל אליו שם;",                     // A.vii.12: Gudea bows to Nanshe's word; her orders carried out follow
    "גודאה – בין העצים התהלך;",             // A.vii.13-15: the seal and the wood; 16-18 the trees tended
    "אליה רתם ורתם;",                       // A.vii.19-21: the chariot and its donkey; 22-23 the standard
    "את שמו עליו כתב;",                     // A.vii.22-23: the standard and its name, as in A.vi.21-23
    "לנס – הנציץ.",                         // A.xiii.23: the standard raised; the couplets 24-25, 26-27, 28-29 follow
    "הקמה שם;",                             // A.xiv.7-13: each levy ("... הקמה שָׂם;") ends its row
    "לראשה עמד.",                           // A.xiv.14-27: each family's standard ("... לראשה עמד.") ends its row
    "בקרדום גדול – חתך;",                   // A.xv.22-25: the cedars cut; the Šarur, cut with the axe, a row of its own
    "בקרדום פילח.",
    "על המים צף הוא –",                     // A.xv.26: the floating logs - then the list of timbers (27-35)
    "כמי ששמח – הדבר אותו שם.",             // A.xvii.28, A.xx.4, 12: the refrain ends its sentence and its row
    "אותו – שפע – לו יצא.",                 // A.xviii.5: the morning ends; "Gudea went out of Iri-kug ..." (6-9) a row
    "יד – עמו – נתונה.",                    // A.xviii.16: the gods who go with him; the rite (17-) begins
    "את הלב – עמו – יגע.",                  // A.xxii.13: with Enki in the Eengura; the foundation of heaven (14-) next
    "להתפעל – העמיד.",                      // A.xxiv.17, 25: the house set up in wonder; the gate towers (18-19) a couplet
    "כמים לשום,",                           // B.vii.18: the enemy mountain like water; Lugal-kurdub's epithets (19-21) a row
    "בשמחה – להוביל,",                      // B.ix.20: the driver's duties end; his epithets (21-23) a row
    "שבע הבנות התאומות של באו – הן;",       // B.xi.3-11: the seven daughters, named; their service (12-14) next
    "הצעירות של האדון נינגירסו – הן –",     // B.xi.12: "with Gudea's prayer ... they stood" (13-14) a row
    "שמול ההר – חזה לא השיב,",              // B.xiv.1: the mitum's clause ends; the next weapons follow
    "את בתו – אל ירושתו – הכניס;",          // B.xviii.9: the heiress; "the day of justice ... / the wicked ..." (10-11) a row
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אן, מלך האלים,",                       // A.x.12: the second naming, with its name (13-14)
    "במשפחות של",                           // A.xiv.16, 26: each family's levy starts a row, after the names of its emblems
    "את נין־סיקילה",                        // A.xv.15: the second god commanded, as the first (11-14)
    "מטנא המלבן",                           // A.xix.13-14: he lifted the brick from the mould / like a crown - a couplet
    "גודאה, האיש הבונה את הבית,",           // A.xx.24: the subject, with what he does (25-27)
    "בבית – ריבוע",                         // A.xxi.1-11: each of the seven squares starts a row, with its image
    "את בית־המשכב – בנו;",                  // A.xxv.17: the bedchamber, with the mes-tree that bears fruit (18-19)
    "מלכו, האדון נינגירסו,",                // A.xxvii.22: the subject, with "found it in his pure heart" (23-24)
    "המצביא השני של האדון,",                // B.viii.7: the epithet, with its name (8-9)
    "את זה שעמו הוא נמלך,",                 // B.viii.20: the epithet, with its name (21-22)
];

/** A line's text without footnote marks and italics. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words, as the exceptions name them: no vowel points (the maqaf kept), brackets, parentheses, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()⟨⟩?…]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^\[?["“]/.test(bare(t));
const closesSpeech = (t: string) => /["”]\s*\]?$/.test(bare(t));
/** How alike two lines are - 0 for a line that is not there. */
const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, run, position, cost, measure }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row - unless another speech follows.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    // A speech would rather start a row - after a sentence or its formula ("... ברכה לו בירך:"). A quotation
    // after a ";" or a dash is a name ("שור נורא ..." – | במשפחות של נינגירסו), not a speech.
    if (opensSpeech(next.text) && /[.:!]$/.test(bare(line.text))) c -= 40;
    // A short line that closes a sentence ("לו מַגִּיעָה.", "לו עגן.") is not left to start a row.
    if (measure.line(next) < 12.5 && /[.;:!]["”]?$/.test(bare(next.text))) c += 80;
    // A line ending in a dash is a topic: it leads into its comment ("X – | ... הביט.").
    if (/[–—]$/.test(bare(line.text))) c += 60;
    // A line with no punctuation at its end is inside its clause (the verb comes last).
    else if (!/[.,;:!?"”)\]]$/.test(bare(line.text))) c += 40;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 60;
    return c;
}

/** A section heading's title: without its line range ("A.i.1–A.i.16: ") - the range prints in a scrambled order. */
const sectionTitle = (t: string) => t.replace(/^[^:]*\d\s*:\s*/, "").trim();
/** Its first part: up to the first " – " or "; " outside a quotation ("החלום", "עצת ננשה"). */
function shortTitle(t: string): string {
    let quoted = false;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '"') quoted = !quoted;
        else if (!quoted && (t.startsWith(" – ", i) || t.startsWith("; ", i))) return t.slice(0, i);
    }
    return t;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike", minimumFill: 30 }),
    pdf: {
        // The ##s - some eighty episodes (the dream, Nanshe's interpretation, the levy, the seven squares, each of
        // the god's household): short, but they are the text's only division, and what a reader looks for.
        indexDepth: 2,
        // The title (before its ":"), the cylinder and the episode's first words: "גליליות גודאה / גליל A / החלום".
        footerTitle: ({ chain }) => {
            const title = (chain.find(h => h.level === 1)?.text ?? "").replace(/:.*$/, "").trim();
            const section = chain.find(h => h.level === 2)?.text.trim();
            if (!section) return title;
            const cylinder = section.match(/^([AB])\./)?.[1];
            return [title, cylinder ? `גליל ${cylinder}` : "", shortTitle(sectionTitle(section))].filter(Boolean).join(" / ");
        },
    },
});
export default layout;
