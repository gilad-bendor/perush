# Round 4, run 6, sub-session 3 – the Instructions for Temple Personnel (CTH 264, IN): composite + translation

Session `session_01ECeNwJrNytPHy2VjNrsqgg` (child of `session_01Lwwha2FxM84MQKx7ABauwV`), 2026-10-25 05:05 – 05:19 UTC and
2026-10-26 07:25 – ~09:30 UTC (a weekly-limit stop in between). Model: the coordinator and every sub-agent ran Opus 5.5 (one
translator in four parts, three review passes); no cheaper model was used.

## Done
- **The composite** `חוקים-ובריתות/9-הוראות-לאנשי-בית-האל/composite-IN.tsv` – 312 rows (§§1–19 + colophon `col1`–`col4`) from
  18 TLHdig manuscripts of CTH 264; `comp-check IN` 0 problems; **pushed before the first translated line** (e80d7ac, 4d528dd).
  The generator with the decided map and the lead measure is kept as `composite-IN--made-by.py` (the TSV is the source).
  Method, sigla, dates, variants and the **concordance table** (§ → KUB 13.4 citation → lead and lines → duplicates →
  certainty) are in `project.md`, "IN: the composite".
- **The translation** `annotated-IN.rtl.md`: all 312 entries (`## §N – <title> (KUB 13.4 …)` headings), each with פירוק,
  נוסחים, תרגומים (Sturtevant & Bechtel 1935 and the CHD per word, after drafting), הקבלה, הערות. One Opus translator in four
  parts (1.1–7.18, 8.1–11.14, 12.1–16.13, 17.1–col4), resumed by SendMessage; after each part its Proposals were merged into
  `חוקים-ובריתות/renderings.md` **§7.12–§7.15**, verified, committed and pushed. Then three review passes, each a fresh Opus
  sub-agent, one at a time: (a) fidelity 48 lines, (b) consistency 24 lines (+ review rulings), (c) Hebrew 59 lines (part 1's
  verb-final order rewritten) + the intro `translation--intro-IN.rtl.md`.
- Built: `translation-IN.rtl.md` and the project's `translation.rtl.md`. Parallels: 80 rows in `project.md` ("Part IN:
  parallels index", generated from the הקבלה fields); `parallels-index.md` regenerated (3,090 rows, IN 80) with a new "Key
  findings … the Instructions for Temple Personnel" section; `build_parallels_index.py` knows project 9. `corpus.md` status row
  9; print stub `הדפסה/חוקים-ובריתות/9-הוראות-לאנשי-בית-האל.rtl.md`.
- Commits (on `main`): e80d7ac, 4d528dd, 515e1de, 72878cc, d3fa61e, b804f6f, 34d8943, 889c15b, 296f1c1, 756d3fc, 663ea1e (and this
  report).

## Verification
- `python3 -I -B tools/hittite_tools.py verify --strict` (all present Hittite keys: HL1, HL2, HLPT, IN): **0 problems** (the one
  listed repeated-line difference is HL1 180/186, accepted by sub 1).
- `selftest`: 30 lines, 0 failures (7 new IN lines). `comp-check IN`: 312 rows, 0 problems.
- `check_bible_quotes.py` on every file written or changed (annotated, intro, both built translations, `project.md`,
  `renderings.md`, `corpus.md`, `parallels-index.md`, the print stub): **0 problems**.
- The intro was checked by pass (c) against §H3/§H4 by script: reserved words only inside quotations or named as the Bible's
  words kept out of the translation.

