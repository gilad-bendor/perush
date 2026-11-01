# Round 5, run 6 – Egyptian tales: done (first draft)

Child session `session_01UnH1L2q4G2Yookvynrep3i` (`Round5/Run6`), branch `translation-round-5-run-6`; 2026-10-31
09:44–11:14 UTC (range A, one agent at a time) and 2026-11-01 22:02 – ~23:50 UTC (range B, up to three agents).
Coordinator: this session; translators and reviewers as sub-agents (Opus), one translator per text.

## Done

**The whole selection, 1,130 lines, as projects 4–8 of the Egyptian corpus `חכמה-ובריאה-במצרים/`** (not a new corpus:
the tales share its language, its base AED-TEI, its tool and its renderings; BD 125 is the other face of Amenemope's
ethics, and Westcar's wax crocodile was already in the dossier in this corpus's words; a new corpus would have
duplicated the renderings and opened splits for the lead – recorded in `renderings.md` §11 and `corpus.md`).

| Project | Text (KEY) | Lines | Base (AED-TEI, CC BY-SA 4.0) | Translator | Independent fidelity review |
|---|---|---|---|---|---|
| `4-מעשה-בשני-האחים/` | The Two Brothers (TB), Late Egyptian | 185 (`1,1`–`20,1`) | pD'Orbiney | 1 (two parts) | 8 lines |
| `5-פפירוס-וסטקר/` | pWestcar in full (WE) | 305 (`1,1-11`–`12,25`) | pBerlin P 3033 | 2 (three parts) | 43 lines |
| `6-ספר-המתים-125/` | Book of the Dead 125 (BD) | 115 | pNu (+ pJuja, pMaiherperi) | 3 | 7 lines |
| `7-סינוהה/` | Sinuhe (SI) | 334 (`R1`–`R23`, `B1`–`B311`) | pBerlin P 10499 (R) + P 3022 (B) (+ the Ashmolean ostracon) | 5 | 14 lines |
| `8-המלח-הנטרף/` | The Shipwrecked Sailor (SS) | 191 | pPetersburg 1115 | 4 | 1 line |

