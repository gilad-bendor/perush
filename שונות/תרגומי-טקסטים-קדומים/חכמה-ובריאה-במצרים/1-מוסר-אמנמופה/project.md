# Project 1: the Instruction of Amenemope (`מוסר אמנמופה`)

## Scope
The whole text of pBM EA 10474 recto (KEY `AM`): the prologue (1.1–3.7), the thirty "houses" (3.8–27.5), the epilogue
(27.6–27.18) and the colophon (28.1): 551 lines, labelled page.line as in the TLA (= Lange 1925's numbering).

## Base text and witnesses
- AED-TEI `5JO44VJZERAB3HQUHMFSMNXH6I` (TLA 2018, ed. P. Dils), CC BY-SA 4.0: `../../sources/AED-TEI/Amenemope--pBM-EA-10474/`.
- The five older (21st-dynasty) fragmentary witnesses, in AED (`egypt_tools.py data AM … --wit`): tLouvre E 17173
  (2.15–18), oCairo SR 1840 (3.11–4.10), tMoscow I.1.d.324 (6.10–7.1), pStockholm MM 18416 (10.18–14.5), tTurin CGT
  58005 (24.1–25.9).
- Rank 3–5: the TLA's German (`tr AM`), Lange 1925 (PD).

## Plan
Drafted by one translator in parts (resumed after each merge): part 1 = 1.1–7.10 (prologue, houses 1–5), part 2 =
7.11–13.9 (houses 6–9), part 3 = 13.10–19.9 (houses 10–17), part 4 = 19.10–24.20 (houses 18–25), part 5 = 24.21–28.1
(houses 26–30, epilogue, colophon).

## Status
**Done (first draft), 2026-10-23** (Round 4 run 3, sub 1): all 551 lines drafted by two translators in five parts (1.1–13.9;
13.10–28.1), then the three review passes over the whole text (sections below); `egypt_tools.py verify AM --strict` 0
problems, `check_bible_quotes.py` 0 on every file of the project; the parallels table generated (495 rows); print stub
`../../הדפסה/חכמה-ובריאה-במצרים/1-מוסר-אמנמופה.rtl.md`. Not yet reviewed by the user.

## AM 1.1–7.10

### Scope
Part 1 of 5: the prologue (title and purpose 1.1–1.12; the author's titles 1.13–2.12; the son's titles 2.13–3.7) and
houses 1–5 (3.8–7.10): 124 lines, all drafted, none lost (only small restorations: 1.19 `[s]⸢mn⸣`). The prologue
is one long sentence ("Beginning of the teaching … made by … for his son … – he says:"); the houses teach listening
and storing the words (1), protecting the weak and helping the drowning enemy (2), restraint before the "hot-mouthed"
(3), the two trees – the hot man and the truly silent (4), the temple's share and "do not say: today is like
tomorrow" (5). Older witnesses used: tLouvre E 17173 (2.15–18), oCairo SR 1840 (3.11–4.10), tMoscow I.1.d.324
(6.10–7.1).

### Sources consulted
The base (AED-TEI, TLA 2018, ed. Dils) through `egypt_tools.py data AM … --wit`; the TLA German (`tr`), read after
drafting each section; Lange 1925 (OCR, chapters 1–5, read for the cruxes 3.14, 4.8–4.11, 6.2–6.4, 6.19, 7.2–7.6);
Lichtheim and the usual readings from memory only, never quoted (Shupak's Hebrew not consulted). The format model:
the dossier's `annotated-MK.rtl.md`.

### Decisions
- **Plene, unvocalized `>` lines.** (My first save of the prologue was vocalized – the ★ error; all 45 lines were
  rewritten plene before anything else was drafted; the formula check of 2.7 caught it.)
- **sbꜣ.yt = `מוּסָר`** with the note at 1.1 (both "teaching" and "discipline"); 1.1 = the renderings' test line.
- **Two "return" verbs kept apart:** ꜥn (1.6, 4.11, 5.17) = `הֵשִׁיב` (it pairs with Prov 22:21 `לְהָשִׁיב` and lets
  5.17 "the god will know how to answer him" answer 4.11 "do not answer him yourself"); ḫsf (1.5) = `הֶחֱזִיר`
  (`תְּשׁוּבָה`) – the dossier's `להדוף` (MK E135, "ward off") is the same lemma in its other sense.
- **wḏꜣ** "be sound" / noun "well-being" = `שָׁלֵם` / `שָׁלוֹם` (1.2, 1.8, 4.2, 7.10); swḏꜣ (1.8) = `הֶחֱזִיק שָׁלֵם`
  (to keep the root); wḏꜣ "storehouse" = `אוֹצָר` (4.1; the pun noted). ḥr-tp tꜣ = `עַל פְּנֵי הָאָרֶץ` (1.8 and the
  refrain).
- **ḫꜣꜥ** "leave, abandon, throw" = `עָזַב` in all four lines (4.12 the bank abandons him, 5.4 leave him in the god's
  arms – cf. Gen 39:6 `וַיַּעֲזֹב … בְּיַד`, 5.16 `עֲזֹב אוֹתוֹ לְנַפְשׁוֹ`, 6.3 `עֲזִיבַת עֲנָפָיו`). Rejected:
  `הִשְׁלִיךְ` (fits 6.3 and Ps 55:23, but not 5.16), `הִנִּיחַ` (ambiguous "place").
- **jmm** (imperative of rḏj) = `תֵּן` (3.9, 3.10, 3.13, 5.3); rḏj "put" = `שָׂם` (3.11, 6.7); causative rḏj = a
  Hebrew causative (1.9 `לְהוֹרִיד`).
- **jri̯ ḥmw** "steer" = `הִטָּה מָשׁוֹט` (1.10, 5.1); jri̯ "serve as" = `הָיָה לְ־` (3.14, 3.16); jri̯ hꜣw "spend
  time" = `בִּלָּה עֵת` (3.17); otherwise jri̯ = `עָשָׂה`.
- **hꜣw** "time, lifetime" = `עֵת` (3.17 = 5.18; cf. Ps 31:16 `עִתֹּתָי`). Rejected `יָמֶיךָ` (would collide with hrw
  "day").
- **kꜣrj** = `מִקְדָּשׁ` (as the dossier's MK E134); **ḥw.t-nṯr** = `בֵּית הָאֵל` (literal, like ḥw.t = `בַּיִת`;
  never `בֵּית־אֵל`).
- **nfr.y** (poetic "grain", from nfr) = `בָּר` (vocalized; Joseph's grain word, Gen 41:35, 49 [equivalent]); jt
  keeps `תְּבוּאָה` / `שְׂעוֹרָה`.
- **jmj-rʾ** = `הַמְּמֻנֶּה עַל`; sꜣtꜣ = `קַרְקָעוֹת`; mꜣwj "new land" = `(קַרְקַע) חֲדָשָׁה` (1.17); dnw.yt =
  `מִרְשָׁם`; mdnw = `רְשִׁימַת מַס`; sꜣḥ = `אֲחֻזָּה`; wꜣḥ.y = `יְבוּל`; šmw (harvest) = `קָצִיר`; sšꜣ "skilled" =
  `בָּקִי` (as the renderings' §8 row for 27.16); jꜣw.t "office" = `מִשְׂרָה`.
- **smḥr** "courtier" = `רֵעַ (הַמֶּלֶךְ)` – "the king" in ( ); 1 Kgs 4:5 `רֵעֶה הַמֶּלֶךְ` [equivalent]. (The renderings'
  §8 left this to the translator for 27.17: I propose this form there too.)
- **nb** "lord" = `אָדוֹן` (1.16, 6.10), nb "owner of" = `בַּעַל` (2.9, 2.10): split by sense.
- **nḏs** in 2.14 "the least" = `הַצָּעִיר` (the renderings' `אִישׁ פָּשׁוּט` is for the noun "commoner"): split by sense.
- **mḥ** "fill" = `מִלֵּא` (5.5), but the idiom mḥ tw n "grasp" (7.9) = `הֵאָחֵז` (split by sense, noted).
- **The storm words:** ḏꜥ = `סְעָרָה` (3.15, 5.14), pḫpḫ = `סוּפָה` (4.15), qrjw = `רַעַם` (4.16); fire: ḫ.t = `אֵשׁ`
  (5.14), stꜣ = `לֶהָבָה` (6.6).
- **mḥy.t** "north wind" = `הַצָּפוֹן` (Song 4:16): `רוּחַ` is gated for ṯꜣw.
- **tꜣ-rʾ** "hot-mouthed" = `לוֹהֵט־הַפֶּה` (5.10): a lemma of its own, kept apart from šmm `הַחַם` (`חַם־הַפֶּה` is
  also blocked by the `חם` gate).
- **dby** "hippopotamus" = `סוּסֵי־הַנָּהָר` (7.3): `סוּס־הַיְאוֹר` is blocked by the `יאור` gate (jtrw only) – right
  by the gate's logic; Job 40:15 `בְהֵמוֹת` in the apparatus.
- **Semitic loanwords in Egyptian, rendered by their Hebrew cognate:** ꜥšq "extort" = `עָשַׁק` (6.14, [cognate] Lev
  19:13), mkmr.t "fish-net" = `מִכְמוֹרֶת` (7.6, [cognate] Isa 19:8; also the Akkadian corpora's *kamāru*).
- **The refrains (to be fixed in renderings §7):** 3.17 = 5.18 (= 17.15): `אם תבלה את עתך ואֵלֶּה בלבך,`;
  4.2 = 7.10: `יהיה גופך שלם על פני הארץ.`; the two trees 6.4 `קצו מובא אל מגרש־העצים;` ~ 6.12
  `קצו מובא במטע.` (the same except the place: Egyptian *n mꜥḫrmꜥ* / *m mnw*); 6.2 `הוא כעץ הצומח בפנים:` ~ 6.8
  `הוא כעץ הצומח בפרדס:`; 5.8 `להתאפק לפני הדיבור.` ~ 5.13 `יְשַׁן לפני הדיבור.` (the shared half `לפני הדיבור`).
- **jr** (topicalizer) = `הִנֵּה` (6.1, 7.7); `אֲשֶׁר לְ־הַחַם` was rejected because the contracted `לַחַם` reads "bread".
- **Cross-language collisions not avoided:** the Akkadian harmonization (`עָבַר` only for *ebēru*, `חָלַף` for *etēqu*,
  `עָזַב` for *ezēbu*) binds Akkadian words; for Egyptian words, which have no cognate there, I used the natural
  Hebrew (`עָבַר` 7.1 for snj "pass", `נַעֲבִיר` 5.1 for ḏꜣj "ferry", `עָזַב` for ḫꜣꜥ). The coordinator may rule
  otherwise.

### Open decisions for the user
- 4.10 bgꜣ: "be slack" (TLA, followed: `אל *תיחלש*? מול הפגיעה בך`) or "cry out" (Lange: "do not shout at him who hurt
  you"). 4.8–4.11 as prohibitions (TLA, oCairo `m-ḏi̯`) or as a conditional (Lange "when you are sent…").
- 2.12 / 2.8 "true of voice": of the father, or of Amenemope himself (does it mean he was dead when the text was
  written?). Left open in the notes.

### Progress log
- Drafted in five saves (prologue; houses 1–2; houses 3–5), each followed by `fill` + `verify AM` (0 problems).
- Gate hits during drafting: 2.7 (formula, the vocalized draft – fixed by rewriting plene); 5.5 `בלחם` "with bread"
  caught by the `חם` gate – exempted with the tool's own `[היתר שער: בלחם …]` marker (a gate bug: the gate allows up to
  three prefix letters, so `בלחם`, `ולחם`, `מלחם` all trip it; the Hebrew was not bent).
- Pass (a) fidelity: every word against the parse; brackets (1.19 not bracketed: only *s* restored); negations (5.2
  `bn`, the m-jri̯ chains with `וְאַל` for mtw=k); tenses (statives 4.14, 7.1, 7.2 as perfects; Third Future 5.17,
  5.19). Changes: 4.10, 4.13, 4.14, 4.16, 6.10, 6.19 after comparing the TLA (see the תרגומים bullets).
- Pass (b) consistency: lemma → Hebrew checked for every recurring lemma (ꜥn, ḫꜣꜥ, jmm, rḏj, jb/ḥꜣ.tj, ẖ.t, md.t,
  mdwj, wḏꜣ, jnj, gmj, šmm, gr, kꜣrj, nṯr, nfr.y, wsfꜣ, sꜣj, msḥ, thꜣ); refrains byte-identical (`verify`: 0
  repeated-line differences); new strings grepped (`grep --all`): `מכמורת` = *kamāru* elsewhere (same thing), the rest
  free in this corpus.
- Pass (c) Hebrew: read the generated `translation-AM.rtl.md` aloud; fixed 3.6 (`וּלְתֶפְנוּת`).
- `build AM`; `check_bible_quotes.py` on the annotated file, the intro, `translation-AM.rtl.md` and the project's
  `translation.rtl.md`: 0 problems; `verify AM`: 0 problems (non-strict; 427 lines placeholder); `selftest`: 0 failures.

### The text on its own terms
- **A land official's conscience** (1.13–2.6): the author measures, registers and taxes the land, sets the boundary
  stones (1.19), registers the new islands thrown up by the Nile in the king's name (1.17–18) and calibrates the
  Udjat corn measure (1.15) – the trade whose sins (moving stones, false measures) the later houses forbid.
- **A family teaching** (2.11–3.7): father, son and mother are named with their titles; the son and mother serve Min
  and Shu and Tefnut at Akhmim – wisdom passes from father to the youngest son, and on to his children (5.19).
- **The heart in its shrine** (1.9): the calm heart "goes down into its shrine" like a god's statue in its naos; the
  hot man's heart rises (4.17–18, 5.14).
- **Words stored in the body** (3.13–3.16): the sayings rest "in the casket of your belly" (oCairo: "inside your
  belly") and become a mooring-post on the tongue in a "storm of words" – memory as a scribe's box, speech as a boat.
- **Life as a Nile voyage** (1.10, 4.12–5.2): the steering-oar, the quay, the mud, the north wind, the crocodiles; the
  evil man's boat is wrecked – and the righteous ferry him across.
- **Help the enemy, leave the judgement to the god** (4.11, 5.1–5.6, 5.16–17): do not answer him yourself; lift him,
  feed him "that he be sated and ashamed"; "the god will know how to answer him".
- **The hot man and the truly silent** (2.7, 4.17, 5.10–5.15, 6.1–6.12, 7.7–7.9): temperament as morality; silence as
  trust in the god, not muteness; the author's own title "the truly silent in This".
- **Burial as the measure of a life** (2.9–2.10, 6.4–6.12): two tombs for the author; the hot tree is floated far from
  its place and burned ("the flame is its burial"), the silent tree "ends in its own garden".
- **The world turned over** (6.18–7.6): "tomorrow has come, today has passed": the flood recedes, the crocodiles lie
  bare, the jackals feast – the silent say "great is the favour of Re" (7.8).
- **Loanwords from Semitic** (6.14 ꜥšq, 7.6 mkmr.t): New Kingdom Egyptian borrowed Canaanite words – the contact ran
  both ways.

### Key parallels
- **3.9–3.16 ↔ Prov 22:17–18** [divergence/equivalent]: give (not "incline") your ears; heart; "in your belly"
  (`בְּבִטְנֶךָ` – and oCairo's older reading "inside your belly" is closer than the papyrus's "casket of your belly");
  the tongue / mooring-post against `יִכֹּנוּ יַחְדָּו עַל-שְׂפָתֶיךָ`; "useful" against `נָעִים`.
- **1.5–1.6 ↔ Prov 22:21** [equivalent]: `לְהָשִׁיב אֲמָרִים … לְשֹׁלְחֶיךָ` folds the Egyptian couplet into one colon.
- **4.4–4.5 ↔ Prov 22:22** [equivalent]: `אַל-תִּגְזָל-דָּל` – the same verb (ḥwrꜥ = `גָּזַל`), jꜣd "wretched" against
  `דָּל`.
- **4.1–4.2, 7.9–7.10 ↔ Prov 4:22, 8:35** [equivalent]: the words are life to those who "find" them, and health to the
  body.
- **5.3–5.6, 4.11, 5.17 ↔ Prov 25:21–22, 20:22, 22:23** [equivalent]: bread for the enemy, shame / coals; leave
  requital to the god.
- **6.1–6.12 ↔ Ps 1:3–4; Jer 17:5–8; Song 2:3** [equivalent / divergence]: the two trees; the good tree's sweet fruit
  and pleasant shade (Song 2:3 has the same pair); Scripture's tree is "planted by water", Amenemope's "grows in an
  orchard", and the bad tree is not a desert shrub but a tree grown indoors, floated off and burned.
- **6.18–7.1 ↔ Prov 27:1; Isa 56:12** [equivalent]: "do not say: today is like tomorrow" – Isaiah's drunkards say it.
- **7.2–7.6 ↔ Isa 19:5–8** [equivalent; 7.6 cognate]: the Nile drying up, the fishermen's `מִכְמֹרֶת`.
- **6.14 ↔ Lev 19:13** [cognate]: ꜥšq is Semitic `עָשַׁק`.

### Lines shared with other texts
- Within AM: 3.17 = 5.18 (and later 17.15), 4.2 = 7.10 – byte-identical Hebrew; 5.19 = 17.16 (later); 4.19 ~ 12.13
  (later: `יָעַח מעמיד את פשעו` – "sꜥḥꜥ btꜣ=f" = `העמיד את פשעו`).
- With the dossier's Merikare: ṯs `הקים` (5.3 = MK E135), kꜣrj `מקדש` (MK E134), ꜥ `זרוע`, nṯr `האל`, ꜣpd `עופות`, rm
  `דגים` – followed; ḫsf (MK E135 `להדוף`) split by sense (1.5 `החזיר`); zꜣw-ꜥ `חלש־הזרוע` (4.5) – MK E135 has
  `החלש` for *sꜣ-ꜥ* (the renderings ask the MK translator to align).

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| ꜥn "return (a report, an answer); turn to" | `הֵשִׁיב` | 1.6, 4.11, 5.17; Prov 22:21 |
| ḫsf (with wšb.t) "reply" | `הֶחֱזִיר (תְּשׁוּבָה)`; "ward off" `הָדַף` | 1.5; MK E135 |
| wšb / wšb.t | `תְּשׁוּבָה` | 1.5, 4.11 (as the brief) |
| wḏꜣ (verb) / (noun) / swḏꜣ | `שָׁלֵם` / `שָׁלוֹם` / `הֶחֱזִיק שָׁלֵם` | 1.2, 1.8, 4.2, 7.10 |
| wḏꜣ "storehouse" | `אוֹצָר` | 4.1 (as §4.3) |
| ḫꜣꜥ "leave, abandon" | `עָזַב` | 4.12, 5.4, 5.16, 6.3 |
| zꜣw tw r "beware of" | `הִשָּׁמֵר לְךָ מִ־` | 4.4 (recurs: 13.x, 16.x …) |
| jmm "give!" / rḏj "put" | `תֵּן` / `שָׂם` | 3.9–3.13, 5.3 / 3.11, 6.7 |
| hꜣw "time, lifetime" | `עֵת` | 3.17 = 5.18 = 17.15 |
| kꜣrj / ḥw.t-nṯr | `מִקְדָּשׁ` / `בֵּית הָאֵל` | 1.9, 2.18, 3.3 / 6.1, 6.14, 7.7 |
| jr (topicalizer) | `הִנֵּה` | 6.1, 7.7 (the renderings' §3a "אֲשֶׁר לְ־" fails before `הַחַם`) |
| ḏꜥ / pḫpḫ / qrjw | `סְעָרָה` / `סוּפָה` / `רַעַם` | 3.15, 5.14 / 4.15 / 4.16 |
| ḫ.t / stꜣ (fire) | `אֵשׁ` / `לֶהָבָה` | 5.14 / 6.6 |
| wsfꜣ | `הִתְאַפֵּק` | 5.8, 5.12 |
| mdwj (verb) | `דִּבֵּר` (`הַדִּבּוּר`) | 5.8, 5.13 (md.t `דָּבָר`) |
| thꜣ (verb / noun) | `פָּגַע` / `פּוֹגֵעַ` | 4.10, 5.12 |
| tꜣ-rʾ | `לוֹהֵט־הַפֶּה` | 5.10 |
| ḥtp "rest" | `נָח` | 3.13 (as §4.4) |
| jnj "bring, fetch" | `הֵבִיא` (passive `מוּבָא`) | 4.13, 6.4, 6.12 |
| gmj | `מָצָא` | 3.18, 4.1, 6.15, 7.9 |
| sꜣj "be sated" | `שָׂבַע` | 5.6, 7.5 |
| ṯm "be ashamed" | `נִכְלַם` | 5.6 |
| jꜣw "old man" / ꜥꜣ "elder, great" / wr "great" | `זָקֵן` / `גָּדוֹל` / `גָּדוֹל` | 4.6 / 4.7 / 1.3, 1.18, 7.8 (ꜥꜣ and wr share `גָּדוֹל`, as §6.6 already has) |
| nb "lord" / nb "owner of" | `אָדוֹן` / `בַּעַל` | 1.16, 6.10 / 2.9–10 |
| smḥr "courtier" | `רֵעַ (הַמֶּלֶךְ)` | 1.4; for 27.17 too |
| sšꜣ "skilled" / jꜣw.t "office" | `בָּקִי` / `מִשְׂרָה` | 1.13 (27.16) |
| jmj-rʾ X | `הַמְּמֻנֶּה עַל X` | 1.13, 1.15, 2.5 |
| nfr.y (grain) | `בָּר` ★ (vocalized) | 1.15, 2.5, 2.6 |
| ḥzw.t "favour" | `חֵן` | 7.8 |
| msḥ / dby / wnš | `תִּמְסָח` / `סוּס־הַנָּהָר` / `תַּן` (vocalized `תַּנִּים`) | 4.16, 7.3 / 7.3 / 7.5 |
| ꜥšq / mkmr.t (Semitic loans) | `עָשַׁק` / `מִכְמוֹרֶת` [cognate] | 6.14 / 7.6 |
| mḥy.t "north wind" | `הַצָּפוֹן` | 4.14 (`רוּחַ` gated) |
| Jꜥḥ (the moon god) | `יָעַח` ★ (name, vocalized) | 4.19 |
| Mnw-kꜣ-mw.t=f / Wn-nfr / Tnj / Ṯꜣ-wr / ꜣbḏw / Snw.t | `מִין־כָּמוּתֶף` / `וֶנֶּפֶר` / `תְּנִי` / `צָ׳א־וֶר` / `אַבְּגֶ׳ו` / `סֶנוּת` | as §3; first-occurrence notes in AM |
| **Fixed lines (§7)** | 3.17 = 5.18 = 17.15 `אם תבלה את עתך ואֵלֶּה בלבך,`; 4.2 = 7.10 `יהיה גופך שלם על פני הארץ.`; 5.19 = 17.16 `ילדיך יִרְאוּ אותן.` | |
| **Gate fix** | the `חם` gate should not take `ל` as the last prefix letter before `חם` (or should list `לחם`, `בלחם`, `ולחם`, `מלחם`, `כלחם` as non-hits) | 5.5 `בלחם` |

### Lessons for the guidelines
- The ★ plene rule needs a mechanical check: the first save was vocalized again, and only the formula check of a
  single line (2.7, `האמתי` vs `האמיתי`) exposed it. A verify warning for lines with more than ~30% vocalized words
  would catch it at once.
- A gate on a two-letter root with up to three prefix letters will hit common words formed with a preposition (`בלחם`):
  test every short gate on `ל`/`ב` + the root's homographs.

## AM 7.11–13.9

### Scope
Part 2 of 5: houses 6–9 (7.11–13.9), 118 lines, all drafted; the base has no lost lines here (only editorial `( )`,
`⟨ ⟩`, `{ }` and two `?`s: 12.6 `jṯi̯(.t)?`). House 6 (7.11–9.8): the boundary stone, the widow's boundary, the false
oath, the land-grabber's ruin, and the two "better" sayings; house 7 (9.9–10.15): riches gained by robbery sink into
the Duat and fly off "like geese"; the greedy man's ship stuck in the mud, the silent man's boat sailing; prayer to the
rising sun; house 8 (10.16–11.11): a guarded tongue, a good report, the burial of the "revered one"; house 9
(11.12–13.9): the full portrait of the hot man. Witness: pStockholm MM 18416 (10.18–13.10).

### Sources consulted
As in part 1: the base and its witness through `data … --wit`; the TLA German after drafting each house; Lange 1925
(chapters 6–7, for the cruxes 7.13–8.8, 9.10–10.15).

### Decisions
- **House 6 against the Torah's vocabulary:** rmnj = `הֵזִיז`, wḏ = `אֶבֶן־גְּבוּל`, tšj = `גְּבוּל` (the 7.12 Hebrew repeats
  1.19's `על גבולות השדות`), hꜣd = `פָּלַשׁ` (7.15 = the renderings' test line), ḫꜣr.t = `אַלְמָנָה`; `הִסִּיג` and `עוֹלָם`
  only in the apparatus (Deut 19:14, 27:17; Prov 22:28, 23:10 with the `עוֹלָם` / `אַלְמָנָה` emendation).
- **The "better" sayings** (`ꜣḫ X r Y` = `מוּטָב X מִ־Y`, §6.3): 8.19–20 `מוטב איפה שנותן לך האל / מחמשת אלפים שלא כדין.`;
  **9.5–9.8 (to be fixed for 16.11–14):**
  - 9.5 `מוטב הדלות ביד האל`
  - 9.6 `מעושר באוצר;`
  - 9.7 `מוטב עוגות כשהלבב נעים`
  - 9.8 `מעושר עמוס צער.`
  (16.13 has another spelling of "cakes", `pꜣwtjw.pl pꜣw,t.pl`: the same Hebrew.)
- **8.16 `ꜣḫ n=k wḏꜣ ḥr-r-rʾ=sn`** triggers the "better" formula only because of the *r* inside the preposition
  `ḥr-r-rʾ`; there is no comparison: `מועיל לך להיות שלם כלפיהם.` with `[סטייה מן הנוסחה]`. (The formula regex could
  exclude `ḥr-r-rʾ`.)
- **8.1 `j:jri̯=k sjꜣꜣ r`** = `תכיר את…` ("recognize", with TLA and Lange), not §3a's suggested `הִזָּהֵר`: here sjꜣ has
  an object and introduces the signs of 8.2–8.8.
- **ḫꜣꜥ**: `עָזַב` kept (9.12, 10.10 `עזובה`), but 11.17 "to throw (a lasso of) words" = `הִשְׁלִיךְ` – a split by sense
  (`עזב את דבריו` is not Hebrew). Proposal below.
- **Field words:** ꜣḥ.t (TLA 191 "Acker" and 228 "Fruchtland") and sḫ.t (141480) all = `שָׂדֶה` (Hebrew has no good third
  word; distinguished in the parse). **Store words:** šꜥꜥ `מַמְּגוּרָה` (8.6, 9.1), mḥr `מַחְסָן` (9.1), šnw.t `אָסָם` (9.3),
  wḏꜣ `אוֹצָר` (9.6).
- **Time words:** ꜥḥꜥw "lifetime, duration" = `מֶשֶׁךְ הַיָּמִים` (7.16, 9.3), apart from hꜣw `עֵת` (but hꜣw in 7.13 means
  "position" = `מָקוֹם`: split by sense, TLA "Umgebung").
- **Repeated structures given the same Hebrew:** km ꜣ.t pꜣy=f X (6.3, 9.3) `בתום רגע – …`; ḥḏ tꜣ (9.4, 9.18) `האירה
  הארץ – …`; mtw=k zꜣw=k r (11.16, 11.20) `והישמר לך מל־…`; swḏꜣ ns=k r (10.21, 11.15) `החזק את לשונך שלמה מ־…`;
  tm ḥry.t jni̯.ṱ=k (8.10, 13.9) `פן תביא אותך האימה.`; jri̯.y=w n=w X (10.2, 10.4) `עשו להם …`.
- **Other new words:** jmꜣḫ "revered (dead)" = `נִכְבָּד` (11.4; 3.5 bw-wꜣy changed to `רָם־מַעֲלָה` to keep `נכבד` for
  jmꜣḫ); ḏbꜣ.t "coffin" = `תֵּבָה` [cognate loanword] (11.4); jp.t = `אֵיפָה` [cognate] (8.19); sḫt "trap, hunt" =
  `צָד` (7.18, 12.9); spḥ "lasso" = `לָכַד בְּלוּלָאָה` (7.19, 11.17); nwḥ = `חֶבֶל־הַמִּדָּה` (7.13; Zech 2:5); dnm =
  `תֶּלֶם`; snk = `הִתְאַוָּה` (7.14; as the dossier's snk `תאווה`, not `חָמַד`); wpj "divide, decide" = `פָּסַק`; sḥtp =
  `הֵנִיחַ אֶת הַדַּעַת` (keeps ḥtp's root); ḫr.t "needs, livelihood" = `מִחְיָה`; ḏꜣr "measure, need" = `שִׁעוּר`; whn =
  `הָרַס`, qd = `בָּנָה` (12.3); wꜥꜣ = `חֵרֵף`, gꜣj = `גִּדּוּף`; wšb (verb) = `עָנָה` (wšb.t `תְּשׁוּבָה`); ḥrj "superior"
  = `מִי שֶׁמֵּעָלֶיךָ`; ḥḏj = `הִזִּיק` / ḥḏ = `הֶזֵּק` (wgꜣ keeps `נֵזֶק`); ḥry.t = `אֵימָה`; bꜣ.w = `עָצְמָה` (as §4.1);
  sḫr = `עֵצָה`; ꜥwn(-jb) = `בַּצְעָן` (Prov 1:19); nḥp "potter" = `קַדָּר` (`יוֹצֵר` stays qmꜣ's); pjpj = `לָשׁ`; jtn =
  `אָטוֹן` ★; jꜥr.t = `אוּרֵאוּס`; ꜥꜣpp = `אַפּוֹפִּיס`; Ḫnmw = `חְנוּם`; dwꜣ.t = `הַדּוּאַת`; Šꜣy / Rnn.t = `שַׁאי` ★ /
  `רֶנֶנֶת`; jwdn "ground" = `קַרְקַע` (shares the word with sꜣtꜣ `קַרְקָעוֹת`); šnꜥ (10.3) = `מַעֲמַקִּים`, šnꜥ "storm cloud"
  (13.2) = `עָבִים`; dmj "join, touch" = `נִצְמָד` (4.15, 13.5); bsj "enter" (12.15) = `בָּא` (2.17 "install" `הוֹשִׁיב`:
  split by sense).

### Open decisions for the user
- 12.2 *ḥꜣ.t* (TLA "a body of water, river mouth?") – rendered `*השפך*?`.
- 9.20 *ꜥqꜣ* "made them level" (TLA) – rendered `יישרה?`; Lange left it untranslated.
- 10.9 *ḏr.t* "his hand" (Lange) or "his troop" (TLA) – kept as `ידו` with both in the note.

### Progress log
- Drafted house by house (6; 7; 8–9), `fill` + `verify AM` after each (0 problems apart from the stale translation
  until `build`).
- Pass (a): every negation (the m-jri̯ / mtw=k chains; bw jri̯=f sḏm 9.1–9.2, 11.9; nn 9.11, 9.17; bn 9.18; tm 8.10,
  13.9), tense (statives 9.4, 10.3, 10.5, 10.10, 12.8; prospective 10.14, 12.15) and the TLA's two analyses (9.7, 12.7)
  checked. After the TLA: 7.17 ("it belongs to the field"), 8.1 ("recognize"), 8.12 (`הפוסק`), 9.8 (`עמוס`), 9.11 (the
  gods as subject), 10.9 (`משאירה`), 12.2, 12.15 ("again").
- Pass (b): the repeated structures above byte-identical; the house-heading formula; `הַחַם` (11.13) and `השותק` (10.11);
  §10.1 renderings followed (ꜥn not in this part; zꜣw tw r `הישמר לך מ־` 8.9, 8.14; jnj `הביא`; swḏꜣ `החזיק שלם`).
- Pass (c): read `translation-AM.rtl.md`, houses 6–9, aloud; no change needed beyond the drafts.
- `build AM`: 242 lines, 17 footnotes; `check_bible_quotes.py` (annotated, intro, both translations): 0 problems;
  `verify AM`: 0 problems.

### The text on its own terms
- **The surveyor's sin and its punishment** (7.12–8.8): moving a stone, uprooting the measuring cord, ploughing one
  extra furrow "shortens the lifetime"; the land-grabber "hunts" the field with false oaths and is himself lassoed by the
  Moon – the punishment mirrors the crime, down to his granaries and his children's inheritance.
- **The boundaries belong to a god** (8.11–8.14): the "Lord of All" (*nb-r-ḏr*, "lord to the limit") decided them.
- **Wealth as a living thing** (9.16–10.5): ill-gotten riches do not "sleep" at your house; the ground opens its mouth
  and swallows them into the Duat, or they make themselves wings like geese.
- **Fate and Fortune** (9.11–9.13): Shai and Renenet know every man; every man belongs to his hour.
- **Two boats** (10.10–11): the greedy man's big ship stuck in the mud, the silent man's small boat sailing – with a pun
  on *mꜣꜥ* "sail" / "true".
- **Daily prayer to the rising sun** (10.12–15): "give me well-being and health" – the king's blessing in a commoner's
  mouth.
- **The good name and the good burial** (10.17–11.5): goodness "in people's bellies", a share of the temple's loaves,
  the coffin (`תֵּבָה`) that hides the revered dead from the god's wrath.
- **Protect the fugitive** (11.7).
- **The hot man as anti-creator** (12.3, 12.15–17): he tears down and builds with his tongue as the god does (24.15),
  and Khnum the potter is asked to come again and re-knead him.
- **The hypocrite's anatomy** (12.11–13.7): eats inside, answers outside; sweet lips, bitter tongue, fire in the belly.

### Key parallels
- **7.12–7.15 ↔ Deut 19:14, 27:17; Prov 22:28, 23:10–11** [equivalent]: the boundary stone; "the widow's boundaries"
  is the basis of the emendation `גְּבוּל אַלְמָנָה` for `גְּבוּל עוֹלָם` in Prov 23:10; the Moon's lasso against the
  `גֹאֲלָם חָזָק` of 23:11.
- **9.5–9.8, 8.19–20 ↔ Prov 15:16–17, 16:8, 17:1** [equivalent]: the "better" sayings, the same form.
- **9.10–10.5 ↔ Prov 23:4–5** [equivalent / divergence]: `אַל-תִּיגַע לְהַעֲשִׁיר`; `עָשֹׂה יַעֲשֶׂה-לּוֹ כְנָפַיִם` = *jrj n=w
  dnḥ* (the same verb and noun); geese against `כְּנֶשֶׁר`; `וְאֵינֶנּוּ` ↔ 9.19 "and they are not".
- **9.19 ↔ Ps 37:10** [equivalent]: `וְהִתְבּוֹנַנְתָּ עַל-מְקוֹמוֹ וְאֵינֶנּוּ`.
- **9.20 ↔ Num 16:32** [equivalent]: the ground opened its mouth and swallowed them (and Korah's goods).
- **11.13–14, 13.8–9 ↔ Prov 22:24–25** [equivalent / divergence]: the hot man, the same two prohibitions in the same
  order, and the closing "lest".
- **11.4 ↔ Gen 6:14, Ex 2:3** [cognate]: *ḏbꜣ.t* "coffin" is the source of `תֵּבָה`; **8.19 ↔ Deut 25:15** [cognate]:
  *jp.t* = `אֵיפָה`.
- **11.7 ↔ Deut 23:16** [equivalent]: do not betray the fugitive.
- **12.15–16 ↔ Jer 18:6; Isa 64:7** [equivalent]: the god as potter of the human vessel.

### Lines shared with other texts
- Within AM: 7.12 repeats 1.19's Hebrew (`אבן־הגבול … על גבולות השדות`); 9.5–9.8 → 16.11–16.14 (to be fixed); 8.10 =
  13.9; 6.3 ~ 9.3; 9.4 ~ 9.18; 12.13 ~ 4.19; 12.3 ~ 24.15 (later: `הוא הורס והוא בונה`); 13.8 ~ 22.22 (later: `אל תעוף
  …`); 7.14 ~ 14.5, 18.8 (later: `אל תתאווה ל…`); 7.13 ~ 10.7 (only the structure).

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| **Fixed lines (§7)** 9.5–9.8 = 16.11–16.14 | `מוטב הדלות ביד האל` / `מעושר באוצר;` / `מוטב עוגות כשהלבב נעים` / `מעושר עמוס צער.` | the "better" saying |
| 8.10 = 13.9 | `פן תביא אותך האימה.` | |
| ḫꜣꜥ "throw (words, a lasso)" | `הִשְׁלִיךְ` (beside `עָזַב` "leave") | 11.17 |
| jmꜣḫ / bw-wꜣy | `נִכְבָּד` / `רָם־מַעֲלָה` | 11.4 / 3.5 |
| ꜥḥꜥw "lifetime, duration" | `מֶשֶׁךְ הַיָּמִים` | 7.16, 9.3 |
| snk "be greedy" | `הִתְאַוָּה` (`חָמַד` never) | 7.14 (14.5, 18.8 later) |
| sḫt / spḥ | `צָד` / `לָכַד בְּלוּלָאָה` | 7.18, 12.9 / 7.19, 11.17 |
| nwḥ / dnm | `חֶבֶל־הַמִּדָּה` / `תֶּלֶם` | 7.13 / 7.16, 8.15 |
| ḫr.t / ḏꜣr | `מִחְיָה` / `שִׁעוּר` | 8.17, 9.15, 10.14 / 10.2, 11.19 |
| šꜥꜥ / mḥr / šnw.t | `מַמְּגוּרָה` / `מַחְסָן` / `אָסָם` | 8.6, 9.1, 9.3 |
| ꜣḥ.t, sḫ.t | `שָׂדֶה` (both) | |
| whn / qd | `הָרַס` / `בָּנָה` | 8.3, 12.3 (24.15) |
| wšb (verb) | `עָנָה` | 11.15 |
| wꜥꜣ / gꜣj | `חֵרֵף` / `גִּדּוּף` | 11.16 / 12.4 |
| ḥḏj / ḥḏ | `הִזִּיק` / `הֶזֵּק` | 10.21, 12.1, 13.3 / 12.6 |
| ḥry.t | `אֵימָה` | 8.10, 10.15, 13.9 |
| sḫr | `עֵצָה` | 11.7 (19.x later) |
| nḥp | `קַדָּר` | 12.16 |
| ꜥwn(-jb) | `בַּצְעָן` | 10.10 |
| ḥrj "superior" | `מִי שֶׁמֵּעָל־` | 11.15 |
| jꜥr.t / ꜥꜣpp / jtn / Ḫnmw | `אוּרֵאוּס` / `אַפּוֹפִּיס` / `אָטוֹן` ★ / `חְנוּם` | 10.19, 10.20, 10.12, 12.15 |
| j:jri̯=k sjꜣꜣ r X | `תַּכִּיר אֶת X` (when sjꜣ has an object) | 8.1 (§3a's `הִזָּהֵר` for the absolute use) |
| **Formula regex** | exclude `ḥr-r-rʾ` from the "better" trigger | 8.16 |

### Lessons for the guidelines
- A formula keyed on a one-letter word (`r`) needs word boundaries that exclude compound prepositions (`ḥr-r-rʾ`).

## AM 13.10–19.9

### Scope
Part 3 of 5 (the second translator, continuing the first translator's file): houses 10–17 (13.10–19.9), 126 lines, all
drafted. The base has four small lacunae (14.7, 14.10, 16.8, 18.12 `[…]`) and editorial supplements only (`⟨wḏꜣ,t⟩`
18.15, `⟨ꜥqꜣ⟩` 18.19, `⟨mt(r,t)⟩` 16.1). House 10 (13.10–14.3): do not greet the hot man falsely, do not split heart
from tongue – "the abomination of the god"; 11 (14.4–15.7): do not covet the poor man's goods – the mouthful swallowed
and vomited; the beaten overseer of the poor; 12 (15.8–15.18): the steward of an official's estate; 13 (15.19–16.14):
the pen, the false testimony, the tax account, the debt cut by two thirds, and the second "better" saying; 14
(16.15–17.3): do not fawn on the great; 15 (17.4–17.16): the Ibis's beak is the scribe's finger, the baboon's roaming
eye; 16 (17.17–18.13): the hand-balance, the kite-weights, the measure, the baboon beside the balance, gold turned to
lead; 17 (18.14–19.9): the Udjat measure, the oipe that holds two, "the oipe is the Eye of Re", the corn-measurer.
Witness: pStockholm MM 18416 (to 14.3, its last line is the heading of house 11).

### Sources consulted
The base and its witness through `data … --wit`; the TLA German (`tr`) and Lange 1925 (OCR, chapters 10–17), both read
after drafting each house (my first save of house 10 quoted Lange from memory – caught and replaced with the OCR text
before the next house; see Lessons). No modern translation quoted; Lichtheim etc. not cited.

### Decisions
- **Plene, unvocalized `>` lines from the first save** (checked: house 10 was plene).
- **Lemmas fixed in this part (one Hebrew each):** shꜣ "pervert, cheat" = `עִוֵּת` (14.10, 15.20, 17.11, 17.13, 18.6,
  18.11, 19.2; Lam 3:36 `לְעַוֵּת אָדָם בְּרִיבוֹ`, Amos 8:5 `וּלְעַוֵּת מֹאזְנֵי מִרְמָה`; also 20.21 later); sꜥḏꜣ
  "falsify" = `זִיֵּף` (14.2, 16.4, 17.18, 18.16; later 20.9, 21.13); msḏj "hate" = `שָׂנֵא` (14.2, 15.12, 15.16, 18.9);
  ḫbd "blame" = `מְגֻנֶּה` (15.5); bꜥꜣ "spurn" = `מָאַס` (16.19); wšd "greet" = `בֵּרַךְ` (13.11, 16.22, as 10.18);
  jꜣw.tw=k = `"הלל לך!"` (13.13, 16.22); gꜣnjsꜣ "compulsion" = `כְּפִיָּה` (13.11, 18.17; 8.20's `m-gꜣnjsꜣ` is another
  TLA lemma); dns "weighty" = `כְּבַד־מִשְׁקָל` (13.19; 20.3 later); pšn = `הִפְרִיד` (13.17; `הִבְדִּיל` avoided);
  sḫpr = `קִדֵּם` (14.9); whꜣ = `הִכְשִׁיל` / `כּוֹשֵׁל` (14.12–13); ntf = `פָּרוּעַ` (15.4, keeping 11.18's root);
  wjꜣwjꜣ = `נָבוֹךְ`; sḏd (noun) = `שִׂיחָה`; swnwn = `חֲנֻפָּה`; sḥwr = `קְלָלָה`; sn-tꜣ = `נְשִׁיקַת־הָאָרֶץ`
  (literal); ꜥmꜣm / bšj = `בָּלַע` / `הֵקִיא` (14.17; Job 20:15 has both); šwj = `רֵיק`; ḥjy = `פָּקִיד` (14.19; 24.17
  later); šbd = `מַקֵּל`; pḫꜣ.t = `כֶּבֶל`; nmj.t = `סַפְסַל־הַטֶּבַח`; smd.t = `פְּקוּדִים`; rq / rqj = `צוֹרֵר` (as 5.12);
  rwḏ.w = `סוֹכֵן` (15.11; Isa 22:15); wḥm = `שָׁנָה` (15.18; 24.1 later); ḥsb = `חֶשְׁבּוֹן`; wḏꜣ.t "arrears" = `חוֹב`
  (16.5); ꜥr / ꜥr.t = `עֵט` / `מְגִלָּה` (Jer 8:8); mtr.t = `עֵדוּת` (`הֵעִיד עֵדוּת`); jnw = `מַתָּנָה`; ꜣ.tj
  "have-not" = `חֲסַר־כֹּל` (a fifth poverty word, kept apart from nmḥ/twꜣ/jꜣd/zꜣw-ꜥ); nw "look; glance" = `הִבִּיט` /
  `מַבָּט`; Hbj = `הָאִיבִּיס`; jꜥnꜥ = `בַּבּוּן` (never `קוֹף`); Pr-Ḫmnw = `בֵּית־חֶמְנוּ`; drp = `מָנָה` (as 11.3); mꜥdn =
  `נִרְשַׁם`; jws = `פֶּלֶס`, mḫꜣ.t = `מֹאזְנַיִם`, qd.t = `קֶדֶט` (pl. `קְדָטִים`), dbḥ = `מִדָּה` (all as renderings
  §4.3); rʾ "part, fraction (of a measure)" = `פִּיּוֹת` (17.19, 18.16: keeps rʾ = `פֶּה`, and Hebrew `פִּי שְׁנַיִם` is
  "a portion"; `חֵלֶק` stays dnj.t's); pr-ḥḏ = `בֵּית־הַכֶּסֶף` (literal, apart from wḏꜣ `אוֹצָר`); dḫj = `מִשְׁקֹלֶת`
  (Isa 28:17); ꜥꜣ (noun) "greatness, size" = `גְּדֻלָּה` / `גֹּדֶל`; swꜣ "pass by" = `חָלַף` (`עָבַר` is snj's, 7.1);
  tjḥs.t = `נְחֹשֶׁת`; šmꜥ = `בַּד דַּק` (`שֵׁשׁ` stays šs's); ktm.t = `כֶּתֶם` [cognate: loanword] (18.12); dḥtj =
  `עוֹפֶרֶת`; ḫꜣj / ḫꜣ.y = `מָדַד` / `הַמּוֹדֵד`; ẖꜥꜣ = `הֵרִיק` (as 7.6); mtj = `דִּיּוּק`; ꜥqꜣ = `יָשָׁר` (with sꜥqꜣ 1.7);
  jṯj "thief" = `גַּנָּב`; ḏbꜥ (verb) "seal" = `טָבַע` (19.3; the root of the loan `טַבַּעַת`; `חָתַם` stays ḫtm's);
  šmw "harvest (tax)" = `קָצִיר` (as 6.9; a homograph of šmm "the hot man", noted); ꜥḥwtj = `אָרִיס` (see open
  decisions); mꜣwr = `כָּתַב`; ḥbꜥ = `שִׂחֵק`; ṯꜣs = `מַס`; ẖnw "Residence" = `הַבִּירָה`; ḏnw = `מְדוּשָׁה` (`גֹּרֶן` is
  ḫtjw's, 8.18 – so Ruth 3:2 `גֹּרֶן הַשְּׂעֹרִים` stays in the apparatus); s.t-wr.t = `הַכִּסֵּא הַגָּדוֹל`.
- **Two "ways":** mj.t = `דֶּרֶךְ` (fixed by 1.7 `דרך החיים`, so 16.8 `כדרך החיים` repeats it), wꜣ.t = `אֹרַח` (15.6,
  16.8). **15.6 was changed** from `שבדרך` to `שבאורח` when 16.8 showed the collision.
- **Splits by sense (noted at the lines):** ꜥꜣ "much" `רַב` (14.17, 15.10) beside `גָּדוֹל`; sp "occasion" `פַּעַם` (17.3)
  beside `עִנְיָן`; jwṯꜣ "someone" `מִישֶׁהוּ` (15.3) / "which?" `אֵיזֶה` (18.2); wbn of grain `גְּלִישָׁה` (18.17) beside the
  sun's `זוֹרֵחַ` (10.12); twr r "keep apart from" `הִנָּזֵר מִן` (15.7; Lev 22:2) – twr "respect" recurs in 25.7, 25.9,
  26.14, 27.12 (to be settled in part 5: `הִנָּזֵר` will not fit "respect him"; I propose `נָהַג כָּבוֹד` there or a single
  verb chosen then); the TLA's one lemma thꜣ / twhꜣ kept apart as part 1 did: `פָּגַע` (17.6, 19.5) vs `הִרְחִיק` (17.2,
  like 5.16 `הִתְרַחֵק`).
- **ḫpr in the future** (13.18–19) = `יִהְיֶה`: Hebrew `נִהְיָה` (renderings §4.4) has no usable future.
- **Readings chosen where the TLA and Lange differ:** 13.12 a prohibition (`ואל תזיק`, both; I had first drafted a
  consequence); 13.14 `אימה?` (Lange, renderings §10.2) against the TLA's "Berechnung"; 15.12 imperative (TLA) against
  Lange's "his welfare hates yours"; 16.18–19 one quoted speech (Lange) against the TLA's narrator in 16.19; 17.5
  `יֵשׁ?` (TLA "Wohlstand") against Lange's "what I am"; 19.7 "tax" (TLA) against Lange's "proverb".
- **Gates:** no gate blocked a right word. `קוֹף`, `שֹׁחַד`, `שָׁמַט`, `חָתַם`, `קָרַץ` (Akkadian *karāṣu*'s), `גֹּרֶן`
  (ḫtjw's) were avoided by the rules, not by the tool.

### Open decisions for the user
- ~~19.4 ꜥḥwtj "tenant" = `אָרִיס`~~ **Settled by the coordinator (renderings §10.3.2):** `חוֹכֵר` – `אָרִיס` is the
  Hebrew loan of Akkadian *errēšu* (the law corpus), so the cognate keeps it (guidelines §5.2).
- ~~15.11 rwḏ.w = `סוֹכֵן`~~ **Settled (§10.3.2):** `סוֹכֵן` stays – in Gudea (*aĝrig*) and the Advice (*šatammu*, not
  *šākin*) it is a sense rendering too, so no cognate claims it.
- 17.1 and 18.5 remain obscure (`שיחדל, ויבוא קצך?.`, `רבים הם הגדודים? שבעצמת האל.`); 14.11–14.12 likewise.

### Progress log
- Drafted house by house (10; 11; 12–13; 14–15; 16; 17), each saved at once and followed by `fill` + `verify AM` (0
  problems apart from the stale translation before `build`).
- Pass (a) fidelity: every negation (the m-jri̯ / mtw=k chains; `nn` 16.19, 17.14; `tm` 15.18), the conditionals
  `wnn=k … jw=k` (14.13–14, 15.4–5), the second tenses (14.9, 14.19, 15.6, 18.7, 18.22), the statives and the TLA's two
  analyses (13.14, 16.11, 16.13) checked; brackets: four `[…]` kept, `⟨ ⟩` not carried. Changes: 13.12 (prohibition),
  18.19 (`הנח לה למדוד`, matching the negative `m-ḏr.tj` = `אל תניח` of 18.18).
- Pass (b) consistency: the renderings §4/§10 words and every recurring lemma checked by `lex`; the fixed lines 16.12–14,
  17.15–16 and the formula 13.16 = 15.21 byte-identical (`verify`: 0 repeated-line differences); the heading formula;
  new strings grepped (`grep`, `grep --all`). Changes: 15.5 ḫbd `מאוס` → `מגונה` (to free `מָאַס` for bꜥꜣ), 15.6
  `שבדרך` → `שבאורח`, 16.9 `תשכב` → `תישן` (sḏr = `יָשַׁן` as 5.13, 9.17).
- Pass (c) Hebrew: read the generated `translation-AM.rtl.md` (houses 10–17) aloud; no further change.
- Quotes: every verse printed before quoting; `check_bible_quotes.py` on the annotated file, the intro, both
  translations and project.md: 0 problems (three bare "Book ch:v" mentions after a backticked word were read as Genesis
  and rewritten). `build AM`: 368 lines; `verify AM`: 0 problems (non-strict; 183 lines placeholder); `selftest`: 0
  failures.

### The text on its own terms
- **The heart and the tongue as one** (13.17, 14.3): duplicity is a split body, "the sorrow (Lange: the strife) of the
  belly" – the same pair heart/tongue with which Ptah creates in the Memphite Theology.
- **Taboo turned ethics** (13.16, 15.21, 19.1): *bw.t*, the cult taboo of a god or a nome, becomes the god's horror of
  lies, forged documents and the thief of the measure; pStockholm writes "great crime" for it at 14.3.
- **The stolen bite** (14.7–14.18): the poor man's goods block the throat and wound the gullet; the big mouthful is
  swallowed and vomited – the body rejects what was taken.
- **The office as a moral world** (15.8–16.7, 17.20–19.9): stewards, tax assessors, scribes, corn-measurers; the sins
  are professional (a private measure against the treasury's, a double oipe, a false entry), and so is the punishment
  (the son not enrolled, 17.14; no further commission, 15.18).
- **Mercy as policy** (16.5–16.10): cut a poor man's arrears to a third – and sleep until morning; the reward is a quiet
  night and the love of people, "better than riches in the storehouse".
- **The gods who watch the scribe** (17.7–17.12, 17.22–18.3): Thoth as ibis (his beak is the scribe's finger) and as
  baboon (sitting in Hermopolis, his eye roaming the Two Lands; sitting on the balance, his heart the plummet) – the
  weighing of the heart in the judgement of the dead is present at every market scale.
- **Measures are divine eyes** (18.15, 18.23): the Udjat measure is the healed eye of Horus, the oipe the Eye of Re;
  fraud in measuring wounds a god's eye, and the eye "seals" the cheat's sentence (19.3).
- **Morning reveals** (18.13, as 9.4, 9.18): at dawn the falsely gained gold is lead.
- **A sober realism** (19.8–19.9): the power of the threshing floor (the temptation of grain lying before you) is
  greater than an oath by the Great Throne.
- **Words between the languages** (18.12): one line holds a Semitic loan in Egyptian (ꜥšq `עָשַׁק`) and an Egyptian
  word that Hebrew borrowed (ktm.t `כֶּתֶם`).

### Key parallels
- **18.21–19.1 ↔ Deut 25:13–16; Prov 20:10; Mic 6:10** [cognate / divergence]: `אֵיפָה` is the Egyptian *jp.t*; "an oipe
  that takes two" against "אֵיפָה וְאֵיפָה"; "its abomination is the thief" stands exactly where Deuteronomy and
  Proverbs say `תּוֹעֲבַת יְהוָה`.
- **17.18–18.3 ↔ Prov 16:11; Lev 19:35–36; Prov 11:1, 20:23** [equivalent]: two balance words (*jws* `פֶּלֶס`, *mḫꜣ.t*
  `מֹאזְנַיִם`) as in `פֶּלֶס וּמֹאזְנֵי מִשְׁפָּט`; the weights are the invention of Thoth as they are `מַעֲשֵׂהוּ` of the Lord.
- **18.23 ↔ Zech 5:6–8** [equivalent]: "this is the ephah … this is their eye in all the land" and the lead stone on its
  mouth – the oipe is the Eye of Re, and the false gold becomes lead (18.13).
- **14.5–14.18 ↔ Prov 23:6–8; Job 20:15** [equivalent / divergence]: the same verb (snk = `הִתְאַוָּה` = `תִּתְאָו`), the
  bread, the mouthful swallowed and vomited (`פִּתְּךָ-אָכַלְתָּ תְקִיאֶנָּה`; Job `חַיִל בָּלַע וַיְקִאֶנּוּ`) and the lost
  "pleasant words"; but Proverbs' host is `רַע עָיִן`, Amenemope's victim is the poor.
- **13.15–16, 15.20–21 ↔ Prov 12:22; 6:16–17** [equivalent]: `תּוֹעֲבַת הָאֵל` = `תּוֹעֲבַת יְהוָה`; "the god hates … his
  great abomination" = `שָׂנֵא יְהוָה … תּוֹעֲבַת נַפְשׁוֹ`.
- **15.20, 16.4, 17.6 ↔ Jer 8:8; Isa 10:1–2** [equivalent]: the scribe's lying pen.
- **16.5–16.7 ↔ Deut 15:1–2; Neh 5:10** [divergence / equivalent]: partial remission at the official's discretion against
  the Torah's septennial `שְׁמִטָּה`; ḫꜣꜥ "release" = `עָזַב` as in `נַעַזְבָה נָּא אֶת הַמַּשָּׁא הַזֶּה`.
- **16.11 ↔ Prov 22:1** [equivalent]: favour (`חֵן`) and love better than riches – the verse that opens the chapter of
  "the words of the wise".
- **18.2 ↔ Ps 77:14; Ex 15:11** [equivalent]: "which god is as great as Thoth" / `מִי-אֵל גָּדוֹל כֵּאלֹהִים`.
- **17.10 ↔ Zech 4:10; Prov 15:3** [equivalent]: the god's roaming eye.
- **18.12 ↔ Job 28:16; Song 5:11; Prov 25:12** [cognate: loanword]: ktm.t = `כֶּתֶם`.

### Lines shared with other texts
- Within AM, copied byte for byte: 16.12–16.14 = 9.6–9.8 and 17.15–17.16 = 3.17 / 5.19 (renderings §7); 15.21 = 13.16
  (`תועבת האל.`). 16.11 keeps only the frame `מוטב …` of 9.5 (the Egyptian differs).
- Repeated structures given the same Hebrew: 14.5 / 18.8 ~ 7.14 `אל תתאווה ל…`; 14.13 ~ 15.4 `אם … אתה לפני מי
  שמעליך,`; 14.17 ~ 15.10 `מילוי (ה)פה בלחם רב`; 16.10 ~ 3.18 `תמצא …`; 16.17 ~ 9.14 `תתאמץ לבקש`; 17.9 ~ 17.22
  `יושב הבבון …`; 17.11 ~ 17.13 `המעוות באצבעו`; 17.19 ~ 18.16 `פיות`; 18.13 ~ 9.4, 9.18 `האירה הארץ – …`; 15.6 ~ 1.10
  `להטות את משוטו מן`; 16.2, 17.8, 17.18 ~ 7.12 `הזיז`; 16.8 ~ 1.7 `דרך החיים`; 18.4 ~ 21.9 later (`אל תעשה לך …`); 19.5 ~
  24.12 later (`…, שייפגע`); 14.1 ~ 24.20 later (`… שלם ביד האל`); 15.14 ~ 22.14 later (`ואל תתחבר אל …`); 16.17 ~ 19.19,
  27.3 later.

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| shꜣ "pervert, cheat" | `עִוֵּת` | 14.10, 15.20, 17.11–13, 18.6, 18.11, 19.2; 20.21 later (Lam 3:36, Amos 8:5) |
| sꜥḏꜣ | `זִיֵּף` | 14.2, 16.4, 17.18, 18.16; 20.9, 21.13 later |
| msḏj / ḫbd / bꜥꜣ | `שָׂנֵא` / `מְגֻנֶּה` / `מָאַס` | 14.2, 15.12, 15.16, 18.9 / 15.5 / 16.19 |
| wšd; jꜣw.tw=k | `בֵּרַךְ`; `"הלל לך!"` | 10.18, 13.11, 16.22; 13.13, 16.22 |
| gꜣnjsꜣ | `כְּפִיָּה` | 13.11, 18.17 |
| dns | `כָּבֵד` (`כְּבַד־מִשְׁקָל`) | 13.19; 20.3 later |
| wḥm | `שָׁנָה` | 15.18; 24.1 later |
| mj.t / wꜣ.t | `דֶּרֶךְ` / `אֹרַח` | 1.7, 16.8 / 15.6, 16.8 |
| rʾ "part (of a measure)" | `פִּיּוֹת` (`פֶּה`) | 17.19, 18.16 |
| ḏbꜥ "finger" / ḏbꜥ "to seal" | `אֶצְבַּע` / `טָבַע` | 17.7–13 / 19.3 (`חָתַם` stays ḫtm's, 19.21) |
| ktm.t | `כֶּתֶם` ★ (vocalized) [cognate: loanword] | 18.12 (add to renderings §4.2) |
| jꜥnꜥ / Hbj / Pr-Ḫmnw | `בַּבּוּן` / `הָאִיבִּיס` / `בֵּית־חֶמְנוּ` | 17.7, 17.9, 17.22 |
| ḥjy | `פָּקִיד` | 14.19; 24.17 later |
| ꜣ.tj "have-not" | `חֲסַר־כֹּל` | 16.19 (the poverty words: nmḥ `דַּל`, twꜣ `עָנִי`, jꜣd `אֻמְלָל`, zꜣw-ꜥ `חֲלַשׁ־זְרוֹעַ`) |
| swꜣ "pass by" | `חָלַף` | 18.7 (`עָבַר` is snj's) |
| ḫꜣj / ḫꜣ.y | `מָדַד` / `הַמּוֹדֵד` | 18.19, 19.2, 19.6 |
| pr-ḥḏ / dḫj | `בֵּית־הַכֶּסֶף` / `מִשְׁקֹלֶת` | 17.21 / 18.1 |
| ḏnw | `מְדוּשָׁה` (ḫtjw keeps `גֹּרֶן`) | 19.8 |
| twr | `הִנָּזֵר מִן` (with r); "respect" to be settled in part 5 | 15.7; 25.7, 25.9, 26.14, 27.12 |
| ḫpr (future) | `יִהְיֶה` (amend renderings §4.4: `נִהְיָה` has no future) | 13.18–19 |

### Lessons for the guidelines
- **"Read the rank-3/5 translation after drafting" also means: never write its wording before reading it.** I wrote
  Lange's German for house 10 from memory into the תרגומים bullets and found every quote wrong when I opened the OCR;
  write the תרגומים bullet only with the source open.
- **`check_bible_quotes.py` reads a bare "ch:v" after a backticked Hebrew word as Genesis** (a backticked word followed by
  the Hebrew words "in Proverbs 8:21" was checked against Gen 8:21): put the reference in parentheses right after the quotation, `` `…` (Book ch:v) ``, or none at all.

## AM 19.10–24.20

### Scope
Part 4 of 5 (the second translator): houses 18–25 (19.10–24.20), 121 lines, all drafted. Lacunae: 22.2, 22.4, 23.16
(`[…]`); scribal omissions supplied by the editor (`⟨r⟩` 19.11, `⟨n⟩ ⟨ky⟩` 24.1 from tTurin, the missing verb of 22.15,
`⟨ḏi̯⟩` 22.21). House 18: "one thing are the words men say, another what the god does"; no one is without sin, sin
is sealed by the god's finger; the tongue is the boat's oar, the Lord of All its pilot. 19: truth in court before the
official. 20: the judge – do not cheat a man in court, take no reward from the strong; truth is the god's gift; false
journals and oracles. 21: do not seek a strong patron – sit in the god's arms (refrain 22.5–8); do not empty your
belly to all. 22: the opponent in argument – stay calm, let him empty his own belly (refrain 23.8–11). 23: eating
before an official; look at the bowl before you. 24: the official's secrets; "the heart of man is the nose of the
god". 25: the blind, the dwarf, the lame; man is clay and straw, the god his builder. Witness: tTurin CGT 58005
(23.22–24.20 and on).

### Sources consulted
As in part 3: base and witness through `data … --wit`; the TLA German and Lange 1925 (OCR, chapters 18–25), read after
drafting each house and quoted only from the open text.

### Decisions
- **The refrain fixed by its first copy** (22.5–22.8 → 23.8–23.11, byte-identical; 23.11's `p⟨ꜣy⟩=k` for `pꜣyw=k` is
  spelling only): `ובכן, אינך יודע את עצות האל,` / `פן תיכלם מחר.` / `שב לך בזרועות האל,` / `שתיקתך תפיל אותם.`
  (ḫr-rʾ-ꜥ `וּבְכֵן` §3a; bw rḫ=k `אינך יודע`; tm `פֶּן`; ṯm `נִכְלַם`; ꜥ.wj `זְרוֹעוֹת` as 5.4; gr "silence" `שְׁתִיקָה`;
  ḥdb `הִפִּיל`). Proposed for renderings §7.
- **New lemmas:** mnḫ (noun) = `מַעֲלָה` (19.14, 19.22, 20.1, 22.17; mnḫ participle 14.11 `מְעֻלֶּה`); whꜣ (noun) =
  `כִּשָּׁלוֹן`; rwj … rwj = `לְחוּד … לְחוּד` (19.16–17); ḫm = `לא הִכִּיר` (as 9.11); ḫtm = `חָתַם` (19.21, the loan,
  licensed); stꜣ "protector" = `מְגוֹנֵן` (22.3; TLA "Erlöser" – `גֹּאֵל` never; `מָגֵן` avoided as a trap); ḥrj
  (noun, "superior") = `מִי שֶׁמֵּעַל` (22.1, as 11.15); ḥrj "fear" = `פָּחַד` (19.11); snḏ = `חָשַׁשׁ` (23.7; `יָרֵא`
  avoided, the Akkadian corpora reserve it for *palāḫu*); mkḥꜣ = `הִתְעַלֵּם` (23.7, 24.5; `הִזְנִיחַ` is wnj's); šww
  (caus. of šwj) = `הֵרִיק` (22.11, 23.4) and therefore ẖꜥꜣ = `רוֹקֵן` (7.6 `מרוקנות`, 22.9) – **18.20 changed** from
  `מריקה` to `מרוקנת`; qnb.t "court" = `מוֹעֶצֶת־הַשּׁוֹפְטִים` (20.8, 20.21; not `בֵּית דִּין`: `דִּין` is the cognate of
  Akkadian *dīnu* – the §10.3.2 rule – and not `שַׁעַר`, which would manufacture Prov 22:22); s.t-smtr / smtr =
  `בֵּית־הַחֲקִירָה` / `חֲקִירָה`; mtr "witness" = `עֵד`; mꜥbꜣ.yt = `הַשְּׁלֹשִׁים` (20.18, the court of Thirty – the
  gate passed); spr = `הִתְיַצֵּב`; hꜣn = `הִסְכִּים`; sḫm = `שָׁלַט`; mꜣꜥ.tj = `הָאֲמִתִּי` (20.22; `צַדִּיק` never); sḏw
  "kilt" = `חֲגוֹר`; ḥtꜣ = `בָּלוּי`; fꜣ.t "gift (borne)" = `מַשְׂאֵת` (21.5; Gen 43:34; apart from jnw `מַתָּנָה`, fqꜣ
  `שָׂכָר`); pḥ.tj = `כֹּחַ`; šdj = `חִלֵּץ` (`הִצִּיל` is nḥm's); hrw "journal" = `יוֹמָן`; štm = `הִתְגָּרָה` /
  `הִתְגָּרוּת`; sḏfꜣ-tr = `(שבועת) הַנֶּאֱמָנוּת`; wḥm.w "herald" = `מַזְכִּיר` (21.12, [equivalent] 2 Sam 8:16); bjꜣ.t
  "oracle" = `מוֹפֵת?`; swḏ = `מָסַר`; qs = `עֲצָמוֹת` (plural, so as not to read `עַצְמְךָ` = ḏs); ꜥq "enter" =
  `נִכְנַס`; ṯsj hꜣj = `עָלָה וְיָרַד`; mꜣꜣ "see" = `חָזָה` (23.1; ptr keeps `רָאָה`, nw `הִבִּיט`); srf = `הִשְׁקִיט`;
  qdd "sleep" = `נָם` (sḏr keeps `יָשַׁן`); rd = `רֶגֶל`; jrj "fellow" = `עָמִית`; ḫnw = `אִמְרָה` (as 12.4); šfj.t =
  `יְקָר` (22.10, vocalized; `כָּבוֹד` reserved elsewhere); nrw = `מוֹרָא` (22.12; `הָדָר` avoided: `נֶהְדָּר` is šps's,
  2.18); njs (noun) = `צְעָקָה`; prj-jb = `יוֹצֵא־הַלֵּב` (literal, hyphenated against the Hebrew idiom of fear); qmꜣm
  "rush" = `הִסְתָּעֵר` (not qmꜣ: `יָצַר` untouched); ꜥqw "ration-bread" = `פַּת` (tʾ keeps `לֶחֶם`); wꜣḥ = `שָׁת`
  (23.14; Ps 73:9; 10.9 had `משאירה` by sense); wgꜣ = `לָעַס`; sḏꜣj-ḥr = `הִתְעַנֵּג` / `עֹנֶג`; pwgꜣs = `רֹק`; qꜣj =
  `קְעָרָה`; ẖnm.t = `בְּאֵר`; jdḥ = `שְׁאִיבָה`; fnd = `אַף` (24.4); sbj "laugh at" = `לָעַג` (24.9; `צָחַק` avoided –
  the cognate of Akkadian *ṣiāḫu*, reserved in the everyday-voices corpus; Prov 17:5 `לֹעֵג`); pjṯꜣ = `הִתֵּל`; ḥsꜣ ḥr =
  `הִזְעִים פָּנִים`; qd (noun) = `בּוֹנֶה` (24.14, as renderings §4.3); m-mn.t = `בְּכָל יוֹם`; ḫꜣ = `אֶלֶף`; jmn.tt =
  `הַמַּעֲרָב`; ršj = `שָׂמַח` (as 10.6).
- **dwꜣ.w** "morning; tomorrow" = `מָחָר` (19.11–13, 20.16, 22.6, as 6.18) and `בֹּקֶר` (16.9) by sense.
- **sp** "occasion" = `פַּעַם` (20.19), as 17.3.
- **ṯnj** (TLA one lemma, meaning uncertain in both places): 15.17 `נִכַּר?`, 20.19 `תִּבָּחֵן?` – a split by context,
  both marked.
- **stꜣ** "drag" = `מָשַׁךְ` (20.1; 2.6 `המביא` by sense).

### Open decisions for the user
- 22.1 ḥrj nḫt "a strong superior" ↔ Prov 23:11 `גֹאֲלָם חָזָק`: rendered `מי שמעליי, חזק` (the Egyptian sense);
  the TLA's "Erlöser" for stꜣ (22.3) is the reason the pair is famous. Left as is.
- mnḫ `מַעֲלָה` shares the Hebrew word with 3.2 `מעלות` (stairs) and 3.5 `רם־מעלה` (rank): different senses of
  one Hebrew noun. Alternative `הִצְטַיְּנוּת` (modern) if a clean split is wanted.
- 21.13 bjꜣ.t "oracle" = `מוֹפֵת?` – no Hebrew word means "oracle" without a reserved root (`נְבוּאָה`, `אוֹת`).

### Progress log
- Drafted house by house (18; 19; 20; 21; 22; 23; 24; 25), each saved at once and followed by `fill` + `verify AM`.
- Pass (a) fidelity: negations (m-jri̯ / mtw=k; bw jri̯=tw 22.17–18; bn 21.16, 23.1; mꜥn 19.18, 19.22–23; tm 20.15,
  22.6, 24.3), the conditionals and the topicalized `jr` lines, the positive imperative 20.13 (against Lange), the
  two-version lines 22.2 and 22.4 (both versions kept), the TLA's double analyses (19.11, 22.10, 23.16).
- Pass (b) consistency: the refrain byte-identical (verify: 0 repeated-line differences); repeated structures
  (19.19 ~ 16.17; 20.2 ~ 6.3; 22.14 ~ 15.14; 22.22 ~ 13.8; 23.3 ~ 17.1; 23.4 ~ 5.16; 24.12 ~ 19.5; 24.15 ~ 12.3;
  24.20 ~ 14.1; 21.14 ~ 24.10); new strings grepped in the corpus. Changes: 18.20 (ẖꜥꜣ `מרוקנת`), 22.1 (`מי שמעליי`
  without an added verb), 22.10 / 22.12 (šfj.t `יְקָר`, nrw `מוֹרָא`, after the `הדר` collision with 2.18), the house-22
  title.
- Pass (c) Hebrew: read the generated houses 18–25 aloud.
- `build AM`: 489 lines; `check_bible_quotes.py` on the annotated file, the intro, both translations and project.md:
  0 problems; `verify AM`: 0 problems (62 lines placeholder); `selftest`: 0 failures.

### The text on its own terms
- **The god acts, man talks** (19.16–17): one of the most quoted lines of Egyptian wisdom; with 19.14–15 and 19.22–20.2
  it says that perfection belongs to the god alone, and that even the striving for it spoils it.
- **No one is sinless** (19.18–21) – said by a culture whose funerary ritual has the dead declare "I have not sinned"
  forty-two times; the sin is the god's, sealed with his finger.
- **Life as a boat on the Nile** (20.4–6): the tongue is the steering oar, the Lord of All the bow pilot who sees the
  river.
- **The courts of Egypt** (20.8–21.12): the local *qnb.t* with an official presiding, the court of the Thirty at the
  Residence, oaths "by the Lord", journals and oracles written on papyrus, the royal herald's interrogation.
- **Truth as a gift, not a reward** (21.3–21.6): "reward" from the strong against the "gift" the god bears to whom he
  loves.
- **Silence as power** (22.5–8 = 23.8–11; 22.9–10; 23.3–5): the silent man sits in the god's arms and his silence
  overthrows his enemies; the real crocodile does not roar; whoever "knows how to sleep" wins.
- **The belly as a vessel of secrets** (22.11, 22.15, 23.4): do not empty yours; let the opponent empty his.
- **Table manners as ethics** (23.13–23.20): chew for show when sated, look at your own bowl.
- **The heart, the god's nose** (24.4): the organ of thought is the god's breath in man (tTurin: "the god's reward").
- **Man as a mud brick** (24.13–17): clay and straw, the stuff of houses; the god a builder who tears down and builds
  daily, makes the poor and the overseers "as he loves" – the same verbs that the hot man usurps "with his tongue"
  (12.3).
- **A schoolboy's tablet** (tTurin): the copy marks days ("day 4", "day 8") in the margin – the text learnt by heart
  at school, a section per day.

### Key parallels
- **22.1–8 ↔ Prov 20:22; 23:11** [equivalent / divergence]: "do not say …", the god instead of human help; Proverbs'
  `גֹאֲלָם חָזָק` against the "strong superior" one must not seek.
- **22.8 ↔ Ex 14:14; Lam 3:26; Ps 37:7** [equivalent]: silence while the god fights.
- **19.16–17 ↔ Prov 19:21; 16:9; 16:1** [equivalent / divergence]: men "say", the god "does"; Proverbs: men "plan",
  the Lord "establishes".
- **19.18 ↔ Prov 20:9; Eccl 7:20; 1 Kgs 8:46** [equivalent]: no one can say he is free of sin.
- **19.21 ↔ Job 14:17** [equivalent; cognate ḫtm = `חָתַם`]: sin sealed (`חָתֻם בִּצְרוֹר פִּשְׁעִי`).
- **20.21–21.4 ↔ Ex 23:3, 6–8; Lev 19:15; Deut 16:19; Lam 3:36** [equivalent]: do not pervert a man in court
  (`לְעַוֵּת אָדָם בְּרִיבוֹ`), respect neither fine linen nor rags, take no "reward" (`שֹׁחַד`) from the strong.
- **21.12 ↔ 2 Sam 8:16** [equivalent]: the royal herald `מַזְכִּיר`.
- **23.13–18 ↔ Prov 23:1–3** [equivalent / divergence]: bread before an official; `אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) = "the bowl
  that is before you".
- **22.11 ↔ Prov 23:9** [divergence]: do not empty your belly to all / do not speak in a fool's ears.
- **24.9–12 ↔ Lev 19:14; 21:18; Deut 27:18; Prov 17:5** [equivalent]: the blind, the lame, mocking the poor reviles his
  maker – as here, man is the god's building (24.13–14).
- **24.13–17 ↔ Job 33:6, 10:9; Gen 2:7, 2:22; Isa 64:7; 1 Sam 2:6–7; Eccl 3:3** [equivalent / divergence]: clay and
  straw (the brick of Ex 5:7), the god a builder (`וַיִּבֶן`, not `יֹצֵר`), who impoverishes and exalts.
- **24.4 ↔ Gen 2:7; Prov 20:27** [divergence]: in Genesis God breathes into man's nose; here man's heart is the god's
  nose.

### Lines shared with other texts
- The refrain 22.5–22.8 = 23.8–23.11 (byte-identical). Repeated with earlier Hebrew: 19.12 / 18.13 / 9.4 `האירה הארץ –`;
  19.19 ~ 16.17, 9.14; 20.2 ~ 6.3, 9.3; 20.4 ~ 1.10, 15.6; 21.9 ~ 18.4; 22.14 ~ 15.14; 22.22 ~ 13.8; 23.3 ~ 17.1; 23.4 ~
  5.16; 24.10 ~ 21.14; 24.12 ~ 19.5; 24.15 ~ 12.3; 24.20 ~ 14.1. Later: 19.22 ~ 26.20, 20.16 = 26.4.

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| **Fixed lines (§7)** 22.5–22.8 = 23.8–23.11 | `ובכן, אינך יודע את עצות האל,` / `פן תיכלם מחר.` / `שב לך בזרועות האל,` / `שתיקתך תפיל אותם.` | the refrain |
| mnḫ (noun) / whꜣ (noun) | `מַעֲלָה` / `כִּשָּׁלוֹן` | 19.14–15, 19.22–23, 20.1, 22.17 |
| rwj … rwj | `לְחוּד … לְחוּד` | 19.16–17 |
| ḫtm | `חָתַם` (licensed loan) | 19.21 |
| stꜣ "protector" | `מְגוֹנֵן` (`גֹּאֵל`, `מָגֵן` never) | 22.3 |
| ḥrj "fear" / snḏ / mkḥꜣ | `פָּחַד` / `חָשַׁשׁ` / `הִתְעַלֵּם` | 19.11 / 23.7 / 23.7, 24.5 |
| šww / ẖꜥꜣ | `הֵרִיק` / `רוֹקֵן` | 22.11, 23.4 / 7.6, 18.20, 22.9 |
| qnb.t / smtr / mtr / mꜥbꜣ.yt | `מוֹעֶצֶת־הַשּׁוֹפְטִים` / `חֲקִירָה` / `עֵד` / `הַשְּׁלֹשִׁים` | 20.8–20.21 |
| fꜣ.t / jnw / fqꜣ | `מַשְׂאֵת` / `מַתָּנָה` / `שָׂכָר` | 21.5 / 16.18 / 21.3 |
| wḥm.w (herald) | `מַזְכִּיר` [equivalent] | 21.12 |
| mꜣꜣ / ptr / nw | `חָזָה` / `רָאָה` / `הִבִּיט` | 23.1 / 15.7 / 17.11 |
| sḏr / qdd | `יָשַׁן` / `נָם` | 19.11 / 23.5 |
| šfj.t / nrw | `יְקָר` ★ (vocalized) / `מוֹרָא` | 22.10 / 22.12 |
| ꜥqw / tʾ | `פַּת` / `לֶחֶם` | 23.13 |
| wꜣḥ | `שָׁת` | 23.14 |
| sbj / pjṯꜣ | `לָעַג` / `הִתֵּל` (`צָחַק` is *ṣiāḫu*'s cognate) | 24.9, 24.11 |
| qs | `עֲצָמוֹת` | 21.20 |

### Lessons for the guidelines
- A repeated passage that a coordinator will fix by its first copy should be drafted with both copies' contexts open
  (here 22.5–8 closes a house about patrons, 23.8–11 one about opponents): the Hebrew must fit both before it is fixed.

## AM 24.21–28.1

### Scope
Part 5 of 5, the last (the second translator): houses 26–30 (24.21–27.17), the closing formula 27.18 and the colophon
28.1 – 62 lines, all drafted; **the file is complete (551 / 551 lines, the end marker removed).** Lacunae: 25.15,
27.8 (twice), 27.17, 27.18, 28.1. House 26: the beer-house and the great man in the street; respect the old drunk;
"a pilot who looks far ahead does not capsize". 27: do not curse one older than you – he saw Re before you; let him
beat you, hand in your bosom. 28: the widow in the field, the stranger with the jar; "the god loves him who honours
the poor more than him who respects the noble". 29: the ferry – take the fare from the rich, let the have-not cross
free. 30 (the epilogue): "look at these thirty houses"; the skilled scribe will be worthy of being a courtier. 28.1:
"in the writing of Senu, son of the god's father Pamiu". Witness: tTurin CGT 58005 (to 25.9).

### Sources consulted
The base and tTurin (`data … --wit`); the TLA German and Lange 1925 (chapters 26–27, OCR), read after drafting.

### Decisions
- **twr (settled, as you asked):** one Egyptian verb, "be pure; keep (reverently) apart from; respect", rendered by
  its construction – `twr r` "keep apart from" = `הִנָּזֵר מִן` (15.7; Lev 22:2); `twr` + object "respect" =
  `הוֹקִיר` (25.7, 25.9, 26.14); `twr` absolute "become pure" = `נִטְהַר` (27.12, TLA "rein werden"). No single Hebrew
  verb covers the three (`כִּבֵּד` would add a third Egyptian lemma to the root כבד: dns `כְּבַד־מִשְׁקָל`, jmꜣḫ
  `נִכְבָּד`, and here wꜣš). Noted at 25.7 and 27.12.
- **wꜣš "honour" = `כִּבֵּד`** (26.13): Prov 14:31 `וּמְכַבְּדוֹ חֹנֵן אֶבְיוֹן` has the same verb with the same object;
  the couplet 26.13–14 then keeps the two Egyptian verbs apart (`מְכַבֵּד` / `מוֹקִיר`).
- **27.7 = renderings §6.1:** `ראה לך את שלושים הבתים האלה:` (ptr n=k `רְאֵה לְךָ`; tꜣj 30 n ḥw.t `שְׁלֹשִׁים הַבָּתִּים
  הָאֵלֶּה`).
- **27.16–17:** `הנה סופר שהוא בקי במשרתו –` / `ימצא את עצמו ראוי להיות רֵעַ (המלך) […].` (sšꜣ `בָּקִי`, jꜣw.t `מִשְׂרָה`,
  smḥr `רֵעַ (הַמֶּלֶךְ)`, m-šꜣ.wj `רָאוּי` as 12.5; `מָהִיר` and `מְלָאכָה` in the apparatus only).
- **Headings** `הבית העשרים ושישה.` … `הבית העשרים ותשעה.`, `הבית השלושים.` (the style of houses 21–25).
- **Ships and oars, one Hebrew each:** sk.tj `סְפִינָה` (10.10), kꜣr `סִירָה` (10.11), jmw `כְּלִי־שַׁיִט` – **20.5–20.6
  changed** (they had `ספינה` / `שלה`, a collision with 10.10 that I found only now: `הנה לשון האדם – משוט כלי־השיט,` /
  `ואדון הכול – הוא החובל שלו.`), dp.t `אֳנִיָּה` (25.15); ḥmw `מָשׁוֹט`, ḥp.t `מְשׁוֹט־חֲתִירָה` (26.18); mḫn.t `מַעְבֹּרֶת`.
- **Other words:** ḥnq.t `שֵׁכָר` vocalized (24.22, 25.8: unvocalized it reads fqꜣ's `שָׂכָר`); ꜥ.t "room" `חֶדֶר`; ṯꜣs
  "join" `הִתְקַשֵּׁר`; kd `קָטָן`, šrj "the junior" `זוּטָר` (nḏs keeps `צָעִיר`); ḫnms `הִתְרוֹעֵעַ` (Prov 18:24); šmsw.t
  `פָּמַלְיָה`; ẖrd `נַעַר` (ms.w keeps `יְלָדִים`); ḫpš `כָּתֵף` (ꜥ keeps `זְרוֹעַ`); ꜣ.t "back" `גֵּו` (unvocalized `גב`
  reads as Geb); ḫꜣb `הִרְכִּין`; nmḥ (verb) `דַּל`; dḥr `מָרוֹר` (jkn keeps `מַר`); sḥwr (verb) `קִלֵּל` (noun
  `קְלָלָה`, 14.15); smj "report" `הִלְשִׁין`; mḥr `מַכְאִיב`; qnj `חֵיק`; ṯsm `כֶּלֶב־צַיִד`; wḥwḥ `נָבַח`; ḥꜣm "fish
  out" `דָּלָה`; ḏrḏr `נָכְרִי` (`גֵּר` never); mꜥḏqꜣt `כַּד`; qꜣb `כָּפַל` (6.9); jsq `עִכֵּב`; ḏꜣj "cross" `חָצָה`
  (5.1 `נַעֲבִיר`; `עָבַר` is snj's); wsdn `הִתְרַוַּח`; jnq `כָּרַךְ` (13.4); hꜣwtj `נוֹסֵעַ?`; hꜣm.t `דְּמֵי־מַעֲבָר`;
  sḏꜣj-ḥr `עִנֵּג` / `עֹנֶג` (23.16); ḥꜣ.wtj `מִבְחָר`; šfd `סֵפֶר` (ꜥr.t keeps `מְגִלָּה`); ḫm (noun) `בַּעַר` (Prov
  12:1); ꜥš "read aloud" `נִקְרָא`; wḥꜥ `פֵּרֵשׁ` (3.10); zẖꜣ.w "writing" `כְּתַב יָד`; Pꜣ-mjw `פָּמִיוּ` ("the cat").
- **Splits by sense, noted at the lines:** wꜣḥ `חָדַל` (26.10; 10.9 `השאיר`, 23.14 `שָׁת`); bꜥꜣ "overlook (the
  fare)" `פָּטַר` (27.5; elsewhere `מָאַס`); šdj "extract" `חִלֵּץ` (27.4, the same verb as 21.8 "rescue").
- **Two-version line:** 25.15 has the sentence twice; both kept (as 22.2, 22.4).
- **25.13:** the scribe wrote dḥꜣ "straw" (Lange: "whose speech is straw"); the base's ⟨dḥr⟩ "bitter" (TLA) is followed.

### Gates
- **26.16 `הַיְאוֹר` (jtrw) is blocked:** the `יאור` licence lists `jtrw|jtr|jwtr|jtwr|…` but not the group-writing
  `jwtwr` of this line (the same TLA lemma, tla33370, as 27.2, which passes). I did not change the Hebrew or the tool;
  the entry carries the tool's own `[היתר שער: היאור – …]` marker with the reason. **Proposed tool fix:** add `jwtwr`
  to the licence regex of the `יאור` gate.

### Open decisions for the user
- twr's three-way split (`הִנָּזֵר מִן` / `הוֹקִיר` / `נִטְהַר`) against a single verb (none exists that keeps all
  three senses).
- 27.1 hꜣwtj "passenger (?)" and 26.9's gmj "find (guilty) (?)" remain uncertain (marked).

### Progress log
- Drafted house by house (26; 27; 28–30 with the colophon), each saved and followed by `fill` + `verify AM`.
- Pass (a): negations (bn 25.10–11; bw jri̯=w 25.12; tm 26.10; mꜥn 26.20; bn 27.1), the conditionals and topicalized
  `jr` lines, the stative 26.17, the editor's supplements (`⟨ḏi̯.t⟩`, `⟨wsr⟩`, `⟨dḥr⟩`) read whole and unbracketed.
- Pass (b): headings; 26.4 = 20.16 identical; 27.3 ~ 16.17; 27.2 ~ 18.4, 21.9; 26.20 ~ 19.22; 27.13 ~ 7.9; 27.14 ~
  3.10; 27.16 ~ 1.13; 27.17 ~ 1.4, 12.5; new strings grepped. Changes: 20.5–20.6 (`כלי־השיט`, above), 25.15 (`אונייה`).
- Pass (c): read houses 26–30 aloud in `translation-AM.rtl.md`.
- `verify AM --strict`: **0 problems** (551 / 551); `build AM`: 551 lines; `selftest`: 0 failures;
  `check_bible_quotes.py` on the annotated file, the intro, `translation-AM.rtl.md`, `translation.rtl.md` and
  project.md: 0 problems. The intro now describes the complete translation.

### The text on its own terms
- **Rank and age as cosmic order** (25.1–25.5, 25.17–26.1): befriend your equal and "Re is sound from afar"; the elder
  "saw Re before you"; a junior's curse is reported to the rising Aten – the sun is the court of appeal.
- **Courtesy costs nothing** (25.10–25.13): the bared shoulder is not weakened, the bowed back not broken, the
  pleasant speaker not impoverished.
- **The client as hound** (26.6–7): the dog does not bark at the one who feeds it.
- **The god's preference** (26.13–14): he loves the one who honours the poor more than the one who respects the
  great – a theological ranking, not only an ethic.
- **The ferry** (26.15–27.5): the Nile crossing as a moral place – no private ferries for profit, the fare from the
  rich, free passage for the poor.
- **The book about itself** (27.7–27.15): pleasure and teaching, "the foremost of every book"; read aloud to the
  ignorant it "purifies" him; the pupil becomes an interpreter and a teacher; the skilled scribe becomes a courtier –
  the opening titles (1.4, 1.13) come back as a promise.
- **One hand** (28.1): Senu son of Pamiu ("the cat") copied the only complete text, c. 650 BCE.

### Key parallels
- **27.7 ↔ Prov 22:20** [equivalent]: "these thirty houses" behind ketiv `שלשום` / qere `שָׁלִשִׁים`, and the address
  `לְךָ` = *n=k*.
- **27.16–17 ↔ Prov 22:29** [equivalent / divergence]: the skilled man stands before kings – Egyptian `בָּקִי` /
  `מִשְׂרָה` / `רֵעַ (הַמֶּלֶךְ)` against `מָהִיר` / `מְלַאכְתּוֹ` / `לִפְנֵי-מְלָכִים`; Ezra 7:6 `סֹפֵר מָהִיר`.
- **26.9–26.12 ↔ Deut 24:17–21; Ruth 2:15; Ex 22:20** [equivalent / divergence]: the widow in the field, the stranger
  (`נָכְרִי`, not `גֵּר`).
- **26.13–14 ↔ Prov 14:31, 19:17; 1 Sam 2:30; Lev 19:15** [equivalent / divergence]: `וּמְכַבְּדוֹ חֹנֵן אֶבְיוֹן`.
- **25.17–25.19 ↔ Eccl 10:20; Ex 22:27** [equivalent]: do not curse the great – the bird of the sky / the rising sun
  carries the report.
- **26.2 ↔ Lam 3:30; Isa 50:6** [equivalent]: giving the cheek to the smiter.
- **27.8–27.10 ↔ Prov 1:2–4; Ps 19:8; Eccl 12:9, 12** [equivalent / divergence]: teaching to the simple; Qohelet's
  epilogue warns against many books, Amenemope calls his "the foremost of every book".
- **26.16, 27.2 ↔ Gen 41:1–2** [cognate]: jtrw = `יְאֹר`.

### Lines shared with other texts
- 26.4 = 20.16 (identical Hebrew). Repeated structures: listed under pass (b). The closing returns to the opening
  (27.13–17 ↔ 1.4, 1.13, 3.10–11).

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| twr | `הִנָּזֵר מִן` (with r) / `הוֹקִיר` (with object) / `נִטְהַר` (absolute) | 15.7 / 25.7, 25.9, 26.14 / 27.12 |
| wꜣš | `כִּבֵּד` | 26.13 (Prov 14:31) |
| sk.tj / kꜣr / jmw / dp.t | `סְפִינָה` / `סִירָה` / `כְּלִי־שַׁיִט` / `אֳנִיָּה` | 10.10 / 10.11 / 20.5 / 25.15 |
| ḥmw / ḥp.t / mḫn.t | `מָשׁוֹט` / `מְשׁוֹט־חֲתִירָה` / `מַעְבֹּרֶת` | 1.10, 20.4 / 26.18 / 26.17, 27.2 |
| ḥnq.t | `שֵׁכָר` ★ (vocalized against fqꜣ `שָׂכָר`) | 24.22, 25.8 |
| ḏrḏr | `נָכְרִי` | 26.11 |
| šrj / kd / nḏs | `זוּטָר` / `קָטָן` / `צָעִיר` | 25.20, 26.1 / 25.2 / 2.14 |
| ẖrd / ms.w | `נַעַר` / `יְלָדִים` | 25.9 |
| ꜣ.t "back" | `גֵּו` | 25.11 |
| ḫm (noun) | `בַּעַר` | 27.10–11 |
| šfd / ꜥr.t | `סֵפֶר` / `מְגִלָּה` | 27.9 |
| **Tool fix** | add `jwtwr` to the `יאור` gate licence | 26.16 |

### Lessons for the guidelines
- A lemma check by Hebrew string catches collisions late: the ship words collided across two translators (10.10, 20.5)
  and were found only when a fourth ship word appeared. A "one Egyptian lemma per Hebrew noun" report (Hebrew → lemma
  ids, from the parses) would show them at once.

## Review pass (a), fidelity, 1.1–13.9

Every line of the prologue and houses 1–9 read against `egypt_tools.py data` (lemma, morphology) and §3a, then
cross-checked with `tr`. Brackets: the only restored / damaged / uncertain words in the range (1.19 `[s]⸢mn⸣`,
`wḏ,⸢y⸣`; 2.19 `jt-nṯr?`, `ꜣḫ,t?`; 12.6 `jṯi̯(.t)?`; the `⟨r⟩?` of 1.10, 1.12, 4.5) are handled per the brief. All
negations (`m-jri̯` + conjunctive, `bn`, `nn`, `bw jri̯=f`, `bw sḏm=f`, `tm`), the Third Futures (5.17, 5.19) and the
fixed lines / formulas checked: no error found in them.

### Changes (4 lines)
- **8.4** `והחיים נלקחים מעינו;` → `והחיים נלקחו מעינו;` – `nḥm` is a passive `sḏm=f`, a past (TLA "geraubt worden
  ist"); the parse and the note updated.
- **8.19** `מוטב איפה שנותן לך האל` → `מוטב איפה שנתן לך האל` – `jw ḏi̯ s(j) n=k pꜣ nṯr`: `jw` + `sḏm=f` is a past
  circumstantial (TLA "gegeben hat"); parse updated.
- **10.6** `אל תשמח בעושר שבגזל,` → `אל תשמח לך בעושר שבגזל,` – the reflexive dative `n=k` had been dropped (the
  parse said "omitted"); restored as in 9.12 `אל תעזוב לך`.
- **13.5** `עושה הוא את מי שנצמד אליו לנכה;` → `עושה הוא את מי שהוא נצמד אליו לנכה;` – the relative form `dmj=f` has
  the hot man as its subject ("the one whom he touches", TLA "den er berührt hat"); "מי שנצמד אליו" reversed it.

### Points left, with the reason
- **6.3** `ḫꜣꜥ sjrdmꜣ` `עזיבת ענפיו`: the TLA glosses "werfen" and §10.2.5 gives ḫꜣꜥ "throw" `הִשְׁלִיךְ`, but the
  translator ties the line to 4.12 (`עוזבת`) in the note on purpose; both readings are open (TLA gives two). Left.
- **9.10 / 11.17 – a collision for pass (b):** `הִשְׁלִיךְ` renders two lemmas: qmꜣ "throw" (9.10 `תשליך`) and ḫꜣꜥ
  "throw" (11.17 `להשליך`, §10.2.5). And 9.12 ḫꜣꜥ (TLA "werfen", parallel to 9.10) is `תעזוב`. One of them should move;
  not decided here (a consistency matter).
- **wꜣḥ (pass b):** four Hebrew words – 2.3 `המניח` (inside the title), 10.9 `משאירה`, 23.14 `תשית`, 26.10 `תחדל`;
  §10.4–10.5 list only `שָׁת` / `חָדַל`. 10.9 "leave behind" is a new sense split, unnoted.
- **11.13** `snsn.tj n=k` – the `n=k` is absorbed by the reflexive `תתחבר` (as in 15.14, 22.14, same construction);
  left, so the three lines stay identical.
- **9.19** `ptr=w` `רואים` (the TLA has a past "hat man … gesehen"): a vivid present beside `והם אינם` is defensible
  for the active `sḏm=f` here; left.
- **9.11** `אין איש ש…`: `איש` renders the headless relative form `ḫm`, not an addition; left.
- **12.15** bsi̯ "enter" `יבוא` beside 2.17 bsi̯ "introduce" `המושיב`: one lemma, two senses (intransitive /
  transitive); left.
- `build AM`, `verify AM --strict` (0 problems) and `check_bible_quotes.py` on the annotated file, `translation-AM.rtl.md`
  and `translation.rtl.md` (0) after the pass. No fixed line (§7) or gate problem found in 1.1–13.9.

## Review pass (a), fidelity, 13.10–28.1

Every line of houses 10–30, the epilogue and the colophon read against `egypt_tools.py data` and §3a, a house at a
time (`verify AM --strict` 0 after each), then cross-checked with `tr`. The negations (`m-jri̯` + conjunctive, `m-ḏr.tj`,
`bn`, `nn`, `mꜥ-n`, `bw jri̯=f`, `bw sḏm=f`, `tm`), the Third Futures, the `sḏm.n=f` of 26.13 and the fixed lines /
formulas are all right. No negation or tense error was found in this half.

### The main finding: eight false lacunae (the TLA's double analyses)
AED writes a `<gap reason="lost"/>` between the TLA's two analyses of one written stretch. `egypt_tools.py` turns it
into ` / ` only when the words on both sides of the gap are similar single words (`_alt_gaps`). When the analysis covers
several words, the gap is printed as `[…]`. In eight lines the drafts took that `[…]` for a real lacuna. They put
`[…]` in the Hebrew and translated **both** analyses one after the other; at 22.2, 22.4 and 25.15 the notes even say
the scribe "wrote it twice". The writing shows it is one text: 22.2 `thꜣ =j` / `thꜣ ⟨w⟩j` and 22.4 `msdi̯ =j` /
`msdi̯ ⟨w⟩j` differ only in a supplied `w`; 14.7 `(ḥr) šnꜥ` / `(m) šnꜥ` and 27.8 `(ḥr)` / `(m)` only in unwritten
prepositions. The TLA's German renders each line once ("oder: …" for the other analysis), and it marks no lacuna.
Each line is now translated once, and the other analysis is given in the parse:
- **14.7** `הנה קניין העני – הוא עוצר […], סתימה לגרון;` → `הנה קניין העני – הוא סתימה לגרון;` (the noun reading,
  as in the TLA).
- **16.8** `תמצא זאת כאורח […] – כדרך החיים;` → `תמצא זאת כדרך החיים;` (mj.t, as in 1.7).
- **18.12** `אם נעשק *…*? […] – נעשק זהב לכֶּתֶם,` → `אם נעשק זהב לכֶּתֶם,` (`ꜥšgꜣj.tj nbw`, the TLA's first).
- **22.2** `כי פגעתי […] – פגע בי איש בעירך."` → `כי פגע בי איש בעירך."`. I chose "he injured me" (the TLA puts
  "I injured" first): the one who asks for a patron is the victim, and 22.8 "your silence will cast *them* down"
  refers to those who did the harm.
- **22.4** `כי פגעתי בשנואי […] – פגע בי שונאי."` → `כי פגע בי שונאי."` (as 22.2).
- **23.16** `התענג […] – עונג הוא ברוקך.` → `התענג ברוקך.` (the imperative, as in the TLA).
- **25.15** `אינו מניח לאונייתו להתהפך […] אין אונייתו מתהפכת.` → `אינו מניח לאונייתו להתהפך.` (the TLA's first).
- **27.8** `הם מענגים […] – לעונג, הם מלמדים […] – למוסר;` → `הם מענגים, הם מלמדים;` (the verbs, as in the TLA;
  the noun reading sbꜣ.yt `מוסר` is kept in the note).
Earlier sections of this file that count these lines as lacunae (the part 2–5 scope lines and logs) are left as their
translators wrote them; this section corrects them.

### Other change
- **16.16** `אל תזכיר את עצמך לאדם,` → `אל תזכיר (את עצמך) לאדם,` – the object is not written (the TLA has "(dich)").

### Points left, with the reason
- **Real gaps or not?** 14.10 `jb =f […] shꜣ`, 27.17 `smḥr […]`, 27.18 `jwi̯ =s pw […] […] […]`, 28.1 `Pꜣ-m⸢y⸣ […]` have
  a gap with no second analysis next to it. The TLA's German shows no loss at any of them, and Lange has none at
  27.17. I could not decide from the base, so the `[…]` stays. Someone should check these against the photographs or
  the TLA site.
- **24.7** `kꜣy` (a particle, "so then") is untranslated. The natural `הרי` / `והרי` is already taken by `ḫr` / `jst`
  (§3a).
- **25.4** `ḫnms n=k`, **26.10** `wꜣḥ n=k`: the reflexive `n=k` is absorbed by the verb, as in 11.13 / 15.14 / 22.14.
- **24.10** `sḫr.w n qbqb` `עצות הפיסח`: the TLA has "Zustand" here, but one lemma = one Hebrew (`עצה`, 11.7, 21.14).
- **20.16 = 26.4** `jr m-dwꜣw …` is rendered `אם`, though the TLA tags `jr` as a topicalizer (§3a `הנה`). The TLA's
  own German reads it conditionally ("wenn"), so I left it.
- **25.21** `zp-⟨2⟩?`: the `?` belongs to the editor's supplement and is not carried (as at `⟨r⟩?` in 1.10).

### For pass (b) (consistency)
- `תחדל` renders two lemmas: jꜣb "cease" (17.1 `שיחדל`) and wꜣḥ (26.10 `תחדל`).
- ḫꜣꜥ "throw away" at 17.21 (TLA "wegwerfen") is `תעזוב`. This goes with the 9.10 / 9.12 / 11.17 throw-question
  from the first half.
- The renderings §9 gate sample for 18.21 (`אַל תַּעֲשֶׂה לְךָ אֵיפָה שֶׁמַּחֲזִיקָה שְׁתַּיִם`) differs from the drafted
  line (`הנוטלת שתיים`, ṯꜣi̯ = `נטל` as in 4.7). The selftest still passes, but the sample no longer shows the real line.
- **Tool:** `egypt_tools.py _alt_gaps` should also print ` / ` for a gap between multi-word analyses (the eight lines
  above), or `data` should flag such a gap. I did not change the tool.

`build AM`, `verify AM --strict` (0 problems), `selftest` (0 failures) and `check_bible_quotes.py` on the annotated
file, `translation-AM.rtl.md` and `translation.rtl.md` (0) after the pass. No fixed line (§7) or gate problem.

## Review pass (b), consistency

A lemma → Hebrew map built by script from every פירוק bullet (each `("…")` matched to its word in `egypt_tools.rows`,
2,338 words; scratchpad, not in the repo): (i) lemmas with ≥2 occurrences and more than one Hebrew word, (ii) Hebrew
words (prefixes stripped) that render more than one lemma. Each case judged on the lines.

### Changes (8 `>` lines; parse and notes updated)
- **ḫꜣꜥ / qmꜣm "throw":** `הִשְׁלִיךְ` rendered both (9.10 qmꜣm, 11.17 ḫꜣꜥ). qmꜣm keeps it (9.10); ḫꜣꜥ "throw" moves:
  **11.17** `להשליך את דבריו` → `להטיל את דבריו`. ḫꜣꜥ is otherwise `עָזַב` in all ten lines, the "throw" readings of the
  TLA included (6.3, 9.12, 17.21: "abandon" fits, and 9.10 / 9.12 now differ exactly where the Egyptian verbs do).
  **Renderings §10.2.5 should read `הֵטִיל` for ḫꜣꜥ "throw"** (`הִשְׁלִיךְ` stays qmꜣm's; 22.18 qmꜣm "rush" `הִסְתָּעֵר`, a
  split by sense, noted there).
- **wꜣḥ (four words) and `חָדַל`:** wꜣḥ "set, place" = `שָׁת` – **2.3** `הסופר המניח` → `הסופר הַשָּׁת` (as 23.14;
  `הִנִּיחַ` is rḏj's "let", 4.8, 14.11, 18.18, 22.21); "leave behind" `הִשְׁאִיר` (10.9) and "leave off" – **26.10**
  `ואל תחדל מלענות` → `ואל תרפה מלענות` – are splits by sense, now noted at 10.9, 23.14, 26.10. `חָדַל` is jꜣb's alone
  (17.1).
- **`חָלַשׁ`** rendered four lemmas (qbb 8.2, ṯnj 14.11 / 25.10, the compound zꜣw-ꜥ, bgꜣ 4.10): **4.10** `*תיחלש*?` →
  `*תתרשל*?` (bgꜣ "be weary, slack", TLA "nachlässig"). qbb / ṯnj keep the shared word (both "be weak", both uncertain).
- **ḫꜣb "bow":** 5.12 `שְׁחֵה` against 25.11 `הרכנה` (part 5's `הִרְכִּין`) – **5.12** → `הרכן (ראש) לפני הפוגע`
  (`הִתְכּוֹפֵף` would collide with ksj `כָּפַף`, 16.20).
- **Near-repeat** `z m ḏꜣrʾ=k`: **11.19** `אדם כשיעורך` → `איש כשיעורך` (= 25.4).
- **Vocalization:** **9.2** `כד השכר` → `כד הַשֵּׁכָר` (renderings §10.5.3: `שֵׁכָר` ★, else `שָׂכָר` fqꜣ); **18.2** `איזה אל`
  → `איזה אֵל` (as 6.16).
- **Loanword tags** added: 4.16 `תִּמְסָח` [cognate] (first occurrence), 18.23 `אֵיפָה` [cognate].

### Kept, with the reason
- **Recorded splits by sense** (§10 or a note at the line): nb `אָדוֹן` / `בַּעַל`; hꜣw `עֵת` / `מָקוֹם` (7.13); dwꜣ.w
  `מָחָר` / `בֹּקֶר`; ꜥꜣ `גָּדוֹל` / `רַב`; twr ×3; bꜥꜣ `מָאַס` / `פָּטַר`; šdj; wbn; bsj; mḥ `מִלֵּא` / `הֵאָחֵז`; stꜣ;
  thꜣ `פָּגַע` / `הִרְחִיק`; ṯnj (15.17 / 20.19); rʾ `פֶּה` / `פִּיּוֹת`; nfr `טוֹב` / `יָפֶה` (18.9); mnḫ / bw-wꜣy / stairs
  in `מַעֲלָה` (§10.4.4); ḫpr `נִהְיָה` / `יִהְיֶה`; ꜣḫ `מוֹעִיל` / `מוּטָב` (the formula).
- **Natural, harmless:** jri̯, rḏj, ḏd, gmj, ptr (function-like verbs whose senses Hebrew must separate); ṯsj "levy" /
  "lift up" (1.16 / 5.3); pẖr `טִפֵּל` / `סוֹבֵב`; s.t `כִּסֵּא` / `מָקוֹם`; mtr.w `הַדְרָכָה` / mtr.t `עֵדוּת`; pḥ
  `הִגִּיעַ` / `הִשִּׂיג` (17.5); ḏꜣj `הֶעֱבִיר` (5.1, transitive) / `חָצָה` (26.16), beside snj `עָבַר`; rmṯ `אָדָם`
  (a person) / `בְּנֵי הָאָדָם` (people), with z `אִישׁ` / generic `הָאָדָם` (19.13, 19.15) as §4.1 allows; ꜥꜣ / ꜥšꜣ
  sharing `רַב`; the two "truly" words mꜣꜥ / mꜣꜥ.tj `אֲמִתִּי` (one root); the field words in `שָׂדֶה` (part 2).
- **The reflexive `n=k`:** rendered `לך` everywhere (9.12, 10.6, 18.4, 21.15, 22.7 …) except where the Hebrew verb
  is itself reflexive or intransitive: 11.13, 15.14, 22.14 `תתחבר`, 25.4 `התרועע`, 26.10 `תרפה מ־` – one rule, kept.
- **Checked and uniform:** the 30 house headings (renderings §6.1; teens hyphenated, twenties with `ו`); every
  `m-jri̯` line opens `אל`, every conjunctive after it `ואל` (or `ו` + imperative after an imperative); `מוטב … מ־`
  (8.16 the recorded exception); `תועבת האל` 13.16 = 15.21, `תועבתו` 14.3; `הַחַם` ★ ×6, `השותק (האמיתי)`; jb `לב` /
  ḥꜣ.tj `לבב` in every line; the names (renderings §3) vocalized at their first occurrence, one form each, and the
  §5.3 ★ words vocalized everywhere. The 33 "similar" pairs of `data` (similarity ≥ 0.75) differ exactly where the
  Egyptian does.
- **Echo control:** no `בני`, `הט אזנך`, `איש חמות`, `בעל אף`, `תסג`, `עולם`, `כנשר` in any `>` line; 12.1 `מהיר`
  renders šꜣrš "quick" (not sšꜣ, Prov 22:29). Loanwords of §4.2 used only for their words and tagged (תבה, יאור, איפה,
  כתם, חותם / חתם, תמסח; the Semitic loans עשק, מכמורת).

### The other corpora (`grep --all`, renderings of every corpus)
Checked: `הטיל` (LH *nadû*, Gudea *ri*: sense renderings), `השליך` (*nadû*), `הרפה` (*ramû*), `התרשל` (LH
*naparkû*), `חדל`, `שת`, `ברך` (*karābu*, *šud₃*), `גזל`, `עשק`, `פלש`, `הזיז`, `עוות` (*dâṣu*), `זייף`, `מאס`,
`שנא` (*zêru*), `חן`, `אימה`, `צד`, `לכד` (*bâru*), `חזה`, `הביט`, `מאזנים`, `תועבה` (*anzillu*), `שקר`, `עוור`,
`דל`, `עני`. None is another corpus's **cognate** of its source word, so nothing moved (§10.1.8). **For the
coordinator:** five §4.3 / §10 words are the Hebrew cognates of Akkadian words that other corpora render with them –
`אַלְמָנָה` (*almattu*), `שֵׁכָר` (*šikaru*, tagged [cognate] there), `מִדָּה` (*maddattu* "tribute" [cognate]),
`טִיט` (*ṭiṭṭu*; gated for Sum. *im*), `תֶּבֶן` (*tibnu*; Sum. *in-nu*), and `כָּבֵד` (*kabtu*). By §10.3.2 they should
move or be recorded as shared; they are binding §4 choices tied to the Bible comparisons, so I left them, and propose a
§10 line recording them as shared words (an Egyptian word with the same meaning shares the Hebrew; the [cognate] tag
stays with the Akkadian).

`build AM`, `verify AM --strict` (0 problems, 0 repeated-line differences), `selftest` (0 failures),
`check_bible_quotes.py` on the annotated file, `translation-AM.rtl.md` and `translation.rtl.md` (0) after the pass.
No §7 fixed line was touched or found wrong.

## Review pass (c), Hebrew
The generated `translation-AM.rtl.md` read through with the intro (2026-10-23). The Hebrew is sound: no
vav-consecutive, no agreement or construct errors found, register even, punctuation keeps the halves and the
sentences across lines. The problem found is unvocalized homographs that misread. Each one is now vocalized at
its line, keeping the plene letters. No content word, formula (§6), fixed line (§7) or §10 rendering changed.

**Vocalized (the misreading avoided):**
- 3.10 `לְפָרְשָׁן` (not "to a commentator") · 4.16 `רָעִים` (not "friends") · 7.18 `צָד` and 12.9 `הַצָּד` (the
  hunter, not "side") · 9.2 `לְכַד` (the jar, not "captured") · 10.21 `מִדָּבָר` (not "speaks" / "desert")
- 11.1 `לַאֲהוּב` (not "to love") · 11.9 `לַחוּץ` (outside, not "stressed") · 11.19, 12.1 `מִיַּד` (not
  "immediately") · 14.9 `מְקַדֵּם` (not "of old") · 14.10 `מְעוּוָּת` (passive, as parsed)
- 15.18 `יִשְׁנוּ` (repeat, not "there is" / "sleep") · 20.11 `כְּשֶׁעֵדֶיךָ` (witnesses, not "unto you") · 20.12
  `בִּשְׁבוּעוֹת` (oaths, not "weeks" / Shavuot) · 20.13 `דַּבֵּר` (imperative, not "word")
- 21.1 `חֲגוֹר` (the belt, as parsed) · 23.3 `וְהַשְׁקֵט` (imperative, not "the quiet") · 25.5 `שָׁלֵם` (not "paid") ·
  25.13 `מֵעָשִׁיר` (not "enriches") · 26.9 `כְּשֶׁדָּלִיתָ` (not "poor woman")
- 27.10 `לַבַּעַר` (the ignorant, not "to burn") · 27.14 `וֶהְיֵה` (imperative; unvocalized it reads as the
  converted perfect `וְהָיָה`) · 27.15 `הַמְּפָרֵשׁ` (the interpreter, not "the sail")

**Reworded, same words:** 24.4 `אף האל` → `אַפּוֹ של האל`. With the dash, "the heart of man – אף האל" reads "is also
the god"; the analytic genitive keeps the word and the sense. Its פירוק and footnote follow.

**Intro and footnotes:**
- "המלים 'הלא כתבתי לך שלשים' (כך הקרי)" said that the words come from Amenemope. Now: thanks to Amenemope one reads
  "thirty" in Prov 22:20 (the qere `שָׁלִשִׁים`, ketiv `שלשום`).
- Plene spelling: `מלה/מלים` → `מילה/מילים`, `תארי` → `תוארי`, also in the footnotes of 1.1, 11.4, 18.12, 18.21.
- One sentence on the vocalization policy added to the signs paragraph.
- No paragraph opens with bold.

**Left (noted, not changed):**
- 19.7 `מס הבירה`, 20.18 `בבירה` (*ẖnw* "the Residence"): to a modern reader `בירה` is also "beer". No vocalization
  separates the two, and `הבירה` is the established literary word ("שושן הבירה"), so it stays.
- 20.11 `מועמדים` (*sꜥḥꜥ*, "set up" as witnesses): in Modern Hebrew it means "candidates", but it is grammatical, so
  it stays.
- 25.1 `תתקשר` (*ṯꜣs* "tie oneself to"): it can read as the modern "to phone", but "attach oneself" is the primary
  sense. `תתחבר` and `נצמד` are other lemmas' words.
- 16.9 `תלין עד הבוקר` (*swḫꜣ* … *dwꜣ.w*) is exact. Being a debt passage, it may recall `לֹא תָלִין פְּעֻלַּת
  שָׂכִיר אִתְּךָ עַד בֹּקֶר` (Lev 19:13, about wages); the phrase is the ordinary one (Ruth 3:13). The apparatus could say so.
- 9.20 `הקרקע פתחה את פיה … בלעה אותם` matches Num 16:32. The Egyptian justifies it, and it is already tagged
  [equivalent].
- 9.17–10.5: singular `עושר` with plural verbs follows the Egyptian "they" (the riches). It reads acceptably.
- 17.11, 17.13 `המעוות` (active): the context (`באצבעו`) decides it. A vocalized form would need a double vav.
- No §6 formula or §7 fixed line reads badly.

`build AM`, `verify AM --strict` (0 problems, 0 repeated-line differences), and `check_bible_quotes.py` on the
annotated file, the intro, `translation-AM.rtl.md` and `translation.rtl.md` (0) all ran after the pass.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (AM)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1.1 | ḥꜣ,t-ꜥ-m sbꜣ,yt m ꜥnḫ | ראשית המוסר לחיים, | `שְׁמַע בְּנִי מוּסַר אָבִיךָ; וְאַל-תִּטֹּשׁ תּוֹרַת אִמֶּךָ` (משלי א:ח) | equivalent | *sbꜣ.yt* ו`מוּסָר` חופפים: שניהם "לימוד" וגם "ייסור, חינוך בשבט" |
| 1.1 | ḥꜣ,t-ꜥ-m sbꜣ,yt m ꜥnḫ | ראשית המוסר לחיים, | `לָדַעַת חָכְמָה וּמוּסָר; לְהָבִין אִמְרֵי בִינָה` (משלי א:ב) | equivalent | כותרת שאחריה שרשרת של "ל־" תכליתיות, כמו כאן (1.5–1.12) |
| 1.1 | ḥꜣ,t-ꜥ-m sbꜣ,yt m ꜥnḫ | ראשית המוסר לחיים, | `וְדֶרֶךְ חַיִּים תּוֹכְחוֹת מוּסָר` (משלי ו:כג) | equivalent | המוסר "לחיים" (וראו 1.7). |
| 1.3 | tp-rd nb n ꜥqꜥq wr.pl | כל כלל לגשת אל הגדולים, | `אַל-תִּתְהַדַּר לִפְנֵי-מֶלֶךְ; וּבִמְקוֹם גְּדֹלִים אַל-תַּעֲמֹד` (משלי כה:ו) | equivalent | "הגדולים" ונימוסי החצר. |
| 1.4 | n,t-ꜥ n smḥr{srj}.pl | מנהג רֵעֵי (המלך); | `וְזָבוּד בֶּן נָתָן כֹּהֵן רֵעֶה הַמֶּלֶךְ` (מלכים א ד:ה) | equivalent | "רֵעֶה הַמֶּלֶךְ" בחצר שלמה הוא תואר חצר כמו *smḥr* המצרי ("ידיד"), וכבר הוצע שהתואר העברי עוצב על פי הדגם המצרי. |
| 1.5 | ⟨r⟩ rḫ ḫsf wšb(,t) n ḏd sw | לדעת להחזיר תשובה לאומרה, | `לְהוֹדִיעֲךָ קֹשְׁטְ אִמְרֵי אֱמֶת; לְהָשִׁיב אֲמָרִים אֱמֶת לְשֹׁלְחֶיךָ` (משלי כב:כא) | equivalent | הצמד 1.5–1.6 ("להשיב תשובה לאומרה, להשיב שמועה לשולחו") מקופל במשלי לצלע אחת: "להשיב אמרים … לשולחיך"; במשלי נוסף "אמת", שאינו כאן. |
| 1.6 | r ꜥn smj n hꜣb.w sw | להשיב שמועה לשולחו, | `לְהָשִׁיב אֲמָרִים אֱמֶת לְשֹׁלְחֶיךָ` (משלי כב:כא) | equivalent | אותה תמונה: השליח שמחזיר דבר לשולחו |
| 1.6 | r ꜥn smj n hꜣb.w sw | להשיב שמועה לשולחו, | `עַתָּה דַּע וּרְאֵה מָה אָשִׁיב שֹׁלְחִי דָּבָר` (שמואל ב כד:יג) | equivalent | אותו צירוף עברי של "השיב (דבר) לשולח". |
| 1.7 | r sꜥq(ꜣ)w =f r mj,t{.pl} n ꜥnḫ | ליישרו אל דרך החיים, | `וְדֶרֶךְ חַיִּים תּוֹכְחוֹת מוּסָר` (משלי ו:כג); `אֹרַח לְחַיִּים שׁוֹמֵר מוּסָר` (משלי י:יז) | equivalent | ו־ – "דרך החיים" בצמוד ל"מוסר", כמו כאן (1.1, 1.7). |
| 1.10 | ⟨r⟩? jri̯ ḥm(,w) =f r ḏw,w | להטות את משוטו מן הרע, | `אַל-תֵּט-יָמִין וּשְׂמֹאול; הָסֵר רַגְלְךָ מֵרָע` (משלי ד:כז) | equivalent | הטייה מן הרע; במשלי ברגל, במצרית במשוט. |
| 1.13 | jri̯.n (j)m(,j)-r(ʾ)-sꜣtꜣ sšsꜣ.wj m jꜣw,t.ṱ =f | אשר עשה הממונה על הקרקעות, הבקי במשרתו, | `חָזִיתָ אִישׁ מָהִיר בִּמְלַאכְתּוֹ` (משלי כב:כט) | equivalent | בקיאות במשרה; המקבילה הישירה היא סוף החיבור (27.16–17), וכאן כבר מופיעה התכונה שבה המחבר מתהדר. |
| 1.15 | (j)m(,j)-r(ʾ)-nfr,y gsgs wḏꜣ,t | הממונה על הַבָּר, המכוון את הַוּגָ׳את, | `וַיִּצְבֹּר יוֹסֵף בָּר כְּחוֹל הַיָּם הַרְבֵּה מְאֹד` (בראשית מא:מט) | equivalent | תפקיד "הממונה על התבואה" המצרי הוא תפקידו של יוסף, ו`בָּר` היא מלת התבואה של סיפור יוסף; זה תואר מצרי אמיתי, לא שאילה. |
| 1.19 | [s]⸢mn⸣ wḏ,⸢y⸣ ḥr tš,jw n ꜣḫ(,t).pl | המקבע את אבן־הגבול על גבולות השדות, | `לֹא תַסִּיג גְּבוּל רֵעֲךָ אֲשֶׁר גָּבְלוּ רִאשֹׁנִים` (דברים יט:יד) | equivalent | אבן הגבול, שהבית השישי (7.12) אוסר להזיזה; כאן מי שמציב אותה הוא המחבר עצמו. |
| 2.6 | stꜣ ꜥḥꜥr m nfr,y | המביא את ערימת הַבָּר, | `וְיִצְבְּרוּ בָר תַּחַת יַד פַּרְעֹה אֹכֶל בֶּעָרִים וְשָׁמָרוּ` (בראשית מא:לה) | equivalent | ערמות התבואה שנאספו לאסמי המלך, כמו בתוכניתו של יוסף. |
| 2.7 | gr mꜣꜥ m Tnj Ṯꜣ{w}-wr | השותק האמיתי בִּתְנִי שֶׁבְּצָ׳א־וֶר, | `גַּם אֱוִיל מַחֲרִישׁ חָכָם יֵחָשֵׁב; אֹטֵם שְׂפָתָיו נָבוֹן` (משלי יז:כח) | equivalent | השתיקה כמידת החכם. |
| 2.11 | Jmn-m-jp,t zꜣ n Kꜣ-nḫt | אֲמֶנֶמוֹפֶּה, בן כָּא־נַחְט, | `הִנְנִי פוֹקֵד אֶל אָמוֹן מִנֹּא` (ירמיהו מו:כה) | equivalent | האל אָמוֹן (*Jmn*), שבשמו נקרא המחבר, הוא אמון של נֹא (תבי) שבנבואות על מצרים |
| 2.11 | Jmn-m-jp,t zꜣ n Kꜣ-nḫt | אֲמֶנֶמוֹפֶּה, בן כָּא־נַחְט, | `הֲתֵיטְבִי מִנֹּא אָמוֹן הַיֹּשְׁבָה בַּיְאֹרִים` (נחום ג:ח) | equivalent |  |
| 3.6 | zꜣ n sḫm,yt-n-Šw-Tfnw,t | בנה של המנגנת במנענעים לְשׁוּ וּלְתֶפְנוּת, | `וּבְכִנֹּרוֹת וּבִנְבָלִים וּבְתֻפִּים וּבִמְנַעַנְעִים וּבְצֶלְצֱלִים` (שמואל ב ו:ה) | equivalent | `מְנַעַנְעִים` המקראיים הם, לפי רוב הפרשנים, כלי נקישה מטולטלים מסוג הסיסטרום; המלה העברית נבחרה כי היא המלה העברית לכלי, ולא משום ההקבלה. |
| 3.9 | jmm ꜥnḫ,wj.du =k sḏm j:ḏd.wt | תן אוזניך, שמע את הנאמרות, | `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים` (משלי כב:יז) | divergence | זו פתיחת "דברי החכמים" במשלי, המקבילה המוכרת ביותר לאמנמופה. ההבדלים: במצרית "תן" (*jmj*), במשלי "הַט"; במצרית שתי אוזניים, במשלי אוזן אחת; במצרית "הנאמרות" סתם, במשלי "דברי חכמים" – ויש שהציעו שהמלים `דִּבְרֵי חֲכָמִים` היו במקורן כותרת ("דברי חכמים") שנבלעה בפסוק. התרגום אומר "תן", כדי שהקורא יראה את הסטייה |
| 3.9 | jmm ꜥnḫ,wj.du =k sḏm j:ḏd.wt | תן אוזניך, שמע את הנאמרות, | `הָבִיאָה לַמּוּסָר לִבֶּךָ; וְאָזְנֶךָ לְאִמְרֵי-דָעַת` (משלי כג:יב) | equivalent | הצמד אוזן ולב. |
| 3.10 | jmm ḥꜣ,tj =k r wḥꜥ =w | תן את לבבך לְפָרְשָׁן, | `וְלִבְּךָ תָּשִׁית לְדַעְתִּי` (משלי כב:יז) | equivalent | הצלע השנייה של אותו פסוק: אוזן ואחריה לב, כמו כאן; משלי "תשית" (שים), המצרית "תן". |
| 3.11 | ꜣḫ pꜣ ḏi̯.t st m jb =k | מועיל הוא לשים אותן בלבך, | `כִּי-נָעִים כִּי-תִשְׁמְרֵם בְּבִטְנֶךָ` (משלי כב:יח) | divergence | משלי אומר "נעים", המצרית "מועיל" (*ꜣḫ*); ובמשלי השמירה "בבטן", כמו בשורה 3.13 כאן. |
| 3.13 | jmm ḥtp =w ⟨m⟩ mꜥhn.w n ẖ,t =k | תן להן לנוח בארגז בטנך, | `כִּי-נָעִים כִּי-תִשְׁמְרֵם בְּבִטְנֶךָ` (משלי כב:יח) | equivalent | "בבטנך": אותו איבר (*ẖ.t* = `בֶּטֶן`), כמחסן של הזיכרון |
| 3.13 | jmm ḥtp =w ⟨m⟩ mꜥhn.w n ẖ,t =k | תן להן לנוח בארגז בטנך, | `שָׁמְרֵם בְּתוֹךְ לְבָבֶךָ` (משלי ד:כא) | equivalent | שמירת הדברים בפנים. **אוסטרקון קהיר** (קדום מן הפפירוס) גורס כאן `m-ẖnw ẖ,t =⟨k⟩` "בתוך בטנך" – בלי "ארגז": נוסח שקרוב עוד יותר ל"בבטנך" של משלי. |
| 3.16 | jri̯.y =w nꜥy,t m ns{,t} =k | יהיו ליתד־קשירה בלשונך. | `יִכֹּנוּ יַחְדָּו עַל-שְׂפָתֶיךָ` (משלי כב:יח) | divergence | משלי אומר "שפתיך", המצרית "לשונך"; ובמקום יתד הקשירה – הפועל `יִכֹּנוּ` ("יהיו נכונים, יציבים"), שמבטא את אותה יציבות בלי הדימוי הימי |
| 3.16 | jri̯.y =w nꜥy,t m ns{,t} =k | יהיו ליתד־קשירה בלשונך. | `דִּבְרֵי חֲכָמִים כַּדָּרְבֹנוֹת וּכְמַשְׂמְרוֹת נְטוּעִים` (קהלת יב:יא) | equivalent | דברי החכמים כיתדות תקועות. אוסטרקון קהיר: `n ns{,ṱ} =k` "לשונך" במלת יחס אחרת ("ללשונך"?). |
| 3.17 | jr jri̯.y =k hꜣ~wꜣ~wj =k jw nn m jb =k | אם תבלה את עתך ואֵלֶּה בלבך, | `בְּיָדְךָ עִתֹּתָי` (תהלים לא:טז) | equivalent | `עֵת` כ"זמן חייו" של אדם. |
| 4.1 | gmi̯ =k mdw(,t).pl =j m wḏꜣ n ꜥnḫ | תמצא את דבריי אוצר לחיים, | `כִּי-חַיִּים הֵם לְמֹצְאֵיהֶם; וּלְכָל-בְּשָׂרוֹ מַרְפֵּא` (משלי ד:כב) | equivalent | אותו רצף: מי ש"מוצא" את דברי האב מוצא חיים, וגופו בריא (השורה הבאה); אוסטרקון קהיר: `m wḏꜣ ꜥnḫ` "אוצר חיים" (בלי "ל־"). |
| 4.2 | wḏꜣ ḥꜥ,t =k ḥr-tp tꜣ | יהיה גופך שלם על פני הארץ. | `וּלְכָל-בְּשָׂרוֹ מַרְפֵּא` (משלי ד:כב); `רִפְאוּת תְּהִי לְשָׁרֶּךָ` (משלי ג:ח) | equivalent | ו־ – החכמה כבריאות הגוף. |
| 4.4 | zꜣw tw r ḥwrꜥ jꜣd | הישמר לך מגזול אומלל, | `אַל-תִּגְזָל-דָּל כִּי דַל-הוּא; וְאַל-תְּדַכֵּא עָנִי בַשָּׁעַר` (משלי כב:כב) | equivalent | אותו איסור, באותו פועל (*ḥwrꜥ* = `גָּזַל`); במשלי `דָּל`, במצרית *jꜣd* "אומלל" (`renderings.md` §4.3: `דַּל` שמור ל־*nmḥ*), ובמשלי נוסף הנימוק "כי דל הוא" |
| 4.4 | zꜣw tw r ḥwrꜥ jꜣd | הישמר לך מגזול אומלל, | `לֹא תַעֲשֹׁק אֶת רֵעֲךָ וְלֹא תִגְזֹל` (ויקרא יט:יג) | equivalent | איסור הגזל. אוסטרקון קהיר: `ꜣd,w?` – כתיב אחר של אותה מלה. |
| 4.5 | r nꜥš.jw{Ḥr} ⟨r⟩? zꜣw-ꜥ | ומהתגבר על חלש־הזרוע. | `וְאַל-תְּדַכֵּא עָנִי בַשָּׁעַר` (משלי כב:כב) | equivalent | הצלע השנייה: אלימות כלפי החלש; במצרית אין "בשער". |
| 4.6 | m-jri̯ jꜣwi̯ ḏr,t =k r tkn jꜣ(w) | אל תושיט את ידך לגעת בזקן, | `מִפְּנֵי שֵׂיבָה תָּקוּם וְהָדַרְתָּ פְּנֵי זָקֵן` (ויקרא יט:לב) | equivalent | כבוד הזקן. |
| 4.11 | mtw =k ꜥn n =f wšb ḥr ḏs =k | ואל תשיב לו תשובה בעצמך. | `אַל-תֹּאמַר אֲשַׁלְּמָה-רָע; קַוֵּה לַיהוָה וְיֹשַׁע לָךְ` (משלי כ:כב) | equivalent | אל תגמול בעצמך: הגמול שייך לאל (5.17 כאן: "האל ידע להשיב לו"). |
| 4.14 | tꜣ mḥ(,yt) hꜣi̯.y.ṱ skm =s wnw,t.ṱ =f | הצפון ירד לסיים את שעתו; | `לֹא-כֵן הָרְשָׁעִים: כִּי אִם-כַּמֹּץ אֲשֶׁר-תִּדְּפֶנּוּ רוּחַ` (תהלים א:ד) | equivalent | הרשע כדבר שהרוח מטלטלת; ובבית הרביעי (6.1–6.12) ההקבלה לתהלים א נמשכת בשני העצים. |
| 4.16 | pꜣ qrjw ḫy nꜣ msḥ.pl bjn | הרעם רם, הַתִּמְסָחִים רָעִים. | — | cognate | *msḥ* = `תִּמְסָח` (`renderings.md` §4.2: המלה המצרית, דרך הקופטית והערבית *timsāḥ*, היא מקור המלה העברית החדשה; אין לה מקבילה במקרא). |
| 4.17 | pꜣ šmm tw =k mj ⟨j⟩ḫ | הַחַם – איך אתה? | `אַל-תִּתְרַע אֶת-בַּעַל אָף; וְאֶת-אִישׁ חֵמוֹת לֹא תָבוֹא` (משלי כב:כד) | equivalent | "בעל אף" ו"איש חמות" של משלי הם "החם" של אמנמופה (ראו 11.13) |
| 4.17 | pꜣ šmm tw =k mj ⟨j⟩ḫ | הַחַם – איך אתה? | `אִישׁ חֵמָה יְגָרֶה מָדוֹן` (משלי טו:יח) | equivalent |  |
| 4.19 | Jꜥḥ (ḥr) sꜥḥꜥ btꜣw,ṱ =f | יָעַח מעמיד את פשעו. | — | — | [מקבילה: AM 12.13] – "ביום שהוא מעמיד את פשעו" (קרוב, לא זהה). |
| 5.1 | j:jri̯ ḥm(,w) ḏꜣi̯.y ={n}n pꜣ bjn | הטו משוט, נעביר את הרע, | `אִם-רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם` (משלי כה:כא) | equivalent | ההוראה לעזור לאויב שנקלע לצרה מתחילה כאן ונמשכת ב־5.3–5.6. |
| 5.3 | ṯs sw jmm n =f ḏr,t =k | הקם אותו, תן לו את ידך, | `אִם-רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם; וְאִם-צָמֵא הַשְׁקֵהוּ מָיִם` (משלי כה:כא) | equivalent | עזרה לאויב. |
| 5.4 | ḫꜣꜥ sw ⟨ḥr⟩ ꜥ.wj pꜣ nṯr | עזוב אותו בזרועות האל; | `הַשְׁלֵךְ עַל-יְהוָה יְהָבְךָ וְהוּא יְכַלְכְּלֶךָ` (תהלים נה:כג) | equivalent | השלכה על האל (וגם הפועל המצרי *ḫꜣꜥ* פירושו "להשליך") |
| 5.4 | ḫꜣꜥ sw ⟨ḥr⟩ ꜥ.wj pꜣ nṯr | עזוב אותו בזרועות האל; | `וַיַּעֲזֹב כָּל אֲשֶׁר לוֹ בְּיַד יוֹסֵף` (בראשית לט:ו) | equivalent | "עזב ביד" העברי: הפקדה. |
| 5.5 | mḥ ẖ,t =f m tʾ m-ḏi̯w =k | מלא את בטנו בלחם שלך, | `אִם-רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם` (משלי כה:כא) | equivalent | לחם לאויב. |
| 5.6 | sꜣwj =f mtw =f ṯm | שֶׁיִּשְׂבַּע ויכלם. | `כִּי גֶחָלִים אַתָּה חֹתֶה עַל-רֹאשׁוֹ; וַיהוָה יְשַׁלֶּם-לָךְ` (משלי כה:כב) | equivalent | תוצאת החסד לאויב: במשלי "גחלים על ראשו", במצרית בושה. |
| 5.8 | wsfꜣ (r)-ḥꜣ,t mdwi̯ | להתאפק לפני הדיבור. | `חָזִיתָ אִישׁ אָץ בִּדְבָרָיו: תִּקְוָה לִכְסִיל מִמֶּנּוּ` (משלי כט:כ) | equivalent | הפסקה לפני הדיבור. |
| 5.10 | m-jri̯ nḥb ṯ(t)ṯ(t) (j)~rʾ~mꜥ pꜣ tꜣ-rʾ | אל תגרה ריב עם לוהט־הפה, | `אִישׁ חֵמָה יְגָרֶה מָדוֹן; וְאֶרֶךְ אַפַּיִם יַשְׁקִיט רִיב` (משלי טו:יח) | equivalent | אותו צירוף ("יגרה מדון" / "תגרה ריב"), ואותו ניגוד בין הכעסן למאופק |
| 5.10 | m-jri̯ nḥb ṯ(t)ṯ(t) (j)~rʾ~mꜥ pꜣ tꜣ-rʾ | אל תגרה ריב עם לוהט־הפה, | `וְאִישׁ מִדְוָנִים (מִדְיָנִים) לְחַרְחַר-רִיב` (משלי כו:כא) | equivalent | מעורר הריב. |
| 5.11 | mtw =k dbdb =f n mdw(,t).pl | ואל תתקוף אותו בדברים. | `יֵשׁ בּוֹטֶה כְּמַדְקְרוֹת חָרֶב; וּלְשׁוֹן חֲכָמִים מַרְפֵּא` (משלי יב:יח) | equivalent | דיבור שדוקר. |
| 5.13 | sḏr (r)-ḥꜣ,t mdwi̯ | יְשַׁן לפני הדיבור. | `חוֹשֵׂךְ אֲמָרָיו יוֹדֵעַ דָּעַת` (משלי יז:כז) | equivalent | העוצר את דבריו. |
| 5.14 | ḏꜥ pri̯ =f mj ḫ,t m rwy | סערה – יוצאת היא כאש בקש, | `לָכֵן כֶּאֱכֹל קַשׁ לְשׁוֹן אֵשׁ וַחֲשַׁשׁ לֶהָבָה יִרְפֶּה` (ישעיהו ה:כד) | equivalent | האש בקש כדימוי למהירות ההרס |
| 5.14 | ḏꜥ pri̯ =f mj ḫ,t m rwy | סערה – יוצאת היא כאש בקש, | `פֶּחָם לְגֶחָלִים וְעֵצִים לְאֵשׁ; וְאִישׁ מִדְוָנִים (מִדְיָנִים) לְחַרְחַר-רִיב` (משלי כו:כא) | equivalent | הכעסן כאש. |
| 5.17 | r pꜣ nṯr (r) rḫ ꜥn n =f | האל יֵדַע להשיב לו. | `כִּי-יְהוָה יָרִיב רִיבָם; וְקָבַע אֶת-קֹבְעֵיהֶם נָפֶשׁ` (משלי כב:כג) | equivalent | האל הוא המשיב והגומל, לא האדם |
| 5.17 | r pꜣ nṯr (r) rḫ ꜥn n =f | האל יֵדַע להשיב לו. | `אַל-תֹּאמַר אֲשַׁלְּמָה-רָע; קַוֵּה לַיהוָה וְיֹשַׁע לָךְ` (משלי כ:כב) | equivalent | הניגוד בין גמול עצמי להמתנה לאל |
| 5.17 | r pꜣ nṯr (r) rḫ ꜥn n =f | האל יֵדַע להשיב לו. | `לִי נָקָם וְשִׁלֵּם לְעֵת תָּמוּט רַגְלָם` (דברים לב:לה) | divergence | אצל אמנמופה "ידע להשיב לו" רחוק מלשון הנקמה. |
| 5.18 | jr jri̯.yw =k hꜣ~wꜣ~wj =k jw nn m jb =k | אם תבלה את עתך ואֵלֶּה בלבך, | — | — | [מקבילה: AM 3.17, AM 17.15] – העברית זהה לזו של 3.17 (המצרית שונה רק בכתיב `jri̯.yw`). |
| 5.19 | r nꜣyw =k ms.wj.pl (r) ptr =w | ילדיך יִרְאוּ אותן. | — | — | [מקבילה: AM 17.16] – אותה שורה אחרי הפזמון בבית ה־16. |
| 6.1 | jr pꜣ šmm n ḥw,t-nṯr | הנה הַחַם שבבית האל – | — | — | [מקבילה: AM 7.7] – "הנה כל שותק שבבית האל" פותח את חציו השני של הבית החמישי. |
| 6.2 | sw mj šꜣ{,t.pl} rd m-ḫntj | הוא כעץ הצומח בפנים: | `וְהָיָה כְּעַרְעָר בָּעֲרָבָה וְלֹא יִרְאֶה כִּי יָבוֹא טוֹב` (ירמיהו יז:ו) | divergence | גם ירמיהו משווה את מי שאינו בוטח באל לצמח מקולל, אבל אצלו זה שיח במדבר, ואצל אמנמופה – עץ "בפנים" (בתוך חדר?), כלומר במקום שאינו מתאים לצמיחה. |
| 6.4 | jni̯.tw pḥ.{ṱ}⟨wj⟩ =f n mꜥḫrmꜥ | קצו מובא אל מגרש־העצים; | — | — | [מקבילה: AM 6.12] – "קצו מובא במטע": אותו פועל ואותו "קץ", ושונה רק המקום (ומלת היחס). |
| 6.5 | sw mḥw wꜣi̯.wj r s,t.ṱ =f | הוא צף במים, רחוק ממקומו; | `כְּעֵץ שָׁתוּל עַל-פַּלְגֵי-מָיִם` (תהלים א:ג) | divergence | בתהלים המים הם מקור חייו של העץ הטוב; כאן המים נושאים את העץ הכרות אל מותו. |
| 6.7 | gr mꜣꜥ ḏi̯ =f sw m rwjꜣ | השותק האמיתי – שם הוא את עצמו בצד, | `גַּם אֱוִיל מַחֲרִישׁ חָכָם יֵחָשֵׁב; אֹטֵם שְׂפָתָיו נָבוֹן` (משלי יז:כח) | equivalent | השתיקה כחכמה. |
| 6.8 | sw mj šꜣ{,t.pl} rd m tjḥn,t | הוא כעץ הצומח בפרדס: | `וְהָיָה כְּעֵץ שָׁתוּל עַל-פַּלְגֵי-מָיִם` (תהלים א:ג) | equivalent | האדם הטוב כעץ פורח |
| 6.8 | sw mj šꜣ{,t.pl} rd m tjḥn,t | הוא כעץ הצומח בפרדס: | `וְהָיָה כְּעֵץ שָׁתוּל עַל מַיִם וְעַל יוּבַל יְשַׁלַּח שָׁרָשָׁיו` (ירמיהו יז:ח) | equivalent | אותו דימוי, ובניגוד לעץ הרע |
| 6.8 | sw mj šꜣ{,t.pl} rd m tjḥn,t | הוא כעץ הצומח בפרדס: | `וְהָיָה כְּעֵץ שָׁתוּל עַל מַיִם וְעַל יוּבַל יְשַׁלַּח שָׁרָשָׁיו` (ירמיהו יז:ח) | divergence | במקרא העץ "שתול" (נטוע בידי אדם, ליד המים), כאן הוא "צומח" (*rd*) – ואין מים בתמונה. |
| 6.9 | sw (ḥr) ꜣḫꜣḫ qb =f šm(,w) =f | הוא רענן, כופל את קצירו; | `וְהָיָה עָלֵהוּ רַעֲנָן; וּבִשְׁנַת בַּצֹּרֶת לֹא יִדְאָג וְלֹא יָמִישׁ מֵעֲשׂוֹת פֶּרִי` (ירמיהו יז:ח) | equivalent | העץ הרענן ופריו. |
| 6.11 | dgꜣ =f bjnr ḫꜣ(y)b(,t) =f nḏm | פריו מתוק, צילו נעים; | `בְּצִלּוֹ חִמַּדְתִּי וְיָשַׁבְתִּי וּפִרְיוֹ מָתוֹק לְחִכִּי` (שיר השירים ב:ג) | equivalent | אותו צמד, צל ופרי מתוק, בעץ הנבחר |
| 6.11 | dgꜣ =f bjnr ḫꜣ(y)b(,t) =f nḏm | פריו מתוק, צילו נעים; | `אֲשֶׁר פִּרְיוֹ יִתֵּן בְּעִתּוֹ וְעָלֵהוּ לֹא-יִבּוֹל` (תהלים א:ג) | equivalent | הפרי של העץ הטוב. |
| 6.12 | jni̯.tw pḥ.{ṱ}⟨wj⟩ =f m mnw | קצו מובא במטע. | — | — | [מקבילה: AM 6.4] – העברית זהה לזו של 6.4 עד המקום: שם "אל מגרש־העצים", כאן "במטע" (גם מלת היחס המצרית שונה: *n* / *m*). |
| 6.14 | m-jri̯ ꜥšgꜣjw dnj,t n ḥw,t-nṯr | אל תעשוק את חלק בית האל, | `לֹא תַעֲשֹׁק אֶת רֵעֲךָ וְלֹא תִגְזֹל` (ויקרא יט:יג) | cognate | *ꜥšq* היא מלה שמית שאולה במצרית המאוחרת (כתובה בכתיב ההברתי של מלים זרות), והיא קרובת `עָשַׁק` העברי: מגע לשוני בכיוון ההפוך – מן השמית אל המצרית |
| 6.14 | m-jri̯ ꜥšgꜣjw dnj,t n ḥw,t-nṯr | אל תעשוק את חלק בית האל, | `עֹשֵׁק דָּל לְהַרְבּוֹת לוֹ נֹתֵן לְעָשִׁיר אַךְ-לְמַחְסוֹר` (משלי כב:טז) | equivalent | העושק, בפסוק שלפני "דברי חכמים". |
| 6.16 | m-jri̯ rmn bꜣkj n nṯr | אל תזיז עבד אֵל | — | — | [מקבילה: AM 7.12] – אותו פועל (*rmnj*) הוא הפועל של "אל תזיז את אבן־הגבול" בבית השישי, ולוח מוסקבה כותב כאן `rmni̯` כמו שם. |
| 6.18 | m-jri̯ ḏd pꜣ-hrw {n-}mj dwꜣ,w | אל תאמר: "היום כמחר". | `אַל-תִּתְהַלֵּל בְּיוֹם מָחָר: כִּי לֹא-תֵדַע מַה-יֵּלֶד יוֹם` (משלי כז:א) | equivalent | אותה אזהרה מפני הביטחון במחר (אמנמופה חוזר עליה ב־19.11–13) |
| 6.18 | m-jri̯ ḏd pꜣ-hrw {n-}mj dwꜣ,w | אל תאמר: "היום כמחר". | `וְהָיָה כָזֶה יוֹם מָחָר גָּדוֹל יֶתֶר מְאֹד` (ישעיהו נו:יב) | equivalent | דברי ההוללים "מחר יהיה כמו היום": אותו משפט מפי הדמות השלילית. |
| 7.2 | pꜣ mt(r) ḫpr m rʾ n hꜣn,t | הגאות נהייתה לְפִי־גַּלִּים, | `וְנִשְּׁתוּ מַיִם מֵהַיָּם; וְנָהָר יֶחֱרַב וְיָבֵשׁ` (ישעיהו יט:ה) | equivalent | גם במשא מצרים בישעיהו ייבוש הנילוס הוא תמונת המהפך (7.2–7.6). |
| 7.6 | nꜣ mꜥ~k~mꜥ~rw~tj ẖꜥꜣ | המכמורות מרוקנות. | `וּפֹרְשֵׂי מִכְמֹרֶת עַל פְּנֵי מַיִם אֻמְלָלוּ` (ישעיהו יט:ח) | cognate | *mkmr.t* היא `מִכְמֹרֶת` העברית (מלה שמית שנשאלה למצרית, ונכתבת בכתיב ההברתי של מלים זרות); וישעיהו מתאר באותה מלה את הדייגים המצריים שנשארו בלי דגה כשהנילוס חרב – אותה תמונה כאן. |
| 7.7 | jr gr nb n ḥw,t-nṯr | הנה כל שותק שבבית האל – | — | — | [מקבילה: AM 6.1] – "הנה החם שבבית האל": אותו מבנה, בדמות ההפוכה. |
| 7.8 | st (ḥr) ḏd wr ḥs(,wt) Rꜥ | הם אומרים: "גדול חן רַא!" | `וּמְצָא-חֵן וְשֵׂכֶל-טוֹב בְּעֵינֵי אֱלֹהִים וְאָדָם` (משלי ג:ד) | equivalent | "חן" מלמעלה כשכר המידה הטובה. |
| 7.9 | j:mḥ tw n gr gmi̯ =k pꜣ ꜥnḫ | היאחז בשותק – תמצא את החיים, | `כִּי מֹצְאִי מָצָאי (מָצָא) חַיִּים` (משלי ח:לה) | equivalent | "מצא חיים" כשכר החכמה |
| 7.9 | j:mḥ tw n gr gmi̯ =k pꜣ ꜥnḫ | היאחז בשותק – תמצא את החיים, | `כִּי-חַיִּים הֵם לְמֹצְאֵיהֶם` (משלי ד:כב) | equivalent |  |
| 7.10 | wḏꜣ ḥꜥ,t =k ḥr-tp tꜣ | יהיה גופך שלם על פני הארץ. | — | — | [מקבילה: AM 4.2] – העברית זהה לזו של 4.2 (וכך גם המצרית). |
| 7.12 | m-jri̯ rmni̯ wḏ.y ḥr tšjw.pl n ꜣḫ(,t) | אל תזיז את אבן־הגבול שעל גבולות השדות, | `לֹא תַסִּיג גְּבוּל רֵעֲךָ אֲשֶׁר גָּבְלוּ רִאשֹׁנִים` (דברים יט:יד) | equivalent | אותו איסור |
| 7.12 | m-jri̯ rmni̯ wḏ.y ḥr tšjw.pl n ꜣḫ(,t) | אל תזיז את אבן־הגבול שעל גבולות השדות, | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ; וְאָמַר כָּל הָעָם אָמֵן` (דברים כז:יז) | equivalent |  |
| 7.12 | m-jri̯ rmni̯ wḏ.y ḥr tšjw.pl n ꜣḫ(,t) | אל תזיז את אבן־הגבול שעל גבולות השדות, | `אַל-תַּסֵּג גְּבוּל עוֹלָם אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח) | equivalent | בתורה ובמשלי הפועל `הִסִּיג` (הזיז אחורה) והמושא הוא "הגבול"; במצרית הפועל *rmnj* ("לשאת, להזיז") והמושא – האבן עצמה (*wḏ*). `הִסִּיג` שמור בקורפוס לתורה ולמשלי, כדי שהקורא יראה את ההבדל ולא ימצא אותו בתרגום. |
| 7.13 | mtw =k tfjw hꜣ~wꜣ n nwḥ | ואל תעקור את מקום חבל־המידה. | `וְהִנֵּה אִישׁ; וּבְיָדוֹ חֶבֶל מִדָּה` (זכריה ב:ה) | equivalent | חבל המידה של המודד |
| 7.13 | mtw =k tfjw hꜣ~wꜣ n nwḥ | ואל תעקור את מקום חבל־המידה. | `חֲבָלִים נָפְלוּ-לִי בַּנְּעִמִים; אַף-נַחֲלָת שָׁפְרָה עָלָי` (תהלים טז:ו) | equivalent | החבל כמידת הנחלה. |
| 7.15 | mtw =k hꜣd tšjw.pl n ḫꜣrj(,t) | ואל תפלוש אל גבולות האלמנה. | `אַל-תַּסֵּג גְּבוּל עוֹלָם; וּבִשְׂדֵי יְתוֹמִים אַל-תָּבֹא` (משלי כג:י) | equivalent | זו המקבילה הישירה, ובה התיקון המפורסם: הואיל ואמנמופה אומר כאן "גבולות האלמנה", הציעו חוקרים רבים לקרוא במשלי `גְּבוּל אַלְמָנָה` במקום `גְּבוּל עוֹלָם` – אותן אותיות כמעט (`עלם` / `אלמ[נה]`), וזה צמד טבעי ליתומים שבצלע השנייה. ההצעה נשענת על אמנמופה בלבד |
| 7.15 | mtw =k hꜣd tšjw.pl n ḫꜣrj(,t) | ואל תפלוש אל גבולות האלמנה. | `כִּי-גֹאֲלָם חָזָק; הוּא-יָרִיב אֶת-רִיבָם אִתָּךְ` (משלי כג:יא) | equivalent | משלי מוסיף מגן לאלמנה וליתום, ואמנמופה – את עצמת יָעַח (7.19). |
| 7.17 | pꜣ ꜥšgꜣjw =k sw n sḫ,t | אשר עשקת – הוא של השדה; | `לֹא תַעֲשֹׁק אֶת רֵעֲךָ וְלֹא תִגְזֹל` (ויקרא יט:יג) | cognate | *ꜥšq*, המלה השמית השאולה של 6.14, חוזרת כאן. |
| 7.18 | wn(n) =f (ḥr) sḫt m ꜥnḫ.y.pl n ꜥḏꜣ | צָד הוא בשבועות שקר – | `וְלֹא-תִשָּׁבְעוּ בִשְׁמִי לַשָּׁקֶר` (ויקרא יט:יב) | equivalent | השבועה לשקר. |
| 7.19 | jw =f spḥ n-m bꜣ,w n Jꜥḥ | לכוד הוא בלולאה בעצמת יָעַח. | `כִּי-גֹאֲלָם חָזָק; הוּא-יָרִיב אֶת-רִיבָם אִתָּךְ` (משלי כג:יא) | equivalent | אחרי האיסור על פגיעה בגבול (כג:י) – גואל חזק שנוקם; כאן הירח. |
| 8.7 | jw =w (ḥr) ṯꜣi̯ ꜣḫ,t.ṱ =f m-ḏr,t ms.wj.pl =f | נוטלים את רכושו מיד ילדיו, | `נַחֲלָה מְבֹחֶלֶת (מְבֹהֶלֶת) בָּרִאשׁוֹנָה; וְאַחֲרִיתָהּ לֹא תְבֹרָךְ` (משלי כ:כא) | equivalent | הנחלה שנרכשה בחיפזון (בגזל) אינה עוברת בברכה לדור הבא. |
| 8.8 | ḏi̯ḏi̯ pꜣy =f nkt n ky | וקניינו ניתן לאחר. | `חַיִל בָּלַע וַיְקִאֶנּוּ; מִבִּטְנוֹ יֹרִשֶׁנּוּ אֵל` (איוב כ:טו) | equivalent | הרכוש הגזול שהאל מוציא מידי הגוזל. |
| 8.9 | zꜣw tw r hꜣd tšjw.pl n ꜣḥ,t.pl | הישמר לך מפלוש אל גבולות השדות, | `וּבִשְׂדֵי יְתוֹמִים אַל-תָּבֹא` (משלי כג:י) | equivalent | "שדות" ופלישה (משלי: "תבוא"); זו השורה שסדר הפסוקים במשלי כג:י–יא מזכיר. |
| 8.10 | tm ḥry(,t) jni̯.ṱ =k | פן תביא אותך האימה. | `פֶּן-תֶּאֱלַף אֹרְחֹתָו; וְלָקַחְתָּ מוֹקֵשׁ לְנַפְשֶׁךָ` (משלי כב:כה) | divergence | אותו מבנה ("פן…"), ובמשלי המוקש במקום האימה. |
| 8.12 | wpi̯ tšjw.pl n ꜣḫ(,t) | הפוסק את גבולות השדות. | `יַצֵּב גְּבֻלֹת עַמִּים` (דברים לב:ח) | equivalent | האל כקובע הגבולות. |
| 8.17 | skꜣ m sḫ,t gmi̯ =k ḫr,ṱ =k | חרוש בשדה – תמצא את מחייתך, | `רָב-אֹכֶל נִיר רָאשִׁים` (משלי יג:כג) | equivalent | לחם מן החריש שלך. |
| 8.19 | ꜣḫ jp,t jw ḏi̯ s(j) n =k pꜣ nṯr | מוטב איפה שנתן לך האל | `אֶבֶן שְׁלֵמָה וָצֶדֶק יִהְיֶה לָּךְ אֵיפָה שְׁלֵמָה וָצֶדֶק` (דברים כה:טו) | cognate | *jp.t* היא מקור המלה העברית `אֵיפָה` (מלה מצרית שאולה) |
| 8.19 | ꜣḫ jp,t jw ḏi̯ s(j) n =k pꜣ nṯr | מוטב איפה שנתן לך האל | `טוֹב-מְעַט בִּצְדָקָה מֵרֹב תְּבוּאוֹת בְּלֹא מִשְׁפָּט` (משלי טז:ח) | equivalent | אותו משל, באותו מבנה. |
| 8.20 | r 5000 m-gꜣ~nj~sꜣ | מחמשת אלפים שלא כדין. | `טוֹב-מְעַט בְּיִרְאַת יְהוָה מֵאוֹצָר רָב וּמְהוּמָה בוֹ` (משלי טו:טז) | equivalent | המעט שבידי האל מול הרב. |
| 9.3 | km ꜣ,t pꜣy =w ꜥḥꜥ(,w) n tꜣ šn(w),tj | בתום רגע – משך ימיהם באסם; | `חַיִל בָּלַע וַיְקִאֶנּוּ` (איוב כ:טו) | equivalent |  |
| 9.4 | ḥḏ tꜣ jw =w ḏfꜣw | האירה הארץ – והם טבועים. | — | — | [מקבילה: AM 9.18] – "האירה הארץ – אינם בביתך" בבית השביעי. |
| 9.5 | ꜣḫ pꜣ nmḥ m-ḏr,t pꜣ nṯr | מוטב הדלות ביד האל | `טוֹב-מְעַט בְּיִרְאַת יְהוָה מֵאוֹצָר רָב וּמְהוּמָה בוֹ` (משלי טו:טז) | equivalent | אותו משל: העוני עם האל מול האוצר; במשלי "ביראת ה'", כאן "ביד האל". |
| 9.6 | r wsr m wḏꜣ | מעושר באוצר; | `מֵאוֹצָר רָב וּמְהוּמָה בוֹ` (משלי טו:טז) | equivalent |  |
| 9.7 | ꜣḫ pꜣw,t{jw}.pl / pꜣwtj.pl jw ḥꜣ,tj nḏm | מוטב עוגות כשהלבב נעים | `טוֹב אֲרֻחַת יָרָק וְאַהֲבָה-שָׁם מִשּׁוֹר אָבוּס וְשִׂנְאָה-בוֹ` (משלי טו:יז); `טוֹב פַּת חֲרֵבָה וְשַׁלְוָה-בָהּ מִבַּיִת מָלֵא זִבְחֵי-רִיב` (משלי יז:א) | equivalent | ו־ – מזון פשוט בשלווה מול שפע עם צער. |
| 9.8 | r wsr ẖr šnn | מעושר עמוס צער. | — | — | [מקבילה: AM 16.14] – שורה זהה. |
| 9.10 | m-jri̯ qmꜣm jb =k m-sꜣ wsr | אל תשליך את לבך אחר העושר, | `אַל-תִּיגַע לְהַעֲשִׁיר; מִבִּינָתְךָ חֲדָל` (משלי כג:ד) | equivalent | פתיחת המקבילה בדברי חכמים: אל תרדוף עושר. |
| 9.11 | nn ḫm Šꜣy Rnn,t | אין איש שֶׁשַּׁאי ורֶנֶנֶת אינם מכירים. | `לַכֹּל זְמָן; וְעֵת לְכָל חֵפֶץ תַּחַת הַשָּׁמָיִם` (קהלת ג:א) | equivalent | לכל אדם עת קבועה (וראו 9.13). |
| 9.13 | z nb n tꜣyw =f wnw,t | כל איש – לשעתו. | `לַכֹּל זְמָן; וְעֵת לְכָל חֵפֶץ תַּחַת הַשָּׁמָיִם` (קהלת ג:א) | equivalent |  |
| 9.14 | m-jri̯ mꜥ~šꜣ~pw r wḫꜣḫ ḥꜣ,ww | אל תתאמץ לבקש שפע, | `אַל-תִּיגַע לְהַעֲשִׁיר` (משלי כג:ד) | equivalent | אותו איסור. |
| 9.18 | ḥḏ tꜣ bn st m pr =k | האירה הארץ – אינם בביתך; | — | — | [מקבילה: AM 9.4] – "האירה הארץ – והם טבועים". |
| 9.19 | ptr =w tꜣy =w s,t ḫr bn st | רואים את מקומם – והם אינם. | `וְעוֹד מְעַט וְאֵין רָשָׁע; וְהִתְבּוֹנַנְתָּ עַל-מְקוֹמוֹ וְאֵינֶנּוּ` (תהלים לז:י) | equivalent | אותה תמונה כמעט מלה במלה: מביטים במקום, והוא איננו (בתהלים הרשע, כאן העושר) |
| 9.19 | ptr =w tꜣy =w s,t ḫr bn st | רואים את מקומם – והם אינם. | `הֲתָעִוף (הֲתָעִיף) עֵינֶיךָ בּוֹ` (משלי כג:ה) | equivalent | וההמשך שם: `וְאֵינֶנּוּ`. |
| 9.20 | wn pꜣ jwdn rʾ =f ꜥq(ꜣ) =f sw ꜥmꜣm =f sw | הקרקע פתחה את פיה, יישרה? אותם, בלעה אותם, | `וַתִּפְתַּח הָאָרֶץ אֶת פִּיהָ וַתִּבְלַע אֹתָם וְאֶת בָּתֵּיהֶם` (במדבר טז:לב) | equivalent | אותו רצף פעלים (פתחה את פיה – בלעה אותם), ובבמדבר גם "כל הרכוש" נבלע. |
| 10.4 | jri̯.y =w n =w dnḥ.du mj rʾ.wj.pl | עשו להם כנפיים כאווזים, | `כִּי עָשֹׂה יַעֲשֶׂה-לּוֹ כְנָפַיִם` (משלי כג:ה) | equivalent | אותו פועל ("עשה לו") ואותו עצם ("כנפיים"): זו אחת ההוכחות החזקות לתלות משלי באמנמופה |
| 10.4 | jri̯.y =w n =w dnḥ.du mj rʾ.wj.pl | עשו להם כנפיים כאווזים, | `כִּי עָשֹׂה יַעֲשֶׂה-לּוֹ כְנָפַיִם` (משלי כג:ה) | divergence | במשלי `כְּנֶשֶׁר`, כאן "כאווזים" (*rʾ*) – העוף הנפוץ ביותר של הנילוס, שמשקי הבית גידלו ושלהקותיו עפו בנדידה; משלי החליף את העוף בעוף המעופף המקראי. |
| 10.5 | st pwy r tꜣ p,t | עפו אל השמים. | `כְּנֶשֶׁר וָעיּף (יָעוּף) הַשָּׁמָיִם` (משלי כג:ה) | equivalent | עף השמימה. |
| 10.10 | sk,tj ={k} n ꜥwn,tj ḫꜣꜥ.ṱ ⟨m⟩ ḥꜣy(,t) | ספינת הבצען עזובה בבוץ, | `כֵּן אָרְחוֹת כָּל-בֹּצֵעַ בָּצַע; אֶת-נֶפֶשׁ בְּעָלָיו יִקָּח` (משלי א:יט) | equivalent | גורלו של הבוצע בצע. |
| 10.14 | ḏi̯ =f n =k ḫr,t =k n pꜣ ꜥnḫ | – ייתן לך את מחייתך לחיים, | `הַטְרִיפֵנִי לֶחֶם חֻקִּי` (משלי ל:ח) | equivalent | תפילה למחיה הנחוצה, לא לעושר. |
| 10.18 | wšd tw ḥr-nb.pl | כולם יברכו אותך; | `נִבְחָר שֵׁם מֵעֹשֶׁר רָב; מִכֶּסֶף וּמִזָּהָב חֵן טוֹב` (משלי כב:א) | equivalent | השם הטוב בפי הבריות, בפסוק שבראש פרק "דברי החכמים". |
| 10.21 | swḏꜣ ns{,t} =k r mdw(,t) ḥḏi̯ | החזק את לשונך שלמה מִדָּבָר מזיק, | `נְצֹר לְשׁוֹנְךָ מֵרָע; וּשְׂפָתֶיךָ מִדַּבֵּר מִרְמָה` (תהלים לד:יד) | equivalent | שמירת הלשון מדיבור רע |
| 10.21 | swḏꜣ ns{,t} =k r mdw(,t) ḥḏi̯ | החזק את לשונך שלמה מִדָּבָר מזיק, | `שֹׁמֵר פִּיו וּלְשׁוֹנוֹ שֹׁמֵר מִצָּרוֹת נַפְשׁוֹ` (משלי כא:כג) | equivalent |  |
| 11.3 | drp.w =k n pꜣw,t{jw}.pl / pꜣwtj.pl n nb =k | מנתך מן העוגות של אדונך; | `אִשֵּׁי יְהוָה וְנַחֲלָתוֹ יֹאכֵלוּן` (דברים יח:א) | equivalent | הכוהנים אוכלים מקרבנות אדונם. |
| 11.4 | jri̯.yw =k jmꜣḫ{ḫ} ḥꜣp tw =k ḏb(ꜣ),t =k | תהיה נכבד, תיבתך תסתיר אותך, | `עֲשֵׂה לְךָ תֵּבַת עֲצֵי גֹפֶר` (בראשית ו:יד) | cognate | *ḏbꜣ.t* היא מקור המלה העברית `תֵּבָה` (מלה מצרית שאולה): ארון, תיבה |
| 11.4 | jri̯.yw =k jmꜣḫ{ḫ} ḥꜣp tw =k ḏb(ꜣ),t =k | תהיה נכבד, תיבתך תסתיר אותך, | `וַתִּקַּח לוֹ תֵּבַת גֹּמֶא` (שמות ב:ג) | cognate | תיבת משה, במצרים, באותה מלה. |
| 11.6 | m-jri̯ njs btꜣw r r(m)ṯ | אל תכריז "פשע!" על אדם, | `לֹא-תֵלֵךְ רָכִיל בְּעַמֶּיךָ` (ויקרא יט:טז) | equivalent | אל תפיץ האשמות. |
| 11.7 | ḥꜣp pꜣ sḫr.w.pl n wꜥr | הסתר את עצת הבורח. | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | equivalent | הגנה על הבורח: אל תסגיר. |
| 11.10 | jmm smj nfr ḥr-tp ns{,t} =k | תן שמועה טובה על לשונך, | `שִׂפְתֵי צַדִּיק יֵדְעוּן רָצוֹן; וּפִי רְשָׁעִים תַּהְפֻּכוֹת` (משלי י:לב) | equivalent | הדיבור הטוב. |
| 11.13 | m-jri̯ snsn.tj n =k pꜣ šmm | אל תתחבר אל הַחַם, | `אַל-תִּתְרַע אֶת-בַּעַל אָף; וְאֶת-אִישׁ חֵמוֹת לֹא תָבוֹא` (משלי כב:כד) | equivalent | אחת המקבילות הקרובות ביותר: אותו איסור, באותו סדר (אל תתחבר / אל תיגש), והחם (*šmm*) הוא "בעל אף" ו"איש חמות"; המלה העברית `חֵמוֹת` מן השורש `יחם` – "חום", כמו המצרית. |
| 11.14 | mtw =k ẖnẖn =f r sḏd | ואל תיגש אליו לשוחח. | `וְאֶת-אִישׁ חֵמוֹת לֹא תָבוֹא` (משלי כב:כד) | equivalent | הצלע השנייה: אל תבוא אליו |
| 11.14 | mtw =k ẖnẖn =f r sḏd | ואל תיגש אליו לשוחח. | `פֶּן-תֶּאֱלַף אֹרְחֹתָו; וְלָקַחְתָּ מוֹקֵשׁ לְנַפְשֶׁךָ` (משלי כב:כה) | equivalent | ההמשך במשלי, שמקבילו בסוף הבית (13.8–13.9). |
| 11.15 | swḏꜣ ns{,t} =k r wšb ={j} n ḥr(,j) =k | החזק את לשונך שלמה מלענות למי שמעליך, | — | — | [מקבילה: AM 10.21] – "החזק את לשונך שלמה מדבר מזיק". |
| 11.16 | mtw =k zꜣw =k r wꜥꜣ =f | והישמר לך מלחרף אותו. | — | — | [מקבילה: AM 11.20] – "והישמר לך מלהחיש אותה": אותו מבנה. |
| 11.18 | mtw =k ntfjw n wšb.ṱ =k | ואל תתפרע בתשובתך. | `חָזִיתָ אִישׁ אָץ בִּדְבָרָיו: תִּקְוָה לִכְסִיל מִמֶּנּוּ` (משלי כט:כ) | equivalent |  |
| 11.19 | j:jri̯ =k nḏnḏ wšb(,t) m-ḏr,t z m ḏꜣ~rʾ =k | שאל תשובה מִיַּד איש כשיעורך, | `בְּאֵין תַּחְבֻּלוֹת יִפָּל-עָם; וּתְשׁוּעָה בְּרֹב יוֹעֵץ` (משלי יא:יד) | equivalent | ההתייעצות. |
| 11.20 | mtw =k zꜣw =k r ṯfjdn =sw | והישמר לך מלהחיש אותה. | — | — | [מקבילה: AM 11.16] – אותו מבנה. |
| 12.3 | sw (ḥr) whnj sw (ḥr) qd m ns{,t} =f | הוא הורס והוא בונה בלשונו, | `עֵת לִפְרוֹץ וְעֵת לִבְנוֹת` (קהלת ג:ג) | equivalent |  |
| 12.3 | sw (ḥr) whnj sw (ḥr) qd m ns{,t} =f | הוא הורס והוא בונה בלשונו, | `מָוֶת וְחַיִּים בְּיַד-לָשׁוֹן` (משלי יח:כא) | equivalent | כוחה של הלשון להרוס ולבנות. |
| 12.5 | sw (ḥr) jri̯ wšb(,t) m-šꜣ,wj qnqn | עושה הוא תשובה הראויה למכות, | `שִׂפְתֵי כְסִיל יָבֹאוּ בְרִיב; וּפִיו לְמַהֲלֻמוֹת יִקְרָא` (משלי יח:ו) | equivalent | דבריו של השוטה קוראים למכות. |
| 12.8 | sw ꜣdp ⟨m⟩ mdw(,t) n ꜥḏꜣ | טעון הוא בדברי שקר; | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` (משלי יב:כב) | equivalent |  |
| 12.12 | jw tꜣy =f wšb(,t) m-bw~(n)~rʾ | ותשובתו בחוץ. | `בִּשְׂפָתָו יִנָּכֵר שׂוֹנֵא; וּבְקִרְבּוֹ יָשִׁית מִרְמָה` (משלי כו:כד) | equivalent | הפער בין הפנים לחוץ. |
| 12.13 | jr h{w}r⟨w⟩ sꜥḥꜥ btꜣ,ṱ =f | הנה יום העמדת פשעו – | — | — | [מקבילה: AM 4.19] – "יָעַח מעמיד את פשעו": אותם פועל ושם עצם. |
| 12.15 | bsi̯ r =f H̱nmw ⟨m⟩-r-ꜥ ={j} | יבוא שוב חְנוּם, | `הִנֵּה כַחֹמֶר בְּיַד הַיּוֹצֵר כֵּן אַתֶּם בְּיָדִי בֵּית יִשְׂרָאֵל` (ירמיהו יח:ו) | equivalent | האל כקדר שעשוי לחזור ולעצב את הכלי שנכשל. |
| 12.16 | pꜣ nḥp n pꜣ tꜣ-rʾ | הקדר של לוהט־הפה – | `אֲנַחְנוּ הַחֹמֶר וְאַתָּה יֹצְרֵנוּ וּמַעֲשֵׂה יָדְךָ כֻּלָּנוּ` (ישעיהו סד:ז) | equivalent | האל כקדר האדם (ראו גם 24.13–24.17). |
| 13.1 | sw (ḥr) ḏi̯.t sn.w.pl (ḥr) ṯtṯt | גורם הוא לאחים לריב, | `וּמְשַׁלֵּחַ מְדָנִים בֵּין אַחִים` (משלי ו:יט) | equivalent | מן השבע שהן תועבת ה'. |
| 13.2 | sw (ḥr) šmj (r)-ḥꜣ,t ṯꜣw nb mj šnꜥ | הולך הוא לפני כל רוח כעבים, | `נְשִׂיאִים וְרוּחַ וְגֶשֶׁם אָיִן אִישׁ מִתְהַלֵּל בְּמַתַּת-שָׁקֶר` (משלי כה:יד) | equivalent | עננים ורוח בלי גשם, כדימוי לאדם ריק. |
| 13.6 | sp,t.du =f bjnr ns{,t} =f jkn | שפתיו מתוקות, לשונו מרה, | `כִּי נֹפֶת תִּטֹּפְנָה שִׂפְתֵי זָרָה; וְחָלָק מִשֶּׁמֶן חִכָּהּ` (משלי ה:ג); `וְאַחֲרִיתָהּ מָרָה כַלַּעֲנָה` (משלי ה:ד) | equivalent | ו־ – שפתיים מתוקות וסוף מר |
| 13.6 | sp,t.du =f bjnr ns{,t} =f jkn | שפתיו מתוקות, לשונו מרה, | `כֶּסֶף סִיגִים מְצֻפֶּה עַל-חָרֶשׂ שְׂפָתַיִם דֹּלְקִים וְלֶב-רָע` (משלי כו:כג) | equivalent |  |
| 13.7 | tꜣ ḫ,t rkḥ.ṱ m ẖ,t =f | והאש בוערת בבטנו. | `שְׂפָתַיִם דֹּלְקִים וְלֶב-רָע` (משלי כו:כג) | equivalent | הבוער בפנים. |
| 13.8 | m-jri̯ pwy r mḥ pfj | אל תעוף להיאחז באותו (איש), | `פֶּן-תֶּאֱלַף אֹרְחֹתָו; וְלָקַחְתָּ מוֹקֵשׁ לְנַפְשֶׁךָ` (משלי כב:כה) | equivalent | המשך האיסור על חברת החם, ובו הסכנה: "פן" (13.9) |
| 13.8 | m-jri̯ pwy r mḥ pfj | אל תעוף להיאחז באותו (איש), | `פֶּן-תֶּאֱלַף אֹרְחֹתָו; וְלָקַחְתָּ מוֹקֵשׁ לְנַפְשֶׁךָ` (משלי כב:כה) | divergence | במשלי הסכנה היא ללמוד את דרכו ("תאלף אורחותיו"), כאן – "לעוף" אליו ולהיאחז בו. |
| 13.9 | tm ḥr,y(t) jni̯.ṱ =k | פן תביא אותך האימה. | `וְלָקַחְתָּ מוֹקֵשׁ לְנַפְשֶׁךָ` (משלי כב:כה) | equivalent | גם במשלי הצלע האחרונה היא התוצאה המסוכנת. |
| 13.11 | m-jri̯ wšd tw m pꜣyw =k šmm m gꜣ~nj~sꜣ =k | אל תברך את הַחַם שלך בכפייתך, | `דֹּבְרֵי שָׁלוֹם עִם-רֵעֵיהֶם; וְרָעָה בִּלְבָבָם` (תהלים כח:ג) | equivalent | ברכת שלום שאין הלב עמה. |
| 13.13 | m-jri̯ ḏd n =f jꜣw{t}.tw =k n-ꜥḏꜣ | אל תאמר לו "הלל לך!" בשקר, | `שָׁוְא יְדַבְּרוּ אִישׁ אֶת-רֵעֵהוּ: שְׂפַת חֲלָקוֹת בְּלֵב וָלֵב יְדַבֵּרוּ` (תהלים יב:ג) | equivalent |  |
| 13.15 | m-jri̯ mdwi̯ (j)~rʾ~mʾ r(m)ṯ n-ꜥḏꜣ | אל תדבר עם אדם בשקר – | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר; וְעֹשֵׂי אֱמוּנָה רְצוֹנוֹ` (משלי יב:כב) | equivalent | השקר בדיבור הוא "תועבה" לאל, כמו בשורה הבאה. ה"תועבה" אחת בשתי הלשונות, "השקר" אחד (*ꜥḏꜣ* = `שֶׁקֶר`), ובמשלי – "שפתי" שקר. |
| 13.16 | tꜣ bw,t n pꜣ nṯr | תועבת האל. | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` (משלי יב:כב) | equivalent | הנוסחה `tꜣ bw.t n pꜣ nṯr` היא `תּוֹעֲבַת יְהוָה` של משלי ושל דברים (`renderings.md` §6.6) |
| 13.16 | tꜣ bw,t n pꜣ nṯr | תועבת האל. | `מֹאזְנֵי מִרְמָה תּוֹעֲבַת יְהוָה; וְאֶבֶן שְׁלֵמָה רְצוֹנוֹ` (משלי יא:א) | equivalent | גם שם התועבה היא הרמאות. |
| 13.17 | m-jri̯ pšn ḥꜣ,tj =k r ns{,t} =k | אל תפריד את לבבך מלשונך, | `בְּלֵב וָלֵב יְדַבֵּרוּ` (תהלים יב:ג) | equivalent | הלב הכפול |
| 13.17 | m-jri̯ pšn ḥꜣ,tj =k r ns{,t} =k | אל תפריד את לבבך מלשונך, | `בִּשְׂפָתָו יִנָּכֵר שׂוֹנֵא; וּבְקִרְבּוֹ יָשִׁית מִרְמָה` (משלי כו:כד) | equivalent | הפער בין השפה לקרב |
| 13.17 | m-jri̯ pšn ḥꜣ,tj =k r ns{,t} =k | אל תפריד את לבבך מלשונך, | `בְּפִיו שָׁלוֹם אֶת רֵעֵהוּ יְדַבֵּר וּבְקִרְבּוֹ יָשִׂים אָרְבּוֹ` (ירמיהו ט:ז) | equivalent |  |
| 13.18 | ḫpr sḫr.w.pl =k mꜥrj | יהיו עצותיך מוצלחות; | `גֹּל אֶל-יְהוָה מַעֲשֶׂיךָ; וְיִכֹּנוּ מַחְשְׁבֹתֶיךָ` (משלי טז:ג) | equivalent | ההבטחה שהעצות יצליחו. |
| 13.19 | ḫpr =⟨k⟩ dns.ṱ m-bꜣḥ tꜣ kꜣ~wꜣ~wj.pl | תהיה כבד־משקל לפני ההמון, | `וּמְצָא-חֵן וְשֵׂכֶל-טוֹב בְּעֵינֵי אֱלֹהִים וְאָדָם` (משלי ג:ד) | equivalent | ההבטחה כפולה, לפני אדם (כאן) ולפני האל (14.1). |
| 14.1 | jw =⟨k⟩ wḏꜣ.ṱ m-ḏr,t pꜣ nṯr | ואתה שלם ביד האל. | `בְּיָדְךָ עִתֹּתָי; הַצִּילֵנִי מִיַּד-אוֹיְבַי וּמֵרֹדְפָי` (תהלים לא:טז) | equivalent | האדם וזמנו "ביד" האל (וראו 3.17: `עֵת`). |
| 14.2 | msdi̯ nṯr sꜥḏꜣ mdw(,t) | שונא האל את זיוף הדברים; | `שֶׁשׁ-הֵנָּה שָׂנֵא יְהוָה; וְשֶׁבַע תּוֹעֲבַות (תּוֹעֲבַת) נַפְשׁוֹ` (משלי ו:טז); `לְשׁוֹן שָׁקֶר` (משלי ו:יז) | equivalent | אותו צמד בדיוק, "שונא" ו"תועבה" (השורה הבאה), וברשימה שבמשלי: . |
| 14.3 | tꜣy =f bw,t ꜥꜣ šnn ẖ,t | תועבתו הגדולה – צער הבטן. | `כִּי שֶׁבַע תּוֹעֵבוֹת בְּלִבּוֹ` (משלי כו:כה) | equivalent | התועבה שבפנים, אצל החנפן ש"בשפתיו ינכר" |
| 14.3 | tꜣy =f bw,t ꜥꜣ šnn ẖ,t | תועבתו הגדולה – צער הבטן. | `עִקֶּשׁ-לֵב לֹא יִמְצָא-טוֹב; וְנֶהְפָּךְ בִּלְשׁוֹנוֹ יִפּוֹל בְּרָעָה` (משלי יז:כ) | equivalent |  |
| 14.5 | m-jri̯ snk,tj r nkt n twꜣ | אל תתאווה לקניין העני, | `אַל-תִּלְחַם אֶת-לֶחֶם רַע עָיִן; וְאַל-תִּתְאָו לְמַטְעַמֹּתָיו` (משלי כג:ו) | equivalent | פתיחת הקטע במשלי שמעבד את הבית הזה (משלי כג:ו–ח): אותו פועל (*snk* = `הִתְאַוָּה`, `renderings.md` §10.2), ואותו זוג של רכוש ולחם (14.5–14.6) |
| 14.5 | m-jri̯ snk,tj r nkt n twꜣ | אל תתאווה לקניין העני, | `אַל-תִּלְחַם אֶת-לֶחֶם רַע עָיִן; וְאַל-תִּתְאָו לְמַטְעַמֹּתָיו` (משלי כג:ו) | divergence | במשלי האיש שאת לחמו אסור לחמוד הוא `רַע עָיִן` (הקמצן), כאן – `הֶעָנִי`: אמנמופה אוסר לחמוד את מעט רכושו של החלש, משלי מזהיר מפני שולחנו של הקמצן |
| 14.5 | m-jri̯ snk,tj r nkt n twꜣ | אל תתאווה לקניין העני, | `עֹשֵׁק דָּל לְהַרְבּוֹת לוֹ נֹתֵן לְעָשִׁיר אַךְ-לְמַחְסוֹר` (משלי כב:טז) | equivalent |  |
| 14.6 | mtw =k ḥqr r tʾ =f | ואל תרעב ללחמו. | `אַל-תִּלְחַם אֶת-לֶחֶם רַע עָיִן` (משלי כג:ו) | equivalent | הלחם. |
| 14.8 | sw (ḥr) jri̯ sẖy r ꜥšꜥš | עושה הוא פצע ללוע. | `עָרֵב לָאִישׁ לֶחֶם שָׁקֶר; וְאַחַר יִמָּלֵא-פִיהוּ חָצָץ` (משלי כ:יז) | equivalent | הלחם הגזול פוצע את הפה. |
| 14.9 | j:jri̯.w =f sḫpr{r} =f m ꜥnḫ.y.pl n ꜥḏꜣ | בשבועות שקר מְקַדֵּם הוא את עצמו, | `עֹשֵׁק דָּל לְהַרְבּוֹת לוֹ` (משלי כב:טז) | equivalent |  |
| 14.10 | jw jb =f / shꜣ m ẖ,t =f | ולבו מְעוּוָּת בבטנו. | `לְעַוֵּת אָדָם בְּרִיבוֹ אֲדֹנָי לֹא רָאָה` (איכה ג:לו) | equivalent | הפועל שנבחר ל־*shꜣ*, כאן במובנו הפנימי: לב מעוות. |
| 14.13 | wn(n) =k whꜣ.ṱ m-bꜣḥ ḥr(,j) =k | אם כושל אתה לפני מי שמעליך, | — | — | [מקבילה: AM 15.4] – אותו מבנה: "אם פרוע אתה לפני מי שמעליך". |
| 14.15 | nꜣyw =k swnwn st (ḥr) ḫsf m sḥwr | חנופותיך – חוזרות הן כקללה, | `וְשִׁחַתָּ דְּבָרֶיךָ הַנְּעִימִים` (משלי כג:ח) | equivalent | הסוף של קטע משלי שמעבד את הבית: הדברים הנעימים (החנופה) הולכים לאיבוד |
| 14.15 | nꜣyw =k swnwn st (ḥr) ḫsf m sḥwr | חנופותיך – חוזרות הן כקללה, | `מוֹכִיחַ אָדָם אַחֲרַי חֵן יִמְצָא מִמַּחֲלִיק לָשׁוֹן` (משלי כח:כג) | equivalent |  |
| 14.17 | pꜣ mḥ rʾ ⟨m⟩ tʾ ꜥꜣ ꜥmꜣm =k sw bši̯ =k sw | מילוי הפה בלחם רב – בלעת אותו, הקאת אותו, | `פִּתְּךָ-אָכַלְתָּ תְקִיאֶנָּה; וְשִׁחַתָּ דְּבָרֶיךָ הַנְּעִימִים` (משלי כג:ח) | equivalent | המקבילה המפורסמת: הפת שנאכלה ומוקאת, וגם במשלי בגוף שני ובעבר (`אָכַלְתָּ`) |
| 14.17 | pꜣ mḥ rʾ ⟨m⟩ tʾ ꜥꜣ ꜥmꜣm =k sw bši̯ =k sw | מילוי הפה בלחם רב – בלעת אותו, הקאת אותו, | `פִּתְּךָ-אָכַלְתָּ תְקִיאֶנָּה; וְשִׁחַתָּ דְּבָרֶיךָ הַנְּעִימִים` (משלי כג:ח) | divergence | במשלי הפת היא לחמו של "רע העין" ומוקאת מגועל, כאן – "הפה המלא" (הגזלה הגדולה) נבלע ומוקא |
| 14.17 | pꜣ mḥ rʾ ⟨m⟩ tʾ ꜥꜣ ꜥmꜣm =k sw bši̯ =k sw | מילוי הפה בלחם רב – בלעת אותו, הקאת אותו, | `חַיִל בָּלַע וַיְקִאֶנּוּ; מִבִּטְנוֹ יֹרִשֶׁנּוּ אֵל` (איוב כ:טו) | equivalent | העושר הגזול שנבלע ומוקא, באותם שני פעלים בדיוק (`בָּלַע`, `הֵקִיא`). |
| 14.18 | jw =k šwi̯.ṱ m pꜣyw =k nfr | ואתה ריק מטובך. | `וְשִׁחַתָּ דְּבָרֶיךָ הַנְּעִימִים` (משלי כג:ח) | equivalent | גם אצל משלי ההפסד כפול: הפת ו"הטוב" שלך. |
| 15.2 | jw r(m)ṯ =f nb mꜥ~ḏꜣ n pḫꜣ(,t) | וכל אנשיו לחוצים בכבל, | `עִנּוּ בַכֶּבֶל רַגְלֹיו (רַגְלוֹ); בַּרְזֶל בָּאָה נַפְשׁוֹ` (תהלים קה:יח) | equivalent | כבל הרגליים (יוסף בבית הסוהר במצרים). |
| 15.4 | wn(n) =k ntfj.ṱ m-bꜣḥ ḥr(,j) =k | אם פרוע אתה לפני מי שמעליך, | — | — | [מקבילה: AM 14.13] – אותו מבנה, וההבדל במלה אחת (*whꜣ* "כושל" / *ntf* "פרוע"). |
| 15.6 | j:jri̯.w =k jri̯ ḥm(,w) r twꜣ ḥr wꜣ,t ={j} | הטה את משוטך מן העני שבאורח, | — | — | [מקבילה: AM 1.10] – "להטות את משוטו מן הרע": אותו צירוף (*jrj ḥmw r*) ואותה עברית. |
| 15.7 | ptr =k sw mtw =k twr r ꜣḫ,t.ṱ =f | ראה אותו, והינזר מרכושו. | `וְיִנָּזְרוּ מִקָּדְשֵׁי בְנֵי יִשְׂרָאֵל` (ויקרא כב:ב) | equivalent | `נָזַר מִן` "לשמור מרחק מתוך כבוד": בדיוק שני הצדדים של *twr* (כבוד והתרחקות). |
| 15.9 | m-jri̯ ꜣꜥfj r ꜣḫ,t n srj | אל תזלול מרכוש השר, | `כִּי-תֵשֵׁב לִלְחוֹם אֶת-מוֹשֵׁל בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | equivalent | האזהרה מפני הזלילה בבית הגדול (ומקבילתה הישירה בבית ה־23, 23.13) |
| 15.9 | m-jri̯ ꜣꜥfj r ꜣḫ,t n srj | אל תזלול מרכוש השר, | `וְשַׂמְתָּ שַׂכִּין בְּלֹעֶךָ אִם-בַּעַל נֶפֶשׁ אָתָּה` (משלי כג:ב) | equivalent |  |
| 15.10 | m ḏr,tj mḥ rʾ ⟨m⟩ tʾ ꜥꜣ m-wsdn | אל תתן מילוי פה בלחם רב באין מעצור; | — | — | [מקבילה: AM 14.17] – "מילוי הפה בלחם רב": אותו צירוף ואותה עברית. |
| 15.11 | jr ḏi̯ =f tw r r(w)d.ṱ ꜣḫ,t.ṱ =f | אם ישים אותך סוכן על רכושו, | `לֶךְ בֹּא אֶל הַסֹּכֵן הַזֶּה עַל שֶׁבְנָא אֲשֶׁר עַל הַבָּיִת` (ישעיהו כב:טו) | equivalent | `סֹכֵן` הוא תואר המנהל של בית המלך (מלה שמית, הידועה גם מאוגרית ומאל־עמארנה), ובדיוק התפקיד שכאן. |
| 15.12 | msdi̯ pꜣyw =f wḏꜣ pꜣyw =k | שנא את אשר לו – ואשר לך יהיה שלם. | `חוֹלֵק עִם-גַּנָּב שׂוֹנֵא נַפְשׁוֹ` (משלי כט:כד) | equivalent | "שנאה" כהתרחקות מרכוש לא שלך. |
| 15.13 | m-jri̯ ṯꜣ{.wj} (j)~rʾ~mꜥ pꜣ šmm | אל תיטול יחד עם הַחַם, | `חוֹלֵק עִם-גַּנָּב שׂוֹנֵא נַפְשׁוֹ` (משלי כט:כד) | equivalent | השותפות בגניבה |
| 15.13 | m-jri̯ ṯꜣ{.wj} (j)~rʾ~mꜥ pꜣ šmm | אל תיטול יחד עם הַחַם, | `אַל-תִּתְרַע אֶת-בַּעַל אָף` (משלי כב:כד) | equivalent | ההתחברות אל החם (כמו 11.13). |
| 15.14 | mtw =k snsn,tj n =k z rqꜣ | ואל תתחבר אל איש צורר. | — | — | [מקבילה: AM 11.13] – "אל תתחבר אל הַחַם": אותו פועל; [מקבילה: AM 22.14] – אותו מבנה יחזור בבית ה־21. |
| 15.15 | jr hꜣb.tw =k r ẖnw dḥꜣy | אם ישלחו אותך להוביל תבן, | `כְּצִנַּת שֶׁלֶג בְּיוֹם קָצִיר צִיר נֶאֱמָן לְשֹׁלְחָיו` (משלי כה:יג) | equivalent | השליח הנאמן. |
| 15.18 | tm =⟨tw⟩ wḥm hꜣb =f r ky sp ꜥn | לא יִשְׁנוּ לשלוח אותו לעניין אחר עוד. | `מְקַצֶּה רַגְלַיִם חָמָס שֹׁתֶה שֹׁלֵחַ דְּבָרִים בְּיַד-כְּסִיל` (משלי כו:ו) | equivalent | השליח הלא־ראוי |
| 15.18 | tm =⟨tw⟩ wḥm hꜣb =f r ky sp ꜥn | לא יִשְׁנוּ לשלוח אותו לעניין אחר עוד. | `מַלְאָךְ רָשָׁע יִפֹּל בְּרָע; וְצִיר אֱמוּנִים מַרְפֵּא` (משלי יג:יז) | equivalent |  |
| 15.20 | m-jri̯ shꜣ r(m)ṯ ⟨m⟩ ꜥr r ꜥr(,t) | אל תעוות אדם בעט על המגילה – | `אָכֵן הִנֵּה לַשֶּׁקֶר עָשָׂה עֵט שֶׁקֶר סֹפְרִים` (ירמיהו ח:ח) | equivalent | עט הסופר כמכשיר של שקר |
| 15.20 | m-jri̯ shꜣ r(m)ṯ ⟨m⟩ ꜥr r ꜥr(,t) | אל תעוות אדם בעט על המגילה – | `הוֹי הַחֹקְקִים חִקְקֵי אָוֶן; וּמְכַתְּבִים עָמָל כִּתֵּבוּ` (ישעיהו י:א); `לְהַטּוֹת מִדִּין דַּלִּים` (ישעיהו י:ב) | equivalent | ו־ – הכותבים העושקים את הדלים |
| 15.20 | m-jri̯ shꜣ r(m)ṯ ⟨m⟩ ꜥr r ꜥr(,t) | אל תעוות אדם בעט על המגילה – | `לְעַוֵּת אָדָם בְּרִיבוֹ אֲדֹנָי לֹא רָאָה` (איכה ג:לו) | equivalent | הפועל. |
| 15.21 | tꜣ bw,t n pꜣ nṯr | תועבת האל. | `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` (משלי יב:כב) | equivalent |  |
| 15.21 | tꜣ bw,t n pꜣ nṯr | תועבת האל. | `כִּי תוֹעֲבַת יְהוָה אֱלֹהֶיךָ כָּל עֹשֵׂה אֵלֶּה` (דברים כה:טז) | equivalent | התועבה של המרמה במשקלות ובמידות (ראו הבתים 16–17). |
| 16.1 | m-jri̯ jri̯ ⟨mt(r,t)⟩ n mdw(,t) n ꜥḏꜣ | אל תעיד עדות בדברי שקר, | `לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | equivalent | הדיבר |
| 16.1 | m-jri̯ jri̯ ⟨mt(r,t)⟩ n mdw(,t) n ꜥḏꜣ | אל תעיד עדות בדברי שקר, | `עֵד שְׁקָרִים לֹא יִנָּקֶה; וְיָפִיחַ כְּזָבִים לֹא יִמָּלֵט` (משלי יט:ה) | equivalent |  |
| 16.1 | m-jri̯ jri̯ ⟨mt(r,t)⟩ n mdw(,t) n ꜥḏꜣ | אל תעיד עדות בדברי שקר, | `מֵפִיץ וְחֶרֶב וְחֵץ שָׁנוּן אִישׁ עֹנֶה בְרֵעֵהוּ עֵד שָׁקֶר` (משלי כה:יח) | equivalent |  |
| 16.2 | mtw =k rmni̯ ky m ns{,t} =k | ואל תזיז אחר בלשונך. | `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) | equivalent | ראו 7.12. |
| 16.3 | m-jri̯ jri̯ ḥsb ⟨n⟩ {n}⟨jw⟩,tj nkt | אל תעשה חשבון למי שאין לו קניין, | `אִם כֶּסֶף תַּלְוֶה אֶת עַמִּי אֶת הֶעָנִי עִמָּךְ לֹא תִהְיֶה לוֹ כְּנֹשֶׁה` (שמות כב:כד) | equivalent | אל תהיה נושה של מי שאין לו. |
| 16.4 | mtw =k sꜥḏꜣ ⟨m⟩ pꜣyw =k ꜥr | ואל תזייף בעטך. | `עֵט שֶׁקֶר סֹפְרִים` (ירמיהו ח:ח) | equivalent |  |
| 16.5 | jr gmi̯ =k wḏꜣ(,t) ꜥꜣ(.t) n nmḥ | אם תמצא חוב גדול של דל, | `מַלְוֵה יְהוָה חוֹנֵן דָּל; וּגְמֻלוֹ יְשַׁלֶּם-לוֹ` (משלי יט:יז) | equivalent |  |
| 16.6 | j:jri̯.w sw m 3 dnj,t | עשה אותו לשלושה חלקים; | `וְזֶה דְּבַר הַשְּׁמִטָּה שָׁמוֹט כָּל בַּעַל מַשֵּׁה יָדוֹ אֲשֶׁר יַשֶּׁה בְּרֵעֵהוּ` (דברים טו:ב) | divergence | בתורה החוב כולו נשמט בשנה השביעית, בחוק לכל ישראל; כאן – עצה לפקיד: למחול על שני שלישים, לפי שיקול דעתו, ורק לדל. |
| 16.7 | ḫꜣꜥ 2.t jmm mn{w} wꜥ | עזוב שניים, תן לאחד להישאר. | `וְגַם אֲנִי אַחַי וּנְעָרַי נֹשִׁים בָּהֶם כֶּסֶף וְדָגָן; נַעַזְבָה נָּא אֶת הַמַּשָּׁא הַזֶּה` (נחמיה ה:י) | equivalent | `עָזַב` כמחילת חוב של כסף ודגן, כמו *ḫꜣꜥ* כאן |
| 16.7 | ḫꜣꜥ 2.t jmm mn{w} wꜥ | עזוב שניים, תן לאחד להישאר. | `שָׁמוֹט` (דברים טו:ב) | divergence | הפועל של התורה, שאינו כאן (`renderings.md` §8: `שָׁמַט` לעולם לא). |
| 16.8 | gmi̯ =k sw mj wꜣ,t / ⟨m⟩ mj,t n ꜥnḫ | תמצא זאת כדרך החיים; | `אֹרַח חַיִּים לְמַעְלָה לְמַשְׂכִּיל` (משלי טו:כד); `תּוֹדִיעֵנִי אֹרַח חַיִּים` (תהלים טז:יא) | equivalent | ו־ – "אורח החיים" של משלי ותהלים: אותו צמד של דרך וחיים. |
| 16.9 | sḏr =k swḫꜣḫ{.tw} =k ⟨r⟩ dwꜣ,w | תישן, תלין עד הבוקר, | `אִם-תִּשְׁכַּב לֹא-תִפְחָד; וְשָׁכַבְתָּ וְעָרְבָה שְׁנָתֶךָ` (משלי ג:כד) | equivalent |  |
| 16.9 | sḏr =k swḫꜣḫ{.tw} =k ⟨r⟩ dwꜣ,w | תישן, תלין עד הבוקר, | `בְּשָׁלוֹם יַחְדָּו אֶשְׁכְּבָה וְאִישָׁן` (תהלים ד:ט) | equivalent | השינה השקטה של מי שלבו שלם. |
| 16.10 | gmi̯ =k sw mj smj nfr | תמצא זאת כשמועה טובה. | `שְׁמוּעָה טוֹבָה תְּדַשֶּׁן-עָצֶם` (משלי טו:ל) | equivalent |  |
| 16.11 | ꜣḫ ḥs(,wt) m mri̯(.y) / mr(,wt) n r(m)ṯ.pl | מוטב החן באהבת בני האדם | `נִבְחָר שֵׁם מֵעֹשֶׁר רָב: מִכֶּסֶף וּמִזָּהָב חֵן טוֹב` (משלי כב:א) | equivalent | פתיחת הפרק שבו מתחילים "דברי החכמים": שם ו"חן" טובים מעושר, כמו כאן החן ואהבת הבריות מן העושר שבאוצר (16.12) |
| 16.11 | ꜣḫ ḥs(,wt) m mri̯(.y) / mr(,wt) n r(m)ṯ.pl | מוטב החן באהבת בני האדם | `טוֹב-מְעַט בְּיִרְאַת יְהוָה מֵאוֹצָר רָב וּמְהוּמָה בוֹ` (משלי טו:טז) | equivalent |  |
| 16.12 | r wsr m wḏꜣ | מעושר באוצר; | `מֵאוֹצָר רָב וּמְהוּמָה בוֹ` (משלי טו:טז) | equivalent |  |
| 16.13 | ꜣḫ pꜣwtjw.pl / pꜣw,t{jw}.pl jw ḥꜣ,tj nḏm | מוטב עוגות כשהלבב נעים | `טוֹב אֲרֻחַת יָרָק וְאַהֲבָה-שָׁם מִשּׁוֹר אָבוּס וְשִׂנְאָה-בוֹ` (משלי טו:יז) | equivalent |  |
| 16.14 | r wsr ẖr šnn | מעושר עמוס צער. | `טוֹב פַּת חֲרֵבָה וְשַׁלְוָה-בָהּ מִבַּיִת מָלֵא זִבְחֵי-רִיב` (משלי יז:א) | equivalent |  |
| 16.14 | r wsr ẖr šnn | מעושר עמוס צער. | `טוֹב-מְעַט בִּצְדָקָה מֵרֹב תְּבוּאוֹת בְּלֹא מִשְׁפָּט` (משלי טז:ח) | equivalent |  |
| 16.16 | m-jri̯ jri̯ sḫꜣ.wj n r(m)ṯ | אל תזכיר (את עצמך) לאדם, | `אַל-תִּתְהַדַּר לִפְנֵי-מֶלֶךְ; וּבִמְקוֹם גְּדֹלִים אַל-תַּעֲמֹד` (משלי כה:ו) | equivalent | אל תדחק את עצמך לפני הגדולים. |
| 16.17 | mtw =k mꜥ~šꜣ~pw r wḫꜣḫ ḏr,t =f | ואל תתאמץ לבקש את ידו. | — | — | [מקבילה: AM 9.14] – "אל תתאמץ לבקש שפע": אותו צירוף (*mꜥšꜣpw r wḫꜣ*), ויחזור ב־19.19 וב־27.3. |
| 16.18 | jr ḏd =f n =k šzp jnn | אם יאמר לך: "קבל מתנה, | `וְשֹׁחַד לֹא תִקָּח: כִּי הַשֹּׁחַד יְעַוֵּר פִּקְחִים וִיסַלֵּף דִּבְרֵי צַדִּיקִים` (שמות כג:ח) | equivalent |  |
| 16.18 | jr ḏd =f n =k šzp jnn | אם יאמר לך: "קבל מתנה, | `עֹכֵר בֵּיתוֹ בּוֹצֵעַ בָּצַע; וְשׂוֹנֵא מַתָּנֹת יִחְיֶה` (משלי טו:כז) | equivalent |  |
| 16.18 | jr ḏd =f n =k šzp jnn | אם יאמר לך: "קבל מתנה, | `מַתָּן אָדָם יַרְחִיב לוֹ; וְלִפְנֵי גְדֹלִים יַנְחֶנּוּ` (משלי יח:טז) | divergence | כאן המתנה ניתנת מן הגדול, לא אליו. |
| 16.20 | m-jri̯ ṯnḥ,tj n =f mtw =k ksi̯ ḥr =k | אל תמצמץ? לו, ואל תכוף את פניך, | `הֲלָכֹף כְּאַגְמֹן רֹאשׁוֹ` (ישעיהו נח:ה) | equivalent | כפיפת הראש כמחווה של הכנעה |
| 16.20 | m-jri̯ ṯnḥ,tj n =f mtw =k ksi̯ ḥr =k | אל תמצמץ? לו, ואל תכוף את פניך, | `קֹרֵץ בְּעֵינָו מֹלֵל בְּרַגְלָו` (משלי ו:יג) | equivalent | תנועות העיניים של אדם בליעל (`קָרַץ` לא נבחר כאן, כי הוא תפוס בקורפוס האכדי ל־*karāṣu* "לקרוץ טיט"). |
| 16.21 | mtw =k pḫꜣd m nꜣyw =k nw | ואל תשפיל את מבטיך. | `כִּי טוֹב אֲמָר-לְךָ עֲלֵה-הֵנָּה מֵהַשְׁפִּילְךָ לִפְנֵי נָדִיב` (משלי כה:ז) | equivalent | ההשפלה לפני הנדיב. |
| 16.22 | wšd tj sw m rʾ =k j:ḏd n =f jꜣw.tw =k | ברך אותו בפיך, אמור לו: "הלל לך!" – | — | — | [מקבילה: AM 13.11, AM 13.13] – אותם פועל (*wšd* `בֵּרַךְ`) ואותה ברכה (`הַלֵּל לְךָ`). |
| 17.2 | m-jri̯ twhꜣ =f n pꜣyw =f ḥꜣw,tj | אל תרחיק אותו בתחילתו – | — | — | [מקבילה: AM 5.16] – "התרחק מפניו": אותה מלה כתובה (*twꜣhꜣ*), שם חוזרת ("להרחיק את עצמך"), כאן יוצאת ("להרחיק אותו"). |
| 17.5 | j:jri̯ nfr pḥ =k wn,w ={j} | עשה טוב – תשיג יֵשׁ?; | `לְהַנְחִיל אֹהֲבַי יֵשׁ; וְאֹצְרֹתֵיהֶם אֲמַלֵּא` (משלי ח:כא) | equivalent | `יֵשׁ` כשם עצם, "נכסים", מילולית "מה שיש", בדיוק כמו *wnw* (מן *wnn* "להיות"). |
| 17.6 | m-jri̯ gꜣy ꜥrw r thꜣ ={j} | אל תטבול את העט כדי לפגוע. | `עֵט שֶׁקֶר סֹפְרִים` (ירמיהו ח:ח) | equivalent |  |
| 17.7 | jr šrj(,t) n Hꜣb ḏbꜥ n zẖꜣ,w | הנה מקור האִיבִּיס – אצבע הסופר; | — | cognate | (אולי) *ḏbꜥ* "אצבע" מושווה לעתים קרובות ל־`אֶצְבַּע` השמית (שורש אפרו־אסייתי משותף; לא ודאי) |
| 17.7 | jr šrj(,t) n Hꜣb ḏbꜥ n zẖꜣ,w | הנה מקור האִיבִּיס – אצבע הסופר; | `וַיֹּאמְרוּ הַחַרְטֻמִּם אֶל פַּרְעֹה אֶצְבַּע אֱלֹהִים הִוא` (שמות ח:טו) | equivalent | "אצבע" של אל, מפי חכמי מצרים. |
| 17.8 | zꜣw tw r rmni̯.ṱ =f | הישמר לך מלהזיז אותו. | — | — | [מקבילה: AM 7.12, AM 16.2] – אותו פועל: "אל תזיז את אבן־הגבול", "ואל תזיז אחר בלשונך". |
| 17.9 | ḥmsi̯ pꜣ jꜥꜥnj j Pr-Ḫmn,(j)w | יושב הבבון בבית־חֶמְנוּ, | `שֶׁנְהַבִּים וְקֹפִים וְתֻכִּיִּים` (מלכים א י:כב) | divergence | `קוֹף` העברית שאולה מן המצרית *gf* "קוף", לא מן *jꜥnꜥ* "בבון", ולכן אינה כאן (`renderings.md` §4.2). |
| 17.10 | jw jr,t =f (ḥr) pẖr tꜣ.du | ועינו סובבת את שתי הארצות; | `עֵינֵי יְהוָה הֵמָּה מְשׁוֹטְטִים בְּכָל הָאָרֶץ` (זכריה ד:י) | equivalent | עין האל המשוטטת בכל הארץ |
| 17.10 | jw jr,t =f (ḥr) pẖr tꜣ.du | ועינו סובבת את שתי הארצות; | `בְּכָל-מָקוֹם עֵינֵי יְהוָה; צֹפוֹת רָעִים וְטוֹבִים` (משלי טו:ג) | equivalent |  |
| 17.11 | jr jw =f (ḥr) nw r pꜣ shꜣ m ḏbꜥ =f | אם מביט הוא אל המעוות באצבעו, | — | — | [מקבילה: AM 17.13] – "הנה סופר המעוות באצבעו". |
| 17.13 | jr zẖꜣ,w jw =f (ḥr) shꜣ m ḏbꜥ =f | הנה סופר המעוות באצבעו – | — | — | [מקבילה: AM 17.11] – "המעוות באצבעו": אותו צירוף. |
| 17.14 | nn mꜥdn.tw zꜣ =f | לא יירשם בנו. | `מִתְהַלֵּךְ בְּתֻמּוֹ צַדִּיק; אַשְׁרֵי בָנָיו אַחֲרָיו` (משלי כ:ז) | equivalent | בני הישר נהנים מיושרו; וכאן ההפך: בן הרמאי נמחק. |
| 17.15 | jr jri̯.yw =k hꜣ~wꜣ~wj =k jw nn m jb =k | אם תבלה את עתך ואֵלֶּה בלבך, | — | — | [מקבילה: AM 3.17, AM 5.18] – הפזמון, בעברית קבועה (`renderings.md` §7). |
| 17.16 | r nꜣyw =k ms.wj.pl (r) ptr =w | ילדיך יִרְאוּ אותן. | `טוֹב יַנְחִיל בְּנֵי-בָנִים` (משלי יג:כב) | equivalent |  |
| 17.18 | m-jri̯ rmni̯ jws,w mtw =k sꜥḏꜣ qdj.pl | אל תזיז את הפלס, ואל תזייף את הַקְּדָטִים, | `פֶּלֶס וּמֹאזְנֵי מִשְׁפָּט לַיהוָה; מַעֲשֵׂהוּ כָּל-אַבְנֵי-כִיס` (משלי טז:יא) | equivalent | גם במצרית יש שתי מלים למאזניים: *jws* (כאן, `פֶּלֶס`) ו־*mḫꜣ.t* (17.22, `מֹאזְנַיִם`), כמו `פֶּלֶס וּמֹאזְנֵי` בפסוק אחד |
| 17.18 | m-jri̯ rmni̯ jws,w mtw =k sꜥḏꜣ qdj.pl | אל תזיז את הפלס, ואל תזייף את הַקְּדָטִים, | `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן: גְּדוֹלָה וּקְטַנָּה` (דברים כה:יג) | equivalent | המשקולות ("אבנים" בעברית, "קדטים" כאן) |
| 17.18 | m-jri̯ rmni̯ jws,w mtw =k sꜥḏꜣ qdj.pl | אל תזיז את הפלס, ואל תזייף את הַקְּדָטִים, | `מֹאזְנֵי מִרְמָה תּוֹעֲבַת יְהוָה; וְאֶבֶן שְׁלֵמָה רְצוֹנוֹ` (משלי יא:א) | equivalent |  |
| 17.18 | m-jri̯ rmni̯ jws,w mtw =k sꜥḏꜣ qdj.pl | אל תזיז את הפלס, ואל תזייף את הַקְּדָטִים, | `וּלְעַוֵּת מֹאזְנֵי מִרְמָה` (עמוס ח:ה) | equivalent | וראו 18.6. |
| 17.19 | mtw =k ḥḏi̯ rʾ.pl dbḥ.pl | ואל תזיק לפיות המידות. | `לֹא תַעֲשׂוּ עָוֶל בַּמִּשְׁפָּט בַּמִּדָּה בַּמִּשְׁקָל וּבַמְּשׂוּרָה` (ויקרא יט:לה) | equivalent | המידה (*dbḥ* = `מִדָּה`, `renderings.md` §4.3) |
| 17.19 | mtw =k ḥḏi̯ rʾ.pl dbḥ.pl | ואל תזיק לפיות המידות. | `לְהַקְטִין אֵיפָה וּלְהַגְדִּיל שֶׁקֶל` (עמוס ח:ה) | equivalent | הקטנת המידה. |
| 17.20 | m-jri̯ jꜣbi̯ dbḥ n sḫ,t | אל תחפוץ במידת השדה, | `לֹא יִהְיֶה לְךָ בְּבֵיתְךָ אֵיפָה וְאֵיפָה: גְּדוֹלָה וּקְטַנָּה` (דברים כה:יד) | equivalent | שתי מידות: מידה "של השדה" (פרטית) ומידה של בית הכסף (רשמית). |
| 17.22 | ḥmsi̯ pꜣ jꜥꜥnjj r-gs tꜣ mḫꜣy,t | יושב הבבון לצד המאזניים, | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק אֵיפַת צֶדֶק וְהִין צֶדֶק יִהְיֶה לָכֶם` (ויקרא יט:לו) | equivalent | *mḫꜣ.t* = `מֹאזְנַיִם` (`renderings.md` §4.3) |
| 17.22 | ḥmsi̯ pꜣ jꜥꜥnjj r-gs tꜣ mḫꜣy,t | יושב הבבון לצד המאזניים, | `יִשְׁקְלֵנִי בְמֹאזְנֵי-צֶדֶק; וְיֵדַע אֱלוֹהַּ תֻּמָּתִי` (איוב לא:ו) | equivalent | האל שוקל את האדם במאזניים. |
| 18.1 | jw pꜣy =f jb m dḫj | ולבו הוא המשקולת. | `וְשַׂמְתִּי מִשְׁפָּט לְקָו וּצְדָקָה לְמִשְׁקָלֶת` (ישעיהו כח:יז) | equivalent | המשקולת כמידת הצדק |
| 18.1 | jw pꜣy =f jb m dḫj | ולבו הוא המשקולת. | `כָּל-דֶּרֶךְ-אִישׁ יָשָׁר בְּעֵינָיו; וְתֹכֵן לִבּוֹת יְהוָה` (משלי כא:ב) | equivalent | האל "תוכן" (שוקל) את הלבבות – ובמצרית הלב של האל הוא כלי השקילה עצמו. |
| 18.2 | jw~ṯꜣ nṯr mj ꜥꜣ Ḏḥwtj | איזה אֵל כגדולת תְּחוּת, | `מִי-אֵל גָּדוֹל כֵּאלֹהִים` (תהלים עז:יד) | equivalent | אותה שאלה רטורית ("מי אל גדול כ־"), אפילו באותה מלה ל"אל" |
| 18.2 | jw~ṯꜣ nṯr mj ꜥꜣ Ḏḥwtj | איזה אֵל כגדולת תְּחוּת, | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | equivalent |  |
| 18.3 | pꜣ jri̯ gmi̯ nn r jri̯ =w | אשר מצא את אלה לעשות בהם? | `פֶּלֶס וּמֹאזְנֵי מִשְׁפָּט לַיהוָה; מַעֲשֵׂהוּ כָּל-אַבְנֵי-כִיס` (משלי טז:יא) | equivalent | המשקלות הם "מעשה" האל: במשלי יהוה, באמנמופה תחות, שהמציא אותם. |
| 18.4 | m-jri̯ jri̯ n =k qd.pl m ḥḏ | אל תעשה לך קדטים של היזק, | `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן: גְּדוֹלָה וּקְטַנָּה` (דברים כה:יג) | equivalent | גם בתורה "לְךָ" |
| 18.4 | m-jri̯ jri̯ n =k qd.pl m ḥḏ | אל תעשה לך קדטים של היזק, | `הַאֶזְכֶּה בְּמֹאזְנֵי רֶשַׁע; וּבְכִיס אַבְנֵי מִרְמָה` (מיכה ו:יא) | equivalent |  |
| 18.6 | jr ptr =k ky jw =f (ḥr) shꜣ | אם תראה אחר מעוות, | `לְהַקְטִין אֵיפָה וּלְהַגְדִּיל שֶׁקֶל וּלְעַוֵּת מֹאזְנֵי מִרְמָה` (עמוס ח:ה) | equivalent | `עִוֵּת` במאזניים: אותו פועל שנבחר ל־*shꜣ*, באותו הקשר |
| 18.6 | jr ptr =k ky jw =f (ḥr) shꜣ | אם תראה אחר מעוות, | `כְּנַעַן בְּיָדוֹ מֹאזְנֵי מִרְמָה לַעֲשֹׁק אָהֵב` (הושע יב:ח) | equivalent |  |
| 18.7 | j:jri̯.w =k swꜣww n =f m-wꜣ.wj | חלוף על פניו מרחוק. | `פְּרָעֵהוּ אַל-תַּעֲבָר-בּוֹ; שְׂטֵה מֵעָלָיו וַעֲבֹר` (משלי ד:טו) | equivalent | לעבור הרחק מדרך הרשעים |
| 18.7 | j:jri̯.w =k swꜣww n =f m-wꜣ.wj | חלוף על פניו מרחוק. | `בְּנִי אַל-תֵּלֵךְ בְּדֶרֶךְ אִתָּם; מְנַע רַגְלְךָ מִנְּתִיבָתָם` (משלי א:טו) | equivalent |  |
| 18.8 | m-jri̯ snk,tj n tjḥs,t | אל תתאווה לנחושת, | — | — | [מקבילה: AM 7.14, AM 14.5] – "אל תתאווה ל־": אותו פועל (*snk*), אותו מבנה. |
| 18.9 | msdi̯ šmꜥ nfr | שנא את הבד הדק היפה; | `וּמַלְבּוּשֵׁךְ שֵׁשׁי (שֵׁשׁ) וָמֶשִׁי וְרִקְמָה` (יחזקאל טז:יג) | equivalent | בגדי הפשתן הדק כסמל של עושר ויוהרה. |
| 18.11 | jw =f (ḥr) shꜣ m-bꜣḥ pꜣ nṯr | והוא מעוות לפני האל? | `לֹא-יוֹעִילוּ אוֹצְרוֹת רֶשַׁע; וּצְדָקָה תַּצִּיל מִמָּוֶת` (משלי י:ב); `לֹא-יוֹעִיל הוֹן בְּיוֹם עֶבְרָה` (משלי יא:ד) | equivalent | ו־ – העושר שאינו מועיל לפני הדין. |
| 18.12 | jr ꜥšgꜣj tj-n-nbw? / ꜥšgꜣj.tj nbw r kꜣ~tj~mt | אם נעשק זהב לכֶּתֶם, | `לֹא-תְסֻלֶּה בְּכֶתֶם אוֹפִיר; בְּשֹׁהַם יָקָר וְסַפִּיר` (איוב כח:טז) | cognate | `כֶּתֶם` העברית, "זהב משובח", שאולה מן המצרית *ktm.t* (המלה הזאת עצמה) |
| 18.12 | jr ꜥšgꜣj tj-n-nbw? / ꜥšgꜣj.tj nbw r kꜣ~tj~mt | אם נעשק זהב לכֶּתֶם, | `רֹאשׁוֹ כֶּתֶם פָּז` (שיר השירים ה:יא) | cognate |  |
| 18.12 | jr ꜥšgꜣj tj-n-nbw? / ꜥšgꜣj.tj nbw r kꜣ~tj~mt | אם נעשק זהב לכֶּתֶם, | `נֶזֶם זָהָב וַחֲלִי-כָתֶם מוֹכִיחַ חָכָם עַל-אֹזֶן שֹׁמָעַת` (משלי כה:יב) | cognate | הכתם במשלי, מתנה לחכם |
| 18.12 | jr ꜥšgꜣj tj-n-nbw? / ꜥšgꜣj.tj nbw r kꜣ~tj~mt | אם נעשק זהב לכֶּתֶם, | `נֶזֶם זָהָב וַחֲלִי-כָתֶם מוֹכִיחַ חָכָם עַל-אֹזֶן שֹׁמָעַת` (משלי כה:יב) | cognate | *ꜥšq* = `עָשַׁק` (6.14, `renderings.md` §10.1.5): מלה שמית שנשאלה למצרית |
| 18.12 | jr ꜥšgꜣj tj-n-nbw? / ꜥšgꜣj.tj nbw r kꜣ~tj~mt | אם נעשק זהב לכֶּתֶם, | `כְּנַעַן בְּיָדוֹ מֹאזְנֵי מִרְמָה לַעֲשֹׁק אָהֵב` (הושע יב:ח) | equivalent | העושק והמאזניים. |
| 18.13 | ḥḏ tꜣ jw =f n d~ḥꜣ~dj | האירה הארץ – והוא עופרת. | `כֻּלָּם נְחֹשֶׁת וּבְדִיל וּבַרְזֶל וְעוֹפֶרֶת בְּתוֹךְ כּוּר` (יחזקאל כב:יח) | equivalent | המתכת היקרה שהתגלתה כסיגים ועופרת, דימוי של מי שנבחן ונמצא כוזב. |
| 18.15 | zꜣw tw r ꜥšgꜣj ⟨wḏꜣ,t⟩ | הישמר לך מלעשוק את הַוּגָ׳את, | `לֹא תַעֲשֹׁק אֶת רֵעֲךָ וְלֹא תִגְזֹל` (ויקרא יט:יג) | equivalent | ו*ꜥšq* הוא `עָשַׁק` עצמו, מלה שמית במצרית ( [cognate], `renderings.md` §10.1.5); |
| 18.15 | zꜣw tw r ꜥšgꜣj ⟨wḏꜣ,t⟩ | הישמר לך מלעשוק את הַוּגָ׳את, | `לֹא יִהְיֶה לְךָ בְּבֵיתְךָ אֵיפָה וְאֵיפָה: גְּדוֹלָה וּקְטַנָּה` (דברים כה:יד) | equivalent | ראו 18.21. |
| 18.16 | r sꜥḏꜣ nꜣy =s rʾ.pl | כדי לזייף את פיותיה. | — | — | [מקבילה: AM 17.19] – "ואל תזיק לפיות המידות": אותה מלה (*rʾ* "חלק"), ואותה עברית. |
| 18.17 | m-jri̯ ⟨jri̯⟩? gꜣ~nj~sꜣ n wbn nḫt ={j} | אל תעשה כפייה בגלישה רבה, | `מֹנֵעַ בָּר יִקְּבֻהוּ לְאוֹם; וּבְרָכָה לְרֹאשׁ מַשְׁבִּיר` (משלי יא:כו) | divergence | במשלי הסכנה היא המניעה; כאן – הגלישה, כלומר עודף בגביית המס. |
| 18.19 | ḏi̯.w =k ḫꜣi̯.y =s mj ꜥꜣ =s{w} ⟨ꜥqꜣ⟩ | הנח לה למדוד כגודלה הישר, | `אֵיפָה שְׁלֵמָה וָצֶדֶק יִהְיֶה לָּךְ` (דברים כה:טו) | equivalent | המידה השלמה |
| 18.19 | ḏi̯.w =k ḫꜣi̯.y =s mj ꜥꜣ =s{w} ⟨ꜥqꜣ⟩ | הנח לה למדוד כגודלה הישר, | `הָאֵיפָה וְהַבַּת תֹּכֶן אֶחָד יִהְיֶה` (יחזקאל מה:יא) | equivalent | "תוכן אחד", גודל קבוע. |
| 18.21 | m-jri̯ jri̯ n =k jp,t n ṯꜣi̯ 2.t | אל תעשה לך איפה הנוטלת שתיים, | `לֹא יִהְיֶה לְךָ בְּבֵיתְךָ אֵיפָה וְאֵיפָה: גְּדוֹלָה וּקְטַנָּה` (דברים כה:יד) | cognate | `אֵיפָה` העברית שאולה מן המצרית *jp.t* (`renderings.md` §4.2), ושני הנוסחים אוסרים על "לְךָ" שתי מידות |
| 18.21 | m-jri̯ jri̯ n =k jp,t n ṯꜣi̯ 2.t | אל תעשה לך איפה הנוטלת שתיים, | `אֶבֶן וָאֶבֶן אֵיפָה וְאֵיפָה תּוֹעֲבַת יְהוָה גַּם-שְׁנֵיהֶם` (משלי כ:י) | cognate | ו"תועבה" גם כאן (19.1) |
| 18.21 | m-jri̯ jri̯ n =k jp,t n ṯꜣi̯ 2.t | אל תעשה לך איפה הנוטלת שתיים, | `אֶבֶן וָאֶבֶן אֵיפָה וְאֵיפָה תּוֹעֲבַת יְהוָה גַּם-שְׁנֵיהֶם` (משלי כ:י) | divergence | במצרית איפה אחת "הנוטלת שתיים" (כלי כפול), בתורה ובמשלי "איפה ואיפה", שתי איפות שונות |
| 18.21 | m-jri̯ jri̯ n =k jp,t n ṯꜣi̯ 2.t | אל תעשה לך איפה הנוטלת שתיים, | `וְאֵיפַת רָזוֹן זְעוּמָה` (מיכה ו:י) | cognate |  |
| 18.22 | j:jri̯.w =k jri̯ n pꜣ mt(r) | לגאות אתה עושה! | — | — | [מקבילה: AM 17.12] – "נוטל הוא את מנתו לגאות": אותה מלה (*mtr*), שוב כיעד של הרווח הגזול. |
| 18.23 | jr jp,t jr,t Rꜥ | הנה האיפה – עין רַא; | — | cognate | *jp.t* = `אֵיפָה` (המלה העברית שאולה מן המצרית, `renderings.md` §4.2; ראו 18.21) |
| 18.23 | jr jp,t jr,t Rꜥ | הנה האיפה – עין רַא; | `וַיֹּאמֶר זֹאת הָאֵיפָה הַיּוֹצֵאת וַיֹּאמֶר זֹאת עֵינָם בְּכָל הָאָרֶץ` (זכריה ה:ו) | equivalent | בחזון האיפה של זכריה האיפה היא "עינם בכל הארץ" (התרגום היווני קורא "עוונם") |
| 18.23 | jr jp,t jr,t Rꜥ | הנה האיפה – עין רַא; | `וַיַּשְׁלֵךְ אֶת אֶבֶן הָעוֹפֶרֶת אֶל פִּיהָ` (זכריה ה:ח) | equivalent | ובאותו חזון, עופרת על פי האיפה, כמו הזהב שנהפך לעופרת (18.13); הקשר מקרי כנראה, אבל התמונות – איפה, עין, עופרת, רשעה – זהות. |
| 19.1 | bw,t =s jṯi̯ | תועבתה – הגנב. | `אֶבֶן וָאֶבֶן אֵיפָה וְאֵיפָה תּוֹעֲבַת יְהוָה גַּם-שְׁנֵיהֶם` (משלי כ:י) | equivalent | התועבה של האיפה הכפולה |
| 19.1 | bw,t =s jṯi̯ | תועבתה – הגנב. | `כִּי תוֹעֲבַת יְהוָה אֱלֹהֶיךָ כָּל עֹשֵׂה אֵלֶּה: כֹּל עֹשֵׂה עָוֶל` (דברים כה:טז) | equivalent | סוף פרשת המשקלות והמידות בתורה. |
| 19.2 | jr ḫꜣ,y jw ḏi̯ =f ꜥšꜣ shꜣ | הנה המודד המרבה לעוות – | `לְהַקְטִין אֵיפָה וּלְהַגְדִּיל שֶׁקֶל וּלְעַוֵּת מֹאזְנֵי מִרְמָה` (עמוס ח:ה) | equivalent |  |
| 19.3 | ḫr ḏbꜥ jr,t =f r =f | והרי עינו טובעת עליו. | — | cognate | *ḏbꜥ* "לחתום", מן *ḏbꜥ.t* "טבעת החותם", שממנה `טַבַּעַת` העברית (`renderings.md` §4.2): הפועל `טָבַע` (חותם) נבחר כדי לשמור על השורש; `חָתַם` שמור ל־*ḫtm* (19.21) |
| 19.3 | ḫr ḏbꜥ jr,t =f r =f | והרי עינו טובעת עליו. | `חָתֻם בִּצְרוֹר פִּשְׁעִי; וַתִּטְפֹּל עַל-עֲוֹנִי` (איוב יד:יז) | equivalent | הפשע "חתום" בידי האל. |
| 19.4 | m-jri̯ šzp šmm n ꜥḥwwtj | אל תקבל את קציר החוכר, | `וְשֹׁחַד לֹא תִקָּח` (שמות כג:ח) | equivalent | לפי לנגה, קבלת התבואה היא שוחד. |
| 19.5 | mtw =k mꜣ~ꜣw~rw ꜥr(,t) j:r =f thꜣ.tw =f | ואל תכתוב מגילה נגדו, שייפגע. | `וּמְכַתְּבִים עָמָל כִּתֵּבוּ` (ישעיהו י:א) | equivalent | ראו 15.20. |
| 19.6 | m-jri̯ jri̯ wꜥ (j)~rʾ~mꜥ pꜣ ḫꜣ,y | אל תעשה (יד) אחת עם המודד, | `אַל תָּשֶׁת יָדְךָ עִם רָשָׁע לִהְיֹת עֵד חָמָס` (שמות כג:א) | equivalent | הברית עם הרשע. |
| 19.8 | ꜥꜣ bꜣ,w ḏnw n jt | גדולה עצמת מְדוּשַׁת השעורה | `הִנֵּה הוּא זֹרֶה אֶת גֹּרֶן הַשְּׂעֹרִים הַלָּיְלָה` (רות ג:ב) | equivalent | "גורן השעורים", אותו צירוף בדיוק (`גֹּרֶן` תפוס ל־*ḫtjw*, 8.18, ולכן `מְדוּשָׁה`) |
| 19.8 | ꜥꜣ bꜣ,w ḏnw n jt | גדולה עצמת מְדוּשַׁת השעורה | `מְדֻשָׁתִי וּבֶן גָּרְנִי` (ישעיהו כא:י) | equivalent | `מְדֻשָׁה` לצד `גֹּרֶן`. |
| 19.9 | r ꜥnḫ,y S,t-wr.t | משבועה בכיסא הגדול. | — | — | [מקבילה: AM 7.18, AM 14.9] – *ꜥnḫ* "שבועה" (`שְׁבוּעוֹת שֶׁקֶר`). |
| 19.11 | m-jri̯ sḏr tw jw =k (ḥr) ḥry / ḥry ⟨r⟩ dwꜣ,w | אל תישן כשאתה פוחד מן המחר; | `אַל-תִּתְהַלֵּל בְּיוֹם מָחָר: כִּי לֹא-תֵדַע מַה-יֵּלֶד יוֹם` (משלי כז:א) | equivalent | המחר שאינו ידוע (19.13) |
| 19.11 | m-jri̯ sḏr tw jw =k (ḥr) ḥry / ḥry ⟨r⟩ dwꜣ,w | אל תישן כשאתה פוחד מן המחר; | `אַל-תִּתְהַלֵּל בְּיוֹם מָחָר: כִּי לֹא-תֵדַע מַה-יֵּלֶד יוֹם` (משלי כז:א) | divergence | משלי מזהיר מן הביטחון במחר, אמנמופה – מן הפחד ממנו. |
| 19.12 | ḥḏ tꜣ dwꜣ,w mj-⟨j⟩ḫ | האירה הארץ – כיצד המחר? | `וְהָיָה כָזֶה יוֹם מָחָר גָּדוֹל יֶתֶר מְאֹד` (ישעיהו נו:יב) | equivalent | השיכורים שבטוחים שהמחר יהיה כהיום (וראו 6.18). |
| 19.13 | pꜣ z (ḥr) ḫm dwꜣ,w mj-⟨j⟩ḫ | אין האדם מכיר כיצד המחר. | `כִּי לֹא-תֵדַע מַה-יֵּלֶד יוֹם` (משלי כז:א) | equivalent |  |
| 19.13 | pꜣ z (ḥr) ḫm dwꜣ,w mj-⟨j⟩ḫ | אין האדם מכיר כיצד המחר. | `וְאָדָם מַה-יָּבִין דַּרְכּוֹ` (משלי כ:כד) | equivalent |  |
| 19.14 | wn(n) pꜣ nṯr m nꜣy =f mnḫ | האל – הוא במעלותיו, | `הֵן בַּעֲבָדָיו לֹא יַאֲמִין; וּבְמַלְאָכָיו יָשִׂים תָּהֳלָה` (איוב ד:יח) | equivalent | שלמות האל מול חסרון כל ברואיו. |
| 19.16 | rwjꜣ.tj nꜣ mdw(,t) j:ḏd nꜣ r(m)ṯ | לחוד הדברים שאומרים בני האדם, | `רַבּוֹת מַחֲשָׁבוֹת בְּלֶב-אִישׁ; וַעֲצַת יְהוָה הִיא תָקוּם` (משלי יט:כא) | equivalent |  |
| 19.16 | rwjꜣ.tj nꜣ mdw(,t) j:ḏd nꜣ r(m)ṯ | לחוד הדברים שאומרים בני האדם, | `לֵב אָדָם יְחַשֵּׁב דַּרְכּוֹ; וַיהוָה יָכִין צַעֲדוֹ` (משלי טז:ט) | equivalent |  |
| 19.16 | rwjꜣ.tj nꜣ mdw(,t) j:ḏd nꜣ r(m)ṯ | לחוד הדברים שאומרים בני האדם, | `לְאָדָם מַעַרְכֵי-לֵב; וּמֵיְהוָה מַעֲנֵה לָשׁוֹן` (משלי טז:א) | equivalent | אותו ניגוד בין דבר האדם למעשה האל |
| 19.16 | rwjꜣ.tj nꜣ mdw(,t) j:ḏd nꜣ r(m)ṯ | לחוד הדברים שאומרים בני האדם, | `לְאָדָם מַעַרְכֵי-לֵב; וּמֵיְהוָה מַעֲנֵה לָשׁוֹן` (משלי טז:א) | divergence | במשלי האדם "חושב" ו"עורך" והאל "מכין"; כאן האדם "אומר" והאל "עושה". |
| 19.17 | rwjꜣ.tw nꜣ jri̯ pꜣ nṯr | לחוד מה שעושה האל. | `יָדַעְתִּי יְהוָה כִּי לֹא לָאָדָם דַּרְכּוֹ` (ירמיהו י:כג) | equivalent |  |
| 19.18 | m-jri̯ ḏd mꜥ~n (m)-djw =(j) btꜣ,w | אל תאמר: "אין אצלי פשע", | `כִּי אָדָם אֵין צַדִּיק בָּאָרֶץ אֲשֶׁר יַעֲשֶׂה טּוֹב וְלֹא יֶחֱטָא` (קהלת ז:כ) | equivalent |  |
| 19.18 | m-jri̯ ḏd mꜥ~n (m)-djw =(j) btꜣ,w | אל תאמר: "אין אצלי פשע", | `מִי-יֹאמַר זִכִּיתִי לִבִּי; טָהַרְתִּי מֵחַטָּאתִי` (משלי כ:ט) | equivalent | אותה שאלה רטורית, ואותו "אל תאמר" |
| 19.18 | m-jri̯ ḏd mꜥ~n (m)-djw =(j) btꜣ,w | אל תאמר: "אין אצלי פשע", | `כִּי אֵין אָדָם אֲשֶׁר לֹא יֶחֱטָא` (מלכים א ח:מו) | equivalent |  |
| 19.19 | mtw =k mꜥ~šꜣ~pw r wḫꜣḫ ẖnwnn | ואל תתאמץ לבקש מהומה. | — | — | [מקבילה: AM 16.17] – "ואל תתאמץ לבקש את ידו": אותו צירוף ואותה עברית (וגם 9.14, 27.3). |
| 19.20 | jr pꜣ btꜣ,w n(,j)-s(w) pꜣ nṯr | הנה הפשע – של האל הוא, | `לִי נָקָם וְשִׁלֵּם לְעֵת תָּמוּט רַגְלָם` (דברים לב:לה) | equivalent | הדין והגמול שייכים לאל. |
| 19.21 | sw ḫtm m ḏbꜥ =f | חתום הוא באצבעו. | — | cognate | *ḫtm* = `חָתַם` / `חוֹתָם` (המלה העברית שאולה מן המצרית, `renderings.md` §4.2) |
| 19.21 | sw ḫtm m ḏbꜥ =f | חתום הוא באצבעו. | `חָתֻם בִּצְרוֹר פִּשְׁעִי; וַתִּטְפֹּל עַל-עֲוֹנִי` (איוב יד:יז) | equivalent | הפשע "חתום", בדיוק כאן |
| 19.21 | sw ḫtm m ḏbꜥ =f | חתום הוא באצבעו. | `הֲלֹא הוּא כָּמֻס עִמָּדִי; חָתוּם בְּאוֹצְרֹתָי` (דברים לב:לד) | equivalent |  |
| 19.22 | mꜥ~n mnḫ m-ḏr,t pꜣ nṯr | אין מעלה ביד האל, | `כִּי לֹא-יִצְדַּק לְפָנֶיךָ כָל-חָי` (תהלים קמג:ב) | equivalent |  |
| 19.23 | ḫr mꜥ~n whꜣ m-bꜣḥ =f | והרי אין כישלון לפניו. | `אֵין חָכְמָה וְאֵין תְּבוּנָה וְאֵין עֵצָה לְנֶגֶד יְהוָה` (משלי כא:ל) | equivalent |  |
| 20.2 | km ꜣ,t ḥḏi̯ =f sw | בתום רגע – הוא מזיק לה. | — | — | [מקבילה: AM 6.3, AM 9.3] – "בתום רגע – …": אותו צירוף ואותה עברית. |
| 20.3 | dns tw m jb =k smn ḥꜣ,tj =k | היה כבד־משקל בלבך, קבע את לבבך, | `חֲזַק וְיַאֲמֵץ לִבֶּךָ; וְקַוֵּה אֶל-יְהוָה` (תהלים כז:יד) | equivalent | חיזוק הלב, ואחריו הביטחון באל (20.6) |
| 20.3 | dns tw m jb =k smn ḥꜣ,tj =k | היה כבד־משקל בלבך, קבע את לבבך, | `וְהַכְבֵּד אֶת לִבּוֹ` (שמות ח:יא) | divergence | ב"כובד לב" העברי (פרעה) הכובד הוא קשיחות; במצרית "כובד" בלב הוא יציבות ושיקול דעת. |
| 20.4 | m-jri̯ jri̯ ḥm(w) n ns{,t} =k | אל תטה משוט בלשונך; | — | — | [מקבילה: AM 1.10, AM 15.6] – *jrj ḥmw* "להטות משוט": אותו צירוף. |
| 20.5 | jr ns{,t} n r(m)ṯ ḥm(w) n jm(w) | הנה לשון האדם – משוט כלי־השיט, | `מָוֶת וְחַיִּים בְּיַד-לָשׁוֹן` (משלי יח:כא) | equivalent | כוח הלשון |
| 20.5 | jr ns{,t} n r(m)ṯ ḥm(w) n jm(w) | הנה לשון האדם – משוט כלי־השיט, | `פַּלְגֵי-מַיִם לֶב-מֶלֶךְ בְּיַד-יְהוָה; עַל-כָּל-אֲשֶׁר יַחְפֹּץ יַטֶּנּוּ` (משלי כא:א) | equivalent | האל "מטה" גם את הלב. |
| 20.6 | Nb-r-ḏr pꜣy =f jr,j-ḥꜣ,t | ואדון הכול – הוא החובל שלו. | `וַיִּקְרַב אֵלָיו רַב הַחֹבֵל` (יונה א:ו) | equivalent | `חֹבֵל` הוא איש הספינה |
| 20.6 | Nb-r-ḏr pꜣy =f jr,j-ḥꜣ,t | ואדון הכול – הוא החובל שלו. | `מֵיְהוָה מִצְעֲדֵי-גָבֶר; וְאָדָם מַה-יָּבִין דַּרְכּוֹ` (משלי כ:כד) | equivalent |  |
| 20.8 | m-jri̯ ꜥq r qnb,t m-bꜣḥ sr | אל תיכנס אל מועצת־השופטים לפני שר, | `אַל-תֵּצֵא לָרִב מַהֵר` (משלי כה:ח) | equivalent | ראו 20.9. |
| 20.9 | mtw =k sꜥḏꜣ mdw(,t).pl =k | ואל תזייף את דבריך. | `עֵד אֱמוּנִים לֹא יְכַזֵּב; וְיָפִיחַ כְּזָבִים עֵד שָׁקֶר` (משלי יד:ה) | equivalent |  |
| 20.10 | m-jri̯ ṯsi̯ hꜣi̯.y tw ẖr ⟨w⟩šb,ṱ =k | אל תעלה ותרד בתשובתך, | `שְׂפַת-אֱמֶת תִּכּוֹן לָעַד; וְעַד-אַרְגִּיעָה לְשׁוֹן שָׁקֶר` (משלי יב:יט) | equivalent |  |
| 20.11 | jw nꜣyw =k mt(r).pl (ḥr) sꜥḥꜥ | כְּשֶׁעֵדֶיךָ מועמדים. | `עַל פִּי שְׁנֵי עֵדִים אוֹ עַל פִּי שְׁלֹשָׁה עֵדִים יָקוּם דָּבָר` (דברים יט:טו) | equivalent | העדים "יקומו". |
| 20.12 | m-jri̯ mꜥ~šꜣ~pw ꜥnḫ,y.pl n nb | אל תתאמץ בִּשְׁבוּעוֹת באדון, | `אַל תְּבַהֵל עַל פִּיךָ וְלִבְּךָ אַל יְמַהֵר לְהוֹצִיא דָבָר לִפְנֵי הָאֱלֹהִים` (קהלת ה:א) | equivalent |  |
| 20.14 | j:ḏd mꜣꜥ,t m-bꜣḥ srj | אמור אמת לפני השר, | `דַּבְּרוּ אֱמֶת אִישׁ אֶת רֵעֵהוּ אֱמֶת וּמִשְׁפַּט שָׁלוֹם שִׁפְטוּ בְּשַׁעֲרֵיכֶם` (זכריה ח:טז) | equivalent |  |
| 20.14 | j:ḏd mꜣꜥ,t m-bꜣḥ srj | אמור אמת לפני השר, | `יָפִיחַ אֱמוּנָה יַגִּיד צֶדֶק` (משלי יב:יז) | equivalent |  |
| 20.15 | tm =f sḫm m ḥꜥ,t =k | פן ישלוט בגופך. | — | — | [מקבילה: AM 8.10, AM 13.9] – *tm* "פן": "פן תביא אותך האימה". |
| 20.16 | jr m{j}-dwꜣw spr =k m-bꜣḥ =f | אם מחר תתייצב לפניו, | `חָזִיתָ אִישׁ מָהִיר בִּמְלַאכְתּוֹ לִפְנֵי-מְלָכִים יִתְיַצָּב` (משלי כב:כט) | equivalent | ההתייצבות לפני הגדולים. |
| 20.18 | ḏd =f rʾ =k ⟨m⟩ ẖn(w) m-bꜣḥ tꜣ mꜥbꜣ,yt | יאמר את (דבר) פיך בבירה, לפני השלושים, | `הֲלֹא כָתַבְתִּי לְךָ שָׁלִשִׁום (שָׁלִשִׁים)` (משלי כב:כ) | equivalent | "השלושים" כגוף של סמכות; ההקבלה של משלי כב:כ היא לשלושים ה"בתים" (27.7), לא למועצה – ובכל זאת המספר שב. |
| 20.19 | ṯnj,tj =s r ky sp ꜥn | ותיבחן? שוב בפעם אחרת. | — | — | [מקבילה: AM 15.18] – "לעניין אחר עוד" (*r ky sp ꜥn*): אותו צירוף; כאן "פעם" (`renderings.md` §10.3: *sp* "פעם" / "עניין" לפי המובן). |
| 20.21 | m-jri̯ shꜣ r(m)ṯ n tꜣ qnb,t | אל תעוות אדם במועצת־השופטים, | `לְעַוֵּת אָדָם בְּרִיבוֹ אֲדֹנָי לֹא רָאָה` (איכה ג:לו) | equivalent | אותו פועל (`renderings.md` §10.3: *shꜣ* = `עִוֵּת`), ואותו מושא ("אדם") ואותו מקום (הריב, הדין) |
| 20.21 | m-jri̯ shꜣ r(m)ṯ n tꜣ qnb,t | אל תעוות אדם במועצת־השופטים, | `לֹא תַטֶּה מִשְׁפַּט אֶבְיֹנְךָ בְּרִיבוֹ` (שמות כג:ו) | equivalent |  |
| 20.21 | m-jri̯ shꜣ r(m)ṯ n tꜣ qnb,t | אל תעוות אדם במועצת־השופטים, | `אַל-תִּגְזָל-דָּל כִּי דַל-הוּא; וְאַל-תְּדַכֵּא עָנִי בַשָּׁעַר` (משלי כב:כב) | equivalent | [מקבילה: AM 15.20] – "אל תעוות אדם בעט על המגילה": אותה פתיחה. |
| 20.22 | mtw =k rmni̯ pꜣ mꜣꜥ,ṱ | ואל תזיז את האמיתי. | `שְׂאֵת פְּנֵי-רָשָׁע לֹא-טוֹב לְהַטּוֹת צַדִּיק בַּמִּשְׁפָּט` (משלי יח:ה) | equivalent | לדחוק את הצודק בדין |
| 20.22 | mtw =k rmni̯ pꜣ mꜣꜥ,ṱ | ואל תזיז את האמיתי. | `וַיַּטּוּ בַתֹּהוּ צַדִּיק` (ישעיהו כט:כא) | equivalent |  |
| 20.22 | mtw =k rmni̯ pꜣ mꜣꜥ,ṱ | ואל תזיז את האמיתי. | `וְנָקִי וְצַדִּיק אַל תַּהֲרֹג` (שמות כג:ז) | equivalent |  |
| 21.1 | m ḏr.t ḥr =k n zꜣ~ḏww wbḫ | אל תשים את פניך אל חֲגוֹר מבהיק, | `לֹא תִשָּׂא פְנֵי דָל וְלֹא תֶהְדַּר פְּנֵי גָדוֹל` (ויקרא יט:טו) | equivalent | משוא הפנים בדין, כלפי העשיר (כאן) וכלפי העני (21.2) |
| 21.1 | m ḏr.t ḥr =k n zꜣ~ḏww wbḫ | אל תשים את פניך אל חֲגוֹר מבהיק, | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים` (דברים טז:יט) | equivalent |  |
| 21.2 | mtw =k bꜥ sw ⟨m⟩ ḥtꜣy | ואל תמאס בו כשהוא בלוי. | `וְדָל לֹא תֶהְדַּר בְּרִיבוֹ` (שמות כג:ג) | equivalent |  |
| 21.2 | mtw =k bꜥ sw ⟨m⟩ ḥtꜣy | ואל תמאס בו כשהוא בלוי. | `לֹא תִשָּׂא פְנֵי דָל` (ויקרא יט:טו) | equivalent |  |
| 21.2 | mtw =k bꜥ sw ⟨m⟩ ḥtꜣy | ואל תמאס בו כשהוא בלוי. | `לֹא תִשָּׂא פְנֵי דָל` (ויקרא יט:טו) | divergence | התורה אוסרת גם להעדיף את הדל, אמנמופה אוסר רק לבזות אותו. |
| 21.3 | m-jri̯ šzp fqꜣ (n) nḫt | אל תקבל שכר מן החזק, | `וְשֹׁחַד לֹא תִקָּח: כִּי הַשֹּׁחַד יְעַוֵּר פִּקְחִים וִיסַלֵּף דִּבְרֵי צַדִּיקִים` (שמות כג:ח) | equivalent | השוחד בדין |
| 21.3 | m-jri̯ šzp fqꜣ (n) nḫt | אל תקבל שכר מן החזק, | `וְלֹא תִקַּח שֹׁחַד כִּי הַשֹּׁחַד יְעַוֵּר עֵינֵי חֲכָמִים` (דברים טז:יט) | equivalent |  |
| 21.3 | m-jri̯ šzp fqꜣ (n) nḫt | אל תקבל שכר מן החזק, | `צֹרְרֵי צַדִּיק לֹקְחֵי כֹפֶר וְאֶבְיוֹנִים בַּשַּׁעַר הִטּוּ` (עמוס ה:יב) | equivalent |  |
| 21.4 | mtw =k gꜣ~wꜣ n =f sꜣw-ꜥ | ואל *תדחה*? בשבילו את חלש־הזרוע. | `לְהַטּוֹת מִדִּין דַּלִּים וְלִגְזֹל מִשְׁפַּט עֲנִיֵּי עַמִּי` (ישעיהו י:ב) | equivalent |  |
| 21.5 | jr mꜣꜥ(,t) fꜣ(,t) ꜥꜣ(.t) n nṯr | הנה האמת – משאת גדולה של האל, | `כִּי-יְהוָה יִתֵּן חָכְמָה; מִפִּיו דַּעַת וּתְבוּנָה` (משלי ב:ו) | equivalent |  |
| 21.5 | jr mꜣꜥ(,t) fꜣ(,t) ꜥꜣ(.t) n nṯr | הנה האמת – משאת גדולה של האל, | `כִּי לְאָדָם שֶׁטּוֹב לְפָנָיו נָתַן חָכְמָה וְדַעַת וְשִׂמְחָה` (קהלת ב:כו) | equivalent | האל נותן למי שטוב לפניו (21.6). |
| 21.6 | ḏi̯ =f sw n mri̯ =f | נותן הוא אותה למי שהוא אוהב. | `כִּי לְאָדָם שֶׁטּוֹב לְפָנָיו נָתַן חָכְמָה וְדַעַת וְשִׂמְחָה` (קהלת ב:כו) | equivalent | האל נותן את מתנתו למי שהוא בוחר בו. |
| 21.8 | sw (ḥr) šdi̯ jꜣd m nꜣy =f qnqn | מחלץ הוא את האומלל ממכותיו. | `הַצֵּל לְקֻחִים לַמָּוֶת; וּמָטִים לַהֶרֶג אִם-תַּחְשׂוֹךְ` (משלי כד:יא) | equivalent |  |
| 21.8 | sw (ḥr) šdi̯ jꜣd m nꜣy =f qnqn | מחלץ הוא את האומלל ממכותיו. | `אֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ` (תהלים צא:טו) | equivalent |  |
| 21.9 | m-jri̯ jri̯ n =k hꜣ~rw.pl n-ꜥḏꜣ | אל תעשה לך יומנים בשקר, | `וּמְכַתְּבִים עָמָל כִּתֵּבוּ` (ישעיהו י:א) | equivalent |  |
| 21.12 | st n smt(r) n wḥm | שייכים הם לחקירת המזכיר. | `וִיהוֹשָׁפָט בֶּן אֲחִילוּד מַזְכִּיר` (שמואל ב ח:טז) | equivalent | `מַזְכִּיר` שבחצר דוד הושווה זה מכבר לפקיד המצרי *wḥm.w nsw* "מכריז המלך", המוסר את דברי המלך ואת הדיווחים אליו. |
| 21.14 | mtw =k ḥḏi̯ sḫr.w.pl n nṯr | ואל תזיק לעצות האל. | `וַעֲצַת יְהוָה הִיא תָקוּם` (משלי יט:כא) | equivalent |  |
| 21.16 | jw bn Šꜣy Rnn,t | כאילו אין שַׁאי ורֶנֶנֶת. | — | — | [מקבילה: AM 9.11] – "אין איש ששַׁאי ורֶנֶנֶת אינם מכירים". |
| 21.17 | sw{ꜣ}ḏ ꜣḫ,t m nꜣy =w nb{n}.w.pl | מסור רכוש לבעליו, | `וְהֵשִׁיב אֶת הַגְּזֵלָה אֲשֶׁר גָּזָל אוֹ אֶת הָעֹשֶׁק אֲשֶׁר עָשָׁק` (ויקרא ה:כג) | equivalent | החזרת הרכוש לבעליו. |
| 21.19 | m-ḏr.tj qd ḥꜣ,tj =k m pr =w | אל תניח ללבבך לבנות בביתם, | `הוֹי בֹּנֶה בֵיתוֹ בְּלֹא צֶדֶק וַעֲלִיּוֹתָיו בְּלֹא מִשְׁפָּט` (ירמיהו כב:יג) | equivalent | הבונה את ביתו בעושק. |
| 21.20 | jw pꜣyw =k qs n nmj,t | ועצמותיך שייכות לספסל־הטבח. | — | — | [מקבילה: AM 15.3] – "ספסל־הטבח": אותה מלה. |
| 22.1 | m-jri̯ ḏd gmi̯ n =j ḥr(,j) nḫt | אל תאמר: "מצא לי מי שמעליי, חזק, | `אַל-תֹּאמַר אֲשַׁלְּמָה-רָע; קַוֵּה לַיהוָה וְיֹשַׁע לָךְ` (משלי כ:כב) | equivalent | "אל תאמר", ובמקום הנקמה – הביטחון באל (22.7) |
| 22.1 | m-jri̯ ḏd gmi̯ n =j ḥr(,j) nḫt | אל תאמר: "מצא לי מי שמעליי, חזק, | `כִּי-גֹאֲלָם חָזָק; הוּא-יָרִיב אֶת-רִיבָם אִתָּךְ` (משלי כג:יא) | divergence | אצל משלי ה"חזק" הוא הגואל (האל) של היתומים; כאן ה"חזק" (*nḫt*) הוא פטרון אנושי שאסור לבקש. |
| 22.3 | m-jri̯ ḏd gmi̯ n =j stꜣ | אל תאמר: "מצא לי מגונן, | `כִּי-גֹאֲלָם חָזָק` (משלי כג:יא) | divergence | ה־TLA מתרגם "Erlöser" (גואל); `גֹּאֵל` שמור למקרא (`renderings.md` §8), והמלה המצרית היא "מגן" במובן החסות. |
| 22.4 | jw thꜣ =j msdi̯ =j / thꜣ ⟨w⟩j msdi̯ ⟨w⟩j | כי פגע בי שונאי." | — | — | [מקבילה: AM 22.2] – אותו מבנה כפול. |
| 22.5 | ḫr-rʾ-ꜥ bw rḫ =k sḫr.w.pl n nṯr | ובכן, אינך יודע את עצות האל, | `רַבּוֹת מַחֲשָׁבוֹת בְּלֶב-אִישׁ; וַעֲצַת יְהוָה הִיא תָקוּם` (משלי יט:כא) | equivalent |  |
| 22.5 | ḫr-rʾ-ꜥ bw rḫ =k sḫr.w.pl n nṯr | ובכן, אינך יודע את עצות האל, | `כִּי לֹא-תֵדַע מַה-יֵּלֶד יוֹם` (משלי כז:א) | equivalent |  |
| 22.6 | tm =k ṯm ⟨m⟩ dwꜣw | פן תיכלם מחר. | `מֵשִׁיב דָּבָר בְּטֶרֶם יִשְׁמָע אִוֶּלֶת הִיא-לוֹ וּכְלִמָּה` (משלי יח:יג) | equivalent | הכלימה של הממהר. |
| 22.7 | ḥmsi̯ n =k r ꜥ.wj.du pꜣ nṯr | שב לך בזרועות האל, | `מְעֹנָה אֱלֹהֵי קֶדֶם וּמִתַּחַת זְרֹעֹת עוֹלָם` (דברים לג:כז) | equivalent |  |
| 22.7 | ḥmsi̯ n =k r ꜥ.wj.du pꜣ nṯr | שב לך בזרועות האל, | `כְּגָמֻל עֲלֵי אִמּוֹ` (תהלים קלא:ב) | equivalent | הישיבה בחיק, כילד. |
| 22.8 | r pꜣyw =k gr (r) ḥdb =w | שתיקתך תפיל אותם. | `יְהוָה יִלָּחֵם לָכֶם; וְאַתֶּם תַּחֲרִשׁוּן` (שמות יד:יד) | equivalent | השתיקה, והאל לוחם |
| 22.8 | r pꜣyw =k gr (r) ḥdb =w | שתיקתך תפיל אותם. | `דּוֹם לַיהוָה וְהִתְחוֹלֵל-לוֹ` (תהלים לז:ז) | equivalent |  |
| 22.8 | r pꜣyw =k gr (r) ḥdb =w | שתיקתך תפיל אותם. | `טוֹב וְיָחִיל וְדוּמָם לִתְשׁוּעַת יְהוָה` (איכה ג:כו) | equivalent |  |
| 22.11 | m-jri̯ šww ẖ,t =k n-m tꜣ-tmm | אל תריק את בטנך לכל האנשים, | `בְּאָזְנֵי כְסִיל אַל-תְּדַבֵּר: כִּי-יָבוּז לְשֵׂכֶל מִלֶּיךָ` (משלי כג:ט) | equivalent | המקבילה של משלי לבית הזה (`renderings.md` §8) |
| 22.11 | m-jri̯ šww ẖ,t =k n-m tꜣ-tmm | אל תריק את בטנך לכל האנשים, | `בְּאָזְנֵי כְסִיל אַל-תְּדַבֵּר: כִּי-יָבוּז לְשֵׂכֶל מִלֶּיךָ` (משלי כג:ט) | divergence | משלי אוסר לדבר באוזני הכסיל, אמנמופה – להריק את הבטן לפני כולם |
| 22.11 | m-jri̯ šww ẖ,t =k n-m tꜣ-tmm | אל תריק את בטנך לכל האנשים, | `כָּל-רוּחוֹ יוֹצִיא כְסִיל; וְחָכָם בְּאָחוֹר יְשַׁבְּחֶנָּה` (משלי כט:יא) | equivalent |  |
| 22.12 | mtw =k ḥḏi̯ pꜣyw =k nrj{,t} | ואל תזיק למוראך. | `הוֹלֵךְ רָכִיל מְגַלֶּה-סּוֹד; וְנֶאֱמַן-רוּחַ מְכַסֶּה דָבָר` (משלי יא:יג) | equivalent |  |
| 22.13 | m-jri̯ pẖr mdw(,t).pl =k n kꜣ~wꜣ~wj | אל תסובב את דבריך בהמון, | `גּוֹלֶה-סּוֹד הוֹלֵךְ רָכִיל; וּלְפֹתֶה שְׂפָתָיו לֹא תִתְעָרָב` (משלי כ:יט) | equivalent | הרכילות, ואחריה האיסור להתחבר אל פותה השפתיים (כמו כאן 22.14). |
| 22.14 | mtw =k snsn,tj n =k pri̯-jb | ואל תתחבר אל יוצא־הלב. | `וּלְפֹתֶה שְׂפָתָיו לֹא תִתְעָרָב` (משלי כ:יט) | equivalent |  |
| 22.15 | ꜣḫ z jw =f (ḥr) -⟨(Verb)⟩- smj =f m ẖ,t =f | מוטב איש (המסתיר) את שמועתו בבטנו | `אָדָם עָרוּם כֹּסֶה דָּעַת; וְלֵב כְּסִילִים יִקְרָא אִוֶּלֶת` (משלי יב:כג) | equivalent |  |
| 22.15 | ꜣḫ z jw =f (ḥr) -⟨(Verb)⟩- smj =f m ẖ,t =f | מוטב איש (המסתיר) את שמועתו בבטנו | `נֹצֵר פִּיו שֹׁמֵר נַפְשׁוֹ` (משלי יג:ג) | equivalent |  |
| 22.17 | bw jri̯ =tw sḫsḫ r pḥ pꜣ mnḫ | אין ממהרים להגיע אל המעלה, | `וְכָל-אָץ אַךְ-לְמַחְסוֹר` (משלי כא:ה) | equivalent |  |
| 22.20 | m-jri̯ štm{t} n pꜣyw =k jr,j (n) ṯtṯt | אל תתגרה בעמיתך לריב, | `רִיבְךָ רִיב אֶת-רֵעֶךָ; וְסוֹד אַחֵר אַל-תְּגָל` (משלי כה:ט) | equivalent |  |
| 22.22 | m-jri̯ pwy r ꜥq n-ḥr =f | אל תעוף להיכנס לפניו, | `גַּם בְּלֹא-דַעַת נֶפֶשׁ לֹא-טוֹב; וְאָץ בְּרַגְלַיִם חוֹטֵא` (משלי יט:ב) | equivalent |  |
| 23.1 | jw bn mꜣꜣ =k jri̯.n =f | כשאינך חוזה את אשר עשה. | `מֵשִׁיב דָּבָר בְּטֶרֶם יִשְׁמָע אִוֶּלֶת הִיא-לוֹ וּכְלִמָּה` (משלי יח:יג) | equivalent |  |
| 23.2 | j:jri̯.w =k sjꜣꜣ (r)-ḥꜣ,t m nꜣy =f wšb(,t) | תכיר תחילה את תשובותיו, | `שֵׂכֶל אָדָם הֶאֱרִיךְ אַפּוֹ` (משלי יט:יא) | equivalent |  |
| 23.3 | mtw =k srfy jyi̯ pḥ(.wj) =k | וְהַשְׁקֵט – ויבוא קצך. | `בְּהַשְׁקֵט וּבְבִטְחָה תִּהְיֶה גְּבוּרַתְכֶם` (ישעיהו ל:טו) | equivalent |  |
| 23.4 | ḫꜣꜥ sj n-ḥr =f jri̯ =f šwi̯ ẖ,t =f | עזוב אותו לנפשו – הוא יריק את בטנו; | `כָּל-רוּחוֹ יוֹצִיא כְסִיל; וְחָכָם בְּאָחוֹר יְשַׁבְּחֶנָּה` (משלי כט:יא) | equivalent |  |
| 23.8 | ḫr-rʾ-ꜥ bw rḫ =k sḫr.w.pl n nṯr | ובכן, אינך יודע את עצות האל, | `וַעֲצַת יְהוָה הִיא תָקוּם` (משלי יט:כא) | equivalent |  |
| 23.9 | tm =k ṯm ⟨m⟩ dwꜣw | פן תיכלם מחר. | — | — | [מקבילה: AM 22.6] – העברית זהה. |
| 23.10 | ḥmsi̯ n =k r ꜥ.wj.du pꜣ nṯr | שב לך בזרועות האל, | `מְעֹנָה אֱלֹהֵי קֶדֶם וּמִתַּחַת זְרֹעֹת עוֹלָם` (דברים לג:כז) | equivalent |  |
| 23.11 | r p⟨ꜣy⟩ =k gr (r) ḥdb =w | שתיקתך תפיל אותם. | `יְהוָה יִלָּחֵם לָכֶם; וְאַתֶּם תַּחֲרִשׁוּן` (שמות יד:יד) | equivalent |  |
| 23.13 | m-jri̯ wnm ꜥq,w m-bꜣḥ srj | אל תאכל פת לפני שר, | `כִּי-תֵשֵׁב לִלְחוֹם אֶת-מוֹשֵׁל בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | equivalent | הארוחה לפני המושל |
| 23.13 | m-jri̯ wnm ꜥq,w m-bꜣḥ srj | אל תאכל פת לפני שר, | `כִּי-תֵשֵׁב לִלְחוֹם אֶת-מוֹשֵׁל בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | divergence | משלי מתאר את המצב ("כי תשב"), אמנמופה אוסר אותו ("אל תאכל"). |
| 23.14 | mtw =k wꜣḥ rʾ =k r-ḥꜣ,t ={j}⟨f⟩ | ואל תשית את פיך לפניו. | `וְשַׂמְתָּ שַׂכִּין בְּלֹעֶךָ אִם-בַּעַל נֶפֶשׁ אָתָּה` (משלי כג:ב) | equivalent | הפה (הלוע) לפני המושל |
| 23.14 | mtw =k wꜣḥ rʾ =k r-ḥꜣ,t ={j}⟨f⟩ | ואל תשית את פיך לפניו. | `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם` (תהלים עג:ט) | equivalent | "לשית פה". |
| 23.15 | jr sꜣi̯.w{t} =k wgꜣy n-ꜥḏꜣ | אם שבעת – לעוס בשקר, | `דְּבַשׁ מָצָאתָ אֱכֹל דַּיֶּךָּ: פֶּן-תִּשְׂבָּעֶנּוּ וַהֲקֵאתוֹ` (משלי כה:טז) | equivalent | השובע ליד שולחן לא שלך. |
| 23.17 | j:nw r pꜣ qꜣy n,tj m-bꜣḥ =k | הבט אל הקערה שלפניך, | `בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | equivalent | אותו צירוף בדיוק: "אשר לפניך" |
| 23.17 | j:nw r pꜣ qꜣy n,tj m-bꜣḥ =k | הבט אל הקערה שלפניך, | `בִּין תָּבִין אֶת-אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | divergence | במשלי "אשר לפניך" הוא המושל (או המאכל שלפניו), כאן – הקערה שלך. |
| 23.18 | mtw =k ḏi̯.t jri̯ =f ḫr,ṱ =k | והנח לה לעשות את מחייתך. | `שְׁתֵה-מַיִם מִבּוֹרֶךָ; וְנֹזְלִים מִתּוֹךְ בְּאֵרֶךָ` (משלי ה:טו) | equivalent | להסתפק במה שלך. |
| 23.20 | sw mj ꜥšꜣ ẖnm(,t) (n) jdḥ | הוא כרב־בארות לשאיבה. | `מַיִם עֲמֻקִּים דִּבְרֵי פִי-אִישׁ; נַחַל נֹבֵעַ מְקוֹר חָכְמָה` (משלי יח:ד) | equivalent | הבאר כמקור שממנו שואבים. |
| 23.22 | m-jri̯ sḏm wšb(,t) n sr m pr ={j}⟨f⟩ | אל תשמע תשובת שר בביתו, | `רִיבְךָ רִיב אֶת-רֵעֶךָ; וְסוֹד אַחֵר אַל-תְּגָל` (משלי כה:ט) | equivalent |  |
| 23.22 | m-jri̯ sḏm wšb(,t) n sr m pr ={j}⟨f⟩ | אל תשמע תשובת שר בביתו, | `פֶּן-יְחַסֶּדְךָ שֹׁמֵעַ; וְדִבָּתְךָ לֹא תָשׁוּב` (משלי כה:י) | equivalent |  |
| 24.1 | mtw =k wḥm sw ={k} ⟨n⟩ ⟨ky⟩ m-bw~(n)~rʾ | ואל תשנה אותה לאחר בחוץ. | `הוֹלֵךְ רָכִיל מְגַלֶּה-סּוֹד; וְנֶאֱמַן-רוּחַ מְכַסֶּה דָבָר` (משלי יא:יג) | equivalent |  |
| 24.1 | mtw =k wḥm sw ={k} ⟨n⟩ ⟨ky⟩ m-bw~(n)~rʾ | ואל תשנה אותה לאחר בחוץ. | `וְשֹׁנֶה בְדָבָר מַפְרִיד אַלּוּף` (משלי יז:ט) | equivalent | `שָׁנָה בְדָבָר`, כמו *wḥm* כאן. |
| 24.2 | m-ḏr,tj jni̯.tw rʾ =k m-b~(n)~rʾ | אל תניח שיביאו את (דבר) פיך החוצה, | `נֹצֵר פִּיו שֹׁמֵר נַפְשׁוֹ` (משלי יג:ג) | equivalent |  |
| 24.3 | tm ḥꜣ,tj =k jkn | פן יהיה לבבך מר. | `לֵב יוֹדֵעַ מָרַּת נַפְשׁוֹ; וּבְשִׂמְחָתוֹ לֹא-יִתְעָרַב זָר` (משלי יד:י) | equivalent |  |
| 24.4 | jr ḥꜣ,tj n r(m)ṯ fnd n nṯr | הנה לבב האדם – אַפּוֹ של האל; | `נֵר יְהוָה נִשְׁמַת אָדָם; חֹפֵשׂ כָּל-חַדְרֵי-בָטֶן` (משלי כ:כז) | equivalent | נשמת האדם כנר האל, החופש בפנים |
| 24.4 | jr ḥꜣ,tj n r(m)ṯ fnd n nṯr | הנה לבב האדם – אַפּוֹ של האל; | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | בבראשית האל נופח באפו של האדם; כאן לב האדם הוא אפו של האל. |
| 24.5 | zꜣw tw r mkḥꜣ =f | הישמר לך מלהתעלם ממנו. | — | — | [מקבילה: AM 23.7] – "אל תתעלם ממנו": אותו פועל (*mkḥꜣ*). |
| 24.9 | m-jri̯ sbjꜣ n kꜣmn mtw =k pjṯꜣ nmj | אל תלעג לעיוור, ואל תהתל בגמד, | `לֹא תְקַלֵּל חֵרֵשׁ וְלִפְנֵי עִוֵּר לֹא תִתֵּן מִכְשֹׁל` (ויקרא יט:יד) | equivalent | העיוור (*kꜣmn* = `עִוֵּר`, `renderings.md` §4.3) |
| 24.9 | m-jri̯ sbjꜣ n kꜣmn mtw =k pjṯꜣ nmj | אל תלעג לעיוור, ואל תהתל בגמד, | `אָרוּר מַשְׁגֶּה עִוֵּר בַּדָּרֶךְ` (דברים כז:יח) | equivalent |  |
| 24.9 | m-jri̯ sbjꜣ n kꜣmn mtw =k pjṯꜣ nmj | אל תלעג לעיוור, ואל תהתל בגמד, | `לֹעֵג לָרָשׁ חֵרֵף עֹשֵׂהוּ` (משלי יז:ה) | equivalent | הלעג לחלש, והנימוק התאולוגי ("עושהו") – כמו כאן 24.13–24.14 ("האל בונהו") |
| 24.9 | m-jri̯ sbjꜣ n kꜣmn mtw =k pjṯꜣ nmj | אל תלעג לעיוור, ואל תהתל בגמד, | `לֹעֵג לָרָשׁ חֵרֵף עֹשֵׂהוּ` (משלי יז:ה) | divergence | התורה אוסרת לקלל את החרש ולהכשיל את העיוור, אמנמופה – ללעוג ולהתל. |
| 24.10 | mtw =k ḥḏi̯ sḫr.w.pl n qbqb | ואל תזיק לעצות הפיסח. | `אִישׁ עִוֵּר אוֹ פִסֵּחַ אוֹ חָרֻם אוֹ שָׂרוּעַ` (ויקרא כא:יח) | equivalent | העיוור והפיסח יחד, כמו כאן. |
| 24.11 | m-jri̯ pjṯꜣ z jw =f m-ḏr,t pꜣ nṯr | אל תהתל באיש שהוא ביד האל, | `וַיְשַׁנּוֹ אֶת טַעְמוֹ בְּעֵינֵיהֶם וַיִּתְהֹלֵל בְּיָדָם` (שמואל א כא:יד) | equivalent | המשוגע (המדומה) כמושא ללעג. |
| 24.12 | mtw =k ḥs{i̯}⟨ꜣ⟩ ḥr j:r =f thꜣ⟨.tw⟩ =f | ואל תזעים פנים נגדו, שייפגע. | — | — | [מקבילה: AM 19.5] – "ואל תכתוב מגילה נגדו, שייפגע": אותו סוף ואותה עברית. |
| 24.13 | jr r(m)ṯ ꜥmꜥ(,t) dḥꜣ | הנה האדם – טיט ותבן, | `הֵן-אֲנִי כְפִיךָ לָאֵל; מֵחֹמֶר קֹרַצְתִּי גַם-אָנִי` (איוב לג:ו) | equivalent | האדם מן החומר |
| 24.13 | jr r(m)ṯ ꜥmꜥ(,t) dḥꜣ | הנה האדם – טיט ותבן, | `זְכָר-נָא כִּי-כַחֹמֶר עֲשִׂיתָנִי; וְאֶל-עָפָר תְּשִׁיבֵנִי` (איוב י:ט) | equivalent |  |
| 24.13 | jr r(m)ṯ ꜥmꜥ(,t) dḥꜣ | הנה האדם – טיט ותבן, | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | divergence | בבראשית האדם עפר ונשמה, ובפועל "יצר"; כאן טיט ותבן, והאל "בונה" (24.14) |
| 24.13 | jr r(m)ṯ ꜥmꜥ(,t) dḥꜣ | הנה האדם – טיט ותבן, | `לֹא תֹאסִפוּן לָתֵת תֶּבֶן לָעָם לִלְבֹּן הַלְּבֵנִים` (שמות ה:ז) | equivalent | הטיט והתבן הם חומרי הלבנה במצרים. |
| 24.14 | pꜣ nṯr pꜣy =f qd | האל – בונהו. | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב) | equivalent | האל "בונה" את האדם (*qd* = `בָּנָה`, `renderings.md` §4.3) |
| 24.14 | pꜣ nṯr pꜣy =f qd | האל – בונהו. | `אֲנַחְנוּ הַחֹמֶר וְאַתָּה יֹצְרֵנוּ וּמַעֲשֵׂה יָדְךָ כֻּלָּנוּ` (ישעיהו סד:ז) | equivalent |  |
| 24.14 | pꜣ nṯr pꜣy =f qd | האל – בונהו. | `אֲנַחְנוּ הַחֹמֶר וְאַתָּה יֹצְרֵנוּ וּמַעֲשֵׂה יָדְךָ כֻּלָּנוּ` (ישעיהו סד:ז) | divergence | בישעיהו האל "יוצר" (קדר), כאן "בונה". |
| 24.15 | sw (ḥr) whnj sw (ḥr) qd m-mn(,t) | הוא הורס והוא בונה בכל יום; | `עֵת לִפְרוֹץ וְעֵת לִבְנוֹת` (קהלת ג:ג) | equivalent |  |
| 24.15 | sw (ḥr) whnj sw (ḥr) qd m-mn(,t) | הוא הורס והוא בונה בכל יום; | `יְהוָה מֵמִית וּמְחַיֶּה; מוֹרִיד שְׁאוֹל וַיָּעַל` (שמואל א ב:ו) | equivalent |  |
| 24.16 | sw (ḥr) jri̯ ḫꜣ n twꜣ n mri̯ =f | עושה הוא אלף עניים כאשר יאהב, | `יְהוָה מוֹרִישׁ וּמַעֲשִׁיר; מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | equivalent | שירת חנה: האל מוריש ומעשיר, משפיל ומרומם, כמו 24.16–24.17 |
| 24.16 | sw (ḥr) jri̯ ḫꜣ n twꜣ n mri̯ =f | עושה הוא אלף עניים כאשר יאהב, | `מְקִימִי מֵעָפָר דָּל; מֵאַשְׁפֹּת יָרִים אֶבְיוֹן` (תהלים קיג:ז) | equivalent |  |
| 24.17 | sw (ḥr) jri̯ r(m)ṯ ḫꜣ n ḥjy | עושה הוא אלף בני אדם לפקידים, | `מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | equivalent |  |
| 24.18 | jw =f n tꜣyw =f wnw,t n ꜥnḫ | כשהוא בשעת חייו. | — | — | [מקבילה: AM 9.13] – "כל איש – לשעתו": השעה (*wnw.t*) הקצובה. |
| 24.19 | ršj.wjꜣ sw pꜣ jri̯ pḥ jmn,tt | מה שמח הוא, אשר הגיע אל המערב, | `וְחֹסֶה בְמוֹתוֹ צַדִּיק` (משלי יד:לב) | equivalent | הביטחון של הישר במותו. |
| 24.20 | jw =f wḏꜣ m-ḏr,t pꜣ nṯr | והוא שלם ביד האל. | `בְּיָדְךָ אַפְקִיד רוּחִי: פָּדִיתָ אוֹתִי יְהוָה אֵל אֱמֶת` (תהלים לא:ו) | equivalent |  |
| 24.22 | m-jri̯ ḥmsi̯ m ꜥ,t-ḥ(n)q,t | אל תשב בחדר־הַשֵּׁכָר, | `אַל-תְּהִי בְסֹבְאֵי-יָיִן בְּזֹלְלֵי בָשָׂר לָמוֹ` (משלי כג:כ) | equivalent |  |
| 24.22 | m-jri̯ ḥmsi̯ m ꜥ,t-ḥ(n)q,t | אל תשב בחדר־הַשֵּׁכָר, | `לֵץ הַיַּיִן הֹמֶה שֵׁכָר; וְכָל-שֹׁגֶה בּוֹ לֹא יֶחְכָּם` (משלי כ:א) | equivalent | השכר במשלי, כמו *ḥnq.t* כאן. |
| 25.1 | mtw =k ṯ(ꜣ)s ⟨r⟩ ꜥꜣ r =k | ואל תתקשר אל הגדול ממך, | `אַל-תִּתְהַדַּר לִפְנֵי-מֶלֶךְ; וּבִמְקוֹם גְּדֹלִים אַל-תַּעֲמֹד` (משלי כה:ו) | equivalent |  |
| 25.4 | ḫnms n =k z m ḏꜣrʾ =k | התרועע עם איש כשיעורך; | `אִישׁ רֵעִים לְהִתְרֹעֵעַ; וְיֵשׁ אֹהֵב דָּבֵק מֵאָח` (משלי יח:כד) | equivalent |  |
| 25.7 | ⟨jw⟩ šmsw,t.pl m-sꜣ =f tr ⟨sw⟩ | ופמליה אחריו – הוקר אותו; | `רָאוּנִי נְעָרִים וְנֶחְבָּאוּ; וִישִׁישִׁים קָמוּ עָמָדוּ` (איוב כט:ח) | equivalent | הכבוד ברחוב. |
| 25.8 | jmm ḏr,t n jꜣ(w) jw =f sꜣwj≡{w}⟨.w⟩ n ḥ(n)q,t | תן יד לזקן השבע שֵׁכָר, | `מִפְּנֵי שֵׂיבָה תָּקוּם וְהָדַרְתָּ פְּנֵי זָקֵן` (ויקרא יט:לב) | equivalent | כבוד הזקן. |
| 25.11 | bn zꜣw ꜣ,tj n ḫꜣb =s | ולא יישבר הגו מהרכנתו. | `וְלָשׁוֹן רַכָּה תִּשְׁבָּר-גָּרֶם` (משלי כה:טו) | equivalent |  |
| 25.11 | bn zꜣw ꜣ,tj n ḫꜣb =s | ולא יישבר הגו מהרכנתו. | `וְלָשׁוֹן רַכָּה תִּשְׁבָּר-גָּרֶם` (משלי כה:טו) | divergence | במשלי הענווה היא ששוברת עצם, כאן – הגב הכפוף אינו נשבר. |
| 25.12 | bw jri̯ =w ⟨ḏi̯.t⟩ nmḥ z jw =f (ḥr) ḏd pꜣ nḏm | אין עושים איש דל כשהוא אומר את הנעים | `מַעֲנֶה-רַּךְ יָשִׁיב חֵמָה` (משלי טו:א) | equivalent |  |
| 25.12 | bw jri̯ =w ⟨ḏi̯.t⟩ nmḥ z jw =f (ḥr) ḏd pꜣ nḏm | אין עושים איש דל כשהוא אומר את הנעים | `צוּף-דְּבַשׁ אִמְרֵי-נֹעַם` (משלי טז:כד) | equivalent |  |
| 25.14 | jr,j-ḥꜣ,t jw =f (ḥr) nw m-wꜣ.wj | חובל המביט למרחוק – | — | — | [מקבילה: AM 20.6] – "ואדון הכול – הוא החובל שלו": אותה מלה (*jrj-ḥꜣ.t*). |
| 25.17 | m-jri̯ sḥwr ꜥꜣ j:r =k | אל תקלל את הגדול ממך, | `גַּם בְּמַדָּעֲךָ מֶלֶךְ אַל תְּקַלֵּל וּבְחַדְרֵי מִשְׁכָּבְךָ אַל תְּקַלֵּל עָשִׁיר` (קהלת י:כ) | equivalent | אותו איסור, ואותו נימוק: הקללה תגיע אל מי שמעל (ראו 25.19) |
| 25.17 | m-jri̯ sḥwr ꜥꜣ j:r =k | אל תקלל את הגדול ממך, | `וְנָשִׂיא בְעַמְּךָ לֹא תָאֹר` (שמות כב:כז) | equivalent |  |
| 25.18 | jw ptr =f p(ꜣ) Rꜥ r-ḥꜣ,t =k | כי הוא ראה את רַא לפניך; | `מִפְּנֵי שֵׂיבָה תָּקוּם וְהָדַרְתָּ פְּנֵי זָקֵן` (ויקרא יט:לב) | equivalent |  |
| 25.19 | m-ḏr,tj smj =f tw =k n pꜣ Jdn m wbn =f | אל תניח לו להלשין עליך לפני האָטוֹן בזורחו, | `כִּי עוֹף הַשָּׁמַיִם יוֹלִיךְ אֶת הַקּוֹל וּבַעַל הכְּנָפַיִם (כְּנָפַיִם) יַגֵּיד דָּבָר` (קהלת י:כ) | equivalent | מי שמגלה את הקללה ומוסר אותה; כאן – אל השמש. |
| 26.1 | šrj jw =f (ḥr) sḥwr ꜥꜣ | זוטר המקלל גדול. | — | — | [מקבילה: AM 25.20] – "עוד זוטר קילל גדול": אותן מלים. |
| 26.2 | jmm jri̯ =f qnqn =k jw ḏr,t =k m qn(j) =k | תן לו להכות אותך, וידך בחיקך; | `יִתֵּן לְמַכֵּהוּ לֶחִי יִשְׂבַּע בְּחֶרְפָּה` (איכה ג:ל) | equivalent |  |
| 26.2 | jmm jri̯ =f qnqn =k jw ḏr,t =k m qn(j) =k | תן לו להכות אותך, וידך בחיקך; | `גֵּוִי נָתַתִּי לְמַכִּים וּלְחָיַי לְמֹרְטִים` (ישעיהו נ:ו) | equivalent |  |
| 26.2 | jmm jri̯ =f qnqn =k jw ḏr,t =k m qn(j) =k | תן לו להכות אותך, וידך בחיקך; | `לָמָּה תָשִׁיב יָדְךָ וִימִינֶךָ; מִקֶּרֶב חֵוקְךָ (חֵיקְךָ) כַלֵּה` (תהלים עד:יא) | equivalent | היד בחיק: שלא לפעול. |
| 26.3 | jmm jri̯ =f sḥwr =k jw =k gr.ṱ | תן לו לקלל אותך, ואתה שותק. | `כַּצִּפּוֹר לָנוּד כַּדְּרוֹר לָעוּף כֵּן קִלְלַת חִנָּם לֹא (לוֹ) תָבֹא` (משלי כו:ב) | equivalent |  |
| 26.4 | jr m{j}-dwꜣw spr =k m-bꜣḥ =f | אם מחר תתייצב לפניו, | — | — | [מקבילה: AM 20.16] – אותה שורה, ואותה עברית. |
| 26.5 | ḏi̯ =f n =k ꜥq,w m-wsdn | ייתן לך פת באין מעצור. | `אִם-רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם` (משלי כה:כא) | equivalent | והפעם להפך: מי שהיכה ייתן לחם |
| 26.5 | ḏi̯ =f n =k ꜥq,w m-wsdn | ייתן לך פת באין מעצור. | `אִם רוּחַ הַמּוֹשֵׁל תַּעֲלֶה עָלֶיךָ מְקוֹמְךָ אַל תַּנַּח כִּי מַרְפֵּא יַנִּיחַ חֲטָאִים גְּדוֹלִים` (קהלת י:ד) | equivalent |  |
| 26.9 | m-jri̯ gmi̯ ḫꜣrj(,t) jw ḥ(ꜣ)m =k sw m sḫ,t | אל תמצא (אשמה) באלמנה כְּשֶׁדָּלִיתָ אותה בשדה, | `כִּי תִקְצֹר קְצִירְךָ בְשָׂדֶךָ וְשָׁכַחְתָּ עֹמֶר בַּשָּׂדֶה לֹא תָשׁוּב לְקַחְתּוֹ לַגֵּר לַיָּתוֹם וְלָאַלְמָנָה יִהְיֶה` (דברים כד:יט) | equivalent | האלמנה בשדה בשעת הקציר |
| 26.9 | m-jri̯ gmi̯ ḫꜣrj(,t) jw ḥ(ꜣ)m =k sw m sḫ,t | אל תמצא (אשמה) באלמנה כְּשֶׁדָּלִיתָ אותה בשדה, | `וְלֹא תַחֲבֹל בֶּגֶד אַלְמָנָה` (דברים כד:יז) | equivalent |  |
| 26.9 | m-jri̯ gmi̯ ḫꜣrj(,t) jw ḥ(ꜣ)m =k sw m sḫ,t | אל תמצא (אשמה) באלמנה כְּשֶׁדָּלִיתָ אותה בשדה, | `גַּם בֵּין הָעֳמָרִים תְּלַקֵּט וְלֹא תַכְלִימוּהָ` (רות ב:טו) | equivalent | המלקטת שבעל השדה "תופס" ואינו מכלים |
| 26.9 | m-jri̯ gmi̯ ḫꜣrj(,t) jw ḥ(ꜣ)m =k sw m sḫ,t | אל תמצא (אשמה) באלמנה כְּשֶׁדָּלִיתָ אותה בשדה, | `גַּם בֵּין הָעֳמָרִים תְּלַקֵּט וְלֹא תַכְלִימוּהָ` (רות ב:טו) | divergence | התורה נותנת לאלמנה זכות בשדה, אמנמופה אוסר לתפוס אותה בו – אותה תמונה, משני הצדדים. |
| 26.10 | mtw =k tm wꜣḥ n =k r wšb =s | ואל תרפה מלענות בעדה. | `עֹשֶׂה מִשְׁפַּט יָתוֹם וְאַלְמָנָה; וְאֹהֵב גֵּר לָתֶת לוֹ לֶחֶם וְשִׂמְלָה` (דברים י:יח) | equivalent |  |
| 26.11 | m-jri̯ wni̯ ḏrjḏrj n tꜣyw =k mꜥ~ḏꜣ~qꜣ~tj | אל תזניח נכרי בכדך, | `וְגֵר לֹא תוֹנֶה וְלֹא תִלְחָצֶנּוּ: כִּי גֵרִים הֱיִיתֶם בְּאֶרֶץ מִצְרָיִם` (שמות כב:כ) | equivalent |  |
| 26.11 | m-jri̯ wni̯ ḏrjḏrj n tꜣyw =k mꜥ~ḏꜣ~qꜣ~tj | אל תזניח נכרי בכדך, | `וַאֲהַבְתֶּם אֶת הַגֵּר` (דברים י:יט) | equivalent |  |
| 26.11 | m-jri̯ wni̯ ḏrjḏrj n tꜣyw =k mꜥ~ḏꜣ~qꜣ~tj | אל תזניח נכרי בכדך, | `וַאֲהַבְתֶּם אֶת הַגֵּר` (דברים י:יט) | divergence | *ḏrḏr* הוא "זר, שאינו מכאן" – `נָכְרִי`, לא `גֵּר` (`renderings.md` §8): אין כאן מעמד משפטי של "גר תושב", אלא אורח זר. |
| 26.12 | q(ꜣ)b s(j) (r)-ḥꜣ,t sn.w.pl =k | כפול אותו לפני אחיך. | `טוֹב-עַיִן הוּא יְבֹרָךְ: כִּי-נָתַן מִלַּחְמוֹ לַדָּל` (משלי כב:ט) | equivalent |  |
| 26.13 | mri̯.n nṯr w(ꜣ)š {t}šwꜣ / t{š}wꜣ | אהב האל את המכבד את העני | `עֹשֵׁק דָּל חֵרֵף עֹשֵׂהוּ; וּמְכַבְּדוֹ חֹנֵן אֶבְיוֹן` (משלי יד:לא) | equivalent | אותו פועל, `מְכַבֵּד`, ואותו מושא |
| 26.13 | mri̯.n nṯr w(ꜣ)š {t}šwꜣ / t{š}wꜣ | אהב האל את המכבד את העני | `מַלְוֵה יְהוָה חוֹנֵן דָּל; וּגְמֻלוֹ יְשַׁלֶּם-לוֹ` (משלי יט:יז) | equivalent |  |
| 26.13 | mri̯.n nṯr w(ꜣ)š {t}šwꜣ / t{š}wꜣ | אהב האל את המכבד את העני | `כִּי מְכַבְּדַי אֲכַבֵּד וּבֹזַי יֵקָלּוּ` (שמואל א ב:ל) | equivalent |  |
| 26.14 | r tr bwꜣ.y | יותר מן המוקיר את רם־המעלה. | `לֹא תִשָּׂא פְנֵי דָל וְלֹא תֶהְדַּר פְּנֵי גָדוֹל` (ויקרא יט:טו) | equivalent |  |
| 26.14 | r tr bwꜣ.y | יותר מן המוקיר את רם־המעלה. | `לֹא תִשָּׂא פְנֵי דָל וְלֹא תֶהְדַּר פְּנֵי גָדוֹל` (ויקרא יט:טו) | divergence | התורה אוסרת להעדיף צד, אמנמופה מעמיד את האל לצד העני. |
| 26.16 | m-jri̯ j⟨s⟩qꜣ r(m)ṯ n ḏꜣy n jwtwr? | אל תעכב אדם מלחצות את הַיְאוֹר?, | `וּפַרְעֹה חֹלֵם וְהִנֵּה עֹמֵד עַל הַיְאֹר` (בראשית מא:א) | cognate | *jtrw* – מקורה של `יְאֹר` העברית (`renderings.md` §4.2), כמו . |
| 26.20 | mꜥ~n bw,t m-ḏr,t pꜣ nṯr | אין תועבה ביד האל, | — | — | [מקבילה: AM 19.22] – "אין מעלה ביד האל": אותו מבנה; [מקבילה: AM 13.16] – "תועבת האל" (*bw.t*). |
| 27.2 | m-jri̯ jri̯ n =k mẖn(,t) ḥr-tp jtwr | אל תעשה לך מעבורת על היאור, | `וְהִנֵּה מִן הַיְאֹר עֹלֹת שֶׁבַע פָּרוֹת` (בראשית מא:ב) | cognate | *jtwr* = `יְאֹר` (`renderings.md` §4.2): ; [מקבילה: AM 18.4, AM 21.9] – "אל תעשה לך…". |
| 27.3 | mtw =k mꜥ~šꜣ~pw r wḫꜣḫ tꜣy =s hꜣm(,t) | ואל תתאמץ לבקש את דמי־המעבר שלה. | — | — | [מקבילה: AM 16.17, AM 19.19] – "ואל תתאמץ לבקש…": אותו צירוף ואותה עברית. |
| 27.4 | šdi̯ hꜣm(,t) m-ḏr,t pꜣ nb wn | חלץ את דמי־המעבר מיד בעל־היֵשׁ, | `לְהַנְחִיל אֹהֲבַי יֵשׁ` (משלי ח:כא) | equivalent |  |
| 27.5 | mtw =k bꜥꜣ pꜣ {n}⟨jw⟩,tj | ופטור את חסר־הכל. | `הוֹי כָּל צָמֵא לְכוּ לַמַּיִם וַאֲשֶׁר אֵין לוֹ כָּסֶף` (ישעיהו נה:א) | equivalent | מי ש"אין לו כסף" מקבל חינם. |
| 27.7 | ptr n =k tꜣj 30 n ḥw,t | ראה לך את שלושים הבתים האלה: | `הֲלֹא כָתַבְתִּי לְךָ שָׁלִשִׁום (שָׁלִשִׁים) בְּמֹעֵצוֹת וָדָעַת` (משלי כב:כ) | equivalent | **הקבלת המפתח**: הכתיב "שלשום" (לפני יומיים) והקרי `שָׁלִשִׁים` ("שלישים", קצינים) לא הובנו עד שנמצא אמנמופה; מאז מתקנים רוב החוקרים ל־`שְׁלֹשִׁים` – "שלושים (פרקים)", כמו "שלושים הבתים" כאן; וגם הפנייה `לְךָ` דומה ל־*n=k* |
| 27.7 | ptr n =k tꜣj 30 n ḥw,t | ראה לך את שלושים הבתים האלה: | `לְהוֹדִיעֲךָ קֹשְׁטְ אִמְרֵי אֱמֶת` (משלי כב:כא) | equivalent | הפסוק הבא במשלי, ואחריו אמנמופה 1.5–1.6. |
| 27.8 | st (ḥr) sḏꜣy-ḥr / (m) sḏꜣy-ḥr st (ḥr) sbꜣy / (m) sbꜣ,y(t) | הם מענגים, הם מלמדים; | `לָדַעַת חָכְמָה וּמוּסָר; לְהָבִין אִמְרֵי בִינָה` (משלי א:ב) | equivalent | ראו 1.1 |
| 27.8 | st (ḥr) sḏꜣy-ḥr / (m) sḏꜣy-ḥr st (ḥr) sbꜣy / (m) sbꜣ,y(t) | הם מענגים, הם מלמדים; | `וְיֹתֵר שֶׁהָיָה קֹהֶלֶת חָכָם: עוֹד לִמַּד דַּעַת אֶת הָעָם` (קהלת יב:ט) | equivalent | חתימת קהלת, ובה הוראה ומשלים. |
| 27.9 | st n ḥꜣ,wtj n šfd nb | הם מבחר כל ספר, | `עֲשׂוֹת סְפָרִים הַרְבֵּה אֵין קֵץ וְלַהַג הַרְבֵּה יְגִעַת בָּשָׂר` (קהלת יב:יב) | divergence | חתימת קהלת מזהירה מן הספרים הרבים; אמנמופה משבח את ספרו כמבחר הספרים. |
| 27.10 | st (ḥr) ḏi̯.t rḫ pꜣ ḫm | הם נותנים דעת לַבַּעַר. | `לָתֵת לִפְתָאיִם עָרְמָה; לְנַעַר דַּעַת וּמְזִמָּה` (משלי א:ד) | equivalent | אותה תכלית, "לתת … דעת" |
| 27.10 | st (ḥr) ḏi̯.t rḫ pꜣ ḫm | הם נותנים דעת לַבַּעַר. | `עֵדוּת יְהוָה נֶאֱמָנָה מַחְכִּימַת פֶּתִי` (תהלים יט:ח) | equivalent |  |
| 27.10 | st (ḥr) ḏi̯.t rḫ pꜣ ḫm | הם נותנים דעת לַבַּעַר. | `וְשׂוֹנֵא תוֹכַחַת בָּעַר` (משלי יב:א) | equivalent |  |
| 27.11 | jr ꜥšj =st m-bꜣḥ pꜣ ḫm | אם יוקראו לפני הבער, | `וַיִּקְרְאוּ בַסֵּפֶר בְּתוֹרַת הָאֱלֹהִים מְפֹרָשׁ; וְשׂוֹם שֶׂכֶל וַיָּבִינוּ בַּמִּקְרָא` (נחמיה ח:ח) | equivalent | קריאה בקול ופירוש (27.14–27.15). |
| 27.12 | ḫr jri̯ =f twr ḥr-r-rʾ =sn | והרי נטהר הוא בעבורם. | `תּוֹרַת יְהוָה תְּמִימָה מְשִׁיבַת נָפֶשׁ` (תהלים יט:ח) | equivalent |  |
| 27.13 | j:mḥ tw n-jm =w jmm st m jb =k | היאחז בהם, תן אותם בלבך, | `וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל לְבָבֶךָ` (דברים ו:ו) | equivalent |  |
| 27.13 | j:mḥ tw n-jm =w jmm st m jb =k | היאחז בהם, תן אותם בלבך, | `כָּתְבֵם עַל-לוּחַ לִבֶּךָ` (משלי ג:ג) | equivalent |  |
| 27.14 | mtw =k jri̯ r(m)ṯ n wḥꜥ =w | וֶהְיֵה לאדם המפרש אותם, | `וַיִּקְרְאוּ בַסֵּפֶר בְּתוֹרַת הָאֱלֹהִים מְפֹרָשׁ` (נחמיה ח:ח) | equivalent |  |
| 27.16 | jr zẖꜣ,w jw =⟨f⟩ sšsꜣ.wj m jꜣw,t.ṱ =f | הנה סופר שהוא בקי במשרתו – | `חָזִיתָ אִישׁ מָהִיר בִּמְלַאכְתּוֹ לִפְנֵי-מְלָכִים יִתְיַצָּב; בַּל-יִתְיַצֵּב לִפְנֵי חֲשֻׁכִּים` (משלי כב:כט) | equivalent | **סוף "דברי החכמים" הראשון במשלי**: האיש המהיר במלאכתו, שיתייצב לפני מלכים – כמו הסופר הבקי במשרתו שיימצא ראוי להיות רע המלך (27.17) |
| 27.16 | jr zẖꜣ,w jw =⟨f⟩ sšsꜣ.wj m jꜣw,t.ṱ =f | הנה סופר שהוא בקי במשרתו – | `וְהוּא סֹפֵר מָהִיר בְּתוֹרַת מֹשֶׁה` (עזרא ז:ו) | divergence | משלי אומר `מָהִיר` ("זריז, מיומן") ו־`מְלַאכְתּוֹ`, המצרית *sšꜣ* "בקי" ו־*jꜣw.t* "משרה" – התרגום שומר על המלים המצריות (`renderings.md` §8: `בָּקִי`, `מִשְׂרָה`; `מְלָאכָה` שמורה ל־*šipru* האכדית, guidelines §6.7). המונח המצרי *zẖꜣ.w sšꜣ* "סופר מהיר/בקי" הושווה כבר ל־. |
| 27.17 | gmi̯ =f sw m{ꜥ}-šꜣ.wj smḥr […] | ימצא את עצמו ראוי להיות רֵעַ (המלך) […]. | `לִפְנֵי-מְלָכִים יִתְיַצָּב` (משלי כב:כט) | equivalent |  |
| 27.17 | gmi̯ =f sw m{ꜥ}-šꜣ.wj smḥr […] | ימצא את עצמו ראוי להיות רֵעַ (המלך) […]. | `וְזָבוּד בֶּן נָתָן כֹּהֵן רֵעֶה הַמֶּלֶךְ` (מלכים א ד:ה) | equivalent | `רֵעֶה הַמֶּלֶךְ`, התואר העברי המקביל ל־*smḥr* (ראו 1.4). |
