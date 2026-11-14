# Round 8, run 3 – the Rigveda, Book 2, whole

Child session `Round8/Run3: the Rigveda, Book 2`, branch `translation-round-8-run-3`, 2026-11-13 23:30 → 2026-11-14
~04:10 UTC (range A, one agent at a time). Candidate `iran-india-01`; model: Book 7 (Round 7 run 1).

## Done
- **The whole of Rigveda Book 2** (the Gṛtsamada family book): **43 hymns, 429 stanzas, 1,694 pādas**, every pāda
  drafted with the full apparatus (a פירוק of every word from the Zurich morphology, rank-3 translations and Jamison per
  stanza, parallels, notes on the text's own terms), each hymn with a Hebrew introduction.
  - Project `הוודה-והאווסטה/9-ריגוודה-ספר-ב/`: `annotated-RV2.<n>.rtl.md` and `translation--intro-RV2.<n>.rtl.md` per hymn
    (n = 1…43), the generated `translation-RV2.<n>.rtl.md` and the book's `translation.rtl.md` (head
    `translation--head.rtl.md`), `project.md` (scope, the parts, five translator sections, five reviews, the consistency
    pass, the parallels table), `translator-prompt.md` (the shared prompt of the translators and reviewers). Print stub
    `הדפסה/הוודה-והאווסטה/9-ריגוודה-ספר-ב.rtl.md`.
- **Workflow:** five translators strictly one after another (2.1–10: 337 pādas; 2.11–16: 320; 2.17–24: 338; 2.25–33: 340;
  2.34–43: 359; 30–41 minutes each), each followed by an independent fidelity reviewer (8–15 minutes: 11, 9, 24, 14, 15
  lines fixed, plus intros and heads), then one consistency pass over the book against Book 7 (51 lines: 49 in Book 2,
  2 in Book 7).
- **Tool** (`vedic_tools.py`): keys RV2.1–RV2.43, project P9, `RV2` / `RV2.a-b` ranges; the whole-book projects (P7, P9)
  share the "(RV 7)" / "(RV 2)" name rows and the stricter short licences; **converter fix**: pāda letters `a`–`j` (it read
  `a`–`g`, and had dropped RV 2.22.1h and 2.22.4h – 1,692 rows against the TEI's 1,694, found by counting before the first
  line). The 43 Zurich TSVs committed (CC BY 4.0).
