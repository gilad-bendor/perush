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

## NU3 14.1–37.3 (Round 6 run 2, translator 3; 2026-11-06)

### Scope
KEY NU3 = 19 chapter texts of pNu in the papyrus's order – BD 14, 68, 92, 63A, 105, 95, 72, 71, 106, 40, 90, 108, 47, 104,
103, 51, 119, 36, 37 – 140 lines (`14.1`–`37.3`; the TLA skips 71.17), all drafted, filled, verified, compared with the TLA's
German and passed three times; the clean translation built (`translation-NU3.rtl.md`; intro `translation--intro-NU3.rtl.md`).
One `## ` heading per chapter (19). Preservation: good; restorations sporadic (68.3, 92.2–92.5, 105.5–105.7, 71.4–71.8, 71.13,
108.1–108.2, 108.12–108.13); `[…]` mostly the owner's name; BD 40, 90 and 92 are textually obscure (the TLA itself marks
several readings with "?"). The text: short spells that each open one way for the dead – appeasing an angry god (14),
the doors of sky and earth and mastery over body and elements (68), opening the tomb for ba and shadow (92, 72, 71), water
and fire (63A), the ka's food and purification (105, 106), Thoth's knife (95), repelling snakes, a beetle and a speech-
demon (40, 36, 37, 90), the serpent of Mount Bakhu (108), throne, seat, Hathor's retinue, not walking upside down (47,
104, 103, 51), leaving Rosetau (119).

