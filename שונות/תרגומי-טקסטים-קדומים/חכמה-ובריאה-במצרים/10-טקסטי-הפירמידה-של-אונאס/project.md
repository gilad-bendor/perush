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

## UN6 (PT 247–260)

Round 8 run 1, translator 4 (2026-11-13). Files: `annotated-UN6.rtl.md`, `translation--intro-UN6.rtl.md`,
`translation-UN6.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The antechamber's **west gable** (PT 247–253) and **west wall** (PT 254–260): 206 rows, labels `247.1` … `260.25`
(`258-259.1` … `258-259.21`; Allen's 258–259.8 is not on Unas's wall, so no row). **The whole of PT 260 (260.1–260.25)
is in UN6** in the composite (all 25 rows have `A/W`), not only 260.1 as the brief said; UN7 begins with PT 261.1.
Unas's own wall for all rows except PT 255–256 (Teti, `{טטי}`, 25 rows). Preservation: almost intact; restorations
only in 254.46, 254.49, 254.53, 254.56, 254.59. The text in a sentence: Horus wakes his father, who is reborn of the
Ennead as a star, rises as the lotus at Re's nose, becomes Sia (Perception), is purified in the Field of Reeds; then the
long spell of the king's terror (254) closes heaven and earth to all but him and has the Beautiful West embrace him as a
mother; he inherits Geb and Atum (Teti's 255–256), takes the horizon (257), rises from the dust in the wind (258–259),
and is vindicated before the Two Truths, going forth with Maat (260).

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN6` (TLA lemmas, morphology, glosses); Allen 2013's lines (printed
  by `data`; a check only, never copied).
- Rank 3: the TLA's German (`tr UN6`), read after drafting each group (247–253, 254, 255–260). Allen 2005/2015 and
  Faulkner 1969 from memory only, in a few words (247.15).
- Precedents: a lemma index of every UN6 lemma against all drafted keys (scratch script over `egypt_tools.rows` +
  `all_hebrew`), then `lex` / `grep` for each new word.
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 2:7, 3:19, 5:24, 28:12; Ex 12:9, 15:15,
  23:27; Num 23:24, 24:17; Deut 10:18, 11:25, 32:39; 1 Kgs 7:19, 10:22; 2 Kgs 2:11; Isa 14:12–13; Ezek 37:7; Joel 2:10;
  Ps 2:7, 24:7, 72:2, 82:3, 91:13, 139:15; Song 2:1.

### Decisions
- **Address forms (§13.6.1)**: `Wnjs pj` / `pn` `אונאס זה`; `j` `הוֹ`; `r=f` `אפוא`; the cleft `jn X sḏm` `X הוא ה…`;
  `pj` / `pw` as copula `אונאס הוא …`; the kꜣ-form (*sḏm.kꜣ=f*, 254.5, 255.9–255.13) `… אז` ("then he will …").
- **The PT 247 wake-up** (247.7–247.11): `אונאס זה, אונאס, חזה! / ראה! / שמע! / היה שם! / זקוף את עצמך על צדך!` – mꜣꜣ
  `חזה` (UN3), ptr `ראה` (§3a), ṯzj `זקף` (kept apart from wṯz `הרים`, UN3).
- **The lotus**: zššn (249.9) `שׁוֹשָׁן` [cognate: loanword] only; zšzš (249.2, another flower) transliterated `פרח־הסֶשְׁסֶשׁ`;
  nḫb "lotus bud" (260.21) `ניצן`. 249.4 / 249.9 copy BD 81A's `השייך לנחירי רַא` (šr.t `נחיר`).
- **Snakes and fire**: jꜥr.t (249.7) `פתן` (the BD precedent, NU2/NU4); ꜣḫ.t "uraeus" (tla220; 256.4, 260.19) `הָאָחֶת`
  (feminine of ꜣḫ `אָח`; always vocalized: `אחת` = "one"); Rnn.wtt `רֶנֶנוּטֶת`, Ḏnn.wtt `גֶ׳נֶנוּטֶת`, Ḥkn.wtt `המריעה` (ḥkn
  `הריע`, UN5); nsr `להבה`, hh `להט`, ḫfḫf.t `פרץ`, ꜣm `להט` (the root בער is a TALES gate).
- **Terror**: snḏ `יראה` (UN4), nrw `אימה` (UN3), sdꜣ `רעד`, snhd `הבעית`, nrj `חרד` (UN5), ḥꜣꜥ.wt `מבוכה`.
- **The king as judge**: wḏꜥ "separate" `הפריד` (UN4; 251.6) but the legal phrase wḏꜥ mdw / wḏꜥ X ḥnꜥ Y `דן (דין)`
  (252.5, 254.43, 260.5) – a sense split; wpj "separate, judge" `פלח` (UN5's `פלח`: 252.6 `הפולח (בין) שני האֵלִים`,
  257.10 `פולח המהומה`); ḏꜣḏꜣ.t `ועד` (NU1); mꜣꜥ.tj `שתי האמת` (BD); mtrw `עֵד`; mꜣꜥ-ḫrw `אֲמִתִּי־הַקּוֹל` (260.4).
- **tfn / tfn.t "orphan"** (260.5; **superseded**: the coordinator licensed `יָתוֹם`, renderings §13.6.4.3, applied by the independent review) `חסר־האב` / `חסרת־האב`: `יָתוֹם` is reserved "never" (renderings §5.1) although it
  is exactly the Egyptian word and Ps 82:3 / Deut 10:18 are the parallels – **a gate that blocks the right word**
  (reported; the Hebrew was not bent: `חסר־האב` is a precise description, and the apparatus quotes the verses).
- **Banks and fields**: jdb `גדה`, wḏb `חוף`, jḫm.t `שפת־המים`; sḫ.t `שדה` (in the names), ꜣḥ.t `אחוזה`.
- **Others fixed here**: šꜥ.t `סכין` / ds `מאכלת` (UN4); ḥnw.t and ꜥb both `קרן` (NU6 / UN5 precedents); dꜣ `דיכא`, jdj
  "be subservient" `נכנע`, jdj "offer" `*מעניק*?`; dmḏ `חיבר` (UN3) / zmꜣ `איחד`; ḏbꜣ `עיטר` (UN3); sšwj `הגבה` (Shu's
  pun); swꜣ `חלף` (NU1); ḫsf `הוחזר` (UN5); ꜣgb `הצפה` (UN3); bjꜣ "the sky's metal / water" `ימת־השמים` (NU4; never
  `רקיע`); pšn `סדק` (the root בקע is a TALES gate); ḥtm `השמיד` (NU1), but 258-259.3 "come to an end" `פוסק` (sense
  split); sḥtm `הוכחד`; ḏꜣj `חצה` (UN3) but 258-259.21 "oppose" `נחסם` (sense split); zḫn `ביקר` (NU5 wrote `פגש`);
  sḥtp `הניח את דעת` (NU3); sꜥḥꜥ `העמיד`; smn `קבע`; ẖnm `עטף` (jnq `חיבק`); mkj `נצר`, mk.t / mkw.t `מחסה`, nh.t `מגן`,
  nḏ `הגן`; nḫt (noun) `עוז` / nḫt (verb) `חזק`, wsr (noun) `חוסן`, ꜣ.t `כוח`; šbw `סעודה` (BD 11 had `מזון`, which is
  ḏfꜣw's), ms.wt `ארוחת־ערב`; šwꜣ.t `מחסור` (not `דלות`, nmḥ.w's); pꜣḏ "round loaf" `עוגה` (AM) vs pꜣḏ "ball" `כדור`
  (UN5) – and bḏ "ball" (254.14) also `כדור` (a collision, see Open); hny `צהלה`, hy `רינה`; nb-tm `אדון־הכלל` (kept
  apart from nb-r-ḏr `אֲדוֹן הַכֹּל`); Nḥḥ `הנֶּצַח`; Ḥw `חוּ`, Sjꜣ `סִיא`, sꜣj `החכם`, sꜣ `*החוכמה*?`; mwmw `*נָא*?`
  (Ex 12:9's word: vocalized).
- **Names fixed here** (first occurrence vocalized): Ndj.t `נֶדִית`; Šzm.tt `שֶׁסְמֶתֶת`; Nfr-tm `נֶפֶרְתֶּם` (BD 54); Nḫn
  `נֶחֶן`, Ḥr.w-nḫnj `חוֹרוּס־של־נֶחֶן`; Wr-skꜣ.t `וֶר־סֶכָּאת`; jꜣd `יָאד` (a star); Knz.t `כֶּנְזֶת` (UN3); Msq.t `מֶסְקֶת`
  (NU1); Ḥp `אַפִּיס` (NU7); Ḏdw / Ḏd.t / Ḏd.wt `גֶ׳דוּ` / `גֶ׳דֶת` / `גֶ׳דוּת`; Mḥ.t-wr.t `מֶחֶת־וֶרֶת` (NU1); Tbj `טֶבִּי`;
  Gsꜣ `גֶּסָא`; Ḥr.w-smsw `חוֹרוּס־הבכור` (NU8); Jmn.t nfr.t `המערב־היפה` (a goddess: feminine verbs); translated
  epithets `אשר־על־צמחו`, `אשר־בראש־יתדו`, `קושר־הראש`, `אשר־על־ייחודו?`, `אדון־היחיד` (NU6), `הכוח־הגדול`; transliterated
  with `?`: `העולים?` (jꜣꜣ.wj), `הפֶּסְגֶ׳תִי?` (the second pelican), `מִיז?`, `סְצֶ׳תֶת?`, `חֶצָא?`, `נֶנוּ` (rendered `הפונה?`).
- **Traps met**: `ברַא` ("with Re", 254.29) reads as the reserved root ברא → `את רַא`; `האלה` ("these") must be
  `הָאֵלֶּה` (the verifier reads "goddess"); `פֶּה` (Pe) always vocalized; `הָאָחֶת`.
- **Rejected**: `יתום` (gate), `מבול` for ꜣgb, `רקיע` for bjꜣ, `בקע` for pšn, `בער` for ꜣm, `סוף` for pḥ.wj (`אחרית`),
  `שושן` for nḫb / zšzš, `ברא` in any form, `שבת` (252.6 `מושבו`, not a form of the root שבת), `סֻלָּם` for rwd ("stairs"
  `מדרגות`).

### Open decisions for the user
- **tfn / tfn.t** `חסר־האב`: the `יתום` gate blocks the exact word; the lead may license `יתום` for tfn (tla171830,
  tla171870) in the UN keys, as `נחש` is licensed for ḥfꜣw.
- **bḏ "ball"** (254.14) and pꜣḏ "incense ball" (UN5 200.3) both `כדור`; a second Hebrew word for one of them?
- **šꜣs** (UN3 217.3 `חלף ב־`) and swꜣ (NU1 `החולף`, here 251.2, 254.11, 254.24, 254.32) share the root חלף; 260.22
  renders šꜣs `הילוך` to avoid a third use. One verb should move (proposal: šꜣs `שוטט`? but ḫnz has it).
- **ḥnw.t** and **ꜥb** both `קרן` (precedents NU6 / UN5).
- **ꜣḫ.t "uraeus" `הָאָחֶת`**: a coinage from ꜣḫ `אָח`; the alternative is `האוראוס` or `הפתנית`.
- **n sḏm=f**: UN3's rule (past) followed, except where the context is a prohibition or promise (258-259.2, 260.25:
  future, explained in the entries).
- **252.7** and **247.15** are partly unintelligible; the guesses are italic with `?`.

### Progress log
- Built a lemma→precedent index for all 206 rows (scratch), then drafted 247–253 (62 rows), read `tr`, wrote the
  entries, `fill` + `verify` (0 gate problems); 254 (59 rows) the same way (verify: the `ברַא` trap fixed); 255–260
  (85 rows) the same way (verify: `האלה` → `הָאֵלֶּה`).
- Pass (a) fidelity: brackets of 254.46–254.59 checked word by word (`j[r]=[f]` read whole; `[(פעמיים)]` for the restored
  `zp 2`); every *sḏm.kꜣ=f* rendered with `אז`; the TLA's passive in 251.8 not followed (the morphology is active);
  247.15 and 252.7 marked as guesses.
