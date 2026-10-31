# Round 4, run 6, sub-session 2 – the Hittite Laws, second tablet "If a vine" (HL2): composite + translation

Session `session_01CS8qxgBHsv68EZYsSvcZL7` (child of `session_01Lwwha2FxM84MQKx7ABauwV`), 2026-10-25, 02:30–~05:20 UTC.
Model: the coordinator and every sub-agent ran Opus 5.5 (one translator in four parts, three review passes); no cheaper model
was used.

## Done
- **The composite** `חוקים-ובריתות/8-החוקים-החתיים/composite-HL2.tsv` – 330 rows (HL §§101–200b + the colophon) from the 37
  TLHdig manuscripts of CTH 292, built and checked (`comp-check HL2`: 0 problems) and **pushed before the first translated line**
  (696a6dc). The decided map and its generator are kept for the record in `composite-HL2--made-by.py` (the TSV is the source now).
  The concordance (§ → lead manuscript and lines → duplicates, recension, certainty), the method, the manuscripts with their
  script dates and Hoffner's sigla, the lost §§, the unplaced fragments and the colophon are in `project.md`, section "HL2: the
  composite".
- **The translation** `annotated-HL2.rtl.md`: all 330 entries (`## §N – …` headings, incl. 146a/b, 158a/b, 160a/b, 162b, 173a/b,
  176a/b, 185a/b, 195a/b/c, 200a/b; headings for the lost §§ 114–117, 134–141 and the numbers 153–156 without text), each with
  פירוק, נוסחים (the Old Script copy against the New Script ones, the Old Hittite version 292.I against the later 292.II),
  תרגומים (Hrozný 1922 and Zimmern & Friedrich 1922, read after drafting), הקבלה, הערות. One Opus translator in four parts
  (101.1–128.6, 129.1–162b.4, 163.1–186.4, 187.1–col1), resumed by SendMessage; after each part the Proposals were merged into
  `חוקים-ובריתות/renderings.md` **§7.8–§7.11** with the collisions resolved, verified, committed and pushed. Then three review
  passes, each a fresh Opus sub-agent, one at a time: (a) fidelity 40 lines, (b) consistency 75 lines (+ review rulings in the
  renderings), (c) Hebrew 59 lines + the intro `translation--intro-HL2.rtl.md`.
