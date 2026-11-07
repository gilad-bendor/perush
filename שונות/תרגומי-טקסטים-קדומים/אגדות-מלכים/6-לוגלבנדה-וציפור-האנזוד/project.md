# Project: Lugalbanda and the Anzud Bird (key LZ)

Corpus: `../corpus.md` (the legends of kings; the Uruk cycle, renderings §12). Round 6 run 3 (2026-11-07).

## Scope
The whole poem, ETCSL 1.8.2.2: 422 (1–417 and the alternative lines A–F for 350–353) entries.

## Base text
- ETCSL c.1.8.2.2, from the ETCSL web page (the OTA bulk zip was unreachable on 2026-11-07; converted with
  `../../tools/etcslhtml2md.py`, checked against the XML conversion of 1.8.2.3: identical lines except that the web
  page shows "…" for one lost sign where the XML has "X"): `../../sources/ETCSL/1.8.2.2--*/transliteration.md`;
  ETCSL's own lemmas per word: `lemmas.tsv` there.
- ORACC Q000368 lemma + morph.
- Rank 3: ETCSL's English (`translation.md` there). Not available: Wilcke 1969 (Lugalbandaepos), Vanstiphout 2003
  (Epics of Sumerian Kings), Berlin 1979, Black 1998, Mittermayer's later work (records:
  `../../sources/_records-only--Legends-of-kings/`).

## Files
annotated-1.rtl.md (1–202), annotated-2.rtl.md (203–417, A–F); `translation--intro.rtl.md`; `translation.rtl.md` (generated: `python3 -I ../kings_tools.py build LZ`).

## Line numbering
ETCSL's composite labels; a second segment's lines carry the segment letter.

