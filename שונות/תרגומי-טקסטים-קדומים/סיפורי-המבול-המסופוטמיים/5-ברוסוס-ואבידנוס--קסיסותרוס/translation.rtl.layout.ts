// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Prose fragments (Berossus, Abydenus, through Syncellus and the Armenian Eusebius), a sentence or a clause per
// line, many of them a row or more wide on their own. The default rule - break at the punctuation, rows as full
// as they can be - already reaches the fewest rows possible; a few exceptions, each keeping the same number of
// rows, move a break to where the narrative turns.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "06d940dcf40fd79da99bf8a98dee587b";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [
    // Alorus and his reign, as every other king of the list has it ("הוא מלך עשרה סרוסים").
    "המלך הראשון היה אָלוֹרוֹס מבבל, כַּשְׂדִּי;",
    // The Armenian: "he was seen no more | only a voice from the air" - one turn, as in the Greek (B7.5.3-4).
    "אבל קסיסותרוס לא נראה להם עוד;",
    // Abydenus (Armenian): the second sending and its return, before the gods take him.
    "ושילח אותם שוב;",
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    // Abydenus closes the Chaldeans' wisdom; the king list starts a row of its own.
    "על חכמת הכשדים — די בזה.",
];

/** A line's text as the reader sees it: no bold, italics or footnote marks. */
const plain = (text: string) => text.replace(/\[\^\d+\]/g, "").replace(/[*_]/g, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for the exceptions. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => text.endsWith(words))) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The five parts (##) are what a reader looks for; their ### sections are a few rows each (the versions of
    // the king list, the flood story's §1-§7). The footer: the title before its colon, and the part.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain
            .filter(h => h.level <= 2)
            .map(h => h.level === 1 ? h.text.replace(/:.*$/, "") : h.text)
            .join(" / "),
    },
});
export default layout;
