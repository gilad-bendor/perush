// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Baal Cycle (KTU 1.1-1.6): Ugaritic narrative verse, parallel couplets and tricola, and whole passages
// said again (the messages and their delivery, the journeys, the feasts, the house that has no house). Written a
// tablet line per line - and the tablet's lines run over the verse's: a phrase, a verb and its object, a name
// and its epithet go on from one line to the next; in 1.1-1.2 a line is often half a row or more, so a row is a
// line or two whatever the text. So the couplets are not the lines, and the rule is about the seams: the default
// cost of a break (punctuation); a word split over two lines never split between rows; a line ending with a word
// that governs the next (a preposition, "את", a vocative) dearer still, and one ending with no pause, or a dash,
// dearer; a lacuna is a free break. What the punctuation does not show is named below: some seventy names for
// 1740 lines - the speech formulas, a seam inside a phrase, a few couplets. Where a seam falls in every row a
// stretch could have (1.2 IV, the long lines of Kothar's clubs), the default chose.
// Repeated passages are left free: their tablet lines are divided otherwise each time, and "alike" copied a
// constrained first occurrence into its repeats, splitting couplets the free rows keep whole.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "78f3797da5d47478fcd4a89f05d005f0";

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
    // the speech formulas, said everywhere
    "וענתה",                  // "וענתה | הבתולה ענת"
    "נשא",                    // "נשא | את קולו", "נשאה | את קולה", "נשאו | את קולם"
    "נשאה",
    "נשאו",
    "קודו ונפלו",             // "קודו ונפלו, | תשתחוו", "קדה ונפלה, | השתחוותה"
    "קדה ונפלה",
    "דבר בעל האדיר",          // "דבר בעל האדיר, | אמרת אדיר הלוחמים" - the message formula
    "אמרת אדיר",              // "אמרת אדיר | הלוחמים"
    "שמע אפוא",               // "שמע אֵפוֹא, | הוֹ ..."
    "שמעי",
    "נתנה את פניה",           // "אז נתנה את פניה | אל ..."
    "אל מערת",                // "נגלתה אל מערת | אֵל"
    // 1.1
    'וצווח: "דבר',            // II:17-18: "וצווח: "דבר | [השור אֵל]"
    // 1.2
    "כנשר",                   // IV:13-14 and its repeats: "כנשר | מאצבעותיו"
    "הדוף ים",                // IV:19-20: "הֲדוֹף ים | מִכִּסְאוֹ"
    "את קדקד",                // IV:21-22: "הלוֹם את קדקד | הנסיך ים"
    "נפל",                    // IV:25-26: "קרס ים, נפל | לארץ"
    // 1.3
    "אלף",                    // I:15-16: "אלף | כדים"
    "התבונן בעל",             // I:22-23: "התבונן בעל | בבנותיו"
    "והן, ענת",               // II:5-6: "והן, ענת | נלחמה"
    "קשרה",                   // II:11-12: "קשרה | ראשים"
    "במעי",                   // II:14-15: "ירכיים בְּמֵעֵי | מהירים"
    "כבד ענת",                // II:26-27: "כְּבֵד ענת | תושייה"
    "רחצה ידיה",              // II:32-33: "רחצה ידיה | הבתולה ענת"
    "הקרי בארץ",              // III:14-15: "הַקְרִי בארץ | מלחמה"
    "שיחת שמים עם ארץ",       // III:24-25: "שיחת שמים עם ארץ, | תהומות עם כוכבים" - a couplet
    "צרה",                    // III:37-38: "צרה | לרוכב העננים"
    "את חביב",                // III:38-39: "את חביב | אֵל, יָם"
    "נלחמתי – כסף",           // III:46-47: "נלחמתי – כסף, | ירשתי זהב" - a couplet
    "אשית בעפר",              // IV:23-24: "אשית בעפר | דודים"
    "ישית",                   // IV:25-26: "ישית | [בשמים] בעל"
    "אסוך",                   // IV:29-30: "אסוך | שלום"
    "אף משנה מילים",          // IV:31-32: "אף מִשְׁנֵה מילים | אוֹמַר"
    "מושב הכלות",             // IV:52-53: "מושב הַכַּלּוֹת | האצילות"
    "צווח אל אתירת",          // V:36-37: "צווח (אל) אתירת | ובניה"
    "ואין בית לבעל כאלים",    // V:38-39: "ואין בית לבעל כָּאֵלִים, | חצר כבני אתירת" - a couplet
    "מושב פדרי בת אור",       // V:41-42: "מושב פִּדְרַי בת אור, | מחסה טַלַּי"
    // 1.4
    "אל המלך",                // I:5-6: "אֵל המלך | אשר כוננו"
    "זהב יצק",                // I:27-28: "זהב יצק | לרבבות"
    "הבתולה",                 // II:14-15: "את הליכת הבתולה | ענת"
    "חבורת",                  // II:25-26, IV:49-50: "חבורת | קרוביי"
    "וזבח הוללות",            // III:20-21: "וזבח הוללות | אמהות"
    "תרצו",                   // III:29-30: "תְּרַצּוּ | את קונת האֵלִים"
    "הגבירה",                 // IV:3-4: "הגבירה | אתירת ים"
    "רעוב רעבת ותעתרי",       // IV:33-34: "רָעוֹב רָעַבְתְּ וְתֶעְתְּרִי? | אוֹ צָמוֹא צָמֵאת" - a couplet
    "בכוס זהב",               // IV:37-38: "בכוס זהב – | דם עצים"
    "מלכנו בעל האדיר",        // IV:43-44: "מלכנו בעל האדיר, | שופטנו"
    "צווח",                   // IV:48-49: "צווח | (אל) אתירת"
    "צווח אורחה",             // V:29-30: "צְוַח אורחה | לביתך"
    "ובנה בית כסף",           // V:33-34: "ובנה בית כסף | וזהב"
    "לימין האדיר",            // V:47-48: "לימין האדיר | בעל"
    "אכלה אש בבית",           // VI:27-28: "אכלה אש בבית, | להבות בהיכל" - a couplet
    "הנה",                    // VI:31-32: "הִנֵּה | בַּיּוֹם הַשְּׁבִיעִי"
    "ביתי בניתי",             // VI:36-37: "ביתי בניתי | של כסף"
    "תיקוני",                 // VI:39-40: "את תיקוני | היכלו"
    "תשוב, בעל",              // VII:24-25: "תשוב, בעל, | אל אמרתי"
    "החיל ארץ",               // VII:31-32: "קולו הקדוש הֵחִיל ארץ, | מוצא שפתיו – הרים חָרְדוּ" - a couplet
    "אחזו",                   // VII:35-36: "אויבי בעל אחזו | יערים"
    "ימריאו",                 // VII:50-51: "אכן יַמְרִיאוּ | אֵלִים ואנשים"
    "הביטו",                  // VII:53-54: "הביטו, | גפן ואוגר"
    "נר האלים, שפש",          // VIII:21-22: "נֵר האֵלִים, שַׁפְּשׁ, | לוהטת"
    // 1.5
    "או שבע",                 // I:20-21: "אוֹ שבע | יְדוֹתַי"
    "כאשר מחצת",              // I:27-28: "כאשר מחצת | את ליתן"
    "וידעו אלים",             // V:16-17: "ויֵדְעוּ אֵלִים | כִּי מַתָּה"
    "סבבנו",                  // VI:3-4: "סבבנו | ארץ"
    "ומן ההדום ישב",          // VI:13-14: "ומן ההדום ישב | על הארץ"
    "לבוש כסה",               // VI:16-17: "לבוש כִּסָּה, | אֵזוֹר"
    "הגיעה אל נעימות",        // VI:28-29: "הגיעה אל נעימות | ארץ דֶּבֶר"
    // 1.6
    "בכתה אותו",              // I:16-17: "בכתה אותו | וקברה אותו"
    "כמו לב ענת",             // II:8-9: "כמו לב ענת | מאחורי בעל"
    "בחרב",                   // II:31-32: "בחרב | בקעה אותו"
    "בשדה",                   // II:34-35: "בשדה | זרעה אותו"
    "עליך ראיתי",             // V:18-19: "עליך ראיתי | זריעה בים"
    "רצוי. שפש",              // VI:45-46: "שַׁפְּשׁ, | הָרְפָאִים תַּחְתַּיִךְ"
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
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "free" }),
    // Six tablets, three to five pages each: the index lists them, not their seventy-five sections (a third of
    // a page each); the footer names the tablet the sheet is in, without its KTU number
    // ("מחזור בעל, לוח ה: בעל יורד אל גרונו של מוֹת").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ \(KTU [^)]*\)/, "") ?? "",
    },
});
export default layout;
