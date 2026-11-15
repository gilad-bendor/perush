# Round 8 – the lead's finalization: plan (written 2026-11-14 ≈ 10:20 UTC, before the pause)

All five approved runs are done and merged into `translation-round-8` (run 6, AVS1, waits for the user's approval).
Range A ended before the finalization could run; it runs in range B (Sun 15 Nov 22:00 UTC → Mon 16 Nov 07:00 UTC),
up to three agents on disjoint corpora (the 2026-11-09 practice: each batch owns its rows and its files, writes, never
runs git; the lead commits each batch as it reports).

## 1. Before the agents
- Sources restored on the parent VM (`tools/sources_sync.py fetch`, then `vedic_tools.py convert`, `avesta_tools.py
  convert`) – started 10:12 UTC on 2026-11-14; re-run if the VM was reclaimed.
- The lead decides each row (survey with `tools/harmonize_survey.py` both ways: `src` on the source word, `heb` on the
  chosen Hebrew; check every corpus for a collision and a cognate reservation; §5.2 "A harmonization pass").
- The table: `harmonization--2026-11-16.md` (or the date it is made), the format of `harmonization--2026-11-13.md`.

## 2. The items (the runs' "Cross-corpus splits left for the lead")
**Batch A – Egyptian** (`חכמה-ובריאה-במצרים/`; run 1): nḏ `הגן` (UN4) / `שמר` (PT486, PT600); ꜥb.w "impurity"
`טומאה` / NU3 `עבֵרה`; bd `בורית` / NU3 105.3 `נתר`; mds `קוטל` / BD `עורץ`; sḏr `שכב` / `לן`; ḥꜣj `עירומות` / NU8 `חשוף`;
sṯ `ריח` / MK E134 `בושם`; Sobek `סֻבֶּךְ` / NU7 `סוֹבֶּךְ`; Mafdet `מָאפְדֶת` / `מַאפְדֶת`; Ndj `נֶדִי` / NU5 `נֶדוּ`;
ꜥ tla34360 `ספל` / `זרוע`; jp `פקד` / `מנה`; mz `קרב` / WE `נגש`; ds `כד` / WE `קנקן`; zḫz; the two lions mꜣj / rw;
the in-project pairs (wn / wpi̯ `פתח`, zj / šmj `הלך`, bḏ / pꜣḏ, ḥnw.t / ꜥb, spr / šbtjw, jni̯ / pḥ) – review only
(synonyms in a non-Semitic corpus, §6.7 principle 1). Also run 1's settled question 2 (the negated sḏm=f) against the
corpus's other negated forms.

**Batch B – Sumerian and Akkadian** (runs 2 and 4): *maškim* `נציב` / `הממונה` (laws, Gudea); *u₃-sumun₂* and *immal₂*
both `פרת־הבר`; *sa-par₃* `מכמורת` / Akk. *kamāru*; *gaz* `הרג` / Agade 237 `מכה`; `דרך` for *kaskal*, *a-ra₂*, *in-di₃*,
*ĝiri₃*; *nam-en* `כהונת־האֵן` / `אדנות`; *la-la* `עתרת` / LH *nuḫšum*; *bukru* / *perʾu* `צֶאֱצָא`; *šanû* / *nakāru*
`שִׁנָּה`; Dagan `דָּגָן` / Lipit-Ištar's `דָּגַן`; *zību* `זְאֵב` / Gilgameš `עַיִט` (and GU 17 *barbaru*); Anzû's *lītu*
`תשועה`, *dalālu* `הלל` against the school canon's reserved Psalms vocabulary; `הר אין־גישה` (*âru*) beside `ניגש` (*ṭeḫû*);
run 2's gate workarounds (EB 174 `תוף`, NG 113–114 `מיטבו`, EB 46/105 `אשר בו`, `בּוּרִים`, `הכוהן־לָל`) – license and
restore the plain words where the tool allows.

**Batch C – Vedic and Hittite** (runs 3 and 5): inside Book 7 – 7.8.2d √*vakṣ* → `פרח`; 7.104.6d √*jinv* → `קדמו`;
7.1.6a → `הצעירה`; 7.74.6c → `תפחו`; 7.104.17b → `בהחביאה`; 7.18.11b → `שיטח`; *ucátha* / *ukthá* both `אמירה`; *majmán*
`עוצמה` / *śávas* `עצמה`; renderings §11.19 (*yóni*); *haṃsá* `אווז` / KU `ברבור`. Hittite: GURUŠ `עלם` / `בחור`, DANNA
`בֵּרוּ` / `פרסאות` (kept by the lead's ruling: the Hittite Gilgameš follows the Babylonian epic – record only);
*šamnai-*, *ara-*, *nanna-*, *weya-*, *maniyaḫḫ-*, *ninink-*, *išḫiya-* (kept by sense – confirm and record).

## 3. After the agents
Every verifier (each corpus's tool, `--strict`), `tools/check_bible_quotes.py` over the folder; guidelines §6.7 (a
"Cross-corpus harmonization after Round 8" line) and §5.2 if a lesson; STATUS, history (changelog), `reports/round-8/
final.md`; `branches.py finish --into-main -m "Ancient-texts translations: Round 8 – …"`; title `Round8/Done: …`; one
message to the user; then launch Round 9 (`create_session`, `source_revision: main`, `ancient-translations: orchestrate
Round 9`) – §5.1c step 7.
