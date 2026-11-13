# Translator brief: the Old Babylonian school canon (Round 8 run 2, 2026-11-13)

The coordinator's prompt says which text and which lines are yours. Paths below are relative to `קנון-בית-הטבלה/` (the
corpus folder); the folder root is `..` (`שונות/תרגומי-טקסטים-קדומים/`). Run every script with `python3 -I -B`.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – **whole** (it is long: read it in parts of ~190 lines). Especially §1 (the purpose:
   the essence of the ancients; the Bible in the apparatus), §5.2 (the ★ rules; the "Sumerian" rules), §6 (echo control
   §6.4; §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`; `renderings.md` (binding: names, key terms, formulas, gates; and §5, the proposals of the translators
   before you); the Sumerian renderings it points to – at least `../סיפורי-הבריאה-המסופוטמיים/renderings.md` §6–§8 and
   `../קינות-על-ערים/renderings.md` (skim for your text's words).
3. Your project's `project.md`, and the annotated files of this corpus already drafted (at least their header and the
   lines your text shares with them – `rel` shows them).
4. **Your base text in full** (not only your lines): `canon_tools.py lines KEY FIRST LAST` (ETCSL + the ORACC lemma and
   morph of each line). ETCSL's English: `canon_tools.py tr KEY FROM TO` – **after** forming your own reading of the lines.

## 1. The rules (guidelines §5.2 ★, in short)
- ★ Draft **unvocalized, plene**, from the first line; vocalize only names at their first occurrence in each text, the
  ★ names of `renderings.md` §1 always, ambiguous words and archaic forms. (The verifier flags a line that is mostly
  vocalized.)
- ★ The backticked line is in the skeleton already (never retype it): replace `> טרם תורגם` with your Hebrew and add the
  bullets. One Sumerian line = one Hebrew line; keep the order of images.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show תהלים "כד ז"`);
  quote it `` `…` (תהלים כד:ז) `` – always with the book's name; then run `check_bible_quotes.py` on your files.
- ★ **Reserved words** (`renderings.md` §4): never, or only beside their source word. `canon_tools.py verify KEY` checks
  them; grep for letter strings too. These are hymns: the Psalms' vocabulary (`הלל`, `מזמור`, `צדק`, `חסד`, `ישועה`,
  `משיח` …) is reserved so that the apparatus, not the Hebrew, shows where the hymns meet the Psalms. A paraphrase written
  "because the gate forbids" is a gate bug: report it.
- ★ **Fix every formula, refrain and repeated passage before drafting it**: find it in the transliteration
  (`canon_tools.py rel`, `../tools/sumerian_workbench.py conc '<regex>'`), fix the Hebrew at its first copy, copy it
  letter for letter in the later ones (brackets follow each copy), and list it in your Proposals.
- ★ **Grep before fixing any new Hebrew word**: `canon_tools.py grep all '<regex>'` (this corpus),
  `python3 -I -B ../העולם-התחתון/netherworld_tools.py grep all '<regex>'` (every corpus), `canon_tools.py rel KEY FROM TO`
  (the near-identical Sumerian lines already translated anywhere in the folder, with their Hebrew: copy where the
  Sumerian is the same). One source word = one Hebrew word through the whole text.
