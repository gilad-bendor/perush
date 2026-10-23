// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Atrahasis is verse: its rows are its couplets, one or two to a row. The rows are laid out by rule (§2):
// the run is parsed into units - sentences, with a pair of one-line sentences taken as one couplet - and a
// break inside a unit is dear, dearer still in the middle of a couplet (an odd line of the unit) than between
// two. Speech has rows of its own: a row ends where a speech closes, and starts where one opens. What the
// text's punctuation does not show is said below, line by line, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout";
import { lineSimilarity } from "../../layout/numbered-lines";
import { endsSentence } from "../../layout/rows";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "380be9af4d9953ee50ff4c4fb7753b1a";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "את הטיט הוא דורך לפניה;",          // I 248-249: he treads the clay / she recites the spell - a couplet
    "ארבע עשרה קריצות קרצה;",            // I 252-254: fourteen pinches - seven to the right, seven to the left
    "שבע קריצות לימין,",                  //   (the same three lines: 14 = 7 + 7)
    "קראה לחכמות, ליודעות,",              // I 256א-ב: she called the wise women - "seven and seven" is their apposition
    "אל הטיט התפללה",                     // I 264-265: to the clay / to the oil she prayed - a couplet
    "את המוטה ייטול, מלאכת האדונות,",     // I 184-185, 191-192: the two "he shall carry the yoke" lines, a pair
    "מכוסים,",                            // II E 78x-y, E 161k-l: "their faces covered, / (the people) - on the brink of ruin"
    "האם אוכלת – הבת צופה;",              // II E 161b-c: the mother eats / will not open her gate - a couplet,
    "האם אוכלת – הבת צופה.",              //   and its Assyrian twin E 78q-r (the repetition follows the first, so both are named)
    "שמו את הבת לסעודה,",                 // II E 161g-h: the daughter for a meal / the son for food - a couplet
    "המבול שאתם מצווים עליי –",           // II H 15-16: "the flood you command me - / who is it?" - topic and comment
    "למה תשביעוני",                       // II H 13-14: "why do you bind me by oath? / shall I raise my hand?" (ה-interrogative: no question word)
    "האלים ציוו כלה,",                    // II I 4-5, C₀ iv 2'-3': the gods ordered destruction / Enlil did evil - a couplet
    "עשיתי לפניכם!",                      // III vi 18-19: "I did it before you! / I saved life" - a couplet
    "אתה, חכם האלים, הגיבור,",            // III vi 20-21: the vocative stays with its question
    "פסל שלו, האוחז גדי אל חזהו,",        // III viii 29-30: the colophon's two statues, a pair
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "בעת ההיא",                           // II D 7: a new episode - Atrahasis turns to Ea
    "הוא נכנס ויוצא",                     // III ii 45: from the feasting guests to Atrahasis's own distress
    "היום – שנו פניו",                    // III ii 48: the weather turns - the storm begins
    "לו אב ילד",                          // III iv 5: Nintu's lament starts a row of its own, after her formula
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words, as the exceptions name them: no editor's {note}, vowel points, brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/\{[^}]*\}/g, "").replace(/[֑-ׇ]/g, "").replace(/[\[\]()*?…]/g, "").trim();
/** A line's beginning: without an editor's {note} and opening brackets. */
const lead = (t: string) => bare(t).replace(/^\{[^}]*\}\s*/, "").replace(/^[\[(*]+/, "");
const opensSpeech = (t: string) => /^["“]/.test(lead(t));
const opensQuote = (t: string) => /^['‘]/.test(lead(t));
const closesSpeech = (t: string) => /["”]\s*\]?$/.test(bare(t));
/** The speech formula, "X פתח את פיו / ודיבר אל Y:". */
const formula = (t: string) => /פתח(ה)?\s*\[?\s*(את\s*)?\]?\s*\[?\s*(את\s*)?פי(ו|ה)/.test(t);
/** A real question: a "?" at the line's end, in a sentence that has a question word (most "?" here mark an uncertain reading). */
const QUESTION_WORD = /(^|[\s"'\[–(])(מי|מה|מדוע|למה|לאן|מאין|איך|היכן|האם|עד מתי)([\s\]?]|$)/;
const asks = (t: string) => /\?\s*\]?$/.test(bare(t).replace(/["'”’]+$/, ""));

/** Whether a sentence ends with run[i] - its first line run[from]. */
function endsSentenceAt(run: readonly NumberedLine[], i: number, from: number): boolean {
    const next = run[i + 1];
    return endsSentence(run[i].text)
        || (asks(run[i].text) && run.slice(from, i + 1).some(line => QUESTION_WORD.test(bare(line.text))))
        || (next !== undefined && (opensSpeech(next.text) || opensQuote(next.text)));   // a speech opens after it
}

/**
 * The run's units: its sentences, with two one-line sentences in a row taken as one couplet - unless a speech
 * opens or closes between them, or the second is clearly the better partner of the one after it (a one-line
 * sentence left over at the head of a series: "בנו את אשר לסל." before "ten years ... / twenty years ...").
 */
const parsed = new WeakMap<readonly NumberedLine[], boolean[]>();
function unitEnds(run: readonly NumberedLine[]): boolean[] {
    let ends = parsed.get(run);
    if (ends) return ends;
    const sentences: [number, number][] = [];
    let first = 0;
    run.forEach((_, i) => {
        if (i === run.length - 1 || endsSentenceAt(run, i, first)) { sentences.push([first, i]); first = i + 1; }
    });
    const single = (s: [number, number] | undefined) => s !== undefined && s[0] === s[1];
    const units: [number, number][] = [];
    for (let s = 0; s < sentences.length; s++) {
        const [a, b] = sentences[s], n = sentences[s + 1], nn = sentences[s + 2];
        if (single(sentences[s]) && single(n)) {
            const betterLater = single(nn) && lineSimilarity(run[n[0]].text, run[nn[0]].text) > lineSimilarity(run[a].text, run[n[0]].text) + 0.15;
            const speechEdge = opensSpeech(run[n[0]].text) || opensQuote(run[n[0]].text) || closesSpeech(run[a].text);
            if (!betterLater && !speechEdge) { units.push([a, n[1]]); s++; continue; }
        }
        units.push([a, b]);
    }
    ends = run.map(() => false);
    for (const [, last] of units) ends[last] = true;
    parsed.set(run, ends);
    return ends;
}
const unitEnd = ({ run, position }: UnitContext): boolean => unitEnds(run)[position];

/** What ending a row after `line` costs. */
function rowBreak({ line, next, position, unit, endsUnit, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(words => plainWords(line.text).endsWith(words))) return "never";
    if (BREAK_BEFORE.some(words => plainWords(next.text).replace(/^["'“‘]+/, "").startsWith(words))) return "always";
    // A speech that closes ends its row - unless a speech formula or another speech follows, and then it is cheap.
    if (closesSpeech(line.text) && !formula(next.text) && !opensSpeech(next.text)) return "always";
    // A year of the famine ("בהגיע השנה ...") starts a row.
    if (/^בהגיע/.test(plainWords(next.text))) return "always";
    let c = cost;
    if (closesSpeech(line.text)) c -= 30;
    if (formula(next.text)) c -= 25;   // a row would rather start with the speech formula
    // A verb is not parted from its object: a line with no punctuation, then "את ...".
    if (/^את\s/.test(plainWords(next.text)) && !/[.,;:!?–—-]["']?$/.test(plainWords(line.text))) c += 100;
    if (endsUnit) return c;
    // Inside a unit: after an even number of its lines (between couplets) dear, after an odd one (inside a couplet) dearer.
    return c + ((position - unit.first + 1) % 2 === 0 ? 60 : 150);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "similar", minimumFill: 30 }),
});
export default layout;
