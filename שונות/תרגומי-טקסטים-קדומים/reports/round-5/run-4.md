# Round 5, run 4 – "Words in stone" (report)

Session `session_01UnH1L5tKoJN9Ro9t8Ak2NK`, branch `translation-round-5-run-4`, 2026-10-31, range A (one agent at a time).

## Done
A new corpus, **`מילים-באבן/`** ("Words in stone"), 7 texts, **113 entries**, all first drafts, verified by script.
Six were independently reviewed; the seventh (the Carthage tariff) copies their reviewed Hebrew.

| Key | Text | Language / product | Entries | Base |
|---|---|---|---|---|
| MS | The Mesha stele (KAI 181) | Moabite / reading | 34 | Compston 1919 (PD, en.wikisource) |
| AJ | Kuntillet ʿAjrud, the pithos blessings 8.017 and 8.021 | Hebrew (Israelite) / reading | 5 clauses | Merlo 1994 (open access, HAL) |
| KH | Ketef Hinnom, amulet II | Hebrew (Judahite) / reading | 12 | English Wikipedia (CC BY-SA), after Barkay et al. 2004 |
| MH | The Mesad Hashavyahu ostracon (KAI 200) | Hebrew / reading | 14 | English Wikipedia (CC BY-SA), after Naveh 1960 |
| GZ | The Gezer calendar (KAI 182) | Hebrew / reading | 8 | English Wikipedia (CC BY-SA) |
| MT | The Marseille tariff (CIS I 165) | Punic / translation | 21 | Cooke 1903 no. 42 (PD; read from the page images) |
| CT | The Carthage tariff (CIS I 167) | Punic / translation | 11 | Cooke 1903 no. 43 (PD; page images) |

The two products follow guidelines §6.7 (2026-10-22):
- **Hebrew and Moabite get a reading, not a translation.** Each line has the square-script transcription, a cautious
  vocalized reading in the inscription's own forms, and the apparatus.
- **Punic is translated.**

Files:
- `מילים-באבן/`: `corpus.md`, `renderings.md`, `translator-brief--inscriptions.md`, `stone_tools.py` and
  `parallels-index.md` (72 rows).
- Four projects: `1-מצבת-מישע/`, `2-ברכות-באבן-ובכסף/`, `3-קול-הקוצר-ולוח-השנה/`, `4-תעריף-הקורבנות/`. Each has a
  `project.md`, annotated files, intros and clean translation files.
- Print stubs in `הדפסה/מילים-באבן/`.
- Source folders: `Compston-1919--Mesha-Stele`, `Cooke-1903--North-Semitic-Inscriptions`,
  `Wikipedia--Hebrew-inscriptions`, `Merlo-1994--Kuntillet-Ajrud`, `Finkelstein-Naaman-Roemer-2019--Mesha-line-31`
  and `_records-only--Words-in-stone`.

## Verification
- **`stone_tools.py verify --strict`** (all 7 keys): **0 problems**.
  - Every reading has exactly the base's letters, in order, with the same letters inside `[ ]`.
  - In the Punic lines, the reserved words, traps and numerals pass.
  - Every clean file equals the build of its annotated file.
  - Two expected notes: the brackets in MT 9–10 are unbalanced because the restoration runs across the line break.
- **`stone_tools.py selftest`**: 11 checks, 0 failures.
- **`tools/check_bible_quotes.py` over all 937 `.md` files of the folder** outside `sources/`, the shared files
  included: **0 problems**.
  - In the corpus there are about 110 checked quotations.
  - Every verse was printed with `--show` before it was quoted.
- **Independent fidelity and echo review** (one Opus sub-agent, after my three self-review passes): **27 fixes**.
  - Per text: MS 8, AJ 3, KH 2, MH 3, GZ 5, MT 6.
  - Kinds of fix: vowels that contradicted their own gloss (Mesha 5 `וַיְעַנֵּו`; Gezer `יַרְחָו`); a gloss built on the
    wrong root (Mesha 21, `לִסְפֹּת` from יסף, not ספח); words left unvocalized as uncertain (Mesha 4, 30; Gezer 5); a
    `[cognate]` that was not one (Ps 118:7 is Qal); an `[absent]` that was an `[equivalent]`; one Punic word with two
    Hebrew renderings; a remembered verse.
  - Each fix carries a `(תיקון סוקר: …)` note.
- **The Carthage tariff** had three self-review passes only. Its Hebrew is the reviewed Marseille Hebrew, copied.
- **`tools/sources_sync.py fetch`** (started first thing) restored the work tier. Its known failures are older items:
  `web.archive.org` copies, oracc. None of them concerns this run.

