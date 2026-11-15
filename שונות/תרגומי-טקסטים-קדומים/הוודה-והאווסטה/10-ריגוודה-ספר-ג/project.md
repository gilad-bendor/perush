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


## Parallels index
(Generated at the end from the translators' sections and the הקבלה bullets; see `../parallels-index.md`.)
