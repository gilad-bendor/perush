# Project: Enmerkar and En-suḫgir-ana (key ES)

Corpus: `../corpus.md` (the legends of kings; the Uruk cycle, renderings §12). Round 6 run 3 (2026-11-07).

## Scope
The whole poem, ETCSL 1.8.2.4: 295 (1–283 with 52A, 54A–D; segment B: B1–B7) entries.

## Base text
- ETCSL c.1.8.2.4, from the ETCSL web page (the OTA bulk zip was unreachable on 2026-11-07; converted with
  `../../tools/etcslhtml2md.py`, checked against the XML conversion of 1.8.2.3: identical lines except that the web
  page shows "…" for one lost sign where the XML has "X"): `../../sources/ETCSL/1.8.2.4--*/transliteration.md`;
  ETCSL's own lemmas per word: `lemmas.tsv` there.
- no ORACC text (Q000370 is catalogued without one): the epsd2-literary form index for the verbs.
- Rank 3: ETCSL's English (`translation.md` there). Not available: Wilcke 1969 (Lugalbandaepos), Vanstiphout 2003
  (Epics of Sumerian Kings), Berlin 1979, Black 1998, Mittermayer's later work (records:
  `../../sources/_records-only--Legends-of-kings/`).

## Files
annotated.rtl.md (all); `translation--intro.rtl.md`; `translation.rtl.md` (generated: `python3 -I ../kings_tools.py build ES`).

## Line numbering
ETCSL's composite labels; a second segment's lines carry the segment letter.

## Progress
(per part: drafted, three passes, verify)
- ES (1–283, 52A, 54A–54D, B1–B7): drafted, three review passes, `verify ES --strict` 293/295 (94 Aruru, 258 *šudu₃*: gate licences pending, open decisions 1–2), quotes clean in the annotated file, the intro and this file; `translation--intro.rtl.md` written; `translation.rtl.md` not built (the coordinator builds) – 2026-11-07 (T-ES).

## Parts

