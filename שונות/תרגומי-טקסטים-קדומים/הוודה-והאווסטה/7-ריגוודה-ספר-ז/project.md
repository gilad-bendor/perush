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

## Parallels index
(Generated from the הקבלה bullets by `../build_parallels_index.py`.)
