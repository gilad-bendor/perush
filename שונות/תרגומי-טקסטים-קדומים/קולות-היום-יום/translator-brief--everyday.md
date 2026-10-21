# Translator brief: the everyday-voices corpus (love lyrics, proverbs, letters), 2026-10-21

The common brief for every translator of `קולות-היום-יום/` (Akkadian project 1; Sumerian projects 2–3). The coordinator's per-range prompt says which unit and lines are yours, and gives the Hebrew of every earlier line you repeat. Adapted from `../קינות-על-ערים/translator-brief--laments.md` and `../ספרות-החכמה-והצדיק-הסובל/translator-brief.md`.

## 0. Read first (binding, in this order)
1. `../translation-guidelines.md` — whole: §1 (**two purposes**), §5 (workflow and the lessons), §6 (principles; echo control §6.4; false friends §6.7), §6.8 (brackets), §7.2 (the annotated format).
2. `corpus.md`, then `renderings.md` (**all of it binds**; §3 the key terms and formulas, §4 echo control, §5 the reserved strings, §6 the traps).
3. Your project's `project.md` and `renderings.md`, and the files of your project already drafted (read them in full).
4. Before you fix any new Hebrew word: `python3 -I kol_tools.py lookup '<form or lemma>'` (how the earlier corpora rendered it) and `python3 -I kol_tools.py grep every '<Hebrew regex>'` (what that Hebrew word already renders).

## 1. Rules learned the hard way (the ★ rules of guidelines §5.2)
- ★ **Draft unvocalized, in plene spelling (כתיב מלא), from the first line.** Vocalize only names at their first occurrence in the file, ambiguous words, archaic forms, and the ★ words of renderings §1 and §6 at every occurrence (`אוּתוּ`, `אִינַנָּה`, `אוּר`, `אַן`, `אָנוּ`, `סִין`, `בָּאוּ`, `אֲרוּרוּ`, `דּוֹד` and its forms, `כַּלָּה`, `אָמָה`, `אֵלִי`). Never strip niqqud with a naive regex (it eats the maqaf: keep `[֑-ֽֿ-ׇ]`).
- ★ **Print every Bible verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show "שיר השירים" "ב ו"`), never quote from memory; quote exactly as `../../../תנך-מנוקד/` has it (Proverbs and Psalms keep the hyphen-minus `-` for maqaf); then run `check_bible_quotes.py` on your file and fix every mismatch.
- ★ **Reserve the Hebrew word of every key Bible comparison for its real counterpart** (renderings §5; the script checks it against the line's transliteration, normalization and lemmas). In this corpus the danger is the Song of Songs and Proverbs: their vocabulary is the natural Hebrew of the genre. Before you write `דּוֹד`, `אַהֲבָה`, `גַּן`, `תַּפּוּחַ`, `יוֹנָה`, `כַּלָּה`, `אָחוֹת`, `קוּמִי`, `לְכָה`, `בּוֹא`, `חִבֵּק`, `נָשַׁק`, `דְּבַשׁ`, `יַיִן`, `שֶׁמֶן`, `עֶרֶשׂ`, `מִשְׁכָּב`, `צְחוֹק`, `חָכְמָה`, `כְּסִיל`, `תּוֹעֵבָה`, `רֶשַׁע`, `טוֹב`, `שׁוּב` – check that the source has the licensing word. `שִׁיר`, `מָשָׁל`, `צֶדֶק`, `הֶבֶל`, `שׁוֹשַׁנָּה`, `לְבָנוֹן`, `מוֹר`, `לְבוֹנָה`, `פְּרִי` (Akkadian) never. **Tag every such word in the apparatus.**
- ★ **Fix the Hebrew of every formula and refrain before drafting it** (renderings §3; the letter formulas, `תּוֹעֲבַת DN`, `אֵין לוֹ חַג`; the repeated couplets of LAOS 4 10 and the shared lines of LAOS 4 04 and 16; proverbs 1.65–66 = 2.118–119). Identical source = identical Hebrew; slight variation = equally slight variation.
- ★ **Grep the `>` lines of all earlier files before fixing a new Hebrew word** (§0.4 above). Two source words in one Hebrew word, or one source word in two, are found only at review otherwise.
- ★ **The rank-3 translation is the main source of false echoes.** Wasserman's English (AkkLove) and ETCSL's are rank 3: read them only after your own reading of the line, and check their tenses, lemmas and restorations against the transliteration. Known traps: ETCSL "righteousness" (*niĝ₂-gen₆-na* "what is firm" → `נְכוֹנָה`), "It is urgent" (*a-ma-ru-kam* "it is a flood"), "abomination" (*niĝ₂-gig* "taboo" – here `תּוֹעֵבָה`, but tagged and noted), "fool", "wise", "garden", "beloved", "apple"; Wasserman's speaker labels (He:/She:/Chorus:) are his interpretation, not the tablet's.
- ★ **Read the transliteration before believing any brief, including the coordinator's.** Briefs say "look for", never "translate as".

## 2. Grammar
- Akkadian: guidelines §6.3 and renderings §2 (keep the gender of every address and suffix – it tells who speaks; keep the dual of the body; the ventive where it means "to me").
- Sumerian: renderings §2 (ḫamṭu past, marû participle/future, *ḫe₂-* jussive or affirmative, *ga-* cohortative, *na-* + marû = `אַל`, *nu-* = `לֹא`). In the **פירוק** parse every finite verb: the prefix chain, the base, the suffixes, and say where the morph comes from (ORACC `{…}` in `kol_tools.py data`, or **"ניתוח שלנו"**).
- One line = one Hebrew line, with the base text's label; keep the break, the order of images, the parallelism, every repetition.
- Brackets (guidelines §6.8): `[ ]` restored (the root of the word is broken); `[…]` lost; `…` untranslatable / unread; `( )` added; `?` uncertain reading; `*מילה*` uncertain translation; `⟨ ⟩` scribal omission. ETCSL's manuscript variants go in the apparatus.

## 3. The annotated file (guidelines §7.2)
Header (Hebrew): `# <title> – תרגום מוער`; paragraphs **נוסח הבסיס**, **פירוק**, **מספור**, **סימנים**, **תרגומים להשוואה**, **תגי הקבלה**, one or two paragraphs that explain the text on its own terms (what it is, who sang / wrote / taught it, when, for what), **מלים שמורות**, **שמות**. Then `---`, then sections `## <from>–<to>: <Hebrew heading>` (the clean translation takes its headings from these), then one entry per base line:

```markdown
### o.9
`[be-li] du-uš-šu-pu da-du-u₂-ka di-iš-pa i-še-⸢eb⸣-[bi ku-zu]-⸢ub⸣ ra-mi-ka`
> [אדוני], ממותקים דֹּדֶיךָ, דבש [שבעו עגבי] אהבתך;
- **פירוק:** … (every word; stem and tense; the source of the normalization)
- **תרגומים:** Wasserman (AkkLove): "…" – agreement / disagreement and why.
- **הקבלה:** [cognate] `כִּי טוֹבִים דֹּדֶיךָ מִיָּיִן` (שיר השירים א:ב) – …
- **הערות:** the line on its own terms (the image, the ritual, the social world, the wordplay) and the rendering decisions.
- **הערת שוליים:** (optional) one sentence for the clean translation (the major cruxes and key parallels; a few per hundred lines).
```
- The transliteration line may be written `` `@` ``; run `python3 -I kol_tools.py fill <file>` to fill it from the base text. It must equal the base line (the script checks).
- A file with several units marks each with `<!-- unit: KEY -->` before its first section (keys in `kol_tools.py units`).
- **`הערות` matters as much as `הקבלה`** (guidelines §1). Not every line needs a note; the ones that open the ancient mind do. Not every line has a parallel; never force one: **[absent]** and **[divergence]** are findings too.

## 4. Tools
`python3 -I kol_tools.py data UNIT [FROM [TO]]` (your lines with normalization, lemmas, morph, and the rank-3 translation), `fill`, `verify UNIT`, `grep`, `lookup`. The clean translation is generated by the coordinator (`build`); never write `translation.rtl.md` by hand.

## 5. Before you finish (each range)
1. Three review passes over your lines (fidelity; consistency with `renderings.md` and the earlier Hebrew; Hebrew read aloud), each a separate read-through; record them in `project.md` ("Progress").
2. `python3 -I kol_tools.py verify <UNIT>` clean for your lines; `python3 -I ../tools/check_bible_quotes.py <your file>` clean.
3. In `project.md`, under your range's heading: the **parallels index** `### Parallels index (<UNIT>)`, a table with exactly the columns `| Line | Source | Hebrew rendering | Bible | Tag | Comment |` (Line = the label; Bible = the vocalized verse(s) in backticks followed by the reference); your **key findings** (Bible; the ancient mind); **open decisions** (numbered); **Proposals for the corpus renderings** (with the Hebrew strings exactly as used).
4. Add your text-specific terms to the project's `renderings.md` (table: Source | Hebrew | Tag | Notes | Lines).
5. Do not edit the corpus files, the guidelines, or any other project; the coordinator merges. Do not commit.
6. Final message to the coordinator: lines done, verify / quote-check status, the strongest findings, open decisions, deviations from the corpus renderings (with reasons).
