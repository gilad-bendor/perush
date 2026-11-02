# Project 7: the Poor Man of Nippur (eBL L/1/11)

Round 5, run 5 (2026-10-31). Key **PM**; file `annotated-PM.rtl.md`; intro `translation--intro-PM.rtl.md`; head
`translation--head.rtl.md`; built by `../wisdom_tools.py build`. Renderings: `../renderings.md` (all; §12 for this run);
brief `../translator-brief--round5-run5.md`.

## Scope and base
The whole tale, 161 labels, eBL `L/1/11` (`../../sources/eBL/Poor-Man-of-Nippur/`: ed. Jiménez, rev. Hätinen, Heinrich,
Rozzi, Mitto; tr. Foster), fetched 2026-10-31, no empty **N:** lines. Manuscripts: Sultantepe (the main witness), Nippur,
Nineveh (see `manuscripts.md`). Not available: Gurney 1956, Cooper 1975, Ottervanger 2016 (records only).

## Why
For the Bible: 2 Sam 12:1–4, the poor man's only garment (Exod 22:25–26), the threefold requital, Qoh 9:13–16. For
the ancient mind: a comic tale with a moral – the citizen's rights against an official, hospitality and the
gift-exchange, the king's chariot for hire, the trickster as physician, "the citizen of Nippur" as a type.

## Progress
- 2026-10-31: set up by the coordinator (key PM in `wisdom_config.py`, renderings §12).

## PM

### Scope
The whole tale, 161 labels (1–160, with 134a–134b), eBL `L/1/11` (ed. Heinrich; rev. Mitto, Jiménez; tr. Foster). Almost every line rests on one witness, the Sultantepe tablet HuzNA1 (SU 1951 78); HuzNA2 (72–83, 152–160), NinNA1a/b (1–25), NinNA2 (95–117) and the Late Babylonian school tablet from Nippur NipLBSch1 (1–3 only) add little. Breaks: 32, 53–56 (partly), 57 (wholly restored from 65), 116–117, 140–146 (ends lost). Files: `annotated-PM.rtl.md`, `translation--intro-PM.rtl.md`, `translation--head.rtl.md`; generated `translation-PM.rtl.md`, `translation.rtl.md`.

### Sources consulted
eBL reading edition (N, L, notes, ATF; collations of Gurney–Hulin 1964 and George 1993; restorations of von Soden 1990 and Ottervanger 2016 as cited by eBL); eBL glossary; Foster's T (read after the draft of each section). Precedents: this corpus (`wisdom_tools.py lemma` / `grep`) and every other corpus (`tools/harmonize_survey.py src/heb/parse`), above all Gilgameš, the Descent of Ištar, the Cuthaean Legend (this round), the law corpus.

