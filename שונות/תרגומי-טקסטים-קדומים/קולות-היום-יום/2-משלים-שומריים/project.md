# Project 2: the Sumerian proverbs (ETCSL 6.1.01, 6.1.02 and 6.1.03, complete)

## Scope
- **Collection 1** (ETCSL 6.1.01), complete: 194 proverbs, 348 composite lines (segments A–G; the two "X X" variant lines C.A–C.B that ETCSL's converter drops are untranslatable).
- **Collection 2 (+6)** (6.1.02), complete since Round 6 (run 4, 2026-11-07): 306 composite lines (A1–A207, B1–B57; the "collection 6" segments C1–C15, D1–D27), proverbs 2.1–2.165 with 2.34A, 2.55A, 2.58A, 2.61A–B, and 2.c1–2.c15, 2.d1–2.d18. Round 2 drafted a selection of 51 proverbs (92 lines: the poor man, the scribe, the fox, lies, the donkey and the ox, the city of the lame, good and bad, marriage, the house, the palace); Round 6 added the other 214 lines (the destroyed place and fate 2.1–2.14, the rest of the poor man and the wanderer, the scribe and the singer, the fox, the donkey, the ox and the threshing floor, the lamentation priest *gala* 2.97–2.106, the dog 2.107–2.117, the field and the firewood, the house, the palace, and the birds and fish of "collection 6").
- **Collection 3** (6.1.03), complete since Round 6: 347 composite lines (A1–A328 with A12A, A16A; fragments B1–B8, C1–C5, D1–D4), proverbs 3.1–3.190 with 3.7A, 3.132A and 3.b1–3.d1. Round 2 drafted a selection of 32 proverbs (60 lines: the son whose god has turned, "I will go tomorrow", the heir, eating modestly, friendship, the open hand, wealth, the slave girl and the lady, the daughter-in-law, lies, the merchant, measure for measure, the king and the cupbearer, the garrulous, the mother's care, the tongue, the false witness, the aching heart, the personal god as shepherd, the good word, the "abominations" of the gods, fate, the uttered word, free and slave labour, justice); Round 6 added the other 287 lines.
- The three collections are now complete: 1,001 annotated lines (`annotated-c1-1/2/3`, `annotated-c2`, `annotated-c3`). The section headings (`## …`) of `annotated-c2` and `annotated-c3` were re-cut in Round 6 so that every proverb is under a thematic heading, in base order.
Alster 1997 (*Proverbs of Ancient Sumer*) and Gordon 1959 are © and not owned (records only).

## Base text
ETCSL 6.1.01–03 (`../../sources/ETCSL/6.1.0N--…/`, CC BY-NC-SA) with ORACC epsd2/literary Q000795–Q000797 (lemma + morph for every word, `../../sources/ORACC/epsd2-literary--Q00079N--…/`, CC0). ETCSL's English is rank 3.

## Line numbering
ETCSL composite lines with the segment letter (`A1` … `D138`, `E1`, `F1`, `G1`): ETCSL restarts the count in each segment. The proverb number (`1.9`, from the TEI `<lg n>`) is the unit: the clean translation prints it before the proverb's first line. Files: `annotated-c1-1.rtl.md` (A1–A82: 1.1–1.?), `annotated-c1-2.rtl.md` (segment B), `annotated-c1-3.rtl.md` (segments C–G), `annotated-c2.rtl.md` (all of 6.1.02: A, B and the "collection 6" segments C, D), `annotated-c3.rtl.md` (all of 6.1.03: A, B, C, D).

## Repeated lines
1.65–1.66 = 2.118–2.119 (the city without dogs, the city of the lame): identical Hebrew (2.118 adds `הוא` for the copula *-am₃*). 1.152–1.153 = 3.9 (A22): the formula *giri₁₇-zal-še₃ nu-il₂* = `לששון – לא נשא` (not *ezen nu-tuku*, as the pre-set renderings said: corrected, and checked by `kol_tools.py`). 1.44 (A57) = 1.103 (B69) opening `מי שאוכל ואוכל דבר גדול`; 1.125 (C5) ≈ 3.112 (A205) `מן הדג את העצמות ילקט לי / אלקט לך`; 1.58 = 1.59 opening; 1.83 ≈ 1.84 (the boat of truth / of wickedness). **Round 6 (complete collections 2–3):** 2.161 (B53) = 3.165 (A293) `אל הבית – אלכה! – יקר הוא.`; 3.1 (A1) ≈ Gilgameš and Aga 25 `לעמוד ולעמוד, לשבת ולשבת,`; 2.154 (B39) = Šuruppak 94; 3.15 (A31) = Šuruppak 135; 3.120 (A219) ends like 1.1 (A1) `חיים היא ילדה`; 3.10 (A24) = 3.11 (A26) `צאנו – אל היד לא ישוב.`; 3.40 (A89) = 3.95 (A179) `ובטרוניה רטנה`; 2.28 (A46) ≈ 2.34A (A60) `הנדידה – לעוני זרוע הניחה`; 2.35 is the same couplet twice, in the main dialect (A61–A62) and in Emesal (A63–A64), with identical Hebrew; 3.31 (A66, restored) = 3.35 (A78) `נַנִּי – את זקנתו הוקיר`; 3.104 (A192) opens like 1.187 (D94) `אישי –`; the formula *niĝ₂-gig DN-kam* `תועבת DN הוא` (3.8 Utu, 3.14 the plough, 3.118 and 3.170 Suen, 3.168 the necromancer, 3.169 one's god, 3.171 Inana, 3.175 Ninurta), without a possessor `תועבה היא` (3.161).

## Open decisions
1. *niĝ₂-gig DN* = `תּוֹעֲבַת DN` (1.23, 3.118, 3.170, 3.171, 3.175): the lament corpus gives `תּוֹעֵבָה` to *an-zil* – two Sumerian taboo words, one Hebrew word (corpus renderings §3.2). **Settled 2026-10-21 (the lead's harmonization): both `תּוֹעֵבָה`, kept.**
2. *gu₂* "neck" = `צַוָּאר` (aligned with runs 5–6), although project 1 gives `צוואר` to Akk. *ṣawāru*; the idiom *gu₂ šub* "neglect" is kept literal (`השליך צוואר`, 1.21).
3. *mu-ud-na* "spouse" = `בֶּן־זוּג` / `בַּת־זוּג` (C5, C13, B81), against the pre-set `בַּעַל`, which *dam* needs (C3 `בעלי` beside C5 `בן־זוגי`).
4. *il₂* "lift, carry, support" = `נָשָׂא` throughout, also in *dam nu-il₂* (1.153, 3.9), where Hebrew `נשא אשה` "marry" is a possible but not certain reading (ETCSL "support").
5. *sig₁₀* "put" by sense: `הונח` (1.38, 1.159), `שולם` (1.28, a purchase "put down"), `נבדק` (1.196, "put to the test"), `כבוש` (1.96).
6. *dirig* = `עוֹלֶה עַל` in comparisons (1.57, 1.154, 1.193, 2.60), but "float downstream" in 1.83–1.84 (`שטה במורד`) and "overflow" in 1.96, 1.101.
7. *zeb* "sweet, pleasant" = `עָרֵב` (1.126, 1.190), keeping `טוֹב` for *dug₃* and `מָתוֹק` for *ku₇* (5.5.1); *zil₂* = `נָעִים`; *sag₉* = `נָאֶה`; *ḫi-li* = `חֵן` (1.197; changed at the letters from `עֲגָבִים`, because 5.5.1 uses it of the mother).
8. *buru₅* = `דְּרוֹר` (1.18); *ḫu-ru-um* = `נִבְעָר` (3.103; ETCSL "fool"; `כְּסִיל` stays for *lil₂*); *gi₄-in* = `שִׁפְחָה`, *geme₂* = `אָמָה` ★.
9. **Settled 2026-10-21 (the lead's cross-corpus harmonization, `../renderings.md` §9):** *ra-gaba* = `צִיר` (always vocalized; [equivalent] ↔ Prov 13:17, 25:13), was `רוכב (שליח)` (2.72, A129); *guru₇* = `כְּרִי` [cognate via *karû*], was `אסם` (1.146, D14); *en₃-du* = `זִמְרָה`, number kept (`זִמְרָתָהּ … בּוֹחֲנָהּ`, was `זמירותיה הן בוחניה`, 1.70, B19); *šembi* = `פּוּךְ` (always vocalized), was `כחל` (1.150, D22); *šudu₃* = `בְּרָכָה` (B64) as before.

## Progress
Drafted by the run-7 coordinator acting as the translator (see `../handoff--round2-run7.md` §6), with `kol_tools.py verify` and `check_bible_quotes.py` clean after each file:
- 2026-10-21: Collection 1 segment A (82 lines, `annotated-c1-1.rtl.md`), segment B (98, `annotated-c1-2`), segments C–G (168, `annotated-c1-3`); Collection 2 selection (92, `annotated-c2`); Collection 3 selection (60, `annotated-c3`). All 500 lines; `translation.rtl.md` built.

### Review passes (2026-10-21)
1. **Fidelity and Hebrew**: a read-through of the `>` lines of all five files beside the transliteration; fixed `לא יָכְלָה` (1.195, unvocalized it read "will perish"), `ברעב היינו מתים` (the gate `יין` caught `היינו`), `שבו` "in it" (caught by the `שוב` gate: rephrased `אשר בו`), `שמן` for *u₅* (1.150: `*משחה*`), and several notes that had been written with a bare unchecked quotation (all removed or replaced by printed verses).
2. **Consistency** (by script): the key-lemma check over 60 Sumerian lemmas (*ninda* `לחם`, *ukur₃* `עני`, *dug₃* `טוב`, *gi₄* / *gur* `שוב`, *niĝ₂-gig* `תועבה`, *kal* `יקר`, *sag₉* `נאה`, *gu₂* `צוואר`, *nam* `גורל` …): the only misses were suffixed forms and the sense-renderings listed in the open decisions; `verify PROV` (gates, traps, the two formulas, identical lines).
3. **Echo control and quotations**: `check_bible_quotes.py` on all files (0 problems); ETCSL's "righteousness", "fool", "just man", "abomination" checked against the Sumerian (`נְכוֹנָה`, `נִבְעָר`, `אִישׁ אֱמֶת`, `תּוֹעֵבָה` tagged); the formula of 1.152–1.153 corrected.

## Key findings (project 2)
- **"Make your foot rare in your friend's house"**: 1.8 *e₂ dub₃-sa-na-ka lu₂ ba-ni-ib-kal-le* `בבית ידידו – האם יוקר אדם?` ↔ `הֹקַר רַגְלְךָ מִבֵּית רֵעֶךָ` (משלי כה:יז) – the same verb (*kal* "rare, precious" = `יקר`), the same house.
- **"A stranger will eat it"**: 1.9 *lu₂-kur₂-ra ib₂-gu₇* `איש נכרי יאכל` ↔ `כִּי אִישׁ נָכְרִי יֹאכְלֶנּוּ` (קהלת ו:ב).
- **Wealth with wings**: 1.18 `הרכוש – דרור עף ועף, מקום מושב לא ימצא` ↔ משלי כג:ה; and the sparrow that does find a house (תהלים פד:ד).
- **The sluggard's winter**: 2.20 `בחורף את השדה לא זרע, ובעת הקציר …` ↔ `מֵחֹרֶף עָצֵל לֹא-יַחֲרֹשׁ` (משלי כ:ד).
- **The poor man's word**: 2.27 `דבר העני – לא התקבל` ↔ `וּדְבָרָיו אֵינָם נִשְׁמָעִים` (קהלת ט:טז); 1.56 `"שם רע" – שמו` ↔ `שֵׁם רָע` (דברים כב:יד).
- **The personal god as shepherd**: 3.134 `האל של בן האדם – רועה המחפש עשב` ↔ `יְהוָה רֹעִי … בִּנְאוֹת דֶּשֶׁא` (תהלים כג).
- **The false witness as an "abomination"**: 3.118 `תועבת סואן הוא` ↔ the `עֵד שָׁקֶר` among the seven `תּוֹעֲבַות` (משלי ו:טז–יט); the *niĝ₂-gig* of three gods (Suen, Inana, Ninurta) against the one `תּוֹעֲבַת יְהוָה`.
- **One fate for all**: 3.176 `כאיש אמת דבר, כרשע דבר` ↔ `מִקְרֶה אֶחָד לַצַּדִּיק וְלָרָשָׁע` (קהלת ט:ב).
- **Family law in proverbs**: the girl chooses (1.148 ↔ בראשית כד:נז); "having children is divine" (1.160 ↔ בראשית ל:ב); the mother of eight (2.141 ↔ `וְרַבַּת בָּנִים אֻמְלָלָה`, שמואל א ב:ה); the free man worth two slave women (3.183 ↔ דברים טו:יח, reversed); the daughter-in-law (3.44 ↔ מיכה ז:ו); "raise the horn" (1.109 ↔ תהלים עה:ה).
- **The ancient mind**: the school (the scribe who knows no Sumerian, the hungry pupil, the "translations"), the fox's boasting, bread as the measure of life, the curse that breeds curses, the heart that no one can find (3.127 ↔ משלי יד:י), a mother cooling the soup with her mouth.

## Part P2–P3: completing collections 2 and 3 (Round 6, run 4, 2026-11-07)

Translator: a Round 6 run-4 sub-agent (range A), working from `reports/round-6/run-4--translator-brief.md`. 214 new entries in `annotated-c2.rtl.md` and 287 in `annotated-c3.rtl.md`, interleaved in base order with the Round 2 selection; both headers rewritten for the complete collections; the `## ` headings re-cut (15 in collection 2, 18 in collection 3: by theme, in base order, a heading at least every ~25–30 entries).

### Progress
- Drafted in sections of 29–61 entries, each merged into the file and checked (`kol_tools.py verify P2 P3`, `check_bible_quotes.py`) as soon as it was drafted: collection 2 in 5 sections (A1–A29; A37–A99; A101–A174; A175–B24; B28–D27), collection 3 in 5 (A1–A79; A80–A143; A144–A203; A206–A275; A276–D4). Unvocalized, plene from the first line (checked on the first section: only names, ambiguous forms and ★ words carry niqqud).
- **Review 1 (fidelity):** every new `>` line re-read beside its transliteration; negations, *ḫe₂-* / *na-* / *bara-* prefixes and copulas checked against ORACC; brackets only where the root is broken. Fixed: 3.104 (A193) a stray `★` in the line; 3.18 (A39) Hebrew order.
- **Review 2 (consistency):** `kol_tools.py verify P2 P3 --strict` (gates, traps, formulas, coverage) – clean except the `translation.rtl.md` mismatch (the coordinator rebuilds it); `tools/sumerian_rel.py … --self` over both files – every internal repeat and every repeat of collection 1, Šuruppak and Gilgameš and Aga copied (list under "Repeated lines"); key words looked up with `kol_tools.py lookup` before fixing (*nam-tar*, *ušur*, *ĝarza*, *ḫa-lam*, *ki-gul-la*, *du-lum*, *za-pa-aĝ₂*, *um-mi-a*, *gug*, *kindagal*, *tukur₂*, *umuš*, *ĝidru*, *gala*, *me-te*, *engur*, *a-nir*, *eš₂-dam*, *peš₂*, *dar*, *mušen-du₃*, *banšur*, *kur*, *abula*, *du₁₄*).
- **Review 3 (Hebrew aloud and echo control):** the `>` lines read aloud; `check_bible_quotes.py` on both files, this file and `renderings.md` – 0 problems (every verse printed before quoting; three remembered quotations were corrected by the check: Prov 26:27, 14:13, Ps 23:5).
- **Round 2 entries corrected:** 2.69 (A120) `בואי!` → `לְכִי!` and (A125) `בואי איתי` → `תלכי איתי`: *ĝen* in the imperative is `לכה/לכי` by the corpus renderings (§3.1, §5), and `בוא` is reserved for *ku₄*; A125's verb is lemmatized *ma* by ORACC, which the gate does not license for `לכי`, hence `תלכי` (open decision 13).

### Parallels index (P2)
| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| A16 (2.5) | *ud nam-tar gig-ga-ka ba-tu-ud-de₃-en* | `ביום של גורל מר – נולדתי.` | `יֹאבַד יוֹם אִוָּלֶד בּוֹ` (איוב ג:ג) | [equivalent] | The ill-fated birthday; the proverb states it, Job curses it. |
| A79 (2.46) | *{na₄}za-gin₃* | `סַפִּיר` | `לִבְנַת הַסַּפִּיר` (שמות כד:י) | [equivalent] | The pierced lapis bead = the pupil who has been tested (with 2.45 carnelian `אֹדֶם`). |
| A120 (2.69) | *ĝa₂-nu* (imperative of *ĝen*) | `לְכִי!` | `לְכָה דוֹדִי נֵצֵא הַשָּׂדֶה` (שיר השירים ז:יב) | [equivalent] | Form only: the fox calls his wife out to conquer Unug (corrected from `בואי`). |
| A127 (2.70) | *kug-zu ka₅-a* | `חכם הוא השועל!` | – | [divergence] | *kug-zu* licenses `חכם`: here wisdom is the fox's cunning. |
| A137 (2.77) | *anše ki-nu₂ ni₂-ba-a gu₇-gu₇* | `חמור – את משכבו שלו – אוכל ואוכל.` | – | [equivalent] | *ki-nu₂* = *mayyālu* `מִשְׁכָּב` (gate licensed). |
| A139 (2.79) | *naĝa* | `רחיצה בבורית` | `וְתַרְבִּי לָךְ בֹּרִית` (ירמיהו ב:כב) | [equivalent] | The alkali plant for washing. |
| A152 (2.90) | *gud-de₃ saḫar ub-ak igi ni₂-ba zid₂-am₃* | `בעיניו שלו קמח הוא` | `כֹּרֶה-שַּׁחַת בָּהּ יִפּוֹל` (משלי כו:כז) | [equivalent] | The harm that returns to its maker. |
| A157 (2.94) | *am-da kar-ra-ĝu₁₀-ne immal₂-e gaba ba-an-ri-en* | `כשנמלטתי מן הראם – פרת־הבר התייצבה מולי.` | `כַּאֲשֶׁר יָנוּס אִישׁ מִפְּנֵי הָאֲרִי וּפְגָעוֹ הַדֹּב` (עמוס ה:יט) | [equivalent] | The same pattern of escape into a second danger; in Sumerian in the first person, bull and cow. |
| A193 (2.115) | *ur ni₂-bi-še₃ kug-zu-a* | `הכלב – בעיני עצמו חכם` | `אַל תְּהִי חָכָם בְּעֵינֶיךָ` (משלי ג:ז) | [equivalent] | Wise in one's own eyes; *kug-zu* licenses `חכם`. |
| B1 (2.131) | *a-šag₄ na-[ab-daĝal-e]* | `את השדה – אל [ירחיב]!` | `הוֹי מַגִּיעֵי בַיִת בְּבַיִת שָׂדֶה בְשָׂדֶה יַקְרִיבוּ` (ישעיהו ה:ח) | [divergence] | Practical advice (do not take more than you can work) against the prophet's land-grabbers. |
| C13 (2.c13) | *ir₇-saĝ{mušen} gu₃ de₂-de₂ {ĝiš}kiri₆ me-te-bi* | `ציפור האִירְסַג – השמעת קולה – עֲדִי הגן היא.` | `וְקוֹל הַתּוֹר נִשְׁמַע בְּאַרְצֵנוּ` (שיר השירים ב:יב) | [equivalent] | The bird's voice as the ornament of the garden; *kiri₆* licenses `גן`; `יונה` (reserved for *tu-gur₄*) not used. |
| D24 (2.d15) | *šir₃* | `בשיר` | – | [absent] | `שיר` only here, where *šir₃* stands. |

### Parallels index (P3)
| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| A12A (3.7) | *niĝ₂-gur₁₁ lil₂-še₃ ba-an-te* | `הרכוש – אל הרוח קרב;` | `וּמַה יִּתְרוֹן לוֹ שֶׁיַּעֲמֹל לָרוּחַ` (קהלת ה:טו) | [equivalent] | Wealth gone to the wind; *lil₂* "wind, phantom" (not *lil₂* "fool" `כסיל`). |
| A20 (3.8) | *niĝ₂-gig {d}utu-kam* | `תועבת אוּתוּ הוא.` | `מֹאזְנֵי מִרְמָה תּוֹעֲבַת יְהוָה` (משלי יא:א) | [equivalent] / [divergence] | The formula; Utu's taboos are unwashed hands, spittle, sneezing and kissing in the midday sun – purity and manners, not morality. |
| A24 (3.10) | *udu-ni šu-a li-bi₂-in-gi₄* | `צאנו – אל היד לא ישוב.` | `וּכְצֹאן וְאֵין מְקַבֵּץ` (ישעיהו יג:יד) | [equivalent] | The flock without its shepherd. |
| A39 (3.18) | *eme sig gu₇-e* | `אכילת קֻרְצֵי (לשון)` | `וַאֲכַלוּ קַרְצֵיהוֹן דִּי יְהוּדָיֵא` (דניאל ג:ח) | [cognate via *karṣī akālu*] | The Sumerian idiom "to eat the slander" behind the Akkadian calque that reached Daniel's Aramaic. |
| A42 (3.20) | *su nam-lu₂-ulu₃-ka a gig i₃-ĝal₂* | `בבשר האנושות – בכי מר יש.` | `גַּם-בִּשְׂחֹק יִכְאַב-לֵב` (משלי יד:יג) | [equivalent] | Sorrow inborn in human flesh. |
| A66–A72 (3.31) | *na-an-ni … kur-ra ba-ra-an-de₆* | `נַנִּי … אל הארץ הובל.` | `הִגְדַּלְתִּי מַעֲשָׂי: בָּנִיתִי לִי בָּתִּים` (קהלת ב:ד) | [equivalent] | The builder-king who built and conquered and went down to the netherworld. |
| A125 (3.63) | *saĝ gu₂-ni-še₃ ḫe₂-bi₂-in-ed₃-de₃* (with A124 *gi duru₅-gin₇*) | `ראשו – אל צווארו – יֵרֵד!` | `הֲלָכֹף כְּאַגְמֹן רֹאשׁוֹ` (ישעיהו נח:ה) | [equivalent] | The head bowed like a wet reed: in Sumer a curse on the arrogant, in Isaiah the hypocrite's fast. |
| A128 (3.65) | *dam-gar₃-ra kug ta ba-an-tur* | `של התגר – הכסף, כמה הוקטן!` | `לְהַקְטִין אֵיפָה וּלְהַגְדִּיל שֶׁקֶל` (עמוס ח:ה) | [equivalent] | The merchant's short measure. |
| A169 (3.88) | *{id₂}idigna* | `החִדֶּקֶל` | `וְשֵׁם הַנָּהָר הַשְּׁלִישִׁי חִדֶּקֶל` (בראשית ב:יד) | [cognate] | The name. |
| A198 (3.107) | *niĝ₂ nu-kur₂-ra-am₃* | `דבר שאינו משתנה הוא.` | `אֵין כָּל חָדָשׁ תַּחַת הַשָּׁמֶשׁ` (קהלת א:ט) | [equivalent] | In thought, not in words. |
| A218 (3.119) | *ka ĝal₂ taka₄-a nim ba-an-ku₄-ku₄* | `אל פה פתוח שהושאר (כך) – זבוב נכנס ונכנס.` | `שֹׁמֵר פִּיו וּלְשׁוֹנוֹ    שֹׁמֵר מִצָּרוֹת נַפְשׁוֹ` (משלי כא:כג) | [equivalent] | Guarding the mouth, in a comic bodily image. |
| A219 (3.120) | *sizkur₂-re nam-til₃ i₃-u₃-tud* | `התפילה – חיים היא ילדה.` | – | [absent] | Copies 1.1's `חיים היא ילדה`: what gives birth to life – there firmness, here prayer and offering. |
| A220 (3.121) | *sun₇-na nam-tag al-ĝa₂-ĝa₂* | `על היהיר – עוון מוטל` | `לִפְנֵי-שֶׁבֶר גָּאוֹן` (משלי טז:יח) | [equivalent] | Pride brings punishment – in Sumer a disease demon (*Asag*). |
| A223 (3.123) | *gab₂-bu-zu kadra ḫe₂-da-ĝal₂* | `ובזרועך האחרת – מתנה יהא!` | `וְשֹׁחַד לֹא תִקָּח` (שמות כג:ח) | [divergence] | The gift (*kadra*) to the official is good manners, beside the kid for the god. |
| A231 (3.128) | *{d}inana-ke₄ šag₄ gig-ga-ĝu₁₀ i₃ ḫe₂-eb-de₂* | `אִינַנָּה – על לבי הכואב – שמן תצוק!` | `דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי` (תהלים כג:ה) | [equivalent] | The answer to 3.127's riddle: the aching heart no one finds – the goddess anoints. |
| A233 (3.130) | *du₁₄-da in-na di-da inim-ma ḫe₂-ri-ib-pad₃-de₃* | `בריב – לחרפה הנאמרת – דבר (מענה) תמצא!` | `אַל-תַּעַן כְּסִיל כְּאִוַּלְתּוֹ` (משלי כו:ד) | [divergence] | A blessing to find the apt answer. |
| A254 (3.140) | *mar-tu* | `המַרְתּוּ` | `כִּי לֹא שָׁלֵם עֲוֹן הָאֱמֹרִי עַד הֵנָּה` (בראשית טו:טז) | [cognate via *Amurru*] | Here the uncouth nomad who eats without knowing what, not yet a people. |
| A284 (3.157) | *ud mu-e-ši-zal a-na-am₃ šu mu-da-ti* | `הזמן עבר עליך – מה קיבלת בידך?` | `מַה-יִּתְרוֹן לָאָדָם בְּכָל-עֲמָלוֹ` (קהלת א:ג) | [equivalent] | The gain of time spent. |
| A294 (3.166) | *šag₄-ĝu₁₀ {ĝiš}kiri₆ ḫa-ra-dirig-ga* | `לבי – על גן עולה;` | `גַּן נָעוּל` (שיר השירים ד:יב) | [equivalent] | The heart as (more than) a garden; *kiri₆* licenses `גן`. |
| A297 (3.168) | *lu₂-gidim-ma* | `איש־רוחות־המתים` | `בַּקְּשׁוּ לִי אֵשֶׁת בַּעֲלַת אוֹב` (שמואל א כח:ז) | [equivalent] / [divergence] | The necromancer as a profession with its own food taboo; in the Bible forbidden. |

### Key findings
**The ancient mind first.**
- **Fate as an animal and a garment.** Collection 2 opens with a curse on a sacred place in the vocabulary of the city laments (2.1: rites, *me*, the ox in its station) and then a cycle on *nam-tar*: fate is a dog that bites, rags that cling, a cloth spread in the steppe, a red storm over the Land, a dog walking behind a man (2.11–2.14); the speaker was "born on a day of bitter fate" (2.5), and "my mother changed it" (2.6) – the parents' word as fate.
- **The school.** The scribe and the singer as a fixed pair (2.38–2.57): one line or one song is enough if the hand or the voice is good; the pupil who has not mastered the syllable drill "a-a" will never speak fluently (2.48); the pupil pierced like carnelian and lapis (2.45–2.46: tested and threaded); "a barber who knows Sumerian!" (2.55); the arithmetic scribe weak on clay and the clay scribe weak on arithmetic (2.50); "before the fire goes out, write your exercise tablet" (3.132); grammar drills disguised as proverbs (3.101, the same words in reverse order; 2.35 in the main dialect and in Emesal).
- **Mockery of the lamentation priest** (*gala*, 2.97–2.106): he speaks Emesal, refuses to wipe off what "belongs to the Lady of Heaven", sends the lion to the city where its "brother" the dog is beaten, walks dry while his grain boat sinks, and "the gala whose incantations are not sweet is the most eminent of the gala" – the earliest priest jokes.
- **Poverty and the household.** The wanderer who gets bread and the sitter who gets nothing (2.28, 2.34A, 2.35); the child who complains that even the dog is full and his mother will not give him a second portion (3.115); the lazy slave girl who blames the measure (3.40); the master who says "it is mine" of the lion in the trap (3.70); the fuller who swears by Enki that the garment will be back tomorrow and the "sayings of the trades" (3.87, 3.148); the drought: clouds without rain, rain that does not loosen a sandal (3.149); "where there are no reeds – that is the worst poverty" (3.106).
- **The gods.** The *niĝ₂-gig* proverbs show taboo as purity and manners (Utu: unwashed hands, uncovered spittle, kissing in the midday sun; the plough's taboo the wild bull; the necromancer's barley; one's god's wheat flour) – not the moral "abomination" of Proverbs. Enlil's temple as an office of accounts and wages (3.91–3.92) and his "great punishment, hunger" (3.93); Inana who anoints the aching heart (3.128); prayer that "gives birth to life" (3.120); Utu who at sunrise "stands" and gives kingship (3.83).
- **Animals and humour.** The fox with sceptre and seal and nothing to claim (2.66), with a tail like a harrow (2.61A); the donkey who eats his own bedding (2.77) and needs no soap (2.79); the ox who gets dust in its own eyes "like flour" (2.90); the dog who thinks itself wise (2.115) and the smith's dog who upsets the pot because it cannot lift the anvil (2.112); the monkey looking longingly in the singer's house in rich Eridug (3.150); the gecko with a crown (3.164).
- **History in the schoolbook.** Nanni who built and conquered and was carried to the netherworld (3.31, 3.35); Išbi-Erra, Ur-Namma (3.27, 3.34); Elam, where "the teeth are bound" and life is not good (3.138–3.139); the Martu nomad who eats without knowing what (3.140).

**Then the Bible.** The strongest contacts (index above): the escape into a second danger (2.94 ↔ Amos 5:19); the merchant's short measure (3.65 ↔ Amos 8:5); "eating slander" (3.18, the idiom behind Daniel 3:8); wise in one's own eyes (2.115 ↔ Prov 3:7); the harm that returns (2.90 ↔ Prov 26:27); the open mouth (3.119 ↔ Prov 21:23); nothing changes / what is gained (3.107, 3.157 ↔ Qoh 1:9, 1:3); the builder-king (3.31 ↔ Qoh 2:4); the necromancer (3.168 ↔ 1 Sam 28:7). Divergences matter as much: Utu's "abominations" are taboos of purity, not of justice; the gift to the official is advised (3.123 against Exod 23:8); the wise man is the fox.

### Open decisions (with my rulings)
1. *nam-tar* (noun) = `גּוֹרָל` (as *nam*; the laments `גורלה שנגזר`); *nam tar* (verb) = `גזר גורל` as before. Ruled: kept.
2. *gala* = `מְקוֹנֵן` (Round 2's 2.54), not the transliterated `גָּלָה` of the creation corpus; *nar* = `זמר`; *mu₇-mu₇* = `לַחַשׁ`. Ruled: kept for the project.
3. *ur₁₁* (*uru₄*) = `זרע` throughout (Round 2's 2.17, 2.20), also where ETCSL says "plough" (2.91, 2.140, 3.74). Ruled: kept; the note says the verb covers ploughing and sowing.
4. *lag* = `רגב` in the field (2.88, 3.154), `גוש` of bread and loads (2.104–2.105, 3.117): sense split noted.
5. *me-te* "what befits, ornament" = `עֲדִי` (as the temple corpus), against ETCSL "glory" (`כבוד` reserved).
6. *niĝ₂-gig* without a god = `תועבה היא` (3.161, as 1.23); with a non-divine possessor `תועבת X` (the plough, the necromancer).
7. *umuš* = `תְּבוּנָה` (wisdom corpus) at 2.64; Round 2's `שיקול דעת` at 2.124 renders *ĝalga*, a different word – both kept.
8. *piriĝ* = `לָבִיא`, *ur-maḫ* = `אַרְיֵה`; *peš₂* = `עכבר`, *niĝ₂-gilim* = `חולדה`; *geme₂* `אָמָה` ★, *gi₄-in* `שִׁפְחָה` (kept apart, 3.36–3.45 vs 3.41).
9. *eme sig gu₇* = `אכל קֻרְצֵי` (the corpus's *karṣī akālu*): the Sumerian idiom takes the Hebrew of its Akkadian calque.
10. *mar-tu* transliterated `המַרְתּוּ` (not `האמורי`): the cognate is noted in the apparatus, not built into the line.
11. *nam … kud* (3.59, spelled *kud*, not *ku₅*) = `גורל חָתַךְ (=קילל)`: `ארר` would be the corpus word, but the gate licenses it only for the spelling *ku₅*. Ruling: literal rendering; **proposal**: let the gate accept *kud* as well, and then 3.59 becomes `ארר`. **Done by the coordinator (2026-11-07):** the gate accepts *nam … kud* (and `שמאל` accepts *gab₂-bu*); 3.59 = `האדון – את אוּנוּג – אורר; …` (as LSU 26, 239).
12. *gab₂-bu* "left" (3.123): the gate licenses `שְׂמֹאל` only for *gub₃* / *šumēlu*, so the line has `ובזרועך האחרת`. **Proposal:** add *gab₂-bu* to the licence; the line becomes `ובשמאלך – מתנה יהא!`.
13. 2.69 (A125) *ĝa₂-nam-ma-da*: ORACC lemmatizes *ma* (not *ĝen*), so the gate does not license `לכי`; rendered `תלכי איתי` (was Round 2's `בואי`). **Proposal:** license `לכי` by *ma* too (it is *ĝen*'s suppletive stem), and then `לְכִי איתי`.

### Proposals for the corpus renderings
- *nam-tar* (noun) = `גּוֹרָל` (2.2–2.14, 3.176); *du-lum* = `עָמָל` (2.14, 2.157).
- *gala* = `מְקוֹנֵן`; *nar* = `זַמָּר` (written `זמר`); *mu₇-mu₇* = `לַחַשׁ` (`מְלַחֵשׁ` for *lu₂-mu₇-mu₇*); *um-mi-a* = `אוּמָּן`; *kindagal* = `גַּלָּב`.
- *me-te* = `עֲדִי` (2.c13–2.d1); *sizkur₂* = `תְּפִלָּה` (2.d1, 3.120: confirmed).
- *eme sig gu₇* = `אכל קֻרְצֵי` (3.18) [cognate via *karṣī akālu*].
- *lu₂-gidim-ma* = `איש־רוחות־המתים` [equivalent ↔ `בַּעֲלַת אוֹב`].
- *si-ĝar* = `בְּרִיחַ` (= *sikkūru*, 2.61B); *ki-nu₂* = `מִשְׁכָּב` (2.77, 3.163: confirmed).
- *kur₉* in the imperative = `היכנס` (3.26), keeping `בוא` for *ku₄* as the gate has it.
- The gates of open decisions 11–13 (*nam … kud*, *gab₂-bu*, *ma* "go").
