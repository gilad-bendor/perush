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

### Review (reviewer 3)
Independent fidelity review of all 338 pādas against `data` (Zurich text and morphology), `tr` and Jamison's commentary
on II.17–24; a script compared every part-3 Hebrew with the other Hebrew of its lemma (`lexmap`) in Book 7, RV 10 / 1.32
and parts 1–2, and inside the part. **24 lines fixed** (with their פירוק and notes), 5 intros and 4 annotated heads
corrected; `build RV2.17-24`, `verify RV2.17-24 --strict`: no problems, 0 repeated-line differences;
`check_bible_quotes.py`: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 2.17.1b | `סערותיו נעים` | `סעריו נעים` | *śúṣma* is `סער` (m.); the plural of `סערה` also broke the agreement with `נעים` |
| 2.17.7c | `עשה (אותו) גלוי` | `עשה סימן` | *praketá* is a noun, Book 7's `סימן` (7.11.1a, 7.33.9a; RV 10.129.2b) |
| 2.17.7d | `נתח` | `חלק` | *bhāgá* is `חלק` everywhere (RV 10.16.4a, 7.56.14c, 2.10.6a, 2.23.2b); see the ruling below |
| 2.17.8c | `עזור (לנו)` | `עזור לנו` | *naḥ* is in the source |
| 2.18.3b | `כדי (שיבוא) הנה` | `לבוא הנה` | the verb is in the source (*āyaí*, infinitive): not an addition; renderings §4 infinitive |
| 2.18.3d | `ירגיעו (אצלם)` | `יַשְׁהוּ (אצלם)` | *mó ṣú tvā … ní rīraman* is the formula of 7.32.1ab, where Book 7 has `יַשְׁהוּ` ("detain"); the translator's own note says "detain" |
| 2.19.6d, 2.20.7b | `פיזר` | `הניע (… לכל עבר)` | *ví √īr*: √*īr* `הניע` + *ví* `לכל עבר`; keeps the ring Jamison notes (*vy aìrat* ← *praírayat* 3b) |
| 2.20.2a | `אתה, אִינְדְּרָה,` | `אתה לנו, אִינְדְּרָה,` | *naḥ* (dative) was not rendered |
| 2.20.6a | `הנודע` | `המפורסם` | *śrutá* = Book 7's `המפורסם` (7.18.12a) |
| 2.20.6d | `הוריד` | `הביא` | *áva* is already `מטה` in 6c; √*bhr̥* `הביא` ("brought down", Jamison "pulled off") |
| 2.21.3b | `לפי חפצו` | `לפי התענגותו` | *jóṣa* (√*juṣ* `התענג`); Book 7 *ánu jóṣam* `עד התענגות` (7.43.4a) |
| 2.23.2c | `את (השחר) הוורודה` | `של (השחר) הוורוד` | the note (and Jamison: "all the standard tr.") read *usrā́ḥ* gen. sg., the line had the accusative; `השחר` is masculine |
| 2.23.7a | `שירצה לפגוע` | `שיפגע` | a subjunctive in a relative clause; "want to" was added |
| 2.23.10b, 18c | `השותף` | `שותף־הרתימה` | *yúj* = Book 7's `שותף־הרתימה` (7.1.13c, 7.31.6c) |
| 2.24.12d | `זוכי־פרס רתומים` | `זוכי־פרס, שותפי־רתימה` | the same noun *yúj* (dual), not the participle of √*yuj* |
| 2.23.18d | `את גל המים` | `את הגועש של המים` | *arṇavá* = `הגועש` (RV 10.190.2a, 7.63.2b), here substantivized |
| 2.24.4d | `שאבו מן המעיין` | `יצקו את המעיין` | √*sic* "pour" `יצק` (Book 7, 2.14.1b, 2.18.6d); *útsam* is an accusative (Jamison "poured it out") |
| 2.24.6a | `שהגיעו אל` | `שהשיגו את` | √*naś* `השיג` (the note said so; Book 7) |
| 2.24.8b | `לשם הוא מגיע` | `אותו (המקום) הוא משיג` | √*aś* `השיג` as 2.19.7c, 8d, 2.23.4b; *tát* is an accusative |
| 2.24.9c, 13b | `בתבונה` | `ברעיון` | *matí* `רעיון` (Book 7; 2.24.1d, 2.18.1d): a split inside the hymn |
| 2.24.10a | `עליונה` | `ריבונית` | `עליון` is *paramá*'s; *prabhú* = Book 7's `ריבון` (7.82.3b) |

- **Intros and heads:** "the sacred word" (`המקודשת`, the reserved root קדש) → `בעלת הכוח` (2.23 intro and head, notes at
  2.17.3b, 2.23.1c, 2.24.3c); "the wicked" (`הרשעים`) and "blasphemers" (`המגדפים`) → `הפוגעים`, `מְגַנֵּי הָאֵלִים`
  (2.23 head; notes 6d, 11c, where "punishment, not forgiveness" (`סליחה`) became "collection, not remission"); 2.23
  "their trap returns to them" (the Ps 7 wording, not the line) → their own *duchúnā* crushes them (6d); "the mountain
  opened" → `נפער` (18a). 2.19: the rivers do not go "to the sea" in 2cd (that is 3ab), "orders" → "brings to success" (3d),
  "gives the sun" → `מפנה` (5b). 2.20: "stole the dawns with the sun" (instrument) → "together with" (5c, as the line),
  "the black-wombed tribes" → (the forts) (7a). 2.21: the Aṅgirases are not named in 5ab (the line has "the
  water-crossers"). 2.22 head: the refrain quoted as the line. 2.24: "opened the well" → `פילח` (4b); "saw their deceits"
  → "surveyed the untruths" (6c); "the god as a bow" → an archer with a bow (8a); "debt-collector" is 2.23's word, 2.24.13c
  has `לוקח את החוב`.
- **Checked and kept:** the Indra closing stanza 2.17–2.20.9abc = 2.11.21abc and F9 character for character; the 2.22
  refrain 1gh = 2fg = 3fg; the Brahmaṇaspati closing 2.23.19abc = 2.24.16abc; 2.18.7d = 7.23.5d, 2.20.3c = 2.12.14b,
  2.21.2b = 7.46.1c. The two names alternate exactly as Zurich has them; the enemy vocabulary is one Hebrew per lemma
  (*mŕ̥dh* noun `המזניחים` / *mŕ̥dhas* `ביזיון` are two lemmas; √*riṣaṇy* `ביקש להזיק` is a recorded sense split).
  Tense and mood: the narrated injunctives (2.17.2c, 5a; 2.19.2b–6d; 2.20.4c–8d) are past in a past frame; 2.20.4c
  *pīparat* future and 2.22.4f *bhúvat* subjunctive (Jamison) are defensible; the optatives (`נא`), the subjunctives
  (2.18.8a, 2.20.3d, 2.23.4b, 15a–c, 2.24.1c *stávate* passive with Jamison) and 2.23.6d's intensive imperative are right.
  2.23.14c's purposive *yád* + subjunctive is Jamison's; 2.23.16b `למזוננו` is Jamison's "our food". Hymns drafted before
  and after the restart follow the same conventions (format, `(?)` for cruxes, Jamison-attributed readings); the
  remaining differences were the lemma splits fixed above.
- **Rulings for the coordinator:**
  - ***bhāgá* `נתח` / `חלק`:** `חלק`. The two words are from one root (√*bhaj*) and the poet chains them (*bhágam* –
    *bhāgám* – *bhojám*, Jamison); `חלק` – `חלק` keeps the echo and *bhāgá*'s Hebrew everywhere else. The collision
    (*bhága* noun and *bhāgá* both `חלק`) is Book 7's (7.41.2d, 7.56.14c) and harmless: *bhága* is mostly the god
    `בְּהַגָה`. Renderings §11.25's "for the consistency pass" line can be closed.
  - ***ā́deva* 2.22.4f `חסר־אֵלִים` against part 1's `דבק־האלים` (2.4.1d):** keep both. Grassmann has two words: *ā́deva* 1
    = *ádeva* lengthened for the metre (his 213,4 = this pāda) and *ā́deva* 2 "striving to the gods" (his 195,1 = 2.4.1);
    Zurich's single lemma hides it. The note at 4f now says so. Not a split.
  - ***krívi* (2.17.6c, 2.22.2a):** keep the name `קְרִיוִי` in the line, Jamison's "worm" in the note: the meaning is
    unknown and a guessed common noun would put a reading into the line; the transcription commits to nothing.
  - **2.23.16c:** keep the WG / Jamison line (`מצהירים … ובלבם מבטלים אותו`, *vráyas* `כוח־המחץ`): Jamison argues it at
    length (√*vlī* "crush", "exactly contra Ge's 'Schwäche'") and endorses WG's two contrastive clauses; Geldner stays in
    the note.
  - **2.24.5b:** keep `חסמו` (*varanta*, √*vr̥* "close", the injunctive read as past in the myth); the "will open" reading
    needs Grassmann's *ví*, which is not in this pāda – note only.
  - **2.21.4d *uṣásaḥ*:** keep Geldner's acc. pl. in the line (the *janat* of the cosmogony, and 2.20.5c *uṣásaḥ* acc. pl.
    with the sun one hymn before); Zurich's gen. sg. is in the פירוק and the note.
  - **Left open:** 2.24.14d `זרמו` (plural, "the cows") for the singular *asarat* is an interpretation shared by the
    standard translations; 2.17.6a / 2.18.2a `(מוכן) כראוי` for *áram* without a verb of its own is acceptable. *ucátha*
    and *ukthá* are both `אמירה` (Book 7's collision, 7.18.5c), and *majmán* `בעוצמה` beside *śávas* `עָצְמָה` (plene
    `עוצמה`) – a Book 7 matter for a consistency pass, not changed here.

## RV2.25–2.33 (part 4: Brahmaṇaspati, the Ādityas, Varuṇa, Rudra; translator 4, Round 8 run 3)

