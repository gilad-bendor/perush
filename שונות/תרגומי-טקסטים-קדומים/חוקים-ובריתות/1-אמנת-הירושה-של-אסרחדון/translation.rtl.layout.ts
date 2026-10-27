// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule. A treaty: stipulations ("אם אתם …", one per §, a run of 2-20 tablet lines)
// and curses (a god and his punishment, or a simile "כאשר … – ככה …", two to four lines each). The Hebrew
// keeps the Akkadian order, so the sentences run on over the tablet's lines and many lines end mid-phrase;
// the rules move the breaks to the clauses' ends wherever the rows' fill allows, and keep the long formulas
// ("לא תבואו אל אשור־בני־אפלי, בן־המלך הגדול | של בית הירושה, ולא תאמרו (לו)") as the lines give them.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "ea9d8c250e7cb1eceb0c4fe05aad0649";

/** Where a row must not end: after a line whose text ends so - named by its words (no markup, no vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "שחורי הראש",            // "בין מכלל שחורי הראש | כל אשר ישנם" - the relative clause with its noun
];
/** Where a row must not end: after a line ending so, when the next opens so. */
const KEEP_PAIRS: readonly (readonly [string, string])[] = [
    ["של בית הירושה,", "את כסא"],   // "את אשור־בני־אפלי, … | את כסא אביו לא תתפישו" - both objects with their verb
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without vowel points and the editor's brackets, to name a line by its words. */
const words = (text: string) => plain(text).replace(/[\[\]⟨⟩]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.]*$/u.test(plain(text));
/** A line that ends with a pause: punctuation, possibly before a closing quote, bracket or brace. */
const endsWithPause = (text: string) => /[.,;:!?…–—]["”)\]⟩}]*$/u.test(plain(text));

/** What a break after a line with no pause at its end adds: it is inside its clause. */
const NO_PAUSE = 30;

function rowBreak({ line, next, run, position, cost, measure }: BreakContext): BreakCost {
    const w = words(line.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (KEEP_PAIRS.some(([end, start]) => w.endsWith(end) && words(next.text).startsWith(start))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";

    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    let total = cost;
    const after = words(next.text);
    // A stipulation starts a row: "אם אתם …" after the sentence before it ends.
    if (/^\(?אם\)? /u.test(after) && /[.;:!]["”)]*$/u.test(plain(line.text))) total -= 8;
    // A simile curse, "כאשר … – ככה …": the comparison, then what it is to do to you.
    if (/^ככה/u.test(after)) total = Math.min(total, 2);
    if (/– ככה$/u.test(w)) return Math.min(cost, 2);
    // Verb last, and the sentences run on: a line ending with no pause is inside its clause
    // ("את בשרכם לנשר ולעיט | יאכיל.").
    if (!endsWithPause(line.text)) total += NO_PAUSE;
    // The family, "אתם, נשותיכם, אחיכם, בניכם, בנותיכם", is one list: not "בניכם, | בנותיכם".
    if (/בניכם,$/u.test(w) && /^בנותיכם/u.test(words(next.text))) total += 30;
    // A stipulation's or a curse's last words are not left alone on a row ("יאכיל.", "ולא תאמרו (לו).").
    if (position === run.length - 2 && measure.line(next) < 25) total += 30;
    return total;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike", minimumFill: 40 }),
    pdf: {
        // Every § (##): a treaty is read and cited by its clauses, and their headings say what each is about -
        // the prophet who incites, the honeycomb curse. Most are a few rows, so the index is four pages long.
        indexDepth: 2,
        // "<the title> / <the section>": the title without its date and witnesses, the section by its number alone
        // ("§57 (530–533): …" → "§57", "החותמות (i–iv): …" → "החותמות").
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \(.*$/, "")).join(" / "),
    },
});
export default layout;
