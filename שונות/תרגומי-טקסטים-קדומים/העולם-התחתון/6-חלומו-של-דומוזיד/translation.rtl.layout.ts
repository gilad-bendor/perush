// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Dumuzid's Dream is Sumerian narrative verse (261 lines), the sequel of Inana's Descent: the dream told, then
// told back image by image with its meaning (`"קנה בודד, נטוע – ראש לך מניע" – | אמך הורתך – ראש לך מניעה.`),
// the hiding, the betrayal, and three captures and escapes that repeat one passage (the demons binding him, the plea
// to Utu, Utu turning his hands into a gazelle's) with small changes. Its rows are laid out by the rules of
// Enmerkar and Ensuhgirana: the default cost of a break (punctuation); a break inside a sentence dearer (+30);
// parallel lines - found by their letters - kept on a row; a short line ending with a dash kept with the line it
// leads into; a speech's opening and close a cost (−25), not a rule, as the formulas are short. One rule of its own:
// each quoted image of the dream stays on a row with its meaning. `repeatedPassages: "alike"` gives the three
// captures one shape (`"free"` broke the binding passage differently each time); where they differ the names below
// decide it - an outright "never"/"always" holds in every repetition. 135 rows against the fewest possible 124.
//
// The PDF's index lists the fifteen episodes (##), a third of a page to a page each; the footer is the title and
// the episode.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "24843078a5547f79975148bcb77f55ea";

/** A row must not end after a line whose words end so (matched by ending()). */
const KEEP_WITH_NEXT: readonly string[] = [
    "את קרבך, את גופך – שרטי",                    // 74-75: your belly, your body / your garment, your thigh - scratch!
    "את האזיקים – ביד אחזו",                      // 81-82: the handcuffs / the neck-stock
    "אחות, בעלותך אל התל",                        // 72-73, 77-78: "when you go up the mound -" and what she should do there
    "הבחור – אל אותו, אל השמים – את ידיו הרים",   // 164, 191, 226: the plea to Utu starts with its formula
    "אלה שהלכו אל המלך – אנשים מעורבבים הם",      // 110: the list of what the king's men do not know heads its first row
    "אותו – את דמעותיו לקח",                    // 200 (as 174, 235): Utu takes his tears, and does what he asked
    "השני – בהיכנסו אל הדיר והרפת",               // 252-257: each demon entering the fold, with what he smashes there -
    "השלישי – בהיכנסו אל הדיר והרפת",             //   the dream's images come true (the fifth, 258, before the dream's
    "הרביעי – בהיכנסו אל הדיר והרפת",             //   closing couplet, 259-260 = 39-40, which takes a row of its own)
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בני ניפור, שניים הם – הלכו",                 // 128: the list of the king's men ends; they run to the fold
    "את שורש השמים כבגד כיסה, כפשתן פרש",         // 241: Geshtinana's cry ends; the scratching (242-244) begins
    "את חיי אשא",                                 // 173, 199, 234: the plea to Utu ends; Utu's doing it begins
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אל המלך – בני",                              // 119-128: each city's pair of men starts a row
    "הזקנה – בצאתה מן הבית",                      // 211: "when she went out -" leads into "the demons saw her"
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line's words with no punctuation after the last - how the names above are matched. */
const ending = (t: string) => plainWords(t).replace(/[\s.,;:!–—"'״׳]+$/u, "");
const lead = (t: string) => bare(t).replace(/\*/g, "").replace(/^[\[(]+/, "");
const opensSpeech = (t: string) => /^["“]/.test(lead(t));
const closesSpeech = (t: string) => /["”]\]?$/.test(bare(t).replace(/\*/g, ""));
/** A line that is all lacuna: "[…] … […]". */
const lacuna = (t: string) => /^[\[\]….\s"']*$/.test(bare(t));
/** An image of the dream, quoted back before its meaning: `"קנה בודד, נטוע – ראש לך מניע" –`. */
const quotedImage = (t: string) => /"\s*[–—]$/.test(bare(t).replace(/\*/g, ""));

const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, run, position, measure }: BreakContext): BreakCost {
    const after = plainWords(next.text).replace(/^["“'‘]+/, "");
    if (KEEP_WITH_NEXT.some(w => ending(line.text).endsWith(ending(w)))) return "never";
    if (BREAK_AFTER.some(w => ending(line.text).endsWith(ending(w)))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(plainWords(w)))) return "always";
    // An image of the dream is kept with its meaning.
    if (quotedImage(line.text)) return "never";
    // A speech would start a row, and end one - a cost, not a rule: the formulas are short.
    if (opensSpeech(next.text) && !(opensSpeech(line.text) && closesSpeech(line.text)) && !/[–—]$/.test(bare(line.text))) return cost - 25;
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !lacuna(next.text)) return cost - 25;
    let c = cost;
    // A line ending with a dash leads into the next: a subject into its verb.
    if (/[–—]$/.test(bare(line.text))) c += measure.line(line) < 30 ? 100 : 10;
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
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text).join(" / "),
    },
});
export default layout;
