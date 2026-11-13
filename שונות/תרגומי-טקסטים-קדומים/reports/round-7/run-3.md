# Round 7, run 3 – the Kaṭha Upaniṣad, whole (report)

Child session `Round7/Run3` (parent: `session_01UnH1L2b1uMRsvSVD1ihmJY`), branch `translation-round-7-run-3`.
Worked in two windows: range B, 2026-11-09 06:14–06:47 UTC (up to two agents: the coordinator and one sub-agent at a
time), and range A, 2026-11-13 from 13:31 UTC (one agent). Plan: `curated-translation-candidates.md`, "Round 7 plan",
run 2, its Kaṭha half (split off by the parent as run 3).

## Done
- **The Kaṭha Upaniṣad now lives whole in its own project, `הוודה-והאווסטה/8-קטהה-אופנישד/`** (title
  `קטהה אופנישד: נצ'יקטס אצל המוות`), **257 lines**:
  | KEY | Part | Lines | Status |
  |---|---|---|---|
  | KU1 | adhyāya 1 = vallīs 1–3 (moved from `4-העקדה/` with `git mv`; revised to the current rules; 2.15a–c new) | 146 | revised, reviewed |
  | KU2 | adhyāya 2 = vallīs 4–6 (new) | 111 | drafted, reviewed |
  Files: `annotated-KU1.rtl.md`, `annotated-KU2.rtl.md`, `translation--head.rtl.md`, `translation--intro-KU1.rtl.md`,
  `translation--intro-KU2.rtl.md`, the generated `translation-KU1.rtl.md`, `translation-KU2.rtl.md`,
  `translation.rtl.md`; `project.md` (scope, decisions, progress log, parallels index); the review logs
  `review--KU1-a.md`, `review--KU2-a.md`, `review--KU-b.md`, `review--KU-c.md`; print stub
  `הדפסה/הוודה-והאווסטה/8-קטהה-אופנישד.rtl.md`.
- **The binding project `4-העקדה/`** keeps its title and embeds KU1 from project 8 (`PROJECT_EMBEDS` in
  `vedic_tools.py`: `P4: ["AB7", "SB1.2.3", "KU1"]`), so its excerpt is the whole's first adhyāya by construction (the
  7.103 precedent of run 1); its `project.md` points to project 8.
- **The base:** `sources/GRETIL/katha_1-6.tsv` (the whole text, committed under CC BY-NC-SA) replaces `katha_1-3.tsv`.
- **Tooling:** `vedic_tools.py` – project P8, KEY KU2, the loader filters the vallīs by the KEY's range, and
  `convert_katha` fixed (below). `renderings.md` §3.1: the Virāj name regex no longer catches *virajo* "free of dust".
  `renderings.md` §11.21: the KU2 renderings and the harmonization with KU1.
- **Process:** one translator sub-agent (KU2 vallī 4, then vallīs 5–6, then the revision of KU1 and the harmonization
  of KU2 with it); one independent reviewer sub-agent (pass (a) fidelity on KU2 and KU1, pass (b) consistency over both);
  a second independent reviewer (pass (c) Hebrew, range A). Changes: pass (a) 15 (8 in the Hebrew), pass (b) 8 (7),
  pass (c) 35 `>` lines plus the intros. Hume 1921 (rank 3, public domain) consulted after each line was drafted.

## Verification
- `vedic_tools.py verify KU1 KU2 --strict`: **0 problems**, 0 repeated-line differences.
- `vedic_tools.py verify` (the whole Vedic corpus): **0 problems** (2 repeated-line differences, both in
  the Rigveda – RV 10.10 13d/14b and RV 7.38 6b / 7.52 3b – unchanged from run 1, not touched by this run).
- `vedic_tools.py selftest`: 12 lines, 0 failures. `build` for KU1, KU2 (project 4 rebuilt with the embed);
  `build_parallels_index.py`: 607 rows.
- `avesta_tools.py verify` (the Old Avestan corpus, which the Vedic renderings bind): 0 problems – after
  `avesta_tools.py convert`, whose git-ignored tables this VM lacked (it reported 829 "not in the base" first).
- `tools/check_bible_quotes.py` on every `.md` file of `הוודה-והאווסטה/` (404 files): **0 problems**.

## Key findings
**What the text shows of the ancient mind.** The second adhyāya turns Death's answer inward. "The Self-existent bored
the openings outward; therefore one looks outward, not at the self within" (4.1) – the senses are a design flaw that
only "a wise one, his eye turned back", corrects. The refrain *etad vai tat* "this, truly, is That" pins every image to
one principle: the fire hidden in the two fire-sticks "like an embryo well carried by pregnant women" (4.8), the person
"the size of a thumb" in the middle of the body (4.12–13), the body as a city of eleven gates (5.1), the swan that sits
in the bright sky, the priest at the altar and the guest in the house (5.2 – an old Rigvedic hymn to the sun, 4.40.5,
re-read as the self). The cosmos is an *aśvattha* tree with its roots above and its branches below (6.1); 101 channels
leave the heart, and by the one that goes up to the crown one goes to the deathless (6.16). Death himself runs "from
fear" of the One, with Agni, the sun, Indra and the wind (6.3) – the god of the dead teaching a boy how to escape him,
and placing himself among the servants of the absolute. The end returns to the frame: Naciketas, having received this
knowledge "spoken by Death", "became free of dust and free of death" (6.18). The text is the first full statement in
India of a yoga ("the firm holding of the senses", 6.11) and of a self that is not born and does not die; its images
are still those of the Vedic sacrifice (fire-sticks, the priest, the oblation), now turned to an inner rite.

