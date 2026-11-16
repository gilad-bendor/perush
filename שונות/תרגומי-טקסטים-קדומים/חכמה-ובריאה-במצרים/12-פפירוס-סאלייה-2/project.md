# Project 12: papyrus Sallier II – Amenemhat, Khety, the Hymn to Hapy (`פפירוס סאלייה 2`)

## Scope (Round 9 run 4, 2026-11-16)
The whole school roll pSallier II (pBM EA 10182; 19th dynasty, under Seti II, c. 1200 BCE; the three texts composed in
the 12th dynasty): KEY `AH`, the Instruction of Amenemhat (1,1–3,8, 28 lines); KEY `KH`, the Instruction of Khety, "the
Satire of the Trades" (3,9–11,5, 69 lines); KEY `NH`, the Hymn to Hapy (11,6–14,11, 35 lines). Labels: `renderings.md` §14.1.

## Base text
AED-TEI (TLA 2018, CC BY-SA 4.0): `../../sources/AED-TEI/Amenemhat--pSallier-II/` (2SOSQYN3XZGMJPPSFL2PE53ONY),
`Khety--pSallier-II/` (L4M2NZM2YZAZRBIKQQBAVX743U), `Nile-Hymn--pSallier-II/` (PMARXRST45A6PL4SDWQ7URKABI); witnesses
pMillingen (AH), pChester Beatty V and pAnastasi VII (NH) – `data KEY --wit`. Khety's 18 other witnesses are in AED
(not downloaded: the run used Sallier II whole; recorded in `../../sources/AED-TEI/README.md`). Rank 3: `tr KEY` after
drafting.

## What to look for
- AH: the dead king speaks to his son in a dream (a "revelation", `wp mꜣꜥ.t`); "trust no brother, know no friend"; the
  murder at night in the palace; "he who ate my food raised troops" – Mic 7:5–6, Ps 41:10, Ps 55:13–15.
- KH: the father takes his son upstream to the school of writing and mocks every other trade – the smith, the
  carpenter, the barber, the reed-cutter, the potter, the builder, the gardener, the farmer, the weaver, the arrow-maker,
  the courier, the embalmer?, the cobbler, the washerman, the fowler, the fisherman: "be a scribe"; Ben Sira 38:24–39:11
  (outside the Tanakh: say so); the behaviour of a pupil (KH 9–11).
- NH: Hapy as the giver of life; when he is sluggish, men suffer and offerings fail; when he rises, the land rejoices
  – Ps 104:10–15, Ps 65:10–14, Deut 11:10–12 (Egypt watered "by foot" against the land that drinks rain).

## AH 1,1–3,8 and KH 3,9–11,5 (Round 9 run 4, translator 2, 2026-11-16)

