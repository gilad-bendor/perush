# Project 4: the Cuthaean Legend of Narām-Sîn (eBL L/1/12) – all five versions

Round 5, run 5 (`../../curated-translation-candidates.md`, "Round 5 plan", run 5), 2026-10-31. Coordinator: the run's
session (`Round5/Run5`); translators: sub-agents, one at a time, one translator resumed part by part (guidelines §5.2).

## Scope
The whole of eBL's edition of the *Cuthaean Legend* ("Narām-Sîn and the enemy hordes"), all five chapters, 345 labels:

| Key | eBL chapter | Folder (`../../sources/eBL/`) | Labels | Editors | Translation (rank 3) |
|---|---|---|---|---|---|
| OBI | Old Babylonian I | `Cuthaean-OB-I` | 74 | Mitto (ed.); Földi, Hätinen, Heinrich, Jiménez (rev.) | Foster |
| OBII | Old Babylonian II | `Cuthaean-OB-II` | 13 | the same | Foster |
| MBA | Middle Babylonian A (Ḫattuša) | `Cuthaean-MB-A` | 63 | the same | Foster |
| MBB | Middle Babylonian B (Ḫattuša) | `Cuthaean-MB-B` | 15 | the same | Foster |
| SB | Standard Babylonian (Nineveh, Sultantepe, Kiš …) | `Cuthaean-SB` | 180 | the same | Foster |

Base text: eBL (rank 1; the chapters fetched with `tools/ebl_fetch.py` on 2026-10-31, no empty **N:** lines).
Rank 3: Foster's English in eBL (read only after one's own reading). Rank 4: eBL's notes. Not available here:
Westenholz 1997 (*Legends of the Kings of Akkade*, the standard edition before eBL: a purchase; the user's rule, records
only), Gurney 1955, Haul 2009.

## Why it matters
- **The Bible:** a king who consults the omens, is refused, defies them ("which lion consulted the diviner?"), and is
  ruined; then obeys, and is told not to destroy the enemy (Deut 18:10–14, 1 Sam 28, 1 Sam 14:36–37, 1 Kgs 22,
  1 Sam 15). A host of strange beings "created by the great gods", suckled by Tiāmat (Gen 6:1–4?). Ea's speech on the
  gods' decision to destroy "the seed of mankind" by a deluge (Gen 6:7, 9:11–15). The curse of civil strife
  ("city against city, house against house; father … son, brother … brother", Isa 19:2, Mic 7:6) and the famine price
  (2 Kgs 6:25, 7:1). The stela as instruction to a future king (Deut 17:18–20; Josh 8:32), the counsel of
  submission and of returning good for evil (Prov 25:21–22; 1 Sam 24:18; Gen 50:15–21), "do your work in your wife's
  lap" (Deut 24:5; Qoh 9:9). Kutha and Nergal (2 Kgs 17:24, 30).
- **The soul of the ancients:** the *narû* genre (a fictive royal stela, "read it well"); the king's dilemma between
  the gods' signs and his own will; the testing of the strangers with a pin ("if blood comes out they are men like
  us"); the omen procedure (seven by seven lambs, reed altars, the gods of extispicy); a king's despair (*essehi
  enneši*), and the wisdom of passivity.

## Line numbering
eBL's labels, prefixed by the chapter key in the annotated files (`SB.80`, `OBI.a+3`); the clean translation shows
eBL's label under the version's heading. eBL's `Parallels:` field (`kings_tools.py pars CL …`, `data CL …`) links the
versions; ranges ("31-33") are linked line by line.

## Files
`annotated-<KEY>.rtl.md` (one per chapter), `translation--intro.rtl.md`, `translation.rtl.md` (built by
`../kings_tools.py build CL`), the translator's `project--<PART>.md`. Print stub `../../הדפסה/אגדות-מלכים/4-אגדת-כותה.rtl.md`.

## The plan of the parts (one translator, resumed after each merge; the coordinator merges proposals into
`../renderings.md` §11.6 between parts)
| Part | Lines | Why |
|---|---|---|
| CL1 | SB 1–93 | the fullest version first: the stela's opening, Enmerkar's failure, the host, the test with the pin, the omens and the defiance, the three lost years |
| CL2 | SB 94–180 | the plagues, Ea's speech, the New Year and the obedient omens, the Morning Star's oracle, the stela's instruction |
| CL3 | MB A, MB B | the Ḫattuša versions: copy SB's Hebrew where the Akkadian is the same |
| CL4 | OB I, OB II | the Old Babylonian versions (OB I is a different telling: Narām-Sîn speaks to the gods) |

## Open decisions
(The translator's, merged here at the end.)

## Progress
- 2026-10-31: project set up (tool key CL, renderings §11, brief `../translator-brief--cuthaean.md`).