### Sources consulted
AED-TEI pNu (`data NU3`); the TLA's German (`tr NU3`), read after each of the five drafting saves (14–68 / 92–95 / 72–106 /
40–108 / 47–37), each call restricted to the labels just drafted; it changed about 75 drafted lines (each listed in the
entry's **תרגומים** bullet, "הטיוטה הראשונה … תוקנה"). No other witness in the folder. Faulkner, Allen, Quirke, Lapp: from
memory only, never quoted. Every Bible verse printed with `check_bible_quotes.py --show` before quoting; the checker reports
0 problems on the three files.

### Decisions
**Formulas and refrains (fixed here):**

| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| BD 71's refrain `swḏꜣ=k wj mj swḏꜣ=k ṯw ḏs=k wḥꜥ sw sfḫ sw jmi̯ sw r tꜣ jmi̯ mr.wt=f j.n nb ḥr wꜥ r=j` | `תשלים אותי כשם שהשלמת את עצמך – שחררו אותו, התירו אותו, תנו אותו לארץ, תנו את אהבתו – אומר אדון־פנים־אחד עליי.` | 71.2–71.3, 71.4–71.5, 71.7–71.8, 71.9–71.10, 71.10–71.11 (without "תנו את אהבתו", as the Egyptian), 71.18–71.19 | swḏꜣ = WE 10,14 `השלים`; the imperatives plural with the TLA (the god commands his servants); copied byte for byte in every copy |
| BD 68's litany `sḫm=j m X` | `שולט אני ב־X` | 68.4–68.15 | §12.3 `שָׁלַט בְּ־`; 68.12–68.14 copy 68.5–68.8 word for word |
| the food formula `bw.t=j pw ḥs, nn wnm=j sw` | `תועבתי היא צואה – לא אֹכַל אותה` (51.2); with bread `תועבתי הוא, לא אֹכַל אותו` (68.9) | 51.2, 68.9 | §12.4.7, its first copy in the book (gender follows the Hebrew noun) |
| `jr rḫ mḏꜣ.t tn` / `jr rḫ rʾ pn` | `מי שיודע את המגילה הזאת` / `מי שיודע את הלחש הזה` | 68.16, 72.12 | §12.4.6 |
| `ḏd-mdw=j jn nṯr` (14.3) | `אמירה עליי בפי אל` | 14.3 | the formula's `אמירה` variant (§6.5), the suffix as object (TLA) |
| `rʾ n ḫsf X` / `rʾ n tm rḏi̯.t sḏm.tw=f` | `לחש להדוף X` / `לחש לבלי לתת ש־` | 40, 36, 37 / 47 | NU2's titles |
| `ṯz-pẖr`, `zp-2`, `ky-ḏd`, `jw=j rḫ.kw` | `ולהפך`, `(פעמיים)`, `נוסח אחר:`, `יודע אני` | 40.3, 90.8; 103.2, 51.2; 71.8, 105.8; 72.6, 108.14 | NU1 |

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| špt "anger" (noun and verb) | `זַעַף` / `זועף` | 14.1, 14.3, 14.5 | HC 70 `זעוף־הלב`; the roots חרה, נחם never (Ex 32:12, Ps 85:5 in the apparatus) |
| sḥtp "appease"; sḥtp.yw (offerings) | `הניח את דעת`; `מניחי־הדעת` | 14.5, 105.1, 71.6 | AM 8.11 `מניחים את דעת האל`; first draft `פייס` changed in pass (b); keeps the ḥtp `נח` / ḥtp.w `קרבנות` pun visible |
| ꜣ.t (tla6) "power" / ꜣ.t "moment" | `עוז` / `רגע` | 14.2 / 71.8 | two lemmas; AM 9.3 `רגע` |
| nkn "injury" (noun; verb 90.7) | `חבלה` / `פגוע` (passive) | 14.3, 90.7 | `נזק` is AM's wgꜣ, `פגע` AM's thꜣ, `פצע` AM's sẖy |
| sḏb "mishap" | `תקלה` | 14.4 | |
| gn "mighty one" | `תקיף` | 14.4 | `שליט` is ḥqꜣ |
| ꜥꜣ.wj "door-leaves" / sbꜣ "door" / qꜣr.t "bolt" | `כנפי־הדלת` / `דלת` / `נגר` | 68.2, 72.8 | NU1 17.31; BD 125; qꜣr.t ≠ BD 125's ḥpt `בריחים` |
| zn "open (a way)" | `פרץ` (stative `פרוץ`) | 68.3–68.4 | wn `פתח`, wpi̯ `פילח`, wbꜣ `פער` (NU2) taken |
| sfḫ "loosen" / wḥꜥ "release" / mr "bind" / sti̯ "?" | `התיר` / `שחרר` / `אסר` / `*שלף*` | 68.3, 71 refrain | SI B274 `שמוט` was an imperative of sfḫ (a kept split); `פתר` for wḥꜥ rejected (Gen 40–41 echo) |
| ḥn.t "pelican" | `שקנאי` | 68.4 | `קָאַת` rejected (an uncertain biblical bird; false precision) |
| wḫꜣ "shake out" / ḫmw "dust" | `ניער` / `אבק` | 68.15 | `עפר` avoided (echo control: the verb already carries Isa 52:2) |
| jm.j-rʾ "tongue" | `לשון` | 68.15 | ns `לשון` (§4.1) – two lemmas, one Hebrew, never in one text (recorded) |
| sšm.w "guide" | `מַנְחֶה` (vocalized) | 68.16 | NU1 sšmi̯ `הנחה`; BD 111's sšm.w "image" is another lemma |
| ski̯ "perish" | `אבד` | 68.16 | NU1's ski̯ "spend (time)" `בלה` – another sense |
| jmꜣ (tree) | `שיזף` | 68.10 | Ziziphus |
| jz "tomb" | `קבר` | 92.1 | qrs.w `קבורה` (§11.3) |
| šw.t "shadow" | `צל` | 92.1, 92.7 | §12.3 (first met here in NU) |
| ḫtm "seal, lock" (BD) | `חתם` (loanword, licensed) | 92.2, 92.9, 72.8, 90.5 | §4.2 |
| šdi̯ "rescue, take out" | `חילץ` | 92.2, 92.5 | PT571 |
| jp "count" | `מנה` / `מניין` | 92.5, 92.7, 71.12 | NU2 42.14; `מפקד` stays jp.t (BD 68) |
| ẖkr.w "adornment" | `עדי` | 92.6 | SI B270 |
| sḏr "the sleeper" | `השוכב` | 92.2 | the שכב gate licensed by sḏr |
| nfr.w "beauty" | `יופי` | 92.3 | `טוב` stays the adjective nfr (72.11) |
| ꜥwg "roast" / nwḫ "boil, scorch" | `נצלה` / `נכווה` | 63A.1, 63A.3 | |
| mjḥ.w "oar" | `משוט` | 63A.2 | = AM's ḥmw (steering oar): two lemmas, one Hebrew, never in one text (for the lead) |
| nḥm "prevent" | `עצר` | 63A.5 | a third sense beside `נטל` / `הציל`; `מנע` is šnꜥ |
| bd "natron" / snṯr "incense" / swꜥb "purify" / ntnt "sweat" | `נתר` / `קטורת` / `טיהר` / `זיעה` | 105.3 | HC 75 `קטורת`; wꜥb `טהור` |
| ꜥb.w "sin" | `עבֵרה` | 105.4 | BD 125's ꜥbw "purity" `זוך` is another lemma; jw "wrong" `עבירות` (NU1) – shared root, recorded |
| wꜣḏ (amulet) | `קמע־הוָאגֶ׳` | 105.4 | BD 86 |
| rmn "upper arm" | `קיבורת` | 105.6 | `זרוע` ꜥ, `כתף` ḫpš, `שכם` qꜥḥ, `אציל` sꜥḥ (119.5) all taken |
| mꜣꜣ in the pair "seeing eye, hearing ear" | `רואה` | 105.7 | NU1's mꜣꜣ `חזה` elsewhere (92.4, 71.16, 90.2); a split by idiom (Prov 20:12's fixed pair) |
| šwi̯ m "free of" | `חף מ־` | 72.2 | the `יבשה` / `חרבה` gate is for šwi̯ "dry"; Job 33:9 in the apparatus |
| ḥn.tj (ḏ.t) | `תכלית (העד)` | 72.2 | SI B212 |
| jrw "form" | `מראה` | 72.3 | NU2 42.20; ḫpr.w stays `צורה` |
| ꜣṯp "laden" | `טעון` | 72.3 | AM 12.8 |
| ꜣw.t-ꜥ | `מתנות` | 72.5 | SI B175 |
| ḫni̯ "alight" / rwj "depart" | `נחת` / `הסתלק` | 72.7 | hꜣi̯ `ירד` (NU1) |
| ẖnm "unite with" / zmꜣ "join, gather" | `התאחד עם` / `התחבר`, `חיבר` | 72.12 / 14.4, 72.9 | SI R7 / SI B114, B121 (first draft `אחבור`, `איחדו` changed in pass (b)) |
| mn "remain" | `קבוע` | 72.11 | SI B138 (first draft `קיים` changed) |
| ḫdi̯ / ḫnti̯ | `הפליג צפונה` / `העפיל דרומה` | 72.11 | SI B271 |
| qrs.w "coffin" | `ארון־קבורה` | 72.12 | §11.3 qrs.w `קבורה` + `ארון` (wt) as the head of a compound: noted |
| dbn "encircle" | `הקיף` (`המוקף`) | 71.10, 108.14, 119.4 | first draft `הסובב` (pẖr's, AM 17.10) changed |
| pẖr / pnꜥ | `סובב` / `הפנה` | 90.3, 47.2 / 108.6 | AM's msnḥ is `הפך` |
| ṯꜣ (young) | `גוזל` | 71.9 | NU1 17.57 (AM's crocodile ṯꜣ `גור`: a kept split) |
| ḏꜣjs.w "counsellor" | `יועץ` | 71.11 | |
| znj/znn "cut off (heads)" / jww "sever" / ḥsq "cut off" | `התיז` / `ניתק` / `כרת` | 71.12, 90.2–90.5 | ḥsq = WE, NU1, NU2 |
| wḏꜣ.t "the Udjat eye" | `הוּגָ׳את` | 71.12 | AM 1.15 (the same word as a measure) |
| ḫfꜥ "fist" / wꜣs "dominion" | `אגרוף` / `שררה` | 71.15 | ḫfꜥ verb `לפת` (NU2); BD 86's wꜣs-sceptre is the object |
| tp.j rʾ rnp.t "New Year" | `פֶּתַח השנה` | 71.15 | rʾ "opening" `פֶּתַח` (NU2 1.9); `ראש השנה` rejected (Ezek 40:1 / Jewish festival echo) |
| šzp "image, statue" / šzp "upper lip" | `דיוקן` / `שפם` | 71.16 / 108.10 | `צלם` gated to snn/twt/tjt; `שפה` is sp.t (36.2) |
| sꜥḥ "noble (dead)" | `אציל` | 119.5 | BD 74 `האצילים` (NU1's suggested `חנוט` not adopted) |
| mẖn.tj "ferryman" | `מעבורתן` | 106.3 | AM 12.9 |
| zbi̯ "conduct, convey" | `הוביל` (passive `מובל`) | 106.4, 36.2 | NU2's zbi̯ "go" `צעד` – another lemma per the TLA; `מוסר` is gated (sbꜣ.yt), `מסר` is swḏ |
| wꜥr.t "district" | `מחוז` | 106.4 | SI R1 |
| ds "flint knife" | `מאכלת` | 95.2, 108.5 | WE 1,13's ds "jar" is a homonym |
| nšnj "rage, storm" | `רוגז` | 95.2, 95.3, 71.6 | SS 31 (`סערה` is ḏꜥ, AM) |
| nrw "the Terrible" (epithet) | `הנורא` | 95.2, 71.8 | NU1's nrw noun `מורא` |
| swḫꜣ "mis-speaking" | `שיבוש` | 90 | TLA "Unwirksamkeit"; `כזב` is grg |
| ḫti̯ "retreat" | `נרתע` | 90.6 | the root סוג reserved |
| bjꜣ "metal" | `מתכת` | 108.8–108.9 | NU2 23.4 `של מתכת`; first draft `ברזל` changed (the TLA's "Erz") |
| mtꜣ "spear" / sẖp "slurp" / bši̯ "vomit" | `רומח` / `גמע` / `הקיא` | 108.7–108.8 | AM 14.17 `הקאת`; BD 125 `גומע` (another lemma: a shared Hebrew, noted) |
| ḥw.t-nṯr "temple" | `בית האל` | 72.9, 108.4 | AM 6.1, WE 1,19 (`מקדש` is kꜣr, 92.7) |
| ḥrs.t "carnelian" | `קרנליאן` | 108.4 | `אֹדֶם` (Ex 28:17) is HC's ddj "red ochre" |
| ḫt (100 cubits) / mḥ "cubit" | `חֵת` (transliterated) / `אמה` | 108.3–108.4 | |
| sqd.wt "crew" / sqd.wt "sailing" | `צוות` / `שיט` | 108.7 / 108.9 | two lemmas |
| ṯꜣy "male" | `גבר` | 108.10 | TB's `אשת איש` (ḥm.t ṯꜣy) is a fixed idiom: a split by sense |
| ẖ.t in šm-ḥr-ẖ.t=f | `ההולך־על־בטנו` | 108.12 | ẖ.t `בטן` (§4.1); Gen 3:14 `גחון` only in the apparatus |
| jnṯ.t "fetter" | `כבלים` | 108.14 | |
| rḏw "efflux" / sṯꜣ "flow" | `הפרשה` / `נזל` | 119.3 | `זרם` is nwy (68.7) |
| s.t "seat" / ns.t "throne" | `מושב` / `כס` | 47.1–47.2, 92.8 | NU2 91.3 `כסאו`; AM 2.17 has s.t `כסא` (a kept split by sense) |
| šms.wt "retinue" | `פמליה` | 103.2 | AM's šmsw.t |
| ꜥpšꜣy (beetle) | `העַפְּשָׁאִי` (transliterated) | 36.1 | species uncertain |
| Mr.tj; rḥ.tj | `שתי המֶרְתִּי`; `שתי הָרֵעוֹת` (vocalized: "evils") | 37.1 | |

**Names (first occurrence vocalized):** `האִמְחֶת` (jmḥ.t), `תֶּכֶם` (Tkm), `בָּאחוּ` (Bꜣẖ.w, BD 125's form), `הזועם` (ꜣd.w),
`בולע־החמור` (ꜥm-ꜥꜣ), `אדון־פנים־אחד` (nb ḥr wꜥ), `שוכן־בלהטו` (the Bakhu serpent's name), `ההולך־על־בטנו`,
`גדול־הקסמים` (wr-ḥkꜣ.w, Seth), `האָכֶרוּ` (ꜣkr.w), `אריה־הפנים` (mꜣj-ḥr), `אָטוֹן־וֶסֶח` (jtn-wsḫ), `הרואה` (ptr.j), `הסֶשֶׁדֶת`
(sšd.t), `נֶבֶּח` (nbḥ), `שֶׁנוּ` (šn), `מֶסְקְטֶת` (sk.tt, NU1's suggestion adopted), `מֶסְקֶת` (msq.t, NU1), `נֶסֶרֶת` (NU1),
`אי־נֶסֶרֶת`, `פֶּה` / `דֶּף`, `שור־המערב` (NU2), `בָּבִי`, `סוֹבֶּךְ`, `שני־אריות` (BD 125, NU1), `בית־כָּא־פְּתָח` (BD 125).

**Rejected (gates and echoes):** `נחם`, `חרה` (Ex 32:12 only in the apparatus); `עפר` (68.15); `קָאַת`; `ברזל` (108.8);
`אֹדֶם` (108.4); `ראש השנה` (71.15); `צלם` for šzp; `גחון` for ẖ.t; `פתר` for wḥꜥ; `היסוג` for ḫti̯ (first draft, the
root סוג reserved); `מוסר` for zbi̯ (the gate caught it, 36.2); `תנין` / `לויתן` (Isa 27:1, Ps 74:13 in the apparatus only).
Gate permits written (`[היתר שער]`): `המושבות` (92.8, 92.10: the שבת gate reads ה־מו־שבות), `באחו` (108.2, 108.3, 108.15:
the `אחו` gate reads ב־אחו; as BD 125).

### Open decisions for the user
1. **sḥtp `הניח את דעת`** (AM's precedent) over the more natural `פייס` (14.5, 105.1, 71.6): consistency kept the
   ḥtp / ḥtp.w / sḥtp family visible; `מניחי־הדעת` as a name of offerings is heavy.
2. **BD 71's refrain in the plural** (`שחררו … התירו … תנו`): the imperatives are unmarked; the TLA reads plural (the god's
   servants); a singular reading (addressed to the god himself) is possible.
3. **BD 105.7 negation**: `לא שלי עין רואה, אוזן שומעת` (TLA: the dead is not a sacrificial animal) against the first
   draft's rhetorical question `הלא שלי …?`; the sense of the passage (head and foreleg cut "from me", 105.6) supports the
   TLA. Prov 20:12 is then a [divergence].
4. **72.12–72.13 `rʾ-pw` "or"**: kept where the Egyptian puts it (`– או –` at the head of 72.13); a smoother Hebrew would
   move it to 72.12.
5. **Two-lemma, one-Hebrew pairs** recorded for the lead: mjḥ.w / AM ḥmw `משוט`; jm.j-rʾ / ns `לשון`; ꜥb.w `עבֵרה` / NU1 jw
   `עבירות`; sẖp `גמע` / BD 125's "swallow" `גומע`; ṯꜣy `גבר` / TB's `אשת איש`.

### Progress log
- Drafted in five saves (14–68; 92, 63A, 105, 95; 72, 71, 106; 40, 90, 108; 47, 104, 103, 51, 119, 36, 37), each filled and
  verified at once; `tr NU3` read after each save over exactly the drafted labels, and the **תרגומים** bullet written:
  about 75 lines changed after the TLA – mood and tense (68.2–68.4 statives, 92.2, 92.4–92.5, 63A.3–63A.4, 72.4, 104.2,
  119.2–119.3, 90.5 negated past, 90.7 wish), voice (40.6, 71.10, 108.8, 119.4), speaker and syntax (14.3, 40.2–40.5, 92.8,
  51.2, 72.9, 72.12), a word's sense (105.2, 105.7, 106.4).
- Pass (a) fidelity: a script listed every bracketed source token against the Hebrew brackets: 3 lines fixed (68.8, 108.14:
  a restored suffix only → no bracket; 108.12 likewise); every negation and tense rechecked with the TLA comparison (105.7,
  63A.3, 90.5 reversed).
- Pass (b) consistency: every new Hebrew word grepped in the corpus; changed: sḥtp `פייס` → `הניח את דעת` (AM), dbn `סובב` →
  `הקיף` (pẖr's), pnꜥ `סובב` → `הפנה`, mn `קיים` → `קבוע` (SI), ẖnm `חבר` → `התאחד` (SI R7) and zmꜣ `איחד` → `חיבר`, ḫpr
  `קורה` → `נהיה` (§4.4), šzp "lip" `שפה` → `שפם` (sp.t's), rmn `אציל` → `קיבורת` (sꜥḥ's), rḏw/sṯꜣ `נוזל`/`זרם` → `הפרשה`/`נזל`
  (nwy's), zbi̯ `מוסר` → `מוביל` (gate); BD 71's refrain set to the plural in all copies; `verify` reports 0 repeated-line
  differences.
- Pass (c) Hebrew: the clean text read through; `הָרֵעוֹת` vocalized (37.1); heading 71 aligned; 72.15 `כָּאֵלִים הָאֵלֶּה`
  vocalized (trap); register even, no vav-consecutive.
- `verify NU3 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems;
  `build NU3` done.

### The text on its own terms
- **Knowledge is power** (72.5–72.6, 71.13–71.14, 108.5, 108.15): "I know you, I know your names"; "may you know me as I know
  your number" – to name the guardian, the judge, the serpent is to bind him; the rubrics promise the same to "whoever knows
  this book" (68.16, 72.12).
- **Mastery as the opposite of death** (68.4–68.15): "I have power over my heart, my arms, my legs, my mouth … over water,
  air, the river, its banks" – the corpse whose limbs do not obey becomes a body that rules every element.
- **Resurrection as a morning** (68.14–68.15): the dead turns on his left side, on his right, sits up, stands, shakes off his
  dust – the gestures of waking.
- **The mummy as a bound man** (68.3, 71 refrain): "release him, loosen him, give him to the earth" – the wrappings that
  preserve the body are also the fetters to undo; the god who guarded him is the one who unties him.
- **An angry god without a confession** (14): the anger is "in the god's heart" and is removed by offerings that "set his
  mind at rest" and on which god and dead "live" together; wrong is "drowned" rather than confessed.
- **The ka cared for like a temple statue** (105): natron, incense, washing of its "sweat"; the dead identifies with the
  green amulet on Re's neck – and insists he is not a sacrificial animal whose head and foreleg are cut off.
- **A daily cosmic battle** (108): a 30-cubit serpent on the eastern mountain stares down the sun, drinks the water under its
  bark and stops it; Seth, in the bow, spears it, makes it vomit, and speaks to it "in magic" – Seth, Osiris's murderer, is
  here the sun's champion.
- **The inverted world of the dead** (51, 68.9): walking upside down and eating excrement – the dead man's horror of a world
  turned over, and his claim to temple food (white emmer bread, red-barley beer).
- **Speech that creates** (119.5): "I speak, and it comes into being" – the power of creative utterance claimed by the dead;
  and its opposite (90): a demon who "puts mis-speaking into the mouth", so that the spells fail.
- **Puns and aetiologies** (119.3, 14.4–14.5, 108.13): Rosetau is "where (Osiris's) efflux flowed" (*sṯꜣ*); the offerings
  (*ḥtp.w*) "set at rest" (*ḥtp*) the god; the sun "rests" (*ḥtp*) = sets in the evening.
- **Recitation as part of the text** (40.3, 90.8, 103.2): "and vice versa", "twice" – 90.8 shows the method: say it with
  "Osiris", then again with "me".

### Key parallels
- [equivalent] Ps 78:23 `וְדַלְתֵי שָׁמַיִם פָּתָח` ↔ 68.2 "the door-leaves of the sky are open to me"; [divergence] Gen 7:11
  (the windows of heaven opened for destruction).
- [equivalent] Gen 3:14 `עַל גְּחֹנְךָ תֵלֵךְ` ↔ 108.12 "he who goes on his belly" – a serpent's epithet, not a curse.
- [equivalent] Isa 27:1 ↔ 108.7: a deity spears the menacing serpent; [divergence] Job 40:23 (the monster drinking the river)
  and Job 20:15, Jonah 2:11 (the swallower made to vomit) ↔ 108.7–108.8.
- [divergence] Prov 20:12 `אֹזֶן שֹׁמַעַת וְעַיִן רֹאָה` ↔ 105.7: the same pair, here denied of the sacrificial head.
- [equivalent] Ps 33:9 `כִּי הוּא אָמַר וַיֶּהִי` ↔ 119.5 "I speak, and it comes into being".
- [equivalent] Isa 38:5 `הִנְנִי יוֹסִף עַל יָמֶיךָ` ↔ 71.15 "he will add many years to my years of life".
- [equivalent] Gen 2:7 `וַיִּפַּח בְּאַפָּיו` ↔ 71.16 "air to my nose".
- [equivalent] Ps 85:5, Ex 32:12 ↔ 14.1–14.4: removing the god's anger.
- [equivalent] Isa 52:2 `הִתְנַעֲרִי מֵעָפָר קוּמִי` ↔ 68.15 "I stand up, I shake off my dust".
- [cognate] Gen 41:1 `הַיְאֹר` ↔ 68.7, 68.13 (jtrw, the loanword).

### Lines shared with other texts
None copied from other files. Inside NU3: 68.12–68.14 copy 68.5–68.8; BD 71's refrain copied in all six copies; 92.11 copies
92.8–92.9 (`אין שומרים את הַבָּאוֹת, את האָחִים, החותמים על המת והמתה`); 92.7 copies 92.4 (`פתח דרך לבָּא שלי … שיחזה את האל
הגדול`). 71.1 = NU5 64L.1 (`לחש לצאת ביום. דברים לאמר, בפי […] אמיתי־הקול:`) – for NU5 to copy. Strings reused from earlier
parts: `שלום לפניך/לפניכם`, `שור־המערב`, `אדון־האמת`, `אי האמיתיים`, `שדה־האגמונים`, `שדה־הקורבנות`, `שולחן־הקרבנות`,
`יציאות־לקול`, `בעלי־העוול`, `צִי`, `מֶסְקֶת`, `נֶסֶרֶת`, `נָארֶף`, `שני־אריות`, `בָּבִי`, `סוֹבֶּךְ`, `בָּאחוּ`, `בית־כָּא־פְּתָח`,
`דבר נכון באמת, אלפי אלפים פעמים`.

### Proposals for the shared renderings
| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| BD 71's refrain (above) | `תשלים אותי כשם שהשלמת את עצמך – שחררו אותו, התירו אותו, תנו אותו לארץ, תנו את אהבתו – אומר אדון־פנים־אחד עליי.` | 71 | a fixed line for §7 (six copies) |
| the food formula, first copy | `תועבתי היא צואה – לא אֹכַל אותה` | 51.2 | §12.4.7 for BD 52–53, 102, 189 |
| sḫm m X (litany) | `שולט אני ב־X` | 68.4–68.15 | §12.3 |
| sḥtp / sḥtp.yw | `הניח את דעת` / `מניחי־הדעת` | 14.5, 105.1, 71.6 | AM 8.11 |
| špt | `זעף` / `זועף` | 14 | HC 70 |
| zn / wḥꜥ / sfḫ / mr | `פרץ` / `שחרר` / `התיר` / `אסר` | 68.3, 71 | the "open/loose/bind" family beside wn `פתח`, wpi̯ `פילח`, wbꜣ `פער` |
| dbn / pẖr / pnꜥ | `הקיף` / `סובב` / `הפנה` | 71.10, 108.14, 119.4 / 90.3, 47.2 / 108.6 | |
| ẖnm / zmꜣ | `התאחד (עם)` / `התחבר`, `חיבר` | 72.12 / 14.4, 72.9 | SI R7 / SI B121 |
| šw.t | `צל` | 92 | §12.3 confirmed |
| sk.tt / mꜥnḏ.t | `מֶסְקְטֶת` / (`מַעַנְגֶ׳ת`) | 104.2, 37.2 | NU1's suggestion adopted |
| sꜥḥ | `אציל` | 119.5 | BD 74; NU1's `חנוט` not adopted |
| ds | `מאכלת` | 95.2, 108.5 | |
| nšnj | `רוגז` | 95, 71.6 | SS 31 |
| bjꜣ | `מתכת` | 108 | NU2 23.4 |
| ḫtm (BD) | `חתם` (licensed) | 92, 72, 90 | §4.2 |
| ꜣw.t-jb / nb-jmꜣḫ | `שמחת־לב` / `בעל־הכבוד` | 106.1 | NU1 / SI |
| names | the list above | | |
| **Gates (for the coordinator; the tool was not edited)** | (a) the `שבת` gate reads `המושבות` (ה־מו־שבות; s.t "seats"): exempt the whole word; (b) the `אחו` gate reads the place name `באחו` (Bꜣẖ.w) – license *Bꜣẖ* (BD 125 and NU3 108 need `[היתר שער]`) | | |

### Lessons for the guidelines
- A long refrain with one changing word (BD 71's addressee) is best fixed once and pasted by script; a later change of one
  feature (singular → plural imperatives) must be applied to every copy at once, including the copies split across line
  breaks.
- The TLA's lemma gloss and its sentence translation can disagree (68.3 *sti̯* "knüpfen" vs "losgebunden"; 105.7 *kꜣ*
  "Opferstier" vs "Esel"): read both, and say which one the Hebrew follows.

## NU4 79.1–124.20 (Round 6 run 2, translator 4; 2026-11-06)

### Scope
KEY NU4 = 14 chapter texts of pNu in the papyrus's order – BD 79, 117, 118, 21, 12, 122-1, 122-2, 98, 76, 85, 82, 77, 86,
124 – 127 lines (`79.1`–`124.20`), all drafted, filled, verified, compared with the TLA's German and passed three times; the
clean translation built (`translation-NU4.rtl.md`; intro `translation--intro-NU4.rtl.md`). One `## ` heading per chapter
(13: 122-1 and 122-2 under one heading). Preservation: good; restorations only at 12.2, 82.10, 86.7, 124.12, 124.13, 124.17;
`[…]` is mostly the owner's name. The text: most of the transformation spells (become the Great One of the tribunal 79, any
form 76, a living ba 85, Ptah 82, a golden falcon 77, a swallow 86, the benu 124's title), the Rosetau spells (117, 118),
the mouth (21), going in and out (12, 122 with the ferry interrogation), the ferry in the sky (98), and BD 124 (going down
to Osiris's tribunal) – which in Nu carries the title of BD 83 ("transformation into a benu"): noted at 124.1.

### Sources consulted
AED-TEI pNu (`data NU4`); the TLA's German (`tr NU4`), read after each of the four drafting saves (79–118 / 21–98 /
76–82 / 77–124), each call restricted to the labels just drafted; it changed about 75 drafted lines (each listed in the
entry's **תרגומים** bullet, "הטיוטה הראשונה … תוקנה"). No other witness in the folder; Faulkner, Allen, Quirke, Lapp: from
memory only, never quoted. Every Bible verse printed with `check_bible_quotes.py --show` before quoting; the checker reports
0 problems on the three files.

### Decisions
**Formulas (fixed or applied here):**

| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| `rʾ n ḫpr m X` (title, intransitive "become") | `לחש להיות ל־X` / `להיות ב־` | 79.1, 76.1 | *ḫpr* = `נִהְיָה` (§4.4) has no living infinitive; as its future is `יִהְיֶה` (§10.3.4), its infinitive is `לִהְיוֹת`; *ḫpr m* = `נִהְיָה לְ־` (§10.13) |
| `rʾ n jri̯.t ḫpr.w m X` | `לחש לעשות צורה של X` | 85.1, 82.1, 77.1, 86.1, 124.1 | §12.6.1.3, applied |
| the gate interrogation `nm tr ṯw / ntk zy / ḫpr.n=k ṯnj` – answer `jnk wꜥ jm=ṯn` | `מי אפוא אתה? אתה – מי? היכן נהיית? – אני אחד מכם.` | 122-1.2 | *tr* = `אפוא` (NU1 17.84 `מי אפוא הוא?`), *zy* `מי` (BD 125), *ṯnj* `היכן` (NU2); for BD 99B (NU8) |
| `X rn n Y` (the ferry's parts named) | `"X" – שמו / שמה / שמם של Y` | 122-1.2–122-1.4 | NU2 31.3's `"שליח" – שמו של האחד`; gender/number of the Hebrew noun |
| `jy.n=k ṯnj` / `ꜥnḫ=k jrf m m / jšs.t` – `ꜥnḫ=j m X` | `"מאין באת?" – "באתי מ־…"`; `"על מה אפוא אתה חי?" – "חי אני על X"` | 98.6–98.8, 82.4–82.5 | *ꜥnḫ m* = `חי על` (NU1 17.71); one Hebrew for both interrogatives (*m*, *jšs.t*) |
| the food formula (§12.4.7) | `תועבתי (פעמיים) – לא אֹכַל אותה; תועבתי היא צואה – לא אֹכַל אותה.` | 82.3; 124.3–124.5 copies NU3 51.2–51.3 | NU3 51.2's first copy; 82.3 changes only `את תועבתי` → `אותה` (the Egyptian has *sw*); 124.4 *ḫmi̯* (TLA) for 51.3's *ḫnd*: `לא אֵהָרֵס בה` |
| `jri̯ n=j wꜣ.t` | `עֲשֵׂה לי אורח` (pl. `עשו לי אורח`, 86.10) | 117.4, 76.3, 122-2.3, 86.10–11 | *wꜣ.t* = `אֹרַח` (§10.3.1, NU1 `אורחות`); NU2 41 wrote `עשו לי דרך` – an existing split, for the lead |
| the rubric `jr rḫ rʾ pn jw=f pri̯=f m hrw nn šnꜥ=f ḥr sbꜣ nb m ẖr-nṯr` | `מי שיודע את הלחש הזה – יצא הוא ביום, לא ימנעו אותו בשום דלת בחלקת־האל` | 86.13–14 | §12.4.6; BD 125, 114 `לא ימנעו אותו בשום דלת של המערב` |
| `bꜣ=j pw bꜣ.w nṯr.w nḥḥ ḏ.t=j pw ḏ.t` | `הבָּא שלי – הוא הבָּאִים של אֵלֵי הנצח; גוויתי – היא העַד` | 85.9–10 = 85.14–15 | the pun *ḏ.t* "body" `גְּוִיָּה` (MT) / *ḏ.t* "eternity" `עַד` (§4.4), kept in both copies |
| `ḏd-mdw jn […]` without *mꜣꜥ-ḫrw* | `דברים לאמר, בפי […]:` | 118.1, 12.1, 124.2 | the bracket and the words follow the base |
| `šs-mꜣꜥ ḥḥ n zp`, `zp-2`, `zp 4`, `ky-ḏd` | as NU1 | 86.14, passim, 82.10, 122-2.1 | |

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| ḥꜣp (pass. ptcp.) / jmn "hidden" / štꜣ "secret" | `מוסתר` / `נעלם` / `נסתר` | 79.3–4, 85.13, 86.12 | three lemmas in two lines: AM's ḥꜣp `הסתיר`, NU1's štꜣ `נסתר`; jmn (Amun's name) `נעלם` |
| ḫm "shrine" | `דביר` | 79.4 | MT 60 |
| qbḥ.w "cool-water region" | `מי־הצינה` | 79.5 | TB 8,5 qbḥ `צוננים` |
| nṯri̯ (stative) | `אֵלִי` (vocalized) | 79.6 | NU2 nṯr.j `האֵלִית` |
| ḥzmn "natron" / pꜣḏ "pellet" | `נתרון` / `כדור` | 79.7 | bd is `נתר` (NU3) / `בורית` (HC): another lemma, another word; pꜣḏ = WE 1,14 `כדורים` |
| sṯꜣ "jug" | `פך` | 79.13 | ds `כד` (BD 114), ḏwjw `קנקן` (WE) taken |
| ḥꜥꜥ.wt / ḥꜥj | `עליצה` / `עלז` | 79.11–15 | SI B66 `עולזת`; ṯḥḥ `הריע` |
| ṯꜣ.tj (dual) | `שני גוזליכם` | 79.12 | ṯꜣ `גוזל` (NU1, NU3) |
| sꜥḥ "dignity" | `אצילות` | 79.14, 118.2 | the noun of sꜥḥ `אציל` (NU3, BD 74) |
| ꜣḫ.t (tla217) "glory, useful thing" | `תועלת` | 118.2 | AM 6.17; the akh-pun in the note |
| jꜣ.t.j "mound" / jꜣ.t "standard" | `תל` / `מוט` | 118.3, 82.3, 85.18 / 79.11, 85.7, 117.2 | NU1 17.27 / BD 77 (an existing split by lemma) |
| wnḫ "clothe" / ḥbs (verb) "cover" | `הלביש`, `לבש` / `כיסה` | 117.2, 82.7 / 124.15 | kept apart |
| snḏm "make pleasant" | `הנעים` | 117.3 | causative of nḏm `נעים` (AM 9.7) |
| mn.t "suffering" / mn.t "swallow" | `מכאוב` / `סנונית` | 117.3 / 86 | BD 125, 11 / new; two lemmas |
| wḏꜥ "assign" | `הקצה` | 117.3 | split by sense from NU2's wḏꜥ "judge" `שפט` |
| jp "count, assign" / ṯnw "count" | `מנה` (`מנוי`) / `ספר` (`ספור`) | 85.8, 82.11, 86.8 | NU3 jp `מנה`; Hebrew `מָנָה` also "assign" |
| ḏꜣj "cross (water)" / ḏꜣj "ferry X" / ḏꜣj "oppose" | `צלח` / `הסיע` / `חסם` | 98.4, 85.13 / 122-1.4 / 124.12 | §10.8.3 `צָלַח` (PT) for the intransitive; NU2's `הסיע` for the transitive; the homonym "oppose" by sense |
| mnj "moor; die" | `עגן` | 98.2–3, 85.5 | NU1 17.78; the euphemism explained in the notes |
| ngg "cackle" | `קרקר` | 98.3, 82.2 | |
| pꜣj / jṯṯ "fly" | `עף` / `דאה` | 82.2, 77.2, 76.3 / 98.3 | two lemmas, two verbs |
| wꜥr.t (tla44780) "waterway in the beyond" | `אפיק` | 98.2, 86.9 | NU3's wꜥr.t "district" `מחוז` is another lemma (the TLA's sentence says "Bezirk": noted) |
| mꜣq.t / rmn.wj "supports" | `סולם` / `משענות` | 98.5 | rmn "upper arm" `קיבורת` (NU3) is another lemma |
| j.ḫm.w-wrḏ | `בלתי־היגעים` | 98.5 | wrḏ `יגע` (NU2); as j.ḫm.w-sk `בלתי־כלה` (§10.8.4) |
| gm wš (the ancient copyist's lacuna mark) | `"נמצא־פגום"` | 98.8 | literal; the TLA prints "Lücke" |
| jmw / sqdj | `כלי־שיט` / `שט` (`אשוט`) | 98.8 / 98.10 | §10.5.2 (AM); MK E133; `הפליג` is ḫdi̯'s (NU3) |
| wsr.w "oars" / ḥmw "steering oar" / ḥꜣ.tt / mḏꜣb.t | `משוטי־החתירה` / `משוט` / `החבל הקדמי` / `מצקת` | 122-1.3–4 | AM ḥp.t `משוט־חתירה` and wsr.w now share a Hebrew (never in one text: for the lead); AM ḥmw `משוט`; SS 4 `החבל הקדמי` |
| šns, ds, pzn, wr n jwf | `לחם־שֶׁנֶס`, `כד`, `ככר־פֶּסֶן`, `נתח גדול של בשר` | 122-1.5 | BD 125, 113–114, copied |
| mhn "milk jug" | `צנצנת` | 122-1.4 | |
| bjk / smn | `בז` / `אווז` | passim | SI; WE 8,18 |
| ḫpr-ḏs=f; ḫpr.n=j ḏs=j ḥnꜥ Nw | `נהיה־מעצמו`; `נהייתי מעצמי עם הנוּן` | 79.2, 85.4 | NU1, NU2 |
| Ḥw | `חוּ` | 85.2–3 | §3.1 |
| ḫb.t (dꜣ.t) | `הגרדום (של הַדּוּאַת)` | 85.1, 85.5 | NU1 18.28 |
| ꜣḫ.w "power" | `גבורות` | 85.5 | §10.12.1 |
| jm.j.w jḫ.t / mr.t | `בעלי־הרכוש` / `הנתינים` | 85.5–6 | jḫ.t "property" `רכוש` (NU1 split by sense) |
| sms.w / pꜣw.tj.w / pꜣw.t / tp.j.w-ꜥ | `הבכור` / `הראשונים` / `ראשית־הזמן` / `הקדמונים` | 85.9, 77.5, 124.12–14 | `הקדמונים` is tp.jw-ꜥ's (MT 2, HC 8) |
| ḥqꜣ ḏ.t; ḥr.t; ḏr.w | `שליט העד`; `המרום`; `קצה` | 85.11 | §11.2, §10.10.3 |
| qmꜣ kk.w | `יוצר החושך` | 85.11 | qmꜣ `יצר` (§4.4) – Isa 45:7 in the apparatus |
| jꜣr.t; bjꜣ; fnṯ | `שרביט`; `ימת־השמים`; `תולעים` | 85.12–13 | NU2 30A.5; NU1 17.65 (`רָקִיעַ` reserved) |
| ḥwn / jd | `עלם` / `בחור` | 85.15–16 | TB `העלם`; `נַעַר` is AM's ẖrd |
| zš "nest, thicket" / swḥ.t | `סבך` / `ביצה` | 85.17 | NU1/WE `סבך` kept; NU2 22.1 |
| ḥn / ḫwj | `מחוסה` / `מוגן` | 85.18 | ḫwj `הֵגֵן` (PT600) |
| sfḫ "relieve oneself" | `התרוקן` | 82.1 | split by sense from sfḫ "loosen" `התיר` (NU3, 79.8) |
| pḥ.wj; ḥꜣb; jmꜣ; ḥnw.t; wꜣḥ.yt; Tꜣy.t | `אחוריים`; `חג`; `שיזף`; `בעלת`; `דגן`; `תָּאיִת` | 82 | HC 53; NU3 68.10; WE 6,10; SI B192 |
| ḥt.yt "throat" | `גרגרת` | 82.10, 77.9 | `גרון` is AM's jḥdjy |
| nhp / sqbb / ḫꜥ.w / wꜣḥ tp | `מחסה` / `צינן` / `כתרים` / `השפיל ראש` | 82.12 | `הרכין` is AM's ḫꜣb |
| kꜣ "bull" / ꜣ.t "power" / nk | `שור` / `עוז` / `שכב` (licensed) | 82.13 | NU3 14.2 `עוז`; BD 125 nk `שכב עם` |
| ꜥfḏ.t "box, cabin" | `ארגז` | 77.4 | NU1 17.102 (the same lemma) |
| wꜣḏ "green stone"; ks.w; bꜥḥ; šzp jb; Nprj | `אבן ירוקה`; `השתחוויה`; `שופע`; `מרוצה לבי`; `נֶפֶּרִי` | 77 | |
| sḫ.tj-ḥtp (dual) | `שני שדות־הקורבנות` | 77.8 | §12.6.1.4 |
| Ḥdd.t; sṯj "scent"; wrš; wpw.t; smj (noun) | `חֶדֶדֶת`; `ריח`; `בילה את היום`; `שליחות`; `ידיעה` | 86.2–4 | NU3 90.4 `שליחות`; smj verb `הגיד` (BD 125) |
| swn "open" | `פִּנָּה (דרך)` | 86.4 | wn `פתח`, wpi̯ `פילח`, wbꜣ `פער`, zn `פרץ` taken |
| ḫrp-n-wjꜣ; ḫrp | `מנהיג־הצִי`; `הנהיג` | 86.5, 85.12 | SI B229 `מנהיג` |
| sjp "inspect" / "hand over" | `בדק` / `הפקיד` | 86.6–7 / 124.12–14 | NU2's two senses (`בדיקה`, `הפקיד`); `מסר` is swḏ's |
| qꜣḥ | `כפף` | 86.7 | |
| ḫnr.t; skꜣ; mꜣmꜣ | `מתחם`; `חרש`; `דּוּם` | 124.2–3 | AM 8.17 `חרוש` |
| ḫr.t / ẖr.t "needs" | `מחיה` | 124.6, 124.15 | §10.2.3 |
| sꜣḫ.w | `לחשי־אָח` | 124.7 | NU1's suggestion (§12.6.1.4) adopted |
| jꜥr.wt | `פתנים` | 124.7 | BD 125 `פתן` |
| sḥtp-tꜣ.wj (epithet) | `"מניח־דעת־שתי־הארצות"` | 124.7 | sḥtp `הניח את דעת` (NU3) |
| jꜣḫ.w "radiance" (also as a god's epithet) | `אורה` (`"האורה"`) | 98.4, 86.11, 85.18, 124.9, 124.15 | NU2 74.3 `האורה`; NU1 17.66 has `זיו` for the same lemma (an existing split, for the lead) |
| tmꜣ; dhn; nrw | `מחצלת`; `מצח`; `מורא` | 124.17–18 | WE 7,15; NU1 |
| ꜣḫ ꜥpr | `אָח ערוך` | 124.19–20 | NU2 `ערוך` |

**Names (first occurrence vocalized):** `נָאיֶת` (nꜣy.t), `האָבִּית` (ꜣb.yt, a bird), `תֶּפֶן` (Tpn), `כָּאָא` (Kꜣꜣ), `סְוֵן` (swn
water), `וֶנוּ` (Wnw, Hermopolis), `חֶם` (Letopolis, BD/NU1), `תָּא־טֶבּוּ`, `חֶדֶדֶת`, `נֶפֶּרִי`, `תָּאיִת` (SI), `מֶחֶת־וֶרֶת` (NU1),
`גֶ׳דוּ`, `פֶּה`, `האִיבִּיס` (AM), `אַבְּגֶ׳ו`; translated names: `מאסף־הבָּאִים` (the ferryman), `*מסרק־השיער*?`, `מה־ער!`,
`רעה־היא?`, `נכון־בדיוק` (the ferry's parts), `אל־השחר` (nṯr-dwꜣ.y), `"האורה"`, `בָּא־של־רַא`.

**Rejected (gates and echoes):** `רָקִיעַ` for bjꜣ (85.13: `ימת־השמים`, the TLA's "Firmament" in the apparatus); `תְּהוֹם` for Nun
(85.2, 85.4: Gen 1:2 in the apparatus only); `בָּרָא` for qmꜣ (85.11: Isa 45:7 `וּבוֹרֵא חֹשֶׁךְ` in the apparatus); `נְקִי כַפַּיִם`
(79.6: Ps 24:4 in the apparatus); `מסר` for sjp (swḏ's); `נער` for jd (ẖrd's); `גרון` for ḥt.yt (jḥdjy's); `הקדמונים` for
pꜣw.tj.w (tp.jw-ꜥ's); `ספינה` for jmw (sk.tj's); `הפליג` for sqdj (ḫdi̯'s); `עף` for jṯṯ (pꜣj's); `בסס` for srwḏ (`חיזק`, NU2/NU3).

### Open decisions for the user
1. **ḫpr infinitive `לִהְיוֹת`** (79.1, 76.1) beside the past `נִהְיָה`: the alternative `להיהפך ל־` would take the meaning
   "turn into" from ḫpr's own root-sense; `להיות ל־` keeps one Hebrew root with the future `יִהְיֶה` (§10.3.4).
2. **ꜣḫ.t (tla217) `תועלת`** (118.2, AM 6.17): "usefulness" hides the akh-sense ("glory, akh-power"); a coined `אָחוּת` was rejected
   (reads "sisterhood / brotherhood").
3. **BD 124's title** (124.1–2): Nu writes BD 83's title ("transformation into a benu") over BD 124's text; the Hebrew follows
   the papyrus, the `## ` heading takes the content ("going down to Osiris's tribunal").
4. **jꜣḫ.w as a god's name** (124.9, 124.15): `"האורה"` (NU2's noun, quoted as a name); NU1 17.66 has `זיו` for the lemma.
5. **wsr.w `משוטי־החתירה`** shares AM's ḥp.t `מְשׁוֹט־חֲתִירָה` (two lemmas, one Hebrew, never in one text).
6. **82.11** (Geb's wife, "whose head passes away", "do not repeat it – woe!") and **98.10 jꜣꜣ** remain cruxes, marked `*…*?`.

### Progress log
- Drafted in four saves (79, 117, 118 / 21, 12, 122, 98 / 76, 85, 82 / 77, 86, 124), each filled and verified at once; `tr NU4`
  read after each save over exactly the drafted labels, and the **תרגומים** bullet written: about 75 lines changed after the
  TLA – mood and tense (79.13–14, 85.6, 85.8, 85.16–17, 86.9–11, 98.3, 117.3, 118.2–3, 124.2–9, 124.11, 124.16), voice and
  person (21.2–21.3: the god's statives, not the dead man's; 124.4, 124.7), number (79.12 dual, 77.8 dual, 122-2.2–3,
  124.7), syntax and segmentation (79.3–79.6: each "hail" opens the next address; 85.11, 85.13, 85.15–16 the name formula,
  117.3–4 *wr* vocative, 124.13), a word's sense (77.7 *bnw* stone, 77.9 *m* of identity, 82.9–82.10, 98.6 *n Tpn*).
- Pass (a) fidelity: a script listed every bracketed source token against the Hebrew brackets (6 lines; 124.13 *sn[,w]* –
  ending restored → no bracket, fixed); every negation and tense rechecked with the TLA comparison (85.8, 85.16, 98.3 *n sḏm=f*
  past; 85.3 *nn sḏm.n=f*).
- Pass (b) consistency: every new Hebrew word grepped in the corpus; changed: jṯṯ `עף` → `דאה` (pꜣj's), srwḏ `ביסס` → `חיזק`
  (NU2/NU3), jmw `ספינות` → `כלי־שיט` (AM), sqdj `הפליג` → `שט` (MK; ḫdi̯'s), jd `נער` → `בחור` (AM's ẖrd), ḥnw.t `גבירה` →
  `בעלת` (WE), ḥt.yt `גרון` → `גרגרת` (AM's jḥdjy), sjp "hand over" `מסר` → `הפקיד` (swḏ's / NU2), ḥbs `הלביש` → `כיסה` (wnḫ's),
  pꜣw.tj.w `הקדמונים` → `הראשונים` (tp.jw-ꜥ's), pꜣḏ `גלולה` → `כדור` (WE), sṯꜣ `כד` → `פך` (ds's), jꜣḫ.w epithet `הזוהר` →
  `"האורה"` (ꜥḏ / psḏ have `זוהר`); *ꜥnḫ m* aligned to `חי על` in 85.3, 98.7–8, 82.4; nṯr / nṯr.t vocalized (`אֵלִים`, `אֵלָה`);
  the two hearts in the plural (`לִבּוֹת` 79.8, 124.12; `לְבָבוֹת` 124.10). `verify` reports 0 repeated-line differences.
- Pass (c) Hebrew: the clean text read through; the quotation marks of the 98.6–98.8 dialogue closed; 82.6's answer marked by a
  dash; register even, no vav-consecutive.
- `verify NU4 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems;
  `build NU4` done.

### The text on its own terms
- **To survive is to change form** (76, 77, 82, 85, 86): the dead man "makes the form" (*ḫpr.w*) of a falcon, a swallow, a
  god; *ḫpr* "become" is Khepri's name – the beetle that seems to come into being of itself – so every transformation repeats
  the sunrise (85.4 "in which I come into being every day").
- **Self-creation without a beginning before the water** (85.4, 79.2): "I came into being of myself, together with Nun" –
  the creator does not precede the primeval water; he becomes inside it, and becomes again each morning.
- **Body = eternity** (85.10, 85.15): *ḏ.t* "body" and *ḏ.t* "eternity" are one word; the mummy *is* the changeless eternity,
  and the changing forms are *nḥḥ*, the cyclic eternity of the sun.
- **The ba as a bird with a nest** (85.17): "my nest will not be seen, my egg will not be broken" – the soul as a hidden bird.
- **Death as mooring** (98.2–3, 85.5): *mnj* "to moor" is the euphemism for dying; "my abomination is mooring" – the dead
  man's horror of death is a sailor's horror of the journey's end.
- **Knowledge as the passport** (79.9, 122-1.2–4, 86.12): to know the gods' names, the ferryman's name and the name of every
  part of his boat is to pass; the gate interrogation is an examination.
- **The diet of the blessed** (82.3–82.7, 124.3–124.6, 98.7–98.8): "On what do you live?" – white emmer bread, red-barley beer,
  under Hathor's tree; never excrement – the horror of a world turned upside down.
- **The body as gods** (82.9–82.10): head Re and Atum, tongue Ptah, throat Hathor – the speaking organs are the creator's.
- **A scribe's honesty** (98.8): *gm wš* "found destroyed" – the copyist marks the gap of his exemplar instead of inventing.
- **Inversion of judgement** (79.8): the dead man "loosens the wrong" in the gods' hearts and brings them *maat*.
- **The dead as mediator** (124.18–124.19): seated on Osiris's mat, he tells the god the words of men and repeats to him the
  words of the gods – and, an "equipped akh", equips all the akhs.
- **Justice as measure for measure** (86.6): Seth lies in the fetters he made for the dead man.

### Key parallels
- [divergence] Gen 1:2 `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם; וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` ↔ 85.2: the ba of Re comes *out of* Nun.
- [divergence] Ex 3:14 `אֶהְיֶה אֲשֶׁר אֶהְיֶה` and Gen 1:1 ↔ 85.4: a god defined by the verb of becoming – but the becoming is
  renewed daily and happens *with* the primeval water.
- [divergence] Isa 45:7 `יוֹצֵר אוֹר וּבוֹרֵא חֹשֶׁךְ` ↔ 85.11 "I am he who formed darkness" (qmꜣ = `יָצַר`).
- [equivalent] Isa 44:24 `אָנֹכִי יְהוָה עֹשֶׂה כֹּל נֹטֶה שָׁמַיִם לְבַדִּי` ↔ 79.2: the creator's self-predication in participles.
- [equivalent] Gen 28:12 `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` ↔ 98.5: a ladder between earth and sky.
- [equivalent] Isa 38:14 `כְּסוּס עָגוּר כֵּן אֲצַפְצֵף` ↔ 86.1: the dying likened to a swallow; here the dead *become* one.
- [equivalent] Job 6:2 `בְּמֹאזְנַיִם יִשְׂאוּ-יָחַד` ↔ 12.2: the same verb "lift / carry" (fꜣj `נשא`) for weighing on scales.
- [equivalent] Ps 7:16 `בּוֹר כָּרָה וַיַּחְפְּרֵהוּ; וַיִּפֹּל בְּשַׁחַת יִפְעָל` ↔ 86.6: Seth in his own fetters.
- [equivalent] Gen 40:13 `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ` ↔ 124.8: "lifting the head" as restoration.
- [divergence] Gen 16:8 ↔ 122-1.2: the question "where from?" – here an examination answered by identity and names.

### Lines shared with other texts
Copied: 21.1 = NU2 22.1's title (`לחש לתת את פיו של […] אמיתי־הקול`); 79.11 `הגבוה על מוטו` = BD 125, 77; 122-1.5 = BD 125,
113–114's food list; 124.3–124.5 = NU3 51.2–51.3 (food formula; the one different verb *ḫmi̯* / *ḫnd* noted); 82.3 = NU3 51.2
with `אותה` for `את תועבתי` (the Egyptian *sw*); 124.5 `לחמי – מכוסמת לבנה, ושֵׁכָרִי – משעורה אדומה` = NU3 68.9; 86.14
`דבר נכון באמת, אלפי אלפים פעמים` = BD 115. Inside NU4: 85.9–10 = 85.14–15 (the bꜣ / ḏ.t refrain); 82.2 / 77.2–3 / 98.3
(fly – cackle – alight); 98.7 / 82.4 (the "on what do you live" question). For NU8 (BD 99B): the interrogation strings of
122-1.2 and the "X – שמו של Y" pattern.

### Proposals for the shared renderings
| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| `rʾ n ḫpr m X` | `לחש להיות ל־X` | 79.1, 76.1 | ḫpr's infinitive `לִהְיוֹת` (as its future `יִהְיֶה`, §10.3.4) |
| gate interrogation | `מי אפוא אתה? אתה – מי? היכן נהיית? – אני אחד מכם.` | 122-1.2 | for BD 99B (NU8) and every door dialogue |
| `X rn n Y` | `"X" – שמו של Y` | 122-1.2–4 | NU2 31.3 |
| `ꜥnḫ=k jrf m m/jšs.t` – `ꜥnḫ=j m X` | `על מה אפוא אתה חי?` – `חי אני על X` | 98.7–8, 82.4–5 | NU1 *ꜥnḫ m* `חי על` |
| `jri̯ n=j wꜣ.t` | `עֲשֵׂה לי אורח` | 117.4, 76.3, 122-2.3, 86.10 | *wꜣ.t* = `אֹרַח` (§10.3.1); NU2's `דרך` for the lead |
| mnj | `עגן` | 98.2–3, 85.5 | NU1; the "moor / die" pun |
| ḏꜣj (intr. "cross") / (tr. "ferry") / ("oppose") | `צלח` / `הסיע` / `חסם` | 98.4, 85.13 / 122-1.4 / 124.12 | §10.8.3 + NU2 |
| pꜣj / jṯṯ; ngg; ḫni̯ | `עף` / `דאה`; `קרקר`; `נחת` | 82.2, 77.2, 98.3 | the bird verbs of the transformation spells (NU5: BD 83, 84, 81A, 87, 88; NU6: BD 78) |
| bjk; smn; mn.t; bn.w | `בז`; `אווז`; `סנונית`; `בֶּנוּ` | 77, 82, 86, 122-2, 124 | |
| wꜥr.t (tla44780) | `אפיק` | 98.2, 86.9 | kept apart from wꜥr.t "district" `מחוז` |
| j.ḫm.w-wrḏ | `בלתי־היגעים` | 98.5 | |
| sꜣḫ.w | `לחשי־אָח` | 124.7 | NU1's suggestion confirmed |
| jp / ṯnw | `מנה` / `ספר` | 85.8, 86.8, 82.11 | |
| sjp | `בדק` / `הפקיד` (by sense) | 86.6–7 / 124.12–14 | NU2's two senses |
| ḥt.yt | `גרגרת` | 82.10, 77.9 | AM's jḥdjy has `גרון` |
| pꜣw.tj.w / tp.jw-ꜥ | `הראשונים` / `הקדמונים` | 85.9 / 124.12 | |
| jꜣḫ.w | `אורה` (NU2); NU1 17.66 `זיו` – for the lead | | |
| gm wš | `"נמצא־פגום"` | 98.8 | the copyists' lacuna mark, wherever Nu has it |
| names | the list above | | |

### Lessons for the guidelines
- The TLA's sentence and its lemma can disagree on a word's identity (98.2 *wꜥr.t*: lemma "water", sentence "Bezirk"; 124.9
  *jꜣḫ.w*: "Glanz" as a god's name): follow the lemma for the Hebrew word, quote the sentence.
- A copy shared with an earlier part (124.3–5 = NU3 51.2–3) is worth checking word by word against the data: one verb differed
  (*ḫmi̯* / *ḫnd*), and only it changed in the Hebrew.

## NU5 83.1–64L.47 (Round 6 run 2, translator 5; 2026-11-06)

### Scope
KEY NU5 = 24 chapter texts of pNu in the papyrus's order – BD 83, 84, 81A, 87, 88, 132, 148, 52, 53, 61, 56, 57, 54, 38B, 55,
29, 46, 109, 9, 132-2, 94, 63B, 8, 64L – 180 lines (`83.1`–`64L.47`), all drafted, filled, verified, compared with the TLA's
German and passed three times; the clean translation built (`translation-NU5.rtl.md`; intro `translation--intro-NU5.rtl.md`).
One `## ` heading per chapter, BD 64L in three (the "I am yesterday" litany 1–16; hours, reckoning and light 17–40; the rubric
41–47). Preservation good: restorations only at 84.7, 84.9, 132.2, 148.17, 53.4, 9.3, 64L.9, 64L.24; `[…]` is mostly the owner's
name. 81A.2 is a TLA line with no text (`> (שורה ריקה)`); the TLA numbering skips 81A.4 and 148.5. The text: the last
transformation spells (heron/benu 83–84, lotus 81A, "son of the earth" snake 87, Sobek 88), the visit home (132 ×2), the
seven cows and their bull (148), the food spells (52, 53), the breath and water spells (54–57, 38B), the ba and the heart
(61, 29), not perishing (46), the eastern Souls and the Field of Reeds (109), opening the netherworld (9, 8), the scribe's
palette (94), not being scalded (63B), and BD 64 long version with its Menkaure rubric.

### Sources consulted
AED-TEI pNu (`data NU5`); the TLA's German (`tr NU5`), read after each of the five drafting saves (83–88 / 132–53 / 61–46 /
109–8 / 64L), each call restricted to the labels just drafted; it changed about 85 drafted lines (each listed in the entry's
**תרגומים** bullet, "הטיוטה הראשונה … תוקן"). Precedents: NU1–NU4, BD 125, HC, AM, WE, SI, SS (`lex`, `grep`). No other
witness in the folder; Faulkner, Allen, Quirke, Lapp: from memory only, never quoted. Every Bible verse printed with
`check_bible_quotes.py --show` (two remembered wordings – Gen 28:12, 2 Kgs 22:10 – were caught by the checker and corrected).

### Decisions
**Formulas (applied or fixed here):**

| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| `rʾ n jri̯.t ḫpr.w m X` | `לחש לעשות צורה של X` | 83.1, 81A.1, 87.1, 88.1 | §12.6.1.3 |
| the food formula | `תועבתי (פעמיים) – לא אֹכַל את תועבתי; / תועבתי היא צואה – לא אֹכַל אותה. הצואה־של־הכָּא – …` | 52.1–52.3 | NU3 51.2–51.3 copied; only the second verb differs (*ḫr* `לא תיפול אל בטני`); 53.3 the short form `לא אֹכַל צואה, לא אשתה שתן` |
| `ꜥnḫ=k jrf m jšs.t` – `ꜥnḫ=j m X` | `"על מה אפוא אתה חי?" אומרים הָאֵלִים אליי` – `חי אני על X` | 52.3, 52.6, 53.5, 38B.1 | NU4 82.4 |
| `rʾ n rḏi̯.t ṯꜣw` / `rʾ n ꜥnḫ m ṯꜣw` | `לחש לתת רוח` / `לחש לחיות על הרוח` | 54.1, 55.1, 38B.1 | NU2 title type; NU4 *ꜥnḫ m* |
| `j Jtm ḏi̯=k / jmi̯ n=j ṯꜣw nḏm jm.j šr.t=k` | `הוֹ אָתוּם, תתן / תן לי את הרוח הנעימה אשר בנחיריך!` | 56.2 / 54.2 | the optative and the imperative kept apart |
| `ꜥnḫ=j ꜥnḫ=s ssn=j ṯꜣw ssn=s ṯꜣw` | `אחיה – תחיה היא; אנשום רוח – תנשום היא רוח.` | 56.4, 54.3–4 | |
| the four winds (57.6–57.8) | `אם יבואו השמים הָאֵלֶּה במשב־X – אשב ב־Y` | 57.6–57.8 | `רוּחַ` is reserved for *ṯꜣw*: the wind words take `משב־` |
| `jnk sf` | `אני אתמול` (no article) | 83.3, 64L.2 | NU1 17.11 |
| `jr gr.t rḫ rʾ pn smꜣꜥ-ḫrw=f pw` | `ואשר ל(מי ש)יודע את הלחש הזה – מאמת הוא את קולו` | 64L.41 | §12.6.1.1, §12.4.3 (the participle; the noun failed the formula) |
| `šs-mꜣꜥ` | `דבר נכון באמת` | 148.19 | §12.4.6 |
| `jri̯ n=j wꜣ.t` | `עשו לי אורח / אורחות` | 38B.3, 9.5 | NU4 (*wꜣ.t* `אורח`; 84.5 aligned to NU4, not NU2's `דרך`) |
| `ḏd-mdw jn […]` without *mꜣꜥ-ḫrw* | `דברים לאמר, בפי […]:` | 83.1, 109.2, 94.2 | NU4 |

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| zšn "lotus" | `שׁוֹשָׁן` [cognate: loanword] | 81A.1, 81A.3 | Hebrew `שׁוֹשָׁן`/`שׁוֹשַׁנָּה` < Egyptian *sšn* (1 Kgs 7:22, Song 2:1); used only for *zšn* |
| šntj | `אנפה` | 83.1 | Lev 11:19 [equivalent] in the apparatus |
| zꜣ-tꜣ | `בן־הארץ` | 87 | literal; `נָחָשׁ` is *ḥfꜣw*'s (§11.4) |
| Sbk; Km-wr; rmy | `סוֹבֶּךְ`; `כֵּם־וֶר`; `יצור־המים` | 88 | SI; *rm* `דג` is another lemma |
| štw; rd / rdi̯.t; dqr | `צב`; `צמח` (verb and noun); `פרי` | 83.2–3 | AM rd `צומח`; SI dqr |
| sd "be clothed" | `התלבש` | 83.2 | SI B292 `לבוש` |
| šr.t "nostril" | `נחיר` | 81A.3, 56.2, 57.4–8, 54.2 | MT 52b; *fnḏ* is `אַף` |
| ṯꜣw | `רוּחַ` | 54–57, 38B, 55, 64L.36, 109.3 | §4.1 (licensed); Gen 2:7's `נְשָׁמָה` never |
| ssn | `נשם` | 56, 57, 54 | MT 56 |
| mḥ.yt / rs.w / jmn.tj / jꜣb.tj (winds) | `משב־הצפון` / `משב־הדרום` / `משב־המערב` / `משב־המזרח` | 57.6–7 | `רוּחַ` reserved; the directions *mḥ.tj*, *rsj*… `הצפון`, `הדרום`… |
| jd.t "cow" | `עגלה` | 148 | HC 34, 44, 53; Gen 41's `פָּרוֹת` kept out (jḥ.t is `פרה`) |
| ṯꜣy (of the bull) | `גבר` | 148.7 | NU3 |
| sḏfꜣ; ḏfꜣ.w; ḥtp.t | `כלכל`; `מזון`; `קורבנות` | 148 | NU1/NU3 ḏfꜣ.w `מזון`; NU4 ḥtp.t |
| pr.t-r-ḫrw | `מנחת־הקריאה` | 148.16 | new |
| ꜣḫ.w (tla253) | `גבורות` | 148.3, 148.7, 148.16, 64L.40 | NU4 85.5 |
| mk.t | `הגנה` | 148.18, 64L.42 | new; the verb mki̯ stays NU2's `נצר` (64L.10) – `נְצִירָה` is an Akkadian corpora's cognate noun |
| ḥmw / mꜥwḥ.w | `משוט` / `משוט` | 148.8–9, 64L.3 / 63B.1 | mꜥwḥ = NU3 63A's mjḥ.w (the sister spell); shares AM's ḥmw (§12.6.3.5) |
| nh.t; nhi̯ | `שִׁקְמָה`; `סוכך` | 52.4, 109.4, 64L.33–34 | SI; the pun noted |
| sḫ.t-jꜣr.w; jt; bd.t; ẖms; mꜣw.t; mḥ | `שְׂדֵה־הָאַגְמוֹנִים`; `שעורה`; `כוסמת`; `שיבולת`; `קנה`; `אמה` | 109.6–8 | §12.6.1.4; the natural words (Gen 41:5 [equivalent] in the apparatus) |
| jnb "wall" | `חומה` (licensed) | 109.7, 64L.31 | znb.t `סוללה`, wmt.t `מצודה` |
| mfkꜣ.t | `טורקיז` | 84.1, 109.5 | WE |
| gngn-wr; swḥ.t | `הקרקרן־הגדול`; `ביצה` | 56.3, 54.2–3 | ngg `קרקר` (NU4) |
| ꜣgb.w; bꜥḥ; nwy | `הצפה`; `שפע`; `שטף` | 61.2, 64L.12; 61.2, 57.4, 64L.11; 83.5 | `גאות` is AM's *mtr*, `נחשול` SS's *wꜣw* |
| rwḏ | `איתן` | 56.3, 64L.40 | NU3 63A.4 |
| jꜣw.t / jꜣ.yt | `הישישות` | 84.9, 63B.2 | NU3 63A.3; *jꜣw* "old man" `זקן` (AM) |
| wḫꜣ / wšꜣ.w / kk.w | `חשיכה` / `שחור־הלילה` / `חושך` | 84.9 / 64L.10 / 9.3 | `אפלה` is BD 125's knm.t, `עלטה` NU1's snk.t |
| šw "sunlight" / sšp "light" / stw.t / mꜣw.t / wꜣwꜣ / jꜣḫ.w | `שמש` / `אור` / `קרני־אור` / `אלומות` / `בוהק` / `אורה` | 64L.3–26 | TB šw `השמש`; MK E133 sšp `האור`; NU4 jꜣḫ.w `אורה` |
| mꜣꜣ / ptrj | `חזה` / `ראה` | 9.2–3, 64L.45 | NU1 mꜣꜣ `חזה` |
| wpi̯ | `פילח` | 54.3, 64L.21, 64L.34 | NU2 (`פתח` is *wn*) |
| zḫn | `פגש` / `אפף` (by sense) | 84.5, 64L.34 / 56.2 | `חיבק` is SS's *qnj*; ḥpt `גיפף` (64L.33) |
| zbi̯ | `הוביל` / `הגיע` (by sense) | 57.3–4 / 94.5 | WE `הוביל` |
| sšmi̯ / sšm.w | `הוליך` / `מוליך` | 38B.2, 64L.4, 53.2 | `מנהיג` is ḫrp (NU4) |
| šdi̯ "recite" / "take out" | `קרא` / `חילץ` | 38B.4, 64L.45 / 8.2 | one TLA lemma, two senses |
| wḏꜥ | `הקצה` / `הפריד` (by sense) | 52.5, 38B.5 / 54.4 | NU4 / the hatching sense |
| bkꜣ / jwr | `מתעבר` / `הרה` | 54.4 / 64L.30 | NU1 jwr `הרה` |
| ꜥḥꜥ r | `עמד נגד` / `קם נגד` | 8.4 | NU2 `עמד נגד`; TLA "sich erheben" (recorded split) |
| tkn | `נגע` | 64L.9, 64L.46 | AM 4.6 `לגעת`; Gen 20:6, Ex 19:15 in the apparatus |
| gstj; pꜣs; ẖr.t-ꜥ | `קֶסֶת` [cognate: loanword]; `כלי־המים`; `כלי־הכתיבה` | 94 | §4.2; a gate misfire on `הכתיבה` passed with `[היתר שער]` |
| ḥwꜣꜣ.t; zẖꜣ.w | `רקבון`; `סופר` | 94.4 | ḥwꜣ `נרקב` (NU2) |
| rʾ-pr / jwꜣ.y / kꜣrj | `היכל` / `קודש` / `מקדש` | 64L.44 / 64L.5 / 84.5, 64L.5 | WE 9,25, BD 125 11; AM |
| ḏb.t; ḫti̯; bjꜣ | `לבנה`; `חקוק`; `מתכת` | 64L.42 | WE `לבנה`; `חקוק` rather than `חָרוּת` (Ex 32:16 in the apparatus only) |
| ꜥw.t; mḥ.yt; ḥm.t | `צאן`; `דגים`; `אישה` | 64L.46 | §4.4; `נקי` (gate) avoided for twrj: `מטוהר` |
| ḫprr; n-mḥ=f; wp.t-rʾ; ꜥntj.w; gs | `חיפושית`; `נֶמְחֶף`; `פתיחת־הפה`; `מור`; `סוך` | 64L.32, 64L.46–47 | SI B288 `מור` |
| ḫr.t / ẖr.t | `מחיה` / `ענייני` (by sense) | 64L.33, 148.15 / 64L.23 | NU4 124.6 |

**Names (first occurrence vocalized):** `חוֹנְסוּ`, `אִיגֶרֶת` (BD 77), `וֶנוּ` (NU4), `בָּאֵי־אוֹן` (NU2), `בָּאֵי־המזרח`, `חֶם`,
`סוֹבֶּךְ`, `כֵּם־וֶר`, `רוּטִי` (Rw.tj), `אריה` (Rw, NU2 28-2.1), `אָחְבִּית` (Khemmis), `סֶשָׁאת`, `חֶנְחֶנוּ`, `סָאח` (Orion),
`נֶדוּ`, `חַיִת` (Hyt), `סְחְוִי`, `מֶחֶן` (`אשר־בתוך־מֶחֶנוֹ`), `אָכֶר` / `האָכֶרוּ` (NU3), `חוֹרוּס־אָחְתִּי`, `מֶנְכָּאוּרַא`
(Menkaure, as WE's `חַעֶפְרַא`), `חוֹרְגֶ׳דֶף` (WE), `נֶבֶּח` / `נְוֶר` (birds); translated names: the seven cows
(`בית־הכָּאוֹת־אדונת־הכל` … `המקיפה־את־השמים־המרימה־את־האל`), `השור, גבר העגלות`, the four rudders, `הקרקרן־הגדול`,
`סוגר־עינו`, `יגע־הלב`, `אדון־המורא` (NU1), `בעלי־המטפחות`.

**Rejected (gates and echoes):** `פָּרוֹת`, `יְפוֹת מַרְאֶה` (148: Gen 41:2 in the apparatus only); `נָחָשׁ` for zꜣ-tꜣ; `תַּנִּין` (88:
Sobek, no *msḥ* in the text); `רְאֵם` for smꜣ (`שור־הבר`; Num 23:22 in the apparatus); `נְשָׁמָה` for ṯꜣw; `רוּחַ` for the winds;
`מִשְׁפָּט` for wp.t (`הכרעה`); `השיג` for jri̯ "reach" (84.3: the gate reserves it for pḥ; `עשה` kept); `חָרוּת` (64L.42);
`נקי` (64L.46); `בקע` for ꜥḏ (57.2: `חוצב`).

### Open decisions for the user
1. **84.5–84.6 `n rḫ=j X`** – kept as statements (`לא ידעתי (את) נוּן`), the speaker older than Nun and Tatenen; the TLA reads
   rhetorical questions ("do I not know Nun?" = I know him). The Egyptian has no question mark; the opposite meaning hangs on it.
2. **zšn = `שׁוֹשָׁן`** (81A) – a new loanword pair for §4.2 (and the gate list), proposed below.
3. **BD 109's "northern" gate** (109.2) – Nu writes *mḥ.tj* (the TLA: "nördliche (sic!)"); the brief's "eastern gate" is the usual
   text. The Hebrew follows the papyrus.
4. **BD 83's title** – Nu gives BD 83 the heron title (*šntj*) and BD 84 none; with NU4's 124.1 (BD 83's benu title over BD 124),
   the titles of 83, 84 and 124 are shifted in Nu. Noted at 83.1 and 84.1.
5. **The cow names** (148.4–148.6) – my readings beside the TLA's (*kꜣ.w* "kas"/"food"; *jwn.yt* "many-coloured"/"reddish";
   *šni̯.t-p.t* "who encircles the sky"/"sky-cloud"): both recorded in the apparatus.
6. Cruxes marked `?` / `*…*`: 83.3 `*הרביעי*`, 84.2–84.9 passim, 132.3 `*פגעתי*?`, 46.2, 54.3–54.4, 64L.6, 64L.16, 64L.29,
   64L.39, 109.9 `*החוּרֶר*?`.

### Progress log
- Drafted in five saves (83–88 / 132, 148, 52, 53 / 61, 56, 57, 54, 38B, 55, 29, 46 / 109, 9, 132-2, 94, 63B, 8 / 64L), each filled
  and verified at once; `tr NU5` read after each save over exactly the drafted labels: about 85 lines revised – mood (64L.6–9,
  64L.13–14, 64L.37 imperatives and wishes read as statements; 8.2; 63B.3–4), voice (64L.2, 64L.25, 63B.2), relative forms read
  as main clauses (9.3–4, 94.5, 132.3, 64L.16, 64L.28), segmentation across line breaks (64L.16–17, 64L.19–20, 64L.30–31, 64L.38–39),
  word identity (84.3 *twrj*, 84.7 *ḫft*, 8.3 *rʾ* "spell", 29.3 *n ḫnd.w*, 57.5 *ꜥḥꜥ.n*).
- Pass (a) fidelity: a script listed every bracketed source token against the Hebrew brackets (all consistent: endings and
  suffixes restored → no bracket; 132.2's *ḏ[d-mdw] [jn]* bracketed whole); a second script checked every quoted Hebrew
  fragment of the **פירוק** against its `>` line and the parses of 64L were rewritten after the TLA revisions (≈90 fragments).
- Pass (b) consistency: every new Hebrew word grepped in the corpus; changed: ꜣgb.w `גאות` → `הצפה` (AM's *mtr*), zḫn `חבק` →
  `אפף`/`פגש` (SS's *qnj*), wḫꜣ `אפלה` → `חשיכה` (BD 125's *knm.t*), wšꜣ.w `עלטה` → `שחור־הלילה` (NU1's *snk.t*), kꜣ.w `מזונות`
  → `צידה` (ḏfꜣ.w's `מזון`), jwꜣ.y `היכל` → `קודש` and rʾ-pr → `היכל` (WE, BD 125), bkꜣ `הרה` → `מתעבר` (NU1's jwr), Rw `האריה` →
  `אריה` (NU2), rwḏ `חזק` → `איתן` (NU3), jꜣw.t `זקנים` → `ישישות` (NU3), 84.5 wꜣ.t `דרך` → `אורח` (NU4), 83.3 `אני האתמול` → `אני
  אתמול` (NU1); `הָאֵלֶּה` / `אֵלֶּה` vocalized (7 lines). `verify` lists one repeated-line difference (132.1 / 132-2.1: `[…]` only in the
  first copy), justified at 132-2.1.
- Pass (c) Hebrew: the clean text read through; `הַדּוּאַת` with the article (148.11); the 63B heading aligned (`להיכוות`); two
  placeholder parallels removed or replaced (64L.9 → Ps 109:14 printed; 64L.47 removed).
- `verify NU5 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems; `build NU5`
  done. Two gate misfires passed with `[היתר שער]` (94.3 `הכתיבה` ~ `תֵּבָה`; 64L.22 `לשאול` ~ `שְׁאוֹל`).

### The text on its own terms
- **Breath is the god's scent** (81A.3, 56.2, 54.2, 57.8): the lotus "belongs to Re's nostrils"; the dead ask Atum for "the sweet
  breath in your nostrils"; at the end the dead man "pulls the skin of his nostrils" – breathing is smelling, and life comes from
  a god's nose.
- **A life tied to a cosmic egg** (56.3–56.4, 54.2–54.6): "I live – it lives; I breathe air – it breathes air": the dead man
  guards (or is) the egg of the Great Cackler, the first creature; his rebirth is a hatching.
- **Sitting with one's back to the wind** (57.6–57.8): whichever wind the sky brings, the dead man sits on the opposite side, to
  face it – a practical, bodily image of receiving air.
- **Food as being** (148.19, 52–53, 38B.5): "provisioning an akh is (his) true existence"; the akh lives "on" bread, beer, air;
  "I eat of life"; the horror of the inverted world where excrement is eaten and one walks upside down (53.3).
- **Seven cows, a bull and four rudders** (148): heavenly providers whose names are known and painted "in green on a tablet";
  what is laid before the picture reaches the sky. The rite is secret: "do not use it for anyone but your own body".
- **The repeated life** (38B.6): *wḥm ꜥnḫ m-ḫt mt* "I repeat life after death, like Re every day" – the Egyptian name of the
  afterlife is repetition, not resurrection.
- **The Field of Reeds as Egypt enlarged** (109.7–109.8): walls of metal, barley five cubits high, akhs nine cubits tall who reap
  it – the blessed life is farming, multiplied.
- **The scribe's ink** (94.4): "bring me the putrefaction of Osiris – I will write with it": the god's decaying body is the
  flood, the flood is ink; writing as life out of death.
- **One man, every identity** (8.3–8.4, 9.3): the dead man who came to cut Seth's heart becomes Seth "who belongs to the gods";
  Osiris "knows his spell without being there".
- **The found book** (64L.42–64L.45): a spell "found" under a god's feet in Hermopolis, on a metal brick inlaid with lapis, in
  the reign of Menkaure, by prince Hardjedef, brought to the king "as a wonder"; its power is its antiquity and its secrecy.
- **Purity for the reciter** (64L.46): no small cattle, no fish, no woman – the priest's rules extended to anyone who recites.
- **The heart scarab** (64L.46–64L.47): the text is to be written on a nephrite scarab, set in gold, placed "in the heart of the
  man" – the beetle *ḫprr* is Khepri, "becoming".
- **Smell and sight of the god** (64L.35): the goal of the journey is to see the god "face to face, eye to eye".
- **A sound-play kept in the notes** (64L.34): *nh.t* "sycamore" / *nhi̯* "shelter" – the tree's name says what it does.

### Key parallels
- [equivalent] Gen 41:2 `שֶׁבַע פָּרוֹת יְפוֹת מַרְאֶה` ↔ 148.3: seven cows as Egypt's food supply – in Pharaoh's dream years of
  plenty, here sky-cows feeding the dead forever (Gen 41's words not borrowed: *jd.t* `עגלה`).
- [equivalent] Gen 41:5 `שֶׁבַע שִׁבֳּלִים עֹלוֹת בְּקָנֶה אֶחָד` ↔ 109.7: ears and stalk of a miraculous Egyptian harvest.
- [equivalent] 2 Kgs 22:8 `סֵפֶר הַתּוֹרָה מָצָאתִי בְּבֵית יְהוָה` ↔ 64L.42–43: the sacred text "found" in a temple, its finding
  the warrant of its authority ([divergence] 2 Kgs 22:10: there it is read to the king; here the prince finds it himself).
- [equivalent] Gen 2:7 `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` ↔ 56.2, 54.2: the breath from a god's nose – asked for after death, not
  given at creation (*ṯꜣw* `רוּחַ`, not `נְשָׁמָה`).
- [equivalent] Ex 33:11 `פָּנִים אֶל פָּנִים`, Num 14:14 `עַיִן בְּעַיִן` ↔ 64L.35: the two idioms of seeing the god without a veil.
- [equivalent] Ex 19:15 `אַל תִּגְּשׁוּ אֶל אִשָּׁה` ↔ 64L.46: sexual abstinence before contact with the holy.
- [divergence] Job 14:14 `אִם-יָמוּת גֶּבֶר הֲיִחְיֶה` ↔ 38B.6 "I repeat life after death, like Re every day".
- [cognate] `שׁוֹשָׁן` (1 Kgs 7:22; Song 2:1) ↔ 81A *zšn*; `קֶסֶת` (Ezek 9:2) ↔ 94.2 *gstj*; `חָתַם` ↔ 8.2 *ḫtm*.
- [equivalent] Deut 32:39 `אֲנִי אֲנִי הוּא` ↔ 61.2 *jnk pw* "it is I".
- [equivalent] Job 38:31 `כְּסִיל` ↔ 64L.18 Sꜣḥ (Orion).

### Lines shared with other texts
Copied: 64L.1 = NU3 71.1; 52.1–52.3 = NU3 51.2–51.3 (food formula; *ḫr* for *ḫnd* the one change); 53.3 the short form; 52.6 =
NU3 68.9 / NU4 124.5 (emmer bread and red-barley beer, with NU4's `חי … על`); 53.4 = NU4 124.5–6 (`המֶסְקְטֶת והמַעַנְגֶ׳ת הן
המביאות לי אותו`); 87.4 `חדש אני, מתחדש אני` = NU2 43.4; 9.1 = NU3 72.1 (title); 9.2 `הנה, באתי` = NU4 79.6; 132-2 = 132 (the
differences of the Egyptian only: `(פעמיים)`, `אני עין־חוֹרוּס`, and the full title). For NU8 (BD 64K): 64L.19, 64L.32, 64L.35,
64L.41 have their 64K parallels (64K.8, .15, .18, .24) – the 64K translator should copy these lines where the Egyptian is the
same. For NU10 (BD 149): 109.3–109.5 = 149.12–149.14 (rowing and sycamores), 109.7 = 149.7 (the field's measures). For NU7 (BD 189):
52.3–52.7 ≈ 189.4–189.8 (the "on what do you live" dialogue).

### Proposals for the shared renderings
| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| zšn "lotus" | `שׁוֹשָׁן` [cognate: loanword], gated to *zšn* | 81A | add to §4.2 / §5.2 |
| jd.t "cow" | `עגלה` (HC) – `פָּרוֹת`, `יְפוֹת מַרְאֶה` never in BD 148 | 148 | Gen 41 kept to the apparatus |
| mḥ.yt / rs.w / jmn.tj / jꜣb.tj (winds) | `משב־הצפון` / `משב־הדרום` / `משב־המערב` / `משב־המזרח` | 57.6–8 | `רוּחַ` = *ṯꜣw* only |
| šr.t | `נחיר` | 81A, 54–57 | MT 52b; *fnḏ* `אַף` |
| ssn | `נשם` | 54–57 | MT 56 (not the gated `נשמה`) |
| `ḏi̯=k n=j ṯꜣw nḏm jm.j šr.t=k` / `jmi̯ n=j …` | `תתן לי / תן לי את הרוח הנעימה אשר בנחיריך` | 56.2, 54.2 | for every breath spell |
| wḥm ꜥnḫ (m-ḫt mt) | `חזר על החיים (אחרי המוות)` | 38B.6 | wḥm `חזר על` (NU3, SI) |
| sḏfꜣ / ḏfꜣ.w / kꜣ.w "food" | `כלכל` / `מזון` / `צידה` | 148, 64L.2 | |
| mk.t | `הגנה` | 148.18, 64L.42 | mki̯ stays `נצר` (NU2) |
| mꜥwḥ.w (= mjḥ.w) | `משוט` | 63B.1 | NU3 63A |
| ꜣgb.w | `הצפה` | 61.2, 64L.12 | `גאות` AM, `נחשול` SS |
| wḫꜣ / wšꜣ.w | `חשיכה` / `שחור־הלילה` | 84.9, 64L.10 | `אפלה` BD 125, `עלטה` NU1 |
| sšp / šw / stw.t / mꜣw.t / wꜣwꜣ | `אור` / `שמש` / `קרני־אור` / `אלומות` / `בוהק` | 64L | the light words of BD 64, each its own |
| rʾ-pr / jwꜣ.y | `היכל` / `קודש` | 64L.44, 64L.5 | WE, BD 125 |
| Mn-kꜣ.w-Rꜥ; Ḥr-ḏd=f; Sꜣḥ; Ḥy.t; Ndw | `מֶנְכָּאוּרַא`; `חוֹרְגֶ׳דֶף`; `סָאח`; `חַיִת`; `נֶדוּ` | 64L | for NU8 64K and later |
| Sšꜣ.t; Ꜣkr; Ḫns.w; Rw.tj; Rw | `סֶשָׁאת`; `אָכֶר`; `חוֹנְסוּ`; `רוּטִי`; `אריה` | 57.6, 94.3, 83.6, 53.2, 132.3 | |
| the cow and rudder names | as 148.4–148.9 | 148 | for any later copy of BD 148 |
| gate misfires (tool) | `הכתיבה` read as ־תיבה; `לשאול` as ־שאול | 94.3, 64L.22 | exempt these whole words, like `לשבת` / `שמחה` |

### Lessons for the guidelines
- Even a "printed every verse" rule fails when a verse is quoted in a note written after the print: run the checker after
  every save (two remembered wordings, Gen 28:12 and 2 Kgs 22:10, were caught only at the end).
- A late spell like BD 64 is full of imperatives and wishes written as bare *sḏm=f* and of sentences that run across line
  breaks: draft the line, then read the TLA's segmentation before fixing the punctuation – a third of 64L's lines changed there.

## NU6 2.1–190.115 (Round 6 run 2, translator 6; 2026-11-06)

### Scope
KEY NU6 = 11 chapter texts of pNu in the papyrus's order – BD 2, 3, 152, 75, 78, 65, 67, 179, 123, 141 (= 141/143), 190 –
230 lines (`2.1`–`190.115`), all drafted, filled, verified, compared with the TLA's German and passed three times; the clean
translation built (`translation-NU6.rtl.md`, 6 footnotes; intro `translation--intro-NU6.rtl.md`). 17 `## ` headings: one per
chapter, BD 78 in four (the request for Horus's form 78.1–19; Ruti and the nemes 78.20–32; Horus's messenger in the Duat
78.33–47; the message to Osiris 78.48–55) and BD 141/143 in four (title and offering 141.1–16; the seven cows, the bull and
the four rudders 141.17–28; the sons of Horus, sanctuaries, barks, gods, roads and gates 141.29–65; the names of Osiris
141.66–107). Preservation good: restorations only at
78.7, 78.25, 78.42, 78.51, 65.6, 65.11; `[…]` is the owner's name. TLA numbering: 67 skips 67.5–6; BD 190 continues
141's line numbers (190.107–115); 141.102–106 carry several names per line. The text: short "going out by day" spells
(2, 3, 65, 179), the house in the earth (152), going to Heliopolis (75), opening the tomb (67), entering the great house
as Thoth (123), the long BD 78 (the divine falcon as Horus's messenger to Osiris), and the "book" 141/143 + 190 (a litany
of offering recipients and 60 names of Osiris, with a rubric of secrecy).

### Sources consulted
AED-TEI pNu (`data NU6`); the TLA's German (`tr NU6`), read after each of the five drafting saves (2–75 / 78.1–27 /
78.28–55 / 65–123 / 141–190), each call restricted to the labels just drafted; it changed about 60 drafted lines (each
listed in the entry's **תרגומים** bullet, "הטיוטה הראשונה … תוקן"). Precedents: NU1–NU5, BD 125, HC, AM, WE, SI, TB, MT
(`lex`, `grep`, the parses of the earlier annotated files). No other witness in the folder; Faulkner, Allen, Quirke, Lapp
from memory only, never quoted. Every Bible verse printed with `check_bible_quotes.py --show` before quoting (the printouts
caught three remembered wordings – Judg 13:5, 1 Sam 12:3, 1 Sam 24:11 – and four maqaf/vowel slips; all corrected or
removed).

### Decisions
**Formulas (applied or fixed here):**

| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| `rʾ n pri̯.t m hrw` (+ `ꜥnḫ m-ḫt mt`, `sḫm m ḫftj`) | `לחש לצאת ביום, לחיות אחרי המוות` / `ולשלוט באויב` | 2.1, 65.1 | §12.6.1.3; NU5 38B.6 `אחרי המוות` |
| `ky mj.tj=f` (no *rʾ*) | `אחר, כמוהו.` | 3.1 | §12.4.1's `לחש אחר` needs *rʾ*; none is written |
| `rʾ n jri̯.t ḫpr.w m bjk-nṯr.j` | `לחש לעשות צורה של הבז האֵלִי` | 78.1 | §12.6.1.3; nṯr.j `אֵלִי` (NU4) |
| **BD 78's refrain** `snḏ n=j nṯr.w dꜣ.t ꜥḥꜣ=sn ꜥrr.wt=sn ḥr=j` | `יחששו ממני אֵלֵי הַדּוּאַת, ישגיחו הם על שעריהם בעדי` (2nd person `ממך … בעדך`) | 78.3, 78.8, 78.11–12, 78.14–15, 78.24–25 | snḏ `חָשַׁשׁ` (§10.4.3); ꜥḥꜣ in the TLA's sense "achthaben" (first draft "fight", changed in all copies) |
| `jḫ ḏi̯=k snḏ=j qmꜣ=k šfšf.t=j` | `תיתן אפוא את היראה ממני, תיצור את יראת־הכבוד לי` | 78.2–3, 78.14 | NU4 85.6 |
| BD 78's mission sentence `sꜥḥ.n wj Ḥr.w m bꜣ=f r jṯi̯.t ḫr.t=f n Wsjr r dꜣ.t` | `האציל אותי חוֹרוּס בבָּא שלו, כדי לקחת את עניינו לאוֹסִירִיס אל הַדּוּאַת` | 78.19–20, 78.32, 78.39–40 | byte for byte in all three copies |
| `jw=f rḏi̯ n=j, jw=f km ẖr=j m ḏꜣḏꜣ.t` | `נתון הוא לי, גמור הוא תחתיי בוועד` (+ `לא יינטל מידי` for *n/nn nḥm.tw=f m-ꜥ=j*) | 65.14, 179.5, 179.8–9 | fixed by its first copy |
| `ḏi̯=k sḏm=f` (causative wish) | `תיתן ש־` + future | 78.6–8, 65.5, 65.9–11 | NU2's `לחש לבלי לתת ש־` |
| `jri̯ n=j wꜣ.t` | `עֲשֵׂה לי אורח` / `עשו לי אורחות` | 78.26, 78.40, 179.4, 179.7 | NU4 |
| **The litany frame** `n X` (BD 141/143) | `ל־X;` (one item per line; the last `.`); multi-name lines keep each item with its own `לאוֹסִירִיס` | 141.2–141.107 | fixed by its first item (141.2 `לאוֹסִירִיס־אשר־בראש־המערביים;`) |
| `n Wsjr m X` / `n Wsjr ḫnt.j X` | `לאוֹסִירִיס ב־X;` / `לאוֹסִירִיס אשר בראש X;` | 141.66–107 | the litany frame + NU5 `אשר־בראש` |
| BD 141.17–28 (the cows, bull, rudders) | copied from NU5 148.4–9, with the litany `ל־` | 141.17–28 | 141.19 has *Jgr.t* `אִיגֶרֶת` where 148.4 has *ẖr.t-nṯr*: each copy as written |
| `j.n X` / `ḫrw=fj X` | both `אומר X` | 78.23, 78.26 | not `כה אמר` (the prophetic formula) |
| `n-zp` "never" | `אף פעם לא` | 65.4 | `עוֹלָם` reserved (the guidelines' "write `אַף פַּעַם`") |

**Key terms (new or settled here):**

| Egyptian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| sꜥḥ (verb) "ennoble, invest" | `האציל` / `מואצל` | 78.13, 78.19, 78.21 | the verb of NU3/NU4's sꜥḥ `אציל` / `אצילות`; Num 11:17 `וְאָצַלְתִּי` noted as [equivalent] (the concept, not the root, is Egyptian) |
| ḏsr (verb) "clear, set apart"; ḏsr.w "relics" | `קידש` / `הקדשים` | 78.2, 78.44–45; 78.31 | one root with ḏsr `קדוש` (BD 125, 75.3); `פִּנָּה` is NU4's swn; the TLA's "freimachen / abschirmen / heiligen" |
| ꜥḥꜣ "take care" (TLA) | `השגיח` | BD 78 refrain | ꜥḥꜣ "fight" `נלחם` (SI) kept for that sense (75.5 `שני הנלחמים`): a split by sense, recorded |
| sqꜣi̯ / ṯni̯ | `רומם` / `הבליט`, `בולט` | 78.2, 78.49 / 78.16, 78.19, 78.43 | NU2 1.12 sqꜣi̯ `המרומם`; AM 15.17 ṯni̯ `ניכר` (split by form) |
| nms "nemes headcloth" | `נֶמֶס` (`בית־הנֶמֶס`) | 78.20–27 | transliterated |
| Rw.tj | `שני־אריות` | 3.2, 78.20–30 | BD 125, NU1, NU2; NU5 53.2 has `רוּטִי` – a split for the lead |
| ꜣhd "the Exhausted" | `אָהֶד` | 78.25–26 | `יגע`, `נלאה`, `עייף` taken |
| ḏbꜣ (m., "naos? base?") / ḏbꜣ.t | `כַּן` / `תֵּבָה` [loanword] | 78.26–27 / 75.2 | two lemmas; `תֵּבָה` only for ḏbꜣ.t (§4.2) |
| wsr.t "neck" | `מפרקת` | 78.28, 78.37, 78.51 | `עורף` is SI's sꜣ, `צוואר` SI's nḥb.t |
| wsr.w "strength" / wsr "mighty" | `חוסן` / `חסין` | 78.41 / 65.4, 190.108 | `כוח` pḥ.tj, `עוז` ꜣ.t, `גבורות` ꜣḫ.w |
| sḫm (noun) "Mighty One" / sḫm "sceptre" | `האדיר` / `שרביט־הסֶחֶם` | 78.36, 78.53 / 78.44–45, 179.3 | `שליט` is ḥqꜣ, `שרביט` jꜣr.t (NU4) |
| jꜣꜣ.t "staff" | `מטה` | 179.3 | `שרביט` taken |
| nwn "dishevel" / sps "tousled" | `סתר (שער)`, `סתור־השיער` / `מדובלל` | 78.35, 179.3 | `פרוע` is NU1's pzḫ |
| jṯi̯ "take" | `לקח` | 78.20–22, 78.42, 65.3, 65.5 | WE / SI (NU2's `תפס` noted) |
| ḫpi̯ "go, travel" | `התהלך` | 75.5 | NU5's ḫpj "meet" `פגש`: split by sense |
| ḫbḫb "tread; slaughter" | `רמס` / `רמיסה` | 75.3, 78.25 | `דרך` is ḫnd (BD 125) |
| bzi̯ / bz-štꜣ | `חדר (אל)` / `החדירה־אל־הסוד` | 75.3, 190.109 | `נכנס` is ꜥq |
| zmꜣ.yt Swtj | `חבורת סֵת` | 65.4 | NU1 18.5 |
| jz.t "crew, troop" | `פלוגה` | 3.3 | `צוות` sqd.wt (NU3), `חבורה` zmꜣ.yt |
| ḥꜣ.t "tomb" | `בית־הקבר` | 67.1 | `קבר` jz (NU3), `קבורה` qrs.w |
| jwi̯ / jwi̯.w "boatless(ness)" | `חסר־הסירה` / `חוסר־הסירה` | 78.29, 67.4 | |
| ꜣh "be wretched" | `נדכא` | 67.4 | `אֻמְלָל` is jꜣd (AM) |
| jbkꜣ "sow"; jwms "falsehood" | `חזירה`; `תרמית` | 65.7–8 | `כזב` grg, `שקר` ꜥḏꜣ |
| mr "illness" | `מחלה` | 65.9 | |
| šs "linen" | `שֵׁשׁ` [loanword, licensed] | 141.2 | §4.2 |
| zḥ "tent, booth" | `ביתן` | 141.103, 190.112 | `אוהל` is SI's |
| ḥm "servant" | `משרת` | 190.112 | `עבד` is bꜣk |
| ḥꜣw-mr "rabble" | `האספסוף` | 190.115 | the natural word; Num 11:4 [equivalent] |
| jdi̯ "deafness" | `חֵרְשׁוּת` (vocalized) | 190.111 | `חרש` is NU4's skꜣ "plough" |
| Mḫnt.j-n-jr.tj | `מְחֶנְתִי־אֶן־אִירְתִי` | 78.35 | NU1 (without "Horus", as written) |
| Swnw (Syene) | `סְוֵנֵה` [cognate: the Bible's name] | 141.89 | Ezek 29:10 (§6.4.6) |
| Ḫnt.j-jmn.tjw | `אשר־בראש־המערביים` | 141.2, 179.6, 190.108 | NU5's `אשר־בראש־` |
| the barks sk.tt / mꜥnḏ.t | `מֶסְקְטֶת` / `מַעַנְגֶ׳ת` | 141.35–36 | NU3 / NU4 |

**Names (first occurrence vocalized):** transliterated – `חֶנְחֶנוּ` (NU5), `רֶמְרֶם`, `אִיחְסֶסֶף`, `כֶּמְכֶּם`, `חֶבֶּנֶת`,
`כֶּחְכֶּחֶת`, `התִּית` (the Isis knot; not tj.t "image" `דְּמוּת`), `החֶפִּיוּ`, `אָהֶד`, `חֶמָאתֶת`, `נֶבֶּג׳?` (TLA "the
Evil one"), `חֻוֶנֶת` (a drink), `חֶנֶת` (a sky water), `העֶגֶ׳וּ` (a fish), `עַנְחְתִּי`, `וַעְ־אֶם־חוּ`, `רֶסְנֶת`, `מֶחְנֶת`,
`בָּאתִי־רֶפִּית`, `סֶחֶתֶת`, `נֶצֶ׳רוּ` (the Iseum), `רֶא־חֶנֶת`, `עַאפֶּר`, `פֶּסֶג־רֶא`, `אִינוּ`, `תֶּנֶנֶת`, `נֶדְבִּית`, `סִיָא` (a place,
not the god Sia), `שֶׁנוּ`, `חֶנֶקֶת`, `שָׁאוּ`, `מָאעַתִּי` ("the Two Truths" as a water), `חֶנִי`, `הָאקֶר` (NU1), `הוָאג`;
translated – `שני־אריות`, `אשר־בראש־חֶם` (NU5), `שור־הרוגז`, `אדון־הרפיון`, `אדון־שני־הפתנים`, `השׂבים` (NU1),
`בית־הדבורה`, `עיר־הבז`, `עיר־הבבונים`, `מתיחת־האגם`, `מקום־העייפות`, `ארץ־הצפון`, `איש־הפרגוד`, `איש־הקוטן`,
`אשר־על־חולו`, `ביתן־העגלה`, `אשר־לפני־יתד־העגינה־שלו`, `התשיעייה־הגדולה` / `הקטנה`, `שורת־המקדשים של הדרום / הצפון`,
`אֵלֵי־המוטות / האופק / השדה / הבית / הכס / הקרבנות`, `האֵלִים השפופים`, `אנשי־האש`, `פותחי־הדלתות`.

**Rejected (gates and echoes):** `עוֹלָם` (65.4 `מעולם` → `אף פעם`); `השיג` for znj (78.53: reserved for pḥ; `המגיע`);
`בסוגו` for ḥmi̯ (123.2: the root סוג; `בסורו`, NU1's `סר`); `המעצב` for nbi̯ (141.76: the root עצב; `היוצק`); `בגדה` (141.105:
read as `בגד`; `בשפת־המים`); `מבעירים` for rkḥ (the root בער; `אנשי־האש`); `נקיק` for ẖꜣs.t instead of the root בקע;
`כה אמר` for ḫrw=fj; `פרוכת` for tꜣy.t (`פרגוד`); `גדיל`/`ציצית` for ꜥnḫ.tj (transliterated); `תֵּבָה` for ḏbꜣ (m.).
Gate permits written (`[היתר שער]`): 65.9 `ברַא` (b + Re), 141.90 `ברֶא־חֶנֶת` (b + the place name, as `ברֶא־סְטָאוּ`).

### Open decisions for the user
1. **sꜥḥ `האציל` / `מואצל`** (78.13–21): the verb of the corpus's sꜥḥ `אציל` brings Num 11:17 `וְאָצַלְתִּי מִן הָרוּחַ`
   into the Hebrew; the concept fits (Horus endows his messenger with his ba), but the root link is ours, not Egyptian. Recorded as
   [equivalent]; alternative `עיטר` ("adorned"), losing the noun's family.
2. **ꜥḥꜣ in BD 78's refrain**: the TLA's "achthaben" (`ישגיחו … על שעריהם`) against the lemma's main sense "fight" (Faulkner's
   reading, from memory: "fight for me in their gates"). Followed the TLA's sentence; the alternative is `ילחמו … בשעריהם`.
3. **ḏsr (verb) `קידש`** (78.2, 78.44–45): keeps one root with ḏsr `קדוש`, but reads "sanctify the roads" where the sense is
   "clear, set apart"; the alternative `פִּנָּה` is NU4's swn.
4. **Rw.tj**: `שני־אריות` here (BD 125, NU1, NU2) against NU5 53.2 `רוּטִי` – one form should win.
5. **BD 65.11–65.13**: the "threat" (Hapi not rising, Re not descending; then Re rising, Hapi descending; "the great day will
   end") is rendered literally; its logic is unclear in Nu's text.
6. Cruxes marked `?` / `*…*`: 2.2 (the moon as `ירח` vs AM's god `יָעַח`), 75.2 (`בתֵּבוֹת?`), 78.12 `*במה שצדת*`, 78.25,
   78.26–27 `כַּן?`, 65.5–6 `*המשמר*?`, 141.61 `*השממה*?`, 179.3 `מטהו?`, 179.7 `*נוזלי־הגופה*?`.

### Progress log
- Drafted in five saves (2, 3, 152, 75 / 78.1–27 / 78.28–55 / 65, 67, 179, 123 / 141, 190), each filled and verified at once;
  `tr NU6` read after each save over exactly the drafted labels: about 60 lines revised – mood (wishes read as statements: 2.3,
  3.4, 152.2, 152.10, 78.6, 78.13, 78.17, 65.9 stative; imperatives: 67.7, 179.7, 78.26 plural), voice (78.18, 78.36, 141.72, 179.3,
  179.7 *n ꜥwꜣi̯=j* "I am not robbed" – first drafted as BD 125's denial), syntax across line breaks (152.3–4, 152.8–10, 78.9–10,
  78.25–26, 78.29–30, 78.35–38, 78.44–45, 78.49–50, 179.5–6, 190.113–114), word identity (3.4 *msi̯.y* "begetter", 78.7 *sqd*,
  78.22 *jr.j*, 78.28 *wꜣš.tj*, 78.40 *skm.yw*, 141.42, 141.67, 141.92–93, 141.99–100, 141.104 transparent names translated).
- Pass (a) fidelity: a script listed every bracketed source token against the Hebrew brackets (6 lines; 78.51 *wsr[,t]=[k]* –
  ending and suffix restored → no bracket, fixed; 78.42 `ש[ידעו]`; 65.10–11: the restored *[rḏi̯]* moved back into 65.11 as
  `[תיתן]`); a second script checked every quoted Hebrew fragment of the **פירוק** against its `>` line (1 fix).
- Pass (b) consistency: every new Hebrew word grepped in the corpus; changed: sqꜣi̯ `הגביה` → `רומם` (NU2 1.12) and ṯni̯ → `הבליט`,
  wsr.t `עורף` → `מפרקת` (SI's sꜣ / nḥb.t), jz.t `חבורה` → `פלוגה` and zmꜣ.yt `כנופיה` → `חבורה` (NU1 18.5), wḏ.t → `מצוות` (WE),
  zḥ `אוהל` avoided (SI); the BD 78 refrain and mission sentence identical in every copy; the cow/rudder names identical to NU5 148.
  `verify` reports 0 repeated-line differences.
- Pass (c) Hebrew: the clean text read through; 179.5's period moved (the sentence runs into 179.6), 141.1 `קידומו הוא`, 190.112–113
  split `הנה האָח – / כל (אָח) אשר…`; 6 footnotes added (75.2, 78.13, 78.20, 179.4, 141.66, 190.115).
- `verify NU6 --strict`: 0 problems; `check_bible_quotes.py` on the annotated, intro and translation files: 0 problems; `build NU6`
  done (it also regenerated the project's `translation.rtl.md`).

### The text on its own terms
- **Death is "yesterday"** (179.1–179.4, 3.4–3.5): "I died yesterday, I came today"; the dead man lives "after his death like Re
  every day", and the one who bore Re yesterday bears him today – rebirth is the sunrise, repeated.
- **A messenger between the living son and the dead father** (78.20–78.23, 78.46–78.48): Horus sends the dead man, in his own
  falcon form and with his own ba, to tell Osiris what he did "without his father's knowledge" – the beyond needs news from the world.
- **Identity by insignia** (78.20–78.27): form is not enough; the gatekeeper Ruti withholds passage until the messenger receives the
  nemes headcloth and his two wings – royal regalia make the god.
- **The first creatures** (78.15–78.18): the akhs and "worms" came from the root of the creator's eye while he was alone in Nun,
  "before Isis came into being" – the dead man claims a place older than the Osiris family.
- **A house built by gods** (152): the tomb's foundation is in Heliopolis, its circuit in Kheraha; Seshat brings, Anubis calls,
  the south wind brings barley and the north wind emmer – a private grave set on the cosmic map.
- **Lawsuit and cosmos** (65.10–65.13): the dead man's victory in court is tied to the order of the world – Re in the sky on
  Maat, Hapi in the water on fish; if justice fails, "the great day ends".
- **The enemy eaten** (179.9, 65.14): the defeated foe "is given to me, finished under me in the tribunal", and eaten on Wadjet's
  offering table – victory as consumption.
- **Mourning as identity** (78.35, 179.3): the dead man "dishevels" his hair before Osiris, as Nut does, and calls himself "the
  tousled one" – he is mourner and mourned at once.
- **The world as a list of recipients** (141): gods, barks, cows, rudders, roads, doors, gatekeepers, fires and 60 names and places of Osiris
  each receive an offering – nothing in the beyond is too small to be named and fed.
- **The sanctity of secrecy** (190.111–190.115): the book is done in a star-spangled tent, seen by a confidant and the lector
  priest only, "a true secret – the rabble shall not see it, nor anyone, ever"; knowledge kept is power kept.
- **Filial duty in the cult** (141.1): the book is made "by a man for his father or his son at the festivals of the West".
- **Words inside the text that undo each other** (65.7–65.8): the sow bound and the falsehood under guard – then the sow loosed and
  the falsehood released; the spell plays the binding and unbinding of evil.

### Key parallels
- [cognate] Gen 41:45 `כֹּהֵן אֹן` ↔ 75.1, 3.6: Heliopolis, the sun's city, by its Egyptian name.
- [cognate] Ex 2:3, Gen 6:14 `תֵּבָה` ↔ 75.2 *ḏbꜣ.t*: the loanword in its Egyptian sense (coffin, shrine).
- [cognate] Ezek 29:10 `מִמִּגְדֹּל סְוֵנֵה` ↔ 141.89 *Swnw*: Syene, Egypt's southern border, in both.
- [cognate] Ezek 27:7 `שֵׁשׁ בְּרִקְמָה מִמִּצְרַיִם` ↔ 141.2 *šs*: the Egyptian linen.
- [equivalent] Num 11:17 `וְאָצַלְתִּי מִן הָרוּחַ` ↔ 78.13–78.20: the sender's power transferred to his envoys (Horus's ba).
- [equivalent] Mal 3:1 `הִנְנִי שֹׁלֵחַ מַלְאָכִי וּפִנָּה דֶרֶךְ` ↔ 78.2: a messenger for whom the roads are cleared.
- [equivalent] Ps 24:7 `שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם` ↔ 78.49: gates opened before the royal envoy.
- [equivalent] Gen 3:22 `הֵן הָאָדָם הָיָה כְּאַחַד מִמֶּנּוּ` ↔ 190.114: the man "like one of them" – expelled there, received here.
- [divergence] Deut 29:28 `הַנִּסְתָּרֹת לַיהוָה` ↔ 190.109–190.115: the secret belongs to god in the Torah; here it is kept by the
  initiated few as their power.
- [equivalent] Gen 2:22 `וַיִּבֶן` ↔ 152.1 (qd `בנה`), Ps 127:1: a house built by gods.

### Lines shared with other texts
Copied: 141.17–141.28 = NU5 148.4–148.9 (the cow, bull and rudder names, with the litany's `ל־`; 141.19 *Jgr.t* `אִיגֶרֶת` for
148.4's *ẖr.t-nṯr*); 78.47 *jzp (m) jb n Swtj* = NU5 9.3 `אשר פצע לבו של סֵת`; 2.4 `כל אשר יחפוץ` = NU1 18PS.1; 152.10 the four
kinds (`בני־האדם, הָאֵלִים, האָחִים והמתים`) = NU5 148.14; the titles and `דברים לאמר, בפי […] (אמיתי־הקול):` as NU1–NU5.
Inside NU6: BD 78's refrain (six copies) and mission sentence (three copies); 65.14 = 179.5 / 179.8–9; 152.7 / 152.11
(`המשובח שם`); 78.10–11 = 78.33–34 (`אלך ואבוא עד תכלית / השמים`). For the later parts: BD 78's refrain and the nemes dialogue
(if BD 78 recurs), the litany frame `ל־X;` for BD 144–148 lists (NU9/NU10).

### Proposals for the shared renderings
| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| litany `n X` | `ל־X;` (one item per line) | 141.2–107 | the first item fixes the frame |
| `jw=f rḏi̯ n=j, jw=f km ẖr=j m ḏꜣḏꜣ.t` | `נתון הוא לי, גמור הוא תחתיי בוועד` | 65.14, 179.5, 179.9 | a formula of BD 65/179 |
| BD 78 refrain | `יחששו ממני אֵלֵי הַדּוּאַת, ישגיחו הם על שעריהם בעדי` | 78 | for any copy |
| sꜥḥ (verb) | `האציל` / `מואצל` | 78.13–21 | the verb of sꜥḥ `אציל` |
| ḏsr (verb) / ḏsr.w | `קידש` / `קדשים` | 78.2, 78.31, 78.44–45 | one root with ḏsr `קדוש` |
| ꜥḥꜣ "take care" | `השגיח` (ꜥḥꜣ "fight" `נלחם`) | 78 | split by sense |
| sqꜣi̯ / ṯni̯ | `רומם` / `הבליט`, `בולט` | 78 | NU2 / AM |
| wsr.t "neck" | `מפרקת` | 78.28, 78.37, 78.51 | SI's sꜣ `עורף`, nḥb.t `צוואר` |
| wsr.w / wsr | `חוסן` / `חסין` | 78.41, 65.4 | |
| sḫm (noun "Mighty") / sḫm sceptre | `האדיר` / `שרביט־הסֶחֶם` | 78.36, 78.44 | |
| nms | `נֶמֶס` | 78 | |
| zmꜣ.yt (Swtj) | `חבורת (סֵת)` | 65.4 | NU1 18.5 |
| jz.t | `פלוגה` | 3.3 | |
| ḥꜣ.t "tomb" | `בית־הקבר` | 67.1 | |
| zḥ | `ביתן` | 141.103, 190.112 | |
| ḥꜣw-mr | `אספסוף` | 190.115 | Num 11:4 [equivalent] |
| Swnw | `סְוֵנֵה` | 141.89 | the Bible's name (§6.4.6) |
| Ḫnt.j-jmn.tjw | `אשר־בראש־המערביים` | 141.2, 179.6, 190.108 | |
| names | the lists above | | |
| gate misfires (tool) | `ברַא` (b + Re), `ברֶא־חֶנֶת` (b + Rʾ-ḥn.t) read as the root ברא; `בגדה` "bank" read as `בגד` | 65.9, 141.90, 141.105 | license *Rꜥ* / *Rʾ-* names after a ב prefix, as Rosetau (§12.6.1.6) |

### Lessons for the guidelines
- A litany is cheapest to draft from a table (label | Hebrew | parse | note) turned into entries by a script: the frame stays
  identical, and the apparatus can concentrate on the names.
- In a dialogue spell the TLA's sentence division decides who speaks; about a third of BD 78's revisions were speaker or clause
  boundaries across line breaks (78.25–26, 78.35–38, 78.49–50).

## NU7 133.1–189.28 (Round 6 run 2, translator 7; 2026-11-06)

### Scope
All 222 lines of KEY NU7 – BD 133, 136A, 134, 130, 131, 89, 154, 115, 116, 112, 113, 138, 187, 189 in the papyrus's order –
drafted, filled, compared with the TLA, three passes, built (`translation-NU7.rtl.md`); `verify NU7 --strict` 0 problems;
`check_bible_quotes.py` 0 problems on the three files. Preservation: almost complete; restorations only 134.3 (`[ḫmi̯.]`),
130.20 (`[n]`), 115.8 (`[z]`, a sign: no bracket), 116.2 (`[j]w`, `[b]zi̯`); 116.7 is an empty TLA line (`(שורה ריקה)`, as NU5);
134.16 does not exist in the base. Sections: the sun-bark spells with their boat rubrics (133, 136A, 134, 130 in two
headings, 131), the ba and the body (89, 154), "knowing the bas" of Heliopolis, Hermopolis, Pe, Nekhen (115, 116, 112,
113), entering Abydos and the Ennead (138, 187), not walking upside down / not eating excrement (189, in two headings).

### Sources consulted
AED-TEI pNu (base, `data NU7`); the TLA's German (`tr NU7`) per section, quoted in the תרגומים bullets; it changed about
45 drafted lines (mostly mood – the TLA reads the hymnic *sḏm=f* chains of 133–131 as wishes; voice; relative vs main
clause; see the Progress log). No other rank-3 translation quoted. The earlier NU files (NU1–NU6, BD) for every
recurring word (a parse-segment search over all Egyptian annotated files, `lex`, `grep --all`). All verses printed first.

### Decisions
- **Formulas kept:** `ḏd-mdw jn […] (mꜣꜥ-ḫrw)` as the base has it (with/without `אמיתי־הקול`, and without `[…]` at 134.1);
  `ky rʾ` `לחש אחר`; `rʾ n tm rḏi̯.t` `לחש לבלי לתת` (154.1, 189.1); `šs-mꜣꜥ ḥḥ n zp` (136A.25, 134.17); `jr rḫ rʾ pn`
  `מי שיודע את הלחש הזה` (116.6); the food formula copied from NU3 51.2 / NU4 82.3 / NU5 52.1–2 (189.2–3, 189.9, 189.12;
  116.6 in the third person `תועבתו היא צואה`, marked `[סטייה מן הנוסחה]`); `j⁝nḏ-ḥr=k` `שלום לפניך` (BD 3).
- **Copied from earlier files:** 133.1 / 133.20 ← NU6 190.107 (`המגילה לקידום האָח`, `בלב רַא, לתת שישלוט הוא אצל`);
  136A.21–22 ← NU6 190.112–113 (`הנה האָח – כל (אָח) אשר עושים לו`); 189.2–189.8, 189.12–13 ← NU5 52.1–52.7, NU4 82.2–82.4,
  124.3–5, NU3 51.2–3 (only the Egyptian's differences changed: 189.8 *mdw* "staff" `מטה־ארצו` against NU5's *mdwi̯*
  "speak"; 189.10 `כסִיס` for *wr* against NU4's `כבז`); 136A.23, 130.41 ← NU2 42.20 `לא … שוב`.
- **New terms (one Hebrew per lemma):** *sjqr* `קידום`/`קידם` (NU6); *wjꜣ* `צִי`; *nꜥi̯* `הפליג` (*sqdi̯* stays `שט`);
  *ḏsr* (verb) `קידש` (NU6); *ḥp.wt* `משוט־חתירה` (= AM's *ḥp.t*, the same lemma); *dp.w* `משוט־ההגה` (new; *ḥmy.t* is HC's
  `הֶגֶה`); *jtn* `אָטוֹן`; *sdꜣ.w* `רעד` (SI); *nsb* `לחך`; *ꜥm* `בלע`; *bqs.w* `שדרה`; *jbṯ* `לכד (בפח)`→ `תלכוד`;
  *nmnm* `נע`; *ḥzmn* `נתרון`, *snṯr* `קטורת`, *sṯi̯-nṯr* `ריח־האל` (another lemma); *ztj* `אוכר`; *mḥ.t* `קערה`; *ḥꜣ.t* (of
  a boat) `חזית` (`חַרְטֹם` is the loanword's); *ḫꜣbꜣs.w* `הנוצצים` (stars; `כוכב` is *sbꜣ*); *mḥ.t* "flood" `שיטפון`,
  *mḥ.yw* `שטף` (`מבול` never); *bjꜣ* "sky-water" `הבִּיָא` (transliterated; `רקיע` reserved), *bjꜣ* "metal" `מתכת` (NU3);
  *qmꜣ* II "throw" `השליך` (AM 9.10; the יצר gate stays for *qmꜣ* "create"); *sk* `ניגב` (`מחה` reserved); *jwi̯* "leave
  boatless" `הושאר בלא סירה`; *ḫrp* `הנהיג` (`הוביל` is *zbi̯*/*sṯꜣ*); *dr* `הרחיק` (MK); *srwḫ* `ריפא` (NU6); *zbi̯*
  "pass away" `גווע` (154: *ski̯* `אבד`, *ḥtm* `נשמד`/`השמיד`, *ḥwꜣ* `נרקב` (NU2), *ẖnn/ẖn* `התעפש`, *jmk* `נמק`, *snsn*
  `הבאיש`, *fnṯ* `תולעת` (NU4/NU6), *sgnn* `הרפה`); *smꜣ.yw* "body, flesh" `שאר` (`גוף` is *ḥꜥ.w*); *ḏdf.t* `זוחל` (not
  Gen 1's `רמש`/`שרץ`); *mj.tj* `עמית` (`דמות` is gated to *twt*); *msḏi̯* `שנא`; *nbi̯* `יצק` (NU5); *mꜥbꜣ* "spear"
  `רומח` (*mtꜣ* `כידון`), *mꜥbꜣ.yt* `מְעַבָּאִית` (BD); *jm.j-hꜣw=f* `אשר־במשמרתו`; *wr-mꜣw* `גדול־הרואים` (WE);
  *rri̯* and *šꜣj* both `חזיר` (BD 112; a kept split); *ḥfy.t* = *ḥfꜣ.t* `נחש` (MT 54; `[היתר שער]`); *gꜣf* = *gf* `קוף`
  (`[היתר שער]`); *ḥnzk.t* `צמה` (NU5); *ḫnm* `אומן`; *nbꜣ* `שָׁדוּף`; *ḏbꜣ.t* (tree) `גֶ׳בָּאת` (transliterated: `תֵּבָה` is
  *ḏbꜣ.t* "chest"); *Ḥpw* (Apis) `אַפִּיס` (`חָפִּי` is Horus's son).
- **Names:** Nn.t `נֶנֶת`; Sbg `סֶבֶּג` (Mercury); Wn.tj `וֶנְתִּי`; Nbḏ `נֶבֶּגֶ׳`; Mḥn `מֶחֶן`; Jmḥ.t `האִמְחֶת` (NU3);
  Wꜣḏ.yt `וָאגֶ׳ת` (§3.1); Spdw `סוֹפְּדוּ` (SI); P `פֶּה` ★ (always vocalized), Nḫn `נֶחֶן`, ꜥnp.t `עַנְפֶת` (Mendes), Jꜣpw
  `יָאפוּ`, Mꜣṯꜣ.t `מָאצָ׳את`?, Sobek `סוֹבֶּךְ` (NU1), Neith `נֵית`, Sia `סִיא` (§3.1), ḥṯꜣ.tj `החֶצָ׳את`, Ꜣgbw `אָגֶבּ`; the four
  sons of Horus as NU1 17.51; *bꜣ.w* of a city `בָּאֵי X` (`בָּאֵי אוֹן` …).
- **Rejected:** `שחת` for any decay verb (gate; Ps 16:10 in the apparatus); `רמש`/`שרץ` for *ḏdf.t*; `רקיע` for *bjꜣ*;
  `מבול` for *mḥ.yw*; `מחה` for *sk*/*zjn*; `הבדיל` for *tꜣš* (113.6 `תחם`); `ולבסוף` (סוף gate: `באחרונה`, 113.4).

### Open decisions for the user
1. **Kept collisions inside NU7, inherited from two precedents each** (for the lead's harmonization): *šꜥd* (TB) and *ḥsq*
   (WE) both `כרת` (134.4 / 134.6); *jꜣ.w* (HC) and *dwꜣ* (NU1–2) both `הלל`; *sk* (130.28) and *zjn* (189.28) both `ניגב`;
   *rri̯* / *šꜣj* `חזיר`; *nrw* (131.6) / SI's *ḥr.yt* `אימה`.
2. **Splits by sense recorded at the lines:** *ḏꜥr* `דרש` (133.9 "care for") / `חיפש` (113.4); *wḏꜥ* `הקצה` (136A.2,
   112.12 *sjp* `מוקצים`) / `שפט` (138.6); *ḫbi̯* `גרע` (BD) / `הפחתה` (115.5, 116.5, of the moon); *mri̯* `אהב` (154.5) /
   `חפץ`; *ḥwi̯* `הכה` / "thresh" `דש` (189.25) / `הנפתי` (131.8); *ḫmi̯* "touch" `מישוש` (189.3) against NU4 124.4's
   `לא אֵהָרֵס בה` (the TLA analyses NU4's word as "destroy" and NU7's as "anrühren").
3. **Readings:** 116.2 *Ni̯.t* – the TLA's lemma is Neith, its sentence "the Red Crown": `נֵית` kept; 116.5 the base says
   "bas of Heliopolis" in the Hermopolis spell (kept); 154.17/154.18 the TLA's lemmas (*ẖn* "rot" / "bloated") and its
   sentence translation are crossed – the Hebrew follows the lemmas; 133.8 *hꜣy* `*מתוח*?`; 136A.3 the lotus-bark.

### Progress log
- Drafted in ten saves (133; 136A; 134; 130.1–13, 14–29, 30–41; 131+89; 154; 115–116; 112–113; 138–189), each filled and
  verified. A VM restart after 130.29 (91 entries, committed by the coordinator as a save) – resumed from the file;
  nothing lost.
- **TLA comparison:** read after drafting for 133, 136A, 134, 130, 131, 89, 154, 115–116. **For 112–113 and 138–189 the
  TLA was read after my reading of the line data but before writing the Hebrew** (a process slip, recorded here); the
  Hebrew there follows the transliteration, and the TLA's readings are quoted where adopted. Main changes from the TLA:
  wishes instead of general present (133.4–7, 136A.3–4, 130.15–17, 130.30, 130.35–36, 131.2, 131.7–8); participles/relative
  forms instead of main verbs (133.8, 134.4, 136A.11, 136A.5, 130.25); the voice of 154.8 (statives, not active
  participles); 154.13–15 *n rḏi̯=k* as a past statement, not a prohibition; 130.9–10 past negations; 89.4 *jp.w*
  passive; 131.6 *m-ḫt wsr=k*.
- **Pass (a), fidelity:** brackets and `[…]` counts checked by script against every base line (all match); 133.12 `לעד`.
- **Pass (b), consistency:** formulas aligned (116.6 `מי שיודע את הלחש הזה`); the repeated lines (133.6 = 133.7 refrain;
  154.10 = 154.12; 189's copies of NU3–NU5) identical; vocalization traps fixed (`הָאֵלִים הָאֵלֶּה`, `אֵלִים`, `מאֵלֵי`).
- **Pass (c), Hebrew:** the clean text read through; small fixes (154.4 punctuation, 189.25 `מאֵלֵי`).
- `build NU7`; `verify NU7 --strict` 0 problems; `check_bible_quotes.py` 0 problems (annotated, intro, translation).

### The text on its own terms
- **The model is the reality** (133.16–21, 136A.20–21, 134.14–15, 130.38–40): a 4-cubit papyrus boat with ochre figures of
  Re and of the dead on a new bowl – "it means his voyage in the bark of Re; Re himself sees him in it".
- **Re is a body that falls apart and is gathered every morning** (133.6: "count your bones, gather your limbs … come,
  new, every day") – the hope the dead man has for his own body.
- **Silence of the initiate** (133.14, 116.3): what he saw in the "house of secrets" he does not repeat to men or gods.
- **The second death** (136A.23, 130.40–41: "he will not die again") – the worst Egyptian fear is not dying but perishing.
- **BD 154 says it plainly: all that lives dies and rots – gods, men, birds, fish, worms** (154.7–12); the spell asks not
  to escape death but decay, and lists the body's parts one by one (eye, ear, head, tongue, hair, eyebrows: 154.19–20).
- **The ba and the corpse** (89): the soul-bird flies out by day and must come back to "rest on its corpse"; the gods
  are threatened with the Eye of Horus if they delay.
- **Myth as aetiology** (115, 112, 113: *ḫpr X pw* "so came into being X"): priestly titles, the moon's waning, the
  pig taboo, the fish-trap and a place-name are each born from one act of the gods.
- **The pig taboo is a story, not a rule of nature** (112.5–9): Seth as a black boar wounded Horus's eye, Re declared the
  pig "an abomination for Horus" – after Horus himself had once sacrificed pigs.
- **A world upside down** (189): the dead man fears walking on his head and eating excrement; he is examined by "the
  one who cannot count" on his food and answers with clean bread, beer and fields of his own.
- **Wordplay as theology:** *Ḫprj / ḫpr* (130.31, 154.16: "I am Khepri" – who "becomes" does not "become worms");
  *mꜥbꜣ* spear / *mꜥbꜣ.yt* the Thirty (115.6); *pḥ.w* marshes / *pḥ.wj* end (113.4); *wr-mꜣw* "great of seeing" (115.9).

### Key parallels
- [divergence] Ps 16:10 `לֹא-תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת` – BD 154.1's "not to let the corpse pass away": the same "do not
  give", but for the body after death; Egyptian decay verbs kept apart from the reserved `שחת`.
- [equivalent] Isa 66:24 `כִּי תוֹלַעְתָּם לֹא תָמוּת` and Job 7:5 – the worm on the corpse (154.9).
- [divergence] Job 19:26 `וּמִבְּשָׂרִי אֶחֱזֶה אֱלוֹהַּ` – the flesh and the after-death hope (154.2).
- [equivalent] Lev 11:7 / [divergence] Isa 65:4 – the pig taboo, by myth in 112.8 (Horus's eye), by law in Leviticus.
- [divergence] Qoh 3:19 – gods, beasts and worms share one fate (154.7); Qoh 12:7 – soul and body (89.1).
- [divergence] Gen 1:3 – "Osiris exists – what he says exists" (130.31).
- [divergence] Isa 40:31 – "not run, not weary" (133.12); Lam 3:23 – "new every day" (133.6); Ps 23:4 – the dark valley (130.9).

### Lines shared with other texts
NU6 190.107 (133.1, 133.20), 190.112–113 (136A.21–22); NU5 52.1–52.7, NU4 82.2–82.4, 124.3–124.5, NU3 51.2–51.3 (189.2–189.13:
copied, differing only where the Egyptian does); NU2 42.20 (136A.23, 130.41); NU1 17.51 (the four sons of Horus).

### Proposals for the shared renderings
| Egyptian | Hebrew | Lines | Reason |
|---|---|---|---|
| nꜥi̯ "sail" | `הפליג` | 133.5, 134.15 | SS 172; *sqdi̯* keeps `שט` |
| dp.w "steering oar" | `משוט־ההגה` | 136A.2 | *ḥmy.t* HC `הֶגֶה`, *ḥp.t* `משוט־חתירה` |
| ḥp.wt | `משוט־חתירה` | 133.13, 130.21, 130.30 | the same lemma as AM 26.18 |
| ḫꜣbꜣs.w "stars" | `הנוצצים` | 136A.1 | `כוכב` is *sbꜣ* |
| bjꜣ "sky-water / firmament" | `הבִּיָא` | 130.14, 130.22 | `רקיע` reserved; *bjꜣ* "metal" `מתכת` |
| qmꜣ II "throw" | `השליך` | 130.4 | AM 9.10; keeps the יצר gate for *qmꜣ* "create" |
| zbi̯ "pass away (of a corpse)" | `גווע` | 154.1–154.17 | apart from *ski̯* `אבד`, *ḥtm* `נשמד`, *ḥwꜣ* `נרקב` |
| ẖnn / ẖn "putrefy"; jmk; snsn | `התעפש`; `נמק`; `הבאיש` | 154.8, 154.16–17 | one Hebrew per decay verb; `שחת` never |
| smꜣ.yw "body, flesh" | `שאר` | 154.8 | `גוף` is *ḥꜥ.w*; Ps 73:26 tagged |
| ḏdf.t "creeping things" | `זוחל` | 154.7–154.12 | not `רמש`/`שרץ` (Gen 1) |
| mj.tj "equal, likeness" | `עמית` | 154.3–4 | `דמות` gated to *twt* |
| ḥfy.t | `נחש` (= ḥfꜣ.t) | 154.10, 154.12 | MT 54; the נחש gate should license *ḥfy* (passed with `[היתר שער]`) |
| gꜣf "monkey" | `קוף` | 136A.5 | = *gf*; the קוף gate should license *gꜣf* (passed with `[היתר שער]`) |
| sk / zjn "wipe" | `ניגב` | 130.28, 189.28 | `מחה` reserved; one Hebrew for two lemmas (open) |
| jwi̯ "make boatless" | `הושאר בלא סירה` | 130.17–18 | a denominal verb, literal |
| ḫrp "lead, command" | `הנהיג` | 130.21, 131.8, 113.8 | `הוביל` is *zbi̯* / *sṯꜣ* |
| rri̯, šꜣj "pig" | `חזיר` | 112.5, 112.8–10 | BD 112's *šꜣj*; two lemmas, one Hebrew (open) |
| mꜥbꜣ "spear" | `רומח` | 115.6 | *mtꜣ* `כידון` (89.6) |
| bꜣ.w-X (city bas) | `בָּאֵי X` | 115–116, 112–113 | *bꜣ.w* `בָּאִים` ★ |
| wr-mꜣw | `גדול־הרואים` | 115.3, 115.9 | WE 9,12 |
| P (Pe) | `פֶּה` ★ | 112 | always vocalized ("mouth") – a trap candidate |
| ḏbꜣ.t (a tree) | `גֶ׳בָּאת` | 189.22 | not `תֵּבָה` (*ḏbꜣ.t* "chest") |
| Ḥpw (Apis) | `אַפִּיס` | 189.25 | `חָפִּי` is Horus's son |
| jr rḫ rʾ pn | `מי שיודע את הלחש הזה` | 116.6 | §12.4.6, NU3, NU4 |

### Lessons for the guidelines
- **A gate keyed to one spelling misfires on the same word's other spellings** (*gꜣf* for *gf*, *ḥfy.t* for *ḥfꜣ.t*):
  license gates by the TLA lemma id as well as by the transliteration.
- **Read `tr` strictly after writing the Hebrew, even when the data is hard**: in two late sections I read it after the
  data but before writing; the commitment to write the draft first is what protects the reading.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (NU1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 17.3 | […] m-ḫt mn[j] =[f] ⸢jw⸣ ꜣḫ n jrr! st tp tꜣ ḫpr mdw […] [nb-tm],w | […] אחרי עגינתו. מועיל הוא לעושה אותו על הארץ. נהיה הדיבור […] [אדון־השלמות]: | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר` (בראשית א:ג) | divergence | כאן "נהיה הדיבור" פותח את דבריו של אל הבריאה, אבל הדיבור עצמו הוא ש"נהיה", לא העולם מכוחו |
| 17.3 | […] m-ḫt mn[j] =[f] ⸢jw⸣ ꜣḫ n jrr! st tp tꜣ ḫpr mdw […] [nb-tm],w | […] אחרי עגינתו. מועיל הוא לעושה אותו על הארץ. נהיה הדיבור […] [אדון־השלמות]: | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר` (בראשית א:ג) | absent | אין כאן ציווי בריאה. |
| 17.4 | jnk Jtm,w m wnn =j wꜥi̯.{w}kw [m] [Nw],w jnk Rꜥ,w m ḫꜥ,w =[f] [m] | אֲנִי אָתוּם בהיותי לבדי [בְּנוּן]; אני רַא בהופעותיו, [כאשר] | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` …  – מוטיב משותף: לפני הבריאה יש רק מים קדמונים ואל אחד; אבל כאן האל עצמו נמצא **בתוך** המים, לבדו, ואינו "מרחף" מעליהם, והעולם ייוולד ממנו ("נהיה מעצמו", 17.7) ולא ייאמר מבחוץ. נוּן הוא המים, לא `תְּהוֹם` (`renderings.md` §3.1, §5.1). |
| 17.5 | [š]ꜣꜥ =f ḥqꜣ,t jri̯.tn =f šꜣꜥ Rꜥ,w pw ḫꜥi̯.t m nswt [jri̯.tn] =[f] [m] wnn n ḫpr.t sṯz,w Šw [jw] =[f] [ḥr] | החל לשלוט במה שעשה. החל רַא הוא – להופיע כמלך [על מה שעשה], [ב]עוד טרם נהיו הֲרָמוֹת שׁוּ, [והוא] [על] | `וְכֹל שִׂיחַ הַשָּׂדֶה טֶרֶם יִהְיֶה בָאָרֶץ` (בראשית ב:ה) | equivalent | אותו "טרם נהיה" של טקסטי הפירמידות (`renderings.md` §6.5): הבריאה מתוארת דרך מה שעוד לא היה |
| 17.5 | [š]ꜣꜥ =f ḥqꜣ,t jri̯.tn =f šꜣꜥ Rꜥ,w pw ḫꜥi̯.t m nswt [jri̯.tn] =[f] [m] wnn n ḫpr.t sṯz,w Šw [jw] =[f] [ḥr] | החל לשלוט במה שעשה. החל רַא הוא – להופיע כמלך [על מה שעשה], [ב]עוד טרם נהיו הֲרָמוֹת שׁוּ, [והוא] [על] | `וַיַּעַשׂ אֱלֹהִים אֶת הָרָקִיעַ` (בראשית א:ז) | divergence | הפרדת השמים מן הארץ: במצרים היא מעשה של שׁוּ, שמרים את השמים (נוּת) מעל האדמה (גֶּבּ), ו"ההרמות" הן מקום ההרמה. |
| 17.7 | […] […] [ḫpr]-[ḏ]s≡f mw pw […] […] qmꜣ | […] […] [נהיה־מעצמו]; המים הם […] […] יצר | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | אל שאין לו ראשית מחוצה לו, אבל המצרי "נהיה מעצמו" (*ḫpr ḏs=f*) – יש לו ראשית, והוא עצמו גרם לה; המקרא אינו מספר על היווצרות האל. |
| 17.8 | […] [ptr] rf sw Rꜥ,w pw qmꜣ =f rn n ꜥ,t.pl =[f] [ḫpr] [nn] [pw] [n] [nṯr.pl] [jm,j].w-ḫt =f | […] [מה] הוא? רַא הוא, כשיצר את שמות אבריו; [כך] [נהיו] [הָאֵלִים] [הָאֵלֶּה], [ההולכים] אחריו. | `וַיִּקְרָא הָאָדָם שֵׁמוֹת לְכָל הַבְּהֵמָה` (בראשית ב:כ) | divergence | מתן שמות כמעשה של בריאה וסידור; כאן האל נותן שמות לאבריו שלו, וכל שם נעשה אל: האלים הם חלקי גופו של הבורא. |
| 17.10 | [n.t] [p,t] [jnk] [sf] jw =j rḫ.kw dwꜣ,w ptr rf sw jr sf Wsjr pw jr dwꜣ,w Rꜥ,w pw | [של] [השמים]. [אני] [אתמול], יודע אני את מחר. מה הוא? אשר לאתמול – אוֹסִירִיס הוא; אשר למחר – רַא הוא. | `אֲנִי רִאשׁוֹן וַאֲנִי אַחֲרוֹן וּמִבַּלְעָדַי אֵין אֱלֹהִים` (ישעיהו מד:ו) | divergence | אל המכריז על עצמו כמי שמקיף את הזמן כולו; אבל כאן "אתמול" ו"מחר" הם שני אלים שונים (אוסיריס ורַא), והמת מתאחד עם שניהם |
| 17.10 | [n.t] [p,t] [jnk] [sf] jw =j rḫ.kw dwꜣ,w ptr rf sw jr sf Wsjr pw jr dwꜣ,w Rꜥ,w pw | [של] [השמים]. [אני] [אתמול], יודע אני את מחר. מה הוא? אשר לאתמול – אוֹסִירִיס הוא; אשר למחר – רַא הוא. | `מַגִּיד מֵרֵאשִׁית אַחֲרִית וּמִקֶּדֶם אֲשֶׁר לֹא נַעֲשׂוּ` (ישעיהו מו:י) | divergence | הידיעה של העתיד כסימן האלוהות. |
| 17.15 | rn =f bꜣ pw n Rꜥ,w [nk] =[f] [jm] =[f] [ḏs] =[f] [jn]k bn,w pwy n,tj m [Jw]⸢n,w⸣ jr,j-[sjp] ⸢n⸣ n,tj wnn ptr rf | שמו; הבָּא של רַא הוא, [אשר] [שוכב] [עמו] [הוא] [עצמו]. [אני] הַבֶּנוּ ההוא אשר [בְּאוֹן], אחראי־[הבדיקה] של אשר ישנו. מה | `וַיִּתֶּן לוֹ אֶת אָסְנַת בַּת פּוֹטִי פֶרַע כֹּהֵן אֹן לְאִשָּׁה` (בראשית מא:מה) | cognate | *Jwnw*, הליופוליס, היא `אֹן` של המקרא (`renderings.md` §3.2): עיר השמש, שבה ישב הבֶּנוּ. |
| 17.16 | sw Wsjr pw jr n,[tj] [wnn] [s]ṯꜣ,pl =f pw ky-ḏd [ẖꜣ,t] =⸢f⸣ ⸢pw⸣ [ky-ḏd] nḥḥ pw ḥnꜥ ḏ,t jr nḥḥ | הוא? אוֹסִירִיס הוא. אשר ל"[אשר] [ישנו]" – מכותיו הן. נוסח אחר: [גופתו] היא. [נוסח] [אחר]: נֶצַח הוא, יחד עם עַד. אשר לנצח | `כִּי כֹה אָמַר רָם וְנִשָּׂא שֹׁכֵן עַד וְקָדוֹשׁ שְׁמוֹ` (ישעיהו נז:טו) | equivalent | "עַד" כשם עצם, נצח שהוא מקום מושבו של האל; גם העברית מצרפת שתי מלות נצח (`נֶצַח` ו`עַד`), אבל אינה מבחינה ביניהן כ"יום" ו"לילה". |
| 17.17 | pw hrw pw jr [ḏ,t] [gr]ḥ pw jnk Mn,w […] […] [šw,t.j] =⸢j⸣ ⸢m⸣ [tp] =⸢j⸣ [ptr] [rf] | הזה – היום הוא; אשר ל[עד] – [הלילה] הוא. אני מִין […] […] [שתי־נוצותיי] [בראשי]. [מה] | `וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה` (בראשית א:ה) | divergence | מוטיב משותף: היום והלילה כשני חלקי הזמן הראשונים; אבל כאן הם "נצח" ו"עד", שני פני הנצח, ולא חלוקה של זמן שנברא. |
| 17.29 | […] sḫ,t-jꜣr,w pw msi̯.t ḏfꜣ.w | […] שדה־האגמונים הוא, אשר ילד את המזון | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | divergence | מוטיב משותף: מקום פורה "במזרח", שבו המזון ניתן בשפע; אבל שדה האגמונים הוא יעד למת, לא מקום שממנו גורש האדם. |
| 17.40 | nw pw n nwi̯,t n.t p,t ky-ḏd twt pw n jr,t-Rꜥ,w dwꜣ r ms,(w)t =f rꜥ,w-nb jr g[r,t] [Mḥ,t]-wr,t wḏꜣ,t | גל השמים הזה הוא. נוסח אחר: דמות עין־רַא היא, המהוללת בלידתו בכל יום. ואשר ל[מֶחֶת־וֶרֶת] – הוּגָ׳את | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` (בראשית א:כו) | divergence | *twt* "דמות" הוא המלה המצרית לצלם ולדמות (`renderings.md` §4.4); כאן הדמות היא של עין האל, השמש, ולא של אדם. |
| 17.47 | ⸢Qbḥ⸣[-sn,pl]≡f nꜣ pw n,tj m-sꜣ pꜣ ḫpš m p,t mḥ,t(j).t […] | [קֶבֶּחְסֶנוּף]. אלה הם, אשר מאחורי "השוק" בשמים הצפוניים […] | `עֹשֶׂה-עָשׁ כְּסִיל וְכִימָה` (איוב ט:ט) | equivalent | גם המקרא מכיר שמות לקבוצות כוכבים, ו`עָשׁ` מזוהה לעתים עם הדובה הגדולה; מוטיב משותף, בלי קשר ישיר. |
| 17.65 | r-ḏr =f j Rꜥ,w ⸢jm,j⸣-swḥ,t≡f psḏ m jtn =f wbn m ꜣḫ,t =f nbb! ḥr [bjꜣ,w] =[f] […] | כולה. הוֹ רַא, שׁוֹכֵן־בֵּיצָתוֹ, הזוהר מתוך אָטוֹנוֹ, הזורח באופקו, השוחה על [ימת־שמיו] […] | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | divergence | מוטיב משותף: מים שמעל לשמים; אבל אצל המצרים השמש "שוחה" או שטה בהם בסירה, ואין "רקיע" המפריד ביניהם (`רָקִיעַ` שמור, `renderings.md` §5.1). |
| 17.66 | […] sqdd! ḥr sṯz,w-Šw ḏḏ! ṯꜣw.pl m hh n rʾ =f sḥḏ tꜣ,du m [jꜣḫ,w] =[f] | […] השט על הֲרָמוֹת־שׁוּ, הנותן רוחות בלהט פיו, המאיר את שתי הארצות ב[זיוו]: | `בִּדְבַר יְהוָה שָׁמַיִם נַעֲשׂוּ וּבְרוּחַ פִּיו כָּל-צְבָאָם` (תהלים לג:ו) | equivalent | הרוח היוצאת מפי האל ונותנת חיים או סדר; אבל אצל המצרים זהו האוויר שהשמש נושפת לבני האדם, לא דבר הבורא. |
| 17.68 | m-ꜥ nṯr pwy ꜥꜣ štꜣ jrw wnn jnḥ.du =fj ⸢m⸣ ⸢rmn.wj⸣ mḫꜣ,t [grḥ] [pf] | מיד האל ההוא הגדול, נסתר־המראה, אשר גבותיו הן שני קני המאזניים, [בלילה] [ההוא] | `תְּקֵל תְּקִילְתָּ בְמֹאזַנְיָא וְהִשְׁתְּכַחַתְּ חַסִּיר` (דניאל ה:כז) | equivalent | האדם נשקל במאזני הדין; כאן המאזניים הם חלק מגופו של האל השופט. |
| 17.72 | wꜥ ẖr mꜣꜥ,t ky ẖr jzf,t ḏḏ! =f jzf,t n jr[r!] [sj] mꜣꜥ,t n jy ẖr =s ky-ḏd Ḥr,w pw | האחד – תחת האמת, והאחר – תחת העוול; נותן הוא עוול לעושהו ואמת לבא עמה. נוסח אחר: חוֹרוּס הוא, | — | equivalent | `עִם-חָסִיד תִּתְחַסָּד; עִם-גְּבַר תָּמִים תִּתַּמָּם` (תהילים יח:כו) – האל המשיב לכל אדם כדרכו |
| 17.72 | wꜥ ẖr mꜣꜥ,t ky ẖr jzf,t ḏḏ! =f jzf,t n jr[r!] [sj] mꜣꜥ,t n jy ẖr =s ky-ḏd Ḥr,w pw | האחד – תחת האמת, והאחר – תחת העוול; נותן הוא עוול לעושהו ואמת לבא עמה. נוסח אחר: חוֹרוּס הוא, | `וְלָתֵת לְאִישׁ כִּדְרָכָו כִּפְרִי מַעֲלָלָיו` (ירמיהו יז:י) | equivalent | גמול לפי המעשים. |
| 17.81 | twt pw n jr,t-Rꜥ,w ḥnꜥ twt n jr,t-Ḥr,w j Rꜥ,w Jtm,w nb ḥw,t-ꜥꜣ.t jty | דמות עין־רַא היא, עם דמות עין־חוֹרוּס. הוֹ רַא־אָתוּם, אדון הבית־הגדול, ריבון | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ` (בראשית א:כו) | divergence | "דמות" (*twt*) של שתי עיני האל, כב־17.40. |
| 17.89 | rḏi̯.y n =f wrr,t ꜣw,t-jb m-ḫnt Nn-nsw,t ptr rf sw jr rḏi̯.y n =f wr[r,t] [ꜣw,t]-jb | אשר ניתן לו הכתר־הגדול, ושמחת־לב בקרב חָנֵס. מה הוא? אשר ל"אשר ניתן לו [הכתר־הגדול], [ושמחת]־לב | `כִּי הָיוּ בְצֹעַן שָׂרָיו; וּמַלְאָכָיו חָנֵס יַגִּיעוּ` (ישעיהו ל:ד) | cognate | *Nn-nsw.t*, הרקליאופוליס, היא חָנֵס של ישעיהו (`renderings.md` §11.11.5; הזיהוי מקובל, לא ודאי). |
| 17.93 | m-ꜥ nṯr pwy ṯꜣi̯.y bꜣ.pl nsb jwt,w ꜥnḫ m ḥwꜣꜣ,t jr,j kkw ⸢jm,j⸣ ⸢snk,t⸣ | מיד האל ההוא, הנוטל בָּאִים, הלוחך את הרקב, החי על הצחנה, איש החושך, השוכן בעלטה, | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | equivalent | החושך כמקומם של כוחות התוהו; כאן החושך הוא ביתו של אל מאכל־רקב, לא מצב שלפני הבריאה. |
| 17.94 | snḏ.w n =f jm,j.w-bꜣgi̯ ptr rf sw ⸢Swtj⸣ ⸢pw⸣ ky-ḏd smꜣ-wr pw | אשר חוששים מפניו שוכני־הרפיון. מה הוא? סֵת הוא. נוסח אחר: הראם־הגדול הוא, | — | equivalent | `וַתָּרֶם כִּרְאֵים קַרְנִי` (תהילים צב:יא) – `רְאֵם`, שור הבר, כסמל כוח; כאן כינוי של אל. |
| 17.99 | ḥꜣd.w =sn nn jri̯ =tw n =j (j)ḫ,t m nw-n bw,t nṯr.pl ḥr-n,tt jnk swꜣ wꜥb(.w) ḥr,j-jb msq,t jni̯.y | מצודותיהם; לא ייעשה לי דבר מֵאֵלֶּה, תועבת האֵלִים, כי אני החולף, הטהור, אשר בתוך מֶסְקֶת, אשר מובאת | `כִּי תוֹעֲבַת יְהוָה אֱלֹהֶיךָ כָּל עֹשֵׂה אֵלֶּה` (דברים כה:טז) | equivalent | "תועבת האל" כצירוף; כאן "תועבת האלים" הם דברים שהאלים מואסים בהם (17.102: צואה וכזב). |
| 17.102 | ⸢ḥs⸣ ⸢pw⸣ [grg] pw jr swꜣ wꜥb(.w) ḥr,j-jb msq,t Jnp,w pw jw =f m-sꜣ ꜥfḏ,t n,t(j).t ẖr mẖt,w | צואה היא, [כזב] הוא. אשר ל"החולף, הטהור, אשר בתוך מֶסְקֶת" – אַנוּבִּיס הוא, והוא מאחורי הארגז אשר בו המעיים | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` (משלי יב:כב) | equivalent | השקר כתועבת האל |
| 17.102 | ⸢ḥs⸣ ⸢pw⸣ [grg] pw jr swꜣ wꜥb(.w) ḥr,j-jb msq,t Jnp,w pw jw =f m-sꜣ ꜥfḏ,t n,t(j).t ẖr mẖt,w | צואה היא, [כזב] הוא. אשר ל"החולף, הטהור, אשר בתוך מֶסְקֶת" – אַנוּבִּיס הוא, והוא מאחורי הארגז אשר בו המעיים | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` (משלי יב:כב) | divergence | כאן הכזב עומד לצד הצואה: התועבה היא טומאה של הגוף ושל הדיבור כאחת. |
| 17.108 | n mꜣ!.ntw =f m ⸢zꜣ⸣ ⸢wj⸣ jnk Ꜣs,t gmi̯.n =k wj [pzḫ] n =j šnj{nj} =j | ואין חוזים אותו. אל תדחה אותי! אני אִיסִיס; מצאת אותי כשהיה [פרוע] לי שערי | `רָאשֵׁיכֶם אַל תִּפְרָעוּ וּבִגְדֵיכֶם לֹא תִפְרֹמוּ` (ויקרא י:ו) | equivalent | פריעת השיער כמנהג אבלות; כאן אִיסִיס האבלה על אוסיריס. |
| 18.3 | jm,j.t Wsjr m ḏꜣḏꜣ,t ꜥꜣ.t jm,j.t Jwn,w grḥ pwy n (j)ḫ,t-ḫꜣwj m Jwn,w grḥ | אשר אצל אוֹסִירִיס, בוועד הגדול אשר באוֹן, בלילה ההוא של דברי־הערב באוֹן, בלילה | — | equivalent | `תִּכּוֹן תְּפִלָּתִי קְטֹרֶת לְפָנֶיךָ; מַשְׂאַת כַּפַּי מִנְחַת-עָרֶב` (תהילים קמא:ב) – קורבן הערב כמועד קבוע של פולחן; במצרים – לילה של משפט וקרב. |
| 18.12 | n =f jwꜥ,wt m (j)ḫ,t jti̯ =f Wsjr j[r] ⸢ḏꜣḏꜣ,t⸣ ꜥꜣ.t jm,j.t Pi̯ ⸢Dp{w}⸣ ⸢Ḥr,w⸣ pw ꜣs,t | לו את ירושתו מרכוש אביו אוֹסִירִיס. אשר לוועד הגדול אשר בפֶּה ובדֶּף – חוֹרוּס הוא, אִיסִיס | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ` (במדבר כז:ח) | equivalent | דיני הירושה מאב לבן; כאן ירושת המלוכה מאוסיריס לחוֹרוּס, שהוכרעה בבית דין של אלים. |
| 18.36 | Ḥr,w pw ꜣs,t pw jw Ḥr,w jb =f nḏm(.w) jw Wsjr jb =f ꜣwi̯(.w) jw jtr,tj ḥtp.y ḥr =s jn rf [Ḏḥwtj] | חוֹרוּס הוא, אִיסִיס היא. לב חוֹרוּס – נעים, לב אוֹסִירִיס – שמח, ושתי־שורות־המקדשים נחות בכך. [תְּחוּת] הוא | `וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי` (שמות כ:י) | equivalent | *ḥtp* "לנוח, לשקוט" הוא פועל המנוחה המצרי (`renderings.md` §4.4); כאן כל מקדשי מצרים "נחים" כשהמשפט הוכרע. |

### Parallels index (NU2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1.3 | nṯr.pl ḏꜣḏꜣ,t smꜣꜥ.t-ḫrw Wsjr r ḫftj.w =[f] hrw wḏꜥ-mdw n-wj wnḏw,t =k Wsjr | הָאֵלִים של הוועד, אשר אימת את קול אוֹסִירִיס נגד אויביו ביום השפיטה. שייך אני לקרוביך, אוֹסִירִיס; | `שָׁפְטֵנִי אֱלֹהִים וְרִיבָה רִיבִי` (תהלים מג:א) | divergence | שתי המסורות מדמות את הצלת המתפלל למשפט שבו האל "רב את ריבו"; אבל כאן השופטים הם ועד של אלים, והמשפט – משפט מיתי בין אוסיריס לסֵת, שהמת נכנס בו כצד. |
| 1.6 | Ḥr,w r ḫftj.w =f hrw pw [n] wḏꜥ-mdw m ḥw,t-sr wr.t jm,j.t Jwn,w jnk ḏd,y m Ḏd,w wnn =j ḥnꜥ | חוֹרוּס נגד אויביו ביום ההוא [של] השפיטה בבית־השר הגדול אשר באוֹן. אני הגֶ׳דִּי בגֶ׳דוּ; הייתי עם | `אֹן` (בראשית מא:מה) | cognate | אוֹן היא העיר של שמה המצרי *Jwnw*, הליופוליס. |
| 1.10 | m Rʾ-sṯꜣ,w wn! =j ḥnꜥ Ḥr,w m nḏ =tw qꜥḥ pwy jꜣb,j n Wsjr jm,j Ḫm pri̯ =j ꜥq =j | ברֶא־סְטָאוּ. הייתי עם חוֹרוּס כששומרים על השכם השמאלי ההוא של אוֹסִירִיס אשר בחֶם. יוצא אני ונכנס אני | `יְהוָה יִשְׁמָר-צֵאתְךָ וּבוֹאֶךָ` (תהלים קכא:ח) | equivalent | אותו צמד "יציאה וכניסה" כביטוי לכל תנועות החיים; כאן הוא מתאר את חופש התנועה של המת בין הקבר לעולם. |
| 1.11 | m wnm,yt hrw dr sbj.w m Ḫm wn! =j ḥnꜥ Ḥr,w hrw jri̯.t ḥ(ꜣ)b.w n.w Wsjr n jri̯.t ꜥꜣb,t.pl | באוכלת, ביום הרחקת המורדים בחֶם. הייתי עם חוֹרוּס ביום עשיית החגים של אוֹסִירִיס, של עשיית המנחות | `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` (דברים ד:כד) | equivalent | גם במצרית האש "אוכלת": *wnm.yt* היא אש שנקראת על שם האכילה, ובה נשרפים המורדים; זהו דימוי משותף, לא ציטוט. |
| 1.15 | jnk šzp ḫbsy,t hrw n ḫbs-tꜣ m Nn-nsw,t j stkn.wy ⸢bꜣ.pl⸣ ⸢mnḫ.w⸣ m pr,w | אני המקבל את המעדר ביום עידור־הארץ בחָנֵס. הוֹ המקרבים את הבָּאִים המעולים אל בית | `חָנֵס` (ישעיהו ל:ד) | cognate | חָנֵס היא העיר המצרית *Nn-nsw* (הרקלאופוליס). |
| 1.20 | pri̯ =f m-ḥtp,w m pr,w Wsjr nn ḫsf sw nn šnꜥ(.w) sw ꜥq =f ḥzi̯.w pri̯ =f mri̯.w ⸢jw⸣ […] | ויצא בשלום מבית אוֹסִירִיס. אין הודף אותו, אין מונע אותו. ייכנס משובח, ויצא אהוב; […] | `בָּרוּךְ אַתָּה בְּבֹאֶךָ וּבָרוּךְ אַתָּה בְּצֵאתֶךָ` (דברים כח:ו) | equivalent | אותו צמד "בואך וצאתך" כברכה שלמה; במצרית הברכה היא "משובח" ו"אהוב". |
| 1.21 | jri̯.w wḏ =f m pr,w Wsjr šmi̯.n =j ꜥꜣ n gmi̯ wn =j ⸢m⸣ḫꜣ,t šwi̯.y m zp =[j] | כשצוויו נעשה בבית אוֹסִירִיס. הלכתי לכאן – לא נמצא בי דופי, המאזניים ריקים מכל עניין שלי. | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | equivalent | הנשקל במאזניים יוצא נקי מאשמה |
| 1.21 | jri̯.w wḏ =f m pr,w Wsjr šmi̯.n =j ꜥꜣ n gmi̯ wn =j ⸢m⸣ḫꜣ,t šwi̯.y m zp =[j] | כשצוויו נעשה בבית אוֹסִירִיס. הלכתי לכאן – לא נמצא בי דופי, המאזניים ריקים מכל עניין שלי. | `תְּקֵל תְּקִילְתָּ בְמֹאזַנְיָא וְהִשְׁתְּכַחַתְּ חַסִּיר` (דניאל ה:כז) | divergence | שם נמצא המלך חסר; כאן המאזניים "ריקים" – אין עליהם שום עניין נגד המת. |
| 22.2 | jw rḏi̯ n =j rʾ =j mdwi̯ =j jm =f m-bꜣḥ nṯr nb […] […] ꜥ =j m ḏꜣḏꜣ,t n.t nṯr nb jnk | ניתן לי פי, לדבר בו לפני כל אל […] […] זרועי בוועד של כל אל. אני | `מִי שָׂם פֶּה לָאָדָם` (שמות ד:יא) | equivalent | גם המקרא רואה בפה מתנה של האל |
| 22.2 | jw rḏi̯ n =j rʾ =j mdwi̯ =j jm =f m-bꜣḥ nṯr nb […] […] ꜥ =j m ḏꜣḏꜣ,t n.t nṯr nb jnk | ניתן לי פי, לדבר בו לפני כל אל […] […] זרועי בוועד של כל אל. אני | `אֲדֹנָי שְׂפָתַי תִּפְתָּח וּפִי יַגִּיד תְּהִלָּתֶךָ` (תהלים נא:יז) | divergence | שם האל פותח את הפה לתפילה; כאן הפה ניתן למת כדי שיוכל לטעון לפני בית הדין. |
| 23.1 | rʾ n wn rʾ n […] r ḥkꜣ =f r ẖr-nṯr ḏd-mdw jn […] [mꜣꜥ-ḫrw] | לחש לפתוח את פיו של […], כדי שיקסום בחלקת־האל. דברים לאמר, בפי […] [אמיתי־הקול]: | `וַיַּגַּע עַל פִּי` (ישעיהו ו:ז; ירמיהו א:ט) | divergence | פתיחת הפה של הנביא במגע; במצרים פותחים את פי המת (או הפסל) בטקס, בכלי של נגר, כדי שיחזור לנשום, לאכול ולדבר. |
| 23.5 | ꜥꜣ.t n.t p,t jnk Sꜣḥ,yt wr.t ḥr(,j).t-jb bꜣ,pl-Jwn,w jr ḥkꜣ nb md,t nb.t ḏd r =j swt ꜥḥꜥ nṯr.pl r =sn psḏ,t | הגדולה של השמים. אני סָאחִית הגדולה, אשר בקרב בָּאֵי־אוֹן. אשר לכל קסם ולכל דבר אשר ייאמרו נגדי – הוא, יעמדו נגדו הָאֵלִים והתשיעייה | `כָּל כְּלִי יוּצַר עָלַיִךְ לֹא יִצְלָח וְכָל לָשׁוֹן תָּקוּם אִתָּךְ לַמִּשְׁפָּט תַּרְשִׁיעִי` (ישעיהו נד:יז) | divergence | גם שם כל דבר הנאמר נגד המוגן נכשל; אבל שם האל עצמו מבטיח זאת, וכאן האלים "עומדים נגד" הלחשים העוינים כצד בקרב של קסם בקסם. |
| 25.1 | rʾ n rḏi̯.t sḫꜣ,w n […] mꜣꜥ-ḫrw n =f m ẖr-nṯr | לחש לתת את זכרונו של […] אמיתי־הקול לו בחלקת־האל. | `וְכֹל אֲשֶׁר יִקְרָא לוֹ הָאָדָם נֶפֶשׁ חַיָּה הוּא שְׁמוֹ` (בראשית ב:יט) | divergence | השם כמהות; אך כאן השם הוא שם האדם עצמו, שעליו לזכור אותו כדי להתקיים. |
| 26.1 | rʾ n rḏi̯.t jb n […] mꜣꜥ-ḫrw n =f m ẖr-nṯr ḏd =f jb =j n =j m pr jb.pl ḥꜣ,tj =j n =j | לחש לתת את לבו של […] אמיתי־הקול לו בחלקת־האל. אומר הוא: לבי – שלי הוא בבית הַלִּבּוֹת; לבבי – שלי הוא | `וְנָתַתִּי לָכֶם לֵב חָדָשׁ` (יחזקאל לו:כו) | equivalent | "נתינת לב" לאדם |
| 26.1 | rʾ n rḏi̯.t jb n […] mꜣꜥ-ḫrw n =f m ẖr-nṯr ḏd =f jb =j n =j m pr jb.pl ḥꜣ,tj =j n =j | לחש לתת את לבו של […] אמיתי־הקול לו בחלקת־האל. אומר הוא: לבי – שלי הוא בבית הַלִּבּוֹת; לבבי – שלי הוא | `וְנָתַתִּי לָכֶם לֵב חָדָשׁ` (יחזקאל לו:כו) | divergence | שם הלב החדש מחליף את לב האבן, וכאן המת מקבל בחזרה את **לבו שלו** – זהותו וזכרונו. |
| 26.4 | ꜥ.wj =j r sḫr.t ḫftj.w =j wn n =j ⸢ꜥꜣ.du⸣ [p,t] ⸢psš⸣ ⸢Gbb⸣ ꜥr,t.j =f r =j wn =f jr,t.du =j šdn.tw | זרועותיי להפיל את אויביי. נפתחות לי שתי כנפות־הדלת של [השמים]; מחלק גֶּבּ את לסתותיו מעליי, פותח הוא את עיניי העצומות, | `וְדַלְתֵי שָׁמַיִם פָּתָח` (תהלים עח:כג) | equivalent | "דלתות השמים" הנפתחות; כאן הן נפתחות לפני המת העולה. |
| 26.8 | šw,t =j ḥr sbꜣ.w n.w jmn,t ḏ,t r-nḥḥ | צלי מדלתות המערב, לעד ולנצח. | `יְהוָה יִמְלֹךְ לְעֹלָם וָעֶד` (שמות טו:יח) | equivalent | צמד מלות נצח בסוף משפט; המצרית מבחינה בין שתי "נצחים" (*ḏ.t*, *nḥḥ*), והעברית שומרת על שתי מלים (`עַד`, `נֶצַח`; `עוֹלָם` אינו בשימוש, §5.1). |
| 28.4 | pn rmi̯ =f sw ḏs =f m-bꜣḥ Wsjr dbḥ =f m-ꜥ =j jw rḏi̯.n =j n =f jw sjp.n =j [n] =[f] štꜣ.w-jb | זה, ובוכה הוא על עצמו לפני אוֹסִירִיס, מבקש הוא ממני. נתתי לו; הפקדתי [לו] את נסתרי־הלב | `עָקֹב הַלֵּב מִכֹּל וְאָנֻשׁ הוּא מִי יֵדָעֶנּוּ` (ירמיהו יז:ט) | divergence | הלב כמקום הנסתר שבאדם; אבל כאן הלב עצמו "בוכה" לפני השופט, והמת "מפקיד" לו את "נסתרי הלב" – הלב הוא עד וגם בעל דין (ראו 30B). |
| 28.8 | Swtj [n] [rḏi̯].n =f n =j sw ḥꜣ,tj =j pn jri̯.n [jb] =[f] [m] [ḏꜣḏꜣ,t] jm,j.t ẖr-nṯr ḫnḏ ḥbs gmi̯.n =sn | של סֵת. [הלא] [ייתן] הוא לי אותו, את לבבי זה, אשר עשה [לבו] [ב][ועד] אשר בחלקת־האל? כרע לבושה – היא אשר מצאו, | `כַּאֲשֶׁר יַצִּיל הָרֹעֶה מִפִּי הָאֲרִי שְׁתֵּי כְרָעַיִם` (עמוס ג:יב) | divergence | אותו דימוי של כרע שנשארה מן הטרף והוצלה; במצרית זו כרעו של אוסיריס, שסֵת קרע את גופו, והאלים מצאו אותה וקברו אותה (28־2.2). |
| 27.2 | jb.pl nkn.yw ḥꜣ,t(j).w sḫpr.yw jb n z m jrr! =f m ẖr-nṯr jsṯ smḫ.n =f sw m-ꜥ =ṯn jnḏ-ḥr =ṯn | לִבּוֹת, הפוצעים לבבות, המחוללים את לבו של אדם במעשהו בחלקת־האל! והרי שוכח הוא את עצמו בגללכם. שלום לפניכם, | `וְלָתֵת לְאִישׁ כִּדְרָכָו כִּפְרִי מַעֲלָלָיו` (ירמיהו יז:י) | equivalent | הלב "מחולל" לאדם כמעשיו: הלב שבעולם הבא הוא תוצאת מעשיו בחייו; במקרא האל נותן לאדם כפרי מעלליו. |
| 27.4 | jb =j pn ḏbꜥ,w pn ḏw r =j ḥr-n,tt jr jb =j pn jb pw n ꜥꜣ rn.w nṯr-ꜥꜣ mdwi̯ | לבי זה תוכחה זו הרעה נגדי – כי אשר ללבי זה, לבו הוא של רב־השמות, האל הגדול המדבר | `לֹא-יֶחֱרַף לְבָבִי מִיָּמָי` (איוב כז:ו) | equivalent | הלב כמי שעלול לחרף ולהוכיח את בעליו; איוב מכריז שלבבו אינו מחרף אותו, והמת מבקש שלבו לא יחולל נגדו "תוכחה רעה". |
| 27.5 | m ꜥ,t.pl =f h[ꜣb].n =f jb =f ḫnt,j ẖ,t =f mꜣṯ jb =f r nṯr.pl jb =j n =j sḫm.kw jm =f nn ḏd =f jri̯.tn =j | באבריו. שלח הוא את לבו אשר בבטנו, הוגה לבו על הָאֵלִים. לבי – שלי הוא; שולט אני בו; לא יאמר הוא את אשר עשיתי. | `יְהוָה חֲקַרְתַּנִי וַתֵּדָע` (תהלים קלט:א) | equivalent | האל יודע את אשר בלב |
| 27.5 | m ꜥ,t.pl =f h[ꜣb].n =f jb =f ḫnt,j ẖ,t =f mꜣṯ jb =f r nṯr.pl jb =j n =j sḫm.kw jm =f nn ḏd =f jri̯.tn =j | באבריו. שלח הוא את לבו אשר בבטנו, הוגה לבו על הָאֵלִים. לבי – שלי הוא; שולט אני בו; לא יאמר הוא את אשר עשיתי. | `יְהוָה חֲקַרְתַּנִי וַתֵּדָע` (תהלים קלט:א) | divergence | כאן הלב יכול "לומר את אשר עשיתי" לפני האל – והלחש מבקש שישתוק. |
| 30A.2 | jb =j n mw,t =j zp-2 ḥꜣ,tj =j n wnn =j tp tꜣ m ꜥḥꜥ r =j m mtr,w m-bꜣḥ nb,w-(j)ḫ,t.pl | לבי של אמי (פעמיים)! לבבי של היותי על הארץ! אל תעמוד נגדי כְּעֵד לפני אדוני־הדברים; | `כִּי יָקוּם עֵד חָמָס בְּאִישׁ לַעֲנוֹת בּוֹ סָרָה` (דברים יט:טז) | equivalent | "עד" ש"קם/עומד" נגד אדם בבית הדין: אותו צירוף, ואותו משפט |
| 30A.2 | jb =j n mw,t =j zp-2 ḥꜣ,tj =j n wnn =j tp tꜣ m ꜥḥꜥ r =j m mtr,w m-bꜣḥ nb,w-(j)ḫ,t.pl | לבי של אמי (פעמיים)! לבבי של היותי על הארץ! אל תעמוד נגדי כְּעֵד לפני אדוני־הדברים; | `כִּי קָמוּ-בִי עֵדֵי-שֶׁקֶר וִיפֵחַ חָמָס` (תהלים כז:יב) | equivalent |  |
| 30A.3 | m ḏd r =j jri̯.n =f st r wn! mꜣꜥ r jri̯.tn =j m sḫpr.w (j)ḫ,t.pl r =j m-bꜣḥ nṯr-ꜥꜣ nb-jmn,t j⁝nḏ-ḥr =k jb =j | אל תאמר עליי: "עשה זאת באמת", בעניין מה שעשיתי. אל תחולל דברים נגדי לפני האל הגדול, אדון המערב! שלום לפניך, לבי; | `וְהַשָּׂטָן עֹמֵד עַל יְמִינוֹ לְשִׂטְנוֹ` (זכריה ג:א) | divergence | גם שם עומד מקטרג לפני השופט; אבל במצרית המקטרג האפשרי הוא לבו של האדם עצמו. |
| 30B.3 | jb =j n mw,t =j zp-2 ḥꜣ,tj =j n ḫpr,w =j m ꜥḥꜥ r =j m mtr,w m sḫsf | לבי של אמי (פעמיים)! לבבי של צורותיי! אל תעמוד נגדי כְּעֵד, אל תתנגד | `לֹא יָקוּם עֵד אֶחָד בְּאִישׁ לְכָל עָוֹן וּלְכָל חַטָּאת` (דברים יט:טו) | equivalent | "עד ש־יקום באיש" הוא לשון בית הדין במקרא ובמצרית גם יחד |
| 30B.3 | jb =j n mw,t =j zp-2 ḥꜣ,tj =j n ḫpr,w =j m ꜥḥꜥ r =j m mtr,w m sḫsf | לבי של אמי (פעמיים)! לבבי של צורותיי! אל תעמוד נגדי כְּעֵד, אל תתנגד | `חָקְרֵנִי אֵל וְדַע לְבָבִי` (תהלים קלט:כג) | divergence | המשורר מבקש שהאל יחקור את לבבו; המת המצרי מבקש שלבבו לא יעיד עליו – אל אחד בוחן את הלב, והלב המצרי הוא עד בפני עצמו. |
| 30B.4 | r =j m mtr,w m sḫsf r =j m ḏꜣḏꜣ,t m jri̯ rq(,w) =k r =j m-bꜣḥ jr,j-mḫꜣ,t | לי כְּעֵד, אל תתנגד לי בוועד, אל תעשה את איבתך נגדי לפני ממונה־המאזניים! | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק` (איוב לא:ו) | equivalent | השקילה במאזניים לפני השופט. |
| 30B.5 | ntk kꜣ =j jm,j ẖ,t =j H̱nm,w swḏꜣ ꜥ,t.pl =j pri̯ =k r b(w) nfr ḥn n =n jm m sḫnš rn =j n šn,yt | אתה הכָּא שלי אשר בבטני, חְנוּם המשלים את אבריי. תצא אל המקום הטוב אשר הוקצה לנו שם; אל תבאיש את שמי לפני החצר | `אֲשֶׁר הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה` (שמות ה:כא) | equivalent | "להבאיש" את שמו של אדם לפני חצר השליט: אותה מטפורה של ריח רע כשם רע. |
| 30B.6 | jrr!.yw r(m)ṯ.pl m ꜥḥꜥ.w nfr n =n nfr n sḏm ꜣwi̯-jb n wḏꜥ-md,t m ḏd grg r =j | העושה את בני האדם לעומדים. טוב לנו, טוב לשומע, משמח־לב לשופט. אל תאמר כזב נגדי | `לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | equivalent | העד שאומר שקר נגד אדם; כאן העד הוא הלב, והמת מבקש שלא "יאמר כזב נגדו". הלשון המצרית היא לשון ספר המתים 125 ("לא אמרתי כזב"), ולא לשון הדיברות (`renderings.md` §11.4). |
| 43.4 | mꜣ(w)i̯.kw rnpj.kw jnk Wsjr | חדש אני, מתחדש אני; אני אוֹסִירִיס. | `תִּתְחַדֵּשׁ כַּנֶּשֶׁר נְעוּרָיְכִי` (תהלים קג:ה) | equivalent | חידוש הנעורים כחסד |
| 43.4 | mꜣ(w)i̯.kw rnpj.kw jnk Wsjr | חדש אני, מתחדש אני; אני אוֹסִירִיס. | `תִּתְחַדֵּשׁ כַּנֶּשֶׁר נְעוּרָיְכִי` (תהלים קג:ה) | divergence | כאן חידוש הנעורים הוא גורלו של אוסיריס, שהמת לובש אותו בזהות. |
| 31.1 | rʾ n ḫsf mzḥ jy r jṯi̯.t ḥ[kꜣ] n […] mꜣꜥ-ḫrw m-ꜥ =f m ẖr-nṯr ḏd =f | לחש להדוף את התמסח הבא לתפוס את [הקסם] של […] אמיתי־הקול ממנו בחלקת־האל. אומר הוא: | `וַיִּהְיוּ לְתַנִּינִם; וַיִּבְלַע מַטֵּה אַהֲרֹן אֶת מַטֹּתָם` (שמות ז:יב) | divergence | גם שם תמסחים (או נחשים) הם חלק מתחרות של קסם; כאן התמסח בא "לתפוס את הקסם" של המת – הקסם הוא רכוש שאפשר לגזול. `תַּנִּין` אינו בשימוש (`renderings.md` §4.2). |
| 33.1 | rʾ n ḫsf ḥfꜣ,w ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש להדוף נחש. דברים לאמר, בפי […] אמיתי־הקול: | `וַיְשַׁלַּח יְהוָה בָּעָם אֵת הַנְּחָשִׁים הַשְּׂרָפִים וַיְנַשְּׁכוּ אֶת הָעָם` (במדבר כא:ו) | equivalent | הנחש כסכנה יומיומית של המדבר |
| 33.1 | rʾ n ḫsf ḥfꜣ,w ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש להדוף נחש. דברים לאמר, בפי […] אמיתי־הקול: | `וַיְשַׁלַּח יְהוָה בָּעָם אֵת הַנְּחָשִׁים הַשְּׂרָפִים וַיְנַשְּׁכוּ אֶת הָעָם` (במדבר כא:ו) | divergence | שם הנחשים נשלחים כעונש ומרפאים אותם בנחש הנחושת; כאן הודפים אותם בלחש. |
| 34.1 | rʾ n tm pzḥ […] mꜣꜥ-ḫrw jn ḥfꜣ,w m ẖr-nṯr | לחש לבלי להינשך – […] אמיתי־הקול – בידי נחש בחלקת־האל. | `הַנֹּשֵׁךְ עִקְּבֵי סוּס` (בראשית מט:יז) | equivalent | הנחש הנושך; `נשך` הוא הפועל העברי הטבעי לנחש, וכאן הוא מתרגם את *pzḥ* (השם `נֶשֶׁךְ` "ריבית" אינו בשימוש, `renderings.md` §11.4). |
| 34.2 | ḏd =f ꜥrꜥr,t jnk nbj,t psḏ.t m wp,t ḥḥ.pl jꜣ,t dnp,w ky-ḏd jꜣ,t rnp,yt ḥri̯.tj | אומר הוא: פתן! אני השביב הזוהר בקדקוד אלפי־האלפים, מוט הדֶּנֶפּוּ – נוסח אחר: מוט הצמחים הרעננים. רחקי | `עַל-שַׁחַל וָפֶתֶן תִּדְרֹךְ` (תהלים צא:יג) | equivalent | הפתן כסכנה שהמוגן גובר עליה. |
| 74.3 | p,t pri̯ =j r p,t ḥfd =j ḥr (j)ꜣḫ,w j nni̯.kw zp-2 šmi̯ =j nni̯ […] | (ב)שמים, כשאני יוצא אל השמים, כשאני מטפס על האורה. הוֹ, נלאה אני (פעמיים)! הולך אני נלאה […] | `יָרוּצוּ וְלֹא יִיגָעוּ יֵלְכוּ וְלֹא יִיעָפוּ` (ישעיהו מ:לא) | divergence | העולים אל על בלי עייפות; המת המצרי, לעומתם, מתלונן: "נלאה אני" – ולכן הוא זקוק ללחש לרגליו. |
| 45.1 | rʾ n tm ḥwꜣ m ẖr-nṯr ḏd-mdw jn […] mꜣꜥ-ḫrw […] | לחש לבלי להירקב בחלקת־האל. דברים לאמר, בפי […] אמיתי־הקול […]: | `לֹא-תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת` (תהלים טז:י) | equivalent | הבקשה שהגוף לא יראה את הריקבון |
| 45.1 | rʾ n tm ḥwꜣ m ẖr-nṯr ḏd-mdw jn […] mꜣꜥ-ḫrw […] | לחש לבלי להירקב בחלקת־האל. דברים לאמר, בפי […] אמיתי־הקול […]: | `לֹא-תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת` (תהלים טז:י) | divergence | במצרים זו מטרת החניטה והלחש גם יחד: הגוף נשמר כדי שהבָּא ישוב אליו. |
| 41.3 | m ṯꜣw sšmi̯ =j jm,j ꜥḏ wr r wjꜣ Ḫprj mdwi̯ =j n jz,t Jtm,w jm,j.t mšr,w | מן הרוח. מנחה אני את השוכן בנוגה הגדול אל צִי חֶפְּרִי; מדבר אני אל צוות אָתוּם אשר בערב. | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | "חי אני מן הרוח" (41.2–41.3): החיים מן האוויר הנשאף; במצרית זו רוחו של המת, שאוכל ונושם כאחד. |
| 41.5 | mt =j mj Rꜥ,w rꜥ,w-nb j jnn!-ḥtp.w wbꜣ{ꜣ} rʾ =f sḫntj ṯms,w smn nṯr,t.pl jnk Wsjr | מותי, כרַא בכל יום. הוֹ מביא־הקרבנות, הפוער את פיו, המקדם את העוון, המקיים את האֵלוֹת! אני אוֹסִירִיס, | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | divergence | ניצחון על המוות; כאן המוות אינו מבוטל אלא נעשה מחזורי: "חי אני אחרי מותי, כרַא בכל יום" – השמש מתה בכל ערב וקמה בכל בוקר. |
| 42.4 | ⸢Rꜥ,w⸣ mn ḥz,wt jnk ṯz,t nṯr m-ẖnw jsr nfr ,wj jn? ḫr =f zp-4 jnk Rꜥ,w mn ḥz,wt | רַא, קיים־החן. אני חוליית האל בתוך האֵשֶׁל. מה טוב …! אצלו (ארבע פעמים). אני רַא, קיים־החן; | `וַיִּטַּע אֶשֶׁל בִּבְאֵר שָׁבַע` (בראשית כא:לג) | equivalent | האשל כעץ קדוש; במצרים **אשל** (*jsr*) מגן על גופת אוסיריס – ובמסורת אחרת, עמוד השדרה שלו (*ṯz.t*) נמצא בתוכו. |
| 42.5 | jnk ṯz,t nṯr m-ẖnw jsr wḏꜣ =j wḏꜣ hrw pn šnj =j m Nw,w ḥr =j m jtn jw jr,t.du =j m | אני חוליית האל בתוך האֵשֶׁל. שלם אני, שלם היום הזה. שערי – נוּן, פניי – אָטוֹן, עיניי – | `רֹאשׁוֹ כֶּתֶם פָּז קְוֻצּוֹתָיו תַּלְתַּלִּים שְׁחֹרוֹת כָּעוֹרֵב` (שיר השירים ה:יא) | divergence | תיאור גוף אבר אחר אבר; בשיר השירים כל אבר דומה לחומר יקר או לטבע, וכאן כל אבר **הוא** אל. |
| 42.10 | Ptḥ jw sꜣḥ.w =j m bjk.w […] šwi̯.t(j) m nṯr jw Ḏḥwtj m-ḥr jwf =j | פְּתָח; אצבעות־רגליי – בזים […] ריק מאל. ותְּחוּת – לפני בשרי | `כָּל עַצְמוֹתַי תֹּאמַרְנָה יְהוָה מִי כָמוֹךָ` (תהלים לה:י) | divergence | כל עצם מעידה על האל; במצרית כל אבר **הוא** אל, "אין אבר ריק מאל". |
| 42.13 | pri̯ w[ḏꜣ(.w]) [ḫmi̯].w rn =f jnk sf mꜣꜣ ḥḥ n rnp[,t.pl] [rn] =j zbi̯ zp-2 m wꜣ,t.pl ḥr,jw sjp.w | היוצא [שלם], אשר [לא נודע] שמו. אני אתמול; "חוזה אלפי אלפים שנים" – [שמי], הצועד (פעמיים) בדרכי ממוני־הבדיקה. | `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ כְּיוֹם אֶתְמוֹל` (תהלים צ:ד) | equivalent | "אתמול" ו"אלף שנים" בדבר אחד על האל שמעבר לזמן; כאן "אני אתמול, החוזה אלפי אלפים שנים". |
| 42.20 | mḥ,tj.w jꜣb,tj.w jmn,tj.w snḏ =j m ẖ,t.pl =ṯn jnk nbi̯ m jr,t =f nn mt =j m-wḥm ꜣ,t =j m ẖ,t.pl =ṯn jrw =j | הצפוניים, המזרחיים, המערביים – יראתי בבטנכם. אני מוזהב־העין; לא אמות שוב. כוחי בבטנכם, מראי | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | divergence | סוף המוות; במצרית "לא אמות **שוב**": המוות הראשון כבר קרה, והחשש הוא מן "המוות השני" בעולם הבא. |
| 42.24 | jr,t =f znj zp-2 zni̯.t zp-2 m =k ḏd.n =j n =k jnk wnb pri̯ m Nw,w mw,t =j pw Nw,t j qmꜣ | המגיע לו. עובר (פעמיים) מה שעובר (פעמיים)! הנה, אמרתי לך: אני הציץ היוצא מנוּן; אמי היא נוּת. הוֹ יוצר | `גָּלְמִי רָאוּ עֵינֶיךָ` (תהלים קלט:טז) | divergence | "יוצר" האדם רואה את גלמו לפני שנולד; כאן הדובר הוא ציץ היוצא מן המים הקדמונים ופונה אל יוצרו. |

### Parallels index (NU3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 14.1 | rʾ n dr špt m jb n nṯr r […] mꜣꜥ-ḫrw | לחש להרחיק זעף מלב אל נגד […] אמיתי־הקול. | `שׁוּב מֵחֲרוֹן אַפֶּךָ וְהִנָּחֵם עַל הָרָעָה לְעַמֶּךָ` (שמות לב:יב) | equivalent | בקשה להשיב את כעס האל מעל האדם. במצרית האל "מרחיק" את הזעף מלבו; בעברית האל "שב" מחרון אפו ו"מתנחם" (`נחם` ו`חרה` אינם בתרגום, `renderings.md` §5.1, §11.4). |
| 14.3 | ḏd-mdw =j jn nṯr špt r =j mḥi̯ jzf,t ḫr =s ḥr-ꜥ,wj nb-mꜣꜥ,t ḏr dr =⸢ṯn⸣ nkn | אמירה עליי בפי אל הזועף עליי. הצף את העוול! ייפול הוא לפני אדון־האמת, כי מרחיקים אתם את החבלה | `יִכְבֹּשׁ עֲוֹנֹתֵינוּ; וְתַשְׁלִיךְ בִּמְצֻלוֹת יָם כָּל חַטֹּאותָם` (מיכה ז:יט) | divergence | החטא מוטבע במים. במיכה האל עצמו משליך את החטאים לים; כאן העוול "מוצף" ונופל לפני אדון האמת, בלי וידוי ובלי רחמים. |
| 14.4 | jm =j ḏw zmꜣ nṯr r mꜣꜥ,t ḥtp n =j nṯr pn dr =f [sḏb] =j n ky j nb-ḥtp.w m gn wr | ממני, הרעה. יתחבר האל אל האמת! ינוח אליי האל הזה, ירחיק הוא את [תקלתי] של האחר. הוֹ אדון־הקרבנות, בתור תקיף גדול! | `שׁוּבֵנוּ אֱלֹהֵי יִשְׁעֵנוּ וְהָפֵר כַּעַסְךָ עִמָּנוּ` (תהלים פה:ה) | equivalent | בקשה שהאל יפר את כעסו מעל המתפלל; כאן "ינוח" האל, ו*ḥtp* הוא גם שמם של הקרבנות שמפייסים אותו (14.5). |
| 14.5 | m =k jni̯.n =j n =k sḥtp.yw ꜥnḫ =k jm =f ꜥnḫ =j […] dr špt nb n,tj m jb =k r =j | הנה, הבאתי לך מניחי־הדעת; תחיה בהם, ואחיה אני […]. הרחק כל זעף אשר בלבך נגדי! | `וַיָּרַח יְהוָה אֶת-רֵיחַ הַנִּיחֹחַ` (בראשית ח:כא) | divergence | קרבן שמניח את כעס האל; גם `נִיחֹחַ` גזור מן "נוח". כאן הקרבנות עצמם נקראים "מניחי־הדעת", והאל "חי בהם". |
| 68.2 | m hrw ḏd-mdw jn […] mꜣꜥ-ḫrw wn [n] =j ꜥꜣ.du p,t wn n =j ꜥꜣ.du tꜣ wn n =j qꜣr,t.pl Gbb | ביום. דברים לאמר, בפי […] אמיתי־הקול: פתוחות [לי] שתי כנפי־הדלת של השמים, פתוחות לי שתי כנפי־הדלת של הארץ, פתוחים לי נגרי גֶּבּ, | `וַיְצַו שְׁחָקִים מִמָּעַל וְדַלְתֵי שָׁמַיִם פָּתָח` (תהלים עח:כג) | equivalent | לשמים יש דלתות שנפתחות |
| 68.2 | m hrw ḏd-mdw jn […] mꜣꜥ-ḫrw wn [n] =j ꜥꜣ.du p,t wn n =j ꜥꜣ.du tꜣ wn n =j qꜣr,t.pl Gbb | ביום. דברים לאמר, בפי […] אמיתי־הקול: פתוחות [לי] שתי כנפי־הדלת של השמים, פתוחות לי שתי כנפי־הדלת של הארץ, פתוחים לי נגרי גֶּבּ, | `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא) | divergence | בבראשית נפתחים השמים למים שמשמידים; כאן נפתחים השמים והארץ למעבר המת. |
| 68.3 | zn [n] =[j] ḥw,t [tp(,j].t) [pt]{r}j jn zꜣu̯ wj [sfḫ] wj jn mr ꜥ =f jm =j sti̯ ꜥ =f jm =j | פרוץ [לי] הבית [הקדמון] של [הרואה]. השומר אותי – הוא [התיר] אותי; זה שאסר את ידו בי – הוא *שלף* את ידו ממני. | `הַפַּח נִשְׁבָּר וַאֲנַחְנוּ נִמְלָטְנוּ` (תהלים קכד:ז) | divergence | שחרור מן הקשר; כאן מי שקשר הוא גם מי שמתיר. |
| 68.7 | m nwy sḫm =j m jtr,w sḫm =j m wḏb.w sḫm =j m jrr!.yw | בזרם, שולט אני ביאור, שולט אני בגדות, שולט אני בעושים | `וְהִנֵּה עֹמֵד עַל-הַיְאֹר` (בראשית מא:א) | cognate | *jtrw* "הנהר" הוא מקור המלה העברית `יְאֹר` (שאילה מן המצרית): הנילוס, שבו שולט המת. |
| 68.9 | ꜥnḫ =f js m tʾ Gbb bw,t =j ⟨pw⟩ nn wnm =j sw ꜥnḫ =j m tʾ n btj ḥḏ.t ḥ(n)q,t =j m jt dšr | "חי הוא בלחם גֶּבּ!" – תועבתי הוא, לא אֹכַל אותו. חי אני בלחם של כוסמת לבנה, ושכרי – משעורה אדומה | `וְנָחָשׁ עָפָר לַחְמוֹ` (ישעיהו סה:כה) | divergence | העפר כלחם; "לחם גֶּבּ", כלומר לחם האדמה, הוא אולי העפר, מזונם של המתים האומללים – והמת דוחה אותו. |
| 68.10 | n Ḥꜥpj m bw wꜥb ḥmsi̯ =j ḥr ẖr,j.w zmꜣ.w jmꜣ n Ḥw,t-Ḥr,w ḫnt,j.t jtn-wsḫ | של חַעְפִּי, מן המקום הטהור. יושב אני על (המקומות) אשר תחת ענפי השיזף של חַתְחוֹר, אשר בראש אָטוֹן־וֶסֶח. | `וְיָשְׁבוּ אִישׁ תַּחַת גַּפְנוֹ וְתַחַת תְּאֵנָתוֹ` (מיכה ד:ד) | equivalent | הישיבה תחת העץ כתמונת שלווה ושפע; אצל המצרי העץ הוא עץ האלה, שנותנת למת לחם ומים. |
| 68.11 | jw =s wḏꜣ =s r Jwn,w ẖr zẖꜣ,w n mdw-nṯr mḏꜣ,t n.t Ḏḥwtj sḫm =j m jb =j sḫm =j m ḥꜣ,tj =j | והיא נוסעת אל אוֹן, נושאת את כתב דברי־האל, מגילת תְּחוּת. שולט אני בלבי, שולט אני בלבבי, | `כֹּהֵן אֹן` (בראשית מא:מה) | cognate | העיר אוֹן, הליופוליס, *Jwnw*. |
| 68.15 | sṯz (=j) wj ḥr wnm,j =j ḏi̯! (=j) wj ḥmsi̯.kw ꜥḥꜥ =j wḫꜣ =j ḫmw =j jm,j-rʾ =j r =j | מרים אני את עצמי על ימיני, נותן אני את עצמי (להיות) יושב. קם אני, מנער אני את אבקי; לשוני – עמי | `הִתְנַעֲרִי מֵעָפָר קוּמִי` (ישעיהו נב:ב) | equivalent | ניעור העפר וקימה. בישעיהו ירושלים קמה מן השפלות; כאן המת קם מן הקבר. אין קשר ספרותי – מוטיב משותף של קימה. |
| 92.2 | wn.t wn.tj ḫtm.t ḫtm.tj sḏr wn.t wn.tj n bꜣ jm,j =s jr,t-Ḥr,w šdi̯.t wj ⸢smn⸣[.t] […] | הפתוחה – פתוחה, החתומה – חתומה, (הוֹ) השוכב! הפתוחה – פתוחה לבָּא אשר בה. עין־חוֹרוּס, אשר חילצה אותי, אשר קבעה […] | `וּפָתַח וְאֵין סֹגֵר וְסָגַר וְאֵין פֹּתֵחַ` (ישעיהו כב:כב) | divergence | צמד הפתיחה והסגירה כביטוי של שליטה בשער; כאן המת מכריז שהפתוח פתוח והחתום חתום – כלומר שאיש לא ישנה את מצבו. |
| 63A.1 | rʾ n zw{r}j mw tm ꜥwg | לחש לשתות מים ולבלי להיצלות | `עַל-מֵי מְנֻחוֹת יְנַהֲלֵנִי` (תהלים כג:ב) | divergence | המים כמתנת החיים למי שהאל מוביל אותו. כאן המת דואג לשתות מים ולא להישרף באש של העולם התחתון; את המים הוא משיג בכוח הזהות עם משוטו של רַא, לא בהשגחת רועה. |
| 105.3 | sḫm.kw jni̯.n =j n =k bd snṯr swꜥb =j ṯw jm =sn swꜥb =j ntnt =k jm =sn | שולט. הבאתי לך נתר וקטורת: אטהר אותך בהם, אטהר את זיעתך בהם. | `וְהִקְטִיר עָלָיו אַהֲרֹן קְטֹרֶת סַמִּים` (שמות ל:ז) | equivalent | הקטורת כחלק מן הפולחן היומי; כאן היא מטהרת את הכָּא, כמו את פסל האל במקדש. |
| 105.4 | ṯz pwy ḏw ḏd.n =j ꜥb,w pwy ḏw jri̯.n =j n rḏi̯.y n =j ḥr-n,tt jnk wꜣḏ pwy | המאמר הרע ההוא שאמרתי, העבֵרה הרעה ההיא שעשיתי – לא יינתנו לי, כי אני קמע־הוָאגֶ׳ ההוא | `חַטֹּאות נְעוּרַי וּפְשָׁעַי אַל-תִּזְכֹּר` (תהלים כה:ז) | divergence | בקשה שהחטאים לא ייזקפו לאדם. במזמור – בקשה מן האל; כאן – הכרזה, שהדבר הרע "לא יינתן" למת, משום שהוא זהה לקמע. |
| 105.6 | fꜣi̯ m mḫꜣ,t qꜣi̯ mꜣꜥ,t r ⸢fnḏ⸣ n Rꜥ,w […] […] tp =j rmn jm =[j] | השוקל במאזניים. עולה האמת אל אפו של רַא […] […] ראשי, הקיבורת – ממני. | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | equivalent | השקילה במאזניים כמבחן האדם; כאן השוקל הוא כנראה תחות או הקמע עצמו, ו"האמת" עולה אל אפו של רַא כמו ריח קרבן. |
| 105.7 | n nnk js jr[,t] mꜣꜣ.tj msḏr sḏm.w n{n} jnk js kꜣ-n-ḫr,yt n pr.w,t-r-ḫrw jm [=j] | לא שלי עין רואה, אוזן שומעת; לא אני שור־הטבוחים, לא יציאות־לקול ממני. | `אֹזֶן שֹׁמַעַת וְעַיִן רֹאָה יְהוָה עָשָׂה גַם-שְׁנֵיהֶם` (משלי כ:יב) | divergence | אותו צמד, "עין רואה ואוזן שומעת". במשלי – האל עשה את שתיהן; כאן המת שולל אותן מן הקרבן הנשחט, שאין לו עין רואה ואוזן שומעת – והוא, המת, אינו קרבן. מוטיב משותף, בלי קשר ספרותי מוכח. |
| 72.2 | j⁝nḏ-ḥr =ṯn nb.w-mꜣꜥ,t šwi̯.y m jzf,t wnn.yw ꜥnḫ(.w) r-nḥḥ ḥn,tj-ḏ,t wbꜣ =j | שלום לפניכם, אדוני־האמת, החפים מעוול, ההווים חיים לנצח, עד תכלית העד! פוער אני (דרך) | `חַף אָנֹכִי; וְלֹא עָוֹן לִי` (איוב לג:ט) | equivalent | "חף מ־" ככינוי למי שאין בו עוון; כאן תואר האלים השופטים, באיוב – טענת האדם על עצמו. |
| 72.5 | jm =f jw rḏi̯.tw n =j ꜣw,t-ꜥ m-bꜣḥ =ṯn ḥr-n,tt ⸢wj⸣ [rḫ.kw] ṯn rḫ.kw rn.w =ṯn | בו. נותנים לי מתנות לפניכם, כי [יודע] אני אתכם, יודע אני את שמותיכם; | `וְאָמְרוּ לִי מַה שְּׁמוֹ מָה אֹמַר אֲלֵהֶם` (שמות ג:יג) | divergence | ידיעת שם האל כתנאי לשליחות ולגישה; בשמות השם נמסר מן האל, וכאן המת יודע את שמות השומרים ושולט בהם בכוח הידיעה. |
| 72.14 | jw =f pri̯ =f r sḫ,t-jꜣr,w jw ḏi̯!.tw n =f jt btj jm wnn.ḫr =f wꜣḏ(.w) mj wnn =f tp tꜣ jw =f jri̯ =f | יוצא הוא אל שדה־האגמונים, ונותנים לו שם שעורה וכוסמת, והרי יהיה רענן כפי שהיה על פני הארץ; ועושה הוא | `עוֹד יְנוּבוּן בְּשֵׂיבָה דְּשֵׁנִים וְרַעֲנַנִּים יִהְיוּ` (תהלים צב:טו) | equivalent | הרעננות כשכר הישר, גם בזקנה; במצרים – גם אחרי המוות. |
| 71.3 | wḥꜥ sw sfḫ sw jmi̯ sw r tꜣ jmi̯ mr,wt =f j.n nb ḥr wꜥ r =j jnk bjk m-ẖnw | שחררו אותו, התירו אותו, תנו אותו לארץ, תנו את אהבתו – אומר אדון־פנים־אחד עליי. אני הבז שבתוך | `הַפַּח נִשְׁבָּר וַאֲנַחְנוּ נִמְלָטְנוּ` (תהלים קכד:ז) | divergence | שחרור מן הקשר; כאן אין צייד, אלא תחבושות המומיה, שהאל מצווה להתיר. |
| 71.11 | sw sfḫ sw jmi̯ sw r tꜣ j.n nb ḥr wꜥ r =j j ḏꜣjs,w ⸢7⸣ jpw rmni̯.w mḫꜣ,t | אותו, התירו אותו, תנו אותו לארץ – אומר אדון־פנים־אחד עליי. הוֹ שבעת היועצים האלה, הנושאים את המאזניים | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | divergence | המאזניים של משפט המתים; כאן נושאים אותם שבעה יועצים אלים, ובאיוב – האל לבדו. |
| 71.15 | jm,j ḫfꜥ =ṯn n wꜣs jm,j ꜥ =ṯn swḏ =ṯn wj n [ꜥ]nḫ tp(,j) rʾ n rnp,t ḏi̯! =f rnp,t.pl ꜥšꜣ.t.pl ḥr rnp,t.pl =j n.t ꜥnḫ ḏi̯! =f ⸢hrw.pl⸣ | אשר באגרופכם, לשררה אשר בזרועכם; תמסרו אותי לחיים בפֶּתַח השנה. ייתן הוא שנים רבות על שנות חיי, ייתן הוא ימים | `הִנְנִי יוֹסִף עַל יָמֶיךָ חֲמֵשׁ עֶשְׂרֵה שָׁנָה` (ישעיהו לח:ה) | equivalent | האל מוסיף שנים על שנות החיים; אצל חזקיהו – בחיים, אצל המת המצרי – אחרי המוות. |
| 71.16 | ꜥšꜣ.pl ḥr hrw[.pl] =j n.w ꜥnḫ ḏi̯! =f grḥ.pl ꜥšꜣ.pl ḥr grḥ.pl =j n.w ꜥnḫ r pri̯.t =j wbn =j r šzp =j ṯꜣw r fnḏ =j jr,t.du =j mꜣꜣ =sn m-m nw-n jm,j.w-ꜣḫ,t grḥ pwy n ḥsb ꜥwꜣ(,y) | רבים על ימי חיי, ייתן הוא לילות רבים על לילות חיי, עד צאתי וזרחי אל דיוקני, רוח לאפי; ועיניי – יחזו הן בין שוכני־האופק האלה – בלילה ההוא של חשבון הגזלן. | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | נשימה באף כראשית החיים; אצל המת המצרי "רוח לאפי" היא שובם של החיים, בכל זריחה. |
| 40.5 | jzf,tj.w jṯi̯ m ꜥwꜣi̯.yw nn jzf,t =j r-ꜥ zẖꜣ,w ṯms,w nn ꜥwꜣi̯,w […] m | בעלי־העוול, התופס כגזלן! אין עוול בי בצד סופר־העוונות; אין גזל […] ב־ | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | equivalent | הצהרת חפות לפני השופט |
| 40.5 | jzf,tj.w jṯi̯ m ꜥwꜣi̯.yw nn jzf,t =j r-ꜥ zẖꜣ,w ṯms,w nn ꜥwꜣi̯,w […] m | בעלי־העוול, התופס כגזלן! אין עוול בי בצד סופר־העוונות; אין גזל […] ב־ | `וַיִּכָּתֵב סֵפֶר זִכָּרוֹן לְפָנָיו` (מלאכי ג:טז) | divergence | ספר הזיכרון של המעשים; כאן "סופר העוונות" רושם את החטאים, והמת טוען שאין לו מה לרשום. |
| 108.4 | m jꜣb(,t) ḏw pf jw ḥw,t-nṯr =f m ḥrs,t jw ḥfꜣ,w ḥr wp,t n.t ḏw pf n-sw mḥ 30 m ꜣw =f mḥ 8 m-ḥꜣ,t =f | במזרח ההר ההוא, ובית האל שלו – מקרנליאן. ונחש על פסגת ההר ההוא, שלושים אמה אורכו, שמונה אמות מחזיתו | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | נחש בעל כוח על־טבעי; כאן הנחש הוא מפלצת שמאיימת על השמש, לא מפתה בדיבור. |
| 108.7 | ꜥꜣ.t m-ẖnw sqd.w,t sẖp.ḫr =f mḥ 7 m mw ꜥꜣ rḏi̯.ḫr Swtj wꜥr(.w) mtꜣ | גדולה בתוך הצוות; וגומע הוא שבע אמות מן המים הגדולים. אז נועץ סֵת, (כשהוא) נס, רומח | `הֵן יַעֲשֹׁק נָהָר לֹא יַחְפּוֹז יִבְטַח כִּי-יָגִיחַ יַרְדֵּן אֶל-פִּיהוּ` (איוב מ:כג) | divergence | המפלצת השותה את הנהר (בהמות) |
| 108.7 | ꜥꜣ.t m-ẖnw sqd.w,t sẖp.ḫr =f mḥ 7 m mw ꜥꜣ rḏi̯.ḫr Swtj wꜥr(.w) mtꜣ | גדולה בתוך הצוות; וגומע הוא שבע אמות מן המים הגדולים. אז נועץ סֵת, (כשהוא) נס, רומח | `בַּיּוֹם הַהוּא יִפְקֹד יְהוָה בְּחַרְבּוֹ הַקָּשָׁה וְהַגְּדוֹלָה וְהַחֲזָקָה עַל לִוְיָתָן נָחָשׁ בָּרִחַ` (ישעיהו כז:א) | equivalent | האל דוקר את הנחש המאיים. במצרים הדוקר הוא סֵת, שעומד בחרטום ספינת השמש – לא האל העליון – והנחש אינו מת: רק מקיא את מה שבלע. |
| 108.8 | r =f n bjꜣ rḏi̯.ḫr =f bši̯ =f ꜥm.tn =f nb.t rḏi̯.ḫr sw Stš m-ḏr,j =f ḏd.ḫr =f m ḥkꜣ.w | של מתכת נגדו, ואז גורם הוא שיקיא את כל אשר בלע. אז מציב סֵת את עצמו מולו, ואומר הוא בקסמים: | `חַיִל בָּלַע וַיְקִאֶנּוּ מִבִּטְנוֹ יֹרִשֶׁנּוּ אֵל` (איוב כ:טו) | divergence | הבולע שמקיא את מה שבלע בכוח האל |
| 108.8 | r =f n bjꜣ rḏi̯.ḫr =f bši̯ =f ꜥm.tn =f nb.t rḏi̯.ḫr sw Stš m-ḏr,j =f ḏd.ḫr =f m ḥkꜣ.w | של מתכת נגדו, ואז גורם הוא שיקיא את כל אשר בלע. אז מציב סֵת את עצמו מולו, ואומר הוא בקסמים: | `וַיֹּאמֶר יְהוָה לַדָּג וַיָּקֵא אֶת יוֹנָה אֶל הַיַּבָּשָׁה` (יונה ב:יא) | divergence | מפלצת מים שמקיאה בצו האל. |
| 108.12 | pwy šm-ḥr-ẖ,t≡f pḥ,tj =fj n ṯz =f m =k wj šmi̯.kw r =k pḥ,tj =kj m-ꜥ =[j] [jnk] | ההן, ההולך־על־בטנו, אשר כוחו – לשרטונו? הנה, הלכתי נגדך, וכוחך – בידי! [אני] | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | equivalent | הנחש "ההולך על בטנו". בבראשית זו קללה שמשפילה את הנחש; כאן זהו פשוט כינויו של הנחש, ו"כוחו" נלקח ממנו בכוח הקסם. מוטיב משותף, בלי קשר ספרותי; המלה המצרית *ẖ.t* היא `בֶּטֶן`, לא `גָּחוֹן`. |
| 108.15 | sšm,pl? jḫ[,t] ḫsf ꜥꜣpp ḥr =s jw =j rḫ.kw bꜣ.w jmn,tj.w Jtm,w pw Sbk pw nb Bꜣẖ,w | את *מלוות* הדבר שבו נהדף אַפּוֹפִּיס. יודע אני את הבָּאוֹת של המערביים: אָתוּם הוא, סוֹבֶּךְ הוא, אדון בָּאחוּ, | `אַתָּה פוֹרַרְתָּ בְעָזְּךָ יָם שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג) | divergence | האל המנצח את מפלצת המים; במצרים המאבק באַפּוֹפִּיס אינו מעשה אחד בראשית, אלא מלחמה שחוזרת בכל יום, והמת משתתף בה בידיעה. |
| 119.3 | ṯw wꜥb rḏw sṯꜣ jm =k jri̯.y rn =f m Rʾ-sṯꜣ,w wsr =k jm m Ꜣbḏ,w ṯzi̯ ṯw jr =k Wsjr | אותך. טהורה ההפרשה שנזלה ממך, אשר נעשה שמו לרֶא־סְטָאוּ. חזק אתה שם באַבְּגֶ׳ו. הרם אתה את עצמך, אוֹסִירִיס, | `לֹא-תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת` (תהלים טז:י) | divergence | הגוף שאינו נרקב; כאן ההפרשות של גוף אוסיריס, שנזלו בזמן ריקבונו, הם "טהורים" ונותנים שם למקום – הריקבון עצמו מקודש. |
| 119.5 | sꜥḥ nṯr ḏd =j ḫpr nn ḫsf =j ḥr =k Wsjr | אציל־האל; אומר אני – ונהיה. לא אֵהָדֵף מפניך, אוֹסִירִיס. | `כִּי הוּא אָמַר וַיֶּהִי הוּא-צִוָּה וַיַּעֲמֹד` (תהלים לג:ט) | equivalent | הדיבור שמתקיים מיד. במזמור – האל הבורא; כאן המת, שנעשה "אציל־האל", מקבל את כוח הדיבור היוצר. |

### Parallels index (NU4)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 79.2 | jnk Jtm,w jri̯ p,t qmꜣ wnn,t pri̯ m tꜣ sḫpr sṯ,yt nb n,tt msi̯ nṯr.pl nṯr ḫpr-ḏs≡f | אני אָתוּם, אשר עשה את השמים, אשר יצר את ההווה, אשר יצא מן הארץ, אשר חולל את הזרע, אדון היש, אשר ילד את הָאֵלִים, האל נהיה־מעצמו, | `אָנֹכִי יְהוָה עֹשֶׂה כֹּל נֹטֶה שָׁמַיִם לְבַדִּי רֹקַע הָאָרֶץ` (ישעיהו מד:כד) | equivalent | הצגה עצמית של האל הבורא בגוף ראשון ובשרשרת בינונים ("אני … העושה … הנוטה") |
| 79.2 | jnk Jtm,w jri̯ p,t qmꜣ wnn,t pri̯ m tꜣ sḫpr sṯ,yt nb n,tt msi̯ nṯr.pl nṯr ḫpr-ḏs≡f | אני אָתוּם, אשר עשה את השמים, אשר יצר את ההווה, אשר יצא מן הארץ, אשר חולל את הזרע, אדון היש, אשר ילד את הָאֵלִים, האל נהיה־מעצמו, | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם` (בראשית ב:ז) | divergence | *qmꜣ* = `יָצַר` (§4.4), אבל כאן נוצר "ההווה" כולו, ובעברית – האדם. |
| 79.6 | j⁝nḏ-ḥr =ṯn psḏ,t jm,j.t-ẖnw n nn,t m =ṯn wj jy.kw ḫr =ṯn wꜥb.kw nṯri̯.kw | שלום לפניכם, התשיעייה אשר בתוך שמי־המטה! הנה, באתי אליכם, טהור, אֵלִי, | `מִי-יַעֲלֶה בְהַר-יְהוָה; וּמִי-יָקוּם בִּמְקוֹם קָדְשׁוֹ` (תהלים כד:ג); `נְקִי כַפַּיִם וּבַר-לֵבָב` (תהלים כד:ד) | equivalent | הבא אל מקום האל מכריז על טהרתו; כאן הטהרה היא מצב ("טהור, אֵלִי") ולא מעשים, והמילים של מזמור כד אינן בתרגום (`renderings.md` §11.4). |
| 79.9 | nfr,t s(j)ꜥr.n =j n =ṯn mꜣꜥ,t jw =j rḫ.kw ṯn rḫ.kw rn.w =ṯn rḫ.kw | טובה; העליתי לכם את האמת. יודע אני אתכם, יודע אני את שמותיכם, יודע אני | `יְדַעְתִּיךָ בְשֵׁם` (שמות לג:יב) | equivalent | ידיעת השם כקרבה; כאן הכיוון הפוך: האדם יודע את שמות האלים, ובידיעה זו כוחו. |
| 12.2 | [ḥr] [sb]ꜣ.w ḥr wsr,t twy n.t Gbb ḥr mḫꜣ,t twy n.t Rꜥ,w fꜣi̯ =f mꜣꜥ,t jm =s | [על] [הדלתות], על המוט הזה של גֶּבּ, על המאזניים האלה של רַא, אשר הוא נושא בהם את האמת | `בְּמֹאזְנַיִם יִשְׂאוּ-יָחַד` (איוב ו:ב) | equivalent | אותו פועל "נשא" לשקילה במאזניים |
| 12.2 | [ḥr] [sb]ꜣ.w ḥr wsr,t twy n.t Gbb ḥr mḫꜣ,t twy n.t Rꜥ,w fꜣi̯ =f mꜣꜥ,t jm =s | [על] [הדלתות], על המוט הזה של גֶּבּ, על המאזניים האלה של רַא, אשר הוא נושא בהם את האמת | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק` (איוב לא:ו) | equivalent | האל שוקל את האדם; כאן רַא שוקל את מַאַת עצמה. |
| 122-1.2 | wn n =j nm tr ṯw ntk zy ḫpr.n =k ṯnj jnk wꜥ jm =ṯn sꜣq-bꜣ,pl rn n mẖn,tj | פתח לי! מי אפוא אתה? אתה – מי? היכן נהיית? – אני אחד מכם. "מאסף־הבָּאִים" – שמו של המעבורתן; | `אֵי מִזֶּה בָאת וְאָנָה תֵלֵכִי` (בראשית טז:ח) | divergence | שאלת המוצא והיעד של הנודדת; כאן החקירה בשער היא מבחן של ידיעה, והתשובה היא זהות ("אני אחד מכם") ושמות. |
| 122-2.2 | m bjk pri̯.n =j m bn,w nṯr-dwꜣ,y jri̯ n […] ꜥq =(j) m-ḥtp m jmn,t nfr.t n wj š n Wsjr | כבז, יצאתי כבֶּנוּ. אל־השחר, עשה ל־[…]; אכנס בשלום אל המערב היפה – שייך אני לאגם אוֹסִירִיס. | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן-שָׁחַר` (ישעיהו יד:יב) | divergence | כוכב השחר כדימוי; בישעיהו הוא נופל, כאן המת יוצא ועולה כ"אל־השחר". |
| 98.2 | j⁝nḏ-ḥr =ṯ wꜥr,t twy jm,j.t p,t mḥ,t(j).t m š ꜥꜣ mꜣꜣ ṯn ⟨n⟩ mnj =f ꜥḥꜥ ḥr =ṯ ḫꜥi̯ =f m nṯr mꜣꜣ.n =j | שלום לפנייך, האפיק הזה אשר בשמים הצפוניים, באגם הגדול! החוזה בך – לא יעגון; העומד עלייך – יופיע כאל. חזיתי | `כִּי לֹא יִרְאַנִי הָאָדָם וָחָי` (שמות לג:כ) | divergence | ראיית הקדוש וגורלו של הרואה; כאן הכיוון הפוך: מי שרואה את מי השמים – לא ימות. |
| 98.5 | ḥr rmn.wj m(ꜣ)q,t s(j)ꜥr.t j{w}⁝ḫm.w-wrḏ ḥri̯.w r ḥsq jni̯.n =j nw-n ḫsf.w | על שתי *משענות* הסולם, המעלה את בלתי־היגעים, הרחוקים מן הכריתה. הבאתי את אלה, הדוחים | `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` (בראשית כח:יב) | equivalent | סולם בין הארץ לשמים; כאן המת עצמו עולה בו, ובבראשית – מלאכים עולים ויורדים, ויעקב רואה בחלום. |
| 98.9 | ꜥḥꜥ =j m wjꜣ sšmi̯ =j mw ꜥḥꜥ =j m wjꜣ sšmi̯ =j nṯr ꜥḥꜥ =j mdwi̯ =j | אעמוד בצִי, אנחה את המים; אעמוד בצִי, אנחה את האל; אעמוד, אדבר: | `וְצִי אַדִּיר לֹא יַעַבְרֶנּוּ` (ישעיהו לג:כא) | equivalent | המלה `צִי` לספינה (§10.10.3); כאן ספינת האל, ובישעיהו ספינת מלחמה שאינה עוברת. |
| 85.2 | jnk bꜣ-n-Rꜥ,w pri̯ m Nw,w bꜣ =j pw nṯr qmꜣ Ḥw bw,t =j pw jzf,t | אני בָּא־של־רַא, אשר יצא מן הנוּן; הבָּא שלי – הוא האל אשר יצר את חוּ. תועבתי היא העוול, | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם; וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | רוח אלוהים מעל המים הראשונים; כאן הבָּא של רַא *יוצא מתוך* הנוּן, המים הראשונים (`תהום` אינו בתרגום, `renderings.md` §5.1). |
| 85.4 | pwy n bꜣ ḫpr.n =j ḏs =j ḥnꜥ Nw,w m rn =j pwy n Ḫprj ḫpr.n =j jm =f rꜥ,w-nb jnk nb | זה של בָּא. נהייתי מעצמי עם הנוּן, בשמי זה של חֶפְּרִי, אשר בו אני נהיה בכל יום. אני אדון | `אֶהְיֶה אֲשֶׁר אֶהְיֶה` (שמות ג:יד) | divergence | אל שמגדיר את עצמו בפועל ההיות; כאן *ḫpr* "להיהפך, להיווצר", ושמו של האל (חֶפְּרִי, "המתהווה") הוא הפועל עצמו – אך ההתהוות חוזרת "בכל יום", כזריחת השמש, ואינה קיום שאינו משתנה. |
| 85.4 | pwy n bꜣ ḫpr.n =j ḏs =j ḥnꜥ Nw,w m rn =j pwy n Ḫprj ḫpr.n =j jm =f rꜥ,w-nb jnk nb | זה של בָּא. נהייתי מעצמי עם הנוּן, בשמי זה של חֶפְּרִי, אשר בו אני נהיה בכל יום. אני אדון | `בְּרֵאשִׁית בָּרָא אֱלֹהִים` (בראשית א:א) | divergence | בבראשית הבורא קודם למים ואינו "נהיה"; כאן הבורא נהיה "מעצמו" *עם* הנוּן, המים הקדומים. |
| 85.11 | ḥqꜣ ḏ,t jnk qmꜣ kk,w jri̯ s,t =f m-ḏr,w ḥr,t mrr! =j pḥ ḏr,w =sn | שליט העַד. אני יוצר החושך, אשר עשה את מושבו בקצות המרום. כשאחפוץ להגיע אל קצותיהם – | `יוֹצֵר אוֹר וּבוֹרֵא חֹשֶׁךְ` (ישעיהו מה:ז) | divergence | האל שיוצר את החושך; בישעיהו האל האחד יוצר את האור ואת החושך יחד, ואילו כאן החושך הוא מקום מושבו של הבורא בקצות השמים. *qmꜣ* = `יָצַר` (§4.4), ו`בָּרָא` אינו בתרגום. |
| 86.1 | rʾ n jri̯.t ḫpr,w m mn,t ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש לעשות צורה של סנונית. דברים לאמר, בפי […] אמיתי־הקול: | `כְּסוּס עָגוּר כֵּן אֲצַפְצֵף` (ישעיהו לח:יד) | equivalent | הנוטה למות מדמה את עצמו לסנונית (`סוּס`) המצפצפת; כאן המת עצמו *נעשה* סנונית ויוצא ביום. |
| 86.6 | jw Stš pf zꜣ Nw,t ẖr jnṯ,t jri̯.tn =f r =j jw sjp.n =j n,tj m Ḫm | וסֵת ההוא, בן נוּת, נתון בכבלים אשר עשה לי. בדקתי את אשר בחֶם, | `בּוֹר כָּרָה וַיַּחְפְּרֵהוּ; וַיִּפֹּל בְּשַׁחַת יִפְעָל` (תהלים ז:טז) | equivalent | הרשע נלכד במלכודת שהכין לאחר; סֵת כבול בכבלים "אשר עשה לי". |
| 124.2 | bn,w ḏd-mdw jn […] qd.n bꜣ =j ḫnr,t m Ḏd,w wꜣḏ =j m P(j) | בֶּנוּ. דברים לאמר, בפי […]: בנה הבָּא שלי מתחם בגֶ׳דוּ; אהיה רענן בפֶּה! | `בָּנֹה בָנִיתִי בֵּית זְבֻל לָךְ` (מלכים א ח:יג) | equivalent | בניית בית לאל; כאן הבָּא בונה לעצמו מתחם בעיר האל. |
| 124.8 | nw-n jr,w.pl ḥtp,t ḏi̯! =k fꜣi̯.y{.n}? =j smꜣ,w wn | את עושי הקורבנות האלה! תן שיורם לי הקודקוד?, ויפתח | `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ וַהֲשִׁיבְךָ עַל כַּנֶּךָ` (בראשית מ:יג) | equivalent | "נשיאת ראש" כהשבה למעמד; כאן *fꜣj* `נשא` והקודקוד, אך המובן הוא הזקיפה הגופנית של הראש. |

### Parallels index (NU5)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 83.1 | rʾ n jri̯.t ḫpr,w m šntj ḏd-mdw jn […] | לחש לעשות צורה של אנפה. דברים לאמר, בפי […]: | `וְאֵת הַחֲסִידָה הָאֲנָפָה לְמִינָהּ` (ויקרא יא:יט) | equivalent | העוף ששמו העברי `אֲנָפָה` נמנה בתורה בין העופות הטמאים; כאן הוא דמות שהמת לובש. |
| 84.7 | jnk smꜣ pn n,tj m-zẖꜣ ḏd-mdw jn nṯr.pl ḫft jw [s]n sf ḥr =ṯn jy(.w) rf ḫr =f jw nhp,w | אני שור־הבר הזה אשר בכתב. דברים לאמר, בפי הָאֵלִים, אל המקוננים עליהם: "האתמול – עליכם, כי בא הוא אליו; והשחר – | `כְּתוֹעֲפֹת רְאֵם לוֹ` (במדבר כג:כב) | equivalent | שור הבר (`רְאֵם`) כדמות של כוח; כאן *smꜣ*, ובעברית `שור־הבר` ולא `רְאֵם`, כדי שלא לייבא את לשון בלעם. |
| 81A.1 | rʾ n jri̯.t ḫpr,w m zšn ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש לעשות צורה של שׁוֹשָׁן. דברים לאמר, בפי […] אמיתי־הקול: | `אֲנִי חֲבַצֶּלֶת הַשָּׁרוֹן שׁוֹשַׁנַּת הָעֲמָקִים` (שיר השירים ב:א); `וְעַל רֹאשׁ הָעַמּוּדִים מַעֲשֵׂה שׁוֹשָׁן` (מלכים א ז:כב) | cognate | `שׁוֹשַׁנָּה` / `שׁוֹשָׁן` – המלה העברית שאולה מן המצרית *sšn* / *zšn* (קופטית ϣⲱϣⲉⲛ), כמו `סוּף` ו`אָחוּ`: ;  – כותרות העמודים של מקדש שלמה מעוצבות כפרח השושן המצרי. |
| 87.1 | rʾ n jrj.t ḫpr,w m zꜣ-tꜣ ḏd-mdw jn | לחש לעשות צורה של בן־הארץ. דברים לאמר, בפי | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | divergence | הנחש של בראשית קשור באדמה כעונש; ה"בן־הארץ" המצרי הוא בנה של האדמה, ונולד מחדש בכל יום. |
| 148.3 | jd.w,t =k 7 ḥnꜥ kꜣ jr(,j).w ḏḏ!.y tʾ ḥ(n)q,t ꜣḫ(,w) n ꜣḫ.w sḏfꜣ.y jmn,tjw ḏḏ! =ṯn | שבע עגלותיך, עם השור אשר להן. (הוֹ) הנותנים לחם ושֵׁכָר, גבורות לאָחִים, המכלכלים את המערביים: תתנו | `וְהִנֵּה מִן הַיְאֹר עֹלֹת שֶׁבַע פָּרוֹת יְפוֹת מַרְאֶה וּבְרִיאֹת בָּשָׂר וַתִּרְעֶינָה בָּאָחוּ` (בראשית מא:ב) | equivalent | שבע פרות, שבמצרים הן מקור המזון; בחלום פרעה הן שבע שנות שבע, וכאן הן שבע פרות־שמים המזינות את המתים לנצח. מלות בראשית (`פָּרוֹת`, `יְפוֹת מַרְאֶה`) אינן בתרגום: *jd.t* היא `עגלה`, כבספר הפרה השמימית. |
| 61.2 | […] mꜣꜥ-ḫrw m-ꜥ =f m ẖr-nṯr ḏd =f jnk pw jnk pri̯ m ꜣgb,w rḏi̯.y n =f bꜥḥ sḫm =f | […] אמיתי־הקול ממנו בחלקת־האל. אומר הוא: אני הוא, אני היוצא מן ההצפה, אשר ניתן לו השפע, שישלוט בו | `רְאוּ עַתָּה כִּי אֲנִי אֲנִי הוּא וְאֵין אֱלֹהִים עִמָּדִי` (דברים לב:לט) | equivalent | אותה הצהרת זהות קצרה, "אני הוא" (*jnk pw*); כאן בפי אדם מת המזדהה עם מי הנילוס. |
| 56.2 | mw m ẖr-nṯr ḏd-mdw jn […] mꜣꜥ-ḫrw j Jtm,w ḏi̯! =k n =j ṯꜣw nḏm jm,j šr,t =k jnk zḫn s,t | מים בחלקת־האל. דברים לאמר, בפי […] אמיתי־הקול: הוֹ אָתוּם, תתן לי את הרוח הנעימה אשר בנחיריך! אני האופף את המושב | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים; וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה` (בראשית ב:ז) | equivalent | הנשימה כמתנה מאפו של האל אל אפו של האדם; כאן המת מבקש אותה מנחיריו של אָתוּם, ולא בבריאה אלא אחרי המוות. המלה המצרית היא *ṯꜣw* `רוּחַ`, ולא מלת בראשית `נְשָׁמָה` (§5.1). |
| 57.6 | n =j Sšꜣ,t ꜥḥꜥ.n n =j H̱nm,w ḥr znb,t =f jr jwi̯ p,t tn m mḥ,yt ḥmsi̯ =j n rsj jr jwi̯ | לי סֶשָׁאת, ואשר עמד לי חְנוּם על סוללותיו. אם יבואו השמים הָאֵלֶּה במשב־הצפון – אשב בדרום; אם יבואו | `עוּרִי צָפוֹן וּבוֹאִי תֵימָן הָפִיחִי גַנִּי יִזְּלוּ בְשָׂמָיו` (שיר השירים ד:טז) | equivalent | רוחות הצפון והדרום כשמות עצם בלי `רוּחַ`, כמו *mḥ.yt* ו־*rs.w* המצריות. |
| 38B.1 | rʾ n ꜥnḫ m ṯꜣw m ẖr-nṯr ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש לחיות על הרוח בחלקת־האל. דברים לאמר, בפי […] אמיתי־הקול: | `לֹא עַל הַלֶּחֶם לְבַדּוֹ יִחְיֶה הָאָדָם` (דברים ח:ג) | divergence | אותו "לחיות על" (*ꜥnḫ m*); בדברים – על מוצא פי ה', כאן – על הרוח שבנחירי האל, ובפרקים 52–53 – על לחם הכוסמת. |
| 38B.6 | m Ḏd,w wḥm =j ꜥnḫ m-ḫt mt mj Rꜥ,w rꜥ,w-nb | בגֶ׳דוּ; אחזור על החיים אחרי המוות, כרַא בכל יום. | `אִם-יָמוּת גֶּבֶר הֲיִחְיֶה` (איוב יד:יד) | divergence | שאלת איוב, שהתשובה עליה שלילית (`וְאִישׁ שָׁכַב וְלֹא-יָקוּם`, איוב יד:יב); כאן הודאה: "אחזור על החיים אחרי המוות" – כמו השמש. |
| 109.5 | jptn n.t mfkꜣ,t prr!.t Rꜥ,w jm,j-wtj =sn šmi̯.yw ḥr sṯz,w-Šw r sbꜣ | הָאֵלֶּה של טורקיז, אשר יוצא רַא ביניהן, ההולך על הֲרָמוֹת־שׁוּ אל הדלת | `וַיַּחֲלֹם וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` (בראשית כח:יב) | equivalent | "שער השמים" (`וְזֶה שַׁעַר הַשָּׁמָיִם`, בראשית כח:יז) כמקום ממשי; כאן הוא דלת במזרח, בין שני עצים. |
| 109.7 | n.t Rꜥ,w jw jnb.pl =s m bjꜣ jw qꜣ,w n jt m mḥ 5 jw ẖms.pl =s m mḥ 2 jw mꜣw,t =f m mḥ 3 | של רַא: חומותיו – מתכת; גובה השעורה – חמש אמות, שיבוליה – שתי אמות, קנה – שלוש אמות; | `וְהִנֵּה שֶׁבַע שִׁבֳּלִים עֹלוֹת בְּקָנֶה אֶחָד בְּרִיאוֹת וְטֹבוֹת` (בראשית מא:ה) | equivalent | שיבולים וקנה, שפע התבואה של מצרים; שם בחלום, כאן בשדה של העולם הבא. `שיבולת` ו`קנה` הן המלים הטבעיות ל־*ẖms* ול־*mꜣw.t*, ולכן הן בתרגום, והמגע עם בראשית מצוין כאן. |
| 9.4 | jri̯ (j)ḫ,t r jti̯ =j Wsjr wn n =j wꜣ,t.pl nb.(w)t jm,j.(w)t p,t jm,j.(w)t tꜣ jnk zꜣ mr,y jti̯ =f m =k wj | אשר עשה דבר נגד אבי אוֹסִירִיס. נפתחו לי כל האורחות אשר בשמים ואשר בארץ. אני הבן האהוב של אביו. הנה אני – | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ` (בראשית כב:ב) | equivalent | "הבן האהוב"; כאן הבן האהוב בא אל אביו המת כדי לנקום את דמו ולשרתו. |
| 94.2 | dbḥ pꜣs gstj ḏd-mdw jn […] j wr mꜣꜣ n jti̯ =f jr,j-mḏꜣ,t | בקש את כלי־המים ואת הקֶסֶת. דברים לאמר, בפי […]: הוֹ הגדול, החוזה באביו, אשר־על־המגילה | `וְקֶסֶת הַסֹּפֵר בְּמָתְנָיו` (יחזקאל ט:ב) | cognate | `קֶסֶת` שאולה מן המצרית *gstj* (`renderings.md` §4.2): לוח הצבעים של הסופר, עם שקעים לדיו השחורה והאדומה. |
| 8.2 | wn n =j wnw(,j) ḫtm tp =j Ḏḥwtj jqr jr,t-Ḥr,w šdi̯ wj jr,t-Ḥr,w ꜣḫ.t ẖkr.t | פתח לי, החֶמְנִי! חתום עליי, תְּחוּת המצוין! עין־חוֹרוּס, חַלְּצִי אותי, עין־חוֹרוּס המפוארת, המקושטת | — | cognate | `חוֹתָם` / `חָתַם` – הפועל העברי שאול מן המצרית *ḫtm* (`renderings.md` §4.2): "פתח לי … חתום עליי" – הפתיחה והחתימה של דלת הקבר. |
| 64L.2 | jnk sf nḥb kꜣ,pl ḥr,j ms,wt m ky zp štꜣ{.pl} bꜣ jri̯ nṯr.pl ḏḏ! ḥtp,t n nṯr.pl dꜣ,tj.w | אני אתמול, המצויד בצידה, אשר על הלידות בפעם אחרת, נסתר־הבָּא, אשר עשה את הָאֵלִים, הנותן קורבנות לָאֵלִים אשר בַּדּוּאַת, | `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר` (תהלים צ:ד) | divergence | "אתמול" בתהלים הוא סמל לזמן שחלף; כאן "אני אתמול" היא הצהרת זהות: המת הוא הזמן שעבר ושב (ראו "בפעם אחרת" – הלידה החוזרת). |
| 64L.9 | {n}⟨jr⟩ jw =j m tkn.w nṯr ḏd m msḏr.du sḏm m dꜣ,t nn jw,w n mw,t =j r =j nḥm =[k] | אם אהיה בין הנוגעים באל – אמור באוזני השומע בַּדּוּאַת: "אין האשמה של אמי נגדי." הצל | `יִזָּכֵר עֲוֹן אֲבֹתָיו אֶל-יְהוָה; וְחַטַּאת אִמּוֹ אַל-תִּמָּח` (תהלים קט:יד) | divergence | במזמור הקללה עוון ההורים נזקף לחשבון הבן; כאן המת מבקש שיאמרו בדין כי "אין האשמה של אמי נגדי": השפיטה היא של האדם לבדו. |
| 64L.18 | smtr,w r rmn.wt Sꜣḥ r(ʾ)-12 pw m zš zmꜣ(.w) m ḏḏ! wꜥ-n-wꜥ jm =sn r(ʾ)-6 pw {g}⟨ẖr⟩,t jm | החקירה – לפי מה שנושא את סָאח: חלק־השנים־עשר הוא, בחלוקה כוללת, ממה שנותן כל אחד מהם; חלק־השישה הוא – המנה שם, | `הַתְקַשֵּׁר מַעֲדַנּוֹת כִּימָה אוֹ-מֹשְׁכוֹת כְּסִיל תְּפַתֵּחַ` (איוב לח:לא) | equivalent | סָאח, קבוצת אוריון, היא `כְּסִיל` של איוב; במצרים – הבָּא של אוֹסִירִיס בשמים. |
| 64L.21 | wpi̯.n =j ꜥb.du m ḥn.t r =j štꜣ.pl qmꜣ.pl m ḫsf wj ḥr,j.w-ẖ,t.pl =sn jy.n =j | פילחתי את שני האויבים במה שנצטווה עליי. נסתרי־התואר, אל תהדפו אותי! אשר על בטנם – באתי | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | equivalent | הזוחלים על בטנם; במצרים הם שומרי הדרכים בעולם הבא (NU3 `ההולך־על־בטנו`). |
| 64L.31 | sḫd ḫtm ꜥꜣ ḥr jnb pnꜥ m-ꜥ =ṯ snḏm.n =j n =ṯ jw Ḥr,w rḏi̯ n =f jr,t =f ḥḏ-ḥr =f m ḥḏ{w}-tꜣ | הפוך־הראש. חתומה הדלת על החומה, המוּפנית בידך, אשר הנעמתי לך. חוֹרוּס – ניתנה לו עינו; מאיר־פנים הוא בהאיר הארץ. | `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ` (במדבר ו:כה) | equivalent | "הארת פנים" כחסד; כאן *ḥḏ-ḥr* "מאיר־פנים" של חורוס, שקיבל את עינו בחזרה, בשחר. |
| 64L.35 | ṯni̯ psḏn,tjw ẖꜣ,t gr.tj jy.n =j r mꜣꜣ jm,j-mḥn≡f ḥr-m-ḥr jr,t-m-jr,t | היכן (אתה) ביום המולד? הגופה – שותקת. באתי לחזות באשר־בתוך־מֶחֶנוֹ, פנים אל פנים, עין בעין. | `וְדִבֶּר יְהוָה אֶל מֹשֶׁה פָּנִים אֶל פָּנִים` (שמות לג:יא); `אֲשֶׁר עַיִן בְּעַיִן נִרְאָה אַתָּה יְהוָה` (במדבר יד:יד) | equivalent | אותם שני צירופים, *ḥr-m-ḥr* ו־*jr.t-m-jr.t*, לראיית האל בלי מחיצה. במקרא – זכות של משה ושל העם; כאן – תכלית המסע של המת, לראות את אל השמש בתוך הנחש המגן עליו. |
| 64L.42 | mk,t pw gr,t ꜥꜣ.t n.t nṯr gmi̯.ntw rʾ pn m Ḫmn,w ḥr ḏb,t n.t bjꜣ šmꜥ,w ḫti̯.w | והגנה גדולה של האל היא גם כן. נמצא הלחש הזה בחֶמְנוּ, על לבנה של מתכת־הדרום, חקוק | `סֵפֶר הַתּוֹרָה מָצָאתִי בְּבֵית יְהוָה` (מלכים ב כב:ח) | equivalent | ספר קדוש שנמצא במקדש, ושמציאתו היא עדות לסמכותו ולקדמותו; גם כאן הלחש "נמצא" (*gmi̯*), במקדש תְּחוּת בחֶמְנוּ, תחת רגלי פסל האל (64L.43). בשני המקרים – מוטיב "הספר הנמצא" המעניק לטקסט עתיקות וסמכות. |
| 64L.42 | mk,t pw gr,t ꜥꜣ.t n.t nṯr gmi̯.ntw rʾ pn m Ḫmn,w ḥr ḏb,t n.t bjꜣ šmꜥ,w ḫti̯.w | והגנה גדולה של האל היא גם כן. נמצא הלחש הזה בחֶמְנוּ, על לבנה של מתכת־הדרום, חקוק | `וְהַמִּכְתָּב מִכְתַּב אֱלֹהִים הוּא חָרוּת עַל הַלֻּחֹת` (שמות לב:טז) | equivalent | כתב אלוהי חקוק על לוח; העברית כאן `חקוק`, לא `חָרוּת`, כדי שלא לייבא את לשון שמות. |
| 64L.43 | m ḫsbd mꜣꜥ ẖr rd.wj nṯr pn m-hꜣw ḥm n nsw,t-bj,t Mn-kꜣ,w-Rꜥ,w mꜣꜥ-ḫrw jn zꜣ-nsw,t Ḥr,w-ḏḏ≡f mꜣꜥ-ḫrw gmi̯ sw | בספיר אמיתי, תחת רגלי האל הזה, בימי הוד מלכות מלך־הדרום־והצפון מֶנְכָּאוּרַא אמיתי־הקול. בן־המלך חוֹרְגֶ׳דֶף אמיתי־הקול הוא שמצא אותו | `וַיִּקְרָאֵהוּ שָׁפָן לִפְנֵי הַמֶּלֶךְ` (מלכים ב כב:י) | divergence | במלכים מביאים את הספר אל המלך יאשיהו; כאן בן המלך מוצא אותו בעצמו במסע ביקורת, ומביאו אל המלך כ"פלא" (64L.45). |
| 64L.46 | rʾ pn wꜥb(.w) tw{r}j(.w) nn wnm ꜥw,t mḥ,yt nn tkn m ḥm,t jsṯ jri̯.w ḫprr n n-mḥ≡f | הלחש הזה (בידי אדם) טהור ומטוהר, שאינו אוכל צאן ודגים, שאינו נוגע באישה. והרי – תיעשה חיפושית מנֶמְחֶף, | `הֱיוּ נְכֹנִים לִשְׁלֹשֶׁת יָמִים: אַל תִּגְּשׁוּ אֶל אִשָּׁה` (שמות יט:טו) | equivalent | הפרישות מאישה כתנאי לקרבה אל הקודש; במצרים – למי שקורא את הלחש. |
| 64L.46 | rʾ pn wꜥb(.w) tw{r}j(.w) nn wnm ꜥw,t mḥ,yt nn tkn m ḥm,t jsṯ jri̯.w ḫprr n n-mḥ≡f | הלחש הזה (בידי אדם) טהור ומטוהר, שאינו אוכל צאן ודגים, שאינו נוגע באישה. והרי – תיעשה חיפושית מנֶמְחֶף, | `עַל כֵּן לֹא נְתַתִּיךָ לִנְגֹּעַ אֵלֶיהָ` (בראשית כ:ו) | equivalent | אותו לשון "נגע" במובן מגע מיני. |

### Parallels index (NU6)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2.1 | rʾ n pri̯.t m hrw ꜥnḫ m-ḫt mt ḏd-mdw jn […] j wꜥ wbn | לחש לצאת ביום, לחיות אחרי המוות. דברים לאמר, בפי […]: הוֹ האחד, הזורח | `אִם-יָמוּת גֶּבֶר הֲיִחְיֶה` (איוב יד:יד) | divergence | איוב שואל אם יחיה המת; הלחש המצרי מניח את החיים אחרי המוות כדבר שהלחש מבטיח. |
| 2.4 | pri̯(.w) m hrw r jri̯.t mrr!.t =f nb.t m-m ꜥnḫ,w | יוצא ביום לעשות כל אשר יחפוץ בין החיים. | `לֹא הַמֵּתִים יְהַלְלוּ-יָהּ וְלֹא כָּל-יֹרְדֵי דוּמָה` (תהלים קטו:יז) | divergence | בתהלים המת מנותק מן החיים; כאן הוא חוזר "לעשות כל אשר יחפוץ בין החיים". |
| 3.4 | ꜥnḫ […] mꜣꜥ-ḫrw m-ḫt mt =f mj Rꜥ,w rꜥ,w-nb jn ḥm msi̯.y Rꜥ,w | יחיה […] אמיתי־הקול אחרי מותו, כרַא בכל יום! הלא היולד את רַא | `אִם-יָמוּת גֶּבֶר הֲיִחְיֶה` (איוב יד:יד) | divergence | כאן התשובה ניתנת מראש: המת חי "כרַא בכל יום". |
| 3.6 | m ꜥnḫ Ptḥ m pri̯.t =f m ḥw,t-sr wr.t jm,j.t Jwn,w | על חייו של פְּתָח, בצאתו מבית־השר הגדול אשר באוֹן. | `כֹּהֵן אֹן` (בראשית מא:מה) | cognate | אוֹן היא הליופוליס, עירו של אָתוּם־רַא; העברית שמרה את שמה המצרי (*Jwnw*). |
| 152.1 | rʾ n qd ḥw,t jm,j.t tꜣ ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש לבנות בית אשר בארץ. דברים לאמר, בפי […] אמיתי־הקול: | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | equivalent | הפועל *qd* "לבנות" הוא הפועל של חְנוּם הבונה אישה (מעשה בשני האחים) ושל `וַיִּבֶן`; כאן הבנייה היא של בית־קבר. |
| 152.1 | rʾ n qd ḥw,t jm,j.t tꜣ ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש לבנות בית אשר בארץ. דברים לאמר, בפי […] אמיתי־הקול: | `אִם-יְהוָה לֹא-יִבְנֶה בַיִת שָׁוְא עָמְלוּ בוֹנָיו בּוֹ` (תהלים קכז:א) | equivalent | בית שהאלים בונים. |
| 152.3 | jꜣ,w mꜣꜣ =sn jni̯ Sšꜣ,t nbḏ njs Jnp,w r […] mꜣꜥ-ḫrw | הלל. חוזים הם (כיצד) מביאה סֶשָׁאת את נֶבֶּג׳?; קורא אַנוּבִּיס, בדבר […] אמיתי־הקול, | `וְהִנֵּה אִישׁ וּבְיָדוֹ חֶבֶל מִדָּה` (זכריה ב:ה) | equivalent | מודד הבא לקבוע מקומו של בניין קדוש; סֶשָׁאת היא האלה המודדת את יסודות המקדשים. |
| 152.4 | qd ḥw,t jm,j.t tꜣ jw snṯ =s m Jwn,w jw šn(,w) =s m ⸢H̱r,j-ꜥḥꜣ⸣ jw ḫnt,j Ḫm m | לבנות בית אשר בארץ. יסודו באוֹן, היקפו בחֶרְעַחָא; אשר־בראש־חֶם ב־ | — | equivalent | `הִנְנִי יִסַּד בְּצִיּוֹן אָבֶן` (ישעיה כח:טז) – היסוד ניתן בעיר קדושה מסוימת; כאן היסוד באוֹן, עיר הבריאה. |
| 152.6 | nṯr.pl wnn.yw m šms,w =f šꜣs mꜣꜣ =ṯn qd ḥw,t twy n.t ꜣḫ pwy ꜥpr | הָאֵלִים אשר במלוויו: שׁוּטוּ, תחזו בבניין הבית הזה של האָח ההוא, הערוך! | — | equivalent | `שׁוֹטְטוּ בְּחוּצוֹת יְרוּשָׁלִַם וּרְאוּ נָא` (ירמיה ה:א) – אותו צירוף ציווי "לשוטט" ו"לראות". |
| 75.1 | rʾ n šmj.t r Jwn,w šzp s,t jm ḏd-mdw jn […] mꜣꜥ-ḫrw | לחש ללכת אל אוֹן ולקבל מושב שם. דברים לאמר, בפי […] אמיתי־הקול: | `פּוֹטִי פֶרַע כֹּהֵן אֹן` (בראשית מא:מה) | cognate | אוֹן, עיר המקדש של אל השמש, היא העיר שכהנה נתן את בתו ליוסף. |
| 75.2 | pri̯.n =j m-ḏr,w tꜣ šzp sjꜣ =j r bsk n ꜥ(n)ꜥn zḫni̯.n =j ḥw,t.pl wꜥb.t jm,j.t ḏbꜣ,w? | יצאתי מתחום הארץ; רצוי מלבושי מקרבי הבבון; פגשתי את הבתים הטהורים אשר בתֵּבוֹת?; | `וַתִּקַּח לוֹ תֵּבַת גֹּמֶא` (שמות ב:ג); `עֲשֵׂה לְךָ תֵּבַת עֲצֵי גֹפֶר` (בראשית ו:יד) | cognate | המלה העברית `תֵּבָה` שאולה מן המצרית *ḏbꜣ.t* "ארגז, ארון־מת, מקדשון"; כאן היא במשמעה המצרי – ארון קודש או ארון־מת שבתוכו "בתים טהורים". |
| 78.1 | rʾ n jri̯.t ḫpr,w m bjk-nṯr,j ḏd-mdw jn […] mꜣꜥ-ḫrw j Ḥr,w mj jr =k | לחש לעשות צורה של הבז האֵלִי. דברים לאמר, בפי […] אמיתי־הקול: הוֹ חוֹרוּס, בוא אפוא | `תִּתְחַדֵּשׁ כַּנֶּשֶׁר נְעוּרָיְכִי` (תהלים קג:ה) | equivalent | `יַעֲלוּ אֵבֶר כַּנְּשָׁרִים` (ישעיה מ:לא) – העוף הדורס כדמות של חיים מתחדשים; במצרים זהו הבז של חוֹרוּס, והמת לובש אותו. |
| 78.2 | r Ḏd,w ḏsr =k n =j wꜣ,t.pl pẖr =k n =j ns,t.pl =j mꜣꜣ =k wj sqꜣi̯ =k wj jḫ ḏi̯! =k snḏ =j | אל גֶ׳דוּ! תקדש לי את האורחות, תסובב לי את כסאותיי, תחזה בי, תרומם אותי! תיתן אפוא את היראה ממני, | `הִנְנִי שֹׁלֵחַ מַלְאָכִי וּפִנָּה דֶרֶךְ לְפָנָי` (מלאכי ג:א) | equivalent | שליח שהדרך מפונה לפניו; כאן השליח מבקש שיפנו לו את הדרכים. |
| 78.6 | mdwi̯ nṯr ḥnꜥ nṯr sḏm =f mꜣꜥ,t ḏd =j n =f mdwi̯ n =j jr =k Wsjr ḏi̯! =k wḏb pri̯.t m rʾ =k r =j | מדבר אל עם אל; ישמע הוא את האמת אשר אומר אני לו. דבר אפוא אליי, אוֹסִירִיס! תיתן שייסוב היוצא מפיך נגדי! | `פֶּה אֶל פֶּה אֲדַבֶּר בּוֹ` (במדבר יב:ח) | equivalent | דיבור ישיר בין האל לשליחו. |
| 78.10 | n =j ḥr n jri̯ nkn =j jmi̯ =f jwi̯ mꜣꜣ =f bꜣg =j šmi̯ =j jwi̯ =j r ḥn,tj | לי את פני העושה לי חבלה! אל יבוא ויחזה ברפיוני! אלך ואבוא עד תכלית | `עַד-תַּכְלִית אוֹר עִם-חֹשֶׁךְ` (איוב כו:י) | equivalent | "תכלית" כגבול הקיצוני של העולם; כאן "תכלית השמים". |
| 78.13 | (j)ꜣḫ.w jw jri̯.n =j jr,w =j m jr,w =f jwi̯ =f pri̯ =f r Ḏd,w sꜥḥ.w | האורה. עשיתי את מראי כמראהו. יבוא הוא, ייצא הוא אל גֶ׳דוּ, מואצל | `וְאָצַלְתִּי מִן הָרוּחַ אֲשֶׁר עָלֶיךָ וְשַׂמְתִּי עֲלֵיהֶם` (במדבר יא:יז) | equivalent | העברת כוחו של בעל הסמכות אל שליחיו; כאן חוֹרוּס "מאציל" את השליח בבָּא שלו (78.19–20). השורש העברי בא מן התרגום הקבוע של *sꜥḥ* בקורפוס (`אציל`), ולא מן המצרית; ההקבלה במושג. |
| 78.15 | ꜥḥꜣ =sn ꜥrr.w,t =sn ḥr =j jnk pw jnk ꜣḫ jm,j jꜣḫ,w qmꜣ.n Jtm,w ḏs =f | ישגיחו הם על שעריהם בעדי. אני הוא, אני אָח שוכן־האורה, אשר יצר אָתוּם בעצמו, | `רְאוּ עַתָּה כִּי אֲנִי אֲנִי הוּא` (דברים לב:לט) | equivalent | "אני הוא" כהכרזת זהות. |
| 78.16 | ḫpr.w m wꜣb n jr,t =f sḫpr.n =f sꜣḫ.n =f ṯnj.n =f ḥr =s m wnn =sn ḥnꜥ =f jsṯ sw wꜥi̯.w m nw,w | אשר נהיה משורש עינו; אשר חולל הוא, אשר עשה לאָח, אשר הבליט הוא בשל כך, בהיותם עמו – והרי הוא לבדו בנוּן. | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | divergence | הבורא לבדו במים הראשונים (NU1 17.4); אך כאן הוא יוצר מעינו יצורים חיים – האָחִים, ה"תולעים" – בעודו בנוּן. |
| 78.18 | jr,t nb-wꜥ jsṯ n ḫpr.t ꜣs,t msi̯.t Ḥr,w jw =j srwḏ =j jw =j snḫḫ =j | עין האדון־היחיד, והרי טרם נהייתה אִיסִיס, אשר ילדה את חוֹרוּס. מחוזק אני, מחודש־נעורים אני, | `טֶרֶם יִהְיֶה בָאָרֶץ` (בראשית ב:ה) | equivalent | נוסחת ה"עוד לא" של הבריאה (§6.5); כאן היא מבחינה בין הדור הראשון של היצורים לבין דור האלים של אוֹסִירִיס. |
| 78.18 | jr,t nb-wꜥ jsṯ n ḫpr.t ꜣs,t msi̯.t Ḥr,w jw =j srwḏ =j jw =j snḫḫ =j | עין האדון־היחיד, והרי טרם נהייתה אִיסִיס, אשר ילדה את חוֹרוּס. מחוזק אני, מחודש־נעורים אני, | `תִּתְחַדֵּשׁ כַּנֶּשֶׁר נְעוּרָיְכִי` (תהלים קג:ה) | equivalent | חידוש הנעורים, ודווקא בפי עוף דורס. |
| 78.27 | m ḏbꜣ =j šdi̯.n n =j Rw,tj nms r =j rḏi̯.y n =j dmꜣ,t.du =j smn.n =f jb =j m jꜣ,t? =f zp-2 m | על כַּנִּי?. חילץ לי שני־אריות נֶמֶס אליי; ניתנו לי שתי כנפיי; קבע הוא את לבי בגֵוו (פעמיים), ב־ | `וָאֶשָּׂא אֶתְכֶם עַל כַּנְפֵי נְשָׁרִים` (שמות יט:ד) | equivalent | הכנפיים כמתנה של אל; כאן הבז מקבל את כנפיו בפקודת השומר. |
| 78.29 | jw ṯꜣw m ẖ,t =j n ḫsf.n wj kꜣ nšnj šmi̯ =j r bw ẖr,j sḏr(,w) jwi̯ ḫnt,j sḫ,t | רוח בבטני; לא הדף אותי שור־הרוגז. אלך אל המקום אשר תחת השוכב, חסר־הסירה אשר בראש שדה | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | הנשימה כסימן החיים בגוף; כאן היא "בבטנו" של המת (*ṯꜣw* = `רוּחַ`, לא `נְשָׁמָה`). |
| 78.35 | mꜣn! =j Wsjr nwn =j tp-ꜥ,wj =f nwn Nw,t mꜣꜣ =s wj mꜣꜣ wj nṯr.pl jr,t-Ḥr,w Mḫnt,j-n-jr,tj | חזיתי באוֹסִירִיס; אסתור (את שערי) לפניו. תסתור נוּת (את שערה) כשתחזה בי; יחזו בי הָאֵלִים, (בי,) עין־חוֹרוּס. מְחֶנְתִי־אֶן־אִירְתִי | `וְרֹאשׁוֹ יִהְיֶה פָרוּעַ` (ויקרא יג:מה) | equivalent | פריעת השער כסימן אבל וטומאה; במצרים זו מחוות האבל של אִיסִיס ונֶפְתִּיס על אוֹסִירִיס. |
| 78.38 | jri̯.pl wꜣ,t.pl ḏsr.t ḥmꜣ,tt ḥr nb bꜣ ꜥꜣ šfšf,t jw wḏ.n Ḥr,w fꜣi̯.t ḥr.pl =ṯn jw | העושים את האורחות הקדושים של חֶמָאתֶת בעד אדון־הבָּא, גדול־יראת־הכבוד! ציווה חוֹרוּס לשאת את פניכם; | `יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ` (במדבר ו:כו) | equivalent | "נשיאת פנים" כמחוות רצון; כאן הפקודה היא לשומרים להרים את פניהם ולהביט בשליח. |
| 78.49 | sqꜣi̯ =k wj wbꜣ =j dꜣ,t =k wn n =j wꜣ,t.pl jr,j.t p,t jr,j.t tꜣ nn ḫsf sw jm =j | תרומם אותי! אפער את הַדּוּאַת שלך; נפתחו לי האורחות אשר בשמים, אשר בארץ; אין המתייצב נגדי, | `שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם וְהִנָּשְׂאוּ פִּתְחֵי עוֹלָם וְיָבוֹא מֶלֶךְ הַכָּבוֹד` (תהלים כד:ז) | equivalent | פתיחת שערים לפני הבא בשם מלך; כאן השערים והדרכים של הַדּוּאַת נפתחים לשליח המלכותי. |
| 78.50 | qꜣi̯ ḥr s,t =k Wsjr sḏm =k nfr,t Wsjr wꜣḏ pḥ =k Wsjr ṯzi̯ =tw n =k tp =k Wsjr smn =tw n =k | הגבוה על מושבך, אוֹסִירִיס! תשמע טובה, אוֹסִירִיס! רעננים אחוריך, אוֹסִירִיס! מרימים לך את ראשך, אוֹסִירִיס! מקבעים לך | `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ` (בראשית מ:יג) | equivalent | הרמת הראש כשיקום מעמד וחיים (NU4 124.8); כאן הראש של אוֹסִירִיס המת "מורם". |
| 78.52 | zꜣ =k Ḥr,w ḫꜥi̯.w ḥr ns,t =k ꜥnḫ nb ḫr{y} =f bꜣk n =f ḥḥ.pl snḏ n =f ḥḥ.pl bꜣk n =f psḏ,t snḏ n =f psḏ,t jw ḏd.n | בנך חוֹרוּס מופיע על כסאך, כל חיים עמו; עובדים לו אלפי אלפים, חוששים ממנו אלפי אלפים; עובדת לו התשיעייה, חוששת ממנו התשיעייה. אמר | `אֶלֶף אַלְפִים` (דניאל ז:י) | equivalent | "אלף אלפים ישמשוניה": אלפי אלפים משרתים את היושב על הכס. |
| 78.55 | ḥḥ.pl sꜥnḫ =f ḥḥ.pl m jr,t =f wꜥ,t nb =s nb,t-r-ḏr | אלפי אלפים, יחיה הוא אלפי אלפים בעינו, היחידה של אדוניה, גברת־הכל." | `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל א ב:ו) | equivalent | האל המחיה; כאן חוֹרוּס המלך "יחיה אלפי אלפים" בעינו. |
| 65.4 | n Wsjr n-zp wn! =j m zmꜣ,yt Swtj j ḥmsi̯ ḥr qꜣb =f ḫnt,j wsr bꜣ | לאוֹסִירִיס! אף פעם לא הייתי מחבורת סֵת. הוֹ היושב על פיתוליו, אשר בראש חסין־הבָּא, | `אַל תָּשֶׁת יָדְךָ עִם רָשָׁע` (שמות כג:א) | equivalent | הצהרה שלא היה מחבורת הרשעים; כאן – לא מחבורת סֵת, רוצח אוֹסִירִיס. |
| 65.5 | ḏi̯! =k ḥmsi̯ =j ḥr s,t Rꜥ,w jṯi̯ =j ḏ,t =j ḫr Gbb ḏi̯! =k pri̯ mꜣꜥ-ḫrw Wsjr r Swtj rsw,t? | תיתן שאשב על מושב רַא, שאקח את גוויתי אצל גֶּבּ; תיתן שייצא אוֹסִירִיס אמיתי־הקול נגד סֵת. *המשמר*? | `שֵׁב לִימִינִי` (תהלים קי:א) | divergence | הישיבה על מושבו של האל כסימן ניצחון על האויב; כאן המת מבקש לשבת על מושב רַא. |
| 65.10 | ḏi̯! =k pri̯ =j r ḫftj{.pl} =j ḏi̯! =k mꜣꜥ-ḫrw =j r =s m ḏꜣḏꜣ,t n.t nṯr-ꜥꜣ m-bꜣḥ nṯr-ꜥꜣ jr ḥm tm =k | תיתן שאצא נגד אויבי, תיתן שאהיה אמיתי־הקול נגדו בוועד של האל הגדול, לפני האל הגדול. ואם לא | `שָׁפְטֵנִי אֱלֹהִים וְרִיבָה רִיבִי` (תהלים מג:א) | equivalent | המתפלל מבקש לזכות בדין נגד אויבו לפני האל. |
| 65.14 | pf jw =f rḏi̯ n =j jw =f km(.w) ẖr =j m ḏꜣḏꜣ,t | ההוא; נתון הוא לי, גמור הוא תחתיי בוועד. | `אֲשֶׁר נְתָנְךָ יְהוָה הַיּוֹם בְּיָדִי` (שמואל א כד:י) | equivalent | היריב "נתון" ביד מי שגבר עליו; אך דוד חס על שאול, והמת המצרי "גומר" את אויבו. |
| 67.7 | ꜥꜣ j psḏ wbn m ḥn,t | הגדול. הוֹ הזוהר, זרח בחֶנֶת! | `וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ` (תהלים יט:ו) | equivalent | השמש היוצאת ממקומה; כאן היא זורחת מן המים שבשמים. |
| 179.1 | rʾ n šmi̯.t m sf jy.t m pꜣ-hrw dbḥ =f | לחש ללכת אתמול ולבוא היום, כשהוא מבקש | `כִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר` (תהלים צ:ד) | equivalent | "אתמול" כעבר שחלף; כאן המת הולך אתמול ושב היום – המוות אינו אלא אתמול. |
| 141.1 | mḏꜣ,t jrr!.t z n jti̯ =f zꜣ =f rʾ-pw m ḥ(ꜣ)b.w n.w jmn,t sjqr =f pw ḥr jb n Rꜥ,w ḥr jb n nṯr.pl wnn ḥnꜥ =sn | המגילה אשר יעשה אדם לאביו או לבנו בחגי המערב: קידומו הוא בלב רַא, בלב הָאֵלִים, ולהיות עמם. | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא) | equivalent | חובת הבן לאביו; כאן היא חובה פולחנית אחרי המוות – לעשות לו את המגילה בחגי המתים. |
| 141.2 | ḏd.t hrw psḏn(,tw) ḏd-mdw jn […] mꜣꜥ-ḫrw wdn tʾ ḥ(n)q,t ꜣpd.pl šs m ꜣšr,t snṯr ḥr sḏ,t n Wsjr-ḫnt,j-jmn,tjw | ייאמר ביום חג־הירח־החדש. דברים לאמר, בפי […] אמיתי־הקול: הקרבת לחם ושֵׁכָר, עופות, שֵׁשׁ עם צלי, קטורת על השלהבת, לאוֹסִירִיס־אשר־בראש־המערביים; | `שֵׁשׁ בְּרִקְמָה מִמִּצְרַיִם` (יחזקאל כז:ז) | cognate | `שֵׁשׁ`, הבד המצרי המשובח, שאול מן המצרית *šs*. |
| 141.2 | ḏd.t hrw psḏn(,tw) ḏd-mdw jn […] mꜣꜥ-ḫrw wdn tʾ ḥ(n)q,t ꜣpd.pl šs m ꜣšr,t snṯr ḥr sḏ,t n Wsjr-ḫnt,j-jmn,tjw | ייאמר ביום חג־הירח־החדש. דברים לאמר, בפי […] אמיתי־הקול: הקרבת לחם ושֵׁכָר, עופות, שֵׁשׁ עם צלי, קטורת על השלהבת, לאוֹסִירִיס־אשר־בראש־המערביים; | `וְהִקְטִיר עָלָיו אַהֲרֹן קְטֹרֶת סַמִּים` (שמות ל:ז) | equivalent | קטורת על האש כחלק מן הפולחן היומי והחגי. |
| 141.89 | n Wsjr m Swn,w | לאוֹסִירִיס בסְוֵנֵה; | `מִמִּגְדֹּל סְוֵנֵה וְעַד גְּבוּל כּוּשׁ` (יחזקאל כט:י) | cognate | אותו שם, *Swnw*, כגבולה הדרומי של מצרים. |
| 190.109 | msi̯,wt-Wsjr ḥ(ꜣ)b-Zk{r}j grḥ n hꜣkr sštꜣ n dꜣ,t bz-štꜣ n ẖr-nṯr sḏ{r} | ביום הולדת־אוֹסִירִיס, בחג־סוֹכַּר, בליל הָאקֶר. סוד הַדּוּאַת, החדירה־אל־הסוד של חלקת־האל, השובר | `הַנִּסְתָּרֹת לַיהוָה אֱלֹהֵינוּ וְהַנִּגְלֹת לָנוּ וּלְבָנֵינוּ` (דברים כט:כח) | divergence | בתורה הנסתר שייך לאל והנגלה לעם; כאן הסוד נמסר לבני אדם מעטים, ושמירתו היא כוחו. |
| 190.110 | ḏw.pl wbꜣ jn,t.pl sštꜣ n rḫ rsj srwḫ{d} jb n ꜣḫ swsḫ nmt,t =f rḏi̯.t n =f šm,t =f dr | את ההרים, הפוער את העמקים; סוד שלא ידעו (אותו) כלל: ריפוי לב האָח, הרחבת צעדיו, נתינת הליכתו לו, הרחקת | `תַּרְחִיב צַעֲדִי תַחְתָּי` (תהלים יח:לז) | equivalent | אותו צירוף "להרחיב צעדים", במובן חופש ההליכה והצלחה. |
| 190.112 | nn rḏi̯.t mꜣꜣ ky ḥr nn ḥm jy(.w) m-rw,tj jri̯ =k m-ẖnw zḥ n ḥbs wdi̯ m sbꜣ.pl r-ḏr =f jr ꜣḫ | בלי לתת שיחזה (בה) פרצוף אחר, ולא משרת הַבָּא מבחוץ. תעשה (אותה) בתוך ביתן של בֶּגֶד, משובץ בכוכבים כולו. הנה האָח – | `וְאֶת הַמִּשְׁכָּן תַּעֲשֶׂה עֶשֶׂר יְרִיעֹת` (שמות כו:א) | equivalent | מקום קדוש של בד, נפרד מן החוץ; כאן ביתן של בד מעוטר בכוכבים – השמים בזעיר אנפין. |
| 190.114 | ḫsf =sn jw nṯr.pl jpn pẖr =sn sw sjꜣ =sn sw wnn.ḫr =f mj wꜥ jm =sn ḏi̯! =f rḫ =k ḫpr.t n =f m šw | הודפים אותם. הָאֵלִים הָאֵלֶּה – יסובבו אותו, יכירו אותו, ויהיה הוא כאחד מהם; יודיע הוא לך את אשר נהיה לו בשמש. | `הֵן הָאָדָם הָיָה כְּאַחַד מִמֶּנּוּ` (בראשית ג:כב) | equivalent | "כאחד מהם": האדם הנעשה כאחד האלים; שם הוא מגורש מן הגן, כאן המת מתקבל ביניהם. |
| 190.115 | mḏꜣ,t tn sštꜣ mꜣꜥ zp-2 n mꜣꜣ ḥꜣw-mr m bw-nb r-nḥḥ | המגילה הזאת – סוד אמיתי (פעמיים); לא יחזה בה האספסוף, (לא) שום אדם, לנצח. | `וְהָאסַפְסֻף אֲשֶׁר בְּקִרְבּוֹ` (במדבר יא:ד) | equivalent | `אספסוף`, ההמון המעורב שאינו מן הקהל; כאן הוא מי שאסור לו לראות את הסוד. |

### Parallels index (NU7)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 133.2 | jrr!.t hrw ꜣbd,w ḏd-mdw jn […] mꜣꜥ-ḫrw ḫꜥi̯ Rꜥ,w m ꜣḫ,t =f psḏ,t =f m-ḫt =f pri̯ nṯr m s,t | אשר תיעשה ביום חג־החודש. דברים לאמר, בפי […] אמיתי־הקול: מופיע רַא באופקו, תשיעייתו אחריו; יוצא האל ממקום | `וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ; יָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח` (תהלים יט:ו) | divergence | גם בתהלים השמש "יוצאת" ממקום מכוסה ורצה בדרכה; שם היא בריאה הנתונה לשבח האל, כאן היא האל עצמו, ופמלייתו אחריו. מוטיב משותף, לא מקור. |
| 133.4 | ṯzi̯ ṯw jr =k Rꜥ,w jm,j-kꜣ{r}j =f nsb =k ṯꜣw.pl ꜥm =k mḥ,yt ꜥm =k bqs,w | התרומם־נא, רַא אשר־במקדשו! תלחך את הרוחות, תבלע את משב־הצפון, תבלע את השדרה, | `עֹשֶׂה מַלְאָכָיו רוּחוֹת; מְשָׁרְתָיו אֵשׁ לֹהֵט` (תהלים קד:ד) | divergence | בתהלים הרוחות הן שליחי האל; כאן אל השמש "לוחך" ו"בולע" אותן: השמש השואבת אליה את האוויר. מוטיב משותף של הרוחות סביב אל השמים, בדמויות הפוכות. |
| 133.6 | ḥr ḫrw =k jp =k qs.pl =k sꜣq =k ꜥ,t.pl =k ḏi̯! =k ḥr =k r jmn,t nfr.t jwt! =k mꜣ(w)i̯.tj rꜥ,w-nb ṯwt | לקולך. תמנה את עצמותיך, תקבץ את איבריך, תשים את פניך אל המערב הטוב; תבוא, חדש, בכל יום. אתה | `חֲדָשִׁים לַבְּקָרִים רַבָּה אֱמוּנָתֶךָ` (איכה ג:כג) | divergence | באיכה חסדי האל "חדשים לבקרים"; כאן האל עצמו מתבקש לבוא "חדש בכל יום", כגוף שנאסף מחדש. מוטיב משותף של התחדשות יומית, לא מקור. |
| 133.9 | mꜣꜥ.n =sn jꜣ,w mj Rꜥ,w Wsjr […] mꜣꜥ-ḫrw wr ḏꜥr wrr,t Rꜥ,w | הקריבו הם הלל כמו לרַא. אוֹסִירִיס […] אמיתי־הקול – גדול, הדורש את הכתר־הגדול של רַא, | `אֶרֶץ אֲשֶׁר יְהוָה אֱלֹהֶיךָ דֹּרֵשׁ אֹתָהּ` (דברים יא:יב) | equivalent | `דרש` במובן "דאג ל־", כמו *ḏꜥr* כאן; קשר של מלים בלבד, לא של מוטיב. |
| 133.12 | nn ḥjp Wsjr […] mꜣꜥ-ḫrw nn wrḏ =f m tꜣ pn ḏ,t nfr ,wj mꜣꜣ m jr,t.du msḏr.du sḏm.wj m | לא ימהר אוֹסִירִיס […] אמיתי־הקול, לא ייגע הוא בארץ הזאת לעד. מה טוב לחזות בעיניים! האוזניים – מה שומעות הן | `יָרוּצוּ וְלֹא יִיגָעוּ יֵלְכוּ וְלֹא יִיעָפוּ` (ישעיהו מ:לא) | divergence | בישעיהו קווי האל "ירוצו ולא ייגעו"; כאן המת לא "ימהר" (לא יצטרך לרוץ) ולא ייגע לעולם. שני הטקסטים מבטיחים כוח בלי עייפות למי שנקשר באל. מוטיב משותף. |
| 133.12 | nn ḥjp Wsjr […] mꜣꜥ-ḫrw nn wrḏ =f m tꜣ pn ḏ,t nfr ,wj mꜣꜣ m jr,t.du msḏr.du sḏm.wj m | לא ימהר אוֹסִירִיס […] אמיתי־הקול, לא ייגע הוא בארץ הזאת לעד. מה טוב לחזות בעיניים! האוזניים – מה שומעות הן | `אֹזֶן שֹׁמַעַת וְעַיִן רֹאָה יְהוָה עָשָׂה גַם-שְׁנֵיהֶם` (משלי כ:יב) | equivalent | אותו זוג, עין ראה ואוזן שומעת; במשלי הם מעשי האל, כאן הם החושים שהמת מקבל בחזרה. מוטיב משותף. |
| 133.14 | n ḏd Wsjr […] mꜣꜥ-ḫrw mꜣ!.tn =f n wḥm […] mꜣꜥ-ḫrw sḏm.tn =f m pr štꜣ,w hꜣy | לא אמר אוֹסִירִיס […] אמיתי־הקול את אשר חזה, לא חזר […] אמיתי־הקול על אשר שמע בבית הסודות. צהלה | `סוֹד יְהוָה לִירֵאָיו` (תהלים כה:יד) | divergence | גם בתהלים יש "סוד" של האל שנמסר לנבחרים; אך שם הוא נמסר כדי "להודיעם", וכאן המת שראה את סודות הספינה מצווה לא לספר. מוטיב משותף. |
| 133.21 | jm =sn mꜣꜣ sw m(w)t.w ḫr =sn ḥr ḥr.pl =sn mꜣꜣ.tw =f m ẖr-nṯr m stw,t Rꜥ,w | מהם. יחזו בו המתים, ונופלים הם על פניהם; נחזה הוא בחלקת־האל בקרני־האור של רַא. | `וַיִּפֹּל אַבְרָם עַל פָּנָיו` (בראשית יז:ג) | equivalent | אותה מחווה, נפילה על הפנים לפני הנשגב; כאן המתים נופלים לפני המת המקודם כמו לפני אל. מוטיב משותף של המחווה, בלי קשר ספרותי. |
| 136A.5 | gꜣf.w ḫsf wꜣ,w ḥr,j wꜥr,t twy n.t Nw,t r rdw pwy n sb{ꜣ}g{w} jw | הקופים, ההודפים את הנחשול אשר על האפיק ההוא של נוּת, אל המדרגות ההן של סֶבֶּג; והרי | — | cognate | `קוֹף` – *gꜣf* היא צורה של *gf*, המלה המצרית שנשאלה לעברית (`קוֹף`, §4.2; מלכים א י:כב); כאן הקופים (הבבונים) הם המקלסים את השמש בזריחתה. |
| 136A.10 | r =f bḥn,w m ḏꜣi̯,w pf qni̯ jb =f ḏi̯! =k wsr Wsjr […] mꜣꜥ-ḫrw r nṯr.pl ꜣḫ.pl mt.w | נגדו, ומן הגדיעה כיריב ההוא! יאמץ לבו! תגרום שיהיה חסין אוֹסִירִיס […] אמיתי־הקול יותר מן הָאֵלִים, האָחִים, המתים | `חֲזַק וְיַאֲמֵץ לִבֶּךָ` (תהלים כז:יד) | equivalent | אותו צירוף, "יאמץ לב", במשאלה; בתהלים לקווה לאל, כאן למת הנשלח בספינה. העברית הטבעית ל־*qni̯ jb*, מתויגת. |
| 136A.23 | wnn =f m ꜣḫ mnḫ m jmn,t n m(w)t.n =f m-wḥm jw =f wnm =f zw{r}j =f m-bꜣḥ Wsjr rꜥ,w-nb jw sṯꜣ.tw =f | יהיה הוא אָח מעולה במערב, לא ימות שוב; אוכל הוא ושותה הוא לפני אוֹסִירִיס בכל יום; מובל הוא | — | divergence | "לא ימות שוב": המצרי מכיר מוות שני, השמדה גמורה של המת בעולם הבא, והלחש מגן מפניו. המקרא אינו מכיר מוות שני (המושג מופיע בספרות מאוחרת). |
| 136A.23 | wnn =f m ꜣḫ mnḫ m jmn,t n m(w)t.n =f m-wḥm jw =f wnm =f zw{r}j =f m-bꜣḥ Wsjr rꜥ,w-nb jw sṯꜣ.tw =f | יהיה הוא אָח מעולה במערב, לא ימות שוב; אוכל הוא ושותה הוא לפני אוֹסִירִיס בכל יום; מובל הוא | — | absent |  |
| 130.4 | qmꜣ =f Tfn,t šms sw jm,j.w-šms,w Wsjr […] mꜣꜥ-ḫrw | משליך הוא את תֶּפְנוּת; מלווים אותו אנשי־הפמליה. אוֹסִירִיס […] אמיתי־הקול | — | divergence | אָתוּם "משליך" (יורק) את תֶּפְנוּת: בבריאה המצרית שׁוּ ותֶפְנוּת נולדו מרוקו או מעיטושו של הבורא; כאן רַא עושה כך בכל בוקר מחדש. אין במקרא בריאה של אלים; הבריאה בדבר (בראשית א) והבריאה מגוף האל רחוקות זו מזו. |
| 130.9 | n šmi̯ Wsjr […] mꜣꜥ-ḫrw m jn,t kk.t n ꜥq Wsjr […] | לא הלך אוֹסִירִיס […] אמיתי־הקול בעמק החשוך, לא נכנס אוֹסִירִיס […] | `גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע` (תהלים כג:ד) | divergence | בתהלים המתפלל הולך בגיא החשוך ואינו ירא, כי האל עמו; כאן המת אינו הולך בעמק החשוך כלל. אותה דמות של עמק אפל, בשני כיוונים. מוטיב משותף. |
| 130.31 | ḥr,j-jb jr,t =f ḥmsi̯(.w) mꜣs{,t}(.w) m wjꜣ ꜥꜣ Ḫprj ḫpr Wsjr […] mꜣꜥ-ḫrw ḫpr ḏd.t =f Wsjr | אשר בתוך עינו, ביושבו כורע בצִי הגדול של חֶפְּרִי. נהיה אוֹסִירִיס […] אמיתי־הקול – נהיה אשר אמר. אוֹסִירִיס | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר` (בראשית א:ג) | divergence | גם כאן "נהיה אשר אמר": הדיבור מתממש. בבראשית האל הבורא אומר והעולם נהיה; כאן המת, בדמות חֶפְּרִי ("ההווה"), אומר והדבר נהיה – כוח הדיבור המאגי של מי שעבר לעולם האלים. מוטיב משותף של דיבור יוצר. |
| 89.1 | rʾ n rḏi̯.t ḥtp bꜣ ẖꜣ,t =f | לחש לתת לבָּא לנוח על גופתו. | `וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים אֲשֶׁר נְתָנָהּ` (קהלת יב:ז) | divergence | בקהלת הרוח עוזבת את הגוף לתמיד ושבה אל האל; כאן הבָּא, הנשמה המעופפת, עוזבת את הגוף ביום ושבה לנוח עליו. מוטיב משותף של הפרדת הנשמה מן הגוף, בשתי תפיסות הפוכות. |
| 154.1 | rʾ n tm rḏi̯.t zbi̯.y ẖꜣ,t ḏd-mdw jn […] | לחש לבלי לתת לגופה לגווע. דברים לאמר, בפי […]: | `לֹא-תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת` (תהלים טז:י) | divergence | גם בתהלים מבקש המתפלל שהאל "לא ייתן" לו לראות שחת; אך שם הבקשה היא להינצל מן המוות, וכאן – שגוף המת עצמו לא יירקב אחרי מותו. אותו מבנה, "לא תיתן", בשתי תקוות שונות. ה־`שחת` שמורה (§5.1) ואינה באה בשורה; פעלי הכליון המצריים מתורגמים כל אחד לפי מובנו. |
| 154.2 | j⁝nḏ-ḥr =k jti̯ =j Wsjr jy.n =j r srwḫ =k srwḫ =k jwf =j pn jw =j tm.kwj | שלום לפניך, אבי אוֹסִירִיס! באתי לרפא אותך – תרפא אתה את בשרי זה. שלם אני | `וּמִבְּשָׂרִי אֶחֱזֶה אֱלוֹהַּ` (איוב יט:כו) | divergence | איוב מצפה לחזות באלוה "מבשרו", אחרי שעורו נקף; כאן המת מבקש שבשרו עצמו יירפא וישתמר. שני הטקסטים קושרים את הבשר בגורל שאחרי המוות. מוטיב משותף, לא מקור. |
| 154.6 | wj kꜣ =k nn wjn =f wj šdi̯ =k wj m-ḫt =k kꜣ tm =j ḥwꜣ mj nw jri̯.n =k r nṯr | אותי הכָּא שלך – לא ידחה הוא אותי! תשלוף אותי אחריך – ואז לא אירקב, כמו זה אשר עשית לכל | `לֹא-תַעֲזֹב נַפְשִׁי לִשְׁאוֹל` (תהלים טז:י) | divergence | המתפלל בתהלים מבקש שהאל לא "יעזוב" אותו לשאול; המת המצרי מבקש שהכָּא של אוֹסִירִיס לא "ידחה" אותו אלא "ישלוף" אותו אחריו, ואז לא יירקב. מוטיב משותף של הצלה מכליון. |
| 154.7 | nb r nṯr,t nb.t r ꜥw,t nb.t r ḏdf,t nb.t zbi̯.ytj=f pri̯ bꜣ =f m-ḫt mt =f hꜣi̯ =f m-ḫt zbi̯.y =f swt pw | אל ולכל אֵלָה, לכל צאן ולכל זוחל אשר יגווע: יוצא הבָּא שלו אחרי מותו, יורד הוא אחרי שגווע. הוא זה | `כִּי מִקְרֶה בְנֵי הָאָדָם וּמִקְרֶה הַבְּהֵמָה וּמִקְרֶה אֶחָד לָהֶם כְּמוֹת זֶה כֵּן מוֹת זֶה` (קהלת ג:יט) | divergence | גם כאן אלים, בהמות וזוחלים שווים לפני הכליון; אבל קהלת מסיק "הכל הבל", והלחש מבקש לפרוץ את הגורל המשותף. מוטיב משותף. |
| 154.8 | ẖnn =f qs.pl =f tm.w ḥwꜣ =sn smꜣ.yw smꜣ.yw sgnn.yw qs.w jri̯.yw jwf m{ꜥ} ḏw | אשר מתעפש הוא: עצמותיו כולן נרקבות, השארים – הרוגים, העצמות – מרופות, הבשר נעשה לרע, | `כָּלָה שְׁאֵרִי וּלְבָבִי צוּר-לְבָבִי וְחֶלְקִי אֱלֹהִים לְעוֹלָם` (תהלים עג:כו) | equivalent | *smꜣ.yw* "הגוף, הבשר" תורגם `שאר`, מלת הבשר המקראית (`גוף` הוא *ḥꜥ.w*, §4.1); בתהלים "כלה שארי" ובכל זאת האל חלקו – כאן השאר נרקב, והלחש מבקש למנוע זאת. |
| 154.9 | snsn =f ḥwꜣ =f ḫpr =f m fnṯ ꜥšꜣ.w tm(.w) fnṯ tm(.w) jri̯ =f jw =f zbi̯.w n jr,t Šw m nṯr nb m nṯr,t nb.t | מבאיש הוא, נרקב הוא, נהיה הוא לתולעים רבות – תולעת כולו, כולו עושה (זאת)?; גווע הוא לעין שׁוּ, כמו כל אל, כמו כל אֵלָה, | `כִּי תוֹלַעְתָּם לֹא תָמוּת וְאִשָּׁם לֹא תִכְבֶּה` (ישעיהו סו:כד) | equivalent | התולעת אוכלת את גוף המת: בישעיהו זה עונש הפושעים לעד, כאן זה גורל כל גוף שאין לו לחש. *fnṯ* `תולעת` (תקדים NU4) – המלה העברית הטבעית, ותויגה. |
| 154.9 | snsn =f ḥwꜣ =f ḫpr =f m fnṯ ꜥšꜣ.w tm(.w) fnṯ tm(.w) jri̯ =f jw =f zbi̯.w n jr,t Šw m nṯr nb m nṯr,t nb.t | מבאיש הוא, נרקב הוא, נהיה הוא לתולעים רבות – תולעת כולו, כולו עושה (זאת)?; גווע הוא לעין שׁוּ, כמו כל אל, כמו כל אֵלָה, | `לָבַשׁ בְּשָׂרִי רִמָּה וְגיּשׁ (וְגוּשׁ) עָפָר` (איוב ז:ה) | equivalent | אותה תמונה של בשר שהתולעים מכסות אותו, אצל החי הסובל באיוב. |
| 154.16 | nn ḥwꜣ =k nn fnṯ.w =k nn fꜣi̯ =k nn snsn =k nn jm⟨k⟩ =k nn ḫpr =k m fnṯ.w jnk Ḫprj wnn ḥꜥ (=j) r ḏ,t | לא תירקב, לא יהיו בך תולעים, לא *תתפח*?, לא תבאיש, לא תמק, לא תהיה לתולעים. אני חֶפְּרִי – גופי יהיה לעד; | `הָמֵק בְּשָׂרוֹ וְהוּא עֹמֵד עַל רַגְלָיו` (זכריה יד:יב) | equivalent | `מק` של בשר, בזכריה כמכה; כאן *jmk* "לנמוק" נשלל מן הגוף. `תמק` – המלה העברית הטבעית ל־*jmk*, מתויגת. |
| 154.18 | ꜥnḫ.kw zp-2 rwḏ.kw zp-2 rs.n =j m-ḥtp n ẖn =j n ḥtm ꜣjs =j n (j)ꜣṯ =j | חי אני (פעמיים), איתן אני (פעמיים); הקיצותי בשלום. לא נפוח אני, לא נשמדו קרביי, לא ניזוק אני; | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | divergence | בבראשית שיבת הגוף אל העפר היא גורל כל אדם; כאן המת מכריז שגופו "חי, איתן" ולא נשמד. מוטיב משותף של גורל הגוף, בהיפוך. |
| 116.3 | ḥr =s jn sm n ḏd =j n r(m)ṯ.w n wḥm =j n nṯr.w ṯz-pẖr ꜥq.n =j m ḫm mꜣꜣ.n =j ⸢štꜣ,w⸣ | אליה בידי כוהן־הסֶם. לא אמרתי לבני האדם, לא חזרתי לָאֵלִים – ולהפך. נכנסתי כבור, חזיתי בסוד. | `סוֹד יְהוָה לִירֵאָיו` (תהלים כה:יד) | divergence | גם כאן הסוד נגלה למי שהוכנס, וגם כאן הוא שמור; כמו ב־133.14 – המת אינו מגלה אותו לבני אדם ולאלים. |
| 112.5 | Rꜥ,w n Ḥr,w dgꜣ mi̯ r pfꜣ rri̯ kmm wnn.jn =f ḥr dgꜣ.t =f ꜥḥꜥ,n kꜣ,yw n jr,t =f | רַא לחוֹרוּס: "הבט־נא אל החזיר השחור ההוא!" אז הביט הוא בו; ואז *הכאב*? בעינו | `וְאֶת הַחֲזִיר כִּי מַפְרִיס פַּרְסָה הוּא וְשֹׁסַע שֶׁסַע פַּרְסָה וְהוּא גֵּרָה לֹא יִגָּר; טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | divergence | ראו 112.8. |
| 112.8 | m šꜣj kmm ꜥḥꜥ,n p{f}si̯.n =f sq{r}j pf jm,j jr,t-Ḥr,w ḏd.jn Rꜥ,w n nn n nṯr.pl bw,t šꜣj n Ḥr,w | לחזיר שחור". ואז צרב הוא את המכה ההיא אשר בעין־חוֹרוּס. אז אמר רַא אל הָאֵלִים הָאֵלֶּה: "תועבה – החזיר לחוֹרוּס! | `וְאֶת הַחֲזִיר כִּי מַפְרִיס פַּרְסָה הוּא וְשֹׁסַע שֶׁסַע פַּרְסָה וְהוּא גֵּרָה לֹא יִגָּר; טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | equivalent | איסור החזיר: במקרא הוא "טמא" לכל ישראל לפי סימני הטבע; כאן הוא "תועבה" לחוֹרוּס (ולמי שנעשה כמוהו) לפי מיתוס – החזיר הוא סֵת שפגע בעינו. המצרים עצמם אכלו חזירים, והטאבו היה פולחני ומקומי. מוטיב משותף של טאבו החזיר, בשני הסברים שונים לגמרי; קשר ספרותי אין להוכיח. |
| 112.8 | m šꜣj kmm ꜥḥꜥ,n p{f}si̯.n =f sq{r}j pf jm,j jr,t-Ḥr,w ḏd.jn Rꜥ,w n nn n nṯr.pl bw,t šꜣj n Ḥr,w | לחזיר שחור". ואז צרב הוא את המכה ההיא אשר בעין־חוֹרוּס. אז אמר רַא אל הָאֵלִים הָאֵלֶּה: "תועבה – החזיר לחוֹרוּס! | `הָאֹכְלִים בְּשַׂר הַחֲזִיר וּפְרַק (וּמְרַק) פִּגֻּלִים כְּלֵיהֶם` (ישעיהו סה:ד) | divergence | בישעיהו אכילת החזיר קשורה לפולחן בקברים, כלומר לפולחן מתים; בספר המתים המת נמנע מן החזיר כדי להיות כחוֹרוּס. מוטיב משותף של חזיר ומתים, בכיוונים הפוכים. |

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
| 69 | m =ṯn wj jy.kw ḫr =ṯn nn jzf,t =j nn ḫbn,t =j nn ḏw,t =j nn mtr,w =j | הנה אני בא אליכם; אין לי עוול, אין לי אשמה, אין לי רעה, אין לי עֵד, | `לֹא-יָקוּם עֵד אֶחָד בְּאִישׁ לְכָל-עָוֹן` (דברים יט:טו) | equivalent | אין עד, אין משפט. |
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