- Pass (b) consistency: dmḏ moved to `חיבר` (draft `איחד`, which is zmꜣ's); dꜣ moved to `דיכא` (jdj has `נכנע`); jns
  `בד־האודם` (NU7); ds `מאכלת` (251.5 draft `סכין`, šꜥ.t's); 257.6 s.t back to `מקום`; the refrains 253.1 = 253.3, 255.1 =
  255.5, 255.3 ≈ 254.2, 254.47 ≈ 254.48, 260.13 ≈ 260.24, 260.15 ≈ 260.16 checked.
- Pass (c) Hebrew: the generated `translation-UN6.rtl.md` read through; the Beautiful West as a name (`המערב־היפה`)
  so that its feminine verbs read naturally.
- `build UN6`: 206 lines. `check_bible_quotes.py` on the three files: 0 problems (after one fix: 1 Kgs 10:22 had been
  quoted from memory; now from the printed verse). `verify UN6 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **The son wakes the father** (247.1, 247.7–247.14): "Your son Horus has acted for you … see! look! hear! be there!
  raise yourself from your side" – the senses come back one by one; the son's duty to the dead father is the whole
  religion in a line.
- **Birth again, from gods and lionesses** (247.4, 248.1–248.2): created by Geb, born of the Ennead "between its
  thighs", conceived by Sekhmet – the tomb is a womb.
- **The king as a star and as a flower** (248.3–248.4, 249.2, 249.9): a sharp-fronted, long-striding star; the lotus
  that rises from the mud like the sun and is held to Re's nose – smell gives life (the same words as BD 81A, a
  thousand years later).
- **Maat in place of isfet** (249.6, 260.13, 260.24): the dead king does in heaven what the living king does on earth –
  sets order where chaos was, and "brings Maat, who is with him".
- **The mind as a god** (250): the king becomes Sia, Perception, "carrier of the god's book at Re's right"; with Hu
  (Utterance, 255.16, 257.13) he holds the two powers by which the creator creates.
- **Terror as a royal attribute** (254, 255–256): if no place is made for him, the earth will be struck dumb and Shu's
  arms struck from under the sky; roads hidden, stairs destroyed, stars trembling; "whom he finds on his way he eats
  raw" – the Cannibal Hymn's first line, a wall before it.
- **Death as a woman** (254.21–254.25): the Beautiful West comes to meet him "with her beautiful tresses", says "here
  comes the one I bore", and embraces him.
- **The body kept whole** (254.33–254.35, 258-259.4–258-259.6, 260.9): the head tied to the neck, the bones and the
  "secret limbs" joined, the corpse's fluid left in the earth – Osiris's dismemberment undone.
- **The enemy punished as a sacrifice** (254.46–254.55): those who would take his meal, his supper, the breath from his
  nose – their entrails to the sky, their blood to the earth, their heirs to want, their houses to fire.
- **Disgust for the earth** (258-259.2): "his abomination is the earth; he will not enter Geb" – the same word (bw.t)
  as the dung he will not eat (UN3 210).
- **The lament turns to joy** (258-259.7–258-259.11): his sister weeps, and her words are "to the sky, to the sky, on
  the wind!"
- **A trial with witnesses** (260): the Two Truths hear, Shu is witness, the case of the orphan boy and girl is judged,
  the matter is "brought to its end in Heliopolis" – the king is "true of voice by what he did".
- **Puns**: zwr "bowl" / zwr "drink" (254.36); rmn "shoulder" / rmnj "lean" (255.13); mꜣ "see" / mꜣw.t "new" (257.2);
  Šw / sšwj "lift" (253.6); psḏ.tj "pelican" / psḏ.t "Ennead" (254.8–254.9); Ḏdw / Ḏd.t / Ḏd.wt (254.39); tfn / Tfn.t
  (260.5).

### Key parallels
- 248.4 ↔ Isa 14:13 `הַשָּׁמַיִם אֶעֱלֶה מִמַּעַל לְכוֹכְבֵי אֵל אָרִים כִּסְאִי` [divergence]: the king's place among the
  stars – hubris punished in Isaiah, fulfilment here; 248.3 ↔ Num 24:17 `דָּרַךְ כּוֹכָב מִיַּעֲקֹב` [equivalent].
- 249.9 ↔ Song 2:1 `שׁוֹשַׁנַּת הָעֲמָקִים`, 1 Kgs 7:19 [cognate: loanword] – zšn > `שׁוֹשָׁן`.
- 252.1 ↔ Ps 24:7 `שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם … וְיָבוֹא מֶלֶךְ הַכָּבוֹד` [divergence].
- 254.18, 256.5 ↔ Deut 11:25 `פַּחְדְּכֶם וּמוֹרַאֲכֶם יִתֵּן`, Ex 23:27 `אֶת אֵימָתִי אֲשַׁלַּח לְפָנֶיךָ` [equivalent]: "giving
  terror" into hearts.
- 254.12 ↔ Gen 28:12 [divergence]: stairs to heaven destroyed for all but the king (not the ladder word).
- 254.7 ↔ Ex 12:9 `נָא` [divergence], Num 23:24 [equivalent].
- 258-259.9 ↔ 2 Kgs 2:11 `וַיַּעַל אֵלִיָּהוּ בַּסְעָרָה הַשָּׁמָיִם` [equivalent]; 258-259.1 ↔ Gen 3:19 [divergence].
- 260.5 ↔ Ps 82:3 `שִׁפְטוּ-דַל וְיָתוֹם`, Deut 10:18 [equivalent]: judging the orphan as the mark of the just ruler.
- 260.9 ↔ Ezek 37:7 [equivalent]; 258-259.19 ↔ Deut 32:39 `מָחַצְתִּי וַאֲנִי אֶרְפָּא` [equivalent].
- 254.32 ↔ 1 Kgs 10:22 `קֹפִים` [cognate: loanword gf / gjf.t].

### Lines shared with other texts
- **For later keys (binding)**: 254.7 `אשר ימצא אונאס בדרכו – יאכל הוא אותו לו, *נָא*?.` is the first copy of UN7
  273-274.45 (`wr gmi̯.y=f m wꜣ.t=f wnm=f n=f sw mwmw`) and UN8 299.5 (Pepi II's copy): copy it, changing only the subject.
  249.8 ≈ UN9 311.12 (`ꜣgb.w-wr pri̯ m wr.t` `ההצפה הגדולה, היוצאת מן הגדולה`).
- Inside UN6: 253.1 = 253.3; 255.1 = 255.5 (≈ 255.2); 255.3 ≈ 254.2 (+ the suffix); 255.7 ≈ 255.8 ≈ 255.15; 254.47 ≈
  254.48; 254.46 ≈ 254.58 (`העושים זאת נגדו`); 260.13 ≈ 260.24; 260.15 ≈ 260.16; 250.2 ≈ 250.5 ≈ 250.8.
- With earlier files: 249.4 / 249.9 = BD 81A.3's `השייך לנחירי רַא`; 258-259.18 ≈ UN3 218.2 (`ייטול … יקצה … הכָּאִים`);
  252.4 = UN4 224.7's `ציווה דבר ל־`; 247.3 = PT486 / UN5's `שלום לפניך`.
- **PT 260.1 for UN7**: 260 is wholly here; its first line is `הוֹ גֶּבּ, שור נוּת! חוֹרוּס הוא אונאס, יורש אביו.` – if UN7
  meets Geb "bull of Nut" or "Horus, heir of his father" it should copy these words.

### Proposals for the shared renderings
1. **Formulas**: the kꜣ-form `sḏm.kꜣ=f` = `… אז` (`יעשה אונאס …` / `יבוא אז טטי זה`); `jr tm=k X` = `אם לא תעשה X`;
   `j jn X` / `j.t jn X` (quotation after the words) = `– אומר X` / `– אומרת X`; `jw NN r p.t` = `אונאס – אל השמים`.
2. **Terms**: zššn `שׁוֹשָׁן` (gated, confirmed), nḫb `ניצן`, zšzš transliterated; ꜣḫ.t "uraeus" `הָאָחֶת` (TRAP: always
   vocalized); jꜥr.t `פתן` (BD); wḏꜥ mdw `דן דין`; tfn `חסר־האב` (or license `יתום`); jdb `גדה` / wḏb `חוף` / jḫm.t
   `שפת־המים`; bjꜣ `ימת־השמים` (never `רקיע`); snḏ `יראה` / nrw `אימה` / sdꜣ `רעד` / snhd `הבעית`; Jmn.t nfr.t
   `המערב־היפה`; nb-tm `אדון־הכלל`; mwmw `נָא` (vocalized: TRAP).
3. **Names**: as under Decisions (נֶדִית, שֶׁסְמֶתֶת, נֶפֶרְתֶּם, נֶחֶן, וֶר־סֶכָּאת, יָאד, טֶבִּי, גֶּסָא, גֶ׳דוּ / גֶ׳דֶת / גֶ׳דוּת,
   רֶנֶנוּטֶת, גֶ׳נֶנוּטֶת).
4. **TRAPS to add**: `ברַא` (b + Re) trips the ברא gate – write `את רַא` / `לרַא`; `פֶּה` (Pe) always vocalized.

### Lessons for the guidelines
- **Check the composite before the brief's line counts**: the brief gave UN6 "the start of PT 260 (260.1)", but the
  composite puts all 25 rows of PT 260 in UN6 (`unas_wall` A/W) – the key's 206 rows include them.
- **A lemma→precedent index built once for the whole key** (every TLA id of the key with its earlier Hebrew in all
  keys) made the one-lemma-one-Hebrew check a lookup rather than a hunt, and showed collisions (dmḏ/zmꜣ, jdj/dꜣ,
  šꜣs/swꜣ) before drafting.
- **A Hebrew preposition prefixed to a vocalized name can rebuild a reserved root** (`ב` + `רַא` = ברא): gates on
  prefixed god names.

## UN7 (PT 261–276)

Round 8 run 1, translator 5 (2026-11-13). Files: `annotated-UN7.rtl.md`, `translation--intro-UN7.rtl.md`,
`translation-UN7.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The antechamber's **south wall** (PT 261–272) and **east gable** (PT 273–276): 198 rows, labels `261.1` … `276.2`
(PT 264–266 are not on Unas's walls; no rows 262.3, 267.7–267.10, 270.7: Allen's lines the witness lacks). Witnesses:
Unas's own wall for 178 rows; **PT 267** from Pepi I (`{פפי א}`, 10 rows, damaged – the TLA did not record Unas's
copy); **PT 271** read from Allen 2013 (`{אלן}`, 10 rows; the backticked line is the tool's reference). The text in a
sentence: the king rises as a flame on the wind, demands that the gods "not be ignorant of him", crosses on the sky's
reed-floats, climbs by stairway, incense smoke and wings, is washed and suckled by the goddesses, browbeats the
ferryman "Face-behind-him", climbs Re's ladder, stands at the gate of Nun – and in the **Cannibal Hymn** (273–274,
68 lines) the sky darkens while he hunts, cooks and eats the gods to absorb their magic, power and ba; two short spells
(falcons and baboon; a snake) close the gable.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN7` (lemmas, morphology, glosses; Allen's line as a check, never
  copied); PT 271 from Allen's line printed by `data`.
- Rank 3: the TLA's German (`tr UN7`), read after drafting each group (261–263, 267–268, 269–270, 271–272, 273–276;
  `tr` has nothing for PT 271). Allen 2005/2015, Faulkner 1969 and Lichtheim *AEL* I only from memory, in a few
  words, never quoted.
- Precedents: a scratch lemma→Hebrew index (TLA id → the Hebrew in the פירוק bullets of every drafted Egyptian file),
  then `lex` and `grep --all` for every new word.
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 28:12, 49:25 (dropped); Ex 2:3, 12:9,
  12:29, 19:4; Lev 16:13; Num 23:24; Deut 32:42; Judg 5:20; 1 Sam 2:14; Isa 14:12–13, 18:2, 49:10, 60:16; Ezek
  24:4, 24:5, 24:10; Joel 2:10; Mic 3:2–3; Ps 19:7, 110:1, 139:8; Eccl 7:1.

### Decisions
- **Refrains and copies**: PT 254.7 (UN6) copied into 273-274.45 changing only what the Egyptian changes (`wr` added,
  `=f` for "Unas"): `גדול אשר ימצא הוא בדרכו – יאכל הוא אותו לו, *נָא*?.`; PT 262's litany fixed by 262.1
  (`אל תתנכר לאונאס, X: הרי יודע אתה אותו – הרי יודע הוא אותך.` / `אל תתנכר לאונאס, X;` / `ייאמר עליך: "…".`);
  PT 263 `מונחות שתי רפסודות־הקנים של השמים ל־X, שיחצה בהן …`; 269.3–269.6 pairs; 270.6 = 270.8; 270.9 ≈ 270.10;
  271.8 / 271.9 as a mirror; 273-274.34–37 (`גדוליהם – למנת־הבוקר שלו` …); 273-274.63 ≈ 273-274.65.
- **The Cannibal Hymn's violence as written** (the brief): wnm `אכל`, ꜥm `בלע`, nsb `לחך`, wšb `ניזון`, rḫs `שחט` (UN4),
  ḏꜣd `דקר` (new: "stab a sacrificial animal"), mds `קטל` (new here; NU's `עורץ`/`העריץ` were epithets – see Open),
  fsj `בישל` (SI), spḥ `לכד בלולאה`, qꜣs `אסר`, ḥsb `ריסק`; the kitchen: wḥꜣ.t `קלחת`, ktj.t `כירה`, kꜣp.t `מוקד`, qrr
  `הסיק` (with `?`), ḫpš `כרע` (UN6); the meals: (j)ḫ.t `מנה` (UN3) + dwꜣ.t `בוקר` / ḫꜣw `לילה`, mšrw.t `סעודת־ערב`
  (kept apart from ms.wt `ארוחת־ערב`, UN6); the powers: ḥkꜣ `קסם` / `קסמים` (§13.3), ꜣḫ.w `גבורה` / `גבורות` (the
  Book of the Dead's), bꜣ `בָּא`, šw.t `צל`, sjꜣ `הכרה` (Sia's word), wsr `חוסן` (UN6; pl. `כוחות־החוסן`), sḫm-wr
  `הכוח־הגדול` (UN6), sḫm `שלט ב־`, sḫm.w `בעלי־השלטון` (NU2).
- **smsw "eldest" = `בכיר`** (263.7, 273-274.20, .39, .47), never `בכור`: "the day of slaughtering the firstborn" would
  manufacture an echo of Ex 12:29; recorded as an [absent] row at 273-274.20.
- **jḥy (stars darken) = `קדר`**: the natural verb (kkw keeps `חושך`); the Joel 2:10 contact is a shared motif and
  is tagged so.
- **jꜥj "ascend" = `נסק`** (261.8, 267.14): jꜣq has `עלה` (UN3); sjꜥ(r) stays `העלה` (UN3), so jꜥ / sjꜥ use two roots.
- **ḏꜣj by valence**: intransitive `חצה` (UN3), transitive "ferry X / pass X to the mouth" `העביר` (269.15, 270.5,
  270.11, 270.13); one lemma, the Hebrew binyan follows the syntax.
- **Other terms fixed here**: ḫm (negative imperative) `התנכר` (UN5) / "not know (a name)" `לא הכיר` (273-274.6); rḫ
  `ידע`; sṯ (particle) `הרי` (also for sk); zḫn.wj `שתי רפסודות־הקנים`; mẖn.t `מעבורת`, mẖntj `מעבורתן`, hm.t
  `דמי־המעבר` (AM); tꜣ-rd `מעלות` (not the ladder); mꜣq.t `סֻלָּם` (271.6, gated); ꜣpd `עוף`; ḫprr `חיפושית`; jꜥj "wash"
  `רחץ`; sꜥb `זיכך` (ꜥb `זוך`, UN4); sfḫ `התיר`; sk `ניגב`; sḫpj `הוליך`; mnḫ `הצטיין`; snq `ינק` / `היניק` (one
  lemma, one root); ꜣṯj `גידל`; nḏr `תפס` (ꜣm `אחז`, ḫfꜥ `לפת`); sjp `הפקיד`; sbq `פיקח`; sꜣꜣ `חכם`; mnḏ `שד`; jrṯ.t
  `חלב`; sṯj `ריח` (UN5's open TB / MK split); pꜣq `רקיק`; mn.t `ירך` (UN6); srḫ `טענה`; z.t `ברווזה`; ngꜣ `פר`; sṯp
  `זינק`; ḏnḥ `כנף`; smꜣ "temple" `רקה`; šnj.t `סערת־ברד`; nhj `חס`; mtr `העיד`; pnq `שאב`; sjꜣ (verb) `זיהה`; nhd
  `זעם`; šps.w `פאר`; zꜣb.wt `*תבונה*?`; ḥmsw.t `חֶמוּסוֹת`; sšm.wt `המובילה`; nṯb `צרב` (SI); ꜥpr `ערוך` (NU); jꜥb
  `קיבץ`; ḫꜣꜥ wpwt `הטיל שליחויות`; ꜣw.t `מתנה` (NU); mk.t "place" `מעמד`; ꜥšm `תמונת־אל` (NU) + ꜥšm "inspire awe"
  `נורא`; wdn `זבח` (NU); ꜥ "document" `כתב־סמכות`; sbn `הוכתר`; wꜣḫ `שגשג`; fjw `נגעל?`; sbš `מבחיל`; ḥꜣw `עודף`;
  jri.w jr.wt `עושי־המעשים`; ḫbs `עידור` (NU); s.t-jb `מקום־חפץ`; mn `קבוע` (NU); wꜣḥ `הניח`; msd.t `לבוש` (`בגד` is
  ḥbs's, TALES gate); ḫns `דלת־החֶנֶס`; qrqr.t `מאורה`; jmj-rd `הצורר`; tḫtḫ `בלבל`; jtr.t `שורת־ההיכלים`; ḥḏ
  `היכל`.
- **Names fixed here** (first occurrence vocalized): Ꜣkr `אָכֶר` (pl. `האָכֶרוּ`, NU); Wnwnjt `וֶנְוֶנִית`; mnwḥ.wt
  `המֶנְוֶחֶת?`; ḥnbw `החֶנְבּוּ?`; Ḥr.w-Spd `חוֹרוּס־סֹפְּדוּ`; jmj-dwꜣ.t `אשר־בַּדּוּאַת`; rs-wḏꜣ `המקיץ שלם`; ḥtp-wꜥ `הנח
  לבדו`; qsn `הקשה`; kꜣ-p.t `שור־השמים`; nḫḫ `*המתמיד*?`; Bꜣ-pf `הבָּא־ההוא`; sḥd `הסֶחֶד?`; Ḥr.w-ꜣḫ.tj
  `חוֹרוּס־שבאופק`; Nḥb-kꜣ.w `נֶחֶבְּכָּאוּ`; mr-n-ḫꜣ `תעלת־הסכין?`; Nbwtj `הנוּבְּתִי`; Š-zꜣb `אגם־התן`, Š-dwꜣ.tj
  `אגם־הדּוּאַת`; ḥw.t-ꜥꜣ.t `הבית־הגדול`; qbḥw `קְבֶחוּ`; Jpy `אִיפִּי`; Ḥr=f-ḥꜣ=f `פניו־מאחוריו`; Mꜣ-ḥꜣ=f
  `החוזה־מאחוריו`; smꜣ.t wr.t `הפרה־הפראית הגדולה`; qꜣj.t-n-dmm=s `הרמה־אשר־לא־תינקב`; Jḫmꜥ-wp.wt-jmj-kḥꜣw
  `תופס־הקדקודים־אשר־ביורה`; ḏsr-tp `קדוש־הראש` (NU); Ḫnsw `חוֹנְסוּ` (NU5); Šzmw `שֶׁסְמוּ`; Mrr=f-jrr=f /
  msḏḏ=f-n-jrj.n=f `אם־יחפוץ־יעשה, אם־ישנא־לא־יעשה`; Šd.t `שֶׁדֶת`; zkzk `זַכְזַךְ?`.
- **Rejected**: `בכור` for smsw (Ex 12:29); `חשך` for jḥy (kkw's); `עלה` for jꜥj (jꜣq's); `עורץ` for the verb mds (see
  Open); `בגד` for msd.t (TALES gate); `סולם` for tꜣ-rd; `ארוחת־ערב` for mšrw.t (ms.wt's); `סעודה` alone (šbw's).

### Open decisions for the user
- **mds** "slaughter": here `קוטל` (273-274.28, a verb with an object); NU9 / NU10 have `עורץ` / `העריץ` for the same
  lemma in names and epithets. One Hebrew for the lemma? (Proposal: `קוטל` in the verb, the NU epithets may stay.)
- **mšrw.t** `סעודת־ערב` vs ms.wt `ארוחת־ערב` (UN6): two Egyptian words for supper, two Hebrew compounds; `סעודה`
  alone is šbw's (UN6).
- **ḏꜣj** `חצה` / `העביר` by valence (above) – acceptable, or one Hebrew verb throughout?
- **jꜥj** `נסק` beside sjꜥ(r) `העלה` (UN3): the causative and its base now have two roots.
- **PT 271** (Allen only): 271.1, 271.4, 271.5, 271.8–271.9 are partly unintelligible from the transcription alone; the
  guesses are italic with `?`.
- **273-274.56** fjw: "be disgusted" (TLA) or "rejoice" (some translators) – kept the TLA's, with `?` in the note.
- **262.6 / .9 / .12 / .15 / .18** `ḏd jr=k`: the AED's passive `ייאמר עליך` followed; Allen reads a 1st person
  ("I say of you").

### Progress log
- Built the lemma→precedent index (scratch), then drafted 261–263 (52 rows), read `tr`, wrote the entries, `fill` +
  `verify` (0 problems); 267–270 (57 rows, the same; four remembered verse wordings corrected after `--show`, two
  speculative הקבלה bullets removed); 271–272 (14 rows); 273–276 (75 rows). `verify UN7`: 0 problems after each group.
- Pass (a) fidelity: brackets of PT 267 checked word by word (`s[qr]` → `[נתקעו]`; restored suffixes and a damaged
  `⸢ ⸣` not bracketed); every n / n…js / jn-cleft / passive checked; the TLA's double dšr.t / wꜣḏ.t (273-274.53–54)
  kept as the AED reads it, Allen's single writing noted.
- Pass (b) consistency: smsw unified to `בכיר` (263.7 draft `הבכורים`); `צִי` vocalized in 267.13; ḏꜣj valence split
  applied in all six lines; the litany lines of 262 and the 263 formula compared by eye and by `verify` (0
  repeated-line differences).
- Pass (c) Hebrew: the generated `translation-UN7.rtl.md` read through; the hymn's catalogue lines kept terse (`גדוליהם –
  למנת־הבוקר שלו`), the Geb pun noted as a Hebrew accident (`גַּבּוֹ אל גֶּבּ`).
- `build UN7`: 198 lines, 3 footnotes. `check_bible_quotes.py` on the annotated, intro and translation files: 0
  problems. `verify UN7 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **The king as fire and wind** (261.1–261.3, 261.9): a flame carried before the wind to the ends of sky and earth,
  the agent of the storm.
- **Recognition as a right** (262.1–262.18): god after god is told "do not be ignorant of Unas – you know him, he knows
  you"; to know and be known is to belong.
- **Invited, not self-made** (262.20–262.21): "not of himself did Unas come: it is a message that came for him".
- **The sky as water** (262.22–263.14, 268.14–268.15, 270): reed-floats, ferry, ferry-fee waived, crews of the
  horizon and of Qebehu; heaven is crossed like the Nile.
- **Many ways up** (267, 269.9–269.11, 270.11–270.13, 271.6): a stairway, incense smoke, bird's wings, a beetle's
  descent, the goddesses' thighs, Thoth's wing, Re's ladder – if one is refused, another is taken.
- **Rebirth as infancy** (268.5, 269.14–269.16): Isis rears, Nephthys suckles, the hippopotamus mother Ipy gives her
  "white, bright, sweet" milk – and then "he will not hunger, will not thirst, ever" (269.18).
- **Animals with a voice** (270.9–270.10): no living, no dead – no duck, no bull – has a complaint against Unas before
  the ferryman.
- **Leaving the earthly body behind** (267.14, 275.4): far from wife and kilt; the garment laid on the ground.
- **The hymn's theology of eating** (273-274.5, .14–.15, .23, .33, .52–.59, .63–.65): what is eaten becomes the eater;
  the king lives "on his fathers", eats magic, swallows power, the gods' hearts, lungs, perception, ba and shadow.
- **The young outranks the old** (273-274.8–273-274.9, .20, .47): "he begot him – he is stronger than he"; the eldest is
  slaughtered and the king becomes "elder than the eldest".
- **A divine kitchen** (273-274.25–273-274.41): lasso-gods, guards, binders, a stabber (Khonsu, "the wanderer", here a
  butcher), Shesmu of the press as cook; meals by rank (great ones for breakfast, middle for supper, small for night,
  the old as fuel); cauldrons heated with the elders' thighs.
- **Crowns as food** (273-274.53–273-274.54): "the Red" is blood and the Red Crown, "the Green" raw meat and the Green
  (Wadjet) – to eat them is to swallow kingship.
- **Hidden names, free will** (273-274.6, .19, .61): a name his mother does not know; the god "whose name is hidden";
  the epithet "If-he-wishes-he-does, if-he-hates-he-does-not".
- **Two eternities** (273-274.60–273-274.62, .66): nḥḥ (recurring) and ḏ.t (enduring), mirrored in "appearing,
  appearing; enduring, enduring".
- **The tomb's protection** (273-274.67–273-274.68, 276): evildoers shall not hack at his "favourite place among the
  living"; a snake spell guards the passage.

### Key parallels
- 273-274.1–273-274.2 ↔ Joel 2:10 `לְפָנָיו רָגְזָה אֶרֶץ רָעֲשׁוּ שָׁמָיִם` / `שֶׁמֶשׁ וְיָרֵחַ קָדָרוּ וְכוֹכָבִים אָסְפוּ נָגְהָם` [equivalent]:
  the sky darkens and the earth quakes before the coming power; Judg 5:20 `הַכּוֹכָבִים מִמְּסִלּוֹתָם נִלְחֲמוּ` [divergence]
  (stars as a living host – fighting there, trembling here).
- 273-274.23 [absent]: no biblical parallel to the hymn's core (a king or god eating gods to absorb their power);
  eating as a metaphor only (Mic 3:3, Deut 32:42).
- 273-274.32, .51 ↔ Mic 3:3 `וְאֶת עַצְמֹתֵיהֶם פִּצֵּחוּ וּפָרְשׂוּ כַּאֲשֶׁר בַּסִּיר וּכְבָשָׂר בְּתוֹךְ קַלָּחַת` [equivalent image /
  divergence of use]: the cooking pot and the broken bones as a prophet's metaphor for oppression.
- 273-274.39, .64 ↔ Ezek 24:4–5, 10 [equivalent]: thigh and shoulder in the pot, bones as fuel beneath it.
- 273-274.20 ↔ Ex 12:29 [absent]: smsw "eldest" rendered `בכיר`, not `בכור` – no slaying of the firstborn here.
- 271.6 ↔ Gen 28:12 `סֻלָּם` [equivalent / divergence]: the ladder (*mꜣq.t*) between earth and sky – made by Re, climbed
  by the king himself; 267.3 the stairway (*tꜣ-rd*) [divergence].
- 263.15 ↔ Isa 14:12 `הֵילֵל בֶּן שָׁחַר` [divergence]: the morning star as kin of a ruler in the sky – fallen there,
  family of the rising king here.
- 269.14 ↔ Isa 60:16 `וְשֹׁד מְלָכִים תִּינָקִי` [equivalent]: nursing at a royal / divine breast; 269.18 ↔ Isa 49:10 (as UN3
  204.5).
- 271.10 ↔ Ps 110:1 `שֵׁב לִימִינִי` [equivalent]: the king seated beside the god.
- 263.1 ↔ Ex 2:3 `תֵּבַת גֹּמֶא`, Isa 18:2 `וּבִכְלֵי גֹמֶא` [divergence]: Nile reed craft – the sun's and the king's here.

### Lines shared with other texts
- 273-274.45 = UN6 254.7 (copied; only `wr` and `=f` differ – noted in the entry); UN8 299.5 (Pepi II) should copy
  the same line, with `wr`? as its Egyptian has it.
- 269.18 ≈ UN3 204.5 (`לא יצמא אונאס …, לא ירעב אונאס …`; the order of 269.18 follows its own Egyptian).
- 270.4 `בא אונאס אליך,` = UN9 307.15 (`jyi̯.n Wnjs jr=k`; 307.17 ≈): UN9 should copy it.
- 271.2 is similar to UN1 52.2 (Allen; not yet drafted).
- Inside UN7: the 262 litany (262.1 / .4 / .7 / .10 / .13 / .16; 262.5 / .8 / .11 / .14 / .17; the `ייאמר עליך`
  lines); 263.1–263.4; 263.13 ≈ 263.14; 269.3 ≈ 269.4; 269.5 ≈ 269.6; 270.6 ≈ 270.8; 270.9 ≈ 270.10; 271.8 / 271.9;
  273-274.34 ≈ .36; 273-274.63 ≈ .65.

### Proposals for the shared renderings
1. **Terms**: smsw / sms `בכיר` (never `בכור`); jꜥj "ascend" `נסק`; ḏꜣj transitive `העביר`; zḫn.wj `שתי
   רפסודות־הקנים`; mẖntj `מעבורתן`; tꜣ-rd `מעלות`; wḥꜣ.t `קלחת`, ktj.t `כירה`, kꜣp.t `מוקד`; ḏꜣd `דקר`; mds `קטל`;
   mšrw.t `סעודת־ערב`; ꜣḫ.w "power" `גבורות` confirmed for the PT keys (BD's); ḥkꜣ `קסם`; šps.w `פאר`; srḫ `טענה`;
   Ḥr=f-ḥꜣ=f `פניו־מאחוריו` (for UN8–UN9's ferryman spells).
2. **Formula**: the PT 262 litany `אל תתנכר לאונאס, X: הרי יודע אתה אותו – הרי יודע הוא אותך.` and `ייאמר עליך: "…".`
3. **Names**: as listed under Decisions; Khonsu `חוֹנְסוּ` (NU5), Shesmu `שֶׁסְמוּ`, Ipy `אִיפִּי`, Nehebkau `נֶחֶבְּכָּאוּ`.
4. **Trap**: `גב` (back, sꜣ) must be vocalized `גַּב` beside Geb `גֶּבּ` (273-274.18).

### Lessons for the guidelines
- **A rendering can manufacture a biblical echo through a near-synonym**: "the eldest" (smsw) as `בכור` would have put
  Ex 12:29 into the Cannibal Hymn; `בכיר` keeps the sense and the distance. Check the famous-verse vocabulary of
  near-synonyms (`בכור` / `בכיר`) before fixing a word.
- **A remembered maqaf is a remembered verse**: four quotations drafted from memory carried Psalms-style hyphens or
  an invented clause (a "Lev 16"-like line that is not in the Bible); `--show` before every quotation caught them.

## UN8 (PT 277–301)

Round 8 run 1, translator 6 (2026-11-13). Files: `annotated-UN8.rtl.md`, `translation--intro-UN8.rtl.md`,
`translation-UN8.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The antechamber's **east wall** (PT 277–301): 127 rows, labels `277.1` … `301.36` (no rows 278.1, 293.3, 299.4: Allen's
lines the witness lacks; `278.2b`, `301.35b`: Allen's repeated numbers). Witnesses: Unas's own wall for 98 rows;
**Teti** (`{טטי}`) for PT 277, 280, 283, 289, 290, 292 (15 rows: the TLA did not record Unas's copies); **Pepi II**
(`{פפי ב}`) for PT 299 (4 rows, 299.3 and 299.5 almost wholly restored); **Allen 2013** (`{אלן}`) for PT 281 and 284
(10 rows). The text in a sentence: a second series of serpent and protective spells – mythic precedents (Horus fell
for his eye, Seth for his testicles), the refrain "fall! slither!", Mafdet leaping on the snake's neck, the nail, the
black knife, Osiris's sandal-straps and Horus's sandal, threats by the snake's own name – with whole spells of
unidentified (possibly Semitic) words (281, 285–286); then the ferry spell (300: Kherty, ferryman of the boat Khnum
made) and PT 301: cakes to the primeval pairs (Nun–Naunet, Amun–Amaunet, Atum–Ruty) so that they will not hinder the
king's crossing, and the great left Eye of Horus brought back "sound", named as oils, willow and faience.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN8`; Allen 2013's line under each row (a check; PT 281, 284 from it,
  never copied: the פירוק quotes only the words it parses).
- Rank 3: the TLA's German (`tr UN8`), read after drafting each group (277–288, 289–296, 297–299, 300–301; nothing for
  PT 281, 284 and most of 285–286). Allen 2005/2015, Faulkner 1969, Steiner 2011 only from memory, never quoted
  (Steiner only for the general claim).
- Precedents: a scratch lemma→Hebrew index built from the פירוק bullets of every drafted file (TLA id → Hebrew), then
  `lex` / `grep --all` for every new word (collisions found and fixed: see Progress log).
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 2:7, 2:22, 3:1, 3:8, 3:14, 3:15, 8:21,
  49:17; Ex 3:13, 25:5; Num 21:6, 21:9; Deut 32:10, 32:24; 2 Sam 12:30; Isa 1:16; Amos 6:6; Mic 7:17; Nah 3:8; Ps 58:5,
  58:7, 91:13, 133:2, 140:4; Song 1:3 (printed, not used: Ps 58:6, Ps 2:7, Deut 8:15, 32:33,
  Isa 14:13, 65:25, Jer 43:13, Job 20:16, Eccl 10:11, Ex 30:25, Gen 22:6, 2 Kgs 18:27).

### Decisions
- **The serpent vocabulary of UN5 binds** (renderings §13.6.3.2): `נחש` only for ḥfꜣw (298.2, the one occurrence);
  hjw `הִיוּ` (293.7, 298.6), kꜣ "male snake" `הזכר` (298.6; 299.3 `[זכר]`), ḏ.t `המזדקפת` (285.4, 299.1), zpꜣ `נַדָּל`
  (284.3, 299.1), the refrain `נְפוֹל! זְחַל!` (277.2, 289.2 byte for byte = UN5 229.3; 297.5 `נְפוֹל! שכב! זְחַל!` with
  sḏr), sḏr `שכב`, ḫr `נפל`, zbn `זחל` (also in 277.1 "Seth slithered", against the TLA's "strauchelte", so that the
  myth and the refrain sound alike), tf `ריר` (278.2b). `שרף` nowhere. Every other serpent word by sense or
  transliterated: ḫꜣz.t `המטפסת` (TLA 'Kletternde'), sḏḥ `הסֶגֶ׳ח` (NU10's form without `נחש`), wfj `וֶפִי`, hkj / hkr.t
  `הֶכִּי` / `הֶכֶּרֶת`, ṯṯw `צֶ׳צֶ׳וּ`, hmṯ / hmṯ.t `הֶמֶצ׳` / `הֶמְצֶ׳ת`, nꜣš.wtj `נָאשׁוּתִי?` (see Open), jꜣṯrn `אִיאָצֶ׳רֶן?`,
  nnj-mw.t=f `*דחוי־אמו*?` (TLA), nmj / nmj.t `*הנודד*` / `*הנודדת*`, bꜣꜣj ḥḏ `שוכן־החור הלבן`, fnṯ `תולעת`, jni̯-ḏi̯=f
  `מביא־מתנתו`, ḏsr-tp `קדוש־הראש` (UN7, NU).
- **299.5 copies UN7 273-274.45** changing only what the Egyptian changes (no wr; the king's name for =f):
  `{פפי ב} אשר ימצא [פֶּפִּי] [נֶפֶרְכָּרֶע] [בדרכו] – [יאכל] [הוא] [אותו] [לו], [*נָא*?].` – the result equals UN6 254.7's
  pattern with Pepi's name; brackets per the AED (⟨gmi̯⟩ and the restored ending `.y` not bracketed). 299.1 = UN5 240.1
  after Pepi II's `דברים לאמר:`. 293.7 = UN5 237.2; 298.6 follows UN5 226.3 (+ `הזכר,`); 282.4 = the second half of UN5
  238.3; 290.1 opens like UN5 228.1; 293.6 like UN5 226.4.
- **Verbs**: ḫsf `הדף` (301.9, SI/MK precedent) – also 278.2's stative, read as passive `*נהדף*?` (TLA: "having
  approached"); ṯfj / ṯjf `נוּס` (vocalized; `הסתלק` is rwj's, `ברח` wꜥr's); jfn `סוֹב` (`הסתובב` is UN4's nnj);
  šꜣs `דרס` (`רמס` is NU6's ḫbḫb); jki `אַטֶּה` (נטה = bend and stretch out, like jki); šꜥ `חתך` (NU8); sṯꜣ `משך`
  (AM); sšr `רוקן`; pꜣḫ `שרט`; bšj `הקיא` (AM); ḫsf / ḥwj / tkk `הדף` / `הכה` / `תקף`; jmn `הסתיר`; jꜥj `נסק` (UN7,
  also 301.21 where the TLA has "nähern") beside sjꜥ `העלה` (301.32); jꜣq `עלה` (301.20); qd `בנה` (301.13,
  renderings §4.1); sꜥnḫ `החיה` (vocalized `הַמְחַיֶּה`, `יְחַיֶּה`); wtṯ `הוליד` (MT, NU6); smn `קבע`; sḥtp `הניח את
  דעת` (AM, NU); wꜥb `טהר`, sꜥb `זיכך` (UN7), sbꜣq `הַזְהֵר` (vocalized; NU9 `מַזְהִיר`); ssn `נשם`; nꜥj `הפליג`; ḫnz
  `שוטט`; bꜣ (verb) `היה לבָּא`, spd `חד`.
- **Nouns**: nḥb.t `צוואר` (SI B138; `עורף` is wsr.t's in UN3 and sꜣ's in SI); ḏnj.t `חבית` (`קנקן` is WE's ḏwjw);
  nm `סכין` vs ds `מאכלת` (UN4, UN6); sḫ.t `מכה` (WE 12,17); nšz `טיפת־ארס`; mtw.t "venom" `ארס` (298.4 – see Open);
  tp(j).w-rʾ `שיני־פיך`; rwḏ `רצועת־סנדל`, ṯbw.t `סנדל`; ꜥn.t `ציפורן` (UN5); ḥꜣj "Beistand" `סומך` (`מגן` is AM's ḫwj);
  ḥkn.w "praise" `תהילה` (UN5 238.3) and the verb ḥkn `הלל`, ḥknw-oil `שמן־חֶקֶנוּ` (SS); pꜣ.t `עוגה` (AM); ṯ.wt
  `שולחן`; šw "shade, shelter" `סוכך` (`צל` is šw.t's, UN7; `מחסה` is mk.wt's, UN6; `בצלם` would trip the צלם gate);
  jd.t `ניחוח` (a third scent word beside sṯ `ריח` and bdd `בושם`; never next to `ריח`); zmj.t `השממה` (ḫꜣs.t is
  `המדבר`); ḥw.t "rain" `גשם` (WE); wꜣḏ (stone) `האבן־הירוקה`; ḥꜣ.tt `שמן־משובח` (NU9); ṯḥn.t `צְ׳חֶנֶת` (NU5); ṯr.t
  `עֲרָבָה` (vocalized); ꜣqs `*גלימה*` (`בגד` is gated to the garment words); wrr.t `הגדולה` (UN7); ꜣꜥꜥ.w
  `*דוברי־הלשון־הזרה*?`.
- **Names fixed here** (first occurrence vocalized): Bꜣbj `בָּבִי` (NU1); Ḫntj-Ḫm `אשר־בראש־חֶם` (with `[היתר שער: חם …]`
  in the entry: the חם gate does not see `Ḫm` after a hyphen); Ḫrtj `חֶרְתִּי`; Nzꜣ.t `נֶסָאת`; jqh.t `האִיקְהֶת`; Ḫnmw
  `חְנוּם` (AM); Zkr `סוֹכַּר` (NU2); Rʾ-sṯꜣw `רֶא־סְטָאוּ` (NU1); Pḏw `פֶּגֶ׳וּ`; Nn.t `נָאוּנֶת`; Jmn / Jmn.t `אָמוֹן` /
  `אָמוֹנֶת`; Rwtj `שני־אריות` (NU); mẖnm.tj `המְחֶנְמְתִי?`; Nḥj `נֶחִי`; Šꜣ.t `שָׁאת?`; Šzm.t `שֶׁסְמֶת`; Ḫnz.wt `חֶנְסוּת`;
  Rnn-wtt `רֶנֶנוּטֶת`; Zḫn-wr `אופף־גדול` (NU9); Sbk `סֻבֶּךְ` (renderings §13.2; NU7 `סוֹבֶּךְ`); Ṯḥnw `צְ׳חֶנוּ` (not
  `לוּב`: the Bible's Lubim come from the later Rbw); ḥꜥpj `חַעְפִּי` (MR); ḏꜥꜥmjw `גַ׳עַמְיוּ`; Min `מִין` ★, Mafdet
  `מָאפְדֶת`.
- **Rejected**: `נחש` for any serpent word but ḥfꜣw (nꜣš.wtj included); `פתן`, `צפע`, `שפיפון`, `אפעה`, `עכשוב`; `רמס`
  for šꜣs (taken; Ps 91:13 stays in the apparatus); `מבול` / `שטפון` for ḥw.t (`גשם`); `לוב` for Ṯḥnw; `מצבה` for tḫn
  (284.5, transliterated); `בגד` for ꜣqs; `צל` / `מחסה` for šw.

### Open decisions for the user
- **mtw.t** (tla854515) is `זרע` in UN3 215.16 and UN4 219.76 (seed) and `ארס` here (298.4, a snake's venom): one
  Egyptian word for the body's potent fluid; two Hebrew words by context. Unify (and how), or keep the split?
- **nꜣš.wtj** (297.1), TLA "[eine Schlange (?)]": it sounds like Semitic *nḥš* `נחש`; kept transliterated `נָאשׁוּתִי?`
  with a hedged [cognate] (hypothesis) row. If the lead wants it licensed for `נחש`, the gate needs tla852810.
- **ḫsf in 278.2** read as a passive stative `*נהדף*?` (keeping the lemma's `הדף`); the TLA reads an active "having
  approached". Acceptable?
- **ṯfj `נוּס`, jfn `סוֹב`, šꜣs `דרס`, nḥb.t `צוואר`, ḏnj.t `חבית`, šw `סוכך`**: each chosen to avoid a collision with an
  earlier key's word for another lemma; the lead may prefer to re-assign.
- **PT 281, 284, 285.2–286.4**: mostly unidentified words, transliterated with `?` (Steiner's Semitic readings not
  used). A check against Steiner 2011 could translate some.
- **300.3–300.4**: the AED/TLA reading `sn=nj pw` "our brother (?)" followed; Allen reads "these two brothers" (the
  ferrymen).
- **jk.t `*התגרות*?`** (282.1) shares `התגרות?` with AM 21.10 (štm, also uncertain).

### Progress log
- Built the lemma→precedent index (scratch). Drafted 277–284 (26 rows), read `tr`, wrote the entries, `fill` +
  `verify` (0 problems); 285–292 (27 rows); 293–299 (33 rows); 300–301 (41 rows). `verify UN8`: 0 problems after each.
- Pass (a) fidelity: brackets of 299.2–299.5 word by word (šꜣ[s]=[f] unbracketed: the body is written; 299.5 ⟨gmi̯⟩
  unbracketed); the Teti / Pepi / Allen variants noted where Unas's own reading differs (277.1 kꜣ for Seth, 283.1 third
  person, 289.1, 290.1 sꜣb, 299.1 no ḏd-mdw, 300.3–300.4); every sḏm=f / sḏm.n=f / stative checked (291.1–291.2 and
  301.18–301.19 statives, 293.5 jmi̯=f "lest"); 301.33 read transitive with the TLA ("purify Unas"); bullet order
  normalized in every entry; the nꜣš.wtj note softened (no attribution to Steiner).
- Pass (b) consistency: every new Hebrew word grepped across the corpus; six collisions fixed (ṯfj `ברח`→`נוּס`, jfn
  `הסתובב`→`סוֹב`, šꜣs `רמס`→`דרס`, nḥb.t `עורף`→`צוואר`, ḏnj.t `קנקן`→`חבית`, šw `מחסה`→`סוכך`); the refrains and
  copies compared with UN5 / UN7 (above); `אוּנָאס` vocalized at its first line (278.3); `אֵלִים` vocalized throughout
  (trap).
- Pass (c) Hebrew: the generated `translation-UN8.rtl.md` read through: 300.3–300.4 punctuation, `הַמְחַיֶּה` / `לֵךְ`
  vocalized; three footnotes added (281.1 the foreign spells, 299.5 the Cannibal Hymn's line, 301.17 the Eye).
- `build UN8`: 127 lines, 3 footnotes. `check_bible_quotes.py` on the annotated, intro and translation files: 0
  problems. `verify UN8 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **Myth as precedent** (277.1, 289.1): "Horus fell because of his eye, Seth slithered because of his testicles" – the
  gods' own wounds are the pattern the snake must follow: "fall! slither!".
- **The word that recoils** (283.3, 284.2–284.3, 292.1–292.2): "O taker, do not take!"; "the attacker attacked";
  "your approaches are for your approacher" – the snake is defined by its act, and the act turns back on it.
- **The name is the weapon** (287.1, 293.5, 301.10–301.11): the snake fears that Unas will say its name ("Wanderer, son
  of a Wanderess"); conversely Unas "knows the god's name" – knowing names is power and passport.
- **Sound as substance** (278.2b, 279.1–279.2, 281, 285–286, 292.1): *hn tf hn tn*, *tkkj tkkj*, *phtj pṯtj*,
  *kbnw zbnw* – the spells are built of repeated syllables; some may be a foreign tongue, written as heard.
- **The gaze is contact** (288.2, 293.2): "Eye of Unas, do not look at him"; "do not let Unas see you" – sight joins
  the two, so it is forbidden both ways.
- **The snake as a messenger** (288.3): "do not do your mission against Unas" – someone sent it; the spell cancels the
  errand.
- **Humiliation** (287.1–287.2, 297.4–297.5): the snake "rejected by its mother", falling in its own excrement and urine
  before the eyes of its mother Nut.
- **Animals and goddesses as protectors** (295, 297–298): Mafdet, the small predator, leaps on the snake's neck; her
  claw is the knife; Re's uraeus rises against the snake of the earth – snake against snake; Renenutet, the cobra
  goddess of harvest, "loves you" (301.26).
- **The tread of the king** (298.2, 298.5, 299.2): the snake "under Unas's toes", the four straps of Osiris's sandal,
  Horus's sandal that tramples.
- **Rebirth from a jar** (294.3–294.6): Unas sleeps in his jar and comes out; his appearing is at dawn – burial as
  gestation, the sunrise as birth.
- **The ferry made by the potter god** (300.1): Khnum, who shapes men on the wheel, made the boat that takes the dead
  king across.
- **Feeding the oldest gods** (301.1–301.9): cakes for the primeval pairs, who made, begot and established the gods –
  and in return they must not hinder the king; the offering is a contract.
- **The Eye returned whole** (301.17–301.19): the left eye (the moon), torn out by Seth, brought back "sound" (*wḏꜣ.t*,
  the wedjat) with its water and its red in it.
- **Names that are things** (301.20–301.25): a pun on every line – ascend / garment, brow / finest oil, rejoice /
  willow, shine / faience, praise / ḥknw-oil: the name is the nature of the thing, and the sound links them.
- **The king at the four quarters** (301.14–301.16, 301.29–301.31): three Horuses of the south and east, the crown taken
  from the Libyans in the west, Sobek sailing in the west, the scents of Shezmet in the east.

### Key parallels
- 298.3 ↔ Gen 3:15 `הוּא יְשׁוּפְךָ רֹאשׁ` [divergence]: the snake's head cut off now, by a goddess's knife-claw, not a
  lasting enmity; 298.2, 299.2 ↔ Gen 3:15 `וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב` [divergence]: the snake under the king's toes, the
  sandal victorious.
- 298.2 ↔ Ps 91:13 `עַל-שַׁחַל וָפֶתֶן תִּדְרֹךְ` [equivalent]; 299.2 and 298.5 ↔ Ps 91:13 `תִּרְמֹס כְּפִיר וְתַנִּין`
  [equivalent / divergence]: treading on the serpent.
- 298.4 ↔ Ps 58:7 `אֱלֹהִים הֲרָס שִׁנֵּימוֹ בְּפִימוֹ` [equivalent]: the snake's teeth pulled from its mouth – Psalm 58's
  image (after the deaf adder and the charmers, 58:5–6) is here a working spell; 285.1 ↔ Ps 58:5 `חֲמַת-נָחָשׁ`, Ps 140:4
  [equivalent]: the venom in the mouth.
- 277.1, 297.5 ↔ Gen 3:14 `עַל גְּחֹנְךָ תֵלֵךְ` [divergence]: falling and crawling – first the gods' fate, then a
  command, not a curse for all time; 277.2 ↔ Mic 7:17, Deut 32:24 `זֹחֲלֵי` [equivalent]: the crawler's verb.
- 288.2 ↔ Num 21:9 [divergence]: looking at the bronze serpent heals; here the king's eye must not look at the snake.
  288.3 ↔ Num 21:6 [divergence]: the snake as a sent agent. 288.1 ↔ Gen 49:17 [divergence]: the snake on the road.
- 301.13 ↔ Gen 2:22 `וַיִּבֶן` [equivalent]: a god "builds" a living body (qd); 2:7 [divergence].
- 301.22 ↔ Amos 6:6 `וְרֵאשִׁית שְׁמָנִים` [equivalent]: the finest oil called "first" in both languages.
- 301.25 ↔ Song 1:3 `שֶׁמֶן תּוּרַק שְׁמֶךָ` [divergence]: name/oil wordplay in both cultures, independently.
- 301.29 ↔ 2 Sam 12:30 [equivalent]: taking the crown of foreign kings.
- 294.1 ↔ Ex 25:5 `עֲצֵי שִׁטִּים` [cognate: loanword šnḏ.t]; 297.1 nꜣš.wtj ↔ Gen 3:1 `נָחָשׁ` [cognate, hypothesis only].

### Lines shared with other texts
- 277.2 = 289.2 = UN5 229.3 (`נְפוֹל! זְחַל!`); 297.5 = the refrain with sḏr (UN5 226.3's `שכב`).
- 293.7 = UN5 237.2 (`הִיוּ, שכב!`); 298.6 ≈ UN5 226.3 (+ `הזכר,`).
- 299.1 = `דברים לאמר:` + UN5 240.1; 299.5 = UN7 273-274.45 / UN6 254.7 (changed only for wr and the name; above).
- 282.3–282.4 ≈ UN5 238.3 (split over two lines; `שורך הוא זה, הנכבד, אשר נעשה זה נגדו.` identical).
- 290.1 = 290.3 (first half = UN5 228.1); 293.6 ≈ UN5 226.4.
- Inside UN8: 294.4 = 294.6; 294.3 ≈ 294.5; 291.1 ≈ 291.2; 301.2 = 301.4; 301.1 / 301.3 / 301.5 (`עוגתך – לך, X`);
  301.14–301.16 (`בא אונאס אליך, X`); 301.18–301.19 (`X בה, שלמה`); 301.20–301.25 (`בשמך זה, "X"` / `בשמה זה, "X"`).
- With UN7: 301.14 `בא אונאס אליך,` = UN7 270.4; 301.21 jꜥj `נסק` = UN7 267.14. For UN9: the ferry spells may take
  300.1's `מעבורתן` and Kherty `חֶרְתִּי`.

### Proposals for the shared renderings
1. **Terms**: ṯfj `נוּס`; jfn `סוֹב`; šꜣs "trample" `דרס`; nḥb.t `צוואר`; ḏnj.t `חבית`; nm "knife" `סכין` (ds `מאכלת`);
   sḫ.t `מכה`; šw "shade, shelter" `סוכך`; jd.t `ניחוח`; pꜣ.t `עוגה`; ḥkn `הלל` / ḥknw `תהילה`; wtṯ `הוליד`; ḏ.t
   (body) `גְּוִיָּה` confirmed; ḥꜣj `סומך`; mtw.t: `זרע` / `ארס` by context (Open).
2. **The name formula of PT 301**: `m rn=k pw n(,j) X` = `בשמך זה, "X"` (fem. `בשמה זה, "X"`), extending UN4's `בשמך "X"`.
3. **Names**: Kherty `חֶרְתִּי`, Nesat `נֶסָאת`, Naunet `נָאוּנֶת`, Amaunet `אָמוֹנֶת`, Renenutet `רֶנֶנוּטֶת`, Shezmet
   `שֶׁסְמֶת`, Khensut `חֶנְסוּת`, Nehy `נֶחִי`, Pedju `פֶּגֶ׳וּ`, Tjehenu `צְ׳חֶנוּ` (never `לוב`); Sobek: one form for the
   corpus (`סֻבֶּךְ` §13.2 vs NU7 `סוֹבֶּךְ`).
4. **Gate**: the `חם` gate's licence `(?<![\w,.-])ḫm` misses the place name Ḫm after a hyphen (`Ḫnt(,j)-Ḫm`, 278.2);
   handled here by `[היתר שער: …]`. Proposal: let the hyphen precede (`(?<![\w,.])`) for Letopolis.
5. **Trap**: `סוֹב` / `נוּס` unvocalized read as other words ("סוב" is rare, "נוס" is fine) – no trap needed; `הַזְהֵר`
   (sbꜣq) must stay vocalized ("beware!").

### Lessons for the guidelines
- **A lemma→Hebrew index across the corpus pays for itself in a spell text**: half the words of these spells are new,
  and six first choices collided with another lemma's Hebrew in an earlier key; `grep --all` on each new word after
  drafting caught them (the collision list belongs in the pass (b) log).
- **The rank-3 "parallel" is sometimes just a word's sound**: nꜣš.wtj "sounds like `נחש`"; keep such a word
  transliterated, tag the contact as a hypothesis, and let the lead decide – never license the biblical word on a
  sound alone.
- **A pun chain (PT 301's "in its name of X") is explained, not imitated**: a Hebrew pun of one's own (`ערב` /
  `עֲרָבָה`) would add what the Egyptian does not say.

## UN9 (PT 302–321)

Round 8 run 1, translator 7 (2026-11-13). Files: `annotated-UN9.rtl.md`, `translation--intro-UN9.rtl.md`,
`translation-UN9.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The antechamber's **north wall** (PT 302–312) and the **corridor** (PT 313–321): 198 rows, labels `302.1` … `321.3`.
Witnesses: Unas's own wall for 129 rows; **PT 303** read from Allen (`{אלן}`, 12 rows; the backticked line is the tool's
reference); **PT 304** from Pepi II (`{פפי ב}`, 13); **PT 306** from Merenre (`{מרנרא}`, 18; 306.17–306.18 partly
restored); **PT 308** from Neith (`{נית}`, 9); **PT 310** from Pepi I (`{פפי א}`, 9; 310.1–310.2, 310.9 partly
restored); **PT 318** from Teti (`{טטי}`, 8). PT 313.2–313.4 has restorations on Unas's wall. The text in a sentence:
the king flies up from mankind as falcon, goose and kite; the gods watch "how beautiful the sight!"; Re and Horus tie
a ladder for him, one on each side, and he climbs between them ("akh to the sky, corpse to the earth"); strange
guardians (Anubis's daughter on the ladder's uprights, an ostrich, a four-horned bull, a two-faced ferryman) are asked
to open the way; he is a Heliopolitan, a wild bull, Re's secretary who seals his rolls; in the corridor the doors of
the sky open, he is the screeching baboon, Sobek rising with the flood, lord of semen, Babi lord of the night – and
in the pyramid's last line he spreads his protection over Re.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN9` (lemmas, morphology, glosses); Allen 2013's line under each row
  (a check, never copied; PT 303 from it, the פירוק quoting only the words it parses).
- Rank 3: the TLA's German (`tr UN9`), read after drafting each group (302, 303–304, 305–306, 307–308, 309–310,
  311–312, 313–317, 318–321; nothing for PT 303). Allen 2005/2015 and Faulkner 1969 from memory only, in a few words,
  never quoted (the first draft of 302 had English glosses attributed to Allen: removed in pass (a)).
- Precedents: the scratch lemma→Hebrew index (TLA id → the Hebrew in the פירוק bullets of every drafted file, rebuilt
  with UN8), then `lex` / `grep --all` for every new word.
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Gen 3:19, 5:24, 6:2, 28:12, 28:13, 28:17,
  28:18, 35:14, 38:18; Ex 19:4; Deut 32:11; 2 Sam 12:9; 2 Kgs 2:11; Isa 6:2, 14:13, 14:14, 40:31; Amos 9:2; Ps 24:7,
  24:9, 55:7, 139:8; Prov 23:5; Job 28:13, 39:26; Eccl 12:7; Dan 4:30 (used: Gen 3:19, 6:2, 28:12, 38:18; 2 Sam 12:9;
  Isa 40:31; Ps 24:7; Eccl 12:7; Dan 4:30).

### Decisions
- **The ladder** (304.2, 305.1–305.2, 306.9): mꜣq.t = `סֻלָּם` (gated; licensed by the line); mꜥꜣꜥ.wj "the two uprights"
  `שני זקפי הסולם`; ṯꜣz "tie" `קשר` (the ladder is *knotted*, not "set up"); 306.9 `בשמה זה, "סולם"` (UN8's name
  formula: the sky itself "in its name of Ladder"). PT 310 (Pepi I) has **no** ladder word – it is a ferry spell; the
  ladder spells of the wall are 304–306 (and UN7 271).
- **Copies**: 307.15 = UN7 270.4 `בא אונאס אליך,` byte for byte (renderings §13.6.5.1); 307.17 begins with it; 314.2 =
  UN5 229.3 / UN8 277.2 `נְפוֹל! זְחַל!`; 302.21 = 302.7 (only the god and m-ꜥb / mm differ); 307.11 / .12 / .14 and
  308.6–308.9 litanies; 310.1–310.4.
- **Witness forms kept**: Pepi II `פֶּפִּי נֶפֶרְכָּרֶע` (first occurrence vocalized), Pepi I `פֶּפִּי`, Teti `טֶטִי`, Neith
  `נֵית` (the queen and the goddess, 308.8); Merenre's PT 306 has "the father" (jt) where Unas has his name (noted).
- **⟨ ⟩ not carried**: 318.1 `⟨j:sšmi̯⟩` (a whole word the editor supplies) is left out of the Hebrew, per the brief.
- **n sḏm=f**: past by UN3's rule (302.12), but **future in the curse of 307.9–307.14** (the TLA's reading; the context
  is a curse on a god who blocks the king) and in 302.4–302.5 (a promise); noted in each entry.
- **Terms fixed here** (each grepped): dḫ `התחבא`; qfn `רכן` (`כופף` is qꜥḥ's); sḏr "spend the night" `לן` (UN5's
  `שכב` kept for "lie"; a sense split, noted); ḥtm "perish" `נשמד` (NU's השמיד); ḫbn.t `אשמה` (MT's ḫnb.t); wḫꜣ.w
  `טפרים`; smn `אווז` (WE); ḏr.t `דַּיָּה` (UN5); ḥnk.t `המקורבת`; ptr.w `אשנבים`; njw `יען`; bjk.t `עיר־הבז` (NU6); snḫ
  `טיפח` (`גידל` is ꜣṯj's); šwꜣ `מסכן` (SI; `עני` is twꜣ's); mꜣw "sight" `מחזה` (`מראה` is jrw's); jwnwj `בן־אוֹן` /
  `בת־אוֹן`; ty `ציה?` (`עֲרָבָה` is the willow, UN8); hꜣb.t `שליחה` (`משלוח` zb.t, `שליחות` wpw.t); ḥtmwt `החֶתֶמוּת?`;
  hnw (boxes) `ארגז` (NU9); mḏꜣ.t `מגילה`; ḫsbb `נבלם` (`הדף` is ḫsf's); šnṯ `גידף` (BD 125); nfꜥ `הניס` (`הרחיק` is
  ḏr's); šꜣp.t `סגריר` (`סופה` is AM's pḫpḫ); jgp `ענן־הגשם`; bḫḫw `שרב` (`להט` is ꜣm's / hh's); ngꜣ "slaughter" `קטע`
  (`שחט` rḫs, `קטל` mds, `טבח` sšm); ꜥr.t `שֵׁת` (vocalized; `פי־הטבעת` would trip the טבעת gate; `אחוריים` is pḥ.wj's);
  jmꜣḫ `חוט־השדרה`; mḥy.t `שיטפון` (HC); ḥꜣj "naked" `עירומות` (NU8 96.9 `חשוף`, but `חשף` is kfj's: a split for the
  lead); ꜥntjw `מור` (SI); wsr.wt `חוסן`; zbj `הוביל` (WE, SI; `שלח` is hꜣb's); ḏsr `קידש` (NU6); ḫsbḏ `סַפִּיר`
  (renderings §4.2); šmšm.t `קנבוס?`; ꜥqꜣ `חבלי־הספינה`; qnj-ḥr `צהוב־הפנים`; šsꜣ.t `רדת־הלילה`; stp zꜣ `פרש חסות`
  (NU9); sšmj `מְנַחֶה` (vocalized: unvocalized it reads ꜥꜣb.t's `מנחה`).
- **Names fixed here** (first occurrence vocalized): msḫtjw `מֶסְחֶתְיוּ` (the Big Dipper); Jtꜣ(tj) `האִיתָאתִי?`;
  qbḥw `קְבֶחוּ` (UN7); ḥwt-ḥrw `חַתְחוֹר` (HC); Nfr-tm `נֶפֶרְתֵּם` (renderings §11.11); bꜣw P / Nḫn `בָּאֵי פֶּה` / `בָּאֵי
  נֶחֶן`; Dwꜣw `דּוּאָו`; jmnw "the Enduring (bull)" `הנשאר` (pun with j:mn `הישאר`, 306.17); Jꜣrw `האגמון`;
  twt.tj-jb `שתי שוות־הלב`; ḏḥꜣj `הגֶ׳חָאִי?`; Nḥ.t-nṯrw `נֶחֶת־הָאֵלִים?`; Ḥr=f-m-ḫnt=f / Ḥr=f-m-mḥꜣ=f
  `פניו־לפניו` / `פניו־באחורי־ראשו`; Ḥꜣ=f-m-ḥꜣ=f `אחורי־ראשו־מאחוריו`; the ferry j:pꜣ=s-ḫnn=s `עפה־ונוחתת`;
  jwj.t `המשאירה־בלי־סירה`; khꜣw `הקֶהָאוּ?`; jzkn `אִיזְקֶן?`; pꜣṯṯ `פָּאצֶ׳צֶ׳`; ḥmj `חֶמִי?`; ꜥbš `העַבֶּשׁ`;
  ḏsr.t `הקדושה`; jkn.t `האִיקֶנֶת?`.
- **Rejected**: `סופה`, `משלוח`, `עני`, `מראה`, `גידל`, `כופף`, `הדף`, `הרחיק`, `שחט`, `טבח`, `קטל`, `להט`, `חשף` for
  the new lemmas (each taken by an earlier key); `בכור` (smsw `בכיר`, 303.8, UN7's rule); `מלאך` (gated; wpwtj
  `שליח`); `עֲרָבָה` for ty; `פי־הטבעת` (the טבעת gate).

### Open decisions for the user
- **sḏr** `לן` (302.10, "spend the night", the TLA's gloss) beside UN5's `שכב` for the same lemma – a sense split.
- **ḥꜣj** `עירומות` (308.5) vs NU8 96.9 `חשוף` (one lemma, two words; `חשף` is kfj's in SS, AM and 302.8).
- **The ladder of PT 310**: the coordinator's brief lists 310 among the ladder spells; Pepi I's copy (the base) has
  no mꜣq.t – it is the ferry spell of Face-in-front / Face-behind. Nothing to translate as `סולם` there.
- **302.24**: the composite cuts the line after `pꜣ pꜣ`; the AED record (and Unas's wall) continues `rmṯ pꜣ r=f Wnjs =j
  m-ꜥ=ṯn` ("people, Unas flies away from you"). The Hebrew follows the base line, the rest is in the note and a
  footnote. A tool problem (below).
- **311.3, 311.7**: the AED gives two layers of the wall (1st person and its correction to 3rd); both are translated
  in sequence. Keep, or translate only the corrected layer?
- **321.1** sfr.t ḥtp.t (TLA: one unexplained object) – `הסֶפֶרֶת?, *הנחה*?`; Allen's later variants have "Content of
  Form, Khnum's eye".
- **ty** `ציה?`, **jmnw** `הנשאר`, **mn** `נשאר` (AM) / stative `קבוע` (SI, UN7): the pun of 306.16–306.18 uses both.

### Progress log
- Drafted 302 (24 rows), saved, `fill` + `verify` (0 problems), then `tr`, then the תרגומים bullets (the first draft's
  English glosses ascribed to Allen were replaced by the TLA's German; the הקבלה tag "[shared motif]" corrected to
  [divergence]); 303–304 (25 rows); 305–306 (33); 307–308 (27); 309–310 (16); 311–312 (19); 313–317 (26); 318–321
  (28). `verify UN9`: 0 problems after each group.
- Readings changed after the TLA: 304.12–13 (three appositions, not a nominal sentence); 307.1–307.2 (*m* "in"); 307.5
  (Nefertem at the head of the people); **307.7–307.14** (a curse on the god who raises his arm, not a description of
  Unas: future tense); 311.10–311.11 (one long sentence: the four khꜣw "who speak in painful roar … so that they not
  stretch out their arm"); 311.13–311.14 (concessive "even if"); 313.2–313.3 (*wn* active, Unas its subject); 314.1
  (the bull "to be slaughtered"); 318.5–318.7 (purpose clauses).
- Pass (a) fidelity: brackets of 306.17–306.18, 310.1–310.2, 310.9, 313.1–313.4 checked word by word (a restored suffix
  or prefix not bracketed; a half-restored word bracketed whole); 303.4 `ו` removed (not in the Egyptian); 303.11 `jw`
  given its `ו`; 318.1 ⟨ ⟩ omitted; every negation checked (n … js 305.15; n sḏm=f / n sḏm.n=f).
- Pass (b) consistency: collisions found by `grep` after drafting and fixed: `סופה` (AM pḫpḫ) → `סגריר`; `משלוח` (SS
  zb.t) → `שליחה`; `מנחה` → vocalized `מְנַחֶה`; first `אוּנָאס` vocalized (302.2); the copies above byte for byte.
- Pass (c) Hebrew: the `>` lines read through as a sequence; quotation marks added for the dialogues (305.8–305.9,
  306.1, 306.10, 310.8–310.9).
- `build UN9`: 198 lines, 3 footnotes. `check_bible_quotes.py` on the three files: 0 problems. `verify UN9 --strict`:
  0 problems, 0 repeated-line differences.

### The text on its own terms
- **Ascent is flight** (302.6–302.24): men hide, gods fly; the king's face is falcons, his wings birds, his nails a
  raptor's; he "takes his arms as a goose" and "beats a wing as a kite" – the kite being Isis and Nephthys mourning
  Osiris (302.10, 302.23): the mourners' wings carry the dead up. "The flier flies – people, Unas flies from you!"
- **No case against him** (302.16–302.19): before he can rise, no claim may remain against him on earth or in the
  sky; he "removes his word" – the dead, too, can be sued.
- **The ladder is tied, not set up** (305.1–305.5): Re and Horus knot it, "one on this side, one on that", and the king
  climbs between them; Anubis's daughter sits on its uprights (304.2); and the sky itself becomes a ladder "in its name
  of Ladder" (306.9) – naming makes it so.
- **"Akh to the sky, corpse to the earth"** (305.10): death as a division of the person; the body stays and is kept,
  the akh acts above.
- **The scribe's afterlife** (305.13–305.15, 309.3–309.7, 303.11–303.12): a heir without a document is poor; the king
  writes "with the big finger, not the little"; he opens Re's chests, breaks the seals of his decrees, seals his rolls
  and sends tireless messengers – heaven as a palace chancery.
- **A curse on a blocking god** (307.7–307.14): any god who stretches out his arm against the king will have no bread
  among the gods, no messenger, no door of the sun-barks opened to him, no hearing in his city.
- **Identity as a magical bond** (310.1–310.4): "should Pepi be conjured, Atum is conjured; should Pepi be struck, Atum
  is struck" – an attack on the king is an attack on the creator.
- **The two-faced ferryman** (310.7–310.9, 321.1): "Face-in-front, Face-behind", asking "which ferry shall I bring you?"
  – answer: "She flies up and alights".
- **The wall corrected** (311.3, 311.7): the scribes copied a first-person spell and corrected it on the stone to the
  third person; the AED keeps both layers.
- **The body in full** (315.2, 317.10–317.11): the baboon's contorted dance; the king eats, urinates and copulates –
  life is a body that works, not a pale shade; "lord of semen, who takes wives from their husbands".
- **The Nile flood as resurrection** (317.1–317.7): the king comes as Sobek at the head of the inundation, makes the
  horizon's banks green, brings faience to the great Eye.
- **The last word** (321.3): after asking along every wall to be received by Re, the king ends by spreading his
  protection over Re.

### Key parallels
- 305.1 ↔ Gen 28:12 `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` [equivalent] (with [divergence]): the
  same instrument between earth and sky, a divinity beside it; but in Genesis angels go up *and down*, no one is named
  as setting it up (`מֻצָּב`), and Jacob only dreams and stays on earth; here Re and Horus knot it for one man, who
  climbs once and does not return. Also 304.2 [equivalent], 306.9 [divergence] (the sky itself is the ladder).
- 305.10 ↔ Eccl 12:7 `וְיָשֹׁב הֶעָפָר עַל הָאָרֶץ כְּשֶׁהָיָה; וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים אֲשֶׁר נְתָנָהּ` [equivalent]
  / [divergence]: the same division of the person at death; Qohelet's is every man's lot and the spirit "returns",
  Unas's akh is himself, acting above. Gen 3:19 [divergence] (only the dust).
- 313.2 ↔ Ps 24:7 `שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם` [divergence]: heavenly doors opened to a king who enters – in the Psalm
  YHWH, here the dead king.
- 302.23 ↔ Isa 40:31 `יַעֲלוּ אֵבֶר כַּנְּשָׁרִים` [divergence]; 309.6 ↔ Isa 40:31 `יֵלְכוּ וְלֹא יִיעָפוּ` [divergence]: wings
  and tireless strength, a metaphor of renewal there, a real ascent and real messengers here.
- 302.16 ↔ Dan 4:30 `שַׂעְרֵהּ כְּנִשְׁרִין רְבָה וְטִפְרוֹהִי כְצִפְּרִין` [divergence]: a man whose body becomes a bird's – in
  Daniel a degradation, here deification.
- 317.11 ↔ Gen 6:2 `וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` and 2 Sam 12:9 [divergence]: a divine (or royal) taker of
  wives – in Genesis a step toward the flood, in Samuel a sin, in the pyramid a royal prerogative.
- 309.5 ↔ Gen 38:18 `חֹתָמְךָ` [cognate]: ḫtm is the source of Hebrew `חוֹתָם` (a loanword).
- 2 Kgs 2:11 (Elijah taken up) and Isa 14:13: printed and considered; not attached to a line – the corridor's ascent
  has no chariot and no hubris (the king succeeds, as in UN3's 214.12 note).

### Lines shared with other texts
- 307.15 = UN7 270.4 (`בא אונאס אליך,`; the Egyptian has jr=k for ḫr=k); 307.17 opens with it.
- 314.2 = UN5 229.3, UN8 277.2 / 289.2 (`נְפוֹל! זְחַל!`).
- 313.6 ≈ 310.5 (`אונאס הוא חוֹרוּס.` / `פפי הוא חוֹרוּס;`).
- 310.7 Face-behind and 321.1 Back-of-head-behind continue UN7's ferryman `פניו־מאחוריו` (270.1) with their own names.
- Inside UN9: 302.7 ≈ 302.21; 304.3 ≈ 304.5 ≈ 304.8; 305.1 ≈ 305.2; 307.1 ≈ 307.2; 307.11 ≈ 307.12 ≈ 307.14;
  308.1 ≈ 308.2; 308.6–308.9; 310.1–310.4; 320.4 / 320.6 (`אדון רדת־הלילה`).

### Proposals for the shared renderings
1. **Terms**: ṯꜣz (the ladder) `קשר`; mꜥꜣꜥ.wj `זקפי הסולם`; jwnwj / jwnwt `בן־אוֹן` / `בת־אוֹן`; šwꜣ `מסכן`; mꜣw
   `מחזה`; hꜣb.t `שליחה`; ḫsbb `נבלם`; šnṯ `גידף`; nfꜥ `הניס`; šꜣp.t `סגריר`; bḫḫw `שרב`; ngꜣ `קטע`; ꜥr.t `שֵׁת`
   (vocalized); mḥy.t `שיטפון`; ḏsr `קידש`; zbj `הוביל`; stp zꜣ `פרש חסות`; snḫ `טיפח`; qfn `רכן`; dḫ `התחבא`.
2. **Traps worth adding**: `מנחה` for sšmj must be vocalized (`מְנַחֶה`; else ꜥꜣb.t's "offering"); `שֵׁת` (buttocks)
   vocalized beside Seth `סֵת`; `אֵל` vocalized when it is a vocative "O god" (else the prohibitive `אַל`).
3. **Names**: the Big Dipper msḫtjw `מֶסְחֶתְיוּ`; Hathor `חַתְחוֹר` (HC's form) for the PT keys; the ferry
   `עפה־ונוחתת`; the ferrymen `פניו־לפניו`, `פניו־באחורי־ראשו`, `אחורי־ראשו־מאחוריו`.
4. **Tool problem (for the lead)**: `composite-UN.tsv` cuts the last row of some AED records short (302.24 ends at word
  149 of 157; also UN1 32.7, 34.8, 35.6, 43.4, 79-80.7, 81.10, 95.2, 110.3, UN2 170.3 – the word range of the last row
  stops before the record's last words). Worth checking in `make_composite.py` before UN1–UN2 are drafted.

### Lessons for the guidelines
- **A curse can masquerade as a description**: a chain of negated sḏm=f lines (307.9–307.14) read as statements about
  the king until the TLA's single long sentence showed they are the punishments of a hostile god; read a litany of
  negations against the sentence it hangs from before choosing the tense.
- **The AED sometimes keeps two layers of the wall** (a 1st-person spell corrected on the stone to the 3rd person, 311.3,
  311.7): the TLA marks them with {{ }} / [[ ]] in its translation only; check `tr` for such marks when a line repeats
  itself oddly.
- **Check the composite's last row of each record against the AED word count** (302.24 lost half its words).

## UN1 (PT 23–116)

Round 8 run 1, translator 8 (2026-11-13). Files: `annotated-UN1.rtl.md`, `translation--intro-UN1.rtl.md`,
`translation-UN1.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The burial chamber's **north wall, registers i–ii**: the **offering ritual** (PT 23–116), 217 rows (labels `23-24.2` …
`116.3`, with the repeated spells `32#2`, `32#3`, `25#2` in wall order). Witnesses: Unas's own wall for 109 rows; Queen
Neith (`{נית}`) 67 rows; Pepi I (`{פפי א}`) 21 rows (37, 38, 41, 42, 51, 53, 57, 87, 90, 92, 96); Allen's transcription
(`{אלן}`) 20 rows (PT 39, 40, 44, 52, 86). Preservation: Unas's rows intact; Pepi I's rows heavily restored (37.2–38.3,
53.2, 87.2, 90.2, 92.2–92.3, 96.2); Allen's 52.3 lost. The text in a sentence: purification (enemies seized, cool water,
two natrons, incense), the opening of the mouth (the *psš-kf* knife, "divine metal", the breast of Horus and of Isis),
then item after item – wine, beer, the "fluid" of Osiris, the seven sacred oils, green and black eye-paint, cloth, the
altar, the royal and court offerings, breads, a meat cut – each handed over as "the Eye of Horus", each with a rubric
naming the item and its count.

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN1` (TLA lemmas, morphology, German glosses); Allen 2013's lines (a
  check; for PT 39, 40, 44, 52, 86 the source of the translation, never copied: the פירוק parses Allen's words only).
- Rank 3: the TLA's German (`tr UN1`), read after drafting each group (23–36, 37–57, 72–96, 108–116). Allen 2005/2015
  and Faulkner 1969 from memory, in a few words, never quoted.
- Precedents: `lex` / `grep --all` for every recurring lemma (a batch lookup of all 180 content lemmas against every
  drafted key: UN3–UN9, PT600, HC, BD/NU, AM, TB, WE, SS, SI).
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Jer 2:22; Ps 141:2, 133:2, 50:13 (not used),
  23:5 (not used); Lev 1:9, 2:1, 3:11, 6:9 (not used); Num 6:26, 19:12, 28:2; Ezek 16:9–10, 23:40; 2 Kgs 9:30; Ex 30:25;
  Isa 6:7; Deut 26:14, 34:7; Job 28:18; 2 Sam 12:20 (not used).

### Decisions
- **UN5's passage copies bind** (renderings §13.6.3.1): 23-24.2–23-24.5, 23-24.7, 25.2, 25.4–25.6, 32.1–32.6 copied byte
  for byte; 25.3 adds `הלך אוֹסִירִיס עם הכָּא שלו;` (the Egyptian adds it); 25.7 *ḏi̯.n* = `נתתי` (UN5 *rḏi̯.n*); 25.8
  carries the scribe-omitted `⟨ḏd-mdw zp 4⟩` (read whole: `דברים לאמר, ארבע פעמים:`, as 25#2.8 writes it); 32.7's rubric
  (`qbḥ.w bd ṯꜣ 2`) differs from UN5's (`rḏ.t qbḥ.w`) and is rendered as written; 32#2.7 / 32#3.7 = UN5's `נתינת מי־הצינה.`.
  `verify`: 0 repeated-line differences.
- **The formula** `m n=k X` = `קח לך X` everywhere (also for `jṯi̯ n=k`, UN5's precedent), Neith's copy included: Neith's
  rows keep the template's masculine grammar (`=k`, `pn`, `pw`), so `קח לך`, `נֵית זה`, `פיך`; the TLA emends to the
  feminine ("diese{m}〈r〉 Neith"), we translate as written and say so (intro, 45.2, 81.5). The frame: `אוֹסִירִיס אונאס,
  קח לך את עין־חוֹרוּס, <relative clause>!`; `jꜥb n=k s(j) r rʾ=k` = `קבץ לך אותה אל פיך!` (87.2, 110.1; *jꜥb* = UN3's
  `קבץ`); `ḫwi̯ … sḏm=f` = `הגן – פן …` (88.2, 116.1; *ḫwj* = AM's `הגן`).
- **Rubrics** (renderings §13.6.3.1): action = verbal noun + full stop (`ניסוך.`, `נתינת מי־הצינה.`, `הרמה.`, `הנחה
  לפניו.`, `הגשה, ארבע פעמים.`); item = the bare noun, then the count: `לחם־וּט, אחד.`; with a vessel `יין, קנקן־גביש שחור,
  אחד.` / `שֵׁכָר, קערת־גביש שחור, אחת.`; with pellets `בורית, גרגר אחד.` / `בורית של הדרום, חמישה גרגרים, נֶחֶבּ.`;
  with bowls `מים, שני ספלים.`; the "meal:" heading `סעודה: שֶׁנֶס, אחד.`; `zp 4` inside a rubric `ארבע פעמים` (108.2) or
  `(ארבע פעמים)` (95.2, as `zp 2` `(פעמיים)`).
- **The offering items, fixed once (for UN2):** qbḥ.w `מי־הצינה`; bd `בורית` (plene; vocalized `בֹּרִית`; [equivalent] Jer 2:22),
  the verb bd `בירר` (109.1 `המבררת`: the Hebrew keeps the Egyptian pun, `בֹּרִית` < `ברר`); nṯr.j `נֶתֶר` (gated; the
  adjective nṯr.j "divine" `אֵלִי`); ṯꜣ "pellet" `גרגר`; snṯr `קטורת`; ḫ.t "fire" `אש`; zmjn `סְמִין` (unidentified); ḥzmn
  `התחטא` (HC 76 `מחוטא`); psš-kf `פֶּסֶשׁ־כֶּף`; bjꜣ "metal" `מתכת`; mnḏ `שד`; mnw "quartz" `גביש` (not `בדולח`: Gen 2:12);
  hꜣṯs `קנקן`; ḥnw.t `קערה`; ꜥ "bowl" `ספל`; ḏwj.w `כד`; ꜥrf `צרור`; jrp `יין`; ḥnq.t `שֵׁכָר`; ḥnq "fluid" `ליחה`; ḥḏ.w
  "onions" `בצלים`; pꜣ.t `עוגה` (UN8); wdn `זבח` (TB, NU10); ḥtp-ḏi̯-nzw `קורבן שהמלך נותן`; ḥtp-nzw `קורבן־המלך`;
  ḥtp-wsḫ.t `קורבן־החצר`; ḥtp (noun) `קורבן`, ḥtp.t `קורבנות`, ḥtp (verb) `נח` (sḥtp `הֵנִיחַ`, vocalized `יָנִיחַ`);
  ḏsr.t (table) `שולחן־גֶ׳סֶרֶת`, ḏsr.t (beer) `גֶ׳סֶרֶת`; ḫnms `חֶנֶמֶס`; ḫꜣw.t `מזבח` (WE); šb.w `סעודה` (UN6); jꜥ.w-rʾ
  `רחיצת־הפה`; the seven oils sṯj-ḥꜣb `ריח־החג`, ḥkn.w `חֶקֶנוּ`, sfṯ `סֶפֶצ׳`, nẖnm `נֶחֶנֶם`, twꜣ.wt `תְּוָאוֶת`, ḥꜣ.tt ꜥš
  `שמן־משובח של ארז`, ḥꜣ.tt ṯḥnw `שמן־משובח של צְ׳חֶנוּ` (ḥꜣ.tt = UN8's `שמן־משובח`); mḏ.t `מרקחת` (kept apart from
  mrḥ.t `משחה`, HC 75); sdm `כחל`, msdm.t `פוך` (BD 110), wꜣḏ.w `ירוק`; wnḫ.wj `שתי רצועות־בד`; breads tʾ `לחם`, tʾ-wt
  `לחם־וּט`, tʾ-rtḥ `לחם־רֶתֶח`, šns `שֶׁנֶס`, ḥṯꜣ `חֶצֶ׳א`, nḥr.w `נֶחֶר`, dp.t `דֶּפֶת`, pzn `פֶּזֶן`; sw.t `נתח־סוּת`, sw.tt
  `התמורה?`; ḥnk `הגשה`; fꜣj (rubric) `הרמה`, wꜣḥ `הנחה`.
- **Other terms:** jšš `עטש` (PT600); dp / dp.t `טעם` (SS, SI); zḥ-nṯr `אוהל־האל` (zḥ = UN3's `אוהל`); šms.w-Ḥr.w `מלוויו של
  חוֹרוּס`; nb.wj `שני האדונים`; twt `שווה`; psš `חילק` (SI); smn `קבע` (UN6); hp "escape" `נמלט`; nḥm `נטל` (UN3); bjꜣ
  "go away" `סר`; tj "crush" `כתש`; jtḥ `משך` (UN6); šnm `צירף`; twꜣ "support" `תמך`; sfkk `*התייסר*?` (TLA "gelitten?"),
  ḫmḫ `חִמְחֲמוּ?` (unknown, transliterated), nšbšb `*התענג*?`; snḏm `הנעים`; ḥꜣ.t "forehead" `מצח`; rs `הקיץ` (UN3);
  ḥtp.w "peace" `שלום` (UN6); ksj `התכופף` (UN6), ks.w `התכופפות`; ḏwj "call" `קרא`; ḏnd `זעם`; sḫt `ניצוד` (AM `צָד`); jꜥj
  `רחץ` (UN7); šzp `קבל` (UN4); nḥr "resemble" `דמה`; pꜣz "suffer" `סבל`; zḫn `חבק` (HC 84; UN3's jnq is the piel `חיבק`).
- **Names fixed here:** נֵית ★ (the queen and the goddess); Nḫb (Elkab) `נֶחֶבּ`; Š.t-p.t `שֶׁתְפֶּת`; Tꜣj.t `תָּאיִת`, Tꜣj.tt
  `תָּאיִתֶת`; Dp `דֶּפּ`; Ḫnt(j)-jmn.tjw `חֶנְתִּי־אִמֶנְתִּיו` (§13.2); the Two Ladies (nb.tj) `שתי הגבירות`; wr-ꜥ
  `גדול־האפריון`; wḏꜣ.t `הוּגָ׳את` (§4.3).
- **Allen-only rows (PT 39, 40, 44, 52, 86):** translated from Allen's line (Unas's variant, his name written); the three
  rows whose Allen entry is only a cross-reference ("see PT 39/51/85": 40.1, 52.1, 86.1) are `{אלן} (ראו 39.1)` etc.;
  52.2 and 52.4 (unidentified words) transliterated with `?` (`אָחֶ?` vocalized so as not to read as the akh `אָח`).
- **Rejected:** `נתר` for bd (NU3 105.3 has it: a split for the lead, below); `איפה` "where?" (gated: `היכן`); `חֶתֶם` for
  the mineral ḥtm (57.3; the `חתם` gate blocks it – `קערת־אבן?`, see Problems); `בדולח` for mnw; `ניחוח` / `ריח ניחוח` for
  ḥtp (the Lev 1:9 parallel stays in the apparatus); `קודש` for ḏsr.t; `כוחל` (modern) for msdm.t.

### Open decisions for the user
- **Neith's masculine grammar** kept as written (`קח לך`, `נֵית זה`); the TLA emends to the feminine. Alternative:
  feminine Hebrew (`קחי לך`, `נֵית זו`) with a note that the template is masculine.
- **ḥtp "be content" = `נח`** (the corpus rule) makes `ינוח לך רַא`, `נח הוא בגללה` – faithful to the root shared with
  the offering (ḥtp), but stiff; the alternative is `רָצָה` / `התפייס` for the verb (one lemma, two Hebrew roots).
- **jšš `עטש`** (PT600's) for Horus and Seth "spitting out" zmjn (34.4–34.5) reads oddly; `ירק` is psg's (UN3). Keep?
- **mnw "quartz" `גביש`**, hꜣṯs `קנקן`, ḥnw.t `קערה`: the vessel words are conventional; the TLA calls hꜣṯs and ḥnw.t only
  "a jug / a vessel".
- **The unidentified words** (zmjn, zrw, šjkw, ꜣḥꜣḥj, kkj, ꜣḥ, sfkk, ḫmḫ, nšbšb): transliterated or italicized with `?`.

### Progress log
- Drafted 23-24.2–36.7 (39 rows), saved, `fill` + `verify` (0 problems; the UN5 copies identical), then the TLA's German
  read (36.3 "your natron is the natron of your natron (?)" confirmed the literal rendering; 34.5–34.6 the TLA's division
  of *twt* noted, the AED cut kept).
- Drafted 37.2–43.4 (23 rows), 44.1–57.3 (43), 72.2–96.3 (91), 108.1–116.3 (21), each group saved, filled and verified;
  `tr` read after each (47.2 hp "escaped"; 74.2 sfkk "suffered?"; 77.7 the sḏm.tj=fj form; 85.2 a wish; 113.1 ḥr=k "upon
  you", not "your face"; 113.3 the count "2" kept against the TLA's "1").
- Pass (a) fidelity: brackets of the Pepi I rows word by word (38.2 `ḏ(d)-[mdw]` → `[דְּבָרִים] לֵאמֹר:`; 90.1 / 92.1
  `[ḏ(d]-mdw)` → `דְּבָרִים [לֵאמֹר:]`; 57.2 `עין־[חוֹרוּס]`; 87.1 Osiris unbracketed – body written); every n sḏm=f / n
  sḏm.n=f by UN3's rule (32.5 past, 56.3 "cannot"); 81.9 witness tag added (verify).
- Pass (b) consistency: the UN5 copies and the internal repeats (32#2, 32#3, 25#2; 108.2 = 109.2 ≈ 112.2; 88.3 = 111.3;
  49.3 = 55.4; 47.1 = 75.1 = 78.1 = 84.1 = 91.1) – `verify`: 0 differences; every term grepped (above); the spell-opening
  `דְּבָרִים לֵאמֹר:` vocalized throughout, the mid-line `דברים לאמר, ארבע פעמים:` plain (UN5's usage).
- Pass (c) Hebrew: the generated `translation-UN1.rtl.md` read through; 77.7 `וגם כל אשר ישמע את שמו` (jsṯ moved to the
  head of the clause); 40.3 double punctuation `?.` removed; 44.2 `יָנִיחַ` vocalized ("give rest", not "put down").
- `build UN1`: 217 lines, 4 footnotes (23-24.2, 32.7, 35.1, 46.2). `check_bible_quotes.py` on the three files: 0
  problems. `verify UN1 --strict`: 0 problems, 0 repeated-line differences.

### The text on its own terms
- **The meal as theology** (the whole wall): every item – water, natron, wine, oil, bread – is "the Eye of Horus", the eye
  Seth tore out and Thoth healed; to eat is to receive the restored eye, and with it wholeness (25.7, 46.3, 79-80.2).
- **The pun is the rite** (43.3–43.4 ḥḏ / sḥḏ; 49.2 ḥnq / ḥnq.t; 56.3–56.4 bjꜣ "go away" / bjꜣ "metal"; 73.2 ḥnq /
  ḥkn.w; 74.2 sfkk / sfṯ; 75.2 šnm / nẖnm; 76.2 twꜣ / twꜣ.wt; 78.2 ḥꜣ.t / ḥꜣ.tt; 88.2 tj / tʾ-wt; 89.2 jtḥ / rtḥ; 114.1
  nḥr / nḥr.w; 116.1 pꜣz / pzn): each spell says what a god did to the eye in a verb that sounds like the item's name; the
  rubric then names the item – word and object are one. 109.1 survives into Hebrew: `המבררת` ~ `בורית`.
- **Natron makes divine** (35–36): *nṯr.j* "natron" sounds like *nṯr* "god"; "your natron is Horus's natron … your
  natron is the natron of your natron" – purification is becoming a god among "your brothers, the gods" (36.4).
- **Rebirth as a baby** (35.5, 37–42): the mouth cleansed "like the mouth of a milk-calf on the day it is born", the
  mouth opened with the knife that cut the umbilical cord, then the breast of Horus and of Isis – the first meal is milk.
- **The god's own fluids** (32.5, 48.2, 49.2, 55.2, 95.2): the libation and the beer are "the fluid that came out of you
  / out of Osiris" – the dead god is fed with what flowed from his own body, the source of the Nile's fertility.
- **The two halves of Egypt** (34.8, 35.6, 38.3, 39.4): southern and northern natron, metal, *zrw* – the whole land
  purifies the king; Horus and Seth together give the purifying substance and are "of one heart" (34.4–34.6).
- **Talking to things** (77.2–77.7): "Ointment, ointment, where have you been? – On Horus's forehead; I put you on this
  Unas's forehead", and the oil is asked to make him an akh and give him power over his body.
- **The dangerous dead** (93.6): the king calls his ka to protect him "from every wrath of the dead" – the hungry dead
  who would snatch the food.
- **A script with stage directions** (39.1, 51.1, 81.10, 93.7, 93.5b, 108.2): "he takes it to his arm, to his mouth",
  "lifting before his face", "placing before him", "words four times … offering four times".
- **Morning in the temple** (81.2, 110.3): "awake in peace" is the god's morning greeting, and breakfast is called
  "washing of the mouth".
- **A queen as Osiris** (Neith's rows): the masculine template is kept for a woman – the dead queen becomes the (male)
  Osiris.

### Key parallels
- 32.7, 35.2, 109.1 ↔ Jer 2:22 `כִּי אִם תְּכַבְּסִי בַּנֶּתֶר וְתַרְבִּי לָךְ בֹּרִית` [cognate (`נֶתֶר` < nṯr.j) / equivalent
  (`בֹּרִית` = bd)]: the ritual's two natrons are Jeremiah's two cleansers – which, in Jeremiah, cannot cleanse guilt.
- 46.2 ↔ Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` [divergence]: food for the dead is the heart of the Egyptian rite and
  the thing the Israelite tithe-giver swears he did not do; Num 28:2 `לַחְמִי לְאִשַּׁי` [divergence] (the god's bread vs
  the dead king's).
- 44.2 ↔ Lev 1:9 `רֵיחַ נִיחוֹחַ` [equivalent]: ḥtp "offering" and ḥtp "be at rest, content" are one word, as `נִיחוֹחַ`
  is from `נוח` – the offering pacifies; but here the dead king, not a god, is the receiver.
- 25.9 ↔ Ps 141:2 `תִּכּוֹן תְּפִלָּתִי קְטֹרֶת לְפָנֶיךָ` [equivalent]: incense as worship.
- 34.7 ↔ Num 19:12 `יִתְחַטָּא` [equivalent]: purification of/from the dead with a special substance.
- 79-80.2, 79-80.7 ↔ Ezek 23:40 `כָּחַלְתְּ עֵינַיִךְ`, 2 Kgs 9:30 `וַתָּשֶׂם בַּפּוּךְ עֵינֶיהָ` [equivalent]: eye-paint after
  washing; msdm.t is the source of Greek στίμμι.
- 81.10 ↔ Ezek 16:9–10 [equivalent]: washing, oil, clothing – the same sequence.
- 72.2 ↔ Ex 30:25 `רֹקַח מִרְקַחַת` [equivalent]; 77.2 ↔ Ps 133:2 `כַּשֶּׁמֶן הַטּוֹב עַל-הָרֹאשׁ` [equivalent].
- 34.2 ↔ Isa 6:7 [divergence]: a substance touching the mouth to purify it.

### Lines shared with other texts
- **UN5 (the passage)**: 23-24.2–.5, .7 = UN5 23-24#2.x; 25.2, 25.4–25.6 = UN5 25#3.x; 25.3 = UN5 25#3.3 + `הלך אוֹסִירִיס
  עם הכָּא שלו;`; 25.7 = UN5 25#3.7 (ḏi̯.n / rḏi̯.n); 25.8 = UN5 25#3.8 preceded by `דברים לאמר, ארבע פעמים:`; 32.1–32.6 =
  UN5 32#4.1–.6; 32#2.7 / 32#3.7 = UN5 32#4.7. `verify`: identical where the Egyptian is identical.
- **Inside UN1**: 32 ×3, 25 ×2 identical; 36.2–36.3 ≈ 35.2–35.4 (without the rubrics); 36.6 ≈ 25.7; 88.3 = 111.3; 89.2
  ≈ 112.1; 89.3 ≈ 112.3; 49.3 = 55.4; 108.2 = 109.2 ≈ 112.2; 87.2 ≈ 110.1; 47.2 ≈ 54.2.
- **For UN2** (PT 117–171): the frame `אוֹסִירִיס אונאס, קח לך את עין־חוֹרוּס, …`, `קבץ לך אותה אל פיך!`, the rubric
  pattern and the item list above; `data` shows UN2 123.1 ≈ 25.7.

### Proposals for the shared renderings
1. **The offering frame** (for UN2 and the renderings §13.4.3): `Wsjr NN m n=k jr.t-Ḥr.w X` = `אוֹסִירִיס NN, קח לך את
   עין־חוֹרוּס, X` (relative clause `אשר …`); `jꜥb n=k s(j) r rʾ=k` = `קבץ לך אותה אל פיך!`; `ḫwi̯ … sḏm=f` = `הגן – פן …`;
   Neith's rows masculine as written (open, above).
2. **The rubric pattern**: as under Decisions (item, count; vessel; pellets; `סעודה:`; actions as verbal nouns).
3. **The item list** (UN2 continues it): every item under Decisions; especially bd `בורית` / nṯr.j `נֶתֶר` / ṯꜣ `גרגר`; mnw
   `גביש`, hꜣṯs `קנקן`, ḥnw.t `קערה`, ꜥ `ספל`, ḏwj.w `כד`; ḥnq `ליחה` / ḥnq.t `שֵׁכָר`; the seven oils; sdm `כחל` / msdm.t
   `פוך`; the bread names transliterated after `לחם־` when tʾ is written, bare when not.
4. **Names**: נֵית ★, נֶחֶבּ, שֶׁתְפֶּת, תָּאיִת, תָּאיִתֶת, דֶּפּ, שתי הגבירות, גדול־האפריון.
5. **For the lead (splits found)**: NU3 105.3 renders bd `נתר` (now `בורית` in HC 76 and here: §13.3); jšš `עטש` (PT600)
   vs a "spit" verb; ḫwi̯ `הגן` (AM) vs UN4's nḏ `הגן`.

### Lessons for the guidelines
- **A gate on a loanword also blocks a transliteration that happens to spell it**: the mineral ḥtm (57.3) would be
  `חֶתֶם`, which the `חתם` (ḫtm "seal") gate blocks; a transliteration licence (by the line's own lemma) would help.
- **An offering list is best fixed as a table before drafting** (item → Hebrew, vessel → Hebrew, count pattern): the
  rubrics repeat with small changes (vessel, material, count), and a table keeps them aligned across UN1 and UN2.
- **Allen rows that are only a cross-reference** ("see PT 39") need a convention: here `{אלן} (ראו 39.1)`.

## UN2 (PT 117–171)

Round 8 run 1, translator 9 (2026-11-13). Files: `annotated-UN2.rtl.md`, `translation--intro-UN2.rtl.md`,
`translation-UN2.rtl.md` (generated), `translation.rtl.md` (generated).

### Scope
The burial chamber's **north wall, register iii**: the **offering ritual continued** (PT 117–171), 143 rows (`117.1` …
`171.2`). Witnesses: Unas's own wall 62 rows; Queen Neith (`{נית}`) 66 rows; Pepi I (`{פפי א}`) 15 rows (126, 147,
152, 162, 163); Allen's transcription (`{אלן}`) 6 rows (PT 167, 169). Preservation: Unas's rows intact (129.3 partly
restored); Neith's rows mostly intact (118.2–118.3, 124.2–124.3, 127.2–127.3, 128.2–128.3 restored); Pepi I's 147.1,
152.1–152.3, 162.1–163.2 heavily restored. The text in a sentence: the meal itself, dish after dish – breads and cakes,
onions, meat cuts (foreleg, thigh-bone, ribs, liver, spleen, roast, brisket), fowl (goose, white-fronted goose, pintail,
greylag, dove), four beers and four wines, figs, fruits and roasted grain – each "the Eye of Horus", each sentence
punning on the dish's name, each followed by the rubric (recitation note, item, count); PT 171 closes with a wish
("may it last for you, with you") and the wall ends on the word "offering".

### Sources consulted
- The base: AED-TEI through `egypt_tools.py data UN2` (TLA lemmas, morphology, German glosses); Allen 2013's lines (a
  check; for PT 167 and 169 the source of the translation, never copied: the פירוק parses Allen's words only).
- Rank 3: the TLA's German (`tr UN2`), read after the readings of all 55 spells were fixed. Allen 2005/2015 and
  Faulkner 1969 from memory, in a few words, never quoted.
- Precedents: `lex` for all 152 lemma ids of the key (a batch run), `grep` (Egyptian corpus and `--all`) for every new
  Hebrew word; UN1's annotated file and its Proposals (renderings §13.6.8); UN4 223 (the offering lines of the east
  wall); NU9 144.46 (the BD offering list).
- Bible verses printed with `check_bible_quotes.py --show` before quoting: Lev 1:14, 2:14, 3:4, 3:15 (not used), 7:34,
  23:14; Deut 8:8, 18:3, 26:14, 32:10; Num 6:19 (not used), 11:5, 28:2; Ex 12:8, 29:22 (not used); Gen 1:29, 2:21 (not
  used), 18:6; Ruth 2:14; Ps 50:13; Prov 7:2 (not used); 1 Sam 9:24, 17:17 (not used: ketiv `קליא`).

### Decisions
- **UN1's frame, rubrics and items copied byte for byte** (renderings §13.6.8): `אוֹסִירִיס אונאס, קח לך את
  עין־חוֹרוּס, אשר …!`; `הגן – פן …` (140.1, 154.1, 161.1–164.1, 168.1); `פתח בה את פיך!` (UN1 54.3 → 153.1, 155.1,
  156.1); `השלם את עצמך בליחה היוצאת ממך!` (UN1 95.2 → 148.1–151.1); Neith's rubric `{נית} דברים לאמר, ארבע פעמים:
  לנֵית זה. הגשה, ארבע פעמים.` (UN1 108.2, with each copy's own brackets); identical lines 121.1 = 141.1 = UN1 89.2,
  124.1 = UN1 112.1, 145.1 ≈ UN1 90.2, 147.1 ≈ UN1 91.2, 129.1/129.3 ≈ UN1 96.2/96.3, 145.3 = UN1 90.3, 147.3 ≈ UN1 91.3,
  171.1 ≈ UN4 223.11, 170.1 ≈ UN4 223.10. Neith's rows keep the masculine grammar (UN1's open decision).
- **Unas's own rubric** `ḏ(d)-mdw zp 4` alone (117.2, 130.2, 131.2, 137.2) = `דברים לאמר, ארבע פעמים:` (the formula,
  colon kept: it introduces the item line). **Pepi's rubric** (`… n Ppy pn fꜣ.t zp 4`) = `דברים לאמר, ארבע פעמים:
  לפֶּפִּי זה. הרמה, ארבע פעמים.` (fꜣ.t = UN1's `הרמה`); Allen's full rubric (167.2, 169.2) `… לאונאס זה. הרמת הגשה,
  ארבע פעמים.`; ḥnk.t, the noun (171.2, Allen's *ḥnkt*), = `הגשה` like the verbal noun ḥnk (one Hebrew for the verb and
  its noun, as ks / ks.w).
- **The measure word ꜥ** in Neith's rubrics = `ספל` (UN1 108.3), although the TLA lemmatizes it here as tla34360 ("arm;
  portion", glossed "Portion") and in UN1 as tla34370 ("Napf"): the same word in the same slot of the same wall (Allen's
  other pyramids have *ḥnw.t* "bowl" there). 125.3 (Unas, TLA "Bündel") likewise. Counts: `ספל אחד` / `שני ספלים`;
  Allen's *ḥnwt* `קערה` (167.3, 169.3); *ds* `כדים` (151.3, WE's precedent).
- **Counts** agree with the Hebrew noun (`עוגה, ארבע`, `כתף, אחת`, `יונה, אחת`, `צלע, ארבע`, `[תאנים], [שתיים]`); a
  transliterated bread or drink takes the masculine (`חֶבֶּנֶנֶת, ארבעה`, as UN1's `דֶּפֶת, ארבעה`).
- **New items** (Proposals below): breads/cakes transliterated (`אִמִי־תָא`, `חֶנֶף` (NU9), `חֶבֶּנֶנֶת` (NU9), `קֶמַח`,
  `אִידָאת`, `לחם־צלי`, `לחם־סִיף`, `שַׁעוּת`, `נֶפָּאת`, `מֶסוּת`); meat: ḫpš `כתף` (AM), jwꜥ `עצם־הירך` (NU9), zḫn.w
  `נתח־סֶחֶן`, spr `צלע`, ꜣšr.t `צלי` (UN4), mjz.t `כָּבֵד` (TB, vocalized), nnšm `טחול`, ḥꜥ `נתח־גוף` (ḥꜥ = `גוף`), ḥꜣ.t
  jwf `מצח־בשר (החזה)`; fowl: rʾ `אווז`, ṯrp `אווז־צֶ׳רֶפּ`, zꜣ.t `ברווזה` (UN7), srw `אווז־סֶרוּ`, mnw.t `יונה`; drinks:
  sḫp.t `סֶחֶפֶּת`, pḫꜣ `פֶּחָא`, sšr `שֵׁכָר־סֶשֶׁר`, jꜣ.tt `אִיאָתֶת`, ꜥbš `עֶבֶשׁ`; wines: jrp mḥ.wj `יין של הצפון` (UN1
  35.6's `של הצפון`), jmtj `אִימֶתִי`, ḥꜣmwj `חָאמִי`, snw `סְנוּ`; fruit and grain: dꜣb `תאנים` (gated, licensed), jšd
  `פרי־אִישֶׁד`, nbs `שיזף`, wꜥḥ `וַעַח`, sš.t `סֶשֶׁת`, bꜣbꜣ.t `בָּאבָּאת`, zw.t `סוּת` (the grain; homophone of the meat
  `נתח־סוּת`), ꜥgw.t `קלי` (NU9; `קלי־שעורה`, `קלי־[סוּת]`: the construct reverses the Egyptian order), rnp.wt `צמח רענן`
  (NU2).
- **New verbs and words of the sentences:** šzp `קבל` (UN4); tp `ראש`; ḫnf `*סחב*?` (TLA "weggenommen(?)"); ḥbnbn
  `*גולשת*?` (TLA "schlüpft hinunter (?)"); jbꜣ `רקד`; zf `עוול` (verb `יעוול`: hapax, akin to jzf.t); jwꜥ `יורש` (NU3);
  zḫn `חבק` (UN1; TLA here "suchst"); j:sšꜣ transliterated `תְּסַשֵּׁא?` (TLA "an Land bringst (?)"; `עגן` is mnj's,
  `חתר` ẖni̯'s); j:zꜣ `פנה` ("betake oneself"; the TLA's lemma is `המתין` in HC 29 / SI B65 – another sense); šmj `הלך`
  (relative without .n → `אשר הולך הוא`); jmj-ḫt `אשר אחרי`; srj `גדוע`; ḏr jb `(עד) קץ הלב` (TLA "nach Wunsch (?)");
  mzꜣ `קירב` (UN4 223.8; WE's mz `נגש`); sr `הכריז` (SS); mn `חלה` (NU1); šꜥ `חתך` (NU8); sjp `מסר` (PT571); szwn
  `*ציער*?`; sšn `*מעוגל*?` (UN4's j:šn); bš `הקיא` (AM, TB); ꜥm `בלע`; ḥwn.t `אישון`; ḥꜣm `דג` (NU7); snw "separate"
  `נשמט` (`הפריד` is wḏꜥ's, `נתק` fḫ's); šdj `חילץ` (AM, UN4); sšd `התעטר` (NU8 `עיטר`); zḫz `עקר`; nbꜣbꜣ `*מרפרף*?`
  (AM's `מפרפרים` is mꜥšꜥfj); nsb `ליחך` (UN5); wn (Allen) `פתח`; mꜣꜣ `חזה`; ꜥḥ `צד` (UN3); sḫt (Allen) `צד` (AM, UN1);
  bnj `מתוק` (SI); jp `מנה` (UN4 223.10; vocalized `מְנֵה`); dꜣp `מַקְנִים?` (hapax, TLA "darreichen").
- **Rejected:** `לקח` / `נטל` for ḫnf (jṯi̯'s / nḥm's); `חזה` for ḥꜣ.t jwf (the lemma is UN1's `מצח`; the brisket goes in
  parentheses and in the apparatus); `מפרפרת` for nbꜣbꜣ (AM's); `תיפרד` / `תינתק` for snw; `העניק` for dꜣp (mnj's in
  NU8); `כרות` for srj (WE's ḥsq); `יְעַוֵּל` vocalized (would strip to a defective spelling: `יעוול` plene).

### Open decisions for the user
- **ꜥ in Neith's rubrics = `ספל`** against the TLA's "Portion" (tla34360); the alternative `מנה` collides with (j)ḫ.t
  `מנה` (UN3).
- **spr `צלע`** (130.3) beside UN4 223.4's šbtjw `שתי צלעותיך` (two lemmas, one Hebrew): spr is the plain word for
  "rib"; alternatively šbtjw could move to `נתחי־צלעות`.
- **ḥꜣ.t jwf `מצח־בשר (החזה)`** – literal (keeps the pun with 134.1–135.1) or `חזה` by sense (Lev 7:34's word).
- **qmḥ `קֶמַח`** (121.3): the transliteration coincides with Hebrew `קֶמַח` "flour"; tagged [cognate] "uncertain" (a
  Semitic loan into Egyptian is possible, not proven).
- **The unidentified verbs** (ḫnf, ḥbnbn, sšꜣ, szwn, sšn, nbꜣbꜣ, dꜣp, ḫpḫ, ḫmḫ) – italic with `?` or transliterated.
- **j:zꜣ `פנה`** (132.1) – the TLA's lemma tla126320 is `המתין` in HC / SI; `פנה` is also used for other words in PT600,
  HC, SI, NU3.

### Progress log
- Read the line data whole; decided every reading before reading the TLA's German; then `tr UN2` (changed: 120.1 / 158.1
  ḥbnbn from a transliteration to `*גולשת*?`; 137.1 the idiom "as the heart wishes" kept literal with a note; 128.1 the
  TLA's "suchst" noted against `חבק`).
- Drafted 117.1–129.3 (32 rows), 130.1–147.3 (46), 148.1–171.2 (65), each group saved, filled and verified (0 problems).
- Pass (a) fidelity: brackets of the Neith and Pepi rows word by word (118.2 `[ארבע] פעמים: [לנֵית]`; 126.1 `[עין]־חוֹרוּס`;
  147.1 / 152.1 / 163.1 `דְּבָרִים [לֵאמֹר:]` as UN1 90.1; 162.1 `[הירוקה]; [הגן] – [פן] …`); every n sḏm=f (127.1,
  142.1, 157.1 "does not / cannot"); relative forms with and without .n (128.1, 133.1 present; the rest past).
- Pass (b) consistency: the UN1 / UN4 copies and the internal repeats (117.2 = 130.2 = 131.2 = 137.2; the Neith rubric ×19;
  149.1 = 150.1 = 151.1; 152.2 = 162.2 = 163.2; 163.1 = 164.1; 167.2 = 169.2) – `verify`: 0 differences; every new
  Hebrew word grepped (collisions listed above and under Open decisions); `יְעַוֵּל` → plene `יעוול`.
- Pass (c) Hebrew: the generated `translation-UN2.rtl.md` read through; Deut 26:14, Num 28:2, Ps 50:13 added to the
  apparatus; four footnotes (117.1, 118.1, 123.1, 155.1).
- `build UN2`: 143 lines, 4 footnotes. `check_bible_quotes.py` on the three files: 0 problems. `verify UN2 --strict`: 0
  problems, 0 repeated-line differences.

### The text on its own terms
- **The menu is a myth told dish by dish** (the whole wall): every sentence says what was done to the Eye of Horus – torn
  out (163–164 zḫz), carried off (119, 159), eaten (145), spat out (154), licked (166), fished out of the water (156),
  rescued from Seth (160), worn on his forehead (135, 161) – and the dish that follows is named by a word that sounds
  like the verb. Eating the meal re-enacts the Eye's loss and recovery.
- **The pun is the rite** (as in UN1): *sbj* / *spr* (130), *šm* / *nnšm* (133), *mn* / *mnw.t* (140), *šꜥ* / *šꜥ.wt*
  (142), *bš* / *ꜥbš* (154), *ḥꜣm* / *ḥꜣm.wj* (156), *snw* / *snw* (157), *šd* / *jšd* (160), *sšd* / *sš.t* (161), *ꜥḥ*
  / *wꜥḥ* (168), *nsb* / *nbs* (166, a metathesis), *jwꜥ* "heir" / *jwꜥ* "thigh" (127).
- **The Eye is a living thing** (120.1, 158.1 "it slips down"; 165.1 "it flutters"; 156.1 fished; 168.1 hunted): it
  moves, escapes and is caught like a bird or a fish – the fowl and the drinks are its avatars.
- **Colour passes from the Eye to the food** (161–162): the white Eye → white grain, the green Eye → green grain.
- **The enemies become food** (130.1 "take those who rebel against you", 136.1 "the severed heads of Seth's followers"):
  victory over Seth is served at the table.
- **The god's own fluid** (148–151): the drinks are "the fluid that came out of you" – Osiris's body fluid, the Nile's
  flood, the source of barley and beer.
- **Inheritance at the table** (127.1): "Dance! Geb does not wrong his heir" – the meal celebrates the legitimacy of
  Horus, the son who inherits; the thigh (*jwꜥ*) is literally "the inheritance".
- **The pupil as a little person** (155.1): Egyptian *ḥwn.t* "maiden" and Hebrew `אִישׁוֹן` "little man" both see the tiny
  figure reflected in the eye.
- **A world of produce** (the rubrics): Delta wines named by their vineyards (Buto/Imet, Hamu, Pelusium), the sacred
  ished-tree of Heliopolis, Christ's-thorn fruit, tiger nuts – the whole land's harvest for the king.
- **The meal ends with a wish and a word** (171.1–171.2): "may it last for you, with you, with you" – and "offering".

### Key parallels
- 123.1 ↔ Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` [divergence]: feeding the dead is the heart of the Egyptian rite and
  what the Israelite tithe-giver swears he did not do; Num 28:2 `לַחְמִי לְאִשַּׁי` [divergence] (the god's bread vs the dead
  king's cake).
- 126.3 ↔ Deut 18:3 `הַזְּרֹעַ וְהַלְּחָיַיִם וְהַקֵּבָה` [equivalent]: the foreleg as the choice portion (the priest's /
  the dead king's); Ps 50:13 `הַאוֹכַל בְּשַׂר אַבִּירִים` [divergence]: the psalm denies that God eats meat – here the
  divinized king eats it.
- 135.3 ↔ Lev 7:34 `חֲזֵה הַתְּנוּפָה וְאֵת שׁוֹק הַתְּרוּמָה` [equivalent]; 132.3 ↔ Lev 3:4 `הַיֹּתֶרֶת עַל הַכָּבֵד`
  [divergence] (burnt for God vs eaten by the dead king).
- 140.3 ↔ Lev 1:14 `מִן הַתֹּרִים אוֹ מִן בְּנֵי הַיּוֹנָה` [equivalent]: the dove as offering.
- 163.3, 164.3 ↔ Lev 23:14 `וְלֶחֶם וְקָלִי וְכַרְמֶל`, Ruth 2:14 `קָלִי` [equivalent]: roasted grain.
- 131.3 ↔ Ex 12:8 `צְלִי אֵשׁ` [equivalent]; 125.3 ↔ Num 11:5 `הַבְּצָלִים` [equivalent]; 152.3 ↔ Deut 8:8 `וּתְאֵנָה`
  [equivalent].
- 155.1 ↔ Deut 32:10 `כְּאִישׁוֹן עֵינוֹ` [equivalent]: the pupil as the dearest thing, a "little person" in both
  languages.
- 170.3 ↔ Gen 1:29 `אֶת כָּל עֵשֶׂב זֹרֵעַ זֶרַע` [divergence]: all plants as food, for the living from the Creator vs
  for the dead king from the priest.
- 121.3 ↔ Gen 18:6 `קֶמַח סֹלֶת` [cognate] (uncertain): the bread *qmḥ*.

### Lines shared with other texts
- **UN1**: 121.1 = 141.1 = UN1 89.2; 124.1 = UN1 112.1; 124.2 / 128.2 = UN1 112.2; the Neith rubric (118.2 … 166.2) =
  UN1 108.2 (with each copy's brackets); 145.1 = UN1 90.2 (unbracketed); 145.3 = UN1 90.3; 147.1 ≈ UN1 91.2 (Pepi's
  frame, *ḫḫm* for *ḫmḫ*); 147.3 ≈ UN1 91.3 (count); 129.1 / 129.3 = UN1 96.2 / 96.3 (Unas's frame); 125.1 ≈ UN1 45.2
  ("his teeth" for "Horus's teeth", `השלמות` for `המשלימות את פיך`); 148.1–151.1 = UN1 95.2 (*ṯw* for *kw*); 153.1,
  155.1, 156.1 end = UN1 54.3; 133.1 ≈ UN1 39.2 (šmj for zj, present for past).
- **UN4**: 171.1 = UN4 223.11 + `אוֹסִירִיס אונאס,` and a second `אצלך`; 170.1 ≈ UN4 223.10 (imperative for the
  sḏm.n=f).
- **Inside UN2**: 117.2 = 130.2 = 131.2 = 137.2; 119.1 ≈ 159.1; 120.1 ≈ 158.1; 121.1 = 141.1; 149.1 = 150.1 = 151.1;
  161.1 ≈ 162.1; 163.1 = 164.1; 167.2 = 169.2; 152.2 = 162.2 = 163.2. `verify`: 0 differences.

### Proposals for the shared renderings
1. **The rubric of the other pyramids**: Neith's `לנֵית זה. הגשה, ארבע פעמים.` (UN1), Pepi's `לפֶּפִּי זה. הרמה, ארבע
   פעמים.`, Allen's full `לאונאס זה. הרמת הגשה, ארבע פעמים.`; Unas's own `דברים לאמר, ארבע פעמים:` alone.
2. **ꜥ (the rubric measure) = `ספל`** whatever the TLA's lemma id (tla34360 / tla34370); ḥnw.t `קערה`; ds `כד`.
3. **The items** listed under Decisions (meat cuts with `נתח־` + transliteration when unidentified; fowl with
   `אווז־` + transliteration; wines with their place names; grain `קלי־X`).
4. **Words**: ꜣšr.t `צלי`, mjz.t `כָּבֵד` (vocalized), nnšm `טחול`, mnw.t `יונה`, ḥwn.t `אישון`, nbs `שיזף`, ꜥgw.t `קלי`,
   spr `צלע` (open), jbꜣ `רקד`, zf `עוול`, srj `גדוע`, snw `נשמט`, sšd `התעטר` / `עיטר`, zḫz `עקר`, nbꜣbꜣ `מרפרף`.
5. **For the lead (splits found)**: ꜥ tla34360 `ספל` here vs `זרוע` everywhere else (the TLA's lemma for "arm"); ꜥḥ and
   sḫt both `צד` (UN3 / AM, UN1); jp `פקד` (UN3) vs `מנה` (UN4, here); j:zꜣ `המתין` (HC, SI) vs `פנה` here; mz `קרב`
   (UN4, here) vs `נגש` (WE); ḏwj.w `כד` (UN1) vs WE `קנקן`, and ds `כד` (WE, here); zḫz `עקר` here vs NU5 `ייסוטו`
   (bolts); spr / šbtjw `צלע`.

### Lessons for the guidelines
- **The TLA can lemmatize one rubric word differently in two records of the same wall** (ꜥ "Napf" in UN1's Neith rows,
  ꜥ "arm / Portion" in UN2's): a lemma-keyed consistency check would split it; key such measure words by their slot,
  and say so in the renderings.
- **A vocalized word must strip to its plene form**: piel forms with a doubled vav (`יְעַוֵּל` → `יעול`) cannot be
  vocalized without the extra vav; write them plene.

## Independent review: UN3, UN4

Round 8 run 1, the independent fidelity reviewer (2026-11-13; did not draft these files). **Checked:** every `>` line of
UN3 (184 rows, PT 204–218) and UN4 (209 rows, PT 219–224) against `egypt_tools.py data` (the base words, the TLA
morphology, Allen's line as a check), then against `tr`: words omitted or moved across lines; person, number, gender,
voice, tense and mood (passive sḏm=f, prospective sḏm.w=f, relative forms, negations, statives); brackets against the
base (§2.1); the witness tags (`{פפי ב}` PT 211, `{פפי א}` PT 212, `{טטי}` PT 224); one Hebrew per lemma (`lex`,
`grep --all`) inside the two keys and against the other UN keys; PT 217–218's refrains and PT 219's litany frame (all
24 copies grouped by their Egyptian: every identical source line has identical Hebrew, every deviation follows the
wall); the coordinator's scripted `דְּבָרִים לֵאמֹר:` openings (UN3 205.1, 207.1, 209.1, 210.1, 211.1, 212.1, 216.1,
217.1, 218.1; UN4 219.1, 222.1, 223.1): each reads well with what follows (223.1 is the rubric alone, as the AED
line is). Echo control: no new biblical phrase found; the reserved words pass `verify`. `build UN3 UN4`,
`check_bible_quotes.py` (0 problems), `verify UN3 UN4 --strict` (0 problems).

**Lines changed: 9** (UN3 3, UN4 6); the פירוק of each was updated.
- UN3 210.9: `שני הרעים האלה` → `שני הָרֵעִים האלה` – rḥ.wj "the two companions": unvocalized it reads "the two evil ones".
- UN3 213.4: `מקל, מטך – בידך:` → `מקל, שרביט־הנֶחֶבֶּת שלך – בידך:` – nḥb.t is `שרביט־הנֶחֶבֶּת` in UN4 224.14, where
  `מטך` is md(w): two lemmas in one Hebrew.
- UN3 214.11: `צועקת לך ההֶנְמֶמֶת` → `תצעק לך ההֶנְמֶמֶת` – kj.w is a prospective sḏm.w=f (TLA "werden … aufschreien").
- UN4 219.67: `"אשר־בקטורת"` → `"אשר־בעישון"` – kꜣp "fumigation"; `קטורת` is snṯr's (§13.3).
- UN4 219.75: `עונתך בשמים, עונתך בארץ` → `עתך בשמים, עתך בארץ` – tr (tla172700) is `עת` in the whole corpus (UN3 218.11,
  SI, NU).
- UN4 222.1: `[היוצאת] [מאָתוּם]` → `[היוצאת] [מ]אָתוּם` – `[(J]tm[,w)]`: the god's tm is written (J and w are never
  written); only the preposition m is restored.
- UN4 222.27: `עם [אביך] [אָתוּם]` → `עם [אביך] אָתוּם` – the same: Atum's tm is written.
- UN4 224.13: `בכל הדרך` → `בכל הֲדָרְךָ` – sꜥḥ "dignity": unvocalized it reads "the road".
- UN4 224.20: `בכל הדרך` → `בכל הֲדָרְךָ` – the same.

**Left as drafted (noted for the coordinator):** UN4 222.6 `[j]t(j)=f` `אביו` unbracketed (one of two signs restored:
the translator's reasoned choice, on the line of §2.1); the n sḏm=f lines in UN3 read as general / future (204.5,
209.1–2, 215.35 `לא תכלה`) beside UN4's past refrain `לא כָּלָה הוא` – both defensible for Old Egyptian, each context
by its own TLA reading; UN4 222.15 wr "great water" `אגם (גדול)` beside UN3 214.1 šj `האגם` (a near-collision, kept by
sense).

## Independent review: UN5, UN6, UN7

Round 8 run 1, the independent fidelity reviewer (2026-11-13; did not draft these files). **Checked:** every `>` line of
UN5 (124 rows, PT 226–246: the serpent spells and the passage), UN6 (206 rows, PT 247–260) and UN7 (198 rows, PT
261–276 with the Cannibal Hymn) against `egypt_tools.py data` (the base words, the TLA morphology, Allen's line as a
check), then against `tr`: words omitted or moved across lines; person, number, gender, voice, tense and mood (passive
sḏm=f, sḏm.n=f, the kꜣ-form, prospective sḏm.w=f, relative forms, statives, negations – n sḏm.n=f "cannot" in 254.6,
n…js in 262.20); brackets against the base (§2.1: 199.1–199.4, 244.1, 254.46–254.59, PT 267); the witness tags
(`{טטי}` PT 255–256, `{פפי א}` PT 267, `{אלן}` PT 271); one Hebrew per lemma (`lex`, `grep --all`) inside the three keys
and against UN3, UN4, UN8, UN9; the refrains and copies (229.3 = 233.3, 253.1 = 253.3, PT 262's litany, PT 263's
formula, 254.7 = 273-274.45, 270.6 / 270.8, 273-274.34–37: `verify` 0 repeated-line differences); the coordinator's
scripted `דְּבָרִים לֵאמֹר:` openings (UN5 226.1–243.1, sixteen spells; UN6 247.1–253.1, 255.1 after the tag `{טטי}`,
256.1, 257.1, 258-259.1; UN7 261.1, 262.1, 263.1, 268.1, 269.1, 270.1, 272.1, 275.1, 276.1; 267.1 is the base's own,
bracketed): each reads well with what follows. Echo control: no new biblical phrase; the reserved words pass `verify`.
`build UN5 UN6 UN7`, `check_bible_quotes.py` on the annotated and translation files (0 problems), `verify UN5 UN6 UN7
--strict` (0 problems).

**Lines changed: 11** (UN5 1, UN6 9, UN7 1); the פירוק (and where needed the הערות) of each was updated.
- UN6 260.5: `דן אונאס בין חסר־האב לחסרת־האב;` → `דן אונאס בין יתום ליתומה;` – the coordinator's ruling (renderings
  §13.6.4.3): tfn / tfn.t = `יָתוֹם` / `יְתוֹמָה`, the gate now licenses it; the הקבלה keeps Ps 82:3 and Deut 10:18
  ([equivalent]), the הערות now explain the ruling (the draft's `חסר־האב` recorded there).
- UN6 255.7: `הנח את הדרך לארץ` → `הנח את הֲדָרְךָ לארץ` – sꜥḥ "dignity": unvocalized it reads "the road" (the UN4
  reviewer's fix at 224.13, 224.20).
- UN6 255.8: `(ו)תניח את הדרך לארץ` → `(ו)תניח את הֲדָרְךָ לארץ` – the same.
- UN6 257.2: `"חוזים אנו (דבר) חדש!"` → `"חזינו (דבר) חדש!"` – mꜣ=n is read past by the TLA and Allen's variants
  have mꜣ.n.n (sḏm.n=f); the draft's present had no ground (its own note cited both).
- UN6 257.11: `(הוא) הבכור מן הגדול` → `(הוא) הבכיר מן הגדול` – smsw is `בכיר` in UN7 (263.7, 273-274.20, .39, .47
  `בכיר מן הבכירים`, renderings §13.6.5: no Ex 12:29 echo); `בכור` stays only in the name `חוֹרוּס־הבכור` (256.2, NU8).
- UN6 258-259.12: `הבכור שבאֵלִים` → `הבכיר שבאֵלִים` – the same (cf. NU7 136A.7 `הבכיר שבָּאֵלִים`).
- UN6 252.7: `מניף אונאס את שרביט־האָמֶס` → `מניף אונאס את אַלַּת־הָאַמֶס` – the ꜣms sceptre is `אלת־האַמֶס` in UN7 263.6
  (the noun; `שרביט־העַבָּא` is ꜥbꜣ's there); vocalized because unvocalized `אלת` trips the "goddess" trap.
- UN5 246.6: `אשר לא יוחזר הבָּא שלו` → `אשר לא ייהדף הבָּא שלו` – ḫsf (tla854535) is `הדף` in UN7 (262.24,
  273-274.26, .30), UN8 278.2, the Book of the Dead, SI and MK; UN5/UN6 alone had `החזיר` (AM's idiom "return an
  answer").
- UN6 251.9: `לא הוחזרה זרועו` → `לא נהדפה זרועו` – the same.
- UN6 258-259.21: `לא הוחזר לבו` → `לא נהדף לבו` – the same.
- UN7 267.14: `רחוק (אתה) מן האישה [ומן הסינר].` → `רחוק (אתה) מן האישה (ומן) [הסינר].` – only šnḏ.wt is restored;
  "and from" is the translator's addition (no word in the Egyptian), so it goes in `( )`.

**Left as drafted (noted for the coordinator):**
- n sḏm=f: UN5–UN7 follow UN3's rule (past) with reasoned exceptions (UN5 242.1, 246.6; UN6 258-259.2, 260.25; UN7
  269.18, 273-274.58, .67 future), while UN6 258-259.10–11 (`לא נפגע הוא`, `לא ישב הוא בוועד האל`) keep the past inside a
  promise the TLA reads as future – defensible by the rule, but the lead may prefer the future in such contexts.
- Brackets: UN6 254.46 `j[r]=[f]` `נגדו` and UN7 267.3 `⸢j⸣[r]` `אל` unbracketed (the r of jr restored, the j written;
  the suffix restored) – the same half-restored case as UN4 222.6 `[j]t(j)=f`, kept for consistency.
- Collisions (two lemmas, one Hebrew), kept by sense: zwr "drinking bowl" `קערה` (UN6 254.36) beside UN1's ḥnw.t `קערה`
  (`גביע` is TB's ṯbw); dbn `סבב` and pẖr `סובב` in one line (UN7 273-274.42); pẖr n= "serve" `סובב את` (UN6 257.5) /
  `מטפל ב־` (UN7 273-274.40, .48); jni̯ "reach the limit" `הגיע` (UN7 275.3) beside pḥ `הגיע` (262.25).
- UN6 254.18 mds.w (the noun "violent ones") `העריצים` follows NU's `עורץ`, beside UN7's verb mds `קוטל` (UN7's open
  question).
- 258-259.20 sḏr `שוכב (את הלילה)` beside UN9's `לן` (already open).

## Independent review: UN8, UN9

Round 8 run 1, the independent fidelity reviewer (2026-11-13; did not draft these files). **Checked:** every `>` line of
UN8 (127 rows, PT 277–301) and UN9 (198 rows, PT 302–321) against `egypt_tools.py data` (the base words, the TLA
morphology, Allen's line as a check), then against `tr`: words omitted or moved across lines; person, number, gender,
voice, tense and mood (passive sḏm=f and sḏm.w=f – 291.1–2, 305.1–2, 306.10, 310.1–4, 316.3; prospective and
subjunctive sḏm=f; relative forms – 302.3, 305.11, 309.2, 311.4; the sḏm.tj=fj of 295.3; negations – n sḏm=f, n
sḏm.n=f, jmi̯=k + infinitive, m + infinitive, n…js 305.15, jw.tj 307.6); the `⟨ ⟩` and `( )` rule; brackets against
the base (§2.1: 299.2–299.5, 306.17–18, 310.1–2, 310.9, 313.1–313.4); the witness tags (`{טטי}` PT 277, 280, 283, 289,
290, 292, 318; `{פפי ב}` PT 299, 304; `{מרנרא}` PT 306; `{נית}` PT 308; `{פפי א}` PT 310; `{אלן}` PT 281, 284, 303:
present on every row); one Hebrew per lemma inside the two keys and against UN1–UN7 (`lex`, `grep --all`; the earlier
reviewers' points: sꜥḥ in UN9 320.2 is the verb `מהדרים`, smsw 303.8 `הבכיר`, ḫsf `הדף`; no ꜣms, kꜣp or tr in these
keys); the refrains and copies (277.2 = 289.2 = 314.2 = UN5 229.3; 294.4 = 294.6; 299.5 = UN7 273-274.45; 301.2 / 301.4;
307.15 = UN7 270.4; `verify`: 0 repeated-line differences); the coordinator's scripted `דְּבָרִים לֵאמֹר:` openings
(UN8 277.1–301.1, 20 spells; UN9 304.1–321.1, 15 spells): each reads well with what follows (UN8 299.1 keeps the
translator's own unvocalized `דברים לאמר:`, the same words). Echo control: no new biblical phrase; the reserved words pass
`verify`. `build UN8 UN9`, `check_bible_quotes.py` on the annotated and translation files (0 problems), `verify UN8 UN9
--strict` (0 problems).

**Lines changed: 4** (UN8 1, UN9 3); the פירוק (and where needed the תרגומים / הערות) of each was updated.
- UN8 280.1: `*פועל־הרע*?!` → `*פועל (הרע)*?!` – jr.tj is "doer" only; "evil" is the TLA's own bracketed supplement
  ("(Übel)täter"), so it goes in `( )`.
- UN9 310.1: `[יושבע] [אָתוּם]` → `[יושבע] אָתוּם` – `[(J]tm[,w)]`: Atum's tm is written, only the J is restored (the UN4
  reviewer's ruling at 222.1).
- UN9 310.4: `ייבלם פפי זה … – ייבלם אָתוּם` → `ייהדף פפי זה … – ייהדף אָתוּם` – ḫsbb is tla854535, the lemma ḫsf (the
  TLA's spelling ḫsb, as UN8 301.9 `תהדפו`); the draft's note took it for another word.
- UN9 318.1: `טֶטִי הוא המתפתל,` → `טֶטִי הוא המתפתל, הַמְנַחֶה,` – `⟨j:sšmi̯⟩` was left untranslated by a misreading of
  §2.1: the `⟨ ⟩` mark is not carried, but the supplied word is translated whole (sšm = `מְנַחֶה`, 319.4).

**Left as drafted (noted for the coordinator):**
- mꜣ(j) "lion" (UN8 287.3) and rw "lion" (285.5, 294.2, UN5 243.2) are both `אריה` – a corpus-wide collision already in
  WE / SS (mꜣj) and NU (rw); the lead may give one of them `לביא`.
- UN9 306.17 j:mn imperative `הישאר` beside 306.18 the stative of the same lemma `[קבוע]` (the stative precedent of SI,
  UN7; the pun with jmn.w `הנשאר` is kept in the first).
- UN8 278.2 ḫsfi̯ stative read passive `*נהדף*?` against the TLA's active "having approached" (reasoned, marked).
- UN9 320.1 ḏsr "clear (the way)" `קידש` – the lemma's `קדוש` of 295.2, 316.2; the TLA's "freimachen" would be `פינה`:
  kept as a sense choice, for the lead.

## Independent review: UN1, UN2

Round 8 run 1, the independent fidelity reviewer (2026-11-13; did not draft these files). **Checked:** every `>` line of
UN1 (217 rows, PT 23–116) and UN2 (143 rows, PT 117–171) against `egypt_tools.py data` (the base words, the TLA
morphology, Allen's line as a check), then against `tr`: words omitted or moved across lines (77.4–5 `ḏi̯=ṯ | sḫm=f`
kept at the wall's break); person, number, gender, voice, tense and mood (the relative forms of the frame `jr.t-Ḥr.w
X.t.n=f`, the passives 142.1, 143.1, the prospectives, n sḏm=f / n sḏm.n=f 32.5, 56.3, 127.1, 142.1, 157.1); brackets
against the base (§2.1), above all in the Pepi I and Neith rows (37.2, 38.2, 41.2, 53.2, 57.2, 75.2, 87.2, 90.1–92.3,
96.2, 118.2–118.3, 126.1–126.2, 147.1, 152.1–152.3, 162.1–163.3), with the `ḏ(d)-mdw` split (`[ḏ(d]-mdw)` = `דברים
[לאמר]`: ḏd is `לאמר`, mdw `דברים`); the `⟨ ⟩` supplements (25.8, 76.2) translated whole; the witness tags (`{נית}`,
`{פפי א}`, `{אלן}`) on every non-W row; one Hebrew per lemma inside the two keys and against UN3–UN9 (`lex`, `grep
--all`; the earlier reviewers' points: no sꜥḥ, smsw, ḫsf, ꜣms, kꜣp or tr in these keys; snṯr `קטורת`, nṯr.j `נתר`, bd
`בורית`); the frame and the rubrics: all copies grouped by their Egyptian (`verify`: 0 repeated-line differences – the
frame `קח לך את עין־חוֹרוּס, אשר …!`, `קבץ לך אותה אל פיך!`, `הגן – פן …`, `השלם את עצמך בליחה היוצאת ממך!`, Neith's
`לנֵית זה. הגשה, ארבע פעמים.` (25 copies), Pepi's `לפֶּפִּי זה. הרמה, ארבע פעמים.`, Allen's `לאונאס זה. הרמת הגשה, ארבע
פעמים.` (Allen's own fꜣt ḥnkt), PT 23–25 and 32 = UN5's copies); the rubrics as list lines with the count's gender
(`עוגה, ארבע`, `צלע, ארבע`); the `דְּבָרִים לֵאמֹר:` openings (the translators', not scripted here: the Neith rows
35.1, 45.1, 50.1, 81.1, 94.1 are the base's own one-word lines): each reads well with what follows. Echo control: no
new biblical phrase (wdn `זבח`, 46.6, is the corpus's word); the reserved words pass `verify`. `build UN1 UN2`,
`check_bible_quotes.py` on the annotated and translation files (0 problems), `verify UN1 UN2 --strict` (0 problems).

**Lines changed: 6** (UN1 5, UN2 1); the פירוק of each was updated.
- UN1 37.2: `את [לסתותיך]` → `את לסתותיך` – `⸢ꜥr⸣,[t.du]=[k]`: the body ꜥr is written (damaged), only the ending and
  the suffix are restored – no bracket (§2.1).
- UN1 38.2: `[פתחתי] לך [את] [פיך]` → `[פתחתי] [לך] [את] [פיך]` – the second `[n]=[k]` is restored as the first is;
  the draft's פירוק had misread it as written.
- UN1 75.2: `את [עין]־חוֹרוּס` → `את [עין־חוֹרוּס]` – `[jr(,t]-Ḥr,w)`: jr is restored and `,t-Ḥr,w` is inside the
  editor's ( ), i.e. not written: nothing of the word is on the wall (as 96.2 has it; contrast UN2 126.1 `[jr(,t])-Ḥr,w`
  `[עין]־חוֹרוּס`, where Horus is written).
- UN1 87.2: `אל [פיך]` → `אל פיך` – `rʾ=[k]`: the noun is written, only the suffix restored.
- UN1 93.7: `אשר בעין־חוֹרוּס` → `אשר הוא עין־חוֹרוּס` – jm.j here is "being (as)" (TLA "das das Horusauge ist"): the
  bread is the Eye, the ritual's equation; the draft said "which is in the Eye" while claiming to follow the TLA.
- UN2 136.1: `את ראשי אשר אחרי סֵת` → `את רָאשֵׁי (אלה) אשר אחרי סֵת` – unvocalized `ראשי` before `אשר` reads "my head";
  vocalized as an ambiguous word, with `(אלה)` so the construct reads "the heads of those who follow Seth" (TLA).

**Left as drafted (noted for the coordinator):**
- UN2 131.1 j:sšꜣ.w=k `תְּסַשֵּׁא?` – a Hebrew verb coined from the Egyptian sound (the TLA's "bring to land (?)"); the
  translator keeps it for the pun with ꜣšr.t (131.3); the lead may prefer a transliteration or `*תעגון*?`.
- ꜥ (the measure) `ספל` vs ḥnw.t `קערה` is kept by the wall's words; Allen-only rows (167.3, 169.3) follow Allen's ḥnwt
  `קערות` – consistent with the lemma, though the Neith rows of the same items read ꜥ `ספלים`.

## Parallels index
(generated into `../parallels-index.md` by `../build_parallels_index.py` from the הקבלה bullets)
