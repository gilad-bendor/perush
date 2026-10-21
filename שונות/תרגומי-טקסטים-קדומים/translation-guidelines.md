# Translating Ancient Texts into Hebrew – Guidelines

> **This is a living document**, the starting point for every Claude session that translates an ancient text in this folder, and it should get better with each one. It holds only what a working session needs; the rest lives in sibling files:
> - [`STATUS.md`](STATUS.md) – where the work stands, what is next, the open decisions. **Read it right after this file.**
> - [`sources-registry.md`](sources-registry.md) – §4 (every source we have, where, its licence, how to reach it) and §9 (paid sources). Read it when securing a base text.
> - [`tools.md`](tools.md) – §10, every script and how to run it. Read it before writing a new tool: one may exist.
> - [`history.md`](history.md) – how each run went (the full "Learned on …" accounts, the former §11) and the changelog.
>
> **Every session that learns something reusable must record it, in the right place:** a new source → `sources-registry.md`; a new tool → `tools.md`; a decision that should apply everywhere or a false friend → §6.7 here; a lesson → one line in §5.2 here, and its story in `history.md`; and always a line in the changelog (`history.md`). Keep this file lean: add rules, not stories. Text-specific decisions belong in that text's project folder.
>
> If the git-ignored sources are missing (a fresh clone, a cloud session), restore them first: `python3 -I tools/sources_sync.py fetch` (§8).

---

## 1. Why these translations exist

This folder is part of the `perush` repository: a methodological, allegorical commentary on the Torah (see `פירוש/הקדמה-לפירוש.rtl.md`).
The commentary reads the biblical text word by word and asks of each word: *why exactly this word?*
(See the "reverse-engineering test" in `claude/perush-system-prompt/hebrew/system-prompt--Hebrew--suffix.rtl.md`.)

