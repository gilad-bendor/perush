# Brief for the translators of Ugaritic (`מיתוסים-אוגריתיים/`)

You translate **one Ugaritic tablet** (or the part of one the coordinator names) into Hebrew, as one of a chain of
translators who work **strictly one at a time** (guidelines §5.1: quotas apply in every session). The coordinator gives
you the tablet, its line range and its key cases in a short prompt; this file holds everything that is the same for
every tablet. The user is offline: **never ask questions, never wait for confirmation.** Decide sensibly, record each
decision (with the alternatives) in your section of the project's `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/מיתוסים-אוגריתיים/` (the coordinator gives its
absolute path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I -B`.
**Do not start sub-agents** (and if you somehow can: one at a time only).

This is the folder's **first non-Mesopotamian language**. Ugaritic is the closest language to Hebrew it has translated:
almost every word has a Hebrew cognate, so **echo control is the heart of the work** (guidelines §6.4; `renderings.md`
introduction).

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts): §1 (the two purposes, and the global aim), §5
   (workflow and the lessons of earlier corpora, the ★ rules above all), §6 (principles, echo control; §6.7 is mostly
   Akkadian, but its method and its false-friend lists apply), §7 (formats).
2. `corpus.md`, then **`renderings.md` (binding: §1 the names, §2 the transliteration convention, §3 the grammar mapping,
   §4 the key terms with their tags, §5 the reserved / gated words, the traps and the false friends, §6 the formulas, §7
   the fixed lines, §10 the changes merged so far)**, then your project's `project.md` (and the sections of the
   translators before you).
3. The format model: the first 100 lines of `../כשפים-ולחשים/1-מקלו/annotated-I.rtl.md` (header, apparatus density), and
   the annotated files of the Ugaritic tablets already drafted (`1-מחזור-בעל/annotated-*.rtl.md`).
4. The base text: `python3 -I -B ugarit_tools.py data <KEY> [FROM [TO]]` – each KTU line as CUC gives it (KTU³'s readings,
   with `[ ]` restored, `⸢ ⸣` damaged, `⟨ ⟩` omitted by the scribe, `{ }` to delete, `x` a lost letter, `[…]` a lost
   stretch), **CUC's machine word parses** (DULAT lemma, POS, gloss; a human-reviewed parse for KTU 1.3 and 1.5 I–II),
   and every line of the corpus that repeats it, with the Hebrew already given. `python3 -I -B ugarit_tools.py dulat
   '<regex>'` gives DULAT's headword, page and short sense.

## 2. Before drafting
- `python3 -I -B ugarit_tools.py pars <KEY>`: every line of your tablet that repeats (identically or nearly) a line
  elsewhere in the corpus, or that `renderings.md` §7 fixes, **with the Hebrew already given**. That Hebrew binds where
  the Ugaritic is identical; change exactly what the Ugaritic changes; note `[מקבילה: <KEY> <label>]` in the apparatus.
  Ugaritic poetry repeats whole passages (commands and their execution, messages delivered word for word, journeys,
  feasts): **the execution copies the command's Hebrew, word for word and in the same order** (guidelines §5.2).
- `python3 -I -B ugarit_tools.py lex '<Ugaritic regex>'`: how a word was rendered so far in this corpus;
  `python3 -I -B ../קולות-היום-יום/kol_tools.py lookup '<regex>'` and `python3 -I -B ugarit_tools.py grep '<Hebrew regex>'
  --all`: where a Hebrew string is already used in every corpus. **Check every new Hebrew word for a recurring lemma
  against these before you fix it** (★).
- Read the whole tablet (or your range) once in the line data, and decide the section headings: one `## ` heading per
  scene or speech unit (a Hebrew title from its content, with the line range).

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** CUC line of your range, in CUC's order (columns I–VIII, the line numbers as CUC gives them, lines that are
only `[…]` included), write one entry:

```markdown
### III:41
`@`
> מָחַצְתִּי אֶת הַפֶּתֶן הָעֲקַלָּתוֹן,
- **פירוק:** `mḫšt` – *mḫš* (= *mḫṣ*, `מחץ`) G סופית 1 יחיד ("מחצתי"); `bṯn` – *bṯn* `בתֿן` ~ `פֶּתֶן` "נחש, פתן"; `ʿqltn` – *ʿqltn* ~ `עֲקַלָּתוֹן` "המתפתל".
- **תרגומים:** Cassuto (V AB D 38): `הִכֵּיתִי נָחָשׁ עֲקַלָּתוֹן`; …
- **הקבלה:** [cognate] `נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) – …
- **הערות:** …
```
(An illustration of the format, not binding Hebrew beyond `renderings.md`.)

- ★ **Write the source line as `` `@` `` and run `python3 -I -B ugarit_tools.py fill <project>/annotated-<KEY>.rtl.md`**:
  the tool copies CUC's line exactly. Never retype it.
- ★ `> ` is exactly one line of Hebrew, **unvocalized and plene (כתיב מלא) from the first draft**; vocalize only names at
  their first occurrence in the file, ambiguous words, archaic forms, and the always-vocalized words of `renderings.md`
  §5.3 (the verifier checks them). A vocalized word must strip to the plene string you would otherwise write
  (`אֲרוּבָּה`, not `אֲרֻבָּה`; `קוֹדֶשׁ`, not `קֹדֶשׁ`). A regex that strips niqqud must keep the maqaf.
- **One Ugaritic line = one Hebrew line** (guidelines §6.1): Ugaritic lines often break inside a word or a phrase (KTU
  1.4 VII 25–26 *ḥ | ln*): keep the break, put the word in the line where it begins or ends as the Hebrew allows, and say
  so in the הערות. Keep the parallelism (Ugaritic verse is bicola and tricola, often across two lines): the Hebrew
  should let the reader see the parallel members.
- **פירוק:** every word: the Latin form, its lemma (DULAT's), the Hebrew cognate in Hebrew letters where there is one
  (`renderings.md` §2: `תֿ` *ṯ*, `חֿ` *ḫ*, `דֿ` *ḏ*, `עֿ` *ġ*, `טֿ` *ẓ*), the stem (G/D/N/Š/Gt/tD/Št/L), the conjugation
  (suffix / prefix / imperative / infinitive / participle), person, gender, number; for nouns state and case where the
  aleph or the context shows it. **CUC's parse is a machine parse that often lists every possible POS: choose one and
  say why; say so when you depart from it** (and from DULAT's lemma). The particle *l* has four values, *k* three, *d*
  two: decide each (`renderings.md` §3). The vocalization – and so the tense – is our reconstruction: say so when it
  decides the rendering.
- **Grammar mapping** (`renderings.md` §3): narrative prefix forms and suffix forms → Hebrew past; **no vav-consecutive**
  (`וְנָשָׂא`, never `וַיִּשָּׂא`); speech by context; volitive → jussive; Š → hifʿil; Št → hištafʿel; dual → Hebrew dual or
  `שְׁנֵי` / `שְׁתֵּי`.
- **Brackets** follow CUC (KTU³): a word is in `[ ]` when its root, or most of it, is restored; `[…]` for a lost stretch;
  `⸢ ⸣` letters are read but damaged: mark a word `?` only if its reading is doubtful because of them. **Never fill a gap
  silently**: a restoration that is not KTU³'s (e.g. from a parallel passage – the usual source of Ugaritic restorations)
  goes in `[ ]` with the note "restored after <KEY> <label>". A line that is only `[…]` gets `> […]`.
- **תרגומים:** after you formed your own reading: (a) **Cassuto 1951** where he has the passage (`../sources/
  Ben-Yehuda--Cassuto-1951--HaEla-Anat/cassuto-1951--ha-ela-anat.txt`: grep his Hebrew-letter transcription; his line
  numbers are Virolleaud's, so align by content; quote him briefly – rank 5–6, a register and history check); (b) **the
  modern translations you know** (Smith & Pitard, *The Ugaritic Baal Cycle* I–II; Pardee in *COS* I; Wyatt, *Religious
  Texts from Ugarit*; Smith in *Ugaritic Narrative Poetry*; del Olmo Lete; Coogan & Smith): **they are not in the folder,
  so never quote them verbatim or invent a wording** – give their reading in a few words with the scholar's name only
  when you are sure of it (e.g. "Smith and Pardee read *l* as asseverative"), else "the usual reading". Record every
  disagreement and why (★: the rank-3 translation is the main source of false echoes – the "kid in milk" of KTU 1.23 is
  the famous Ugaritic case; check every negation, stem and *l* against the text).
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: the tag, the verse in the
  repository's format, the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`**, written
  `` `…` (ספר פרק:פסוק) ``. ★ **Print every verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show
  ישעיהו "כז א"`; Psalms and Proverbs use a hyphen-minus for maqaf: keep it; Exodus 20 is numbered as in the repository:
  `כַּבֵּד אֶת אָבִיךָ` is שמות כ:יא). Always name the book; quote whole words. **The verses to keep in view:** Gen 1:2,
  1:6–10, **1:20–23**, 1:26, 2:1–3, 2:7, 2:10, 6:1–4, **7:11, 8:2**, 9:20–27, 10, 14:18–22, 49:25; Ex 15; Lev 19:27–28,
  21:5; Deut 14:1, 32:8–9, 33:26; Isa 27:1, 51:9–10; Ps 29, 48:3, 68, 74:13–14, 82, 89:10–11, 93, 104; Job 7:12, 26:12–13,
  38:8–11, 40:25–41:26; Hab 3. Never force one: many Ugaritic lines have none, and that is fine. **A cognate is not a
  parallel** by itself: tag [cognate] only where the Hebrew word is the same word and the passage shares something;
  a shared word in a different context is a note, not a parallel.
- **הערות:** the text **on its own terms** (guidelines §1, §7.2) – where an ancient hearer heard more than the words: who
  each god is and what he or she stands for (Baal the rain and the young king, El the old father and judge, Anat the
  fierce maiden, Athirat the mother of the seventy, Yam / Nahar the sea, Mot death who swallows, Šapšu the sun who goes
  down to the dead); the ritual and social world (the feast, the bride-price, the palace, the mourning rites, the
  marzeaḥ); the images (the throat of Mot, the window in the clouds, the furrowed chest); the poetic craft (the
  parallel pairs, the stair-like repetition, the numerical climax "seven … eight"); the relation to the rest of the
  cycle. Also cruxes, alternatives, the first-occurrence notes `renderings.md` requires (each god's first appearance
  in the file: who he is, [cognate]s in the Bible).
- **הערת שוליים:** (optional) one sentence for the clean translation, only for the major cruxes and the key biblical
  parallels; it becomes a numbered footnote.

**Save as you go** (guidelines §5.1): write each section's entries to the file as soon as they are drafted (not the
whole tablet at the end), and run `fill` and `verify <KEY>` after each one. A quota stop then loses at most one section.
If you are stopped, the coordinator resumes you or a successor from what is on disk.

## 4. The rules most often broken (read again before each section)
- `renderings.md` §5: the reserved and gated strings, checked by `ugarit_tools.py verify` (`אלוהים`, `שאול`, the root
  ברא, `לויתן`, `שמש`, `אשרה` never; `תנין`, `פתן`, `נחש`, `תהום`, `ארובה`, `מלאך`, `עולם`, `טוב`, `קרא`, `ברך`, `קנה`,
  `צפור`, `דג`, `עפר`, `נפש` … only for their source word). If the verifier blocks a word that is right, tell the
  coordinator in your final message; **never bend the Hebrew to pass and never edit the tool's lists**.
- **One Hebrew word per Ugaritic lemma** (★): the verbs of striking (*mḫṣ* `מחץ`, *hlm* `הלם`, *ṣmt* `הצמית`), of going
  (*hlk*, *mġy*, *tbʿ*, *ʿly*, *yrd*), of speaking (*ṣḥ* `צווח`, *rgm* `אמר`, *ʿny* `ענה`, *ṯny* `שנה`), the words for
  "house", "throne", "word". If you need a new one, grep first (`lex`, `grep --all`).
- The formulas (§6) and the fixed lines (§7) character for character; the repeated passages identical (`verify` lists
  every difference: justify it in the apparatus or fix it). A deliberate departure from a §6 formula needs
  `[סטייה מן הנוסחה: <reason>]` in the entry, from a §7 line `[סטייה מן הקבוע: <reason>]` (the verifier reads them).
- **Biblical vocabulary only when it is the natural word or the cognate, and then tagged.** Ugaritic invites the Psalms'
  and Isaiah's diction at every line: a borrowed biblical phrase that the Ugaritic does not justify is a false echo; an
  avoided cognate (`פֶּתֶן`, `אֲרוּבָּה`, `מַלְאָךְ`, `תְּהוֹם`, `נַחֲלָה`, `הֲדוֹם`, `מַרְזֵחַ`) is a hidden echo. Both are errors.
- Do not add what is not in the Ugaritic; additions for sense go in `( )`.

## 5. The clean translation
Write `<project>/translation--intro-<KEY>.rtl.md`: `# <the tablet's title in Hebrew>` and a short Hebrew introduction
(what happens on this tablet and where it stands in the cycle; the tablet, its scribe and state in a sentence; the
edition: KTU³ through CUC; for the first tablet of a project also the signs: `[ ]`, `[…]`, `( )`, `?`, *italics*,
`⟨ ⟩`). Never open a paragraph with bold text (the builder reads `**label**` lines as numbered lines). Then run
`python3 -I -B ugarit_tools.py build`: it generates `translation-<KEY>.rtl.md` and the project's `translation.rtl.md`
from your intro and the annotated `## ` headings, `>` lines and `הערת שוליים` bullets, and verifies. Never edit a
generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole tablet
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; brackets checked against CUC.
- **(b) consistency:** formulas, fixed and repeated lines identical (`verify` lists every difference); names; every
  new Hebrew string grepped against the earlier tablets; `renderings.md` respected.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then `python3 -I ../tools/check_bible_quotes.py <project>/annotated-<KEY>.rtl.md <project>/translation--intro-<KEY>.rtl.md
  <project>/translation-<KEY>.rtl.md` and fix every mismatch; `python3 -I -B ugarit_tools.py verify <KEY> --strict` must
  report **no problems** (the repeated-line differences it lists must each be justified in the apparatus).