**Bible parallels the apparatus records** (all shared motifs: India never met Israel): KU2 4.2a *mr̥tyupāśa* and
`חֶבְלֵי-מָוֶת` (Ps 18:5) [equivalent]; 4.9a the sun's rising and setting (Eccl 1:5) [shared motif]; 5.15b a light that is
not the sun's (Isa 60:19) [shared motif]; and KU1's parallels (Gen 22 – a father who gives his son, Ps 139, Eccl 12:7,
Job 28, Deut 4:12 …), now with their tags revised (1.2a, 2.1a → [divergence]) and two dropped references restored
(2.9a, 3.14b). The translation avoids two calques: *aśvattha* is transcribed (not `תאנה`, Gen 3:7), and 4.5a's *ātmānaṃ
jīvam* is `כנפש, כחַי` (not Gen 2:7's `נפש חיה`).

## Decisions taken (minor, by me)
- The project's number, folder and title; KU1/KU2 as the two adhyāyas (labels kept: vallī.verse + half); the embed in
  project 4 instead of a copy.
- **The converter bug:** `convert_katha` read only `<lg>` groups; GRETIL writes a verse's last line outside its `<lg>`
  where a refrain follows. KU 2.15 (`sarve vedā yat padam āmananti … om ity etat`) had therefore been missing since
  Round 5, and KU1's intro said the verse was absent from the source. Now the `<l>` lines are read in order (vallīs 1–3
  otherwise byte-identical to the old table, checked by diff); 2.15a–c drafted by the coordinator.
- One Hebrew inside one text: the Kaṭha's own precedents kept (see the splits); KU2 aligned with KU1 in 10 lines
  (renderings §11.21).
- *agni*: `האש`, and `אַגְנִי` where the god is meant (4.8b, a quotation of RV 3.29.2; 6.3a, in a list of gods), by
  renderings §3.
- `אָדָם` (*puruṣa*) vocalized in every line (the tables' form and the majority of lines).
- KU2's quotation marks: Death's speech 4.1a–6.17c in double marks, as KU1 quotes every speech; nested quotations in
  single marks (both adhyāyas).
- The refrain *etad vai tat* `זהו, באמת, הדבר ההוא.` (fixed); *aśvattha* transcribed; *muni* `המתבודד`; *sukha*
  `נחת` (`אושר` stays *śám*'s); *vyoman* `מרום` (`רקיע` reserved).
- 1.21a / 1.22a / 1.29a `הסתפקו` → `היו בספק` (modern Hebrew reads "were content"); noted so no later pass undoes it.
- Left open, recorded in the files: the cruxes 4.6a (*jātam*), 5.1b (*anu-√sthā*), 5.2b (*vara*), 6.4 ("fitted for
  embodiment"), 6.5b (*parīva*), 6.13a (*ubhayoḥ*); 3.13a *vāṅmanasī* (Śaṅkara's reading, `?`); 5.15a *kutaḥ* kept
  literal (`ומניין`), explained in the note.

## Questions for the user
None.

## Problems and skipped items
- **Quota stop:** the run started 46 minutes before range B ended; it paused at the gate's `WAIT` (06:47 UTC, 2026-11-09)
  into range A and was resumed by the parent on 2026-11-13 13:31 UTC. Nothing was lost (every step committed and pushed).
- The Avestan verifier needed `avesta_tools.py convert` on the resumed VM (git-ignored tables) – an environment step,
  not a text issue; STATUS §1 lists only the Vedic `convert`.
- Not done: a second rank-3 translation (only Hume 1921 is in the folder; Olivelle 1998 is not open).

## Cross-corpus splits left for the lead
- **The Kaṭha against the Rigveda's Book 7** (run 1), kept as the Kaṭha has them: *vára* KU `משאלה` / RV 7 `מבחר`;
  *purā́* KU 1.21a `מקדם` / RV 7 `לפנים`; *sūnŕ̥tā* KU `נועם דיבור` / RV 7 `נדיבות`; *sanātana* KU `הנצחי`; *pūrvam*
  KU 4.6a `קודם` (RV 7 `לפנים` for *purā́*).
- *agni* `האש` / `אַגְנִי` by sense inside the Kaṭha (the Rigveda projects use the name throughout).
- *jantu* and *bhūta* share `יצור` in both adhyāyas (KU1's precedent); *vidyā* and *jñāna* share `ידיעה` (KU1's
  precedent).
- **The roots run 1 proposed to reserve in the Rigveda** (חטא, `פשע`, `סליחה`, `וידוי`, `חרון`): **not used** in
  any `>` line of the Kaṭha (KU1 or KU2) – the reservation would not touch it.
