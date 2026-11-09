// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Lugalbanda in the Mountain Cave is Sumerian narrative verse of the Uruk cycle (~500 lines), the first half of
// the pair whose second is Lugalbanda and the Anzud Bird - and laid out by that poem's rule
// (אגדות-מלכים/6-לוגלבנדה-וציפור-האנזוד), itself Enmerkar's: the default cost of a break (punctuation; a rare
// full stop ends a passage); a break inside a sentence dearer (+30); parallel lines - found by their letters - kept
// on a row; a line ending with a dash, under 45% of a row, kept with the line it leads into; a speech's opening and
// close a cost (−25), not a rule; and a repeated passage laid out like its first telling (`similar`: the three
// prayers to Utu, Inana and Suen open with the same three lines, the dream's orders are carried out word for word,
// the kids' grazing repeats the aurochs', the brothers' provisions come back at the baking - "alike" and "free"
// each broke 4-7 places worse). What none of this shows is named below: mostly parallel pairs a speech mark or a
// dash hides from the similarity test (Uruk / Kulaba, the snake / the scorpion, the grass / the water of life). 255
// rows against the fewest possible 239 (+7%) - the default's 241 split those pairs all through.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "503b892a7b2bd22b41f08e6e4d012c87";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בקרב – ראש נשא", // 13-14: the parenthesis "– הקרב, חבל־הקפיצה של אִינַנָּה –" belongs to 13
    "כאשר גדי ההר – בפרסותיו – חיפש", // 17-18: the mountain kid / the mountain goat
    "ידו – את האחיזה אינה יכולה להשיב", // 79-80: his hand / his foot
    'אל אורוך – יובילוהו!" – איך להוביל – לא ידעו', // 83-84: "to Uruk - let them carry him!" / "to Kulaba ..."
    "אל־האם ואל־האב – לו עמדו לידי", // 160-161: "had the mother-god and father-god stood by me, the god ... would say"
    "לו הייתה זו עירי", // 183-184: "my house, my city / the city my mother bore me in", and then
    "כמו לנחש – לו היה זה מקום־הטרשים שלי", // 185-186: like the snake / like the scorpion
    "עמי הגדולים – לך", // 187-188: my great people / my great ladies
    "להולך לבדו – אח־חבר שלו אתה", // 245-246: to one walking alone a companion / to two walkers the third
    "את מי החיים הביא", // 266-268: the water of life brought; the tooth in the grass / the sip of the water
    "בעשב החיים – שן הציב",
    "בפרסתו האחת – את הארץ אחז", // 271-272: with one hoof he grasped the earth / leapt like a donkey
    "את ההררים מפלח", // 273-274, 275-276: the wild asses - the triad does not fit one row
    "ריחם – בערבה – כשהוא הולך", // 368-370: the sentence fits one row, as its first telling (358-360) did not
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "על שולחן אן – גודלו הם", // 64-66: the seven - overseers of overseers, officers of officers, captains
    "מצביאי המצביאים הם", //   of captains - on a row of their own
    "במי החיים – לגם", // 266-268, see above; 269-270 "when he had ..." a pair
    "כחמור הארצות – זינק", // 271-272, see above
    "עיר נישא, כגדול – דוהר", // 273-274, see above
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
    // The index: the ##s - the poem's 21 episodes, 10-40 lines each. The footer: the title and the episode, without
    // its line range - "לוגלבנדה במערת ההר / סוּאֵן, הירח".
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => unnumbered(h.text)).join(" / "),
    },
});
export default layout;
