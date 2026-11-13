# Cross-corpus harmonization after Round 7 (2026-11-13; the lead, by the user's delegation)

Principle (as in the passes of 2026-10-21, 10-23, 10-30, 11-02 and 11-09, guidelines §6.7): one Hebrew per source word
across the corpora; the majority / earliest corpus wins unless the cognate rule or a recorded reason decides; across
languages the principles of 2026-10-30 and 2026-11-02 apply – here above all rule (2) of 2026-11-02: **cousin languages
give a cognate pair one Hebrew** (Sanskrit and Avestan; `האווסטה/` is bound by `הוודה-והאווסטה/renderings.md`). The
items are the "Cross-corpus splits left for the lead" of `reports/round-7/run-1.md` … `run-3.md`. Surveyed word by word
from the פירוק bullets of both corpora (counts below: lines per project). Applied in range A by one agent.

## A. Changes

| # | Source word | Hebrew (binding) | Survey before | Lines changed | Reason |
|---|---|---|---|---|---|
| 1 | Skt *mántra* = Av. *mąϑra* | `מַנְתְּרָה` | RV 7 `מימרה` 2, RV 10 (project 5) `המזמורים` 1; Gāthās `מנתרה` 4 | (filled at apply) | the cognate pair; the majority, and the term the reader meets as "mantra" |
| 2 | Av. *uxδa* = Skt *ukthá* | `אֲמִירָה` | RV 7 `אמירה` 8, RV project 1 `שירי־השבח` 1; Gāthās `מלה` 3 | (filled at apply) | the cognate pair; the majority (RV 7). RV project 1's single line follows unless its sense differs (then kept, with the reason here) |
| 3 | Av. *vīra* = Skt *vīrá* | `גִּבּוֹר` | RV (projects 3, 4, 5, 7) `גיבור` 24; Gāthās `אנשי חיל` 2 | (filled at apply) | the cognate pair; the majority and the earliest |
| 4 | Av. *garah* = Skt *gír* | `שִׁיר` | RV 7 `שיר` ≈ 29; Gāthās `שירה` 3 | (filled at apply) | the cognate pair; the majority |
| 5 | Av. *daēnā* (Vd 2, `הוודה-והאווסטה/3-המבול/`) | `הַשְׁקָפָה` | Vd 2 `דת` 2; the Old Avestan corpus `השקפה` 7 | (filled at apply) | one Hebrew per source word; `דָּת` is the loanword's Hebrew and belongs to its source, *dāta* (the loanword principle of 2026-10-30); the Young Avestan sense "religion" goes into Vd 2's note |
| 6 | Skt *purā́* (KU 1.21a) | `לְפָנִים` | RV 5, 7 `לפנים` 4; KU `מקדם` 1 | (filled at apply) | one Hebrew per source word; the majority |
| 7 | Inside the Vedic corpus: the single lines of the earlier projects that run 1 listed against Book 7 (*havyá*, √*tr̥̄*, *sámr̥ti*, √*sr̥* / √*sru*, √*rakṣ*, *puraetár* / *yantár*, *arbhaká*, *śáṃtama*, *rohít* / *aruṇá*, *sujániman* / *jániman*, *anamīvá*, *jaraṇā́* / *jarás*, √*kr̥p* / √*nāth*, *sūktá* / *mántra*, *sámbhr̥ta*) | Book 7's Hebrew, **where the source word and its sense are the same**; a different lemma or sense keeps its own Hebrew | see `reports/round-7/run-1.md` | (filled at apply, with each kept item's reason) | one Hebrew per source word; Book 7 is the corpus's majority (3,190 of ≈ 4,800 lines). *havís* `מִנְחָה` (renderings §5.1) is not *havyá*: a different lemma, kept |
| 8 | **The Rigveda reserves** the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` | never in a Rigveda `>` line (RV keys of projects 1, 2, 5, 6, 7); a gate in `vedic_tools.py` | Book 7: none; KU: none | the gate only | run 1's proposal: the Varuṇa hymns ask for loosening and mercy, never for forgiveness or confession, and the biblical vocabulary of sin would manufacture the Psalms in them (*ā́gas* `אשמה`, *énas* `עוון`). The prose texts (AB 7, MBh 3.185) keep `חטא` for *pāpá* / *pāpmán* (a later, nearer notion) |

## B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| Skt *krátu* / Av. *xratu* | `רָצוֹן` (RV 7 ≈ 17, KU 1) / `תְּבוּנָה` (Gāthās ≈ 11) | each Hebrew is already another word's in the other language: `תבונה` is Skt *manīṣā́*'s (RV 1, 7, KU: 11), `רצון` is Av. *uštā*'s; unifying would open a new split either way. The senses lean apart too (Vedic "will, resolve", Gāthic "intellect") |
| Skt *hótar* / Av. *zaotar* | `כּוֹהֵן־הַקְּרִיאָה` (RV 7, AB: 21) / `מְנַסֵּךְ` (1) | each follows its own tradition's understanding: the Vedic precedent (AB, Round 5) reads √*hū* "call", as the Indian tradition did; the Avestan word is from *zu-* "pour" |
| Av. *kauui*, *usig* / Skt *kaví*, *uśíj* | `קַוִי`, `אוּשִׁיג׳` (titles, transcribed) / `משורר`, `החפצים` | in the Gāthās both are titles of hostile princes and priests (Kavi Vīštāspa's own title too); a translated "poet" or "the eager ones" would hide that. Recorded as a split by function |
| Av. *vərəϑrəm.jan* / Skt *vr̥trahán* | `הורג החוסם` / `הורג־וְרִטְרָה` | Iran has no dragon Vṛtra: the Avestan compound has the common noun "resistance" |
| Skt *vára* | `מִבְחָר` (RV 7) / `מִשְׁאָלָה` (KU) | by sense: "the choicest" in the hymns; the boons Death grants in the Kaṭha. Vd 2's *vara* `מתחם` is another word (Av. *vara* "enclosure") |
| Skt *sūnŕ̥tā* | `נְדִיבוּת` (RV 7, of Dawn's bounty) / `נועם דיבור` (KU, of speech) | by sense (MW: "joy, gladness, bounty"; "pleasant and true speech") |
| Skt *śū́ra* / *vīrá* | both `גִּבּוֹר` | run 1's ruling (the RV 1.32 / dossier precedent), kept |
