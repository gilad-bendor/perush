// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Aqhat epic (KTU 1.17-1.19): Ugaritic narrative verse, parallel couplets and tricola, and much of it said
// again (the ritual of seven days, the son's duties, the eagles, the curses of the three towns). Written a tablet
// line per line - and the tablet's lines run over the verse's, nearly everywhere: a clause, a phrase, even a word
// ("בכו־ | כבים", "[הו] | בלה") goes on from one line to the next. So the couplets are not the lines, and the
// rule is about the seams: the default cost of a break (punctuation); a word split over two lines never split
// between rows; a line ending with a word that governs the next (a preposition, "את", a vocative) dearer still,
// and one ending with no pause, or a dash, dearer; a lacuna is a free break. What the punctuation does not show
// - mostly a verb and its object, a name and its epithet split by the tablet's line end - is named below: some
// forty-five names for 640 lines. Where a seam falls in every row a stretch could have, the default chose.
// The repetitions differ in their line division, so "alike" finds nothing to copy ("similar" copied breaks into
// the curses where they cut the refrain).

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "a8efdf15a61937200978c400d977f370";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line that is all, or nearly all, lacuna: fewer than six letters. */
const lacuna = (t: string) => bare(t).replace(/[^א-ת]/g, "").length < 6;
/** A word split over two lines: the line ends with a maqaf ("ב־"), or with a lone letter ("ו", "בת [א] | ביה"). */
const splitsWord = (t: string) => /־$/.test(bare(t)) || /(^|\s)[א-ת]$/.test(bare(t).replace(/[\[\]⟨⟩]/g, ""));
/** A line that ends with a word that governs the next line's: a preposition, "את", "אשר", a vocative "הוֹ". */
const governs = (t: string) => /(^|\s)(על|תחת|את|אל|כמו|בין|עם|מן|אשר|כי|של|בקרב|לפני|אחרי|הו)$/.test(plainWords(t));
/** A line that ends inside its clause: no punctuation at its end, or a dash. */
const runsOn = (t: string) => !/[.,;:!?"”'’…]\]?$/.test(bare(t).replace(/\)$/, "")) || /[–—]$/.test(bare(t));

/** A row must not end after a line whose words end so (footnotes, brackets and vowel points aside). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אשר אין בן לו",          // 1.17 I:18-19: "אשר אין בן לו | כמו אחיו"
    "אל־אביו, בקודש",         // 1.17 I:26-27, I:44-45 (and "אל־אבי, בקודש", II:16-17): "בקודש | ציון עמו" - the son's duties
    "אל־אבי, בקודש",
    "השליך",                  // 1.17 I:3-4, I:4-5: "השליך | [כסותו]", "השליך | [אזורו]" - the verb and its object
    "טח",                     // 1.17 II:6-7: "טָח | גגך" - the verb and its object
    "אותם – בעל",             // 1.17 V:20-21, V:30-31: "בעל | חִכְּפַּת" - the god's name
    "איש",                    // "דנאל, איש | רָפִא", "הגבור, איש | ההרנמי" - the epithet
    "הסעידי, השקי",           // 1.17 V:19-20: "הסעידי, השקי | את האֵלִים"
    "תיקנה כבש",              // 1.17 V:22-23: "תיקנה כבש | מן המרעית"
    "הגיע כותר",              // 1.17 V:25-26: "הגיע כּוֹתַר | וחַסִּיס"
    "גברת דנתי",              // 1.17 V:28-29: "גברת דַּנָּתַי | הסעידה"
    "יצא לדרך כותר",          // 1.17 V:31-32: "יצא לדרך כּוֹתַר | לאוהלו"
    "בדנאל",                  // 1.17 II:8-9: "בדנאל? – | פנים שמחו"
    "שמעה",                   // 1.17 V:21-22: "שמעה | גברת דַּנָּתַי"
    "על ברכיו תיקן",          // 1.17 V:27-28: "על ברכיו תיקן | חצים."
    "וענתה",                  // the speech formula: "וענתה הבתולה | ענת", "וענתה | [הבתולה ענת]", "וענה | איש רפא"
    "וענתה הבתולה",
    "וענה",
    "אף אני אחיה",            // 1.17 VI:32-33: "אף אני אֲחַיֶּה | את אקהת"
    "ביד דנאל נתן",           // 1.17 V:26-27: "נתן | קשת"
    "עם בעל",                 // 1.17 VI:28-29: "אַסְפִּירְךָ עם בעל | שנים"
    "וישיר עליו",             // 1.17 VI:31-32: "ירנן וישיר עליו | נעימה"
    "שוב אליי, ולך",          // 1.17 VI:42-43: "שוּב אליי, וּלְךָ | אשוב"
    "נשאה את קולה",           // the formula "נשא(ה) את קולו/ה | וצווח(ה)", and its "נשא | את קולו" (1.19 IV:19-20)
    "נשא את קולו",
    "נשא",
    "כאשר ישב",               // 1.18 IV:18-19: "[כאשר ישב] | לסעוד"
    "שפוך כרוצח",             // 1.18 IV:23-24, IV:34-35: "שפוך כרוצח | דם", "ש[פך] | [כ]רוצח"
    "שפך",
    "על ברכיו; תצא",          // 1.18 IV:24-25: "תצא | כרוח נפשו"
    "בבכי חבשה עיר",          // 1.19 II:8-9: "בבכי חבשה עַיִר, | בבכי צמדה חמור" - a couplet
    "שיבולת צמחה",            // 1.19 II:20-21: "שיבולת צמחה | בשדפה"
    "בו רגליים",              // 1.19 II:44-45: "בו רגליים | רעדו"
    "אם יש שומן, אם יש",      // 1.19 III:4-5: "אם יש | עצם"
    "אשית בחור",              // 1.19 III:20-21: "אשית בחור | אֵלֵי הארץ"
    "ואקברנו, אשיתנו",        // 1.19 III:34-35: "אשיתנו | בחור אֵלֵי הארץ"
    "ויפול",                  // 1.19 III:23-24: "ויפול | תחת רגליו"
    "דמע על פעוט",
    "בשבע",                   // 1.19 IV:17-18: "[הנה] בשבע | שנים"
    "והקרה",                  // 1.19 IV:22-23: "והִקְרָה | זבח לאֵלִים"
    "הו",                     // 1.19 IV:50-51: "[הו] | בלה" - a word split over two lines (and a vocative, "[הוֹ] | [אקהת]")
    "תשית",                   // 1.19 IV:59-60: "תשית | חרשים"            // 1.19 IV:16-17: "דמע על פעוט | דנאל"
    "העלה עתרם",              // 1.19 IV:23-24: "העלה עתרם | בשמים"
    "למערב",                  // 1.19 IV:48-49: "למערב | נֵר האֵלִים"
    "מהיר",                   // 1.19 IV:52-53, IV:56-57: "יטפן, מְהִיר | השרה" - the epithet
];
/** The words the exceptions name: plainWords() without the quotes and punctuation at its end. */
const core = (t: string) => plainWords(t).replace(/[\s"'”’.,;:!–—-]+$/, "");

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    if (splitsWord(line.text)) return "never";
    if (KEEP_WITH_NEXT.some(w => core(line.text).endsWith(w))) return "never";
    if (lacuna(line.text) || lacuna(next.text)) return Math.min(cost, 4);
    if (governs(line.text)) return cost + 100;
    return runsOn(line.text) ? cost + 30 : cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Three tablets, three pages or so each: the index lists them, not their sections (a third of a page
    // each); the footer names the tablet the sheet is in, without its KTU number ("עלילת אקהת, לוח ב: הנשרים").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