Ancient Near Eastern texts that the Bible knew, used, or argued with are the strongest external control for that question.
In the Mesopotamian flood story, for example, we can see:
- which details Genesis **kept** (the boat sealed with bitumen inside and out, the birds, the sacrifice, the "pleasing odor"),
- which it **changed** (the order of the birds, the measurements, who closes the door),
- and which it **left out** (the divine assembly, the gods cowering "like dogs", the goddess's lapis necklace, the immortality granted to the survivor).

A deviation from a source the authors evidently knew is exactly the "word that is strange in the surface story" which the commentary looks for.

**The second purpose, equal in standing: the soul of the ancients** (the user's words, 2026-10-19).
The user reads these texts not only as a control for the Bible but for their own sake: to come to know the ancient mind. That means how these people saw the world and their place in it, what they feared and hoped for, how they prayed, mourned, joked, judged and loved.
So a text earns a translation also when it has **no** biblical parallel, if it opens a window onto that inner world: laments, prayers, proverbs, school debates, love songs, letters, omens, incantations.
And the apparatus explains each text **on its own terms** as well: its gods, its rituals, its social world, its images and wordplay, what an ancient hearer would have heard in it. It is not only a list of parallels. A text must never be reduced to a "background to the Bible".

**Therefore the translations serve comparison and understanding first, and literary pleasure second.** Faithful translation serves both purposes alike: the ancient mind lives in exactly the images, repetitions and odd words that a smooth translation would sand away. Concretely:
1. **Fidelity over beauty.** The Hebrew must let a reader who knows no Akkadian see what the text says, word by word: its images, its repetitions, its order.
2. **Echo control** (see §6.4). The Hebrew must not invent parallels with the Bible that the original doesn't have, and must not hide parallels that it does have.
3. **Every uncertainty is visible.** Readers of the commentary are critical readers. A smooth translation that hides a broken tablet or a disputed word misleads them.
4. **Readable Hebrew.** Within those constraints, the translation should read as dignified literary Hebrew, not as a gloss.

## 2. Folder layout and file conventions

A session started by the `קלוד-תרגומי-טקסטים-קדומים` run configuration (`scripts/claude-into-rtl-file--ancient-translations.sh`) runs **in this folder**, with this file as its appended system prompt and without the repo's perush system-prompt (or any repo `CLAUDE.md`).
Paths in this file that start with `tools/`, `sources/` or a corpus folder are relative to this folder. Repo-wide paths (`פירוש/`, `תנך-מנוקד/`, `claude/`) are relative to the repo root, two levels up (`../../`).

```
שונות/תרגומי-טקסטים-קדומים/
├── translation-guidelines.md        ← this file (living)
├── STATUS.md                        ← where the work stands, what is next, the open decisions (read it second; keep it current)
├── sources-registry.md              ← §4 every source we have, §9 paid sources
├── tools.md                         ← §10 every script and how to run it
├── history.md                       ← how each run went, and the changelog
├── domains.txt                      ← the web hosts these sessions need (for a cloud session's network allowlist; §4.6)
├── tools/                           ← reusable scripts (fetchers, converters)
├── הדפסה/                           ← one print stub per translation, mirroring the corpus folders (§7.4)
├── sources/                         ← raw material downloaded from the internet, one folder per SOURCE
│   ├── .gitignore                   ← what is NOT committed to the public repo (see §8)
│   ├── fetch-recipes.tsv            ← how to re-obtain the ignored files (§8); MANIFEST.json ← their checksums (generated)
│   ├── <Source-name>/README.md      ← every source folder has one (format: §2.2)
│   ├── Reference-tools/RESOURCES.md ← catalogue of dictionaries, grammars, APIs
│   └── Comparative-studies/INDEX.md ← catalogue of comparative literature (flood ↔ Genesis)
└── <corpus-folder>/                 ← a group of related texts, e.g. סיפורי-המבול-המסופוטמיים/
    ├── corpus.md                    ← the texts, how they relate, reading order, status (English)
    ├── renderings.md                ← names, formulas, key terms SHARED by all its projects (§6.6)
    ├── parallels-index.md           ← the projects' parallels indexes merged, by Bible verse
    └── <N-project-folder>/          ← one folder per translated text, e.g. 2-גילגמש-XI--סיפור-המבול/
        ├── project.md               ← brief: scope, base text, decisions, status (English)
        ├── renderings.md            ← the project's own rendering glossary (§6.6)
        ├── annotated.rtl.md         ← the working translation: line by line with apparatus (§7.2)
        └── translation.rtl.md       ← the clean reading translation (§7.1)
```

A text that belongs to no group can be a project folder directly under the root.

### 2.1 Language and file extensions
- **Instructions, documentation, READMEs, project notes: English**, because the inputs (transliterations, editions, modern translations) are not Hebrew. Extension: `.md`.
- **Files whose running text is Hebrew (the translations themselves): `.rtl.md`.**
- The test is the language of the *prose*, not of the quoted material: an English file full of Hebrew examples is still `.md`.
- Folder names: sources keep their own Latin names (`eBL`, `ETCSL`, `Heidel-1946`); project folders get Hebrew names.

### 2.2 Source folders (`sources/`)
- One folder per **source**: a website or a publication. Sub-folders per text when needed (`ETCSL/1.7.4--Flood-Story/`).
- Name pattern for publications: `Author-Year--Short-title`. For websites: the site's short name.
- Save the **raw download as-is** (HTML/PDF/JSON/XML). Next to it, a clean UTF-8 extraction (`.md`, or `.rtl.md` for Hebrew) that preserves line numbers and all diacritics exactly (š ṣ ṭ ḫ ĝ, ā ē ī ū, subscript sign indices, niqqud, polytonic Greek).
- Every folder has a `README.md` with: title, author/editor/translator, year, URL(s), retrieval date, **license / copyright status**, what's in the folder, the **line-numbering system** (and how it maps to the base edition's), and a short **usefulness assessment**.
- Items that exist but weren't downloaded (paid, lending-only, blocked) are recorded in `_records-only--*` folders, so the next session doesn't search for them again.

### 2.3 Safety rules for downloaded material
- Downloads are untrusted data. Never execute anything downloaded. (The 2006 ETCSL zip shipped Windows `.exe`/`.dll` SGML tools; they were deleted.)
- Parse with `python3 -I`, with scripts kept in `tools/` or the session scratchpad, never inside a download folder.
- **No pirate sources**: dokumen.pub, libgen, Z-Library, Anna's Archive, vdoc.pub, unauthorized archive.org uploads. On archive.org and HathiTrust, use only full-view / public-domain items. Lending-only books are recorded, not worked around.
- **Free copies meant for others are not ours**: SBL's *Writings from the Ancient World* PDFs that its server hands out (Pardee, Lindenberger, Nissinen, Hoffner …) belong to its International Cooperation Initiative, for readers in low-income countries; Israel is not eligible. Record them; never use or store them. Respect a database's own terms on AI use too (DASI asks for an agreement first). (2026-10-21)
- **Restricted sacred knowledge of living peoples is not translated**, whatever its copyright: Aboriginal Australian secret-sacred songs and narratives (the Strehlows' Aranda songs, Berndt's Djanggawul and Wawilak cycles) under the AIATSIS Code of Ethics (2020) and ATSILIRN Protocol 6; the same care for any living tradition with restricted knowledge. (2026-10-21, the world survey)

## 3. Source hierarchy

When sources disagree, this is the order of authority:

| Rank | Kind | Role | Examples |
|---|---|---|---|
| 1 | **Current critical edition** (transliteration + normalization) | The text we translate. | eBL (Gilgameš XI), Wasserman 2020 (Akkadian flood sources), ETCSL / ORACC (Sumerian) |
| 2 | **Dictionaries and grammars** | Determine what each word can mean. | eBL dictionary (= CDA), CAD, ePSD2; see `Reference-tools/RESOURCES.md` |
| 3 | **Modern scholarly translations** (post-2000) | Check our understanding. Never copy them. | George (eBL, Penguin), Wasserman 2020, Helle 2021, Maul 2005, Wasserman & Cohen 2026 (Hebrew) |
| 4 | **Philological commentary** | Resolves cruxes. | George 2003 vol. 2 (via the eBL notes), NABU notes, Wasserman 2020 commentary |
| 5 | **Older translations** (pre-1990) | History of interpretation, or literal checks only. Their readings are often outdated. | Heidel 1946 (literal, with Genesis comparisons), Campbell Thompson 1928/30, Jensen 1900, Ungnad 1911 |
| 6 | **Literary Hebrew translations** | **Register reference only**, consulted *after* drafting. | Tchernichovsky 1924 (translated from German; old readings) |

Rules:
- Translate from rank 1, using rank 2. Consult rank 3 **after** forming your own reading of the line, to catch errors – not before, so as not to anchor on it.
- When our rendering departs from all rank-3 translations, say so in the apparatus and justify it.
- Never reproduce a copyrighted translation (especially a Hebrew one) beyond a short quotation inside a note, with attribution.

## 4. Source registry – what we have
Moved to [`sources-registry.md`](sources-registry.md), with its numbering kept (§4.1–§4.6; §4.6 = the access notes: what works from a Claude session, which hosts block scripts). Read it before searching for a base text: the source may already be here, under `sources/`.

## 5. Workflow for a new text project

1. **Scope.** Define the text, version and line range. Create `<project-folder>/project.md`: scope, base edition, line numbering, the parallels that matter for the commentary, open decisions.
2. **Secure the base text.** Search the corpora first: eBL (`python3 -I tools/ebl_fetch.py --list`), ORACC zips, ETCSL, SEAL. Only then look for printed editions. Save everything under `sources/` per §2.2 and **add it to `sources-registry.md` (§4)**. If it is git-ignored, add its recipe to `sources/fetch-recipes.tsv` (unless a built-in rule of `tools/sources_sync.py` covers it) and run `python3 -I tools/sources_sync.py snapshot` (§8).
3. **Gather 2–4 modern translations** (rank 3) and the philological commentary (rank 4) for the same lines.
4. **Build the rendering glossary** (`renderings.md`) for recurring words, names and formulas *before* drafting (§6.6). Extend it as you go.
5. **Draft line by line** into `annotated.rtl.md` (§7.2). For each line:
   1. Read the normalization, the lemmas and the notes (in eBL: `reading-edition.md`).
   2. Parse every word: lemma, **stem** (G/D/Š/N/Gt…), tense or aspect, ventive, subjunctive, `-ma`. The eBL short gloss is the lemma's main (usually G-stem) meaning, so check the stem in `glossary.md` or the dictionary.
   3. Form your own rendering.
   4. Then compare it with the modern translations, and record disagreements.
   5. Run the echo check (§6.4).
6. **Three review passes**, each a separate read-through of the whole text:
   - **(a) fidelity:** every content word accounted for; nothing added outside ( ); brackets match the edition.
   - **(b) consistency:** formulas and repeated lines rendered identically; names per §6.5; `renderings.md` respected.
   - **(c) Hebrew:** reads naturally aloud; register even; no unintended biblical calques.
7. **Produce `translation.rtl.md`** from the annotated file (§7.1). Verify by script that its lines equal the annotated file's `>` lines.
7a. **Run `tools/check_bible_quotes.py`** on every file, and fix every mismatch.
8. **Update the guidelines** (where each kind of knowledge goes: see the box at the top of this file).
9. **Final step of every translation: create its print stub** (§7.4).

For long texts, work in sections (e.g. 20–40 lines per session) and record progress in `project.md`.

### 5.1 Pace: local sessions vs. Claude Cloud (the user's words, 2026-10-21)
- **Local sessions** (on the user's Mac, on the user's normal plan) are quota-limited. Run sub-agents strictly **one at a time**, and tell every sub-agent to run its own sub-agents one at a time too. Wall-clock time doesn't matter there.
- **Claude Cloud sessions** (Claude Code on the web, started through the session operator) currently run on a special allowance: **expect no quotas, delays or limits.** There:
  - work at full speed, and don't throttle "to save quota";
  - **parallel sub-agents are allowed** where the work splits cleanly: different texts, or different corpora. Inside one corpus, keep the safeguards that made parallel work consistent (§5.2, "Parallel texts of one corpus"): fix the shared renderings *before* the parallel drafting, never let two agents edit the same file (only the coordinator edits `renderings.md` and the indexes), and harmonize by script at the end;
  - sequential chains remain right *within* one long text, where each translator must see the Hebrew of the earlier repeated lines (§5.2). Speed comes from running independent texts side by side, not from cutting the review passes;
  - **commit and push to branch `main` after every milestone** (the user's instruction, 2026-10-21; cloud sessions only). A milestone is a source secured, the renderings fixed, a translator's section merged, a review pass done, a project or run finished, `STATUS.md` updated. Work on `main` itself, not on the session branch the cloud creates (`git push origin main`). A cloud VM can be reclaimed at any time, so whatever is not pushed can be lost. Parallel agents commit only their own files (`git commit -- <paths>`, never `-A`, never `docs/`), and `git pull --rebase origin main` before pushing when another agent has pushed first.
- **Sub-agents cannot start sub-agents** (seen 2026-10-21, the first parallel cloud round): the three run coordinators, started as sub-agents of the lead session, had no Agent tool, so no coordinator could start translators. Each coordinator translated its texts itself, one text or section at a time, with every safeguard kept (renderings fixed first, verify script, three passes, `check_bible_quotes.py`). To get real translator chains, the session itself must be the coordinator (one run per session), or the lead must start the translators directly and hand their output to the coordinators.
- **The shared checkout and a rewritten `origin/main`** (2026-10-21): when the user rewrote `main`'s history mid-run (`docs/` moved to its own branch), every push from the shared checkout was rejected. The lead replayed the runs' commits onto the new `origin/main` in a separate worktree (`git worktree add --detach <scratch> origin/main`, `git cherry-pick <old-base>..main`, check that the trees differ only as expected, `git push origin HEAD:main`), while the coordinators kept committing locally.
- **Web search is budgeted per session** (seen 2026-10-21, the world survey): about **200 `WebSearch` calls in all, shared by the session and every sub-agent**. Ten parallel research agents used it up within about 25 minutes; some got only 6–10 searches. Direct fetches (curl, WebFetch, git, catalogue APIs) were not limited, and searching worked again for the lead later the same session. So tell each research agent its share of searches, and to verify by fetching rather than searching.
- **If a cloud session does hit a quota, a rate limit or a forced delay** (an HTTP 429, "session limit", a usage cap, throttled agents), record it here at once: what happened, when, and after how much work. Then fall back to one agent at a time. This section must describe what is actually true.

### 5.2 Rules learned (distilled; the full accounts, with examples, are in `history.md`)
Each rule was learned the hard way on a real run; the run is named in brackets, and `history.md` tells the story (H1: the first corpus; H2: the per-run "Learned on …" blocks; H3: the former §11). **Every translator's brief must carry the rules marked ★.**

**Drafting**
- ★ **Draft unvocalized, in plene spelling, from the very first line**; vocalize only names (first occurrence), ambiguous words and archaic forms afterwards. Stripping niqqud from a vocalized draft leaves defective spellings, and translators who drafted vocalized had to rewrite whole tablets (five runs). A regex that strips niqqud must keep the maqaf: `[֑-ֽֿ-ׇ]`, not `[֑-ׇ]`. [first corpus; creation 2; wisdom]
- ★ **Write the transliteration as `` `@` `` and let the corpus tool fill it from the base text** (`kol_tools.py fill`): retyped transliterations differed from the base; filled ones never do. [everyday voices]
- ★ **Print every Bible verse before quoting it**, never quote from memory; then run `check_bible_quotes.py`. This holds for notes too, even a passing allusion (two remembered verses slipped into notes) [netherworld]. Quote the text exactly as `תנך-מנוקד/` has it, including its ketiv (Deut 22 `נַעֲרָ`). It sees only quotations followed by a reference, so write `` `…` (Book ch:v) `` – a quotation written `` `…`, Book ch:v `` goes unchecked (17 did in one run). [Gudea; everyday voices]
- **Describe a defect or a state as the original describes it**, and put the biblical term (`עִוֵּר`, `עֵירֹם`) in the apparatus. [creation 2]
- **Keep idioms literal where Hebrew has them** (treaty idioms such as `לֵבָב שָׁלֵם עִם`, `גָּלָה אֹזֶן`, `נָשָׂא רֹאשׁ`; the elliptic oath `אם אתם … לא תנצרו`): the match with the Bible then becomes visible. Particles can be cognate where content words are not (*lūman lā* = `לוּלֵא`). [EST; wisdom]
- **Read colophons and catch-lines as data** (KAR 4 ends with the first line of Atra-ḫasīs). [creation 2]

**Reserved words: keep the translation from manufacturing parallels**
- ★ **Reserve the Hebrew word of every key Bible comparison for its real counterpart only**, fix the list before the first line, and check it by script with the lemma (or Sumerian word) that licenses each hit. Examples: `קָרָא` only for *nabû* "to name"; `טוֹב` only for *ṭābu* / *dug₃*; `שׁוּב` only for *târu* / *gi₄*; `טיט`, `עפר`, `נחש` only for their cognates. Avoid words that share the reserved root's letters (`נחת` beside `נח`, `לִקְרַאת` beside `קָרָא`). [Enūma eliš; Gilgameš]
- **When the Bible's own vocabulary is the natural Hebrew for the genre** (a treaty ↔ Deuteronomy, a lament ↔ Lamentations, a building text ↔ the Tabernacle, wisdom ↔ Job), reserve that vocabulary outright (`בְּרִית`, `אֵיכָה`, `קִינָה`, `מִשְׁכָּן`, `תַּבְנִית`, `כָּבוֹד`, `צדיק` …). Gate the words whose real counterpart exists (`צורה` only for *ĝiš-ḫur*, `פשר` only for *bur₂*). The [equivalent]s, [divergence]s and absences then appear in the apparatus as findings. [EST; laments; Gudea; wisdom]
- **Grep for reserved letter strings, not only reserved words**: a root hides inside other words (`ברא` in `בראותו`, `שבת` in `לשבת`, `ברך` in `דברך`, `נכר` in `נכרת`, `קדש` in `מקדש`). Anchor gates at a word start. License each gate by **every spelling** of its source word in the base text (ETCSL and ORACC spell differently), and allow final letters and plene spellings. Test every gate on a sample line before the first run, on the bracket-free transliteration too (`e₂-⸢gal⸣`); unanchored gates miss and over-match (`מקינה` contains `קינה`, `תשובה` an unanchored `תשוב`); anchor at word start *and* end, and test on the genre's commonest words (`שבו`, `היינו`, `ברוך`, `מגן` tripped the gates). [creation 2; Bird and Fish; laments; Gudea; legends of kings]
- **Check the class of a lemma in the whole text before reserving a word for it**: grep the normalization of the whole text first (LH has *šipṭu* once; *mâtu* Š, the cognate of `הֵמִית`, nine times). [LH]
- **One source verb = one fixed Hebrew verb, tracked through the whole text.** The strongest finds were verbal pairs that English translations hide: Gen 3:19's `לָקַח` / `שׁוּב` in Gilg. XI 300, Ex 4:11's `שָׂם`, the one goring verb of LH against Exodus's two. Look at the **distribution** of each key verb (*šubšû* used for exactly the two objects of `בָּרָא`). Ban paraphrases that use a reserved word (`שוב ושוב` → `פעם אחר פעם`). For each version of a scene, check every verb of the Bible's scene against the source's lexicon: the English hides *kalû* / `כלא` and *nâḫu* / `נח`. [creation 1–2; LH; Gilgameš; §11]
- **Names and epithet lists are dense with hidden echoes** (*Nannaru* "luminary" ↔ `הַמָּאוֹר`; the fifty names: `הוֹצִיא`, `יֶרֶק`, `דֶּשֶׁא`, `זֶרַע`, `אֵד`). **Law collections hide their differences from the Torah in the small words**: the passive `יהרג` against `מוֹת יוּמָת`, "like" against `תַּחַת`, the class terms. Fix these before the first line, and check them by script. [Enūma eliš; LH]
- **Keep the kind-word and the motion-word apart where the commentary's dictionary does** (*mušen* `צִפּוֹר`, *dal* "fly" `עָף`). [Bird and Fish]

**Consistency: formulas, repeated lines, renderings**
- ★ **Fix the Hebrew of every formula, refrain and long repeated passage before drafting it.** Find the formula in the *transliteration* first (`sumerian_workbench.py conc`, eBL `Parallels:`), not in the literature's paraphrase. Fix its split forms too, since line breaks fall inside formulas. Check every pre-set formula against the transliteration of its first occurrence: the literature's *ezen nu-tuku* for proverbs 1.152–153 is not on the tablets. Let the first translator revise it with a reason, then enforce it by regex, written for plene and defective spellings and for dialect forms. [Enūma eliš; EST; Bird and Fish; laments]
- ★ **Grep the `>` lines of all earlier files (as strings, and by lemma) before fixing any new Hebrew word**, not only the renderings tables (`laws_lookup.py`, `wisdom_tools.py lemma`, `… grep`). Collisions are otherwise found only at review: two source words in one Hebrew word, or one source word in two. Precedents often live only in annotated lines (*karru* `מעטה אבל` in Adapa). [Enūma eliš; EST; laws; netherworld]
- **Formula checks must allow gender, number, a conjunction (from a preceding *-ma*) and final letters** (`מחץ` / `מחצ`, `ישלם` / `ישלמו`). Write them that way from the start. [LH]
- **A formula takes the same Hebrew across languages**: the Sumerian takes the Hebrew of its Akkadian equivalent (*tukum-bi* = *šumma* = `אם`; *u₈* = *laḫru* ~ `רָחֵל`). Cross-language cognates then become visible. Unless the Sumerian word is wider: *ḫi-li* (= *kuzbu*) describes a mother's charm, so it takes `חֵן`; record such splits. [laws; laments; everyday voices]
- **Repeated lines:** compare their normalizations and lemmas, after stripping brackets and quotation marks. eBL's `Parallels:` field and its "=" have false links: inspect them, and use identical normalizations as a second net. Brackets follow each copy's own manuscripts. Differences that the source justifies are allowed and listed. [Enūma eliš; Gilgameš; Bird and Fish]
- **Reversal, promise/fulfilment and command/execution passages**: fix the first copy's Hebrew (nouns and verbs) and give the later translator a table of the earlier Hebrew *strings*. The cure then reads as the undoing of each symptom, and the fulfilment as the promise "in the same words", which is itself a finding. Read the later copy's source first, so the first copy doesn't use a word the later one needs. [wisdom; Gudea]
- ★ **Re-check the pre-draft renderings table against the drafted lines before the hand-off**: translators fix the line and not the table, so six rows of the netherworld renderings no longer matched the Hebrew. Diff every pre-set row against its first drafted occurrence. [netherworld]
- **In command / execution chains, align the execution's word order with the command's**, not only its words (Inana's Descent: six lines had the same words in another order). [netherworld]
- **A fixed passage's plene form is fixed once**, and later copies copy that first copy. [Gilgameš]
- **A cross-language pun** (the twelve gates' Sumerian names) needs a method fixed before its first instance. [wisdom]

**Reading the sources critically**
- ★ **The rank-3 translation is the main source of false echoes.** Check its tenses, lemmas and restorations against the transliteration and the morphology. ETCSL's "not yet", "created", "righteous", "exiled", "exactly as he had been told"; eBL's "firmament"; Foster's "[he shall rest]" each manufactured a Bible parallel. Each corrected reading is a finding: say so in the parallels index row. [Enūma eliš; creation 2; Bird and Fish; laments; Gudea]
- ★ **Read the transliteration before believing any brief, including the coordinator's**: several briefs quoted the literature's paraphrase or named words the tablet doesn't have (the plan's *kupru* in the Sargon legend is *iṭṭû*; Enmerkar's "heavy mouth" is one sign reading, and the newest edition reads "the matter"). Briefs say "look for", never "translate as". [Gilgameš; laws]
- **Don't trust a lemma** (eBL, SEAL, ETCSL and CDLI all have slips; the normalization too). Parse the form yourself before building a parallel on it. Identical repeated lines and the ancient commentaries expose slips. [first corpus; LH; wisdom]
- **Check the edition's translation against its own transliteration**, and record when the composite follows a minority manuscript. [first corpus]
- **Restorations can carry a parallel**: say so in the parallels index. Compare a newly found copy (Tayinat) with every `[ ]` of the composite, and tell a *fill* from a *plus*. [first corpus; EST]
- **Read the etymology of the biblical word, not only its meaning** (*siāqu* ~ `יָצִיק`, hidden by Geers' law). [EST]
- **Old translations differ in readings, not only style**, and OCR of old transliterations is unreliable: never take a reading from a pre-1990 source or an OCR without checking the current edition or the page image. Clean digital text is not verified text (DFHG silently dropped a line). Tchernichovsky 1924 is a negative model for echo control. [§11]
- **When no open edition is reachable, transcribe the public-domain one from its page images** (OCR of old cuneiform-type editions is unusable), and mark every point where the modern reading is known to differ; the translation then says it awaits the modern edition. [legends of kings]
- **Ancient commentaries are rank 4 for single words**: they decide renderings, separate homonyms, and their lemmata count as manuscripts for brackets. [wisdom]

**Texts, recensions, numbering**
- **Search the digital corpora first** (eBL, ORACC, SEAL, ETCSL): they are often more current than any print edition. [§11]
- **Establish a line concordance before translating** any text that the literature cites by another numbering, and verify it by script. Use the literature's labels when the base text carries them (`A.ix.10`). A composite without § marks gets a concordance table with a certainty column. [first corpus; laws; Gudea]
- **Translate the minor recensions too**: five of Genesis's "unique" flood details are each in a single small tablet. In a composite score, translate each line from the oldest well-preserved witness, and tag later-only lines by recension. A fragmentary earlier version is translated as its own segments, mapped to the later one, and its absences are recorded. A single witness has readings, not variants. [first corpus; creation 2; laments]
- **Two versions of one story in two languages** (the Descents of Ištar and Inana): fix one Hebrew for every shared thing, and let each language keep its own precedent where the source word differs (Sum. *tug₂-mu-dur₇-ra* `בֶּגֶד־אֵבֶל` from Agade, Akk. *karru* `מַעֲטֵה אֵבֶל` from Adapa). The reader then sees where the retelling kept, changed or dropped the earlier version. [netherworld]
- **Bilinguals:** translate the Akkadian, give the Sumerian in the apparatus, and count the key verbs per language (the ancient translators' equations are evidence). [creation 2]
- **An earlier corpus's text is embedded, not copied** (`<כלול-בהדפסה מ="…">`), and checked against it by script. [Gilgameš]

**Sumerian**
- Render narrative *marû* with the Hebrew participle as a default. The *ḫe₂-* prefix is not always a wish. Use the ORACC `morph` field for aspect and the prefix chain; where ORACC has no text, look the forms up in the whole-zip form index (`sumerian_workbench.py morph`) and mark the rest as our own analysis. Name traps (`אותו`, `איננה`, `אוּר`, `שׁוּמֶר`) are errors only when the transliteration has the name, and must be vocalized then. [first corpus; creation 2; Bird and Fish]

**Organizing a run** (see also §5.1)
- **Coordinator and translators:** one coordinator per run; translators as sub-agents, each with the guidelines, the corpus renderings, a common written brief (`translator-brief*.md` in the corpus folders), its exact line range, and the Hebrew of every earlier line it repeats. Inside one long text, translators work sequentially. After each translator, the coordinator merges its "Proposals" into the corpus renderings (numbered by run) and resolves collisions at once, about one per run. [all runs]
- **Parallel texts of one corpus** (several translators at once, e.g. in the cloud): fix the shared renderings before drafting, give each translator the list of the lines it shares with the others, and never let two edit one file. At the end, re-sync by exact string comparison *and* by lemma. [flood corpus]
- **Priority order:** when the user wants a key part first, cut the files by contiguous ranges and draft in priority order. The verifier treats not-yet-drafted parts as notes (errors only with `--strict`), and the builder skips them. [LH; Bird and Fish]
- **Check the coordinator's own pre-set tables** with `check_bible_quotes.py` and against every corpus before the first run: they had misquoted verses and collisions too. [wisdom; Gudea]
- **A research fan-out (surveys, not translation)**: one agent per region or corpus, a shared written brief with one output format, each agent writing only its own file under `curation-surveys/`, the lead committing each file as it arrives and merging them into one ranked list. Give each agent a share of the search budget (§5.1). [world survey]
- **Tell translators the exact formats the builders read** (the parallels-table heading and columns). Never open an intro paragraph with bold text, since builders read `**label**` lines as numbered lines. [Bird and Fish; wisdom; laments]

**Scripts**
- **Every corpus gets one config and a few generic scripts** (`verify`, `build`, `grep`/`lookup`, `build_parallels_index.py`), not new scripts per text; a new text is a new entry. `verify` checks:
  - the entries against the base-text line list;
  - that `translation.rtl.md` equals the `>` lines (always generated, never edited by hand);
  - the reserved and gated strings with their licensing words;
  - the formulas and refrains by regex;
  - the name traps (in headings too);
  - the repeated lines;
  - "identical source, different Hebrew" is listed for review, not reported as an error.
  
  Widen an allow-list for spelling variants rather than bend the Hebrew. Generate the annotated and clean files from one line-data file where possible. [all runs]

## 6. Translation principles

### 6.1 Unit and structure
- **The line is the unit.** One Akkadian line becomes one Hebrew line, with the edition's line number. Don't merge or split lines, even when Hebrew syntax would prefer it. If a sentence spans lines, keep the break.
- Preserve **parallelism and caesura**. Akkadian verse lines usually have two halves (eBL marks the caesura `||`). Where possible, the Hebrew line should also fall into two halves.
- Preserve **repetition**. Mesopotamian narrative repeats whole lines: commands and their execution, the formula for the dawn, the speech-introduction formulas. Identical Akkadian gets identical Hebrew, and slight variations get equally slight variations. Repetitions are often where the meaning lies.
- Keep the **order of images** within a line when Hebrew allows. Change word order for grammar, not for elegance.
- **Section breaks**: follow the edition (eBL `isBeginningOfSection`) and add descriptive Hebrew section headings in the clean translation only.

### 6.2 Register
- **Literary Hebrew with a biblical-poetic texture, but grammatically contemporary.** No *vav-consecutive* (`וַיֹּאמֶר`) as a narrative tense. Use biblical vocabulary where it is the natural literary word, not as costume.
- Speech-introduction formulas: render them consistently and with dignity. For example, *X pâšu īpušam-ma iqabbi, izakkara ana Y* → `X פָּתַח אֶת פִּיו וְאָמַר, אֶל Y דִּבֵּר`.
- **Niqqud** – write without full niqqud (confirmed by the user, 2026-10-16). Vocalize:
  - names at their first occurrence;
  - any word whose reading would otherwise be ambiguous;
  - archaic forms.

  (Full niqqud could be added in a later pass if wanted; an LLM vocalizing everything introduces errors.)

### 6.3 Grammar mapping (Akkadian → Hebrew)
- **Preterite / perfect** → Hebrew past. **Present-future** → future or present by context. **Stative** → adjective or nominal clause (`הָעִיר עַתִּיקָה`), and keep its passive or resultative force. For example, Gilg. XI 19, *Ea ittīšunu tamī-ma*: Ea was *placed under oath* (stative), not "swore".
- **-ma** (clause linker, often consequential): usually `ו־`, sometimes `וְאָז` / `וַ...` or a comma. Don't render it every time as "and then".
- **Ventive** (motion toward the speaker): render it when it carries meaning (`הֵבֵאתִי`, `בָּא אֵלַי`).
- **Stems**:
  - D: intensive or factitive;
  - Š: causative (`הִפְעִיל`);
  - N: passive or reflexive (`נִפְעַל`);
  - Gt / Dt / Št: reciprocal, separative or passive.

  Use the Hebrew binyan that matches the stem's *function*, not mechanically the "same" binyan.
- **Precative and cohortative** (*lu-/li-*): jussive or wish (`יְהִי`, `אֶעֱשֶׂה נָּא`).
- **Determinatives** (DINGIR, KI, MUŠEN…) aren't translated; they only inform the reading. **Logograms** are translated by their Akkadian reading.

### 6.4 Echo control: the Bible in the translation
This is the principle most specific to this project.

The danger runs both ways:
- **False echo:** borrowing Genesis vocabulary for a word that doesn't justify it. For example, rendering *elippu* "boat" as `תֵּבָה` (the Akkadian has the ordinary word for "boat"), or *abūbu* as `מַבּוּל` without a note. The reader would then "discover" a parallel that the translator created.
- **Hidden echo:** avoiding the obvious word where the original really is close to Genesis. For example, *kupru* "bitumen" is the cognate of `כֹּפֶר` in Gen 6:14 (a biblical hapax in that sense). Rendering it `זֶפֶת` would hide a real lexical link.

Rules:
1. **Choose by meaning first.** Pick the Hebrew word that best renders the Akkadian word's meaning in context, as if the Bible didn't exist.
2. **Among equally good renderings:**
   - if the Akkadian word is the **etymological cognate** of the Hebrew word Genesis uses, *and* the meaning matches, prefer the cognate (`כֹּפֶר` for *kupru*);
   - otherwise prefer a word that does **not** pre-empt the comparison.
3. **Mark every overlap** with the Bible in the apparatus (§7.2), using one of these tags:
   - **[cognate]** same root, same or similar meaning: *kupru* / `כֹּפֶר`.
   - **[equivalent]** same concept, different root: *abūbu* / `מַבּוּל`; *summatu* / `יוֹנָה`.
   - **[divergence]** the motif is shared but the details differ: e.g. the order of the birds, the boat's shape, who shuts the door.
   - **[absent]** a motif in the source that the Bible omits, or vice versa.
4. **Beware false friends.** A shared root doesn't guarantee a shared meaning:
   - *amāru* "to see" ≠ `אָמַר`;
   - *dabābu* "to speak" – not the biblical `דִּבָּה`;
   - *nadû* "to throw, lay down" ≠ `נִדָּה`;
   - *ṭēmu* "plan, report, mind" ≠ `טַעַם` "taste" – in Biblical Hebrew `טַעַם` *can* mean "decree, judgment", so check.

   Add every false friend you meet to §6.7.
5. **Greek sources: add an LXX layer.** Where the Septuagint renders the Genesis word with the same Greek word, that equation is evidence for the Hebrew choice (κατακλυσμός = `מַבּוּל`, ἄσφαλτος = `כֹּפֶר`). Record three kinds of contact separately: lexical identity with the LXX; a link that exists only through the Hebrew; a deliberate LXX avoidance (βωμός vs θυσιαστήριον). Readings preserved only in a Christian translation (e.g. the Armenian Eusebius) may have been assimilated to Genesis by the translator: tag them as reception.
6. **Biblical place names**:
   - Use the biblical form when the Bible names the same place: Babylon = `בָּבֶל`, Akkad = `אַכַּד`, Nineveh = `נִינְוֵה`.
   - For **Uruk**: `אוּרוּךְ`, with a first-occurrence note that it is the biblical `אֶרֶךְ` (Gen 10:10). This keeps the reading neutral (confirmed by the user, 2026-10-16).
   - **Deities** are never assimilated to biblical names: Ištar is `אִשְׁתַּר`, not `עַשְׁתֹּרֶת`; Šamaš is `שַׁמַשׁ`, not `שֶׁמֶשׁ`.

### 6.5 Proper names
- Transcribe from the **Akkadian normalization** of the current edition (George's *Ūta-napišti*, not the older *Utnapishtim*). On first occurrence, mention the familiar Hebrew form in a note.
- Vocalize at the first occurrence. Mark long vowels by *matres lectionis* where natural.
- The project's name table (living; add to it):

| Akkadian (George/eBL) | Hebrew (our form) | Other Hebrew forms in use |
|---|---|---|
| Gilgāmeš | גִּלְגָּמֶשׁ (plain text: גילגמש, as in the commentary) | גלגמש |
| Ūta-napišti (rūqu "the Far-Away") | אוּתְנַפִּשְׁתִּי (הָרָחוֹק) | אותנפישתים (Hebrew Wikipedia, common); אוּת־נַפִּשְׁתִּים (Tchernichovsky); אותנפישתי (Wasserman & Cohen 2026) |
| Atra-ḫasīs | אַתְרַחֲסִיס | אתרחסיס |
| Ziusudra (Sum.), Xisouthros (Gk.) | זִיוּסוּדְרָה; קְסִיסוּתְרוֹס |  |
| Ea | אֵאָה | אאה |
| Enlil / Ellil | אֶנְלִיל |  |
| Anu | אָנוּ |  |
| Ninurta | נִינוּרְתָּה |  |
| Ennugi | אֶנּוּגִי |  |
| Šurippak / Šuruppak | שׁוּרוּפַּךְ | שורופך (Wikipedia), שׁוּרִיפַּק (Tchernichovsky) |
| Ubār-Tutu | אוּבָּר־טוּטוּ | אוּבָּרָה־תּוּתוּ (Tchernichovsky) |
| Bēlet-ilī | בֵּלֶת־אִילִי |  |
| Ištar | אִשְׁתַּר | עִשְׁתָּר (Tchernichovsky) |
| Šamaš | שַׁמַשׁ |  |
| Adad | אֲדַד |  |
| Šullat and Ḫaniš | שׁוּלַּת וְחָנִישׁ |  |
| Errakal (= Nergal) | אֶרָּכַּל |  |
| Anunnakkū | אֲנוּנָּכִּי |  |
| Mount Nimuš | הַר נִימוּשׁ | הר ניציר / נִיסִיר (old reading) |
| Puzur-Ellil / Puzur-Enlil (the boatman, XI 95) | פּוּזוּר־אֶנְלִיל | פּוּזוּר־אָמוּרִי (old reading) |
| Ur-šanabi | אוּרְשַׁנַבִּי | אורשנבי |
| Puratti (Euphrates) | פְּרָת |  |
| Uruk | אוּרוּךְ (note: = אֶרֶךְ, Gen 10:10) | אוּרוּךּ (Wasserman & Cohen) |

TODO: once Wasserman & Cohen 2026 is available, compare their forms for Ea, Enlil, Šuruppak, Nimuš, the boatman and Bēlet-ilī, and decide whether to align with them. They are the forms Hebrew readers will meet.

### 6.6 The rendering glossary (`renderings.md`, per corpus and per project)
- In a **corpus**, the corpus-level `renderings.md` holds names, formulas and key terms shared by all its texts, and it binds every project. Lines one text shares with another get identical Hebrew wherever the original is identical. Project translators propose additions in their `project.md`, and the coordinator merges them, so parallel sessions never edit the shared file at once.
- The project-level file holds words used only in that text.

A table: Akkadian lemma (eBL id) | chosen Hebrew | alternatives rejected | reason | lines.
- Every **recurring** lemma, formula and epithet goes in it at its first occurrence. Every later occurrence follows it, unless a deviation is noted.
- Words that matter for the Bible comparison get their echo tag (§6.4).
- When a project ends, decisions that should generalize (formulas, divine epithets, technical terms) move into §6.7 here.

### 6.7 Cross-project decisions and false friends (living)
- *abūbu*: `מַבּוּל` [equivalent; not cognate]. Note at first occurrence that Akkadian *abūbu* is also a mythical monster or weapon, and that Hebrew `מַבּוּל` is etymologically disputed (Klein compares Akkadian *nabulu* / *bubbulu*).
- *kupru*: `כֹּפֶר` [cognate; Gen 6:14].
- *elippu*: `סְפִינָה` (or `אֳנִיָּה`). **Not** `תֵּבָה`, which is an Egyptian loanword. Note the difference.
- *napištu*: `נֶפֶשׁ` / `חַיִּים` by context. In *napišta bulliṭ* (XI 26), "save life".
- False friends: *amāru* (see) ≠ אמר; *nadû* (throw, lay) ≠ נדה; *ḫupšu* (labor gang) ≠ `חָפְשִׁי`; *niššīku* ≠ `נָסִיךְ` (the words only sound alike); *kabāsu* "tread" ~ `כבש` (the sense "subdue" misleads); Sumerian *edin* ≠ `עֵדֶן` (render `עֲרָבָה`).
- **Modern-Hebrew traps in good cognates:** `סבל` "carry" reads as "suffer"; `טַעַם` reads as "taste" (so render *ṭēmu* by sense, see the flood corpus renderings); `בִּקֵּשׁ נֶפֶשׁ` means "seek to kill"; an unvocalized `אט` reads "slowly", so always vocalize `אִט`.
- **Cognates worth reusing:** *eṣēru* = יצר (render `צָר`); *karāṣu* = קרץ (Job 33:6); *balālu* = בלל; *bâšu* = בוש; *andurāru* = דרור; *ṭabāḫu* = טבח; *ittu* = אות; *aḫrât ūmī* = אחרית הימים; *simānu* = זמן; *eršu* = ערש; *sekēru* = סכר; *kalû* = כלא; *nâḫu* = נוח; *malāku* = נמלך; *nasāḫu* = נסח; *qerbu* = קרב; *warḫu* = ירח.
- **The flood corpus's shared renderings** (`סיפורי-המבול-המסופוטמיים/renderings.md`) are the default for any future Akkadian or Sumerian project. They cover divine names, formulas and the key terms.
- **The sky in Mesopotamian cosmology has no *raqīʿu*.** Akkadian has no cognate of `רָקִיעַ` (nor of `בדל` "separate"). In Enūma eliš the sky is half of Tiāmat set up as a roof (*ṣullulu* = `קֵרָה`, cf. תהלים קד:ג), a stretched skin (*šadādu maška* = `מָתַח עוֹר`) and guards. Never render any Akkadian sky word as `רָקִיעַ`, nor *parāsu* / *zâzu* / *ḫepû* as `הִבְדִּיל`.
- **Tiāmat** = `תִּיאָמַת` [cognate of `תְהוֹם`, not a loan]; the common noun *tâmtu* = `יָם`. **Nannaru** (the moon god, "luminary") is transliterated, never `מָאוֹר`; the note says what it means. `שֶׁמֶשׁ` (sun) and `שַׁמַשׁ` (god) are vocalized at every occurrence where both occur.
- **The creation verbs:** *banû* = `בָּנָה`, *bašû* Š (*šubšû*) = `הֵבִיא לִכְלַל הֲוָיָה` (the closest Akkadian match to `בָּרָא`, used for the monsters and for man), *patāqu* = `עִצֵּב`, *bašāmu* = `תִּכֵּן`, *epēšu* = `עָשָׂה`, *kânu* = `כון` (↔ `וַיְהִי כֵן`). Naming: *nabû* = `קָרָא`, *šuma zakāru* = `הִזְכִּיר שֵׁם`. Rest: *nâḫu* = `נָח`, *pašāḫu* = `נִרְגַּע`, *napāšu* = `נָפַשׁ` (Akkadian has no verb *šabātu*). *tamšīlu* = `תַּבְנִית`, *ṣalmu* = `צֶלֶם`. Full list: `סיפורי-הבריאה-המסופוטמיים/renderings.md` §3.
- **More false friends:** *kabāsu* "tread" ≠ `כבש` "subdue" (Gen 1:28); *bukru* "son" ~ `בְּכוֹר`; *šapattu* (full moon) ≠ `שַׁבָּת`; *apsû* ≠ `אֶפֶס`; *nabû* "name" ~ `נָבָא`.
- **Open across corpora:** *šipru* "work" is `מְלָאכָה` in Atra-ḫasīs and `פֹּעַל` in Enūma eliš (user's decision pending; `סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/project.md`). A corpus-level table of the Gen 1–3 key terms with their rendering in every text would prevent such splits.
- **False friends and traps (creation and Eden companions, 2026-10-17):** *šēdu* (protective spirit) ≠ `שֵׁד` (render `רוּחַ־מָגֵן`); *sakātu* "be silent" ~ modern `הִסְכִּית` "listen" (render `שָׁתַק`); *Adapa* ≠ `אָדָם`; *Aruru* ≠ `אָרוּר`; Sum. *nam-erim₂ kud* is an oath, not a curse; `עֵין הַחַיִּים` (*igi nam-til₃*) sounds like `עֵץ הַחַיִּים` (Hebrew only); Nin-ti's rib/life pun does not exist in Hebrew `צֵלָע`. Unvocalized names that read as Hebrew words: Utu / Uttu (`אותו` "him", `אוטו`), Magan (`מגן`), Šara, Keš, Šakkan (`שכנו`): always vocalize. Vocalize statives that read as cohortatives (`נַעֲשָׂה` / `נַעֲשֶׂה`).
- **Cognates and loanwords worth reusing (2026-10-17):** *leqû* = לקח; *târu* = שוב; *labāšu* = לבש; *šuklulu* = שכלל; *karāṣu* / Sum. *kir₃* = קרץ; *rāṭu* = רהט; *tamlû* = מלוא; *laḫru* = רחל; *atūdu* = עתוד; *karû* = כרי; *niṣirtu* = נצורה; *dešû* D = הדשיא; Sumerian loans through Akkadian into Hebrew: *engar* = אִכָּר, *na-gada* = נוֹקֵד, *šu-rin-na* ~ תַּנּוּר (the Sumerian [cognate]s).
- **Cross-text rules of the creation corpus** (`סיפורי-הבריאה-המסופוטמיים/renderings.md` §5): Sum. *ki* is never `אֲדָמָה`; no root עבד for work nouns (*iškāru* = `מִכְסָה`, *dullu* = `עָמָל`); *ĝar* / *šakānu* = `שָׂם` reserved; the food of life `לֶחֶם הַחַיִּים` / `מֵי הַחַיִּים`; eternity `נֶצַח` / `עַד`, never `עוֹלָם`.
- **Treaty and law terms (`חוקים-ובריתות/renderings.md`, 2026-10-17):** *adê* = `אֲמָנָה` (not `בְּרִית`; the debated cognate `עֵדֹת` noted; open for the user); *māmītu* = `אָלָה`, *tamītu* = `שְׁבוּעָה` (a deviation from the creation corpus, which has *māmītu* = `שְׁבוּעָה`, because EST has both words); *naṣāru* = `נָצַר` (never `שָׁמַר`; Deut 33:9 has the cognate); *šemû* = `שָׁמַע`; *râmu* = `אָהַב` [equivalent]; *ramû* D "abandon" = `הִרְפָּה` (false friend of *râmu*); *ina gummurti libbi* = `בִּשְׁלֵמוּת לֵב` (not `בְּכָל לְבָבְךָ`); *lamādu* Š = `לִמֵּד` [cognate]; *šunnû* = `שִׁנָּה`; *pašāṭu* = `מָחָה`; *nasāḫu* = `נָסַח`; *arratu* = `מְאֵרָה`; *raggimu* = `נָבִיא` [equivalent], *maḫḫû* = `מְשֻׁגָּע`; *ša-rēši* = `סָרִיס`; *kullumu* = `הֶרְאָה` (2 Kgs 11:4); *ḫalāqu* G of persons "flee" = `נִמְלַט`; *gimilla turru* = `הֵשִׁיב גְּמוּל`. Kings named in the Bible get the biblical form (`אֵסַרְחַדּוֹן`, `סַנְחֵרִיב`; open for the user); Nusku = `נוּסְכּוּ`, Esaggil = `אֵסַגִּיל` (creation-corpus forms).
- **More false friends:** *ramû* D "abandon" ≠ *râmu* "love"; *nakāru* D "remove" ~ `נכר` "recognize"; *pašāṭu* "erase" ~ `פָּשַׁט` "strip"; *gamālu* "spare" ~ `גָּמַל` "requite"; *ḫadû* "rejoice" contains the string *adû*.
- **Law terms (`חוקים-ובריתות/renderings.md` §5, 2026-10-17, binding for every cuneiform law collection):** *šumma* = `אִם` always (no `כי`/`אם` hierarchy); *awīlum* = `אִישׁ`, *mār awīlim* = `בֶּן אִישׁ` (Ps 49:3), *muškēnum* = `מִסְכֵּן` (the Hebrew loanword; open), *wardum* / *amtum* = `עֶבֶד` / `אָמָה` – the class tiers must stay visible (a deviation from the narrative corpora's *awīlu* = `אָדָם`); *iddâk* = `יֵהָרֵג` (never `יוּמַת`); *maḫar ilim* = `לִפְנֵי הָאֵל`; *dīnum* / *dayyānum* = `דִּין` / `דַּיָּן`, `מִשְׁפָּט` only for *šipṭu*; *mīšarum* = `מֵישָׁרִים`; *kīma* in "X for X" = `כְּ` (never `תַּחַת`); *nakāpu* = `נָגַף`, *nakkāpû* = `נַגָּף`; *šūdû* = `הוֹדִיעַ`; *bēl* + noun = `בַּעַל`; *šullumu* = `שִׁלֵּם` (reserved), *riābu* = `הֶחֱלִיף`; *mâtu* Š = `הֵמִית` (reserved); *andurārum* = `דְּרוֹר`; *maṣṣarūtum* = `נְצִירָה`; *maḫāṣu* = `מָחַץ`, *lētu* = `לְחִי`; *kišpū* = `כְּשָׁפִים`; *qalû* = `קָלָה` (Jer 29:22). Cognate loans worth reusing: *tamkāru* = `תַּגָּר`, *errēšu* = `אָרִיס`, *gallābu* = `גַּלָּב`, *malāḫu* = `מַלָּח`, *ilku* = `הֲלָךְ` (Ezra 4:13), *ṣābu* = `צָבָא`, *nudunnû* ~ `נְדוּנְיָה` (but the meaning reversed: use `מַתָּן`), *sikiltu* = `סְגֻלָּה`, *emu* = `חָם`, *kallatu* = `כַּלָּה`.
- **False friends (LH):** *nakkaptu* "temple (of the head)" ≠ *nakāpu* "gore"; *nadītu* ≠ `נִדָּה`; *idū* "hire" (not `דמים`: `דמיו` reads "his blood"); *ḫiṭītu* "loss" ~ `חטא` (render `נזק`, note Gen 31:39); *mutu* "husband" ~ `מְתִים`; unvocalized `מהר` (*terḫatu*) reads "quickly", `ילקוהו` / `יקלוהו` differ by one letter (vocalize).
- **Gilgameš corpus (`אפוס-גילגמש/renderings.md`, 2026-10-18):** *ṣēru* = `שָׂדֶה` (flood XI binds; a deviation from Enūma eliš's `עֲרָבָה`); *šammu* = `עֵשֶׂב` (grass and the plant of rejuvenation alike); *edû* = `יָדַע` reserved; *kīma ili* = `כְּאֵל`; *awīliš ewû* = `הָיָה לְאָדָם`, *ṭiṭṭiš emû* = `הָיָה לְטִיט`; *pašāru* = `פָּשַׁר` (never `פָּתַר`); *sakāpu* = `נָם`, *nâlu* = `שָׁכַב`; *naṣāru* = `נָצַר`, *maṣṣartu* = `נְצִירָה`; *nazāru* = `גִּדֵּף`, *arāru* = `אָרַר` (`לְאָרֵר`); *dūr dāri* = `לְדוֹר דּוֹרִים`; *erṣetu* (netherworld) = `הָאָרֶץ`, never `שְׁאוֹל`; *utukku* = `רוּחַ`, *zaqīqu* = `מַשַּׁב`; *dumqu* = `חֶסֶד` (open); *inbu* = `תְּנוּבָה` (not `פְּרִי`); *rapādu* = `שׁוֹטֵט`, *dâlu* = `סוֹבֵב` (not `נָע`, `נָד`); *akkannu* = `עָרוֹד` (not `פֶּרֶא`); *šuma šakānu* = `שָׂם שֵׁם`, *šuma šuzuzzu* = `הֶעֱמִיד שֵׁם`.
- **More false friends and traps (Gilgameš):** Šamḫat (`שַׁמְחַת`, "the voluptuous", not `שִׂמְחָה`) and Aruru (not `אָרוּר`) must always be vocalized (checked by script); `רֵעַ` vocalized (`יודע … רע` reads "knowing evil"); *ḫarimtu* ~ `חרם`; *ṭardu* "chased" ~ Modern `טרד`; *uqniātu* "blue wool" ≠ `תְּכֵלֶת` (= *takiltu*, its cognate); `לאור` (plene for `לָאֹר`) reads "to the light".
- **The other law collections (`חוקים-ובריתות/renderings.md` §6, 2026-10-18):** *imât ul iballuṭ* = `ימות, לא יחיה` (neither `יהרג` nor `מות יומת`; ↔ `כִּי מֵת אַתָּה וְלֹא תִחְיֶה`, 2 Kgs 20:1); *zâzu* = `חלק` (`יחצו`/`יחצון` reserved); *ešēru* Š = `יישר` [cognate]; *naṣāru* of a dog = `נצר` (↔ `וְלֹא יִשְׁמְרֶנּוּ`); *ḫīṭu* (MA "penalty") = `חטא` (↔ `אֵין לַנַּעֲרָ חֵטְא מָוֶת`, Deut 22:26); *niāku* = `בא על`; *batultu* = `בתולה`; *ṣēru* = `שדה`; *puṣṣunu* = `רעולה` (`כסה` kept for the Gen 24 / 38 comparison); *kīmū* "instead of" = `חֵלֶף` (`תחת` reserved); *esirtu* = `פילגש`; Sum. *dumu-gi₇* = `בן חורין`, *nu-siki* / *nu-ma-su* = `יתום` / `אלמנה`, *ra* = `מחץ`; the root `יבם` is reserved (no cuneiform cognate; the levirate-type laws have none).
- **False friends and traps (law collections):** *erēšu* "request" ~ `ארש` (Klein: a possible source; not used); *naqābu* "deflower" ~ `נקב` / `נְקֵבָה` (open); *zaqāpu* "impale" = Aram. `זקף` (Ezra 6:11); *āšipu* = `אַשָּׁף`; MA *ḫupšu* (`חֻפְשׁוּ`, transliterated) ≠ `חָפְשִׁי`; Inana is `אִינַנָּה` in every corpus and always vocalized, since unvocalized it reads `איננה` (settled 2026-10-21; the law corpus had `אִינַאנָּה`).
- **Creation corpus projects 3–4 (`סיפורי-הבריאה-המסופוטמיים/renderings.md` §6–§8, 2026-10-19):** *mušen* = `צִפּוֹר` (not `עוֹף`), *dal* = `עָף` / `עוֹפֵף`, *pa* = `כָּנָף`, *ku₆* = `דָּג`; *si* = `מִלֵּא` and *lu* = `רָבָה` / `הִרְבָּה` always tagged (↔ 1:22); *me* = `הַ־מֶה` (always vocalized; the flood corpus too since 2026-10-21: *me maḫ* = `הַ־מֶה הַנִּשְׂגָּבִים`); *ĝiš-ḫur* = `צוּרָה` (= *uṣurtu*); *nam tar* = `גָּזַר גּוֹרָל`, never `בֵּרַךְ`; *zid* = `אֱמֶת` (`זֶרַע אֱמֶת`, Jer 2:21); *in … dub₂* = `חֵרֵף`; *e₂-gal* = `הֵיכָל` [cognate]; *šeĝ₃* = `הִמְטִיר` / `מָטָר`; the EWO appointment formula `אֶנְקִי לְצִדּוֹ הֶעֱמִיד`; *gu₃ de₂* = `פָּנָה אֶל` (never `קָרָא`); Inana `אִינַנָּה` always vocalized (every corpus since 2026-10-21).
- **Wisdom corpus (`ספרות-החכמה-והצדיק-הסובל/renderings.md`, 2026-10-19):** personal religion: *ilu* "my god" = `אֵלִי` and *ištaru* = `אֵלָה` **always vocalized** (unvocalized "to me", "these"); *šēdu* / *lamassu* `רוּחַ־מָגֵן` / `אֵלַת־מָגֵן`; the demons transliterated in lists (*utukku* `אוּטוּכּוּ`, *alû* `אַלּוּ`, *lamaštu* `לַמַשְׁתּוּ`, *šūlu* `שׁוּלוּ`; *rābiṣu* `רוֹבֵץ` [cognate, Gen 4:7]); *bārû* / *barû* = `הַבּוֹחֵן` / `בָּחַן` (↔ `בֹחֵן לִבּוֹת`), *šāʾilu* `הַשּׁוֹאֵל`, *mašmaššu* `מְלַחֵשׁ`, *āšipu* `אַשָּׁף`; *palāḫu* of gods = `יָרֵא` (a deviation from `פָּחַד`); *kabattu* = `כָּבֵד` (the organ kept; ↔ Lam 2:11); *māmītu* = `שְׁבוּעָה` here (law corpus `אָלָה`, which would collide with `אֵלָה`); *paṭāru* = `פָּטַר` [cognate]; *rēmu* / *rēmēnû* = `רַחֲמִים` / `רַחוּם`; *anāḫu* / *tānēḫu* = `נֶאֱנַח` / `אֲנָחָה` [cognate]; *eršu* `עֶרֶשׂ`; *uriqtu* `ירקון` (Deut 28:22); *aḫulap* = `רַב!`; one Hebrew word per anger lemma (eleven of them in Ludlul I 1–40). Reserved in this corpus: `צַדִּיק` / `צֶדֶק`, `תָּם`, `גֹּאֵל`, `שָׂטָן`, `מַלְאָךְ`, `שְׁאוֹל`, `הֶבֶל`; `עָזַב`, `טוֹב`, `יָשָׁר`, `רחם`, `קֶבֶר`, `חֶסֶד`, `נָקִי`, `רָשָׁע` only for their Akkadian counterpart.
- **False friends and traps (wisdom corpus):** Akk. *pāna nadānu* "give the face" = favour, Heb. `נָתַן פָּנִים בְּ־` = hostility (render `נתן (לי) את פניו`); *sarāru* "be false" ~ `סָרַר` "rebel"; a "knotted" heart (*libba kaṣāru*) is angry in Akkadian, loving in Hebrew (Gen 44:30); *šiptu* "incantation" rendered `קֶסֶם` pre-empts Deut 18:10 (settled 2026-10-21: `קֶסֶם` stays for *šiptu*, with Deut 18:10 in the apparatus); the partridge `קוֹרֵא` contains the reserved `קרא`; `אֵלֵיכֶם` "your gods" reads "to you".
- **City-lament corpus (`קינות-על-ערים/renderings.md`, 2026-10-19):** *muš₃ … de₆* (Emesal *ga*) "carry away the presence" = `נָטַשׁ` (reserved; ↔ Ps 78:60, Jer 12:7); *lil₂* = `מַשַּׁב` (= *zaqīqu*); *a-nir* / Emesal *a-še-er* = `אֲנָחָה` (= *tānīḫu*), *še ša₄* = `נָהָה` (so that Lam 1:11's one verb shows two Sumerian words); *gig* = `מַר` (note: "sick, painful"); *uĝ₃* = `עָם` (a deviation from the creation corpus's `הָאֲנָשִׁים`); *ud* = `סְעָרָה` / `יוֹם` (the pun noted, never kept); *en₃-še₃* = `עַד מָתַי`, *en₃-tukum-še₃* = `עַד אָנָה`; *a-gin₇* = `אֵיךְ` (`אֵיכָה` reserved); *me-li-e-a* = `אוֹי לִי`, *a* / *u₃-a* = `הוֹי`; *kur₂* = `נָכְרִי` [cognate via *nakru*] (↔ Lam 5:2), verb `שִׁנָּה`; *lu₂-erim₂(-gin₇)* = `(כְּ)אוֹיֵב`; *du₆* = `תֵּל`, *ad₆* = `פֶּגֶר` [cognates via *tīlu*, *pagru*]; *ur₅* "liver, mood" = `כָּבֵד` (= *kabattu*); *nam … ku₅* (Emesal *na-aĝ₂ … kud*) = `אָרַר` (= *arāru*), *aš₂ … bal* = `קִלֵּל`; *gi₄* / *gur* = `שׁוּב` (= *târu*); *im* = `טִיט`; *nam-tag* = `עָוֹן`, *nam-tag du₈* = `פָּטַר עָוֹן`; *nam-dugud* = `כֹּבֶד` (= *kabtūtu*; `כָּבוֹד` reserved); *an-zil* = `תּוֹעֵבָה`. Reserved in this corpus: `אֵיכָה`, `קִינָה`, `כָּבוֹד`, `שְׁכִינָה`, `גלה` / `גָּלוּת`, `בַּת` + a city, `צִיּוֹן`.
- **False friends and traps (city laments):** ETCSL's "righteous" / "innocent" for *zid* ("true, proper": `נֶאֱמָן`, `אֱמֶת`) imports a moral claim; ETCSL's "exiled" (LU 306–307) is *e₃* "go out"; ETCSL's "return!" (LU 378–380) has no verb; *tag* "touch" ≠ *tag₄* "abandon"; Hebrew `הוּשְׂמָה` ("was set") reads `הָשַּׁמָּה` ("made desolate") – use `שׂוּמָה`; `עמי` "my people" / `עִמִּי` "with me", `עמה` likewise; `באו` (Bau), `אומה` (Umma), `אן` (An), `קי־אור` (Ki-ur) must be vocalized; Sum. *u₈* "ewe" = Akk. *laḫru* ~ `רָחֵל` (a cognate through the Akkadian: note it where a mother weeps).
- **Temple-building corpus (`בניין-המקדש/renderings.md`, 2026-10-20):** *e₂* = `בַּיִת` (the temple is "the house"), *du₃* = `בָּנָה`; *eš₃* = `מִקְדָּשׁ` and *e₂-gal* = `הֵיכָל` (gated); *ĝiš-ḫur* = `צוּרָה` (↔ Ezek 43:11; `תַּבְנִית` reserved); *maš-ĝi₆* = `חִזְיוֹן לַיְלָה`, *ma-mu* = `חֲלוֹם`, *bur₂* = `פָּשַׁר` [cognate via *pašāru*], `פָּתַר` reserved; *ensi* = `שׁוֹאֶלֶת` (= *šāʾiltu*); *ĝiškim* = `אוֹת` [cognate via *ittu*], always vocalized; *u₃-šub* = `מַלְבֵּן`, *dusu* = `סַל`, *šeg₁₂* = `לְבֵנָה`, *temen* = `מַסָּד`; *na-du₃-a* = `מַצֵּבָה`; *um-mi-a* = `אָמָּן` [cognate via *ummânu*]; *gu* "line" = `קַו` [cognate via *qû*]; *li* = `בְּרוֹשׁ` [cognate via *burāšu*]; *erin* = `אֶרֶז`; *esi* = `הָבְנִים`; *šu-nir* = `דֶּגֶל`, *urin* = `נֵס`; *kug* = `טָהוֹר` (the root קדש never); *me-lem₄* / *ni₂* = `זֹהַר` / `אֵימָה` (`כָּבוֹד` never); *nam tar* = `גָּזַר גּוֹרָל` (never `בֵּרַךְ`); *šudu₃* = `בְּרָכָה` (*sizkur₂* = `תְּפִלָּה`); *lugal* of the god = `מֶלֶךְ`, *ensi₂* = `מוֹשֵׁל`; the orphan/widow formula of the Ur-Namma prologue reused verbatim; *ibila* = `יוֹרֵשׁ`.
- **False friends and traps (Gudea):** the English translations' "holy" (*kug* "pure"), "plan" (*ĝiš-ḫur* "drawing"), "temple" (*e₂* "house"), "as he had been told" (*zid-de₃-eš₂* "truly"), "Amanus" / "Lebanon" (the text has only "the cedar mountain"); *šeg₁₂ gi₄* "roar" contains *šeg₁₂* "brick"; `לבנה` is "brick", "white" and Modern "moon"; `אמה` *geme₂* / "cubit"; `אוֹתִי` "my sign" / `אותי` "me"; `מגן` Magan / "shield"; `תירש` (Tiraš) ≈ `תירוש` – write `טִירַשׁ`.
- **The netherworld corpus (`העולם-התחתון/renderings.md`, 2026-10-21):** one Hebrew for the two Descents: *kur* = *erṣetu* = `הָאָרֶץ` (never `שְׁאוֹל`, which is reserved with `תַּמּוּז`, `קָדֵשׁ` / `קְדֵשָׁה` and "naked": the apparatus discusses them); *ĝarza* = *parṣu* = `פֻּלְחָן`; *al dug₄* = *erēšu* = `שָׁאַל`; *sukkal* = `וְזִיר`; *i₃-du₈* = `שׁוֹעֵר`; *nin* = `גְּבִירָה`; *ki-sikil* = `עַלְמָה`; the lines shared with Gilgameš VII and VI copy the Gilgameš Hebrew. Names: Ereškigal `אֶרֶשְׁכִּיגַל`, Namtar `נַמְתָּר`, Neti `נֵטִי`, Belili `בֵּלִילִי`, Kurnugi `כּוּרְנוּגִי`, Aṣûšu-namir `אַצּוּשׁוּ־נָמִר`; the cult performers transliterated (*kurgarra* `כּוּרְגַּרָּה`, *gala-tur* `גָּלָה־טוּר`, *assinnu* `אַסִּנּוּ`); full list in its §1 and §10.
- **False friends and traps (netherworld):** `לשאול` (plene infinitive of `שָׁאַל`) reads "to Sheol": never write it (use `שָׁאַל`, `יִשָּׁאֵל`, `שְׁאֵלָה`); `הגלה` (article + the *gala* priest) reads "exiled": the transliterated `גָּלָה`, `גָּלָה־טוּר`, `שֵׁדֵי־גַּלָּה` are vocalized and never take the article; `איננה` Inana / "is not", `אותו` Utu / "him", `אור` Urim / "light", `אומה` Umma / "nation", `שרא` Šara, `נטי` Neti, `מה` the *me* / "what" – always vocalized; the gate on `שד` (the *galla*) also matches `שדי` "breasts" (Sum. *ubur* = `דַּד`).
- **Legends of kings (`אגדות-מלכים/renderings.md`, 2026-10-21):** Gen 11 / Enmerkar: Sum. *eme* = `לָשׁוֹן` (the word of Gen 10:5, 20, 31), never `שָׂפָה` (Gen 11); *kur₂* / *nakāru* = `שׁוֹנֶה` / `שִׁנָּה`, never `בָּלַל`; no `הֵפִיץ` without *sapāḫu*; the tense of a Sumerian passage is decided by its morphology (*ḫe₂-* + *ḫamṭu* = affirmative past, `אָכֵן`), never by a modern translation's "may they" / "shall". Exod 2 / Sargon: ESIR = *iṭṭû* = `חֵמָר` (as in the flood corpus), not *kupru* (ESIR.UD.A = `כֹּפֶר`); *quppu* = `קֻפָּה` (vocalized), never `תֵּבָה`; `תֵּבָה`, `גֹּמֶא`, `סוּף`, `יְאֹר`, `זֶפֶת`, `מָשָׁה` stay in the apparatus; *dālû* = `דּוֹלֵה הַמַּיִם` (cognate `דָּלָה`); *ana mārūti* = `לְבֵן`. Writing: *gub* (words on clay) = `הִצִּיב`, *dub* = `לוּחַ`, *im* = `טִיט`; `כָּתַב` only for *sar* / *šaṭāru*; *dugud* / *kabtu* = `כָּבֵד` gated (Exod 4:10, 18:18). Names: Enmerkar `אֶנְמֶרְכַּר`, Aratta `אָרַטָּה`, Kulaba `כּוּלַבָּה`, Iškur `אִישְׁכּוּר`, Sargon `סַרְגּוֹן`, Azupirānu `אֲזוּפִּירָנוּ`, Aqqi `אַקִּי` (always vocalized), Zubi `זוּבִּי` (always vocalized); full list in its renderings.
- **Everyday-voices corpus (`קולות-היום-יום/renderings.md`, 2026-10-21):** the Song of Songs' vocabulary is reserved and gated by script (`דּוֹד` only *dādu*, `גַּן` only *kirû* / *kiri₆*, `תַּפּוּחַ`, `יוֹנָה`, `כַּלָּה` ★, `צְחוֹק` only *ṣīḫtu* / *ṣiāḫu*, `אָחַז` only *aḫāzu* [cognate] – *ṣabātu* = `תָּפַס` here, a deviation from Gilgameš; `שִׁיר`, `שׁוֹשַׁנָּה`, `לְבָנוֹן`, `מוֹר`, `פְּרִי` (Akkadian) never); *ṣawāru* = `צַוָּאר` [cognate], *sāqu* = `שׁוֹק`, *warādu* = `יָרַד`, *tamû* D = `הִשְׁבִּיעַ`; *mēlulu* = `שִׂחֵק`; *qadištu* `קְדֵשָׁה`, *nadītu* `נָדִיתוּ`, *kezertu* `כְּזֵרָה`, *batultu* `בְּתוּלָה`; the incantation closing *šiptum ul yâtu, šipat DN* = `הקסם אינו שלי: קסם DN`. Sumerian proverbs: *niĝ₂-gen₆-na* = `נְכוֹנָה` (ETCSL "righteousness"), *niĝ₂-gig DN* = `תּוֹעֲבַת DN`, *kal* = `יָקָר`, *lu₂-kur₂* = `אִישׁ נָכְרִי`, *zid* (of persons) = `אִישׁ אֱמֶת`, *si sa₂* = `יֹשֶׁר`, *ḫu-ru-um* = `נִבְעָר` (`כְּסִיל` only *lil₂*), *zeb* = `עָרֵב`, *ku₇* = `מָתוֹק`, *ḫi-li* = `חֵן`, *gu₂* = `צַוָּאר` (with runs 5–6), *gu₂ šub* = `הִשְׁלִיךְ צַוָּאר`; the formula of 1.152–1.153 and 3.9 is *giri₁₇-zal-še₃ nu-il₂* `לְשָׂשׂוֹן – לֹא נָשָׂא` (not *ezen nu-tuku*). Letters: `אֶל X אֱמֹר:` / `זֶה אֲשֶׁר Y אוֹמֵר:` / `הוֹסֵף:` / `מַבּוּל הוּא!`; *giĝ₄* / *ma-na* / *gun₂* / *sila₃* = `שֶׁקֶל` / `מָנֶה` / `כִּכָּר` / `קַב`; *mu sa₄* = `קָרָא שֵׁם` (= *nabû*). False friends and traps: `ברוך` "gently" and `היינו` "we were" trip the blessing and wine gates; `שבו` / `שבה` "in it" the `שוב` gate; `לשאול` contains `שאול`; `מגן` contains `גן`; `לא יכלה` "could not" / "will perish" (vocalize `יָכְלָה`); `אַגָּן`, `אַפִּרְיוֹן`, `מְאוֹרוֹת`, `הבורא` would each import a Bible verse the tablet does not have.
- **Cross-corpus harmonization (2026-10-21; the lead, by the user's delegation; binding for every corpus):** one Hebrew per source word across the corpora. Lapis lazuli: Sum. *za-gin₃* = Akk. *uqnû* = `סַפִּיר` [equivalent: Exod 24:10, Ezek 1:26, Job 28:6 – the biblical stone is lapis, not the modern sapphire; a note at the first occurrence per text], never `לָזוּרִית`. Eye paint *šembi(zid)* = `פּוּךְ` (2 Kgs 9:30, Jer 4:30; Akk. *guḫlu* would be `כָּחָל` [cognate]). *šu-ur₂-men* = *šurmēnu* = `שׁוּרְבִּין` (Mishnaic `שׁוּרְבִּינָא`; *li* = *burāšu* = `בְּרוֹשׁ`). *ra-gaba* = `צִיר` "envoy" [equivalent: Prov 13:17, 25:13, Isa 18:2], always vocalized (`צירי` reads "my birth pangs"); *kiĝ₂-gi₄-a* = `שָׁלִיחַ`. *nam-šub*, *tu₆* = *šiptu* = `קֶסֶם`; Akk. *tû*, Sum. *mu₇* = `לַחַשׁ`. *šudu₃* = `בְּרָכָה`, *sizkur₂* = `תְּפִלָּה`, *a-ra-zu* = `תַּחֲנוּן` (Akk. *ikribu* by sense: `בְּרָכָה` in Enūma eliš, `תְּפִלָּה` in the wisdom corpus and Gilgameš; *unnīnu* / *šag₄-ne-ša₄* = `תַּחֲנוּנִים`). *mušen* / MUŠEN = `צִפּוֹר` (never `עוֹף`). *me* = `הַ־מֶה`. *ur₄* "gather" = `אָסַף`, of hair "pluck" = `קָטַף`. *guru₇* = *karû* = `כְּרִי` [cognate]. *en₃-du* = `זִמְרָה`. *kabattu* = `כָּבֵד`. *sukkal(lu)* / SUKKAL = `וְזִיר`. *kuzbu* = `עֲגָבִים`. **Kept by sense, not harmonized:** *uĝ₃* `עָם` (a city's or land's people) / `הָאֲנָשִׁים` (humankind); *kur*; *uznu* / *ĝeštug₂*; *ḫarrānu* / *kaskal*; *ṣabātu* = `אָחַז`, but `תָּפַס` in the law corpus and in texts that also have *aḫāzu* (= `אָחַז` [cognate]). **Kept as they are:** bitumen *iṭṭû* / *esir₂* = `חֵמָר`, *kupru* = `כֹּפֶר`; Sum. *niĝ₂-gen₆-na* = `נְכוֹנָה` (*zid* has `אֱמֶת`), LH's *kittu* = `אֱמֶת`; *niĝ₂-gig* and *an-zil* both `תּוֹעֵבָה`; *māru* as an endearment = `בֵּן`; Dumuzi vocalized at the first occurrence per file (more is harmless). Every corpus's `renderings.md` has a "2026-10-21 harmonization" line with its changed lines; several verify scripts now check these words.
- (Add more as they arise.)

### 6.8 Uncertainty and damage: notation
Use the same notation in both the annotated and the clean translation:

| Mark | Meaning |
|---|---|
| `[מילה]` | restored (the text is broken here; the restoration is the editor's, or ours if noted) |
| `…` / `[…]` | untranslatable or missing |
| `(מילה)` | added for sense, not in the original |
| `מילה?` or `(?)` | uncertain reading or meaning |
| `*מילה*` | uncertain translation (George's italics convention) |
| `⟨מילה⟩` | omitted by the scribe, restored |

- `{נוסח אשורי}` etc. (curly braces at the start of a line): a recension tag. The line comes from a later witness, not the base manuscript. Never use `[ ]` or `( )` for this, since they already mean "restored" and "added".
- `{שומרית}` (at the start of a line) / `{שומרית: …}` (around words): in a bilingual, the Hebrew comes from the Sumerian because the Akkadian is lost (added 2026-10-17).
- `{תיינת}` (at the start of a line) / `{תיינת: …}` (around words): in EST, text translated from the Tell Tayinat copy because the composite is broken there; a Tayinat *plus* against an intact composite line goes in the apparatus only (added 2026-10-17). Use the same pattern (`{<siglum>}`) for any later copy that fills a composite.
- Never fill a gap silently. Say who restored it if it isn't the edition.
- A **crux** (e.g. Gilg. XI 149 *īpiram-ma*) is translated by the most defensible option, marked `?`, with the alternatives listed in the apparatus.

## 7. Output formats

### 7.1 `translation.rtl.md` – the clean reading translation
- A title, then a short introduction in Hebrew: what the text is, its date, the manuscripts, the edition used, and how to read the brackets.
- Section headings (`##`) in Hebrew.
- One line per verse line, prefixed with the line number: `**148** הוֹצֵאתִי יוֹנָה וְשִׁלַּחְתִּיהָ:`. A blank line between sections only.
- No apparatus, except optional numbered footnotes for the few points a reader must know: major cruxes and the key biblical parallels.

### 7.2 `annotated.rtl.md` – the working file
Per line:

```markdown
### 148
`ušēṣī-ma | summata | umaššar`
> הוֹצֵאתִי יוֹנָה וְשִׁלַּחְתִּיהָ:
- **פירוק:** `ušēṣī` – aṣû Š, preterite 1cs + -ma ("הוצאתי"); `summata` – summatu "dove" (acc.); `umaššar` – wuššuru D, present 1cs ("משלח").
- **תרגומים:** George: "I brought out a dove, setting it free"; Wasserman 2020: …
- **הקבלה:** [divergence] בראשית ח:ח `וַיְשַׁלַּח אֶת הַיּוֹנָה` – כאן היונה ראשונה, בבראשית העורב ראשון. השווה גם *umaššar* ↔ `וַיְשַׁלַּח` [equivalent – Piel/D].
- **הערות:** …
```

- The Akkadian goes in backticks, which keeps bidi rendering sane in RTL files.
- The **הערות** bullet also explains the line on its own terms when an ancient hearer would have heard more than the words say: the gods and rituals, the social world, the images and wordplay (§1, second purpose). Not every line needs it; the ones that open the ancient mind do.
- The apparatus is written in **Hebrew**, since this file is for the commentary's readers. Quoted scholarship stays in its original language.
- Biblical references use the repository's format: `בראשית ח:ח`, with the verse text in backticks when quoted.

### 7.3 `project.md`
Contains:
- scope;
- base edition and the versions used;
- line-numbering notes;
- list of sources consulted;
- open decisions;
- progress log (which lines are drafted / reviewed);
- **parallels index**: a table of all [cognate] / [equivalent] / [divergence] / [absent] items, with lines and Bible verses. This index is the main product for the commentary.

### 7.4 The print stub (`הדפסה/`), the final step of every translation
Every `translation.rtl.md` gets a one-line file under `הדפסה/` that embeds it. The path mirrors the corpus folder, and the file is named after the project folder:

```
הדפסה/סיפורי-המבול-המסופוטמיים/1-אתרחסיס.rtl.md
```
with this single line as its content:
```
<כלול-בהדפסה מקור="../../סיפורי-המבול-המסופוטמיים/1-אתרחסיס/translation.rtl.md">
```
- `מקור` is resolved **relative to the folder of the stub**, not of `translation.rtl.md`. Hence the `../../` (one level more for a project nested deeper). A wrong path renders as an error box on the page, so check the stub's HTML page once.
- A project folder directly under the root gets `הדפסה/<project>.rtl.md` with `מקור="../<project>/translation.rtl.md"`.
- Why: the RTL editor mirrors every Markdown file to `docs/_HTML-FROM-MD/` and `docs/_PDF-FROM-MD/` (GitHub Pages). The stubs make `docs/_PDF-FROM-MD/שונות/תרגומי-טקסטים-קדומים/הדפסה/` hold exactly the finished translations, each as a clean PDF, without the sources and working files around them.
- If a translation is split into several files (e.g. one per tablet), the stub embeds the combined file, or several `<כלול-בהדפסה>` lines in reading order.

## 8. Copyright and the public repository
The repository is **public** on GitHub. Therefore:
- `sources/.gitignore` keeps out of git:
  - all binaries (PDF, zip, images), which can be re-downloaded from the URLs in the READMEs;
  - the content of copyrighted or license-unclear sources (eBL editions, SEAL, Wasserman 2020 [CC BY-NC-ND], Kovacs/Livius, George's score, TheTorah, the Carmel sample, Heidel [US status unclear], Schøyen, the Comparative-studies PDFs).
- Their `README.md` files **are** committed, so anyone can re-obtain the material.
- Committed: public-domain material, ETCSL composites (CC BY-NC-SA), ORACC data (CC0), DFHG (CC BY-SA), documentation, and our own work.
- When adding a source: decide its status and **update `.gitignore` in the same step**.
- **Ignored files must stay re-obtainable** (a fresh clone, a Claude Cloud session): `tools/sources_sync.py` restores them from `sources/fetch-recipes.tsv` (plus built-in rules for eBL, ORACC, SEAL and CDLI) and checks them against `sources/MANIFEST.json`. After adding an ignored source, add its recipe and run `snapshot`; commit the two files with the source's README. Never push the ignored content itself to any branch: a branch of a public repo is public, and a pushed blob is practically impossible to retract.
- **Our translations are original work** and are committed. They may quote modern translations only briefly, in the apparatus, with attribution.
- **CAD (ISAC)** terms forbid using its publications to compile datasets or train AI without permission. Consult it per word while translating; never bulk-extract it.
- **eBL dictionary** (= CDA): "reproduction … not possible without the permission of the publisher". Query it per word. The generated `glossary.md` files stay local (they are under the gitignored `eBL/*/`).

## 9. Paid sources
Moved to [`sources-registry.md`](sources-registry.md) (§9). Buying is the user's decision: ask before assuming.

## 10. Tools (`tools/`)
Moved to [`tools.md`](tools.md): every script with its usage, including each corpus's own `verify` / `build` / `grep` tools. The ones every session uses:
- `python3 -I tools/sources_sync.py fetch | verify | status` – restore and check the git-ignored sources (§8).
- `python3 -I tools/check_bible_quotes.py <files…>` – check every quoted verse; `--show בראשית "ח כא"` prints one. Run it before finishing any file.
- `python3 -I tools/ebl_fetch.py --list` and `… <genre> <cat> <index> <stage> <chapter> <out-dir>` – an eBL chapter as a working edition.
- `python3 -I tools/sumerian_workbench.py lemmas | morph | line | conc …` – ETCSL lemmas, ORACC morphology, the ETCSL-wide concordance.
- `tools/etcsl2md.py`, `tools/cdl2md.py`, `tools/seal2md.py`, `tools/cdli_composite2md.py` – converters of the corpora's formats.

When you write a tool that another session could reuse, put it in `tools/` (or the corpus folder) with a usage docstring, and add it to `tools.md`.

## 11. Lessons learned
Distilled into §5.2; the full accounts are in [`history.md`](history.md).

## Changelog
In [`history.md`](history.md) (H4). Add a line there for every change to these guidelines.
