# Three tales: Zalpa, Appu, Elkunirša

Project of `../` (the Hurro-Hittite and Old Anatolian myths; Round 5 run 2, 2026-10-30). Tool: `tools/hittite_tools.py`
(read `../corpus.md`, `../renderings.md`, `../translator-brief--myths.md`).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| ZA | The Tale of Zalpa (CTH 3.1), KBo 22.2 (Old Script) | **our composite** `composite-ZA.tsv` (TLHdig 0.3; one manuscript; KBo 3.38 is not in TLHdig), comp-check 36 rows, 0 problems | 36 |
| AP | Appu and his two sons (CTH 360.1–4) | HPM CTH 360.x (Rieken et al.) | 204 |
| EL | Elkunirša and Ašertu (CTH 342.1.1–342.2.5) | HPM CTH 342.x (Rieken et al.) | 301 |

Labels and numbering: `../corpus.md` § Labels. Rank 3 (after drafting only): the HPM editors' German translation
(`hittite_tools.py tr KEY`), for the composites none (Neu 1996 and Hoffner 1998 are © and not in hand).

## Notes
- ZA: between Vs. 20 (2.15) and Rs. 1′ (2.16) the tablet is broken (the lower obverse and the upper reverse are lost):
  the clean translation marks the gap.
- EL's two versions are kept apart (`1.x` / `2.x`), as HPM edits them.

## Open decisions
(none yet)

## Proposals
(filled by the translators: every new rendering, every pre-set row changed, gates, cruxes)

### Translator 4 (ZA, AP, EL)
Drafted 2026-10-30/31: `annotated-ZA.rtl.md` (36 rows), `annotated-AP.rtl.md` (204 clauses), `annotated-EL.rtl.md` (301
clauses), each with a Hebrew intro and `##` headings per fragment and §. `verify ZA AP EL --strict` 0; `verify IL HE KU UL SR
--strict` 0 after my table edits; `selftest` 0; `check_bible_quotes.py` 0 on all three. ZA: no rank-3 translation was used or
quoted. AP, EL: HPM's German was read only after each text was drafted (AP 1:1–88, 1:89–4:4; EL 1.1–1.2, 1.3–2.5); every
correction it caused is in a **תרגומים** bullet ("טיוטתנו … ; HPM … ; תוקן").

