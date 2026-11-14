# 9-ריגוודה-ספר-ב – the Rigveda, Book 2, whole (RV 2.1–2.43)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 2's pre-set terms:
§5.6, its names: the §3.1 rows marked "(RV 2)" – the "(RV 7)" rows apply here too –, its formulas: §8 F9–F11); brief
`../translator-brief--vedic.md`. **Book 7 (`../7-ריגוודה-ספר-ז/`) is the model**: its Hebrew for every lemma it
fixed binds this book (`freq`, `lexmap`), and the Round 7 harmonization (`../../harmonization--2026-11-13.md`) binds it:
the Vedic–Avestan cognate pairs (*mántra* `מנתרה`, *ukthá* `אמירה`, *vīrá* `גיבור`, *gír* `שיר`) and the Rigveda's
reserved root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` (renderings §7.4).

## Scope
The whole of Book 2 (the *maṇḍala* of the Gṛtsamada family, the smallest of the family books): **43 hymns, 429
stanzas, 1,694 pādas** (VedaWeb's Zurich text; `python3 -I -B ../vedic_tools.py units`). Round 8 run 3 (2026-11-14 →),
candidate `iran-india-01` of `../../translation-program.md` (approved with the program; under the 3,000-line rule of
guidelines §1).
- One KEY per hymn, `RV2.1` … `RV2.43`; one annotated file per hymn, `annotated-RV2.<n>.rtl.md`, with its
  `translation--intro-RV2.<n>.rtl.md`; the builder makes `translation-RV2.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order; head: `translation--head.rtl.md`). `RV2` = all of Book 2 and
  `RV2.1-10` = a range, in `verify`, `build` and `freq`.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_2.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert` from `rv_book_02.tei`, downloaded 2026-11-14). Line unit: the pāda (`1a`); RV 2.22
  has 7- and 8-pāda stanzas (`e`–`h`): **the converter read only `a`–`g` until this run** and dropped 2.22.1h and 2.22.4h
  (1,692 rows against the TEI's 1,694 `_zur_` lines); fixed (`a`–`j`) before the first line. No other converted book
  has an `h` pāda in a unit we translate (RV 1.127.6h exists in Book 1, not a unit).
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova), **Jamison's commentary on Book II**, `../../sources/Jamison--Rigveda-commentary/II-9-25-26.txt`
  (downloaded and extracted this run; grep `II.12` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV2.<a>-<b>`: the commonest lemmas of a range with the Hebrew already fixed for them (Book 7's
  and the corpus's); `lexmap '<folded lemma regex>'` (e.g. `'^daksin'`) for a lemma's Hebrew so far. Lemmas written
  with `~` by Zurich (*dyú* ~ *div*, *rayí* ~ *rāy*, *gó* ~ *gáv*, *gír*, *pánthā* ~ *path*) show "—" in `freq`: their
  Hebrew is fixed (`שמים`, `עושר`, `פרה` / `שור`, `שיר`, `דרך`).

## Coordinator's notes (Round 8 run 3)
- Fixed before drafting (2026-11-14): the renderings §5.6 (Book 2's own key terms), the §3.1 "(RV 2)" names, the
  formulas F9 (the Gṛtsamada refrain *bṛhád vadema vidáthe suvī́rāḥ*, which closes 22 hymns: `נדבר נא (בקול) רם במועצה,
  רבי־גיבורים`), F10 (2.15), F11 (2.12); the tool's Book 2 keys and project; the converter's `h` fix.
- **The book's own repetitions:** 28 repeated pādas (102 occurrences): the refrain F9 (22 copies); the Indra closing
  stanza 2.11.21abc = 2.15.10 = 2.16.9 = 2.17.9 = 2.18.9 = 2.19.9 = 2.20.9 (*nūnáṃ sā́ te práti váraṃ jaritré / duhīyád
  indra dákṣiṇā maghónī / śíkṣā stotŕ̥bhyo mā́ti dhag bhágo naḥ*); 2.15.2–9d (F10); 2.25.1–5d (*yáṃ-yaṃ yújaṃ kr̥ṇuté
  bráhmaṇas pátiḥ*); 2.13.2–4d; 2.22.1–3 (the last two pādas); 2.23.19c = 2.24.16c = 2.35.15c; 2.27.17abc = 2.28.11abc
  = 2.29.7abc; 2.1.16abc = 2.2.13abc; 2.13.13abc = 2.14.12abc; 2.23.19ab = 2.24.16ab; 2.12.14b = 2.20.3c; 2.32.6d =
  2.41.17d. **With Book 7 and RV 1.32:** 2.11.2b = 7.21.3b, 2.15.1c = 1.32.3b, 2.18.7d = 7.23.5d, 2.21.2b = 7.46.1c,
  2.38.11c = 7.8.6c. `data` shows every identical and similar line with the Hebrew already given: **the later copy
  copies the first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another – range A: one agent at a time; an independent fidelity
  reviewer reads each finished part before the next translator starts):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 2.1–2.10 | 337 | Agni (2.1 the litany of identifications "you are Indra … you are Varuṇa"; 2.3 the Gṛtsamada Āprī hymn) |
| 2 | 2.11–2.16 | 320 | Indra – **2.12 "he, o people, is Indra"** (the creed against the doubters); 2.15 the refrain of deeds |
| 3 | 2.17–2.24 | 338 | Indra; 2.22 the soma-drinker; **Brahmaṇaspati 2.23–24** (the god of the formulation opens the Vala cave) |
| 4 | 2.25–2.33 | 340 | Brahmaṇaspati 2.25–26; the Ādityas 2.27; **Varuṇa 2.28** (the fetter, the debt, the bad dream); the All-Gods 2.29, 2.31; 2.30; 2.32 (Rākā, Sinīvālī); **Rudra 2.33** (the healer) |
| 5 | 2.34–2.43 | 359 | the Maruts 2.34; **Apāṃ Napāt 2.35**; the season-cups 2.36–37; Savitṛ 2.38 (evening); the Aśvins 2.39; Soma and Pūṣan 2.40; 2.41 (Sarasvatī "best of mothers"); **the omen bird 2.42–43** |

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV2.1–2.10 (part 1: the Agni hymns; translator 1, Round 8 run 3)

### Scope
RV 2.1–2.10, 337 pādas: 2.1 (64; the litany "you are …", jagatī + a triṣṭubh closing stanza), 2.2 (52), 2.3 (44; the
Gṛtsamada Āprī hymn), 2.4 (36), 2.5 (32, anuṣṭubh), 2.6 (24, gāyatrī), 2.7 (18, gāyatrī), 2.8 (19), 2.9 (24), 2.10 (24).
Ten annotated files, ten intros, built (`build RV2.1-10`); `verify RV2.1-10 --strict`: no problems;
`check_bible_quotes.py` on all my files and the generated ones: 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); Grassmann (`gra`) for the hapaxes (*viśíkṣu*, *ātáni*, *śaṃgayá*, *kṣumánt*,
*gnā́vant*, *sajātyà*, *sátpati*); `freq` / `lexmap` / `grep --all` for every recurring lemma; after drafting each hymn
`tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary on II.1–10. Adopted from Jamison (with
attribution in the lines' bullets): 2.1.4c *sambhújam* a noun "common meal" (against Zurich's / Geldner's verb, marked
`(?)`); 2.1.8d / 15a *práti* (+ *sám*) "be a counterpart / equal to"; 2.1.10a–c the puns on the three Ṛbhus' names;
2.2.2a nights and dawns as subject, the perfect as habitual; 2.2.3c *védya* "to be found / acquired"; 2.2.4c "the flying
(udder) of Pṛśni" (the rain cloud) and the double readings of *citáya-* (2.2.4c, 5d, 10b); 2.2.9b *mā́nuṣā* neuter plural
(supplied "lifespans"); 2.3.2a *práti* as an adposition; 2.3.11d *vakṣi* imperative; 2.4.2–3 the two installations
(Bhṛgus / gods) and the hidden fire; 2.4.4d *dodhavīti* as the main verb; 2.4.6a "eating" supplied from *vanád*; 2.5.3 the
unnamed brahman; 2.5.7 the closed circle of the R̥tvij; 2.6.7c *jányaḥ iva*; 2.8.4–5 the disguised Svarbhānu myth (Atri);
2.9.4d *manótar* "minder"; 2.10.3a *uttānā́* "agape" (the kindling stick as a woman giving birth), 2.10.3c *śíriṇā*
left uncertain, 2.10.5c *spr̥hayádvarṇa* "with questing colour". From Geldner: 2.2.6b *saṃdadasvā́n* (√*das*) "after you
had gone out" (Zurich's lemma); 2.5.1c *jénya* "inherited"; 2.5.5c "dearer than three".

### Decisions
- **The frame of 2.1:** every stanza's first pāda is `אתה, אַגְנִי, X` (or `אותך, אַגְנִי, …` where the source has
  *tvā́m*); every *tvám* is `אתה` at the head of its pāda, so the litany stays visible in Hebrew. All the §3.1 names
  vocalized at their first occurrence in each file.
- **The priests (2.1.2, 2.5) – one family:** *hótar* `כוהן־הקריאה`, *pótar* `כוהן־הטיהור` (Book 7), *adhvaryú*
  `כוהן־המעשה`, *brahmán* `כוהן־הנוסח`, *r̥tvíj* `כוהן־העונה` (Book 7), and new: *néṣṭar* `כוהן־ההנהגה` (√*nī*
  `הנהיג`; *netár* keeps Book 7's `מנהיג`), *praśāstár* `כוהן־ההדרכה`, *agnídh* `מצית־אַגְנִי` (the fire is the god in
  the RV, and the paradox "you are the kindler of Agni" is the poet's); the neuter offices *hotrá*, *potrá*, *neṣṭrá*,
  *praśāstrá* `כהונת־הקריאה` / `כהונת־הטיהור` / `כהונת־ההנהגה` / `כהונת־ההדרכה`; √*adhvarīy* `ערך את הטקס`.
- **The Āprī hymn (2.3)** copies Book 7's 7.2 wherever the words recur: `קילוס־הגברים`, `מצע העשב`, `יושב מצע־העשב`,
  the doors `ייפתחו נא לרווחה`, `השחר והלילה`, `טובת־חליבה`, `שני כוהני־הקריאה האלוהיים`, `שלוש האֵלוֹת … מצע העשב
  הזה`, `חושק־האֵלִים`, `התר` (√*sā*), `אדון־היער`, `ימתיק` (√*sūd*), `המשקיט`, `סְוָאהָא`; √*añj* `קישט` throughout
  (never `משח`); *védi* `מזבח` (licensed); *dhā́man* `תחום`; *ghr̥tá* `חמאה מזוקקת` (2.3.4c `בחמאה` short; 2.7.4c pl.
  `בחמאות`); *sarpís* `חמאה מותכת` (2.7.6a, another word).
- **F9 (2.1.16d = 2.2.13d)** written as fixed; I find it right: *vadema* optative 1 pl. `נדבר נא`, *br̥hát* adverbial
  `(בקול) רם`, *vidátha* `מועצה`, *suvī́rāḥ* nom. pl. `רבי־גיבורים`. 2.2.13 copies 2.1.16 character for character.
- **Readings and renderings that need a word:** 2.1.1a *āśuśukṣáṇi* `הבוער (לקראתנו)` (ā́ + desiderative of √*śuc*);
  2.1.3a *satā́m* / 4c *sátpati* `הקיימים` / `אדון־הקיימים` (*sát* = `יֵשׁ`, §5.1); 2.1.9b *bhrātrá* `קשר־אחים`
  (`אחווה` is *jāmí*'s); 2.1.11c *śatáhima* `בת־מאה־חורפים` (*híma* = Av. *zima* `חורף`, the cousin rule); 2.1.12a
  *uttamá* `הגבוה ביותר` (`המעולה` is now *śréṣṭha*'s, 2.7.1a; `עליון` is *paramá*'s); 2.1.15c *pr̥kṣá* `המזין` (Book
  7); 2.2.6a / 2.9.6d *revát* `בעשירות`; 2.4.7c √*uṣ* `חרך`, 2.4.6c *tápus* `הצורב` (Book 7 `הצריבה`), √*dah* `שרף`;
  2.4.7d √*svad* caus. `הטעים`; 2.7.5b *vaśā́* `פרה מיוחמת` (Jamison: mated, not "barren"); 2.7.6c *ádbhuta* `נפלא`
  (*dasmá* keeps `מופלא`); 2.9.4a *yájīyaṃs* `המיטיב־לזבוח יותר` (the `טוב` gate); 2.10.4a √*ghr̥* `זילף` (√*ukṣ* keeps
  `הזה`); 2.10.3d √*vas* "dwell" `דר` (√*kṣi* keeps `שכן`); 2.10.3c *śíriṇā* `באפלה (?)` (`חושך` is gated to *támas*).
- **Escapes (each with its reason in the line):** `[היתר שם]` for *yáma* "rein" (2.5.1d, not Yama), *róhita* "red"
  (2.10.2c, not Rohita), *bhāgá* "share" (2.10.6a, not Bhaga), *vásiṣṭha* "best" (2.9.1c, as Book 7 1.8b); `[היתר שער:
  הטובות]` for *vasavyà* (2.9.5a; Book 7 37.3d).
- **Shared words kept (near-synonyms):** the three "night" words *kṣáp*, *náktī*, *rā́myā* (and *ū́rmyā*, 2.4.3c) all
  `לילה`, as Book 7; *ajára* `שאינו מזדקן` beside *ajuryá* `בלתי־מזדקן` (two strings, one meaning).

### Open decisions for the user
- 2.1.4c *sambhújam*: noun ("whose is the common meal", most scholars, Jamison) or verb ("of whom I would partake",
  Zurich, Geldner) – the noun is in the line with `(?)`.
- 2.10.3c *śíriṇā* (hapax): `באפלה (?)` after Geldner; Jamison suggests "birth canal".
- 2.8.5a Atri: the Svarbhānu reading (Jamison) is in the note; Geldner and Oldenberg suspect the text.

### Progress log
- Drafted 2.1–2.10 hymn by hymn from a compact draft (a scratch generator writes the entries and the פירוק forms from
  the Zurich tags); each hymn filled, verified and built before the next; `tr` and Jamison read after each draft, and the
  readings above adopted with attribution; intros written.
- Pass (a) fidelity: 2.2.6b re-read with Geldner (√*das*); 2.2.9c `כפרה` → `פרה` (no simile in the source: the gate
  caught it); 2.5.4c–d *ánu* placed as Jamison construes it; 2.7.1a `(העושר)` supplied (Geldner); 2.3.8d a word-order
  slip in the פירוק (*śaraṇám* / *pāntu*) corrected.
- Pass (b) consistency: a scratch script compared every lemma of the part with its Hebrew in all other files; aligned
  with Book 7: *yaśástama* `המכובד ביותר`, *máhas* `רוממות`, *nábhas* `ערפל`, *pr̥kṣá* `המזין`, *víbhr̥tra*
  `הנישא־לכל־עבר` (Book 7 `הנישאים בזרועות`); *néṣṭar* / *praśāstrá* renamed in 2.1.2 to keep `מנהיג` for *netár*;
  *uttamá* moved off `המעולה`.
- Pass (c) Hebrew: the generated files read through; `אַל` / `אֶל` / `אֵל` vocalized where the verifier asked (2.1.7b,
  16c, 2.3.8c, 9d, 2.7.2a–b), `יוֹדֵעַ־הַנּוֹלָדִים` at its first occurrence in each file.
- `build RV2.1-10`; `verify RV2.1-10 --strict`: 0 problems; `check_bible_quotes.py`: 0 problems.

### The text on its own terms
- One fire is every god: Agni "is" Indra, Viṣṇu, Brahmaṇaspati, Varuṇa, Mitra, Aryaman, Aṃśa, Tvaṣṭṛ, Rudra, the
  Maruts, Pūṣan, Savitṛ, Bhaga, the Ṛbhus, and the goddesses Aditi, Bhāratī, Iḷā, Sarasvatī (2.1.3–11) – the fire on the
  hearth is where the whole divine world meets.
- The fire is every priest (2.1.2, 2.5): it is born hotar, it "runs after" the brahman's office, and as the divine
  R̥tvij it makes itself the human R̥tvij who feeds it – "to suckle himself" (2.5.7).
- The gods eat through the fire's mouth (2.1.13–14): the oblation that vanishes in the flame is their food; the mortals
  "taste" through it too.
- Kinship with the god: father, brother, son and friend of the one who honours it (2.1.9); the "kinship" of Tvaṣṭṛ
  (2.1.5b).
- Births of fire: from waters, stone, trees, plants (2.1.1); from the kindling sticks as a woman "agape" giving birth
  (2.10.3); grown old (the grey ash) and young again in a moment (2.4.5d).
- Fire as horse, the herdless beast, the forest fire with its black track that "sweetens" the ground (2.4.4–7); and the
  danger: it must not be touched, and must "know its share" (2.10.5–6).
- The Āprī liturgy (2.3): the rite prays to its parts; Night and Dawn as two weavers of the sacrificial thread (2.3.6);
  the victim's death said only as "going to the gods' pasture" and the "quietener" (2.3.9d–10d).
- The family names itself: "the Gṛtsamadas" (2.4.9), heirs of the Bhṛgus who found the hidden fire (2.4.2); the refrain
  F9 asks to keep speaking in the assembly, with sons.
- The economy of praise: the thought as "a milk-cow for the poet" (2.2.9), "by steed or by formulation" (2.2.10), the
  patrons' gifts "headed by cows, adorned with horses" (2.1.16 = 2.2.13).

### Key parallels
- 2.1.13a – Exod 4:16 `וְהָיָה הוּא יִהְיֶה לְּךָ לְפֶה` [divergence]: the mediator as another's "mouth" – Aaron speaks,
  Agni eats; a shared image, no contact.
- 2.1.13d – Deut 4:24 `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` [divergence]: the "eating" fire – in Deuteronomy the god
  is the fire, here the fire is the gods' mouth.
- (Note, not a tag) 2.2.11a *sahasyà* `עִזּוּז` keeps Book 7's word, as `יְהוָה עִזּוּז וְגִבּוֹר` (Ps 24:8).

### Proposals for the shared renderings
- **Priests (§5.6 or a new row):** *néṣṭar* `כוהן־ההנהגה`, *praśāstár* `כוהן־ההדרכה`, *agnídh* `מצית־אַגְנִי`; the
  neuter offices `כהונת־` + the same noun (*hotrá* `כהונת־הקריאה` – a recorded split from *hótrā* `נסך`).
- **New recurring words (with their lines):** *ā́deva* 2 `דבק־האֵלִים` (Book 7); *ábhva* `גוש עצום`; *vanád* `אוכל־העצים`,
  *drvànna* `אוכל־העץ`; *sarpís* `חמאה מותכת`; √*ghr̥* `זילף`; √*uṣ* `חרך`; *tápus* `צורב`; *śruṣṭī́* `במשמעת`
  (adverb); *tiraścā́* `באלכסון`; *uttāná* `פשוק`; *súṣūta* `קל־הלידה`; *upasád* `התקרבות`; *gírvaṇas* `אוהב־השירים`;
  *draviṇasyú* `שוחר־הנכסים`, *draviṇodā́* / *draviṇodas* `נותן־הנכסים`; *vasudā́van* `נותן־הטוב`; *sátpati*
  `אדון־הקיימים`; *paraspā́* `השומר־מרחוק`; *manótar* `נותן־הדעת`; *yájīyaṃs* `המיטיב־לזבוח יותר`; *ā́yajiṣṭha*
  `הזובח־הנה ביותר`; *saṃyádvīra* `מלווה־גיבורים`; *abhimātiṣáh* `גובר־על־המזימות`; *kṣumánt* `עתיר־מזון`;
  *śatáhima* `בת־מאה־חורפים`; *bhrātrá* `קשר־אחים`; *viśíkṣu* `חפץ־לחלק`; *ātáni* `הפורש`; *araṃkŕ̥t* `מתקין`;
  *śaṃgayá* `מביא־אושר־לבית`; *dhr̥távrata* `מחזיק־התקנות`; *gnā́vant* `בעל־הנשים`; *sajātyà* `קרבה`; *sváśvya*
  `שפע־סוסים`; *puṣṭí* `פריחה`; *vā́r* `מים`; *várṇa* `צבע`; *yáma* "rein" `רסן`; *uttamá* `הגבוה ביותר`; *śréṣṭha*
  `המעולה`; *ádbhuta* `נפלא`; *vaśā́* `פרה מיוחמת`; *nemí* `חישוק`; *vayā́* `ענף`; *dhā́yas* `הזנה` (Book 7 `זרם מזין`).
- **Names (files only, or §3.1 "(RV 2)" if the coordinator wants the check):** Aṃśa `אַמְשָׁה` (2.1.4d; regex ` amsa`
  would catch the common noun *áṃśa* "share" – files only), Atri `אַטְרִי` (2.8.5a, Book 7's form), Pṛśni `פְּרִשְׁנִי`
  (2.2.4c), the Bhṛgus `בני בְּרִגוּ` (2.4.2b, as RV 10.14), Āyu `אָיוּ` (2.2.8d, 2.4.2b; *āyú* the adjective "mobile" is
  `נע`, 2.5.5a), Puraṃdhi `פּוּרַמְדְהִי`, Iḷā `אִילָה`, *bhā́rata* "of the Bharatas" `(אַגְנִי) של בְּהַרַטָה` (2.7.1a,
  5a; Book 7 `של בהרטה`).
- **No pre-set row revised.** F9 confirmed; §5.6's *vidátha*, √*vad*, *suvī́ra* met in real lines.
- **For the later parts:** *svā́hākr̥ta* `שנעשה בסְוָאהָא`; *anuṣvadhám* `לפי הכוח העצמי`; *svadhā́* (not a funeral
  hymn) `כוח עצמי`, as RV 10.129.

### Lessons for the guidelines
- A compact per-word draft (`meaning=Hebrew` per Zurich word) turned into the annotated format by a scratch script that
  decodes the Zurich tags kept the פירוק complete and aligned (the morphology is never retyped); the one risk is word
  order – a segment given out of order maps a Hebrew word to the wrong lemma (2.3.8d), caught only by a lemma-wise
  comparison with the other files. Run that comparison (lemma → Hebrew across all files) on every part.
- The reserved-word gate caught a simile the source does not have (2.2.9c `כפרה`): the gates double as a fidelity check.


### Review (reviewer 1)
Independent fidelity review of all 337 pādas against `data` (Zurich text and morphology), `tr` and Jamison; Book 7's
7.2 for the Āprī hymn; `lexmap` for the part's lemmas against Book 7. **11 lines fixed** (and their פירוק / notes), 7
intros corrected; `build RV2.1-10`, `verify RV2.1-10 --strict`: no problems; `check_bible_quotes.py`: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 2.2.5d | `הבליט את שתי המחצות, לאורכן` | `נגלה לאורך שתי המחצות` | injunctive in a present stanza; √*cit* intrans. "appear" = Book 7 `נגלה` (7.11.3a); "perceive" left to the note |
| 2.2.7d | `הברקת` | `הַבְרֵק …!` | injunctive in a run of imperatives (7a *dā́ḥ* `תן`, 7b–c impv.); all of `tr` read an imperative |
| 2.2.10a | `בסוס דוהר – או (נשיג במבט)` | `או בסוס דוהר (נשיג נא במבט)` | *vā … vā* is "by steed or by formulation": the first `או` belongs to the steed; the supplied verb is optative like *citayema* |
| 2.3.3a | `שמתפללים אליו, אַגְנִי` | `שמתפללים אליך, אַגְנִי` | *īḷitáḥ* stands with the vocative and the 2nd-sg. impv. of 3b: 3rd person clashed |
| 2.3.11a | `בחמאה מזוקקת הוא מהודק` | `חמאה מזוקקת מהודקת (בו)` | *ghr̥tám* is nominative, the subject of *mimikṣe* ("ghee clings (to him)": Geldner, Elizarenkova, Renou); √*mikṣ* keeps Book 7's root |
| 2.4.5a | `(בעיניי)` | `בעיניי` | *me* is in the source: not an addition |
| 2.4.5c, 6c | `נראה` | `נגלה` | *cikite* / *ciketa* "appeared" (Jamison): Book 7's `נגלה` for √*cit* "appear" |
| 2.4.6b | `הרעיש` | `מרעיש` | injunctive *svānīt* beside present *bhā́ti* (6a) |
| 2.5.3b | `יאמר נוסחים` | `אומר נוסחים` | injunctive *vócat* coordinated with *véḥ* `רודף` (present); Jamison makes both main verbs |
| 2.9.1a | `(משהו) נמצא` | `(משעה ש)נמצא` | Jamison: "once recognized / found" – the hotar himself, not "something" |

- **Intros:** 2.1 "therefore it is equal to them" (a causal link the lines lack) → "and it is equal"; 2.2 "brought it down
  from the airspace" → "moved it down into the depths of the airspace" (*budhné rájasaḥ* is locative), "the holy word"
  (root קדש) → "the contest of song"; 2.4 "who make a covenant (`כורתים ברית`) with their settlement" → "who set up
  an ally for themselves", "like their fathers, the hidden fire" → "in secret (perhaps the hidden fire)"; 2.5 "the
  seven reins" → "the seven cords" (the line's `מיתרים`), "rejoices when the ghee comes" → "at their coming", "lies
  in her" → "is in you too" (the line, 8c); 2.6 `שכורת רעות` → `בן־העם, איש־הרעות` (the line); 2.9 "to sing" → "to
  make the praiser"; 2.10 `שד` → `רקשס` (the line's word).
- **Checked and kept:** the 2.1 frame (`אתה, אַגְנִי, X` / `אותך, אַגְנִי` / `בך, אַגְנִי`) and every §3.1 name at
  its first occurrence; F9 in 2.1.16d = 2.2.13d and 2.1.16 = 2.2.13 character for character; 2.3 against 7.2
  (`קילוס־הגברים`, the doors, `השחר והלילה`, `שלוש האֵלוֹת … מצע העשב הזה`, `התר` / `יתיר נא`, `אדון־היער`,
  `ימתיק`, `המשקיט`, `סְוָאהָא`); the moods of the part's optatives (`נא`), subjunctives (future) and precatives
  (2.10.2a, 6a); no word moved across a pāda end (a script compared every פירוק Hebrew with its own `>` line); no
  reserved or biblical-idiom word in lines, notes or intros. The remaining `lexmap` splits against Book 7 are recorded
  ones (*yáma* "rein", √*uṣ* / √*dah*, *bhū́man* `אזור` as 7.69 / 7.86) or homonyms folded together (√*mr̥ś* / √*mr̥ṣ*,
  √*vas* "dwell" / "shine").
- **Rulings on the open cruxes (for the coordinator):** 2.1.4c *sambhújam* – I agree with the noun `הסעודה המשותפת (?)`:
  *yásya* "whose" wants a noun predicate, and a 1st-sg. subjunctive in a litany of 2nd-person identifications would be
  the only "I" of the hymn's body. 2.10.3c *śíriṇā* – keep `באפלה (?)`: the hapax stands beside *aktúnā* "by night"
  and *áparīvr̥taḥ* "uncovered", a night word fits the pāda; Jamison's "birth canal" stays in the note. 2.8.5a – keep
  `כמו אצל אַטְרִי` with the Svarbhānu reading in the note only; the line does not depend on it.
- **For the coordinator:** √*cit* now has three Hebrew in this part by design (`נגלה` "appear", `המבחין` "perceive",
  `נבלוט` 2.2.10b "stand out", Jamison's double readings) beside Book 7's `הבחין` / `נגלה`; a consistency pass may want
  to fold `נבלוט` into `נגלה`.

## RV2.11–2.16 (part 2: the Indra hymns; translator 2, Round 8 run 3)

### Scope
RV 2.11–2.16, 320 pādas: 2.11 (84; triṣṭubh in 10-syllable (virāj) pādas, the first Indra hymn, with the Indra closing stanza 21), 2.12 (60;
"he, o peoples, is Indra", F11 in 1–14d), 2.13 (52; jagatī + a triṣṭubh closing stanza; the shifting refrain *sā́sy
ukthyàḥ*), 2.14 (48; "o Adhvaryus"), 2.15 (40; F10 in 2–9d), 2.16 (36; the bull hymn). Six annotated files, six intros,
built (`build RV2.11-16`); `verify RV2.11-16 --strict`: no problems; `check_bible_quotes.py` on all my files (annotated,
intros, generated): 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); `freq RV2.11-16`, `lexmap` (every lemma of the part, by a scratch workbook that
prints each word's Zurich lemma with its Hebrew so far), `grep --all`; Grassmann (`gra`) for *paurá*, *dhamáni*, *aśúṣa*,
*suprāvyà*; after each hymn `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary on II.11–16
(with her complete revised translations of II.11 and II.13). Adopted from Jamison (attributed in the lines' bullets):
2.11.3a *cākán* as 2nd person; 2.11.5c the serpent "who had blocked (√*stambh*) the waters and heaven"; 2.11.8c the
singers (Aṅgirases) as subject; 2.11.11c *kukṣí* "cheeks"; 2.11.12a "abided in you"; 2.11.15c the supplied
"(strengthen)"; 2.11.20a the genitive with *vāvr̥dhāná*; 2.12.4a *cyávana* "stirring deed"; 2.12.5b existential
"he is not" (and 15b as its answer); 2.12.8 *krándasī* "the two war-cries" (Thieme), *nā́nā* "every man for himself";
2.12.15a *dudhrá* nominative; 2.13.1–4 the soma reading of the opening stanzas and her whole construal of 8–10, 12
(Sarapas a river, the blind and the lame "made famed"); 2.14.3cd *bharata* supplied, *jū́ḥ* "fast mares"; 2.14.7d
"wrenched down"; 2.15.3a "fixed apart" (√*mi*, not √*mā*), 3c *vŕ̥thā* "at (their) will", 4a "abductors", 7b–c the
subject switch to the shunned, the lame and the blind, 9a "strewn with sleep", 9c *rambhín* the old man with a staff;
2.16.7 the poet's speech as boat and chariot, 7d √*sic* "scoop (from a well)", 8 Indra as cow, the worshippers as bulls.
From Geldner: 2.16.4c Indra the subject of *yajasva*. From Grassmann: 2.11.11d *paurá* "the filler (of the belly)".

### Decisions
- **The formulas as fixed:** F11 `הוא – אנשים! – אִינְדְּרָה.` at the end of 2.12.1–14d, after a comma
  (`בגדולת הגבריות, הוא – אנשים! – אִינְדְּרָה.`); F10 `בהתבסמות הסוֹמָה את אלה עשה אִינְדְּרָה.` (2.15.2–9d); F9 in
  2.11.21d, 2.13.13d, 2.14.12d, 2.15.10d, 2.16.9d. 2.12.15d (*suvī́rāso vidátham ā́ vadema*) is a variant, not F9:
  `רבי־גיבורים, נדבר נא אל המועצה.` (F9's words, *vidátham ā́* "to the assembly").
- **The Indra closing stanza (first copy, 2.11.21abc; copied in 2.15.10abc, 2.16.9abc; part 3 copies it in
  2.17–2.20.9):** `עתה היא, את מבחרך, אל המהלל` / `תחלוב נא, אִינְדְּרָה, שכר־הכוהנים, בעלת־השפע;` / `השתדל למען
  המשבחים; אל יחלוף על פנינו בְּהַגָה!` – *práti* `אל` (with *jaritré*), *vára* `מבחר`, *duhīyát* (opt. middle)
  `תחלוב נא`, *dákṣiṇā* `שכר־הכוהנים`, *maghónī* `בעלת־השפע`, √*śak* desid. `השתדל` (Book 7), *mā́ áti dhak*
  `אל יחלוף על פנינו` (√*dagh* "reach" + *áti*), *bhága* the god `בְּהַגָה` (the §3.1 name: "Portion / fortune", the note
  gives Jamison's "fortune"; a common noun `חלק` would need a name escape in six hymns).
- **The 2.13 refrain** *sá asi ukthyàḥ* `אתה הוא הראוי־לאמירה` (as 2.12.15b *sá kílāsi satyáḥ* `אתה הוא, באמת,
  האמיתי`: *sá* + 2nd person = `אתה הוא`); 2.13.2–4d `אשר את אלה עשית ראשון – אתה הוא הראוי־לאמירה.` (*tā́* `את אלה`,
  as F10); 1d neuter `זה – ראוי־לאמירה`. 2.13.13abc = 2.14.12abc identical.
- **Copies:** 2.11.2b = 7.21.3b `הרבים, שהוקפו בידי הנחש, גיבור;` and 2.15.1c = 1.32.3b `בשלושת הגביעים שתה מן
  הסחוט.` copied exactly; 2.12.12b follows 1.32.12d (3rd person); 2.15.1b *vocam* `אכריז` as 1.32.1a; 2.11.5d F2 in the
  2nd person `הרגת את הנחש` with `[סטייה מן הנוסחה]`.
- **Indra's vocabulary as Book 7:** *vájra* `וַגְ'רָה`, *hárī* `שני הצהבהבים`, *śū́ra* / *vīrá* `גיבור`, *vŕ̥ṣan* /
  *vr̥ṣabhá* `פר`, √*mad* / *máda* `התבסם` / `התבסמות`, √*mand* `ביסם`, √*su* `סחט`, *ándhas* `עסיס`, *tríkadruka*
  `שלושת הגביעים`, *suśiprá* `יפה־השפתיים`, *śatákratu* `בעל־מאה־הרצונות`, *vájrabāhu* / *vájrahasta* `שהוגרה
  בזרועו` / `בידו`, *śúṣma* `סער`, *śávas* `עצמה`, *ójas* `חוסן`, *samád* `התגוששות`, √*tr̥̄* `עבר (על)`, *dásyu*
  `דַּסְיוּ`, *dāsá* `דָּאסָה`, *ā́rya* `אָרְיָה`, *arí* `אָרִי`, *púr* `מבצר`, *yajatá* `הראוי לזבח`, *bhojá* `המפרנס`,
  *sádam* `בכל עת`, *tr̥pát* `עד שׂבעה`, *svápna* `שינה` (7.86.6d), *pátnī* `רעיה`.
- **New (recurring in Books 2 and later):** *valá* `וַלָה` (the cave; 2.11.20d, 12.3b, 14.3b, 15.8a); *ukthyà*
  `רָאוּי־לָאֲמִירָה` met (§5.6); *mandín* `מבסם`; *mandasāná* `מתבסם`; *ápas* `מפעל`; *adhvaryú* voc. pl.
  `כוהני־המעשה`; *dhúni* `שואג` (Book 7) and Dhuni the demon `דְּהוּנִי` (2.15.9a); *apadhā́* `הסרה (המכסה)`;
  *saṃvŕ̥j* `הגורף`; *cyávana* `מעשה מטלטל`; *acyutacyút* `מזיז את הבלתי־מזוז`; *śvaghnín* `"הורג־הכלב"` (the gambler);
  *lakṣá* `קופה`; *víj* `הימור`; *krándas* `זעקה`; *nā́nā* `איש־איש לחוד`; *dudhrá* `עקשן`; *grā́ma* `מחנה` (not
  `כפר`: the root כפר is reserved); *pradíś* "instruction" `הנחיה` (Book 7's *pradíś* `הכיוונים` is the spatial sense);
  *raśmí* `מיתר` (Book 7) in *saptáraśmi* `בעל־שבעת־המיתרים`; *jánitrī* `יולדת`; *pīyū́ṣa* `חלב־הבכורה`; *āhanás*
  `תאוותנית`; *śevadhí* `מטמון` (`אוצר` is *rátna*'s); *dhautí* `זרם`; *dā́na* "division" `חלוקה (?)` (2.13.7b),
  *dāná* "gift" `מתן` (7.18.22c); *kr̥tnú* `מצליח`; *rodhaná* `מעצור`; *jātū́ṣṭhira* `יציב־מלידה`; *parāvŕ̥j*
  `מנודה`; *anákṣ* `חסר־העיניים`; *śroṇá* `צולע`; *andhá* `עיוור`; *apagohá* `מחבוא`; *kanī́* `עלמה`; *vŕ̥thā* `כאוות
  נפשם`; *avaṃśá* `חסר־קורות` (Book 7); *pravoḷhár* `חוטף`; *asnātár* `שאינו שוחה`; *údañc* `פונה מעלה`; *ánas*
  `עגלה`; √*piṣ* `מעך`; *rambhín* `בעל־המקל`; *aurṇavābhá* `בן־העכביש`; *tvāṣṭrá* `(בן) תְּוַשְׁטָר`; *sākhyá*
  `חברות`; *dhamáni* `נשיפה` (`תרועה` is *ráva*'s); *svārá* `קול`; *kukṣí* `לחי`; *paurá* `הממלא`; *pastyā̀vant*
  `בעל־המדור` (`מושב` is *sádman*'s); *ágraṇīti* `המנה הראשונה`; *pŕ̥t* `מאבק` (*pŕ̥tanā* keeps `קרב`); *drahyát*
  `בחוזקה`; *aśúṣa* `זללן`; *vyàṃsa* `פרוש־הכתפיים` (1.32.5a); *ū́rdara* `אסם`; *gábhastipūta* `המטוהר־בידיים`;
  *madirá* `מרנין`; *hástya* `שביד`; *kāmín* `חושק`; *tadvaśá* `החפץ בו`; *jaṭhára* `בטן`; *indriyá* (Indra's power)
  `הכוח האִינְדְּרִי` (the Kaṭha's *indriya* "senses" is the later sense); *kṣoṇī́* `שתי הארצות`; *vr̥ṣabhā́nna*
  `אוכל־הפרים`; *sambādhá* `לחץ`; *jyéṣṭhatama* `הבכיר ביותר`; *yójana* `יוֹגַ'נָה` (MBh 3.185.17a).
- **Sense splits (recorded in the lines):** √*sphur* `בעט` "kick" (2.11.9b, 12.12c; Book 7 `מקפץ`); √*rū* intens.
  `נהם שוב ושוב` (2.11.10a; Book 7 101.1d `שואג ושואג` collides with √*krand* `שאג`); √*vr̥j* *ní* `כפף` "wrench down"
  (2.14.7d; Book 7 `שזר` "twist (ropes)"); √*sic* `נשאב` "scoop from a well" (2.16.7d; `יצק` 2.14.1b); *dā́na*
  "division" (2.13.7b, `?`); *sámbhr̥ta* "gathered" `נאספו` (2.16.2b, as RV 10.90.8b).
- **Collisions avoided or moved in pass (b):** √*puṣ* `פרח` (2.12.4d `הפורחים`; *puṣṭí* `פריחה` part 1), because
  √*vakṣ* has `שגשג` (Book 7, part 1, 2.16.1c); *puṣpín* therefore `מלבלב` (2.13.7a); *viśvárūpa* `בעל כל הצורות`
  (RV 10.10.5b, without hyphens; 2.11.19c) beside *viśvápsnya* `בעל־כל־הצורות` (7.71.4d; 2.13.2b) – an inherited
  near-collision, followed both ways; *yajatá* without the hyphen (precedent).
- **Escapes:** `[היתר שם]` for *mitrám* "alliance" `רֵעוּת` (2.11.14a), *bhárati* "bears" (2.16.2d, not Bhāratī),
  *yāmi* "I go" (2.16.7b, not Yamī); `[היתר שער: הטובה]` for *vasavyà* (2.13.13b = 2.14.12b, as 2.9.5a); `[סטייה מן
  הנוסחה]` 2.11.5d.
- **Gates respected:** `רוּחַ` only for *vāyú* / *vā́ta* (2.11.3d, 14d; 2.14.3c); `אדמה` only *bhū́mi*; `נחש` only
  *áhi* (and *ahihán*); `עוון` for *énas* (2.12.10a), never a word of the root חטא, `פשע`, `סליחה` (§7.4).

### Open decisions for the user
- 2.12.5b *naíṣó asti*: `"אין הוא"` (existential, with Jamison and all standard translations) – a reader may hear
  "he is not (here)"; the note says which.
- 2.11.21c / 2.15.10c / 2.16.9c *bhága*: the god `בְּהַגָה` (Geldner "das Glück", Jamison "fortune"). Choosing the common
  noun `חלק` would need a name escape in each of the seven copies (parts 2–3).
- 2.13.7b *dā́na* `בחלוקה (?)` (Jamison "in their reaping ... in their division" against Zurich's *dā́na* "gift"); 2.13.8c
  *ūrjáyantī* as a river ("המשביע"), after Jamison; 2.13.12a Sarapas a river (Brereton).
- 2.12.15a *dudhrá* nominative ("headstrong", Geldner, Jamison's preference) or locative (Renou, the published tr.).

### Progress log
- Drafted hymn by hymn from a compact per-word draft (a scratch generator decodes the Zurich tags into the פירוק forms;
  translator 1's tool, reused), each filled, verified and built before the next; `tr` and Jamison after each draft; the
  readings above adopted with attribution; intros written.
- Pass (a) fidelity: 2.13.6c *sá* + 2nd person `(אתה) הוא`; 2.15.9c *vivide* read as 3rd sg. (Zurich: 1st); 2.13.9a
  *ā́* accounted for; 2.12.10 Griffith's and Geldner's "sinners", "pardons", "vergibt" noted as a rank-3 false echo
  (the line says `אינו מוותר`); 2.15.1–7 the subject switch in 7b–c (Jamison).
- Pass (b) consistency: a lemma → Hebrew comparison of every word of the part with all other files (`cons.py` on
  `lexmap_dict`) and a check that every פירוק Hebrew stands in its own `>` line (no word moved across a pāda end);
  aligned: *bhojá* `המפרנס` (2.14.10b), *sádam* `בכל עת` (2.14.1c), *yajatá* (2.14.10d, 2.16.4a), *tr̥pát* (2.11.15b),
  *dāná* `מתן` (2.13.13a = 2.14.12a), *pátnī* `רעיה` (2.16.8d), √*puṣ* / *puṣpín* (above), *pastyā̀vant* (above),
  *viśvárūpa* (above).
- Pass (c) Hebrew: the generated files read through; `טוֹב` vocalized in 2.13.13a = 2.14.12a (the vocative); `הָאֵל` /
  `הָאֵלִים` vocalized (2.12.1b, 2.13.5d).
- `build RV2.11-16`; `verify RV2.11-16 --strict`: 0 problems; `check_bible_quotes.py`: 0 problems.

### The text on its own terms
- **The riddle and its answer (2.12):** each stanza is a chain of "who …" clauses – the deeds – and the refrain names the
  doer to the crowd: "he, o peoples, is Indra"; the hymn is a public proof by deeds, ending in "you are truly real"
  (15b) against those who ask "where is he?" and say "he is not" (5ab). Doubt about a god's existence is voiced inside the
  liturgy itself, and answered by the list of his works and an order to the audience: "put trust in him" (5d).
- **The god who grows on praise (2.11.1–4, 15d; 2.12.14c):** the hymns, the oblations and the soma "make Indra great";
  the priests "place the mace in his arms"; he "made heaven great with lofty chants" – the word strengthens god and world.
- **Soma is Indra's strength (2.15's refrain):** every deed was done "in the exhilaration of soma"; the drink is poured,
  filtered "by the hands", fills his cheeks, is shaken in his beard (2.11.17c) – a physical, bodily god.
- **The ordered cosmos is Indra's work:** heaven propped up without beams (2.15.2a), the earth steadied, the flying
  mountains set down (2.11.7–8, 2.12.2), the river beds fixed and drilled (2.15.3), the midspace measured (2.12.2c).
- **The cosmic war:** Vṛtra the "obstruction" who held the waters, the Vala cave of the cows (opened with the singing
  Aṅgirases), Śambara's forts, Dānu, Rauhiṇa climbing to heaven, the demons of sleep (2.15.9).
- **The protector of the weak (2.12.6, 2.13.12, 2.15.5, 7):** the feeble, the starving, the shunned child of a hidden
  birth, the lame and the blind "made famed", the non-swimmers carried across the river, the old man with a staff who
  finds gold.
- **Human and divine society:** the Ārya and the Dāsa / Dasyu, the "stranger" (*arí*) whose wealth Indra takes like a
  gambler sweeping the pot (2.12.4–5, 2.13.10), the two armies who both call him, "every man for himself" (2.12.8).
- **The priests at work (2.14):** the Adhvaryus measure, pour, filter and "fill Indra like a granary with barley"; the
  poet "knows" a treasure is laid aside for him (2.14.10c).
- **The bull and the cow (2.16):** everything is "bull" – god, soma, stones, priests, weapons – and then the god is a cow
  returning to her calf, the worshippers the bulls who unite with his favours "as with their wives".
- **The economy of the gift:** the closing stanza asks the *dákṣiṇā*, a cow "rich in bounty", to "yield as milk" Indra's
  boon for the singer (2.11.21).

### Key parallels
- 2.12.5a – Ps 42:11 `אַיֵּה אֱלֹהֶיךָ` [divergence]: "where is he?" asked of an unseen god – in the psalm the enemies'
  taunt, here an open question answered by deeds; a shared motif of cultures that never met.
- 2.12.5b – Ps 14:1 `אֵין אֱלֹהִים`; Jer 5:12 `לוֹא הוּא` [divergence]: the denial "there is none / not he" – in the Bible
  the fool's moral denial, here human doubt about a god no one sees.
- 2.12.5d – 2 Chr 20:20 `הַאֲמִינוּ בַּיהוָה אֱלֹהֵיכֶם` [equivalent]: a call to the crowd to trust the god (*śrád*
  √*dhā*); content, not words.
- 2.12.15b – Jer 10:10 `וַיהוָה אֱלֹהִים אֱמֶת` [equivalent]: the "real / true" god against the deniers (*satyá* from √*as*
  "be"; `אֱמֶת` from "firm").
- 2.12.2d – Job 9:8 `נֹטֶה שָׁמַיִם לְבַדּוֹ` [divergence]: the god who fixes heaven and earth; here a builder's work of
  propping and measuring.
- 2.13.12d – Isa 35:5–6 (the blind, the lame) [divergence]: the god and the blind and the lame; Indra "makes them famed",
  he does not heal.
- 2.15.5b – Exod 14:29 [divergence]: the god halts a river and carries his protégés across; no pursuing enemy, no
  divided sea.

### Proposals for the shared renderings
- **§3.1 names (RV 2) – a check worth having:** Vala `וַלָה` (regex ` val(?:a|am|asya|ena|at|e)\b`: Book 2–3 Indra hymns,
  2.11.20d, 2.12.3b, 2.14.3b, 2.15.8a, and Brahmaṇaspati 2.23–24); Trita `טְרִיטָה` (` trit(?:a|ah|asya|aya)\b`;
  2.11.19d, 20a). Files only: Arbuda `אַרְבּוּדָה`, Rauhiṇa `רָאוּהִינָה`, Dṛbhīka `דְּרִבְּהִיקָה`, Uraṇa `אוּרַנָה`, Aśna
  `אַשְׁנָה` ("Devourer"), Pipru `פִּיפְּרוּ`, Namuci `נַמוּצִ'י` (Book 7), Rudhikrā `רוּדְהִיקְרָא`, Varcin `וַרְצִין`
  (Book 7's spelling, without geresh), Kutsa / Āyu / Atithigva (Book 7 / part 1), Cumuri `צוּמוּרִי` (Book 7), Dhuni
  `דְּהוּנִי`, Nṛmara's son `בן־נְרִמַרָה`, Pṛkṣa `פְּרִקְשָׁה`, Dāsaveśa `דָּאסַוֵשָׁה`, Sarapas `סַרַפַּס`, Turvīti
  `טוּרְוִיטִי`, Vayya `וַיְּיָה`.
- **New recurring words** (see Decisions): *mandín* `מבסם`, *mandasāná* `מתבסם`, *ukthyà* confirmed, *valá*, *apadhā́*,
  *cyávana* "deed", *pradíś* "instruction" `הנחיה` (a sense split from Book 7's `הכיוונים`), *grā́ma* `מחנה`,
  *śevadhí* `מטמון`, *pŕ̥t* `מאבק`, *dhamáni* `נשיפה`, *indriyá* (RV) `הכוח האִינְדְּרִי`.
- **For the round's consistency pass:** *viśvárūpa* `בעל כל הצורות` / *viśvápsnya* `בעל־כל־הצורות` (one string, two
  lemmas, inherited from RV 10.10 and 7.71); *mandín* `המבסם` / *mádya* `המבסם` (7.92.1c) – one Hebrew for two words of
  the √*mad* / √*mand* family; √*rū* intens. `נהם` against 7.101.1d `שואג ושואג`; √*sphur* `בעט` against Book 7 `מקפץ`.
- **No pre-set row revised.** F9, F10, F11 confirmed in real lines; §5.6's *dákṣiṇā* `שכר־הכוהנים`, *maghónī*
  `בעלת־השפע`, *ukthyà* `רָאוּי־לָאֲמִירָה` met.

### Lessons for the guidelines
- **Reuse the previous translator's scratch tools inside one project:** translator 1's generator (`gen.py`: a compact
  `meaning=Hebrew` draft per Zurich word → the annotated format) and workbook (each word with its lemma and its Hebrew so
  far) made 320 pādas a matter of translation, not formatting; one trap: a `;` inside a grammar override splits the
  segment (2.15.10c) – write overrides with commas.
- **The name regexes catch verb forms:** *bhárati* "bears" (Bhāratī), *yāmi* "I go" (Yamī) – the verifier's escape is
  right, but a regex anchored to the noun endings would spare the escapes.

### Review (reviewer 2)
Independent fidelity review of all 320 pādas against `data` (Zurich text and morphology), `tr` and Jamison (her revised
translations of II.11 and II.13 and the commentary on II.11–16); `lexmap` for the part's lemmas against Book 7 (a
script flagged every part-2 Hebrew sharing no stem with Book 7's); a script re-checked that every פירוק Hebrew stands in
its own `>` line (no word moved across a pāda end; the 8 hits are discontinuous renderings inside one line). **9 lines
fixed** (with their פירוק and notes), 5 intros and 4 annotated heads corrected; `build RV2.11-16`, `verify RV2.11-16
--strict`: no problems, 0 repeated-line differences; `check_bible_quotes.py`: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 2.11.3d | `זורמות קדימה, ולרוּחַ, כמו הנאות.` | `זורמות קדימה – כמו הנאות לרוּחַ.` | the `ו` is not in the source; *ná* takes *vāyáve* and *śubhrā́ḥ* together: "like the gleaming (streams) to Vāyu" (Geldner, Renou, Elizarenkova) |
| 2.11.13a | `אלה (שלך)` | `אלה שלך` | *te* is in the source: not an addition (as reviewer 1, 2.4.5a) |
| 2.11.13d, 14a (×2), 14b | `העניק` | `הענק` | *rāsi* is an imperative; plene `העניק` reads "he granted"; Book 7's imperative is `הענק` (7.16.4d) |
| 2.12.15b | `קורע (ומוציא)` | `מבקיע שוב ושוב` | √*dr̥* intensive = Book 7's `הבקיע שוב ושוב` (7.18.13b, 7.55.4ab): a split against Book 7, and the intensive was unmarked |
| 2.14.3d | `כמו את המהירות` | `כמו את (הסוסות) המהירות` | `המהירות` reads "the speed"; Jamison's "fast mares" needs the noun supplied |
| 2.14.10c | `זה (בשבילי)` | `זה בשבילי` | *me* is in the source |
| 2.16.7a | `קדימה אליך – …` | `(אני שולח) קדימה אליך – …` | the pāda has no verb (*prá* alone) but an object (`את (המלה)`); supplied as Elizarenkova "посылаю", Renou "(envoie)" |

- **Intros and heads:** 2.11 "the priests fill his cheeks with soma" → the soma fills them (11c); "killed the Dāsa" → split
  (2d, *ávābhinat*); "calmed the earth and the mountain" → the earth spread, the mountain came to rest (7cd: no agent);
  "trembled at the sound of the vajra" → before the vajra (9d); "the next six Indra hymns" → 2.15–20; `כפרה` ("heifer",
  but read as "atonement", the reserved root כפר) → `פרה` (also the 21b note). 2.12 "killed Śambara … and Rauhiṇa" →
  found Śambara (11b *anvávindat*), killed Dānu, kicked Rauhiṇa (12c) – intro and head. 2.13 "one priest recites, another
  offers", "the fire eats" → the line's wording, Jamison's identifications marked as hers; `כפת` → `קשר` (9c). 2.14
  Arbuda "killed" → pressed down (4c) – intro and head. 2.15 "smashed" → `מעך` (6b), "raised the shunned one" → the
  shunned one rose (7b, the subject switch the lines follow), "the demons" Cumuri and Dhuni → the names only (the lines
  do not say "demons").
- **Checked and kept:** F11 (2.12.1–14d), F10 (2.15.2–9d), F9 and the Indra closing stanza (2.11.21abc = 2.15.10abc =
  2.16.9abc) character for character; 2.11.2b = 7.21.3b, 2.15.1c = 1.32.3b; 2.13.2–4d, 2.13.13abc = 2.14.12abc. The
  narrated injunctives (2.11.2a *sr̥jáḥ*, 8d, 20d; 2.13.9c; 2.15.2c, 7c, 8abc) are past in a past frame, as renderings
  §4 allows; the present injunctive 2.13.2b and the subjunctives (2.11.10b, 14d; 2.14.8ab; 2.16.7cd) and optatives (`נא`)
  are right; 2.15.1b *vocam* `אכריז` as 1.32.1a. The 2.12 notes call 5a (Ps 42), 5b (Ps 14, Jer 5), 5d (2 Chr 20) and
  15b (Jer 10) shared motifs, not sources, and set out the difference each time (the biblical denier is a moral fool;
  here a doubter answered by deeds); the 10ab note keeps `עוון` and names the rank-3 "sinners / pardons" as false echoes.
  No reserved word in lines, notes or intros after the `כפרה` fix.
- **Rulings on the open questions (for the coordinator):**
  - **2.11.21abc (the closing stanza):** kept unchanged, so the seven copies need no change. Its grammar is Jamison's
    ("yield your boon for the singer as its milk": *te* with *váram*, *práti* with the verb and the dative), a defensible
    construal; Geldner, Renou and Elizarenkova take *te* with *dákṣiṇā* and *práti váram* as "according to wish". The
    21a note now gives the alternative. `תחלוב` for the middle "yield milk" follows Book 7 (`חולבות` 7.41.7c). *bhága* as
    the god `בְּהַגָה`: kept (a common noun would need a name escape in every copy). *mā́ áti dhak* `אל יחלוף` against
    7.56.21b `נפגר` (*paścā́ √dagh* "fall behind") is a justified sense split.
  - **2.12.5b `"אין הוא"`:** keep. *ná … asti* in a main clause is existential (Jamison; Renou "il n'existe pas"; RV
    8.100.3 *néndro astī́ti*); `איננו` would lean to "he is not here", the reading the poet's own answer (15b *satyáḥ*
    "real") rules out.
  - **2.13.7b *dā́na* `בחלוקה (?)`:** keep, with the `?`. Zurich's "gift" makes no sense in the pāda; Jamison reads both
    "reaping" (√*dā* 2, with the plants) and "division" (√*dā* 4, with the streams, as JPB), and *ví … ádhārayaḥ* with
    the streams favours "division"; the note lists both.
  - **2.12.15a *dudhrá* nominative `עקשן`:** keep. The Padapāṭha, Geldner and Jamison's stated preference; *dudhrá*
    elsewhere qualifies Indra (I.56.3, VI.22.4); the locative (Renou, the published JPB) stays in the note.
  - **For the consistency pass:** √*puṣ* `פרח` (2.12.4d) / *puṣṭí* `פריחה` (part 1) against Book 7's √*puṣ* `שגשג`
    (7.32.9c, 16b; 7.56.5b; 7.57.5d), which Book 7 also gave √*vakṣ* (7.8.2d): the book-2 split resolves a Book 7
    collision, but it is a split; one of the two families should move in Book 7 too. 2.11.21a `עתה היא, את מבחרך, אל
    המהלל` is stiff Hebrew; if the coordinator prefers the majority construal, the change must go into all seven copies at
    once (2.11, 2.15, 2.16, 2.17–2.20).

## RV2.17–2.24 (part 3: Indra and Brahmaṇaspati; translator 3, Round 8 run 3)

### Scope
RV 2.17–2.24, 338 pādas: 2.17 (36; jagatī + triṣṭubh), 2.18 (36; the number hymn, 2 → 100 horses), 2.19 (36), 2.20 (36),
2.21 (24; the hymn of epithets, nine *-jít* "winners"), 2.22 (30; the atyaṣṭi soma-drinker hymn with `e`–`h` pādas and
the refrain 1gh = 2fg = 3fg), 2.23 (76; Brahmaṇaspati / Bṛhaspati, the Vala myth only in 18), 2.24 (64; the Vala myth
told at length). Eight annotated files, eight intros, built (`build RV2.17-24`); `verify RV2.17-24 --strict`: no
problems, 0 repeated-line differences; `check_bible_quotes.py` on all my files (annotated, intros, generated): 0.
The run was interrupted once by a VM restart after 2.19 (the coordinator committed 2.17–2.19); 2.20–2.24 were drafted
after it, from the same scratch tools.

### Sources consulted
The Zurich text and morphology (`data`); `freq RV2.17-24`, `lexmap` for every lemma (a workbook printing each word with
its lemma and its Hebrew so far, and a reverse Hebrew → lemma lookup for every new Hebrew word), `grep --all`; Grassmann
(`gra`) for *právayas*, *jīrí*, *amājúr*, *tuviṣváṇi*, *īśānakŕ̥t*, *krívi*; after each hymn `tr` (Griffith, Grassmann,
Geldner, Elizarenkova, Renou) and Jamison's commentary on II.17–24. Adopted from Jamison (attributed in the bullets):
2.17.3b *asya* = the singer's formulation; 2.17.6 the riddle solved by *vájra* in 6d, *krívi* possibly "worm";
2.17.7 the unmarried girl's *bhága*; 2.18.1d *raṃhyà* gerundive with instrumental agents; 2.18.2 "the embryo of one
(the kindling stick)"; 2.18.8a *ví √yu* transitive with "no one" supplied; 2.19.4 *hánti vr̥trám* as the present core of
the hymn and *índro dāśad dāśúṣe* as a parenthesis; 2.19.8b the simile limited to the subject; 2.20.4b the subjects =
the Āyus of old; 2.20.5c "the dawns along with the sun" (Vala); 2.20.7 *púraḥ* supplied from *puraṃdará*; 2.21.4a
*anānudá* from *ánu √dā* "unyielding"; 2.21.5d *hinvānā́ḥ* reflexive; 2.22.2e the single *anyá* read both ways; 2.22.4d
the pun on *ásu*; 2.23.4 the general relative + reward pattern; 2.23.7b *sānuká* "with hackles raised" (WG); 2.23.16c
*ā́ … ví óhate* "proclaim … but disparage in their heart" (WG); 2.23.17 the god born *as* Brahmaṇaspati; 2.24.2d a split
verb supplied for *ví*; 2.24.5ab the double reading (doors closed for months / to be opened); 2.24.5c sun and moon not
aligned; 2.24.12 *indrābrahmaṇaspatī* as the trace of Bṛhaspati's origin in Indra. From Geldner: 2.18.8c, 2.21.4d
*uṣásaḥ* acc. pl. ("die Morgenröten, die Sonne", against Zurich's gen. sg.), 2.23.12b *śāsā́m*, 2.24.7c "found".

### Decisions
- **The copies:** the Indra closing stanza 2.17.9abc = 2.18.9abc = 2.19.9abc = 2.20.9abc copies 2.11.21abc character for
  character, with its פירוק; F9 in 2.17–2.20.9d, 2.23.19d, 2.24.16d. 2.18.7d = 7.23.5d `בסחיטה הזאת, גיבור, הִתְבַּסֵּם.`;
  2.20.3c = 2.12.14b `אשר למקלס, אשר לטורח – בסיועו;`; 2.21.2b = 7.46.1c `לשאין לגבור עליו, לגובר, לנבון,`.
  **The 2.22 refrain** (first copy 1gh, = 2fg = 3fg): `הוא התלווה אליו, הָאֵל אֶל הָאֵל, אֶל אִינְדְּרָה האמיתי –` /
  `הטיפה האמיתית.` (*índu* `טיפה`, *satyá* `אמיתי`). **The Brahmaṇaspati closing** (first copy 2.23.19abc = 2.24.16abc):
  `בְּרַהְמַנַסְפַּתִי, אתה, המרסן של זה –` / `של המזמור – היה, וקדם את התולדה!` / `כל זה טוב, אשר האֵלִים עוזרים לו.`
  (19c = 2.35.15c, for part 5) – the word order keeps *bodhi* in its own pāda.
- **The two names** as the hymns alternate them: *bŕ̥haspáti* `בְּרִהַסְפַּתִי`, *bráhmaṇas páti* `בְּרַהְמַנַסְפַּתִי`
  (vocalized throughout). Zurich writes the latter as two words: the פירוק gives *bráhmaṇaḥ* `–` and *páti* the name
  (the RV 10.72.2a precedent), so `lexmap` lists the name under *páti*. *indrābrahmaṇaspatī* `אִינְדְּרָה ובְּרַהְמַנַסְפַּתִי`.
- **The enemy words, one Hebrew each, Book 7's where it has one:** *śátru* `אויב`, *árāti* `איבה` (*arātīván*
  `בעל־האיבה`), *dvíṣ* `שונא` (*brahmadvíṣ* `שונא־הנוסח`), *drúh* `שקר`, *níd* `גנאי` (*devaníd* `מְגַנֵּי־הָאֵלִים`),
  *ripú* `נוכל`, *stená* `גנב`, *vŕ̥ka* `זאב`, *rakṣás* `רקשס`, *duréva* `מרושע`, *duḥśáṃsa* `רע־הקילוס`, *ádeva*
  `חסר־האלים`, *dásyu* / *dāsá* / *dā́sī* as Book 7 and part 2, *mŕ̥dh* (noun) `המזניחים` (√*mr̥dh* `הזניח`), √*dabh*
  `הונה` (*abhidipsú* `המבקש להונות`, *amitradámbhana* `המונה את שאינם בני־רעות`). New, one Hebrew each: *pariráp*
  `מלעיז`, *dvayāvín* `כפול־הלשון`, *dhvarás* `מכשילה`, *hváras* `מלכודת`, *duchúnā* `פורענות`, *hárasvant* `רב־הזעם`
  (*háras* `זעם`, RV 10.16), *pīyú* `מלעיג`, *arśasāná* `מזיק`, *dódhat* `משתולל`, √*mr̥c* caus. `פגע`, √*riṣaṇy*
  "seek to harm" `ביקש להזיק` (Book 7's `תיכשל` is the "stumble" sense). *arí* stays `אָרִי` (2.23.13c, 15a), *áraṇa*
  `זר` (2.24.7d, Book 7).
- **Debt:** *r̥ṇayā́* `גובה־החוב` (§5.6; 2.23.11c, 17c), *r̥ṇacít* `נוקם־החוב` (2.23.17c), *r̥ṇá* `חוב` (2.24.13c,
  *ādadí* `לוקח`). No word of the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` in lines, notes or intros (grepped).
- **New recurring words:** *gotrá* `רפת` (2.17.1c; *gotrabhíd* `מבקיע־הרפתות`; `דיר` is *svásara*'s, `מכלאה`
  *vrajá*'s); *yugá* "yoke" `עול` (2.18.1b; Book 7's *yugá* "age" `עידן` is the other sense); *jīrí* `נחל`; √*sīv*
  `תפר`; *amājúr* `המזדקנת־בבית`; *bhāgá* `נתח` in 2.17.7d only, beside *bhága* `חלק` in 7b (two "share" words in one
  stanza; elsewhere *bhāgá* keeps part 1's `חלק`, 2.23.2b); *práyas* `מעדן`; *ví* "bird" `עוף` (the Avestan *vi*
  cognate); *ucátha* `אמירה` (Book 7); *gaṇápati* `אדון־הלהקה`; *sā́man* `נעימה` (RV 10.90); *avatá* `באר`; *paribhū́*
  `סובב` (*vibhú* keeps Book 7's `המקיף`); *rītí* `פלג` (`זרם` is *dhautí*'s); *tavasyà* `עוצם`; √*tū* `העצים`; √*muṣ*
  `גזל`; *nr̥tú* `רקדן`; *mahiṣá* `תאו` (Book 7); *dhánvan* `קשת` (= *dhánus*, the gate passes it).
- **Sense splits recorded in the lines:** *ā́* √*tr̥̄* `הגדיל` (2.17.2b; Jamison doubts every rendering); *prācī́na*
  `הנעים קדימה` (2.17.5a, the moving mountains; Book 7 `פונה מזרחה`); √*ric* `פינה` (2.19.5b, as 2.13.5b, 2.15.8c) /
  middle `עדף` (2.22.2e, Book 7); √*ubj* + *nís* `דחק החוצה` (2.23.18d; Book 7 `דכא`); *ní* √*kr̥* `הכניע` (2.23.12d).
- **Names (files only):** Krivi `קְרִיוִי` (2.17.6c, 2.22.2a), the Śunahotras `בני שׁוּנַהוֹטְרָה` (2.18.6c), Kuyava
  `קוּיַוָה` and Etaśa `אֵטַשָׁה` (Book 7's), Aśna `אַשְׁנָה` (part 2), Gaṇeśa `גַּנֵשָׁה` (a note only).
- **Echo control:** *adhivaktár* `דובר־בעד`, not `מליץ` (Job 33:23); *sugopā́* `רועה טוב` without the article;
  2.23.6d's self-destroying evil and 2.24.3c / 4a's word that splits rock and the well of rock are tagged as shared
  motifs, the Hebrew of the lines stays Vedic.

### Open decisions for the user
- 2.17.6c / 2.22.2a *krívi*: a name (most translators) or Jamison's "worm" (a contemptuous word for the serpent).
- 2.23.16c (*vráyas*, *ā́ … ví óhate*): the WG / Jamison reading is in the line; Geldner's "weakness" in the note.
- 2.24.5b: "months and years closed the doors" in the line; Jamison's simultaneous "will open" (with Grassmann's *ví*)
  in the note.
- 2.21.4d *uṣásaḥ*: Geldner's acc. pl. in the line against Zurich's gen. sg.

### Progress log
- Drafted hymn by hymn in the compact format of parts 1–2 (translator 2's generator and workbook, reused), each filled,
  verified and built before the next; `tr` and Jamison after each draft and the readings above adopted; intros written.
- Pass (a) fidelity: 2.17.3b *asya*, 2.19.4, 2.19.8b, 2.20.5c, 2.20.7a, 2.21.4a, 2.21.5d revised after Jamison;
  2.18.4d *mŕ̥dhas* back to Book 7's `ביזיון`; 2.19.5b √*ric* `פינה`; 2.22.4b *ápaḥ* "work" (Zurich *ápa*).
- Pass (b) consistency: a lemma → Hebrew comparison of every word of the part with all other files and a check that
  every פירוק Hebrew stands in its own `>` line: aligned *gotrá* (`דיר` → `רפת`, *svásara* has `דיר`), *avadyá* `קלון`
  (2.19.5c), *arí* `אָרִי` (2.23.13c, 15a), *jyéṣṭha* `הגדול` (2.18.8c), *sukṣití* `דירה טובה` (2.19.8d), *pr̥thú*
  `נרחב` (2.21.4c), *uttamá* `הגבוה ביותר` (2.23.10a), *vibhú* `המקיף` (2.24.10a, 11a; *paribhū́* moved to `סובב`);
  2.23.19ab = 2.24.16ab re-ordered so that *bodhi* stays in its pāda.
- Pass (c) Hebrew: the generated files read through; `הָאֵל` / `אֶל` vocalized in the 2.22 refrain; "divine" and
  "the wicked" wording removed from notes and intros.
- `build RV2.17-24`; `verify RV2.17-24 --strict`: 0 problems; `check_bible_quotes.py`: 0.

### The text on its own terms
- **The god who wears the cosmos** (2.17.2): he "wrapped his body" in battle and "put heaven on his head" – a god larger
  than the world, who "sews up" the darknesses like cloth (2.17.4d).
- **The poet's own share** (2.17.7): the poet compares himself to an unmarried daughter growing old in her parents' house,
  begging for her portion – the singer's dependence on the god is a family economy.
- **Number magic** (2.18): the morning sacrifice is a chariot of four yokes, three whips, seven reins, ten oars; Indra
  is invited with 2, 4, 6 … 100 horses – and the rival sacrificers must not "detain" him (3cd, 7c, 8a).
- **The mythic past is the present** (2.19.4): in a narrative of past deeds, the single present "he kills Vṛtra" – the
  removal of obstacles happens again in every rite.
- **A hymn of names** (2.21.1–4): a liturgy built almost entirely of epithets – nine "winners" in one stanza – with the
  verb withheld to the end.
- **Drink and drinker as two gods** (2.22): "the god attended upon the god, the real drop upon the real Indra"; the soma
  makes Indra able to act, and some is left over.
- **The god of the word** (2.23–24): Brahmaṇaspati is "begetter of all formulations", born from every melody; he opens
  the Vala cave *with the formulation* (2.24.3c); the singers recognize the fire in the rock as their own (2.24.7cd).
- **The moral world** (2.23): the god protects whoever offers, and "collects the debt" from the slanderer, the
  double-tongued, the thief greedy for food, the scoffer who praises the gods aloud and disparages them in his heart
  (16c) – the evildoer's own harm crushes him (6d).
- **Rings and chains**: Jamison's lexical chaining from stanza to stanza in 2.23, the unexpected myth in 2.23.18; the
  later fame of 2.23.1 as Gaṇeśa's mantra.

### Key parallels
- 2.23.6d – Ps 7:16–17 [equivalent]: the trap-setter undone by his own evil; here *duchúnā*, almost a being, crushes him.
- 2.23.18a, 2.24.3c – Jer 23:29 [divergence]: a word that splits rock – an image in Jeremiah, a myth here.
- 2.24.4a – Exod 17:6 [divergence]: water from the rock for the people to drink – the "stone-mouthed well" of the Vala
  myth, from which all "who see the light" drink.

### Proposals for the shared renderings
- **§3.1 (RV 2):** the Brahmaṇaspati row should note that Zurich splits the name (*bráhmaṇas páti*) so the regex
  never fires in Book 2; the files vocalize it anyway. Files only: Krivi `קְרִיוִי`, Śunahotra `שׁוּנַהוֹטְרָה`.
- **New recurring words:** *gotrá* `רפת`, *pariráp* `מלעיז`, *dvayāvín* `כפול־הלשון`, *duchúnā* `פורענות`, *hváras*
  `מלכודת`, *r̥ṇacít* `נוקם־החוב`, *sā́man* `נעימה`, *gaṇápati* `אדון־הלהקה`, *paribhū́* `סובב`, *yugá* "yoke" `עול`.
- **No pre-set row revised**; §5.6's *r̥ṇayā́*, *dákṣiṇā*, *maghónī*, *ukthyà*, *vidátha*, √*vad* and F9 met in real lines.
- **For the consistency pass:** *bhāgá* `נתח` (2.17.7d) / `חלק` (part 1, 2.23.2b); *mŕ̥dh* noun `המזניחים` / √*mr̥dh*;
  *ā́deva* 1 read as *ádeva* `חסר־האלים` (2.22.4f, Jamison "godless") against part 1's *ā́deva* 2 `דבק־האלים`.

### Lessons for the guidelines
- A coordinator's message after a VM restart found the scratch tools intact; saving each hymn as soon as drafted lost
  nothing. Keep the per-hymn draft files in the scratchpad *and* the annotated file on disk.
- The pāda-check (every פירוק Hebrew in its own line) caught a word moved across a pāda end in a repeated stanza
  (2.23.19b *bodhi*); run it before copying a first copy into its repeats.

## Parallels index
