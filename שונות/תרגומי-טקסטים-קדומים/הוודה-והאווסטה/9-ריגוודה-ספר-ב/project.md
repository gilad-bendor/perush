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


## Parallels index
