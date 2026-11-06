# Translator brief: the Sumerian Bilgameš poems (project 3 of the Gilgameš corpus; Round 6 run 1, 2026-11-06)

The coordinator's prompt says which lines are yours. Paths below are relative to `אפוס-גילגמש/` (the corpus folder); the folder root is `..` (`שונות/תרגומי-טקסטים-קדומים/`).

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – **whole** (it is long: read it in parts). Especially §1 (the purpose: the essence of the ancients; the Bible in the apparatus), §5.2 (the ★ rules; the "Sumerian" rules), §6 (principles; echo control §6.4; §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`; `renderings.md` §0–§8 and **§23** (fixed for this project before the first line: binding); `../העולם-התחתון/renderings.md` §11 (the GEN key terms and formulas, which §23.1 inherits).
3. `3-השירים-השומריים/project.md` (scope, labels, related texts, comparisons to watch, the ancient mind) and the earlier annotated files of this project, in full.
4. **Your base text in full** (not only your lines): `python3 -I bilgames_tools.py lines KEY FIRST LAST` (ETCSL + the ORACC lemma and morph of each line), and ETCSL's English (`../sources/ETCSL/1.8.1.x--…/translation.md`) – **after** forming your own reading of each line.
5. The netherworld brief `../העולם-התחתון/translator-brief--netherworld.md` §1–§2 (the ★ rules in practice, the entry format) – it applies here with this project's tool.

## 1. The rules (guidelines §5.2 ★, in short)
- ★ Draft **unvocalized, plene**, from the first line; vocalize only names at their first occurrence in each text, the ★ names of §23.2 always, ambiguous words and archaic forms.
- ★ The backticked line is in the skeleton already (never retype it): replace `> טרם תורגם` with your Hebrew and add the bullets.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show איוב "יד יב"`); quote it `` `…` (איוב יד:יב) ``; then run `check_bible_quotes.py` on your files.
- ★ **Reserved words** (§23.4): never / gated only beside their source word. `verify` checks them – and **grep for letter strings** (`עולם` inside `העולם`; `חווה` = Ḫuwawa unvocalized = "Eve").
- ★ **Fix every formula, refrain and repeated passage before drafting it** (§23.5): the first copy fixes, the later ones copy letter for letter (brackets follow each copy); command / execution and request / refusal chains use the same nouns and verbs.
- ★ **Grep before fixing any new Hebrew word**: `python3 -I bilgames_tools.py grep all '<regex>'` (this project), `python3 -I ../העולם-התחתון/netherworld_tools.py grep all '<regex>'` (every corpus), and `python3 -I bilgames_tools.py rel KEY FROM TO` (the near-identical Sumerian lines of GEN and this project with their Hebrew: copy where the Sumerian is the same).
- ★ **Read the transliteration first; ETCSL's English is the main source of false echoes** (its "nether world", "hero", "righteous", "holy", "created", "the land of the living" …): check every tense, negation, modal prefix and copula against the transliteration and the ORACC morph (`{prefix chain:~;suffixes;base}`). Narrative *marû* → the Hebrew participle as a default; *ḫe₂-* is not always a wish; *na-* `אַל` + future, *nu-* `לֹא`, *ga-* cohortative `אֶ…` / `נ…`.
- Don't trust a lemma; the morph is ORACC's machine analysis – parse the form yourself where a reading or a parallel depends on it.
- **The manuscript notes in the backticked line** (`(*1 ms. has instead:* …)`, `(*1 ms. adds:* …)`): translate the main line; give the variant's meaning in the **פירוק** or **הערות** (a variant that matters for a parallel goes in **הקבלה** too).
- Brackets (§6.8): `[ ]` restored (follow ETCSL; a sign or an ending restored inside a word → no bracket, only whole restored words), `…` / `[…]` lost, `( )` added for sense, `?` uncertain, `*מילה*` uncertain translation, `⟨ ⟩` omitted by the scribe. Never fill a gap silently.

## 2. The annotated entry (guidelines §7.2)
Header of each file (Hebrew): `# <title> – תרגום מוער` then paragraphs **נוסח הבסיס**, **פירוק**, **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, a paragraph on the text on its own terms, **מלים שמורות**, **שמות**; `---`; sections `## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these – put each heading right before its first entry; the skeleton has none yet); then the entries:
```markdown
### 21
`[`the ETCSL line, as in the skeleton`]`
> העברית
- **פירוק:** every word: lemma, the verbal chain (prefixes, *ḫamṭu* / *marû*, suffixes), cases; the ORACC morph where you use it.
- **תרגומים:** ETCSL: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `…` (ספר פרק:פסוק) – … (only real contacts; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms (the image, the ritual, the social world, the wordplay); the rendering decisions.
- **הערת שוליים:** (optional; a few per hundred lines) one sentence for the clean translation.
```
Never open a header paragraph with bold text other than the labels above; never write a `- **N:**` style bullet in the header.

## 3. Tools
`python3 -I bilgames_tools.py verify KEY` (your lines: 0 problems; undrafted entries are notes), `lines`, `rel`, `grep`, `excerpt` (DB); `python3 -I ../tools/sumerian_workbench.py conc '<regex>'` (ETCSL-wide concordance), `… morph '<form>'`, `… gloss '<regex>'` (ePSD2 glossary); `../tools/check_bible_quotes.py`. Do **not** run `build`, do not write `translation.rtl.md`.

## 4. What to deliver (each part)
1. Your entries, with the header paragraphs if you start a file, and the `## ` section headings.
2. Three review passes over your lines (fidelity; consistency – §23, GEN, the earlier lines; Hebrew read aloud), each a separate read-through.
3. In `3-השירים-השומריים/project.md`, in your own section `## Part N (<KEY> <lines>)`: **Progress** (lines, passes), **Open decisions** (numbered, continuing the project's numbering), **Proposals for the corpus renderings** (every word or formula you fixed that recurs or that a later text may share – the later translators follow them; for DB also **Excerpt revisions**: every MT.F line whose Hebrew you changed from the flood references, with the reason), **Key findings** (the ancient mind; the Bible), and the parallels index `### Parallels index (Tablet <KEY>)` with exactly the columns `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |` (for a text drafted in two parts, the second part appends rows to the same table).
4. `python3 -I bilgames_tools.py verify <KEY>` – no problems in your lines (for DB, the excerpt mismatches you caused are expected: list them under Excerpt revisions); `python3 -I ../tools/check_bible_quotes.py <your files> 3-השירים-השומריים/project.md` – 0 problems.
5. Do not edit `renderings.md`, the guidelines, other projects or the flood references; do not commit. **Save as you go**: write each section to disk as soon as it is drafted (a quota stop can cut a run).

Report back: lines done, the three passes, the strongest findings (the ancient mind; the Bible), the open decisions, the proposals, any formula you could not keep and why.
