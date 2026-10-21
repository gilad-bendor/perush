# Translator brief: the netherworld corpus (the Descent of Ištar, Inana's Descent), 2026-10-21

The common brief for the translators of `1-ירידת-אישתר/` (Akkadian, eBL `L/1/8`) and `2-ירידת-אינאנה/` (Sumerian, ETCSL 1.4.1). Reusable for any later netherworld text (Nergal and Ereškigal, the Death of Bilgames, Gilgameš Enkidu and the Netherworld, Dumuzi's Dream). Adapted from `../קינות-על-ערים/translator-brief--laments.md` and the wisdom corpus's `translator-brief.md`. The coordinator's per-run prompt says which lines are yours.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – whole. Especially §1 (**two purposes**: the Bible comparison *and* "the soul of the ancients"), §5 (workflow and the rules learned), §6 (principles; echo control §6.4; false friends §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`, then `renderings.md` (**all of it is binding**; §2 fixes one Hebrew for the things both texts name, §3 the lines copied from Gilgameš, §4 the formulas, §6 the reserved and gated strings, §7 the traps).
3. The earlier corpora's renderings that `renderings.md` §0 names, and **the Hebrew of every earlier line**: `python3 -I netherworld_tools.py grep all '<regex>'` (every corpus of the folder). For the Akkadian, Gilgameš VII and XII are the nearest neighbours (`../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-VII.rtl.md`, `annotated-XII.rtl.md`).
4. Your project's `project.md` and the previous files of your own project, in full, before you start; and the other text of this corpus where the episode is shared (renderings §2).

## 1. Rules learned the hard way (guidelines §5.2 ★)
- ★ **Draft unvocalized, in plene spelling (כתיב מלא), from the very first line.** Vocalize only names at their first occurrence, ambiguous words, archaic forms, and the names that are always vocalized (renderings §1 ★, §7). A regex that strips niqqud must keep the maqaf: `[֑-ֽֿ-ׇ]`.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show איוב "י כא"`), never quote from memory; quote exactly as `../../../תנך-מנוקד/` has it (Psalms and Proverbs keep their `-`); then run `check_bible_quotes.py` on your file and fix every mismatch.
- ★ **Reserved words** (renderings §6): `שְׁאוֹל` never; `תַּמּוּז` never; `עֵירֹם` / `עֶרְוָה` never (neither text says "naked" – describe as the original describes); the gated words only beside their source word. **Grep for letter strings, not only words**: `לשאול` (plene "to ask") reads "to Sheol" – never write the infinitive of `שָׁאַל` plene; use `יִשָּׁאֵל` / `שָׁאַל` / `שְׁאֵלָה`.
- ★ **Fix the Hebrew of every formula and repeated passage before drafting it**, and copy the first copy letter for letter (renderings §3–§4). The gates, the gatekeeper's exchanges, Ninšubur's instructions and their execution, Enki's instructions and their execution, Ea's instructions and their execution, the *galla* list, the substitutes' scene: **command / execution and reversal passages** use the same nouns and verbs, so the fulfilment reads as the command "in the same words" and the return through the gates as the undoing of the stripping.
- ★ **A formula takes the same Hebrew across languages** (renderings §2): the Sumerian takes the Hebrew of its Akkadian equivalent (*kur* = *erṣetu* = `הָאָרֶץ`; *ĝarza* = *parṣu* = `פֻּלְחָן`; *men* = *agû* = `כֶּתֶר`; *ḫar* = *šemeru* = `צָמִיד`; *a nam-til₃* = *mê balāṭi* = `מֵי הַחַיִּים`; *al dug₄* = *erēšu* = `שָׁאַל`).
- ★ **Grep the `>` lines of all earlier files before fixing any new Hebrew word** (`netherworld_tools.py grep all`), not only the renderings tables.
- ★ **Read the transliteration first; the rank-3 translation is the main source of false echoes.** Form your reading from the source, the lemmas (eBL; ORACC lemma + morph), the dictionaries; read Foster (eBL) or ETCSL's English only afterwards and record every disagreement. Already seen: Foster's "Hurrah!" for *ellânni* (eBL lemma *elû* "come up", Ištar 136–137); eBL's lemma *ḫazīqatu* "headcloth" for *ḫalziqqu* "waterskin" (98–99); ETCSL's "wig" for *ḫi-li* "allure"; ETCSL's "kill" for *gam* "bend down"; ETCSL's "the look of death" for *i-bi₂ uš₂*. Briefs (including this one) say "look for", never "translate as".
- **Don't trust a lemma**; parse the form yourself.
- **Keep idioms literal where Hebrew has them** (the ear of attention; "bind the head" = obey; "the eye of death").

## 2. The annotated file (guidelines §7.2)
Header (Hebrew): title `# … – תרגום מוער` (+ `(חלק N: שורות X–Y)` for the Sumerian), then paragraphs **נוסח הבסיס**, **פירוק** (where the lemmas and the morphology come from), **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, a paragraph explaining the text on its own terms, **מלים שמורות**, **שמות**. Then `---`, then sections `## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these), then one entry per base-text line:

```markdown
### 85
`ištar | ana erṣeti || urid | ul īlâ`
> "אִשְׁתַּר אֶל הָאָרֶץ יָרְדָה – לֹא עָלְתָה.
- **פירוק:** … (every word: lemma, stem, tense; Sumerian: the verbal chain, ḫamṭu / marû, Emesal forms; the source of the morph)
- **תרגומים:** Foster: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `כֵּן יוֹרֵד שְׁאוֹל לֹא יַעֲלֶה` (איוב ז:ט) – … (only real contacts; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms (the image, the ritual, the theology, the wordplay); the rendering decisions.
- **הערת שוליים:** (optional) one sentence for the clean translation (a few per hundred lines).
```
- The backticked line is the base text exactly: the eBL normalization as `reading-edition.md` prints it (metrical bars included), or ETCSL's transliteration (catalogue notes and variant parentheses may be dropped). `python3 -I netherworld_tools.py lines IS|IN FROM TO` prints them with the lemmas.
- Akkadian labels: eBL's (1 … 138, 11a …); the Neo-Assyrian chapter as `NA1` … `NA11`. Sumerian labels: ETCSL's (13A, 30A …).
- **`הערות` matters as much as `הקבלה`** (guidelines §1). Not every line needs a note; the ones that open the ancient mind do.
- Not every line has a parallel; never force one. [absent] and [divergence] are findings too.

## 3. Tools
`netherworld_tools.py verify IS|IN [--strict]`, `build`, `lines`, `grep`; `../tools/check_bible_quotes.py`; `../tools/sumerian_workbench.py` (ETCSL lemmas, ORACC morph, ETCSL-wide concordance). The clean translation is **generated** – never write `translation.rtl.md` by hand.

## 4. Before you finish (each run)
1. Three review passes over your lines (fidelity; consistency with `renderings.md` and the earlier Hebrew; Hebrew read aloud), each a separate read-through; record them in `project.md` ("Progress").
2. `netherworld_tools.py verify <KEY>` clean for your lines; `check_bible_quotes.py <your file>` clean.
3. In `project.md`: the **parallels index** `### Parallels index (<KEY>)` with exactly the columns `| Line | Source | Hebrew rendering | Bible | Tag | Comment |` (Bible = the vocalized verse(s) in backticks followed by the reference); **key findings** (Bible; the ancient mind); **open decisions** (numbered); **proposals for the corpus renderings**.
4. Do not edit the corpus files, the guidelines, or any other project: the coordinator merges. Do not commit.

## 5. Round 3 (run 5, 2026-10-21): projects 3 and 4
Everything above binds. In addition:
- **Read** `renderings.md` §11 (the binding Hebrew fixed for these two texts before the first line), your project's `project.md`, and your base text **in full** (`python3 -I netherworld_tools.py lines NE|GEN <first> <last>`), not only your lines.
- **Project 3 (Nergal and Ereškigal)**: the backticked line is the eBL normalization (`**N:**`) as `reading-edition.md` prints it; MB labels are `MB.<eBL label>` (`### MB.a+12`). Rank 3: Mitto's German for MB (`**T (de):**`), Foster / Mitto's English for SB (`**T:**`). The SB repeats long stretches (the message a+4–10 = a+26–32; the taboos b+40–49 → c+55–64 → d+5–8; Ereškigal's message d+62–72 = d+78–88; the searches d+92–96 ~ d+108–112; the 7-day refrain): **fix the first copy, copy the later ones letter for letter** (brackets follow each copy). MB and SB tell the same story in different words: where the Akkadian is the same, the Hebrew is the same (grep the other version's file).
- **Project 4 (Bilgameš, Enkidu and the Netherworld)**: the backticked line is ETCSL's transliteration (catalogue notes in `*…*` may be dropped; keep variant parentheses or drop them consistently – `verify` ignores both). Lemmas and morph: `netherworld_tools.py lines GEN …` (ORACC Q000364). **For 171–303 run `netherworld_tools.py xii FROM TO` first**: copy Gilgameš XII's Hebrew wherever the Akkadian renders the Sumerian word for word; differ only where XII differs, and say so in the apparatus (`[divergence]` between the Sumerian and XII, with the XII line). The prologue (1–26) and the tree (27–49) are repeated twice (52–89, 96–133) with Emesal forms in Inana's speech: copy them.
- **Speech, gender, brackets**: as §2. Dialogue in quotation marks; each question and answer of the interrogation in its own marks (renderings §11.4).
- **What to deliver** (in addition to §4): your annotated file(s) or section, with the header paragraphs if you start a file (§2); in `project.md` – your **Progress** line (lines, three passes), **Open decisions** (numbered, continuing), **Proposals for the corpus renderings** (every new word that recurs or that the other project may share). Do not touch `renderings.md`, the other project, or anything outside your project folder; do not commit; do not run `build`.
- **Before you stop**: `python3 -I netherworld_tools.py verify NE|GEN` – no problems in your lines (entries not yet drafted are notes); `python3 -I ../tools/check_bible_quotes.py <your files> <project.md>` – 0 problems. Report: lines done, the strongest findings (Bible; the ancient mind), the open decisions, the proposals, any formula you could not keep and why.
