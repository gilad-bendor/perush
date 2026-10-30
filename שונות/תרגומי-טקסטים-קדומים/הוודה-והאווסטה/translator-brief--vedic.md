# Brief for the translators of Vedic, Sanskrit and Avestan (`הוודה-והאווסטה/`)

You translate **one or more texts of this corpus** (the part the coordinator names) into Hebrew, as one of a chain of
translators who work **strictly one at a time** (guidelines §5.1). The coordinator gives you the texts, their line
ranges and their key cases in a short prompt; this file holds everything that is the same for every part. The user is
offline: **never ask questions, never wait for confirmation.** Decide sensibly, record each decision (with the
alternatives) in your section of the project's `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/הוודה-והאווסטה/` (the coordinator gives its
absolute path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I -B`.
**Do not start sub-agents.** Do not commit.

This is the folder's **first Sanskrit and Avestan corpus**. Two dangers, opposite to each other:
- **Vedic India and early Iran had no contact with Israel.** A Hebrew phrase that the source does not justify invents a
  link that cannot exist (false echo); and the famous comparisons (RV 10.129 and Gen 1:1–2, Puruṣa and Gen 1:26, Manu's
  flood and Noah's, Śunaḥśepa and Isaac) pull the translator toward biblical diction. Render the source; the apparatus
  compares, and says in words that the parallel is a shared motif, not a source.
- **Hidden echo:** where the source really says what the Bible says ("darkness", "wind", "seed", "in the beginning"), do
  not hide it behind a rare word – use the natural Hebrew (the renderings fix which, and gate it), and tag it.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts): §1 (the two purposes; the global aim), §5 (the
   workflow and the lessons of earlier corpora, the ★ rules above all), §6 (principles; §6.4 echo control; §6.7: the
   2026-10-30 cross-language principles – the Akkadian cognate reservations do **not** apply to a non-Semitic corpus),
   §7 (formats).
2. `corpus.md`, then **`renderings.md`** (binding: §1 the bases, §2 the Hebrew conventions and the name transcription,
   §3 the names, §4 the grammar mapping, §5 the key terms, §7 the reserved words and traps, §8 the formulas, §9 the
   repeated lines and the dossier, §11 what earlier translators fixed), then your project's `project.md` (and the
   sections of the translators before you).
3. The format model: `../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-RV.rtl.md` (RV 1.32, six stanzas, drafted in
   Round 4 for the fifth-day dossier: the same base and the apparatus we want – but **its Hebrew yields to this corpus's
   renderings** where they differ: *pr̥thivī́* `אֶרֶץ`, not `אדמה`).
4. The base text: `python3 -I -B vedic_tools.py data <KEY> [FROM [TO]]` – each base line; for the Rigveda **every word
   with its Zurich lemma and morphology** (VedaWeb: human-made, reliable, but check every form that carries a tense, a
   parallel or a gate); the names of the line with their fixed Hebrew; the formulas; the corpus lines that repeat it (with
   the Hebrew given); for RV 1.32 the dossier's Hebrew.
   - **The prose bases (ŚB, AB) come from TITUS without word division** (sandhi as in Devanāgarī: `avanégyamudakamā́jahruryáthedám`):
     divide the words yourself in the פירוק. The ŚB is accented (Weber), the AB is not (Aufrecht). TITUS's `...`
     (ŚB 1.2.3.6) abbreviates a repeated phrase: expand it in `( )`.
   - **The Avestan (VD2)** is CAB's text: words separated by dots, `+` = an editor's emendation. Use
     `python3 -I -B vedic_tools.py ave <form>` (CAB's analysis of a form: lemma, case, number, its attestations) and
     `avelemma <lemma>` (CAB's glossary with Bartholomae's *Altiranisches Wörterbuch* lemma and page id). Bartholomae
     1904 (OCR, German) is in `../sources/Archive-org--PD-translations/Bartholomae-1904_djvu.txt` (grep it).
5. **Dictionaries (per word):** `python3 -I -B vedic_tools.py mw <word>` (Monier-Williams; IAST or SLP1) and
   `gra <word>` (Grassmann's *Wörterbuch zum Rig-Veda*, with every RV attestation – Grassmann numbers the hymns his own
   way: `{955,3}` = his hymn 955). `lemma '<regex>'`: every Rigveda line with a Zurich lemma.

## 2. Before drafting
- Read the whole range once, and decide the section headings: one `## ` heading per episode or stanza group (a Hebrew
  title from its content, with the range: `## לא היה אז אין (1–2)`).
- `python3 -I -B vedic_tools.py lemma '<lemma>'`, `grep '<Hebrew regex>' --all` (where a Hebrew string is already used,
  in every corpus) and `lexmap '<lemma or Hebrew>'` (the Hebrew ↔ lemma map of the drafted files): **check every new
  Hebrew word for a recurring lemma against these before you fix it** (★): one source lemma = one Hebrew word.
- **Repeated lines and formulas** (renderings §8–§9; `data` shows "identical" / "similar" lines and the formulas): the
  later copy copies the first copy's Hebrew word for word and in the same order; change exactly what the source changes;
  note `[מקבילה: <KEY> <label>]` in the apparatus.

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** line of your range, in the base's order, write one entry:

