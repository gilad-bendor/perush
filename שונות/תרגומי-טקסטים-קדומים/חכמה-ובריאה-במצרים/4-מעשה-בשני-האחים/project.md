# Project 4: the Tale of the Two Brothers (`מעשה בשני האחים`)

## Scope
The whole tale on pD'Orbiney (pBM EA 10183) recto, KEY `TB`: 185 lines (page,line `1,1`–`19,10`) and the colophon (`20,1`,
written for the crown prince Seti-Merenptah, the later Seti II; c. 1200 BCE). Late Egyptian, the language of Amenemope
(project 1). Round 5 run 6 (2026-10-31); the plan row: `../../curated-translation-candidates.md`, "Round 5 plan", run 6.

The story: Anubis, the elder, and Bata, the younger, live in one house; the elder's wife tries to seduce Bata, is refused,
and accuses him; Bata flees, swears his innocence by cutting off his phallus, and goes to the Valley of the Cedar, where
he puts his heart on the top of a cedar flower; the gods (Khnum) build him a wife; Pharaoh takes her (the lock of hair
in the river); she has the cedar cut, Bata dies, his brother finds his heart; Bata returns as a bull, as two persea
trees, as a splinter the queen swallows, is born as her son and becomes king.

## Base text
AED-TEI `C6HNRC4K7FAYBHNDS3LV24EANI` (TLA 2018), CC BY-SA 4.0 (`../../sources/AED-TEI/Two-Brothers--pDOrbiney-BM-EA-10183/`).
Rank 3: the TLA's German (`egypt_tools.py tr TB`), read only after drafting; the modern translations (Lichtheim AEL II,
Simpson, Wente) only from memory, never quoted verbatim. The four mid-line `[…]` (1,8, 3,8, 5,4, 7,1) are real losses
(the TLA's German has `[---]`).

## What to look for (briefs say "look for", never "translate as")
- **Gen 39** (Joseph and Potiphar's wife): the seduction ("come, let us spend an hour lying together", 3,7), the
  refusal and its reason ("you are like a mother to me", 3,9–3,10; to be checked on the lines), the false accusation with the wife's staged
  beating (4,8–5,3), the brother's anger (5,4 "like a leopard"), the flight. Gen 39's words are gated (renderings §11.4).
- **Gen 2:21–23** (the wife built by a god: Re-Harakhti tells Khnum "build (qd) a wife for Bata", 9,6–9,7, qd =
  `בָּנָה`); the Seven Hathors decree her death (9,8–9,9). (Line numbers here were checked on the base by the coordinator.)
- **Gen 37:31–35** (a garment / a token brings the news of death: Bata's sign, the beer that foams), **Gen 41**
  (Pharaoh, his scribes and magicians, `חַרְטֻמִּים`?), **Ex 2** (a lock of hair carried by the river to Pharaoh's
  launderers).
- The land of the cedar (Lebanon) as the land of exile; the heart on the tree (the external soul).

## TB 1,1–9,9 (part 1; Round 5 run 6, translator 1, 2026-10-31)

### Scope
Labels 1,1–9,9 (86 entries, incl. the one-word label `7,7-7,8`): the household, the ploughing, the seduction and
refusal (3,5–4,2), the staged beating and the lie (4,3–5,4), the warning cows and the flight (5,5–6,8), the oath and the
self-castration (6,9–7,9), the heart on the cedar (8,1–8,9), the castle and the wife built by the gods (9,1–9,9).
Well preserved; the five mid-line `[…]` (1,8, 2,2, 3,8, 5,4, 7,1) are real losses. Part 2 (10,1–20,1) is left as a
placeholder.

### Sources consulted
AED-TEI line data (`egypt_tools.py data TB`); the TLA's German (`tr TB`), read after each section was drafted (one
exception: 9,3's syntax, read before drafting that line, recorded in its entry); Lichtheim AEL II and "the usual
reading" from memory only (never quoted verbatim). Bible verses printed / checked with `check_bible_quotes.py`.

### Decisions
- **The brothers:** ꜥꜣ "the elder" = `הַגָּדוֹל` (AM's ꜥꜣ); šrj (both TLA lemmas, the noun tla156650 and the adjective
  tla600257) = `הַקָּטָן`. Rejected `צָעִיר` (AM's nḏs) and AM's `זוטר` (šrj of social rank, AM 25.20, 26.1: not a tale
  register). Reason: Hebrew `הגדול / הקטן` is the Bible's own elder/younger pair (Gen 27:15, 42:13), and `קטן` also
  means "child", so 1,2 keeps the Egyptian repetition (*sn šrjw … mj-sḫrw-n šrjw* "like a (son) little one"). Collision:
  AM 2.13 ktj `הקטן` (one line) – a proposal below.
- **Narrative frame:** wn.jn / ꜥḥꜥ.n = `ואז` + past; ḫr-jr = `והנה` (1,1, 2,2, 5,7; the coordinator's §11.6, was `ובכן`); ḫr-jr-m-ḫt = `ואחרי כן`;
  j.n=f (ḥr ḏd n=f) = `– כך אמר לו` (one Hebrew verb for the quotative + infinitive); m-ḏd / r-ḏd = `לאמור`; ḫr (particle)
  = `הרי` (kept three times in 3,9–3,10 and in its copies 5,2, 7,4–7,5); js / jstw = `ואכן` (js bn, interrogative, `הלא`);
  jr (topic) = `הנה`, jr "if" = `אם`; jḫ "then, so" = `אפוא` (8,2, 9,6), jḫ "what?" = `מה`; wꜥ-n (indefinite article) not
  translated.
- **Formulas fixed by their first copy:** the dawn `ואחרי כן – האירה הארץ, ויום שני נהיה –` (1,8; 2,5–2,6; 7,2: ḥḏ tꜣ
  as AM 9.18, ḫpr = `נהיה`); `ימים רבים אחרי זה` (1,4; 2,7–2,8; 8,8; 9,1); `כמנהגו של כל יום` (sḫrw n rꜥ-nb, 1,5; 4,8;
  4,9; 5,7); "like a southern leopard" `נהיה … כנמר־הדרום` (3,8 the younger; 5,4–5,5 the elder); the proposal
  `בוא, נעשה לנו [שעה], נשכב` (3,7) and its two repetitions without n=n (5,1 `בואי, נעשה שעה, נשכב` in the wife's lie,
  7,6 in Bata's truth); `אצלי כמנהג אם / אב` (3,9–3,10 → 5,2 reversed by the wife → 7,4–7,5 by Bata); `לא אהיה במקום שאתה
  בו; אלך אל עמק הארז` (7,1–7,2 → 8,3 with ꜥḥꜥ `אעמוד` and n=j `לי`); `כי דבר־מה נהיה לי` (8,3–8,4; 8,6).
- **Gen 39's words (the tale gates, held):** sḏr = `שכב` (3,7, 5,1, 7,6; also the cattle 1,7, 4,5 and the "lying" wife
  4,8–4,9); ḥbs = `בגדים` (1,2, 3,8); mḥ m "seize" = `אחז` (3,7), not `תפס` (Gen 39:12 `וַתִּתְפְּשֵׂהוּ`); wꜥr "flee" =
  `ברח` (6,3), not `נס` (Gen 39:12–18); rwj tw "remove yourself" = `הסתלק` (5,9); the refusal is rendered as the Egyptian
  has it, a rage (`זעם`), and Anubis's anger the leopard simile – the roots מאן / סרב / חרה never appear; rḫ "know
  (sexually)" = `ידע` (3,6) [equivalent Gen 4:1]; m-mn.t "daily" = `יום יום` (3,6, the natural word; [equivalent] Gen 39:10).
- **Words fixed (TB):** sn `אח`; ḥm.t `אשה` (and s.t-ḥm.t 9,6–9,7 `אשה` too: a proposal); hꜣy "husband" `בעל`; ꜥḥꜣwtj `גבר`;
  ꜥḏd "youth" `העלם` (`נער` is AM's ẖrd); jꜣw.t `עדר`; jḥ `בקר` (collective, plural verbs as Job 1:14), jḥ.t `פרה` (HC);
  mnjw `רועה`; jhꜣ.t "stall" `רפת` (Hab 3:17); sḫ.t and ꜣḥ.t `שדה` (AM; `אדמה` reserved); stjmw `ירק` (Num 22:4); skꜣ `חרש`;
  ꜥwꜣj `קצר`; pr.t "seed-corn" `זרע`; jt `שעורה`, bd.t `כוסמת` (§11.3); ẖꜣr `שק`; ḥtr `צמד`; mḥr "granary" `מחסן` (AM);
  dmj `עיר`, njw.t "village" `כפר`; wpw.t `שליחות`; sḫrw "manner" `מנהג` / "matter" `עניין` (2,5) / "counsel" `עצה` (9,3, AM);
  bꜣk `עבד`, bꜣk.w `עבודה`, rʾ-ꜥ-bꜣk.w `מעשה`; wḥꜥ "go home" `שב` (AM's wḥꜥ "explain" `פירש`: split by sense); ꜣtp `טען` /
  stative `טעון` (AM) / ꜣtp.t `משא`; wꜣḥ `שת` (AM; stative 8,7 `מונחת`); rḏj "give" `נתן`, "let" `הניח`, "put" `שם`,
  "cause" `נתן ש־` (5,5, 6,6); mdwj `דיבר` (4,10's "quarrel" sense noted); smj "utterance" `אמירה` (3,8; 4,6; 5,4: the
  wife hands her "evil utterance" to Bata); btꜣ `פשע` (AM); ꜥḏꜣ "falsehood" `שקר` (n ꜥḏꜣ `בשקר`), ꜥḏꜣ "the false one"
  `השקרן` against mꜣꜥ.tj `האמיתי` (6,5, 7,1: `צדיק` reserved); grg (m-grg) `בכזב` (7,4, 7,8: see proposals); snḏ `חשש`
  (AM); qnqn `היכה` (AM's noun `מכות`), ḥwj `הכה` / `הכאה` (AM, MK); ẖdb `המית` (smꜣ = `הרג`); snḏm `נעים` (AM); ꜣbj
  `חפץ` (2,1 the cattle, 9,9 Bata); qd `בנה` (9,1, 9,6); šꜥd `כרת`; ḥnw "phallus" `איבר`; nꜥr `שפמנון`; ꜥm "swallow" `בלע`,
  ꜥm "learn" `הבין` (7,7, 8,4, 8,6); ḫꜣꜥ "leave" `עזב` / "throw" `הטיל` (AM's split); ḥtp (the sun) `נח` (5,7: the sun
  "rests" – the corpus word kept, the Egyptian image with it); wbn `זרח`; Jtn `האָטוֹן`; smꜣꜥ `התפלל` (AM 10.12); wpj
  "judge between" `פסק בין` (6,5) / "litigate with" `נשפט עם` (7,1; 1 Sam 12:7); ꜥrq `נשבע`; ꜥš "call" `צעק`; ḏꜣj `צלח`;
  gnn `רפה` (`חלש` is AM's qbb / ṯnj); ẖsj `עלוב`; ḥꜣ.tj `לבב`, jb `לב` (as §4.1); šdj `חלץ` (AM); ḥrrw `פרח` (TLA "Krone
  (?)"); ꜥš `ארז` (§11.2); ḥnq.t `שֵׁכָר` ★; stf `קצף` ("foam"); ft `קץ`; wšb (verb) `ענה`, wšb.t `תשובה`, ꜥn "return" `השיב`;
  thꜣ `פגע`; psḏ.t `התשיעייה`; kꜣ "bull" `שור`; jrj.t-n-ḥmsj "wife" `יושבת־עמו` (literal, keeps ḥmsj `ישב` of 9,6–9,7);
  dm.t `חרב`; bḫn `מבצר`; msḥ `תמסחים`; ḥfꜣw not in this part.
- **Names:** `אַנוּבִּיס`, `בָּטָה` (§11.2); Rꜥ-Ḥrw-ꜣḫ.tj = `רַא־חַרְאַחְתִּי` (new; vocalized always for רַא); Pꜣ-Rꜥ ("Pre") =
  `רַא` (the article not rendered: a note at 6,5); Ḫnmw `חְנוּם`; `שבע החתחורות`; `עמק הארז`.
- **Rejected:** `תפס`, `נס`, `נער`, `צעיר`, `זוטר`; the Semitic reading of pd~jrʾ (4,6) as `פֶּדֶר` is an open
  question, the TLA's "Verband" `תחבושת?` kept.

### Open decisions for the user
1. 4,6 *pd~jrʾ* – the TLA's "Verband" (`תחבושת?`) or a Semitic loan *pdr* "suet" (`פֶּדֶר`, Lev 1:8)? Not checked in a
   lexicon (Hoch's *Semitic Words* is not in the folder).
2. 7,8 *tꜣ-ḥwꜣ.t* – the TLA's "die alte" or "the stinking one" (`*סרוחה*?`, kept with an asterisk).
3. 9,5 *jw=k ꜥn* – the TLA reads it as a Third Future ("you will call him to account"); the morphology tags ꜥn as a
   stative ("you are avenged"). The Hebrew follows the future.
4. šrj `הקטן` vs AM's `זוטר` / ktj `הקטן` (see proposals).

### Progress log
- Drafted 1,1–9,9 in seven sections, each saved, filled and verified at once; the TLA read after each section and its
  differences recorded in the entries (1,2: Bata is the one who makes the clothes – the note and the Gen 37:3 contact were
  corrected; 2,10: *jw=tw ḥmsj ḥr nbd=st* "one sitting braiding her" – rendered impersonally; 9,5: future, not past).
- Pass (a) fidelity: brackets checked against the base (1,3 `[אחיו]`, 1,6 `[של]`, 4,3 `[אל]`, 4,5 `[אשר]` added; the
  rule: a restored preposition / converter rendered by a Hebrew prefix has no bracket, rendered by a separate word has
  one – written into the header); wꜥ-n no longer rendered `אחד` (3,3, 8,2).
- Pass (b) consistency: the repeated formulas above aligned (2,7–2,8 dashes); 4,1 ꜥn `שוב`; 6,3 wꜣḥ `שת` (was `הניח`,
  which is rḏj's).
- Pass (c) Hebrew: the generated `translation-TB.rtl.md` read through; imperatives vocalized (`עֲשֵׂה`, `לֵךְ`, `פְּתַח`,
  `קוּמִי`, `מַהֵר`, `הָבֵא`, `עֲמוֹד`).
- `verify TB`: 0 problems (the part-2 placeholder is a note); `build`; `check_bible_quotes.py` on the three files: 0
  problems; `build_parallels_index.py` run (the table below regenerated).
- **Gate notes (the two `רוח` notes removed after the coordinator's gate fix):** three right words were caught by gates and passed with `[היתר שער: …]` in the entry: `לברוח` (6,3) and
  `מרוח` (8,7) by the `רוח` gate (prefix class reads ל־ב־ / מ־ as prefixes), and the draft `השבת` "you returned" (9,5,
  later changed to the future `תשיב` for the grammar, not for the gate).

### The text on its own terms
- **One house, one family hierarchy:** the elder is master and "father", his wife "mother", the younger a son-servant who
  makes the clothes, ploughs, harvests and sleeps with the cattle (1,1–1,7; 3,9–3,10).
- **The cattle speak and are heard** – no miracle, the nature of Bata, the bull-god's name-bearer (1,10; 5,8–6,1); the
  herd thrives because the herdsman listens (2,1).
- **Joy in work** before the fall: "their heart was pleasant at their work" (2,7).
- **The seduction as a bargain** ("it will profit you; I will make you fine clothes", 3,7–3,8) – reversing the household
  order (1,2).
- **The lie as a mirror:** the wife repeats her own words and Bata's refusal with the speakers exchanged (5,1–5,2), and
  stages her body as evidence (fat, bandage, vomiting, the dark house, 4,6–4,10).
- **The sun as judge:** Bata prays to Re-Harakhti "who judges between the false and the true", the god acts at once
  (water full of crocodiles), and the trial takes place at sunrise "before him" (6,4–7,3).
- **Purity by sacrifice:** the oath and the castration, the phallus swallowed by a catfish – Osiris's myth in the
  background (7,7–7,9).
- **The external heart:** the heart laid on the cedar's flower, life bound to the tree, the cold water that will revive
  it, the foaming beer as the sign of death (8,4–8,6).
- **Mourning and punishment:** hand on the head, earth on the body; the wife thrown to the dogs – no burial, no afterlife
  (8,7–8,8).
- **Gods walking the earth** take pity on the lonely man; one god commands, another (the potter Khnum) makes; "every god
  in her"; the Seven Hathors decree her death at her making (9,2–9,9).
- **Wordplay:** šrj "little / child" (1,1–1,2); ꜥmꜣm "learn" / ꜥmꜣm "swallow" (7,7, 7,9); sḫpr "raise" from ḫpr (3,10);
  ḥtp, the sun "resting" (5,7).

### Key parallels
- 3,7 / 5,1 ↔ Gen 39:7, 12, 14 (`שִׁכְבָה עִמִּי`) [equivalent]: the same proposal; in Egyptian "let us make an hour,
  let us lie"; she seizes him but no garment stays in her hand [divergence].
- 4,1 ↔ Gen 39:9 (`הָרָעָה הַגְּדֹלָה הַזֹּאת`) [equivalent]: "this great offence", without "and sin against God".
- 3,10 ↔ Gen 39:8–9 [divergence]: the refusal grounded in kinship ("like a mother / father"), not in the master's trust.
- 3,6 ↔ Gen 39:10 (`יוֹם יוֹם`) [equivalent]; 5,2 ↔ Gen 39:10 (`וְלֹא שָׁמַע אֵלֶיהָ`) – the wife says "I did not listen to
  him" [divergence].
- 4,6–5,3 ↔ Gen 39:14–19 [divergence]: the staged beating against the garment and the household witnesses; she demands
  his death.
- 9,6 ↔ Gen 2:22 (`וַיִּבֶן … לְאִשָּׁה`) [equivalent]: qd `בנה` – a god "builds" a woman for the man; 9,6–9,7 ↔ Gen 2:18
  (`לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ`) [equivalent]: "that he may not dwell alone".
- 8,8 ↔ Gen 39:20 [divergence]: the wife, not the youth, is punished; 2 Kgs 9:10 (the dogs) [equivalent].
- 6,3 ↔ Gen 27:43; 6,4 ↔ Gen 32:12 [equivalent]: the younger brother fleeing the elder who would kill him, and his prayer.
- 6,5 / 7,1 ↔ 1 Sam 24:15, 12:7 [equivalent]: the god as judge "between me and you", "to be judged with you before".

### Lines shared with other texts
None copied. Shared strings with AM: `האירה הארץ` (ḥḏ tꜣ, AM 9.18), `התפלל אל האָטוֹן … זורח` (AM 10.12), `להשיב תשובה`
(ꜥn wšb.t, AM 1.6 → TB 9,5 `תשיב לו תשובה`).

### Proposals for the shared renderings
1. **šrj (tla156650, tla600257) = `קָטָן`** in the tales (elder / younger: ꜥꜣ `גדול` / šrj `קטן`), AM's `זוטר` kept for the
   social sense (AM 25.20, 26.1) as a split by sense; AM 2.13 ktj `הקטן` shares the word (one line) – recorded.
2. **grg "lie, falsehood" = `כָּזָב`** (TB 7,4, 7,8 `בכזב`), to keep ꜥḏꜣ = `שֶׁקֶר` (AM, TB 4,6–4,8); §11.3's "grg = שֶׁקֶר"
   (for BD) would put two Egyptian lemmas in one Hebrew word. ꜥḏꜣ "the false one" `השקרן` against mꜣꜥ.tj `האמיתי`.
3. **The narrative particles of Late Egyptian:** ḫr-jr `והנה` (settled by the coordinator; `ובכן` stays AM's ḫr-rʾ-ꜥ; in TB 8,6 ḫr-rʾ-ꜥ
   "still" is `עוד`), ḫr-jr-m-ḫt `ואחרי כן`, j.n=f `– כך אמר`, ḫr `הרי`, js / jstw `ואכן`, jḫ `אפוא` / `מה`, wꜥ-n untranslated.
4. **Names:** Rꜥ-Ḥrw-ꜣḫ.tj `רַא־חַרְאַחְתִּי`; Pꜣ-Rꜥ `רַא`; the dawn formula `האירה הארץ, ויום שני נהיה`.
5. **Household and farm words** for the other tales: ḥm.t / s.t-ḥm.t `אשה` (two lemmas – keep or split?), hꜣy `בעל`, ꜥḥꜣwtj
   `גבר`, ꜥḏd `עלם`, jhꜣ.t `רפת`, jḥ `בקר`, jḥ.t `פרה`, mnjw `רועה`, jꜣw.t `עדר`, stjmw `ירק`, ẖdb `המית`, wꜥr `ברח`, bḫn
   `מבצר`, njwj `חנית`, dm.t `חרב`, sfd-gš `סכין־קנה`.
6. **Gate fix (for the coordinator):** the `רוח` gate's prefix class `[ובלמהכש]{0,3}` reads `לברוח`, `ברוח`, `מרוח`
   (`ברח`, `מרח`) as `רוח` – exclude these forms (and `השבת` "you returned" from the שבת gate) or license them by wꜥr / wrḥ.

### Lessons for the guidelines
- A gate's prefix class must be tested on the verbs whose roots end in ־רח / ־שב (`ברח`, `מרח`, `השיב`), not only on nouns.
- In Late Egyptian narrative the indefinite article wꜥ-n should be fixed as "not translated" before the first line, or it
  drifts into `אחד` in some lines.

## TB 10,1–20,1 (part 2; Round 5 run 6, translator 1, 2026-10-31)

### Scope
Labels 10,1–20,1 (99 entries): the sea and the lock of hair (10,1–11,5), Pharaoh's envoys and the wife's betrayal,
Bata's death (11,6–12,10), the brother finds the heart (13,1–14,5), Bata as a bull (14,6–15,10), the bull's death and
the persea trees (16,1–17,5), the splinter and the son (17,6–18,10), Bata's kingship, the trial of the wife and the
colophon (19,1–20,1). The only large restoration is the formula in 19,2–19,3.

### Coordinator decisions applied (§11.6)
ḫr-jr = `והנה` (part 1: 1,1, 2,2, 5,7 changed from `ובכן`; part 2: 16,7); ḫr-rʾ-ꜥ "still" `עוד` (8,6); šrj `קטן`, grg
`כזב`; the two part-1 gate notes (`לברוח`, `מרוח`) removed after the gate fix.

### Decisions
- **Fixed strings repeated:** the dawn formula (12,7; 13,6; 14,9–15,1; 16,6), `ימים רבים אחרי זה` (10,4; 11,7–11,8; 15,7;
  17,3; 17,8–17,9; 18,6; 19,1; 19,2 restored), `כמנהגו של כל יום` (10,4; 13,9), and a night variant `ואחרי כן – לילה
  נהיה –` (13,9). Commands and fulfilments copy each other: 8,5 → 13,5 (`עשה … שנים בחיפושו`), 8,5 → 13,8–13,9
  (`קערה של מים צוננים`), 8,6 → 12,9 (`ונתנו לו גביע של שֵׁכָר, והוא עשה קצף`), 7,1 → 19,5 (`נשפט עמה לפניהם`), 14,8 →
  15,4 (`פלא גדול`), 16,2–16,4 → 17,9–18,1 (the feast, `והיה טוב לו עמה`, the oath `תן לי שבועה באֵל`), 12,4 → 18,1 (`תן
  שיכרתו`), 6,7 → 16,9–16,10 (`האחד … על הצד האחד … והאחר על האחר`).
- **New words:** y~mꜥ "sea" `ים` [cognate: Semitic loanword]; nḥm `הציל` (§11.3); ꜥḥꜣ "fight" `נלחם` / "quarrel" `רב`
  (split by sense, 10,3 / 10,9–11,2; jrj-ꜥḥꜣwtj `בעל־ריב` 19,10); wpj "open (the heart)" `גילה` (10,3; "judge" `פסק` /
  "litigate" `נשפט` stay); nbd.t "lock" `קליעה`, šnj `שער`; rḫtj `כובס`, ḥrj `ראש`; stj `ריח`, sgnn `משחה`; mrj.t `מזח`;
  ḫꜣs.t "hill" `תל` (11,2) / "foreign land" `ארץ־נכר`; zẖꜣ.w `סופרים`, rḫ.w-jḫ.t `יודעי־הדברים`; šrj.t "daughter" `בת`
  (11,5: split by sense from šrj `קטן`); mw "water, seed" `מי` (11,5); nḏ.t-ḥr `תשורה`; wpwtj `שליח` (wpw.t `שליחות`);
  rmṯ-mšꜥ `אנשי־צבא`, tj-n.t-ḥtrj `אנשי־הצמדים` (ḥtr `צמד`); sꜥb `עדי`; nhm `צהל`; mrj `אהב`; dhn `מינה`; špsj.t (ꜥꜣ.t)
  `(ה)גבירה (הגדולה)`; sksk `קיצץ`; ḥmt "copper (tools)" `נחושת`; jrp `יין`, ḥwꜣ.w `ריקבון`; ḥꜥw `מקל`, ṯbw.t `נעל`,
  ḫꜥ.w n rʾ-ꜥ-ḫt `כלי מלחמה`, mšꜥ `צעד`; ḥꜥtj `מיטה`; jꜣrr.t `ענב`; nš `רעד`, qnj `חיבק`, jrj "companion" `חבר`; jwn
  `צבע`; psd `גב`; ršw `שמח`; ꜥbt `מנחה`, wdn `זבח`, mꜣꜥ `הקריב`; wꜥb.t `בית־הטוהר?`; hrw nfr `יום טוב`; wḏḥ `מזג`;
  mjs.t `כָּבֵד`; ktkt `ניער`; snf `דם`, bnš `מזוזה`, tꜣ-ꜥꜣ "gate" `שער`; šwꜣb `עץ־פרסאה`; ḫꜥj `הופיע`, sšd `חלון`,
  ḫsbḏ `ספיר`, mꜣḥ `זר`, wrrj.t `מרכבה`, ḏꜥm `זהב־לבן`; nḏꜣ `קיסם`, pwj `עף`; šzp jwr `קיבל הריון`, jꜣd.t `רגע`; zꜣ-ṯꜣj
  `בן־זכר`; mnꜥ.t `אומנת`, ḫnm.t `מינקת`; rnn `טיפח`; ḥmww `חרש`, jpdw `רהיטים`; zꜣ-nsw n Kš `בן־המלך של כּוּשׁ`, jrj-pꜥ.t
  `נסיך`; wḏꜣ n ꜥnḫ `נסע לחיים`, mnj `עגינה`; m-ḥtp `בנחת`; zẖꜣ.w "writing" `כתב`; jmj-rʾ mšꜥ wr `הממונה על הצבא הגדול`.
- **Names:** Km.t `כֵּמֶת`; Kš `כּוּשׁ`; the scribes Qꜣ-gꜣbw `קָאגַבּוּ` (TLA "Kai-geba"), Ḥrj `חוֹרִי`, Mrj-m-jp.t
  `מֶרִימוֹפֶּת`, Jnn `אִנֵנָה`; Stẖj-Mrj-n-Ptḥ `סֵתִי־מֶרֶנְפְּתָח`; Thoth `תְּחוּת`; "where 'one' is" (*tw* for the king)
  rendered `אשר (המלך) שם` – `(פרעה)` in a parenthesis tripped the pr-ꜥꜣ gate, and `המלך` is the honest gloss.
- **Grammar:** 10,1–10,2: *jṯꜣ=t* ("take you") opens 10,2 in Egyptian; the Hebrew moves it to 10,1 (recorded); 19,1–19,2:
  ⟨r⟩ "to" at the end of 19,1 rendered as the prefix of `לנסיך` in 19,2.

### Open decisions for the user
1. 15,7 / 16,2 *wꜥb.t* "the pure place" (`בית־הטוהר?`) – TLA "Tempelschlachthof (?)".
2. 17,4 ⟨mꜣḥ⟩ ḥḏw "garland of onions?" and the lost verb `ו(עלה)`.
3. 19,7 *wḏꜣ n ꜥnḫ* "went to life" (`נסע לחיים`) or the TLA's "departed from life".
4. 13,8 *jꜣ~jr* `ענב` – the `ענבים` gate licence (`jꜣrr`) does not cover this spelling: passed with `[היתר שער]`.

### Progress log (part 2)
- Drafted 10,1–20,1 in eight sections, each filled, built and verified; the TLA read after each section. Changes from
  it: 11,4 *n pr-ꜥꜣ* "to Pharaoh" (not "of"); 11,5 `=k` superfluous (`תשורה`, not `תשורה לך`); notes for 14,6, 16,1,
  19,7.
- Passes: (a) brackets (19,2 restored formula in one bracket; 15,5 `[לו]`; 18,2 `[קטן]`; 20,1 `[הנסיך]`, `[הממונה על]`,
  `מֶרֶנְ[פְּתָח]`); (b) the repeated strings above checked line by line; ḫr-jr `והנה` over the whole text; (c) the
  generated translation read through.
- `verify TB --strict`: 0 problems (185/185); `build`; `check_bible_quotes.py` on the three files: 0 problems;
  `build_parallels_index.py` run.
- **Gate notes:** `הכוזבת` (17,6, grg.t) trips the `זבת` gate of Ex 3:8 (the prefix class reads ה־כ־ו); `ענב` (13,8)
  passed for the licence spelling. Both with `[היתר שער: …]`.

### The text on its own terms (part 2)
- **The sea as a god** (*ym*, the Semitic word: the Canaanite Yam) desires the woman and the cedar helps it (10,5–10,7);
  pun *ꜥš* "call" / *ꜥš* "cedar".
- **Scent as a sign of divinity:** the lock smells of ointment; the wise men know "the seed of every god" is in it
  (10,8–11,5).
- **The betrayer and the secret:** Bata "opened his whole heart" to her (10,3); she has the tree cut (12,4).
- **Signs at a distance:** beer foams, wine rots (12,9–12,10), as promised (8,6).
- **Swallowing as the thread of life:** the catfish swallows the phallus, the heart swallows the water, the queen
  swallows the splinter and conceives (7,9; 14,1; 18,5).
- **Metamorphosis by *ḫpr*:** Bata "comes into being" as bull, trees, splinter, son, king (14,5; 15,1; 16,10; 18,7).
- **Blood on the doorposts** grows into two persea trees – life from sacrifice (16,9–16,10).
- **The king's death as flight to the sky; the dead "moor" and "go to life"** (19,3; 19,7).
- **Justice at the end:** the trial "before them" fulfils "I will be judged with you before him" (7,1 → 19,5); the elder
  brother becomes the younger's heir – the household order reversed (19,6–19,7).
- **The scribe's curse:** Thoth as the adversary of whoever speaks against the book (19,9–19,10).

### Key parallels (part 2)
- 16,9 ↔ Ex 12:7 (`עַל שְׁתֵּי הַמְּזוּזֹת`) [equivalent]: blood on the two doorposts – there protection from death, here
  the seed of new life [divergence].
- 18,7 ↔ Jer 20:15 (`יֻלַּד לְךָ בֵּן זָכָר`) [equivalent]: the same announcement.
- 12,4 ↔ Judg 16:6 [equivalent]: the woman who learns the hero's secret and betrays it.
- 19,5 ↔ 1 Sam 12:7 (`וְאִשָּׁפְטָה אִתְּכֶם לִפְנֵי יְהוָה`) [equivalent]; 11,4 ↔ Gen 41:8 [divergence] (the king's wise
  men, here "knowers of things", not `חַרְטֻמִּים`); 10,8 ↔ Ex 2:5 [divergence] (the river brings something to Pharaoh's
  house); 14,4 ↔ Gen 33:4, 45:15 [equivalent] (the brothers embrace and speak); 16,2–16,3 ↔ Esth 1:10, 5:6, 8:17
  [equivalent] (the king's feast, wine and the woman's request).

### Proposals for the shared renderings (part 2)
1. y~mꜥ "sea" = `ים` [cognate: Semitic loanword] (the corpus word for š "lake" `אגם` stays).
2. ꜥḥꜣ "fight" `נלחם` / "quarrel" `רב` (split by sense); jrj-ꜥḥꜣwtj `בעל־ריב`.
3. The cult words: ꜥbt `מנחה`, wdn `זבח`, mꜣꜥ `הקריב` (ḥtp.w stays `קרבנות`); hrw nfr `יום טוב`.
4. Court titles: špsj.t `גבירה`, jrj-pꜥ.t `נסיך`, zꜣ-nsw `בן־המלך`, jmj-rʾ mšꜥ wr `הממונה על הצבא הגדול`, zẖꜣ.w-pr-ḥḏ
   `סופר־בית־האוצר`.
5. **Gate fix:** the `זבת` gate's prefix class reads `הכוזבת` / `כוזבת` (grg.t) as `זבת`; the `ענבים` licence needs the
   spelling `jꜣ~jr`.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (TB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1,1 | [j]r mntwf ḫru̯ =tw sn 2 n wꜥ mw,t{t} n wꜥ jt Jnp,w rn (n) pꜣ ꜥꜣ jw Bꜣ~tʾ rn (n) pꜣ šrjw ḫr-jr [J]np,w sw [ẖr],j pr ẖr[,j] ḥm,t | הנה הוא – אומרים: שני אחים של אם אחת ושל אב אחד; אַנוּבִּיס – שם הגדול, ובָּטָה – שם הקטן. והנה אנוביס – [יש לו] בית, יש לו אשה, | `וַתֹּסֶף לָלֶדֶת אֶת אָחִיו אֶת הָבֶל` (בראשית ד:ב) | divergence | שני אחים בני אם אחת, אחד בבית ובשדה (קין "עֹבֵד אֲדָמָה") ואחד רועה; כאן האחים אינם מתחרים על חסד אל, וסיפורם מתחיל באחדות. |
| 1,2 | [jw] [pꜣy] =f sn šrjw m-ḏi̯ =f mj-sḫr,w-n šrjw jw mntwf j:jri̯{.tw} n =f ḥbs.w.pl jw =f ḥr šmi̯.t m-sꜣ nꜣy =f jꜣw,t r? sḫ,t.pl | ואחיו הקטן אצלו כמו (בן) קטן; הוא העושה לו בגדים, והוא הולך אחרי עדריו אל? השדות, | `וְיִשְׂרָאֵל אָהַב אֶת יוֹסֵף מִכָּל בָּנָיו … וְעָשָׂה לוֹ כְּתֹנֶת פַּסִּים` (בראשית לז:ג) | divergence | ביוסף האב עושה בגד לבן האהוב; כאן ההפך: הצעיר, שהוא "כבן", עושה את הבגדים לגדול – עבודת בן בית, לא אות להעדפה. |
| 1,4 | [m] [ꜥḥꜣ,w]tj nfr nn-wn ⟨mj-⟩qd =f m ⟨pꜣ⟩ tꜣ ⟨r-⟩ḏr =f js wn pḥ[,tj] n nṯr jm =f [ḫr-jr]-m-ḫt hrw.pl qn,w ⟨ḥr-⟩sꜣ nn [jw] ⸢pꜣy⸣ =f sn šrj | [גבר] טוב, אין כמוהו בכל הארץ; ואכן כוח של אֵל היה בו. [ואחרי] כן – ימים רבים אחרי זה – ואחיו הקטן | `וַיְהִי יְהוָה אֶת יוֹסֵף וַיְהִי אִישׁ מַצְלִיחַ` (בראשית לט:ב) | equivalent | הגיבור הצעיר שיש בו "משהו מן האל"; במצרית זה "כוח של אל" – כוח גופני (*pḥ.tj*), לא הצלחה. |
| 1,4 | [m] [ꜥḥꜣ,w]tj nfr nn-wn ⟨mj-⟩qd =f m ⟨pꜣ⟩ tꜣ ⟨r-⟩ḏr =f js wn pḥ[,tj] n nṯr jm =f [ḫr-jr]-m-ḫt hrw.pl qn,w ⟨ḥr-⟩sꜣ nn [jw] ⸢pꜣy⸣ =f sn šrj | [גבר] טוב, אין כמוהו בכל הארץ; ואכן כוח של אֵל היה בו. [ואחרי] כן – ימים רבים אחרי זה – ואחיו הקטן | `וַתָּחֶל רוּחַ יְהוָה לְפַעֲמוֹ` (שופטים יג:כה) | equivalent | כוח אלוהי בגיבור (שמשון). |
| 1,6 | [m] [stj]mw.pl nb(.w) n sḫ,t.pl [m] [j]:jri̯,pl m ḫt [m] [(j]ḫ,t.pl) nb(.wt) [nfr(.wt]) [n] sḫ[,t] mtw =f wꜣḥ =w m-bꜣḥ ⸢pꜣy⸣ =f [sn] [ꜥꜣ] jw =f ḥmsi̯ ḥnꜥ | [בירק] כל השדות, בחלב, בעצים, בכל [דבר] [טוב] [של] השדה; ושת אותם לפני [אחיו] [הגדול], כשהוא יושב עם | `כִּלְחֹךְ הַשּׁוֹר אֵת יֶרֶק הַשָּׂדֶה` (במדבר כב:ד) | equivalent | "ירק השדה" כמזון הבקר; כאן הוא גם מזונם של בני האדם. |
| 1,7 | [tꜣy] =f ḥm,t mtw =f swrj mtw =f wnm{.pl} m[tw] =[f] [pri̯] [r] [sḏr] [m] pꜣy =f j~hꜣy,t.pl m-⸢ẖnw⸣ nꜣy =f jꜣw⟨,t⟩ | אשתו; ושתה ואכל, [ויצא] [לשכב] ברפתותיו, בתוך עדריו. | `וְאֵין בָּקָר בָּרְפָתִים` (חבקוק ג:יז) | equivalent | הרפת. |
| 1,8 | [wꜥi̯]? ḫr-jr-m-ḫt tꜣ ḥḏ 2.n hrw{.pl} ḫpr.w […] jw =w psst mtw =f wꜣḥ =w m-bꜣḥ pꜣy =f sn ꜥꜣ | [לבדו]?. ואחרי כן – האירה הארץ, ויום שני נהיה – […] כשהם אפויים; ושת אותם לפני אחיו הגדול, | `וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם שֵׁנִי` (בראשית א:ח) | equivalent | "יום שני נהיה" הוא כאן נוסחת הבוקר של הסיפור ("כשהאיר היום השני", כלומר למחרת), לא יום בבריאה; *ḫpr* "נהיה" כבתרגום הקורפוס (`renderings.md` §4.4). |
| 1,9 | [mtw] =[f] ḏi̯.t n =f ꜥq,w r sḫ,t.pl mtw =f thm ⸢nꜣy⸣ =f jḥ.pl r ḏi̯.t wnm =w m sḫ[,t].pl jw =f (ḥr) šmi̯.t m-sꜣ nꜣy =f jḥ.pl | ונתן לו פת לשדות; ונהג את בקרו להניח להם לאכול בשדות, והוא הולך אחרי בקרו. | `וַיִּנְהַג אֶת כָּל מִקְנֵהוּ` (בראשית לא:יח) | equivalent | נהיגת המקנה. |
| 1,10 | [jw]? =[s]n (ḥr) ḏd n =f nfr pꜣ stjmw{.pl} [n] s,t ḥmn.t? mtw =f sḏm pꜣ ḏd =sn nb mtw =f jṯꜣ[y] =w r tꜣ s,t | [והם] אומרים לו: "טוב הירק [של] מקום פלוני?"; ושמע את כל אשר אמרו, ולקח אותם אל המקום | `וַיִּפְתַּח יְהוָה אֶת פִּי הָאָתוֹן וַתֹּאמֶר לְבִלְעָם` (במדבר כב:כח) | divergence | בהמה מדברת; אצל בלעם זה נס חד־פעמי, כאן זה מנהגו של כל יום, ובטה "שומע" ומבין. |
| 2,1 | nfr.t n s[t]jm[w].pl n,t[j] st (ḥr) ꜣbw =s[n] [jw] ⸢nꜣ⸣ jḥ.pl n,tj r-ḥꜣ,t =f ḥr ḫpr nfr r-jqr zp-2 q(ꜣ)b =sn ms.w.pl =sn | הטוב בירק אשר הם חפצים בו. והבקר אשר לפניו נהיה יפה מאוד מאוד; הכפילו את ולדותיהם | `וְאַרְבֶּה אוֹתְךָ בִּמְאֹד מְאֹד` (בראשית יז:ב) | equivalent | "מאוד מאוד": במצרית *zp-2* "פעמיים" – סימן הכפלה של המלה הקודמת |
| 2,1 | nfr.t n s[t]jm[w].pl n,t[j] st (ḥr) ꜣbw =s[n] [jw] ⸢nꜣ⸣ jḥ.pl n,tj r-ḥꜣ,t =f ḥr ḫpr nfr r-jqr zp-2 q(ꜣ)b =sn ms.w.pl =sn | הטוב בירק אשר הם חפצים בו. והבקר אשר לפניו נהיה יפה מאוד מאוד; הכפילו את ולדותיהם | `וַיְבָרֶךְ יְהוָה אֶת בֵּית הַמִּצְרִי בִּגְלַל יוֹסֵף` (בראשית לט:ה) | equivalent | מקנה הבית מצליח בזכות הצעיר. |
| 2,2 | ⟨r-⟩jqr zp-2 ḫr-jr ḥr [t]rj n skꜣ jw pꜣy =f sn [ꜥꜣ] ḥr ḏd n =f jmm grg⟨.tw⟩ n =n ḥtrj,pl […] | מאוד מאוד. והנה, בעת החריש אמר לו אחיו [הגדול]: "תן שיוכנו לנו צמדים […] | `וַיִּקַּח צֶמֶד בָּקָר וַיְנַתְּחֵהוּ` (שמואל א יא:ז) | equivalent | צמד השוורים לחריש. |
| 2,3 | r skꜣ pꜣ-wn tꜣ ꜣḥ,t pri̯.tj jw =s[t] nfr.t[j] n skꜣ =st m-mj,tt mtw =k j[y.t] r | לחרוש, כי השדה יצא (מן המים), והוא טוב לחרוש אותו; וכמו כן תבוא אל | `וְתֵרָאֶה הַיַּבָּשָׁה` (בראשית א:ט) | divergence | גם במצרים האדמה "יוצאת" מן המים – כל שנה, כשהיאור נסוג; זה נוף חקלאי ולא בריאה. |
| 2,10 | n pꜣy =f sn ꜥꜣ jw =tw ḥmsi̯ ḥr nbd =st wn.jn =f ḥr ḏd n =sst ꜥḥꜥ ḏi̯ ={j}⟨t⟩ n ={t}⟨j⟩ ⸢pr,t⸣ | אחיו הגדול כשיושבים וקולעים אותה. ואז אמר לה: "קוּמִי, תני לי זרע, | `וַיְהִי כְּהַיּוֹם הַזֶּה וַיָּבֹא הַבַּיְתָה לַעֲשׂוֹת מְלַאכְתּוֹ וְאֵין אִישׁ מֵאַנְשֵׁי הַבַּיִת שָׁם בַּבָּיִת` (בראשית לט:יא) | divergence | הצעיר בא אל הבית כשהגבר איננו; ביוסף הוא בא לעבודתו, כאן הוא נשלח להביא זרע. |
| 3,6 | [ꜥꜣ] jm =k ḫr tw≡j ḥr ptrj nꜣy =k tj~n~rʾ m-mn.t jw jb =st ⟨r⟩ rḫ =f m rḫ n ⸢ꜥḥꜣ,wtj⸣ wn.[j]n =sst ḥr | [גדול] בך, והרי אני רואה את חילך יום יום." ורצתה לדעת אותו כדעת גבר. ואז | `וַיְהִי כְּדַבְּרָהּ אֶל יוֹסֵף יוֹם יוֹם וְלֹא שָׁמַע אֵלֶיהָ לִשְׁכַּב אֶצְלָהּ` (בראשית לט:י) | equivalent | "יום יום": אשת פוטיפר מדברת אליו יום יום, אשת אנוביס "רואה את חילו יום יום" – הביטוי עצמו הוא המלה המצרית הרגילה ל"מדי יום" (*m-mn.t*) |
| 3,6 | [ꜥꜣ] jm =k ḫr tw≡j ḥr ptrj nꜣy =k tj~n~rʾ m-mn.t jw jb =st ⟨r⟩ rḫ =f m rḫ n ⸢ꜥḥꜣ,wtj⸣ wn.[j]n =sst ḥr | [גדול] בך, והרי אני רואה את חילך יום יום." ורצתה לדעת אותו כדעת גבר. ואז | `וְהָאָדָם יָדַע אֶת חַוָּה אִשְׁתּוֹ` (בראשית ד:א) | equivalent | *rḫ* "לדעת" במובן המיני, כמו `יָדַע` העברי |
| 3,6 | [ꜥꜣ] jm =k ḫr tw≡j ḥr ptrj nꜣy =k tj~n~rʾ m-mn.t jw jb =st ⟨r⟩ rḫ =f m rḫ n ⸢ꜥḥꜣ,wtj⸣ wn.[j]n =sst ḥr | [גדול] בך, והרי אני רואה את חילך יום יום." ורצתה לדעת אותו כדעת גבר. ואז | `וַיְהִי יוֹסֵף יְפֵה תֹאַר וִיפֵה מַרְאֶה` (בראשית לט:ו) | equivalent | מה שמושך את האשה: ביוסף יופיו, כאן כוחו. |
| 3,7 | ꜥḥꜥ jw =st (ḥr) mḥ jm =f jw =st (ḥr) ḏd n =f mꜥ~j jry =n n =n [wn]w,t sḏr ={w}⟨n⟩ ꜣḫ n =k p[ꜣ]j kꜣ jry =j | קמה, ואחזה בו, ואמרה לו: "בוא, נעשה לנו [שעה], נשכב! מועיל לך זה; אז אעשה | `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף וַתֹּאמֶר שִׁכְבָה עִמִּי` (בראשית לט:ז) | equivalent | אותה הצעה; במצרית "בוא, נעשה לנו שעה, נשכב", בגוף ראשון רבים, ובלי "עמי" |
| 3,7 | ꜥḥꜥ jw =st (ḥr) mḥ jm =f jw =st (ḥr) ḏd n =f mꜥ~j jry =n n =n [wn]w,t sḏr ={w}⟨n⟩ ꜣḫ n =k p[ꜣ]j kꜣ jry =j | קמה, ואחזה בו, ואמרה לו: "בוא, נעשה לנו [שעה], נשכב! מועיל לך זה; אז אעשה | `וַתִּתְפְּשֵׂהוּ בְּבִגְדוֹ לֵאמֹר שִׁכְבָה עִמִּי` (בראשית לט:יב) | divergence | גם כאן האשה "אוחזת בו" (*mḥ m*), אבל לא בבגדו: אין בגד שנשאר בידה, ולכן גם אין "ראיה" בהמשך – היא מבוימת אחרת (4,6) |
| 3,7 | ꜥḥꜥ jw =st (ḥr) mḥ jm =f jw =st (ḥr) ḏd n =f mꜥ~j jry =n n =n [wn]w,t sḏr ={w}⟨n⟩ ꜣḫ n =k p[ꜣ]j kꜣ jry =j | קמה, ואחזה בו, ואמרה לו: "בוא, נעשה לנו [שעה], נשכב! מועיל לך זה; אז אעשה | `וַתִּתְפְּשֵׂהוּ בְּבִגְדוֹ לֵאמֹר שִׁכְבָה עִמִּי` (בראשית לט:יב) | absent | הבטחת הבגדים (3,7–3,8) אין לה מקבילה ביוסף. |
| 3,8 | ⸢n⸣ =⸢k⸣ ḥbs.w.pl nfr[.w].pl wn.jn pꜣ ꜥḏd,w ḥr [ḫp]r mj ꜣb,w{.pl}-šmꜥ{,t.pl} m qnd,t […] ḥr pꜣ sm⸢y⸣ | לך בגדים יפים." ואז [נהיה] העלם כנמר־הדרום בזעם […], בגלל האמירה | `וַיְמָאֵן וַיֹּאמֶר אֶל אֵשֶׁת אֲדֹנָיו` (בראשית לט:ח) | divergence | יוסף "ממאן" ומדבר; בטה קודם כל זועם "כנמר", ורק אחר כך מדבר (3,9); בעברית המקראית `וַיְמָאֵן` מסרב, והמצרית אינה אומרת "סירב" כלל – היא מתארת זעם. |
| 3,10 | m-ḏi̯ =j m sḫr,w n mw,t{t} ḫr pꜣy =t hꜣy m-ḏi̯ =j m sḫr,w n jt ḫr pꜣ ꜥꜣ r =j mntwf sḫpr ⟨w⟩j jḫ | אצלי כמנהג אם, הרי בעלך – אצלי כמנהג אב; הרי הגדול ממני – הוא גידל אותי. מה | `הֵן אֲדֹנִי לֹא יָדַע אִתִּי מַה בַּבָּיִת … וְלֹא חָשַׂךְ מִמֶּנִּי מְאוּמָה כִּי אִם אוֹתָךְ בַּאֲשֶׁר אַתְּ אִשְׁתּוֹ` (בראשית לט:ח–ט) | divergence | יוסף נשען על אמון האדון ועל זכות האשה לבעלה; בטה נשען על קשר משפחתי: היא "כאם" לו, בעלה "כאב", כי הגדול גידל אותו – הצעתה כמעט גילוי עריות. |
| 4,1 | pꜣj btꜣ,w ꜥꜣ j:ḏd =⟨t⟩ n =j m-jri̯ ḏd.ṱ =f n =j ꜥn ḫr nn jw =j r ḏd.ṱ =f n wꜥ ḫr bn jw =[j] r ḏi̯.t pri̯ =f m rʾ =j n r(m)ṯ | הפשע הגדול הזה אשר אמרת לי! אל תאמרי אותו לי שוב; הרי לא אומר אותו לאחד, הרי לא אניח שיצא מפי לבני אדם | `וְאֵיךְ אֶעֱשֶׂה הָרָעָה הַגְּדֹלָה הַזֹּאת וְחָטָאתִי לֵאלֹהִים` (בראשית לט:ט) | equivalent | "הפשע הגדול הזה" / `הָרָעָה הַגְּדֹלָה הַזֹּאת`: אותו צירוף כמעט מלה במלה; אבל ביוסף זה חטא "לאלהים", ובמצרית אין אל במשפט – הפשע הוא נגד האח |
| 4,1 | pꜣj btꜣ,w ꜥꜣ j:ḏd =⟨t⟩ n =j m-jri̯ ḏd.ṱ =f n =j ꜥn ḫr nn jw =j r ḏd.ṱ =f n wꜥ ḫr bn jw =[j] r ḏi̯.t pri̯ =f m rʾ =j n r(m)ṯ | הפשע הגדול הזה אשר אמרת לי! אל תאמרי אותו לי שוב; הרי לא אומר אותו לאחד, הרי לא אניח שיצא מפי לבני אדם | `וְאֵיךְ אֶעֱשֶׂה הָרָעָה הַגְּדֹלָה הַזֹּאת וְחָטָאתִי לֵאלֹהִים` (בראשית לט:ט) | divergence | בטה מבטיח שתיקה: "לא אומר אותו לאחד"; יוסף אינו מבטיח דבר. |
| 4,6 | ⟨ḥr⟩? pꜣ smy j:ḏd.n =sst wn.jn =sst ḥr jni̯ [ꜥ]d,w pd~jrʾ jw =st ḥr ḫpr mj n,tj qnqn.tj n ꜥḏꜣ,w ={j} n-ꜣb,w | בגלל האמירה אשר אמרה. ואז הביאה חֵלֶב ותחבושת?, ונהייתה כמי שהוכתה – בשקר, כדי | `וַתִּקְרָא לְאַנְשֵׁי בֵיתָהּ … וַתַּנַּח בִּגְדוֹ אֶצְלָהּ` (בראשית לט:יד–טז) | divergence | אשת פוטיפר מבססת את השקר על הבגד ועל עדות אנשי הבית; אשת אנוביס מבימה את גופה: היא "נעשית כמי שהוכתה". |
| 4,7 | ḏd n pꜣy =st hꜣy m pꜣy =k sn šrj j:jri̯ qnqn jw pꜣy =st hꜣy ḥr wḥꜥ m rwhꜣ | לומר לבעלה: "אחיך הקטן הוא שהיכה." ובעלה שב בערב | `בָּא אֵלַי הָעֶבֶד הָעִבְרִי אֲשֶׁר הֵבֵאתָ לָּנוּ לְצַחֶק בִּי` (בראשית לט:יז) | equivalent | העלילה לפני הבעל; אצל אשת פוטיפר הוא "בא… לצחק בי" (ניסיון אונס), אצל אשת אנוביס "הוא שהיכה" (אלימות) – ובפרטי השקר (5,1–5,3) היא מעמידה את הדברים על ראשם. |
| 5,1 | sn šrj jr {n}⟨m⟩-ḏr{,tj} jwi̯[.t] =[f] [r] [j]ṯꜣ n =k pr,t jw =f (ḥr) gmi̯ =j ḥmsi̯.kwj wꜥi̯ =j jw =f ḥr ḏd n =j mꜥ~j{.t} jry =n wnw,t sḏr =n | הקטן. הנה, כאשר בא לקחת לך זרע, מצא אותי יושבת לבדי, ואמר לי: 'בואי, נעשה שעה, נשכב; | `בָּא אֵלַי לִשְׁכַּב עִמִּי וָאֶקְרָא בְּקוֹל גָּדוֹל` (בראשית לט:יד) | equivalent | האשה שמה בפי הצעיר את דבריה שלה |
| 5,1 | sn šrj jr {n}⟨m⟩-ḏr{,tj} jwi̯[.t] =[f] [r] [j]ṯꜣ n =k pr,t jw =f (ḥr) gmi̯ =j ḥmsi̯.kwj wꜥi̯ =j jw =f ḥr ḏd n =j mꜥ~j{.t} jry =n wnw,t sḏr =n | הקטן. הנה, כאשר בא לקחת לך זרע, מצא אותי יושבת לבדי, ואמר לי: 'בואי, נעשה שעה, נשכב; | `בָּא אֵלַי לִשְׁכַּב עִמִּי וָאֶקְרָא בְּקוֹל גָּדוֹל` (בראשית לט:יד) | divergence | ביוסף היא אומרת זאת לאנשי ביתה ואחר כך לבעלה, כאן לבעל בלבד, וללא עדים. |
| 5,2 | wnḫ =t pꜣy =t nb[d] j.n =f ḥr ḏd n =j jw =j ḥr tm.t sḏm n =f js bn jnk tꜣy =k mw,t ḫr pꜣy =k sn ꜥꜣ m-ḏi̯ =k m sḫr,w n jt | התירי את קליעתך!' – כך אמר לי. ולא שמעתי לו: 'הלא אני אמך, הרי אחיך הגדול – אצלך כמנהג אב!' | `וְלֹא שָׁמַע אֵלֶיהָ לִשְׁכַּב אֶצְלָהּ` (בראשית לט:י) | divergence | בבראשית יוסף "לא שמע אליה"; כאן האשה אומרת "לא שמעתי לו" – הפיכת התפקידים במלים עצמן. |
| 5,3 | j.n =j ḥr ḏd n =f jw =f ḥr ⟨s⟩[nd]{.pl} jw =f ḥr qnqn =⟨j⟩ r tm.t ḏi̯.t jry =j n =k wpw,t ḫr jr ḏi̯ =k ꜥnḫ =f jw =j r mt n =j ptrj | – כך אמרתי לו. [וחשש], והיכה אותי, כדי שלא אניח שאעשה לך שליחות. הרי, אם תניח לו לחיות – אמות לי. ראה, | `וַיְהִי כִשְׁמֹעַ אֲדֹנָיו אֶת דִּבְרֵי אִשְׁתּוֹ … וַיִּחַר אַפּוֹ` (בראשית לט:יט) | divergence | אשת פוטיפר מסתפקת בעלילה; אשת אנוביס דורשת את מות האח ומאיימת במותה שלה. |
| 5,5 | mj ꜣbw{.pl}-šmꜥ{,t.pl} jw =f ḥr ḏi̯.t dmw.tw pꜣy =f njw,y jw =f ḥr ḏi̯.t =f m ḏr,t =f wn.jn pꜣy =f ⟨sn⟩ ꜥꜣ (ḥr) ꜥḥꜥ n-ḥꜣ pꜣ sbꜣ,y | כנמר־הדרום, ונתן להשחיז את חניתו, ושם אותה בידו. ואז עמד אחיו הגדול מאחורי הדלת | `וַיִּחַר אַפּוֹ` (בראשית לט:יט) | divergence | הכעס של הבעל; כאן הוא "נעשה כנמר", ואינו כולא אלא מתכוון להרוג. השורש חרה שמור בסיפורים, והדימוי המצרי נשאר כלשונו. |
| 5,8 | jy.t jw ⸢tꜣ⸣ jḥ(,t){.pl} ḥꜣ,wtj(.t) ḥr ꜥq r pꜣ j~hꜣy{,t.pl} jw =st ḥr ḏd n pꜣy =st mnj,w m =kw pꜣy =k sn ꜥꜣ ꜥḥꜥ | בא; והפרה הראשונה נכנסת אל הרפת, ואמרה לרועה שלה: "הנה אחיך הגדול עומד | `וַתֹּאמֶר הָאָתוֹן אֶל בִּלְעָם … הַהַסְכֵּן הִסְכַּנְתִּי לַעֲשׂוֹת לְךָ כֹּה` (במדבר כב:ל) | equivalent | בהמה שרואה את הסכנה לפני האדם (שם המלאך בדרך, כאן האח מאחורי הדלת). |
| 6,3 | jw =f ḥr wꜣḥ tꜣy =f ꜣtp(,t) r pꜣ jwdn{,t} jw =f ḥr fꜣi̯ =f r sḫsḫ r ⟨w⟩ꜥ{w}⟨r⟩ jw pꜣy =f | ושת את משאו על הקרקע, ונשא את עצמו להיחפז, לברוח; ואחיו | `וַיַּעֲזֹב בִּגְדוֹ בְּיָדָהּ וַיָּנָס וַיֵּצֵא הַחוּצָה` (בראשית לט:יב) | equivalent | הבריחה; יוסף בורח מן האשה, בטה בורח מן האח, ומשאיר משא ולא בגד |
| 6,3 | jw =f ḥr wꜣḥ tꜣy =f ꜣtp(,t) r pꜣ jwdn{,t} jw =f ḥr fꜣi̯ =f r sḫsḫ r ⟨w⟩ꜥ{w}⟨r⟩ jw pꜣy =f | ושת את משאו על הקרקע, ונשא את עצמו להיחפז, לברוח; ואחיו | `וְעַתָּה בְנִי שְׁמַע בְּקֹלִי וְקוּם בְּרַח לְךָ אֶל לָבָן אָחִי חָרָנָה` (בראשית כז:מג) | equivalent | אח צעיר בורח מאחיו הגדול שרוצה להרגו (יעקב ועשו). |
| 6,4 | sn ꜥꜣ ḥr šmi̯.t m-sꜣ =f ẖr,j pꜣy =f njw,y ={f} wn.jn pꜣy =f sn šrj ḥr smꜣꜥ.t{.pl} n pꜣ Rꜥ-Ḥr,w-ꜣḫ,t.du | הגדול הולך אחריו, נושא את חניתו. ואז התפלל אחיו הקטן אל רַא־חַרְאַחְתִּי | `הַצִּילֵנִי נָא מִיַּד אָחִי מִיַּד עֵשָׂו כִּי יָרֵא אָנֹכִי אֹתוֹ פֶּן יָבוֹא וְהִכַּנִי` (בראשית לב:יב) | equivalent | תפילת האח הנרדף מפני אחיו. |
| 6,5 | r-ḏd pꜣy =j nb nfr mntk{n} pꜣ n,tj ḥr wpw.t pꜣ ꜥḏꜣ,w r ⟨pꜣ⟩ mꜣꜥ,t⟨j⟩{,pl} ꜥḥꜥ⟨.n⟩ Pꜣ-Rꜥ ḥr | לאמור: "אדוני הטוב, אתה הוא הפוסק בין השקרן לבין האמיתי!" ואז רַא | `וְהָיָה יְהוָה לְדַיָּן וְשָׁפַט בֵּינִי וּבֵינֶךָ` (שמואל א כד:טו) | equivalent | הנרדף (דוד) פונה אל האל כשופט בינו לבין רודפו |
| 6,5 | r-ḏd pꜣy =j nb nfr mntk{n} pꜣ n,tj ḥr wpw.t pꜣ ꜥḏꜣ,w r ⟨pꜣ⟩ mꜣꜥ,t⟨j⟩{,pl} ꜥḥꜥ⟨.n⟩ Pꜣ-Rꜥ ḥr | לאמור: "אדוני הטוב, אתה הוא הפוסק בין השקרן לבין האמיתי!" ואז רַא | `יִשְׁפֹּט יְהוָה בֵּינִי וּבֵינֶיךָ` (בראשית טז:ה) | equivalent |  |
| 6,6 | sḏm spr,w.pl =f nb(.w) jw Pꜣ-Rꜥ ḥr ḏi̯.t ḫpr wꜥ-n mw ꜥꜣ r-jwd =f{j} r-jwd pꜣy =f ⟨sn⟩ ꜥꜣ jw =f | שמע את כל בקשותיו; ורַא נתן שיהיו מים גדולים בינו ובין אחיו הגדול, והוא | `וַיָּשֶׂם מַאֲפֵל בֵּינֵיכֶם וּבֵין הַמִּצְרִים` (יהושע כד:ז) | divergence | האל שם מחסום בין הנרדף לרודף |
| 6,6 | sḏm spr,w.pl =f nb(.w) jw Pꜣ-Rꜥ ḥr ḏi̯.t ḫpr wꜥ-n mw ꜥꜣ r-jwd =f{j} r-jwd pꜣy =f ⟨sn⟩ ꜥꜣ jw =f | שמע את כל בקשותיו; ורַא נתן שיהיו מים גדולים בינו ובין אחיו הגדול, והוא | `וַיָּבֹא בֵּין מַחֲנֵה מִצְרַיִם וּבֵין מַחֲנֵה יִשְׂרָאֵל` (שמות יד:כ) | divergence | אצל הים המחסום הוא ענן, והמים נבקעים לנרדפים; כאן המים עצמם הם המחסום. |
| 6,8 | pꜣy =f sn ꜥꜣ ḥr jri̯.t sp 2 n ḥwi̯ ḥr ḏr,t =f n pꜣ tm.t ẖdb =f j:jri̯ =f wn.jn pꜣy =f | אחיו הגדול עשה פעמיים הכאה על ידו, על אשר לא המית אותו. ואז אחיו | `וַיִּחַר אַף בָּלָק אֶל בִּלְעָם וַיִּסְפֹּק אֶת כַּפָּיו` (במדבר כד:י) | equivalent | הכאת כף בכעס ובאכזבה. |
| 7,1 | ḥr wpw.t ḥnꜥ =k m-bꜣḥ =f m[tw] =[f] ḏi̯.t pꜣ [ꜥḏꜣ],w n pꜣ mꜣꜥ,t⟨j⟩{,pl} pꜣ-wn nn jw =j (r) ḫpr m-ḏi̯ =k […] r-nḥḥ | אשפט עמך לפניו, והוא יתן את [השקרן] לאמיתי; כי לא אהיה עמך […] לנצח, | `וְעַתָּה הִתְיַצְּבוּ וְאִשָּׁפְטָה אִתְּכֶם לִפְנֵי יְהוָה` (שמואל א יב:ז) | equivalent | "להישפט עם" מישהו "לפני" האל |
| 7,1 | ḥr wpw.t ḥnꜥ =k m-bꜣḥ =f m[tw] =[f] ḏi̯.t pꜣ [ꜥḏꜣ],w n pꜣ mꜣꜥ,t⟨j⟩{,pl} pꜣ-wn nn jw =j (r) ḫpr m-ḏi̯ =k […] r-nḥḥ | אשפט עמך לפניו, והוא יתן את [השקרן] לאמיתי; כי לא אהיה עמך […] לנצח, | `וְהָיָה יְהוָה לְדַיָּן וְשָׁפַט בֵּינִי וּבֵינֶךָ` (שמואל א כד:טו) | equivalent |  |
| 7,6 | ḥm,t ḥr ḏd n =j mꜥ~j jry =n wnw,t sḏr =n ḫr ptrj pnꜥ =⟨st⟩ sw n =k m ktḫ wn.jn =f ḥr ḏi̯.t | אמרה לי: 'בוא, נעשה שעה, נשכב'. והרי ראה, הפכה אותו לך לדבר אחר!" ואז נתן | `כַּדְּבָרִים הָאֵלֶּה עָשָׂה לִי עַבְדֶּךָ` (בראשית לט:יט) | divergence | בפוטיפר הבעל שומע רק את האשה; כאן הוא שומע את שני הצדדים, ומאמין לאח. |
| 7,9 | sf{n}d-g(ꜣ)š.j jw =f ḥr šꜥd ḥnw =f jw =f ḥr ḫꜣꜥ =f r pꜣ mw jw pꜣ nꜥ{d}⟨r⟩{.w.pl} ḥr ⟨ꜥ⟩mꜣm{j} =⟨f⟩ jw =f | סכין־קנה, וכרת את איברו, והטיל אותו אל המים, והשפמנון בולע אותו. והוא | `לֹא יָבֹא פְצוּעַ דַּכָּא וּכְרוּת שָׁפְכָה בִּקְהַל יְהוָה` (דברים כג:ב) | absent | בתורה הסירוס פוסל; כאן הוא שבועת חפות ומעשה של טוהר, שהאלים עצמם מכבדים |
| 7,9 | sf{n}d-g(ꜣ)š.j jw =f ḥr šꜥd ḥnw =f jw =f ḥr ḫꜣꜥ =f r pꜣ mw jw pꜣ nꜥ{d}⟨r⟩{.w.pl} ḥr ⟨ꜥ⟩mꜣm{j} =⟨f⟩ jw =f | סכין־קנה, וכרת את איברו, והטיל אותו אל המים, והשפמנון בולע אותו. והוא | `וַיַּעֲזֹב בִּגְדוֹ בְּיָדָהּ` (בראשית לט:יב) | divergence | יוסף משאיר בגד; בטה משליך את זכרותו. |
| 8,1 | ḥr gnn jw =f (ḥr) ḫpr ẖs[j] sw? jw pꜣy ={k}⟨f⟩ sn ꜥꜣ ḥr šnw ḥꜣ,tj =f r-jqr zp-2 jw =f ḥr ꜥḥꜥ ḥr rmy.t n =f qꜣi̯ ={f} nn rḫ =f ḏꜣy r pꜣ n,tj pꜣy =f sn šrj jm m-ḏr nꜣ-n msḥ.w.pl | רפה, ונהיה עלוב?; ואחיו הגדול סובל בלבבו מאוד מאוד, וקם לבכות עליו בקול רם; ואינו יודע לצלוח אל המקום אשר אחיו הקטן שם, מפני התמסחים. | `וַיִּשָּׂא עֵשָׂו קֹלוֹ וַיֵּבְךְּ` (בראשית כז:לח) | equivalent | האח הגדול בוכה בקול; כאן על אח שגירש והפסיד. |
| 8,2 | wn.jn pꜣy =f sn šrj ḥr ꜥš n =f m-ḏd jstw jr sḫꜣy =k wꜥ-n bjn jstw bw jri̯ =k sḫꜣy wꜥ-n nfr m-rʾ-pw wꜥ-n nkt jw jry =j sw n =k jḫ šmi̯{.t} =k r pꜣy =k pr mtw =k | ואז צעק אליו אחיו הקטן לאמור: "ואכן, אם תזכור רעה – הלא אינך זוכר טובה, או דבר־מה שעשיתי לך? תלך אפוא אל ביתך, ו | `לָמָּה שִׁלַּמְתֶּם רָעָה תַּחַת טוֹבָה` (בראשית מד:ד) | equivalent | זכירת הרעה ושכחת הטובה. |
| 8,4 | ꜥmꜣ⟨m⟩ =⟨k⟩ r-ḏd wn nkt ḫpr.w r =j pꜣy =j ⟨šdi̯⟩ ḥꜣ,tj =j mtw =j wꜣḥ =f ḥr ḏꜣḏꜣ n tꜣ ḥw~rw~rw,pl (n) pꜣ ꜥš ḫr jr šꜥd =tw pꜣ ꜥš mtw =f hꜣy.t r jwdn{,t} | תבין כי דבר־מה נהיה לי. אחלץ את לבבי ואשית אותו על ראש פרח הארז; הרי, אם יכרתו את הארז והוא יפול אל הקרקע, | — | absent | אין במקרא "לב" או נפש שנשמרים מחוץ לגוף; ראו הערות. |
| 8,5 | mtw =k jy.t r wḫꜣḫ =f jr jry =k 7 rnp,t.pl n wḫꜣḫ =f m-ḏy.t f{j}⟨t⟩ ḥꜣ,tj =k ḫr jr jw =k (ḥr) gmi̯ =f mtw =k ḏi̯.ṱ =f r wꜥ-n gꜣy{.pl} n mw qbḥ kꜣ ꜥnḫ =j ꜥn? w{b}šb{.t} =j n | ובאת לחפש אותו. אם תעשה שבע שנים בחיפושו – אל תניח ללבבך לקוץ; הרי, אם תמצא אותו ותשים אותו בקערה של מים צוננים – אז אחיה שוב, אענה ל | `וַיַּעֲבֹד יַעֲקֹב בְּרָחֵל שֶׁבַע שָׁנִים וַיִּהְיוּ בְעֵינָיו כְּיָמִים אֲחָדִים` (בראשית כט:כ) | equivalent | שבע שנים כזמן של מאמץ ונאמנות. |
| 8,6 | pꜣ thꜣ.ṱ =(j) ḫr jw =k (r) ꜥmꜣm r-ḏd wn nkt ⟨ḫpr.w⟩ r =j mtw =tw ḏi̯.t n =k wꜥ-n ṯbw{.pl} n ḥ(n)q,t ḥr ḏr,t =k mtw =f jri̯ stf m-jri̯ ꜥḥꜥ ḫr-rʾ-ꜥ jw =f ḥr ḫpr m-ḏi̯ =k wn.jn =f ḥr šmi̯.t | פוגע בי. והרי תבין כי דבר־מה נהיה לי: יתנו לך גביע של שֵׁכָר בידך, והוא יעשה קצף; אל תעמוד עוד, כשזה נהיה אצלך." ואז הלך | `וַיִּקְחוּ אֶת כְּתֹנֶת יוֹסֵף … וַיִּטְבְּלוּ אֶת הַכֻּתֹּנֶת בַּדָּם` (בראשית לז:לא) | equivalent | אות שמביא את הבשורה על מות האח (כאן אות אמיתי, שם אות מזויף). |
| 8,7 | n =f r tꜣ jn,t (n) pꜣ ꜥš jw pꜣy =f sn ꜥꜣ ḥr šmi̯.t n =f r pꜣy =f pr jw ḏr,t =f wꜣḥ ḥr ḏꜣḏꜣ =f jw =f wrḥ.w n jwdn{,t} spr pw jri̯.n =f r pꜣy =f pr jw =f ḥr ẖdb | לו אל עמק הארז, ואחיו הגדול הלך לו אל ביתו, וידו מונחת על ראשו, והוא מרוח בקרקע; הגיע הוא אל ביתו, והמית | `וַתִּקַּח תָּמָר אֵפֶר עַל רֹאשָׁהּ … וַתָּשֶׂם יָדָהּ עַל רֹאשָׁהּ` (שמואל ב יג:יט) | equivalent | היד על הראש כמחוות אבל |
| 8,7 | n =f r tꜣ jn,t (n) pꜣ ꜥš jw pꜣy =f sn ꜥꜣ ḥr šmi̯.t n =f r pꜣy =f pr jw ḏr,t =f wꜣḥ ḥr ḏꜣḏꜣ =f jw =f wrḥ.w n jwdn{,t} spr pw jri̯.n =f r pꜣy =f pr jw =f ḥr ẖdb | לו אל עמק הארז, ואחיו הגדול הלך לו אל ביתו, וידו מונחת על ראשו, והוא מרוח בקרקע; הגיע הוא אל ביתו, והמית | `וַיִּקְרַע יַעֲקֹב שִׂמְלֹתָיו וַיָּשֶׂם שַׂק בְּמָתְנָיו` (בראשית לז:לד) | equivalent | אבל על האח/הבן. |
| 8,8 | tꜣy =f ḥm,t jw =f ḥr ḫꜣꜥ =st ⟨n⟩ nꜣ-n jw.pl jw =f (ḥr) ḥmsi̯ m gꜣ~sꜣ n pꜣy =f sn šrj ḫr-jr-m-ḫt hrw.pl qn,w ḥr-sꜣ nn jw pꜣy =f sn šrj m tꜣ jn,t (n) pꜣ ꜥš | את אשתו, והטיל אותה אל הכלבים; וישב באבל על אחיו הקטן. ואחרי כן – ימים רבים אחרי זה – ואחיו הקטן בעמק הארז, | `וַיִּקַּח אֲדֹנֵי יוֹסֵף אֹתוֹ וַיִּתְּנֵהוּ אֶל בֵּית הַסֹּהַר` (בראשית לט:כ) | divergence | אצל פוטיפר הצעיר נענש והאשה נשארת; כאן האשה מומתת ומושלכת לכלבים, והצעיר זוכה |
| 8,8 | tꜣy =f ḥm,t jw =f ḥr ḫꜣꜥ =st ⟨n⟩ nꜣ-n jw.pl jw =f (ḥr) ḥmsi̯ m gꜣ~sꜣ n pꜣy =f sn šrj ḫr-jr-m-ḫt hrw.pl qn,w ḥr-sꜣ nn jw pꜣy =f sn šrj m tꜣ jn,t (n) pꜣ ꜥš | את אשתו, והטיל אותה אל הכלבים; וישב באבל על אחיו הקטן. ואחרי כן – ימים רבים אחרי זה – ואחיו הקטן בעמק הארז, | `וְאֶת אִיזֶבֶל יֹאכְלוּ הַכְּלָבִים בְּחֵלֶק יִזְרְעֶאל וְאֵין קֹבֵר` (מלכים ב ט:י) | equivalent | גופת האשה הרשעה לכלבים, בלי קבורה. |
| 8,9 | [j]w nn wꜥ ḥnꜥ =f jw wr{w}šu̯ =f ⟨ḥr⟩ bḥ⟨s⟩ jꜣw,t.pl n ḫꜣs,t jwi̯.t =f r sḏr ẖr,j pꜣ ꜥš n,tj ḥꜣ,tj =f ḥr ḏꜣḏꜣ n tꜣy =f ḥ~rw~rw,pl m rwhꜣ ḫr-jr-m-ḫt | ואין אחד עמו; והוא מבלה את יומו בציד עדרי המדבר, ובא לשכב תחת הארז, אשר לבבו על ראש פרחו, בערב. ואחרי כן | `וַיְהִי עֵשָׂו אִישׁ יֹדֵעַ צַיִד אִישׁ שָׂדֶה` (בראשית כה:כז) | equivalent | הצייד שבשדה. |
| 9,6 | n =f r-jqr zp-2 jw pꜣ Rꜥ-Ḥr,w-ꜣḫ,t.du ḥr ḏd n H̱nm,w jḫ qd =k wꜥ-n s,t-ḥm,t n Bꜣ~tʾ tm ={k}⟨f⟩ | עליו מאוד מאוד. ורַא־חַרְאַחְתִּי אמר לחְנוּם: "תבנה אפוא אשה לבטה, שלא | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה וַיְבִאֶהָ אֶל הָאָדָם` (בראשית ב:כב) | equivalent | האל "בונה" אשה לאדם: *qd* = `בָּנָה` (`renderings.md` §11.3), אותו פועל ואותו מושא |
| 9,6 | n =f r-jqr zp-2 jw pꜣ Rꜥ-Ḥr,w-ꜣḫ,t.du ḥr ḏd n H̱nm,w jḫ qd =k wꜥ-n s,t-ḥm,t n Bꜣ~tʾ tm ={k}⟨f⟩ | עליו מאוד מאוד. ורַא־חַרְאַחְתִּי אמר לחְנוּם: "תבנה אפוא אשה לבטה, שלא | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | equivalent | הנימוק: שלא ישב לבדו (9,7); ושם `אֶעֱשֶׂה` כמו כאן `עשה` (9,7) |
| 9,6 | n =f r-jqr zp-2 jw pꜣ Rꜥ-Ḥr,w-ꜣḫ,t.du ḥr ḏd n H̱nm,w jḫ qd =k wꜥ-n s,t-ḥm,t n Bꜣ~tʾ tm ={k}⟨f⟩ | עליו מאוד מאוד. ורַא־חַרְאַחְתִּי אמר לחְנוּם: "תבנה אפוא אשה לבטה, שלא | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | divergence | בבראשית האל המחליט והאל הבונה אחד, והאשה נבנית מן הצלע; כאן אל אחד מצווה ואל אחר (חנום, האל הקדר) מבצע, ואין חומר מן האדם. |
| 9,7 | ḥmsi̯ wꜥi̯ wn.jn H̱nm,w ḥr jri̯.t n =f jr,j-(n-)ḥmsi̯ ={sw} jw =st nfr⟨.tj⟩ m ḥꜥ,t =st r s,t-ḥm,t nb.t n,tj | ישב לבדו." ואז עשה לו חנום יושבת־עמו, והיא יפה בגופה מכל אשה אשר | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח) | equivalent | "שלא ישב לבדו" |
| 9,7 | ḥmsi̯ wꜥi̯ wn.jn H̱nm,w ḥr jri̯.t n =f jr,j-(n-)ḥmsi̯ ={sw} jw =st nfr⟨.tj⟩ m ḥꜥ,t =st r s,t-ḥm,t nb.t n,tj | ישב לבדו." ואז עשה לו חנום יושבת־עמו, והיא יפה בגופה מכל אשה אשר | `אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | divergence | בבראשית "עזר כנגדו", כאן "יושבת־עמו" – בת לוויה לבית, ויפה מכל אשה. |
| 9,8 | m pꜣ tꜣ (r-)ḏr =⟨f⟩ jw nṯr nb{.t} jm =st wn.jn tꜣ 7 Ḥ,t-ḥr,t{p}.pl ḥr jy.t ⟨r⟩ ptrj =st jw =sn ḥr ḏd ⟨m⟩ rʾ{.wj} | בכל הארץ, וכל אֵל בה. ואז באו שבע החתחורות לראות אותה, ואמרו בפה | — | absent | בבראשית אין גורל שנגזר על האשה בשעת בריאתה |
| 9,8 | m pꜣ tꜣ (r-)ḏr =⟨f⟩ jw nṯr nb{.t} jm =st wn.jn tꜣ 7 Ḥ,t-ḥr,t{p}.pl ḥr jy.t ⟨r⟩ ptrj =st jw =sn ḥr ḏd ⟨m⟩ rʾ{.wj} | בכל הארץ, וכל אֵל בה. ואז באו שבע החתחורות לראות אותה, ואמרו בפה | `וַיְבִאֶהָ אֶל הָאָדָם` (בראשית ב:כב) | divergence | שם האשה מובאת אל האדם, כאן באות האלות לראות אותה ולגזור את גורלה. |
| 9,9 | wꜥ j:jri̯{.t} =st mt ⟨m⟩ dm,t wn.jn =f ḥr ꜣbi̯ =st r-jqr zp-2 jw =st (ḥr) ḥmsi̯ ={t} m pꜣy =f pr jw wršu̯ =f | אחד: "בחרב היא תמות." ואז חפץ בה מאוד מאוד, והיא יושבת בביתו, כשהוא מבלה | `זֹאת הַפַּעַם עֶצֶם מֵעֲצָמַי וּבָשָׂר מִבְּשָׂרִי` (בראשית ב:כג) | divergence | האדם מקבל את האשה בדבר שירה; בטה "חופץ בה מאוד מאוד", אבל על האשה כבר נגזר מוות. |
| 10,8 | pꜣ y~mꜥ{,t} ḥr jni̯ =st r Km,t jw =f (ḥr) wꜣḥ =st m tꜣ s,t (n) nꜣ rḫt,j.w.pl-n-pr-ꜥꜣ-ꜥnḫ-(w)ḏꜣ-s(nb) wn.jn pꜣ stj | הים הביא אותה אל כֵּמֶת, ושת אותה במקום כובסי פַּרְעֹה, חיים, שלום, בריאות. ואז הריח | `וַתֵּרֶד בַּת פַּרְעֹה לִרְחֹץ עַל הַיְאֹר` (שמות ב:ה) | divergence | המים מביאים אל פרעה דבר מן החוץ (שם תבה ובה ילד, כאן קליעת שער). |
| 11,4 | wn.jn =tw ḥr jni̯ nꜣ ⟨zẖꜣ.w.pl⟩ rḫ.y.pl-(j)ḫ,t.pl n pr-ꜥꜣ ꜥnḫ-(w)ḏꜣ-s(nb) wn.jn =sn ḥr ḏd n pr-ꜥꜣ ꜥnḫ-(w)ḏꜣ-s(nb) jr tꜣj nbd(,t) šn,tj | ואז הביאו את הסופרים, יודעי־הדברים, אל פרעה, חיים, שלום, בריאות; ואז אמרו לפרעה, חיים, שלום, בריאות: "הנה קליעת השער הזאת – | `וַיִּשְׁלַח וַיִּקְרָא אֶת כָּל חַרְטֻמֵּי מִצְרַיִם וְאֶת כָּל חֲכָמֶיהָ` (בראשית מא:ח) | divergence | פרעה מכנס את חכמי ארצו לפתור את הבלתי מובן; כאן הם "יודעי־הדברים" (*rḫ.w jḫ.t*), לא *ḥry-tp* (`חרטם`), והם אכן יודעים. |
| 12,1 | s,t-ḥm,t jm =sn jw =⟨tw⟩ ḥr ḏi̯.t n =sst sꜥb nb{.t} nfr n s,t-ḥm,t m ḏr,t =st wn.jn tꜣ s,t-ḥm,t ḥr jy.t r | אשה עמם, ונתנו לה בידה כל עדי יפה של אשה. ואז באה האשה אל | `וַיּוֹצֵא הָעֶבֶד כְּלֵי כֶסֶף וּכְלֵי זָהָב וּבְגָדִים וַיִּתֵּן לְרִבְקָה` (בראשית כד:נג) | equivalent | תכשיטים כמתנת חיזור. |
| 12,4 | pꜣy =st hꜣy jw =st ḥr ḏd ={j} n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jmm šꜥd⟨.tw⟩ pꜣ ꜥš mtw =tw sksk =f jw =tw | בעלה; ואמרה להוד מלכותו, חיים, שלום, בריאות: "תן שיכרתו את הארז, ויקצצו אותו." ו | `הַגִּידָה נָּא לִי בַּמֶּה כֹּחֲךָ גָדוֹל` (שופטים טז:ו) | equivalent | האשה שחושפת את סוד כוחו (או חייו) של הגיבור ומוסרת אותו לאויב (דלילה ושמשון). |
| 13,1 | ḥꜥw,pl ḥnꜥ nꜣy =f tjw,t.du m-mj,tt nꜣy =f ḥbs.w.pl ḥnꜥ nꜣy =f ḫꜥ,w.pl n.w rʾ-ꜥ-ḫt jw =f ḥr fꜣi̯.ṱ =f r mꜥ~šꜥ{.pl} | מקלו ואת נעליו, וכמו כן את בגדיו ואת כלי מלחמתו; ונשא את עצמו לצעוד | `מָתְנֵיכֶם חֲגֻרִים נַעֲלֵיכֶם בְּרַגְלֵיכֶם וּמַקֶּלְכֶם בְּיֶדְכֶם` (שמות יב:יא) | equivalent | ציוד ההולך לדרך ארוכה: מקל, נעליים. |
| 14,1 | jw ḥꜣ,tj =f (ḥr) ꜥmꜣm nꜣ mw jw Bꜣ~tʾ ḥr nš{.pl} m ḥꜥ,t =f nb{.t} jw =f ḥr ḫpr ḥr nw(ꜣ) r pꜣy =f sn ꜥꜣ | ולבבו בולע את המים, ובטה רועד בכל גופו, ונהיה מביט אל אחיו הגדול, | `וַיִּגְהַר עָלָיו; וַיְזוֹרֵר הַנַּעַר עַד שֶׁבַע פְּעָמִים וַיִּפְקַח הַנַּעַר אֶת עֵינָיו` (מלכים ב ד:לה) | equivalent | תחיית מת: רעד, ואחר כך פקיחת העיניים. |
| 14,4 | wꜥ jm =sn jw wꜥ ḥr md.t m-ḏi̯ pꜣy =f jr,j m-j⟨m⟩ =sn wn.jn Bꜣ~tʾ ḥr ḏd n pꜣy =f | את האחר מהם, ואחד מדבר עם חברו מהם. ואז אמר בטה אל | `וַיָּרָץ עֵשָׂו לִקְרָאתוֹ וַיְחַבְּקֵהוּ וַיִּפֹּל עַל צַוָּארָו וַיִּשָּׁקֵהוּ וַיִּבְכּוּ` (בראשית לג:ד) | equivalent | פיוס אחים בחיבוק |
| 14,4 | wꜥ jm =sn jw wꜥ ḥr md.t m-ḏi̯ pꜣy =f jr,j m-j⟨m⟩ =sn wn.jn Bꜣ~tʾ ḥr ḏd n pꜣy =f | את האחר מהם, ואחד מדבר עם חברו מהם. ואז אמר בטה אל | `וְאַחֲרֵי כֵן דִּבְּרוּ אֶחָיו אִתּוֹ` (בראשית מה:טו) | equivalent | אחרי הבכי, האחים מדברים. |
| 15,6 | qn,w (j)ḫ,t.pl qn,w jw pr-ꜥꜣ ꜥnḫ-(w)ḏꜣ-s(nb) ḥr mrw.t =f r-jqr zp-2 r r(m)ṯ.pl nb(.w) n,tj m pꜣ tꜣ r-ḏr =f | רבים ודברים רבים; ופרעה, חיים, שלום, בריאות, אוהב אותו מאוד מאוד, מכל בני האדם אשר בכל הארץ. | `וַיְהִי יְהוָה אֶת יוֹסֵף … וַיִּתֵּן חִנּוֹ בְּעֵינֵי שַׂר בֵּית הַסֹּהַר` (בראשית לט:כא) | equivalent | הצעיר שהודח זוכה לחסד השליט. |
| 16,2 | pꜣy =st hꜣy wn.jn =f ḥr pri̯ m tꜣ wꜥb,t jw ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) ḥr ḥmsi̯ ḥr jri̯.t hrw-nfr r-ḥnꜥ =st jw =st ḥr | לה בעלה. ואז יצא מבית־הטוהר; והוד מלכותו, חיים, שלום, בריאות, ישב לעשות יום טוב עמה, והיא | `לַיְּהוּדִים הָיְתָה אוֹרָה וְשִׂמְחָה … מִשְׁתֶּה וְיוֹם טוֹב` (אסתר ח:טז–יז) | equivalent | "יום טוב" כחג ומשתה (*hrw nfr*, מילולית "יום טוב"). |
| 16,3 | wḏḥ{.pl} n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jw =tw (ḥr) nfr m-ḏi̯ =sst r-jqr zp-2 wn.jn =s[st] ḥr ḏd n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jmm ꜥrq n =j ⸢n⸣ nṯr m-ḏd jr | מוזגת להוד מלכותו, חיים, שלום, בריאות, והיה טוב לו עמה מאוד מאוד. ואז אמרה להוד מלכותו, חיים, שלום, בריאות: "תן לי שבועה באֵל לאמור: 'הנה | `כְּטוֹב לֵב הַמֶּלֶךְ בַּיָּיִן` (אסתר א:י) | equivalent | בקשה מן המלך ברגע של שמחת יין |
| 16,3 | wḏḥ{.pl} n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jw =tw (ḥr) nfr m-ḏi̯ =sst r-jqr zp-2 wn.jn =s[st] ḥr ḏd n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jmm ꜥrq n =j ⸢n⸣ nṯr m-ḏd jr | מוזגת להוד מלכותו, חיים, שלום, בריאות, והיה טוב לו עמה מאוד מאוד. ואז אמרה להוד מלכותו, חיים, שלום, בריאות: "תן לי שבועה באֵל לאמור: 'הנה | `מַה שְּׁאֵלָתֵךְ וְיִנָּתֵן לָךְ` (אסתר ה:ו) | equivalent | הבטחת המלך לאשה. |
| 16,9 | ḫꜣꜥ⟨.tw⟩ n =f ḏf-zp-2 2 n sn⟨f⟩ r-gs pꜣ {wr}⟨bꜣ~⟩nš{.w.pl} 2 n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jw tꜣ wꜥ ḥr ḫpr ⟨ḥr⟩ tꜣ ⟨wꜥ⟩ rw~jꜣ,j n | שיוטלו ממנו שתי טיפות דם בצד שתי המזוזות של הוד מלכותו, חיים, שלום, בריאות; והאחת נהייתה על הצד האחד של | `וְלָקְחוּ מִן הַדָּם וְנָתְנוּ עַל שְׁתֵּי הַמְּזוּזֹת וְעַל הַמַּשְׁקוֹף` (שמות יב:ז) | equivalent | דם על שתי המזוזות של השער |
| 16,9 | ḫꜣꜥ⟨.tw⟩ n =f ḏf-zp-2 2 n sn⟨f⟩ r-gs pꜣ {wr}⟨bꜣ~⟩nš{.w.pl} 2 n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jw tꜣ wꜥ ḥr ḫpr ⟨ḥr⟩ tꜣ ⟨wꜥ⟩ rw~jꜣ,j n | שיוטלו ממנו שתי טיפות דם בצד שתי המזוזות של הוד מלכותו, חיים, שלום, בריאות; והאחת נהייתה על הצד האחד של | `וְלָקְחוּ מִן הַדָּם וְנָתְנוּ עַל שְׁתֵּי הַמְּזוּזֹת וְעַל הַמַּשְׁקוֹף` (שמות יב:ז) | divergence | בשמות הדם מגן על הבית מן המוות, כאן דם השור הנשחט הוא זרע של חיים חדשים (שני העצים). |
| 18,7 | ḥr msy.t{.pl} wꜥ-n zꜣ-ṯꜣy jw =tw ḥr šmi̯.t r ḏd n ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) msy =tw | ילדה בן־זכר; והלכו לומר להוד מלכותו, חיים, שלום, בריאות: "יוּלַּד | `אֲשֶׁר בִּשַּׂר אֶת אָבִי לֵאמֹר יֻלַּד לְךָ בֵּן זָכָר` (ירמיהו כ:טו) | equivalent | אותה בשורה, באותן מלים: "יולד לך בן זכר". |
| 18,8 | n =k wꜥ-n zꜣ-ṯꜣy wn.jn =tw ḥr jni̯.ṱ =f jw =tw ḥr ḏi̯.t n =f mnꜥ,t ḫnm(,t).pl jw =tw | לך בן־זכר." ואז הביאו אותו, ונתנו לו אומנת ומינקות; ו | `וַתָּמָת דְּבֹרָה מֵינֶקֶת רִבְקָה` (בראשית לה:ח) | equivalent | המינקת בבית אצילים. |
| 18,10 | m rnn =f jw ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) ḥr mrw.t{.n} =f r-jqr zp-2 m tꜣ wnw,t jw =tw ḥr dhꜣ{d}⟨n⟩ =f | מטפחים אותו; והוד מלכותו, חיים, שלום, בריאות, אהב אותו מאוד מאוד בשעה ההיא, ומינו אותו | `אֲשֶׁר טִפַּחְתִּי וְרִבִּיתִי` (איכה ב:כב) | equivalent | טיפוח הילד. |
| 19,3 | [qn,w] m (j)r(,j)-pꜥ,t-⸢m-pꜣ-tꜣ-(r-)ḏr≡f⸣? wn.jn ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) ḥr pwy r tꜣ p,t ⸢wn.jn⸣ =⸢tw⸣ | [רבות] כנסיך של הארץ כולה?; ואז עף הוד מלכותו, חיים, שלום, בריאות, אל השמים. ואז | `וַיַּעַל אֵלִיָּהוּ בַּסְעָרָה הַשָּׁמָיִם` (מלכים ב ב:יא) | divergence | עלייה השמימה; במצרים זו לשון קבועה למות המלך ("עף אל השמים", מתאחד עם השמש), לא נס. |
| 19,5 | ḫpr.w m-ḏi̯ =j [wn.jn]? =[tw] (ḥr)? jni̯ n =f tꜣy =f ḥm,t jw =f ḥr wpw.t ḥnꜥ =st m-bꜣḥ =sn jw =tw ḥr jri̯ tjw jm =sn | אשר נהיו לי." [ואז] הביאו לו את אשתו, ונשפט עמה לפניהם, ועשו "הן" ביניהם. | `וְאִשָּׁפְטָה אִתְּכֶם לִפְנֵי יְהוָה` (שמואל א יב:ז) | equivalent | שוב: "נשפט עמה לפניהם". |
| 19,9 | jri̯ n zẖꜣ,w Jni̯~nꜣ pꜣ nb n pꜣj zẖꜣ,w jr pꜣ n,tj jw =f ⟨r⟩ mdw m pꜣj zẖꜣ,w | נעשה בידי הסופר אִנֵנָה, בעל הכתב הזה. הנה מי שידבר בכתב הזה – | `וַתְּדַבֵּר מִרְיָם וְאַהֲרֹן בְּמֹשֶׁה` (במדבר יב:א) | equivalent | "דיבר ב־" במובן "דיבר נגד". |
| 19,10 | jri̯ n =f Ḏḥw,tj ⟨r⟩ jr,j-ꜥḥꜣ,wtj | יעשה לו תְּחוּת לבעל־ריב. | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | equivalent | שמירה על נוסח הכתוב. |
