# The program of Rounds 8–27 – for the user's approval (2026-11-02)

The program is `translation-program.md` (20 rounds, 118 runs, 164 candidates out of 272). It is ready for execution: each
round has its table (texts, corpus, verified base, size, new language, what it completes, which runs may run side by
side), the hosts are in `domains.txt`, and nothing is started. These are the decisions the lead took that need your
approval, and the questions only you can answer. A "no" to any decision is one edit of `scripts/runs.py` and a re-run of
the scheduler (`translation-program.md`, "Changing the program").

## 1. The large texts (≈ 3,000 lines or more) – the lead's decisions
**Translated whole** – these are 56 of the 118 runs, so they shape the program most. **The ones split over two or more
runs are scheduled last** (the user, 2026-11-03): Rounds 8–16 hold no such text; they fill Rounds 17–26, the biggest
last (the Iliad and the Odyssey close the program):

| Text | Size | Runs | From round | Why |
|---|---|---|---|---|
| **The Rigveda, Books 1, 8, 9, 10** (with Books 2–6, which are not large, and Book 7 in Round 7: the whole Rigveda) | 3,760–7,745 pādas each; 39,832 in all | 11 (+ 5 for Books 2–6) | 17 | the oldest verbatim oral tradition on the list; the user's rule "completing means the whole" |
| **The Atharvaveda** (Śaunaka) | 5,838 stanzas | 4 | 19 | the everyday charms, love, birth, death of the Vedic age |
| **The Iliad** | 15,687 lines | 6 | 23 | the central text of Greek antiquity (C3 5, C4 5) |
| **The Odyssey** | 12,107 lines | 4 | 26 (the last) | the same |
| **The Shijing** | 305 poems, 7,805 lines | 3 | 18 | China's oldest poetry, its central canon |
| **The Kojiki** | 41,521 characters + 112 songs | 3 | 21 | completes the dossier's excerpt; Japan's central text (the exception) |
| **The Popol Vuh** | 8,717 lines | 3 | 24 | the Americas' one central text (the exception; the last round) |
| **The Vīdēvdād** | 913 §§, 26,264 words | 2 | 18 | completes Vd 2 |
| **The Shangshu**, the authentic chapters | 3,810 lines | 2 | 19 | the oldest Chinese prose (Western Zhou speeches) |
| **The Analects** | 3,920 lines | 2 | 23 | |
| **The Sutta Nipāta** | ≈ 4,600 pādas | 2 | 20 | the oldest Pali verse |
| **The Oresteia** | 3,796 lines | 2 | 21 | a trilogy is one whole |
| **Plato's first tetralogy** (Euthyphro, Apology, Crito, Phaedo) | 40,910 words | 2 | 21 | the trial and death of Socrates as one whole |
| **The Yasna's Young Avestan chapters** | ≈ 12,300 words | 1 | 8 | completes the Yasna (Round 7's Gāthās) |
| **The Bṛhadāraṇyaka** and **the Chāndogya Upaniṣad** | ≈ 3,100 / 3,200 clauses | 1 + 1 | 10–11 | |
| **The Yašts**, all 21 | ≈ 1,007 stanzas | 1 | 20 | |
| **The Zhuangzi's Inner Chapters** (borderline) | ≈ 3,000 lines | 1 | 15 | |
| **SAA 10**, the scholars' letters to Esarhaddon and Assurbanipal (needs ORACC) | c. 390 letters (reported) | 2 | 27 (the last: it waits for ORACC) | the court's fears and cures, unguarded (eclipses, the substitute king, the king's grief); split by the scholars' professions |
| **The Edda's mythological poems** (large only by printed half-lines) | ≈ 2,530 long lines | 1 | 14 | completes the dossier's Hymiskviða |

**A self-contained part instead of the whole:**
- **Šumma ālu**, the tablets on human behaviour (T. 80–120), and the Venus section of Enūma Anu Enlil: only these parts
  are edited on eBL (1 run, Round 14).
- **The Amarna letters**, the great kings' correspondence (EA 1–44, 2,695 lines), not all 382 letters (1 run, Round 16).
- **The Mahābhārata**: three whole episodes (the Bhagavad Gītā, Nala and Damayantī, Sāvitrī) instead of the epic
  (1 run, Round 17).

**Declined** (in the reserve, with reasons): the Pyramid Texts as one corpus (the Unas pyramid is taken whole instead);
the KI.LAM festival; the Hittite letters; the Śatapatha Brāhmaṇa (its two excerpts stay excerpts); the Dīgha Nikāya; the
Mahābhārata and the Rāmāyaṇa whole; the Aeneid; Herodotus; Ovid's Fasti; the Man'yōshū; the Zuozhuan. **Kept in reserve**:
Pindar, the Mencius, the Shanhaijing. Also all the large texts recorded after 500 CE except the ones above (the Māori
song collection, I La Galigo, the Florentine Codex books, the Cantares, Beowulf, the Táin, the Edda's heroic poems …).

## 2. The program's shape – for a yes or a correction
1. **The cut:** score ≥ 58 (the criteria weighted in their order: `5·C1 + 4·C2 + 3·C3 + 3·C4 + 2·C5`), readable, with an
   open base; plus the exception, one central text for each culture the folder has not touched. 20 rounds is about
   four to five months at the past pace of about a round a week.
2. **The exception was applied sparingly** (your "the first option, with an exceptional consideration for the second"):
   in the program are the Kumulipo, the Māori cosmogony (Te Rangikāheke), the Edda's mythological poems, the Norito and
   the Kojiki, the Muʿallaqāt and the Popol Vuh. In the reserve are the rest of the Americas (the Florentine Codex,
   the Cantares, the Rabinal Achí …), Celtic (Old Irish is not readable with control here: eDIL does not answer), the
   Finnic runes, the skaldic poems, Snorri, the Nihon shoki and the Fudoki, the Tibetan and Old Turkic texts.
3. **Order:** the completions first (your rule), then by score, and **the texts split over two or more runs last**
   (Rounds 17–26; your instruction of 2026-11-03). The oldest cultures fill the early rounds (Egypt, Sumer, Akkad,
   Ḫatti, the Veda's family books, the Avesta); the new languages enter from Round 9 (Imperial Aramaic) to Round 24
   (K'iche'), at most two set-ups a round.
4. **The Avestan texts get their own corpus**, `האווסטה/`, from Round 7 on (a change to the Round 7 plan, so that the
   Rigveda's and the Avestan runs never edit one file); the Vedic renderings bind it.

## 3. Things only a person can do
1. **Save the Persée PDFs** – the only way to get Tell Fekheriye and Sefire, two of the most important Aramaic
   inscriptions. *Persée* (`www.persee.fr`) is a French public portal of scholarly journals; their first
   editions appeared in journals that Persée has digitized, and anyone may read them and download their PDFs – but its server refuses downloads
   by a script (it answered 403, then 500), so a session cannot fetch them, and the rules forbid working around that.
   A person can, in a browser, in a few minutes, and there is no hurry: the run that needs them, LE6, is **the last round, Round 27**, dedicated to them (the user, 2026-11-03), so no other round waits for them.
   - **The articles** (open each link, then press the PDF / download button on the article's page):
     - Fekheriye: <https://www.persee.fr/doc/crai_0065-0536_1981_num_125_4_13895> (*CRAI* 1981) and
       <https://www.persee.fr/doc/syria_0039-7946_1983_num_60_3_6816> (*Syria* 1983);
     - Sefire: <https://www.persee.fr/doc/mesav_0398-3587_1960_num_15_1_1129> (*Mémoires … AIBL* 15, 1960),
       <https://www.persee.fr/doc/crai_0065-0536_1957_num_101_3_10773> (*CRAI* 1957), and "Les inscriptions
       de Hosn Sfiré", *Topoi* 16 (2009) – search its title on Persée (the link could not be looked up by script).
   - **Where to put them:** they are copyrighted (free to read, not free to republish), so they must **not** go into the
     public repository. Two ways, either is fine:
     - **Google Drive:** put the five PDFs in one Drive folder (e.g. `perush-persee`) and tell the Round 27
       orchestrator its name. Run LE3 then reads them through the Google Drive connector, which this account's sessions
       have; the orchestrator checks first that the run's session has it too.
     - **A local clone:** save them into the git-ignored folders `sources/Persee--Fekheriye/` and
       `sources/Persee--Sefire/`, and run LE6 in a local session.
   - Run LE3 (Round 16) translates the other Old Aramaic and Phoenician inscriptions without them; if the PDFs are never
     saved, Round 27 is simply skipped.
2. **The network allowlist:** add the 25 hosts added to `domains.txt` on 2026-11-02 (the session operator lists them at
   the start of every cloud session). `www.wehewehe.org` (the Hawaiian dictionary) shows a Cloudflare wall to scripts:
   the Kumulipo run (Round 17) can work without it, or a person saves the pages. Four runs read public-domain scans
   from archive.org (Ahiqar in Cowley 1923, ʿEzana in Littmann 1913, Aśoka in Hultzsch 1925, Gortyn in its 1885–86 editions):
   archive.org's download hosts change (`dn….archive.org`), so those runs need "Full" network access for a while, or a
   person saves the scans.
3. **ORACC fails TLS from the cloud** (curl exit 60, also with the proxy's CA bundle). The texts that need it as their
   base – the court poetry of Nineveh (SAA 3) and the scholars' letters (SAA 10) – are in **the last round, Round 27**,
   beside Fekheriye and Sefire, so that nothing else waits for it; if ORACC is still unreachable then, those runs are
   skipped (or run in a local session, where ORACC usually answers). The Sumerian runs (Rounds 8–14) only use ORACC's
   morphology (ePSD2) as an aid: they work without it; restoring its zip in a local session before them improves them.

## 4. Smaller questions (the lead has a default for each; say if you disagree)
1. **Sabaic without DASI** (run LE4): the confession texts and Karibʾil Watar's annals are read from the public-domain
   CIH and RES, checked per word on Sabaweb; DASI (which asks for an agreement before AI use) is not used. Default: go.
2. **Restricted or living traditions:** the Cherokee formulas, the Navajo chantways and the Zuni prayers were excluded
   as restricted (guidelines §2.3). The *Ayvu Rapyta* (Mbyá Guarani), the Iroquois Condolence and the Mansi bear-feast
   songs (a living, revived ritual) are in the reserve; default: they stay out.
3. **Classical Southeast Asia** (Old Javanese, Old Malay, Old Khmer, Cham) is excluded: after 500 CE, inside an imported
   Hindu-Buddhist writing culture, so the exception does not hold. Default: out.
4. **The size of Chinese and Japanese prose** is counted as about 4.6 characters a line (Kanripo's line-split texts);
   the runs are sized by it.
5. **"Consult only" sources** (DEAPS, Ramses, Nederhof's PDFs, TITUS's local-use texts) are used to check readings,
   never as a base or copied; the bases are open (CC or public domain).
6. **This curation ran outside the quota's time ranges**, at your request in this session; at most three survey agents
   worked at once, and the quota stayed `allowed` throughout.
