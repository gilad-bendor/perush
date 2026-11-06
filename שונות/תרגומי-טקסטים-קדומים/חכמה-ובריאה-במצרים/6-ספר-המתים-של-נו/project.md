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
