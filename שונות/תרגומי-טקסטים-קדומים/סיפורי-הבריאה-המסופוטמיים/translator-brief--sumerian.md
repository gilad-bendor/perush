# Translator brief: Sumerian texts of the creation corpus (projects 3–4, 2026-10-19)

A common brief for the sequential translators of `3-הציפור-והדג/` (the Debate between Bird and Fish, ETCSL 5.3.5) and `4-אנקי-וסדר-העולם/` (Enki and the World Order, ETCSL 1.1.3). Reusable for any later Sumerian text of this corpus. The coordinator's per-run prompt says which lines are yours.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` — whole. Especially §1 (**two purposes**: the Bible comparison *and* "the soul of the ancients"), §5 (workflow), §6 (principles, echo control §6.4, false friends §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`, then `renderings.md` (**§0, §3, §5, §6 are binding**; §6 was fixed for you).
3. `2-טקסטי-בריאה-ועדן/renderings.md` §1–§2 and its "Text 5: Grain and Sheep" rows (the debate formulas); skim `2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md` (the model for format, header and depth of apparatus).
4. Your project's `project.md` and `renderings.md`, and the Hebrew of every earlier run (grep the `>` lines: `python3 -I sumerian_tools.py grep all '<regex>'`).

## 1. Rules learned the hard way (put them first)
- **Draft unvocalized, in plene spelling (כתיב מלא), from the very first line.** Vocalize only names at their first occurrence, ambiguous words, and the names that are always vocalized (Utu `אוּתוּ`, Uttu `אוּטּוּ`, Inana `אִינַנָּה`, Magan `מָגָן`, *me* `הַ־מֶה`). Do not strip niqqud with a naive regex (it deletes the maqaf): keep `[֑-ֽֿ-ׇ]`.
- **Translate the Sumerian, not ETCSL's English.** Form your reading from the transliteration, ETCSL's TEI lemmas, ePSD2 and the morph field; read ETCSL's translation (rank 3) only afterwards, and record every disagreement. ETCSL's English is the main source of false echoes in this corpus ("not yet", "cursed", "created").
- **The verbal chain.** In the **פירוק** bullet parse every finite verb: prefix chain (modal *ḫe₂-*, *ga-*, *u₃-*, *nu-*, *na-*; conjugation prefix *mu-*, *i₃-*, *ba-*, *bi₂-*, *im-ma-*, *am₃-*; dimensional infixes *-na-*, *-da-*, *-ta-*, *-ši-*, *-ni-*; agent *-n-*/*-b-*), the base (ḫamṭu or marû, reduplication) and suffixes (*-e*, *-eš*, *-ene*, nominaliser *-a*, *-am₃*). Say where the morph comes from: ORACC (EWO has Q000334 with morph), a parsed instance elsewhere in ORACC (`tools/sumerian_workbench.py line … / morph …`), or **"ניתוח שלנו"**.
- **Sumerian → Hebrew grammar** (flood project 3; G&S): narrative marû = participle (`פּוֹנֶה`, `מְמַלֵּא`); ḫamṭu = past; *ḫe₂-* = jussive/wish (`יְהִי`, `תִּהְיֶה`); *ga-* = cohortative (`נֵלְכָה`); *u₃-* = "after/when" (`אַחֲרֵי ש־`); non-finite *-a* = relative clause or infinitive; *nu-* = `לֹא` (never `טֶרֶם`); copula *-am₃* = nominal sentence.
- **One line = one Hebrew line**, with ETCSL's label. Keep the break, the order of images, the parallelism and every repetition. **Identical Sumerian → identical Hebrew** (check repeated lines with `sumerian_tools.py verify`, which lists "same transliteration, different Hebrew").
- **Brackets**: a word whose root is broken in the composite is in `[ ]`; `[…]` for a lost stretch; `…` for a word ETCSL leaves untranslated or an `X`; `( )` added for sense; `?` uncertain reading; `*נטוי*` uncertain translation; `⟨ ⟩` scribal omission. ETCSL manuscript variants ("1 ms. has instead/adds") go in the apparatus, with their Hebrew when they change the sense.
- **Reserved words** (corpus §6.5) are checked by script; the run fails if one slips in. Grep the roots of the key verses too (`שרץ`, `רמש`, `עוף`, `כנף`, `ברך`, `מלא`, `רבה`, `מין`, `ים`, `שמים`, `ארץ`): **tag every `מלא`, `רבה`, `כנף`, `עף` you use**.
- **Bible quotations** in the apparatus: vocalized, in backticks, followed by the reference in the repository's format (`(בראשית א:כ)`), and verified with `python3 -I ../tools/check_bible_quotes.py <file>` (copy the verse from `../../../תנך-מנוקד/` — `--show בראשית "א כ"` prints it). Fix every mismatch.

## 2. The annotated file (guidelines §7.2; model: G&S)
Header (Hebrew): title `# … – תרגום מוער`; then paragraphs **נוסח הבסיס**, **פירוק** (where the lemmas and morph come from), **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, a paragraph that explains the genre / the text on its own terms (for B&F: what a school debate is; for EWO: what the *me* are, who Enki is), **מלים שמורות**, **שמות**. Then `---`, then sections `## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these), then one entry per ETCSL line:

```markdown
### 14
`[X] X pu₂ umaḫ(gloss: maḫ) ku₆ mušen mi-ni-lu-ug`
> […] בבריכות ובמקומות הלחים – דגים וציפורים השכין;
- **פירוק:** … (every word; the verbal chain; the source of the morph)
- **תרגומים:** ETCSL: "…" – agreement / disagreement and why.
- **הקבלה:** [equivalent] `…` (בראשית א:כ) – … (only real contacts; mark our own proposals "הצעה שלנו")
- **הערות:** the line on its own terms: the image, the realia (marsh ecology, fowling, temple offerings, the school), the humour or the insult, the wordplay, what an ancient hearer would have heard; and the rendering decisions.
- **הערת שוליים:** (optional) one sentence that the clean translation should carry as a footnote (major cruxes, the key biblical parallels; a few per text).
```
- The transliteration line is copied **exactly** from ETCSL's `transliteration.md` (the line after the label), in backticks.
- **`הערות` matters as much as `הקבלה`** (guidelines §1, second purpose): not every line needs it, but the lines that open the ancient mind do — how they saw animals and their "nature", the marsh and the sea, the king, the gods' household economy, offerings, crafts, what made them laugh.
- Not every line has a parallel; never force one. **[absent]** and **[divergence]** are findings too.

## 3. Tools
- `python3 -I ../tools/sumerian_workbench.py lemmas <c.xml> FROM-TO` — ETCSL's TEI lemmas per word; `line <c.xml> FROM-TO` adds, for each verb, its ORACC morph where the same form is parsed elsewhere; `morph '<form>'`; `conc '<regex>' [--lemma]` (ETCSL-wide concordance: formulas recur across genres, look them up before fixing a line); `gloss '<regex>'` (ePSD2 glossary).
- EWO only: `../sources/ORACC/epsd2-literary--Q000334--Enki-and-the-World-Order/Q000334--lemmatised-morph.md` (lemma + morph per word, same line numbers).
- `python3 -I sumerian_tools.py verify 3|4` (coverage, one `>` per entry, reserved strings, name traps, identical lines); `python3 -I sumerian_tools.py grep all '<regex>'` (how a word was rendered in projects 2–4).
- The clean translation is **generated**: write `translation--intro.rtl.md` (the reader's introduction, see §5) and run `python3 -I sumerian_tools.py build 3|4`. Never edit `translation.rtl.md` by hand.

## 4. What to look for (the coordinator's list: "look for", not "translate as")
The commentary (`../../../פירוש/1-בראשית/1010-בראשית-א_א-ב_ג-שבע_ימי_הבריאה.rtl.md`, section `## יום חמישי`) is on **Gen 1:20–23** now. Its dictionary (`../../../בלשנות/ניתוחים-לשוניים/`) says: `שֶׁרֶץ` = teeming, too many to track; `רֶמֶשׂ` = moving in its own space, seen only in part; `עוֹף` = "what flies", the creature named by its motion, "what was almost in the hand and slipped away" (not a species: `צִפּוֹר` is the kind); `כָּנָף` = the edge spread out, protecting (`פָּרַשׂ כְּנָפָיו`); the water-creatures and the birds are made in one statement (1:20) and "the bird develops out of the swarm of the waters"; only the swarm has `נֶפֶשׁ חַיָּה`; both are blessed `פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הַמַּיִם … וְהָעוֹף יִרֶב בָּאָרֶץ`; `עַל הָאָרֶץ עַל פְּנֵי רְקִיעַ הַשָּׁמָיִם`; the `תַּנִּינִם` as chaos-monsters. Its appendix (`../../../נספחים-לפירוש/יום-הבריאה-החמישי--תנינים-שרצים-ועופות.rtl.md`, case 15) cites the thunderbird and the underwater serpent at war. For each such idea, note in the apparatus what the Sumerian text **can test**: does it name the bird by its flight (*dal*) or its kind (*mušen*)? where do fish and birds live, and are they made together? who fills the waters? is anything "blessed", or is a fate decreed? are the fish many, hidden, slimy, limbless? which creature is closer to the gods and the king, and why?

## 5. The reader's introduction (`translation--intro.rtl.md`)
`# <Hebrew title>` and 4–8 short paragraphs in Hebrew for a reader who knows no Sumerian: what the text is and when it was written (OB copies, Nippur and Ur schools, c. 1800 BCE; the Ur III king Šulgi in B&F); the edition and the brackets; **how to enter its world** — the school debate (B&F: the genre, the insults as school humour, the verdict, why Bird wins) or the *me* and Enki the clever, procreative, organizing god (EWO); the marsh landscape of southern Iraq; and, briefly, why it matters for Genesis 1 (without reducing the text to a "background to the Bible").

## 6. Before you finish (each run)
1. Three review passes over your lines (guidelines §5.6: fidelity; consistency with `renderings.md` and the earlier Hebrew; Hebrew read aloud), each a separate read-through; record them in `project.md` ("Progress").
2. `python3 -I sumerian_tools.py verify <KEY>` clean for your lines; `python3 -I ../tools/check_bible_quotes.py <annotated>` clean.
3. In `project.md`: add your rows to the **parallels index**, under a heading `### Parallels index (<Text name>)` (e.g. `(Bird and Fish)`, `(Enki and the World Order 250–472)`), as a table with exactly the columns `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |` (the header row starts with `| Line`; Line = the ETCSL label; Bible = the vocalized verse(s) in backticks followed by the reference). The corpus builder (`1-אנומה-אליש/build_parallels_index.py`) files each row by its first reference, Genesis first; your **open decisions** (numbered); and **Proposals for the corpus renderings** (new terms that a later text will need).
4. Add your text-specific terms to the project's `renderings.md` (table: Sumerian | Hebrew | Tag | Notes | Lines).
5. Do **not** edit the corpus files (`corpus.md`, `renderings.md`, `parallels-index.md`), the guidelines, or any other project: the coordinator merges. Do not commit.
6. Final message to the coordinator: lines done, the strongest findings (Bible, and the ancient mind), the open decisions, problems.
