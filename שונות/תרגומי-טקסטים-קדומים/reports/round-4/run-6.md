# Round 4, run 6 – Hittite law and ritual

Session `session_01Lwwha2FxM84MQKx7ABauwV` (title `Round4/Run6: Hittite law and ritual`), child of the Round 4 orchestrator
`session_014fjMvYA3g5H4wByR5wpQt5`; 2026-10-24 23:28 UTC – 2026-10-30 ~16:10 UTC (with quota pauses, below). The run opened a
new language (Hittite). The coordinator (this session) secured the sources, wrote the converters and the corpus tool, fixed
the renderings, gates and brief before the first line, and ran **four sub-sessions strictly one after another**; each ran
one Opus translator, resumed part by part, and three review passes by fresh Opus sub-agents, one at a time. Their reports
are the detail behind this one: `run-6--sub-1.md` (Laws tablet 1 + the late text), `run-6--sub-2.md` (Laws tablet 2),
`run-6--sub-3.md` (the Instructions), `run-6--sub-4.md` (the rituals). Model: Opus 5.5 everywhere; no cheaper model used.

## Done
| Text | Key | Base | Lines | Folder |
|---|---|---|---|---|
| The Hittite Laws, tablet 1 "If a man" (HL 1–100), the standard 13th-c. text; the Old Hittite version and 291.3–5 in the apparatus | HL1 | CHiL CTH 291.2 (HPM, CC BY-SA) | 571 | `חוקים-ובריתות/8-החוקים-החתיים/` |
| The Laws, tablet 2 "If a vine" (HL 101–200) | HL2 | **our composite** from 37 TLHdig manuscripts (`composite-HL2.tsv`; the Old Script KBo 25.85+ leads where well preserved) | 330 | same |
| The late parallel text KBo 6.4 (§§ I–XLI; § IV the body in the field ↔ Deut 21) | HLPT | CHiL CTH 291.PT | 206 | same |
| The Instructions for Temple Personnel | IN | **our composite** from 18 TLHdig manuscripts (`composite-IN.tsv`; KUB 13.4 leads; §§ of Sturtevant & Bechtel 1935) | 312 | `חוקים-ובריתות/9-הוראות-לאנשי-בית-האל/` |
| The elimination rituals of Ašḫella, Uḫḫamuwa, Puliša, Ambazzi (+ its second version) | AS, UH, PU, AM, AM2 | the HPM BESRIT editions (CC BY-SA) | 109 + 33 + 56 + 260 + 23 = 481 | new corpus `טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים/` |

**2,019 lines in all.** Per text: `annotated-<KEY>.rtl.md` (פירוק, נוסחים, תרגומים after drafting, הקבלה, הערות),
`translation--intro-<KEY>.rtl.md`, the built `translation-<KEY>.rtl.md` and each project's combined `translation.rtl.md`;
print stubs `הדפסה/חוקים-ובריתות/8-החוקים-החתיים.rtl.md`, `…/9-הוראות-לאנשי-בית-האל.rtl.md`,
`הדפסה/טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים.rtl.md`. Parallels: 480 rows (Laws 298, Instructions 80, rituals 102), in the
projects' `project.md` and the corpus `parallels-index.md` files.

**Set-up made by the coordinator before the first line** (commits ea4da3d, 45f3536):
- sources: TLHdig 0.3 (the 74 MB zip, md5 checked; the needed CTH folders committed); the Mainz portal **re-tested and
  open** (`hethport.net`): the CHiL Laws edition (six versions of tablet 1) and the BESRIT ritual editions, fetched and parsed;
- `tools/hpm2md.py` (HPM editions → line data), `tools/tlh2md.py` (TLHdig XML → per-manuscript lines), `tools/hittite_tools.py`
  (one tool for all nine keys in two corpus folders: data, tr, fill, lemma, lexmap, comp-init / comp-check for our
  composites, verify, build, gates, selftest);
