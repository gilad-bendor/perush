# Brief for the translators of Archaic Greek (`הסיודוס/`)

You translate **one Hesiodic poem** (or the part of one the coordinator names) into Hebrew, as one of a chain of
translators who work **strictly one at a time** (guidelines §5.1: quotas apply in every session). The coordinator gives
you the text, its line range and its key cases in a short prompt; this file holds everything that is the same for every
part. The user is offline: **never ask questions, never wait for confirmation.** Decide sensibly, record each decision
(with the alternatives) in your section of the project's `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/הסיודוס/` (the coordinator gives its absolute
path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I -B`. **Do not start
sub-agents** (and if you somehow can: one at a time only).

This is the folder's **first Greek corpus**. Two dangers, opposite to each other:
- **Archaic Greece had no contact with Israel.** A Hebrew phrase that the Greek does not justify invents a link that
  cannot exist (false echo); and the famous comparisons (Pandora and Eve, the five races and Gen 6:1–4, Mekone and
  Gen 8:20–21, the just city and Lev 26) pull the translator toward biblical diction. Render the Greek; the apparatus
  compares.
- **The Septuagint is the one real lexical bridge**: the Greek words the LXX chose for the Hebrew of Genesis (κήτη for
  `תַּנִּינִם`, πλάσσω for `יָצַר`, ἐργάζομαι for `עָבַד`, φυλάσσω for `שָׁמַר`, ἱδρώς for `זֵעָה` …). Where Hesiod has the
  same Greek word, our Hebrew uses the Bible's word (a hidden echo otherwise) – the renderings fix these (§5–§7), and the
  verifier requires them.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts): §1 (the two purposes, and the global aim), §5
   (workflow and the lessons of earlier corpora, the ★ rules above all), §6 (principles; §6.4 rule 5 is the LXX layer;
   §6.7 is mostly Akkadian, but its method and its false-friend lists apply), §7 (formats).
2. `corpus.md`, then **`renderings.md` (binding: §1 the base and its marks, §2 the Hebrew conventions, §3 the names – and
   §3.2, the speaking names translated –, §4 the grammar mapping, §5 the key terms, §6 the LXX layer, §7 the reserved and
   gated words and the traps, §8 the formulas, §9 the repeated lines, §11 the changes merged so far)**, then your
   project's `project.md` (and the sections of the translators before you).
3. The format model: `../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-TH.rtl.md` (Th. 237–336 and 820–828, drafted in
   Round 4 run 1 for the fifth-day dossier: the same base, the apparatus density we want; **its Hebrew is superseded
   where this corpus's renderings differ** – Gaia `אֶרֶץ`, γείνομαι `הוֹלִיד`, γένος `גֶּזַע`, ζάθεος `מְקֻדָּשׁ`, φρένες
   `לֵבָב`: renderings §12) and the annotated files of this corpus already drafted.
4. The base text: `python3 -I -B hesiod_tools.py data <KEY> [FROM [TO]]` – each line of Evelyn-White's Greek (with its
   mark, §1 of the renderings), **every word with its treebank lemma and parse** (the AGDT annotators' analysis: a
   dictionary aid – check it), the names of the line with their fixed Hebrew, the required renderings and formulas
   that apply, and the lines of the corpus that repeat it, with the Hebrew already given.
5. **Dictionaries:** `python3 -I -B hesiod_tools.py lsj <lemma>` – LSJ (and Logeion's other dictionaries) for one lemma,
   per word (never in bulk). The Septuagint: `python3 -I -B hesiod_tools.py lxx '<regex>' [genesis …]` (the regex is
   matched on diacritic-free lower-case Greek: `'πλασ'`), and `python3 -I -B ../tools/lxx_verses.py show genesis 2:7`.

## 2. Before drafting
- Read the whole range once in the line data, and decide the section headings: one `## ` heading per episode or speech
  (a Hebrew title from its content, with the line range: `## הפער, הארץ ואֶרוֹס (116–122)`).
- `python3 -I -B hesiod_tools.py lemma '<lemma>'` and `python3 -I -B hesiod_tools.py grep '<Hebrew regex>' --all`: how a
  word was rendered so far (both poems), and where a Hebrew string is already used in every corpus;
  `python3 -I -B hesiod_tools.py lexmap '<lemma or Hebrew>'`: the Hebrew ↔ lemma map of the drafted files. **Check every
  new Hebrew word for a recurring lemma against these before you fix it** (★): one Greek lemma = one Hebrew word
  (renderings §5).
