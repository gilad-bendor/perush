# eBL Fragmentarium — the Dynastic Chronicle (ABC 18 = Glassner, *Mesopotamian Chronicles* no. 1)

- **Text:** the bilingual (Sumerian–Akkadian) **Dynastic Chronicle** (also "Chronicle of the Single Monarchy"): the creation of kingship, the antediluvian cities and kings, the flood, and the later dynasties down to the 1st millennium. Editions: Lambert 1973 (*Symbolae … Böhl*, 271–280, "A new fragment from a list of antediluvian kings and Marduk's chariot"); Grayson 1975 (*ABC*, 139–144 no. 18); Finkel 1980 (*JCS* 32, 65–72, "Bilingual Chronicle Fragments"); Glassner 2004 (*Mesopotamian Chronicles* no. 1). None of these is open access (see `../../_records-only--paid-and-restricted/README.md`).
- **Source:** eBL Fragmentarium (LMU Munich), transliterations by the eBL team. Web `https://www.ebl.lmu.de/fragmentarium/<museum-no>`; API `https://www.ebl.lmu.de/api/fragments/<museum-no>`. Found through `GET /api/fragments/query?genre=CANONICAL:Historiography:Chronicles` (the fragments carry the genre tag "Dynastic Chronicle").
- **Retrieved:** 2026-10-16.
- **Licence:** not stated (same status as the rest of `../`): free public API; cite "eBL Fragmentarium, <museum no.>". This folder is covered by the `eBL-fragmentarium/*` rule in `../../.gitignore`, so it stays local. **Coordinator:** if this README should be committed, add `!eBL-fragmentarium/Dynastic-Chronicle--ABC-18/README.md` (and the parent dir) to `.gitignore`.

## Files
- `json/<museum-no>.json` — raw API records (catalogue, references, lemmatised `text`, `atf`).
- `atf/<museum-no>.atf` — the eBL-ATF transliteration with a 4-line `#` header. Only three fragments have a transliteration:

| Museum no. | ATF lines | Content |
|---|---|---|
| **K.11261** (+ K.11624 + K.12054, joined; Nineveh, NA; CT 46 pl. 23 no. 5; Grayson's ms. A) | 19 (1′–19′) | **The antediluvian section**: En-me(n)-gal-ana, Dumuzi → Bad-tibira; Sippar (Enmeduranki); Larak; Šuruppak: **Ubar-Tutu and Ziusudra son of Ubar-Tutu**; "5 cities, 9 kings"; then Enlil … (Akk.) Enlil …; Sum. *mu₇-mu₇* / Akk. *hu-bur* (the din? — eBL lemmatises it as the underworld river Ḫubur) — the transition to the flood. Sumerian lines with Akkadian interlinear translation for some. |
| **BM.35572** (Babylon?, LB; Finkel 1980 copy p. 76) | 18 (1′–18′) | **The opening**: Anu, Enlil and Ea … mankind; kingship in the land; a king for the shepherdship of the land; all the black-headed bow at his feet; the four quarters; "kingship descended from heaven" (twice). Bilingual, line by line. |
| K.8532 (+ K.8533 + K.8534 + K.16801 + K.16930; LB from Nineveh library) | 54 | the postdiluvian dynasties (Kiš: Baliḫ … Enmebaragesi; Babylon I; Sealand I; 2nd millennium–early 1st millennium). Not flood-related. |
| K.11624, K.12054, BM.40565, K.8533, K.8534 | 0 | catalogue only (their text is included in the joined records above, or not yet transliterated) |

## Line numbering
eBL: fragment lines `1′.` etc. (primed: the beginning is lost). eBL notes give the equation with the composite: K.11261 6′ = l. 33 overall (after Finkel 1980). The flood itself (Glassner's ll. 40ff.) is not preserved beyond K.11261 15′–19′.

## Usefulness
The only open transliteration of the Dynastic Chronicle's antediluvian part. It confirms in a Neo-Assyrian copy that the king-list tradition knew **Ziusudra as the last antediluvian king, son of Ubar-Tutu** (absent from the Old Babylonian Sumerian King List composite), and that its count was "5 cities, 9 kings". Used in `סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/`.
