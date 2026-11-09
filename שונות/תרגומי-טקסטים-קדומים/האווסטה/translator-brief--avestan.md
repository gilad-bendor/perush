# Translator brief – the Old Avestan corpus (Round 7 run 2)

You translate Old Avestan into Hebrew for the ancient-texts project of the `perush` repository. Folder (your working
directory): `שונות/תרגומי-טקסטים-קדומים/` – paths below are relative to it. **Read, before your first line:**
1. `translation-guidelines.md` – binding. Above all §1 (the purpose: the essence of the ancients), §5 (workflow), the
   ★ rules of §5.2 (summarised below), §6 (principles: §6.4 echo control, §6.7 – the Vedic-and-Avestan row and the
   2026-11-02 cousin-language rule), §6.8 (notation), §7.2 (the annotated format).
2. `האווסטה/renderings.md` – binding: names (§3), key terms (§5), reserved words (§7), formulas (§8).
3. `האווסטה/corpus.md`, and the `project.md` of your project.
4. The cousin corpus: `הוודה-והאווסטה/renderings.md` §2–§5 and §11.3 (the Vīdēvdād 2 decisions), and one Avestan file
   as a model of the apparatus: `הוודה-והאווסטה/3-המבול/annotated-VD2.rtl.md` (read some 15 entries). **Do not edit any
   file in `הוודה-והאווסטה/`** (another run owns it now).

