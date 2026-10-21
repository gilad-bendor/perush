# Hand-off: Round 2, run 5 (the netherworld corpus), 2026-10-21

Run 5 of Round 2 (STATUS.md §4, row 5): **the Descent of Ištar** (Akkadian, eBL `L/1/8`, 159 entries) and **Inana's Descent** (Sumerian, ETCSL 1.4.1 + ORACC Q000343, 440 entries), both translated in full in the new corpus `העולם-התחתון/`. Everything below is for the lead to merge into the shared files this run was not allowed to edit.

## 1. Sources

### 1.1 New folders
- `sources/ETCSL/1.4.1--Inanas-Descent/` – **committed** (CC BY-NC-SA): `c.1.4.1.xml`, `t.1.4.1.xml` (from the local ETCSL bulk corpus), `transliteration.md`, `translation.md`, `README.md`. 440 entries (412 + 28 pluses: 13A–H, 30A–31A, 37A, 129A–B, 174A–B, 175A–B, 221A, 226A, 300A–301A, 305A–C, 319A, 325A, 376A, 379A).
- `sources/ORACC/epsd2-literary--Q000343--Inanas-Descent/` – **committed** (CC0): `Q000343--lemmatised-morph.md` (`tools/cdl2md.py … --morph`), `README.md`. Same order as ETCSL; ORACC labels 13Š = ETCSL 13C, 305Š = 305C; 248, 277, 278 unlabelled (aligned by position in `העולם-התחתון/netherworld_tools.py`).
- `sources/eBL/Descent-of-Ishtar-SB/` (148 labels: 1–138 + 11a, 12a, 18a, 23a, 97a, 103a, 118a–c, 137a) and `sources/eBL/Descent-of-Ishtar-NA/` (11 lines, VAT 13833 = AššNA1) – **git-ignored** by the existing `eBL/*/` rule, made by `tools/ebl_fetch.py L 1 8 "Standard Babylonian" - sources/eBL/Descent-of-Ishtar-SB` and `tools/ebl_fetch.py L 1 8 "Neo-Assyrian" - sources/eBL/Descent-of-Ishtar-NA`. They are covered by the built-in eBL-chapter rule of `tools/sources_sync.py` (`eBL/<name>/` → kind `ebl-chapter`), so **no `fetch-recipes.tsv` row is needed**; the lead should run `sources_sync.py` to add them to `MANIFEST.json`.
- No nested `.gitignore` was created.

### 1.2 Text for `sources/eBL/README.md` (new subsection)
```markdown
### Added 2026-10-21 (the netherworld corpus, `העולם-התחתון/`)
| Folder | Text | Lines (eBL labels) | Editors / translator |
|---|---|---|---|
| `Descent-of-Ishtar-SB/` | *Ištar's Descent* (eBL `L/1/8`), Standard Babylonian | 148 (1–138, 11a, 12a, 18a, 23a, 97a, 103a, 118a–c, 137a) | A. Setälä (ed.), rev. Z. J. Földi, A. Hätinen, E. Jiménez, G. Rozzi; translation B. R. Foster |
| `Descent-of-Ishtar-NA/` | the Neo-Assyrian chapter (AššNA1 = VAT 13833, the *nargallu*'s tablet from Assur: another opening of the poem) | 11 | (as above) |
Fetched with `tools/ebl_fetch.py L 1 8 "Standard Babylonian" -` and `… "Neo-Assyrian" -`. Manuscripts: NinNA1 (K 162), NinNA2 (K 7600), AššNA1a (VAT 9729 = KAR 1), AššNA1b (VAT 11269). eBL links its lines to Gilgameš VII 184–191 (= 4–11), VII 102–119 (≈ 103–108), Nergal and Ereškigal (L I.6) and an incantation (BM 41291, 70–74), and to an "MA" chapter it does not publish. Lemma slips met: *ḫazīqatu* "headcloth" for *ḫalziqqu* "waterskin" (98–99); line 137a has an empty normalization. **Usefulness:** the base text of `העולם-התחתון/1-ירידת-אישתר/`. Gitignored (§8).
```