```markdown
### 1a
`@`
> לא היה אז אַיִן, ולא היה יֵשׁ;
- **פירוק:** `ná` – ná "לא" ("לא"); `ásat` – ásant- "שאינו קיים", שם־פעולה נייטרי, נושא ("אין"); `āsīt` – √as "היה", אימפרפקט 3 יחיד ("היה"); …
- **תרגומים:** …
- **הקבלה:** [divergence] `וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ` (בראשית א:ב) – …
- **הערות:** …
```
(An illustration of the format, not binding Hebrew beyond `renderings.md`.)

- ★ **Write the source line as `` `@` `` and run `python3 -I -B vedic_tools.py fill <project>/annotated-<KEY>.rtl.md`**:
  the tool copies the base line exactly. Never retype the Sanskrit or the Avestan.
- ★ `> ` is exactly one line of Hebrew, **unvocalized and plene (כתיב מלא) from the first draft**; vocalize only the
  names at their first occurrence in the file (the verifier checks the names of renderings §3.1), ambiguous words, and
  the always-vocalized words of renderings §7.3 (`אֵל`, `אֵלִים`, `יָמָה`, `יָמִי`, `יִימָה`, `מָנוּ`, `סוֹמָה`, `מָוֶת`
  …). A vocalized word must strip to the plene string you would otherwise write. **Look at your first saved section**: if
  you drafted it vocalized, rewrite it now.
- **One pāda = one Hebrew line** (renderings §2.1); keep each word in its line as far as Hebrew allows; the sentence runs
  over the line ends as in the source. Prose units (ŚB, AB, Vd) are one Hebrew line each.
- **פירוק:** every word: the form in backticks, its lemma (unbackticked), its meaning in Hebrew in quotation marks, the
  form (tense/mood/voice/person/number; case/gender/number; for the RV decoded from the Zurich morphology, **checked by
  you**), and the Hebrew chosen **in parentheses and quotation marks** `("…")` – the format `lexmap` reads:
  `` `form` – lemma "meaning", form ("Hebrew") ``, segments separated by `; `. Particles not translated: `("–")`. Name the
  form that decides a tense or a mood (the injunctive, the subjunctive, the perfect of state).
- **Grammar mapping** (renderings §4): no vav-consecutive; the injunctive has no tense of its own; the absolutive → a
  subordinate clause; the causative → הפעיל / פיעל by function; compounds explained in the פירוק.
- **Names:** by renderings §3.1, or the transcription convention §2.3, vocalized at the first occurrence in the file; a
  new name goes into your Proposals.
