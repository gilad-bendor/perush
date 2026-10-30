# 5-יאמה-והמתים – RV 10.10, 10.14–10.18

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
RV 10.10, 10.14–10.18. Base texts and line units: `../renderings.md` §1. Line data: `python3 -I -B ../vedic_tools.py data <KEY>`.

## Coordinator's notes
- Fixed before drafting (2026-10-30): the renderings §1–§10; the gates in `vedic_tools.py`.

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV10.10 1a–14d, RV10.14 1a–16d, RV10.15 1a–14d, RV10.16 1a–14d, RV10.17 1a–14d, RV10.18 1a–14d (translator 4, Round 5 run 1)

### Scope
All 344 pādas of the six hymns of the Yama cycle, in this order: 10.10 (Yamī and Yama, 56), 10.14 (Yama, the path of
the fathers, 64), 10.18 (to mother earth, 56), 10.15 (the fathers, 56), 10.16 (the cremation fire, 56), 10.17
(Saraṇyū, Pūṣan, the waters, 56). One annotated file and one intro per KEY; built with `vedic_tools.py build`.

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`vedic_tools.py data`), every form checked; Grassmann's *Wörterbuch*
  (`gra`, his hymns 836 = 10.10) for the rare words (*tyajás*, *sálakṣman*, *āhanás*, *vī́ci*, *ájāmi*, *anāthá*,
  *kā́mamūta*, *batá*, *líbujā*, *saṃvíd*, *pramúd*).
- After drafting each hymn: `vedic_tools.py tr` (Griffith, Grassmann, Geldner, Elizarenkova) and Jamison's commentary
  (`../../sources/Jamison--Rigveda-commentary/X.1–60-9-25-26.txt`: X.10 throughout; X.15.8, 14; X.18.7, 8, 14).
- Comparison corpora (by `grep`): Gilgameš VII 186–190 and XII 150–153 (`../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/`), the
  Descent of Ištar 4–10 (`../../העולם-התחתון/1-ירידת-אישתר/`), Bilgameš, Enkidu and the Netherworld 254–303
  (`../../העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון/`). Every Bible verse printed with `check_bible_quotes.py --show`
  before quoting.

### Decisions
- **Names** (renderings §3.1 throughout; Yama `יָמָה` and Yamī `יָמִי` vocalized everywhere). New names (Proposals):
  Gandharva `גַּנְדְהַרְוָה`, Mātalī `מָאטַלִי`, the Kavyas `הַקַּוְיָה`, the Vairūpas `הַוַּירוּפָּה`, the Navagvas
  `הַנַּוַגְוָה`, Atharvan `אַתַרְוַן` and Bhṛgu `בְּרִגוּ` (pl. `בני …`), Saramā `סַרַמָא` (*sārameyá* `בן סַרַמָא`), Viṣṇu
  `וִישְׁנוּ`, the Aśvins `האַשְׁוִינִים` (as AB7), Vasiṣṭhas `בני וַסִישְׁטְהָה`, the plants of 10.16.13 (`קִיָּאמְבּוּ`,
  `פָּאקַדוּרְוָה`, `וְיַלְקַשָׁה`), the meters `טְרִשְׁטֻבְּה`, `גָּאיַתְרִי`, the cry *váṣaṭ* `וַשַׁט`. The dogs are not named in
  the RV: *śabálau* is "the two dappled ones" (`המנומרים`); Śyāma and Śabala belong to the AV (a note at 10.14.10a).
