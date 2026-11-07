# Project: Lugalbanda in the Mountain Cave (key LC)

Corpus: `../corpus.md` (the legends of kings; the Uruk cycle, renderings §12). Round 6 run 3 (2026-11-07).

## Scope
The whole poem, ETCSL 1.8.2.1: 509 (1–495 with 232A–B, 325A–B; segment B: B1–B7) entries.

## Base text
- ETCSL c.1.8.2.1, from the ETCSL web page (the OTA bulk zip was unreachable on 2026-11-07; converted with
  `../../tools/etcslhtml2md.py`, checked against the XML conversion of 1.8.2.3: identical lines except that the web
  page shows "…" for one lost sign where the XML has "X"): `../../sources/ETCSL/1.8.2.1--*/transliteration.md`;
  ETCSL's own lemmas per word: `lemmas.tsv` there.
- ORACC Q000367 lemma + morph.
- Rank 3: ETCSL's English (`translation.md` there). Not available: Wilcke 1969 (Lugalbandaepos), Vanstiphout 2003
  (Epics of Sumerian Kings), Berlin 1979, Black 1998, Mittermayer's later work (records:
  `../../sources/_records-only--Legends-of-kings/`).

## Files
annotated-1.rtl.md (1–263), annotated-2.rtl.md (264–499, B1–B7); `translation--intro.rtl.md`; `translation.rtl.md` (generated: `python3 -I ../kings_tools.py build LC`).

## Line numbering
ETCSL's composite labels; a second segment's lines carry the segment letter.

## Progress
(per part: drafted, three passes, verify)
- LC1 (1–263): drafted, three review passes, `verify LC` OK, quotes clean – 2026-11-07 (T-LC).

## Parts

