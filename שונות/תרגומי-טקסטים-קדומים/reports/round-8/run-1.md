# Round 8 run 1 – the Pyramid Texts of Unas, the whole pyramid (report)

Coordinator: the child session `Round8/Run1` (2026-11-13, 14:18–≈21:00 UTC), entirely inside range A, one agent at a time.

## Done
- **Text:** every spell carved in the pyramid of Unas (Saqqara, c. 2350 BCE), in wall order: 231 wall occurrences of 228
  spells, **1,606 lines** in Allen 2013's line division (the plan's ≈1,630: Allen's lines that the witness lacks are not
  rows). Project `חכמה-ובריאה-במצרים/10-טקסטי-הפירמידה-של-אונאס/`, nine keys by room and wall:

  | Key | Wall | Spells | Lines |
  |---|---|---|---|
  | UN1 | burial chamber N, reg. i–ii (offering ritual) | PT 23–116 | 217 |
  | UN2 | burial chamber N, reg. iii (offering ritual) | PT 117–171 | 143 |
  | UN3 | burial chamber E gable, S wall | PT 204–218 | 184 |
  | UN4 | burial chamber: the litany, E wall | PT 219–224 | 209 |
  | UN5 | burial chamber W gable (serpent spells); passage | PT 226–243, 199, 32, 23, 25, 200, 244–246 | 124 |
  | UN6 | antechamber W gable and W wall | PT 247–260 | 206 |
  | UN7 | antechamber S wall, E gable (the Cannibal Hymn) | PT 261–276 | 198 |
  | UN8 | antechamber E wall | PT 277–301 | 127 |
  | UN9 | antechamber N wall; corridor | PT 302–321 | 198 |

