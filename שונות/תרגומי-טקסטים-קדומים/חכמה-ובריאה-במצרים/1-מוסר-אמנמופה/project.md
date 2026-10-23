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

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)