### Scope
RV 2.25–2.33, 340 pādas: 2.25 (20; Brahmaṇaspati, jagatī, the refrain 1–5d), 2.26 (16; Brahmaṇaspati, the four "only"
clauses), 2.27 (68; the Ādityas), 2.28 (44; Varuṇa), 2.29 (28; the All-Gods, in content the Āditya sequence), 2.30 (44;
Indra and others, the book's only conditional), 2.31 (28; the All-Gods, "our chariot"), 2.32 (32; Heaven and Earth,
Rākā, Sinīvālī), 2.33 (60; Rudra). Nine annotated files, nine intros, built (`build RV2.25-33`); `verify RV2.25-33
--strict`: no problems, 0 repeated-line differences in my range; `check_bible_quotes.py` on all my files (annotated,
intros, generated): 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); `freq RV2.25-33`, `lexmap` and a per-line workbook (each word with its lemma and
its Hebrew so far), `lemma`, `grep`; translators 1–3's scratch generator (compact `meaning=Hebrew` draft → the annotated
format) reused. After drafting each hymn: `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's
commentary on II.25–33. Adopted from Jamison (attributed in the bullets): 2.25.1c *jāténa jātám* as rivalry (both
readings in the note), 2.25.2a *vanuṣyatáḥ* acc. pl., 2.25.5b *dadhire* passive; 2.26.1a the decomposed bahuvrīhi,
2.26.2a *manāyát* left neutral, 2.26.4c *rákṣatī* = *rákṣati* + *ī*, 4d *aṃhóḥ … urucákri*; 2.27.6c *téna* anticipating
*śárma*, 2.27.9d *uruśáṃsa* "whose pronouncements hold broadly", 2.27.12b the *ca*; 2.28.6d (with Thieme) "far from you
I am not master even of a blink", 2.28.7a the gapped verb, 7ab *iṣṭaú* not governing *énaḥ*, 2.28.9a the injunctive as
imperative; 2.29.4c Renou's *r̥té* "without" (with `?`), 2.29.5b the gambler in the son's place; 2.30.1c "the night of
the waters", 2.30.2 her reading of the conditional (alternatives in the note), 3c Vṛtra as subject, 4b *vŕ̥kadvaras*
"moving like a wolf" (not a name), 5d *ardhá* √*kr̥* "go halves"; 2.31.1d *vanarṣád* both ways, 5d *trívayāḥ* neuter;
2.32.3c *pádyā* "paces", 4d *śatádāya* "worth a hundred (cows)"; 2.33.5ab the rival's thought and *áva* √*dā* "cut
off", 5d *manā́*, 10c the cosmogonic division of the formless, 12b 3rd sg. (with Kümmel, Macdonell), 15ab "just as … so".
From Geldner: 2.25.3a the river simile with *kṣódaḥ* nominative; 2.29.1b *rahasū́*; 2.32.2a *āyóḥ* with *rípaḥ*.

### Decisions
- **The 2.25 refrain (first copy 1d; = 2d, 3d, 4d, 5d):** `כל מי שבְּרַהְמַנַסְפַּתִי עושה (אותו) לשותף־הרתימה שלו.` –
  *yúj* `שותף־הרתימה` (Book 7, reviewer 3), the middle *kr̥ṇuté* as `שלו` ("for himself"), the name written by hand
  (Zurich splits it; §11.25) and vocalized in every copy. *vanavad vanuṣyatáḥ* (2.25.1a, 2a, 2.26.1a) `יזכה נגד
  החומסים` (√*van* `זכה`, *vanuṣyát* Book 7's `החומס`).
- **The closing stanza (first copy 2.27.17abc; 2.28.11abc and 2.29.7abc copied character for character):**
  `אַל אני – וַרוּנָה – אצל בעל־שפע אהוב,` / `רב־נתינה, אמצא חוסר של ידיד;` / `אַל אֵרֵד, מלך, מן העושר המרוסן היטב.`
  – *āpí* `ידיד` (Book 7, 7.88.6a), *śū́na* `חוסר`, *suyáma* `המרוסן היטב`, *áva* √*sthā* `ירד` (vocalized `אֵרֵד`:
  unvocalized "bronze").
- **The Varuṇa vocabulary as Book 7 (§5.6, §11.18), met in real lines:** *ā́gas* `אשמה` (2.27.14b, 2.28.5a, 2.29.1b,
  5a), *énas* `עוון` (2.28.7b), √*muc* `שחרר` (2.28.4c, 6c), √*mr̥ḍ* `רחם` (2.27.14a, 2.29.2d, 4b, 2.33.11c, 14d;
  *mr̥ḷayā́ku* `הרחמנית` 2.33.7a), *pā́śa* `חבל` (2.27.16b, 2.29.5c), *r̥ṇá* `חוב` (2.27.4d, 2.28.9a), √*hr̥̄* `זעף`
  (2.33.15b), *héḷas* `רוגז` (*áheḷant* `שאינה רוגזת`, 2.32.3a), *ánāgas* not met; √*śrath* `התיר` (§11.19) for
  2.28.5a, 7d. **2.28.5a** `התר ממני את האשמה כמו רסן;` – *raśanā́* `רסן` (its one precedent, RV 10.18.14d; the
  brief's "cord" is in the note: "rope, girth, rein"; `חבל` stays *pā́śa*'s). **2.28.6c** `כרצועה מן העגל – שחרר את
  המצוקה,` mirrors 7.86.5d (*dā́man* `רצועה`, *vatsá* `עגל`). No word of the root חטא, `פשע`, `סליחה`, `וידוי`,
  `חרון` in lines, notes or intros (grepped); the notes say "loosening, not forgiveness" where the contrast matters, and
  name Geldner's "Sünde" / Griffith's "sin" (2.27.14b, 2.28.5a) as rank-3 words, not the source's. Biblical verses quoted
  in the notes were chosen without those words (Ps 130:3, 8 rather than Ps 32:1).
- **abhí √kṣam** (only in this group: 2.28.3d, 2.29.2c, 2.33.1c, 7d – Jamison) `היה מתון (כלפי)` – chosen to keep the
  vocabulary of forgiveness out of the lines; the homograph *kṣám* "earth" (`תבל`) shares the folded lemma in `lexmap`.
- **Rudra (2.33):** *bheṣajá* `תרופה`, *jálāṣa* `מרפא` (§5.6) in 2b, 4c, 7b, 12d, 13a; *bhiṣáj* / *bhiṣáktama*
  `רופא` / `הרופא שברופאים` (4d, footnote); √*krudh* `הקציף` (4a; `כעס` is *manyú*'s, `רוגז` *héḷas*'s, `זעף` √*hr̥̄*'s);
  *hetí* `קליע` (14a); *áva* √*tan* `הַרְפֵּה` (14c, a sense split from √*tan* `פרש`); *daívya rápas* `הפגע האלוהי`;
  *babhrú* `חום`, *śvityáñc* `לבנבן`; *r̥dūdára* `רך־הלב` (the pun on *rudra* in the note); *kalmalīkín* `המנצנץ (?)`.
- **2.32:** Rākā `רָאקָא`, Sinīvālī `סִינִיוָאלִי` (§3.1 (RV 2)); 4c `תתפור את מפעלה במחט שאינה נשברת;` (√*sīv*
  `תפר`, part 3); **6d (first copy, = 2.41.17d)** `צאצאים, אֵלָה, הקצי לנו!` (√*diś* `הקצה`, Book 7 7.40.2c); *indrāṇī́*
  `אשת אִינְדְּרָה` (as Book 7's *varuṇānī́* `אשת ורונה`; the Indra name check then passes without an escape).
- **New words, one Hebrew each (grepped):** √*edh* `צמח` (`שגשג` is √*vakṣ* / √*puṣ*'s); √*arṣ* `גלש`; *abhí* √*vaś*
  `מושל` (as *vaśín*; √*vaś* alone keeps `חפץ`); *śímīvant* `בעל־העמל`; *ánibhr̥ṣṭataviṣi* `שתוקפו לא נחלש`;
  *urucákri* `עושה רוחב` (`מרחב` is *rájas*'s); *aṃhú* `מצר`; *manā́* `שקידה`, *manāyát* `השוקדים`; *yájvan* `זובח`;
  *vr̥tratū́rya* `גבירה על וְרִטְרָה` (Book 7 names Vṛtra in every *vr̥tra-* compound; `עבירה על` = "violation");
  *sákratu* `בני־רצון־אחד`; *dhā́rapūta* `מטוהר־כזרם`; *bhūryakṣá* `רב־העיניים`; *dīrghā́dhī* `ארוך־ההגות`; √*ci* 2
  `תבע` (2.27.4d; Book 7 7.52.2d `מענישים` – a recorded split); *śvábhra* `פחת`, *kartá* `בור`; *anr̥kṣará* `בלי קוצים`;
  *duṣparihántu* `שקשה לרסקו מסביב`; *rā́japutrā* `שבניה מלכים`; *puruvī́ra* `מרובה־גיבורים`; *rocaná* `אזור־אור`
  (`מאור` reserved); *ásvapnaj* `שאינו נרדם`; *uruśáṃsa* `רחב־הקילוס`; *r̥tanī́* `מנהיג הסדר`; *yuṣmā́nīta* `מונהג
  בידיכם`; *vr̥ddhávayas* `שמרצו גדל`; *támisrā* `עלטה` (`חושך` gated to *támas*); *ghr̥tásnu* `שעל גבו חמאה מזוקקת`;
  *svarā́j* `המושל בעצמו` (Book 7); *sukīrtí* `הזכרה טובה`; *khā́* `מקור` (sense split from *khá* `פתח`); *tántu* `חוט`;
  *apás* "worker" `פועל`; √*myakṣ* `הרחיק`; *ánu* √*gr̥bhāy* `קיבל אל`; *nimíṣ* `מצמוץ`; *pravasathá* `ריחוק`; √*bhrī*
  `המעיד` (Book 7's `מעד`); *ápracyuta* `בלתי מוזז`; *párā* √*sū* `האיץ הלאה`; *mátkr̥ta* / *anyákr̥ta* `שעשיתי אני` /
  `שעשה אחר`; *ávyuṣṭa* `שטרם הפציע`; *bhīrú* `מפוחד`; *rahasū́* `יולדת־בסתר`; √*śās* `ייסר` in 2.29.5b (a sense split
  from Book 7's and 2.28.9d's `כוון`); *nijúr* `בליעה`; *ava-pád* `נפילה`; *sína* `ציוד`; √*kṣip* `זרק`; √*vyadh*
  `נקב` (Book 7's one form `שהושלך` is "cast down"; `דקר` is √*snath*'s); *sánutya* `המרוחק` (`הנסתר` is √*guh*'s);
  *jighatnú* `המבקש להכות`; √*tam* `התעייף`, √*tand* `התרשל`; *ánudhūpita* `מעושן`; *kártva* `שיש לעשותו`; *vásman*
  `קן` (shared with *yóni* "nest", Book 7 7.97); *hŕ̥ṣīvant* `נרגש`; *vanarṣád* `יושב־העץ`; *sacābhū́* `נלווה יחד`;
  *mithūdŕ̥ś* `מתחלף־המראה`; *apījū́* `ממריץ־גם`; *upastír* `לפרוש כמצע`; *trívayas* `משולש־המרץ`; √*kā* `חשק`;
  *sakṣáṇi* `מכריע`; *br̥haddivā́* `רמת־השמים`; *suṣū́ma* `טובת־הלידה`, *bahusū́van* `מרובת־הלידות`; *pr̥thuṣṭukā*
  `רחבת־הצמה`; *viśpátnī* `אדונת־השבט`; *sūcī́* `מחט`; *śatádāya* `שווה־מאה`; *sahasrapoṣá* `פריחה של אלף`;
  *tvā́datta* `נתון־ממך`; *hímā* `חורף` (as *śatáhima*); √*cat* caus. `הבריח`; *áva* √*dā* 2 `ניתק`; *ghŕ̥ṇi* `חום`;
  *áṅga* "limb" `איבר`; *niṣká* `ענק`; *gartasád* `יושב על הכס`; *upahatnú* `התוקף`; *apabhartár* `נושא־הלאה`.
- **Sense splits recorded in the lines:** √*han* `ריסק` for the hooves (2.31.2d, Book 7's split); *pāṇí* "hand" as hooves
  `כפות (רגליהם)`; *dákṣiṇā́* "on the right" `ימין` (§5.6); *prācī́na* `פונה מזרחה` (Book 7) in 2.27.11b; *pári* √*dhā*
  "hand over" `מסור` (2.30.9d, Grassmann / Jamison: for *pári* √*dā*); *kṣódas* `שטף` (Book 7 7.95.1a) shares the word
  with ŚB *ógha* – inherited.
- **Escapes:** none needed. Names in the files only: Dakṣa `דַּקְשָׁה` (RV 10.72), Aṃśa `אַמְשָׁה` (part 1), Guṅgū
  `גּוּנְגּוּ`, the Śaṇḍikas `הַשַּׁנְדִּיקָה`, the Āyus `בני אָיוּ`.

### Open decisions for the user
- 2.29.4c (*rátho madhyamavā́ḷ r̥té*): Renou / Jamison's *r̥té* "without (you)" is in the line with `?`; Geldner's "on the
  truth's course, in the middle rank" in the note.
- 2.30.2ab (the only conditional of the RV): who was going to bring "gear" to Vṛtra and who told – the line keeps the
  words; Jamison's two scenarios in the note.
- 2.32.2a *āyóḥ … áhan*: "the hidden tricks of Āyu, on the day" (Geldner) in the line; Jamison's "on the day of Āyu" (the
  sacrifice) in the note.
- 2.33.12b *nānāma*: 3rd sg. ("even a boy bows", Kümmel, Macdonell, Jamison) in the line; Geldner / Renou's 1st sg. in
  the note.
- 2.25.1c *jāténa jātám*: the Hebrew `בנולד – על פני נולד` leaves Jamison's rivalry and the standard "offspring after
  offspring" both open.
- 2.28.5a *raśanā́* `רסן` (precedent) or a new `רצועה`/`חבל` "cord" (the brief's wording): `חבל` is *pā́śa*'s,
  `רצועה` *dā́man*'s – I kept the precedent.

### Progress log
- Drafted hymn by hymn in the compact format (translator 3's generator, workbook and checks copied to my own scratch
  folder), each filled, verified and built before the next; `tr` and Jamison read after each draft and the readings above
  adopted; intros written. Saved per hymn (no restart occurred).
- Pass (a) fidelity: 2.25.3a re-read with Geldner (*kṣódaḥ* nominative: "like a river's flood"); 2.27.11a present
  `איני מבחין`; 2.28.10b "in sleep" (no *duṣvápnya* in 2.25–2.33); 2.30.7d the missing *ā́* segment; 2.33.15c, 7c, 12b.
- Pass (b) consistency: a lemma → Hebrew comparison of every word of the part with all files (`cons.py` on
  `lexmap_dict`) and the pāda check (every פירוק Hebrew in its own line). Aligned: *ábhaya* `חסר־הפחד` (2.27.11d, 14c,
  near Book 7's `חוסר־פחד`), √*nam* `התכופף` (2.33.12b), *daívya* `האלוהי` (2.33.7c), √*pr̥̄* `מילא` (2.30.7c), √*yu*
  `הסיר` (2.32.2c, 2.33.1b), *havanaśrút* `שומע־ההזמנה` (Book 7), *śvábhra* moved to `פחת` so that *kartá* keeps `בור`.
  A generator trap found: a morphology override containing `("…")` was read by `lexmap` as the Hebrew (2.26.3b,
  2.27.17c and copies) – rewritten.
- Pass (c) Hebrew: the generated files read through; `אַל` (prohibitive), `אֵרֵד`, `אֶזּוֹן`, `הַרְחֵק`, `הַאֵץ`,
  `הַרְפֵּה`, `שַׁבַּח` vocalized; intros aligned with their lines (2.25 `כמתקפת אַגְנִי`, 2.26 `בגבירה על וְרִטְרָה`, 2.29
  "confess"-like wording `מודה` removed, 2.33 `הפגע האלוהי`).
- `build RV2.25-33`; `verify RV2.25-33 --strict`: 0 problems; `check_bible_quotes.py`: 0.

### The text on its own terms
- **The god's yoke-mate (2.25):** everything a man gains – victory over rivals, sons and grandsons, cattle, rivers that
  roar toward him – follows from one fact, repeated five times: Brahmaṇaspati has made him "his yoke-mate".
- **A contest among sacrificers (2.26, 2.33.5):** "only the god-seeker", "only the sacrificer will divide the
  non-sacrificer's food"; and the rival who wants to "cut Rudra off for himself" by private praise – ritual is a
  competition for divine favour, but a shared one.
- **The all-seeing guardians of the contract (2.27):** the Ādityas cannot be deceived and seek to deceive deceivers, see
  "inside" the crooked and the good, never sleep or blink, hold the three earths and three heavens, and "take note of the
  debts" (4d) – the moral order as a ledger.
- **Guilt as a knot (2.28.5–7, 2.29.1, 5):** the poet asks Varuṇa to loosen guilt "like a rein", to free distress "like a
  rope from a calf", to cast guilt away "like a woman who gives birth in secret"; the god's own fetters and tricks are set
  for the cheat (2.27.16). Nothing is forgiven: things are untied and sent away.
- **Personal accounting (2.28.9, 2.29.5):** "drive away the debts I made; let me not live off what another did"; "I alone
  have transgressed; do not seize me in my son, like a bird" – the poet asks that the reckoning be his own.
- **Fear of the night and of dreams (2.27.14d, 2.28.10):** "let the long darknesses not reach us"; the terror a friend or
  kinsman spoke "in sleep"; the thief and the wolf.
- **The poet as weaver and worker (2.28.5cd):** "let the thread not be cut while I weave my thought; let the worker's
  measure not break before its season" – the hymn as a fabric, the life as a workday.
- **Goddesses of the moon and birth (2.32):** Rākā "sews her work with a needle that does not break" – the embryo in the
  womb; Sinīvālī, broad-braided, "easy in birth, rich in births", apportions offspring.
- **The fearful healer (2.33):** Rudra's arrows and anger and his "hand that is medicine"; the poet must not anger him
  even by bowing wrongly or by inviting him with other gods; he is asked to unstring his own bows.
- **Cosmogony by division (2.33.10c, Jamison):** "you divide all this formless mass" – creation as cutting the shapeless
  into named, bounded things.
- **The chariot of praise (2.31):** the poets "forged" the hymn like craftsmen, and race toward the prize like horses.

### Key parallels
- 2.28.5a / 6c – Ps 130:3, 8 [divergence]: the god who keeps account of guilt and redeems from it; here guilt is untied
  like a rein or a calf's rope – loosening, not redemption or forgiveness; shared motifs of cultures that never met.
- 2.33.4d – Deut 32:39 `מָחַצְתִּי וַאֲנִי אֶרְפָּא`, Hos 6:1, Exod 15:26 [equivalent]: the god who strikes and heals; Rudra
  heals with remedies in his hand, not by word or covenant.
- 2.29.5b – Deut 8:5 `כַּאֲשֶׁר יְיַסֵּר אִישׁ אֶת בְּנוֹ`, Prov 3:12 [equivalent]: the god who chastises like a father – here the
  "son" is a gambler.
- 2.29.5d – Deut 22:6 `לֹא תִקַּח הָאֵם עַל הַבָּנִים`, Deut 24:16 [divergence]: a bird, parent and young, and not seizing one
  "for" the other.
- 2.28.9b – Ezek 18:20 [divergence]: each answers for himself; here a plea not to "live off" another's deed.
- 2.27.3c / 9c – Prov 15:3, Ps 121:4 [equivalent]: the all-seeing, sleepless guardians.
- 2.28.10b – Job 7:14 [equivalent]: terror in dreams; in Job God terrifies, here Varuṇa protects.
- 2.32.4c – Ps 139:13, Job 10:11 [equivalent]: the embryo woven / sewn in the womb by a divine hand.
- 2.26.4d – Ps 118:5, Ps 4:2 [equivalent]: distress as a narrow place, rescue as wide space (Vedic *aṃh-* / *uru-*).
- 2.30.5a – Josh 10:11 [equivalent]: stones hurled from heaven on the enemy.

### Proposals for the shared renderings
- **§5.6:** add *abhí* √*kṣam* `היה מתון` (2.28.3, 2.29.2, 2.33.1, 7); *bhiṣáj* `רופא`; √*krudh* `הקציף`; *hetí*
  `קליע`; *raśanā́* `רסן` (kept from RV 10.18.14d; the coordinator's "cord" in the notes). **Correct the §5.6 row
  *duṣvápnya* `חלום רע` "2.28.10":** 2.28.10b has *svápne* "in sleep" (`בשינה`), and *duṣvápnya* does not occur in
  2.25–2.33; the row can stay for a later hymn but its line reference is wrong.
- **§3.1 (RV 2):** no new regex needed. Files only: Dakṣa `דַּקְשָׁה`, Guṅgū `גּוּנְגּוּ`, Śaṇḍika `שַׁנְדִּיקָה`; Indrāṇī
  `אשת אִינְדְּרָה` (as Book 7's `אשת ורונה`).
- **The closing stanza 2.27.17abc = 2.28.11abc = 2.29.7abc** and **2.32.6d (first copy for 2.41.17d)** – fixed above;
  part 5 copies 2.32.6d `צאצאים, אֵלָה, הקצי לנו!`.
- **For the consistency pass:** √*ci* 2 `תבע` (2.27.4d) / Book 7 `מענישים` (7.52.2d); √*śās* `ייסר` (2.29.5b) / `כוון`;
  √*vyadh* `נקב` / 7.69.7a `שהושלך`; *khā́* `מקור` / *khá* `פתח`; *kṣódas* `שטף` / ŚB *ógha* `שֶׁטֶף` (inherited); *vásman*
  / *yóni* `קן`; *ā́deva*-like double √*kṣam* / *kṣám* in `lexmap` (homographs, not a split).

### Lessons for the guidelines
- **A morphology override inside the compact draft must not contain `("…")`:** the פירוק parser of `lexmap` takes the
  first `("…")` after the lemma as the Hebrew, so an override like `(עם áva ("לרדת מן"))` silently registered a false
  Hebrew for a lemma (found by the pāda check). Write overrides with `:` and commas only.
- **Choose the Bible verses of a comparison by their words, too:** for a Rigveda line whose gate forbids the vocabulary
  of sin, a verse that is itself made of that vocabulary (Ps 32:1) puts it back into the apparatus; another verse of the
  same motif (Ps 130:3, 8) makes the point without it.

### Review (reviewer 4)
Independent fidelity review of all 340 pādas against `data` (Zurich text and morphology), `tr` and Jamison's commentary
on II.25–33 where a line was in doubt; a script compared every part-4 Hebrew with the other Hebrew of its lemma
(`lexmap`) in Book 7, RV 10 / 1.32 and parts 1–3, and a second one checked every פירוק segment for exactly one
`("…")` (the scratch-generator trap: none left). **14 lines fixed** (with their פירוק and notes), 1 פירוק-only fix,
5 notes, 7 annotated heads and 6 intros corrected; `build RV2.25-33`, `verify RV2.25-33 --strict`: no problems, 0
repeated-line differences; `check_bible_quotes.py`: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 2.25.4a | `לו גולשות (המים) השמימיים` | `לו גולשים (המים) השמימיים` | the verb disagreed with the supplied masculine `(המים)` and `שאינם` |
| 2.27.11c, 2.29.3b | `טובים` | `וַסוּ` | *vasavaḥ* (voc.) is `הַוַּסוּ` / `וַסוּ` in Book 7 also when the Ādityas are addressed (7.52.2d, an Āditya hymn); a split against Book 7 |
| 2.27.13b | `הוא שוכן (לידם)` | `הוא שוכן` | *úpa* was rendered twice: `ליד` in 13a (before the accusative *apáḥ* it governs) and again in brackets; the פירוק and the 13a note now say so |
| 2.27.13c | `אין מי שהורגים אותו` | `אין הורגים אותו` | *nákis* + 3 pl. *ghnanti*: `אין מי` with a plural verb was ungrammatical; `אין` is Book 7's other *nákis* (7.32.16d, 2.24.7d) |
| 2.28.5b | `נגשים נא … את מקור הסדר שלך` | `נגשים נא לך … את מקור הסדר` | *te* is a dative ("for you"), not a possessive |
| 2.28.9c | `רבים עוד השחרים` | `רבות עוד השחרים` | *bhū́yasīḥ* fem.; the dawns take feminine agreement (renderings §11.18; 2.28.2c `בעלות־הפרות`) |
| 2.30.9a | `מי שלנו – … המבקש להכות` | `מי – … המבקש להכות אותנו` | *naḥ* is the object of *jighatnú* ("whoever seeks to strike us"), not a possessive |
| 2.31.2a | `עזרו לנו (לעלות) מעלה` | `את שלנו עזרו (לעלות) מעלה` | *naḥ* is the owner of *rátham* (2b: "help our chariot up", as 1a `את מרכבתנו … עזרו`), not the one helped |
| 2.32.1a | `לזה שלי` | `של זה שלי` | *asyá* is a genitive, with *avitrī́* "helpers of" (1b `של הדיבור`) |
| 2.33.1c | `יהיה הגיבור מתון` | `יהיה נא הגיבור מתון` | *kṣameta* optative: a wish (renderings §4) |
| 2.33.6d | `אבקש לזכות בו` | `אבקש נא לזכות בו` | *vivāseyam* optative, parallel to 6c `אשיג נא` |
| 2.33.7a | `ידך הרחמנית` | `הרחמנית שלך –` | `יד` was added without brackets: *hásta* is in 7b (`היד`); *te* `שלך` |
| 2.33.14a | `יעקוף אותנו` | `יעקוף נא אותנו` | *vr̥jyāḥ* precative; the similar line 7.84.2c has `יעקוף נא אותנו` |
| 2.29.4c (פירוק) | *vaḥ* `("בלעדיכם")` | `("כם")` | `בלעדי` is *r̥té*'s; the pronoun was counted twice |

- **Notes, heads, intros:** the vocabulary of forgiveness had come back as contrast – "not `מחילה`, not `כפרה`" (2.28.5a
  note, 2.28 head and intro "`נמחלת`"), "mercy, not `מחילה`" (2.27.14b), "chosen to keep the vocabulary of `מחילה` out"
  (2.28.3d) – rewritten in the source's own terms (a knot untied, patience, mercy); 2.33.14a's parallel note used the root
  חטא ("that it miss") – now "that the arrow pass us by". Geldner's "Sünde" / Griffith's "sin", named as rank-3 words, are
  kept. Heads and intros aligned with the lines: 2.25 (`המים השמימיים גולשים`), 2.26 (`מרחיב לו מן המצוקה`, not "rescues"),
  2.27 (the songs "with ghee on their back", not "like ghee"; `פחתים`, not "pits"; "three earths"; "no one slays him",
  not "whole"), 2.28 (`שותף־רתימה או חבר`, not "a kinsman"), 2.30 ("battle and booty" → "battle"; "to whoever comes with
  cows", not "to the god"), 2.31 (the closing simile as the line), 2.32 ("a hero", not "a son"; `טובת־הלידה`; 2ab and 3a as
  the lines: `משמעת`, not "response"), 2.33 (the quotations as the corrected lines).
- **Checked and kept:** the 2.25 refrain 1d = 2d = 3d = 4d = 5d and the closing 2.27.17abc = 2.28.11abc = 2.29.7abc character
  for character; F9 (2.27.17d, 2.28.11d, 2.29.7d, 2.33.15d); 2.32.6d. No word of the root חטא, `פשע`, `סליחה`, `וידוי`,
  `חרון` in lines, notes or intros, and no Psalm idiom in the Varuṇa lines (√*muc* `שחרר`, √*śrath* `התיר`, √*mr̥ḍ* `רחם`,
  *ā́gas* `אשמה`, *énas* `עוון` as Book 7). Mood: Rudra's prohibitives (1b, 4ab, 5cd with *mā́* + injunctive), imperatives
  (2d, 3cd, 4c, 11ac, 14cd, 15c) and optatives are right; 2.33.8c *namasyā́* as 1 sg. (Jamison) is defensible, Geldner's
  imperative is in the note. Tense: the narrative perfects and aorists of 2.30.2–3 past, the conditional `עמד להביא`; the
  perfect of state 2.28.4d present. Names vocalized at their first occurrence (Dakṣa, Guṅgū, the Śaṇḍikas, Rākā, Sinīvālī).
- **Rulings on the translator's open questions:**
  - **2.29.4c *r̥té*:** keep Renou / Jamison's "without (you)" with `?` (Jamison: *vaḥ* in Wackernagel's position, cf.
    VI.67.8); Geldner's "on the course of truth" stays in the note.
  - **2.30.2ab:** keep the line's literal words (`מי שעמד להביא … הכריזה היולדת ליודע`) – the conditional is rendered, the
    riddle is not solved in the line; Jamison's two scenarios stay in the note.
  - **2.32.2a:** keep Geldner's *āyóḥ* with *rípaḥ* (`הרמאויות … של אָיוּ, ביום (ההוא)`); Jamison's "on the day of Āyu"
    in the note. The bracketed `(ההוא)` commits to nothing.
  - **2.33.12b *nānāma*:** keep the 3rd sg. (Zurich, Jamison, Kümmel): *kumāráḥ* is the subject in the same stanza.
  - **2.25.1c:** keep `בנולד – על פני נולד`: it leaves both readings open, as the translator intended.
  - **2.28.5a *raśanā́*:** keep `רסן` (its one precedent; `חבל` and `רצועה` are *pā́śa*'s and *dā́man*'s).
- **Rulings on the consistency items (renderings §11.26):**
  - **√*ci* 2 `תבע` (2.27.4d) / 7.52.2d `מענישים`:** keep both as a recorded sense split: with *r̥ṇā́ni* "debts" the verb
    is "exact, keep account of"; in 7.52.2d (with a deed as object) "punish".
  - **√*śās* `ייסר` (2.29.5b) / `כוון` (Book 7, 2.28.9d):** keep: a father "correcting" a gambler is chastisement, not
    direction; the echo of Deut 8:5 is the source's own sense and is tagged.
  - **√*vyadh* `נקב` (2.30.4a, 9b) / Book 7 `השליך` (7.69.7a, 7.104.3b, 5d):** keep: Book 7's three are all with a
    preverb and a goal ("hurl into"); here the bare verb with an instrument ("with heat as with a stone", "with the sharp
    one") is "pierce, hit".
  - ***khā́* `מקור` / *khá* `פתח`:** keep: two Zurich lemmas (fem. "well-spring", neut. "opening").
  - ***vásman* / *yóni* `קן`:** two lemmas in one Hebrew. *vásman* has only this sense and keeps `קן`; *yóni* is `רחם`
    everywhere but 7.97.4a – for the coordinator's consistency pass (Book 7's file).
  - **New, for the coordinator:** *áheḷant* is `שאינה רוגזת` here (with *héḷas* `רוגז`, §5.6) but `שאינה כועסת` in
    7.67.7c (`כעס` is *manyú*'s) – align 7.67.7c to `רוגזת`. *achidyamāna* `שאינה נשברת` (2.32.4c) shares `נשבר` with
    √*śr̥̄* (2.28.5d `תישבר`), while √*chid* is `נקרע` (2.28.5c): left (two Zurich lemmas; a needle does not "tear").

## RV2.34–2.43 (part 5: the Maruts, Apāṃ Napāt, the season-cups, Savitṛ, the Aśvins, the omen bird; translator 5, Round 8 run 3)

### Scope
RV 2.34–2.43, 359 pādas: 2.34 (60; the Maruts, jagatī + a triṣṭubh close), 2.35 (60; Apāṃ Napāt), 2.36 (24) and 2.37
(24; the season-cups, *r̥tugraha*), 2.38 (44; Savitṛ at evening), 2.39 (32; the Aśvins in pair-similes), 2.40 (24; Soma
and Pūṣan), 2.41 (66; various gods in tṛcas, Sarasvatī 16–18), 2.42 (12) and 2.43 (13; the omen bird). Ten annotated
files, ten intros, built (`build RV2.34-43`); `verify RV2.34-43 --strict`: no problems, 0 repeated-line differences;
`check_bible_quotes.py` on all my files (annotated, intros, generated): 0 problems. With this part Book 2 is drafted
whole (43 hymns, 1,694 pādas).

### Sources consulted
The Zurich text and morphology (`data`); `freq RV2.34-43`, `lexmap` (translator 4's workbook and generator scripts,
copied to my own scratch folder; a prefix lookup over `lexmap_dict` for every new lemma; a reverse Hebrew → lemma
lookup for every new Hebrew word), `grep`; Grassmann for the hapaxes. After drafting each hymn: `tr` (Griffith,
Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary on II.34–43. Adopted from Jamison (attributed in the
bullets): 2.34.2d *ájani* passive ("Rudra was born as the gleaming bull in Pṛśni's udder", against the standard
"begot"); 2.34.3b *nadá* "reed(-whip)"; 2.34.4a *pr̥kṣé* as a dative infinitive; 2.34.10cd the supplied √*dhā* (`(שמתם)`)
for a verbless half-stanza; 2.34.12c the Maruts unclosing the dark clouds as Dawn the nights (the Vala image); 2.35.5c
*kŕ̥tā* (Oldenberg's "made" women, with WG's "spinners" and Renou's "plants" in the note); 2.35.6a *svàr* as an archaic
genitive; 2.35.9 the transition from water to fire (*jihmá* also the piled firewood); 2.35.14b "paths" supplied (note);
2.36.2b *añjíṣu* with *śubhrā́saḥ*; 2.36.4c *práti* √*vī* "receive"; 2.36.5 Indra as Bṛhaspati (the brahman's cup);
2.37.2b *dadíḥ* as the quoted name; 2.37.3b *áriṣaṇyant* "not failing", *vanaspati* = the chariot; 2.38.1c *dhā́ti*
subjunctive; 2.38.3c *ahyárṣu* "snake-stabber" (a bird of prey); 2.38.4 the human weaver, the intensive *adardhar*
"(always) held apart", *arámati* as a pun; 2.38.5 the evening meal; 2.38.6c *víkr̥ta* "not done (to the end)"; 2.38.7 the
three habitats (waters, wastelands, woods); 2.38.8a *yādrādhyà*, 8c *mārtāṇḍá* = Mārtāṇḍa, man (not "bird"); 2.39.1a
√*gr̥* "awaken", 2b *váram ā́* "at pleasure", 2d the marriage, 3c the cakravāka pair, 4c Yama's two dogs (WG), 4d
*khŕ̥gala* "amulet", 5a "two rivers into one", 6c "nostrils", 7a *śaktí* (spear/power), 7b Heaven and Earth corralling
the airy realms; 2.40.2c *ābhyā́m* dative; 2.40.4–5 the "one … other" as an open riddle; 2.41.11a *ca* "if"; 2.41.19–21
the two havirdhāna carts; 2.42.1c *ca* "if", 1d *abhibhā́* "evil eye", 3a *dakṣiṇatáḥ* "south"; 2.43.3b the silent
sitter. From Geldner: 2.34.5a "flaming" cows; 2.35.6c the unfired-brick forts; 2.35.12c "the back (of the fire-place)";
2.38.8a "as far as possible"; 2.40.4d the navel "unbound" (offspring); 2.43.3c *karkarí* "lute".

### Decisions
- **Copies:** 2.35.15c = 2.23.19c `כל זה טוב, אשר האֵלִים עוזרים לו.`; 2.38.11c = 7.8.6c `אשר יהיה אושר למשבחים ולידיד,`;
  2.41.17d = 2.32.6d `צאצאים, אֵלָה, הקצי לנו!` – each character for character, with its פירוק; F9 in 2.35.15d,
  2.39.8d, 2.40.6d, 2.42.3d, 2.43.3d. Near copies kept parallel in word order: 2.34.11b ~ 7.40.5b (`של וִישְׁנוּ החפוז –
  בהבאה, …`), 2.40.5a ~ 2.35.2d (`את כל ההוויות – האחד / האָרְיָה – הוליד`), 2.40.6c ~ 7.40.4c (`האֵלָה אַדִיטִי, שאין לה
  מתקיף`), 2.37.1c ~ 2.14.2c (`לו – את זה הביאו`).
- **The Maruts (2.34)** with Book 7's vocabulary (renderings §11.15): `מַרוּטִים` vocalized at every occurrence, *añjí*
  `קישוט`, *khādín* `בעל־הצמידים`, *rukmá* `עדי־זהב`, *r̥ṣṭí* `כידון`, *pŕ̥ṣatī* `סוסות מנומרות` (*pŕ̥ṣadaśva*
  `בעל־הסוסים־המנומרים`), *bhŕ̥mi* `מתערבל`, *dávidhvat* `מנער ומנער`, *yā́man* `מסע`, *sámanyu* `שווה־הכעס`,
  *evayā́van* `הולך־המסלול`, *jīrádānu* `זריז־הטיפות`, *sudā́nu* `טוב־המתן`; the plural *agnáyaḥ* `אַגְנִים` (Book 7);
  *rudrā́ḥ* (the Maruts) `רוּדְרָה` / `הרוּדְרָה`, *rudríya* `בני רוּדְרָה`; Pṛśni `פְּרִשְׁנִי` (part 1); Trita `טְרִיטָה` (part 2);
  new: the Daśagvas `הדַּשַׁגְוָה` (as RV 10.14's `הנוגוה`).
- **Apāṃ Napāt (2.35)** `נכד המים` (§3.1), vocalized `נֶכֶד הַמַּיִם` at the first occurrence the name check reads (3d,
  where *nápātam* is unsandhied) and in 1c; *anidhmá* `בלא עצים`, *ghr̥tánirṇij* `לבוש־חמאה־מזוקקת`, *ásmera* `שאינן
  מחייכות`, *yuvatí* `עלמה`, *yahvī́* `תוססת`, *āmá* "raw, unfired" `לא־אפוי` (also 2.40.2c, where it keeps the
  cooked/raw paradox: `את האפוי בתוך הלא־אפויות`), *mántra* `מַנְתְּרָה` (§11.22), *aryá* `האָרְיָה` (Book 7 7.64.3a),
  *sā́nu* `רכס`, √*dhā* 2 "suck" `ינק`, √*viṣ* "be active" `פעל`, *átka* `גלימה`.
- **The season-cups (2.36–2.37):** the priests' offices as part 1 fixed them, in the ablative "from the cup of":
  *hotrá* `מכהונת־הקריאה`, *potrá* `מכהונת־הטיהור`, *neṣṭrá* `מכהונת־ההנהגה`, *praśāstrá* `מכהונת־ההדרכה`;
  new: *ā́gnīdhra* `מכהונת־מצית־אַגְנִי` (from *agnídh* `מצית־אַגְנִי`), neuter *brā́hmaṇa* "the brahman's office"
  `מכהונת־הנוסח` (a sense split from masc. *brāhmaṇá* `בְּרַהְמִין`, as *hotrá* / *hótar*). *r̥tú* `עונה`: the refrain
  2.37.1–3d `מכהונת־X – את הסוֹמָה, נותן־הנכסים, שתה עם העונות!` (*r̥túbhiḥ* `עם העונות`, §5.6); *r̥túnā* `בעונה`
  (2.37.6c), *r̥tuthā́* `לפי העונות` (2.43.1b), *r̥tú* acc. pl. `העונות` (2.38.4c). *svā́hā* `סְוָאהָא`, *váṣaṭ* `וַשַׁט`
  (*váṣaṭkr̥ta* `שנעשה בוַשַׁט`, as part 1's `שנעשה בסְוָאהָא`); *nivíd* `הכרזה`; *āvŕ̥t* `תור` (not `סבב`, which is
  *vartís*'s); *draviṇodā́s* `נותן־הנכסים` (part 1); *vimócana* `התרה`.
- **Savitṛ (2.38):** √*sū* / *savá* `האיץ` / `האצה` (Book 7); *vratá* `תקנה` (a god's ordinance, §11.6) five times;
  √*ram* `נרגע` / caus. `הרגיע`; *ví* √*muc* `שחרר` (unharness); *mókī* `המשחררת` (the night); √*sr̥* `פשט` of the arms
  (Book 7's split; `זרם` elsewhere); *kéta* `כוונה`; √*iṣ* 1 `הזעיק` (Book 7 `מוזעק`); *śóka* "glow" `התלקחות` and
  *prabhavá* "powerful" `עוצמתי` (the Kaṭha's *śoka* "grief", *prabhava* "origin" are the later senses: splits);
  *ápya* "watery" `מימי` (Book 7's *ápya* "friendship" `ידידות` is another word, from *āpí*); Mārtāṇḍa `מָארְטָאנְדָּה`
  (§3.1, RV 10.72) kept as the name with Jamison (Geldner "bird" in the note).
- **The Aśvins (2.39):** every simile literal and in its pāda, `כשני / כשתי X`; the name withheld until 7c, as in the
  source. *yamá* "twin" `תאומים` (with a name escape: not Yama); *gŕ̥dhra* `עיט` (Book 7 *gr̥dhrayātu*); *nidhí*
  `מטמון` (Book 7); *cakravāká* `ברווז־צַ'קְרַוָואקָה` (transcribed, glossed); *khŕ̥gala* `קמיע`; *ákṣ* `עיניים` beside
  *cákṣus* `עין` ("with the eye", literal); *óṣṭha* `שפה` (the string `שפתיים` is also Book 7's *śíprā* – noted, a near
  collision of two lemmas, not one word); *kṣṇótra* `אבן־משחזת`; *svádhiti* `גרזן` (Book 7).