### Part ES (1–283, B1–B7)
Translator T-ES, Round 6 run 3, 2026-11-07. `annotated.rtl.md`: 295 entries (1–283 with 52A, 54A–54D; segment B:
B1–B7), fourteen sections plus segment B. Drafted section by section from `kings_tools.py data ES 1 B7` (ETCSL line,
ETCSL lemmas, the epsd2-literary form index for each verb, the related lines of the four poems with their Hebrew);
the transliteration of every entry comes from `kings_tools.py skel` (never retyped: the drafts were merged into the
skeleton by label), and the file was rewritten and verified after each section. **There is no ORACC text**: every
verbal chain was analysed by us and marked "ניתוח שלנו", with the form-index parse it rests on in brackets.
**Three review passes done**: (a) fidelity – every content word against the transliteration; brackets by the root
(146 `[מן השפלה]`, 147 `[ההר]`, 225 `[על קצה]`; prefixes and suffixes restored only – unmarked, 36, 58, 84; ETCSL `[X]` =
`[…]`); the modal prefixes as renderings §2 / §12.6.1 (ḫe₂- `אכן`, bara- `בַּל`, narrative na- affirmative `אכן`,
prohibitive na- in speech `אַל` – 132, 257; nuš- `הלוואי`); quotation levels (`'…'` inside the messenger's speech
56–69); (b) consistency – EA's messenger formulas (53–55 = EA 176–179, 186; 139, 249 `פונה:`; 128, 255, 264 `משיב/ה
לו:`), the running animals (46 = LC 274 exactly; 45, 47 = LC 273, 275 varied only where the Sumerian varies), and every
repeated passage generated from its first copy: the message 25–38 = the delivery 56–69 (69: *-am₃* for *-a*), the
answer 78–113 built from the same strings reversed (78 = 28 in the third person, 80 ≈ 30, 108 = 34 reversed, 109 = 33,
110–113 = 35–38), the sorcerer's speech 140–149 = 153–162 (155, 160 vary), the cow 172–184 = the goat 185–197 (197
*e₃*), the "house of silence" 198 ≈ 206 (*du₇* / *dug₄*), the five contests at the river (one frame, only the animals and
the refuge vary), the shepherds' complaint 220 = Saĝburu's sentence 265 (third → second person); collisions grepped in
every corpus (`שבה` "in which" → `אשר בה`, the `שוב` gate; `גדת` → `קצה` for *gu₂*; `בלבל` reserved → *suḫ₃*
`נשתבש`; `מלאכת` reserved → *nam-maš-maš* `מלחשות`; `צניף`, `נזר`, `סל`, `אווז`, `דוד`, `מנה` checked); (c) the
Hebrew read aloud (15: the vizier's name without inner quotation marks; 150 `ב… שלו`; the vocalized traps `אֵרֵשׁ`,
`אֲרוּרוּ`, `עֹפֶר`, `דּוּד`, `שַׁלְּחִינִי`, `לְבֵנָה`). `verify ES --strict`: 293 of 295 entries OK, **2 problems kept on
purpose** (open decisions 1–2: correct words blocked by gates); "same transliteration, different Hebrew" lists only
explained cases (25/56 quotation marks; 35/66/110 brackets). `check_bible_quotes.py`: 0 problems in the annotated file,
the intro and this file.

#### Key findings (ES)
- **The ancient mind.** The contest between two kings is a contest for a goddess's love: whoever sleeps in Inana's bed
  is king. En-suḫgir-ana's boast (25–38) compares, line by line, "he … / I …": Enmerkar dwells with her "inside a
  wall", he in the lapis house; Enmerkar lies on a flower bed, he in sweet sleep on the adorned bed; Enmerkar sees her
  "at night, in a dream", he exchanges words with her awake; Enmerkar fattens geese with barley (a farmer-king of the
  plain), he eats the geese and their eggs with his vassal rulers (a king of conquest). Enmerkar's answer (77–113)
  takes **the same strings and turns them**: he receives the message "like clay" – he strikes it with his hand and looks
  at it (77), the very words of the invention of writing in Enmerkar and the Lord of Aratta (EA 503, 539); the bed is
  Inana's own, its back an *ug*-lion, its front a *piriĝ*-lion that chase each other all night, so that "the day does not
  dawn"; Enlil gave him crown and sceptre, Ninurta held him on his lap "like the frame of a waterskin", Aruru gave him
  both breasts; the goddess "took counsel" with him (107) – he is the one she speaks with. Aratta's assembly answers
  with an old men's realism (128–132: "you started it; take a breath; do nothing until you know"), the king with a
  hero's pride (133: "let my city be a tell, I its potsherd"). The second half moves from kings to the humble: a refugee
  incantation-priest from Ḫamazu sells his craft to the court (135–169), but fights in the byre, not at the walls: at
  Ereš, Nisaba's city, he makes the cow and the goat speak "like a human" and charms their butter and milk "to the horns
  and to the back" (170–197). The pen becomes "a house of silence" (198, 206): no milk in the udder, the calf weeps, the
  churn lies "fasting", the cowherd drops his staff, the shepherd hangs up his crook, the milk-carrier stops singing –
  and the two herdsmen (named, brothers of one mother) sit in the dust at the eastern gate and lodge a complaint with Utu
  the judge (216–221). The answer is not a god but an old woman (*um-ma*) of Ereš: the contest at the river is an ordeal
  of five rounds, the predator she draws from the water seizes the prey he draws, and her verdict on him (250: "your
  sorcery – yes; your sense – where?") is the poem's proverb. Her sentence repeats the herdsmen's testimony in the second
  person (265 = 220), adds the gods' meals robbed (266–267: the midday, morning and evening tables of the temple), and
  ends "a crime is set; life I will not give you" (270); she throws him into the Euphrates, "the river of the gods" (225)
  – the river ordeal – and takes "the breath of life" from him (273). The defeated king concedes in the language of
  diplomacy: "the great lord – you; I – the one who follows you; I am not your rival from the sowing; the older brother –
  you" (276–280). The poem calls itself an *a-da-min₃*, "a contest", like the school debates, and praises Nisaba,
  goddess of writing (281–283): a school poem about the power of the word – the messenger's exact repetition, the
  assembly's counsel, the incantation, the clay.
- **The Bible.** No source relations; shared motifs, tagged at each line, with these **corrected rank-3 readings**
  (each a finding): ETCSL's "sorcerer" (*maš-maš* is the *mašmaššu*, an incantation priest: `מְלַחֵשׁ`; his craft
  *nam-maš-maš* `מְלַחֲשׁוּת` – no `כשף`, no `חַרְטֹם`, no `לְהָטִים`); "Your sin … cannot be forgiven" (268: *nam-tag-zu …
  nu-mu-e-tum₃* "your sin … you did not bring"; no word of forgiving – Num 14:20 [absent]); "established that it was a
  capital offence and I am not pardoning your life" (270: *šer₇-da i₃-ĝa₂-ĝa₂ zi nu-mu-ra-ab-šum₂-mu* "a crime is set;
  life I will not give you"; Exod 21:12 [absent]); "chosen" (277: *pad₃* "found", as EA 33 – Deut 7:6 [divergence]);
  "second to you" (278: *us₂-sa* "the one who follows/adjoins"); "holy" (*kug* `טהור` throughout); "my sister" (259:
  *nin* "lady"); "Wise Woman" (*um-ma* "the old woman" `הזקנה`; `אִשָּׁה חֲכָמָה` of 2 Sam 14:2, 20:16 stays in the
  apparatus); "altar"/"offering table" (266: *banšur* `שולחן`); "ruin mound" (133: *dul* = *du₆* `תל`). The motifs:
  the dream against face-to-face speech with the deity (31–32 ↔ Num 12:6–8, the closest contact of the poem); the yoke on
  the neck (25 ↔ Jer 27:8, Gen 27:40); vassal kings eating leftovers (38 ↔ Judg 1:7); the guarded royal bed and the lions
  of the throne (81–82 ↔ Song 3:7, 1 Kgs 10:19); the divine nurse of a king (95 ↔ Isa 60:16, 49:23); the speaking beast
  in a story about a hired curse-specialist from the east (174 ↔ Num 22:28, 34); the plague on cattle and sheep and the
  groaning beasts (198 ↔ Exod 9:3, Joel 1:18); the herdsman `בוֹקֵר` (207 ↔ Amos 7:14); *kal* "precious = rare" (219 ↔ 1 Sam
  3:1); the sorcerers' contest before a king (228 ↔ Exod 7:12 [divergence]: there rods thrown down become serpents and
  Aaron's swallows theirs; here spawn thrown into the river yields beasts and hers devour his, five times); the
  magicians' admission (248 ↔ Exod 8:15); the loser's plea "release me" (259 ↔ Exod 5:1 [divergence]); the god's portion
  of fat/milk robbed (268 ↔ 1 Sam 2:17, 3:14 [divergence]); the wise woman of a town who settles a war of men (227 ↔ 2
  Sam 20:16–22); throwing into the river (272 ↔ Exod 1:22, 15:4); the older brother and the younger who submits (279 ↔
  Gen 25:23, 27:29 [divergence]: there the elder serves); the mina (164: *ma-na* `מָנֶה` [cognate], 1 Kgs 10:17).
  The pre-set "look for" items that the text does not have: no rod turned into a beast, no "finger of god", no sin
  "not forgiven", no "chosen".

#### Open decisions (ES)
1. **94 Aruru** `אֲרוּרוּ` (★, renderings §12.1) trips the RESERVED_COMMON gate `ארור|ארר|אורר` (unanchored: the stripped
   `ארורו` contains `ארור`). The name is right; a licence `aruru|a-ru-ru` on that gate is needed (I did not bend the
   Hebrew).
2. **258 *šudu₃ … ša₄*** `ברכה לה בירך` (Gudea's formula; harmonization 2026-10-21: *šudu₃* = `בְּרָכָה`) is blocked:
   the `ברך|ברכ` gate is licensed by `šud₃|dub₃|karāb|ka-ra-ab`, and ETCSL spells *šudu₃*. A licence `šudu₃` is
   needed.
3. ***kur-gi₄{mušen}* "goose" = `אווז`** (33–37, 64–68, 108–112): EA 436 and LZ 220 use `אווז` (EA with `?`) for
   *u₅{mušen}*, whose identification is uncertain. Two source words in one Hebrew word: the coordinator may move *u₅*
   (e.g. `עוף־המים`? – but `עוף` is gated) or keep the split, noted. `בַּרְבֻּר` (1 Kgs 5:3, fattened fowl) stays in the
   apparatus.
4. ***suḫ₁₀* "crown" = `עטרה`** (89, 178, 191): `צָנִיף` is Gudea's *gur* (and Gilgameš's *parsīgu*), `נֵזֶר` is EA's *saĝ
   muš₃*, `כתר` is *aga* / *men*; `עטרה` is Etana's Akkadian *meānu* (OBM 7, 11) – a cross-language overlap to confirm. **Harmonization 2026-11-09:** *suḫ₁₀* = `נזר` (the creation corpus's rule, LC 2, 410, HB 29, BH MT.A33); EA 274 *saĝ muš₃* moved to `עטרת ארטה`.
5. ***nam-maš-maš* = `מְלַחֲשׁוּת`** (138, 250, 254), a coined abstract of `מְלַחֵשׁ` (`מְלָאכָה` is reserved; `כשף` is
   *kašāpu*'s family only).
6. ***i₃* (of the dairy) = `שמן`** (LC: *i₃* `שמן`, *i₃-nun* `חמאה`): in 175–197, 220, 265–268 it is clarified butter; kept
   `שמן` for one Hebrew per lemma, with the note.
7. ***dim₂-ma* = `תבונה`** (135–136, 248, 250; the Ur Lament 230); 248 *dim₂-ma suḫ₃* `תבונתו נשתבשה` (not `בלבל`,
   reserved; not the 1 Sam 21:14 idiom `שִׁנָּה טַעַם`, which is Akk. *šanê ṭēmi*, in the apparatus).
8. **Splits by sense, noted at their lines**: *dag* "roam" `שוטט` (45; EA *dag* "flee" `ברח`); *la₂* `הושיט` (95), `המעיט`
   (220), `תלה` (35, 149, 208); *ri* `הפנה` (219); *ĝiri₃* "path" `משעול` (209; *kaskal* `דרך`); *kud* `קטע` (267; *tar*
   `כרת`); *amar* `עגל` / `גוזל` / `עֹפֶר` (by animal, §12.6.1); *zi* `חיים` (261, 270) / `נשימת החיים` (273, with
   *nam-til₃*: `נשמה` avoided – Gen 2:7 in the apparatus).
9. **Uncertain words in italics**: 10 the two cows `*אוּר*`, `*סַחַר*`; 32, 63 `*בהקיץ*` (*ĝiri₃ babbar*); 46 `*דוהר*` (LC);
   51 `*יתד?*`; 71 `*הסד הלופת אותם*`; 87 `*אינו חולף*`; 131 `*תבנה*` / `*תיבנה*` (*du₃*; ETCSL "hold back (?)"); 149,
   162 `*תתלה*`; 166–167 `*מובחר*`; 184, 197 `*נמשך*` (*BU*); 246–247 `*אוּרְשׁוּבּ*`, `*אוּרְנִים*` (ETCSL "tiger",
   "...... lion"); 263 `*אפלח*` (*ka tar si-il*).
10. **80** *ḫu-mu-un-de₃-nu₂-en* (first/second person) – ETCSL reads "he"; rendered without a subject (`אכן שוכב עמה`),
    so that both readings stay open (Enmerkar quoting his rival's words of 30, or claiming them).
11. **17–21**: read as a list of epithets "X – he" (of the lord of Aratta, by position); ETCSL "he with the … lord"
    (a comparison of the two kings) has no *-da* in the line.
12. **126–127** *ur* `כלב` (EA's dog contest, EA 460: *ur-ĝu₁₀ ur-ra-ni*), against ETCSL's "warrior (?)".
13. **Ḫamazu** `חַמָזוּ` kept with the spelling *ḫa-ma-zu* (= EA 141 `חַמָזִי`), as renderings §12.1; noted at 135.

#### Proposals for the corpus renderings (ES)
Strings exactly as used (for a later Uruk text and the corpus renderings):
- **Formulas**: 53 `"אליך – מלכי – אליך שלחני;` (*za-e-še₃ lugal-ĝu₁₀ mu-e-ši-in-gi₄-gi₄*; EA's `אליך שלחני` kept); 54 `אדון
  ארטה, אֶנְסוּחְגִּירְאַנָּה – אליך שלחני."`; 54A–54D, 55 = EA 178–179, 186; *X mu-ni ḫe₂-en-na-nam* `X – שמו אכן היה` (15,
  214, 215); *X za₃-mi₂* `X – תהילה!` (283); *X Y a-da-min₃ dug₄-ga* `X ו־Y – תחרות שנאמרה;` (281).
