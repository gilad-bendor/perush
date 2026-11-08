# Round 6 – the lead's final report (2026-11-09)

Round 6, "completing what was begun" (`curated-translation-candidates.md`, "Round 6 plan"), orchestrated from one
session on the user's prompt of 2026-11-03; the runs went one at a time in range A (Fri 6 – Sat 7 Nov), the
finalization in range B (Mon 9 Nov). It is the first round finished under the user's rule of 2026-11-03: squashed into
`main` by cherry-pick, then the next round's session launched (guidelines §5.1b, §5.1c step 7).

## Done
| Run | Texts | Lines | Where | Report |
|---|---|---|---|---|
| 1 | The Sumerian Bilgameš poems: Ḫuwawa A and B, the Bull of Heaven, Aga, the Death of Bilgameš (all recensions) | 1,332 | `אפוס-גילגמש/3-השירים-השומריים/` | `run-1.md` |
| 2 | The Book of the Dead of Nu, whole (136 chapters), + BD 175 (pCha) + the Instruction for Merikare, whole | 1,983 new | `חכמה-ובריאה-במצרים/6-ספר-המתים-של-נו/`, `9-מוסר-למריכרע/` | `run-2.md` |
| 3 | The Uruk cycle: Lugalbanda in the Mountain Cave, Lugalbanda and the Anzud Bird, Enmerkar and En-suḫgir-ana | 1,226 | `אגדות-מלכים/5-…`, `6-…`, `7-…` | `run-3.md` |
| 4 | The Lament for Sumer and Urim; Dumuzid's Dream; proverb collections 2 (+6) and 3 completed | 1,289 new | `קינות-על-ערים/3-…`, `העולם-התחתון/6-…`, `קולות-היום-יום/2-…` | `run-4.md` |
| 5 | Hesiod's Shield of Heracles, whole | 479 | `הסיודוס/3-מגן-הרקלס/` | `run-5.md` |

About **6,300 new lines**, each drafted, taken through the translators' three passes and an independent fidelity review
(fixes: 39, 22+ per part, 17, 32, 8 + 32). Completed wholes: the Gilgameš tradition's Sumerian sources, the Book of the
Dead of Nu, Merikare, the four Enmerkar–Lugalbanda poems, proverb collections 1–3, the Hesiodic corpus.

## The finalization
- **Harmonization** (`harmonization--2026-11-09.md`): the 28 items the runs left, surveyed both ways; 17 changes (Enki
  `אֶנְקִי`; *di kud* `דן דין`; Ḫuwawa; *u₅* `שקנאי?`; *suḫ* `נזר`; Kulaba; *bala* `תקופה`; *gur₃* `טען`; *uru₄* `חרש`;
  DD's gates and formulas; the horizon god; BD 78 sꜥḥ `הידר`; ἀλκτήρ, τεῦχος, ἀλαλητός / ἰάχω, the Shield's epithets;
  Ur-Namma's *alan* `פֶּסֶל`), the rest kept with reasons; **one new rule** (guidelines §6.7): a cognate's Hebrew is not
  lent to a non-cognate equivalent in another language. Applied by three agents at once on disjoint corpora.
- **Run 2's questions** (seven rendering choices) were settled by the parent under the user's standing rule; two went to
  the harmonization (ḥḏi̯ `הזיק` kept; `האציל` changed).

## Verification
- **Every verifier of the folder, 51 runs at once: all pass** – the creation corpus (`verify.py` ×2, `sumerian_tools.py`
  3–7), Atra-ḫasīs, EST, LH, `laws_verify.py` LE / MAL / MALB / LI / UN, `hittite_tools.py` (verify, selftest), Gilgameš
  (`verify.py`, `bilgames_tools.py verify all`, with the Death excerpt's identity), wisdom, laments LU / CA / LSU, Gudea,
  netherworld IS / IN / NE / GEN / ER / DD, kings EA / SB / ET / CL / LC / LZ / ES, everyday voices, prophecy, Maqlû,
  Egyptian (verify all keys incl. MR ↔ MK, selftest), Hesiod (verify, selftest), Ugaritic (verify, selftest), the
  dossier, Vedic (verify, selftest), the inscriptions (verify, selftest), all `--strict` where the tool takes it.
- **`tools/check_bible_quotes.py` over every `.md` file of the folder: 0 problems.**
- The known repeated-line baselines (e.g. Vedic 1, Egyptian NU5 132.1) are listed for review, not errors.

## Questions for the user
None (`questions-for-user.md`).

## Problems and notes
- **No quota stop.** Range A: one agent at a time; range B: three apply agents at once.
- The ETCSL bulk server (llds.ling-phil.ox.ac.uk, 502) and web.archive.org were unreachable: run 3 wrote
  `tools/etcslhtml2md.py` (the live ETCSL pages, identical output to the XML on a test text), and runs 3–4 used it.
- Several VM restarts during runs 2 and 3: no work lost (saves committed, agents resumed).
- Rank-3 literature beyond ETCSL, the TLA and Perseus was not available for the Sumerian poems; the translations rest on
  the editions and the translators' parsing.
- **The print layout:** the new translations have no layout modules yet (a layout session's work).
- **Open for a later pass:** Gk. ἐνοπή / ἀυτή (root צעק); Sum. *tum₂* / *de₆* `הביא` / `נשא` by sense.

## Next
Round 7 (the Rigveda's Book 7 whole, the Old Avestan corpus whole, the Kaṭha Upaniṣad whole), launched as its own
session after this round's squash into `main`.
