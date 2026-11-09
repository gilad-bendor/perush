// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Enmerkar and Ensuhgirana is Sumerian narrative verse of the Uruk cycle, in the style of Enmerkar and the Lord of
// Aratta, and laid out by that poem's rule: the default cost of a break (punctuation; a rare full stop ends a
// passage); a break inside a sentence dearer (+30); parallel lines - found by their letters - kept on a row ("הוא –
// עם אִינַנָּה ... / אני – עם אִינַנָּה ...", the magician's beast and the old woman's in each round of the contest); a
// short line ending with a dash kept with the line it leads into; and a repeated passage laid out like its first
// telling (`similar`: the messenger repeats the boast, the cow's and the goat's dialogues, the magician's plan told
// twice). One thing differs from Aratta: a speech's opening and close are a cost (−25), not a rule. The formulas
// that introduce a speech are short here ("המלחש – משיב לה:", 20% of a row), and a row of their own left eight rows
// nearly empty; now such a formula ends the row of the speech it answers, or shares a row with the speech's first
// line. What none of this shows is named below. 166 rows against the fewest possible 157.
//
// The PDF's index lists the sixteen episodes (##), about half a page each. The footer is the title and the
// episode, without its line range.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "115cb270be1073236a1dedc710705192";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "שורו – עם שורי – לאחיזה קם",            // 122-127: his bull / Uruk's bull, his man / Uruk's man, his dog / Uruk's dog -
    "עם אישי – בכוח הכה",                    //   three pairs, each on its row
    "עם כלבי – בכוח הכה",
    "חלב נותן",                               // 269-270: Sagburu's verdict closes on one row: "Nanna ... gives; / you set sin ..."
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "זרוע שם עליו",                          // 123, 125: see 122-127 above
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
];

/** A line's words with no punctuation after the last - how the names above are matched. */
const ending = (t: string) => plainWords(t).replace(/[\s.,;:!–—"'״׳]+$/u, "");
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
    if (KEEP_WITH_NEXT.some(w => ending(line.text).endsWith(ending(w)))) return "never";
    if (BREAK_AFTER.some(w => ending(line.text).endsWith(ending(w)))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(plainWords(w)))) return "always";
    // A speech would start a row - but a one-line speech answered by another may share it, and a line that leads
    // into it with a dash ("כאשר כך אמר לו –") stays with it. A cost, not a rule: the formulas here are short
    // ("המלחש – משיב לה:", 20%), and a row of their own would leave it nearly empty.
    if (opensSpeech(next.text) && !(opensSpeech(line.text) && closesSpeech(line.text)) && !/[–—]$/.test(bare(line.text))) return cost - 25;
    // A speech that closes would end its row, unless another speech answers it (or a lost line follows).
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !lacuna(next.text)) return cost - 25;
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
