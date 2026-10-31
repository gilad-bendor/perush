# Brief for the translators of Egyptian (`חכמה-ובריאה-במצרים/`)

You translate **one Egyptian text** (or the part of one the coordinator names) into Hebrew, as one of a chain of
translators who work **strictly one at a time** (guidelines §5.1: quotas apply in every session). The coordinator gives
you the text, its line range and its key cases in a short prompt; this file holds everything that is the same for
every text. The user is offline: **never ask questions, never wait for confirmation.** Decide sensibly, record each
decision (with the alternatives) in your section of the project's `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/חכמה-ובריאה-במצרים/` (the coordinator gives its
absolute path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I -B`.
**Do not start sub-agents** (and if you somehow can: one at a time only).

This is the folder's **first Egyptian corpus**. Egyptian is not Semitic: almost no word has a Hebrew cognate, so the
danger is the opposite of Ugaritic's – not a cognate that drags a verse in, but **a familiar biblical phrase that the
translator reaches for** because the passage is famous for its parallel (Amenemope ↔ Proverbs 22–24; Merikare and the
Memphite Theology ↔ Gen 1–2; the Heavenly Cow ↔ Gen 6–9). The real lexical contacts are **Egyptian loanwords in Hebrew**
(`renderings.md` §4.2): use each only for its own Egyptian word, and tag it.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts): §1 (the two purposes, and the global aim), §5
   (workflow and the lessons of earlier corpora, the ★ rules above all), §6 (principles, echo control; §6.7 is mostly
   Akkadian, but its method and its false-friend lists apply; its last entry is the Ugaritic corpus and the fifth-day
   dossier), §7 (formats).
2. `corpus.md`, then **`renderings.md` (binding: §1 the texts, §2 the transliteration convention, §3 the names, §3a the
   grammar mapping, §4 the key terms with their tags, §5 the reserved / gated words, the traps and the false friends,
   §6 the formulas, §7 the fixed lines, §8 the Amenemope ↔ Proverbs table, §10 the changes merged so far)**, then your
   project's `project.md` (and the sections of the translators before you).
3. The format model: `../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md` (Merikare E 130–136: the same
   language, the same base, the apparatus density we want) and the annotated files of this corpus already drafted.
4. The base text: `python3 -I -B egypt_tools.py data <KEY> [FROM [TO]] [--wit]` – each line of the base (AED-TEI = the
   TLA's 2018 corpus, with `[ ]` lost and restored, `( )` not written, `⟨ ⟩` omitted by the scribe, `{ }` superfluous,
   `⸢ ⸣` damaged, `?` uncertain, `[…]` lost; Amenemope's ` / ` separates two analyses of one written word), **every word
   with its TLA lemma id, the TLA's morphology and the TLA's German gloss in context** (a dictionary aid, not a
   translation), and the lines of the corpus that repeat it, with the Hebrew already given; `--wit` adds the other
   witnesses. `python3 -I -B egypt_tools.py lemma <tla-id>` gives a lemma's forms and glosses across the corpus;
   `lex '<regex>'` how a word was rendered so far.
5. **The TLA's German sentence translation** (`python3 -I -B egypt_tools.py tr <KEY> [FROM [TO]]`) is a rank-3
   translation shipped with the base: **read it only after you drafted the section** (guidelines §3), then compare.

## 2. Before drafting
- Read the whole text (or your range) once in the line data, and decide the section headings: one `## ` heading per
  chapter ("house"), scene or speech unit (a Hebrew title from its content, with the line range).
- `python3 -I -B egypt_tools.py lex '<regex>'` and `python3 -I -B egypt_tools.py grep '<Hebrew regex>' --all`: how a word
  was rendered so far, and where a Hebrew string is already used in every corpus. **Check every new Hebrew word for a
  recurring lemma against these before you fix it** (★): one Egyptian lemma = one Hebrew word (`renderings.md` §4).
