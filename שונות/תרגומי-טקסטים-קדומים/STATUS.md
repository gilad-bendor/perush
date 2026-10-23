# Status and handoff – ancient-texts translations

> **The first file a new session reads after `translation-guidelines.md`.** It says where the work stands and how to
> continue. **Keep it current:** every session that finishes a run, settles a decision or changes the plan updates it
> in the same commit.

Last updated: 2026-10-23 (Round 3 complete; its cross-corpus splits settled; Round 4 is next).

## 1. Starting a session (local or Claude Cloud)

**To run a whole round from one prompt** (Claude Cloud): start a session with `ancient-translations: orchestrate Round <N>`. It becomes the parent (title `Round<N>: …`) and runs each run as its own child session (`Round<N>/Run<M>: …`), one at a time, as guidelines §5.1a describes (reports in `reports/round-<N>/`); you hear from it at the end. To run a single run yourself instead: `ancient-translations: Round <N>, run <M>`.

1. **Sync with `main`** (a resumed cloud session wakes up on an old checkout: the session operator's report says so).
2. **Restore the git-ignored sources:** most raw sources are not in git, since the repo is public (guidelines §8).
   ```
   python3 -I tools/sources_sync.py status          # what is missing (work tier)
   python3 -I tools/sources_sync.py fetch           # restore it (about 5–15 min; --all adds ~400 MB of old scans)
   python3 -I tools/sources_sync.py verify          # compare with the copies the translations were made from
   ```
   - `FAILED … blocked by the network allowlist? host X`: that host must be added to the cloud environment's
     allowed domains, which only the user can do (claude.ai UI). Tell the user; continue with what you have.
   - `pdftotext is not installed`: `apt-get install -y poppler-utils` (or ask the user to add it to the
     environment's setup script).
   - `CHANGED`: the online edition changed since we used it (eBL and ORACC are living editions). Don't silently
     rebase a finished translation on it: note it in the project's `project.md` and tell the user.
   - Known on 2026-10-21: eBL changed **Atra-ḫasīs MB "Priv"** (`eBL/Atrahasis-MB-Priv/`) since the flood corpus used
     it (`CHANGED`): compare the new reading edition with `סיפורי-המבול-המסופוטמיים/4-נוסחי-מבול-אכדיים-נוספים/` and
     note what moved. Lenzi 2023's PDF always shows `CHANGED` (the repository re-stamps it); its text is identical.
   - The archive tier (`--all`) needs downloads from archive.org, which redirects to changing hosts
     (`dn….archive.org`): with a "Limited" allowlist they fail. It is not needed for translating.
3. **Read** `translation-guidelines.md` in full, then this file, then the plan (`curated-translation-candidates.md`,
   "Round 2 plan"), then the corpus you will work in (`corpus.md`, `renderings.md`, the `project.md` files).

## 2. Pace (guidelines §5.1)

- **Quotas apply in every session, the cloud included** (the user, 2026-10-22: the cloud's special allowance is
  over). **One sub-agent at a time, always**, so that a quota stop cuts only one effort; translators save each section
  to disk as they go, and the coordinator commits after every merged part. No parallel translators or runs.
- **Sub-agents cannot start sub-agents** (guidelines §5.1): a coordinator started as a sub-agent translates its texts
  itself. For real translator chains, make the session itself the coordinator (one run per session).
- **Commit and push to `main` often:** after every finished section, not only at the end of a run. A cloud VM can be
  reclaimed, and a session can end; work that is pushed survives. Never commit `docs/` at the repo root (the RTL editor
  regenerates it; the user commits it).

## 3. What is done

All of it is a **first draft**: complete, verified by script, three review passes, but not yet reviewed by the user.

| Corpus | Projects | Lines | Verify with |
|---|---|---|---|
| `סיפורי-המבול-המסופוטמיים/` | Atra-ḫasīs I–III, Gilg. XI 1–208, the Sumerian Flood Story, the other Akkadian versions, Berossus + Abydenus, flood references | (see `corpus.md`) | per project (see `corpus.md`) |
| `סיפורי-הבריאה-המסופוטמיים/` | 1 Enūma eliš I–VII; 2 the creation and Eden companions (7 texts); 3 Bird and Fish; 4 Enki and the World Order; 5 the Farmer's Instructions; 6 Hoe and Plough; 7 Summer and Winter (5–7 Round 3 run 1) | 3,435 | `1-אנומה-אליש/verify.py`, `2-…/verify.py`, `sumerian_tools.py verify 3…7 --strict` |
| `חוקים-ובריתות/` | 1 Esarhaddon's Succession Treaty; 2 Hammurabi (§66–99 missing in the base text); 3 Eshnunna; 4 MAL A; 5 Lipit-Ištar; 6 Ur-Namma; 7 MAL B | 6,731 | `laws_*.py` |
| `אפוס-גילגמש/` | SB I–X, XI 209–328, XII; the OB tablets | 3,217 | `verify.py --strict` |
| `ספרות-החכמה-והצדיק-הסובל/` | 1 Ludlul I–V; 2 the Babylonian Theodicy; 3 the Great Prayer to Šamaš; 4 Counsels of Wisdom; 5 the Dialogue of Pessimism; 6 the Instructions of Šuruppag (Sumerian; 3–6 Round 3 run 4) | 1,562 | `wisdom_tools.py verify --strict` |
| `קינות-על-ערים/` | 1 the Lament for Ur; 2 the Curse of Agade (OB + Ur III) | 763 | `lament_tools.py verify --strict` |
| `בניין-המקדש/` | 1 the Gudea Cylinders A–B | 1,300 | `temple_tools.py verify GU --strict` |
| `העולם-התחתון/` | 1 the Descent of Ištar (SB + NA); 2 Inana's Descent; 3 Nergal and Ereškigal (MB Amarna + SB); 4 Bilgameš, Enkidu and the Netherworld (five recensions; the source of Gilg. XII) (3–4 Round 3 run 5) | 1,482 | `netherworld_tools.py verify IS\|IN\|NE\|GEN --strict` |
| `אגדות-מלכים/` | 1 Enmerkar and the Lord of Aratta; 2 the Sargon Birth Legend (on King 1907 only: check against Westenholz 1997); 3 Etana (all six eBL versions, Round 3 run 2) | 1,275 | `kings_tools.py verify EA --strict`, `… verify SB --strict`, `… verify ET --strict` |
| `קולות-היום-יום/` | 1 OB / Old Akkadian love lyrics and incantations (LAOS 4, 25 texts); 2 Sumerian proverbs (coll. 1 complete, selections of 2–3); 3 Lu-diĝira + eight Sumerian letters | 1,513 | `kol_tools.py verify LOVE PROV LET --strict` |
| `נבואה-ומלכות/` | 1 the Assyrian prophecies (SAA 9 1–11, all eleven texts); 2 Advice to a Prince (eBL `L/2/5`) | 707 | `prophecy_tools.py verify --strict` |
| `כשפים-ולחשים/` | 1 Maqlû, Tablets I–VIII and the Ritual Tablet (eBL `Mag/1/1`; Round 3 run 6) | 1,595 | `maqlu_tools.py verify --strict` |

Every finished translation has a print stub in `הדפסה/` (guidelines §7.4). Each corpus has a `parallels-index.md`
with its key findings at the top.

## 4. What is next

**Round 2 is finished** (runs 5–7, 2026-10-21, in parallel in Claude Cloud), and the cross-corpus splits it left were
settled on 2026-10-21 (§6). **Next: Round 3** (`curated-translation-candidates.md`, "Round 3 plan"): six runs in six
different corpora, **one cloud session per run** (start each with `ancient-translations: Round 3, run N`), in the
table's order; inside a run, its sub-agents strictly one at a time (quotas, §2):

| Run | Texts | Corpus |
|---|---|---|
| 1 | The Farmer's Instructions, Hoe and Plough, Summer and Winter (Gen 8:22, 3:17–19, 4:2–5) | the creation corpus, projects 5–7: **done (first draft), 2026-10-22**, 607 lines |
| 2 | Etana (Gen 11:4, 30:14–16, Deut 32:11) | `אגדות-מלכים/` project 3: **done (first draft), 2026-10-22**, 585 lines |
| 3 | The Assyrian prophecies (SAA 9) + Advice to a Prince (Deut 13, 17, 18; "fear not") | new `נבואה-ומלכות/`: **done (first draft), 2026-10-22**, 707 lines |
| 4 | The Great Prayer to Šamaš, Counsels of Wisdom, the Dialogue of Pessimism, Šuruppag in full | the wisdom corpus, projects 3–6: **done (first draft), 2026-10-22**, 740 lines |
| 5 | Nergal and Ereškigal, Bilgameš, Enkidu and the Netherworld (Gen 28:12; 1 Sam 28) | `העולם-התחתון/` projects 3–4: **done (first draft), 2026-10-22**, 883 lines |
| 6 | Maqlû I–VIII + the Ritual Tablet (Ex 22:17, Deut 18:10–11) | new `כשפים-ולחשים/`: **done (first draft), 2026-10-23**, 1,595 lines |

**Round 3 is complete** (2026-10-23). **Next: Round 4, run 1** (below).

**Round 4 (approved by the user, 2026-10-22; starts when Round 3 is finished):** `curated-translation-candidates.md`,
"Round 4 plan". It merges the Mesopotamian texts left after Round 3 with the first non-Mesopotamian texts from the world
survey (`curated-translation-candidates--world.md`), ranked together. **One run at a time** (guidelines §5.1), started with
`ancient-translations: Round 4, run N`:
1. the Ugaritic myths (the Baal Cycle + the short myths and charms), with the fifth-day dossier – for Gen 1:21, now;
2. the Edict of Ammiṣaduqa – only if an open base text is found (none on 2026-10-22);
3. Egyptian wisdom and creation (Amenemope, Merikare, the Heavenly Cow, the Memphite Theology; base AED-TEI);
4. Hesiod (Theogony + Works and Days; base Perseus + treebank);
5. Erra and Išum (eBL);
6. Hittite law and ritual (the Laws, the Temple Instructions, the elimination rituals; base TLHdig).

Quick wins between the runs: Šūpê-amēlu and the fables; the Poor Man of Nippur. Each new language needs a converter, a
name table, renderings with reserved-word gates and a translator brief before its first line.

Parallel sessions edit the shared files only at the end of their run, in one commit, after `git pull --rebase` (the
plan's last paragraph). The user's review of the Round 1–2 drafts can go on alongside. The Round 2 runs, for the record:

| Run | Texts | Base text | New corpus |
|---|---|---|---|
| 5 | **The Descent of Ištar** + **Inana's Descent to the Netherworld** | eBL (Ištar); ETCSL 1.4.1 + ORACC (Inana) | the netherworld: **done (first draft), 2026-10-21**, `העולם-התחתון/` |
| 6 | **Enmerkar and the Lord of Aratta** + **the Sargon Birth Legend** | ETCSL 1.8.2.3 + ORACC; King 1907 (public domain) or a newer open edition | Gen 11 and Exod 2: **done (first draft), 2026-10-21**, `אגדות-מלכים/` |
| 7 | **OB love lyrics** + **Sumerian proverbs** (a selection) + **OB letters** (a selection) | ORACC AkkLove / SEAL; ETCSL 6.1; ORACC/CDLI letters | everyday voices: **done (first draft), 2026-10-21**, `קולות-היום-יום/` (the OB Akkadian letters not obtained: CDLI 503) |

Runs 5, 6 and 7 were independent (different corpora) and ran in parallel under the cloud's former special allowance,
each as its own coordinator with its own sequential translator chain (since 2026-10-22: one at a time, §2). Each run is briefed as in §5 below.

## 5. The run brief (how every run so far was briefed)

A coordinator (one agent per run) gets this brief, adapted to its texts:
- **Read** `translation-guidelines.md` in full (binding; the translators too, with the ★ rules of §5.2 in their
  brief); `STATUS.md`; `sources-registry.md` before securing sources, `tools.md` before writing a tool; the plan row; the newest corpora as models for
  structure and tools (`בניין-המקדש/` with `temple_tools.py`, `קינות-על-ערים/` with `lament_tools.py`,
  `ספרות-החכמה-והצדיק-הסובל/` with `wisdom_tools.py`, the creation corpus's `sumerian_tools.py` and
  `translator-brief--sumerian.md`). The existing corpora's renderings are binding for shared names, formulas and
  terms; for the still-open cross-corpus choices (§6) follow the most recent corpus and flag conflicts.
- **Both purposes (guidelines §1):** the Bible comparison (with the echo-control tags and `check_bible_quotes.py`)
  and "the soul of the ancients", equal in standing: the **הערות** explain the text on its own terms, even where
  there is no biblical parallel.
- **Process:** the §5 workflow. Create the corpus folder (`corpus.md`, `renderings.md`, `parallels-index.md`, one
  project folder per text). Record every new source per §2.2 and §4, add its recipe to `sources/fetch-recipes.tsv`
  if it is git-ignored and run `tools/sources_sync.py snapshot`, and add new hosts to `domains.txt`. Fix the
  renderings before drafting. Draft unvocalized and plene. Translators as sub-agents, each with the guidelines, the
  renderings, a translator brief and an exact line range; the coordinator merges their proposals into the renderings
  between translators. Three review passes; `translation.rtl.md` generated by script and verified identical to the
  `>` lines; `check_bible_quotes.py` on every file; translators print every verse before quoting it; print stubs.
- **Finish:** record what was learned where the guidelines' top box says (sources → `sources-registry.md`, tools
  → `tools.md`, decisions and false friends → §6.7, a lesson → one line in §5.2 + its story in `history.md`, a
  changelog line in `history.md`); update the plan row and this file; `git add` only its own files (never `-A`, never `docs/`,
  `claude-sessions/`, `__pycache__/` or git-ignored content); commit ("Ancient-texts translations: …") and push.
- **Report:** what was translated and verified; key findings for the Bible; what the texts show of the ancient
  mind; open decisions for the user; anything skipped or failed.

## 6. Open decisions

**The user's standing rules (2026-10-21):** **no purchases** (paid or lending-only sources stay records-only: e.g. Westenholz 1997
is not bought, so the Sargon Birth Legend stays on King 1907, with its caveat in the project); **decide minor things
yourself** (renderings, harmonizing splits between corpora, scope details) and record each decision where it belongs
(the corpus `renderings.md`, the `project.md`, this table). Only major choices go to the user.

**The cross-corpus splits were settled on 2026-10-21** (by the lead, under the rule above): the decisions, and the words kept
by sense, are in `translation-guidelines.md` §6.7 ("Cross-corpus harmonization"); each corpus's `renderings.md` lists the
lines it changed, and the `project.md` files mark their open decisions settled. All verifiers and `check_bible_quotes.py`
passed afterwards.

**The cross-corpus splits of Round 3 were settled on 2026-10-23** (by the lead, under the user's rule): the table, with
every change, the lines it touched and the splits kept with their reasons, is **`harmonization--2026-10-23.md`**;
guidelines §6.7 sums it up; each corpus's `renderings.md` has a "2026-10-23 harmonization" line. Applied in three batches,
one agent at a time; all verifiers and `check_bible_quotes.py` passed afterwards. The last decision left for the user,
*šipru* "work", was settled by the user the same day: `מְלָאכָה` in every corpus (guidelines §6.7).

**For the user, from the world survey (2026-10-21; `curated-translation-candidates--world.md` §7):**
1. ~~Widen the work beyond Mesopotamia, and approve Round 4?~~ **Settled 2026-10-22:** yes – the merged Round 4 plan.
2. ~~Hebrew and Moabite inscriptions~~ **Settled 2026-10-22** (left to the lead): transcription + vocalized reading +
   apparatus (guidelines §6.7).
3. ~~A [typological] tag~~ **Settled by the user, 2026-10-22: no special tag** (guidelines §6.4).

**The project is global** (the user, 2026-10-22): "focusing on the 'essence of antiquity'" (guidelines §1). Round 4 keeps
its approved order; from Round 5 on, candidates are ranked with that focus first.

Still open:

| Decision | Now | Where |
|---|---|---|
| The Sargon Birth Legend's base text | King 1907 (our transcription from the page images) | Westenholz 1997 is not to be bought (the user's rule): check again if an open copy appears |
| EST's transliterations (found by Round 3 run 3) | `tools/cdl2md.py` doubled compound logograms until 2026-10-22: 118 + 41 lines in the EST source files and their copies in `חוקים-ובריתות/1-…/` (the Hebrew is unaffected) | regenerate the EST source files with the fixed converter when ORACC is reachable (`tools.md`) |
| The per-text open decisions | see each `project.md` | minor ones: the next session on that corpus decides them (the user's rule) |

The decisions settled earlier (2026-10-18) are in the Gilgameš renderings §12, `חוקים-ובריתות/corpus.md` and the
flood corpus renderings.