- **The contest frame** (FORMULAS_CY candidates): *N-kam-ma-aš agargara id₂-da i-ni-in-šub-bu-uš* `שנית / שלישית / רביעית /
  חמישית – דגיגים – אל הנהר השליכו;`; *maš-maš-e X a-ta im-ta-an-e₃* `המלחש – X – מן המים הוציא;`; *um-ma saĝ-bur-ru Y a-ta
  im-ta-an-e₃* `הזקנה סַגְבּוּרוּ – Y – מן המים הוציאה;`; *Y-e X in-kar Z-še₃ ba-an-kur₉ / ur₃* `Y – את X – חטף; אל Z – נכנס /
  גרף.`
- **The dairy and the byre**: `"פרה / עז – שמנך – מי אוכל? חלבך – מי שותה?"`; `"פרה / עז – שמנך – אל קרני־זוהרך! חלבך – אל
  גבך!"`; 198 `אז – ברפת ובדיר – בית דממה נשלם; דבר־הכחדה נעשה.` (206 `"בית דממה" נאמר`); *tur₃* `רפת`, *amaš* `דיר`
  (LC), *ubur* `דד`, *ga* `חלב`, *ga-ar₃* `גבינה`, *gara₂* `שמנת`, *šakir₃* `מחבצה`, *unu₆* `אולם`, *banšur* `שולחן`,
  *kiĝ₂-nim* `ארוחת־הבוקר`, *kiĝ₂-sig* `סעודת הערב`, *an-bar₇* `צהריים`, *unud* `בוקר` [equivalent, Amos 7:14], *sipad*
  `רועה`, *kab-bar* `נער־הרועים`, *ga-il₂* `נושא־החלב`, *ešgiri₂* `מטה`, *šibir* `מקל־רועים`, *šag₄-sug₄* `ריקות בטן`,
  *šag₄-ka-tab* `צום`, *e₂ sig₉-ga* `בית דממה`, *niĝ₂ ḫa-lam-ma* `דבר־הכחדה`, *saḫar-tu₁₁* `ערמות העפר`.
