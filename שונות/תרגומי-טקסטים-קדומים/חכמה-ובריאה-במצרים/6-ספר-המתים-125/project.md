# Project 6: the Book of the Dead, chapter 125 (`ספר המתים, פרק 125: הווידוי השלילי`)

## Scope
BD 125 on the papyrus of Nu (pBM EA 10477, 18th dynasty, c. 1400 BCE), KEY `BD`: 115 lines: the title (1–2); the address
to the great god and the first confession ("A", 3–20); the 42 judges and the second confession ("B", 21–62); the speech
to the gods of the hall (63–82); the interrogation at the door and the names of its parts (83–108); the rubric (109–115).
The other 18th-dynasty copies in AED (pJuja, pMaiherperi) are witnesses (`egypt_tools.py data BD … --wit`).

## Base text
AED-TEI `FGGZPRDYGBHV3AFOH5EXBPKDQY` (TLA 2018), CC BY-SA 4.0. Rank 3: the TLA's German (`tr BD`), after drafting;
Faulkner, Allen, Hornung, Quirke only from memory. The `[…]` of 2, 63, 108 stand where the papyrus has the owner's name
(written in a space, or lost): check each against the German.

## What to look for
- **Ps 15; Ps 24:3–6** (who may ascend / enter: the gate liturgy at the door, 83–108), **Job 31** (the oath of clearance),
  **Deut 26:13–14** (the declaration "I have not …" at the tithe: `לֹא עָבַרְתִּי … לֹא אָכַלְתִּי בְאֹנִי`), **Ezek 18:5–9**,
  the Decalogue (killing, stealing, lying, adultery) and Lev 19 (weights, the boundary, the poor): the Torah's words
  are gated (renderings §11.4); BD's own denials in their own Egyptian verbs.
- The balance of the heart (6 "the day of reckoning the characters"); Amenemope's measures (13: the oipe, the balance
  `מֹאזְנַיִם`, the plumb `פֶּלֶס` – the same words as project 1).

## BD 1–115 (Round 5 run 6, translator 3; 2026-11-01)

### Scope
All 115 lines of pNu (labels 1–115), drafted, filled, verified, with the TLA comparison and three review passes; the clean
translation built (`translation-BD.rtl.md`). Preservation: no restorations in the base; `[…]` only at 2 (×2), 63 and 108,
all the owner's name (the TLA's German fills them with NN); 96 has damaged but legible signs (no brackets). Six sections:
the title (1–2), the address and confession A (3–20), the 42 judges and confession B (21–62), the speech to the gods of
the hall (63–82), the interrogation at the door (83–108), the rubric (109–115). Coordinator's change (mid-run): BD only;
SS went to another translator.

### Sources consulted
AED-TEI pNu (base), with pJuja (CG 51189) and pMaiherperi (CG 24095) through `data BD --wit`: their variants are cited
by AED line number in the פירוק/הערות (e.g. 7 the missing "I have not done wrong against people"; 65 "you will not speak
lies" for Nu's "you will speak truth"; 74 Juja's donkey for Nu's nobles; 96 Juja's "I do not know"; the different order
of the judges in 32/41, 36/37, 39, 45–47, 52–53, 61). The TLA's German (`tr BD`), read after each section; it changed
nine drafted lines (8 note, 28, 31, 53, 88, 105, 107, 108, 110–112; see the Progress log). Faulkner, Allen, Hornung,
Quirke: from memory only, cited as "the usual reading", never quoted. Bible verses all printed first; `check_bible_quotes.py`
0 problems on the three files.

### Decisions
**The denial verbs (one Hebrew verb per Egyptian verb, A 7–17 and B 21–62):**

