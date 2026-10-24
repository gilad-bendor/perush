# Round 4, run 3 – Egyptian wisdom and creation: done (first draft)

Child session `session_016VYybQrHJEd4FJNsbr7Be9` (`Round4/Run3`), 2026-10-23 18:31 – 2026-10-24 ~01:40 UTC.
Coordinator: this session. The texts were translated by **two sub-sessions** (guidelines §5.1a), one after the other,
each with its own strictly sequential sub-agent chain; their reports are `run-3--sub-1.md` (Amenemope) and
`run-3--sub-2.md` (the creation texts and the Heavenly Cow) – the details below are summarized from them. Model: Opus 5.5
throughout (the Memphite transcription agent too: reading diacritics from page images is not mechanical enough for a
cheaper model). No quota stop: `rate_limit_info.status` was `allowed` before every sub-agent and sub-session.

## Done

**A new corpus, `חכמה-ובריאה-במצרים/`** (the folder's first Egyptian corpus), set up by the coordinator before the
first line (commits bc38bf8, 1a09ee3, 81a0801):
- **Base texts:** AED-TEI (the TLA's 2018 snapshot as TEI, CC BY-SA 4.0, committed) fetched per text from raw GitHub –
  `zenodo.org` was unreachable; the live TLA was never touched. Amenemope (pBM EA 10474 + five older witnesses),
  Merikare (three witnesses), the Heavenly Cow (Seti I, Tutankhamun, Ramesses VI), PT 571, 486, 527, 600, pWestcar,
  the Bremner-Rhind Apophis books. The Memphite Theology is not in AED: **El Hawary 2010** (OBO 243, ZORA, open access)
  – its text layer garbles Egyptological letters, so a sub-agent transcribed his transliteration from the page images
  (`memphite-transliteration.tsv`, 88 rows, committed as the reading of a public-domain ancient text, with
  attribution; the PDF, his German and notes git-ignored). Rank 3–5: the TLA's German, **Hornung 1997** (the Cow, OBO 46),
  **Lange 1925** (Amenemope, PD OCR).
- **Tools:** `tools/aed2md.py` (AED TEI → line data); `egypt_tools.py` (data / tr / fill / lex / lemma / verify / build /
  grep / gates / selftest); `build_parallels_index.py`.
- **Reference files:** `renderings.md` (the name table; the transliteration convention ṯ `צ׳`, ḏ `ג׳`; the grammar
  mapping Middle / Late Egyptian → Hebrew; key terms; the reserved words with tested gates – the Gen 1–2 and 6–9 words
  never, the Egyptian **loanwords** only for their own source, Proverbs' and the Torah's key words licensed by their
  Egyptian counterparts; formulas; **§8 the Amenemope ↔ Prov 22:17–24:22 / Torah table**, checked against the TLA
  before drafting), `translator-brief--egyptian.md` (the ★ rules), `corpus.md`, `parallels-index.md`.

| Project | Text | Lines | By |
|---|---|---|---|
| `1-מוסר-אמנמופה/` | The Instruction of Amenemope (AM), prologue, 30 houses, epilogue, colophon | 551 | Sub1: two translators (parts 1–2, 3–5), three reviewers |
| `2-בריאה-במצרים/` | Merikare E130–138 (MK); Pyramid Texts 571, 486, 527, 600; the Memphite Theology, all of El Hawary's edition (MT) | 9 + 18 + 88 = 115 | Sub2: translator 1, three reviewers |
| `3-ספר-הפרה-השמימית/` | The Book of the Heavenly Cow, Seti I (HC), with the older copies in the apparatus | 95 | Sub2: translator 2 |
| (the Ugaritic corpus's `3-תיק-היום-החמישי/`) | the fifth-day dossier: pWestcar's wax crocodile (WC) and the Bremner-Rhind Apophis spells (AP), the items run 1 left to this run | 2 excerpts | Sub2: one agent |

Files per project: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated `translation-<KEY>.rtl.md` and
`translation.rtl.md`, `project.md`. Print stubs: `הדפסה/חכמה-ובריאה-במצרים/{1-מוסר-אמנמופה,2-בריאה-במצרים,3-ספר-הפרה-השמימית}.rtl.md`.
The dossier's Merikare lines (E130–136) were aligned with project 2's Hebrew (six revisions, with reasons).

**Shared files, updated once at the end (this commit):** `STATUS.md` (§3 row, §4 run 3), the plan row, guidelines §5.2
(three lessons) and §6.7 (the Egyptian corpus; its traps), `history.md`, `sources-registry.md` §4.4t, `tools.md`,
`sources/fetch-recipes.tsv` + `MANIFEST.json` (the two ZORA PDFs and their derived files: new items only),
`sources/Hornung-…/.gitignore`. `domains.txt` needed nothing new (raw GitHub, ZORA, archive.org were listed).

## Verification (final state)
- `egypt_tools.py verify --strict` (all eight KEYs): AM 551/551, MK 9, PT571 4, PT486 3, PT527 4, PT600 7, MT 88, HC 95 –
  **0 problems, 0 repeated-line differences**; translation files equal the `>` lines.
- `egypt_tools.py selftest`: 31 lines, 0 failures.
- `3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems (8 excerpts).
- `tools/check_bible_quotes.py` on every `.md` of the corpus, the dossier, the print stubs, `translation-guidelines.md`,
  `STATUS.md`, `history.md`: **0 problems**.
- `build_parallels_index.py`: 805 rows; the key findings are at the top of `parallels-index.md`.
- Three review passes (fidelity, consistency, Hebrew) per text, each by a fresh reviewer, logged in the `project.md` files.
- (`ugarit_tools.py verify` could not run here: the CUC base is git-ignored and not restored in this VM; the Ugaritic
  tablets were not touched – only the dossier, which has its own verifier, passed.)

## Key findings

**For the Bible**
1. **Amenemope ↔ Prov 22:17–24:22, saying by saying, on the transliteration:** "give your ears" (3.9) against `הַט
   אָזְנְךָ` [divergence]; the oldest witness has "inside your belly" (Prov 22:18 `בְּבִטְנֶךָ`); the hot man (11.13–14,
   13.8–9) and Prov 22:24–25 in the same order; wealth "made itself wings like geese" (10.3) against `כִּי עָשֹׂה יַעֲשֶׂה-לּוֹ
   כְנָפַיִם כְּנֶשֶׁר` (Prov 23:5) – same verb and noun, another bird; "the bowl that is before you" (23.16) = `אֶת-אֲשֶׁר
   לְפָנֶיךָ` (Prov 23:1); the thirty houses (27.7) behind `שָׁלִשִׁים` (Prov 22:20).
2. **The Torah's laws of boundary, measure and the weak:** the boundary stone and the widow's boundary (7.12–15 ↔ Deut
   19:14, 27:17; Prov 23:10, whose `גְּבוּל עוֹלָם` is emended to `גְּבוּל אַלְמָנָה` from this line); two words for the
   balance as in Prov 16:11 `פֶּלֶס וּמֹאזְנֵי`; the oipe "that takes two" (18.21) ↔ `אֵיפָה וְאֵיפָה` (Deut 25:14) –
   `אֵיפָה` is the Egyptian word itself – and the false measure is the god's "abomination"; the blind, the dwarf, the lame
   (24.9 ↔ Lev 19:14); the widow in the field and the stranger (26.9–11 ↔ Deut 24:19–21); two thirds of a poor man's
   debt released (16.5–7: a [divergence] from Deut 15); "man is clay and straw, the god his builder" (24.12–13 ↔ Gen
   2:7, Job 33:6).
3. **"Not yet" (Gen 2:4b–5):** the Pyramid Texts' `n ḫpr.t X` (PT 571, 486) is the exact frame of `טֶרֶם יִהְיֶה`; and in
   Egypt **death itself "came into being"** (Gen 2:17 [divergence]).
4. **The Memphite Theology:** creation by heart and tongue, "the mouth that devised the name of every thing" (Gen 2:20,
   Ps 33:6, 9); "Ptah rested (ḥtp) after he had made everything" (59): `נָח` as Ex 20:11 `וַיָּנַח`, with no day and no
   number (Gen 2:2 [divergence]); kꜣ.t "his work" `מְלָאכָה` (Gen 2:2); a worm-eaten ancestral book recopied by Shabaka –
   Hezekiah's contemporary (Prov 25:1).
5. **Merikare:** mankind as the god's flock and "his images", for whom he made heaven, earth, breath, plants, birds and
   fish (Gen 1:26–30, 2:7), punishing only the plotters (Gen 6:5–7 [divergence]).
6. **The Heavenly Cow ↔ Gen 6–9, 11**, with every reserved root of the flood story kept out of the lines: the god's change
   of heart is weariness, not regret (Gen 6:6 [divergence]); mercy by a trick of red beer, no chosen survivor; "never
   again" (Gen 8:21); heaven and earth separated (Gen 11); `jw=j jm=j` "I (am) I" (49) against Ex 3:14; Thoth installed
   "in my place" (Gen 41:40).
7. **The dossier (Gen 1:21):** Westcar's wax crocodile "became a crocodile of seven cubits" in the hands of a lector priest
   whose title gave Hebrew `חַרְטֹם` – the form of Ex 7:10–12 `וַיְהִי לְתַנִּין`, with msḥ where Hebrew has `תַּנִּין`; the
   Apophis spells curse the water serpent with childlessness (the reverse of Gen 1:22's blessing).
8. **Loanwords in their own contexts:** `תֵּבָה` (AM 11.4, the coffin), `אֵיפָה`, `חָתַם` (sin "sealed with his finger",
   19.21 ↔ Job 14:17), `יְאֹר`, `כֶּתֶם`, `הָבְנִים`; and Semitic loans in Late Egyptian (ꜥšq `עָשַׁק`, mkmr.t `מִכְמֹרֶת`).

**For the ancient mind**
- A land surveyor's conscience: his sins and punishments are those of his trade (boundary stones, measures, tax lists).
- The "hot" and the "silent" man as two trees (one floated off and burned, one flourishing in its garden); silence as power.
- Measures as divine eyes (the Udjat, the oipe as the Eye of Re); Thoth's baboon at every market balance.
- Life as a Nile voyage: the tongue the steering oar, the Lord of All the pilot; "no one is sinless", in a culture whose
  dead declare their innocence forty-two times.
- A creator who withdraws from the world out of old age and weariness; night, war and the separated sky begin after
  mankind's rebellion; creation as thought, word and pun (Shu from a sneeze, Tefnut from spitting).
- Magic as a gift of god (Merikare) and a regulated force (the Cow); the uncreated serpent destroyed every day.

## Decisions taken (minor, by me and the sub-sessions; all recorded in `renderings.md` §10)
- The **corpus design**: three projects; the Memphite Theology from our transcription of El Hawary (committed; the PDF
  ignored); Pyramid Texts: the Pepi I copies of 571 and 486 (the older), Merenre's 527, Pepi II's 600.
- **Renderings fixed before drafting** (§4–§6), among them: sbꜣ.yt = `מוּסָר` (`תּוֹרָה` never; Prov 1:8 [equivalent]); a
  chapter "house" = `בַּיִת`; the two hearts `לֵב` / `לֵבָב`; pꜣ šmm = `הַחַם` (always vocalized: Ham); Re = `רַא` (never
  `רע`); msḥ = `תִּמְסָח` (`תַּנִּין` never); jp.t = `אֵיפָה` [loanword]; ꜣḫ X r Y = `מוּטָב X מִ־Y` (`טוֹב` only nfr); ḥtp =
  `נָח`; n ḫpr.t = `טֶרֶם`.
- Sub1: the refrains fixed by their first copies (renderings §7: 3.17 = 5.18 = 17.15; 4.2 = 7.10; 5.19 = 17.16; 8.10 =
  13.9; 9.6–8 = 16.12–14; 22.5–8 = 23.8–11 – correcting my pre-set list); ~120 lemmas merged; the cross-language
  cognate rule scoped (loanwords and rare technical words, not common Semitic vocabulary: §5.2 now says so).
- Sub2: kꜣ.t "work" = `מְלָאכָה` (so the Memphite Theology shows Gen 2:2); the dossier's Merikare lines aligned; the root
  `שחת` gated; `סְגֻלָּה` withdrawn from Egyptian lines (the law corpus's *sikiltu*); gates widened (never the Hebrew bent).
- The optional dossier items (Westcar, Apophis) were done, being cheap after the main work.

## Questions for the user
None blocks anything; each line carries the chosen reading with the alternative in its note. Optional:

| Where | Question | Now |
|---|---|---|
| AM 25.7, 25.9, 26.14, 27.12, 15.7 | *twr* split by construction: `הִנָּזֵר מִן` / `הוֹקִיר` / `נִטְהַר` (no Hebrew verb holds "keep away from", "respect" and "be pure") – keep the split? | split |
| AM 2.8, 2.12 | "true of voice" (= the late): of Amenemope's father or of Amenemope himself? | open in the notes |
| MT (all) | ḥtp = `נח` in every verbal use (so Ptah's "rest" in 59 is the same word as the reconciliation of Horus and Seth), or by sense with `נח` only in 59? | `נח` everywhere |
| HC 27, 15 | the TLA's "I will never kill them" / "Do not diminish them!" against Hornung's "I will kill them without exception" | the TLA, marked `?` |
| MK E134 | "rulers *of perfume*" (our base, pCarlsberg) or "in the egg" (pMoscow, the usual reading) | the base, marked |

## Problems and skipped items
- **Nothing skipped.** No quota stop. The VM rebooted several times while waiting; nothing was lost (everything pushed).
- **A converter bug, found and fixed during Sub1:** the TLA's `<gap/>` between two analyses of one written stretch was
  printed as `[…]` when the analyses spanned several words; nine Amenemope lines had been translated with both analyses
  side by side; the fidelity reviewer caught it, the tool was fixed and the lines retranslated.
- **Open textual points for a later session:** AM 27.17–28.1 line ends (AED marks loss; the TLA's German and Lange
  show none: check the BM photographs); the Memphite transcription's doubtful signs (30b `[Stš]`, 61 `šnw.t`: a broken
  sign read as š) – a check against Sethe 1928 (PD) would settle them.
- Two ★ slips caught by the translators themselves (a prologue drafted vocalized, rewritten plene; Lange's German once
  written from memory, replaced from the OCR); one translator read the TLA's German before finishing HC 32–48 (recorded).
- `ugarit_tools.py verify` not run (CUC not restored here; the Ugaritic tablets untouched).

## Cross-corpus splits left for the lead
- **Common Semitic words shared by sense across languages** (Sub1's ruling, now in §5.2): `אַלְמָנָה` (ḫꜣr.t / *almattu*),
  `שֵׁכָר` (ḥnq.t / *šikaru*), `מִדָּה` (dbḥ / *maddattu*), `טִיט` (ꜥmꜥ.t / *ṭiṭṭu*), `תֶּבֶן` (dḥꜣ / *tibnu*), `כָּבֵד` (dns /
  *kabtu*) – [cognate] in Akkadian lines, [equivalent] in Egyptian ones: confirm for every corpus.
- `הָבְנִים`: Gudea's Sumerian *esi* (by sense) and Westcar's hbnj (the Egyptian etymon of the loanword): by the cognate
  rule the Egyptian word owns it – confirm or move *esi*.
- `וְזִיר` (HC ṯꜣtj by sense = the cross-corpus word of *sukkallu*); `סוֹכֵן` (AM rwḏ.w, Gudea *aĝrig*, the Advice
  *šatammu*, all by sense); `חוֹכֵר` (AM ꜥḥwtj) chosen to leave `אָרִיס` to *errēšu*.
- `שָׁמַר` / `נָצַר` for the Egyptian protect-words (nḏ, zꜣw, mkj): the Akkadian reservations applied as Akkadian-only.
- `נַחֲלַת־הָאֵל` (HC ẖr.t-nṯr) beside Ugaritic *nḥlt* (Mot's land): kept as common Hebrew; `חֶלְקַת־הָאֵל` is the
  alternative if the Ugaritic echo should stay out.
- The fifth-day dossier now has eight excerpts; its parallels table is hand-made (`build_parallels_index.py` does not read it).
