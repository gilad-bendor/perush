# Round 4, run 6, sub-session 1 – the Hittite Laws, first tablet (HL1) and the late parallel text (HLPT)

Session `session_01WwzdjmR34kvY3HkCLvRpdL` (child of `session_01Lwwha2FxM84MQKx7ABauwV`), 2026-10-25, 00:05–~03:00 UTC.
Model: the coordinator and every sub-agent ran Opus 5.5 (translation and all three review passes); no cheaper model was used.

## Done
- **HL1** – the first tablet "If a man", standard 13th-century text (CHiL CTH 291.2): **all 571 entries** (567 clauses, HL §1–§100,
  plus the four colophon rows, labelled `col1`–`col4`), one `## §N – …` heading per HL § (104 headings, incl. §19a/§19b,
  §26b–26c, §77a/§77b and the colophon). Every entry has פירוק, נוסחים (the Old Hittite version 291.1 and 291.3–5 compared at
  every §), תרגומים (CHiL's Italian, read after drafting), הקבלה, הערות.
- **HLPT** – the late parallel text KBo 6.4 (CHiL CTH 291.PT, scribe Ḫanikkuili): **all 206 entries** (205 clauses + `col1`),
  `## § <roman> (cfr. HL n) – …` headings (§ I–XLI, CHiL's combined § XXVII–XXVIII, colophon). Its Hebrew is HL1's byte for byte
  wherever the Hittite is the same; the נוסחים field compares every § with HL1.
- Files (all in `חוקים-ובריתות/8-החוקים-החתיים/`): `annotated-HL1.rtl.md`, `annotated-HLPT.rtl.md`, `translation--intro-HL1.rtl.md`,
  `translation--intro-HLPT.rtl.md`, the built `translation-HL1.rtl.md` (571 lines), `translation-HLPT.rtl.md` (206 lines) and the
  combined `translation.rtl.md` (HL1 + HLPT; it will take HL2 when it exists); `project.md` (Proposals of every part, Open decisions,
  Progress, the parallels index: 157 + 26 = 183 rows). Corpus level: `renderings.md` §7.3–§7.7 (the merged renderings) and the
  "Review rulings" paragraphs; `parallels-index.md` regenerated (2,895 rows, HL 183); `build_parallels_index.py` knows HL;
  `corpus.md` status row 8.
- Process: one translator sub-agent (Opus), resumed part by part with SendMessage: HL1 1–145, 146–290, 291–439, 440–col4, then
  HLPT; after each part the coordinator merged the Proposals into `renderings.md`, fixed the tables, verified, committed and pushed.
  Then three review passes, each a fresh Opus sub-agent, strictly one at a time: (a) fidelity, (b) consistency, (c) Hebrew + intros.
- Commits (on `main`): 27cae0f, 718ec52, adbd8ef, 4a6137a, fa32fab, f12da66, 801f608, cb433a7, a857fd8, 79ba36e, f67dc39 (and this report).

## Verification
- `python3 -I -B tools/hittite_tools.py verify HL1 HLPT --strict`: **0 problems**. One listed repeated-line difference, HL1 180 / 186
  (`ואותה` / `ואותו` for the genderless enclitic *=an*, by context), accepted and justified in the apparatus.
- `python3 -I -B tools/hittite_tools.py selftest`: 16 lines, 0 failures.
- `python3 -I -B tools/hittite_tools.py build HL1 HLPT`: 571 + 206 translation lines, identical to the `>` lines.
- `python3 -I tools/check_bible_quotes.py` on every file written or changed (both annotated files, both intros, the three built
  translations, `project.md`, `renderings.md`, `parallels-index.md`, the ritual corpus `renderings.md`): **0 problems**.
- The gates (§H3/§H4) run on the intros (by pass (c)'s script): 5 hits, all inside quotations (the translation's own formulas, and
  `הִכָּהוּ` in a Deut 21:1 quotation); none in free prose.

## Key findings
**For the Bible**
- **Exod 21:13 ↔ "his hand errs" (HL 3–4, PT § II):** the hand, not the man, is the agent in both; only the Torah brings in the deity
  (`וְהָאֱלֹהִים אִנָּה לְיָדוֹ`). The Hittite contrast is quarrel / accident (or intent / accident in CHiL's reading of *šullannaz*), and
  the penalty is persons ("heads") and the house as surety, not death or asylum (Exod 21:12, 14; Num 35:31 [divergence]).
- **Exod 21:18–19 ↔ HL 10 [equivalent]:** the injurer supplies a substitute worker and pays the physician (`רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא
  יְרַפֵּא`); HLPT fixes the physician's fee at 3 shekels.
- **Exod 21:22 ↔ HL 17–18, 77a:** a miscarriage priced by month and class (the late text: a flat 20 / 10 shekels); the same verb
  *pešš-* "throw out" and *armawant-* "pregnant" are used for a cow or mare.
- **Exod 21:23–27, Lev 24:19–20 ↔ HL 7–16 [divergence]:** silver for every limb, never talion; *lak-* "make fall" (a tooth) =
  `יַפִּיל`, a real [equivalent] of Exod 21:27.
- **Exod 21:37 ↔ HL 57–70:** the theft multiples of the Hittite (formerly 30 → now 15 for a bull, stallion, ram; plough-ox 15 → 10;
  cow, ewe 12 → 6) against the Torah's 5 and 4; **HL 70 ↔ Exod 22:3 `חַיִּים שְׁנַיִם יְשַׁלֵּם`** (the stolen animal returned alive, double
  on top) is the strongest verbal parallel of the theft laws.
- **Exod 22:9–13 ↔ HL 75:** the closest structural match: a hired or borrowed animal that dies or is lost is replaced; "it died by
  the god" + an oath frees the borrower (the OH "by the hand of the god" ↔ Exod 9:3 `יַד יְהוָה`); the divergence: the animal torn by
  a wolf is paid for (HL 80: its remains divided, ↔ Exod 22:12, Amos 3:12).
- **Exod 22:1–2 ↔ HL 93–97:** the burglar pays even when caught before entering; the slave burglar or arsonist loses nose and ears
  and is handed back to his master (HL 95, 99).
- **Deut 22:1–3, Exod 23:4 ↔ HL 45, 66, 71:** the finder declares the find at the king's gate or before the elders, may use the
  animal meanwhile; failure to declare makes him a thief.
- **Deut 23:16–17 ↔ HL 22–24 [divergence, a reversal]:** the returner of a runaway slave is paid, the harborer pays.
- **Exod 22:15–16 ↔ HL 28–35:** the father's refusal *mimma-* = `מאן` ↔ `אִם מָאֵן יְמָאֵן אָבִיהָ` [equivalent]; HL 35 reverses Exod
  21:2: a free woman married to a slave becomes a slave "in the third year".
- **Deut 21:1–9 ↔ PT § IV (and HL 6):** the measuring is shared (`וּמָדְדוּ אֶל הֶעָרִים` – 3 DANNA "this way and that way"), the result
  diverges: the heir takes compensation in land, house and silver from the towns within the radius (not only "the nearest town"),
  or forfeits his claim if there is none; no rite, no heifer, no declaration of innocence. The body lies in "an uncultivated
  place" (*dammeli-*): in Deut 21:4 the uncultivated valley is where the heifer is killed.
- **Ezra 7:24 `וַהֲלָךְ` ↔ *LÚ ILKI*:** cult personnel exempt from royal service (HL 50–51); the Aramaic word is a loan from *ilku*.
  **2 Sam 9:7 ↔ HL 47a:** fields granted with bread from the king's table.

**For the ancient mind**
- **A code that revises itself:** *karū … kinun=a* "formerly … but now" in HL 7, 9, 19b, 25, 57–69, 81, 91–94 …: the old tariff
  is cited and almost always halved, sometimes with the king named as the reformer ("the king threw away the palace's share").
  The Old Hittite manuscript already has the revised figures; the late text rereads "formerly / now" as two grades of guilt.
- **Persons as payment:** "heads" pass from the killer's house to the victim's house; the late text turns them into silver.
- **The classes:** a slave is consistently worth half a free man; the law names the victim's class and leaves the agent
  indefinite (`מישהו`); Ḫatti and Luwiya (Arzawa in the standard text where the OH has Luwiya) graded by nation.
- **The feudal world:** *šaḫḫan* and *luzzi*, the "man of the tool" and the "man of the *ilku*", the craftsmen's complaint to the
  king in HL 55 ("no one pays us wages … 'you are men of the *ilku*!'") and his answer; exemptions narrowed by later kings.
- **Purity as property:** defiling a pot or pond (HL 25) is damage; sorcery (HL 44b) is moving the remains of a purification onto
  another's property, "a case for the king"; castration is "purification" (HL 60–62).
- **The late jurist (HLPT):** new distinctions (intent / accident, crippled or not, two or three teeth), fixed sums for open duties,
  private witnesses (*kutruwai-*) instead of the king's gate and the elders, the old word *ḫippara-* glossed *ASĪRU* "captive".

## Decisions taken (minor, by me)
Every merged rendering is listed with its first clause in `renderings.md` §7.3 (part 1), §7.4 (part 2), §7.5 (part 3), §7.6 (part 4),
§7.7 (HLPT) and the "Review rulings" paragraphs; the full tables are in `project.md` Proposals. The coordinator's own decisions:
- *šullatar* `במחלוקת`; *arnu-* `יַגִּיעַ`; *LÚ DAM.GÀR* and *unattalla-* one Hebrew `תַּגָּר` (HL1 21, 28) – accepted as drafted.
- **`עבר` / `העביר` for crossing a river allowed in the Hittite texts** (HL 43, HL1 237–240): the cross-language cognate rule
  protects rare cognates and loanwords, not common vocabulary; Hittite has no *ebēru*.
- ***ELLUM* of a house or land = `פטור`** (HL1 284, 286), of persons `בן חורין`.
- *anna-* "mother" always vocalized `אֵם` / `וְהָאֵם` (HL1 1079–1131 in the file; `האם` reads "whether"); *kulei* "fallow" `בּוּר`
  (vs Etana's `בּוֹר`); QATI `תַּם` (col2); `אַיִל` vocalized (HL1 341, 358).
- *QĀTU* `יד` (HL1 300): tag corrected to [equivalent] (Akk. *qātu* is not the cognate of `יד`, which is *idu*).
- *takšan* split by sense: `לשניים` (171) / `יחד` (291); *ar- anda* (166) `יגיעו זה אל זה`.
- ***dammeli-* (PT 33–34) `לא מעובד`**, replacing the translator's `בְּתוּלִי` (the root of the law corpus's reserved `בתולה`).
- NAGAR (HL1 302) `נגרי העץ` (cognate loan `נגר`, as Gilgameš XII and the netherworld corpus; was `חרשי העץ`).
- `גבול` kept for *arḫa-* (HL1 30); `טרף` kept for *karap-* (HL1 430, 496) despite Ur-Namma's project-level reservation.
- Brackets: a Hebrew word is bracketed when the Hittite stem is restored (applied to ~170 lines by pass (b)); words the standard
  text lacks and the OH supplies get `{נוסח קדום: …}` (HL1 269); the edition's `?` kept (HL1 452).
- `שַׁחְחַן` / `לוּצִּי` may be vocalized at every occurrence (§7.1 amended).
- Table fixes (all in `renderings.md` §H, recorded there): F6 also matches *keššar=šiš waštai*; F9 *dāyezzi*; gate licences
  tightened or anchored: `מחץ` (German "schlagen" also glossed *kuen-*), `שבועה` ("eid" inside "scheiden", "Weide"), `בן חורין`
  ("rein"), `ארז`, `פיצה`, `שלח`, `נשא`, `מחנה`, `שכב`, `קדש` (*ŠUPPATI*), `לפנים` ("früher" = *karuwili-*); `ייטמא`, `יישבע` added
  to their gates; new §H6 traps: `לוי` (Luwian), `האם` (mother), `מהר` (*kušata*), `הלך` (*ILKU*), `חפרה` (*ḫippara-*), `גמול`, `איל`.
- **Tool fix** (`tools/hittite_tools.py`, `rows()`): CHiL numbers each colophon's clauses from 1 again (HL1: `1, 1, 2, 3`), so the
  labels repeated and `verify`'s order check could never pass; the colophons now get unique labels `col1`, `col2` … in the edition's
  order, § "colophon".
- **H-table fix in the ritual corpus file** (`טקסי-שילוח-וטיהור/renderings.md` §H2, read by `hittite_tools.py`): the name row
  `ḫapall` (Ḫapalla) matched the verb *ḫapallašai-* "injure" (HLPT 42); anchored `ḫapall(?!aš)`. (The only edit outside
  `חוקים-ובריתות/` and the tool; it is one of the tool's H-tables.)

## Questions for the user
None that block. (The *šullannaz* crux – "in a quarrel" vs CHiL's "with intent" – could be checked against Hoffner 1997, which is
not in hand and is not to be bought; it is recorded in `project.md`.)

## Problems and skipped items
- No quota stop: the status was `seven_day` `allowed_warning` throughout (resetting 2026-10-26 07:00 UTC), ignored under the
  Sunday exception; no `five_hour` warning, no 429.
- Git: the cloud checkout's local `main` was a stale copy with an unrelated (shallow) history; it was kept as the branch
  `backup/main-stale-20261025` and a fresh `main` was made to track `origin/main` (nothing lost).
- The print stub (`הדפסה/חוקים-ובריתות/8-החוקים-החתיים.rtl.md`) was not created: it is outside my folders, and the project's
  combined translation will change when HL2 is added. One line, for whoever finishes HL2:
  `<כלול-בהדפסה מקור="../../חוקים-ובריתות/8-החוקים-החתיים/translation.rtl.md">`.
- The built translations have no footnotes (optional; none written).
- Open in the text: the "Tablet 2" numbering of both HL1 colophons (`2!`); the fragmentary PT § XVIII–XXXIII (attributions marked
  `?`); HL 49 is not in CHiL's HL1 base; transliterated cruxes (BUBUTANU, *tapeššar*, *ŠUPPATI*, *ḫuša-*, *tarušḫa-*, MANDA, ŠALA,
  *karuḫali-*); several readings that differ from CHiL, each marked in the apparatus (HL1 1, 5, 138–139, 154, 165, 180, 183, 188, 247,
  316, 379, 419, 438–439, 450, 564; HLPT 18, 151, 165).
- HL2 (the second tablet) was not part of this sub-session.

## Cross-corpus splits left for the lead
- `עבר` / `העביר` (Hittite *zinu-* / *zai-* "cross") vs the Akkadian corpora's cognate reservation of `עבר` for *ebēru*: ruled
  allowed in Hittite (common vocabulary); the lead may want this as a §6.7 line.
- `גבול` for Hittite *arḫa-* while MAL B, the wisdom corpus and the legends gate `גבול` to their own Akkadian words (*kudurru*,
  *miṣru*, *itû*): kept as the real counterpart; HL2's boundary law (HL 168–169 ↔ Deut 19:14) must decide its own word.
- `טרף` for *karap-* "devour" (Exod 22:12 [equivalent]) vs Ur-Namma's project-level reservation of `טרף`.
- `לקח`, `נשא`, `השליך` in the Hittite texts (for *dā-*, *peda-*, *pešš-*) vs the Akkadian corpora's cognate reservations for
  *leqû*, *našû*, *nadû*: allowed as common vocabulary (same reasoning as `עבר`).
- `פגע` for *ḫapallašai-* (HLPT 42) vs LE's `*פגע*?` for *iktel*; `חתן־בית` (HL1 185) vs the netherworld corpus's project-level gate on
  `חתן` (*ḫāwiru*): minor.
- *gimra-* / LÍL `בָּר`, as the ritual corpus (shared H-tables; nothing to do).

## For the shared files
- **history.md** (changelog): "2026-10-25 – Round 4 run 6 sub 1: the Hittite Laws, first tablet (HL1, CHiL CTH 291.2, 571 entries)
  and the late parallel text (HLPT, KBo 6.4, 206 entries) translated, reviewed (three passes) and built; one Opus translator in five
  sequential parts, resumed by SendMessage; 183 parallels rows; `verify HL1 HLPT --strict` 0 problems." And its story: the
  translator kept its reading across 777 entries and fixed its own earlier choices when a later part needed a word (`בא` → *uwa-*,
  so *ar-* became `הגיע`; `בנה` → *wete-*, so *takš-* became `התקין`); the coordinator's catches were vocalization traps the gates
  did not yet know (`האם` "mother/whether", `בור` "fallow/pit"), a false [cognate] through an Akkadogram (*qātu* / `יד`) and a
  modern idiom on a reserved root (`בְּתוּלִי`).
- **tools.md** (`hittite_tools.py` entry): "Colophons of a CHiL edition get the labels `col1`, `col2` … (CHiL restarts their
  numbering at 1); fixed 2026-10-25." And: `חוקים-ובריתות/build_parallels_index.py` now reads project 8 (HL).
- **guidelines §5.2** (one line each):
  - "**A German gloss is a bad licence**: CHiL/TLHdig glosses are shared by several lemmas (*schlagen* = *walḫ-* "strike" and
    *kuen-* "kill") and are substrings of other glosses (*eid* in *scheiden*, *Weide*; *kompens* in *kompensieren(?)* of another
    verb): license a gate by the lemma or anchored forms, never by a bare gloss substring. [Hittite Laws, Round 4 run 6]"
  - "**An Akkadogram makes a [cognate] only when the Akkadian word is the cognate**: *QĀTU* is not `יד` (= *idu*); *ILKU* ~ Aram.
    `הֲלָךְ` (a loan), *ASĪRU* ~ `אָסִיר`, ÉRIN = *ṣābu* ~ `צָבָא` are. [Hittite Laws]"
  - "**Check repeated clause labels in an edition before the first line**: CHiL restarts the colophons' numbering, so the
    verifier's order check failed on every draft until the tool relabelled them. [Hittite Laws]"