- **תרגומים:** after you formed your own reading (guidelines §3: never before). For the Rigveda run
  `python3 -I -B vedic_tools.py tr <KEY> <from> <to>` **after drafting a stanza group**: Griffith (1889–92, public
  domain), Grassmann (1876–77, PD), Geldner (1951, ©: quote at most a few words), Elizarenkova (©). Jamison's
  commentary on the Jamison–Brereton translation (2014; the commentary updated Sept 2026, free to read, ©) is in
  `../sources/Jamison--Rigveda-commentary/*.txt` (grep the hymn number, e.g. `X.129`): it discusses the hard words; quote
  it only briefly, with attribution. For the other texts read the public-domain translation **after drafting** (grep
  its text file in `../sources/Archive-org--PD-translations/`): Eggeling, SBE 12 (1882; ŚB 1.2.3, 1.8.1),
  Keith, HOS 25 (1920; AB 7.13–18 = his xxxiii. 1–6: grep `Hari` / `unahsepa`; the OCR writes ś as `9`, `q`, `f`, `j`), Ganguli (1883–96; MBh 3.185 = his Vana Parva section CLXXXVII, `Ganguli--vol02_djvu.txt` near line 35860: grep `Vaivaswata`),
  Darmesteter, SBE 4 (1880; Vd 2 = his "Fargard II"), Hume 1921 (KU). **Modern translations you know but that are not in
  the folder** (Jamison–Brereton 2014, Doniger 1981, Olivelle 1998, Skjærvø, Witzel–Gotō): give their reading in a few
  words with the name only when you are sure of it, never invent a wording. **Hebrew translations (Peter 2006, Fridman
  2014) are copyrighted and were not consulted**: never reproduce one from memory. Record every disagreement and why.
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: the tag, the verse in the
  repository's format, the biblical words **vocalized, exactly as in `../../../תנך-מנוקד/`**, written
  `` `…` (ספר פרק:פסוק) ``. ★ **Print every verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show
  בראשית "ו ד"`; Psalms and Proverbs use a hyphen-minus for maqaf: keep it). Always name the book; quote whole words. For
  every parallel say in words that it is a shared motif across cultures that never met (or, for the flood, name the
  debated Mesopotamian origin of the Indian fish-flood; for Iran, the late written Avesta), and **compare with this
  folder's corpora** where they have the same motif (`grep --all`: the Mesopotamian flood corpus `סיפורי-המבול-המסופוטמיים/`,
  Enūma eliš and the creation corpus, the Ugaritic and Hesiod corpora, the fifth-day dossier): the three-way comparison is
  the point. Never force a parallel.
- **הערות:** the text **on its own terms** (guidelines §1, §7.2): the gods and what each stands for; the Vedic sacrifice
  and its logic (the fire as messenger, soma, the fathers, the priestly families); the Brāhmaṇa's world (equivalences,
  "he who knows thus …"); Zoroastrian Iran (Ahura Mazdā, the Order *aša*, the material world as good creation); the
  poet's craft (the riddles, the refrains, the wordplay: *vr̥trá* / *vavāra*, *yama* "twin"); what a hearer heard. A
  first-occurrence note for every god, place and ritual term.
- **הערת שוליים:** (optional) one sentence for the clean translation, only for the major cruxes and the key parallels.

**Save as you go** (guidelines §5.1): write each section's entries to the file as soon as they are drafted, and run
`fill` and `verify <KEY>` after each one. A quota stop then loses at most one section.

## 4. The rules most often broken (read again before each section)
- Renderings §7: the reserved and gated strings, checked by `vedic_tools.py verify` (`אֱלֹהִים`, the root ברא (and
  `בְּרִיּוֹת`), `תְּהוֹם`, `תֹּהוּ`, `רָקִיעַ`, `רֵאשִׁית`, `מַבּוּל`, `תֵּבָה`, `תַּנִּין`, `שְׁאוֹל`, `צֶלֶם`, `דְּמוּת`, the root
  עקד, `מַאֲכֶלֶת`, `שֶׂה`, `עֹלָה`, `נִיחוֹחַ`, `נְשָׁמָה`, `עֶרְוָה`, `מָאוֹר`, the roots כפר and שבת never; `נָחָשׁ`,
  `חֹשֶׁךְ`, `רוּחַ`, `זֶרַע`, `קֶשֶׁת`, `אַיִל`, `עָפָר`, `אֲדָמָה`, `אָדָם`, `טוֹב`, the roots ברך, ארר, קדש, `מִזְבֵּחַ`,
  `חַי` / `חַיִּים` only for their source word). If the verifier blocks a word that is right, say so in your final
  message; **never bend the Hebrew to pass and never edit the tool's lists** (an entry may carry `[היתר שער: <word> –
  <reason>]` / `[היתר שם: …]` / `[סטייה מן הנוסחה: …]` when the source justifies it – with a real reason).
- **One Hebrew word per source lemma** (★); if you need a new one, grep first (`lemma`, `lexmap`, `grep --all`).
- The formulas (§8) character for character; the repeated lines identical (`verify` lists every difference: justify it
  in the apparatus or fix it).
- **Biblical vocabulary only when it is the natural word, and then tagged.** Do not add what is not in the source;
  additions for sense go in `( )`.

## 5. The clean translation
Write `<project>/translation--intro-<KEY>.rtl.md`: `## <the text's title in Hebrew>` (level 2: the project file puts
several texts under one title) and a short Hebrew introduction (what the text is, its date, the edition used, the signs:
`[ ]`, `( )`, `?`, *italics*). Never open a paragraph with bold text (the builder reads `**label**` lines as numbered
lines). Then run `python3 -I -B vedic_tools.py build <KEY>`: it generates `translation-<KEY>.rtl.md` and the project's
`translation.rtl.md` from the intros and the annotated `## ` headings, `>` lines and `הערת שוליים` bullets, and verifies.
Never edit a generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of your texts
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; every negation, tense, mood and voice
  checked against the source.
- **(b) consistency:** formulas and repeated lines identical; names; `lexmap` shows no lemma with two Hebrew words that is
  not a recorded split; every new Hebrew string grepped against the other texts and corpora; `renderings.md` respected.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then `python3 -I ../tools/check_bible_quotes.py <project>/annotated-<KEY>.rtl.md <project>/translation--intro-<KEY>.rtl.md
  <project>/translation-<KEY>.rtl.md` and fix every mismatch; `python3 -I -B vedic_tools.py verify <KEY> --strict` must
  report **no problems**.

## 7. Your section in `<project>/project.md`
Insert it **above** the line `## Parallels index` (do not rewrite earlier sections): `## <KEY> <range>` with, in English
(Bible quotations in Hebrew, vocalized): `### Scope`; `### Sources consulted`; `### Decisions` (renderings you fixed, the
rejected alternatives and the reason); `### Open decisions for the user`; `### Progress log` (drafting, the three passes
with what each changed, the verify and quote checks); `### The text on its own terms` (5–15 bullets, each with its
lines); `### Key parallels` (the 3–10 strongest, a sentence each – the table is generated from your **הקבלה** bullets: a
tag before each contact); `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and
reason); `### Lessons for the guidelines`.

## 8. Limits
- Edit only your annotated files, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your
  section of `project.md`. Do not edit `renderings.md`, other texts' files, other corpora (the dossier too: propose its
  revision), the guidelines, the tools or anything in `../sources/` (if a tool has a bug, say so; a minimal fix only if
  it blocks you, reported).
- If you cannot finish, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest belongs,
  build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): labels done, the main decisions, the strongest parallels and "ancient
  mind" findings, open decisions, problems.