### 1.3 Text for `sources/ETCSL/README.md` and `sources/ORACC/README.md` (one line each)
- ETCSL: "`1.4.1--Inanas-Descent/` – Inana's descent to the nether world (c.1.4.1 + t.1.4.1, 440 entries); base of `העולם-התחתון/2-ירידת-אינאנה/`. Committed (CC BY-NC-SA)."
- ORACC: "`epsd2-literary--Q000343--Inanas-Descent/` – ePSD2 lemma + morph for every line of Inana's Descent (`cdl2md.py --morph`); 13Š = ETCSL 13C, 305Š = 305C, 248/277/278 unlabelled. Committed (CC0)."

### 1.4 Text for `sources-registry.md` (new subsection after §4.4j)
```markdown
### 4.4k The netherworld: the Descent of Ištar and Inana's Descent (the netherworld corpus, `העולם-התחתון/`)
- **`eBL/Descent-of-Ishtar-SB/`, `eBL/Descent-of-Ishtar-NA/`** (eBL `L/1/8`; SB 148 labels, NA 11 lines; gitignored, built-in `sources_sync.py` rule): the Akkadian base text, with Foster's translation (rank 3). Not available: Lapinkivi 2010 (SAACT 6), Dalley 1989, Talon 1988, Gabbay's study of 81 (cited through eBL's notes).
- **`ETCSL/1.4.1--Inanas-Descent/`** (CC BY-NC-SA, committed): the Sumerian composite (440 entries) and translation; **`ORACC/epsd2-literary--Q000343--Inanas-Descent/`** (CC0, committed): ePSD2 lemma + morph for every line. Not available: Sladek 1974, Katz 2003, Buccellati 1982.
```
- Access notes (§4.6): nothing new – eBL API, the local ETCSL bulk corpus and the committed ORACC export worked; ORACC was not contacted (the Q000343 export was converted from the local bulk zip).
- Hosts: none new (`domains.txt` unchanged).

## 2. Tools (lines for `tools.md`)
- `העולם-התחתון/netherworld_tools.py` – `verify IS|IN [--strict]` (entries vs. eBL labels incl. `NA1`… / ETCSL labels; backticked source = base text; reserved and gated Hebrew licensed by the eBL normalization/lemma or the Sumerian word; name traps; fixed formulas, also across the two languages; translation = `>` lines; identical sources with different Hebrew), `build IS|IN` (clean translation from intro + headings + `>` lines + footnotes), `lines IS|IN FROM TO` (base lines with eBL lemmas / ORACC lemma + morph), `grep all '<regex>'` (the `>` lines of every corpus, niqqud stripped). Adapted from the lament and temple tools; handles an eBL line with an empty normalization (137a).
- `העולם-התחתון/build_parallels_index.py` – **new pattern**: generates the per-project parallels tables (`### Parallels index (IS|IN)` in each `project.md`) from the annotated **הקבלה** bullets (split at the tags; quotations with Hebrew references = the Bible cell; a tag inside a parenthesis is folded back; a tag with no quotation inherits the previous verses), then merges them by Bible verse into `parallels-index.md` (the key findings above `## The table` kept). Recommended for future corpora: no hand-copied tables, so the index never drifts from the annotations.

## 3. Guidelines
### 3.1 §6.7 (false friends of unvocalized Hebrew) – one bullet
- **The netherworld corpus (2026-10-21):** `לשאול` (plene infinitive of `שָׁאַל` "to ask") reads "to Sheol" – never write it; use `שָׁאַל`, `יִשָּׁאֵל`, `שְׁאֵלָה`. `הגלה` (the article + the *gala* priest, or *gal₅-la₂*) reads "exiled" – the transliterated `גָּלָה`, `גָּלָה־טוּר`, `שֵׁדֵי־גַּלָּה` are vocalized and never take the article. `איננה` = Inana / "is not"; `אותו` = Utu / "him"; `אור` = Urim / "light"; `אומה` = Umma / "nation"; `שרא` = Šara; `נטי` = Neti; `מה` = the *me* / "what" (`הַ־מֶה`, `מֶה`). `שד` (the *galla*) is gated: `משד`, `שדי` "breast(s)" also match – the Sumerian *ubur* is `דַּד`.

