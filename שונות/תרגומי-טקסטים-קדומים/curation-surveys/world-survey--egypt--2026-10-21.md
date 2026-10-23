# World survey – Ancient Egypt (Old, Middle, Late Egyptian, Demotic; Coptic and Meroitic in brief): ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Legend: **verified** = fetched today (2026-10-21) from this session and the expected content seen; **reported** = from search results or my own knowledge, not fetched. Bible benefit and Soul benefit are each rated HIGH / MED-HIGH / MEDIUM / LOW.
Working data (downloads, scripts) is in the session scratchpad `…/scratchpad/world/egypt/` (subfolders `aed/`, `hf/`, `mjn/`, `scripts/`). Nothing was committed.
**Search caveat:** the shared web-search budget ran out part-way through this survey. Items that I could not re-check by search are marked "reported" or "verify". Direct fetches of known hosts and catalogue APIs (archive.org, ZORA, Zenodo, Hugging Face, Ramses) went on working, and they are the basis of the "verified" claims.

---

## 0. Key findings

1. **The biggest access fact: an open, lemmatized base text for about 11,400 Egyptian texts already exists.** It is *AED-TEI* (S. D. Schweitzer, 2019), a TEI conversion of the official **TLA database snapshot of January 2018**. It is licensed **CC BY-SA 4.0**, on GitHub (raw files) and as a 177 MB Zenodo zip (DOI 10.5281/zenodo.3580939) (**verified**).
   - Each text has four files: the transliteration with lemma IDs, morphology, damage markup and line numbers; the German sentence translations; German word glosses in context; and the hieroglyphs.
   - It holds nearly all the classic literature: Sinuhe, the Shipwrecked Sailor, the Eloquent Peasant, the Man and his Ba, Westcar, Ptahhotep, Kagemni, Merikare, Amenemhat, Neferti, Ipuwer, Khakheperreseneb, the Satire of Trades, Any, **Amenemope (complete, 551 lines)**, the Two Brothers, Horus and Seth, Wenamun, Truth and Falsehood, Astarte and the Sea, the love songs, the Harper's Songs and the **Book of the Heavenly Cow**.
   - It also has about 757 Pyramid Text spells, 513 Book of the Dead witnesses (including BD 17 and 125), Ebers, Edwin Smith, the Kadesh texts and the Ramesside Miscellanies.
   - It does **not** have the Coffin Texts, the Memphite Theology, the Chester Beatty III dream book, Demotic texts, or the Great Hymn to the Aten (that record is empty) (verified by grep of the concordance).
2. **The current TLA website (corpus v20) cannot be used by script.** It sits behind a JavaScript bot-verification wall (verified). Its "Data extraction interface for crawlers" link leads to a **decoy page of fake records** (verified). Do not follow it, and never treat it as data.
   - Its terms (reported, via search snippet) allow copying individual records, "but not entire sub-corpora or larger sets (> 10 website pages)".
   - The public TLA API offers only the thesauri, BTS flexcodes and MdC→Unicode, with **no text API** (verified).
   - The old TLA (corpus v16, 2014; it includes the Demotic Text Database) is still online at `aaew.bbaw.de/tla/` with a **guest login** after accepting its terms (login page verified; I did not log in).
   - Conclusion: **AED-TEI is the base text; the live TLA is a per-passage check in a human's browser.**