## Key findings
**For the Bible** (the full list is in `מילים-באבן/corpus.md` and `parallels-index.md`):
- **Mesha and the Torah's Transjordan.**
  - "The men of Gad had dwelt in the land of Ataroth from of old" (10): Num 32:34, and the only extra-biblical mention
    of an Israelite tribe.
  - Nebo, Baal-meon, Dibon, Aroer and the `מסלת` in the Arnon (Num 20:19, 21:13): the Torah's town lists, seen from
    the other side.
  - The *ḥerem* of Nebo "to Ashtar-Kemosh", with the ordered list of men, boys, women, girls and `רחמת` (Judg 5:30).
    This is the closest extra-biblical use of the verb and the institution (Deut 2:34; Josh 6:21): the same
    institution, another god (Lev 27:28).
  - Kemosh "angry with his land" (5): the theology of Judg 2:14 and 2 Kgs 17:18 in the same root, אנף.
  - The objects of YHWH dragged before Kemosh (18; cf. 1 Sam 5:2, Ezra 1:7). This is the earliest extra-biblical
    YHWH, spelled as in the Bible.
  - "Kemosh drove him out from before me" (19): Deut 33:27, the same verb, stem and preposition.
  - `הראני בכל שנאי` (4): Ps 59:11.
  - "Israel perished, perished for ever" (7) against "you perished, people of Kemosh" (Num 21:29).
  - Line 31 is recorded, not decided: "house of David" (Lemaire, Langlois) or "Balak" (Finkelstein, Naʾaman and Römer
    2019). Compston's 1919 letters there are neither.
- **Num 6:24–26 outside the Torah.**
  - The pair "bless and keep" appears in a wayfarer's greeting at ʿAjrud, c. 800 (8.021c).
  - A shorter form of the priestly blessing (with no "and be gracious to you" and no "lift up his face") appears on a
    silver amulet for the grave, c. 600. It is preceded by YHWH "the helper and the rebuker of evil" (the `גער ב` of
    Zech 3:2): the priestly blessing as an apotropaic text.
- **"YHWH of Samaria / of Teman and his asherah."**
  - Teman is Hab 3:3's and Deut 33:2's southern YHWH, here a fixed epithet.
  - Deut 16:21 forbids what the blessing names.
  - The blessing verbs are singular: the blesser is YHWH.
- **Ex 22:25–26 in a real case** (Mesad Hashavyahu).
  - A reaper's garment is taken. He has witnesses, says "truly, I am innocent of guilt", and pleads for mercy and for
    its return (Amos 2:8; Deut 24:13, 17).
  - The ostracon says `בגד`, not the Torah's `שַׂלְמָה` / `חבל`.
- **The agricultural year** (Gezer).
  - The calendar opens with `אסף`, as Ex 23:16 has `בְּצֵאת הַשָּׁנָה`.
  - It has `לקש` (Amos 7:1).
  - It ends with `קצ` (*qēṣ*), the contracted pronunciation behind Amos 8:1–2's `קַיִץ` / `קֵץ` pun.
- **Lev 1–7 in two Punic temples.**
  - The same order of offerings: cattle, flock, birds, meal-offering.
  - Shared terms: `כָּלִיל` as the main term (Lev 6:15–16; Deut 33:10), `שֶׁלֶם` (Amos 5:22), `בְּלִיל` (Lev 2:4),
    `מַשְׂאֵת` (2 Chr 24:6), `אֲגוֹרָה` (1 Sam 2:36).
  - **The hide:** it goes to the offerer at Marseille and to the priests at Carthage, as in Lev 7:8. Two temples of
    one culture split on one item, and the Torah sides with one of them.
  - **The poor man:** he is exempt from the priests' fee. The Torah instead cheapens his offering (Lev 5:7, 14:21).
  - **The priests:** a priest who overcharges is fined by the state (cf. 1 Sam 2:13–16).
  - **Absent:** no `חַטָּאת`, no `אָשָׁם`, no breast and thigh, no atonement.

**For the ancient mind:**
- Royal piety that is also massacre, told as gratitude.
- A god who is angry, then "returns" a town "in my days".
- A king proud of his cisterns, who orders every house to cut one.
- A greeting at a desert way-station that names YHWH's asherah.
- A silver amulet taken into the grave against "the evil".
- A labourer who cannot write but dictates his complaint, repeats the wrong as one tells it aloud, and asks for mercy.
- A schoolboy's song of the year's work.
- Two cities that wrote what is in effect a consumer-protection law for their temples.

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- **The corpus.** Its name is `מילים-באבן` (the run's title). It has four projects grouped by genre (royal stele;
  blessings; letters and lists; tariffs). The base files are TSVs in square script without final letter forms, and
  the Latin transliteration is generated from them.