### 3.2 §5.2 (lessons) – proposed bullets
- **A pre-draft renderings table must be re-checked against the drafted lines at the end** (★): six rows of `העולם-התחתון/renderings.md` (§2 "the eye of death", "to swear", "the request"; §5 *šar₂/sil/dar*, *lipiš*, *šag₄/bar*) were out of step with the Hebrew actually drafted, because the translator fixed the line and not the table; the verify script checked only the formulas it was given. Diff every pre-draft table row against the first drafted occurrence before the hand-off.
- **Grep the annotated `>` lines of every corpus, not only the renderings tables** (★): the Adapa precedent for *karru* (`מעטה אבל`) and the Enki-and-Ninḫursaĝ closing formula (`תהילתך מתוקה`) were in annotated lines only.
- **Print the verse even for a note marked "not quoted"** (★): two quotations from memory slipped into notes (Gen 37:23, Gen 50:23) and were caught only by `check_bible_quotes.py`.
- **Two versions of one story in two languages**: fix one Hebrew for every shared thing *and* let each language keep its own precedent where the source word differs (Sum. *tug₂-mu-dur₇-ra* `בֶּגֶד־אֵבֶל` – Agade; Akk. *karru* `מַעֲטֵה אֵבֶל` – Adapa); the reader then sees exactly where the Akkadian retelling kept, changed or dropped the Sumerian.
- **Command / execution chains as a verify target**: in a narrative built of commands and their execution (Inana 34–67 → 176–216 → 316–325; 227–253 → 254–281), align the word order of the execution to the command's, not only the words (pass (b) found six lines with the same words in another order).
- **Without a sub-agent tool the coordinator can translate the texts himself, one at a time** (the cloud session of run 5 had no Agent tool); the safeguards (renderings fixed first, verify script, three passes, check_bible_quotes) were kept and were enough.

### 3.3 §6.5 (names) – additions
Ereškigal `אֶרֶשְׁכִּיגַל` ★; Namtar `נַמְתָּר` ★; Neti `נֵטִי` ★; Belili `בֵּלִילִי` ★; Kute `כּוּת` ★; Šara `שַׁרָא` ★; Umma `אוּמָּה` ★; Lulal `לוּלַל`; Ningal `נִינְגַּל`; Gugalana `גּוּגַלְאַנָּה`; Papsukkal `פַּפְּסוּכַּל`; Aṣûšu-namir `אַצּוּשׁוּ־נָמִר`; Ganzer `גַּנְזֵר`; Ēgalgina `אֵגַלְגִּינָה`; Kurnugi `כּוּרְנוּגִי` ★; *kurgarra* `כּוּרְגַּרָּה`, *gala-tur* `גָּלָה־טוּר`, *gal₅-la₂* `שֵׁדֵי־גַּלָּה` (★, no article); *nu-gig* `נוּגִיג`; *assinnu* `אַסִּנּוּ`; the temples and cities of Inana 6–13H (`העולם-התחתון/renderings.md` §1).

### 3.4 Names and terms shared with the other Round 2 runs
`העולם-התחתון/renderings.md` §10 lists them (Inana, Dumuzi, Utu, Nanna, Enki, Enlil, Ereškigal, Ninšubur, Unug, Eanna, Kulaba, Eridug / *uru₂-ze₂-eb*, Šara; *sukkal* `וְזִיר`, *i₃-du₈* `שׁוֹעֵר`, *nin* `גְּבִירָה`, *me* `הַ־מֶה`, *ĝarza* `פֻּלְחָן`, *kur* `הָאָרֶץ`, *ki-sikil* `עַלְמָה`, *gala* `גָּלָה`, *gal₅-la₂* `שֵׁד־גַּלָּה`, *nim* `זְבוּב`, *ĝeštug₂* `אֹזֶן`; added while drafting: *kuš₂* `יָגַע`, *du₈* `אָחַז`, *ḫa-za* `הֶחֱזִיק`, *dab₅* `תָּפַס`, *nam tar* `גָּזַר גּוֹרָל`, *ĝidru* `שַׁרְבִיט` (from run 6), *ra-gaba* `שָׁלִיחַ`, *ĝuruš* `בָּחוּר`, *dim₂* `עִצֵּב`, *ba* `חִלֵּק`, *niĝ₂-ba* `מָנָה`, *kadra* `תְּשׁוּרָה`, *za₃-mi₂ … dug₃* `תְּהִלָּה מְתוּקָה`). Run 6 (Enmerkar) shares Inana, Kulaba, Unug, the *me*, *ĝidru*, *ḫa-za*; run 7 (everyday voices) may share *ki-sikil*, *nin*, *dam*.

