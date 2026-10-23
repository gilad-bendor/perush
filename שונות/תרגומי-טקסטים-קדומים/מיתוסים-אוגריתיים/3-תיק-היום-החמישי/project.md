# Project: the fifth-day dossier (Gen 1:20–23)

Round 4, run 1 (`../../curated-translation-candidates--world.md` §5A: "Short excerpts, each translated from its own
language, set side by side … keyed to the unit being written now"). Translated by the run's coordinator. The Ugaritic
passages of the dossier (KTU 1.3 III 38–46, 1.5 I 1–8, 1.6 VI 44–53, 1.82, 1.83, 1.23:58–64) are translated in the
corpus's projects 1–2 and are referred to, not repeated, here.

## Scope and base texts (each in its original language)

| KEY | Text | Language | Base text (in `../../sources/`) | Licence | Lines |
|---|---|---|---|---|---|
| MK | The Instruction for Merikare, E 130–136 (pPetersburg 1116A verso, 18th dyn.): mankind, "the flock of god"; heaven and earth made for them; "the greed of the water" driven off; breath for their noses; "his images"; plants, flocks, **fowl and fish** made to feed them | Middle Egyptian | `AED-TEI/Merikare--pPetersburg-1116A/` (TLA snapshot 2018, lemmatized transliteration) | CC BY-SA 4.0 | 7 |
| TH | Hesiod, Theogony 237–239, 270, 295–300, 333–336, 820–828: Keto, daughter of the Sea, and her monstrous brood; Echidna; the serpent of the golden apples; Typhoeus with a hundred serpent heads | Greek | `Perseus--Hesiod/` (Evelyn-White 1914) | PD text, CC BY-SA markup | 23 |
| IL | The Illuyanka myth (CTH 321), version 1, KBo 3.7 i 9–20: the serpent defeats the storm god; Inara's feast | Hittite | `TLHdig/CTH-321/KBo 3.7.xml` (TLHdig 0.3) | CC BY 4.0 | 12 |
| RV | Rigveda 1.32.1, 2, 4, 5, 8, 11: Indra slays the serpent (Vr̥tra) and frees the waters | Vedic Sanskrit | `VedaWeb/rv_1.032--zurich.tsv` (the Zurich text and morphology) | CC BY 4.0 | 24 |
| HY | Hymiskviða 22–24 (Codex Regius, c. 1270): Thor hooks the World Serpent, "the girdle of all lands" | Old Norse | `Bugge-1867--Saemundar-Edda/hymis.html` | PD | 22 |
| KJ | Kojiki (712), Book 1: the eight-headed serpent Yamata-no-Orochi, made drunk and cut up; the river runs blood | Old Japanese in kanbun | `Wikisource-zh--Kojiki/kojiki-jokan.html` (Shinpukuji tradition) | PD text (CC BY-SA page) | 12 |

**Not done from the original, and why** (world list §5A):
- *Ḫedammu* (Hurro-Hittite, CTH 348): very fragmentary; a composite would have to be built from TLHdig's manuscripts – a
  task for the Hittite run (Round 4 run 6).
- *The Deir ʿAllā bird list*: no open edition (Hoftijzer & van der Kooij 1976 ©; DEAPS has no record yet).
- *The Apophis spells; the Westcar crocodile* (Egyptian): left to the Egyptian run (Round 4 run 3), which secures AED-TEI
  in full.
- *Anaximander's first humans inside fish*: only indirect testimonia (Censorinus in Latin, ps.-Plutarch in Greek); a
  candidate for a later "Greek beginnings" dossier.
- *The Avestan Aži Dahāka, Gandarəβa*: Young Avestan, high risk; with the Vedic/Avestan project.
- *The Shanhaijing's birds and fish*: ctext.org forbids scraping; zh.wikisource would serve – a later addition.
- *The Kumulipo's births; the Māori Ika-tere*: the 1889 / 1854 texts are public domain but no clean digital text was
  reachable today (Ulukau and NZETC block scripts).
- *The Inuit Sea Woman*: no text in the original language (only Rasmussen's and Boas's English and Danish).
- *The Ngaju Dayak hornbill and water-snake*: Schärer's material is German with Ngaju phrases (CC BY-NC); no tools.
- *Palenque Temple XIX*: Classic Maya hieroglyphic; not readable with control here.
- *The Russian Dove Book* (the earth on a whale): a 17th–19th-century reception of Gen 1–2 rather than an old tradition;
  ru.wikisource answered 429 to scripts today.

## Method

- One file per excerpt, `annotated-<KEY>.rtl.md`, in the corpus format (guidelines §7.2): the base line (`@` +
  `python3 -I -B dossier_tools.py fill`), one Hebrew line, פירוק (from the source's own lemmatization where it has one:
  AED, VedaWeb, TLHdig), תרגומים (formed after the reading; AED's German only after drafting: `data MK --tr`), הקבלה,
  הערות. `translation.rtl.md` is built from `translation--head.rtl.md` + `translation--intro-<KEY>.rtl.md` + the `>`
  lines (`dossier_tools.py build`), and verified.
- Renderings: `../renderings.md` §11 (the comparison word `נָחָשׁ`; the never-words; names).
- **What the dossier can show** (world list §5A): that Gen 1:21's *created* `תַּנִּינִם` stand alone against a world where the
  sea monster is a rival (Ugarit, Hatti, India, the North), a parent (Hesiod's Keto, the Egyptian waters' greed), or a
  slain body (Japan). The parallels are typological (no contact) except for Ugarit, Egypt and Hatti (contact cultures),
  and the Greek of the LXX (the translators' own vocabulary).

## Progress log

- 2026-10-23: base texts secured (AED-TEI Merikare files; Perseus Theogony; VedaWeb 1.32 (Zurich layer only committed);
  TLHdig CTH 321; Bugge 1867; zh.wikisource Kojiki 上卷); `dossier_tools.py` written; renderings §11.

## Parallels index
