# Translator brief: Ur III kingship – the long Šulgi hymns, the Death of Ur-Namma, the Sumerian King List whole (projects 12–14 of the legends-of-kings corpus; Round 9 run 2, 2026-11-15)

The coordinator's prompt says which text and which lines are yours (your PART: SH1 … UN1, KL1, RL1; renderings §14.6).
Paths below are relative to `אגדות-מלכים/` (the corpus folder); the folder root is `..` (`שונות/תרגומי-טקסטים-קדומים/`).
Run every script with `python3 -I -B`. You may be resumed part by part: keep your own reading and strings across parts.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – **whole** (it is long: read it in parts of ~150 lines; §6.7 has very long lines:
   read it in parts of ~30 lines). Especially §1 (the purpose: **the essence of the ancients**; the Bible in the
   apparatus), §5.2 (the ★ rules; the "Sumerian" rules), §6 (echo control §6.4; §6.7), §6.8 (brackets), §7.2.
2. `corpus.md` (the projects 12–14 paragraph); `renderings.md` **§14 in full** (what binds, names, formulas, key
   terms, gates, what to look for) and §0; then what §14.0 says binds your text:
   - the Šulgi hymns: `../קנון-בית-הטבלה/renderings.md` whole (it binds them), and `../קנון-בית-הטבלה/1-העשירייה/annotated-SA.rtl.md`
     (Šulgi A: at least its header and its `>` lines – the same king, school, epithets and formulas);
   - the Death of Ur-Namma: `../העולם-התחתון/renderings.md` (§1–§3 and the index of its sections), `../אפוס-גילגמש/renderings.md`
     §23 and the Death of Bilgameš (`../אפוס-גילגמש/3-השירים-השומריים/annotated-DB-*.rtl.md`: the closest text);
   - the King List and the Rulers of Lagaš: the flood references (`../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md`
     §1 and §4, and its `project.md` decisions): **their lines are already in your skeleton**, with their apparatus.
3. Your project's `project.md`, and (for a later part) the files the earlier parts drafted.
4. **Your base text in full** (not only your lines): `ur3_tools.py lines KEY FIRST LAST` (ETCSL + the ORACC lemma and
   morph of each line). ETCSL's English: `ur3_tools.py tr KEY FROM TO` – **after** forming your own reading.

## 1. The rules (guidelines §5.2 ★, in short)
- ★ Draft **unvocalized, plene**, from the first line; vocalize only names at their first occurrence in each text, the
  ★ names of §14.1 always, ambiguous words and archaic forms. (The verifier flags a line that is mostly vocalized; a
  line that is only a name at its first occurrence may be vocalized.)
