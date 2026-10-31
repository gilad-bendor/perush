# Round 4, run 3, sub 2 – the Egyptian creation texts and the Book of the Heavenly Cow (report)

Session `session_01KrKxFmkfYEqiQ6KfvXDVgs` (child of `session_016VYybQrHJEd4FJNsbr7Be9`), 2026-10-23 21:45 – 2026-10-24 ~01:30 UTC.

## Done
- **Project 2, `חכמה-ובריאה-במצרים/2-בריאה-במצרים/`** – all lines, first draft, three review passes:
  - **MK** Merikare E130–E138 (9 lines): E130–136 kept from the fifth-day dossier and revised in six lines (below);
    E137–138 new.
  - **PT571** (4), **PT486** (3), **PT527** (4), **PT600** (7): the Pyramid Text spells, marked for uncertainty
    throughout.
  - **MT** the Memphite Theology, all 88 lines of El Hawary's edition (1a–64), parsed word by word by the translator
    (no lemma data), doubtful readings checked on the page images.
- **Project 3, `3-ספר-הפרה-השמימית/`** – **HC**, the Seti I version, all 95 columns, with the Tutankhamun and Ramesses VI
  (and, from Hornung's notes, Ramesses II / III) variants in the apparatus.
- **Optional items, done:** the fifth-day dossier (`מיתוסים-אוגריתיים/3-תיק-היום-החמישי/`) got two new KEYs from AED:
  **WC** (pWestcar, the wax crocodile, 27 AED lines: 2,21–2,23, 3,1–3,5, 3,11–3,16, 3,21–4,7) and **AP**
  (pBremner-Rhind, the "book of repelling Apophis" 26,8–26,20 and the Names of Apophis 32,43–45, 32,50); its
  `dossier_tools.py` extended (UNITS, AED readers, gates for `תמסח`, `חרטום`, `הבנים`, `שעווה`, `נחש`, `פרעה`, the
  unvocalized `רא`). `תַּנִּין` is never in a line (msḥ = `תִּמְסָח`).
- Files per project: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, `translation--head.rtl.md` (project
  2), the generated `translation-<KEY>.rtl.md` and `translation.rtl.md`, `project.md` (translators' sections + the three
  review sections + the parallels table). Print stubs: `הדפסה/חכמה-ובריאה-במצרים/2-בריאה-במצרים.rtl.md`,
  `…/3-ספר-הפרה-השמימית.rtl.md`.
- Corpus files edited (allowed): `renderings.md` §10.8–10.13 (all proposals merged, rulings), §9 (one test line made
  plene); `egypt_tools.py` (build order MK → PT → MT; the root `שחת` gated; `גבול` licensed by `ṯꜣš`, `דמות` by
  `tj.t`; `השיג` split from the סוג/נסג gate and licensed by pḥ); `parallels-index.md` (table regenerated, 805 rows;
  the key findings at its top are the parent's). The dossier's `annotated-MK.rtl.md` aligned with project 2.
- Workers (Opus sub-agents, strictly one at a time): translator 1 (MK + PT, then MT, resumed), translator 2 (HC 1–48,
  then 49–95, resumed), three fresh reviewers (a) fidelity, (b) consistency, (c) Hebrew, one dossier agent.
- Commits: 1325420, 799e9a1, a7def39, 990c818, f4b05d9, fd47f82, 0b9b60c, cab3592, fbe62fb, c0af3c6, dc664f6, and this
  report.

## Verification
- `egypt_tools.py verify MK PT571 PT486 PT527 PT600 MT HC --strict`: **0 problems**, 0 repeated-line differences;
  `verify --strict` (AM included): 0; `selftest`: 31 lines, 0 failures.
- `egypt_tools.py build`: done (translation files equal the `>` lines).
- `tools/check_bible_quotes.py` on every file of projects 2 and 3, `parallels-index.md`, the print stubs and the
  dossier: **0 problems**.
- `build_parallels_index.py`: 805 rows.
- `dossier_tools.py verify --strict`: 0 problems (8 excerpts).

## Key findings
**For the Bible**
- **"Not yet" (Gen 2:4b–5):** PT571 35 and PT486 58 – `טרם נהיו השמים, טרם נהייתה הארץ … טרם נולדו האלים … טרם נהיה
  המוות` – the formula `n ḫpr.t X` is the exact frame of Gen 2:5 `טֶרֶם יִהְיֶה בָאָרֶץ` [equivalent]; birth language for
  what precedes creation (Ps 90:2, Prov 8:24–25); but in Egypt **death itself "came into being"** (Gen 2:17
  [divergence]) and the pre-world had no strife and no fear.
- **Creation from the god's body:** PT527 (Atum's hand) and PT600 ("you sneezed Shu, spat Tefnut") – the first
  male–female pair from a lone god (Gen 1:27, 2:22 [divergence]); air comes *out of* the god's nose rather than into
  man's (Gen 2:7 [divergence]); the Ennead as the "generations" of sky and earth (Gen 2:4).
- **The Memphite Theology:** 59 "Ptah rested (ḥtp) after he had made everything" – `נח` (Ex 20:11 `וַיָּנַח`
  [equivalent]; Gen 2:2 `וַיִּשְׁבֹּת` [divergence]: no day, no number); 57 kꜣ.t `מלאכה` ↔ Gen 2:2 `מְלַאכְתּוֹ`; creation by
  heart and tongue, "the mouth that devised the name of every thing" (55) ↔ Gen 2:20, Ps 33:6, 9; Deut 8:3 `מוֹצָא פִי`;
  53 "in the image (tj.t) of Atum" ↔ Gen 1:26; 57 "what is loved and what is hated" ↔ Gen 2:9 [divergence]; the
  colophon (Shabaka recopying the ancestors' worm-eaten book) ↔ Prov 25:1 – Hezekiah and Shabaka were contemporaries.
  **ḥtp = `נח` in every verbal use**, so Ptah's rest is the same word as the reconciliation of Horus and Seth.
- **Merikare:** mankind as "the god's flock", "his images", the plotters punished (Gen 6:5–7 [equivalent]: only the
  plotters); a man disciplining his son (Deut 8:5); E138 "you will rise as a man" ↔ 1 Kgs 2:2.
- **The Heavenly Cow and Gen 6–9, 11** – with every reserved root kept out of the lines (נחם, עצב, מחה, שחת, יֵצֶר, מבול):
  Re's change of heart is only "Do not diminish them!" (15), "I will protect mankind from her" (20), "my heart is very
  weary of being with them" (27); weariness, not regret (Gen 6:6 [divergence], Isa 40:28); 20 and possibly 27 ↔ Gen 8:21
  "never again"; 2 Sam 24:16 (the god stops the destroyer he sent); 15 cubits of water against three palms of beer
  (Gen 7:20); "good on her heart" and drunk (Gen 9:21, 1 Sam 25:36); gods and men separated, heaven withdrawn (Gen 11);
  49 `jw=j jm=j` "I (am) I" ↔ Ex 3:14 (Hornung's "Ich bin, der ich bin" has a verb and a relative the Egyptian lacks); 93
  "What are your names?" ↔ Ex 3:13–15; Thoth made deputy "in my place" ↔ Joseph (Gen 41:40, 43); the moon as the sun's
  named deputy ↔ Gen 1:16 [divergence].
- **The dossier (Gen 1:21):** Westcar 3,13 "it became a crocodile of seven cubits" is built like Ex 7:10–12 `וַיְהִי
  לְתַנִּין`, done by a lector priest whose title gave Hebrew `חַרְטֹם` – with msḥ where Hebrew has `תַּנִּין`; Bremner-Rhind
  curses the water serpent with childlessness (the reverse of Gen 1:22's blessing); Apophis drawn with a crocodile's
  face (one enemy, as `תַּנִּין` covers both); Ezek 29:3, 32:2 turn the picture round (Pharaoh as the `תַּנִּים`).

**For the ancient mind**
- A creator who withdraws from the world out of old age and weariness; mercy by a trick of colour (red beer), no
  righteous survivor chosen; night, war and the separated sky begin after the rebellion.
- Creation as thought and command, with a theory of perception (the senses report to the heart, the tongue "repeats"
  it); Heliopolis reinterpreted, not rejected (Atum's semen and hands become Ptah's teeth and lips); ethics as part of
  creation (life to the peaceful, death to the criminal); statues as bodies the gods enter.
- Puns as theology and aetiology (jšš ~ Šw, tfn ~ Tfnwt; Sekhmet, the sky, the fields of the hereafter, the stars all
  "came into being" from a god's word-play).
- The name is the person; knowing the names of time lets the dead pass; a worm-eaten book takes authority from age.
- Magic as a gift of god (Merikare) and a regulated natural force (the Cow) – the reverse of Deut 18:10; the absent king
  rules through deputies and writes decrees even to serpents.
- Apophis, uncreated, returns "to his place of yesterday" and must be destroyed every day; wax is given life in the
  water (Westcar) and burned (Bremner-Rhind).

## Decisions taken (minor, by me; recorded in renderings §10.8–10.13)
- **kꜣ.t "work" = `מְלָאכָה`** (not translator 1's `מפעל`), so that the Memphite Theology shows Gen 2:2 as [equivalent];
  PT600 aligned.
- **The dossier's MK lines revised** to this project's Hebrew (dr `הרחיק`, ḥḏj `הזיק ל־`, mꜣꜣ `חזה`, ṯs `קשר`, sꜣ-ꜥ
  `חלש־הזרוע`, the base's brackets, plene `תאוות` / `המאורעות`); the dossier's notes adjusted and verified.
- Collisions: fꜣj keeps `נשא` (the idiom `נשא פנים`), PT486's rmni̯ moves to `סבל`; psḏ / sꜣ both `גב` kept; ꜣḫ.w
  `סגולות` → `גבורות` (`סְגֻלָּה` is the law corpus's cognate of *sikiltu*); `נחלת־האל` kept beside Ugaritic *nḥlt*
  (common Hebrew word).
- Gates widened, never the Hebrew bent: `ṯꜣš`, `tj.t`, pḥ `השיג`; the root `שחת` added to the gates (the task named it;
  the tool lacked it).
- The §6.5 formula keeps the spelling `דברים לאמר:`; elsewhere `לאמור`.
- The Hornung text layer is not git-ignored (`sources/.gitignore` covers PDFs only): I kept `hornung.txt` in the
  scratchpad and did not commit it.

## Questions for the user
None that blocks anything. Optional:
1. ḥtp = `נח` in every verbal use of the Memphite Theology (the reconciliation lines too), or by sense with `נח` kept
   only in 59?
2. HC 27: the TLA's `*לא אהרוג אותם אף פעם*?` ("I will never kill them") against Hornung's "I will kill them without
   exception"; HC 15 "Do not diminish them!" (a command, TLA) – both followed the TLA, marked `?`.
3. MK E134: our base and pCarlsberg "rulers *of perfume*" (`*[מן] הבושם*?`) against pMoscow's "in the egg" (the usual
   reading).

## Problems and skipped items
- No quota stop (status `allowed` before every sub-agent). Nothing skipped.
- The Tutankhamun shrine has nothing of HC 1–48 (only Hornung's verses 202–234, 306–312 and the cow picture): the brief
  assumed otherwise; the differences are given where it runs parallel (56–67, 91–92, 94–95: "name" for *bꜣ*, the ending
  Seti had no room for, an added passage on the scribe who knows the god's words).
- Translator 2 read the TLA's German before finishing HC 32–48 (a process slip, recorded in its log; the readings came
  from the data first).
- `build_parallels_index.py` runs on `--help` instead of printing usage; it does not read the dossier (the dossier's
  parallels table is hand-made).
- El Hawary's German (`memphite-german.tsv`, git-ignored) was regenerated from the text layer by a scratch script
  (`/tmp/claude-0/-home-user-perush/625c6136-5cea-5253-9e61-d4e95fc95e11/scratchpad/tools/hawary_german.py`); about 20 split
  columns (a/b) are "(not found)" – the page images serve.

## Lessons for the guidelines, sources and tools
- **Tools:** (1) the verifier should check that every vocalized word strips to a plene spelling (translator 1 found five
  cases by hand, pass (b) and (c) more: `נִהְיְתָה`, `הַקָּרְבָּנוֹת`, `אֲמִתִּי`); (2) a gate built on a reserved root must
  allow the homograph roots that share its letters (`השיג` < נשג inside the `הסיג` gate) and the edition's spelling
  variants (`ṯꜣš`, `tj.t`) – test gates on El Hawary's spellings, not only the TLA's; (3) a `lexmap` command (Hebrew ↔
  lemma from the פירוק bullets) – pass (b) wrote one in scratch again; (4) `build_parallels_index.py` should take
  `--help` and could read dossier folders; (5) `egypt_tools.py` should build a project's texts in the corpus's reading
  order (fixed here by reordering UNITS).
- **Sources:** add `Hornung-1997--Himmelskuh--OBO-46/hornung.txt` (and `memphite-german.tsv`'s generator) to the
  ignore rules / fetch recipes: the folder has no `.gitignore` of its own, so a session's `pdftotext` output shows up
  untracked; neither PDF is in `sources/fetch-recipes.tsv` (re-downloaded by hand from the README URLs, both worked).
  Hornung's book pages ≈ PDF page − 17; translation PDF pp. 54–67, commentary 68–90.
- **Guidelines §5.2:** (1) a text drafted before a later text's words are merged (MT before §10.10–10.11) must be
  re-aligned at review: the fidelity reviewer caught two such words (fꜣj, ḥfꜣ.t) – merge the later translators'
  Proposals into the earlier texts at once; (2) when a pre-set brief names a witness ("compare the Tutankhamun copy"),
  check first what the witness actually covers; (3) intros and footnotes leak reserved words too (the MK intro had `ברא`,
  the HC intro `נשמות`): run the gates on intros.

## Cross-corpus splits left for the lead
- `הָבְנִים`: Gudea's Sumerian *esi* (by sense) and Westcar's hbnj (the Egyptian etymon of the Hebrew loanword). By the
  cognate rule the Egyptian word owns it; Gudea's use is a sense rendering – the lead may confirm or move *esi*.
- `וְזִיר`: HC's ṯꜣtj (by sense) = the cross-corpus word of *sukkallu* / *sukkal* – shared by sense.
- `שָׁמַר` / `נָצַר` for Egyptian protect-words (nḏ, zꜣw / mkj), beside the Akkadian corpora's reservation of `נָצַר` for
  *naṣāru* and the prophecy corpus's "never the root שמר" – applied as Akkadian-only (§10.1.8).
- `נַחֲלַת־הָאֵל` (HC ẖr.t-nṯr) beside Ugaritic *nḥlt* (Mot's land): kept as common Hebrew; the lead may prefer
  `חֶלְקַת־הָאֵל` to keep the Ugaritic echo out.
- `סְגֻלָּה`: withdrawn from the Egyptian lines (the law corpus's *sikiltu*).
