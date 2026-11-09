# Round 7, run 1 – the Rigveda, Book 7, whole

Child session `Round7/Run1: the Rigveda, Book 7, whole`, branch `translation-round-7-run-1`, 2026-11-08 22:35 → 2026-11-09 ~06:50 UTC (range B). Approved whole by the user on 2026-11-02.

## Done
- **The whole of Rigveda Book 7** (the Vasiṣṭha family book): **104 hymns, 841 stanzas, 3,190 pādas**, every pāda drafted, with the full apparatus (a פירוק of every word, rank-3 translations and Jamison per stanza, parallels, notes on the text's own terms), each hymn with a Hebrew introduction.
  - Project `הוודה-והאווסטה/7-ריגוודה-ספר-ז/`: `annotated-RV7.<n>.rtl.md` and `translation--intro-RV7.<n>.rtl.md` per hymn (n = 1…104), the generated `translation-RV7.<n>.rtl.md` and the book's `translation.rtl.md` (head: `translation--head.rtl.md`), `project.md` (scope, the parts, each translator's and reviewer's section, the two consistency passes, the parallels table). Print stub `הדפסה/הוודה-והאווסטה/7-ריגוודה-ספר-ז.rtl.md`.
  - **RV 7.103 (the frogs)**, translated in Round 5, moved into the book (revised to the book's renderings in part 10: 2 lines); project 6 (`6-המהמר-והצפרדעים/`) keeps its title and **embeds** it (`PROJECT_EMBEDS`), so no file of the binding project (`4-העקדה/`) was touched.
- **Workflow:** ten translators, strictly one after another (parts of 241–391 pādas, 23–49 minutes each); an independent fidelity reviewer for each part, beside the next translator (two agents at a time); two consistency passes in the reviewer's slot (7.1–74: 52 lines; 7.75–97: 23 lines). Reviews: part 1: 9 lines, 2: 7, 3: 15, 4: 9, 5: 12, 6: 9, 7: 12, 8: 6, 9: 18, 10: see below.
- **Tool** (`vedic_tools.py`): the Book 7 keys and project; `freq`; `RV7` / `RV7.a-b` ranges; `PROJECT_EMBEDS`; "(RV 7)" / "(AB)" scoped name rows; `EXEMPT_WORDS` / `EXEMPT_RX`; plural names in -ים; stricter short licences in Book 7; widened licences (*vásyas*, *svadhvará*, *svápas*, *saúbhaga*, *viśvā́yu*, *bhójana* …); `tr`/`data` with a bare stanza number; the converter made the 104 Zurich TSVs (committed, CC BY 4.0).
- **Renderings** (`הוודה-והאווסטה/renderings.md`): §5.5 (Book 7's ≈40 pre-set terms), 30 "(RV 7)" name rows, formulas F6 (the family refrain *yūyám pāta svastíbhiḥ sádā naḥ* `אתם, שמרו עלינו בשלום תמיד`, 76 copies), F7 (7.89), F8 (7.49), traps `מַרוּטִים`, `אָרְיָה`; §11.10–§11.20 (each part's merged proposals, the reviewers' rulings, the consistency passes).
- **Sources:** Jamison's commentary on VII.1–55 (2026-09 version) downloaded and extracted (the folder had only VII.56–104); recipe + manifest items.
- **Shared files:** STATUS, the plan row, history (H2 story, changelog), guidelines §5.2 (one lesson block), tools.md, sources-registry.md, corpus.md, MANIFEST / recipes; the corpus parallels index regenerated (604 rows).

## Verification
- `vedic_tools.py verify RV7 --strict`: **0 problems** (3,190 entries = the base); `verify --strict` over the whole corpus: 0 problems (2 repeated-line differences, both justified in the apparatus: RV 10.10.13d/14b, and 7.38.6b/7.52.3b, singular / plural as in the source).
- `vedic_tools.py selftest`: 12/12.
- `tools/check_bible_quotes.py` over every `.md` of `הוודה-והאווסטה/`: **0 problems**.
- `build`: every `translation-RV7.<n>.rtl.md` equals its `>` lines; the book's and project 6's `translation.rtl.md` regenerated.
- Not run: the print layout (`layout/rows-tool.ts`): the new translation has no layout module and prints by the folder's default rule – a layout session's work.

## Key findings
**The ancient mind.**
- A hymnal of one family: the same words of praise, gift, help and protection in every hymn, and one refrain sealing 76 of them – the poet's craft is variation inside a fixed frame, and the family's signature is its refrain.
- The rite as exchange and as contest: "the gods are not for the stingy", "if I were lord of as much as you…" (7.32); rival families pressing soma at once, "hear only ours" (7.28); patrons' gifts counted in cows and chariots (7.18.22–25).
- War told as sacrifice (7.18: the "sacrificer" Turvaśa becomes the offering cake; the ten kings lose because they "do not sacrifice", 7.83); the word wins the battle ("through your formulation, Vasiṣṭhas", 7.33).
- The family's own myth: Vasiṣṭha born twice – from Mitra and Varuṇa's seed in a pot and "from the mind" of the apsaras Urvaśī (7.33).
- Varuṇa (7.86–89): the poet does not know his offense, asks what it was, pushes it outward ("the fathers' offense", liquor, anger, dice, sleep, "the elder within the younger"); the god's fetters "without ropes"; the friendship lost after the boat trip; the punishment as dropsy, "thirst in the midst of the waters"; the plea is for **mercy and loosening**, never for forgiveness.
- Dawn as the cosmic order made visible, and "begotten" by the poets' true word (7.76); the waters as purifying goddesses (7.47, 49); the sleep charm of a sleeping household and its dog (7.55); a charm against snakebite and ailments (7.50); the curses against sorcerers, with the poet's oath "may I die today if I am a sorcerer" (7.104.15).
**The Bible in the apparatus** (all shared motifs between cultures that never met, said so in words): Judg 5:21 (the river that sweeps the enemy, 7.18); Job 13:23, Ps 19:13, 32:5 [divergence: no confession], 79:8 / Lam 5:7, 130:3–4, **89:50** "where are your former…" (7.86–88); Job 4:19 `בָתֵּי-חֹמֶר` (7.89.1); Ps 33:13 (the god looking down on truth and untruth, 7.49); Isa 43:10, Ps 103:13 (the god as father; "not born, nor to be born", 7.32); Ps 7:4–6 (the oath of innocence), 58:9, 109:2, 13, 140:11 (7.104); Job 38:28 (the rain's father, 7.101); Exod 29:39 (the twice-daily offering, 7.1); Ezek 16:17 (polemic against a sexual cult, 7.21.5); Eccl 9:12 (7.23). Gen 1:2, 1:7 only as [divergence] (7.49.1, 7.23.3). No word of the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון`, `תהום`, `רקיע`, `שאול` in any line.

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- The project layout (one KEY / file per hymn), the ten parts, the 7.103 embedding (rather than renaming project 6).
- Pre-sets (renderings §5.5, F6–F8): *svastí* `שלום` (precedent), √*pā* `שמר`, *śám* `אושר`, *vā́ja* `פרס` (not `שלל`, Akk. *šallatu*'s cognate), √*mad* `התבסם` (not `שכרון`, Ugaritic *škrn*), *yātudhā́na* `קוסם` (not the root כשף, Akk. *kaššāpu*), *ródasī* `שתי המחצות`, *ā́rya* `אָרְיָה` (always vocalized), *sūrí* `נדבן`.
- Rulings after the reviews: *śū́ra* `גיבור` shared with *vīrá* (the RV 1.32 / dossier precedent); *āśú* `מהיר` / *ajirá* `זריז` / *turá* `נמרץ`; *pā́thas* `נווה` / *vrajá* `מכלאה`; 7.18.4b keeps the 3rd person; the two consistency passes' tables (§11.17, §11.20).
- The Old Avestan cognates (run 2's list): followed where Book 7 had not fixed its word (*druh* `שקר`, *arámati* `מסירות`, *sarvátāt* `שלמות`, *mīḍhá* `שכר`, *gnā́* `אשה`, *íḍā* `רוויה` …); the rest listed below.
- Tool rules: short licences start a word (Book 7 only); the exemptions; scoped name rows.

## Questions for the user
1. *śiśnádeva* (7.21.5d) rendered literally `אֵלֶּה שאֵלָם הוא האבר` ("those whose god is the phallus").
2. *nírr̥ti* `אֲבַדּוֹן` (the RV 10.10 precedent) – a biblical word in the line (Job 28:22 tagged); and 7.89.1 `בית החומר` with its echo of Job 4:19.
3. *dāsá* "slave" `עבד` and *súrā* `שֵׁכָר` in the Varuṇa hymns; *ā́gas* `אשמה` / *énas* `עוון` (no root חטא).
4. Names and words transliterated vs translated: *arí* `אָרִי`, *paṇí* `הַפַּנִי`, *uśíj* `החפצים` (translated), the plural `אַגְנִים`, tribe names that are words (Matsya "fish", Aja "goats"), *śakrá* `יכול`.
5. Readings: *járatam* (7.67.10c = 7.69.8c) "awaken" (Oldenberg, Jamison) vs "make old" (Zurich); *vásiṣṭha* as the name or "best" (7.70.6c, 7.73.3d); 7.86.7d (who is "the better poet"); 7.86.4a "gravest" / "oldest"; *dévaka* (7.18), *sánā* (7.19.6a), 7.68.5b, 7.96.2a *ándhasī*, 7.94.12 *ābhogá* / *udadhí* (names or nouns), 7.100.5d *kṣáyantam* (√*kṣā* "rule" vs √*kṣi* "dwell"), 7.82.6a *śulká*, 7.83.1b *pr̥thupárśu*.
6. The 7.35 *śám* pattern (the copula moved forward: `לאושר יהיה לנו X`).
7. √*sū* (Savitṛ) `האיץ` vs `המריץ`; the framing of 7.55 (a household charm, or the older lover's-charm reading).

## Problems and skipped items
- **Quota stop:** the 5-hour limit stopped the session and its agents at **03:10 UTC** (after ≈4.5 hours and ≈1,900 lines); the VM restarted; the parent's RESUME came at 03:46 (the gate: GO range B, a weekly `allowed_warning` – range B goes on). Nothing was lost (translator 6 had finished part 6 on disk). Recorded in `project.md`.
- The weekly limit was at `allowed_warning` from 03:46 to the end of the run (range B may use it).
- Translators wrote rank-3 quotations from memory twice (7.41, 7.86); both were replaced from `tr` before the hymn was saved. Two remembered verses were caught by printing.
- Not done: the print layout module (a layout session); the parallels index is generated, not reviewed by hand.

## Cross-corpus splits left for the lead
- **With the Old Avestan corpus** (`האווסטה/renderings.md` §12; the cousin-language rule – Book 7 kept its own word): *krátu* `רצון` (Av. *xratu* `תבונה`, which is Vedic *manīṣā́*'s); *mántra* `מימרה` (Av. `מנתרה`); *hótar* `כוהן־הקריאה` (Av. *zaotar* `מנסך`; the Vedic precedent of AB); *ukthá* `אמירה` (Av. *uxδa* `מלה`); *vīrá* `גיבור` (Av. `אנשי חיל`); *gír* `שיר` (Av. *garah* `שירה`); *kaví* `משורר` (Av. *kauui* `קַוִי`); *uśíj* `החפצים` (Av. *usig*); *vr̥trahán* `הורג־וְרִטְרָה` (Av. `הורג החוסם`).
- **With RV 10 / RV 1.32 / KU / AB / MBh in this corpus:** *havyá* `תקרובת` (RV 10.14–16 `מנחה`); *vára* `מבחר` (KU `משאלה`); *purā́* `לפנים` (KU 1.21a `מקדם`); √*tr̥̄* "overcome" `עבר` (1.32.6c `גבר`); *sámr̥ti* (1.32.6c `התנגשות` / 7.60.10a); √*sr̥* / √*sru* `זרם` (also 1.32); √*rakṣ* `גונן` (RV 10.14 `שומרים`); *puraetár* (AB `מנהיג`) / *yantár* `מרסן`; *arbhaká* `הקטנטנים` (AB `קטנים` = *kánīyas*); *śáṃtama* `המאושר ביותר` (RV 10 `נעים`); *rohít* `אדום` / RV 10.15 *aruṇá* `האדומות`; *sujániman* (RV 10.18.6c `לידות`) / *jániman* `דורות`; *sūnŕ̥tā* (KU `נועם דיבור`) / `נדיבות`; *anamīvá* `חסר־מחלה` (RV 10 `בלי־חולי`); *jaraṇā́* / *jarás*; √*kr̥p* / √*nāth*; *sūktá* / *mántra*; *sámbhr̥ta* `מצוידים` / MBh *yuj*.
- **Kept inside Book 7 (every free Hebrew collides):** *janúṣ* / *jánman* `לידה`; √*ās* / √*sad* `ישב`; √*san* / √*van* `זכה`; √*bhaj* / √*day* / *ví* √*dhā* `חילק`; *vŕ̥ṣan* / *vr̥ṣabhá* `פר`; *bhū́ri* / *purú* `רב`; *gábhasti* / *hásta* `יד`; *nadī́* / *síndhu* `נהר`; √*rāj* / √*kṣā* `מלך`; *jána* `עם` / `אנשים` and *carṣaṇí* `עמים`; √*yā* 2 `התחנן` / `ביקש`.
- **A proposal for the lead:** reserve the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` in the Rigveda (MBh 3.185.53c and AB 7.15.2e already use `חטא` for *pāpá* / *pāpmán*, so a corpus-wide reservation needs a ruling).