- **Translated epithets** (not names): *kravyā́d* `אוכל־הבשר`, *viśvā́d* `אוכל־הכל`, *kravyavā́hana* `נושא־הבשר`,
  *jātávedas* `יודע־הנולדים` (AB7's form), *dhātár* `מַעֲמִיד` (renderings §11.1), *svarā́j* `המושל בעצמו`.
- **svadhā́** = `סְוַדְהָא` (transliterated, with a first-occurrence note) in all the funeral hymns – also where Geldner
  reads "nach eigenem Ermessen" (10.15.12c, 10.16.5b, 10.17.8b; noted there); *svā́hā* `סְוָאהָא` (10.14.3d). The plural
  *svadhā́bhiḥ* `קריאות־הסְוַדְהָא`. 10.129's `כֹּחַ עַצְמִי` stays: the split is by sense, as renderings §5.1 foresaw.
- **The incest vocabulary of Lev 18 is not used in a line.** Choices in 10.10: *sahaśéyya* `משכב־יחד` (√*śī* `שכב` is the
  corpus's word; 2 Sam 13:11 tagged [equivalent]); *ni √gam* `בא על` in both 11b ("if Perdition comes (upon her)") and
  12b ("who comes upon his sister"), keeping the poet's pun (Deut 25:5 `יְבָמָהּ יָבֹא עָלֶיהָ` in the apparatus);
  *pāpá* `רע` (AB7); *jāmí* (n.) `אחווה`, *jāmí* (m. pl.) `בני־אחווה`, *ájāmi* `לא־אחווה` (the pun *jāmí*/*ájāmi* kept;
  `אח` stays *bhrā́tar*'s); *tanvàm ā́ viviśyāḥ* `תיכנס אל גופי` (literal, not `בוא אל`). Rejected: `גלה ערוה`, `שאר
  בשר`, `חסד` (Lev 20:17), `נבלה` (2 Sam 13:12) – all only in the apparatus.
- **Death and the dead:** *mr̥tyú* `מָוֶת` (vocalized, a person in 10.18.1); *mr̥tá* `הַמֵּת(ים)`; *pitáraḥ* `האבות`;
  *pitr̥yajñá* `זבח־האבות`; *loká* `עוֹלָם` even where it means "place" (10.14.9b); *jīvaloká* `עולם החיים`; *ásu*
  `חִיּוּת`, *gatā́su* `שחִיּוּתו הלכה`, *ásunīti* `הנהגת־החִיּוּת`; *ātmán* `נפש`, *vā́ta* `רוח` (10.16.3a); *parā́ √i*
  `הלך למרחוק` (the verb of dying, 10.14.1a, 2c, 7b; Death sent the same way in 10.18.1a); *sám √gam* `התאחד` (10.14.8a,
  8d, 10.16.5d) and *saṃgámana* `מאחד` (10.14.1c); *paramé vyòman* `בַּמָּרוֹם הָעֶלְיוֹן`; *iṣṭāpūrtá* `הזבחים
  והנדבות`; *avasā́na* `מקום מרגוע` (not `מנוחה`, near the banned string נח).
- **Body words:** *tanū́* `גוף` (also the new body of the dead, 10.14.8d, 10.15.14d, 10.16.5d); *śárīra* `גְּוִיָּה` (the
  coordinator's row; 1.32.10b has `הגוף` – a split for the coordinator, see Open decisions); *tvác* `עור`.
- **Earth words (both gated):** *bhū́mi* `אֲדָמָה` (10.18.10a, 11d) and *pr̥thivī́* `אֶרֶץ` (10.18.10b, 11a, 12a, 13a, and
  10.10.5d, 9c, 10.16.3b); *kṣám* (10.10.1d) `תבל`, so as not to merge a third word.
- **Fire words, one each:** √*dah* `שרף`, √*śuc* `בער` (*śocís* `בערה`), √*tap* `להט` / *tápas* `לַהַט`, *arcís*
  `שלהבת`, *háras* `זעם`, √*hr̥ṣ* `עלז`; √*hi* (send) `שגר`, kept apart from √*sr̥j* `שִׁלַּח` (10.16.5a) and *inv* `הניע`.
- **Other new recurring words:** *sákhi* `חבר` (AB7), *sakhyá* `חֲבֵרוּת`; √*vaś* `חפץ`; *kā́ma* `חשק`; √*rap* `מלמל`;
  √*mī* `הפר` (10.10.5c; with *úd* `הטעה`, 9b); *vratá* `תקנה`; *dhā́man* `תחום`; *spáś* `מרגל`, *anu-√spaś* `ריגל`;
  √*car* `נדד`; √*mad* `התבסם`; *mántra* `מזמור`; *námas* `קידה`; *gātú* `נתיב`, *pánthā* `דרך`, *pathyā̀* `שביל`,
  *prápatha* `מסע רחוק`; *ásta* / *gr̥há* both `בית` (noted); *sádas* / *sā́dana* `מושב`; *sadhástha* `משכן`; *barhís*
  `מצע העשב`, *prastará* `צרור העשב`; *havyá* and *havís* both `מנחה` (the same root, noted); √*hu* `נסך`, √*hū*
  `קרא`; √*riṣ* `הזיק` and √*hiṃs* `פגע` (as 10.121.9a); *nírr̥ti* `אבדון`; *yóni* `רחם` (10.10.7b; 10.17.11b–c, the
  same *samāná yóni*) but `מיטה` in 10.18.7d (the marriage bed: Geldner, Elizarenkova, Jamison); *paridhí* `גדר`
  (10.18.4a; 10.90's `מקלות־הגדר`: a split by sense); *párvata* `הר` (the stone of 10.18.4d); *mít* `קורה`,
  *sthū́ṇā* `עמוד`, *logá* `רגב`; *síc* `שולי שמלה`; *dhánus* `קֶשֶׁת` (10.18.9a, the only licensed line); *ghr̥tá*
  `חמאה מזוקקת` (ŚB), *sarpís* `חמאה`, *médas* `חֵלֶב`, *páyas* `לשד`; *drapsá* `טיפה`, √*skand* `ניתז`, *aṃśú* `גבעול`;
  *camasá* `כוס` (*kadru* `גביע` of 1.32); *maṇḍūkī́* `צפרדעה` (for project 6's frogs); *sávarṇā* `שוות־מראה`;
  *vidhávā* in *avidhavā́* `שאינן אלמנות`; *nā́rī*, *jāyā́* `אישה`, *jáni* `בת־זוג`, *yóṣā* `נערה`, *yuvatí* `עלמה`.
- **Readings:** 10.10 speakers – Yamī the odd stanzas, Yama the even (Geldner, Jamison; *āhanas* voc. f. in 6d and 8c).
  10.10.9b *úd √mī* "trip up (the eye of the sun)" with Jamison and Geldner, not Griffith's "ope". 10.15.8b *vásiṣṭhāḥ*
  read as the Vasiṣṭhas (Geldner, Elizarenkova), the superlative "best" kept in a note. 10.18.14 read with the common
  interpretation (the poet's own future burial), Jamison's dissent (a poet's boast) in the apparatus. 10.17.11a *dyū́n*
  "days" (Geldner), a split from *dyú* `שמים`. Zurich slips corrected in the apparatus: 10.14.7d *paśyāsi* (2 sg, not
  pl.), 10.17.2d *saraṇyū́ḥ* (nom. sg.), 10.16.5d *gachatām* (3 sg mid.), 10.16.3c *hitám* (√*dhā*).

### Open decisions for the user
- *śárīra*: `גְּוִיָּה` (the coordinator's row, used here) or `הגוף` (1.32.10b, the dossier)? One must change.
- *svadhā́* transliterated (`סְוַדְהָא`) in the funeral hymns, or a Hebrew word (`מנחת־האבות`)? I chose the
  transliteration: the word is a ritual cry, and Geldner's "nach eigenem Ermessen" shows that the old sense lives on.
- 10.10.14d *súbhadrā saṃvíd* `הסכמה טובה מאוד` – literal, but it sounds like Gen 1:31 `טוֹב מְאֹד` (a link through the
  Hebrew only, noted). Keep, or `הסכמה מוצלחת`?
- 10.18.7d: the sati misreading (*ágre* → *agneḥ*) is told in a note and a footnote; the user may want it only in the
  apparatus.

### Progress log
- Drafted in priority order: 10.10, 10.14, 10.18, 10.15, 10.16, 10.17; each hymn saved, `fill`ed and `verify`ed as soon
  as drafted, then compared with `tr` and Jamison, and revised (10.10: 6d, 9b, the speaker of 6; 10.14: notes on
  10c, 14c, 16b; 10.18: 2a, 7b, 7d, 14a–c; 10.15: 8b, 14c).
- Pass (a) fidelity: every content word in the פירוק; the parentheses checked; 10.18.2b/3d made identical (the
  participle has no person).
- Pass (b) consistency: `lexmap` over all files – fixed *riṣ* / *hiṃs* (10.121's `פגע`), *ghr̥tá* (ŚB's `חמאה
  מזוקקת`), 10.18.7d `בתחילה` (plene, as *ágre* elsewhere); the remaining multi-Hebrew lemmas are inflections or the
  splits listed above. Repeated lines: 10.14.2c = 7b identical; 10.18.2b = 3d identical; 10.10.13d / 14b differ only
  in the verb's gender (`תחבק` / `יחבק`: the subject of 14b is "another" (m.)) – justified in the apparatus.
- Pass (c) Hebrew: the generated `translation-<KEY>.rtl.md` read through; 10.10.13d/14b lost a doubled `(אותך)`;
  `אל` vocalized `אֶל` where the deva trap fired, `אֵלֶּה` where it means "these".
- `check_bible_quotes.py` on all annotated, intro and generated files: 0 problems. `verify RV10.<n> --strict`: no
  problems for all six (one justified repeated-line difference in 10.10).

### The text on its own terms
- **The first humans are twins, and the first moral argument is about incest** (10.10): Yamī argues from duty
  (a grandson for the father, 1c), from the gods' wish (3a), from the creator's act in the womb (5a), from cosmic
  precedent (Heaven and Earth, 9c); Yama answers only with "they say" (12b), the gods' unblinking spies (8a–b) and a
  prophecy of decline (10a–b). Morality precedes society: there is no one yet to "say" anything.
- **The poets play with words to the end:** *jāmí* / *ájāmi*, the *batá bata* of 10.10.13a, *ni √gam* in 11b and
  12b, *yamá* / *yamat* in 10.14.14c, *suvidátra* / *avitsi* in 10.15.3a, *jātá-vedas* "who knows the born" who knows
  even the forgotten fathers (10.15.13c).
- **Death is a road someone opened** (10.14.1–2): Yama "went forth along the great slopes and spied out the path for
  many"; dying is "going far" (*parā́ √i*), and the dead are sent "on the ancient paths" (7a).
- **The dead go up, to light, food and a body**: a pasture that cannot be taken (10.14.2b), "the highest heaven"
  (8b), "come home again" leaving the blemish behind (8c), a new radiant body (8d, 10.15.14d, 10.16.5d), houses
  "dripping with ghee" (10.18.12c).
- **The fathers depend on their descendants and protect them**: they are invited to eat and drink "with svadhā"
  (10.15), asked not to harm the living "for a fault we committed in human fashion" (6d), and to give wealth and sons.
- **Cremation is cooking, not destruction** (10.16.1–2): the fire must make the dead "done" and send him on; the
  goat is the fire's share, the cow's fat his armour; the flesh-eating fire is sent away, the hearth fire stays.
- **The body returns to the cosmos** (10.16.3): eye to the sun, breath to the wind, limbs to the plants – the
  reverse of 10.90.13.
- **The funeral is also a separation** (10.18): the footprints of Death wiped away, a stone set as a "mountain"
  between the living and the dead, dancing and laughter on the way back, the widow recalled to "the world of the
  living", the dead man's bow taken "for us", "you there, we here".
- **The earth is a mother** (10.18.10–13): "creep to this mother earth … as a mother her son with the hem of her
  garment, cover him".
- **The origin of Yama is a disappearance** (10.17.1–2): the immortal mother hidden, a look-alike given in her place;
  mankind descends from the substitute.

### Key parallels
- [divergence] 10.14.1b ↔ Gen 5:5 `וַיָּמֹת`; Gen 4:8 (Abel): the first death in Genesis is an ending or a murder; in the
  Veda the first death opens a road and makes Yama a king.
- [divergence] 10.14.8b, 10.15.14b ↔ Ps 49:20 `עַד-נֵצַח לֹא יִרְאוּ-אוֹר` and Gilgameš VII 186–190 ("dust their food …
  they see no light"): three answers – the Vedic dead in the highest heaven, the Babylonian dead in a dark house of
  dust, the Psalm's dead in the dark.
- [divergence] 10.15.14a ↔ Bilgameš, Enkidu and the Netherworld 302–303 ("the one burned in fire – his ghost is not
  there, his smoke went up to the sky") and 1 Sam 31:12: the burned have no ghost in Sumer; in the Veda both burned and
  unburned are in heaven.
- [divergence] 10.15.11c ↔ Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת`, Ps 106:28, Gilgameš XII 152–153: feeding the dead is the
  Vedic duty and the Mesopotamian need, and a sin in Israel.
- [equivalent] 10.15.13a ↔ Deut 29:14 `אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה … וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה`; [divergence] 13b ↔ Isa 63:16 `אַבְרָהָם לֹא
  יְדָעָנוּ` – the same formula of totality; and the knowledge between dead and living runs in opposite directions.
- [divergence] 10.16.3a ↔ Qoh 12:7 `וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים`: both dissolve the dead into their sources, the Veda in a
  ritual, Qohelet as a conclusion.
- [equivalent] 10.18.10a ↔ Gen 3:19 `עַד שׁוּבְךָ אֶל הָאֲדָמָה`, Job 1:21 `וְעָרֹם אָשׁוּב שָׁמָּה`, Ps 139:15: return to the earth
  (*bhū́mi* `אֲדָמָה`, a real hidden echo); [divergence] – a punishment in Genesis, a mother in the Veda.
- [equivalent] 10.10.12b ↔ 2 Sam 13:12, Lev 20:17; 10.10.1c ↔ Gen 19:32: the incest prohibition and its breach "to
  preserve seed" in both cultures.
- [equivalent] 10.17.2b ↔ Gen 29:25: the substituted bride. [equivalent] 10.17.3b ↔ Ps 23:1, 4: the shepherd on the
  dangerous road.
- [equivalent] 10.18.1a ↔ Hos 13:14: Death addressed in the second person.
- Said in every bullet: India never met Israel; each is a shared motif, not a source.

### Proposals for the shared renderings
- Add to §3.1: Gandharva `גַּנְדְהַרְוָה` (` gandharv`), Mātalī `מָאטַלִי`, Atharvan `אַתַרְוַן` (` atharv`), Bhṛgu
  `בְּרִגוּ` (` bhrgu| bhrgav`), Saramā `סַרַמָא` (` saram`), Viṣṇu `וִישְׁנוּ` (` visn`), Aśvins `אַשְׁוִינִים` (` asvin`), the
  Kavyas, Vairūpas, Navagvas (as above).
- §5.1: *svadhā́* in the funeral hymns `סְוַדְהָא` (pl. `קריאות־הסְוַדְהָא`), *svā́hā* `סְוָאהָא`; *jātávedas*
  `יודע־הנולדים` in the RV too; *kravyā́d* `אוכל־הבשר`; *pitáraḥ* `האבות`; *mr̥tá* `מת`; *parā́ √i* `הלך למרחוק`;
  *sám √gam* `התאחד`; √*vaś* `חפץ`; √*mad* `התבסם`; *bhúvana* `ההוויות` (confirmed); *yóni* `רחם` (womb, source) /
  `מיטה` (bed); *śárīra* (see Open decisions).
- Gates: the `ברך` gate should allow `בֶּרֶךְ` "knee" (*jā́nu*) – a homograph (10.15.6a needed a permit); the `טוב`
  licence should read *vásiṣṭha* (superlative of *vásu*) and other *vas-* superlatives; the Yama name regex matches the
  verb *yamat* (√*yam*, 10.14.14c: a permit); the deva trap fires on the preposition `אל` whenever a neighbouring line
  has a god (vocalized `אֶל` in four lines).
- Lexmap: lemma folding merges √*hū* "call" with √*hu* "offer", √*vaś* "want" with √*vas* "dwell", *síc* "hem" with
  √*sic* "pour", and *sú* with √*su*: harmless, but a false "two Hebrew" signal.

### Lessons for the guidelines
- In a dialogue hymn, settle the speakers before drafting by grammar (a vocative's gender: 10.10.6d *āhanas*), not by
  alternation alone.
- A repeated line whose subject changes gender (10.10.13d / 14b) cannot be identical in Hebrew; justify it in both
  entries.
- For a funeral cycle, grep the netherworld corpora early: the strongest findings were three-way (Veda, Mesopotamia,
  Israel), not two-way.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (RV10.10)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | ó cit sákhāyaṃ sakhyā́ vavr̥tyāṃ | הו, הלוואי ואפנה את החבר אל חֲבֵרוּת, | `וַיִּמְלְאוּ יָמֶיהָ לָלֶדֶת; וְהִנֵּה תוֹמִם בְּבִטְנָהּ` (בראשית כה:כד) | equivalent | בשני המקורות התאומים עומדים בראשית שושלת |
| 1a | ó cit sákhāyaṃ sakhyā́ vavr̥tyāṃ | הו, הלוואי ואפנה את החבר אל חֲבֵרוּת, | `וַיִּמְלְאוּ יָמֶיהָ לָלֶדֶת; וְהִנֵּה תוֹמִם בְּבִטְנָהּ` (בראשית כה:כד) | divergence | יעקב ועשו הם אחים־יריבים, יָמָה ויָמִי – אחים שאחת מבקשת להיות בת זוגו של השני. השם עצמו, "תאום", הוא כאן המשמעות של הדמות: כמו `תוֹמִם`, מלה ולא שם. מוטיב משותף, בלי מגע. |
| 1c | pitúr nápātam ā́ dadhīta vedhā́ḥ- | נכד לאב יעמיד הנבון, | `לְכָה נַשְׁקֶה אֶת אָבִינוּ יַיִן וְנִשְׁכְּבָה עִמּוֹ; וּנְחַיֶּה מֵאָבִינוּ זָרַע` (בראשית יט:לב) | equivalent | גם בנות לוט, כשאין "אִישׁ בָּאָרֶץ" (שם יט:לא), מנמקות את החיבור האסור בהמשך הזרע לאב. |
| 1c | pitúr nápātam ā́ dadhīta vedhā́ḥ- | נכד לאב יעמיד הנבון, | `וְהָקֵם זֶרַע לְאָחִיךָ` (בראשית לח:ח) | equivalent | הלשון העברית של "העמדת" צאצא היא לשון הייבום. מוטיב משותף (החובה להעמיד צאצא, גם במחיר קשר אסור) בתרבויות שלא נפגשו: הוודה לא הכירה את ישראל. |
| 2b | sálakṣmā yád víṣurūpā bhávāti | שבעלת אותו תו תהיה שונת צורה. | `זֹאת הַפַּעַם עֶצֶם מֵעֲצָמַי וּבָשָׂר מִבְּשָׂרִי` (בראשית ב:כג) | divergence | בבראשית הדמיון הגופני ("עצם מעצמי") הוא מה שמצדיק את הזוגיות; כאן הוא בדיוק הנימוק נגדה: מי שדומה בגוף אינה יכולה להיות "אחרת". |
| 2d | divó dhartā́ra urviyā́ pári khyan | מחזיקי השמים, צופים סביב למרחוק. | `עֵינָיו יֶחֱזוּ עַפְעַפָּיו יִבְחֲנוּ בְּנֵי אָדָם` (תהלים יא:ד) | equivalent | האל הצופה מן השמים במעשי בני האדם; כאן הצופים הם "בני האסורה" הרבים. מוטיב משותף בלי מגע. |
| 3b | ékasya cit tyajásam mártyasya | נצר לבן התמותה האחד. | `זֶה סֵפֶר תּוֹלְדֹת אָדָם` (בראשית ה:א); `וַיֵּדַע קַיִן אֶת אִשְׁתּוֹ` (בראשית ד:יז) | divergence | בבראשית שושלת האדם נמשכת מאדם דרך בניו; שאלת נשותיהם נשארת סמויה (, בלי שיאמר מי היא). כאן השאלה הזאת היא נושא המזמור. |
| 3d | jányuḥ pátis tanvàm ā́ viviśyāḥ | כבעלה של בת־זוג, תיכנס אל גופי. | `וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד` (בראשית ב:כד) | equivalent | האיחוד הגופני של בני הזוג. כאן הוא מבוקש בין אח לאחות; העברית `תיכנס אל גופי` שומרת את הדימוי של המקור ולא את לשון המקרא (`בּוֹא אֶל`). |
| 5a | gárbhe nú nau janitā́ dámpatī kar | כבר בעודנו עוברים עשה אותנו המוליד בעלי־בית, | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ … זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | equivalent | זוג ראשון שנעשה זוג בידי יוצר; בבראשית הזכר והנקבה אינם אחים. |
| 5a | gárbhe nú nau janitā́ dámpatī kar | כבר בעודנו עוברים עשה אותנו המוליד בעלי־בית, | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ … זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | absent | אין במקרא תאומים בראשית האנושות. התאומים של קין והבל ("ואחותו") הם מדרש מאוחר (בראשית רבה כב), לא כתוב. |
| 5b | devás tváṣṭā savitā́ viśvárūpaḥ | האֵל תְּוַשְׁטָר, סַוִיטָר, בעל כל הצורות; | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | divergence | תְּוַשְׁטָר הוא אל אומן, מעצב הצורות ברחם; האל של בראשית יוצר את האדם מן האדמה. גם כאן אין `צֶלֶם` ו`דְּמוּת` אלא *rūpá* "צורה". |
| 6a | kó asyá veda prathamásyā́hnaḥ | מי יודע על היום הראשון הזה? | `וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד` (בראשית א:ה) | divergence | בבראשית "היום הראשון" מתועד בפירוט; כאן הוא דבר שאיש לא ראה. מוטיב משותף של "היום הראשון", בלי מגע. |
| 7a | yamásya mā yamyàṃ kā́ma ā́gan | חשק לְיָמָה בא עליי, על יָמִי, | `וְאֶל אִישֵׁךְ תְּשׁוּקָתֵךְ וְהוּא יִמְשָׁל בָּךְ` (בראשית ג:טז) | divergence | התשוקה של האישה הראשונה לאיש הראשון: במקרא היא חלק מן העונש, וכאן היא מדברת בגוף ראשון ומבקשת. `תְּשׁוּקָה` שמורה ואינה נכתבת (*kā́ma* `חשק`). |
| 7b | samāné yónau sahaśéyyāya | למשכב־יחד באותו רחם; | `בּוֹאִי שִׁכְבִי עִמִּי אֲחוֹתִי` (שמואל ב יג:יא) | equivalent | בשמואל האח אומר לאחות "שכבי עמי", וכאן האחות מבקשת "משכב־יחד". השורש `שכב` הוא מלתו הקבועה של הקורפוס ל־√*śī* (1.32), והוא המלה הטבעית כאן; הוא אינו מלשון ויקרא יח. מוטיב משותף, בלי מגע. |
| 8a | ná tiṣṭhanti ná ní miṣanty eté | אינם עומדים, אינם מעפעפים אֵלֶּה, | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | equivalent | השומר האלוהי שאינו נרדם. |
| 8a | ná tiṣṭhanti ná ní miṣanty eté | אינם עומדים, אינם מעפעפים אֵלֶּה, | `עֵינֵי יְהוָה הֵמָּה מְשׁוֹטְטִים בְּכָל הָאָרֶץ` (זכריה ד:י) | equivalent | עיני האל השוטטות בארץ; כאן "מרגלים" שנודדים (8b). מוטיב משותף של עין אלוהית שאינה נעצמת – בהודו ובישראל, בלי מגע. |
| 9d | yamī́r yamásya bibhr̥yād ájāmi | יָמִי תישא את הלא־אחווה של יָמָה. | `עֶרְוַת אֲחֹתוֹ גִּלָּה עֲוֹנוֹ יִשָּׂא` (ויקרא כ:יז) | equivalent | גם בתורה "נשיאת עוון" נקשרת בחיבור של אח ואחות. כאן אין עוון, אלא "לא־אחווה", והאחות מבקשת לשאת אותה בעצמה. לשון ויקרא יח–כ אינה נכתבת בשורות, רק במנגנון; מוטיב משותף, בלי מגע. |
| 10a | ā́ ghā tā́ gachān úttarā yugā́ni | יבואו, אכן, העידנים המאוחרים ההם | `וְהָיָה בְּאַחֲרִית הַיָּמִים` (ישעיהו ב:ב) | equivalent | לשון העתיד הרחוק; כאן הוא עתיד של התנוונות ולא של ישועה. |
| 10a | ā́ ghā tā́ gachān úttarā yugā́ni | יבואו, אכן, העידנים המאוחרים ההם | `וְהָיָה בְּאַחֲרִית הַיָּמִים` (ישעיהו ב:ב) | divergence | בהודו המאוחרת "העידנים" (*yuga*) יהיו ארבעה, והאחרון, הקלי־יוגה, יהיה זמן של התמוטטות המוסר; כאן *yugá* הוא עוד "דור, עידן" פשוט. |
| 10b | yátra jāmáyaḥ kr̥ṇávann ájāmi | שבהם בני־אחווה יעשו לא־אחווה. | `עֶרְוַת אֲחוֹתְךָ בַת אָבִיךָ אוֹ בַת אִמֶּךָ … לֹא תְגַלֶּה עֶרְוָתָן` (ויקרא יח:ט) | equivalent | האיסור של אח ואחות. במקרא האיסור הוא חוק לעם; כאן הוא תחושה של "מה שאינו של אחים", ונבואה שיופר. |
| 10b | yátra jāmáyaḥ kr̥ṇávann ájāmi | שבהם בני־אחווה יעשו לא־אחווה. | `וְגַם אָמְנָה אֲחֹתִי בַת אָבִי הִוא אַךְ לֹא בַת אִמִּי; וַתְּהִי לִי לְאִשָּׁה` (בראשית כ:יב) | divergence | אברהם ושרה, אחים מן האב, הם בני זוג בלי גינוי; ויקרא יח אוסר זאת. גם בישראל "לפני החוק" יש זמן שבו האיסור עוד לא חל. |
| 10c | úpa barbr̥hi vr̥ṣabhā́ya bāhúm | הציעי את זרועך לפר, | `שְׂמֹאלוֹ תַּחַת לְרֹאשִׁי וִימִינוֹ תְּחַבְּקֵנִי` (שיר השירים ב:ו) | equivalent | הזרוע כר לראש האהוב. מוטיב משותף של שירת אהבה, בלי מגע. |
| 11b | kím u svásā yán nírr̥tir nigáchāt | ומה (תהיה) אחות, אם האבדון יבוא (עליה)? | `אֲבַדּוֹן וָמָוֶת אָמְרוּ` (איוב כח:כב) | equivalent | אבדון כישות מואנשת לצד המוות; נִירְרִיטִי היא אלת ההתפוררות של הוודה. |
| 11b | kím u svásā yán nírr̥tir nigáchāt | ומה (תהיה) אחות, אם האבדון יבוא (עליה)? | `יְבָמָהּ יָבֹא עָלֶיהָ` (דברים כה:ה) | equivalent | `בָּא עַל` הוא לשון מקראית לחיבור המיני (ושם – כדי להקים זרע לאח המת). |
| 12b | pāpám āhur yáḥ svásāraṃ nigáchāt | רע, אומרים, מי שבא על אחותו. | `אַל אָחִי אַל תְּעַנֵּנִי כִּי לֹא יֵעָשֶׂה כֵן בְּיִשְׂרָאֵל: אַל תַּעֲשֵׂה אֶת הַנְּבָלָה הַזֹּאת` (שמואל ב יג:יב) | equivalent | בשמואל האחות מסרבת בשם מה ש"לא ייעשה", ובוודה האח מסרב בשם מה ש"אומרים". שני הסירובים נשענים על דעת הקהל ועל המנהג. |
| 12b | pāpám āhur yáḥ svásāraṃ nigáchāt | רע, אומרים, מי שבא על אחותו. | `וְאִישׁ אֲשֶׁר יִקַּח אֶת אֲחֹתוֹ … חֶסֶד הוּא` (ויקרא כ:יז) | equivalent | התורה קוראת לזה `חֶסֶד` (חרפה), והוודה – `pāpá` (רע). מוטיב משותף, בלי מגע. |
| 13d | pári ṣvajāte líbujeva vr̥kṣám | תחבק, כמטפס את העץ. | `וִימִינוֹ תְּחַבְּקֵנִי` (שיר השירים ב:ו) | equivalent | החיבוק של האוהבים. |
| 14d | -ádhā kr̥ṇuṣva saṃvídaṃ súbhadrām | ואז עשי (עמו) הסכמה טובה מאוד. | `וְהִנֵּה טוֹב מְאֹד` (בראשית א:לא) | divergence | הקשר הוא דרך המלה העברית בלבד (*su-bhadrá* "טוב מאוד" הוא תרגום מילולי); בבראשית "טוב מאוד" הוא העולם כולו, כאן – זיווג עם אחר. נרשם כדי שהקורא לא יחשוב שזה הד מכוון. |

### Parallels index (RV10.14)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | pareyivā́ṃsam praváto mahī́r ánu | את מי שהלך למרחוק לאורך המורדות הגדולים, | `אָנֹכִי הֹלֵךְ בְּדֶרֶךְ כָּל הָאָרֶץ` (מלכים א ב:ב) | equivalent | "ללכת" כלשון נקייה למוות, בשתי התרבויות; *parā́ √i* "להסתלק" הוא הפועל הוודי הרגיל למות. מוטיב משותף, בלי מגע. |
| 1b | bahúbhyaḥ pánthām anupaspaśānám | שריגל את הדרך בשביל רבים, | `וַיִּהְיוּ כָּל יְמֵי אָדָם אֲשֶׁר חַי תְּשַׁע מֵאוֹת שָׁנָה וּשְׁלֹשִׁים שָׁנָה; וַיָּמֹת` (בראשית ה:ה) | divergence | גם בבראשית ה האדם הראשון הוא הראשון ב"ויָּמת" של כל השושלת; אבל בבראשית מותו הוא סוף, ובוודה מותו של יָמָה הוא גילוי של דרך, שכל השאר יילכו בה אחריו. |
| 1b | bahúbhyaḥ pánthām anupaspaśānám | שריגל את הדרך בשביל רבים, | `וַיָּקָם קַיִן אֶל הֶבֶל אָחִיו וַיַּהַרְגֵהוּ` (בראשית ד:ח) | divergence | המת הראשון במקרא הוא הבל, נרצח; יָמָה מת בלי שיסופר איך, ונעשה מלך. |
| 1c | vaivasvatáṃ saṃgámanaṃ jánānāṃ | את בן וִיוַסְוַנְט, מאחד האנשים, | `וַיִּגְוַע וַיָּמָת אַבְרָהָם … וַיֵּאָסֶף אֶל עַמָּיו` (בראשית כה:ח) | equivalent | המת "נאסף" אל קרוביו המתים; כאן יָמָה הוא מי שמאחד אותם. מוטיב משותף (המוות כהתאחדות עם הקרובים), בלי מגע. |
| 2b | naíṣā́ gávyūtir ápabhartavā́ u | המרעה הזה אינו (מקום) שיילקח מאיתנו, | — | divergence | עולם המתים של בבל: `אשר שם עפר – מזונם, ולחמם – טיט` (גילגמש VII 188, `../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/`; ירידת אִשְׁתַּר 8, `../../העולם-התחתון/1-ירידת-אישתר/`) – שם המתים אוכלים עפר בבית חשוך; כאן מחכה להם מרעה שאיש לא ייקח. |
| 2c | yátrā naḥ pū́rve pitáraḥ pareyúr | שבו הלכו למרחוק אבותינו הקדמונים; | `וְאַתָּה תָּבוֹא אֶל אֲבֹתֶיךָ בְּשָׁלוֹם` (בראשית טו:טו) | equivalent | המת הולך אל האבות שקדמו לו. מוטיב משותף, בלי מגע. |
| 2d | enā́ jajñānā́ḥ pathyā̀ ánu svā́ḥ | בה (הולכים) הנולדים, איש לאורך שביליו. | `כִּי מוֹת נָמוּת וְכַמַּיִם הַנִּגָּרִים אַרְצָה אֲשֶׁר לֹא יֵאָסֵפוּ` (שמואל ב יד:יד) | equivalent | כל הנולדים מתים. |
| 2d | enā́ jajñānā́ḥ pathyā̀ ánu svā́ḥ | בה (הולכים) הנולדים, איש לאורך שביליו. | `כִּי מוֹת נָמוּת וְכַמַּיִם הַנִּגָּרִים אַרְצָה אֲשֶׁר לֹא יֵאָסֵפוּ` (שמואל ב יד:יד) | divergence | במקרא זה משל של אבדן; כאן זו דרך משותפת. |
| 8a | sáṃ gachasva pitŕ̥bhiḥ sáṃ yaména- | התאחד עם האבות, התאחד עם יָמָה, | `וְנֶאֱסַפְתָּ אֶל עַמֶּיךָ גַּם אָתָּה כַּאֲשֶׁר נֶאֱסַף אַהֲרֹן אָחִיךָ` (במדבר כז:יג) | equivalent | המת מתאחד עם קרוביו המתים. |
| 8a | sáṃ gachasva pitŕ̥bhiḥ sáṃ yaména- | התאחד עם האבות, התאחד עם יָמָה, | `וְנֶאֱסַפְתָּ אֶל עַמֶּיךָ גַּם אָתָּה כַּאֲשֶׁר נֶאֱסַף אַהֲרֹן אָחִיךָ` (במדבר כז:יג) | divergence | במקרא אין מלך מתים, ו"עמיו" אינם מקבלים מנחה; כאן יָמָה מחכה כמארח. |
| 8b | -iṣṭāpūrténa paramé vyòman | עם הזבחים והנדבות, בַּמָּרוֹם הָעֶלְיוֹן. | `תָּבוֹא עַד-דּוֹר אֲבוֹתָיו; עַד-נֵצַח לֹא יִרְאוּ-אוֹר` (תהלים מט:כ) | divergence | גם במזמור המקראי המת "בא אל דור אבותיו", אבל שם הם לא יראו אור; כאן המפגש עם האבות הוא "במרום העליון". |
| 8b | -iṣṭāpūrténa paramé vyòman | עם הזבחים והנדבות, בַּמָּרוֹם הָעֶלְיוֹן. | `תָּבוֹא עַד-דּוֹר אֲבוֹתָיו; עַד-נֵצַח לֹא יִרְאוּ-אוֹר` (תהלים מט:כ) | divergence | העולם התחתון של מסופוטמיה: `ואור אינם רואים, בעלטה יושבים` (גילגמש VII 190) – המתים של בבל יושבים בחושך מתחת לארץ, והמתים של הוודה עולים אל המרום. הוודה לא הכירה את ישראל ולא את בבל: אלה שתי תשובות שונות לשאלה אחת. |
| 8c | hitvā́yāvadyám púnar ástam éhi | אחרי שתעזוב את הפגם, בוא שוב הביתה; | `כִּי הֹלֵךְ הָאָדָם אֶל בֵּית עוֹלָמוֹ` (קהלת יב:ה) | equivalent | המוות כהליכה אל "בית" |
| 8c | hitvā́yāvadyám púnar ástam éhi | אחרי שתעזוב את הפגם, בוא שוב הביתה; | `כִּי הֹלֵךְ הָאָדָם אֶל בֵּית עוֹלָמוֹ` (קהלת יב:ה) | divergence | בקהלת זה הקבר, והמספדים סובבים בשוק; כאן "שוב הביתה" – חזרה אל בית שהיה לו מתמיד. |
| 8d | sáṃ gachasva tanvā̀ suvárcāḥ | התאחד עם גוף, רב־זוהר. | `וְיָשֹׁב הֶעָפָר עַל הָאָרֶץ כְּשֶׁהָיָה` (קהלת יב:ז) | divergence | בקהלת הגוף חוזר לעפר; כאן המת מקבל גוף, שלם וזוהר, בעולם האבות. |
| 8d | sáṃ gachasva tanvā̀ suvárcāḥ | התאחד עם גוף, רב־זוהר. | `יִחְיוּ מֵתֶיךָ נְבֵלָתִי יְקוּמוּן` (ישעיהו כו:יט) | absent | תחיית הגוף במקרא היא תקווה אחרית־ימית, ולא דבר שקורה מיד אחרי המוות. |
| 10a | áti drava sārameyaú śvā́nau | רוץ על פני שני הכלבים, בני סַרַמָא, | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | equivalent | שומרים על דרך: הכרובים שומרים בבראשית את הדרך אל החיים, הכלבים שומרים כאן את הדרך אל המתים. |
| 10a | áti drava sārameyaú śvā́nau | רוץ על פני שני הכלבים, בני סַרַמָא, | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | equivalent | כֶּרְבֶּרוֹס היווני, כלב השאול; ייתכן שהשמות קשורים (*śabála* ↔ Κέρβερος), והם מורשת הודו־אירופית משותפת. מוטיב משותף, בלי מגע עם ישראל. |
| 11d | svastí cāsmā anamīváṃ ca dhehi | ושים לו שלום ובלי־חולי. | `יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם` (במדבר ו:כו) | equivalent | אותו צירוף, "לשים שלום ל־", בברכת כוהנים ובוודה (*svastí … dhehi*): העברית `שים` היא המלה הקבועה של הקורפוס ל־√*dhā*. מוטיב משותף של לשון ברכה, בלי מגע. |
| 12b | yamásya dūtaú carato jánām̐ ánu | שני שליחי יָמָה נודדים בין האנשים; | `עֵינֵי יְהוָה הֵמָּה מְשׁוֹטְטִים בְּכָל הָאָרֶץ` (זכריה ד:י) | divergence | גם כאן משגיחים שעוברים בין בני האדם, אבל הם שליחי המוות: הם מסמנים את מי שימות. |
| 14d | dīrghám ā́yuḥ prá jīváse | חיים ארוכים, לחיות הלאה. | `אֹרֶךְ יָמִים אַשְׂבִּיעֵהוּ` (תהלים צא:טז) | equivalent | אריכות ימים כמתנה של האל. מוטיב משותף, בלי מגע. |

### Parallels index (RV10.15)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | úd īratām ávara út párāsaḥ- | יקומו הקרובים, יקומו הרחוקים, | `אֱלֹהִים רָאִיתִי עֹלִים מִן הָאָרֶץ` (שמואל א כח:יג) | divergence | המת "עולה" כשקוראים לו; במקרא זה מעשה אסור של בעלת אוב, בוודה – חלק מן הזבח המשפחתי. מוטיב משותף (המת נקרא לקום), בלי מגע. |
| 6d | yád va ā́gaḥ puruṣátā kárāma | על אשמה שנעשה לכם כדרך האדם. | `וְהֵמָּה כְּאָדָם עָבְרוּ בְרִית` (הושע ו:ז) | equivalent | "כאדם": החטא כחלק מטבע האדם. מוטיב משותף, בלי מגע. |
| 11c | attā́ havī́ṃṣi práyatāni barhíṣi- | אכלו את המנחות המושטות על מצע העשב, | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד); `וַיֹּאכְלוּ זִבְחֵי מֵתִים` (תהלים קו:כח) | divergence | בתורה המזון למת אסור במפורש (ובוידוי המעשרות המביא מצהיר שלא נתן ממנו למת), וגם  הוא חטא; בוודה, האכלת האבות היא חובה דתית מרכזית. |
| 11c | attā́ havī́ṃṣi práyatāni barhíṣi- | אכלו את המנחות המושטות על מצע העשב, | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד); `וַיֹּאכְלוּ זִבְחֵי מֵתִים` (תהלים קו:כח) | equivalent | `אִט האיש אשר אין לו מגיש־לחם` אוכל `גרידות, פתיתי לחם … אשר ברחוב מושלכים` (גילגמש, אנקידו והעולם התחתון 292–293, `../../העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון/`; גילגמש XII 152–153) – גם במסופוטמיה המת תלוי במזון שצאצאיו נותנים לו. הוודה ומסופוטמיה מסכימות; ישראל אוסרת. שלוש התרבויות לא נפגשו בזה (בין הוודה לישראל אין מגע). |
| 12b | -ávāḍ ḍhavyā́ni surabhī́ṇi kr̥tvī́ | הובלת את המנחות, אחרי שעשית אותן ריחניות, | `וַיָּרַח יְהוָה אֶת רֵיחַ הַנִּיחֹחַ` (בראשית ח:כא) | equivalent | ריח המנחה השרופה כדרך שבה היא מגיעה אל מקבלה. `נִיחוֹחַ` שמור בקורפוס, ו*surabhí* הוא `ריחני` בלבד. מוטיב משותף, בלי מגע. |
| 13a | yé cehá pitáro yé ca néhá | האבות אשר כאן ואשר אינם כאן, | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ עֹמֵד הַיּוֹם לִפְנֵי יְהוָה אֱלֹהֵינוּ; וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | equivalent | אותה נוסחה של "אשר כאן ואשר אינו כאן", הכוללת את כל הדורות |
| 13a | yé cehá pitáro yé ca néhá | האבות אשר כאן ואשר אינם כאן, | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ עֹמֵד הַיּוֹם לִפְנֵי יְהוָה אֱלֹהֵינוּ; וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | divergence | בדברים "אשר איננו פה" הם הדורות הבאים, שהברית חלה עליהם; בוודה הם האבות המתים, שהמנחה מגיעה אליהם. נוסחה משותפת של שלמות, בלי מגע. |
| 13b | yā́ṃś ca vidmá yā́m̐ u ca ná pravidmá | ואשר אותם אנו יודעים, ואשר אותם איננו יודעים היטב – | `כִּי אַבְרָהָם לֹא יְדָעָנוּ וְיִשְׂרָאֵל לֹא יַכִּירָנוּ` (ישעיהו סג:טז) | divergence | בישעיהו האבות המתים אינם מכירים את הצאצאים; בוודה הצאצאים אינם מכירים את כל אבותיהם, ואַגְנִי יודע (13c). מוטיב משותף (גבול הידיעה בין המתים לחיים), בכיוונים הפוכים, בלי מגע. |
| 14a | yé agnidagdhā́ yé ánagnidagdhāḥ- | אשר נשרפו באַגְנִי ואשר לא נשרפו באַגְנִי, | — | divergence | `"את אשר באש נשרף – ראית?" "לא ראיתי.` / `אִטּוֹ איננו; עשנו אל השמים עלה."` (גילגמש, אנקידו והעולם התחתון 302–303, `../../העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון/`) – במסורת השומרית מי שנשרף אין לו רוח בעולם התחתון – השריפה היא כליון; בוודה גם מי שנשרף וגם מי שלא נשרף שמחים "בתוך השמים" (14b), והשריפה היא הדרך המועדפת אל האבות. |
| 14a | yé agnidagdhā́ yé ánagnidagdhāḥ- | אשר נשרפו באַגְנִי ואשר לא נשרפו באַגְנִי, | `וַיִּקְחוּ אֶת גְּוִיַּת שָׁאוּל … וַיִּשְׂרְפוּ אֹתָם שָׁם` (שמואל א לא:יב) | divergence | במקרא שריפת המת נדירה, ונעשית בשעת חירום. שלוש תפיסות שונות של השריפה, בתרבויות שלא נפגשו (הוודה וישראל). |
| 14b | mádhye diváḥ svadháyā mādáyante | בתוך השמים מתבסמים בסְוַדְהָא – | — | divergence | `ואור אינם רואים, בעלטה יושבים` (גילגמש VII 190, `../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/`; וכן ירידת אִשְׁתַּר 9) – המתים של בבל בחושך, של הוודה "בתוך השמים". מוטיב משותף (מקום למתים), בלי מגע. |

### Parallels index (RV10.16)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | maínam agne ví daho mā́bhí śoco | אל תשרוף אותו כליל, אַגְנִי, אל תבער עליו; | `וַתֵּצֵא אֵשׁ מִלִּפְנֵי יְהוָה וַתֹּאכַל אוֹתָם; וַיָּמֻתוּ לִפְנֵי יְהוָה` (ויקרא י:ב) | divergence | במקרא האש האלוהית שאוכלת אדם היא עונש; בוודה אש השריפה היא אל שמתבקש להוביל את המת בעדינות. |
| 1a | maínam agne ví daho mā́bhí śoco | אל תשרוף אותו כליל, אַגְנִי, אל תבער עליו; | `עַל שָׂרְפוֹ עַצְמוֹת מֶלֶךְ אֱדוֹם לַשִּׂיד` (עמוס ב:א) | divergence | בישראל שריפת עצמות המת היא חילול; בוודה היא דרך המת אל האבות. מוטיב משותף (המת והאש), בלי מגע. |
| 3a | sū́ryaṃ cákṣur gachatu vā́tam ātmā́ | העין תלך אל השמש, הנפש – אל הרוח; | `וְיָשֹׁב הֶעָפָר עַל הָאָרֶץ כְּשֶׁהָיָה; וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים אֲשֶׁר נְתָנָהּ` (קהלת יב:ז) | divergence | גם בקהלת האדם מתפרק ליסודותיו, וכל חלק חוזר למקורו: העפר לארץ, הרוח אל האלוהים. בוודה החלוקה מפורטת יותר (העין לשמש, הנפש לרוח, הגוף לצמחים), והיא חלק מן הטקס עצמו; בקהלת היא מסקנה של חכמה. |
| 3a | sū́ryaṃ cákṣur gachatu vā́tam ātmā́ | העין תלך אל השמש, הנפש – אל הרוח; | `תֹּסֵף רוּחָם יִגְוָעוּן; וְאֶל-עֲפָרָם יְשׁוּבוּן` (תהלים קד:כט) | equivalent | הנשימה נלקחת, הגוף חוזר. מוטיב משותף, בלי מגע. |
| 3d | óṣadhīṣu práti tiṣṭhā śárīraiḥ | עמוד איתן בצמחים, בגוויותיך. | `וְאָדָם עַל-עָפָר יָשׁוּב` (איוב לד:טו) | divergence | במקרא הגוף שב אל העפר; בוודה הוא נעשה צמחים. `עָפָר` אינו בשורה (*pāṃsú* בלבד). מוטיב משותף (הגוף חוזר לארץ), בלי מגע. |
| 4a | ajó bhāgás tápasā táṃ tapasva | התיש – הוא החלק (שלך); בלהט לַהֵט אותו; | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה; וְשִׁלַּח אֶת הַשָּׂעִיר בַּמִּדְבָּר` (ויקרא טז:כב) | equivalent | בעל חיים אחד מקבל על עצמו מה שהיה צריך לפגוע באדם |
| 4a | ajó bhāgás tápasā táṃ tapasva | התיש – הוא החלק (שלך); בלהט לַהֵט אותו; | `וְהִנֵּה אַיִל אַחַר נֶאֱחַז בַּסְּבַךְ בְּקַרְנָיו` (בראשית כב:יג) | divergence | השעיר המשתלח נושא עוונות אל המדבר, התיש הוודי הוא "החלק" שהאש אוכלת במקום המת (כדי שלא תאכל אותו "כליל"). ראו גם  – תחליף בעל חיים לאדם, נושא הפרויקט "העקדה" בקורפוס הזה. מוטיב משותף, בלי מגע. |
| 4d | tā́bhir vahainaṃ sukŕ̥tām ulokám | בהם הובל אותו אל עולם עושי־הטוב. | `תָּבוֹא עַד-דּוֹר אֲבוֹתָיו; עַד-נֵצַח לֹא יִרְאוּ-אוֹר` (תהלים מט:כ) | divergence | במקרא אין "עולם של עושי טוב" למתים; בוודה מעשי האדם קובעים את מקומו (גם 10.14.8b). |
| 5d | sáṃ gachatāṃ tanvā̀ jātavedaḥ | יתאחד עם גוף, יודע־הנולדים. | `וְנָתַתִּי עֲלֵיכֶם גִּידִים וְהַעֲלֵתִי עֲלֵיכֶם בָּשָׂר וְקָרַמְתִּי עֲלֵיכֶם עוֹר` (יחזקאל לז:ו) | divergence | גוף חדש למת; ביחזקאל זו תחייה של עם, באחרית; בוודה – דבר שקורה לכל מת, מיד אחרי השריפה. |
| 7b | sám prórṇuṣva pī́vasā médasā ca | והתכס כולך בשומן ובחֵלֶב, | `אֶת הַחֵלֶב הַמְכַסֶּה אֶת הַקֶּרֶב` (ויקרא ג:ג) | equivalent | החלב ש"מכסה" ועולה לאש; כאן החלב מכסה את המת. מוטיב משותף של חלק השומן שהאש מקבלת, בלי מגע. |
| 9a | kravyā́dam agním prá hiṇomi dūráṃ | את אַגְנִי אוכל־הבשר אני משגר הרחק; | `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` (דברים ד:כד) | divergence | במקרא "אש אוכלה" היא תואר של האל עצמו; בוודה האש "אוכלת הבשר" היא צד אחד של אַגְנִי, צד מסוכן, שמשלחים אותו הרחק. מוטיב משותף (האש האוכלת), בלי מגע. |
| 9b | yamárājño gachatu ripravāháḥ | ילך אל אלה שיָמָה מלכם, נושא הזוהמה; | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) | equivalent | "נושא" שמוליך את הטומאה הרחק מן הקהל. מוטיב משותף של הרחקת הטומאה, בלי מגע. |

### Parallels index (RV10.17)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | tváṣṭā duhitré vahatúṃ kr̥ṇoti- | "תְּוַשְׁטָר עושה חתונה לבתו!" – | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה; וַיְבִאֶהָ אֶל הָאָדָם` (בראשית ב:כב) | divergence | גם בבראשית האישה הראשונה "מובאת" אל האיש בידי יוצר; כאן היוצר (תְּוַשְׁטָר) משיא את בתו בחתונה גדולה. מוטיב משותף, בלי מגע. |
| 2b | kr̥tvī́ sávarṇām adadur vívasvate | אחרי שעשו (אחת) שוות־מראה, נתנו (אותה) לוִיוַסְוַנְט. | `וַיְהִי בַבֹּקֶר וְהִנֵּה הִוא לֵאָה; וַיֹּאמֶר אֶל לָבָן מַה זֹּאת עָשִׂיתָ לִּי הֲלֹא בְרָחֵל עָבַדְתִּי עִמָּךְ וְלָמָּה רִמִּיתָנִי` (בראשית כט:כה) | equivalent | כלה מוחלפת באחרת בלי ידיעת החתן |
| 2b | kr̥tvī́ sávarṇām adadur vívasvate | אחרי שעשו (אחת) שוות־מראה, נתנו (אותה) לוִיוַסְוַנְט. | `וַיְהִי בַבֹּקֶר וְהִנֵּה הִוא לֵאָה; וַיֹּאמֶר אֶל לָבָן מַה זֹּאת עָשִׂיתָ לִּי הֲלֹא בְרָחֵל עָבַדְתִּי עִמָּךְ וְלָמָּה רִמִּיתָנִי` (בראשית כט:כה) | divergence | בבראשית התחליף היא אחות אמיתית, והמרמה אנושית; כאן התחליף "נעשה" בידי האלים, והאישה האמיתית אלה. מוטיב משותף (הכלה המוחלפת), בלי מגע. |
| 2d | ájahād u dvā́ mithunā́ saraṇyū́ḥ | ועזבה שני זוגות – סַרַנְיוּ. | `וַיִּמְלְאוּ יָמֶיהָ לָלֶדֶת; וְהִנֵּה תוֹמִם בְּבִטְנָהּ` (בראשית כה:כד) | equivalent | לידת תאומים כראשית של שושלת. |
| 2d | ájahād u dvā́ mithunā́ saraṇyū́ḥ | ועזבה שני זוגות – סַרַנְיוּ. | `וַיִּמְלְאוּ יָמֶיהָ לָלֶדֶת; וְהִנֵּה תוֹמִם בְּבִטְנָהּ` (בראשית כה:כד) | absent | במקרא אין אם שעוזבת את ילדיה התאומים; האבות של ישראל נולדים לאמהות שנשארות. |
| 3b | ánaṣṭapaśur bhúvanasya gopā́ḥ | שבהמתו אינה אובדת, רועה ההוויות; | `יְהוָה רֹעִי לֹא אֶחְסָר` (תהלים כג:א); `גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע כִּי-אַתָּה עִמָּדִי` (תהלים כג:ד) | equivalent | ו – האל כרועה, שמלווה גם בדרך המסוכנת |
| 3b | ánaṣṭapaśur bhúvanasya gopā́ḥ | שבהמתו אינה אובדת, רועה ההוויות; | `יְהוָה רֹעִי לֹא אֶחְסָר` (תהלים כג:א); `גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע כִּי-אַתָּה עִמָּדִי` (תהלים כג:ד) | divergence | בתהלים הרועה מלווה את החי בגיא; פּוּשָׁן הרועה מוביל את המת לסוף דרכו, ו"אף בהמה שלו אינה אובדת" – אף מת אינו הולך לאיבוד. מוטיב משותף, בלי מגע. |
| 10a | ā́po asmā́n mātáraḥ śundhayantu | המים, האמהות, ינקו אותנו, | `וְזָרַקְתִּי עֲלֵיכֶם מַיִם טְהוֹרִים וּטְהַרְתֶּם` (יחזקאל לו:כה) | equivalent | המים כמטהרים מטומאה |
| 10a | ā́po asmā́n mātáraḥ śundhayantu | המים, האמהות, ינקו אותנו, | `וְזָרַקְתִּי עֲלֵיכֶם מַיִם טְהוֹרִים וּטְהַרְתֶּם` (יחזקאל לו:כה) | divergence | ביחזקאל האל מזה מים על העם; בוודה המים עצמם הם אלות ("האמהות") שמטהרות. מוטיב משותף, בלי מגע. |
| 10d | úd íd ābhyaḥ śúcir ā́ pūtá emi | מהן אני עולה, צח, מטוהר. | `הֶרֶבה (הֶרֶב) כַּבְּסֵנִי מֵעֲוֹנִי; וּמֵחַטָּאתִי טַהֲרֵנִי` (תהלים נא:ד) | equivalent | הבקשה להיטהר |
| 10d | úd íd ābhyaḥ śúcir ā́ pūtá emi | מהן אני עולה, צח, מטוהר. | `הֶרֶבה (הֶרֶב) כַּבְּסֵנִי מֵעֲוֹנִי; וּמֵחַטָּאתִי טַהֲרֵנִי` (תהלים נא:ד) | divergence | בתהלים הטומאה היא החטא, כאן היא מגע המוות. |

### Parallels index (RV10.18)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | páram mr̥tyo ánu párehi pánthāṃ | לך למרחוק, מָוֶת, לאורך הדרך הרחוקה, | `אֱהִי דְבָרֶיךָ מָוֶת אֱהִי קָטָבְךָ שְׁאוֹל` (הושע יג:יד); `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | equivalent | פנייה ישירה אל המוות בגוף שני; גם . |
| 1a | páram mr̥tyo ánu párehi pánthāṃ | לך למרחוק, מָוֶת, לאורך הדרך הרחוקה, | `אֱהִי דְבָרֶיךָ מָוֶת אֱהִי קָטָבְךָ שְׁאוֹל` (הושע יג:יד); `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | divergence | הושע וישעיהו מדברים על ניצחון סופי על המוות; כאן הוא רק מתבקש ללכת בדרכו ולא לפגוע עכשיו. מוטיב משותף (המוות כדמות שאפשר לדבר אליה), בלי מגע. |
| 1d | mā́ naḥ prajā́ṃ rīriṣo mótá vīrā́n | אל תזיק לצאצאינו ולא לגיבורינו! | `כִּי עָלָה מָוֶת בְּחַלּוֹנֵינוּ בָּא בְּאַרְמְנוֹתֵינוּ לְהַכְרִית עוֹלָל מִחוּץ בַּחוּרִים מֵרְחֹבוֹת` (ירמיהו ט:כ) | equivalent | המוות כפולש שפוגע בילדים ובבחורים. מוטיב משותף, בלי מגע. |
| 2d | śuddhā́ḥ pūtā́ bhavata yajñiyāsaḥ | היו נקיים, מטוהרים, ראויי הזבח! | `הַנֹּגֵעַ בְּמֵת לְכָל נֶפֶשׁ אָדָם וְטָמֵא שִׁבְעַת יָמִים` (במדבר יט:יא) | equivalent | הטומאה של מגע המת והצורך להיטהר, בתורה ובוודה. |
| 2d | śuddhā́ḥ pūtā́ bhavata yajñiyāsaḥ | היו נקיים, מטוהרים, ראויי הזבח! | `הַנֹּגֵעַ בְּמֵת לְכָל נֶפֶשׁ אָדָם וְטָמֵא שִׁבְעַת יָמִים` (במדבר יט:יא) | divergence | בתורה הטהרה היא במי חטאת אחרי שבעה ימים; כאן היא חלק מטקס החזרה מן המוקד, והמטוהרים נקראים מיד "ראויי הזבח". מוטיב משותף, בלי מגע. |
| 3a | imé jīvā́ ví mr̥taír ā́vavr̥trann | אֵלֶּה, החיים, פנו ונפרדו מן הַמֵּתִים; | `לֹא-אָמוּת כִּי-אֶחְיֶה` (תהלים קיח:יז) | divergence | ההבחנה החדה בין החיים למתים. בישראל "המתים לא יהללו יה" (תהלים קטו:יז); כאן המתים מקבלים מזון ומחכים במרום – אבל גם כאן החיים מתרחקים מהם בכוונה. |
| 3c | prā́ñco agāma nr̥táye hásāya | הלכנו קדימה – אל הריקוד, אל הצחוק, | `עֵת לִבְכּוֹת וְעֵת לִשְׂחוֹק עֵת סְפוֹד וְעֵת רְקוֹד` (קהלת ג:ד) | equivalent | הצחוק והריקוד כצד השני של האבל. כאן המעבר מזה לזה הוא שלב בטקס הלוויה עצמו: החיים חוזרים לחיים, בכוונה, ביום הלוויה. מוטיב משותף, בלי מגע. |
| 4a | imáṃ jīvébhyaḥ paridhíṃ dadhāmi | את הגדר הזאת אני מעמיד לחיים, | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה עַל קְבֻרָתָהּ` (בראשית לה:כ) | equivalent | אבן שמוצבת במקום הקבורה |
| 4a | imáṃ jīvébhyaḥ paridhíṃ dadhāmi | את הגדר הזאת אני מעמיד לחיים, | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה עַל קְבֻרָתָהּ` (בראשית לה:כ) | divergence | המצבה של רחל מסמנת זיכרון, האבן כאן מסמנת גבול: שהמוות לא יעבור ממנה הלאה. |
| 4c | śatáṃ jīvantu śarádaḥ purūcī́r | יחיו מאה סתווים רבים, | `יְמֵי-שְׁנוֹתֵינוּ בָהֶם שִׁבְעִים שָׁנָה וְאִם בִּגְבוּרֹת שְׁמוֹנִים שָׁנָה` (תהלים צ:י) | divergence | בוודה מספר השנים המיוחל הוא מאה, "מאה סתווים"; בתהלים שבעים או שמונים. המספר העגול של חיים מלאים שונה בין התרבויות. |
| 6a | ā́ rohatā́yur jarásaṃ vr̥ṇānā́ḥ- | עלו אל החיים, בוחרים בזקנה, | `וַיִּגְוַע וַיָּמָת אַבְרָהָם בְּשֵׂיבָה טוֹבָה זָקֵן וְשָׂבֵעַ` (בראשית כה:ח) | equivalent | הזקנה כמוות הרצוי. מוטיב משותף, בלי מגע. |
| 7c | anaśrávo 'namīvā́ḥ surátnāḥ- | בלי דמעות, בלי חולי, רבות־האוצרות, | `וּמָחָה אֲדֹנָי יְהוִה דִּמְעָה מֵעַל כָּל פָּנִים` (ישעיהו כה:ח) | equivalent | "בלי דמעות" אחרי המוות |
| 7c | anaśrávo 'namīvā́ḥ surátnāḥ- | בלי דמעות, בלי חולי, רבות־האוצרות, | `וּמָחָה אֲדֹנָי יְהוִה דִּמְעָה מֵעַל כָּל פָּנִים` (ישעיהו כה:ח) | divergence | בישעיהו זו הבטחה לאחרית, כאן זה ציווי לנשים ביום הלוויה עצמו. |
| 8a | úd īrṣva nāry abhí jīvalokáṃ | קומי, אישה, אל עולם החיים! | `כִּי אֶל אֲשֶׁר תֵּלְכִי אֵלֵךְ` (רות א:טז) | equivalent | גם רות היא אלמנה שבוחרת בחיים ובהמשך |
| 8a | úd īrṣva nāry abhí jīvalokáṃ | קומי, אישה, אל עולם החיים! | `כִּי אֶל אֲשֶׁר תֵּלְכִי אֵלֵךְ` (רות א:טז) | divergence | רות הולכת אחרי חמותה, האלמנה הוודית חוזרת אל קהילת החיים בציווי הכוהן. |
| 8a | úd īrṣva nāry abhí jīvalokáṃ | קומי, אישה, אל עולם החיים! | `וַתָּסַר בִּגְדֵי אַלְמְנוּתָהּ מֵעָלֶיהָ` (בראשית לח:יד) | equivalent | גם תמר קמה מאלמנותה. מוטיב משותף, בלי מגע. |
| 8c | hastagrābhásya didhiṣós távedám | של האוחז בידך, המבקש אותך – שלך הדבר הזה: | `יְבָמָהּ יָבֹא עָלֶיהָ וּלְקָחָהּ לוֹ לְאִשָּׁה` (דברים כה:ה) | equivalent | לפי קריאה אחת (גלדנר), "האוחז בידך" הוא אחי המת, שנושא את האלמנה; זו קרבה למוסד הייבום. מוטיב משותף, בלי מגע. |
| 9a | dhánur hástād ādádāno mr̥tásya- | לוקח את הקשת מיד הַמֵּת – | `קֶשֶׁת יְהוֹנָתָן לֹא נָשׂוֹג אָחוֹר` (שמואל ב א:כב) | equivalent | הקשת של לוחם מת כסמל של גבורתו |
| 9a | dhánur hástād ādádāno mr̥tásya- | לוקח את הקשת מיד הַמֵּת – | `קֶשֶׁת יְהוֹנָתָן לֹא נָשׂוֹג אָחוֹר` (שמואל ב א:כב) | divergence | בקינת דוד הקשת נשארת בזיכרון, כאן היא עוברת ליד החי ונושאת את הכוח הלאה. |
| 10a | úpa sarpa mātáram bhū́mim etā́m | זחל אל האם הזאת, האדמה, | `עַד שׁוּבְךָ אֶל הָאֲדָמָה כִּי מִמֶּנָּה לֻקָּחְתָּ` (בראשית ג:יט) | equivalent | המת חוזר אל האדמה; *bhū́mi* היא באמת המלה הטבעית ל"אדמה", והקשר גלוי. |
| 10a | úpa sarpa mātáram bhū́mim etā́m | זחל אל האם הזאת, האדמה, | `עַד שׁוּבְךָ אֶל הָאֲדָמָה כִּי מִמֶּנָּה לֻקָּחְתָּ` (בראשית ג:יט) | divergence | בבראשית החזרה היא עונש ("כי עפר אתה"), והאדמה היא חומר; כאן האדמה היא אם, והמת "זוחל" אליה כתינוק. |
| 10a | úpa sarpa mātáram bhū́mim etā́m | זחל אל האם הזאת, האדמה, | `עָרֹם יָצָתִי מִבֶּטֶן אִמִּי וְעָרֹם אָשׁוּב שָׁמָּה` (איוב א:כא) | equivalent | האדמה כבטן האם שהאדם חוזר אליה: הקרבה הגדולה ביותר לשורה הוודית במקרא. מוטיב משותף, בלי מגע. |
| 11a | úc chvañcasva pr̥thivi mā́ ní bādhathāḥ | התרוממי, ארץ, אל תלחצי (עליו), | `שְׁאוֹל מִתַּחַת רָגְזָה לְךָ לִקְרַאת בּוֹאֶךָ` (ישעיהו יד:ט) | divergence | גם במקרא עולם המתים "מתעורר" לקראת הבא, אבל בלעג; כאן האדמה מתבקשת לקבל אותו בעדינות. `שְׁאוֹל` שמור ואינו נכתב בשורה. |
| 11c | mātā́ putráṃ yáthā sicā́- | כאם את בנה בשולי שמלתה | `וּפָרַשְׂתָּ כְנָפֶךָ עַל אֲמָתְךָ` (רות ג:ט) | equivalent | כיסוי בכנף הבגד כמחווה של הגנה וקרבה. |
| 11c | mātā́ putráṃ yáthā sicā́- | כאם את בנה בשולי שמלתה | `רֻקַּמְתִּי בְּתַחְתִּיּוֹת אָרֶץ` (תהלים קלט:טו) | equivalent | הארץ כרחם: במזמור המקראי האדם "נרקם" בתחתיות הארץ לפני לידתו, ובוודה הוא חוזר אליה. מוטיב משותף (הארץ כאם), בלי מגע. |
| 12c | té gr̥hā́so ghr̥taścúto bhavantu | הבתים ההם יהיו נוטפי חמאה, | — | divergence | `אשר שם עפר – מזונם, ולחמם – טיט` (גילגמש VII 188, `../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/`) – בבית המתים של בבל המזון הוא עפר; בבית המתים הוודי הבתים "נוטפי חמאה". מוטיב משותף (המת זקוק למזון), שתי תמונות הפוכות. |
| 13b | -imáṃ logáṃ nidádhan mó aháṃ riṣam | בהניחי את הרגב הזה; ואני – אל אינזק. | `מָתְקוּ-לוֹ רִגְבֵי-נָחַל` (איוב כא:לג) | equivalent | רגבי האדמה שמעל המת, שהם "מתוקים" לו; בוודה הרגב מונח בזהירות, ושני המקורות רואים בו מגע אחרון עם המת. מוטיב משותף, בלי מגע. |
| 13c | etā́ṃ sthū́ṇām pitáro dhārayantu te- | את העמוד הזה יחזיקו לך האבות; | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה עַל קְבֻרָתָהּ הִוא מַצֶּבֶת קְבֻרַת רָחֵל עַד הַיּוֹם` (בראשית לה:כ) | equivalent | עמוד מעל הקבר |
| 13c | etā́ṃ sthū́ṇām pitáro dhārayantu te- | את העמוד הזה יחזיקו לך האבות; | `אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל ב יח:יח) | divergence | המצבה של רחל היא זיכרון לחיים ("עד היום"), העמוד הוודי הוא קורה של בית המת, והאבות המתים מחזיקים אותו. השוו  – אבשלום מציב לעצמו מצבה כי אין לו בן; בוודה הבן הוא שמקיים את האב (10.10.1c). |