- renderings: `חוקים-ובריתות/renderings.md` §7 (law terms under the cuneiform law rules: *takku* `אִם`, the class terms
  visible, the Torah's emphatic words reserved) and the machine-read tables §H2–§H9 (names with a transcription convention,
  reserved, gated, formulas, traps, selftest); the new corpus `טקסי-שילוח-וטיהור/` (corpus.md, renderings with §R1 ritual
  terms – the Lev 14/16 words gated to their Hittite counterparts or reserved –, names); the translator brief
  `חוקים-ובריתות/translator-brief--hittite.md` (★ rules; the grammar mapping: tenses, the clause chain *nu / ta / šu / -ma /
  -a / -pat*, the local particles, the quotative, Sumerograms and Akkadograms); projects 8–9 of the law corpus.
- `domains.txt`: the hosts were already there (`hethport.net`, `zenodo.org`); `isac.uchicago.edu` added at the end.

## Verification
- `python3 -I -B tools/hittite_tools.py verify --strict` (all nine keys): **0 problems**; entries = base lines for every key
  (571, 206, 330, 312, 109, 33, 56, 260, 23), translation files equal the `>` lines. Two repeated-line notices, justified in
  the apparatus (HL1 180/186: the genderless enclitic *=an*; AM 101/189: a gap mark).
- `selftest`: 51 lines, 0 failures. `comp-check HL2` (330 rows) and `comp-check IN` (312 rows): 0 problems.
- `python3 -I tools/check_bible_quotes.py` on every file of the three projects and both corpus folders, and on the shared
  files changed at the end (guidelines, STATUS, history, plan, registry): **0 problems** (the sub-sessions caught three
  remembered verses in drafts: Num 8:19, 19:2, and a misquoted Num 18:5 in my own pre-set table).
- The gates were run on the intros (each sub-session's pass (c)): no reserved word in free prose.
- `tools/sources_sync.py status --only TLHdig`: the new manifest item resolves (0 missing).

## Key findings
**For the Bible** (every Hittite–Torah contact is typological – shared legal problems and ritual logic; the notes say where a
historical route is argued: Milgrom on Num 18, Wright and Janowski–Wilhelm on Lev 16):
- **The Covenant Code's cases** (HL1, HL2): "his hand errs" (HL 3–4) ↔ Exod 21:13 (the hand, not the man, is the agent; only
  the Torah brings in God); the injurer pays the physician (HL 10 ↔ 21:18–19); the miscarriage priced by month (HL 17–18 ↔
  21:22); silver for every limb, never talion (HL 7–16 ↔ 21:23–27); the stolen animal returned alive, double on top (HL 70 ↔
  22:3 `חַיִּים שְׁנַיִם יְשַׁלֵּם`); the hired or borrowed animal that dies "by the god", freed by an oath (HL 75 ↔ 22:9–13);
  fire and grazing in another's field (HL 105–107 ↔ 22:4–5); the father's refusal (HL 28–35 ↔ 22:16 `מָאֵן יְמָאֵן`).
- **Deut 21:1–9 ↔ PT § IV (and HL 6)**: the distance to the towns is measured, as in Deuteronomy – but the result is
  compensation from the towns within the radius, with no heifer, no rite, no declaration of innocence.
