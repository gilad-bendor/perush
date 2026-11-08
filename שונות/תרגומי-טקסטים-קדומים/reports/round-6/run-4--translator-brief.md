# Round 6 run 4 – the translators' brief (2026-11-07)

Three Sumerian texts in three corpora, one coordinator, translators **one at a time** (range A) or on independent
texts (range B). This brief adds to the corpus briefs; it never replaces them. Your prompt names your text and your
exact line range.

| Key | Text | Corpus / project | Files | Corpus brief | Tool (run from the corpus folder) |
|---|---|---|---|---|---|
| DD | Dumuzid's Dream (ETCSL 1.4.3), 264 entries | `העולם-התחתון/6-חלומו-של-דומוזיד/` | `annotated-1.rtl.md` (1–130), `annotated-2.rtl.md` (131–261) | `העולם-התחתון/translator-brief--netherworld.md` | `netherworld_tools.py verify DD`, `lines DD FROM TO` (ETCSL + ORACC lemma/morph), `grep all` |
| LSU | The Lament for Sumer and Urim (ETCSL 2.2.3), 524 entries | `קינות-על-ערים/3-הקינה-על-שומר-ואור/` | `annotated-1.rtl.md` (1–284), `annotated-2.rtl.md` (289–519) | `קינות-על-ערים/translator-brief--laments.md` | `lament_tools.py verify LSU`, `lines LSU FROM-TO`, `grep all` |
| P2, P3 | Proverb collections 2 (+6) and 3, completed (ETCSL 6.1.02, 6.1.03): 214 + 287 new entries beside the 92 + 60 drafted in Round 2 | `קולות-היום-יום/2-משלים-שומריים/` | `annotated-c2.rtl.md`, `annotated-c3.rtl.md` | `קולות-היום-יום/translator-brief--everyday.md` | `kol_tools.py data P2 FROM TO`, `verify P2 P3`, `grep every`, `lookup` |

## 0. Read first (binding, in this order)
1. `translation-guidelines.md` – whole (§1 the purpose: **the essence of the ancients**; §5.2 the rules learned – the ★
   rules below are the minimum; §6; §6.8 brackets; §7.2 the annotated format).
2. Your corpus's `corpus.md`, `renderings.md` (all binding), the corpus brief (table above), your project's
   `project.md` (and, for the proverbs, `renderings.md` of the project and the Round 2 entries in your file).
3. The model: the corpus's finished project nearest to yours – the Lament for Ur for LSU (`1-הקינה-על-אור/`), Inana's
   Descent for DD (`2-ירידת-אינאנה/`), collection 1 for the proverbs (`annotated-c1-*.rtl.md`).

## 1. ★ Rules (guidelines §5.2)
- **Draft unvocalized, in plene spelling, from the first line**; vocalize only names at their first occurrence,
  ambiguous words, archaic forms, and the names marked ★ (always: Inana `אִינַנָּה`, Utu `אוּתוּ`, Urim `אוּר`, Sumer
  `שׁוּמֶר`, An `אַן`, Umma `אוּמָּה`, Bau `בָּאוּ`, Dumuzid `דּוּמוּזִי`, Belili `בֵּלִילִי`, *me* `הַ־מֶה`, Šara `שַׁרָא`,
  Ḫuwawa …). Check your first saved section for niqqud before going on.
- **The transliteration line is already in your file** (generated from the base text): never retype it, never edit it.
  Replace only `> טרם תורגם` and add the apparatus bullets. (Proverbs: entries written `` `@` `` are filled by
  `kol_tools.py fill FILE`.)
- **Print every Bible verse before quoting it** (`python3 -I tools/check_bible_quotes.py --show איכה "א א"`), quote it
  exactly as `../../תנך-מנוקד/` has it, write `` `…` (ספר פרק:פסוק) ``, never from memory; run
  `check_bible_quotes.py` on your file before you finish.
- **Reserved words**: the corpus `renderings.md` lists them; the verifier enforces them. Use the Bible's word only for
  its real counterpart. Never `קינה`, `איכה`, `כבוד`, `שכינה`, `גלות`, `תמוז`, `שאול` (the netherworld), `ברא`,
  `תהום`, `עולם` in a `>` line.
- **Fix every formula before drafting it, and copy repeated lines exactly.** Run
  `python3 -I tools/sumerian_rel.py <your annotated file>` (from the folder root) at the start: it lists, for every
  line, the near-identical lines already translated in any corpus, with their Hebrew. Where the Sumerian is the same,
  the Hebrew is the same (a difference the source justifies is allowed, and noted). Inside your text, fix the first
  copy of a refrain and copy it (`--self` lists the internal repeats once the first copy is drafted).
- **Grep the `>` lines of all earlier files before fixing any new Hebrew word** (`<tool> grep all '<regex>'`,
  `kol_tools.py lookup '<sumerian regex>'`): one Sumerian word = one Hebrew word across the folder; two source words
  never share one Hebrew word.