## 4. History (for `history.md`)
### 4.1 "Learned on the netherworld corpus" (account)
- **Run 5 of Round 2 (2026-10-21): the Descent of Ištar (eBL `L/1/8`, 159 entries) and Inana's Descent (ETCSL 1.4.1 / ORACC Q000343, 440 entries) in a new corpus `העולם-התחתון/`, translated by the coordinator himself (no sub-agent tool in this cloud session), the Akkadian first, then the Sumerian in two files; three review passes each; `netherworld_tools.py verify --strict` OK; parallels index generated from the annotations.** The corpus renderings fixed one Hebrew for the shared episodes of the two languages before the first line (*kur* = *erṣetu* = `הָאָרֶץ`, *ĝarza* = *parṣu* = `פֻּלְחָן`, *al dug₄* = *erēšu* = `שָׁאַל`, the ornaments gate by gate, the water and plant of life), and copied the Gilgameš Hebrew for the lines the Akkadian shares with Gilgameš VII and VI. The strongest finds: the myth and the rite behind Ezek 8:14 (Inana weeps for Dumuzi; the Akkadian ends with the wailing men and women, *bakkāʾū u bakkâtu*); Job 7:9 as the law of both poems in the same verbs; the substitute ("one head in place of her head") against Ps 49:9; Song 8:6 acted out (the goddess of love gives her husband to death with the eye that killed her); Ereškigal as "the mother who gives birth, on account of her children" (Jer 31:14). Lessons: §3.2 above (stale pre-draft rows; grep the annotated lines; print every verse even in notes).

### 4.2 Changelog line
- **2026-10-21** – New corpus **`העולם-התחתון/`** (round 2, run 5): **the Descent of Ištar** (eBL `L/1/8`, SB + NA, all 159 entries) and **Inana's Descent** (ETCSL 1.4.1 / ORACC Q000343, all 440 entries, two files), one Hebrew for the shared formulas of the two languages, three review passes each, `netherworld_tools.py` (verify / build / lines / grep), `build_parallels_index.py` (tables generated from the annotations), print stubs; translated by the coordinator (no sub-agent tool in the session).

## 5. STATUS and the plan
### 5.1 `curated-translation-candidates.md`, Round 2 plan row 5
`| 5 | **The Descent of Ištar** (eBL) + **Inana's Descent** (ETCSL 1.4.1) | \`העולם-התחתון/\` (new corpus: the netherworld) | **Done (first draft), 2026-10-21**: the Descent of Ištar, all 159 entries (SB 1–138 with the pluses, NA1–NA11), and Inana's Descent, all 440 entries (1–412 with the pluses, two files); one Hebrew for the shared formulas; three review passes each; verified by \`netherworld_tools.py verify --strict\`; translations (19 + 24 footnotes); parallels index (172 rows, key findings); print stubs \`הדפסה/העולם-התחתון/\`. |`

### 5.2 `STATUS.md` §3 table row
`| \`העולם-התחתון/\` | 1 the Descent of Ištar (SB + NA); 2 Inana's Descent | 599 | \`netherworld_tools.py verify IS --strict\`, \`… verify IN --strict\` |`
(and §4 row 5 can be marked done).