## Key findings
**For the Bible** (all typological: Hittite never met Israel; tags [equivalent] / [divergence]):
- **Num 18:1–7, 22–23; 3:38; 1:51 ↔ §§6, 10, 11** (Milgrom's comparison): the temple's night watch (*ḫaliya-* `משמרת`,
  *paḫš-* `שמר`), the outsider (*araḫzena-* "not a man of Ḫattuša") who approaches the gods dies – **and so does the one who
  brought him in** (6.18; Num 1:51 has the outsider alone), the watchman at whose post an intruder entered answers with his life.
- **Lev 22:1–16 / Num 18:11 ↔ §§5–6**: the god's portion may not go home to the personnel's wives, children and slaves, nor to
  an in-law or a guest – the very household the Torah lets eat (a [divergence]; 6.11 hangs on a restored *lē*). Eating within
  three days ↔ Lev 7:15–18, 19:6.
- **Lev 15:18; 22:6–7 ↔ §§10, 14**: the bath after a night with a woman before going up to the god (the Torah adds "until
  evening"); the kitchen's purity, the vessel touched by a pig or dog ↔ Lev 11:33; impure food repaid by the gods with dung and
  urine ↔ Mal 2:3.
- **Robbing the god: Mal 3:8; 1 Sam 2:12–17; Lev 27:10 ↔ §§4, 7, 8, 16, 19**: payment taken instead of the offering, the
  god's meat taken before it reaches him (↔ the sons of Eli), the fattened ox swapped for a lean one with the very verb of
  Lev 27:10 (*waḫnu-* `המיר`), the god's field called "ours".
- **Lev 23:14; Exod 22:28–29; 23:19 ↔ §§15, 18**: the fresh produce and young animals reach the god "before a man eats of it",
  without delay (↔ `לֹא תְאַחֵר`).
- **Exod 22:8–9 ↔ §§17–19**: the herdsman's excuses "it died, it broke away, a bull gored it" ↔ `וּמֵת אוֹ נִשְׁבַּר אוֹ
  נִשְׁבָּה`; the doubt goes "to the god" – here to an ordeal (drinking the god's rhyton), the household answerable.

**For the ancient mind:** "Is the mind of man and of the gods any different? No!" (§2) – the god as a master who must be fed
clean food by washed servants, and whose anger, like a master's, falls on the servant's wife, children, kin and slaves (§§2–3;
↔ Mal 1:8); "the mind of the gods is strong: it does not hasten to seize, but when it seizes it does not let go" (§7); a temple
economy of registered and sealed royal gifts (§8); festivals kept at their time, not when the priest prefers the harvest
(§9); a city temple that sleeps in shifts with the enemy outside the walls (§10); the oath and the ordeal as the god's own
court (§§17–19).

## Decisions taken
**The composite** (`project.md`, "IN: the composite"):
- Sigla and dates from the Mainz Konkordanz (`c=264`): all copies New Script; A = KUB 13.4, B = KBo 50.276b+, C = KBo 50.283+
  (incl. KUB 13.5), D KUB 26.31+, E KBo 50.279+, F KUB 31.94+, H KUB 40.63, I–O small; TLHdig's `KUB 61.323.xml` is a second
  copy of KBo 61.323 (excluded).
- § numbering: **Sturtevant & Bechtel 1935** §§1–19 (checked in their book after the composite was built) = KUB 13.4's 18
  dividers + one in its lost col. ii top (preserved in KBo 50.283+ ii 16). Miller 2013's primes (Alaura's "§7′") seem to mark
  the same numbers; not verified.
- Lead rule, measured by script: KUB 13.4 leads where it keeps ≥ ~⅔ of the signs of the best aligned duplicate; else the best
  duplicate: rows 6.8–7.10 from KBo 50.283+ ii 6–26, row 15.1 from KBo 50.276b+ iii 9′. Our text changes: 6.8 (a TLHdig
  restoration that repeats A i 66′ dropped); notes on the borrowed rows, 7.11, 1.1.

**Renderings** (§7.2 checked against the transliteration before drafting; §7.12–§7.15; review rulings):
- §7.2 corrected: the "outsider" row named *zakkiškittari* / *dammeli-*, absent from the text; the words are *araḫzena-*
  `חיצוני` (HL2 precedent) and *UBĀRU* `אורח`. *EN.NUN* absent.
- New formulas: F12 *naḫḫanteš ešten* `היו יראים` (+ gate `ירא` to *naḫḫ-*), F13 *SAG.DU-aš waštul* `חטא־ראש`, F14 *SAG.DU-aš
  ÚŠ-tar / akkatar* `מות־ראש`, F16 *paḫḫaššanuwanteš ešten* `היו נשמרים`; the address `ונוסף על כך: אתם, אשר אנשי בית הָאֵל (אתם)
  –`; *EGIR-pa waḫnumar* `הֲפִיכָה בחזרה – אַל תהיה …`; *DINGIR.MEŠ-aš ZI-ni* `לנפש הָאֵלִים` (`על נפש הָאֵלִים` with *ḫappar
  dā-*); *mēḫunaš mēḫuni* `בזמנו` (coordinator, against the translator's `בזמן הזמנים`); *išduwari* both forms; the oath, the
  ordeal, §19's confession = its case.
- Words: *ḫali-* watch `משמרת` / corral `מכלאה`; *weḫ-* `סבב`; *ḫuelpi* `הטרי` (`ביכורים`, `ראשית` reserved); *kartimmiya-* `זעם`
  (`הכעיס` reserved); ÙMMEDA `אֹמֵן`; GIŠ.ḪUR `שטר`; *šiya-* `הטביע`; SAGI.A `מַשְׁקֶה` [cognate via *šāqû*]; LÚ APIN.LÁ `אִכָּר`;
  MUḪALDIM `מבשל`; *ištanana-* `כַּן`; *karšattar* `חֲתָךְ`; NINDA.GUR₄.RA UD-MI `לחם עבה יומי`; *išpantuzzi* `כלי־נסך`;
  splits by sense accepted: *šanḫ-*, *šarra-*, *waḫnu-*, UMBIN, *ḫuwai-*, *menaḫḫanda*; *kuitman* `עד ש־` = HL1 `עד אשר`.
- Review rulings: *lē* + iterative = `אַל` + future without `תמיד`; `תמיד` for a positive iterative only where repetition is
  stressed; natural Hebrew clause order (after part 1); brackets as HL1 (a restored lone *nu* and one-syllable omissions not
  marked).
- Tables (§H, read by the tool for both corpora): new reservations (H3) `בכורים`/`ראשית`, `תושב`/`גר`, `נדר`, `מזבח`,
  `מעשר`/`תרומה`, `קבע`, `הכעיס`, `לחם התמיד`/`לחם הפנים`; gates (H4) `ירא` (*naḫḫ-*), `נסך` (*išpant-*), the `שמר` licence
  widened to *ḫāli*, the `מחץ` licence to GUL-*aḫ-*; formulas F12–F16; traps `אם/אמות האל`, `דַּחִיָּה`, `מַנּוּ`, `אֹמֵן`,
  `יִסֹּב`, `מַשְׁקֶה`, `חָלָב`, `כַּן`; H2 name *labarna* `לַבַּרְנָה`; 7 new selftest lines.
- Tool: `build_parallels_index.py` knows IN; `hittite_tools.py data` no longer prints "[HL n]" for IN.

## Questions for the user
None that block. (The modern editions – Süel 1985, Taggar-Cohen 2006, Miller 2013 – are © and not in hand; they would check our
readings of the new fragments and the crux 6.11.)

## Problems and skipped items
- **Quota stop:** 2026-10-25 05:19 UTC, "You've hit your weekly limit · resets Oct 26, 7am (UTC)" (`seven_day` `rejected`),
  about 15 minutes into the session, while the composite was being built: the composite TSV and its generator were on disk,
  uncommitted, and were committed at once on resuming (2026-10-26 07:26 UTC, after the parent's message; status `allowed`,
  `five_hour`). Nothing was lost. No further stop.
- Git: the cloud checkout's local `main` was a stale copy with unrelated history; kept as `main-backup-stale-sub3`, a fresh
  `main` made to track `origin/main`.
- Rank 3: no open modern translation. **Sturtevant & Bechtel 1935** *A Hittite Chrestomathy*: **openly reachable** as a full-view
  copy in archive.org's Digital Library of India collection (`in.ernet.dli.2015.279400`; also a user upload
  `sturtevant-bechtel-a-hittite-chrestomathy-1935`, not used); its US copyright renewal was not verified (HathiTrust's catalogue
  was behind a JavaScript wall). Used after drafting, kept in the session scratchpad only. **The CHD** free volumes are no longer
  at the URL `hittite_tools.py chd` prints: they are at `isac.uchicago.edu/publications/hittite-dictionary-volume-l-n` (`-p`,
  `-s`), PDFs on `isac-assets.s3.amazonaws.com/isac-publications/chd_l-n.pdf` etc.; downloaded to the scratchpad, consulted per
  word only (never committed).
- Not verified: Miller 2013's § primes; the find-spot of KUB 13.4 (the intro says it is unknown; the duplicates B, C, E are from
  Temple I storerooms per the Konkordanz). The SMEA site (Alaura 2015) timed out.
- The witnesses column's alignment of duplicate lines to lead rows is automatic and approximate (as in HL2).
- Cruxes left marked in the text (`?`, `*…*`): 1.13, 2.13–2.20, 5.9, 6.7, 6.11 (the main one), 7.3, 7.12, 7.14, 8.2, 8.22–8.23,
  8.26, 10.6, 11.3, 11.7, 11.9, 12.2, 13.6–13.10, 14.21, 14.24, 16.11, 17.3, 18.3–18.4, 18.9, *karšattar*.
- `lexmap` lists *iya-* (mid.) "go" (19.3) under *iya-* "make" (a label limitation of the tool, not a collision).

## Cross-corpus splits left for the lead
- *dai-* "put" `שׂם` (Laws and IN) vs the ritual corpus's R1 `הִנִּיחַ`.
- Akk. *nuḫatimmu* "cook" `אופה` in the other corpora vs Hittite MUḪALDIM `מבשל` (here `אופה` is NINDA.DÙ.DÙ = *ēpû*, its cognate):
  the other corpora's choice looks wrong.
- GIŠ.ḪUR "record" `שטר` (IN) vs Gudea's *ĝiš-ḫur* "plan" `צורה` (split by sense across languages).
- `קרא` for Hittite *ḫalzai-* (common vocabulary, like `עבר` in HL1) vs the Akkadian corpora's `קרא` for *nabû*.
- `חצה` for *šarra-* "cross (a threshold)" beside the Sumerian *bal* `חצה`; `חתם` kept for the Egyptian loanword (IN uses
  `הטביע` for *šiya-* "seal").
- `ירא` now gated to Hittite *naḫḫ-* (= Akk. *palāḫu*, the prophecy corpus's licence): consistent, but worth a §6.7 line.

## For the shared files
- **history.md** (changelog): "2026-10-25/26 – Round 4 run 6 sub 3: the Instructions for Temple Personnel (CTH 264, IN): our
  composite from 18 TLHdig manuscripts (312 rows; KUB 13.4 leads by a measured rule, its lost col. ii top from KBo 50.283+;
  § numbering of Sturtevant & Bechtel 1935; concordance with certainty column) pushed before the first line; one Opus translator
  in four parts, three review passes, intro, built; 80 parallels rows; `verify --strict` 0 problems; print stub. A weekly-limit
  stop (2026-10-25 05:19 → 10-26 07:26 UTC) during the composite; nothing lost." Story: the pre-set "outsider" row of the
  renderings named words the text does not have (*zakkiškittari*, *dammeli-*) – found by reading the transliteration before
  the first line; the paragraph count needed a duplicate (KBo 50.283+ keeps the divider lost in KUB 13.4's col. ii); new traps
  were caught at once by the verifier (`חָלָב`).
- **tools.md**: `hittite_tools.py data` prints "[HL n]" only for HL keys; `חוקים-ובריתות/build_parallels_index.py` reads project 9
  (IN); `חוקים-ובריתות/9-הוראות-לאנשי-בית-האל/composite-IN--made-by.py` (one-off generator with `--measure`: per lead row, the
  preserved signs of the lead and of its best duplicate). The `chd` command's URL is stale: the free CHD PDFs are at
  `isac.uchicago.edu/publications/hittite-dictionary-volume-{l-n,p,s}` → `isac-assets.s3.amazonaws.com/isac-publications/
  chd_l-n.pdf`, `chd_p.pdf`, `chd_s.pdf`, `chds1/3/4/5/6.pdf` (fix the pointer).
- **sources-registry.md**: Sturtevant & Bechtel 1935, *A Hittite Chrestomathy* (William Dwight Whitney Linguistic Series;
  archive.org `in.ernet.dli.2015.279400`, full view, DLI scan, djvu text; KUB 13.4 + KUB 13.5 transliterated and translated, pp.
  127–174; § numbering of CTH 264; US renewal status unverified); the CHD free volumes (URLs above; per word only, no bulk
  extraction); the Mainz Konkordanz for CTH 264 (`hethport.net/hetkonk/hetkonk_abfrage.php?c=264`). Nothing was added under
  `sources/`.
- **guidelines §5.2** (one line each):
  - "**Count a composite's paragraphs against every copy**: KUB 13.4's 18 dividers give 19 §§ only with the divider that
    KBo 50.283+ keeps in KUB 13.4's lost col. ii top; the literature's numbering (Sturtevant & Bechtel) confirmed it. [Temple
    Personnel, Round 4 run 6]"
  - "**A plene Hebrew word can collide with another source word's plene form** (ÙMMEDA `אֹמֵן` / UMMIĀNU `אֻמָּן` = `אומן`;
    SAGI.A `מַשְׁקֶה` / Gilgameš's *mašqû*; GA `חָלָב` / `חֵלֶב`): add the trap with the rendering. [Temple Personnel]"
  - "**A prohibitive with an iterative is a plain prohibition** (`אַל` + future): `אַל … תמיד` reads 'not always' and weakens the
    ban. [Temple Personnel]"
- **guidelines §6.7** (a line): "**The Instructions for Temple Personnel (`חוקים-ובריתות/renderings.md` §7.2, §7.12–§7.15,
  2026-10-26):** *É DINGIR-LIM* `בית האל`, SANGA `כהן` (GAL `כהן גדול`), GUDU₁₂ `מְשׁוּחַ`, AMA.DINGIR-LIM `אֵם הָאֵל` ★, *ḫali-*
  watch `משמרת` / corral `מכלאה`, *paḫš-* `שמר`, *weḫ-* `סבב`, *naḫḫanteš ešten* `היו יראים`, *paḫḫaššanuwanteš ešten* `היו
  נשמרים`, *SAG.DU-aš waštul* `חטא־ראש`, *ÚŠ-tar* `מות־ראש`, ZI `נפש` (*DINGIR.MEŠ-aš ZI-ni* `לנפש הָאֵלִים`), *araḫzena-*
  `חיצוני`, *UBĀRU* `אורח`, *ḫuelpi* `הטרי`, *kartimmiya-* `זעם`, *waḫnu-* `המיר` (Lev 27:10), *išḫiul* `חובה`, *šaklai-* `מנהג`;
  reserved: `זר`, `מקדש`/`משכן`/`מועד`, `יומת`, `ביכורים`/`ראשית`, `תושב`/`גר`, `נדר`, `מעשר`/`תרומה`, `קבע`, `הכעיס`, `לחם
  התמיד`."
- **STATUS.md / the plan row (run 6):** the Instructions for Temple Personnel (project 9) complete (first draft, reviewed,
  built, print stub); the Hittite rituals remain for the run.