- **Repeated lines and formulas** (renderings §8–§9; `data` shows "identical" / "similar" lines and the formulas): the
  later copy copies the first copy's Hebrew, word for word and in the same order; change exactly what the Greek changes;
  note `[מקבילה: <KEY> <label>]` in the apparatus.

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** line of your range, in the base's order, write one entry:

```markdown
### 116
`@`
> אָכֵן רִאשׁוֹנָה נִהְיָה פַּעַר, וְאַחֲרָיו
- **פירוק:** `ἦ τοι` – ἦ τοι "אָכֵן" ("אכן"); `μὲν` – μέν (מבליט; "…ו־" בשורה הבאה) (–); `πρώτιστα` – πρώτιστος "ראשון שבראשונים", תואר־פועל ("ראשונה"); `Χάος` – χάος "פער, תהום פעורה" (השם המדבר: §3.2) ("פער"); `γένετʼ` – γίγνομαι אאוריסט 3 יחיד, בלי תוספת (העץ־התחבירי טועה: γενέτης) ("נהיה"); `αὐτὰρ ἔπειτα` – "אך אחר כך" ("ואחריו").
- **תרגומים:** …
- **הקבלה:** [divergence] `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) – …
- **הערות:** …
```
(An illustration of the format, not binding Hebrew beyond `renderings.md`.)

- ★ **Write the source line as `` `@` `` and run `python3 -I -B hesiod_tools.py fill <project>/annotated-<KEY>.rtl.md`**:
  the tool copies the base line exactly. Never retype the Greek.
- ★ `> ` is exactly one line of Hebrew, **unvocalized and plene (כתיב מלא) from the first draft**; vocalize only names at
  their first occurrence in the file (the verifier checks it), ambiguous words, archaic forms, and the always-vocalized
  words of renderings §7.3 (`אֵל`, `אֵלִים`, `אֵלָה`, `הֵרָה`, `אַתֵנָה`, `רֵאָה`, `אָרֵס`, `אֶרוֹס`, `אֶתֶר`, `הֵבָּה`,
  `הַהוֹרוֹת`, `כְּסִיל` …). A vocalized word must strip to the plene string you would otherwise write. A regex that strips
  niqqud must keep the maqaf. **Look at your first saved section**: if you drafted it vocalized, rewrite it now.
- **The base's marks** open the `>` line: `{חשודה}` (a line Evelyn-White brackets), `{גלנוס}` (Th. 929a–t), `{פפירוס}`
  (WD 169a–d, with `[ ]` for his restorations) – renderings §1.
- **One Greek line = one Hebrew line** (renderings §2.1): keep each word in its line as far as Hebrew allows; the
  sentence runs over the line ends as in the Greek; epithets every time, exactly as fixed.
- **פירוק:** every word: the Greek form in backticks, its lemma (unbackticked, in Greek), its meaning in Hebrew in
  quotation marks, the form (tense, mood, voice, person and number, case – decoded from the treebank's parse, **checked
  by you**: the AGDT has slips, e.g. Th. 116 γένετʼ lemmatized as γενέτης), and the Hebrew chosen **in parentheses and
  quotation marks** `("…")` – the format the `lexmap` command reads: `` `form` – lemma "meaning", form ("Hebrew") ``,
  segments separated by `; `. Name the form that decides a tense or a mood (renderings §4: the gnomic aorist, the
  iterative -σκ-, the optatives).
- **Grammar mapping** (renderings §4): no vav-consecutive; aorist → past, imperfect of a state or habit → `הָיָה` +
  participle, perfect → present state, optative → wish or potential, the infinitive for an imperative → the Hebrew
  infinitive absolute; the middle voice → reflexive only where it is reflexive.
- **Speaking names** (renderings §3.2): Earth, Sky, Sea, Night, Day, Strife, Death, Sleep … are the Hebrew noun as a name
  (no article); every other name by the table (§3.1) or the transcription convention (§2.3), vocalized at its first
  occurrence; a new name you transcribe goes into your Proposals.
- **תרגומים:** after you formed your own reading: (a) **Evelyn-White 1914** (the base edition's own English, public
  domain – not in the folder: quote it only when you are sure of its wording, else describe it); (b) **the modern
  translations you know** (West 1988, *Theogony and Works and Days*, Oxford World's Classics; Most 2006/2018, Loeb;
  Lattimore 1959; Athanassakis 1983; West's commentaries 1966 (Theogony) and 1978 (WD); Clay & Vergados 2025): **they
  are not in the folder, so never quote them verbatim or invent a wording** – give their reading in a few words with the
  scholar's name only when you are sure of it, else "the usual reading". **The Hebrew translations (Spann 1956, Shabtai
  2004, Bouzaglo 2017) are copyrighted and were not consulted**: never reproduce a Hebrew translation from memory. Record
  every disagreement and why. Note **West's text where it differs from Evelyn-White's** when you know it (a reading, an
  athetesis, a transposition), with "West" and the line – our base stays Evelyn-White's.
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: the tag, the verse in the
  repository's format, the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`**, written
  `` `…` (ספר פרק:פסוק) ``. ★ **Print every verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show
  בראשית "ו ד"`; Psalms and Proverbs use a hyphen-minus for maqaf: keep it; ketiv/qere appear as `X (Y)`: quote around
  them). Always name the book; quote whole words. **The LXX layer** (renderings §6): say which kind of contact – (a) the
  same Greek word as the LXX's (quote the LXX in Greek: `` `τὰ κήτη τὰ μεγάλα` (השבעים, בראשית א:כא) `` – the word השבעים
  first, so that `check_bible_quotes.py` does not read it as Hebrew); (b) a link only through the Hebrew; (c) a deliberate
  LXX avoidance. For every parallel, say in words that Hesiod's Greece had no contact with Israel: a shared motif, an
  inherited Near Eastern tradition (name it when it is known: the Kumarbi cycle, Enūma eliš, Atra-ḫasīs; Ugarit's Baal
  and Zaphon; this folder's corpora: `grep --all` finds their lines), or a word the LXX shares. Never force a parallel.
- **הערות:** the poem **on its own terms** (guidelines §1, §7.2): the gods and what each stands for; Hesiod's world
  (Boeotia, Ascra, the Muses of Helicon, the farmer's year, the kings who judge, the polis); the oral poet's craft
  (formula, catalogue, ring composition, the "I" of the poet); the speaking names and the wordplay (Pandora "All-Gift",
  Prometheus "Forethought", the Nereids' names, Aphrodite from ἀφρός "foam", the Cyclopes Thunderer and Lightener); what
  an ancient hearer heard. First-occurrence notes for every god and place (renderings §3).
- **הערת שוליים:** (optional) one sentence for the clean translation, only for the major cruxes and the key parallels.

**Save as you go** (guidelines §5.1): write each section's entries to the file as soon as they are drafted (not the whole
range at the end), and run `fill` and `verify <KEY>` after each one. A quota stop then loses at most one section.

## 4. The rules most often broken (read again before each section)
- Renderings §7: the reserved and gated strings, checked by `hesiod_tools.py verify` (`אֱלֹהִים`, the root ברא,
  `תַּנִּין`, `לִוְיָתָן`, `תְּהוֹם`, `תֹּהוּ`, `רָקִיעַ`, `חֹשֶׁךְ`, `שְׁאוֹל`, the root שבת, `נִיחוֹחַ`, `תְּשׁוּקָה`, `נֶחְמָד`,
  `נְפִלִים`, `גִּבּוֹר`, `מִין`, `שֹׁחַד`, `יֶפֶת`, `הֵיכָל` never; `רֵאשִׁית`, `נִהְיָה`, `יָצַר`, `עָבַד`, `מְלָאכָה`, `שָׁמַר`,
  `זֵעָה`, `לֶחֶם`, `עָרֹם`, `נָחָשׁ`, `נֶפֶשׁ`, `רוּחַ`, `טוֹב`, `צַדִּיק`, `מִשְׁפָּט`, `דּוֹר`, `מִזְבֵּחַ`, `קָדוֹשׁ`, `שְׁבִיעִי`,
  `כִּימָה`, `כְּסִיל` … only for their Greek word); and the **required** renderings (ἀρχή `רֵאשִׁית`, ἐργάζομαι `עָבַד`,
  φυλάσσω `שָׁמַר`, πλάσσω `יָצַר`, ἱδρώς `זֵעָה`, τίκτω `יָלַד`, γείνομαι `הוֹלִיד`, γένος `גֶּזַע` …). If the verifier
  blocks a word that is right, tell the coordinator in your final message; **never bend the Hebrew to pass and never edit
  the tool's lists** (an entry may carry `[היתר שער: <word> – <reason>]` / `[היתר שם: …]` / `[סטייה מן הנוסחה: …]` when the
  Greek justifies it – and the reason must be real).
- **One Hebrew word per Greek lemma** (★) – the heart words (θυμός `לֵב`, φρήν `לֵבָב`, νόος `שֵׂכֶל`), the earth words
  (γαῖα `אֶרֶץ`, χθών `אֲדָמָה`), the mortal words (θνητός `בֶּן־תְּמוּתָה`, βροτός `אֱנוֹשׁ`, ἄνθρωπος `אָדָם`), the
  counsel words (βουλή `עֵצָה`, μῆτις `תְּבוּנָה`, μήδεα `תַּחְבּוּלוֹת`, δόλος `עָרְמָה`), the good words (ἀγαθός / ἐσθλός
  `טוֹב`, καλός `יָפֶה`). If you need a new one, grep first (`lemma`, `lexmap`, `grep --all`).
- The formulas (§8) character for character; the repeated lines identical (`verify` lists every difference: justify it
  in the apparatus or fix it).
- **Biblical vocabulary only when it is the natural word, and then tagged.** Do not add what is not in the Greek;
  additions for sense go in `( )`.

## 5. The clean translation
Write `<project>/translation--intro-<KEY>.rtl.md`: `# <the poem's title in Hebrew>` and a short Hebrew introduction (what
the poem is, its date, the poet, the edition: Evelyn-White 1914 through Perseus, with the treebank; the signs: `[ ]`,
`( )`, `?`, *italics*, `{חשודה}`, `{גלנוס}`, `{פפירוס}`). Never open a paragraph with bold text (the builder reads
`**label**` lines as numbered lines). Then run `python3 -I -B hesiod_tools.py build`: it generates `translation-<KEY>.rtl.md`
and the project's `translation.rtl.md` from your intro and the annotated `## ` headings, `>` lines and `הערת שוליים`
bullets, and verifies. Never edit a generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole text
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; every negation, tense, mood and voice
  checked against the Greek (not only the treebank); the speaking names and the epithets in place.