### 5.3 `STATUS.md` §6 – open decisions that cross corpora
| Decision | Now | Alternatives / where |
|---|---|---|
| *kur* (the netherworld) | `הָאָרֶץ` (= *erṣetu*; netherworld corpus) | `הַר` / `אֶרֶץ` "highland, foreign land" in the other Sumerian corpora (correct there: another sense) |
| *sukkal* / *šukkallu* | `וְזִיר` (creation, temple, netherworld) | `שַׂר` (Gilgameš VIII) |
| *uznu* / *ĝeštug₂* in "set the ear" | `אֹזֶן` (netherworld: the literal image) | `בִּינָה` (Gilgameš default) |
| *ḫarrānu* / *ḫar-ra-an* | `אֹרַח` (Gilgameš, netherworld) | `דֶּרֶךְ` (laments) |
| *kabattu* | `כָּבֵד` (wisdom, netherworld) | `רוּחַ` (Gilgameš) |
| *ur₄* "pluck" | `קָטַף` (netherworld) | check the creation corpus (`אָסַף`?) |
| *Descent of Ištar 60 ṣubāt bālti*; 81 *guddud* | `שמלת ההדר`; `*גָּדוּד*` | Foster "loincloth"; eBL "downcast" (`1-ירידת-אישתר/project.md`) |
The per-project open decisions: `1-ירידת-אישתר/project.md` (8), `2-ירידת-אינאנה/project.md` (8).

## 6. Limits met
- **No quota or rate limit** was met (eBL API, local ETCSL bulk, local ORACC export).
- **No sub-agent (Agent) tool** was available in this cloud session, so the coordinator translated both texts himself, sequentially (recorded in both `project.md` files and in §4.1). Not a quota; a tool limit of the session.
- **Push rejected throughout** (non-fast-forward: `origin/main` moved – the user's commit "docs/ moves to its own branch, auto-docs" and the other runs' pushes). Per the common brief, no pull / rebase in the shared checkout: all run-5 commits are local on `main` (from `e2bac42` on) and must be pushed by the lead after syncing.

## 7. Report
- **Translated and verified:** the Descent of Ištar, all 159 entries (`1-ירידת-אישתר/annotated.rtl.md`, translation with 19 footnotes); Inana's Descent, all 440 entries (`2-ירידת-אינאנה/annotated-1.rtl.md`, `annotated-2.rtl.md`; translation with 24 footnotes). `netherworld_tools.py verify IS --strict` and `verify IN --strict`: OK (two "same source, different Hebrew" notes in IN are gender only). `check_bible_quotes.py`: 0 problems in all annotated files, translations, project files and the index. Print stubs: `הדפסה/העולם-התחתון/1-ירידת-אישתר.rtl.md`, `2-ירידת-אינאנה.rtl.md`. Parallels index: `parallels-index.md` (172 rows; key findings at the top).
- **Bible findings (top):** Ezek 8:14 – the myth (Inana weeps for Dumuzi, the half-year) and the rite (the Akkadian end: washing, red garment, flute, the wailing men and women, cognate *bakû*); Job 7:9–10 / 16:22 – the land of no return in the same verbs (IS 85, IS 6, IN 83–84, 194, 287); the substitute (IN 289; IS 118b, 126 *napṭiru*) ↔ Isa 43:3–4, Exod 21:23, and against Ps 49:8–9; Song 8:6 acted out (IN 354–358) and Song 3:1, 6:1, 8:5 (the seeking wife, the apple tree); Gen 3:14, 19 (dust and clay the food of the dead); Lev 19:28, Deut 14:1, Jer 16:6 (the forbidden mourning rites as the vizier's virtue); 1 Sam 28:13 and Hos 6:2, Isa 26:19 (the dead who come up; the corpse that stands after three days); 2 Kgs 2:10 (the request that may not be asked, in both languages); Isa 14 (the morning star on the throne, brought down). **[absent]** "naked", `קָדֵשׁ` / `קְדֵשָׁה`, `שְׁאוֹל` – kept out of the translation, discussed in the apparatus.
- **The ancient mind:** the netherworld as a house with laws (*me*, *parṣū*) that bind a goddess; death has a mother (Ereškigal weeps for the young, lies in pain "for her children", is won by sympathy); fertility stops when the goddess of love is below; loyalty in mourning saves, indifference condemns (the three mourners vs. Dumuzi on the seat – told through two verbs); the small and the marginal (flies, wind, cult performers made of dirt) cross where the great gods cannot; myth becomes the yearly rite.
- **Open decisions:** 8 per project (`project.md`), the cross-corpus ones in §5.3.
- **Skipped / failed:** nothing skipped. The broken stretches (Inana 380–393, 398–410; Ištar 118a–c) are rendered as far as the signs go. eBL's "MA" chapter (linked, unpublished) could not be fetched. Push: rejected (§6).
