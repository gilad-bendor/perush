// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule, as Eshnunna's and Middle Assyrian Laws B's are: a law code (§1-§59), each
// law a run of its own - but here a law is often long (§24, §40, §45, §55: 20-60 tablet lines), a chain of
// cases "אם ... ; ואם ... ; ו(אם) חָפֵץ ...". So the main rule is the case: a row starts where a case opens
// (a line opening with "אם" / "ואם"), and the line that opens it is not left at a row's end. Beside it: the
// proof formula "בררו עליו, | כוננו עליו," kept together and ending the protasis, a series "בין X, ובין Y"
// not split, a full stop a stronger break, a line with no pause at its end inside its clause (+40), a
// quotation not split. The exceptions below are named by their words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "be1fb164fc775cc25d850dce3859ed8e";

/** Where a row must not end: after a line whose text ends so - named by its words (no brackets, no vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אביה חייב, כערבון",      // §39: "as a pledge | was placed" - the protasis' verb is on the next line
    "עמיתיו יושיב,",          // §41: "seats his comrades, | veils her before them" - one act
    "בעיר ההיא הולך –",        // §45: "as a field in that town goes – | field and house ... they make" - the measure, and what is measured
    "הבא עליה ישאנה,",         // §55: "he marries her, | does not cast her out" - one duty
    "משכה – את אשתו",          // §24: "his wife | [he mutilates, and does not] take" - object and verb
    "קיבל,",                   // §30: "who received | the gift, does not want to give his daughter" - the protasis
    "על עצים יזקפוה,",         // §53: "they impale her, | do not bury her" - one penalty, both times
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "ננגע,",                       // §8: the physician's case | the second testicle - the doubled case and its penalty together
    "ומיעכה –",                    // §55: the long protasis ends; the father's revenge starts a row
    "אשתו היא.",                   // §41: "she is his wife." | the concubine not veiled - a case of its own
    "כלבו יטיל.",                  // §16: "as he wishes he imposes." | "if by force" - two cases, not one row and a stray line
    "האשה לבנו לא ניתנה,",          // §30: the gift and the bride not given | the other son who died
    "התופש אותה את לבושה יקח.",     // §40: the slave woman's penalty | the man who let her go - as for the prostitute
    "אל פי ההיכל לא הובילה,",       // §40: the man who let her go (prostitute, slave woman alike) | his penalty
    "ייעד לו מת,",                  // §43: "the son ... died," | "the dead son's son ... marries (her)."
    "ואת מלאכתם תעשה.",             // §46: the sons who feed her | "and if among her husband's sons ..."
    "הבא עליה לאביה יתן;",          // §55: what he pays | "he marries her, does not cast her out"
];
/** Where a series "בין X, ובין Y" may be split after all. */
const SERIES_SPLIT: readonly string[] = [
    "בין על אשת איש השיגוהו,",      // §12: so that "לאשה חטא אין." ends a full row, not a row of its own
];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without the editor's brackets and the vowel points (not the maqaf), to match words however restored. */
const words = (text: string) => plain(text).replace(/[\[\]]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.]*$/u.test(plain(text));
/** A line that opens a case: "אם", "ואם", "ו(אם)" (brackets already stripped). */
const opensCase = (w: string) => /^ו?\(?אם\)?[ ,]/u.test(w);
/** A line ending a sentence or a clause of the law. */
const endsSentence = (text: string) => /[.;:]["”)]*$/u.test(text);

function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const text = plain(line.text), w = words(line.text), after = words(next.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";

    // After a line that is all lacuna the reading breaks anyway; before one, not more than the default.
    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    // The proof formula "בררו עליו, | כוננו עליו," is one, and ends the protasis.
    if (/(בררו|כוננו) עלי(ו|ה|הם),$/u.test(w) && /^כוננו עלי/u.test(after)) return "never";
    if (/כוננו עלי(ו|ה|הם)[,;]$/u.test(w)) return Math.min(cost, 0);

    let total = cost;
    // A full stop ends a case: a row ends there rather than a line later.
    if (/\.["”)]*$/u.test(text)) total -= 10;
    // A new case starts a row ...
    if (opensCase(after)) total = Math.min(total, 0) - 15;
    // ... and the line that opens it is not left at a row's end.
    if (opensCase(w) && !endsSentence(text)) total += 30;
    // A series "בין X, בין Y, ובין Z" is not split.
    if (/^ו?בין /u.test(after) && /(^|[ (–])בין /u.test(w) && !SERIES_SPLIT.some(k => w.endsWith(k))) total += 30;
    // Verb last, as in Akkadian: a line ending with no pause is inside its clause.
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) total += 40;
    // Inside direct speech (an oath, a quoted accusation): a quotation is not split.
    const quotes = run.slice(0, position + 1).reduce((n, l) => n + (l.text.match(/"/g) ?? []).length, 0);
    if (quotes % 2 === 1) total += 30;
    return total;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "alike": §40's penalty triad ("את אזניו יפלשו, | בחבל ישחילו, | מאחוריו יקשרו;") the same for the slave woman as for the prostitute.
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The groups of laws (##); the laws themselves (###) are mostly a few rows each.
        indexDepth: 2,
        // The title and the group, without a parenthesis (the title's place and date, the colophon's lines);
        // a long heading (the colophon's) only up to its colon.
        footerTitle: ({ chain }) =>
            chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \([^)]*\)/g, ""))
                .map(t => t.length > 40 ? t.replace(/:.*$/, "") : t).join(" / "),
    },
});
export default layout;
