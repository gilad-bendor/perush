// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Seven short texts - Adapa (Akkadian), Enki and Ninhursag, Enki and Ninmah, the Song of the Hoe, the Debate
// between Grain and Sheep (Sumerian), the Founding of Eridu and KAR 4 (bilingual) - each under its own ##, and
// cut by its ###s into short sections, so the runs are short already. They are verse, much of it built of lines
// that run on into the next: a topic with a dash ("X –" / its predicate), a clause with no punctuation. The rows
// are laid out by rule: the default cost of a break (punctuation), dearer after a dash, before a line that
// opens with one, after a line with no punctuation at all and after a line ending with ":" (it opens a speech
// or a list); cheaper where a speech closes. The formulaic passages - the question and answer of Ninhursag's healing, Isimud's "X! - he says to him; / he cuts
// it for him, and he eats", Ninmah's creatures - get a rule each; what no rule shows is named below by words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "a4dae11b951be5a61caf2413089af9cb";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    // Adapa
    "אנו, בשומעו את הדבר הזה,",                  // MB 12'-13': "Anu, hearing this, / cried: woe!"
    "לפני אנו בעמדך,",                           // MB 32'-34': "when you stand before Anu, / bread of death ... / water of death ..."
    "לחם המוות יושיטו לך – לא תאכל!",
    "את העצה אשר שמתי לך לא תזניח,",              // MB 37'-38': "the advice I gave - do not neglect, / the word I said - hold on to!"
    "בחצותי את הים, באמצעו,",                    // MB 58'-59': "as I crossed the sea, in its middle, / the south wind blew on me"
    "למה לא אכלת, לא שתית",                      // MB 74'-75': "why did you not eat, not drink? / you shall not live!"
    "אדפה מיסוד השמים עד מרומי השמים",            // SB e+7-8: "from heaven's base to its heights / [all] he saw"
    "אנו על אדפה משמרת שם,",                      // SB e+9-10: Anu set a watch on Adapa / ... set his freedom
    // Enki and Ninhursag
    "המקום שבו שכב אנקי עם אשתו –",               // 6-7, 9-10: "the place where Enki lay with ... - / - that place is pure"
    "המקום שבו שכב אנקי עם נין־סיכילה –",
    "אחזה אל חזהו, שוכב בחיקה,",                  // 180-181, 182-183: he held her to his breast / ... - two pairs
    "בבית גשתין־אנה – מקלות־התוף הם,",            // Hoe 71-72: in Geshtinanna's house / of mother Geshtinanna - a couplet
    // The Song of the Hoe
    "להפריד את השמים מן הארץ – אכן גם מיהר,",     // 4-5: to part heaven from earth / earth from heaven - a couplet
    "ידיהם – אל אפם,",                            // 23-24: their hands to their noses, / they appease Enlil
    "את אשר ביקש – נותן לו:",                     // 65-66: what he asked he gives him: / mace, weapon, ... hoe
    "השאול הוא: המעדר – הראש אל הארץ מובא;",      // 74-75: the netherworld: by the hoe the head goes down / the corpse comes up
    "בית נאמן הוא בונה, שדה נאמן הוא שם;",        // 99-100: a faithful field he sets / to the faithful field - a wide hand
    "שדה המורד בבעליו,",                          // 101-103: the field that rebels ... / the hoe sets its neck
    "שדה אשר לבעליו צוואר לא שם –",
    "חלפה רעה – את ראש החלפה הרעה הוא מנער,",     // 104-105: bad halfa - he shakes its head / uproots its roots
    // Grain and Sheep
    "כי בארץ את חוט אוטו עימם לא עיצב,",          // 4-5: for Uttu's thread was not fashioned / her peg not driven
    "כבשה – לא יצאה; טלאים – לא מרובים;",         // 6-7: no ewe, few lambs / no goat, few kids
    "הכבשה את שני טלאיה לא ילדה,",                // 8-9: the ewe did not bear her two lambs / the goat her three kids
    "את השם דגן־כוסו וכבשה –",                   // 10-11: the name of grain and sheep / the Anunna did not know
    "לחם – את אכילתו לא ידעו,",                   // 21-22: bread they knew not / clothes they knew not
    "כצאן – בפיהם עשב אוכלים,",
    "לדגן את שדה שמים;",                          // 45-46: grain's field / grain's plough - as 43-44 are the sheep's fold and fodder
    "כבשה – בעומדה בדירה –",                      // 47-48, 49-50: the sheep standing in her fold / the grain in her furrow
    "דגן – בעומדה בתלם –",
    "אחרי שיין, הדבר המתוק, שתו,",                // 67-68: after they drank wine / after they enjoyed beer -
    "אל הבחור התפוס – אחרי שניגשתי אליו –",       // 85-86: "after I approached him - / after I allotted him his fate -"
    "את ליבו המוכה – בבינתו הוא שוכח;",           // 87-88: his beaten heart forgets / I open the stocks
    "בית הצאן, דיר־החליבה, הנטויים בערבה העליונה –",  // 90-91: "the sheepfolds ... - / what have you?" - the challenge                   // 24-25: like sheep, eating grass with their mouths, / drinking from the ditches
    "אן, מלך האלים,",                             // 94-95: "An, king of the gods, / brought me down"
    "שכן, מלך ההר,",                              // 97-99: Shakkan, king of the mountain, / arranges his me / arranges his weapons
    "את ה־מה שלו – שיבוץ לו עושה;",
    "אחרי שלחם־השכר בכבשן בחיבה טופל,",           // 117-118: after the beer-bread ... / after the beer-mash ...
    "אל התנור – את יורדת;",
    "כציפור מעופפת אשר מפתח הבית הוכתה –",        // 173-174: like a bird struck from the door - / like the lame you enter the earth                       // 159-160: into the oven you go down / out of the oven you come up
    // The Founding of Eridu
    "את חדקל ואת פרת בנה, ובמקום שם;",            // obv. 23-24: he built Tigris and Euphrates / and called their names well
    "נינגירימה, בת אאה,",                         // rev. 14'-15': Ningirima, daughter of Ea, / purified you
    "בלחש מרדוך, מלך כל השמים והארץ,",            // rev. 19'-20': by the spell of Marduk / may the land's wealth enter your heart
    // KAR 4
    "אנו, אנליל, שמש ואאה,",                      // obv. 7-9: Anu, Enlil, Shamash and Ea, / the great gods, / the Anunnaki
    "המושב הגדול של האלים,",                      // obv. 32-33: the great seat of the gods, / which is fit for an exalted dais
    "אמן לאמן, בור לבור,",                        // rev. 19-20: craftsman for craftsman, ... / like barley, of itself
    "יומם ולילה",                                 // rev. 22-25: "day and night / to perfect the gods' feasts; / themselves forms / great they formed"
    "חגי האלים לשכלל;",
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בגד לקחו לו, ולבש;",                         // Adapa MB 71': bread, water, garment refused or taken - a row; the oil and Anu's laugh the next
    "בחודש הנשיות,",                              // E&N 83, 104, 123: the ninth month - the oils and the birth on the next row
    "המעדר הוא! שמו מתוק; בהר הוא קיים:",          // Hoe 90: the mountain's tree, perfume and stone (91-93) a row of their own
    "את הצעירה בעל, נשקה.",                       // E&N 183: the embrace ends; the water and the conception (184-185) a pair
    "רועה בדיר, מפיץ חן;",                        // G&S 48: the sheep's couplet ends, the grain's begins
    "בידיהן לשום,",                               // KAR 4 obv. 31: "hoe and basket in their hands" ends; the seat (32-34) begins
    "שדמה לשדמה – לצור צורתן,",                   // KAR 4 obv. 34: "for ever / to fix the border" begins again
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אדפה, על מי מעטה אבל",                       // MB 24', 47': the second question, with its answer
    "מי הם שני האלים",                            // MB 27', 50': the third question, with its answer
    "לפני אנו בעמדך",                             // MB 32': the four gifts and their orders (32'-36') after the intercession
    "בעת ההיא אדפה",                              // SB a+16: a new episode - Adapa at the quay
    "שרא על ברכי אנליל",                          // Hoe 64: from Ninurta to Shara
    "השאול הוא",                                  // Hoe 74: the hoe in the netherworld
    "הגיבור גלגמש",                               // Hoe 77: Gilgamesh
    "הרעים",
    "המעדר הוא! שמו מתוק",                        // Hoe 90: the hoe in the mountain                                      // Hoe 81: the shepherds, born of the hoe
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no {note}, vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/\{[^}]*\}/g, "").replace(/[֑-ֽֿ-ׇ]/g, "")
    .replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** How a line ends and begins, without markup, notes and brackets. */
