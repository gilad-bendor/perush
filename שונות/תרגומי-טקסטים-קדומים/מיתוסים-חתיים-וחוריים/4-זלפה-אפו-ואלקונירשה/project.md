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
