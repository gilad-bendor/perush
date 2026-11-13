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

## UN4 (PT 219–224)

Round 8 run 1, translator 2 (2026-11-13). Files: `annotated-UN4.rtl.md`, `translation--intro-UN4.rtl.md`,
`translation-UN4.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The end of the burial chamber's **south wall** (PT 219, the litany, 219.1–219.110) and its **east wall** (PT 220–221,
the crown spells; PT 222, the king rising and setting with the sun; PT 223, "stand, sit down to a thousand of bread";
PT 224): 209 rows (`219.1` … `224.20`). Unas's own wall for every row except PT 224 (20 rows), which the TLA did not
record from Unas's wall (it is there: B/E) and which is translated from Teti's copy (`{טטי}`, Teti's name kept).
Preservation: Unas's wall nearly intact – restorations in 219.70, 219.74, 219.77, 221.7, 221.9–221.11, 222.1, 222.3–222.8,
222.23, 222.25, 222.27. The text in a sentence: the dead king is presented to god after god as Osiris, "as he lives,
this Unas lives", then made identical with Osiris in body, flesh and bones; he is crowned before the Red Crown, rises
and sets with the sun into Atum's arms, and is called to stand up, sit down and eat.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN4` (TLA lemmas, morphology, German glosses); Allen 2013's lines
  (printed by `data` / `allen`; a check only, never copied).
- Rank 3: the TLA's German (`tr UN4`), read after each section was drafted (219; 220–221; 222–224). Allen 2005/2015 and
  Faulkner 1969 only from memory, in a few words, never quoted.
- Precedents: `lex` / `grep --all` for every recurring lemma (UN3, PT486, PT571, PT600, the Book of the Dead keys, HC,
  AM, SI, TB, WE, MR).
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 2:7, 2:23, 5:24, 9:2, 12:1, 15:4,
  27:19, 31:7; Num 28:2; Deut 11:25; 2 Sam 1:10; 2 Kgs 2:11; Isa 52:2; Ezek 37:6; Amos 5:8; Ps 2:7, 2:9, 21:4, 24:7,
  118:17, 132:18, 139:13; Gen 49:10; Job 3:3; Ruth 1:16 (printed and not used: Gen 2:5, Ps 24:9, 1 Kgs 22:4).

### Decisions
- **The litany frame (renderings §13.4.6), fixed on 219.1–219.4 and copied byte for byte** (only the god's name and
  the kinship word change, as in the Egyptian):
  `אָתוּם, בנך הוא זה, אוֹסִירִיס, אשר נתת לו *להחלים* ולחיות:` /
  `חי הוא – חי אונאס זה; לא מת הוא – לא מת אונאס זה;` /
  `לא כָּלָה הוא – לא כָּלָה אונאס זה; לא *השכים*? הוא – לא *השכים*? אונאס זה;` /
  `*משכים*? הוא – *משכים*? אונאס זה.` Variants: `אחיך` (Isis, Seth, Nephthys, Thoth), `אביך` (Horus); the Enneads
  `התשיעייה הגדולה / הקטנה, אוֹסִירִיס הוא זה, אשר נתתם לו …` (the Egyptian changes the order); Seth and Thoth passive
  `אשר ניתן לו *להחלים* ולחיות – יעניש הוא אותך:`. The refrain appears 24 times; its deviations follow the wall:
  219.11 (negation omitted by the carver), 219.42–219.43 and 219.46–219.47 (`Wnjs` without `pn`, the negation at the
  line end: the AED cut), 219.70, 219.74, 219.77 (restorations). The dash keeps the bare juxtaposition `ꜥnḫ=f ꜥnḫ NN`
  ("as he lives, NN lives") without adding words; "he" is Osiris (note at 219.2).
- **rḏj** = `נתן` in both its senses: "give" (221.3–221.8, 223.10) and "cause, let" + sḏm=f = `נתן ל־` + infinitive
  (219.1, 222.12–222.13; Gen 31:7 `וְלֹא נְתָנוֹ אֱלֹהִים לְהָרַע`). The draft's `הניח לו` (TB 5,3) was dropped: its plural
  `הנחתם` trips the `חתם` loanword gate, and `נתן` is the verb's own sense.
- **n sḏm=f** past (`לא מת`, `לא כָּלָה`), as UN3 decided; the TLA's future readings noted, not followed.
- **nhp** (tla0) = `*השכים*?` / `*משכים*?` after HC 21's verb nhp `השכים` (and nhpw "dawn"); the TLA guesses
  "lebensvoll sein"; the later pyramids have wḏꜥ "judge" here (noted at 219.3).
- **sḏb** (tla150440, only in this litany) = `*להחלים*` (italic: "revive, recover"; TLA "aufleben").
- **ski̯** = `כָּלָה`, vocalized (unvocalized `כלה` reads "bride").
- **The crown spells**: n.t `הכתר־האדום` (NU7), Nzr.t `נֶסֶרֶת` (NU1, NU3), wr.t `הגדולה`, wr.t-ḥkꜣ.w `גדולת־הקסמים`
  (after wr-ḥkꜣ.w `גדול־הקסמים`, NU3), jn `אִינִי`; ḥtp ḥr `נח על` (ḥtp = `נח`; the crown "rests" on the king and is
  content with him); ꜥb.w "purity" (tla36740) `זוך` (NU7), ꜥb.w "impurity" (tla36300) `טומאה` (NU3 105.4 has `עבֵרה`
  for a moral wrong: a sense split); šꜥ.t `בעתה` (PT486), snḏ `יראה`, kj.t `הוקרה`, mrw.t `אהבה`; ꜥbꜣ `שרביט` (UN3),
  sḫm (sceptre) `שרביט־הסֶחֶם` (NU6), ds `מאכלת` (NU3), rwḏ `איתן` (PT600), zꜣ "protection" `חסות` (NU9), sẖkr `קישט`
  (SI).
