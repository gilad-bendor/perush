# Records only: Erra and Išum, Tablets II–V (checked 2026-10-24, Round 4 run 5)

Nothing is downloaded here. This folder records where the rest of *Erra and Išum* (Tablets II–V, about 480 lines) can and cannot be had, so the next session does not search again.

| Source | What | Status (2026-10-24) |
|---|---|---|
| **eBL corpus `L/1/5`**, chapters Standard Babylonian II–V (`https://www.ebl.lmu.de/api/texts/L/1/5/chapters/Standard%20Babylonian/II/display` …) | The coming critical edition (the text's intro: "An edition of this text is in preparation by the eBL team. It will be uploaded in the course of 2025/2026") | The chapters exist and list their manuscripts (II 13, III 14, IV 13, V 20), but `lines` is empty. **Re-check first**: `python3 -I tools/ebl_fetch.py L 1 5 "Standard Babylonian" II sources/eBL/Erra-SB-II` prints "No lines in this chapter" while it is unpublished. |
| eBL Fragmentarium (`/api/fragments/<museum number>`, e.g. K.1282, IM.95180, Ist-A.153, VAT.10814, BM.37331) | The manuscripts' own records | Reachable, but their `atf` / `text.lines` are empty (not yet transliterated in the open Fragmentarium); descriptions only (K 1282: "Erra Epic V 1-60, 71 lines"). |
| ORACC CAMS/GKAB | Neo-Assyrian Erra tablets (Huzirina) | `oracc.museum.upenn.edu` unreachable from the cloud (TLS, curl exit 60); the registry (§4.3) notes only Tablet I copies there. |
| L. Cagni, *L'epopea di Erra* (Studi Semitici 34, Rome 1969) | The standard edition (transliteration, Italian translation, commentary) | © ; archive.org `lepopeadierra0034unse` is a lending-library item (not usable, guidelines §2.3). |
| L. Cagni, *Das Erra-Epos: Keilschrifttext* (Studia Pohl 5, Rome 1970) | Cuneiform copies | © ; archive.org `daserraeposkeils0000cagn`, lending only. |
| Foster, *Before the Muses*; Dalley, *Myths from Mesopotamia*; Taylor; George | Translations and studies | © ; not available. Rank 3 only, and no base text. |
| CDLI | Possible per-tablet transliterations | The search pages answered 500 / ignored the query on 2026-10-24; not pursued (a composite from scattered transliterations would be our own edition, with numbering that does not match Cagni's). |

Decision (the run's coordinator, under the user's standing rule – no purchases, minor things decided by the session): translate Tablet I in full (eBL), and leave II–V waiting for the eBL edition (see `../../העולם-התחתון/5-ארה-ואישום/project.md`).
