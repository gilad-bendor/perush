# Fidelity review log, Round 6 run 4 (DD, LSU, P2/P3)

Independent fidelity reviewer. Every new `>` line compared with its transliteration and ORACC lemma/morph. Fixes saved in the annotated files; the clean translations rebuilt (`build KEY`).

## DD – Dumuzid's Dream (264 entries reviewed)

| Text | Line | Before | After | Kind |
|---|---|---|---|---|
| DD | 74 | `– ש[רטי]!` | `– [שרטי]!` | bracket (u₃-⸢mu⸣-[ni-ḫur]: the root ḫur is restored, the whole verb is) |
| DD | 75 | `– ש[רטי]!` | `– [שרטי]!` | bracket (as 74) |
| DD | 81 | `ביד א[חזו]` | `ביד [אחזו]` | bracket (am₃-⸢mi⸣-[in-du₈]: root restored) |
| DD | 83 | `אל התל ע[לתה, עיניים] נשאה` | `אל התל [עלתה, עיניים] נשאה` | bracket (ba?-[an-ed₃]: root restored) |
| DD | 172 | `מ[שֵׁדֵי־גַּלָּה] שלי` | `משֵׁדֵי־גַּלָּה שלי` | bracket ([gal₅-la₂]-gal₅-la₂: one copy of the reduplicated noun survives – the root is preserved, as 64 i₃-[dur₂]-dur₂ `שוכבת`) |
| DD | 180 | `מ[חפשים]` | `[מחפשים]` | bracket (mu-ni-⸢in⸣-[kiĝ₂-kiĝ₂-ne]: root restored) |
| DD | 244 | `את הירכיים ש[רטה לו]` | `את הירכיים [שרטה לו]` | bracket (mu-un-[na-ḫur]: root restored) |
| DD | 245 | `ברחוב אס[ובב] …, אני […]` | `ברחוב אסובב […], אני […]` | bracket (ga-[…]-niĝin₂-niĝin₂: the root is preserved, the gap is in the prefix chain) |

Counts (DD): 8 fixes – bracket 8. No omission, negation, person or tense errors found: the negations (nu-, na-, bara-), the *ḫe₂-* clauses, the *ga-* cohortatives and the marû/ḫamṭu distinction are rendered consistently; the dream (26–40) and its interpretation (44–69), the three escapes (164–179 / 191–204 / 226–238) and the galla list (110–118) are aligned.

Left as drafted (borderline): 82 `[את התרתו – איש אינו יודע]` (bur₂-[bur₂-bi …]: one copy of the reduplicated root survives, but the whole clause around it is restored); 133 `[פונה]` (the noun gu₃ is restored, the verb de₂ preserved – the compound verb counted as restored); 132 / 149 / 220 bracket a separate Hebrew word for a restored prefix (`[לא]`, `[אינם]`, `[לו]`), as LC 84 in run 3.

Checks: `verify DD --strict` OK (264 entries; the four "same source, different Hebrew" notes are justified: dream "לי" / interpretation "לך", sister `תגלי` / friend `תגלה`); `build DD` rebuilt; `check_bible_quotes.py` 0 problems on both files.

## LSU – The Lament for Sumer and Urim (524 entries reviewed)

