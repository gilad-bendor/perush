# The Egyptian corpus: wisdom and creation (`חכמה-ובריאה-במצרים/`)

Round 4, run 3 (2026-10-23): the folder's **first Egyptian corpus** and its first Egyptian translations (the fifth-day
dossier of the Ugaritic corpus already had Merikare E 130–136). The plan row: `../curated-translation-candidates.md`,
"Round 4 plan", run 3; the survey: `../curation-surveys/world-survey--egypt--2026-10-21.md` (§2.1–§2.3).

## The texts and why

| Project | Text | Date | Why (Bible) | Why (the ancient mind) |
|---|---|---|---|---|
| `1-מוסר-אמנמופה/` | **The Instruction of Amenemope** (pBM EA 10474, complete: prologue + 30 "houses", 551 lines) | composed c. 1300–1075 BCE; the papyrus c. 650 BCE; 21st-dynasty tablets and ostraca | **Prov 22:17–24:22** (accepted dependence); the Torah's boundary stone (Deut 19:14, 27:17), balance and weights (Lev 19:35–36, Deut 25:13–16), the blind and the lame (Lev 19:14), the widow (Deut 24:19–21), bribes (Ex 23:8) | the most inward Egyptian ethics: the "silent" and the "hot" man, a land surveyor's conscience, man as clay and straw in the god's hands |
| `2-בריאה-במצרים/` | **Merikare E 130–138** (the hymn to the creator); **the Memphite Theology** (the Shabaka Stone); **Pyramid Texts 571, 486, 527, 600** ("not yet", Atum's self-creation) | Merikare composed c. 2050 BCE (ms. c. 1450); the stone c. 710 BCE (the composition debated); the Pyramid Texts c. 2350–2250 BCE | Gen 1:2, 1:21, 1:26–30, 2:7 (Merikare); Gen 1 (creation by word), 2:2–3 (Ptah "rested"); Gen 2:4b–5 ("not yet") | how Egyptians imagined the first moment: a god alone in dark water, creating by thought and word, by seed and spittle |
| `3-ספר-הפרה-השמימית/` | **The Book of the Heavenly Cow** (KV 17, Seti I; 95 columns) | the oldest copy on Tutankhamun's shrine, c. 1325 BCE | Gen 6:5–8 (the decision to destroy rebellious mankind), 8:21–22 (a remnant survives), 11 (gods and men separated) | the old, tired sun god; a goddess drunk on red beer; the aetiology of an imperfect world |
| `4-מעשה-בשני-האחים/` | **The Tale of the Two Brothers** (pD'Orbiney, 185 lines; Late Egyptian) | c. 1200 BCE (Seti II) | **Gen 39** (the seduction and the false accusation), Gen 2:22 (a wife "built" by Khnum), Gen 37, 41 | brothers, a wife's lie, the heart kept on a cedar, death and rebirth as bull, tree and son |
| `5-פפירוס-וסטקר/` | **The Tales of pWestcar** (305 lines; the wax crocodile = the dossier's WC) | composed c. 1800 BCE; ms. c. 1600 | **Ex 7:8–12** (`חַרְטֹם`), **Ex 14:21–22** (the parted lake), Gen 50:26 (110 years), Ex 1:15–21 (midwives) | magicians at court, a king amused and taught; "not on a human being, the god's noble flock" |
| `6-ספר-המתים-125/` | **The Book of the Dead, chapter 125** (pNu, 115 lines: the hall of the Two Truths, the 42 denials) | 18th dynasty, c. 1400 BCE | **Ps 15, 24:3–6**, **Deut 26:13–14**, Job 31, the Decalogue, Lev 19 | the judgement of the dead, the heart on the balance, a ritual of entry by names |
| `7-סינוהה/` | **The Story of Sinuhe** (R 1–23 + B 1–311 = 334 lines) | c. 1900–1800 BCE | **Deut 8:7–9** (the land of Yaa), Gen 37–50 (an Egyptian among Asiatics, burial at home), 1 Sam 17 (the duel) | exile and homesickness, the king's grace, Egypt as the only place to die |
| `8-המלח-הנטרף/` | **The Shipwrecked Sailor** (pPetersburg 1115, 191 lines) | c. 1900 BCE | Jonah 1–2, Gen 3:1 (a speaking serpent, here a god), Ps 107:23–30 | consolation by a story; a lonely god who lost his kin to a falling star |

**Round 5 run 6 (2026-10-31)** added projects 4–8, the Egyptian tales and BD 125, here rather than in a new corpus:
the same language, base, tool and renderings (`renderings.md` §11 says why). The folder's name stays (the print stubs
point to it); read it as "the Egyptian corpus".

Reading order: Merikare (short; the dossier's lines) → the Pyramid Texts → the Memphite Theology → the Heavenly Cow →
Amenemope.

## Base texts (`../sources-registry.md` §4.4t)
- **AED-TEI** (S. D. Schweitzer 2019: the TLA's January 2018 database snapshot as TEI; **CC BY-SA 4.0**, committed under
  `../sources/AED-TEI/`) for Amenemope, Merikare, the Pyramid Texts and the Heavenly Cow, with the other witnesses.
  Read through `../tools/aed2md.py`; the corpus tool is `egypt_tools.py` (`../tools.md`).
- **El Hawary 2010** (OBO 243, open access on ZORA) for the Memphite Theology (not in AED): our transcription of his
  transliteration from the page images, `../sources/El-Hawary-2010--Wortschoepfung--OBO-243/memphite-transliteration.tsv`.
- Rank 3–5 checks: the TLA's German (in AED); **Lange 1925** (Amenemope, public domain, OCR); **Hornung 1997** (the Cow,
  OBO 46, open access); El Hawary's German (the Memphite Theology).

## Shared files
- `renderings.md` – the names, the transliteration convention, the grammar mapping, the key terms, the reserved words
  (`egypt_tools.py gates`), the formulas, the fixed lines, the Amenemope ↔ Proverbs table (§8).
- `translator-brief--egyptian.md` – the brief every translator gets (the ★ rules).
- `egypt_tools.py` – data / tr / fill / lex / lemma / verify / build / grep / gates / selftest.
- `parallels-index.md` – the projects' parallels, by Bible verse (`build_parallels_index.py`).

## Status
See each `project.md`. Verify with `python3 -I -B egypt_tools.py verify --strict` and `selftest`.