## Your task
Draft the lines of your part (the coordinator's message names the KEYs) into the skeleton files
`האווסטה/<project>/annotated-<KEY>.rtl.md`. Each entry already has its heading `### <label>`, the base line in
backticks (filled from the base: never retype it) and an empty `> ` line. Write under each:

```markdown
### 28.1a
`ahiiā. yāsā. nəmaŋhā. ustānazastō. rafəδrahiiā.`
> (the Hebrew line)
- **פירוק:** `ahiiā` – aiiām / ima- "this" (gen. sg. f.) ("שֶׁל זוֹ"); `yāsā` – yāh- "ask, beg" (pres. 1sg.) ("מְבַקֵּשׁ"); …
- **תרגומים:** (after drafting) Mills 1887: "…"; Moulton 1913: "…"; where our reading departs from them, say why.
- **הקבלה:** (only where real) [equivalent] שמות ט:כט `…` – a shared gesture of prayer (no contact).
- **הערות:** (where the line opens the ancient mind: the gods, the ritual, the images, the wordplay, the disputed sense)
```
- The **פירוק** gives every word: the form in backticks, the lemma (CAB / Bartholomae), its grammar, and the Hebrew in
  parentheses and **straight double quotes** (`("…")` – the lexmap reads exactly that). Particles too (briefly).
- After each hymn (or a coherent group of stanzas) add `## ` section headings in Hebrew where the hymn's sense turns
  (they go into the clean translation). Under the file's `# ` title, remove the placeholder line
  `<!-- טרם תורגם: … -->` only when the whole file is drafted.
- Write, for each KEY, the short Hebrew introduction `האווסטה/<project>/translation--intro-<KEY>.rtl.md`: a `## `
  title (e.g. `## יסנה 28: "אֶת זֹאת אֲנִי מְבַקֵּשׁ" – תפילת הפתיחה`), then 3–6 sentences: what the hymn is, its
  stanzas and metre, its main themes, how to read the brackets (§6.8). Plain Hebrew prose, no apparatus.
- Use `- **הערת שוליים:** …` (it becomes a footnote of the clean text) only for the few points a reader must know (a
  crux that changes the sense; a key parallel).

## The tools (`python3 -I -B האווסטה/avesta_tools.py …`)
- `data KEY [FROM [TO]]` – your line data: the base line, the names with their fixed Hebrew, the key terms of
  renderings §5 that the line's string matches (check by parsing!), the formulas, and the corpus lines that repeat it
  with the Hebrew already given (copy repeated lines byte for byte; change exactly what the Avestan changes).
- `ave FORM` – the CAB dictionary's analyses of a form (online; Bartholomae's lemma + CAB's glossary) – use it for
  **every** form you are not sure of; `avelemma LEMMA`; `aiw WORD` – Bartholomae's *Altiranisches Wörterbuch* (1904,
  OCR, local; the classic reference: forms, meanings, and Bartholomae's citations of every Gāthic passage).
- `pd KEY C.S` (e.g. `pd Y28 28.1`) – Mills 1887 (SBE 31) and Moulton 1913, public-domain translations (OCR) –
  **rank 5**: consult them only after you drafted a stanza; they are old and often outdated (Mills especially).
- `grep '<hebrew regex>'` (this corpus) / `grep '<regex>' --all` (every corpus) – before fixing any new recurring
  Hebrew word, grep the `>` lines (★ rule); `lexmap` – the Hebrew ↔ lemma map of what is drafted.
- `verify KEY` – run it after every hymn and fix every error (it checks the reserved words, names, formulas, traps,
  the base lines); `gates` prints the rules.
- The cousin corpus's Hebrew for a Vedic cognate: `python3 -I -B הוודה-והאווסטה/vedic_tools.py lexmap '<lemma>'`,
  `… grep '<hebrew>'`, `… mw <sanskrit>` (Monier-Williams), `… gra <sanskrit>` (Grassmann) – read only.
- Bible verses: `python3 -I tools/check_bible_quotes.py --show <book> "<ch> <v>"` (e.g. `--show ישעיהו "מה ז"`) –
  **print every verse before you quote it**; quote as `` `…` (ספר פרק:פסוק) `` with the book named; then run
  `python3 -I tools/check_bible_quotes.py <your files>` and fix every mismatch.
- No web search is needed; if you must, at most 10 `WebSearch` calls for the whole part (verify by fetching).

## The ★ rules (guidelines §5.2), for this text
1. **Draft unvocalized, in plene spelling, from the very first line**; vocalize only names at their first occurrence
   in each file (checked), the always-vocalized words (`אֵל` / `אֵלִים` for *daēuua*, `יִימָה`, `דָּת`), ambiguous words
   and the imperatives that could be read as past forms. A regex that strips niqqud must keep the maqaf.
2. **The base line is filled, never retyped** (`fill` exists; the skeleton is filled already).
3. **Print every Bible verse before quoting it**, even in a passing note; whole words; the book named.
4. **Reserved words** (renderings §7): the Hebrew Bible's and later Judaism's key words never in a line (`בָּרָא`,
   `יָצַר`, `קָדוֹשׁ`, `צַדִּיק`, `רָשָׁע`, `מָשִׁיחַ`, `מוֹשִׁיעַ`, `שָׂטָן`, `מַלְאָךְ`, `שְׁאוֹל`, `גֵּיהִנֹּם`,
   `תּוֹרָה`, `עוֹלָם`, `אַשְׁרֵי` …); the natural word only for its own source word (`רוּחַ` only *mainiiu*, `אוֹר` only
   *raōcah*, `טוֹב` only *vohu* / *vahišta* / *hu-* …). A paraphrase "because the gate forbids" is a gate bug: tell the
   coordinator in your report, with the line.
5. **Fix the Hebrew of every formula and repeated line before drafting it** (renderings §8; `data` lists the repeats):
   the Y 44 refrain F9 is fixed; the Uštavaitī's opening Y 43.1a (F10) you fix, then copy; the Gāthic recurrent
   phrases (*vohu manah*, *aṣ̌a vahišta*, *spəṇta mainiiu*, *ahu astuuaṇt*, *aṣ̌āt̰ hacā*, the triad *humata hūxta
   huuaršta*) have one Hebrew each.
6. **Grep the `>` lines of all earlier files before fixing any new Hebrew word** (as a string and by lemma).
7. **The rank-5 translations are the main source of false echoes**: Mills's "holy", "righteous", "saint", "Heaven",
   "Hell", "Satan", "angels", "saviour", "Archangels" are the 19th century's Christian words for *spəṇta*, *aṣ̌auuan*,
   *garō dəmāna*, *drūjō dəmāna*, *aŋra mainiiu*, *aməṣ̌a spəṇta*, *saōšiiaṇt*: never let them into the Hebrew. Read
   the Avestan, parse it, and form your own reading first.
8. **Re-check the renderings against your drafted lines before the hand-off**: list in your report every row of
   renderings §5 you changed in practice, with the reason ("Proposals").

## The text: what to watch for
- **The Gāthic stanza is a dense, allusive, syntactically free poem**; scholars (Bartholomae, Humbach, Insler, Kellens
  & Pirart, Narten, West) disagree on many lines. Translate by the most defensible reading of the forms, mark doubt
  with `?` or `*…*` (§6.8), and give the main alternatives in the הערות. Never smooth a crux away. Where a word is
  uncertain in its very meaning, say so (e.g. *gairē* Y 28.4; *ąsaš́utā* Y 48.1; *urvaēsa*).
- **The Aməṣ̌a Spəṇtas** are at once abstract qualities and persons (renderings §3.2): `הַסֵּדֶר`, `הַמַּחֲשָׁבָה
  הַטּוֹבָה`, `הַמַּלְכוּת`, `הַמְּסִירוּת`, `הַשְּׁלֵמוּת`, `הָאַלְמָוֶת`, with the article; let the grammar (address,
  speech, gift) show the person where the source does. The instrumental *aṣ̌ā*, *vohū manaŋhā* is `בַּ־` throughout.
- **The two spirits** (Y 30.3–6, 45.2), **the choice** (*var-* `בָּחַר`), **the bridge** (*cinuuat̰ pərətu* `גֶּשֶׁר
  הַבּוֹרֵר`), **the houses** (`בֵּית הַשִּׁירָה` / `בֵּית הַשֶּׁקֶר`), **the ordeal** (fire and molten metal), **the
  turning point** (*urvaēsa* `מִפְנֶה`), **making existence brilliant** (`לַעֲשׂוֹת אֶת הַקִּיּוּם מְפֹאָר`), the
  **saōšiiaṇts** (`הָעֲתִידִים לְהוֹעִיל`) – the ideas later Judaism has been compared with: keep the Hebrew in the
  source's own words (renderings §5.0, §7), and put the comparisons in the apparatus as the scholars' comparison of a
  shared motif (a culture that met Israel only centuries later, through Persian religion), said so in words.
- **The daēuuas** are `אֵלִים` (the cousin corpus's *devá* `אֵל`): the gods Zaraϑuštra rejected; a note at the first
  occurrence per file explains that the Vedic cognate means "god" and the Gāthās turn it into the false god.
- **The cow** (Y 29 – the soul of the cow laments to the gods; *gə̄uš tašan* "the cow's fashioner"): the pastoral
  world of herdsmen and cattle-raiders behind the hymns; explain it on its own terms.
- **Zaraϑuštra's own voice**: his poverty (Y 46.2 "I know why I am powerless: few cattle, few men"), his patrons, his
  daughter's marriage (Y 53): the unguarded human voice – render it plainly.
- **Repeated phrases across hymns** are many: `data` shows them; the first translation fixes them.
- **Bible parallels** worth checking (print each verse first; tag carefully; many are only shared motifs): Y 44.3–5
  (who set the sun's and stars' path, holds the earth and the sky, made light and darkness, sleep and waking) ↔ Job
  38, Isa 40:12–26, Isa 45:7 (`יוֹצֵר אוֹר וּבוֹרֵא חֹשֶׁךְ`, often read as an answer to Persian dualism – a reception
  note), Ps 104; Y 30.3–5 (the two spirits, the choice) ↔ Deut 30:15–19 (`הַחַיִּים וְהַמָּוֶת … וּבָחַרְתָּ`); Y 29
  (the cow's lament) – none; Y 28.1 / 50.8 (outstretched hands) ↔ Exod 9:29, 1 Kgs 8:22; Y 46.1 ("to what land shall
  I flee") – none needed; Y 31.8 (Mazdā "first and last") ↔ Isa 44:6 `אֲנִי רִאשׁוֹן וַאֲנִי אַחֲרוֹן` (a striking shared
  phrase in a Persian-period prophet: a note, carefully worded). Do not invent parallels; do not hide real ones.

## Report (your last message to the coordinator)
Per KEY: lines drafted; `verify` result; your **Proposals** (renderings rows you changed or added, new recurring words
with their Hebrew, with reasons); the gate problems you met (the line and the gate); the cruxes you left open; the
Bible quotes you checked; anything you could not do. Write files only; never run git.