- **Base:** AED-TEI (TLA 2018, CC BY-SA): 145 Unas records (1,232 lines) + 73 later copies for the spells the TLA did not
  record from Unas's walls (Teti 68, Pepi I 61, Merenre 18, Pepi II 26, Queen Neith 142 – each line tagged `{טטי}` …
  `{נית}`); 58 lines (PT 39, 40, 44, 52, 86, 167, 169, 271, 281, 284, 303) from Allen 2013's transcription (©, consulted
  locally; tagged `{אלן}`; the annotated files carry only a reference). The composite `composite-UN.tsv` (made by
  `make_composite.py`: a character alignment of the AED words to Allen's lines).
- **Files:** `annotated-UN1…9.rtl.md`, `translation--intro-UN1…9.rtl.md`, `translation--head.rtl.md`, the generated
  `translation-UN*.rtl.md` and `translation.rtl.md`, `project.md` (nine translators' sections, three review sections),
  `composite-UN.tsv`, `make_composite.py`; the print stub `הדפסה/חכמה-ובריאה-במצרים/10-טקסטי-הפירמידה-של-אונאס.rtl.md`;
  the corpus's `renderings.md` §13 (and §13.6.1–9, the merged proposals), `translator-brief--egyptian.md` §11,
  `corpus.md`, `parallels-index.md` (+382 rows and the key findings), `egypt_tools.py`, `build_parallels_index.py`;
  sources `AED-TEI/PT--Unas/`, `PT--Unas-parallels/`, `Allen-2013--…/README.md` (+ its `.gitignore`).
- **Shared files:** STATUS, the plan row, guidelines §5.2 and §6.7, history, tools.md, sources-registry §4.4t,
  fetch-recipes + MANIFEST (Allen's PDF).

## Verification
- `egypt_tools.py verify --strict` (all keys of the corpus): 0 problems; one repeated-line difference, NU5 132.1 / 132-2.1
  (pre-existing, Round 6: a `[…]` in one copy), not this run's.
- `egypt_tools.py verify UN1 … UN9 --strict`: 0 problems, 0 repeated-line differences; `build`: 1,606 lines, the
  combined file's numbered lines equal the per-key files; `selftest`: 45 lines, 0 failures.
- `tools/check_bible_quotes.py` over every `.md` of `חכמה-ובריאה-במצרים/` and the shared files: 0 problems.
- Process: nine translators (one key each, ≈ 30 min each, three review passes each), then three independent fidelity
  reviewers: 9 + 11 + 10 = **30 lines fixed** (brackets 7, vocalization traps 6, one lemma in two Hebrew words 6, tense
  / mood 2, a dropped `⟨ ⟩` word, a preposition, a supplement outside `( )`, the coordinator's `יתום` ruling).

## Key findings
**The ancient mind.** The pyramid is a script for a death that is not an end: "you did not go away dead, you went away
alive" (213.1). The king is revived by being introduced, god by god, as their kin (PT 219's litany: "he lives – this
Unas lives"), and fed by a ritual menu in which every dish is the Eye of Horus, each item's name a pun on a deed of the
myth (the pun *is* the rite: natron ~ "god", incense = "the god's brother"). He climbs to the sky on a ladder tied by Re
and Horus, on the mourners' kite wings, on incense smoke; becomes an imperishable circumpolar star; argues his way past
the ferryman ("no living, no dead … may accuse him"); and may not rise while any claim against him stands. Words are
weapons: the serpent charms (the oldest on earth, partly in a foreign tongue) capture a snake by naming it, turn its
venom back on itself, and cite a god's deed as precedent. The Cannibal Hymn shows the other face of kingship: the king
hunts, cooks and eats the gods to absorb their magic and spirits, "the great ones for his breakfast". The walls keep
traces of their making: stage directions ("four times", "vice versa"), a "So-and-so" left for the king's name, a first
person corrected to the third on the stone – a papyrus book copied onto the walls.

**The Bible in the apparatus** (382 rows in `parallels-index.md`):
- the ladder (PT 304–306 ↔ Gen 28:12; mꜣq.t `סֻלָּם`, the only gated ladder word);
- ascent after death (213.1 ↔ Gen 5:24, 2 Kgs 2:11 [divergence]); the king among the stars (Isa 14:13 [divergence]:
  hubris there, fulfilment here; Num 24:17);
- food for the dead (the offering ritual ↔ Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` [divergence], Lev 1–7, Num 28:2,
  Ps 50:13); the two natrons of Jer 2:22 – `נֶתֶר` is Egyptian nṯr.j [cognate: loanword], `בֹּרִית` its companion bd;
- the serpents (Gen 3:14–15, Ps 58:5–7, 91:13, Deut 8:15, Amos 5:19 – shared motifs; no "fiery serpent" in the Egyptian);
- royal power over life and death (PT 217 ↔ Dan 5:19 [equivalent]; 1 Sam 2:6 [divergence]); gates opened to a king
  (Ps 24:7–9 [divergence]); the orphan judged (260.5 ↔ Ps 82:3, Deut 10:18);
- the loanwords: `שׁוֹשָׁן` (zšn), `שִׁטָּה` (šnḏ.t), `חוֹתָם` (ḫtm), `קוֹף` (gf), `נֶתֶר`;
- the Cannibal Hymn has no biblical parallel (its cauldron recurs only as a prophet's metaphor, Mic 3:3, Ezek 24:4–5).

## Decisions taken (minor, by the coordinator)
- **The unit and numbering:** Allen 2013's lines (labels `<spell>[#<occurrence>].<line>`), wall order by Sethe's
  columns; the four ritual spells repeated on the walls (PT 23, 25, 32, 204) translated at each occurrence.
- **Where AED lacks Unas's copy:** the earliest good later copy, the kings' before the queens'; the other king's (or
  Neith's) name translated as written, behind a witness tag (guidelines §6.8); Allen's transcription for 58 lines.
- **Neith's copies** keep the masculine grammar the Egyptian is written in (the TLA makes them feminine) – also in the
  questions below.
- **tfn "orphan" = `יָתוֹם`**: the corpus's "never" served Amenemope's nmḥ; avoiding the natural word here would hide an
  echo. The gate now licenses tfn.
- `נשך` (the "interest" gate) licensed by pzḥ "bite"; the `חם` gate licenses Ḫm after a hyphen; TRAPS for `אונס` (Unas)
  and `היו` (Hiu); natron `נֶתֶר` gated to nṯr.j; `סולם` to mꜣq.t; `שרף`, `מלאך` never.
- **The composite's dropped edges** (the alignment had kept only matched words: the opening `ḏd-mdw` of 83 spells, the
  tail of 302.24): `make_composite.py` now extends each occurrence to its record's edges; the 83 drafted lines were
  amended by script (`דְּבָרִים לֵאמֹר:` + a parse note), each checked by the reviewers.
- mtw.t kept split by sense (`זרע` / a snake's `ארס`); nsw-bjtj `מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן`; qbḥ `מי־הצינה` (the BD's).

## Questions for the user
1. **Queen Neith's 142 lines** (mostly the offering ritual, whose kings' copies are broken): masculine grammar as written
   (now) or feminine as the TLA reads? And should the reader see Neith's / Pepi's name in a Unas translation at all
   (now: yes, behind the tag), or `[אונאס]`?
2. **The negated sḏm=f** (n sḏm=f) is read as past throughout (UN3's rule: "he did not die"); in UN6 258-259.10–11 that
   leaves a past inside a promise the TLA reads as future. A ruling for the whole text?
3. **Wording the translators left open:** nhp `*השכים*?` (36 lines of PT 219); `שליחויות`; `הָאָחֶת` (the uraeus, a
   coinage); hjw transliterated `הִיוּ`; 311.3 / 311.7 – translate both layers of the wall (now) or only the correction?
4. **Possibly foreign words** (PT 232–238, 281, 284–286; Steiner 2011's Canaanite readings): now transliterated with `?`
   and one cautious note. Worth a dedicated check against Steiner (not in the folder, ©)?

## Problems and skipped items
- No quota stop: the gate said GO (range A, `allowed`) at every step.
- `tools/sources_sync.py fetch` (started at the beginning) was stopped at its 2-hour background limit; not needed (the
  base is committed); the ignored sources of other corpora may be incomplete on this VM.
- The first composite's dropped edges (above): found by translator 7, fixed before the reviews.
- `verify` compares only identical source lines; similar frames differing in a word were checked by grep (the reviewers).
- Not done: a layout module for the new translation (a layout session's work).

## Cross-corpus splits left for the lead
- nḏ `הגן` (UN4) / `שמר` (PT486, PT600); ꜥb.w "impurity" `טומאה` / NU3 `עבֵרה`; bd `בורית` / NU3 105.3 `נתר`;
  mds `קוטל` (UN7) / BD `עורץ`; sḏr `שכב` (UN5) / `לן` (UN9); ḥꜣj `עירומות` / NU8 `חשוף`; sṯ `ריח` / MK E134 `בושם`;
  Sobek `סֻבֶּךְ` / NU7 `סוֹבֶּךְ`; Mafdet `מָאפְדֶת` / NU `מַאפְדֶת`; Ndj `נֶדִי` / NU5 `נֶדוּ`; ꜥ tla34360 `ספל` / `זרוע`;
  jp `פקד` / `מנה`; mz `קרב` / WE `נגש`; ḏwj.w, ds `כד` / WE `קנקן`; zḫz / NU5; two lions (mꜣj, rw) both `אריה`; two
  lemmas in one Hebrew inside the project (wn / wpi̯ `פתח`; zj / šmj `הלך`; bḏ / pꜣḏ `כדור`; ḥnw.t / ꜥb `קרן`; spr /
  šbtjw `צלע`; jni̯ / pḥ `הגיע`) – synonyms in a non-Semitic corpus (§6.7 principle 1), listed for review.
