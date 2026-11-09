// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Kirta epic (KTU 1.14-1.16): Ugaritic narrative verse, parallel couplets and tricola, in short lines, and
// much of it said twice - El's command in the dream and Kirta's carrying it out, Pabil's message and its
// delivery, the lament of the son and of the daughter. Written a tablet line per line - and the tablet's lines
// run over the verse's: a phrase, a verb and its object, a name and its epithet go on from one line to the next.
// So the couplets are not the lines, and the rule is about the seams: the default cost of a break
// (punctuation); a word split over two lines never split between rows; a line ending with a word that governs
// the next (a preposition, "את", a vocative) dearer still, and one ending with no pause, or a dash, dearer; a
// lacuna is a free break. What the punctuation does not show is named below: some fifty-five names for 850 lines,
// most of them a seam inside a phrase, a few a couplet. Where a seam falls in every row a stretch could have,
// the default chose.
// A passage said again word for word is laid out as the first time ("alike"); "similar" copied the command's
// breaks into its carrying out, where the lines are divided otherwise, and split couplets.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "496bb37324e336bca6d9742c4de1adb8";

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
    // 1.14 - the tablet of the command and its carrying out
    "לא הפיק",                // I:12-13: "אשת צדקו – לא הֵפִיק, | מְאוֹרָשַׂת ישרו" - a couplet
    "בשלח",                   // I:20-21: "בַּשֶּׁלַח | נפלה."
    "הביט בשושלתו",           // I:21-22: "הביט בשושלתו | כִּרְתָּא"
    "ובחלומו",                // I:35-36: "ובחלומו | אֵל ירד"
    "זבח לשור",               // II:23-24: "זְבַח לשור, | אביך, אֵל"
    "שא ידיך",                // II:22-23: "שא ידיך | שמימה"
    "שרת את בעל",             // II:24-25: "שָׁרֵת את בעל | בזבחך"
    "רכב",                    // IV:3-4: "רכב | (על) שכמי החומה"
    "וירד",                   // II:26-27, IV:8-9: "וירד | כִּרְתָּא", "ירד כִּרְתָּא | מן הגגות"
    "ירד כרתא",
    "נשא",                    // IV:4-5: "נשא | ידיו שמימה"
    "שכר",                    // II:44-45: "שָׂכֹר | תִּשְׂכֹּר"
    "ויצא מארש",              // II:47-48: "ויצא מְאָרֵשׂ | חדש"
    "יטוש לשני",              // II:48-49: "יטוש לַשֵּׁנִי | את אשתו"
    "לנכרי",                  // II:49-50: "לנכרי – | את חביבתו"
    "שניים הולכים",           // II:41-42: "אחר שניים – שניים הולכים, | אחר שלושה – כולם." - a couplet
    "ונוד, מלך",              // III:27-28: "וְנוּד, מלך, | מביתי"
    "יצק בגולת כסף יין",      // IV:1-2: "יצק בגולת כסף יין, | בגולת זהב – נופת." - a couplet
    "אל קודש",                // IV:34-35: "אל קודש | אֲתִירַת צוֹר"
    "מגעיית בקר",             // V:10-11: "מגעיית בקר | החריש"
    "קח כסף וירקרק",          // VI:4-5: "קח כ[סף וירקרק] | זהב"
    "רחק, כרתא",              // III:28-29: "רחק, כִּרְתָּא, | מחצרי!"
    "צידונים. שם",            // IV:36-37: "שם | נדר כרתא"
    "נהקת",                   // V:9-10: "מקול נהקת | חמוריו"
    "מרכבה",                  // VI:7-8: "מרכבה | מן המרבץ"
    "קח, כרתא, שלמים",        // III:26-27, V:39-40, VI:9-10: "קח, כִּרְתָּא, שלמים, | שלמים!"
    "ואל אלת",                // IV:35-36: "ואל אֵלַת | צִידוֹנִים"
    "שאגת",                   // V:8-9: "משאון שאגת | אביריו"
    "שלושה",                  // VI:6-7: "שלושה | סוסים"
    "מתת",                    // VI:12-13: "אוּדֻם – מַתַּת | אֵל"
    // 1.15
    "צאת שפש",                // V:19-20: "צאת שַׁפְּשׁ – | בעלנו"
    // 1.16 - the son's lament, Shaʿtiqat, Yaṣṣib's revolt
    "מתים",                   // I:3-4, I:17-18: "אֵיךְ – מְתִים | תמות?", "כִּמְתִים | תמות?"
    "הר בעל",                 // I:6-7: "הר בעל, | צָפוֹן"
    "אף",                     // I:9-10: "אף | כִּרְתָּא – בן אֵל"
    "משפחת",                  // I:10-11: "משפחת | האדיב"
    "בן אל",                  // I:20-21: "'בן אֵל | כִּרְתָּא"
    "או אלים ימותו",          // I:22-23: "אוֹ אֵלִים ימותו, | משפחת האדיב לא יחיה?" - a couplet
    "נכנס; בכה",              // I:12-13: "בכה, | ושינן"
    "כלה",                    // III:13-16: "כָּלָה | הלחם", "כָּלָה | היין", "כָּלָה | השמן"
    "אל תכל, בני",            // I:26-27: "אל תְּכַל, בני, | מקור עיניך"
    "יבכוך",                  // II:44-45: "יבכוך, | אבי"
    "נשאו ראש החורשים",       // III:12-13: "נשאו ראש החורשים, | למעלה – עובדי דָּגָן" - a couplet
    "כרוז אל, אלש",           // IV:6-7, IV:10-11: "אִלְשׁ, | אִלְשׁ" - the herald's name, said twice
    "אין באלים",              // V:12-13: "אין באֵלִים | עונה לו"
    "לסעוד פתחה",             // VI:11-12: "נפשו – לסעוד פתחה, | תאוותו – לחתוך" - a couplet
    "ואמור, שנה",             // VI:28-29: "ואמור, שנה | אל כרתא"
    "השמע",                   // VI:29-30: "השמע, | והט אוזן"
    "רד מן המלכות – אמלוך",   // VI:37-38: "רד מן המלכות – אמלוך, | מן שררתך – אשב אני" - a couplet
    "רד מן המלכות",           // VI:52-53: "רד מן המלכות – | אמלוך"
    "נשא את קולו",            // VI:40-41: "נשא את קולו | וצווח"
    "לא תשפוט",               // VI:46-47: "לא תשפוט | שֶׁפֶט"
    "מאחורי",                 // VI:49-50: "מאחורי | כסלך"
    "הו כרתא",                // VI:41-42: "הוֹ כִּרְתָּא | השוע!"
    "לא תדין",                // VI:45-46: "לא תדין | דין אלמנה"
    "לפניך",                  // VI:48-49: "לפניך | לא תסעיד יתום"
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
    // each); the footer names the tablet the sheet is in, without its KTU number ("עלילת כרתא, לוח ב: הברכה והנדר").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
