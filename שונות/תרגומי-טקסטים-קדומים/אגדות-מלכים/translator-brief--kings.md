# Translator brief: the legends-of-kings corpus (Enmerkar and the Lord of Aratta; the Sargon Birth Legend), 2026-10-21

A common brief for the sequential translators of `1-אנמרכר-ואדון-ארטה/` (ETCSL 1.8.2.3 / ORACC Q000369) and
`2-אגדת-הולדת-סרגון/` (King 1907). Reusable for any later Sumerian epic of the Uruk cycle (Enmerkar and Ensuḫkešdana,
Lugalbanda I–II) and any Akkadian *narû*-style royal legend. Adapted from `../בניין-המקדש/translator-brief--temple.md`.
The coordinator's per-part prompt says which lines are yours.

## Pace (the user, 2026-10-22)
Quotas apply in every session, the cloud included: translators run **one at a time** (never in parallel), each saves
every drafted section to disk at once, and on a restart continues from the first missing line (guidelines §5.1).

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` — whole. Especially §1 (**two purposes**: the Bible comparison *and* "the soul of the
   ancients"), §5 (workflow and lessons), §6 (principles; echo control §6.4; false friends §6.7), §6.8 (brackets), §7.2
   (the annotated format).
2. `corpus.md`, then `renderings.md` (**all of it is binding**; §3 the formulas, §4 the echo control, §5 the reserved
   and gated words, §6 the vocalization traps, §9 what the earlier parts fixed).
3. The inherited renderings (`renderings.md` §0): the temple, lament and creation corpora for Sumerian; the flood,
   Gilgameš and law corpora for Akkadian. Skim the most recent model for format and depth:
   `../בניין-המקדש/1-גליליות-גודאה/annotated-B3.rtl.md`.
4. The project's `project.md` (the parts so far, open decisions, proposals) and **the earlier annotated files of your
   project in full** (at least the `>` lines; `python3 -I kings_tools.py grep EA '<regex>'`).

## 1. Rules learned the hard way (put them first)
- ★ **Draft unvocalized, in plene spelling (כתיב מלא), from the very first line.** Vocalize only names at their first
  occurrence in your file, ambiguous words, and the ★ names and traps of renderings §1 and §6 (Inana `אִינַנָּה`, Utu
  `אוּתוּ`, An `אַן`, Sumer `שׁוּמֶר`, Anšan `אַנְשָׁן`, Zubi `זוּבִּי`, Aqqi `אַקִּי`, Ištar `אִשְׁתַּר`, *me* `הַ־מֶה`,
  `קֻפָּה`, every *ĝar* / *šakānu* form `שָׂם` …). Never strip niqqud with a naive regex (it deletes the maqaf): keep
  `[֑-ֽֿ-ׇ]`.
- ★ **Translate the source, not the English.** Form your reading from the transliteration, **the ORACC lemma + morph
  line in your data file** (EA) or King's transliteration and the eBL dictionary (SB), and only then read the rank-3
  translations (ETCSL's English, Mittermayer 2009's German for EA; King's English and the quoted Westenholz lines for
  SB) and record every disagreement. The English of this text manufactures Bible echoes ("single language", "change the
  speech", "holy", "temple", "tablet", "wrote"): check each word against the Sumerian (renderings §4).
- ★ **Read the transliteration before believing any brief, including the coordinator's**: the briefs say "look for",
  never "translate as" (the plan named *kupru* for the Sargon bitumen; the tablet has ESIR = *iṭṭû*).
- ★ **The verbal chain** (EA). In the **פירוק** bullet parse every finite verb: modal prefix (*ḫe₂-*, *ga-*, *u₃-*,
  *nu-*, *na-*, *nam-*, *ba-ra-*), conjugation prefix, dimensional infixes, agent, base (ḫamṭu / marû) and suffixes;
  say where the analysis comes from (ORACC morph, or **"ניתוח שלנו"**). For 134–155 this decides the Gen 11 question.
- ★ **Reserve the Hebrew of every key Bible comparison** for its real counterpart (renderings §5; checked by script):
  never a reserved word in a `>` line; name it in the **הקבלה** bullet. **Tag every comparison** ([cognate],
  [equivalent], [divergence], [absent]).
- ★ **Every formula, refrain and repeated passage gets the Hebrew fixed for it** (renderings §3, §9). This text repeats
  on a large scale: the plea (38–64) and Inana's promise (79–95); the command (108–155) and its delivery (176–207); the
  answer formula (208–217 = 526–535); the journey (160–175 = 507–514); the greeting (176–181 = 378–381 = 515–518);
  the grain (281–283 = 329–331; 329 = 356); the sceptre (340–346 = 382–388; 409–411); the riddle answers (457–461 =
  471–476); "so it was" (396, 505–506). **Before drafting a repeated line run `python3 -I kings_tools.py pars EA FROM
  TO`** and copy the earlier Hebrew; vary only where the Sumerian varies (person, mood, an added word), and say so.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show שמות "ד י"`),
  never quote from memory; quote it vocalized, in backticks, followed by the reference in the repository's format
  (`(שמות ד:י)`); then run `python3 -I ../tools/check_bible_quotes.py <your file>` and fix every mismatch. Keep the `-`
  of Psalms and Proverbs.
- **Grammar mapping:** renderings §2 (narrative marû = participle; ḫamṭu = past; *ḫe₂-* + ḫamṭu in narrative =
  `אָכֵן`; *ga-* = cohortative; *u₃-* = "when"; *na-* = "lest / do not"; Akk. *lū* + preterite = `אָכֵן` + past).
- **One line = one Hebrew line**, with the base text's label (`### 134`; `### I.6`). Keep the break, the order of
  images, the parallelism.