Files per project: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated `translation-<KEY>.rtl.md`
and `translation.rtl.md`, `project.md` (scope, the translator's section, the independent review, the parallels table).
Print stubs `הדפסה/חכמה-ובריאה-במצרים/4-…`–`8-…`. **pWestcar 2,21–4,7** (27 lines) is the fifth-day dossier's excerpt
WC: copied byte for byte by script and kept identical by `verify WE`; the dossier was not edited.

**Set-up (range A):** the base texts (`sources/AED-TEI/`, 8 new folders, committed, README table); `egypt_tools.py`:
keys TB WE BD SI SS, the Sinuhe composite (`aed-SI`), the `TALES`-scoped gates (Gen 39, Ex 14, the Decalogue,
Ps 15 / 24, Deut 26:13–14, Deut 8:8, `נחש`), the BD formula check, the WE ↔ dossier identity check, `build KEY` scoped
to its project (for parallel translators); `renderings.md` §11 (texts, names, key terms, gates, formulas) and §11.6–§11.13
(the translators' merged decisions); the brief's §9; five `project.md` files; `corpus.md`; `build_parallels_index.py`.

**Shared files (once, at the end):** STATUS (§3 row, §4), the plan row, guidelines §5.2 ("Egyptian tales") and §6.7,
`history.md`, `tools.md`, `sources-registry.md` §4.4t, the corpus's `parallels-index.md` (key findings + 1,182 rows).
No git-ignored source, so no recipe or manifest change; no new host.

## Verification
- `egypt_tools.py verify --strict` (all 13 keys): AM 551, MK 9, PT571 4, PT486 3, PT527 4, PT600 7, MT 88, HC 95, **TB
  185, WE 305, BD 115, SI 334, SS 191** – 0 problems, 0 repeated-line differences; translations equal the `>` lines;
  WE's 27 dossier lines identical.
- `egypt_tools.py selftest`: 45 lines (14 new for the tale gates), 0 failures.
- `3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems.
- `tools/check_bible_quotes.py` on every `.md` of the corpus, its print stubs, the dossier, the guidelines, history and
  STATUS: 0 problems.
- Three review passes per text by its translator, then an independent fidelity reviewer per text (73 lines fixed).
- (`ugarit_tools.py verify` not run: the CUC base is git-ignored and the VM's fetch was cut by a reboot; no Ugaritic
  file was touched.)

## Key findings

**For the Bible**
1. **Gen 39 in the Two Brothers:** the proposal in the ordinary verb of lying (sḏr `שכב`); the refusal rests on kinship
   ("you are like a mother to me", 3,9–3,10), not on the master's trust and God [divergence]; "this great offence"
   (4,1) beside `הָרָעָה הַגְּדֹלָה הַזֹּאת` without "sin against God"; no garment in her hand – she stages a beaten body
   and demands his death; and at the end the wife, not the youth, is punished (8,8).
2. **Gen 2:18, 22:** the gods pity the lonely Bata and Khnum is told to "build" (qd = `בנה`) him a wife (9,6–9,7).
3. **Westcar and Exodus:** the lector priest = `חַרְטֹם` (the loanword) with the wax crocodile (Ex 7:8–12, the dossier's
   finding); the lake folded half on half to recover a pendant (Ex 14:21–22 [divergence]); Djedi's 110 years (Gen 50:26);
   the magician's refusal to test death on a man, "the noble flock of the god" (8,16–8,17; Gen 9:6, Ps 100:3);
   midwife goddesses at royal births (Ex 1:15–21 [divergence]).
4. **BD 125 and the entrance liturgies:** "I have not transgressed" (thj ↔ Deut 26:13 `לֹא עָבַרְתִּי`); bread to the
   hungry and clothes to the naked (Ezek 18:7, Isa 58:7, Job 31:19); "the perceiver of hearts, the searcher of bellies"
   (Jer 17:10); a liturgy of questions at the gate (Ps 24:3–6, 118:19–20); the Decalogue's deeds in ordinary verbs.
5. **Sinuhe and Deut 8:7–9:** `tꜣ pw nfr` = `אֶרֶץ טוֹבָה`, with figs, grapes, wine, honey, barley, emmer – and without
   wheat, pomegranate or "milk and honey"; the flight from the king of Egypt and marriage to the nomad chief's daughter
   (Ex 2:15–21); the duel (1 Sam 17); burial at home with the Joseph pattern reversed (Egypt is the homeland).
6. **The Shipwrecked Sailor:** Jonah's storm and lone survivor, a great creature that carries the man home unharmed;
   fire from heaven and "I alone escaped" (Job 1:16).
7. **Egyptian loanwords in their own contexts:** `פַּרְעֹה` 17 times in TB (the king, and the palace), `חַרְטֹם`, `יְאֹר`,
   `שֵׁשׁ` (Gen 41:42), `חוֹתָם`, `קוֹף` (SS 165, 1 Kgs 10:22); a Semitic loan in Late Egyptian: y~mꜥ `ים`.

**For the ancient mind**
- A heart kept outside the body, on a cedar's flower; a life passing through bull, trees, splinter, son and king (TB).
- Magic as knowledge and measure, rewarded by the king; a magician who will not experiment on a human being (WE).
- The judgement of the dead as knowledge of names; the misdeeds separated from the person, not forgiven; the ethic of
  the quiet man (BD).
- Panic before decision ("my body fled before my heart decided"), the god's plan and the king's grace never reconciled,
  burial abroad as a second death (SI).
- Consolation by storytelling three layers deep, a lonely god who lost his kin to a falling star, and a master who refuses
  to be consoled (SS).

## Decisions taken (minor, by me; recorded in `renderings.md` §11–§11.13)
- The corpus: projects 4–8 in `חכמה-ובריאה-במצרים/` (reason above); the folder name kept.
- The Sinuhe composite R 1–23 + B 1–311 (R 24 = B 1); BD on pNu with pJuja and pMaiherperi as witnesses.
- Collisions settled: ḫr-jr = `והנה` (AM's ḫr-rʾ-ꜥ keeps `ובכן`); grg `כזב` / ꜥḏꜣ `שקר`; Herakleopolis = `חָנֵס` in BD (the
  Cow's form; BD 18, 29 changed); ḫꜣs.t `ארץ־נכר` (`מדבר` where it is desert); bꜣq `עצי־השמן` (not `זית`).
- Kept by text, recorded for the lead: wsr (WE) / AM's ḥmw both `משוט`; qd.w (BD `חשבון המידות`) / AM's dbḥ `מִדָּה`;
  dmj `עיירה` in SI / `עיר` in AM and TB; jdr / jꜣw.t both `עדר`; ꜥfd.t / pds both `ארגז`.
- Gates widened (never the Hebrew bent): whole-word exemptions (`לברוח`, `מרוח(ה)`, `משקוף`, `שמחה`), `לשבת` with ḥmsj, the
  `זבת` prefix class, `ענבים` (jꜣ~jr), `זית` (bq), `קוף` (gwf), `עור` "skin" (jnm), the ba trap on bꜣ,t, `משחת`.
- The Shipwrecked Sailor taken from the BD translator and given to a fourth translator, to run three texts at once.

## Questions for the user
None blocks anything; each line carries the chosen reading with the alternative in its note. Optional:

| Where | Question | Now |
|---|---|---|
| SI B29, B182, B219 | Qedem (`קֶדֶם`, Gen 25:6, 29:1) or Qatna (the TLA's reading)? | Qedem, the alternative noted |
| SI B83 | bꜣq: olive (`זית`, Deut 8:8) or moringa (the TLA)? | `עצי־השמן` (neutral) |
| SI B291 | "dressed" (TLA) or "shaved" (the usual reading; Gen 41:14)? | TLA |
| TB 4,6 | pd~jrʾ: "bandage" (TLA) or a Semitic loan *pdr* "suet" (`פֶּדֶר`, Lev 1:8)? | `תחבושת?` |
| WE 1,20 | wn.t: `דְּבִיר` (1 Kgs 6, the temple word) or a neutral "inner shrine"? | `דביר` |
| SS 129 | "through wisdom" (the base's lemma) or "through prayer" (the usual reading)? | the base, marked `?` |

## Problems and skipped items
- **Nothing skipped.** One planned stop: range A ended at 11:29 UTC on 2026-10-31; the run committed, pushed and sent
  `RUN PAUSED` at 11:14 (TB done, WE 1,1–7,26), and was resumed by the parent at range B's start (22:02 UTC). No quota
  warning at any gate (`allowed` throughout).
- The VM rebooted while paused; nothing was lost (all pushed). The background `sources_sync.py fetch` was cut by the
  reboot (38 work-tier items missing; none needed here).
- Translators' slips caught: one read the TLA's German for one line before drafting it (recorded at TB 9,3); the
  Westcar translator spread the dossier's `⸢ ⸣` convention over the whole file (removed by the reviewer from 25 lines).

## Cross-corpus splits left for the lead
- **A pending dossier revision:** WC / WE **2,22** brackets parts of words (`[א]וליד`, `[ש]לח`, `שלי[ח]`, `[תמ]סח`) against
  the corpus rule; proposed: `⸢ו⸣זהב־לבן; *אוליד*? … [שלח] שליח […]. [ואז] [תפס] [תמסח]` (a `**לתיק:**` bullet in WE 2,22).
  The dossier's 9 lines in WE also keep its `⸢ ⸣` convention, unlike the rest of the corpus: decide one notation for both.
- The kept splits listed under "Decisions" (`משוט`, `מידה`, `עיר` / `עיירה`, `עדר`, `ארגז`).
- y~mꜥ `ים` [cognate] in TB beside the Ugaritic Yam `יָם` (a name there): the same word, a note in both.
- `נָחָשׁ` for ḥfꜣw in SS/HC beside the dossier's serpents (consistent with the dossier rule).
