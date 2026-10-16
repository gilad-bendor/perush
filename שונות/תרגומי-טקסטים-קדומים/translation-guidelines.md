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

**Therefore the translations serve comparison first and literary pleasure second.** Concretely:
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

Current as of 2026-10-16. Details and licenses are in each folder's README. Paths are relative to `sources/`.

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
- **Sumerian:** render narrative *marû* with the Hebrew participle as a default. Search ETCSL (TEI XML is lemmatized) for a formula before drafting a line, because formulas recur across genres. Map line numbers by gap arithmetic, checked against any line the literature quotes.

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

When you write a tool that another session could reuse, put it here with a usage docstring and add a row to this table.

## 11. Lessons learned (living)
- Search the **digital corpora first** (eBL, ORACC, SEAL, ETCSL). In 2026 they are often more current than any printed edition: eBL's Gilg. XI includes joins and NABU notes from 2026.
- Old translations differ from modern ones in readings, not just style (e.g. Nisir → Nimuš, Puzur-Amurri → Puzur-Enlil). Never take a reading from a pre-1990 source without checking the current edition.
- OCR of old transliterations is unreliable (diacritics, superscripts). Use the page images for anything that matters.
- **Clean-looking digital text is not verified text.** DFHG's Berossus silently dropped a printed line, the most important one for the comparison. Check against the page images.
- **Echo control produces real finds.** The standard English translations hide *kalû* / `כלא` (Gilg. XI 133b ↔ 8:2), *nâḫu* / `נח` (133a ↔ 8:4) and *sekēru* / `נִסְכַּר` (Atr. II ↔ 8:2). For each version, check every verb of the Genesis scene against the Akkadian lexicon.
- Tchernichovsky 1924 is a useful **negative model** for echo control: it has `מנוח לכף רגלה`, `ריח הניחוח` and `העולה` where the Akkadian has none of them.

## Changelog
- **2026-10-16** – Created. Source collection for the Mesopotamian flood narratives (Gilgameš XI, Atrahasis, Sumerian Flood Story, Berossus) and reference tools; `ebl_fetch.py`; copyright policy; principles and formats. First project: `גילגמש-XI--סיפור-המבול/` (not yet started).
- **2026-10-16** – The user asked for the *full* flood story and every other Mesopotamian flood story. The project was reorganized as a **corpus** (`סיפורי-המבול-המסופוטמיים/`, with `corpus.md` and shared `renderings.md`; §2, §6.6) of six projects: Atra-ḫasīs I–III, Gilg. XI 1–208, the Sumerian Flood Story, the other Akkadian versions (Ark, C₀, Nippur, Ugarit, Ḫattuša, W, BM 38917, U, z), Berossus + Abydenus, and flood references (nine texts). They were drafted by parallel sessions, then harmonized. New sources: eBL Atra-ḫasīs OB I, SB I–III, MB; Erra I; Gilg. I; the LXX; the Uruk sages list; the Dynastic Chronicle. New tool: `check_bible_quotes.py`. `ebl_fetch.py` fixed. Lessons added to §4.6, §5, §6.4, §6.7, §10 and §11. Niqqud and Uruk were confirmed by the user.