### Part LC1 (1–263)
Translator T-LC, Round 6 run 3, 2026-11-07. `annotated-1.rtl.md`: 264 entries (1–263 with 232A, 232B; ETCSL has no
190). Drafted section by section from `kings_tools.py data LC 1 263` (ETCSL line, ETCSL lemmas, ORACC Q000367 lemma +
morph aligned by content), each section saved and verified at once. **Three review passes done**: (a) fidelity
against the transliteration (brackets: a broken root `[ ]`, lost signs `[… …]` by count, `[(…)]` for ETCSL's `(X)`;
half-brackets `⸢ ⸣` are read as preserved; every *X* `…`; ORACC's *bara-* in 26 and 73 read as *ba-ta-*); (b)
consistency with renderings §0–§12, the earlier corpora (GEN, the Bilgameš poems, Gudea, the laments, the law corpus)
and within the part (the four prayer copies, the tears formula, the refrain, 126 = 227, 124 ≈ 236, 179 ≈ 211 ≈ 232B,
178 = 210); collisions checked by grep in every corpus (`מרבץ` = *tur₃* in LH → *šurum* = `פֶּרֶשׁ` as in HB; `טָהֳרָה`
for *šu-luḫ* as Gudea); (c) the Hebrew read aloud (quotation levels, `על הארץ`, `הוּשַׂם`, `נמרח` instead of the
loaded `נמשח`). `verify LC`: OK for all 264 entries (part 2 not yet drafted); `check_bible_quotes.py`: 0 problems
(quotations merged so that every fragment is checked: the checker reads only the backtick group right before a
reference).

#### Key findings (LC1)
- **The ancient mind.** The poem is a document of the sick man abandoned: the brothers do everything right and with
  love – a bed "like a nest", food for the sick, drinks, oils, the hero's own weapons laid "by his head" – but what
  they prepare is the outfit of the dead: a table "for the pure place, the precious place" (94; the netherworld,
  *ki-sig₁₀* 39), weapons at the head (110–115; cf. Ezek 32:27), lament with beaten heart and wailing (137–139), and
  the promise to bring "our brother's corpse" home (132). His prayer (151–170) fears not death but the *wrong* death:
  where "no mother, no father, no acquaintance stands", where no one says "alas, my son / alas, my brother", where the
  neighbour woman does not weep – "like water poured out in a place of murder", eating bitter dust (the food of the
  dead in the netherworld), fallen like a throw-stick in an unknown steppe, with "a name of insult" among his brothers.
  The cure comes from the sky **in the order of the lights of one night**: the setting sun (Utu "takes his tears"
  and sends down "life in the heart"), the evening star (Inana, "the prostitute who goes out to the tavern", lays him
  to sleep "like the sleep of Utu"), the moon (Suen, judge who "loves justice, hates wrong", gives life and a foot
  that stands), and the rising sun again, whose hymn (240–263) is a hymn of the weak: the lonely traveller, the
  third of two, the prisoner, the poor, the liar, the debt slave, the old women warming themselves.
- **The Bible.** No source relations; striking shared motifs, each tagged: the four-fold prayer gesture "lifted his
  eyes to heaven" to sun, moon and star is exactly what Deut 4:19 forbids (`וּפֶן תִּשָּׂא עֵינֶיךָ הַשָּׁמַיְמָה` (דברים ד:יט))
  [divergence]; the prayer in the cave ↔ Ps 142 (`בִּהְיוֹתוֹ בַמְּעָרָה תְפִלָּה` (תהלים קמב:א); `וְאֵין-לִי מַכִּיר`
  (תהלים קמב:ה)) [equivalent]; the sick king weeping and the god who sees the tears ↔ Hezekiah (2 Kgs 20:1, 5); "alas, my brother" unsaid ↔ Jer 22:18; father and mother gone ↔ Ps 27:10; "loves justice, hates
  wrong" ↔ Ps 45:8 (*niĝ₂-si-sa₂* = *mīšaru* `מישרים`); the people "lie down … rise up" with the sun (*nu₂* `שכב`,
  *zi* `קם`, the corpus's fixed verbs) ↔ Deut 6:7; the sun as the poor man's garment ↔ the pledged cloak returned
  "before the sun sets" (Exod 22:25–26) [divergence]; "the third of those who go two" ↔ Eccl 4:9–12; sun and shield
  ↔ Ps 84:12; the eighth, youngest brother ↔ David (1 Sam 16:10–11; 17:12). **Corrected rank-3 readings** (each a
  finding): ETCSL's "holy" (*kug* = `טהור`) throughout; "righteous" (42, *zid-du* `נאמן`); "not yet free of his
  sickness" (147: plain *nu-*, no "yet" – `טרם` stays out); "let me be ill no longer" (*na-* is a prohibitive, `אַל
  אחלה!`); "you have let me come up" (153: no second person in the form); "praise" (262: *i-lu* is a song, here the
  ploughmen's); "rich old men" (251: *gu₂-tuku*); "woollen garment" (199: not in the text); "an arbour" (88:
  *niĝ₂-barag₂* is a cover). **One cognate**: *an-bar* = Akk. *parzillu* = `בַּרְזֶל` (113, Gen 4:22) – an iron
  dagger, i.e. meteoric iron, among the dead man's gear; *kaš* `שֵׁכָר`, *ḫurrum* (Akk. loan) ~ `חוֹר` noted.

#### Open decisions (LC1)
1. Narrative *na-* (20, 22, 23, 33, 34, 200): read as affirmative and rendered by the plain verb (no `אַל`, no
   `אכן`), as ETCSL; renderings §2 knows only the prohibitive *na-*. Proposed: a rule "narrative *na-* = plain verb,
   noted at the line".
2. Plural *ur-saĝ* in 62: now `לוחמים הם` (coordinator's ruling, run 1's rule; Gen 6:4); the singular stays `גיבור`.
3. *šu ti* in the tears formula = `לקח` (HA 34, the identical formula) against EA's *šu ti* `קיבל`: kept HA's (a split
   recorded at 171).
4. *amar* (202) = `עגל` (of cattle) against the corpus's *amar* `גוזל` (of birds): a split by animal.
5. *ed₃* "go up / down": `עלה` (147, 153), `ירד` / `הוריד` (161, 172) by direction – EA's practice; 161 `בַּל יֵרֵד`
   (ETCSL "perish") in italics.
6. *muš₃ … tum₂* (170, 196) = `כלה` – a guess for an obscure idiom.
7. *i-lu* (262) transliterated `שיר־האִילוּ` (EA 612 `אִילוּ־הלב`), not `נְהִי` (GEN, laments): here a work song.
8. *niĝ₂-si-sa₂* in 98 (the provisions) rendered `(הכול) במישרים` to keep the one word of 217–221; ETCSL reads
   "provisions". If the coordinator prefers sense, `ערוך כשורה` with a note.

#### Proposals for the corpus renderings (LC1)
Strings exactly as used; later copies (LC2 264–499, LZ, ES) should copy them where the Sumerian is the same.
- **The prayer formula** (148–150 = 180–182 = 212–214 = 237–239; only the god's name varies):
  `כאשר אל X – השמימה – עיניים אכן נשא,` / `כמו אל אביו מולידו – דמעות אליו מצא;` /
  `את ידיו הנאות – במערת ההר – אליו מרים:` (X = `אוּתוּ`, `אִינַנָּה`, `סוּאֵן`; the formula keeps `אביו`, `אליו` even
  for Inana).
- **The tears formula**: `X – את דמעותיו לקח;` (171; 197 `אִינַנָּה – את דמעותיו לקחה;`); 226 `סוּאֵן – את דמעותיו לקח,
  חיים לו נתן;` (= HA 34 without *kadra-gin₇*).
- **The refrain** *nam-ba-(an-)tur₅-tur₅-de₃(-en)* = `– אַל אחלה!` (151, 152, 154, 168, 169); the greeting *silim
  ga-ra-ab-dug₄* = `שלום אוֹמְרָה לך` (HA 22); `גיבור, בן נִינְגַּל` (152, 257, 263).
- **The cave and the hero:** *ḫur-ru-um kur-ra(-ka)* `(ב)מערת ההר`; *kug {d}lugal-ban₃-da* `לוגלבנדה הטהור` (117, 136,
  233; for 264, 283); *saĝ-ĝa₂-ni-še₃* `ליד ראשו`; 136 `את לוגלבנדה הטהור – במערת ההר – עזבו.`; 233 `ללוגלבנדה הטהור –
  במערת ההר – נתן.`
- **The light in the cave:** *muš₃-a-ni ḫur-ru-um kur-ra-ka ud mu-na-ĝa₂-ĝa₂* `מראהו – במערת ההר – אור לו שָׂם.` (179
  `מַרְאֶהָ`, 211; 232B with *me-lem₄* `זוהרו`); *me-lem₄-ma-ni kug {d}šara₂-gin₇* `זוהרה / זוהרו – כשַׁרָא הטהור –`.
- **The provisions** (98–99 = 279–280; 100 = 121 = 135 = 281): `בדליי־העור – (הכול) במישרים,` / `בשקי־העור – *(כל) דבר
  כמידתו* –` / `אחיו, רעיו –`.
- **The drinks** (104–105 = 377–378): `שֵׁכָר שחור, סובא מובחר, (שֵׁכָר) כוסמת לבן,` / `יין לשתייה, *גּוּמֶזֶה* – טוב הוא –`
  (378 without *-am₃*: `… – טוב –`). *kaš* `שֵׁכָר`, *kurun* `סובא מובחר` (= Akk. *kurunnu*, Gilgameš SB), *ziz₂* `כוסמת`,
  *ĝeštin* `יין`, *gu₂-me-ze₂* `גּוּמֶזֶה`, *dida* `שֵׁכָר־דִּידָה`.
- **The weapons** (110–113 → 353–354, 363–364): `גרזנו – מתכתו בדיל –` (*ḫazin* `גרזן`, *nagga* `בדיל`); `פגיון־חיקו –
  ברזל־*סוּג* הוא –` (*ĝiri₂* "dagger" `פגיון` as Gudea; *ur₂* `חיק`; *an-bar* `ברזל` [cognate via *parzillu*]);
  *dur₁₀-gag* `כַּשִּׁיל` (new; `גרזן` and `קרדום` are taken); *mitum* `המִיטוּם`.
- **126 = 227** `לרגלו – רגל הדובקת בארץ – הוסיף.`; **124 ≈ 236** `האל אשר מחצו – הצידה עמד;` (*ra* `מחץ`).
- **The levy** (24–29, = DB MT.H10–H15): `האדון – בעירו – קימה שָׂם;` `הכרוז – בארצות – בקרן קול השמיע;` `קימת אוּרוּךְ – מבול
  היא;` `קימת כולבה – שמים שענן מוּשָׂם בהם;`; 30 / 82 *muru₉ ki us₂* `כערפל לארץ דבק`.
- **Verbs:** *us₂* `דבק` (27, 30, 31, 126, 262); *la₂* `תלה` (109, 232, 234, 260); *taka₄* `עזב`; *tur₅* `חולי` / `חולה` / `חלה`;
  *te* `קרב`; *kur₉* / *sun₅* `נכנס` / `הכניס`; *zi* `קם` / `מרים`; *nu₂* `שכב`; *e₃* (sunrise) `יצא`; *ed₃* `עלה` / `ירד`;
  *tum₂* `הוביל`; *pad₃* `מצא`; *er₂ pad₃* `דמעות מצא`; *er₂ še₈* `דמעות בכה`; *ad gi₄* `נמלך`; *ḫal* `נמרח` (of oil);
  *sa₉* `למחצה עשה` (`חצה` stays *bal*'s); *šub* (intr.) `נפל`; *gu₃ de₂* `פנה`.
- **Nouns and epithets:** *niĝ₂-si-sa₂* `מישרים` (= *mīšaru*; Gudea B.xviii.10); *niĝ₂-erim₂* `עוולה`; *ki aĝ₂* `אהב`; *ḫul
  gig* `שנא`; *ki kug ki kal-kal* `המקום הטהור, המקום היקר` (the netherworld; 94, 129); *zi-šag₄-ĝal₂* `החיים־שבלב`
  (Gudea `חיים־בלב`); *u₃-sa₂* `שינה`; *ud-sakar* `סהר`; *si-un₃-na* `רום השמים`; *an-ur₂* `שורש השמים`; *gur₂₁* `מגן`;
  *udug sag₉* `רוּחַ־הַמָּגֵן הַנָּאָה`, *lamma sag₉* `אֵלַת־הַמָּגֵן הַנָּאָה`; *šul* `עלם`; *ĝuruš* `בחור`; *unken* `אספה`;
  *a-a tud-da* `אב מוליד`; *gu₅-li* `רֵעַ`, *dub₃-us₂-sa* `ידיד`; *šeš-gal* `האח הגדול`; *ušur* `שכנה`; *nam-ušur* `שכנות`;
  *nam-sumun* `שֵׂיבָה` (vocalized); *šurum* `פֶּרֶשׁ` (HB); *banšur* `שולחן`; *ummud* `נאד`; *a-ĝa₂-la₂* `שק־עור`;
  *maš-li-um* `דלי־עור`; *lal₃* `דבש` (date syrup); *i₃* `שמן`; *i₃-nun* `חמאה`; *ga-ar₃* `גבינה`; *tur₃* `רפת`, *amaš* `דיר`;
  *zu₂-lum* `תמרים`; *kid* `קליעה`; *gud₃* `קן`; *i-si-iš ĝar* `יללה שׂם`; *šag₄-ne-ša₄* `תחינה`; *a-nir* `אנחה`; *in* `חרפה`;
  *su-lum mar* `בוז מרח`; *ukur₃* `עני`; *kar-ke₄* `זונה`, *eš₂-dam* `פונדק`; *ešemen* `חבל־הקפיצה`; *ki-bal* `ארץ המרי`;
  *niĝir* `כרוז`; *zig₃* (levy) `קימה`; *ugula* / *nu-banda₃* / *šagina* `מפקח` / `ממונה` / `מצביא`; *di₄-di₄-la₂* `קטנים`;
  *immal₂* `פרת־בר`; *am* `ראם`; *maš-da₃* `צבי`; *taraḫ* `יעל`; *buru₄-dugud* `להקת־עורבים`; *apin* `מחרשה`; *sipad*
  `רועה`; *lu₂-lul* `שקרן`; *e₂ ur₅-ra* `בית־החוב`; *zulumḫi* `אדרת־צמר`; *ab-ba-ab-ba* `הזקנים`, *bur-šu-um* `זקנות`;
  *ud ul-le₂-a* `לימים רחוקים`; *in-di₃* `שביל`; *ḫa-šu-ur₂* `חַשׁוּר`; *asal* `צפצפה`; *u₃-luḫ* `נצר`; *i-lu* `שיר־האִילוּ`.
- **Particles:** *ša-* `הֲרֵי`; *bara-* `בַּל`; narrative *na-* = plain verb (open 1); *a* (cry) `הוֹי`; *i-gi₄-in-zu* `כאילו`;
  *tukum-bi* `אם`; *-da-* (ability) `יכול`.
- **Names:** `לוּגַלְבַּנְדָּה` (plain `לוגלבנדה`), `אוּרַשׁ`, `נִינְגַּל`, `נַנָּה`, `סוּאֵן` ★, `שַׁרָא` ★, `זַבּוּ` ★,
  `הַרְרֵי זוּבִּי` ★, `הררי גִּיג`, `אֵאַנָּה`; *kul-aba₄* first `כּוּלַבָּה`, then `כולבה`.
- **Tool:** a FORMULAS_CY row for each of the three prayer lines, the tears formula and the refrain; the `ברך` gate
  catches `ברכבו` (rewritten `רוכב`); `שבה` "in which" trips the `שוב` gate (rewritten `אשר בה`).

### Parallels index (LC1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | [ud ul an ki-ta ba₉-ra₂-a-ba] | [בימים רחוקים, כאשר שמים מארץ הוּפְרְדוּ,] | `וַיַּעַשׂ אֱלֹהִים אֶת הָרָקִיעַ וַיַּבְדֵּל בֵּין הַמַּיִם` (בראשית א:ז) | divergence | Heaven and earth "opened" apart, without an agent or a firmament (= GEN 8; `הִבְדִּיל` reserved). |
| 8 | {id₂}buranuna id₂ ḫe₂-ĝal₂-la unug-ga-ke₄ | הפרת, נהר השפע של אוּרוּךְ | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | cognate | The same name through Akk. *Purattu*. |
| 14 | me₃ ešemen {d}inana | הקרב, חבל־הקפיצה של אִינַנָּה | — | absent | War as a goddess's game has no biblical counterpart. |
| 25 | niĝir kur-kur-ra si gu₃ ba-ni-ra | הכרוז – בארצות – בקרן קול השמיע | `וַיִּתְקַע בַּשּׁוֹפָר בְּהַר אֶפְרָיִם` (שופטים ג:כז) | equivalent | The horn calls up the levy (= DB MT.H11). |
| 28 | unug zig₃-ga-bi a-ma-⟨ru⟩-kam | קימת אוּרוּךְ – מבול היא | `אֶת מֵי הַנָּהָר הָעֲצוּמִים וְהָרַבִּים אֶת מֶלֶךְ אַשּׁוּר` (ישעיהו ח:ז) | equivalent | An army as a flood (*a-ma-ru* `מבול`). |
| 30 | muru₉-gin₇ ki ḫe₂-us₂-sa-ba | כערפל – לארץ אכן דבקה | `כֶּעָנָן לְכַסּוֹת הָאָרֶץ` (יחזקאל לח:ט) | equivalent | An army as a cloud over the land. |
| 52 | en-bi ulu₃-a u₅-a-ni | אדונם – רוכב על רוח־הסערה | `וַיִּרְכַּב עַל-כְּרוּב וַיָּעֹף; וַיֵּדֶא עַל-כַּנְפֵי-רוּחַ` (תהלים יח:יא) | equivalent | Storm-rider imagery, said of a king. |
| 56 | ti zu₂ nim-gin₇ mu-na-ĝir₂-ĝir₂-re | חצים בעלי־שן – כברק – לו מבזיקים | `וְיָצָא כַבָּרָק חִצּוֹ` (זכריה ט:יד) | equivalent | Arrows like lightning. |
| 58 | ur ad₆ gu₇-a-gin₇ | ככלב האוכל פגר | `הַמֵּת לְיָרָבְעָם בָּעִיר יֹאכְלוּ הַכְּלָבִים` (מלכים א יד:יא) | equivalent | The corpse-eating dog. |
| 67 | ugula lu₂ 300 300-ta-a-me-eš | מפקחים על שלוש מאות איש | `שָׂרֵי אֲלָפִים שָׂרֵי מֵאוֹת שָׂרֵי חֲמִשִּׁים וְשָׂרֵי עֲשָׂרֹת` (שמות יח:כא) | equivalent | Officers by the number of men. |
| 71 | lugal-ban₃-da 8-kam-ma-ne-ne | לוּגַלְבַּנְדָּה – השמיני להם | `וַיַּעֲבֵר יִשַׁי שִׁבְעַת בָּנָיו לִפְנֵי שְׁמוּאֵל … עוֹד שָׁאַר הַקָּטָן` (שמואל א טז:י–יא); `וְלוֹ שְׁמֹנָה בָנִים` (שמואל א יז:יב) | equivalent | The eighth, youngest brother; a folk motif. |
| 76 | ki-bi-a tur₅-ra mu-na-te | שם – חולי אליו קרב | `בַּיָּמִים הָהֵם חָלָה חִזְקִיָּהוּ לָמוּת` (מלכים ב כ:א) | equivalent | Sudden sickness of a leader, then weeping prayer and healing. |
| 78 | maš-da₃ ĝiš-bur₂-ra dab₅-ba-gin₇ ka saḫar-ra bi₂-us₂ | כצבי האחוז בפח – פה לעפר הדביק | `הִנָּצֵל כִּצְבִי מִיָּד` (משלי ו:ה); `יִתֵּן בֶּעָפָר פִּיהוּ` (איכה ג:כט) | equivalent | The trapped gazelle; the mouth in the dust. |
| 94 | {ĝiš}banšur ki kug ki kal-kal-la-aš | שולחן – כנערך למקום הטהור, למקום היקר | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד) | divergence | Food for the dead: here the heart of the scene, there kept away from the tithe. |
| 95 | lal₃ zu₂-lum-ma-ta šar₂-ra | מעורב בדבש־תמרים | — | equivalent | *lal₃* = `דבש`, mostly fruit syrup in the Bible too. |
| 102 | ḫur-ru-um kur-ra-ka | במערת ההר | `מַשְׂכִּיל לְדָוִד; בִּהְיוֹתוֹ בַמְּעָרָה תְפִלָּה` (תהלים קמב:א) | equivalent | A prayer of a lonely man in a cave. |
| 110 | {urud}ḫa-zi-in-na-ni kug-bi nagga (+ 112 saĝ-ĝa₂-ni-še₃) | גרזנו – מתכתו בדיל … ליד ראשו | `וַיִּתְּנוּ אֶת חַרְבוֹתָם תַּחַת רָאשֵׁיהֶם` (יחזקאל לב:כז) | equivalent | Weapons laid at the head, as for a dead warrior. |
| 113 | ĝiri₂ … an-bar-sug₄-ga-am₃ | פגיון־חיקו – ברזל־*סוּג* הוא | `לֹטֵשׁ כָּל חֹרֵשׁ נְחֹשֶׁת וּבַרְזֶל` (בראשית ד:כב) | cognate | *an-bar* = Akk. *parzillu* = `בַּרְזֶל`; meteoric iron. |
| 115 | ti-ni-ta im-da-ab-sur-ru-ne | אל צלעו – לוחצים | — | absent | *ti* "rib / life" pun of Enki and Ninḫursaĝa absent here; not Gen 2:21. |
| 123 | {d}utu ĝiš-nu₂-a-gin₇ mu-zi-zi-ia | כאוּתוּ ממיטתו – קם | `וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ` (תהלים יט:ו) | equivalent | The sun rising from its bed. |
| 126 | ĝiri₃-ni ĝiri₃ ki us₂-sa ba-an-taḫ | לרגלו – רגל הדובקת בארץ – הוסיף | `וַיָּקֶם עַל-סֶלַע רַגְלַי` (תהלים מ:ג) | equivalent | = 227: the brothers' hope fulfilled in the same words. |
| 132 | ad₆ šeš-me šeg₁₂ kul-aba₄-še₃ ga-ba-ni-ib-kur₉ | את פגר אחינו – אל לבנת כולבה – נכניסה | `וַיִּשְׂאוּ אֹתוֹ בָנָיו אַרְצָה כְּנַעַן` (בראשית נ:יג) | equivalent | Bringing the dead home for burial. |
| 136 | … ḫur-ru-um kur-ra-ka mu-ni-ib-taka₄-a-aš | את לוגלבנדה הטהור – במערת ההר – עזבו | `כִּי-אָבִי וְאִמִּי עֲזָבוּנִי` (תהלים כז:י); `וַיַּשְׁלִכוּ אֹתוֹ הַבֹּרָה` (בראשית לז:כד) | divergence | Abandoned by brothers – with love and tears, not hatred. |
| 144 | maš₂-anše šurum-še₃ saĝ il₂-i-gin₇ | הבהמות – אל הפֶּרֶשׁ – ראש נושאות | `תִּזְרַח הַשֶּׁמֶשׁ יֵאָסֵפוּן; וְאֶל-מְעוֹנֹתָם יִרְבָּצוּן` (תהלים קד:כב) | divergence | Animals go home by the sun – at sunset here, at sunrise there. |
| 145 | a₂ ud te-en-na-ra | לעת צינת היום | `מִתְהַלֵּךְ בַּגָּן לְרוּחַ הַיּוֹם` (בראשית ג:ח) | equivalent | The cool of the evening. |
| 148 | {d}utu-ra an-še₃ igi ḫe₂-em-ši-ib-il₂ | כאשר אל אוּתוּ – השמימה – עיניים אכן נשא | `וּפֶן תִּשָּׂא עֵינֶיךָ הַשָּׁמַיְמָה וְרָאִיתָ אֶת הַשֶּׁמֶשׁ וְאֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים` (דברים ד:יט); `אֵלֶיךָ נָשָׂאתִי אֶת-עֵינַי הַיֹּשְׁבִי בַּשָּׁמָיִם` (תהלים קכג:א) | divergence | The gesture and the three lights that Deut 4:19 forbids are the whole prayer here (×4). |
| 150 | šu sag₉-sag₉-ga-ni … mu-na-ab-zi-zi-zi-i | את ידיו הנאות – במערת ההר – אליו מרים | `בְּנָשְׂאִי יָדַי אֶל-דְּבִיר קָדְשֶׁךָ` (תהלים כח:ב) | equivalent | Raised hands in prayer. |
| 155 | ki ama nu-gub-ba a-a nu-gub-ba | מקום שאם אינה עומדת בו, אב אינו עומד בו | `כִּי-אָבִי וְאִמִּי עֲזָבוּנִי; וַיהוָה יַאַסְפֵנִי` (תהלים כז:י) | equivalent | Without father and mother, only the god remains. |
| 156 | zu-a nu-gub-ba kal-la nu-gub-ba | מכר אינו עומד בו, יקיר אינו עומד בו | `וְאֵין-לִי מַכִּיר: אָבַד מָנוֹס מִמֶּנִּי` (תהלים קמב:ה) | equivalent | The psalm "in the cave": no acquaintance. |
| 157 | ama-ĝu₁₀ a dumu-ĝu₁₀ nu-um-me | אמי – 'הוֹי, בני!' – אינה אומרת | `לֹא יִסְפְּדוּ לוֹ הוֹי אָחִי וְהוֹי אָחוֹת` (ירמיהו כב:יח); `וַיִּסְפְּדוּ עָלָיו הוֹי אָחִי` (מלכים א יג:ל) | equivalent | The same cry of mourning; the fear of an unlamented death. |
| 161 | diĝir nam-ušur-ke₄ lu₂ ba-ra-an-ed₃-de₃ | אֵל־השכנות היה אומר: 'אדם – בַּל *יֵרֵד*!' | `וְחָשַׁב מַחֲשָׁבוֹת לְבִלְתִּי יִדַּח מִמֶּנּוּ נִדָּח` (שמואל ב יד:יד) | equivalent | A god who sees that no one is lost. |
| 165 | a-gin₇ ki-lul-la nam-ma-e | כמים – במקום־הרצח – *אַל אִשָּׁפֵךְ* | `כַּמַּיִם נִשְׁפַּכְתִּי` (תהלים כב:טו); `וְכַמַּיִם הַנִּגָּרִים אַרְצָה אֲשֶׁר לֹא יֵאָסֵפוּ` (שמואל ב יד:יד) | equivalent | Dying as spilled water. |
| 166 | še-gin₇ saḫar sis-a nam-ba-da-gu₇-e | כשעורה – עפר מר – אַל אוכל | `וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | equivalent | Dust as food: curse / the food of the dead. |
| 171 | {d}utu er₂-na šu ba-an-ši-in-ti | אוּתוּ – את דמעותיו לקח | `שָׁמַעְתִּי אֶת תְּפִלָּתֶךָ רָאִיתִי אֶת דִּמְעָתֶךָ; הִנְנִי רֹפֶא לָךְ` (מלכים ב כ:ה) | equivalent | The god sees the sick man's tears and heals (×3: 171, 197, 226). |
| 174 | kar-ke₄ eš₂-dam-še₃ ed₂-da | הזונה, היוצאת אל הפונדק | `וְהִנֵּה אִשָּׁה לִקְרָאתוֹ שִׁית זוֹנָה` (משלי ז:י); `לְקַטֵּר לִמְלֶכֶת הַשָּׁמַיִם` (ירמיהו מד:יז) | divergence | The evening star as harlot – a title of praise here; the "queen of heaven" is probably the same goddess. |
| 183 | {d}inana e₂-ĝu₁₀ ḫe₂-me-a | אִינַנָּה, לו היה זה ביתי! | `גַּם-צִפּוֹר מָצְאָה בַיִת וּדְרוֹר קֵן לָהּ` (תהלים פד:ד) | equivalent | Even small creatures have a home. |
| 185 | muš-gin₇ KI.KAL-ĝu₁₀ ḫe₂-me-[a] | כמו לנחש – לו היה זה *מקום־הטרשים* שלי | `נָחָשׁ שָׂרָף וְעַקְרָב וְצִמָּאוֹן` (דברים ח:טו) | equivalent | Snake and scorpion, dwellers of the waste. |
| 198 | {d}utu u₃-sa₂-gin₇ ba-an-ku | כשנת … של אוּתוּ – השכיבתו | `אֲנִי שָׁכַבְתִּי וָאִישָׁנָה; הֱקִיצוֹתִי כִּי יְהוָה יִסְמְכֵנִי` (תהלים ג:ו) | equivalent | Sleep under a god's care, and waking. |
| 199 | šag₄ ḫul₂-la … tug₂-gin₇ mu-un-dul-dul | בלב שמח – … – כבגד כיסתה אותו | `וַתְּאַזְּרֵנִי שִׂמְחָה` (תהלים ל:יב) | equivalent | Joy as a garment. |
| 202 | mul amar kug en-nu-uĝ₃-še₃ am₃-ši-ri | הכוכב, העגל הטהור – למשמר אליו הופנה | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד); `וְיָרֵחַ בַּלָּיְלָה` (תהלים קכא:ו) | divergence | The moon as guardian here; the psalm's God guards from it. |
| 206 | {d}utu e₃-a-ra | לאוּתוּ היוצא | `וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ` (תהלים יט:ו) | equivalent | Sunrise as "going out" (*e₃*). |
| 215 | lugal an su₃-ra₂ nu-mu-ra-teĝ₃-ĝe₂₆-da | מלך, שמים רחוקים, שאין לקרוב אליך | `כִּי הָאֱלֹהִים בַּשָּׁמַיִם וְאַתָּה עַל הָאָרֶץ` (קהלת ה:א) | equivalent | The distance of the heavenly god. |
| 217 | niĝ₂-si-sa₂-e ki aĝ₂ niĝ₂-erim₂-e ḫul gig | אוהב המישרים, שונא העוולה | `אָהַבְתָּ צֶּדֶק וַתִּשְׂנָא-רֶשַׁע` (תהלים מה:ח) | equivalent | The same pair "loves … hates …"; there of a king, here of the moon god. |
| 225 | muš ze₂ guru₅-a-gin₇ uš₁₁-zu ši-im-ri-e | כנחש *נוטף־המרה* – את ארסך הֲרֵי מטיל | `חֲמַת-לָמוֹ כִּדְמוּת חֲמַת-נָחָשׁ` (תהלים נח:ה) | divergence | Snake venom of the wicked there; of the god against wrong here. |
| 226 | nam-til₃ mu-na-šum₂ | חיים לו נתן | `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה) | equivalent | Life given by the god. |
| 228 | gud babbar an-ur₂-ta e₃-a | השור הלבן, היוצא משורש השמים | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ` (תהלים יט:ז) | equivalent | The sun going out from the edge of the sky. |
| 230 | {kuš}gur₂₁-ra ki us₂-sa | המגן הדבוק לארץ | `כִּי שֶׁמֶשׁ וּמָגֵן יְהוָה אֱלֹהִים` (תהלים פד:יב) | equivalent | Sun and shield together. |
| 234 | udug sag₉-ga-ni an-ta im-ta-la₂ | רוּחַ־הַמָּגֵן הַנָּאָה שלו – מן השמים נתלתה | `כִּי הֹלֵךְ לִפְנֵיכֶם יְהוָה וּמְאַסִּפְכֶם אֱלֹהֵי יִשְׂרָאֵל` (ישעיהו נב:יב); `כִּי מַלְאָכָיו יְצַוֶּה לָּךְ לִשְׁמָרְךָ בְּכָל דְּרָכֶיךָ` (תהלים צא:יא) | equivalent | Guardian spirits before and behind (`מַלְאָךְ` stays in the apparatus). |
| 240 | {d}utu sipad kalam-ma | אוּתוּ, רועה הארץ | `יְהוָה רֹעִי לֹא אֶחְסָר` (תהלים כג:א) | equivalent | The god as shepherd. |
| 241 | nu₂-a-zu-ne uĝ₃ ši-mu-e-da-nu₂ | בשכבך – העם הֲרֵי שוכב עמך | `וּבְשָׁכְבְּךָ וּבְקוּמֶךָ` (דברים ו:ז); `תִּזְרַח הַשֶּׁמֶשׁ יֵאָסֵפוּן … יֵצֵא אָדָם לְפָעֳלוֹ` (תהלים קד:כב–כג) | equivalent | Lying down and rising as the frame of the day (*nu₂* `שכב`, *zi* `קם`: the fixed verbs). |
| 244 | mušen-e gu nu-DU | לציפור – חבל לא נמתח | `הֲתִפֹּל צִפּוֹר עַל פַּח הָאָרֶץ וּמוֹקֵשׁ אֵין לָהּ` (עמוס ג:ה) | equivalent | Bird and trap: nothing happens without its cause. |
| 245 | lu₂ dili du-ur₂ šeš-tab-ba-ni-me-en | להולך לבדו – אח־חבר שלו אתה | `וְאִילוֹ הָאֶחָד שֶׁיִּפּוֹל וְאֵין שֵׁנִי לַהֲקִימוֹ` (קהלת ד:י) | equivalent | The lonely traveller. |
| 246 | lu₂ 2 du 3-kam-ma-bi za-e-me-en | להולכים שניים – השלישי שלהם אתה | `וְהַחוּט הַמְשֻׁלָּשׁ לֹא בִמְהֵרָה יִנָּתֵק` (קהלת ד:יב) | equivalent | One, two, three. |
| 249 | gaba ud-da-zu {tug₂}zulumḫi kug-gin₇ ša-mu₄-mu₄ | את חזה־אורך – כאדרת־צמר טהורה – הֲרֵי לובשים | `אִם חָבֹל תַּחְבֹּל שַׂלְמַת רֵעֶךָ עַד בֹּא הַשֶּׁמֶשׁ תְּשִׁיבֶנּוּ לוֹ` (שמות כב:כה); `שֶׁמֶשׁ צְדָקָה וּמַרְפֵּא בִּכְנָפֶיהָ` (מלאכי ג:כ) | divergence | The sun as the poor man's garment; there the sun is the deadline for returning it. |
| 253 | a-ar₃ ud ul-le₂-a-aš ši-im-dug₃-dug₃-ge-ne | בשבח – לימים רחוקים – הֲרֵי ממתיקות | `הַלְלוּהוּ שֶׁמֶשׁ וְיָרֵחַ` (תהלים קמח:ג); `זְקֵנִים עִם-נְעָרִים` (תהלים קמח:יב) | divergence | The old praise the sun; in the psalm sun and old men praise together. |
| 261 | apin-a-ni ki a₂-ba-ka am₃-mi-ni-in-gub-gub-bu | את מחרשתו – במקום, בעתה – מעמיד | `יֵצֵא אָדָם לְפָעֳלוֹ; וְלַעֲבֹדָתוֹ עֲדֵי-עָרֶב` (תהלים קד:כג) | equivalent | The farmer's day by the sun. |
| 262 | i-lu-zu … an-e mu-un-ši-ib-us₂ | שיר־האִילוּ שלך – … – אל השמים דבק | `וַתָּבוֹא תְפִלָּתָם לִמְעוֹן קָדְשׁוֹ לַשָּׁמָיִם` (דברי הימים ב ל:כז) | equivalent | Song / prayer reaching heaven. |
