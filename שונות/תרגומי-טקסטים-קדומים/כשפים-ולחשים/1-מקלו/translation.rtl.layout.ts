// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Maqlû: eight tablets of incantations and a ritual tablet, ~1,600 lines, most of them 20-50% of a row - one to
// three to a row, an incantation to a run (each has its heading). The rows are laid out by rule: a break inside a
// sentence is dearer (+15), and dearer still where it would leave the sentence's short first or last line alone
// (+25); where two lines fill a row, a sentence is taken as a chain of couplets (+35 inside one). A line with no
// punctuation is inside its clause (+40). The incantations are litanies - "בין ...", "אחזה את ...", "גירה, ..." -
// and a series of lines that open alike starts a row. The ritual tablet (its lines labelled 1', 2', ...) is prose:
// a row would rather start at an incantation's name ("הקסם "...": ..."), and never ends right after one. What
// the punctuation does not show - mostly parallel pairs - is said below, by the words of the lines.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout";
import { endsSentence } from "../../layout/rows";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f0b14e62c022c96bf3c65554c303638d";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "מאיר אתה את בתי האלים כולם,",                       // II 20-21: "you light the houses of the gods / all the lands" - a couplet
    "לרעה מבקשת ומבקשת אותי,",                           // II 206-207: "seeks me for evil / circles me not for good" - a couplet
    "של העלם הנאה – את אונו חטפה,",                       // III 8-9: the young man's / the young woman's - a couplet
    "מכשפה, בגלל פיך המדבר,",                             // III 182-183: "because of your speaking mouth / your strong hand"
    "הלילה, הכלה המכוסה,",                                // IV 93-94: the vocative, with its imperative
    "של מכשפי ומכשפתי,",                                  // III 70-71: the fronted genitive, with its clause (and II 39-40, two items of a list)
    "בואי, התהפכות, סערי, התהפכות,",                      // V 21-22: the call, with what it is called to do
    "מזה אני על לבכם מי נהר,",                            // V 109-110: "I sprinkle on your heart / on your embers" - a couplet
    "אם ער אתה – לא תבוא הנה,",                           // VI 10-11: "if you are awake / if you are asleep" - a couplet
    "מי את, מכשפה, אשר על פלוני בן פלוני אוספת אבנים,",   // VI 47-48: the question, with its second line
    "מעשייך, פעולותייך, פעולות מעשייך,",                  // VII 101-102: the list, with its last item (as VII 107-109)
    "זה – של מכשפי ומכשפתי:",                             // VII 154-155: "this - of my sorcerer: / they rose against me"
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אתה הוא אלי",                                       // II 101: the "you are ..." litany starts a row
    "שמים אני – לא תנגעי אותי",                           // III 147: the "I am ..." series starts a row
    "עושתי ומעשתי –",                                     // V 26, 36, 43: the refrain opens each stanza of "חסון, חסון"
    "מכשף ומכשפה, עושה ועושה –",                          // IV 149: the closing sentence, after the gira litany (as III 186)
    "כחמר ישחירו פניהם",                                  // III 74: the curse's last sentence, after "their witchcraft shall turn"
    "עולה אני כדגים ממימיי",                              // III 171, VI 90: the "I rise like fish ..." series starts a row -
    "טהורה אשתר, המאירה את הגורל",                        // III 176: after the "I rise like fish ..." series -
    "הוי, אלה של הבליח",                                  //   and VI 95, after its twin
    "פיך הרע – עפר יימלא",                                // VII 104, 111: the closing curse of the twin incantations
    "על צלמיה רחוצות ידיי",                               // VIII 39: from Ea's terror on the witch to the washing of hands                                     // V 26, 36, 43: the refrain opens each stanza of "חסון, חסון"
];

/** A line's text without footnote marks and italics. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words, as the exceptions name them: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]⟨⟩()?…]/g, "").replace(/\s+/g, " ").trim();
/** A line's first word, for a series of lines that open alike ("בין ...", "אחזה את ...", "גירה, ..."). */
const firstWord = (t: string) => plainWords(t).replace(/^קסם\.\s*/, "").split(/[\s,–]+/)[0] ?? "";
/** A real question: a "?" at the line's end, with a question word in the line (most "?" mark an uncertain reading). */
const asks = (t: string) => /\?["”]?$/.test(bare(t)) && /(^|[\s"“–])(מי|מה|מדוע|למה|לאן|היכן|איך)\s/.test(bare(t));
/** The ritual tablet's lines are labelled with a prime (1', 2', ...). */
const ritual = (label: string) => /['’]$/.test(label);

const unitEnd = ({ line }: UnitContext): boolean => endsSentence(line.text) || asks(line.text);

/** What ending a row after `line` costs. */
function rowBreak({ line, next, run, cost, endsUnit, position, unit, measure }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    let c = cost;
    // A line with no punctuation at its end is inside its clause; one ending in a dash leads into what follows.
    if (!/[.,;:!?"”)\]–—]$/.test(words)) c += 40;
    if (/[–—]$/.test(words)) c += DASH;
    if (ritual(line.label)) {
        // The ritual: a row would rather start at an incantation's name ("הקסם "...": ..."), and never leave the
        // name without what is done with it.
        if (/^הקסם/.test(words) && /:$/.test(words)) c += 80;
        if (/^הקסם/.test(after)) c -= 8;
        return endsUnit ? c : c + FLAT;
    }
    // A series of lines opening alike starts a row.
    const nn = run[position + 2];
    if (nn && firstWord(next.text) === firstWord(nn.text) && firstWord(line.text) !== firstWord(next.text)) c -= SERIES;
    // "עתה, ..." - the turn from the complaint to the act - starts a row.
    if (/^עתה/.test(after)) c -= 20;
    if (endsUnit) return c;
    // Inside a sentence a break is dearer; its first line, and its last, are not left alone on a row.
    c += FLAT;
    if (position === unit.first && measure.line(line) < 30) c += ORPHAN;
    if (position + 1 === unit.last && measure.line(next) < 40) c += ORPHAN;
    // Where two lines fill a row, a sentence is a chain of couplets: a break between two of them dear, one inside
    // a couplet (after an odd line of the sentence) dearer.
    if (measure.line(line) >= LONG && measure.line(next) >= LONG) c += (position - unit.first + 1) % 2 === 0 ? PAIR : ODD;
    return c;
}
const LONG = 28, FLAT = 15, PAIR = 0, ODD = 35, ORPHAN = 25, DASH = 10, SERIES = 15;

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "alike": the refrains and the twin incantations (VI 126-141, VII 101-113) follow their first occurrence.
    // ("similar" moved 16 places, mostly for the worse - it paired a litany's lines across its refrain.)
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
    pdf: {
        // The tablets are what a reader looks for; the incantations (~100, most a third of a page or less) are
        // labels, and would make the index several pages long.
        indexDepth: 2,
        // The tablet ("מקלו, לוח I: ...") says where the reader is; before the first one, the title.
        footerTitle: ({ chain }) => chain.find(h => h.level === 2)?.text ?? chain[0]?.text ?? "",
    },
});
export default layout;
