# Project 2: Egyptian creation (`בריאה במצרים`)

## Scope
- **MK** – the Instruction for Merikare E 130–138 (pPetersburg 1116A verso, the hymn to the creator and its sequel).
  E 130–136 were translated in the Ugaritic corpus's fifth-day dossier (`../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/
  annotated-MK.rtl.md`): this project starts from that Hebrew and keeps it, or revises the dossier with a reason.
- **PT571, PT486** – the "not yet" spells (Pepi I); **PT527, PT600** – Atum's self-creation and the Heliopolitan
  Ennead (Merenre, Pepi II).
- **MT** – the Memphite Theology (the Shabaka Stone, BM EA 498), all the lines El Hawary 2010 edits.

## Base texts
AED-TEI (TLA 2018, CC BY-SA 4.0) for MK and the PT spells; El Hawary 2010 (our transcription) for MT.

## MK E130–E138 and the Pyramid Texts (PT 571, 486, 527, 600)

### Scope
Translator 1 of project 2, first part (Round 4 run 3): **MK** E130–E138 (9 lines; the hymn to the creator and the
start of the old king's closing advice), **PT571** P/V/W.34–37 (4 wall columns, Pepi I), **PT486** P/A/W.58–60 (3,
Pepi I), **PT527** M/C.med/W.84–87 (4, Merenre), **PT600** N/F/E.inf.17–23 (7, Pepi II) – 27 lines, all drafted, nothing
lost (small restorations in MK E132–E135 and PT486 58–59). MK: the god as shepherd of "his flock", mankind – sky and
earth made for them, breath, images, food, light, a shrine, rulers, magic, punishment of the plotters – then "the god
knows every name" and the father's words to his son. PT571/486: the king born "before the sky came into being". PT527/600:
Atum's self-creation at Heliopolis, Shu and Tefnut from his semen / his sneeze and spittle, the Ennead.

### Sources consulted
The base (AED-TEI, TLA 2018) through `egypt_tools.py data <KEY> --wit`: MK with pMoscow 4658 and pCarlsberg VI (both
consulted at every line: Moscow reads `m swḥ,t` "in the egg" at E134, both have `smꜣm.n=f`, `ḥḏi̯.n=f` at E132 and the
sequel of E138); PT571 with the damaged copy P/D post/W 80–83; PT486 with Pepi II's complete copy N/C med/E 66–74 (it has
`m tꜣ` at 60, omitted in the base); PT527, PT600 single witnesses. The TLA German (`tr`) read after drafting each text.
Allen, Faulkner, Lichtheim, Quack only from memory, never quoted. The dossier's `annotated-MK.rtl.md` (E130–E136) as the
starting point and format model; AM's lexicon (`lex`) for every shared lemma.

### Decisions
- **MK = the dossier, revised where the corpus binds** (each revision stated in its entry; the coordinator applies them to
  the dossier): see "Revised dossier lines" below.
- **One Hebrew per lemma inside MK:** dr "drive off" = `הרחיק` (E130), ḫsf "ward off" = `הדף` (E135, as AM's §10.1.2);
  ṯs "join, tie" = `קָשַׁר` (E133; AM 25.1 `התקשר`), ṯsj "raise" = `הקים` / `קם` (E134, E135, E138; AM 5.3); mꜣꜣ = `חזה`
  (E133; AM); ḥḏj = `הזיק ל־` (E132; AM); sꜣ-ꜥ = `חלש־הזרוע` (E135; AM 4.5).
- **E137–E138** (new): `איש את בנו בגלל אחיו. והאל יודע כל שם. אל תעשה כל מכאוב נגד פי, הנותן תקנות` /
  `כולן, שעל המלך, הפותח את פניך: תקום כאיש, ואז תשיג אותי, ואין לך מאשים. אל תהרוג`. The subject `איש` of E136's
  `שמכה` opens E137 (the base marks `{ḥ}` and `={j}` superfluous); mn.t = `מכאוב` (TLA "Kümmerliches"; "suffering,
  illness"), shp.w = `תקנות` (the base has shp.w, not hp.w "laws"), swn ḥr = `הפותח את פניך` (TLA's participle;
  Lichtheim's imperative "instruct yourself" in the apparatus), pḥ = `השיג` (AM 17.5), srḫy = `מאשים`; `אל תהרוג` (m smꜣm)
  ends E138, its object is in E139.
- **The PT formulas** as renderings §6.5: `דְּבָרִים לֵאמֹר:` (PT527 86's closing `ḏd-mdw zp 4` introduces the next spell:
  `דְּבָרִים לֵאמֹר, ארבע פעמים:`); `טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ,` (the pre-set gate line, kept),
  `טרם נולדו הָאֵלִים` for n msi̯.t, `טרם נהיה המוות`; the rest of each `טרם` series by the same frame (PT486: `טרם נהיה
  *הקבוע*?`, `טרם נהיתה המריבה`, `טרם נהיתה היראה הזאת`).
- **Names:** Nfr-kꜣ-Rꜥ = `נֶפֶרְכָּרֶע` (by analogy with `מֶרִיכָּרֶע`: kꜣ-Rꜥ names keep `רֶע`), Mry-Rꜥ (Pepi I's throne
  name) = `מְרִירַא` (as `מֶרֶנְרַא`), Nmtj-m-zꜣ=f = `נֶמְתִּי־אֶם־סָאֶף` (z → ס, §2.2), Atum-Khepri = `אָתוּם־חֶפְּרִי`,
  Srq.t = `סֶרְקֶת`, Thoth `תְּחוּת`; places: Ḥw.t-bnw = `בֵּית־הַבֶּנוּ`, Ḥw.t-Km-wr = `בית־השחור־הגדול`, Ḥw.t-jtj =
  `בית־הריבון`, sḫ.t-ḥtp = `שְׂדֵה־הַקָּרְבָּנוֹת`, nn.t "the counter-sky" = `שְׁמֵי־הַמַּטָּה`, psḏ.t-pḏ.wt =
  `תשעת־הקשתות`; dḏꜣ / dmꜣꜥ (unclear) transliterated `דְגָ׳א`, `דְמָאע` with `?`.
- **Key words:** psḏ.t = `התשיעייה` (dual `שתי התשיעיות`), psḏ.t ꜥꜣ.t = `התשיעייה הגדולה`; bnbn = `הַבֶּנְבֶּן`; qꜣꜣ =
  `גִּבְעָה` and qꜣj = `גָּבַהּ` (the pun `גבהת כגבעה`); in PT486 59 (nails) qꜣj = `ארך` (split by sense, noted);
  jšš = `עָטַשׁ`, tfn = `יָרַק` (the puns on Shu / Tefnut explained, not imitated); ḥnn = `זַכְרוּת`, nḏmm.t = `תענוג`,
  ḫfꜥ = `אגרוף` (PT527 85 rendered plainly); kꜣ = `כָּא` ★, ꜥ kꜣ = `זרוע־כָּא`; dnḫnḫ (from dnḥ "wing") = `סוֹכֵךְ` (Ps 91:4
  `יָסֶךְ`); nḏ "protect" = `שמר` (PT600 20), nḏ ḥr "greet" = `שלום לפניכם` (PT486 58; one lemma, the greeting idiom
  rendered as an idiom); ḫwj = `הגן` (AM; with ḫpr: `תגן לבל יהיה …`); mḥr = `פירמידה` (AM 2.9); kꜣ.t "work, building"
  = `מפעל` in the first draft, changed to `מְלָאכָה` by the coordinator's ruling (§10.8.6; PT600 18, 20, 21 aligned); ẖ.t (tla122080, AM's "belly") = `בטן` also for the gods' "corporation" (PT486 59
  `הבטן הגדולה הזאת`); jdr = `עדר`?; njk = `נענש` / `עונש`; šwꜣ = `ייוורש` (Prov 30:9 `אִוָּרֵשׁ`); snḏ (noun) = `יראה`,
  šꜥ.t = `בעתה`, ẖnnw = `מריבה` (AM's `מהומה` is another word); mꜣꜥ-ḫrw = `אמיתי־הקול` (§4.1); wꜥb = `טיהר`; wṯz =
  `הרים`, ḏsr = `הגביה`, rmnj "carry" = `נשא` (§4.3); jsp = `מסר`; wḏꜥ = `הופרד`; zꜣ "protection" = `חסות`; sbꜣ "star" =
  `כוכב`; j.ḫm-sk = `בלתי־כָלֶה`; ḏꜣj "ferry across" = `צלח` (2 Sam 19:18); sḥḏ = `האיר`; the particle m "behold" = `הנה`;
  ḏ.t = `עד`, n-ḏ.t-ḏ.t = `עֲדֵי עַד`; hꜣ = `הוֹי`.
- **wdj "put, place"** (tla854503: PT571 37, PT527 85–86, PT600 17–18, 22) = `שָׂם`, like AM's rḏj "put" (§10.1.2): the
  two lemmas share this sense (Old Egyptian writes wdj `di̯`; the TLA lemmatizes the same writing both ways); rḏj "give" =
  `נתן` (PT486 60, PT600 23). Rejected `הניח` (AM's rḏj "let", and the hiphil of נוח, reserved for ḥtp's `נח`).
- **sꜣwj "lengthen" (PT527 84)** = `מותח`; the line read with the TLA's analysis (*jwj* + *sꜣwj* + *r=f*), the common
  reading *jwsꜣw* "masturbator" in the apparatus; marked `*…*?`.
- **Tense:** PT571 35 nhj = `יימלט` (prospective, as the TLA); PT486 59–60 the geminated hꜣꜣ=f as a time clause with future
  apodoses (`כשיירד … ירים … יישאו … ייתן`); PT600 20 j:nḏ=f as a wish (`ישמור הוא`; the TLA: "wenn er schützt").

### Open decisions for the user
- MK E134 `שליטים *[מן] הבושם*?` (base and Carlsberg *m stj*) against Moscow's *m swḥ,t* "in the egg" (most translators).
- PT527 84: the TLA's *jwj sꜣwj r=f* (`כבא ומותח לעצמו`) or *jwsꜣw* "the masturbator" (Faulkner): the second would make
  the line `אתום הוא אשר נהיה, המאונן` – plainer and widely accepted, but against the base's analysis.
- `אמיתיי־הקול` for mꜣꜥ-ḫrw as a verb (PT486 59 "his enemies will not be vindicated") – literal and per §4.1, but heavy.

### Progress log
- 2026-10-23: read the brief, the guidelines, the corpus files, the dossier; checked every dossier word against AM's lexicon
  (`lex`); drafted MK, PT571, PT486, PT527, PT600 in that order, each saved, filled and verified at once, the TLA German
  read after each draft and the תרגומים bullets written from it (it moved PT571 35 to the future, PT486 59–60 to a future
  time clause, PT527 86's rubric to the next spell, PT600 20's pḏ jb=f to an independent sentence).
- Pass (a), fidelity: every word against the parse; brackets against the base (MK `[מרד]`, `[מן]`, `[גַּב]`, `אויב[יו]`,
  PT486 `[עין]־חורוס`, `[אחד מן]`, `[שתי]`); the `{ }` and `⟨ ⟩` words not carried (MK E133 sqdd, E136 {j}).
- Pass (b), consistency: every new Hebrew word grepped (`grep --all`) and every lemma checked with `lex`; collisions removed
  (dr/ḫsf, ṯs/ṯsj, ẖnnw/AM's `מהומה`, qꜣj/sꜣwj); the repeated phrase PT600 19 = 21 identical except the person.
- Pass (c), Hebrew: the generated `translation.rtl.md` read; vocalized words checked to strip to plene (`ציווה`, `ייוורש`,
  `השיטפון`, `בית־השחור־הגדול` unvocalized after the check).
- `verify MK PT571 PT486 PT527 PT600 --strict`: 0 problems; `check_bible_quotes.py` on every file: 0 problems.

### The text on its own terms
- **Mankind exists for its own sake** (MK E130–E133): sky, earth, breath, food, daylight are made "for their sake"
  (*n jb=sn*, three times) – an Egyptian claim, not a borrowed one.
- **The creator as shepherd and as father** (MK E130, E132, E136–E137): the same god feeds his flock, hears its weeping,
  and strikes the plotters "as a man strikes his son for his brother's sake" – love and discipline in one hand.
- **Magic is a gift of god** (MK E135): *ḥkꜣ* "to ward off the arm of events" – the reverse of Deut 18:10.
- **The name is the person** (MK E137 "the god knows every name"; PT600 20–22 "in your name of 'Nine Bows'", "in his name
  'pyramid'"): the puns *psḏ.t / pḏ / psḏ.t pḏ.wt / psḏj*, *ḥrj / mḥr*, *km / Km-wr*, *jt / jtj* prove that a god and a
  place are one.
- **Death is a created thing** (PT571 35 "before death came into being"): who was born before it can escape it; the king's
  birth from Atum puts him on the far side of the first moment.
- **The world before the world** (PT486 58): no strife and no fear yet; the king born in Nun, the dark water.
- **Creation from the god's body** (PT527 85, PT600 17): the lone god produces the first couple by his own semen, or by
  sneezing and spitting – air from the nose, moisture from the mouth; the Egyptians kept both stories side by side.
- **The ka embrace** (PT600 17–18): the hieroglyph of two raised arms is the life-force passing from father to child; the
  king and his pyramid ask to be embraced like Shu and Tefnut.
- **A genealogy is a cosmology** (PT600 19): Atum → air and moisture → earth and sky → Osiris, Isis, Seth, Nephthys.
- **The dead king's wishes** (PT571 36–37, PT486 59, PT527 86–87): to be a circumpolar star, to keep his bones whole and
  his nails cut, to come and go between sky and earth, to sit among the gods in the Field of Offerings.

### Key parallels
- [equivalent] Gen 2:5 `טֶרֶם יִהְיֶה בָאָרֶץ` ↔ the PT's *n ḫpr.t* "before X came into being" (PT571 35, PT486 58) – the same
  "not yet" frame, with a different list (sky, earth, men, gods, death).
- [equivalent] Ps 90:2 `בְּטֶרֶם הָרִים יֻלָּדוּ` and Prov 8:24–25 `בְּאֵין-תְּהֹמוֹת חוֹלָלְתִּי` ↔ "before the gods were born",
  "born in Nun": birth language for what precedes creation; the king, like Wisdom, is born before it.
- [divergence] Gen 2:17 `מוֹת תָּמוּת` ↔ "before death came into being" (PT571 35): in Egypt death is a creature; in Genesis a
  sentence after creation.
- [divergence] Gen 2:7 `וַיִּפַּח בְּאַפָּיו` ↔ "you sneezed Shu" (PT600 17): air out of the god's nose, not into man's.
- [divergence] Gen 1:27 `זָכָר וּנְקֵבָה בָּרָא אֹתָם` / 2:22 ↔ PT527 85: the first male–female pair from the lone creator's
  body; Genesis's God has no body.
- [divergence] Gen 2:4 `אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ` ↔ the Ennead (PT600 19): sky and earth as born gods.
- [equivalent] Gen 6:5 / 6:7 ↔ MK E132–E133 "their thought of making rebellion": the creator punishes – but only the plotters.
- [equivalent] Deut 8:5 `כַּאֲשֶׁר יְיַסֵּר אִישׁ אֶת בְּנוֹ` ↔ MK E136–E137.
- [equivalent] Exod 12:46 `וְעֶצֶם לֹא תִשְׁבְּרוּ בוֹ` ↔ PT486 59 "no bone in him will be broken".
- [equivalent] 1 Kgs 2:2 `וְהָיִיתָ לְאִישׁ` ↔ MK E138 "you will rise as a man": a dying king's charge to his heir.

### Lines shared with other texts
- MK E130–E136 = the Ugaritic corpus's fifth-day dossier (`../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md`);
  the revisions below are to be applied there so that the two stay identical.
- PT571 35 and PT486 58 share the *n ḫpr.t p,t n ḫpr.t tꜣ* opening: identical Hebrew (`טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם
  נִהְיְתָה הָאָרֶץ,`). PT486's Pepi II copy (not translated) differs only in the name.

**Revised dossier lines (E130–E136; old → new, reason):**
- E130 `…, הדף את תַּאֲוַת הַמַּיִם, …` → `…, הרחיק את תאוות המים, …` – dr ≠ ḫsf (`הדף` is ḫsf's, E135 and AM); plene.
- E132 `… הרג את אויביו, הִשְׁמִיד את ילדיו` → `… הרג את אויב[יו], הזיק לילדיו` – ḥḏj = `הזיק` (AM); the restored suffix.
- E133 `על מחשבתם לעשות מרד. … שט הוא לראותם; הקים` → `על מחשבתם לעשות [מרד]. … שט הוא לחזות בהם; קָשַׁר` – the
  restoration; mꜣꜣ = `חזה` (AM); ṯs ≠ ṯsj (`הקים`).
- E134 `… שליטים *מן הבושם*?, …` → `… שליטים *[מן] הבושם*?, …` – the restored preposition.
- E135 `להקים את גַּב החלש. …` → `להקים את [גַּב] חלש־הזרוע. …` – sꜣ-ꜥ = `חלש־הזרוע` (AM 4.5, renderings §4.3); the
  restoration.
- E136 `הַמְּאֹרָעוֹת, … כמו *שמכה (אדם)*` → `המאורעות, … כמו שמכה` – plene; the subject `איש` stands in E137 (`{ḥ}`, `={j}`
  superfluous in the base).
- E131 unchanged.

### Proposals for the shared renderings
1. Names: Nfr-kꜣ-Rꜥ `נֶפֶרְכָּרֶע`, Mry-Rꜥ `מְרִירַא`, Nmtj-m-zꜣ=f `נֶמְתִּי־אֶם־סָאֶף`, Srq.t `סֶרְקֶת`, Atum-Khepri
   `אָתוּם־חֶפְּרִי`; Ḥw.t-bnw `בֵּית־הַבֶּנוּ`, sḫ.t-ḥtp `שְׂדֵה־הַקָּרְבָּנוֹת`, nn.t `שְׁמֵי־הַמַּטָּה`.
2. psḏ.t (the Ennead) = `התשיעייה` (plene; vocalized `הַתְּשִׁיעִיָּה` would strip to a defective form), psḏ.t ꜥꜣ.t =
   `התשיעייה הגדולה`; bnbn = `הַבֶּנְבֶּן`; qꜣꜣ "the high hill" = `גִּבְעָה` (qꜣj = `גָּבַהּ`); kꜣ = `כָּא`, ꜥ kꜣ =
   `זרוע־כָּא`; mḥr = `פירמידה`.
3. wdj "put" = `שָׂם`, sharing rḏj's "put" (above); rḏj "give" = `נתן`.
4. (Superseded by §10.8.6: kꜣ.t = `מְלָאכָה`.) kꜣ.t "work, building" (tla163020) = `מפעל` – not `מְלָאכָה`, which the corpora keep for Akkadian *šipru* and the Gen 2:2
   comparison; **the MT translator should decide** whether the Memphite Theology's kꜣ.t (if it has it beside "Ptah rested")
   takes `מלאכה` [equivalent Gen 2:2] instead, and then this line follows.
5. dnḫnḫ = `סוֹכֵךְ`, nḏ "protect" = `שמר`, ḫwj (+ ḫpr) = `הגן לבל יהיה`; ḏꜣj "ferry across" = `צלח`; ẖnnw = `מריבה`;
   snḏ (noun) = `יראה`; j.ḫm-sk = `בלתי־כָלֶה`; n-ḏ.t-ḏ.t = `עֲדֵי עַד`; hꜣ = `הוֹי`; the particle m "behold" = `הנה`.
6. The PT rubric `ḏd-mdw zp N` = `דְּבָרִים לֵאמֹר, N פעמים:` (a variant of §6.5; the verifier accepts it).

### Lessons for the guidelines
- A vocalized word must strip to the plene spelling: `הַמְּאֹרָעוֹת`, `תַּאֲוַת`, `צִוָּה`, `יִוָּרֵשׁ`, `הַשִּׁטָּפוֹן`
  all failed this silently (the verifier does not check it); check by stripping before saving.
- An earlier corpus's line copied into a new corpus must be re-checked against the new corpus's lexicon: five of seven dossier
  lines needed a change once AM had fixed its words (ḥḏj, mꜣꜣ, sꜣ-ꜥ, ḫsf) and once our base's brackets were followed.

## MT 1a–64

### Scope
Translator 1 of project 2, second part: the whole Memphite Theology as El Hawary 2010 edits it, 88 lines (labels `1a`–`64`
in his order, the split columns `10a`/`10b`/`10c` … as the base has them). Preserved: the titulary and colophon (1a–2), the
dramatic text of Geb's judgement and Horus's inheritance (3–18b), the union of the Two Lands at Memphis (13c–16c), Osiris
drowned and buried at Memphis (17c–23), fragments (24a,b–47; the stone's centre was ground away as a millstone: 24c,
28a-35a, 37-44 entirely lost), the eight forms of Ptah (48–52b), the "theology" of heart and tongue (53–61), and Osiris,
Memphis and the king (62–64). Spatia (`( )` on the stone) are rendered `(רווח ריק)` throughout (said in the intro).

### Sources consulted
The base: our transcription of El Hawary's transliteration (`memphite-transliteration.tsv`), no lemma data – every word
parsed in the פירוק. The page images (`hawary-pages/p-128.png` … `p-151.png`) read for the doubtful readings (30b, 61,
59, the split columns) and for El Hawary's German where `tr MT` printed "(not found)" (10a–12b, 13b, 13c, 17c–18c,
20c, 24a,b; pp. 133–134, 136, 138, 140), each after the section was drafted; El Hawary's footnotes on those pages (the
Ptah forms behind 28b–31b, the playful writing of ḥtp in 59, n mꜣ.tw in 19). `tr MT` for the rest, after each section.
Lichtheim, Sethe, Junker, Allen only from memory, never quoted.

### Decisions
- **ḥtp = `נח` in every line** (9 `נחו הם על שתי הארצות`, 15c `נחים ומאוחדים`, 29b `נוחו לכם`, 59 `הוא נח`, 60 `לנחת לבם`,
  61 `נחים ודבקים`), though El Hawary and others give "be content, reconciled, sit down" in most of them: the reader then
  sees that Ptah's "rest" in 59 is the same word as the peace of Horus and Seth and the gods' contentment. ḥtp "offering"
  (58–59) and ḥtp.t = `קרבן` (§4.4). The root שבת stays in the apparatus.
- **kꜣ.t "work" = `מלאכה`** (57 `כל מלאכה וכל חרושת`; §10.8.6); ḥmw.t "craft" = `חרושת` (Ex 35:33; `אומנות` avoided:
  `אָמָּן` is the loan of Akkadian *ummânu*); kꜣꜣ.t "thought" = `מחשבה`; wḏ.t-mdw = `ציווי־דברים`, wḏ.t = `ציווי`, wḏ =
  `צוה`; md.t = `דבר`, mdw-nṯr = `דבר־אל`; ḏd = `אמר`; ḫpr = `נהיה`, sḫpr = `מהווה`; jrj = `עשה`; msj = `ילד`.
- **The two hearts kept:** the stone writes ḥꜣ.tj in all the theology (52a–58) = `לבב`; jb (60, 61) = `לב`; ns = `לשון`.
- **mꜣṯ = `הגה`** ("devise; pronounce"): 3, 13c `ההוגה את השם־הגדול` (El Hawary: Ptah devised the royal titulary), 55
  `ההוגה את שמו של כל דבר`. My first drafts of 3 and 13c had the passive (`הנהגה בשם`); revised after reading him.
- **swt = `הוא`** (the independent pronoun; El Hawary's "er ist"), in every line (8 `הוא גֶּבּ`, 9 `הוא חורוס וסֵת`, 11c, 13c,
  14c, 56, 57, 59). The draft of 8 had *ḏr* "to the place"; revised to "because" (`כי משם הגיח`) after El Hawary.
- **The dramatic rubric** `ḏd-mdw X ḫft Y` = `דברים לאמר, X אל Y:` (the §6.5 formula with the speakers); the scenic labels
  (`│ Ḥrw │ mḥw │`) = `חורוס: הצפון.`
- **Names:** Zkr (Sokar) `סוֹכַּר` ★ (unvocalized it reads "sugar"); Nn.t (Naunet) `נוּנֶת`; Nfr-tm `נֶפֶרְתֵּם`;
  Wpj-wꜣ.wt (Wepwawet) `וֶפְּוָאוֶת`; Šꜣbꜣkꜣ `שַׁבַּכָּה`; Shabaka's throne name Nfr-kꜣ-Rꜥ `נֶפֶרְכָּרֶע` (as Pepi II's,
  §10.8.1); Ḥw.t-kꜣ-Ptḥ `בֵּית־כָּא־פְּתָח`; Jnbw-ḥḏ `הַחוֹמָה־הַלְּבָנָה` (§3.2); Ḥw.t-sr `בית־השר`, Ḥw.t-Zkr
  `בית־סוכר`, Psš.t-tꜣ.wj `חלוקת־שתי־הארצות`, ꜥnw `עַנוּ`, Sw `סוּ`; js.t wr.t "the Great Seat" `המושב הגדול`; Ptah's
  forms translated (`פְּתָח־נעים־החיים`, `פְּתָח־מסיר־הבכי`, `פְּתָח־הטוב`) because the dramatic lines pun on them (28b–31b).
- **Words (one Hebrew per lemma):** njsw.t `מלך`, bjtj `מלך־הצפון`, njsw.t-bjtj `מלך־הדרום־והצפון`; tꜣ-šmꜥw / tꜣ-mḥw
  `ארץ־הדרום` / `ארץ־הצפון`; smꜣ `איחד`, dmḏ `צירף`, snsn `התחבר`, ẖnm `דבק` (also ẖnm jb "please the heart": `לב … דבק
  בו`); jꜥb `אסף`; wpj `שפט`, wpj-ẖ.t "first-born" `פֶּטֶר־בִּטְנוֹ` (Ex 13:2); jwꜥ.t / jwꜥw `ירושה` / `יורש`; šnṯ
  `ריב`; tm "cease" `תם`; psš.t `חלק`; jsj `חוּשָׁה`; mḥj `טבע`; nḏr `אחז`; jṯj `תפס` (PT486); spr `הגיע`; pẖr `סבב`;
  ꜥḥ `הסיר`; sꜣb `זְאֵב` (`תן` is AM's *wnš*); ḥfꜣ.t `רמש`; ꜥw.t `צאן`; mtw.t `זרע`; jbḥ `שן`; msḏr `אוזן` (ꜥnḫ.wj
  has the same Hebrew: no other word); ssn `נשימה`; msḫn.t `אָבְנֵי הלידה` (Ex 1:16); ꜥrqj.t `הבנה`; wḥm `שנה`
  (`הַשּׁוֹנָה`, AM's word); mrj `אהב`, msḏ `שנא`; ẖrj-ḥtp / ẖrj-ḫnb.t `נושא־הנחת` / `נושא־העוון`; ḏfꜣw `מזון`;
  stwt `דימה`; ḏ.t "body" `גווייה`; jm "clay" `חרס` (`טיט` is ꜥmꜥ.t's); ḫm "shrine" `דביר`; grg `ייסד`; srwḏ `ביסס`;
  spꜣ.t `מחוז`; šnw.t `אסם` (§4.3); pr.t m ns `מוצא הלשון` (Deut 8:3); tp-tr `מועד` (`עת` is hꜣw's); stp-sꜣ `ארמון`,
  ꜥḥ "palace" `חצר`; wꜣḏ "papyrus" `פפירוס` (`גומא` kept for the apparatus), šmꜥ "sedge" `קנה`; wr ꜥꜣ `גדול ורב`.
- **Gates passed with `[היתר שער: …]`** (the verifier blocks a right word, reported to the coordinator): 9 `גבול` for
  `ṯꜣš` (a spelling of tꜣš the gate does not list); 53 `בדמות` for `tj.t` (a spelling of tjt).

### Open decisions for the user
- 9, 59 and the other ḥtp lines: `נח` everywhere (chosen) or by sense ("reconciled", "content", "sit down"), keeping `נח` only
  in 59.
- 6–8: who judges – Geb (Lichtheim, Sethe) or Ptah-as-Geb (El Hawary)? The Hebrew leaves the subject open (`הוא גֶּבּ`).
- 58 *ꜣw n jḫ.t nb*: `אורכו?` (literal) against El Hawary's "Versorgung" and Lichtheim's "significance".
- 31b / 50b *ꜥḥ rmw*: "remove the weeping" (El Hawary; chosen) or "catch fish" (a pun on rmw).

### Progress log
- 2026-10-23: aligned PT600 18, 20, 21 with the coordinator's ruling kꜣ.t = `מלאכה` (`המלאכה הזאת`, `מלאכתו זו`); verify 0.
- MT drafted in six sections (1a–9; 10a–16c; 17c–47; 48–61; 62–64), each saved, filled and verified, El Hawary's German
  read after each; the תרגומים bullets written from it, and every draft change it caused noted there (3, 6–9, 11c, 13c, 14c,
  31b, 50b, 53).
- Pass (a): brackets and spatia against the base; the { } dittography of 9 left out; restorations bracketed (`[מאזני]`,
  `[קבורת]`, `[הקנה]?` …). Pass (b): ḥtp, kꜣ.t, mꜣṯ, swt, the hearts, the formula, the repeated lines (20b = 21b, 25a = 26a,
  25b = 26b, 32b–35b identical; 18c–19 copy 62; 10a/11a parallel). Pass (c): the clean translation read; Ptah, the gods
  (`הָאֵלִים`), Osiris and Isis vocalized where the verifier or first occurrence requires.
- `verify MK PT571 PT486 PT527 PT600 MT --strict`: 0 problems; `check_bible_quotes.py` on every file: 0.

### The text on its own terms
- **The authority of the old book** (2): a king who rescues a worm-eaten book "not understood from beginning to end".
- **Kingship by inheritance, not division** (10c–18b): Geb first divides Egypt, then finds it "bad in his heart"; Horus,
  "son of his son, his first-born (opener of the belly)", takes all.
- **Memphis, the balance of the Two Lands** (14c–16c): reed and papyrus tied on Ptah's door; Upper and Lower Egypt weighed
  and found equal.
- **Osiris drowned and drawn ashore** (19, 62–63): Isis and Nephthys on the bank; the burial moved to Memphis.
- **Creation by thought and command** (53–58): the gods came into being in Ptah's heart and tongue; every creature lives by
  what the heart thinks and the tongue commands; the senses report to the heart, the heart understands, the tongue
  "repeats" – the first theory of cognition in literature.
- **The older myth reinterpreted, not rejected** (55): Atum's semen and hands are Ptah's teeth and lips.
- **Ethics inside cosmogony** (57): Ptah makes "what is loved and what is hated", life to the peaceful, death to the
  criminal.
- **The god's rest is contentment** (59): ḥtp, written as an anagram of Ptah's own name.
- **Statues are bodies the gods enter** (60): wood, stone, clay all grow on Tatenen, the earth.
- **Puns as theology**: jt / jtj, wpj-ẖ.t / Wpj-wꜣ.wt, jrj tmw / Jtmw, ꜥnḫ-tꜣ.wj, rmw "tears" / "fish".

### Key parallels
- [equivalent] Ex 20:10 `וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי` ↔ 59 "he rested (ḥtp) after he had made everything"; [divergence] Gen 2:2
  `וַיִּשְׁבֹּת … מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה` – no day, no number, no שבת; [equivalent] Gen 2:2 `מְלַאכְתּוֹ` ↔ 57 kꜣ.t.
- [equivalent] Ps 33:9 `כִּי הוּא אָמַר וַיֶּהִי; הוּא-צִוָּה וַיַּעֲמֹד` and Deut 8:3 `מוֹצָא פִי` ↔ 58 the heart's thought and
  the tongue's "issue" make everything; [divergence] Ps 33:6 – creation by word and breath, not by teeth and lips (55).
- [equivalent] Gen 2:20 (the naming) ↔ 55 the mouth "which devised the name of every thing".
- [equivalent] Gen 1:26 `בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` ↔ 53 "in the image (tj.t) of Atum".
- [divergence] Gen 2:9 `עֵץ הַדַּעַת טוֹב וָרָע` ↔ 57 "he makes what is loved and what is hated".
- [equivalent] Ex 1:16 `הָאָבְנָיִם` ↔ 56 msḫn.t, the birth-bricks of the gods.
- [equivalent] Ex 13:2 `פֶּטֶר כָּל רֶחֶם` ↔ 12c, 17a wpj-ẖ.t "opener of the belly".
- [equivalent] Prov 25:1 `אֲשֶׁר הֶעְתִּיקוּ אַנְשֵׁי חִזְקִיָּה` ↔ 2 the king who recopies the ancestors' book (Hezekiah and
  Shabaka were contemporaries).
- [divergence] Isa 44:13 ↔ 60 the gods entering their statues.

### Lines shared with other texts
- 18c–19 copy 62's Hebrew (the stone repeats the scene); 1a = 1b except the god; 10a / 11a parallel; 20b = 21b; 32b–35b.
- The formula `דברים לאמר` and the ḥtp / kꜣ.t / ḫpr words as in the Pyramid Texts and renderings §4.4, §10.8.

### Proposals for the shared renderings
1. ḥtp = `נח` in all its verbal senses (rest, be content, be reconciled), ḥtp / ḥtp.t (offering) = `קרבן`; `נחת` for ḥtp as
   a noun of the heart (60).
2. mꜣṯ = `הגה`; swt = `הוא`; jꜥb = `אסף`; dmḏ = `צירף` (smꜣ = `איחד`), snsn = `התחבר`, ẖnm = `דבק`.
3. ḥmw.t = `חרושת`; wḏ.t-mdw = `ציווי־דברים`; mdw-nṯr = `דבר־אל`; pr.t m ns = `מוצא הלשון`; ꜥrqj.t = `הבנה`.
4. wpj-ẖ.t = `פֶּטֶר־בֶּטֶן` (+ suffix); jwꜥ.t / jwꜥw = `ירושה` / `יורש`; msḫn.t = `אָבְנַיִם`; ḫm (shrine) = `דביר`;
   ḏ.t "body" = `גווייה` (beside ḏ.t "eternity" = `עד`).
5. Names: Zkr `סוֹכַּר` ★, Nn.t `נוּנֶת`, Nfr-tm `נֶפֶרְתֵּם`, Wpj-wꜣ.wt `וֶפְּוָאוֶת`, Ḥw.t-kꜣ-Ptḥ `בֵּית־כָּא־פְּתָח`;
   njsw.t-bjtj `מלך־הדרום־והצפון` (bjtj alone `מלך־הצפון`); tꜣ-šmꜥw / tꜣ-mḥw `ארץ־הדרום` / `ארץ־הצפון`.
6. The dramatic rubric `ḏd-mdw X ḫft Y` = `דברים לאמר, X אל Y:`; Spatium = `(רווח ריק)`.
7. Gate licences to add (the coordinator's call): `ṯꜣš` for `גבול`, `tj.t` for `דמות`.

### Lessons for the guidelines
- A base without lemma data needs the edition's own translation at hand for the *syntax*, not the words: El Hawary's reading
  of swt as "he (is)" and of *ḏr* as "because" changed four lines of the first draft.
- Spellings that differ from the TLA's (`ṯꜣš`, `tj.t`) slip past gates licensed by TLA spellings: license gates by the
  edition's spellings too.

## Review pass (a): fidelity (2026-10-23)

**What was checked.** Every entry of MK E130–E138, PT571, PT486, PT527, PT600 and MT 1a–64 (88 entries): the `>` line
against the base line and the TLA lemma/morphology data (`data`), for MT against El Hawary's transliteration parsed by
hand (page images spot-checked: p-132 = MT 8–9, p-149 = MT 59–61; the transcription matches); every content word, every
negation (`n sḏm.t=f` `טרם`, `n sḏm=f`, `n sḏm.n=f`, `tm`, `jmi̯` / `m` prohibitives, `nn`), tense / aspect, person, number,
passive and stative; the subject of each verb; the brackets (`[ ]`, `[…]`, `?`, `( )` / `⟨ ⟩` not carried, `{ }` left out);
the פירוק against the Hebrew actually written; the line breaks. Second check: the TLA's German (`tr`) and El Hawary's
German. Risk points read twice: PT571 35–37, PT486 58–59, PT527 84, PT600 17–23, MT 53–61. Result: the Pyramid Texts and
Merikare are sound (no negation, tense or person error); the faults were in MT.

**Changes** (label: old → new, reason):
- **MK E134** (פירוק only; the Hebrew line is unchanged): `ṯs,w` "מקימים" now notes the TLA's singular participle
  ("einen Unterstützer") and the plural reading chosen. **No Hebrew line of MK E130–E136 changed.**
- **PT486 P/A/W.59** (פירוק only): the gloss `("לא יוורש …")` → `("לא ייוורש …")`, as the line is written.
- **PT600 N/F/E.inf.19** (פירוק only): `dnḫnḫ=k` after `mr` now named as *sḏm=f* read as past (as the TLA).
- **MT 9** (פירוק only): `ḥtp=sn` – the past reading stated (El Hawary: present).
- **MT 15c** (פירוק only): the gloss said `("[הסוף]?")` while the line has `[הקנה]?` (`סוּף` is the gated loanword of ṯwfj) –
  aligned to the line.
- **MT 16c:** `אשר נשקלו בהם` → `אשר נִשְׂאוּ בהם`. fꜣj is `נָשָׂא` throughout the corpus (renderings §10.10.4, merged after
  MT was drafted); "to lift in the balance" is Hebrew for weighing (`בְּמֹאזְנַיִם יִשְׂאוּ-יָחַד` (איוב ו:ב), added to the
  הקבלה); parse and note adjusted.
- **MT 27** (פירוק only): `dj Js.t` – the present reading stated (El Hawary: past).
- **MT 53:** `והוא – כלבב הזה` → `ו(הוא) – כלבב הזה`: after `sk` the subject is not written.
- **MT 54:** `כל הרמש` → `כל הנחשים`: ḥfꜣ.t is `נָחָשׁ` (renderings §10.11.2; the Cow 56–58, 87, 90); `רמש` brought
  Gen 1:26's own word into the line. The הקבלה keeps Gen 1:26 and now contrasts the two lists; note rewritten.
  (The MT decision list above, "ḥfꜣ.t `רמש`", is superseded.)
- **MT 58:** `וכך נהיה שאומרים` → `(וכך) נהיה שאומרים`: "so" is not in `ḫpr.n ḏd`.
- **MT 61:** `אשר נהיו בו. ואספו לו כל האלים וכאיהם` → `ונהיו בו. הוא אסף לו את כל האלים ואת כאיהם`. `(jw) ḫpr.n=sn jm` is
  an independent clause, not a relative one; and the draft's `ואספו לו` (gods as subject of a transitive verb with no
  object) left `swt` unrendered. Now Ptah (`swt`) is the subject of `jꜥb n=f`, as in line 7 (`jꜥb n=f psḏ.t` `אשר אסף לו
  את התשיעייה`) and in El Hawary ("der in sich vereint alle Götter und ihre Ka-Kräfte"). תרגומים extended.

Lines whose Hebrew changed: MK 0, PT571 0, PT486 0, PT527 0, PT600 0, MT 5 (16c, 53, 54, 58, 61); parse-only fixes: MK 1,
PT486 1, PT600 1, MT 3.

**Cruxes left (translator's choice kept, marked, alternative in the apparatus):** MK E134 `*[מן] הבושם*?` (pMoscow
*m swḥt* "from the egg"); PT571 35 `לעדריכם?`, 37 `בכסא־המשא?`, `*ישרתו*?`; PT486 58 `*מחולל־השיטפון*?`, `*הקבוע*?`,
59 `*נגרעים בגלל קולם*?`; PT527 84 `*כבא ומותח לעצמו*?` (or *jwsꜣw* "the masturbator"); PT600 22 `*צולחים ומונהגים
בדג׳א, בדמאע*?`, 23 `*כקנים*?`, `*בסוכות*?`; MT 13b `*המוּלָד*?`, 15c `[הקנה]?`, 58 `*אורכו*?`, 61 `נחים ודבקים` (El
Hawary: two epithets of Ptah, "Zufriedensteller und Vereiniger ist der Herr beider Länder" – recorded in the entry).
Not marked but noted: MT 6–7 `אסף לו` ("to himself" or "to him", El Hawary "übergab"); MT 4 `njsw.t` `כמלך` beside
`bjtj` `כמלך־הצפון` (lemma-consistent, asymmetric in Hebrew – for pass (b)).

**Checks:** `egypt_tools.py build`; `verify MK PT571 PT486 PT527 PT600 MT HC --strict` 0 problems;
`check_bible_quotes.py` on every file of both projects 0 problems.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (MK)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
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

### Parallels index (PT571)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| P/V/W.34 | ḏ(d)-mdw j(w)r mʾw,t n.t Ppy jm =f jm(,j) n{t}n,t msi̯ Ppy pn jn jt(j) =f (J)tm(,w) | דְּבָרִים לֵאמֹר: הרתה בו אמו של פֶּפִּי, אשר בִּשְׁמֵי־הַמַּטָּה; נולד פפי זה מאת אביו, אָתוּם, | `יְהוָה אָמַר אֵלַי בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | equivalent | המלך כבנו של האל, שנולד ממנו; במצרים זו לידה ממש (אם, הריון, אב), בתהלים – הכרזה |
| P/V/W.34 | ḏ(d)-mdw j(w)r mʾw,t n.t Ppy jm =f jm(,j) n{t}n,t msi̯ Ppy pn jn jt(j) =f (J)tm(,w) | דְּבָרִים לֵאמֹר: הרתה בו אמו של פֶּפִּי, אשר בִּשְׁמֵי־הַמַּטָּה; נולד פפי זה מאת אביו, אָתוּם, | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ` (בראשית א:כז) | divergence | במצרים המלך (ולא האדם בכלל) נולד מן האל הבורא. |
| P/V/W.35 | n ḫpr.t p,t n ḫpr.t tꜣ n ḫpr.t r(m)ṯ.pl n msi̯.t nṯr.pl n ḫpr.t m(w)t nhj Ppy pn hrw ẖr(,j) m(w)t mr nhi̯.t Stš hrw =f ẖr(,j) m(w)t jw Ppy pn jr jdr.pl? =ṯn nṯr.pl nn,t(j).w j:ḫm.w n(j)k n ḫft(,j).w =sn n n(j)k Ppy pn n ḫft(,j).w =f | טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיו בני האדם, טרם נולדו הָאֵלִים, טרם נהיה המוות. יימלט פפי זה מן היום אשר תחת המוות, כהימלט סֵת מיומו אשר תחת המוות. פפי זה – לעדריכם?, אֵלִים אשר בשמי־המטה, אשר אינם מכירים עונש בגלל אויביהם; לא ייענש פפי זה בגלל אויביו. | `וְכֹל שִׂיחַ הַשָּׂדֶה טֶרֶם יִהְיֶה בָאָרֶץ וְכָל עֵשֶׂב הַשָּׂדֶה טֶרֶם יִצְמָח` (בראשית ב:ה) | equivalent | אותה צורת "עדיין לא" בתיאור הרגע שלפני הבריאה (*n sḏm.t=f* = `טֶרֶם`); אבל בבראשית ב החסר הוא שיח, עשב, גשם ואדם – כאן השמים, הארץ, בני האדם, האלים והמוות |
| P/V/W.35 | n ḫpr.t p,t n ḫpr.t tꜣ n ḫpr.t r(m)ṯ.pl n msi̯.t nṯr.pl n ḫpr.t m(w)t nhj Ppy pn hrw ẖr(,j) m(w)t mr nhi̯.t Stš hrw =f ẖr(,j) m(w)t jw Ppy pn jr jdr.pl? =ṯn nṯr.pl nn,t(j).w j:ḫm.w n(j)k n ḫft(,j).w =sn n n(j)k Ppy pn n ḫft(,j).w =f | טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיו בני האדם, טרם נולדו הָאֵלִים, טרם נהיה המוות. יימלט פפי זה מן היום אשר תחת המוות, כהימלט סֵת מיומו אשר תחת המוות. פפי זה – לעדריכם?, אֵלִים אשר בשמי־המטה, אשר אינם מכירים עונש בגלל אויביהם; לא ייענש פפי זה בגלל אויביו. | `בְּטֶרֶם הָרִים יֻלָּדוּ וַתְּחוֹלֵל אֶרֶץ וְתֵבֵל` (תהלים צ:ב) | equivalent | גם שם הבריאה שלפני "טרם" מתוארת בלשון לידה, כמו "טרם נולדו האלים" |
| P/V/W.35 | n ḫpr.t p,t n ḫpr.t tꜣ n ḫpr.t r(m)ṯ.pl n msi̯.t nṯr.pl n ḫpr.t m(w)t nhj Ppy pn hrw ẖr(,j) m(w)t mr nhi̯.t Stš hrw =f ẖr(,j) m(w)t jw Ppy pn jr jdr.pl? =ṯn nṯr.pl nn,t(j).w j:ḫm.w n(j)k n ḫft(,j).w =sn n n(j)k Ppy pn n ḫft(,j).w =f | טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיו בני האדם, טרם נולדו הָאֵלִים, טרם נהיה המוות. יימלט פפי זה מן היום אשר תחת המוות, כהימלט סֵת מיומו אשר תחת המוות. פפי זה – לעדריכם?, אֵלִים אשר בשמי־המטה, אשר אינם מכירים עונש בגלל אויביהם; לא ייענש פפי זה בגלל אויביו. | `בְּטֶרֶם הָרִים הָטְבָּעוּ לִפְנֵי גְבָעוֹת חוֹלָלְתִּי` (משלי ח:כה) | equivalent | החכמה "נולדה" לפני הבריאה, כמו המלך כאן |
| P/V/W.35 | n ḫpr.t p,t n ḫpr.t tꜣ n ḫpr.t r(m)ṯ.pl n msi̯.t nṯr.pl n ḫpr.t m(w)t nhj Ppy pn hrw ẖr(,j) m(w)t mr nhi̯.t Stš hrw =f ẖr(,j) m(w)t jw Ppy pn jr jdr.pl? =ṯn nṯr.pl nn,t(j).w j:ḫm.w n(j)k n ḫft(,j).w =sn n n(j)k Ppy pn n ḫft(,j).w =f | טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיו בני האדם, טרם נולדו הָאֵלִים, טרם נהיה המוות. יימלט פפי זה מן היום אשר תחת המוות, כהימלט סֵת מיומו אשר תחת המוות. פפי זה – לעדריכם?, אֵלִים אשר בשמי־המטה, אשר אינם מכירים עונש בגלל אויביהם; לא ייענש פפי זה בגלל אויביו. | `כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת תָּמוּת` (בראשית ב:יז) | divergence | בבראשית המוות בא לעולם בגזרה, אחרי הבריאה ובעקבות מעשה האדם; כאן המוות הוא דבר ש"נהיה" כמו השמים והארץ, ומי שנולד לפניו יכול להימלט ממנו |
| P/V/W.35 | n ḫpr.t p,t n ḫpr.t tꜣ n ḫpr.t r(m)ṯ.pl n msi̯.t nṯr.pl n ḫpr.t m(w)t nhj Ppy pn hrw ẖr(,j) m(w)t mr nhi̯.t Stš hrw =f ẖr(,j) m(w)t jw Ppy pn jr jdr.pl? =ṯn nṯr.pl nn,t(j).w j:ḫm.w n(j)k n ḫft(,j).w =sn n n(j)k Ppy pn n ḫft(,j).w =f | טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיו בני האדם, טרם נולדו הָאֵלִים, טרם נהיה המוות. יימלט פפי זה מן היום אשר תחת המוות, כהימלט סֵת מיומו אשר תחת המוות. פפי זה – לעדריכם?, אֵלִים אשר בשמי־המטה, אשר אינם מכירים עונש בגלל אויביהם; לא ייענש פפי זה בגלל אויביו. | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | equivalent | נצחון על המוות. |
| P/V/W.36 | tm.jw m(w)t n nzw n m(w)t Ppy pn n nzw tm.jw m(w)t n m(w)t nb n m(w)t Ppy n m(w)t nb j:ḫm-sk pw Ppy zꜣ p,t wr.t ḥr.t-jb Ḥw(,t) Srq,t šdi̯.n n =f Rꜥw Mri̯,y-Rꜥw pn r p,t ꜥnḫ Ppy pn mr ꜥnḫ ꜥq m (j)mn,t p,t pri̯ =f m jꜣb,t p,t wḏ.n jm(,j)-ḥn.tj≡f Ppy pn | הבלתי מתים בגלל מלך – לא ימות פפי זה בגלל מלך; הבלתי מתים בגלל כל מת – לא ימות פפי בגלל כל מת. בִּלְתִּי־כָלֶה הוא פפי, בן השמים הגדולים אשר בתוך בֵּית־סֶרְקֶת. חילץ לו רַא את מְרִירַא זה אל השמים: יחיה פפי זה כשם שחי הנכנס במערב השמים, ויוצא הוא ממזרח השמים. ציווה אשר־בשירותו את פפי זה | `וּמַצְדִּיקֵי הָרַבִּים כַּכּוֹכָבִים לְעוֹלָם וָעֶד` (דניאל יב:ג) | equivalent | אחרי המוות כוכבים לעד; במצרים זה גורלו של המלך, בדניאל – של "מצדיקי הרבים" |
| P/V/W.36 | tm.jw m(w)t n nzw n m(w)t Ppy pn n nzw tm.jw m(w)t n m(w)t nb n m(w)t Ppy n m(w)t nb j:ḫm-sk pw Ppy zꜣ p,t wr.t ḥr.t-jb Ḥw(,t) Srq,t šdi̯.n n =f Rꜥw Mri̯,y-Rꜥw pn r p,t ꜥnḫ Ppy pn mr ꜥnḫ ꜥq m (j)mn,t p,t pri̯ =f m jꜣb,t p,t wḏ.n jm(,j)-ḥn.tj≡f Ppy pn | הבלתי מתים בגלל מלך – לא ימות פפי זה בגלל מלך; הבלתי מתים בגלל כל מת – לא ימות פפי בגלל כל מת. בִּלְתִּי־כָלֶה הוא פפי, בן השמים הגדולים אשר בתוך בֵּית־סֶרְקֶת. חילץ לו רַא את מְרִירַא זה אל השמים: יחיה פפי זה כשם שחי הנכנס במערב השמים, ויוצא הוא ממזרח השמים. ציווה אשר־בשירותו את פפי זה | `וְאֵינֶנּוּ כִּי לָקַח אֹתוֹ אֱלֹהִים` (בראשית ה:כד) | equivalent | האל "לוקח" את האדם אליו |
| P/V/W.36 | tm.jw m(w)t n nzw n m(w)t Ppy pn n nzw tm.jw m(w)t n m(w)t nb n m(w)t Ppy n m(w)t nb j:ḫm-sk pw Ppy zꜣ p,t wr.t ḥr.t-jb Ḥw(,t) Srq,t šdi̯.n n =f Rꜥw Mri̯,y-Rꜥw pn r p,t ꜥnḫ Ppy pn mr ꜥnḫ ꜥq m (j)mn,t p,t pri̯ =f m jꜣb,t p,t wḏ.n jm(,j)-ḥn.tj≡f Ppy pn | הבלתי מתים בגלל מלך – לא ימות פפי זה בגלל מלך; הבלתי מתים בגלל כל מת – לא ימות פפי בגלל כל מת. בִּלְתִּי־כָלֶה הוא פפי, בן השמים הגדולים אשר בתוך בֵּית־סֶרְקֶת. חילץ לו רַא את מְרִירַא זה אל השמים: יחיה פפי זה כשם שחי הנכנס במערב השמים, ויוצא הוא ממזרח השמים. ציווה אשר־בשירותו את פפי זה | `וַיַּעַל אֵלִיָּהוּ בַּסְעָרָה הַשָּׁמָיִם` (מלכים ב ב:יא) | equivalent | עלייה לשמים בלי מוות |
| P/V/W.36 | tm.jw m(w)t n nzw n m(w)t Ppy pn n nzw tm.jw m(w)t n m(w)t nb n m(w)t Ppy n m(w)t nb j:ḫm-sk pw Ppy zꜣ p,t wr.t ḥr.t-jb Ḥw(,t) Srq,t šdi̯.n n =f Rꜥw Mri̯,y-Rꜥw pn r p,t ꜥnḫ Ppy pn mr ꜥnḫ ꜥq m (j)mn,t p,t pri̯ =f m jꜣb,t p,t wḏ.n jm(,j)-ḥn.tj≡f Ppy pn | הבלתי מתים בגלל מלך – לא ימות פפי זה בגלל מלך; הבלתי מתים בגלל כל מת – לא ימות פפי בגלל כל מת. בִּלְתִּי־כָלֶה הוא פפי, בן השמים הגדולים אשר בתוך בֵּית־סֶרְקֶת. חילץ לו רַא את מְרִירַא זה אל השמים: יחיה פפי זה כשם שחי הנכנס במערב השמים, ויוצא הוא ממזרח השמים. ציווה אשר־בשירותו את פפי זה | `הַשָּׁמַיִם אֶעֱלֶה מִמַּעַל לְכוֹכְבֵי אֵל אָרִים כִּסְאִי` (ישעיהו יד:יג) | divergence | עליית המלך אל הכוכבים, שהמצרי מבקש לעצמו, היא בישעיהו חטא היוהרה של מלך בבל. |
| P/V/W.37 | n jm(,j) zpꜣ =f ḥnj =sn Ppy pn Ppy pw sbꜣ zꜣ Rꜥw ḥr Ppy pn n wḏꜥ zꜣ Rꜥw ḥr Ppy pn wdi̯.n n =f Ḥr,w Ppy pn ⟨tp⟩ ⟨r⟩mn.du =f jsp =f Ppy pn n Šw ḏsr ꜥ.y ẖr(,j).wj Nw,t Rꜥw jmi̯ ꜥ =k n Ppy pn nṯr-ꜥꜣ jmi̯ ꜥb,t =k n Ppy pn ꜥnḫ =f ḏ,t | לאשר בכסא־המשא? שלו – *ישרתו*? הם את פפי זה. פפי – כוכב הוא; חסות רַא על פפי זה, לא תופרד חסות רַא מעל פפי זה. שם לו חוֹרוּס את פפי זה על כתפיו, ימסור הוא את פפי זה לְשׁוּ, המגביה את הזרועות אשר תחת נוּת. רַא, תן את זרועך לפפי זה! האל הגדול, תן את מטה־המזלג שלך לפפי זה! יחיה הוא לעד. | `וַיַּעַשׂ אֱלֹהִים אֶת הָרָקִיעַ וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ` (בראשית א:ז) | divergence | במצרים השמים (נוּת, אלה) מוחזקים למעלה בזרועותיו של שׁוּ, אל האוויר, העומד בין הארץ לשמים; בבראשית – רקיע שנעשה ומבדיל בין מים למים |
| P/V/W.37 | n jm(,j) zpꜣ =f ḥnj =sn Ppy pn Ppy pw sbꜣ zꜣ Rꜥw ḥr Ppy pn n wḏꜥ zꜣ Rꜥw ḥr Ppy pn wdi̯.n n =f Ḥr,w Ppy pn ⟨tp⟩ ⟨r⟩mn.du =f jsp =f Ppy pn n Šw ḏsr ꜥ.y ẖr(,j).wj Nw,t Rꜥw jmi̯ ꜥ =k n Ppy pn nṯr-ꜥꜣ jmi̯ ꜥb,t =k n Ppy pn ꜥnḫ =f ḏ,t | לאשר בכסא־המשא? שלו – *ישרתו*? הם את פפי זה. פפי – כוכב הוא; חסות רַא על פפי זה, לא תופרד חסות רַא מעל פפי זה. שם לו חוֹרוּס את פפי זה על כתפיו, ימסור הוא את פפי זה לְשׁוּ, המגביה את הזרועות אשר תחת נוּת. רַא, תן את זרועך לפפי זה! האל הגדול, תן את מטה־המזלג שלך לפפי זה! יחיה הוא לעד. | `וּבֵין כְּתֵפָיו שָׁכֵן` (דברים לג:יב) | equivalent | האל נושא את אהובו על כתפיו (חורוס מניח את המלך על כתפיו) |
| P/V/W.37 | n jm(,j) zpꜣ =f ḥnj =sn Ppy pn Ppy pw sbꜣ zꜣ Rꜥw ḥr Ppy pn n wḏꜥ zꜣ Rꜥw ḥr Ppy pn wdi̯.n n =f Ḥr,w Ppy pn ⟨tp⟩ ⟨r⟩mn.du =f jsp =f Ppy pn n Šw ḏsr ꜥ.y ẖr(,j).wj Nw,t Rꜥw jmi̯ ꜥ =k n Ppy pn nṯr-ꜥꜣ jmi̯ ꜥb,t =k n Ppy pn ꜥnḫ =f ḏ,t | לאשר בכסא־המשא? שלו – *ישרתו*? הם את פפי זה. פפי – כוכב הוא; חסות רַא על פפי זה, לא תופרד חסות רַא מעל פפי זה. שם לו חוֹרוּס את פפי זה על כתפיו, ימסור הוא את פפי זה לְשׁוּ, המגביה את הזרועות אשר תחת נוּת. רַא, תן את זרועך לפפי זה! האל הגדול, תן את מטה־המזלג שלך לפפי זה! יחיה הוא לעד. | `וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | equivalent | חיי נצח, שבבראשית נמנעים מן האדם ובמצרים מבוקשים למלך. |