- **(b) consistency:** formulas and repeated lines identical (`verify` lists every difference); names; `lexmap` shows no
  lemma with two Hebrew words that is not a recorded split; every new Hebrew string grepped against the other poem and
  the other corpora; `renderings.md` respected.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then `python3 -I ../tools/check_bible_quotes.py <project>/annotated-<KEY>.rtl.md <project>/translation--intro-<KEY>.rtl.md
  <project>/translation-<KEY>.rtl.md` and fix every mismatch; `python3 -I -B hesiod_tools.py verify <KEY> --strict` must
  report **no problems** (the repeated-line differences it lists must each be justified in the apparatus).

## 7. Your section in `<project>/project.md`
Insert it **above** the line `## Parallels index` (do not rewrite earlier sections): `## <KEY> <range>` with, in English
(Bible quotations in Hebrew, vocalized):
- `### Scope`; `### Sources consulted`; `### Decisions` (renderings you fixed, the rejected alternatives and the reason);
  `### Open decisions for the user`; `### Progress log` (drafting, the three passes with what each changed, the verify
  and quote checks); `### The text on its own terms` (5–15 bullets, each with its lines); `### Key parallels` (the 3–10
  strongest, in a sentence each – the full table is generated from your **הקבלה** bullets by
  `build_parallels_index.py`: a tag before each contact); `### Lines shared with other texts`; `### Proposals for the
  shared renderings` (new recurring words, formulas, names – with Hebrew and reason); `### Lessons for the guidelines`.

## 8. Limits
- Edit only your annotated file, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your
  section of `project.md`. Do not edit `renderings.md`, the other poem's files, other corpora, the guidelines, the tools
  or anything in `../sources/` (if a tool has a bug, say so in your final message; a minimal fix is allowed only if it
  blocks you, and must be reported). Do not commit (unless the coordinator's prompt says otherwise).
- If you cannot finish, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest belongs,
  build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): labels done, the main decisions, the strongest parallels and the
  strongest "ancient mind" findings, open decisions, problems.
