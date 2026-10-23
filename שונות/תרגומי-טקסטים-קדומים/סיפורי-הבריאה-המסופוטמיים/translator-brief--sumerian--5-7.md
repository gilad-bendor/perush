# Translator brief: projects 5–7 of the creation corpus (Round 3, run 1, 2026-10-21)

The Farmer's Instructions (ETCSL 5.6.3, project 5), the Debate between Hoe and Plough (5.3.1, project 6) and the Debate between Summer and Winter (5.3.3, project 7). **The three texts are drafted one after another, one translator per text, strictly one at a time** (guidelines §5.1, 2026-10-22: quotas apply in the cloud too): Summer and Winter first, then Hoe and Plough, then the Farmer's Instructions. The coordinator's prompt says which text is yours. (A first, parallel launch on 2026-10-21 stopped on a session limit before any line was drafted.)

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` — whole. The rules marked ★ in §5.2 are repeated in §1 below.
2. `translator-brief--sumerian.md` (the common Sumerian brief) — **binding, except its §4 and §5, which this file replaces**.
3. `corpus.md`; `renderings.md` §0–§8, and **§9 (fixed for this run: binding, checked by script)**.
4. `2-טקסטי-בריאה-ועדן/renderings.md` §1–§2 and its Text 4 (Song of the Hoe) and Text 5 (Grain and Sheep) rows; skim `2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md` and `3-הציפור-והדג/annotated.rtl.md` (the models for format, header and depth of apparatus; the two other debates of the corpus).
5. Your project's `project.md` (scope, sources, **what to look for**) and `renderings.md`.

## 1. The ★ rules (guidelines §5.2), in short
- Draft **unvocalized, in plene spelling, from the first line**; vocalize only names at their first occurrence, ambiguous words and archaic forms (and the names always vocalized: Utu `אוּתוּ`, Uttu `אוּטּוּ`, Inana `אִינַנָּה`, Magan `מָגָן`, Urim `אוּר`, Sumer `שׁוּמֶר`, *me* `הַ־מֶה`). A regex that strips niqqud must keep the maqaf: `[֑-ֽֿ-ׇ]`.
- **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show בראשית "ח כב"`), never from memory, notes included; write quotations as `` `…` (ספר פרק:פסוק) `` (the reference in parentheses right after the backticks), exactly as `../../../תנך-מנוקד/` has it; run `check_bible_quotes.py` on your file and fix every mismatch.
- **Reserved words** (corpus §6.5 and §9.6) are checked by script (`python3 -I sumerian_tools.py verify <KEY>`): the run fails if one slips in. When a gate trips on an innocent word, choose another Hebrew word; if that is impossible, say so in "Open decisions" (the coordinator widens the gate).
- **Fix the Hebrew of every formula, refrain and repeated passage before drafting it**: find it in the transliteration first (`python3 -I ../tools/sumerian_workbench.py conc '<regex>'`); the debate formulas are fixed in §9.5.
- **Grep the `>` lines of all earlier files before fixing any new Hebrew word** (`python3 -I sumerian_tools.py grep all '<regex>'`; for the other corpora, grep their annotated files). A word that occurs in more than one of the three texts (list: `translator-brief--sumerian--5-7--shared-lemmas.txt`, columns FI / HP / SW) and is not in §9 must be grepped in the annotated files of the texts drafted before yours (`7-…`, then `6-…`): what is there binds you, unless you propose otherwise in "Proposals". If yours is the first of the three, record every such word you fix in "Proposals" so that the next translator can follow it.
- **The rank-3 translation (ETCSL) is the main source of false echoes; read the transliteration before believing any brief, this one included.** The "look for" lists below say where to look, never how to translate.
- **Re-check your project's renderings table against your drafted lines before you finish** (translators fix the line and forget the table).

## 2. Your file
- One file, `annotated.rtl.md`, in your project folder, in the format of `translator-brief--sumerian.md` §2 (Hebrew header paragraphs, `---`, `## <from>–<to>: <heading>` sections, one `### <label>` entry per ETCSL line, the transliteration copied exactly in backticks, one `>` line, then the bullets **פירוק**, **תרגומים**, **הקבלה**, **הערות**, optional **הערת שוליים**).
- **Write it in sections and save after each section** (a cloud VM can be reclaimed, and a quota stop can end your run at any moment): first the header and the first section, then section by section, and note in `project.md` "Progress" which lines are drafted. Do not wait to the end to write. If you are resumed after a stop, start from what is on disk.
- Lines ETCSL leaves untranslatable or that are wholly lost (`X X X`, `[…]`) still get an entry: `> […]` or `> … …`, with a short note.
- Every **הערות** that explains the line on its own terms counts as much as a parallel: the agricultural year and its work, the tools and the animals, the gods of the fields, the school and its humour, the court, what an ancient hearer would have heard (guidelines §1, the second purpose).
- Write `translation--intro.rtl.md` (§4 below) and run `python3 -I sumerian_tools.py build <KEY>`: the clean `translation.rtl.md` is generated, never edited by hand.

## 3. Shared with the other two texts (keep identical; already fixed in §9)
- The formula **`אִכָּרוֹ הַנֶּאֱמָן שֶׁל אֶנְלִיל`** (*engar zid {d}en-lil₂-la₂*): FI 111 = S&W 317.
- The debate formulas (§9.5): H&P and S&W.
- Summer and Winter as seasons in H&P 174–175 (`קַיִץ`, `חֹרֶף`, §9.1).
- The gleaning poor: H&P 45–47, 178A; the barley-gatherers of FI 79–82 (`לָקַט` only for *de₅*, §9.3).
- The plough, the hoe, the oxen, the yoke, the furrow, the tooth, the threshing (FI and H&P): §9.3.

## 4. The reader's introduction (`translation--intro.rtl.md`)
`# <Hebrew title>` and 4–8 short paragraphs in Hebrew for a reader who knows no Sumerian: what the text is and when it was written (OB copies, c. 1800 BCE, the schools of Nippur and Ur; for S&W the Ur III king Ibbi-Suen); the edition and the brackets; **how to enter its world** (FI: the Sumerian farming year on irrigated land, the plough-team, the gods of the field, a father's instruction as a school text; H&P and S&W: the school debate, its insults as school humour, the verdict and why this side wins; S&W: the two seasons of southern Iraq); and, briefly, why it matters for Genesis (Gen 8:22, 3:17–19, 4:2–8, 9:20), without reducing the text to a "background to the Bible".

## 5. Before you finish
As `translator-brief--sumerian.md` §6: three review passes (each a separate read-through; record them in `project.md` "Progress"); `python3 -I sumerian_tools.py verify <KEY> --strict` clean; `python3 -I ../tools/check_bible_quotes.py <your annotated file> <your translation--intro file>` clean; the parallels index in `project.md` under `### Parallels index (<Text name>)` with exactly the columns `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |`; your terms in the project's `renderings.md`; numbered open decisions; proposals for the corpus renderings. **Edit only the files of your own project folder** (never `renderings.md`, `corpus.md`, `parallels-index.md`, `sumerian_tools.py`, the guidelines, or another project). Do not commit (the coordinator commits). Final message: lines done, the strongest findings (for the Bible, and for the ancient mind), the open decisions, problems.
