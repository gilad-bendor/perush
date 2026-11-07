# Project 9: the Instruction for Merikare (`המוסר למריכרע`)

## Scope (Round 6 run 2, 2026-11-06)
The whole Instruction for Merikare on its main witness, pPetersburg 1116A verso (18th dynasty, c. 1450 BCE; the text
composed under the Herakleopolitan kings, c. 2050 BCE), KEY `MR`: all 149 lines (labels `E1`–`E149`: the n-th line of
the papyrus, Helck's E-numbering). Its closing hymn to the creator (E 130–138) was translated in Round 4 run 3 (project 2,
KEY MK, from the fifth-day dossier's E 130–136): **MR's E 130–138 are MK's `>` lines, byte for byte** (`verify MR`), and
MK's E 130–136 are the dossier's (`verify MK`); a revision is applied to all copies at once by the coordinator. Project 2
keeps its MK file (the creation texts read together); its intro points here.

## Base text
AED-TEI (TLA 2018, CC BY-SA 4.0) `../../sources/AED-TEI/Merikare--pPetersburg-1116A/` (YZSISQLOINELTMJDPXQ45O5IUU); the
other witnesses pMoscow 4658 and pCarlsberg VI (`egypt_tools.py data MR --wit`). Rank 3: the TLA's German (`tr MR`) after
drafting; Quack 1992, Lichtheim, Parkinson, Allen only from memory, never quoted.

## What to look for (`../renderings.md` §12.5; a brief says "look for", never "translate as")
- The king's teaching on speech and rebellion (E 1–50): "the tongue is a king's sword; speech is stronger than any
  fighting" – Prov 15:1, 25:15, 18:21.
- **The judges of the dead** (E 53–57): "do not trust in the length of years: they see a lifetime as an hour; a man
  remains after death, his deeds heaped beside him" – Ps 90:4, Eccl 12:14.
- The Asiatic (E 91–98, `הָעַאמוּ`): the "wretched Asiatic" who does not stay in one place.
- The king's confession of the destruction of Thinis (E 69–?, E 116–123): a deed repaid by its like.
- **"More acceptable is the character of the straight-hearted than the ox of the evildoer"** (E 128–129): 1 Sam 15:22,
  Prov 21:3, 15:8, Hos 6:6.
- The hymn (E 130–138, done): mankind as the god's flock, made in his image (Gen 1:26–27, 2:7).

## MR E1–E149 (Round 6 run 2, translator 11)

### Scope
All 149 lines of pPetersburg 1116A verso (`E1`–`E149`), in 19 `## ` sections: the title and the rebel / agitator
(E1–E29, heavily damaged: E1–E21 are mostly `[…]` and the editor's restorations, partly after pMoscow 4658), good
nature, the power of speech and the written ancestors (E30–E35), the king's duties (E36–E50), the tribunal of the dead
(E51–E56), youth, army, temples and monuments (E57–E66), the civil war, the tombs and Thinis (E67–E79), the North and the
eastern frontier (E80–E89), the wretched Asiatic and the eastern fortress (E90–E103), Herakleopolis and the temple
(E104–E111), the king's confession and "a blow is repaid by its like" (E112–E122), the hidden god, the house in the West
and the loaf / character of the upright (E123–E129), the hymn E130–E136 and the last words E137–E143 (E130–E138 copied
byte for byte from project 2's MK, apparatus adapted), the colophon of the scribes Khaemwaset and Mah (E144–E149).

### Sources consulted
The base through `egypt_tools.py data MR` (AED-TEI), the witnesses through `--wit` (pMoscow 4658, pCarlsberg VI: used for
E17–E19, E22, E31, E119, E121, E126, E139); the TLA German (`tr MR`) read after each of the five drafted saves (E1–E35,
E36–E55, E56–E89, E90–E129, E139–E149) and quoted in the תרגומים bullets; the corpus lexicon by lemma (a scratch
lemma → Hebrew map built from every annotated file's פירוק bullets, as guidelines §5.2 suggests); MK's annotated file as
model and source of E130–E138. Lichtheim and Quack only from memory, by name, never quoted.

### Decisions
- **Speech:** md.t `דבר` (corpus); mdw.tj "talker" `דברן`; j:tꜣḥ / tꜣḥ "agitator" `מסית`; ẖnn "trouble-maker" `איש־המהומה`
  (from ẖnnw `מהומה`, CH); shꜣ "agitate" `התסיס`, shꜣ (noun) `תסיסה`; ns `לשון`; ḫpš "strength / khepesh-sword" `עוז`
  (E31 "עוזו של מלך – לשונו"; nb-ḫpš `בעל־העוז`; AM's ḫpš "arm" `כתף` – a split by sense); qn "strong" `תקיף`, nḫt `חזק`;
  ꜥḥꜣ (noun) `קרב` (SI), ꜥḥꜣ (verb) `נלחם`.
- **Justice and punishment:** sfn "be lenient" `ריחם` / `הרחמן`; ḫsf split by sense – "punish" `ייסר` (WE 12,10), "ward off"
  `הדף` (MK E135, E51, E88, E123); nmꜥ "be partial" `נטה`; ḏbꜣ.w "payment" `תשלום` (`שֹׁחַד` only in the apparatus); hp
  `חוק`; nf "wrong" `זדון` (`עָוֶל` stays jsf.t's); sqr "smite to death" `קטל`; srḫ / srḫy `האשים` / `מאשים` (MK E138);
  zꜣw.tj `שומרים`; ḏꜣḏꜣ.t `ועד`, wḏꜥ `שפט` (NU), sꜣr.yw `הנצרכים`, mꜣr `המדוכא`; n.t-ꜥ `הנוהג`.
- **The poor:** šwꜣ.w `רָשׁ` (vocalized; PT486's šwꜣ `ייוורש` is the same root; AM 1× `עני` – see Proposals), twꜣ `עני`,
  ẖsj `עלוב` (the "wretched Asiatic"), ꜣh(w) `סובל`, mn (noun) `החולה`.
- **People and groups:** mr.w "dependents, following" `חבורה` (TLA "Angehörige"; SI `ואנשיו` – `אנשים` is kept for
  rmṯ + suffix); hnw `תומכים`; ḏꜣm.w `נוער`; šw.t `חיל־העזר?`; ṯꜣz.t `גדוד`; ẖr.w `משפחות`; zmꜣ.yt `כנופיה`; zꜣ-z
  `בן־איש` / nḏs `האיש הפשוט`; wꜥb "free man" `בן־חורין` (wꜥb "pure" keeps `טהור`, E102); pḏ.tj `ברברים` (SI),
  pḏ.t `שבט־הקשת`; ꜥꜣm.w `הָעַאמוּ` (§11.2).
- **Character and heart:** jwn `טבע` (AM's "colour" `צבע` – split by sense, E30, E39); ꜥqꜣ `ישר` (AM), ꜥqꜣ-jb
  `יושר־הלב` (E45) / `ישר־הלב` (E128) – **not** the `אמת` family: the base has ꜥqꜣ, not mꜣꜥ; mtj `דיוק`, mtj.t-jb `דיוק־לב`;
  wꜣḥ-jb `אריכות־הלב` / `אריך־הלב`; qd.w "characters" `המידות` (§11.3); bjꜣ.t "character" (54410) `תכונה` (E145, E148).
- **E128 bj(ꜣ).t:** the TLA lemmatizes it as 54150 "flat loaf" (its translation offers "Verhalten" in brackets), the same
  spelling as the colophon's 54410 "character"; rendered `ככר?` after the base's lemma, the "character" reading in the
  apparatus and the footnote (open, below). jwꜣ `שור`; šzp "acceptable" `מקובלת`; ꜥꜣb.t `מנחה` (TB's ꜥbt); no `זֶבַח`.
- **Monuments and cult:** mn.w `אנדרטה` (CH, NU10); swꜣḥ `הֶאֱרִיךְ (ימי)`; smnḫ `שכלל` (CH); sjqr `שִׁפֵּר`; wdḥw
  `שולחן־הקרבן` (WE; not `מִזְבֵּחַ`); ꜥbꜣ `אבן־הקרבן`; jmn.yt `התמיד`; ḫm `דביר` (MT); rʾ-pr `היכל` (NU5); sštꜣ `רז`
  (`סוד` is sḥ's); twt `דְּמוּת` (gated, E66, E107); ꜥq.w `מנות` (E64, WE) / `פת` (E92, AM).
- **Death:** mnj "moor = die" `עגן` (E54 "אחרי העגינה"; E60 "מעוגן בשדות", the same lemma "endow" kept in one Hebrew; E87
  mnj.t `יתד־העגינה`); spp `נותר` (CH); sp "deed" `מעשה` (E54, E108, E118) beside sp "matter" `עניין` (E2, E25, E69, AM):
  a split by sense; ꜥḥꜥ.w "heap" `ערמה` (AM); ꜥḥꜥw "lifetime" `משך־הימים` (AM); nḥḥ `נצח`.
- **Verbs:** thj "stray" `סטה` (BD 125's `עבר על` – split by sense); snj `השתווה` ("emulate", E34, E35, E89) / `עבר`
  (E17, E122, AM); šdj `קרא` / `גודל` (E50) / `חפר` (E97) – one TLA lemma, three verbs; ḥss "favour" `העדיף`; jṯj `תפס`;
  ḥḏj `הזיק` everywhere (also passives `ניזוק`, `תינזק`); ꜥḏ "hack up" `ניתץ`; wšš `החריב`; sẖn `פירק`; swst `שם לאין`;
  sꜥsꜥ `קלקל`; ḏbꜣ "repay" `נפרע`; sḫj "strike" `חבטה`; mḏd `שזור?`; jmn "hide" `הסתיר`; stn `ייחד`; ḥn `סדר` (E13,
  E73, E129 `מסודרים`); qd "sleep" `נם` (AM); fḫ `ניתק` (SI); bwj "abhor" `תיעב` (from bw.t `תועבה`).
- **Places and names:** Ḫty `חֶתִי`; Tnw `תְּנִי`; Km.t `כֵּמֶת`; Tꜣ-mḥw `ארץ־הצפון`; ꜥ-rsj `חבל־הדרום`; Nn-nsw.t `חָנֵס`;
  Rʾ-ꜣw `טוּרָה`; Mdnjt `מֶדֶנִית`; Km-wr `השחור־הגדול` (PT600); Ḏd-s.wt `גֶ׳דְ־אִיסוּת`; Wꜣ.t-Ḥr `אורח־חוֹרוּס`; Ḥw.t-šnw
  `בֵּית־שֶׁנוּ`, Ḥw.t-bnw `בֵּית־בֶּנוּ`, Bꜣqꜣ `בָּאקָא`, ꜥꜣḏ.wj `עַאגֶ׳וִי`, Mqj `מְקִי`; Ḫꜥj-m-Wꜣs.t `חַעֶמְוָאסֶת`, Mḥ
  `מַח`; jtrw `יְאֹר` [loanword] (E125); msḥ `תִּמְסָח` (E96).
- **Rejected:** `אציל` for šps (NU3's sꜥḥ) → `נדיב`; `מבצר` for ḫtm "fortress" (TB's bḫn) → `מעוז`; `ארז` for mrw (TB's ꜥš) →
  `ברוש`; `מגבולות` for r-ḏr.w (the `גבול` gate rightly refused it) → `מקצה`; `מזבח` for wdḥw / ꜥbꜣ.

### Open decisions for the user
- **E119** – the base `ḫpr.n js m jri̯.t.n=j` ("it happened indeed through what I did", the TLA concessive) against pCarlsberg
  `ḫpr.n n-js` ("but not through what I did", the usual translation): rendered after the base; the confession / denial is
  the text's most famous crux.
- **E128** – `ככר?` (the TLA lemma, "loaf") or `תכונה` ("character", Lichtheim; the colophon E145, E148 writes the same word
  with the lemma "character"). A change touches one word of E128.
- mr.w `חבורה` (against SI's `אנשים`); šwꜣ.w `רָשׁ` (against AM's single `עני`); jwn `טבע` / `צבע` split.
- E40 "ꜥqꜣ … n nb-tꜣ.wj" (`אין … ישרים לאדון שתי הארצות`; TLA "können … nicht gerecht werden") and E67's first clause (the
  TLA's own "??") are uncertain.

### Progress log
- 2026-11-07: read the brief, the guidelines (whole), corpus.md, renderings.md §1–§12, MK (project and annotated), the MR
  project file; built a lemma → Hebrew map of the corpus; drafted in five saves (E1–E35, E36–E55, E56–E89, E90–E129,
  E130–E149), each filled and verified at once; the TLA read after each save, and the drafts revised where it showed a
  misreading (E13 *kꜣ* "then", E21's new subject, E32 *ḥꜣ* "behind", E33 / E40 the aorist, E45, E49 *ḥr snf* "because of
  blood", E57 "twenty years", E68 future, E71 *nf* "that", E75 *jmꜣ*, E112, E120, E122, E123 passive).
- E130–E138 copied by script from MK (the `>` lines and the apparatus, with an "העתקה" note and the cross-references
  adapted): `verify MR` checks 9 shared lines, 0 differences.
- Pass (a) fidelity: brackets checked by script against the base (fixed E14 `[כהוראה]?`, E30 `[זועם]־הלב`, E48 `המורד` /
  `[מלבד]`, E73 `[…]־רַא` – the draft had added "המלך" inside the bracket), E149's unwritten name `…`; every negation and
  tense re-read against the morphology.
- Pass (b) consistency: an MR-internal lemma → Hebrew table; fixed rḫ `מכיר` → `יודע` (E12, E21, E49), mn `העומד` →
  `המתקיים` (E22, as E34), ḥḏj passives `נפגע` / `תיפגע` → `ניזוק` / `תינזק`, mr.w `אנשים` → `חבורה` (6 lines); repeated
  lines identical (E38 = E74 "טוב לעשות למען העתיד", E113 ≈ E117, E144–E145 = E148, E147 ≈ E149).
- Pass (c) Hebrew: the generated `translation-MR.rtl.md` read; the intro aligned with the lines' wording.
- `verify MR --strict`: 0 problems; `check_bible_quotes.py` on the three files: 0 problems (one misquoted `יַאֲרִיכֻן` fixed).

### The text on its own terms
- **Kingship as speech** (E31–E35): the king's weapon is his tongue; wisdom comes "strained like beer" from the ancestors'
  written words, and a craftsman is made, not born (E35) – yet the king is wise "from the womb" (E114–E115).
- **The rebel is a talker** (E21–E26): the danger is a man "who enters the hearts", and the punishment erases him wholly –
  name, memory, children, following (E22–E23): a man lives on through name and descendants.
- **A judgement of every soul, the king's included** (E51–E56): the earliest full statement of the tribunal of the dead –
  the gods see a lifetime as an hour; a man "remains after mooring", his deeds heaped beside him; who comes without wrong
  will be "like a god".
- **Death is mooring** (mnj, E54; E60, E87 the same root for settling land): the Nile boat is the image of a whole life.
- **A king's confession** (E69, E118–E122): "I did the same and the same happened"; the destruction of Thinis' tombs in his
  time, and the law learned from it – "a blow is repaid by its like; every deed is interlocked".
- **Monuments of love and of stone** (E36, E62–E66, E77, E112–E117): kingship has "no son and no brother" – each king
  restores another's work, and must not quarry an old monument for his own tomb.
- **Character before cattle** (E127–E128): the West (the tomb) is furnished "by uprightness, by doing Maat"; the upright
  man's loaf (or character) outweighs the wrongdoer's ox – and still the king must feed the altars.
- **The hidden god who knows characters** (E123–E124), seen only in his processional image of gems and copper.
- **The Asiatic** (E90–E97): pitied and despised for his harsh land; he "never settles", fights since Horus, wins and loses
  nothing; a crocodile on its bank – the answer is a settled, irrigated frontier (E87–E103).
- **Statecraft:** promote by ability, not birth (E60–E61); split a city's rule among ten (E84–E85); peace with the South
  for its granite and grain (E70–E77); twenty peaceful years made the youth soft (E57).
- **The scribes' world** (E144–E149): the copyist calls himself "the truly silent, good of character" – Amenemope's ideal –
  and closes with "skilled in the work of Thoth".

### Key parallels
- [equivalent] Ps 90:4 `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ` ↔ E54 "they see a lifetime as an hour"; Eccl 12:14 `כִּי אֶת כָּל מַעֲשֶׂה הָאֱלֹהִים יָבִא בְמִשְׁפָּט` ↔ "his deeds heaped beside him" (a tribunal of many gods; a heap, not a book).
- [equivalent] Judg 1:7 `כַּאֲשֶׁר עָשִׂיתִי כֵּן שִׁלַּם לִי אֱלֹהִים` and Lev 24:19 ↔ E69, E118–E122: a king who owns that his deed returned to him.
- [equivalent] 1 Sam 15:22, Prov 21:3, 15:8, Hos 6:6 ↔ E128: the upright man's loaf / character above the wrongdoer's ox – with no general sacrifice word, and with offerings commanded in the next line [divergence].
- [equivalent] Isa 45:15 `אָכֵן אַתָּה אֵל מִסְתַּתֵּר` and Jer 17:10 ↔ E123 "the god, who knows the characters, has hidden himself".
- [equivalent] Prov 22:10 `גָּרֵשׁ לֵץ וְיֵצֵא מָדוֹן` ↔ E22 (drive out the agitator – in Egypt with death and erasure).
- [equivalent] Eccl 9:18 `טוֹבָה חָכְמָה מִכְּלֵי קְרָב`, Prov 25:15, 18:21 ↔ E31 "speech is stronger than any fighting".
- [equivalent] Prov 30:10 `אַל-תַּלְשֵׁן עֶבֶד אֶל-אֲדֹנָו` ↔ E146 (the colophon's praise of the scribe), almost word for word.
- [equivalent] Gen 16:12 ↔ E90–E92 (the nomad who never settles, fighting everyone); [divergence] Ezek 29:3 ↔ E96 (the crocodile: here the Asiatic, in Ezekiel Pharaoh).
- [cognate] Isa 30:4 `חָנֵס` ↔ E104 (Herakleopolis, the speaker's city); [cognate: loanword] `יְאֹר` ↔ E125 jtrw.

### Lines shared with other texts
- E130–E138 = project 2's MK (and E130–E136 = the fifth-day dossier's MK), byte for byte; MR's E129 now supplies the hymn's
  first word (*ḥn* `מסודרים`), and MK's notes about "outside this range" now point to E129 / E139. **No revision of
  E130–E138 is proposed** (the TLA's singular *ṯs.w* "a supporter" in E134 against MK's `מקימים` is a fair alternative, not
  an error).
- Internal repeats copied: E38 = E74 (`טוב לעשות למען העתיד`), E113 → E117, E51 ↔ E126 (only the verb differs, as the
  Egyptian), E74 ↔ E125 (`המניח שיטמינו אותו`), E144–E145 → E148, E147 → E149.
- The colophon's `כפי שנמצא בכתב` as SI B311 and SS 187; `השותק האמיתי` as AM (§6.4).

### Proposals for the shared renderings
1. **šwꜣ.w "poor man" = `רָשׁ`** (always vocalized; the root of PT486's šwꜣ `ייוורש`): AM's single `עני` for šwꜣ.w collides
   with twꜣ `עני` – both occur in one MR line (E27).
2. **mr.w "following, dependents" = `חבורה`**; `אנשים` for rmṯ with a suffix (SI's `ואנשיו` for mr.w to be aligned at the
   harmonization).
3. **ḫsf split by sense:** "punish" `ייסר` (MR, WE) / "ward off" `הדף` (MK, SI, NU).
4. **ꜥqꜣ "straight" = `ישר`** (ꜥqꜣ-jb `ישר־הלב` / `יושר־הלב`), kept apart from mꜣꜥ.t `אמת`: Merikare's famous saying is about
   the *straight* heart.
5. **bjꜣ.t "character" (54410) = `תכונה`**; the loaf 54150 `ככר`.
6. **jwn "colour; nature" split:** `צבע` (AM, TB) / `טבע` (MR).
7. Names: Ḫty `חֶתִי`, Ḫꜥj-m-Wꜣs.t `חַעֶמְוָאסֶת`, Mḥ `מַח`, Rʾ-ꜣw `טוּרָה`, Ḏd-s.wt `גֶ׳דְ־אִיסוּת`, Wꜣ.t-Ḥr `אורח־חוֹרוּס`,
   Mdnjt `מֶדֶנִית`, Ḥw.t-bnw (the Delta town) `בֵּית־בֶּנוּ`.
8. Terms: mn.w `אנדרטה`; wdḥw `שולחן־הקרבן`; ꜥbꜣ `אבן־הקרבן`; jmn.yt `התמיד`; mnj.t `יתד־העגינה`; ḫtm "fortress" `מעוז`;
   mrw `ברוש`; wꜥn `ערער`; ẖpꜣ `טבור`; sqr `קטל`; ḏbꜣ "repay" `נפרע`; ꜥḏ `ניתץ`; snj "emulate" `השתווה`.

### Lessons for the guidelines
- **A scratch lemma → Hebrew map from the פירוק bullets** (lemma ids from the tool's rows, the last `("…")` of each word's
  segment) made the "one Hebrew per lemma" check mechanical, inside the text and across the corpus; it found six internal
  splits in pass (b). A `lexmap` command in `egypt_tools.py` would serve every translator.
- **The base's lemma can decide a famous crux against the literature** (E128 "loaf" / "character", E119 *js* / *n-js*):
  translate the base, and print both in the apparatus with the witness that differs.
- **Never write a placeholder parallel**: three times a half-remembered verse was drafted with "– לא" to be checked later;
  each was caught and replaced, but a הקבלה bullet should be written only after the verse is printed.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (MR)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| E10 | […] [m]? [sfn]? [n] =[f] […] […] ꜥšꜣ m-ḥr? =k thi̯ =k ḥr wꜣ,t | […] [אל]? [תרחם]? [עליו] […] […] רבים לפניך?; תסטה מן האורח. | `אַל-תֵּט יָמִין וּשְׂמֹאול` (משלי ד:כז) | equivalent | הסטייה מן הדרך כחטא; במצרית הדרך היא דרך המלכות הנכונה. |
| E22 | ꜥni̯ sw m-ḥr ḏ,t =f mn m j:tꜣ[ḥ] [pw] [mdw,tj] dr sw smꜣm ⟨ms.w.pl⟩ =⟨f⟩ | נאה הוא לעיני בני־ביתו; המתקיים בהיותו מסית – [הוא] [דברן]: הַרְחֵק אותו, הֲרֹג את ילדיו, | `גָּרֵשׁ לֵץ וְיֵצֵא מָדוֹן; וְיִשְׁבֹּת דִּין וְקָלוֹן` (משלי כב:י) | equivalent | אותה עצה: לגרש את מחרחר הריב, ובו המריבה; במצרית העונש קשה לאין ערוך – הריגה, מחיקת השם וחיסול הילדים. |
| E30 | ḫsf =k r-ḏꜣ.wt ⸢jy⸣[.t]? =k p,t pw n.t z jwn nfr qsn pw sḥwrj n(,j) d[nd]-jb? | "תייסר אתה כפי הרעה (הבאה)?". שמיו של אדם הם הטבע הטוב; קשה היא קללת [זועם]־הלב?. | `טוֹב אֶרֶךְ אַפַּיִם מִגִּבּוֹר; וּמֹשֵׁל בְּרוּחוֹ מִלֹּכֵד עִיר` (משלי טז:לב) | equivalent | הטבע המתון מול הזועם. |
| E31 | ḥmw.w m mdw,t nḫt =[k] […] ḫpš pw n(,j) nsw,t? ns =f qn mdw,t r ꜥḥꜣ nb n jyi̯.n =tw | היה מיומן בדבר, כדי שתחזק […]: עוזו של מלך? – לשונו; תקיף הדבר מכל קרב. לא באים | `וְלָשׁוֹן רַכָּה תִּשְׁבָּר-גָּרֶם` (משלי כה:טו) | equivalent | כוח הדיבור גובר על הכוח הגופני |
| E31 | ḥmw.w m mdw,t nḫt =[k] […] ḫpš pw n(,j) nsw,t? ns =f qn mdw,t r ꜥḥꜣ nb n jyi̯.n =tw | היה מיומן בדבר, כדי שתחזק […]: עוזו של מלך? – לשונו; תקיף הדבר מכל קרב. לא באים | `מָוֶת וְחַיִּים בְּיַד-לָשׁוֹן` (משלי יח:כא) | equivalent |  |
| E31 | ḥmw.w m mdw,t nḫt =[k] […] ḫpš pw n(,j) nsw,t? ns =f qn mdw,t r ꜥḥꜣ nb n jyi̯.n =tw | היה מיומן בדבר, כדי שתחזק […]: עוזו של מלך? – לשונו; תקיף הדבר מכל קרב. לא באים | `מָוֶת וְחַיִּים בְּיַד-לָשׁוֹן` (משלי יח:כא) | equivalent | `טוֹבָה חָכְמָה מִכְּלֵי קְרָב` (קוהלת ט:יח) – אותו מבנה השוואה: הדבר (החכמה) לעומת הקרב |
| E31 | ḥmw.w m mdw,t nḫt =[k] […] ḫpš pw n(,j) nsw,t? ns =f qn mdw,t r ꜥḥꜣ nb n jyi̯.n =tw | היה מיומן בדבר, כדי שתחזק […]: עוזו של מלך? – לשונו; תקיף הדבר מכל קרב. לא באים | `מַעֲנֶה-רַּךְ יָשִׁיב חֵמָה` (משלי טו:א) | divergence | במשלי הדיבור מרגיע, במריכרע הוא נשק של שליט. |
| E33 | rḫ.w.pl rḫ =f n ḫpr.[n] [jy.t]? m-hꜣ,w =f jwi̯ n =f mꜣꜥ,t ꜥtḫ.tj mj sḫr.w.pl n(,j) ḏd.t.n tp(,j)w.pl-⟨ꜥ⟩ | היודעים את דעתו; לא תהיה [רעה]? בקרבתו. באה אליו האמת מסוננת, כעצות אשר אמרו הקדמונים. | `כִּי-שְׁאַל-נָא לְדֹר רִישׁוֹן; וְכוֹנֵן לְחֵקֶר אֲבוֹתָם` (איוב ח:ח) | equivalent | חכמת הקדמונים כמקור האמת. |
| E34 | snj r jt.w[.pl] =k [t]p(,j)w.pl-ꜥ.pl =k bꜣk.tw […] m rḫ[_] m =k mdw,t =sn mn m zẖꜣ | השתווה לאבותיך, לקדמוניך: עובדים […] בדעת. הנה דבריהם קיימים בכתב: | `מִי-יִתֵּן בַּסֵּפֶר וְיֻחָקוּ` (איוב יט:כג) | equivalent | הכתב כמה שמקיים את הדיבור. |
| E35 | pgꜣ šdi̯ =k snj =k r rḫ ḫpr ḥmw,w m sbbꜣ,yw m ḏw nfr wꜣḥ jb | פְּתַח, תקרא – תשתווה לדעת; נהיה המיומן מן המלומד. אל תהיה רע: טובה אריכות־הלב. | `טוֹב אֶרֶךְ אַפַּיִם מִגִּבּוֹר` (משלי טז:לב) | equivalent | "אריכות־הלב" המצרית כ`אֶרֶךְ אַפַּיִם` העברי: אותו דימוי של אורך. |
| E37 | dwꜣ.pl ḥr nfr =k nḥi̯ snb =k n nṯr.pl? [tr]j sr.w.pl swḏꜣ r(m)ṯ =k srwd tꜣš[.pl] =k | המהללים על טובך, המבקשים את בריאותך מן האֵלִים?. הוקר את השרים, הַחֲזֵק שלמים את אנשיך, חזק את גבולותיך | `מֶלֶךְ שׁוֹפֵט בֶּאֱמֶת דַּלִּים כִּסְאוֹ לָעַד יִכּוֹן` (משלי כט:יד) | equivalent | המלך הנשען על נתיניו ועל האמת. |
| E39 | m jwn =k nfr ẖsj mri̯ n =f tꜣ [wn]? =f? […] ḫm-ḫ,t pw ḥntj jw n k(y).wj swꜣ […] | בטבעך הטוב. עלוב (הוא) החפץ בארץ לעצמו; [יהיה]? הוא? […]. חסר־הדעת הוא הלהוט אחר אשר לאחרים; חולף […] | `לֹא תַחְמֹד בֵּית רֵעֶךָ` (שמות כ:יג) | equivalent | הלהיטות אחר מה שלאחרים; במצרית זו עצה של חכמה ("חסר־דעת הוא"), לא דיבר. |
| E40 | tp tꜣ nn ꜣw =f wꜣḏ pw sḫ[ꜣ.w] jm =f n ꜥqꜣ.n z ḥḥ.pl n nb-tꜣ.du wnn [z] | על פני הארץ – אין לו אורך; רענן הוא הנזכר בו. אין אלפי־אלפי אנשים ישרים לאדון שתי הארצות. היש [איש] | `זֵכֶר צַדִּיק לִבְרָכָה` (משלי י:ז) | equivalent | הזכרון הוא חייו של האדם אחרי מותו |
| E40 | tp tꜣ nn ꜣw =f wꜣḏ pw sḫ[ꜣ.w] jm =f n ꜥqꜣ.n z ḥḥ.pl n nb-tꜣ.du wnn [z] | על פני הארץ – אין לו אורך; רענן הוא הנזכר בו. אין אלפי־אלפי אנשים ישרים לאדון שתי הארצות. היש [איש] | `כִּי-גָז חִישׁ וַנָּעֻפָה` (תהלים צ:י) | equivalent | קוצר החיים. |
| E42 | hp.w.pl =k ⟨n⟩ nmꜥ.n ḫwd m pr =f nb ḫ,t pw tm gꜣ.w n ḏd.n šwꜣ,ww{.pl} | את חוקיך. אין העשיר בביתו נוטה: בעל־רכוש הוא, שאינו חסר. אין הרש אומר | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים; וְלֹא תִקַּח שֹׁחַד` (דברים טז:יט) | equivalent | הדיין שאינו נוטה |
| E42 | hp.w.pl =k ⟨n⟩ nmꜥ.n ḫwd m pr =f nb ḫ,t pw tm gꜣ.w n ḏd.n šwꜣ,ww{.pl} | את חוקיך. אין העשיר בביתו נוטה: בעל־רכוש הוא, שאינו חסר. אין הרש אומר | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים; וְלֹא תִקַּח שֹׁחַד` (דברים טז:יט) | divergence | במריכרע הסיבה מעשית: השר העשיר אינו זקוק לשוחד, ולכן הוא אינו נוטה; העני (E43) נוטה לבעל התשלום. |
| E44 | pw nsw,t nb šn,yt šps pw ḫwd m sr.w.pl ḏd =k mꜣꜥ,t m pr =k snḏ n =k | הוא המלך בעל־החצר; נדיב הוא העשיר בשרים. אמור אמת בביתך, כדי שייראו ממך | `מֶלֶךְ שׁוֹפֵט בֶּאֱמֶת דַּלִּים כִּסְאוֹ לָעַד יִכּוֹן` (משלי כט:יד) | equivalent | האמת כיסוד יציבותו של המלך. |
| E46 | mꜣꜥ,t wꜣḥ =k tp tꜣ sgrj rm,w m ꜣjr ḫꜣr,t m nš z ḥr ḫ,t jt =f m ḥḏi̯ | אמת, כדי שתאריך (ימים) על הארץ. הַשְׁתֵּק את הבוכה, אל תלחץ אלמנה, אל תגרש איש מעל רכוש אביו, אל תזיק | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | equivalent | האלמנה המוגנת |
| E46 | mꜣꜥ,t wꜣḥ =k tp tꜣ sgrj rm,w m ꜣjr ḫꜣr,t m nš z ḥr ḫ,t jt =f m ḥḏi̯ | אמת, כדי שתאריך (ימים) על הארץ. הַשְׁתֵּק את הבוכה, אל תלחץ אלמנה, אל תגרש איש מעל רכוש אביו, אל תזיק | `וְאַלְמָנָה וְיָתוֹם גֵּר וְעָנִי אַל תַּעֲשֹׁקוּ` (זכריה ז:י) | equivalent |  |
| E46 | mꜣꜥ,t wꜣḥ =k tp tꜣ sgrj rm,w m ꜣjr ḫꜣr,t m nš z ḥr ḫ,t jt =f m ḥḏi̯ | אמת, כדי שתאריך (ימים) על הארץ. הַשְׁתֵּק את הבוכה, אל תלחץ אלמנה, אל תגרש איש מעל רכוש אביו, אל תזיק | `לְמַעַן יַאֲרִיכֻן יָמֶיךָ` (דברים ה:טו) | equivalent | אריכות הימים כשכר: במצרית "כדי שתאריך (ימים) על הארץ" כשכר על עשיית אמת. |
| E48 | m zꜣu̯,wtj? jw tꜣ pn r grg ẖr =s wpw-[ḥr] [s]bj gmi̯ sḥ =f jw nṯr rḫ.w ẖꜣk.w-jb.pl | ובשומרים?; כך תהיה הארץ הזאת מיוסדת בשל כך – [מלבד] המורד אשר נמצא סודו. והאל יודע את זוממי־הרעה; | `וּבֹחֵן לִבּוֹת וּכְלָיוֹת אֱלֹהִים צַדִּיק` (תהלים ז:י) | equivalent | האל היודע את הלבבות |
| E48 | m zꜣu̯,wtj? jw tꜣ pn r grg ẖr =s wpw-[ḥr] [s]bj gmi̯ sḥ =f jw nṯr rḫ.w ẖꜣk.w-jb.pl | ובשומרים?; כך תהיה הארץ הזאת מיוסדת בשל כך – [מלבד] המורד אשר נמצא סודו. והאל יודע את זוממי־הרעה; | `אֲנִי יְהוָה חֹקֵר לֵב בֹּחֵן כְּלָיוֹת` (ירמיהו יז:י) | equivalent | ובשני המקומות הידיעה מביאה גמול. |
| E49 | ḥwi̯ nṯr sḏb =f ḥr snf jn sfn _ ꜥḥꜥw m smꜣm z jw =k rḫ.tj ꜣḫ.w =f | מכה האל בפגעיו? בגלל הדם. הרחמן הוא ה… את משך־הימים. אל תהרוג איש שאתה יודע את תועלתו, | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | equivalent | האל תובע את הדם השפוך |
| E49 | ḥwi̯ nṯr sḏb =f ḥr snf jn sfn _ ꜥḥꜥw m smꜣm z jw =k rḫ.tj ꜣḫ.w =f | מכה האל בפגעיו? בגלל הדם. הרחמן הוא ה… את משך־הימים. אל תהרוג איש שאתה יודע את תועלתו, | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | divergence | בבראשית הגמול בידי אדם ("באדם"), במריכרע האל עצמו מכה, והמלך מתבקש להימנע מהריגה. |
| E51 | jwi̯ bꜣ r s,t rḫ.w.n =f n thi̯{t}.n =f wꜣ,t.pl =f n.t sf n ḫsf.n sw ḥkꜣ,w nb spr =f r ḏḏ.yw.pl mw =f | יבוא הבָּא אל המקום אשר ידע; לא יסטה מאורחותיו של אתמול; לא ידפו אותו כל קסמים; יגיע אל נותני המים לו. | — | equivalent | `וְיָשֹׁב הֶעָפָר עַל הָאָרֶץ כְּשֶׁהָיָה; וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים אֲשֶׁר נְתָנָהּ` (קוהלת יב:ז) – היסוד הרוחני של האדם שב אל מקומו אחרי המוות; בקוהלת – אל האל הנותן, במריכרע – "אל המקום אשר ידע". |
| E52 | ḏꜣḏꜣ,t wḏꜥ sꜣr,yw rḫ.n =k tm =sn sfn hrw pf n(,j) wḏꜥ mꜣ(r) | הוועד השופט את הנצרכים – יודע אתה שלא ירחמו ביום ההוא של שפיטת המדוכא, | — | equivalent | `וְדָע כִּי עַל כָּל אֵלֶּה יְבִיאֲךָ הָאֱלֹהִים בַּמִּשְׁפָּט` (קוהלת יא:ט) – המשפט הבא על האדם, שאין להימלט ממנו |
| E52 | ḏꜣḏꜣ,t wḏꜥ sꜣr,yw rḫ.n =k tm =sn sfn hrw pf n(,j) wḏꜥ mꜣ(r) | הוועד השופט את הנצרכים – יודע אתה שלא ירחמו ביום ההוא של שפיטת המדוכא, | — | divergence | במצרית בית דין של אלים מרובים ("הוועד"), ומשפטו אחרי המוות, ביום אחד ידוע. |
| E53 | wnw,t n.t jri̯.t n,t-ꜥ qsn pw srḫ,y m sꜣꜣ m mḥ jb =k m ꜣw,w rnp,t.pl | בשעת עשיית הנוהג. קשה הוא המאשים כשהוא נבון. אל תבטח בלבך באורך השנים: | `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ` (תהלים צ:ד) | equivalent | (המשך ב־E54). |
| E54 | mꜣꜣ =sn ꜥḥꜥ,w m wnw,t spp ={sn} ⟨z⟩ m-ḫt mnj.t rḏi̯.w sp.w.pl =f r-gs =f m ꜥḥꜥ,w | חוזים הם במשך־הימים כבשעה. נותר האדם אחרי העגינה, ומעשיו מושמים לצדו בערמה. | `כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר` (תהלים צ:ד) | equivalent | `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ` /  – אותה תפיסת זמן: חיי אדם כשעה (כיום) בעיני השופטים האלוהיים |
| E54 | mꜣꜣ =sn ꜥḥꜥ,w m wnw,t spp ={sn} ⟨z⟩ m-ḫt mnj.t rḏi̯.w sp.w.pl =f r-gs =f m ꜥḥꜥ,w | חוזים הם במשך־הימים כבשעה. נותר האדם אחרי העגינה, ומעשיו מושמים לצדו בערמה. | `כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר` (תהלים צ:ד) | equivalent | `כִּי אֶת כָּל מַעֲשֶׂה הָאֱלֹהִים יָבִא בְמִשְׁפָּט` (קוהלת יב:יד) – המעשים נשארים ונשפטים אחרי המוות |
| E54 | mꜣꜣ =sn ꜥḥꜥ,w m wnw,t spp ={sn} ⟨z⟩ m-ḫt mnj.t rḏi̯.w sp.w.pl =f r-gs =f m ꜥḥꜥ,w | חוזים הם במשך־הימים כבשעה. נותר האדם אחרי העגינה, ומעשיו מושמים לצדו בערמה. | `כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר` (תהלים צ:ד) | divergence | בקוהלת "האלהים" לבדו שופט, ובמריכרע ועד של שופטים; ובמצרית המעשים "מונחים בערמה" – תמונה מוחשית של שקילה או ספירה. |
| E55 | nḥḥ pw gr,t wn⟨n⟩ jm wḫꜣ pw jri̯ ṯsi̯(.t) =st jr pḥ st nn jri̯.t jw wnn =f jm mj nṯr | ונצח הוא ההיות שם. כסיל הוא העושה את אשר נוזפים עליו; המגיע אליו בלי עשיית עבירה – יהיה שם כאל, | `מִי-יַעֲלֶה בְהַר-יְהוָה; וּמִי-יָקוּם בִּמְקוֹם קָדְשׁוֹ` (תהלים כד:ג) | equivalent | מי ש"מגיע" אל המקום האלוהי; התשובה בשני המקומות – מי שלא עשה עבירה. |
| E57 | m =k nʾ,t =k mḥ.tj ẖr srd-mꜣ(w) rnp,t 20 nꜣ ḏꜣm,w nḏm ḥr šms jb =f šw,t ḥr | הנה עירך מלאה בצמיחה־חדשה; עשרים שנה – הנוער הזה נעים לו ללכת אחרי לבו. וחיל־העזר? – | — | equivalent | `וְהַלֵּךְ בְּדַרְכֵי לִבְּךָ וּבְמַרְאֵי עֵינֶיךָ` (קוהלת יא:ט) – הצעיר ההולך אחרי לבו |
| E57 | m =k nʾ,t =k mḥ.tj ẖr srd-mꜣ(w) rnp,t 20 nꜣ ḏꜣm,w nḏm ḥr šms jb =f šw,t ḥr | הנה עירך מלאה בצמיחה־חדשה; עשרים שנה – הנוער הזה נעים לו ללכת אחרי לבו. וחיל־העזר? – | — | divergence | בקוהלת זו אזהרה ("ודע כי על כל אלה"), כאן תכונה שהמלך צריך לנצל. |
| E60 | [šm]s.w =k ꜥpr m rḫt mnj.w m ꜣḥ,t.pl sꜣḥ.w m mnmn,t m tni̯.t zꜣ-z r n[ḏs] | מלוויך: ערוך בקצבה, מעוגן בשדות, מוענק במקנה. אל תבחין בין בן־איש [לאיש־הפשוט]; | `גַּם-בְּנֵי אָדָם גַּם-בְּנֵי-אִישׁ` (תהלים מט:ג) | equivalent | "בני איש" כבני מעמד גבוה מול "בני אדם"; כאן *zꜣ-z* "בן־איש" מול *nḏs* "האיש הפשוט". |
| E62 | ⟨ṯzi̯⟩ mn,w =k ꜣḫ ṯ(ꜣ)z,t n nb =s jri̯ mn,w =k […] n nṯr sꜥnḫ rn pw n jrr sj jri̯ z | הקם את אנדרטאותיך. מועיל הגדוד לאדוניו. עשה אנדרטאות […] לאל: החייאת שם היא לעושה אותה. יעשה אדם | `וְנָתַתִּי לָהֶם בְּבֵיתִי וּבְחוֹמֹתַי יָד וָשֵׁם` (ישעיהו נו:ה) | equivalent | הבנייה לאל כהנצחת השם. |
| E64 | ḥr ⟨ḫm⟩ wnm tʾ m ḥw,t-nṯr swꜣḏ w{ꜣ}ḏ⟨ḥ⟩,w sꜥꜣ ꜥq,w jmi̯ ḥꜣ,w ḥr ⟨j⟩mn,yt | אל הדביר, אכילת לחם בבית האל. הַרְעֵן את שולחנות־הקרבן, הגדל את המנות, הוסף שפע על התמיד; | `עֹלָה תָמִיד` (במדבר כח:ג) | equivalent | הקרבן היומי הקבוע |
| E64 | ḥr ⟨ḫm⟩ wnm tʾ m ḥw,t-nṯr swꜣḏ w{ꜣ}ḏ⟨ḥ⟩,w sꜥꜣ ꜥq,w jmi̯ ḥꜣ,w ḥr ⟨j⟩mn,yt | אל הדביר, אכילת לחם בבית האל. הַרְעֵן את שולחנות־הקרבן, הגדל את המנות, הוסף שפע על התמיד; | `עֹלָה תָמִיד` (במדבר כח:ג) | divergence | במצרית *jmn.yt* היא מנחת מזון (לחם, בירה) שמונחת לפני האל ואחר כך מחולקת לכהנים, לא עולה. |
| E68 | r ꜣjr ḏꜣm,w mj sr{.w}.n tp(,j).w.pl-ꜥ.pl r =s ꜥḥꜣ Km,t | ילחץ את הנוער, כאשר הכריזו הקדמונים עליו. תילחם כֵּמֶת | `וְסִכְסַכְתִּי מִצְרַיִם בְּמִצְרַיִם וְנִלְחֲמוּ אִישׁ בְּאָחִיו` (ישעיהו יט:ב) | equivalent | מלחמת אחים במצרים כמכה מן האל |
| E68 | r ꜣjr ḏꜣm,w mj sr{.w}.n tp(,j).w.pl-ꜥ.pl r =s ꜥḥꜣ Km,t | ילחץ את הנוער, כאשר הכריזו הקדמונים עליו. תילחם כֵּמֶת | `וְסִכְסַכְתִּי מִצְרַיִם בְּמִצְרַיִם וְנִלְחֲמוּ אִישׁ בְּאָחִיו` (ישעיהו יט:ב) | divergence | בישעיהו זו נבואה מבחוץ על מצרים, כאן הודאה של מלך מצרי שנלחם בה בעצמו. |
| E69 | m ẖr(,t)-nṯr m ꜥḏ js{.wt}.pl m ꜥḏ,t sp.pl jw jri̯.n =j mj,tt ḫpr mj,tt mj jri̯.t n | בחלקת־האל: בניתוץ קברות, בשחיטת עניינים. עשיתי כמו־כן, ונהיה כמו־כן, כאשר נעשה ל | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | equivalent | הגמול במידה |
| E69 | m ẖr(,t)-nṯr m ꜥḏ js{.wt}.pl m ꜥḏ,t sp.pl jw jri̯.n =j mj,tt ḫpr mj,tt mj jri̯.t n | בחלקת־האל: בניתוץ קברות, בשחיטת עניינים. עשיתי כמו־כן, ונהיה כמו־כן, כאשר נעשה ל | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | divergence | בתורה זה דין שבית הדין מחיל, כאן הודאת מלך שהמעשה שעשה חזר אליו. |
| E77 | nn šnꜥ m ḥḏi̯ mn,w n(,j) ky wḥꜣ =k jnr m Rʾ-ꜣw m qd | באין מונע. אל תזיק לאנדרטה של אחר; תחצוב אבן בטוּרָה; אל תבנה | `אַל-תַּסֵּג גְּבוּל עוֹלָם אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח) | equivalent | שמירה על מה שעשו אחרים |
| E77 | nn šnꜥ m ḥḏi̯ mn,w n(,j) ky wḥꜣ =k jnr m Rʾ-ꜣw m qd | באין מונע. אל תזיק לאנדרטה של אחר; תחצוב אבן בטוּרָה; אל תבנה | `אַל-תַּסֵּג גְּבוּל עוֹלָם אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח) | divergence | כאן לא גבול שדה אלא אנדרטת מלך קודם, שאבניה נלקחו לבנייה חדשה. |
| E82 | n =s ḏḏ =s mr[w] mꜣꜣ.tw wꜥn ḏḏ =sn n =n sw jꜣb,tt m ḫwd pḏ,t(j) | לה, נותן הוא ברוש; נראה ערער – נותנים הם אותו לנו. המזרח – בעושר ברברים, | `וַעֲצֵי אֲרָזִים` (שמואל ב ה:יא) | equivalent | עצי הלבנון כמס ומתנה למלכים |
| E82 | n =s ḏḏ =s mr[w] mꜣꜣ.tw wꜥn ḏḏ =sn n =n sw jꜣb,tt m ḫwd pḏ,t(j) | לה, נותן הוא ברוש; נראה ערער – נותנים הם אותו לנו. המזרח – בעושר ברברים, | `כְּעַרְעָר בָּעֲרָבָה` (ירמיהו יז:ו) | equivalent | הערער. |
| E88 | Wꜣ,t-Ḥr grg m nʾ,t mḥ m r(m)ṯ m stp,w{pw} n{.t} tꜣ r-ḏr =f r ḫsf ꜥ.wj.du | אורח־חוֹרוּס – מיושב בערים, מלא בבני־אדם, מן המבחר של הארץ כולה, כדי להדוף את הזרועות | `דֶּרֶךְ אֶרֶץ פְּלִשְׁתִּים` (שמות יג:יז) | equivalent | הדרך הצבאית ממצרים צפונה־מזרחה; המקרא מכנה אותה בשם אחר. |
| E90 | ẖsj ḏd swt nꜣ gr n pḏ,t(j) js(w) ꜥꜣm,w ẖsj qsn pw n bw n,t(j) =f jm ꜣh.w | עלוב. ואולם, נאמר גם זה על הברברים: הנה הָעַאמוּ העלוב – קשה הוא, בגלל המקום אשר הוא בו, סובל | `וְהוּא יִהְיֶה פֶּרֶא אָדָם` (בראשית טז:יב) | equivalent | תיאור הנווד של המדבר בעיני יושבי הקבע. |
| E91 | ⟨m⟩ mw štꜣ.w m ḫt ꜥšꜣ wꜣ,t.pl jr,j qsn m-ꜥ ḏw.w.pl n ḥmsi̯ =f m s,t wꜥ.t stš{.w} | מן המים, נסתר מן העץ; רבים אורחותיו, קשים מפני ההרים. אין הוא יושב במקום אחד; מניעים? | `וְעַל פְּנֵי כָל אֶחָיו יִשְׁכֹּן` (בראשית טז:יב) | equivalent | הנווד שאינו מתיישב |
| E91 | ⟨m⟩ mw štꜣ.w m ḫt ꜥšꜣ wꜣ,t.pl jr,j qsn m-ꜥ ḏw.w.pl n ḥmsi̯ =f m s,t wꜥ.t stš{.w} | מן המים, נסתר מן העץ; רבים אורחותיו, קשים מפני ההרים. אין הוא יושב במקום אחד; מניעים? | `וְעַל פְּנֵי כָל אֶחָיו יִשְׁכֹּן` (בראשית טז:יב) | divergence | בבראשית ישמעאל מתואר בכבוד ובברכה, וכאן הנווד מושא ללעג. |
| E92 | ꜥq rd.du =fj jw =f ḥr ꜥḥꜣ ḏr rk Ḥr n qn.n =f n gr qn.(n).tw =f | הפת את רגליו. נלחם הוא מימי חוֹרוּס; לא ניצח, וגם לא נוצח; | `יָדוֹ בַכֹּל וְיַד כֹּל בּוֹ` (בראשית טז:יב) | equivalent | הנווד במלחמה מתמדת עם הכל, בלי הכרעה. |
| E93 | n smj.n =f hrw m ꜥḥꜣ mj (j)ṯꜣ šnꜥ.n zmꜣ,yt ꜥnḫ =j swt | אין הוא מגיד את יום הקרב, כגנב שכנופיה מנעה אותו. חי אני! ואולם | `חַי אָנִי נְאֻם יְהוָה` (במדבר יד:כח) | equivalent | לשון השבועה "חי אני" בפי מלך / אל. |
| E96 | r bwi̯.y.t ⸢ꜥꜣm⸣.[pl] r Km,t m rḏi̯ jb =k m-sꜣ =f ꜥꜣm,w{.pl} pw msḥ ḥr | עד שתיעבו העַאמוּ את כֵּמֶת. אל תיתן את לבך אחריו: הָעַאמוּ – תִּמְסָח הוא על | `הַתַּנִּים הַגָּדוֹל הָרֹבֵץ בְּתוֹךְ יְאֹרָיו` (יחזקאל כט:ג) | divergence | התנין־התמסח כדימוי של אויב: ביחזקאל פרעה עצמו הוא התנין שבנילוס, במריכרע – האויב האסייתי. |
| E98 | Mdn,jt r ⸢w⸣ =s smḥi̯ gs =s ⟨r⟩ Km.wj m =k sj m ẖp(ꜣ) n ḫꜣs,tjw.pl | את מֶדֶנִית עד פלכה, הַצֵּף את צדה עד השחור־הגדול. הנה היא – טבור אנשי־הנכר: | `יֹשְׁבֵי עַל טַבּוּר הָאָרֶץ` (יחזקאל לח:יב) | equivalent | "טבור" כמרכז של ארץ ושל עמים; כאן מבצר הגבול הוא "טבור הזרים" – הנקודה שבה הם מתרכזים. |
| E104 | Nn-nsw,t mtj(.t)-jb pw nʾ,t ꜥšꜣ(.t) zꜣw pẖr m mr(,w) n(,j) ḫrw,y | חָנֵס. דיוק־לב הוא עיר רבת־עם. השמר מלהסתובב עם חבורת הצורר: | `כִּי-הָיוּ בְצֹעַן שָׂרָיו וּמַלְאָכָיו חָנֵס יַגִּיעוּ` (ישעיהו ל:ד) | cognate | חָנֵס, עיר המלוכה של מריכרע, נזכרת בישעיהו כעיר מצרית חשובה (`../renderings.md` §11.11). |
| E114 | rḫ-ḫ,t pw ⟨nb⟩? jdb.du nn wḫꜣ.n nsw,t nb šn,y(t) sꜣꜣ =f m pr(,w) =f | בעל־דעת הוא אדון שתי הגדות; אין המלך בעל־החצר מכסיל; נבון הוא מצאתו | `וּבְטֶרֶם תֵּצֵא מֵרֶחֶם הִקְדַּשְׁתִּיךָ` (ירמיהו א:ה) | equivalent | הייעוד מן הרחם; כאן החכמה המלכותית מולדת. |
| E115 | n.w ẖ,t stn{n}.n sw ⟨nṯr⟩ ḫnt,j ⟨z⟩ ḥḥ.pl jꜣw,t pw nfr.t nsw,yt | מן הבטן; ייחד אותו האל לפני אלפי־אלפי אנשים. משרה טובה היא המלוכה: | `הַרְּאִיתֶם אֲשֶׁר בָּחַר בּוֹ יְהוָה כִּי אֵין כָּמֹהוּ בְּכָל הָעָם` (שמואל א י:כד) | equivalent | המלך שהאל בחר בו והבדילו מכל העם; במצרית "לפני אלפי אלפים". |
| E118 | m =k sp ẖsj ḫpr m-hꜣ,w =j ꜥḏ.tw | הנה, מעשה עלוב נהיה בימיי: נותצו | `כַּאֲשֶׁר עָשִׂיתִי כֵּן שִׁלַּם לִי אֱלֹהִים` (שופטים א:ז) | equivalent | מלך המודה שהעונש שבא עליו הוא גמול על מעשיו (אדוני־בזק) |
| E118 | m =k sp ẖsj ḫpr m-hꜣ,w =j ꜥḏ.tw | הנה, מעשה עלוב נהיה בימיי: נותצו | `כַּאֲשֶׁר עָשִׂיתִי כֵּן שִׁלַּם לִי אֱלֹהִים` (שופטים א:ז) | divergence | אדוני־בזק מדבר אחרי שנענש, מריכרע (המלך הזקן) מלמד את בנו מן החטא. |
| E122 | r =s ḏbꜣ.tw sḫi̯[.t] m mj,tt =f mḏd(.t) pw jrr.t nb.t snn ẖ,t m r(m)ṯ | מזה: נפרעת חבטה בכמותה; שזור? הוא כל הנעשה. עובר דור מבני האדם; | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | equivalent | הגמול במידה |
| E122 | r =s ḏbꜣ.tw sḫi̯[.t] m mj,tt =f mḏd(.t) pw jrr.t nb.t snn ẖ,t m r(m)ṯ | מזה: נפרעת חבטה בכמותה; שזור? הוא כל הנעשה. עובר דור מבני האדם; | `פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | equivalent | מכה תחת מכה |
| E122 | r =s ḏbꜣ.tw sḫi̯[.t] m mj,tt =f mḏd(.t) pw jrr.t nb.t snn ẖ,t m r(m)ṯ | מזה: נפרעת חבטה בכמותה; שזור? הוא כל הנעשה. עובר דור מבני האדם; | `פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | divergence | בתורה זה חוק של בית דין בין אדם לחברו; במריכרע זה חוק העולם, שהמלך למד על בשרו: הנזק שגרם חזר אליו. |
| E123 | jmn.n s[w] [nṯr] rḫ.w qd,w nn ḫsf ꜥ ⟨n(,j)⟩ nb ḏr,t [t]kk.pl pw mꜣꜣ.t | הסתיר את עצמו [האל], היודע את המידות. אין הודף את זרוע בעל־היד; המותקפים הם אשר חוזות | `אָכֵן אַתָּה אֵל מִסְתַּתֵּר` (ישעיהו מה:טו) | equivalent | האל הנסתר |
| E123 | jmn.n s[w] [nṯr] rḫ.w qd,w nn ḫsf ꜥ ⟨n(,j)⟩ nb ḏr,t [t]kk.pl pw mꜣꜣ.t | הסתיר את עצמו [האל], היודע את המידות. אין הודף את זרוע בעל־היד; המותקפים הם אשר חוזות | `אֲנִי יְהוָה חֹקֵר לֵב בֹּחֵן כְּלָיוֹת` (ירמיהו יז:י) | equivalent | האל היודע את מידות האדם ונותן לו כמעשיו |
| E123 | jmn.n s[w] [nṯr] rḫ.w qd,w nn ḫsf ꜥ ⟨n(,j)⟩ nb ḏr,t [t]kk.pl pw mꜣꜣ.t | הסתיר את עצמו [האל], היודע את המידות. אין הודף את זרוע בעל־היד; המותקפים הם אשר חוזות | `וּבֹחֵן לִבּוֹת וּכְלָיוֹת אֱלֹהִים צַדִּיק` (תהלים ז:י) | equivalent |  |
| E124 | jr,t.du [trj].tw nṯr ḥr wꜣ,t =f jri̯.w m ꜥꜣ,t msi̯.w [m] [ḥmtj] mj n,t ḏbꜣ.tj | העיניים. [יוקר] האל על אורחו – עשוי מאבן־חן, נולד [מנחושת] – כשטף שהומר | `אֶבֶן-חֵן הַשֹּׁחַד בְּעֵינֵי בְעָלָיו` (משלי יז:ח) | equivalent | "אבן־חן" כביטוי |
| E124 | jr,t.du [trj].tw nṯr ḥr wꜣ,t =f jri̯.w m ꜥꜣ,t msi̯.w [m] [ḥmtj] mj n,t ḏbꜣ.tj | העיניים. [יוקר] האל על אורחו – עשוי מאבן־חן, נולד [מנחושת] – כשטף שהומר | `אֶבֶן-חֵן הַשֹּׁחַד בְּעֵינֵי בְעָלָיו` (משלי יז:ח) | divergence | האל המצרי מוצג לעיניים בפסל של אבן ומתכת (בניגוד ל"אל מסתתר" של E123), ואילו המקרא אוסר את הפסל. |
| E125 | m n,t [nn] [j]tr,w rḏi̯ sdgꜣ =f ⟨f⟩ḫ{f} ꜥ pw jmn.n =f | בשטף. [אין] יאור המניח שיטמינו אותו; מנתק הוא את הסוללה אשר הסתיר | `וְהִנֵּה עֹמֵד עַל הַיְאֹר` (בראשית מא:א) | cognate | *jtrw* "נהר" היא מקור המלה העברית `יְאֹר` (מלה שאולה). |
| E128 | bj(ꜣ),t n.t ꜥqꜣ jb r jwꜣ,w n(,j) jri̯ jsf,t jri̯ n nṯr jri̯ =f n =k mj,tt m ꜥꜣb,t | ככר? ישר־הלב משור עושה העוול. עשה לאל, ויעשה לך כמו־כן, במנחה | `הִנֵּה שְׁמֹעַ מִזֶּבַח טוֹב` (שמואל א טו:כב) | equivalent | הציות עדיף על הקרבן |
| E128 | bj(ꜣ),t n.t ꜥqꜣ jb r jwꜣ,w n(,j) jri̯ jsf,t jri̯ n nṯr jri̯ =f n =k mj,tt m ꜥꜣb,t | ככר? ישר־הלב משור עושה העוול. עשה לאל, ויעשה לך כמו־כן, במנחה | `עֲשֹׂה צְדָקָה וּמִשְׁפָּט נִבְחָר לַיהוָה מִזָּבַח` (משלי כא:ג) | equivalent | המבנה ההשוואתי ("עדיף … מ־") |
| E128 | bj(ꜣ),t n.t ꜥqꜣ jb r jwꜣ,w n(,j) jri̯ jsf,t jri̯ n nṯr jri̯ =f n =k mj,tt m ꜥꜣb,t | ככר? ישר־הלב משור עושה העוול. עשה לאל, ויעשה לך כמו־כן, במנחה | `זֶבַח רְשָׁעִים תּוֹעֲבַת יְהוָה` (משלי טו:ח) | equivalent | קרבן הרשע אינו רצוי |
| E128 | bj(ꜣ),t n.t ꜥqꜣ jb r jwꜣ,w n(,j) jri̯ jsf,t jri̯ n nṯr jri̯ =f n =k mj,tt m ꜥꜣb,t | ככר? ישר־הלב משור עושה העוול. עשה לאל, ויעשה לך כמו־כן, במנחה | `כִּי חֶסֶד חָפַצְתִּי וְלֹא זָבַח` (הושע ו:ו) | equivalent |  |
| E128 | bj(ꜣ),t n.t ꜥqꜣ jb r jwꜣ,w n(,j) jri̯ jsf,t jri̯ n nṯr jri̯ =f n =k mj,tt m ꜥꜣb,t | ככר? ישר־הלב משור עושה העוול. עשה לאל, ויעשה לך כמו־כן, במנחה | `כִּי חֶסֶד חָפַצְתִּי וְלֹא זָבַח` (הושע ו:ו) | divergence | במצרית אין כאן מלת קרבן כללית (`זֶבַח` לא נבחר): ההשוואה היא בין "ככר" (או "אופי") לבין "שור", ומיד אחר כך (במנחה, E128–E129) המלך מצווה להקריב; הקרבן עצמו אינו נדחה. |
| E130 | r(m)ṯ ꜥw,t n.t nṯr jri̯.n =f p,t tꜣ n-jb =sn dr.n =f snk n(,j) mw jri̯.n =f ṯꜣw jb ꜥnḫ | בְּנֵי הָאָדָם, צֹאן הָאֵל – עשה שמים וארץ למענם, הרחיק את תאוות המים, עשה את רוח הלב – יחיו | `עַמּוֹ וְצֹאן מַרְעִיתוֹ` (תהלים ק:ג) | equivalent | בני האדם "צאן האל" |
| E130 | r(m)ṯ ꜥw,t n.t nṯr jri̯.n =f p,t tꜣ n-jb =sn dr.n =f snk n(,j) mw jri̯.n =f ṯꜣw jb ꜥnḫ | בְּנֵי הָאָדָם, צֹאן הָאֵל – עשה שמים וארץ למענם, הרחיק את תאוות המים, עשה את רוח הלב – יחיו | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` (בראשית א:כו) | equivalent | האל עושה בשביל האדם (ובמצרית: את השמים והארץ עצמם "למענם") |
| E130 | r(m)ṯ ꜥw,t n.t nṯr jri̯.n =f p,t tꜣ n-jb =sn dr.n =f snk n(,j) mw jri̯.n =f ṯꜣw jb ꜥnḫ | בְּנֵי הָאָדָם, צֹאן הָאֵל – עשה שמים וארץ למענם, הרחיק את תאוות המים, עשה את רוח הלב – יחיו | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם; וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | המים הקדמונים כאן הם כוח רעב שיש להרחיק; בבראשית אין למים רצון, ובפסוק כא אף התנינים שבמים הם ברואים |
| E130 | r(m)ṯ ꜥw,t n.t nṯr jri̯.n =f p,t tꜣ n-jb =sn dr.n =f snk n(,j) mw jri̯.n =f ṯꜣw jb ꜥnḫ | בְּנֵי הָאָדָם, צֹאן הָאֵל – עשה שמים וארץ למענם, הרחיק את תאוות המים, עשה את רוח הלב – יחיו | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | הרוח שהאל עושה לאפי בני האדם (השורה הבאה). |
| E131 | ⟨fnd⟩.pl =sn snn.pl =f pw pri̯.pl m ḥꜥ.pl =f wbn =f m p,t n-jb =sn jri̯.n =f | אַפֵּיהֶם. צלמיו הם, שיצאו מגופו; זורח הוא בשמים למענם; עשה | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ` (בראשית א:כז) | equivalent | "צלמיו הם": בני האדם כצלם האל; אבל כאן הם "יצאו מגופו" (לידה, האצלה), ובבראשית – נבראו |
| E131 | ⟨fnd⟩.pl =sn snn.pl =f pw pri̯.pl m ḥꜥ.pl =f wbn =f m p,t n-jb =sn jri̯.n =f | אַפֵּיהֶם. צלמיו הם, שיצאו מגופו; זורח הוא בשמים למענם; עשה | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | הרוח באף |
| E131 | ⟨fnd⟩.pl =sn snn.pl =f pw pri̯.pl m ḥꜥ.pl =f wbn =f m p,t n-jb =sn jri̯.n =f | אַפֵּיהֶם. צלמיו הם, שיצאו מגופו; זורח הוא בשמים למענם; עשה | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | השמש היא כאן האל עצמו, "הזורח למענם"; בבראשית היא מאור שנעשה. |
| E132 | n =sn sm,w ꜥw,t ꜣpd.pl rm.w.pl snm st smꜣm =f ḫft,jw.pl =[f] [ḥ]ḏi̯ =f ms.w.pl =f | להם עשב, צאן, עופות ודגים, מאכילים אותם. הרג את אויב[יו], הזיק לילדיו | `הִנֵּה נָתַתִּי לָכֶם אֶת כָּל עֵשֶׂב זֹרֵעַ זֶרַע` (בראשית א:כט); `אֶת כָּל יֶרֶק עֵשֶׂב לְאָכְלָה` (בראשית א:ל); `כָּל רֶמֶשׂ אֲשֶׁר הוּא חַי לָכֶם יִהְיֶה לְאָכְלָה` (בראשית ט:ג) | divergence | בבראשית א רק הצמחים הם מאכל האדם, והחיות מקבלות ; במריכרע הבהמה, העוף והדג נעשו מלכתחילה כמזון לאדם – כמו בבראשית אחרי המבול: |
| E132 | n =sn sm,w ꜥw,t ꜣpd.pl rm.w.pl snm st smꜣm =f ḫft,jw.pl =[f] [ḥ]ḏi̯ =f ms.w.pl =f | להם עשב, צאן, עופות ודגים, מאכילים אותם. הרג את אויב[יו], הזיק לילדיו | `וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה` (בראשית א:כו) | equivalent | אותה שלישייה (בהמה, עוף, דג), בסדר אחר |
| E132 | n =sn sm,w ꜥw,t ꜣpd.pl rm.w.pl snm st smꜣm =f ḫft,jw.pl =[f] [ḥ]ḏi̯ =f ms.w.pl =f | להם עשב, צאן, עופות ודגים, מאכילים אותם. הרג את אויב[יו], הזיק לילדיו | `וַיֹּאמֶר יְהוָה אֶמְחֶה אֶת הָאָדָם אֲשֶׁר בָּרָאתִי` (בראשית ו:ז) | equivalent | האל שמכה את "ילדיו" כשזממו מרד (השורה הבאה; ספר הפרה השמימית מספר זאת בהרחבה) – אבל כאן העונש פוגע ב"אויביו" שבהם, לא בכל בני האדם. |
| E133 | ḥr k(ꜣ),t =sn m jri̯.t [sb]j(,w) jrr =f sšp n-jb{.pl} =sn ={f} ⟨sqdd⟩ =⟨f⟩ r [m]ꜣꜣ =st ṯs.n =f | על מחשבתם לעשות [מרד]. עושה הוא את האור למענם; שט הוא לחזות בהם; קָשַׁר | `וַיַּרְא יְהוָה כִּי רַבָּה רָעַת הָאָדָם בָּאָרֶץ וְכָל יֵצֶר מַחְשְׁבֹת לִבּוֹ רַק רַע כָּל הַיּוֹם` (בראשית ו:ה) | equivalent | "מחשבתם לעשות מרד": המחשבה של בני האדם כסיבה לעונש |
| E133 | ḥr k(ꜣ),t =sn m jri̯.t [sb]j(,w) jrr =f sšp n-jb{.pl} =sn ={f} ⟨sqdd⟩ =⟨f⟩ r [m]ꜣꜣ =st ṯs.n =f | על מחשבתם לעשות [מרד]. עושה הוא את האור למענם; שט הוא לחזות בהם; קָשַׁר | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר; וַיְהִי אוֹר` (בראשית א:ג) | equivalent | כאן האור נעשה כל יום מחדש "למענם" |
| E133 | ḥr k(ꜣ),t =sn m jri̯.t [sb]j(,w) jrr =f sšp n-jb{.pl} =sn ={f} ⟨sqdd⟩ =⟨f⟩ r [m]ꜣꜣ =st ṯs.n =f | על מחשבתם לעשות [מרד]. עושה הוא את האור למענם; שט הוא לחזות בהם; קָשַׁר | `וַיֵּרֶד יְהוָה לִרְאֹת אֶת הָעִיר וְאֶת הַמִּגְדָּל` (בראשית יא:ה) | divergence | האל שעובר "לחזות" בבני האדם: אצל מריכרע זו השגחה יומית של חסד, בבראשית יא – ירידה לבדוק מעשה מרד. |
| E134 | kꜣrj ḥꜣ =s[n] [r]mi̯.w =sn jw =f ḥr sḏm jri̯.n =f n =sn ḥqꜣ.w[.pl] [m] stj ṯs,w | מקדש סביבם: בוכים הם – והוא שומע. עשה להם שליטים *[מן] הבושם*?, מקימים | `וַיִּשְׁמַע אֱלֹהִים אֶת נַאֲקָתָם` (שמות ב:כד) | equivalent | האל ששומע את בכי בני האדם. |
| E135 | r ṯsi̯.t m [p]s[d] ⟨n(,j)⟩ sꜣ-ꜥ jri̯.n =f n =sn ḥkꜣ,w r ꜥḥꜣ,w r ḫsf ꜥ | להקים את [גַּב] חלש־הזרוע. עשה להם קסמים לנשק, להדוף את זרוע | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | divergence | במצרים הקסם (*ḥkꜣ*) הוא מתנה טובה מן האל לבני האדם, "נשק" כנגד הפורענות; בתורה הקוסם הוא תועבה |
| E135 | r ṯsi̯.t m [p]s[d] ⟨n(,j)⟩ sꜣ-ꜥ jri̯.n =f n =sn ḥkꜣ,w r ꜥḥꜣ,w r ḫsf ꜥ | להקים את [גַּב] חלש־הזרוע. עשה להם קסמים לנשק, להדוף את זרוע | `יְהוָה יִשְׁמָרְךָ מִכָּל-רָע` (תהלים קכא:ז) | equivalent | הגנה מפני "זרוע המאורעות". |
| E136 | n(,j) ḫpr.yt rs.wt ⸢ḥr⸣ =s grḥ mj hrw smꜣm.n =f ẖꜣk.w.pl-jb m-m mj {ḥ}ḥwi̯ ={j} | המאורעות, אשר שוקדים עליהם בלילה כביום. הרג את זוממי־הרעה שבהם, כמו שמכה | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | equivalent | השמירה "בלילה כביום" |
| E136 | n(,j) ḫpr.yt rs.wt ⸢ḥr⸣ =s grḥ mj hrw smꜣm.n =f ẖꜣk.w.pl-jb m-m mj {ḥ}ḥwi̯ ={j} | המאורעות, אשר שוקדים עליהם בלילה כביום. הרג את זוממי־הרעה שבהם, כמו שמכה | `כִּי כַּאֲשֶׁר יְיַסֵּר אִישׁ אֶת בְּנוֹ יְהוָה אֱלֹהֶיךָ מְיַסְּרֶךָּ` (דברים ח:ה) | equivalent | האב המכה את בנו כמשל לאל (ההמשך ב־E137) |
| E136 | n(,j) ḫpr.yt rs.wt ⸢ḥr⸣ =s grḥ mj hrw smꜣm.n =f ẖꜣk.w.pl-jb m-m mj {ḥ}ḥwi̯ ={j} | המאורעות, אשר שוקדים עליהם בלילה כביום. הרג את זוממי־הרעה שבהם, כמו שמכה | `וּכְאָב אֶת-בֵּן יִרְצֶה` (משלי ג:יב) | equivalent |  |
| E137 | z zꜣ =f ḥr sn =f jw nṯr rḫ.w rn nb jmi̯ =k jri̯ mn,t nb(.t) ⟨r⟩ rʾ =j ḏḏ shp,w | איש את בנו בגלל אחיו. והאל יודע כל שם. אל תעשה כל מכאוב נגד פי, הנותן תקנות | `כִּי כַּאֲשֶׁר יְיַסֵּר אִישׁ אֶת בְּנוֹ יְהוָה אֱלֹהֶיךָ מְיַסְּרֶךָּ` (דברים ח:ה) | equivalent | המשל של האב המכה את בנו; במצרית הוא מכה "בגלל אחיו" – עונש של אחד לטובת השאר |
| E137 | z zꜣ =f ḥr sn =f jw nṯr rḫ.w rn nb jmi̯ =k jri̯ mn,t nb(.t) ⟨r⟩ rʾ =j ḏḏ shp,w | איש את בנו בגלל אחיו. והאל יודע כל שם. אל תעשה כל מכאוב נגד פי, הנותן תקנות | `לְכֻלָּם בְּשֵׁם יִקְרָא` (ישעיהו מ:כו) | equivalent | האל שמכיר כל אחד בשמו (שם – הכוכבים) |
| E137 | z zꜣ =f ḥr sn =f jw nṯr rḫ.w rn nb jmi̯ =k jri̯ mn,t nb(.t) ⟨r⟩ rʾ =j ḏḏ shp,w | איש את בנו בגלל אחיו. והאל יודע כל שם. אל תעשה כל מכאוב נגד פי, הנותן תקנות | `וָאֵדָעֲךָ בְּשֵׁם` (שמות לג:יז) | equivalent |  |
| E137 | z zꜣ =f ḥr sn =f jw nṯr rḫ.w rn nb jmi̯ =k jri̯ mn,t nb(.t) ⟨r⟩ rʾ =j ḏḏ shp,w | איש את בנו בגלל אחיו. והאל יודע כל שם. אל תעשה כל מכאוב נגד פי, הנותן תקנות | `וְכֹל אֲשֶׁר יִקְרָא לוֹ הָאָדָם נֶפֶשׁ חַיָּה הוּא שְׁמוֹ` (בראשית ב:יט) | divergence | בבראשית האדם נותן שמות לבריות; כאן האל יודע את שמות כולם. |
| E138 | nb ḥr nsw,t swn ḥr =k ṯsi̯ =k m z jḫ pḥ =k wj nn srḫ,y =k m smꜣm | כולן, שעל המלך, הפותח את פניך: תקום כאיש, ואז תשיג אותי, ואין לך מאשים. אל תהרוג | `וְחָזַקְתָּ וְהָיִיתָ לְאִישׁ` (מלכים א ב:ב) | equivalent | צוואת המלך הזקן לבנו היורש, בשני המקומות: "תקום כאיש" / "היית לאיש" |
| E138 | nb ḥr nsw,t swn ḥr =k ṯsi̯ =k m z jḫ pḥ =k wj nn srḫ,y =k m smꜣm | כולן, שעל המלך, הפותח את פניך: תקום כאיש, ואז תשיג אותי, ואין לך מאשים. אל תהרוג | `וְהָיְתָה עִמּוֹ וְקָרָא בוֹ כָּל יְמֵי חַיָּיו` (דברים יז:יט) | equivalent | "התקנות שעל המלך": מערכת כללים שהמלך מצווה ללמוד |
| E138 | nb ḥr nsw,t swn ḥr =k ṯsi̯ =k m z jḫ pḥ =k wj nn srḫ,y =k m smꜣm | כולן, שעל המלך, הפותח את פניך: תקום כאיש, ואז תשיג אותי, ואין לך מאשים. אל תהרוג | `וְהַשָּׂטָן עֹמֵד עַל יְמִינוֹ לְשִׂטְנוֹ` (זכריה ג:א) | equivalent | המאשים (*srḫy*) בבית הדין – במצרים: בבית הדין של המתים |
| E138 | nb ḥr nsw,t swn ḥr =k ṯsi̯ =k m z jḫ pḥ =k wj nn srḫ,y =k m smꜣm | כולן, שעל המלך, הפותח את פניך: תקום כאיש, ואז תשיג אותי, ואין לך מאשים. אל תהרוג | `לֹא תִרְצָח` (שמות כ:יב) | divergence | כאן "אל תהרוג" הוא עצה מדינית למלך (אל תהרוג את מקורבך), לא מצווה כללית. |
| E139 | wꜥ tkn jm =k ḥsi̯.n =k sw nṯr rḫ sw wꜥ jm =sn pw wꜣḏ tp tꜣ nṯr.pl pw šms,w | אחד הקרוב אליך, אשר העדפת אותו: האל יודע אותו. אחד מהם הוא הרענן על פני הארץ; אֵלִים הם מלוויו של | `וְיֹדֵעַ חֹסֵי בוֹ` (נחום א:ז) | equivalent | ידיעת האל את האדם כהגנה עליו. |
| E140 | nsw,t jmi̯ mr,wt =k n tꜣ-tm,w s{w}ḫꜣ pw qd nfr rnp,t sbi̯.w jm? | המלך. תן את אהבתך לכל בני־הארץ: זכרון הוא – המידה הטובה, כשהלכו השנים. | `זֵכֶר צַדִּיק לִבְרָכָה` (משלי י:ז) | equivalent | הזכרון הטוב שנשאר אחרי האדם. |
| E143 | n(,j) ẖ,t =j jrr =k m grg m ḥr =k jwi̯ =s ḥtp.w mj gmi̯.yt | שבבטני; תעשה כמיוסד לפניך. בא הוא (אל סופו) בשלום, כפי שנמצא | `כִּי-נָעִים כִּי-תִשְׁמְרֵם בְּבִטְנֶךָ` (משלי כב:יח) | equivalent | הבטן כמקום שבו נשמרים דברי החכמה |
| E143 | n(,j) ẖ,t =j jrr =k m grg m ḥr =k jwi̯ =s ḥtp.w mj gmi̯.yt | שבבטני; תעשה כמיוסד לפניך. בא הוא (אל סופו) בשלום, כפי שנמצא | `כִּי-נָעִים כִּי-תִשְׁמְרֵם בְּבִטְנֶךָ` (משלי כב:יח) | equivalent | `סוֹף דָּבָר הַכֹּל נִשְׁמָע` (קוהלת יב:יג) – נוסחת סיום של ספר חכמה. |
| E146 | tm štm bꜣk n nb =f zẖꜣ,w njs ḥsb ṯs | אשר אינו מלעיז על עבד אל אדוניו, הסופר המחשב את חשבון המכס, | `אַל-תַּלְשֵׁן עֶבֶד אֶל-אֲדֹנָו` (משלי ל:י) | equivalent | אותו מוסר במלים כמעט זהות: לא להלשין על עבד אצל אדוניו; במריכרע זו תכונה בשבחי הסופר, במשלי – אזהרה. |
