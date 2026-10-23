# Round 4, run 1 – the Ugaritic myths (+ the fifth-day dossier): done (first draft)

Child session `session_01RnjWaQzezdaFopfkeayxVJ` (`Round4/Run1`), 2026-10-23. Coordinator: this session. Translators:
sub-agents, strictly one at a time (three in all; the third did five batches, resumed after each merge). The dossier was
translated by the coordinator. No quota stop: `rate_limit_info.status` was `allowed` before every translator.

## Done

**A new corpus, `מיתוסים-אוגריתיים/`** (the first language outside Mesopotamia), set up before the first line:
- **Base text:** CUC v0.2.8 (Copenhagen Ugaritic Corpus, KTU³'s readings, Zenodo, CC BY-NC 4.0). It is git-ignored,
  with recipes in `sources/fetch-recipes.tsv` and a manifest entry. EUPT was checked and has nothing out for these texts
  yet. DULAT is reached per word through CUC's parses and lexicon. Cassuto 1951 (public domain, `sources/Ben-Yehuda--…`)
  is the register check.
- **Tools:**
  - `tools/cuc2md.py`: a Text-Fabric reader that needs no package.
  - `ugarit_tools.py`: data / fill / pars / lex / dulat / grep / verify / build / gates / selftest.
  - `build_parallels_index.py`, for the two projects.
- **Reference files:**
  - `renderings.md`: the name table, the transliteration convention, reserved words with tested gates, formulas,
    fixed lines and the selftest; §10 holds every merge, and §11 the dossier renderings.
  - `translator-brief--ugaritic.md`: the ★ rules and the grammar mapping.
  - `corpus.md`, `parallels-index.md`.
- `domains.txt` updated.

| Project | Texts | Lines | Translator |
|---|---|---|---|
| `1-מחזור-בעל/` | The Baal Cycle, KTU 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 | 118 + 132 + 258 + 447 + 172 + 245 = **1,372** | T1: 1.3. T2: 1.4 (two parts). T3: 1.5, 1.6, 1.2 + 1.1 |
| `2-מיתוסים-ולחשים/` | KTU 1.23 (Šaḥar and Šalim), 1.24 (Nikkal and Yarikh), 1.114 (El's *marzeaḥ*), 1.100 and 1.107 (serpent charms), 1.108 (Rapiʾu), 1.82 and 1.83 (charms against the serpent and the *tnn*) | 76 + 50 + 31 + 79 + 54 + 27 + 43 + 17 = **377** | T3 |
| `3-תיק-היום-החמישי/` | The fifth-day dossier: six excerpts, each from its own language: Merikare E 130–136 (Middle Egyptian), Hesiod's Keto and Typhoeus (Greek), Illuyanka (Hittite), Rigveda 1.32 (Vedic), Hýmiskviða 22–24 (Old Norse), the Kojiki's eight-headed serpent (Old Japanese in kanbun) | 7 + 23 + 12 + 24 + 22 + 12 = **100** | coordinator |

**Files in each project:**
- `annotated-<KEY>.rtl.md` (line by line, with the apparatus);
- `translation--intro-<KEY>.rtl.md`;
- the generated `translation-<KEY>.rtl.md` and `translation.rtl.md`;
- `project.md`, with a section per tablet: Proposals, open decisions, progress log and the passes, and a parallels table.

**Print stubs:** `הדפסה/מיתוסים-אוגריתיים/{1-מחזור-בעל,2-מיתוסים-ולחשים,3-תיק-היום-החמישי}.rtl.md`.

**Shared files, updated once at the end:**
- `STATUS.md` and the plan row;
- guidelines §5.2 (two lessons) and §6.7 (the Ugaritic corpus and the dossier);
- `history.md` (the run, and the changelog);
- `tools.md`;
- `sources-registry.md`: §4.4r (Ugaritic), §4.4s (the dossier's sources);
- `domains.txt`.

## Verification (final state, commit of this report)

- `ugarit_tools.py verify --strict` on all 14 tablets: 0 problems.
  - It lists 4 repeated-line differences, all deliberate and explained in their entries. One example: the throne
    formula's *l* is "from" when a god is driven off (1.3 IV:3) and "on" when he sits (1.6 V:6).
- `ugarit_tools.py selftest`: 45 lines, 0 failures.
- `ugarit_tools.py build`: run. The `translation*.rtl.md` files equal the `>` lines (checked by verify).
- `3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems. `build` was run.
- `tools/check_bible_quotes.py` on every `.rtl.md` and `.md` file of the corpus, and on `translation-guidelines.md`:
  0 problems.
- `build_parallels_index.py`: 619 rows. The key findings are written at the top.
- Three review passes per tablet: fidelity, consistency and Hebrew, each logged in its `project.md` section.

## Key findings

The full list, with lines and tags, is at the top of `מיתוסים-אוגריתיים/parallels-index.md`.

**For the Bible:**
1. **Gen 1:21's *tanninim* are created; Ugarit's *tnn* is a defeated enemy.**
   - Anat: "I muzzled the *tnn*" (1.3 III:40). It is affirmative, an asseverative *l*, not a question, so Isa 51:9's
     question form is a divergence.
   - "In the sea – Arš and the *tnn*" (1.6 VI:51) matches Isa 27:1 `הַתַּנִּין אֲשֶׁר בַּיָּם`.
   - 1.82:1 has *tnn* beside *mḫṣ* (Job 26:12).
   - Ugarit uses *mḫṣ* / *šbm* where Gen 1:21 has `בָּרָא`; that verb is the finding.
   - **1.83:8 reads *tan*, not *tnn*** (CUC = KTU³). The well-known "*tnn* bound and muzzled" is an emendation and is
     marked as such everywhere.
2. **Leviathan's adjectives belong to a *bṯn*** (1.5 I:1–2; 1.3 III:41–42).
   - *brḥ* and *ʿqltn* are Isa 27:1's `בָּרִחַ`, `עֲקַלָּתוֹן`. Isaiah swapped the noun for `נָחָשׁ`.
   - Ugarit's mythic serpent is never *nḥš*; *nḥš* is the snake of the charms.
3. **Gen 1:2's vocabulary on the tablets:**
   - *thw* `תֹּהוּ` (1.5 I:15, Mot's appetite);
   - *thmtm* `שְׁתֵּי הַתְּהוֹמוֹת` at El's dwelling (Gen 49:25);
   - *rḫp*, Anat "hovering" (1.108:8; Deut 32:11);
   - the seventh day of the fire that builds Baal's palace (1.4 VI:32, Gen 2:2): a divergence, because the seventh day
     ends a work rather than bringing rest.
4. **Kingship won at the sea** (1.2 IV): matches Ex 15:18, Ps 93, 29:10 and 92:10. A goddess rebukes (*gʿr*) the
   victor, where the Bible has God rebuke the sea (Nah 1:4).
5. **Anat destroys Mot with Moses' three verbs against the golden calf** (1.6 II:31–35: *šrp*, *ṭḥn*, *ḏry*; Ex 32:20).
6. **The Rephaim and Og's towns:** 1.108:2–3 (Ashtaroth, Edrei) matches Deut 1:4, Josh 12:4 and Deut 3:11.
7. **Smaller cognates:**
   - 1.24:7 `הָעַלְמָה תֵּלֵד בֵּן` (Isa 7:14);
   - *mhr* `מֹהַר` and *ṯlḫ* `שִׁלּוּחִים` (1 Kgs 9:16);
   - *mrzḥ* `מַרְזֵחַ` (Amos 6:7);
   - *ʿz* // *ḏmr* (Ex 15:2);
   - "one lip to earth, one to heaven" and *lšnm tlhk* (Ps 73:9);
   - the mourning rites (Deut 14:1, Jer 48:37).
8. **A famous parallel that is not on the tablet:** 1.23:14 reads "good coriander in milk". It has no kid and no
   mother, so Ex 23:19 is tagged [absent], with the history in the apparatus.

**For the ancient mind:**
- a god's death, and the mourning of El and of Anat (dust, gashes, the "furrowed" chest);
- El drunk at his *marzeaḥ*, the dog under the table, and a hangover cure;
- a mare calling god after god, town after town, until Horon answers (1.100);
- a marriage bargained with a bride-price (1.24);
- a palace that a god must beg leave to build, with a window the rains need.

**The dossier** sets Gen 1:21 against six cultures:
- everywhere else the water-monster is a rival of the storm god (Hatti, India, the North), a child of the sea (Hesiod),
  "the greed of the water" driven off (Egypt), or a devourer that demands a victim (Japan);
- in Genesis it is a creature, and in the next verse a blessed one;
- only Egypt, Hatti and Greece (through the LXX's κήτη) had contact with the Bible's world; the rest are shared motifs,
  and the notes say so.

## Decisions taken (minor, by the coordinator; all recorded in `renderings.md` §10 and the project sections)

- **1.3 III:40 (a fixed line):** the boast is affirmative, `אָכֵן חָסַמְתִּי אֶת הַתַּנִּין, *צְמַדְתִּיו*`, not the pre-set
  question `הֲלֹא …?`.
- **Collisions settled for the cognate:**
  - *alp* = `בָּקָר`, so *pr* keeps `פַּר`; four lines in 1.3–1.4 were changed.
  - *qbʿt* = `קֻבַּעַת`; *ridn* became `*אֲגַרְטָל*`.
  - *gb* (II) = `גַּב`; *bmt* keeps `גַּב` by sense, as a noted split.
  - *ht* = `עַתָּה` in every tablet.
  - The scribe's title *ṯʿy* = `שׁוֹעַ` (Isa 32:5).
- **Accepted splits** (one Hebrew word for two words, or two Hebrew words for one, each with a note):
  - *npl* / *ql* `נָפַל`;
  - *prt* / *arḫ* `פָּרָה`;
  - *an* / *un* `אוֹנִים`;
  - *hm* `אִם` / `אוֹ` by context;
  - *ġly*: wilting = root קמל (1.3 I:1 changed to `*תִּקְמֹל*`), heads lowered = `הִשְׁפִּיל`.
- **Licensed by their cognates:**
  - `תֹּהוּ` by *thw*;
  - `עֲלָמִים` by *ġlm*;
  - `רחף` by *rḫp* (the gate first had the wrong letter, *rḥp*).
- *sʾd*, the true cognate of `סָעַד`, keeps `מְכַלְכֵּל`; `סָעַד` stays *lḥm*'s by sense, so that the feasting formula does
  not split.
- *mdl* = `חָבַשׁ` (the saddling verb of Gen 22:3).
- *un* = `אוֹנִים` (not §4.4's `אֵבֶל`).
- *mhr* = `מֹהַר`; CUC's parse "warrior" was rejected.
- *ʿn* "furrow" = `מַעֲנָה`; the parse "Anat" was rejected.
- 1.83:8 *tan* and 1.83:10 *lbnt* are translated as the base text has them, with the emendations in the notes.
- All new names (1.23, 1.24, 1.100) and one-word renderings proposed by the translators were accepted, as listed in §10.
- **Tool fixes during the run:**
  - formula regexes now allow final letters (`נת[נן]`, `מלא[כך]`), the plene `וצווח`, the maqaf, the command forms and
    `[הת]שתחו`;
  - two false-positive gates fixed (*šdmt* `שְׁדֵמוֹת` against `דְּמוּת`, CUC's split *b ʿlm* against `בַּעַל`);
  - *ydd il ġzr* `הגי?בור`.

## Questions for the user

None of these blocks anything. Each line is translated with the choice shown first, and the alternative is in the note.

| Line | Question | Now |
|---|---|---|
| 1.4 I:36 | *nʿl il*: "divine sandals" (cognate `נַעַל`) or DULAT's "palanquin" (which would import Song 3:9–10) | `*נַעַל*` |
| 1.5 V:9 | *ḫnzr*: DULAT's "officials" or the traditional "boars" (`חֲזִירִים`, the cognate) | see the entry |
| 1.5 VI:18 | *psltm*: "braids" (↔ Lev 19:27) or "incisions" (↔ Lev 19:28) | `*מַחְלְפוֹת*` |
| 1.6 VI:48 | *mtm*: `מְתִים` "men" (DULAT) or `מֵתִים` "the dead" (the Rephaim parallel) | `מְתִים` |
| 1.6 I:48 | *ylḥn*: "moisten" (DULAT) or "clever" | `*יַרְוֶה*` |
| 1.6 V:9 | *kr*: "grew hot" or "returned" | `*חָם*` |
| 1.2 IV:28–31 | *bṯ*: "be ashamed!" (DULAT, `בּוֹשׁ`) or "scatter him!" | `בּוֹשׁ` |
| 1.2 IV:32 | "Baal shall reign" or "he shall reign forever" (*bʿlm*) | `בעל ימלוך!` |
| 1.2 III:22 | *mlkt*: "you reigned" or "queen" | see the entry |
| 1.2 I:26 | *tʿny*: "answer" or "humiliate" | see the entry |
| 1.1 IV:14 | *yw* `יַוּ`: the note says most scholars reject a link with YHWH. Keep the note as it is? | note |
| 1.1 V:8, 21 | *l ydʿt*: "indeed you know" or "you did not know" | see the entries |
| 1.23:40, 46 | *mt* "husband": `*מְתִי*` (keeps the word of *mtm* and the pun with Mot) or plain `אִישִׁי` | `*מְתִי*` |
| 1.23:57 | damaged *ṣlmm*: `*צלמים*?` (explicitly not Gen 1:26's) or `…` | `*צלמים*?` |
| 1.23:25 | *dlthm*: "their tendrils" or "their weakness" | see the entry |
| 1.24:47 | *ṯlḫh w mlgh*: "her dowry and her *mlg*" or two goddess names | dowry |
| 1.114:29, 21, 12 | *ḫš ʿrk lb* (or the emendation "dog's hair", not in KTU³); *ṯnt* "urine"; *rlb* | see the entries |
| 1.100 | *ʿqšr* `*עקשן*`; *yṯq* `*הרים*` | as shown |
| 1.107 | *b šr* ("on the prince"?); who speaks *aspt* (line 45) | see the entries |
| 1.108 | *ẓbm* "gazelles" or *ṭbm* "good"; *ilh*; the *l* of line 20 | see the entries |
| 1.82 | who smites whom in line 1; *bnt* "creatures" or "tamarisk"; *ʿnt tqm* "now arise" or "Anat arises" | see the entries |

## Problems and skipped items

- **Not done in the dossier** (the reasons are in its `project.md`):
  - Ḫedammu: left to the Hittite run.
  - Deir ʿAllā: no open edition.
  - The Apophis spells and the Westcar crocodile: left to the Egyptian run.
  - Anaximander: indirect testimonia only.
  - The Avestan Aži Dahāka.
  - The Shanhaijing: ctext.org forbids scraping.
  - The Kumulipo and Ika-tere: the hosts block scripts.
  - The Inuit Sea Woman: no text in the original language.
  - The Ngaju Dayak.
  - Palenque.
  - The Dove Book: ru.wikisource answered 429.
- **The dossier's parallels are in its annotated files' הקבלה bullets but not in a table:**
  - `build_parallels_index.py` reads only projects 1–2;
  - the dossier's `project.md` has an empty "Parallels index" heading.
  - A small follow-up: teach the builder the dossier's file format, or fill the table by hand.
- **Transient network errors:** Zenodo answered 403 once (a retry worked); the Wikimedia API answered 429 once (the saved
  page serves).
- **The translators could not edit the tool** (by design). I applied every tool fix myself. Four interim "[סטייה מן
  הנוסחה]" notes caused by tool bugs were removed after the fixes.
- **Minor collisions left for the next session on this corpus** (listed in renderings §10):
  - *gṯr* `הַגִּבּוֹר` against *ġzr* `גיבור`;
  - *rnn* against *bd* (both `רנן` / `רינן`);
  - *abd* as a verb in 1.100 against the noun in 1.107;
  - *pslt* `*מַחְלְפוֹת*` (1.5–1.6) against its cognate *mḫlpt* `מַחְלְפוֹת` (1.107:20);
  - *gp* and *ḫp*, both `חוֹף`;
  - *hr* and *ġr*, both `הַר`;
  - *ʿdt* `עֵדָה` / `עֵת`;
  - *mnt* "incantation" `מִנְיָן` against DULAT's "portion".
- **Small, not fixed:**
  - the verifier treats 1.114:9 *ʿn{y}t* as not Anat's first mention, so `עֲנָת` is vocalized at line 11 too (harmless);
  - the parallels table has a few duplicate rows where a line has two bullets for the same verse.

## Cross-corpus splits left for the lead

- **`נָחָשׁ`:** Etana's *ṣerru*, Ugaritic *nḥš* (reserved), and the dossier's comparison word for every culture's serpent
  (renderings §11). They are three languages, so this is probably right as it stands; confirm.
- **`אָלָה`:** Ugaritic *alt* (1.82) = `אָלָה` "curse", while the law corpus has *māmītu* `אָלָה` and the wisdom corpus
  `שְׁבוּעָה`. It is a different language, but the same Hebrew word for a near concept.
- **`שַׁרְבִיט`:** Ugaritic *ḫṭ* (1.2 III, 1.6 VI) = `שַׁרְבִיט`. That agrees with the 2026-10-23 harmonization of
  Akkadian *ḫaṭṭu* = `שַׁרְבִיט` (a cognate pair, so consistent). Noted only.
- **`גּוֹזָל` / `אֶפְרוֹחַ`, `רֶשֶׁת`, `פַּח`:** not used in these texts.
- **Names shared with other corpora:**
  - Resheph `רֶשֶׁף` and Dagan `דָּגָן`; the Hittite and Mesopotamian corpora may meet them, and the Ugaritic forms
    are in §6.7;
  - Athtart `עַתְּתַרְת` against Akkadian Ištar `אִשְׁתַּר`: by design (each language its own form).