- **Brackets** (guidelines §6.8): a word whose root is broken in the base text is in `[ ]`; `[…]` for a lost stretch;
  `…` for an `X` or a word left untranslated; `( )` added for sense; `?` uncertain reading; `*נטוי*` uncertain
  translation; `⟨ ⟩` scribal omission. For SB, King's restorations are King's (say so where they carry weight).

## 2. The annotated file (guidelines §7.2)
Header (Hebrew): title `# אנמרכר ואדון אָרַטָּה – תרגום מוער (חלק N: <range>)` (SB: `# אגדת הולדת סרגון – תרגום
מוער`); then paragraphs **נוסח הבסיס**, **פירוק** (where lemmas and morph come from), **מספור**, **סימנים**,
**תרגומים להשוואה**, **תגי הקבלה**, one or more paragraphs that explain your part of the text on its own terms,
**מלים שמורות**, **שמות**. **Never open an intro paragraph with bold text that the builder could read as a numbered
line** (`**N**` with a number). Then `---`, then sections `## <from>–<to>: <Hebrew heading>` (the clean translation
takes its headings from these; vocalize ★ names in headings), then one entry per line:

```markdown
### 501
`kiĝ₂-gi₄-a ka-ni dugud šu nu-mu-un-da-an-gi₄-gi₄`
> השליח – פיו כבד; לא היה יכול להשיבו.
- **פירוק:** … (every word; the verbal chain; the source of the morph)
- **תרגומים:** ETCSL: "…"; Mittermayer: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `כִּי כְבַד פֶּה וּכְבַד לָשׁוֹן אָנֹכִי` (שמות ד:י) – … (only real contacts; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms.
- **הערת שוליים:** (optional) one sentence the clean translation should carry as a footnote (the major cruxes and the key biblical parallels; a few per hundred lines).
```
- The transliteration line is copied **exactly** from your data file's `ETCSL:` line (`kings_tools.py lines EA 1-30`);
  the script ignores ETCSL's `*…*` notes and variant parentheses, nothing else may differ. For SB copy King's line
  from `kings_tools.py lines SB I.1-I.32` (with his footnote numbers; the script ignores them).
- **`הערות` matters as much as `הקבלה`** (guidelines §1). Explain the text on its own terms wherever an ancient hearer
  would have heard more than the words say: Uruk and its two temples; Aratta and the trade in metals and lapis lazuli;
  the *en* (priest-king) as the goddess's lover; Enmerkar "son of Utu"; Inana's choice between two lords; the messenger
  as a profession (running, memory, formulas, safe conduct); the contest of riddles as diplomacy and as school
  entertainment; the spell of Nudimmud (what a *nam-šub* is; Enki's wisdom; the four quarters of the world); grain,
  famine and rain; Nisaba and the scribal art; the first letter; Iškur's storm; Dumuzi and Inana; the school that
  copied the text. For SB: the *ēnetu* (high priestess, who was not supposed to bear children), the exposed child,
  the water-drawer and the gardener (Ištar and the gardeners: Gilgameš VI), the king's autobiography (*narû*), the
  mountains and the Sealand, the challenge to later kings. Not every line needs a note; the ones that open the ancient
  mind do. Explain even where there is no biblical parallel. Never force a parallel; **[absent]** and **[divergence]**
  are findings too.

## 3. Tools
- `python3 -I kings_tools.py data EA FROM TO <scratchpad>/data.md` — your line data (ETCSL, ORACC lemma + morph, ETCSL
  and Mittermayer at the line; Mittermayer's OCR is poor: check the PDF page,
  `../sources/Mittermayer-2009--…/Mittermayer_2009_Enmerkara_und_der_Herr_von_Arata.pdf`, before you rely on a reading).
- `python3 -I kings_tools.py verify EA|SB` (coverage, transliteration = base, one `>` per entry, reserved/gated
  strings, name traps, formulas, identical lines); `grep EA|SB|all '<regex>'`; `lines`; `pars`.
- `python3 -I ../tools/sumerian_workbench.py morph '<form>' | conc '<regex>' | gloss '<regex>'` (ETCSL-wide
  concordance: the formulas recur in Lugalbanda and Enmerkar and Ensuḫkešdana – look them up before fixing a line).
- eBL dictionary per word (SB): `curl -sS 'https://www.ebl.lmu.de/api/words/<lemma>%20I'` (never bulk-extract).
- The clean translation is **generated** by the coordinator (`kings_tools.py build KEY`). Never write
  `translation.rtl.md` by hand.

## 4. Before you finish (each part)
1. Three review passes over your lines (guidelines §5.6: fidelity; consistency with `renderings.md` and the earlier
   Hebrew; Hebrew read aloud), each a separate read-through; record them in `project.md` ("Progress").
2. `python3 -I kings_tools.py verify KEY` clean for your lines (notes about not-yet-drafted files are fine);
   `python3 -I ../tools/check_bible_quotes.py <your annotated file>` clean.
3. In `project.md`, under your part's heading: the **parallels index** `### Parallels index (<KEY>)` (KEY = EA1, EA2,
   EA3, EA4, SB) as a table with exactly the columns `| Line | Source | Hebrew rendering | Bible | Tag | Comment |`
   (the header row starts with `| Line`; Bible = the vocalized verse(s) in backticks followed by the reference); your
   **key findings** (Bible; and the ancient mind) in a few sentences; your **open decisions** (numbered); and
   **Proposals for the corpus renderings** (new terms or formulas a later part will need, with the Hebrew strings
   exactly as you used them).
4. Add your text-specific terms to the project's `renderings.md` (table: Source | Hebrew | Tag | Notes | Lines).
5. Do **not** edit the corpus files (`corpus.md`, `renderings.md`, `parallels-index.md`, the tools), the guidelines,
   or any other project: the coordinator merges. Do not commit. Leave no background job running.