- ★ **Read the transliteration first; ETCSL's English is the main source of false echoes** ("holy", "righteous",
  "created", "the nether world", "shepherd of the people" + a Psalm …): check every tense, negation, modal prefix and
  copula against the transliteration and the ORACC morph (`{prefix chain:~;suffixes;base}`). Narrative *marû* → the
  Hebrew participle as a default; *ḫe₂-* is not always a wish; *na-* `אַל` + future, *nu-* `לֹא`, *ga-* cohortative.
  Self-praise "X-me-en" = `X אני` (the royal hymns: Šulgi's "I am …").
- Don't trust a lemma; the morph is ORACC's machine analysis – parse the form yourself where a reading or a parallel
  depends on it.
- **The manuscript notes in the backticked line** (`(*1 ms. has instead:* …)`): translate the main line; give the
  variant's meaning in the **פירוק** or **הערות** (in **הקבלה** too if it matters for a parallel). ETCSL's catalogue notes
  ("Cited in OB catalogue …") are not text: mention them once in the header (they show the Decad's order).
- Brackets (§6.8): `[ ]` restored (follow ETCSL; a sign or an ending restored inside a word → no bracket, only whole
  restored words), `…` / `[…]` lost, `( )` added for sense, `?` uncertain, `*מילה*` uncertain translation, `⟨ ⟩` omitted
  by the scribe. Never fill a gap silently.

## 2. The annotated entry (guidelines §7.2)
Header of the file (Hebrew; replace the skeleton's placeholder line): `# <Hebrew title> – תרגום מוער` then paragraphs
**נוסח הבסיס**, **פירוק**, **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, a paragraph on the text on its own
terms (its place in the school's Decad / Tetrad, its date, its voice), **מלים שמורות**, **שמות**; `---`; sections
`## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these: put each heading right before
its first entry); then the entries:
```markdown
### 21
`the ETCSL line, as in the skeleton`
> העברית
- **פירוק:** `form` – lemma "gloss", the verbal chain (prefixes, *ḫamṭu* / *marû*, suffixes), cases ("Hebrew"); `form` – … ("Hebrew")
- **תרגומים:** ETCSL: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `…` (תהלים כד:ז) – … (only real contacts; a culture that met Israel's: say if it is a source or a shared motif; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms (the image, the ritual, the social world, the wordplay); the rendering decisions.
- **הערת שוליים:** (optional; a few per hundred lines) one sentence for the clean translation.
```
The **פירוק** segments keep the shape `` `form` – lemma … ("Hebrew") `` separated by `; ` (the `lexmap` command reads
them: a lemma rendered two ways is listed). Never open a header paragraph with bold text other than the labels above.

Also write `<project>/translation--intro-<KEY>.rtl.md`: `# <Hebrew title>` and a short Hebrew introduction for the clean
translation (what the text is, its date and setting, its place in the curriculum, the manuscripts and the edition used:
ETCSL, how to read the brackets) – no bold-opened paragraphs.

## 3. Tools
`canon_tools.py verify KEY` (0 problems in your lines; undrafted entries are notes), `lines`, `tr`, `rel`, `grep`,
`lexmap KEY`; `python3 -I ../tools/sumerian_workbench.py conc '<regex>'` (ETCSL-wide concordance), `… morph '<form>'`,
`… gloss '<regex>'` (ePSD2 glossary); `../tools/check_bible_quotes.py`. Do **not** run `build`, do not write
`translation.rtl.md`.

## 4. What to deliver (each part)
1. Your entries, the file header if you start a file, and the `## ` section headings; the intro file if you start a text.
2. Three review passes over your lines (fidelity; consistency – renderings, formulas, the earlier texts; Hebrew read
   aloud), each a separate read-through.
3. In your project's `project.md`, in your own section `## Part N (<KEY> <lines>)`: **Progress** (lines, passes),
   **Open decisions** (numbered, continuing the project's numbering), **Proposals for the corpus renderings** (every word
   or formula you fixed that recurs or that a later text may share – the later translators follow them), **Key
   findings** (the ancient mind; the Bible). Put your section **above** the heading `## Parallels index` (everything
   below it is generated by `build_parallels_index.py` from your **הקבלה** bullets: write no table by hand).
4. `canon_tools.py verify <KEY>` – no problems; `python3 -I ../tools/check_bible_quotes.py <your files> <project>/project.md` – 0 problems.
5. Do not edit `renderings.md`, the guidelines, other corpora or other texts' files; do not commit. **Save as you go**:
   write each section to disk as soon as it is drafted (a quota stop can cut a run).

Report back (briefly – the coordinator's context is small): lines done, the three passes, the strongest findings (the
ancient mind; the Bible), the open decisions, the proposals, any formula you could not keep and why.
