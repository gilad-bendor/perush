# Translating Ancient Texts into Hebrew – Guidelines

> **This is a living document.**
> It is the starting point for every Claude session that translates an ancient text in this folder, and it should get better with each one.
> Every session that learns something reusable – a new source, a better tool, a translation decision that should apply everywhere, a mistake to avoid – **must update this file** (and add a line to the [Changelog](#changelog)).
> Text-specific decisions belong in that text's project folder, not here. Only what generalizes belongs here.

---

## 1. Why these translations exist

This folder is part of the `perush` repository: a methodological, allegorical commentary on the Torah (see `פירוש/הקדמה-לפירוש.rtl.md`).
The commentary reads the biblical text word by word and asks of each word: *why exactly this word?*
(See the "reverse-engineering test" in `.claude/system-prompt--Hebrew--suffix.rtl.md`.)

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

A session started by the `קלוד-תרגומי-טקסטים-קדומים` run configuration (`scripts/claude-into-rtl-file--ancient-translations.sh`) runs **in this folder**, with this file as its appended system prompt and without the repo's `CLAUDE.md`.
Paths in this file that start with `tools/`, `sources/` or a corpus folder are relative to this folder. Repo-wide paths (`פירוש/`, `תנך-מנוקד/`, `.claude/`) are relative to the repo root, two levels up (`../../`).

```
שונות/תרגומי-טקסטים-קדומים/
├── translation-guidelines.md        ← this file (living)
├── tools/                           ← reusable scripts (fetchers, converters)
├── הדפסה/                           ← one print stub per translation, mirroring the corpus folders (§7.4)
├── sources/                         ← raw material downloaded from the internet, one folder per SOURCE
│   ├── .gitignore                   ← what is NOT committed to the public repo (see §8)
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

## 3. Source hierarchy

When sources disagree, this is the order of authority:

┌──────┬────────────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Rank │ Kind                                                           │ Role                                                                                  │ Examples                                                                                             │
╞══════╪════════════════════════════════════════════════════════════════╪═══════════════════════════════════════════════════════════════════════════════════════╪══════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ 1    │ **Current critical edition** (transliteration + normalization) │ The text we translate.                                                                │ eBL (Gilgameš XI), Wasserman 2020 (Akkadian flood sources), ETCSL / ORACC (Sumerian)                 │
├──────┼────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2    │ **Dictionaries and grammars**                                  │ Determine what each word can mean.                                                    │ eBL dictionary (= CDA), CAD, ePSD2; see `Reference-tools/RESOURCES.md`                               │
├──────┼────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3    │ **Modern scholarly translations** (post-2000)                  │ Check our understanding. Never copy them.                                             │ George (eBL, Penguin), Wasserman 2020, Helle 2021, Maul 2005, Wasserman & Cohen 2026 (Hebrew)        │
├──────┼────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4    │ **Philological commentary**                                    │ Resolves cruxes.                                                                      │ George 2003 vol. 2 (via the eBL notes), NABU notes, Wasserman 2020 commentary                        │
├──────┼────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5    │ **Older translations** (pre-1990)                              │ History of interpretation, or literal checks only. Their readings are often outdated. │ Heidel 1946 (literal, with Genesis comparisons), Campbell Thompson 1928/30, Jensen 1900, Ungnad 1911 │
├──────┼────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6    │ **Literary Hebrew translations**                               │ **Register reference only**, consulted *after* drafting.                              │ Tchernichovsky 1924 (translated from German; old readings)                                           │
└──────┴────────────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘

Rules:
- Translate from rank 1, using rank 2. Consult rank 3 **after** forming your own reading of the line, to catch errors – not before, so as not to anchor on it.
- When our rendering departs from all rank-3 translations, say so in the apparatus and justify it.
- Never reproduce a copyrighted translation (especially a Hebrew one) beyond a short quotation inside a note, with attribution.

## 4. Source registry – what we have

Current as of 2026-10-19. Details and licenses are in each folder's README. Paths are relative to `sources/`.

### 4.1 Akkadian – Gilgameš SB Tablet XI (Ūta-napišti's flood story, ll. 1–206; the rest of the tablet: ll. 207–328)

┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Folder                                                                                                                                                                      │ What                                                                                                                                                                  │ Notes                                                                           │
╞═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╪═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╪═════════════════════════════════════════════════════════════════════════════════╡
│ `eBL/Gilgamesh-SB-XI/`                                                                                                                                                      │ **BASE TEXT.** A. R. George's critical edition, revised to 2026 (Rozzi, Jiménez): normalization, 18 manuscripts, George's translation, 112 notes, 518 lemmas glossed. │ Start with `reading-edition.md`. Generated by `tools/ebl_fetch.py`.              │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Wasserman-2020--The-Flood-Akkadian-Sources/`                                                                                                                               │ Wasserman, *The Flood: The Akkadian Sources* (OBO 290). Edits **all** Akkadian flood texts, including Gilg. XI, with commentary and a literary discussion.            │ Open access (CC BY-NC-ND). The second opinion on every line.                    │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `SEAL/`                                                                                                                                                                     │ Wasserman's editions online, with per-word lemma lines. Includes a Gilg. XI flood section.                                                                            │                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `George-2007--SOAS-score-XI/`                                                                                                                                               │ George's manuscript-by-manuscript score of XI.                                                                                                                        │ Superseded by eBL; useful for checking.                                         │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Heidel-1946/`                                                                                                                                                              │ Heidel, *The Gilgamesh Epic and Old Testament Parallels*. Very literal translation; ch. IV compares the flood with Genesis point by point.                            │ The old literal check, and the classic comparison.                              │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Campbell-Thompson-1928/`, `Campbell-Thompson-1930--…/`                                                                                                                     │ Verse translation (1928); text, transliteration and notes (1930).                                                                                                     │ Historical.                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Jensen-1900--KB-VI-1/`, `Ungnad-Gressmann-1911/`, `Haupt-1881-1891--Nimrodepos/`, `Smith-1873-1876/`, `Muss-Arnolt-1901/`, `King-1899/`, `Sauveplane-1892--fr-wikisource/` │ Early editions and translations.                                                                                                                                      │ Historical only.                                                                │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Kovacs-1989/`, `Livius/`                                                                                                                                                   │ Kovacs's translation (the Livius page is Kovacs).                                                                                                                     │ Copyrighted; local comparison only.                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Ben-Yehuda--Tchernichovsky-1924/`                                                                                                                                          │ **Tchernichovsky's Hebrew Gilgamesh**, public domain.                                                                                                                 │ Register reference. Translated from German: old readings, silently filled gaps. │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `Wasserman-Cohen-2026--Carmel-he/`                                                                                                                                          │ Publisher's sample of **Wasserman & Cohen, Carmel 2026**: the first Hebrew translation made directly from the Akkadian, based on George.                              │ Book not yet owned (see §9).                                                    │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ `K-3375--Flood-Tablet--references/`                                                                                                                                         │ Museum and CDLI links for the "Flood Tablet" (= eBL NinNA2a = George J₁).                                                                                             │                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────────┘

**Line numbering:** George/eBL numbering is canonical for us. The older editions (Haupt, Thompson, Heidel, Kovacs) match it up to about l. 140, then fall behind: by about 2 at the dove (George 148) and about 10 by l. 203. Their Tablet XI has about 307 lines, George's 328. Always align by content.

### 4.2 Akkadian – Atra-ḫasīs and other flood fragments

┌────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Folder                                         │ What                                                                                                                                                                                                                                                                                                                   │
╞════════════════════════════════════════════════╪════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ `Wasserman-2020--…/` + `SEAL/`                 │ **Base texts** for OB Atrahasis III (Sippar ms. C1+C2 = SEAL node 1517), the Ark Tablet (SEAL 1520), MB Nippur (CBS 13532), the Ugarit and Ḫattuša fragments, the NA and LB recensions.                                                                                                                                │
├────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `eBL-fragmentarium/`                           │ eBL transliterations of 13 tablets (DT 42, BM 98977, CBS 13532, K 3399+ …), including the newer identifications BM 38917 and BM 41330, which Wasserman 2020 doesn't have. The eBL *corpus* edition of Atrahasis (`L/1/1`) is still mostly empty: an edition is announced for 2025/26, so re-check with `ebl_fetch.py`. │
├────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `CDLI/`                                        │ Catalogue data, photos and hand copies for the relevant tablets (no transliterations).                                                                                                                                                                                                                                 │
├────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `Clay-1922--…/`, `Hilprecht-1910--…/`          │ Early public-domain editions (historical).                                                                                                                                                                                                                                                                             │
├────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `Met-Museum--MMA-86.11.378a-Atrahasis-LB/`     │ CC0 photos of the LB manuscript.                                                                                                                                                                                                                                                                                       │
├────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `Schoyen-Collection/`, `Marquez-Rowe-2016--…/` │ Catalogue pages for the Schøyen tablets; an article on MB Atrahasis tablets from Babylon (Tablets I–II).                                                                                                                                                                                                               │
└────────────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

Added 2026-10-16 (second round):
- **`eBL/Atrahasis-OB-I/`**: eBL's edition of OB Tablet I (Jiménez & Rozzi, translated by Foster), 333 lines. **Base text for Atra-ḫasīs I.** eBL renumbers parts of it (183–271) against Lambert & Millard, but its notes cite L&M, so establish a concordance first.
- **`eBL/Atrahasis-SB-I/`, `-SB-II/`, `-SB-III/`, `-MB-Bab2/`, `-MB-Priv/`, `-MB-Ug2/`**: the later recensions on eBL. Other eBL Atra-ḫasīs chapters exist only as empty shells (manuscript list, zero lines; Oct. 2026).
- **`SEAL/Atrahasis-OB/node-1515…`, `node-39732…`**: SEAL's composite scores of Tablets I and II, all periods. **Base text for Tablet II**, and for Tablet I beyond eBL's line 333.
- **`eBL-fragmentarium/`**: includes BM 38917, an unpublished late duplicate of W (DT 42) with new lines, and `Dynastic-Chronicle--ABC-18/`.

### 4.3 Sumerian – the flood story of Ziusudra, and related texts

┌─────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Folder                                              │ What                                                                                                                                                                        │
╞═════════════════════════════════════════════════════╪═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ `ETCSL/1.7.4--Flood-Story/`                         │ **Base text**: composite transliteration and translation (CC BY-NC-SA).                                                                                                     │
├─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `ORACC/epsd2-literary--Q000357--Flood-Story/`       │ The same composite with per-word ePSD2 glosses, plus the **Ur manuscript** P346146 (UET 6/1 61+, Peterson 2018), which ETCSL lacks.                                         │
├─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `ETCSL/2.1.1`, `5.6.1`, `1.8.1.3`, `2.1.2`, `5.2.5` │ King List ("after the flood had swept over"), Instructions of Šuruppag (Gilg. XI 23 quotes its Akkadian version), Death of Bilgameš, Rulers of Lagaš, Poem of Early Rulers. │
├─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `Poebel-1914--PBS-4-1/`, `Poebel-1914--PBS-5/`      │ The 1914 first edition and hand copy of CBS 10673.                                                                                                                          │
├─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `ETCSL/_bulk/`, `ORACC/_bulk/`                      │ The whole ETCSL corpus (TEI XML) and ePSD2-literary (JSON), for future Sumerian projects. Not committed (§8).                                                               │
└─────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

Added 2026-10-16: **`ORACC/cams-gkab--P363353--Uruk-List-of-Kings-and-Sages/`** (CC0), the seven antediluvian sages. The CAMS/GKAB zip also has an Uruk King List (P363352) and Neo-Assyrian Erra I tablets.

### 4.4 Greek – Berossus (Xisouthros)

┌───────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Folder                                            │ What                                                                                                                                      │
╞═══════════════════════════════════════════════════╪═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ `Berossus/DFHG--Mueller-FHG-II-digital/`          │ **Base text**: clean polytonic Greek of the flood fragment (Müller fr. 7 = FGrH 680 F4), with Müller's Latin. Abydenus fr. 1–3. CC BY-SA. │
├───────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `Berossus/Mueller-FHG-II/`, `Berossus/Cory-1876/` │ The 1848 scan; Cory's English translation (public domain).                                                                                │
└───────────────────────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

- **`Berossus/DFHG--…`, correction:** DFHG's digital text omits a printed line of fr. 7 §2 (the animals in the vessel). It is restored in the .md between ⟨ ⟩; see the README.
- **`LXX-Rahlfs-1935--el-wikisource/`**: the Septuagint (Rahlfs 1935) of Genesis, Exodus, Isaiah and 4 Kingdoms, from Greek Wikisource. License unclear, so only the README is committed. Use it for an "LXX layer" when the source is Greek (§6.4).
- **Other Akkadian and Sumerian texts in the corpus:** `eBL/Erra-SB-I/` (Erra and Išum I, Marduk on the flood) and `eBL/Gilgamesh-SB-I/` (the prologue).

### 4.4a Akkadian – Enūma eliš (the creation corpus, `סיפורי-הבריאה-המסופוטמיים/`)
- **`eBL/Enuma-elish-SB-I/` … `eBL/Enuma-elish-SB-VII/`**: **BASE TEXT.** eBL `L/1/2`, *Poem of Creation*, ed. A. C. Heinrich (rev. Z. J. Földi, E. Jiménez), translation B. R. Foster: all seven tablets, 1,098 lines (162 / 162 / 138 / 146 / 158 / 166 / 166), 23–75 manuscripts per tablet, notes, and eBL's list of **parallel lines** (repeated passages). Fetched 2026-10-16 with `tools/ebl_fetch.py`. Gitignored (eBL policy, §8). It is more complete than Lambert 2013 (*Babylonian Creation Myths*, paid, not used) and Kämmerer & Metzler 2012.
- **`King-1902--Seven-Tablets-of-Creation/`** (vol. I OCR) and **`Langdon-1923--Babylonian-Epic-of-Creation/`** (OCR): public domain, committed; history of interpretation only (rank 5), old numbering.

### 4.4b The creation and Eden companions (creation corpus, project 2)
Added 2026-10-16. Base texts of `סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/`:
- **`eBL/Adapa-MB/`, `eBL/Adapa-SB/`**: eBL `L/1/7` (T. D. N. Mitto; translation Foster): the Amarna tablet (78 lines, `1'`–`78'`) and the Nineveh fragments (97 lines, `a+1`…`f+10`). Gitignored. Second opinion on the Amarna text: **`SEAL/Adapa-MB-EA-356/`** (SEAL 1557, transliteration only).
- **`ETCSL/1.1.1--Enki-and-Ninhursaga/`, `1.1.2--Enki-and-Ninmah/`, `5.3.2--Debate-Grain-and-Sheep/`, `5.5.4--Song-of-the-Hoe/`**: ETCSL XML (from the local bulk corpus) + Markdown; committed (CC BY-NC-SA).
- **`ORACC/epsd2-literary--Q000332…`, `--P346086…` (the Ur manuscript UET 6/1 1 of Enki and Ninḫursaĝa), `--Q000333…`, `--Q000778…`**: ePSD2 lemmatisation **with the `morph` field** (`cdl2md.py --morph`); CC0, committed. Grain and Sheep (Q000761) has no text in the ORACC export: use ETCSL's TEI lemmas.
- **`eBL-fragmentarium/atf/BM.93014.atf`**: eBL's transliteration of the bilingual "Creation of the World by Marduk" / "Founding of Eridu" (CT 13 35–38; obv. 1–40, rev. 1′–27′). No duplicate found by a transliteration search. King 1902 I 130–139 (`King-1902--…/`) is the old edition (rank 5). Lambert 2013 (361–365) and Ambos 2004 (199–212) are the modern editions (not owned).
- **`SEAL/KAR-4/`** (SEAL 1600): KAR 4, the bilingual creation of man from the Alla gods (mss. A VAT 9307, B K 4175+, C A 17643), lemmatised Akkadian and an English translation. eBL's transliterations of mss. A and B: `eBL-fragmentarium/atf/VAT.9307.atf`, `K.4175.atf`.

### 4.4c Akkadian – Esarhaddon's Succession Treaty (the law and treaty corpus, `חוקים-ובריתות/`)
Added 2026-10-17. **`ORACC/saao-saa02--Q009186--Esarhaddon-Succession-Treaty/`**: **BASE TEXT** of `חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון/`. SAAo (ORACC) Q009186 = SAA 2 6, Parpola & Watanabe 1988, the Nimrud composite, 691 entries; and P500551 = SAA 2 15, the **Tell Tayinat copy** (Lauinger 2012), 443 lines, whose labels carry the composite line (`o 418A_T_v_83`), so the two align by script. Lemmatised with a **normalization of every word** (`cdl2md.py --norm`), and the English translations (P&W; Lauinger) extracted from the HTML views (`oracc_html2tr.py`). **CC BY-SA 3.0**: the .md files are committed with attribution; the raw JSON and HTML (> 1 MB) are gitignored. Lauinger 2012 (JCS 64) itself is paywalled (not obtained); the Assur fragment and later Nimrud joins are not in the 1988 composite.

### 4.4d Akkadian – the Laws of Hammurabi (the law and treaty corpus, project 2)
Added 2026-10-17. **`CDLI/P464358--Laws-of-Hammurabi-composite/`**: **BASE TEXT** of `חוקים-ובריתות/2-חוקי-חמורבי/`. CDLI P464358 (RIME 4.03.06.add21 composite): 3,641 lines (1–1120, then 1121′–3641′ after the gap), transliteration, CDLI normalization (`#tr.ts`) and English on every line; and the **Louvre stele P249253** (ATF embedded in the composite's JSON export), aligned line by line by `tools/cdli_composite2md.py`. CDLI ToU (re-use with attribution): committed. **The composite does not contain the gap laws (§66–§99)**; no open edition was found (`_records-only--Hammurabi-gap-laws-and-Hebrew/`: Cuq 1918 OCR, Ungnad 1909 hand copies, Kohler–Ungnad, D. H. Müller 1903 with a Hebrew translation). Also **`SEAL/CH-Prologue-Epilogue--node-7520/`** (Streck: prologue and epilogue with lemmas and English; gitignored) and **`Harper-1904--Code-of-Hammurabi/`** (public domain, rank 5).

### 4.4e Akkadian – the Epic of Gilgameš (the Gilgameš corpus, `אפוס-גילגמש/`)
Added 2026-10-17. **`eBL/Gilgamesh-SB-I/` … `eBL/Gilgamesh-SB-XII/`**: **BASE TEXT** of `אפוס-גילגמש/1-הנוסח-הבבלי-התקני/`: eBL `L/1/4`, *Poem of Gilgameš*, ed. A. R. George, rev. G. Rozzi and E. Jiménez (2026), George's translation; all twelve SB tablets (I 300, II 187, III 209, IV 175, V 274, VI 183, VII 219, VIII 206, IX 137, X 325, XI 329, XII 139 labels), with eBL's **parallel lines** (repeated passages, and the OB/MB/NA parallels). **`eBL/Gilgamesh-OB-<name>/`** (VA-BM, II, III, Schoeyen2, Nippur, Harmal1, Ishchali, Harmal2, IM): the OB chapters, **base text** of `אפוס-גילגמש/2-הנוסח-הבבלי-הקדום/`. All gitignored (eBL, §8). **`SEAL/Gilgamesh-OB/`** (nodes 1830, 1831, 1534, 1532, 1530, 1526): the OB tablets with per-word lemmas; their translation is George's, so it is not an independent check. Gilg. XI 1–208 stays in the flood corpus; the Gilgameš corpus embeds it.

### 4.4f The other law collections (the law and treaty corpus, projects 3–7)
Added 2026-10-18. Base texts:
- **`CDLI/P480696--Laws-of-Eshnunna-composite/`**: LE, 195 lines (date formula + §1–§60 with §9a, §18a, §47a), transliteration, `ts` and English; the exemplars **A = IM 51059** (P480693), **B = IM 52614** (P480694) and C (P480695) are embedded in the JSON and **linked line by line** to the composite (`>>Q006412 NNN`), so they align exactly. Base of `חוקים-ובריתות/3-חוקי-אשנונה/`.
- **`ORACC/tcma-laws--P281779--Middle-Assyrian-Laws-A/`**: **MAL A** (KAV 1), 828 lines, §1–§59 + colophon, ORACC `norm` + lemmas, de Ridder's English (2021; one paragraph per law, 60 units = §1–§59 + colophon); also **MAL B** (P281780, KAV 2, 245 lines, §1–§20). CC BY-SA 3.0 / CC0; the zip and HTML are gitignored. Base of `4-…-A/` and `7-…-B/`.
- **`CDLI/P464355--Laws-of-Lipit-Ishtar-composite/`** (Sumerian, 503 lines, after Wilcke 2014; 13 linked exemplars) and **`CDLI/P432130--Laws-of-Ur-Namma-composite/`** (Sumerian, 628 labelled lines, after Civil 2011 / Wilcke 2014, with Civil's additional laws b001–f008 from MS 2064 and variant notes; **no § marks**: the § concordance with Roth 1997 is in `6-חוקי-אור-נמה/project.md`). Base of `5-…/` and `6-…/`.
- **`ORACC/epsd2-royal--Q000947--Laws-of-Ur-Namma/`**, **`…--Q000613--Laws-of-Lipit-Ishtar/`** (CC0): ePSD2 lemmas and morph for the Ur-Namma prologue and §1–§11 (with § labels) and Lipit-Ištar prologue fragments; `ORACC/_bulk/epsd2-royal.zip` (15 MB, gitignored) holds the other Ur III / Isin royal inscriptions.
- Not obtained: Goetze 1956, Yaron 1988, Roth 1997, Driver & Miles 1935, Cardascia 1969, Civil 2011, Wilcke 2014.

### 4.4g Sumerian – Bird and Fish; Enki and the World Order (creation corpus, projects 3–4)
Added 2026-10-19. Base texts:
- **`ETCSL/5.3.5--Debate-Bird-and-Fish/`**: ETCSL c.5.3.5 (189 composite lines, 1–190 with 45A; 179, 181 are gaps), TEI + Markdown, committed (CC BY-NC-SA). **ORACC has no text** (Q000764 is a catalogue entry only): lemmas from ETCSL's TEI, morph from parsed instances elsewhere (`tools/sumerian_workbench.py`). Base of `סיפורי-הבריאה-המסופוטמיים/3-הציפור-והדג/`.
- **`ETCSL/1.1.3--Enki-and-the-World-Order/`** (465 lines, labels 1–472) and **`ORACC/epsd2-literary--Q000334--Enki-and-the-World-Order/`** (the same composite with ePSD2 lemma + morph for every word; CC0; the 4.2 MB raw JSON gitignored). Base of `…/4-אנקי-וסדר-העולם/`.
- **`_records-only--Mittermayer-2019--Rangstreitgespraeche/`**: Mittermayer 2019 (UAVA 15), the standard study of the debate poems, **open access (CC BY-NC-ND)** – but OAPEN answers scripts with an "Anubis" proof-of-work bot check and degruyterbrill.com returns an empty body: download it in a browser (do not try to defeat the check). Not obtained: Vanstiphout's translations (COS 1), Benito 1969 (EWO; ProQuest / Penn microfilm), Kramer & Maier 1989, Bottéro & Kramer 1989, Römer 1993.

### 4.4h Akkadian – Ludlul bēl nēmeqi and the Babylonian Theodicy (the wisdom corpus, `ספרות-החכמה-והצדיק-הסובל/`)
Added 2026-10-19. Base texts:
- **`eBL/Ludlul-SB-I/` … `eBL/Ludlul-SB-V/`**: eBL `L/2/2`, ed. A. Hätinen (rev. Földi, Heinrich, Jiménez, Mitto), translation Foster: I 120, II 120, III 121, IV 53 (fragments, `a+`…`d+` sections), V 120 = 534 labels. **`eBL/Theodicy-SB/`**: eBL `L/2/1`, ed. A. C. Heinrich and T. D. N. Mitto (rev. Jiménez), translation Foster, Khatabe, Zerkly: 288 labels (1–297), with the ancient commentary `BabaLBCom1` (= BM 66882+, CCP 1.4) in the ATF. Gitignored (§8). eBL's Ludlul III–IV numbering differs from Oshima 2014 / Lambert 1960: align by content.
- **`Lenzi-2023--Suffering-in-Babylon--OBO-300/`**: Lenzi, *Suffering in Babylon* (OBO 300, 2023), **open access** at ZORA (published PDF; no CC licence stated, so gitignored): Ludlul's composite text and translation (ch. 2), notes (ch. 3), and chapters on the omens, the body vocabulary, the exorcist, the incantation prayers, the ancient commentary and sleep paralysis. Rank 3–4 for Ludlul; Oshima's numbering.
- **`CCP/1.3--P394923--Ludlul-commentary/`, `CCP/1.4--P404917--Theodicy-commentary/`**: the Cuneiform Commentaries Project's editions of the ancient commentaries (Lenzi 2015; Jiménez 2017); © CCP, gitignored.
- **`_records-only--Wisdom-and-righteous-sufferer/`**: Lambert 1960 (BWL), Oshima 2013/2014, Annus & Lenzi 2010, Foster 2005, Klein & Shifra 1996 (Hebrew): paid or not owned.

### 4.4i Sumerian – the Lament for Ur and the Curse of Agade (the city-lament corpus, `קינות-על-ערים/`)
Added 2026-10-19. Base texts:
- **`ETCSL/2.2.2--Lament-for-Ur/`** (442 composite lines: 1–438 + 18A, 100A, 209A, 432A; the *kirugu* / *ĝišgiĝal* rubrics are lines) and **`ORACC/epsd2-literary--Q000379--Lament-for-Ur/`** (lemma + morph for every word, Emesal lemmatised to its main-dialect form; CC0; raw JSON gitignored). Base of `קינות-על-ערים/1-הקינה-על-אור/`.
- **`ETCSL/2.1.5--Curse-of-Agade/`** (284 OB lines: 1–281 + 87A, 87B, 93A; and the Ur III version, Segments A–F, 37 lines – labelled `A1`…`F7` in our files, ORACC "Ver.2, Seg.X, N") and **`ORACC/epsd2-literary--Q000375--Curse-of-Agade/`**. Base of `…/2-קללת-אכד/`.
- **`Kramer-1940--AS-12--Lamentation-over-Ur/`**: Kramer's first edition (AS 12), a free ISAC PDF (`https://isac-assets.s3.amazonaws.com/isac-publications/as12.pdf`; the `isac.uchicago.edu/…/as12.pdf` link returns an HTML page), licence not stated → gitignored; rank 5. ISAC (the former Oriental Institute) distributes its out-of-print series (AS, OIP, SAOC, CAD) this way: check it for any future Sumerian or Akkadian edition.
- **`_records-only--City-laments/`**: Samet 2014 (the current Lament-for-Ur edition; paid), Cooper 1983 (archive.org lending only), Michalowski 1989, Jacobsen 1987, Klein (COS 1), Attinger 1984, Dobbs-Allsopp 1993, Gabbay 2014, Delnero 2020.
- epsd2-literary also holds the other city laments (Q000380 Sumer and Urim, Q000381 Nibru, Q000382 Unug, Q000383 Eridug): a ready base for a later run.

### 4.5 Reference tools and comparative studies
- **`Reference-tools/RESOURCES.md`** – the catalogue of dictionaries, grammars, sign lists and APIs, with tested access mechanisms. Read it before any lexical work.
- **`Comparative-studies/INDEX.md`** – 49 studies on the Mesopotamian flood ↔ Genesis 6–9 (8 open-access PDFs downloaded; the rest listed with access status).

### 4.6 Access notes (what works from a Claude session)
- **eBL API** (no key): `https://www.ebl.lmu.de/api/texts/...` (*not* `/api/corpus/...`), `/api/words/<lemma>`, `/api/words?word=…`, `/api/corpus/query?lemmas=…` (concordance), `/api/fragments/<museum-no>`, `/api/bibliography/<id>`.
- **eBL fragmentarium by genre**: `GET /api/fragments/query?genre=CANONICAL:Historiography:Chronicles` (URL-encode the path) lists a whole text family. Search it by genre before declaring a corpus complete: it holds unpublished identifications.
- **eBL corpus chapters may exist without lines.** Check `lines` in the API response before assuming an edition exists.
- **ORACC**: only the whole-project zips work (`https://oracc.museum.upenn.edu/json/<project>.zip`); per-text JSON URLs return empty bodies. The per-text **HTML** view (`https://oracc.museum.upenn.edu/<project>/<P-number>/html`) does work, and gives the project's translation, which the zips lack. Data is CC0. For Sumerian, the CDL JSON has a `morph` field (e.g. `ha.Vmma.i.n:~`) that decides aspect and the prefix chain.
- **ETCSL**: the live site timed out (2026-10). Use the Oxford Text Archive bulk zip (`llds.ling-phil.ox.ac.uk`, item 2518) or the Wayback Machine.
- **DFHG** (Greek fragments): `http://www.dfhg-project.org/DFHG/api.php?author=<NAME>`.
- **Sefaria** `/api/words/<Hebrew>` returns Klein, BDB, Jastrow and Ben-Yehuda entries. Klein gives Akkadian cognates.
- **Blocked to scripts**: Penn Museum object pages (403), the SOAS repository (download in a browser), some publisher pages (403). OAPEN serves a bot-check page first.
- **ZORA** (University of Zurich repository; OBO volumes are open access there): the DSpace 7 API works from a script: `GET https://www.zora.uzh.ch/server/api/core/items/<uuid>?embed=bundles` → the ORIGINAL bundle's `bitstreams` → `_links.content.href` (the PDF). Check the item's rights fields: open access is not a licence.
- **CCP** (Cuneiform Commentaries Project, Yale): per-text pages `https://ccp.yale.edu/P<number>` (introduction, transliteration, translation, notes) download with a browser User-Agent; © CCP. eBL quotes the same commentaries as `…Com…` / `…Quo…` manuscripts: check the museum number against CCP before calling one new.

## 5. Workflow for a new text project

1. **Scope.** Define the text, version and line range. Create `<project-folder>/project.md`: scope, base edition, line numbering, the parallels that matter for the commentary, open decisions.
2. **Secure the base text.** Search the corpora first: eBL (`python3 -I tools/ebl_fetch.py --list`), ORACC zips, ETCSL, SEAL. Only then look for printed editions. Save everything under `sources/` per §2.2 and **add it to §4 of this file**.
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
8. **Update this file**: sources, tools, generalizable decisions, lessons learned, changelog.
9. **Final step of every translation: create its print stub** (§7.4).

For long texts, work in sections (e.g. 20–40 lines per session) and record progress in `project.md`.

**Working rules learned on the first corpus:**
- **Draft unvocalized, in plene spelling (כתיב מלא), from the start.** Then vocalize names and ambiguous words. If you strip niqqud from a vocalized draft, you get defective spellings (`ודבר`, `כסא`, `האדם` for `הָאָדֹם`). Also, a naive regex `[֑-ׇ]` deletes the maqaf (U+05BE); use `[֑-ֽֿ-ׇ]`.
- **Establish a line concordance** before translating any text that the literature cites by an older numbering.
- **Don't trust a lemma.** eBL and SEAL lemmatization have slips: e.g. XI 160 *attabak* lemmatized as *bakû*; SEAL *makkura* as *makkūru* instead of *makurru* "boat". Parse the form yourself before building a parallel on it.
- **Check the edition's translation against its own transliteration and commentary.** They sometimes disagree, so translate the transliteration and say so. The eBL composite sometimes follows a minority manuscript: record it.
- **Restorations can carry the parallel.** If a Genesis parallel rests on a restored word, say so in the parallels index itself.
- **Several texts of one corpus in parallel sessions:** fix the shared renderings before drafting, give each session a list of the lines it shares with the others, and re-sync at the end by exact string comparison. Lemma-level consistency matters too, not only identical lines.
- **Composite scores of many recensions** (e.g. SEAL): translate each score line from the oldest well-preserved witness. Put sense-changing variants in the apparatus. Number lines found only in later witnesses and tag them with their recension.
- **Translate the minor recensions too.** In the flood corpus, five of Genesis's "unique" details are each attested in a single small tablet, never in Gilg. XI.
- **Long texts with repeated passages** (learned on Enūma eliš, 2026-10-16): draft by tablet, **sequentially**, one translator at a time; fix the Hebrew of the longest repeated passage *before* drafting (it then binds every copy), and give each later translator the Hebrew of every earlier line that its tablet repeats. Use eBL's `Parallels:` field to list the repeated lines, verify them by script (identical Hebrew, or a difference justified by the Akkadian), and compare the normalizations first: eBL's "=" can join lines that share only a few words.
- **Brackets in repeated lines follow each copy's own manuscripts**: a word is in `[ ]` when its root (or most of it) is broken in all manuscripts of *that* copy, even if a parallel preserves it. Apply the rule to the transliterations (ATF), not only to the normalization: eBL's normalization sometimes brackets a word that one manuscript preserves.
- **Reserve the Hebrew word of a key Genesis comparison for its counterpart only** (e.g. `קָרָא` for *nabû* "to name" only; *šasû* "to cry out" = `צָעַק`), and avoid Hebrew words that share its root or letters (`נחת` beside `נח`; `לִקְרַאת` beside `קָרָא`).
- **Check every new Hebrew term against the Hebrew already used** (grep the `>` lines of all earlier files as strings), not only against the renderings tables: collisions are otherwise found only at review.
- **Compare the lemmas of identical repeated lines**: an eBL lemma slip in one copy (II 91 *šupurši* as "a spice") is exposed by the other.
- **Read the rank-3 translation as an echo check too**: a modern translation can import Genesis vocabulary (eBL's "firmament" for plain Akkadian words for heaven, Enūma eliš IV 141, V 121, VII 135), and its restorations can manufacture a parallel out of a lacuna (Foster's "[he shall rest]", V 142). Say so in the parallels index row.
- **Sumerian:** render narrative *marû* with the Hebrew participle as a default. Search ETCSL (TEI XML is lemmatized) for a formula before drafting a line, because formulas recur across genres. Map line numbers by gap arithmetic, checked against any line the literature quotes.
- **Learned on the creation and Eden companions (2026-10-17, seven texts):**
  - **Draft unvocalized from the very first line.** Two translators again drafted with full niqqud and had to rewrite by hand: put this rule first in every translator's brief.
  - **Grep the `>` lines for the roots of the key comparison verses and for reserved letter strings,** not only for reserved words: `עבד` entering through a frequent noun (*al-tar* "construction work", 7×), `ברא` inside `בראותו` / `בָּרִאשׁוֹנָה`, `שבת` inside `לשבת`, `דמות` inside `שדמות`. Fix the Hebrew of every frequent noun with this in mind.
  - **Reserve one Hebrew verb for the original verb of a key comparison verse and track it through the whole text** (Sum. *ĝar* / Akk. *šakānu* = `שָׂם` for Ex 4:11 `מִי שָׂם פֶּה`; *leqû* = `לָקַח` and *târu* = `שׁוּב` for Gen 3:19, 22): the strongest finds were verbal pairs invisible in English translations.
  - **Check the rank-3 translation's tenses and lemmas against the morph and the lemma:** ETCSL's "not yet" (three texts), "cursed" (an oath), "created" (a verb "to dwell") each manufactured a Genesis echo. ETCSL's own lemma sometimes contradicts its own translation in exactly the key line.
  - **Reserve `טוֹב` for the cognate** (*ṭābu*, Sum. *dug₃*) and give every other "good" adjective its own word; likewise `טֶרֶם` only for a real "not yet" construction, `לְעוֹלָם` never for *dārû* / *ṣâtu* (`לִימֵי נֶצַח`, `לִימֵי עַד`).
  - **Describe a defect or a state as the original describes it** (Enki and Ninmaḫ's disabled people; Grain and Sheep's "bare limbs"), and put the biblical term (`עִוֵּר`, `עֵירֹם`) in the apparatus.
  - **A single-witness passage has no variants, only readings** (two editors of one tablet); map a manuscript to the composite by its columns before speaking of a "version".
  - **When ORACC has no text, build a form index of the whole ORACC zip** (form → cf, gw, morph) and look up the text's verbal forms; mark the rest as our own analysis.
  - **Bilinguals:** translate the Akkadian, give the Sumerian in the apparatus, tag Sumerian-only lines `{שומרית}` (§6.8), and count the creation verbs per language: the ancient translators' equations (Sum. *mu₂* "grow" → Akk. *banû*; *tuku* "acquire" → *šubšû*) are evidence in themselves. An unlemmatised eBL ATF can be a base text: print our normalization beside it.
  - **Generate the annotated and clean files from one line-by-line data file** when possible (Adapa), so that `verify.py` only confirms.
  - **Read colophons and catch-lines as data:** KAR 4's Nineveh copy ends with the first line of Atra-ḫasīs.
- **Learned on Esarhaddon's Succession Treaty (2026-10-17, 691 + 443 lines, seven sequential translators):**
  - **When the Bible's own vocabulary is the natural Hebrew for the source** (treaty ↔ Deuteronomy), fix a **list of reserved Deuteronomic words** before drafting (`בְּרִית`, `סָרָה`, `כִּסָּה`, `שָׁמַר`, `מָטָר`, `דֶּבֶר`, `שְׁחִין`, `אֲפֵלָה`, `בְּכָל לְבַבְכֶם`, `תֹסֵף`/`תִגְרַע`; later also `הֵסִית`, `אָבָה`, `חֹסֶר`, `מָצוֹק`, `יְבוּל`, `תּוֹעֵבָה`, `מָנוֹחַ`), keep them out of the `>` lines by script, and use a Deuteronomic word only for its cognate or exact equivalent, tagged. Otherwise the translation itself manufactures the parallels.
  - **Fix the split forms of every long formula**, not only the whole string: line breaks fall inside the formulas constantly. Vocalized first occurrences must strip to the plain plene string (`הַיְּרוּשָּׁה`, not `הַיְּרֻשָּׁה`).
  - **A formula/lemma check script** (`חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון/verify.py`) must strip brackets and tags, anchor lemma names (`adû[` inside `ḫadû[`), and list "identical normalization, different Hebrew" for review rather than as errors.
  - **Keep the oath form literally** (`אם אתם … לא תנצרו`): Hebrew has the same elliptic oath syntax. NA oath clauses without *šumma* need `(אם)`; statements and plain prohibitions (no subjunctive *-ni*) need none; the SB curse list has none.
  - **A parallel copy found after the edition (Tayinat) must be compared with every `[ ]` of the composite**: it overturned several 1988 restorations, among them key words of Deut 28 parallels (440 rain; 470 blood; 658). Distinguish a *fill* (`{תיינת: …}`, where the composite is broken) from a *plus* (an intact composite line lacks the word: apparatus only).
  - **Track Hebrew words across translators by Akkadian lemma**: two Akkadian verbs met in one Hebrew word (`קלה`, `קנה`, `דלת`) and had to be separated at the end.
  - **Read the etymology of the biblical word, not only its meaning** (*siāqu* ~ `יָצִיק`, Deut 28:53, hidden by Geers' law).
- **Learned on the Laws of Hammurabi (2026-10-17, 3,641 lines, twelve sequential translators in priority order):**
  - **When a text must be done in priority order, cut the annotated files by contiguous ranges and let a translator fill only some laws of a file**, with a placeholder comment (`<!-- טרם תורגם: §6–§13 -->`) in place of the rest; `verify.py` counts the not-drafted lines per file and fails only with `--strict`. One shared `lh_config.py` (files, topics, the composite parser, the witness alignment) keeps the data builder, the verifier and the translation builder in step.
  - **A common brief file** (in the scratchpad) read by every translator, plus a short per-run prompt with the block's key cases, kept twelve runs consistent; each translator grepped all earlier `>` lines and wrote its new strings as "Proposals" for the next.
  - **Check the class of every lemma in the whole text before reserving a Hebrew word for it**: `המית` was given to *dâku* Š in one block although *mâtu* Š (the cognate of `וְהֵמִית`) occurs nine times elsewhere; `משפט` was "reserved because LH has no *šipṭu*" – it has, once. Grep the normalization of the whole text first.
  - **One Akkadian verb ≠ the Torah's two**: LH has one goring verb (*nakāpu* = `נגף`, the cognate of Exod 21:35 `יִגֹּף`), Exodus two (`יִגַּח`, `יִגֹּף`); the pregnant-woman law uses *maḫāṣu*, while Exodus uses `נָגַף`. Such distributions are visible only if each verb has one fixed Hebrew rendering.
  - **The rank-3 normalization has slips** (CDLI: English words in the `ts` line, dropped words, *ina*/*ana*, wrong person): translate the transliteration and note it; check the composite against the main witness (the stele) by script.
  - **Formula checks must allow gender, number, the conjunction of a preceding *-ma*, and final letters** (`מחץ` / `מחצ`, `ישלם` / `ישלמו`, `תתן`, `תהרג`, `תקח`): the translators widened several patterns; write them that way from the start.

- **Learned on the Epic of Gilgameš (2026-10-17/18, 3,217 lines, thirteen sequential translators):**
  - **When an earlier corpus already holds part of a text, embed it, don't copy it**: the combined translation includes flood XI 1–208 with a nested `<כלול-בהדפסה מ="…">` (relative to the including file; nesting works), and `verify.py` reads the other corpus's annotated file read-only so that every repeated line is checked against it. Copy only short overlaps (I 1–28), and check them by script.
  - **Reserve one Hebrew word for each Akkadian word of the key Genesis verses before the first tablet, and check the lemma behind every hit by script** (`אפוס-גילגמש/verify.py`, RESERVED: `טיט` only for *ṭiṭṭu*/*ṭīdu*/*ṭīdiš*, `עפר` only for *eperu*, `נחש`, ארר, and never `עוֹלָם`, `טֶרֶם`, `פָּתַר`, `צָבַר`, `כְּנֶגְדּוֹ`, `עֵדֶן`). The check must accept eBL's lemma variants (*arru* for *arratu*, adverbs in *-iš*) – widen the allow-list rather than bend the Hebrew.
  - **Ban the iterative paraphrase `שוב ושוב` when שוב is reserved** (for *târu* ↔ Gen 3:19): Gtn/Dtn/Štn = `פעם אחר פעם`, a doubled verb or a participle.
  - **eBL's `Parallels:` field has false positional links** (I 254–265 → II 269–288; III 88 → V 137; VI 140 → 142, and others): treat it as a list to inspect, not as ground truth; compare identical normalizations across the corpus as a second net (`parallels_for.py` does both).
  - **Read the transliteration before believing a coordinator's key line**: several prompts quoted the literature's paraphrase (OB III "I will establish my name" is *šumī lū ušzīz*; XII's god is Šamaš, not Nergal; IX's darkness is *šapât*). The translators followed the edition and said so; keep briefs to "look for", not "translate as".
  - **Let translators generate the annotated and clean files from one data file** (most did, from scratchpad scripts): the clean file can never drift from the `>` lines.
  - **Plene spelling of a vocalized fixed passage must be fixed once** (X 40–71: `זיווך`, `פניי`, `עליי`): later copies copy the plene first copy, not the vocalized table.
  - **Merge each translator's proposals into the corpus renderings between runs**, numbered by run (`renderings.md` §9–§21), so later translators read one file; resolve collisions immediately (e.g. *wabālu* `הֵבִיא` vs *warû* `הוֹבִיל`).

- **Learned on the other law collections (2026-10-18, LE 195 + MAL A 828 + LI 503 + UN 628 + MAL B 245 lines, nine sequential translators):**
  - **One shared config and four generic scripts for several base texts** (`חוקים-ובריתות/laws_config.py` with CDLI and ORACC parsers, `laws_build_data.py`, `laws_verify.py`, `laws_build_translation.py`, `laws_lookup.py`) carried five projects; add a project as a `PROJECTS` entry, not as new scripts.
  - **CDLI exemplar ATFs carry `>>Q… <label>` links to the composite line**: use them for an exact line-by-line witness alignment (no difflib); a mistyped link (`07` for `070`) shows up as a line without witnesses.
  - **"Identical formula = identical Hebrew" across collections must be checked by lemma, not only by identical normalization**: the cross-collection identical-normalization check found almost nothing (different dialects and spellings), while a lemma-by-lemma lookup against LH (`laws_lookup.py`) changed several renderings. Give every translator the lookup tool and make "look it up before fixing a word" a rule.
  - **A Sumerian legal formula takes the Hebrew of its Akkadian equivalent** (*tukum-bi* = *šumma* = `אם`; *la₂* = *šaqālu* = `ישקול`; *ama-ar-gi₄* = *andurāru* = `דרור`; *ur₂ … nu₂* = `בחיקה שכב`; *nam-tag il₂* = *arnam našû* = `עונו ישא`): the same law then reads the same in Sumerian and Akkadian, and the Sumerian–Torah contacts become comparable with LH's.
  - **Lemma-gated words** (`laws_verify.py` GATED: `בתולה` only for *batultu*, `זונה` only for *ḫarimtu* / *kar-kid* / *kar-ke₄*, `צעק` only for *šasû*, `המית` only for *mâtu* Š …) are the right tool when a Torah key word is also the natural rendering of its real cognate; widen the allow-list for spelling variants rather than bend the Hebrew.
  - **The rank-3 brief can be wrong about the tablet**: the coordinator's list named *zaqānu*, *kalūmā*, *ana niāke* in MAL A, which the tablet does not have (*gadāmu*, an iterative form, *ana mazāʾe*); the translators followed the transliteration. Keep briefs to "look for".
  - **Quote Deuteronomy 22 with the ketiv `נַעֲרָ`** (no ה), as `תנך-מנוקד/` has it.
  - **A composite without § marks** (Ur-Namma): head each law `## §N (a–b)` with the standard number where the content identifies it and `## חוק (a–b)` otherwise, keep a concordance table with a certainty column, and key the clean translation's topic headings by composite label (`'@b001'` in `laws_config.TOPICS`).

- **Learned on Bird and Fish and Enki and the World Order (2026-10-19, 189 + 465 lines, three sequential translators, EWO's key half first):**
  - **Find the formulas in the transliteration before fixing them in the renderings.** The coordinator pre-fixed an EWO appointment formula "*ugula-bi-še₃ ĝar*" from the literature's paraphrase ("placed in charge"); the text has *{d}en-ki-ke₄ zag-ba nam-mi-in-gub* "Enki set (him) standing at its side" 13 times, and the translator corrected it. Run `sumerian_workbench.py conc` on every formula you intend to fix.
  - **Keep the kind-word and the motion-word apart when the commentary's dictionary distinguishes them** (*mušen* = `צִפּוֹר`, *dal* "fly" = `עָף`; `עוף` licensed by script only beside *dal*): the closest line to Gen 1:20 (B&F 129 *dal-dal* = `מְעוֹפֶפֶת`, the reduplication of Polel `יְעוֹפֵף`) became visible, and so did the fact that EWO never names birds by their flight.
  - **A reserved-string check must name the Sumerian word that licenses each string** (`טוב` only beside *dug₃*, `כנף` beside *pa* / *a₂*, `ברך` beside *šud₃* / *dub₃*): it caught `דברך` (ברך), `בראש` (ברא) and `סוחורמש` (רמש) in compounds, and it makes the distribution of `טוב` a finding (B&F: only the bird's voice is "good").
  - **Name traps are errors only when the transliteration has the name** (`אותו` is "him" unless *{d}utu* is in the line; `איננה` is "is not" unless *inana*); otherwise the check drowns in false positives. New traps: Urim `אוּר` ("light") and Sumer `שׁוּמֶר` ("guard") must be vocalized.
  - **When the annotated files are drafted in priority order** (EWO 250–472 before 1–249), the verifier must treat a not-yet-written file as a note, not an error (`--strict` at the end), and the builder must skip it.
  - **Compare repeated lines after stripping brackets and quotation marks:** each copy brackets by its own manuscripts, so raw string comparison reports false differences.
  - **Tell translators the exact table format the corpus builder reads** (heading `### Parallels index (<Text>)`, columns `| Line | … |`): a wrong format in the first brief had to be corrected mid-run.
  - **ETCSL's English again imported creation language** (EWO 361 "created" for *du₃* "build", 446 "create" for *sig₁₀* "put", "called" for *gu₃ de₂* "address", B&F 166 "like Enki" with no "like"): the corrected readings are findings for Gen 1, Deut 32:39, Isa 45:7.
  - **The *ḫe₂-* prefix is not always a wish**: with ḫamṭu in a list of what others received (EWO, Inana's complaint) it can be affirmative ("indeed she got"); the translator read it so against ETCSL's "is to get" and recorded the choice (project 4 open decision 4).

- **Learned on Ludlul bēl nēmeqi and the Babylonian Theodicy (2026-10-19, 534 + 288 lines, six sequential translators):**
  - **Fix a reversal passage in both directions before drafting it, nouns *and* verbs** (Ludlul II 51–57 ↔ III 69–75; the body of II ↔ the healing of III; I–II ↔ V): read the Akkadian of the later copy first (II's *lā nêʾi* "unreturnable" is answered by III's *utīr*, so II must not use שוב), and give the later translator a table of the earlier Hebrew *strings*, not only a lemma index. The cure then reads as the undoing of each symptom.
  - **The ancient commentaries are rank 4 for single words and expose lemma slips** (Ludlul K 3291, the Theodicy's BM 66882+): they decided a dozen renderings, distinguished homonyms the edition's lemma confused (*būṣu*, *mammû*, *ḫuršānu*), and their lemmata count as manuscripts for brackets. Quote them in the notes: they are also the ancient reading of the text.
  - **Check the coordinator's own tables with `check_bible_quotes.py` and against every corpus** before the first run: the pre-set renderings had seven misquoted verses and two terms already fixed differently elsewhere (*parṣu* / *pelludû* in Enūma eliš, *muštālu* in LH).
  - **A cross-language pun needs a method fixed before its first instance** (the twelve gates of Esagil, whose Sumerian names predict the gift received in each): transliterate, add a quoted Hebrew gloss worded with the Hebrew of the gift, same name = same gloss.
  - **Particles can be cognate where content words are not** (*lūman lā* = `לוּלֵא`, Ps 94:17; 124:1–3), and so can idioms hidden by English (*ana balāṭ* "next year" = `כָּעֵת חַיָּה`, Gen 18:14).
  - **A first draft must be unvocalized from the first line – again** (one more translator drafted vocalized and rewrote 134 lines): keep it the first rule of every brief.
  - **Do not open a translation intro paragraph with bold text** when a builder reads `**label**` lines as numbered lines.

- **Learned on the Lament for Ur and the Curse of Agade (2026-10-19/20, 442 + 321 lines, five sequential translators):**
  - **Pre-set the refrains, let the first translator revise them with a reason, then enforce them by regex** (`lament_tools.py` FORMULAS): run 1 corrected three of the coordinator's pre-set refrains (a `ב־` taken from ETCSL's "in"; a participle for a noun phrase; "his" for *-bi* "that"), and the script then held 35 + 23 + 34 copies identical across three files. Write the regex for plene and defective spellings and for the Emesal and main-dialect forms (`ני?גשה`; *nam … ku₅* and *na-aĝ₂ … kud*; *mu(-un)-na-te*).
  - **Anchor gated strings at a word start** (`נכר` caught `נכרת` from *kud*) and **license them by every spelling of the Sumerian word** (*taka₄*, *tag₄*, *da₁₃*).
  - **When the Bible's genre-words are the natural Hebrew** (a city lament ↔ Lamentations), reserve them outright – `אֵיכָה`, `קִינָה`, `כָּבוֹד`, `שְׁכִינָה`, `גלה` / `גָּלוּת`, `בַּת` + a city – and render the Sumerian's own words (*a-gin₇* `איך`, *a-še-er* `אנחה`, *muš₃ de₆* `נטש`, *nam-dugud* `כובד`, *e₃* `יצא`). The parallels are then visible as [equivalent]s, and the absences (no exile word, no "daughter", no sin) become findings.
  - **The rank-3 English imported the Bible's theology, not only its words**: ETCSL's "righteous" / "innocent" (*zid*), "exiled" (*e₃*), "return!" (no verb), "before the time when cities were built" (no "before"), "tried to alter" (no "try"). Each corrected reading was a finding (no sin of Ur; the king's sin is disobedience to an omen, not pride).
  - **"The Sumerian takes the Hebrew of its Akkadian equivalent" makes cross-language cognates visible**: *u₈* = *laḫru* ~ `רָחֵל` (the ewe bereft of her lamb, Jer 31:14), *du₆* = *tīlu* = `תל`, *ad₆* = *pagru* = `פגר`, *kur₂* = *nakru* ~ `נכרי` (Lam 5:2), *ur₅* = *kabattu* = `כבד` (Lam 2:11), *nam ku₅* = *arāru* = `ארר` and *gi₄* = *târu* = `שוב` (Agade 231–236 ↔ Gen 3:17–19).
  - **A fragmentary earlier version** (the Ur III Agade) is translated as its own segments, mapped line by line to the later version (the first translator's content mapping was corrected by the second: check by script or by hand), identical Sumerian = identical Hebrew, and its *absences* are recorded (no explicit sin in Ur III).
  - **Do not open an intro paragraph with bold text** (a builder reads `**label**` as a numbered line) – repeated here because the coordinator made the same mistake again.

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

┌────────────────────────────────────────────────┬──────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Akkadian (George/eBL)                          │ Hebrew (our form)                                │ Other Hebrew forms in use                                                                              │
╞════════════════════════════════════════════════╪══════════════════════════════════════════════════╪════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ Gilgāmeš                                       │ גִּלְגָּמֶשׁ (plain text: גילגמש, as in the commentary) │ גלגמש                                                                                                  │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ūta-napišti (rūqu "the Far-Away")              │ אוּתְנַפִּשְׁתִּי (הָרָחוֹק)                                 │ אותנפישתים (Hebrew Wikipedia, common); אוּת־נַפִּשְׁתִּים (Tchernichovsky); אותנפישתי (Wasserman & Cohen 2026) │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Atra-ḫasīs                                     │ אַתְרַחֲסִיס                                          │ אתרחסיס                                                                                                │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ziusudra (Sum.), Xisouthros (Gk.)              │ זִיוּסוּדְרָה; קְסִיסוּתְרוֹס                              │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ea                                             │ אֵאָה                                              │ אאה                                                                                                    │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Enlil / Ellil                                  │ אֶנְלִיל                                            │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Anu                                            │ אָנוּ                                              │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ninurta                                        │ נִינוּרְתָּה                                          │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ennugi                                         │ אֶנּוּגִי                                            │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Šurippak / Šuruppak                            │ שׁוּרוּפַּךְ                                           │ שורופך (Wikipedia), שׁוּרִיפַּק (Tchernichovsky)                                                            │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ubār-Tutu                                      │ אוּבָּר־טוּטוּ                                        │ אוּבָּרָה־תּוּתוּ (Tchernichovsky)                                                                            │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bēlet-ilī                                      │ בֵּלֶת־אִילִי                                         │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ištar                                          │ אִשְׁתַּר                                             │ עִשְׁתָּר (Tchernichovsky)                                                                                  │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Šamaš                                          │ שַׁמַשׁ                                              │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Adad                                           │ אֲדַד                                              │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Šullat and Ḫaniš                               │ שׁוּלַּת וְחָנִישׁ                                       │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Errakal (= Nergal)                             │ אֶרָּכַּל                                             │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Anunnakkū                                      │ אֲנוּנָּכִּי                                           │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Mount Nimuš                                    │ הַר נִימוּשׁ                                         │ הר ניציר / נִיסִיר (old reading)                                                                         │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Puzur-Ellil / Puzur-Enlil (the boatman, XI 95) │ פּוּזוּר־אֶנְלִיל                                      │ פּוּזוּר־אָמוּרִי (old reading)                                                                              │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ur-šanabi                                      │ אוּרְשַׁנַבִּי                                          │ אורשנבי                                                                                                │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Puratti (Euphrates)                            │ פְּרָת                                              │                                                                                                        │
├────────────────────────────────────────────────┼──────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Uruk                                           │ אוּרוּךְ (note: = אֶרֶךְ, Gen 10:10)                   │ אוּרוּךּ (Wasserman & Cohen)                                                                              │
└────────────────────────────────────────────────┴──────────────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┘

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
- **False friends and traps (law collections):** *erēšu* "request" ~ `ארש` (Klein: a possible source; not used); *naqābu* "deflower" ~ `נקב` / `נְקֵבָה` (open); *zaqāpu* "impale" = Aram. `זקף` (Ezra 6:11); *āšipu* = `אַשָּׁף`; MA *ḫupšu* (`חֻפְשׁוּ`, transliterated) ≠ `חָפְשִׁי`; Inanna must be vocalized `אִינַאנָּה` (`אִינַנָּה` strips to `איננה`).
- **Creation corpus projects 3–4 (`סיפורי-הבריאה-המסופוטמיים/renderings.md` §6–§8, 2026-10-19):** *mušen* = `צִפּוֹר` (not `עוֹף`), *dal* = `עָף` / `עוֹפֵף`, *pa* = `כָּנָף`, *ku₆* = `דָּג`; *si* = `מִלֵּא` and *lu* = `רָבָה` / `הִרְבָּה` always tagged (↔ 1:22); *me* = `הַ־מֶה` (always vocalized; the flood corpus's *me maḫ* `הַכֹּחוֹת הַנִּשְׂגָּבִים` is an open split); *ĝiš-ḫur* = `צוּרָה` (= *uṣurtu*); *nam tar* = `גָּזַר גּוֹרָל`, never `בֵּרַךְ`; *zid* = `אֱמֶת` (`זֶרַע אֱמֶת`, Jer 2:21); *in … dub₂* = `חֵרֵף`; *e₂-gal* = `הֵיכָל` [cognate]; *šeĝ₃* = `הִמְטִיר` / `מָטָר`; the EWO appointment formula `אֶנְקִי לְצִדּוֹ הֶעֱמִיד`; *gu₃ de₂* = `פָּנָה אֶל` (never `קָרָא`); Inana `אִינַנָּה` always vocalized in this corpus (the law corpus writes `אִינַאנָּה`: an open cross-corpus split).
- **Wisdom corpus (`ספרות-החכמה-והצדיק-הסובל/renderings.md`, 2026-10-19):** personal religion: *ilu* "my god" = `אֵלִי` and *ištaru* = `אֵלָה` **always vocalized** (unvocalized "to me", "these"); *šēdu* / *lamassu* `רוּחַ־מָגֵן` / `אֵלַת־מָגֵן`; the demons transliterated in lists (*utukku* `אוּטוּכּוּ`, *alû* `אַלּוּ`, *lamaštu* `לַמַשְׁתּוּ`, *šūlu* `שׁוּלוּ`; *rābiṣu* `רוֹבֵץ` [cognate, Gen 4:7]); *bārû* / *barû* = `הַבּוֹחֵן` / `בָּחַן` (↔ `בֹחֵן לִבּוֹת`), *šāʾilu* `הַשּׁוֹאֵל`, *mašmaššu* `מְלַחֵשׁ`, *āšipu* `אַשָּׁף`; *palāḫu* of gods = `יָרֵא` (a deviation from `פָּחַד`); *kabattu* = `כָּבֵד` (the organ kept; ↔ Lam 2:11); *māmītu* = `שְׁבוּעָה` here (law corpus `אָלָה`, which would collide with `אֵלָה`); *paṭāru* = `פָּטַר` [cognate]; *rēmu* / *rēmēnû* = `רַחֲמִים` / `רַחוּם`; *anāḫu* / *tānēḫu* = `נֶאֱנַח` / `אֲנָחָה` [cognate]; *eršu* `עֶרֶשׂ`; *uriqtu* `ירקון` (Deut 28:22); *aḫulap* = `רַב!`; one Hebrew word per anger lemma (eleven of them in Ludlul I 1–40). Reserved in this corpus: `צַדִּיק` / `צֶדֶק`, `תָּם`, `גֹּאֵל`, `שָׂטָן`, `מַלְאָךְ`, `שְׁאוֹל`, `הֶבֶל`; `עָזַב`, `טוֹב`, `יָשָׁר`, `רחם`, `קֶבֶר`, `חֶסֶד`, `נָקִי`, `רָשָׁע` only for their Akkadian counterpart.
- **False friends and traps (wisdom corpus):** Akk. *pāna nadānu* "give the face" = favour, Heb. `נָתַן פָּנִים בְּ־` = hostility (render `נתן (לי) את פניו`); *sarāru* "be false" ~ `סָרַר` "rebel"; a "knotted" heart (*libba kaṣāru*) is angry in Akkadian, loving in Hebrew (Gen 44:30); *šiptu* "incantation" rendered `קֶסֶם` pre-empts Deut 18:10 (open); the partridge `קוֹרֵא` contains the reserved `קרא`; `אֵלֵיכֶם` "your gods" reads "to you".
- **City-lament corpus (`קינות-על-ערים/renderings.md`, 2026-10-19):** *muš₃ … de₆* (Emesal *ga*) "carry away the presence" = `נָטַשׁ` (reserved; ↔ Ps 78:60, Jer 12:7); *lil₂* = `מַשַּׁב` (= *zaqīqu*); *a-nir* / Emesal *a-še-er* = `אֲנָחָה` (= *tānīḫu*), *še ša₄* = `נָהָה` (so that Lam 1:11's one verb shows two Sumerian words); *gig* = `מַר` (note: "sick, painful"); *uĝ₃* = `עָם` (a deviation from the creation corpus's `הָאֲנָשִׁים`); *ud* = `סְעָרָה` / `יוֹם` (the pun noted, never kept); *en₃-še₃* = `עַד מָתַי`, *en₃-tukum-še₃* = `עַד אָנָה`; *a-gin₇* = `אֵיךְ` (`אֵיכָה` reserved); *me-li-e-a* = `אוֹי לִי`, *a* / *u₃-a* = `הוֹי`; *kur₂* = `נָכְרִי` [cognate via *nakru*] (↔ Lam 5:2), verb `שִׁנָּה`; *lu₂-erim₂(-gin₇)* = `(כְּ)אוֹיֵב`; *du₆* = `תֵּל`, *ad₆* = `פֶּגֶר` [cognates via *tīlu*, *pagru*]; *ur₅* "liver, mood" = `כָּבֵד` (= *kabattu*); *nam … ku₅* (Emesal *na-aĝ₂ … kud*) = `אָרַר` (= *arāru*), *aš₂ … bal* = `קִלֵּל`; *gi₄* / *gur* = `שׁוּב` (= *târu*); *im* = `טִיט`; *nam-tag* = `עָוֹן`, *nam-tag du₈* = `פָּטַר עָוֹן`; *nam-dugud* = `כֹּבֶד` (= *kabtūtu*; `כָּבוֹד` reserved); *an-zil* = `תּוֹעֵבָה`. Reserved in this corpus: `אֵיכָה`, `קִינָה`, `כָּבוֹד`, `שְׁכִינָה`, `גלה` / `גָּלוּת`, `בַּת` + a city, `צִיּוֹן`.
- **False friends and traps (city laments):** ETCSL's "righteous" / "innocent" for *zid* ("true, proper": `נֶאֱמָן`, `אֱמֶת`) imports a moral claim; ETCSL's "exiled" (LU 306–307) is *e₃* "go out"; ETCSL's "return!" (LU 378–380) has no verb; *tag* "touch" ≠ *tag₄* "abandon"; Hebrew `הוּשְׂמָה` ("was set") reads `הָשַּׁמָּה` ("made desolate") – use `שׂוּמָה`; `עמי` "my people" / `עִמִּי` "with me", `עמה` likewise; `באו` (Bau), `אומה` (Umma), `אן` (An), `קי־אור` (Ki-ur) must be vocalized; Sum. *u₈* "ewe" = Akk. *laḫru* ~ `רָחֵל` (a cognate through the Akkadian: note it where a mother weeps).
- (Add more as they arise.)

### 6.8 Uncertainty and damage: notation
Use the same notation in both the annotated and the clean translation:

┌──────────────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Mark             │ Meaning                                                                               │
╞══════════════════╪═══════════════════════════════════════════════════════════════════════════════════════╡
│ `[מילה]`         │ restored (the text is broken here; the restoration is the editor's, or ours if noted) │
├──────────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ `…` / `[…]`      │ untranslatable or missing                                                             │
├──────────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ `(מילה)`         │ added for sense, not in the original                                                  │
├──────────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ `מילה?` or `(?)` │ uncertain reading or meaning                                                          │
├──────────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ `*מילה*`         │ uncertain translation (George's italics convention)                                   │
├──────────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ `⟨מילה⟩`         │ omitted by the scribe, restored                                                       │
└──────────────────┴───────────────────────────────────────────────────────────────────────────────────────┘

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
- **Our translations are original work** and are committed. They may quote modern translations only briefly, in the apparatus, with attribution.
- **CAD (ISAC)** terms forbid using its publications to compile datasets or train AI without permission. Consult it per word while translating; never bulk-extract it.
- **eBL dictionary** (= CDA): "reproduction … not possible without the permission of the publisher". Query it per word. The generated `glossary.md` files stay local (they are under the gitignored `eBL/*/`).

## 9. Paid sources

Buying is the user's decision; ask before assuming. Status as of 2026-10-16, ranked by value for the current work:

┌───┬──────────────────────────────────────────────────────────────────────────────────────────────────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ # │ Item                                                                                             │ Price (approx.)                    │ Why                                                                                                                                        │
╞═══╪══════════════════════════════════════════════════════════════════════════════════════════════════╪════════════════════════════════════╪════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ 1 │ **Wasserman & Cohen, *עלילות גלגמש*** (Carmel 2026) – Hebrew, from the Akkadian, based on George │ e-book ₪26 (e-vrit); print ₪59–118 │ The only modern scholarly Hebrew translation: the essential rank-3 check for the Hebrew, and for current Hebrew name forms.                │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ **Tawil, *An Akkadian Lexical Companion for Biblical Hebrew*** (Ktav 2009)                       │ about $80                          │ Organized by Hebrew root, with Akkadian cognates and idioms: exactly the echo-control question (§6.4), and reusable for every future text. │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ **George, *The Epic of Gilgamesh*** (Penguin, revised ed.)                                       │ about £10–12 / e-book              │ George's polished translation with an introduction. Cheap; the eBL translation largely covers it.                                          │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 │ **Lambert & Millard, *Atra-ḫasīs*** (Eisenbrauns reprint)                                        │ about $40                          │ Standard line numbering of Atrahasis I–III and the Sumerian flood story (Civil). Needed only when we translate Atrahasis.                  │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5 │ Huehnergard, *A Grammar of Akkadian* (3rd ed.) + *Key*                                           │ about $80–120                      │ Reference grammar. Useful, not essential: the eBL dictionary and the commentary notes carry most of the load.                              │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ — │ George, *The Babylonian Gilgamesh Epic* (OUP 2003, 2 vols)                                       │ about $570–620                     │ The full commentary on every line. **Library**, not purchase: the eBL notes quote it at the cruxes.                                        │
└───┴──────────────────────────────────────────────────────────────────────────────────────────────────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

Free alternatives already cover the base texts, so nothing is strictly *required* to start.

## 10. Tools (`tools/`)

┌────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Script         │ What                                                                                                                                                   │ Usage                                                                                                                                 │
╞════════════════╪════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╪═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ `ebl_fetch.py` │ Downloads an eBL corpus chapter and builds `reading-edition.md`, `glossary.md`, `manuscripts.md`, `bibliography.md`, `chapter.atf`. Caches in `_raw/`. │ `python3 -I tools/ebl_fetch.py --list`  ·  `python3 -I tools/ebl_fetch.py L 1 4 "Standard Babylonian" XI sources/eBL/Gilgamesh-SB-XI` │
├────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `etcsl2md.py`  │ ETCSL TEI XML → Markdown (Unicode transliteration, subscript indices).                                                                                 │ `python3 -I tools/etcsl2md.py <c-or-t.xml> <out.md> [url]`                                                                            │
├────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `cdl2md.py`    │ ORACC CDL JSON (from a project zip) → Markdown with lemmatization.                                                                                     │ `python3 -I tools/cdl2md.py <zip> <member> <out.md> <title> <url>`                                                                    │
├────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `dfhg2md.py`   │ DFHG API JSON (Greek fragments) → Markdown.                                                                                                            │ `python3 -I tools/dfhg2md.py <in.json> <out.md> <title> <api-url> [frags]`                                                            │
└────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

More tools (2026-10-16):
- **`check_bible_quotes.py`**: checks every backticked, vocalized Bible quotation that is followed by a reference against `תנך-מנוקד/`. It normalizes Unicode, allows prefixes and quotations that run on into the next verses, and defaults to Genesis. `python3 -I tools/check_bible_quotes.py <files…>`; `--show בראשית "ח כא"` prints a verse. **Run it before finishing any project.** Note: the Psalms and Proverbs files use a hyphen-minus for maqaf, so keep the `-` in quotations from them.
- **`ebl_fetch.py`** (fixed 2026-10-16): notes are now taken from the JSON (the ATF omits many), and range lines (`66-67`) are labeled.

More tools (2026-10-16, creation corpus):
- **`ebl_fetch.py`** (fixed again): a line with several **variant reconstructions** now prints all of them (`**N (variant, other manuscripts):**`) with their manuscripts; before, the second variant and its manuscripts were silently dropped. Re-run it on older eBL folders if a line looks incomplete.
- **Project-level verification pattern** (`סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/verify.py`): checks the annotated entries against eBL's line list, the translation lines against the annotated `>` lines, every pair of eBL "parallel lines" (bracket-only differences listed separately), and a fixed passage against its table in `renderings.md`. Copy and adapt it for any eBL-based multi-tablet project. The same folder has `build_translation.py` (one reading file from per-tablet files) and `build_parallels_index.py` (merges per-tablet parallels tables into the corpus `parallels-index.md`, ordered by verse).

More tools (2026-10-16, creation corpus project 2):
- **`seal2md.py`**: a saved SEAL text page → Markdown (catalogue fields; the text table line by line, with bilingual continuation lines marked `↳`; SEAL's per-word lemmas; the translation). `python3 -I tools/seal2md.py <node-N.html> <out.md> <url>`. SEAL returns an error page to curl's default User-Agent: download with a browser UA (see the docstring).
- **`cdl2md.py --morph`**: the ORACC converter now prints each word's ePSD2 `morph` and base (`{ba.n.da:~;a,bi.a;nud}`), the Sumerian "check the stem" (§4.6).
- **`check_bible_quotes.py`** (fixed 2026-10-17): the loose book key dropped every י and ו, so `יהושע` resolved to `הושע`; it now keeps the first letter and tries the exact name first.
- **eBL fragmentarium transliteration search**: `GET /api/fragments/query?transliteration=<signs>` finds every fragment with a sign sequence (e.g. `ul-le-gar-ra` → VAT 9307 = KAR 4). Use it to look for duplicates of a text before declaring it single-manuscript.
- **Project-level `verify.py` for a multi-text project** (`סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/verify.py`): per text, checks the annotated entries against the edition's line list (eBL reading edition or ETCSL transliteration) and the translation lines against the annotated `>` lines; `build_translation.py` there joins per-text files.

More tools (2026-10-17, law and treaty corpus):
- **`cdl2md.py --norm`**: adds a `norm:` line (the project's normalization of each word; SAAo, RINAP etc.) and prints the contextual sense after the guide word (`[(treaty-)oath=treaty]`).
- **`oracc_html2tr.py`**: a saved ORACC per-text HTML view → Markdown translation (units labelled with the transliteration lines they span, section headings as `##`). `python3 -I tools/oracc_html2tr.py <in.html> <out.md> <title> <url>`. Use it for any ORACC project: the zips have no translations.
- **Project tools in `חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון/`**: `build_data.py` + `make_parts.py` (align a composite with a later copy by the SAAo labels and cut per-part data files for the translators), `verify.py` (entries, one `>` per entry, **reserved words**, fixed formulas and key-lemma roots, identical normalizations), `build_translation.py` (clean translation with § headings and footnotes from a `הערת שוליים` field), `build_parallels_index.py` (corpus index, Deuteronomy grouped by chapter).

When you write a tool that another session could reuse, put it here with a usage docstring and add a row to this table.

More tools (2026-10-17, the Laws of Hammurabi):
- **`cdli_composite2md.py`**: a CDLI composite ATF with `#tr.ts` / `#tr.en` lines → Markdown, optionally aligned line by line with one witness ATF (stele/tablet) by the transliteration sequence, and a JSON-lines file. Get the ATF from `https://cdli.earth/artifacts/<id>/json` (`[0]['inscription']['atf']`; witnesses' ATF inside `[0]['witnesses']`). `python3 -I tools/cdli_composite2md.py <composite.atf> <out.md> <title> <url> [--witness <w.atf> <siglum>] [--jsonl <out>]`.
- **Project tools in `חוקים-ובריתות/2-חוקי-חמורבי/`**: `lh_config.py` (files, topics, composite parser, stele alignment, SEAL mapping), `build_data.py` (per-file translator data: composite + stele + SEAL lemmas + rank-3), `verify.py` (entries per file with placeholders, § sections against the composite, reserved words, formula patterns, identical normalizations, translation = `>` lines; `--strict`), `build_translation.py` (topic and § headings, footnotes, placeholders). **Corpus builder** `חוקים-ובריתות/build_parallels_index.py` merges every project's Part tables (Exodus and Deuteronomy by chapter); it replaces the project-1 builder.
- **`check_bible_quotes.py`** (fixed 2026-10-17): references to `דברי הימים א/ב` were skipped; now matched.

More tools (2026-10-18, the Gilgameš corpus, in `אפוס-גילגמש/`): `gilg_config.py` (texts, eBL readers, annotated readers, the flood corpus's copies), `parallels_for.py KEY [--all]` (every repeated line with the Hebrew of the other copy, including another corpus's), `verify.py [KEY…] [--strict]` (entries, translation = `>` lines, reserved strings with the lemma behind each hit, unvocalized name traps, a copied passage against its source corpus, every eBL exact parallel), `build_translation.py` (combined translations; embeds a passage of another corpus with `<כלול-בהדפסה מ=…>`), `build_parallels_index.py`; and `translator-brief.md`, a reusable brief for sequential tablet translators.

More tools (2026-10-18, the other law collections, in `חוקים-ובריתות/`): `laws_config.py` (projects LE, MAL, MALB, LI, UN: CDLI composite parser with exemplar links, ORACC MAL parser with the § units of the translation, files, TOPICS; Hebrew helpers), `laws_build_data.py KEY <dir>` (translator data per file), `laws_verify.py KEY [n…] [--strict]` (entries, § ranges, reserved and lemma-gated words, LH's fixed formulas for Akkadian and their equivalents for Sumerian, identical normalizations inside and across collections, translation = `>` lines), `laws_build_translation.py KEY` (topic headings by § or by composite label `@label`), `laws_lookup.py '<regex>' [--heb] [--proj …]` (how LH and the new projects rendered a word); `build_parallels_index.py` now reads all seven projects. The common translator brief: `חוקים-ובריתות/translator-brief--laws.md`.

More tools (2026-10-19, creation corpus projects 3–4):
- **`sumerian_workbench.py`**: the Sumerian workbench that project 2 asked for. `lemmas <c.xml> FROM-TO` (ETCSL's TEI lemmas per word), `line <c.xml> FROM-TO` (the same, plus for every verb the ORACC morph of the same form wherever it is parsed in epsd2-literary, or "no parsed instance: our analysis"), `morph '<form>'`, `conc '<regex>' [--lemma]` (ETCSL-wide concordance, for formulas), `gloss '<regex>'` (ePSD2 glossary). The ORACC form index is built once into `sources/ORACC/_bulk/epsd2-literary--form-index.json` (gitignored). Run with `python3 -I`.
- **`סיפורי-הבריאה-המסופוטמיים/sumerian_tools.py`**: `verify KEY [--strict]` (coverage against the ETCSL line list over several annotated files, one `>` per entry, reserved strings licensed by the Sumerian word, name traps, identical transliterations with different Hebrew), `build KEY` (the clean translation generated from `translation--intro.rtl.md` + the annotated `## ` headings and `>` lines, with `הערת שוליים` bullets as footnotes), `grep all '<regex>'` (projects 2–4). Add a project as a `PROJECTS` entry. With `translator-brief--sumerian.md` (the reusable brief). `1-אנומה-אליש/build_parallels_index.py` reads projects 3–4 (sigla B&F, EWO).

More tools (2026-10-19, the wisdom corpus, in `ספרות-החכמה-והצדיק-הסובל/`): `wisdom_config.py` (files with eBL line ranges, so one eBL chapter can be split over several annotated files; eBL readers; the Gilgameš corpus's Hebrew for cross-corpus parallels) and `wisdom_tools.py` – `pars KEY` (eBL parallels incl. cross-text `L I.4` links to Gilgameš, and identical normalizations, with the Hebrew already given), `verify [KEY…] [--strict]` (entries, translation = `>` lines, reserved strings licensed by an eBL lemma *or a normalization token*, vocalization traps gated by lemma, repeated lines), `build` (per-file and per-project clean translations generated from `translation--intro-<KEY>.rtl.md` + the annotated file; never edited by hand), `grep '<regex>' [--gilg]`, `lemma '<regex>'` (how a lemma was rendered so far: the cheapest consistency tool); `build_parallels_index.py` (Job first, then Psalms, Qohelet, Proverbs, Lamentations, Isaiah, Jeremiah, the Torah). `translator-brief.md` there is the reusable brief for Akkadian eBL texts.

More tools (2026-10-19, the city-lament corpus, in `קינות-על-ערים/`): `lament_tools.py` – `verify KEY [--strict]` (entries against the ETCSL line list **with segment labels** `A1`… for fragmentary segments, the backticked transliteration equal to ETCSL's line, reserved and gated strings licensed by a Sumerian word, name traps, **fixed refrains checked by regex (FORMULAS)**, translation = `>` lines, identical lines with different Hebrew), `build KEY`, `grep KEY|all` (this corpus + the creation corpus's Sumerian texts), `lines KEY FROM-TO` (ETCSL's lines for a brief); `build_parallels_index.py` (Lamentations first, then Psalms, Jeremiah, Ezekiel, Isaiah, the other Prophets, the Torah, Daniel); `translator-brief--laments.md` (the reusable brief for Sumerian liturgical texts). Add a project as a `PROJECTS` entry.

## 11. Lessons learned (living)
- Search the **digital corpora first** (eBL, ORACC, SEAL, ETCSL). In 2026 they are often more current than any printed edition: eBL's Gilg. XI includes joins and NABU notes from 2026.
- Old translations differ from modern ones in readings, not just style (e.g. Nisir → Nimuš, Puzur-Amurri → Puzur-Enlil). Never take a reading from a pre-1990 source without checking the current edition.
- OCR of old transliterations is unreliable (diacritics, superscripts). Use the page images for anything that matters.
- **Clean-looking digital text is not verified text.** DFHG's Berossus silently dropped a printed line, the most important one for the comparison. Check against the page images.
- **Echo control produces real finds.** The standard English translations hide *kalû* / `כלא` (Gilg. XI 133b ↔ 8:2), *nâḫu* / `נח` (133a ↔ 8:4) and *sekēru* / `נִסְכַּר` (Atr. II ↔ 8:2). For each version, check every verb of the Genesis scene against the Akkadian lexicon.
- **A creation verb shared across a text is the strongest hidden echo:** in Enūma eliš *šubšû* "bring into being" is used for exactly the two objects of `בָּרָא` in Gen 1 (the monsters ↔ the tanninim; man). Look at the *distribution* of each key verb over the whole text, not only at single lines.
- **A name can be the hidden echo** (*Nannaru* "luminary" ↔ `הַמָּאוֹר`), and **lists of epithets are dense with cognates** (the fifty names: `הוֹצִיא`, `יֶרֶק`, `דֶּשֶׁא`, `זֶרַע`, `אֵד`).
- **Sequential sub-agents, one tablet each, with a coordinator review between them, worked** for a 1,098-line text: each received the binding renderings, the Hebrew of all earlier repeated lines and a list of the expected parallels; the coordinator merged their proposals into the renderings before the next tablet.
- **The rank-3 translation is the main source of false echoes in Sumerian** (creation corpus project 2): ETCSL's "not yet", "cursed" and "created" each sharpened a Genesis parallel that the Sumerian does not have; the corrected readings (plain negation, an oath, "dwelt") are themselves findings for the commentary.
- **One translator per text, sequentially, with the cross-text terms fixed before the first one and a coordinator review between them**, worked again for seven texts (Akkadian, Sumerian and two Sumerian–Akkadian bilinguals): each later translator was bound by the earlier ones' §4 rows in the project renderings and grepped their `>` lines.
- **Treaties are dense with idioms that survive word for word in biblical Hebrew** (`לֵבָב שָׁלֵם עִם`, `גָּלָה אֹזֶן`, `נָשָׂא רֹאשׁ`, `רָאָה אֶת שְׁלוֹם`, `בִּקֵּשׁ מִיַּד`, `הֵשִׁיב גְּמוּל`) and in Biblical Aramaic (*karṣī akālu*): render them literally where Hebrew has them, and the match becomes visible.
- **Sequential sub-agents, one part each, with the formulas fixed before the first part and a coordinator harmonization at the end, worked a third time** (EST, seven parts); a part-data file per translator (composite + aligned copy + rank-3 translation per line) and a shared verify script kept 691 lines consistent.
- Tchernichovsky 1924 is a useful **negative model** for echo control: it has `מנוח לכף רגלה`, `ריח הניחוח` and `העולה` where the Akkadian has none of them.
- **Law collections hide their differences from the Torah in the small words** (LH, 2026-10-17): the passive `יהרג` against `מוֹת יוּמָת`, "like" against `תַּחַת`, the class terms, the one goring verb, the god's "blow" for an accident, *ina idû* "knowingly". Fixing these before the first law and checking them by script made the Covenant-Code comparison legible line by line (1,263 parallels rows).
- **Twelve sequential sub-agents in a fixed priority order** (frame first, then the most-compared laws, then the rest) finished a 3,641-line text; a coordinator pass between runs (resolving one collision per run on average) was enough to keep it consistent.

- **Thirteen sequential sub-agents, one tablet or tablet group each, in the user's priority order, with a written common brief and a renderings merge after every run, finished the whole Gilgameš epic (SB I–XII, nine OB tablets)** (2026-10-18). The strongest finds again came from fixed one-to-one renderings: `היה לאדם` / `היה לטיט` (OB II 108–109, X 68), `שׂמו מוות … חיים … אחזו` (OB VA+BM a+19–20; X 321), "eat and return to my youth" (XI 300: the two verbs of Gen 3:19), Job 4:13–15 in the incubation dreams of IV, and `אַעֲלֶה לָּךְ` in XII 8.
- **Six sequential sub-agents finished Ludlul I–V and the Babylonian Theodicy** (2026-10-19), with a renderings merge after each run (§10.1–§10.6 of the corpus renderings). Where the Bible's own register is the natural Hebrew (lament and thanksgiving psalms, Job), the lemma-gated reserved words (`עזב`, `רחם`, `ישר`, `טוב`, `קבר`) and the banned Job words (`צדיק`, `תם`, `גואל`) kept the parallels honest; the strongest finds were again exact phrases visible only through one-to-one renderings: Ps 27:10 `אָבִי וְאִמִּי עֲזָבוּנִי` (Theodicy 11), Ps 30:6 (Ludlul I 2), Job 23:3 `מִי-יִתֵּן יָדַעְתִּי` (II 33), Job 19:14 `קְרוֹבָי … מְיֻדָּעַי` (II 120), Deut 28:47 `בְּטוּב לֵבָב` (II 25), Isa 42:13–14 (I 18).
- **Five sequential sub-agents finished the Lament for Ur and the Curse of Agade** (2026-10-19/20), with the refrains pre-set, revised by the first translator and enforced by script, and the renderings merged after every run (`קינות-על-ערים/renderings.md` §9). The strongest finds were again phrases visible only through one-to-one renderings: Lam 2:6 and Isa 1:8 five lines apart (LU 122, 127–128), both halves of Ps 89:35 (LU 167–168), Isa 55:10–11 reversed (LU 149, 411), Deut 33:9's list with its verb (LU 402–405), Amos 8:9's three words (LU 188–190), Gen 3:17–19 in the curse of Agade's clay (CA 231–236), Dan 4's seven years and the tree cut at its roots (CA 92, 115–117).

## Changelog
- **2026-10-16** – Created. Source collection for the Mesopotamian flood narratives (Gilgameš XI, Atrahasis, Sumerian Flood Story, Berossus) and reference tools; `ebl_fetch.py`; copyright policy; principles and formats. First project: `גילגמש-XI--סיפור-המבול/` (not yet started).
- **2026-10-16** – The user asked for the *full* flood story and every other Mesopotamian flood story. The project was reorganized as a **corpus** (`סיפורי-המבול-המסופוטמיים/`, with `corpus.md` and shared `renderings.md`; §2, §6.6) of six projects: Atra-ḫasīs I–III, Gilg. XI 1–208, the Sumerian Flood Story, the other Akkadian versions (Ark, C₀, Nippur, Ugarit, Ḫattuša, W, BM 38917, U, z), Berossus + Abydenus, and flood references (nine texts). They were drafted by parallel sessions, then harmonized. New sources: eBL Atra-ḫasīs OB I, SB I–III, MB; Erra I; Gilg. I; the LXX; the Uruk sages list; the Dynastic Chronicle. New tool: `check_bible_quotes.py`. `ebl_fetch.py` fixed. Lessons added to §4.6, §5, §6.4, §6.7, §10 and §11. Niqqud and Uruk were confirmed by the user.
- **2026-10-16** – Added the print stubs (`הדפסה/`, §7.4, workflow step 9) at the user's request, and created them for the six flood-corpus translations.
- **2026-10-16** – New corpus **`סיפורי-הבריאה-המסופוטמיים/`** (corpus.md, shared renderings that inherit the flood corpus's, parallels-index.md). Project 1: **Enūma eliš I–VII**, 1,098 lines, from eBL `L/1/2` (new source, §4.4a; King 1902 and Langdon 1923 added), drafted tablet by tablet by sequential sub-agents with three review passes each, verified by script, print stub created. `ebl_fetch.py` fixed (variant reconstructions). Lessons added to §5, §6.7, §10, §11.
- **2026-10-17** – Creation corpus **project 2, the creation and Eden companions** (`סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/`): Adapa (MB + SB), Enki and Ninḫursaĝa (with the Ur manuscript), Enki and Ninmaḫ, the Song of the Hoe, Grain and Sheep (whole), the bilingual Founding of Eridu (BM 93014) and KAR 4 – 1,076 lines, by sequential sub-agents, three review passes each, verified by script, parallels merged into the corpus index, renderings merged (corpus §5), print stub. New sources (§4.4b): eBL Adapa; ETCSL 1.1.1, 1.1.2, 5.3.2, 5.5.4; ORACC Q000332/P346086/Q000333/Q000778 with morph; eBL fragmentarium BM 93014, VAT 9307, K 4175; SEAL 1557, 1600. New tool `seal2md.py`; `cdl2md.py --morph`; `check_bible_quotes.py` fixed (יהושע resolved as הושע); the corpus parallels builder reads project 2. Lessons added to §5, §6.7, §6.8, §10, §11.
- **2026-10-17** – New corpus **`חוקים-ובריתות/`** (cuneiform law and treaty; corpus.md, shared renderings with the treaty and oath terms and a reserved-word list, parallels-index.md keyed to Deuteronomy by chapter). Project 1: **Esarhaddon's Succession Treaty** (SAA 2 6, 691 entries) with the **Tell Tayinat copy** (SAA 2 15, variants in the apparatus, Tayinat-only lines tagged `{תיינת}`), drafted in seven parts by sequential sub-agents, three review passes each, verified by `verify.py`, translation built, 771 parallels rows, print stub. New source (§4.4c): ORACC SAAo saa02 Q009186 + P500551. New tool `oracc_html2tr.py`; `cdl2md.py --norm`. Lessons added to §5, §6.7, §10, §11.
- **2026-10-17** – Law and treaty corpus **project 2, the Laws of Hammurabi** (`חוקים-ובריתות/2-חוקי-חמורבי/`): all 3,641 composite lines (prologue, §1–§65, end of §100, §101–§282, epilogue; the gap laws §66–§99 not in the base text, recorded) from CDLI P464358, aligned with the Louvre stele P249253 and checked against SEAL 7520, by twelve sequential sub-agents in priority order, three review passes each, verified by script, translation built, 1,263 parallels rows merged into the corpus index with key findings, print stub. Corpus renderings §5 (shared law terms). New sources (§4.4d); new tool `cdli_composite2md.py`; `check_bible_quotes.py` fixed (Chronicles); new corpus parallels builder. Lessons added to §5, §6.7, §10, §11.
- **2026-10-18** – New corpus **`אפוס-גילגמש/`** (corpus.md, shared renderings inheriting Gilg. XI 1–208 and the flood, creation and law corpora, merged after every run; parallels-index.md with key findings; `translator-brief.md`; tools `gilg_config.py`, `parallels_for.py`, `verify.py`, `build_translation.py`, `build_parallels_index.py`). Project 1: **the SB epic, Tablets I–X, XI 209–328, XII** (2,474 lines; the combined translation embeds the flood corpus's XI 1–208). Project 2: **the OB tablets** VA+BM, II, III, Schøyen₂, Nippur, Harmal₁, Ishchali, Harmal₂, IM (743 lines). Thirteen sequential sub-agents, three review passes each, verified by script, 1,806 parallels rows, print stubs. Flood corpus §6 Gilg. I 7, 26 harmonized (*niṣirtu* = `נְצוּרָה`). New sources (§4.4e): eBL SB II–X, XII and nine OB chapters; SEAL OB nodes. Lessons added to §5, §6.7, §10, §11.
- **2026-10-18** – Law and treaty corpus **projects 3–7, the other law collections**: the Laws of Eshnunna (195 lines, CDLI P480696 with exemplars A, B, C), the Middle Assyrian Laws A (828 lines, ORACC tcma P281779) and B (245 lines, P281780), the Laws of Lipit-Ištar (503 lines, CDLI P464355, Sumerian) and of Ur-Namma (628 lines, CDLI P432130, Sumerian; § concordance with Roth by content) – 2,399 lines by nine sequential sub-agents, three review passes each, LH's formulas enforced by script across the collections, translations built, 678 parallels rows merged with key findings, print stubs. Corpus renderings §6 (shared terms of projects 3–7, Sumerian = the Hebrew of the Akkadian equivalent); `translator-brief--laws.md`. New sources (§4.4f); new tools `laws_config.py`, `laws_build_data.py`, `laws_verify.py`, `laws_build_translation.py`, `laws_lookup.py`; `build_parallels_index.py` reads all projects. Lessons added to §5, §6.7, §10.
- **2026-10-18** – The user delegated all open decisions to the coordinator. Gilgameš: *saḫāru* = `חָזַר` also in flood XI 150, 153, 156; VII 205 *šasû* with a tablet = `קָרָא בְּקוֹל` (as I 27); *dumqu* "beauty" = `נוֹי` (VI 6, XI 252); flood XI 160 `צברתי` kept; the rest confirmed (`אפוס-גילגמש/renderings.md` §12). Law corpus: the translators' choices confirmed, LH §66–99 deferred (`חוקים-ובריתות/corpus.md`). Lesson (§6.4): when a word is reserved for a root, a sense of the Akkadian that the reserved word expresses best (reading aloud = `קרא`) still goes by meaning.
- **2026-10-19** – The user's interest is wider than the Bible: "the soul of the ancient". §1 now states this as a second purpose of equal standing (texts are chosen and annotated also for what they show of the ancient mind), §7.2 asks for notes on the text's own world, and `curated-translation-candidates.md` no longer treats Tier 3 as low priority.
- **2026-10-19** – Creation corpus **projects 3–4** (round 2, run 1): **the Debate between Bird and Fish** (ETCSL 5.3.5, all 189 lines; `3-הציפור-והדג/`) and **Enki and the World Order** (ETCSL 1.1.3 / ORACC Q000334, all 465 lines in two files, 250–472 first; `4-אנקי-וסדר-העולם/`), three sequential sub-agents, three review passes each, verified by script, translations generated, 255 parallels rows merged into the corpus index with key findings for Gen 1:14, 1:20–23, Gen 4, Gen 10–11 and Deut 32:8, print stubs. Corpus renderings §6 (fixed before drafting), §7–§8 (merged). New sources (§4.4g); new tools `tools/sumerian_workbench.py`, `sumerian_tools.py`, `translator-brief--sumerian.md`. Lessons added to §5, §6.7, §10. `curated-translation-candidates.md`: "Round 2 plan (2026-10-19)".
- **2026-10-19** – New corpus **`ספרות-החכמה-והצדיק-הסובל/`** (round 2, run 2): **Ludlul bēl nēmeqi I–V** (eBL `L/2/2`, 534 labels, five files) and **the Babylonian Theodicy** (eBL `L/2/1`, 288 labels, two files), six sequential sub-agents, three review passes each, verified by `wisdom_tools.py verify --strict`, translations generated, parallels merged into `parallels-index.md` (Job first) with key findings, print stubs. Corpus renderings (fixed before drafting; merged after every run, §10). New sources (§4.4h): eBL Ludlul and Theodicy, Lenzi 2023 (OBO 300, open access), CCP 1.3 and 1.4, records-only folder; §4.6 ZORA and CCP access. New tools `wisdom_config.py`, `wisdom_tools.py`, `build_parallels_index.py`, `translator-brief.md` (§10). Lessons added to §5, §6.7, §11.
- **2026-10-20** – New corpus **`קינות-על-ערים/`** (round 2, run 3): **the Lament for Ur** (ETCSL 2.2.2 / ORACC Q000379, all 442 lines, eleven *kirugu*, three files) and **the Curse of Agade** (ETCSL 2.1.5 / ORACC Q000375, the 284 OB lines and the 37 lines of the Ur III version, two files), five sequential sub-agents, three review passes each, verified by `lament_tools.py verify --strict`, translations generated, 475 parallels rows merged into `parallels-index.md` (Lamentations first) with key findings, print stubs. Corpus renderings fixed before drafting (refrains, Emesal, reserved genre-words) and merged after every run (§9). New sources (§4.4i): ETCSL 2.2.2, 2.1.5; ORACC Q000379, Q000375; Kramer 1940 (ISAC, open); records-only folder (Samet 2014, Cooper 1983 lending-only). New tools `lament_tools.py`, `build_parallels_index.py`, `translator-brief--laments.md` (§10). Lessons added to §5, §6.7, §11.
