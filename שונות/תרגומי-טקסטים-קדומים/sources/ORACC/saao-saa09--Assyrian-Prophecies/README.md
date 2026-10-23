# ORACC SAAo saa09: the Assyrian prophecies (SAA 9, Parpola 1997), all 11 texts

- **Texts:** the eleven Neo-Assyrian prophecy tablets from Nineveh (Kuyunjik), reigns of Esarhaddon (681–669 BCE) and Assurbanipal (668–c. 631):

  | File prefix | SAA 9 | Museum no. (P-number) | Title (Parpola) | Prophets named | Lines |
  |---|---|---|---|---|---|
  | `SAA09-001--P333952` | 1 | K 4310 (4 R² 61) (P333952) | Oracles of Encouragement to Esarhaddon (a collection of ten oracles, 1.1–1.10) | Issar-la-tašiyaṭ, Sinqiša-amur, Remutti-Allati, Bayâ, Ilussa-amur, Issar-beli-daʾʾini, Aḫat-abiša, La-dagil-ili | 214 |
  | `SAA09-002--P337152` | 2 | K 12033 + 82-5-22,527 (P337152) | Oracles Concerning Babylon and the Stabilization of the King's Rule (2.1–2.6) | Nabû-ḫussanni, Bayâ, La-dagil-ili, Urkittu-šarrat | 144 |
  | `SAA09-003--P334927` | 3 | K 2401 (ABRT 1 22–23) (P334927) | The Covenant of Aššur (3.1–3.5) | La-dagil-ili | 145 |
  | `SAA09-004--P336677` | 4 | 83-1-18,839 (P336677) | Fragment of a Collection of Encouragement Oracles | – | 9 |
  | `SAA09-005--P337153` | 5 | K 6259 (P337153) | An Oracle to the Queen Mother | – | 17 |
  | `SAA09-006--P336678` | 6 | Bu 91-5-9,106 + 109 (P336678) | An Oracle from Tašmetu-ereš of Arbela | Tašmetu-ereš | 22 |
  | `SAA09-007--P334928` | 7 | K 883 (ABRT 1 26–27) (P334928) | Prophecies for Crown Prince Assurbanipal | Mullissu-kabtat | 25 |
  | `SAA09-008--P334828` | 8 | K 1545 (ABL 1280) (P334828) | Words Concerning the Elamites | – | 11 |
  | `SAA09-009--P337163` | 9 | K 1292 + DT 130 (P337163) | Words of Encouragement to Assurbanipal (dated Nisan 18, eponymy of Bēl-šaddûa, 650 BCE) | Dunnaša-amur | 35 |
  | `SAA09-010--P314355` | 10 | 83-1-18,726 (CT 53 946) (P314355) | Fragment of a Prophecy | Dunnaša-amur | 17 |
  | `SAA09-011--P313634` | 11 | K 1974 (CT 53 219) (P313634) | Report on a Vision and an Oracle to Assurbanipal | – | 13 |

  (Museum numbers and first publications from the ORACC catalogue, `catalogue.json` in the zip.) 652 tablet lines in all.
- **Editor:** Simo Parpola, *Assyrian Prophecies* (State Archives of Assyria 9), Helsinki 1997. Lemmatised by Mikko Luukko (2012), AHRC project "Mechanisms of Communication in an Ancient Empire" (UCL, dir. K. Radner).
- **URLs:** per text `https://oracc.museum.upenn.edu/saao/saa09/<P-number>` (HTML view with Parpola's translation: append `/html`); data: `https://oracc.museum.upenn.edu/json/saao-saa09.zip` (773 KB; JSON export 2024-06-10), kept as `../_bulk/saao-saa09.zip` (gitignored; `tools/sources_sync.py` has a built-in rule for ORACC zips). ORACC needs the certificate workaround of `tools/certs/` (2026-10-21).
- **Retrieved:** 2026-10-21.
- **Licence:** zip metadata "CC0"; the per-text credits: "The annotated edition is released under the **Creative Commons Attribution Share-Alike license 3.0**". Treated as **CC BY-SA 3.0**, committed with this attribution. Cite as `http://oracc.org/saao/<P-number>/`.

## Files
| File | What | Committed? |
|---|---|---|
| `SAA09-NNN--<P>--lemmatised.md` | Per line: label (ORACC: `o i 1'` = obverse, column i, line 1′), transliteration, **`norm:`** (the SAAo normalization, word by word; `—` = none) and `lem:` (citation form[guide word=contextual sense]POS). Converted with `../../../tools/cdl2md.py ../_bulk/saao-saa09.zip saao/saa09/corpusjson/<P>.json <out> <title> <url> --norm`. Lines that are wholly broken have a label and no `norm:`. | yes |
| `SAA09-NNN--<P>--translation.md` | Parpola's English (as adapted in SAAo), one paragraph per unit, labelled with the first transliteration line it covers; rulings marked. Extracted with `../../../tools/oracc_html2tr.py`. **Rank 3: consult only after our own reading.** | yes (CC BY-SA, attributed) |
| `SAA09-NNN--<P>--oracc-view.html` | the raw HTML views (20–290 KB). | **no** (this folder's `.gitignore`; re-download: `curl --cacert <(cat "$SSL_CERT_FILE" ../../../tools/certs/*.pem) -o … https://oracc.museum.upenn.edu/saao/saa09/<P>/html`) |

## Line numbering
ORACC = SAA 9 = Parpola 1997: surface (o / r / b.e. / t.e. / l.e.), column (roman, in the multi-column tablets 1–3), line; primes (′) mark lines counted from a break. The literature cites the oracles both by line (SAA 9 1 ii 16′) and by Parpola's oracle numbers (**1.4**, **2.5**, **3.3** …), which are not in the data: the oracle units are marked by the rulings and the colophon formula *ša pî* / *issu pî* PN "by the mouth of PN". Our project files mark them as section headings (`## 1.1` …, see `נבואה-ומלכות/1-נבואות-אשוריות/project.md`). The literature after 1997 (Nissinen's *Prophets and Prophecy in the Ancient Near East*, SBL Writings from the Ancient World 12, and its later edition; Weippert's studies of the oracles) uses the same oracle numbers (from memory, not checked here: no copy obtained; © SBL).

## Usefulness
Rank 1 base text for `נבואה-ומלכות/1-נבואות-אשוריות/`. The only corpus of written prophecy from the ancient Near East outside the Bible (with the Mari letters, OB, which are a separate corpus); contemporary with Isaiah and Micah, and the closest formal parallel to the salvation oracle ("fear not … I am …", Isa 41:8–13; Gen 15:1; 26:24). Text 1 is well preserved; texts 2 and 3 are broken at column edges; 4–6, 10–11 are fragments. The `norm:` line gives the editors' normalization of every preserved word; about a third of the words in texts 2–6 are unlemmatised (`u`, broken).
