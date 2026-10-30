# Corpus: the Hurro-Hittite and Old Anatolian myths (`מיתוסים-חתיים-וחוריים/`)

Created 2026-10-30 by Round 5 run 2 (`curated-translation-candidates.md`, "Round 5 plan", run 2; world list Tier 2 #9).
The myths of the Hittite archives of Ḫattuša (17th–13th c. BCE), all in Hittite: the songs translated from Hurrian (the
Kumarbi cycle, Ḫedammu, the Song of Release – its Hittite side), the Old Anatolian myths told for a festival or a ritual
(Illuyanka, Telipinu), and three tales (Zalpa, Appu, Elkunirša – the last from Canaan). The corpus's tool is the Hittite
tool of the folder, `tools/hittite_tools.py` (keys below); its tables: `renderings.md` (§H2–§H9, the myth keys only) and
the law and ritual corpora's Hittite tables (every Hittite text).

## Projects and texts
| Project | KEY | Text | Base | Lines |
|---|---|---|---|---|
| `1-אילויאנקה-וחדמו/` | IL | The Illuyanka myth (CTH 321), both versions, with the priest Kella's frame; IL 8–17 = the fifth-day dossier's excerpt (KBo 3.7 i 9–20), kept identical by `verify IL` | HPM, Rieken et al. (CC BY-SA) | 128 |
| | HE | The Song of Ḫedammu (CTH 348.I.1–29: the 29 fragments as HPM edits them, in its order) | HPM | 698 |
| `2-מחזור-קומרבי/` | KU | The Song of Emergence ("Kingship in Heaven", CTH 344) | HPM | 296 |
| | UL | The Song of Ullikummi (CTH 345.I.1–3.2 = tablets 1–3, and the fragments 345.I.4–10) | HPM | 812 |
| `3-שירת-השחרור/` | SR | The Song of Release (CTH 789), **the Hittite side only** (the Hurrian lines of the bilingual are out of scope): the main tablets KBo 32.13 (Allani's banquet), 32.14–16 (the parables), 32.19 (the assembly of Ebla), and the fragments 32.10, 32.17 | our composite from TLHdig 0.3 (CC BY 4.0), `composite-SR.tsv` | 422 |
| `4-זלפה-אפו-ואלקונירשה/` | ZA | The Tale of Zalpa (CTH 3.1), the Old Script tablet KBo 22.2 (its New Script duplicate KBo 3.38 is not in TLHdig) | our composite from TLHdig, `composite-ZA.tsv` | 36 |
| | AP | Appu and his two sons (CTH 360.1–4) | HPM | 204 |
| | EL | Elkunirša and Ašertu (CTH 342.1.1–2.5: two versions in eight fragments) | HPM | 301 |
| `5-טליפינו/` | TE | The Telipinu myth, first version (CTH 324.1) | HPM | 267 |

**Left for later (recorded, not translated):** the other Telipinu versions (CTH 324.2–9) and the related vanishing-god
myths (CTH 322–335); the Kumarbi fragments (CTH 346.1–21; fetched to `sources/HPM/`); the 67 small Hittite fragments of
the Song of Release outside the main tablets (≈ 490 lines in TLHdig `CTH-789/`); the Hurrian side of the Song of Release;
the Hittite Gilgameš (CTH 341.III), Kešši, Gurparanzaḫ, the Sun-god and the fisherman, the Song of Silver, LAMMA (all in
HPM, not in this run's plan).

## Labels
- An HPM text with one edition (IL, KU, TE): the edition's clause numbers ("kola"), the HPM citation form "CTH 321 §2,
  kolon 8".
- An HPM text in several editions (HE, UL, AP, EL): `<fragment>:<clause>`, the fragment as the last part of the CTH
  number (HE `6:3` = CTH 348.I.6 kolon 3; UL `3.1:45` = CTH 345.I.3.1 kolon 45; EL `2.1:18` = CTH 342.2.1 kolon 18).
- Our composites: SR `<tablet>.<§>.<n>` (KBo 32.14 → `14.3.5` = the 5th Hittite line of its 3rd paragraph); ZA `<§>.<n>`.
  The manuscript line is in the TSV and printed by `data`.

## Reading order
IL → HE (the serpents; the dossier) → KU → UL (the Kumarbi cycle: kingship in heaven, then the stone that reaches heaven)
→ SR → ZA, AP, EL (the tales) → TE.

## Status
See each `project.md`. The parallels index: `parallels-index.md`.
