# קנון בית הטבלה – the Old Babylonian school canon (corpus)

**What:** the literary curriculum of the Old Babylonian scribal school (*e₂-dub-ba*, "the house of the tablet"),
c. 1800 BCE, as Steve Tinney reconstructed it from the catalogues and the find-spots in Nibru (Tinney 1999): after the
elementary course a pupil copied and learned by heart first the **Tetrad** (four short hymns), then the **Decad** (ten
compositions in a fixed order). Read together, they are the Sumerians' own answer to "what must one know": the king
between gods and men, the terrible Inana, Enlil and his temple, the temple of Keš, Enki's travel to his father, the
goddess of the prison who judges and frees, the goddess of writing. Round 8 run 2 (2026-11-13), plan row SU1
(`translation-program.md`), candidates sumer-01 and sumer-16.

## Projects
| # | Folder | Texts (key, ETCSL, lines) | Status |
|---|---|---|---|
| 1 | `1-העשירייה/` – the Decad | Šulgi A (SA, 2.4.2.01, 108), Lipit-Eštar A (LA, 2.5.5.1, 108), *the Song of the Hoe (5.5.4: pointer to `../סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/`)*, Inana B (IB, 4.07.2, 154), Enlil A (EL, 4.05.1, 171), the Keš temple hymn (KH, 4.80.2, 165), Enki's Journey to Nibru (EJ, 1.1.4, 130), Inana and Ebiḫ (EB, 1.3.2, 184), Nungal A (NG, 4.28.1, 121), *Bilgameš and Ḫuwawa A (1.8.1.5: pointer to `../אפוס-גילגמש/3-השירים-השומריים/`)* | Round 8 run 2 |
| 2 | `2-הרביעייה/` – the Tetrad | Lipit-Eštar B (LB, 2.5.5.2, 63), Iddin-Dagan B (ID, 2.5.3.2, 79), Enlil-bāni A (EN, 2.5.8.1, 171), Nisaba A (NI, 4.16.1, 57 + the Lagaš version 9) | Round 8 run 2 |

1,520 entries in the 12 new texts. The two Decad texts translated earlier stay whole in their own projects (guidelines
§1, "a text lives once, whole"): the Decad's reading translation points to them at their place in the order.

## Base, tools
- **Base (rank 1):** ETCSL composites (`../sources/ETCSL/<no>--…/`, from the local OTA 2518 zip); **rank 2:** ORACC
  epsd2/literary lemma + morph (`../sources/ORACC/epsd2-literary--Q…/`, from the local zip; aligned by content), the
  ePSD2 glossary (`sumerian_workbench.py gloss`); **rank 3:** ETCSL's English (`canon_tools.py tr`), checked after drafting.
- **Tool:** `canon_tools.py` (verify, build, lines, tr, skel, rel, grep, lexmap; built on `../העולם-התחתון/netherworld_tools.py`).
- **Renderings:** `renderings.md` (binding for both projects); the translators' brief `translator-brief.md`.
- **Parallels:** `build_parallels_index.py` → `parallels-index.md` (from the annotated **הקבלה** bullets).

## Reading order
The Tetrad first (the school's own order: Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A), then the Decad.
