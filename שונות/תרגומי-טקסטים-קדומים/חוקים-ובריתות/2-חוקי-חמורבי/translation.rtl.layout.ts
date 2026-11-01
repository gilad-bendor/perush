// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule, as Eshnunna's and Middle Assyrian Laws A's are. A royal prologue (chains of
// epithets, city after city), ~280 laws (each a run of its own, under its heading) and an epilogue with
// curses. The stele's lines are very short (one to three words), so a row holds six to ten of them and a
// sentence runs over many lines. The rules: a line with no pause at its end is inside its clause (+40 - the
// Hebrew keeps the Akkadian order, verb last); a full stop or a semicolon is a stronger break than a comma
// (in the prologue a ";" closes a city's group of epithets); a new case ("אם", "ואם") after a sentence ends
// starts a row, and the line that opens one is not left at a row's end; a quotation is not split; a law's
// last words are not left alone on a row. The exceptions below are named by their words.
// No `repeatedPassages`: "alike" changed three laws only (§133, §155, §167), each for the worse - it copied
// a break that ends a full row in the first law into the protasis of the next.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "e914ec85141fc1f3d7c560094970aa9a";

/** Where a row must not end: after a line whose text ends so - named by its words (no markup, brackets or vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אשר כשמים והארץ,",          // prologue: "an eternal kingship whose foundations, as heaven and earth, | are firm"
    "אשר בדין ההוא היתה,",        // §5: "the claim that was in that case | he gives twelvefold" - the object and its verb
    "את הלך השדה,",               // §40: "the buyer of the field's, | garden's and house's service" - one list
    "הרועה את הצאן",              // §58: "the shepherd the flock | drove onto the field" - subject, object and verb
    "את השדה אשר האכיל",          // §58: "the shepherd guards the field he grazed | ..." - and the verb
    "צרות קשות פתחתי,",           // epilogue: "I opened hard straits, | I brought out light for them;" - a pair
    "בלי (רשות) הדיינים",         // §177: "without the judges' (leave) | she may not enter"
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "בהמירו, יכוננו עליו,",       // §5: "that judge ... they convict," | "and the claim ... he gives twelvefold;" |
    "עד פי שנים עשר יתן;",        //   "and in the assembly they remove him from his seat ..."
    "לשניים יחלוקו,",             // §176: "all that he and she had ... they divide in two," | "half the slave's owner takes, half ..." - both times
    "ולאם המגדלתו",               // §192: "... to the mother who raised him" | the quotation "you are not my father, you are not my mother" whole
    "את רועותם מרדוך נתן לי,",    // epilogue: "the black-headed whom Enlil gave me, whose shepherding Marduk gave me," | "I was not negligent"
    "במושבו יפיח? לו;",           // the curses (Enlil): a sentence | the list of fates he decrees
    "את דברו תרשיע;",             // (Ninlil): a sentence | the list of what she sets in Enlil's mouth
    "ישית עליו,",                 // (Sin): a sentence | "days, months, years of his reign ... he ends"
    "והארץ, עוזרי,",              // (Adad): his titles | "rain from heaven, flood from the deep he takes from him"
];
/** Where a row must end: after a line ending so, when the next opens so. */
const BREAK_PAIRS: readonly (readonly [string, string])[] = [
    ["בת איש נשא,", "כאשר נשאה"],   // §176: "married a free man's daughter," | "when he married her, with the dowry ... she came,"
];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without the editor's brackets and the vowel points (not the maqaf), to match words however restored. */
const words = (text: string) => plain(text).replace(/[\[\]⟨⟩]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.?]*$/u.test(plain(text));
/** A line that opens a case: "אם", "ואם", "ו(אם)" (brackets already stripped). */
const opensCase = (w: string) => /^ו?\(?אם\)?([ ,]|$)/u.test(w);
/** A line ending a sentence or a clause of the law. */
const endsSentence = (text: string) => /[.;:]["”)]*$/u.test(text);

function rowBreak({ line, next, run, position, cost, measure }: BreakContext): BreakCost {
    const text = plain(line.text), after = words(next.text);
    // A line's words with the line before it, so that a short line is named by what it ends.
    const w = (position > 0 ? words(run[position - 1].text) + " " : "") + words(line.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";
    if (BREAK_PAIRS.some(([end, start]) => w.endsWith(end) && after.startsWith(start))) return "always";

    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    // A new case after a sentence ends starts a row of its own.
    // (Not "אם של מסכן", a short alternative inside its sentence: §8.)
    if (opensCase(after) && !/^אם של /u.test(after) && endsSentence(text)) return "always";

    let total = cost;
    if (/\.["”)]*$/u.test(text)) total -= 10;
    if (/;["”)]*$/u.test(text)) total -= 8;
    if (opensCase(after)) total = Math.min(total, 0) - (endsSentence(text) ? 30 : 15);
    if (opensCase(words(line.text)) && !endsSentence(text)) total += 30;
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) total += 40;
    const quotes = run.slice(0, position + 1).reduce((n, l) => n + (l.text.match(/"/g) ?? []).length, 0);
    if (quotes % 2 === 1) total += 30;
    // A law's last words are not left alone on a row ("יתן.", "לזר לא תתן.").
    const tail = run.slice(position + 1).reduce((sum, l) => sum + measure.line(l) + measure.gap, -measure.gap);
    if (tail < 20) total += 30;
    return total;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "free" }),
    pdf: {
        // The prologue, the groups of laws and the epilogue (##); the laws and the prologue's sections (###),
        // ~280 of them and mostly a few rows each, would make the index pages long.
        indexDepth: 2,
        // "<the title> / <the group>": the title without its place and date, a group only up to its colon
        // ("חבלות: באב, בעין, ..." → "חבלות", "דמי שכירות: בהמות, ..." → "דמי שכירות").
        footerTitle: ({ chain }) =>
            chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \([^)]*\)/g, "").replace(/:.*$/, "")).join(" / "),
    },
});
export default layout;
