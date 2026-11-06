# Project 6: the Book of the Dead of Nu (`ספר המתים של נוּ`)

## Scope (Round 6 run 2, 2026-11-06)
The whole Book of the Dead of **Nu** (pBM EA 10477, Thebes, 18th dynasty, Hatshepsut–Amenhotep II, c. 1400 BCE): all 136
chapter texts that the TLA edits from it (AED-TEI; 1,893 lines), in the papyrus's order, and **BD 175** from the
papyrus of Kha (pCha, pTurin 8438, TT 8, Amenhotep III; 65 lines) as an appendix – Atum and Osiris on the end of the
world, a chapter Nu does not have. Chapter 125 (KEY BD, 115 lines) was translated in Round 5 run 6 and stands in its
place (between NU8 and NU9); the project was `6-ספר-המתים-125/` until this run (folder and title renamed, guidelines §1:
"completing means the whole text"). KEYs, chapters and labels: `../renderings.md` §12.1; the order: the Bonn
Totenbuch-Projekt's record TM 134299 (`../renderings.md` §12.1 says how it was matched to AED's texts).

## Base text
AED-TEI (TLA 2018, CC BY-SA 4.0): `../../sources/AED-TEI/BD--pNu-BM-EA-10477/` (135 texts, with the TLA's German
sentence and word translations), `../../sources/AED-TEI/BD-125--pNu-BM-EA-10477/` (BD 125),
`../../sources/AED-TEI/BD-175--pCha-Turin-8438/` (BD 175). Edition behind the TLA: G. Lapp, *The Papyrus of Nu*
(Catalogue of the Books of the Dead in the British Museum I, 1997), entered by B. Backes. The owner's name is left out by
the TLA (`[…]` in the base, `[…]` in the Hebrew). Rank 3: the TLA's German (`tr <KEY>`), after drafting; Faulkner,
Allen, Hornung, Quirke, Lapp only from memory, never quoted.

## Open decisions (the coordinator)
- **The two copies of BD 64**: the Bonn record names 64 twice (after 8, and after 153B); AED has a long (`64L`) and a
  short (`64K`) version. `64L` is placed first by assumption – Lapp 1997 decides (not in the folder).
- **BD 151 and 50**: the record names 151 twice (after 137A, after 155) and "50B" beside "50"; AED has one 151 (placed
  first) and one 50 (placed at "50").

## BD 125 (Round 5 run 6): the original scope note

BD 125 on the papyrus of Nu (pBM EA 10477, 18th dynasty, c. 1400 BCE), KEY `BD`: 115 lines: the title (1–2); the address
to the great god and the first confession ("A", 3–20); the 42 judges and the second confession ("B", 21–62); the speech
to the gods of the hall (63–82); the interrogation at the door and the names of its parts (83–108); the rubric (109–115).
The other 18th-dynasty copies in AED (pJuja, pMaiherperi) are witnesses (`egypt_tools.py data BD … --wit`).

### Base text
AED-TEI `FGGZPRDYGBHV3AFOH5EXBPKDQY` (TLA 2018), CC BY-SA 4.0. Rank 3: the TLA's German (`tr BD`), after drafting;
Faulkner, Allen, Hornung, Quirke only from memory. The `[…]` of 2, 63, 108 stand where the papyrus has the owner's name
(written in a space, or lost): check each against the German.

### What to look for
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

## NU1 17.1–18PS.3 (Round 6 run 2, translator 1; 2026-11-06)

### Scope
KEY NU1 = BD 17, BD 18 and the rubric 18 PS of pNu, 159 lines (`17.1`–`17.119` without 17.22 and 17.25, which the TLA does
not count; `18.1`–`18.39`; `18PS.1`–`18PS.3`), all drafted, filled, verified, compared with the TLA's German and passed
three times; the clean translation built (`translation-NU1.rtl.md`; intro `translation--intro-NU1.rtl.md`).
Preservation: the papyrus's opening is damaged – 17.1–17.24 carry many `[ ]` restorations and `[…]` (several lines more
restoration than text); from 17.26 on the restorations are sporadic; `[…]` also marks the owner's name wherever the TLA
leaves it out. BD 17 (the identity chapter with its ancient glosses, "What is it? It is …", "Variant: …") in eight
sections: the title (17.1–17.3), Atum alone in Nun (17.4–17.14), the Benu, eternity and Min (17.15–17.31), the blood of
Re and the Eye (17.32–17.41), the sons of Horus and the seven akhs (17.42–17.56), the two bas in Mendes and the great cat
(17.57–17.64), the prayer "save N from …" (17.65–17.103), the closing identities (Atum, Isis, Wadjet; 17.104–17.119).
BD 18: the litany to Thoth before the tribunals (18.1–18.39, nine named + the summary "these ten"), then the rubric.

### Sources consulted
AED-TEI pNu (base; `data NU1`); the TLA's German (`tr NU1`), read after each of the seven drafting saves – it changed
about 45 drafted lines (listed per line in the **תרגומים** bullets, "הטיוטה הראשונה … תוקנה"); no other witness in the
folder. Faulkner, Allen, Quirke, Lapp: from memory only, never quoted. Every Bible verse printed with
`check_bible_quotes.py --show` before quoting; the checker reports 0 problems on the three files.

### Decisions
**Recurring formulas of the Book of the Dead (fixed here for the later NU parts):**

| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| `ptr rf sw` / `ptr rf st` (the gloss question) | `מה הוא?` / `מה היא?` (split over a line break: `מה` / `הוא?`) | 17.8 … 17.118 | literal; *sw* masc., *st* neuter-fem.; not "who" (the answers are places and things too); the TLA's "Wer ist denn das?" in the apparatus |
| `pw tr rf sw` (the other question) | `מי אפוא הוא?` | 17.84 | a different particle chain, kept apart |
| `X pw` (the gloss answer) | `X הוא` / `היא` / `הם` / `הן` (gender of the Hebrew noun) | passim | nominal sentence (§3a) |
| `ky-ḏd` | `נוסח אחר:` | passim | the Heavenly Cow's precedent (HC 47) |
| `jr X, Y pw` / `jr gr.t X …` | `אשר ל־X – Y הוא` / `ואשר ל־X – …` | passim | §3a allows `אֲשֶׁר לְ־` "where it reads well": it does in every gloss; *gr.t* = `ו` |
| `nḥm=k N mꜣꜥ-ḫrw m-ꜥ X` | `תציל את N אמיתי־הקול מיד X` | 17.67/68, 74/75, 82, 92/93, 95/96 | *nḥm* "save" = `הציל` (BD 125); *sḏm=f* of wish = Hebrew future |
| `smꜣꜥ-ḫrw X r ḫftj.w=f` | participle (past) `אשר אימת את קול X נגד אויביו`; wish `תאמת את קול`; prospective `יאמת`; infinitive `לאמת`; passive `אימתו את קול X` (impersonal) | BD 18 | §12.4.3; the forms chosen so that `verify`'s regex reads them (the imperative `אַמֵּת` would read "truth" unvocalized and is not in the regex) |
| **BD 18's refrain** `j Ḏḥwtj smꜣꜥ-ḫrw Wsjr r ḫftj.w=f smꜣꜥ-ḫrw NN mꜣꜥ-ḫrw r ḫftj.w=f m ḏꜣḏꜣ.t ꜥꜣ.t jm.j.t X` | `הוֹ תְּחוּת, אשר אימת את קול אוֹסִירִיס נגד אויביו, תאמת את קול […] אמיתי־הקול` + `נגד אויביו בוועד הגדול אשר ב־X` | 18.1–2, 6–7, 10–11, 14–15, 17–18, 20–21, 24–25, 29–30, 33–34 | fixed by the first copy; the four identical lines (18.6, 18.10, 18.17, 18.33) identical; 18.36–37 is the declarative variant `[תְּחוּת] הוא / אשר יאמת … ; יאמת הוא את קול […]` |
| `grḥ pwy n X` / `hrw pwy n X` | `בלילה ההוא של X` / `ביום ההוא של X` | 17.11, 17.61, BD 18 | the demonstrative kept |
| `ḫpr X pw` (aetiology) | `כך נהיה X` | 17.8, 17.63 | HC §10.10.1 |
| `jw=j rḫ.kw X` | `יודע אני X` | 17.10, 17.14, 17.76 | §12.4.5 |
| `ṯz-pẖr` (recitation note "and vice versa") | `ולהפך` | 17.39, 17.106 | |
| `zp-2` | `(פעמיים)` | 17.106 | PT `(ארבע פעמים)` |
| `šs-mꜣꜥ ḥḥ n zp` | `דבר נכון באמת, אלפי אלפים פעמים.` | 18PS.2 | BD 115's string |
| rubric `ḏd z rʾ pn wꜥb.w` | `יאמר אדם את הלחש הזה (כשהוא) טהור – …` | 18PS.1 | BD 109's `יאמרו את הלחש הזה (כשהוא) טהור` |
| `pri̯.t m hrw` (noun) | `יציאה ביום` | 18PS.1 | §12.3 |
| `jri̯.t ḫpr.w (nb mrr jb=f)` | `עשיית (כל) צורה (אשר יחפוץ לבו)` | 17.2, 18PS.1, 18.27 | *ḫpr.w* = `צורה` (TB 15,1, WE 9,27) |

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| ḏꜣḏꜣ.t "council, tribunal" | `וַעַד` (`הוועד`) | 17.42, 17.46, 17.55, 17.73, BD 18 | Sinuhe B209's `הוועד` for the same lemma (tla182390); `מוֹעָצָה` rejected: AM's qnb.t is `מוֹעֶצֶת־הַשּׁוֹפְטִים` (§10.4.2); unvocalized without a prefix `ועד` reads "and until": always with the article or a preposition here |
| wjꜣ "the sun's bark" | `צִי` ★ (`צִיּוֹ`) | 17.95, 17.100 | the Heavenly Cow's word (HC 47, §10.10.3), not §12.3's `הסירה?` (one lemma, one Hebrew) |
| sḫ.t-jꜣr.w "Field of Reeds" | `שְׂדֵה־הָאַגְמוֹנִים` | 17.28–29 | HC 40's precedent; §12.3's `שדה הקנים` not adopted; sḫ.t-ḥtp stays `שְׂדֵה־הַקּוֹרְבָּנוֹת` (PT527, HC 39) for the next translators |
| ẖꜣ.t "corpse" | `גּוּפָה` | 17.16, 17.84 | §12.3's `גְּוִיָּה` is MT's ḏ.t "body" (§10.9.3; also used here 17.95); `פֶּגֶר` rejected (contempt) |
| ḏ.t "body" | `גְּוִיָּה` | 17.95 | MT's; the pun ḏ.t "body" / ḏ.t "eternity" noted |
| šw.tj "the double plume" | `שתי־נוצות` | 17.17 | (not šw.t "shadow": that stays §12.3's `צֵל`, not met) |
| ꜣḫ "akh" / ꜣḫ "useful" / ꜣḫ.w "power" / ꜣḫ verb "be an akh" | `אָח` / `מוֹעִיל` / `גְּבוּרוֹת` / `היות אָח` | 17.1, 17.3, 17.44, 17.96 | §4.1, §4.3, §10.12.1 |
| sṯz / ṯzi̯ "raise" | `הֲרָמָה` (`הֲרָמוֹת־שׁוּ`) / `הֵרִים` | 17.1, 17.5, 17.30, 17.36–37, 17.66 | one root for the causative and its base; PT's ṯsj `הֵקִים` is a split by sense |
| nb-tm | `אֲדוֹן־הַשְּׁלֵמוּת` | 17.3 | kept apart from nb-r-ḏr `אֲדוֹן הַכֹּל` |
| jm.j-X (epithet) | `שׁוֹכֵן־X` | 17.6, 17.9, 17.65 | BD 125's `שוכן־מערה` |
| jm.j.w-bꜣḥ | `אשר לפנים` | 17.32–33 | `הקדמונים` is HC 8's tp.jw-ꜥ |
| jm.j.w-ḫt | `ההולכים־אחרי` | 17.8, 17.41, 17.43, 17.48, 17.75 | |
| hꜣi̯ "descend" / ḫr "fall" | `ירד` / `נפל` | 17.1, 17.32, 17.76, 17.98, 18.28 / 17.86 | one verb each |
| mꜣꜣ | `חָזָה` (passive `ואין חוזים אותו`) | passim | §10.12.1 |
| jḫ.t | `דבר` / `רכוש` / `השרידים` (Osiris's relics) | 17.74, 18.12, 18.23, 18.34 | split by sense; `jḫ.t-ḫꜣwj` = `דברי־הערב` (`תקרובת` is WE's mꜣꜥ, `מנחה` TB's ꜥꜣb.t) |
| ḫry.t "slaughter-victims" / šꜥ.t "slaughter" / zfṯ "slaughter" / nm.t | `הטבוחים` / `טֶבַח` / `שחט` / `בית־המטבחיים` | 17.70, 17.83 / 17.33, 17.43, 17.88 / 18.28 / 17.70, 17.88, 17.98 | `שחיטה` is SS 185's sfṯ (= zfṯ) |
| sṯꜣ.w "wounds, blows" | `מכות` | 17.16, 17.35, 17.75, 17.84 | `פצע` is AM's sẖy |
| ḥsq / dn / bḥn | `כרת` (WE 7,4) / `קטע` / `גדע` | 17.75 / 17.70 / 17.110 | |
| zš "marsh, pool" | `סבך` | 17.23 | WE 5,5's word for the same lemma; see Open decisions |
| ḥqꜣ.t / sḥqꜣ | `שליטה` / `הִשְׁלִיט` | 17.5, 17.11, 17.90 | ḥqꜣ = `שַׁלִּיט` (§11.2) |
| ḥtm "destroy" | `השמיד` | 17.11, 17.61, 18.5 | |
| dr / ḫsr / sḥri̯ | `הרחיק` (MK E130) / `גירש` / `סילק` | 17.21, 17.44, 18.39 / 17.21 / 17.21 | |
| jw "wrong" | `עבירות` | 17.21 | (BD 125's jw.yt `חטא`, ṯms `עוון`, jzf.t `עוול`) |
| jzf.tj "evil-doer" | `בעלי־העוול` | 17.43, 17.70, 17.92 | the root of jzf.t `עָוֶל` kept |
| twt "image" | `דְּמוּת` [gated, licensed] | 17.40, 17.81 | §4.4 |
| ḥnn "phallus" | `זכרות` | 17.32, 17.116 | PT527's word |
| ḥmi̯ "retreat" | `סר` | 17.107 | HC 52; the root סוג/נסג reserved |
| tkn "approach, touch" | `נגע` | 17.118–119 | AM 4.6 |
| rḫ.yt / wnḏw.t | `העם` / `קרובים` (`אנשי אויביי`) | 17.111 | AM 1.12 / BD 125, 7 |
| snḏ (noun) / nrw / šfšf.t | `יראה` / `מורא` / `יראת־כבוד` | 17.113 / 17.87, 17.110 / 17.110 | |
| kkw / snk.t | `חושך` / `עלטה` | 17.93 | BD 125's knm.t `אפלה` kept free |
| pḥ.tj | `כוח` | 17.107 | AM 21.7 |
| ꜥꜣb.t "offering" | `מנחה` | 17.78 | TB 15,4 |
| ḫꜣw.t "offering table" | `שולחן־הקרבנות` | 17.79–80 | BD 114 (WE 9,26 has `מזבחות`: an existing split, noted for the lead) |
| jty | `ריבון` | 17.81 | WE 8,14 |
| ḫpš | `השוק` (the constellation) / `כתף` (Osiris's limb) | 17.47 / 18.32 | §10.12.2 split |

**Names (first occurrence vocalized):** Imsety `אִימְסֶתִי`, Hapi `חָפִּי` (≠ the Inundation `חַעְפִּי`), Duamutef `דּוּאָמוּתֶף`
(HC 55), Qebehsenuf `קֶבֶּחְסֶנוּף`, Isdes `אִיסְדֶס`, Mekhenti-en-irti `חוֹרוּס־מְחֶנְתִי־אֶן־אִירְתִי`, Harendotes `[חוֹרוּס־]שומר־אביו`,
Methyer `מֶחֶת־וֶרֶת`, Hu / Sia `חוּ` / `סִיא` (§3.1), Nefertem `נֶפֶרְתֵּם` (MT), Bastet `בָּאסְטֶת`, Nehebkau `נֶחֶבְּכָּאוּ`
(BD 125), Shesmu `שֶׁסְמוּ`, Medjed `מֶגֶ׳ד` (TLA "the Sure-shot"), Babi `בָּבִי` (BD 125), Hemen `חֶמֶן`, Wadjet `וָאגֶ׳ת`
(§3.1), Neseret `נֶסֶרֶת`, Bentj `בֶּנְתִּי`, Wepwawet `וֶפְּוָאוֶת` (MT), Sobek pl. `סוֹבֶּכִים`, the Benu `הַבֶּנוּ` (PT600),
"the Children of the Weary One" `בני־העייפה` (ms.w-bdš.t), the double lion Ruti `שני־אריות` (BD 125's judge name),
the goddess Ḥtp=s-ḫwi̯=s `נחה־היא־מגינה־היא`. Places: Naref `נָארֶף`, Mendes `גֶ׳דֶת` (≠ Busiris `גֶ׳דוּ`), Letopolis
`חֶם` (BD 125; `[היתר שער]`), Herakleopolis `חָנֵס` (§11.11.5), Kheraha `חֶרְעַחָא` (BD 125), Sepa `סֶפָּא`, Pe and Dep
`פֶּה` / `דֶּף` (vocalized: "mouth", "page"), the Washer-folk's Banks `שתי־גדות־הכובסים`, Abydos `אַבְּגֶ׳ו`, This `תְּנִי`,
Rosetau `רֶא־סְטָאוּ` (`[היתר שער]` for the ב prefix), Wenet `וֶנֶת`, Shenyt `שֶׁנְיֶת` (not "שנית"), Meseqet `מֶסְקֶת`,
Tjenenet `צְ׳נֶנֶת`, Qerqeret `קֶרְקֶרֶת`, the Island of the Justified `אי האמיתיים`, the Lake of Fire `אגם־השלהבת`, the
roads of the dead `אורחות־המתים`, the Hacking of the Earth `עידור־הארץ` (`אדמה` reserved). The festivals: Haker
`הָאקֶר`, "We-are-enduring" `"קיימים־אנו"`, "Uniting the Two Lands" `"איחוד־שתי־הארצות"` (MT's *smꜣ* `אחד`).

**Rejected (gates and echoes):** `רָקִיעַ` for bjꜣ.w (17.65: `ימת־שמיו`, the TLA's "Firmament" in the apparatus); the root
בקע for pšn (17.60: `שיסע`); `יבערו` for sti̯ (17.113: `ילהטו`); `תבה` for ꜥfḏ.t (17.102: `ארגז`); `אלים` "violent" for
mds (17.86: `עריץ`, to avoid "gods"); `חרטום` for ḥr.j-tp tꜣ.wj (17.87: `ראש`, the loanword's link noted).

### Open decisions for the user
1. **zš `סבך`** (17.23): WE 5,5 fixed `סבכים` "thickets" for this lemma; in BD 17 the two zš are pools of purification
   (the TLA: "Seen"). `בִּצּוֹת` would suit both; changing WE is the lead's decision.
2. **ḏꜣḏꜣ.t `ועד`**: Modern Hebrew hears "committee"; the alternative `מוֹעָצָה` collides with AM's qnb.t. Kept `ועד`
   (Mishnaic "assembly"); the later NU parts follow it.
3. **The gloss question `מה הוא?`** against the TLA's "Wer ist denn das?": the answers are places, days and things as
   often as gods; `מי` only for *pw tr rf sw*.
4. **17.1 sḫꜣ.w!! `זכרונות`** follows the TLA's lemma; the other witnesses have *sꜣḫ.w* "akh-spells" (title "praises and
   transfigurations").
5. **ḫꜣw.t**: BD 114 `שולחן־הקרבנות` vs WE 9,26 `מזבחות` (an existing split, for the lead).

### Progress log
- Drafted in seven saves (17.1–23, 17.24–41, 17.42–66, 17.67–83, 17.84–103, 17.104–119, 18.1–18PS.3), each filled and
  verified at once; `tr NU1` read after each save and the **תרגומים** bullet written; about 45 lines changed after the
  TLA (tense/voice: 17.21, 17.23, 17.50, 17.64, 17.112, 18.39, 18PS.2; segmentation: 17.5, 17.11, 17.34, 17.55, 17.111,
  17.113–115, 18.37; the referent of a pronoun: 17.13, 17.41, 18.5; a word: 17.6, 17.53, 17.89, 17.95, 18.23, 18.26,
  18.28, 18.32, 18.34, 18.38).
- Pass (a) fidelity: a script listed every bracketed source token against the Hebrew brackets; 12 lines fixed (17.17
  `[בראשי]`, 17.45 `[מה]`, 17.69, 17.80, 17.113, 17.114, 18.18 (`ההוא`, `הָאקֶר` unbracketed: one sign restored;
  `[המתים]`), 18.28 `[ואז]`, 18.36 `[תְּחוּת]`, 18PS.1 `[כל]? … [אשר יחפוץ]?`); hꜣi̯ unified to `ירד` (17.32, 17.76).
- Pass (b) consistency: every new Hebrew word grepped in the corpus: `תקרובת` (WE's mꜣꜥ) → `דברי־הערב`; `שחיטה` (SS's
  sfṯ) → ḫry.t `הטבוחים`; `הקדמונים` (HC's tp.jw-ꜥ) → jm.j.w-bꜣḥ `אשר לפנים`; `jr` / `jr gr.t` checked by script
  (`אשר ל` / `ואשר ל`, 12 lines aligned); the quoted gloss of 17.118 aligned with 17.114 (`חסרון בהם`); the BD 18
  refrain identical in all copies (`verify`: 0 repeated-line differences).
- Pass (c) Hebrew: the clean text read through; heading 17.32 aligned (`הדם שירד`); register even, no vav-consecutive.
- `verify NU1 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems;
  `build NU1` done.

### The text on its own terms
- **Commentary inside scripture** (passim): BD 17 is already an old, obscure text for its scribes, who gloss it line by
  line ("What is it? It is …"; "Variant: …") and leave rival readings side by side – one of the oldest commentaries on
  a sacred text, as authoritative as the text itself.
- **To be saved is to be the creator** (17.4–17.9, 17.105–17.106): the dead man says "I am Atum when I was alone in Nun":
  identity with the god at the first moment, not prayer to him, is the way out of death.
- **Time has two eternities** (17.10, 17.16–17.17): *nḥḥ*, the cycling time of the sun, is "day" and Re ("tomorrow");
  *ḏ.t*, the fixed time of the mummy, is "night" and Osiris ("yesterday"); the dead man is both.
- **Re and Osiris are one** (17.56–17.60): the setting sun enters Mendes, finds Osiris and embraces him; together they
  become "the one with two bas" – the solar–Osirian union of New Kingdom theology in a single scene.
- **Creation by the body** (17.8, 17.32–17.33): the gods are the names of Re's limbs; Utterance and Perception (Hu and
  Sia) come from the blood of his self-inflicted cut – the creator's word is a part of his body.
- **Puns are theology** (17.62–17.63, 17.95): Re is "Cat" (*mjw*) because Sia said he is "like" (*mjw*) what he made;
  the creator's body (*ḏ.t*) is eternity (*ḏ.t*).
- **The judge's face is the balance** (17.68, 17.72): eyebrows like the arms of the scales; a double-headed god returns
  wrong to the wrong-doer and truth to him who comes with it – justice as reflection, not mercy.
- **The beyond is a slaughterhouse with names** (17.70–17.98, 18.26–18.28): lassos, knives, cauldrons, a lake of fire,
  Shesmu of the wine-press; knowing each demon's name is the protection.
- **Myth as lawsuit** (BD 18): the Horus–Seth conflict is an inheritance case heard by tribunals in Egypt's oldest cult
  towns; Thoth, the scribe, "makes Osiris true of voice" – the cosmos is restored by a verdict, and the dead man asks
  for the same verdict in the same courts.
- **Mourning and birth in one person** (17.108–17.109, 18.15–18.16): the dead man is Isis with dishevelled hair, who
  conceived, and Nephthys, who bore; Isis lies awake in mourning for her brother.
- **The rubric's personal witness** (18PS.2–3): "I have seen it; great things came to pass through me" – the spell is
  vouched for like a remedy.

### Key parallels
- [divergence] Gen 1:2 `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` / `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` ↔ 17.4: the god alone in the primeval
  water – but *inside* it, and self-originating (17.7), not hovering over it.
- [equivalent] Gen 2:5 `טֶרֶם יִהְיֶה` ↔ 17.5 `טרם נהיו הרמות שׁוּ` (the Pyramid Texts' "not yet", §6.5); [divergence] Gen 1:7
  the separation of sky and earth – Shu's "raisings".
- [divergence] Isa 44:6 `אֲנִי רִאשׁוֹן וַאֲנִי אַחֲרוֹן`, Isa 46:10 ↔ 17.10 "I am yesterday, I know tomorrow": a god who
  encloses time – split by the gloss into two gods.
- [divergence] Gen 1:5 day and night ↔ 17.16–17: *nḥḥ* is the day, *ḏ.t* the night; [equivalent] Isa 57:15 `שֹׁכֵן עַד`.
- [divergence] Gen 2:20 (naming) ↔ 17.8: the creator names his own limbs and they become gods.
- [equivalent] Ps 33:6 `וּבְרוּחַ פִּיו` ↔ 17.66: the sun gives the winds by the breath of its mouth.
- [equivalent] Ps 18:26, Jer 17:10 ↔ 17.72: the judge returns wrong to the wrong-doer, truth to the truthful.
- [equivalent] Dan 5:27 ↔ 17.68: the judge's eyebrows are the arms of the balance.
- [equivalent] Ps 141:2 `מִנְחַת-עָרֶב` ↔ 18.3: the evening offering as a fixed time of cult.
- [cognate] Gen 41:45 `אֹן` ↔ 17.15 (Heliopolis); Isa 30:4 `חָנֵס` ↔ 17.89 (Herakleopolis).

### Lines shared with other texts
None copied. Shared strings: 17.61 = 18.3–4 (`בלילה ההוא של הקרב ושל עשיית המשמר על המורדים`, the same night in both
chapters); 17.11 / 17.61 (`ביום ההוא אשר הושמדו בו אויבי אדון הכל`); BD 125's words reused (`שוער`, `בית־המטבחיים`,
`מביא־זרועו`, `בָּבִי`, `נֶחֶבְּכָּאוּ`, `חֶרְעַחָא`, `היוצא אחורנית`, `שני־אריות`, `מזוקק`, `קיצץ`, `פגם`, `דרך`, `מפקד`,
`שולחן־הקרבנות`, `הגיד`, `בלע`, `קרובים`, `דבר נכון באמת, אלפי אלפים פעמים`, `יאמרו את הלחש הזה (כשהוא) טהור`).

### Proposals for the shared renderings
1. **The formulas table above** as a §12.4 row set for NU2–NU10 and CH: the gloss (`מה הוא?` / `מה היא?`, `X הוא`,
   `נוסח אחר:`, `אשר ל־X –` / `ואשר ל־X –`), `תציל את N אמיתי־הקול מיד X`, the smꜣꜥ-ḫrw forms, BD 18's refrain (two
   fixed strings: `הוֹ תְּחוּת, אשר אימת את קול אוֹסִירִיס נגד אויביו, תאמת את קול` and `נגד אויביו בוועד הגדול אשר ב־X`),
   `ṯz-pẖr` `ולהפך`, `zp-2` `(פעמיים)`, the rubric `יאמר אדם את הלחש הזה (כשהוא) טהור`.
2. **The chapter title** (not met in NU1; fixed here for the next translators): `rʾ n` + infinitive = `לחש ל־` + Hebrew
   infinitive (`לחש לצאת ביום`, `לחש לבלי להירקב`); + a noun = `לחש ל־` + noun; `rʾ n jri̯.t ḫpr.w m X` = `לחש לעשות צורה
   של X` (*ḫpr.w* `צורה`); `pri̯.t m hrw` as a noun `יציאה ביום` (18PS.1).
3. **Key terms:** ḏꜣḏꜣ.t `ועד`; wjꜣ `צִי` ★ (not `הסירה`); sḫ.t-jꜣr.w `שְׂדֵה־הָאַגְמוֹנִים` (HC 40) and sḫ.t-ḥtp
   `שְׂדֵה־הַקּוֹרְבָּנוֹת` (PT527) – not §12.3's `שדה הקנים` / `שדה הנחת`; ẖꜣ.t `גופה` (not `גוויה`, MT's ḏ.t); the rest of
   the key-terms table above. **Not met in NU1** (left to their first translator, with these suggestions): sꜣḫ "make an
   akh" `עשה לאָח` / sꜣḫ.w "akh-spells" `לחשי־אָח`; šw.t "shadow" `צֵל` (§12.3); sꜥḥ "the noble dead, mummy" `חנוט`?;
   the night and day barks mskt.t / mꜥnḏ.t transliterated `מֶסְקְטֶת` / `מַעַנְגֶ׳ת`.
4. **Names:** the list above.
5. **Gate licences (for the coordinator; the tool was not edited):** (a) the `חם` gate should license the place name
   *Ḫm* (Letopolis) – BD 125 (27, 45) and NU1 (17.73, 18.7–18.9) need `[היתר שער]` for it; (b) the `ברא` gate
   reads `ברא־סטאו` (b + Rosetau) as the root (18.34–35): license *Rʾ-sṯꜣ.w*; (c) the "better than"
   formula fires on `ꜣḫ,w r jri̯.t` (17.96: a noun "power" + "in order to"): it needs `\bꜣḫ\b(?!,)`.

### Lessons for the guidelines
- A glossed text needs its gloss formulas fixed before the first line (question, answer, variant, topicalizer), and a
  script to check them (`jr` / `jr gr.t` against `אשר ל` / `ואשר ל`): the drafts drifted on 12 lines.
- A bracket script (source tokens with `[ ]` against the Hebrew brackets, line by line) catches what a reading misses
  in a heavily restored opening.

## NU2 1.1–42.29 (Round 6 run 2, translator 2; 2026-11-06)

### Scope
KEY NU2 = 22 chapter texts of pNu in the papyrus's order – BD 1, 22, 23, 25, 26, 28, 28-2 (= CT 389), 27, 30A, 30B, 43,
24, 31, 33, 34, 35, 74, 45, 93, 91, 41, 42 – 153 lines (`1.1`–`42.29`; 30B starts at the TLA's `30B.2`), all drafted,
filled, verified, compared with the TLA's German and passed three times; the clean translation built
(`translation-NU2.rtl.md`; intro `translation--intro-NU2.rtl.md`). One `## ` heading per chapter (22). Preservation: good
on the whole; restorations sporadic (1.14, 1.16–1.19, 22.3–22.4, 23.1–23.3, 26.2, 26.4–26.5, 28.2–28.8, 30A.4–30A.5,
24.3–24.7, 31.1, 35.3, 45.2, 93.5, 42.13, 42.18); `[…]` mostly the owner's name, which the TLA leaves out; a few words
the TLA itself does not identify (42.2 *tw*, 42.3 *wjs*, 42.4 *jn*, 42.29 *bꜣꜣ*) are `…` or `*…*?`. The text: the funeral
procession and the lawcourt of Thoth (BD 1), the spells that give the dead his mouth, name and heart and keep his heart
and head (22–30B, 43), and the spells of magic and protection against crocodiles, snakes, decay, being carried off and
slaughter (24, 31–45, 93, 91, 41), ending with the identification of every limb with a god (42).

### Sources consulted
AED-TEI pNu (`data NU2`, the base and per-word lemmas/glosses); the TLA's German (`tr NU2`), read after each of the six
drafting saves (1 / 22–26 / 28–30B / 43–35 / 74–41 / 42) – it changed about 60 drafted lines (each listed in the entry's
**תרגומים** bullet, "הטיוטה הראשונה … תוקנה"). Exception, recorded: the `tr` call for 43–45 also printed 74 and 45,
which were read in the German before their entries were written (their readings had been planned beforehand; 74.4 and
45.3 were rechecked against the transliteration). No other witness in the folder; Faulkner, Allen, Quirke, Lapp: from
memory only, never quoted. Every Bible verse printed with `check_bible_quotes.py --show` before quoting; the checker
reports 0 problems on the three files.

### Decisions
**Chapter titles** (§12.6.1.3, enforced): `rʾ n rḏi̯.t X n N n=f` = `לחש לתת את X של N … לו בחלקת־האל` (22, 25, 26: the
series "mouth / memory / heart" kept parallel); `rʾ n tm rḏi̯.t sḏm.tw=f X` = `לחש לבלי לתת ש־` + future (28, 28-2, 27,
30A, 43, 93); `rʾ n tm X` with a passive sense and the dead as patient = `לחש לבלי + נפעל infinitive` with the name set off
(`לחש לבלי להינשך – […] אמיתי־הקול – בידי נחש`, 34; `לחש לבלי להיאכל`, 35; `לחש לבלי להירקב`, 45; `לחש לבלי לנעול`,
91); `rʾ n ḫsf X` = `לחש להדוף X` (31, 33, 41, 42). `ḏd=f` = `אומר הוא:`; `ḏd-mdw jn N` = `דברים לאמר, בפי N:` (§12.4.2).
Where the base has `ḏd-mdw jn mꜣꜥ-ḫrw` without `[…]` (none in NU2: every occurrence has `[…]`), no bracket would be added.

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| mtr.w "witness" | `עֵד` (always vocalized) | 30A.2, 30B.3–4 | AM 20.11 `עֵדֶיךָ`; BD 69, 75 wrote it unvocalized (reads "eternity" `עַד`, ḏ.t's word): propose vocalizing BD's too |
| ꜥḥꜥ r "stand against" | `עמד נגד` | 23.5, 30A.2, 30B.3, 33.2 | ꜥḥꜥ = `עמד` (MT, HC); not Deut 19:15's `קום` (the parallel goes to the apparatus); ꜥḥꜥ.w "those standing up" `העומדים` (30B.6, 35.4) |
| sḫsf "oppose" | `התנגד` | 30A.1, 30B.3–4 | causative of ḫsf `הדף`; a separate verb so that the two stand apart |
| rqi̯ / rq.w | `צרר` / `איבה` | 27.6 / 30B.4 | AM 15.14 `צורר` |
| jb.pl / ḥꜣ.tj.w | `לִבּוֹת` / `לְבָבוֹת` (vocalized) | 26.1–2, 27.2, 42.27 | the two hearts keep two Hebrew words in the plural too |
| bsk "entrails" | `קרביים` | 30A.4 | NU1, BD |
| jṯi̯ "seize, rob" | `תפס` (28-2.1 `יובילו`, "carry off" by sense) | 27–28, 31, 93.3 | NU1 17.106; the split recorded at 28-2.1 |
| ḫsf / šnꜥ / nḥm | `הדף` / `מנע` / `נטל` (take) – `הציל` (save) | 1.20, 23.3, titles / 1.20 / 28.6, 43.3 | BD 125 |
| ḥkꜣ "magic" | `קסם` / `קסמים`; verb ḥkꜣ `קסם` (23.1) | 23.5, 24, 31 | §3.1, §11.3 |
| ḫnj "lock up" | `נעל` | 1.4, 26.7, 91 | NU1 18.23 (HC 77's tbj `נעול` is another lemma: an existing split) |
| wn / wpi̯ / wbꜣ "open" | `פתח` / `פילח` / `פער` | 1.18–19, 23.4, 41.6, 42.18, 42.27 / 41.5 | BD 1 sets wn and wpi̯ in parallel: one Hebrew would erase the pair; `פילח` "cleave" suits the adze of the Opening of the Mouth (23.4); SS 67/81 has wpi̯ rʾ `פתח` (a split, for the lead) |
| wḏꜥ-mdw / wḏꜥ "judge" | `שפט` (`השפיטה`, `השופט`) | 1.3, 1.6, 30B.6, 35.4 | `מִשְׁפָּט` stays reserved; the root unused so far in the corpus |
| psš "divide" | `חילק` | 22.3, 26.4, 35.4 | BD 75 `חלוקת` |
| znj "pass by" | `עבר (על פני)` | 35.3, 42.22, 42.24, 42.27 | HC 82, SS 9 (`חלף` is BD 125's swꜣ) |
| ḏꜣi̯ "ferry across" | `הסיע` | 93.1, 93.6 | `השיט` was read by the `שיטה` gate; `העביר` would take znj's root |
| dmḏ "join, assemble" | `צירף` | 23.6, 24.3, 24.5 | NU1 17.91 |
| jꜥi̯ "wash" | `שטף` | 1.9 | WE 10,11, BD 51 |
| šꜥd "cut off" | `חתך` | 43 | WE 10,11 |
| ḫnḏ / ḫnd "leg" (Osiris's relic) | `כרע` (fem.) | 28.8, 28-2.2 | `שוק` is ḫpš's (NU1, HC 55); the biblical word for an animal's leg (Lev 1:9; Amos 3:12 [divergence]) |
| qꜥḥ "shoulder, upper arm" | `שכם` | 1.10, 41.6 | `כתף` is ḫpš's (NU1 18.32), `זרוע` ꜥ's |
| ṯpḥ.t "hole, cavern" | `מחילה` | 1.9, 28.7 | `מערה` is BD 125's qrr.t |
| nsr / nbj.t / hh "flame / blast" | `להבה` / `שביב` / `להט` | 22.3, 25.2, 43.2 / 34.2 / 42.26 | NU1 Nsr.t `הלהבה`; sḏ.t has `שלהבת` (NU1) and `להבה` (BD): an existing split, for the lead |
| psḏ "shine" / ꜥḏ / (j)ꜣḫ.w "light" | `זהר` (`המזהיר` transitive, 42.23) / `נוגה` / `אורה` | 34.2, 74.2, 42.23 / 41.3 / 74.3 | NU1 17.65 psḏ `הזוהר`; HC has ꜥḏ `זוהר`: a split, for the lead |
| wrḏ / nni̯ "be weary" | `יגע` (`יגע־הלב`) / `נלאה` | 1.9, 45.2 / 74.3 | SS 20 swrd `מייגע`; NU1's bdš is `העייפה` |
| ḥwꜣ "rot" | `נרקב` / `רקוב` | 33.3, 45 | §12.6.1.3's example; NU1 ḥwꜣꜣ.t `הרקב` |
| pzḥ "bite" | `נשך` (verb only) | 34.1 | the natural snake verb (Gen 49:17); the gate is on the noun `נֶשֶׁךְ` |
| ḥfꜣw / ꜥrꜥr.t / mzḥ / swy | `נחש` / `פתן` / `תמסח` / `סוּאִי` (transliterated) | 33–35 / 34.2 / 31 / 31.2 | §11.4, BD 94, §4.2; swy kept apart from msḥ |
| wnm "eat" | `אכל` (wnm.yt "the devouring fire" `האוכלת`) | 1.11, 26.2, 33.2, 35 | Deut 4:24 `אֵשׁ אֹכְלָה` [equivalent] in the apparatus |
| nḏ / zꜣu̯ / mki̯ "protect, guard" | `שמר על` / `שמר` / `נצר` (`הַנּוֹצֵר`, vocalized) | 1.10 / 28-2.2 / 42.19 | nḏ and zꜣu̯ both `שמר` in NU1 already (a split, for the lead); `סוכך` is PT600's dnḫnḫ, `מגונן` AM's stꜣ |
| ḫfꜥ / ꜣmm / nḏri̯ "grasp" | `לפת` / `אחז` / `לכד` | 42.11, 42.26 / 42.11 / 93.6 | `תפס` is jṯi̯'s; AM 7.9 mḥ `היאחז` (another binyan) |
| ḥqꜣ (verb) | `משל` | 42.15, 42.18, 42.27 | sḫm = `שלט` (§12.3); NU1 used `לשלוט` for the noun ḥqꜣ.t (an existing overlap) |
| zbi̯ "go" / zbi̯ ḥr "stand up for" | `צעד` / `התייצב למען` | 42.13 / 1.5 | HC 34 `[צעד]`; the idiom by sense |
| sḫpr "bring into being" | `חולל` | 27.2–3, 30A.3 | BD 78 `המחוללים` |
| grg "found; equip" / grg.w "equipment" | `כונן` / `ציוד` | 27.3 / 31.4 | HC 40 `אצייד` (split by sense) |
| ḏbꜥ "seal" / ḏbꜥ.w "reproach" | `הטביע` / `תוכחה` | 27.3 / 27.4 | the Egyptian pun kept in the note; `טבעת` (ḏbꜥ.t) stays the loanword |
| ꜥpr "equip, make ready" | `ערוך` | 91.4, 42.3 | `מצויד` would take grg's root |
| sjp "assign" / sjp.w "inspection" | `הפקיד` / `בדיקה` | 28.4 / 42.13 | NU1 18.23 `הבדיקה` |
| swḏ "hand over" | `מסר` | 30A.5 | SI's `הוריש` is for property: split by sense |
| ḫnp "present" | `הגיש` | 28.5 | NU1 17.84 `החוטף` ("snatch"): split by sense |
| ṯꜣi̯ "take" | `נטל` | 74.4 | NU1 17.93, AM 4.7 (BD 125's nḥm also `נטל`: an existing overlap) |
| wni̯ "hurry" | `החיש` | 74.1 | AM's "neglect" `הזניח`: split by sense |
| jꜣ.t "standard (pole)" / jꜣ.t "back" / psḏ "back, spine" | `מוט` / `גו` (`גֵוִי`) / `גב` (`גַּבִּי`) | 34.2, 42.2 / 42.9 / 42.7 | BD 77 `מוטו` (MT 9 has `נֵס`: an existing split) |
| šnꜥ / šnb.t "breast" | `חזה` / `בית־חזה` | 42.7 / 42.8 | two lemmas, two words |
| msḏr "ear" | `אוזניים` | 42.6 | the same Hebrew as AM's ꜥnḫ.wj (never in one text: recorded) |
| sst "calf" | `סובך` | 42.9 | `שוק` is ḫpš's |
| jbḥ / nḥḏ.t "tooth" | `שיניים` / `ניבים` | 31.4, 42.6–7 | BD 35 `לבן־שיניים`; SS 164 nḥḏ.t "tusk" in a compound |
| qfdn.w "ape, baboon" | `בבון` | 42.28 | `קוֹף` is gated to gf; AM's jꜥnꜥ is also `בַּבּוּן` (two baboon words, never in one text) – open for the lead |
| jsr "tamarisk" | `אֵשֶׁל` (vocalized) | 42.4–5 | Gen 21:33 [equivalent] |
| wnb "flower" | `ציץ` | 28.2, 42.24 | `פרח` is TB's ḥrrw |
| rw / Rw.tj | `אריה` / `שני־אריות` | 28.2, 28-2.1 / 41.1 | NU1 |
| sd.yw / ḥnsk.ty.w / štꜣ.w-jb | `בעלי־הזנבות` / `בעלי־הצמות` / `נסתרי־הלב` | 28.3 / 30A.4 / 28.4 | descriptive names translated (BD 125's practice) |
| jm.j-wr.t, Sꜣḥ.yt, Rrk, Zkzk, Mꜣfd.t, Ḥzꜣ.t, Tbj, Ḫꜣs, Dnp.w, gꜣy, Ḏw.f.t, nwr | `אִימִית־וֶרֶת`, `סָאחִית`, `רֶרֶק`, `זֶקְזֶק`, `מַאפְדֶת`, `חֶסָאת`, `טֶבִּי`, `חָאס`, `דֶּנֶפּוּ`, `גָּאִי`, `גֶ׳וּפֶת`, `נוּר` | first occurrences | transliterated (§2.2) |
| pꜥ.t / rḫ.yt / ḥnmm.t (the three words for mankind) | `הפָּעַת` / `העם` / `החֶנְמֶמֶת` | 42.12 | rḫ.yt as NU1; the other two transliterated, a note |
| pr-wr / pr-nzr; ḥw.t-sr; jw-nsrsr | `בית־הגדול` / `בית־הלהבה`; `בית־השר`; `אי־הלהבות` | 25.2; 1.6; 22.3, 24.4 | translated: transparent names |
| ḏd.y "the Busirite"; ḫy "child"; jbw "calf" | `הגֶ׳דִּי`; `עולל`; `עגל` | 1.6, 35.2; 42.3, 42.18; 42.3 | `תינוק` is a BD 125 judge's name |
| ḥz.wt "favour" | `חן` | 42.4 | AM 16.11 |
| nṯr.j "divine" | `האֵלִית` (vocalized) | 26.6, 42.7 | BD 36 `של אֵל` (a genitive there) |
| bjn ḏw (adverbial pair) | `ברע וברעה` | 93.4, 42.17 | §4.3 bjn `רע`, ḏw `רעה` |
| zp-2 / zp-4 | `(פעמיים)` / `(ארבע פעמים)` | passim | NU1 |

**Formula departures recorded:** 41.1 and 91.4 carry `[סטייה מן הנוסחה]` (ꜣḫ … r is a comparison "more akh than" / a noun
plus a preposition, not "better X than Y").

**Rejected (gates and echoes):** `קום` for ꜥḥꜥ in the witness lines (the corpus has `עמד`; Deut 19:15–16 and Ps 27:12 in the
apparatus); `תנין` (Ex 7:12 in the apparatus only); `שוק` for ḫnḏ / sst; `השיט` (the `שיטה` gate); `הלוחמים` (read by the
`חם` gate: `הנלחמים`); `מגילה` for mḏꜣ.t "chisel" (another lemma: `מפסלת`); `אלוהית` for nṯr.j (`האֵלִית`).

### Open decisions for the user
1. **`עֵד` "witness" vs `עַד` "eternity"**: NU2 vocalizes both where they occur (30A–30B `כְּעֵד`; 26.8 `לעד ולנצח`, 27.3 `העַד`);
   BD 125 (69, 75) has an unvocalized `עד` for mtr.w – proposed: vocalize it there too.
2. **Two "open" verbs in BD 1** (wn `פתח`, wpi̯ `פילח`): a split from SS 67/81 (wpi̯ rʾ `פתח`). Alternative: wpi̯ `פתח` everywhere,
   and lose BD 1's pair.
3. **qfdn.w `בבון`** beside AM's jꜥnꜥ `בַּבּוּן`: two Egyptian words in one Hebrew (no text has both). Alternative: transliterate
   `קְפֶדְנוּ`.
4. **sḫsf `התנגד`** against `התקומם`: chosen for "oppose (in court)"; 30B's famous line reads "אל תעמוד נגדי כעֵד, אל תתנגד לי בוועד".
5. **mꜣꜥ-ḫrw without `[…]`**: no case in NU2, but later NU parts have `ḏd-mdw jn mꜣꜥ-ḫrw` with no gap marked in the base; the
   brief's bracket rule would then give `בפי אמיתי־הקול` (no `[…]`), §12.4.2 shows `בפי […] אמיתי־הקול` – the coordinator decides.

### Progress log
- Drafted in six saves (1.1–1.21; 22–26; 28–30B; 43, 24, 31, 33, 34, 35; 74, 45, 93, 91, 41; 42), each filled and verified at
  once; `tr NU2` read after each save (74 and 45 early, see Sources) and the **תרגומים** bullet written; about 60 lines changed
  after the TLA – speaker and quotation structure (1.7–1.8: the formula is a report, "so spoke Re … so spoke the Maker to
  me, Thoth"), tense and mood (22.1, 22.4, 26.2, 26.6–7, 27.3, 31.2, 41.4, 42.15–16, 42.18), syntax (22.3, 23.5–6, 28.3–28.8,
  28-2.2, 30A.3, 30B.6, 31.4–5, 35.2–3, 42.2–3, 42.13, 42.19, 42.21–27), a word's sense (24.3 "in" not "from", 25.4, 28.6
  nḥm "save", 28.7 kꜣ.w "the kas", 93.5 ndb "gore", 42.20 nbi̯ "gild", 42.29).
- Pass (a) fidelity: a script compared every bracketed source token with the Hebrew brackets: 3 lines fixed (22.3 `[המדרגה]`,
  24.7 `[ב]כל` – *nb* is written, 30A.5 `ל[נֶחֶבְּכָּאוּ]` – half the name restored); every negation and tense rechecked with the
  TLA comparison.
- Pass (b) consistency: every new Hebrew word grepped in the corpus; changed: znj `חלף` → `עבר` (HC, SS; `חלף` is swꜣ's),
  dmḏ `איחד` → `צירף` (NU1), ḫfꜥ `אחז` → `לפת` (AM's mḥ), mki̯ `סוכך` → `נצר` (PT600's dnḫnḫ, AM's stꜣ), sst `שוק` → `סובך`
  (ḫpš), ḏꜣi̯ `השיט` → `הסיע` (gate), jꜥi̯ `רחץ` → `שטף` (WE); the 30A.2 / 30B.3 pair, the 34.1 / 35.1 titles and 24.3 / 24.5 / 24.7
  aligned word for word (`[מקבילה]` notes); `verify` reports 0 repeated-line differences.
- Pass (c) Hebrew: the clean text read through; `וייהיה` → `ויהיה` (93.6); heading 93 aligned (`שיסיעו`); register even, no
  vav-consecutive.
- `verify NU2 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems;
  `build NU2` done.

### The text on its own terms
- **The heart is a witness and a separate person** (26–30B): it weeps for itself before Osiris (28.4), holds the "annals" of the
  man (28.7), "will not say what I did" (27.5), can "stand against me as a witness" (30A.2, 30B.3) – and the dead man must
  become its master (27.6 "I am your lord"). Two hearts, *jb* and *ḥꜣ.tj*, and the entrails, are greeted as interlocutors
  (30A.3–4).
- **The heart is the product of one's deeds** (27.2): demons "bring a man's heart into being according to what he does" – the
  moral record is an organ.
- **The dead man is assembled from parts** – mouth (22–23), name (25), heart (26–30B), head (43), magic (24), ba and shadow (91,
  26.8) – each restored by its own spell; personhood is plural.
- **The Opening of the Mouth** (23): Ptah's metal adze that "opened the mouth of the gods" is the tool of the funerary ritual:
  making a statue live and making a mummy live are one rite.
- **Every limb a god** (42.5–42.10): hair Nun, face the sun-disk, eyes Hathor … toes falcons, "no limb of mine is without a god"
  – divinization by enumeration, the body as a pantheon; and therefore "I shall not die again" (42.20), the "second death".
- **Myth as lawsuit, the dead as court official** (1): the dead man is Thoth, the scribe who wrote the verdict for Osiris, and a
  list of priests in Egypt's cult towns; his reward is free entry and exit, "praised and beloved", with an empty balance (1.21).
- **Death as a daily sunset** (41.4–41.5): "I live after my death, like Re every day"; entering and leaving the tomb (1.10,
  41.4) mirrors the sun's cycle.
- **Magic as a living, hunted power** (24): gathered "faster than a greyhound, swifter than a shadow" from every place and person,
  and robbed by crocodiles (31) – magic is life itself ("the crocodile who lives by magic", 31.5).
- **Threatening the gods** (93.4–93.6): if the dead man is carried off, Re's phallus swallows Osiris's head and Khepri's horns
  gore – the cosmic order is held hostage to the safety of one man.
- **Names are power** (25, 31.2–3, 42.25): to name a demon before the great god is to deliver him; to be unknown ("none knows me,
  none will know me") is to be safe.
- **Food taboos and purity** (28.2, 33.2–3): "my abomination is the god's slaughterhouse"; the snake that ate a mouse and the bones
  of a rotten cat is outside the order of Re.
- **Recitation is written into the text** (zp-2, zp-4, ṯz-pẖr, "to be said over it" 30B.2): the papyrus is a script for performance.

### Key parallels
- [equivalent] Deut 19:16 `כִּי יָקוּם עֵד חָמָס בְּאִישׁ` (also Deut 19:15, Ps 27:12) ↔ 30A.2, 30B.3 "do not stand against me as a
  witness": the courtroom idiom of a witness "standing" against a man; here the witness is one's own heart.
- [divergence] Ps 139:23 `חָקְרֵנִי אֵל וְדַע לְבָבִי` ↔ 30B.3: the psalmist asks God to search his heart; the Egyptian asks his heart not
  to testify. [equivalent] Jer 17:10 ↔ 27.2 (the heart "made" according to one's deeds).
- [equivalent] Job 27:6 `לֹא-יֶחֱרַף לְבָבִי מִיָּמָי` ↔ 27.4: the heart that might reproach its owner.
- [equivalent] Job 31:6 `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק` ↔ 1.21, 30B.4: weighed in the balance and found clear; [divergence] Dan 5:27.
- [equivalent] Ex 5:21 `הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה` ↔ 30B.5 "do not make my name stink before the court".
- [divergence] Amos 3:12 `שְׁתֵּי כְרָעַיִם` ↔ 28.8, 28-2.2: a leg saved from the lion / the slaughter-house – Osiris's relic.
- [equivalent] Ps 121:8, Deut 28:6 ↔ 1.10, 1.20: "going out and coming in" as the whole of life's movement, "praised … beloved".
- [equivalent] Deut 4:24 `אֵשׁ אֹכְלָה` ↔ 1.11 *wnm.yt* "the devouring (fire)".
- [divergence] Song 5:11 ↔ 42.5–42.10: a body described limb by limb – in the Song each limb is like a precious thing, in BD 42 each is a god.
- [divergence] Isa 25:8 `בִּלַּע הַמָּוֶת לָנֶצַח` ↔ 41.5, 42.20: not the end of death, but its daily repetition and the avoidance of a
  "second death".

### Lines shared with other texts
None copied. Inside NU2: 30B.3 copies 30A.2's Hebrew where the Egyptian is the same (`לבי של אמי (פעמיים)! … אל תעמוד נגדי
כְּעֵד`); 27.1 copies 28.1's title; 35.1 copies 34.1's frame; 24.5 and 24.7 copy 24.3. Strings reused from NU1 / BD 125:
`אשר אימת את קול … נגד אויביו`, `ביום ההוא של`, `הוֹ`, `שלום לפניכם`, `אחורה … סור`, `בית־המטבחיים`, `טבח`,
`שוער`, `דלת`, `גזל`, `אמר כזב`, `סכר`, `דרך`, `שתי־גדות־הכובסים`, `חֶרְעַחָא`, `סָאוּ`, `שני־אריות`, `נֶחֶבְּכָּאוּ`, `צִי`, `זכרות`,
`יראת־כבוד`, `מורא`, `טרדה`, `הכתר־הגדול`.

### Proposals for the shared renderings
1. **Title formulas** (to §12.4.1/§12.6.1.3): `rʾ n rḏi̯.t X n N n=f` = `לחש לתת את X של N … לו`; `rʾ n tm rḏi̯.t sḏm.tw=f` =
   `לחש לבלי לתת ש־` + future; passive `rʾ n tm X N jn Y` = `לחש לבלי + נפעל, – N –, בידי Y`; `rʾ n ḫsf X` = `לחש להדוף X`.
2. **The heart chapters' fixed strings:** `לבי של אמי (פעמיים)!`, `אל תעמוד נגדי כְּעֵד`, `אל תתנגד לי בוועד`, `ממונה־המאזניים`,
   `שלום לפניך, לבי / לבבי`; mtr.w `עֵד` always vocalized (and BD 69, 75 to be vocalized).
3. **Key terms:** the table above, especially ꜥḥꜥ `עמד`, sḫsf `התנגד`, rqi̯ `צרר` / rq.w `איבה`, ḥkꜣ `קסם`, ḫnj `נעל`, wpi̯ `פילח`,
   wḏꜥ(-mdw) `שפט`, znj `עבר`, ḏꜣi̯ `הסיע`, ḫnḏ `כרע`, qꜥḥ `שכם`, ṯpḥ.t `מחילה`, nbj.t `שביב`, ꜥḏ `נוגה`, wrḏ `יגע` / nni̯ `נלאה`,
   pzḥ `נשך` (verb), ḫfꜥ `לפת` / ꜣmm `אחז` / nḏri̯ `לכד`, mki̯ `נצר`, ḥqꜣ (verb) `משל`, jsr `אשל`, wnb `ציץ`, qfdn.w `בבון` (open).
4. **Names:** the list above (first occurrences vocalized).
5. **Splits for the lead** (existing before NU2, met here): sḏ.t `שלהבת` (NU1) / `להבה` (BD); nḏ and zꜣu̯ both `שמר` (NU1);
   ꜥḏ `זוהר` (HC) / psḏ `זוהר` (NU1); (j)ꜣ.t `נֵס` (MT) / `מוט` (BD 77); ṯꜣi̯ and nḥm both `נטל`.
6. **Gates (for the coordinator; the tool was not edited):** (a) the `שיטה` gate reads verbs of שוט (`משיטים`, `השיט`); (b) the `חם`
   gate reads `הלוחמים` (ה־ל־ו + חמים); (c) the "better than" formula fires on ꜣḫ.kw r ("more akh than", 41.1) and on ꜣḫ=f … r
   (91.4); (d) the trap `אלה` fires on "these" whenever ẖr-nṯr is in the line (24.5: vocalized `אֵלֶּה`) – the licence could
   exclude ẖr-nṯr.

### Lessons for the guidelines
- Restrict `tr` to the section just drafted (`tr KEY FROM TO` with TO = the last drafted label): a range one chapter too wide
  shows the German of undrafted lines.
- In a book of spells the quotative frame (*ḫrw-fj*, *j.n*, *ḏd=f*) often follows the quotation: draft the speaker structure
  only after reading the whole sentence across the line breaks.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (BD)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | j⁝nḏ-ḥr =k nṯr-ꜥꜣ nb mꜣꜥ,tj jy.n =j ḫr =k nb =j jnt!.kw mꜣn! =j | שלום לפניך, האל הגדול, אדון שתי האמת! באתי אליך, אדוני; מובא אני כדי שאראה | `זֶה דּוֹר דֹּרְשָׁו; מְבַקְשֵׁי פָנֶיךָ יַעֲקֹב סֶלָה` (תהלים כד:ו) | equivalent | *nḏ-ḥr* "לדרוש את הפנים" הוא ברכת הבא אל האל, כמו "מבקשי פניך" בליטורגיית השער. |
| 6 | hrw pwy n ḥsb qdw,w m-bꜣḥ Wnn-nfr,w m =k zꜣ,t.j Mr,tj nb Mꜣꜥ,tj rn =k m =k wj | ביום ההוא של חשבון המידות לפני וֶנֶּפֶר. הנה, "שתי־הבנות־מֶרְתִּי, אדון שתי האמת" – שמך. הנה אני | `תְּקֵל תְּקִילְתָּ בְמֹאזַנְיָא וְהִשְׁתְּכַחַתְּ חַסִּיר` (דניאל ה:כז) | equivalent | שקילת האדם וחשבון מידותיו |
| 6 | hrw pwy n ḥsb qdw,w m-bꜣḥ Wnn-nfr,w m =k zꜣ,t.j Mr,tj nb Mꜣꜥ,tj rn =k m =k wj | ביום ההוא של חשבון המידות לפני וֶנֶּפֶר. הנה, "שתי־הבנות־מֶרְתִּי, אדון שתי האמת" – שמך. הנה אני | `וְתֹכֵן לִבּוֹת יְהוָה` (משלי כא:ב) | equivalent | אל השוקל את הלבבות. |
| 7 | jy.kw ḫr =k jni̯.n =j n =k Mꜣꜥ,t dr.n =j n =k jzf,t r(m)ṯ.pl n smꜣ{j}r =j wnḏw,t | בא אליך; הבאתי לך את מַאַת, גירשתי לך את עוול בני האדם. לא דיכאתי קרובים. | `אֵל אֱמוּנָה וְאֵין עָוֶל` (דברים לב:ד) | equivalent | *jzf.t*, ניגודה של מַאַת, הוא `עָוֶל` (`renderings.md` §11.3). |
| 9 | m-ḥr.pl jri̯.tn =j n spr rn =j r jꜣ,t n.t ḫrp.pl n nmḥ =j nmḥ,w m (j)ḫ,t =f n jri̯ =j bw,t | מעבר למה שייעשה לי; שמי לא הגיע אל לשכת המשגיחים; לא דיללתי דל מרכושו; לא עשיתי את תועבת | `אִם-אֶמְנַע מֵחֵפֶץ דַּלִּים` (איוב לא:טז) | equivalent | אותה הכחשה בשבועת הניקיון של איוב |
| 9 | m-ḥr.pl jri̯.tn =j n spr rn =j r jꜣ,t n.t ḫrp.pl n nmḥ =j nmḥ,w m (j)ḫ,t =f n jri̯ =j bw,t | מעבר למה שייעשה לי; שמי לא הגיע אל לשכת המשגיחים; לא דיללתי דל מרכושו; לא עשיתי את תועבת | `תּוֹעֲבַת יְהוָה` (משלי יא:א) | equivalent | ה"תועבה" של האל (*bw.t*, `renderings.md` §4.1). |
| 10 | nṯr.pl n sḏw{j} =j ḥm n ḥr,j-tp =f n smr =j n sḥqr =j n srm =j n smꜣ =j | הָאֵלִים. לא הלשנתי עבד אל הגבוה ממנו, לא הֶחֱלֵיתִי, לא הרעבתי, לא הבכיתי, לא הרגתי, | `אַל-תַּלְשֵׁן עֶבֶד אֶל-אֲדֹנָו` (משלי ל:י) | equivalent | אותו מעשה ואותה זיקה, עבד ואדונו |
| 10 | nṯr.pl n sḏw{j} =j ḥm n ḥr,j-tp =f n smr =j n sḥqr =j n srm =j n smꜣ =j | הָאֵלִים. לא הלשנתי עבד אל הגבוה ממנו, לא הֶחֱלֵיתִי, לא הרעבתי, לא הבכיתי, לא הרגתי, | `לֹא תִרְצָח` (שמות כ:יב) | equivalent | כאן `הרג` (*smꜣ*), לא `רצח` (שער). |
| 11 | n wḏ =j smꜣ n jri̯ =j mn,t ḥr-nb n ḫbi̯ =j šb,w m rʾ.pl-pr,w.pl n ḥḏi̯ =j pꜣ.w,t.pl | לא ציוויתי להרוג, לא עשיתי מכאוב לכל אדם, לא גרעתי מזון בהיכלות, לא הזקתי לעוגות | `וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | equivalent | לגרוע ממה שהוקדש. |
| 12 | nṯr.pl n nḥm =j ḫnf,w ꜣḫ.pl n nk =j nkk{nkk} n dꜣdꜣ =j n ḫbi̯ =j dbḥ | הָאֵלִים, לא נטלתי את חלות הָאָחִים, לא שכבתי עם נִשְׁכָּב, לא זניתי, לא גרעתי את המידה, | `וְאֶת זָכָר לֹא תִשְׁכַּב מִשְׁכְּבֵי אִשָּׁה` (ויקרא יח:כב) | equivalent | אותו איסור, בלשון "לשכב" |
| 12 | nṯr.pl n nḥm =j ḫnf,w ꜣḫ.pl n nk =j nkk{nkk} n dꜣdꜣ =j n ḫbi̯ =j dbḥ | הָאֵלִים, לא נטלתי את חלות הָאָחִים, לא שכבתי עם נִשְׁכָּב, לא זניתי, לא גרעתי את המידה, | `לֹא תַעֲשׂוּ עָוֶל בַּמִּשְׁפָּט בַּמִּדָּה` (ויקרא יט:לה) | equivalent | גריעת המידה. |
| 13 | n ḫbi̯ =j sṯꜣ,t n sjꜣṯ =j ꜣḥ,t.pl n wꜣḥ =j ḥr mw,t.pl n.t jwsw n nmḥ =j m tḫ n mḫꜣ,t | לא גרעתי את הַסֶּטָאת, לא קיצצתי שדות, לא הוספתי על משקלות הפלס, לא דיללתי ממשקולת המאזניים, | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק אֵיפַת צֶדֶק` (ויקרא יט:לו) | equivalent | המידות, המשקלות והמאזניים |
| 13 | n ḫbi̯ =j sṯꜣ,t n sjꜣṯ =j ꜣḥ,t.pl n wꜣḥ =j ḥr mw,t.pl n.t jwsw n nmḥ =j m tḫ n mḫꜣ,t | לא גרעתי את הַסֶּטָאת, לא קיצצתי שדות, לא הוספתי על משקלות הפלס, לא דיללתי ממשקולת המאזניים, | `פֶּלֶס וּמֹאזְנֵי מִשְׁפָּט לַיהוָה` (משלי טז:יא) | equivalent | גם המצרית כאן מבחינה בין `פלס` (*jwsw*) ל`מאזניים` (*mḫꜣ.t*), כאמנמופה 17.18–18.1 |
| 13 | n ḫbi̯ =j sṯꜣ,t n sjꜣṯ =j ꜣḥ,t.pl n wꜣḥ =j ḥr mw,t.pl n.t jwsw n nmḥ =j m tḫ n mḫꜣ,t | לא גרעתי את הַסֶּטָאת, לא קיצצתי שדות, לא הוספתי על משקלות הפלס, לא דיללתי ממשקולת המאזניים, | `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן` (דברים כה:יג) | equivalent |  |
| 14 | n nḥm =j jrṯ,t m rʾ nḫn.w n kfꜣ =j ꜥw,t ḥr sm,w =sn n sḫt =j | לא נטלתי חלב מפי תינוקות, לא קיפחתי צאן מעשבם, לא לכדתי ברשת | `לֹא תְבַשֵּׁל גְּדִי בַּחֲלֵב אִמּוֹ` (שמות כג:יט) | divergence | המקרא שומר על החלב של הגדי, כאן על חלב התינוק. |
| 16 | dnj,t ḥr mw ꜣs.w n ꜥḫm =j ḫ,t m ꜣ,t =s n thi̯ =j sw.w ḥr stp,t.pl n šnꜥ =j | סכר בפני מים זורמים, לא כיביתי אש בשעתה, לא עברתי על המועדים בעניין הנתחים הנבחרים, לא מנעתי | `לֹא עָבַרְתִּי מִמִּצְוֹתֶיךָ וְלֹא שָׁכָחְתִּי` (דברים כו:יג) | equivalent | "לא עברתי" בווידוי של המעשר; כאן `עבר על` הוא *thj* "להפר", ומושאו המועדים של הקרבנות. |
| 17 | mnmn,t ḥr (j)ḫ,t-nṯr n ḫsf =j nṯr m pri̯,w =f jw =j wꜥb.kw zp-4 ꜥbw =j ꜥbw | מקנה מרכוש האל, לא הדפתי את האל ביציאתו. טהור אני (ארבע פעמים)! זוכי – זוך | `כָּל-דַּרְכֵי-אִישׁ זַךְ בְּעֵינָיו; וְתֹכֵן רוּחוֹת יְהוָה` (משלי טז:ב) | equivalent | האדם המכריז על זכותו והאל השוקל |
| 17 | mnmn,t ḥr (j)ḫ,t-nṯr n ḫsf =j nṯr m pri̯,w =f jw =j wꜥb.kw zp-4 ꜥbw =j ꜥbw | מקנה מרכוש האל, לא הדפתי את האל ביציאתו. טהור אני (ארבע פעמים)! זוכי – זוך | `נְקִי כַפַּיִם וּבַר-לֵבָב` (תהלים כד:ד) | equivalent | הטהרה כתנאי לכניסה; כאן `טהור` (*wꜥb*), לא `נקי` (שער). |
| 18 | bn,w pwy ꜥꜣ n,tj m Nn-nsw,t ḥr-n,tt jnk js fnḏ pwy n nb ṯꜣw.pl sꜥnḫ rḫ,yt nb.t hrw | הַבֶּנּוּ הגדול ההוא אשר בְּחָנֵס; כי אני הוא האף ההוא של אדון הרוחות, המחיה את כל העם, ביום | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | האף כאיבר שדרכו נכנסת רוח החיים; כאן הנפטר הוא עצמו "האף" של אל הרוח. |
| 21 | j wsḫ-nmt,t pri̯ m Jwn,w n jri̯ =j jzf,t | הו רחב־צעדים, היוצא מאוֹן: לא עשיתי עוול. | `אֵל אֱמוּנָה וְאֵין עָוֶל` (דברים לב:ד) | equivalent | *jzf.t* = `עָוֶל` |
| 21 | j wsḫ-nmt,t pri̯ m Jwn,w n jri̯ =j jzf,t | הו רחב־צעדים, היוצא מאוֹן: לא עשיתי עוול. | `לֹא תַעֲשׂוּ עָוֶל בַּמִּשְׁפָּט` (ויקרא יט:לה) | equivalent |  |
| 22 | j ḥpt sḏ,t pri̯ m H̱r,j-ꜥḥꜣ n ꜥwꜣi̯ =j | הו חובק־להבה, היוצא מחֶרְעַחָא: לא גזלתי. | `לֹא תַעֲשֹׁק אֶת רֵעֲךָ וְלֹא תִגְזֹל` (ויקרא יט:יג) | equivalent |  |
| 23 | j fnḏ,y pri̯ m Ḫmn,w n jri̯ =j ꜥwn-jb | הו אַפִּי, היוצא מחֶמְנוּ: לא עשיתי בצע־לב. | `אַנְשֵׁי אֱמֶת שֹׂנְאֵי בָצַע` (שמות יח:כא) | equivalent | *ꜥwn* הוא `בצע` כבאמנמופה 10.10 (`הבצען`) |
| 23 | j fnḏ,y pri̯ m Ḫmn,w n jri̯ =j ꜥwn-jb | הו אַפִּי, היוצא מחֶמְנוּ: לא עשיתי בצע־לב. | `לֹא תַחְמֹד` (שמות כ:יג) | divergence | המקרא אוסר את התאווה עצמה; כאן "בצע הלב" הוא מעשה שעושים (*jrj*), והעברית אינה משתמשת ב`חמד` (שער). |
| 24 | j ꜥm šw,t.pl pri̯ m qrr,t n ṯꜣw =j | הו בולע־צללים, היוצא מן המערה: לא גנבתי. | `לֹא תִגְנֹב` (שמות כ:יב) | equivalent |  |
| 24 | j ꜥm šw,t.pl pri̯ m qrr,t n ṯꜣw =j | הו בולע־צללים, היוצא מן המערה: לא גנבתי. | `לֹא תִּגְנֹבוּ; וְלֹא תְכַחֲשׁוּ וְלֹא תְשַׁקְּרוּ אִישׁ בַּעֲמִיתוֹ` (ויקרא יט:יא) | equivalent | הגניבה והשקר (29) יחד. |
| 25 | j nḥꜣ-ḥr pri̯ m Rʾ-sṯꜣ,w n smꜣ =j rmṯ | הו אֲיֹם־פנים, היוצא מרֶא־סְטָאוּ: לא הרגתי בני אדם. | `לֹא תִרְצָח` (שמות כ:יב) | equivalent | אותו איסור; העברית `הרג` (*smꜣ*, `renderings.md` §11.3) ולא `רצח` (שער). המקרא מבחין בפועל בין הרג ובין רצח; המצרית אינה מבחינה כאן, וההכחשה ב־10 ("לא הרגתי") היא אותו פועל. |
| 26 | j Rw,tj pri̯ m p,t n ḥḏi̯ =j dbḥ | הו שני־אריות, היוצא מן השמים: לא הזקתי למידה. | `לֹא תַעֲשׂוּ עָוֶל בַּמִּשְׁפָּט בַּמִּדָּה בַּמִּשְׁקָל וּבַמְּשׂוּרָה` (ויקרא יט:לה) | equivalent |  |
| 27 | j jr,t.j =f m sḏ,t pri̯ m Ḫm n jri̯ =j ẖꜣb,t | הו עיניו־להבה, היוצא מחֶם: לא עשיתי עיקשות. | `עִקֵּשׁ וּפְתַלְתֹּל` (דברים לב:ה) | equivalent | העוול כעיקום של הישר. |
| 28 | j nbj pri̯ m ḫtḫt n ṯꜣu̯ =j (j)ḫ,t-nṯr | הו לוהט, היוצא אחורנית: לא גנבתי את רכוש האל. | `לֹא תִגְנֹב` (שמות כ:יב) | equivalent |  |
| 28 | j nbj pri̯ m ḫtḫt n ṯꜣu̯ =j (j)ḫ,t-nṯr | הו לוהט, היוצא אחורנית: לא גנבתי את רכוש האל. | `בִּעַרְתִּי הַקֹּדֶשׁ מִן הַבַּיִת` (דברים כו:יג) | divergence | שם המצהיר מוציא את הקודש מביתו; כאן הוא מכחיש שלקח מן הקודש. השם "לוהט" אינו `בוער` (שער). |
| 29 | j sḏ qs.pl pri̯ m Nn-nsw,t n ḏd =j grg | הו שובר־עצמות, היוצא מֵחָנֵס: לא אמרתי כזב. | `לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | equivalent |  |
| 29 | j sḏ qs.pl pri̯ m Nn-nsw,t n ḏd =j grg | הו שובר־עצמות, היוצא מֵחָנֵס: לא אמרתי כזב. | `וְלֹא נִשְׁבַּע לְמִרְמָה` (תהלים כד:ד) | equivalent |  |
| 29 | j sḏ qs.pl pri̯ m Nn-nsw,t n ḏd =j grg | הו שובר־עצמות, היוצא מֵחָנֵס: לא אמרתי כזב. | `וְדֹבֵר אֱמֶת בִּלְבָבוֹ` (תהלים טו:ב) | equivalent | הדובר אמת הוא העולה להר. |
| 33 | j qr,t.j pri̯ m jmn,t n jri̯ =j ḥnw,yt | הו שוכן־מערה, היוצא מן המערב: לא עשיתי ריבית. | `כַּסְפּוֹ לֹא-נָתַן בְּנֶשֶׁךְ` (תהלים טו:ה) | equivalent |  |
| 33 | j qr,t.j pri̯ m jmn,t n jri̯ =j ḥnw,yt | הו שוכן־מערה, היוצא מן המערב: לא עשיתי ריבית. | `בַּנֶּשֶׁךְ לֹא יִתֵּן וְתַרְבִּית לֹא יִקָּח` (יחזקאל יח:ח) | equivalent | העברית אינה משתמשת ב`נשך` / `תרבית` (שער), אלא במלה המאוחרת `ריבית`. |
| 35 | j ḥḏ jbḥ.pl pri̯ m tꜣ-š n thi̯ =j | הו לבן־שיניים, היוצא מתָּא־שֶׁה: לא עברתי (על דבר). | `לֹא עָבַרְתִּי מִמִּצְוֹתֶיךָ` (דברים כו:יג) | equivalent |  |
| 35 | j ḥḏ jbḥ.pl pri̯ m tꜣ-š n thi̯ =j | הו לבן־שיניים, היוצא מתָּא־שֶׁה: לא עברתי (על דבר). | `וּלְבֶן שִׁנַּיִם מֵחָלָב` (בראשית מט:יב) | equivalent | אותו צירוף, "לבן שיניים", כאן שם של אל (אולי התנין של הפיום, אל סוֹבֶּךְ). |
| 37 | j wnm bsk.w pri̯ m mꜥbꜣ,(y)t n ꜥwn =j ḥnb | הו אוכל־קרביים, היוצא ממְעַבָּאִית: לא בצעתי (ב)מדידה. | `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) | equivalent | מרמה במדידת הקרקע, כבאמנמופה 7.12–8.10; כאן אין אבן־גבול, אלא מדידה. |
| 39 | j tnm.y pri̯ m Bꜣs,t n šmi̯ =j | הו תועה, היוצא מבָּאסֶת: לא הלכתי (בפי). | `לֹא תֵלֵךְ רָכִיל בְּעַמֶּיךָ` (ויקרא יט:טז) | equivalent | בשתי הלשונות הרכילות היא "הליכה" |
| 39 | j tnm.y pri̯ m Bꜣs,t n šmi̯ =j | הו תועה, היוצא מבָּאסֶת: לא הלכתי (בפי). | `לֹא-רָגַל עַל-לְשֹׁנוֹ` (תהלים טו:ג) | equivalent | גם בעברית הרגל, `רגל`, היא פועל הרכילות. |
| 41 | j ḏw ḏw,t =f pri̯ m ꜥnḏ,tj n nk =j nkk | הו רע־רעתו, היוצא מעַנְגֶ׳תִּי: לא שכבתי עם נִשְׁכָּב. | `וְאֶת זָכָר לֹא תִשְׁכַּב מִשְׁכְּבֵי אִשָּׁה` (ויקרא יח:כב) | equivalent |  |
| 43 | j mꜣꜣ jni̯.t =f pri̯ m pr,w Mn,w n nk =j ḥm,t-ṯꜣy | הו רואה־את־אשר־יביא, היוצא מבית מִין: לא שכבתי עם אשת איש. | `לֹא תִנְאָף` (שמות כ:יב) | equivalent |  |
| 43 | j mꜣꜣ jni̯.t =f pri̯ m pr,w Mn,w n nk =j ḥm,t-ṯꜣy | הו רואה־את־אשר־יביא, היוצא מבית מִין: לא שכבתי עם אשת איש. | `וְאִישׁ אֲשֶׁר יִנְאַף אֶת אֵשֶׁת אִישׁ` (ויקרא כ:י) | equivalent | `אשת איש` כמו המצרית; העברית אינה משתמשת ב`נאף` (שער) |
| 43 | j mꜣꜣ jni̯.t =f pri̯ m pr,w Mn,w n nk =j ḥm,t-ṯꜣy | הו רואה־את־אשר־יביא, היוצא מבית מִין: לא שכבתי עם אשת איש. | `וְאֶת אֵשֶׁת רֵעֵהוּ לֹא טִמֵּא` (יחזקאל יח:ו) | equivalent |  |
| 43 | j mꜣꜣ jni̯.t =f pri̯ m pr,w Mn,w n nk =j ḥm,t-ṯꜣy | הו רואה־את־אשר־יביא, היוצא מבית מִין: לא שכבתי עם אשת איש. | `אִם-נִפְתָּה לִבִּי עַל-אִשָּׁה; וְעַל-פֶּתַח רֵעִי אָרָבְתִּי` (איוב לא:ט) | equivalent |  |
| 44 | j ḥr,j wr.w pri̯ m šnḏ,t n jri̯ =j ḥrw | הו ראש־הגדולים, היוצא מן הַשִּׁטָּה: לא עשיתי פחד. | — | — | [cognate: loanword] `וַעֲצֵי שִׁטִּים` (שמות כה:ה) – *šnḏ.t* היא מקור העברית `שִׁטָּה` (`renderings.md` §4.2). |
| 45 | j nb Ḫm pri̯ m Ḫꜣsw,w n tꜣ rʾ =j | הו אדון־חֶם, היוצא מחָאסוּ: לא רתח פי. | `אַל-תִּתְרַע אֶת-בַּעַל אָף` (משלי כב:כד) | equivalent | האיש "החם", כמו `הַחַם` של אמנמופה (*pꜣ šmm*); כאן פועל אחר (*tꜣ*), והוא נאמר על הפה. |
| 46 | j šd-ḫrw pri̯ m wr,yt n zẖi̯ =j ḥr =j ḥr md,t n.t mꜣꜥ,t | הו מרים־קול, היוצא מוֶרִית: לא חֵרַשְׁתִּי את פניי מדברי אמת. | `אֹטֵם אָזְנוֹ מִזַּעֲקַת-דָּל` (משלי כא:יג) | equivalent | החירשות המכוונת לדברי אמת. |
| 47 | j nḫn pri̯ m Ḥqꜣ-ꜥnḏ n ṯrm =j ky | הו תינוק, היוצא מחֶקָא־עַנְגֶ׳: לא קרצתי לאחר. | `קֹרֵץ בְּעֵינָו מֹלֵל בְּרַגְלָו` (משלי ו:יג) | equivalent | הקריצה כאות של מרמה. |
| 48 | j knm,tj pri̯ m knm,t n šnṯ =j | הו אפל, היוצא מן האפלה: לא גידפתי. | `אֱלֹהִים לֹא תְקַלֵּל; וְנָשִׂיא בְעַמְּךָ לֹא תָאֹר` (שמות כב:כז) | equivalent | הגידוף של אל ושל שליט (ראו 54, 57). |
| 49 | j jni̯-ḥtp≡f pri̯ m Zꜣw n pri̯-ꜥ =j | הו מביא־קרבנו, היוצא מסָאוּ: לא שלחתי יד. | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | equivalent | "לשלוח יד" הוא בעברית מה ש"להוציא יד" (*prj-ꜥ*) במצרית: התפרצות של אלימות. |
| 50 | j sr ḫrw pri̯ m Wnsj n ꜣs jb =j | הו מכריז־קול, היוצא מוֶנְסִי: לא נמהרתי לב. | `וּלְבַב נִמְהָרִים יָבִין לָדָעַת` (ישעיהו לב:ד) | equivalent | "נמהר לב" באותן מלים. |
| 52 | j srḫ,y pri̯ m wṯn,t n ꜥšꜣ-ḫrw =j ḥr md,t | הו מקטרג, היוצא מוֶצֶ׳נֶת: לא הרביתי קול בדברים. | `גַּם אֱוִיל מַחֲרִישׁ חָכָם יֵחָשֵׁב` (משלי יז:כח) | equivalent | ריבוי הדיבור כפגם. |
| 54 | j Nfr-tm pri̯ m Ḥw,t-kꜣ-Ptḥ n jri̯ =j šnṯ r nsw,t | הו נֶפֶרְתֶּם, היוצא מבֵּית־כָּא־פְּתָח: לא עשיתי גידוף נגד המלך. | `וְנָשִׂיא בְעַמְּךָ לֹא תָאֹר` (שמות כב:כז) | equivalent |  |
| 56 | j jri̯ m jb =f pri̯ m Ṯbw n qꜣi̯ ḫrw =j | הו עושה־בלבו, היוצא מצֶ׳בּוּ: לא רם קולי. | `לֹא יִצְעַק וְלֹא יִשָּׂא; וְלֹא יַשְׁמִיעַ בַּחוּץ קוֹלוֹ` (ישעיהו מב:ב) | equivalent | הענווה כקול נמוך. |
| 57 | j Jḥy pri̯ m Nw,w n šnṯ =j nṯr | הו אִיחִי, היוצא מן הַנּוּן: לא גידפתי אֵל. | `אֱלֹהִים לֹא תְקַלֵּל` (שמות כב:כז) | equivalent |  |
| 62 | j jni̯ ꜥ =f n sꜣt =j nṯr-nʾ,tj | הו מביא־זרועו: לא פגמתי בְּאֵל־הָעִיר. | `וְחִלַּלְתָּ אֶת שֵׁם אֱלֹהֶיךָ` (ויקרא יט:יב) | equivalent | פגיעה בכבוד האל. |
| 64 | ṯn rḫ.kw rn.w =ṯn nn ḫr =j n šꜥ,t =ṯn n sjꜥr =ṯn bjn =j n nṯr pn n,tj =ṯn m-ḫt =f | אתכם, יודע אני את שמותיכם. לא אפול לטבחכם, לא תעלו את רָעִי אל האל הזה אשר אתם (הולכים) אחריו, | `מִי-יַעֲלֶה בְהַר-יְהוָה` (תהלים כד:ג) | equivalent | שם האדם "עולה" לפני האל; כאן השופטים "מעלים" את חטאו – פעולה הפוכה באותה תמונה. |
| 65 | nn jwt! zp =j ḥr =ṯn ḏd =ṯn mꜣꜥ,t r =j m-bꜣḥ nb-r-ḏr ḥr-n,tt jri̯.n =j mꜣꜥ,t m Tꜣ-mrj | לא יבוא עניני לפניכם. תאמרו אמת עליי לפני אדון הכל, כי עשיתי אמת בתָּא־מֶרִי; | `וְדֹבֵר אֱמֶת בִּלְבָבוֹ` (תהלים טו:ב) | equivalent |  |
| 67 | jw,tj.w grg m ẖ,t =sn ꜥnḫ.yw m mꜣꜥ,t sꜥm.yw m mꜣꜥ,t m-bꜣḥ Ḥr,w | אשר אין כזב בבטנם, החיים על האמת, הגומעים מן האמת לפני חוֹרוּס | `וְדֹבֵר אֱמֶת בִּלְבָבוֹ` (תהלים טו:ב) | equivalent | האמת בפנים, בבטן או בלבב. |
| 69 | m =ṯn wj jy.kw ḫr =ṯn nn jzf,t =j nn ḫbn,t =j nn ḏw,t =j nn mtr,w =j | הנה אני בא אליכם; אין לי עוול, אין לי אשמה, אין לי רעה, אין לי עד, | `לֹא-יָקוּם עֵד אֶחָד בְּאִישׁ לְכָל-עָוֹן` (דברים יט:טו) | equivalent | אין עד, אין משפט. |
| 71 | ḥr =s jw =j sḥtp.n =j nṯr m mrr!.t =f jw rḏi̯.n =j tʾ n ḥqr,w mw n jbi̯.w mnḫ,t n ḥꜣw{j} | בו. ריציתי את האל במה שהוא אוהב: נתתי לחם לרעב, מים לצמא, בגד לערום, | `לַחְמוֹ לְרָעֵב יִתֵּן וְעֵירֹם יְכַסֶּה בָּגֶד` (יחזקאל יח:ז) | equivalent | אותה רשימה, באותו סדר: לחם לרעב, בגד לערום |
| 71 | ḥr =s jw =j sḥtp.n =j nṯr m mrr!.t =f jw rḏi̯.n =j tʾ n ḥqr,w mw n jbi̯.w mnḫ,t n ḥꜣw{j} | בו. ריציתי את האל במה שהוא אוהב: נתתי לחם לרעב, מים לצמא, בגד לערום, | `הֲלוֹא פָרֹס לָרָעֵב לַחְמֶךָ … כִּי תִרְאֶה עָרֹם וְכִסִּיתוֹ` (ישעיהו נח:ז) | equivalent |  |
| 71 | ḥr =s jw =j sḥtp.n =j nṯr m mrr!.t =f jw rḏi̯.n =j tʾ n ḥqr,w mw n jbi̯.w mnḫ,t n ḥꜣw{j} | בו. ריציתי את האל במה שהוא אוהב: נתתי לחם לרעב, מים לצמא, בגד לערום, | `אִם-אֶרְאֶה אוֹבֵד מִבְּלִי לְבוּשׁ; וְאֵין כְּסוּת לָאֶבְיוֹן` (איוב לא:יט) | equivalent |  |
| 73 | jrf =ṯn ḫwi̯.pl wj jrf =ṯn nn smj =ṯn r =j m-bꜣḥ jnk wꜥb rʾ wꜥb ꜥ.wj ḏd.w n =f jy zp-2 | אתם, הגינו עליי, אתם! לא תגידו עליי לפני (האל). אני טהור־פה, טהור־זרועות, אשר אומרים לו: "בָּא (פעמיים) | `נְקִי כַפַּיִם וּבַר-לֵבָב` (תהלים כד:ד) | equivalent | טוהר הידיים כתנאי לעלייה; כאן "טהור פה וטהור זרועות" – הדיבור והמעשה; העברית `טהור`, לא `נקי` (שער) |
| 73 | jrf =ṯn ḫwi̯.pl wj jrf =ṯn nn smj =ṯn r =j m-bꜣḥ jnk wꜥb rʾ wꜥb ꜥ.wj ḏd.w n =f jy zp-2 | אתם, הגינו עליי, אתם! לא תגידו עליי לפני (האל). אני טהור־פה, טהור־זרועות, אשר אומרים לו: "בָּא (פעמיים) | `בָּרוּךְ הַבָּא בְּשֵׁם יְהוָה` (תהלים קיח:כו) | equivalent | ברכת הבא בשער. |
| 76 | m-ẖnw Rʾ-sṯꜣ,w jnk smj n nṯr.pl rḫ (j)ḫ,t ẖ,t =sn jy.n =j ꜥꜣ r smtr mꜣꜥ,t r rḏi̯.t jwsw | בתוך רֶא־סְטָאוּ. אני מגיד לָאֵלִים, היודע את דבר בטנם. באתי הנה לבחון את האמת, לשים את הפלס | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק; וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | equivalent | הנאשם המבקש להישקל; כאן `פלס` (*jwsw*), לא `מאזניים`. |
| 80 | m ꜥb,w pḥ,wy =j twr{j}(.w) ḥr,j-jb =j m šd,yt mꜣꜥ,t nn ꜥ,t jm =j šwi̯.t m mꜣꜥ,t | בזוך, אחוריי מזוקקים, תוכי בבריכת האמת; אין בי אבר ריק מן האמת. | `לֵב טָהוֹר בְּרָא-לִי אֱלֹהִים` (תהלים נא:יב) | equivalent | כאן הטוהר אינו ניתן מן האל אלא מוכרז כעובדה, אבר אחר אבר. |
| 89 | n mr mj jr =k ꜥq ḥr sbꜣ pn n wsḫ,t tn n.t Mꜣꜥ,tj jw =k rḫ.tj n nn ḏi̯! =n ꜥq =k ḥr =n j.n bnš.w | לתעלה." "בוא, אפוא, היכנס בדלת הזאת של האולם הזה של שתי האמת, כי יודע אתה אותנו." "לא ניתן לך להיכנס דרכנו" – כך אמרו מזוזות | `פִּתְחוּ-לִי שַׁעֲרֵי-צֶדֶק; אָבֹא-בָם אוֹדֶה יָהּ` (תהלים קיח:יט) | equivalent | הבקשה להיכנס בשער של צדק |
| 89 | n mr mj jr =k ꜥq ḥr sbꜣ pn n wsḫ,t tn n.t Mꜣꜥ,tj jw =k rḫ.tj n nn ḏi̯! =n ꜥq =k ḥr =n j.n bnš.w | לתעלה." "בוא, אפוא, היכנס בדלת הזאת של האולם הזה של שתי האמת, כי יודע אתה אותנו." "לא ניתן לך להיכנס דרכנו" – כך אמרו מזוזות | `פִּתְחוּ שְׁעָרִים; וְיָבֹא גוֹי צַדִּיק שֹׁמֵר אֱמֻנִים` (ישעיהו כו:ב) | equivalent |  |
| 89 | n mr mj jr =k ꜥq ḥr sbꜣ pn n wsḫ,t tn n.t Mꜣꜥ,tj jw =k rḫ.tj n nn ḏi̯! =n ꜥq =k ḥr =n j.n bnš.w | לתעלה." "בוא, אפוא, היכנס בדלת הזאת של האולם הזה של שתי האמת, כי יודע אתה אותנו." "לא ניתן לך להיכנס דרכנו" – כך אמרו מזוזות | `מִי-יָגוּר בְּאָהֳלֶךָ; מִי-יִשְׁכֹּן בְּהַר קָדְשֶׁךָ` (תהלים טו:א) | divergence | גם שם "שאלת השער" ותשובת המוסר; כאן השער שואל שמות. |
| 90 | n sbꜣ pn n-js ḏd.n =k rn =n tḫ pw n b(w) mꜣꜥ rn.w =ṯn nn ḏi̯! =j ꜥq =k ḥr =j j.n ꜥr,yt n.t sbꜣ | הדלת הזאת, "אלא אם אמרת את שמנו." "'משקולת המקום האמיתי' – שמותיכם." "לא אתן לך להיכנס דרכי" – כך אמר משקוף הדלת | `וְהִגַּעְתֶּם אֶל הַמַּשְׁקוֹף וְאֶל שְׁתֵּי הַמְּזוּזֹת` (שמות יב:כב) | equivalent | המזוזות והמשקוף כחלקי הפתח שבהם עובר הגבול בין חוץ לפנים. |
| 99 | jb.pl ḏꜥr ẖ,t.pl rn =k smj =j ṯw jrf n m m nṯr jm,j wnw,t =f ḏd =k st n ꜥ,w Tꜣ,du ptr rf sw | הלבות, חוקר הבטנים' – שמך." "אגיד, אפוא, עליך – למי, לאיזה אל אשר במשמרתו? תאמר זאת למתורגמן שתי הארצות." "מי הוא, | `אֲנִי יְהוָה חֹקֵר לֵב בֹּחֵן כְּלָיוֹת` (ירמיהו יז:י) | equivalent | האל החוקר את הפנים |
| 99 | jb.pl ḏꜥr ẖ,t.pl rn =k smj =j ṯw jrf n m m nṯr jm,j wnw,t =f ḏd =k st n ꜥ,w Tꜣ,du ptr rf sw | הלבות, חוקר הבטנים' – שמך." "אגיד, אפוא, עליך – למי, לאיזה אל אשר במשמרתו? תאמר זאת למתורגמן שתי הארצות." "מי הוא, | `וּבֹחֵן לִבּוֹת וּכְלָיוֹת` (תהלים ז:י) | equivalent |  |
| 99 | jb.pl ḏꜥr ẖ,t.pl rn =k smj =j ṯw jrf n m m nṯr jm,j wnw,t =f ḏd =k st n ꜥ,w Tꜣ,du ptr rf sw | הלבות, חוקר הבטנים' – שמך." "אגיד, אפוא, עליך – למי, לאיזה אל אשר במשמרתו? תאמר זאת למתורגמן שתי הארצות." "מי הוא, | `חָקְרֵנִי אֵל וְדַע לְבָבִי` (תהלים קלט:כג) | equivalent | כאן *ḏꜥr* "לחקור" באותו מובן; בעברית הלב והכליות, במצרית הלבבות והבטנים. |
| 106 | hꜣ,yt m sḏ,t jnb.pl m jꜥr.w,t ꜥnḫ.w(t) wnn zꜣt,w =f m nwy zy pw Wsjr | (זה) אשר אכסדרתו להבה, חומותיו פתנים חיים, ורצפתו – זרם." "מי הוא?" "אוסיריס הוא." | `הַמְקָרֶה בַמַּיִם עֲלִיּוֹתָיו` (תהלים קד:ג) | equivalent | ארמון האל הבנוי על המים |
| 106 | hꜣ,yt m sḏ,t jnb.pl m jꜥr.w,t ꜥnḫ.w(t) wnn zꜣt,w =f m nwy zy pw Wsjr | (זה) אשר אכסדרתו להבה, חומותיו פתנים חיים, ורצפתו – זרם." "מי הוא?" "אוסיריס הוא." | `הַמְקָרֶה בַמַּיִם עֲלִיּוֹתָיו` (תהלים קד:ג) | absent | במקרא אין לבית האל "חומות של נחשים" – הפתנים המגינים הם תמונה מצרית. |
| 109 | jri̯.t mj ḫpr m wsḫ,t tn n Mꜣꜥ,tj ḏd =tw rʾ pn wꜥb(.w) twr{j}(.w) wnḫ.w m ḥbs,w | לעשות כפי שנהיה באולם הזה של שתי האמת. יאמרו את הלחש הזה (כשהוא) טהור, מזוקק, לבוש בגדים, | `וְכִבְּסוּ שִׂמְלֹתָם` (שמות יט:י) | equivalent | טהרת הגוף והבגדים לפני העמידה לפני האל. |
| 110 | ṯb.w m ḥḏ,t.j sdm.w m msdm,t wrḥ.w m ꜥntj,w wdn n =f jḥ.pl ꜣpd.pl snṯr tʾ ḥnq,t | נעול סנדלים לבנים, מכוחל בפוך, משוח במור. זְבַח לו בקר, עופות, קטורת, לחם, שֵׁכָר, | `וַתָּשֶׂם בַּפּוּךְ עֵינֶיהָ` (מלכים ב ט:ל) | equivalent | הפוך כאיפור העיניים. |
| 112 | n,tj n ḫnd šꜣj ꜥw,t ḥr =f jr jrr! mḏꜣ,t tn ḥr =f wnn =f wꜣḏ(.w) ms.pl =f | אשר לא דרכו עליה חזיר וצאן. הנה מי שעושה את המגילה הזאת עליו – יהיה רענן, וילדיו | `וְאֶת הַחֲזִיר … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | equivalent | החזיר כבהמה מטמאת, המרחיקה מן הקודש |
| 112 | n,tj n ḫnd šꜣj ꜥw,t ḥr =f jr jrr! mḏꜣ,t tn ḥr =f wnn =f wꜣḏ(.w) ms.pl =f | אשר לא דרכו עליה חזיר וצאן. הנה מי שעושה את המגילה הזאת עליו – יהיה רענן, וילדיו | `דְּשֵׁנִים וְרַעֲנַנִּים יִהְיוּ` (תהלים צב:טו) | equivalent | שכר הצדיק – רעננות. |
