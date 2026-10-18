# Project: the Middle Assyrian Laws, Tablet A (§1–§59 and colophon) → Hebrew

Corpus: `../corpus.md` (law and treaty), project 4. Read `../../translation-guidelines.md`, `../corpus.md`, `../renderings.md` (**§5 and §6** are binding: §6.2 is this project's), the Laws of Hammurabi's fixed formulas (`../2-חוקי-חמורבי/renderings.md` §1, §2, §4) and the Laws of Eshnunna's Part T1 (`../3-חוקי-אשנונה/project.md`) first.

## Scope
- **MAL A = KAV 1 (VAT 10000)**, Aššur: the whole tablet, **828 lines** (obv. i–iv, rev. v–viii), laws **§1–§59** and the colophon (r viii 64–65: month Ša-sarrāte, day 2, eponym Saggiu; 11th c. BCE, Tiglath-pileser I; the laws themselves are older, probably 14th c.).
- Middle Assyrian Akkadian. The collection is about **women**: theft by a wife, blasphemy, assault, sexual offences (in the city, in the field, in the tavern), slander, abortion, marriage and bride-gifts, widows, the levirate-type marriages, veiling, sorcery, pledges, the husband's punishments.

## Base edition and sources
- **Rank 1:** ORACC **tcma/laws P281779** (de Ridder 2021): transliteration, the project's normalization of every word (`norm`), lemmas (`../../sources/ORACC/tcma-laws--P281779--Middle-Assyrian-Laws-A/`, README; CC BY-SA 3.0 / CC0).
- **Rank 2:** CDA (eBL API, per word), CAD (per word), ORACC lemmas (check them), the LH and LE Hebrew (`python3 -I ../laws_lookup.py`).
- **Rank 3 (after our own reading):** de Ridder's English (one paragraph per law; printed at the end of each § in the data files; a loose paraphrase with slips).
- **Not obtained** (record): Driver & Miles 1935; Cardascia 1969; Roth 1997; Lafont 1999; Otto 1993/2011; Stol 2016; Pressler 1993; Hirata 2015; the TheTorah.com article on the unbetrothed virgin. Parallels from this literature are cited **from memory** and marked so; ours are "הצעה שלנו".

## Line numbering
- **Tablet lines** as in ORACC: `o i 1` … `o iv 108`, `r v 1` … `r viii 65` (entries `### o i 1`).
- **Laws** §1–§59 (Driver & Miles / Cardascia / Roth; the 60 translation units map onto §1–§59 + colophon: `laws_config.py`): `## §55 (r viii 6–r viii 41): heading`. Cite as "MAL A §55 (r viii 6–41)".

## Annotated files (laws_config.files('MAL'))
| File | Laws | Lines |
|---|---|---|
| `annotated-1--laws-1-24.rtl.md` | §1–§24 | o i 1 – o iii 81 (296) |
| `annotated-2--laws-25-40.rtl.md` | §25–§40 | o iii 82 – r v 106 (241) |
| `annotated-3--laws-41-59.rtl.md` | §41–§59, colophon | r vi 1 – r viii 65 (291) |

## Parallels with the Bible to watch for (preliminary; each translator checks them)
- **Deut 25:11–12 ↔ §8** (a woman crushes a man's testicle in a fight: her finger cut off; *iškā* ~ `אָשֶׁךְ`, Lev 21:20) and **§7** (a woman lays a hand on a man).
- **Deut 22:22–27 ↔ §12–16, §23** (a man's wife seized in the street: "she does not consent, she guards herself"; caught "on top of the woman" or proven by witnesses; the man killed, "the woman has no *ḫīṭu*" ↔ `אֵין לַנַּעֲרָ חֵטְא מָוֶת`, 22:26; both killed if she went to him knowingly ↔ 22:22; in the tavern or the street, knowing / not knowing; the husband's choice of punishment for both ↔ the Torah's fixed death penalty).
- **Deut 22:28–29; Exod 22:15–16 ↔ §55–56** (the *batultu* (`בְּתוּלָה`) not betrothed, seized "in the city or in the open country (*ṣēru*, ↔ `בַּשָּׂדֶה`, 22:25, 27), at night, in the square, in the granary, at a festival": the rapist's **wife** given to be raped (vicarious punishment ↔ Deut 24:16; contrast 22:29), the rapist marries the virgin, "triple silver, the price of a virgin" ↔ `כְּמֹהַר הַבְּתוּלֹת`, `חֲמִשִּׁים כָּסֶף`; "he may not divorce her" ↔ `לֹא יוּכַל שַׁלְּחָהּ כָּל יָמָיו`; §56 if she gave herself).
- **Deut 22:13–21 ↔ §17–19** (slander: "everyone has sex with your wife"; the accuser who cannot prove it: 40 / 50 blows, a month of the king's work, shaving, a talent of lead ↔ `וְיִסְּרוּ אֹתוֹ וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף`) and **Deut 25:1–3** (the counted blows: 40, 50 "with rods" ↔ `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף`); **§20** (male intercourse ↔ Lev 18:22, 20:13); **§17, §22, §24, §25** the river ordeal (↔ Num 5:11–31).
- **§2** "that woman shall bear her guilt" (*aranša tanašši*, LH F37 `את עונה תשא`) ↔ `וְהָאִשָּׁה הַהִוא תִּשָּׂא אֶת עֲוֹנָהּ` (במדבר ה:לא).
- **Exod 21:22–25 ↔ §21, §50–53** (striking a pregnant woman: lead, blows, a month's work; "a life for a life" (*napšāte umalla*) when she dies or the foetus is male; §53 the woman who aborts herself impaled and unburied).
- **Deut 25:5–10; Gen 38 ↔ §30, §31, §33, §43** (the father gives his dead son's wife to another son; the widow given to the father-in-law; *aḫuzzatu*): **no *yābimu* term** – say so (`יבם` is reserved).
- **Gen 24:65; 38:14–15, 21 ↔ §40–41** (who must be veiled in the street: wives, daughters, widows; the *qadiltu* (`קְדֵשָׁה`) married / not married; the *ḫarimtu* (`זוֹנָה`) and the slave-girl must not veil; the man who sees a veiled prostitute and does not bring her to the palace); **§41** the concubine veiled before witnesses ("she is his wife").
- **Exod 22:17; Deut 18:10 ↔ §47** (*kišpū*, `כְּשָׁפִים`: "they shall kill the man or woman who performed sorcery").
- **Deut 24:1–4 ↔ §36–37, §45** (the absent husband; divorce "if he wishes, he gives her something; if not, she goes out empty" ↔ `וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם`/ 21:11 `וְיָצְאָה חִנָּם אֵין כָּסֶף`; the captive's wife waits two years ↔ LE §29, LH §133–136).
- **Deut 24:10–13; Exod 21:7 ↔ §39, §44, §48** (the debtor's daughter, pledges).
- **Deut 21:15–17, Num 27 ↔ §25–29** (inheritance, gifts); **Lev 20:10 ↔ §13–15**; **Exod 21:15 ↔ none**; **Deut 22:5 ↔ none**.

## Decisions (coordinator, before drafting)
1. **LH's and LE's Hebrew binds every shared formula** (`../laws_verify.py MAL`): *šumma aʾīlu* `אם איש`; *aššat aʾīle* `אשת איש`; *mutu* `בעל` (`בעלה`); *idukkū* `יהרגו`; *iddan* `יתן`; *ilaqqe* `יקח`; *maḫāṣu* `מחץ`; *ḫaṭṭu* `שבט` (LH); *arnu* `עון`, *aranša tanašši* `את עונה תשא` (LH F37); *Id* (the River) `הנהר` (LH F33); *kišpū* `כשפים`; *almattu* `אלמנה`; *nakāsu* `קצץ` (LH); *bâru* D `ברר`, *kunnu* `כונן` (LH F20); *šīmu* `מחיר`; *emu* `חם`; *kallatu* `כלה`; *ṣabātu* `תפש`; *naṣāru* `נצר`.
2. **This project's shared terms**: corpus renderings §6.2 (fixed after the LE run).
3. **Reserved** (`laws_verify.py`): the LH list + corpus §6 (`יבם`, `מאורשה`, `ארוסה`, `ענה`, `נבלה`, `הכה`/`יכה`/`יכנו`, `נאף` …); gated: `בתולה` (*batultu*), `צעק` (*šasû*), `זונה` (*ḫarimtu*), `קדשה` (*qadiltu*).

## Plan (sequential translators)
| Run | Content | File |
|---|---|---|
| T2 | §1–§24 | 1 |
| T3 | §25–§40 | 2 |
| T4 | §41–§59, colophon; translation | 3 |

## Status
Not started (2026-10-18).
