# Project: the Sargon Birth Legend → Hebrew

Corpus: `../corpus.md` (read it, `../renderings.md` and `../translator-brief--kings.md` first).

## Scope
All the lines in the base text: King's col. I 1–32 (K 3401 + Sm 2118 obverse, with K 4470 col. I and BM 47449) and
col. II 1–17 (K 4470 col. II) – 49 entries, in `annotated.rtl.md` (labels `I.1` … `II.17`).

## Base text – and its limits (read this first)
- **The only open transliteration reachable on 2026-10-21 is King 1907** (vol. II pp. 87–96; public domain), which we
  transcribed by hand from the page images (`../../sources/King-1907--…/legend-of-sargon--King-1907-pp87-96.md`).
  It is a 1907 edition (rank 5 as an edition): its readings of the logograms and some signs are old, and it does not
  know K 7249 (CT 46 46), the fourth manuscript.
- **Checked against:** the eBL fragmentarium catalogue (no transliteration of K 3401+, K 4470 or K 7249; BM 47449 has
  only col. 4′, which belongs to another text – see below); the eBL dictionary for every word (per word); and the
  modern translation of ll. 1–14 by Westenholz 1997, quoted on the web (rank 3; brief quotations only).
- **Not reachable** (records: `../../sources/_records-only--Legends-of-kings/`): Westenholz 1997 (the current edition,
  © Eisenbrauns, not open access), Lewis 1980 (©; archive.org lending only and archive.org blocked), CT 13 42–43 and
  CT 46 46 (the copies; archive.org), CDLI P365306 / P365307 / P365303 (cdli.earth "temporarily offline", HTTP 503, all
  day 2026-10-21), Jiménez 2018 (BM 47449's edition).
- **Therefore:** every line is translated from King's transliteration as printed; where the modern reading is known to
  differ (from Westenholz's translation, or from the eBL dictionary's logograms), the apparatus says so and the Hebrew
  marks the point with `?` or `*…*`; nothing is filled from memory. **The user should get Westenholz 1997 (pp. 36–49)
  to check the whole text**, and K 7249 (lines Westenholz adds) is not translated (gap recorded).
- **BM 47449, rev. col. 4′** (eBL's only transliterated lines of the tablet: `gu₂-gal-li-ia`, `ana mar-ri-ia`,
  `A-MEŠ ul a-ṣa-pi` …) is edited by Jiménez 2018 among *disputation and fable extracts*: it is most likely not the
  Sargon legend and is not translated here.

## Line numbering
King's col. I 1–32, col. II 1–17. Westenholz and Lewis number continuously (and add K 7249); their numbers are not
available to us. In King's col. I, ll. 2 and 3 are one line on K 3401 (divided by a mark).

## The parallels that matter for the commentary
Exod 2:1–10 (the mother, the concealment, the basket, the bitumen, the river, drawn out, raised as a son); Exod 1:22;
2:16–19 (the drawing of water); Gen 10:8–12 (Akkad); Isa 20:1 (Sargon II); the royal boast (Isa 10:13–14; 37:24–25).

## Open decisions
(Below, after the progress: "Open decisions (SB)".)

## Progress
- 2026-10-21: drafted all 49 entries (`annotated.rtl.md`) from King's transliteration, with our normalization by
  the eBL dictionary (per word: *entu*, *quppu*, *šūru* II, *iṭṭû*, *peḫû*, *puzru*, *dālû*, *dalû*, *mārūtu*,
  *nukaribbūtu*, *râmu*, *akkullu*, *edēlu*, *ṭebû*, *rapādu* II, *ṣabītu*, *parû*, *nēšu*) and Westenholz's quoted
  translation of I.1–I.14 as the check.
- Review pass (a) fidelity: I.2 / I.5 *ēnetu* "high priestess" (King's "lowly" recorded); I.7 *ša lā elê'a* read with
  the suffix as subject ("from which I did not come up"); I.9 King's unread signs kept as `…` (Westenholz's "lowering
  his bucket" in the note only); I.16 / I.26 *edēlu* kept from King, italic (our alternative *ētelli* not checked);
  II.3 *rapādu* "roam" (eBL) for King's "couched".
- Review pass (b) consistency: the fixed strings `אַקִּי דולה־המים` (I.8–I.11), `קֻפָּה`, `חֵמָר`, `השליך`, `לְבֵן`,
  `גידל`, `שָׂם` (I.4, I.6, I.11) as renderings §4; *dannu* `החזק` (law corpus); *ṣalmāt qaqqadi* `שחורי הראש`;
  *nabalkutu* `חצה` (as Enmerkar's journey); *nakāru* `שינה`; *lū* + preterite = `אכן` throughout.
- Review pass (c) Hebrew: `שפת` (reserved) avoided in I.4 (`גדת`); `לְבֵן` vocalized (not "white"); `[…] וארבע שנים`
  (I.13) for the broken number.
- `verify SB`: OK (49 entries); `check_bible_quotes.py`: 0 problems.

## Key findings (SB)
- **The bitumen is `חֵמָר`, the word of Exod 2:3** (I.6): the tablet has ESIR = *iṭṭû* (King's *iddî*), which by the
  flood corpus's rule is `חֵמָר` – the very word of `וַתַּחְמְרָה בַחֵמָר וּבַזָּפֶת` [equivalent]. **The *kupru* claim
  does not stand**: *kupru* (ESIR.UD.A, Gen 6:14 `כֹּפֶר`) is not in the text [absent]; it comes from the flood story.
- **The same verb, *šakānu* = `שָׂם`** (I.6 *iškunanni* ↔ `וַתָּשֶׂם בָּהּ אֶת הַיֶּלֶד`, Exod 2:3), and the same place
  "on the bank of the river" (I.4 *ina aḫi Puratti* ↔ `עַל שְׂפַת הַיְאֹר`) [equivalent].
- **`תֵּבָה` / `קֻפָּה`** [divergence]: Exod 2:3 uses two Egyptian words (`תֵּבַת גֹּמֶא`); the legend has the Akkadian
  *quppu ša šūri* "a basket of reed (bundles)" – the source of Mishnaic `קֻפָּה`.
- **Cast into the river** (I.7 *nadû* = `השליך`) ↔ Pharaoh's decree `הַיְאֹרָה תַּשְׁלִיכֻהוּ` (Exod 1:22) and the exposed
  infant of Ezek 16:5 [equivalent]; but Moses' mother does *not* cast him in – she places him at the bank [divergence].
- **Drawn out** (I.9 *ušēlânni* "lifted me up", Š of *elû*) ↔ `כִּי מִן הַמַּיִם מְשִׁיתִהוּ` (Exod 2:10) [divergence:
  no wordplay on a name; `משה` reserved].
- **Aqqi the water-drawer** (*dālû*, LÚ.A.BAL; King: *nâq mê* "irrigator") [cognate ↔ `דָּלֹה דָלָה לָנוּ`, Exod
  2:19]: the rescuer is a labourer, not a princess (Exod 2:5) [divergence]; **"he raised me as his son"** (*ana mārūti
  … urabbânni*) ↔ `וַיִּגְדַּל הַיֶּלֶד … וַיְהִי לָהּ לְבֵן` (Exod 2:10) [equivalent] – the legal language of adoption.
- **The high-priestess mother and the unknown father** (I.2, I.5): the birth is secret because an *entu* was not to
  bear children; Exod 2:1 begins with the father's house [divergence], though both mothers belong to the priestly
  sphere ("בַּת לֵוִי", our proposal); `בֶּן אִשָּׁה זוֹנָה` (Judg 11:1) – the leader of blemished birth.
- **Gardener → king by Ištar's love** (I.11–I.13) ↔ `מִן הַנָּוֶה מֵאַחַר הַצֹּאן לִהְיוֹת נָגִיד` (2 Sam 7:8)
  [equivalent]; `תַּעֲשֶׂה מְלוּכָה` (1 Kgs 21:7) = *šarrūta epēšu* [equivalent]; a goddess's love as the source of
  kingship has no biblical counterpart [absent].
- **The boast list and the challenge to the next king** (I.14–I.31): the mountains destroyed with copper axes, the
  Sealand circled three times ↔ the Assyrian boast quoted by Isaiah (Isa 37:24; 10:15) and the circuits of Jericho
  (Josh 6:15); "whatever king shall rise after me" ↔ `מֶה הָאָדָם שֶׁיָּבוֹא אַחֲרֵי הַמֶּלֶךְ` (Eccl 2:12).
- **The ancient mind:** a founder-king whose legitimacy is a story of shame turned into election; the river as the
  agent that judges and carries; adoption as a legal act; the royal inscription as a dare to posterity.

## Open decisions (SB)
1. I.2 / I.5 *e-ni-tum*: *ēnetu* "high priestess" (followed) or King's *enītu* "lowly"?
2. I.7 *ša lā elê'a*: "from which I did not come up" (followed; Westenholz) or "which did not rise over me" (King)?
3. I.9: King's *ḫi-ib-[..]-li-[..]* vs Westenholz's "when lowering his bucket" – the signs need the modern edition.
4. I.16 / I.26: *edēlu* "bolt" (King) or a form of *elû* "go up" (our unverified proposal)?
5. Col. II: part of the legend or another text on K 4470? (Westenholz needed.)
6. **The whole text must be checked against Westenholz 1997 (pp. 36–49) and K 7249** before publication.

### Proposals for the corpus renderings (SB)
- *entu* / *ēnetu* `אֵנְתּוּ` (law corpus); *puzru* `סתר`; *quppu ša šūri* `קֻפָּה של קנים`; *iṭṭû* `חֵמָר`; *peḫû*
  `אטם`; *bābu* (of a box) `פתח`; *nadû* `השליך`; *dālû* `דולה־המים`; *ana mārūti* `לְבֵן`; *nukaribbūtu*
  `גַּנָּנוּת`; *šarrūta epēšu* `מלכות עשה`; *akkullu* `קרדום`; *erû* `נחושת`; *lamû* `סבב`; *māt tiāmti* `ארץ הים`;
  *rapādu* `שוטט`; *purīmu* `פרא`; *parû* `פרד`; *ṣabītu* `צבייה`; *nēšu* `אריה`; *ākilu* `אוכל`.

### Parallels index (SB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I.1 | Šarru-ukîn … šar A-ga-de | סרגון … מלך אכד | `סַרְגוֹן מֶלֶךְ אַשּׁוּר` (ישעיהו כ:א) | cognate | The same name; Sargon II, under whom the legend was probably written. |
| I.2 | a-bi ul i-di | אבי – לא ידעתי | `וַיֵּלֶךְ אִישׁ מִבֵּית לֵוִי; וַיִּקַּח אֶת בַּת לֵוִי` (שמות ב:א) | divergence | Moses' story starts with the father; Sargon's has none. |
| I.2 | um-mi e-ni-tum | אמי – אנתו | `וְהוּא בֶּן אִשָּׁה זוֹנָה` (שופטים יא:א) | equivalent | A leader of blemished birth. |
| I.4 | ina a-ḫi {nâru}Puratti šak-nu | על גדת נהר פרת שׂוּמָה | `וַתָּשֶׂם בַּסּוּף עַל שְׂפַת הַיְאֹר` (שמות ב:ג) | equivalent | The river bank; *šakānu* = `שָׂם`. |
| I.5 | i-ra-an-ni … ina pu-uz-ri u-lid-an-ni | הרתני … בסתר ילדתני | `וַתַּהַר הָאִשָּׁה וַתֵּלֶד בֵּן; וַתֵּרֶא אֹתוֹ כִּי טוֹב הוּא וַתִּצְפְּנֵהוּ שְׁלֹשָׁה יְרָחִים` (שמות ב:ב) | equivalent | Conception, birth, concealment. |
| I.6 | i-na iddî bâbi-ia ip-ḫi | בחמר את פתחי אטמה | `וַתַּחְמְרָה בַחֵמָר וּבַזָּפֶת` (שמות ב:ג) | equivalent | ESIR = *iṭṭû* = `חֵמָר`: the same word. |
| I.6 | iš-kun-an-ni i-na ḳup-pi ša šu-ri | שׂמתני בקֻפָּה של קנים | `וַתִּקַּח לוֹ תֵּבַת גֹּמֶא` (שמות ב:ג) | divergence | Egyptian `תֵּבַת גֹּמֶא` vs Akkadian *quppu ša šūri*; the verb `וַתָּשֶׂם` = *iškunanni*. |
| I.6 | iddî (ESIR) | חמר | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | absent | *kupru* (ESIR.UD.A) is not in the text. |
| I.7 | id-dan-ni a-na [nâ]ri | השליכתני אל הנהר | `כָּל הַבֵּן הַיִּלּוֹד הַיְאֹרָה תַּשְׁלִיכֻהוּ` (שמות א:כב) | equivalent | *nadû* = `השליך`. |
| I.7 | id-dan-ni | השליכתני | `וַתֻּשְׁלְכִי אֶל פְּנֵי הַשָּׂדֶה בְּגֹעַל נַפְשֵׁךְ בְּיוֹם הֻלֶּדֶת אֹתָךְ` (יחזקאל טז:ה) | equivalent | The exposed newborn. |
| I.8 | {m}Ak-ki {amêlu}nâḳ-mê | אַקִּי דולה־המים | `וְגַם דָּלֹה דָלָה לָנוּ וַיַּשְׁקְ אֶת הַצֹּאן` (שמות ב:יט) | cognate | *dālû* ~ `דָּלָה`. |
| I.8 | ana eli {m}Ak-ki … u-bil-an-ni | אל אקי … הובילני | `וַתֵּרֶד בַּת פַּרְעֹה לִרְחֹץ עַל הַיְאֹר` (שמות ב:ה) | divergence | The finder: a labourer, not a princess. |
| I.9 | lu-u u-še-la-an-ni | אכן העלני | `כִּי מִן הַמַּיִם מְשִׁיתִהוּ` (שמות ב:י) | divergence | "Lifted up" (*elû* Š), no name etymology. |
| I.10 | a-na ma-ru-ti-šu … u-rab-ban-ni | לְבֵן לו … גידלני | `וַיִּגְדַּל הַיֶּלֶד וַתְּבִאֵהוּ לְבַת פַּרְעֹה וַיְהִי לָהּ לְבֵן` (שמות ב:י) | equivalent | Adoption formula. |
| I.11 | a-na {amêlu}…-ti-šu lu-u iš-kun-an-ni | לגננות שלו – אכן שׂמני | `אֲנִי לְקַחְתִּיךָ מִן הַנָּוֶה מֵאַחַר הַצֹּאן לִהְיוֹת נָגִיד` (שמואל ב ז:ח) | equivalent | From humble work to rule. |
| I.12 | {ilu}Iš-tar lu-u i-ra-man-ni-ma | אשתר אכן אהבתני | `דּוֹדִי יָרַד לְגַנּוֹ לַעֲרֻגוֹת הַבֹּשֶׂם` (שיר השירים ו:ב) | equivalent | Love and the garden. |
| I.12 | {ilu}Iš-tar lu-u i-ra-man-ni-ma | אשתר אכן אהבתני | `וַיהוָה אֲהֵבוֹ` (שמואל ב יב:כד) | absent | No goddess's love makes a king in the Bible. |
| I.13 | šarru-u-ta lu-u e-pu-uš | מלכות אכן עשיתי | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | equivalent | "To do kingship". |
| I.15 | šadê dannûti ina aḳ-ḳul-la-te ša erû lu-u ub-bit | הרים חזקים – בקרדומות נחושת – אכן ניתצתי | `אֲנִי עָלִיתִי מְרוֹם הָרִים יַרְכְּתֵי לְבָנוֹן` (ישעיהו לז:כד) | equivalent | The royal boast of conquering mountains. |
| I.15 | aḳ-ḳul-la-te | בקרדומות | `הֲיִתְפָּאֵר הַגַּרְזֶן עַל הַחֹצֵב בּוֹ` (ישעיהו י:טו) | divergence | The prophet's answer to the boast. |
| I.18 | ma-ti ti-amat lu-u al-ma-a III šanîtu | את ארץ הים – אכן סבבתי שלוש פעמים | `רַק בַּיּוֹם הַהוּא סָבְבוּ אֶת הָעִיר שֶׁבַע פְּעָמִים` (יהושע ו:טו) | equivalent | Circling a fixed number of times. |
| I.22 | mannu šarru ša i-la-a arki-ia | כל מלך אשר יעלה אחרי | `כִּי מֶה הָאָדָם שֶׁיָּבוֹא אַחֲרֵי הַמֶּלֶךְ` (קהלת ב:יב) | equivalent | The king who comes after. |
| II.4 | ṣabîtu | צבייה | `כִּשְׁנֵי עֳפָרִים תְּאוֹמֵי צְבִיָּה` (שיר השירים ד:ה) | cognate | *ṣabītu* ~ `צְבִיָּה`. |
| II.8 | pur[imu] | פרא | `וְהוּא יִהְיֶה פֶּרֶא אָדָם` (בראשית טז:יב) | cognate | *purīmu* ~ `פֶּרֶא`. |
| II.14 | nêšu a-ki-lu | אריה אוכל | `מֵהָאֹכֵל יָצָא מַאֲכָל וּמֵעַז יָצָא מָתוֹק` (שופטים יד:יד) | equivalent | The lion as "the eater". |
