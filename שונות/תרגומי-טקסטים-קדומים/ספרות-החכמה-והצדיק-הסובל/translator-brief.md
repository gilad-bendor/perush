# Brief for the translators of the wisdom corpus (Ludlul bēl nēmeqi, the Babylonian Theodicy)

You translate **one file** (one Ludlul tablet, or one half of the Theodicy) into Hebrew, as one of a sequence of translators who work **one at a time**. The coordinator gives you the file and its key cases in a short per-run prompt; this file holds everything that is the same for every run. The user is offline: never ask questions, never wait for confirmation. Make sensible decisions, record them (with the alternatives) under "Open decisions for the user" in your section of `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/ספרות-החכמה-והצדיק-הסובל/` (the coordinator gives you its absolute path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I`.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts). §1 (the two purposes), §5 (workflow and the lessons of earlier corpora), §6 (principles, echo control), §7 (formats) bind every line you write.
2. `corpus.md`, then **`renderings.md` (binding: names, the personal-religion terms, body and disease, wisdom words, formulas, the acrostic, reserved words, deviations, merged proposals of earlier runs)**, then `../אפוס-גילגמש/renderings.md` §1–§7 and the merged sections (it binds wherever our file is silent), then the project's `project.md` (and the sections of the translators before you).
3. The format model: the first 150 lines of `../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-VII.rtl.md` (Akkadian SB poetry, header and apparatus density) and, once it exists, the annotated file of the translator before you.

## 2. Before drafting
- `python3 -I wisdom_tools.py pars <KEY>` lists every line of your file that eBL links to another line (exact or "cf.") or whose normalization is identical to another line, with the Hebrew already given (this corpus and the Gilgameš corpus). **That Hebrew binds** where the Akkadian is identical; change exactly what the Akkadian changes; mark the line `[מקבילה: <text> <line>]` in the apparatus.
- `python3 -I wisdom_tools.py lemma '<lemma>'` shows how a lemma was rendered so far in this corpus; `python3 -I wisdom_tools.py grep '<Hebrew regex>' --gilg` shows where a Hebrew string is already used (here and in Gilgameš). **Check every new Hebrew word for a frequent lemma against both before you fix it** (guidelines §5).
- Read the whole file once in the eBL `reading-edition.md` and decide the section headings (eBL gives none; follow the content; for the Theodicy the stanza headings of `renderings.md` §7).

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** eBL line label of your range, in eBL's order (including lines that are only `[ ... ]`, ranges such as `109-110`, and labels such as `a+1`), write one entry:

```markdown
### 43
`iddânni | ilī || šadâšu | īli`
> השליכני אֵלִי, עלה אל הרו.
- **פירוק:** `iddânni` – *nadû* G עבר 3 זכר יחיד + ונטיב + סיומת 1 יחיד ("השליכני"); `ilī` – *ilu* + -ī "אלי"; `šadâšu` – *šadû* "הר" + -šu ("להרו", אקוזטיב של כיוון); `īli` – *elû* G עבר 3 ז"י ("עלה").
- **תרגומים:** Foster (eBL): "My own god threw me over, he disappeared"; Lenzi: …
- **הקבלה:** [equivalent] `אֵלִי אֵלִי לָמָה עֲזַבְתָּנִי` (תהלים כב:ב) – כאן *nadû* "השליך", לא *ezēbu* "עזב".
- **הערות:** "עלה אל הרו" – ניב ל"מת / נעלם" (האל חוזר אל מקום מושבו)…
```
(An illustration of the format and density, not binding Hebrew.)

- The normalization in backticks is copied from N **as it is** (`|` and `||` included). Where eBL gives variant reconstructions, translate the main one and give the variant in the apparatus.
- `> ` is exactly one line of Hebrew. **Unvocalized, plene (כתיב מלא), from the first draft**; vocalize only names at their first occurrence in the file, ambiguous words, archaic forms, and the **always-vocalized** words of `renderings.md` (`אֵלִי` "my god", `אֵלָה`, `בֵּל`, `שַׁכַּן`, `אַלּוּ`, `רֵעַ`, `נָבוּ`, `כָּבֵד` "liver", `אִט`, `אֲרוּרוּ` – the verifier checks most of them). A vocalized word must strip to the plain plene string you would otherwise write.
- **פירוק:** every word: lemma, stem (G/D/Š/N/Gt/Gtn/Dt/Št …), tense or aspect (preterite / perfect / present / stative / precative / imperative), person, ventive, subjunctive, *-ma*. The eBL short gloss is usually the G-stem meaning: check the stem in `glossary.md`. **Do not trust a lemma**: parse the form yourself and say so when you depart.
- **Brackets** follow the manuscripts (guidelines §5): a word is in `[ ]` when its root, or most of it, is broken in all manuscripts of the line (check the ATF block, not only N's brackets). `[…]` for a lost stretch. Never fill a gap silently. A line that is only fragments gets a `>` line that shows exactly what survives (`[…] בית […]`); a wholly lost line gets `> […]`.
- **תרגומים:** Foster's T and (Ludlul) Lenzi, quoted briefly, **after** you formed your own reading; record every disagreement and why.
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: tag, Bible verse in the repository's format (`איוב יט:יג`), the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`** (print a verse with `python3 -I ../tools/check_bible_quotes.py --show איוב "יט יג"`; Psalms and Proverbs files use a hyphen-minus for maqaf: keep it). Job, Psalms, Qohelet, Proverbs, Isaiah 53 and Lamentations 3 first; the Torah where it really touches.
- **הערות:** the text **on its own terms** (guidelines §1, §7.2): what the ancient hearer heard – the personal god and goddess, the protective spirits, the demons (who, where from, what they do), the omen techniques (extispicy, incense, dreams, chance utterances), the exorcist's rites, the court, the social meaning of a gesture ("rubbing the nose", "taking the hand"), the images and wordplay, the ancient commentary's gloss where there is one (eBL's `NinNAQuo2` / `BabaLBCom1` lines in the ATF; `../sources/CCP/`). Also cruxes, alternatives, the first-occurrence notes required by `renderings.md`.
- **הערת שוליים:** (optional bullet) – one sentence for the clean translation, only for the major cruxes and the key biblical parallels; it becomes a numbered footnote.

## 4. The rules most often broken (read again before each section)
- `renderings.md` §8: reserved strings, checked by `wisdom_tools.py verify` – no `אלוהים`/`אלוה`, `עולם`, `טרם`, `שאול`, `הבל`, `צדיק`/`צדק`, `תם`/`תמים`, `גואל`, `מלאך`, `שטן`; `טוב`, `ישר`, `רחם`, `עזב`, `ידע`, `קבר`, `עפר`, `לקח`, `חסד`, שלם, `נקי`, `רשע` only for their Akkadian lemma. Gilgameš §6 too (`שׂים` = *šakānu*, `קָרָא` = *nabû*, שוב = *târu*).
- **One Hebrew word per Akkadian lemma**, especially in the piled-up synonyms of anger, fear, sorrow, wisdom, sin (renderings §2–§5). If you need a new one, grep first.
- Present in narrative = Hebrew participle or present; preterite / perfect = past; stative = adjective / nominal clause; precative = jussive / cohortative (`אֲהַלֵּל`, `יְהִי`). No vav-consecutive.
- **Biblical vocabulary only when it is the natural word or the cognate, and then tagged.** This corpus is where the temptation is greatest: Job and the Psalms are the natural register for a lament, and every borrowed phrase manufactures a parallel. A Job phrase that the Akkadian does not justify is a false echo; an avoided cognate is a hidden echo. Both are errors.
- Do not add what is not in the Akkadian; additions for sense go in `( )`.
- Formulas and repeated lines (`renderings.md` §6, the `pars` list) character for character.

## 5. The clean translation
You write `translation--intro-<KEY>.rtl.md`: `# <title in Hebrew>` and a short Hebrew introduction (what happens in this tablet / part; the manuscripts and the edition in a sentence; for the first file of a project, also the signs: `[ ]`, `[…]`, `…`, `( )`, `?`, *italics*, `⟨ ⟩`). Then run `python3 -I wisdom_tools.py build`: it generates `translation-<KEY>.rtl.md` (and the project's `translation.rtl.md`) from your intro and the annotated `## ` headings, `>` lines and `הערת שוליים` bullets, and verifies. Never edit a generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole file
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; brackets checked against the ATF.
- **(b) consistency:** formulas and repeated lines identical (`verify` lists every difference: justify it by the Akkadian in the apparatus, or fix it); names; `renderings.md` respected; `lemma` / `grep` of every new Hebrew string against earlier files and Gilgameš.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then: `python3 -I ../tools/check_bible_quotes.py <your annotated file> <your translation--intro file> <generated translation file> <project.md>` and fix every mismatch; `python3 -I wisdom_tools.py verify <KEY>` must report **no problems** (`--strict` when your file is complete).

## 7. Your section in `project.md`
Append (do not rewrite earlier sections) `## Tablet <KEY>` (Ludlul) or `## <KEY>` (Theodicy) with these subsections, in English (Bible quotations in Hebrew, vocalized):
- `### Scope` (lines, preservation, manuscripts in a sentence; for Ludlul III–IV, the concordance with Lenzi/Oshima);
- `### Sources consulted`;
- `### Decisions` (renderings you fixed, with the rejected alternatives and the reason);
- `### Open decisions for the user`;
- `### Progress log` (drafting, the three passes with what each changed, the verify and quote checks);
- `### Parallels index (<KEY>)`: one table, columns exactly `| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |` – one row per contact; the Bible cell has the vocalized quotation in backticks and the reference in the repository's format, e.g. `` `אַחַי מֵעָלַי הִרְחִיק` (איוב יט:יג) ``. **This is the main product for the commentary**: be complete and precise; say when a parallel rests on a restored word or on a modern translation rather than the Akkadian;
- `### The text on its own terms`: 5–15 bullets – what this tablet / part shows of the ancient mind (beliefs, practices, social world, images), each with its lines; this feeds the corpus's key findings as much as the parallels index does;
- `### Lines shared with other files` (what you copied, what differs and why);
- `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and reason);
- `### Lessons for the guidelines` (only what generalizes).

## 8. Limits
- Edit only your annotated file, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your section of `project.md`. Do not edit `renderings.md`, other translators' files, other corpora, the guidelines, the tools or anything in `sources/` (if a tool has a bug, say so in your final message and in the progress log; a minimal fix is allowed if it blocks you, and must be reported). Do not commit. Do not start sub-agents.
- If you cannot finish the whole file, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest belongs, build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): lines done, the main decisions, the strongest parallels and the strongest "ancient mind" findings, open decisions, problems.
