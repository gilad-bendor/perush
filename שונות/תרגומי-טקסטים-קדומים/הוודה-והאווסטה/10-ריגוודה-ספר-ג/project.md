# 10-ריגוודה-ספר-ג – the Rigveda, Book 3, whole (RV 3.1–3.62)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 3's pre-set terms:
§5.7, its names: the §3.1 rows marked "(RV 3)" – the "(RV 7)" and "(RV 2)" rows apply here too –, its formulas: §8
F12–F14); brief `../translator-brief--vedic.md`. **Books 7 and 2 (`../7-ריגוודה-ספר-ז/`, `../9-ריגוודה-ספר-ב/`) are the
models**: their Hebrew for every lemma they fixed binds this book (`freq`, `lexmap`), and the harmonizations of
2026-11-13 and 2026-11-15 bind it (the Vedic–Avestan cognate pairs; the Rigveda's reserved root חטא, `פשע`, `סליחה`,
`וידוי`, `חרון`: renderings §7.4).

## Scope
The whole of Book 3 (the *maṇḍala* of Viśvāmitra and the Kuśikas): **62 hymns, 617 stanzas, 2,357 pādas** (VedaWeb's
Zurich text; `python3 -I -B ../vedic_tools.py units`). Round 9 run 1 (2026-11-15 →), candidate `iran-india-02` of
`../../translation-program.md` (approved with the program; under the 3,000-line rule of guidelines §1).
- One KEY per hymn, `RV3.1` … `RV3.62`; one annotated file per hymn, `annotated-RV3.<n>.rtl.md`, with its
  `translation--intro-RV3.<n>.rtl.md`; the builder makes `translation-RV3.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order; head: `translation--head.rtl.md`). `RV3` = all of Book 3 and
  `RV3.1-7` = a range, in `verify`, `build`, `freq` and `convert`.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_3.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert RV3` from `rv_book_03.tei`, downloaded 2026-11-15). Line unit: the pāda (`1a`).
  **Counted before the first line:** 2,357 converted rows = the TEI's 2,357 `_zur_` lines; 62 hymns, 617 stanzas.
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova, Renou), **Jamison's commentary on Book III**, `../../sources/Jamison--Rigveda-commentary/III-9-25-26.txt`
  (downloaded and extracted this run; grep `III.33.` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV3.<a>-<b>`; `lexmap '<folded lemma regex>'`; `grep '<Hebrew>' --all`. Lemmas written with `~`
  by Zurich (*dyú* ~ *div*, *rayí* ~ *rāy*, *gó* ~ *gáv*, *gír*, *sá* ~ *tá*) show "—" in `freq`: their Hebrew is fixed
  (`שמים`, `עושר`, `פרה` / `שור`, `שיר`).

## Coordinator's notes (Round 9 run 1)
- Fixed before drafting (2026-11-15): renderings §5.7 (Book 3's key terms), the §3.1 "(RV 3)" names, the formulas F12
  (3.55's refrain), F13–F13d (the Indra refrain), F14–F14d (the Agni refrain), three selftest lines; the tool's Book 3
  keys and project (`P10`), `convert KEY…` (a fresh VM need not hold every TEI), the name rows' "(RV n)" scope by regex.
- **The book's own repetitions:** F12 (22 copies, 3.55.1–22d); the Indra closing stanza F13 (12 copies: 3.30.22,
  31.22, 32.17, 34.11, 35.11, 36.11, 38.10, 39.9, 43.8, 48.5, 49.5, 50.5); the Agni closing stanza F14 (7 copies:
  3.1.23, 5.11, 6.11, 7.11, 15.7, 22.5, 23.5); *índrasya kárma súkr̥tā purū́ṇi* (3.30.13d, 3.32.8a, 3.34.6b). `data`
  shows every identical and similar line in the whole corpus with the Hebrew already given: **the later copy copies the
  first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another – this run's share is one agent at a time; an independent
  fidelity reviewer reads each finished part before the next translator starts):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 3.1–3.7 | 372 | Agni: 3.1 (the birth of the fire in the waters and the plants, 23 stanzas, with the first copy of F14); Vaiśvānara 3.2–3; **the Viśvāmitra Āprī hymn 3.4**; 3.5–7 |
| 2 | 3.8–3.17 | 297 | **the sacrificial post 3.8** (*yū́pa*, *vánaspati*); Agni 3.9–11; Indra and Agni 3.12; Agni 3.13–17 |
| 3 | 3.18–3.29 | 316 | Agni 3.18–25; Vaiśvānara 3.26 (the Kuśikas); 3.27; 3.28 (the cakes of the three pressings); **3.23 and 3.29: the fire churned from the sticks** (Devaśravas and Devavāta; the track of Iḷā) |
| 4 | 3.30–3.33 | 296 | Indra 3.30–32 (the first copies of F13); **Viśvāmitra and the rivers 3.33** |
| 5 | 3.34–3.43 | 355 | Indra 3.34–43 (the Vala myth 3.31 / 3.39; the soma) |
| 6 | 3.44–3.53 | 308 | Indra 3.44–52 (3.48 the newborn Indra drinks the soma; 3.52 the cakes); **3.53: Viśvāmitra, the Bharatas and Sudās, the curses on the Kīkaṭas, Sasarparī** |
| 7 | 3.54–3.62 | 413 | **the All-Gods 3.54–55 ("the one great lordship")**, 3.56–57; the Aśvins 3.58; **Mitra 3.59**; the Ṛbhus 3.60; Dawn 3.61; **3.62 with the Gāyatrī (3.62.10)** |

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV3.1–3.7 (part 1: the first Agni hymns and the Āprī hymn; translator 1, Round 9 run 1)

### Scope
RV 3.1–3.7, 372 pādas: 3.1 (92; the birth of Agni in the waters and the wood; 23d = the first copy of F14), Vaiśvānara
3.2 (60, jagatī) and 3.3 (44, jagatī), the Viśvāmitra Āprī hymn 3.4 (44), 3.5, 3.6, 3.7 (44 each, triṣṭubh; each ends
with F14). Seven annotated files, seven intros, built (`build RV3.1-7`); `verify RV3.1-7 --strict`: no problems (one
listed, justified repeated-line difference, below); `check_bible_quotes.py` on all my files: 0 problems.

### Sources consulted
The Zurich text and morphology (`data`); Grassmann (`gra`) and Monier-Williams (`mw`) for the hapaxes and hard words
(*vijā́van*, *tárus*, *kavíkratu*, *ájma*, *vápuṣa*, √*bhand*); `freq RV3.1-7`, `lexmap` and `grep --all` for every
recurring lemma; after drafting each hymn `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's
commentary on III.1–7 (quoted briefly, with attribution, in the תרגומים / הערות bullets). Adopted from Jamison: 3.1.3/11
*apási* "labour" punning on *áp*; 3.1.6 the oppositional pairs (with *a-nadant* "not speaking falsely" as an alternative,
in the note; the line keeps Zurich's "not eating" with `(?)`); 3.1.9cd instrumentals of separation; 3.1.10 Heaven and
Earth as co-wives, the kindling sticks as "the two human ones"; 3.1.12 *akrá* "foal" `סייח (?)`; 3.1.20 *jánmañ-janman*
"at every birth" (not "generation after generation"); 3.1.20c "the bull" = Indra; 3.2.1 *dhiṣáṇā* = the ritual ground,
and the singular *r̥ṇvati* agreeing with the simile's axe (Zurich has plural: the grammar is overridden in the פירוק);
3.2.2 *cánohita* "delighted"; 3.2.9c *mártye* locative; 3.2.13b *divi-kṣaya*; 3.4.2 *ā́* √*yaj* "win by sacrifice" (the
closed circle of Tanūnapāt); 3.4.5 the unnamed doors; 3.5 the omphalos structure (5–6) and *yádī* = *yád ī* (3.5.8b,
10c; 3.6.3c); 3.7.4b *vaháto vahanti* (no "rivers"); 3.7.10d "the fault that has been committed" (no confession).
From Geldner: 3.1.9b *dhénā* "Stimmen" (= Book 7's `זרמי־דיבור`); 3.4.2d the worshipper "gebettet auf Schmalz"; 3.5.6a
the name R̥bhu; 3.6.2b *práyajyu* "(?)"; 3.7.9a √*vr̥ṣāy* "in Brunst".

### Decisions
- **F14 revised (the Agni refrain; 3.1.23 = 3.5.11 = 3.6.11 = 3.7.11, identical in all four):**
  `רוויה, אַגְנִי, רבת־נפלאות, זכייה בפרות,` / `תמיד־ביותר, לקורא (לך), הבא להצלחה;` / `יהי לנו בן, תולדה, מגופנו;` /
  `אַגְנִי, יהי רצונך הטוב הזה עמנו.` Pādas a and d as pre-set. **b:** *śaśvattamá* has one Hebrew, Book 2's
  `תמיד־ביותר` (2.38.1b), not the pre-set's `תמידית־ביותר`; Geldner and Jamison construe it with *hávamānāya* ("for the
  one who invokes most constantly", cf. 3.62.2), Grassmann and Renou with *saním*: the Hebrew keeps the source's order
  (*śaśvattamáṃ hávamānāya sādha* → `תמיד־ביותר, לקורא (לך), הבא להצלחה`) and both readings. **c:** *vijā́van* is
  "bodily, own" (Grassmann "leibeigen", MW "bodily, own", Geldner "leiblich", Elizarenkova "плоть от плоти"), not
  "fertile" (Renou, Griffith): `מגופנו` for the pre-set `פורה`. Until §8 is updated, each b and c line carries
  `[סטייה מן הנוסחה: …]`. In a, *purudáṃsa* and *śaśvattamá* are masculine like *saní* (not *íḷā*): the Hebrew
  feminine `רבת־` agrees with `זכייה` as well as with `רוויה` (said in the note).
- **The Āprī hymn 3.4:** 8–11 copy RV 7.2.8–11 character for character (and their פירוק Hebrew); 7a copies RV 2.3.7a's
  `שני כוהני־הקריאה האלוהיים, הראשונים`; 3.4.7 = 3.7.8 identical. *vánaspáti* `אדון־היער` (Books 2 and 7; not the §5.7
  draft `אדון העץ`); *sámidh* `זרד`; *barhís* `מצע העשב`; *uṣásā* (the dual "two dawns" = Dawn and Night) `שני השחרים`
  (Books 2 and 7 have the compound *uṣā́sānáktā* `השחר והלילה`); *íḍ* (3.4.3b, the third Āprī element) `רוויה`, as *íḷā*;
  the goddess Iḷā `אִילָה` (3.4.8b, copied). **Tanūnapāt** (3.4.2d, new) translated like Apāṃ Napāt `נכד המים`:
  `נכד־גופו` (*tanū́* `גוף`, *nápāt* `נכד`).
- **Recurring words fixed in this part (new or confirmed):** *jātávedas* `יוֹדֵעַ־הַנּוֹלָדִים` (vocalized first in each
  file); *vaiśvānará* `וַאישְׁוָנָרָה`; *mātaríśvan* `מָאטַרִישְׁוַן`; *viśvā́mitrāḥ* `בני וִישְׁוָמִיטְרָה` (as *vásiṣṭhāḥ*);
  *bhŕ̥gavaḥ* `בני בְּרִגוּ`; *sapátnī* `צָרָה` (vocalized: "troubles"); *siṃhá* `אַרְיֵה` (vocalized against *ā́rya*);
  *vírūpa* `שונה־הצורה`; *vibhā́vasu* `שטוּבו נהרה`, *dhiyā́vasu* `שטוּבו הגות`; *cánohita* `מרוצה`; *tárus* `עליונות`;
  *sā́dhadiṣṭi* `מביא־הזבח־להצלחה`; *apás* (adj., "the workers") `העושים` / `אנשי־המפעל`; *dī́dhiti* `הגיג` (Book 7);
  *kṣáya* `דירה`; *divé-dive* `יום יום`; *dyúbhiḥ* "by days" `בימים` (by sense); *úpāka* `מקרוב`; √*bhand* `הזהיר`;
  √*śamāy* `עמל`; √*vapuṣy* `השתאה` (√*pan* keeps `התפעל`); √*kā* `חשק`; √*ruc* caus. `הנציץ`; √*r̥* `נע`, *sám* √*r̥*
  "join" `חיבר`; √*vañc* `התפתל`; √*daśasy* `חנן`; *pr̥kṣá* `מזין` (Books 7, 2); *párijman* `הסובב־סביב`; *uṣarbúdh*
  `המתעורר־בשחר`; *ghr̥tā́ñc* `עתירת־החמאה`; *yájīyaṃs* `המיטיב־לזבוח יותר` (Book 2).
- **Escapes:** `[היתר שם]` for *bhāgá* "portion" (3.1.19d), *vā́jaśravas* "famed for prizes" (3.2.5b, an epithet, not the
  Kaṭha's father), *róhita* "red" (3.6.6b); `[היתר שער]` for *surétas* (3.1.16c) and *bhū́riretas* (3.3.11d), compounds
  of *rétas* that the 1–3-letter licence rule does not see.
- **Repeated lines:** 3.1.20d = 21a; 3.1.17b ≈ 18d; 3.4.7 = 3.7.8; 3.4.8–11 = 7.2.8–11; 3.6.2a = 7.13.2b; 3.6.6d = 7.17.3b;
  3.6.9d = 2.3.11c – all copied. **One listed difference, justified:** 3.1.21d `וגם בחיבתו הטובה נהיה נא.` against
  RV 10.14.6d `וגם בחיבתם הטובה.` (there the pronoun is plural and *syāma* was rendered in 6c; here it stays in its pāda).

### Open decisions for the user
- 3.1.1ab: Zurich's √*vaś* "you wanted me" (Oldenberg, Geldner) is in the line; Brereton / Jamison take *vákṣi* as the
  -si imperative of √*vah* and the hemistich as Agni's speech (in the note).
- 3.1.6a *ánadant*: "not eating" (Zurich) `(?)`, or Jamison's "not speaking falsely".
- 3.5.5a *ripó ágram* `הקצה … של התלולית (?)` (Jamison "mount"; Geldner "Gipfel der Erde").
- 3.4.7b = 3.7.8b *pr̥kṣá* `מזינים (?)`; 3.7.6c *dhā́nam aktóḥ* `קץ (?) הלילה` (Geldner).

### Progress log
- Drafted hymn by hymn, each saved and `fill` / `verify`-ed as soon as drafted (a scratch generator built each פירוק from
  the Zurich data and my per-word Hebrew); `tr` and Jamison after each hymn, then the תרגומים bullets and fixes.
- **Pass (a) fidelity:** 3.4.2d re-read with Geldner (the worshipper is the ghee-bedded one); 3.2.1d the verb's number;
  3.1.11a `במרחב` removed (*rájas*'s word; the source has only *uraú*); 3.7.2a the gender of *áśvāḥ* noted.
- **Pass (b) consistency:** a lexmap script over my lemmas against Books 7 / 2 changed *ghr̥tā́ñc*, *pr̥kṣá*, *párijman*,
  *uṣarbúdh*, *yájīyaṃs* to the earlier Hebrew; *apārá* (`שאין לה קץ`) and *sakhitvá* (`חברות`) moved off *vícarṣaṇi*'s
  `שאין לו גבול` and *ā́pya*'s `ידידות`; vírūpa one Hebrew in 3.1 and 3.4.
- **Pass (c) Hebrew:** the generated `translation-RV3.<n>.rtl.md` read through; `אֶל` / `אֵלֶּה` vocalized where the
  verifier or the reading needed it.
- `verify RV3.1-7 --strict`: no problems; `check_bible_quotes.py`: 0.

### The text on its own terms
- **Agni born of water and wood, father of himself** (3.1.3–14): the gods find him "in the waters", the seven rivers
  ("not clothed, not naked; old, young; one womb, seven voices") carry "one embryo"; the wood gives birth to him; he
  carries "the embryo of the father", sucks many mothers, finds "his father's udder" – the paradoxes of fire, which is
  born in every kindling and is always the same fire.
- **Every kindling is a birth** (3.1.20–21 *jánmañ-janman*; 3.5.7d "again and again he makes his two mothers new"):
  the ritual repeats the first sacrifice of Manu (3.2.1c "again"; 3.2.15d "placed by Manu").
- **The fire is assembled like a chariot** (3.2.1d): from pieces of wood, by the poets' "insight" – the craft image of
  the sacrifice.
- **Three firebrands** (3.2.9): one placed among mortals "for a meal", two gone to the upper world – the three fires of
  the cosmos.
- **The bringer of fire** (3.2.13, 3.5.9–10): Mātariśvan found the fire hidden and kindled it; Agni himself is called
  Mātariśvan.
- **Agni becomes Mitra** (3.5.4): kindled he is Mitra ("ally"), as Hotar Mitra, as Jātavedas Varuṇa – one god seen
  through his functions.
- **The Āprī as a closed circle** (3.4.2–3): the gods win by sacrifice "Grandson of himself", who is Agni; Agni
  sacrifices first to the Hotar, who is Agni.
- **Euphemism and silence**: the post "sends" the victim "to the gods", the slaughterer is "the Quietener" (3.4.10);
  3.7.10d asks Agni's favour "even for the fault that has been committed" – no confession, no guilt admitted.
- **Riddle speech**: "the track of the bird", "the hide of the grain", "the seven-headed" (3.5.5–6, 3.7.7); bulls and
  mares, the lord who mounts the females (3.7).

### Key parallels
- 3.1.23c (F14) *sūnús tánayo vijā́vā* "a son, offspring, of our own body" – [equivalent] 1 Kgs 8:19 `בִּנְךָ הַיֹּצֵא
  מֵחֲלָצֶיךָ`: the son of one's body as the object of the god's favour, a shared motif of cultures that never met.
- Mātariśvan bringing the hidden fire (3.2.13, 3.5.10) – the culture-hero who brings fire from heaven (cf. the Greek
  Prometheus in the notes), no biblical counterpart: [absent], recorded in the notes only.
- 3.7.10d *kr̥táṃ cid énaḥ … daśasya* – Geldner's "Vergib … die getane Sünde" is a false echo of the Psalms' vocabulary;
  the source asks for favour (√*daśasy* `חנן`), and the Hebrew keeps the Rigveda's reservation (§7.4).

### Proposals for the shared renderings
- **F14 (§5.7, §8):** b `תמיד־ביותר, לקורא (לך), הבא להצלחה` (regex `תמיד־ביותר לקורא \(לך\) הבא להצלחה`), c `יהי לנו
  בן, תולדה, מגופנו` (regex `יהי לנו בן תולדה מגופנו`); a and d unchanged. After the update, remove the
  `[סטייה מן הנוסחה: …]` escapes in 3.1.23bc, 3.5.11bc, 3.6.11bc, 3.7.11bc (the later copies 3.15.7, 3.22.5, 3.23.5
  follow the new text).
- **§5.7 *vánaspáti*:** `אדון־היער` (Books 2, 7), not `אדון העץ`.
- **Tanūnapāt** `נכד־גופו` (translated, as Apāṃ Napāt); a §3.1 row is not needed (no verifier hit), but a §5.7 line is.
- *jániman* "birth" (3.1.4d, 20a) `לידה` beside Book 7's "generations" `דורות` – a split by sense (Jamison: the two
  stems are variants), for the round's harmonization; *dhénā* `זרמי־דיבור` confirmed (Geldner "Stimmen").
- Names in the files (no §3.1 row needed): the Bhṛgus `בני בְּרִגוּ`, `בני וִישְׁוָמִיטְרָה`; *dhiṣáṇā* transliterated
  `דְּהִישַׁנָה` (Book 7's goddess; here the ritual ground, Jamison).
- Splits recorded for the harmonization: √*vañc* `התפתל` (Book 7 `סטה`); √*yam* with *ā́* "rein in" `רוסן` (3.6.8d);
  *yogyā́* `רתמה` (Book 7 `מפעל`); *ágra* "tip" `קצה` (adverb *ágre* `בתחילה`); *sakhitvá* / *sakhyá* both `חברות`.

### Lessons for the guidelines
- **A scratch generator that builds the פירוק from the base's morphology** (form, lemma, decoded grammar, the meaning
  from the earlier files' פירוק, my Hebrew per word) let one translator do 372 pādas with full analysis; its weak points
  were the meanings of homonyms folded together by `lexmap` (√*hr̥* 1/2, √*vas* 1/2/3) – each needs an explicit meaning.
- **A pre-set formula is checked against the dictionaries before its first copy**: F14's *vijā́van* `פורה` followed one
  translation (Renou) against Grassmann, MW and Geldner.
- **Notes must not use the reserved words even as contrast** ("not forgiveness"): the 3.7.10d note was rewritten to
  describe what √*daśasy* is, not what it is not.


### Review (reviewer 1)
Independent fidelity review of all 372 pādas (2026-11-15): every `>` line against the Zurich text and morphology (`data`),
the פירוק against the line, `lexmap` over the part against Books 7 / 2, F14 (four copies identical), the Āprī lines
3.4.8–11 = 7.2.8–11 and 3.4.7a / 3.6.9d against 2.3 (identical), names vocalized at first occurrence (all), the intros
and notes against the lines. The grammar fields of the פירוק match Zurich in every word (checked by script: person,
number, mood, tense, voice); the lines render every content word. **5 lines fixed**, plus the פירוק glosses and the
intros below. After the fixes: `build RV3.1-7`; `verify RV3.1-7 --strict`: no problems (the one justified 10.14.6d
difference); `check_bible_quotes.py`: 0.

| Label | Before | After | Why |
|---|---|---|---|
| 3.1.4c | `נעו אליו הסוסות` | `נעו (אליו) הסוסות` | `אליו` is not in the source (*abhí* is `אֶל` of `כְּאֶל`) |
| 3.2.6c | `מבקשים שירות (וגם) ידידות` | `מבקשים מחווה (וגם) ידידות` | *dúvas* is `מחווה` in Book 7 (7.20.6c, 7.22.4c): a split with no difference of sense |
| 3.2.9d | `הלכו אל קרובן` | `הלכו אל בן־אחוותן` | *jāmí* `אחווה` (7.72.3b, 10.10; here 3.1.11d `בנות־האחווה`); `קרוב` is *bándhu*'s (3.1.3b, 10c) |
| 3.4.1a | `היה קשוב לנו` | `היה לנו` | *bodhi* is √*bhū* (Zurich), `היה` in Books 7 and 2 (7.32.11c, 2.2.11a …); "attentive" (√*budh*) stays in the note |
| 3.5.8d | `הרחיב לו אַגְנִי` | `הרחיב (לו) אַגְנִי` | no dative in the source |

- **The פירוק's meaning field (92 glosses):** the drafting generator had folded homonyms, so the meaning (not the Hebrew,
  not the grammar) was wrong: *sám* "אושר" → "יחד" (9), simile *ná* "לא" → "כמו (בדימוי)" (11), preverb *ví* "עוף" →
  "לרווחה" (9), *íd* "רוויה" → "אכן" (7), √*īḍ* "רוויה" → "להתפלל", √*yā* "אשר" → "ללכת" / *īmahe* "להתחנן", *íṣ*
  "לשלוט" → "רענון", √*iṣ* → "לבקש" / "לשגר", √*nī* "מטה", √*mā* "אל", √*kā* "מה", √*śās* "ישן", √*viś* / √*viṣ* "שבט",
  √*vas* "לחפוץ" (→ "ללבוש" / "לשכון" / "להפציע" by form), √*sā* "הוא", √*ās* "להיות", √*gr̥* (*járasva*) "להלל" →
  "להתעורר", √*śubh*, *áṅga* "אכן", *ápi* "ידיד", *ā́pya* "מימי", *kā́vya* "הקַוְיָה", *bhāgá* "בהגה", *dákṣa* "דקשה",
  *dhā́rā* "חוד", *dhána* "קץ", *vŕ̥dh*, *yuvatí*, *ínvant*; and the nested quotation marks of 3.6.4b.
- **Notes:** 3.7.10d "המשורר אינו מודה באשמה" and "בלשון של חנינה" removed (no confession or pardon vocabulary, even as
  contrast); 3.2.6c, 3.2.9d, 3.4.1a notes follow the new lines.
- **Intros (said what the lines do not):** 3.1 (`אורות השחר` as a gloss of "the ruddy ones", `עטין אביו`); 3.2 (the axe
  quote; Mātariśvan "brought it from heaven" → "set it down, whose dwelling is in heaven"); 3.3 (Manu did not seat the
  Hotar; "the poet pours out his song" → the line's words); 3.4 (`קשובה`; `גיבור`, not `בן`; the quote of 7c); 3.5 (Agni,
  not Ṛbhu, protects "the hide of the grain"; `התבסמות`; Mātariśvan "found" it – not in the line); 3.6 (the ladle as
  "tongue", "the pole of order", "the 33 gods with their wives" – misquotes); 3.7 ("the rays" and "as to one woman" –
  not in the lines; `בן תְּוַשְׁטָר`; "pardon … not confession" removed).

**Rulings left for the coordinator:**
- 3.2.1d *r̥ṇvati* is 3 sg. (Zurich's PL is wrong; Jamison: it agrees with the simile's axe); the Hebrew keeps the plural
  `מחברים` of the sense subject (the priests). Keep, or `מחבר` with the subject left open?
- 3.7.3d `השכין הרחק`: *prá* (3c, already `קדימה`) + caus. √*vas* "made them leave" (Jamison) – `הרחק` renders the
  compound's sense outside `( )`; `(הרחק)` or `הוציא` are the alternatives.
- √*dhā* `העמיד` (3.1.3a, 3.2.5a, 3.2.13b) beside `שם` (the other √*dhā* lines of the part): both are Book 7 / RV 10 renderings of √*dhā*;
  the corpus has not fixed when `העמיד` applies.
- √*vr̥* "cover" `עטוף` (3.3.5c) against RV 10's `כסה` (10.16.7b, 10.18.11d) – the corpus is mixed already.
- The §11.29 splits (*jániman*, √*vañc*, *yogyā́*, *ágra*) were left as merged.

## RV3.8–3.17 (part 2: the sacrificial post, Agni, Indra and Agni; translator 2, Round 9 run 1)

### Scope
RV 3.8–3.17, 297 pādas: **3.8 the sacrificial post** (44; triṣṭubh with anuṣṭubh 3 and 7), Agni 3.9 (36; the fugitive
fire), 3.10 (35; uṣṇih), 3.11 (27; gāyatrī), **Indra and Agni 3.12** (27; gāyatrī), Agni 3.13 (28), 3.14 (28), 3.15 (28;
7 = F14), 3.16 (24), 3.17 (20). Ten annotated files, ten intros, built (`build RV3.8-17`); `verify RV3.8-17 --strict`: no
problems (one listed, justified repeated-line difference, below); `check_bible_quotes.py` on all my files: 0 problems;
`selftest`: 0 failures.

### Sources consulted
The Zurich text and morphology (`data`); Grassmann (`gra`) and Monier-Williams (`mw`) for the hapaxes (*anehás*,
*nicirá*, *tr̥ṣṭá*, *vihavá*, *kṣetrasā́dhas*, *apiśarvará*, *śīrá*, *śreṇiśás*, *tośá*, *kavichád*, *nīthāvíd*,
*aptū́rya*, *bárhiṣṭha*, *sahovŕ̥dh*); `freq RV3.8-17`, `lexmap` and `grep --all` for every recurring lemma; after
drafting each hymn `tr` (Griffith, Grassmann, Geldner, Elizarenkova, Renou) and Jamison's commentary on III.8–17 (quoted
briefly, with attribution). Adopted from Jamison: 3.8.4 (Kane: the image of the Upanayana boy "led up"), 3.8.6 (the
number disharmony *vaḥ* / *vánaspate*), 3.8.10cd (the gods, not the posts, are the subject of *avantu*: left open in
the Hebrew), 3.9.2a (*vanā́* instr. of *ván*), 3.9.4b (*saścát* "parched places" – in the note; the line keeps Book 7's
`רודפים`), 3.9.5d (*mathitá* "churned" and "stolen"), 3.10.6b (*yáto jā́yate* "as soon as he is born"), 3.11.3c
(*taráṇi*: advancing to the goal), 3.11.5c (*tū́rṇi* "advancing"), 3.13.2ab (two *yásya* clauses hanging off *ŕ̥tāvā*),
3.13.3b (*áthā hí ṣáḥ* a separate clause), 3.14.4d (*kṣitī́ḥ* the goal of *abhí*, "(like) the sun to men"), 3.15.3d,
3.15.4c, 3.16.1d, 3.17.3b (*uṣásaḥ* ablative: "births from Dawn", against Zurich's NOM.PL – the פירוק says so), 3.17.5
(the earlier, better Hotar). From Geldner: 3.8.10b *caṣā́la* "Knauf"; 3.9.8b *śīrá* "scharf"; 3.12.8 *taviṣá* "Kräfte".

### Decisions
- **3.8, the post:** *yū́pa* is not in the hymn; the title and the notes say `עמוד הזבח` (renderings §5.7). *vánaspáti*
  `אדון־היער` (Books 7, 2, 3.4); *sváru* `יתד־הזבח` (Book 7, 7.35.7c) for the posts in a row, with Jamison's "chip" in
  the note; *svádhiti* `גרזן`; √*añj* `קישט` (never `משח`; the notes say "מורחים בחמאה", not "מושחים"); √*śri* active
  `השעין`, middle `נשען` / imperative `הִשָּׁעֵן` (*út śrayasva*); √*mi* `קבע`; √*vr̥śc* `כרת`; √*takṣ* `חישל`;
  *várṣman* `גובה`; *súmiti* `מדידה טובה` with Zurich's √*mā* `מדד` (the √*mi* reading in the note); *caṣā́lavant*
  `בעל־טבעת־הראש`; *haṃsá* `אווז` (renderings §11.28); *śreṇiśás* `בשורות`; √*yat* (middle, "take one's place in line")
  `מתיישר` as 7.79.2b; *śŕ̥ṅga* / *śr̥ṅgín* `קרן` / `בעל־קרניים`; *vihavá* `קריאה מתחרה`; *śatávalśa* /
  *sahásravalśa* `בעל־מאה־ענפים` / `בעלי־אלף־ענפים`; *devayā́* `המתחנן לאלים` (7.68.4a), kept apart from *devayánt*
  `שוחר־האלים` (Jamison 3.8.5–6).
- **The fugitive fire (3.9):** *ván* `עץ`; *nivártana* `חזרה`; √*mr̥ṣ* `שכח` (*pramŕ̥ṣe* `לשכחה`); *tr̥ṣṭá* `מחוספס`;
  *nicirá* `קשוב`; *saścát* `רודף` (Book 7); *siṃhá* `אַרְיֵה`; *tiróhita* `המוסתר`; √*math* `נחבט` (the §5.7 pre-set
  `חבט` for the fire-churning; "stolen" in the note); *apiśarvará* `לפנות בוקר`; *śīrá* `חד`; *sudī́diti* `טוב־ההארה` =
  *sudītí* (Grassmann: the same word); *anehás* `שאין בו פגם`; *suprátūrti* `טוב־הפריצה`.
- **Indra and Agni (3.12):** *indrāgnī́* `אִינְדְּרָה ואַגְנִי` (Book 7); *nábhas* `ערפל` (7.97.6d); *iṣitá* `משוגר`;
  *kavichád* `שמחי־המשוררים` (Grassmann's sense; the line carries `[היתר שער: שמחי …]`: the חי gate reads שׂמחי as
  ש־מ־חי); *tośá* `מטפטף` (Jamison "drip"); *sajítvan* `המנצח־יחד`; *vājasā́tama* `הזוכה בפרס ביותר`; *ukthín*
  `בעל־האמירות`; *nīthāvíd* `יודע־הלחנים` (`נעימה` is *sā́man*'s); *dāsápatnī* `נשות הדָּאסָה` (1.32.11a); *taviṣá*
  `העצומים`; *aptū́rya* `זריזות`; √*bhūṣ* `התייצב`; *tr̥mpatām* 3rd dual (Zurich: 2nd; the פירוק says so).
- **Recurring words fixed or confirmed:** *śárman* plural `מחסות` (2.25.5b; 3.13.4a, 3.15.5a); *ānuṣák* `בסדר רצוף`;
  *áṣāḷha* `שאין לגבור עליו`; *ásredhant* `בלי כשל` (7.59.6c); *devávīti* `רדיפת־האלים`; *ghr̥tánirṇij*
  `לבוש־חמאה־מזוקקת`; *kavíkratu* `בעל רצון־המשורר`; *supráṇīti* `טוב־ההנהגה` (its precedent; *sunīthá* has the same
  Hebrew since 2.8.2a – an older collision, kept in 3.8.8a `טובי־ההנהגה`); *vyùṣṭi* `בהפציע`; *yajátha* `לזבוח`;
  *dhárman* `יסוד`; *yájamāna* `הזובח`; *śáṃ yóḥ* `לאושר ולרווחה`; *bárhiṣṭha* `הרם ביותר` (superlative of *br̥hánt*);
  *várṣiṣṭha* `הגבוה ביותר`; *tuvidyumná* `עצום־ההדר` (`רב־הדר` is *dyumánt*'s); *tokávant* `רב־עוללים` (*tóka* `עולל`);
  *sahásravant* `רב־אלפים` (`בעל־אלף` is *sahasrín*'s); *puṣṭimánt* `רב־שגשוג`; *sudógha* `טוב־החליבה`; *suśárman*
  `טוב־המחסה`; *vidyúdratha* `בעל־מרכבת־הברק`; *śocíṣkeśa* `בעל־שיער־הבערה`; *náma-ukti* `אמירת־הקידה`;
  *uttānáhasta* `פשוטי־הידיים`; *vandhúra* `מושב־הרכב`; *adroghá* `שאין בו שקר`; *agótā* `חוסר־פרות`; *avī́ratā*
  `חוסר־גיבורים`; *ājā́ni* `הולדה` (not `לידה`, *jánman*'s); *sáttar* `היושב`; *śévr̥dha* `מגדיל־הנועם`; *vr̥trahátha*
  `הריגת־וְרִטְרָה`; *cákri* `עושה`; *sāsahí* `גובר`; *vánitar* `זוכה`; √*pruṣ* `זילף`; √*dru* `רץ`; √*tij* (middle)
  `מושחז`; *bodhi* = √*bhū* `היה` (3.15.2b) and √*budh* `התעורר` (3.14.7c), as Zurich has them.
- **Splits by sense (recorded):** *aktú* "ointment" `קישוט` (3.17.1b, with √*añj*) beside Book 7's "night" `לילה`;
  √*yat* `מתיישר` (3.8.9a, as 7.79.2b) / `נאבק` (3.16.4c, as 7.76.5b); *purástāt* with a genitive `לפני` (3.8.2a) beside
  the adverb `מלפנים` (3.8.9c).
- **Repeated lines:** 3.11.4c = 7.16.12b (copied); 3.8.9d ≈ 7.47.3b and 3.16.2a ≈ 7.18.25a (copied, changing only what
  the source changes); 3.15.7 = F14 (3.1.23, character for character); **one listed difference, justified:** 3.17.4d
  `עשו האֵלִים טבור האלמוות.` against 2.40.1d `(אותם) עשו …` – there the object is supplied in brackets, here it is the
  `אותך` of 4c. First copies for later parts: 3.8.3d (= 3.24.1d), 3.10.9d (= 3.29.12d), 3.9.9 (= 10.52.6); similar:
  3.12.7c ~ 3.37.9c, 3.14.4a ~ 3.18.4a.

### Open decisions for the user
- 3.8.3c *súmitī mīyámāno*: Zurich's √*mā* "measured with good measure" (Grassmann) in the line; √*mi* "well fixed"
  (Geldner, Renou) in the note.
- 3.9.5d *mathitám* `שנחבט` ("churned") – Renou and Jamison prefer "stolen"; the Hebrew cannot hold both.
- 3.11.3c *árthaṃ hy àsya taráṇi* `כי (אל) יעדו (הוא) חש` (Jamison's "it is for him to advance to his goal").
- 3.12.3a *kavichád* (hapax): "delighting in poets" (Grassmann) against "appearing as poets" (most) – `שמחי־המשוררים`.
- 3.17.3b *ājā́nīr uṣásaḥ*: Jamison's ablative (`שלוש הולדות – מן השחר`) against Zurich's NOM.PL / Geldner's "mothers".
- 3.14.4d: Jamison's reading against the causative morphology (`מפיץ (אורו)`).

### Progress log
- Drafted hymn by hymn, each saved, `fill`-ed and `verify`-ed as soon as drafted, with a scratch generator that builds
  each פירוק from the Zurich data and my per-word Hebrew. **The meaning glosses are keyed on the exact Zurich lemma**
  (with its homonym number: √*vid* 1 "find" / 2 "know", √*pā* 1 / 2, *náva* 1 / 2), from a table I wrote and checked
  lemma by lemma; *ná* has no default (each occurrence gets "לא" or "כמו (בדימוי)" by hand) – the review's 92 folded
  glosses could not recur. `tr` and Jamison after each hymn; then the תרגומים bullets and the fixes.
- **Pass (a) fidelity:** 3.9.8a `נסכו לטוב־הטקס` (Agni the recipient, not the libation); 3.10.3c `שם (לו)` and 3.17.1b
  `(הוא) מקושט` (added pronouns in brackets); 3.13.7a `(טוב)` removed; 3.8's heading without `משיחת`.
- **Pass (b) consistency:** a lexmap script over my lemmas against Books 7 / 2 / 3.1–7 changed *ānuṣák*, *áṣāḷha*,
  *ásredhant*, *devávīti*, *devayā́*, *ghr̥tánirṇij*, *kavíkratu*, *supráṇīti*, *vyùṣṭi*, *yajátha*, *várṣman*, the
  plural of *śárman* to the earlier Hebrew; then every gloss of the part listed and re-read (6 corrected: *devayā́*,
  *nítya*, *anamīvá*, *amŕ̥ta* n., *yátas*, √*prath*).
- **Pass (c) Hebrew:** the generated `translation-RV3.<n>.rtl.md` read through; `אֵל` / `אֵלִים` / `אֵלֶּה` / `אֶל` / `אַל`
  vocalized; names vocalized at their first occurrence in each file.
- `verify RV3.8-17 --strict`: no problems; `check_bible_quotes.py`: 0; reserved words of §7.4 / §7.1 grepped in notes
  and intros: none.

### The text on its own terms
- **The post is a tree that is reborn** (3.8): anointed "with divine honey", dressed and wrapped "like a young man",
  "born, he is born in the brightness of days" (5a), and at the end asked to sprout a hundred branches – the felled tree
  stays alive in the rite (11ab).
- **The posts become gods** (3.8.6c, 9d): "they, the gods, the posts standing", "the gods go to the gods' fold"; they
  stand like a flock of geese in a row and look like the horns of cattle (9a, 10a).
- **The fugitive fire** (3.9.2–6): Agni, "delighting in the wood", left for his mothers the waters; the gods found him
  "in the waters, like a lion"; Mātariśvan led him back – and the poets remind him that he came back before.
- **3,339 gods** served Agni at the first rite, sprinkled ghee and strewed the grass (3.9.9 = 10.52.6).
- **The fire moves forward**: "an advancing chariot, ever new" (3.11.5c), "speeding to his goal" (3.11.3c), mounting the
  ritual places as a chariot (3.14.1a, 3.14.3d).
- **Indra and Agni as one dual god** (3.12): one name in the dual, "victorious together", who shook the ninety forts
  "in one deed".
- **Night and its dangers** (3.15): the fire that burns on "in the black ones" drives off the rakṣas's diseases.
- **What they feared** (3.16.5): "poverty, lack of heroes, lack of cows, reproach" – the list of a herdsman's misfortunes.
- **A better sacrificer than Agni** (3.17.5): an earlier Hotar, "who sacrificed better", whose "foundation" Agni must
  follow – the rite repeats a first pattern (1a "according to the first foundations"; 2d "as at Manu's").
- **Three lives, three births** (3.17.3): the three fires kindled at dawn.

### Key parallels
- 3.8.11a – [divergence] Job 14:7 `אִם-יִכָּרֵת וְעוֹד יַחֲלִיף`: the felled tree that sprouts again; in Job a hope the
  tree has and man lacks, here a blessing that passes from the post to the sacrificer's people – a shared motif of
  cultures that never met.
- 3.14.5b – [equivalent] 1 Kgs 8:22 `וַיִּפְרֹשׂ כַּפָּיו הַשָּׁמָיִם`: hands spread out in prayer and offering.
- 3.15.1c – [equivalent] Ps 91:2, 5–6 (`מַחְסִי`, `מִפַּחַד לָיְלָה`, `מִדֶּבֶר בָּאֹפֶל`): the god as shelter from
  the diseases and demons of the night; *śárman* is `מחסה` in every book, so the Hebrew meets the Psalm's word – said in
  the note.

### Proposals for the shared renderings
- **§5.7 √*math* / √*manth*:** `חבט` confirmed in 3.9.5d (*mathitá* `שנחבט`), with "stolen" in the note.
- **New recurring words** (list above under Decisions): *sváru* `יתד־הזבח`, *caṣā́la* `טבעת־הראש`, *vihavá*
  `קריאה מתחרה`, *ájāni* `הולדה`, *taviṣá* `עצום`, *bárhiṣṭha* `הרם ביותר`, *tuvidyumná* `עצום־ההדר`, *devayā́*
  `המתחנן לאלים`, *śárman* pl. `מחסות`.
- **Tool (for the coordinator):** the `חַי` gate reads `שמחי` (*śmēḥē*, "glad") and `שבחי` ("my praise") as ־חי:
  exempt the forms of שָׂמֵחַ and שֶׁבַח (as `לשאול`, `מבקשת`); 3.12.3a carries a `[היתר שער]` meanwhile, and 3.15.2d was
  rephrased `על השבח שלי`.
- **Split for the round's harmonization:** *sunīthá* (2.8.2a, 3.8.8a) and *supráṇīti* (Book 7, 3.15.4d) share
  `טוב־ההנהגה`; *aktú* "ointment" `קישוט` / "night" `לילה`.
- **For translator 1's file (not changed):** 3.1.23a's gloss of *íḍā* reads "אילה" (the goddess's name) for the common
  noun; 3.15.7a has "רוויה, שפע".

### Lessons for the guidelines
- **Key a scratch generator's meaning glosses on the exact Zurich lemma, homonym number included, and give the
  look-alike particles no default**: a per-lemma table written and read through once (≈ 500 lemmas for 300 pādas) costs
  less than a review of folded glosses, and *ná* forced per occurrence cannot fall back to "לא".
- **Run the consistency script before the intros**: twelve of my new words had a Book 7 / Book 2 precedent that only
  `lexmap` showed (*ásredhant* `בלי כשל`, *devayā́* `המתחנן לאלים`, *vyùṣṭi* `בהפציע`).

### Review (reviewer 2)
Independent fidelity review of all 297 pādas (2026-11-16): every `>` line against the Zurich text and morphology
(`data`), word by word beside the פירוק (script: every Hebrew word of each line is covered by a פירוק rendering or
stands in `( )` – no unbracketed additions found beyond 3.8.4a's unglossed *ā́*); every meaning gloss of the part
listed by lemma (511 pairs) and read against the lemma; `lexmap` over every part-2 lemma marked "more than one Hebrew"
against Books 7 / 2 / part 1 (all inflectional variants, or splits already recorded); F14 (3.15.7 = 3.1.23) and the
copied lines identical; names vocalized at first occurrence; §7.4 / biblical idiom grepped in lines, notes and intros
(none in lines; one `משיחת` in a note); the ten intros and ten "ההקשר" paragraphs against the lines. The translator's
grammar fields match Zurich throughout. **2 lines fixed**, plus glosses, notes and intros below. After the fixes:
`build RV3.8-17`, `build RV3.7`; `verify RV3.1-17 --strict`: no problems (the two justified differences, 10.14.6d and
2.40.1d); `check_bible_quotes.py`: 0; `selftest`: 0 failures.

| Label | Before | After | Why |
|---|---|---|---|
| 3.8.11c | `אתה, אשר הגרזן הזה, המושחז,` | `אותך, אשר הגרזן הזה, המושחז,` | *yáṃ tvā́m* is accusative (the object of *praṇinā́ya*, 11d) |
| 3.12.6b | `של נשות הדָּאסָה ניערתם` | `נשות הדָּאסָה, ניערתם` | *dāsápatnīḥ* is an accusative adjective of *púraḥ* ("having the Dāsa as lord"), not a genitive: "forts of the Dāsa's wives" misread it; `נשות הדאסה` (1.32.11a) kept, in apposition; the note says so |

- **פירוק:** 3.8.4a *ā́* rendered `הנה` (was "–", though the line has `הנה`); 3.9.1d *anehás* gloss "שאין לו משווה"
  → "שאין בו פגם, ללא דופי" (the line's sense); 3.14.3c *sīm* "אותה" → "אותו, אותה"; 3.17.1b *aktú* "משחה, קישוט" →
  "קישוט, מריחה" (√*añj* never `משח`, glosses too); **3.7.5d** *íḷā* "אילה" (the goddess's name) → "רוויה" (the
  common noun; the goddess `אִילָה` stays only in 3.4.8b). 3.1.23a already reads "רוויה".
- **Headings and notes:** 3.11's first section `(1–3)` → `(1–4)` (stanza 4 had no heading); 3.8 "ההקשר" `משיחת
  העמוד` → `מריחת העמוד`; 3.12.6b note rewritten for the apposition.
- **Intros / "ההקשר" (said what the lines do not):** 3.8 "על פסגת הארץ" → "על גובה הארץ" (3b); 3.9 "מבקשים שלא ישכח
  לחזור" → the line's words (2c is a statement, open to two readings); 3.10 the imperative *bharata* and the
  imperative *vardhantu* were told as facts; `שם לו` → `שם (לו)`; 3.11 "אל האלים" (not in 3c / 5c); 3.12 "נגלית באזורי
  האור" (9c says only `נגלתה`; the realms are 9a's object) and the forts; 3.13 "מחסים" → `מחסות`, "מן השמים ומן המים"
  → "בשמים", "במים" (4d locatives), "אושר מן הבערה" → "יבער לאושר"; 3.14 "שיטעם" → "שיטעים" (*svada* causative sense);
  3.15 "להעניק מחסות" (no such verb: *vakṣi* "convey"), the imperatives *bhāhi* / *néṣi* / *párṣi* told as facts, "כשתי
  פרות" and "כמי שמעניק את שתי המחצות" (5d / 6b depend on *pīpaya* "make swell"); 3.16 "אל העושרים" (2b: the riches
  are *in* him), "עוני … וחרפה" → the line's `דלות` … `גנאי`; 3.17 "בשביל הארץ ובשביל השמים" (Jamison's
  alternative, not the line: `את כהונת־הקריאה … של הארץ`), the misquote "לבוש־החמאה־המזוקקת", and "אַגְנִי זובח כמו
  (אצל) מנו" (2d is the imperative `הַעֲבֵר`).

**Rulings left for the coordinator:**
- 3.15.2c *nítya* `משלך` against Books 7 / 2 `קבוע` (7.88.6a, 2.2.11d, 2.27.12b): kept as a split by sense ("one's
  own offspring", Grassmann *eigen*), but 7.88.6a's *āpír nítyaḥ* is arguably the same sense – harmonize one way.
- 3.12.4a `את שני המטפטפים` and 3.14.3a `שני השחרים`: `שני` renders the dual outside `( )` (as 3.4.6); keep as the
  book's dual convention, or `(שני)`?
- 3.8.10c *vāghádbhiḥ* (instrumental) `שומעים לאנשי־הטקס` – Geldner's sense; the case relation is the note's
  ("(the call) by the priests"). The gloss "כוהני הפולחן" differs in wording only from the Hebrew `אנשי־הטקס`.
- 3.12.7b *úpa* is rendered only inside `(אליכם)`.

## Parallels index
(Generated at the end from the translators' sections and the הקבלה bullets; see `../parallels-index.md`.)