- **Repeated lines and refrains** (Amenemope repeats couplets: §6.7 of the renderings, and `data` shows "identical" /
  "similar" lines): the later copy copies the first copy's Hebrew, word for word and in the same order; change exactly
  what the Egyptian changes; note `[מקבילה: <KEY> <label>]` in the apparatus.

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** line of your range, in the base's order (lines that are only `[…]` included), write one entry:

```markdown
### 7.12
`@`
> אַל תָּזִיז אֶת אֶבֶן־הַגְּבוּל מִגְּבוּלוֹת הַשָּׂדוֹת,
- **פירוק:** `m-jri̯` – אל־תעשה (שלילת הציווי) ("אל"); `rmni̯` – *rmnj* "לשאת; להזיז" שם פועל ("תזיז"); `wḏ.y` – *wḏ* "אסטלה, אבן־גבול"; `ḥr` – "על"; `tšjw.pl` – *tšj* "גבול" ברבים; `n` – "של"; `ꜣḫ(,t)` – *ꜣḥ.t* "שדה, אדמה פורייה".
- **תרגומים:** …
- **הקבלה:** [equivalent] `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) – …
- **הערות:** …
```
(An illustration of the format, not binding Hebrew beyond `renderings.md`.)

- ★ **Write the source line as `` `@` `` and run `python3 -I -B egypt_tools.py fill <project>/annotated-<KEY>.rtl.md`**:
  the tool copies the base line exactly. Never retype it.
- ★ `> ` is exactly one line of Hebrew, **unvocalized and plene (כתיב מלא) from the first draft**; vocalize only names at
  their first occurrence in the file, ambiguous words, archaic forms, and the always-vocalized words of `renderings.md`
  §5.3 (the verifier checks them: `רַא`, `פְּתָח`, `גֶּבּ`, `מִין`, `הַחַם`, `נוּן`, `סֵת`, `בָּא`, `כָּא` …). A vocalized word
  must strip to the plene string you would otherwise write. A regex that strips niqqud must keep the maqaf.
- **One Egyptian line = one Hebrew line** (guidelines §6.1). Egyptian manuscripts break lines anywhere – inside a
  sentence, a phrase, even a compound (Merikare E130–131 "for their noses | to live"): keep the break; put each word in
  the line where it stands as far as Hebrew allows, and say so in the הערות. Amenemope is written in verse lines
  (one couplet member per line): keep its parallelism visible. In the Heavenly Cow a "line" is a long column; Hebrew
  punctuation inside it marks the sentences.
- **פירוק:** every word: the transliteration, its lemma (the TLA's, in Latin letters, with its meaning in Hebrew), the
  form (the TLA's morphology – `sḏm=f`, `sḏm.n=f`, stative, participle, infinitive, First Present, Third Future,
  conjunctive, negative aorist …), the Hebrew word chosen. **The TLA's morphology is an editor's analysis: check it, and
  say so when you depart from it.** Name the form whose reading decides the tense (`renderings.md` §3a).
- **Grammar mapping** (`renderings.md` §3a): no vav-consecutive (`וְאָמַר`, never `וַיֹּאמֶר`); `m-jri̯` → `אַל`; the
  conjunctive continues the mood; `n sḏm.t=f` → `טֶרֶם`; statives → adjectives; the First Present → participle.
- **Brackets** follow the base: a word is in `[ ]` when it, or most of it, is restored; `[…]` for a lost stretch;
  `⸢ ⸣` letters are read but damaged: mark a word `?` only if its reading is doubtful because of them. **Never fill a gap
  silently**: a restoration that is not the base's (e.g. from another witness) goes in `[ ]` with the note "restored
  after <witness>". A line that is only `[…]` gets `> […]`. The `( )` and `⟨ ⟩` of the transliteration are the editor's
  normal supplements of the script and are **not** carried into the Hebrew; the scribe's `{ }` is left out.
- **תרגומים:** after you formed your own reading: (a) the TLA's German (`tr`) – quote briefly, in German, as "TLA";
  (b) older public-domain editions in the folder (Amenemope: **Lange 1925**, `../sources/Lange-1925--Weisheitsbuch-des-
  Amenemope/lange-1925_djvu.txt`, OCR – his chapter and line numbers are the same page.line; the Heavenly Cow: **Hornung
  1997** (OBO 46, German, © open access: `../sources/Hornung-1997--Himmelskuh--OBO-46/`, extract the pages you need with
  `pdftotext -f N -l M -layout`); the Memphite Theology: **El Hawary 2010**'s German (`tr MT`)); (c) **the modern
  translations you know** (Lichtheim, *AEL* I–III; Simpson (ed.), *The Literature of Ancient Egypt*; Laisney 2007; Fox,
  *Proverbs* AYB; Shupak 2016 (Hebrew!); Allen, *The Ancient Egyptian Pyramid Texts*; Quack 1992 for Merikare): **they
  are not in the folder, so never quote them verbatim or invent a wording** – give their reading in a few words with
  the scholar's name only when you are sure of it, else "the usual reading". **Shupak's Hebrew is copyrighted and was
  not consulted**: never reproduce a Hebrew translation from memory. Record every disagreement and why (★: the rank-3
  translation is the main source of false echoes – check every negation, tense and preposition against the
  transliteration; the famous "parallels" are exactly where translators bend the Egyptian toward the Bible).
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: the tag, the verse in the
  repository's format, the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`**, written
  `` `…` (ספר פרק:פסוק) ``. ★ **Print every verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show
  משלי "כב יז"`; **Psalms and Proverbs use a hyphen-minus for maqaf: keep it**; ketiv/qere appear as `שָׁלִשִׁום
  (שָׁלִשִׁים)`: quote around them). Always name the book; quote whole words. For Amenemope use the table of
  `renderings.md` §8 and check every pairing against the transliteration: give each pair its tag ([equivalent] for the
  same saying, [divergence] where it differs: the geese and the eagle, "give your ears" and "incline your ear", the
  tongue and the lips). For cultures in contact with Israel (Egypt was), say whether the contact is literary (Amenemope ↔
  Proverbs: accepted dependence), a loanword, or a shared motif. Never force a parallel.
- **הערות:** the text **on its own terms** (guidelines §1, §7.2): the gods and what each stands for, Maat (truth and
  order), the heart that "is" the person, the judgement of the dead, the scribe's world and the fields' surveyor
  (Amenemope was a land official: the boundary stones, the corn measure, the tax lists are his trade), the "silent" and
  the "hot" man, the sun's daily voyage, the Nile flood; images and wordplay (Egyptian loves puns: *rmṯ* "people" ~
  *rmj.t* "tears"; *Jtm* ~ *tm* "complete"; *Ḫprj* ~ *ḫpr*); what an ancient hearer heard. First-occurrence notes for every
  god and place (`renderings.md` §3).
- **הערת שוליים:** (optional) one sentence for the clean translation, only for the major cruxes and the key biblical
  parallels; it becomes a numbered footnote.

**Save as you go** (guidelines §5.1): write each section's entries to the file as soon as they are drafted (not the
whole text at the end), and run `fill` and `verify <KEY>` after each one. A quota stop then loses at most one section.

## 4. The rules most often broken (read again before each section)
- `renderings.md` §5: the reserved and gated strings, checked by `egypt_tools.py verify` (`אלוהים`, the root ברא,
  `תנין`, `תהום`, `שאול`, `מבול`, the root שבת, `נשמה`, the roots נחם / עצב, `מחה`, `תורה`, the root סוג (`הסיג`),
  `עולם`, `צדק`, `משפט`, `שוחד`, `יתום` never; `רוח`, `צלם`, `דמות`, `טוב`, `גבול`, `אלמנה`, `איפה`, `פלס`, `מאזנים`,
  `מוסר`, `תבה`, `יאור`, `סוף`, `פרעה` … only for their source word). If the verifier blocks a word that is right, tell
  the coordinator in your final message; **never bend the Hebrew to pass and never edit the tool's lists**.
- **One Hebrew word per Egyptian lemma** (★): the two hearts (jb `לֵב`, ḥꜣ.tj `לֵבָב`), the words for the poor (nmḥ
  `דַּל`, twꜣ `עָנִי`, jꜣd `אֻמְלָל`), the words for speech (md.t `דָּבָר`, ḏd `אָמַר`, wšb `תְּשׁוּבָה`), "good" (nfr `טוֹב`)
  and "useful" (ꜣḫ `מוֹעִיל`). If you need a new one, grep first (`lex`, `grep --all`).
- The formulas (§6) and the fixed lines (§7) character for character; the repeated passages identical (`verify` lists
  every difference: justify it in the apparatus or fix it). A deliberate departure from a §6 formula needs
  `[סטייה מן הנוסחה: <reason>]` in the entry, from a §7 line `[סטייה מן הקבוע: <reason>]` (the verifier reads them).
- **Biblical vocabulary only when it is the natural word, and then tagged.** Amenemope invites Proverbs' diction at
  every line (`בְּנִי`, `הַט אָזְנְךָ`, `אַל תַּסֵּג`, `אִישׁ חֵמוֹת`): render the Egyptian, and let the apparatus show the
  Proverbs wording. A borrowed biblical phrase that the Egyptian does not justify is a false echo; an avoided natural
  word (`גְּבוּל`, `מֹאזְנַיִם`, `תּוֹעֵבָה`) is a hidden echo. Both are errors.
- Do not add what is not in the Egyptian; additions for sense go in `( )`.

## 5. The clean translation
Write `<project>/translation--intro-<KEY>.rtl.md`: `# <the text's title in Hebrew>` and a short Hebrew introduction (what
the text is, its date and manuscript, the edition: the TLA through AED-TEI (or El Hawary 2010 for the Memphite
Theology); the signs: `[ ]`, `[…]`, `( )`, `?`, *italics*, `⟨ ⟩`). Never open a paragraph with bold text (the builder
reads `**label**` lines as numbered lines). Then run `python3 -I -B egypt_tools.py build`: it generates
`translation-<KEY>.rtl.md` and the project's `translation.rtl.md` from your intro and the annotated `## ` headings, `>`
lines and `הערת שוליים` bullets, and verifies. Never edit a generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole text
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; brackets checked against the base;
  every negation, tense and stem checked against the morphology.
