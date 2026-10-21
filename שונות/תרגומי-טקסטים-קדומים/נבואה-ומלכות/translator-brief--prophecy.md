# Translator brief: the prophecy-and-kingship corpus (SAA 9; Advice to a Prince), 2026-10-21

The common brief for every translator of `נבואה-ומלכות/`. The coordinator's prompt says which unit and lines are yours. Adapted from `../קולות-היום-יום/translator-brief--everyday.md` and `../ספרות-החכמה-והצדיק-הסובל/translator-brief.md`. Five translators draft **in parallel** (four on SAA 9, one on the Advice): that is safe only because the shared renderings were fixed first, so **follow `renderings.md` to the letter**, and put every new shared word in your "Proposals" instead of inventing a private variant.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` — whole: §1 (**two purposes**), §5 (workflow; the ★ lessons of §5.2), §6 (principles; echo control §6.4; false friends §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`, then `renderings.md` (**all of it binds**: §1 names, §2 the oracle formulas, §3 key terms, §4 the Advice, §5 the reserved strings, §6 the traps).
3. Your project's `project.md`.
4. Before you fix any new Hebrew word: `python3 -I -B prophecy_tools.py lookup '<form or lemma>'` (how the earlier corpora rendered it; it searches transliterations and normalizations) and `python3 -I -B prophecy_tools.py grep every '<Hebrew regex>'` (what that Hebrew word already renders). The treaty corpus (`../חוקים-ובריתות/`, EST) is from the same court and years: its renderings come first.

## 1. Rules learned the hard way (the ★ rules of guidelines §5.2)
- ★ **Draft unvocalized, in plene spelling (כתיב מלא), from the first line.** Vocalize only names at their first occurrence in the file, ambiguous words, archaic forms, and the ★ words of renderings §1 and §6 at every occurrence (`בֵּל`, `נָבוּ`, `סִין`, `אָנוּ`, `גֹּמֶר`, `מִנִּי`, `כֶּלַח`, `צֹר`, `אֵלִי`, `אוֹי`, `שֶׁמֶשׁ`/`שַׁמַשׁ`). Never strip niqqud with a naive regex (it eats the maqaf: keep `[֑-ֽֿ-ׇ]`).
- ★ **Write every backticked base line as `` `@` ``** and run `python3 -I -B prophecy_tools.py fill <your file>`: the tool copies the base line exactly. Never retype a transliteration.
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show ישעיהו "מא י"`), never quote from memory – even in a passing note; the coordinator's own renderings had a misremembered verse (Isa 45:22 is `פְּנוּ אֵלַי`, not "הביטו אלי"). Quote exactly as `../../../תנך-מנוקד/` has it (Psalms and Proverbs keep the hyphen-minus `-` for maqaf). Write quotations as `` `…` (ספר פרק:פסוק) `` – a quotation written `` `…`, ספר … `` is not checked. Run `check_bible_quotes.py` on your file and fix every mismatch.
- ★ **Reserve the Hebrew word of every key Bible comparison for its real counterpart** (renderings §5; the script checks it against the line's transliteration, normalization and lemmas). Here the danger is Deutero-Isaiah and Deuteronomy: `אַל תִּירָא`, `אָנֹכִי`, `מָגֵן`, `שָׁלוֹם`, `נָבִיא`, `בָּטַח`, `תִּקֵּן`, `כָּנָף`, `יוֹרֵשׁ`, `הֵיכָל`, `טוֹב`, `אָהַב`, `טֶבַח`, `שֹׁחַד`, `קָרָא` only for their licensing word; `בְּרִית`, the root שמר, `עוֹלָם`, `אֱלֹהִים`, `צֶדֶק`, `נָחָשׁ`, `מָשִׁיחַ` never. **Tag every Bible-key word in the apparatus.**
- ★ **Fix the Hebrew of every formula and refrain before drafting it** (renderings §2; the coordinator's `prophecy_tools.py shared` lists the repeated lines). Identical source = identical Hebrew; slight variation = equally slight variation. The script checks the formulas by regex.
- ★ **Grep the `>` lines of all earlier files before fixing a new Hebrew word** (§0.4).
- ★ **The rank-3 translation is the main source of false echoes.** Parpola's English (SAAo) and Foster's (eBL) are rank 3: read them only after your own reading, and check their tenses, lemmas and restorations against the transliteration and the normalization. Parpola's restorations in `[ ]` are often long and lean on the parallels: say in the apparatus when a parallel to the Bible stands on a restoration. Known traps: "righteous" (*kīnu* = `נֶאֱמָן` / "true"); "covenant" (*adê* = `אֲמָנָה`); "Palace of Succession" (*bēt rēdûti* = `בֵּית הַיְּרֻשָּׁה`); "faith" (*takālu* D: "I made you trust" = `הִבְטַחְתִּיךָ`); "have no fear" and "fear not" are one formula (`אַל תִּירָא`).
- ★ **Read the transliteration before believing any brief, including this one and the renderings.** Briefs say "look for", never "translate as". If a fixed rendering does not fit a line, say so in the entry and in your Proposals; do not silently deviate.
- ★ **Re-check the renderings table against your drafted lines before you hand off**: diff each row you used against its first drafted occurrence.

## 2. Grammar (Neo-Assyrian and Standard Babylonian)
- Guidelines §6.3 and the treaty corpus §3 (oath grammar, precative = jussive, *ay* + preterite = `אַל` + jussive).
- **NA specifics**: the subjunctive *-ni* / *-ūni* (not rendered; it marks a relative clause or an oath clause); the ventive *-am*, *-ni*, *-kku* (render when it means "to you / to me"); *mā* = `לֵאמֹר` before speech (not rendered inside one sentence); *issi*, *issu* "with, from"; *ina muhhi* "on, about, over"; *ina pān* "before"; *birti* "between"; *akī*, *kî* "like, as"; *lū* + stative/noun "may it be" or "be!"; *ša* + infinitive or noun "the one of …". The perfect (*-ta-*: *attaṣakka*, *aktašad*) = Hebrew past (completed); the present (*addan*, *anaṣṣar*) = Hebrew future (the oracle's promise) – keep the difference visible.
- **Gender**: the prophet speaks as the goddess (f.) or the god (m.): keep the gender of every verb and pronoun (`אָנֹכִי … אֶתֵּן`, `אָקוּם`); the queen mother is addressed in the feminine (SAA 9 1 v 13–20; 2 i 13′; 5). The king is often "you" (m. sg.).
- One line = one Hebrew line, with the base text's label; keep the break, the order of images, every repetition. A line that is only `[x x x]` gets `> […]`.
- Brackets (guidelines §6.8): `[ ]` restored (the root of the word is broken – check the transliteration, not the English); `[…]` lost; `…` untranslatable / unread; `( )` added; `?` uncertain reading; `*מילה*` uncertain translation; `⟨ ⟩` scribal omission.

## 3. The annotated file (guidelines §7.2)
Header (Hebrew): `# <title> – תרגום מוער`; paragraphs **נוסח הבסיס**, **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, one or two paragraphs that explain the text on its own terms (what it is, who spoke it, who wrote it down, when, for what), **מלים שמורות**, **שמות**. Then `---`, then sections `## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these; for SAA 9, one section per oracle, e.g. `## o.i.4'–o.i.29': 1.1 – "אל תירא, אסרחדון!" (מפי אשתר־לא־תשייט)`), then one entry per base line:

```markdown
### o.i.5'
`@`
> [אַל] תִּי[רָא]!
- **פירוק:** `lā tapallah` – *lā* "לא" (שלילת ציווי); *palāhu* "לירא" G הווה 2 זכר יחיד ("אל תירא"; *lā* + הווה = איסור).
- **תרגומים:** Parpola (SAAo): "fear [not]!" – כמונו.
- **הקבלה:** [equivalent] `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א) – …
- **הערות:** the line on its own terms (the image, the ritual, the social world, the wordplay) and the rendering decisions.
- **הערת שוליים:** (optional) one sentence for the clean translation (the major cruxes and key parallels; a few per hundred lines).
```
- The entry heading is the label exactly as `prophecy_tools.py data` prints it (`o.i.5'`, `r.7`, `b.e.9`, `1`…`55` for the Advice).
- A file with several units marks each with `<!-- unit: KEY -->` on its own line before the unit's first section (`annotated-04-11.rtl.md`).
- In the **פירוק**, parse every preserved word from the SAAo `norm:` (or the eBL normalization): lemma, stem, tense, person, suffixes, ventive, subjunctive, *-ma*; name every gated word's licence.
- **`הערות` matters as much as `הקבלה`** (guidelines §1): the goddess as mother and nurse, the prophets and their names, the court, the civil war of 681, the cult of Arbela, the rituals of SAA 9 3. Not every line needs a note; the ones that open the ancient mind do. Never force a parallel: **[absent]** and **[divergence]** are findings too.

## 4. Tools
`python3 -I -B prophecy_tools.py data UNIT [FROM [TO]]` (your lines with normalization, lemmas, rulings, and the rank-3 translation; for the Advice also the variant normalizations and the manuscripts' ATF), `fill`, `verify UNIT`, `shared`, `grep`, `lookup`. The clean translation is generated by the coordinator (`build`); never write `translation.rtl.md` by hand.

## 5. Before you finish
1. Three review passes over your lines (fidelity; consistency with `renderings.md` and the other files; Hebrew read aloud), each a separate read-through; record them in your notes file (point 3).
2. `python3 -I -B prophecy_tools.py verify <UNIT…>` clean for your units (notes about other units do not concern you); `python3 -I ../tools/check_bible_quotes.py <your file>` clean.
3. In **your own notes file** `notes-<UNIT(s)>.md` in your project folder (e.g. `1-נבואות-אשוריות/notes-S01.md`; never `project.md`, which the coordinator edits), under a heading `## <UNIT(s)> (<translator>)`: the **parallels index** `### Parallels index (<UNIT>)`, a table with exactly the columns `| Line | Source | Hebrew rendering | Bible | Tag | Comment |` (Line = the label; Bible = the vocalized verse(s) in backticks followed by the reference); your **key findings** (Bible; the ancient mind); **open decisions** (numbered); **Proposals for the corpus renderings** (with the Hebrew strings exactly as used, and the lines).
4. Do not edit the corpus files (`renderings.md`, `corpus.md`, the tool), the guidelines, or any other translator's file; the coordinator merges. Do not commit.
5. Final message to the coordinator: lines done, verify / quote-check status, the strongest findings, open decisions, deviations from the corpus renderings (with reasons), new words other translators will meet.