### Parallels index (PT486)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| P/A/W.58 | ḏ(d)-mdw j:nḏ ḥr =ṯn mw jni̯.w Šw wṯz.w mndf,tj wꜥb.w.n Gbb ꜥ,t.pl =f jm =sn jb.pl m-ḫt snḏ ḥꜣ,t(j).pl m-ḫt šꜥ,t msi̯ Ppy m Nw,w n ḫp[r].t p,t n ḫpr.t tꜣ n ḫpr.t smn.tj n ḫpr.t ẖnn,w n ḫpr.t snḏ pw ḫpr ḥr [jr,t]-Ḥr,w Ppy [p]w [wꜥ] [n(,j]) | דְּבָרִים לֵאמֹר: שלום לפניכם, המים אשר הביא שׁוּ, אשר הרים *מחולל־השיטפון*?, אשר טיהר בהם גֶּבּ את אבריו – לבות אחרי היראה, לבבות אחרי הבעתה! נולד פפי בנוּן טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיה *הקבוע*?, טרם נהיתה המריבה, טרם נהיתה היראה הזאת אשר נהיתה על [עין]־חוֹרוּס. פפי הוא [אחד מן] | `וְכֹל שִׂיחַ הַשָּׂדֶה טֶרֶם יִהְיֶה בָאָרֶץ` (בראשית ב:ה) | equivalent | נוסחת "טרם" (*n sḏm.t=f*) |
| P/A/W.58 | ḏ(d)-mdw j:nḏ ḥr =ṯn mw jni̯.w Šw wṯz.w mndf,tj wꜥb.w.n Gbb ꜥ,t.pl =f jm =sn jb.pl m-ḫt snḏ ḥꜣ,t(j).pl m-ḫt šꜥ,t msi̯ Ppy m Nw,w n ḫp[r].t p,t n ḫpr.t tꜣ n ḫpr.t smn.tj n ḫpr.t ẖnn,w n ḫpr.t snḏ pw ḫpr ḥr [jr,t]-Ḥr,w Ppy [p]w [wꜥ] [n(,j]) | דְּבָרִים לֵאמֹר: שלום לפניכם, המים אשר הביא שׁוּ, אשר הרים *מחולל־השיטפון*?, אשר טיהר בהם גֶּבּ את אבריו – לבות אחרי היראה, לבבות אחרי הבעתה! נולד פפי בנוּן טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיה *הקבוע*?, טרם נהיתה המריבה, טרם נהיתה היראה הזאת אשר נהיתה על [עין]־חוֹרוּס. פפי הוא [אחד מן] | `בְּאֵין-תְּהֹמוֹת חוֹלָלְתִּי` (משלי ח:כד) | equivalent | החכמה "נולדה" כשעוד לא היו תהומות; המלך המצרי נולד בתוך נוּן, המים הקדמונים עצמם |
| P/A/W.58 | ḏ(d)-mdw j:nḏ ḥr =ṯn mw jni̯.w Šw wṯz.w mndf,tj wꜥb.w.n Gbb ꜥ,t.pl =f jm =sn jb.pl m-ḫt snḏ ḥꜣ,t(j).pl m-ḫt šꜥ,t msi̯ Ppy m Nw,w n ḫp[r].t p,t n ḫpr.t tꜣ n ḫpr.t smn.tj n ḫpr.t ẖnn,w n ḫpr.t snḏ pw ḫpr ḥr [jr,t]-Ḥr,w Ppy [p]w [wꜥ] [n(,j]) | דְּבָרִים לֵאמֹר: שלום לפניכם, המים אשר הביא שׁוּ, אשר הרים *מחולל־השיטפון*?, אשר טיהר בהם גֶּבּ את אבריו – לבות אחרי היראה, לבבות אחרי הבעתה! נולד פפי בנוּן טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיה *הקבוע*?, טרם נהיתה המריבה, טרם נהיתה היראה הזאת אשר נהיתה על [עין]־חוֹרוּס. פפי הוא [אחד מן] | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם; וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | נוּן הוא המקבילה המצרית ל`תְהוֹם` (renderings §3.1: לא אותה מלה); בבראשית א:ב המים קיימים לפני הבריאה בלי שם של אל, כאן הם אל, ובתוכם נולד המלך; והמים כאן מבורכים כמים "אשר הביא שו" – האוויר |
| P/A/W.58 | ḏ(d)-mdw j:nḏ ḥr =ṯn mw jni̯.w Šw wṯz.w mndf,tj wꜥb.w.n Gbb ꜥ,t.pl =f jm =sn jb.pl m-ḫt snḏ ḥꜣ,t(j).pl m-ḫt šꜥ,t msi̯ Ppy m Nw,w n ḫp[r].t p,t n ḫpr.t tꜣ n ḫpr.t smn.tj n ḫpr.t ẖnn,w n ḫpr.t snḏ pw ḫpr ḥr [jr,t]-Ḥr,w Ppy [p]w [wꜥ] [n(,j]) | דְּבָרִים לֵאמֹר: שלום לפניכם, המים אשר הביא שׁוּ, אשר הרים *מחולל־השיטפון*?, אשר טיהר בהם גֶּבּ את אבריו – לבות אחרי היראה, לבבות אחרי הבעתה! נולד פפי בנוּן טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ, טרם נהיה *הקבוע*?, טרם נהיתה המריבה, טרם נהיתה היראה הזאת אשר נהיתה על [עין]־חוֹרוּס. פפי הוא [אחד מן] | `וָאִירָא כִּי עֵירֹם אָנֹכִי` (בראשית ג:י) | absent | "טרם נהיתה המריבה … היראה": בבראשית אין ריב ואין פחד לפני הבריאה; הם באים אחריה: הפחד – , והריב – בסיפור קין והבל (בראשית ד). |
| P/A/W.59 | ẖ,t tw ꜥꜣ.t msi̯.t m-bꜣḥ m Jwn,w j:tm.jw jṯj.w n nzw šdi̯.t =sn n sr.w j:tm.jw njk j:tm.jw ḫbi̯ n ḫr(w) =[s]n Ppy ꜣ pj n njk =f n jṯi̯.y =f n nzw n šdi̯.wy =f n sr.w n mꜣꜥ-ḫr(w) ḫft(,j).pl n(,j).w Ppy n šwꜣ Ppy pn n qꜣi̯ ꜥn,t.pl =f n ḥsb qs jm =f ⸢h⸣[ꜣ]⸢ꜣ⸣ Ppy pn m mw wṯz sw (W)sr(,w) rmni̯ sw psḏ,t.[du] | הבטן הגדולה הזאת, אשר נולדה לפנים בְּאוֹן, אשר אינם נתפסים למלך ואינם נחלצים לשרים, אשר אינם נענשים, אשר אינם *נגרעים בגלל קולם*?. ופפי – אכן כזה הוא: לא ייענש, לא ייתפס למלך, לא ייחלץ לשרים; לא יהיו אויבי פפי אמיתיי־הקול; לא ייוורש פפי זה, לא יארכו ציפורניו, לא תישבר בו עצם. כשיירד פפי זה אל המים – ירים אותו אוֹסִירִיס, יסבלו אותו [שתי] הַתְּשִׁיעִיּוֹת, | `וְעֶצֶם לֹא תִשְׁבְּרוּ בוֹ` (שמות יב:מו) | equivalent | אותו צירוף ("לא תישבר בו עצם"); בשמות – דין קרבן הפסח, כאן – שלמות גופו של המלך המת |
| P/A/W.59 | ẖ,t tw ꜥꜣ.t msi̯.t m-bꜣḥ m Jwn,w j:tm.jw jṯj.w n nzw šdi̯.t =sn n sr.w j:tm.jw njk j:tm.jw ḫbi̯ n ḫr(w) =[s]n Ppy ꜣ pj n njk =f n jṯi̯.y =f n nzw n šdi̯.wy =f n sr.w n mꜣꜥ-ḫr(w) ḫft(,j).pl n(,j).w Ppy n šwꜣ Ppy pn n qꜣi̯ ꜥn,t.pl =f n ḥsb qs jm =f ⸢h⸣[ꜣ]⸢ꜣ⸣ Ppy pn m mw wṯz sw (W)sr(,w) rmni̯ sw psḏ,t.[du] | הבטן הגדולה הזאת, אשר נולדה לפנים בְּאוֹן, אשר אינם נתפסים למלך ואינם נחלצים לשרים, אשר אינם נענשים, אשר אינם *נגרעים בגלל קולם*?. ופפי – אכן כזה הוא: לא ייענש, לא ייתפס למלך, לא ייחלץ לשרים; לא יהיו אויבי פפי אמיתיי־הקול; לא ייוורש פפי זה, לא יארכו ציפורניו, לא תישבר בו עצם. כשיירד פפי זה אל המים – ירים אותו אוֹסִירִיס, יסבלו אותו [שתי] הַתְּשִׁיעִיּוֹת, | `שֹׁמֵר כָּל-עַצְמוֹתָיו; אַחַת מֵהֵנָּה לֹא נִשְׁבָּרָה` (תהלים לד:כא) | equivalent | האל ששומר על עצמות האדם |
| P/A/W.59 | ẖ,t tw ꜥꜣ.t msi̯.t m-bꜣḥ m Jwn,w j:tm.jw jṯj.w n nzw šdi̯.t =sn n sr.w j:tm.jw njk j:tm.jw ḫbi̯ n ḫr(w) =[s]n Ppy ꜣ pj n njk =f n jṯi̯.y =f n nzw n šdi̯.wy =f n sr.w n mꜣꜥ-ḫr(w) ḫft(,j).pl n(,j).w Ppy n šwꜣ Ppy pn n qꜣi̯ ꜥn,t.pl =f n ḥsb qs jm =f ⸢h⸣[ꜣ]⸢ꜣ⸣ Ppy pn m mw wṯz sw (W)sr(,w) rmni̯ sw psḏ,t.[du] | הבטן הגדולה הזאת, אשר נולדה לפנים בְּאוֹן, אשר אינם נתפסים למלך ואינם נחלצים לשרים, אשר אינם נענשים, אשר אינם *נגרעים בגלל קולם*?. ופפי – אכן כזה הוא: לא ייענש, לא ייתפס למלך, לא ייחלץ לשרים; לא יהיו אויבי פפי אמיתיי־הקול; לא ייוורש פפי זה, לא יארכו ציפורניו, לא תישבר בו עצם. כשיירד פפי זה אל המים – ירים אותו אוֹסִירִיס, יסבלו אותו [שתי] הַתְּשִׁיעִיּוֹת, | `וּפֶן-אִוָּרֵשׁ וְגָנַבְתִּי` (משלי ל:ט) | equivalent | הפועל `נוֹרַשׁ` "התרושש" נבחר בשביל *šwꜣ* |
| P/A/W.59 | ẖ,t tw ꜥꜣ.t msi̯.t m-bꜣḥ m Jwn,w j:tm.jw jṯj.w n nzw šdi̯.t =sn n sr.w j:tm.jw njk j:tm.jw ḫbi̯ n ḫr(w) =[s]n Ppy ꜣ pj n njk =f n jṯi̯.y =f n nzw n šdi̯.wy =f n sr.w n mꜣꜥ-ḫr(w) ḫft(,j).pl n(,j).w Ppy n šwꜣ Ppy pn n qꜣi̯ ꜥn,t.pl =f n ḥsb qs jm =f ⸢h⸣[ꜣ]⸢ꜣ⸣ Ppy pn m mw wṯz sw (W)sr(,w) rmni̯ sw psḏ,t.[du] | הבטן הגדולה הזאת, אשר נולדה לפנים בְּאוֹן, אשר אינם נתפסים למלך ואינם נחלצים לשרים, אשר אינם נענשים, אשר אינם *נגרעים בגלל קולם*?. ופפי – אכן כזה הוא: לא ייענש, לא ייתפס למלך, לא ייחלץ לשרים; לא יהיו אויבי פפי אמיתיי־הקול; לא ייוורש פפי זה, לא יארכו ציפורניו, לא תישבר בו עצם. כשיירד פפי זה אל המים – ירים אותו אוֹסִירִיס, יסבלו אותו [שתי] הַתְּשִׁיעִיּוֹת, | `יִשְׁלַח מִמָּרוֹם יִקָּחֵנִי; יַמְשֵׁנִי מִמַּיִם רַבִּים` (תהלים יח:יז) | equivalent | האל שמרים את היורד אל המים. |
| P/A/W.60 | ḏi̯ Rꜥw ꜥ =f jr Ppy pn r bw n,t(j) nṯr jm hꜣꜣ =f ⟨m⟩ ⟨tꜣ⟩ wṯz sw Gbb rmni̯ psḏ,t.du Ppy pn ḏi̯ =f ꜥ =f r bw n,t(j) nṯr jm | ייתן רַא את זרועו לפפי זה אל המקום אשר האל שם. כשיירד אל הארץ – ירים אותו גֶּבּ, יסבלו שתי התשיעיות את פפי זה, ייתן הוא את זרועו אל המקום אשר האל שם. | `וַאֲנִי תָמִיד עִמָּךְ; אָחַזְתָּ בְּיַד-יְמִינִי` (תהלים עג:כג) | equivalent | האל אוחז ביד האדם ומוליך אותו (ובפסוק כד: `וְאַחַר כָּבוֹד תִּקָּחֵנִי`) |
| P/A/W.60 | ḏi̯ Rꜥw ꜥ =f jr Ppy pn r bw n,t(j) nṯr jm hꜣꜣ =f ⟨m⟩ ⟨tꜣ⟩ wṯz sw Gbb rmni̯ psḏ,t.du Ppy pn ḏi̯ =f ꜥ =f r bw n,t(j) nṯr jm | ייתן רַא את זרועו לפפי זה אל המקום אשר האל שם. כשיירד אל הארץ – ירים אותו גֶּבּ, יסבלו שתי התשיעיות את פפי זה, ייתן הוא את זרועו אל המקום אשר האל שם. | `עַל-כַּפַּיִם יִשָּׂאוּנְךָ` (תהלים צא:יב) | equivalent | הנשיאה בידי כוחות שמימיים. |

