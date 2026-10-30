# Round 5, run 1 – Vedic Genesis: report

Session `session_01UnH1L1KqKEFubysYkxRe6J` (title `Round5/Run1: Vedic Genesis`), branch `translation-round-5-run-1`,
2026-10-30, 17:03–21:20 UTC, inside quota range A (one agent at a time throughout).

## Done
**The whole selection of the plan row, 20 texts, 1,312 lines**, in the new corpus **`הוודה-והאווסטה/`** (the folder's first
Sanskrit and Avestan texts). Each text has an annotated file (`annotated-<KEY>.rtl.md`: line, פירוק of every word, rank-3
comparison, הקבלה with tags, הערות), an intro, a generated clean translation, and its section in the project's `project.md`.

| Project | Texts (KEY: lines) |
|---|---|
| `1-מזמורי-הראשית/` | RV 10.129 (28), 10.121 (40), 10.72 (36), 10.190 (12), 10.90 (64) |
| `2-אינדרה-והנחש/` | RV 1.32 (60; the fifth-day dossier's 24 pādas aligned by script) |
| `3-המבול/` | ŚB 1.8.1.1–10 (20), MBh 3.185 (116), Vīdēvdād 2 (43) |
| `4-העקדה/` | Aitareya Brāhmaṇa 7.13–18 (250), ŚB 1.2.3.6–9 (8), Kaṭha Upaniṣad adhyāya 1 = vallīs 1–3 (143) |
| `5-יאמה-והמתים/` | RV 10.10 (56), 10.14 (64), 10.15 (56), 10.16 (56), 10.17 (56), 10.18 (56) |
| `6-המהמר-והצפרדעים/` | RV 10.34 (56), 7.103 (40) |

Also: the corpus files (`corpus.md`, `renderings.md` with §11.1–§11.8, `translator-brief--vedic.md`, `parallels-index.md`
with key findings and 511 rows); `vedic_tools.py` (a converter from VedaWeb TEI / TITUS / GRETIL / CAB into line data,
plus `data`, `tr`, `fill`, `mw`, `gra`, `ave`, `avelemma`, `lemma`, `lexmap`, `verify`, `build`, `grep`, `gates`,
`selftest`) and `build_parallels_index.py`; six print stubs (`הדפסה/הוודה-והאווסטה/`); the fifth-day dossier's RV 1.32
revised (5a, 5d) and noted in its `project.md`; sources (READMEs for TITUS, GRETIL, CAB, csl-orig, Jamison, the PD
translations; the committed VedaWeb Zurich TSVs and the Kaṭha TEI); shared files (STATUS, the plan row, guidelines §5.2 and
§6.7, history, sources-registry §4.4w, tools.md, domains.txt, `.gitignore`, 52 fetch recipes and manifest items).

**Process:** the coordinator set up the language (sources, converter, renderings with gates tested on samples, brief), then
four translator sub-agents, strictly one at a time (translators 1 and 3 resumed for a second part, translator 4 for the
gambler and frogs), each with its own three review passes; then one cross-text consistency reviewer (11 changes, §11.8).

## Verification
- `python3 -I -B הוודה-והאווסטה/vedic_tools.py verify --strict` (all 20 KEYs): **0 problems**; 1 repeated-line difference
  listed (RV 10.10.13d / 14b `תחבק` / `יחבק`: the speaker changes, justified in the apparatus). It also checks RV 1.32
  against the dossier: identical.
- `vedic_tools.py selftest`: 12 lines, 0 failures.
- `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems; `ugarit_tools.py verify --strict`:
  0 problems.
- `tools/check_bible_quotes.py` over every `.md` file of the folder (outside `sources/`): **0 problems**.
- `build_parallels_index.py`: 511 rows. `tools/sources_sync.py status`: the new items present (the 19 missing items listed
  are older sources this cloud checkout never restored: CUC text, El-Hawary TSVs …).

## Key findings
**For the Bible** (India and Iran never met Israel: every parallel is a shared motif, said so in every note):
- **Gen 1:1–2 ↔ RV 10.129:** the same elements before the world (darkness hidden by darkness, an undistinguished surge, a
  One "breathing without wind"), but the world's "emission" (*visŕ̥ṣṭi*) has no subject, the gods come after it (as in
  Enūma eliš and Hesiod), and the hymn ends "he knows – or perhaps he does not know", which has no biblical counterpart.
- **Gen 1:26–27, 2:7, 2:21–22 ↔ RV 10.90:** the world made from a sacrificed Man; the wind from his breath (Gen 2:7
  reversed); Virāj born of him and he of her (against Gen 2:22); one body grounding the four classes, where one origin
  grounds equality in Mal 2:10 and m. Sanh. 4:5. Three ways: an enemy's body (Tiāmat), a sacrifice (Puruṣa), speech (Gen 1).
- **Gen 1:21 ↔ RV 1.32:** the serpent of the waters slain and the order born after the victory (the order of Ps 74:13–16);
  the handless, footless serpent (Gen 3:14, but by nature, not a curse); the god's fear and flight after his victory.
- **Gen 6–9, three ways with the Mesopotamian corpus:** "Manu alone remained" (Gen 7:23 `וַיִּשָּׁאֶר אַךְ נֹחַ`); seed in the
  saving structure in all four traditions (Gen 7:3, MBh's "all the seeds", Vd 2's *taoxman*, Gilg. XI); the northern
  mountain / Naubandhana "Ship-Binding" (Gen 8:4, Nimuš); Yima's *vara* with a door and a self-shining window (Gen 6:16);
  the sacrifice after the flood that feeds no god but produces a woman, "the Blessing", mother of mankind (Gen 8:20–9:1);
  the Iranian catastrophe is the winter whose continuation Gen 8:22 promises; overpopulation answered by widening the earth
  (Vd 2) against plague and flood (Atra-ḫasīs).
- **Gen 22 ↔ AB 7.13–18, ŚB 1.2.3, KU 1:** the father binds his son and raises the blade – for a hundred cows each time;
  no voice from heaven: the boy frees himself by prayer, verse by verse; the substitute is a theory (the *médha* passes from
  man to animals and grain) and, in AB, a *higher* victim (a Brahmin for a prince); a vow of a son (Judg 11); a father's
  word that cannot be taken back (KU: "To Death I give you!"); Death offers long life and riches to buy silence (1 Kgs 3).
- **Gen 3:19, 4–5 ↔ RV 10.10, 10.14–18:** the first humans as twins, and the sister's plea refused – "they call it evil"
  when no one else exists to say so; the first to die opens a road and becomes king of the dead; the dead go up to light
  (against Gilg. VII and Ps 49:20); burned and unburned alike in heaven (against Bilgameš and the Netherworld 302–303, and
  1 Sam 31:12 / Amos 2:1); "cover him as a mother covers her son with her hem" (Gen 3:19 as mercy, not punishment).

**For the ancient mind:** creation as birth and differentiation (the "sign", the dividing cord); the riddle-hymn whose
answer (Prajāpati) is a later addition; cremation as "cooking"; the funeral that also separates the living from the dead;
the Brāhmaṇa's world of equivalences (the rice cake *is* the animal; the story recited at the king's consecration earns
the teller a thousand cows, where the boy was sold for three hundred); the fish's "law of the fishes" and a rescue as a
contract between two weak creatures; Yima as king, not prophet, and the *vara* as a selective golden-age garden; the
oldest first-person confession of an addict (10.34); the frogs as a natural history of the monsoon inside a ritual joke
(7.103).

## Decisions taken (minor, by the coordinator under the user's standing rule)
- The corpus's name, projects and line units (renderings §1); the base texts (TITUS for the ŚB with Weber's accents and
  for the AB – the only e-text; the Kaṭha's "adhyāya 1" = vallīs 1–3, all translated).
- The reserved and gated words (renderings §7; `vedic_tools.py` RESERVED / TRAPS), with nine gate fixes during the run.
- Accepted the first translator's overrulings: *dhātár* `הַמַּעֲמִיד` (not `הַמְּסַדֵּר`, which collides with *r̥tá*
  `סֵדֶר`) and *yathāpūrvám* "one after another" by the RV dictionaries (the plan's "as before" kept in the apparatus).
- *loká* `עוֹלָם` (*rájas* keeps `מֶרְחָב`); *śárīra* `גְּוִיָּה`, *tanū́* `גוף` (RV 1.32.10b changed); *svadhā́*
  transliterated in the funeral hymns; *vratá* `תקנה` (a god's) / `נדר` (a person's); RV 10.34.11d keeps `אַגְנִי`.
- The dossier's RV 1.32 revised in two pādas (5a *vyàṃsa* `פרוש־הכתפיים`, 5d `לארץ`), kept identical by `verify`.
- `sources/.gitignore` was edited **at the start** of the run, not at the end (the cloud's Stop hook asked to commit the
  untracked raw sources; ignoring them was the safe answer): a deviation from "shared files once, at the end".

## Questions for the user
1. **Biblical words for Vedic ideas:** AB's *niṣ-√krī* "buy oneself out" = `פָּדָה` and *jyaiṣṭhya* = `בכורה` (tagged
   [equivalent] with Ex 13:13, 34:20): keep them (the link visible) or use neutral Hebrew?
2. **Av. *spəṇta*** (Ahura Mazdā's "most bounteous spirit") = `נדיב`, avoiding `הרוח הקדושה` (Ps 51:13): keep, or the
   traditional "holy"?
3. **RV 10.190.3 *yathāpūrvám*:** "one after another" (the dictionaries; adopted) or "as before" (the later cyclic reading)?
   It decides whether the hymn already has cyclic creation.
4. **Readings:** AB 7.13.1a *rājāputra* – "a king without a son" (adopted) or Keith's "a king's son"; ŚB 1.2.3.9 *uṣṭra* –
   camel (adopted) or buffalo; KU 2.20b – "through the grace of the Arranger" (Hume; adopted) or Śaṅkara's "through the calm
   of the senses".
5. **RV 10.10.14d** `הסכמה טובה מאוד` – literal, but it sounds like Gen 1:31 (the note says the link is Hebrew-only): keep
   or soften?
6. **Av. *dātar* `עושה` vs Skt *dhātár* `הַמַּעֲמִיד`:** the cognate rule (as *aša* = *r̥tá* `סֵדֶר`) would give `מעמיד`
   to the Avestan too; formula F4 kept `עושה`.

## Problems and skipped items
- **Nothing skipped**; no quota stop (every gate said GO; the 5-hour status stayed `allowed`).
- The Kaṭha's GRETIL base lacks verse 2.15 (noted at 2.14b). TITUS's ŚB 1.8.1.4a reads *kaṣá* where Weber / Eggeling read
  *jhaṣá* (translated as *jhaṣá*, noted).
- Translators quoted Griffith, Geldner, Keith and Hume from memory and had to correct the wordings (a lesson in §5.2).
- `ave` printed truncated JSON at first (fixed); several licences and name regexes needed widening (all fixed and listed in
  renderings §11).

## Cross-corpus splits left for the lead
- *kā́ma* `חֵשֶׁק` = Hesiod's ἔρος (aligned on purpose; not a split).
- *amŕ̥ta* `אלמוות` (plene, as Hesiod).
- `מֶרְחָב`: *rájas* here, πέλαγος in Hesiod (cross-language, allowed; noted).
- `נָחָשׁ` for *áhi* / Av. *aži* / *sarpá*, the dossier's comparison word for every culture's serpent (consistent).
- `נדיב` is Av. *spəṇta* and Skt *suvidátra*; `לשד` is *páyas* and (in `לשד הזבח`) *médha*; `עושה` is Av. *dātar* and
  √*kr̥*: recorded splits inside the corpus.
- The binding texts compare with the Hittite substitution rituals (Puliša) only in the apparatus; no Hebrew was aligned.
