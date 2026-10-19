# Brief for the tablet translators of the Gilgameš corpus

You translate **one tablet (or a named group of lines)** of the Epic of Gilgameš into Hebrew, as one of a sequence of translators who work **one at a time**. The coordinator gives you the tablet and its key cases in a short per-run prompt; this file holds everything that is the same for every run. The user is offline: never ask questions, never wait for confirmation. Make sensible decisions, record them (with the alternatives) under "Open decisions for the user" in your tablet's section of `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/אפוס-גילגמש/` (the coordinator gives you its absolute path). Use absolute paths in tool calls; keep every command short-running.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file**. §5 (workflow and the lessons of earlier corpora), §6 (principles, echo control), §7 (formats) bind every line you write.
2. `corpus.md`, then **`renderings.md` (the shared renderings: names, formulas, fixed passages, key terms, reserved words – binding)**, then the project's `project.md` (the parallels to watch for, and the sections of the translators before you: their decisions and proposals bind you too, once the coordinator has merged them into `renderings.md`; if a proposal is not yet merged, follow it and say so).
3. The format model: the first 120 lines of `../סיפורי-המבול-המסופוטמיים/2-גילגמש-XI--סיפור-המבול/annotated.rtl.md` (the same poem, Tablet XI) and of `../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/annotated-VI.rtl.md` (header and apparatus density).
4. The relevant commentary (`../../../פירוש/1-בראשית/…`, named in `project.md`): only to know which biblical words the commentary interprets, so that the parallels index names them exactly. Never let it change a rendering.

## 2. Before drafting
- From the corpus folder: `python3 -I parallels_for.py <KEY>` lists every line of your tablet that repeats a line already translated (in this corpus or in Gilg. XI 1–208 of the flood corpus), with its Hebrew. **That Hebrew binds**: copy it exactly where the Akkadian is identical, change exactly what the Akkadian changes, and mark the line `[מקבילה: <tablet> <line>]` in the apparatus. `--all` also lists repeats inside your own tablet and to tablets not yet translated: fix the Hebrew of the **first** copy with care, then copy it.
- Read the whole tablet once in `../sources/eBL/<folder>/reading-edition.md` (N = normalization, T = George's translation, L = lemmas, notes, parallels, the manuscripts' transliterations) and decide the section headings (eBL gives none; follow the plot).
- Grep the Hebrew already used before you introduce a new word for a frequent lemma: `grep -h '^> ' 1-*/annotated-*.rtl.md 2-*/annotated-*.rtl.md ../סיפורי-המבול-המסופוטמיים/2-*/annotated.rtl.md | grep '<string>'` (guidelines §5: check every new Hebrew term against the Hebrew already used, as strings).

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** eBL line label of the tablet, in eBL's order (including lines that are only `[ ... ]`, ranges such as `52-53`, and labels such as `208a`, `a+1'`), write one entry:

```markdown
### 100
`ṭīda | iktariṣ || ittadi | ina ṣē[ri]`
> טיט קָרְצָה, השליכה בַּשָּׂ[דה].
- **פירוק:** `ṭīda` – *ṭīdu* "טיט" (אקוזטיב); `iktariṣ` – *karāṣu* G עבר (perfect), 3 נקבה יחיד ("קרצה"); `ittadi` – *nadû* G perfect, 3 נקבה יחיד ("השליכה"); `ina ṣēri` – "בשדה" (*ṣēru* "ערבה, שדה"; הלמה של eBL, "גב", היא שגגה).
- **תרגומים:** George (eBL): "she took a pinch of clay, she threw it down in the wild".
- **הקבלה:** [cognate] *karāṣu* / `קרץ`: `מֵחֹמֶר קֹרַצְתִּי גַם אָנִי` (איוב לג:ו). [divergence] `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) – כאן טיט, לא עפר; האלה "משליכה" אותו לשדה, ואילו `וַיָּשֶׂם שָׁם אֶת הָאָדָם` (ב:ח).
- **הערות:** …
```
(This is an illustration of the format and density, not binding Hebrew for I 100.)