- Built: `translation-HL2.rtl.md` and the project's combined `translation.rtl.md` (HL1 + HL2 + HLPT). HL1 495 aligned (`שקל אחד
  כסף`) and HL1 rebuilt.
- Parallels: 115 HL2 rows in `project.md` ("Part HL2: parallels index"); `parallels-index.md` regenerated (3,010 rows, HL 298)
  with a new "Key findings … the Hittite Laws, second tablet" section; `build_parallels_index.py` legend knows HL2.
- `corpus.md` status row 8 and `project.md` Progress updated; print stub `הדפסה/חוקים-ובריתות/8-החוקים-החתיים.rtl.md` (the single
  line embedding the combined translation).
- Commits (on `main`): 696a6dc, 6ee171d, ffff81e, 2830eac, 46c29c0, 5c57a46, 1b23cdf, bb8a8f4, 597cb91, 30da693 (and this report).

## Verification
- `python3 -I -B tools/hittite_tools.py verify HL1 HL2 HLPT --strict`: **0 problems** (the one listed repeated-line difference is
  HL1 180/186, accepted by sub 1).
- `selftest`: 23 lines, 0 failures (7 new HL2 lines). `comp-check HL2`: 330 rows, 0 problems.
- `check_bible_quotes.py` on every file written or changed (the annotated, intro and built translation files, `project.md`,
  `renderings.md`, `corpus.md`, `parallels-index.md`, the print stub): **0 problems**.
- The intro was checked by pass (c) against the §H3/§H4 patterns: no reserved or gated word in free prose.

## Key findings
**For the Bible**
- **Lev 18 and 20 ↔ HL 187–200a**: the same map of unions, graded *ḫurkel* `תועבה` (↔ `תּוֹעֵבָה`) or "no offence" `אין עברה`.
  Divergences: the wife's sister after the wife's death is "no offence" – the same line Lev 18:18 draws at `בְּחַיֶּיהָ`; the
  stepmother is "no offence" only after the father's death (↔ 18:8); horse and mule are "no offence", but the man may not come
  before the king nor become a priest (↔ Lev 21:16–23); death is the king's to inflict or pardon; the animal that "leaps" on a
  man dies, and a sheep dies in the man's place.
- **Deut 22:22–27 ↔ HL 197–198**: mountains – the man's sin; house – the woman's; the husband may kill them on the spot ("no
  offence"), or at the palace gate spare his wife and so the lover, or say "let both die" (*2-pat akkandu* `שניהם ימותו` ↔
  `וּמֵתוּ גַּם שְׁנֵיהֶם`).
- **Deut 25:5–10, Gen 38 ↔ HL 193**: brother, then father, then (the Old Hittite version) the brother's son; no levirate term
  ([absent]); the later copy KBo 6.26 has a damaged third taker and adds "it is no offence".
- **Exod 22:4–5 ↔ HL 105–107**: the fire that "catches" (↔ `וּמָצְאָה`), "another's field" (OH version only ↔ `בִּשְׂדֵה אַחֵר`), sheep
  let loose in a vineyard (`שלח` ↔ `וְשִׁלַּח אֶת בְּעִירֹה`), a good field given back (↔ `מֵיטַב שָׂדֵהוּ`); Exod 21:34 ↔ HL 106, 113.
- **Deut 19:14 ↔ HL 168–169** (the boundary, *arḫan* / ZAG `גבול`, repaired by a rite to the Sun-god); **Lev 19:19 ↔ HL 166–167**
  is a [divergence] (sowing over another's sown field, not mixed kinds); **Exod 22:17 ↔ HL 111, 170** (clay image = sorcery, "the
  king's case"; the snake and another's name); **1 Kgs 10:29 ↔ HL 180** (a horse 20 shekels against Solomon's 150).

**For the ancient mind**
- The code still cites its own past: the plough-thief once put to death "by the oxen" (121), the sower over another's seed
  once torn by two plough-teams (166–167), now a fine and a sheep "drawn in the man's place" – a substitution rite inside a law.
- Purity, ownership and the gods meet in the field: the broken boundary is "re-purified", the buyer breaks bread to the Sun-god
  and the Storm-god and says "no quarrel"; a slave who rebels "goes into the pot"; defying the king's ruling turns a house into a
  heap of ruins.
- The economy in prices (§§178–186): a plough-ox 12 shekels, a cow 7, a sheep 1, a draught horse 20, a mule a mina; garments,
  oil, honey, cheese, hides and meat – the most concrete picture of Hittite daily value that survives.
- The sexual laws are a jurist's taxonomy (who, with whom, where, while whom is alive), not a list of abominations: "no offence"
  is as frequent as *ḫurkel*, and the king's mercy is built in.

## Decisions taken
**The composite** (all in `project.md` "HL2: the composite"):
- Script dates and sigla from the Mainz Konkordanz (one Old Script copy, KBo 25.85+; 292.I = the Old Hittite version, 292.II the
  later). § numbering Hrozný's (1922, the edition that created it), continued by Friedrich and Hoffner; a/b labels 146a/b, 158a/b,
  160a/b, 162b, 173a/b are ours (marked); 176a/b, 185a/b, 195a–c, 200a/b are Hrozný's A/B/C.
- Lead rule: the OS copy where it keeps ≥ ~⅔ of the best copy's preserved text, else an NS copy of the OH version on the same
  terms, else the fullest; measured by script. By content: §111 (KUB 29.23+, the only copy with *šēni* "image"), §169 (KBo 6.13+).
- Rows = lead lines incl. TLHdig's own restorations; lines that straddle a § boundary split (noted); our own changes: 123.3
  (restoration), 122.3 (continuation), 192.3 (KBo 6.26's later-only law, tagged `{נוסח מאוחר}`); reading notes 189.1, 200a.2.
- Unplaced fragments listed, not used; KUB 29.17+ excluded (it is HL 60, tablet 1, misfiled in TLHdig's CTH-292).

**The tool** (`tools/hittite_tools.py`): joined manuscripts' lines named with their fragment (`{5} Vs. 2′`) and `#n` for labels
TLHdig repeats; `comp-check` reports ambiguous labels; a split row keeps only its own words (no licence from a neighbouring §);
**`fold`**: names, formulas and gate licences are also tried on a folded form of TLHdig's hyphenated text (`ták-ku` → `takku`,
`ḫu-u-ur-ki-il` → `ḫurkil`), and the licence text adds the TLHdig lemmas without `=` – without this no formula and several
gates would never have fired on HL2.

