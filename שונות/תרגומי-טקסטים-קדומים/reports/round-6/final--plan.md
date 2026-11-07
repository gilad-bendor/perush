# Round 6 – the lead's finalization plan (drafted 2026-11-07, range A; executed in range B)

All five runs are done and merged into `translation-round-6` (reports `run-1.md` … `run-5.md`; no questions for the
user). Range A ended before the finalization could run, so it is planned here and executed at the start of range B
(Mon 09 Nov 00:00 Israel = Sun 08 Nov 22:00 UTC), up to three agents, on independent batches.

## 1. Before deciding: survey every row (`tools/harmonize_survey.py`, both ways: `src` / `parse` on the source word, `heb` on the Hebrew)
A row marked **change?** is the lead's leaning; the survey decides (guidelines §5.2 "A harmonization pass": check the new
Hebrew in every corpus for another source word and for a cognate reservation before changing).

| # | Run | Item | Leaning |
|---|---|---|---|
| 1 | 1 | Flood references §8 (the Dynastic Chronicle, ~1284, 1291): Enki written `אנכי` ("I") | **change** → `אֶנְקִי` (an error, not a split) |
| 2 | 1 | Sum. *di ku₅* `שפט משפט` (BH, DB) / the law corpora's *di* `דין` | survey the Sumerian law texts (Ur-Namma, Lipit-Ištar) and Gudea first; change? → `דן דין` if the Sumerian laws have it (Ugarit's gate line `דן דין` is another language) |
| 3 | 1 | Ḫuwawa `חוּוָוָה` (Sumerian poems) / `חוּוָוה` (OB tablets, Gilgameš corpus §1) | **change** the OB tablets' plain spelling and its trap to the poems' form (one name, one spelling) |
| 4 | 1 | *ur₂* `חיק` / `שׁרש`; *ba* `מסר` / `חלק`; *ḫazin* / *aga-silig* `גרזן`; *uzu* / *su* `בשר` | keep (by sense; recorded) |
| 5 | 2 | Egyptian: two lemmas, one Hebrew (§12.6.13 list) | keep (non-Semitic, by sense; recorded) unless the survey finds a collision inside one text |
| 6 | 2 | jꜣ.t `תל` / `מוט` / `נֵס`; mr.w; sḫt; qnj.t; ḫꜣw.t; wpi̯ | keep by text / sense (recorded) |
| 7 | 2 | the horizon god `רַא־חַרְאַחְתִּי` (TB) / `חוֹרוּס־אָחְתִּי` (NU5) | check the transliterations: two names → keep; one name → one form |
| 8 | 2 | BD 175 / Merikare E132 / the dossier's MK / Amenemope ḥḏi̯ `הזיק` vs "destroy" | keep `הזיק` unless the survey shows ḥḏi̯'s sense is "destroy" in the majority of its lines (then all copies at once, `verify MR`, `verify MK`, dossier) |
| 9 | 2 | `האציל` for sꜥḥ (BD 78; Num 11:17's root) | change? → `עִיטֵּר` / `רוֹמֵם` if the root אצל is reserved anywhere or reads as Num 11:17; else keep with the note |
| 10 | 3 | *u₅* `אווז(?)` (EA 436, LZ 220) / *kur-gi₄* `אווז` (ES) | change? → one goose word per Sumerian word (`אווז` for *kur-gi₄*, the identified bird; *u₅* by the ePSD gloss) |
| 11 | 3 | *nu-gig* `הנּוּגִיג` (transliterated) / `קְדֵשָׁה` (law corpora, for Akk. *qadištu*) | keep (another language; the cognate reservation of `קדש` protects *qadištu*) |
| 12 | 3 | *suḫ₁₀* `עטרה` (ES) / Etana's *meānu* | survey; change the Sumerian if `עטרה` is a reserved Akkadian rendering |
| 13 | 3 | *galam* `נישא` (LC) / EA `בתחכום`; *uru₁₆* `נישא` | survey; one Hebrew per Sumerian word inside the Uruk cycle (change? LC's *galam* → EA's precedent if the sense allows) |
| 14 | 3 | *er₂ šu ti* `לקח` / EA *šu ti* `קיבל` | keep (*er₂ šu ti* "take tears" is an idiom; recorded) |
| 15 | 3 | *alan* `פֶּסֶל` (Sumerian) / *ṣalmu* `צֶלֶם` (Akkadian, gated) | keep, and **state as a rule** (§6.7): the cognate keeps its Hebrew across languages; a Sumerian word whose Akkadian equivalent is a gated cognate does not take the cognate's Hebrew |
| 16 | 3 | Kulaba `כּוּלַבָּה` (Uruk cycle, EA – §6.7) / `כֻּלַּבָּה` (run 1) | **change** run 1's vocalization to `כּוּלַבָּה` |
| 17 | 4 | *kaskal* `מסילה` (LSU) / `דרך` (kings) | keep (LSU has *ḫar-ra-an* `דרך` in the same line; recorded) |
| 18 | 4 | *bala* `תְּקוּפָה` (LSU) / `תקופת שלטון` (LU 113) | **change** LU 113 → `תקופה` |
| 19 | 4 | *tum₂* / *de₆* `נשא` beside *gur₃* `נושא` | survey Inana 283 / 371; change? → one verb per Sumerian word |
| 20 | 4 | *sig₉* / *niĝ₂-me-ĝar* both `דממה` | keep (recorded; follows two earlier texts) |
| 21 | 4 | *an-za-am* `גביע` = Akk. *assammu* `גביעים` (OB Gilgameš) | keep (one word across the languages: confirmed) |
| 22 | 4 | *engiz* `מבשל` / the harmonized *muḫaldim* `מְבַשֵּׁל` | survey; *engiz* is a temple cook-priest: change? → transliterate or `טַבָּח־הַמִּקְדָּשׁ` only if a gate blocks it |
| 23 | 4 | *uru₄* `זרע` in the proverbs (2.91, 2.140; collection 1's precedent) against the creation corpus's binding *uru₄* = `חָרַשׁ` | **change** to `חרש` in every proverb line with *uru₄* (collection 1 included) unless the line has a sowing word |
| 24 | 4 | DD's proposals (always-vocalized `מָנוּ`, `רֵעַ`, `שָׂמִים`, `אֵלָה`; reserved `מקוה`, `ערב רב`, `פתר`, `איילות`; the formulas) | **apply** to `netherworld_tools.py` (DD key), run `verify DD --strict` |
| 25 | 5 | ἀλκτήρ TH 657 `מגן מפני פורענות` (collides with ἀσπίς `מָגֵן`) / SH `הוֹדֵף` | **change** TH 657 → `הודף` |
| 26 | 5 | τεῦχος SH `נֶשֶׁק` / TH, WD `שריון` (SH needs `שִׁרְיוֹן` for θώραξ) | **change** TH / WD's τεῦχος → `נשק` (one Hebrew per lemma in the corpus; θώραξ keeps `שריון`) |
| 27 | 5 | ἰάχω SH `צעק` / TH `הריע` (SH's `תרועה` is ἀλαλητός) | survey; change? → `הריע` for ἰάχω and keep `תרועה` for ἀλαλητός, if no other lemma uses `הריע` |
| 28 | 5 | χλωρός `חיוור` / `ירוק`; the κυανο- compounds; ποδώκης; μεγαλήτωρ; δέρκομαι / ὁράω; κυρέω / ἀντιβολέω | keep the sense split (χλωρός); one form each for the epithets (TH's precedent wins); the verbs recorded |

## 2. Apply (range B, up to three agents, one batch each, never two on one file)
- **Batch A – Sumerian and Akkadian** (rows 1–4, 10–24): the flood references, the Gilgameš corpus, the kings corpus, the
  laments, the netherworld, the everyday voices; their tools' `verify --strict`.
- **Batch B – Egyptian** (rows 5–9): `egypt_tools.py verify --strict`, `verify MR`, `verify MK`, the dossier.
- **Batch C – Greek** (rows 25–28): `hesiod_tools.py verify --strict`, `selftest`.
Each agent applies a row to **every** line that carries the word (not only the listed ones), records a
"2026-11-0X harmonization" line in its corpora's `renderings.md`, and runs its builders, verifiers and
`check_bible_quotes.py` on its own files.

## 3. Then (one agent)
- the excerpt identity checks (the Death of Bilgameš: `bilgames_tools.py verify DB`; Merikare: `egypt_tools.py verify MR MK`, `dossier_tools.py verify`);
- **every verifier** (the Round 5 list in `reports/round-5/final.md` §Verification, plus the new keys: `bilgames_tools.py verify all`,
  `kings_tools.py verify LC LZ ES`, `lament_tools.py verify LSU`, `netherworld_tools.py verify DD`, `kol_tools.py`, `egypt_tools.py` all keys,
  `hesiod_tools.py`), all at once in the background, after `sources_sync.py fetch`;
- `check_bible_quotes.py` over every `.md` of the folder;
- `harmonization--2026-11-0X.md` (the table, as the earlier passes), guidelines §6.7 (a summary line + rule 15), STATUS
  (§3 rows, §4: Round 6 complete, Round 7 next), `history.md` (changelog), the plan rows; `reports/round-6/final.md`;
- `branches.py finish --into-main -m "Ancient-texts translations: Round 6 – …"`; title `Round6/Done: …`;
- launch the Round 7 session (guidelines §5.1c step 7), and one message to the user.