| Text | Line | Before | After | Kind |
|---|---|---|---|---|
| LSU | 225 | `שהסערה לא הרסה – … הרס […]` | `שהסערה לא הרסה – הרס […]` | addition (mu-[X]-gul-[…]: the lost sign is in the verb's prefix chain; the extra '…' marked a word that is not there) |
| LSU | 227 | `נאים היינו; מוכים אנו.` | `נאים היינו; [מוכים אנו].` | bracket (i₃-[sag₃]-ge-de₃-[en-de₃-en]: root and person ending restored) |
| LSU | 228 | `מגווני־העיניים היינו; מוכים אנו.` | `… [מוכים] אנו.` | bracket (i₃-[sag₃]-⸢ge⸣-de₃-en-de₃-en: root restored) |
| LSU | 229 | `יצוקים היינו; מוכים אנו.` | `… [מוכים] אנו.` | bracket (as 228) |
| LSU | 231 | `[לידי האב] אֶנְקִי` | `לידי [האב] אֶנְקִי` | bracket (only [a-a] is restored; "לידי" renders the preserved šu-a) |
| LSU | 259 | `את צווארה אל [הארץ שָׂמָה]` | `את צווארה אל הארץ [שָׂמָה]` | bracket (gu₂ ki-[še₃ ba-ab-ĝar]: ki preserved, -še₃ a restored ending) |
| LSU | 260 | `– [את אשר עשה]:` | `– את אשר [עשה]:` | bracket (a-na preserved; only [bi₂-in-ak-a-ba] restored) |
| LSU | 273 | `מרכושי ארכב, [שם] אמה אהיה!` | `מרכושי [ארכב, שם] אמה אהיה!` | bracket (ga-ba-da-[u₅ ki]-ba: the root u₅ is restored) |
| LSU | 300 | `הכאת־ראש איש אינו שָׂם בה` | `הכאת־ראש (איש) אינו שָׂם בה` | addition (no lu₂ in the line: the subject is supplied) |
| LSU | 330 | `יד נמתחה [ונמתחה]` | `יד נמתחה ונמתחה` | bracket (ba-e-[la₂]-la₂: one copy of the reduplicated root survives; now identical with the refrain 152 / 183 …) |

Counts (LSU): 10 fixes – bracket 8, addition 2. No negation, person or tense errors found; the decree chain 1–57 (infinitives `ל…`, `שלא …` for nu-), the *ḫe₂-* wishes of 465–474 / 486–492, the *na-* prohibitives 493–511 (`אַל יְשַׁנֶּה`) and Enlil's answer 364–370 are rendered as the Sumerian has them.

Left as drafted (borderline): 441 `בָּלַג מנגנים` (na-mu-un-tag-ge-ne: na- read as affirmative, against ETCSL's negation – reasoned in the apparatus); 432 `לא נאמר לו` (marû read as past in narrative); 455 `[דינך]` (the suffix -zu of the phrase is preserved, the noun restored); 429 `… [ … ]` spacing.

Checks: `verify LSU --strict` OK (524 entries); `build LSU` rebuilt (524 lines, 9 footnotes); `check_bible_quotes.py` 0 problems on both files.

## P2 / P3 – Proverb collections 2 and 3 (new entries only: 214 lines in 147 proverbs of collection 2, 287 lines in 167 proverbs of collection 3)

| Text | Line | Before | After | Kind |
|---|---|---|---|---|
| P2 | 2.50 (A84) | `סופר של טיט` | `סופר של [טיט]` | bracket (dub-sar [im]-⸢ma⸣: the noun im is restored) |
| P2 | 2.150 (B33) | `חיסרון [אינו יודע]` | `[חיסרון אינו יודע]` | bracket (niĝ₂ im-[ba nu-zu]: im-ba, the word for "loss", is restored) |
| P2 | 2.153 (B38) | `השור – [בזנבו תפוס]!` | `השור – בזנבו [תפוס]!` | bracket (kun-[bi ḫe₂-dab₅]: kun preserved, only the suffix and the verb restored) |
| P2 | 2.154 (B39) | `נהר נשגב הוא; תוכו – שור נוגף הוא.` | `נהר נשגב [הוא]; תוכו – [שור] נוגף [הוא].` | bracket (maḫ-[am₃] … [gud] ⸢du₇-du₇⸣-[dam]: the noun gud and both copulas restored; the intact copy in Šuruppak keeps its unbracketed Hebrew) |
| P2 | 2.c14 (C14) | `[החֻגְלָה – השמעת קולה] – …` | `[החֻגְלָה] – השמעת [קולה] – …` | bracket ([dar{mušen} gu₃] de₂: the verb de₂ "השמעת" is preserved) |
| P2 | 2.c15 (C15) | `[… – השמעת] קולו – …` | `[…] – השמעת [קולו] – …` | bracket ([… gu₃] ⸢de₂⸣: gu₃ "קולו" restored, de₂ "השמעת" preserved – the brackets were on the wrong word) |
| P2 | 2.d3 (D3) | `עוף הָאַרָבּוּ` | `עוף ה[אַרָבּוּ]` | bracket ([a-ra₂]-⸢bu⸣: two of the name's three signs restored) |
| P3 | 3.28 (A57) | `… […] שנחתך […]` | `… […] שנחתך` | addition (the line ends with the preserved verb kud-da: nothing is lost after it) |
| P3 | 3.31 (A69) | `כשעזב (אותו)` | `[כשעזב] (אותו)` | bracket (u₃-mu-un-[šub]: root restored) |
| P3 | 3.31 (A72) | `אל הארץ הובל.` | `אל הארץ [הובל].` | bracket (ba-ra-an?-[de₆]: root restored) |
| P3 | 3.104 (A192) | `אישי – לא [ילך].` | `אישי – לא ילך.` | bracket (⸢ba⸣-[ra-mu]-un-di: the root di is preserved, only prefix signs are restored) |
| P3 | 3.105 (A194) | `[לו] מוסיף?` | `לו מוסיף?` | bracket ([X]-na-ab-taḫ-e-še: the dative -na- "לו" is preserved; the lost sign is a prefix) |
| P3 | 3.178 (A311) | `[…] …ל` | `[…] ל…` | other (X-ra: the dative "to …" was written in reversed order) |
| P3 | 3.180 (A315) | `בצווארו הפצוע` | `[בצווארו] הפצוע` | bracket ([gu₂] zu-ḫu-ul-la-ni-ta: the noun "neck" is restored) |

Counts (P2/P3): 14 fixes – bracket 12, addition 1, other 1. No negation, person or tense errors found in the new entries; the modal particles follow the wisdom corpus (*na-* `אַל`, *nu-* / *bara-* / *li-* `לא`, *ḫe₂-* wish or `אכן`), and the repeated proverbs (2.161 = 3.165) are identical.

Left as drafted (borderline): 3.59 (A119) `אורר` for im-ma-kud-de₃ (marû, ETCSL "cursed"); 3.100 (A186) `[מי ש…] עושה` (the relative is supplied in the bracket of the lost word); 2.100 (A166) `לא נסיר` for *bara-* (the DD file uses `בַּל`; the proverbs' own renderings set `לא`); 2.d15 (D24) `[מי]` for [a]-ba (one sign of a two-sign word); 2.91 / 2.140 `זורעים` for *uru₄* "plough" – the collection 1 precedent (3.74 `הזריעה`) binds, but the word is ploughing (worth a renderings note for the coordinator).

Checks: `verify PROV --strict` OK (P1 348, P2 306, P3 347 entries); `build PROV` rebuilt (1001 lines, 14 footnotes); `check_bible_quotes.py` 0 problems on both files. The proverbs' `translation.rtl.layout.ts` now has an obsolete `SOURCE_MD5` (text changed, no lines added or removed) – for a layout session, nothing to repair here.

## Totals

| Text | Entries reviewed | Fixes | bracket | addition | other |
|---|---|---|---|---|---|
| DD | 264 | 8 | 8 | 0 | 0 |
| LSU | 524 | 10 | 8 | 2 | 0 |
| P2/P3 (new) | 501 lines (314 proverbs) | 14 | 12 | 1 | 1 |
| **All** | | **32** | **28** | **3** | **1** |

No omission, negation, person, tense or meaning errors were found in any of the three texts; as in earlier runs, the fixes are almost all brackets (88%), mostly of the partial-restoration rule in both directions – a restored root left unbracketed or half-bracketed (`ש[רטי]`, `א[חזו]`), and a preserved word bracketed with a restored neighbour (`[לידי האב]`, `[בזנבו תפוס]`, `[… – השמעת] קולו`).