- **Renderings** (`הוודה-והאווסטה/renderings.md`): §3.1 five "(RV 2)" names; **§5.6** Book 2's pre-set terms; formulas
  **F9** (the family refrain *bṛhád vadema vidáthe suvī́rāḥ* `נדבר נא (בקול) רם במועצה, רבי־גיבורים`, 22 hymns), **F10**
  (2.15), **F11** (2.12 `הוא – אנשים! – אינדרה`); selftest lines (23/23); §11.23–§11.27 (each part's merged proposals);
  the Apāṃ Napāt regex takes the sandhi form.
- **Sources:** VedaWeb `rv_book_02.tei`; Jamison's commentary on Book II (`II-9-25-26.pdf` + `.txt`); recipes and manifest
  items added.
- **Shared files:** STATUS, the plan row, history (H2 story, changelog), guidelines §5.2 (one lesson block), tools.md,
  sources-registry.md, corpus.md, the Jamison README, fetch-recipes / MANIFEST (new items only); the corpus parallels index
  regenerated (646 rows).

## Verification
- `vedic_tools.py verify RV2 --strict`: **0 problems** (1,694 entries = the base, 0 repeated-line differences);
  `verify --strict` over the whole corpus: 0 problems (the 2 known differences outside Book 2: RV 10.10.13d/14b,
  7.38.6b/7.52.3b, both justified).
- `vedic_tools.py selftest`: 23/23 (4 new Book 2 lines).
- `tools/check_bible_quotes.py` over every `.md` of `הוודה-והאווסטה/`: **0 problems**.
- `build`: every `translation-RV2.<n>.rtl.md` equals its `>` lines; Book 7's translation rebuilt after the two aligned lines.
- Not run: the print layout (Book 2 has no layout module; it prints by the folder's default rule – a layout session's work).

## Key findings
**The ancient mind.**
- **A family hymnal with a signature:** 22 of 43 hymns close with one line, "may we speak loftily at the ritual
  distribution, rich in heroes"; the Indra hymns share a whole closing stanza (seven copies) in which the priestly gift is
  a milk-cow to be milked for the singer. Variation inside a fixed frame is the craft.
- **The fire contains the gods:** 2.1 identifies Agni with every god and goddess in turn ("you are Indra … you are
  Varuṇa … you are Aditi"); the fire is every priest too, even the one who feeds it (2.5.7); the gods eat through its
  mouth (2.1.13–14); it is born from the kindling sticks pictured as a woman in labour (2.10.3).
- **Doubt voiced in a hymn:** 2.12 answers people who ask "where is he?" and say "he is not" with a list of deeds and the
  refrain "he, o peoples, is Indra"; 2.12.15 "you are truly real". Every deed was done "in the exhilaration of soma"
  (2.15); praise and soma make the god great.
- **The word as a force:** Brahmaṇaspati, Lord of the Formulation, splits the Vala cave "with the formulation" and
  releases the cows (2.23–24); the "stone-mouthed well" opened.
- **Guilt as a knot, not a stain:** the Ādityas and Varuṇa (2.27–29) are asked to loosen guilt "like a rein", to send off
  the debts the poet made and not let him live off another's (2.28.9), to keep the bad dream away; the plea is for
  loosening and mercy – nothing is forgiven, nothing confessed.
- **The god who strikes and heals:** Rudra, "best physician of physicians", asked not to be angry (2.33).
- **Small worlds:** the poet as an unmarried daughter growing old in her parents' house, begging for her share (2.17.7);
  the village at evening – the weaver stops, the craftsman leaves his work half done, the mother keeps the best portion for
  her son (2.38); the fire burning "without wood" in the waters (2.35); the season-cups drunk god by god (2.36–37); the
  omen bird's calls as a household charm closing a priestly book (2.42–43).
**The Bible in the apparatus** (all shared motifs of cultures that never met, said so in words): Ps 42:4, 11 and Ps 14:1,
Jer 5:12 (2.12.5 "where is he?", "he is not"), 2 Chr 20:20 (2.12.5d), Jer 10:10 (2.12.15b), Job 9:8, Isa 35:5–6, Exod
14:29; Exod 4:16 and Deut 4:24 (2.1.13 the fire as the gods' mouth, [divergence]); Ps 7:16–17 (2.23.6d), Jer 23:29 (the word
that breaks rock, 2.24.3c), Exod 17:6 (2.24.4a); Ps 130 [divergence] (2.28, loosening, not forgiveness), Ezek 18:20 (2.28.9),
Ps 121:4 (2.27), Ps 118:5 (narrow and wide), Deut 22:6 (2.29.5d), Deut 8:5; Deut 32:39 (Rudra, 2.33); Ps 139:13 (Rākā's
needle, 2.32); Exod 3:2 (2.35.4d [divergence]), Ps 104:22–23 (2.38.8c [divergence]), Song 4:5 (2.39.6b), Qoh 10:20 (2.42.1b).
No word of the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון`, `תהום`, `רקיע`, `שאול` in any line (and, after the reviews, in
no note or intro).

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- The project layout (one KEY / file per hymn, as Book 7), the five parts, the review after each part (range A allows one
  agent, so the reviewer ran before the next translator instead of beside it).
- The pre-sets (§5.6): F9 with `(בקול)` for the adverbial neuter; *vidátha* `מועצה` (Book 7); *ukthyà* `ראוי־לאמירה`;
  *dákṣiṇā* `שכר־הכוהנים` (*mīḍhá* keeps the bare `שָׂכָר`); *maghónī* `בעלת־השפע`; *r̥tú* `עונה`; *r̥ṇá* `חוב`; F10, F11.
- The merged rulings (§11.23–§11.27): the priest offices as one family (`כוהן־ההנהגה`, `כוהן־ההדרכה`, `מצית־אַגְנִי`,
  `כהונת־…`); *bhága* in the Indra closing stanza as the god Bhaga; *raśanā́* `רסן`; *abhí* √*kṣam* `היה מתון`; the
  Brahmaṇaspati name written by hand (Zurich splits *bráhmaṇas páti*); the season-cup offices in the ablative.
- The consistency pass: √*puṣ* takes Book 7's `שגשג` and √*vakṣ* moves to `פרח` (Book 7 had used `שגשג` for both);
  √*cit* "appear" `נגלה`; *jyéṣṭha* `הגדול`; about 20 single lemmas aligned to Book 7. **Two Book 7 lines changed** (the
  flagged items only): 7.97.4a *yóni* `קן` → `רחם` (*vásman* keeps `קן`), 7.67.7c *áheḷant* `שאינה כועסת` → `שאינה
  רוגזת` (`כעס` is *manyú*'s).
- Renderings §5.6's *duṣvápnya* "2.28.10" corrected (that pāda has *svápne*; the word is not in Book 2).

## Questions for the user
1. 2.12.5b *naíṣó asti* `"אין הוא"` – the existential reading ("he does not exist"), with Jamison and the standard
   translations; and the 2.12 parallels with Ps 14:1 / 42:4 as shared motifs.
2. *bhága* in the Indra closing stanza (seven copies) read as the god `בְּהַגָה` (Geldner, Jamison: "fortune").
3. Readings in the lines, alternatives in the notes: 2.1.4c *sambhújam* (noun); 2.10.3c *śíriṇā* `באפלה (?)`; 2.13.7b
   *dā́na* `בחלוקה (?)`; 2.12.15a *dudhrá* (nominative); *krívi* (2.17.6c, 2.22.2a: a name, not "worm"); 2.23.16c (WG /
   Jamison); 2.21.4d *uṣásaḥ* (acc. pl.); 2.29.4c *r̥té* "without"; 2.33.12b (3rd sg.); 2.34.2d *ájani* (passive);
   2.34.10cd (a supplied verb); 2.35.5c *kŕ̥tā* `(?)`; 2.38.8c Mārtāṇḍa (name, not "bird"); 2.41.19 (the two carts or
   Heaven and Earth, left open).
4. The refrain's `(בקול) רם` for *bṛhád* (adverbial "loftily, aloud").

## Problems and skipped items
- **No quota stop**: the gate said GO (range A, five-hour `allowed`) at every step.
- **A VM restart** (≈ 01:15 UTC) stopped translator 3 after 2.17–2.19: the coordinator committed the files on disk and
  resumed the translator with SendMessage; nothing was lost.
- Translator 5's insert script first put its section inside an HTML comment of `project.md`; it moved it at once.
- Not done: the print layout module (a layout session); the parallels index is generated, not reviewed by hand.

## Cross-corpus splits left for the lead
- **Inside Book 7** (found by Book 2's consistency pass; Book 7 lines not touched): 7.8.2d √*vakṣ* `שגשג` → `פרח`
  (after the √*puṣ* / √*vakṣ* ruling above); 7.104.6d √*jinv* `עוררו` → `קדמו` (`עורר` is √*budh* caus.'s);
  7.1.6a `הנערה` → `הצעירה` (*yuvatí*); 7.74.6c `התעצמו` → `תפחו`; 7.104.17b `בהסתירה` → `בהחביאה` (√*guh*); 7.18.11b
  `פיזר` → `שיטח`; *ucátha* / *ukthá* both `אמירה`; *majmán* `עוצמה` / *śávas* `עצמה`; renderings §11.19's "*yóni* `קן`"
  no longer holds (7.97.4a is `רחם` now).
- **With the Kaṭha:** *haṃsá* `אווז` (Books 2 and 7) against KU `ברבור`.
- **Kept in Book 2 (recorded at their lines):** *viśvárūpa* / *viśvápsnya*; *mandín* / *mádya* `המבסם`; √*ci* 2 `תבע`
  (Book 7 `מענישים`), √*śās* `ייסר` / `כוון`, √*vyadh*, *khā́* `מקור` / *khá* `פתח`; *hótrā* `נסך` / *hotrá*
  `כהונת־הקריאה`; *vājayánt* (Book 7 itself split).