## 7. Your section in `<project>/project.md`
Insert it **above** the line `## Parallels index` (do not rewrite earlier sections): `## KTU <KEY>` with, in English
(Bible quotations in Hebrew, vocalized):
- `### Scope` (labels, preservation, the tablet in a sentence);
- `### Sources consulted`;
- `### Decisions` (renderings you fixed, the rejected alternatives and the reason);
- `### Open decisions for the user`;
- `### Progress log` (drafting, the three passes with what each changed, the verify and quote checks);
- `### The text on its own terms`: 5–15 bullets – what this tablet shows of the ancient mind, each with its lines;
- `### Key parallels`: the 3–10 strongest Bible contacts in a sentence each (the full table is generated from your
  **הקבלה** bullets by `build_parallels_index.py`: write those bullets carefully, a tag before each contact);
- `### Lines shared with other tablets` (what you copied, what differs and why);
- `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and reason);
- `### Lessons for the guidelines` (only what generalizes).

## 8. Limits
- Edit only your annotated file, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your
  section of `project.md`. Do not edit `renderings.md`, other tablets' files, other corpora, the guidelines, the tools or
  anything in `../sources/` (if a tool has a bug, say so in your final message; a minimal fix is allowed only if it
  blocks you, and must be reported). Do not commit.
- If you cannot finish, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest
  belongs, build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): labels done, the main decisions, the strongest parallels and the
  strongest "ancient mind" findings, open decisions, problems.

