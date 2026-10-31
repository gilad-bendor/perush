# מילים באבן – Northwest Semitic inscriptions with Torah contact (corpus)

Started 2026-10-31 (Round 5 run 4; world list Tier 1 #6; the Levant survey §2.0, §2.5–§2.7, §2.9, §2.11, §2.15).
"Words in stone": the inscriptions of Israel and its neighbours that touch the Torah's own words – a stone, a pithos,
a silver amulet, a potsherd, a limestone tablet.

## The two products (guidelines §6.7, settled 2026-10-22)
- **Hebrew and Moabite** (and Ammonite / Edomite when added): **no translation**. Each line gets the square-script
  transcription of the original, a **cautious vocalized reading** (our reconstruction of how its own words sounded,
  marked as a proposal) and the apparatus; a Hebrew gloss only in the **פירוק** bullet, where a word or form would
  mislead a modern reader. `stone_tools.py verify` checks that every reading has exactly the base's letters, in order,
  with the same letters inside `[ ]` (mode `reading`).
- **Phoenician / Punic and Aramaic**: a Hebrew **translation**, line by line, with the transcription beside it, under
  reserved-word gates (mode `translation`).

## Texts and status

| Key | Project / file | Text | Language | Lines | Base | Status |
|---|---|---|---|---|---|---|
| MS | `1-מצבת-מישע/` | The Mesha stele (KAI 181), c. 840 BCE | Moabite | 34 | Compston 1919 (PD) | first draft, independently reviewed |
| AJ | `2-ברכות-באבן-ובכסף/` (`annotated-ajrud`) | Kuntillet ʿAjrud pithos blessings 8.017, 8.021 (Davies), c. 800 BCE | Hebrew (Israelite) | 5 clauses | Merlo 1994 (open access, HAL) | first draft, reviewed |
| KH | `2-ברכות-באבן-ובכסף/` (`annotated-ketef-hinnom`) | Ketef Hinnom amulet II, c. 600 BCE | Hebrew (Judahite) | 12 | English Wikipedia (CC BY-SA), after Barkay et al. 2004 | first draft, reviewed |
| MH | `3-קול-הקוצר-ולוח-השנה/` (`annotated-mesad-hashavyahu`) | The Mesad Hashavyahu ostracon (KAI 200), c. 630 BCE | Hebrew (Judahite) | 14 | English Wikipedia (CC BY-SA), after Naveh 1960 | first draft, reviewed |
| GZ | `3-קול-הקוצר-ולוח-השנה/` (`annotated-gezer`) | The Gezer calendar (KAI 182), 10th c. BCE | Hebrew / "Canaanite" | 7 + margin | English Wikipedia (CC BY-SA) | first draft, reviewed |
| MT | `4-תעריף-הקורבנות/` (`annotated`) | The Marseille tariff (CIS I 165, KAI 69), 4th–3rd c. BCE | Punic | 21 | Cooke 1903 no. 42 (PD) | first draft, reviewed |
| CT | `4-תעריף-הקורבנות/` (`annotated-carthage`) | The Carthage tariff (CIS I 167, KAI 74), 4th–3rd c. BCE | Punic | 11 | Cooke 1903 no. 43 (PD) | first draft (self-reviewed; its Hebrew copies the reviewed MT) |

**Recorded, not done** (no open base text reachable on 2026-10-31; details and pointers in
`../sources/_records-only--Words-in-stone/README.md`): Tell Fekheriye (Aramaic side), the Sefire treaties, the Deir
ʿAllā Balaam text, Khirbet el-Qom, Ketef Hinnom I, the other ʿAjrud texts (the wall poem), the Punic *mlk* stelae.

## Reading order
1. Mesha (the Torah's Transjordan from the other side; *ḥerem*). 2. The blessings (Num 6:24–26; Deut 33:2; 16:21).
3. The reaper's plea and the calendar (Ex 22:25–26; Ex 23:16). 4. The Punic tariff (Lev 1–7).

## Key findings (for the commentary)
- **Mesha and the Torah's Transjordan:** Gad "dwelt in the land of Ataroth from of old" (10; Num 32:34), Nebo, Baal-meon,
  Dibon, Aroer, the *mslt* "highway" in the Arnon (26; Num 20:19) – the Torah's town lists from the other side; the
  *ḥerem* of Nebo "to Ashtar-Kemosh" (17) with the ordered list of men, boys, women, girls and *rḥmt* (Judg 5:30) – the
  closest extra-biblical use of the verb and the institution (Deut 2:34; Josh 6:21; Lev 27:28 [divergence]: the same
  institution, another god); the god angry with his land (5; Judg 2:14; 2 Kgs 17:18 – the same theology); "the vessels
  (or altar-hearths) of YHWH" dragged before Kemosh (18; 1 Sam 5:2) – the earliest extra-biblical YHWH, spelled as in
  the Bible; "Kemosh drove him out from before me" (19; Deut 33:27, same verb and preposition); `הראני בכל שנאי` (4;
  Ps 118:7, 59:11, same idiom); "Israel perished, perished for ever" (7) against Num 21:29–30 "you perished, Moab".
  Line 31: "house of David" (Lemaire, Langlois) or "Balak" (Finkelstein–Naʾaman–Römer 2019); Compston's 1919 letters
  are neither – recorded, not decided.
- **Num 6:24–26 outside the Torah:** the pair "bless and keep" in a wayfarer's greeting at ʿAjrud c. 800 (8.021c), and
  the blessing in a shorter form on a silver amulet for the grave c. 600 (KH 5–12), preceded by YHWH "the helper and
  the rebuker of evil" (Zech 3:2's `גער ב`): the priestly blessing as apotropaic text.
- **YHWH of Samaria / of Teman and "his asherah"** (8.017b, 8.021b): Deut 33:2 / Hab 3:3 (YHWH from Teman) as a fixed
  epithet; Deut 16:21 forbids what the blessing names; the blessing verbs are singular (the blesser is YHWH).
- **Ex 22:25–26 in a real case:** a reaper's garment taken, the witnesses, "truly I am innocent", the plea for mercy and
  return (MH); Amos 2:8, Deut 24:13, 17. The ostracon says `בגד`, not the Torah's `שַׂלְמָה` / `חבל`.
- **The agricultural year:** the Gezer calendar opens with `אסף` – Ex 23:16 `חַג הָאָסִף בְּצֵאת הַשָּׁנָה` – and ends with
  `קצ` (*qēṣ*, summer fruit), the pronunciation behind Amos 8:1–2's `קַיִץ` / `קֵץ` pun; `לקש` = Amos 7:1.
- **Lev 1–7 in Carthage:** the same order (cattle, flock, birds, meal-offerings), `כָּלִיל` as the main term (Lev 6:15–16,
  Deut 33:10), `שֶׁלֶם` (Amos 5:22), `בְּלִיל` (Lev 2:4 `בְּלוּלֹת`), `מַשְׂאֵת` (2 Chr 24:6), `אֲגוֹרָה` (1 Sam 2:36); the
  hide to the offerer, not the priest (Lev 7:8 [divergence]); the poor exempt from the priests' fee (Lev 5:7, 14:21:
  the Torah cheapens the offering, Carthage waives the fee); a priest who overcharges is fined by the state (1 Sam
  2:13–16); no `חַטָּאת`, no `אָשָׁם`, no breast and thigh, no atonement [absent]. **The Carthage tariff decides the hide the other way:**
  the skin goes to the priests, as in Lev 7:8 – two temples of one culture split on one item, and the Torah sides with
  one of them.

## For the ancient mind
Royal piety that is also massacre, told as gratitude; a god who is angry and then "returns" a town "in my days"; a king
proud of his cisterns and of ordering every house to cut one; a blessing at a desert way-station that names a goddess
(or a cult-pole) beside YHWH; an amulet taken into the grave against "the evil"; a labourer who cannot write, but
dictates his complaint, repeats it like a man telling a wrong, and asks for mercy; a schoolboy's song of the year's
work; a city that writes a consumer-protection law for its temple.

## Tools
`stone_tools.py` (`fill`, `verify [--strict]`, `build`, `translit`, `selftest`); config `TEXTS` in the script. The
parallels index is generated (`build`).
