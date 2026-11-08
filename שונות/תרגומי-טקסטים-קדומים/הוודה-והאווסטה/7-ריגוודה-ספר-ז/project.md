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

## Parallels index
(Generated from the הקבלה bullets by `../build_parallels_index.py`.)