## Progress
(per part: drafted, three passes, verify)
- LZ1 (1–202): drafted, three review passes, `verify LZ` OK (part 2 not yet drafted), quotes clean – 2026-11-07 (T-LZ); 181, 198 *alan* → `פסל` (coordinator's ruling).
- LZ2 (203–417, A–F): drafted, three review passes, `verify LZ --strict` OK (422 entries), quotes clean; `translation--intro.rtl.md` written – 2026-11-07 (T-LZ).

## Parts

### Part LZ1 (1–202)
Translator T-LZ, Round 6 run 3, 2026-11-07. `annotated-1.rtl.md`: 202 entries (1–202), nine sections. Drafted section by
section from `kings_tools.py data LZ 1 202` (ETCSL line, ETCSL lemmas, ORACC Q000368 lemma + morph aligned by content,
related lines of the four poems), each section saved and verified at once. **Three review passes done**: (a) fidelity
against the transliteration and the ORACC morph (brackets: a broken root `[ ]` – 131 `[*אפרוש*]`, 154, 185–189,
198–200; ETCSL `[X]` = `[…]`; restored suffixes and prefixes unmarked – 155, 177, 184; ETCSL's `!` emendations read as
given – 67, 121; `-ta` "from" restored in 86; quotation levels: `'…'` inside a speech – 110, 126–127, 180, 197); (b)
consistency – every repeated line identical where the Sumerian is (the bird/Anzud pairs; the call to the nest 70 = 72 =
74 = 76 with only the opening varying, the answer 71 = 73 = 77 ≠ 75; the gifts 58–60 = 94–96; the refrain 141 = 148 =
154 = 158; 134 = 161 = 184; 135 = 162; 36 ≈ 62 ≈ 129; **the request 168–183 and the grant 185–200, line for line**),
the earlier corpora (EA 224 = 102, EA 590 = 58/94, LC 42 = 100, LC 30 = 30, Gudea *šu gid₂*, *gu₂ gur*, Šuruppag *aš₂
dug₄*, Bird and Fish *sa*, Enki and Ninmaḫ *zag-še*, Grain and Sheep *mi₂ dug₄*), collisions grepped in every corpus
(`הצמיד` is Gudea's *us₂* → *tab* `הידק`; `אוסף` → `אוגר` as Gudea; `קילל` → `קללה אמר` as Šuruppag); (c) the Hebrew
read aloud (plene `אוֹמַר`, `אוֹמְרָה`; `לְבֵנַת כּוּלַבָּה` vocalized at its first occurrence). `verify LZ`: OK for the
202 entries (only the notes for the undrafted part 2); `check_bible_quotes.py`: 0 problems in the annotated file and this
file.

#### Key findings (LZ1)
- **The ancient mind.** The poem is a lesson in how a weak man wins a power: not by force and not by prayer, but by a
  gift that obliges. Lugalbanda plans it aloud (7–27: inner speech, the plan is the plot in miniature), then does it: he
  feeds, paints and perfumes the chick exactly as one serves a god's statue in its temple, so that the father finds his
  nest "made like a place where a god dwells" (92). The gifts (58–60) and what Anzud finds (94–96) are the same three
  lines. Anzud is a god of fate on the edge of the world – a cosmic tree of Enki on Inana's carnelian mountains, roots
  in Utu's river of seven mouths, a place without snake or scorpion, a roar that shakes the Lulubi mountains and sends
  the Anuna into the rock crevices "like ants" (82–83). His grief (70–81) is a parents' grief: four calls, three
  silences, a cry that reaches heaven (the father) and the deep (the mother), chiastically exchanged. Lugalbanda's
  praise-song (115–125) is school rhetoric (the bird's back "writes tablets", 122) and his adoption formula ("your wife
  – my mother; you – my father", 126–127) gives the abandoned man of LC a family. Four gifts are offered and refused
  with one refrain ("Lugalbanda – a man who loves the seed – does not stretch out his hand"): wealth (boats), victorious
  weapons (Šara's arrows), Ninurta's armour (the god who killed Anzud in the Akkadian myth!), Dumuzi's plenty. He asks
  for speed and unwearying arms, freedom of movement ("where my eye has seen – let me go"), a safe homecoming – and
  promises Anzud a statue by the wood-carvers and a name shining in Sumer and in the house of the great gods. **The
  grant (185–200) repeats the request line for line in the second person** – except that the statue and the name, being
  Anzud's, pass into the first person ("my statue", "my name"), and the *ḫa-* wish of 182 becomes the plain ḫamṭu of 199
  ("my name has shone"): what was asked is now done.
- **The Bible.** No source relations; shared motifs, tagged at each line: the eagle, its nest and its young (`קן`,
  `גוזל` are the natural words of *gud₃*, *amar*; Deut 32:11, Job 39:27–30) [equivalent]; the cosmic tree with birds
  in it (Ezek 31) [equivalent]; the banquet that wins a favour (Esth 5:6; 1:10) and food prepared to obtain a destiny
  (Gen 27, by implication) [equivalent]; the decree no one can reverse (Isa 14:27, 43:13; Num 23:20) [equivalent]; the
  gifts refused (Gen 14:23; 2 Kgs 5:16) and the gift chosen (1 Kgs 3:5, 11–13: Solomon refuses nothing, God adds
  wealth; here wealth is refused and never comes back) [equivalent/divergence]; **"they shall run and not be weary"
  (Isa 40:31, with `כַּנְּשָׁרִים` in the same verse)** – the closest contact of the part; the sun running like a hero
  (Ps 19:6), the eye that sees and the foot that treads (Gen 13:14–15; Deut 11:24), sandals loosened at the place
  reached (Exod 3:5) [divergence], "let my enemy not rejoice" (Ps 35:19; Mic 7:8); *alan* `פֶּסֶל` (ruling §12.6.3; the cognate `צֶלֶם` via
  *ṣalmu*, Gen 1:26, in the apparatus – there man is the god's image, here man makes the god's image); the name made to shine (Gen 12:2)
  and a name and a memorial in the house of god (Isa 56:5; 2 Sam 18:18); *gur* = Akk. *kurru* = `כֹּר` [cognate, 1 Kgs
  5:2]. **Corrected rank-3 readings** (each a finding): ETCSL's "like a tower" (30: *u₁₈-ru* "lofty"; `מִגְדָּל` stays
  out), "a shark's teeth" (47: no teeth in the text), "holy" (*kug*), "righteous" (100: *zid-du*), "Enlil's counsel"
  (100: *šag₄ kuš₂-u₃*), "temples" (183: *e₂*), "made famous" (182: *pa e₃ ak* "make shine"), "stags" (49: *taraḫ*
  "ibex"), "milk" (157: *gara₂* "cream"), the plan's tenses (8–10: ḫamṭu, rendered as a resolved future in the inner
  speech), "it seemed" (90–91: not in the text). The horned viper of 145 is not rendered `שְׁפִיפֹן` (Gen 49:17, Dan's
  blessing): transliterated, [absent] noted.

#### Open decisions (LZ1)
1. **Narrative and speech *na-*** (107 `תיכנס`, 128 `אכניס`, 177 `גם יאמר לי`, 194): read as affirmative, extending
   the §12.6.1 ruling (narrative *na-*) to these speech forms, as ETCSL ("indeed I will befriend you"); the prohibitive
   *na-* (109, 168, 170, 179–180, 185, 187, 196–197) stays `אַל`. Confirm.
2. **8–10** (*ba-ni-in-ak*, *ba-ni-in-la₂*, ORACC 3rd person ḫamṭu) rendered as first-person future inside the inner
   speech (`אעשה`, `אתלה`), with the aspect explained; the alternative is a narrated past ("he treated the bird …").
3. ***alan***: drafted `צֶלֶם`; **coordinator's ruling: `פֶּסֶל`** (five Sumerian precedents) – 181, 198 changed to `פסלך` /
   `[פסלי]`; `צֶלֶם` / Gen 1:26 stay in the הקבלה, Exod 20:3 `פֶסֶל` added there.
4. **Anzud without the article** (`אנזוד`, `גוזל אנזוד`, `אשת אנזוד`), as Gudea's name `אַנְזוּד`; renderings §12.1
   proposed `גוזל האנזוד` / `האנזוד – אשתו`. Revisable by script if the coordinator prefers the article.
5. *zag-še* = `כתף` (168, 185; ORACC "shoulder", Enki and Ninmaḫ 91 `כתפיו`) against ETCSL "thighs"; EA's idiom
   *zag-še tuku* `בעל כוח־עמידה` unchanged.
6. *a-ru* (31) transliterated `אָרוּ` (ORACC: *ḫurin* "eagle", Akk. *arû*): `נשר` would need the gate licence
   `a-ru` – I preferred not to stretch the gate.
7. Uncertain words in italics: 2 `*בעצמו בטח*` (*nir ĝal₂*), 15–16 `*הקניין*`, 37 `*חומק*`, 55 `*פיטם*`, 68–69
   `*נעצר*` (*lug*), 115–116 `*הגבות*`, 124 `*גופך*` (*šag₄-sud*), 131 `[*אפרוש*]` (*bur₂*), 144 `*הקנה*`, 145
   `*שַׁגְטוּר*`, 201 `*ינפצו*` (*dub₂*, EA `נפץ`; ETCSL "shake"), 202 `*תעלות־תעלות*`.
8. 62 *mu-un-na-ak-en*: the *-en* ignored in narrative (3rd person `עשה`), as ETCSL; 129 is the 1st-person copy.

#### Proposals for the corpus renderings (LZ1)
Strings exactly as used; **LZ2** should copy them where the Sumerian recurs (Anzud's speeches 209–219, the provisions
203 ↔ 341, the bird/Anzud pairs, *ĝa₂-nu*), and **ES** where it shares the words.
- **The pair "the bird … / Anzud …"**: `הציפור – …` / `אנזוד – …` (every pair identical but for the noun); speech
  introduction `אנזוד – אל לוגלבנדה הטהור – פונה:` (134 = 161 = 184; for LZ2 209 `הציפור – אל לוגלבנדה הטהור – פונה:`);
  `"לכה נא, לוגלבנדה שלי!` (*ĝa₂-nu lugal-ban₃-da-ĝu₁₀*, 135 = 162; for 210).
- **The call to the nest** (70–77): `כשהציפור – אל קנו – שאגה השיב,` / `גוזלו – מקנו – דבר לא השיב.` (75 `דבר היה
  משיב;`); openings `בפעם השנייה –`, `לפנים, אכן –` (*ud na-an-ga-ma*), `ועתה –` (*i₃-ne-eš₂*).
- **The nest decorated** (58–60 = 94–96): `את עיניו – בפוּךְ־האמת – נימר;` / `על ראשו – ארז לבן נעץ;` / `את בשר־המלח,
  המגולגל ביד – ליד ראשו שָׂם.`
- **The refrain** (141 = 148 = 154 = 158): `לוגלבנדה – איש אוהב הזרע הוא – יד אינו פושט.` (*šu gid₂* `יד פשט`, Gudea).
- **The request → the grant** (168–183 → 185–200): `"בכתפיי / בכתפיך – ריצה תהיה! אַל איגע / אַל תיגע!`;
  `בזרועותיי / בזרועותיך – כוח יהיה!`; `את זרועותיי – ארחיקה! / את זרועותיך – הרחק!` + `– אַל תחלינה!`; `הולך כאור היום,
  כאִינַנָּה,`; `כשבע הסערות, כסערות אִישְׁכּוּר –` (189 `כשבע הסערות של אִישְׁכּוּר –`); `כאש – אנשא! כברק – אבזיק!` (190
  `כאש – מתנשא, כברק – מבזיק!`); `אל אשר ראתה עיני / עינך – אלכה! / לך!`; `אל אשר עיניים נשאתי / נשאת – את רגלי אציב! /
  את רגלך הצב!`; `אל מלוא כרי לבי / לבך – מן השמים אשוב! / שוב!`; `במקום אשר לבי / לבך גם יאמר לי / לך – את נעליי אתיר!
  / את נעליך התר!`; `כאשר אוּתוּ – אל עירי / עירך, כולבה – יכניסני / יכניסך,`; `האיש אשר קללה אמר עליי / עליך – אַל ישמח
  בי / בך!`; `האיש אשר ריב הצמיח עמי / עמך – 'שיבוא!' – עליי / עליך אַל יאמר!`; `את פסלך – בידי חרש־העץ – כשאעצב,
  להתפעלות תעמוד;` → `את פסלי – בידי חרש־העץ – כשתעצב, להתפעלות כשתעמיד,`; `שמך – בשׁוּמֶר – אכן יזהיר;` → `שמי –
  בשׁוּמֶר – הזהיר;`; `בבית האלים הגדולים – כעדי נמצא.` (183 = 200).
- **Fate and decree:** *nam tar* `גזר גורל` (99 `הנסיך הגוזר את גורלותיו`, 103 `גורל – כשאגזור – מי יהפכנו?`, 108,
  131 `את גורלי הנגזר`, 166 `גורל נגזר – כמלוא כרי לבך – אני אגזור לך!` – for LZ2 213 *nam i-ri-tar-ra* `הגורל אשר גזרתי
  לך`); *šu bal* `הפך`; *bal* + *-ta-* `הסיג`; *šag₄-ge guru₇* `מלוא כרי הלב` (D14).
- **Words:** *ĝa₂-la dag* `חדל`; *nir ĝal₂* `*בטח*`; *na de₅* `עצה נתן`; *inim sig₁₀* `דבר נתן` / *inim šag₄-ga sig₁₀*
  `לתת דבר אל הלב`; *nam-me-te* `כיאות`; *gu₂-da la₂* `בצוואר תלה`; *ĝišbun* `משתה`; *gakkul* `גיגית־התסיסה`; *lamsare*
  `קדרת־הבישול`; *sagi* `משקה`; *buniĝ* `שוקת`; *ne-saĝ* `ראשית` (*ĝeštin ne-saĝ* `יין־הראשית`); *kaš naĝ ul te*
  `שֵׁכָר ששתה, אל הגיל שקרב`; *ul* `גיל`, *ul ak* `גיל עשה`; *ĝiš-ḫu-ri₂-in* `עץ־הנשר`; *u₁₈-ru* `נישא`; *a-ru* `אָרוּ`;
  *ĝissu* `צל`; *{ĝiš}i-ri₉-na* `שורשים`; *buru₅-az* `ציפור־הבּוּרוּאַז`; *gud₃ us₂* `קן הדביק` (GEN); *gud₃* `קן`,
  *amar* `גוזל`, *amar-gud₃* `גוזל־הקן`; *nunuz* `ביצה`; *pa mul-mul* `ענפיו המנצנצים`; *a₂ ud zal-le-da* `לעת שהיום
  נוגה`; *ni₂ gid₂* `את עצמו מתח`; *šeg₁₁ gi₄* `שאגה השיב`; *ki ra* `את הארץ מכה`; *umbin* `טפר`; *kušu₂* `כּוּשׁוּ`;
  *kur-ur₂* `שורש ההר`; *sar* `רץ`; *gal zu* / *gal tum₂* `גדולות ידע` / `גדולות מוביל`; *ninda mu-ud-gi* `לחם־המתיקות`;
  *saĝ sig₁₀* `נתינת־ראש`; *suš₂* `שומן`; *ninda-i₃-de₂-a* `לחם־השמן־היצוק`; *mu-du-li-a* `בשר־המלח`; *gu₂ gur* `אגר`;
  *a … gur* `כּוֹר`; *ze₂* `מרה`; *a-nir ĝar* `אנחה שָׂם`; *u₈* `אוֹיָה`; *engur* `מצולה`; *kiši₈* `נמלה`; *tur₃ gal
  {d}nanna* `הרפת הגדולה של נַנָּה`; *ni₂ ḫuš ri* `אימה נוראה הוטלה`; *su zig₃* `קימת־בשר` (Gudea); *til₃* (dwell)
  `שכן`; *silim-eš* `כשלם`; *iri / ar₂ e* `שבח אמר`; *igi-tab* `מחסום־העיניים`; *ĝiš-ig* `דלת`; *gu₅-li* `רֵעַ`;
  *gaba-šu-ĝar* `יריב`; *meš₃* `גבר` (new; Gudea's *nitaḫ* `הגבר` is LC's `זכר`: a small split); *a₂ šum₂* `כוח נתן`;
  *mi₂ dug₄* `חיבה אמר`; *šu-ur₂* `*גבות*`; *niĝin₅* `מחוז`; *a-ne dug₄* `השתעשע`; *pabilga* `סב`; *ḫa-la* `חלק`; *pa*
  (wing) `כנף`; *sa* `רשת`; *es₂-ad* `מלכודת`; *murgu* `גב`; *dub sar* `כותב לוחות`; *ti* `צלע`; *ša-dug₄-ga-ta*
  `מאתמול`; *zag us₂* `צד הדביק`; *ad-da* `אבא` → `אבי`; *ki-gub ak* `מקום עמידה עשה`; *ni₂ ba* `את עצמו הגיש`; *ma₂*
  `ספינה`; *ḫašḫur* `תפוח`; *ukuš₂* `קישוא`; *ki-buru₁₄* `מקום־הקציר`; *numun ki aĝ₂* `אוהב הזרע`; *ti zu₂* `חצים
  בעלי־שן`; *GIL-ak* `*חצי־הקנה*`; *iti₆* `אור הירח`; *muš-šag₄-tur₃* `נחש־*שַׁגְטוּר*`; *{urud}dur₁₀* `כשיל`; *tu₆ kud*
  `חתוך בקסם`; *ad* `קורה`; *niĝ₂-keše₂* `צרור` (Enki and the World Order's `מלכודת`: split by sense); *saĝšu* `מצנפת`;
  *gaba nu-gi₄* `שאינו משיב חזה`; *tab* `הידק` (102: `סגר`); *šakir* `מחבצה`; *gara₂* `שמנת`; *ki-šar₂* `תבל`;
  *ki-ib* `קִיבּ`; *ĝeštug₂ ĝar* `אוזן שָׂם`; *gud erim₂* `שור עוין`; *anše dub₃ guz* `חמור כפוף־הברך`; *zag-še* `כתף`;
  *kaš₄* `ריצה`; *lirum* `כוח`; *sud* `הרחיק`; *gig* `חלה`; *izi il₂* `כאש נשא`; *nim ĝir₂* `כברק הבזיק`; *e-sir₂ du₈*
  `נעל התיר`; *aš₂ dug₄* `קללה אמר`; *du₁₄ mu₂* `ריב הצמיח`; *alan* `פֶּסֶל` (ruling); *ĝiš-dim₂* `חרש־העץ`; *dim₂* `עיצב`; *u₆-e
  gub* `להתפעלות עמד`; *pa e₃ ak* (name) `הזהיר`; *dub₂* `*נפץ*`; *pa₅* `תעלה`; *ubur* `דד`.
- **Names:** `אַנְזוּד` (no article), `נִינְגּוּאֵנָה`, `נִינְכַּסִי`, `לוּלוּבִּי`, `נִירָח`, `נִינוּרְתָּה`, `הָאֲנוּנָּה`, `זַבּוּ` ★,
  `שַׁרָא` ★, `אִישְׁכּוּר`.
- **Tool (FORMULAS_CY candidates):** the refrain (`lu₂ numun-e ki aĝ₂-am₃ šu nu-um-(ma-)?gid₂-de₃` → `איש אוהב הזרע הוא
  – יד אינו פושט`); the call to the nest (`gud₃-bi-še₃ šeg₁₁ un-gi₄` → `אל קנו – שאגה השיב`; `inim nu-um-ma-ni-ib-gi₄` →
  `דבר לא השיב`); *ĝa₂-nu lugal-ban₃-da-ĝu₁₀* → `לכה נא, לוגלבנדה שלי!`. No gate licence is needed for this part.

### Parallels index (LZ1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | ama nu-mu-un-da-an-ti na nu-mu-un-de₅-de₅ | אם – לא קרבה אליו; עצה – אינה נותנת | `וְאִילוֹ הָאֶחָד שֶׁיִּפּוֹל וְאֵין שֵׁנִי לַהֲקִימוֹ` (קהלת ד:י) | equivalent | The man alone, without kin or counsel (3–6; cf. LC 155–156). |
| 7 | šag₄ ni₂-te-na-ka inim am₃-mi-ib₂-sig₁₀-ge | בלב עצמו – דבר נותן | `וַיֹּאמֶר בְּלִבּוֹ` (בראשית יז:יז) | equivalent | Inner speech quoted as speech. |
| 10 | dam-a-ni-da gu₂-da ba-ni-in-la₂ | עם אשתו – בצוואר אתלה | `וַיְחַבְּקֵהוּ וַיִּפֹּל עַל צַוָּארָו וַיִּשָּׁקֵהוּ` (בראשית לג:ד) | equivalent | The embrace as "hanging on the neck". |
| 12 | ĝišbun-na um-ma-ni-in-dur₂-ru-un | כשאושיבם במשתה | `בְּמִשְׁתֵּה הַיַּיִן מַה שְּׁאֵלָתֵךְ וְיִנָּתֵן לָךְ` (אסתר ה:ו) | equivalent | The banquet that wins a request. |
| 20 | kaš-ta tuš-a-ni mud₅-me-ĝar-ra | בשבתה ליד השֵׁכָר – גיל | `הַמְשַׂמֵּחַ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:יג) | equivalent | Drink that gladdens gods and men. |
| 24 | mušen kaš naĝ-ĝa₂ ul ti-a | הציפור – שֵׁכָר ששתה, אל הגיל שקרב | `כְּטוֹב לֵב הַמֶּלֶךְ בַּיָּיִן` (אסתר א:י) | equivalent | The merry ruler is the one to ask. |
| 28 | ud-ba giri₁₇-zal ĝiš-ḫu-ri₂-in {d}en-ki-ke₄ | אז – החדווה, עץ־הנשר של אֶנְקִי | `הִנֵּה אַשּׁוּר אֶרֶז בַּלְּבָנוֹן יְפֵה עָנָף וְחֹרֶשׁ מֵצַל וּגְבַהּ קוֹמָה` (יחזקאל לא:ג) | equivalent | The cosmic tree (`נשר` licensed by *ḫu-ri₂-in*). |
| 30 | ugu-ba u₁₈-ru-gin₇ ki ḫe₂-us₂-sa-ba | על קדקדם – כנישא – כאשר לארץ אכן דבק | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | divergence | ETCSL's "like a tower" is *u₁₈-ru* "lofty": a corrected reading, no tower. |
| 33 | tug₂-gin₇ i-im-dul gada-gin₇ i-im-bur₂ | כבגד – כיסה; כפשתן – פרש | `בִּסְעַפֹּתָיו קִנְנוּ כָּל עוֹף הַשָּׁמַיִם … וּבְצִלּוֹ יֵשְׁבוּ כֹּל גּוֹיִם רַבִּים` (יחזקאל לא:ו) | equivalent | The tree's shade over all; birds nesting in it. |
| 37 | muš nu-un-sul-sul ĝiri₂ nu-sa-sa | נחש אינו *חומק*, עקרב אינו עוקץ | `נָחָשׁ שָׂרָף וְעַקְרָב וְצִמָּאוֹן` (דברים ח:טו) | divergence | Snake and scorpion define the place by their absence. |
| 41 | gud₃ im-ma-ni-ib-ĝar amar-bi ba-e-še₂₁ | קן שָׂם; גוזלו – בו שכב | `כְּנֶשֶׁר יָעִיר קִנּוֹ עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | equivalent | Eagle, nest and young; `קן`, `גוזל` are the corpus's words for *gud₃*, *amar*. |
| 45 | anzud{mušen}-de₃ {d}utu e₃-a-ra šeg₁₁ un-gi₄ | כשאנזוד – לאוּתוּ היוצא – שאגה השיב | `יָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח` (תהלים יט:ו) | equivalent | The sunrise greeted as a hero's event. |
| 46 | šeg₁₁ gi₄-bi-še₃ kur-ra lu₅-lu₅-bi-a ki mu-un-ra-ra-ra | לשאגתו – בהר לוּלוּבִּי – את הארץ מכה | `מִצִּיּוֹן יִשְׁאָג וּמִירוּשָׁלִַם יִתֵּן קוֹלוֹ` (עמוס א:ב) | equivalent | A roar heard over the land. |
| 47 | umbin kušu₂{ku₆}-e ḫu-ri₂-in{mušen}-na-kam | טפרי הכּוּשׁוּ – של נשר הם | `וְטִפְרוֹהִי כְצִפְּרִין` (דנייאל ד:ל) | equivalent | Bird's talons on a creature that is not a bird; ETCSL's "shark's teeth" not in the text. |
| 55 | amar-e {uzu}suš₂ bi₂-in-gu₇ {uzu}i₃-udu bi₂-in-peš₅ | את הגוזל – שומן האכיל, חֵלֶב *פיטם* | `וְאֶפְרֹחָו יְעַלְעוּ דָם; וּבַאֲשֶׁר חֲלָלִים שָׁם הוּא` (איוב לט:ל) | equivalent | The eagle's young fed on flesh. |
| 58 | igi-bi šem-bi-zid-da mi-ni-gun₃ | את עיניו – בפוּךְ־האמת – נימר | `וַתָּשֶׂם בַּפּוּךְ עֵינֶיהָ וַתֵּיטֶב אֶת רֹאשָׁהּ` (מלכים ב ט:ל) | equivalent | Kohl and adorning the head (= 94). |
| 65 | am til₃-la šu-bi-še₃ i-im-la₂ | ראם חי – בידו תלה | `יִפְרֹשׂ כְּנָפָיו יִקָּחֵהוּ יִשָּׂאֵהוּ עַל אֶבְרָתוֹ` (דברים לב:יא) | divergence | The eagle carries its young; Anzud carries prey for its young. |
| 67 | a 10! gur!-am₃ ze₂!-bi mu-un-de₂ | מים, עשרה כּוֹר הם – את מרתו שפך | `שְׁלֹשִׁים כֹּר סֹלֶת וְשִׁשִּׁים כֹּר קָמַח` (מלכים א ה:ב) | cognate | *gur* = Akk. *kurru* = `כֹּר`. |
| 71 | amar-bi gud₃-bi-ta inim nu-um-ma-ni-ib-gi₄ | גוזלו – מקנו – דבר לא השיב | `וְאֵין קוֹל וְאֵין עֹנֶה` (מלכים א יח:כו) | equivalent | The call without an answer (×3). |
| 77 | amar-bi gud₃-bi-ta inim nu-um-ma-ni-ib-gi₄ | גוזלו – מקנו – דבר לא השיב | `הַיֶּלֶד אֵינֶנּוּ וַאֲנִי אָנָה אֲנִי בָא` (בראשית לז:ל) | equivalent | The child who "is not". |
| 78 | mušen-e a-nir i-im-ĝar an-e ba-te | הציפור – אנחה שָׂם; אל השמים קרבה | `רָחֵל מְבַכָּה עַל בָּנֶיהָ … כִּי אֵינֶנּוּ` (ירמיהו לא:יד) | equivalent | A parent's lament for a missing child, heard afar. |
| 83 | kiši₈-gin₇ ki-in-dar-ra ba-an-di-ni-ib-kur₉-re-eš-am₃ | כנמלים – אל סדקי־הסלע – נכנסו | `וּבָאוּ בִּמְעָרוֹת צֻרִים וּבִמְחִלּוֹת עָפָר מִפְּנֵי פַּחַד יְהוָה` (ישעיהו ב:יט) | equivalent | Hiding in rock clefts from terror; here the gods themselves hide. |
| 92 | ki diĝir til₃-la-gin₇ im-ak giri₁₇-zal im-du₈-du₈ | כמקום שאל שוכן בו נעשה; חדווה – פרושה בו | `וְאֶקְחָה פַת לֶחֶם וְסַעֲדוּ לִבְּכֶם` (בראשית יח:ה) | equivalent | Hospitality to a divine guest – here the host is absent and the gift speaks. |
| 103 | nam u₃-mu-tar a-ba-a šu mi-ni-ib-bal-e | גורל – כשאגזור – מי יהפכנו? | `כִּי יְהוָה צְבָאוֹת יָעָץ וּמִי יָפֵר; וְיָדוֹ הַנְּטוּיָה וּמִי יְשִׁיבֶנָּה` (ישעיהו יד:כז); `אֶפְעַל וּמִי יְשִׁיבֶנָּה` (ישעיהו מג:יג) | equivalent | The irreversible decree (`גורל` licensed by *nam*). |
| 104 | inim u₃-bi₂-dug₄ a-ba-a ib₂-ta-bal-e | דבר – כשאומר – מי יסיגנו? | `הִנֵּה בָרֵךְ לָקָחְתִּי; וּבֵרֵךְ וְלֹא אֲשִׁיבֶנָּה` (במדבר כג:כ) | equivalent | The word once spoken. |
| 106 | diĝir ḫe₂-me-en inim ga-mu-ra-ab-dug₄ | אם אל אתה – דבר אוֹמַר לך | `כִּי שָׂרִיתָ עִם אֱלֹהִים וְעִם אֲנָשִׁים וַתּוּכָל` (בראשית לב:כט) | divergence | God or man? – and a new name (110); there a struggle, here a kindness. |
| 108 | lu₂-ulu₃ ḫe₂-me-en nam ga-mu-ri-ib-tar | אם אדם אתה – גורל אגזור לך | `שְׁאַל מָה אֶתֶּן לָךְ` (מלכים א ג:ה) | equivalent | The divine offer of a gift. |
| 111 | lugal-ban₃-da ni₂ 1(DIŠ)-ta ḫul₂-la 1(DIŠ)-ta | לוגלבנדה – באימה כאחד, בשמחה כאחד | `וְגִילוּ בִּרְעָדָה` (תהלים ב:יא) | equivalent | Fear and joy together before the divine. |
| 119 | an šu-zu-še₃ mu-un-ĝar ki ĝiri₃-zu-še₃ mu-un-ĝar | את השמים – לידך – שָׂם; את הארץ – לרגליך – שָׂם | `כֹּל שַׁתָּה תַחַת רַגְלָיו` (תהלים ח:ז); `הַשָּׁמַיִם כִּסְאִי וְהָאָרֶץ הֲדֹם רַגְלָי` (ישעיהו סו:א) | equivalent | Heaven and earth at hand and foot. |
| 120 | pa-zu an-na sa am₃-ši-im-la₂-la₂-en | כנפך – בשמים – רשת תולה אתה | `אֶפְרוֹשׂ עֲלֵיהֶם רִשְׁתִּי כְּעוֹף הַשָּׁמַיִם אוֹרִידֵם` (הושע ז:יב) | equivalent | A net spread across the sky. |
| 125 | ša-dug₄-ga-ta zi-ĝu₁₀ mu-ri-de₆ zag-ĝu₁₀ mu-ri-us₂ | מאתמול – את חיי אליך נשאתי; את צידי אליך הדבקתי | `אֲשֶׁר בָּאת לַחֲסוֹת תַּחַת כְּנָפָיו` (רות ב:יב) | equivalent | Taking refuge with the winged protector. |
| 126 | dam-zu ama-ĝu₁₀ ḫe₂-am₃ bi₂-in-dug₄ | 'אשתך – אמי תהיה!' – אמר | `עַמֵּךְ עַמִּי וֵאלֹהַיִךְ אֱלֹהָי` (רות א:טז) | equivalent | Entering a foreign family by a formula. |
| 127 | za-e ad-da-ĝu₁₀ ḫe₂-me-en bi₂-in-dug₄ | 'אתה – אבי תהיה!' – אמר | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | equivalent | An adoption formula (reversed: the man adopts the god as father). |
| 131 | silim-ĝu₁₀ ga-mu-ra-dug₄ nam tar-ra-ĝu₁₀ ga-mu-ra-ab-[bur₂]-ra-a | את שלומי אוֹמְרָה לך; את גורלי הנגזר – לך [*אפרוש*] | `בְּיָדְךָ עִתֹּתָי` (תהלים לא:טז) | equivalent | One's future placed in the power's hand. |
| 136 | {ĝiš}ma₂ kug-gin₇ {ĝiš}ma₂ še-gin₇ | כספינת כסף, כספינת שעורה | `הָיְתָה כָּאֳנִיּוֹת סוֹחֵר; מִמֶּרְחָק תָּבִיא לַחְמָהּ` (משלי לא:יד) | equivalent | Ships as the image of wealth (the first gift). |
| 141 | lugal-ban₃-da lu₂ numun-e ki aĝ₂-am₃ šu nu-um-⟨ma⟩-gid₂-de₃ | לוגלבנדה – איש אוהב הזרע הוא – יד אינו פושט | `אִם מִחוּט וְעַד שְׂרוֹךְ נַעַל וְאִם אֶקַּח מִכָּל אֲשֶׁר לָךְ` (בראשית יד:כג); `וַיִּפְצַר בּוֹ לָקַחַת וַיְמָאֵן` (מלכים ב ה:טז) | equivalent | The gifts refused (refrain ×4). |
| 143 | ti zu₂-zu-a ud-gin₇ e₃-i₃ | בחצים בעלי־השן – כאור היום – צא! | `שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה; לְאוֹר חִצֶּיךָ יְהַלֵּכוּ` (חבקוק ג:יא) | equivalent | Arrows like the light of sun and moon (143–144). |
| 145 | ti zu₂ lu₂ ra-ra-bi muš-šag₄-tur₃ ḫe₂-e | … נחש־*שַׁגְטוּר* אכן יהיה | `שְׁפִיפֹן` (בראשית מט:יז) | absent | ETCSL's "horned viper"; `שְׁפִיפֹן` would import Dan's blessing – transliterated (echo control). |
| 150 | {tug₂}saĝšu piriĝ me₃-a ugu-za ḫe₂-eb-dul | במצנפת 'לביא־הקרב' – את קדקדך – אכן יכסה | `וְנָתַן קוֹבַע נְחֹשֶׁת עַל רֹאשׁוֹ; וַיַּלְבֵּשׁ אֹתוֹ שִׁרְיוֹן` (שמואל א יז:לח) | equivalent | A king's (here a god's) armour offered to the young hero – and declined. |
| 151 | … gaba nu-gi₄ gaba-za ḫe₂-eb-tab | … שאינו משיב חזה – על חזך אכן יהדק | `וַיִּלְבַּשׁ צְדָקָה כַּשִּׁרְיָן וְכוֹבַע יְשׁוּעָה בְּרֹאשׁוֹ` (ישעיהו נט:יז) | equivalent | Divine helmet and breastplate. |
| 155 | ḫe₂-ĝal₂ {dug}šakir kug {d}dumu-zid-da-[ka-ka] | השפע של המחבצה הטהורה של דּוּמוּזִי | `וְיִתֶּן לְךָ הָאֱלֹהִים מִטַּל הַשָּׁמַיִם וּמִשְׁמַנֵּי הָאָרֶץ וְרֹב דָּגָן וְתִירֹשׁ` (בראשית כז:כח) | equivalent | Plenty as a destiny bestowed (the fourth gift, refused). |
| 157 | gara₂-bi ki-šar₂-ra-ke₄ ša-ra-X […] | שמנתה – (שמנת) התבל – הֲרֵי לך … […] | `חֶמְאַת בָּקָר וַחֲלֵב צֹאן` (דברים לב:יד) | equivalent | Butter and cream as plenty. |
| 163 | inim šag₄-ga sig₁₀-ge ur₅-gim-ma-am₃ | לתת דבר אל הלב – כך הוא | `וְהַחַי יִתֵּן אֶל לִבּוֹ` (קהלת ז:ב) | equivalent | The same idiom "to give to the heart". |
| 165 | anše dub₃ guz-za ḫar-ra-an si sa₂ dab₅-be₂-dam … | חמור כפוף־הברך – דרך ישרה לאחוז (צריך) … | `וַתֵּט הָאָתוֹן מִן הַדֶּרֶךְ וַתֵּלֶךְ בַּשָּׂדֶה; וַיַּךְ בִּלְעָם אֶת הָאָתוֹן לְהַטֹּתָהּ הַדָּרֶךְ` (במדבר כב:כג) | equivalent | The donkey brought back to the road. |
| 166 | nam tar-ra šag₄-ge guru₇-a-zu ĝe₂₆-e ga-mu-ri-ib-tar | גורל נגזר – כמלוא כרי לבך – אני אגזור לך | `יִתֶּן לְךָ כִלְבָבֶךָ` (תהלים כ:ה); `וְיִתֶּן לְךָ מִשְׁאֲלֹת לִבֶּךָ` (תהלים לז:ד) | equivalent | A gift "according to the heart" (*guru₇* `כרי` [cognate via *karû*]). |
| 168 | zag-še-ĝa₂ kaš₄ ḫe₂-ĝal₂ nam-ba-kuš₂-u₃-de₃-en | בכתפיי – ריצה תהיה! אַל איגע! | `יַעֲלוּ אֵבֶר כַּנְּשָׁרִים; יָרוּצוּ וְלֹא יִיגָעוּ` (ישעיהו מ:לא) | equivalent | Running without weariness – and eagles in the same verse; the closest contact of LZ1 (= 185). |
| 171 | ud-gin₇ du {d}inana-gin₇ | הולך כאור היום, כאִינַנָּה | `יָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח` (תהלים יט:ו) | equivalent | The sun as runner (= 188). |
| 173 | izi-gin₇ ga-il₂ nim-gin₇ ga-ĝir₂ | כאש – אנשא! כברק – אבזיק! | `וְהַחַיּוֹת רָצוֹא וָשׁוֹב כְּמַרְאֵה הַבָּזָק` (יחזקאל א:יד) | equivalent | Speed as lightning (= 190). |
| 174 | igi du₈-a bar-ra-ĝa₂ ga-ĝen | אל אשר ראתה עיני – אלכה! | `שָׂא נָא עֵינֶיךָ וּרְאֵה מִן הַמָּקוֹם אֲשֶׁר אַתָּה שָׁם` (בראשית יג:יד); `כִּי אֶת כָּל הָאָרֶץ אֲשֶׁר אַתָּה רֹאֶה לְךָ אֶתְּנֶנָּה` (בראשית יג:טו) | equivalent | What the eye sees, the foot reaches (= 191). |
| 175 | igi il₂-la-ĝa₂ ĝiri₃-ĝu₁₀ ga-ab-gub | אל אשר עיניים נשאתי – את רגלי אציב! | `כָּל הַמָּקוֹם אֲשֶׁר תִּדְרֹךְ כַּף רַגְלְכֶם בּוֹ לָכֶם יִהְיֶה` (דברים יא:כד) | equivalent | The foot as the measure of reach (= 192). |
| 177 | ki šag₄-ĝu₁₀ … {kuš}e-sir₂-[ĝu₁₀] ga-du₈ | במקום אשר לבי גם יאמר לי – את נעליי אתיר! | `שַׁל נְעָלֶיךָ מֵעַל רַגְלֶיךָ` (שמות ג:ה) | divergence | Sandals loosened at a place – there for holiness, here as arrival (= 194). |
| 179 | lu₂ aš₂ dug₄-ga-ĝu₁₀ nam-ba-e-ši-ḫul₂-e-en | האיש אשר קללה אמר עליי – אַל ישמח בי! | `אַל-יִשְׂמְחוּ-לִי אֹיְבַי שֶׁקֶר` (תהלים לה:יט); `אַל תִּשְׂמְחִי אֹיַבְתִּי לִי` (מיכה ז:ח) | equivalent | Let not the enemy rejoice (= 196); cf. `וּמְקַלֶּלְךָ אָאֹר` (בראשית יב:ג). |
| 181 | alan-zu ĝiš-dim₂-ba um-mi-dim₂ u₆-e gub-ba-me-en | את פסלך – בידי חרש־העץ – כשאעצב, להתפעלות תעמוד | `נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` (בראשית א:כו) | cognate | *alan* = Akk. *ṣalmu* ~ `צֶלֶם`: there man is the god's image, here man makes the god's image (= 198). |
| 181 | (the same) | חרש־העץ … כשאעצב | `חָרַשׁ עֵצִים נָטָה קָו … וַיַּעֲשֵׂהוּ כְּתַבְנִית אִישׁ` (ישעיהו מד:יג) | equivalent | The wood-carver of a god's image – mocked there, honoured here. |
| 182 | mu-zu ki-en-gi-ra pa e₃ ḫa-bi₂-ak | שמך – בשׁוּמֶר – אכן יזהיר | `וַאֲגַדְּלָה שְׁמֶךָ` (בראשית יב:ב); `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | equivalent; divergence | A great name promised; ETCSL "made famous" is *pa e₃ ak* "make shine" (= 199). |
| 183 | e₂ diĝir gal-gal-e-ne-ka me-te-aš bi₂-[ib]-ĝal₂ | בבית האלים הגדולים – כעדי נמצא | `וְנָתַתִּי לָהֶם בְּבֵיתִי וּבְחוֹמֹתַי יָד וָשֵׁם` (ישעיהו נו:ה); `בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל ב יח:יח) | equivalent | A memorial and a name in the god's house (= 200). |
| 184 | anzud{mušen}-de₃ kug lugal-ban₃-da-ra ⸢gu₃⸣ [mu-na]-de₂-e | אנזוד – אל לוגלבנדה הטהור – פונה | `הִנֵּה עָשִׂיתִי כִּדְבָרֶיךָ` (מלכים א ג:יב); `וְגַם אֲשֶׁר לֹא שָׁאַלְתָּ נָתַתִּי לָךְ גַּם עֹשֶׁר` (מלכים א ג:יג) | divergence | The grant repeats the request "according to your word"; Solomon also receives the wealth he did not ask, Lugalbanda does not. |
| 202 | [X] {id₂}buranun-na pa₅ ubur-gin₇ … | […] הפְּרָת – תעלה כדד – … | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | cognate | The same name through Akk. *Purattu*. |

### Part LZ2 (203–417, A–F)
Translator T-LZ (resumed), Round 6 run 3, 2026-11-07. `annotated-2.rtl.md`: 220 entries (203–417 without 288, which
ETCSL does not number; A–F after 353, in ETCSL's order). Note for the tool: `data LZ 203 F` stops at F (ETCSL's order),
so the part needs a second call `data LZ 354 417` (and `skel` likewise). Twelve sections, each saved at once.
**Three review passes done**: (a) fidelity – brackets (207–208, 274–282 by the root of the verb, D–F; prefixes and
suffixes restored are unmarked), the speech boundaries (287 closes Enmerkar's reply: ETCSL has no 288), the *ḫe₂-*
forms of the remembered past (295–305: affirmative `אכן`, ETCSL's past; 318 the same form as 296 as a wish); (b)
consistency – EA's formulas (211 = EA 69, 212 = EA 70, 344 journey, 346 glad foot, 358–359 "what he said, what he
added", 417 *za₃-mi₂*), GEN 244 = 226/234, LC 264 → 322, the repeated passages (203–204 ↔ 340–341, 231–232 ↔ 335–336,
235–236 = 239–240, the six-fold refrain 272–283, 286 = 328) and **the delivery 360–387 = the message 294–321**, generated
from it: the same Hebrew, only the quotation level (`'…'`) and the scribal differences noted line by line (361 no
*-en*, 365 the verb written, 372 *i-da-la-ba*, 374 [ir], 380 *ĝa₂-a*); (c) the Hebrew read aloud (`תִּשְׁבֹּר` vocalized; the
heading word `ושומר` that the trap check caught; `האל של דגי הסוחורמש`). `verify LZ --strict`: OK, 422 entries; the
"same transliteration, different Hebrew" list holds only explained cases (167/357 `לו`/`לה`; 294/360, 321/387 quotation
marks; 296/362 past ↔ 318/384 wish). `check_bible_quotes.py`: 0 problems in both annotated files, the intro and this
file.

#### Key findings (LZ2)
- **The ancient mind.** The secret is the hinge: Anzud's grant is to be kept from friends and brothers (213–216, "the
  beautiful – evil lies in it"), and Lugalbanda answers his brothers' wonder with a truthful riddle (241–243: "I drank the
  rivers like a waterskin, growled like a wolf, pecked like a wild pigeon"). His return is told as a return from the
  dead: the mountains are "where no one goes alone, whence no man returns to men" (231–232 = 335–336), the epithet of
  the netherworld. The siege year is "the year returned to its mother" (259). The six-fold refrain "no one said: I will
  go" (272–283) prepares the volunteer. Enmerkar's message (294–321) is a lover's complaint to the goddess: remembered
  first love (she "found him in her pure heart"), the work of fifty years (Enki drains the marsh, the wall of Uruk spread
  "like a bird-net" over the steppe against the Martu "who know no barley"), and a chiastic "if she loves the city and
  hates me…" (311–314); he even calls her abandonment "like an Anzud chick" (315) – an irony only the hearer can see.
  The messenger repeats it word for word (357–387). Inana's answer is a ritual riddle (389–412): a pure river (her
  waterskin), fish eating honey-herb and acorns, a fish "god of the *suḫurmaš* fish", one tamarisk standing alone; cut
  the tamarisk into a trough, uproot the reeds, catch and cook the fish and feed it to Inana's weapon – then Aratta's
  life "in the deep" ends, and its smiths, stone-workers and moulds become Enmerkar's. Victory comes from cult, and the
  spoil is craftsmen.
- **The Bible.** No source relations; shared motifs tagged at each line: the volunteer runner (2 Sam 18:23) and the
  run "before the king" (1 Kgs 18:46, at the journey formula 344); the messenger who must not speak on the way (2 Kgs
  4:29, for the secret); "as one man" (Judg 20:8); "the return of the year" as the season of war (2 Sam 11:1, the same
  verb); heaven and earth in an oath (Deut 4:26) [divergence]; first love remembered (Jer 2:2); love/hate of a god
  (Mal 1:2–3); spear and shield laid down (Ps 46:10); the craftsmen taken from a conquered city (2 Kgs 24:14); a city of
  lapis lazuli (Isa 54:11–12); the tamarisk of a cult place (Gen 21:33). **Corrected readings / echo control:** 216
  *sag₉ … ḫul* is not "good and evil" (`טוֹב וָרָע`, Gen 3:5) – [absent]; 254 ORACC's "tower" (*dim-dim*) and 414
  ETCSL's "towering" – no `מִגְדָּל`; 345 ETCSL's "before … offering-table" – no `טֶרֶם`, no offering (*banšur* `שולחן`);
  406 ETCSL's "sacrifice" is *gu₇* "feed"; 205 "flew" is *ĝen* "went"; 317 "chamber" is *bar* "outside"; 230 "cheese"
  is *ga* "milk"; 293 *eme sig gu₇* "eat a low tongue" = slander, the idiom behind Aramaic `אֲכַלוּ קַרְצֵיהוֹן` (Dan 3:8;
  Akk. *karṣī akālu*); 304 Martu = Akk. *Amurru* = `הָאֱמֹרִי` [cognate]; 315 *nu-gig* = Akk. *qadištu* ~ `קְדֵשָׁה` (Gen
  38:21) [equivalent], transliterated in the line because the root `קדש` is reserved.

#### Open decisions (LZ2)
1. *nu-gig* (315, 381) transliterated `הנּוּגִיג`, against the law corpora's `קְדֵשָׁה` (Hammurabi, Lipit-Ištar): the
   root `קדש` is reserved in this corpus (RESERVED_COMMON). If the coordinator prefers `קְדֵשָׁה` here, a licence
   `nu-gig` is needed on the `קדש` gate (I did not bend the Hebrew; I chose the transliteration).
2. *ḫe₂-* + marû in remembered past (295, 296 = 361, 362) read as affirmative past (`אכן מצאה`, `אכן הכניסה`), as
   ETCSL; the same form in 318 = 384 is a wish (`אכן תכניס`). Identical source, different Hebrew – reported by `verify`.
3. *eme sig gu₇* (293) `לשון שפלה אכל` – literal, after Šuruppag 65 (`איש־הדבר־השפל`).
4. *zi an-na zi ki-a pad₃* (289) `בחֵי שמים, בחֵי ארץ – נשבע` (Bilgameš 157), though *pad₃* is otherwise `מצא`.
5. *gi₄* "send (back)" `שלח` (270–271, 326), *gi₄* "return" `שב` (232, 259, 336): split by sense, as EA.
6. Uncertain words in italics: 236/240 `*נפרדות*` (*sur*), 247 `*בנשיקות … משפשפים*`, 255 `*תעלות*` (*ur₂ dun*), 269
   `*נלקחה*`, 329 `*יִדְבַּק*` (*saĝ us₂* "accompany"), 405 `*יזה*` (*sud*); fish names transliterated (`סוּחוּרְמַשׁ`,
   `קִיגְטוּר`, `ה…` for ĜIŠ.ŠEŠ).
7. *ḫuš* `אדמדם` (414, colour) / `נורא` (LZ1 86); *us₂* `נגע` (396) / `דבק` elsewhere; *tab* — splits by sense, noted.

#### Proposals for the corpus renderings (LZ2)
Strings exactly as used (ES and any later Uruk text):
- **Repeated passages:** `את לחם הדרך שלו – אשר לא אכל –` / `את כלי נשקו – אחד אחד – ביד לקח.` (204 `כל אחד`); `ההררים
  הגדולים, אשר איש לבדו אינו הולך בם,` / `אשר איש מהם אל האנשים אינו שב – …`; `בשאלה ושאלה יגעו:` (= GEN 244); the refrain
  `איש – "אני אל העיר אלכה!" – אינו אומר לו;` / `"אני אל כולבה אלכה!" – אינו אומר לו;`; `אל מחנה הארצות – יצא;`, `אל
  הגדוד המלוכד, שבטווח העין – יצא;`; `אל כולבה – לבדי – אלכה; איש עמי אַל ילך!`; `לוגלבנדה הטהור – משיב לו / לה / להם:`;
  `"אחיך – מה אמר, מה הוסיף –`; the message/delivery 294–321 = 360–387 (FORMULAS_CY candidate: `ḫi-li-ĝu₁₀ ba-til` → `חִני
  תם`, `a-na-aš am₃-da-la₂-e` → `למה היא תולה`).
- **Words:** *an-ta* / *ki-ta* `מן השמים` / `מן הארץ`; *pa e₃* (reveal) `הוציא לאור`; *sag₉* `נאה` (not `טוב`); *šu niĝin₂*
  `סב`; *u₅* `אווז?`; *la-ḫa-ma* `הַלַּחַמָּה`; *gu₃ ra* `קול הכה`; *en₃ tar* `שאל`; *ĝiš ra* `הוכה בעץ`; *ga luḫ* `חלב
  רחוץ`; *ḫe₂-nun* `שובע` (`שפע` = *ḫe₂-ĝal₂*); *peš₁₀* `גדה`; *gum₂-ga-am₃ za* `נהמה השמיע`; *tum₁₂-gur₄* `יונת־בר`;
  *allānum* `בלוט`; *de₅* (peck) `ליקט`; *ne su-ub* `*נישק*`; *gam₃-gam₃* `ציפור־הגַּמְגַּם`; *zar* `אלומה`; *danna* `דַּנָּה`;
  *dim-dim* `עמודים`; *gi-bar-bar* `חיצי־קנים`; *im šeĝ₃* `כמטר הומטר`; *im-dug* `אבני־הקלע`; *mu ama-bi-ir gi₄* `שנה אל
  אמה שבה`; *buru₁₄* `קציר`; *igi ḫul* `עין הרע`; *kišig* `שיח־קוץ`; *ušumgal* `דרקון`; *tag* `נגע`; *ugnim* `מחנה`;
  *ki kiĝ₂* `חיפש`; *zi … pad₃* `נשבע בחֵי`; *unken* `אספה`; *eme sig gu₇* `לשון שפלה אכל`; *nin₉ e₅* `אחותי הנסיכה`; *kur
  šuba* `הר השוּבָּה`; *bar-rim₄* `יבשה`; *ĝiš-gi* `סבך־קנים`; *gi sumun* / *ḫenbur* `קנה ישן` / `קנה צעיר`; *ze₂* `תלש`;
  *uš₂* `סכר`; *mar-tu lu₂ še nu-zu* `המַרְטוּ, אנשים שאינם יודעים שעורה`; *gu mušen* `חבל־ציד של ציפורים`; *i-da-al-la-ba*
  `עכשיו`; *ḫi-li til* `חן תם`; *ab₂-šilam* `פרה מניקה`; *ud-da* `אם`; *a-na-aš* `למה`; *nu-gig* `נוּגִיג` (open 1); *sag₂*
  `פיזר`; *ĝiš-gid₂-da* `חנית`; *zur* `שבר`; *gir₅* `זר`; *ḫunḫa za* `רעש השמיע`; *galam* (of an animal) `נישא`; *me-na-am₃*
  `מתי`; *šag₄ gu₃ di* `לב הומה`; *kur-bad₃* `ראש ההר`; *ma-da* `ארץ`; *šag₄-da* `כרית`; *ki-a za* `השתטח`; *a₂ aĝ₂*
  `פקודה`; *šen* `צח`; *kun* `קצה` / `זנב`; *u₂-lal₃* `עשב־דבש`; *šinig* `אֶשֶׁל`; *ambar* `אגם`; *du₃* (tree) `נטוע`; *sag₃*
  (tree) `כרת`; *a₂-an-kar₂* `אַנְקַר`; *a₂ me₃* `כוח הקרב`; *šu sud* `יד הרחיק`; *zi … til* `חיים כילה`; *kug-dim₂* /
  *za-dim₂* `מעצב־הכסף` / `מעצב־האבן`; *u₃-gibil* `חידוש`; *agarin₄* `דפוס`; *zag-e₃* `מעקה`; *saĝ zig₃* `מתנשא`; *ḫuš*
  (colour) `אדמדם`; *kid₂* `נכרה`.
- **Names:** `אַמָא־אוּשׁוּמְגַּל־אַנָּה`, `הַלַּחַמָּה`, `אֶרִידוּ`, `מַרְטוּ`, `אַנְשָׁן` ★, `סוּחוּרְמַשׁ`, `קִיגְטוּר`.
- **Tool:** `data` and `skel` for a range that crosses A–F need two calls (203–F, 354–417); no gate licence needed
  unless open 1 is changed.

### Parallels index (LZ2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 214 | gu₅-li-zu-ne-er nam-mu-ni-ib-be₂-en | לרעיך – אַל תאמר | `כִּי תִמְצָא אִישׁ לֹא תְבָרְכֶנּוּ וְכִי יְבָרֶכְךָ אִישׁ לֹא תַעֲנֶנּוּ` (מלכים ב ד:כט) | equivalent | Silence imposed on the one sent; here the secret of the gift. |
| 216 | sag₉-ga ḫul šag₄-ga ĝal₂-la ur₅ ḫe₂-na-nam-ma | הנאה – רע שבלב יש בו – כך אכן הוא | `וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | absent | ETCSL's "fair … foul" is *sag₉* "beautiful" and *ḫul*: no "good and evil" (`טוב` only *dug₃*). |
| 222 | lu₂ an-ta ki-a gub-ba-gin₇ | כאיש העומד – מן השמים – על הארץ | `עוֹד יוֹסֵף בְּנִי חָי` (בראשית מה:כח) | equivalent | The one thought lost appears alive. |
| 232 | lu₂-bi lu₂-ra nu-gi₄-gi₄-da … | אשר איש מהם אל האנשים אינו שב – איך באת משם? | — | absent | The mountains described as the land of no return (the netherworld's epithet). |
| 247 | gu₂-ni gu₂-da im-da-la₂-e-ne ne mu-un-su-su-ub | את צווארו – בצוואר – תולים; *בנשיקות* … | `וַיְחַבְּקֵהוּ וַיִּפֹּל עַל צַוָּארָו וַיִּשָּׁקֵהוּ` (בראשית לג:ד) | equivalent | Brothers' reunion: neck and kiss. |
| 251 | … lu₂ dili-gin₇ eĝer-bi-ir bi₂-ib-us₂ | (חיל) אוּרוּךְ – כאיש אחד – אחריו דבק | `וַיָּקָם כָּל הָעָם כְּאִישׁ אֶחָד` (שופטים כ:ח) | equivalent | The army "as one man". |
| 259 | … mu ama-bi-ir ba-gi₄ | שנה – אל אמה – שבה | `וַיְהִי לִתְשׁוּבַת הַשָּׁנָה` (שמואל ב יא:א) | equivalent | The "return" of the year as the measure of a siege; the same verb (*gi₄* `שוב`). |
| 284 | lugal-ban₃-da dili-ni uĝ₃-ĝa₂ mu-na-an-zig₃ … | לוגלבנדה – לבדו, מן העם – קם לו | `וַיָּרָץ אֲחִימַעַץ דֶּרֶךְ הַכִּכָּר וַיַּעֲבֹר אֶת הַכּוּשִׁי` (שמואל ב יח:כג) | equivalent | The young volunteer runner. |
| 289 | zi an-na zi ki-a i₃-pad₃ … | בחֵי שמים, בחֵי ארץ – נשבע | `הַעִידֹתִי בָכֶם הַיּוֹם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים ד:כו) | divergence | Heaven and earth in an oath – there witnesses, here sworn by. |
| 293 | eme sig {d}inana ba-ni-in-gu₇ | על אִינַנָּה – לשון שפלה אכל | `וַאֲכַלוּ קַרְצֵיהוֹן דִּי יְהוּדָיֵא` (דנייאל ג:ח) | equivalent | "To eat" slander: Sumerian idiom, Akk. *karṣī akālu*, Aramaic. |
| 294 | ki ud-ba nin₉ e₅-ĝu₁₀ kug {d}inana-ke₄ | בעת ההיא – אחותי הנסיכה, אִינַנָּה הטהורה | `זָכַרְתִּי לָךְ חֶסֶד נְעוּרַיִךְ אַהֲבַת כְּלוּלֹתָיִךְ` (ירמיהו ב:ב) | equivalent | First love recalled as a complaint (= 360). |
| 304 | mar-tu lu₂ še nu-zu ḫu-mu-zig₃ | המַרְטוּ, אנשים שאינם יודעים שעורה – אכן קמו | `וְאֶת הַיְבוּסִי וְאֶת הָאֱמֹרִי` (בראשית י:טז) | cognate | Martu = Akk. *Amurru* = `הָאֱמֹרִי`; the nomad seen from the city (= 370). |
| 311 | ud-da iri-ni ki ḫa-ba-an-aĝ₂ ĝa₂-a-ra ḫul ḫa-ba-an-gig | אם את עירה אכן אהבה, ואותי אכן שנאה | `וָאֹהַב אֶת יַעֲקֹב` (מלאכי א:ב); `וְאֶת עֵשָׂו שָׂנֵאתִי` (מלאכי א:ג) | equivalent | A deity's love and hate as a pair (311–314 = 377–380). |
| 315 | nu-gig-ge anzud{mušen} amar-ra-gin₇ | הנּוּגִיג – כגוזל אנזוד | `אַיֵּה הַקְּדֵשָׁה הִוא בָעֵינַיִם עַל הַדָּרֶךְ` (בראשית לח:כא) | equivalent | *nu-gig* = Akk. *qadištu* ~ `קְדֵשָׁה`, here the goddess's title; transliterated (root `קדש` reserved) (= 381). |
| 319 | ĝiš-gid₂-da-ĝu₁₀ ud ne ba-an-de₆ | את חניתי – ביום הזה – תישא | `קֶשֶׁת יְשַׁבֵּר וְקִצֵּץ חֲנִית` (תהלים מו:י) | equivalent | Weapons laid down / broken: the end of war (319–320 = 385–386). |
| 324 | ur gir₅ ur-ra kur₉-ra-gin₇ … | ככלב זר הנכנס בין הכלבים – רעש עליו השמיעו | `הֲכֶלֶב אָנֹכִי כִּי אַתָּה בָא אֵלַי בַּמַּקְלוֹת` (שמואל א יז:מג) | equivalent | The young hero treated as a dog. |
| 330 | {d}udug sag₉-ga-me nam-ba-e-de₃-gub-ba | אם רוּחַ־הַמָּגֵן הַנָּאָה שלנו – לא תעמוד עמך | `הִנֵּה אָנֹכִי שֹׁלֵחַ מַלְאָךְ לְפָנֶיךָ לִשְׁמָרְךָ בַּדָּרֶךְ` (שמות כג:כ) | equivalent | A protective being on the road (`מַלְאָךְ` in the apparatus only). |
| 338 | lugal-ban₃-da šag₄ gu₃ di šeš-a-ne-ne-ta | בלב ההומה של אחיו | `הֹמֶה לִּי לִבִּי לֹא אַחֲרִשׁ` (ירמיהו ד:יט) | equivalent | The heart that "makes noise" in fear. |
| 344 | ḫur-saĝ 5 ḫur-saĝ 6 ḫur-saĝ 7 im-me-re-bal-bal | הררים חמישה, הררים שישה, הררים שבעה – חצה | `וַיְשַׁנֵּס מָתְנָיו; וַיָּרָץ לִפְנֵי אַחְאָב עַד בֹּאֲכָה יִזְרְעֶאלָה` (מלכים א יח:מו) | equivalent | A miraculous run in one stretch (EA's journey formula, here in half a night). |
| 349 | i₃-gam ki-a mu-na-ab-za | כרע – על הארץ – השתטח | `וַיִּשְׁתַּחוּ אַרְצָה שֶׁבַע פְּעָמִים` (בראשית לג:ג) | equivalent | Prostration before the powerful. |
| 356 | aratta{ki} dili-zu-ne a-gin₇ im-da-ĝen-ne-en | מאָרַטָּה – לבדך – איך באת? | `מַיִם קָרִים עַל-נֶפֶשׁ עֲיֵפָה; וּשְׁמוּעָה טוֹבָה מֵאֶרֶץ מֶרְחָק` (משלי כה:כה) | equivalent | The messenger from afar. |
| 397 | {ĝiš}šinig ma-da a-na me-a-bi | עצי האשל של הארץ – כמה שהם | `וַיִּטַּע אֶשֶׁל בִּבְאֵר שָׁבַע; וַיִּקְרָא שָׁם בְּשֵׁם יְהוָה אֵל עוֹלָם` (בראשית כא:לג) | equivalent | The tamarisk at a cult place (*šinig* `אֶשֶׁל`, Gudea). |
| 409 | iri kug dim₂-bi kug-dim₂ u₃-bi₂-in-dab₅ | את הכסף המעוצב של העיר ואת מעצבי־הכסף שלה – כשיאחז | `וְכָל הֶחָרָשׁ וְהַמַּסְגֵּר` (מלכים ב כד:יד) | equivalent | Craftsmen as the spoil of a conquered city. |
| 413 | aratta{ki} zag-e₃-bi {na₄}za-gin₃ dur₅-ru-am₃ | אָרַטָּה – מעקותיה – סַפִּיר רענן הם | `וִיסַדְתִּיךְ בַּסַּפִּירִים` (ישעיהו נד:יא); `וְשַׂמְתִּי כַּדְכֹד שִׁמְשֹׁתַיִךְ` (ישעיהו נד:יב) | equivalent | A city built of precious stones (`סַפִּיר` = lapis lazuli). |