- **Lev 18 and 20 ↔ HL 187–200**: the same map of unions, graded *ḫurkel* "abomination" or "no offence"; the wife's sister
  after the wife's death is "no offence" – the line Lev 18:18 draws at `בְּחַיֶּיהָ`; the king's pardon is built in.
  **Deut 22:22–27 ↔ HL 197–198** (mountains – his sin, house – hers; the husband may kill both); **Deut 25 / Gen 38 ↔ HL 193**
  (brother, then father, then the brother's son; no levirate term).
- **Num 18 ↔ the Instructions**: the temple's night watch (`מִשְׁמֶרֶת`), the outsider who approaches dies – and so does the
  one who brought him in; Lev 22 ↔ the god's portion may not go home to the personnel's households (a [divergence]: the very
  household the Torah lets eat); Lev 27:10 ↔ the fattened ox swapped for a lean one (*waḫnu-* `המיר`); 1 Sam 2:12–17 ↔ the
  god's meat taken before it reaches him.
- **Lev 16 ↔ the rituals**: the carrying verb is the same act (*peda-* `נשא` ↔ `וְנָשָׂא הַשָּׂעִיר עָלָיו`) and the release
  *arḫa tarna-* `שִׁלַּח` (Lev 14:7, 16:22); the lords of the camp lay their hands on the rams (AS 24 ↔ `וְסָמַךְ`, Lev 16:21) –
  without a confession; but the carriers are rams and an adorned woman, a crowned male sheep, a captive and a woman, a bull
  and a ewe, a mouse – never a goat – and the destination is the enemy's land, "a place where ours do not arrive", not a
  wilderness (↔ `אֶרֶץ גְּזֵרָה`). **1 Sam 6 ↔ the plague rites**: "whichever god made this plague", the gift that appeases the
  foreign god and sends him home; Ambazzi's mouse carries the evil away, the Philistines' golden mice are the plague's image.

**For the ancient mind:** a law code that cites its own past and revises it ("formerly … but now", the tariffs halved, the
king named as reformer); persons ("heads") as payment between houses; the free and the unfree, the feudal duties, the price
list of daily life (a plough-ox 12 shekels, a sheep 1); a jurist's taxonomy of sex, not a list of horrors; "Is the mind of man
and of the gods any different? No!" – the god as a master to be fed clean food by washed servants, whose anger, like a
master's, falls on the servant's whole household; plague as an angry, often foreign god who is not fought but fed, dressed
up for and politely sent home with a companion; evil as a substance – drawn out with wool, washed out like a stain,
extinguished like embers, carried by a mouse beyond the world of men; the ritual expert's own voice (Ašḫella's "I",
Ambazzi's feminine "I" and her prayer for her own house).

## Decisions taken (minor, by me and the sub-sessions; all recorded where they belong)
- **Bases:** use the HPM editions where open (CHiL for tablet 1 and the late text; BESRIT for the rituals); compose CTH 292 and
  CTH 264 ourselves from TLHdig (the TSV composites with a measured lead rule, a certainty column, every restoration named);
  HL1 = the standard text (291.2), with the Old Hittite version (291.1) and the variants as witnesses at every §; HLPT
  translated as its own text.
- **Placement:** the Laws and the Instructions in `חוקים-ובריתות/` (projects 8–9, under its law rules); the rituals in a new
  corpus `טקסי-שילוח-וטיהור/` (the home also for the world list's §5E dossier and the Kizzuwatna blood rites later), not with
  Maqlû.
- **One tool for both folders** (`tools/hittite_tools.py`), its machine-read tables (names, gates, formulas, traps) kept in
  the H-sections of both corpus renderings files; Hittite names transcribed with *z* `ז`, *k* `ק`, *ḫ* `ח`; deities by
  function where the Sumerogram is functional (Storm-god `אֵל הַסְּעָרָה`, Sun-god `אֵל הַשֶּׁמֶשׁ`, "My Sun" `שִׁמְשִׁי`), Ḫatti
  `חַתִּי` with a note on the Bible's `חִתִּים`.
- The renderings, every one with its first line: `חוקים-ובריתות/renderings.md` §7.1–§7.15 and the review rulings;
  `טקסי-שילוח-וטיהור/renderings.md` §R1–§R5; summed up in guidelines §6.7 ("The Hittite texts"). Splits decided inside the run:
  *dai-* `שָׂם` everywhere (R1's `הִנִּיחַ` became *dala-*'s); *penna-* `הִסִּיעַ` / *unna-* `נָהַג`; *arra-* `שָׁטַף` vs IN's
  *warp-* `רחץ`; common verbs that the Akkadian corpora keep for cognates (`עבר`, `לקח`, `נשא`, `השליך`, `קרא`) allowed in the
  Hittite lines.
- **Ḫedammu** (offered "if cheap"): not done – no HPM clause edition found; it would need a sub-session of its own (sub 4's
  plan is in its report). Left for a later round.
- The shared files were edited once, at the end (one commit, ca03ee0); my 2026-10-26 instructions commit (`d15d6c7`, the work
  window) was superseded on `main` by the user's rules of 2026-10-30 and is kept only on a local backup branch.

## Questions for the user
None that block. (Hoffner 1997, Süel 1985, Taggar-Cohen 2006, Miller 2013, Mouton 2016, Christiansen 2006 are © and not in
hand – not to be bought; they would check our composites' § placements, the a/b labels of HL2 and several cruxes, each
marked in the texts.)

## Problems and skipped items
- **Quota stops:** (1) 2026-10-25 05:19 UTC, sub-session 3 stopped by the weekly limit ("resets Oct 26, 7am (UTC)") about 15
  minutes in, while building the composite – the composite was on its disk uncommitted and was pushed on resuming; nothing
  lost; this session's own safety-net wake-up of 06:07 UTC was delivered only after the reset (2026-10-26 07:25 UTC). It was
  resumed with `send_message` at 07:26 UTC and finished at ~09:20 UTC. (2) The user then (2026-10-26) set a work window, and on
  2026-10-30 replaced every usage rule by the two time ranges; the run paused 2026-10-26 09:20 → 2026-10-30 13:40 UTC and
  sub-session 4 ran inside range A (Shabbat) with one agent and no stop. The stop is recorded in guidelines §5.1 / `history.md`.
- **Git:** each cloud checkout began on a stale shallow local `main` with unrelated history; every session kept it as a
  backup branch and made a fresh `main` tracking `origin/main`; nothing lost.
- A stale restart wake-up (written before the 2026-10-30 rules reached me) asked me to launch sub-session 4 again at 15:00 UTC
  while it was already working: not done (one agent at a time).
- No open modern translation exists of HL2 or the Instructions: rank 3 / 5 checks were Hrozný 1922, Zimmern & Friedrich
  1922, Sturtevant & Bechtel 1935 (all old, PD or full view) and the CHD per word; kept in scratchpads, not in `sources/`.
- Cruxes marked in the texts (`?`, `*…*`) are listed in the sub-reports; unplaced CTH 292 fragments are listed in
  project 8's `project.md`, not translated; the duplicates' alignment in the composites' witness columns is automatic and
  approximate.

## Cross-corpus splits left for the lead
- `עבר` / `העביר`, `לקח`, `נשא`, `השליך`, `קרא` in the Hittite texts vs the Akkadian corpora's cognate reservations (*ebēru*,
  *leqû*, *našû*, *nadû*, *nabû*): allowed here as common vocabulary – worth one §6.7 ruling for every non-Semitic corpus.
- `גבול` for Hittite *arḫa-* / ZAG vs MAL B / the wisdom corpus / the legends' gates on their own Akkadian words.
- `טרף` for *karap-* vs Ur-Namma's project-level reservation; `חתן־בית` (HL1 185) vs the netherworld corpus's gate on `חתן`.
- ZABAR `אָרָד` (Hittite, Ur-Namma, Gudea) vs Gilgameš's *siparru* `נחושת`.
- `שָׂם` for Hittite *dai-* beside the creation corpus's reservation of `שָׂם` for *šakānu* / *ĝar* (the same equivalent).
- Akk. *nuḫatimmu* "cook" `אופה` in other corpora vs Hittite MUḪALDIM `מבשל` (`אופה` here is NINDA.DÙ.DÙ = *ēpû*, its cognate).
- GIŠ.ḪUR "record" `שטר` (IN) vs Gudea's *ĝiš-ḫur* "plan" `צורה`.
- Etana's *anzillu* `תּוֹעֵבָה` vs the rituals' ANZELLU `אִסּוּר` (AM2 has it beside *ḫurkil* `תועבה`).
- `ירא` now gated to Hittite *naḫḫ-* (= Akk. *palāḫu*, the prophecy corpus's licence): consistent, worth noting.
- PA₅ `פלג` now in Hittite (consistent with the 2026-10-23 harmonization; Gudea's Sumerian *pa₅* `תעלה` remains).
- `חֵלֶף` (*kaššaš* "substitute") shared with MAL *kīmū*; LÚ ŠU.DAB / *ASĪRU* `אָסִיר` shared inside Hittite; UDU.ŠIR `אַיִל`
  perhaps to be qualified "breeding" like MÁŠ.ŠIR `תיש־ההרבעה`.