const tail = (t: string) => bare(t).replace(/\*/g, "").replace(/[\s\]⟩)]+$/, "");
const head = (t: string) => bare(t).replace(/\*/g, "").replace(/^\{[^}]*\}\s*/, "").replace(/^[\s\[⟨(]+/, "");
const closesSpeech = (t: string) => /["”]$/.test(tail(t));
const opensSpeech = (t: string) => /^["“]/.test(head(t));
/** A speech formula: "X אל Y פונה:", "X משיב לו:", "... אומר:". */
const formula = (t: string) => /(פונה|משיב(ה)?|עונה|אומר(ת)?|צעק)( ל\S+)?:$/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // Enki and Ninhursag 254-271: "אחי, מה שלך כואב לך?" "X כואב לי." / "את Y ממנו ילדה." - one healing a row.
    if (/ממנו ילדה\.$/.test(words)) return "always";
    // Isimud's "מלכי, צמח־X!" – אומר לו; / קוצץ לו, והוא אוכל. - the naming and the eating a pair.
    if (/– אומר לו;$/.test(words)) return "never";
    // Enki and Ninmah: Ninmah's creature ("... – עיצבה.") and Enki's "אנקי, כראותו ... –" / its fate.
    if (/עיצבה\.$/.test(words)) return "always";
    if (/^אנקי, כראותו/.test(words)) return "never";
    let c = cost;
    // A row would rather end where a speech closes - unless another speech answers it.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) c -= 25;
    // A line that ends with a dash leads into the line it predicates ("עתה – אותו, ביום הזה –").
    if (/[–—]$/.test(tail(line.text))) c += 20;
    // A line that opens with a dash goes on with the line before it ("– המקום ההוא זך הוא").
    if (/^[–—]/.test(head(next.text))) c += 30;
    // A line with no punctuation at its end is inside its clause (the verb comes last).
    if (/[\p{L}\p{N}]$/u.test(tail(line.text).replace(/["'”’]+$/, ""))) c += 20;
    // A row would rather start with a speech formula, and keep the speech it opens.
    if (formula(next.text)) c -= 4;
    if (/:$/.test(tail(line.text))) c += 20;
    if (formula(line.text) && opensSpeech(next.text)) c += 20;
    return c;
}

/** The ## of a text without its number, parenthesis and subtitle: "2. אנקי ונין־חורסגה (מיתוס דלמון)" → "אנקי ונין־חורסגה". */
const textName = (t: string) => t.replace(/^\d+\.\s*/, "").replace(/\s*\([^)]*\)/g, "").replace(/:.*$/, "").trim();

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the seven texts (##); their ###s are short sections, mostly under a third of a page. The footer:
    // the text the sheet is in - "אנקי ונין־חורסגה" - and before the first, the title without its subtitle.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => {
            const text = chain.find(h => h.level === 2);
            if (text) return textName(text.text);
            return (chain.find(h => h.level === 1)?.text ?? "").replace(/:.*$/, "").trim();
        },
    },
});
export default layout;
