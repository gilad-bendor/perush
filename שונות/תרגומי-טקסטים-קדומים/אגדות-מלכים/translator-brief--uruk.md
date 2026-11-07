# Translator brief: the Uruk cycle (Lugalbanda in the Mountain Cave, Lugalbanda and the Anzud Bird, Enmerkar and En-suḫgir-ana), 2026-11-07

For the translators of projects 5–7 of this corpus (Round 6 run 3). **`translator-brief--kings.md` binds** (it was
written to be reused for these poems): its §0 reading list, §1 rules (★), §2 the annotated format, §3 tools, §4 the
finish. This file adds what is specific to the cycle. The coordinator's per-part prompt says which lines are yours.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` – whole (§1 the purpose: **the essence of the ancients**; the texts stand in their own
   right, the apparatus explains them on their own terms; §5.2 the ★ rules; §6; §6.8; §7.2).
2. `corpus.md`; `renderings.md` §0–§9 (Enmerkar's Hebrew: binding for the cycle) and **§12 (the cycle: names, formulas,
   the plan, the reserved and gated words – all binding)**; `translator-brief--kings.md`.
3. Enmerkar and the Lord of Aratta (project 1), at least its `>` lines (`python3 -I kings_tools.py grep EA '.'`), and
   the earlier parts of the cycle in full; the run-1 Sumerian Bilgameš poems for the Uruk names
   (`../אפוס-גילגמש/renderings.md` §23).

## 1. What is different here
- **Your data file:** `python3 -I kings_tools.py data KEY FROM TO <scratchpad>/data.md`. Per line: the ETCSL line (copy
  it exactly), ETCSL's own lemmas, the ORACC lemma + morph (LC, LZ; aligned by content – check that it is the same
  line) or, for ES, the parses of each verb form elsewhere in ORACC (not this poem's own: say "ניתוח שלנו" after you
  check the chain yourself), **the near-identical lines of all four poems with the Hebrew already given** (copy it where
  the Sumerian is the same), and ETCSL's English (rank 3: read it only after your own reading).
- **Skeleton:** `python3 -I kings_tools.py skel KEY <file> FROM TO` appends `### label` / the ETCSL line / `> טרם תורגם`
  for your range; replace each `טרם תורגם` with your Hebrew and add the bullets. Add the section headings
  (`## <from>–<to>: <Hebrew heading>`) yourself, and the file header (as `1-אנמרכר-ואדון-ארטה/annotated-1.rtl.md`):
  `# <title> – תרגום מוער (חלק N: <range>)`, then **נוסח הבסיס**, **פירוק**, **מספור**, **סימנים**, **תרגומים להשוואה**,
  **תגי הקבלה**, a paragraph or two on your part of the text on its own terms, **מלים שמורות**, **שמות**; then `---`.
  Never open an intro paragraph with `**<number>**`.
- **Write each section to disk as soon as it is drafted** (the quota may stop you; a restart continues from the first
  `טרם תורגם`).
- **Search before fixing any Hebrew word:** `python3 -I kings_tools.py grep all '<regex>'` (this corpus + the
  lament, temple, creation and Akkadian corpora); `python3 -I ../העולם-התחתון/netherworld_tools.py grep all '<regex>'`
  (GEN, Inana's Descent, the netherworld); `python3 -I ../אפוס-גילגמש/bilgames_tools.py grep all '<regex>'` (the
  Bilgameš poems). The form index: `python3 -I ../tools/sumerian_workbench.py morph '<form>'`; the ePSD2 glossary:
  `… gloss '<regex>'`. (The ETCSL-wide `conc` needs the OTA bulk corpus, which is not here: grep the local
  `../sources/ETCSL/*/transliteration.md` instead.)
- **Labels:** ETCSL's; a second segment's lines carry its letter (`B1`); ES's added lines `52A`, `54A`–`54D`; LZ's
  alternative lines `A`–`F` (instead of 350–353, one manuscript) are entries of their own, placed where ETCSL has them.
- **Variants:** ETCSL's `(*1 ms. has instead:* …)` stays in the transliteration line as given; translate the main text
  in `>`, and the variant in **הערות** (`נוסח אחר: …`).
- **Gaps:** an `*(N lines missing)*` row between entries is not an entry; mention it in the next entry's **הערות** only
  where it matters. A line that ETCSL gives only as `[…]` or `X […]` still gets a `>` line (`[…]`, `… […]`).

## 2. The cycle on its own terms (for the הערות)
Uruk and Kulaba, the *en* and the goddess; the army's march to Aratta beyond seven mountains; the eight brothers and the
youngest; sickness and abandonment in a cave, the companions' provisions as for the dead (*ki-sig₁₀*); prayer to the
sun, the evening star and the moon at their times (the three lights of the night and the morning); the plants and the
water of life; fire made from flint, bread baked on coals; the hunt, the dream god Zangara and the dream as a
command; the night offering at a pit, the gods eating; the demons / spirits of LC's end (an incantation-like hymn,
badly broken); the Anzud bird, its tree and nest, hospitality as a strategy, a destiny decreed and the gifts refused,
speed as a gift, the secret kept; the siege of Aratta, the messenger's solitude, Enmerkar's quarrel with Inana, the
tamarisk and the fish; ES: the boast about Inana's bed, the geese, the assembly and the sorcerer from Ḫamazu, the cow
and the goat that speak, the shepherds' prayer to Utu, the wise woman Saĝburu and the contest of five transformations
at the river, the sorcerer's plea and death, the older brother; the school that copied these poems. Explain even
where there is no biblical parallel; never force one.

## 3. Proposals
Under your part in the project's `project.md`: the parallels index `### Parallels index (<PART>)` (PART = LC1, LC2,
LZ1, LZ2, ES; columns exactly `| Line | Source | Hebrew rendering | Bible | Tag | Comment |`), key findings, open
decisions (numbered), and **Proposals for the corpus renderings** – every word or formula a later part (or another
poem of the cycle) will need, with the Hebrew strings exactly as you used them. Do not edit `renderings.md`,
`corpus.md`, the tools or another project's files; do not commit.
