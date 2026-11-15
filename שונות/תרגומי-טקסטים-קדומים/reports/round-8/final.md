# Round 8 – final report (the lead, 2026-11-15)

Orchestrated by the session `Round8: …` from one prompt (`ancient-translations: orchestrate Round 8`), on the branch
`translation-round-8`, each run as its own child session on its own branch, within the quota's time ranges.

## Done
| Run | Texts | Corpus / project | Lines | Report |
|---|---|---|---|---|
| 1 (EG1) | The Pyramid Texts of Unas, the whole pyramid (228 spells, 231 wall occurrences) | `חכמה-ובריאה-במצרים/10-טקסטי-הפירמידה-של-אונאס/` | 1,606 | `run-1.md` |
| 2 (SU1) | The Old Babylonian school canon: the Decad's eight untranslated texts + the Tetrad | the new corpus `קנון-בית-הטבלה/` (projects 1–2; the Hoe and Bilgameš and Ḫuwawa A pointed to) | 1,520 | `run-2.md` |
| 3 (RV2) | The Rigveda, Book 2 whole (43 hymns) | `הוודה-והאווסטה/9-ריגוודה-ספר-ב/` | 1,694 pādas | `run-3.md` |
| 4 (AK1) | Anzû (six versions), the Akkade legends, the OB royal epics (Zimrī-Lîm, Bazi, Gulkišar), Idrimi | `אגדות-מלכים/` projects 8–11 | 1,651 | `run-4.md` |
| 5 (HI1) | The vanishing-god myths beside Telipinu, LAMMA and Silver, the Hittite Gilgameš | `מיתוסים-חתיים-וחוריים/` projects 2, 5 (renamed), 6 (new) | 1,728 | `run-5.md` |
| 6 (AVS1) | The Yasna's Young Avestan chapters | – | – | **skipped: a large text, waits for the user's approval** |

About **8,200 new lines**, each run independently reviewed (30 + 41 + ≈ 73 + 65 + 274 reviewer fixes) and verified.
**The lead's finalization:** the cross-corpus harmonization `harmonization--2026-11-15.md` – three batch agents at once
in range B on disjoint corpora (Egyptian 13 rows changed / 7 kept; Sumerian and Akkadian 13 / 8, plus the school canon's
gates licensed and the plain words restored; Vedic and Hittite 8 / the Hittite splits kept by sense), ≈ 75 `>` lines,
and the fifth-day dossier's Merikare E134 (*stj* `ריח`) by the lead; guidelines §5.2 ("The Round 8 finalization") and
§6.7; STATUS; history.

## Verification
- **Every verifier of the folder, 58 runs at once: all pass** (exit 0, 0 problems) – the netherworld (IS IN NE GEN ER DD),
  Ugaritic (verify, selftest), the dossier, the inscriptions (verify, selftest), Vedic and Avestan (verify, selftest),
  Egyptian (verify, selftest), Gudea, the prophecies, wisdom, Gilgameš (`bilgames_tools.py verify all`, `verify.py`),
  everyday voices, laments (LU CA LSU), the school canon (all), Hittite (verify, selftest), Maqlû, Hesiod (verify,
  selftest), the Sumerian creation projects 3–7, Enūma eliš and the creation texts (`verify.py`), EST and LH
  (`verify.py`), `laws_verify.py` LE MAL MALB LI UN, the kings corpus (ET CL EA SB LC LZ ES AN AK RE ID); all `--strict`
  where the tool takes it.
- **`tools/check_bible_quotes.py` over every `.md` file of the folder outside `sources/`: 0 problems.**

## Key findings (from the runs' reports)
- **Unas:** a script for a death that is not an end ("you did not go away dead, you went away alive"); the king fed with
  the Eye of Horus in a menu of puns, climbing a ladder to the stars, arguing past the ferryman; the oldest serpent
  charms; the Cannibal Hymn – the king eats the gods to take their power.
- **The school canon:** the first texts a pupil copied made the king a perfect scribe; sin as a bond that makes ill; the
  holiness paradox of Keš ("the man who approaches – does not approach"); Enheduana's lawsuit with the moon god.
- **Rigveda Book 2:** a family hymnal with a signature line; the fire as every god; a hymn that answers the doubters ("he
  is not"); guilt loosened like a rein – never forgiven, never confessed.
- **Anzû and Akkade:** power belongs to whoever holds the Tablet; battle as "a festival of men"; Zimrī-Lîm drinking with
  his infantry and calling mercy his taboo; Idrimi's seven years of exile among the Ḫapiru.
- **The Hittite myths:** a god's anger is withdrawal, his absence a frozen world, the cure persuasion; the Hittite
  Gilgameš shows a foreign epic retold for Ḫattuša.

## Questions for the user
`questions-for-user.md`: **run 6 (AVS1) needs your approval** (the Yasna's Young Avestan chapters, ≈ 12,300 words, a
large text). The runs' own questions were all minor and are settled there by the lead (each overrulable).

## Problems and notes
- **Quota:** no stop. Runs 1–5 ran one at a time in range A (Fri 13 Nov 14:18 – Sat 14 Nov 10:20 UTC), every gate
  `allowed`; the finalization in range B (from Sun 15 Nov 22:00 UTC). No paid overage.
- **VM restarts** in several sessions: no work lost (everything committed and pushed; one translator resumed with
  SendMessage).
- **Unreachable hosts:** oracc.museum.upenn.edu (TLS), web.archive.org, anastrophe.uchicago.edu, sabaweb.uni-jena.de,
  arabiclexicon.hawramani.com. Idrimi rests on CDLI's ATF; five readings wait for ORACC's edition.
- **Not done:** the print layout modules of the new translations (a layout session's work).
- **Open for a later pass** (listed in the harmonization file's head): *šēšû* `מכמורת`; *sapāru* / *šētu*; *urḫu* /
  *ḫarrānu*; *lalû* `נועם`; *nâdu*; `נציב` for *šakkanakkum* / *šaknu*; the Vedic homograph *yóni* `רחם` / √*mr̥ḍ* `רחם`;
  *âru* / *ṭeḫû*; BD 125, 30 `מחריב`; UN2 ꜥḥ / sḫt.

## Next
Round 9 (`translation-program.md`), launched as its own session after this round's squash into `main`.