- **Bases from Wikipedia.** Wikipedia's CC BY-SA transcriptions are accepted as open bases for three modern finds
  (MH, KH2, GZ), with attribution and a cross-check in the apparatus. See the questions below.
- **Bases from page images.** Compston 1919 is used as on Wikisource, with its bracket slips fixed against
  Compston's own translation (listed in the source README). Cooke's tariffs were read from the page images. Donner
  and Röllig (KAI) were not used, and Wikipedia's KAI-based tariff transliteration was used for line division only.
- **Conventions of the readings** (`renderings.md` §2):
  - Moabite is vocalized as Moabite (‑īn, ‑ō(h), `אָנֹךְ`, `שָׁת`).
  - Uncertain words stay unvocalized.
  - The Name is never vocalized.
  - Glosses appear only in the apparatus.
- **The Punic renderings** (`renderings.md` §4):
  - The cognates are reserved for their Punic words.
  - `ʾlp` = `בָּקָר`, as Ugaritic *alp*.
  - `ʾyl` = `אַיָּל` (Cooke's "hart"), since the tariff has `ybl` = `יוֹבֵל` for the ram.
  - Leviticus's words that the tariffs lack are never used in a line.
  - The unknown terms are transliterated in italics.
- **Pre-set for the Aramaic texts to come** (`renderings.md` §5): *ṣlm* `צֶלֶם` and *dmwt* `דְּמוּת`.
- **The Carthage tariff was added**, beyond the minimum: it is in the plan ("the Punic sacrificial tariffs") and was
  cheap. It became key `CT`, and the clean file of project 4 combines both tariffs.

## Questions for the user
1. **Persée.** The editions of **Tell Fekheriye** (CRAI 1981; Syria 1983), **Sefire** (Dupont-Sommer and Starcky 1960;
   CRAI 1957) and **Deir ʿAllā** (Caquot and Lemaire, Syria 1977) are free to read on Persée, but the server refuses
   scripted PDF downloads (403). Would you save these PDFs in a browser into `sources/`? Then a later run can do
   Fekheriye (*ṣlm* / *dmwt*, Gen 1:26) and the others. The exact URLs are in
   `sources/_records-only--Words-in-stone/README.md`.
2. **Wikipedia as a base text.** Is a Wikipedia (CC BY-SA) transcription of a modern find an acceptable open base?
   This run accepted it for Mesad Hashavyahu, Ketef Hinnom II and Gezer, on the view that a transcription of an
   ancient text, openly licensed, is not "transcribing from a © book". If not, those three texts become records-only.
3. **`ʿdy` in Sefire.** When Sefire is done, should *ʿdy* be `עֲדֵי` (cognate, with `עֵדֹת` debated), or should it
   follow the law corpus's *adê* = `אֲמָנָה`? This is a cross-corpus split for the lead.

## Problems and skipped items
- **No quota stop.** Every gate said GO (range A, 5-hour status `allowed`).
- **Recorded, not done:** Tell Fekheriye, Sefire, Deir ʿAllā, Khirbet el-Qom, Ketef Hinnom I and the ʿAjrud wall poem
  have no open base reachable by script. Langlois 2019's RTI readings of Mesha were also not reachable.
  - The Zenodo records named "Tell Fekheriyeh Inscription" and "Balaam inscription" are Database of Religious History
    entries without the text.
  - Persée answered 403 to PDF requests, then 500. I did not try to work around it.
  - Hungaricana (el-Qom) answered 403.
- **Weak points in the bases.**
  - Mesha follows Compston (pre-RTI). The modern readings are discussed, not adopted.
  - ʿAjrud has no line division in the open source (we divided by clause).
  - The Carthage tariff is about half Cooke's restoration from Marseille.
- **Process lesson.** The whole draft was first written with "Book ch:v `quote`", a form the checker does not read.
  The 98 quotations were converted by script and then checked. A lesson was added to guidelines §5.2.
- **Not independently reviewed:** the Carthage tariff (CT).

## Cross-corpus splits left for the lead
- **The treaty term.** *ʿdy* (Aramaic, Sefire, still to come) against *adê* `אֲמָנָה` (EST).
- **The god / gods.** Punic `ʾlm` = `הָאֵלִים`, following Ugaritic *ilm*. Phoenician may mean a singular "god" there.
- **Ox / cattle.** Punic `ʾlp` = `בָּקָר` follows Ugaritic *alp*. That is consistent, but Hebrew `אֲלָפִים` "cattle"
  (Ps 8:8) is a cognate that both corpora leave in the apparatus.
- **Echo tags on proper names.** The Mesha apparatus tags the same place sometimes `[equivalent]`, sometimes
  `[cognate]`. A corpus-wide rule is needed for names, for example `[cognate]` when the name is the same word.
