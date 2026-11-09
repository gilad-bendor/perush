// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Hittite Laws (CTH 291-292, and the late parallel version): some two hundred laws, each a run of its
// own, a line per Hittite clause (CHiL's numbering) - so every line ends with a pause, and the choice is
// between pauses: "אם מישהו ... , | אותו יַגִּיעַ, | וארבעה ראשים ייתן, | ואל ביתו יביט." Short laws, one to
// three rows. The rows are laid out by rule, as Eshnunna's and Middle Assyrian Laws A's are: a case
// ("אם", "ואם") starts a row after a sentence's end, and the line that opens it is not left at a row's end;
// "לפנים היו נותנים ... | ועתה ... ייתן" (the old tariff and the new) kept together; and a law's short tail
// ("ואל ביתו יביט.") not left alone on its last row - a law is judged by its rows together.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "e01fb78cd450cd1d1b76f226e6f8da4b";

/** Where a row must not end: after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אם איל מאולף,",
    "ואת אשר המלך יאמר –",           // PT §47b: "and what the king says – | that luzzi he performs."
    "ומה שהוחזק לו –",               // PT §45: "and what was held for him – | he carries off in full."                 // §66: "אם תיש מבוית, | אם אַיָּל מאולף, | אם מישהו יגנוב שה־הרים מבוית," - one protasis, a list
];
/** Where a row must end: after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, braces, "*" or "?". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]{}*?⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line that opens a case: "אם", "ואם". */
const opensCase = (w: string) => /^ו?אם /u.test(w);
/** A line of an apodosis: what is paid, taken, done to the guilty - the verbs a protasis does not have. */
const APODOSIS = /(ייתן|יתן|יפצה|יפצו|ייקח|יקח|יגיע|יביט|פיצוי|היו נותנים|היו לוקחים|דין המלך|כך ממש|ירים|ירימו|יחתוך|ישרפו|יַגִּיעַ)/u;
/** A line that ends a sentence. */
const endsSentence = (t: string) => /[.!:]["”']*$/u.test(t);

function rowBreak({ line, next, run, position, cost, measure }: BreakContext): BreakCost {
    const text = bare(line.text), w = plainWords(line.text), after = plainWords(next.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";

    let c = cost;
    // The old tariff and the new one: "לפנים היו נותנים ..., | ועתה ... ייתן," on one row.
    if (/^לפנים/u.test(w) && /^ועתה/u.test(after)) c += 60;
    // A case starts a row - a new case after a sentence's end, or a sub-case ("אם מצד זה של הנהר,") ...
    if (opensCase(after)) c = Math.min(c, 0) - (endsSentence(text) ? 15 : 10);
    // ... and a new case's opening line is not left at a row's end, the rest of the case on the next.
    if (opensCase(w) && !endsSentence(text) && position > 0 && endsSentence(bare(run[position - 1].text))) c += 30;
    // ... and a row would rather end where the protasis does: after the last line of a case before its
    // first apodosis line (as cheap as a sentence's end, if not cheaper).
    // But a sub-case of one line ("אם מצד זה של הנהר, | שני שקלים כסף ייתן,") stays with its apodosis.
    let first = position;
    while (first > 0 && !opensCase(plainWords(run[first].text))) first--;
    if (opensCase(plainWords(run[first].text)) && APODOSIS.test(after)
        && !run.slice(first, position + 1).some(l => APODOSIS.test(plainWords(l.text)))) {
        c = first === position && position > 0 ? c + 20 : Math.min(c, 0) - 15;
    }
    // Parallel laws alike: the animal found and "purified" (§60-§62) - "ויטהר אותו, | ואדוניו יכיר אותו, |
    // שבעה שוורים ייתן," on one row, as the bull's is (the horse's and the ram's would split it).
    if (/^ואדוניו יכיר אותו,$/u.test(w) && position > 0 && /^ויטהר אותו,$/u.test(plainWords(run[position - 1].text))) return "never";
    // A law's short tail is not left alone on its last row: "ואל ביתו יביט." at 15%.
    const rest = run.slice(position + 1).reduce((sum, l) => sum + measure.line(l) + measure.gap, -measure.gap);
    if (rest < 30) c += 30;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "alike": the late parallel version's laws (PT) laid out as the standard version's (§10's wounded man and
    // the physician); "free" and "similar" did worse - "similar" split the short "ואם עבד – ..." sub-cases off.
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The file has no #: its three tablets (##) are the index; the laws (###) are a few rows each.
        indexDepth: 2,
        // The tablet, without its parenthesis (CTH, the version); on the first sheet, above the first tablet's
        // heading, the collection's name (the heading's words up to its comma: "החוקים החתיים").
        footerTitle: ({ chain, file }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \([^)]*\)$/, "")).join(" / ")
            || (file.headings[0]?.text.replace(/,.*$/, "") ?? ""),
    },
});
export default layout;
