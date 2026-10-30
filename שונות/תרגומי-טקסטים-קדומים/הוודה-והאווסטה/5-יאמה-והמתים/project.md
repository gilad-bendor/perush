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
(generated from the הקבלה bullets by `../build_parallels_index.py`)
