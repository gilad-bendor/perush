# Round 6, run 2 – the Book of the Dead of Nu, BD 175, Merikare (report, 2026-11-07)

## Done
Corpus `חכמה-ובריאה-במצרים/`; **1,983 new lines** (1,778 + 65 + 140), each drafted, compared with the TLA, taken through
three translator passes, independently reviewed, and aligned by a consistency pass.

| Key | Text | Lines | File |
|---|---|---|---|
| NU1 | BD 17, 18, 18 PS | 159 | `6-ספר-המתים-של-נו/annotated-NU1.rtl.md` |
| NU2 | BD 1, 22, 23, 25, 26, 28, 28-2 (CT 389), 27, 30A, 30B, 43, 24, 31, 33, 34, 35, 74, 45, 93, 91, 41, 42 | 153 | `…-NU2` |
| NU3 | BD 14, 68, 92, 63A, 105, 95, 72, 71, 106, 40, 90, 108, 47, 104, 103, 51, 119, 36, 37 | 140 | `…-NU3` |
| NU4 | BD 79, 117, 118, 21, 12, 122-1, 122-2, 98, 76, 85, 82, 77, 86, 124 | 127 | `…-NU4` |
| NU5 | BD 83, 84, 81A, 87, 88, 132, 148, 52, 53, 61, 56, 57, 54, 38B, 55, 29, 46, 109, 9, 132-2, 94, 63B, 8, 64 (long) | 180 | `…-NU5` |
| NU6 | BD 2, 3, 152, 75, 78, 65, 67, 179, 123, 141/143, 190 | 230 | `…-NU6` |
| NU7 | BD 133, 136A, 134, 130, 131, 89, 154, 115, 116, 112, 113, 138, 187, 189 | 222 | `…-NU7` |
| NU8 | BD 44, 50, 188, 4, 96/97, 153A, 153B, 64 (short), 11, 6, 5, 99B, 7, 176 | 173 | `…-NU8` |
| BD | BD 125 (Round 5 run 6), in its place | (115) | `…-BD` |
| NU9 | BD 126, 145, 144, 137A, 151, 101, 156, 155, 100, 102 | 228 | `…-NU9` |
| NU10 | BD 136A2, 136B, 149, 150 | 166 | `…-NU10` |
| CH | BD 175, pCha (pTurin 8438) – the appendix | 65 | `…-CH` |
| MR | the Instruction for Merikare, pPetersburg 1116A verso, E1–E149 (E130–E138 = project 2's MK) | 149 (140 new) | `9-מוסר-למריכרע/annotated-MR.rtl.md` |

- **Project 6 renamed** `6-ספר-המתים-125/` → **`6-ספר-המתים-של-נו/`** ("ספר המתים של נוּ"), with its print stub; a new
  general head (`translation--head.rtl.md`); BD 125's intro retitled ("פרק 125") and one reserved word in it (`בשאולה`)
  removed. **New project `9-מוסר-למריכרע/`**, print stub `הדפסה/חכמה-ובריאה-במצרים/9-מוסר-למריכרע.rtl.md`; project 2's MK
  intro points to it.
- **Sources:** pNu's other 135 AED texts and BD 175 (pCha) fetched from AED-TEI's GitHub (CC BY-SA, committed:
  `sources/AED-TEI/BD--pNu-BM-EA-10477/`, `BD-175--pCha-Turin-8438/`). The plan's "on disk" was true only of BD 125.
  **The papyrus's order** is not in AED: it came from the Bonn Totenbuch-Projekt's record TM 134299 ("Inhalt"), matched
  to AED's 136 texts (`egypt_tools.py` `NU_ORDER`; the mapping in renderings §12.1).
- **Tool:** `egypt_tools.py` – keys NU1–NU10 (papyrus order, labels `<chapter>.<TLA line>`), CH, MR; formulas scoped by key
  (`BOOK`); the excerpt identity checks (`verify MR` against MK, `verify MK` against the dossier); gate licences widened
  between parts; a loanword gate (`שׁוֹשָׁן`). `build_parallels_index.py` reads the new keys.
- **Process:** eleven translators in sequence (range A, one agent at a time), the coordinator merging each part's proposals
  into renderings §12.6.1–§12.6.11 before the next; three independent fidelity reviewers (70 lines + 3 copies fixed;
  sections in the two `project.md` files); one consistency pass over the book by lemma (108 lines aligned, §12.6.13).

## Verification
- `egypt_tools.py verify --strict` (all 25 keys of the corpus): 0 problems; one listed repeated-line difference (NU5 132.1 /
  132-2.1, a bracket in the base, justified in the entry). `selftest`: 45 lines, 0 failures.
- `verify MR`: E130–E138 identical to project 2's MK; `verify MK`: E130–E136 identical to the fifth-day dossier's MK;
  `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems (after the E132 revision, below).
- `tools/check_bible_quotes.py` over every `.md` of the corpus, the dossier, the print stubs and the edited shared files: 0
  problems.
- Both parallels indexes regenerated (the corpus's 1,624 rows; the Ugaritic corpus's 1,411).

## Key findings
**The ancient mind.**
- **Knowing names is the passport.** Every door, portal, gate, ferry part and net in the beyond asks the dead man its
  name, and he passes by naming it (BD 99B, 122, 125, 144–145, 153); "I know you, I know your names; may you know me as I
  know your number" (BD 71–72). Not righteousness opens the gate, but knowledge.
- **Survival is transformation.** The dead man becomes a falcon, a heron, a lotus, a snake, a crocodile, a benu (BD 76–88);
  *ḫpr* "become" is Khepri's own root, so each change repeats the sunrise; the ba is a hidden bird ("my nest will not be
  seen, my egg will not be broken").
- **The person is assembled from parts** – mouth, name, heart, head, magic, ba, shadow – each restored by its own spell;
  the heart is a separate person that can testify against its owner, and must be told not to (BD 30B).
- **The fear is of rot and of a "second death", not of death.** BD 154 says plainly that everything living dies and decays,
  and asks only to be spared the decay; the dead man must not walk upside down or eat excrement (BD 51, 53, 189).
- **BD 17 is one of the oldest commentaries on a sacred text**: rival glosses ("What is it? It is …"; "another version")
  stand side by side; the dead man escapes death by being the creator at the first moment ("I am Atum when I was alone in
  Nun"; "I am yesterday, I know tomorrow" – yesterday is Osiris, tomorrow Re).
- **The end of the world, foretold by its maker** (BD 175): Osiris complains of a netherworld without water, air or love;
  Atum answers that he will damage all he made and the land will come into Nun as at first – only he and Osiris remain, as
  serpents men do not know.
- **Ritual as found text and model**: BD 64's rubric (a text found in Hermopolis under a god's feet, by a king's son), a model
  boat with ochre figures *is* the voyage in Re's bark, the shabti answers "here I am!" for its owner at the corvée.
- **Merikare**: a king who confesses a wrong (Thinis: "a blow is repaid by its like"), a judgement of the dead that the king
  too must face ("they see a lifetime as an hour"; a man's deeds heaped beside him), speech as a king's strength ("a
  king's strength is his tongue"), promotion by ability, the Asiatic pitied and despised.

**The Bible (the apparatus; Egypt was in contact with Israel, but none of these is a source):** Gen 1:2 – Atum alone *in* Nun
(BD 17, 85) [divergence]; Gen 2:5 `טרם` (BD 17); Gen 6:7, 9:11 and 7:23 – the creator's decision to damage what he made, and
the one who remains (BD 175) [equivalent / divergence]; Ps 102:27, Isa 51:6 – the heavens pass, the god remains (BD 175);
Ps 16:10, Job 19:26, Isa 66:24 – the body not given to rot, the worm (BD 154); Gen 41:2, 5 – seven cows, ears on a stalk
(BD 148, 109); 2 Kgs 22:8 – a book found in a temple (BD 64, 137A); Deut 19:15–16, Ps 27:12 – the witness who stands
against a man, here his own heart (BD 30A/B); Prov 14:25 `עֵד אֱמֶת` = mtr.w mꜣꜥ.t word for word (BD 96); Eccl 9:12, Ps 124:7,
Hab 1:15 – the net (BD 153); Gen 22:1, Isa 6:8 `הִנֵּנִי` against the shabti's "here I am!" (BD 6); Ps 78:23 – the doors of
heaven opened (BD 68); Gen 3:14 – "he who goes on his belly" as a serpent's epithet (BD 108); Isa 64:3 – "no eye has seen,
no ear heard" (BD 101.2, after review 3's tense fix); Ps 90:4, Eccl 12:14 (Merikare E54); 1 Sam 15:22, Prov 21:3, Hos 6:6
(Merikare E128); Judg 1:7 (Merikare E69, E118–122); Prov 30:10 almost word for word (Merikare E146). Loanwords in their own
Egyptian setting: `תֵּבָה`, `יְאֹר`, `שֵׁשׁ`, `קֶסֶת`, `חוֹתָם`, `קוֹף`, and **`שׁוֹשָׁן`** (zšn, newly gated). Proper names
[cognate]: On (Gen 41:45), Hanes (Isa 30:4), Syene (Ezek 29:10).

## Decisions taken (minor, by the coordinator)
- The papyrus's order from the Bonn record; where record and AED do not map one to one: 18 PS, CT 389 (28-2), 30B and 122-2
  follow their chapter; the second 132 = AED's 132-2, the second 136/136A = 136A2; the long BD 64 placed first, the short
  second (an assumption); AED's one 151 at its first place; AED's 50 at the record's "50" (not "50B").
- Ten Nu parts by chapter boundaries (≈ 130–230 lines each), each a fresh translator (a resumed one would have passed ≈ 1.3M
  tokens); NU10 and CH together; BD 125 kept as its own key, in place.
- Renderings §12 before the first line, then §12.6.1–§12.6.13 (each part's proposals merged; the consistency pass's
  alignments). Among them: Rw.tj `שני־אריות` everywhere (NU5's `רוּטִי` changed); sbḫ.t `מבוא` (NU6 141.56 aligned); BD 125's
  two "witness" `עֵד` vocalized; a base line without `[…]` for Nu's name gets none in the Hebrew; sḏ.t `שלהבת` (BD 125's six
  `להבה` lines aligned); wꜣ.t `אורח`; twr `מזוקק`; jṯi̯ `לקח`; the food formula's ḫmi̯ `לא אֵהָרֵס בה`.
- **Merikare E132** `אויב[יו]` → `אויביו` (a restored suffix takes no bracket) – applied to MR, MK and the fifth-day dossier at
  once (review 3's proposal).
- Gates: about a dozen misfires fixed in the tool (licences by spelling and by TLA lemma id; the "better than" formula scoped
  out of the Book of the Dead keys; whole words exempted: `משיט`, `לוחם`, `מושבות`, `כתיבה`); `לשאול` "to ask" left to a
  line-by-line `[היתר שער]` (an exemption could hide "to Sheol").

## Questions for the user
1. **BD 175 / Merikare: ḥḏi̯ `הזיק` ("damage")** – fixed by the dossier's MK E132; the usual reading of BD 175's "I will destroy
   all I made" is stronger. Changing it means changing MK, MR, the dossier, Amenemope and CH together.
2. **Merikare E119**: the base "it happened through what I did" against pCarlsberg "but not through what I did" (the base
   followed). **E128**: `ככר?` "loaf" (the TLA's lemma) against the usual "character" (the colophon's same word is "character").
3. **BD 84.5–6** `n rḫ=j`: kept as "I did not know" against the TLA's rhetorical "do I not know?" (which reverses it).
4. **`האציל`** for sꜥḥ (BD 78): the root of Num 11:17 `וְאָצַלְתִּי` is ours, not the Egyptian's – keep, or `עיטר`?
5. **`ועד`** for ḏꜣḏꜣ.t (tribunal) sounds like the modern "committee"; **`מה הוא?`** for BD 17's gloss question against the
   TLA's "Wer"; **`חלקת־האל`** for the necropolis (the 2026-10-30 rule) kept throughout.
6. **BD 64's two copies** (long first, short second) and the Bonn record's "50B" / second 151 – Lapp 1997 (not available)
   would settle the order.
7. Several *n sḏm.n=f* lines rendered as plain past rather than "cannot" (NU8 11.3, 99B.6; NU9 145.43; NU10 149.85–86, 94;
   Merikare E92 "he did not conquer, nor was conquered") – §3a allows both.

## Problems and skipped items
- **No quota stop** (range A throughout; the gate said GO at every step).
- **Two VM restarts** (during NU7, and during review 3): the work on disk was committed as a save, and the agent resumed with
  SendMessage; nothing lost.
- **Process slips recorded by the translators**: the TLA German read before drafting for some lines (NU2 BD 74/45, NU7 112–113
  and 138–189, NU10 BD 150's captions) – each recorded in the progress log, the Hebrew checked against the transliteration.
- Nothing skipped.

## Cross-corpus splits left for the lead
- Two lemmas sharing one Hebrew word (listed in renderings §12.6.13): jꜣ.w / dwꜣ `הלל`; sk / zjn `ניגב`; nḏ / zꜣu̯ `שמר`; ꜥḏ /
  psḏ `זוהר` (HC / NU); ṯꜣi̯ / nḥm `נטל`; the oar words (mjḥ.w, mꜥwḥ.w, AM's ḥmw `משוט`; wsr.w / AM's ḥp.t); jm.j-rʾ / ns `לשון`;
  rri̯ / šꜣj `חזיר`; nrw / SI's ḥr.yt `אימה`; qfdn.w / AM's jꜥnꜥ `בבון`; šwꜣ.w `רָשׁ` (MR) / AM's one šwꜣ.w `עני`.
- One lemma, two Hebrew across texts (kept by text or sense): mr.w `חבורה` (MR) / SI `אנשים`; sḫt `צד` (AM, NU8) / BD 125, 14
  `לכד ברשת`; jꜣ.t `תל` (BD 149) / `מוט` (BD 77) / MT `נֵס`; qnj.t `צהוב` / HC `זרניך`; ḫꜣw.t `שולחן־הקרבנות` / WE `מזבחות`;
  wpi̯ `פילח` / SS `פתח`; dmj and the horizon god's two forms (`רַא־חַרְאַחְתִּי` TB / `חוֹרוּס־אָחְתִּי` NU5).
- The print layout: the corpus has no layout modules; the new and renamed translations print by the folder's default rule (a
  layout session's work).