### Decisions
- **The two titles of the official** kept apart as the normalization has them: *ḫazannu* = `חַזָּן` [cognate; Mishnaic `חַזָּן`, Aram. `חַזָּנָא`; the Middle Assyrian laws' precedent `החזן`], *laputtû* = `ממונה` (LH NU.BANDA₃ `ממונה`; Enki and the World Order). HuzNA1 writes NU.BAN₃.DA also where eBL normalizes *ḫazannu* (24 from NinNA1b; 50): noted at 24, 30, 50.
- *malku* = `נסיך` (the corpus's precedent: SH 7, 24, 31; Th 64), *šarru* = `מלך` – although *malku* is the cognate of `מֶלֶךְ`; in this text both name the same king (70, 72, 79 vs 71, 74, 75, 90): the Hebrew keeps the Akkadian distinction. Rejected: `מלך` for both (hides two words), `מלך` for *malku* and something else for *šarru* (breaks every corpus).
- *ina ṭēmi šarri* = `בְּטַעַם המלך` [cognate, Jonah 3:7 `מִטַּעַם הַמֶּלֶךְ`] (always vocalized), against the corpus's *ṭēmu* (of a god) `דעת`: a decree sense, licensed like Erra's *ṭēma šakānu* `שָׂם טַעַם`.
- *riābu* = `גמל` (§12.3), and its noun *rību* = `תגמול` (`גְּמוּל` stays *gimillu*'s: `הֵשִׁיב גְּמוּל`); `נקם` never (no *nqm*).
- *lummunu* = `עלוב` (not `אומלל`, which is the Theodicy's *pisnuqu*); *šūnuḫiš* `ביגיעה`, *anḫāku* `יָגֵעַ אני`, *mānaḫtu* `יגיע` (one root, as Ludlul's *šūnuḫu* `מיוגע`).
- *erēšu* "crave" = `תאווה` (7–8; not `שאל`, which is *šâlu*, 79); *gipāru* = `מכלאה` (by sense; Erra `מרעה`, Enūma eliš `אחו`: open decision 1); *šēʾu* (*šīʾ bābīya*) `שכני שערי`; *kukkubu* `צלוחית`; *šikaru* `שֵׁכָר` always vocalized; *šalultu* "third-rate" `שלישי`.
- *zikru* "name" = `זִכְרוֹ` [cognate, Exod 3:15, Hos 12:6] (2), against §4's *zikru* "utterance" `דבר`.
- *tamāḫu* `תפש` (Ludlul) vs *ṣabātu* `אחז`; *šaḫāṭu* B "strip off" `פשט` (Gilgameš) vs *šaḫāṭu* A "jump" `זינק` (Gilgameš); *emēdu* G "impose" `השית` (as Advice's *tupšikka emēdu*), N "lean on" `נצמד` (101, 154); *nazāqu* `אנקה`; *rasābu* `הכה`; *minâtu* `מידות`; *kibis šēpi* `מדרך רגליו` (by sense; CW/Gilgameš *kibsu* `שביל`).
- *nīš qāti … ušaššīšu* = `נשיאת יד הִשִּׂיאוֹ` (figura etymologica kept, as SH 88 `נשא משא עיניו`).
- *kūm* = `חֵלֶף` (the law corpus's *kīmū*); *kidinnu* = `חסות`; *nakmû* = `כלי־כוויה`; *tākulû* (hapax) = `*אכילה*?` – not `מכאוב`, which with `חולי` would manufacture Isa 53:3 `אִישׁ מַכְאֹבוֹת וִידוּעַ חֹלִי`.
- *bāb quppi* = `שער הקֻפָּה` (the gate pun kept: *bābu* is both the mayor's gate and the box's lid), *quppu* `קֻפָּה` vocalized (Sargon; `תֵּבָה` never).
- *ḫiāṭu* `חקר` (LH), because Gilgameš's `בחן` is *barû*'s in this corpus (141–142 have both).
- Quotation marks: speech in `"…"`, a quotation inside speech in `'…'` (42–51, 67–68, 112–113, 138–139, 146).
- Brackets by the ATF and the partial-restoration rule; where eBL's N has none but HuzNA1/HuzNA2 are broken (153 *išḫiṭam*, *ḫazanna*) the Hebrew brackets; where N brackets a mostly preserved word (26, 39, 113, 114, 156–158) it does not.

### Open decisions for the user
1. *gipāru* (17 = 46): `מכלאה` here, `מרעה` in Erra, `אחו` in Enūma eliš – one lemma, three Hebrew words by sense. Alternative: `מרעה` everywhere.
2. *malku* `נסיך` / *šarru* `מלך` for the same king (see Decisions); the alternative is to give the cognate *malku* `מלך` and *šarru* another word in this text only.
3. 140 *ulli*: eBL lemmatizes *ulla* "at some time"; the Hebrew follows Foster and line 36 (*elû* D "raised") with `הרים?`.
4. 105 "בן ניפור" – the mayor's self-reference (Foster) or a vocative to Gimil-Ninurta: left ambiguous.
5. *ḫazannu* `חַזָּן`: a cognate that a modern reader hears as "cantor"; kept (Middle Assyrian laws' precedent), with the note at 21. Alternative: `ראש העיר`.

### Progress log
- 2026-10-31: read the guidelines, the briefs, `corpus.md`, `renderings.md` (§11, §12), the DP model, the Cuthaean renderings (§11.6); `pars PM` (the tool reads eBL's category-I links as "another eBL text", so the internal repeats were taken from eBL's `Parallels:` field and identical normalizations by hand: 11=16; 17–21=46–50; 24=118≈87; 25=110=136; 57=65=119; 26=120; 64=109=135; 66=111≈137; 67=138≈112=157; 68≈113≈139≈158; 69≈114; 101≈154; 102=155≈134a; 103=134b=156; 81≈83; 88≈148; 23≈35; 36≈74; 34=124≈72; 58/61, 59/62, 60/63; 150≈151).
- Fixed the formulas at their first copies (Proposals below), drafted 1–160 in seven sections, each saved and `fill`ed at once; `verify PM` after each section.
- **Pass (a) fidelity**: brackets re-checked against the ATF (26 `החזן` unbracketed; 153 bracketed by the ATF); every content word accounted for; additions only in `( )` (29 `(כ)`, 83 `(על)`, 86 `(אותן)`, 89 `(לכאן)`, 95 `(עליו)`, 22 `(להביא)`).
- **Pass (b) consistency**: every repeated line compared (`verify`: 0 differences in PM); a reserved-gate hit at 89 (`הנה` "hither") replaced by `(לכאן)`; renderings diffed against the first occurrences.
- **Pass (c) Hebrew**: read the generated file aloud; vocalized the ambiguous words (`כֶּבֶשׂ`, `מָנֶה`, `מָנִים`, `יָשֵׁן`, `הֵקִיץ`, `יָגֵעַ`, `שְׁאָלוֹ`, `כְּפָתוֹ`, `מְשַׁנֶּה`, `רָכַב`, `אַיִל`, `בְּטַעַם`, `זִכְרוֹ`, `שֵׁכָר`), removed "נקם" from the intro and a footnote.
- `wisdom_tools.py build`: `translation-PM.rtl.md` 161 lines, 8 footnotes. `verify PM --strict`: 0 problems. `check_bible_quotes.py` on the annotated file, the intro, the head, the generated files and this file: 0.

### Parallels index (PM)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *eṭlu mār nippuri katû u lapnu* | עלם, בן ניפור – רש ודל | `שְׁנֵי אֲנָשִׁים הָיוּ בְּעִיר אֶחָת אֶחָד עָשִׁיר וְאֶחָד רָאשׁ` (שמואל ב יב:א) | [divergence] | The opening of Nathan's parable of the poor man; the Akkadian is a nominal phrase: Foster's "There once was" manufactures the narrative "היה" of the Bible. |
| 1 | *eṭlu … katû u lapnu* | עלם … רש ודל | `אִישׁ הָיָה בְאֶרֶץ עוּץ אִיּוֹב שְׁמוֹ` (איוב א:א) | [divergence] | Same: no "there was" in the Akkadian; the name follows in line 2 (*zikrašu*), as `אִיּוֹב שְׁמוֹ`. |
| 1 | *katû u lapnu* | רש ודל | `שִׁפְטוּ-דַל וְיָתוֹם; עָנִי וָרָשׁ הַצְדִּיקוּ` (תהלים פב:ג) | [equivalent] | The pair of poverty words. |
| 2 | *zikrašu* | זִכְרוֹ | `וְזֶה זִכְרִי לְדֹר דֹּר` (שמות ג:טו) | [cognate] | *zikru* "name" = `זֵכֶר` "name". |
| 7–8 | *ana erēš akali / šīri u šikri* | לתאוות לחם / בשר ושכר | `הִתְאַוּוּ תַּאֲוָה … מִי יַאֲכִלֵנוּ בָּשָׂר` (במדבר יא:ד) | [equivalent] | Craving for meat; here the craving of hunger. |
| 8 | *šikaru* | שֵׁכָר | — | [cognate] | Beer. |
| 10 | *ṣubāta ša lā tēnî* | שמלה אשר אין לה חליפה | `חֲלִפוֹת שְׂמָלֹת` (בראשית מה:כב) | [equivalent] | *tēnû* "change of clothes" = `חֲלִיפָה`. |
| 10, 12 | *ṣubāta ša lā tēnî* | שמלה אשר אין לה חליפה | `כִּי הִוא כְסוּתֹה לְבַדָּהּ הִוא שִׂמְלָתוֹ לְעֹרוֹ; בַּמֶּה יִשְׁכָּב` (שמות כב:כו) | [divergence] | The poor man's only garment: the Torah protects it from the creditor; here the poor man sells it himself. Also Deut 24:12–13. |
| 11 | *itti libbīšu … imtallik* | עם לבו … נמלך | `וַיִּמָּלֵךְ לִבִּי עָלַי` (נחמיה ה:ז) | [cognate] | *malāku* Gt = `נִמְלַךְ`, "taking counsel with the heart". |
| 13 | *immera lušām* | אקנה כֶּבֶשׂ | `וְלָרָשׁ אֵין כֹּל כִּי אִם כִּבְשָׂה אַחַת קְטַנָּה אֲשֶׁר קָנָה` (שמואל ב יב:ג) | [divergence] | The poor man "buys" one animal; Nathan's is a ewe lamb he raises, Gimil-Ninurta's a goat for a feast. `כבשה` reserved for a lamb word. |
| 15 | *šulušīta … enza* | עז משולשת | `עֶגְלָה מְשֻׁלֶּשֶׁת וְעֵז מְשֻׁלֶּשֶׁת וְאַיִל מְשֻׁלָּשׁ` (בראשית טו:ט) | [cognate] | *šulušītu* (from *šalāš*) = `מְשֻׁלֶּשֶׁת` "three-year-old", the same phrase "three-year-old she-goat"; *enzu* = `עֵז`. Covenant offering there, a poor man's only wealth here. |
| 19–20 | *šīʾ bābīya išabbusū; kimtu u salātu izennû* | שכני שערי יכעסו; המשפחה ובית האב יאנפו בי | `וְדָל מֵרֵעֵהוּ יִפָּרֵד` (משלי יט:ד) | [equivalent] | The poor man's social isolation; the feast as an obligation to neighbours and kin. |
| 21 | *ana bīt ḫazanni lubil enza* | אל בית החזן אביאה את העז | `וַיִּקַּח אֶת כִּבְשַׂת הָאִישׁ הָרָאשׁ` (שמואל ב יב:ד) | [divergence] | The great man takes the poor man's only animal; here the poor man brings it himself, as a gift. |
| 21 | *ḫazannu* | חַזָּן | — | [cognate] | Mishnaic `חַזָּן` / Aramaic `חַזָּנָא` from Akkadian *ḫazannu*; no biblical occurrence. |
| 22 | *ṭāba u damqa … ana karšīšu* | טוב ונאה … אל מעיו | `מַתָּן אָדָם יַרְחִיב לוֹ; וְלִפְנֵי גְדֹלִים יַנְחֶנּוּ` (משלי יח:טז) | [equivalent] | The gift to a great man as a door to favour. |
| 25 | *tukultī-enlil* | תוכולתי־אנליל | `תִּגְלַת פִּלְאֶסֶר מֶלֶךְ אַשּׁוּר` (מלכים ב טו:כט) | [cognate] | Name element *tukultī* "my trust" = `תִּגְלַת`. |
| 29 | *kī šulmāni* | כְּשַׁלְמוֹן | `כֻּלּוֹ אֹהֵב שֹׁחַד וְרֹדֵף שַׁלְמֹנִים; יָתוֹם לֹא יִשְׁפֹּטוּ` (ישעיהו א:כג) | [cognate] | *šulmānu* = `שַׁלְמֹן`: the gift to an official; Isaiah's officials take them and do not judge – the mayor takes and humiliates. |
| 33 | *ina ulluṣ libbīšu* | בעליצות לבו | `עָלַץ לִבִּי בַּיהוָה` (שמואל א ב:א) | [cognate] | *elēṣu* = `עלץ`, with the heart. |
| 35–36 | *šumēlu*, *imittu* | שמאל, ימין | — | [cognate] | |
| 40 | *ḫibiltaka … kadrê našâta* | חבלתך … מתנה נשאת | `אִם חָבֹל תַּחְבֹּל שַׂלְמַת רֵעֶךָ` (שמות כב:כה) | [cognate] | *ḫabālu* "to wrong" ~ `חבל`; the gift presupposes a grievance. |
| 51 | *azkura ina libbīya* | דיברתי בלבי | `וַיֹּאמֶר יְהוָה אֶל לִבּוֹ` (בראשית ח:כא) | [equivalent] | Speaking "to/in the heart" = thinking. |
| 52 | *ṭābiḫu* | הטבח | `לְפוֹטִיפַר סְרִיס פַּרְעֹה שַׂר הַטַּבָּחִים` (בראשית לז:לו) | [cognate] | The slaughterer of a great house. |
| 54 | *lū ṭuḫḫud paššūru* | יהי השולחן מדושן | `תַּעֲרֹךְ לְפָנַי שֻׁלְחָן נֶגֶד צֹרְרָי; דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי` (תהלים כג:ה) | [divergence] | The rich table – here the oppressor's, from the poor man's goat. |
| 58 | *eṣemta u gīda* | עצם וגיד | `וּבַעֲצָמוֹת וְגִידִים תְּשֹׂכְכֵנִי` (איוב י:יא) | [cognate] | The same pair: Job's body woven by God; here the scraps thrown to the poor. |
| 64 | *bāba ina aṣêšu* | בצאתו את השער | `כָּל יֹצְאֵי שַׁעַר עִירוֹ` (בראשית לד:כד) | [equivalent] | "Go out the gate" with the gate as object. |
| 68 | *ša ištēn šalāš rībēti arâbka* | על אחד – שלושה תגמולים אגמלך | `וְאֶת הַכִּבְשָׂה יְשַׁלֵּם אַרְבַּעְתָּיִם` (שמואל ב יב:ו) | [divergence] | Multiple requital for the poor man's animal: fourfold by the king's sentence there, threefold by the victim's own hand here. |
| 68 | *šalāš rībēti* | שלושה תגמולים | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | Multiple restitution in the Torah's law of theft; also `וְנִמְצָא יְשַׁלֵּם שִׁבְעָתָיִם` (משלי ו:לא). |
| 68 | *arâbka* | אגמלך | `עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן` (שמות כא:כד) | [divergence] | Measure for measure vs threefold. |
| 68 | *šalāš rībēti* | שלושה תגמולים | `כִּי שִׁבְעָתַיִם יֻקַּם קָיִן; וְלֶמֶךְ שִׁבְעִים וְשִׁבְעָה` (בראשית ד:כד) | [divergence] | Multiplied requital; Hebrew `נקם`, Akkadian "requite" (no *nqm*; `נקם` reserved). Also `וְהָשֵׁב לִשְׁכֵנֵינוּ שִׁבְעָתַיִם` (תהלים עט:יב). |
| 68 | *ištēn … arâbka* | אחד … אגמלך | `וְאִנָּקְמָה נְקַם אַחַת מִשְּׁתֵי עֵינַי` (שופטים טז:כח) | [absent] | Samson counts "one of two"; the Akkadian has no word of revenge, only requital. |
| 68 | *arâbka* | אגמלך | `אַל-תֹּאמַר אֲשַׁלְּמָה-רָע; קַוֵּה לַיהוָה וְיֹשַׁע לָךְ` (משלי כ:כב) | [divergence] | Proverbs forbids what the poor man proclaims; also `אַל-תֹּאמַר כַּאֲשֶׁר עָשָׂה-לִי כֵּן אֶעֱשֶׂה-לּוֹ` (משלי כד:כט). |
| 69 | *kal ūmi iṣīḫ* | כל היום צחק | `לֹעֵג לָרָשׁ חֵרֵף עֹשֵׂהוּ; שָׂמֵחַ לְאֵיד לֹא יִנָּקֶה` (משלי יז:ה) | [equivalent] | The mocker of the poor will not go unpunished; *ṣiāḫu* = `צחק` [cognate]. |
| 70 | *ištakan pānīšu* | שם את פניו | `וַיָּשֶׂם חֲזָאֵל פָּנָיו לַעֲלוֹת עַל יְרוּשָׁלִָם` (מלכים ב יב:יח) | [equivalent] | *pāna šakānu* = `שִׂים פָּנִים`; also 84, 115. |
| 71 | *ina ṭēmi šarri* | בְּטַעַם המלך | `מִטַּעַם הַמֶּלֶךְ וּגְדֹלָיו` (יונה ג:ז) | [cognate] | *ṭēmu* "decree" = `טַעַם`; the same phrase, also in Nineveh. |
| 71 | *iparrasū dīn kitti* | פוסקים דין אמת | `מִשְׁפַּט אֱמֶת שְׁפֹטוּ` (זכריה ז:ט) | [equivalent] | The royal ideal of true judgement; also Ezek 18:8. *kittu* = `אמת` [cognate]. |
| 73 | *uškēn-ma iššiq qaqqara* | השתחווה, ונשק את הקרקע | — | [equivalent] | *šukênu* = `השתחווה`; *našāqu* = `נשק` [cognate]. |
| 74 | *ullâ qātīšu* | הרים את ידיו | `בְּנָשְׂאִי יָדַי אֶל-דְּבִיר קָדְשֶׁךָ` (תהלים כח:ב) | [equivalent] | Raising the hands in blessing and prayer. |
| 78, 107 | *manû* | מָנֶה, מָנִים | — | [cognate] | Weight unit. |
| 81, 83 | *iddinūšum narkabta … irtakba* | נתנו לו מרכבה … רָכַב | `וַיַּרְכֵּב אֹתוֹ בְּמִרְכֶּבֶת הַמִּשְׁנֶה אֲשֶׁר לוֹ` (בראשית מא:מג) | [equivalent] | The king gives a commoner the insignia of rank (chariot, sash); Joseph's investiture. |
| 81–83 | *narkabta … nēbeḫa* | מרכבה … אבנט | `וְהִרְכִּיבֻהוּ עַל הַסּוּס בִּרְחוֹב הָעִיר` (אסתר ו:ט) | [divergence] | The man "whom the king delights to honour" rides through the city street; here the honour is rented for a day and turned into a trap. |
| 82 | *nēbeḫa* | אבנט | `וְהִלְבַּשְׁתִּיו כֻּתָּנְתֶּךָ וְאַבְנֵטְךָ אֲחַזְּקֶנּוּ` (ישעיהו כב:כא) | [equivalent] | The sash as the badge of a royal official. |
| 94 | *ina rēš laputtê … ibīt* | למראשות הממונה … לן | `וַיִּקַּח דָּוִד אֶת הַחֲנִית וְאֶת צַפַּחַת הַמַּיִם מֵרַאֲשֹׁתֵי שָׁאוּל` (שמואל א כו:יב) | [divergence] | At night, at the sleeping great man's head, the weaker man takes (or frees) something and leaves unseen; David spares, Gimil-Ninurta frames. Also 26:7. |
| 95 | *reḫi šitta* | ניתכה (עליו) שינה | `כִּי נָסַךְ עֲלֵיכֶם יְהוָה רוּחַ תַּרְדֵּמָה` (ישעיהו כט:י) | [equivalent] | Sleep "poured" on a man. |
| 96 | *šarrāqiš* | כגנב | `וּבַלַּיְלָה יְהִי כַגַּנָּב` (איוב כד:יד) | [equivalent] | The thief of the night. |
| 100 | *ušarraṭa lubūšīšu* | קורע את לבושיו | `וַיִּקְרַע אֶת בְּגָדָיו` (בראשית לז:כט) | [equivalent] | Rending clothes in grief – staged here. |
| 101, 154 | *nīš qāti ušaššīšu* | נשיאת יד הִשִּׂיאוֹ | `הֲרִמֹתִי יָדִי אֶל יְהוָה` (בראשית יד:כב) | [cognate] | *nīš qāti* "lifting of the hand" (supplication, oath) = `נשא יד`; also Ps 28:2. |
| 102, 134a, 155 | *ultu qaqqadīšu adi kibis šēpīšu* | מראשו ועד מדרך רגליו | `מִכַּף רֶגֶל וְעַד רֹאשׁ` (ישעיהו א:ו) | [equivalent] | The whole body beaten, in reverse order; also `מִכַּף רַגְלְךָ וְעַד קָדְקֳדֶךָ` (דברים כח:לה), Job 2:7. |
| 102 | *kibis šēpīšu* | מדרך רגליו | `עַד מִדְרַךְ כַּף רָגֶל` (דברים ב:ה) | [equivalent] | "Tread of the foot". |
| 106 | *dām kidinni … lā talappat* | את דם החסות … אל תיגע | `אַל-תִּגְּעוּ בִמְשִׁיחָי` (תהלים קה:טו) | [equivalent] | Do not touch the one under divine protection; also Gen 9:6. |
| 106 | *ikkib enlil* | תועבת אנליל | — | [equivalent] | *ikkib* DN = `תּוֹעֲבַת` DN (§11.3). |
| 108 | *kūm lubūšīšu … šanûti iddinšu* | חלף לבושיו … אחרים נתן לו | `וַיְגַלַּח וַיְחַלֵּף שִׂמְלֹתָיו` (בראשית מא:יד) | [equivalent] | Change of clothes as change of standing. |
| 115 | *gallābu* | הַגַּלָּב | `תַּעַר הַגַּלָּבִים` (יחזקאל ה:א) | [cognate] | Akkadian loanword in Hebrew. |
| 116 | *ugallib-ma kal pērtīšu* | גילח את כל מחלפותיו | `וַתְּגַלַּח אֶת שֶׁבַע מַחְלְפוֹת רֹאשׁוֹ` (שופטים טז:יט) | [divergence] | Shaving the locks: Samson loses his strength, the poor man gains a disguise and "radiance". Also Gen 41:14. |
| 122 | *asû* | רופא | — | [cognate] | Aramaic `אָסְיָא`. |
| 123 | *ašar murṣi … aškun qātīya* | במקום חולי … שמתי את ידיי | `וְהֵנִיף יָדוֹ אֶל הַמָּקוֹם וְאָסַף הַמְּצֹרָע` (מלכים ב ה:יא) | [equivalent] | The healer's hand on "the place". *murṣu* = `חֹלִי` (Isa 53:3); `מכאוב` avoided for *tākulû* (would manufacture Isa 53:3's pair). |
| 125 | *miḫiṣtašu* | מחצו | `וּמַחַץ מַכָּתוֹ יִרְפָּא` (ישעיהו ל:כו) | [cognate] | The wound shown to the "physician" who struck it. |
| 126 | *šūt rēšīšu* | סריסיו | `לְפוֹטִיפַר סְרִיס פַּרְעֹה` (בראשית לז:לו) | [cognate] | *ša rēši* > `סָרִיס`. |
| 130 | *ibru u tappû … rēma* | רֵעַ וחבר … רחמים | `וַיִּשְׁמְעוּ שְׁלֹשֶׁת רֵעֵי אִיּוֹב` (איוב ב:יא) | [equivalent] | Friends as the source of pity and comfort – absent by design; *rēmu* = `רחמים` [cognate]. |
| 132 | *irṭī … sikkāti* | תקע … יתדות | `וַתִּתְקַע אֶת הַיָּתֵד בְּרַקָּתוֹ` (שופטים ד:כא) | [equivalent] | The weak overcome the strong with tent-pegs, inside the house. |
| 147 | *irtibiṣ kīma kalbi* | רבץ ככלב | `כָּרַע רָבַץ כְּאַרְיֵה` (בראשית מט:ט) | [cognate] | *rabāṣu* = `רבץ` "crouch like (an animal)"; also `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז), the lurker. |
| 149 | *sinnišu u zikru* | נקבה וזכר | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | [equivalent] | The pair, in reverse order. |
| 159 | *ītezibšū-ma* | עזבו | — | [cognate] | *ezēbu* = `עזב`. |

### The text on its own terms
- **The citizen's status** (1, 28, 31, 105–106): "son of Nippur" is a legal class; the *kidinnu* of a holy city protects its citizens' blood as Enlil's "taboo" – the mayor invokes the protection he denied.
- **The economy of the gift** (19–22, 29, 40, 107, 143): a slaughtered animal obliges a feast for neighbours and kin; a gift to a great man (*šulmānu*, *kadrû*) expects return; the mayor assumes a gift means a grievance. The final "present" (107) is extracted, then passed on (143).
- **The gate** (24–31, 60–65, 87–88, 97–99, 118–121, 144–148): every scene turns on the mayor's gate, its doorman Tukulti-Enlil ("holder of the gate") and the box's "gate".
- **Honour and its signs** (8–10, 75, 81–83, 89, 100, 108): one garment "without a change", then a royal chariot, a sash, clothes rent and replaced; identity is what one wears – the mayor calls the disguised man "my lord".
- **Kingship** (71, 74–80): the narrator states the royal ideal ("by the king's decree prince and governor give true judgement"), but the king neither judges nor asks: he rents out a chariot.
- **Medicine** (115–133): the physician from Isin (Gula's city) as a credential, the shaven head, the cautery-iron, treatment "in the dark" – the tale lampoons the medical profession.
- **Requital as a count** (68, 113, 139, 158): a debt counted and paid off in three instalments; the hero's name "Ninurta's requital" (2).
- **Comedy and repetition** (11/16/45, 17–21/46–50, 102–103 ×3): the audience enjoys the formulas and the reversals (69 laughed ↔ 114 worried; 88 ↔ 148; 9 slept hungry ↔ 92 the mayor's ram; 160 the mayor crawls).
- **The dog** (58, 140, 147, 160): the poor man is fed like a dog, lurks like a dog, and leaves the mayor on all fours.
- **The city as divine** (6, 37): grain is Nisaba, Nippur blesses beside Enlil.

### Lines shared with other files
- 25, 27, 39, 65 (the speech formula) copy the Descent of Ištar 13 (`אל שוער השער דבר דיברה:`) in its pattern `אל X דבר דיבר:`.
- 73 matches Nergal and Ereškigal SB a+23 (`נשק את הקרקע לפניה`) except its verb (*šukênu* `השתחווה` here, *kamāsu* `כרע` there).
- 90 `אדונך שלחני` = Ludlul III 15.
- No line of PM is identical in normalization to another corpus file (`verify`: 0 differences).

### Proposals for the shared renderings
Formulas (exact strings, fixed at the first copy and copied):
- 11 = 16: `עם לבו העלוב – הוא נמלך:`; 45: `[עם לב]י העלוב – כך אמרתי:`
- 17 = 46: `אוּלַי במכלאתי אטבח את העז –`; 18 = 47: `לא תהיה פת־בג – היכן השֵׁכָר?`; 19 = 48: `ישמעו – ושכני שערי יכעסו;`; 20 = 49: `המשפחה ובית האב – יאנפו בי.`; 21 = 50: `אקחה – ואל בית הַחַזָּן אביאה את העז!`
- 10, 12, 14, 43: `שמלה אשר אין לה חליפה`
- 24 = 118: `אל שער חזן ניפור – הוא צעד.`; 87: `אל שער ממונה ניפור – הוא צעד.`
- 25 = 110 = 136: `אל תוכולתי־אנליל, מחזיק השער, דבר דיבר:`; 57 = 65 = 119: `אל השוער, מחזיק השער, דבר דיבר:`
- 26 = 120: `"אמור – ואכנסה, ואראה את החזן!"`
- 34 = 124: `גימיל־נינורתה, לפני החזן בהיכנסו,`; 72: `גימיל־נינורתה, אל לפני הנסיך בהיכנסו,`
- 64 = 109 = 135: `גימיל־נינורתה, בצאתו את השער,`
- 66 = 111 = 137: `"לאדונך – שמחת האלים! – כך אמור לו:`
- 67 = 112 = 138 = 157: `'בעבור המשא האחד אשר השתת עליי,`
- 68: `על אחד – שלושה תגמולים אגמלך!'"`; 113: `אחד – גמלתיך, ונותרו שניים!'"`; 139: `פעמיים – גמלתיך, ונותרה אחת!'"`; 158: `שלוש פעמים תגמולים גמלתיך!"`
- 69: `הממונה שמע – וכל היום צחק.`; 114: `החזן שמע – וכל היום דאג.`
- 70, 84, 115: `… שם את פניו`
- 81 / 83: `מרכבה חדשה, הראויה לגדולה`
- 101 = 154: `נצמד אל החזן, ונשיאת יד הִשִּׂיאוֹ;`
- 102 = 155: `מראשו ועד מדרך רגליו`; 134a: `מן הראש ועד מדרך רגליו`; 103 = 134b = 156: `את מידותיו הכה, אנקה השית עליו.`
- 58/61: `תֵּן לו, לבן ניפור, עצם וגיד,` / `נתן לו, לבן ניפור, עצם וגיד,`; 59/62: `הַשְׁקֵהוּ מִצְּלוֹחִיתְךָ שֵׁכָר שלישי,` / `הִשְׁקָהוּ מִצְּלוֹחִיתוֹ שֵׁכָר שלישי,`; 60/63: `שַׁלְּחֵהוּ – הוֹצִיאֵהוּ אל תוך השער!` / `שִׁלְּחוֹ – הוֹצִיאוֹ אל תוך השער.`
- 88 / 148: `החזן לקראתו יצא החוצה` / `החזן, לצווחת העלם, יצא החוצה`

Terms (new or confirmed): *ḫazannu* `חַזָּן` [cognate]; *laputtû* `ממונה`; *atû* `שוער`; *mukīl bābi* `מחזיק השער`; *malku* `נסיך`; *šar kiššati* `מלך הכל`; *ina ṭēmi šarri* `בְּטַעַם המלך` [cognate, Jonah 3:7]; *dīn kitti* `דין אמת`; *parāsu* (a case) `פסק`, (stative) `פסוקה`; *riābu* `גמל`, *rību* `תגמול`; *biltu* `משא`; *emēdu* G `השית`, N `נצמד`; *šulmānu* `שַׁלְמוֹן` [cognate]; *kadrû* `מתנה`; *qīštu* `תשורה`, *qiāšu* `העניק`; *taḫdât ilī* `שמחת האלים`; *lummunu* `עלוב`; *katû* `רש`, *lapnu* `דל`; *zikru* "name" `זֵכֶר` (`זִכְרוֹ`); *šūnuḫiš* `ביגיעה`, *anāḫu* G `יָגֵעַ`; *erēšu* "crave" `תאווה`; *zummû* `נעדר`; *išpiku* `אסם`; *šulušītu* `משולשת` [cognate]; *enzu* `עז` [cognate]; *immeru* `כֶּבֶשׂ`; *aslu* `אַיִל`; *tēnû* `חליפה`; *šaḫāṭu* B `פשט`, A `זינק`; *tamāḫu* `תפש`; *gipāru* `מכלאה` (open); *šēʾu* `שכן`; *kukkubu* `צלוחית`; *šalultu* (beer) `שלישי`; *elēṣu* `עלץ` [cognate]; *imittu* / *šumēlu* `ימין` / `שמאל`; *ḫibiltu* `חבלה`; *uršu* `חפץ`; *izzimtu* `מַאֲוַי` (reviewer: was `משאלה`, a Hebrew-only שאל pun with 79 *išāl*); *apiltu* `פירעון`; *ruššû* `אדמדם`; *nēbeḫu* `אבנט`; *ezēḫu* `חגר`; *šarāḫu* D `מרומם`; *kamāsu* "gather" `כינס`; *kanāku* / *kišibbu* `חתם` / `חותם`; *maṣṣartu* `נצירה`; *reḫû* (sleep) `ניתך`; *šāt mūši* `בעת לילה`; *tību* `קום`; *tabālu* `סילק`; *šarāṭu* D `קרע`; *nīš qāti* `נשיאת יד`; *kibis šēpi* `מדרך רגל`; *minâtu* `מידות`; *rasābu* `הכה`; *nazāqu* `אנקה`; *puluḫtu* (terror) `אימה`; *kidinnu* `חסות`; *kūm* `חֵלֶף`; *gullubu* `גילח`, *gallābu* `גַּלָּב` [cognate]; *pērtu* `מחלפות`; *nakmû* `כלי־כוויה`; *ilittu* `יליד`; *ḫiāṭu* `חקר`; *tākulû* `*אכילה*?`; *bulṭu* (remedy) `תרופה`; *ukkulu* `מוחשך`; *âru* `ניגש` (`אין־גישה`); *retû* `תקע`; *dunnu* `חוזק`; *sikkatu* `יתד`; *pukkuru* `כפת`; *uššušu* `דאוג`; *šisītu* `צווחה`; *titurru* `גשר`; *rabāṣu* `רבץ` [cognate]; *kīdu* `חוץ`; *pašālatti* `בזחילה`; *tenēšētu* `בני האנוש`; *buʾʾû* `חיפש`.
Names: Gimil-Ninurta `גִּימִיל־נִינוּרְתָּה`; Tukultī-Enlil `תּוּכּוּלְתִּי־אֶנְלִיל`; Nippur `נִיפּוּר`; Duranki `דּוּרַנְכִּי`; Ekur `אֵכּוּר`; Isin `אִיסִין`; Nusku `נוּסְכּוּ`; Nisaba `נִיסַבָּה`.
Tool note: `wisdom_tools.py pars` does not resolve eBL's category-I links (`L I.11 16`) as lines of the same text (it prints "another eBL text"); `key_for` handles only categories II and III. `verify` still catches identical normalizations.

### Lessons for the guidelines
- A tale whose scenes repeat three times: list every repeat from eBL's `Parallels:` field before the first line and fix the Hebrew of each formula at its first copy; the payoff is that the reversals (laughed / worried; went out to meet / went out to chase) become visible word for word.
- `הנה` "hither" trips the `הנה` gate of the wisdom corpus: write `לכאן`.
- In a narrative that names one official by two titles, keep both titles as the normalization has them and note the logogram (NU.BAN₃.DA) where the scribe wrote the other.
