// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Nine Sumerian letters, each a run or two of short lines. The rows are laid out by rule: the default cost of a
// break (punctuation), and three rules of this kind of text:
// - A letter's opening formula ("אל X אמור: | זה אשר Y אומר:", and "הוסף:" after a second address) ends a row:
//   the address is a heading-like row of its own, and the message starts on a row of its own.
// - A line that opens a sentence and ends with a dash ("במעון־הנשים שלה – … –", "אם רצון גבירתי הוא –") is a
//   fronted topic or a protasis: it stays on one row with what it introduces.
// - A line ending with no pause is inside its clause (the Hebrew keeps the verb last), as in Eshnunna.
// The exceptions below are parallel pairs no punctuation shows.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "ca9d521d571b943444b9f0f0b843de37";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [
    "רגל נכריה תפסו;",            // אִינַנָּקָה: "my dear ones took a foreign foot; | none asks after me" - one pair (Ps 38:12)
    "שבע פעמים לא […] …",          // גּוּדֵאָה: "my deeds - seven times not […]; | their border - seven times not found"
    "כספם ארבעה שקלים;",           // שַׁמַשׁ־טָאב's account: the donkeys and the belt, | the two boat hires
    "שכר ספינתך – שקל אחד;",
    "את כספם חישבתי לך;",          // ... the wool: "its silver I computed for you; | the price - return it to me!"
    "איש אל יקח!",                 // אוּר־שַׂגָּה: "my father's house - let no one take! | ... let no one seize!"
    "את הילד – אל תשחרר!",         // אִינִים־אִינַנָּה: the apodosis "do not release the boy!" with the letter's last line
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "דרך רחוקה הולך אתה.",         // לוּ־דִּינְגִּירָה: the messenger's orders end; "אמי – …" begins the mother
    "ושמחתי – בלי שקר.",           // אִינִים־אִינַנָּה: the list of gods (4-9, "… בינה – ייתנו לך!") on rows of its own
    "אם רצון מלכי הוא –",          // אוּר־שַׂגָּה: the two pleas and "מלכי – ידע!" on one row, rather than the close alone at 13%
    "מבית הלוחות – אל יצאו!",      // אִינִים־אִינַנָּה: "ויהי מה – כל אדם שישים לך שקר" opens the long sentence 7-11
];

/** A line's text without its footnote marks. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").trim();

/** The end of a letter's address formula: "… אמור:" (unless "זה אשר … אומר:" follows), "… הוסף:", "… אומר(ת):". */
const endsFormula = (text: string, after: string) =>
    /(אומר|אומרת|הוסף):$/u.test(text) || (/אמור:$/u.test(text) && !after.startsWith("זה אשר"));

/** What ending a row after a line costs: the default (punctuation), but for the rules of this text. */
function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const text = plain(line.text), after = plain(next.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => text.endsWith(words))) return "always";
    if (endsFormula(text, after)) return "always";

    let total = cost;
    // A line that opens its sentence and ends with a dash: a fronted topic, or "if it pleases my lord -".
    const before = position > 0 ? plain(run[position - 1]!.text) : "";
    if (/[–—]$/u.test(text) && (position === 0 || /[.!:;…]["”)\]⟩]*$/u.test(before))) total += 200;
    // No pause at the line's end: inside its clause ("ויהי מה – כל אדם שישים לך שקר | (ו)"אל אביו אלכה!" יאמר לך").
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) total += 40;
    return total;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the nine letters (the ###s are one per letter but in לוּ־דִּינְגִּירָה's, and short).
    // The footer: the title and the letter, without "– תרגום" and the ETCSL number.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain
            .filter(h => h.level <= 2)
            .map(h => h.text.replace(/ – תרגום$/, "").replace(/ \(.*\)$/, ""))
            .join(" / "),
    },
});
export default layout;
