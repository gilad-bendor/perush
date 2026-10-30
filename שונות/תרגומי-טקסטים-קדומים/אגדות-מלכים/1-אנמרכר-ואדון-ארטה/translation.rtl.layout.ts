// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Enmerkar and the Lord of Aratta is Sumerian narrative verse, most of it speech: messages charged to the
// messenger, carried over the mountains and repeated word for word - or nearly - to the other king. Its rows
// are laid out by rule: the default cost of a break (punctuation; a rare full stop ends a passage); a break
// inside a sentence dearer (+30); parallel lines - found by their letters - kept on a row; a short line ending
// with a dash (a subject: "אנשי ארטה –") kept with the line it leads into; each speech starting a row and ending
// one; and a repeated message laid out like its first telling (`similar`: the messenger's "יעלה" / "תעלה",
// "אעיף" / "אבריח"). What none of these shows is named below by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "2e4adf169158d7a1d317a4f63c1bb5d4";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "הגבירה הצופה אל ההר,",                  // 65-66: Inanna's two epithets on a row; her name and "פונה:" the next
    "אדון ארטה – צוואר לארץ הניח!\"",         // 234-235: the quotation and "shall I say so to him?" - one sentence
    "שפרתו החזקה בהר ה־מה הזכים ילדה,",      // 210-212, 528-530: the three relative clauses (bore / grew / suckled)
    "שעל עפר ארטה גדל,",                     //   on one row
    "על חמורי־המשא – בתלותו,",               // 282-283, 330-331: the pack asses / the spare asses - a pair
    "המלך, האדון רחב הבינה,",                // 332-333: the king's titles, then his deed
    "בשרביטי – שורשו: ה־מה של הנסיכות;",     // 340-341, 382-383: the sceptre's root / its branches - a couplet
    "בשם עץ לא ייקרא;",                      // 398-399: "not wood ... when he holds it" - the riddle's premise
    "ארטה – בצדיה הצחיחים, בלב ההררים –",    // 549-550: "in Aratta's dry flanks - wheat grew by itself"
    "בארטה – כך אמרו עמה:",                  // 600-602: a short speech with its introduction (the row above is full)
    "מדי יום – כשיישאו,",                    // 96-98: "the people of Aratta - daily when they carry - when the cool comes -"
    "של גרגרותי – התכשיט אתה, אכן!",         // 103-104: Inanna's blessing closes on one row
    "צפצפה – לא יהיה, עץ־השים־גיג – לא יהיה,", // 400-403: the woods two by two
    "צפצפת־הפרת – כבעץ המרכבה – לא יהיה,",  // 404-405: "X - like the Y of a chariot / of a whip - not" - a pair
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "אם אכן יערום – חן הכרי –",              // 285: the condition ends; Inanna's epithets (286-289) begin
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "האדון – לשליח ההולך אל ההר",            // 337, 433: the lord turns to the messenger - a new charge
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const lead = (t: string) => bare(t).replace(/\*/g, "").replace(/^[\[(]+/, "");
const opensSpeech = (t: string) => /^["“]/.test(lead(t));
const closesSpeech = (t: string) => /["”]\]?$/.test(bare(t).replace(/\*/g, ""));
/** A line that is all lacuna: "[…] … […]". */
const lacuna = (t: string) => /^[\[\]….\s"']*$/.test(bare(t));
/** The messenger's formula: "שליח, אל מלכך ... – כשתדבר אליו, כשתוסיף לו –". */
const charge = (t: string) => /כשתוסיף לו –$/.test(plainWords(t));

const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, run, position, measure }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“'‘]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech starts a row - but a one-line speech answered by another may share it, and a line that leads
    // into it with a dash ("כאשר כך אמר לו –") stays with it.
    if (opensSpeech(next.text) && !(opensSpeech(line.text) && closesSpeech(line.text)) && !/[–—]$/.test(bare(line.text))) return "always";
    // A speech that closes ends its row, unless another speech answers it (or a lost line follows).
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !lacuna(next.text)) return "always";
    let c = cost;
    // A full stop is rare here (a clause ends with ";"): it ends a passage.
    if (/[^\s….]\.$/.test(bare(line.text).replace(/\*/g, ""))) c -= 15;
    // The messenger's charge starts a row.
    if (charge(next.text)) c -= 20;
    // A line ending with a dash leads into the next: a subject into its verb ("אנשי ארטה – / ...").
    if (/[–—]$/.test(bare(line.text)) && !charge(line.text)) c += measure.line(line) < 30 ? 100 : 10;
    if (!endsUnit) c += 30;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 120;
    return c;
}

/** A section's heading without its line range ("1–32: ..."), which prints in a scrambled order. */
const unnumbered = (t: string) => t.replace(/^[\d–\-\s]+:\s*/, "").trim();

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "similar" }),
    // The index: the ##s - the poem's 26 episodes, about half a page each (12 pages of text). The footer: the title
    // and the episode, without its line range - "אנמרכר ואדון אָרַטָּה / הַשָּׁלִיחַ וְהַפְּקֻדָּה – ...".
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => unnumbered(h.text)).join(" / "),
    },
});
export default layout;