### Scope
AH: all 28 lines (the Instruction of Amenemhat: title, the dead king's revelation to Senwosret, the night murder, his
deeds, the hand-over of the crown, the colophon of the pupil Inena). KH: all 69 lines (the Instruction of Khety: the
title, the father's speech, sixteen trades, the praise of the scribe, the pupil's manners, Renenet and Meskhenet, the
colophon). Both texts whole; small lacunae only (AH 1,4, 3,8; KH 4,4, 5,7, 6,4, 6,7, 11,2, 11,5). Sallier II is a
pupil's copy, heavily corrupt: the TLA's `⟨ ⟩` / `{ }` are followed throughout, and the corrected reading translated.
Also written: `translation--head.rtl.md` (the roll; NH's translator adds nothing to it unless needed).

### Sources consulted
`data AH`, `data KH` (AED-TEI, TLA lemma ids and glosses); `tr AH`, `tr KH` (the TLA German, rank 3); `lexmap`,
`freq`, `lex`, `grep --all` for every recurring word; PH / KG (project 11) and §14.5.1–§14.5.3 for the shared words;
the usual readings (Lichtheim AEL I; Parkinson 1997) from memory, named only in general terms. Ben Sira 38–39 cited
by chapter only (not in the Tanakh files).

### Decisions
- **The title formula and the colophon:** `רֵאשִׁית הַמּוּסָר אֲשֶׁר עָשָׂה X` (AH 1,1, KH 3,9). Sallier's colophon is
  `jwi̯=s pw nfr m-ḥtp` (AH 3,7–3,8, KH 11,5): `בא הוא, בטוב, בנחת,` – the fixed `בא הוא` of §14.5.1 copied byte for
  byte (the feminine =s, referring to sbꜣ.yt, as AM 27.18 already renders it `בא הוא`); Sallier has no "from its
  beginning to its end". m-ḥtp `בנחת` (HC 13, 24), adverbial nfr `בטוב`. The dedication `לכָּא של המשובח, המעולה,
  הטוב בהתנהגות` is the same in both texts.
- **The trades (KH), one Hebrew each:** gn.wtj `פַּסָּל`; nby `צוֹרֵף`; ḥmtj `נַפָּח`; ḥmww `חָרָשׁ` (not `אֻמָּן`,
  ummânu's cognate); mnytj `עוֹדֵר` (the hoe-man); ms.w-ꜥꜣ.t `מְלַטֵּשׁ־אֲבָנִים`; ẖꜥq.w `סַפָּר`; bṯyw
  `קוֹצֵר־הַקָּנִים`; jqd-nḏs.t `קַדָּר` (`יוֹצֵר` is qmꜣ's); qd jnb `בַּנַּאי` (one word, from qd `בָּנָה`); kꜣry
  `גַּנָּן`; ꜥḥwtj `חוֹכֵר` (the corpus precedent); qnyw `אוֹרֵג`; jrw-ꜥḥꜣ `עוֹשֵׂה־הַחִצִּים`; sḫḫtj `רָץ`; stnyw
  `*פֶּחָמִי*?` (TLA "Köhler (?)"; older reading "embalmer"); ṯbww `סַנְדְּלָר`; rḫtj `כּוֹבֵס`; wḥꜥ `צַיָּד` (one
  word for the fowler and the fisherman, as in Egyptian: `צייד־העופות`, `צייד־הדגים`); zẖꜣ.w "scribe" `סוֹפֵר`,
  zẖꜣ.w "writing" `כְּתָב`; ꜥ.t-sbꜣ `בֵּית־הַסֵּפֶר`; ḫrp "director" `מְפַקֵּחַ`; jꜣw.t "office" `מִשְׂרָה` (lexmap).
- **AH key words:** mḥ jb `בָּטַח` (§14.3); ḫnms `רֵעַ` ★; ꜥq `מְקֹרָב`, jry `חָבֵר` (§14.3, §14.5.2); sḫpr `הֵקִים`
  (AH 1,3, 1,5, 1,6, 3,6; precedents vary – PH `מגדל`, `המהווה`); ḥr "plot" `מְזִמָּה` (PH); km "complete" `הִשְׁלִים`;
  qnn `תַּקִּיף` (MR); šwꜣw `רָשׁ` (MR); nmḥ `דַּל`; tmm.t `הָאֱנוֹשׁוּת` ≠ ḥnmm.t `הָעָם`; snn `צֶלֶם` (licensed), twt
  `דְּמוּת` (licensed); ḫtm `חוֹתָם` [cognate]; ḏ.t / nḥḥ `עַד` / `נֶצַח`; ḥzmn "bronze" `אָרָד` (vocalized, after the
  2026-10-30 harmonization); ḏrw "limit" `קָצֶה` (`גְּבוּל` is tꜣš's); ꜣbw Elephantine `יֵב`; jdḥw `הַבִּצּוֹת`, šꜣ
  "marsh" `הַבִּיצָה` (KH); Wawat `וָאוָאת` (SS), Medja `מֶגָ׳א`, Sṯtjw `הַסֶּטִיּוּ`, Npri `נֶפֶּרִי`, pꜣ ḥꜥpj
  `הַחַעְפִּי`; names per §14.2 (`אֲמֶנֶמְחַת`, `סְחֶתֶפּ־אִיבּ־רַא`, `סֶנוּסֶרֶת`).
- **KH other words:** wḏꜥ `דָּן` kept in the refrain `מגיע הוא לביתו בערב – ההליכה דנה אותו` (7,2 = 7,6 = 7,7–7,8;
  the TLA "erledigt (abgeschnitten)"; the double sense "cut / judge" noted); mꜣꜥ.t / sḥbw "wind" `מַשָּׁב` (`רוּחַ` is
  ṯꜣw's); pḥ.wj `קֵץ` (`סוּף` is ṯwfj's); db "hippopotamus" `סוּס־הַנָּהָר` (AM 7.3); mr.t `רְחוֹב`, jwy.t `רֹבַע`;
  mry.t "embankment" `סוֹלְלַת־הַנָּהָר`, sp.t `שָׂפָה`; ḫsf "repel" `הִרְחִיק` (lexmap `ייסר` from PH, a different
  sense – a split, recorded); ꜣḫ.t "thing; property" `דָּבָר` / `נְכָסִים` by sense (lexmap has both); ḏbꜥ `אֶצְבַּע`;
  ḥnq.t `שֵׁכָר`; hnw `הִין` [cognate?]; ḏꜣjs `הִתְוַכֵּחַ` (§14.5.1); sḏm.yw "the judges" `הַשּׁוֹמְעִים` (§14.5.1, not
  "judges"); jkm "shield" `תְּרִיס` (mkj = `מָגֵן`, AH 2,3); pri̯-ꜥ-jb `פְּרִיעַת־לֵב` (10,1) / `גְּבוּרָה` (10,9: the
  TLA gives two senses); ꜣḫ X r Y (KH 9,4) = `מוטב לך יום בבית־הספר מנצח…` (a real comparison: the formula holds).
- **Rejected:** Ben Sira's wording anywhere in a line; `כֵּמֶת` → "מצרים" in KH 7,7 (tried, reverted: §3.2);
  `האדמה` (KH 5,7; AH 2,5: `אֲדָמָה` never → `שדה`, `קרקע`); `אוּמָּן`, `יוֹצֵר` for the trades.

### Open decisions for the user
- AH 1,4: we read the 1st-person stative `sḏr.kwj` as an address to the son ("when you lie down, guard your heart
  yourself"), against the TLA's "I spend the night guarding your heart".
- AH 2,1–2,2: an unreal condition ("had I quickly taken weapons, I would have made the cowards retreat"), against the
  TLA's factual reading.
- KH 3,9: the base writes "Duauf son of Khety"; translated with the TLA "Khety son of Duauf".
- KH 7,9 stnyw: `*פחמי*?` (TLA) or "embalmer" (older).

### Progress log
- Drafted AH (28) and KH 3,9–8,5, then 8,6–11,5, each followed by `fill` + `verify`; `tr` read after each part's
  first draft. Gate hits fixed: `אדמה` (AH 2,5, KH 5,7), `סוף` (KH 4,3), `רוח` (KH 6,1, 6,9), `שש` (KH 6,4: digits as
  the base), `יאור` (KH 7,1), unvocalized `אלה` (KH 9,1, 11,4), `מוסר` outside sbꜣ.yt (KH 9,3).
- **Tool fix (minimal, reported):** the `נחש` licence lacked the spelling `zꜣ-tꜣ` (AH 2,1, TLA tla126130); added
  `zꜣ-tꜣ` beside `sꜣ-tꜣ` in `egypt_tools.py` line 745; `selftest` 54 / 0.
- Pass (a) fidelity: brackets checked (KH 6,7 `rn=[f]` – suffix only, unbracketed; KH 7,1 the editor's ⟨hꜣw.t⟩
  restored to the line; KH 4,4 `[…]` carried); KH 4,5–4,6 re-cut to the TLA's sentence ("החל / לצוות בעודו ילד").
- Pass (b) consistency: one Hebrew per lemma (mr.t / jwy.t / mry.t / sp.t separated; jqr `מעולה` not `מועיל` in both
  colophons); the KH refrain identical three times; `הישמר מלעלות אל השולחן` 9,9 = 10,7; `verify AH KH --strict` 0.
- Pass (c) Hebrew: the generated `translation-AH/KH.rtl.md` read through; bogus הקבלה bullets removed; Ben Sira cited
  by chapter only; `check_bible_quotes.py` on all files of the project: 0 problems. `build AH KH` done.

### The text on its own terms
- AH 1,1: a dead king speaks "in a revelation of truth" – the Instruction as political propaganda of the new king.
- AH 1,3–1,4: the reversal of Egyptian wisdom: not "make many friends" but "know no friend, guard your heart
  yourself" – the heart (jb) is the self, and trust is "filling the heart" with another.
- AH 1,5–1,7: the generous king betrayed by those he fed, clothed and anointed; his "living images" (snn) are men.
- AH 1,9–2,2: the murder told in the first person: the hour of "good heart" after supper, the weapons meant to guard
  him, the guard itself fighting; "there is no strong man at night".
- AH 2,8–2,9: royal ideology: the king "makes the grain", Nepri loves him, the Inundation "respects" him; no hunger.
- AH 3,1–3,2: the tomb as the "house for ever", of which even eternity (nḥḥ) is afraid.
- AH 3,6: the seal (ḫtm, the source of `חוֹתָם`) passes to the son; Re rejoices in his barque at the succession.
- KH 4,2, 9,1–9,2: the whole satire's point: every trade has a director – the scribe is the director.
- KH 5,8: the potter breathes the kiln's heat into his nose – the life-breath formula turned upside down.
- KH 7,2, 7,6, 7,8: the refrain of the journeys: "he reaches his house in the evening – the walking has judged him".
- KH 8,4–8,5: purity (wꜥb) against the washerman's work with women's menstrual cloths.
- KH 10,3: the messenger's ethic: "take nothing away, add nothing".
- KH 10,9: "hearing becomes bravery" – sḏm, the virtue of PH's epilogue, here in a soldier's word.
- KH 11,2–11,3: Renenet on the scribe's shoulder from the day of his birth; Meskhenet sets him at the head of the
  council: the scribe's fortune is fixed at birth.
- AH 3,8 / KH 11,5: the pupil Inena dedicates his copy "to the ka" of his teachers – copying as homage.

### Key parallels
- AH 1,3: [equivalent] Mic 7:5 `אַל תַּאֲמִינוּ בְרֵעַ אַל תִּבְטְחוּ בְּאַלּוּף` and Jer 9:3 – distrust of friend and
  brother; a shared motif, no known literary link.
- AH 1,5–1,6: [equivalent] Ps 41:10 `אוֹכֵל לַחְמִי הִגְדִּיל עָלַי עָקֵב` – betrayal by the one who ate one's bread.
- AH 1,9: [equivalent] 2 Sam 4:5 – a king murdered on his bed by his own men (Ish-bosheth).
- AH 3,6: [cognate] Gen 38:18 `חֹתָמְךָ` – ḫtm, the loanword.
- KH 3,9, 4,8: [divergence] Ben Sira 38:24–39:11 (outside the Tanakh) – the scribe against the trades, without mockery.
- KH 9,4: [equivalent] Ps 84:11 `כִּי טוֹב-יוֹם בַּחֲצֵרֶיךָ מֵאָלֶף` – "better one day in X than a thousand / eternity".
- KH 10,3: [equivalent] Deut 4:2 – "add nothing, take nothing away", a formula of the ancient Near East.
- KH 9,8–9,9: [equivalent] Prov 23:1–2, Job 29:9 – the manners at the great man's table, the hand on the mouth.
- KH 11,4: [equivalent] Prov 6:23 `וְדֶרֶךְ חַיִּים תּוֹכְחוֹת מוּסָר`, Prov 13:22 `בְּנֵי-בָנִים`.

### Lines shared with other texts
- The colophon `בא הוא` (§14.5.1, PH 19,9, KG 2,9, AM 27.18) copied byte for byte; AH 3,7–3,8 and KH 11,5 share the
  dedication word for word. The KH refrain (7,2 = 7,6 = 7,7–7,8) and 9,9 = 10,7 are identical in Hebrew.

### Proposals for the shared renderings
1. The Sallier colophon `jwi̯=s pw nfr m-ḥtp` = `בא הוא, בטוב, בנחת,` (NH's end will meet it; Any's too?).
2. The dedication `jn kꜣ n ḥsj jqr nfr bjꜣ.t` = `לכָּא של המשובח, המעולה, הטוב בהתנהגות`; jqr `מְעֻלֶּה` (no fixed Hebrew before;
   `מוֹעִיל` stays ꜣḫ's).
3. The trades list above (Decisions), as KH's fixed Hebrew for any later text that names a trade (Any, the
   Late Egyptian Miscellanies).
4. zẖꜣ.w "writing" `כְּתָב` / "scribe" `סוֹפֵר`; ꜥ.t-sbꜣ `בֵּית־הַסֵּפֶר`; ḫrp "director" `מְפַקֵּחַ`.
5. mḥ jb `בָּטַח` (AH 1,3; §14.3 confirmed); sḫpr `הֵקִים` (precedents vary: a harmonization item).
6. ḏrw "limit" `קָצֶה`; pḥ.wj `קֵץ`; mꜣꜥ.t / sḥbw "wind" `מַשָּׁב`; mr.t `רְחוֹב`, jwy.t `רֹבַע`, mry.t `סוֹלְלָה`.
7. ꜣbw `יֵב` (Elephantine; the Aramaic papyri's name), jdḥw `הַבִּצּוֹת`, šꜣ `הַבִּיצָה`, Medja `מֶגָ׳א`, Npri `נֶפֶּרִי`,
   Meskhenet `מֶסְחֶנֶת`, Tjaru `צָ׳ארוּ`, Qagabu `קָאגַבּוּ`, Inena `אִנֶנָא`, Hori `חוֹרִי`.
8. For the finalization: ḫsf `הִרְחִיק` (KH) vs PH's `ייסר` – a split by sense; pri̯-ꜥ-jb two senses.
9. Tool: add `zꜣ-tꜣ` to the `נחש` licence permanently (done here as a minimal fix).

### Lessons for the guidelines
- A gate's licence list keyed on one spelling (`sꜣ-tꜣ`) misses the base's other spelling (`zꜣ-tꜣ`): licences should
  also list the TLA lemma id.
- `check_bible_quotes.py` reads any `` `…` (ספר ch:v) `` – a Ben Sira citation in that shape is mis-read as a Tanakh
  verse: cite non-canonical books by chapter in words.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (AH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1,2 | ḏd =f ḫꜥi̯ m nṯr sḏm n ḏd.ty =j n =k nsw.y =k ⟨tꜣ⟩ ḥqꜣ.y =k jdb.pl jri̯ =kwj m-ḥꜣw-ḥr nfr sꜣq.w tw r smd,t r =f tm.t | אומר הוא: "המופיע כאל, שמע את אשר אומר לך, שתמלוך על הארץ, תשלוט על הגדות, תעשה יותר מן הטוב. אסוף את עצמך מפני הכפופים, אשר אינם (כלום), | `שְׁמַע בְּנִי מוּסַר אָבִיךָ` (משלי א:ח) | divergence | אב מלמד את בנו בציווי "שמע"; כאן האב מת, והמוסר הוא צוואה מלכותית, לא חכמת בית. |
| 1,3 | ḫpr.w tmm,t rḏi̯.w jb m-sꜣ ḥr [ḥ]r =st m tkn jm =s[n] m wꜥ.w n =k m mḥ jb =k m sn m rḫ ḫnms zꜣ.pl m sḫpr.w | כשנהיית האנושות, נותנת היא לב למזימה בגללה. אל תתקרב אליהם, אל תהיה לבדך; אל תבטח באח, אל תדע רֵעַ ובנים, אל תקים | `אַל תַּאֲמִינוּ בְרֵעַ אַל תִּבְטְחוּ בְּאַלּוּף` (מיכה ז:ה) | equivalent | אותו ציווי בשני חלקים: לא לבטוח באח, לא ברע. במיכה – תיאור של דור מושחת ("אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ", ז:ו); כאן – עצת מלך, אחרי בגידה בפועל. מוטיב משותף, בלי תלות ספרותית ידועה. |
| 1,3 | ḫpr.w tmm,t rḏi̯.w jb m-sꜣ ḥr [ḥ]r =st m tkn jm =s[n] m wꜥ.w n =k m mḥ jb =k m sn m rḫ ḫnms zꜣ.pl m sḫpr.w | כשנהיית האנושות, נותנת היא לב למזימה בגללה. אל תתקרב אליהם, אל תהיה לבדך; אל תבטח באח, אל תדע רֵעַ ובנים, אל תקים | `אִישׁ מֵרֵעֵהוּ הִשָּׁמֵרוּ וְעַל כָּל אָח אַל תִּבְטָחוּ` (ירמיהו ט:ג) | equivalent | "רע" ו"אח", והפועל `בטח`, כמו כאן. |
| 1,4 | n =k ꜥq nn km.n jr,j sḏr.kwj ḥr zꜣw ={j} n =k jb =k ḏs =k ḥr-n,tj nn wn =(j) m mr n z h[rw] [n.(j]) [qsn,t] =k | לך מקורבים: לא השלים חבר (דבר). כשאתה שוכב, שמור לך את לבך בעצמך, כי אין לאיש בני־בית [ביום] [צרתך]. | `גַּם-אִישׁ שְׁלוֹמִי אֲשֶׁר-בָּטַחְתִּי בוֹ אוֹכֵל לַחְמִי הִגְדִּיל עָלַי עָקֵב` (תהלים מא:י) | equivalent | הבגידה של איש־האמון (ראו 1,5). |
| 1,5 | jw ḏi̯.n =j n šwꜣ,ww m sḫpr.w nmḥ,w jw ḏi̯.n =j pḥ{wj} jw,tj ⟨mj⟩ ⟨n,tj⟩ n⟨n⟩ wn jn wnm.w{pl} kꜣ =j jri̯ ṯs,t =j n =k rḏi̯.n =j n =f | נתתי לרש, הקמתי את הדל; נתתי שיגיע מי שאין לו כמי שיש לו. אוכל מזוני הוא שעשה עליי תלונות לך; זה אשר נתתי לו – | `אוֹכֵל לַחְמִי הִגְדִּיל עָלַי עָקֵב` (תהלים מא:י) | equivalent | "אוכל לחמי" / "אוכל מזוני": הבוגד הוא מי שהמלך האכיל. מוטיב משותף (הבגידה של בן־השולחן), בלי קשר ספרותי ידוע. |
| 1,6 | ꜥ.wj.du =fj ḥr sḫpr.w ḥr ḥr =st wnḫ.w.pl m p(ꜣ)q,t =j ḥr mꜣꜣ n =j mj šw.y wrḥ{nw}.⟨pl⟩ m ꜥnt,jw =j [ḥr] | זרועותיו מקימות מזימה בגללה; הלבושים בבד־הדק שלי מביטים בי כבחציר יבש; המשוחים במור שלי | `אוֹכֵל לַחְמִי הִגְדִּיל עָלַי עָקֵב` (תהלים מא:י) | equivalent | ראו 1,5. |
| 1,9 | rḫ =f r-sꜣ ms,y(t) pw ḫꜣwj ḫpr.w šzp.n =j m wnw,t n.tj nfr-jb sḏr.kwj ḥr ḥnk,yt =j | ידע. אחרי ארוחת־הערב היה זה, הלילה נהיה; קיבלתי שעה של טוב־לב, שוכב אני על מיטתי; | `וְהוּא שֹׁכֵב אֵת מִשְׁכַּב הַצָּהֳרָיִם` (שמואל ב ד:ה) | equivalent | איש־בשת, מלך הנרצח על מיטתו בידי אנשי ביתו; מוטיב משותף. |
| 2,7 | jw hꜣb.w.n =j r ꜣbw ⟨ḥsi̯.n⟩ =⟨j⟩ r jdḥ,w ꜥḥꜥ.kwj ḥr ḏr,ww ⟨tꜣ⟩ ḥr mꜣꜣ n =j m qꜣb.w =f jni̯.n =j ḥr ḏr,ww | דרכתי עד יֵב, פניתי אל הבִּצּוֹת; עמדתי על קצות הארץ, רואה את תוכה; הגעתי עד הקצוות | `מִמִּגְדֹּל סְוֵנֵה וְעַד גְּבוּל כּוּשׁ` (יחזקאל כט:י) | cognate | "מגדל־סונה" (אסואן, סמוכה ליב) הוא קצה מצרים בדרום גם במקרא; יֵב עצמה (יְבּ) היא עיר המושבה היהודית בפפירוסים הארמיים. |
| 2,9 | ḥr pgꜣ nb n ḥqr =tw jm =j n ⸢jbi̯⸣ =tw jm =j jw ḥmsi̯ =tw m jri̯.t.n =j ḥr sḏd.t[w] ⸢jm⸣ =⸢j⸣ jw wḏ.n =j nb r | על כל פתח. לא רעבו בימיי, לא צמאו בימיי; ישבו (בנחת) במה שעשיתי, מספרים עליי; כל אשר ציוויתי – עמד על | `וְיָשְׁבוּ אִישׁ תַּחַת גַּפְנוֹ וְתַחַת תְּאֵנָתוֹ וְאֵין מַחֲרִיד` (מיכה ד:ד) | equivalent | הישיבה בנחת כסימן לשלטון טוב; מוטיב משותף. |
| 3,5 | n =k jꜣ,wt ={j} m =kı͗ jri̯ =w n =j ẖr,j-ḥꜣ,t =j ṯ(ꜣ)s =j n =k m-pḥ.w[j] =j jnk mnjw n,tj m jb =k twt.jw{nw}.pl ḥr wꜣḥ | לך תהילה. הנה, עשו לי (זאת) בראשיתי, קושר אני לך באחריתי. אני המעגן את אשר בלבך; הדמויות נושאות | `מַגִּיד מֵרֵאשִׁית אַחֲרִית` (ישעיהו מו:י) | divergence | צמד "ראשית / אחרית" (*ḥꜣ.t* / *pḥ.wj*); כאן לא ידיעת העתיד אלא חיי המלך: מה שעשו לו בראשיתו, הוא "קושר" לבנו בסופו. |
| 3,6 | ḥḏ,t pr,t-nṯr ḫtm,w r s,t ⟨jr,j⟩ m šꜣꜥ.n =(j) n =k ⟨hn,w⟩ m wjꜣ Rꜥ ꜥḥꜥ.n nsw,y =k sḫpr.w ẖr,j-ḥꜣ,t =j nn m jri̯.t | את הכתר הלבן, זרע־האל; החותם על מקומו, כפי שהתחלתי לך; צהלה בסירת רַא! אז הוקמה מלכותך לפניי – לא במה שעשו | `וַתֹּאמֶר חֹתָמְךָ וּפְתִילֶךָ וּמַטְּךָ` (בראשית לח:יח) | cognate | `חוֹתָם` העברי שאול מן המצרית *ḫtm* (מלה שאולה, §4.2); כאן חותם המלוכה, שם חותם אישי. |

### Parallels index (KH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3,9 | ḥꜣ,t-ꜥ-m sbꜣ,yt jri̯.t.n z ⟨n(,j)⟩ ⟨Ṯꜣr,w⟩ Dwꜣ,ww≡f zꜣ H̱{r}ty rn =f n zꜣ =f Ppy rn =⟨f⟩ jstw r =f ⟨sw⟩ m ḫnti̯.yt | ראשית המוסר אשר עשה איש צָ׳ארוּ, חֶתִי בן דּוּאָאוּף שמו, לבנו, פֶּפִּי שמו; והרי, הוא מפליג במעלה הנהר | — | divergence | בן סירא, פרק ל"ח, פסוק כ"ד עד פרק ל"ט, פסוק י"א (מחוץ לתנ"ך; לא מצוטט כאן) – אותה סוגה: שבח הסופר מול בעלי המלאכה, האיכר, החרש, הנפח, הקדר. בן סירא מכבד את בעלי המלאכה (בלעדיהם לא תיושב עיר), וחתי לועג להם; בשניהם חכמת הסופר תלויה בפנאי. |
| 4,2 | ⟨jw⟩ mꜣꜣ.n =j qnqn zp-2 ḏḏ =k jb =k m-sꜣ zẖꜣ,w dgꜣ.n =j nḥm =⟨tw⟩ ḥr bꜣk.w ={f} m =kı͗ nn-wn m-ḥꜣ,w zẖꜣ,w mj,tt ḥr⟨,j⟩ mw pw šdi̯ | "ראיתי מכות, מכות! תשים את לבך אחרי הכתב; ראיתי (איך) ניצלים מן העבודה. הנה, אין דבר העולה על הכתב – כמו (מי) שעל המים הוא. קרא | `שְׁמַע בְּנִי מוּסַר אָבִיךָ` (משלי א:ח) | divergence | אב מלמד בנו; כאן העצה איננה מוסר־חיים כללי אלא בחירת מקצוע. |
| 4,8 | ḏbꜥ.pl =fj mj ḫ,t mzḥ.pl ḫnš sw r s⟨w⟩ḥ{w},t rrm.pl ḥmw.w{.pl} nb{.t} ṯꜣi̯.y ꜥn[,t] wrd.w | אצבעותיו כ"דברים" של תמסחים, מסריח הוא יותר מביצי דגים. כל חרש האוחז במעצד – עייף הוא | — | divergence | בן סירא, פרק ל"ח, פסוקים כ"ז–כ"ח (מחוץ לתנ"ך; לא מצוטט כאן) – אותם בעלי מלאכה, החרש והנפח היושב מול הכור, ובן סירא מתאר את טרחתם בלי לעג. |
| 5,8 | ={f} ⟨qrḥ,t⟩ =⟨f⟩ ḥbs,t.ṱ =f nḫt.tw m-ꜥ ⟨dbn⟩ ꜥꜣgꜣs,w =f m ⟨stp⟩ ꜥq ṯꜣw ⟨r⟩ {s}fnd =f pri̯ ={s} ⟨m⟩ tꜣw =f | את כליו; בגדו נוקשה מן הטיט, חגורתו – סמרטוט; נכנסת רוח אל אפו, היוצאת מכבשנו. | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | "רוח אל אפו": במקרא רוח החיים מאת האל אל אפי האדם העשוי מן העפר; כאן – הקדר, עובד החומר, נושם אל אפו את הבל הכבשן הלוהט. היפוך אירוני (שלא בכוונת המחבר) של דמות האל הקדר חנום. |
| 7,3 | r z,t-ḥm,t mꜣs,tj.du =⸢f⸣ r rʾ-⸢n⸣-jb? =f nn tpj.n =f ṯꜣw jr ḫbꜣ.tw hrw ⟨nn⟩ sḫt{tw} jtḥw =f sšnj | מאשה; ברכיו אל בטנו?, אינו שואף רוח. אם פוחת יום (בלי) אריגה, מושך הוא שושן | `כְּשׁוֹשַׁנָּה בֵּין הַחוֹחִים` (שיר השירים ב:ב) | cognate | `שׁוֹשָׁן` שאול מן המצרית *sšn* (§4.2). |
| 8,2 | m ⟨nḥḥ⟩ wḏꜣ =f wḏꜣ =j m-ꜥ ẖꜣ,wt.pl psḥ.t =f ⟨m⟩ {j}mskꜣ.w.pl rḫt,j{.pl} ḥr rḫt{.pl} ḥr mr[y],t | השמן; שלם הוא – שלם אני מפני גוויות; מה שהוא נושך – עורות. הכובס מכבס על סוללת־הנהר; | `שְׂדֵה כוֹבֵס` (ישעיהו ז:ג) | equivalent | הכובס עובד מחוץ לעיר, על המים. |
| 8,5 | ⟨sw⟩ m dꜣj,w z,t-ḥm,t{.pl} ḫr wnn =f m ḥzmn =⟨st⟩ rmi̯.y ={k} =⟨f⟩ wršu̯ =f ⟨m⟩ mgꜣ,t jw =j jn{n} =j jm =k ḏd =tw ⟨šꜣm⟩ | (עצמו) על בגד־הפשתן של אשה – והרי היא בנידתה; בוכה הוא, מבלה את היום במקל־הכביסה. "אני אפנה אליך," אומרים, "הכביסה המלוכלכת | `וְאִשָּׁה כִּי תִהְיֶה זָבָה דָּם יִהְיֶה זֹבָהּ בִּבְשָׂרָהּ` (ויקרא טו:יט) | divergence | טומאת הנידה ובגדיה (ויקרא טו:יט–כד); במצרים – לא טומאה מוגדרת בחוק, אלא בוז ולכלוך. מוטיב משותף. |
| 8,8 | ḏd =j n =k mj wḥꜥ{.pl} rrm.w.pl {s}fn{d} =f r jꜣw,t nb.t nn-wn m bꜣk.w =⟨f⟩ m jtrw šbn | אומר אני לך כמו כן על צייד־הדגים: נחלש הוא יותר מכל משרה; אין (שכר) בעבודתו ביאור – מעורבב | `וְהִנֵּה עֹמֵד עַל הַיְאֹר` (בראשית מא:א) | cognate | `יְאֹר` שאול מן המצרית *jtrw* (§4.2). |
| 9,2 | wpw{,t} zẖꜣ,w{.pl} mntf ḫrp.w{.pl} jr sw[t] rḫ =kw zẖꜣ,w ḫr wnn =f m nfr n =k st nn jꜣw,t ={j} ⟨ḏḏ.t⟩ m-ḥr =k m =kı͗ ⟨jr,j⟩ | מלבד הסופר: הוא המפקח. אם יודע אתה את הכתב, הרי יהיה (לך) "טוב לך הדבר". אין משרה הנתונה לפניך; הנה, החבר | `חָזִיתָ אִישׁ מָהִיר בִּמְלַאכְתּוֹ לִפְנֵי-מְלָכִים יִתְיַצָּב` (משלי כב:כט) | equivalent | בעל המקצוע המהיר עומד לפני מלכים; כאן רק הסופר "אין משרה לפניו". בפסוק "מָהִיר" כ"סופר מהיר" (תהלים מה:ב; עזרא ז:ו) – קשר אפשרי לעולם הסופרים. |
| 9,4 | ẖnw m =kı͗ jri̯{.t} =st n mry =k ꜣḫ n =k hrw m ꜥ,t-sbꜣ jw {r-}nḥḥ ⟨m⟩ kꜣ,t ={st} ḏw.w jw =st ꜣs | הבירה; הנה, נעשה בעבור אהבתך. מוטב לך יום בבית־הספר מנצח בעבודת ההרים; חולף הוא מהר, | `כִּי טוֹב-יוֹם בַּחֲצֵרֶיךָ מֵאָלֶף` (תהלים פד:יא) | equivalent | אותה תבנית "טוב יום ב־X מן ריבוי ב־Y"; בתהלים – חצרות המקדש, כאן – חדר הלימוד. |
| 9,7 | ⟨mtr⟩ ⟨ḫr⟩ ⟨sḏm.yw.pl⟩ jri̯ n =f wšb{,t} ḥr ={f} wḏfꜣ,t jr šm =k m pḥ,wj sr.w.pl m {n}tkn wꜣ.ww m rḫ nfr,t jr | העד לפני השומעים; עשה לו תשובה במתינות. אם הולך אתה אחרי השרים, אל תתקרב, התרחק, כיודע את הטוב. אם | `אַל-תִּתְהַדַּר לִפְנֵי-מֶלֶךְ וּבִמְקוֹם גְּדֹלִים אַל-תַּעֲמֹד` (משלי כה:ו) | equivalent | אותה עצה: לא להידחק אל הגדולים. |
| 9,8 | ꜥq =k jw nb{,t} pr m pr =f jw ꜥ.wj.du =fj n ky r-ḥꜣ,t =k ḥmsi̯ =kwj ḏr,t =k m rʾ =k m dbḥ{t} ꜣḫ,t | נכנס אתה אל בעל־הבית בביתו, וזרועותיו לאחר לפניך – שב, ידך על פיך; אל תדרוש דבר | `וְכַף יָשִׂימוּ לְפִיהֶם` (איוב כט:ט) | equivalent | השרים "שמים כף לפיהם": אותה מחוות שתיקה מול הגדול. |
| 9,8 | ꜥq =k jw nb{,t} pr m pr =f jw ꜥ.wj.du =fj n ky r-ḥꜣ,t =k ḥmsi̯ =kwj ḏr,t =k m rʾ =k m dbḥ{t} ꜣḫ,t | נכנס אתה אל בעל־הבית בביתו, וזרועותיו לאחר לפניך – שב, ידך על פיך; אל תדרוש דבר | `כִּי-תֵשֵׁב לִלְחוֹם אֶת-מוֹשֵׁל בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | equivalent | הנימוס בשולחן הגדול. |
| 9,9 | r-gs =f jri̯ =k n =f mj ḏd{.t} jmi̯ zꜣw ⟨ṯsi̯(.t)⟩ r ṯ,t dns{mn} jm =k wr šf,yt =⟨k⟩ m ḏd{.t} | אשר לצדו; עשה לו כאמרו: "תן!" הישמר מלעלות אל השולחן; היה כבד בעצמך, ויגדל מוראך; אל תאמר | `וְשַׂמְתָּ שַׂכִּין בְּלֹעֶךָ אִם-בַּעַל נֶפֶשׁ אָתָּה` (משלי כג:ב) | equivalent | ההתאפקות בשולחן השר. |
| 10,1 | mdw,t n(.t) ḥꜣp.w jw ḥꜣp.w ={f} ẖ,t jri̯ =⟨f⟩ n =f ={f} ⟨jkm⟩ m ḏd{.t} mdw,t n(.t) pri̯-ꜥ-jb jw ḥmsi̯ =tw ḥnꜥ ={k} ksm | דבר של הסתר: הסתום־בטנו עושה לו תריס. אל תאמר דבר של פריעת־לב, כשיושבים עם מתנגד. | `שֹׁמֵר פִּיו וּלְשׁוֹנוֹ שֹׁמֵר מִצָּרוֹת נַפְשׁוֹ` (משלי כא:כג) | equivalent | ראו הערות. |
| 10,3 | bw n ={s} =⟨k⟩ st jr hꜣb tw sr m wp,wt{.pl} j:ḏd =f mj j:ḏd =f sw m jṯi̯ m rḏi̯{.t} ḥr =st ḫꜣꜥ ={f} hꜣn,w nn | המקום שבאת אליו. אם ישלחך שר בשליחות, אמור אותה כפי שאמר אותה: אל תיטול ואל תיתן עליה. העוזב את הצהלה – אין | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | equivalent | נוסחת "לא להוסיף ולא לגרוע", כאן על מסירת שליחות נאמנה; בדברים – על דבר האל. נוסחה משותפת למזרח הקדום (גם בקולופונים ובחוזים). |
| 10,6 | jw ẖsj sw ⟨r⟩ ẖ,t{.pl} sḏm =tw n =k jr sꜣi̯ tw 3 n(,j) tʾ ⟨sꜥm⟩ ⟨m⟩ ⟨hnw⟩ 2 n(,j) ḥ(n)q,t nn ḏr,w | כי עלוב הוא (יותר) מן הבטן; שומעים לך. אם משביעים אותך 3 ככרות לחם, בליעה ב־2 הִין שֵׁכָר – אין קצה | `וְשֶׁמֶן זַיִת הִין` (שמות ל:כד) | cognate | `הִין` המקראי הוא כנראה המלה המצרית *hnw* (מלה שאולה, מסופקת); אותה מידה. |
| 10,8 | mdw,t.pl sr.w.pl jḫ jri̯.y ={j} =⟨k⟩ {m-}qd ={k} ms.w.pl r(m)ṯ jw =k ḥr šm.t ⟨r⟩ ⟨nmt.t⟩ =⟨sn⟩ mꜣꜣ{.n} =tw zẖꜣ,w{.pl} | את דברי השרים; כדי שתעשה (לך) את אופיים של ילדי בני האדם, בלכתך בעקבותיהם. רואים סופר | `אֶת-חֲכָמִים` (משלי יג:כ) | equivalent | "ההולך את חכמים", ההולך בעקבות הגדולים נעשה כמותם. |
| 10,9 | sḏm ḫpr sḏm ⟨m⟩ pri̯-ꜥ-jb{.pl} ꜥḥꜣ =kw mdw,t.pl n.tt r =sst ꜣs{t} rd.du =k jw =k ḥr šm.t nn | השומע; נהיית השמיעה לגבורה. הילחם בדברים אשר נגדה; החש את רגליך בלכתך, בלי | `וְאִישׁ שׁוֹמֵעַ לָנֶצַח יְדַבֵּר` (משלי כא:כח) | divergence | "השומע" כמידת האדם הנאמן. |
| 11,1 | kfꜣ jb =k zmꜣm m{ꜥ} tn.w r ={sst} =⟨k⟩ ḫnms{.pl} z ⟨n(,j)⟩ ḏꜣm =k m =kı͗ Rnn,t ḥr wꜣ,t | לב־נאמן (מדי). התחבר אל הנעלה ממך, התרועע עם איש בן־דורך. הנה, רֶנֶנֶת על דרך | `אֶת-חֲכָמִים` (משלי יג:כ) | equivalent | "ההולך את חכמים": ההתחברות אל הנעלים. |
| 11,4 | ⟨dwꜣ⟩ nṯr ⟨n⟩ jt =⟨k⟩ mw,t ={f} =⟨k⟩ ḏḏ{.yw.pl} ⟨tw⟩ ḥr wꜣ,t n.t{t} ꜥnḫ.w.pl m =kı͗ nn ={j} ⟨rḏi̯.n⟩ =⟨j⟩ m-ḥr =k ⟨n⟩ ms.w.pl n(.w) ms.w.pl =⟨k⟩ | הלל את האל בעבור אביך ואמך, אשר שמו אותך על דרך החיים. הנה אֵלֶּה, אשר שמתי לפניך, לבני בניך. | `וְדֶרֶךְ חַיִּים תּוֹכְחוֹת מוּסָר` (משלי ו:כג) | equivalent | "דרך החיים" והמוסר; במשלי – התוכחה היא הדרך, כאן – ההורים ששמו את הבן על הדרך (בית הספר). |
| 11,4 | ⟨dwꜣ⟩ nṯr ⟨n⟩ jt =⟨k⟩ mw,t ={f} =⟨k⟩ ḏḏ{.yw.pl} ⟨tw⟩ ḥr wꜣ,t n.t{t} ꜥnḫ.w.pl m =kı͗ nn ={j} ⟨rḏi̯.n⟩ =⟨j⟩ m-ḥr =k ⟨n⟩ ms.w.pl n(.w) ms.w.pl =⟨k⟩ | הלל את האל בעבור אביך ואמך, אשר שמו אותך על דרך החיים. הנה אֵלֶּה, אשר שמתי לפניך, לבני בניך. | `טוֹב יַנְחִיל בְּנֵי-בָנִים` (משלי יג:כב) | equivalent | המוסר כירושה "לבני בניך". |
| 11,5 | jwi̯ =s pw nfr m-ḥtp jn ⟨kꜣ⟩ ⟨n(,j)⟩ ḥsi̯ jqr nfr b[j]ꜣ,t zẖꜣ,w-pr-ḥḏ Qꜣi̯-gꜣb.w n(,j) pr-ḥḏ n(,j) pr-ꜥꜣ […] | בא הוא, בטוב, בנחת, לכָּא של המשובח, המעולה, הטוב בהתנהגות, סופר בית־האוצר קָאגַבּוּ, של בית־האוצר של פַּרְעֹה […] | `וַיֹּאמֶר פַּרְעֹה אֶל יוֹסֵף` (בראשית מא:מא) | cognate | `פַּרְעֹה` הוא *pr-ꜥꜣ*, "הבית הגדול" (§4.2, מלה שאולה). |