**The H-tables** (`renderings.md` §H): F1, F2, F4, F5, F7, F9 extended for the folded forms; new F11 *UL ḫaratar* `אין עברה`;
new reservations (§H3): `בער` (Exod 22:4–5), `מיטב`, `כלאים`, `הסיג`, `סקל`, `ירבע`/`לרבעה`, `דמיהם`, `ערכך`, the verb `קרב`;
licences: `שכב` (no longer licensed by Ù or the Sumerogram ŠEŠ; plural participles gated), `קדש` (not by *šuppala-*
"livestock"), `חטא` (+ OS *uštul*), `לפנים` (+ *karūpat*), `תועבה` (+ *ḫurkil*); new traps `אמהות`, `אמן`, `יגע`.

**Renderings and rulings** (every new rendering with its first row: `renderings.md` §7.8–§7.11 and the review rulings; full
tables in `project.md` Proposals, HL2 parts 1–4). The coordinator's rulings: PA₅ / *amiyara-* `פֶּלֶג` (PA₅ = Akk. *palgu*; was
`תעלה`, 109.1); *kiššan* and QĀTAMMA share `כך` (accepted split); ŠĪMU = Hittite *ḫappar-* "price" `מחיר` (HL1 *ḫappar* "trade"
`מסחר` a split by sense); *tiya-* `נכנס` (`לא ייכנס אל המלך`, not `ייגש`); *išḫai-* "bind" `אלם` vs *išḫiya-* `חייב`; *dai-* "put"
`שָׂם` (HLPT precedent; the counterpart of *šakānu*); INAKKISU = *kukkurš-* `קצץ`; ZABAR `אָרָד` / URUDU `נחושת`; *ḫurki-* "wheel"
`גלגל` (also UMBIN); the substitute sheep `שה אחד חֵלֶף X ימשכו`; the price-list pattern (`של` only for a written ŠA); *pupu-*
`מאהב` (`נואף` reserved); *wen-* `בא על`; MUŠ `נָחָשׁ`; *paršiya-* `פרץ`; *šuniya-* "sow" `זרע`; in HL 171 the mother is the subject
throughout; *kuiš* + present = `מי ש־` + future; 1 GÍN = `שקל אחד כסף` (HL1 495 aligned).

## Questions for the user
None that block. (Hoffner 1997 – ©, not in hand, not to be bought – would confirm our a/b labels and some §-placements of the
fragments; recorded in `project.md`.)

## Problems and skipped items
- No quota stop: the status was `seven_day` `allowed_warning` throughout (reset 2026-10-26 07:00 UTC), ignored under the Sunday
  exception; no `five_hour` warning, no 429.
- Git: the cloud checkout's local `main` was a stale copy with unrelated history; kept as `backup/stale-main-20261025`, a fresh
  `main` made to track `origin/main`.
- Rank 3/5: no open modern translation of HL2 exists; Hrozný 1922 and Zimmern & Friedrich 1922 (both PD, archive.org, OCR) were
  used after drafting, kept in the session scratchpad only (I was not to add to `sources/`); the CHD was not consulted
  (`hittite_tools.py chd` only points to the site).
- The witnesses column's alignment of duplicate lines to lead rows is automatic (order-preserving word overlap) and approximate.
- Unplaced fragments (KBo 25.85+ {1} col. ii, KBo 31.65 iii, KBo 19.8 – a beehive law –, KUB 13.31, etc.) are listed, not
  translated.
- Permissive false gate licences left (they never block a right word): `שמר` by *ḫaliya-* "kneel" (198.5), `נשא` by *pedi*
  (191.3), `מגפה` by BA.ÚŠ (149.2).
- One translator run of `build_parallels_index.py` regenerated the index mid-work; the translator restored it with `git checkout`
  (no effect); the final index was built by me.

## Cross-corpus splits left for the lead
- ZABAR `אָרָד` (Hittite, Ur-Namma, Gudea) vs Gilgameš's *siparru* `נחושת` (URUDU here `נחושת`): bronze vs copper in one Hebrew word
  across corpora.
