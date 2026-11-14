# Part AN3 – the Epic of Anzû, OB II, OB III, NA (Sultantepe) (eBL L/1/10), Round 8 run 4, 2026-11-14

Translator A (resumed after AN1–AN2). Files: `annotated-OBII.rtl.md` (82), `annotated-OBIII.rtl.md` (35), `annotated-NA.rtl.md`
(67); Hebrew headers for all three.

## Progress and passes
- **All 184 entries drafted**; the whole epic (694 entries) is now drafted.
- The SB Hebrew is copied wherever the Akkadian is the same, as the apparatus notes say ("= SB …"). Examples: OB II.2 =
  SB I.b+81, OB II.5 = I.b+82, OB II.14 = I.b+95, OB II.24 = I.b+110, OB II.69 = SB II.17, OB II.73 = SB II.28,
  OB III.3 = SB II.38, OB III.12 = SB II.54, OB III.a+21–a+22 = SB II.111–112. Where a word differs, the Hebrew word
  differs, and the note says what the version keeps, changes or lacks ("~ SB …"). The overlap OB II.81–82 = OB III.1–2
  (two Susa tablets) has identical Hebrew.
- `python3 -I -B kings_tools.py verify AN --strict`: **694 entries; OK**. `check_bible_quotes.py` on the three files: **0 problems**.
- Three passes: fidelity (lemma and bracket per the one or two manuscripts), consistency with the SB strings, reading.

### Parallels index (AN3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| OBII.9 | *ilu mannum anzâm linēr-ma* | "מי האל – את אנזו יקטול, | `אֶת מִי אֶשְׁלַח וּמִי יֵלֶךְ לָנוּ` (ישעיהו ו:ח) | [equivalent] | OB *mannum* "who" against SB *ayyu* "which". |
| OBII.10 | *ina kullatim lušarbi šumšu* | ובכלל – אגדיל את שמו!" | `וַאֲגַדְּלָה שְׁמֶךָ` (בראשית יב:ב) | [equivalent] | In OB Anu promises in the first person, as in Gen 12:2; SB has the third person. |
| OBII.39 | *ningirsu gašram šūpâm narāmki* | את נִינְגִּירְסוּ, הכביר, המופיע, אהובך, | — | [absent] | The OB hero is Ningirsu of Lagaš; SB makes him Ninurta and keeps Ningirsu among his names (SB III.b+118). |
| NA.a+9 | *itti amurre išāt nable iqammûšunu* | עם רוח המערב – אש להבה שורפת אותם; | `וַתִּגְעַשׁ וַתִּרְעַשׁ הָאָרֶץ וּמוֹסְדֵי הָרִים יִרְגָּזוּ` (תהלים יח:ח) | [equivalent] | The four winds, each with a plague; storm theophany. |
| NA.a+20 | *ina hamuttē-ma* | בחיפזון | `וַאֲכַלְתֶּם אֹתוֹ בְּחִפָּזוֹן` (שמות יב:יא) | [equivalent] | Haste of departure (our proposal). |
| NA.a+35 | *gulgullātēšunu* | גולגולותיהם | — | [cognate] | *gulgullu* ~ גֻּלְגֹּלֶת. |
| NA.a+59 | *ana bussur tanadātīšu* | [ל]בשר את תהילותיו | — | [cognate] | *bussuru* ~ בִּשֵּׂר; *bussurtu* `בשורה` (a+41; SB II.18). |
| NA.a+63 | *ana mārīšu iktarab* | [את בנו ב]ירך | — | [cognate] | *karābu* ~ ברך: the father blesses the victorious son. |
| NA.a+65 | *ana arkât ūmē* | [לאחר]ית הימים | `אֵת אֲשֶׁר יִקְרָא אֶתְכֶם בְּאַחֲרִית הַיָּמִים` (בראשית מט:א) | [equivalent] | The guidelines' *ahrât ūmī* row. |

## Key findings
- **The ancient mind.** The epic changed its hero as theology moved. Ningirsu of Lagaš in the Susa tablets became
  Ninurta of Nippur in the SB, and the old name survives as one of the hero's names. The mother is "Mistress of
  designs" and names herself ("I, Mami", OB II.48). The OB adds curses in the mother's mouth (OB II.64–65: "let him
  wander in darkness") and a chariot ride (OB II.74). The Sultantepe tablet tells the victory as a cosmic storm: four
  winds, four plagues; the netherworld, the Apsû and the sea shake. It ends with good news (*bussurtu*), joy in Ekur,
  and the father's blessing.
- **Versions.** OB is shorter: it merges SB's couplets into one line, and the summons of Girra and Šara have no speech
  and no refusal. SB fills the repetitions out in full. The two OB tablets overlap by two lines.

## Open decisions
1. OB II.22 *iwwi*: eBL lemmatizes it *nawû* "to turn into desert". Rendered as *ewû* "become" (`היה לטיט`, = SB).
2. OB II.57, OB III.a+25 *rihiṣ*: eBL's *rahāṣu* II "to trust" is a slip. Rendered as *rahāṣu* I `שְׁטֹף`.
3. Hebrew chosen here for the NA tablet's own rare words (only there): *ešâtu* `שיבושים`, *dalihtu* `עכר`, *tarīku*
   `*הבהוב*`, *šuqallulu* `*תליתי*`, *gabarû* `מקביל`. Two of these rest on uncertain readings and are in italics.
4. *elēnû* "upper" = `עִלִּי`, because `עֶלְיוֹן` is never allowed (NA.a+36).

## Proposals for the corpus renderings
- OB speech formula without *iqabbi*: `אָנוּ פתח את פיו,` / `דיבר אל האלים, בניו:` (OB II.7–8). This is the OB
  Gilgameš and Etana usage.
- *šākin ṭēmim* (OB title of Anu) = `שָׂם־הַטַּעַם` (OB II.11, 26, 28; SB's `שָׂם טַעַם` as a construct).
- New terms: *ṣamādu* `צִמֵּד` [cognate]; *narkabtu* `מֶרְכָּבָה`, *rakābu* `רָכַב` [cognate]; *qitrudu* `עַז`
  (`עז־המערכה`); *gapāšu* `הִתְנַשֵּׂא`; *arratu* `מְאֵרָה`; *tādirtu* `קַדְרוּת`; *diglu* `רְאִיָּה`; *sahāhu* D `הִבְעִית`;
  *šipirtu* `שְׁלִיחוּת`; *šagāmu* `שָׁאַג`; *šêtu* `הִשְׁאִיר`; *ekēlu* `חָשַׁךְ`, *daʾāmu* `קָדַר`; *dāʾišu* `דָּשׁ`; *etellūtu*
  `שְׂרָרָה`; *uṣurtu* `צוּרָה`; *tibûtu* `הַתְקָפָה`; *ṣālūtu* `מְרִיבָה`; *rādu* `שֶׁטֶף־גֶּשֶׁם`; *nablu* `לֶהָבָה`; *qamû* `שָׂרַף`;
  *habābu* `רָחַשׁ`; *hamuttu* `חִפָּזוֹן`; *ezzu* `זוֹעֵם`; *sahāpu* `עָטַף`; *eṭû* `אָפַל`; *parādu* `נִבְהַל`; *gulgullu*
  `גֻּלְגֹּלֶת`; *apkallu* `חָכָם`; *pāštu* `גַּרְזֶן`; *bussuru* `בִּשֵּׂר`; *karābu* `בֵּרֵךְ`; *arallû* `אֲרַלּוּ`
  (transliterated); Asakku `אַסַכּוּ`; Ninlil `נִינְלִיל`; Ningišzida `נִינְגִּישְׁזִידָה`.