- **(b) consistency:** formulas, fixed and repeated lines identical (`verify` lists every difference); names; every new
  Hebrew string grepped against the earlier texts; `renderings.md` respected.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then `python3 -I ../tools/check_bible_quotes.py <project>/annotated-<KEY>.rtl.md <project>/translation--intro-<KEY>.rtl.md
  <project>/translation-<KEY>.rtl.md` and fix every mismatch; `python3 -I -B egypt_tools.py verify <KEY> --strict` must
  report **no problems** (the repeated-line differences it lists must each be justified in the apparatus).

## 7. Your section in `<project>/project.md`
Insert it **above** the line `## Parallels index` (do not rewrite earlier sections): `## <KEY> <range>` with, in
English (Bible quotations in Hebrew, vocalized):
- `### Scope` (labels, preservation, the text in a sentence);
- `### Sources consulted`;
- `### Decisions` (renderings you fixed, the rejected alternatives and the reason);
- `### Open decisions for the user`;
- `### Progress log` (drafting, the three passes with what each changed, the verify and quote checks);
- `### The text on its own terms`: 5–15 bullets – what this text shows of the ancient mind, each with its lines;
- `### Key parallels`: the 3–10 strongest Bible contacts in a sentence each (the full table is generated from your
  **הקבלה** bullets by `build_parallels_index.py`: write those bullets carefully, a tag before each contact);
- `### Lines shared with other texts` (what you copied, what differs and why);
- `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and reason);
- `### Lessons for the guidelines` (only what generalizes).

## 8. Limits
- Edit only your annotated file, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your
  section of `project.md`. Do not edit `renderings.md`, other texts' files, other corpora, the guidelines, the tools or
  anything in `../sources/` (if a tool has a bug, say so in your final message; a minimal fix is allowed only if it
  blocks you, and must be reported). Do not commit.
- If you cannot finish, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest
  belongs, build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): labels done, the main decisions, the strongest parallels and the
  strongest "ancient mind" findings, open decisions, problems.
