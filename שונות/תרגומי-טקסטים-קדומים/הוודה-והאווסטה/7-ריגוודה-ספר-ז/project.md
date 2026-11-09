# 7-ריגוודה-ספר-ז – the Rigveda, Book 7, whole (RV 7.1–7.104)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 7's pre-set terms:
§5.5, its names: the §3.1 rows marked "(RV 7)", its formulas: §8 F6–F8); brief `../translator-brief--vedic.md`.

## Scope
The whole of Book 7 (the *maṇḍala* of the Vasiṣṭha family): **104 hymns, 841 stanzas, 3,190 pādas** (VedaWeb's Zurich
text; `python3 -I -B ../vedic_tools.py units` lists each hymn's count). Approved whole by the user on 2026-11-02 (the
rule for texts of 3,000 lines and more, guidelines §1). Round 7 run 1 (2026-11-09 →).
- One KEY per hymn, `RV7.1` … `RV7.104`; one annotated file per hymn, `annotated-RV7.<n>.rtl.md`, with its
  `translation--intro-RV7.<n>.rtl.md`; the builder makes `translation-RV7.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order). `RV7` = all of Book 7 and `RV7.1-17` = a range, in `verify`, `build`
  and `freq`.
- **RV 7.103 (the frogs)** was translated in Round 5 run 1 in project 6 (`../6-המהמר-והצפרדעים/`); it now lives here
  (moved 2026-11-09), and project 6 keeps its title and **embeds** it (`vedic_tools.py` `PROJECT_EMBEDS`): its clean
  translation is generated from this file. It is revised in the last part to the book's renderings.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_7.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert` from `rv_book_07.tei`). Line unit: the pāda (`1a`); the base has a few 5- and
  7-pāda stanzas (`e`, `f`, `g`).
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova), **Jamison's commentary on Book 7**, `../../sources/Jamison--Rigveda-commentary/VII.1–55-9-25-26.txt` and
  `VII.56–104-9-25-26.txt` (grep `VII.18` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV7.<a>-<b>`: the commonest lemmas of a range with the Hebrew already fixed for them.

## Coordinator's notes (Round 7 run 1)
- Fixed before drafting (2026-11-09): the renderings §5.5 (Book 7's key terms), the §3.1 "(RV 7)" names, the formulas
  F6 (the Vasiṣṭha refrain *yūyám pāta svastíbhiḥ sádā naḥ*, which closes 76 hymns: `אתם, שמרו עלינו בשלום תמיד`),
  F7 (7.89), F8 (7.49); the traps `מַרוּטִים` and `אָרְיָה`; the tool's Book 7 keys, `freq`, the 7.103 embedding.
- **The book's own repetitions:** 69 pādas recur (227 occurrences; the refrain F6 aside, e.g. 7.28–30.5 = one closing
  stanza, 7.39.7 = 7.40.7, 7.99.7 = 7.100.7, 7.60.12 = 7.61.7, 7.62.6 = 7.63.6, 7.84.5 = 7.85.5, 7.20.10 = 7.21.10,
  7.1.20 = 7.1.25, 7.3.10 = 7.4.10, 7.67.10 = 7.69.8). `data` shows every identical and similar line with the Hebrew
  already given: **the later copy copies the first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another; an independent fidelity reviewer reads each finished part
  beside the next translator):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 7.1–7.9 | 350 | Agni (7.2 the Āprī hymn; 7.5–6 Vaiśvānara) |
| 2 | 7.10–7.19 | 327 | Agni; Indra – **7.18 the battle of the ten kings** |
| 3 | 7.20–7.31 | 316 | Indra (7.21.5 the *śiśnadeva*) |
| 4 | 7.32–7.37 | 348 | Indra; **7.33 Vasiṣṭha's birth and the Vasiṣṭhas**; the All-Gods (7.35 the *śám* litany) |
| 5 | 7.38–7.55 | 391 | Savitṛ, Bhaga, Dadhikrā, Rudra, the Waters, the Ṛbhus, the Ādityas, Heaven and Earth, Vāstoṣpati, 7.55 the sleep charm |
| 6 | 7.56–7.63 | 299 | the Maruts; Mitra–Varuṇa, Sūrya |
| 7 | 7.64–7.74 | 344 | Mitra–Varuṇa; the Aśvins |
| 8 | 7.75–7.88 | 332 | Uṣas; Indra–Varuṇa; **Varuṇa 7.86–88** (Vasiṣṭha's sin and the god's friendship) |
| 9 | 7.89–7.97 | 246 | 7.89 (the house of clay); Vāyu, Indra–Agni, Sarasvatī, Bṛhaspati |
| 10 | 7.98–7.104 | 241 | Indra, Viṣṇu, Parjanya, the frogs (7.103: revise to the book's renderings), **7.104 against the demons** |

- **Quota stop (2026-11-09 03:10 UTC):** the 5-hour limit stopped the run (translator 6 had finished part 6 on disk); the VM restarted; resumed 03:46 UTC by the parent's RESUME (range B, a weekly warning – range B goes on).

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV7.1–7.9 (part 1: Agni; translator 1, Round 7 run 1)

### Scope
RV 7.1–7.9, 350 pādas: 7.1 (82: 1–18 virāj, 19–25 triṣṭubh), 7.2 (the Vasiṣṭha Āprī hymn, 44), 7.3 (40), 7.4 (40),
7.5 and 7.6 (Agni Vaiśvānara, 36 + 28), 7.7, 7.8 (28 each), 7.9 (24). Nine annotated files, nine intros, built
(`build RV7.1-9`); `verify RV7.1-9 --strict`: no problems; `check_bible_quotes.py` on all my files and the generated
ones: 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); Grassmann and Monier-Williams for the hard words; after drafting each hymn,
`tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary on VII.1–9 (incl. her emended
translation of VII.1 and her retranslations of 2.5, 4.7–8); her readings are adopted, with attribution, for
*atharyú* (7.1.1c, after K. Hoffmann), *sūrmī́* (7.1.3b), *níḥ* + ablative (7.1.4a), *dakṣā́yya* (7.1.2c), *ápi √vat*
(7.3.10b, after Tichy), *pariṣádyam* / *rékṇas* (7.4.7), *samanagā́* (7.9.4b: an assembly, not a battle).

### Decisions
- **Agni's epithets:** *jātávedas* `יודע־הנולדים` (renderings §3.1; the dual 7.2.7b `שני יודעי־הנולדים` with
  `[היתר שם]`); *vaiśvānará* `וַאישְׁוָנָרָה`; *hótar* `כוהן־הקריאה`; *dūtá* `שליח`, *dūtyà* `שליחות`; *gr̥hápati*
  `אדון־הבית`; *viśpáti* `אדון־השבט` (*viśā́m viśpátiḥ* `אדון־השבט של השבטים`); *sūnúḥ sáhasaḥ* `בן העוז`;
  *yáviṣṭha* `הצעיר ביותר`; *átithi* `אורח`; *pāvaká* `מטהר`; *mandrá* `משמח`; *kaví* `משורר`; *aratí* `סוכן`;
  *váhni* `המוביל`; *jārá uṣásām* `מאהב השחרים`. In the RV the fire is the god, so the plural *agnáyaḥ* is
  `אַגְנִים` (7.1.4a, 14a, 22b; the name check needs `[היתר שם]` there: the tool's word-boundary rule does not see
  `אגני` in `אגנים`).