- ★ The backticked line is in the skeleton already (never retype it): replace `> טרם תורגם` with your Hebrew and add the
  bullets. One Sumerian line = one Hebrew line; keep the order of images.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show "מלכים א" "ה ט"`);
  quote it `` `…` (מלכים א ה:ט) `` – always with the book's name; then run `check_bible_quotes.py` on your files.
- ★ **Reserved words** (§14.4, and in the hymns the canon's Psalm gates): never, or only beside their source word.
  `ur3_tools.py verify KEY` checks them; grep for letter strings too. A paraphrase written "because the gate forbids" is
  a gate bug: report it.
- ★ **Fix every formula, refrain and repeated passage before drafting it**: find it in the transliteration
  (`ur3_tools.py rel KEY FROM TO`, `../tools/sumerian_workbench.py conc '<regex>'`), fix the Hebrew at its first copy,
  copy it letter for letter in the later ones (brackets follow each copy), and list it in your Proposals. The King
  List is almost all formulas: fix each formula once, then copy.
- ★ **Grep before fixing any new Hebrew word**: `ur3_tools.py grep all '<regex>'` (this run),
  `python3 -I -B ../קנון-בית-הטבלה/canon_tools.py grep all '<regex>'` (the royal hymns),
  `python3 -I -B ../העולם-התחתון/netherworld_tools.py grep all '<regex>'` (every corpus), `python3 -I kings_tools.py grep all '<regex>'`
  (this corpus), `python3 -I ../tools/harmonize_survey.py heb '<regex>' --show 3`; and `ur3_tools.py rel KEY FROM TO`
  (the near-identical Sumerian lines already translated anywhere in the folder, with their Hebrew: copy where the
  Sumerian is the same). One source word = one Hebrew word through the whole text.
- ★ **Read the transliteration first; ETCSL's English is the main source of false echoes** ("holy", "righteous",
  "the nether world", "justice", "begot" …): check every tense, negation, modal prefix and copula against the
  transliteration and the ORACC morph. Narrative *marû* → the Hebrew participle as a default; *ḫe₂-* is not always a
  wish; *na-* `אַל` + future / affirmative *na-* + *ḫamṭu*, *nu-* `לֹא`, *ga-* cohortative. Self-praise "X-me-en" =
  `X אני`.
- Don't trust a lemma; the morph is ORACC's machine analysis – parse the form yourself where a reading or a parallel
  depends on it.
- **The manuscript notes in the backticked line** (`(*1 ms. has instead:* …)`, `*[note: …]*`): translate the main
  line; give the variant's meaning in the **פירוק** or **הערות**. ETCSL's single-manuscript alternative lines that are
  entries of their own (KL `A`–`D`, UN `A`, `B`) are translated as entries; their **הערות** say which manuscript has them
  and which lines they replace.
- **Gaps:** an `*(N lines missing)*` row between entries is not an entry; mention it in the next entry's **הערות** where
  it matters. A line that ETCSL gives only as `[…]` or `X […]` still gets a `>` line (`[…]`).
- Brackets (§6.8): `[ ]` restored (follow ETCSL; a sign or an ending restored inside a word → no bracket, only whole
  restored words), `…` / `[…]` lost, `( )` added for sense, `?` uncertain, `*מילה*` uncertain translation, `⟨ ⟩` omitted
  by the scribe. Never fill a gap silently.
- **Numbers (KL):** write the numbers in digits as the flood references do (`עשה 28,800 שנה.`); a damaged number keeps
  ETCSL's brackets; ETCSL's "+ X" = `+ X`.

## 2. The annotated entry (guidelines §7.2)
Header of the file (Hebrew; replace the skeleton's placeholder line): `# <Hebrew title> – תרגום מוער` then paragraphs
**נוסח הבסיס** (ETCSL <no.>, the composite, the manuscripts named in ETCSL's notes; ORACC Q-number for lemma + morph),
**פירוק**, **מספור** (ETCSL's composite numbers; segment letters A1 …; the Susa version S.A1 …; the alternative lines),
**סימנים**, **תרגומים להשוואה** (ETCSL's English), **תגי הקבלה**, a paragraph or two on the text on its own terms (its
date, its voice, its place in the school and in Ur III kingship), **מלים שמורות**, **שמות**; `---`; sections
`## <from>–<to>: <Hebrew heading>` (put each heading right before its first entry; no heading starts with bold text);
then the entries:
```markdown
### 21
`the ETCSL line, as in the skeleton`
> העברית
- **פירוק:** `form` – lemma "gloss", the verbal chain (prefixes, *ḫamṭu* / *marû*, suffixes), cases ("Hebrew"); `form` – … ("Hebrew")
- **תרגומים:** ETCSL: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `…` (מלכים א ה:ט) – … (only real contacts; say in words that a Sumerian text is not a source of the Bible but a shared motif, unless the motif reached Israel through Mesopotamian tradition; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms (the image, the ritual, the social world, the wordplay); the rendering decisions.
- **הערת שוליים:** (optional; a few per hundred lines) one sentence for the clean translation.
```
The **פירוק** segments keep the shape `` `form` – lemma … ("Hebrew") `` separated by `; ` (`lexmap` reads them). Not
every list line of the King List needs a **פירוק**: give it at a formula's first copy and wherever a line differs.

Also write `<project>/translation--intro-<KEY>.rtl.md`: `# <Hebrew title>` and a short Hebrew introduction for the
clean translation (what the text is, its date and setting, the manuscripts and the edition used: ETCSL; how to read the
brackets) – no bold-opened paragraphs. (The project's own `translation--intro.rtl.md` is the coordinator's.)

## 3. Tools
`ur3_tools.py verify KEY` (0 problems in your lines; undrafted entries are notes; for KL / RL also the excerpt check),
`lines`, `tr`, `rel`, `grep`, `excerpt KL|RL`, `lexmap KEY`; `python3 -I ../tools/sumerian_workbench.py conc '<regex>'`
(ETCSL-wide concordance), `… morph '<form>'`, `… gloss '<regex>'` (ePSD2); `../tools/check_bible_quotes.py`. Do **not**
run `build`, do not write `translation.rtl.md`.

## 4. What to deliver (each part)
1. Your entries, the file header if you start a file, and the `## ` section headings; the intro file if you start a text.
2. Three review passes over your lines (fidelity; consistency – renderings, formulas, the earlier texts; Hebrew read
   aloud), each a separate read-through.
3. `<project>/project--<PART>.md`: **Progress** (lines, passes), `### Parallels index (<PART>)` – a table with exactly
   the columns `| Line | Source | Hebrew rendering | Bible | Tag | Comment |` (Line = the label; Bible = the reference in
   Hebrew, `בראשית י:י`), **Key findings** (the ancient mind first; then the Bible), **Open decisions** (numbered),
   **Proposals for the corpus renderings** (every word or formula you fixed that recurs or that a later text may share,
   with the strings exactly as you wrote them), and – for KL / RL – **Revisions of the copied flood-reference lines**
   (label: old → new, why; the coordinator applies them to the flood references).
4. `ur3_tools.py verify <KEY>` – no problems in your lines; `python3 -I ../tools/check_bible_quotes.py <your files>
   <project>/project--<PART>.md` – 0 problems.
5. Do not edit `renderings.md`, `corpus.md`, the tools, the guidelines, other corpora or other texts' files; do not
   commit. **Save as you go**: write each section to disk as soon as it is drafted (a quota stop or a VM restart can cut
   a run; what is on disk survives). Before starting a part, look at the file: if some of your lines are drafted, check
   them and continue from the first `טרם תורגם`.

Report back (briefly – the coordinator's context is small, under ~250 words): lines done, the three passes, the
strongest findings (the ancient mind; the Bible), the open decisions, the proposals, any formula you could not keep and
why, any gate bug.