- **Interjections, one each**: hꜣ `הוֹי` (formula), j `הוֹ` (UN3), **hj `הֵי`** (221.1–221.9, new), **jh `אִיהּ`** (223.2, new).
- **PT 222**: ḫpr `תהיה` (future of `נהיה`), qꜣj `התרומם`, mꜣꜣ `חזה`, ꜥḥꜥ `עמד` (SI, also 223.3 `עמוד`), nḏr `לכד` (NU),
  šzp `קיבל`, jꜣq `עלה` (UN3; the TLA's "beherrschen" in 222.13 kept in the note: `לעלות על` holds both), ḥtm `השלים`
  (219.81, 222.17, 223.5; NU10 `מושלם`), ꜥw.t `מקל־הרועה`, ḫsf `יריב`, ḥzj `שיבח` (WE), šdj `חילץ` (UN3), fḫ `ניתק`,
  jꜣb `נמנע`, sfḫ `התיר` (SI), wḏꜥ `הפריד` (PT571, NU5), wbn `זרח`, prj `יצא`, hꜣj `ירד`, wpj `פתח` (also the ritual
  "opening of the mouth", 219.50), wn `פתוח` (NU3: a split with wpj in one Hebrew root; see Open decisions), šnj
  `הקיף` / `מוקף`, ẖnw-ꜥ.w `חיבוק`, snkwj `אפל` (snkw `אפלה`, UN3), bꜣ.tj (stative) `בעל־בָּא` (NU3, NU4), sḫm.tj
  `שליט`, jmj-rd `מעכב`, qbb `הצטנן` (UN3), jwr `הוֹרָה` (UN3), Jmn.tt `המערב`, ḥqꜣ-ꜥnḏ `חֶקָא־עַנְג׳`.
- **PT 223–224**: ḫꜣ m tʾ `אלף לחם`, ꜣšr.t `צלי`, šbtjw `שתי צלעות`, pr nm.t `בית־ספסל־הטבח` (AM `ספסל־הטבח`),
  tʾ-jtḥ `לחם־אִתֶח`, wsḫ.t `אולם` (BD), ḥtp-nṯr `קורבן־האל` (WE), ḥw.t-sr `בית־השר` (NU), mz `קרב` (PT600), ḥrj
  `התרחק` (PT600), jz `קבר` (AM), mḏr `נטה`, jp "assign" `מנה` (UN3's jp "examine hearts" `פקד`: a sense split), nḫḫ
  `*יאריך*`, ꜥꜣ "helper" `עוזר`; nḏ "protect" `הגן` (PT486 / PT600 have `שמר`, but zꜣw "beware" `הישמר` (AM) stands in the
  same line 224.4); wdn `הקרבה`, sꜥḥ (noun) `הדר` (HC 91), ḫr.t `מחיה` (AM), nš `*גירש*` (MR E46; the TLA leaves 224.3
  untranslated), ḏr "limit" `קץ` (SI; `גבול` is tꜣš's), wnḫ `הלביש` (NU4), jꜣ.t `תל` (HC, NU1), wḏ mdw n X `תצווה דבר
  ל־X` (UN3 213.3), šmi̯ n=k `לך לך` (the ethical dative, as in Hebrew), ḥbs `בגד` (licensed), bꜣ "leopard skin"
  `פרוות־נמר` (`עור` is gated to jnm / dḥr), ḫsdḏ `סינר־*תן*`, wḫꜣ.t `סנדל`, rḫs `שחט` (CH), jḥ `בקר` (TB), md(w)
  "staff" `מטה` (NU7), nḥb.t `שרביט־הנֶחֶבֶּת` (the TLA: lotus-bud sceptre), ḥtp-ḏj-nswt `קורבן שהמלך נותן` (§13.3),
  ḥtp-ḏj-Gbb `קורבן שגֶּבּ נותן`.
- **Names fixed here** (first occurrence vocalized): Ḏdj.t `גֶ׳דִית`; Ꜥnḏ.t `עַנְגֶ׳ת`, Ꜥnḏtj `עַנְגֶ׳תִי`; Srq.t `סֶרְקֶת`
  (§13.2); ḥḏ-pꜣꜥr `חֶג׳־פָּאעַר`; Sꜣḥ `סָאח` (§13.3); Dp `דֶּפּ`; Wnw `וֶנוּ` (Hermopolis; `חֶמְנוּ` is Ḫmnw); nʾ.t-š.w
  `עיר־האגמים`; Jḫ.t-wr.t `אִיחֶת־וֶרֶת`, Jḫ.t-wt.t `אִיחֶת־וּטֶת`; Ndj `נֶדִי` (NU5 64L.24 wrote `נֶדוּ`); Pndn `פֶּנְדֶן`,
  Dndn `דֶּנְדֶן`; smꜣ-wr `הראם־הגדול` (NU1); zḫn-wr `אופף־גדול` (NU9); spd-jbḥ.w `חד־השיניים`; Nbw.t `נוּבֶּת`;
  Ḥr.w-ḥwntj `חוֹרוּס־בעל־שני־האישונים`; Rpw.t `רֶפּוּת`; Nj.w (Nun) `נוּן`; Wꜣḏ-ꜥn `וָאגֶ׳־עַן`; Ttj `טֶטִי`.
- **Rejected**: `הניח` for rḏj (gate; see above); `תיבה` for dbn(j) (219.67: `תֵּבָה` is ḏbꜣ.t's; dbn "go round" =
  `סובב` gives `המסובב?`); `עור־נמר` (gate); `קום` for ꜥḥꜥ (one lemma = `עמד`; Gen 27:19 and Isa 52:2 in the apparatus);
  `נזר` for nzr.t (a false friend, noted at 220.2); `גבול` for ḏr (gated).

### Open decisions for the user
- **wn and wpj both `פתח`** (220.1 `פתוחות`, 219.50 / 222.30 `נפתח`, `תפתח`): Hebrew has one verb of opening; the
  alternatives (`פצה` for the mouth, `פרץ` for the way) each fit only one context.
- **nhp `*השכים*?`** (36 times in the refrain): a guess from HC 21; the TLA's "lebensvoll sein" or a neutral
  transliteration are the alternatives.
- **ꜥb.w "impurity" `טומאה`** (222.25, 222.32) against NU3 105.4's `עבֵרה` for the same TLA lemma: a sense split.
- **nḏ `הגן`** (223.7, 224.4, 224.18) against PT486 / PT600's `שמר`: chosen because zꜣw `הישמר` stands in the same line.
- **ꜥḥꜥ `עמד` in "stand up, sit down"** (223.3, 223.12): faithful to the lemma, though Hebrew says `קום`.

### Progress log
- Drafted PT 219 (110 rows; the refrain copies generated from one source with a script, so that every copy is byte for
  byte the first), saved, `fill` + `verify` (0 problems after the `הנחתם` gate hit: the frame verb changed to `נתן`);
  then the TLA's German read and the entries completed (219.55 `אשר מתמיד` and 219.102 past `ניתק` revised after it).
- Drafted PT 220–221 (22 rows), the same way; then PT 222–224 (77 rows; `עור־נמר` caught by the gate → `פרוות־נמר`);
  the TLA's German read: 222.15 re-read (the anticipatory pronoun: "he falls – his opponent"), 222.21–222.22 re-cut
  ("how flourishing is he whom Isis praised").
- Pass (a) fidelity: every negation and tense against the morphology (n sḏm=f past; 222.38 passives; 223.6 stative 2sg
  `באת`); brackets checked word by word (222.6, 222.8: the first sign restored → no bracket; 221.9 the suffix `=[ṯ]`
  restored → no bracket; 221.11 `אִיחֶת־[וּטֶת]`).
- Pass (b) consistency: the refrain (24 copies) and frame (13 copies) identical except the wall's own deviations;
  220.10 = 221.12 (`המוקף בחסות עינו`); 222.42–222.44 against UN3 216.9, 217.33, 217.34; 222.38 against UN3 215.10;
  224.16–224.19 = 224.2–224.5; every new Hebrew string grepped (`lex`, `grep --all`).
- Pass (c) Hebrew: the generated `translation-UN4.rtl.md` read through; 222.21 punctuation fixed.
- `build UN4`: 209 lines, 2 footnotes (219.2, 223.1). `check_bible_quotes.py` on the three files: 0 problems.
  `verify UN4 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **Life by kinship** (219.1–219.48): the dead king is not argued alive; he is introduced to each god as a relative –
  son of Atum, Shu, Tefnut, Geb, Nut; brother of Isis, Seth, Nephthys, Thoth; father of Horus – and what the family did
  for Osiris it must do for him.
- **"As he lives, this Unas lives"** (219.2, 24 times): the king's fate is welded to Osiris's by bare juxtaposition; the
  litany ends in identity (219.106–219.110: body, flesh, bones, going).
- **The murderer threatened** (219.25, 219.33): to Seth (and Thoth) the formula turns passive and adds "he will punish
  you" – Osiris's revival is Seth's punishment.
- **Osiris everywhere** (219.55–219.100): eleven names "who is in" a place – Heliopolis, Busiris, Orion, Buto, the two
  Hermopolises – the dead god buried in every shrine of Egypt; Orion "your season in the sky, your season on earth"
  (219.75) is the star's seventy days of invisibility.
- **Food as the eye of Horus** (219.101–219.102, 223.10): the god lives by the eye his son tore out for him.
- **Ritual as birth** (219.49–219.51): the mother wipes the mouth, the son opens it, the gods count the limbs.
- **The crown is a goddess** (220–221): the king comes "pure and fearful" before her and asks for her terror, fear,
  respect and love; she bore him and he bore her (221.9).
- **The sun's cycle as the king's life** (222.33–222.36): going down with Nephthys into darkness, rising with Isis in
  the morning bark – the two sisters as night and day.
- **Purity as a pun** (222.25 / 222.40): ꜥb.w "impurity" is shed, ꜥb.w "purity" received – one written word.
- **Coolness is peace** (222.42): the king "cools down" in his father's arms; heat is danger and anger.
- **The meal of the risen dead** (223): "stand, sit down to a thousand of bread" – the offering formula of every tomb
  turned into a call; "do not keep away from the tomb" (223.9) – the ka must come home to eat.
- **The priest's costume** (224.11–224.12): the leopard skin (bꜣ, a pun on the ba) and the jackal kilt of Anubis.

### Key parallels
- 219.2 ↔ Ps 118:17 `לֹא-אָמוּת כִּי-אֶחְיֶה` [equivalent]: the same pair, "lives / did not die"; Gen 5:24, 2 Kgs 2:11
  [divergence]: Enoch and Elijah did not die, Unas did.
- 219.1, 219.49 ↔ Ps 2:7 `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` [divergence / equivalent]: the divine parent's
  declaration of the royal son ("born to me").
- 219.106 ↔ Gen 2:23 `עֶצֶם מֵעֲצָמַי וּבָשָׂר מִבְּשָׂרִי` [equivalent]: identity of body (bone and flesh).
- 219.109 ↔ Ruth 1:16 `כִּי אֶל אֲשֶׁר תֵּלְכִי אֵלֵךְ` [equivalent]: a shared fate as going together.
- 221.3 ↔ Deut 11:25 `פַּחְדְּכֶם וּמוֹרַאֲכֶם יִתֵּן` [equivalent]: a deity "gives" the terror of its chosen.
- 220.1 ↔ Ps 24:7 `שְׂאוּ שְׁעָרִים` [divergence]: gates opened to a king.
- 223.3 ↔ Gen 27:19 `קוּם נָא שְׁבָה וְאָכְלָה מִצֵּידִי` and Isa 52:2 `הִתְנַעֲרִי מֵעָפָר קוּמִי שְּׁבִי` [equivalent].
- 224.7 ↔ Gen 12:1 `לֶךְ לְךָ` [equivalent]: the same ethical-dative imperative (`šmi̯ n=k`), natural in both languages.
- 222.14 ↔ Ps 2:9 [equivalent] (the shepherd-king's staff); 219.108 ↔ Ezek 37:6 [divergence]; 222.38 ↔ Job 3:3.
- **Not found**: "not yet" (n sḏm.t=f, Gen 2:5) does not occur in PT 219–224; the brief's "Nun" at 219.49 is Nut in
  both the AED and Allen (the feminine suffix decides); Nun does occur, at 222.26 ("the seats of Nun").

### Lines shared with other texts
- From UN3, copied: 222.42 ≈ UN3 216.9 (second person), 222.43 = UN3 217.33 with `את אונאס זה` for `אותו`, 222.44 =
  UN3 217.34, 222.38 ≈ UN3 215.10, 220.2–220.3 ≈ UN3 216.1 (`באתי אלייך` → `בא הוא אלייך`), 224.7 ≈ UN3 213.3
  (`תצווה דבר ל־`).
- Inside UN4: the litany frame and refrain (above); 220.9 = second half of 220.3; 220.10 ≈ 221.12; 219.81 = 219.86 =
  219.91 = 219.96 (minus the first word where the AED cut moves it); 222.18 ≈ 222.23, 222.19 ≈ 222.24, 222.2 ≈ 222.27 ≈
  222.41; 223.2 ≈ 224.6; 224.2–224.5 = 224.16–224.19.

### Proposals for the shared renderings
1. **The litany** (§13.4.6): the four lines above as the fixed frame and refrain (for the verifier).
2. **rḏj + sḏm=f** = `נתן ל־` + infinitive (`נתת לו להחלים`, `תתן לאונאס זה ללכוד`); rḏj "give" `נתן`.
3. **Interjections**: hj `הֵי` (vocalized), jh `אִיהּ`, beside hꜣ `הוֹי` and j `הוֹ`.
4. **The crown**: n.t `הכתר־האדום`, wr.t-ḥkꜣ.w `גדולת־הקסמים`, jn `אִינִי`, Nzr.t `נֶסֶרֶת`; Jḫ.t-wr.t / Jḫ.t-wt.t
   `אִיחֶת־וֶרֶת` / `אִיחֶת־וּטֶת`.
5. **Purity pair**: ꜥb.w (tla36740) `זוך`, ꜥb.w (tla36300) `טומאה` in ritual contexts.
6. **Statives of ba and power**: bꜣ.tj `בעל־בָּא`, sḫm.tj `שליט` (UN3's `היה לבָּא` for the sḏm=f).
7. **Names**: as listed under Decisions; Ndj `נֶדִי` or NU5's `נֶדוּ` – one form for the corpus (the lead's call).
8. **Traps**: `כָּלָה` (ski̯) always vocalized ("bride"); nzr.t ≠ `נֵזֶר` (false friend); bꜣ "leopard skin" ≠ the ba.
9. **Gate note**: `הנחתם` ("you let") trips the `חתם` loanword gate – worth an exemption for the root נוח
   (`הנחתם`, `הנחתי`?) if a later text needs it; here avoided by `נתן`.

### Lessons for the guidelines
- **Generate long litanies from one source**: writing the refrain once and expanding its 68 copies by script (with the
  wall's deviations as named variants) made byte-identity automatic and left the translator's attention for the 41
  lines that differ.
- **A coordinator's "look for" can name a word the text does not have** ("Nun" at 219.49, where the text has Nut): read
  the transliteration and the suffixes first (guidelines §5.2 ★, again).
- **A gate on a loanword root can hit an inflected Hebrew verb** (`הנחתם` "you let" = ה+נחתם): test gates on second-
  person plural verb forms too.

## UN5 (PT 226–243, 199, 32, 23, 25, 200, 244–246)

Round 8 run 1, translator 3 (2026-11-13). Files: `annotated-UN5.rtl.md`, `translation--intro-UN5.rtl.md`,
`translation-UN5.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The burial chamber's **west gable** (the serpent spells PT 226–243, 66 rows) and the **passage** to the antechamber
(PT 199; the 4th copy of PT 32, the 2nd of PT 23–24, the 3rd of PT 25; PT 200; PT 244–246: 58 rows): 124 rows, all from
Unas's own wall (W). Preservation: intact except PT 199.1–199.3 (mostly restored) and 244.1 (`[Ḥr,w] [rwḏ.t]`). The text
in a sentence: short commands, names and sound-plays that make the snakes and scorpions fall, slither off, bite each
other and be swallowed by earth, crown and goddess; then a piece of the offering ritual (offering reversion, libation,
seizing the king's slanderers, censing, breaking the red pots) and the king's ascent as the lone star on Nut's
shoulder and a ram standing at the head of the gods.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN5` (TLA lemmas, morphology, German glosses); Allen 2013's lines (a
  check only, never copied).
- Rank 3: the TLA's German (`tr UN5`), read after drafting 226–243 and after drafting the passage. Allen 2005/2015,
  Faulkner 1969 and Steiner 2011 from memory, never quoted; Steiner only for the general claim (no single reading cited).
- Precedents: `lex` / `grep --all` for every recurring lemma (UN3, UN4, PT486, PT571, PT600, the Book of the Dead keys,
  HC, AM, TB, WE, SI, MK).
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 3:1, 3:14, 3:15, 8:21, 22:13, 49:17;
  Num 6:26, 21:6, 21:9; Deut 8:15; Isa 14:12, 14:13, 65:25; Jer 19:10; Amos 5:19; Mic 7:17; Ps 2:9, 24:7, 58:6, 91:13,
  140:4; Job 21:5, 29:9, 40:31; Eccl 10:11; Ex 30:34 (printed, not used: Ps 58:5, Jer 8:17, Deut 32:24, Lev 1:9, 2:1,
  Num 5:17, Isa 53:7).

### Decisions
- **The serpent words, each by its own sense** (renderings §13.5): ḥfꜣw (tla104390) `נחש` – the only serpent lemma here
  that the gate licenses (226.5, 242.2); nꜥw (tla80510 god / tla852793) `המתפתל`, nꜥ.t `המתפתלת` ("the Coiler"); hjw
  (tla97860, "evil snake") `הִיוּ` transliterated and **always vocalized** (unvocalized "היו" = "were"); kꜣ "male snake"
  `הזכר` (227.1; kꜣ "bull" `שור`, 238.3); ḏ.t "cobra (the rearing one)" `המזדקפת`; srq.t `עקרב`; ḫsr-nṯr `מגורש־האל`;
  zpꜣ `נַדָּל`; names transliterated: hpnw `הֶפֶּנוּ`, jkn-hy `אִיכֶּן־הִי`, Ḥjfg.t `חִיפְגֶת`; epithets translated:
  jm(,j)-nꜣw.t≡f `אשר־בשיחו`, jm(,j)-ṯpḥ.t≡f `אשר־במערתו`, ḥkn.t-m-ḥr.wj≡s-snwj `המריעה־בשני־פניה?`, jšw-jnb
  `רוק־החומה`, qꜣꜥw-ḏb.t `קיא־הַלְּבֵנָה`. `שרף` nowhere.
- **The serpent verbs**: pzḥ `נשך` – never in the bare form `נשך` (the `נֶשֶׁךְ` gate blocks it, see Problems): participle
  `הנושך`, passive `ננשך`, imperative `נשוך`, 230.7 `לא נְשָׁכוֹ אונאס` (the suffixed form of Amos 5:19); zbn "slither"
  `זחל` (and the noun zbn "path" `נתיב`, 240.3, pun noted); ḫr "fall" `נפל`, imperative `נְפוֹל`; the refrain j:ḫr zbn
  `נְפוֹל! זְחַל!` (229.3 = 233.3, for UN8 277.2, 289.2); sḏr `שכב` (TB precedent; see Open decisions); pnꜥ `התהפך`;
  ḫbḫ `השתחל`; šnj "encircle" (tla155450) `הוקף` vs šnj "conjure" (tla854559) `הושבע` (the pun noted; `לחש` avoided
  because rʾ "spell" is `לחש` in the BD keys); nsb `לחך` (NU); ꜥm `בלע`; ṯꜣz "tie" `קשר`, ṯꜣz "knot" `קשר`, ṯꜣz
  "vertebra" `חוליה`, bqsw `שדרה`.
- **The three spit words**: tf "saliva" `ריר` (237.1), jšw "spittle" `רוק` (241.1), ṯf "spit out" `פלוט` (243.4) – UN3's
  psg keeps `ירק`.
- **ḫm "not know"** = the root נכר/הכיר (AM 9.11, 19.13 `מכירים`): 232.3 `אל תתנכר לי`, 240.3 `לא הכיר אונאס, לא ידע
  אונאס` (rḫ `ידע`).
- **Other terms**: ꜥn.t `ציפורן` (NU8); ẖnnw `מהומה` (AM); ḏr.tj `שתי הדַּיּוֹת` (NU1); bꜣbꜣ `מאורה` (NU5); šp "blind"
  `סומא` (`עִוֵּר` is kꜣmn's); rḫ.wt `העם` (AM, SI); jwntjw `בני־הקשת`; sḏ.t `שלהבת` (NU1); tkꜣ `אבוקה` (NU9); ꜥḫm
  `כיבה` (NU); qs "bone" `עצם` / qs "harpoon point" `חוד־צלצל` / qs "harpoon" `שופד?` (pun noted); jtj "sovereign" `ריבון`
  (WE); jꜣj `המהולל`; šzp (tla0) `*טפחים*?` (TLA "Augenblick").
- **The passage – the repeated ritual spells (first copies in UN1, not yet drafted; fixed here, see Proposals)**: qbḥw
  `מי־הצינה`; rḏw `הפרשה` (NU3, NU5, NU10); prj-ḫrw `הוּצָא לך (קורבן) הקול`; wḏb ḥtp-nṯr `[הפניית] קורבן־האל`; msḏj
  `שנא` (AM); sfḫḫ (tla852044) `הרפה` (UN4's sfḫ = `התיר`); zꜣṯ `ניסוך`; zj ... ḥnꜥ kꜣ=f `הלך … עם הכָּא שלו`;
  ḥtm "provide" `השלים` (UN4); pḏpḏ `דבק`; sṯ `ריח` (TB; MK E134 has `בושם` for the same lemma: a split for the lead);
  bdd `בושם` (not `ניחוח`, so as not to make `רֵיחַ נִיחֹחַ`: the parallel stays in the apparatus); snṯr `קטורת`; mnwr
  `מֶנְוֶר` (transliterated, kept apart from snṯr); pꜣḏ `כדור` (WE); jnḏ-ḥr `שלום לפניך` (NU4).
- **The ascent**: wꜥtj `היחיד`; wpj s.t (tla45640) `פלח את מקומו` (NU4 `פלוחים`); ḥri̯ `רחוק` (UN4 `התרחק`); nḫj (tla86930)
  `התמיד` (UN4's nḫḫ = `*יאריך*`); tm "cease" `תם`; ski̯ `כָּלָה`; bꜣ "ram" (246.2) `בָּא` kept, the pun explained; zj
  "ram" `איל`, zj.t `כבשה`, wꜣp.t `רחל`; smꜣ `שור־בר` (NU5); ḫsbḏ jr.tj `ספיר־העיניים`; jtr.tj `שני ההיכלים`; sjn
  `מהיריו` (`רצים` is ḥwwtj's); ḏsr rmn `מרים־הכתף` (rmn = `כתף`, UN3); tp-rd.wj `לרגלי`; zn `פרץ` (NU3); fꜣi̯ ḥr
  `נשא פנים`; sḏb `תקלה` (NU5); dšr.t `כד אדום`, sḏ `שבר` (NU4); jmjm `חזק`; nri̯ `חרד`; gmḥsw `גֶּמְחֶסוּ`.
- **Names fixed here** (first occurrence vocalized): Nḥb-kꜣw `נֶחֶבְּכָּאוּ` (NU1); Mꜣfd.t `מָאפְדֶת` (renderings §13.2;
  NU writes `מַאפְדֶת`); ꜣbw (Elephantine) `אַבּוּ`; Ḥmn `חֶמֶן`; Dwn-ꜥnwj `דּוּן־עַנְוִי`; Nbwtj (Seth) `הנוּבְּתִי`;
  ḥḏ.t `הכתר־הלבן` (UN4 `הכתר־האדום`); Ḫꜥy-tꜣw `המופיע־בלהבה`; ḥm-psḏ.t `משרת־האור?` (the pelican?).
- **Rejected**: `נחש` for hjw, nꜥw, kꜣ, ḏ.t (not licensed; each rendered by sense); `פתן`, `צפע`, `שפיפון`, `אפעה`
  (biblical serpent words would manufacture Ps 58 / Ps 91 / Gen 49 echoes); `לחש` for šnj "conjure"; `ניחוח` for bdd;
  `לבונה` for mnwr; `ירק` for ṯf (UN3's psg); `עור` was allowed (228.2 jnm licenses it).

### Open decisions for the user
- **hjw `הִיוּ`** (226.3, 237.2, 240.5; UN8 298.6): transliterated; a translation would need `נחש` (not licensed for it)
  or a coined word.
- **sḏr `שכב`** (the snake "lie down") beside UN3's nk `שכב עם` – two Egyptian lemmas in one Hebrew root (the gate
  licenses both); AM rendered sḏr `ישן`.
- **The "foreign" lines** (232.1–232.2, 235.1, 236.1, the names of 238): transliterated with `?`; where the TLA gives a
  lemma (mtj "vessel", hʾ "court", šs "rope") 232.1 follows it (`*עורק*?`), 236.1 does not translate hʾ (a sentence
  that does not read as Egyptian). A future check against Steiner 2011 may change this.
- **sṯ** `ריח` (TB, here) vs MK E134 `בושם` for the same lemma, and bdd `בושם` here: the lead may unify.
- **ḫm** with the root נכר (`התנכר` / `הכיר`), not a separate verb: acceptable?

### Progress log
- Drafted 226–231 (34 rows), saved, `fill` + `verify` (0 gate problems); 232–243 (32 rows) after reading the TLA's
  German for 226–243 (230.9 šzp "moment" vs "palm"; 237.1 re-cut into two clauses; 238.2 the TLA's deletion of `n=k`
  not followed; 240.3 ḫm "unknowingly"); then the passage (58 rows) after reading `tr` for 199–246 (246.7–246.11 read as
  one sentence: "announce … the going of this One who you are").
- Pass (a) fidelity: brackets of 199.1–199.4 and 244.1 word by word; every n sḏm=f past per UN3 (32#4.5, 230.7, 230.8,
  246.17 against the TLA's future); 230.14 `תושבעי אַתְּ עצמך` (ḏs=ṯ is emphatic, not an object); 245.6 `לך` removed
  (not in the Egyptian); 230.6 `את אביו של הנושך` (the construct `אבי` read "my father").
- Pass (b) consistency: the refrain 229.3 = 233.3; 226.3 / 237.2 / 240.5 `הִיוּ`; 234.1 / 240.4 `על פניך`; 234.2 / 240.4
  `אשר־בשיחו`; 246.9 / 246.11 second halves identical; every term grepped against UN3, UN4 and the BD keys (above).
- Pass (c) Hebrew: the generated `translation-UN5.rtl.md` read through; double punctuation `?.` removed (230.11, 243.1).
- `build UN5`: 124 lines, 4 footnotes (226.1, 232.1, 244.3, 245.7). `check_bible_quotes.py` on the three files: 0
  problems. `verify UN5 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **The word as a weapon** (227.2–227.4): "I say this against you … I have said this against you" – the spell announces
  itself and, once said, is done.
- **The name captures** (227.2–227.3, 236.1 "this is your name"): to name the snake is to rule it; the snakes have many
  names, each a portrait (the Coiler, the Rearing One, Spittle-of-the-Wall, Vomit-of-the-Brick).
- **Evil turned back on itself** (226.1, 230.12, 241.2): the Coiler is coiled by the Coiler, the male bitten by the
  female; "what came out of your mouth is turned back against you".
- **The earth takes back its own** (226.3, 230.5–230.6, 237.1): "Earth, swallow what came out of you"; Re is to bite the
  earth, the snake's father; the snake goes back "to its mother's house".
- **Myth as precedent** (229.1–229.2, 230.15–230.16): Atum's nail on Nehebkau's spine, Horus's knots on the snake's back
  – what a god did once, the spell does again.
- **The innocent victim** (230.7–230.8, 240.3): "it was he who came against Unas, Unas did not go against him"; "Unas
  trod on Horus's path unknowingly" – a legal plea inside a spell.
- **Sound is power** (228.1 ḥr ḥr r ḥr; 231.1 qs qs qs.t; 243.2 rw rwi̯; 232.1 mtj mtwtj): the spells are built of
  repeated sounds, and the pun is the magic (the apparatus notes each).
- **The serpent swallowed into the crown** (239.1–239.2): the White Crown swallows the uraeus – the danger becomes the
  king's protection.
- **A foreign tongue?** (232–238): words that are not Egyptian; if Steiner's reading holds, Egypt's oldest snake charms
  include Canaanite spells.
- **Food from the dead god** (32#4.5): the libation is the fluid that came out of Osiris's own body, returned to him.
- **The voice feeds** (32#4.6): "the invocation offering" – food goes out to the dead at the sound of the voice.
- **Incense as kin of the god** (200.1): snṯr "incense" = sn nṯr "brother of the god".
- **Breaking the red pots** (244.3): red is Seth's colour; the smashed pot is the smashed enemy.
- **Not among the dead** (245.7–245.10): the king is the lone star on Nut's shoulder, looking down on Osiris who rules
  the akhs – "you are not among them".
- **The name lives** (246.18): among men and among gods – memory and heaven.

### Key parallels
- 226.3, 229.3 ↔ Gen 3:14 `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל` [divergence]: crawling and earth, but in Unas the earth eats the
  snake.
- 227.1, 229.1, 240.3 ↔ Gen 3:15 `הוּא יְשׁוּפְךָ רֹאשׁ וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב` [divergence]: the head cut off, the god's
  nail on the spine; the treading foot.
- 230.13, 230.15 ↔ Ps 58:6 `מְלַחֲשִׁים … חוֹבֵר חֲבָרִים` [equivalent]: the snake-charmer and the knot-tier.
- 240.2 ↔ Ps 91:13 `עַל-שַׁחַל וָפֶתֶן תִּדְרֹךְ` [equivalent]: treading on the snake.
- 230.14 ↔ Deut 8:15 `נָחָשׁ שָׂרָף וְעַקְרָב` [equivalent]: snake and scorpion as the pair of dangers.
- 242.2 ↔ Num 21:6 [divergence] (snakes sent by God vs a demon to be repelled); Eccl 10:11 `אִם יִשֹּׁךְ הַנָּחָשׁ בְּלוֹא
  לָחַשׁ` [divergence].
- 230.7, 241.1 ↔ Amos 5:19 `וְסָמַךְ יָדוֹ עַל הַקִּיר וּנְשָׁכוֹ הַנָּחָשׁ` [equivalent / divergence]: the snake in the house wall.
- 244.3 ↔ Ps 2:9 `כִּכְלִי יוֹצֵר תְּנַפְּצֵם`, Jer 19:10 [equivalent]: breaking pots = breaking enemies.
- 245.7 ↔ Isa 14:13 `אֶעֱלֶה מִמַּעַל לְכוֹכְבֵי אֵל` [divergence]: the king among the stars – hubris in Isaiah, fulfilment here.
- 246.10 ↔ Job 21:5, 29:9 (hand on mouth) [equivalent]; 246.12 ↔ Ps 24:7 [divergence]; 200.4 ↔ Gen 8:21 `רֵיחַ הַנִּיחֹחַ`
  [equivalent].
- **Num 21 without `שרף`**: no Egyptian word here is a "burning" snake; 233.2 (the flame from Nun beside the cobra) is the
  nearest image, noted but not rendered with `שרף`.

### Lines shared with other texts
- Inside UN5: 229.3 = 233.3; 237.2 = second half of 226.3; 234.1 / 234.2 ≈ 240.4; 238.1 ≈ 238.2; 227.2 ≈ 227.3; 230.10 ≈
  230.11; 246.9 ≈ 246.11; 25#3.5 ≈ 25#3.6.
- With UN3 / UN4: 246.7 ≈ UN3 215.1 (`הולכים ציריך, רצים רציך`; sjn here `מהיריו`); 246.17 ≈ UN4 219.3 (`לא כָּלָה`); 246.12
  `מי־הצינה` = UN4 222.12; 245.2 = the UN3 formula `בא אליך אונאס זה` (feminine).
- **For later keys (binding)**: UN1's first copies of PT 32 (32.2–32.6, 32#2, 32#3), PT 23–24 (23-24.2–23-24.5, .7) and
  PT 25 (25.2–25.8, 25#2) must copy this file's Hebrew, changing only what the Egyptian changes (UN1 25.3 adds `הלך
  אוֹסִירִיס עם הכָּא שלו`; UN1 25.7 `ḏi̯.n` = `נתתי`; UN1 32.5 `prj` same word; UN1 23-24.6 has no copy here); UN8 299.1
  ≈ 240.1; UN8's serpent spells (277, 289, 297, 298) take the refrain `נְפוֹל! זְחַל!` and the serpent words above.

### Proposals for the shared renderings
1. **The fixed lines for UN1** (verify's "identical" check will enforce them):
   32.1 `מי־הצינה שלך`; 32.2 `האלה, אוֹסִירִיס, מי־הצינה שלך האלה, הוֹי אונאס, יצאו מאת בנך, יצאו מאת חוֹרוּס.`; 32.3
   `באתי, הבאתי לך את עין־חוֹרוּס – יצטנן לבך בזכותה.`; 32.4 `הבאתי לך אותה תחת כפות רגליך.`; 32.5 `קח לך את ההפרשה היוצאת
   ממך; לא עייף לבך בזכותה.`; 32.6 `דברים לאמר, ארבע פעמים: בוא! הוּצָא לך (קורבן) הקול!`; 32.7 (rubric) `נתינת
   מי־הצינה.`;
   23-24.2 `אוֹסִירִיס, קח לך את כל השונאים את אונאס, המדברים בשמו רעה!`; 23-24.3 `תְּחוּת, לך, קח אותו לאוֹסִירִיס! הבא את
   המדבר בשם אונאס רעה!`; 23-24.4 `תן לך אותו בידך!`; 23-24.5 `דברים לאמר, ארבע פעמים: אל תרפה ממנו! הישמר, פן תרפה
   ממנו!`; 23-24.7 `ניסוך.`;
   25.2 `הלך ההולך עם הכָּא שלו; הלך חוֹרוּס עם הכָּא שלו; הלך סֵת עם הכָּא שלו;`; 25.3 `הלך תְּחוּת עם הכָּא שלו; הלך
   דּוּן־עַנְוִי עם הכָּא שלו;` (+ `הלך אוֹסִירִיס עם הכָּא שלו;` where UN1 has it); 25.4 `הלך חֶנְתִּי־אִרְתִּי עם הכָּא שלו;
   הלכת גם אתה עם הכָּא שלך.`; 25.5 `הוֹי אונאס, זרוע הכָּא שלך – לפניך; הוֹי אונאס, זרוע הכָּא שלך – מאחוריך.`; 25.6 (`רגל`
   for `זרוע`); 25.7 `אוֹסִירִיס אונאס, נתתי לך את עין־חוֹרוּס – השלם בה את פניך!`; 25.8 `ידבק ריח עין־חוֹרוּס בך!`.
2. **The ritual frame**: `ḏd-mdw zp 4` at a line's start `דברים לאמר, ארבע פעמים:` (UN4's usage); `zp 2` `(פעמיים)`; the
   rubric of an action as a verbal noun with a full stop (`נתינת מי־הצינה.`, `ניסוך.`, `[הפניית] קורבן־האל.`, `שבירת
   הכדים־האדומים.`), the rubric of an item as the bare noun (`קטורת.`).
3. **The serpent vocabulary** (for UN8's spells 277–299 and the antechamber): as under Decisions; the refrain `נְפוֹל!
   זְחַל!`; **add hjw (tla97860), nꜥw (tla80510, tla852793), nꜥ.t (tla857388), kꜣ (tla162950), ḏ.t (tla181340) to the `נחש`
   licence?** – the lead's call; this file renders them by sense either way (`הִיוּ`, `המתפתל`, `הזכר`, `המזדקפת`).
4. **Gate problem**: the `נשך` NEVER pattern (meant for `נֶשֶׁךְ` "interest") also blocks the verb `נָשַׁךְ` "he bit" (and
   `הנשך`, `ונשך`, `שנשך`); the serpent spells needed it (230.7, avoided by `נְשָׁכוֹ`). Proposal: license the bare form by
   pzḥ (tla62220) in the UN keys.
5. **Always vocalized (TRAPS)**: `הִיוּ` (hjw; "were"), `בָּא` for the ram (already trapped by bꜣ).
6. **Names**: `אַבּוּ` (Elephantine), `חֶמֶן`, `דּוּן־עַנְוִי`, `הנוּבְּתִי`, `נֶחֶבְּכָּאוּ`, `הֶפֶּנוּ`, `אִיכֶּן־הִי`, `חִיפְגֶת`,
   `מָאפְדֶת` (§13.2) vs NU's `מַאפְדֶת` (one form for the corpus).

### Lessons for the guidelines
- **A gate written for a noun also blocks its verb**: `נשך` "interest" (Ps 15:5) blocks `נָשַׁךְ` "bit"; a serpent text
  shows it at once. Test each NEVER string as a verb form too (cf. UN4's `הנחתם`).
- **A gate licence list should be built from the lemma ids of the text's own serpent words** (`lemma` / `lex` on the
  key), not from a list of the familiar ones: five of the six serpent lemmas of PT 226–243 were not licensed.
- **Lines in a possibly foreign language**: translate only what the TLA identifies, transliterate the rest with `?`,
  and keep the scholarly hypothesis in one cautious note per spell group – never let it shape the Hebrew.

## Parallels index
(generated into `../parallels-index.md` by `../build_parallels_index.py` from the הקבלה bullets)