- **Words**: *maš-maš* `מְלַחֵשׁ`, *nam-maš-maš* `מְלַחֲשׁוּת`, *um-ma* `הזקנה`, *dim₂-ma* `תבונה`, *suḫ₃* `נשתבש`, *kur-gi₄*
  `אווז` (open 3), *uz* `ברווז`, *nunuz* `ביצה`, *ĝir₃-lam* `סלסלה`, *utul₂* `קדרה`, *šen* `דּוּד` ★, *ensi₂* `מושל`,
  *šudul* `עול`, *e₂-ĝar₈* `קיר`, *ĝiš-nu₂* `מיטה` (EA), *ug* `לַיִשׁ` ★ / *piriĝ* `לביא`, *sar* `רדף`, *suḫ₁₀* `עטרה` (open
  4), *zi-gan* `הֶגֶה`, *rab₃* `סד`, *sur₂-du₃* `נֵץ`, *šeg₉-bar* `יחמור` (*šeg₉* `אַיִל־בָּר`), *ilar* `מקל־זריקה`,
  *nemur* `נָמֵר`, *ur-šub₅* / *ur-nim* `אוּרְשׁוּבּ` / `אוּרְנִים` (transliterated), *suḫur* `דג־סוּחוּר`, *agargara* `דגיגים`,
  *maš-da₃* `צבי` (*amar maš-da₃* `עֹפֶר־צבי`), *kar* `חטף`, *ur₃* `גרף`, *ma-na* `מָנֶה` [cognate], *nam-ra* `שלל`, *a-la*
  `צהלה`, *nir-ĝal₂* (food) `*מובחר*`, *ad-da* `אב`, *libir* `ישן`, *uš ki ĝar* `יסוד על הארץ שָׂם`, *igi-nim* / *sig*
  `רמה` / `שפלה`, *kur šim erin* `הר ארזי־הבושם`, *niĝ₂-gur₁₁* `רכוש`, *gid₂* (boats) `משך`, *ba-al* `חפר` (*id₂* `נהר`),
  *ĝiš tuku* `שמע`, *šu ba* `שִׁלַּח` (`שַׁלְּחִינִי`, as the netherworld corpus), *silim* `שלום`, *šudu₃ ša₄* `ברכה בירך`
  (open 2), *šu giri₁₇ ĝal₂* `השתחווה`, *nam-tag* `עָוֹן`, *šer₇-da* `חטא`, *niĝ₂-gig* `תועבה`, *kal* `יקר` (`הוקיר` "made
  rare"), *inim sag₃* `דבר היכה` (decide), *šaĝa* `אסיר`, *gu₂* (bank) `קצה`, *zi nam-til₃* `נשימת החיים`, *dirig* `גבר`,
  *a ri* `זרע` (`מעת הזריעה`), *gaba-ri* `יריב`, *šeš-gal* `האח הגדול`, *us₂-sa* `הדבק ב־`, *sa₂* `השתווה`, *ud da-ri₂-še₃*
  `לנצח`, *dub-saĝ* `מראשונה`, *šag₄ kuš₂* `לב ייגע` (deliberate), *a₂ aĝ₂* `פקודה`, *ka tar* `תפארת`, *ka tar si-il*
  `תפארת *פילח*`, *dag* (roam) `שוטט`, *im₂* `מרוצה`, *kušum tag* `*דהר*` (LC), *mur ša₄* `נהמה נהם`, *ul₄* `זריזות`,
  *u₃ dug₃ ku* `לשכב בשינה מתוקה`, *inim bal* `דברים החליף`, *ĝiri₃ babbar* `*בהקיץ*`, *ubur … la₂* `דד … הושיט`,
  *gi-rin* `פרחים` (EA), *u₂ za-gin₃* `עשב סַפִּיר`, *barag₂* `הוצע`.
- **Names**: `אֶנְסוּחְגִּירְאַנָּה`, `אַנְסִיגַּרִיָּה`, `נַמְאֶנַּתוּמָה`, `אוּר־גִּירִינוּנָּה`, `חַמָזוּ`, `סַגְבּוּרוּ`, `אֵרֵשׁ` ★,
  `מַשׁ־גּוּלָּה`, `אוּר־אֶדִינָּה`, `נִיסַבָּה`, `נִינְלִיל`, `אֲרוּרוּ` ★, `נִינוּרְתָּה`, `טִירַנָּה` (the rainbow), `פְּרָת`.
- **Tool**: two licences (open 1–2); FORMULAS_CY rows for the contest frame and the dairy lines if the coordinator wants
  them checked; *nuš-* `הלוואי` and *bara-* `בַּל` as in LC.

### Parallels index (ES)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | kul-aba₄{ki} iri{ki} an ki-da mu₂-a | כולבה – העיר אשר עם שמים וארץ צמחה | `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | divergence | A city "grown with heaven and earth", primeval, not built to reach heaven; no `מִגְדָּל`. |
| 3 | unug{ki}-ga mu-bi {d}tir-an-na-gin₇ | אורוך – שמה – כטירנה, (הקשת) | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן` (בראשית ט:יג) | equivalent | The (deified) rainbow as an image of the city's name; shared motif. |
| 13 | aratta{ki}-a tug₂-gin₇ ba-e-dul | את ארטה – כבגד – כיסה | `עֹטֶה-אוֹר כַּשַּׂלְמָה` (תהלים קד:ב) | equivalent | Radiance (*me-lem₄*) worn like a garment. |
| 22 | … a-da-min₃ na-e-de₃ | תחרות עושה | `וְאֵיךְ תְּתַחֲרֶה אֶת הַסּוּסִים` (ירמיהו יב:ה) | equivalent | "Contest" (*a-da-min₃*) is also the genre name of the school debates (281). |
| 25 | gu₂ ḫa-ma-an-ĝa₂-ĝa₂ {ĝiš}šudul₄ ḫa-ma-ab-il₂-e | צוואר ישׂים! עול לי יישא! | `וְאֵת אֲשֶׁר לֹא יִתֵּן אֶת צַוָּארוֹ בְּעֹל מֶלֶךְ בָּבֶל` (ירמיהו כז:ח); `וּפָרַקְתָּ עֻלּוֹ מֵעַל צַוָּארֶךָ` (בראשית כז:מ) | equivalent | Neck and yoke as the language of vassalage (= 56). |
| 29 | ĝiš-nu₂ girin-a-ka ḫu-mu-un-de₃-nu₂ | על מיטת־הפרחים – (הוא) אכן שוכב עמה | `אַף עַרְשֵׂנוּ רַעֲנָנָה` (שיר השירים א:טז) | equivalent | The lovers' green bed; the sacred-marriage bed of Inana; `ערש` not in the line (*ĝiš-nu₂* `מיטה`, EA). |
| 31 | e-ne {d}inana-da ĝi₆-a ma-mu₂-da igi ḫu-mu-ni-in-du₈ | בלילה, בחלום, אכן רואה | `בַּחֲלוֹם אֲדַבֶּר בּוֹ` (במדבר יב:ו); `פֶּה אֶל פֶּה אֲדַבֶּר בּוֹ` (במדבר יב:ח) | equivalent | Nearness to the deity measured as dream against speech while awake (31–32): the closest contact of the poem; a shared motif, not a source. |
| 33 | e-ne kur-gi₄{mušen} še ḫe₂-bi₂-ib₂-gu₇-e | לאווזים – שעורה אכן מאכיל | `וּבַרְבֻּרִים אֲבוּסִים` (מלכים א ה:ג) | equivalent | Fattened fowl for the king's table. |
| 38 | ensi₂ kur-ra-ke₄ gu₂ mu-un-ĝar-[re-eš-a] mu-da-an-gu₇-[u₃-ne] | מושלי ההר, אשר צוואר שָׂמוּ – עמי יאכלו | `שִׁבְעִים מְלָכִים בְּהֹנוֹת יְדֵיהֶם וְרַגְלֵיהֶם מְקֻצָּצִים הָיוּ מְלַקְּטִים תַּחַת שֻׁלְחָנִי` (שופטים א:ז) | equivalent | Subject kings eating the leftovers of the conqueror's table. |
| 40 | kiĝ₂-gi₄-a du-ni šeg₉-bar-ra-am₃ … | השליח – בלכתו – יחמור הוא | `וַעֲשָׂהאֵל קַל בְּרַגְלָיו כְּאַחַד הַצְּבָיִם אֲשֶׁר בַּשָּׂדֶה` (שמואל ב ב:יח) | equivalent | The swift runner as a deer; ETCSL's "like" and "flies" are not in the line. |
| 45 | dur₃ dili du-e {d}šakkan₂-gin₇ … i₃-dag-ge₄ | עַיִר הולך־לבדו – כשכן – בהררים משוטט | `פֶּרֶה לִמֻּד מִדְבָּר` (ירמיהו ב:כד) | equivalent | The solitary wild ass (= LC 273, varied). |
| 49 | ur-bar-ra sila₄ šu ti-a-gin₇ ul₄-ul₄-e im-ĝen | כזאב שלקח טלה – בזריזות הולך | `בִּנְיָמִין זְאֵב יִטְרָף` (בראשית מט:כז) | equivalent | The wolf as an image of a hero. |
| 53 | za-e-še₃ lugal-ĝu₁₀ mu-e-ši-in-gi₄-gi₄ | אליך – מלכי – אליך שלחני | `בִּנְךָ בֶן הֲדַד מֶלֶךְ אֲרָם שְׁלָחַנִי אֵלֶיךָ` (מלכים ב ח:ט) | equivalent | The messenger formula (EA §3); here no "your father". |
| 54A | lugal-zu dug₄-ga-ni nam-ĝu₁₀ taḫ-a-ni nam-ĝu₁₀ | מלכך – אמירתו, מה לי? תוספתו, מה לי? | `מַה לִּי וָלָךְ כִּי בָאתָ אֵלַי לְהִלָּחֵם בְּאַרְצִי` (שופטים יא:יב) | equivalent | EA's diplomatic question, copied. |
| 77 | [im]-gin₇ šu bi₂-in-ra im-gin₇ igi i-ni-in-bar | [כטיט] – יד בו היכה; כטיט – בו הביט | `וְהַמִּכְתָּב מִכְתַּב אֱלֹהִים הוּא חָרוּת עַל הַלֻּחֹת` (שמות לב:טז) | equivalent | The message handled like a clay tablet: the words of the invention of writing in EA 503, 539; `לוח`, `מכתב` not in the line. |
| 81 | ĝe₂₆-e ĝiš-nu₂ gi-rin {d}inana-ka u₂ za-gin₃ barag-ga-a-ba | על מיטת־הפרחים של אִינַנָּה, אשר עשב סַפִּיר מוצע בה | `הִנֵּה מִטָּתוֹ שֶׁלִּשְׁלֹמֹה שִׁשִּׁים גִּבֹּרִים סָבִיב לָהּ` (שיר השירים ג:ז) | equivalent | The guarded royal bed (lions, 82–86). |
| 82 | eĝer-bi-še₃ ug-am₃ saĝ-bi-še₃ piriĝ-am₃ | לאחוריה – לַיִשׁ; לראשה – לביא | `וּשְׁנַיִם אֲרָיוֹת עֹמְדִים אֵצֶל הַיָּדוֹת` (מלכים א י:יט) | equivalent | Lions flanking royal furniture. |
| 87 | ud nu-um-zal ĝi₆ [u₃-na] nu-ru-gu₂ | היום – אינו נוגה; הלילה … – *אינו חולף* | `עַד שֶׁיָּפוּחַ הַיּוֹם וְנָסוּ הַצְּלָלִים` (שיר השירים ב:יז) | equivalent | The lovers' night and the dawn that ends it. |
| 93 | ĝiš {kuš}ummud-da-gin₇ ur₂ mu-un-⸢tal₂⸣-[tal₂] | כמסגרת־העץ של נאד – חיק לי פרש | `שָׂאֵהוּ בְחֵיקֶךָ כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | equivalent | A god as the king's nurse. |
| 95 | ubur zid-da-ni ma-an-la₂ … | את דדה הימני – לי הושיטה | `וְשֹׁד מְלָכִים תִּינָקִי` (ישעיהו ס:טז); `וְשָׂרוֹתֵיהֶם מֵינִיקֹתַיִךְ` (ישעיהו מט:כג) | equivalent | The king suckled by a goddess (Aruru). |
| 118 | išib lu₂-maḫ gudug ĝiri₃-sig₁₀-ga … | את האִישִׁיבּ, את הַלּוּמַח, את הַגּוּדוּג, את השמשים | `וַיִּוָּעַץ הַמֶּלֶךְ רְחַבְעָם אֶת הַזְּקֵנִים` (מלכים א יב:ו) | equivalent | A king consulting his household before answering. |
| 130 | niĝ₂ gal-gal en-me-er-kar₂-ra kiĝ₂-gi₄-a-aš mu-un-gi₄ | דברים גדולים – לאנמרכר – בשליחות שלחת | `אַל יִתְהַלֵּל חֹגֵר כִּמְפַתֵּחַ` (מלכים א כ:יא) | equivalent | Rebuke of boasting by message before the fight. |
| 132 | zi gi₄-ba šag₄-zu niĝ₂ na-me na-an-tum₃ … | לבך אַל יביא דבר, עד אשר תדע | `וְלִבְּךָ אַל יְמַהֵר לְהוֹצִיא דָבָר` (קהלת ה:א) | equivalent | Elders' counsel: do not act from a hasty heart; ETCSL reads *na-* as affirmative. |
| 133 | iri-ĝu₁₀ dul ḫe₂-a ĝe₂₆-e šika-bi ḫe₂-me-en | עירי – תל תהא! אני – חרסה אהיה! | `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | equivalent | The city as a tell; *du₆* `תל` [cognate via *tīlu*] (laments). |
| 135 | maš-maš dim₂-ma-ni dumu ḫa-ma-zu-ke₄ | מְלַחֵשׁ, שתבונתו – (תבונת) בן חַמָזוּ | `וַיִּקְרָא אֶת כָּל חַרְטֻמֵּי מִצְרַיִם וְאֶת כָּל חֲכָמֶיהָ` (בראשית מא:ח) | equivalent | Incantation-priests at a court; ETCSL's "sorcerer" is the *mašmaššu*; `חַרְטֻמִּים`, `מְכַשְּׁפִים` stay out. |
| 143 | [ĝe₂₆-e id₂] unug{ki}-ga-ke₄ ga-am₃-ba-al | [אני – נהר] – את אוּרוּךְ אחפיר | `וַיְמָרְרוּ אֶת חַיֵּיהֶם בַּעֲבֹדָה קָשָׁה` (שמות א:יד) | equivalent | Forced earthwork by a subject city (= 156). |
| 146 | … ab-ta kur {ĝiš}erin-še₃ | מן הים ועד הר הארזים | `מֵהַמִּדְבָּר וְהַלְּבָנוֹן הַזֶּה וְעַד הַנָּהָר הַגָּדוֹל נְהַר פְּרָת` (יהושע א:ד) | equivalent | The limits of the known world (= 159). |
| 164 | 5 ma-na kug-sig₁₇ mu-na-ab-šum₂-mu | חמישה מָנִים זהב – לו נותן | `שְׁלֹשֶׁת מָנִים זָהָב יַעֲלֶה עַל הַמָּגֵן הָאֶחָת` (מלכים א י:יז) | cognate | *ma-na* (Akk. *manû*) = `מָנֶה`: a Sumerian word that reached Hebrew through Akkadian. |
| 170 | maš-maš engar numun saĝ-ĝa₂-ke₄ | המלחש – אִכָּר הזרע המובחר | — | cognate | *engar* > Akk. *ikkaru* > `אִכָּר` (§6.7). |
| 174 | ab₂-e inim bi₂-in-dug₄ lu₂-ulu₃-gin₇ inim mu-da-ab-bal-e | הפרה – דבר אמרה; כאדם – דברים עמו מחליפה | `וַיִּפְתַּח יְהוָה אֶת פִּי הָאָתוֹן; וַתֹּאמֶר לְבִלְעָם` (במדבר כב:כח) | equivalent | A beast speaking like a human, in a story of a hired specialist of the word from the east (= 187). |
| 182 | u₃-sumun₂ zid {d}nisaba dumu-saĝ {d}en-lil₂-la₂-ke₄ … | פרת־הבר הנאמנה, נִיסַבָּה, בכורת אנליל | `בְּנִי בְכֹרִי יִשְׂרָאֵל` (שמות ד:כב) | equivalent | "Firstborn" of a god as a title of rank and love (= 195). |
| 198 | ud-bi-a tur₃ amaš-a e₂ sig₉-ga ba-ab-du₇ … | אז – ברפת ובדיר – בית דממה נשלם; דבר־הכחדה נעשה | `הִנֵּה יַד יְהוָה הוֹיָה בְּמִקְנְךָ אֲשֶׁר בַּשָּׂדֶה` (שמות ט:ג); `מַה נֶּאֶנְחָה בְהֵמָה נָבֹכוּ עֶדְרֵי בָקָר` (יואל א:יח) | equivalent | A plague on cattle and sheep as a weapon against a king; the groaning beasts (= 206). |
| 199 | ubur ab₂-ka ga nu-un-ĝal₂ amar-e ud bi₂-⸢in⸣-šu₂ | בדד הפרה – חלב אין; לעגל – היום כוסה | `כִּי גַם אַיֶּלֶת בַּשָּׂדֶה יָלְדָה וְעָזוֹב` (ירמיהו יד:ה) | equivalent | A mother unable to feed her young (= 201). |
| 207 | unud(UNU₃)-de₃ ešgiri₂ šu-na bi₂-in-taka₄ igi-ni i₃-sag₃-ge | הבוקר – את המטה – מידו עזב; על פניו מכה | `כִּי בוֹקֵר אָנֹכִי וּבוֹלֵס שִׁקְמִים` (עמוס ז:יד) | equivalent | *unud* "cowherd" = `בוֹקֵר`; the gesture of grief (`סָפַקְתִּי עַל יָרֵךְ` (ירמיהו לא:יח)). |
| 212 | dumu tud-da ama dili-me-eš | בנים שנולדו לאם אחת – הם | `וַיְהִי הֶבֶל רֹעֵה צֹאן וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | divergence | Two brothers in the herding economy – here both herdsmen, brothers in grief, not rivals. |
| 217 | saḫar-tu₁₁-saḫar-tu₁₁-ba ba-an-dur₂-ru-ne-eš … | בערמות העפר – ישבו | `יֵשְׁבוּ לָאָרֶץ יִדְּמוּ זִקְנֵי בַת צִיּוֹן` (איכה ב:י); `וְהוּא יֹשֵׁב בְּתוֹךְ הָאֵפֶר` (איוב ב:ח) | equivalent | Sitting in the dust as mourning and supplication. |
| 219 | {e₂}tur₃-ra gara₂ ba-an-kal … | ברפת – את השמנת הוקיר | `וּדְבַר יְהוָה הָיָה יָקָר בַּיָּמִים הָהֵם` (שמואל א ג:א) | equivalent | *kal* and `יָקָר`: "precious" = "rare" in both languages. |
| 220 | tur₃ amaš niĝ₂-gig-bi bi₂-ak … | ברפת ובדיר – את תועבתם עשה | `מֹאזְנֵי מִרְמָה תּוֹעֲבַת יְהוָה` (משלי יא:א) | equivalent | *niĝ₂-gig*, the gods' "abomination" (= 265). |
| 227 | um-ma saĝ-bur-ru šu mu-un-na-⸢an⸣-[…] | הזקנה סַגְבּוּרוּ | `וַיִּקַּח מִשָּׁם אִשָּׁה חֲכָמָה` (שמואל ב יד:ב); `וַתִּקְרָא אִשָּׁה חֲכָמָה מִן הָעִיר` (שמואל ב כ:טז) | equivalent | The wise woman of a town who decides a war of men; ETCSL's "Wise Woman" is *um-ma* "old woman" (`זקנה`, gated). |
| 228 | 2-na-ne-ne agargara id₂-da i-ni-in-⸢šub⸣-[bu-uš] | שניהם – דגיגים – אל הנהר השליכו | `וַיַּשְׁלִיכוּ אִישׁ מַטֵּהוּ וַיִּהְיוּ לְתַנִּינִם; וַיִּבְלַע מַטֵּה אַהֲרֹן אֶת מַטֹּתָם` (שמות ז:יב) | divergence | A contest of specialists before a king: something thrown, beasts produced, the winner's devour the loser's. Here spawn thrown into the river, five rounds, predators (230–247) against prey; no rods, no serpents. |
| 231 | ḫu-ri₂-in{mušen}-e suḫur{ku₆} gal in-kar … | הנשר – את דג־הסוחור הגדול – חטף | `יָעֻפוּ כְּנֶשֶׁר חָשׁ לֶאֱכוֹל` (חבקוק א:ח) | equivalent | The eagle seizing prey. |
| 248 | maš-maš-e igi-ni ba-ku₁₀-ku₁₀ dim₂-ma-ni ba-suḫ₃ | המלחש – פניו חשכו; תבונתו נשתבשה | `וַיֹּאמְרוּ הַחַרְטֻמִּם אֶל פַּרְעֹה אֶצְבַּע אֱלֹהִים הִוא` (שמות ח:טו) | equivalent | The magician admits defeat; the 1 Sam 21:14 idiom `וַיְשַׁנּוֹ אֶת טַעְמוֹ` (שמואל א כא:יד) is Akk. *šanê ṭēmi*, not this *suḫ₃*. |
| 250 | maš-maš nam-maš-maš-zu ḫe₂-ĝal₂ dim₂-ma-zu me-a | מלחש – מְלַחֲשׁוּתְךָ – אכן יש; תבונתך – איה? | `אֵיךְ תֹּאמְרוּ אֶל פַּרְעֹה בֶּן חֲכָמִים אֲנִי` (ישעיהו יט:יא) | equivalent | Mockery of court experts whose wisdom failed. |
| 256 | nu-zu-a-ĝu₁₀-ne i-im-ĝen-ne-en | בלא דעתי – באתי | `חָטָאתִי כִּי לֹא יָדַעְתִּי` (במדבר כב:לד) | equivalent | The excuse "I did not know" (Balaam). |
| 259 | šu ba-mu-u₈ nin-ĝu₁₀ šu ba-mu-u₈ | שַׁלְּחִינִי, גבירתי – שַׁלְּחִינִי! | `שַׁלַּח אֶת עַמִּי` (שמות ה:א) | divergence | "Release" in a contest of magic; here the loser begs for himself. *šu ba* = Akk. *wuššuru* = `שִׁלַּח` (the netherworld corpus). |
| 260 | silim-ma-bi iri{ki}-ĝu₁₀-še₃ ga-ĝen | בשלום – אל עירי – אלכה | `וַיֹּאמֶר יִתְרוֹ לְמֹשֶׁה לֵךְ לְשָׁלוֹם` (שמות ד:יח) | equivalent | Going home "in peace" by leave of the one in power. |
| 266 | {ĝiš}banšur an-bar₇ {ĝiš}banšur kiĝ₂-[nim kiĝ₂]-sig mu-e-sud | את שולחן הצהריים, את שולחן [ארוחת־הבוקר וסעודת]־הערב – הרחקת | `אֶת הַכֶּבֶשׂ הָאֶחָד תַּעֲשֶׂה בַבֹּקֶר; וְאֵת הַכֶּבֶשׂ הַשֵּׁנִי תַּעֲשֶׂה בֵּין הָעַרְבָּיִם` (שמות כט:לט) | equivalent | The god's fixed daily meals; ETCSL's "offering-table" is *banšur* "table". |
| 268 | nam-tag-zu i₃ ga […] nu-mu-e-tum₃ | עוונך – שמן וחלב […] – לא הבאת | `סָלַחְתִּי כִּדְבָרֶךָ` (במדבר יד:כ) | absent | ETCSL's "cannot be forgiven": no word of forgiving in the line. |
| 268 | (the same) | (the same) | `כִּי נִאֲצוּ הָאֲנָשִׁים אֵת מִנְחַת יְהוָה` (שמואל א ב:יז); `אִם יִתְכַּפֵּר עֲוֹן בֵּית עֵלִי בְּזֶבַח וּבְמִנְחָה` (שמואל א ג:יד) | divergence | The god's portion (there fat, here butter and milk) robbed; a sin without atonement. |
| 270 | šer₇-da i₃-ĝa₂-ĝa₂ zi ⸢nu-mu⸣-ra-ab-šum₂-mu | חטא שָׂם; חיים – לא אתן לך | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | absent | ETCSL's "capital offence … not pardoning": no legal formula in the line. |
| 272 | šaĝa-a-ni gu₂ {id₂}buranun-na-[ka] i-ni-in-šub | את אסירה – על קצה הפְּרָת – השליכה | `כָּל הַבֵּן הַיִּלּוֹד הַיְאֹרָה תַּשְׁלִיכֻהוּ` (שמות א:כב); `מַרְכְּבֹת פַּרְעֹה וְחֵילוֹ יָרָה בַיָּם` (שמות טו:ד) | equivalent | Thrown into the river – the river ordeal; *šub* `השליך`, *id₂* `נהר` (gated). |
| 273 | zi nam-til₃-la ba-da-an-kar … | את נשימת החיים – ממנו חטפה | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | Life as breath; `נשמה` not in the line (*zi* "breath, life"). |
| 277 | {d}inana-ke₄ ur₂ kug-ga-ni-še₃ zid-de₃-eš mu-un-pad₃-de₃-en … | אִינַנָּה – אל חיקה הטהור – באמת מצאה אותך | `בְּךָ בָּחַר יְהוָה אֱלֹהֶיךָ לִהְיוֹת לוֹ לְעַם סְגֻלָּה` (דברים ז:ו) | divergence | ETCSL's "chosen" is *pad₃* "found"; `בחר` not in the line. |
| 278 | … en gal-bi za-e-me-en ĝe₂₆-e us₂-sa-zu-me-en | האדון הגדול – אתה; אני – הדבק בך – אני | `רַק הַכִּסֵּא אֶגְדַּל מִמֶּךָּ` (בראשית מא:מ) | equivalent | The second after the king; ETCSL's "second" is *us₂* "follow, adjoin". |
| 279 | a ru-a-ta gaba-ri-zu nu-me-en šeš-gal za-e-me-en | מעת הזריעה – יריבך אינני; האח הגדול – אתה | `וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג); `הֱוֵה גְבִיר לְאַחֶיךָ` (בראשית כז:כט) | divergence | Kings as brothers: the vassal is the younger brother; in Genesis the elder serves, here the younger submits to "the older brother". |