- `שָׂם` for Hittite *dai-* beside the creation corpus's reservation for *šakānu* / *ĝar* (ruled as the same equivalent).
- `כך` for both *kiššan* and QĀTAMMA (Hittite-internal; accepted).
- `פסלון` (*šena-* "image") shared with an Egyptian corpus's "execration figurine" (common vocabulary, same concept).
- `חֵלֶף` (*kaššaš* "substitute") shared with MAL *kīmū* (cross-language equivalent).
- PA₅ `פלג` now in Hittite too (consistent with the 2026-10-23 harmonization; Gudea's Sumerian *pa₅* `תעלה` remains).

## For the shared files
- **history.md** (changelog): "2026-10-25 – Round 4 run 6 sub 2: the Hittite Laws, second tablet (HL2, CTH 292): our composite
  from 37 TLHdig manuscripts (330 rows; the Old Script copy leads where well preserved; concordance with certainty column)
  pushed before the first line; translated by one Opus translator in four parts, three review passes, built with HL1 + HLPT into
  the project's translation; 115 parallels rows; `verify HL1 HL2 HLPT --strict` 0 problems; print stub." Story: the verifier's
  formula and gate regexes, written on CHiL's normalized text, would never have fired on TLHdig's hyphenated transliteration
  (`ták-ku`, `ḫu-u-ur-ki-il`); a `fold` step fixed it before drafting, and found false licences (TLHdig glosses the conjunction
  Ù as "schlafen"; ŠEŠ "brother" lower-cases to *šeš*).
- **tools.md** (`hittite_tools.py`): fragment labels `{n} label` and `#n`; `fold` for composite texts (formulas, names, licences);
  split rows keep their own words; `comp-check` flags ambiguous labels. `חוקים-ובריתות/8-החוקים-החתיים/composite-HL2--made-by.py`
  (one-off generator, kept for the record).
- **sources-registry.md**: the Mainz Konkordanz (`hethport.net/hetkonk/hetkonk_abfrage.php?c=292`: script dates, joins, Hoffner's
  sigla – reachable 2026-10-25); Hrozný 1922 *Code hittite* (archive.org `codehittiteprove01hroz`, PD, djvu text: the § numbering of
  HL2); Zimmern & Friedrich 1922, *Hethitische Gesetze* (*AO* 23/2; archive.org `hethitischegeset0023hitt`, PD, German, OCR; its §
  numbers differ). Both could be added under `sources/` with a recipe.
- **guidelines §5.2** (one line each):
  - "**A verifier written for one edition's normalized text silently skips another's transliteration**: HL2's TLHdig text
    (`ták-ku`, `pa-a-i`) matched none of the formulas written for CHiL's (`takku`, `pāi`); fold the transliteration (join
    syllables, drop sign indices, collapse plene vowels) and test every formula on the new base before the first line. [Hittite
    Laws 2, Round 4 run 6]"
  - "**A joined manuscript repeats its line labels** (KBo 25.85+ has ten fragments, and TLHdig even repeats a fragment's
    labels): name lines with the fragment, and check uniqueness by script. [Hittite Laws 2]"
  - "**Choose the lead of a composite by a measured rule** (signs outside the brackets, per § and per manuscript) and state the
    rule and its exceptions in the concordance; an Old Script copy that is half restored from New Script duplicates still leads
    only where it keeps enough of its own text. [Hittite Laws 2]"
- **guidelines §6.7** (a line): "**The Hittite Laws, second tablet (`חוקים-ובריתות/renderings.md` §7.8–§7.11, 2026-10-25):**
  *ḫurkel* `תועבה`, *UL ḫaratar* `אין עברה`, *katta wašta-* `חטא עם`, *šeš-* `שכב`, *wen-* `בא על`, *pupu-* `מאהב`, OH *akiaš*
  `ימות`, *ḫuišnu-* `החיה`, *tiya-* `נכנס`, the substitute sheep `שה אחד חֵלֶף X ימשכו`, ŠĪMU / *ḫappar-* `מחיר`, the boundary *arḫa-*
  / ZAG `גבול`, *paršiya-* `פרץ`, PA₅ `פלג`, MUŠ `נָחָשׁ`, *dai-* `שָׂם`; reserved for the Torah: `בער`, `מיטב`, `כלאים`, `הסיג`, `סקל`,
  `רבע`, `דמיהם`, `ערכך`, `קרב` (verb)."
- **STATUS.md / the plan row (run 6):** the Hittite Laws complete (HL1, HL2, HLPT; first draft, reviewed, built, print stub);
  the Instructions for Temple Personnel (project 9) and the rituals remain for the run.