**1. Tables edited (`../renderings.md`; tested with `verify` on all eight myth keys).**
- §H5 **F30 / F31**: *āppa memiškiwan dāiš* (the phonetic spelling of EGIR-pa, AP 1:54) was caught by F30 ("began to
  speak"); F30 now has `(?<!āppa )(?<!appa )`, F31 reads `(?:egir-pa|āppa|appa) memišk…`. Only AP 1:54 is affected.
- §H2 new rows: `zalpuw` `זַלְפָּה` ★ (the Old Hittite *Zalpuwa*, ZA 1.4: the law row `zalpa` misses it); `\{uru\}kan[ie]š`
  `קָנֵשׁ`; `\{uru\}neš` `נֵשָׁה`; `\{m\}ḫapp` `חַפִּי`; `\{uru\}alḫi` `אַלְחִיוּתָה`; `ḫaraḫš` `חַרַחְשׁוּ`; `tamnašš`
  `תַּמְנַשּׁוּ`; `\{m\}tabarn|\{m\}taparn` `תַּבַּרְנָה` (a person's name in ZA 5.2; the title stays the law row's `לַבַּרְנָה`);
  `zimbir` `סִפַּר`; `\{uru\}kuzin` `קוּזִינָה`; `\{d\}nanay` `נַנַיָּה`; `kiššin` `קִישִּׁינָה`; `\{d\}amar\.utu` `מַרְדּוּךְ`;
  `ká\.dingir\.ra` `בָּבֶל`; `\{uru\}amurr` `אֱמֹרִי`; `za\.ba4\.ba4` `זַבַּבָּה` (M1 had it, H2 not); `\{d\}nin\.é\.gal`
  `נִינֶגַל`. **Left out of H2 (a bracket splits the name, so the first-occurrence check cannot see it – translator 2's
  point):** Tamarmara `תַּמַרְמַרָה` (ZA 2.3), Šudul `שׁוּדוּל` (AP 1:6, 1:16), the Anunnaki `אֲנוּנָּכִּי` (EL 1.1:69, 1.2:30–31).
  **Proposal for M1:** add these names (and Kaneš/Neša, Ḫappi, Alḫiuta, Ḫaraḫšu, Tamnaššu, Tabarna, Šudul, Sippar, Kuzina,
  Nanaya, Kiššina, Marduk, Babylon, Amurru, Ninegal) to the M1 table; I did not edit M1 (human table) beyond what H2 needed.

**2. Pre-set rows checked against the transliteration (and changed where needed).**
- M2 *tuppa-* `אַרְגָּז` / *šakan* `שומן`: confirmed (ZA 1.2 `tup-pu-uš ša-kán-da šu-un-na-aš` "filled the containers with
  fat"). **Ì is split by sense across the corpus:** *šakan* / {UZU}Ì (food, ZA 1.2, AP 1:17) `שומן` (with the Laws, HL1 459);
  Ì for anointing (EL 2.1:19, 2.3:12, 2.5:14) `שמן` (with SR). HPM's "Öl" at AP 1:17 is noted there.
- M1 Appu's sons ḪUL-lu / NÍG.SI.SÁ `רַע` / `יָשָׁר` (names, no article, always vocalized): confirmed; the same words are the
  road's adjectives (*NÍG.SI.SÁ-an KASKAL-an* `הדרך הישרה`, *ḪUL-pan KASKAL-an* `הדרך הרעה`, AP 1:98–110) and the bad ox
  (ḪUL-*lun* `הָרַע`, 1:147): the name/adjective pun stays visible. NÍG.SI.SÁ = Akk. *mīšaru* / *išaru*: `ישר` is its cognate
  (as the wisdom corpus reserves `יָשָׁר` for *išaru*, and Sum. *si sa₂* `יֹשֶׁר`).
- *ḫandant-* "just, righteous" (AP 1:2) = **`הגון`** (`צדיק` reserved; `ישר` is NÍG.SI.SÁ's); *ḫuwappa-* "evil" (1:3–4) =
  **`רשע`** (not otherwise used in the Hittite texts; Ps 1:6 in the apparatus).
- M1 Elkunirša: the note with Gen 14:19, 22 [cognate] is at EL 1.1:9; `קונה` never in a line; at 1.3:11 and 2.3:26 the text
  writes {D}Kunirša (without El): one Hebrew `אֶלְקוּנִירְשָׁא`, said in the notes.
- *MUTI* "husband" (EL 1.1:9, 1.2:14) = `איש` (`בעל` reserved, as §H3 says).
- **The brief's claims that the tablets do not bear out:** ZA 2.15 – the youngest's "[not] permitted": the negation is not on
  the tablet (only *āra* "permitted" after a break), so the Hebrew has `[…] מוּתָּר`; AP – "the cow that gives birth to a human
  child" is not in our fragments (1:150 has only "[…] let it give birth"); "go home … a son will be born" is "the gods will give
  you one son" (1:59); the Sun-god does not judge the brothers to the end – cursed by Wrong, he sends the case to Ištar
  (1:157–161); EL – Ištar overhears first as a *cup* in Elkunirša's hand, then as a *ḫapupi*-bird (owl?) on his wall
  (1.2:11–13); the "15" of EL 1.1:41 and the numbers in 1.1:1, 1.1:7, 1.1:55 are HPM footnote numbers in the composite, not
  numerals (my draft read "fifteen wailing women": corrected).

**3. New renderings (Hittite → Hebrew, first line).**
ZA: *walku-* `*ההמון*` (1.2); *tuppa-* `ארגז`; *šakan* `שומן`; *zikk-* (iter. of *dai-*) `הייתה שמה` (1.3); OH *šu* / *ta* / *ša*
"and" `ו־` (1.3, 1.5, 3.2: *šu=wa* is the connective, not "fill"); *nanniya-* `הוביל` (2.3; kept apart from *unna-* `נָהַג` and
*penna-* `הִסִּיעַ`); *tunnakkeššar* `חדר פנימי`, *inu-* `חימם`, *ark-* (mount) `*עולה*` (2.4); *ašma* `הֵן` (2.7, AP 1:65; KU 46
has `ראשונה`: a split by context); *mer-* `נעלם` (2.8, as HE); *kard-* + *peran* `אל לבם` (2.8–2.9); UMMA-NI `אמנו` [cognate
through the Akkadogram]; *karatt-* `*מראה*` (2.11); *neka-* `אחות`; *ḫantezzi-* / *appezzi-* `ראשון` / `אחרון` (IL); *āra*
`מותר` (Laws); IKKIR (*nakāru*) `התנכר` [cognate] (2.17); *aššu-* `טוב` (3.2; AP 1:49 noun `טוּב`); *ḫenkan* "doom" `המוות`
(3.2: **a split from the rituals' ÚŠ / *ḫenkan* `מגפה`** – there the god's plague, here a man's fate; for the lead);
*išparzašš-* `נמלט`; *ḫulla-* `הביס` (4.2; AP 1:68 *ḫullant-* `הובסו`; SR `להביס`); IṢBAT `תפס`; *ḫuišwant-* `חי`; *uwate-* `הביא`;
*wete-* `בנה`; *kattan eš-* `ישב לידה` (siege, 5.2); *katta wek-* `ביקש מטה`; *tamašš-* `לחץ`; *aruwai-* `קד` (SR); LUGAL ŠU.GI
`המלך הזקן`; *dala-* `הניח`; *kiš-* `נעשה`; *ḫarnink-* `השמיד`; TIL.LA `נשלם`.
AP: *šarlai-* `רומם` (1:2, 1:156; SR); *lilakk-* `כרת`; *šakšakila-* `*אבנים*`; *tarna-* "skull" **`קודקוד`** (1:4, following
translator 2's proposal to move KU's `גולגולת` off GULGULLATU's word); *ḫappinant-* `עשיר` (KU); *panku-* `הכל`, *ḫuigatar*
`*ערמה*`, *ḫaḫḫariya-* `גרף`; *wakkar-* `חסר`; {LÚ.MEŠ}AMA.TU `ילידי הבית` [equivalent, Gen 14:14, 17:12]; *katta epp-* `*תפס
מטה*` (1:26–33: HPM "had intercourse"; kept literal, marked); *šarkuwant-* `נעול`; *waššant-* `לבוש` (IN); *kariya-* (a table)
`עטוי` (HE has `הסתיר`: a split by context); ZAG.GAR.RA (*ištanana-*) `כַּן` (`מזבח` reserved); *park(u)iya-* (from sleep)
`*התנער*` (1:30: my draft's `*נטהר*` would have put purity language into the line; HPM "schreckte … hoch"); MUNUS-*nili*
`כדרך הנשים`; *ḫarki-* `לָבָן`; GURUŠ `בחור`; *waštul* `חטא`; *nink-* `השתכר` (1:56, IN; HPM "quench thirst"); *šašt(a)-* `משכב`
(1:58–59; EL 1.2:16); *utneyant-* `יושבי הארץ` (1:65); *nikku* `שמא`; *kuwapikki* `באיזה מקום`; *dannatteš-* `התרוקן`;
*watarnaḫḫ-* `ציווה` (IL); *šumrai-* `היה מעוברת` (1:89, 1:101: apart from *armai-* `הָרָה`); ITU-count as KU 268–270; ÙMMEDA
(fem.) `אוֹמֶנֶת`; *ḫalai-* `*נדנד*`, *dušk-* `שמח`, *kunk-* `נענע` (copied from UL 1:100–102); *lāman* `שם`; *šanezzi-* `נעים`;
*ḫalzai-* `קרא`; *mayanteš-* `בגר`; LÚ-*ni meḫuni* `לעת האיש`; *šarra-* (an inheritance) **`חלק`** (with the Laws, not the songs'
`חצה`); *arḫayan* `לחוד`; *takšan šarra-* `לשניים – חלק`; GU₄.APIN.LÁ `שור חרישה`, GU₄.ÁB `פרה`; SIG₅ `טוב`; DI-*eššar* `דין`,
*ḫanna-* `דן` (`אָדוּן` vocalized); *paiddu* `מעתה` (1:109, 1:112, 1:149) but as an auxiliary `תלך` (1:161, with HPM); *ḫarš-*
`חרש` (2:6); ḪAŠḪUR `תפוח` (HE); *idālu-* `רע`.
EL: *eš-* "be" `היה` (1.1:1–2, 21–22, HPM); *namma* "then" `אז` (1.1:2, 22; IN `ועוד`); BAL.TUR `פלך`; *ḫattarai-* `דקר`;
*ninink-* `הניע` (1.1:5, HE); *ḫaršumna-* `מקור` (KU); ZA.LAM.GAR `אוהל` (M2); *UL memmaḫḫun* `"לא" אמרתי` (1.1:18, HPM);
*ḫalanzai-* `*רגז*` (1.1:19, HPM "?"); *markiya-* `*מאס*`; *wai-* `יילל` (1.1:30, 1.1:42, IL; TLHdig's *uiya-* at 1.1:30 corrected
with HPM); *luriyaḫḫ-* `השפיל`, *luriyatar* `השפלה` (IN); ḪUL-*wešš-* `נעשה רע` (KU); *taptara-* `מקוננת`; *tittanu-* `העמיד`;
*peḫute-* `הוליך` (IL); *tešḫa-* / Ù `חלום` (1.2:30, 2.2:27, 2.2:32: HE has *tešḫa-* `שינה` – a split by sense), *tešḫalli-*
`*מנומנם*`; *tetana-* `שיער` (UL); *uwatar* `ראייה` (AM), *ištamaššuwar* `שמיעה`; GAL `גביע` (KU); *ḫapupi-* `*ינשוף*`; *kutt-*
`קיר` (SR); *ḫuripta-* `ערבה` (`מדבר` reserved); *piddai-* (a bird) `עף` (UL `רץ`, KU `נס`: by context); ÚR `*ירך*`; SA.DU / SA
`גידים` / `עורקים`; *šaknuwant-* `*מטונף*`; *idalawešš-* `ירע`; AMAR `עגל`; *ḫukmatalla-* `לוחש`, *ḫukk-* `לחש`, MU₇ `לחש`;
GÚ.SES `כרשינה`; NAKTAMMU `מכסה`; SI×SÁ `נקבע (בשאלת אות)` (`גורל` reserved); EN SISKUR `אדון הטקס` (`בעל` reserved); *niwalla-*,
*parkuwalla-* transliterated (Luwian; HPM "innocent, pure"); MUL `כוכב` (SR); *arra-* `שטף` (R1); *iški-* `מרח` (UL); *kant-*
`חיטה`; *alwanza(ḫḫ)-* `מכושף`, UḪ₇ (*alwanzatar*) `כשפים`; ARNA `*עוולה*` (`עון`, `אשמה`, `חטא` all taken); *lak-* `הטה` (part.
`מוטה`); ŠUKUR `כידון`; *takkišš-* "join" `צירף` (SR *takkišk-* `זמם`: a split by sense); *ḫamank-* `קשר`; *tarna-* "leave"
`השאיר` (2.2:22; `שִׁלַּח` kept for "release", 2.2:9); *weriya-* `הזעיק`; *parā epp-* `הושיט` (UL); ANŠE.KUR.RA.MEŠ "chariotry"
`לוחמי המרכבה` (with HPM); SUḪUR.LA₅ `משרתות` (UL); A.BÁR `עופרת`; MUNUS.ŠU.GI `הזקנה`.

**4. Formulas and repeated passages (copy byte for byte).** F10 `כֹּה (אָמְרָה) הִיא:` (ZA 1.1), `כֹּה (אָמְרוּ) X:` (ZA 2.5–2.7,
EL 1.2:42), `כֹּה (אָמַר) אֵל הַסְּעָרָה:` (EL 1.1:14); F30 `X החל לומר (אל Y):` (AP 1:35, 1:64, 1:121, 1:124, 1:126, 2:3, 2:7; EL
1.1:57, 1.2:20 fem., 1.2:31, 1.2:45), F31 `X החל להשיב (אל Y):` (AP 1:48, 1:54, 1:77; EL 1.1:32); F33 `אִשְׁתַּר שמעה את הדברים
האלה.` (EL 1.2:10); F37 `האדמה האפלה` (EL 1.2:37, 2.2:27); F21 `הִנֵּה` (EL 2.1:31). AP's birth scene twice (1:89–100 / 1:101–112)
in the same words, and as UL 1:99–103 (`על ברכי … *נדנדה*`, `החל לשמוח בבן`, `והחל לנענע אותו`, `שם נעים`); `אֵל הַשֶּׁמֶשׁ מן
השמים מטה צפה` (1:41 = 1:140 = 1:148); the gods' cities (1:131–136, `X (ב)Y יושב`); EL 1.1:1–4 = 1.1:21–24 (Ašertu's threat),
1.1:17 = 1.1:31 (`שכב עמי!`); EL 2's star refrain (`כוכב X בא, ובמים האלה ישטוף את עצמו, בשמן ימרח, לחם יאכל, יין ישתה!`,
2.1:17–26; pl. 2.2–2.5). **"Identical source, different Hebrew", justified in the entries:** AP 1:26/1:32 and 1:27/1:33 (*ēpta*
3sg to the servants, 2sg to Appu, with HPM); AP 1:35 / EL 1.2:20 (Ištar: fem.).

**5. Gates I think are wrong (escaped with reasons; none bent the Hebrew).**
- Law §H4 `שכב`: the licence misses the long-vowel spelling *šēš-* (EL 1.2:17 *šēš[er]*): add `šēš`.
- Law §H4 `טהר`: misses the HPM syllabic spelling *par-ku-wa-* (EL 2.5:16): add `par-ku` (HPM lines are not folded).
- Law §H4 `כשפים`: misses UḪ₇ (= *alwanzatar*, EL 2.2:16, 2.5:17): add `uḫ7`.
- Law §H4 `הקריב`: misses BAL (= *šipant-*, EL 1.3:11, 2.3:30, 2.3:33) – as translators 1–2 proposed: add `\bbal\b`.
- Law §H4 `חטא`: misses the spelling *wašdul-* (EL 1.2:59, restored): add `wašd`.
- Law §H2 `\{d\}utu(?!-ši)` vs *taknaš* {D}UTU (EL 1.3:15, 2.3:22; `[היתר שם]`) – as translator 3 proposed.
- Law §H5 **F8** (*pāi* `ייתן`) fires on the narrative present (AP 1:17–19 `נותן`; three `[סטייה מן הנוסחה]`): restrict F8 to
  the law keys (as translators 1–2).
- Myth §H3 `שאול`: `לשאול` "to ask" is blocked (AP 1:25, 1:31, 1:44, 1:74, *punušk-*): written `לִשְׁאֹל` (defective,
  vocalized) – harmless, but the brief could say so.

**6. Cruxes (open).** ZA 1.2 *walkuan*; 2.4 (*ark-*: mount or climb; the riddle exchange 2.4–2.8); 2.11 *karatt-*; **2.15 the
missing word before *āra*** (the reader must not read "[not] permitted" as the tablet's) and *š[e-* (our `ש[כבו?]`); 3.2–3.3
(*šu=wa*, the dangling `לא`); 5.5–5.6 (who goes up; *LUGAL-uš=miš* "my king" read *=šmiš*?). AP 1:4 *tarna-*, *šakšakila-*; 1:26–33
*katta epp-*; 1:30 *park(u)iya-*; 1:58–59 *šaštan* / *šašdan=ta*; 1:98 / 1:110 (the gods of my father; the lost verb); 1:141–142
*takšan šarran* (restored); 1:165 IKU. EL 1.1:1–5 / 21–24 (the meaning of "be behind me"); 1.1:19 *ḫalanzai-*; 1.1:33
*:šaššūmāi*; 1.2:12 *ḫapupi-*; 1.2:27 ÚR; 1.2:39 (who seizes the Storm-god "like a snake"); 1.3:16 *niwalla* / *parkuwalla*; 2.1:33
ARNA; the place of fragments 1.3 and 2.1–2.5 (HPM's order).

**7. Parallels for the index.**
ZA: Exod 1:7 (1.1, [divergence]); Exod 2:3 (1.2 *šakan* vs `חֵמָר`/`זֶפֶת` [divergence]; 1.3 *dai-* `שׂם`, the river [divergence]);
Exod 1:22 (1.3); the Sargon legend I.6, I.8–10 (1.3–1.5: the reed basket, "the river carried me", raised); Exod 2:10 (1.5); Gen
27:41 (2.8, speaking in the heart); Gen 42:8 (2.11, recognition); Lev 18:9 [absent], Gen 20:12 [divergence] (2.12); Gen 19:31, 33
(2.13, 2.15); Lev 20:17, Gen 3:3 (2.14); Ezek 4:2 (5.1, siege works).
AP: Ps 1:6 (1:2, 1:99); Job 1:1, 1:3 (1:9), 1:4 (1:17); Deut 2:7 (1:13); Gen 11:30, 1 Sam 1:2, Gen 15:2 (1:15); Gen 14:14, 17:12,
15:3 (1:25, AMA.TU); Exod 12:11 (1:24, shoes); Gen 18:12 (1:36); Ps 14:2 (1:41); Gen 18:2 (1:42); Gen 4:6 (1:45); Gen 45:18 (1:49);
Gen 9:21 (1:56, [divergence]); Gen 18:10, 18:14, 2 Kgs 4:16 (1:58–59); Gen 17:22 (1:62); Ps 80:2 (1:65); Gen 18:5 (1:70); Gen 25:21
(1:89), 25:24 (1:91), 50:23, 30:3 (1:94), 25:25 (1:97), 25:26–27 (1:108), 25:27 (1:116), 29:33 (1:101), 30:6 (1:109, 1:155); Hos
14:10 (1:98: NÍG.SI.SÁ ~ `ישר`); Gen 13:8, 13:9, 13:11 (1:122–123, 1:146); Gen 15:14 (1:160).
EL: Gen 14:19, 14:22 [cognate through the name] (1.1:9); 1 Kgs 18:19 (1.1:6, 1.1:9: Baal, Asherah – notes); Gen 2:14 (1.1:8: Māla =
Euphrates); Gen 18:1 (1.1:10: the tent); **Gen 39:7, 39:12** (1.1:17, the same words `שכב עמי`), 39:8 (1.1:18), 39:10 (1.1:30),
39:14 [divergence] (1.1:24), 39:17 (1.2:4), 39:19 [divergence] (1.1:34), 39:20 [divergence] (1.2:9); Gen 4:24 (1.1:38: 77);
Jer 31:14, Gen 37:34, 50:10 (1.1:42: the mother's seven-year lament); Ps 115:5 (1.1:82); Num 16:33 (1.2:37: alive into the dark
earth); Gen 27:29 (2.1:39); Deut 8:15 (2.4:5).

## Progress
- 2026-10-31: review pass (a) fidelity – 49 lines changed (ZA 2: 1.2, 2.2; AP 14: 1:2, 1:3, 1:12, 1:17, 1:18, 1:19, 1:101, 1:105, 1:106, 1:107, 1:121, 1:122, 1:145, 2:3; EL 33: 1.1:2, 1.1:3, 1.1:4, 1.1:10, 1.1:23, 1.1:24, 1.1:32, 1.1:36, 1.1:38, 1.1:75, 1.2:7, 1.2:8, 1.2:20, 1.2:26, 1.2:31, 1.2:37, 1.2:45, 1.2:55, 1.3:9, 2.1:18, 2.1:23, 2.1:24, 2.1:39, 2.2:3, 2.2:6, 2.2:8, 2.2:12, 2.2:14, 2.2:20, 2.2:31, 2.3:1, 2.5:12, 2.5:14). Mostly brackets (restored word unbracketed, preserved word bracketed, bracket on the wrong half of a phrase); also EL 1.2:7 an unmarked restoration of ours (`[אתן?]`) removed, 1.2:8 `[רוצה]` → `(רוצה)`, 2.1:39 a doubled `כך` for one QATAMMA, 2.2:31 *tuk* `אתה` → `אותך`. Open: EL 1.3:11 {D}Kunirša written `אֶלְקוּנִירְשָׁא` (H2 rule; the note says so).
- 2026-10-31: review pass (b) consistency – 2 lines changed (EL 1.1:7 *šarā tiya-* `[ו]התרומם`, as UL 3.1:153 (was `[וקם] (ו)צעד`); EL 2.4:4 *karaš* `כוסמת` (= ZÍZ; `תבואה` is *ḫalki-*'s)). ZA and AP unchanged; their splits (*šarra-* `חלק`, *ašma* `הֵן`, *ḫenkan* `המוות`, *kariya-* `עטוי`, *tarna-* `השאיר`, *namma* `אז`) are recorded in renderings M3.
- 2026-10-31: translator 4: ZA (36), AP (204), EL (301) drafted, HPM read after drafting (AP, EL); no review passes by a second reader yet.
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
- 2026-10-31: review pass (c) Hebrew – 13 lines changed (ZA 2.1, 2.3, 2.11 and AP 1:155, 1:164: no `ו` on the main clause after `כאשר`; AP 1:24 `נעול (בנעליו)` (not "locked"); AP 1:63 `פרסאות` (not `פרסות` "hooves"); AP 1:98 `[…]`; AP 1:125 closing quote; EL 1.1:4 a stray closing quote (the speech ends at 1.1:5); EL 1.1:18 `'לא'` inside the speech; EL 1.2:44 closing quote; EL 2.3:27 `רָעִים`), and 7 `## ` headings (AP §24″ `שולח` → `מפנה אותם`; AP §19′ `נתחלק` as the line; AP §13 `(שבור)`; `הָאֵל(ים)` vocalized); intros written (`translation--intro-ZA/AP/EL.rtl.md`, `translation--intro.rtl.md`), checked against the H3/H4 gates (no hit) and `check_bible_quotes.py` (0).

## Part ZA: parallels index (Zalpa, CTH 3.1)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-ZA.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1.1 | `[MUNUS.LUGA]L ⸢{URU}ka⸣-ni-iš 30 DUMU{MEŠ} 1-EN MU-⸢an⸣-ti ḫa-a-aš-ta UM-⸢MA ŠI-MA⸣` | [מלכ]ת קָנֵשׁ שלושים בנים בשנה אחת ילדה. כֹּה (אָמְרָה) הִיא: | שמות א:ז | [divergence] | `וּבְנֵי יִשְׂרָאֵל פָּרוּ וַיִּשְׁרְצוּ וַיִּרְבּוּ` (שמות א:ז) – שם הפריון המופלג הוא ברכה, ופרעה הוא שגוזר על הבנים; כאן האם עצמה נבהלת ממנו (1.2) ומשלחת את בניה אל הנהר (1.3). |
| 1.2 | `[ki]-⸢i-wa⸣ ku-it wa-al-ku-an ⸢ḫa⸣-a-aš-⸢ḫu⸣-un ⸢tup⸣-pu-uš ⸢ša-kán-da⸣ šu-un-na-aš` | "[ז]ה – מה *ההמון* אשר ילדתי!" ארגזים בשומן מילאה, | שמות ב:ג | [divergence] | `וַתַּחְמְרָה בַחֵמָר וּבַזָּפֶת` (שמות ב:ג) – אם משה טחה את התבה מבחוץ בחמר ובזפת, כדי שלא יחדרו המים; כאן הארגזים *מלאים* שומן (*šakan*, Ì: השמן או השומן). אולי לאיטום, אולי למזון לדרך – הטקסט אינו אומר. *tuppa-* `ארגז` (M2) ולא `תבה` (מלה מצרית, שמורה); *ša … |
| 1.3 | `nu DUMU{MEŠ}-ŠU an-da-an zi-⸢ke⸣-e-et [š]u-uš ÍD-a tar-na-aš ÍD-ša` | ואת בניה בתוכם הייתה שמה, ואותם אל הנהר שִׁלְּחָה. והנהר | שמות ב:ג; שמות א:כב | [divergence] | `וַתָּשֶׂם בָּהּ אֶת הַיֶּלֶד וַתָּשֶׂם בַּסּוּף עַל שְׂפַת הַיְאֹר` (שמות ב:ג) – אותו פועל "שׂם" (*dai-*), אבל אם משה מניחה את התבה בסוף שעל שפת היאור, ואילו מלכת קנש משלחת את הארגזים בזרם (*tarna-* `שִׁלַּח`, M2). השוו גם `כָּל הַבֵּן הַיִּלּוֹד הַיְאֹרָה תַ … |
| 1.4 | `A+NA A.AB.BA KUR {URU}za-al-pu-⸢wa⸣ pé-e-da-a[š DING]IR{DIDLI}-ša DUMU{MEŠ}-uš A.AB.BA-az` | אֶל הַיָּם, (אֶל) ארץ זַלְפָּה, נשא. [והאֵ]לִים את הבנים מן הים | – | [equivalent] | `נשאני הנהר; אל אַקִּי דולה־המים הובילני.` (אגדת סרגון I.8) – אותו פועל לנהר הנושא את הילד (*peda-* `נשא`, שם *našû*); כאן הנהר נושא שלושים, ולא אל אדם אלא אל הים. |
| 1.5 | `ša-ra-a da-a-er šu-uš ⸢ša⸣-al-la-nu-uš-ker` | למעלה לקחו, ואותם הָיוּ מְגַדְּלִים. | – | [equivalent] | `אַקִּי דולה־המים – ב…[…]…[…] – אכן העלני.` ו`אַקִּי דולה־המים – לְבֵן לו […] – גידלני.` (אגדת סרגון I.9–10) – ההעלאה מן המים והגידול; כאן האלים הם המעלים והמגדלים. |
| 1.5 | `ša-ra-a da-a-er šu-uš ⸢ša⸣-al-la-nu-uš-ker` | למעלה לקחו, ואותם הָיוּ מְגַדְּלִים. | שמות ב:י | [divergence] | `וַיִּגְדַּל הַיֶּלֶד וַתְּבִאֵהוּ לְבַת פַּרְעֹה` (שמות ב:י) – שם בת פרעה מושה את הילד מן המים, ובכאן – האלים. |
| 2.8 | `30 MUNUS.DUMU 1-⸢ŠU⸣ ḫa-a-aš-⸢ta⸣ Ù DUMU.NITA{MEŠ} me-re-er nu-uz-za DUMU.⸢NITA⸣{MEŠ} kar-ti-⸢iš-mi⸣` | שלושים בנות בבת אחת ילדה, והבנים נעלמו!" והבנים אל לבם | בראשית כז:מא | [equivalent] | `וַיֹּאמֶר עֵשָׂו בְּלִבּוֹ` (בראשית כז:מא) – דיבור אל הלב, מחשבה שאינה נאמרת בקול. |
| 2.11 | `⸢nu-uš⸣-ma-aš DINGIR{DIDLI}-eš ⸢ta⸣-ma-i-in ka-ra-a-⸢ta⸣-an ⸢da-i-er⸣ nu ⸢AMA⸣-ŠU-NU` | הָאֵלִים שׂמו להם *מראה* אחר, ואמם | בראשית מב:ח | [divergence] | `וַיַּכֵּר יוֹסֵף אֶת אֶחָיו` (בראשית מב:ח) – ההכרה החסרה היא מנוע הסיפור כאן ושם; כאן האם היא שאינה מכירה, ובשל האלים. |
| 2.12 | `[a-pu-u-u]š? na-at-⸢ta⸣ ga-né-eš-zi nu-uz-za DUMU.MUNUS⸢{MEŠ}-ŠA⸣ A+NA DUMU.⸢NITA⸣{MEŠ}-ŠA pa-iš` | [אותם?] אינה מכירה, ואת בנותיה לבניה נתנה. | ויקרא יח:ט | [absent] | `עֶרְוַת אֲחוֹתְךָ בַת אָבִיךָ אוֹ בַת אִמֶּךָ` (ויקרא יח:ט) – האיסור שבתורה הוא בדיוק המקרה הזה (אחים ואחיות מאם אחת); הסיפור החתי אינו מנסח איסור, אבל המשכו (2.14–2.15) מניח אותו. |
| 2.12 | `[a-pu-u-u]š? na-at-⸢ta⸣ ga-né-eš-zi nu-uz-za DUMU.MUNUS⸢{MEŠ}-ŠA⸣ A+NA DUMU.⸢NITA⸣{MEŠ}-ŠA pa-iš` | [אותם?] אינה מכירה, ואת בנותיה לבניה נתנה. | בראשית כ:יב | [divergence] | `אֲחֹתִי בַת אָבִי הִוא אַךְ לֹא בַת אִמִּי` (בראשית כ:יב) – אברהם מבחין בין אחות מאב לאחות מאם; כאן הקרבה היא דווקא מן האם. |
| 2.13 | `[ḫa-an-te-e]z-zi-aš DUMU{MEŠ} ni-ku-uš-mu-uš na-at-⸢ta ga⸣-né-eš-šer ap-pé-ez-zi-ia-ša-aš-ša-an` | הבנים ה[ראשונ]ים את אחיותיהם לא הכירו; והאחרון – | בראשית יט:לא; בראשית יט:לג | [divergence] | `וַתֹּאמֶר הַבְּכִירָה אֶל הַצְּעִירָה` (בראשית יט:לא) – גם בבנות לוט הבכירה והצעירה, ושם שתיהן יודעות ואביהן `וְלֹא יָדַע` (בראשית יט:לג); כאן הגדולים אינם יודעים, והצעיר יודע ומוחה. |
| 2.14 | `[ ]x-uš-za né-e-ku-šum-mu-uš da-aš-⸢ke⸣-e-u-⸢e-ni⸣ [n]u ⸢le⸣-e ša-⸢li⸣-ik-tu-ma-ri` | […] …: "את אחיותינו לעצמנו אנו לוקחים? ואל תיגעו! | ויקרא כ:יז; בראשית ג:ג | [equivalent] | `וְאִישׁ אֲשֶׁר יִקַּח אֶת אֲחֹתוֹ בַּת אָבִיו אוֹ בַת אִמּוֹ` (ויקרא כ:יז) – אותו "לקח" של נישואין (*dā-* `לקח`) ואותו מקרה; בתורה – איסור וכרת, כאן – מחאת האח הצעיר. `וְלֹא תִגְּעוּ בּוֹ` (בראשית ג:ג) – אותו ציווי שלילי של "נגיעה", לשון נקייה, אך שם האוסר הו … |
| 2.15 | `[ ] ⸢a-a⸣-ra nu ⸢kat-ti-iš-mi⸣ š[e-` | […] מוּתָּר." ועמן ש[כבו?] | בראשית יט:לג | [equivalent] | `וַתָּבֹא הַבְּכִירָה וַתִּשְׁכַּב אֶת אָבִיהָ` (בראשית יט:לג) – אם ההשלמה נכונה, הסיפור מסתיים כמו סיפור בנות לוט: המעשה נעשה. בחוקים החתיים *natta āra* `לא מותר` הוא לשון האיסור (HL2), ו*šeš-* `שכב` – פועל האיחוד המיני. |
| 5.1 | `I-NA MU 3{KAM} LUGAL-uš pa-it {URU}za-al-pa-an a-⸢ra⸣-aḫ-za-an-da ú-⸢e⸣-te-et` | בשנה השלישית הלך המלך, ומסביב לזַלְפָּה בנה. | יחזקאל ד:ב | [equivalent] | `וּבָנִיתָ עָלֶיהָ דָּיֵק` (יחזקאל ד:ב) – אותה לשון בנייה למצור. |


## Part AP: parallels index (Appu, CTH 360)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-AP.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1:2 | `[ ... ḫ]an[dand]uš LÚ{MEŠ}-uš kwiš šar[l]iškezzi` | […] את האנשים ה[הגונ]ים – אשר מרומם – | תהלים א:ו | [equivalent] | `כִּי יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים וְדֶרֶךְ רְשָׁעִים תֹּאבֵד` (תהלים א:ו) – אותו זוג, ההגונים והרשעים, ואותו אל שופט; ובהמשך הסיפור (1:98–110) גם "הדרך" הישרה והרעה. |
| 1:9 | `{m}appu ŠUM-an=šet` | אַפּוּ שמו. | איוב א:א; איוב א:ג | [equivalent] | `אִישׁ הָיָה בְאֶרֶץ עוּץ אִיּוֹב שְׁמוֹ` (איוב א:א) – אותה פתיחה של סיפור עם: ארץ, איש, שמו (וכאן גם עירו); והאיש העשיר שלהלן (1:10–12) – `וַיְהִי מִקְנֵהוּ שִׁבְעַת אַלְפֵי צֹאן` (איוב א:ג). |
| 1:13 | `nu=šši=pa UL kwitki wakkari` | ודבר אינו חסר לו; | דברים ב:ז | [equivalent] | `לֹא חָסַרְתָּ דָּבָר` (דברים ב:ז) – אותו צירוף; כאן הוא מכין את ההיפך שבשורה הבאה. |
| 1:15 | `[D]UMU.NITA=ši DUMU.MUNUS-iš NU.GÁL` | בן לו, בת – אין. | בראשית יא:ל; שמואל א א:ב | [equivalent] | `וַתְּהִי שָׂרַי עֲקָרָה אֵין לָהּ וָלָד` (בראשית יא:ל); `וּלְחַנָּה אֵין יְלָדִים` (שמואל א א:ב) – אותו "אין" בסוף; אבל כאן החסר הוא של האיש, ואין מדובר בעקרות האשה. |
| 1:15 | `[D]UMU.NITA=ši DUMU.MUNUS-iš NU.GÁL` | בן לו, בת – אין. | בראשית טו:ב | [equivalent] | `מַה תִּתֶּן לִי וְאָנֹכִי הוֹלֵךְ עֲרִירִי` (בראשית טו:ב) – העשיר שכל עושרו אין לו טעם בלי יורש. |
| 1:17 | `[n]u=za kwišša DUMU.NITA-li N[INDA]-an {UZU}Ì=ya pāi` | וכל אחד לבנו [לחם] וגם שומן נותן, | איוב א:ד | [equivalent] | `וְהָלְכוּ בָנָיו וְעָשׂוּ מִשְׁתֶּה … לֶאֱכֹל וְלִשְׁתּוֹת עִמָּהֶם` (איוב א:ד) – סעודה שבה האבות והבנים יחד; כאן היא מבליטה את מי שאין לו למי לתת. |
| 1:24 | `p[ait]=a=ššan [GIŠ].NÁ-aš šarkuwanza šešket` | ה[לך], ועל המיטה – נעול (בנעליו) – היה שוכב. | שמות יב:יא | [divergence] | `נַעֲלֵיכֶם בְּרַגְלֵיכֶם` (שמות יב:יא) – הנעליים ברגליים הן שם סימן של יציאה לדרך; כאן הן סימן של איש שאינו פושט את בגדיו לשכב עם אשתו. |
| 1:25 | `[DAM] {m}appu {LÚ.MEŠ}AMA.TU-an punuškiwan ⸢dāiš⸣` | [אשת] אַפּוּ את ילידי הבית החלה לִשְׁאֹל: | בראשית יד:יד; בראשית יז:יב | [equivalent] | `יְלִידֵי בֵיתוֹ` (בראשית יד:יד); `יְלִיד בָּיִת` (בראשית יז:יב) – העבד שנולד בבית, הקרוב ביותר לבני המשפחה; ובבראשית טו:ג `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` – הוא היורש של מי שאין לו בן. |
| 1:36 | `[MUNUS-a]nza=wa=za MUNUS-niliyaz zik` | "[אש]ה – כדרך הנשים – את, | בראשית יח:יב | [equivalent] | `וַתִּצְחַק שָׂרָה בְּקִרְבָּהּ` (בראשית יח:יב) – לא אותו טון, אבל אותו פער: האשה אינה יודעת מה עומד לקרות. כאן הבעל מבטל את שאלתה. |
| 1:41 | `{d}UTU-uš=kan nepišaza katta šakuwayat` | אֵל הַשֶּׁמֶשׁ מן השמים מטה צפה, | תהלים יד:ב | [equivalent] | `יְהוָה מִשָּׁמַיִם הִשְׁקִיף עַל בְּנֵי אָדָם` (תהלים יד:ב) – האל הצופה מן השמים על בני האדם. |
| 1:42 | `[n]=aš=za {LÚ}GURUŠ-anza kiša[t]` | [ו]נעשה לבחור, | בראשית יח:ב | [equivalent] | `וְהִנֵּה שְׁלֹשָׁה אֲנָשִׁים נִצָּבִים עָלָיו` (בראשית יח:ב) – האל הבא אל האיש בדמות אדם, לבשר לו על בן. כאן האל משנה את צורתו לעיני הקורא. |
| 1:45 | `[k]wit=wa waštul=tit` | "[מ]ה חטאך? | בראשית ד:ו | [equivalent] | `לָמָּה חָרָה לָךְ וְלָמָּה נָפְלוּ פָנֶיךָ` (בראשית ד:ו) – האל השואל את האדם מה מעיק עליו. כאן השאלה היא "מה חטאך" – האל מניח שצרת האדם באה מחטא, והאדם (1:49–52) עונה שאין זה חטא אלא חסר. |
| 1:49 | `[nu=w]a=mu āššu piyēr` | "[ו]לי טוּב נתנו, | בראשית מה:יח | [equivalent] | `אֶת טוּב אֶרֶץ מִצְרַיִם` (בראשית מה:יח) – "טוּב" כרכוש. *aššu-* `טוב` (PU, AM); כאן שם עצם, מנוקד. |
| 1:56 | `nu=za nink(a)` | והשתכר, | בראשית ט:כא | [divergence] | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר` (בראשית ט:כא) – השתייה והשכרות; שם היא תחילת קלון, כאן – עצת האל לפני המשכב. |
| 1:58 | `nu=za ITTI DAM-KA āššu šaštan šeški` | ועם אשתך – משכב טוב – שכב! | בראשית יח:י; מלכים ב ד:טז | [equivalent] | `שׁוֹב אָשׁוּב אֵלֶיךָ כָּעֵת חַיָּה וְהִנֵּה בֵן לְשָׂרָה אִשְׁתֶּךָ` (בראשית יח:י); `לַמּוֹעֵד הַזֶּה כָּעֵת חַיָּה` (מלכים ב ד:טז) – הבשורה על הבן מפי האל או איש האלהים. |
| 1:58 | `nu=za ITTI DAM-KA āššu šaštan šeški` | ועם אשתך – משכב טוב – שכב! | – | [divergence] | בבראשית האל אינו מורה לאברהם מה לעשות; כאן הוא מורה בפשטות: לך הביתה ושכב עם אשתך. ההומור של הסיפור: כל מה שחסר לאַפּוּ – הוא שישכב עם אשתו בלי נעליו. |
| 1:59 | `[š]ašdan=ta DINGIR{MEŠ}-aš pianzi 1-an DUMU.NITA-an` | (ב)משכב – לך ייתנו הָאֵלִים בן אחד." | בראשית יח:יד | [equivalent] | `לַמּוֹעֵד אָשׁוּב אֵלֶיךָ כָּעֵת חַיָּה וּלְשָׂרָה בֵן` (בראשית יח:יד) – הבטחת בן אחד; כאן "בן אחד" – והאלים ייתנו שניים. |
| 1:62 | `{d}UTU-uš=ma=ššan šarā nepiši iyanniš` | ואילו אֵל הַשֶּׁמֶשׁ מעלה, אל השמים, יצא לדרך. | בראשית יז:כב | [equivalent] | `וַיַּעַל אֱלֹהִים מֵעַל אַבְרָהָם` (בראשית יז:כב) – האל עולה מעל האיש אחרי הבשורה על הבן. |
| 1:65 | `āšma=war=a[š] wezzi {d}[UT]U-uš KUR-eantaš {LÚ}SIPA.UDU-aš` | "הֵן הוא בא – אֵל הַשֶּׁמֶשׁ, רועה הצאן של יושבי הארץ! | תהלים פ:ב | [equivalent] | `רֹעֵה יִשְׂרָאֵל הַאֲזִינָה` (תהלים פ:ב) – האל כרועה; כאן רועה כל הארצות. |
| 1:70 | `nu=šši adan[na ak]uwanna pišket[en]` | ולו לאכול [ולש]תות תנו!" | בראשית יח:ה | [equivalent] | `וְאֶקְחָה פַת לֶחֶם וְסַעֲדוּ לִבְּכֶם` (בראשית יח:ה) – קבלת הפנים של האורח האלוהי; וכבשירי חורי (F38), הכסא והשולחן לאל הבא. |
| 1:89 | `[D]AM {m}appu šumreškiwan dāiš` | אשת אַפּוּ החלה להיות מעוברת. | בראשית כה:כא | [equivalent] | `וַיֵּעָתֶר לוֹ יְהוָה וַתַּהַר רִבְקָה אִשְׁתּוֹ` (בראשית כה:כא) – ההריון כתשובת האל לאיש שאין לו בן. |
| 1:91 | `nu ITU 10{KAM} tiyat` | והחודש העשירי צעד, | בראשית כה:כד | [equivalent] | `וַיִּמְלְאוּ יָמֶיהָ לָלֶדֶת` (בראשית כה:כד) – תום ימי ההריון. |
| 1:94 | `n=an=šan {m}appu ginu[w]aš ḫalaiš` | ואותו על ברכי אַפּוּ *נדנדה*. | בראשית נ:כג; בראשית ל:ג | [equivalent] | `גַּם בְּנֵי מָכִיר בֶּן מְנַשֶּׁה יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (בראשית נ:כג); `וְתֵלֵד עַל בִּרְכַּי` (בראשית ל:ג) – הנחת הילד על ברכי האב: קבלתו כבן. כבשירת אוּלִּיקוּמִּי (UL 1:100, אותו פועל). |
| 1:97 | `nu=šši=ššan šanezzi laman {LÚ}ḪUL-lu dāiš` | ושׂם לו שם נעים: רַע. | בראשית כה:כה | [divergence] | `וַיִּקְרְאוּ שְׁמוֹ עֵשָׂו` (בראשית כה:כה) – שמות התאומים ניתנים לפי מראה הלידה; כאן לפי דרך אבות האב (1:98–99). השם "רַע" הוא אירוניה: "שם נעים" – רַע. |
| 1:98 | `kūwapi=⸢ši⸣ atta[š]=⸢miš⸣ DINGIR{MEŠ}-aš NÍG.SI.SÁ-an KASKAL-an U[L ... ]` | "הואיל ולו אֵלֵי אבי את הדרך הישרה לא […], | הושע יד:י | [equivalent] | `כִּי יְשָׁרִים דַּרְכֵי יְהוָה וְצַדִּקִים יֵלְכוּ בָם` (הושע יד:י) – "הדרך הישרה" של האלים; NÍG.SI.SÁ היא באכדית *mīšaru*, שורש `ישר` |
| 1:98 | `kūwapi=⸢ši⸣ atta[š]=⸢miš⸣ DINGIR{MEŠ}-aš NÍG.SI.SÁ-an KASKAL-an U[L ... ]` | "הואיל ולו אֵלֵי אבי את הדרך הישרה לא […], | – | [cognate דרך האכדית] | . |
| 1:99 | `⸢nu=za⸣ ḪUL-pan KASKAL-an ḫarker` | ואת הדרך הרעה החזיקו לעצמם, | תהלים א:ו | [equivalent] | `וְדֶרֶךְ רְשָׁעִים תֹּאבֵד` (תהלים א:ו) – שתי הדרכים. |
| 1:101 | `dān=za namm[a DAM] {m}[a]ppu šumreškiwan dāiš` | ופעם שנית, עוד, [אשת אַ]פּוּ החלה להיות מעוברת. | בראשית כט:לג | [equivalent] | `וַתַּהַר עוֹד וַתֵּלֶד בֵּן` (בראשית כט:לג) – אותה נוסחה של לידה נוספת. |
| 1:101 | `dān=za namm[a DAM] {m}[a]ppu šumreškiwan dāiš` | ופעם שנית, עוד, [אשת אַ]פּוּ החלה להיות מעוברת. | – | [divergence] | בבראשית כה:כד התאומים נולדים יחד; כאן – שני הריונות, בכור וצעיר. |
| 1:108 | `nu=šši=kan NÍG.SI.SÁ-an ŠUM-an daiš` | ושׂם לו את השם יָשָׁר. | בראשית כה:כו; בראשית כה:כז | [divergence] | `וַיִּקְרָא שְׁמוֹ יַעֲקֹב` (בראשית כה:כו) – הצעיר נקרא שם אחרי אחיו; ושם עשו "איש שדה" ויעקב `אִישׁ תָּם` (בראשית כה:כז): הבחנה מוסרית בין התאומים, כאן – כבר בשמות. |
| 1:109 | `pai[ddu=war]=an=šan NÍG.SI.SÁ-an ŠUM-an ḫalzeššandu` | "מע[תה] יקראו לו בשם יָשָׁר! | בראשית ל:ו | [equivalent] | `עַל כֵּן קָרְאָה שְׁמוֹ דָּן` (בראשית ל:ו) – שם הניתן ומנומק. |
| 1:116 | `[GIM-an] DUMU{MEŠ} {m}a[ppu ša]lleššer` | [כאשר] בני אַ[פּוּ ג]דלו, | בראשית כה:כז | [equivalent] | `וַיִּגְדְּלוּ הַנְּעָרִים` (בראשית כה:כז). |
| 1:122 | `[weš]=a=wa=za šarraweni` | "ו[אנחנו] – נתחלק! | בראשית יג:ח | [equivalent] | `אַל נָא תְהִי מְרִיבָה בֵּינִי וּבֵינֶךָ … כִּי אֲנָשִׁים אַחִים אֲנָחְנוּ` (בראשית יג:ח) – אחים שעושרם מחייב פרידה. |
| 1:123 | `nu=wa=nnaš a[rḫayan eš]uwaštati` | ונשב לנו [לחוד]!" | בראשית יג:ט; בראשית יג:יא | [equivalent] | `הִפָּרֶד נָא מֵעָלָי` (בראשית יג:ט); `וַיִּפָּרְדוּ אִישׁ מֵעַל אָחִיו` (בראשית יג:יא) – הפרידה בין אחים (אברם ולוט "אחים"); כאן היוזם הוא "רַע", ובבראשית – אברם. |
| 1:146 | `[nu=z]a 1 GU4.AP[IN.LÁ]-an GU4-un SIG5-un {LÚ}ḪUL-aš dāš` | [ו]שור חרישה אחד – השור הטוב – לקח לעצמו רַע, | בראשית יג:יא | [equivalent] | `וַיִּבְחַר לוֹ לוֹט אֵת כָּל כִּכַּר הַיַּרְדֵּן` (בראשית יג:יא) – החלוקה שבה האחד לוקח לעצמו את הטוב; כאן הלוקח הוא "רַע", ואל השמש יהפוך את החלוקה (1:149–150). |
| 1:155 | `n=at=za {d}UTU-i DI-ešni tiyēr` | הם אֶל אֵל הַשֶּׁמֶשׁ, לדין, צעדו. | בראשית ל:ו | [equivalent] | `דָּנַנִּי אֱלֹהִים` (בראשית ל:ו) – האל כדיין; |
| 1:155 | `n=at=za {d}UTU-i DI-ešni tiyēr` | הם אֶל אֵל הַשֶּׁמֶשׁ, לדין, צעדו. | – | [divergence] | בבראשית האבות אינם הולכים לדין לפני האל על ירושה – כאן אחים נכנסים למשפט כמו בבית דין. |
| 1:160 | `UL=war=(a)=šš(a)maš=at ammuk [ḫanaḫ]ḫi DI-eššar` | "לא אני לכם [אָדוּ]ן את הדין! | בראשית טו:יד | [equivalent] | `דָּן אָנֹכִי` (בראשית טו:יד) – האל הדן; כאן האל מסרב לדון אחרי שקולל, ומעביר את הדין לאלה אחרת. |


## Part EL: parallels index (Elkunirša and Ašertu, CTH 342)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-EL.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1.1:8 | `n=aš ŠA {ÍD}māla ḫaršumnaš ār[(a)š]` | ואל מקורות מָלָה הגי[ע]. | בראשית ב:יד | [equivalent] | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) – מָלָה הוא שמו החורי־חתי של הפרת; ומושבו של אל הכנעני – "במקור הנהרות" (*mbk nhrm* של אוגרית) – נמצא כאן במקורות הפרת. |
| 1.1:9 | `[n=aš ANA] {d}elkunirša ŠA {d}ašertum {LÚ}MUTI-ŠU ā[r(a)š]` | [והוא אל] אֶלְקוּנִירְשָׁא, אישהּ של אַשֶּׁרְתּוּ, הגי[ע], | בראשית יד:יט; בראשית יד:כב | [cognate] | `בָּרוּךְ אַבְרָם לְאֵל עֶלְיוֹן קֹנֵה שָׁמַיִם וָאָרֶץ` (בראשית יד:יט); `אֵל עֶלְיוֹן קֹנֵה שָׁמַיִם וָאָרֶץ` (בראשית יד:כב) – אֶלְקוּנִירְשָׁא הוא בכתיב חתי הכנענית *ʾil qōnê ʾarṣ* "אֵל קֹנֵה (= יוצר, בעלים של) ארץ"; אותו כינוי באות פניקית בקרטפה ובכתובת ירו … |
| 1.1:10 | `[n=aš=kan ŠA] {d}elkunirša {GIŠ}ZA.LAM.GAR-aš anda pait` | [ו]אל תוך אוהלו [של] אֶלְקוּנִירְשָׁא הלך. | בראשית יח:א | [equivalent] | `וְהוּא יֹשֵׁב פֶּתַח הָאֹהֶל` (בראשית יח:א) – גם אֵל הכנעני יושב באוהל (באוגרית *qrš* "סוכה"): אל של נוודים, אבי האלים, במשכן רועים. |
| 1.1:17 | `eḫu=wa=mu=za katta šē[š]` | 'בוא, שכב עמי!' | בראשית לט:ז; בראשית לט:יב | [equivalent] | `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף וַתֹּאמֶר שִׁכְבָה עִמִּי` (בראשית לט:ז); `וַתִּתְפְּשֵׂהוּ בְּבִגְדוֹ לֵאמֹר שִׁכְבָה עִמִּי` (בראשית לט:יב) – אותן מלים: אשת האדון (כאן אשת אבי האלים) אל הצעיר שבא לביתה. *šeš-* `שכב` – המלה היא ממש בחתית ( … |
| 1.1:18 | `[ūk=ma U]L memmaḫḫun` | [ואני] 'לא' אמרתי. | בראשית לט:ח | [equivalent] | `וַיְמָאֵן וַיֹּאמֶר אֶל אֵשֶׁת אֲדֹנָיו` (בראשית לט:ח) – הסירוב של הצעיר. |
| 1.1:24 | `ammēdaza=ma=wa=ta [{GIŠ}BAL.TUR-az? ḫatt]arāmi` | ואילו [בפלכ]י אותך [אד]קור!' | בראשית לט:יד | [divergence] | `וַתִּקְרָא לְאַנְשֵׁי בֵיתָהּ … בָּא אֵלַי לִשְׁכַּב עִמִּי` (בראשית לט:יד) – אשת פוטיפר מאיימת בעלילה ובצעקה; אַשֶּׁרְתּוּ מאיימת ב"דבר" (כשפים? עלילה?) ובפלך – כלי האשה, נשק האשה. |
| 1.1:30 | `nu=wa ammuk wiškezzi` | ואליי היא מיללת: | בראשית לט:י | [equivalent] | `וַיְהִי כְּדַבְּרָהּ אֶל יוֹסֵף יוֹם יוֹם` (בראשית לט:י) – ההפצרה החוזרת, יום יום. |
| 1.1:34 | `[n]u=war=an lūriyaḫ` | [ו]השפל אותה!" | בראשית לט:יט | [divergence] | `וַיְהִי כִשְׁמֹעַ אֲדֹנָיו אֶת דִּבְרֵי אִשְׁתּוֹ … וַיִּחַר אַפּוֹ` (בראשית לט:יט) – בבראשית הבעל מאמין לאשתו וכועס על הצעיר; כאן הבעל מאמין לצעיר ושולח אותו להשפיל את אשתו. |
| 1.1:38 | `tuēl=wa=kan [DUMU{MEŠ}-K]A 77 kwenun 88 kwenun` | "מ[בני]ך שלך – שבעים ושבעה הרגתי, שמונים ושמונה הרגתי!" | בראשית ד:כד | [equivalent] | `וְלֶמֶךְ שִׁבְעִים וְשִׁבְעָה` (בראשית ד:כד) – אותו מספר, באותו ז'אנר: שירת התפארות של רוצח. באוגרית לאֲתִירַת "שבעים בנים", ומספרי "שבעים ושבעה / שמונים ושמונה" הם נוסחה כנענית. |
| 1.1:42 | `n=aš INA MU 7{KAM} wieške[zzi]` | והיא שבע שנים מיללת. | ירמיהו לא:יד; בראשית לז:לד | [equivalent] | `רָחֵל מְבַכָּה עַל בָּנֶיהָ מֵאֲנָה לְהִנָּחֵם עַל בָּנֶיהָ` (ירמיהו לא:יד) – האם המבכה על בניה ואינה מתנחמת; `וַיִּתְאַבֵּל עַל בְּנוֹ יָמִים רַבִּים` (בראשית לז:לד) – יעקב על יוסף. |
| 1.1:42 | `n=aš INA MU 7{KAM} wieške[zzi]` | והיא שבע שנים מיללת. | בראשית נ:י | [divergence] | `וַיַּעַשׂ לְאָבִיו אֵבֶל שִׁבְעַת יָמִים` (בראשית נ:י) – שבעה ימים לאדם, שבע שנים לאלה. |
| 1.1:82 | `[IŠTU GEŠTU{ḪI.A}-ŠU=ši=kán] ištamaššuwar dā[š]` | [מאוזניו] את השמיעה לק[ח], | תהלים קטו:ה | [equivalent] | `עֵינַיִם לָהֶם וְלֹא יִרְאוּ` (תהלים קטו:ה) – כבשירת אוּלִּיקוּמִּי (UL 2:99): עיניים בלי ראייה; כאן נלקחים החושים מגוף אחד, איבר איבר. |
| 1.2:4 | `[nu]=wa=du=za katta šešm[i]` | [ו]עמך אשכ[ב]!" | בראשית לט:יז | [equivalent] | `וַתְּדַבֵּר אֵלָיו כַּדְּבָרִים הָאֵלֶּה` (בראשית לט:יז) – האשה אל בעלה, אחרי שנדחתה; כאן היא מציעה לו: (אם תניח לי לנקום) באֵל הַסְּעָרָה, אשכב עמך – פיוס בתמורה לנקמה. |
| 1.2:9 | `nu=war=an QĀTAMMA i[ya]` | כך עשי לו!" | בראשית לט:כ | [divergence] | `וַיִּקַּח אֲדֹנֵי יוֹסֵף אֹתוֹ וַיִּתְּנֵהוּ אֶל בֵּית הַסֹּהַר` (בראשית לט:כ) – בבראשית הבעל עצמו מעניש; כאן הוא מוסר את אֵל הַסְּעָרָה לידי אשתו: "כנפשך עשי לו". |
| 1.2:37 | `kuwat=w[a ... GE6-i] KI-pi TI-anteš wiyat` | מדוע […] אל האדמה [האפלה] חיים שיגר? | במדבר טז:לג | [equivalent] | `וַיֵּרְדוּ הֵם וְכָל אֲשֶׁר לָהֶם חַיִּים שְׁאֹלָה` (במדבר טז:לג) – ירידה חיים אל העולם התחתון. `האדמה האפלה` (F37) ולא `שאול`. |
| 2.1:39 | `LUGAL-i=ma MUNUS.LUGAL-ri KUR.KUR{MEŠ}-TIM ḫūmanda QĀTAMM[A] lagān ēšdu` | ואילו למלך (ול)מלכה – כל הארצות כך מוטות יהיו! | בראשית כז:כט | [equivalent] | `יַעַבְדוּךָ עַמִּים וְיִשְׁתַּחֲוֻ (וְיִשְׁתַּחֲווּ) לְךָ לְאֻמִּים` (בראשית כז:כט) – ברכה שכל העמים יכרעו למבורך; כאן ברכה למלך החתי: כמו לאל, כך למלך. |
| 2.4:5 | `našma [ ... U]R.BAR.RA KA5.A MUŠ GÍR.TAB [ ... ]` | או […] זאב, שועל, נחש, עקרב […] | דברים ח:טו | [equivalent] | `נָחָשׁ שָׂרָף וְעַקְרָב` (דברים ח:טו) – החיות המזיקות של המדבר; כאן – כוחות שהאל מרחיק. |