| Egyptian | Hebrew | A (7–17) | B (21–62) |
|---|---|---|---|
| jri̯ X | `לא עשיתי X` | 8 (חטא, רעה, עבודות), 9 (תועבת), 11 (מכאוב) | 21 עוול, 23 בצע־לב, 27 עיקשות, 33 ריבית, 44 פחד, 53 חטא, 54 גידוף, 58 נפיחות, 59 *התבדלות*? |
| jzf.t / jw.yt / ẖꜣb.t / ḏw.t / bjn | `עוול` / `חטא` / `עיקשות` / `רעה` / `רע` | 7, 8 | 21, 27, 53 |
| rḫ | `ידעתי` | 8 | – |
| nmḥ (+ nmḥ.w) | `דילל` (+ `דל`) | 9, 13 | – |
| sḏwj | `הלשין` (Prov 30:10) | 10 | – |
| smr / sḥqr / srmj | `החלה` / `הרעיב` / `הבכה` | 10 | – |
| smꜣ | `הרג` | 10, 11 (ציוויתי להרוג) | 25, 36 |
| ḫbj | `גרע` | 11, 12, 13 | – |
| ḥḏj | `הזיק ל־` (AM 17.19) | 11 | 26 (A 12 has ḫbj dbḥ, B 26 ḥḏj dbḥ: two verbs, two Hebrew) |
| nḥm "take away" / "save" | `נטל` / `הציל` (split by sense) | 12, 14 | 30, 32; save: 68, 72, 77 |
| nk (+ nkk) | `שכב עם` (+ `נשכב`) | 12 | 41 (= 12), 43 (אשת איש) |
| dꜣdꜣ | `זנה` | 12 | 42 |
| sjꜣṯ / wꜣḥ ḥr | `קיצץ` / `הוסיף על` | 13 | – |
| kfꜣ / sḫt / ḥꜣm | `קיפח` / `לכד ברשת` / `דג` | 14, 15 | – |
| ḫsf | `הדף` (MK E135) | 15, 17 | – |
| dnj (+ dnj.t) | `סכר` (+ `סכר`) | 15–16 | – |
| ꜥḫm | `כיבה` | 16 | (88 in the dialogue) |
| thj | `עבר על` (Deut 26:13 `לֹא עָבַרְתִּי`) | 16 | 35, 51 |
| šnꜥ | `מנע` | 16 | (114) |
| ꜥwꜣ / ṯꜣw / ꜥwn | `גזל` / `גנב` / `בצע` (AM 10.10 `הבצען`) | – | 22 / 24, 28 / 23 (ꜥwn-jb), 37 |
| ḏd grg | `אמר כזב` | – | 29 |
| knj | `רטן` (TLA's sentence "nörgelig"; first draft `השמיץ`) | – | 31 |
| ꜥm-jb (lemma of ꜥm "swallow") | `בלע לב` (literal) | – | 34 |
| smtmt / šmj / sḫwn / ṯrm | `צותת` / `הלך (בפי)` / `התקוטט` / `קרץ` | – | 38 / 39 / 40 / 47 |
| tꜣ (rʾ) | `רתח (פי)` (not `חם`: šmm's gate) | – | 45 (and the name 34 `רותח־רגל`) |
| zẖj ḥr | `חירש את פניי` | – | 46 |
| šnṯ (verb) / šnṯ.t (noun) | `גידף` / `ריב` (MT 8) | – | 48, 54, 57 (66) / 61 (101, 105) |
| prj-ꜥ | `שלח יד` | – | 49 |
| ꜣs jb | `נמהר לב` (Isa 32:4) | – | 50 |
| ꜥšꜣ-ḫrw / qꜣj ḫrw | `הרבה קול` / `רם קולי` | – | 52 / 56 |
| jꜥj | `*שטף*?` (uncertain) | – | 51 |
| rhn ḥr | `נשען על` | – | 55 |
| wr ẖr.t | `גדל חלקי` | – | 60 |
| sꜣt | `פגם ב־` (HC 83 `ייפגם`) | – | 62 |

- **The formula** (§11.5.1) on all 40 lines with *pri̯ m*: `הו X, היוצא מ־Y: לא …` (the prefix attached, `מאוֹן`, `מן
  המערה`). 58 and 62 have no *pri̯ m* in Nu (and Juja 745 at 58): `הו X: לא …`, no formula departure. 28 *pri̯ m ḫtḫt* is
  "coming forth backwards" (TLA): `היוצא אחורנית` (the formula's `היוצא` kept). 61 has a noun, not a verb: `לא (היה) בי ריב`.
- **Names:** descriptive names translated, hyphenated, without the article (`רחב־צעדים`, `חובק־להבה`, `בולע־צללים`, `אֲיֹם־פנים`,
  `שני־אריות`, `עיניו־להבה`, `לוהט`, `שובר־עצמות`, `מחריב`, `רענן־שלהבת`, `פניו־מאחוריו`, `שוכן־מערה`, `רותח־רגל`, `לבן־שיניים`,
  `אוכל־דם`, `אוכל־קרביים`, `אדון־האמת`, `תועה`, `מבהיק`, `רע־רעתו`, `רואה־את־אשר־יביא`, `ראש־הגדולים`, `אדון־חֶם`,
  `מרים־קול`, `תינוק`, `אפל`, `מביא־קרבנו`, `מכריז־קול`, `אדון־הפנים`, `מקטרג`, `אדון־שתי־הקרניים`, `עושה־בלבו`, `מרענן־עם`,
  `מעניק־טובה`, `קדוש־ראש`, `מביא־זרועו`; `אַפִּי` for Fnḏ.y "he of the nose" (TLA "beak-bearer"). Opaque names and known gods
  transliterated: `וָאמֶמְתִּי`, `תֶּם־סֶפּ` (TLA "Restvernichter", uncertain), `נֶפֶרְתֶּם`, `אִיחִי`, `נֶחֶבְּכָּאוּ`, `בָּבִי`, `סוֹבֶּךְ`.
- **Places:** `אוֹן` ★, `חֶמְנוּ`, `בֵּית־כָּא־פְּתָח` (Ḥw.t-kꜣ-Ptḥ, as MT, not `מֹף`: the temple name), `תָּא־מֶרִי`; transliterated:
  `חֶרְעַחָא` (first draft `חֶרִי־עַחָא` tripped the חרה gate on `חרי`: a spelling change, not bent meaning), `רֶא־סְטָאוּ`, `חֶם`
  (Letopolis; `[היתר שער]` at 27, 45), `נֶן־נֶסוּ` (Herakleopolis; `חָנֵס` of Isa 30:4 in the note only), `שְׁטָאִית`,
  `תָּא־שֶׁה`, `מְעַבָּאִית` (the Court of Thirty; not `שלשים`, reserved), `בָּאסֶת` (Bubastis; `פִּי בֶסֶת` Ezek 30:17 in the
  note), `עַנְגֶ׳תִּי`, `חָאסוּ`, `וֶרִית`, `חֶקָא־עַנְגֶ׳`, `סָאוּ` (Sais), `וֶנְסִי`, `נֶגֶ׳פֶת`, `וֶצֶ׳נֶת`, `סָאוּתִי` (Asyut), `גֶ׳דוּ` (Busiris),
  `צֶ׳בּוּ`, `ארצות־פֶנְחוּ`, `מַעָאת`, `בָּאחוּ`, `אִיגֶרֶת`. Common nouns translated: `המערה`, `השמים`, `המערב`, `הדמדומים`,
  `בית־המטבחיים` (nm.t), `הגרדום` (ḫb.t), `השיטה` (šnḏ.t = `שִׁטָּה` [loanword], §4.2), `בית מִין`, `האפלה`, `הַנּוּן`.
- **Key terms:** wsḫ.t `אולם`, Mꜣꜥ.tj `שתי האמת`, Mꜣꜥ.t (goddess) `מַאַת`, mꜣꜥ.t `אמת`, mꜣꜥ-ḫrw `אמיתי־הקול`; ḫw.w `מעללים` (HC
  35); jw.yt `חטא` (AM's btꜣ has `פשע`); ḫbn.t `אשמה`; ṯms.w `עוון`; jdr.yt `עונש`; wꜥb `טהור` / ꜥbw `זוך` / twr `מזוקק` (three
  lemmas, three words; 80); ḥsb qd.w `חשבון המידות` (§11.3) and dbḥ `מידה` (§4.3): see Open decisions; jp.t "reckoning"
  (68) `מפקד` (not `איפה`: another lemma); šꜥ.t `טבח` (HC); sjꜥr `העלה`; smj `הגיד (על)` (73–107: first draft `הודיע`,
  changed because Sinuhe uses `הודיע` for rdi rḫ); sbꜣ `דלת` (TB 5,5), bnš.w `מזוזות` (TB 16,9), ꜥr.yt `משקוף`, ḥpt.w
  `בריחים`, jr.j-ꜥꜣ `שוער`, zꜣt.w `רצפה`; ꜥq `נכנס (דרך)`, swꜣ `חלף (על)`, ḫnd verb `דרך` / noun `שוק`; jꜥr.t `פתן` (not `נחש`,
  ḥfꜣw's); ꜥw `מתורגמן`; ꜣḫ.w `הָאָחִים` (§4.1; a footnote at 12); rʾ (spell) `לחש` (HC 44; rʾ "mouth" `פה`: split by sense);
  jḫ.t "property" `רכוש` / "thing" `דבר` (HC: split by sense); wꜣḏ `רענן` (WE); šms.w `מלווים` (HC 70); šn.yt `חצר` (AM's
  šmsw.t has `פמליה`); mḏꜣ.t `מגילה` (HC); bq "olive" `זית` (with `[היתר שער]`, 83–84); kꜣr `מקדש` (AM), rʾ-pr `היכל` (WE 9,25);
  ḥḏj `הזיק` (AM); sꜣt `פגם` (HC); ḥrw `פחד` (PT486 has `בעתה` for šꜥ.t); nwy `זרם` (HC's mḥw.yt has `שיטפון`).
- **Rejected:** `רצח`, `נאף`, `חמד`, `נקי`, `בר לבב`, `נשך`/`תרבית`, `אוני`, `בער` (gates; the parallels go to the apparatus);
  `שער` for sbꜣ (HC 83 has it for ꜥrr.yt; TB's `דלת` kept); `קָדֵשׁ` for nkk (Deut 23:18: a cult term the Egyptian lacks);
  `ברוך הבא` for jy m ḥtp (Ps 118:26: `בָּא (פעמיים) בשלום` literal).

### Open decisions for the user
1. **`מידות` / `מידה`:** §11.3 fixes ḥsb qd.w = `חשבון המידות` ("traits") and §4.3 fixes dbḥ = `מִדָּה` ("measure"); both occur in
   BD (6; 12, 26). Kept both as binding (singular "measure" vs. plural "traits"; the pun suits a weighing scene), but it is
   one Hebrew word for two lemmas. Alternative for qd.w: `חשבון התכונות`.
2. **`נשכב`** for nkk (12, 41): a passive participle coined from the verb (Egyptian nkk is derived from nk); alternatives
   `נער־משכב`, `זכר שוכבים עמו`.
3. **The uncertain denials:** 15 `*שמורות*` (qs.w), 51 `*שטפתי*?` (jꜥj "wash"), 59 `*התבדלות*?` (TLA "Nachlässigkeit"), 39 `(בפי)`.

### Progress log
- Drafted in four saves (1–20, 21–62, 63–82 + 83–108 + 109–115), each filled and verified at once; `tr BD` read after each.
- TLA comparison changed: 8 (`במקום` read as "instead of", note), 28 (`היוצא אחורנית`), 31 (`רטנתי`), 53 (a circumstantial
  "though I saw evil", not a lost negation), 88 (stative `מושלכים`), 105 (`תגיד עליי אל` is the answer), 107–108 (*m* of
  identity: `לחמך – הוג׳את`; "(אל) אוסיריס"), 110 (`זְבַח`, imperative), 111 (`אחרי שעשית`), 112 (`מי שעושה … עליו`).
- Gate hits fixed without changing meaning: 22 `חרי` (spelling `חֶרְעַחָא`), 34/45 `חם` for tꜣ → `רתח` (šmm keeps `חם`), 27/45
  `חֶם` (place) and 90/91 `משקוף`, 92 `בָּאחוּ`, 83/84 `זית`: `[היתר שער]`; 111 `מרוחה` → `מצופה`.
- Pass (a) fidelity: quote marks of the dialogue (98–99, 107); 104's parse; 64's note on *n sjꜥr*; 40/60 `אלא בשל`.
- Pass (b) consistency: grep of every new string in the corpus (`--all` too): smj `הודיע` → `הגיד` (Sinuhe), ḥrw `בעתה` → `פחד`
  (PT486); `[מקבילה]` notes at 41, 91, 102–105; the repeated dialogue 99–105 copies 99–101.
- Pass (c) Hebrew: the clean text read through; register even; no vav-consecutive.
- `verify BD --strict`: 0 problems; `check_bible_quotes.py` on the three files: 0 problems; `build BD` done.

### The text on its own terms
- **Knowing the names is the key** (4, 20, 63–64, 83–108): the dead man enters not only because he is pure but because he
  can name every judge, every part of the door, even his own feet; knowledge is power over the divine.
- **The heart on the balance** (6, 13, 76, 90–91): the same balance, plumb and pan that the dead man swears he never
  falsified in trade become the parts of the gate and the instruments of his judgement.
- **Sin is detachable** (2 "to separate N from his misdeeds"): the spell does not ask forgiveness; it removes the misdeeds.
- **The judges eat the guilty** (5, 67–68): they "live on" the evil-doers and "drink their blood", as they "live on Maat":
  truth is food, and the condemned are fodder (Babi, the Devourer).
- **A whole country sits in judgement** (21–62): the 42 judges come from the temple towns of Egypt; the ethics is local
  and national at once.
- **The ethics of the quiet man** (45, 46, 50, 52, 56): no hot mouth, no hasty heart, no loud voice – Amenemope's "silent
  man" as a judged virtue.
- **Social justice in the negative and in the positive** (9, 10, 14, 71–72): the poor, the servant, the infant, the hungry,
  the naked, the boatless; the old "ideal biography" formula, centuries before Ezekiel 18.
- **Water and fire as crimes** (15–16): damming a canal or quenching a sacred fire offends neighbour and god alike.
- **Purity is bodily and moral at once** (17, 73, 79–81): front, back and middle pure; "pure of mouth, pure of arms".
- **The dead becomes "Osiris N"** (108) and receives the Eye of Horus as bread and beer (107): the cult on earth feeds the
  dead.
- **The rubric shows the chapter as a rite** (109–115): a pure reciter, white sandals, a drawing on clean earth "on which
  no pig has trodden" (Seth's animal).

### Key parallels
- [equivalent] Ezek 18:7 `לַחְמוֹ לְרָעֵב יִתֵּן וְעֵירֹם יְכַסֶּה בָּגֶד` ↔ BD 71 (bread to the hungry, clothes to the naked; Isa 58:7, Job 31:19).
- [equivalent] Ps 24:3–6 (`מִי-יַעֲלֶה`, `נְקִי כַפַּיִם`, `מְבַקְשֵׁי פָנֶיךָ`) ↔ BD 3, 64, 73: entry by purity of hands and mouth; nḏ-ḥr "seek the face".
- [equivalent] Deut 26:13 `לֹא עָבַרְתִּי מִמִּצְוֹתֶיךָ` ↔ BD 16, 35 (thj `עבר על`): the declaration "I have not …" before the deity.
- [equivalent] Prov 30:10 `אַל-תַּלְשֵׁן עֶבֶד אֶל-אֲדֹנָו` ↔ BD 10 (sḏwj ḥm n ḥr.j-tp=f): the same deed in the same relation.
- [equivalent] Ex 20:12 (`לֹא תִרְצָח`, `לֹא תִנְאָף`, `לֹא תִגְנֹב`, `עֵד שָׁקֶר`) ↔ BD 25, 43, 24/28, 29: three of four in the same verbs of killing, lying with a man's wife, stealing, lying – without the Decalogue's special words.
- [equivalent] Lev 19:35–36, Prov 16:11, Deut 25:13 ↔ BD 13, 26: the measure, the weights, the hand-balance and the standing balance – two Egyptian words as two Hebrew ones.
- [equivalent] Lev 19:16 `לֹא תֵלֵךְ רָכִיל`, Ps 15:3 `לֹא-רָגַל עַל-לְשֹׁנוֹ` ↔ BD 39 (šmj "go" = gossip): the talebearer "walks" in both languages.
- [equivalent] Jer 17:10, Ps 7:10, Prov 21:2 ↔ BD 98–99 "perceiver of hearts, searcher of bellies".
- [equivalent] Ps 118:19–20, Isa 26:2 ↔ BD 89–98: a liturgy at the gate of righteousness – but the Egyptian gate asks names, not virtues.
- [equivalent] Job 31:6 `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק` ↔ BD 6, 76: the accused asks to be weighed.

### Lines shared with other texts
None copied. Shared words, aligned: AM 17.19 ḥḏj dbḥ `הזיק ל־מידות` = BD 26; AM 17.18 jws `פלס`, AM 18.1 dḫj `משקולת`,
AM 17.22 mḫꜣ.t `מאזניים` = BD 13, 76, 90; AM 10.10 ꜥwn `בצע` = BD 23, 37; HC 35 ḫw.w `מעללים`, HC 44 rʾ pn `הלחש הזה`, HC 77
tbj `נעול`, HC 83 sꜣt `פגם`; MT 8 šnṯ.t `ריב`; TB 5,5 sbꜣ `דלת`, TB 16,9 bnš `מזוזות`; WE 9,25 rʾ-pr `היכל`, WE 1,15 `בשר – נתח
גדול`; PT486 nḏ-ḥr `שלום לפני־`.

### Proposals for the shared renderings
1. **BD denial verbs** (the table above) as a §11 row for any later BD chapter or Coffin Text.
2. **New fixed words:** sbꜣ `דלת` (TB), bnš `מזוזה`, ꜥr.yt `משקוף`, ḥpt `בריח`, jr.j-ꜥꜣ `שוער`, zꜣt.w `רצפה`; smj `הגיד (על)`; jꜥr.t
   `פתן`; ꜥbw `זוך`, twr `מזוקק` beside wꜥb `טהור`; jw.yt `חטא`, ḫbn.t `אשמה`, ẖꜣb.t `עיקשות`; ꜥm `בלע` / sꜥm `גמע`; jp.t
   "reckoning" `מפקד`; nḥm split `נטל` / `הציל`.
3. **tꜣ "be hot" = `רתח`** (šmm keeps `הַחַם`), recorded so Sinuhe/SS do not use `חם` for tꜣ.
4. **Gate licences** (for the coordinator; the tool was not edited): the `זית` licence should accept pNu's spelling `bq`
   (TLA "(= bAq) Ölbaum", 83–84); the `קוף` gate reads `משקוף` as מ־ש־קוף (90–91) and the `אחו` gate reads the name `באחו`
   as ב־אחו (92); the `חם` gate catches the place name Ḫm `חֶם` with the prefix `מ` (27, 45), and the `חרה` gate the
   transliteration `חרי` (22). All passed with `[היתר שער]` or a spelling change; none bent the meaning.
5. **Herakleopolis** – settled by the coordinator: `חָנֵס`, the corpus's form (the Heavenly Cow, renderings §10.10.2; Isa 30:4 [equivalent]); was `נֶן־נֶסוּ` (transliterated, as the coordinator asked for new places): if §3.2 prefers the biblical form,
   `חָנֵס` (Isa 30:4) – the identification is common but not certain.

### Lessons for the guidelines
- A gate on a short root needs the class of transliterated names too (`חרי`, `חם`, `באחו`, `משקוף`): test gates on the
  text's place names before drafting.
- In a dialogue text, `tr`'s sentence division shows who speaks; the TLA corrected two speaker assignments here (105, 108).

## Independent fidelity review (2026-11-01)
Pass (a) by a fresh reader: all 115 lines compared with the transliteration and the per-word data (`data BD`), then with the TLA's German (`tr BD`). Brackets: none needed changing (the base has no `[ ]` restorations; its four `<gap/>`s are the four `[…]` of 2, 63, 108; the `⸢ ⸣` of 96 rightly unbracketed). The 42 denials, the formula and the denial verbs (§11.11) checked line by line: one Hebrew verb per Egyptian verb, no Ps 15 / 24 or Decalogue wording in the lines.

**7 lines changed** (tense 1; omitted word 3 – 75, 103, 104; genitive for a preposition 2; ambiguous spelling 1; brackets 0):
- **9** (tense): `מעבר למה שנעשה לי` → `מעבר למה שייעשה לי` – *jri̯.tn=j* is the prospective relative form ("what should be done for me", as the parse itself said); the past `שנעשה` contradicted it.
- **16** (genitive for a preposition): `המועדים של הנתחים הנבחרים` → `המועדים בעניין הנתחים הנבחרים` – *sw.w ḥr stp.wt*: *ḥr* "concerning", not a genitive (TLA "bezüglich").
- **75** (omitted word): `בבית *הפוער־פה*?` → `בבית (אשר) סביב *הפוער־פה*?` – *ḥꜣ* "around" was in the parse but not in the line.
- **79** (ambiguous spelling): `קדמתי` → `קִדְמָתִי` – *ḥꜣ.t=j* "my front" (a noun), which unvocalized reads as the verb "I preceded".
- **84** (genitive for a preposition): `העיר הצפונית של הזית` → `העיר הצפונית לזית` – *nʾ.t mḥ.tj.t bq* "the city north of the olive" (TLA "nördlich des Ölbaums").
- **103–104** (omitted word): 103 `"למה באת?"` → `"למה באת?" "באתי`; 104 `"הנה, כדי שיוגד עליי."` → `הנה כדי שיוגד עליי."` – the answer's *jy.n=j* "I have come" stands at the end of 103 and had been left out (the notes had said the Egyptian lacks it); the parse and notes of 103–104 corrected.

Undecided (left): 114 `מעל שולחן־הקרבנות` for *ḥr ḫꜣw.t* "on the altar" (Hebrew `מעל` can read "from upon"); 50 `לא נמהרתי לב` keeps the idiom though *jb=j* is the subject (`לא נמהר לבי` would be closer).

`build BD`, `verify BD --strict` (0 problems), `check_bible_quotes.py` on the annotated and translation-BD files (0 problems).

## Parallels index
