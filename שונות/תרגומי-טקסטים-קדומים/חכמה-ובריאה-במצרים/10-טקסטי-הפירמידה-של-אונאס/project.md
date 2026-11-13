# Project 10: the Pyramid Texts of Unas, the whole pyramid (`טקסטי הפירמידה של אונאס`)

Round 8 run 1 (2026-11-13; the plan: `../../translation-program.md`, Round 8 run 1 "EG1", candidate egypt-01:
`../../curation-surveys/program-2026-11/region--egypt.md`).

## Scope
Every spell carved on the walls of the pyramid of **Unas** (Wnjs, last king of the 5th dynasty, c. 2350 BCE, Saqqara):
231 wall occurrences of 228 spells (Allen 2013's "Occurrences"), in wall order (Sethe's columns 1–649) – the oldest
large religious text on earth, in a contemporary artifact. 1,606 lines (Allen 2013's line division), in nine files
(UN1–UN9) by room and wall: `../renderings.md` §13.1. Not here: project 2's PT 571, 486, 527, 600 (later pyramids:
`../2-בריאה-במצרים/`).

## Base text and line numbering
- **AED-TEI** (the TLA's January 2018 database, CC BY-SA 4.0): Unas's own records (`../../sources/AED-TEI/PT--Unas/`,
  145 records) for 1,232 lines; for the spells the TLA did not record from Unas's walls, the earliest good later copy
  (`../../sources/AED-TEI/PT--Unas-parallels/`, 73 records: Teti 68 lines, Pepi I 61, Merenre 18, Pepi II 26, Queen
  Neith 142); for 11 spells AED lacks or holds only in non-matching copies (58 lines), Allen 2013's transcription
  (consulted locally, ©).
- **Allen 2013**, *A New Concordance of the Pyramid Texts* I (`../../sources/Allen-2013--…/README.md`): the line division
  and numbering (`<spell>.<line>`; Sethe's Pyr. § kept in the composite), the wall order, and the check of every line.
- **The composite** `composite-UN.tsv` (made by `make_composite.py`): key, label, spell, Allen's line, Pyr. §, Unas's
  wall, witness, AED file, word range, AED columns. Concordance: each row's Pyr. § is Sethe's paragraph; Allen's
  `PT n.m` = our label `n.m`.

## Translation
Translators one after another (range A: one agent at a time), one key each, in this order: UN3 (the resurrection
ritual of the burial chamber), UN4 (PT 219, the east wall), UN5 (the serpent spells, the passage), UN6, UN7 (with the
Cannibal Hymn), UN8, UN9 (the ascent; the corridor), UN1–UN2 (the offering ritual) – the core first; each followed by an
independent fidelity review.

<!-- the translators' sections go here, each above "## Parallels index" -->

## UN3 (PT 204–218)

Round 8 run 1, translator 1 (2026-11-13). Files: `annotated-UN3.rtl.md`, `translation--intro-UN3.rtl.md`,
`translation-UN3.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The burial chamber's **east gable** (PT 204, 205, 207, 209, 210, 211, 212: the king's meal) and **south wall** (PT
213–218: the resurrection ritual), 184 rows of the composite (labels `204.1` … `218.25`; Allen has no `215.3` in
Unas's division, so the brief's "185" is 184). Unas's own wall for all rows except PT 211 (Pepi II, N, `{פפי ב}`,
9 rows) and PT 212 (Pepi I, P, `{פפי א}`, 6 rows; partly restored). Preservation: Unas's wall intact; PT 212 has
`[ ]` in 212.2–212.6. The text in a sentence: the dead king eats with the gods and loathes excrement, then is told
"you did not go away dead, you went away alive", is made into Atum limb by limb, purified, lifted to the sky, and
announced to the gods of the four quarters and to Osiris as the new master of life and death.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN3` (TLA lemmas, morphology, German glosses); Allen 2013's lines
  (printed by `data`; a check only, never copied).
- Rank 3: the TLA's German (`tr UN3`), read after each section was drafted (204–212, then 213–218). Allen 2005/2015
  and Faulkner 1969 from memory only, in a few words and never quoted.
- Precedents: `lex` / `grep --all` for every recurring lemma (PT 486, 527, 571; the Book of the Dead keys; HC; AM; SI).
- Bible verses printed with `check_bible_quotes.py --show` before quoting (Gen 1:2, 4:8, 5:24, 15:4, 28:12, 41:45;
  Deut 14:3; 2 Kgs 2:11, 18:27; Isa 14:13, 49:10; Jer 17:10; Amos 5:8; Ps 2:7, 78:25, 136:25; Job 3:3; Dan 1:11, 5:19;
  1 Sam 2:6; Lev 22:2; Ezek 4:12).

### Decisions
- **Address and person**: `hꜣ Wnjs` = `הוֹי אונאס` (FORMULA; vocalized at first occurrence); `Wnjs pn` = `אונאס זה`;
  the priest's "you" kept; the shifts to "I" (207.1, 215.5, 216.1–216.3) kept as written. Unas = `אוּנָאס` (plain
  `אונאס`). `j` = `הוֹ` (renderings §3a).
- **PT 213.1**: `n šmi̯.n=k js mt.tj šmi̯.n=k ꜥnḫ.t` = `הוֹי אונאס, לא הלכת מת – הלכת חי!` (*n … js* negates the
  stative, not the verb; *šmj* = `הלך`). Footnote in the clean text.
- **The post-positive particle** `r=f` / `jr=k` / `jr=ṯn` (tla28170) = `אפוא` everywhere (`בָּא אפוא אונאס זה`,
  `טהורה אפוא`, `עלה אפוא`, `חַבֵּקְנָה אפוא`).
- **Refrains fixed (the later copies copy them byte for byte)**: PT 217 `אָתוּם, בא אליך אונאס זה, אָח בלתי־כלה,
  אדון צורכי מקום ארבעת עמודי־הפפירוס.` / `בא אליך בנך, בא אליך אונאס זה.` / `תחלפו שניכם במרום, מקובצים באפלה;` /
  `תזרחו באופק, במקום אשר הייתם שם לאָחִים.` / `בָּא אפוא אונאס זה, אָח בלתי־כלה:` / `אשר יחפוץ שיחיה – יחיה הוא; אשר
  יחפוץ שימות – ימות הוא.`; the messenger line `X, לכו, הודיעו לאֵלֵי Y ולאָחִים שלהם:` (sg. `לך, הודע`); PT 218
  `בָּא אפוא אונאס זה, החֻוֶרֶר? של התשיעייה, אָח בלתי־כלה.` and `<the quarter> אשר בארץ – של אונאס זה.`; the
  embrace `העלה אותו אליך, הקף אותו אליך בתוך זרועותיך` (215.2 = 217.33). `jyi̯ r=f` refrain vocalized `בָּא` (see
  Problems below).
- **The offering vocabulary** (for UN1–UN2): tʾ `לחם`, ḥnq.t `שֵׁכָר` (vocalized), jt `שעורה`, bd.t `כוסמת` (AM/TB/SI
  precedents); jr.t-Ḥr.w `עין־חוֹרוּס`; (j)ḫ.t "thing, meal, portion" (tla30750) `מנה`; jš.tt "meal" `ארוחה`; ꜥꜣb.t
  `מנחה` (TB); ḥtp.t `קורבנות`; ḏfꜣw `מזון`; snm `האכלה`; wdpw "butler" `מֶלְצַר` [equivalent Dan 1:11]; sšm "butcher"
  `טבח` (the Akkadian *ṭabāḫu* reservation does not apply in Egyptian, guidelines §6.7 2026-10-30 principle 1); ḫnḏ
  "shank" `שוק`; ḏꜣ.t "handful" `חופן`; the list line `שוק עם עוגת־סָאשֶׁרֶת! ארבעה חופני מים!` (item + count, the
  pattern for the offering rubrics); mw `מים`, jrp `יין`, qbḥ "cool water" `מי־הצינה` (NU4 79.5 precedent; renderings
  §13.3 left `מי־הקירור`? for UN1 – I propose `מי־הצינה`).
- **Abominations**: bw.t `תועבה`, bwi̯ `תיעב`, ḥs `צואה`, wzš.t `שתן` (BD precedents); twri̯ "keep away from" `נִזָּר מ־`
  (AM 15.7 `הינזר`; Lev 22:2); ḥqr `רעב` (noun and verb), jb.t / jbi̯ `צמא`.
- **Bodies and selves**: kꜣ `כָּא`, pl. `כָּאִים`; bꜣ (noun) `בָּא`, pl. `בָּאִים`; bꜣ (verb, "be ba") `היה לבָּא`
  (parallel to ꜣḫ `היה לאָח`); ꜣḫ `אָח` / pl. `אָחִים` (always vocalized: "brothers"); ḏ.t "body" `גְּוִיָּה`, ḏ.t
  "eternity" `עַד` (217.34 pun noted); jb `לב` / ḥꜣ.tj `לבב`, plurals `לבות` / `לבבות`; the limbs: ꜥ / ꜥ.wj `זרוע(ות)`,
  rmn `כתף` (213.5 and 214.10 alike), ẖ.t `בטן`, sꜣ `גב`, pḥ.wj `אחוריים`, rd `רגל`, ḥr `פנים`, mḫnt `קלסתר`, tp `ראש`,
  msḏr `אוזן` (as NU2), jr.t `עין`, fnḏ `אף`, jbḥ `שן`, ꜥ.t `איבר`, qs `עצם`, ẖrwj `אשכים`.
- **Cosmos**: j:ḫm-sk `בלתי־כלה` / `הבלתי־כלים` (§13.3; also when the TLA reads it as a vocative, 215.26–215.34);
  ski̯ `כלה`; ꜣḫ.t `האופק`; dwꜣ.t `הַדּוּאַת`; nn.t `שמי־המטה` (PT571); ḥr.t `המרום` (AM, HC); p.t `שמים`; snkw `אפלה`
  (kkw keeps `חושך`); sbꜣ `כוכב`; Sꜣḥ `סָאח`, Spd.t `סוֹפְּדֶת`; wꜣḏ (column) `עמוד־פפירוס` (`סוּף` is ṯwfj's); šmꜥw /
  mḥw `הדרום` / `הצפון` (NU7); jmntjw `המערביים`, jꜣbtjw `המזרחיים`, rsjw `הדרומיים`, mḥtjw `הצפוניים`.
- **Verbs**: šmj and zj `הלך` (a synonym pair in one Hebrew verb; see Open decisions); jj `בא`; prj `יצא` (also "go up
  to the sky": 215.32 `לצאת אל השמים`); jꜣq `עלה`; sjꜥ `העלה`; hꜣj `ירד`; šnj `הקיף`; dbn `סובב` (NU1 17.77); ḫnz
  `שוטט`; ḏꜣj `חצה`; šꜣs `חלף ב־`; znj `עבר` (NU2); wbn `זרח`; wꜥb `טהר` / `נטהר`; snṯr `הקטיר`; jp `פקד` (counting /
  examining hearts, 215.18, 217.23, 218.2); sḫm `שלט ב־`; wḏ `ציווה` (incl. "assign", 205.2–205.4, 214.8); mrj `חפץ`
  (NU1); jṯj `לקח`; šdj `חילץ` (PT486, PT571); nḥm `נטל`; nḥb `הקצה`; ṯnj `ייחד` (215.24, 218.2); dr `סילק`; ḏr
  `הרחיק`; fḫ `ניתק` (SI); mꜣꜣ `חזה`; ḥw "announce" `הודיע`; dwꜣ `הודה` (SS); jꜥb `התקבץ` (NU3); jnq `חיבק`; ḥmj
  `נרתע` (never the root סוג); nn "turn away" `פנה`; qbb `הצטנן`; ḥꜥj `עלז`; rs `הקיץ` / nhzj `התעורר`; sḫꜣ `זכר`
  (the pun with Msḫꜣ.t-kꜣw kept); nk `שכב עם` (licensed), sn "kiss" `נשק`, dmḏ `התחבר`; jwr (passive) `הוֹרָה`
  [Job 3:3], msj `נולד` / `ילד`; psg `ירק`; jꜥḥ `צד`; wsr `היה חסין`; sqdj `שט`; ḫfꜥ `לפת`, ꜣm `אחז` (NU2).
- **Messengers**: wpw.t (tla45750) `שליחות`, pl. `שליחויות` (AM, TB precedent; `מלאך` gated, `שליח` kept for wpwtj);
  jnw (tla27050) `צירים` (Isa 18:2); ḥwwtj `רצים`.
- **Names fixed here** (renderings §2.2; first occurrence vocalized): Ḥꜣ `חָא`; Ftk-tꜣ `פֶתֶכְתָא`; Knz.t `כֶּנְזֶת`;
  Mwt `מוּת` (always vocalized: "death"); Šws.t `שׁוּסֶת`; Nḫb.wt `נֶחְבּוּת`; Wpw `וֶפִּיוּ`; Wp-wꜣ.wt `וֶפְּוָאוֶת`;
  Sdꜣ-wr `האנפה הגדולה`; Jꜣ.t `יָאת`; nṯr-dwꜣ `אֵל־השחר`; Ḫntj-jmntjw `חֶנְתִּי־אִמֶנְתִּיו` (§13.2); Ḫntj-jrtj
  `חֶנְתִּי־אִרְתִּי`; Ḥr.w-dwꜣ.tj `חוֹרוּס־שבדּוּאַת`; Spdw `סֹפְּדוּ`; the four sons `חַפִּי`, `דּוּאָמוּתֶף`, `אִימְסֶתִי`,
  `קֶבֶּחְסֶנוּף` (NU1 17.42 forms); Mꜣꜥ `אמיתי` (translated); Ḥrj-ṯrwt `אשר־על־האדומים`; Msḫꜣ.t-kꜣw
  `מזכירת־הכָּאִים?`; mskt.t `מֶסְקְטֶת`; ḥnw (Sokar's bark) `חֶנוּ`; ḥnmm.t `ההֶנְמֶמֶת`; ḫwrr `החֻוֶרֶר?`; ḥꜥpj
  `חַעְפִּי` (NU9); zꜣ.tj Jtm "Atum's two children" `התאומים של אָתוּם` (PT527 `התאומים`); mn "So-and-so" `פלוני`;
  Pepi II `פֶּפִּי נֶפֶרְכָּרֶע` (as §13.2: `נֶפֶרְכָּרֶע`).
- **Rejected**: `מלאך` / `שליח` for wpw.t; `סוף` / `גומא` for wꜣḏ; `דמות` for jrw (215.6: `מראה`); `הבדיל` for ṯnj (a
  Gen 1 word); `בער` for rkḥ (207.3: `לַבֵּה`); `נסוג` for ḥmj; `השחתה` for jy (`מום`); `כסיל` for Orion (the fool
  word is gated; Amos 5:8 only in the apparatus).

### Open decisions for the user
- **ḫwrr** (218.1 refrain, 7 times) is left transliterated with `?` (`החֻוֶרֶר?`): the TLA has no meaning ("[vom
  Toten]"); a later translator who meets it in a clearer context may translate it.
- **zj / šmj** both `הלך` (one Hebrew for two Egyptian "go" verbs): Hebrew offers no clean second verb; the
  alternative would be `צעד` for zj.
- **wpw.t** `שליחויות` (214.2) is faithful but stiff; the English translations say "messengers".
- **jꜣq / sjꜥ**: jꜣq `עלה` and sjꜥ (causative of jꜥj "ascend") `העלה` share the Hebrew root; acceptable?

### Progress log
- Drafted 204.1–212.6 (61 rows), saved, `fill` + `verify` (0 problems); then the TLA's German read and the entries
  completed; then 213.1–218.25 (123 rows) the same way.
- Pass (a) fidelity: 214.3–214.4 re-cut after the morphology (qs.w=k opens a nominal clause); the n sḏm=f / n
  sḏm.n=f negations checked (215.17–215.18 past, against the TLA's future; 209.1, 210.8, 211.2, 215.21–215.22
  "cannot"); 213.4 suffix moved to the second sceptre; 215.25 `⟨ ⟩` removed from the Hebrew; brackets of 212.2–212.6
  checked word by word.
- Pass (b) consistency: dr `סילק` (215.8–215.9 had `הסיר`); rmn `כתף` (214.10 had `זרועות`); mḫnt `קלסתר` (215.27 had
  `פנים`, ḥr's word); bꜣ (verb) `היה לבָּא` in 214.13, 215.14–215.15, 218.6; `צוּוָּה` plene; `דמות` removed (gated).
- Pass (c) Hebrew: the generated `translation-UN3.rtl.md` read through; punctuation at line ends (215.32, 214.3) fixed.
- `build UN3`: 184 lines, 1 footnote. `check_bible_quotes.py` on the three files: 0 problems. `verify UN3 --strict`:
  0 problems, 0 repeated-line differences.

### The text on its own terms
- **Food is life after death** (204–212): the dead king's first fear is hunger and thirst (204.5); the spells make
  him a member of Re's kitchen staff (205.2–205.4), give him five meals a day split between sky and earth (205.8–205.9),
  and let him eat "of what you two eat" with the sun and the moon (210.10–210.13).
- **The upside-down world**: excrement and urine are the king's "abomination" (210.6–210.8) – the oldest form of the
  Book of the Dead's spells against eating dung in the netherworld; Pepi's copy goes further: hunger and thirst
  themselves are abominations he will not "eat" (211.1–211.2).
- **Lack as a rival eater** (209.1–209.2): when Lack thrives the king starves, when the king thrives Lack starves.
- **Death denied by grammar** (213.1): *n šmi̯.n=k js mt.tj* negates "dead", not "went": the king did go, alive.
- **The body made divine** (213.5–213.6, 215.26–215.34): limb by limb the king becomes Atum, his face Anubis (the
  embalmer's mask), his ears and eyes Atum's twins, his arms and legs the four sons of Horus; each line closes with the
  refrain "imperishable" – the circumpolar stars that never set (214.11, 215.6).
- **A script with stage directions**: "words to be said four times" (214.1), "and vice versa" (215.12, followed by
  the reversed line 215.13), and "So-and-so" (*mn*, 215.23) left by the copyist in place of the king's name – the
  spells were copied from a papyrus book onto the wall.
- **The king above the gods' quarrel** (215.7–215.15): he heals Horus's eye with spittle and Seth's testicles,
  is born as Horus and conceived as Seth, and neither Osiris nor Horus has power over him (215.17–215.22).
- **Stars that vanish and return** (216.5–216.7): Orion (Osiris) and Sothis (Isis) are "encircled by the Duat" for
  their seventy days of invisibility and return at dawn; the king is the third in the line.
- **A royal herald to the four quarters** (217): Seth and Nephthys to the south, Osiris and Isis to the north, Thoth
  to the west, Horus to the east – "here comes Unas … whom he wishes to live will live, whom he wishes to die will die".
- **The new king confronts Osiris** (218): "your time is no more there" (218.11), "who surpasses you … roars more than
  you" (218.8–218.10); the brothers who did not weep for him (218.12) and the two sisters who gathered him (218.13–218.14).
- **Puns as theology**: *snṯr* "incense" / *nṯr* "god" (210.4); *ꜣḫ.t* "horizon" / *ꜣḫ* "akh" (217.4); *ḏ.t* "body" /
  *ḏ.t* "eternity" (217.34); *tm* "complete" / Atum (215.25); *Msḫꜣ.t-kꜣw* / *sḫꜣ* "remember" (216.3–216.4); *nrw*
  "terror" / *nrj* "guard" (205.14–205.15).

### Key parallels
- 217.7, 217.15 ↔ Dan 5:19 `דִּי הֲוָא צָבֵא הֲוָה קָטֵל וְדִי הֲוָה צָבֵא הֲוָה מַחֵא` [equivalent]: the formula of
  royal power over life and death; 1 Sam 2:6 `יְהוָה מֵמִית וּמְחַיֶּה` [divergence] (God's alone).
- 213.1 ↔ Gen 5:24, 2 Kgs 2:11 [divergence]: a going-away that is not death – but Unas did die.
- 210.6 ↔ Deut 14:3 `לֹא תֹאכַל כָּל תּוֹעֵבָה` [equivalent] (bw.t as a food taboo) and 2 Kgs 18:27 (dung and urine as
  the extremity of degradation) [equivalent].
- 211.6 ↔ Job 3:3 `וְהַלַּיְלָה אָמַר הֹרָה גָבֶר` [equivalent]: conceived and born by night.
- 215.18, 217.23 ↔ Jer 17:10 `חֹקֵר לֵב` [divergence / equivalent]: the examiner of hearts – the king is exempt, then
  becomes the examiner.
- 215.32–215.33 ↔ Gen 28:12 `עֹלִים וְיֹרְדִים בּוֹ` [divergence]; 214.12 ↔ Isa 14:13 `הַשָּׁמַיִם אֶעֱלֶה` [divergence].
- 204.5 ↔ Isa 49:10 `לֹא יִרְעָבוּ וְלֹא יִצְמָאוּ` [equivalent]; 211.3 ↔ Ps 136:25 [divergence]; 210.11 ↔ Ps 78:25
  [divergence]; 205.2 `מֶלְצַר` ↔ Dan 1:11 [equivalent]; 216.5 Orion ↔ Amos 5:8 `כְסִיל` [equivalent].

### Lines shared with other texts
None in this range is shared with an earlier file of the corpus. Inside UN3: PT 217's four strophes and PT 218's
refrain copied byte for byte (verify: 0 differences); 215.2 = 217.33 (minus the vocative); 215.18 = 215.20. For later
keys: 215.2 / 217.33 ≈ UN4 222.43 (`data` shows the similarity), 216.1 ≈ UN4 220.2–220.3 (`באתי אלייך, X` → `בא הוא
אלייך, X`), 216.9 ≈ UN4 222.42.

### Proposals for the shared renderings
(for renderings §13.6; Hebrew as in the file)
1. **Formulas**: `hꜣ NN` = `הוֹי NN` (confirmed); `Wnjs pn` = `אונאס זה`; `ḏd-mdw zp 4` after a sentence = `דברים לאמר,
   ארבע פעמים.`; `ṯꜣz-pẖr` = `ולהפך` (NU1); the particle `r=f` / `jr=k` / `jr=ṯn` = `אפוא`; `jyi̯ r=f NN pn` = `בָּא אפוא
   אונאס זה` (vocalized: see Problems); `jyi̯ n=k NN pn` = `בא אליך אונאס זה`; `jwi̯.n=(j) ḫr=ṯ X` = `באתי אלייך, X`;
   `m rn=f (n) X` = `בשמו "X"`; `X m Y` in the limb litanies = `X – Y` (`זרועך – אָתוּם`); `ꜣḫ j:ḫm-sk` = `אָח
   בלתי־כלה`; `nb ḫr.wt s.t wꜣḏ 4` = `אדון צורכי מקום ארבעת עמודי־הפפירוס`; `jꜣq jr=k` = `עלה אפוא`; `sjꜥ n=k sw šni̯
   n=k sw m-ẖnw ꜥ.wj=k` = `העלה אותו אליך, הקף אותו אליך בתוך זרועותיך`; `n sḏm=f` past `לא` + past, `n sḏm.n=f`
   `לא` + future / `אין … ` ("cannot") – the TLA's future readings of n sḏm=f noted, not followed.
2. **Nsw-bjtj** (not in UN3): `מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן` – the corpus's form (HC, WE: `מלך־הדרום־והצפון`), not
   §13.3's `מלך־הדבורה`?; nsw alone `מֶלֶךְ`.
3. **Offering vocabulary**: as in Decisions (tʾ `לחם`, ḥnq.t `שֵׁכָר`, jt `שעורה`, bd.t `כוסמת`, (j)ḫ.t `מנה`, jš.tt
   `ארוחה`, ꜥꜣb.t `מנחה`, ḥtp.t `קורבנות`, ḏfꜣw `מזון`, jrp `יין`, mw `מים`, qbḥ(.w) `מי־הצינה`, wdpw `מֶלְצַר`, sšm `טבח`,
   ḫnḏ `שוק`, ḏꜣ.t `חופן`, snṯr `הקטיר` / (noun) `קטורת`); the list line `<item> <count>!` / `שוק עם …! ארבעה חופני מים!`.
4. **Abominations**: bw.t `תועבה`, bwi̯ `תיעב`, ḥs `צואה`, wzš.t `שתן`, twri̯ `נִזָּר מ־`.
5. **Key terms**: bꜣ (verb) `היה לבָּא`; ꜣḫ (verb) `היה לאָח`; jp (hearts) `פקד`; ṯnj `ייחד`; ḥr.t `המרום`; snkw `אפלה`;
   wpw.t `שליחות` / `שליחויות`; jnw `צירים`; ḥwwtj `רצים`; jy `מום`, nkn `חבלה`; mḫnt `קלסתר`; rmn `כתף`; zꜣ.tj Jtm
   `התאומים של אָתוּם`; mn `פלוני`; the four quarters `המערביים / המזרחיים / הדרומיים / הצפוניים`, `אֵלֵי הדרום / הצפון /
   המערב`, `הבָּאִים המזרחיים`.
6. **Names**: those listed under Decisions (חָא, פֶתֶכְתָא, כֶּנְזֶת, מוּת ★, שׁוּסֶת, נֶחְבּוּת, וֶפִּיוּ, יָאת,
   אֵל־השחר, חֶנְתִּי־אִרְתִּי, חוֹרוּס־שבדּוּאַת, סֹפְּדוּ, the four sons, מֶסְקְטֶת, חֶנוּ, ההֶנְמֶמֶת, החֻוֶרֶר?,
   חַעְפִּי, האנפה הגדולה). **`מוּת` (the goddess) should join the always-vocalized list** (§5.3 / TRAPS): unvocalized it
   reads "die".

### Lessons for the guidelines
- A verifier licence that joins the edge tokens of neighbouring lines can license a trap falsely: `j:ḫm sk` + next
  line's `ḏbꜣ(.w)` made "skḏbꜣ.w", which matched the ba (`bꜣ.`) and demanded `בָּא` in 217.21 (a line without a ba).
  The PT refrain `jyi̯ r=f` was therefore vocalized `בָּא` in all its copies, to keep them identical. Worth a look in
  `license_text` (the join should not cross a word boundary inside a token such as `ḏbꜣ`).
- In the Pyramid Texts the AED's cut sometimes moves a word across Allen's line boundary (217.11 / 217.12 `jm`;
  217.32 vs Allen 160a; 218.6 / 218.7 `jyi̯`): keep the AED's cut in the Hebrew, and note Allen's in the הערות.

## Parallels index
(generated into `../parallels-index.md` by `../build_parallels_index.py` from the הקבלה bullets)