## 9. The epics and the rituals (Round 5 run 3, 2026-10-31)

Read `renderings.md` §12 before your first line (names, key terms, the gates added for the epics). Then:
- **Read §5.2 of the guidelines again for the newest lessons** (Round 5 runs 1–2): the literature's famous details are
  often wrong (Aqhat's "bow of Anat", the eagles, Kirta's "Huriya the fair": check every one against the tablet);
  **never quote a rank-3 wording from memory** – the modern translations (Pardee in *COS* I; Parker et al., *Ugaritic
  Narrative Poetry*; Wyatt; Greenstein for Kirta and Aqhat; Margalit 1989 for Aqhat; Ginsberg in *ANET*) are not in the
  folder: name the reading in a few words or say "the usual reading"; for **Kirta, EUPT's own English and German
  translation and commentary are in the folder** (`ugarit_tools.py eupt KEY LABEL`), read *after* your own rendering.
- **The epics repeat even more than the cycle**: the son's duties (four copies in 1.17), the seven-day feasts and
  sacrifices (1.17 I–II, 1.22), Kirta's dream and its execution (1.14 II–IV: the command copied by the execution word for
  word), the messages, the march of the army, the "lift up your eyes" scene (1.17 V, 1.19). Fix the first copy carefully
  and copy it (`pars`); `verify` lists every difference: justify each in the entry or fix it.
- **The Bible to keep in view for the epics:** Gen 1:2 (`מְרַחֶפֶת`) and Deut 32:11 for *rḫp*; Gen 9:20–27 (the son who
  takes his drunk father's hand); Ezek 14:14, 20 (Danel); Gen 15:2–4, 18:1–15, 30:1 (the childless man, the son promised
  by a god, the guests fed); Gen 4:10 and Deut 21:1–9 (the blood that cries out, the unsolved killing: Danel's curse on
  the towns, 1.19 III–IV); 2 Sam 1:21 (`הָרֵי בַגִּלְבֹּעַ אַל-טַל וְאַל-מָטָר`: Danel's curse on the rain, 1.19 I 42–46);
  Gen 9:13 (the bow); Deut 20:7, 24:5 (the newly married man); Deut 21:15–17, Gen 48 (the firstborn); Gen 28:20–22 (a
  vow); Ex 22:21, Deut 10:18 (the widow and the orphan); Deut 2:11, 3:11, Isa 14:9, 26:14, Ps 88:11 (the Rephaim); Lev
  4–5, 16 and Ps 51 for KTU 1.40. Print every verse first (★).
- **For Kirta (1.14–1.16), EUPT is rank 1 for readings** (renderings §12.3): look at `ugarit_tools.py eupt KEY LABEL`
  for each line *before* you translate the reading (its transliteration only), and at its translation and notes after.
  Where EUPT reads differently from the backticked CUC line, translate EUPT's reading and say so in the פירוק.
