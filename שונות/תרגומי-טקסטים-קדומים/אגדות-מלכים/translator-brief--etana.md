# Translator brief: Etana (project 3 of the legends-of-kings corpus; eBL L/1/9), 2026-10-21

A brief for the sub-agent translators of `3-אגדת-אתנה/` (Round 3, run 2). The coordinator's prompt says which part
(ET1–ET4) and which lines are yours. This brief adds the Akkadian / eBL specifics to `translator-brief--kings.md`
(§1 and §2 there bind you too, except where this file differs) and follows the Gilgameš translators' brief
(`../אפוס-גילגמש/translator-brief.md` §3–§4, the eBL entry format).

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – whole. Especially §1 (**two purposes**: the Bible comparison *and* "the soul of the
   ancients", equal in standing), §5.2 (the rules learned; ★ = must keep), §6 (principles; echo control §6.4; false
   friends and cross-corpus decisions §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`; `renderings.md` §0 (the Akkadian inheritance: flood, Gilgameš, law, wisdom corpora), §2 (Akkadian
   grammar), §5–§6, and **§10 (Etana) in full** – binding.
3. `3-אגדת-אתנה/project.md`; and, when your part follows another, **the earlier annotated files in full** (at least the
   `>` lines), and the earlier parts' `project--ET<n>.md`.
4. As models of depth and format: `2-אגדת-הולדת-סרגון/annotated.rtl.md` (Akkadian, this corpus) and
   `../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-VI.rtl.md` (an eBL chapter).

## 1. Your data
`python3 -I kings_tools.py data ET <first label> <last label> <your scratch dir>/data-<part>.md` (labels with the
chapter key: `II.1`, `MA.a+1`, `OBM.b+3`). Per line: eBL's normalization (**N**: copy it exactly as the entry's
backticked line, `|` and `||` included), Foster's English (**T**, rank 3 – read it only *after* your own reading), the
lemmas with eBL's glosses (**L**; the short gloss is the G-stem meaning: check the stem in the chapter's
`../sources/eBL/Etana-*/glossary.md`), eBL's notes, its parallels, every manuscript's ATF, and **"Related lines"**: the
lines of all six versions that eBL marks as parallel or that are near-identical, with the Hebrew already given to them.
eBL dictionary per word: `curl -sS 'https://www.ebl.lmu.de/api/words/<lemma>%20I'` (never bulk-extract; CAD per word
only). The eBL folders are under `../sources/eBL/Etana-*/`.

## 2. The annotated files
One file per eBL chapter, already created with its title and a `<!-- כותרת־נוסח: … -->` line (do not remove it). The
first translator of a file writes, after that line, its Hebrew header paragraphs (as in the Sargon file):
**נוסח הבסיס** (eBL chapter, editors, manuscripts from `manuscripts.md`, date and place), **פירוק**, **מספור** (eBL's
labels; `a+1` = the first preserved line after a gap), **סימנים** (guidelines §6.8; brackets follow the ATF of *this*
chapter's manuscripts), **תרגומים להשוואה** (Foster in eBL; mention Dalley, Kinnier Wilson 1985, Haul 2000 only if you
quote them from eBL's notes – we do not have them), **תגי הקבלה**, one or more paragraphs **on the version itself**
(what it is, how it differs from the others), **מלים שמורות**, **שמות**; never open a paragraph with a bold
`**<number>**`. A later translator of the same file adds one paragraph on its lines. Then `---`, sections
`## <from>–<to>: <Hebrew heading>` (★ names vocalized in headings too), and one entry per eBL label, **every label in
eBL's order, including lines that are only `[ ... ] ...`** (Hebrew `[…]`, or `… […]` as the line has it):

```markdown
### II.45
`atmu | ṣehru || atar | hasīsa`
> האפרוח הקטן, יתיר־התבונה,
- **פירוק:** `atmu` – *watmu* "אפרוח" (eBL: "hatchling"); `ṣehru` – *ṣeḫru* "קטן"; `atar` – *atru* "יתיר" (st. constr.); `hasīsa` – *ḫasīsu* "תבונה" (אקוזטיב של הגדרה).
- **תרגומים:** Foster: "The littlest fledgling, exceedingly wise," – …
- **הקבלה:** [equivalent] `אֶפְרֹחִים אוֹ בֵיצִים` (דברים כב:ו) – … (only real contacts; "הצעה שלנו" for our own proposals)
- **הערות:** the line on its own terms (the epithet is Atra-ḫasīs's name: the wise child …)
- **הערת שוליים:** (optional) one sentence the clean translation should carry as a footnote (a few per hundred lines).
```
(An illustration of the format; the Hebrew of II.45 is fixed in renderings §10.3.)

## 3. Rules (★ = learned the hard way; guidelines §5.2)
- ★ **Unvocalized, plene, from the first line.** Vocalize only names at their first occurrence in your file, ambiguous
  words, archaic forms, and the ★ names and traps (renderings §1, §6, §10.1: `אֵתָנָה`, `שַׁמַשׁ`, `שֶׁמֶשׁ`, `אָנוּ`,
  `סִין`, `אִשְׁתַּר`, `שַׁכַּן`, `אִט` / `אִטִּים`, `רֵעַ`, `אֵלִי` / `אֵלַי` …). A regex that strips niqqud keeps the
  maqaf: `[֑-ֽֿ-ׇ]`.
- ★ **Translate the Akkadian, not Foster.** Parse every word in **פירוק** (lemma, stem, preterite / perfect / present /
  stative / precative / imperative, person, ventive, subjunctive, *-ma*); do not trust a lemma (eBL has slips): parse
  the form yourself and say when you depart. Then read Foster and record each disagreement. Foster's English
  manufactures echoes ("tower", "not yet", "holy day", "disgrace", "heir", "pit", "abomination", "Netherworld"): check
  each against the Akkadian.
- ★ **Read the transliteration before believing any brief, including this one and renderings §10**: the briefs say
  "look for", never "translate as". If the tablet does not have what §10 says, follow the tablet and report it.
- ★ **Reserved words** (renderings §5, §10.4; checked by `verify ET` against the eBL lemma): never a reserved word in a
  `>` line without its licensing lemma; name the biblical word in **הקבלה**. **Grep the `>` lines of all corpora before
  fixing a new Hebrew word** (`python3 -I kings_tools.py grep all '<regex>'`), not only the renderings tables:
  one Akkadian word = one Hebrew word across the corpora, and no Hebrew word for two Akkadian words.
- ★ **Formulas and repeated lines** (renderings §10.3): copied character for character (punctuation too). Before a
  repeated line, run `python3 -I kings_tools.py pars ET <from> <to>` and copy the earlier Hebrew; vary only where the
  Akkadian varies (person, tense, dialect, an added word) and say so. **Command → execution in the command's words and
  order.** **The versions of one scene** (OB, MA, SB): identical Akkadian = identical Hebrew; a different word in one
  version = a different Hebrew word (each language precedent kept); the apparatus says what each version keeps,
  changes or lacks (guidelines §5.2, "Two versions of one story").
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show בראשית "יא ד"`),
  never from memory, in notes too; quote it vocalized in backticks followed by `(ספר פרק:פסוק)`; then
  `python3 -I ../tools/check_bible_quotes.py <your files>` and fix every mismatch. Keep the `-` of Psalms and Proverbs.
- **Brackets** (guidelines §6.8) follow the ATF of the line's manuscripts in this chapter: a word whose root is broken
  in all of them is `[ ]`; eBL's restorations are eBL's (say so where they carry a parallel: guidelines §5.2,
  "Restorations can carry a parallel"); `[…]` a lost stretch; `…` an unread sign or a word left untranslated; `( )`
  added; `?` uncertain reading; `*נטוי*` uncertain translation (Foster's italics are *his* uncertainty: decide your own).
  A word in N's round brackets (only in some manuscripts) is not translated; the note names it. Variant
  reconstructions: translate the main one, give the variant in the apparatus.
- **Grammar:** renderings §2 (Akkadian) and §10.2. No vav-consecutive. Gtn = iterative, never `שוב`.
- **One line = one Hebrew line**; keep the caesura (`||`) as a half-line break in the Hebrew where natural (comma or
  dash), and the order of images.

## 4. What to look for (both purposes; "look for", never "translate as")
- **Bible:** Gen 11:1–9 (a city, a tower?, "to heaven", "a name" – *šumu* = name and offspring); Gen 10:8–12 (kingship
  and Kiš/Cush?); Gen 2:4b–5 (the "when there was not yet" opening); the barren wife and the plant of birth (Gen
  11:30; 25:21; 29:31; 30:1–2, 14–16, 22–23; 1 Sam 1); Deut 32:11, Isa 40:31, Obad 1:4, Isa 14:12–15, Ezek 17, Job
  39:27–30, Prov 30:19 (the eagle, its nest, its height, its fall); the serpent of Gen 3 (cunning; `חַיַּת הַשָּׂדֶה`)
  and of Num 21; the oath of friends before a god and the boundary (Gen 21:22–32, 26:28–31, 31:44–54); the net and pit
  of the righteous judge (Ps 7:16, 9:16, 35:7–8, 57:7, 141:10; Ezek 12:13; Hos 7:12); the pit and the brothers (Gen
  37:20–24); the bird's nest law (Deut 22:6–7); the dreams and their interpretation (Gen 28:12–17, 37, 40–41); the
  ascent to heaven and the gates of heaven (Gen 28:17; 2 Kgs 2:11); the throne with lions (1 Kgs 10:18–20); Šamaš as
  judge (Gen 18:25); "remove my disgrace" (Gen 30:23); the speech of birds (Qoh 10:20).
- **The soul of the ancients:** kingship as a gift of the gods "come down from heaven", and the city before the king;
  Ištar seeking a shepherd; Šamaš the sun-god as judge of oaths, his net as wide as the earth; an oath between animals
  as a treaty; the betrayal of a friend and its punishment; the wise child; the serpent's grief; sacrifice and
  incense, dream-interpreters, the ghosts (*eṭemmu*) honoured – a king who has done everything and has no son; why a son
  is a "name" (who will pour water for the dead); the eagle as a ride to heaven (seals of the 3rd millennium show it);
  the earth seen from above shrinking into a garden bed and the sea into a trough; fear of height; the gates of the
  great gods; Ištar enthroned with lions; Etana in the netherworld afterwards (Gilgameš VII; the funerary texts).
  Explain even where there is no biblical parallel. **[absent]** and **[divergence]** are findings too.

## 5. Before you finish your part
1. Three review passes over your lines (fidelity; consistency with renderings and the earlier Hebrew, across the
   versions; Hebrew read aloud), each a separate read-through.
2. `python3 -I kings_tools.py verify ET` – no problem in your lines (notes about lines not yet drafted are fine);
   `python3 -I ../tools/check_bible_quotes.py <your files>` – clean.
3. Write **`3-אגדת-אתנה/project--<PART>.md`** (not `project.md`: parts may run in parallel): your progress and passes;
   `### Parallels index (<PART>)` (PART = ET1 … ET4) as a table with exactly the columns
   `| Line | Source | Hebrew rendering | Bible | Tag | Comment |` (Line = the full label, e.g. `II.142`; Bible = the
   vocalized verse(s) in backticks followed by the reference); **key findings** (Bible; and the ancient mind), a few
   sentences each; **open decisions** (numbered; decide minor ones yourself, the user's rule); **Proposals for the
   corpus renderings** (every new term or formula a later part needs, with the Hebrew strings exactly as you wrote
   them: `Source | Hebrew | Tag | Notes | Lines`).
4. Do **not** edit `renderings.md`, `corpus.md`, `parallels-index.md`, the tools, the guidelines, `project.md`, any
   other project, or another part's lines. Do not commit. Leave no background job running. Your final reply: what
   you translated, the checks' results, the key findings, the open decisions, and anything skipped or uncertain.