- **guidelines §6.7** (a new line): "**The Hittite Laws (`חוקים-ובריתות/renderings.md` §7, §7.3–§7.7, 2026-10-25; Round 4 run 6):**
  *takku* `אִם`, *kuiški* `מישהו` (the agent indefinite), *kuen-* `הרג`, *walḫ-* `מחץ`, *n=aš aki* `וימות`, *QĀSSU waštai* `ידו חוטאת`,
  *šarnink-* `פיצה`, *pāi* `ייתן`, *karū … kinun=a* `לפנים … ועתה`, *parna=šše=a šuwāezzi* `ואל ביתו יביט`, *SAG.DU* `ראש`, *ELLUM*
  `בן חורין` (of land `פטור`), *šullatar* `במחלוקת`, *arnu-* `יַגִּיעַ`, DAM.GÀR `תַּגָּר`, *ḫunink-* `פצע`, *lak-* `הפיל` (Exod 21:27),
  *mimma-* `מאן` (Exod 22:16), *karap-* `טרף`, *link-* `נשבע`, *iwaru* `מַתָּן`, *kušata* `מֹהַר` ★, *anna-* `אֵם` ★, *ḫurkel* `תועבה`,
  *ILKU* `הֲלָךְ` ★, *dammeli-* `לא מעובד`, DANNA `פרסה`; in the Hittite texts `עבר` (crossing) is allowed (no *ebēru*). Traps:
  `לוּוִי` (Levi), `וְהָאֵם` (whether), `מֹהַר` (quickly), `הַהֲלָךְ` (the walker), `חִפָּרָה`, `גָּמוּל`, `אַיִל` / `אַיָּל`, `אָמָה` /
  `אַמָּה`, `בּוּר` / `בּוֹר`."
- **STATUS.md / the plan row (run 6):** HL1 and HLPT done (first draft, reviewed, built); HL2 and the print stub remain.
