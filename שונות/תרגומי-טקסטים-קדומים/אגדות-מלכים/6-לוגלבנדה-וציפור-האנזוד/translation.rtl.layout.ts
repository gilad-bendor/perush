// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Lugalbanda and the Anzud Bird is Sumerian narrative verse of the Uruk cycle (417 lines), in the style of the
// Enmerkar poems and laid out by their rule (אגדות-מלכים/7-אנמרכר-ואנסוחגירנה): the default cost of a break
// (punctuation; a rare full stop ends a passage); a break inside a sentence dearer (+30); parallel lines - found by
// their letters - kept on a row (the poem is made of them: "הציפור – ... / אנזוד – ..."); a line ending with a
// dash kept with the line it leads into; a speech's opening and close a cost (−25), not a rule; and a repeated
// passage laid out like its first telling (`similar`: Lugalbanda's request and the Anzud's granting it in the
// second person, Enmerkar's message and Lugalbanda's repeating it - "alike" and "free" broke 3-4 places worse).
// One change: the dash rule holds below 45% of a row, not 30% - the dashes here end lines of every width. What
// none of this shows is named below; the refrain "לוגלבנדה – איש אוהב הזרע הוא – יד אינו פושט" stands on a row of
// its own after each gift he refuses. 223 rows against the fewest possible 197 - the default rule's 200 split the
// parallel pairs all through.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "5aff705fb8594fc5e981a66d293807cf";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "הציפור – אנחה שם; אל השמים קרבה",                   // 78-79: the bird's sigh to heaven / his wife's woe to the abyss
    "גורל – כשאגזור – מי יהפכנו",                        // 103-104: "a fate I decree - who will overturn it? / a word I say - who ...?"
    "צלעותיך – נירח הבוקע אתה",                          // 122-124: back, ribs, body - the praise of the bird's body on one row
    "ככלב זר הנכנס בין הכלבים – רעש עליו השמיעו",        // 324-325: like a strange dog / like a strange donkey
    "לוגלבנדה – בלב ההומה של אחיו",                      // 338-339: in the heart of his brothers / of his friends
    "דג־הסוחורמש – עשב־דבש אוכל",                        // 392-393: the suhurmash fish / the kigtur fish
    "אנמרכר, בן אותו",                                   // 292-293: the subject with its verb ("... spoke abasement of Inana")
    'איש – "אני אל העיר אלכה!" – אינו אומר לו',          // 272-282: "no one says 'I'll go to the city' / 'to Kulaba'" - a pair, each time
    "האל של דגי הסוחורמש – כשמתוכו יוציא",               // 404-405: the fish taken out / caught, cooked, sprinkled
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "נחש אינו חומק, עקרב אינו עוקץ",                     // 37: the tree's setting ends; the burruaz bird / the Anzud (38-41) begin
    "לשומת האנחה של אשתו",                               // 80-81 a pair; the Anuna (82-83) the next row
    "אל חבורת רעיי – תיכנס",                             // 105-107 "if you are a god", 108-110 "if you are a man" - a row each
    "איש אוהב הזרע הוא – יד אינו פושט",                  // 141, 148, 154, 158: the refrain closes each refused gift on a row of its own
    "את חיי ארטה – במצולה – אכן יכלה",                   // 408: the first "when he ..." sentence ends; the smiths (409-410) begin
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "לוגלבנדה – איש אוהב הזרע הוא",                      // 141, 148, 154, 158: the refrain - see BREAK_AFTER
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

const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, run, position, measure }: BreakContext): BreakCost {
    const after = plainWords(next.text).replace(/^["“'‘]+/, "");
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
    // A line ending with a dash leads into the next: a subject into its verb ("האנונה, אלי ההררים – / ...").
    // Under 45% of a row, not 30% as in Enmerkar: the dashes here end lines of every width.
    if (/[–—]$/.test(bare(line.text))) c += measure.line(line) < 45 ? 100 : 10;
    if (!endsUnit) c += 30;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 120;
    return c;
}

/** A section's heading without its line range ("1–27: ...", "347–356, A–F: ..."), which prints in a scrambled order. */
const unnumbered = (t: string) => t.replace(/^[\dA-F–\-,\s]+:\s*/, "").trim();

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "similar" }),
    // The index: the ##s - the poem's 19 episodes, half a page to a page each. The footer: the title and the
    // episode, without its line range - "לוגלבנדה וציפור האנזוד / המתנות שלוגלבנדה דוחה".
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => unnumbered(h.text)).join(" / "),
    },
});
export default layout;