- The normalization in backticks is copied from N **as it is** (eBL's `|` and `||` included). Where eBL gives variant reconstructions, translate the main one and give the variant in the apparatus.
- `> ` is exactly one line of Hebrew. **Unvocalized, plene (כתיב מלא), from the first draft**; vocalize only names at their first occurrence in the tablet, ambiguous words, archaic forms, and the always-vocalized names of `renderings.md` §7. (Strip-test: a vocalized word must strip to the plain plene string you would otherwise write.)
- **פירוק:** every word: lemma, stem (G/D/Š/N/Gt/Gtn/Dt/Št …), tense or aspect (preterite / perfect / present / stative / precative / imperative), person, ventive, subjunctive, *-ma*. The eBL short gloss is usually the G-stem meaning: check the stem in `glossary.md`. **Do not trust a lemma**: eBL's lemmatization has slips (I 100 *ṣēri* is lemmatized "back"); parse the form yourself and say so when you depart.
- **Brackets** follow the manuscripts of *this* copy (guidelines §5): a word is in `[ ]` when its root, or most of it, is broken in all manuscripts of the line (check the ATF block under the entry, not only N's brackets). Partial brackets for partly restored words. `[…]` for a lost stretch. Never fill a gap silently.
- **תרגומים:** George's T, quoted briefly, **after** you formed your own reading; record every disagreement and why. Where an OB, MB or other version is listed in `Parallels:`, mention what it adds or changes.
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: tag ([cognate] / [equivalent] / [divergence] / [absent]), the Bible verse in the repository's format (`בראשית ב:ז`), the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`** (print a verse with `python3 -I ../tools/check_bible_quotes.py --show בראשית "ב ז"`). Quote only what the comparison needs.
- **הערות:** cruxes, alternatives, the reason for a non-obvious rendering, the first-occurrence notes required by `renderings.md`.

## 4. The rules most often broken (read again before each section)
- `renderings.md` §6: reserved strings. `verify.py` checks them, but think before you write: no `אֱלֹהִים` (ilu = `אֵל`), no `עוֹלָם`, no `טֶרֶם`, no `פָּתַר`, no `צָבַר`, no `שָׁמַר`, no `עֵדֶן`, no `כְּנֶגְדּוֹ`; `שׂים` only for *šakānu*; `ידע` only for *edû*; `עפר`, `טיט`, `נחש`, ארר, `עשב`, `עץ` only for their one Akkadian word.
- Present tense in narrative = Hebrew participle (or present); preterite / perfect = past; stative = adjective / nominal clause; precative = jussive (`יְהִי`, `תֵּלֵךְ`), cohortative = `אֶעֱשֶׂה נָּא` / `אֶעֱשֶׂה`. No vav-consecutive.
- **Formulas** (`renderings.md` §2) and **fixed passages** (§3) are copied character for character, including punctuation; their split forms over line breaks too.
- Names per `renderings.md` §1; first occurrence vocalized and noted.
- Do not add what is not in the Akkadian; additions for sense go in `( )`.
- Biblical vocabulary only when it is the natural word or the cognate, and then tagged. A Genesis word that the Akkadian does not justify is a false echo; an avoided cognate is a hidden echo. Both are errors.

## 5. The clean translation `1-הנוסח-הבבלי-התקני/translation-<KEY>.rtl.md` (or `2-הנוסח-הבבלי-הקדום/…`)
- `# <title in Hebrew>`; a short introduction in Hebrew (what happens in the tablet; the manuscripts and the edition; the marks); `##` section headings (the same as in the annotated file); numbered lines `**<label>** <Hebrew>` followed by **two spaces** (a Markdown line break); a blank line between sections only; numbered footnotes `[^1]` only for the major cruxes and the key biblical parallels (a reader of the commentary must find them there), defined at the end.
- The numbered lines must equal the annotated `>` lines exactly (footnote marks aside): run `python3 -I verify.py <KEY>` from the corpus folder and fix every problem it reports.
- For XI: the file covers 209–328 only and begins with a pointer to the flood corpus for 1–208.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole tablet
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; brackets checked against the ATF.
- **(b) consistency:** formulas, fixed passages and repeated lines identical (`verify.py` lists every eBL parallel that differs: justify each remaining difference by the Akkadian in the apparatus, or fix it); names; `renderings.md` respected; the grep of new Hebrew strings against earlier tablets.
- **(c) Hebrew:** read aloud; register even; no unintended biblical calques; then, and only then, compare with Tchernichovsky 1924 (`../sources/Ben-Yehuda--Tchernichovsky-1924/full-work--all-tablets.rtl.md`) for register, and as a negative model (what it imports from the Bible that the Akkadian lacks).
- Then: `python3 -I ../tools/check_bible_quotes.py <your annotated file> <your translation file> <project.md>` and fix every mismatch; `python3 -I verify.py <KEY>` must report no problems for your tablet.

## 7. Your section in `project.md`
Append (do not rewrite earlier sections) `## Tablet <KEY>` with these subsections, in English (Bible quotations in Hebrew, vocalized):
- `### Scope` (lines, preservation, manuscripts in a sentence);
- `### Sources consulted`;
- `### Decisions` (renderings you fixed, with the rejected alternatives and the reason);
- `### Open decisions for the user`;
- `### Progress log` (drafting, the three passes with what each changed, the verify and quote checks);
- `### Parallels index (Tablet <KEY>)`: one table, columns exactly `| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |` – one row per contact; the Bible cell has the vocalized quotation in backticks and the reference in the repository's format, e.g. `` `וַיִּיצֶר … עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) ``. Key the rows to exact verses and words. **This is the main product for the commentary**: be complete and precise; say when a parallel rests on a restored word or on George's translation rather than the Akkadian;
- `### Lines shared with other tablets` (what you copied, what differs and why);
- `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and reason);
- `### Lessons for the guidelines` (only what generalizes).

## 8. Limits
- Edit only your tablet's two files and your section of `project.md`. Do not edit `renderings.md`, other tablets' files, the flood or creation corpora, the guidelines, or anything in `sources/`. Do not commit. Do not start sub-agents.
- If you cannot finish the whole tablet, finish the entries you start, leave a placeholder comment `<!-- טרם תורגם: <first>–<last> -->` where the rest belongs, write the clean translation for what is done, and say exactly where you stopped in the progress log and in your final message.
- Your final message to the coordinator: lines done, the main decisions, the strongest parallels found, open decisions, problems.