- **Kindling and offering:** √*idh* `הצית` (*iddha* `מוצת`, *sameddhár* `מצית`, *samídh* `זרד`); √*hu* `נסך`,
  *ā́huta* `נסוך`, *āhávana* `נסך`; *havyá* `תקרובת` (the §5.5 row: it revises the 10.14–10.16 precedent `מנחה`, which
  stays *havís*'s alone); *havíṣmant* `נושא־מנחה`; *ghr̥tá* `חמאה מזוקקת`, *ghr̥tā́ñc* `עתיר־חמאה`, *ghr̥távant*
  `שופע־חמאה`; *barhís* `מצע העשב`; *adhvará* `טקס`; *adhvaryú* `כוהן־המעשה`; *brahmán* `כוהן־הנוסח`; *śamitár*
  `המשקיט`; *svā́hā* `סְוָאהָא`; *íḷā* (the libation) `מנחת־חלב`, Iḷā the goddess `אִילָה`; *yajatá* `ראוי לזבח`
  (as AB's *médhya*), *yajñíya* `ראוי הזבח`; *devayájya* `זבח־האֵלִים`; *devátāti* `קהל־האֵלִים`; *miyédha*
  `סעודת־הזבח`; *vahatú* `חתונה` (precedent).
- **Praise:** √*śaṃs* `קילס` (*praśastá* `מקולס`, *práśasti* `קילוס`, *nárāśáṃsa* `קילוס־הגברים`, translated like
  *jātávedas*), so that √*stu* `שיבח` (*stavátha* `שבחים`, *stotár* `משבח`), √*gr̥̄* `הילל` (*jaritár* `מהלל`) and
  √*śaṃs* stay three roots; √*īḍ* `התפלל אל`, *īḷénya* `ראוי־לתפילה`; √*hū* `קרא`; √*vand* `הוקיר`; *gír* `שיר`;
  *suvr̥ktí* `שזירה טובה` and √*vr̥j* `שזר` (the barhis is "twisted", the hymn "well-twisted": one root, Jamison);
  *arká* `זמר` (√*arc* `זימר`, precedent SB 1.8.1.7); *matí* `רעיון`; *mántra* `מימרה`; *vácas* `דיבור`; *dhī́*
  `הגות`, √*dhī* `הגה`, *dī́dhiti* `הגיג` (one root family); *bráhman* `נוסח`, *brahmakŕ̥t* `עושה־הנוסח`; *námas*
  `קידה`; √*takṣ* `חישל`.
- **Gifts and help:** *rayí* `עושר` (*revánt* `עשיר`); *vā́ja* `פרס`, *vājín* `זוכה־הפרס`; *rā́dhas* `מתת`; *rātí*
  `מתנה`; *rátna* `אוצר`; *dráviṇa* `נכסים`; *íṣ* `רענון`; *śrávas* `תהילה`; *maghávan* `בעל־השפע` (pl. of the
  patrons `בעלי־השפע`); *sūrí* `נדבן`; *vásu* `טוּב` / the gods `הַוַּסוּ`; √*av* / *ávas* `עזר` / `עזרה`; *śárman*
  `מחסה`; √*pā* `שמר`; *áṃhas* `מצוקה` and √*uruṣy* `הרחיב (ל־)` (the narrow and the wide; `מרחב` itself stays
  *rájas*'s); √*dāś* `הגיש`, *dāśváṃs* `המגיש`; *svastí* `שלום`; *śám* `אושר`; *saúbhaga* `מזל טוב` (with `[היתר
  שער]`: *su-bhága*).
- **Light and fire:** √*dī* `האיר`; √*śuc* `בער` (intensive `בער שוב ושוב`), *śocís* `בערה`; *bhānú* `זיו`; *bhā́s*
  `נהרה`; *pā́jas* `נגה`; √*bhā* `זרח`; √*ruc* `נצץ`; *ketú* `משואה` (`אות` stays reserved by sense); *ánīka* `פנים`;
  *prátīka* `חזות`; *śúci* `צח` (precedent); *śukrá* `בוהק`; *citrá* `מבהיק`; *dyumná* `הדר`, *dyumánt* `רב־הדר`;
  *támas* `חושך` (licensed).
- **Strength and mind:** *sáhas* `עוז`; *sahasāvan* and *sáhasvant* `בעל־העוז` (two forms of one adjective);
  *sahasyà* `עִזּוּז` (as Ps 24:8, vocalized); *sahasāná* `מתעזז`; *tavás* `תקיף`; *dákṣa* `כשרון`, *sudákṣa*
  `רב־הכשרון`; *krátu* `רצון` (precedent KU), *sukrátu* `טוב־הרצון`; *cétas* `קשב` (*sucétas* `טוב־הקשב`, *prácetas*
  `רב־הקשב`; *vícetas* `מבחין`); *vípra* `נלהב`; *kārú* `פייטן`.
- **Family and house:** *nár* `גבר` / *vīrá* `גיבור` kept apart (Jamison: the men who do the rite vs the heroes wished
  for), *nárya* `גברי`, *púmaṃs* `זכר`; *suvī́ra* `רב־גיבורים`, *suvī́rya* `שפע־גיבורים`, *avī́ratā*
  `חוסר־גיבורים`; *śéṣas* `נצר`; *tánaya* `תולדה`; *ápatya* `ולד`, *svapatyá* `טוב־ולדות`; *prajā́vant*
  `רב־צאצאים`; *sujātá* `טוב־הלידה`; *jániman* `תולדות`, *janúṣ* `לידות`, *jantú* `ילוד`; *áraṇa* `זר`; *rékṇas*
  `ירושה`; *víś* `שבט` (precedent); *jána* `עם`; *kr̥ṣṭí* `אומה`; the houses: *dáma*, *gr̥há*, *duroṇá*, *dúrya*
  `בית` (near-synonyms, one Hebrew), *ásta* `משכן`, *ókas* `מעון`, *kṣáya* `דירה`, *saṃsád* `חברה`; *nítya* `קבוע`
  (Jamison: "own" and "constant" at once).
- **Enemies:** *rakṣás* `רקשס`, *rakṣohán* `הורג־הרקשסים`; *yātumā́vant* `בעל־הקסמים`; *árāti* `איבה`; *áraruṣ*
  `קמצן`; *paṇí* `הַפַּנִי` (a collective, always vocalized: `הפנים` would read "the face"); *dásyu* `דַּסְיוּ`; *arí*
  `אָרִי` (transliterated: "stranger" / "lord", undecided; 7.6.5b, 7.8.1a); *vanuṣyánt* `החומס`; *pr̥tanāyú*
  `מחפש־הקרב`, *pr̥tanyú* `עורך־הקרב`; *púr* `מבצר`, *puraṃdará* `מבקיע־המבצרים`, *dārú* `מבקיע`; *vr̥trahátya*
  `הריגת־וְרִטְרָה` (after §5.5 *vr̥trahán*); *ámīvā* `מחלה`.
- **Names (new):** Jarūtha `גָ'רוּתָה`, Pūru `פּוּרוּ`, Nahus `נַהוּשׁ`, Āyu `אָיוּ` (7.4.3d: `אדם` and `חי` are gated),
  Bhāratī `בְּהָארַטִי` (pl. `הבְּהָארַטִיּוֹת`), Iḷā `אִילָה`, the Sārasvatas `הסָארַסְוַטִים`, Puraṃdhi
  `פּוּרַמְדְהִי`, Mitra `מִיטְרָה` (7.9.3b, as Geldner; not in the §3.1 table), the Rudras `הָרוּדְרָה` (a collective,
  like `הָאָדִיטְיָה`), Vanaspati translated `אדון־היער`.
- **vásiṣṭha the adjective:** 7.1.8b *vásiṣṭha* "best" is the superlative of *vásu* – `הטוב ביותר`, with `[היתר שם]` and
  a note on the pun on the family's name; 7.7.7a = 7.8.7a *vásiṣṭhāḥ* `בני וַסִישְׁטְהָה`, 7.9.6a `וַסִישְׁטְהָה`.
- **Readings against the literature:** 7.1.3b `בגל יפה (?)` (Jamison's *su-ūrmí*) rather than Geldner's "Feuersäule",
  which would have put Exod 13:21's `עַמּוּד אֵשׁ` into the line; 7.2.4a *saparyávaḥ* kept as the Zurich vocative;
  7.2.9a *turī́pa* `נוזל` (Geldner "Samen": `זרע` is gated to *rétas* / *bī́ja* / *taoxman*); 7.4.9c and 7.9.6c kept as
  cruxes with `(?)` / notes.
- **The repeated pādas:** 7.1.20 = 7.1.25, 7.3.10 = 7.4.10, 7.7.7 = 7.8.7 are identical in Hebrew; F6 in 7.1.20d,
  25d, 7.3.10d, 7.4.10d, 7.7.7d, 7.8.7d, 7.9.6d. 7.1.8c / 9c (similar) share their frame. 7.2.11b follows 10.15.10b's
  `מרכבה אחת`.

### Open decisions for the user
- *arí* `אָרִי` transliterated (7.6.5b, 7.8.1a): "stranger" or "lord" – the literature divides.
- *paṇí* as a vocalized collective `הַפַּנִי`.
- The plural of Agni `אַגְנִים` (the RV's own usage) and the name check that needs an escape for it.

### Progress log
- 2026-11-09: drafted 7.1–7.9 hymn by hymn, each saved, filled and verified before the next; intros written.
- Pass (a) fidelity: 7.1.4a re-drafted (the *níḥ* + ablative), 7.1.22a (`בשל כלכלה רעה`), 7.2.8a (`הנה (תבוא)`);
  additions checked in `( )`.
- Pass (b) consistency: lexmap of the key lemmas; three collisions fixed – *kṣáya* `מושב` → `דירה` (*nr̥ṣádana* keeps
  `מושב־הגברים`), *saṃsád* `מושב` → `חברה` (= *susaṃsád* `טוב־החברה`), *suśéva* `נעים` → `חביב` (`נעים` is *préyas*'s,
  KU); the sandhi hyphens wrongly copied into seven Hebrew lines removed.
- Pass (c) Hebrew: the generated files read through; `אל` / `אלה` vocalized where a *deva* word is near (the trap).
- `build RV7.1-9`; `verify RV7.1-9 --strict`: 0 problems; `check_bible_quotes.py`: 0 problems (one mismatch fixed:
  2 Sam 22:2 `וּמְצֻדָתִי`; three passing allusions given their verse).

### The text on its own terms
- The fire is born, not lit: the men "beget" it between two sticks "with insights and the motion of the hands" (7.1.1);
  thought and handwork are one act.
- The fire as a household's own: Agni is "lord of the house", "constant in the house", installed by the gods in every
  hearth (7.1.2, 7.7.4); and still "hard to house" (7.4.3d, *uvóca* / *durókam*).
- The fear of an empty house: no sons, no one to keep the fire and the offerings (7.1.11, 19, 21; 7.4.6); and the
  sharpest voice of the part – a son "born of another" is no posterity, the adopted son "will go back home" (7.4.7–8).
- The twice-daily offering, evening and morning, the ladle as a girl coming to her groom (7.1.6).
- The Āprī liturgy: the rite prays to its own parts – stick, grass, doors, the post – and every one is a god (7.2).
- The fire as horse, bull, army, axe; its black track (7.3, 7.7, 7.8.2d).
- The rite as a contract of three: poet, patron, god; "both sides" (7.1.20c), "the singers and the generous" (7.3.8d,
  7.7.7c); the poem itself "winning hundreds, with thousands" (7.8.6).
- Fire as conqueror: the "black clans" flee, forts are split, the Dasyus driven from home, "wide light for the Ārya"
  (7.5.3, 6); Nahus's clans made tribute-bearers – *balí*, one word for tax and offering (7.6.5).
- The family names itself: "we Vasiṣṭhas" (7.7.7), Vasiṣṭha who kindled the fire and slew Jarūtha (7.9.6), and the
  pun on *vásiṣṭha* "best" in the first hymn (7.1.8b).
- One god as all gods: Agni is Aditi, Vivasvant, Mitra (7.9.3).

### Key parallels
- 7.1.6b – Exod 29:39: the offering twice a day, morning and evening (a shared motif).
- 7.1.15b – Ps 118:5, Ps 4:2: distress as narrowness, rescue as width (*áṃhas* / √*uruṣy*).
- 7.3.7d – 2 Sam 22:2: the god as stronghold ("a hundred forts of metal").
- (Notes, not tags) 7.1.3b: Geldner's "pillar of fire" avoided (Exod 13:21); 7.1.18c: the gods' pleasure in the smell
  of offerings (Lev 1:9 in the note; the flood corpus's gods "like flies").

### Proposals for the shared renderings
All the rows of **Decisions** above are proposed as binding for Book 7. In particular (lemma → Hebrew):
- Confirmed in real lines, from §5.5: *svastí* `שלום`; √*pā* `שמר`; *sádā* `תמיד`; *śám* `אושר`; *vásu* `טוּב` / `טוֹב`
  / `הַוַּסוּ`; *rayí* `עושר`; *rā́dhas* `מתת`; *rátna* `אוצר`; *vā́ja* `פרס`, *vājín* `זוכה־הפרס` (`סוס
  זוכה־הפרס` 7.7.1b); *maghávan* `בעל־השפע`; *sūrí* `נדבן`; *ávas* `עזרה`; *śárman* `מחסה`; *áṃhas* `מצוקה`;
  *sumatí* `רצון טוב` (and *durmatí* `רצון רע`); *bráhman* `נוסח`; *dhī́* `הגות`; *gír* `שיר`; √*stu* / *stotár*
  `שיבח` / `משבח`; √*gr̥̄* / *jaritár* `הילל` / `מהלל`; √*juṣ* `התענג`; √*mad* `התבסם`; *námas* `קידה`; *havyá*
  `תקרובת`; *adhvará* `טקס`; *hótar* `כוהן־הקריאה`; *dūtá* `שליח`; *ródasī* `שתי המחצות`; *sáhas*, *sūnúḥ sáhasaḥ*
  `עוז`, `בן העוז`; *ŕ̥tāvan* `נאמן הסדר`; *amŕ̥ta* `בן־אלמוות` / `אלמוות`; *jyótis* `אור`; *ā́rya* `אָרְיָה`; *dásyu*
  `דַּסְיוּ`; *rakṣás* `רקשס`; *vr̥trahán* → *vr̥trahátya* `הריגת־וְרִטְרָה`; *vratá* (a god's) `תקנה`.
- **One refinement:** √*tr̥̄* simplex "cross, overcome" `עבר` (7.1.5c, 7.4.5b, 7.7.6a; precedent 1.32.14d `עברת`); the
  causative / *prá* "carry across, forward" `העביר` (7.7.6c), as §5.5's √*pr̥* caus.
- **New, for the later parts:** √*śaṃs* `קילס` (and family); √*īḍ* `התפלל אל`, *īḷénya* `ראוי־לתפילה`; √*idh* `הצית`;
  *samídh* `זרד`; *ghr̥tá* `חמאה מזוקקת`; *barhís* `מצע העשב`; *suvr̥ktí* `שזירה טובה`, √*vr̥j* `שזר`; *arká* `זמר`,
  √*arc* `זימר`; *mántra* `מימרה`; *matí* `רעיון`; *vácas* `דיבור`; √*vand* `הוקיר`; *íṣ* `רענון`; *śrávas* `תהילה`;
  *rātí* `מתנה`; *dráviṇa* `נכסים`; √*dāś* `הגיש`; *dyumná* `הדר`; *ketú* `משואה`; *bhānú* `זיו`; *bhā́s* `נהרה`;
  *pā́jas* `נגה`; √*dī* `האיר`; √*śuc* `בער`, *śocís* `בערה`; √*bhā* `זרח`; √*ruc* `נצץ`; *ánīka* `פנים`; *prátīka*
  `חזות`; *pāvaká* `מטהר`; *śukrá* `בוהק`; *mandrá* `משמח`; *kaví* `משורר`; *vípra* `נלהב`; *krátu* `רצון`;
  *dákṣa* `כשרון`; *cétas* `קשב`; *gr̥hápati* `אדון־הבית`; *viśpáti* `אדון־השבט`; *yáviṣṭha* `הצעיר ביותר`;
  *átithi* `אורח`; *sahasāvan* / *sáhasvant* `בעל־העוז`; *sahasyà* `עִזּוּז`; *nár* `גבר` vs *vīrá* `גיבור`;
  *suvī́ra* `רב־גיבורים`; *śéṣas* `נצר`; *tánaya* `תולדה`; *ápatya* `ולד`; *púr* `מבצר`; *paṇí* `הַפַּנִי`; *arí*
  `אָרִי`; √*uruṣy* `הרחיב (ל־)`; *√hū* `קרא`.
- **Proposed for words not met in 7.1–9** (the next translators to confirm in their lines): *stóma* `שבח` (the §5.5 row;
  the family is confirmed); *manīṣā́* `תבונה` (precedent 10.129); *ukthá* `אמירה` (√*vac* "speak": the recitation;
  the one precedent, 10.72.1c `שירי־השבח`, mixes *gír*'s `שיר` and *stóma*'s `שבח` and should be revised);
  *purohita* `המועמד־בראש` (*purás* + √*dhā* `העמיד`); *ŕ̥tvij* `כוהן־העונה` (*r̥tú* + √*yaj*; AB's `הכוהנים` is
  generic); *yúvan* `צעיר`; *ūtí* `סיוע` (§5.5); √*av* `עזר` (§5.5).
- **Names to add to §3.1 (RV 7):** Jarūtha `גָ'רוּתָה`, Pūru `פּוּרוּ`, Nahus `נַהוּשׁ`, Bhāratī `בְּהָארַטִי`, Iḷā
  `אִילָה`, Puraṃdhi `פּוּרַמְדְהִי`, Āyu `אָיוּ`; and Mitra alone `מִיטְרָה` (the trap list already has it).

### Lessons for the guidelines
- Copying the base's sandhi hyphen (`-ájasrayā`) into the Hebrew line breaks the name check (`-אַגְנִי`): the Hebrew
  line carries no sandhi marks.
- A gate escape must name the flagged word as the verifier prints it (`[היתר שער: הטובים …]`, not `טוב`).
- `מבקשת` contains `קשת` and is blocked: grep the feminine forms of a chosen verb against the gated strings.
- Every unvocalized `אל` / `אלה` in a line whose neighbours have a *deva* word is flagged; vocalize `אֶל` / `אַל` /
  `אֵלֶּה` from the first draft in the Agni hymns.

## Review of part 1 (RV 7.1–7.9; independent reviewer)
All 350 pādas read against the Zurich text and morphology (`data`), with `tr` and Jamison where a line was in doubt,
plus a lemma ↔ Hebrew map of the part's פירוק bullets in both directions. **9 lines changed** (and their פירוק /
notes; two intros aligned). The draft is careful: its readings follow Jamison's emended translations closely, and its
moods (subjunctive → future, optative → `נא`, injunctive with *mā́*) are almost everywhere right.
- **One Hebrew for two lemmas (consistency, 4):**
  - 7.3.4a *ví áśret* (√*śri*) `התפרש` → `נפתח לרווחה`: `התפרש` / `פרש` is √*tan*'s (7.2.1d, 7.5.4c; RV 10.90); as
    7.2.5b *ví … áśiśrayuḥ* `פתחו לרווחה`.
  - 7.3.8b *nr̥vátīḥ* `הגבריים` → `רבי־הגברים`: `גברי` is *nárya*'s (7.1.21d, 7.7.6b).
  - 7.3.9a *pūtā́* (√*pū*) `מלוטש` → `מטוהר`: √*pū* `טהר` (*pāvaká* `מטהר` in 9d of the same stanza: the pun is now
    visible; precedent RV 10.17.10d `מטוהר`). Intro 7.3 aligned.
  - 7.9.6c *jarasva* (√*jar* "be awake") `התעורר` → `היה ער`: `התעורר` is √*budh*'s (7.9.1a, 4d); `ער` as
    *jāgr̥vánt* 7.5.1d (and 7.10.1d), the same root.
- **Mood / voice / sense (3):**
  - 7.2.1d *tatanaḥ* (perfect subjunctive) `התפרש` (imperative) → `תתפרש`, as the part's other subjunctives (7.1.20b).
  - 7.5.3a *āyan* (√*i* "go") `באו` → `הלכו`: the black clans went off in fear (Griffith, Jamison "went off"), not came.
  - 7.7.1d *vivide* `נמצא (הדרך)` (a passive with an object) → `מצא (את הדרך)` (Geldner "hat … (den Weg) gefunden").
- **Ambiguity of the unvocalized line (2):** 7.1.17b *juhuyāma* `נסוך נא` (reads as the imperative) → `נִסּוֹךְ נא`;
  7.5.1d *jāgr̥vádbhiḥ* `הערים` (reads "the cities") → `הָעֵרִים`.
- **Intros:** 7.3 `כגרזן מטוהר`; 7.4 quoted the pre-pass-(b) wording (`נעים`, `ביתו`) → the line's `חביב`, `מעונו`.
- Checked and kept (defensible): 7.1.1c *atharyú* `המבקש את הדרך (?)` and 7.7.3d / 7.4.2b *yátas* `מיד כש` (Jamison);
  7.5.4a *tridhā́tu* (Jamison's adverbial reading); 7.8.1a *aryáḥ* in apposition (Geldner, Renou; the Zurich lemma
  says genitive); 7.4.6d *ápsavaḥ*, *áduvaḥ* (Jamison, noted as uncertain); 7.2.7b `אני חושב אתכם … לזבוח` ("deem").
- `build RV7.1-9`; `verify RV7.1-9 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and generated
  files: 0 problems. The three tagged parallels (Exod 29:39, Ps 118:5, 2 Sam 22:2) are sound and say "shared motif".
- **For the coordinator:**
  - *śū́ra* "hero" has `גיבור` (precedent RV 1.32.12c, the dossier; here 7.1.10a), the word of *vīrá* (7.1, the part's
    explicit *nár* / *vīrá* split): a corpus collision to settle before the Indra hymns (22 *śū́ra* in Book 7).
  - *rathī́* (7.5.5c) and *rathirá* (7.7.4a) share `רוכב־המרכבה`; √*vī* has `ביקש` (7.1.18c, *vītátama* 7.1.18a) and
    `רדף` (7.6.3c); √*i* and √*yā* both `בא`; *manuṣyà* and *mā́nuṣa* (as a noun, 7.7.4b) both `בני־האנוש` – near
    synonyms, left as they are; record or split at the harmonization.
  - `build` lists one repeated-line difference outside Book 7 (RV 10.10.13d `תחבק` / 14b `יחבק`): justified by the
    context (another woman / another man embraces) and noted in that file; the tool lists it all the same.

## RV7.10–7.19 (part 2: the last Agni hymns; Indra and the battle of the ten kings; translator 2, Round 7 run 1)

### Scope
RV 7.10–7.19, 327 pādas: Agni 7.10 (20), 7.11 (20), 7.12 (12), 7.13 (Vaiśvānara, 12), 7.14 (12: one bṛhatī + two
triṣṭubh), 7.15 (45, gāyatrī), 7.16 (48, bṛhatī/satobṛhatī), 7.17 (14, dvipadā); Indra 7.18 (100: the battle of the ten
kings) and 7.19 (44). Ten annotated files, ten intros, built (`build RV7.10-19`); `verify RV7.10-19 --strict`: no
problems; `check_bible_quotes.py` on my annotated files, intros and the generated files: 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); Grassmann (`gra`: *kṣapāvat*, *vániṣṭha*) and the lexmap / grep precedents for
every recurring word; after drafting each hymn `tr` (Griffith, Geldner, Grassmann, Elizarenkova, Renou) and Jamison's
commentary on VII.10–19 (for 7.18 closely: her notes rely on H.-P. Schmidt 1980 and M. Witzel 1995). Her readings adopted,
with attribution: 7.10.2b (the plural *tanvānā́ḥ* attracted to the simile), 2c (*ā́* "here", *ví vidvā́n* "distinguishing"),
2d (*devayā́van* "going to the gods"); 7.15.4b (*jījanam* immediate past); 7.15.12c (Diti = "Giving", feminine,
generated from the verb); 7.16.8d (*dīrghaśrút* possibly of Agni); 7.18.2b (*áva* imperative), 4b (*sasr̥je*: Jamison's 1st person discussed, the line keeps the 3rd person – the coordinator, after the review;
the *vásu … vániṣṭhaḥ* → *vásiṣṭhaḥ* pun), 6b (*mátsya* = tribe and "fish", *ápīva* with "water"), 7cd (the enemies'
speech: their ally has deserted to the Tṛtsus), 9d (*mā́nuṣe* "in Manu's race"; *vádhrivāc* ↔ 1.32.7), 10b (*citā́saḥ*
"piled up" against a properly concluded alliance), 13d (*jéṣma* as injunctive past), 14c (Oldenberg: the 66 are Sudās's
side), 20ab (the dawns as extent of time), 20c (*dévaka* "godling", *mānyamāná* "self-conceited"), 21a (*prá ámamaduḥ*
transitive; "from the house" = of one lineage), 24b; 7.19.2b (*śúśrūṣamāṇa* "desiring fame"), 5c (*śatatamā́*
instrumental; *nivéśana* "bringing to rest"), 7a (*páriṣṭi* positive: "your enclosure").

### Decisions
- **Agni (7.10–17):** *havyavā́h* / *havyavā́hana* `מוביל־התקרובות` (*havyá* `תקרובת` + √*vah* `הוביל`, as *váhni*
  `המוביל`); *uśíj* `החפצים` (the priestly clan's name translated, to keep its root √*vaś* `חפץ` visible beside
  *uśatī́ḥ* `החפצות`); *mánman* `הרהור`; *jánman* `תולדות` (= *jániman*); *kṣápāvant* `שומר־התבל` (Grassmann; the pun
  on *kṣáp* "night" in the note); *praketá* `סימן`; *ajirá* `מהיר`; *sudína* `ימים בהירים` (not "ימים טובים", a feast-day
  in Hebrew); *mīḍhváṃs* `גומל`; *ā́pya* `ידידות`; *védas* `רכוש`; *gáya* `משק־הבית`; *yúvan* `צעיר` (part 1's proposal,
  confirmed); *stóma* `שבח` (confirmed); *ū́rj* `שובע` (*ūrjó nápāt* `נכד השובע`); *yahú* `ילד` (*sahaso yaho* `ילד
  העוז`, kept apart from *sūnú* `בן`); *śrī́* `תפארת`; *yáśas* `כבוד` (*śrávas* keeps `תהילה`; AB's *yaśas* `תהילה` is a
  recorded split); *vītí*, √*vī* `רדיפה`, `רדף אחר` (as 7.6.3c; part 1 also has `ביקש`, 7.1.18c – a split the reviewer left for the harmonization); *váṣaṭ(kr̥ti)* `קריאת־הוַשַׁט` (transliterated); *pótar*
  `כוהן־הטיהור`; *r̥tvíj* `כוהן־העונה` (part 1's proposal, confirmed); *yájamāna* `הזובח`; *svadhvará* `טוב־הטקס`
  (n. pl. `טקסים טובים`, with `[היתר שער]`: the licence `\bsu` does not see *sv-*); *yáti* / *yantár* `מנהיג` (both
  √*yam*); √*rā* `העניק`; √*śā* `השחיז`; √*sidh* `הרחיק`; √*trā* `חלץ`; *drúh* `תרמית`, *níd* `גנאי`; *dīrghaśrút*
  `נשמע־למרחוק`; *ádābhya* `שאין להונותו`; *duritá* `מכשול`; *abhíśasti* `השמצה` (Jamison: "calumny", not "curse");
  √*str̥̄* `הציע` (the barhis "strewn": `מצע` / `הציע`, one root in Hebrew too); *ví √śri* `נפתח לרווחה` as fixed by the
  reviewer (7.17.2a), and 7.10.1a *pā́jo aśret* `פתח לרווחה את נגהו` to match 7.3.4a (Jamison asks to harmonize them).
- **√*rakṣ* `גונן על`** (7.12.2c, 7.15.3b, 13a), kept apart from √*pā* `שמר` (renderings §5.5): Jamison distinguishes
  7.15.13a *rakṣa* from 15a *pāhi*. The older precedent RV 10.14.11 (*rakṣitár* `שומרים`) is a recorded split.
- **The battle (7.18):** *śátru* `אויב` (1.32.4d) against *amítra* `שאינם בני־רעות` and *durmitrá* `בעלי הרעות
  הרעה` (*mitrá* "alliance" `רעות`, §11.6; 10b `רעות עשויה כדין` carries `[היתר שם: מִיטְרָה]`); *śruṣṭíṃ √kr̥* `עשו משמעת`
  (6c = 10d, Jamison's ring); *sárga* `שילוח` (§11.3: the rout as a "release", the image of the freed waters, cf. 15b
  `כמים משולחים`); *vádhrivāc* `מסורסי־הדיבור` (from 1.32.7c *vádhri* `מסורס`); *puroḷā́ś* `עוגת־זבח`; *gavyā́*,
  *gavyú* `תאוות־הפרות`, `תאבי־הפרות`; *nyarthá* `אובדן־המטרה`; *abhipitvá* `חניית־הערב`; *árṇas* `גל`; *gādhá* `מעבר`;
  *supārá* `נוח לחצייה`; *śā́pa* `סחף` (the second sense "curse" in the note); *áśasti* `גידופים`; *vidátha* `מועצה`;
  *sadhamā́d* `שותף־המשתה` (not `רֵעַ`, which is *mitrá*'s common noun); *dasmá* `מופלא` (7.3.4d); √*dr̥* `הבקיע`
  (as part 1's *puraṃdará*), √*bhid* `בקע`; *ní √svap* `נרדם`, caus. `הרדים`; *siṃhī́* `לביאה` (`אריה` would read
  *ā́rya*); *pétva* `כבש מסורס` (`כבש` is also ŚB's *ávi*: two animal words, one Hebrew, recorded); √*mī* `הפר`
  (as part 1); *mr̥dhrávāc* `מבזה־הדיבור` (as part 1); *dā́na* `מתן` (*rātí* keeps `מתנה`); *toká* `עולל` (`צאצאים` is
  *prajā́*, `זרע` gated); *kṣatrá* `שלטון`; *bhojá* `המפרנס`; *vadhū́* `נערה`; √*ribh* `רינן`; *kéta* `כוונה`;
  *ní √vr̥j* `כופף ארצה` (√*vr̥j* "twist" is `שזר` in part 1: a split by sense, noted).
- **Indra (7.19):** *vr̥trá* common noun `מחסום` (§5.5; 4b with `[היתר שם: וְרִטְרָה]`), the name `וְרִטְרָה` (5d), *vr̥trahátya*
  `הריגת־וְרִטְרָה`; *háryaśva* `בעל־הסוסים־הצהבהבים`, *hárivant* `בעל־הצהבהבים`; *vájrahasta* `שהוַגְ'רָה בידו` (beside
  1.32's *vájrabāhu* `שהוַגְ'רָה בזרועו`); *cyautná* `מעשה־זעזוע` (√*cyu* `הניע`); *ūtí* `סיוע` (§5.5, confirmed);
  *ukthá* `אמירה` (part 1's proposal, confirmed in 7.19.9b; *ucátha* 7.18.5c the same); *abhíṣṭi* `חסות`; *śaraṇá* `מקלט`
  (*śárman* keeps `מחסה`; RV 10.18.12d's `מחסה` for *śaraṇá* is a recorded split); *várūtha* `מגן`; *yújya*
  `שותפות־הרתימה`; *avitár* `עוזר`; *stí* `בן־חסות`; *samaryá* `מערכה`; *śikṣ* `השתדל למען`; *nr̥máṇas* `גברי־המחשבה`.
- **Names (new; transliterated by renderings §2.3, vocalized at first occurrence, each with a note):** 7.18: Śimyu
  `שִׁימְיוּ`, Turvaśa `טוּרְוַשָׁה`, the Yakṣus `הַיַּקְשׁוּ` (also "sacrificer", Jamison), the Matsyas `הַמַּטְסְיָה`
  ("fish", translated in brackets), the Druhyus `הַדְּרוּהְיוּ`, the Bhṛgus `בני בְּרִגוּ` (precedent RV 10.14), the Pakthas
  `הַפַּקְתָה`, Bhalānases `הַבְּהַלָנַס`, Alinas `הָאַלִינָה`, Viṣāṇins `הַוִּישָׁאנִין` (*śivā́saḥ* translated
  `"המיטיבים"`, a possible tribe name in the note), Pṛśni `פְּרִשְׁנִי` (*pŕ̥śnigāvaḥ* translated), the two Vaikarṇas
  `שני הַוַּאיקַרְנָה`, Kavaṣa `קַוַשָׁה`, the Anus `הָאַנוּ` (always vocalized: `אנו` "we"; *ā́nava* `בן־אַנוּ`), Bheda
  `בְּהֵדָה`, the Ajas `הָאַגָ'ה`, the Śigrus `הַשִּׁיגְרוּ`, Parāśara `פַּרָאשַׁרָה`, Śatayātu `שַׁתַיָאטוּ`, Devavant
  `דֵּוַוַנְט`, Yudhyāmadhi `יוּדְהְיָאמַדְהִי`; *dévaka* translated `האֵל־הקטן` (Griffith's "Devaka son of Manyamāna" in
  the note). 7.19: Śuṣṇa `שׁוּשְׁנָה`, Kuyava `קוּיַוָה`, Ārjuneya `בן אַרְגֻ'נִי`, Purukutsa `פּוּרוּקוּטְסָה`, Trasadasyu
  `טְרַסַדַּסְיוּ`, Cumuri `צ'וּמוּרִי`, Dhuni `דְהוּנִי`, Dabhīti `דַּבְּהִיטִי`, Namuci `נַמוּצִ'י`, Yadu `יָדוּ` (*yā́dva*
  `בן־יָדוּ`), Atithigva `אַתִיתִיגְוָה`. 7.15: Diti `דִּיטִי`. The §3.1 names (Sudās, the Tṛtsus, Paruṣṇī, Yamunā,
  Divodāsa, Paijavana, Śambara, Kutsa, Vasiṣṭha, the Maruts, Savitṛ, Bhaga) as in the table.
- **7.18, the uncertain readings** (each marked `?` in the line or the gloss, with the alternatives in the note):
  5c–d (Śimyu and the "newer utterance"; *śā́pa* "driftwood / curse"), 6d (who crosses whom), 7b (*śivā́saḥ*), 8a (Aditi's
  "miscarriage": the goddess and an eclipse, Jamison; or the river, Geldner / Schmidt), 8b (*ví √grabh*), 8cd (the subject),
  9c (*sutúka*), 10cd (*pŕ̥śnigu*, *ránti*), 12b (Zurich *ánu* or Oldenberg's *ánum*), 13d (injunctive or precative),
  14c (the 66: enemies or allies), 15c (*prakalavíd*), 16a, 16d, 17c (*veśī́*, *sraktí*), 21a, 22b (*vadhū́mant*), 23b–c.
- **The repeated pādas:** F6 in 7.11.5d, 7.12.3d, 7.13.3d, 7.14.3d, 7.19.11d, copied exactly. Similar lines given the
  same frame: 7.17.7a ← 7.14.3c (`לך, לָאֵל, נהיה נא מגישים`, + `אֵלֶּה –` for *té*); 7.17.5a / 7.16.5c; 7.19.8a / 9a;
  7.18.6c = 10d (`עשו משמעת`); 7.18.15d / 17d; 7.18.24a ← 7.12.1c. No repeated-line difference.

### Open decisions for the user
- *uśíj* translated `החפצים` (a priestly clan's name) rather than transliterated.
- 7.18.6a/6b: the tribe names that are also words (*yákṣu* "sacrificer", *mátsya* "fish", *ajá* "goats") – transliterated,
  with the word in brackets or in the note.
- *dévaka* (7.18.20c) translated `האֵל־הקטן`, not read as a name (Griffith).
- 7.19.6a *sánā* "old" (Grassmann, Geldner) against Jamison's imperative "win!" – kept "old", with `?`.

### Progress log
- 2026-11-09: drafted 7.10–7.19 hymn by hymn; each saved, filled and verified before the next (7.12–14 together:
  12 pādas each); intros written with each hymn.
- Coordinator's note applied (*śū́ra* `גיבור`, *nár* `גבר`, √*śri* `נפתח לרווחה`, the reviewer's fixes in 7.1–9 followed).
- Pass (a) fidelity: 7.15.1a (a misquoted Griffith corrected from `tr`), 7.10.3a (Hebrew gender of *devayántīḥ* after
  `שיר` / `רעיון`), 7.18.23a/c (`(מובילים)` from 23d *vahanti*).
- Pass (b) consistency (lexmap of my range against Book 7): 7.10.1a √*śri* `הקים` → `פתח לרווחה`; 7.17.7b *mahás*
  `גדולים` → `רוממות` (part 1); 7.18.3c *pathyā̀* `דרך` → `שביל`, *arvā́ñc* `אלינו` → `הנה`; 13b √*dr̥* `ניפץ` →
  `הבקיע`; 13d *mr̥dhrávāc* → `מבזה־הדיבור`; 15d √*hā* `עזבו` → `נטשו`; 16c √*mī* `ביטל` → `הפר`; 21d *ádha* `ולכן` →
  `ואז`; 7.15.14a *āyasá* `ועשוי מתכת` → `של מתכת` (7.3.7d); `יוֹדֵעַ־הַנּוֹלָדִים` vocalized at its first occurrence in
  7.12–14; `נוח` (the Noah gate) replaced by `קל־לזכייה` (7.12.3c). √*vī* `חתר אל` → `רדף אחר` in 7 lines (7.15.6a, 7.16.4b, 5d, 7.17.3a, 7.19.3a, 4a, 6d), after part 1's 7.6.3c.
- Pass (c) Hebrew: the generated files read through (7.18 whole); `אֶל` / `הָאֵל` / `אֵלֶּה` vocalized where the verifier
  asked.
- `build RV7.10-19`; `verify RV7.10-19 --strict`: 0 problems; `check_bible_quotes.py`: 0 problems (one quotation of
  2 Sam 22:2 corrected to the full half-verse before the check).

### The text on its own terms
- The morning fire as "the lover of Dawn", waking the poets' insights, which are "eager" to reach the gods (7.10.1).
- "Without you the immortals are not exhilarated" – no fire, no offering, no soma for the gods (7.11.1b; ring with 5b).
- Two models of sacrifice in one stanza: the gods come down to eat, the sacrifice goes up to heaven (7.10.4, 7.11.5).
- The fire as the gods' mouth, the "nearest friendship", seated "in house after house", guarding the property in the
  house (7.15.1–3); the poet "begets" a new song (7.15.4).
- Agni as every priest at once – lord of the house, Hotar, Potar (7.16.5); the patrons who distribute "pens of cows"
  and gifts of horses "out of desire for great fame" (7.16.7, 10); the Iḷā "sitting" in their house with ghee in her hand
  (7.16.8).
- A god made of a verb: Diti, "Giving", "will give" (7.15.12).
- The battle as a sacrifice: the "sacrificer" Turvaśa became the offering cake, the poet "lay like a sacrificial beast",
  the enemies strewn like barhis (7.18.6a, 8d, 11c); the god "whetting" (√*śā*), the hymn's signature verb (2d → 24d).
- War for cows and between kin: the "desire for cows" (7.18.7d, 14a); both sides are Ārya, "Manu's race", but the
  enemies' ritual speech is "gelded" (7.18.9d); shifting alliances – "friend crossed friend", the "drinking companion"
  who went over (7.18.6d, 7cd), "non-allies" against "an alliance properly made" (9c, 10b).
- The river as the enemies' "failed goal": the Paruṣṇī (7.18.8–9); the many fall to the few with the god ("a lioness with
  a wether", 7.18.14c, 17).
- The poet's fee: two hundred cows, chariots, four horses, "offspring for offspring, for fame" (7.18.22–23); fame
  shared out "to every head" (24b).
- The family remembers itself: Vasiṣṭha, Parāśara, Śatayātu "from the house" (7.18.21); the pun *vásu … vániṣṭhaḥ* →
  *vásiṣṭhaḥ* (7.18.1d, 4b; 7.10.2d).

### Key parallels
- 7.18.5d (with 8–9) – Judg 5:21 `נַחַל קִישׁוֹן גְּרָפָם`: the river that sweeps the enemy away (a shared motif).
- 7.18.5b – Ps 66:6: the god makes the waters passable for his people.
- 7.18.10a – 1 Kgs 22:17: an army without its leader as a herd without a herdsman.
- 7.18.17a – Judg 7:7: the god's victory by the few and the weak.
- 7.15.14c – 2 Sam 22:2: the god as fortress ("a fort of metal with a hundred walls").
- (Note, not a tag) 7.11.2d: *sudína* `ימים בהירים`, not "ימים טובים" (Esther 8:17).

### Proposals for the shared renderings
- **Words** (lemma → Hebrew, binding for Book 7 if accepted): √*rakṣ* `גונן על`; *havyavā́h(ana)* `מוביל־התקרובות`;
  *uśíj* `החפצים`; *mánman* `הרהור`; *jánman* `תולדות`; *ū́rj* `שובע`; *śrī́* `תפארת`; *yáśas* `כבוד`; √*vī*, *vītí*
  `רדף אחר`, `רדיפה`; *váṣaṭ* `וַשַׁט`; *pótar* `כוהן־הטיהור`; *yájamāna* `הזובח`; *svadhvará* `טוב־הטקס`; *yáti* / *yantár*
  `מנהיג`; *mīḍhváṃs* `גומל`; *duritá* `מכשול`; *abhíśasti* `השמצה`; *sudína* `ימים בהירים`; √*str̥̄* `הציע`; *ā́pya*
  `ידידות`; *védas* `רכוש`; *gáya* `משק־הבית`; *śaraṇá* `מקלט`; *abhíṣṭi* `חסות`; *várūtha* `מגן`; *yújya*
  `שותפות־הרתימה`; *avitár* `עוזר`; *cyautná* `מעשה־זעזוע`; *maghá* `שפע`; *dā́na* `מתן`; *toká* `עולל`; *kṣatrá*
  `שלטון`; *amítra* `שאינו בן־רעות` (*śátru* `אויב`); *śruṣṭíṃ √kr̥* `עשה משמעת`; *vidátha* `מועצה`; *sadhamā́d*
  `שותף־המשתה`; √*dr̥* `הבקיע`; *ní √svap* `נרדם` / `הרדים`; *vájrahasta* `שהוַגְ'רָה בידו`; *háryaśva* / *hárivant*
  `בעל־(הסוסים־)הצהבהבים`; *yahú* `ילד`.
- **Confirmed in real lines** (part 1's proposals): *yúvan* `צעיר`, *stóma* `שבח`, *ŕ̥tvij* `כוהן־העונה`, *ukthá*
  `אמירה`, *ūtí* `סיוע`, √*av* `עזר`; and the reviewer's √*śri* `נפתח לרווחה`.
- **Names to add to §3.1 (RV 7):** Turvaśa `טוּרְוַשָׁה` (` turvas`), the Druhyus `דְּרוּהְיוּ` (` druhyu`), the Anus
  `אַנוּ` ★ (folded regex needs care: *ánu* is also a preverb; keep in the files), Pūru (already part 1), Bheda `בְּהֵדָה`
  (` bhed(?:a|am|asya)\b`), Kavaṣa `קַוַשָׁה` (` kavas`), Śimyu `שִׁימְיוּ` (` simyu`), Śuṣṇa `שׁוּשְׁנָה` (` susn`),
  Namuci `נַמוּצִ'י` (` namuc`), Trasadasyu `טְרַסַדַּסְיוּ` (` trasadasyu`), Dabhīti `דַּבְּהִיטִי` (` dabhit`),
  Atithigva `אַתִיתִיגְוָה` (` atithigv`), Yadu `יָדוּ`, Parāśara `פַּרָאשַׁרָה` (` parasar`), Yudhyāmadhi
  `יוּדְהְיָאמַדְהִי`. The tribe names that are also words (Matsya, Yakṣu, Aja, Śiva, Pṛśni/Pṛśnigu, Ānava) stay in the
  files only.

### Lessons for the guidelines
- The `קשת` gate's EXEMPT_WORDS does not cover `בבקשת` (7.18.25d) nor, presumably, other forms of בַּקָּשָׁה; an escape was
  needed (`[היתר שער]`). The forms of בקש should be exempted by pattern (`בקש` + suffix), not by a word list.
- The `טוב` licence `\bsu` misses *su-* before a vowel (*svadhvará*, *sváñc* = *su-adhvará*, *su-añc*): add `\bsv` (or the
  Zurich lemma's analysis) to the licence.
- In a hymn full of names, run `verify` after each stanza group: the name rules (Mitra, Vṛtra as common nouns) and the
  always-vocalized words (`אֵל` near a *deva* word) are the commonest flags.

## Review of part 2 (RV 7.10–7.19; independent reviewer)
All 327 pādas read against the Zurich text and morphology (`data`), with Jamison's commentary on VII.18 (vss. 1–25) and
on the lines in doubt, plus two scripts over the `lexmap` of the whole corpus (lemma → Hebrew in this part against every
other file, and Hebrew → lemma) and a check that every פירוק Hebrew stands in its line. **7 lines changed** (and their
פירוק / notes), one פירוק gloss and one intro aligned. The draft is careful: its moods (subjunctive → future, optative →
`נא`, the injunctive, *mā́ … bhūma* 7.19.7ab), its many names and its 7.18 readings follow Jamison's updated commentary
closely, and every `?` crux of 7.18 has its alternatives in the note.
- **Hebrew grammar / ambiguity of the unvocalized line (4):**
  - 7.16.4d *rā́sva* (aor. imperative) `העניק` (reads as the past) → `הַעֲנֵק`.
  - 7.19.11b *tanvā̀ vāvr̥dhasva* (intransitive: "grow strong in body", instr.) `הגדל` (hifil, "enlarge") → `גְּדַל`;
    the transitive 7.8.5d *vardhasva tanvàm* `הגדל את גופך` stays.
  - 7.18.18d *ní jahi* `הנחת` (reads `הִנַּחְתָּ` "you placed") → `הַנְחֵת`.
  - 7.18.16c *mimāya* `הפר` (beside Indra, reads "the bull", *vŕ̥ṣan* `הפר`) → `הֵפֵר`.
- **One Hebrew for two lemmas (consistency, 2):**
  - 7.15.12a *vīrávant* `רב־גיבורים` → `בעל־גיבורים`: `רב־גיבורים` is *suvī́ra*'s (7.15.8c); *vīrávant* is
    `בעל־גיבורים` in 7.15.5b (part 1 `בעלי גיבורים`).
  - 7.18.16d *pánthā* `השביל` → `הדרך` (`מסלול הדרך`): `שביל` is *pathyā̀*'s (7.18.3c, the translator's own pass-(b) split);
    *pánthā* is `דרך` everywhere else.
- **פירוק / intro (2):** 7.15.6a the gloss of *váṣaṭkr̥tim* `אֶל קריאת־הוַשַׁט` → `קריאת־הוַשַׁט` (the line has `ירדוף אחר
  קריאת־הוַשַׁט`); intro 7.16 `מתנות של סוסים` → `שפע של סוסים` (the line 10a, *áśvyā maghā́*).
- Checked and kept (defensible): 7.16.6c `השחז לנו` for acc. *naḥ* (Jamison now prefers a dative or genitive reading,
  noted); 7.18.23a *dā́nāḥ* (Grassmann's dā́na 2 m. "gifted horses") `מתנות` – the Hebrew plural of `מתן` (dā́na 1) as well,
  so no clash with *rātí* `מתנה`; 7.18.5cd, 8a, 9c, 10d, 15c, 16d, 17c, 23b (marked `?`, alternatives in the notes);
  7.18.13d *jéṣma* past (Jamison's injunctive); 7.18.18 as direct speech (Geldner, Jamison); 7.19.9c *ví … ádāśan*
  `הרחיקו בהגשה` (Oldenberg's "hinweghuldigen", via Jamison); 7.13.1c *prīṇānáḥ* `מתרצה` (as 7.17.4b `ירצה`).
- `build RV7.10-19`; `verify RV7.10-19 --strict`: 0 problems, 0 repeated-line differences; `check_bible_quotes.py` on the
  annotated, intro and generated files: 0 problems. The tagged parallels (Judg 5:21, Ps 66:6, 1 Kgs 22:17, Judg 7:7,
  2 Sam 22:2) are sound and say "shared motif".
- **For the coordinator:**
  - 7.18.4b: the part's Sources list says Jamison's 1st-person *sasr̥je* was adopted, but the line is 3rd person
    (`שילח וַסִישְׁטְהָה`) and the note only reports her reading. Both are defensible (Geldner, Griffith: 3rd); the record
    and the line should agree – either `שילחתי, (אני) וַסִישְׁטְהָה,` or drop "1st person" from the Sources list.
  - Near-synonyms sharing a Hebrew word (left for the harmonization): "distribute" – √*day* `חילק` (7.16.7d), *ví* √*dhā*
    `חילק` (7.17.7b), *ví* √*bhaj* `חילק` / *vibhaktár* `המחלק` (7.18.13c, 24b), part 1's *vidhartár* `המחלק` (7.7.5b);
    *ajirá* (7.11.2a) and *āśú* (7.18.9b) both `מהיר` (*āśú* is common in the later hymns: fix one word before part 3+);
    *ví* in 7.19.9c `הרחיקו` beside √*sidh* `הרחיק` (7.15.10a); *ā́s* / *āsyà* both `פה`.
  - 7.19.3bc `עזרת (קדימה)`: the preverb *prá* is in the source, so the parentheses (= added) are not quite right; harmless.

## RV7.20–7.31 (part 3: Indra; translator 3, Round 7 run 1)

### Scope
RV 7.20–7.31, 316 pādas, all to Indra: 7.20 (40), 7.21 (40; 5d the *śiśnadeva*), 7.22 (28; eight virāj tercets + one
triṣṭubh), 7.23–25 (24 each), 7.26–30 (20 each; 7.28–30 share the closing stanza), 7.31 (36; nine gāyatrī tercets +
three long tercets, no family refrain). Twelve annotated files, twelve intros, built (`build RV7.20-31`); `verify
RV7.20-31 --strict`: no problems; `check_bible_quotes.py` on my annotated files, intros and the generated files: 0
problems.

### Sources consulted
The Zurich text and morphology (`data`); `lexmap` / `freq RV7.20-31` / `grep` for every recurring word; after drafting
each hymn `tr` (Griffith, Geldner, Grassmann, Elizarenkova) and Jamison's commentary on VII.20–31. Her readings
adopted, with attribution: 7.20.1–2 (the agent nouns with verbal rection), 3c (*ví √as* "scatter"), 6d (*kṣáyat* "rule
over wealth", gen. *rāyáḥ*), 7ab (*áyat* subjunctive of √*i*; the question in c), 9b (*stāmú* from √*stā* "steal",
tentatively); 7.21.2 (*gr̥bhá* an agent noun; the pressing stones as subject), 4ab (√*viṣ* "accomplish" with *ápas*; the
weapons = the stones' soma), 5 (*vándana* "sycophancy", the inner and outer threats to *r̥tá*; *ápi √gā* with a sexual
nuance), 6d (the end of his *śávas*), 9cd (the *van* figure); 7.22.4a (*ví √pā* = separating the juice), 8–9 (the
subject of 8b postponed to 9ab; *asmé* locative); 7.23.4c (the teams = our thoughts); 7.24.2a ("your mind has been
captured"), 3d (*tavásam* of Indra), 5d (*śrómata*); 7.25.4d (the odd *ná mardhīḥ*); 7.26.3d (*ní √mr̥j* "drag down
forcefully"); 7.27.2c (the *vícetas* pun), 4d (*abhívītā* "enclosed"); 7.28.2c (with ab), 3ab (*sám … ninétha* evoking
*ví*), 4 (Varuṇa; the *durmitrá* peoples purifying themselves); 7.29.2a (the voc. *bráhman*), 3c (*tatane* subjunctive);
7.31.2b (the "men" = the Maruts), 6c ("the challengers").

### Decisions
- **Indra's epithets:** *maghávan* `בעל־השפע` (and *maghá* `שפע`); *háryaśva* `בעל־הסוסים־הצהבהבים`, *hárivant*
  `בעל־הצהבהבים`, *hári* `צהבהב`; *vájrahasta* `שהוַגְ'רָה בידו`, *vájrabāhu* `שהוַגְ'רָה בזרועו`, *suvájra*
  `טוב־הוַגְ'רָה`; *vr̥trahán* `הורג־וְרִטְרָה`; *śū́ra* `גיבור` (the ruling, §11.10), *vīrá* `גיבור`; **new:**
  *śatákratu* `בעל־מאה־הרצונות` (*krátu* `רצון`); *śakrá* `יכול` with √*śak* `יכל` (7.20.9d keeps the pun *śakra …
  śakaḥ*); *ádrivant* `בעל־האבן` (*ádri* `אבן`, the pressing stone); *suśiprá* `יפה־השפתיים`, *śiprín* `בעל־השפתיים`;
  *puruhūtá* `שרבים קוראים לו` (7.2); *r̥jīṣín* `בעל־השמרים`; *svadhā́vant* / *svadhā́van* `בעל־הכוח־העצמי`
  (*svadhā́* `כֹּחַ עַצְמִי`, 10.129); *sváyaśas* `בעל־הכבוד־העצמי` (*yáśas* `כבוד`);
  *tuvirā́dhas* `רב־המתת`; *śavasín* `בעל־העצמה`, *śáviṣṭha* `העצום ביותר`; *táviṣī* `תוקף`, *túviṣmant*
  `רב־התוקף`, *táviṣīvant* `בעל־התוקף` (the root of *tavás* `תקיף`); *ójas* `חוסן` (*svójas* `רב־החוסן`; `עוז`
  stays *sáhas*'s); *śuṣmín* `סוער` (*śúṣma* `סער`); *ugrá* `עז`; *dhr̥ṣṇú* `נועז`; *iná* `אדיר`, *sátvan* `אביר`;
  *yudhmá* `לוחם`, *puroyodhá* `לוחם־בראש`; *samád* `התגוששות`, *samádvan* `מתגושש` (*pŕ̥tanā* `קרב`, *samaryá*
  `מערכה`, *yúdh* `מלחמה` kept apart); *tárutra* `מכריע`; *vibhaktár* `המחלק` (7.18); *viśvaminvá* `מפעיל־הכל`;
  *mahivŕ̥dh* `הגדל־לגדולה`; *nr̥páti* `אדון־הגברים`; *carṣaṇiprā́* `ממלא־העמים`; *ánuttamanyu* `שאין דוחים את
  כעסו`.
- **Soma:** √*su* `סחט`, *sutá* `סחוט`, *sotár* `סוחט`, *sávana* `סחיטה` (the pressing), *ásuta* `שלא נסחט`;
  *ándhas* `עסיס`; *índu* `טיפה`; *mádhu* `דבש`; *ŕ̥jīka* `תוספת`; √*pā* "drink" `שתה`, *somapéya*
  `שתיית־הסוֹמָה`, *somapā́van* `שותה־הסוֹמָה`; √*mad* / √*mand* `התבסם` (causative `בסם`), *máda* `התבסמות`,
  *mā́dana* `מבסם`; √*uc* `התרגל`.
- **Deeds:** √*han* `הרג`, but with forts or a weapon as object (*ví √han*, *jahí vádhar*) `ריסק` – a split by sense
  like 1.32.7b `הנחית`; *hántar* `הורג`; √*śnath* `דקר`; √*randh* `הכניע`; √*bādh* `לחץ` (7.23.3c: the separation of
  the world-halves); √*dhū* `ניער`; ápa √*vr̥* `חשף`, pári √*vr̥* `כיסה מסביב` (the root of Vṛtra, noted); *vr̥trá* in
  the neuter plural `מחסומים` (with `[היתר שם]`), the singular in 7.20.2a, 7.21.6c the name `וְרִטְרָה`; *áhi* `נחש`
  (7.21.3b, licensed); *ápas* `מפעל` (`מְלָאכָה` stays the Semitic corpora's *šipru*); *ā́yudha* `כלי־נשק`; *didyút*
  `רומח`; *várman* `שריון`; *kr̥tríma* `עשוי`.
- **The rite and the poets:** √*vac* `אמר`; √*gā(y)* `שר`; √*nu* `צעק`, √*krand* `שאג`; √*kr̥p* `התחנן`; *ghóṣa*
  `קול`; *vívāc* `התנצחות` (the verbal contest), *nemádhiti* `התמודדות`; *vā́ṇī* `מקהלה`; *nīthá* `לחן`; *sūktá*
  `מזמור`; *śūṣá* `שיר־חיזוק`; *āṅgūṣá* `צהלה`; *áraṃkr̥ti* `הכנה`; *śáṃsa* `קילוס` (√*śaṃs*); *sáhūti* `קריאה משותפת`;
  *ví √hū* `קרא בתחרות`; *hávya* "to be invoked" `ראוי־לקריאה` (kept apart from *havyá* `תקרובת`); *dúvas* `מחווה`;
  *deṣṇá* `דורון`; *dákṣiṇā* `שכר`; *vedhás* `נבון` (10.10), so *manīṣín* takes `בעל־התבונה` (7.22.6b; KU's `הנבונים`
  a recorded split); *vípra* / √*vip* `נלהב` / `הלהיב`.
- **People, gifts, help:** *ánr̥ta* `אי־הסדר` (the root of *r̥tá* kept); *anenás* `חף־מעוון` (*énas* `עוון`); *trātár*
  `מחלץ`; *avitár* `עוזר`, *áviṣṭha* `העוזר ביותר`; *varūtár* `סוכך`; *várivas* `מרווח`; *prámati* `דאגה`; *āpí*
  `ידיד`; *sakhyá* `חברות`; *árāvan* `צר־העין` (*áraruṣ* `קמצן`); *ninitsú* `המבקש לגנות` (*níd* `גנאי`); *vanús*
  `חומס`; *yātú* `קסם` (as *yātumā́vant* `בעל־הקסמים`); *śiśnádeva* `שאֵלָם הוא האבר` (*śiśná* `אבר`); *jaraṇā́*
  `זקנה`; *vīrávant* `בעל־גיבורים` and *gómant* `בעל־פרות`, *áśvāvant* `בעל־סוסים`, *ráthavant* `בעל־מרכבות`; *vājayú*
  `תאב־הפרס`, *gavyú* `תאב־הפרות`, *hiraṇyayú* `תאב־הזהב`, *tvāyú* `תאב לך`; *gavéṣaṇa* `מחפש־הפרות`; *vrajá*
  `מכלאה`; *kṣití* `יישוב`; *puruṣyà* `בני אדם` (7.29.4a, from *púruṣa*: licensed by the gate).
- **Verbs (new in the book):** √*bhrī* `מעד`; √*śū* `תפח`; √*pī* `גאה`; √*nakṣ* `הגיע`; √*cud* `דחף`; √*tuj* `דחק`;
  √*nī* `הנהיג` (*práṇīti* `הנהגה`; √*vah* keeps `הוביל`); √*daśasy* `חנן`; √*kā* `השתוקק`; √*grabh* `אחז`; ánu √*mā*
  `ויתר`, ánu √*man* `הודה ב־`; áva √*sā* `התיר`; abhí √*bhū* `היה עליון`; √*vyac* `הקיף`; práti √*brū* `השיב`;
  √*śardh* `התגרה` (as the book); √*hr̥ṣ* `עלז`; √*kṣā* `מלך`; √*jū* `המריץ`; √*mr̥ṣ* `שכח`; √*mr̥dh* `הזניח`;
  √*am* `הסתער`; √*br̥h* caus. `הגביה` (√*mahay* keeps `רומם`); ní √*mr̥j* `גרר מטה` (a split from √*mr̥j* `מירק`).
- **Readings against the literature:** 7.20.9b *stāmú* `הגנבני (?)` (Geldner's √*stā*, Jamison's "thieving"; Grassmann
  "sigher" in the note); 7.21.5b *vándana* `החנפנויות (?)` (Jamison; Geldner keeps a name); 7.21.8a *kīrí* `הדל (?)`
  (Geldner; Grassmann "singer"); 7.25.1c *didyút* `רומח` (not Grassmann's "Blitz", which would be *vidyút* `ברק`);
  7.27.4d *abhívītā* `(שהיתה) מוקפת (?)` (Jamison) against Geldner's "willkommen"; 7.30.4b *stávanta* passive
  (Geldner); 7.31.12c *barhaya* 1st sg. subjunctive (the Zurich parse, Geldner) – Jamison's imperative in the note.
- **The repeated pādas:** F6 in 7.20.10d, 21.10d, 22.9d, 23.6d, 24.6d, 25.6d, 26.5d, 27.5d, 28.5d, 29.5d, 30.5d,
  copied exactly. **7.20.10 = 7.21.10, 7.24.6 = 7.25.6, 7.28.5 = 7.29.5 = 7.30.5** (the first copy in my range; the
  later copies copied character for character). Similar lines given the earlier frame: 7.22.2b ← 7.19.4b; 7.24.4a ←
  7.19.3b; 7.29.2c ← 7.23.5d; 7.31.11b ← 7.22.9b; 7.28.2d ← 7.20.3b. No repeated-line difference.

### Open decisions for the user
- 7.21.5d *śiśnádeva* rendered literally, `אֵלֶּה שאֵלָם הוא האבר` (*śiśná* `אבר`, a decent but plain word), not
  Griffith's "the lewd" nor a modern "phallus-worshippers": the reading (foreign phallic cult or an insult) is left to
  the note.
- *śakrá* `יכול` (to keep the pun with √*śak*), rather than a grander epithet such as `כביר` (now *mahín*'s).
- 7.24.1a *yóni* `רחם` (the corpus's word) for the god's "seat" on the ritual ground.

### Progress log
- 2026-11-09: drafted 7.20–7.31 hymn by hymn; each written, filled (`fill`) and verified (`verify RV7.<n>`) before the
  next, with its intro. 7.28.5 (the shared closing stanza) drafted first and copied into 7.29 and 7.30 by script.
- Coordinator's mid-part note applied: imperatives that read as past vocalized (`הָבֵא`, `הִתְעוֹרֵר`, `שְׁתֵה`,
  `שְׁמַע`, `עֲשֵׂה`, `עֲשׂוּ`, `הִשְׁתַּדֵּל`, `הִתְעַנֵּג`, `הַעֲבֵר`, `הַכְנֵע`, `הַגְדֵּשׁ`, `מַלֵּא`, `דְּקֹר`,
  `מְדֹד`, `חֲנֹן`, `הוֹשֵׁט`, `הָבִיאוּ`, `שִׁירוּ`), `מְפֵרִים` next to Indra (7.31.11c); *turá* `נמרץ` because
  *ajirá* now has `זריז`; *vīrávant* `בעל־גיבורים`.
- Pass (a) fidelity: 7.22.8a re-cut (the postponed subject, Jamison); 7.30.1b `את העושר`; 7.31.8a (the choir named once);
  7.31.12c √*br̥h* `הגביה` (`רומם` is √*mahay*'s).
- Pass (b) consistency (a lemma ↔ Hebrew map of my range against all drafted files): *árvan* `סוס־מרוץ` → `סוס דוהר`
  (`סוס־מרוץ` is *átya*'s, 7.3.5b); *manīṣín* `נבון` → `בעל־התבונה` (`נבון` is *vedhás*'s); aligned to the book's
  precedents: *sadhamā́da* `משתה משותף`, *dvibárhas* `כפול־העוצמה`, *viśváha* `כל הימים`, *devatrā́* `אצל האֵלִים`,
  √*hr̥ṣ* `עלז`, √*grabh* `אחז`, √*kṣā* `מלך`, √*śardh* `התגרה`, *nŕ̥pīti* `שמירת הגברים`, *sabā́dhas* `בדחיפות`,
  *jáni* `בנות־זוג`; the Kutsas `בני קוּטְסָה` (the name check).
- Pass (c) Hebrew: the generated files read through; vocalizations above; `הָאֵלֶּה` / `אֵלֶּה` where the verifier asked.
- `build RV7.20-31`; `verify RV7.20-31 --strict`: 0 problems; `check_bible_quotes.py` on 36 files: 0 problems (two
  verses first quoted from memory were caught by printing them – Num 14:18 replaced by Ps 39:9, Ps 145:1 corrected to
  `וַאֲבָרְכָה`).

### The text on its own terms
- The god defined by his deeds as names: "rescuer", "slayer", "maker", "giver" – agent nouns with objects (7.20.1–2).
- Indra's birth: "a bull begot the bull, a woman bore the manly one" – a god with a father and a mother (7.20.5).
- Gift exchange as cosmic law: the earlier helps the later, the elder goes to the younger's gift – "would the immortal
  sit aloof?" (7.20.7); the poet admits that "desire for wealth has come upon your singer" (7.20.9c).
- The rite as a contest: the families "call him competitively" and he can come to one only – "hear only ours" (7.28.1),
  the fear of his "wandering mind" (7.25.1d), and the joy that "your mind has been captured" (7.24.2a).
- The pressing stones as drunken poets, "of wild speech", clattering from afar (7.21.2), "separating" the juice (7.22.4a).
- The two conditions of the offering: no unpressed soma, no pressing without a formulation (7.26.1–2).
- The threat to *r̥tá* from inside (sorcery, flattery) and outside (the stranger, "those whose god is the phallus")
  (7.21.5).
- Wisdom in a prayer: "no one knows his own lifetime among men" – so carry us across now (7.23.2c–d).
- The new poet's claim: the ancient seers were only men, and the god heard them; "you are our care, like a father" (7.29.4).
- Cosmogony in passing: the world-halves pushed apart (7.23.3c), "heaven upon heaven" (7.24.5d); the barren waters
  swell like barren cows (7.23.4a).
- Varuṇa breaks into an Indra hymn: the sinless one sees untruth and unbinds us (7.28.4).
- The choirs (the Maruts' and ours) make Indra king (7.31.12); old age in strength as the patrons' reward (7.30.4d).

### Key parallels
- 7.21.5d – Ezek 16:17 `צַלְמֵי זָכָר`: polemic against another people's sexual cult (a shared motif; no lexical contact).
- 7.21.6b – 1 Kgs 8:27: the god whom the world cannot contain.
- 7.23.2c – Eccl 9:12, Ps 39:5: man does not know his time.
- 7.23.3c – Gen 1:7 [divergence]: the separation of the world-halves by force, with no "firmament" and no `הבדיל` in the line.
- 7.26.2c, 7.29.4d – Ps 103:13, Isa 63:16: the god as father; in 7.29 against the ancient seers (as Abraham in Isaiah).
- 7.28.4c – Ps 90:8, 19:13: the god who sees hidden sin and clears it (Varuṇa; the great parallel is 7.86–88).
- 7.31.6a, 9c, 12b – Ps 18:3, 86:9, 93:1: the god as armour, the nations bowing, the god made king.

### Proposals for the shared renderings
- **Words** (lemma → Hebrew, binding for Book 7 if accepted): every row of **Decisions** above; in particular
  *śatákratu* `בעל־מאה־הרצונות`; *śakrá* `יכול` / √*śak* `יכל`; *ádri* `אבן`, *ádrivant* `בעל־האבן`; *suśiprá*
  `יפה־השפתיים`, *śiprín* `בעל־השפתיים`; *r̥jīṣín* `בעל־השמרים`; *svadhā́vant* `בעל־הכוח־העצמי`; *ójas* `חוסן`; *táviṣī*
  `תוקף`; *iná* `אדיר`; *sátvan* `אביר`; *yudhmá* `לוחם`; *samád* `התגוששות`; *yúdh* `מלחמה`; *tárutra* `מכריע`;
  √*su* `סחט`, *sávana* `סחיטה`, *sotár* `סוחט`; *ándhas* `עסיס`; *índu* `טיפה`; *somapéya* `שתיית־הסוֹמָה`;
  *ápas* `מפעל`; *ā́yudha* `כלי־נשק`; *várman* `שריון`; *vívāc* `התנצחות`; *vā́ṇī* `מקהלה`; *sūktá* `מזמור`;
  *hávya* `ראוי־לקריאה`; *dúvas* `מחווה`; *deṣṇá* `דורון`; *dákṣiṇā* `שכר`; *ánr̥ta* `אי־הסדר`; *anenás*
  `חף־מעוון`; *várivas* `מרווח`; *prámati* `דאגה`; *āpí* `ידיד`; *yātú* `קסם`; *árāvan* `צר־העין`; *vrajá* `מכלאה`;
  the *-yú* adjectives `תאב־…`; √*han* of forts / weapons `ריסק` (split); √*nī* `הנהיג`; √*daśasy* `חנן`.
- **Collisions found, for the round's harmonization** (each left as the precedent has it, and noted at my lines):
  √*san* and √*van* both `זכה` (7.18.1b, 7.17.5a); *vibhaktár* `המחלק` (7.18.24b) and √*day* `חילק` (7.16.7d); *yúdh*
  `בקרב` (7.18.7d) against *pŕ̥tanā* `קרב` (7.8.4c) – I use *yúdh* `מלחמה`; √*daśasy* `העניק` (7.5.7d) against √*rā*
  `העניק` (7.18) – I use `חנן`; *turá* `זריז` (7.2.11b) against the ruling *ajirá* `זריז` – I use `נמרץ`; *tū́ya*
  `מהר` beside *āśú* `מהיר` (one root); √*yam* `הושיט` and 7.23.2a `הורם` (the cry "raised", by sense).
- **Names:** Kutsa's family `בני קוּטְסָה` (7.25.5a); no new name for §3.1. The verifier's Bharata regex (` bharat(?!i)`)
  matches the verb *bharate* "is brought" (7.24.2c, escaped with `[היתר שם]`): narrow it (e.g. ` bharat(?:a|ah|asya|an|ebhyah|anam)\b`).

### Lessons for the guidelines
- A shared closing stanza (7.28–30.5) is best drafted once and copied by script into the later files, with only the
  apparatus pointers changed: the identity check then passes by construction.
- Run the lemma ↔ Hebrew map of one's own range against the whole corpus before the hand-off: it found eleven drifts
  from the book's precedents in words that had looked new (`משתה־היחד`, `נתפסה`, `בכל עת` …).
- A name regex on the folded text catches verb forms of the same letters (*bharate* / Bharata): test every name regex on
  the commonest verbs of its root.

## Review of part 3 (RV 7.20–7.31; independent reviewer)
All 316 pādas read against the Zurich text and morphology (`data`), with `tr` and Jamison where a line was in doubt;
three scripts: every Zurich form has its פירוק segment and every פירוק Hebrew stands in its line (no misses), and the
corpus `lexmap` grouped lemma → Hebrew and Hebrew → lemma for every lemma of the part. **15 lines changed** (with their
פירוק / notes), one note corrected, three intros aligned. The draft is careful: its moods (subjunctive → future,
optative → `נא`, *mā́* + injunctive, the imperatives vocalized) and its Jamison readings are almost everywhere right;
the slips are of the kinds found in parts 1–2.
- **One Hebrew for two lemmas (consistency, 5 lines):**
  - 7.20.7c *dūrám* `רחוק` → `הרחק`: `רחוק` is *āré*'s (7.22.6c, 7.25.2c); `הרחק` as RV 10.16.9a *dūrám*.
  - 7.21.9c *samīké* `בהתנגשות` → `בעימות`: `התנגשות` is *samŕ̥ti*'s (RV 1.32.6c, the dossier) and *sám √r̥*
    `התנגש` (7.25.1b).
  - 7.30.3b, 4c *upamá* `העליונה` / `העליון` → `העילאית` / `העילאי`: `עליון` is *paramá*'s (RV 10.129.7c, 7.5.7a, AB,
    KU).
  - 7.31.6a *sapráthas* `רחב` → `נרחב`: `רחב` is *urú*'s (7.5.6d); *práthas* is the family of *pr̥thú* `נרחב`
    (7.5.8d). Intro 7.31 (title and quotation) aligned.
- **One lemma with two Hebrew (consistency, 2):** 7.27.1d *gómati* `עשירת־הפרות` → `בעלת־הפרות` (*gómant*
  `בעל־פרות`, 7.23.6c, 7.27.5c; intro aligned); 7.31.6c *yujā́* `השותף לרתמה` → `שותף־הרתימה` (7.1.13c).
- **Fidelity / mood (5 lines):**
  - 7.30.3c *ní … sīdat* (injunctive in a chain of subjunctives: 3a *vyuchā́n*, 3b *dádhaḥ*) `ישב` (reads as past) →
    `יֵשֵׁב` (Griffith "shall sit", Grassmann "sitze", Elizarenkova "пусть займет").
  - 7.31.7bc *ánu … sáhaḥ mamnā́te*: the verb stood twice (`את העוז הודו … / הודו, …`) and `הודו` at a line head reads
    as the imperative `הוֹדוּ` (a Psalm's word) → 7b `בעוז – …`, 7c `הִכִּירוּ, …`; *ánu √man* `הכיר ב־`. Intro 7.31
    aligned (`הכירו בעוזו`).
  - 7.31.5b `אַל תכניע` → `(ואַל) תכניע`: *mā́* stands once, in 5a.
  - 7.27.4a *nū́ cit* `לעולם (לא)` → `לעולם לא`: "never" is the particle's meaning, as 7.20.6a, 7.22.8a.
- **Ambiguity of the unvocalized line / register (3):** 7.26.4b *taráṇi* `החש` → `הֶחָשׁ`; 7.31.10c *cara* `נדוד` (reads
  as the noun) → `נְדוֹד`; 7.30.1d adverbial *máhi* `בגדול` (slang "big-time") → `מאוד` (Jamison: "greatly").
- **Note:** 7.21.5d, the Ezek 16:17 parallel: Ezekiel accuses Jerusalem herself, not "others" – the note now says so.
- **Checked and kept:** 7.21.5d *mā́ śiśnádevā ápi gur r̥táṃ naḥ*: prohibitive *mā́* + aor. injunctive 3 pl., the
  bahuvrīhi "whose god is the phallus", *ápi √gā* "go into" – the line `אַל – אֵלֶּה שאֵלָם הוא האבר – יחדרו אל
  הסדר שלנו` is exact (Geldner "Phallusverehrer … eindringen", Elizarenkova "членопоклонники не просочатся"), and
  `אבר` is a fair decent word for *śiśná*. 7.23.3c *ví bādhiṣṭa syá ródasī mahitvā́*: aor. injunctive middle,
  "pressed apart" (Geldner "drängte … auseinander", Elizarenkova "раздвинул") – `הוא לחץ לשני עברים` is right, no
  "firmament", no `הבדיל`; the Gen 1:7 [divergence] is sound. Also kept: 7.24.2a *dvibárhāḥ* `כפולת־העוצמה` agreeing
  with *mánas* (Jamison); 7.24.4c √*vr̥j* `נוטה` by sense (`שזר` is the hymn's "twisting"); 7.25.2c *śáṃsa* `קילוס`
  of the reviler (one Hebrew over sense; Jamison "pronouncement"); 7.30.4b *stávanta* passive (Geldner); 7.31.12b
  *dadhire* `העמידו` (not `שמו … מלך`, Deut 17:15).
- `build RV7.20-31`; `verify RV7.20-31 --strict`: 0 problems, 0 repeated-line differences; `check_bible_quotes.py` on the
  36 annotated, intro and generated files: 0 problems.
- **For the coordinator (near-synonyms or cross-part collisions, left for the harmonization):**
  - *turá* `נמרץ` (§11.12, binding; 7.2.11b, 7.22.5a) is also *yahvá*'s (7.6.5c, 7.8.2b, part 1): a new collision.
  - *vrajá* `מכלאה` (7.27.1d) against part 1's *pā́thas* `המכלאה` (7.4.9c, 7.5.7b): *vrajá* is the real cattle-pen;
    *pā́thas* ("place, station") should move.
  - *sudā́nu* (7.31.2a) and *sudátra* (7.8.3c) both `טוב־המתנות`; √*kr̥p* `התחנן` (7.20.9b) against √*nāth*
    `המתחנן` (RV 10.34.3b); *sūktá* `מזמור` (7.29.3a) against RV 10.14.4c *mántra* `מזמורים`; *jaraṇā́* `זקנה` against
    RV 10.18.6a *jarás*; abhí √*bhū* `היה עליון` (7.21.6a) shares `עליון` with *paramá*.
  - Book-wide shared words met here: *vŕ̥ṣan* / *vr̥ṣabhá* `פר`; *bhū́ri* / *purú* `רב`; *jána* `עמים` (7.30.2c, as
    7.16) beside *carṣaṇí* `עמים`.

## RV7.32–7.37 (part 4: the last Indra hymn; Vasiṣṭha's birth; the All-Gods; translator 4, Round 7 run 1)

### Scope
RV 7.32–7.37, 348 pādas: 7.32 (Indra, 106: 27 bṛhatī / satobṛhatī stanzas, 3 a two-pāda stanza), 7.33 (Vasiṣṭha and the
Vasiṣṭhas, 56), 7.34 (All-Gods, 58: 1–21 dvipadā virāj, 22–25 triṣṭubh), 7.35 (All-Gods, the *śám* litany, 60), 7.36
(All-Gods, 36), 7.37 (All-Gods: the Ṛbhus and Indra, 32). Six annotated files, six intros, built (`build RV7.32-37`);
`verify RV7.32-37 --strict`: no problems, 0 repeated-line differences; `check_bible_quotes.py` on my annotated files,
intros and the generated files: 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); `freq RV7.32-37`, `lexmap` and a script over the whole corpus's פירוק bullets
(lemma → Hebrew of my range against every other file, and Hebrew → lemma) for every recurring word; Grassmann and
Monier-Williams for the rare words; after drafting each hymn `tr` (Griffith, Grassmann, Geldner, Elizarenkova) and
Jamison's commentary on VII.32–37. Her readings adopted, with attribution: 7.32.2 (*suté sácā* formulaic, after X.50.7),
3a (the triple pun of *sudákṣiṇa*), 8c/9b (*ávase kr̥ṇudhvam*, *kr̥ṇudhvám … ātúje* as periphrastic causatives), 11a
(*vājayánt* denominative "seeking the prize"), 17d (*nā́ma bhikṣate* "begs a share in your name"), 18 (*etā́vat*
adverbial; the short-vowel optatives), 22c (*svardŕ̥ś* "sun-seeing", not Geldner's "whose eye is the sun"), 24 (the
*bhara* / *bháre-bhare* and *abhī́ ṣatáḥ* … *kánīyasaḥ* word plays); 7.33.1 (Indra speaks, at a rival sacrifice; no
"pilgrimage"), 2 (Pāśadyumna the deserted sacrificer), 4 (*ákṣam avyayam* = securing the axle, after III.53.19), 10–13
(Oldenberg's two births: 10 = the second, 11–13 = the first; *viśé* "to the clan"), 12a (loc. *praketé*), 12b (*sádāna*
"one gift"), 13a (*satré* "at a Sattra"; *Māna* = Agastya), 14 (Agastya speaks; the three priests); 7.34.2 (the waters
know the birth of Heaven and Earth), 3–4 and 7 (the unaccented *asmai* / *asya* as riddle markers: Indra, Savitṛ, Agni),
5a (*áhā iva*), 12b (*ádyu* "harmless", after Av. *aidiiu*), 16 (*sī́dan* predicate), 20 (the Wives of the Gods; Tvaṣṭṛ
and the embryo), 25b (*juṣanta* "enjoy", not "grant"); 7.35 (the template; 5b inside it); 7.36.1 (*ví sasre* from √*sr̥*
"stretch out", Narten), 2d (*mitrá* = "alliance" when spoken), 3 (*sū́da* "sweetness"; Soma rather than the rains, as an
alternative), 4 (*aryáman* as Indra's epithet, after Brereton), 5 (√*yaj* with abstract objects; *ví bābadhe* "pushes
out"), 6 (*vāvaśānā́* from √*vāś* "low"; the verse without a main clause), 8d (*vā́jam* an object of *prá kr̥ṇudhvam*);
7.37.5 (the *pravátaḥ* are river-courses, as 7.32.27), 6 (*vāsáyasi* "make wait"; *tātyá* "daddy's"), 7 (*tribandhú*
"having three bonds", not a name; *yám* of a and d a beleaguered man; Indra aged).

### Decisions
- **7.35, the *śám* litany – one pattern, exact, for the whole hymn** (the coordinator's brief; renderings §5.5 *śám*
  `אושר`): *śám* = `לאושר` every time; the copula (*astu*, *bhavatu*, *santu*, *bhavantu*, *bhavatām*) = `יהיה` /
  `תהיה` / `יהיו`, placed right after the `לאושר` of its own clause; *naḥ* = `לנו` after it – `לאושר יהיה לנו X`, and
  without a verb `לאושר לנו X`; a second *śám* in the pāda `ולאושר` (with *u*) or `לאושר`. Where another verb takes the
  place of "be" (4d "blow", 6d "hear", 8a "go up"), *naḥ* is its object: `לאושר תנשב עלינו`, `לאושר ישמע אותנו`,
  `לאושר יעלה לנו`. The rule is stated in the file's header and the note on 1a. *śambhú* `מביא־האושר`; *śáṃ yóḥ*
  `לאושר ולרווחה` (*yós* `רווחה`, as RV 10.15.4d). The pun *śám* / *śáṃsa* (2a, 2c) is noted, not imitated.
- **7.33, the family's myth:** the names of 7.18 copied (Sudās `סוּדָאס`, the Tṛtsus `טְרִטְסוּ`, Bheda `בְּהֵדָה`, the
  Bharatas `בְּהַרַטָה`); *vásiṣṭhāḥ* `בני וַסִישְׁטְהָה` (7.7.7a), the singular `וַסִישְׁטְהָה`; *dāśarājñá* `קרב עשרת
  המלכים`; *rétas* `זרע` (7a, 13b: the gate licenses it; the seed of Mitra and Varuṇa in the pot); Mitra–Varuṇa
  `מִיטְרָה וְוַרוּנָה`, *maitrāvaruṇá* `בן מִיטְרָה וְוַרוּנָה`; Urvaśī `אוּרְוַשִׁי`, Agastya `אַגַסְטְיָה`; the
  *apsarás* `אַפְּסַרַס` (pl. `האַפְּסַרַסוֹת`); Yama `יָמָה` in 9c/12c (*yaména tatám paridhím* "the border stretched by
  Yama"; √*tan* `פרש`); *drapsá* / √*skand* `טיפה` / `ניתז` (RV 10.17); *púṣkara* `לוטוס`; *satrá* `אספת־הזבח`;
  *kumbhá* `כד`; *Māna* `מָאנָה` (always vocalized: "refused"); new names Pāśadyumna Vāyata `פָּאשַׁדְּיוּמְנָה
  וָאיַטָה`, the Pratṛds `בני פְּרַטְרִד`; *śákvarī* `בתי־השַׁקְוַרִי`; *ukthabhŕ̥t* / *sāmabhŕ̥t* `נושא־האמירה` /
  `נושא־הניגון`; *grā́van* `אבן־הסחיטה` (*ádri* keeps `אבן`).
- **7.32:** *vāghát* `אנשי־הטקס` (from *adhvará* `טקס`); √*ram* caus. `השהה` (1b, 10b; the simplex `שמח` of KU / RV 10.34
  is another sense; 7.36.3a middle "come to rest" `נרגע`); Sudās `סוּדָאס` in 10a, with a note on the sense "generous"
  (Geldner, Griffith translate it); *pā́rye diví* `ביום המעביר` (14c, 21d; after *pā́rya* `המעבירות`, 7.27.1b; `המעבר` is
  KU's *samparāya*); *śraddhā́* `אמונה` (KU); *máyas* `הנאה` (`נחת` is KU's *sukha*); *áṃśa* `מנה` (`חלק` is *bhāga*);
  *prásiti* `מתקפה` (a split by sense from 7.3.4c `התקדמותך`); √*cud* `דרבן` (7.27.3d has `ידחוף`; √*nud* keeps `דחף`,
  7.18.16b, 7.32.25a); √*rāj* `מלך` (with *rā́jan* `מלך`; √*kṣā* `מלך` in part 3 – recorded); √*vr̥* 1 "obstruct"
  `עצר` (16d); *purūvásu* `רב־הטובות` (`רב־הטוב` is *prabhūvasu*, 7.22.2c); *sanā́t* `מאז ומעולם` (`מקדם` is KU's
  *purā́*); *táṣṭar* `מחשל` (√*takṣ* `חישל`); *jīvá* `חי` (26d, licensed); *vásyas* `טובה יותר` with `[היתר שער]` (the
  comparative of *vásu*; the licence does not see it).
- **7.34:** *janítra* `מולדת`; *ádha* left untranslated in 2b (Jamison); *vr̥tréṣu* `מחסומים` with `[היתר שם]`;
  *áhi budhnyà* `הנחש של המעמקים` (*áhi* `נחש`, licensed; *budhná* `מעמקים`, as *budhnyà* 7.6.7a); *abjā́*
  `ילוד־המים`; Apāṃ Napāt `נכד המים` (vocalized at its first occurrence); *pā́thas* `נווה` (renderings §11.12 asks to
  move it from `מכלאה`, which is *vrajá*'s; 7.4.9c still has `המכלאה`); *nadī́* `נהר` beside *síndhu* `נהר` (near
  synonyms, one Hebrew); *varuṇānī́* `אשת וַרוּנָה` (the name check passes, and the word is clear); *ródasī* in 22b the
  dual `שתי המחצות` (accent; the verb is singular by attraction – noted); *dyukṣá* `שוכן־השמים` (7.31.2b had `שמימית`,
  which is *divyá*'s word: recorded); *sahá* (adj.) `בעל־העוז`; *dharúṇa* `בסיס` (`יסוד` is *dhárman*'s); *pátnī*
  `רעיה`; *supāṇí* `טוב־הכפות` / *suhásta* (7.35.12c) `טובי־הידיים`.
- **7.36–37:** *suvr̥ktí* `שזירה טובה`; *dhā́man* `תחום` (RV 10.10.6c); √*yat* `יישר` (not the root of `סדר`); *mitrá*
  as name and "alliance" (2d, noted); *gnā́* `אִשָּׁה` (7.35.6d, by the Old Avestan cognate list, renderings §11.12);
  *arámati* `מסירות` (7.1.6c; = Av. *ārmaiti*); *sū́da* `מתיקות (?)`; *ū́dhar* `עטין`; *váyas* `מרץ`; *niṣiktapā́*
  `שומר־הנצוק` (not `זרע`, gated to *rétas*); *ślóka* `שֵׁמַע` (the root of √*śru*); the Ṛbhus `רִבְּהוּ`,
  *r̥bhukṣán* `שליט־הרִבְּהוּ`, the voc. *vā́jāḥ* (a Ṛbhu's name) `וָאגַ'ה`, kept apart from *vā́ja* `פרס`; *sūnŕ̥tā*
  `נדיבות` (KU 1.8a's `נועם דיבור` is the sense "kind speech": a split by sense, recorded); *nírr̥ti* `אֲבַדּוֹן` (the
  precedent of RV 10.10.11b, here a goddess: vocalized, no article; tagged with Job 28:22); *śarád* `סתיו` (RV 10.90,
  KU); *tribandhú* `בעל־שלושת־הקשרים` (Jamison; not the name Tribandhu = Vasiṣṭha of Geldner); *ásvaveśa* `חסר־בית`;
  *gábhasti* `יד` (beside *hásta* `יד`: near synonyms, recorded).
- **Moods and vocalization:** imperatives that read as past are vocalized (`בּוֹא`, `שְׁמַע`, `הֱיֵה`, `הָבֵא`, `סִחֲטוּ`,
  `בַּשְּׁלוּ`, `עֲשׂוּ`, `הַפְגִּינוּ`, `דַּרְבֵּן`, `דְּחַף`, `עֲשֵׂה`, `הִשְׁתַּדֵּל`, `שִׂימוּ`, `עִמְדוּ`, `שַׁגְּרוּ`,
  `עִזְרוּ`, `הָסִירוּ`, `שְׁבוּ`, `שְׁתוּ`, `חַלְּקוּ`, `מַלְּאוּ`); `אֶל` / `אֵלֶּה` / `הָאֵלֶּה` where a *deva* word is near.
- **The repeated pādas:** F6 in 7.34.25d, 35.15d, 36.9d, 37.8d. **7.34.25a–c is the first copy of 7.56.25a–c** (noted
  `[מקבילה: RV7.56 25a]` …). 7.32.11c / 25c share the frame `שלנו הֱיֵה עוזר – …`; 7.33.9c / 12c `את הגדר שפרש יָמָה`;
  7.34.21b copies 7.1.6c's `המסירות … שוחרת־הטוב`; 7.37.4c follows 7.14.3c / 7.17.7a (`לך … נהיה נא מגישים`); 7.36.1a
  follows 7.34.1a (`קדימה ילך / תלך`). No repeated-line difference.

### Open decisions for the user
- 7.35: the fixed pattern `לאושר יהיה לנו X` (the copula moved forward to the `לאושר` of its clause) against a closer
  word order with the verb at the end (`לאושר לנו X יהיה`). Chosen for the renderings' own model and for readability.
- 7.32.10a *sudā́s*: the name (with the sense "generous" in the note) against Geldner's and Griffith's common noun.
- 7.37.7a *nírr̥ti* `אֲבַדּוֹן`: the RV 10 precedent keeps a biblical word (Job 26:6, 28:22; Prov 15:11) for the goddess of
  dissolution; the echo is justified by sense and tagged. A transliteration `נִירְרִטִי` would avoid it.
- 7.36.4d / 7.37.7c: following Jamison (*aryáman* as Indra's epithet; *tribandhú* "having three bonds") against the
  readings with a god Aryaman and a person Tribandhu; the names stay in the lines where the base has them.

### Progress log
- 2026-11-09: drafted 7.32–7.37 hymn by hymn; each written (from a compact draft through a local assembling script that
  takes the forms, lemmas and morphology from the Zurich TSV, so that every word has its פירוק segment), filled and
  verified (`verify RV7.<n> --strict`) before the next, with its intro.
- Mid-part: the brief's new Old Avestan cognate list applied (*gnā́* `אשה` in 7.35.6d; *pā́thas* moved off `מכלאה`).
- Pass (a) fidelity: 7.33.1b (an over-long addition cut: the object is 1a's *mā*); 7.37.8b (a plural verb with the
  collective `העושר` made singular, as 7.35.2b); 7.34.8a punctuation; Geldner's / Jamison's construals checked at every
  `?`.
- Pass (b) consistency (lemma ↔ Hebrew against the whole corpus): *sukŕ̥t* `עושי־היטב` → `עושי־הטוב` (RV 10.16, 7.9);
  *śarád* `שנה` → `סתיו`; *yaśás* `מכובד` → `נכבד` (7.21.2c); *sā́nu* `גב` → `רכס` (7.2, 7.7); *dhā́man* `מעמד` → `תחום`
  (RV 10.10); √*bādh* `דחק` → `לחץ` (7.23.3c); *nírr̥ti* `נִירְרִטִי` → `אֲבַדּוֹן` (RV 10.10.11b); plural *sóma*
  `(משקאות) הסוֹמָה` → `מנות־הסוֹמָה` (7.24.1d); *máyas* `נחת` → `הנאה` (KU's *sukha*); *áṃśa* `חלק` → `מנה`
  (*bhāga*); *vaiśantá* `בריכה` → `אגמון` (7.103's *sarasī́*); √*car* `נע` → `נדד` (7.33.9b; `נעים` is KU's *préyas*);
  *sanā́t* `מקדם` → `מאז ומעולם`; *purūvásu* `רב־הטוב` → `רב־הטובות`; *pā́rya* `המעבר` → `המעביר`; *āré* `הרחק` →
  `רחוק` (7.22.6c); *yájatra* `ראויי לזבח`.
- Pass (c) Hebrew: the six generated files read through; the litany checked line by line for the one pattern.
- `build RV7.32-37`; `verify RV7.32-37 --strict`: 0 problems; `check_bible_quotes.py` on 18 files: 0 problems (all
  verses printed before quoting; the altar note of 7.35.7d given its verse, Exod 20:20 in the repository's numbering).

### The text on its own terms
- Gift exchange as the law of the rite: "only the one who fills (the god) is a pleasure to the one who fills" (7.32.8d);
  "the gods are not for the stingy" (9d); the poet's daring "if I were lord of as much as you, I would never abandon my
  praiser" (18–19).
- The competition of priestly families for one god: "let not even (other) cantors keep you far from us" (7.32.1); Indra
  rising from another's barhis to go to "my Vasiṣṭhas" (7.33.1–2); the poets "like flies on honey" (7.32.2b).
- The word wins the war: Indra helped Sudās in the battle of the ten kings "through your formulation, Vasiṣṭhas"
  (7.33.3d); the Tṛtsus, "like cut sticks for driving cows", spread out when Vasiṣṭha went at their head (7.33.6).
- The family's birth myth: the seed of Mitra and Varuṇa poured into a pot at a Sattra, the drop caught in a lotus,
  Vasiṣṭha born "from mind" of the apsaras Urvaśī, and received into the clan by Agastya (7.33.10–14) – a seer born
  without an ordinary father or mother, twice.
- The sacrifice as weaving: "weaving the border stretched by Yama", the first sacrificer (7.33.9c, 12c).
- Knowledge as riddles: "three make seed in the worlds …; all these the Vasiṣṭhas know" (7.33.7); the All-God hymn as a
  string of little riddles, each pointing to a god (7.34).
- The poem as a crafted vehicle: "well-fashioned like a prize-winning chariot" (7.34.1), the god "bent" with song as a
  carpenter bends a felloe (7.32.20).
- The whole world asked to be "for luck": gods, the parts of the rite (soma, stones, posts, the védi) and the powers of
  nature (sun, mountains, rivers, plants, wind) (7.35).
- The serpent of the depths – not an enemy here but a minor god to be pacified (7.34.16–17, 7.35.13b).
- *mitrá*, "alliance": the god who "aligns the people when he is spoken" (7.36.2d).
- Complaint and old age: the poet "kept waiting" (7.37.6a); Indra, unusually, as one who "has reached old age", a refuge
  for the man whom Dissolution rules (7.37.7).
- Light as life: "living, may we attain the light" (7.32.26d).

### Key parallels
- 7.32.23a–b – 1 Kgs 8:23, Isa 43:10: "none like you, in heaven or on earth; not born, nor to be born" (a shared motif of
  incomparability; in the RV praise of one god among many).
- 7.32.26b – Ps 103:13: the god as a father to his sons (here giving *krátu*, resolve).
- 7.32.26d – Ps 56:14: life as walking in the light.
- 7.32.27c – Isa 43:2: crossing the waters with the god.
- 7.33.3d – Exod 17:11: victory in battle hangs on the priest / man of god at the side (the formulation; Moses' hands).
- 7.33.5d – Ps 118:5: from the narrow siege to the wide (*urú*, *uloká*).
- 7.34.16a – Amos 9:3 [divergence]: the serpent at the bottom of the waters – God's agent in Amos, a god to be pacified here.
- 7.35.7d – Exod 20:20: an altar of earth (*védi* `מזבח`, the gate's licensed word).
- 7.35.15d – Num 6:26 [divergence]: a liturgy of blessing sealed with "peace".
- 7.37.7a – Job 28:22: Dissolution / Abaddon personified.

### Proposals for the shared renderings
- **The 7.35 pattern** (for §5.5 or §8, as a formula frame): *śáṃ naḥ* X *astu / bhavatu* = `לאושר יהיה לנו X`;
  without a verb `לאושר לנו X`; a second *śám* `ולאושר`; *śambhú* `מביא־האושר`; *śáṃ yóḥ* `לאושר ולרווחה`.
- **Words** (lemma → Hebrew, binding for Book 7 if accepted): *vāghát* `אנשי־הטקס`; √*ram* caus. `השהה`, mid. `נרגע`;
  *mákṣ* `זבוב`; *dádhyāśir* `מעורב־החלב־הקרוש`; *pītí* `שתייה`; *śrútkarṇa* `בעל־האוזן־השומעת`; *ápratiṣkuta*
  `שאין דוחים אותו`; *tvā́hata* `מוכה־ידך`; *paktí* `תבשיל`, √*pac* `בישל`; *máyas* `הנאה`; √*sridh* `כשל`; *kavatnú*
  `כילי`; √*puṣ* `שגשג`; *áṃśa* `מנה`; *ríp* `רמאי`; *ákharva* `לא־קטוע`; *supéśas* `יפה־עיטור`; *prásiti* `מתקפה`;
  *tvā́vasu* `שאתה טובו`; *pā́rya* `המעביר` (*pā́rye diví* `ביום המעביר`); √*cud* `דרבן`; *avamá* `התחתון`; √*rāj* `מלך`;
  *dhanadā́* `נותן־ההון`; *ājí* `מרוץ`; *avasyú* `שוחר־העזרה`; √*bhikṣ* `ביקש חלק`; *radāvasu* `חופר־הטוב`; *pāpatvá*
  `רוע`; *kuhacidvíd* `המוצא בכל מקום`; *táṣṭar* `מחשל`; *sudrú* `טוב־עץ`; *duṣṭutí* `שבח רע`; *suśákti* `יכולת קלה`;
  *svardŕ̥ś* `רואה־האור`; *purūvásu* `רב־הטובות`; *sanā́t* `מאז ומעולם`; *bhára* `פשיטה`; *suvéda* `קל־למציאה`;
  *mahādhaná* `ההון־הגדול`; *yā́man* `מסע`; *vr̥jána* `חבורה`; *áśiva* `לא־מיטיב`; 7.33: *śvityáñc* `לבנבן`,
  *dakṣiṇatáskaparda* `בעל־הצמה־מימין`, *dhiyaṃjinvá* `מפיח־ההגות`, *vaiśantá* `אגמון`, *pā́nta* `משקה`,
  *dāśarājñá* `קרב עשרת המלכים`, *júṣṭi* `התענגות`, *ákṣa* (axle) `ציר`, √*vyā* `עטף`, *ráva* `תרועה`, *tr̥ṣṇáj* `צמא`,
  *daṇḍá* `מקל`, *puraetár* `ההולך־בראש` (AB 7.18.6a has `מנהיג`, which part 2 gave *yantár*: for the harmonization),
  *jyótiragra* `שהאור בראשו`, *vakṣátha* `גאות`, *prajavá* `שעטה`, *sahásravalśa* `בעל־אלף־הענפים`, √*u* 2 / √*vā*
  "weave" `ארג`, *apsarás* `אַפְּסַרַס`, *satrá* `אספת־הזבח`, *kumbhá* `כד`, *sā́man* `ניגון`, *grā́van* `אבן־הסחיטה`;
  7.34: *janítra* `מולדת`, √*kṣar* `זרם`, *híraṇyabāhu* `בעל זרועות־הזהב`, *yā́tar* `נוסע`, *pátman* `מעוף`, *bhārá*
  `משא`, √*sādh* `הגשים`, *sahásracakṣas* `בעל־אלף־העיניים`, *rāṣṭrá* `ממלכה`, *ádyu* `בלתי־מזיק`, *dvíṣ* `שונא`, √*yu* 2
  `הסיר`, *rápas* `פגע`, *havyā́d* `אוכל־התקרובת`, *abjā́* `ילוד־המים`, *budhná* `מעמקים`, *r̥tāyú* `שוחר־הסדר`,
  *mahā́sena* `בעל־הצבא־הגדול`, *áma* `הסתערות`, *pátnī* `רעיה`, *supāṇí* `טוב־הכפות`, *rātiṣā́c* `מלווה־המתנה`,
  *várūtrī* `סוככת`, *suśaraṇá* `טוב־המקלט`, *pā́thas* `נווה`, *dyukṣá* `שוכן־השמים`, *dharúṇa* `בסיס`, *upástha* `חיק`,
  √*hā* with *ánu* `נענה`; 7.35: *rātáhavya* `שהתקרובת ניתנה לו` (7.19.6b's `נותן־התקרובת` is the human giver: a split by
  sense), *suvitá* `הליכה טובה` (7.2.6d has `רווחה`, which is *yós*'s: for the harmonization), *dhartár* `מחזיק`,
  *suháva* `קל־הקריאה`, *jyótiranīka* `שפניו אור`, *iṣirá* `מרענן`, √*vā* "blow" `נשב`, *pūrváhūti* `הקריאה הראשונה`,
  *jiṣṇú* `מנצח`, *suśáṃsa* `טוב־הקילוס`, *jálāṣa* `מרפא`, *gnā́* `אִשָּׁה`, *sváru* `יתד־הזבח`, *mití* `הצבה`, *prasū́*
  `נבט`, *védi* `מזבח` (the gate's word), *urucákṣas* `רחב־המבט`, *dhruví* `יציב`, *svarká* `טוב־הזמר`, *bhavítra*
  `המתהווה`, *kṣétra* `שדה`, *abhiṣā́c* `מתלווה`, *ápya* `מימי`, *suhásta* `טובי־הידיים`, *háva* `קריאה`, *ékapād*
  `בעל־הרגל־האחת` (*ajá ékapād* `התיש בעל־הרגל־האחת`), *perú* `המעביר`, *devágopā* `שהאלים שומריה`, *gójāta*
  `ילוד־הפרה`, *r̥tajñā́* `יודע הסדר`, *urugāyá* (noun) `רחב־הצעד`; 7.36: √*sr̥* 2 `השתרע`, *sā́nu* `רכס`, *padavī́* `גשש`,
  √*yat* `יישר`, √*brū* (bruvāṇá) `נאמר`, √*dhraj* `סחף`, *ityā́* `תנועה`, *sū́da* `מתיקות (?)`, *ū́dhar* `עטין`,
  *surátha* `טוב־המרכבה`, *dhāyú* `רעב (?)`, ā́ √*vr̥t* `סובב הנה`, *váyas* `מרץ`, *namasvín* `בעל־קידה`, *dhā́man*
  `תחום`, *pŕ̥kṣ* `מזון־כוח`, *yaśás* `נכבד`, √*vāś* `געה`, *síndhumātar* `שאמה הנהר`, *sudúgha* `טוב־החליבה`,
  *sudhārá* `טוב־הזרם`, *páyas* `לשד`, pári √*khyā* `התעלם`, *yújya* (adj.) `רתום`, *vidathyà* `של המועצה`, *ślóka*
  `שֵׁמַע`, *niṣiktapā́* `שומר־הנצוק`; 7.37: *vā́hiṣṭha* `המוביל ביותר`, *ámr̥kta* `שלא נפגע`, *tripr̥ṣṭhá*
  `משולש־הגב`, *r̥bhukṣán* `שליט־הרִבְּהוּ`, *vibhāgá* `חלוקה`, *árbha* `זעיר`, *gábhasti* `יד`, *sūnŕ̥tā* `נדיבות`,
  *vasavyà* `הטובות`, *ŕ̥kvan* `מזמר`, *sánitar* `זוכה`, √*viṣ* 2 `פעל`, √*vas* 3 caus. `הושיב`, *tātyá* `של אבא`,
  *pr̥kṣá* `מזין`, *śarád* `סתיו`, *supŕ̥kṣ* `עשיר־המזון`, *jarádaṣṭi* `מגיע־הזקנה`, *tribandhú*
  `בעל־שלושת־הקשרים`, *ásvaveśa* `חסר־בית`, *pāyú* `שומר`.
- **Names** (for §3.1, RV 7; vocalized at the first occurrence): Urvaśī, Agastya, Bheda, the Ṛbhus as in the table;
  new, in the files only: Pāśadyumna Vāyata `פָּאשַׁדְּיוּמְנָה וָאיַטָה`, the Pratṛds `בני פְּרַטְרִד`, Māna `מָאנָה`
  (★ always vocalized), the apsaras `אַפְּסַרַס`, Vāja (the Ṛbhu) `וָאגַ'ה` (★), Varuṇānī `אשת וַרוּנָה` (translated),
  Nirṛti `אֲבַדּוֹן` (translated, after RV 10.10.11b), Aja Ekapād `התיש בעל־הרגל־האחת` (translated).
- **For the harmonization:** √*nud* `דחף` / √*cud* (7.27.3d `ידחוף`, here `דרבן`); √*rāj* / √*kṣā* `מלך`; *dyukṣá*
  `שמימית` (7.31.2b) / `שוכן־השמים`; *suvitá* `רווחה` (7.2.6d) / *yós* `רווחה`; *puraetár* (AB `מנהיג`) / *yantár*
  `מנהיג`; *pā́thas* `המכלאה` (7.4.9c) still to move; *nadī́* / *síndhu* `נהר`; *gábhasti* / *hásta* `יד`; *śarád* /
  *saṃvatsará*; *sūnŕ̥tā* (KU `נועם דיבור`).

### Lessons for the guidelines
- A long part goes faster and safer when the translator writes only the Hebrew line and the per-word meaning and
  Hebrew, and a script copies the forms, lemmas and Zurich morphology into the פירוק (counting the segments against the
  tokens): no word can be skipped, and a re-run regenerates the file after every change (the `fill` runs after it).
- A litany needs its pattern written down before the first line (here in the file's header and the note on 1a): sixty
  pādas of "*śáṃ naḥ*" then follow one rule, and the generated text can be checked against it at a glance.
- The cross-corpus lemma ↔ Hebrew map found fifteen silent collisions with older texts (KU, RV 10, the Brāhmaṇas) in
  words that had looked new (`נחת`, `מקדם`, `נעים`, `חלק`, `בריכה`, `המעבר`): run it before the hand-off, against
  every corpus file, not only Book 7.
- The `טוב` licence does not cover *vásyas* (the comparative of *vásu*): an escape was needed (7.32.19d).

## Review of part 4 (RV 7.32–7.37; independent reviewer)
All 348 pādas read against the Zurich text and morphology (`data`), with `tr` and Jamison's commentary on VII.32–37
where a line was in doubt. Scripts over the part: (1) every Zurich token has its פירוק segment, in order and with the
same form (no misses); (2) **every grammar description of the assembling script set against its Zurich tag** (all ~230
tag/description pairs listed and read: the script decoded case, number, gender, tense, mood, voice, person and the
preverbs faithfully; the only departures are the translator's deliberate readings against Zurich, each explained in its
note: 7.32.24b *jyā́yaḥ* neuter, not voc.; 7.33.12a *praketé* loc.; 7.34.3b; 7.35.10c *naḥ* gen.); (3) every פירוק Hebrew
stands in its line; (4) a corpus-wide lemma ↔ Hebrew map of the part in both directions. **7.35's *śám* frame is kept
in all 60 pādas** (`לאושר` + copula + `לנו` + X; `לאושר לנו X` without a verb; `ולאושר` for *śám u*, `לאושר` without
*u* in 3c, 4b, 7a, 11d, 13b; the other-verb pādas 4d, 6d, 8a; 10c *naḥ* with *prajā́bhyaḥ* `לצאצאינו`). The moods are
right throughout (subjunctive → future, optative → `נא` / the conditional `הייתי` of 7.32.18–19, *mā́* + injunctive →
`אל`, the 3rd-person imperatives as jussive futures). **9 lines changed** (and their פירוק / notes), 7 פירוק segments
corrected, one intro aligned.
- **Ambiguity of the unvocalized line (4):** 7.32.13d *bhúvat* and 7.33.6c *ábhavat* `נהיה` (reads "we shall be") →
  `נִהְיָה`; 7.32.9c, 20a *taráṇi* `החש` → `הֶחָשׁ`, as part 3's 7.26.4b.
- **One Hebrew for two lemmas / meaning (2):** 7.33.10c *jánma* `תולדתך` → `לידתך`: `תולדה` is *tánaya*'s (renderings
  §11.10), and in Hebrew it means "offspring, outcome", not "birth" (the two births of Vasiṣṭha); `לידה` is *jánman* in
  KU 1.17a and AB 7.17.3d. 7.35.6b *suśáṃsa* `טוב־הקילוס` → `בעל הקילוס הטוב` (7.16.6d, part 2; the translator's
  Proposals list `טוב־הקילוס`: superseded).
- **Hebrew agreement (2):** 7.34.3b `גיבורות יחשבו (את עצמן), עזות` → `גיבורים יחשבו (את עצמם), עזים` (the waters:
  masculine in the Hebrew of 2b, 3a); 7.37.5b `אשר בהם` → `אשר בהן` (*yā́bhiḥ* ↔ `ההגויות`).
- **Mood (1):** 7.37.6d *ní … uhīta* (aor. optative) `יוביל` → `יוביל נא`.
- **פירוק only:** 7.33.6d `של הטְרִטְסוּ` → `הטְרִטְסוּ`; 7.33.9c, 12c `בידי יָמָה` → `יָמָה`; 7.34.19a `(על) האדמה` →
  `האדמה`; 7.36.5a `ולמרץ` → `ולמרצו` (the Hebrew of the line); 7.35.14b *kriyámāṇam* the case added; 7.37.7c
  *jarádaṣṭim* (Zurich: fem. noun) marked as the adjective of Indra the line reads (Geldner, Elizarenkova, Renou).
  **Intro 7.37:** `"לפי השירים"` → `"לפי הרעיונות"` (the line 2d).
- **Checked and kept (defensible):** 7.32.10b *páry āsa* `הקיף` (Geldner "hemmt"; Griffith "overturned"); 7.33.11d
  *tvā̀dadanta* `נתנו אותך` (Griffith "laid"; Geldner "fingen auf"); 7.34.23a *rā́yaḥ* nominative (Geldner, Renou;
  Jamison objects, noted); 7.34.22b the plural `ישמעו` for *śr̥ṇotu* (noted); 7.34.7b, 19a *bhū́man* `אדמה` (the gate
  licenses it; one root with *bhū́mi*); 7.36.7d *ávīvr̥dhan* past; 7.37.7 after Jamison (noted as open).
- `build RV7.32-37`; `verify RV7.32-37 --strict`: 0 problems, 0 repeated-line differences; `check_bible_quotes.py` on the
  18 annotated, intro and generated files: 0 problems. The ten tagged parallels say "shared motif"; none forced.
- **For the coordinator (left for the harmonization):**
  - *jánman*: 7.10.2c (part 2) `בין התולדות` shares `תולדה` with *tánaya*; align with `לידה`.
  - *perú* `המעביר` (7.35.13c) and *pā́rya* `המעביר` (7.32.14c, 21d; part 3 7.27.1b `המעבירות`): two lemmas of √*pr̥*
    in one Hebrew within the part.
  - *dūrá* (7.33.1d, 2a `מרחוק`; KU `רחוקות`; RV 10.16.9a `הרחק`) against *āré* `רחוק` (part 3's ruling).
  - *arbhaká* 7.33.6b `הקטנטנים` (the pejorative -*ka*-) against AB 7.16.8d `קטנים`, which is *kánīyas*'s word
    (7.20.7b, 7.32.24b).
  - √*ās* and √*sad* both `ישב` (7.32.2b, 7.33.14c / 7.33.9d, 7.34.16b); *niṇyá* `סתר` beside KU's *guhā́*.

## RV7.38–7.55 (part 5: Savitṛ, Bhaga, the All-Gods, Dadhikrā, Rudra, the Waters, the Ṛbhus, the Ādityas, Heaven and Earth, Vāstoṣpati, the sleep charm; translator 5, Round 7 run 1)

### Scope
RV 7.38–7.55: 18 hymns, 391 pādas (7.50.4e and 7.55's five-pāda stanzas 2–4 included). One annotated file and one intro
per hymn; `build RV7.38-55` generated the clean files.

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`data`); the dictionaries (`mw`, `gra`) for the hapaxes.
- After drafting each hymn: `tr` (Griffith, Geldner, Grassmann, Elizarenkova, Renou; Griffith quoted from `tr`, Geldner
  only a few words) and Jamison's commentary (`VII.1–55-9-25-26.txt`, VII.38–VII.55), cited where it discusses a stanza.
- The binding precedents: renderings §5.5, §11.10–§11.13, parts 1–4 Decisions/Proposals and the part 1–4 reviews
  (`freq RV7.38-55`, `lexmap`, `grep --all`); the Old Avestan cognate list (renderings §11.12, last bullet).
- Bible verses printed before quoting (`check_bible_quotes.py --show`): Gen 1:2, Ps 33:13, Lam 5:7.

### Decisions
- **Savitṛ's verb:** √*sū* 1 "impel" `האיץ` (*savá* `האצה`; *prá* √*sū* `האיץ`, *nís* √*sū* `האיץ החוצה`). `המריץ` was
  the natural word but is √*jū*'s (7.20.10b, 7.21.5a; 7.40.3c keeps it for √*jū*); `הניע` is √*cyu* caus. (7.19.1b).
  The note on 7.38.1a explains the pun *savitár* / *savá*.
- **Savitṛ's "form":** *amáti* (7.38.1b, 2c; 7.45.3c) `מראה` – a homonym of *amáti* "poverty" (7.1.19b `דלות`): split
  by sense; `דמות` is reserved. √*śri* `השעין` (7.38.1b, 7.39.1a keep the echo Jamison points out; *ví* √*śri*
  `השעין לרווחה`).
- **Bhaga and the pun on *bhága*:** the god `בְּהַגָה`; the common noun *bhága* "portion" `חלק` (RV 10.17.9c; 7.41.2d with
  `[היתר שם]`), and √*bhaj* `חילק`, so the king's words *bhágam bhakṣi* are `"חַלֵּק חלק!"`; *bhágavant* `בעל־חלק` (7.41.4a,
  5ab: the pun on the name is noted) against the later honorific `נכבד` (ŚB, MBh): a split by sense and period.
- **√*yā* 2 "beg"** `התחנן` (7.38.6b, 6d; 7.52.3b; 7.54.1c *ī́mahe*); 7.39.2b *iyāte* is lemmatized √*yā* 2 but means
  "hasten" (Geldner, Renou, Jamison): `ממהרים (?)`, a split noted. **√*yā* 1** keeps the precedent `בא` (also "go home",
  7.38.8d `בּוֹאוּ`; the Aśvins' circuit 7.40.5d `בּוֹאוּ … בסבב`).
- **7.38.6b = 7.52.3b** (identical folded text): the Hebrew is copied; only the number changes (`מתחנן` / `מתחננים`:
  *iyānáḥ* sg. / *iyānā́ḥ* pl., the accent lost in folding) – justified in the apparatus; the one repeated-line difference.
- **The repeated pādas fixed here (first copies):** 7.39.7a–c = 7.40.7a–c (`עתה משובחות שתי המחצות בידי בני וַסִישְׁטְהָה,
  / נאמני הסדר – וַרוּנָה, מִיטְרָה, אַגְנִי. / יושיטו לנו הבהירים את הזמר העילאי;` – the models for 7.62.3bc); 7.40.5d
  `בּוֹאוּ, אַשְׁוִינִים, בסבב עמוס־המזון.` (model for 7.67.10b, 7.69.8b); 7.41.7a–c (model for 7.80.3a–c); F8 in
  7.49.1d–4d `המים הָאֵלֶּה, האֵלוֹת, יעזרו לי כאן.`; the 7.50 refrain 1d = 2d = 3d `אַל ימצא אותי הזוחל בפגע של הרגל.`;
  7.55.2e = 3e = 4e `הֵרָדֵם היטב!`, 3c–d = 4c–d. F6 in 15 hymns.
- **The *śám* frame of 7.35** applied in 7.38.7a (`לאושר יהיו לנו זוכי־הפרס, בקריאות,` – Jamison: almost = 7.35.9b) and
  7.54.1d (`לאושר הֱיֵה לנו – לבעל שתי הרגליים, ולאושר – לבעל ארבע הרגליים.`).
- **Gates and names:** *áhi* `נחש` (7.38.5c Ahi Budhnya `הנחש של המעמקים`, after 7.34; 7.38.7c a real snake); *vā́ta*
  / *vāyú* `רוח` (7.39.2d, 7.40.2d, 6d); *bhū́man* `אדמה` (7.45.1d, as 7.34); *jīvá* in *jīvaśaṃsá* `החיים` (7.46.4c);
  *sādhú* / *bhadrá* `טוב` (7.43.2c, 7.41.7b); *dhánus* in *sthirádhanvan* `קשת` (7.46.1a). No *rétas* or *púruṣa* in
  the range. 7.42.2b *rohítaḥ* "red mares" and 7.46.1d *bharata* "bring!" needed `[היתר שם]` (the name regexes of Rohita
  and the Bharatas catch the common words). *aṣṭhīvánt* "knee" `ארכובה` (7.50.2b), because the root ברך is gated to
  *jā́nu*; *púṇyagandha* `נעים־הריח`, not `ניחוח` (reserved). 7.49.3b *jánānām* `האנשים` (a first draft `בני האדם`
  slipped through the `אדם` gate only because *nr* in *satyānr̥té* licensed it – a false licence; fixed).
- **Vāstoṣpati** split in two words (*vā́stoṣ pate*, 7.54.1a, 2a, 3a, 7.55.1a) is still transcribed as the name
  `וָאסְטוֹשְׁפַּתִי` (renderings §3.1), the meaning "Lord of the house-site" in the notes; *vā́stu* is not *vástu*
  "morning" (7.1.6b).
- **The Ṛbhus' names (7.48):** *r̥bhukṣán* `שליט־הרִבְּהוּ`, voc. *vā́jāḥ* / *vā́jaḥ* the Ṛbhu `וָאגַ'ה` (part 4), and the
  third, *víbhvan* `וִיבְּהְוַן`, its plural *vibhú* `הוִיבְּהוּ` (7.48.2b; KU 2.22b's *vibhú* `המקיפה` is the adjective:
  split); the pun *vā́jo … vā́jasātau* is kept as name + `בזכייה בפרס`. 7.48.2d *vr̥trám* `המחסום` with `[היתר שם]`.
- **7.50 and 7.55 (charms):** the afflictions *śipadá*, *śimidā́*, *ajakāvá*, the tree *śalmalí* transcribed; *tsáru*
  `הזוחל`. 7.55: √*sas* `ישן` (5a–d) apart from √*svap* `נרדם` / caus. `הרדים`; the dog *sārameyá* `בן סַרַמָא` (RV 10.14.10a);
  √*rā* 2 "bark" `נבח`; √*dr̥* intens. `הבקיע שוב ושוב` (7.18.13b); *sám* √*han* (eyes) `הצמיד`.
- **Moods:** imperatives that read as past are vocalized (`עֲמוֹד`, `שְׁמַע`, `עִזְרוּ`, `שְׁתוּ`, `הִתְבַּסְּמוּ`, `בּוֹאוּ`, `הוֹבֵל`,
  `זְבַח`, `רְתוֹם`, `שִׂימוּ`, `הַצִּיעוּ`, `גוֹנְנוּ`, `חַלֵּק`, `חוֹנֵן`, `שְׁמוֹר`, `נְבַח`, `הֵרָדֵם`, `הַבְקַע`); *mā́* + injunctive `אַל`
  (vocalized); `אֶל` and `הָאֵלֶּה` vocalized beside the deva words.
- **Readings against the literature:** 7.38.4d *mitrā́saḥ* `מִיטְרָה (וחבריו)` (Jamison: pun on "allies"); 7.38.5ab with
  Jamison (the Gift Escorts "also greet" Savitṛ; *vanús* "eager" `להוטים`, a split from 7.21.9d `החומסים`); 7.38.6b
  *iyānáḥ* active with Geldner (Jamison passive, noted); 7.38.7–8 the *vājínaḥ* left as "prize-winners" (horses or the
  Maruts, both noted); 7.39.1d *r̥tám* `את הסדר` with Jamison's "truth = hymn" in the note; 7.39.2a passive (Geldner)
  against Jamison's active; 7.39.2b *bī́riṭa* left untranslated (`ב… (?)`, Jamison); 7.40.5a *avayā́* "propitiation"
  (Oldenberg, Jamison); 7.44.3c *mām̐ścatú* `מסתיר־הירח (?)` with Jamison's alternatives; 7.53.2b *sádane* dual (Zurich,
  Geldner) against Jamison's loc. sg. (noted).
- **Consistency pass corrections (after `lexmap`, before the hand-off):** *didyút* `רומח` (7.25.1c), so *r̥ṣṭí*
  `כידון`; √*car* `נדד` (not `משוטט`); √*brū* `אמר`; *pūrvajá* `הנולדים־לפנים` (RV 10.14.15c); *rāyáskāma* `חושק־העושר`
  (7.32.3a); √*sru* `זרם` (RV 1.32.14c); *yájatra* `ראוי לזבח` against *yajñíya* `ראוי הזבח`; *jánman* `לידה`
  (the part 4 review).

### Open decisions for the user
- √*sū* "impel" `האיץ` (Savitṛ) – the Hebrew is a little technical ("speed up"); `המריץ` would be better if √*jū* (parts
  3–4) moved to another word.
- 7.55's frame: the lover's-charm reading of the older literature (AV 4.5 is a parallel sleep charm, with the thousand-horned bull) against a plain household lullaby-charm
  (the intro leaves it open).
- *anamīvá* `חסר־מחלה` (7.46.2d, 7.54.1b) keeps Book 7's *ámīvā* `מחלה` visible; RV 10.14–18 have `בלי־חולי`.

### Progress log
- Drafted hymn by hymn, each saved, `fill`ed and `verify`ed before the next (7.38 → 7.55); a compact spec per hymn
  assembled by the part 4 script (`gen.py`: the Zurich forms, lemmas and morphology copied into the פירוק, the segments
  counted against the tokens), every override of a grammar description written by hand where Zurich's tag lacks the
  tense (the reduplicated aorist *áśiśret*, the precative *maṃsīṣṭa*, the *-si* imperatives *yakṣi*, *bhakṣi*) or the
  form needs a note (gerundives, the intensive).
- Pass (a) fidelity: every line read against the base after the translations; negations and moods checked (the *mā́*
  prohibitives, the optatives `נא`, the subjunctives as futures). Rank-3 quotations: one stanza of Griffith/Geldner in
  7.41 had been written from memory in the draft and was replaced from `tr` before saving (see Lessons).
- Pass (b) consistency: the lemma ↔ Hebrew map of the part against every drafted file (both directions); 13 lines changed
  (above), plus vocalization and the `אֶל` / `הָאֵלֶּה` fixes the verifier asked for.
- Pass (c) Hebrew: all 391 lines read in sequence.
- `build RV7.38-55`; `verify RV7.38-55 --strict`: **0 problems**, one repeated-line difference (7.38.6b / 7.52.3b,
  justified); `check_bible_quotes.py` on the 54 annotated, intro and generated files: 0 problems.

### The text on its own terms
- **Savitṛ, the god of the daily rhythm** (7.38.1–4, 7.45): he lifts his golden arms and "golden form", "impels" men to
  their food in the morning and "makes the earth enter (rest)" at night (7.45.1d); even the Sun yields to him (7.45.2d).
- **The economy of portions** (7.38.6, 7.40.1d, 7.41): Bhaga is the share-giver; the weak and the strong, the poor man
  and the king all ask him "apportion a portion!", and Bhaga himself must "have a portion" before he can give (7.41.5ab).
- **The All-Gods hymns as a ritual sequence** (7.39, 7.42–43): the fire rises, the pressing stones set out "like two
  charioteers", the barhis is twisted, the gods sit on it "like children carried on their mother's lap" (7.43.3a), the
  hymns branch out "like the branches of a tree" (7.43.1d).
- **Fear of Rudra** (7.46): a prayer to be passed by – his dart "roams the earth", he holds "a thousand remedies"; the
  worshippers ask for children free of illness and a share "in the praise of the living".
- **The Waters as goddesses** (7.47, 7.49): drink of Indra, carried by Apāṃ Napāt; flowing out of the primeval *salilá*,
  never resting; Varuṇa walks among them, "looking down on the truth and the untruth of men" (7.49.3b).
- **Village medicine** (7.50): swellings that "nest", rashes on the paired joints, the poison of the silk-cotton tree, of
  rivers and plants, and "the creeper" that strikes the foot.
- **Inherited guilt** (7.52.2c): "may we not pay for an offense against you born of another".
- **Heaven and Earth asked to move** (7.53.2): Jamison's point – Father Heaven's immobility as a reason for his eclipse.
- **The house** (7.54–55): the god of the house-site "easy to enter", good "to the two-footed and the four-footed", in
  rest and on the road; then the night: the dog barking at "Indra's praisers", the whole household put to sleep line by
  line, the eyes of every watcher shut "as this house is shut", the women on their cots and litters.

### Key parallels
- 7.49.1a [divergence] Gen 1:2 – primeval waters in both, but here active, flowing, purifying goddesses (the *salilá* of
  RV 10.129.3 kept as `נחשול`, not `תהום`).
- 7.49.3b [equivalent] Ps 33:13 – the god who looks down on all men and tells truth from falsehood; here Varuṇa from
  within the waters.
- 7.52.2c [equivalent] Lam 5:7 – the fear of bearing another's sin; the source does not say "fathers" (cf. Ezek 18).

### Proposals for the shared renderings
- **Words** (lemma → Hebrew; binding for Book 7 if accepted): √*sū* 1 `האיץ`, *savá* `האצה`; *amáti* (form) `מראה`; √*śri*
  `השעין`; *hiraṇyáya* `זהוב`; *híraṇyapāṇi* `בעל כפות־הזהב`; *prábhr̥ti*, *prabhr̥thá* `הבאה`; *cánas* `עונג`; √*sap*
  `שירת`; *vanús* (eager) `להוט`; *ékadhenu* `בעלת־הפרה־האחת`; *ánu* √*man* `אישר`; *jā́spáti* `אדון־המשפחה`; √*yā* 2
  `התחנן`; *ánugra* `שאינו עז`; √*jambh* `מעך`; *vŕ̥ka* `זאב`; *sánemi* `לגמרי`; *devayā́na* (adj.) `ההולך־אל־האלים`;
  *jūrṇí* `גחלת`; *iṣitá* / *iṣádhyai* `מוזעק` / `להזעיק`; *suprayā́* / *sugá* `קל־לדריכה`; *niyútvant* `בעל־הצמד`;
  *śubhrá* `מבריק`; *urujrí* `רחב־המהלך`; *ū́ma* `עוזר`; *ásinvant* `רעבתן`; *avidasyá* `שאינו אוזל`; *sadāsā́*
  `זוכה־תמיד`; *dyúbhakta* `המחולק מן השמים`; √*diś* `הקצה`; √*yu* 1 `קשר`; *pŕ̥ṣadaśva* `בעל־הסוסים־המנומרים`;
  *paryetár* `עוקף`; *anarvá* `שאין לו מתקיף`; *áriṣṭa* `שלא ניזוק`; *avayā́* `ריצוי`; *eṣá* `חפוז`; *rudríya*
  `רוּדְרִי`; *vartís* `סבב`; √*irasy* `קינא`; *mayobhū́* `מביא־ההנאה`; *vr̥ṣṭí* `גשם`; *ratnín* `בעל־האוצרות`;
  *prātár* `בבוקר`; *prātarjít* `מנצח־הבוקר`; *praṇetár* `המוביל־קדימה`; *idā́nīm* `עתה`; *prapitvá* `התקדמות`;
  *bhágavant* `בעל־חלק`; *vasuvíd* `מוצא־הטוב`; *krandanú* `שאגה`; *udaprút* `שוחה־במים`; *péśas* `עיטור`;
  *sánavitta* `שנמצא מאז ומעולם`; *rohít* `אדמדמה`; *vīraváh* `נושא־הגיבורים`; *purvaṇīka* `רב־הפנים`; *syonaśī́*
  `שוכב־הרכות`; *súprīta* `מרוצה־היטב`; *íyant* `כזה`; *viśvápsnya* `של כל־הצורות`; √*prath* (trans.) `הפיץ`; *ásama*
  `שאין כמותו`; *víṣvañc* `לכל עבר`; *śā́khā* `ענף`; *hétva* / √*hi* `שמזרזים אותו` / `זירז`; *sápti* `סוס־מרוץ`;
  *sámanas* `אחיד־המחשבה`; *víbhr̥tra* `נישא בזרועות`; *viśvā́cī* `הפונה־לכל־עבר`; *mŕ̥dhas* `ביזיון`; *jóṣa*
  `התענגות`; *yáti* `כמה`; *ā́skra* `מלוכד`; √*budh* caus. `עורר`; *bradhná* `נחושתי`; *mām̐ścatú* `מסתיר־הירח (?)`;
  *śárdhas* `גדוד`; *mahiṣá* `תאו`; *antarikṣaprā́* `ממלא־חלל־האוויר`; *śithirá* `רפוי`; √*pan* `התפעל`; *apasyā́*
  `פעלתנות`; *sahā́van* `בעל־העוז`; *vásupati* `אדון־הטוּב`; *sujihvá* `טוב־הלשון`; *pūrṇágabhasti* `מלא־היד`;
  *sthirá* `איתן`; *kṣipréṣu* `בעל־החץ־המהיר`; *tigmā́yudha* `בעל־הנשק־החד`; *sā́mrājya* `מלכות־עליונה`; *kṣámya* `של
  התבל`; *jā́* `ילד`; *svapivāta* `טוב־ההבנה`; *bheṣajá* `תרופה`; √*vadh* `קטל`; *párā* √*dā* `הפקיר`; *jīvaśaṃsá*
  `קילוס החיים`; *indrapā́na* `משקה־אִינְדְּרָה`; *íḍ* `רוויה`; *ariprá* `נקי־מכתם`; *ghr̥taprúṣ* `מתיז־החמאה`;
  *mádhumant* `מתוק`; *āśuhéman* `מזרז־המהירים`; *śatápavitra* `בעל מאה המסננות`; √*rad* `חפר`; *samudrájyeṣṭha*
  `שהים גדולן`; *ániviśamāna* `שאינו שוקע`; *khanítrima* `חפור`; *svayaṃjā́* `ילוד־מעצמו`; *samudrā́rtha* `שמגמתו
  הים`; *satyānr̥tá* `האמת ואי־הסדר`; *madhuścút* `נוטף־הדבש`; *kulāyáyant* `מקנן`; *tsáru* `זוחל`; *pádya* `של
  הרגל`; *vándana* (rash) `פריחה`; *vijā́man* / *párus* `פרק התאום` / `פרק`; *aṣṭhīvánt* `ארכובה`; *kulphá* `קרסול`;
  √*dih* `מרח`; *viṣá* `רעל`; *pravát* / *nivát* / *udvát* `מדרון` / `שקע` / `גובה`; *udanvánt* / *anudaká* `רב־המים` /
  `חסר־המים`; *nū́tana* `חדש`; *śáṃtama* `המאושר ביותר`; *anāgāstvá* `חוסר־אשמה`; *adititvá* / *áditi* (noun)
  `חוסר־גבולות` / `חסר־גבולות`; *rájiṣṭha* `הישר ביותר`; *devatrā́* / *martyatrā́* `בקרב האלים` / `בקרב בני התמותה`;
  √*maṃh* `נדב`; √*bhuj* 2 `שילם על`; *anyájāta* `שנולד אצל אחר`; √*ci* 2 `העניש`; *turaṇyú* `חש`; *deváputra*
  `שבניהן אֵלִים`; *pitárā* (du.) `שני ההורים`; *sádana* `מושב`; *áskr̥dhoyu* `בלתי־מקוצר`; *svāveśá* `קל־הכניסה`;
  *pratáraṇa* `מעביר הלאה`; *gayasphā́na* `מרבה־הנחלה`; *śagmá* `מועיל`; *raṇvá* `עליז`; *gātumánt* `רב־הנתיבים`;
  *kṣéma* / *yóga* `מנוחה` / `רתימה` (KU 2.2b's later idiom "acquiring and keeping" is a split); *amīvahán*
  `הורג־המחלות`; *árjuna* `לבן`; *piśáṅga* `אדמוני`; *r̥ṣṭí* `כידון`; √*bhrāj* `הבזיק`; *srákva* `לסת`; √*bhas* `לעס`;
  *stená* `גנב`; *táskara* `שודד`; √*rā* 2 `נבח`; *punaḥsara* `הרץ־לאחור`; √*duchunāy* `איים`; *sūkará* `חזיר־בר`; √*sas*
  `ישן`; *jñātí* `קרוב`; *abhítas* `מסביב`; *harmyá* `טירה`; *sahásraśr̥ṅga* `בעל אלף הקרניים`; *úd* √*car* `עלה`;
  *proṣṭheśayá* / *vahyeśayá* / *talpaśī́van* `השוכבת על הספסל` / `באפריון` / `במיטה`; *púṇyagandha* `נעים־הריח`.
- **Names** (vocalized at the first occurrence in each file; in the files only): Vibhvan `וִיבְּהְוַן`, the Vibhus
  `הוִיבְּהוּ`; Saramā `סַרַמָא` (*sārameyá* `בן סַרַמָא`, after RV 10.14.10a); *ajakāvá* `אַגַ'קָאוָה`; *śalmalí*
  `שַׁלְמַלִי`; *śipadá* `שִׁיפַּדָה`, *śimidā́* `שִׁימִידָה`. Brahmaṇaspati split in two words (*bráhmaṇas pátim*, 7.41.1c,
  7.44.1c) translated `אדון הנוסח` with the name in the note.
- **Formulas and repeated lines** (for the later parts): the 7.39.7 / 7.40.7 closing stanza (= 7.62.3bc), 7.40.5d (=
  7.67.10b, 7.69.8b), 7.41.7a–c (= 7.80.3a–c) as given under Decisions.
- **For the harmonization:** √*sū* / √*jū* (`האיץ` / `המריץ`); *anamīvá* `חסר־מחלה` (Book 7) / `בלי־חולי` (RV 10);
  *śáṃtama* `המאושר ביותר` / RV 10.15.4c `נעים`; √*ās* / √*sad* `ישב` (7.55.6a, as part 4); √*sru* `זרם` / √*kṣar* `זרם`
  (part 4); *jñātí* / *bándhu* `קרוב`; *nā́rī* / *strī́* `אישה` (both, after RV 10); √*sas* `ישן` / KU's √*śī* `יישן`;
  *sū́ra* "sun" `שמש` beside *sū́rya*; *ágre* `בתחילת` used of place (7.44.4b, as 7.8.1d).

### Lessons for the guidelines
- **Fetch the rank-3 text before writing the תרגומים bullet, for every stanza, not only the doubtful ones**: in a long
  run a remembered Griffith line slipped into a draft (7.41, two stanzas) and was caught only because the stanza was
  printed later; the safe order is `tr` for the hymn first, then the spec.
- **A gate's licence list can be satisfied by an unrelated word of the same pāda**: `בני האדם` for *jánānām* passed the
  `אדם` gate because *nr* (licence of *nár*) occurs inside *satyānr̥té*. The verifier could match licences on the Zurich
  lemmas of the line instead of on substrings of the folded pāda.
- **Name regexes still catch common words**: *bharata* "bring!" (√*bhr̥*, 7.46.1d) and *rohítaḥ* "red mares" (7.42.2b)
  need licences; the Bharata regex could exclude the 2nd pl. imperative where Zurich tags √*bhr̥*.
- The part 4 assembly script, kept from run to run in the scratchpad, made an 18-hymn part manageable in one session;
  `lexmap` both ways before the hand-off found 13 silent collisions, most with parts 2–4 (*didyút*, √*car*, √*brū*,
  *rāyáskāma*), none visible in the renderings tables.

## Review of part 5 (RV 7.38–7.55; independent reviewer)
All 391 pādas read against the Zurich text and morphology (`data`), each Hebrew line beside its Zurich tags and its
פירוק segments (a side-by-side script), with `tr` and Jamison where a line was in doubt; every gated word of the part
listed with the source token that licenses it; `lexmap` for every lemma in doubt. The draft is careful: the moods are
right almost everywhere (subjunctive → future, optative → `נא`, *mā́* + injunctive → `אַל`), the 7.50 / 7.55 refrains
and F6 / F8 are exact, and the pāda boundaries are kept. **12 lines changed** (and their פירוק / notes), one פירוק
corrected, one intro aligned.
- **One Hebrew for two lemmas (3):**
  - 7.39.2a *suprayā́* `קל־לדריכה` → `טוב־לדריכה`: `קל לדריכה` is *sugá*'s (7.42.2a; *sugá* recurs in 7.62.6c, 7.63.6c,
    7.104.7c, so it keeps the word); *su-* `טוב־` as elsewhere in the book (Geldner "angenehm zu betreten"). The
    translator's Proposals row "*suprayā́* / *sugá* `קל־לדריכה`" is superseded.
  - 7.42.2b/2c: *rohít* `האדמדמות` → `האדומות`, *aruṣá* `האדומים` → `האדמדמים`: `אדמדם` is *aruṣá*'s word in the book
    (7.3.3c, 7.16.2a, 3c); the draft moved it to *rohít* and gave *aruṣá* a new one (recorded as a split). Intro 7.42
    aligned (`הצהבהבות והאדומות`). The Proposals row *rohít* `אדמדמה` becomes `אדומה`.
  - 7.48.3b *vanvan* (√*van*) `הם מנצחים` → `הם זוכים` (`את כל` → `בכל`): √*van* is `זכה` in all of Book 7 (7.47.1d
    `נזכה נא` in this part), `ניצח` is √*ji*'s (7.18.13d, 7.32.9c; *prātarjít* `מנצח־הבוקר` 7.41.2a).
- **Mood / tense (2):** 7.48.4c *dadīran* (optative) `יתנו` → `יתנו נא`; 7.54.1c *ī́mahe* (present indicative)
  `נתחנן` (reads as a future or as a past 3rd person) → `אנו מתחננים`.
- **Ambiguity of the unvocalized line (3):** 7.40.1b *dadhīmahi* `נשים נא` (reads "women") → `נָשִׂים נא`; 7.44.4b
  *bhavati* `הוא נהיה` → `הוא נִהְיָה` (as the part 4 review); 7.46.3a *ávasr̥ṣṭā* `שולח` (reads as the active
  participle "sends") → `שֻׁלַּח`.
- **Hebrew agreement (1):** 7.49.2a `שמימיים … זורמים` → `שמימיות … זורמות`: the waters are feminine (goddesses) in
  every other line of the hymn (1b, 2b–c, 3c, F8 `האֵלוֹת`).
- **A gated word licensed by an unrelated word (1):** 7.54.2a `מעביר (את החיים) הלאה` → `מעביר הלאה`: `חיים` is
  gated to *jīvá* / *ā́yus* / *ásu*, none in the pāda; it passed only because the licence text takes the first word of
  the next pāda, *gayasphā́naḥ*, and *gaya* (licence of Av. *gaiia* "life") matched – Skt. *gáya* is "household,
  property". The implied "life" is now in the note. The other gated words all have their own source word, with one
  false-licence pass that is right all the same: 7.46.3c *svapivāta* `טוב־ההבנה` passed by the *vam* inside the
  lemma *tvám*, but the word itself is *su-api-vāta* (*su-* before a vowel), so `טוב` is licensed in substance.
- **פירוק only:** 7.40.5c *vidé* – Zurich lemmatizes √*vid* 2 "find" (Griffith "gained"); the line follows Geldner,
  Grassmann, Renou (√*vid* 1, "knows"), and the פירוק now says so.
- **Checked and kept (defensible):** 7.40.1d *ratnínaḥ* as gen. sg. (Zurich nom. pl.; Griffith, Geldner); 7.46.2a
  *kṣáyeṇa* `בדירתו` (Geldner, Elizarenkova, Renou: "Wohnsitz"; Griffith "lordship"); 7.39.1c *bhejā́te* `נטלו` (√*bhaj*
  middle "take to (the path)", beside `חילק`); 7.43.4a *sīṣapanta* passive; 7.42.3a *mahayan* (injunctive) as a
  jussive future; 7.44.3b `אני אומר:` (√*brū* `אמר`, *úpa* "address"); 7.42.2d *jánimāni* `לתולדות` (the 7.2.10d
  precedent for *jániman*).
- `build RV7.38-55`; `verify RV7.38-55 --strict`: 0 problems, one repeated-line difference (7.38.6b / 7.52.3b, the
  number of *iyānáḥ* / *iyānā́ḥ*, justified); `check_bible_quotes.py` on the 54 annotated, intro and generated files:
  0 problems. The three tagged parallels (Gen 1:2, Ps 33:13, Lam 5:7) are sound and say "shared motif".
- **For the coordinator:**
  - The verifier's licence text joins the folded pāda, the Zurich lemmas and the neighbouring pādas' edge words as one
    string, so a licence can match inside an unrelated word (*tvám* → *vam*; *gayasphā́na* → *gaya*; part 5's own
    *satyānr̥té* → *nr*). Matching licences on whole lemmas (`^...`) of the pāda itself would close it.
  - *rohít* `אדום` (7.42.2b) now meets *aruṇá* `האדומות` in RV 10.15.7a (another book): settle at the harmonization.
  - pári √*vr̥j* "avoid" 7.46.3b `יעקוף` beside *paryetár* (pári √*i*) `עוקף` 7.40.3d: two lemmas in one Hebrew root
    within the part (recorded by the translator); `יחלוף על פנינו` would separate them.
  - *jániman* `תולדות` (7.2.10d, 7.42.2d) shares `תולדה` with *tánaya*, as *jánman* did before the part 4 review.
  - √*car* has `נדד` (7.46.3b, 7.55.6a) and, with *úpa*, `סוּר` (7.46.2c); *úd* √*car* `עלה` (7.55.7b): preverb splits,
    left as they are.

## RV7.56–7.63 (part 6: the Maruts; Mitra–Varuṇa and Sūrya; translator 6, Round 7 run 1)

### Scope
RV 7.56–7.63: 8 hymns, 299 pādas – the Maruts 7.56 (78: stanzas 1–11 Dvipadā Virāj, two pādas each in the base; 12–25
triṣṭubh), 7.57 (28), 7.58 (24), 7.59 (45: 1–6 bṛhatī / satobṛhatī, 7–8 triṣṭubh, 9–11 gāyatrī, 12 anuṣṭubh); Mitra–
Varuṇa with Sūrya 7.60 (48), 7.61 (28), 7.62 (24), 7.63 (24). One annotated file and one intro per hymn; `build
RV7.56-63` generated the clean files.

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`data`); `mw` / `gra` for the hapaxes.
- After drafting each hymn: `tr` (Griffith quoted from `tr` only; Geldner a few words) and Jamison's commentary
  (`VII.56–104-9-25-26.txt`: her own notes on 7.56–59, her notes "on JPB" for 7.60–63), cited where it discusses a
  stanza; her readings adopted with attribution: 7.56.4b *ū́dhaḥ* acc. ("what Pṛśni bore as udder"), 7.56.15a *stutá* a
  participle, 7.56.15d *nū́ cid … anyáḥ* a negative indefinite, 7.56.18b *gr̥ṇāná* passive, 7.56.20ab *bhŕ̥mi* a second
  object, 7.57.3a *anyé* = the other gods, 7.57.5a *raṇanta* preterital, 7.58.3cd the flock as subject, 7.59.6a
  *sádatā vitā́* (Narten), 7.59.8b *tiráś cittā́ni* "at cross-purposes", 7.60.1a *ánāgāḥ* nom. sg. (with a double
  reading kept open), 7.60.9a *áva* √*yaj* "rid by sacrifice", 7.61.1d *manyú* "anger", 7.61.3d *yatáḥ* acc. pl. (the
  spies), 7.61.5d *acít* "the unperceiving" (Scarlata), 7.62.2b *étaśa* pl. "steeds" / sg. the name.
- Binding precedents: renderings §5.5, §11.10–§11.14, the parts 1–5 Decisions / Proposals and the reviews of parts 1–5
  (`freq RV7.56-63`, `lexmap`, `grep --all`); the Old Avestan cognate list (§11.12, last bullet).
- Bible verses printed before quoting (`check_bible_quotes.py --show`): Prov 15:3, Ps 104:2, 22, 23, Isa 34:4.

### Decisions
- **The Marut vocabulary (new, for the later Marut and Rudra lines):** *márya* `בחור` (*yúvan* keeps `צעיר`);
  *sánīḷa* `בן קן אחד`; *ví* √*añj* `קישט` (*vyàkta* `מקושט`), *añjí* `קישוט`; √*piś* `עיטר` (as *péśas* `עיטור`;
  *viśvapíś* `מעוטר־הכל`; 7.18.2c `קשט` is the older split); *śúbh* `נוי`, √*śubh* mid. `התנאה`, *śóbhiṣṭha* `הנאים
  ביותר` (`פאר` / `פיאר` avoided: RV 10.14.1d *duvasya* `פאר`); *khādí* `צמיד`; *niṣká* `ענק`; *rukmá* `עדי־זהב`
  (precedent); *didyú* = *didyút* `רומח`; *śárdha* / *śárdhas* `גדוד`; *gaṇá* `להקה`; *dhúni* `שואג`; *múni* `משתגע`
  (the RV's ecstatic; MBh's sage `החכם` a split by period); *haṃsá* `אווז`; *sākamúkṣ* `המזלף־יחד`; *dhū́ti* `מנער`,
  √*kṣud* `טלטל`; *yā́ma* `נסיעה`, *yā́man* `מסע` (both need `[היתר שם: יָמָה]`: the Yama regex catches *yāmam*,
  *yāman*); *gr̥hamedha* / *gr̥hamedhī́ya* `זבח־הבית`; *sā́ṃtapana* `המלהטים`; *mā́ruta* `מַרוּטִי` (vocalized).
- **Seeing and hiding (7.56–63):** √*cit* `הבחין` throughout (*cetár* `מבחין`, *nicetár* `בוחן`, *acít* `חסר־ההבחנה`,
  caus. `הביא לידי הבחנה`; *acetás* keeps `חסר־קשב`); *cákṣus* `עין`; *nr̥cákṣas* `צופה הגברים` (precedent),
  *viśvácakṣas* `צופה־הכל`, *urucákṣas* `רחב־המבט`; *spáś* `מרגל`; *niṇyá* `נסתר`; *sasvár* / *sasvártā* `בחשאי`
  (not `בסתר`: one root for *niṇyá*); *apīcyà* `טמון`; *ánimiṣ* `בלי מצמוץ`; *r̥jú* / *vr̥jiná* `ישר` / `עקום`;
  *ánr̥ta* `אי־הסדר` (precedent); *drúh* `שקר` (the Avestan cousin rule: 7.16.8c `התרמית` predates it – for the
  harmonization); *varuṇadhrút* `משקר־וַרוּנָה`.
- **The sun (7.60–63):** *sū́rya* / *sū́ra* `שמש` (`שֶׁמֶשׁ` vocalized in the vocative); *úd* √*i* `עלה` (the opening
  word of 7.61–63); *úd* √*sthā* `קם`, √*ruh* `עלה` (precedent); *harít* `הצהבהבה`, *étaśa* pl. `הסוסים המנומרים`, sg.
  the name `אֵטַשָׁה`; *prasavītár* `מאיץ` (√*sū* `האיץ`, part 5); *cárman* `עור` (= *tvác* 7.59.11b: recorded split);
  sám √*vyac* `קיפל`; *ártha* `יעד`, *dūréartha* `רחוק־היעד`; √*dī* 2 "fly" `דאה` (√*dī* 1 keeps `האיר`).
- **Escapes the gates required (recorded in each entry):** `[היתר שם]` for *yā́mam* / *yā́man* (Yama), *bhāgá* (Bhaga),
  *vr̥trá* "obstacle" (7.58.4c), *mā́ruta* (preventive); `[היתר שער: בטובות]` for *vasavyà* 7.56.21c – the `טוב`
  licence reads *vasu* / *vasv* but not *vasavy* (a derivative of *vásu*; 7.37.3d passed only by another word).
- **Gate hits fixed:** `בשבתו` (7.56.18a, the root שבת) → `לאחר שישב`. Every gated word of the part checked against its
  own source token: `רוח` (*vā́ta*-, *vāyú*), `חושך` (*támas*), `טוב` (*su-*, *bhadrá*, *vásu*, *vasavyà*), `אדם`
  (*puruṣátā*, 7.57.4b only), `אדמה` (*dyā́vābhū́mī*), `מזבח` (*védi*) – no false licence.
- **Repeated pādas:** 7.56.25a–d copied from 7.34.25a–d; 7.57.4b from RV 10.15.6d `על אשמה שנעשה לכם כדרך האדם.`;
  7.62.3bc from 7.39.7bc / 7.40.7bc; first copies fixed here: 7.60.12a–c (= 7.61.7a–c: `ההעמדה־בראש הזאת, אֵלִים, לכם,
  / בזבחים, מִיטְרָה וְוַרוּנָה, נעשתה. / את כל המעברים הקשים – העבירו אותנו מעבר (להם);`), 7.62.6a–c (= 7.63.6a–c:
  `עתה, מִיטְרָה, וַרוּנָה, אַרְיַמַן – לנו, / לעצמנו, לעולל – ישימו מרווח; / קלים לדריכה יהיו לנו כל השבילים
  הטובים;`). F6 in all 8 hymns. Similar lines noted for the next parts: 7.56.22b ≈ 7.70.3b, 7.57.4d ≈ 7.70.5d, 7.58.3d ≈
  7.84.3d, 7.63.5c ≈ 7.66.7a.
- **7.59.9–12 marked as a later addition** in the header, the section titles (`פסוקי הסָאקַמֵדְהָה – תוספת`, `פסוק
  טְרְיַמְבַּקָה – תוספת`), the notes and the intro: 9–11 Sākamedha verses (Jamison), 12 the *tryambaka* verse in
  another metre (anuṣṭubh), addressed to Rudra, repeated in the Yajurveda Saṃhitās (VS 3.60; TS 1.8.6) – the tradition
  treats it as an appendix; today the *mahāmr̥tyuñjaya* mantra. *Tryàmbaka* transcribed `טְרְיַמְבַּקָה`; *urvāruká*
  `דלעת`; *bándhana* `קשר`; *mr̥tyú* `מָוֶת` (vocalized `מִמָּוֶת`).
- **Readings against the literature:** 7.56.10b √*vaś* "desire" kept with Zurich and Geldner (Jamison √*vāś* "bellow" in
  the note); 7.61.5a *ámūrā víśvā* as masc. duals with Zurich / Geldner (Jamison: fem. pl. with *imā́ḥ*, noted);
  7.60.10a–d the trembling "we" supplied in `( )`.

### Open decisions for the user
- 7.61.5 – who are the "deceits" (*drúhaḥ*) that follow men's untruths? The Hebrew renders the words (`השקרים`) and the
  note gives Jamison's / Brereton's reading (Mitra and Varuṇa's invisible spies); a reader may take it as the gods'
  own "deceits".
- *múni* `משתגע` (7.56.8b) – the rhyme with `שואג` and the RV sense ("ecstatic") against the later "sage".
- *cárman* / *tvác* both `עור`.

### Progress log
- Drafted hymn by hymn (7.56 → 7.63), each saved, `fill`ed and `verify`ed before the next, with the part 4–5 spec
  assembler (`gen.py`, copied to my own scratch folder) and the Zurich tokens counted per pāda (the Dvipadā Virāj
  stanzas of 7.56 are two pādas each in the base: stanza 6 re-cut).
- Pass (a) fidelity: all 299 lines re-read in the generated files against the base; 7.56.17c, 18a reworded.
- Pass (b) consistency: the lemma ↔ Hebrew map of the part against every drafted file, both directions; 10 lines
  changed – *sám* √*han* `התנגש` → `התכתש` (7.56.22a: `התנגשות` is *sámr̥ti*, 1.32.6c), *samāná* `אחד` → `משותף` (7.57.3d),
  *radhrá* `חלש` → `עלוב` (7.56.20a: `חלש` is *adhrá*), *sasvár(tā)* `בסתר` → `בחשאי` (7.58.5c, 7.59.7a, 7.60.10a),
  *ārā́t* `מרחוק` → `ממרחקים` (7.58.6c: `מרחוק` is *dūrá*), *úd* √*sthā* `עלו` → `קמו` (7.60.4a), *gādhá* → `מעברה`
  (7.60.7c, as 7.18.5b), *viṣpitá* `מרחב` → `השתרעות` (7.60.7d: `מרחב` is *rájas*'s alone).
- Pass (c) Hebrew: the 8 generated files read in sequence; `שָׂמִים` vocalized (7.56.19d, 7.60.8c: "heaven").
- `build RV7.56-63`; `verify RV7.56-63 --strict`: **0 problems**, 0 repeated-line differences in the range;
  `check_bible_quotes.py` on the 24 annotated, intro and generated files: 0 problems.

### The text on its own terms
- **Who are they?** (7.56.1–4): the Maruts open with a riddle; no one knows their births, only they themselves, and the
  wise man who perceives the secret of Pṛśni's udder – the poet presents himself as that man.
- **Individuals and a troop** (7.56.1–2, 7.57.6–7, 7.59.3): "all your names", "in your totality", "not even the last
  of you" – Jamison's thread through the cycle.
- **The poet's craft** (7.56.6, 8): each short line an etymological pair (`בנסיעה – הנוסעים`, `בנוי – הנאים`), and a rare
  full rhyme *dhúnir múnir*.
- **Ornament and weather** (7.56.11–13, 7.57.3): bracelets, gold on the chest, spears – the glitter of the troop is the
  lightning in the rain; "dark-backed geese" are the storm clouds (7.59.7).
- **The domestic rite of the Maruts** (7.56.14, 16; 7.59.9–11): the Sākamedha – the household offering, the "playful"
  and the "scorching" Maruts.
- **Fear and appeasement** (7.56.9, 17; 7.57.4; 7.58.5): the cattle-slaying, man-slaying bolt; "if we sin against you
  in human fashion"; "whether they were angered in secret or openly".
- **The economy of the gift** (7.56.21; 7.57.7): "let us not lag behind at the sharing out"; gods help patrons, patrons
  make the poets grow; rivals' sacrifices are a threat ("do not go elsewhere", 7.59.5).
- **Land and conflict** (7.56.22–24): men clash over rivers, plants and clans; the tribe crosses waters to a good
  dwelling.
- **Death and its release** (7.59.12): to fall from death like a ripe gourd from its stalk – "not from immortality".
- **The sun as the eye of the moral order** (7.60.1–3, 7.61.1, 7.63.1): it rises over "the still and the moving", sees
  "the straight and the crooked" in mortals, counts the generations like herds and reports to Mitra and Varuṇa whether
  men are "without offense" (7.60.1, 7.62.2).
- **Gods who teach, not only punish** (7.60.5–7): they perceive "the great untruth" and cannot be deceived, yet bring
  the unperceiving to perception and lead him through distress – "even in a rushing river there is a ford".
- **Spies and deceits** (7.61.3–5): unwinking spies in field and settlement; invisible "deceits" that dog men's
  untruths.
- **The working day** (7.63.4): men, impelled by the sun, go to their goals and do their work.

### Key parallels
- 7.60.2d [equivalent] Prov 15:3 – the eye that watches the good and the evil of men; here the sun, eye of Mitra and
  Varuṇa (shared motif; cf. Šamaš in the Mesopotamian corpus, 7.49.3b in part 5).
- 7.63.4d [equivalent] Ps 104:23 – the rising sun sends men to their work (shared motif; the Egyptian Aten hymn, often
  compared with Ps 104, is not in this folder).
- (A note, not a tag) 7.63.1d the darkness "rolled up like a hide" beside the heavens stretched / rolled up as a
  curtain or scroll (Ps 104:2, Isa 34:4): related imagery, different object.

### Proposals for the shared renderings
- **Words** (lemma → Hebrew, binding for Book 7 if accepted): *márya* `בחור`; *sánīḷa* `בן קן אחד`; *vyàkta* `מקושט`,
  *añjí* `קישוט`; √*piś* `עיטר`, *viśvapíś* `מעוטר־הכל`; *śúbh* `נוי`, √*śubh* `התנאה`, *śóbhiṣṭha* `הנאים ביותר`;
  *khādí* `צמיד`; *niṣká* `ענק`; *áṃsa* `כתף`; *vákṣas* `חזה`; *múni* `משתגע`; *krúdhmi* `זועף`; *sváśva* `טוב־הסוסים`;
  *svāyudhá* `טוב־כלי־הנשק`; *iṣmín* `נחפז (?)`; *svapū́* `טיהור־מעצמו (?)`; *vā́tasvanas* `בעל קול הרוח`; √*vap* 2
  `פיזר`; √*spr̥dh* `התחרה`; √*cit* `הבחין` (*cetár* `מבחין`, *nicetár* `בוחן`, *acít* `חסר־הבחנה`); *mithás* `זה … זה`;
  *tr̥pát* `עד שָׂבְעָה`; *makṣú* `מהרה`; *hávīman* `קריאה`; *práyajyu* `הנזבח־ראשונה`; *sahasríya* `אלפי`; *dámya* `של
  הבית`; *gr̥hamedha(-ī́ya)* `זבח־הבית`; *bhāgá* `חלק` (as *bhága*); *yakṣá* `מראה־פלא`, *yakṣadŕ̥ś* `בעל מראה־פלא`;
  *harmyeṣṭhā́* `יושב־טירה`; *prakrīḷín* `שובב`; *payodhā́* `יונק־הלשד`; √*varivasy* `עשה מרווח`; *suméka* `מבוסס
  היטב`; *gohán* / *nr̥hán* `הורג־הפרות` / `הורג־הגברים`; *sumná* `חסד`; *satrā́ñc* `מאוחד`; *ī́vant* `רב כל־כך`;
  *ádvayāvin* `חסר־כפל־הלב`; *dvéṣas* `שנאה`; *gurú* `כבד`; *radhrá* `עלוב`; *bhŕ̥mi* `מתערבל`; *dātrá* `שי`; √*dagh*
  (*paścā́t*) `פיגר`; *sám* √*han* `התכתש`; *yahvī́* `נמרצת` (= the rivers); *sā́ḷhar*, *sáhuri* `גובר`; *abhí* √*as* `היה
  עליון`; *sukṣití* `דירה טובה`; *mā́ruta* `מַרוּטִי`; *útsa* `מעיין`; √*rej* caus. `הרעיד`; *anavadyá* `חסר־דופי`;
  √*ran* `עלז`; *ŕ̥dhak* `הצידה`; √*gr̥* "wake" `העיר`; *śatín* `בעל־המאות`, *śatasvín* `בעל־מאות`; *sākamúkṣ* `המזלף־
  יחד`; √*kṣud* `טלטל`; *dhū́ti* `מנער`; *avaṃśá* `חסר־הקורות`; *tveṣyà* `סערת־אימה (?)`, *tveṣín* `מאיים`;
  *tuvimanyú* `רב־הכעס`; *ayā́s* `בלתי־נלאה`; *prá* √*as* `בלט`; *yuṣmóta* `הנעזר בכם`; *sasvár(tā)* `בחשאי`; *ārā́t*
  `ממרחקים`; √*nī* `הוביל`; *caramá* `אחרון`; *pári* √*man* `התעלם`; *kāmín* `חושק`; *pipīṣu* `צמא־לשתות`;
  *ghr̥ṣvirādhas* `צוהל־המתת`; *anyátra* `למקום אחר`; *ásredhant* `בלי כשל`; *somyá* (of things) `של הסוֹמָה`; *haṃsá*
  `אווז`; *nī́lapr̥ṣṭha* `כהה־הגב`; *durhr̥ṇāyú* `רע־הזעם`; *cittá* `כוונה`; *práti* √*muc* `עטה`; *hánman* `מכה`;
  *sā́ṃtapana* `מלהט`; *riśā́das* `אוכל־הזר (?)`; *svátavas* `תקיף־עצמו`; *sū́ryatvac* `עור־השמש`; *tryàmbaka*
  `טְרְיַמְבַּקָה`; *sugándhi* `טוב־הריח`; *puṣṭivárdhana* `מגדל־השגשוג`; *urvāruká* `דלעת`; *bándhana* `קשר`;
  *ánāgas* `חסר־אשמה`; *sthātár* `העומד`; *r̥jú* `ישר`; *vr̥jiná* `עקום`; *yuvā́ku* `שלכם`; *yūthá* `עדר`; *cetár* `מבחין`;
  *dūḷábha* `שקשה להונותו`; *supáth* / *supátha* `שביל טוב`; *ánimiṣ* `בלי מצמוץ`; *pravrājá* `ערוץ`; *gādhá* `מעברה`;
  *viṣpitá* `השתרעות`; *gopā́vant* `בעל־רועים`; *devahéḷana* `כעס־האֵלִים`; *áva* √*yaj* `סילק בזבח`, *ā́* √*yaj* `משך
  בזבח`; *varuṇadhrút* `משקר־וַרוּנָה`; *pári* √*vr̥j* `עקף` (as 7.46.3b); *uloká* `עולם פתוח` (precedent); *sámr̥ti*
  `הסתערות` (1.32.6c `התנגשות`: for the harmonization); *apīcyà* `טמון`; *sudhā́tu* `טוב־היסוד`; *puróhiti* `העמדה־בראש`;
  *cákṣus* `עין`; *dīrghaśrút* `נשמע־למרחוק` (precedent); *r̥ṣvá* `נישא`; *spáś* `מרגל`; *mā́sa* `חודש`; *áyajvan*
  `שאינו זובח`; *yajñámanman* `מהרהר־בזבח`; *acít* `חסר־הבחנה`; *samá* `שווה`; *étaśa* `הסוסים המנומרים` / `אֵטַשָׁה`;
  *éva* `מהלך`; *prá* √*vac* `הכריז`; *dyā́vābhū́mī* `שמים ואדמה`; *héḷa* `כעס`; *prá* √*sr̥* `פשט`; √*śru* caus.
  `השמיע`; *viśvácakṣas* `צופה־הכל`; *sā́dhāraṇa* `כללי`; *cárman* `עור`; sám √*vyac* `קיפל`; *prasavītár* `מאיץ`;
  *rebhá* `רונן`; *ánu* √*mad* `קיבל תרועה`; *dūréartha* `רחוק־היעד`; √*dī* 2 `דאה`.
- **Names** (in the files): Tryambaka `טְרְיַמְבַּקָה`, Etaśa `אֵטַשָׁה`.
- **Formulas and repeated lines** (for the later parts): 7.60.12a–c (= 7.61.7a–c) and 7.62.6a–c (= 7.63.6a–c) as under
  Decisions.
- **For the harmonization:** *drúh* `שקר` here vs 7.16.8c `התרמית`; *sarvátāti* `שלמות` (7.57.7b, the cousin rule) vs
  7.18.19b `כליל`; *sámr̥ti* `התנגשות` / `הסתערות`; *cárman* / *tvác* `עור`; *śatín* / *śatasvín`; √*muc* `שחרר` /
  *práti* √*muc* `עטה`; the folding merges √*vaś* / √*vāś* and √*gr̥̄* / √*gr̥* in `lexmap`.

### Lessons for the guidelines
- **Test the gates on the Hebrew of the drafted words, not only the reserved ones**: `בשבתו` "in his sitting" hit the
  שבת gate (the infinitive of ישב with a suffix); add `בשבתו` / `בשבתם` to the exempt words, or write `לאחר שישב`.
- **Name regexes catch homograph stems in a new god's vocabulary**: the Maruts' *yā́ma* / *yā́man* "course" (Yama) and
  *bhāgá* "share" (Bhaga) need escapes; the Yama regex could skip a long *ā* in the base (*yā́ma-*), if the folding kept
  it.
- **The `טוב` licence misses derivatives of *vásu*** (*vasavyà*): add `vasav` to it.
- **A Dvipadā Virāj hymn has two pādas per stanza in the base**, though it reads as four short lines: count the Zurich
  pādas before cutting the Hebrew.

## Review of part 6 (RV 7.56–7.63; independent reviewer)
All 299 pādas read against the Zurich text and morphology (`data`), each Hebrew line beside its Zurich tags and its
פירוק segments (a side-by-side script), with `tr` and Jamison where a line was in doubt; every gated word of the part
listed with its source token (all licensed by their own word: *su-*, *bhadrá*, *vásu*, *vasavyà*, *vā́ta*, *vāyú*,
*támas*, *puruṣátā*, *dyā́vābhū́mī*, *védi*, *jīváse*); a script listing every Hebrew word of the part that another lemma
also has in the corpus. The draft is careful: moods (subjunctive → future, *mā́* + injunctive → `אַל`, imperatives),
voice and the pāda boundaries are right almost everywhere, F6 and the repeated pādas are exact. **Every hymn's intro
exists and its section was complete** (the quota stop lost nothing), but **7 intros and 4 annotated headers quoted or
described lines in a form the lines no longer have** (the pass (b) changes were not carried into them). **9 lines
changed** (and their פירוק / notes).
- **One Hebrew for two lemmas (3):** 7.59.1b, 7.60.6d, 7.60.7b √*nī* `מובילים` → `מנהיגים`: part 3 fixed √*nī* `הנהיג`
  ("√*vah* keeps `הוביל`"), and √*vah* is `מובילות` in 7.60.3b, the same hymn. The Proposals row "√*nī* `הוביל`" is
  superseded; intro and header 7.60 aligned.
- **Mood (2):** 7.59.8c *mucīṣṭa* (precative) `יעטה` → `יעטה נא`; 7.62.4a *trā́sīthām* (optative) `חַלְּצוּ` →
  `חַלְּצוּ נא` (renderings §4; the part 5 review's *dadīran*).
- **A word that reads wrongly (2):** 7.56.6a `בנוי` (reads "built") → `בְּנוֹי` (intro too); 7.60.2b *ubhé* (fem. dual:
  the two world-halves) `על שניהם` – read as Mitra and Varuṇa, addressed in 2a – → `על שתי (המחצות)`.
- **Added outside `( )` (2):** 7.59.4c *abhí … ā́vart* `אלינו פנה` → `(אלינו) פנה` (no *naḥ* in the pāda); 7.61.4b
  *śúṣmaḥ* `סערם` → `הסער (שלהם)`.
- **Intros / headers aligned with the lines:** 7.56 `מנחה "צחה"` → `טקס "צח"` (*havyá* / *adhvará*, not *havís*); 7.57
  `"קישוט אחד"` → `"קישוט משותף"` (3d, changed in pass (b)); 7.59 `"כאווזים כהי־גב"` → `"אווזים כהי־הגב"` (7b has no
  "like"); 7.60 and 7.61 the sun feminine → masculine, as in the lines (`רתם`, `סוקר`), and 7.60's sun "yoked to" the
  mares → "having yoked" them (3a); 7.61 the unblinking guardians are the two gods (*rákṣamāṇā*, dual), not the spies;
  `אות גלוי / מראה מתעה` → `"מבהיק" / "מראה־פלא"` (5b), `ירחיב` → `"יעביר קדימה"` (4d), header `בלי בנים` → `"בלי
  גיבורים"`; 7.62 `ויתנו שם טוב` → `וישמיעו את שמם` (5c); 7.63 "`עולה` opens the first three stanzas" → the first two
  (3a opens *vibhrā́jamāna*; *úd* in 3b, 4a), the sun "yoked to Etaśa" → Etaśa draws the wheel (2d), `מלאכתם` →
  `מפעליהם` (*ápas*, as the line; `מלאכה` would add a Gen 2:2 echo the line does not have), header `גלגל הזמן` → `הגלגל המשותף`.
- **Checked and kept (defensible):** 7.58.3d *tireta* 3rd sg. middle (Jamison; recorded); 7.61.1a the elliptic dual
  `וַרוּנָה` (noted); 7.61.3c *dadhāthe* past (Griffith, Geldner, Renou); 7.62.2a *úd gāḥ* past beside 2c *vocaḥ* future
  (Geldner, Renou, Elizarenkova); 7.60.8c the supplied `(אנו)`; 7.60.9a *yajeta* as a rule (`יסלק`, the priest's task:
  Geldner "soll"); 7.56.24c *tárema* in a relative clause without `נא`; 7.59.1a *idám-idam* and 11a *ihéha* both `כאן
  וכאן` (one sense).
- `build RV7.56-63`; `verify RV7.56-63 --strict`: 0 problems, 0 repeated-line differences; `check_bible_quotes.py` on the
  24 annotated, intro and generated files: 0 problems. The two tagged parallels (Prov 15:3, Ps 104:23) are sound and say
  "shared motif".
- **For the coordinator:**
  - The next part's 7.64.3b has √*nī* `יובילו` (not touched: another translator's file) – `הנהיג` by part 3.
  - Older one-Hebrew-for-two-lemmas pairs met here, left as the precedents have them: *árṇas* `גל` (7.18.5a, 7.60.4b) /
    *ūrmí* `גל` (7.47); √*r̥* `הניע` (7.2.1b, 7.8.3b, 7.61.2b) / √*cyu* `הניע`; *janúṣ* `לידה` (7.4.1c, 7.56.2a,
    7.58.2a) / *jánman* `לידה` (7.33.10c, the part 4 review); *śubhrá* `מבריק` (7.39.3b, 7.56.8a) / √*dyut* `מבריק`
    (7.8.4d); √*rad* `חפר` (7.60.4c, 7.62.3a) / ŚB *khan* `חפר`.

## RV7.64–7.74 (part 7: Mitra–Varuṇa 7.64–66; the Aśvins 7.67–74; translator 7, Round 7 run 1)

### Scope
RV 7.64–7.74: 11 hymns, 344 pādas – Mitra–Varuṇa 7.64 (20), 7.65 (20), 7.66 (63: gāyatrī tṛcas with four-pāda stanzas
10–15, no family refrain); the Aśvins 7.67 (40), 7.68 (29: stanzas 1–7 of three pādas), 7.69 (32), 7.70 (28), 7.71 (24),
7.72 (20), 7.73 (20), 7.74 (24: pragāthas, no refrain). One annotated file and one intro per hymn; `build RV7.64-74`
generated the clean files.

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`data`); `gra` / `mw` for the new words; `freq RV7.64-74`, `lexmap`, `grep`,
  the part 4–6 spec assembler (`gen.py`, copied to my scratch folder), a look-up of every lemma of each hymn against the
  drafted files, and a script comparing my morphology overrides with Zurich's tags (it caught 7.65.2d *pīpáyan*, a
  subjunctive, drafted as an injunctive).
- After drafting each hymn: `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary
  (`VII.56–104-9-25-26.txt`, "SJ on JPB" for 7.64–74), cited where it discusses a stanza. Her readings adopted with
  attribution: 7.64.4a *gárta* "throne" (not necessarily a chariot seat); 7.65.1 the ring *práti vām* (1a, 4c) and 4c
  "(I call) … according to wish"; 7.65.2a a separate 3rd-person nominal clause; 7.66.12d the praise "You are charioteers
  of truth!" in quotation marks; 7.66.14d "fit for every eye"; 7.66.15a "each and every head" qualifying the moving;
  7.67.1a *jarádhyai* intransitive ("to awaken in response to"); 7.67.10c *járatam* "awaken" (with Oldenberg, against
  Geldner's "make old"); 7.68.4ab the stone "beseeching the gods" and *valgú* "agreeable"; 7.68.8 one barren cow (Śayu's);
  7.69.3c *yā́damāna* "embracing (with) the bride"; 7.69.4d *váyas* "vitality" (the Atri saga, not a bird); 7.70.1c the
  ritual fire as subject (with Brereton); 7.70.4b *yogyā́* "undertakings"; 7.71.2c *ánirā* "famine".
- Bible verses printed before quoting: Eccl 11:7, Ps 90:10, Ps 113:9, Jonah 2:4.

### Decisions
- **√*nī* `הנהיג`** (part 3; the coordinator's note): 7.64.3b `ינהיגו`; √*vah* keeps `הוביל`.
- **Mitra–Varuṇa (7.64–66), new words:** *nirṇíj* `מלבוש` (the "garments of ghee"); *gárta* `כס`; *sindhupati*
  `אדון־הנהרות`; *kṣatríya* (RV adj.) `בעל־השלטון` (AB's caste `קשטריה`: a split by period); *jīrádānu* `זריז־הטיפות`
  (*jīrá* ~ *ajirá* `זריז`; *dā́nu* "drop"); *sā́dhiṣṭha* `הקולע ביותר` (`ישר` is *r̥jú*); *bhū́ripāśa* `רב־החבלים`;
  *sétu* `סכר` (KU 3.2a `גשר`: a split by context – the "dams of untruth", 7.65.3a; `סוללות` is *dehī́*, 7.6.5a);
  *duratyétu* `שקשה לעבור`; *ripú* `נוכל`; *ācít* `מבחין` (not *acít*); *jigatnú* `מהלך` (`חש` is *taráṇi*);
  *pūtádakṣa* `טהור־הכשרון`; *ákṣita* `שאינו נגרע`; *havyájuṣṭi* `התענגות־התקרובת`; *udán* `מים`; *stipā́* / *tanūpā́*
  `שומר בני־הבית` / `שומר הגוף`; *dákṣapitar* `שהכשרון אביו`; *prámahas* `נעלה־הגדולה`; *suprāvī́* `חרוץ`; *svarā́j*
  `המושל בעצמו` (precedent); *anāpyá* `בלתי־מושג`; *r̥tájāta* `יליד הסדר`; *anr̥tadvíṣ* `שונא אי־הסדר`; *chardís* `סכך`
  (*suchardíṣṭama* `הטוב־הסכך ביותר`; `מחסה` is *śárman*, `סוכך` *varūtár*); *vápus* `מחזה`; *darśatá* `ראוי לראייה`;
  *pratihvará* `מעלה`; *cákṣas* `עין`; *áram* `ראוי`; *deváhita* `שהאֵלִים העמידו`; *sómapīti* `שתיית הסוֹמָה`; *adrúh*
  `חסר־שקר`; *ātují* `מזנק`; *hiraṇyayā́* `תשוקת־זהב`; *medhásāti* `זכייה בלשד הזבח`; *páribhūti* `כוח עליון`;
  *sū́racakṣas* `שהשמש עינו`; *agnijihvá* `שאַגְנִי לשונו`; *śūṣyà* `מחזק`; *námasvant* `בעל־קידה`; *tuvijātá*
  `רב־הלידה`; *mā́s* `חודש`; *aktú* `לילה`, *ŕ̥c* `פסוק` (precedents).
- **Precedents re-applied after pass (b):** *pánthā* `דרך` (RV 10.14, 7.4.7d, 7.39.3c; I had drafted `שביל`, which is
  *pathyā̀*'s: 7.64.3b, 7.65.3c, 7.71.1b, 7.73.3a changed); *śíras* `ראש` with the *āmreḍita* `כל ראש וראש` as 7.18.24b
  (7.66.15a), so *mūrdhán* `פסגה` (7.70.3c; MBH 3.185.37a `על ראש` a recorded split).
- *íḷā* (common noun) `רוויה` by the Avestan cognate rule (7.64.2c, 7.65.4b) – 7.3.7b `מנחות־חלב` is the older split.
- *púraṃdhi* in the plural (7.64.5c = 7.65.5c, 7.67.5c) `הפּוּרַמְדְהִיּוֹת`: the goddess's name kept (as in 7.9, 7.36),
  plural "the Plenitudes".
- **The Aśvins (7.67–74), names:** `אַשְׁוִינִים` (vocative and subject; `האַשְׁוִינִים`), Nāsatya `נָאסַטְיָה` (§3.1);
  their protégés transliterated by §2.3, vocalized at the first occurrence in each file, with a note: Atri `אַטְרִי`,
  Cyavāna `צְ'יַוָאנָה`, Bhujyu `בְּהוּגְ'יוּ`, Śayu `שַׁיְיוּ` (the doubled yod: `שיו` hits the `שֶׂה` gate and reads
  "his lamb"), Pedu `פֵּדוּ`, Jāhuṣa `גָ'אהוּשָׁה`, Sūryā (the sun's daughter, their bride) `סוּרְיָא`. 7.70.6c and 7.73.3d
  *vásiṣṭha* = the name `וַסִישְׁטְהָה` (Zurich: a superlative), by the parallel 7.70.5c and Griffith / Geldner.
- **The Aśvins, recurring words:** *mā́dhvī* `בעל־הדבש`; *dasrá* `עושה־הפלאות`; *dhíṣṇya* `נערץ`; *vartís* `סבב`
  (precedent 7.40.5d), *pári* √*yā* `סובב`; *vartaní* `מסלול`; *yuvā́ku* `שלכם`; *nr̥páti* `אדון־הגברים`; *yúvan*
  `צעיר`; *súhotar* `כוהן־הקריאה הטוב`; *svarvíd* `מוצא־האור`; *vásumant* `רב־הטוב`; *śácī* `יכולת`, *śácīpáti*
  `אדון־היכולות`, *śacīvasu* `שהיכולות טובו`, √*śak* `יכל`; *omán* `סעד`; *ghraṃsá* `חום` (`להט` is *tápas*); *starī́*
  `עקרה`; *aghnyā́* `הפרה שאין להורגה`; *daṃsánā* `נפלאות־מעשה`, *purudáṃsa* `רב־הנפלאות`; *patatrín* `מעופף`; *vadhū́*
  `כַּלָּה`; *yóṣā* `נערה`; *gaurá* `תאו`; *mánojavas* `מהיר־המחשבה`; *trivandhurá* `בעל שלושת המושבים`; *paví* `חישוק`;
  *hávana* `הזמנה` (*háva* `קריאה`); *usrá* `ורוד` (`אדמדם` is *aruṣá*), *usráyāman* `הנוסע עם הוורודות`; *śáru* `שֶׁלַח`
  (`חץ` is *íṣu*); *ánirā* `כפן` (`רעב` is *kṣúdh*); *háya* `רכש` (`סוס` is *áśva*); *makṣūyú* `שואף־המהרה`; *yuvayú*
  `השואף אליכם`; *díviṣṭi* `שאיפת־השמים`; *sūnŕ̥tāvant* `בעל־הנדיבות`; *jenyāvasu* `שטובו אציל`; *nr̥pātár*
  `שומר־הגברים`; √*śū* `התעצם` (with *śávas* `עצמה`); *pā́ñcajanya* `של חמשת העמים`; *paścā́tāt* / *purástāt* /
  *adharā́t* / *údaktāt* `מאחור` / `מלפנים` / `מלמטה` / `מלמעלה`; *bhū́man* `אזור` (7.69.2a; 7.34.7b `אדמה`, a gated word, is
  the older split); √*kan* `רצה` (with *cániṣṭha* `הרצוי ביותר`).
- **√*gr̥* "awake":** intransitive (*jarádhyai* 7.67.1a; *jarate*, Zurich √*jar*, 7.68.9a, 7.72.4d, 7.73.3d) `ניעור`,
  transitive `העיר` (7.67.1c); 7.67.10c = 7.69.8c *járatam* `העירו` with Oldenberg and Jamison, though Zurich lemmatizes
  √*jr̥̄* "make old" (Geldner "lasset … alt werden"): recorded; √*jr̥̄* "grow old" itself `הזקין` (7.68.6a). √*budh* keeps
  `התעורר`.
- **Recorded splits by sense:** √*dhr̥* caus. `קבעו` (7.66.2a, "appointed"; elsewhere `החזיק`); √*yam* `ריסן` (7.66.10c,
  7.69.6d, 7.74.2c, as KU 3.13a; Book 7 mostly `הושיט`, kept in 7.74.5c); √*uh* `הצהיר` (7.66.12c; 7.16.11d `ישים לב`);
  *kā́vya* "poetic power" `כוחות־המשוררים` (7.66.17a; RV 10.14.3a the Kāvyas `הקויה`); *śarád* `סתיו` kept in 7.66.11a
  with `(=השנה)`; *iyāná* (Zurich √*yā* 2 "beg") `ממהרת` (7.68.3c, as 7.39.2b); *sū́raḥ* (Zurich: gen. of *svàr*)
  `השמש` (7.69.4b); *pitárā* (dual) `הוריו` (7.67.1d); *étagva* `סוס מנומר` beside *étaśa* (7.70.2d).
- **Gates:** `[היתר שם: יָמִי]` for *ayāmi* (7.64.5b = 7.65.5b), `[היתר שם: יָמָה]` for *yā́man* / *yā́mam* / *yaman*
  (7.66.5b, 7.69.2d, 7.69.6d); 7.66.16a *uccárat* `שעולה` (the string `העולה` hits the `עֹלָה` gate); `אֵלֶּה` / `הָאֵלֶּה`
  and the preposition `אֶל` vocalized where the line has *devá* (7.66.9ab, 13d; 7.67.6d; 7.69.2c, 7a; 7.72.3c; 7.74.5b).
- **Repeated pādas:** 7.64.5a–c first copy, copied in 7.65.5a–c (7.64.5c also = 7.97.9c later); 7.66.7a = 7.65.1a
  without `במזמורים`, 7.66.7b changes only the verb (√*gr̥̄* `הילל` for √*hū*); 7.67.10a–c first copy (10b copied from
  7.40.5d), copied in 7.69.8a–c; 7.67.6d first copy for 7.84.5c / 7.85.5c (6c ≈ 7.84.5b); 7.70.7a–c first copy, copied in
  7.71.6a–c (7.70.7b also = 7.73.3b, copied); 7.70.5d copied from 7.57.4d (*vām* for *vo*); 7.72.5a–c first copy, copied in
  7.73.5a–c; 7.74.3d = 7.73.4d without *śivéna*. F6 in 9 hymns (not 7.66, 7.74).

### Open decisions for the user
- 7.67.10c = 7.69.8c *járatam*: `העירו` ("awaken the patrons", Oldenberg, Jamison) or Geldner's "let them grow old" (long
  life); the note gives both.
- 7.68.5b (Atri) – *máhiṣvant* and *ní … yuyotam* are obscure; the line follows Geldner (`הסירו … את (הלהט) העצום (?)`), the
  note gives Jamison's "harness … for Atri".
- 7.70.6c / 7.73.3d: *vásiṣṭha* as the name (Griffith, Geldner) against Zurich's superlative "the best".

### Progress log
- Drafted hymn by hymn (7.64 → 7.74), each saved, `fill`ed and `verify`ed before the next; the section written as I went.
- Pass (a) fidelity: the 344 lines re-read in the generated files against the base; 7.64.4c `בחמאה` (instrumental),
  7.65.2d subjunctive `יגאו`, 7.69.5d `בזבח` (locative), 7.68.4b √*vac* `אומרת` (as 7.67.1d), the 7.72 Griffith quotations
  re-copied from `tr`.
- Pass (b) consistency: my lemma ↔ Hebrew map against every drafted file, both directions (a scratch script): 14 lines
  changed – *pánthā* `דרך` (4), *śíras* / *mūrdhán* (2), *jigatnú* `מהלך`, *usrá* `ורוד`, *sétu* `סכר`, *chardís* `סכך`
  (2), *ghraṃsá* `חום`, *śáru* `שֶׁלַח`, *ánirā* `כפן`; intros and headers aligned with the final lines (7.65, 7.68, 7.70,
  7.71, 7.74).
- Pass (c) Hebrew: the 11 generated files read in sequence; `רְצוּ` vocalized (7.70.4a: "be pleased", not "they ran"),
  `כַּלָּה` (not `כלה` "destroyer"), `שהאֵלִים` (7.66.16a).
- `build RV7.64-74`; `verify RV7.64-74 --strict`: **0 problems**, 0 repeated-line differences in the range;
  `check_bible_quotes.py` on the 33 annotated, intro and generated files: 0 problems.
- **Tool fix (minimal, it blocked me):** `vedic_tools.py` `_find_word` lacked the "-י → -ים" plural rule that `_heb_has`
  already had, so a file whose only Agni is the plural `האַגְנִים` (7.72.4d) failed the vocalization check; one clause
  added, `selftest` 12/12.

### The text on its own terms
- **The kings of the truth and the water** (7.64.1–2, 7.65.4): Mitra and Varuṇa rule heaven, the airy space and earth,
  are "lords of rivers", and are asked for rain – "sprinkle the pasture with ghee".
- **An exchange of ghee** (7.64.1b, 4a–c): men dress the gods in "garments of ghee"; the poet "forges a throne" for them in
  his mind; the gods "sprinkle him with ghee" in return.
- **Fetters and dams** (7.65.3): the gods "of many fetters" are dams the deceitful man cannot pass, yet the path of truth
  carries the faithful over trouble "as waters by a boat".
- **The stranger's word to the king** (7.64.3c): even the outsider (*arí*) should speak well of the poet to Sudās.
- **Ordering time** (7.66.11): the Ādityas apportioned the year, the month and the day, the sacrifice, the night and the
  verse – cosmic and ritual time in one act.
- **To see the sun is to live** (7.66.16): "may we see a hundred autumns, may we live a hundred autumns" (Eccl 11:7).
- **Waking the gods** (7.67.1, 10; 7.68.9; 7.72.3–4; 7.73.3): the dawn rite is a mutual awakening – the fire, the hymns
  and the poet "wake", and the gods are asked to "wake" the patrons.
- **A son to his parents** (7.67.1d; 7.72.2cd): the bond with the Aśvins is ancestral friendship and "common kinship".
- **Fertility without shame** (7.67.6): "seed rich in offspring, unabashed" – the Aśvins as gods of procreation; the
  barren cow made to give milk (7.68.8).
- **The rescues** (7.68.5–8, 7.69.4, 7, 7.71.5): Atri from the heated pit, Cyavāna rejuvenated, Bhujyu from the sea,
  Śayu's cow, Pedu's horse, Jāhuṣa set free – the catalogue that makes the Aśvins the gods of emergency.
- **The chariot and the bride** (7.69.1–4): the golden three-seated chariot, yoked by thought, pressing heaven and earth
  apart, with Sūryā, who chose the Aśvins "at the turning hour".
- **Competing sacrifices** (7.68.2c, 7.69.6d, 7.70.6b): the gods are begged to pass over the stranger's invocations and not
  to be "held back" by others.
- **Night as a river** (7.73.1a): "we have crossed to the far shore of this darkness".
- **The patrons' reward** (7.67.9, 7.74.5–6): gifts of cows and horses earn "lasting glory"; the patrons "grew strong by
  their own strength" and "dwell in a good dwelling".

### Key parallels
- 7.66.16b [equivalent] Eccl 11:7 – "to see the sun" as a name for being alive (shared motif).
- 7.66.16c [equivalent] Ps 90:10 – a round number for a full human life: a hundred autumns wished for, seventy years
  lamented (shared motif).
- 7.68.7b [divergence] Jonah 2:4 – a man cast "into the heart of the seas" and rescued by divine power (shared motif;
  Bhujyu is abandoned by companions and saved by two gods with ships or winged horses).
- 7.68.8d [divergence] Ps 113:9 – the god who makes the barren fruitful; here a barren cow (shared motif).

### Proposals for the shared renderings
- **Names** (in the files): Atri `אַטְרִי`, Cyavāna `צְ'יַוָאנָה`, Bhujyu `בְּהוּגְ'יוּ`, Śayu `שַׁיְיוּ`, Pedu `פֵּדוּ`, Jāhuṣa
  `גָ'אהוּשָׁה`, Sūryā `סוּרְיָא` – for §3.1 (RV 7) or the files only (Śayu's regex would need care: ` sayu`; Atri's ` atri`
  is safe).
- **Words** (binding for Book 7 if accepted): every word under Decisions; the most recurrent for the later parts:
  *mā́dhvī* `בעל־הדבש`, *dasrá* `עושה־הפלאות`, *vartís* `סבב`, *vartaní* `מסלול`, *omán* `סעד`, *chardís* `סכך`, *usrá*
  `ורוד`, *vadhū́* `כַּלָּה`, *sétu* `סכר`, *nirṇíj* `מלבוש`, *gárta* `כס`, *íḷā* `רוויה`, *pánthā* `דרך` (confirmed),
  √*gr̥* intr. `ניעור` / tr. `העיר`, √*jr̥̄* `הזקין`, √*kan* `רצה`.
- **Repeated lines** (for the later parts): 7.67.6d `רבי־האוצרות, נלך נא אֶל רדיפת־האֵלִים.` (= 7.84.5c, 7.85.5c); 7.64.5c
  `עזרו להגויות, העירו את הפּוּרַמְדְהִיּוֹת;` (= 7.97.9c); 7.73.3d ≈ 7.80.1a.
- **For the harmonization:** *pánthā* `דרך` / *pathyā̀* `שביל` (both present in Book 7: check the later parts);
  *íḷā* `רוויה` vs 7.3.7b; *bhū́man* `אזור` vs 7.34.7b `אדמה`; *mūrdhán* `פסגה` vs MBH `ראש`; *kṣatríya* RV / AB; *sétu*
  RV / KU; √*yam* `הושיט` / `ריסן`; *rathī́* and *rathirá* both `רוכב־המרכבה` (older); *jána* `עם` / `אנשים`.

### Lessons for the guidelines
- **Check the precedents of the plainest words too**: *pánthā* "path" and *śíras* "head" looked too common to look up,
  and both had a fixed Hebrew in earlier parts that I first missed (pass (b) caught them). A reverse script (each of my
  Hebrew words → every other lemma that has it) finds such collisions in minutes; run it per hymn, not at the end.
- **A name transcription can hit a gate**: Śayu `שיו` reads "his lamb" and hits the `שֶׂה` gate; a doubled consonantal yod
  is the honest fix (not a different name).
- **The verifier's vocalization rule for a plural-only name** needed the same plural clause as its presence rule
  (`_find_word`): when a tool gains a rule in one function, grep for its twin.
- **The preposition `אל` beside a *devá* line is flagged** (the `אֵל` trap): vocalize `אֶל` in such lines from the
  first draft.

## Review of part 7 (RV 7.64–7.74; independent reviewer)
All 344 pādas read against the Zurich text and morphology, each Hebrew line beside its Zurich tags and its פירוק
glosses (a side-by-side script), with `tr` where a line was in doubt; every optative checked by script (all carry
`נא`), every subjunctive, injunctive and *mā́* listed and checked; a script listing every lemma of the part that has more
than one Hebrew in the corpus (`lexmap`), each judged. The draft is careful: moods, voice, case roles and the pāda
boundaries are right almost everywhere; F6 and the repeated pādas are exact; the four tagged parallels (Eccl 11:7,
Ps 90:10, Jonah 2:4, Ps 113:9) are sound and say "shared motif". **12 `>` lines changed** (and their פירוק / notes);
3 intros and 6 annotated headers aligned with the lines.
- **One Hebrew for two lemmas (1):** 7.66.6b *ádabdha* `שאין להונותה` → `שלא הוּנְתָה`: `שאין להונות־` is *ádābhya*'s
  (7.66.17a, and earlier parts); *ádabdha* is `שלא הונה` (7.36.2c, 7.60.5d).
- **Hebrew agreement (2):** 7.65.3b `שקשה לעבור אותן` → `אותם` (the dams, `סכרי`, masc.); 7.68.9c `יגדל אותו הפרה` →
  `תגדל` (intro already had `תגדל`).
- **Words that read wrongly (6):** 7.64.4c, 7.65.4b `הזו` (reads "this") → `הַזּוּ` (precedent 7.62); 7.64.5b = 7.65.5b
  *ayāmi* (aor. passive) `הושט` (reads as the imperative) → `הוּשַׁט`; 7.69.2d `שמים את נסיעתכם` (reads "heaven") →
  `שָׂמִים` (precedent 7.56, 7.60 `שָׂמִים`).
- **Added outside `( )` (3):** 7.70.5c *práti prá yātam* `בואו לקראתנו` (no *naḥ*; *prá* untranslated) → `בואו קדימה
  (אלינו)`; 7.74.3a *úpa bhūṣatam* `התייצבו אצלנו` → `התייצבו (אצלנו)`; 7.67.9c *bándhum* `את קרבתם` → `את הקרבה` (no
  possessive in the pāda).
- **Consistency (1):** 7.73.1d `בני־תמותה` → `בני תמותה` (renderings §5.1 / §11.8 `בן תמותה`, no hyphen; as 7.15.10b).
- **Intros / headers quoting an earlier wording:** intro 7.68 `"מדברת"` → `"אומרת"` (4b); intro and header 7.71 and
  header 7.72 the hyphenated epithets as in the lines (`בעלת־שלושת־המושבים, רבת־הטוב`; `בעלת־הפרות, בעלת־הסוסים`); intro
  and header 7.74 `"התעצמו בעצמתם"` → `"בעצמתם שלהם התעצמו"` (6c); header 7.68 `"מעבר לקריאות של הזר"` → `"מעבר להזמנות
  של האָרִי"` (2c), `"ער בתחילת השחרים"` → `"מתעורר …"` (9b), `בחלבה` → `בלשדיה`; header 7.69 `"כתאואים צמאים אל הברק"` →
  `"כשני תאואים אל הברק, צמאים"` (6a); header 7.70 the place "prepared" → "proclaimed" (`שהוכרז`, *avāci* 1b), and the
  quotation trimmed to the line's `"כמו על רחם"`.
- **Checked and kept (defensible):** 7.64.3a / 7.65.2a *aryá* `האָרְיָה` (one folded lemma with *ā́rya*; RV 10.34.13d
  `האציל` is the older split); 7.66.4b *ánāgāḥ* nom. sg. placed as in Zurich; 7.66.6b `בעלי` for the genitive of quality
  (Jamison); 7.66.6c *īśate* dual with a plural subject (noted by the translator); 7.68.1c `המובאות לקראתכם` (*práti*-
  participle, addressees of the stanza); 7.68.7c *parṣat* future (subjunctive; Geldner past); 7.70.3a *dadhā́the* past;
  7.73.3d `לקראתכם` (*vām* in 3c); the recorded open items (*járatam*, 7.68.5b, *vásiṣṭha*) left as the translator has
  them.
- `build RV7.64-74`; `verify RV7.64-74 --strict`: 0 problems, 0 repeated-line differences; `check_bible_quotes.py` on the
  33 annotated, intro and generated files: 0 problems.
- **For the coordinator:**
  - `build`'s book-wide check lists 2 repeated-line differences outside this part (7.38.6b `מתחנן` / 7.52.3b `מתחננים`:
    number change, not touched).
  - Older one-Hebrew-for-two-lemmas pairs met here, left as the precedents have them: *vára* 2 `מבחר` (Book 7) / `משאלה`
    (7.54.3c, 7.59.2d, KU); *sámbhr̥ta* `מצוידים` (7.73.4b) / MBH *yuj* `מצויד`; *amŕ̥ta*-type hyphenation `בזה שאינו
    בן־תמותה` in 7.1.23b (the only hyphenated copy left).

## RV7.75–7.88 (part 8: Uṣas 7.75–81; Indra–Varuṇa 7.82–85; Varuṇa 7.86–88; translator 8, Round 7 run 1)

### Scope
RV 7.75–7.88: 14 hymns, 332 pādas – Uṣas, the Dawn, 7.75 (32), 7.76 (28), 7.77 (24), 7.78 (20), 7.79 (20), 7.80 (12),
7.81 (24); Indra–Varuṇa 7.82 (40), 7.83 (40), 7.84 (20), 7.85 (20); Varuṇa 7.86 (32), 7.87 (28), 7.88 (28). One
annotated file and one intro per hymn; `build RV7.75-88` generated the clean files. No F6 in 7.81 (pragāthas).

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`data`); `gra` / `mw` for new words; `freq RV7.75-88`, `lexmap`, `grep`,
  the part 4–7 spec assembler (`gen.py`) and look-up script (`lk.py`: every lemma of a hymn against all drafted files),
  copied to my scratch folder.
- After drafting each hymn: `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary
  (`VII.56–104-9-25-26.txt`; for 7.82–88 "SJ on JPB", with her 2007 analysis of 7.86–88 as three "omphalos" hymns built on
  the grammatical person of poet and god, adopted in the notes and intros). Every quoted fragment of Griffith / Geldner /
  Renou / Macdonell checked by script against `tr` (`chkq.py`); several fragments of 7.86 first written from memory were
  wrong and were replaced (see Lessons).
- Bible verses printed before quoting: Gen 1:4, 1:28; Song 6:10; Ps 104:2, 22–23; Isa 66:13; 1 Sam 5:12; Ps 20:8;
  Ps 79:8; Job 13:23, 10:2; Ps 38:4; Ps 32:5; Ps 116:16; Lam 5:7; Ps 19:13, 19:6; Ps 18:16; Zech 4:10; Ps 130:3–4;
  Ps 89:50; Jer 1:5; Ps 107:14; Ps 104:2 (checked: Isa 34:6, remembered wrongly, was not used).

### Decisions
- **Uṣas as a name:** *uṣás* where she is the goddess (the addressee and subject of 7.75–81) = `שַׁחַר` without the
  article, with feminine verbs and adjectives (renderings §3.2; the AB precedent `את שַׁחַר`, AB 7.16.12b); the plural
  *uṣásaḥ* (the dawns of every day) and the common-noun uses keep `השחר` / `השחרים` (precedents 7.5–7.72). *divó duhitā́*
  `בת השמים` (7.67.2d). √*vas* "dawn" (with or without *ví*) `הפציע` (7.69.5c, 7.72.4a).
- **7.75, new words:** *divijā́* `ילידת־השמים`; *āvís* √*kr̥* `עשה גלוי`; *ápa* √*vr̥* `הסיר`; *śravasyú* `שואף־תהילה`;
  *parāká* `מרחקים`; *vayúna* `מנהג`; *pátnī* "mistress" `גבירה` (7.34.20a `רעיות` "wives": a split by sense);
  *citrā́magha* `מבהיקת־השפע`; *ŕ̥ṣiṣṭuta* `משובחת־החוזים`; √*ruj* `ניפץ` (√*bhid* `בקע`); *usríya* `ורודה` (*usrá*
  `ורוד`); √*vāś* "bellow" `געה`. *jaráyantī* (5c) `מעירה` with Zurich (√*gr̥* caus.), Griffith's "consumer of our youth"
  (√*jr̥̄*) in the note. *saúbhaga* `מזל טוב` with the gate licence of 7.3 / 7.21. *ápa* √*vr̥* "uncover" `חשף` (7.27.2d);
  *ví* √*vr̥* "open wide" `פתח לרווחה` (7.9.2a; 7.79.1d, 4d).
- **7.76–81, new words:** *viśvā́nara* (Savitṛ's epithet, not the name Vaiśvānara) `של כל הגברים`; *ámardhant*
  `שאינו מזניח` (Jamison's active reading, 7.76.2b = 5d); *íṣkr̥ta* `מתוקן`; *bahulá* `מרובה` (*purú* / *bhū́ri* keep `רב`);
  *satyámantra* `שמימרתו אמת`; *uṣarbúdh* `מתעורר־השחר`; *netrī́* `מנהיגה` (√*nī* `הנהיג`); *vā́japatnī*
  `גבירת־הפרסים`; *yuvatí* `צעירה` (the feminine of *yúvan* `צעיר`; RV 10.18.10c `עלמה` and 7.1.6a `הנערה` older);
  *rúśant* `זוהר`; √*śvit* `הלבין`; *híraṇyavarṇa* `זהוב־הצבע`; *sudŕ̥śīkasaṃdr̥ś* `שמראהו יפה לראות`, *sudŕ̥śīka* `יפה
  לראות`; *ántivāma* `קרובת־הטוב` (gate licence: *vāmá*); *jyótiṣmant* `רב־האור`; *ví* √*bhā* participle *vibhātī́*
  `זורח־לרווחה` (7.78's signature word); *práti* `לקראת` throughout 7.78 (its ring word) and in 7.80–81; *ukṣán* `שור`
  (ŚB 1.2.3.6 *gó* `שׁוֹר`: a split between texts); *sám ā́* / *ví* √*vr̥t* caus. `גלגל`; *índratama* `האִינְדְּרָה
  ביותר` (as *áṅgirastama*); *saní* `זכייה`; *sámanta* `סמוך`; *návya* `חדש`; *áhrayāṇa* `חסר־בושה` (as *áhraya*,
  7.67.6b); *sūnára* `אדיב`; *nákṣatra* `כוכב`; *arcivánt* `בעל־השלהבות`; *vyúṣ* `הפצעה`; *vánanvant* `רב־החן (?)`;
  *maṃhánā* `נדבה` (√*maṃh* `נדב`); *ratnabhā́j* `בעל־חלק־באוצר`; √*bhuj* 2 "enjoy (food)" `ניזון` (7.52.2c `נשלם על`
  another sense); *vasutvaná* `קניין־טובות`; *codayitrī́* `דוחפת` (√*cud* `דחף`); *srídh* `כשלון`; *tilvilāy-* (hapax)
  `הִתְדַּשֵּׁנָּה (?)` – not `פרה` (Gen 1:28).
- **Recorded splits:** √*yat* `נאבק` (7.76.5b, "vie") / `התיישר` (7.79.2b, "line up"; 7.36.2d `מיישר`); *ūrvá* `מכלאה`
  (7.16.7d) = *vrajá* `מכלאה` (for the final pass); *yajatá* `הראוי לזבח` and *yájatra* `ראוי לזבח` share one Hebrew
  (precedents; the etymological figure of 7.75.7b kept); *ágra* `בתחילה` also where it means "in front" (7.80.2c).
- **7.80.3a–c** copied from 7.41.7a–c (identical).
- **The coordinator's consistency rulings of 2026-11-09 applied** (they arrived while 7.83 was drafted): *suvitá* `הליכה
  טובה` (7.75.2a, 7.79.3b, 7.85.4d), *śubhrá* `נאה` (7.75.6c), √*cud* `דרבן` (7.77.4d, 7.79.5a; *codayitrī́* `מדרבנת`
  7.81.6c), √*nud* `דחף` (7.86.1c), *árṇas* `מִשְׁבָּר` (7.87.1b), *drúh* `שקר`, *turá* `נמרץ` (7.86.4d), *sahasrín* /
  *sahásrāmagha* `בעל־אלף(־השפע)`, *prá* √*vac* `הכריז` (7.86.4c), √*iṣ* 1 `הזעיק` (7.87.3d), *pári* √*vr̥j* `עקף`
  (7.84.2c).
- **Indra–Varuṇa (7.82–85):** *índrāváruṇā* `אִינְדְּרָה וְוַרוּנָה` (7.35.1b; as `מִיטְרָה וְוַרוּנָה`); the names of 7.83
  as part 2 / 4 wrote them: Sudās `סוּדָאס`, the Tṛtsus `הטְרִטְסוּ`, Bheda `בְּהֵדָה`, *dāśarājñá* `קרב עשרת המלכים`,
  *dáśa rā́jānaḥ* `עשרה מלכים`; *śvityáñc* `לבנבן`, *kapardín* `בעל־הצמה` (7.33.1a). 7.83.1–3 and 5–6ab set as quoted
  battle speech in `" "` (Geldner, Jamison). *vr̥trá* (common noun, pl.) `מחסום` with `[היתר שם: וְרִטְרָה]` (7.83.1c, 9a;
  7.85.3d), as parts 2–3. New: *dīrgháprayajyu* `ארוך־הזבח (?)`; √*vanuṣy* `חמד`; *dūḷhī́* `רע־ההגות`; *mahā́vasu*
  `גדול־הטוב`; *khá* `פתח`; *prabhú* `ריבון`; *apít* `שלא גודש` (the pun on √*pinv* `הגדיש` kept); *mitájñu*
  `נעוץ־הברכיים`; *prasavá* `האצה` (*savá*; AB's `הנעות` older); *majmán* `עוצמה`; *śulká* `מס (?)` (Jamison: "tribute",
  not yet "bride-price"); *tvíṣ* `התלקחות`; *dabhrá* `מעט`; *bhū́yaṃs* `רב יותר`; *párihvr̥ti* `סטייה`; *mārḍīká*
  `רחמים`; *kr̥ṣṭyojas* `בעל חוסן־האומות`; *spŕ̥dh* `תחרות`; *avadhrá* `שאינו נהרס`; *pr̥thupárśu* `רחב־החזה` (not
  `צלעות`: the reserved `צֵלָע`); *kr̥tádhvaj* `מקים־הדגל`, *dhvajá* `דגל`; *dhvasirá* `מאובק`; *árāti* `איבה`
  (RV 10.34.14c; 7.5.1b / 7.10.3d `הסוכן` older); *havanaśrút* `שומע־ההזמנה`; *vadhánā* `כלי־מוות`; *úpastuti*
  `שבח־הקריאה`; *admasád* `יושב־הסעודה`; *dhī́vant* `בעל־הגות`; *samithá* `עימות`; √*inv* `קידם`; *setár* `כובל`, √*si*
  `כבל`, *arajjú* `שאינו חבל`; *héḷas* `רוגז` (not `חרון`, the Bible's word for God's wrath); *arakṣás* `שאין בו
  רַקְשָׁס`; *ghr̥tápratīka* `שחזותו חמאה מזוקקת`; *párāñc* `נסוג לאחור`; *devátā* `אלים` (7.1.23c, AB); *právikta*
  (√*vij*) `נסער`; *r̥tacít* `מבחין־הסדר`; *devahū́ya* `קריאה לאלים` (= *deváhūti*).
- **Varuṇa (7.86–88), the reserve-word control** (precedents checked with `lk.py` / `lexmap` / `grep --all` before each
  word was fixed): *ā́gas* `אשמה` (RV 10.15.6d, 7.57.4b), *ánāgas* `חסר־אשמה`; *énas* `עוון` (7.20.1d, 7.52.2c, 7.58.5d,
  AB 7.18.13c), *anenás* `חף־מעוון` (7.28.4c), *énasvant* `בעל־עוון`; √*muc* `שחרר` (7.88.7b); √*mr̥ḍ* `רחם`, *mr̥ḷīká*
  `רחמים`; *dāsá* "servant, slave" `עבד` (7.86.7a: free in the corpus; the note ties it to *dā́sa* `דָּאסָה`, the enemy
  who became the slave), tagged [equivalent] Ps 116:16. **No word of the `חטא` family, no `פשע`, `שגגה`, `סליחה`,
  `וידוי` / `התוודה`, `חרון` in a line:** the Sanskrit has none of them (Griffith's "sin / sinner", Geldner's "Sünde /
  Sünder" are named in the notes as theirs). New: √*hr̥̄* "be angry" `זעף`, *áhr̥ṇāna* `שאינו זועף` (*manyú* keeps `כעס`);
  *sákhi* `חבר`, *sakhyá* `חברות`, *āpí* `ידיד` (7.8.6c), *ā́pya* `ידידות`; *drugdhá* `שקר` (√*druh*, the Avestan
  cognate rule); *dákṣa* `כשרון` (precedent; "conscious intent", the note); *dhrúti* `הטעיה`; *súrā* `שֵׁכָר` (always
  vocalized: not `שָׂכָר`, *mīḍhá*); *vibhī́daka* `וִיבְּהִידַקָה` (RV 10.34); *ácitti* `חוסר־הבחנה`; *svápna* `שינה`;
  *prayotár* `מסיר`; *upārá* `מעידה`; *jyéṣṭha* `הגדול` (AB "eldest": keeps Jamison's double sense "gravest / oldest",
  7.86.4a), *jyā́yaṃs* / *kánīyaṃs* `הגדול` / `הקטן` (7.86.6c); *paśutŕ̥p* `שבע־בהמות`; *tāyú* `גנב`; *dā́man* `רצועה`;
  *didŕ̥kṣu* `בתשוקה לראות`; *antár váruṇe* `בתוך וַרוּנָה` (7.86.2b) answered by `בוַרוּנָה` (7.87.7b), Jamison's ring;
  *tanū́* `גוף` kept literally in 7.86.2a ("with my own body", = myself) because it rings with 5b; *bhū́rṇi* `נחפז`;
  *kavítara* `מי שמשורר יותר` (not `טוב`); *gŕ̥tsa* `פיקח` (Varuṇa, with Jamison); *aváni* `אפיק`; *árvatī* `סוסה`;
  *r̥tāy* `נהג בסדר`; √*nu* intens. `שאג`; *smádiṣṭa* `בעל־השליחות (?)`; *yajñádhīra* `חכם־הזבח`; *médhira* `בעל־דעת`;
  *ṣáḍvidhāna* `שש חלוקות`; *preṅkhá* `נדנדה`, √*īṅkhay* `התנדנד`; *vimā́na* `מודד`; *gambhīráśaṃsa* `עמוק־הקילוס`;
  *supārákṣatra* `ששלטונו מעביר היטב`; √*r̥dh* `הגשים`; *śundhyú* `מצוחצח`; *saṃdŕ̥ś* `הופעה`; *áśman* `צור`; *adhipā́*
  `שליט`; *ándhas* 1 "darkness" `אופל`; *svápas* `טוב־המלאכה` (gate licence); *sudinatvá* `בהירות`; *yā́t* `כל עוד`;
  *avr̥ká* `בלי זאב`; *mā́na* 2 `בניין`; *sahásradvār* `בעל אלף הדלתות`; *yakṣin* `בעל־התעתועים (?)`; *naú* `סְפִינָה`.
- **Recorded splits (for the harmonization):** √*bhuj* 2 `ניזון` (7.81.5d, "feed on") / `נשלם` (7.88.6c, "pay for", as
  7.52.2c); *úpara* `מאוחר` (7.87.4d) / `תחתון` (5b); *antár* `בתוך` / `בין` (7.87.2c); *bhū́man* `אזור` (7.86.1d, as part 7)
  vs 7.34.7b `אדמה`; *mr̥ḷīká* and *mārḍīká* both `רחמים` (one root); *yajatá* / *yájatra*; *devahū́ya* / *deváhūti*.
- **Gate licences written** (`[היתר שער: …]`, each with its source word): `טוב` for *saúbhaga* (7.75.2b), *ántivāma*
  (7.77.4a), *svápas* (7.88.4b); `לשאול` "to ask" (7.86.3b, *vipŕ̥cham*) against the `שְׁאוֹל` gate – a false positive of
  the gate (the infinitive of `שאל`), reported.

### Open decisions for the user
- 7.86.7d: with Jamison, "he who is more a poet (Vasiṣṭha) spurs the clever one (Varuṇa)"; most interpreters invert the
  roles. The note gives both.
- 7.87.4c: *ná* "like" (`כסודות יאמר`) or "not" (Oldenberg: "he will not speak the secrets"); Jamison holds the ambiguity
  deliberate. The line has "like", marked `(?)`.
- 7.86.4a *jyéṣṭha* `הגדולה`: "gravest" or "oldest" (an ancestral offense) – the Hebrew keeps both.
- *dāsá* `עבד` (7.86.7a) [equivalent, Ps 116:16]: the natural word, but it is also the Bible's "servant of God". The
  alternative (transliterating `דָּאסָה`) would make him an "enemy".
- *súrā* `שֵׁכָר`: the right sense (a grain liquor, not soma) and a common Semitic word (Akk. *šikaru*); [equivalent], no
  echo is built on it.
- 7.83.1b *pr̥thupárśu* "broad-ribbed / broad-chested" (Geldner, Renou, Jamison) or "with broad axes" (Griffith,
  Macdonell) or two tribe names; and 7.82.6a *śulká* `מס (?)`.

### Progress log
- Drafted hymn by hymn (7.75 → 7.88) from compact specs (`gen.py`), each saved, `fill`ed and `verify`ed (0 problems)
  before the next; `tr` and Jamison after each draft; the section written as I went.
- Pass (a) fidelity: every line read against its Zurich tokens in the spec (the token count is enforced by `gen.py`);
  moods checked (optatives `נא`, subjunctives future, injunctives by context, *mā́* prohibitives); the quoted battle speech
  of 7.83 and the person-shifts of 7.86–88 kept as in the source (7.88.7a `אותך` left without a verb, as Vasiṣṭha
  leaves it).
- Pass (b) consistency: my lemma ↔ Hebrew map against every drafted file (`cons8.py`); changes: 7.75.1c `הסירה` → `חשפה`
  (7.27.2d), 7.85.3b `לאלוהות` → `לאֵלִים` (7.1.23c), the coordinator's 14 rulings (above); all repeated pādas copied
  (7.80.3a–c = 7.41.7; 7.84.5c = 7.85.5c = 7.67.6d; 7.84.3d ≈ 7.58.3d; 7.82.10 = 7.83.10, first copy here;
  7.84.5 = 7.85.5, first copy here); F6 in 13 hymns.
- Pass (c) Hebrew: the 14 generated files read in sequence; vocalized for sense `הֲנָאָה` (7.81.3d, not "the fair one"),
  `נִזּוֹן` (7.81.5d), `שָׂמָה` / `שָׂמוּ` / `שׂם`, `מְרֻנֶּנֶת`, `אֶל` / `הָאֵל` / `אֵלֶּה` beside *devá* lines; annotated headers and
  intros re-read against the final lines (7.75, 7.78, 7.79, 7.81, 7.85 aligned).
- `build RV7.75-88`; `verify RV7.75-88 --strict`: **0 problems**, 0 repeated-line differences in the range;
  `check_bible_quotes.py` on the 42 annotated, intro and generated files: **0 problems** (the checker tested on a planted
  error with a verse range: it catches it).

### The text on its own terms
- **The goddess who is the morning** (7.75–81): Uṣas is a young woman, "daughter of Heaven", "mistress of the world",
  "young woman of the Sun", who comes "close" like a girl and "not like one who goes back" (7.76.3d); she is also "old",
  bringing old age (7.75.5c) – and she "lengthens our lives" (7.77.5b).
- **Dawn is the cosmic order made visible** (7.75.1a, 3c): she dawns "by the order", her beams "beget the divine
  ordinances", and she drives away "the deceits" with the darkness (7.75.1c).
- **The word begets the dawn** (7.76.4): the ancestral poets, "whose formulas are true", found the hidden light and "begot
  Dawn"; their heirs, the Vasiṣṭhas, wake "first" to her every day (7.76.6, 7.80.1).
- **The Vala myth under every sunrise** (7.75.7, 7.79.3–4): the cows of light locked in the rock, released "with the bull's
  roar"; Dawn is "most Aṅgiras-like", "most Indra-like".
- **The morning sends life on its way** (7.77.1b): "impelling every living thing to move"; the fire is kindled, the patrons
  are spurred to give (7.79.5a, 7.81.6c).
- **The two faces of rule** (7.82–85): "sovereign – the one, self-ruler – the other" (7.82.2a); Indra kills the obstacles in
  battle, Varuṇa guards the ordinances in peace (7.83.9); both are asked for "mercy" because of "friendship" (7.82.8).
- **A battle won by the rite** (7.83): the ten kings "who do not sacrifice" fail; "the gods were present at their
  invocations of the gods" – the Vasiṣṭha priests in white with braided hair win the war for Sudās.
- **Fetters without ropes** (7.84.2b, 7.86.5, 7.88.7b): Varuṇa binds the offender (in disease and death) and releases the
  one who bows: offense is a tie that the god can untie.
- **Not knowing one's offense** (7.86.3–4): the poet knows that the god is angry, not why; he asks the god to *declare* it.
- **Responsibility shared and deflected** (7.86.5–6): "the deceits of the fathers", "the elder within the misstep of the
  younger", and the forces outside the self – liquor, anger, dice, thoughtlessness, even sleep.
- **Grammar as theology** (Jamison): in 7.86 and 7.88 the meeting of "I" and "you" happens once, at the centre, and the
  poet then retreats into the plural and the third person – the shape of the hymns is the shape of the broken bond.
- **The cosmos inside the god** (7.87.5): "three heavens are placed within him"; and the poet longs to be "within Varuṇa"
  (7.86.2b) – answered at the end: "may we be in Varuṇa without offense" (7.87.7b).
- **The poet made by the god** (7.88.3–4): a journey together in a boat, "swinging in the swing", and Varuṇa "made him a
  seer" – then the lament: "where have those friendships of us two gone?" (7.88.5a).

### Key parallels
- 7.86.3a [equivalent] Job 13:23 – the sufferer asks God to make known his offense (shared motif; Vasiṣṭha does not claim
  innocence, he seeks to know in order to be released).
- 7.86.4d [divergence] Ps 32:5 (changed by the review) – acknowledging the offense before the god as the way to its removal (shared motif; the
  Sanskrit has the bow, not a confession).
- 7.86.5a [equivalent] Ps 79:8 (and Lam 5:7) – the offense of the fathers resting on the sons (shared motif).
- 7.86.6b [equivalent] Ps 19:13 – offense without intent or knowledge (shared motif; here external forces: drink, anger,
  dice).
- 7.88.5a [equivalent] Ps 89:50 – "where are your former …?": the lost closeness with the god (shared motif; here a
  personal friendship).
- 7.87.7a [equivalent] Ps 130:3–4 – the god who shows mercy even to the offender (shared motif; mercy, not forgiveness).
- 7.77.1b [equivalent] Ps 104:22–23 – the sunrise sends living beings to their work (shared motif).
- 7.83.7d [equivalent] Ps 20:8 – the battle decided by invoking the god (shared motif; here by the "true" sacrifice).
- 7.88.3a [absent] – god and man sailing together on the sea has no biblical counterpart (and the boat is not a flood ark).

### Proposals for the shared renderings
- **For §3.2:** *uṣás* the goddess = `שַׁחַר` without the article, feminine agreement (7.75–81; AB precedent); the plural and
  the common noun keep `השחר(ים)`.
- **Words (binding for Book 7 if accepted):** every word under Decisions; for the later parts and RV 7.89 especially:
  *ā́gas* `אשמה`, *énas* `עוון`, *énasvant* `בעל־עוון`, *anenás* `חף־מעוון`, √*hr̥̄* `זעף`, *héḷas* `רוגז`, *mr̥ḷīká* /
  *mārḍīká* `רחמים`, *dāsá* `עבד`, *súrā* `שֵׁכָר`, *setár* `כובל`, *naú* `סְפִינָה`, *preṅkhá* `נדנדה`, *saṃdŕ̥ś* `הופעה`,
  *ántivāma* `קרובת־הטוב`, *vibhātī́* `זורחת־לרווחה`, *netrī́* `מנהיגה`, *yuvatí* `צעירה`.
- **Reserve list (for renderings §7 / the tool):** no word of the root חטא, nor `פשע`, `שגגה`, `סליחה`, `וידוי`, `חרון`
  in a Vedic line unless the source has its counterpart (Book 7 has none): the Varuṇa hymns are where they would creep in.
- **Repeated lines** (first copies here): 7.82.10 = 7.83.10; 7.84.5 = 7.85.5.
- **Tool:** the `שְׁאוֹל` gate fires on `לשאול` "to ask" (licensed in 7.86.3b) – an exemption of the forms of `שאל` (as for
  `בִּקֵּשׁ` and `קשת`) would avoid it; the `טוב` licence could take *saú-* (vr̥ddhi of *su-*) and *sv-* before a vowel
  (*svápas*) and compounds with *vāmá* as second member.

### Lessons for the guidelines
- **Never quote a rank-3 translation from memory, even a famous one:** for 7.86, the best-known hymn of the book, I wrote
  Griffith's and Geldner's wording from memory before running `tr`, and 8 of 9 fragments were wrong (a remembered Renou
  too); a 15-line script that checks every quoted fragment against `tr` found them all. Run `tr` first and copy.
- **Check every remembered Bible verse with `--show`, also in passing notes:** a half-remembered Isa 34:6 ("הִתְדַּשְּׁנָה
  מֵחֵלֶב") was in fact `הֻדַּשְׁנָה`; it never reached the file because the verse was printed first.
- **A quote checker with a "no Latin letters" rule cannot be tested with a Latin marker:** test it with a Hebrew error.
- **The reserve list must be fixed before the confession hymns:** the rank-3 translators say "sin", "sinner", "Sünde" on
  every line of 7.86–88, where the Sanskrit has *ā́gas*, *énas* and *drugdhá*; fixing `אשמה` / `עוון` / `שקר` from the
  precedents before the first line kept every `חטא` out.

## Consistency pass, RV 7.1–7.74 (Round 7 run 1)

A lemma → Hebrew map of parts 1–7 from the פירוק bullets (10,416 bullets; each lemma's own gloss and its rendering in the
line, clustered by stem; scripts in the scratch folder `consistency/`), read against renderings §5.5, §11.10–§11.16 and
the parts' Decisions. **52 `>` lines changed in 34 hymns** (with their פירוק and notes), 7 intros / 1 title aligned;
`build RV7.1-74`, `verify RV7.1-74 --strict` 0 problems (the one listed repeat, 7.38.6b / 7.52.3b, differs by number as
the source does), `check_bible_quotes.py` 0 problems on the touched files. The rule applied: the renderings' row, else
the first and commonest Hebrew; one moved word where a binding row, a precedent (RV 10, 1.32) or the Avestan cognate rule
(§11.12) holds the other.

### Changes
| Lemma | Old Hebrew | New Hebrew | Lines | Reason |
|---|---|---|---|---|
| *drúh* | `תרמית` | `שקר` | 7.16.8c | the Avestan cognate rule (§11.12); 7.59.8c, 7.61.5c |
| *dyukṣá* | `שמימית` | `שוכנת־השמים` | 7.31.2b | *divyá* `שמימי`; 7.34.24b |
| *yúdh* | `בקרב` | `במלחמה` | 7.18.7d | *pŕ̥tanā* `קרב`; 7.21.6d (§11.12) |
| √*daśasy* | `העניק` | `חנן` | 7.5.7d | part 3's row (§11.12); √*rā* `העניק` |
| *sarvátāti* | `כליל` | `שלמות` | 7.18.19b | the Avestan cognate rule; 7.57.7b |
| *vára* | `משאלה` | `מבחר` | 7.54.3c, 7.59.2d | Book 7's first and commonest (7.1.4a, 5.2d, 6.6c, 65.4c, 70.5–6c); KU below |
| √*vī* | `ביקש` | `רדף אחר` | 7.1.18c | §11.11 |
| √*nī* | `הוליך` | `הנהיג` | 7.18.7c | the part 6 review's ruling (√*vah* `הוביל`) |
| *ártha* (*nyarthá*) | `מטרה` | `יעד` (`אובדן־היעד`) | 7.18.9a | the precedent RV 10.18.4b; 7.63.4d |
| *ādhrá* | `דל` | `חלש` | 7.41.2c | the first, 7.18.17a; `דל` is *amáti* `דלות`'s root |
| *íḷā* (common noun) | `מנחת־חלב` | `רוויה` | 7.3.7b | the Avestan cognate rule, part 7 (7.64.2c, 65.4b); the goddess keeps `אִילָה` |
| *śáśvant* | `התדירים` | `לאין ספור` | 7.1.3c | 7.18.18a, 32.27c |
| *yahvá*, *yahvī́* | `נמרץ`, `נמרצות` | `תוסס`, `תוססות` | 7.6.5c, 8.2b, 56.22b, 70.3b | *turá* `נמרץ` (part 3's row, 8 lines; §11.12) |
| *sudā́nu* | `טוב־המתנות` | `טוב־המתן` | 7.31.2a, 59.10c, 61.3b, 66.5b | *sudátra* keeps it (first, 7.8.3c); *dā́na* `מתן`; not `טוב־הנתינה` (Av. *hudā̊*) |
| *jániman* | `תולדות` | `דורות` | 7.2.10d, 42.2d, 60.3d, 62.1b | *tánaya* `תולדה` (§11.10); *jánman* / *janúṣ* `לידה` |
| *jánman* | `תולדות` | `לידות` | 7.10.2c | *jánman* `לידה` (the part 4 review; KU, AB) |
| √*cud* | `דחף` | `דרבן` | 7.27.3d, 74.2b | √*nud* `דחף` (first, 7.18.16b); 7.32.15a |
| √*kṣar* | `זרם` | `ניגר` | 7.34.2b | √*sru* `זרם` (1.32.14c) |
| *árṇas* | `גל` | `משבר` (`מִשְׁבָּר`) | 7.18.5a, 60.4b, 69.7b | *ūrmí* `גל` (7.47; MBh 3.185); `נחשול` is *salilá*'s |
| *śubhrá* | `מבריק` | `נאה` | 7.39.3b, 56.8a, 56.16c, 68.1a | √*dyut* `הבריק` (first, 7.8.4d; *vidyút* `ברק`); √*śubh* `התנאה`, *śúbh* `נוי`, *śóbhiṣṭha* `הנאים ביותר` |
| *suvitá* | `רווחה` | `הליכה טובה` | 7.1.24a, 2.6d, 66.15c | *yós* `רווחה` (RV 10.15.4d; 7.35.1c, 69.5c); 7.35.1c's own word |
| *yáti*, *yantár* | `מנהיג` | `מרסן` | 7.13.1d (and its title), 16.7c | √*nī* `הנהיג`; both of √*yam* `ריסן` |
| √*iṣ* 1 | `הואץ`, `נדחף` | `הוזעק` | 7.33.13a, 73.3c | 7.39.1d, 43.1b; `האיץ` is √*sū*'s, `דחף` √*nud*'s |
| *sahasrín* | `אלפי`, `בן־אלף` | `בעל־אלף` | 7.4.9d, 15.9c, 26.5c | 7.58.4b; *śatín* / *śatasvín* `בעל־מאות` |
| *abhí* √*bhū* / √*as* | `היה עליון` | `התעלה על` | 7.21.6a, 48.2a, 48.3a, 56.24d | *paramá* `עליון` (§11.12) |
| *éva* | `מהלך` | `נוהג` | 7.62.2b | the first, 7.6.6b |
| *ámartya* | `בן־תמותה` | `בן תמותה` | 7.1.23b | *mártya* without the hyphen (12 lines; §11.16) |

Intros aligned: 7.13 (title), 7.18, 7.26, 7.60, 7.62, 7.69, 7.73.

### Splits kept (with the reason)
- **By a binding row:** *jána* `עם` / `אנשים` / `איש` "by sense" (§5.1) – which also lets *jána* `עמים` share with
  *carṣaṇí* `עמים` (§11.2): the lead may rule. *havyá* `תקרובת` (§11.10).
- **Sense, homographs, morphology:** *vanús* `חומס` (7.21.9d, 25.3c) / `להוטים` (7.38.5a; "assailant" / "eager");
  *ádri* `אבן` / 7.6.2a `סלע` (pressing stone / rock); *pū́rva* `קדמון` / `קודם` / 7.6.3d `ראשון` (ancient / prior);
  *śáśvant* 7.19.1c `של כל` ("each"); √*vas* 7.8.3a `תזהיר` (transitive) beside *ví* √*vas* `הפציע`; the common nouns
  and adjectives beside names (*mitrá* 7.18.10b `רעות`, *áditi* 7.52.1a, *étaśa* 7.62.2b, *bhága* `חלק`, *vásiṣṭha*
  7.1.8b `הטוב ביותר`); homographs merged by the folding (*vándana* 2, √*hā*, √*gā* / √*gai* 7.31.1b, √*vid* 1 / 2,
  *dyú* "day"); √*śak* desiderative `השתדל`; preverbs (*práti* √*muc* `עטה`, *prá* √*vac* `הכריז`, *pári* √*vr̥j* /
  *paryetár* `עקף` / `עוקף`, √*ram* caus. `השהה`, the senses of √*r̥*).
- **One root, two words:** *perú* / *pā́rya* `המעביר` (both √*pr̥* "carry across", `העביר`); *jñātí* `קרובים` /
  *bándhu* `קרבה`; *śatín* / *śatasvín* `בעל־מאות` (one sense, two suffixes); *dūrá* `מרחוק` / *āré* `רחוק`; *tū́ya*
  `מהר` (RV 10.10.8c) / *āśú* `מהיר`; *samrā́j* `מלך עליון` (a fixed epithet) beside *paramá* `עליון`.
- **Open pairs left for the lead** (every free Hebrew collides): *janúṣ* / *jánman* `לידה` (`הולדה` is Av. *ząϑa*'s,
  `תולדה` *tánaya*'s, `דורות` now *jániman*'s); √*ās* / √*sad* `ישב` (`חנה` is 1.32.15a *ávasita*'s, `שהה` √*ram*'s);
  √*san* / √*van* `זכה` (the √*san* family is fixed: -*sā́* `זוכה`, -*sāti* `זכייה`; `קנה` ~ RV 10.34 *vittá* `קניין`,
  `רכש` = *háya* 7.74.4c, `השיג` = √*aś*); "distribute": √*bhaj* (binding), √*day* (7.16.7d, 21.7c, 23.4d, 23.5c,
  37.2d), *ví* √*dhā* `חילק` (`הקצה` = √*diś* 7.40.2c and *abhikṣattár* 7.21.8d); *vŕ̥ṣan* / *vr̥ṣabhá* `פר` (both
  precedents: 1.32.7c, 10.10.10c); *bhū́ri* / *purú* `רב`; *gábhasti* / *hásta* `יד` (*pāṇí* `כף`); *nadī́* / *síndhu*
  `נהר` (1.32.12d; MBh); √*rāj* (= *rā́jan*) / √*kṣā* `מלך` (1.32.15c).
- **For the later parts:** √*cyu* (part 5's Decisions `הניע`) meets √*r̥* `הניע`; RV 10.17.3a has √*cyu* `הסיע`.
  Translator 8's files (not edited here): 7.75.2a *suvitá* `לרווחה` → `להליכה טובה`; 7.75.6c *śubhrá* `המבריקה` →
  `הנאה`; 7.77.4d √*cud* `דחפי` → `דרבני`.

### Cross-corpus splits (for the lead)
*vára* `מבחר` / KU 1.9b, 1.13b, 3.14a `משאלה`; *jána* `עם` / RV 10.14, KU `אנשים`; *sujániman* RV 10.18.6c `בעל הלידות
הטובות` / *jániman* `דורות`; *sámr̥ti* 1.32.6c `התנגשות` / 7.60.10a `הסתערות`; *havyá* `תקרובת` / RV 10.14–16 `מנחה`;
√*kr̥p* / √*nāth*, *sūktá* / *mántra*, *jaraṇā́* / *jarás* (§11.12); *puraetár* `ההולך־בראש` / AB `מנהיג`; *arbhaká*
`הקטנטנים` / AB `קטנים`; *śáṃtama* `המאושר ביותר` / RV 10 `נעים`; *rohít* `אדום` / RV 10.15 *aruṇá* `האדומות`; *cárman*
`עור` (7.63.1d) / *tvác* `עור` (ŚB 1.2.3, RV 10.16); *sūnŕ̥tā* `נדיבות` / KU `נועם דיבור`; *sámbhr̥ta* `מצוידים` / MBh;
√*cyu* (above); the Avestan pairs kept as Book 7 fixed them (§11.12: *krátu*, *mántra*, *hótar*, *ukthá*, *vīrá*,
*gír*, *kaví*, *uśíj*, *vr̥trahán*); *nírr̥ti* `אבדון` (open for the user).

## RV7.89–7.97 (part 9: Varuṇa 7.89; Vāyu and Indra–Vāyu 7.90–92; Indra–Agni 7.93–94; Sarasvatī and Sarasvant 7.95–96; Indra and Bṛhaspati 7.97; translator 9, Round 7 run 1)

### Scope
RV 7.89–7.97: 9 hymns, 246 pādas. One annotated file and one intro per hymn (drafting in progress; this section is
written as I go).

### Sources consulted
- Base: VedaWeb Zurich text and morphology (`data`); `freq RV7.89-97`, `lexmap`, `grep`; part 8's spec assembler
  (`gen.py`) and look-up script (`lk.py`), copied to the scratch folder `p9/`.
- After drafting each hymn: `tr` (Griffith, Grassmann, Geldner, Renou) and Jamison's commentary
  (`VII.56–104-9-25-26.txt`).
- Bible verses printed before quoting: Job 4:19; Ps 63:2; Ps 19:13.

### Decisions
- **7.89 (the last Varuṇa hymn):** part 8's Varuṇa vocabulary kept (*énas* `עוון`, √*mr̥ḍ* `רחם`, *ácitti*
  `חוסר־הבחנה`); no word of the `חטא` family, no `סליחה` / `מחילה` (Griffith's "spare me", Geldner's "verzeih" named in
  the note as theirs). F7 `רחם, טוב־השלטון, רחם` ×4 (1c–4c). New: *mr̥nmáya* `(בית) החומר` (with *gr̥há*
  `בית` moved from 1b to 1a for the Hebrew order; the move is noted in 1b's פירוק); *dīnátā* `חולשה`; *samaha*
  `איכשהו`; *pratīpá* `נגד (הזרם)`; *tŕ̥ṣṇā* `צמא`; √*dham* `נפוח`; *abhidrohá* `שקר` (the √*druh* family, Avestan
  cognate rule); √*car* "practise" `הלך (ב־)` ("walk in deceit"); *dhárman* `יסוד` (RV 10.90.16b); √*yup* `מחק`
  (RV 10.18.2a); *sú* in the prohibitive *mó ṣú* `נא`.

### Open decisions for the user
- 7.89.1a *mr̥nmáya gr̥há* `בית החומר` [equivalent, Job 4:19 `בָתֵּי-חֹמֶר`]: the natural Hebrew for "house of clay", and
  the Bible's phrase for the mortal body; kept and tagged (no `עפר`: reserved for *pāṃsú*).

### Progress log
- 7.89 drafted, `fill`, `verify RV7.89`: 0 problems.

### The text on its own terms
- **Varuṇa's illness** (7.89.2–4): the punished man is swollen "like a blown-up skin bag", walks "as if jerking", and is
  thirsty "standing in the midst of the waters" – the dropsy that the lord of the waters sends (Jamison).

### Key parallels
- 7.89.1a [equivalent] Job 4:19 – "the house of clay" as the frail mortal body / the grave (shared motif).

### Proposals for the shared renderings
- (in progress)

### Lessons for the guidelines
- (in progress)

## Review of part 8 (RV 7.75–7.88; independent reviewer)
All 332 pādas read against the Zurich text and morphology, each Hebrew line beside its Zurich tags and its פירוק
glosses (side-by-side script); every optative, subjunctive, injunctive, imperative and every *ná* / *mā́* / *caná* listed
by script and checked; the lemmas of the part with more than one Hebrew in the corpus (`lexmap_dict`) skimmed; the
intros' quotations checked against the lines by script. **7.86–88 word by word against the Sanskrit and Jamison's
commentary** (SJ on JPB, incl. her readings of 7.86.3–7, 7.87.1–4, 7.83.2–6, 7.81.4): the lines are faithful – the
grammatical person, the moods, *ā́gas* `אשמה` / *énas* `עוון` / *drugdhá* `שקר`, √*mr̥ḍ* `רחם`; no word of the חטא
family, `פשע`, `סליחה`, `וידוי` or `חרון` in a line. The slips were in the notes and the apparatus of 7.86 (biblical
penitential language: "מודה", "מחילה", "מזמורי התשובה") and in a few lines of 7.81–88. **6 `>` lines changed** (and
their פירוק), 7 notes / tags in 7.86 and 7.83, 5 intros aligned. F6, the repeated pādas (7.80.3 = 7.41.7; 7.82.10 =
7.83.10; 7.84.5 = 7.85.5) and the names are exact; the coordinator's rulings (§11.17–§11.18) are applied throughout.
- **Case role (1):** 7.81.1c *cákṣase* (dative, "for sight") `(מעל) העין` → `– לעין` (the note already said "בשביל העין";
  intro aligned).
- **Mood (1):** 7.84.2c *vr̥jyāḥ* (aorist optative = precative, a wish) `יעקוף` → `יעקוף נא` (renderings §4: optative →
  `נא`; header and intro aligned).
- **A reading that misleads (1):** 7.88.2b `חשבתי את פני אַגְנִי (לפני) וַרוּנָה` (reads "before Varuṇa") → `(כפני)
  וַרוּנָה` ("I thought Agni's face (to be the face) of Varuṇa"; intro aligned).
- **Quoted battle speech of 7.83 completed (3 lines):** the Decision sets 1cd, 2–3 and 5–6ab in `" "`, but 2a lacked the
  opening mark (3d had the closing one) and 5–6ab had none: `"` added at 2a, 5a and after 6b `לזכייה בטוב"` (Geldner;
  Jamison ad 2, 3, 5: "may be the best solution"); a note in 5a.
- **Biblical idiom in the notes of 7.86 (the brief's special care):** 1a Varuṇa "משחרר את מי שמודה" → "את מי שמשתחווה
  לו" (the Sanskrit has the bow, *námas*, not a confession), and "מזמוריו נקראו תמיד לצד מזמורי התשובה בתנ"ך" → "הושוו
  פעמים רבות למזמורי התהלים" (an overclaim and a biblical genre label; intro: "נקרא תמיד לצד מזמורי התשובה (תהלים לב,
  נא; איוב)" → "הושווה פעמים רבות למזמורי התהלים ולאיוב (תהלים לב, לח; איוב יג)", the verses actually tagged); 3a
  "כדי לבקש מחילה (4d)" → "כדי להשתחרר ממנו (4d–5)" (no forgiveness in the Sanskrit: the god "releases", *áva* √*sr̥j*);
  4d note "מי שיודע את עוונו ומשתחווה – יוצא ממנו חף" → "מי שמשתחווה לאל – יוצא ממנו חף, גם בלי לדעת מה עוונו" (the
  poet does *not* know his offense: that is the hymn).
- **Parallel tags (2):** 7.86.4d Ps 32:5 `[equivalent]` → `[divergence]` (the note itself says the Sanskrit has no
  confession and no `אוֹדֶה`: the concept differs, only the motif "turning to the god to be rid of the offense" is shared;
  the gloss "הכרת העוון ... כתנאי למחילה" → "הפנייה אל האל כדרך להיפטר מן העוון"); 7.86.3d Ps 38:4: the link "המורגש
  בגוף (כאן 'גופי שלי', 2a)" removed (2a is the poet's self-dialogue, not a bodily pain) and the difference stated.
  Every other tagged parallel checked (Gen 1:4; Song 6:10; Ps 104:2, 22–23; Isa 66:13; 1 Sam 5:12; Ps 20:8; Ps 79:8 ×2;
  Job 13:23, 10:2; Ps 116:16 ×2; Lam 5:7; Ps 19:13, 19:6; Ps 18:16; Zech 4:10; Ps 130:3–4; Jer 1:5; Ps 89:50; Ps 107:14)
  and sound; `check_bible_quotes.py` on the 42 files: 0 problems.
- **Intro wording (1 more):** intro 7.85 `שיר "שחזותו חמאה מזוקקת"` → `תבונה "שחזותה ..."` (as the line, 1c).
- **Checked and kept (defensible, documented):** 7.81.4c `בעלי־חלק־באוצר` (plural nominative with Jamison / Oldenberg /
  Renou against Zurich's gen. sg.; the פירוק now says so); 7.87.1b `(זינקו)` intransitive (Jamison's preferred reading,
  against Zurich's acc.); 7.83.2a `ייפגשו` (Jamison: properly a subjunctive); 7.86.2c optative in a question without
  `נא` (potential); 7.86.6a `לא היה זה` (past supplied, as Jamison); 7.76.3b *prācī́nam* (Jamison).
- **For the coordinator:** the `## Parallels index` at the end of this file is empty (the generator has not been run);
  the part 8 "Key parallels" list above still says 7.86.4d [equivalent] – now [divergence]. The tilvilāy- coinage
  `הִתְדַּשֵּׁנָּה (?)` and *dāsá* `עבד` [equivalent, Ps 116:16] stay open for the user, as the translator wrote.
- `build RV7.75-88`; `verify RV7.75-88 --strict`: 0 problems, 0 repeated-line differences.

## Parallels index
(Generated from the הקבלה bullets by `../build_parallels_index.py`.)