- **Read the transliteration before believing ETCSL's English, or this brief.** ETCSL's English is rank 3: read it
  after forming your reading; check every negation, tense, modal prefix (*ḫe₂-* affirmative or wish; *na-* prohibitive
  or affirmative), copula and "righteous / exiled / created / glory / cursed" against the Sumerian. Each corrected
  echo is a finding.
- Brackets: the partial-restoration rule – a word whose root is broken is in `[ ]`; a restored ending or a single
  sign of a long word is not bracketed (fidelity reviewers spent most of their fixes on brackets in earlier runs).

## 2. Per text
- **DD.** The netherworld corpus's names and Inana's Descent's Hebrew bind (the *galla* = `שֵׁדֵי־גַּלָּה`
  as there (`שֵׁדֵי־גַּלָּה קטנים`, `… גדולים`), never `הגלה`, which reads "exiled"). Lines 111–118 = Inana's Descent 297–305B (the *galla* list):
  copy the Hebrew exactly. The waking formula 17–18 has precedents in Lugalbanda (LC 361–362) and Ḫuwawa (HA 72–73,
  HB 85): follow them where the Sumerian is the same and note the difference where not. The three escapes repeat a
  prayer to Utu (163–177 = 190–202 = 225–237, with variants): fix the first, copy the others. Names to fix at their
  first occurrence (propose in `project.md`, the coordinator merges): Ĝeštinana, Duttur (*dur₇-tur*), Kubireš,
  Old Woman Belili's house, Arali, the *galla* ranks (*gal₅-la₂ tur / gu-la*), the friend (*ku-li*), Ninninna bird.
  The dream (19–40) and its interpretation (41–69) are a fixed pair: each image of the dream is taken up in the
  interpretation – align the Hebrew strings (command/execution rule).
- **LSU.** The Lament for Ur's renderings and refrains bind (`../renderings.md` §3–§5, and `1-הקינה-על-אור/` for every
  shared word: *a-še-er*, *gig*, *muš₃ … de₆*, *ud*, *kur₂*, *du₆*, *en₃-še₃*, *me-li-e-a*, the *kirugu* / *ĝišgiĝal*
  rubrics). The opening (1–57) is one long chain of infinitives and *ḫe₂-* clauses of the gods' decree: keep its
  grammar visible (infinitives `לְ…`, wishes / decrees `ש…` or jussive – choose one pattern and keep it), and keep
  *ĝiš-ḫur* `צוּרָה` (reserved), *nam tar* `גָּזַר גּוֹרָל`, *bala* (the reign as a term of office) by one Hebrew word
  throughout (propose it). Enlil's answer to Nanna (364–370: kingship granted, but not for ever) is the poem's
  theology: the apparatus says what it meant to an Old Babylonian hearer. The cities and temples take the corpus's
  names (renderings §1) – add the new ones to the project's `renderings.md`.
- **P2, P3.** Collection 1 and the Round 2 entries bind (`renderings.md` of the corpus and of the project; the modal
  particles of the wisdom corpus: *na-* `אַל` + future, *nu-* `לֹא`, affirmative *ḫe₂-* `אָכֵן`). `kol_tools.py data P2 FROM TO`
  gives each line with ORACC's lemma + morph and ETCSL's translation of the proverb (at its first line). Several
  proverbs repeat collection 1's or each other's (1.65–1.66 = 2.118–2.119; 1.152–1.153 = 3.9): `sumerian_rel.py`
  finds them; copy the Hebrew. The section headings (`## …`) of the Round 2 selection cover only the selected
  proverbs: **re-cut them so that every proverb is under a heading** (by theme, in base order, a heading at least every
  ~25 entries), keeping the existing entries' Hebrew unless you find an error (record it). Many proverbs are obscure:
  translate the words, mark the uncertain with `?` / `*…*`, and say in **הערות** what the image may mean – never
  smooth an obscure saying into a familiar one.

## 3. Saving, reviewing, reporting
- **Write each section to disk as soon as it is drafted** (a stop must lose at most the section in progress). Never
  commit (the coordinator does). Edit only your own files: your annotated file(s), your project's `project.md` and
  `renderings.md`. Never the corpus files, the tools, the guidelines.
- **Three review passes** over your lines when they are drafted (fidelity; consistency; Hebrew aloud), recorded in
  `project.md` ("Progress").
- `verify KEY` clean for your lines (notes about not-yet-drafted entries are fine); `check_bible_quotes.py` clean.
- In `project.md`, under a heading for your part (`### Part DD1` …): the **parallels index** (`### Parallels index (KEY)`,
  KEY = DD1, DD2, LSU1, LSU2, P2, P3) as a table with exactly the columns
  `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |`; **key findings** (the ancient mind first, then the
  Bible); **open decisions** (numbered, with your ruling); **proposals for the corpus renderings** (the Hebrew strings
  exactly as used).
- Final message to the coordinator (short): lines done; verify and quote-check status; the strongest findings;
  deviations from the corpus renderings.