3. **The best Bible candidate in all Egypt is the Instruction of Amenemope.** Its dependence on Proverbs 22:17–24:22 is broadly accepted. More importantly for this project it has **Torah** contact: the boundary stone (Deut 19:14, 27:17), the widow's field, the balance and weights (Lev 19:35–36, Deut 25:13–16), and the blind and the lame (Lev 19:14). The base is complete, CC BY-SA and essentially undamaged. A Hebrew translation exists (Shupak 2016), but without line-by-line apparatus.
4. **For the commentary's present focus (Gen 1, the *tanninim*) Egypt offers a strong small corpus.**
   - **Merikare §§ E130–138:** "mankind, the cattle of god … for their sake he made heaven and earth, having driven off **the greed of the water** (*snk n mw*) … made breath for their noses … they are his **images**, who came from his body … he made plants, small cattle, **fowl and fish** to feed them". This is Gen 1:2, 1:21, 1:26–30 and 2:7 in one passage (verified in AED's German).
   - The **Memphite Theology**: creation by heart and tongue, then Ptah "rested". Base: Sethe 1928 (public domain) and El Hawary 2010 (OBO 243, open access, verified).
   - **Pyramid Texts** "when heaven had not yet come into being" (PT 571/486, both in AED), plus Atum's self-creation (PT 527, 600).
   - **Coffin Texts** 75–80, 714 and 1130 (god's "four good deeds"; men from his tears).
   - **BD 17**, and the Bremner-Rhind "Book of Knowing the Creations of Re" (in AED).
   - The **serpent and Apophis spells**: PT 226–243, and Steiner 2011's Semitic serpent spells inside the Pyramid Texts.
5. **The Joseph and Exodus blocks (Gen 37–50, Ex 1–15) have the most famous Egyptian parallels.**
   - Strong: the **Two Brothers** (↔ Gen 39); the **Westcar magicians**: the wax crocodile that comes alive (↔ Aaron's staff becoming a *tannin*, Ex 7:8–12) and the lector priest who folds back the lake's waters (↔ Ex 14); the **dream book** (↔ Gen 40–41; *ḥartummim* < *ḥry-tp*, accepted); the **vizier installation** texts (↔ Gen 41:40–43); the **Ramesside Miscellanies** (Edomite Shasu at Pithom, Anastasi VI ↔ Gen 47 and Ex 1:11, verified in AED). (Of these, Westcar and the Miscellanies are in AED today; the dream book is not.)
   - Weak or late: the **Famine Stele** (Ptolemaic) and the **Admonitions of Ipuwer**. Ipuwer's link to the plagues is a popular claim that scholarship rejects; reasons in §2.
6. **For "the soul of the ancients" Egypt is extremely rich and well preserved.** Sinuhe and the Shipwrecked Sailor are essentially complete (Shipwrecked Sailor 0% lost; Sinuhe B under 1% of words lost). So are the Two Brothers and Horus and Seth (about 1% lost). Add the Peasant, the Man and his Ba, the Harper's Songs and about 55 love songs. Most are **in AED** with measured damage.
7. **Other open resources (verified):**
   - **ISAC's free PDFs** of de Buck's *Coffin Texts* I–VII and Allen's vol. VIII. These are hieroglyphic only, with no transliteration.
   - T. G. Allen's *Book of the Dead* translation (SAOC 37, 1974).
   - **Allen's *New Concordance of the Pyramid Texts*** (Brown 2013; "freely available"), with a full transcription of every spell.
   - **Ramses Online** (Liège): Late Egyptian Stories, letters, tomb robberies, magic, the Egyptian–Hittite treaty, all with French translation and glosses. It has a JSON catalogue and the licence is unstated.
   - **Nederhof's St Andrews PDFs**: interlinear transliteration and English for Sinuhe (all versions), the Peasant, Ptahhotep, the Ba, Westcar, the Shipwrecked Sailor and the Heavenly Cow. Licence unstated.
   - **ZORA (Zurich) OBO volumes, open access:** Hornung's *Himmelskuh*, El Hawary's *Wortschöpfung*, Junge's *Ptahhotep*, Lichtheim OBO 52 (Late Egyptian/Demotic wisdom) and OBO 84 (autobiographies), Shupak OBO 130.
8. **Existing Hebrew translations are few and mostly old or partial** (details in §2.0):
   - Grintz, *סיפורים, מזמורים, משלים מספרות מצרים העתיקה* (Bialik 1975);
   - Shupak, *אין אדם שנולד חכם* (Bialik 2016; nine instructions incl. Amenemope);
   - Fox, *שירי דודים ממצרים העתיקה* (1985);
   - a Budge-based *ספר המתים* (Astrolog 2005, from English).

   There is no Hebrew translation of the Pyramid Texts, the Coffin Texts, the Memphite Theology, the Heavenly Cow, Westcar, the Two Brothers (unless in Grintz – verify), Ipuwer, the Ba dialogue, Setne or the Demotic wisdom. "Shirat Mitzrayim" and a Hebrew book by I. Shirun-Grumach were **not found**; her translations are German (TUAT; Amenemope 1972).
9. **LLM feasibility, honestly put:**
   - **Middle and Late Egyptian narrative and wisdom, from AED's lemmatized transliteration: feasible**, at medium risk, *if* the German sentence translation is hidden on the first pass, and every crux is checked against two modern translations.
   - **Old Egyptian (Pyramid Texts) and the Coffin Texts: high risk** (archaic grammar, obscure mythology, and no open transliteration for the Coffin Texts).
   - **Demotic: high risk.** The base sits in the gated TLA; resources are thinner; the Chicago Demotic Dictionary is the main open tool.
   - Hieroglyphic hand-copies (de Buck, Sethe) cannot be read reliably by an LLM. Treat them as a check, not a base.
10. **Amarna letters** are Akkadian cuneiform, so they belong to the Levant / Mesopotamian-script set, not here (§3). **Meroitic** can be read but not understood: excluded. **Coptic** is mostly Christian, with Coptic magical texts as the one ancient-mind exception: brief note only.

---

## 1. Ranked shortlist

| # | Text | Language · date (composition / oral) · earliest ms | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul benefit | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Instruction of Amenemope** | Late Egyptian (literary) · composed Ramesside, c. 1300–1075 BCE · pBM EA 10474 (21st–26th dyn.; TLA: Psammetichus I) + 21st-dyn. tablets/ostraca | 30 chapters, 551 lines, 3,286 words; ≈0% lost (AED, verified) | Deut 19:14, 27:17; Lev 19:14, 19:35–36; Deut 25:13–16, 24:17–21; Ex 23:6–8; Prov 22:17–24:22 | piety of the "silent man", god's will vs human plans, poverty and honesty | **HIGH / HIGH** | AED-TEI (CC BY-SA, verified); Lange 1925 (PD, archive.org) | **HIGH** |
| 2 | **Egyptian creation corpus**: Merikare (creation passage), Memphite Theology, PT 527/600/571/486, CT 75–80/714/1130, BD 17, Bremner-Rhind "Creations of Re" | Old–Late Egyptian · 2350 BCE (PT) – 311 BCE (Bremner-Rhind) | about 600–900 lines in all; mixed: PT/BD/Merikare good, Memphite stone half erased | Gen 1:1–2:3 (word, image, breath, "not yet", rest), 1:21 (water-monster), 2:7 | how Egyptians imagined the first moment, the "one who came into being by himself" | **HIGH / HIGH** | AED (Merikare, PT, BD 17, Bremner-Rhind); Sethe 1928 + El Hawary 2010 OA (Memphite); de Buck (CT, hieroglyphs only) | MEDIUM (CT and Memphite are the hard part) |
| 3 | **Book of the Heavenly Cow** (Destruction of Mankind) | Middle Egyptian (with Late forms) · composed NK or earlier · Tutankhamun's shrine, c. 1325 BCE; Seti I (KV 17) | Seti I version 2,140 words, 95 cols, 4% lost (AED) | Gen 6:5–8 (decision to destroy, divine "regret"), 8:21–22, 9:11; 11:1–9 (separation of gods and men) | rebellion of mankind, the goddess drunk on red beer, the god who withdraws | MED-HIGH / HIGH | AED (verified); Hornung 1997 OBO 46 (OA, verified) | **HIGH** |
| 4 | **Tale of Two Brothers** (pD'Orbiney) | Late Egyptian · composed 19th dyn. · ms c. 1200 BCE (Seti II) | 19 pp., 4,337 words; ≈1% lost | **Gen 39:7–20** (Potiphar's wife), Gen 2:21–22 (wife fashioned by the gods), 3 (the wife's betrayal) | fraternal love, myth of the heart in the cedar, metamorphosis | **HIGH** (Gen 39) / HIGH | AED + Ramses Online (verified) | **HIGH** |
| 5 | **Papyrus Westcar** (Khufu and the magicians) | Middle Egyptian · composed late 12th–13th dyn. · ms c. 1650–1550 BCE | 12 cols, 3,391 words; start and end lost, 8% words lost | **Ex 7:8–12** (staff → *tannin*: wax crocodile), Ex 7–8 *ḥartummim*, **Ex 14:21–22** (waters folded back), Gen 18 (birth announcement) | court humour, magic, a prophecy of a new dynasty | MED-HIGH / HIGH | AED + Nederhof (verified) | **HIGH** |
| 6 | **Book of the Dead 125 + 17 + 30B** | Middle Egyptian · NK formulation (17 already as CT 335) · pJuja/pNu/pMaiherperi, c. 1450–1390 BCE | BD 125 ≈1,600–1,800 words per ms; ≈0% lost | Ps 15, 24:3–6, Job 31; Deut 26:13–14; Decalogue (typological); Prov 16:2, 21:2, 24:12 (God weighs hearts) | the judgement of the dead, the 42 judges, the weighed heart | MED-HIGH / HIGH | AED (Totenbuch-Projekt data, verified); Naville 1886 PD; T. G. Allen 1974 (SAOC 37, free) | **HIGH** |
| 7 | **Sinuhe** | Middle Egyptian · c. 1875 BCE · mss B, R (late 12th–13th dyn.) + ~30 NK ostraca | B: 322 lines, 3,194 words, <1% lost | Ex 2:15–22 (flight, marriage abroad; debated), Gen 47:29–30, 50:25 (burial at home), Deut 8:8 (land of Yaa) | exile, fear, homecoming; the classic of Egyptian poetry | MEDIUM / **HIGH** | AED (all mss) + Nederhof (verified) | **HIGH** |
| 8 | **Exodus-background Ramesside documents**: Anastasi VI (Shasu at Pithom), Anastasi I, Leiden I 348 (ʿApiru), Louvre leather roll (brick quotas), **Merneptah Stele**, Kadesh poem | Late Egyptian · 1274–1190 BCE (contemporary mss) | short pieces; Merneptah 28 lines | Ex 1:11–14, 5:6–19 (bricks, straw, quotas), Gen 47 (Goshen), Ex 13:17–14 (Ramesside geography), first "Israel" | the scribe's world, frontier bureaucracy, the king's prayer at Kadesh | MED-HIGH / MEDIUM | AED (Miscellanies, Kadesh verified; Merneptah not in AED); Petrie 1897 PD; Ramses Online | HIGH (Merneptah: MEDIUM) |
| 9 | **Love songs** (Harris 500, Chester Beatty I, Turin 1966, Cairo vase, DeM ostraca) | Late Egyptian · 19th–20th dyn. (c. 1300–1150 BCE) | about 55 songs; good (0–5% lost) | Song of Songs (outside the Torah); Gen 2:23–24, 29:11–20 (motif) | desire, the "sister", the garden, the door-bolt | LOW-MED / **HIGH** | AED (verified) | **HIGH** |
| 10 | **Pessimistic and lament corpus**: Ipuwer, Neferti, Khakheperreseneb, the Man and his Ba, Harper's Songs | Middle Egyptian · late 12th–13th dyn. (Harper's: NK) · mss 12th–19th dyn. | Ipuwer 3,435 words (start and end lost); Ba 1,236; Neferti 1,185; Kh. 512; Harpers ~600 | Ex 7:20 / 12:35 (Ipuwer – rejected), Gen 6:5–6, Eccl 1:9–10, 9:7–10; Job 3 | despair, suicide, "nothing new", carpe diem | MEDIUM / **HIGH** | AED (verified) | HIGH |
| 11 | **Instructions (other)**: Ptahhotep, Kagemni, Merikare (whole), Amenemhat, Loyalist, Man for his Son, **Satire of Trades (Duaf)**, **Any** | Middle / Late Egyptian · 12th dyn. – NK · pPrisse (c. 1850 BCE) to Ramesside ostraca | Ptahhotep 3,060 words, ≈0% lost; Any 2,876; Merikare 2,197 | Ex 20:12 / Deut 5:16 (obedient son, long life), Deut 4:2; Prov 7 (Any); Ben Sira 38–39 (Duaf); 1 Sam 15:22 (Merikare) | the ethics of maat, how to speak, humour about trades | MEDIUM / HIGH | AED (verified); Shupak 2016 (Hebrew, ©) | HIGH |
| 12 | **Eloquent Peasant** | Middle Egyptian · 12th dyn. · mss R, B1, B2 (late 12th–13th) | B1 3,161 words (≈2% lost) + B2, R | Lev 19:15, 35–36; Ex 23:6–8; Deut 16:18–20; 24:14–15 | the cry for justice, nine petitions of rhetoric | MEDIUM / HIGH | AED + Nederhof | HIGH |
| 13 | **Wenamun** | Late Egyptian · c. 1050 BCE (21st dyn.; ms 21st–22nd) | 3,044 words; end lost | Num 11:25–29, 1 Sam 10 (ecstatic prophecy at Byblos), Gen 10 (Dor, Tjeker, Byblos) | a humiliated envoy, the end of empire | MEDIUM / HIGH | AED + Ramses | HIGH |
| 14 | **Horus and Seth** (Chester Beatty I recto) | Late Egyptian · ms Ramses V, c. 1145 BCE | 16 pp., 4,776 words; ≈1% lost | Gen 1:26 / Deut 32:8 / Ps 82 (divine council), Gen 9:20–27 (sexual dominance; debated) | burlesque divine litigation, Isis' wit | MEDIUM / HIGH | AED + Ramses | HIGH |
| 15 | **Chester Beatty III Dream Book** | Middle Egyptian (Late forms) · composition possibly 12th dyn. (debated) · ms c. 1275 BCE | about 11 cols, about 200+ dream entries (verify); good | **Gen 37:5–11, 40–41** (dream interpretation by wordplay; *ḥartummim*) | night fears and hopes, puns as divination | **HIGH / HIGH** | **No open base** (Gardiner 1935 ©; not in AED); TLA v20 to check | LOW-MED |
| 16 | **Medical and magical texts**: Edwin Smith, Ebers; Isis and the Secret Name of Re; Leiden I 343+345, I 348; Metternich stela | Middle / Late Egyptian · c. 1600–1550 BCE (Smith, Ebers); 19th–20th dyn. (Isis/Re); 30th dyn. (Metternich) | Ebers 110 pp.; Smith 48 cases | **Lev 13–14** (casuistic diagnosis: "if you examine a man with… you shall say…"); Ex 3:13–15 / Gen 32:30 (the secret name); Gen 3:1 (serpent made of earth and spittle) | pain, sickness, the healer's voice, protection of children | MED-HIGH / MED-HIGH | AED (Ebers, Smith verified); Ramses (Leiden magic); Isis/Re: Pleyte–Rossi 1869–76 (PD), TLA (verify) | MEDIUM (technical vocabulary) |
| 17 | **Autobiographies and vizier texts**: Weni, Harkhuf, Ankhtifi, Ahmose son of Abana, Rekhmire (installation and duties of the vizier) | Old / Middle Egyptian · c. 2300–1430 BCE (contemporary monuments) | short to medium; mostly good | **Gen 41:40–44** (vizier: ring, linen, gold, chariot); Gen 41:54–57, 47 (Ankhtifi's famine); Ex 12:37–14 (Hyksos expulsion, Ahmose) | self-presentation, the child-king's delight in a dancing dwarf | MEDIUM / HIGH | Sethe, Urk. I/IV (PD); some in Nederhof; Lichtheim OBO 84 (OA) | MEDIUM |
| 18 | **Setne Khamwas I–II** (Demotic) | Demotic · Ptolemaic composition · Setne I c. 3rd c. BCE, Setne II 1st c. CE | each ~6–7 cols; Setne I start lost | Ex 7–8 (magician contest), Luke 16 (rich man and Lazarus) | a prince obsessed with a magic book, a tour of the underworld | MEDIUM / HIGH | Griffith 1900 (PD, archive.org); TLA Demotic (gated) | LOW-MED |
| 19 | **Demotic wisdom: Ankhsheshonq, Papyrus Insinger** | Demotic · Ptolemaic (oral maxims perhaps older) · 1st c. BCE / 1st c. CE | Ankhsheshonq about 550 maxims; Insinger about 35 cols | Eccl 11:1 (Ankhsheshonq 19.10), Ben Sira, Proverbs | peasant humour, fate and the god | LOW-MED / HIGH | TLA Demotic (gated); Lichtheim OBO 52 (OA); Glanville 1955 © | LOW-MED |
| 20 | **Pyramid Texts** (as a corpus: Unas complete, plus selections) | Old Egyptian · spells partly pre-Unas, oral liturgy (date unknowable) · Unas pyramid c. 2350 BCE | Unas 228 spells; the corpus about 800 spells | Gen 1:2, 2:4b–5 ("not yet"), 3 (serpent spells), 28:12 (ladder to heaven) | the oldest religious corpus on earth: the king's ascent | MED-HIGH / **HIGH** | AED (757 spells) + Allen 2013 transcription (free) + Sethe (PD) | MED-LOW (archaic) |
| 21 | **Coffin Texts** (selection: 75–83, 162, 261, 335, 714, 1029–1130) | Middle Egyptian · c. 2100–1700 BCE (contemporary coffins) | selection about 400 lines | Gen 1:26–27 / 6:5–7 (CT 1130), 1:2 (Nun, inert), 2:7 (Shu = breath) | the god's own justification of his world | **HIGH** (CT 1130) / HIGH | de Buck I–VII (ISAC free PDF, **hieroglyphic only**); no open transliteration | LOW-MED |
| 22 | **Great Hymn to the Aten + Amun hymns** (Leiden I 350, Cairo pBoulaq 17, Chester Beatty IV) | Late Middle / Late Egyptian · c. 1350 BCE (Ay's tomb); 1238 BCE (Leiden I 350) | Aten hymn 13 cols, about 110 verses; Chester Beatty IV 1,682 words | Gen 1 (order of creation; night and day), Ps 104:20–30 | solar piety, the hidden god Amun | MEDIUM / HIGH | Chester Beatty IV in AED; **Great Hymn record empty in AED**; Davies 1908 (PD); TLA v20 | MEDIUM |

Runners-up: Astarte and the Sea (Gen 1:2, Yam; fragmentary), the Doomed Prince, Truth and Falsehood, the Taking of Joppa, Apophis and Seqenenre, the Great Nile Hymn (in AED), the Book of Thoth (Demotic), the Myth of the Sun's Eye (Demotic fables), the Famine Stele, the Execration Texts, and the netherworld books (Amduat; the Book of Gates).

---

## 2. The survey

### 2.0 Cross-cutting: corpora, tools, Hebrew translations, LLM feasibility

**Base-text corpora**
- **AED-TEI** (`github.com/simondschweitzer/aed-tei`; Zenodo 10.5281/zenodo.3580939, v1.0, 2019-12-17, 176,875,423 bytes). **Verified** (README, `concordance_name_text_id.csv` with 11,397 rows; 42 texts downloaded via `raw.githubusercontent.com` and measured).
  - **Licence:** CC BY-SA 4.0, stated in every file header. It derives from the official "Teilauszug der Datenbank … Januar 2018" (urn:nbn:de:kobv:b4-opus4-29190, CC BY-SA 4.0).
  - **Subcorpora (number of texts):** tomb inscriptions 5,644; Pyramid Texts 1,378; archives 1,202; **literature (sawlit) 777**; Book of the Dead 513; Amarna 452; letters 438; rock inscriptions 310; medicine 209; Ramesside historical 175; Late Period biographies 159; funerary rituals 18; temple library 11.
  - **Format:** `<w lemmaRef="tla:…"><fs feats="verb … suffixConjugation active"/>…</w>`, with `<damage>`, `<supplied reason="lost">`, `<gap>` and `<lb n="…"/>`. The `_st.xml` file pairs a German translation with every sentence.
  - The companion **`dictionary.xml`** has about 30,000 lemmas with German translation and part of speech (README, reported). The sister corpus **AES** has the same sentences as JSON (CC BY-SA, verified README).
  - **For this project:** it can be committed with attribution, like ORACC. Our Hebrew translation is our own work.
- **TLA HF datasets** (`huggingface.co/thesaurus-linguae-aegyptiae/*`, CC BY-SA 4.0, verified): Earlier Egyptian v18 (12,773 sentences), Demotic v18 (13,383), Late Egyptian v19 (3,606).
  - They hold **only fully intact sentences**, with **no text ID**, so they cannot rebuild a text.
  - They are useful as a glossed example bank: each sentence has hieroglyphs, transliteration, lemmas, UPOS, glossing and German.
  - Probes show the sentences include the Two Brothers, Sinuhe, the Pyramid Texts, Westcar, Ankhsheshonq, Setne and Amenemope.
- **TLA web (corpus v20, `thesaurus-linguae-aegyptiae.de`)**: the authoritative current corpus, with better coverage than 2018 (it now includes Late Egyptian v19 and Demotic). It is **JS-gated with a crawler decoy** (verified). Use it **only by hand** to check a passage.
  - The Text+ LexFCS **lemma** endpoint exists (redirects to the APIs page; reported).
- **Ramses Online** (`ramses.ulg.ac.be`, Liège; verified).
  - **Contents:** 302 Late Egyptian texts, all lemmatized and morphologically annotated, with French translations. They include all the Late Egyptian Stories (LESt 1–11: Doomed Prince, Two Brothers, Truth and Falsehood, Horus and Seth, Wenamun, Astarte, Joppa, Apophis and Seqenenre, Khonsuemheb, the King and the Goddess), the Late Ramesside Letters, the Tomb Robberies, Leiden I 343+345/346/349 magic, both copies of the **Egyptian–Hittite treaty**, two Letters to the Dead, Amennakht's teaching, the Satire of Trades ostracon and the Nile hymn.
  - **Access:** catalogue via `/json/text/grid?filter=…&page=N`; text via `/text/legacy/<id>` (Two Brothers: 103 pages).
  - **No licence stated** → treat as ©, consult only. The planned "Sagesses du Nouvel Empire" sub-corpus is still not online.
- **Nederhof, St Andrews** (`sites.cs.st-andrews.ac.uk/people/mn31/egyptian/texts/corpus/pdf/`; verified, 98 PDFs). Interlinear MdC transliteration and English for each manuscript:
  - Sinuhe (R, B, AOS, BA, G …), the Peasant, Ptahhotep, the Dispute, Westcar, the Shipwrecked Sailor, the Heavenly Cow (De Buck's readingbook version), the Hymn to the Sun of Suti and Hor (BM 826), Bentresh, Merneptah (hieroglyphs only), Ebers (part) and Urk. IV 1–55.
  - **No licence stated** → consult only. A useful second witness to AED.

**Reference tools**
- **Lemma lists:** TLA (via AED `dictionary.xml`, CC BY-SA). The *Wörterbuch der ägyptischen Sprache* (Erman–Grapow 1926–31) is digitized at BBAW ("Digitalisiertes Wb.", reported).
- **Grammars and dictionaries:**
  - Erman's *Ägyptische Grammatik* is public domain.
  - Gardiner's *Egyptian Grammar* (1927; 3rd ed. 1957) is © UK until 2033. The 1927 edition is US public domain, but **consult only**; archive.org copies are mostly lending/unauthorized → do not download.
  - Allen, *Middle Egyptian* (3rd ed. 2014, CUP), Faulkner's *Concise Dictionary* (1962) and Hannig's *Handwörterbuch* are © and paid.
- **Sign list:** Thot Sign List (`thotsignlist.org`, 200).
- **Demotic:** the Chicago Demotic Dictionary (free PDFs by letter – reported; the ISAC project page is up, but I could not find the PDF links on the redesigned site today). Erichsen 1954 is ©. The Würzburg Demotic Palaeographical Database host is blocked.
- **Coptic:** the Comprehensive Coptic Lexicon (CC BY-SA, FU Berlin; host blocked); Coptic Scriptorium (200).

**Modern translations (rank 3, all © unless noted)**
- Lichtheim, *Ancient Egyptian Literature* I–III (UC Press 1973–80; 2006 reissue). The standard; ©, no legal free copy.
- Simpson (ed.), *The Literature of Ancient Egypt* (Yale, 3rd ed. 2003).
- Parkinson, *The Tale of Sinuhe and Other Ancient Egyptian Poems* (OUP 1997).
- Allen, *Middle Egyptian Literature* (CUP 2015; hieroglyphs, transliteration, translation, commentary on eight MK works – list to verify).
- Allen, *The Ancient Egyptian Pyramid Texts* (SBL WAW 23, 2005; 2nd ed. WAW 38, 2015).
- Faulkner, Pyramid Texts (1969), Coffin Texts (1973–78), Book of the Dead (1972/1994).
- Foster 2001; Quirke, *Egyptian Literature 1800 BC* (2004).
- Assmann, *Ägyptische Hymnen und Gebete* (1975/1999).
- Fox, *The Song of Songs and the Ancient Egyptian Love Songs* (1985).
- TUAT (German, incl. Shirun-Grumach's translations).
- **Open access (verified on ZORA, "Green"):**
  - Lichtheim, *Late Egyptian Wisdom Literature in the International Context* (OBO 52, 1983) and *Ancient Egyptian Autobiographies* (OBO 84, 1988); *Maat in Egyptian Autobiographies* (OBO 120, 1992) was listed but its OA status not checked;
  - Hornung, *Himmelskuh* (OBO 46, 1997 ed.);
  - El Hawary, *Wortschöpfung* (OBO 243, 2010);
  - Junge, *Die Lehre Ptahhoteps* (OBO 193, 2003);
  - Shupak, *Where Can Wisdom Be Found?* (OBO 130, 1993).

**Existing Hebrew translations** (none online in full; all ©)

| Work | Translator / author | Publisher, year | What it contains | Status |
|---|---|---|---|---|
| *סיפורים, מזמורים, משלים מספרות מצרים העתיקה* (ספרי מופת מספרות העולם) | יהושע מ' גרינץ, "translated from the Egyptian original, with introductions and notes" | מוסד ביאליק, ירושלים 1975 (possibly a reprint of 1958 – verify); 211 pp. | Sinuhe (pp. 9–21), the Taking of Joppa (pp. 112–113), other tales, hymns, wisdom – full contents to verify | out of print; second-hand ₪90–120 (reported, Hebrew Wikipedia + booksellers) |
| *"אין אדם שנולד חכם": חכמת מצרים הקדומה וזיקתה למקרא* (ספריית האנציקלופדיה המקראית, סדרת ספר לב) | נילי שופק | מוסד ביאליק 2016 (תשע"ו); 360 pp. + 16 plates | "the first Hebrew translation of the Egyptian instructions", from the original: Kagemni, Ptahhotep, Djedefhor, Merikare, Amenemhat, the Loyalist Instruction, A Man for his Son, Any, **Amenemope**; long introduction on the Bible | in print (paid). The main Hebrew rank-3/6 check for item 1 and item 11 (reported, review on mikrarevivim blog) |
| *שירי דודים ממצרים העתיקה* | מיכאל פוקס | ירושלים תשמ"ה (1985); Magnes per search snippet – verify | the love songs (Fox's numbering) | second-hand (reported, Hebrew Wikipedia "פפירוס האריס 500") |
| *ספר המתים המצרי* | E. A. W. Budge; Hebrew tr. א. כץ | אסטרולוג 2005; 142 pp. | Budge's English BD, translated into Hebrew | low value (from English, 19th-c. readings) (reported) |
| "תרגום מתוך ספר המתים המצרי" | אמיר אור | *חדרים* 12 (1996), on Project Ben-Yehuda (free) | short literary excerpts | verified page exists (benyehuda.org/collections/17990) |
| a Harper's Song in Hebrew | אורלי גולדווסר | *הארץ* (ספרים), 2006-06-21 | one Harper's Song | page 403 to scripts; reported – verify |
| *לפרעה המלך אדוני: מכתבים מתל אל-עמארנה…* | צפורה כוכבי-רייני | מוסד ביאליק 2005 | the Amarna letters (Akkadian) | reported from knowledge – verify; belongs to the Levant set |
| entries in *אנציקלופדיה מקראית*; *עולם התנ"ך*; TheTorah.co.il (Ps 104 and the Aten hymn, in Hebrew) | various | Bialik / Davidson / web | excerpts | consult |

**How well can Claude translate Egyptian? (an honest estimate)**
- **Middle Egyptian from AED's transliteration and lemmas: feasible, medium risk.**
  - What makes it feasible: the grammar of classical Middle Egyptian is well described. AED gives, for every word, a lemma ID, a German cotext gloss and morphological features (verb class, form, voice).
  - So most of the lexical problem is solved. What remains is (a) choosing among verb forms and tenses and drawing sentence boundaries, (b) hapax words and technical terms (plants, diseases, cult objects), (c) mythological allusion, and (d) poetry (no vowels, so wordplay and metre are mostly invisible).
  - Two specific dangers:
    - **Anchoring on the German**: AED's sentence translation is in effect a rank-3 translation shipped with the base. Hide `_st.xml` on the first pass.
    - **Recalling memorized copyrighted English translations** of famous texts (Lichtheim, Parkinson): never reproduce them.
- **Late Egyptian narrative** (the Two Brothers, Horus and Seth, Wenamun) is lexically simpler and well annotated in two corpora (AED + Ramses): **lower risk**.
- **Old Egyptian (Pyramid Texts): high risk.** Archaic syntax, unknown mythological referents, scribal revisions; even Egyptologists disagree on whole spells. Translate selected spells only, with Allen 2013/2015 as check.
- **Coffin Texts: high risk and no open transliteration.** De Buck's hand-copied hieroglyphs cannot be read reliably by an LLM. Any CT work needs a published transliteration as a scaffold (Allen 1988 for the creation spells, Carrier 2004 [French, ©] – verify).
- **Demotic: high risk.** Less training data, a cursive script with ambiguous readings, a lexicon still in progress (CDD), and a base that is gated (TLA) or old (Griffith 1900).

---

### 2.1 Instruction of Amenemope (the top candidate)
**Late Egyptian (literary) · composed Ramesside (c. 1300–1075 BCE; scholars place it after the Instruction of Any and before 1000 BCE on language) · earliest witness: a 21st-dyn. writing tablet and ostraca; complete copy pBM EA 10474 (dated by TLA palaeographically to Psammetichus I, c. 650 BCE; others say 21st–22nd dyn.) · 30 numbered chapters, 551 lines (27 pages), 3,286 words · preservation essentially complete (AED: 0% words lost; 27 small gaps).**
- *What it is:* A father's teaching to his youngest son, by an official of the fields of Akhmim. It has a prologue and **thirty numbered "houses" (chapters)**, ending "Look at these thirty chapters" (verified in AED's German). It contrasts the **"heated man"** (*šmm*) with the **"truly silent man"** (*gr mꜣꜥ*). Its theme is piety, honesty in land and grain measures, and humility before "the god", whose plans differ from man's.
- *Bible parallels:*
  - **Prov 22:17–24:22.** "Have I not written for you *shalishim* (thirty)?" (Prov 22:20) ↔ the thirty chapters. "Incline your ear" (22:17) ↔ ch. 1. Do not befriend the hot-tempered man (22:24) ↔ ch. 9–10. Riches "make themselves wings like an eagle" (23:4–5) ↔ ch. 7, "they made themselves wings like geese" (verified). **Consensus: accepted.** Most scholars hold that Proverbs depends on Amenemope, directly or via a Semitic intermediary (Erman 1924; Fox, *Proverbs 10–31* AYB 2009; Shupak 2005, 2016; Laisney 2007; Schipper). A minority (e.g. Waltke) dissents.
  - **Torah:** "Do not move the boundary stone on the borders of the fields … do not encroach on the boundaries of a **widow**" (ch. 6, verified) ↔ **Deut 19:14, 27:17**; Prov 23:10 ("the fields of the fatherless"). "Do not tamper with the hand-balance, do not falsify the *kite*-weights" (ch. 16, verified) ↔ **Lev 19:35–36, Deut 25:13–16**. The corn measure (ch. 17). Do not mock the blind, tease a dwarf or harm the lame (ch. 25) ↔ **Lev 19:14, Deut 27:18**. Do not take bribes or pervert the court (ch. 20) ↔ **Ex 23:6–8, Deut 16:19**.
  - Torah links are typological to debated. The boundary curse in Deut 27:17 is the closest wording.
- *Soul of the ancients:* the most "inward" Egyptian ethics: "man is clay and straw, the god is his builder"; resignation to the god's will; compassion for the poor; a pious bureaucrat's conscience.
- *Base text and tools:*
  - AED-TEI ID `5JO44VJZERAB3HQUHMFSMNXH6I`, CC BY-SA (verified). Five fragmentary parallel witnesses are separate IDs.
  - Lange 1925, *Das Weisheitsbuch des Amenemope* (PD; Lange d. 1950; archive.org `LangeHO1925`, catalogue verified, community upload – check before use).
  - Budge 1923 facsimile (PD). Laisney 2007 (Studia Pohl SM 19, ©).
  - Translations: Lichtheim II; Simpson; Shirun-Grumach in TUAT III (German); **Shupak 2016 (Hebrew)**.
- *Feasibility and risks:* Late Egyptian with Middle Egyptian literary forms, moderately difficult. It is clean and complete, and its line numbering (page.line) is ideal for the project's line-by-line format.
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* **translate first** (the first Egyptian project). Pair it with a parallels index keyed to Prov 22–24, Lev 19 and Deut 19/25/27.

### 2.2 The Egyptian creation corpus (Gen 1–3 control; the current commentary focus)
A corpus of excerpts, each with its own dates:
- **(a) Instruction for Merikare §§ E130–138.** Composed early 12th dyn. in the persona of a Herakleopolitan king (c. 2050 BCE). Mss 18th dyn. (pPetersburg 1116A, c. 1450 BCE). AED `YZSISQLOINELTMJDPXQ45O5IUU`, 2,197 words, 3% lost (verified).
  - **Text (verified in AED German):** "Well tended is mankind, **the cattle of god**. For their sake he made heaven and earth, having driven off **the greed of the water** (*snk n mw*). He made the breath of life for their **noses**. They are **his images**, who came forth from his body … He made for them plants, small cattle, **fowl and fish** to feed them."
  - Bible: **Gen 1:26–27** (*ṣelem*); **1:29–30** (food given); **2:7** (breath into the nostrils); **1:2/1:21** (the water-monster repelled, versus *tannin* created).
  - Consensus: the parallel is accepted as the closest Egyptian analogue to the image of God (Ockinga 1984, ÄAT 7). Contact is typological, not literary.
- **(b) Memphite Theology (Shabaka Stone, BM EA 498).** Stone c. 710 BCE (Shabaka). It claims to copy a worm-eaten ancient book. The composition date is debated: Old Kingdom (Breasted, Sethe, Junker), Ramesside (Schlögl) or 25th dyn. (Junge, El Hawary). 62 columns; the middle third is erased (the stone was used as a millstone).
  - **Content:** Ptah creates through **"heart and tongue"**: "every divine word came into being through what the heart devised and the tongue commanded". Then "**Ptah rested** (*ḥtp*) after he had made everything".
  - Bible: Gen 1 (creation by word), **2:2–3** (rest). Consensus: the theme is widely compared; dependence is debated (Hoffmeier 1983, JANES 15; Atwell 2000, JTS; Currid 1997).
  - Base: Sethe 1928, *Dramatische Texte* (PD; archive.org `UGAAe10.2`, catalogue verified); **El Hawary 2010 (OBO 243, ZORA OA, verified)**, a full modern edition. Not in AED (verified).
- **(c) Pyramid Texts on the beginning.**
  - **PT 571/486:** "when heaven had not yet come into being, when earth had not yet come into being …" ↔ the "not yet" opening of **Gen 2:4b–5** (and Enuma eliš I 1–8; the Mesopotamian bilingual creation text).
  - **PT 527/600:** Atum's self-creation and the *benben* hill.
  - All are in AED (verified) and in Allen 2013 (free).
- **(d) Coffin Texts.**
  - CT 75–80 (Shu spells: Atum "alone in Nun, inert"; Shu = breath/life ↔ Gen 1:2, 2:7).
  - **CT 1130**, "the four good deeds": the god made the four winds "that every man might breathe"; the great flood (inundation) "that the poor might have rights in it like the great"; "every man like his fellow"; "I did not command them to do wrong, it was their hearts that disobeyed what I said"; "I created the gods from my sweat and **men from the tears of my eye**".
  - Bible: **Gen 1:27** (equality of humankind), **6:5** ("the inclination of the heart"), and the theodicy of Gen 3. Typological, but strikingly close in idea.
  - Base: de Buck VII (ISAC OIP 87 PDF, 32.6 MB, verified; hieroglyphic only).
- **(e) BD 17** ("I am Atum when I was alone in Nun; I am Re in his first appearance …", with ancient glosses "What does that mean?"). AED pNu and pJuja (verified).
- **(f) Bremner-Rhind papyrus** (pBM 10188, c. 311 BCE), the "Book of Knowing the Creations of Re and of Overthrowing Apophis": "I am he who came into being as Khepri … no heaven existed, no earth existed …". The Apophis serpent is cursed and burnt (↔ Gen 1:21 *tanninim* as created beings, Isa 27:1, Ps 74:13–14). AED (verified: Apophis book and names of Apophis).
- *Soul of the ancients:* how Egyptians imagined the first moment: a god alone in dark water, creating by thought, by spittle, by tears; the sun's daily battle with the chaos serpent.
- *Feasibility:*
  - Merikare, BD 17, the PT spells and Bremner-Rhind: MEDIUM (AED base).
  - The Memphite Theology: MEDIUM-LOW (damaged, contested readings; El Hawary is the scaffold).
  - The Coffin Texts: LOW-MED (no open transliteration).
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* **the second Egyptian project**, run as an excerpt corpus timed to the Gen 1 commentary. Start with Merikare and the Memphite Theology. Add CT 1130 only with a published transliteration as scaffold.

### 2.3 Book of the Heavenly Cow ("Destruction of Mankind")
**Middle Egyptian with Late Egyptian forms · composed NK or earlier (Hornung: perhaps late 18th dyn. redaction of older myth) · earliest: Tutankhamun's outermost shrine (c. 1325 BCE); Seti I KV 17 (c. 1290); Ramses II, III, VI · Seti I version 2,140 words, 95 columns, 4% lost (AED `WHEOIX5P5ZAVVFU4BGO6OWASV4`, verified) · preservation good.**
- *What it is:* Re has grown old ("his bones silver, his flesh gold, his hair lapis lazuli"). Mankind plots against him. In council with the primeval gods "who were with me in Nun", he sends his Eye as Hathor-Sekhmet to slaughter them. Then he relents, and has 7,000 jars of beer dyed red with ochre poured out. The goddess drinks the "blood" and returns drunk, and **mankind survives**. Weary, Re withdraws to the sky on the back of Nut as a cow. The present world order follows: the separation of gods and men, the netherworld, the moon as Thoth's deputy, and spells.
- *Bible parallels:* **Gen 6:5–7** (the divine decision to destroy rebellious humankind; God "regretted"); **8:21–22** (never again; a remnant survives); the separation of the divine realm (Gen 3:22–24; 11:1–9). A divine council decides the destruction (as in Atraḫasis). It is not a flood. Consensus: a typological "destruction of mankind" myth, often compared with the flood stories (Hornung 1982/1997; Lanckau 2011 [closed access]).
- *Soul:* the god who is old and tired, who repents of his own violence and tricks his own fury with beer. It is the aetiology of an imperfect world (Hornung's subtitle: *Ätiologie des Unvollkommenen*).
- *Base and tools:* AED (Seti I, Ramses VI and the shrine versions, verified); Nederhof PDF (verified); **Hornung, OBO 46 (ZORA OA, verified)**, with a synoptic edition and German translation; Lichtheim II.
- *Feasibility:* good: a clean narrative, a medium-sized text, an open base and an OA edition.
- *Benefit:* Bible MED-HIGH (for Gen 6–9, i.e. the uncommented Gen 8:20–11:26 block) / Soul HIGH. *Recommendation:* translate. It is the natural Egyptian companion to the Mesopotamian flood corpus already done.

### 2.4 Tale of the Two Brothers (pD'Orbiney)
**Late Egyptian · composed 19th dyn. · ms pBM EA 10183, c. 1200 BCE (Seti II; scribe Ennana) · 19 pages, 4,337 words, about 1% lost · complete.**
- *What it is:*
  - **Part 1:** the farmer Anubis and his young brother Bata live like father and son. Anubis' wife propositions Bata ("come, let us spend an hour lying together"). He refuses in anger. She feigns assault, and Anubis waits to kill him. Bata flees and is saved by Re, who puts a crocodile-filled water between them. Bata swears his innocence and castrates himself.
  - **Part 2:** a myth. Bata's heart is placed in a cedar in the Valley of the Cedar. The gods fashion a wife for him, and she betrays him to Pharaoh. He passes through bull and persea tree, is reborn, and becomes king.
- *Bible parallels:* **Gen 39:7–20**: the seduction, the refusal, the false accusation with the evidence, the husband's anger. Consensus: **accepted as the classic motif parallel** (Redford 1970; Hollis 1990/2008). The literary link is debated; the motif is international (Bellerophon). Also Gen 2:21–22 (a wife fashioned by gods for a lone man) and Gen 3 (the woman's betrayal); Gen 37 (brothers).
- *Soul:* agrarian life (the cattle who speak to Bata), sexuality and honour, the fairy-tale logic of transformation.
- *Base:* AED `C6HNRC4K7FAYBHNDS3LV24EANI` (verified); **Ramses Online legacy/2** (verified; French, morphological glosses); Gardiner, *Late-Egyptian Stories* (1932, ©). Translations: Lichtheim II, Simpson, Hollis. Hebrew: perhaps in Grintz 1975 (verify).
- *Feasibility:* high. Late Egyptian narrative is the easiest Egyptian register, and two annotated corpora exist.
- *Benefit:* Bible **HIGH** (Gen 39) / Soul HIGH. *Recommendation:* translate, as the core of a "Joseph in Egypt" corpus with items 2.5, 2.15 and 2.17.

### 2.5 Papyrus Westcar (Khufu and the magicians)
**Middle Egyptian · composed late 12th–13th dyn. · ms pBerlin P 3033, Hyksos period (c. 1650–1550 BCE) · 12 columns; beginning and end lost; AED 3,391 words, 8% lost (verified).**
- *What it is:* King Khufu's sons tell tales of wonders by **chief lector priests** (*ḥry-ḥb ḥry-tp*):
  - Webaoner's **wax crocodile**, thrown into the water, becomes a real crocodile and seizes the wife's lover; the priest picks it up and it is wax again.
  - Djadjaemankh **folds back the lake's waters**, laying one half upon the other, to retrieve a girl's lost fish-pendant.
  - The magician Djedi rejoins severed heads, and prophesies the divine birth of the first three kings of the 5th dynasty to Ruddjedet, wife of a priest of Re.
- *Bible parallels:*
  - **Ex 7:8–12**: Aaron's staff becomes a *tannin* and Pharaoh's *ḥartummim* do the same. *ḥartom* < Egyptian *ḥry-tp* is **accepted** (Quaegebeur 1987; Muchiki 1999).
  - **Ex 14:21–22, 15:8**: the waters stand "like a heap".
  - Gen 18 / 21: a birth foretold to a priestly household.
  - Consensus: an accepted motif background for the magicians, debated for the sea. A direct bearing on the **tannin** question of Gen 1:21: in Egypt the "tannin" of the magicians is a crocodile.
- *Soul:* court entertainment, a bored king, a 110-year-old sage who eats 500 loaves; humour and wonder.
- *Base:* AED `J4EXGHLCL5DR7JHSPDWTVEKMDY`, Nederhof PDF (verified). Blackman 1988 (©).
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* translate (medium size; good Exodus control).

### 2.6 Book of the Dead 125 (with BD 17 and 30B)
**Middle Egyptian · BD as a corpus from c. 1550 BCE (late 17th–early 18th dyn.) to the Ptolemaic period; ch. 125 formulated in the NK, its ideas rooted in the Coffin Texts · earliest full witnesses of 125: pJuja (Cairo CG 51189, c. 1390 BCE), pNu (BM EA 10477), pMaiherperi · AED: pJuja 125 = 1,595 words; pNu 125 = 1,810 words; ≈0% lost (verified) · about 190 chapters in the full corpus.**
- *What it is:* The dead person enters the "Hall of the Two Truths". They greet Osiris and **declare innocence** twice: first a list ("I have not done wrong to people … I have not killed … I have not ordered to kill … I have not committed adultery … I have not stolen … I have not diminished the measure … I have not added to the weight of the balance … I have not taken milk from the mouths of children"); then **the 42 judges**, each named, and each addressed with one sin denied. The heart is weighed against Maat (vignette; BD 30B: "O my heart … do not stand against me as a witness").
- *Bible parallels:*
  - The entrance liturgies **Ps 15** and **Ps 24:3–6** ("who may ascend …"), **Job 31** (oath of clearance: accepted typological).
  - **Deut 26:13–14** ("I have not eaten of it in my mourning …"), the declaration formula (accepted typological).
  - The Decalogue (only typological: shared ethics, the opposite form).
  - **Prov 16:2, 21:2, 24:12** "the LORD weighs hearts" (*tokhen libbot*), **Dan 5:27**, Job 31:6: **the Egyptian origin of the image is broadly accepted**.
  - Lev 19 (just measures).
- *Soul:* fear of judgement; the moral self-portrait of a whole civilization.
- *Base:* AED (Totenbuch-Projekt Bonn data; verified); Naville 1886 *Todtenbuch* (PD, archive.org verified catalogue); T. G. Allen 1974, *The Book of the Dead or Going Forth by Day* (SAOC 37, ISAC free PDF, 23.7 MB, verified); the Totenbuch-Projekt witness archive (`totenbuch.awk.nrw.de`, JS app, 200). Translations: Lapp 2008 (synopsis of 125, ©), Quirke 2013 (©), Faulkner/Goelet. Hebrew: only the Budge-based Astrolog edition and Amir Or's excerpts.
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* translate 125 (with 30B and 17) from pNu, with pJuja variants in the apparatus.

### 2.7 Sinuhe
**Middle Egyptian · composed c. 1875 BCE (after Senusret I's accession) · mss B (pBerlin 3022) and R (pRamesseum A), late 12th–13th dyn.; about 30 NK ostraca · B: 322 lines, 3,194 words, under 1% lost (verified) · complete when B + R are combined.**
- *What it is:* A courtier overhears news of Amenemhat I's assassination, panics and flees to the Levant (Retenu). A local ruler, Amunenshi, gives him his daughter and the land of Yaa ("figs and grapes, more wine than water, abundant honey, plentiful oil"). He prospers and kills a champion in single combat. Old, he begs to return. The king's letter calls him home to an Egyptian burial.
- *Bible parallels:*
  - **Ex 2:15–22** (flight of Moses, marriage to a local chief's daughter: a debated motif).
  - **Gen 47:29–30, 50:25** (burial in the homeland).
  - **Num 13:27, Deut 8:8** (the produce of Canaan: accepted descriptive comparison).
  - 1 Sam 17 (the duel: debated).
  - Gen 12–26 (the patriarchal Levant).
- *Soul:* the greatest Egyptian poem. Panic, exile, longing, what it means to be Egyptian.
- *Base:* AED (all mss, verified); Nederhof (all versions, verified); Koch 1990 (©). Hebrew: Grintz 1975, pp. 9–21.
- *Benefit:* Bible MEDIUM / Soul **HIGH**. *Recommendation:* translate (a "soul" flagship).

### 2.8 Exodus-background Ramesside documents (a small corpus)
- **Pieces:**
  - **pAnastasi VI 51–61** (c. 1200 BCE): a frontier official reports admitting Shasu of Edom to the pools of *Pr-ʾItm* (Pithom) in Tjeku ↔ Gen 47:4–6, Ex 1:11 (accepted as background).
  - **pLeiden I 348**: grain for "the ʿApiru who drag stones to the great pylon" of a Ramesses building ↔ Ex 1:11–14 (accepted background; the *ʿApiru*–Hebrew equation is debated).
  - **Louvre leather roll** (Ramses II, year 5): brick-making quotas not met ↔ Ex 5:6–19 (accepted background).
  - **pAnastasi I**: a satirical letter mapping Canaan's roads ↔ Num 13, Josh.
  - **Merneptah Stele** (Cairo CG 34025, year 5 = 1208 BCE; 28 lines): "**Israel** is laid waste, his seed is not" (l. 27; the people determinative) – the first extra-biblical "Israel" (Hasel 1994).
  - **Kadesh**: Poem, Bulletin and reliefs, c. 1274 BCE; Ramses II's prayer to Amun when abandoned by his army ↔ Ex 14:13–14 (divine warrior; typological).
- *Soul:* the voice of scribes (the Miscellanies' "be a scribe!" and the misery of soldiers), frontier bureaucracy, royal piety.
- *Base:*
  - AED: the Miscellanies (Anastasi I–VI, Sallier, Lansing, Koller …; many verified entries) and all Kadesh versions (verified). Merneptah is not in AED.
  - Petrie 1897, *Six Temples* (PD, archive.org verified catalogue); Nederhof RES hieroglyphs; KRI (©).
  - The Ramses Online catalogue lists no Miscellanies; its "Late Egyptian Miscellanies" sub-corpus is announced but not yet online.
- *Benefit:* Bible MED-HIGH (Ex 1–5, Gen 47) / Soul MEDIUM. *Recommendation:* an excerpt corpus for the Exodus commentary, with the Merneptah stele complete.

### 2.9 Love songs
**Late Egyptian · 19th–20th dyn. (c. 1300–1150 BCE) · pHarris 500 (songs 1–19), Turin 1966 (28–30), Chester Beatty I (31–47), Cairo vase CG 25218 + DeM ostraca (20–27), others to about 55 · preservation good (AED groups: 0–5% lost, verified).**
- *What it is:* The lovers address each other as "brother" and "sister". The beloved waits at a closed door. Trees in a garden speak. The lover crosses a river past a crocodile. "Seven days I have not seen my sister."
- *Bible parallels:* **Song of Songs**: "my sister, my bride" (4:9–12), the garden, the gazelle, the closed door (5:2–6). Fox 1985: an accepted genre relationship, not direct dependence. In the Torah only motif-level (Gen 2:23–24; 29:11–20).
- *Soul:* the most direct emotion in Egyptian literature.
- *Base:* AED (verified IDs for Harris 500 groups, Chester Beatty I sections C and G and the Nakhtsobek songs, Turin 1966, many ostraca); Gardiner 1931 (Chester Beatty I; © until US-PD 2027); Mathieu 1996 (French). Hebrew: **Fox 1985**.
- *Benefit:* LOW-MED / **HIGH**. *Recommendation:* translate (short, beloved, clean). A good second "soul" project.

### 2.10 Pessimistic and lament literature
- **Admonitions of Ipuwer** (pLeiden I 344 recto, 19th dyn. c. 1250 BCE; composed late MK, c. 1800–1650 BCE, per Enmarch 2008; 17 pages, beginning and end lost; AED 3,435 words with about 200 gaps).
  - **Content:** a sage laments a world turned upside down: "the river is blood", "gold and lapis … hang on the necks of slave-women", the poor become rich, the land "turns like a potter's wheel". Then he reproaches the creator.
  - **The Exodus claim:** made by Velikovsky (*Ages in Chaos*, 1952) and popular apologetics (e.g. the 2014 *Patterns of Evidence* film): Ipuwer as an Egyptian eyewitness of the plagues (Ex 7:20; 12:35–36; 9:23–25).
  - **Rejected, because:**
    1. the text is a literary lament in a known genre (the chaos topos; cf. Neferti), not a chronicle;
    2. the language and the manuscript are Middle Kingdom and Ramesside, centuries before any proposed Exodus date, and no Hebrews, departure or plague sequence appears;
    3. "the river is blood" is the blood of civil slaughter, and the jewels on slave-women are a generic social inversion.

    (Enmarch 2008, *A World Upturned*; Gardiner 1909.)
  - **Still worth translating:** to show the claim's failure line by line, and for the soul: the most radical theodicy in Egypt ("Where is he today? Is he asleep?").
- **Neferti** (pHermitage 1116B, 18th dyn.; composed early 12th dyn.; 71 lines; AED 1,185 words): a prophecy of chaos and of a saviour king, Ameny, set in Sneferu's reign. The genre (*vaticinium ex eventu*) ↔ Isa, Deut 18 (prophet form); Gen 15:13–16 (prediction). MEDIUM.
- **Khakheperreseneb** (BM EA 5645 writing board, 18th dyn.; composed late 12th dyn.; AED 512 words): "Would that I had unknown phrases … not those which have been said" ↔ **Eccl 1:9–10** (accepted typological).
- **The Man and his Ba** (pBerlin 3024, 12th dyn.; beginning lost; AED 1,236 words, ~1% lost): a debate about suicide. "Death is before me today like a sick man's recovery … like the scent of myrrh" ↔ Job 3, Eccl. Soul **HIGH**.
- **Harper's Songs:** the Antef song (pHarris 500 recto 6–7; Paatonemheb's tomb, c. 1330 BCE) ("make holiday, do not weary of it … none who goes there comes back"); the Neferhotep songs (TT 50). ↔ **Eccl 9:7–10**, 2:24 (and Gilgameš's Šiduri). Accepted typological.
- *Base:* all in AED (verified IDs); Gardiner 1909 *Admonitions* (PD, archive.org verified catalogue); Nederhof (the Dispute).
- *Benefit:* Bible MEDIUM (Ipuwer for the plagues as a negative control) / Soul **HIGH**. *Recommendation:* translate as one corpus ("Egyptian voices of despair").

### 2.11 The instructions (other than Amenemope)
- **Ptahhotep**: pPrisse (pBN 186–194, c. 1850–1800 BCE; 37 maxims, 644 verses in Žába's count). AED 3,060 words, ≈0% lost (verified). Junge 2003 (OBO 193, OA).
- **Kagemni**: end of pPrisse (294 words).
- **Merikare**: see 2.2.
- **Amenemhat**: the murdered king's bitter advice, "trust no brother". pMillingen 18% lost, but pSallier II and ostraca fill it.
- **The Loyalist Instruction**; **A Man for his Son**.
- **The Satire of Trades (Duaf/Khety)**: composed 12th dyn.; pSallier II, pAnastasi VII, many ostraca.
- **Any**: pBoulaq 4, 21st–22nd dyn.; composed 18th dyn.; AED 2,876 words.
- **Bible parallels:**
  - Ptahhotep's epilogue (the son who hears reaches old age) ↔ **Ex 20:12 / Deut 5:16** (typological).
  - "Do not add, do not take away" ↔ Deut 4:2, 13:1 (debated).
  - Any: "double the bread you give your mother, carry her as she carried you" ↔ Ex 20:12; "beware a woman from abroad" ↔ Prov 7 (accepted typological).
  - Duaf ↔ **Ben Sira 38:24–39:11** (accepted adaptation).
  - Merikare: "the character of the upright is more acceptable than the ox of the evildoer" ↔ 1 Sam 15:22, Prov 21:3.
- *Soul:* the ethic of maat, speech and silence, and the scribe's snobbish humour (Duaf).
- *Hebrew:* **Shupak 2016** covers all except Duaf (verify). So a new translation adds the line-by-line apparatus, not first access.
- *Benefit:* MEDIUM / HIGH. *Recommendation:* translate after Amenemope (Ptahhotep and Any first).

### 2.12 The Eloquent Peasant
**Middle Egyptian · 12th dyn. · R (Ramesseum A), B1 (pBerlin 3023), B2 (pBerlin 3025), Bt · B1 3,161 words, about 2% lost (verified).**
- *What it is:* A peasant robbed by an official's servant makes nine petitions. The magistrate withholds justice on purpose, so that Pharaoh may enjoy his eloquence. "Do justice for the lord of justice"; "the balance does not tilt"; the official as a "rudder", a "plumb-line".
- *Bible parallels:* **Lev 19:15, 35–36**; Ex 23:6–8; **Deut 16:18–20, 24:14–15**; Amos 5. Typological, but rich in shared images.
- *Base:* AED; Nederhof (82 pp., verified); Parkinson 1991 (©).
- *Benefit:* MEDIUM / HIGH. *Recommendation:* translate (medium size, complete when the versions are combined).

### 2.13 Wenamun
**Late Egyptian · events c. 1075 BCE (year 5 of the "Renaissance" era), ms pMoscow 120 (21st–22nd dyn.) · 2 pages, 3,044 words; ending lost.**
- *What it is:* Robbed at Dor (a Tjeker town), Wenamun is snubbed for weeks by Tjekerbaal, prince of Byblos. Then "the god seized" a young man, who in ecstasy demands that Wenamun be received. He is humiliated over the price of cedar, and at last driven to Alashiya.
- *Bible parallels:* **Num 11:25–29**, 1 Sam 10:5–13, 19:20–24 (ecstatic prophecy in the Levant: accepted background); Gen 10 (Byblos, Dor, the Sea Peoples); 1 Kgs 5 (cedar trade).
- *Base:* AED (verified), Ramses legacy/188 (verified).
- *Benefit:* MEDIUM / HIGH. *Recommendation:* translate.

### 2.14 Horus and Seth (pChester Beatty I recto)
**Late Egyptian · ms Ramses V, c. 1145 BCE · 16 pages, 4,776 words, about 1% lost.**
- *What it is:* An 80-year lawsuit before the Ennead over Osiris' throne. Isis' disguises and tricks; Hathor exposes herself to cheer the sulking Re; the lettuce-and-semen episode; the stone boats; at last Osiris threatens from the underworld.
- *Bible parallels:* a divine court that deliberates (**Gen 1:26** "let us"; 11:7; Deut 32:8; Ps 82; 1 Kgs 22:19); sexual dominance as humiliation (Gen 9:20–27, debated); Gen 3 (trickery).
- *Soul:* the gods as comic, petty and litigious: a window on Egyptian humour.
- *Base:* AED, Ramses (verified).
- *Benefit:* MEDIUM / HIGH. *Recommendation:* translate (large, complete).

### 2.15 Chester Beatty III Dream Book
**Middle Egyptian with Late forms · composition date debated (Gardiner: perhaps 12th dyn.; Szpakowska: NK) · pBM EA 10683 recto, early 19th dyn. (c. 1275 BCE) · about 11 columns; good and bad dreams, each line "If a man sees himself in a dream … good/bad: it means …" (count to verify).**
- *Bible parallels:* **Gen 37:5–11, 40:8–19, 41:1–36**. Interpretation proceeds by **wordplay and association**, as with Joseph's baker and cupbearer. The *ḥartummim* of Gen 41:8, 24 are the same lector-priest class. Consensus: accepted (Szpakowska 2003; Noegel 2007, *Nocturnal Ciphers*).
- *Soul:* what Egyptians feared at night.
- *Base:* **not open.** Gardiner 1935 *HPBM III* (©; US-PD only from 2031). Not in AED (verified). Check the TLA v20 web by hand.
- *Benefit:* **HIGH / HIGH**. *Recommendation:* record. Translate only if a usable base is found (TLA v20 by hand, within its 10-page rule, is too little for a full text).

### 2.16 Medical and magical texts
- **Edwin Smith papyrus** (c. 1600 BCE, copy of an older text): 48 surgical cases in a fixed form: "If you examine a man with [a wound] …, you shall say about him: 'one with …, an ailment I will treat / I will contend with / not to be treated'".
  - Bible: ↔ **Lev 13–14**: "if a man has on the skin of his flesh … the priest shall see … and pronounce him *ṭame*". The casuistic, diagnostic structure is typological, but an exact formal match for the Leviticus priority block.
- **Ebers** (c. 1550 BCE; 110 pages, about 877 sections).
- **Isis and the Secret Name of Re** (pTurin CGT 54051 + Chester Beatty XI, 19th–20th dyn.): Isis kneads **a serpent from the earth and Re's spittle**; it bites him; he yields his secret name to be healed.
  - Bible: ↔ Ex 3:13–15, Gen 32:30 (the name withheld), Gen 3:1 (a serpent of earth), Gen 2:7 (earth + divine fluid). Typological; MED-HIGH for Gen 2–3.
- **Leiden I 343+345, 346, 349** (scorpion and epagomenal spells; Ramses verified); the **Metternich stela** (30th dyn.; Isis and the seven scorpions).
- *Base:* AED (Ebers 53 entries, Edwin Smith verified); Ramses (Leiden); Pleyte & Rossi 1869–76 (Turin; PD); Borghouts 1978 (©); Ritner 1993 (SAOC 54, ISAC free – reported).
- *Risk:* technical vocabulary (plants, diseases), so medium-high.
- *Benefit:* MED-HIGH / MED-HIGH. *Recommendation:* translate Edwin Smith (a selection of cases) with Lev 13, and Isis and Re.

### 2.17 Autobiographies and vizier texts
- **The texts:**
  - **Weni** (Abydos, 6th dyn., c. 2300 BCE; Urk. I 98–110): campaigns against the "sand-dwellers" of the Levant.
  - **Harkhuf** (Aswan, c. 2250 BCE): Pepi II's letter, wild with delight over a dancing pygmy.
  - **Ankhtifi** (Moʿalla, c. 2120 BCE): "all Upper Egypt was dying of hunger, every man ate his children" ↔ Gen 41:54–57, 2 Kgs 6:28–29.
  - **Ahmose son of Abana** (El-Kab, c. 1520 BCE): expulsion of the Hyksos ↔ the Hyksos–Exodus tradition (Manetho/Josephus; debated).
  - **Rekhmire** (TT 100, c. 1430 BCE): the "Installation" and "Duties of the Vizier".
- **Bible parallels:** Joseph's investiture ↔ **Gen 41:40–44** (the vizier "second only to the king"; the ring, fine linen, the gold collar, the second chariot, the cry *ʾabrekh*). Accepted background (Redford 1970; Vergote 1959; Hoffmeier 1997).
- *Base:* Sethe, *Urkunden* I/IV (PD; Sethe d. 1934); Nederhof Urk. IV 1–55; Lichtheim OBO 84 (OA, verified); TLA (gated). The AED tomb-inscription corpus (5,644 texts) contains the OK biographies (verify per text; the names are not in its literary concordance).
- *Benefit:* MEDIUM / HIGH. *Recommendation:* an excerpt corpus: Rekhmire for Gen 41; Harkhuf and Ankhtifi for the soul.

### 2.18 Setne Khamwas I and II (Demotic)
- **Setne I** (pCairo CG 30646, Ptolemaic; first columns lost): Prince Khaemwese steals the Book of Thoth from the tomb of Naneferkaptah, is seduced and humiliated by Tabubu, and returns the book.
- **Setne II** (pBM EA 10822, 1st c. CE): his miraculous son Si-Osire tours the underworld, where a rich man's fate is reversed with a poor man's (↔ **Luke 16:19–31**: Gressmann 1918, accepted as a parallel). He then defeats a Nubian sorcerer in a contest of magic (↔ **Ex 7–8**, typological).
- *Base:* **Griffith 1900, *Stories of the High Priests of Memphis*** (PD; archive.org Google scans, catalogue verified); TLA Demotic (sentences present in the HF set, verified; full text gated); Lichtheim III; Ritner in Simpson.
- *Feasibility:* LOW-MED (Demotic; an old base).
- *Benefit:* MEDIUM / HIGH. *Recommendation:* second wave, after Middle/Late Egyptian experience.

### 2.19 Demotic wisdom: Ankhsheshonq and Papyrus Insinger
- **Ankhsheshonq** (pBM EA 10508, late Ptolemaic): a frame story (a priest jailed for not reporting a plot writes maxims for his son on potsherds), then about 550 one-line maxims. "Do a good deed and throw it in the water; when it dries you will find it" ↔ **Eccl 11:1** (accepted typological). Earthy peasant humour.
- **Insinger** (pLeiden F 1995/1.1, 1st c. CE): 25 numbered "teachings", on fate and fortune ("the god"), moderation ↔ Ben Sira.
- *Base:* TLA Demotic (gated; Ankhsheshonq sentences in the HF set, verified); Glanville 1955 (©); Lexa 1926 (Insinger; US-PD, Czech © to 2031); **Lichtheim OBO 52 (OA, verified)**, with translations and a comparison with Ben Sira.
- *Benefit:* LOW-MED / HIGH. *Recommendation:* second wave.

### 2.20 Pyramid Texts
**Old Egyptian · composition partly before Unas: oral liturgy, impossible to date closely (some spells may go back to the Early Dynastic period: Allen; Hays) · earliest: Unas pyramid, c. 2350 BCE (TLA date range 2375–2345) · Unas 228 spells; all pyramids up to the queens of Pepi II, about 800 spells (Allen's numbering PT 1–*806) · Unas excellent; later pyramids fragmentary.**
- *What it is:* Spells for the dead king's resurrection, ascent and offerings: the "Cannibal Hymn" (PT 273–274), ladders and ferrymen to the sky, and **serpent spells** (PT 226–243 on the west gable of Unas's burial chamber, verified on Pyramid Texts Online).
- *Bible parallels:*
  - Gen 2:4b–5 ("not yet", PT 571/486);
  - Gen 1:2 (Nun);
  - Gen 28:12 (the ladder of the gods, PT 304/478: typological);
  - **Gen 3 and 1:21**: serpents. **Steiner 2011, *Early Northwest Semitic Serpent Spells in the Pyramid Texts*** (HSS 61) argues that some serpent spells (PT 232–238 and others; spell list to verify) are **Semitic (Canaanite) incantations written in hieroglyphs**, the oldest Semitic texts known. Debated, but a published, serious claim.
- *Soul:* the oldest religious corpus on earth: a king who "eats the gods", joins the stars, and is warned against snakes.
- *Base:*
  - AED: 1,378 text records, 757 distinct spells (verified).
  - **Allen 2013, *A New Concordance of the Pyramid Texts***, vol. I with a full transcription; free PDF on `isac-idb-static.uchicago.edu` (verified, 305 pp., "freely available via the internet"), ©.
  - Sethe 1908–22 (PD, archive.org verified catalogue).
  - Pyramid Texts Online (Vincent Brown; Unas only; English modernized from Piankoff 1968; verified – a reading aid, not a base).
  - Translations: Allen 2015 (SBL WAW 38, paid); Faulkner 1969.
- *Feasibility:* MED-LOW: archaic, allusive.
- *Benefit:* MED-HIGH / HIGH. *Recommendation:* Unas's serpent spells and the cosmogonic spells inside the creation corpus (2.2); the whole of Unas later, as a "soul" project.

### 2.21 Coffin Texts (selected spells)
**Middle Egyptian · c. 2100–1700 BCE (contemporary coffins from Deir el-Bersha, Asyut, Beni Hasan, Meir, etc.) · 1,185 spells (de Buck) · varied preservation (many duplicates).**
- *Key spells:*
  - **CT 1130** (the four good deeds; see 2.2);
  - **CT 75–83** (Shu as breath, Atum alone and inert in Nun);
  - **CT 714** ("I was alone in Nun …");
  - CT 261 (Heka, the creative magic);
  - CT 162 (the four winds);
  - CT 335 (= BD 17);
  - **CT 1029–1130, the Book of Two Ways** (the oldest map of the beyond).
- *Bible parallels:* CT 1130 ↔ **Gen 1:27, 6:5, 8:21** (evil comes from the human heart, not the god's command), Gen 2:7. Typological; much cited (Lichtheim I; Allen 1988 *Genesis in Egypt*, YES 2).
- *Base:* **de Buck I–VII** (ISAC OIP 34, 49, 64, 67, 73, 81, 87: free PDFs, verified 21–79 MB each) and **Allen VIII** (OIP 132, 2006: PT in MK sources). All are **hieroglyphic hand-copies** with **no transliteration**. Not in AED (verified). Transliterations: Allen 1988 (creation spells, ©); Carrier 2004 (French, ©; verify); Faulkner 1973–78 and Barguet 1986 (translations only).
- *Feasibility:* LOW-MED. Do a few short spells only, from a published transliteration checked against de Buck's plates.
- *Benefit:* **HIGH** (CT 1130) / HIGH. *Recommendation:* CT 1130 and CT 75–80 inside the creation corpus. Do not attempt more.

### 2.22 The Great Hymn to the Aten and the Amun hymns
- **Great Hymn** (tomb of Ay, TA 25 at Amarna; composed under Akhenaten, c. 1350–1340 BCE; 13 columns, about 110 verses; parts now destroyed, known from Bouriant's and Davies's copies).
  - **Content:** night as death, with lions and serpents abroad; dawn: people wake, wash, go to work; the fish leap; ships sail; the chick in the egg; the many peoples and tongues; "how manifold are your works".
  - **Bible:** **Ps 104:20–30** (night, lions seeking food, man going to his labour, ships and Leviathan, "how manifold are your works"). The closest Egyptian–psalm parallel; direct dependence is debated (via Canaanite mediation: Dion 1991; Assmann). Gen 1 (sequence of creatures; Gen 11:7–9 many tongues): typological.
- **Amun hymns:** Leiden I 350 (year 52 of Ramses II, c. 1238 BCE; "chapters" numbered 1–9, 10–90, 100–900: Amun hidden, "one who made himself into millions"); pBoulaq 17 (18th dyn.); **Chester Beatty IV** ("monotheistic hymns"; in AED, 1,682 words, verified).
- *Base:* the **Great Hymn record in AED is empty** (verified); other Amarna hymns (the "Short Hymn", prayers) are in AED. Davies 1908, *Rock Tombs of El Amarna* VI (PD; archive.org); Sandman 1938 (©); TLA v20 (by hand). Nederhof "Hymn to the Sun" = the Suti and Hor stela (BM 826), a pre-Amarna solar hymn (verified).
- *Benefit:* MEDIUM (Ps 104 is outside the Torah; Gen 1 typological) / HIGH. *Recommendation:* translate if a clean transliteration of the Great Hymn is obtained (TLA v20 by hand is acceptable for 13 columns).

### 2.23 Shorter Late Egyptian stories (runners-up)
- **Astarte and the Sea** (pAmherst 9 + pBN 202, 18th dyn.; very lacunose; AED 761 words, 141 gaps): Yam (the Sea) demands tribute from the Ennead; Astarte is sent. ↔ Gen 1:2 (the sea as power), the Baal Cycle, Ps 74. MED-HIGH for the *tanninim* question, but fragmentary.
- **The Doomed Prince** (Harris 500 verso; the end lost): fated to die by crocodile, snake or dog.
- **Truth and Falsehood** (Chester Beatty II): an allegory of the blinding of Truth.
- **The Taking of Joppa** (Harris 500 verso): soldiers hidden in baskets.
- **Apophis and Seqenenre** (Sallier I): the Hyksos king complains of hippopotami noise. The Hyksos–Exodus background; LOW.

All are in AED and Ramses (verified). Low to medium Bible value, medium-high Soul. Translate in a "Late Egyptian stories" omnibus.

---

## 3. Also considered

- **Amarna letters** (c. 1360–1332 BCE; 382 tablets): Akkadian cuneiform (peripheral Akkadian with Canaanite glosses). They belong to the **Levant / Mesopotamian-script** set, not here: the Abdi-Ḫeba letters from Jerusalem, the *ʿApiru*. Hebrew: Cochavi-Rainey 2005 (verify).
- **Egyptian–Hittite treaty** (Ramses II and Ḫattušili III, 1259 BCE): the Egyptian version is in Ramses Online (verified). Cover it together with the Akkadian version in the Anatolia/Levant treaty set. Covenant form ↔ Deut.
- **Execration Texts** (Berlin bowls, Sethe 1926; Brussels and Saqqara figurines, Posener 1940; Mirgissa; c. 1900–1800 BCE): curse lists naming Levantine rulers and towns (Jerusalem as *Rwšꜣlmm*, Ashkelon, Shechem?). Too short and formulaic for translation. Cite in the Gen 10–14 parallels index only.
- **Famine Stele** (Sehel, Ptolemaic c. 200 BCE, set in Djoser's 18th year; 32 columns): seven years of low Nile ↔ Gen 41. A Ptolemaic pseudepigraph (a priestly land claim), not an Old Kingdom record. Too late to be a source of Genesis; MEDIUM as an analogue (with Gilgameš VI's seven years). Not in AED (verified). Base: Barguet 1953 (©).
- **Netherworld books** (Amduat, Book of Gates, Book of Caverns, Book of the Night; NK royal tombs): the Apophis battles ↔ Leviathan and *tanninim*; Soul HIGH, but very large and technical. Bases are Hornung's (©); AED has little (two Amduat hits). Later.
- **Great Nile Hymn** (in AED, several mss): Soul MED-HIGH; Bible LOW (Gen 2:10–14 typological). A runner-up.
- **Late Period and Demotic narratives:** the Myth of the Sun's Eye (fables of the lion and the mouse; Soul HIGH), the Petition of Peteese (Rylands IX; a family saga), the Book of Thoth (Jasnow and Zauzich 2005, ©), the Inaros/Petubastis cycle (heroic tales), the Prophecy of the Lamb and the Demotic Chronicle (eschatology). Medium Soul, low Bible, Demotic. Second wave at best.
- **Potter's Oracle** (Greek), **Manetho** (Greek), **Hermetica** (Greek), **Joseph and Aseneth** (Jewish Greek): not Egyptian-language texts. Other agents.
- **Elephantine papyri** (Aramaic, 5th c. BCE): Levant/Aramaic agent.
- **Coptic** (3rd c. CE onward): almost all Christian or Gnostic literature (Nag Hammadi, Shenoute), too late and heavily reworked. Exception for the soul: the Coptic magical papyri and the Old Coptic horoscopes. Tools: Coptic Scriptorium (CC BY, verified 200), the Comprehensive Coptic Lexicon (CC BY-SA), Coptic Dictionary Online (host blocked). Not recommended.
- **Meroitic** (Kush, c. 300 BCE–400 CE): the script was deciphered (Griffith 1909–11), but the language is barely understood (Rilly: a Northern East Sudanic language). Translation is impossible beyond formulae. **Excluded.**
- **Hoaxes and pseudo-texts to avoid:**
  - Velikovsky's "Ipuwer = Exodus" (a misuse of a real text);
  - the "Emerald Tablets of Thoth" (Doreal, 1930s, a modern fabrication);
  - the "Kolbrin Bible" (modern);
  - the "Tulli Papyrus" (UFO hoax, no original exists);
  - occult "Book of Thoth" editions;
  - "Hebrew/Exodus" decipherments of the Wadi el-Hol or Serabit inscriptions by amateurs (the genuine Proto-Sinaitic material belongs to the Levant agent).
- **Lichtheim's AEL, Faulkner's PT/CT/BD, Simpson, Parkinson:** copyrighted rank-3 checks only; no legal free copies (archive.org copies are lending-only or unauthorized → recorded, not used).

---

## 4. Access notes

Status codes are from `curl -s -o /dev/null -m 20 -w "%{http_code}"` on 2026-10-21. "000" = connection reset by the proxy (policy denial or no route).

| Host | Result | Notes |
|---|---|---|
| `raw.githubusercontent.com/simondschweitzer/aed-tei/master/…` | **200** (verified, 84 files fetched) | AED-TEI per-file access; IDs from `concordance_name_text_id.csv`. **`codeload.github.com` → 403** (no repo zip); `github.com` HTML → 403; `gh api` → limited to this session's repos |
| `zenodo.org` (record 3580939) | **200** (API + file HEAD verified, 176.9 MB) | the bulk zip of AED-TEI v1.0: the recommended way to restore it (a fetch-recipe candidate) |
| `huggingface.co/datasets/thesaurus-linguae-aegyptiae/*` | **200** (3 JSONL files downloaded) | CC BY-SA; intact sentences only |
| `thesaurus-linguae-aegyptiae.de` | 200 but **JS bot-verification wall** | `/x/data?...` "for crawlers" is a **decoy** (fake records): never use. WebFetch also stops at the wall. Human browser only |
| `api.thesaurus-linguae-aegyptiae.de` | **200** (verified) | `/thesaurus/{type,id}`, `/mdc2unicode?mdc=A1` → 𓀀 (verified), `/flexcodes/bts`. No texts |
| `aaew.bbaw.de/tla/` (old TLA v16) | **200** (login page verified) | guest login ("guest"/"guest") after accepting the terms; not tested |
| `aaew.bbaw.de/daten-veroeffentlichungen` | **200** (verified) | list of the raw-data releases and their licences |
| `ramses.ulg.ac.be` | **200** (verified) | `/json/text/grid?filter=&page=N` (302 texts, 31 pages); `/text/legacy/<id>` and `/item/<n>` give transliteration, glosses and French |
| `sites.cs.st-andrews.ac.uk/people/mn31/egyptian/texts/corpus/pdf/` | **200** (verified, 10 PDFs fetched) | the old `mjn.host.cs.st-andrews.ac.uk` → 308 redirect |
| `isac.uchicago.edu` + `isac-assets.s3.amazonaws.com/isac-publications/<oipNN>.pdf` | **200** (HEAD verified for OIP 34, 49, 64, 67, 73, 81, 87, 132, SAOC 37) | the old `/sites/default/files/uploads/shared/docs/*.pdf` paths 301 to landing pages. The S3 bucket root is 403 (normal) |
| `isac-idb-static.uchicago.edu` | **200** (Allen 2013 PT concordance vol. I fetched) | volumes II–VI on the same host (reported) |
| `pyramidtextsonline.com` | **200** (verified) | Unas only; Piankoff-based English |
| `archive.org` (advancedsearch API) | **200** (verified) | PD editions located (catalogue only): Sethe 1908, Naville 1886, Gardiner 1909, Griffith 1900, Griffith–Thompson 1904, Lange 1925, Petrie 1897, Davies (Amarna). Check each item's rights and upload source before downloading |
| `www.zora.uzh.ch` (DSpace API `/server/api/discover/search/objects`) | **200** (verified) | OBO OA volumes (Hornung OBO 46, El Hawary 243, Junge 193, Lichtheim 52/84, Shupak 130) |
| `totenbuch.awk.nrw.de` | 200 (JS app) | the Totenbuch-Projekt witness archive; registration |
| `benyehuda.org` | 200 | the Hebrew BD excerpts (collection 17990); the site search is JS-only |
| `data.copticscriptorium.org`, `thotsignlist.org`, `simondschweitzer.github.io/aed/`, `oapen.org`, `persee.fr`, `jstor.org`, `brill.com`, `ifao.egnet.net`, `jsesh.qenherkhopeshef.org`, `ees.ac.uk`, `topbib.griffith.ox.ac.uk`, `papyri.info` | 200 | — |
| `www.griffith.ox.ac.uk`, `www.trismegistos.org`, `demotisches-woerterbuch.de`, `www.dem-pal.uni-wuerzburg.de`, `www.dwl.uni-wuerzburg.de`, `www.reshafim.org.nl`, `cfeetk.cnrs.fr`, `vega.ulb.ac.be`, `www.digital-egyptology.org`, `sae.saw-leipzig.de`, `www.totenbuch-projekt.uni-bonn.de`, `www.digi.ub.uni-heidelberg.de`, `propylaeum-ebooks.ub.uni-heidelberg.de`, `mizraim.ehess.fr`, `refubium.fu-berlin.de`, `www.coptic-dictionary.org`, `egyptology.hum.ku.dk`, `demotic.isac.uchicago.edu`, `www.egyptology.ox.ac.uk` | **000** (connection reset) | need allowlisting; the most useful are **Trismegistos** (Demotic metadata), **Heidelberg digi/propylaeum** (OA Egyptology books, Wb volumes), **refubium** (Coptic lexicon), **Griffith Institute** |
| `www.ucl.ac.uk/museums-static/digitalegypt/`, `www.britishmuseum.org`, `www.cambridge.org`, `www.sbl-site.org`, `www.academia.edu`, `www.nli.org.il` (+ `merhav`, `api`), `journals.uchicago.edu`, `www.haaretz.co.il` (WebFetch) | **403** | NLI blocks scripts, so the Hebrew catalogue checks were done via search snippets only |

**For a future session's allowlist** (Egypt work): `raw.githubusercontent.com`, `zenodo.org`, `huggingface.co`, `ramses.ulg.ac.be`, `isac-assets.s3.amazonaws.com`, `isac-idb-static.uchicago.edu`, `www.zora.uzh.ch`, `archive.org`, and ideally `www.trismegistos.org`, `digi.ub.uni-heidelberg.de`, `refubium.fu-berlin.de`, `nli.org.il`.
**Practical recipe:** download the AED-TEI zip from Zenodo once, into `sources/AED-TEI/` (CC BY-SA, committable with attribution, like ORACC). Write a small `aed2md.py` (TEI → line-numbered transliteration with the lemma glosses; the German `_st` kept in a separate, hidden-on-first-pass column).

---

## 5. Sources consulted

- Project files: `translation-guidelines.md` §1–3, §8; `curated-translation-candidates.md`; `curation-surveys/relevance-survey--2026-10-16.md`; `availability-survey--2026-10-16.md`; `sources/Hebrew-translations--records-only/README.md`.
- AED-TEI: https://github.com/simondschweitzer/aed-tei (README and concordance via raw.githubusercontent.com); https://doi.org/10.5281/zenodo.3580939 ; AES README: https://raw.githubusercontent.com/simondschweitzer/aes/master/README.md
- TLA raw-data page: https://aaew.bbaw.de/daten-veroeffentlichungen ; APIs: https://aaew.bbaw.de/digitale-angebote/apis/ , https://api.thesaurus-linguae-aegyptiae.de/ ; old TLA: https://aaew.bbaw.de/tla/ ; licence terms (search snippet): https://thesaurus-linguae-aegyptiae.de/info/licenses ; TLA Amenemope records (search): https://thesaurus-linguae-aegyptiae.de/text/5JO44VJZERAB3HQUHMFSMNXH6I
- HF datasets: https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-Earlier_Egyptian_original-v18-premium (+ tla-demotic-v18-premium, tla-late_egyptian-v19-premium)
- Ramses Online: https://ramses.ulg.ac.be/site/corpus , https://ramses.ulg.ac.be/json/text/grid , https://ramses.ulg.ac.be/text/legacy/2
- Nederhof: https://sites.cs.st-andrews.ac.uk/people/mn31/egyptian/texts/corpus/pdf/
- ISAC: https://isac.uchicago.edu/publications/egyptian-coffin-texts-7-texts-spells-787-1185 ; https://isac-assets.s3.amazonaws.com/isac-publications/oip87.pdf (and oip34 … oip132, saoc37); Allen 2013: https://isac-idb-static.uchicago.edu/multimedia/301963/PT%20I%20(Introduction).pdf ; CDD project: https://isac.uchicago.edu/research/projects/chicago-demotic-dictionary-cdd
- Pyramid Texts Online: https://pyramidtextsonline.com/translation.html
- ZORA OBO records: https://www.zora.uzh.ch/handle/20.500.14742/131460 (Hornung), /141485 (El Hawary), /140410 (Lichtheim 1983), /133552 (Lichtheim 1988), /142684 (Lichtheim 1992), plus Junge 2003 and Shupak 1993 (found via the ZORA API)
- archive.org catalogue: identifiers `diealtaegyptisch03sethuoft`, `dasaegyptischeto00naviuoft`, `admonitionsofegy00gard`, `storieshighprie00grifgoog`, `LangeHO1925`, `UGAAe10.2`, `sixtemplesattheb00petruoft`, `the-demotic-magical-papyrus-of-london-and-leiden-v.-1`
- Hebrew: https://he.wikipedia.org/wiki/סיפורו_של_שנהאת (Grintz 1975); https://greenbrothers.co.il/products/סיפורים-מזמורים-משלים-מספרות-מצרים-העתיקה ; http://mikrarevivim.blogspot.com/2016/05/blog-post_17.html (Shupak 2016); https://he.wikipedia.org/wiki/פפירוס_האריס_500 (Fox 1985); https://benyehuda.org/collections/17990 (Amir Or); https://simania.co.il/bookdetails.php?item_id=60464 (Budge, Astrolog); https://www.haaretz.co.il/literature/2006-06-21/ty-article/0000017f-e804-df2c-a1ff-fe55e7b90000 (Goldwasser, not opened); https://thetorah.co.il/article/psalm-104-and-its-parallels-in-pharaoh-akhenatens-hymn ; https://www.nli.org.il/en/books/NNL_ALEPH990018007920205171/NLI (Shirun-Grumach, JSE)
- Scholarship relied on from knowledge (not re-checked today):
  - Joseph and Exodus: Redford 1970 (VTSup 20), Redford 1992; Hoffmeier 1997; Vergote 1959; Hollis 1990/2008; Quaegebeur 1987 and Muchiki 1999 (*ḥartummim*); Szpakowska 2003; Noegel 2007; Hasel 1994 (BASOR 296).
  - Wisdom and Proverbs: Erman 1924; Fox 2009 (AYB); Shupak 2005; Laisney 2007.
  - Pessimistic literature: Enmarch 2008; Gardiner 1909.
  - Creation and cosmology: Allen 1988 (YES 2); Ockinga 1984 (ÄAT 7); Hoffmeier 1983 (JANES 15); Atwell 2000 (JTS); Steiner 2011 (HSS 61).
  - Hymns: Dion 1991 (ZAW 103).
  - Setne: Gressmann 1918.