- **Soma and Pūṣan (2.40):** `סוֹמָה ופּוּשָׁן` for the dual dvandva; *jánana* `מוליד`; *nā́bhi* `טבור`; √*jinv*
  `המריץ` (√*jū*'s Hebrew: the two are one family – recorded); *viśvaminvá* `מפעיל־הכל` (Book 7), *áviśvaminva*
  `שאינה מפעילה־הכל`.
- **2.41:** *vāyú* `רוּחַ` (§11.19, masc., no article); *mitrā́váruṇā* `מִיטְרָה וְוַרוּנָה` (§3.1); Sarasvatī's superlatives
  *ámbitamā*, *nádītamā*, *dévitamā* in the pattern of part 4's `הרופא שברופאים`: `האם שבאמהות, הנהר שבנהרות, האֵלָה
  שבאֵלוֹת`; *amba* `אמא`; *dā́nu* (n.) "gift" `מתן` (with a name escape: not Dānu); *pū́ṣarāti* `שפּוּשָׁן נותן־המתנות
  שלהם`; the Śunahotras `בני שׁוּנַהוֹטְרָה` (part 3).
- **The omen bird (2.42–2.43), the bird words fixed once:** *śakuní* `צִפּוֹר`, *śakúnti* `צִפּוֹרִית` (Grassmann: a
  small bird; two lemmas, two words), *ví* `עוף` (part 3), RV 10.16's *śakuná* `העוף` (a related word, noted);
  *kapiñjala* is the Anukramaṇī's name (intro only). *sumaṅgála* `טוב־הבשורה` (`מזל` is *subhága*'s, `סימן` *praketá*'s,
  `אות` reserved), *bhadravādín* `מדבר־הטוב`, *púṇya* `הצלחה` (not the root ברך, gated), *abhibhā́* `עין־רעה`,
  *suparṇá* `יפה־הכנפיים`, *íṣumant* `בעל־החצים`, *ástar* `יורה`. The chant words by Book 2's precedents: *sā́man*
  `נעימה` (§11.25), *sāmagā́* `שר־הנעימה`, *udgātár* `כוהן־הזמרה` (AB precedent), *brahmaputrá* `בן־הנוסח`; the meters
  *gāyatrá* / *traíṣṭubha* transcribed `הגָאיַטְרִי` / `הטְרִשְׁטֻבְּה` (the intros' spelling of the meters).
- **Escapes (each with its reason in the line):** `[היתר שם]` for *yā́man* (2.34.10a, 2.36.2b: Yama), *mitrā́ya*
  "alliance" (2.34.4b), *bháge* (2.34.8b), *bhāgá* (2.36.4d, 2.38.5c, 7a), *yamā́* "twins" (2.39.2b), *dā́nunaḥ* (2.41.6b);
  `[היתר שער: הנחשים]` for *ahyárṣu* "snake-stabber" (2.38.3c: the compound contains *áhi*). 2.34.8d *jána* (sg.) `איש`
  after the `אדם` gate caught my first draft.
- **Sense splits recorded in the lines:** *kṣoṇī́* pl. `המון` (2.34.13a; dual `שתי הארצות`, part 2); *pŕ̥kṣ* as an
  infinitive `להזין` (2.34.4a; noun `מזון־הכוח`); *nadá* `קנה` kept with "roarer" in the note; *ā́* √*yu* `משך אל`
  (2.37.3c; `הסיר` without the preverb); *ní* √*yam* `עצר` (2.38.3c; `הושיט`); *práti* √*vī* `קבל`; *pradhí* `חישוק`
  shares part 1's *nemí* `חישוק` (two words for the felloe).

### Open decisions for the user
- 2.34.2cd: *ájani* passive (Jamison, Griffith: Rudra "was born" as the bull in Pṛśni's udder) in the line; the standard
  "Rudra begot you" in the note.
- 2.34.10cd (Trita, "the aging of the aging"): Jamison's supplied √*dhā* `(שמתם)` in the line; the scapegoat reading
  (Geldner, Renou) in the note.
- 2.35.5c *kŕ̥tā* `כמו טוויות (?)` (WG) – Oldenberg / Jamison's sexual-slang reading in the note.
- 2.38.8c *mārtāṇḍá*: the name (Jamison: man as Mārtāṇḍa's offspring) in the line, "bird" (Geldner, most) in the note.
- 2.40.4–5: which of the two gods is "the one" and "the other" – left open, as the source leaves it.
- 2.41.19a: the two "bringers of weal" – the havirdhāna carts (Jamison) or Heaven and Earth (20a).

### Progress log
- Drafted hymn by hymn in the compact format (translator 4's generator and checks, adapted), each filled, verified and
  built before the next; `tr` and Jamison read after each draft and the readings above adopted; intros written.
- Pass (a) fidelity: 2.34.2d *śukráḥ* nominative (Zurich) – `הפר – נולד, בוהק, בעטין של פְּרִשְׁנִי` (my draft had the
  bright udder); 2.34.4a infinitive; 2.34.12c feminine subject (Dawn); 2.36.2b; 2.38.10a the word order of *vājáyantaḥ*
  (a פירוק segment was out of order – the lemma check caught it); 2.41.11a conditional *ca*; 2.42.1c the same.
- Pass (b) consistency: a lemma → Hebrew comparison of every word of the part with all other files (`lexmap_dict`) and
  the pāda check (every פירוק Hebrew in its own line). Aligned: *ajasra* `בלתי פוסק` (no hyphen, Book 7); √*vah*
  `הוביל` (2.35.9c, 2.41.9a, was `נושאות` / `הביאו`); √*bhaj* `חילק` (2.38.1d); *vástu* `בוקר` (2.39.3c); *víśvyā*
  `מכל מקום` (2.42.1d, freeing `מכל עבר` for *viśvátas*); *vā́ta* masc. `רוּחוֹת` (2.39.5a); *śaktí* `כושר` (2.39.7a,
  a draft `כוח` is *bála*'s); *āvŕ̥t* moved off `סבב` (*vartís*); *tápus* `צורב` (2.34.9c) and *árṇas* `משבר`
  (2.34.12d) kept against first drafts.
- Pass (c) Hebrew: the generated files read through; `אַל` (prohibitive), `אֶל`, `הָאֵלֶּה` / `אֵלֶּה` vocalized where the
  verifier or the reading asked (2.40.2ab, 2.41.21a); 2.34.9b re-phrased.
- `build RV2.34-43`; `verify RV2.34-43 --strict`: 0 problems; `check_bible_quotes.py`: 0. No word of the root חטא,
  `פשע`, `סליחה`, `וידוי`, `חרון` in lines, notes or intros (grepped; the only hits were `האחרון`).

### The text on its own terms
- **The storm as a cattle raid (2.34.1d, 10b, 12):** the Maruts "uncover the cows" and "milk Pṛśni's udder" – the rain
  is milk, the cloud a dappled cow, and the storm repeats Indra's opening of the Vala cave.
- **Fire in water (2.35):** a god who "shines without fuel, ghee-clad, in the waters", whom the waters "kindle", suckle
  and lick like cows their calf, who "with another's body" (Agni's) acts here – the paradox at the centre of Vedic
  thought about fire, lightning and the waters.
- **The secret name (2.35.11):** "his face and his dear name, hidden, grow" – a god's true name is a hidden thing that
  grows with the rite.
- **Ritual as a round (2.36–2.37):** every priest's cup in its turn, "with the seasons" – the order of the rite is the
  order of time; even the chariot-shed ("Lord of the Forest") is asked to hold firm.
- **Evening in a Vedic village (2.38):** the weaver rolls up her cloth, the craftsman lays down his work half-done, the
  mother sets aside the best portion for her son, everyone who went out "to win" comes home – a rare picture of daily
  life, all under Savitṛ's ordinance.
- **A god who assigns every creature its place (2.38.7–8):** fish to water, beasts to the wasteland, birds to the
  woods, man and cattle to the pen, even Varuṇa to his watery womb; and the great gods do not break his ordinance.
- **Thinking in pairs (2.39):** twins described entirely by twinned things – stones, vultures, priests, goats, wives, a
  married couple, horns, hooves, ruddy geese, ships, eyes, hands, feet, lips, breasts, nostrils, ears.
- **The cooked in the raw (2.40.2c):** milk "cooked" inside the living cow – a wonder the poets attribute to the gods.
- **Sarasvatī, "best of mothers, best of rivers, best of goddesses" (2.41.16):** the poet calls her "Mama" (*amba*) and
  asks her for a good name and for children.
- **The omen bird (2.42–2.43):** a household charm at the end of a priestly hymnal; the bird's cry is read for good or
  bad by its direction ("south of the houses", "towards the fathers"), and its song is likened to the priests' chant –
  even its silence is a sign.

### Key parallels
- 2.35.4d – Exod 3:2 `וְהִנֵּה הַסְּנֶה בֹּעֵר בָּאֵשׁ וְהַסְּנֶה אֵינֶנּוּ אֻכָּל` [divergence]: a fire that does not depend on its fuel
  – the bush is not consumed, the waters' fire burns "without wood"; a shared motif of cultures that never met.
- 2.38.8c – Ps 104:22–23 [divergence] (reviewer 5: was [equivalent]): the daily round of man and beast in an order set by the god; in the psalm the
  beasts go out at night and man by day, here all return home at evening under Savitṛ's ordinance.
- 2.39.6b – Song 4:5 `שְׁנֵי שָׁדַיִךְ כִּשְׁנֵי עֳפָרִים תְּאוֹמֵי צְבִיָּה` [divergence]: twinned body parts and twins in similes –
  the beloved's body compared to animal pairs there, the twin gods compared to body pairs here.
- 2.41.16b – Ps 46:5 `נָהָר פְּלָגָיו יְשַׂמְּחוּ עִיר-אֱלֹהִים` [divergence] (reviewer 5: was [equivalent]): the river that gladdens; here the river is itself
  a goddess and mother.
- 2.42.1b – Qoh 10:20 `כִּי עוֹף הַשָּׁמַיִם יוֹלִיךְ אֶת הַקּוֹל` [divergence]: the bird as a carrier of voice and word – in
  Qohelet it betrays a secret, here its voice is an omen.
- 2.35.2d (no verse quoted) [divergence]: the god who begets "all beings" from within the waters, against Gen 1's waters
  before creation.

### Proposals for the shared renderings
- **§5.6 (Book 2):** the offices in the ablative as written (`מכהונת־X`); add *ā́gnīdhra* `כהונת־מצית־אַגְנִי`, *brā́hmaṇa*
  (n.) `כהונת־הנוסח`; the 2.37 refrain `מכהונת־X – את הסוֹמָה, נותן־הנכסים, שתה עם העונות!` (a candidate formula,
  1–3d); *svā́hā* / *váṣaṭ* `סְוָאהָא` / `וַשַׁט`; *nivíd* `הכרזה`; *āvŕ̥t* `תור`.
- **New recurring words:** *śakuní* `צִפּוֹר`, *śakúnti* `צִפּוֹרִית`, *sumaṅgála* `טוב־הבשורה`, *abhibhā́* `עין־רעה`;
  *sāmagā́* `שר־הנעימה`; *anidhmá* `בלא עצים`; *āmá* `לא־אפוי`, *pakvá* `אפוי`; *jánana* `מוליד`; *gŕ̥dhra* `עיט`;
  *yamá* (common noun) `תאום`; *mókī* `המשחררת`; *śákman* `מלאכה`; *dhánvan* `מדבר`; *ápya* "watery" `מימי`;
  the superlative pattern `X שב־X־ים` for *-tama* of a noun (2.41.16, as part 4's `הרופא שברופאים`).
- **Names (files only):** the Daśagvas `הדַּשַׁגְוָה` (2.34.12a); *cakravāká* `ברווז־צַ'קְרַוָואקָה`; the meters
  `גָאיַטְרִי`, `טְרִשְׁטֻבְּה` in a line (2.43.1d).
- **§3.1:** the Apāṃ Napāt regex (` apam napat`) does not fire on the sandhi forms *nápād* (2.35.1c, 2c, 7c, 9a, 10b,
  13c) nor on the inverted *náptur apā́m* (11b); a regex ` apam napa[td]` would check them. Mārtāṇḍa's row could note
  RV 2.38.8c.
- **No pre-set row revised.**

### Lessons for the guidelines
- **A name escape is matched by the word, not the phrase:** the `[היתר שער: …]` of a gate must name the token the gate
  reports (`הנחשים`, not `נחשים` and not the whole compound); the verifier's message gives it.
- **The pāda-wise lemma check catches swapped segments that the line hides:** a פירוק segment out of the source's order
  (2.38.10a) left the Hebrew line right but mapped two lemmas to each other's Hebrew in `lexmap` – run the
  lemma → Hebrew comparison before the build, not only the pāda check.

### Review (reviewer 5)
An independent fidelity review of all 359 pādas (each `>` line against `data` and its Zurich morphology; a pāda-wise
check that every פירוק Hebrew stands in its line; a lemma → Hebrew comparison of the part against every other annotated
file of the corpus; the notes, the intros, the הקבלה tags). **15 lines fixed**, 3 פירוק-only fixes, 2 tags, 4 intro /
header passages. `build RV2.34-43`; `verify RV2.34-43 --strict`: 0 problems, 0 repeated-line differences in the part;
`check_bible_quotes.py` on the part's files: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 2.34.2b | `הבריקו הגשמים` | `מבריקים הגשמים` | injunctive *dyutayanta* beside 2a's present *citayanta*: one timeless description, not two tenses |
| 2.34.2d (פירוק) | `("הבוהק")` | `("בוהק")` | the פירוק Hebrew was not in the line (the only such case in the part) |
| 2.34.10d | `בלתי־ניתנים להונאה` | `שאין להונותכם` | *ádābhya* is Book 7's `שאין להונותו/ם` (7.15.15c, 7.66.17a, 7.104.20b) |
| 2.34.12b | `הם ישגרו אותנו` | `הם ישגרו נא אותנו` | imperative 3 pl. *hinvantu*: the wish marked as elsewhere (`ישתה נא`, `ישמינו נא`) |
| 2.35.2b | `הלא ידע אותה` | `הלא יֵדַע אותה` | *védat* is a (perfect) subjunctive: future, vocalized against the past reading |
| 2.35.5c | `הוא נשפך` | `הוא זרם` | √*sr̥* `זרם` (Book 7; the translator's own row: `פשט` only of the arms, 2.38.2b) |
| 2.35.8c | `כענפים, אכן, …` | `ענפים, אכן, …` | no *iva* / *ná* in the source: the worlds *are* his branches (a metaphor, not a simile) |
| 2.36.5b | `הונחו` | `הונח` | *hitáḥ* masc. sg. agrees with the soma (*eṣá*, 5a), not with the neuters *sáhas*, *ójas* |
| 2.37.2b (פירוק) | `(""נותן"")` | `("נותן")` | doubled quotes: `lexmap` lost *dadí* here |
| 2.37.4d | `(את) של נותן־הנכסים` | `(הוא) של נותן־הנכסים` | *drāviṇodasáḥ* is nominative (an *a*-stem acc. would be *-ám*): Geldner's reading; the cup reading in the note |
| 2.37.5c | `– כי בואו!` | `– בואו הנה!` | *ā́ hí kaṃ gatám* is a new clause (Jamison): *ā́* "hither" rendered, *hí* untranslated as in 2.36.3a |
| 2.38.5d | `תאוותו` | `כוונתו` | *kéta* `כוונה` (Book 7.18.25c; the translator's own Decisions row); Geldner's "Verlangen" stays in the note |
| 2.38.6a | `ושב הביתה` | `ושב (הביתה)` | "home" is not in *samā́vavarti* (it is 6b's *amā́*): an addition goes in `( )` |
| 2.38.10b | `יעזור לנו!` | `יעזור נא לנו!` | precative *avyāḥ*: a wish |
| 2.40.2c / 2d (פירוק) | `בהם` | `להם` | dative (Jamison, as the translator's note adopts), parallel to 2d's `לסוֹמָה ולפּוּשָׁן`; both פירוק segments now say dative (Zurich: instr.; the forms coincide) |
| 2.41.7a | `אל (בית) עשיר־בפרות` | `עשיר־בפרות` | *gómat* agrees with *vartíḥ* (7c `בסבב`), not with a supplied "house" |
| 2.41.9a | `אותו – לנו` | `אתם – לנו` | *tā́* is nom. dual (the Aśvins); a singular "it" fits neither reading |
| 2.38.8c, 2.41.16b (הקבלה; also Key parallels) | [equivalent] | [divergence] | each bullet itself describes a shared motif with different details (the psalm's night/day round; the river that gladdens vs the river as goddess); [equivalent] is the tag of a lexical concept-match |
| intros / header | 2.34 "הסיוע … כמו גועה"; 2.40 "שם אִינְדְּרָה"; 2.42 "העיט או הצייד"; annotated 2.36 header listed `מכהונת־ההנהגה` | 2.34 "הרצון הטוב"; 2.40 "הוליד"; 2.42 the lines' "יפה־הכנפיים", "הגיבור בעל־החצים, היורה"; 2.36 header: stanza 3 names no office | the intros say only what the lines say |

**Checked and found right:** 2.36–2.37 – the god of each stanza (2.36: Indra, the Maruts, Tvaṣṭar with the wives, Agni,
Indra-as-Bṛhaspati, Mitra-Varuṇa; 2.37: Draviṇodas 1–4, the Aśvins 5, Agni 6), the offices in the ablative (2.36.3
names none; *neṣṭrá* only in 2.37), the seasons only in 2.37 (refrain 1–3d character-identical, *r̥túnā* 6c); 2.39 –
every pair-simile literal and in its own pāda, the name withheld until 7c; 2.38 – the aorists of the evening scene past,
3a *mucāti* and 1c *dhā́ti* future (subjunctive; ví √*dhā* `חילק` has Book 7's precedent, so 1c `יחלק` beside 1d's *bhaj*
`חילק` is not a collision), 9ab the gods' negated present; the copies 2.35.15c = 2.23.19c, 2.38.11c = 7.8.6c, 2.41.17d =
2.32.6d and F9 (×5) character for character; no grammar note `("…")` in any פירוק segment of the part (one `("…")`
per segment, each in its line); no §7.4 word in lines, notes or intros; every parallel says in words that it is a
shared motif of cultures that never met.

**Rulings on the translator's open questions** (the line stays as drafted in each):
- **2.34.2d** *ájani*: keep "was born" in the line. It is a passive aorist, a formation typed for intransitive/passive
  value, and Griffith and Max Müller already read it so; "begot" needs a transitive value attested nowhere else.
- **2.34.10cd**: keep Jamison's supplied √*dhā* in `( )` – the half-stanza has no verb, the supply is marked, and the
  scapegoat reading (Geldner, Renou) is in the note; either reading leaves the Hebrew words of the source unchanged.
- **2.35.5c** *kŕ̥tā*: keep `כמו טוויות (?)`, marked uncertain; Oldenberg / Jamison's sexual reading and Renou's "plants"
  stay in the note. No reading is secure enough to replace a neutral, marked one.
- **2.38.8c** *mārtāṇḍá*: keep the name. The formulaic pair with *paśú* (domestic man and beast, each in its pen), the
  Aditi myth of RV 10.72.8–9 and the Āditya triad of 9ab make Jamison's reading the stronger one; "bird" in the note.
- **2.40.4–5**: leave "the one … the other" open, as the source does.
- **2.41.19a**: the neutral `(שתי) מביאות־האושר` is right; the havirdhāna carts (Jamison; the Anukramaṇī's alternative)
  and Heaven-and-Earth (20a, and 21a's "your lap") both stay in the note.

**For the coordinator:** (1) 2.5.4d `כענפים` is right there (*vayā́ iva*), so 2.35.8c and 2.5.4d now differ by the
source alone; (2) *jyéṣṭha* is `הגדול ביותר` in 2.35.9c, 2.38.5c but `הגדול` / `הגדולה` in Books 2 and 7 – one form for the lemma;
(3) 2.38.8b *ániśitam* (adverbial acc.) is rendered `(הוא) שאינו שוקט`, an adjective of Varuṇa – acceptable, an adverb
(`בלי הרף`) would be closer; (4) the corpus-level `parallels-index.md` should be regenerated after the merge (two tags
changed).

### Consistency pass (Round 8 run 3)
One Hebrew per lemma across Books 2 and 7 (★). Method: a script over the פירוק bullets of every `annotated-RV2.*` and
`annotated-RV7.*` file (21,871 segments) grouped each lemma's Hebrew by stem (prefixes, number, gender, construct and
binyan forms of one word counted as one) and listed every Book-2 lemma with more than one Hebrew word (264 candidates,
most of them preverb-driven verb senses, Zurich homographs or numerals) and every Hebrew stem shared by several lemmas
(362 candidates); each was checked against its lines, the notes and the earlier rulings. **51 `>` lines changed** (49 in
Book 2, 2 in Book 7), each with its פירוק, the notes that quote it, and the intros / annotated heads of 2.24, 2.33,
2.34, 2.35, 2.38, 2.40; `build RV2 RV7.97 RV7.67`, `verify --strict`: 0 problems (the 2 known repeated-line differences,
RV10.10 13d/14b and RV7.38 6b / 7.52 3b, stay); `check_bible_quotes.py 9-ריגוודה-ספר-ב/*.md`: 0. Repeated lines kept
identical (2.23.19b = 2.24.16b).

| Lemma | Before | After | Lines | Reason |
|---|---|---|---|---|
| √*puṣ*, *puṣṭí*, *sahasrapoṣá* | `פרח`, `פריחה` | `שגשג`, `שגשוג` | 2.12.4d, 2.27.15b; 2.4.4a, 2.12.5c, 2.13.4a, 2.27.12b; 2.32.5d | the √*puṣ* family is `שגשג` in Book 7 (7.32.9c, 16b, 7.56.5b, 7.57.5d, *puṣṭivárdhana* 7.59.12b) and RV 10.17.9d (*póṣa*, also 2.21.6c, 2.40.4d); "thrive, prosper" |
| √*vakṣ* | `שגשג` | `פרח` | 2.2.4a, 2.3.6a, 2.16.1c, 2.21.3b, 2.22.3b, 2.24.11b, 2.34.4a | the family that moves: Book 7 has √*vakṣ* `שגשג` once (7.8.2d) against six lines of the √*puṣ* family; `פרח` ("grow, flourish") is freed by √*puṣ*. **For the coordinator:** 7.8.2d `שגשג` → `פרח` |
| √*cit* intr. "appear, be conspicuous" | `נבלוט נא`, `מבליט את עצמו` | `ניגלה נא`, `נגלה` | 2.2.10b, 2.34.7b | Book 7's `נגלה` (7.11.3a; 2.2.5d, 2.4.5c, 2.34.2a); `המבחין` stays for "perceive" (two senses, as Book 7) |
| *jyéṣṭha* | `הגדולה ביותר`, `הגדול ביותר` | `הגדולה`, `הגדול` | 2.35.9c, 2.38.5c | Book 7 (7.43.4c, 7.65.1c, 7.86.4a, 7.97.3a) and 2.18.8c; the superlative is in the פירוק |
| *ríṣ* | `הפגיעה` | `הנזק` | 2.34.9b, 2.35.6b | Book 7 7.34.17a, 2.26.4c (`פגע` is *rápas*'s) |
| *yuvatí* | `העלמות` | `הצעירות` | 2.35.4a, 11c | Book 7 7.77.1a, 7.80.2c (*yúvan* `צעיר`); `עלמה` is *kanyā̀*'s (2.15.7a). 7.1.6a `הנערה` is Book 7's own stray |
| *haṃsá* | `כברבורים` | `כאווזים` | 2.34.5c | Book 7 7.59.7b; KU2's `ברבור` is a split between texts, for the lead |
| *ghorá* | `הנורא` | `האיום` | 2.12.5a | Book 7 (7.20.6b, 7.28.2d, 7.66.13b); `נורא` is *bhīmá*'s |
| √*guh* | `הנסתר`, `הסתיר`, `הסתירו` | `החבוי`, `החביא`, `החביאו` | 2.11.5a, 2.24.3d, 2.40.2b | Book 7 (7.76.4c, 7.80.2b, 7.100.6c); `נסתר` is *niṇyá*'s, `בסתר` *gúhā*'s |
| √*hā* "leave" | `עזבו`, `עזב` | `נטשו`, `נטש` | 2.24.7d, 2.38.6c | Book 7 (7.5.3b, 7.18.15d, 7.68.7b) |
| √*dī* "fly" | `עפות` | `דואות` | 2.35.14d | Book 7 (7.63.5b, 7.74.4b); `עף` is √*pat*'s |
| √*das* | `דעכת` | `כָּלִיתָ` | 2.2.6b | Book 7 7.1.21d `יכלה` |
| *úttara* | `עליון` | `גבוה` | 2.23.8d | Book 7 7.95.4d; `עליון` is *paramá*'s |
| *vā́c* | `דיבור` | `קול` | 2.21.6d | Book 7 (7.101.1a, 7.103 ×5, 7.34.9b) and 2.42.1b, 2.43.1c; `דיבור` is *vácas*'s |
| √*kup* | `הגועשים` | `המזדעזעים` | 2.12.2b | `גועש` is *arṇavá*'s (7.63.2b, 2.23.18d) |
| *saṃdŕ̥ś* | `במראה`, `ממראה` | `בהופעה`, `מראיית` | 2.1.12b, 2.33.1b | "appearance" = Book 7 `הופעה` (7.88.2a); "seeing" = part 2's `ראייה` (2.13.5a, 10c); `מראה` is *amáti*'s (Book 7) |
| *pārá* | `הלאה` | `בחוף הרחוק` | 2.11.8c | Book 7 (7.73.1a), 2.33.3c; `הלאה` is *párā*'s |
| *padá* | `עקבות` | `מדרך` | 2.23.16a | Book 7 (7.41.6b, 7.87.4c), 2.10.1b, 2.35.14a |
| *paribhū́* | `להקיף` | `לסובב` | 2.16.3a | 2.24.11d `סובב`; `מקיף` is *vibhú*'s (2.24.10a, 11a) |
| *parás* | `הרחק` | `מעבר` | 2.35.6c | 2.13.10d, 2.23.16d, Book 7 7.99.1a |
| *pū́rva* | `לפני` | `קודם` | 2.3.3b | 2.37.2a; `לפני` is *purás*'s |
| √*jinv* (Zurich √*ji* 2) | `ממריצים`, `ימריץ נא` | `מקדמים`, `יקדם נא` | 2.40.3d, 6a | part 3's `קידם` (2.23.19b = 2.24.16b); `המריץ` is √*jū*'s (Book 7, 2.31.4b). Book 7's 7.104.6d `עוררו` collides with √*budh* caus. `עורר` (7.44.2a, 7.79.1b): **for the coordinator** → `קדמו` |
| √*kā* | `חושקים` | `משתוקקים` | 2.31.7c | Book 7 7.27.1c; `חשק` is *kā́ma*'s |
| *śā́s* | `המצוות` | `ההכוונות` | 2.23.12b | Book 7 7.48.3a (√*śās* `כוון`) |
| *ávara* "lower" | `הנחותה`, `הנחותים` | `התחתונה`, `התחתונים` | 2.24.11a, 2.34.14d | Book 7 7.6.7c, 2.9.3b; `נחות` is left to *úpara* (2.4.9b) |
| *iṣṭí* "seeking" | `בבקשותיהם` | `בחיפושיהם` | 2.1.9a | Book 7 7.92.3b, 2.18.1d, 2.28.7a |
| *śrutá* (√*śru*) | `לנודע` | `למפורסם` | 2.14.8c | Book 7 7.18.12a, 2.20.6a, 2.33.11a |
| *yóni* (Book 7) | `קן` | `רחם` | 7.97.4a | reviewer 4: `רחם` everywhere else (7.3.5c, 7.24.1a, Book 2 ×5); *vásman* keeps `קן` (2.31.1c) |
| *áheḷant* (Book 7) | `שאינה כועסת` | `שאינה רוגזת` | 7.67.7c | the *héḷas* `רוגז` family (7.84.2c, 2.32.3a); `כעס` is *manyú*'s and *héḷa*'s |

**Kept (recorded splits and collisions):**
- *viśvárūpa* `בעל כל הצורות` / *viśvápsnya* `בעל־כל־הצורות`: both are earlier fixed (RV 10.10.5b; Book 7 7.71.4d) and *rūpá* / *ápsas* share the sense "form"; the maqaf keeps them apart.
- *mandín* `המבסם` / *mádya* `המבסם`: Book 7 already renders √*mand* with בסם (7.103.4b; *mandasāná* `מתבסם` in both books) and *mádya* `המבסם` (7.92.1c); one sense (soma's exhilaration).
- *ucátha* / *ukthá* `אמירה`: Book 7's collision (7.18.5c), left for the lead in §11.22; a by-form of the same root and sense – a new word in Book 2 alone would split the books.
- *majmán* `עוצמה` / *śávas* `עצמה`: *majmán* is `בעוצמה` in Book 7 too (7.82.5b); the two spellings keep them apart; a Book 7 matter.
- √*ci* 2 `תבע` (2.27.4d) / 7.52.2d `מענישים`; √*śās* `ייסר` (2.29.5b) / `כוון`; √*vyadh* `נקב` (2.30.4a, 9b) / Book 7 `השליך`; *khā́* `מקור` / *khá* `פתח`: confirmed as reviewer 4 ruled (sense or lemma differs).
- √*cit* `הבחין` "perceive" / `נגלה` "appear": two senses, as in Book 7.
- Preverb and homograph senses (Zurich lumps them): √*sic* `נשאב` 2.16.7d (Jamison "draw from a well"); *váram ā́* `כאוות נפשכם` 2.39.2b (an idiom, Jamison); *práti* √*vī* `קבל` 2.36.4c; *nís* √*ubj* `דחקת החוצה` 2.23.18d; *úpa* / *prá* √*brū* `פונה` / `מכריז` 2.30.11b, 2.42.1a; *sám* √*hā* `הרפה` 2.38.4c; √*hā* 2 `נפער`; √*tur* `ממהרים` 2.34.3b; √*edh* `צומח` 2.25.5c; √*dhūp* `מעושנים` 2.30.10c; *páre ávare* `הרחוקים והקרובים` 2.12.8b; *yugá* "yoke" `עול` / "age" `עידן`; *yamá* "twin" `תאום`; *vā́ra* "tail-hair"; *pradíś* `הנחיה` / `כיוון`; *prācī́na*; *kṣoṇī́*; √*sphr̥̄* `בעט`; √*riṣaṇy*.
- *vājayánt* `תאב־הפרס` (2.11.7a, 2.19.7b): Book 7 is itself split (7.90.7c, 7.91.7c `תאבי־הפרס` / 7.24.5b `המבקש פרס`); Book 2 follows the majority.
- √*str̥* `שיטח` (2.11.20b) / 7.18.11b `פיזר`: Book 7's word collides with √*vap* `פיזר` (both books); for a Book 7 pass.
- *úpara* `נחות` (2.4.9b): Book 7 is split (7.87.4d `מאוחר`, 5b `תחתונות`); `נחות` is now *úpara*'s alone in Book 2.
- *bhāgá* / *bhága* `חלק`, √*bhaj* / √*day* / *ví* √*dhā* `חילק`, *vŕ̥ṣan* / *vr̥ṣabhá* `פר`, √*ās* / √*sad* `ישב`, *gábhasti* / *hásta* `יד`, √*rāj* / √*kṣā* `מלך`, *avamá* / *ávara* `תחתון`: Book 7's kept collisions (§11.17), followed.
- **For the coordinator (Book 7 lines not touched):** 7.8.2d √*vakṣ* `שגשג` → `פרח`; 7.104.6d √*jinv* `עוררו` → `קדמו`; 7.1.6a *yuvatí* `הנערה` → `הצעירה`; 7.74.6c √*śū* `התעצמו` → `תפחו`; 7.104.17b √*guh* `בהסתירה` → `בהחביאה`; 7.18.11b √*str̥* `פיזר` → `שיטח`; renderings §11.19 "*yóni* `קן` in 7.97" is now void; the cross-text pair *haṃsá* `אווז` (RV) / KU2 `ברבור` for the lead.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (RV2.1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 13a | tvā́m agna ādityā́sa āsyàṃ | אותך, אַגְנִי, האָדִיטְיָה (עשו) לפה, | `וְהָיָה הוּא יִהְיֶה לְּךָ לְפֶה וְאַתָּה תִּהְיֶה לּוֹ לֵאלֹהִים` (שמות ד:טז) | divergence | הדימוי של מתווך כ"פה" של אחר משותף לשתי תרבויות שלא נפגשו, אבל הכיוון הפוך: אהרן הוא פה שמדבר אל העם, ואַגְנִי הוא פה שאוכל – האלים אוכלים דרכו את התקרובות. |
| 13d | tvé devā́ havír adanty ā́hutam | בך האֵלִים אוכלים את המנחה הנסוכה. | `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` (דברים ד:כד) | divergence | בשני העולמות האש "אוכלת", אבל בדברים האל עצמו הוא אש אוכלת, וכאן האש היא הפה שבו האלים אוכלים. מוטיב משותף לתרבויות שלא נפגשו. |

### Parallels index (RV2.2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.4)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.5)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.6)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.7)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.8)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.9)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.10)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.11)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.12)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2d | yó dyā́m ástabhnāt sá janāsa índraḥ | אשר את השמים תמך, הוא – אנשים! – אִינְדְּרָה. | `נֹטֶה שָׁמַיִם לְבַדּוֹ` (איוב ט:ח) | divergence | האל שמותח את השמים ומייצב את הארץ (2a–d); מוטיב משותף לתרבויות שלא נפגשו, לא מקור. כאן השמים "נתמכים" (√*stambh*) וחלל האוויר "נמדד" – עבודת בנאי, לא ציווי. |
| 5a | yáṃ smā pr̥chánti kúha séti ghorám | אשר שואלים עליו: "היכן הוא?" – (על) האיום; | `בְּאָמְרָם אֵלַי כָּל-הַיּוֹם    אַיֵּה אֱלֹהֶיךָ` (תהלים מב:יא; ושם מב:ד; קטו:ב) | divergence | השאלה "היכן הוא?" על אל שאינו נראה; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. בתהלים השאלה היא לעג של אויבים למתפלל הסובל, והוא משיב בתקווה; כאן "שואלים" סתמיים (אולי בני העם עצמם), והמשורר משיב ברשימת מעשים ובציווי "שימו בו אמון" (5d). |
| 5b | utém āhur naíṣó astī́ty enam | וגם אומרים עליו: "אין הוא". | `אָמַר נָבָל בְּלִבּוֹ    אֵין אֱלֹהִים` (תהלים יד:א); `כִּחֲשׁוּ בַּיהוָה וַיֹּאמְרוּ לוֹא הוּא` (ירמיהו ה:יב) | divergence | הכחשת האל במלים "אין" / "לא הוא"; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. בתהלים ובירמיהו המכחיש הוא נבל או רשע, והכחשה היא מעשה מוסרי ("אין אלהים" – אין דין); כאן היא ספק של בני אדם שאינם רואים את האל, והתשובה היא עדות על מעשיו בעולם. |
| 5d | śrád asmai dhatta sá janāsa índraḥ | שימו בו אמון! הוא – אנשים! – אִינְדְּרָה. | `הַאֲמִינוּ בַּיהוָה אֱלֹהֵיכֶם וְתֵאָמֵנוּ` (דברי הימים ב כ:כ) | equivalent | קריאה לקהל לתת אמון באל; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. השורש העברי אמ"ן והצירוף הוֶדִי *śrád* √*dhā* רחוקים זה מזה; הקרבה היא בתוכן. |
| 15b | vā́jaṃ dárdarṣi sá kílāsi satyáḥ | את הפרס מבקיע שוב ושוב – אתה הוא, באמת, האמיתי. | `וַיהוָה אֱלֹהִים אֱמֶת הוּא` (ירמיהו י:י) | equivalent | האל "האמיתי", מול מי שמכחיש אותו; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. *satyá* (מן √*as* "להיות": "הקיים, הממשי") ו־`אֱמֶת` (מן אמ"ן, "יציב, נאמן") – שני שורשים שונים לאותה טענה. |

### Parallels index (RV2.13)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 12d | prā́ndháṃ śroṇáṃ śraváyan sā́sy ukthyàḥ | מפרסם את העיוור, את הצולע; אתה הוא הראוי־לאמירה. | `אָז תִּפָּקַחְנָה עֵינֵי עִוְרִים` (ישעיהו לה:ה); `אָז יְדַלֵּג כָּאַיָּל פִּסֵּחַ` (ישעיהו לה:ו) | divergence | האל והעיוור והפיסח; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. בישעיהו האל מרפא אותם; כאן הוא "מפרסם" אותם – נותן להם שם ומעמד, ואינו מסלק את המום. |

### Parallels index (RV2.14)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.15)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5b | só asnātr̥̄́n apārayat svastí | הוא העביר את שאינם שוחים, בשלום; | `וּבְנֵי יִשְׂרָאֵל הָלְכוּ בַיַּבָּשָׁה בְּתוֹךְ הַיָּם` (שמות יד:כט) | divergence | האל שעוצר את זרם המים ומעביר את בני חסותו; מוטיב משותף לתרבויות שלא נפגשו, לא מקור. כאן הנהר "נרגע" ו"שאינם שוחים" עוברים, ואחר כך יוצאים לקחת "עושר" (5c); אין כאן אויב רודף ולא מים שנבקעים. |

### Parallels index (RV2.16)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.17)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.18)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.19)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.20)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.21)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.22)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.23)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 6d | svā́ tám marmartu duchúnā hárasvatī | שלו עצמו – הפורענות רבת־הזעם – תכתוש נא אותו! | `בּוֹר כָּרָה וַיַּחְפְּרֵהוּ; וַיִּפֹּל בְּשַׁחַת יִפְעָל.` (תהלים ז:טז); `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ; וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד.` (תהלים ז:יז) | equivalent | מי שטומן מלכודת לאחר נלכד ברעה של עצמו: מוטיב משותף לשירת התפילה של תרבויות שלא נפגשו מעולם, לא מקור. בהודו הרעה עצמה (*duchúnā*) היא הכותשת, כמעט ישות; במזמור – הבור שכרה הרשע, והחמס שיורד על קודקודו. |
| 18a | táva śriyé vy àjihīta párvato | לתפארתך נפער ההר, | `הֲלוֹא כֹה דְבָרִי כָּאֵשׁ נְאֻם יְהוָה; וּכְפַטִּישׁ יְפֹצֵץ סָלַע.` (ירמיהו כג:כט) | divergence | מילה שמבקיעה סלע: אצל ירמיהו – דימוי לכוחה של מילת האל; כאן – מיתוס של ממש, שבו אל הנוסח פותח את ההר והפרות יוצאות. מוטיב משותף של "כוח המילה" בתרבויות שלא נפגשו, לא מקור. |

### Parallels index (RV2.24)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3c | úd gā́ ājad ábhinad bráhmaṇā valám | גירש החוצה את הפרות, בקע בנוסח את וָלָה, | `הֲלוֹא כֹה דְבָרִי כָּאֵשׁ נְאֻם יְהוָה; וּכְפַטִּישׁ יְפֹצֵץ סָלַע.` (ירמיהו כג:כט) | divergence | מילה שבוקעת סלע: אצל ירמיהו – דימוי לכוחה של מילת האל; כאן מיתוס, שבו אדון הנוסח בוקע את ההר ומוציא את הפרות, ובטקס הוודי כל נוסח חוזר על המעשה. מוטיב משותף לתרבויות שלא נפגשו, לא מקור. |
| 4a | áśmāsyam avatám bráhmaṇas pátir | את הבאר בעלת פי־הצור – בְּרַהְמַנַסְפַּתִי, | `וְהִכִּיתָ בַצּוּר וְיָצְאוּ מִמֶּנּוּ מַיִם וְשָׁתָה הָעָם` (שמות יז:ו) | divergence | מים מתוק יוצאים מן הצור, והעם שותה: אצל משה – נס במדבר; כאן – הבאר "בעלת פי־הצור" של מיתוס וָלָה, שממנה שותים "רואי־האור". מוטיב משותף, לא מקור. |

### Parallels index (RV2.25)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.26)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4d | -aṃhóś cid asmā urucákrir ádbhutaḥ | אף מן המצר – עושה לו רוחב, הנפלא. | `מִן-הַמֵּצַר קָרָאתִי יָּהּ עָנָנִי בַמֶּרְחָב יָהּ` (תהלים קיח:ה); `בַּצָּר הִרְחַבְתָּ לִּי` (תהלים ד:ב) | equivalent | המצוקה כמקום צר והחילוץ כמרחב; גם . דימוי משותף לתרבויות שלא נפגשו – בוודית הוא חוזר בשני השורשים *aṃh-* "צר" ו־*uru-* "רחב", ובעברית ב"צר" ו"רחב". |

### Parallels index (RV2.27)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3c | antáḥ paśyanti vr̥jinótá sādhú | רואים פנימה את העקום, וגם את הטוב; | `בְּכָל-מָקוֹם עֵינֵי יְהוָה צֹפוֹת רָעִים וְטוֹבִים` (משלי טו:ג) | equivalent | האל רב־העיניים הרואה את העקום ואת הטוב; מוטיב משותף לתרבויות שלא נפגשו. כאן העיניים הן של אֵלי החוזה, והם רואים "פנימה" – לתוך הלב. |
| 6b | anr̥kṣaró varuṇa sādhúr ásti | בלי קוצים, וַרוּנָה, טובה היא. | `דֶּרֶךְ עָצֵל כִּמְשֻׂכַת חָדֶק וְאֹרַח יְשָׁרִים סְלֻלָה` (משלי טו:יט) | divergence | הדרך הקוצנית מול הדרך הסלולה; מוטיב משותף של "שתי הדרכים" בתרבויות שלא נפגשו. כאן הדרך שייכת לאֵלִים, והקוצים אינם עצלות אלא הפחתים והמכשולים של 5d. |
| 9c | ásvapnajo animiṣā́ ádabdhāḥ- | שאינם נרדמים, שאינם ממצמצים, שלא הונו, | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | equivalent | השומר שאינו ישן; מוטיב משותף לתרבויות שלא נפגשו. כאן ערים האָדִיטְיָה, אֵלי החוזה, כדי לראות כל הפרה; בתהלים – כדי לשמור. |
| 10c | śatáṃ no rāsva śarádo vicákṣe | הענק לנו מאה סתווים לסקור, | `יְמֵי-שְׁנוֹתֵינוּ בָהֶם שִׁבְעִים שָׁנָה` (תהלים צ:י) | equivalent | אורך חיי האדם; בוודה המידה המלאה היא "מאה סתווים" – בקשה, ולא קינה. |
| 14d | mā́ no dīrghā́ abhí naśan támisrāḥ | אַל ישיגו אותנו העלטות הארוכות. | `גַּם-חֹשֶׁךְ לֹא-יַחְשִׁיךְ מִמֶּךָּ וְלַיְלָה כַּיּוֹם יָאִיר` (תהלים קלט:יב) | divergence | האור והחושך אצל האל; בתהלים החושך אינו מסתיר מן האל, וכאן האדם מבקש שהחושך לא ישיגו. מוטיב משותף לתרבויות שלא נפגשו. |

### Parallels index (RV2.28)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4b | r̥táṃ síndhavo váruṇasya yanti | אל הסדר של וַרוּנָה הולכים הנהרות; | `כָּל הַנְּחָלִים הֹלְכִים אֶל הַיָּם וְהַיָּם אֵינֶנּוּ מָלֵא` (קהלת א:ז) | divergence | הנהרות ההולכים בלי הרף; אצל קהלת זו תנועה מעגלית שאין בה תכלית, כאן היא הסדר של וַרוּנָה. מוטיב משותף לתרבויות שלא נפגשו. |
| 5a | ví mác chrathāya raśanā́m ivā́gaḥ- | התר ממני את האשמה כמו רסן; | `אִם-עֲוֹנוֹת תִּשְׁמָר-יָהּ אֲדֹנָי מִי יַעֲמֹד` (תהלים קל:ג) | divergence | האל הזוכר את העוון, והמתפלל המבקש שלא ייזכר; גם כאן האל רואה ותובע (ב 27.4d), אבל המעשה המבוקש שונה: לא שהאל "לא ישמור" את האשמה, אלא שיתיר אותה מן האדם כמו קשר. מוטיב משותף לתרבויות שלא נפגשו, בשתי תמונות שונות. |
| 6c | dā́meva vatsā́d ví mumugdhy áṃho | כרצועה מן העגל – שחרר את המצוקה, | `וְהוּא יִפְדֶּה אֶת-יִשְׂרָאֵל מִכֹּל עֲוֹנֹתָיו` (תהלים קל:ח) | divergence | האל משחרר מן העוון; בתהלים "פדיון" – קנייה חזרה, כמו של עבד; כאן התרה של רצועה מעגל. מוטיב משותף לתרבויות שלא נפגשו. |
| 6d | nahí tvád āré nimíṣaś canéśe | כי הרחק ממך אינני שולט אף במצמוץ. | `אָנָה אֵלֵךְ מֵרוּחֶךָ וְאָנָה מִפָּנֶיךָ אֶבְרָח` (תהלים קלט:ז) | equivalent | האדם שאינו יכול להתרחק מן האל; בתהלים כי האל בכל מקום, כאן כי מחוצה לו אין לאדם כוח אף למצמץ. מוטיב משותף לתרבויות שלא נפגשו. |
| 9b | mā́háṃ rājann anyákr̥tena bhojam | אַל אֶזּוֹן אני, מלך, ממה שעשה אחר. | `בֵּן לֹא יִשָּׂא בַּעֲוֹן הָאָב` (יחזקאל יח:כ) | divergence | כל אחד ואחריותו; ביחזקאל עיקרון של צדק, וכאן בקשה מן האל, והדגש הוא שהמשורר לא "ייזון" ממעשה של אחר. מוטיב משותף לתרבויות שלא נפגשו. |
| 10b | svápne bhayám bhīráve máhyam ā́ha | בשינה (על) פחד אמר לי, המפוחד; | `וְחִתַּתַּנִי בַחֲלֹמוֹת וּמֵחֶזְיֹנוֹת תְּבַעֲתַנִּי` (איוב ז:יד) | equivalent | הפחד הבא בחלום; באיוב האל הוא המבעית, כאן האל הוא מי שמגן מפני המבעית. מוטיב משותף לתרבויות שלא נפגשו. |

### Parallels index (RV2.29)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5b | yán mā pitéva kitaváṃ śaśāsá | אשר – כמו אב את המהמר – ייסרתם אותי; | `כִּי כַּאֲשֶׁר יְיַסֵּר אִישׁ אֶת בְּנוֹ יְהוָה אֱלֹהֶיךָ מְיַסְּרֶךָּ` (דברים ח:ה); `וּכְאָב אֶת-בֵּן יִרְצֶה` (משלי ג:יב) | equivalent | האל כאב המייסר את בנו; גם . מוטיב משותף לתרבויות שלא נפגשו; בוודה הבן הוא מהמר, והייסורים באים על הפרה של חוזה עם האֵלִים, לא כחינוך. |
| 5d | mā́ mā́dhi putré vím iva grabhīṣṭa | אַל תתפסו אותי על בני, כמו עוף. | `לֹא תִקַּח הָאֵם עַל הַבָּנִים` (דברים כב:ו); `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | divergence | ציפור, אם וגוזלים, ואיסור לתפוס אחד "על" השני; בדברים איסור על האדם שלא לקחת את האם עם הבנים, וכאן בקשה מן האֵלִים שלא לתפוס את האב על בנו. גם . מוטיבים משותפים לתרבויות שלא נפגשו. |

### Parallels index (RV2.30)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5a | áva kṣipa divó áśmānam uccā́ | זרוק מטה מן השמים, ממרום, את הצור, | `וַיהוָה הִשְׁלִיךְ עֲלֵיהֶם אֲבָנִים גְּדֹלוֹת מִן הַשָּׁמַיִם` (יהושע י:יא) | equivalent | האל המשליך אבנים מן השמים על האויב; מוטיב משותף לתרבויות שלא נפגשו. כאן "הצור" הוא כלי הנשק של אל הסערה (הברד, הברק), שהמשורר מבקש שיוטל על אויביו. |

### Parallels index (RV2.31)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.32)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4c | sī́vyatv ápaḥ sūcyā́chidyamānayā | תתפור את מפעלה במחט שאינה נשברת; | `תְּסֻכֵּנִי בְּבֶטֶן אִמִּי` (תהלים קלט:יג); `וּבַעֲצָמוֹת וְגִידִים תְּשֹׂכְכֵנִי` (איוב י:יא) | equivalent | העובר כמלאכת אריגה או סוכה של האל; כאן מחט ותפירה, בידי אלה של ההולדה. מוטיב משותף לתרבויות שלא נפגשו. |
| 6d | prajā́ṃ devi didiḍḍhi naḥ | צאצאים, אֵלָה, הקצי לנו! | `הִנֵּה נַחֲלַת יְהוָה בָּנִים שָׂכָר פְּרִי הַבָּטֶן` (תהלים קכז:ג) | equivalent | הבנים כמתנה הניתנת מן האל; מוטיב משותף לתרבויות שלא נפגשו. כאן המתנה מוקצית בידי אלה של הירח והלידה, תמורת התקרובת (6c). |

### Parallels index (RV2.33)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4d | bhiṣáktamaṃ tvā bhiṣájāṃ śr̥ṇomi | הרופא שברופאים – אותך – אני שומע. | `מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט); `כִּי הוּא טָרָף וְיִרְפָּאֵנוּ` (הושע ו:א); `כִּי אֲנִי יְהוָה רֹפְאֶךָ` (שמות טו:כו) | equivalent | אל אחד מכה ומרפא; גם  ו־. מוטיב משותף לתרבויות שלא נפגשו: רוּדְרָה שולח את החץ ואת המחלה, והוא גם "הרופא שברופאים"; אבל כאן הריפוי הוא בתרופות (צמחים, מים) שבידו, ולא בדבר או בברית. |
| 6c | ghŕ̥ṇīva chāyā́m arapā́ aśīya- | כמו צל בחום – בלי פגע אשיג נא | `מַחְסֶה מִזֶּרֶם צֵל מֵחֹרֶב` (ישעיהו כה:ד) | equivalent | האל כצל בחום; מוטיב משותף לתרבויות שלא נפגשו, ובשתיהן מתוך אקלים חם. |
| 14a | pári ṇo hetī́ rudrásya vr̥jyāḥ | יעקוף נא אותנו קליע רוּדְרָה; | `לֹא-תִירָא מִפַּחַד לָיְלָה מֵחֵץ יָעוּף יוֹמָם` (תהלים צא:ה) | equivalent | החץ המעופף כמכה הבאה מלמעלה; מוטיב משותף לתרבויות שלא נפגשו. כאן החץ של האל עצמו, והתפילה אליו שהחץ יעבור על פנינו; בתהלים – הגנה מפני החץ. |

### Parallels index (RV2.34)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.35)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2d | víśvāny aryó bhúvanā jajāna | את כל ההוויות – האָרְיָה – הוליד. | — | divergence | האל שמוליד את "כל ההוויות" מתוך המים: בבראשית א:ב–כ המים קודמים לבריאה והחיים נוצרים מהם בדבר האל; כאן אש שבתוך המים היא המולידה. מוטיב משותף לתרבויות שלא נפגשו; ובקורפוס הזה – ריגוודה י 121.7 (`עובר הזהב`, ה"עובר" שהמים נשאו). |
| 4d | dīdā́yānidhmó ghr̥tánirṇig apsú | מאיר – בלא עצים, לבוש־חמאה־מזוקקת – במים. | `וְהִנֵּה הַסְּנֶה בֹּעֵר בָּאֵשׁ וְהַסְּנֶה אֵינֶנּוּ אֻכָּל` (שמות ג:ב) | divergence | אש פלאית שאינה תלויה בדלק הרגיל: בסנה האש אינה אוכלת את העץ, כאן היא בוערת במים "בלא עצים". מוטיב משותף לתרבויות שלא נפגשו, בשני כיוונים שונים. |

### Parallels index (RV2.36)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.37)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.38)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 8c | víśvo mārtāṇḍó vrajám ā́ paśúr gāt | כל מָארְטָאנְדָּה, (כל) בהמה – אל המכלאה הלך; | `תִּזְרַח הַשֶּׁמֶשׁ יֵאָסֵפוּן; וְאֶל-מְעוֹנֹתָם יִרְבָּצוּן` (תהלים קד:כב); `יֵצֵא אָדָם לְפָעֳלוֹ; וְלַעֲבֹדָתוֹ עֲדֵי-עָרֶב` (תהלים קד:כג) | divergence | מחזור היום של האדם והחיה בסדר שקבע האל: בתהלים החיות יוצאות בלילה והאדם ביום, כאן הכל – אדם, חיה ועוף – שב בערב למקומו בתקנת סַוִיטָר. מוטיב משותף לתרבויות שלא נפגשו. |

### Parallels index (RV2.39)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 6b | stánāv iva pipyataṃ jīváse naḥ | כשני שדיים – הגיאו לחיות לנו! | `שְׁנֵי שָׁדַיִךְ כִּשְׁנֵי עֳפָרִים תְּאוֹמֵי צְבִיָּה` (שיר השירים ד:ה) | divergence | דימויי־זוג של איברי הגוף ושל "תאומים": בשיר השירים איברי האהובה מושווים לבעלי חיים בזוגות, כאן – להפך – האלים התאומים מושווים לאיברי גוף בזוגות (ולתיישים "תאומים", 2b). מוטיב משותף לתרבויות שלא נפגשו: השירה של הזוג והתאום. |

### Parallels index (RV2.40)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (RV2.41)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 16b | dévitame sárasvati | האֵלָה שבאֵלוֹת, סַרַסְוַתִי! | `נָהָר פְּלָגָיו יְשַׂמְּחוּ עִיר-אֱלֹהִים` (תהלים מו:ה) | divergence | הנהר שמשמח את עיר האל; כאן הנהר עצמו הוא אלה ואם, "הנהר שבנהרות" – אותו מוטיב, בפרטים שונים. מוטיב משותף לתרבויות שלא נפגשו. |

### Parallels index (RV2.42)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1b | íyarti vā́cam aritéva nā́vam | מניע את קולו, כחותר את הספינה; | `כִּי עוֹף הַשָּׁמַיִם יוֹלִיךְ אֶת הַקּוֹל` (קהלת י:כ) | divergence | הציפור כנושאת קול ודבר: אצל קהלת היא מגלה סוד לאוזני המלך, כאן קולה עצמו הוא הסימן, והמשורר מבקש שיהיה טוב. קריאת עתידות מקול העוף (ה*augurium* הרומי, סדרות הסימנים מן העופות במסופוטמיה) היא מוטיב משותף לתרבויות רבות שלא נפגשו. |

### Parallels index (RV2.43)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