### Parallels index (PT527)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| M/C.med/W.84 | ḏ(d)-mdw (J)tm(,w) ḫpr m jwi̯ sꜣwi̯ jr =f | דְּבָרִים לֵאמֹר: אָתוּם נהיה *כבא ומותח לעצמו*? | `בִּדְבַר יְהוָה שָׁמַיִם נַעֲשׂוּ; וּבְרוּחַ פִּיו כָּל-צְבָאָם` (תהלים לג:ו) | divergence | אל ישראל בורא בדבר וברוח פיו; אתום של אוֹן "נהיה" בגוף, ובורא בגופו |
| M/C.med/W.84 | ḏ(d)-mdw (J)tm(,w) ḫpr m jwi̯ sꜣwi̯ jr =f | דְּבָרִים לֵאמֹר: אָתוּם נהיה *כבא ומותח לעצמו*? | `אָנֹכִי יְהוָה עֹשֶׂה כֹּל נֹטֶה שָׁמַיִם לְבַדִּי` (ישעיהו מד:כד) | equivalent | האל הבורא לבדו, בלי בת זוג. |
| M/C.med/W.85 | m Jwn,w wdi̯.n =f ḥnn =f m ḫfꜥ =f jri̯ =f nḏmm,t jm =f msi̯ zꜣ,t.du sn.t(j) Šw pw ḥnꜥ | בְּאוֹן. שם את זַכְרוּתוֹ באגרופו, יעשה בה תענוג; נולדו התאומים, שניים: שׁוּ הוא, ועמו | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | divergence | גם כאן הזוג הראשון הוא זכר ונקבה (שו ותפנות); אבל הם יוצאים מגוף האל, בלי בת זוג |
| M/C.med/W.85 | m Jwn,w wdi̯.n =f ḥnn =f m ḫfꜥ =f jri̯ =f nḏmm,t jm =f msi̯ zꜣ,t.du sn.t(j) Šw pw ḥnꜥ | בְּאוֹן. שם את זַכְרוּתוֹ באגרופו, יעשה בה תענוג; נולדו התאומים, שניים: שׁוּ הוא, ועמו | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב) | divergence | בשני המקומות השני נוצר מתוך גופו של הראשון, שהיה לבדו; בבראשית מן האדם, ובמצרים מן האל עצמו |
| M/C.med/W.85 | m Jwn,w wdi̯.n =f ḥnn =f m ḫfꜥ =f jri̯ =f nḏmm,t jm =f msi̯ zꜣ,t.du sn.t(j) Šw pw ḥnꜥ | בְּאוֹן. שם את זַכְרוּתוֹ באגרופו, יעשה בה תענוג; נולדו התאומים, שניים: שׁוּ הוא, ועמו | `פְּרוּ וּרְבוּ` (בראשית א:כח) | absent | לאל של בראשית אין גוף ואין מיניות: הוא מברך את הברואים , ואינו מוליד בעצמו. |
| M/C.med/W.86 | Tfn,wt di̯ =sn(j) n =sn(j) Nmt,j-m-zꜣ≡f Mr,n-Rꜥw jm,(w)t(j) =sn(j) wdi̯ =sn(j) sw mm nṯr.pl m-ḫnt sḫ,t-ḥtp ḏ(d)-mdw zp 4 | תֶּפְנוּת. ישימו הם לעצמם את נֶמְתִּי־אֶם־סָאֶף מֶרֶנְרַא ביניהם, ישימו אותו בין הָאֵלִים, בראש שְׂדֵה־הַקָּרְבָּנוֹת. דְּבָרִים לֵאמֹר, ארבע פעמים: | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם; וַיָּשֶׂם שָׁם אֶת הָאָדָם אֲשֶׁר יָצָר` (בראשית ב:ח) | equivalent | "ישימו אותו … בראש שדה־הקרבנות": שדה השפע של העולם הבא, והאדם "מושם" בו; בבראשית זה גן בראשית העולם, כאן – גן שאחרי המוות, ולמלך בלבד. |
| M/C.med/W.87 | pri̯.y Nmt,j-m-zꜣ≡f Mr,n-Rꜥw jr p,t hꜣi̯ =f jr tꜣ | יֵצֵא נֶמְתִּי־אֶם־סָאֶף מרנרא אל השמים, יֵרֵד הוא אל הארץ. | `וְהִנֵּה מַלְאֲכֵי אֱלֹהִים עֹלִים וְיֹרְדִים בּוֹ` (בראשית כח:יב) | equivalent | עלייה וירידה בין השמים לארץ; כאן המלך המת עצמו נע בחופשיות בין שני העולמות. |

### Parallels index (PT600)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| N/F/E.inf.17 | ḏ(d)-mdw (J)tm(,w) Ḫprr qꜣi̯.n =k m qꜣꜣ wbn.n =k m bnbn m Ḥw,t-bn,w m Jwn,w jšš.n =k m Šw tfn.(n) =k m Tfn,t di̯.n =k ꜥ.du =k ḥꜣ =sn(j) m ꜥ kꜣ wn kꜣ =k | דְּבָרִים לֵאמֹר: אָתוּם־חֶפְּרִי, גָּבַהְתָּ כַּגִּבְעָה, זרחת כַּבֶּנְבֶּן בְּבֵית־הַבֶּנוּ בְּאוֹן; עָטַשְׁתָּ את שׁוּ, יָרַקְתָּ את תֶּפְנוּת, שמת את זרועותיך סביבם כִּזְרוֹעַ־כָּא – יהיה כָּאֲךָ | `יִקָּווּ הַמַּיִם מִתַּחַת הַשָּׁמַיִם אֶל מָקוֹם אֶחָד וְתֵרָאֶה הַיַּבָּשָׁה` (בראשית א:ט) | equivalent | הגבעה הראשונה שעולה מתוך נוּן היא היבשה הראשונה המופיעה מן המים; במצרים האל עצמו "גבה כגבעה", בבראשית היבשה נראית בדבר האל |
| N/F/E.inf.17 | ḏ(d)-mdw (J)tm(,w) Ḫprr qꜣi̯.n =k m qꜣꜣ wbn.n =k m bnbn m Ḥw,t-bn,w m Jwn,w jšš.n =k m Šw tfn.(n) =k m Tfn,t di̯.n =k ꜥ.du =k ḥꜣ =sn(j) m ꜥ kꜣ wn kꜣ =k | דְּבָרִים לֵאמֹר: אָתוּם־חֶפְּרִי, גָּבַהְתָּ כַּגִּבְעָה, זרחת כַּבֶּנְבֶּן בְּבֵית־הַבֶּנוּ בְּאוֹן; עָטַשְׁתָּ את שׁוּ, יָרַקְתָּ את תֶּפְנוּת, שמת את זרועותיך סביבם כִּזְרוֹעַ־כָּא – יהיה כָּאֲךָ | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | אצל אתום האוויר (שו) יוצא מאפו של האל בעיטוש, בבראשית האל נופח רוח באפו של האדם |
| N/F/E.inf.17 | ḏ(d)-mdw (J)tm(,w) Ḫprr qꜣi̯.n =k m qꜣꜣ wbn.n =k m bnbn m Ḥw,t-bn,w m Jwn,w jšš.n =k m Šw tfn.(n) =k m Tfn,t di̯.n =k ꜥ.du =k ḥꜣ =sn(j) m ꜥ kꜣ wn kꜣ =k | דְּבָרִים לֵאמֹר: אָתוּם־חֶפְּרִי, גָּבַהְתָּ כַּגִּבְעָה, זרחת כַּבֶּנְבֶּן בְּבֵית־הַבֶּנוּ בְּאוֹן; עָטַשְׁתָּ את שׁוּ, יָרַקְתָּ את תֶּפְנוּת, שמת את זרועותיך סביבם כִּזְרוֹעַ־כָּא – יהיה כָּאֲךָ | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | האוויר והרוח הם הדבר הראשון שבא מן הבורא אל מעל המים |
| N/F/E.inf.17 | ḏ(d)-mdw (J)tm(,w) Ḫprr qꜣi̯.n =k m qꜣꜣ wbn.n =k m bnbn m Ḥw,t-bn,w m Jwn,w jšš.n =k m Šw tfn.(n) =k m Tfn,t di̯.n =k ꜥ.du =k ḥꜣ =sn(j) m ꜥ kꜣ wn kꜣ =k | דְּבָרִים לֵאמֹר: אָתוּם־חֶפְּרִי, גָּבַהְתָּ כַּגִּבְעָה, זרחת כַּבֶּנְבֶּן בְּבֵית־הַבֶּנוּ בְּאוֹן; עָטַשְׁתָּ את שׁוּ, יָרַקְתָּ את תֶּפְנוּת, שמת את זרועותיך סביבם כִּזְרוֹעַ־כָּא – יהיה כָּאֲךָ | `לְזֹאת יִקָּרֵא אִשָּׁה כִּי מֵאִישׁ לֻקֳחָה זֹּאת` (בראשית ב:כג) | equivalent | שם שנקבע במשחק מלים על מוצאו: *jšš* ~ שו, *tfn* ~ תפנות, כמו `אִשָּׁה` ~ `אִישׁ` |
| N/F/E.inf.17 | ḏ(d)-mdw (J)tm(,w) Ḫprr qꜣi̯.n =k m qꜣꜣ wbn.n =k m bnbn m Ḥw,t-bn,w m Jwn,w jšš.n =k m Šw tfn.(n) =k m Tfn,t di̯.n =k ꜥ.du =k ḥꜣ =sn(j) m ꜥ kꜣ wn kꜣ =k | דְּבָרִים לֵאמֹר: אָתוּם־חֶפְּרִי, גָּבַהְתָּ כַּגִּבְעָה, זרחת כַּבֶּנְבֶּן בְּבֵית־הַבֶּנוּ בְּאוֹן; עָטַשְׁתָּ את שׁוּ, יָרַקְתָּ את תֶּפְנוּת, שמת את זרועותיך סביבם כִּזְרוֹעַ־כָּא – יהיה כָּאֲךָ | `עֲטִישֹׁתָיו תָּהֶל אוֹר` (איוב מא:י) | divergence | העיטוש היחיד במקרא הוא של מפלצת הים, ושם הוא מאיר; כאן העיטוש של הבורא יוצר את האוויר. |
| N/F/E.inf.18 | jm =sndu (J)tm(,w) di̯ =k n =k ꜥ.du =k ḥꜣ Ppy Nfr-kꜣ-Rꜥw m ꜥ kꜣ wn kꜣ n(,j) Ppy Nfr-kꜣ-Rꜥw jm =f rwḏ n-ḏ,t-ḏ,t hꜣ (J)tm(,w) dnḫnḫ =k ḥr Ppy Nfr-kꜣ-Rꜥw pn ḥr mḥr =f pn kꜣ,t tn | בהם. אתום, תשים לך את זרועותיך סביב פֶּפִּי נֶפֶרְכָּרֶע כזרוע־כָּא – יהיה הַכָּא של פפי נפרכרע בו, איתן עֲדֵי עַד. הוֹי אתום, תְּסוֹכֵךְ על פפי נפרכרע זה, על הפירמידה הזאת שלו, על המלאכה הזאת | `בְּאֶבְרָתוֹ יָסֶךְ לָךְ וְתַחַת-כְּנָפָיו תֶּחְסֶה` (תהלים צא:ד) | equivalent | האל המגן בכנפיו (*dnḫnḫ*, מן "כנף") |
| N/F/E.inf.18 | jm =sndu (J)tm(,w) di̯ =k n =k ꜥ.du =k ḥꜣ Ppy Nfr-kꜣ-Rꜥw m ꜥ kꜣ wn kꜣ n(,j) Ppy Nfr-kꜣ-Rꜥw jm =f rwḏ n-ḏ,t-ḏ,t hꜣ (J)tm(,w) dnḫnḫ =k ḥr Ppy Nfr-kꜣ-Rꜥw pn ḥr mḥr =f pn kꜣ,t tn | בהם. אתום, תשים לך את זרועותיך סביב פֶּפִּי נֶפֶרְכָּרֶע כזרוע־כָּא – יהיה הַכָּא של פפי נפרכרע בו, איתן עֲדֵי עַד. הוֹי אתום, תְּסוֹכֵךְ על פפי נפרכרע זה, על הפירמידה הזאת שלו, על המלאכה הזאת | `וּמִתַּחַת זְרֹעֹת עוֹלָם` (דברים לג:כז) | equivalent | זרועות האל המחבקות את המוגן. |
| N/F/E.inf.19 | n.t Ppy Nfr-kꜣ-Rꜥw ḫwi̯ =k ḫpr (j)ḫ,t nb(.t) r =f ḏwi̯ n-ḏ,t-ḏ,t mr dnḫnḫ =k ḥr Šw Tfn,wt hꜣ psḏ,t-ꜥꜣ.t jm.t Jwn,w (J)tm(,w) Šw Tfn,wt Gbb Nw,t (W)sr(,w) (Ꜣ)s,t Stš Nb,t-ḥw,t ms (J)tm(,w) | של פפי נפרכרע; תגן לבל יהיה כל דבר נגדו רָע עֲדֵי עַד, כאשר סוככת על שׁוּ ועל תפנות. הוֹי התשיעייה הגדולה אשר באוֹן – אתום, שׁוּ, תפנות, גֶּבּ, נוּת, אוֹסִירִיס, אִיסִיס, סֵת, נֶפְתִּיס – ילדי אתום! | `יְהוָה יִשְׁמָרְךָ מִכָּל-רָע` (תהלים קכא:ז) | equivalent | בקשת ההגנה מכל רע |
| N/F/E.inf.19 | n.t Ppy Nfr-kꜣ-Rꜥw ḫwi̯ =k ḫpr (j)ḫ,t nb(.t) r =f ḏwi̯ n-ḏ,t-ḏ,t mr dnḫnḫ =k ḥr Šw Tfn,wt hꜣ psḏ,t-ꜥꜣ.t jm.t Jwn,w (J)tm(,w) Šw Tfn,wt Gbb Nw,t (W)sr(,w) (Ꜣ)s,t Stš Nb,t-ḥw,t ms (J)tm(,w) | של פפי נפרכרע; תגן לבל יהיה כל דבר נגדו רָע עֲדֵי עַד, כאשר סוככת על שׁוּ ועל תפנות. הוֹי התשיעייה הגדולה אשר באוֹן – אתום, שׁוּ, תפנות, גֶּבּ, נוּת, אוֹסִירִיס, אִיסִיס, סֵת, נֶפְתִּיס – ילדי אתום! | `אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ בְּהִבָּרְאָם` (בראשית ב:ד) | divergence | רשימת התשיעייה היא "תולדות" ממש: אתום הוליד את שו ותפנות, אלה את גֶּבּ (הארץ) ונוּת (השמים), ואלה את אוסיריס, איסיס, סת ונפתיס; השמים והארץ הם אלים שנולדו, לא ברואים שנעשו. |
| N/F/E.inf.20 | pḏ jb =f n ms =f m rn =tn n(,j) psḏ,t-pḏ,wt jmi̯ psḏi̯.wt =f jm =ṯn jr (J)tm(,w) j:nḏ =f Ppy Nfr-kꜣ-Rꜥw pn j:nḏ =f mḥr pn n(,j) Ppy Nfr-kꜣ-Rꜥw j:nḏ =f kꜣ,t{t} =f tn m-ꜥ nṯr.pl nb | רחב לבו בגלל ילדיו, בשמכם "תשעת־הקשתות". אל יפנה (איש) מכם את גַּבּוֹ מאתום! ישמור הוא את פפי נפרכרע זה, ישמור הוא את הפירמידה הזאת של פפי נפרכרע, ישמור הוא את מלאכתו זו מכל הָאֵלִים | `אָז תִּרְאִי וְנָהַרְתְּ וּפָחַד וְרָחַב לְבָבֵךְ` (ישעיהו ס:ה) | equivalent | "רחב לבו": שמחה כהתרחבות הלב, באותו דימוי |
| N/F/E.inf.20 | pḏ jb =f n ms =f m rn =tn n(,j) psḏ,t-pḏ,wt jmi̯ psḏi̯.wt =f jm =ṯn jr (J)tm(,w) j:nḏ =f Ppy Nfr-kꜣ-Rꜥw pn j:nḏ =f mḥr pn n(,j) Ppy Nfr-kꜣ-Rꜥw j:nḏ =f kꜣ,t{t} =f tn m-ꜥ nṯr.pl nb | רחב לבו בגלל ילדיו, בשמכם "תשעת־הקשתות". אל יפנה (איש) מכם את גַּבּוֹ מאתום! ישמור הוא את פפי נפרכרע זה, ישמור הוא את הפירמידה הזאת של פפי נפרכרע, ישמור הוא את מלאכתו זו מכל הָאֵלִים | `כִּי פָנוּ אֵלַי עֹרֶף וְלֹא פָנִים` (ירמיהו ב:כז) | equivalent | הפניית העורף לאל כבגידה; כאן האלים מוזהרים שלא להפנות גב לאתום. |
| N/F/E.inf.21 | m-ꜥ m(w)t.pl nb ḫwi̯ =f ḫpr (j)ḫ,t nb(.t) jr =f ḏwi̯ n-ḏ,t-ḏ,t hꜣ Ḥr,w (W)sr(,w) pw Ppy Nfr-kꜣ-Rꜥw pn (W)sr(,w) pw mḥr pn n(,j) Ppy Nfr-kꜣ-Rꜥw kꜣ,t{t} =f tn j:mz kw r =f | ומכל המתים; יגן לבל יהיה כל דבר נגדו רָע עֲדֵי עַד. הוֹי חוֹרוּס! אוסיריס הוא פפי נפרכרע זה, אוסיריס הוא הפירמידה הזאת של פפי נפרכרע, מלאכתו זו. קרב את עצמך אליו! | `יְהוָה יִשְׁמָרְךָ מִכָּל-רָע` (תהלים קכא:ז) | equivalent | כמו בשורה 19 (המשפט חוזר כאן בגוף שלישי). |
| N/F/E.inf.22 | m ḥri̯ jr =f m rn =f n(,j) mḥr km.t wr.t m rn =k n(,j) Ḥw,t-Km-wr di̯.n n =k Ḏḥw,tj nṯr.pl ẖr =k ḏꜣi̯.w mꜣꜥ.w m dḏꜣ m dmꜣꜥ Ḥr,w m jt(j) =k (W)sr(,w) m rn =f n(,j) Ḥw,t-jt(j) | אל תתרחק ממנו בשמו "פירמידה". שחור אתה, גדול אתה, בשמך "בית־השחור־הגדול". שם לך תְּחוּת את הָאֵלִים תחתיך, *צולחים ומונהגים בִּדְגָ׳א, בִּדְמָאע*?. חורוס, הנה אביך אוסיריס, בשמו "בית־הריבון". | `לְזֹאת יִקָּרֵא אִשָּׁה כִּי מֵאִישׁ לֻקֳחָה זֹּאת` (בראשית ב:כג) | equivalent | שם שנגזר במשחק מלים, כמו "שחור" / "בית־השחור־הגדול". |
| N/F/E.inf.23 | ḏi̯.n n =k Ḥr,w nṯr.pl sjꜥ.n =f n =k sn m ꜥr.w sḥḏ =sn ḥr =k m ḥḏ.pl | נתן לך חוֹרוּס את הָאֵלִים, העלה אותם לך *כקנים*?, יאירו הם את פניך *בסוכות*?. | `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ` (במדבר ו:כה) | divergence | בברכת כהנים האל מאיר את פניו אל האדם; כאן האלים מאירים את פני המלך המת. |

### Parallels index (MT)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | ꜥnḫ Ḥrw sb[ꜣ]q-tꜣ.wj Nb.tj sb[ꜣ]q-tꜣ.wj Ḥrw-nbw sb[ꜣ]q-tꜣ.wj njsw.t-bj.t 𓍹Nfr-kꜣ-Rꜥw𓍺 sꜣ-Rꜥw [Šꜣbꜣkꜣ] mrjj Ptḥ rsj-jnbw=f ꜥnḫ(.w) mj Rꜥw ḏ.t | יחי חוֹרוּס "מַזְהִיר־שתי־הארצות", שתי הגבירות "מזהיר־שתי־הארצות", חורוס־הזהב "מזהיר־שתי־הארצות", מלך־הדרום־והצפון נֶפֶרְכָּרֶע, בן רַא [שַׁבַּכָּה], אהוב פְּתָח־אשר־מדרום־לחומתו, חי כרַא לעד. | — | — | — |
| 1b | ꜥnḫ Ḥrw sb[ꜣ]q-tꜣ.wj Nb.tj sb[ꜣ]q-tꜣ.wj Ḥrw-nbw sb[ꜣ]q-tꜣ.wj njsw.t-bj.t 𓍹Nfr-kꜣ-Rꜥw𓍺 sꜣ-Rꜥw [Šꜣbꜣkꜣ] mrjj Zkr rsj-jnbw=f ꜥnḫ(.w) mj Rꜥw ḏ.t | יחי חוֹרוּס "מזהיר־שתי־הארצות", שתי הגבירות "מזהיר־שתי־הארצות", חורוס־הזהב "מזהיר־שתי־הארצות", מלך־הדרום־והצפון נפרכרע, בן רַא [שבכה], אהוב סוֹכַּר־אשר־מדרום־לחומתו, חי כרַא לעד. | — | — | — |
| 2 | spẖr jn ḥm=f sẖꜣ.w pn n-mꜣw.t m pr jtj=f Ptḥ-rsj-jnbw=f · js gm.n ḥm=f m jrj(.t) .n tp.jw-ꜥ · jw ⟨=f⟩ m wnm(.t).n dm.w · n rḫ.n.tw=f m ḥꜣ.t r pḥ(.wj) · ꜥḥꜥ.n s[pẖr](.w) [sẖꜣ.w pn] n-mꜣw.t nfr.w r jm.j=[f] ẖr-ḥꜣ.t · n-mrw(.t) ḏd rn=f swꜣḥ mnw=f m pr jtj=f Ptḥ rsj-jnbw=f m ꜣw(.t)-ḏ.t · m jrj .n sꜣ-Rꜥw [Šꜣbꜣkꜣ] n jtj=f Ptḥ-tꜣ-ṯ(nn) jrj=f djw-ꜥnḫ ḏ.t | העתיק הוד מלכותו את הכתב הזה מחדש בבית אביו פְּתָח־אשר־מדרום־לחומתו; כי מצא אותו הוד מלכותו כמעשה הקדמונים, והוא מה שאכלו תולעים: לא ידעו אותו מראשיתו ועד קצו. אז [הועתק] [הכתב הזה] מחדש, טוב ממה שהיה [בו] לפנים, למען ייכון שמו ויתמיד זכרונו בבית אביו פְּתָח־אשר־מדרום־לחומתו לאורך עד, כמעשה בן רַא [שבכה] לאביו פְּתָח־תָּא־טֶנֶן, למען יהיה נתון־חיים לעד. | `גַּם-אֵלֶּה מִשְׁלֵי שְׁלֹמֹה אֲשֶׁר הֶעְתִּיקוּ אַנְשֵׁי חִזְקִיָּה מֶלֶךְ-יְהוּדָה` (משלי כה:א) | equivalent | מלך שמעתיק את דברי הקדמונים; חזקיהו היה בן דורו של שבכה ובעל בריתו של מלך כוש (מלכים ב יט:ט) |
| 2 | spẖr jn ḥm=f sẖꜣ.w pn n-mꜣw.t m pr jtj=f Ptḥ-rsj-jnbw=f · js gm.n ḥm=f m jrj(.t) .n tp.jw-ꜥ · jw ⟨=f⟩ m wnm(.t).n dm.w · n rḫ.n.tw=f m ḥꜣ.t r pḥ(.wj) · ꜥḥꜥ.n s[pẖr](.w) [sẖꜣ.w pn] n-mꜣw.t nfr.w r jm.j=[f] ẖr-ḥꜣ.t · n-mrw(.t) ḏd rn=f swꜣḥ mnw=f m pr jtj=f Ptḥ rsj-jnbw=f m ꜣw(.t)-ḏ.t · m jrj .n sꜣ-Rꜥw [Šꜣbꜣkꜣ] n jtj=f Ptḥ-tꜣ-ṯ(nn) jrj=f djw-ꜥnḫ ḏ.t | העתיק הוד מלכותו את הכתב הזה מחדש בבית אביו פְּתָח־אשר־מדרום־לחומתו; כי מצא אותו הוד מלכותו כמעשה הקדמונים, והוא מה שאכלו תולעים: לא ידעו אותו מראשיתו ועד קצו. אז [הועתק] [הכתב הזה] מחדש, טוב ממה שהיה [בו] לפנים, למען ייכון שמו ויתמיד זכרונו בבית אביו פְּתָח־אשר־מדרום־לחומתו לאורך עד, כמעשה בן רַא [שבכה] לאביו פְּתָח־תָּא־טֶנֶן, למען יהיה נתון־חיים לעד. | `סֵפֶר הַתּוֹרָה מָצָאתִי בְּבֵית יְהוָה` (מלכים ב כב:ח) | equivalent | ספר עתיק ש"נמצא" בבית האל ומוצג כחידוש של הישן; כך גם כאן: הטענה שהספר עתיק נותנת לו את סמכותו. |
| 3 | ( ) · Ptḥ pn pw mꜣṯ m rn-wr nn · ( ) | (רווח ריק) פְּתָח זה הוא ההוגה את השם־הגדול הזה. (רווח ריק) | — | — | — |
| 4 | ( ) · tꜣ-šmꜥw (tꜣ-)mḥw pw · smꜣw pn ḫꜥ(.w) m njsw.t ḫꜥ(.w) m bjtj · ( ) | (רווח ריק) ארץ־הדרום וארץ־הצפון הוא; המאחד הזה, אשר הופיע כמלך, הופיע כמלך־הצפון. (רווח ריק) | — | — | — |
| 5 | ( ) | (רווח ריק) | — | — | — |
| 6 | ( ) · wtt-sw · jn Jtmw msj psḏ.t · ( ) | (רווח ריק) ו"מוליד־אותו"; אָתוּם, אשר ילד את התשיעייה, הוא (רווח ריק) | — | — | — |
| 7 | ( ) · jꜥb n=f psḏ.t · (jw) wpj.n=f Ḥrw ḥnꜥ [Stš] · ( ) | (רווח ריק) אשר אסף לו את התשיעייה; ושפט את חורוס ואת [סֵת]. (רווח ריק) | — | — | — |
| 8 | ḫwj.n=f šnṯ=sn · ḏj=f [Stš] m njswt m tꜣ-šmꜥw ḏr bsj=f jm m Sw · sw(t) Gb · ḏj=f Ḥrw m bjtj m tꜣ-mḥw · ḏr bw mḥj jtj=f jm | הגן מפני ריבם: שם את [סֵת] למלך בארץ־הדרום, כי משם הגיח, מסוּ – הוא גֶּבּ – ושם את חורוס למלך־הצפון בארץ־הצפון, כי שם המקום אשר טבע בו אביו, | `וּמֵאֵלֶּה נִפְרְדוּ הַגּוֹיִם בָּאָרֶץ אַחַר הַמַּבּוּל` (בראשית י:לב) | divergence | חלוקת הארץ בין יורשים; כאן ההכרעה הראשונה של גב היא חלוקה שווה, וממנה הוא חוזר בו (10c). |
| 9 | m Psš.t-tꜣ.wj · sw(t) Ḥrw Stš ꜥḥꜥ(.w) ḥr (j)ꜣ.t · ḥtp=sn tꜣ.wj m ꜥnw · ṯꜣš-tꜣ.wj pw {tꜣ.wj m ꜥnw tꜣš-tꜣ.wj pw} · ( ) | בחלוקת־שתי־הארצות. הוא חורוס וסֵת, העומדים על הנֵּס, ונחו הם על שתי הארצות בעַנוּ: זהו גבול שתי הארצות. (רווח ריק) | `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) | equivalent | הגבול כקו שנקבע בהכרעה ואין לזוז ממנו; כאן גבול שתי הארצות נקבע בהשלמה בין שני האלים. |
| 10a | ḏd-mdw Gb (ḫft) [Stš] · jsj ṯ(w) r bw msj=k jm | דברים לאמר, גֶּבּ אל [סֵת]: חוּשָׁה אל המקום אשר נולדת בו! | — | — | — |
| 10b | │ Stš │ rsj │ | סֵת: הדרום. | — | — | — |
| 11a | ḏd-mdw Gb (ḫft) Ḥr · jsj ṯ(w) r bw mḥw jtj=k jm | דברים לאמר, גֶּבּ אל חורוס: חושה אל המקום אשר טבע בו אביך! | — | — | — |
| 11b | │ Ḥrw │ mḥw │ | חורוס: הצפון. | — | — | — |
| 12a | ḏd-mdw Gb (ḫft) Ḥrw [Stš] · wpj.n(=j) ṯn | דברים לאמר, גֶּבּ אל חורוס ו[סֵת]: שפטתי אתכם. | — | — | — |
| 12b | │ ( ) │ mḥw/ rsj │ | (רווח ריק): הצפון, הדרום. | — | — | — |
| 10c | ḏwj ḥr-jb n Gb twt psš.t Ḥrw n psš.t [Stš] | והיה רע בלב גֶּבּ, שיהיה חלק חורוס כחלק [סֵת]. | `וּלְאֹם מִלְאֹם יֶאֱמָץ וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג) | divergence | שני יורשים שאינם שווים; בבראשית הצעיר גובר, כאן הבכור (חורוס) מקבל את הכול |
| 10c | ḏwj ḥr-jb n Gb twt psš.t Ḥrw n psš.t [Stš] | והיה רע בלב גֶּבּ, שיהיה חלק חורוס כחלק [סֵת]. | `כִּי אֶת הַבְּכֹר בֶּן הַשְּׂנוּאָה יַכִּיר לָתֶת לוֹ פִּי שְׁנַיִם` (דברים כא:יז) | equivalent | זכות הבכור בירושה. |
| 11c | sw(t) Gb · (jw) rdj(.w) jwꜥ.t=f n Ḥrw sꜣ pw | הוא גֶּבּ: ניתנה ירושתו לחורוס, הבן הזה | — | — | — |
| 12c | n sꜣ=f wpj-ẖ.t=f · ( ) | של בנו, פֶּטֶר־בִּטְנוֹ. (רווח ריק) | `כָל בְּכוֹר פֶּטֶר כָּל רֶחֶם` (שמות יג:ב) | equivalent | אותו דימוי לבכור: "פותח הבטן" / "פטר רחם". |
| 13a | ḏd-mdw Gb (ḫf)t psḏ.t · wḏ.n(=j) | דברים לאמר, גֶּבּ אל התשיעייה: ציוויתי | — | — | — |
| 13b | │ Ḥrw │ wtwtj │ | חורוס: *המוּלָד*?. | — | — | — |
| 14a | ḏd-mdw Gb (ḫft) psḏ.t · (j)wꜥ.t(=j) | דברים לאמר, גֶּבּ אל התשיעייה: ירושתי | — | — | — |
| 14b | │ Ḥrw │ jwꜥ.t │ | חורוס: הירושה. | — | — | — |
| 15a | ḏd-mdw Gb (ḫft) psḏ.t · n pf jwꜥw | דברים לאמר, גֶּבּ אל התשיעייה: ליורש ההוא | — | — | — |
| 15b | │ Ḥrw │ jwꜥ.tj │ | חורוס: היורש. | — | — | — |
| 16a | ḏd-mdw Gb (ḫft) psḏ.t · n sꜣ n sꜣ(=j) | דברים לאמר, גֶּבּ אל התשיעייה: לבן בני | — | — | — |
| 16b | │ Ḥrw │ sꜣb-[šmꜥ.w] │ | חורוס: זְאֵב־[הדרום]. | — | — | — |
| 17a | ḏd-mdw Gb (ḫft) psḏ.t · wpj ẖ.t(=j) | דברים לאמר, גֶּבּ אל התשיעייה: פֶּטֶר־בִּטְנִי | — | — | — |
| 17b | │ Ḥrw │ Wpjwꜣwt [mḥw] │ | חורוס: וֶפְּוָאוֶת־[הצפון]. | — | — | — |
| 18a | ḏd-mdw Gb (ḫft) psḏ.t · sꜣ(=j) pw msj(.w) | דברים לאמר, גֶּבּ אל התשיעייה: בני הוא, הנולד. | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | equivalent | ההכרזה על היורש כבן שנולד, בהעברת המלוכה. |
| 18b | │ Ḥrw │ msj(.w) Wpj-wꜣwt │ | חורוס: נולד (כ)וֶפְּוָאוֶת. | — | — | — |
| 13c | ꜥḥꜥ Ḥrw tp tꜣ · sw(t) dmḏ tꜣ pn · mꜣṯ m rn-wr Tꜣ-ṯnn rsj-jnbw=f nb ḏ.t · (jw) rd.n | עמד חורוס על הארץ. הוא אשר צירף את הארץ הזאת, ההוגה את השם־הגדול – תָּא־טֶנֶן־אשר־מדרום־לחומתו, אדון העד. וצמחו | — | — | — |
| 14c | wr.tj-ḥkꜣ.w m tp=f · sw(t) Ḥrw pw ḫꜥj.w m njsw.t-bjtj · smꜣ-tꜣ.wj m jnbw-⟨ḥḏ⟩ · m bw smꜣ(.w) tꜣ.wj jm | שתי רַבּוֹת־הַקְּסָמִים מראשו. הוא חורוס, אשר הופיע כמלך־הדרום־והצפון, המאחד את שתי הארצות בַּחוֹמָה־הַלְּבָנָה, במקום אשר אוחדו בו שתי הארצות. | — | — | — |
| 15c | ḫpr.n (w)dj.w [š]nꜥ wꜣḏ r rw.tj ḥw.t-(kꜣ)-Ptḥ · Ḥrw [Stš] pw ḥtp.wj smꜣ.w(j) snsn=sn tm(.w) šnṯ.t=sn | נהיה ששמו את [הקנה]? ואת הפפירוס על הדלתיים של בֵּית־כָּא־פְּתָח: חורוס ו[סֵת] הם, נחים ומאוחדים; התחברו הם, ותם ריבם | — | — | — |
| 16c | m [b]w [prj]=sn jm · smꜣ(.w) m ḥwt-(kꜣ)-Ptḥ [mḫꜣ].t tꜣ.wj fꜣj(j).t tꜣ šmꜥ (tꜣ) mḥw jm=s · tꜣ pn pw […] | במקום אשר [יצאו] אליו; מאוחדים בבית־כָּא־פְּתָח, [מאזני] שתי הארצות, אשר נִשְׂאוּ בהם ארץ־הדרום וארץ־הצפון. הארץ הזאת היא […] | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק` (ויקרא יט:לו) | equivalent | המאזניים כסמל של צדק; כאן מף היא "מאזני שתי הארצות" – הנקודה שבה שתיהן שקולות |
| 16c | m [b]w [prj]=sn jm · smꜣ(.w) m ḥwt-(kꜣ)-Ptḥ [mḫꜣ].t tꜣ.wj fꜣj(j).t tꜣ šmꜥ (tꜣ) mḥw jm=s · tꜣ pn pw […] | במקום אשר [יצאו] אליו; מאוחדים בבית־כָּא־פְּתָח, [מאזני] שתי הארצות, אשר נִשְׂאוּ בהם ארץ־הדרום וארץ־הצפון. הארץ הזאת היא […] | `בְּמֹאזְנַיִם יִשְׂאוּ-יָחַד` (איוב ו:ב) | equivalent | "לשאת במאזניים" במובן "לשקול", כמו *fꜣj* כאן. |
| 17c | […] [qrs.t] n.t Wsjr m ḥw.t-Zkr | […] [קבורת] אוֹסִירִיס בבֵית־סוֹכַּר | — | — | — |
| 18c | […] [wḏ Ḥrw n] · Nb.t-Ḥw.t Js.t m ḏdj | […] [ציווה חורוס את] נֶפְתִּיס ואת אִיסִיס: אל תתמהמהו! | — | — | — |
| 19 | n mḥj.n Wsjr ḥr mw=f · mꜣ.tw Js.t [Nb.t-Ḥwt ptr=sn sw…] […] [ḫwj]=sn mḥj=f | כי טבע אוסיריס במימיו; חוזים באיסיס וב[נפתיס: רואות הן אותו …] […] [יגנו] הן מפני טביעתו. | — | — | — |
| 20c | […] [s]pr=sn sw r | […] הגיעו אותו אל | — | — | — |
| 21c | [tꜣ] […] · [ḫpr Wsjr] m tꜣ m | [הארץ] […] [נהיה אוסיריס] בארץ, | — | — | — |
| 22 | ḥwt-sr m [gs-mḥ.tj n tꜣ pn] […] | בבית־השר, ב[צד הצפוני של הארץ הזאת] […] | — | — | — |
| 20a | ḏd-mdw Ḥrw (ḫft) Js.t Nb.t-Ḥw.t · jsj nḏrj jm=f | דברים לאמר, חורוס אל איסיס ונפתיס: חושו, אחזו בו! | — | — | — |
| 20b | │ [Wsjr] │ […] │ | [אוסיריס]: […] | — | — | — |
| 21a | ḏd-mdw Js.t/Nb.t-Ḥw.t(ḫft) Wsjr · jjj.n=n jṯj=n kw [sn=n] | דברים לאמר, איסיס ונפתיס אל אוסיריס: באנו, נתפוס אותך, [אחינו]! | — | — | — |
| 21b | │ [Wsjr] │ […] │ | [אוסיריס]: […] | — | — | — |
| 23 | [ḫpr].n qd(.w) ḥw.t[-sr] […] | [נהיה] שנבנה בית־[השר] […] | — | — | — |
| 24a,b | ḏd[-mdw]Gb (ḫft) Ḏḥwtj […] | דברים [לאמר], גֶּבּ אל תְּחוּת […] | — | — | — |
| 24c | […] | […] | — | — | — |
| 25a | ( ) […] | (רווח ריק) […] | — | — | — |
| 26a | ( ) […] | (רווח ריק) […] | — | — | — |
| 25b | ḏd-mdw Ḥrw […] | דברים לאמר, חורוס […] | — | — | — |
| 26b | ḏd-mdw Ḥrw […] | דברים לאמר, חורוס […] | — | — | — |
| 27 | […] dj Js.t jnt […] | […] נותנת איסיס להביא […] | — | — | — |
| 28a-35a | […] | […] | — | — | — |
| 28b | ḏd-mdw Js.t (ḫft) [Ḥrw Stš] · mj [ṯ]n w[ḏꜣ] […] | דברים לאמר, איסיס אל [חורוס וסֵת]: בואו אתם, [לכו] […] | — | — | — |
| 29b | ḏd[-mdw Js.t (ḫft) Ḥrw Stš] · ḥtp jr=ṯn […] | דברים [לאמר, איסיס אל חורוס וסֵת]: נוחו לכם […] | — | — | — |
| 30b | ḏd-mdw Jst (ḫft) Ḥrw [Stš] · [nḏ]m n=ṯn ꜥnḫ jr=s […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: [נעימים] לכם החיים בה […] | — | — | — |
| 31b | ḏd-mdw Js.t (ḫft) Ḥrw [Stš] · sw(t) ꜥḥ=f rm(w)=ṯn […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: הוא – יסיר את בכייכם […] | — | — | — |
| 32b | ḏd-mdw Js.t (ḫft) Ḥrw [Stš] · […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: […] | — | — | — |
| 33b | ḏd-mdw Js.t (ḫft) Ḥrw [Stš] · […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: […] | — | — | — |
| 34b | ḏd-mdw Js.t (ḫft) Ḥrw [Stš] · […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: […] | — | — | — |
| 35b | ḏd-mdw Js.t (ḫft) Ḥrw [Stš] · […] | דברים לאמר, איסיס אל חורוס ו[סֵת]: […] | — | — | — |
| 36 | […] ḥw.t-sr b(w) pn […] | […] בית־השר, המקום הזה […] | — | — | — |
| 37-44 | […] | […] | — | — | — |
| 45 | wr ꜥꜣ nb jm.j (?) […] | גדול ורב, האדון אשר ב־? […] | — | — | — |
| 46 | dmḏ (?) ( ) […] | *צירף*? (רווח ריק) […] | — | — | — |
| 47 | mj qd=f rꜥ-nb (?) […] | כמות שהוא?, בכל יום? […] | — | — | — |
| 48 | nṯr.w ḫpr.w m Ptḥ | הָאֵלִים אשר נהיו בִּפְתָח: | — | — | — |
| 49a | Ptḥ ḥr.j (j)s.t-wrt / · [rsj jnb.w=f] | פְּתָח־אשר־על־המושב־הגדול: [אשר מדרום לחומתו] | — | — | — |
| 50a | Ptḥ-Nnw / · jtj [jrj] Jtmw | פְּתָח־נוּן: האב [אשר עשה] את אתום. | `בְּאֵין-תְּהֹמוֹת חוֹלָלְתִּי` (משלי ח:כד) | divergence | במצרים המים הקדמונים הם אב (וגם אם, 51a) של הבורא עצמו; במשלי החכמה נולדה כשעוד לא היו תהומות. |
| 51a | Ptḥ-Nn.t / · mw.t msj(t) Jtmw | פְּתָח־נוּנֶת: האם אשר ילדה את אתום. | — | — | — |
| 52a | Ptḥ-wr / · ḥꜣ.tj ns pw n psḏ[.t] | פְּתָח־הגדול: הוא לבב ולשון של התשיעייה. | — | — | — |
| 49b | [Ptḥ-nḏm-ꜥnḫ] / · […] nb ḫ[r].t nb ꜥꜣ […] [=f] nb nṯr(?) msj nṯrw | [פְּתָח־נעים־החיים]: […] אדון כל מחיה, *הגדול* […] [שלו], אדון האל?, אשר ילד את הָאֵלִים. | — | — | — |
| 50b | [Ptḥ-ꜥḥ-rmw] / · […] njw[.t] […] msj nṯrw · ( ) | [פְּתָח־מסיר־הבכי]: […] עיר […] אשר ילד את הָאֵלִים. (רווח ריק) | — | — | — |
| 51b | [Ptḥ-dmḏ tꜣ.wj(?)] / · […] · ( ) | [פְּתָח־המצרף־את־שתי־הארצות?]: […] (רווח ריק) | — | — | — |
| 52b | Ptḥ-nfr […] / · [sḫpr Nfrtm] r šr.t Rꜥw rꜥ-nb · ( ) | פְּתָח־הטוב […]: [המהווה את נֶפֶרְתֵּם] לנחירי רַא בכל יום. (רווח ריק) | — | — | — |
| 53 | (nṯr.w ḫpr.w m Ptḥ) ḫpr(.w) m ḥꜣ.tj ḫpr(.w) m ns m tj.t Jtmw · jw wr ꜥꜣ Ptḥ swḏ(.w) [n=f nṯr.w nb].w kꜣ.w=sn sk m ḥꜣ.tj pn m ns pn · ( ) | (הָאֵלִים אשר נהיו בִּפְתָח:) נהיו בלבב, נהיו בלשון, בדמות אתום. וגדול ורב פְּתָח: הונחלו [לו כל הָאֵלִים] וכָּאֵיהֶם, ו(הוא) – כלבב הזה וכלשון הזאת. (רווח ריק) | `נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` (בראשית א:כו) | equivalent | *tj.t* "דמות" (renderings §4.4: `דְּמוּת` ל־*twt*, *tjt*): כאן לב ולשון "נהיו בדמות אתום", כלומר אתום עצמו הוא דמות של פתח שנהיתה במחשבתו ובדיבורו; בבראשית האדם נעשה בדמות האל. |
| 54 | ⟨jw⟩ ḫpr.n Ḥrw jm=f ⟨jw⟩ ḫpr.n Ḏḥw.tj jm=f m Ptḥ · ḫpr.n sḫm ḥꜣ.tj ns m ꜥ.wt [nb ḥr] sbꜣ wnt=f m-ḫnt ẖ.t nb m-ḫn(t) rꜣ nb n nṯr.w nb.w rmṯ nb ꜥw.t nb ḥfꜣ.t nb · ꜥnḫ=t(w) ḥr kꜣꜣ.t jḫ.t nb mrr.t=f · ꜥnḫ=t(w) ḥr wḏ(.t)-mdw (jḫ.t nb mrr.t=f) | נהיה חורוס בו, נהיה תְּחוּת בו, כפְּתָח. נהיה שלטון הלבב והלשון ב[כל] האברים, [על פי] הלימוד שהוא בתוך כל בטן, בתוך כל פה של כל הָאֵלִים, כל בני האדם, כל הצאן, כל הנחשים. חיים במחשבת כל דבר אשר הוא אוהב, חיים בציווי־דברים (כל דבר אשר הוא אוהב). | `וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל הָאָרֶץ וּבְכָל הָרֶמֶשׂ הָרֹמֵשׂ עַל הָאָרֶץ` (בראשית א:כו) | equivalent | רשימה של סוגי החיים: במצרית אלים, אדם, צאן ונחשים (*ḥfꜣ.t*, כל הזוחלים), בבראשית דגים, עוף, בהמה ורמש |
| 54 | ⟨jw⟩ ḫpr.n Ḥrw jm=f ⟨jw⟩ ḫpr.n Ḏḥw.tj jm=f m Ptḥ · ḫpr.n sḫm ḥꜣ.tj ns m ꜥ.wt [nb ḥr] sbꜣ wnt=f m-ḫnt ẖ.t nb m-ḫn(t) rꜣ nb n nṯr.w nb.w rmṯ nb ꜥw.t nb ḥfꜣ.t nb · ꜥnḫ=t(w) ḥr kꜣꜣ.t jḫ.t nb mrr.t=f · ꜥnḫ=t(w) ḥr wḏ(.t)-mdw (jḫ.t nb mrr.t=f) | נהיה חורוס בו, נהיה תְּחוּת בו, כפְּתָח. נהיה שלטון הלבב והלשון ב[כל] האברים, [על פי] הלימוד שהוא בתוך כל בטן, בתוך כל פה של כל הָאֵלִים, כל בני האדם, כל הצאן, כל הנחשים. חיים במחשבת כל דבר אשר הוא אוהב, חיים בציווי־דברים (כל דבר אשר הוא אוהב). | `כִּי קָרוֹב אֵלֶיךָ הַדָּבָר מְאֹד: בְּפִיךָ וּבִלְבָבְךָ לַעֲשֹׂתוֹ` (דברים ל:יד) | equivalent | הצמד "פה – לבב" כמקום הדבר |
| 54 | ⟨jw⟩ ḫpr.n Ḥrw jm=f ⟨jw⟩ ḫpr.n Ḏḥw.tj jm=f m Ptḥ · ḫpr.n sḫm ḥꜣ.tj ns m ꜥ.wt [nb ḥr] sbꜣ wnt=f m-ḫnt ẖ.t nb m-ḫn(t) rꜣ nb n nṯr.w nb.w rmṯ nb ꜥw.t nb ḥfꜣ.t nb · ꜥnḫ=t(w) ḥr kꜣꜣ.t jḫ.t nb mrr.t=f · ꜥnḫ=t(w) ḥr wḏ(.t)-mdw (jḫ.t nb mrr.t=f) | נהיה חורוס בו, נהיה תְּחוּת בו, כפְּתָח. נהיה שלטון הלבב והלשון ב[כל] האברים, [על פי] הלימוד שהוא בתוך כל בטן, בתוך כל פה של כל הָאֵלִים, כל בני האדם, כל הצאן, כל הנחשים. חיים במחשבת כל דבר אשר הוא אוהב, חיים בציווי־דברים (כל דבר אשר הוא אוהב). | `לֵב אָדָם יְחַשֵּׁב דַּרְכּוֹ` (משלי טז:ט) | equivalent | הלב כמקום המחשבה. |
| 55 | psḏ.t=f m-bꜣḥ=f · m jbḥ.w m sp.t(j) · mtw.t ḏr.tj Jtmw jpꜣ · ḫpr[.n js] psḏ.t Jtmw m mtw.t=f m ḏbꜥ.w=f · psḏ.t ḥm pw jbḥ.w sp.tj m rꜣ pn mꜣṯ rn n jḫ.t nb.t prj.n Šw Tfn.t jm=f | תשיעייתו לפניו כשיניים וכשפתיים: זרע אתום וידיו ההם. [כי] נהיתה תשיעיית אתום מזרעו ומאצבעותיו; אבל התשיעייה – השיניים והשפתיים הן, בפה הזה, ההוגה את שמו של כל דבר, אשר יצאו ממנו שׁוּ ותֶפְנוּת, | `וַיִּקְרָא הָאָדָם שֵׁמוֹת לְכָל הַבְּהֵמָה` (בראשית ב:כ) | equivalent | מתן השמות לכל הדברים; במצרים האל (בפיו) הוגה את שם כל דבר, ובבראשית ב האדם קורא שמות |
| 55 | psḏ.t=f m-bꜣḥ=f · m jbḥ.w m sp.t(j) · mtw.t ḏr.tj Jtmw jpꜣ · ḫpr[.n js] psḏ.t Jtmw m mtw.t=f m ḏbꜥ.w=f · psḏ.t ḥm pw jbḥ.w sp.tj m rꜣ pn mꜣṯ rn n jḫ.t nb.t prj.n Šw Tfn.t jm=f | תשיעייתו לפניו כשיניים וכשפתיים: זרע אתום וידיו ההם. [כי] נהיתה תשיעיית אתום מזרעו ומאצבעותיו; אבל התשיעייה – השיניים והשפתיים הן, בפה הזה, ההוגה את שמו של כל דבר, אשר יצאו ממנו שׁוּ ותֶפְנוּת, | `בִּדְבַר יְהוָה שָׁמַיִם נַעֲשׂוּ; וּבְרוּחַ פִּיו כָּל-צְבָאָם` (תהלים לג:ו) | divergence | הבריאה בפה: בתהלים בדבר וברוח, כאן גם בשיניים ובשפתיים. |
| 56 | msḫn.t nṯr.w · (jw) mꜣꜣ jr.tj sḏm msḏr.wj · ssn fnḏ ṯꜣw sjꜥr=sn ḫr ḥꜣt.j · ntf dd prj ꜥrqjj.t nb(.t) · jn ns wḥm kꜣꜣ.t ḥꜣ.tj · sw(t) msj nṯr.w nb.w · Jtmw psḏ.t=f sk · ḫpr.n js mdw-nṯr nb m kꜣꜣ.t | אָבְנֵי הלידה של הָאֵלִים. חזות העיניים, שמיעת האוזניים, נשימת האף את הרוח – מעלים הם אל הלבב; הוא המוציא כל הבנה, והלשון היא הַשּׁוֹנָה את מחשבת הלבב. הוא ילד את כל הָאֵלִים, אתום ותשיעייתו, כאשר נהיה, אפוא, כל דבר־אֵל במחשבת | `וּרְאִיתֶן עַל הָאָבְנָיִם` (שמות א:טז) | equivalent | אבני הלידה של המיילדות במצרים: *msḫn.t* היא אותו חפץ; כאן הפה של פתח הוא "אבני הלידה" של האלים |
| 56 | msḫn.t nṯr.w · (jw) mꜣꜣ jr.tj sḏm msḏr.wj · ssn fnḏ ṯꜣw sjꜥr=sn ḫr ḥꜣt.j · ntf dd prj ꜥrqjj.t nb(.t) · jn ns wḥm kꜣꜣ.t ḥꜣ.tj · sw(t) msj nṯr.w nb.w · Jtmw psḏ.t=f sk · ḫpr.n js mdw-nṯr nb m kꜣꜣ.t | אָבְנֵי הלידה של הָאֵלִים. חזות העיניים, שמיעת האוזניים, נשימת האף את הרוח – מעלים הם אל הלבב; הוא המוציא כל הבנה, והלשון היא הַשּׁוֹנָה את מחשבת הלבב. הוא ילד את כל הָאֵלִים, אתום ותשיעייתו, כאשר נהיה, אפוא, כל דבר־אֵל במחשבת | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | האף שנושם רוח |
| 56 | msḫn.t nṯr.w · (jw) mꜣꜣ jr.tj sḏm msḏr.wj · ssn fnḏ ṯꜣw sjꜥr=sn ḫr ḥꜣt.j · ntf dd prj ꜥrqjj.t nb(.t) · jn ns wḥm kꜣꜣ.t ḥꜣ.tj · sw(t) msj nṯr.w nb.w · Jtmw psḏ.t=f sk · ḫpr.n js mdw-nṯr nb m kꜣꜣ.t | אָבְנֵי הלידה של הָאֵלִים. חזות העיניים, שמיעת האוזניים, נשימת האף את הרוח – מעלים הם אל הלבב; הוא המוציא כל הבנה, והלשון היא הַשּׁוֹנָה את מחשבת הלבב. הוא ילד את כל הָאֵלִים, אתום ותשיעייתו, כאשר נהיה, אפוא, כל דבר־אֵל במחשבת | `לְאָדָם מַעַרְכֵי-לֵב; וּמֵיְהוָה מַעֲנֵה לָשׁוֹן` (משלי טז:א) | equivalent | הלב והלשון כצמד המחשבה והדיבור (שם בניגוד: הלב לאדם, הלשון לאל). |
| 57 | ḥꜣt.j wḏ.t ns · sw(t) jrj kꜣ.w mtn ḥms.wt · jrr ḏfꜣw nb ḥtp.t nb m md.t tn · jrr mrr.t msḏ.t · sw(t) dj ꜥnḫ n ẖr(.j)-ḥtp dj mt n ẖr(.j)-ḫnb.t · sw(t) jrj kꜣ.t nb ḥmw.t nb · jrj.t ꜥ.wj šm(.t) rd.wj | הלבב ובציווי הלשון. הוא עשה את הכָּאִים וסימן את הַחֶמְסוּת, העושה כל מזון וכל קרבן בדבר הזה, העושה את האהוב ואת השנוא. הוא נותן חיים לנושא־הנחת, נותן מוות לנושא־העוון. הוא עשה כל מלאכה וכל חרושת, עשיית הזרועות, הליכת הרגליים, | `וְעֵץ הַדַּעַת טוֹב וָרָע` (בראשית ב:ט) | divergence | "האהוב והשנוא": האל המצרי עושה את שניהם (אל־הוארי: הטוב והרע), ובבראשית הידיעה שלהם היא פרי אסור |
| 57 | ḥꜣt.j wḏ.t ns · sw(t) jrj kꜣ.w mtn ḥms.wt · jrr ḏfꜣw nb ḥtp.t nb m md.t tn · jrr mrr.t msḏ.t · sw(t) dj ꜥnḫ n ẖr(.j)-ḥtp dj mt n ẖr(.j)-ḫnb.t · sw(t) jrj kꜣ.t nb ḥmw.t nb · jrj.t ꜥ.wj šm(.t) rd.wj | הלבב ובציווי הלשון. הוא עשה את הכָּאִים וסימן את הַחֶמְסוּת, העושה כל מזון וכל קרבן בדבר הזה, העושה את האהוב ואת השנוא. הוא נותן חיים לנושא־הנחת, נותן מוות לנושא־העוון. הוא עשה כל מלאכה וכל חרושת, עשיית הזרועות, הליכת הרגליים, | `רְאֵה נָתַתִּי לְפָנֶיךָ הַיּוֹם אֶת הַחַיִּים וְאֶת הַטּוֹב וְאֶת הַמָּוֶת וְאֶת הָרָע` (דברים ל:טו) | equivalent | חיים ומוות לפי המעשה |
| 57 | ḥꜣt.j wḏ.t ns · sw(t) jrj kꜣ.w mtn ḥms.wt · jrr ḏfꜣw nb ḥtp.t nb m md.t tn · jrr mrr.t msḏ.t · sw(t) dj ꜥnḫ n ẖr(.j)-ḥtp dj mt n ẖr(.j)-ḫnb.t · sw(t) jrj kꜣ.t nb ḥmw.t nb · jrj.t ꜥ.wj šm(.t) rd.wj | הלבב ובציווי הלשון. הוא עשה את הכָּאִים וסימן את הַחֶמְסוּת, העושה כל מזון וכל קרבן בדבר הזה, העושה את האהוב ואת השנוא. הוא נותן חיים לנושא־הנחת, נותן מוות לנושא־העוון. הוא עשה כל מלאכה וכל חרושת, עשיית הזרועות, הליכת הרגליים, | `אִם לוֹא יַגִּיד וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | equivalent | "נושא עוון" |
| 57 | ḥꜣt.j wḏ.t ns · sw(t) jrj kꜣ.w mtn ḥms.wt · jrr ḏfꜣw nb ḥtp.t nb m md.t tn · jrr mrr.t msḏ.t · sw(t) dj ꜥnḫ n ẖr(.j)-ḥtp dj mt n ẖr(.j)-ḫnb.t · sw(t) jrj kꜣ.t nb ḥmw.t nb · jrj.t ꜥ.wj šm(.t) rd.wj | הלבב ובציווי הלשון. הוא עשה את הכָּאִים וסימן את הַחֶמְסוּת, העושה כל מזון וכל קרבן בדבר הזה, העושה את האהוב ואת השנוא. הוא נותן חיים לנושא־הנחת, נותן מוות לנושא־העוון. הוא עשה כל מלאכה וכל חרושת, עשיית הזרועות, הליכת הרגליים, | `לַעֲשׂוֹת בְּכָל מְלֶאכֶת מַחֲשָׁבֶת` (שמות לה:לג) | equivalent | מלאכה ואומנות שמקורן במחשבה |
| 57 | ḥꜣt.j wḏ.t ns · sw(t) jrj kꜣ.w mtn ḥms.wt · jrr ḏfꜣw nb ḥtp.t nb m md.t tn · jrr mrr.t msḏ.t · sw(t) dj ꜥnḫ n ẖr(.j)-ḥtp dj mt n ẖr(.j)-ḫnb.t · sw(t) jrj kꜣ.t nb ḥmw.t nb · jrj.t ꜥ.wj šm(.t) rd.wj | הלבב ובציווי הלשון. הוא עשה את הכָּאִים וסימן את הַחֶמְסוּת, העושה כל מזון וכל קרבן בדבר הזה, העושה את האהוב ואת השנוא. הוא נותן חיים לנושא־הנחת, נותן מוות לנושא־העוון. הוא עשה כל מלאכה וכל חרושת, עשיית הזרועות, הליכת הרגליים, | `וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה` (בראשית ב:ב) | equivalent | "כל מלאכה" (*kꜣ.t*) של הבורא. |
| 58 | nmnm ꜥ.t nb ḫft wḏ=f md.t · (j)n kꜣꜣ.t ḥꜣ.tj pr.t m ns jrr.t ꜣw n jḫ.t nb · ḫpr.n ḏd jrj tmw sḫpr nṯr.w r Ptḥ · Tꜣ-ṯnn [j]s pw msj nṯr.w prj.n jḫ.t nb jm=f m ḥtp m ḏfꜣw m | תנועת כל אבר, כפי שהוא מצווה דבר. מחשבת הלבב, ומוצא הלשון – הם העושים את *אורכו*? של כל דבר. (וכך) נהיה שאומרים על פְּתָח: "עושה־הכול, מהווה־הָאֵלִים". תָּא־טֶנֶן הוא, אפוא, אשר ילד את הָאֵלִים, ואשר יצא ממנו כל דבר – כקרבן, כמזון, | `כִּי עַל כָּל מוֹצָא פִי יְהוָה יִחְיֶה הָאָדָם` (דברים ח:ג) | equivalent | "מוצא הלשון" (*pr.t m ns*) כמקור הקיום |
| 58 | nmnm ꜥ.t nb ḫft wḏ=f md.t · (j)n kꜣꜣ.t ḥꜣ.tj pr.t m ns jrr.t ꜣw n jḫ.t nb · ḫpr.n ḏd jrj tmw sḫpr nṯr.w r Ptḥ · Tꜣ-ṯnn [j]s pw msj nṯr.w prj.n jḫ.t nb jm=f m ḥtp m ḏfꜣw m | תנועת כל אבר, כפי שהוא מצווה דבר. מחשבת הלבב, ומוצא הלשון – הם העושים את *אורכו*? של כל דבר. (וכך) נהיה שאומרים על פְּתָח: "עושה־הכול, מהווה־הָאֵלִים". תָּא־טֶנֶן הוא, אפוא, אשר ילד את הָאֵלִים, ואשר יצא ממנו כל דבר – כקרבן, כמזון, | `כִּי הוּא אָמַר וַיֶּהִי; הוּא-צִוָּה וַיַּעֲמֹד` (תהלים לג:ט) | equivalent | הצו (*wḏ*) שהעולם קם בו |
| 58 | nmnm ꜥ.t nb ḫft wḏ=f md.t · (j)n kꜣꜣ.t ḥꜣ.tj pr.t m ns jrr.t ꜣw n jḫ.t nb · ḫpr.n ḏd jrj tmw sḫpr nṯr.w r Ptḥ · Tꜣ-ṯnn [j]s pw msj nṯr.w prj.n jḫ.t nb jm=f m ḥtp m ḏfꜣw m | תנועת כל אבר, כפי שהוא מצווה דבר. מחשבת הלבב, ומוצא הלשון – הם העושים את *אורכו*? של כל דבר. (וכך) נהיה שאומרים על פְּתָח: "עושה־הכול, מהווה־הָאֵלִים". תָּא־טֶנֶן הוא, אפוא, אשר ילד את הָאֵלִים, ואשר יצא ממנו כל דבר – כקרבן, כמזון, | `אָנֹכִי יְהוָה עֹשֶׂה כֹּל` (ישעיהו מד:כד) | equivalent | "עושה־הכול". |
| 59 | ḥtp.t-nṯr.w m jḫ.t nb.t nfr.t · sw(t) Ḏḥwtj sꜣ(ꜣ) ꜥꜣ pḥ.tj=f r nṯr.w · sw(t) ḥtp · m-ḫt jrj.t=f jḫ.t nb.t · mdw-nṯr nb sk · (jw) msj.n=f nṯr.w jrj.n=f njw.wt grg.n=f sp(ꜣ).wt dj.n=f nṯr.w ḥr ḫm(.w) | קרבנות־הָאֵלִים, ככל דבר טוב. הוא תְּחוּת, החכם, אשר גדול כוחו מן הָאֵלִים. הוא נח, אחרי עשותו כל דבר וכל דבר־אֵל, כאשר ילד את הָאֵלִים, עשה את הערים, ייסד את המחוזות, שם את הָאֵלִים על הדבירים | `וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי` (שמות כ:י) | equivalent | אותה מלה (`נח`) לאל אחרי מעשה הבריאה: *ḥtp* "נח, שבע רצון" |
| 59 | ḥtp.t-nṯr.w m jḫ.t nb.t nfr.t · sw(t) Ḏḥwtj sꜣ(ꜣ) ꜥꜣ pḥ.tj=f r nṯr.w · sw(t) ḥtp · m-ḫt jrj.t=f jḫ.t nb.t · mdw-nṯr nb sk · (jw) msj.n=f nṯr.w jrj.n=f njw.wt grg.n=f sp(ꜣ).wt dj.n=f nṯr.w ḥr ḫm(.w) | קרבנות־הָאֵלִים, ככל דבר טוב. הוא תְּחוּת, החכם, אשר גדול כוחו מן הָאֵלִים. הוא נח, אחרי עשותו כל דבר וכל דבר־אֵל, כאשר ילד את הָאֵלִים, עשה את הערים, ייסד את המחוזות, שם את הָאֵלִים על הדבירים | `וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה` (בראשית ב:ב) | divergence | בבראשית "שבת" ו"כלה", ביום השביעי, ומכאן השבת; במף אין יום ואין מספר, ו*ḥtp* הוא שביעות רצון של מי שהשלים |
| 59 | ḥtp.t-nṯr.w m jḫ.t nb.t nfr.t · sw(t) Ḏḥwtj sꜣ(ꜣ) ꜥꜣ pḥ.tj=f r nṯr.w · sw(t) ḥtp · m-ḫt jrj.t=f jḫ.t nb.t · mdw-nṯr nb sk · (jw) msj.n=f nṯr.w jrj.n=f njw.wt grg.n=f sp(ꜣ).wt dj.n=f nṯr.w ḥr ḫm(.w) | קרבנות־הָאֵלִים, ככל דבר טוב. הוא תְּחוּת, החכם, אשר גדול כוחו מן הָאֵלִים. הוא נח, אחרי עשותו כל דבר וכל דבר־אֵל, כאשר ילד את הָאֵלִים, עשה את הערים, ייסד את המחוזות, שם את הָאֵלִים על הדבירים | `כִּי בוֹ שָׁבַת מִכָּל מְלַאכְתּוֹ אֲשֶׁר בָּרָא אֱלֹהִים לַעֲשׂוֹת` (בראשית ב:ג) | equivalent | "אחרי עשותו כל דבר": המנוחה באה אחרי ה"עשייה" (*jrj* = `עשה`). |
| 60 | =sn srwḏ.n=f pꜣw.t=sn grg.n=f ḫm.w=sn · (jw) stwt.n=f ḏ.t=sn r ḥtp jb.w=sn · sw(t) ꜥq nṯr.w m ḏ.t=sn m ḫt nb m ꜥꜣ.t nb(.t) m jm(.w) nb jḫ.t nb rd(.t) ḥr-ḫtw=f | שלהם; ביסס את עוגותיהם, ייסד את דביריהם, דימה את גוויותיהם לנחת לבם. ונכנסו הָאֵלִים בגוויותיהם, מכל עץ, מכל אבן, מכל חרס, מכל דבר הצומח עליו, | `וַיַּעֲשֵׂהוּ כְּתַבְנִית אִישׁ כְּתִפְאֶרֶת אָדָם לָשֶׁבֶת בָּיִת` (ישעיהו מד:יג) | divergence | הפסל העשוי עץ ואבן: בישעיהו לעג לעובדי פסילים, כאן התאולוגיה של הפסל: האל "נכנס" לגוף שעשה לו פתח האומן. |
| 61 | (jw) ḫpr.n=sn jm · sw(t) jꜥb n=f nṯr.w nb.w kꜣ.w=sn js(t) · ḥtpj ẖnmjj m nb tꜣ.wj · šnw.t nṯr js.t wr.t · ẖnm.t jb nṯr.w jm.j(w) ḥw.t(-kꜣ)-Ptḥ nb.t ꜥnḫ nb ( ) · jrr.t ꜥnḫ-tꜣ.wj jm=s | ונהיו בו. הוא אסף לו את כל הָאֵלִים ואת כָּאֵיהֶם, נחים ודבקים באדון שתי הארצות. אסם האל – הוא המושב הגדול, אשר לב הָאֵלִים אשר בבית־כָּא־פְּתָח דבק בו, גבירת כל החיים (רווח ריק), אשר בה עושים את חיי שתי הארצות. | `וַתִּדְבַּק נַפְשׁוֹ בְּדִינָה` (בראשית לד:ג) | equivalent | "לב האלים דבק בה" (*ẖnm jb*): דבקות של אהבה. |
| 62 | n-wnt Wsjr mḥj=f ḥr mw=f · mꜣ.tw Js.t Nb.t-Ḥw.t ptr=sn sw mnḫ=sn jm=f · wḏ Ḥrw n Js.t Nb.t-Ḥw.t m ḏdj nḏrj=sn m Wsjr ḫwj=sn mḥj=f | כי אוסיריס הוא אשר טבע במימיו; חוזים באיסיס ובנפתיס: רואות הן אותו, דואגות הן לו. ציווה חורוס את איסיס ואת נפתיס: אל תתמהמהו! – יאחזו הן באוסיריס, יגנו הן מפני טביעתו. | `וַתִּפְתַּח וַתִּרְאֵהוּ אֶת הַיֶּלֶד` (שמות ב:ו) | divergence | שתי נשים על שפת הנהר, והאל או התינוק שבמים; במצרים האחיות מושות את אוסיריס המת, בשמות בת פרעה מושה את משה. |
| 63 | pẖr=sn r tp-tr=s(n) · spr=sn sw r tꜣ · ꜥq=f sbḫ.wt štꜣ.w m ḏsr.w n.w nb.w nḥḥ r nmt.t wbn-m-ꜣḫ.t-ḥr-mṯn.w-Rꜥw m js.t wr.t | סבבו הן במועדן, הגיעו אותו אל הארץ; נכנס הוא בשערים הנסתרים, בהדרת אדוני הנצח, אל צעדי הזורח־באופק, על נתיבות רַא, במושב הגדול. | `יַמְשֵׁנִי מִמַּיִם רַבִּים` (תהלים יח:יז) | equivalent | משייה מן המים אל ההצלה. |
| 64 | ẖnm=f m stp-sꜣ snsn=f r nṯr.w Tꜣ-ṯnn Ptḥ nb-rnp.wt=s(n) · ḫpr Wsjr m tꜣ m ḥw.t-sr m gs-mḥt.t n tꜣ pn · spr n=f r=f sꜣ=f Ḥrw ḫꜥ.(w) m njswt-bjtj m ẖnw-ꜥ(ḥ) jtj=f Wsjr ḥnꜥ nṯr.w tpj.w-ꜥ=f jm.jw-ḫt=f | דבק הוא בארמון, התחבר אל אֵלֵי תָּא־טֶנֶן פְּתָח, אדון שנותיהם. נהיה אוסיריס בארץ, בבית־השר, בצד הצפוני של הארץ הזאת; הגיע אליו בנו חורוס, אשר הופיע כמלך־הדרום־והצפון, בחצר אביו אוסיריס, יחד עם הָאֵלִים קדמוניו ואשר אחריו. | — | — | — |
