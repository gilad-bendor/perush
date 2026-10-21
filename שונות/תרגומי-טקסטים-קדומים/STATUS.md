# Status and handoff – ancient-texts translations

> **The first file a new session reads after `translation-guidelines.md`.** It says where the work stands and how to
> continue. **Keep it current:** every session that finishes a run, settles a decision or changes the plan updates it
> in the same commit.

Last updated: 2026-10-21 (Round 2, runs 5–7 in parallel in Claude Cloud; run 5 done).

## 1. Starting a session (local or Claude Cloud)

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

- **Local sessions:** one sub-agent at a time (the user's quota).
- **Claude Cloud:** a special allowance, so no quotas are expected. Work at full speed, and run **independent runs in
  parallel** (different corpora). Inside one long text, keep the sequential translator chain. If a limit is hit, record
  it in §5.1 of the guidelines and fall back to one at a time.
- **Commit and push to `main` often:** after every finished section, not only at the end of a run. A cloud VM can be
  reclaimed, and a session can end; work that is pushed survives. Never commit `docs/` at the repo root (the RTL editor
  regenerates it; the user commits it).

## 3. What is done

All of it is a **first draft**: complete, verified by script, three review passes, but not yet reviewed by the user.

| Corpus | Projects | Lines | Verify with |
|---|---|---|---|
| `סיפורי-המבול-המסופוטמיים/` | Atra-ḫasīs I–III, Gilg. XI 1–208, the Sumerian Flood Story, the other Akkadian versions, Berossus + Abydenus, flood references | (see `corpus.md`) | per project (see `corpus.md`) |
| `סיפורי-הבריאה-המסופוטמיים/` | 1 Enūma eliš I–VII; 2 the creation and Eden companions (7 texts); 3 Bird and Fish; 4 Enki and the World Order | 2,828 | `1-אנומה-אליש/verify.py`, `2-…/verify.py`, `sumerian_tools.py` |
| `חוקים-ובריתות/` | 1 Esarhaddon's Succession Treaty; 2 Hammurabi (§66–99 missing in the base text); 3 Eshnunna; 4 MAL A; 5 Lipit-Ištar; 6 Ur-Namma; 7 MAL B | 6,731 | `laws_*.py` |
| `אפוס-גילגמש/` | SB I–X, XI 209–328, XII; the OB tablets | 3,217 | `verify.py --strict` |
| `ספרות-החכמה-והצדיק-הסובל/` | 1 Ludlul I–V; 2 the Babylonian Theodicy | 822 | `wisdom_tools.py verify` |
| `קינות-על-ערים/` | 1 the Lament for Ur; 2 the Curse of Agade (OB + Ur III) | 763 | `lament_tools.py verify --strict` |
| `בניין-המקדש/` | 1 the Gudea Cylinders A–B | 1,300 | `temple_tools.py verify GU --strict` |
| `העולם-התחתון/` | 1 the Descent of Ištar (SB + NA); 2 Inana's Descent | 599 | `netherworld_tools.py verify IS --strict`, `… verify IN --strict` |
| `אגדות-מלכים/` | 1 Enmerkar and the Lord of Aratta; 2 the Sargon Birth Legend (on King 1907 only: check against Westenholz 1997) | 690 | `kings_tools.py verify EA --strict`, `… verify SB --strict` |

Every finished translation has a print stub in `הדפסה/` (guidelines §7.4). Each corpus has a `parallels-index.md`
with its key findings at the top.

## 4. What is next

The user paused the work after Round 2, run 4 (2026-10-20), and resumes it by starting the next session. The
remaining runs of the Round 2 plan (`curated-translation-candidates.md`):

| Run | Texts | Base text | New corpus |
|---|---|---|---|
| 5 | **The Descent of Ištar** + **Inana's Descent to the Netherworld** | eBL (Ištar); ETCSL 1.4.1 + ORACC (Inana) | the netherworld: **done (first draft), 2026-10-21**, `העולם-התחתון/` |
| 6 | **Enmerkar and the Lord of Aratta** + **the Sargon Birth Legend** | ETCSL 1.8.2.3 + ORACC; King 1907 (public domain) or a newer open edition | Gen 11 and Exod 2: **done (first draft), 2026-10-21**, `אגדות-מלכים/` |
| 7 | **OB love lyrics** + **Sumerian proverbs** (a selection) + **OB letters** (a selection) | ORACC AkkLove / SEAL; ETCSL 6.1; ORACC/CDLI letters | everyday voices |

Runs 5, 6 and 7 are independent (different corpora): in the cloud they can run in parallel, each as its own
coordinator with its own sequential translator chain. Each run is briefed as in §5 below.

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

## 6. Open decisions for the user

Each `project.md` lists its own. These cross corpora, so they matter most:

| Decision | Now | Alternatives / where |
|---|---|---|
| Inana's name | `אִינַנָּה` (creation, laments, temple) | `אִינַאנָּה` (laws corpus) |
| The *me* (the divine powers and offices) | `הַ־מֶה` (creation 3–4, laments, temple) | `הַכֹּחוֹת הַנִּשְׂגָּבִים` (flood corpus) |
| Bird | `צִפּוֹר` (Bird and Fish) | creation project 2 has `עוֹף` in Enki and Ninḫursaĝa 18 and the Song of the Hoe 83: align? |
| *šiptu* "incantation" | `קֶסֶם` (wisdom) | `חֶבֶר` (Deut 18:11), recommended by the coordinator |
| Bitumen | (Gudea) | `חֵמָר` (Gen 11:3) or `כֹּפֶר` (Gen 6:14, the flood corpus) |
| Gudea against earlier corpora | `שורמן`, `הנכונה`, `רכב`, `ברכה` | `ברוש`, `אמת`, `רץ`, `תפילה` (see `בניין-המקדש/1-גליליות-גודאה/project.md`) |
| Sumerian *uĝ₃* "people" | `עָם` (laments) | `הָאֲנָשִׁים` (creation) |
| *kur* (the netherworld) | `הָאָרֶץ` (= *erṣetu*; netherworld corpus) | `הַר` / `אֶרֶץ` "highland, foreign land" in the other Sumerian corpora (correct there: another sense) |
| *sukkal* / *šukkallu* | `וְזִיר` (creation, temple, netherworld) | `שַׂר` (Gilgameš VIII) |
| *uznu* / *ĝeštug₂* in "set the ear" | `אֹזֶן` (netherworld: the literal image) | `בִּינָה` (Gilgameš default) |
| *ḫarrānu* / *ḫar-ra-an* | `אֹרַח` (Gilgameš, netherworld) | `דֶּרֶךְ` (laments) |
| *kabattu* | `כָּבֵד` (wisdom, netherworld) | `רוּחַ` (Gilgameš) |
| *ur₄* "pluck" | `קָטַף` (netherworld) | check the creation corpus (`אָסַף`?) |
| *šembi₂-zid* (eye paint) | `פוּךְ` (legends of kings, ↔ 2 Kgs 9:30) | `כָּחָל` (netherworld) – align |
| Dumuzi's vocalization | at every occurrence (netherworld) | at the first occurrence per file (legends of kings) |
| *nam-šub* "incantation" | `קֶסֶם` (legends of kings) | check the temple and lament corpora; cf. *šiptu* above |
| The Sargon Birth Legend's base text | King 1907 (our transcription from the page images) | check against Westenholz 1997, pp. 36–49, and K 7249 (the user would need to obtain them; see `sources-registry.md` §9) |

The decisions settled earlier (2026-10-18) are in the Gilgameš renderings §12, `חוקים-ובריתות/corpus.md` and the
flood corpus renderings.
