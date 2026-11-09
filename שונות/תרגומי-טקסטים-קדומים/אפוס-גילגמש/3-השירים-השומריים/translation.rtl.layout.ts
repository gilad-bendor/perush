// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Sumerian poems of Bilgames - Huwawa A and B, the Bull of Heaven, Aga, the Death of Bilgames, with their
// Me-Turan, Nippur and Ur III versions - are Sumerian narrative verse, laid out by the rule of their sister poem,
// Gilgamesh, Enkidu and the Netherworld (העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון): the default cost of a break
// (punctuation); a break inside a sentence dearer (+30); parallel lines - found by their letters - kept on a row; a
// line ending with a dash kept with the line it leads into; a quotation not broken after its first line; and a
// repeated passage laid out like its first telling (`alike`: the seven heights, the gifts, the dream told twice,
// the elders' and the young men's councils - "free" and "similar" did worse). Two changes: a speech's close is a
// cost (−25), not a rule - the formulas here are short ("לפעם השנייה – עוד אומר לו:"), and a row of their own left
// them nearly empty (5 rows saved); and the names are matched with the trailing punctuation stripped. What none of
// this shows is named below - mostly pairs and triads a sentence end or a speech mark hides, kept whole or kept
// apart. 557 rows against the fewest possible 533 (+4.5%). (Not in it: the 104 lines numbered with a capital
// letter - 148A..148AAA, the second to sixth gifts of one manuscript, and their like - which the numbering logic
// puts in no run, so each prints on a row of its own.)

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f915588ee13950ae99c3ca9d50671f2d";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "על החומה – את צווארי מתחתי", // A 23-26: the dead man in my city / the corpse in the river - two sentences, a row each
    "את הרמה השלישית עבר – את הארז לבו לא מצא", // A 61a-b (it does not quite fit) and B 62-63: the heights two by two
    "את הרמה השביעית – בעוברו אותה – את הארז לבו מצא", // A 62-65: the seventh height, then the felling - Gilgamesh cuts / Enkidu trims
    "גילגמש – את הארז מכה",
    "בני עירו, אשר הלכו עמו", // A 70-71: "the men of his city ... - like little puppies at his feet"
    "נרעד – שינה היא", // A 72-73, B 83-85: the waking - "he rose from the dream, trembling ... / rubbed his eyes"
    "בהר נולדתי – אתה גידלת אותי", // A 154-157: the appeal to Utu, two rows of two
    "ציפור אחוזה – ללכת אל מקומה", // A 172-173: the caught bird / the caught youth
    "אל תוך שק־העור שם אותו", // A 180-186: into the sack - before Enlil - the head set down - Enlil sees it
    "מן הלחם שאתם אוכלים – יאכל", // A 190-191: the bread he would eat / the water he would drink
    "במתג החמור לאחוז ולאחוז", // Aga 25-28: the young men quote a saying - kept whole
    "חי אמך הורתך, נינסון, ואביך, לוגלבנדה הטהור", // B 138-139: the oath, by the parents and by the god, on one row
    "אבי מולידי – מערת הרמה", // B 164-166: "my mother - the mountain cave; my father - the mountain hollow; Utu, you set me alone"
    "במשוט את הצוואר מכופף", // Bull MT.A11-12: the king / the prince at the oar
    "היחיד בכוח – שכב, ולא יקום עוד", // Death MT.A1-12: the litany "... - he lay down, and will not rise" two by two
    "הדובר בעין חכמה – שכב, ולא יקום עוד",
    "הגל אשר אין חזה עומד מולו – השיג אותך", // Death MT.F145-150: "... has overtaken you" two by two
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "איש אבד – לבי מר", // A 23-26, see above
    "האדון הצעיר שבכולבה – עד מתי אתה שוכב", // A 76-80: "how long will you sleep?" a row; the dusk (78-80) the next
    "גילגמש – את ידו טלטל", // A 152c-157, see above
    "הגורל אוכל – את הגורל אינו יודע", // A 172-173, see above
    "את אימתו הראשונה חלק לו", // A 146-148: the men cut and stack the branches - one row
    "לפני אנליל באו", // A 180-186, see above
    "לפני אנליל שמו אותו",
    "לפניכם – ישב", // A 190-191, see above
    "באספה הערוכה של בחורי עירו – לגילגמש משיבים", // Aga 24: the young men answer on a row of their own, as the elders do (9-10)
    "המחובב מאורוך", // B 4-8: the address ends; the dead man / the corpse in the river two rows, as in A
    "איש אבד – לב רע שם",
    "הרעה – יד אינה נמלטת ממנה – השיגה אותך", // Death MT.F145-150, see above
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
];

/** A line's words with no punctuation after the last - how the names above are matched. */
const ending = (t: string) => plainWords(t).replace(/[\s.,;:!?–—"'״׳]+$/u, "");
/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“'].*[^"”'\s]/.test(bare(t).replace(/\*/g, ""));
const closesSpeech = (t: string) => /["”]$/.test(bare(t).replace(/\*/g, ""));
/** A line that is all lacuna: "[…] … […]". */
const lacuna = (t: string) => /^[\[\]….\s"']*$/.test(bare(t));

/** How alike two lines are (numbered-lines.ts), footnotes aside - 0 for a line that is not there. */
const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, run, position }: BreakContext): BreakCost {
    const words = ending(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(ending(w)))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(ending(w)))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(plainWords(w)))) return "always";
    // A speech that closes would end its row - unless another speech answers it (or a lost line follows). A cost, not
    // a rule: the formula after it ("לפעם השנייה – עוד אומר לו:") may end its row rather than stand alone.
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !lacuna(next.text)) return cost - 25;
    let c = cost;
    // A line that ends with a dash leads into the line it predicates: a subject into its verb ("בני עירך, אשר הלכו
    // עמך – / בחיק הרמה – אל יעמדו לך!"), a "when" clause into its main clause.
    if (/[–—]$/.test(bare(line.text))) c += 100;
    // A quotation is not broken after its first line: a two-line answer is kept whole, a speech starts with two.
    if (opensSpeech(line.text) && !closesSpeech(line.text)) c += 60;
    // Inside a sentence (unit) a break is dearer.
    if (!endsUnit) c += 30;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 120;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the poems (##) and their episodes (###) - some sixty, half a page each on average; the poems alone
    // would leave a thirty-page file with six entries. The footer: the poem - "גילגמש ושור השמים" - or the file's
    // title before the first one.
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain.find(h => h.level === 1))?.text ?? file.headings[0]?.text ?? "",
    },
});
export default layout;
