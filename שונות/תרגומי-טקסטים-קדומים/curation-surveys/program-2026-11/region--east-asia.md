# Region survey – East Asia (2026-11-02)

China, Japan, Korea, Tibet, Mongolia, the Old Turkic and Sogdian worlds. Survey agent `east-asia`, for the program of
2026-11 (`BRIEF.md`). It starts from `../world-survey--east-central-asia--2026-10-21.md`, whose Bible ratings are ignored,
and uses its facts only where they were checked again today. **Measured** (`(m)`) means counted today by a script on the
downloaded base. The scratch work (the clones, the pages, the counting scripts `shijing.py`, `krcount.py`, `zhouyi.py`,
`kojiki.py`, `otdo.py`) is in `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/east-asia/`.

**How Chinese and kanbun sizes are given.** Chinese prose has no verse lines. Kanripo's TLS texts split it into short
clause-lines, about 4.6 characters each (the authentic Shangshu has 17,507 characters in 3,810 lines). Where only
characters can be counted, the survey uses that ratio: **about 13,500 characters ≈ 3,000 lines, the `LARGE` threshold**.
Kanbun Japanese (the Kojiki, the Fudoki) is counted the same way.

## Key findings

- **China's own canon is the region's centre: the Five Classics and the Chuci.** The oldest content comes first: the
  *Zhou Song* hymns and the Western Zhou chapters of the *Shangshu* (c. 1000–900 BCE), and the *Zhouyi* line statements.
  The *Shijing* is the best single text in the region: oldest, most treasured, and the deepest view of the inner world.
  **It is `LARGE`: 305 poems, 7,805 lines (m)**, in four natural parts (Guofeng 2,918 · Xiaoya 2,456 · Daya 1,644 ·
  Song 787 lines). Daya and Song together (71 poems, 2,431 lines) are the oldest stratum and fit one run.
- **The Chuci core fits whole into runs.** The Nine Songs (266 lines), the Li Sao (376), the Tianwen (371), the two
  Summons (307) and the rest (1,188) make 2,508 lines (m) in all.
- **The Chinese base texts are open and countable.** The Kanseki Repository on GitHub states "Licensed as CC BY SA 4.0"
  (checked today on its GitHub organisation page; kanripo.org itself still answers 403). The TLS texts even carry
  stanza IDs (`# src: SHI 245.2`), which a verifier can check against. Every Chinese candidate below was cloned and
  counted. ctext.org was **not** used: its terms forbid bulk download.
- **Japan: the Kojiki whole is `LARGE`**: 41,521 characters without the 898-character preface (m), plus 112 songs.
  - Book 1 alone (14,073 characters, about 3,000 lines) is at the threshold. Its five cycles (m, approximate) are each
    one-run units.
  - The **Norito**: the whole of Engishiki book 8 is on zh.wikisource in the original senmyō script, with 27 prayers and
    11,065 characters (m). This was new today: the earlier survey had only the Ōharae.
  - The **Man'yōshū** is fully lemmatised in ONCOJ (CC BY 4.0, cloned): 4,693 items and 30,885 verse lines (m), given
    book by book.
- **The five surviving Fudoki are on zh.wikisource** (43,176 characters, m). So are Nihon shoki books 1–2 (21,643
  characters, m).
- **After 500 CE, the exception (`EXC`).**
  - It **holds best for the Orkhon inscriptions.** They are pre-Manichaean, pre-Islamic and Tengri-centred, in the Turks'
    own script: 212 stele lines and 5,710 runic words, measured on turkbitig.com. Radloff 1895 is PD on archive.org.
  - It **holds for the Kojiki and the Norito.** They are kami religion, and the guidelines themselves name "the Kojiki's
    songs".
  - It **holds partly for the Man'yōshū and the Old Tibetan Dunhuang texts.**
    - In the Man'yōshū, Buddhism and Chinese letters are already present in some poets (Okura, Tabito).
    - In Tibet, Buddhism had been the state religion from 779, but the Chronicle and the funerary rabs keep the older
      religion.
    - OTDO now answers, with **CC BY 4.0** texts: the Chronicle PT 1287 has 536 lines, only 16 of them with gaps (m).
- **The Secret History of the Mongols is the region's weak point in access.** The exception holds: there was no
  Buddhism yet, and Tengri and shamanic ritual were alive. But no open, machine-readable Middle Mongolian text was
  found.
  - zh.wikisource and Kanripo hold only the Ming Chinese **summary translation**. Wikisource's interlinear text stops
    after §1.
  - The original transcription is open only as a facsimile of images (altaica.ru).
  - It stays a candidate only if a transcription is keyed in.
- **Korea yields no candidate.**
  - The Gwanggaeto stele (414) is mostly campaign records, partly effaced, with no open text found.
  - The Hyangga readings are disputed, and the founding myths are late (1145/1280s) and reworked.
- **What is not reachable or not whole.**
  - The oracle bones are too short and broken: most charges run 10–30 characters, the graphs are disputed, and the only
    complete open corpus is a CC BY-NC-ND modern edition.
  - The excavated cosmogonies are short and have no open base: Taiyi sheng shui has 305 characters with a damaged end,
    Hengxian about 510, and the Chu Silk Manuscript is damaged.
  - The Tsinghua, Shuihudi and Mawangdui manuscripts have only copyrighted Chinese editions.
  - The Sogdian letters have no open original-language edition.
- **Reading confidence.**
  - Classical Chinese prose: high.
  - The Shijing and Chuci: medium to high. Their PD commentaries (Mao–Zheng–Kong, Zhu Xi, Wang Yi) are in Kanripo.
  - The Western Zhou gao and the bronzes: medium-low.
  - Old Japanese: medium-high with ONCOJ, medium without it (the Norito).
  - Old Turkic: medium. Old Tibetan: low-medium. Middle Mongolian: low until a transcription is keyed in.
- **Hebrew.** Only the philosophers have Hebrew translations (the Daodejing about 11 times; the Zhuangzi, Mencius,
  Analects and Yijing too), and about 40 Shijing poems. The Shangshu, Chuci, Kojiki, Norito, Man'yōshū as a whole,
  Orkhon and Old Tibetan texts have none (the earlier survey's check, not repeated).

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| east-asia-01 | The Shijing (Book of Odes), all 305 poems | Zhou China / Archaic Chinese | c. 1000–600 BCE | anthologised by c. 600–500 BCE | Anhui Univ. slips c. 350 BCE (58 Guofeng poems); Shanghai Museum *Kongzi shilun* c. 300 BCE; Fuyang slips 165 BCE | C | 305 poems, 1,288 stanzas, 7,805 lines, 31,871 characters (m) | good | Kanripo KR1c0001 (TLS text, Mao prefaces apart), https://github.com/kanripo/KR1c0001, CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 4 | 5 | 5 | 5 | LARGE | Guofeng 160 poems / 2,918 lines; Xiaoya 74 / 2,456; Daya 31 / 1,644; Song 40 / 787 (Zhou 31 / 380, Lu 4 / 247, Shang 5 / 160); Daya + Song 71 / 2,431 (the oldest stratum, one run) |  |  |
| east-asia-02 | The Kojiki, whole (preface + three books, with its 112 songs) | Yamato Japan / Old Japanese in kanbun and man'yōgana | 6th–7th c. CE (older myth) | 712 CE | Shinpukuji-bon 1371–72 | D | 41,521 characters + preface 898 (m); 112 songs / 1,041 lines (m, ONCOJ) | good | zh.wikisource 古事記/上卷, 中卷, 下卷 (Shinpukuji collation; PD text, page CC BY-SA), verified 2026-11-02; songs: ONCOJ KK.1–112, https://github.com/ONCOJ/data, CC BY 4.0, verified 2026-11-02 | medium-high | 1 EXC | 3 | 5 | 5 | 5 | LARGE | Book 1 (Age of the Gods) 14,073 characters + preface 898, in cycles (m, approx.): creation to Izanagi's washing c. 3,000; Amaterasu and Susanoo (the cave, the Orochi) c. 2,850; Ōkuninushi c. 3,450; the pacification and the descent c. 3,200; Hoderi and Hoori c. 1,600 · Book 2 (Jimmu–Ōjin) 16,361 · Book 3 (Nintoku–Suiko) 11,087 |  | the fifth-day dossier's KJ excerpt (`מיתוסים-אוגריתיים/3-תיק-היום-החמישי/`, 12 lines of Book 1) |
| east-asia-03 | The Norito: Engishiki book 8, all 27 prayers | Yamato Japan / Old Japanese (senmyō script) | 7th–8th c. CE (older formulas) | 905–927 CE | Kujō-ke MS, late Heian (r) | C | 27 norito, 11,065 characters (m; 53 graphs unencoded, `〓`) | good | zh.wikisource 延喜式/卷第八 (PD text), verified 2026-11-02; ja.wikisource 六月晦大祓祝詞 (kana-converted Ōharae) as a check | medium | 1 EXC | 4 | 5 | 5 | 4 |  |  |  |  |
| east-asia-04 | The Nine Songs (Jiu ge), all 11 hymns | Chu / Classical Chinese | 4th c. BCE (from older Chu shaman cult) | c. 300 BCE | Wang Yi, *Chuci zhangju* (2nd c. CE), via Song prints | D | 11 hymns, 266 lines, 1,596 characters (m) | good | Kanripo KR4a0001 file 002 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-high | 3 | 3 | 4 | 5 | 4 |  |  |  |  |
| east-asia-05 | The Zhouyi core text (64 hexagram + 386 line statements) | Western Zhou / Archaic Chinese | c. 9th c. BCE | c. 800 BCE | Shanghai Museum Chu slips c. 300 BCE (about ⅓); Mawangdui silk 168 BCE | D | 450 statements, c. 1,780 clause-lines, c. 5,300 characters (m, ±5%) | good | Kanripo KR1a0001 (TLS; the Ten Wings set apart), CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 4 | 5 | 4 | 4 |  |  |  |  |
| east-asia-06 | The Shangshu, the authentic (New Text) chapters | Zhou China / Archaic Chinese | c. 1000–300 BCE (the Zhou gao Western Zhou; Yao dian, Yu gong 5th–4th c.) | Western Zhou – 4th c. BCE | Tsinghua slips c. 305 BCE (e.g. *Jin teng*); Xiping stone classics 175 CE | D | 28 chapters (33 units), 3,810 lines, 17,507 characters (m) | good (complete; the gao have notorious corrupt places) | Kanripo KR1b0001 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-low | 4 | 3 | 5 | 4 | 4 | LARGE | the Yu–Xia books (Yao dian, Shun dian, Gaoyao mo, Yi Ji, Yu gong, Gan shi) 903 lines / 3,579 characters; the Shang books (Tang shi, Pan geng I–III, Gaozong rongri, Xibo kan Li, Weizi) 419 / 2,020; the Zhou books (Mu shi … Qin shi, 20 units) 2,488 / 11,908 |  |  |
| east-asia-07 | The Li Sao | Chu / Classical Chinese | c. 300 BCE (Qu Yuan, attributed) | c. 300 BCE | Wang Yi (2nd c. CE), via Song prints; Fuyang Han fragments (r) | D | 376 lines, 2,486 characters (m) | good | Kanripo KR4a0001 file 001 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-high | 3 | 3 | 5 | 5 | 4 |  |  |  |  |
| east-asia-08 | The Tianwen (Heavenly Questions) | Chu / Classical Chinese | 4th c. BCE | c. 300 BCE | Wang Yi (2nd c. CE), via Song prints | D | 371 lines, 1,565 characters (m) | good | Kanripo KR4a0001 file 003 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium | 3 | 3 | 3 | 5 | 4 |  |  |  |  |
| east-asia-09 | The Daodejing, 81 chapters | Warring States China / Classical Chinese | 5th–4th c. BCE | by c. 300 BCE | Guodian slips c. 300 BCE (about ⅓); Mawangdui A/B c. 200 BCE | D | 81 chapters, 1,179 lines, 5,568 characters (m, chapter headings included) | good | Kanripo KR5c0057 (TLS), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 3 | 5 | 4 | 4 |  |  |  |  |
| east-asia-10 | The Zhuangzi, the seven Inner Chapters | Warring States China / Classical Chinese | 4th c. BCE | c. 300 BCE | Guo Xiang's edition (c. 300 CE); Dunhuang MSS | D | 7 chapters, 13,681 characters (m, without Guo Xiang's notes) ≈ 3,000 lines | good | Kanripo KR5c0051, branch `SBCK` (the default branch `HFL` lacks juan 1–2), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 4 | LARGE | Xiaoyao you 1,368 · Qiwu lun 3,587 · Yangsheng zhu 575 · Renjian shi 2,620 · Dechong fu 1,661 · Da zongshi 2,759 · Ying diwang 1,111 characters (borderline LARGE) |  |  |
| east-asia-11 | The Man'yōshū, 20 books | Nara Japan / Old Japanese | c. 600–759 CE | c. 759–780 CE | Katsura-bon (11th c., partial); Nishi Honganji-bon (complete) | D | 4,516 poems (4,693 ONCOJ items with variants), 30,885 verse lines (m) | good | ONCOJ `MYS.*`, https://github.com/ONCOJ/data, CC BY 4.0 (lemmas, parses, English lexicon), verified 2026-11-02 | medium-high | 1 EXC | 4 | 5 | 5 | 4 | LARGE | items / lines: B1 90/816 · B2 169/2,025 (laments) · B3 261/1,839 · B4 311/1,718 · B5 122/1,075 (Okura, Tabito) · B6 162/1,292 · B7 355/1,801 · B8 250/1,403 · B9 151/1,268 · B10 555/2,841 · B11 514/2,589 · B12 405/2,025 · B13 135/1,821 (anonymous chōka) · B14 248/1,239 (Azuma-uta) · B15 219/1,240 · B16 105/791 (legends, humour) · B17 144/1,334 · B18 114/1,056 · B19 158/1,311 · B20 225/1,401 (Sakimori) |  |  |
| east-asia-12 | The Orkhon inscriptions: Kül Tegin, Bilge Qaghan, Tonyukuk | Second Türk Qaghanate / Old Turkic (runic) | 720s–735 CE (older steppe oratory) | c. 720 (Tonyukuk), 732, 735 CE | the steles themselves | A | 212 stele lines, 5,710 runic words: KT 70 / 2,113 · BQ 80 / 2,404 · T 62 / 1,193 (m on turkbitig) | KT, T good; BQ fair (damaged sides) | Radloff, *Die alttürkischen Inschriften der Mongolei* 1895, archive.org `diealtturkischeninschriftendermongol` (PD mark; scan + OCR), verified 2026-11-02; turkbitig.com (runes, transliteration, Turkish; source and licence not stated), verified 2026-11-02 | medium | 1 EXC | 5 | 3 | 4 | 5 |  |  | www.turkbitig.com |  |
| east-asia-13 | The Analects (Lunyu), 20 books | Warring States China / Classical Chinese | 5th–4th c. BCE | c. 4th–3rd c. BCE | Dingzhou slips 55 BCE; Haihun slips c. 59 BCE | D | 20 books, 3,920 lines, 15,936 characters (m) | good | Kanripo KR1h0004 (base CHANT), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 3 | 5 | 4 | 4 | LARGE | books 1–10 ("upper Lun") 1,734 lines / 6,889 characters; books 11–20 2,186 / 9,047; each book 87–333 lines |  |  |
| east-asia-14 | The great Western Zhou bronze inscriptions (a corpus: Da Yu ding, Mao Gong ding, Shi Qiang pan, San shi pan, Da Ke ding, He zun, Zhen yi, Hu ding …) | Western Zhou / Archaic Chinese | c. 1000–771 BCE | cast at the time | the bronzes themselves | A | c. 10 inscriptions, c. 3,000 characters (r); Da Yu ding 258, San shi pan 517 on the pages (m) | good (cast; some worn graphs) | zh.wikisource per-inscription pages (大盂鼎銘文, 散氏盤銘文, …; PD text, page CC BY-SA; "interpreted" transcriptions, quality 25–75%), verified 2026-11-02 for two; not a critical edition | medium-low | 4 | 5 | 3 | 3 | 4 |  |  |  |  |
| east-asia-15 | The two Summons of the Soul (Zhao hun, Da zhao) | Chu / Classical Chinese | 3rd c. BCE | 3rd c. BCE | Wang Yi (2nd c. CE), via Song prints | D | 307 lines, 2,092 characters (m) | good | Kanripo KR4a0001 files 009–010 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-high | 2 | 3 | 3 | 5 | 4 |  |  |  |  |
| east-asia-16 | The Old Tibetan Chronicle (PT 1287) | Tibetan empire / Old Tibetan | 7th–9th c. CE (older royal myth and songs) | 9th c. CE | the Dunhuang MS (cave sealed c. 1000) | A | 536 lines, c. 12,600 tokens (m); 16 lines with gaps (3%) | good | OTDO, https://otdo.aa-ken.jp/archives?p=Pt_1287, CC BY 4.0, verified 2026-11-02 | low-medium | 1 EXC | 4 | 3 | 4 | 5 |  |  | otdo.aa-ken.jp |  |
| east-asia-17 | The Liji, Tan gong I–II | Warring States China / Classical Chinese | 4th–3rd c. BCE | compiled 1st c. BCE (Dai Sheng) | Zheng Xuan's edition (2nd c. CE) | D | 2,242 lines, 10,292 characters (m) | good | Kanripo KR1d0052 (TLS), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 3 | 4 | 5 | 3 |  |  |  |  |
| east-asia-18 | The Nihon shoki, books 1–2 (the Age of the Gods, with its "one writing says" variants) | Yamato Japan / Classical Chinese (kanbun) | 6th–7th c. CE (the same traditions) | 720 CE | Heian fragments (r) | D | 21,643 characters (m): book 1 11,353, book 2 10,290 | good | zh.wikisource 日本書紀/卷第一, 卷第二 (PD), verified 2026-11-02; Aston 1896 (PD, archive.org `nihongi1asto`) as a control | high | 1 EXC | 3 | 4 | 4 | 3 | LARGE | book 1 (from the beginning to the Orochi and Susanoo's descendants) 11,353; book 2 (the descent and the sea-palace) 10,290 |  | east-asia-02 (the variant witness) |
| east-asia-19 | The Zuozhuan, whole | Spring-and-Autumn China / Classical Chinese | events 722–468 BCE; composed 4th c. BCE | 4th c. BCE | Han–Tang witnesses (stone classics) | D | 45,655 lines, 198,226 characters (m, the Chunqiu entries interleaved) | good | Kanripo KR1e0001 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-high | 3 | 3 | 5 | 4 | 3 | LARGE | lines by ducal reign: Yin 1,342 · Huan 1,394 · Zhuang 1,757 · Min 443 · Xi 4,892 · Wen 2,589 · Xuan 2,599 · Cheng 4,058 · Xiang 9,379 · Zhao 10,834 · Ding 2,418 · Ai 3,950 |  |  |
| east-asia-20 | The Shanhaijing, 18 books | Warring States–Han China / Classical Chinese | 4th c. BCE – 1st c. CE | Liu Xin's edition 6 BCE | Guo Pu's edition (c. 300 CE), Song prints | D | 18 books, 31,449 characters (m, without Guo Pu's notes) | good | Kanripo KR3l0090 (Siku WYG, Guo Pu's notes in brackets), CC BY-SA 4.0, verified 2026-11-02 | medium | 3 | 3 | 3 | 4 | 3 | LARGE | Shan jing 1–5: 21,574 (Nan 1,902 · Xi 4,679 · Bei 4,275 · Dong 2,140 · Zhong 8,578); Haiwai / Hainei jing 6–13: 4,428; Dahuang jing 14–17 + Hainei jing 18: 5,447 |  |  |
| east-asia-21 | The Mencius, 7 books | Warring States China / Classical Chinese | late 4th c. BCE | c. 300 BCE | Zhao Qi's edition (2nd c. CE) | D | 14 half-books, 7,401 lines, 35,351 characters (m) | good | Kanripo KR1h0001 (TLS), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 3 | 5 | 4 | 3 | LARGE | 14 half-books of 476–594 lines; e.g. Gaozi I–II (human nature) 1,107 lines / 5,256 characters; Wan Zhang I–II (the sage-kings, Shun's family) 1,106 / 5,130 |  |  |
| east-asia-22 | The five surviving Fudoki | Nara Japan / kanbun with Old Japanese names and songs | 8th c. record of older local lore | 713–733 CE | Harima: Sanjōnishi-ke MS (Heian, r); the others in 16th–17th c. copies (r) | D | 43,176 characters (m) | fair (only Izumo complete; Harima lacks its beginning; Hitachi, Hizen, Bungo abridged) | zh.wikisource 古風土記/… (PD; quality about 50%), verified 2026-11-02 | high | 1 EXC | 3 | 3 | 4 | 3 | LARGE | Izumo 17,447 (complete; the land-pulling myth) · Harima 11,643 · Hitachi 7,503 (Fuji and Tsukuba, the snake-gods, the utagaki) · Hizen 4,306 · Bungo 2,277 |  |  |
| east-asia-23 | The Old Tibetan funerary narratives (PT 1042, 1068, 1134, 1136) | Tibetan empire / Old Tibetan | pre-Buddhist rites (7th–8th c.?) | 8th–10th c. CE | the Dunhuang MSS | A | 636 lines (m): PT 1042 148, PT 1068 131, PT 1134 297, PT 1136 60; 52 lines with gaps (8%) | fair | OTDO (CC BY 4.0), verified 2026-11-02 | low | 1 EXC | 4 | 3 | 5 | 3 |  |  | otdo.aa-ken.jp | east-asia-16 (the same corpus and language) |
| east-asia-24 | The rest of the Chuci core: the Nine Pieces (Jiu zhang), Far Roaming, Divination, The Fisherman, Nine Changes (Jiu bian) | Chu / Classical Chinese | 4th–2nd c. BCE (Yuan you possibly Han) | 3rd–1st c. BCE | Wang Yi (2nd c. CE) | D | 1,188 lines, 7,511 characters (m) | good | Kanripo KR4a0001 files 004–008 (TLS), CC BY-SA 4.0, verified 2026-11-02 | medium-high | 2 | 3 | 4 | 4 | 3 |  |  |  | east-asia-04, -07, -08, -15 (the Chuci core whole: 2,508 lines) |
| east-asia-25 | The Secret History of the Mongols, 282 sections | Mongols / Middle Mongolian (in Chinese-character transcription, with interlinear gloss) | 12th–13th c. oral epic and genealogy | 1228 (or 1252) | Ming transcription c. 1380s | D | 282 §§, 12 (15) juan (r); the Chinese summary on zh.wikisource has 279 paragraphs, 42,411 characters (m) | good | NOT verified (no open machine-readable original): zh.wikisource 元朝秘史 and Kanripo KR2d0014 hold only the Ming **summary translation** (the interlinear text stops after §1); the 1936 facsimile of the transcription is images only (altaica.ru, PD); Ligeti 1971 is copyrighted | low (until a transcription is keyed in) | 1 EXC | 3 | 3 | 4 | 5 | LARGE | the 12 juan of the Ming edition; §§1–68 (origins: the wolf and the doe, Alan Qo'a's arrows); §§69–126 (Temüjin's youth, Begter, Börte, Jamuqa) |  |  |

### east-asia-01 – The Shijing
- **What it is.** The songs every educated Chinese knew by heart for 2,500 years:
  - courtship, elopement and divorce in the Guofeng;
  - soldiers' and labourers' laments in the Xiaoya;
  - the Zhou founding epic in the Daya (Sheng min, Gong Liu, Mian, Huang yi, Da ming, Wen wang);
  - and the temple hymns in the Song.
  It shows how the Zhou saw Heaven and Di ("Vast Heaven, you are not kind!"), their ancestors, the farming year
  (Qi yue) and drought (Yun han).
- **Base.** Kanripo KR1c0001 (TLS). Every stanza is a block with its ID; the Mao prefaces open each poem and are
  excluded by the counter.
  - Commentaries, all PD, in Kanripo: Mao zhuan, Zheng jian and Kong Yingda's *Maoshi zhushu* (KR1c0004); Zhu Xi's
    *Shi jizhuan* (KR1c0009). The dictionaries *Erya* (KR1j0001–4), *Shuowen* (KR1j0018) and *Guangya* (KR1j0008) are
    there too; all were checked to exist.
  - Controls: Legge 1871/1876 and Couvreur 1896 (PD, archive.org).
- **Risks.** Archaic vocabulary, rare graphs and loan characters. The Mao–Zheng readings and Zhu Xi often disagree, and
  the apparatus must show this.
- **A run would need** a Chinese set-up (see `## New languages`) and a Kanripo tool. Start with Daya + Song (2,431
  lines, one run); then the Xiaoya and the Guofeng, each about one run.

### east-asia-02 – The Kojiki
- **What it is.** The single record of Yamato's own myth, recited by Hieda no Are and written down in 712:
  - the floating land, Izanagi and Izanami, death and Yomi;
  - Amaterasu's cave, Susanoo and the Orochi;
  - Ōkuninushi's trials, the descent of the heavenly grandson, the sea-palace;
  - then the legendary emperors, with Yamato Takeru's death songs.
- **Why the exception holds.** The content is the pre-Buddhist kami religion and its songs; the guidelines name the
  Kojiki's songs. The frame, though, is a state chronicle in Chinese script, compiled for royal legitimacy, so C2 is 3.
- **Base.** zh.wikisource (collated on the Shinpukuji MS; the dossier already holds Book 1 as
  `Wikisource-zh--Kojiki/kojiki-jokan.html`). The songs are in ONCOJ (lemmatised, parsed, glossed). The tool to extend
  is `dossier_tools.py` (it already reads this page).
- **Risks.** The readings of names, and the kanbun word order. The Nihon shoki variants (east-asia-18) are the control.
- **A run would need** Book 1 as one run, with its songs (at the threshold; the lead decides). Books 2 and 3 are one run
  each. The KJ excerpt must be kept identical by script.

### east-asia-03 – The Norito
- **What it is.** The words priests spoke to the gods at the state rites:
  - the harvest prayers (Toshigoi), the wind gods of Tatsuta, the palace blessing;
  - fire-pacifying (retelling Izanami's death), the road-feast against demons, sending away cursing gods;
  - the Izumo governor's congratulatory words;
  - and the **Ōharae**: the heavenly and earthly sins washed by rivers to the sea and lost.
  They are still recited at shrines.
- **Why the exception holds.** It is liturgy of the kami religion, which changes slowly. The one Chinese-language spell
  of the immigrant scribes is marked as a foreign layer.
- **Base.** zh.wikisource 延喜式/卷第八 (verified today), in the original senmyō script. It has 53 unencoded graphs
  (`〓`), to be checked against the NDL scan of *Kokushi taikei* vol. 13 (dl.ndl.go.jp pid 991103, PD).
- **Tools and risks.** Not in ONCOJ. Commentaries are Kamo no Mabuchi's *Norito kō* and Motoori's *Ōharae no kotoba
  goshaku*, as PD scans; the translations Satow 1879–81 and Florenz are PD, Philippi is copyrighted. Reading the
  man'yōgana particles needs a small Old Japanese grammar sheet (ONCOJ's lexicon serves for the words).

### east-asia-04 – The Nine Songs
- **What it is.** Eleven hymns in which shamans and shamanesses court gods: the Lord in the Clouds, the Xiang Ladies,
  the two Lords of Fate, the River Earl, the Mountain Spirit. They are divine-human love and longing. **Guo shang**, the
  hymn for the fallen in battle, closes them.
- **Base.** Kanripo KR4a0001; Wang Yi's *Chuci zhangju* (KR4a0002) is the PD commentary. Hawkes is copyrighted, only
  for checking from memory.
- **Risk.** The ritual roles (who speaks) are disputed, and the apparatus says so.
- **Run.** A short run, the natural first Chu text. It can share a Chinese set-up with east-asia-07, -08, -15 and -24
  (the Chuci core, 2,508 lines, is one or two runs).

### east-asia-05 – The Zhouyi
- **What it is.** The divination text of Western Zhou: terse images ("the dragons fight in the wilds, their blood is
  black and yellow"; "not robbers – wooers") under formulae of luck and harm. It is the oldest Chinese folk imagery
  under the oracle, and a canon studied for millennia.
- **Base.** Kanripo KR1a0001. The counter keeps the hexagram and line statements and sets the *Tuan*, *Xiang* and
  *Wenyan* aside; a few Wenyan blocks of Qian and Kun still need separating, hence ±5%. The excavated variants
  (Shanghai Museum, Mawangdui) are cited from the literature.
- **Risk.** Every line is an interpretive choice. The translation must give the Bronze-Age sense (as Rutt and
  Shaughnessy do; both copyrighted), not the later moralising Wings.

### east-asia-06 – The Shangshu (authentic chapters)
- **What it is.** The speeches and charters of the early kings: Yao's calendar and the flood, Yu's ordering of the nine
  provinces (Yu gong), the Great Plan (Hong fan), and the Duke of Zhou's addresses on Heaven's Mandate and on drink (Jiu
  gao). The Jin teng is the Duke's prayer to die in the king's place.
- **Base.** Kanripo KR1b0001. The counter keeps only the 28 New Text chapters (33 units): Shun dian begins with a
  28-character later addition, to be marked. The Old Text chapters (Mei Ze, 4th c. CE) are forgeries and excluded.
  Commentaries: KR1b0003–4 (PD). Kern & Meyer 2017 (Brill; open access reported, not checked today).
- **Risk.** The Zhou gao are the hardest Chinese in the canon ("佶屈聱牙"); readable medium-low.
- **Run.** `LARGE` by the line count; the three parts are each one run.

### east-asia-07 – The Li Sao
The great lament of a rejected servant who flies through the cosmos looking for a true partner, and resolves to follow
Peng Xian into the waters. It is the archetype of Chinese poetry (the Duanwu festival keeps Qu Yuan's memory). The base
and commentary are as in -04; the dense flower symbolism needs Wang Yi's glosses. One short run.

### east-asia-08 – The Tianwen
172 questions about the cosmos and the myths ("Of the beginning of old, who told the tale?"): the nine-layered sky,
Nüwa's body, Gun and Yu, the exposed Hou Ji, the fall of Xia and Shang. It preserves myths that are otherwise lost. The
base is as in -04. **Risk:** many allusions are unidentified, so the apparatus will carry alternatives.

### east-asia-09 – The Daodejing
- **What it is.** The cosmos before heaven and earth, the weak overcoming the strong, the sage-ruler. It is central to
  Daoism and to Chinese thought.
- **Base.** Kanripo KR5c0057 (TLS). The Guodian and Mawangdui readings should go in the apparatus; no open base for
  them was verified.
- **C5 note.** About 11 Hebrew translations exist, so its added value is lower than its scores suggest.

### east-asia-10 – The Zhuangzi Inner Chapters
- **What it is.** Death and transformation (the wife's death, the butterfly dream), humour, and the relativity of
  names. It is the most unguarded voice of the Warring States.
- **Base.** Kanripo KR5c0051, **branch `SBCK`**: the default branch `HFL` is empty for juan 1–2. Guo Xiang's notes are
  in parentheses and were stripped for the count; Guo Xiang's commentary is also in KR5c0138.
- **Run.** Borderline `LARGE`: Qiwu lun with Xiaoyao you is one natural run, and Da zongshi with the rest is another.

### east-asia-11 – The Man'yōshū
- **What it is.** The whole song culture of early Japan: laments for wives and princes (Hitomaro), Okura's Dialogue on
  Poverty, the eastern folk songs, and the frontier guards leaving home. Mostly anonymous voices.
- **Why the exception holds only partly.** Some poets already write in a Buddhist and Confucian frame. The early books
  (1–2), the Azuma-uta (14) and the Sakimori-uta (20) are the native core.
- **Base.** ONCOJ: each line has the man'yōgana, a phonemic form, lemma IDs and a syntactic parse, with `lexicon.xml`
  for English glosses. It is the best tooling in the region.
- **Run.** `LARGE` (30,885 lines). Each book is one run; books 1 + 2 (2,841 lines) are the natural first.

### east-asia-12 – The Orkhon inscriptions
- **What it is.** The Türk qaghans speak to their people in their own script: "When the blue sky above and the brown
  earth below were made, between them the sons of men were made." Then:
  - a sermon on apostasy and punishment by Tengri;
  - a warning against China's "sweet words and soft silks";
  - a brother's deeds and his death.
- **Why the exception holds.** It comes before the Uyghur Manichaean conversion (763) and Islam, and it is written in
  the Turks' own script.
- **Base and tools.** Radloff 1895 (PD, scan and OCR) and turkbitig.com (runes and transliteration, licence not stated,
  used as a reading aid). Both were reached today.
  - The UD Old Turkish treebank (CC0) has only 20 sentences, so it is no base.
  - Dictionaries: Clauson 1972 and Tekin 1968 (both copyrighted; archive.org lending only); Radloff's glossary (PD).
- **Run.** One run (212 lines), with a new Old Turkic set-up. The Ongin and Küli Čor inscriptions could be an
  appendix.

### east-asia-13 – The Analects
The sayings of Confucius and his disciples: ritual, rule and friendship, mourning for Yan Hui, Confucius's own moods. It
is the most taught text in East Asia. The base is Kanripo KR1h0004. Hebrew translations exist (Leslie & Porat 1960;
Katz 2006). `LARGE` (3,920 lines): books 1–10 and books 11–20 are one run each.

### east-asia-14 – The Western Zhou bronze inscriptions
- **What it is.** The Zhou elite speaking to their ancestors and to posterity: royal charges, the Mandate lost by
  Shang's drunkenness (Da Yu ding), a scribe's recital of the kings and his ancestors (Shi Qiang pan), a boundary treaty
  with oath and curse (San shi pan), a lawsuit (Zhen yi). Each ends with the wish that sons and grandsons treasure it
  forever.
- **Base and risk.** There is no open critical edition. zh.wikisource has interpreted transcriptions (quality 25–75%);
  the Academia Sinica database needs a login and allows personal use only. The run would fix a consensus transcription
  per inscription, with every disputed graph in the apparatus. Readable medium-low.

### east-asia-15 – The two Summons of the Soul
A shaman calls a dying (or dead) man's soul back from the four quarters, heaven and the underworld: giants that eat men,
ten suns, the Earl of the Earth with his horns. Then the joys of home: food, music, women. It is the clearest ancient
Chinese view of what lies outside life. The base is as in -04.

### east-asia-16 – The Old Tibetan Chronicle (PT 1287)
- **What it is.** The kings descend from heaven on a sky-cord, until Drigum Tsenpo cuts his and becomes the first king to
  leave a body in a tomb. Then the songs (*mgur*) of kings and ministers, oaths, betrayals and laments.
- **Why the exception holds only partly.** Buddhism was the state religion from 779, but the Chronicle's ideology and
  songs are the empire's own.
- **Base.** OTDO, now reachable, CC BY 4.0, with transliteration and KWIC.
- **Dictionaries.** Jäschke 1881 and Das 1902 (both PD, archive.org); Bialek, *Old Literary Tibetan* (Brill 2026; ©).
- **Risk.** Claude's Old Tibetan is weak beyond Classical Tibetan. A run needs a Tibetan set-up and a careful
  word-by-word method (see `## New languages`).

### east-asia-17 – The Liji, Tan gong
Anecdotes of mourning and burial among Confucius's circle: how long to weep, what to put in the tomb, the woman at Mount
Tai whose family the tiger ate ("harsh government is fiercer than a tiger"). It is the most direct view of how the
Warring States Chinese handled death. The base is Kanripo KR1d0052 (TLS); Zheng Xuan's commentary is in the *Liji
zhushu* (Kanripo). The Yili funeral chapters would be its companion, but Kanripo KR1d0025 did not clone today, so
they are not verified.

### east-asia-18 – The Nihon shoki, books 1–2
The same myths as the Kojiki in Chinese, with the court's collection of variants ("one writing says…"). These show the
traditions still fluid in 720. The base is zh.wikisource, with Aston 1896 (PD) as a control. It is best run with, or
after, the Kojiki: it is the Kojiki's variant witness.

### east-asia-19 – The Zuozhuan
The narrative history of the Spring-and-Autumn states: dreams, ghosts, omens, covenants sealed in blood, the ethics of
loyalty and revenge. It is central to Chinese literacy. The base is Kanripo KR1e0001; the count includes the Chunqiu
entries. Huge (198k characters), so only a reign at a time: Yin and Huan (2,736 lines) is a natural first part.

### east-asia-20 – The Shanhaijing
A ritual geography: mountain after mountain with its minerals, plants and hybrid creatures ("eat it and you will not be
jealous"), its gods and their offerings. The Dahuang books keep fragments of lost myth: Xihe bathing the ten suns, Gun
and Yu, the Torch Dragon. The base is Kanripo KR3l0090; Guo Pu's notes are in brackets and stripped for the count.
**Risk:** rare graphs and unidentifiable beasts.

### east-asia-21 – The Mencius
Human nature as good (the child at the well), the right to depose a tyrant, Shun's terrible family. Central, but less
the "ancient mind" than the Analects or Zhuangzi. The base is Kanripo KR1h0001. `LARGE`; Gaozi I–II is the core part.

### east-asia-22 – The Fudoki
Provincial reports of 713–733 that keep local myth:
- Izumo's land-pulling god;
- Hitachi's Mount Fuji, cursed for refusing a divine guest while Tsukuba was blessed, and the horned snake-gods
  driven above a boundary stake;
- the Harima place-name stories.
The base is zh.wikisource (quality about 50%: proofread against the NDL scans of *Kokushi taikei* where in doubt).
Hitachi (7,503 characters) is the best first part.

### east-asia-23 – The Old Tibetan funerary narratives
Origin stories (*rabs*) of the first death and the first funeral, which justify the rites: the horse or yak as the dead
man's guide and substitute. They are the deepest pre-Buddhist voice of Tibet, but damaged in places (8% of the lines
have gaps) and hard. The base is OTDO (CC BY 4.0). ITJ 731 (the origin of horses) and PT 1047 (bone divination, 405
lines, 15 with gaps) could join; ITJ 731 did not parse today.

### east-asia-24 – The rest of the Chuci core
The Nine Pieces (Qu Yuan's laments in exile, incl. Ai Ying and Huai sha), Yuan you (a spirit journey), Bu ju and Yu fu
(dialogues), and Song Yu's Jiu bian (autumn sorrow). Together with -04, -07, -08 and -15 it completes the ten pieces
of Wang Yi's core. The base is as in -04.

### east-asia-25 – The Secret History of the Mongols
- **What it is.** The wolf and the doe; Alan Qo'a conceiving by light and teaching unity with five arrows; Temüjin's
  hungry boyhood and the killing of Begter, with his mother's rebuke; blood-brotherhood with Jamuqa and its end. It is
  a nomad people's own epic.
- **Why the exception holds.** It comes before Buddhism and Islam, with Tengri and shamanic ritual alive.
- **Base: the blocker.** No open machine-readable original was found.
  - The Ming interlinear transcription exists only as a PD facsimile of images.
  - zh.wikisource's 15 juan and Kanripo KR2d0014 have only the **summary translation**. The Sibu congkan Page namespace
    on zh.wikisource is unproofread bot OCR.
  - Ligeti 1971 is copyrighted (an altaica.ru PDF, not to be used). The CEDAR translation (CC BY-NC-ND) is a
    translation, not a base.
- **A run would need** the transcription keyed in from the facsimile, with its interlinear glosses: a set-up of several
  sessions. Until then it is not readable with control.

## Excluded

- **Shang oracle-bone inscriptions:** most charges have 10–30 characters and many are broken; the graphs are disputed;
  the one complete open corpus (Schwartz 2019, Huadong) is a CC BY-NC-ND modern edition. Too short and broken as texts.
- **Bin/Sui Gong xu:** one bronze of 98 characters, unprovenanced. Too short.
- **Taiyi sheng shui (Guodian):** about 305 characters, the end damaged (zh.wikisource, verified). Too short; at most an
  appendix to a Guodian Laozi.
- **Hengxian (Shanghai Museum):** about 510 characters; no open base (zh.wikisource 404).
- **The Chu Silk Manuscript:** damaged; only copyrighted editions (Li Ling 2020/2025).
- **The Tsinghua slips** (Chu ju, Xinian, Qi ye, Chi jiu …): only copyrighted Chinese editions.
- **The Shuihudi and Fangmatan daybooks and demonography, the Baoshan prayer records:** no open base.
- **The Zhangjiashan legal texts** (186 BCE): Han; open access of Barbieri-Low & Yates not verified.
- **The Houma and Wenxian covenant tablets:** formulaic and repetitive; no open base.
- **Mawangdui** (healing spells, Huangdi sijing): no open base.
- **The Shangshu Old Text chapters** (Da Yu mo, Tai shi, Wu cheng …): 4th-c. CE forgeries.
- **The "modern text" Bamboo Annals:** a later reconstruction.
- **The Chunqiu alone:** dry annals; it is inside the Zuozhuan (east-asia-19).
- **The Guoyu, Mozi, Xunzi, Han Feizi:** large and less treasured (the Mozi was neglected after the Han), or argument
  rather than voice. A later round at most. The Mozi has about 77k characters with notes (m).
- **The Lüshi chunqiu, Huainanzi, Liezi:** late (239 BCE, 139 BCE, 3rd–4th c. CE) and large; their myth passages are
  excerpts, not whole texts.
- **The Liji as a whole:** 97,972 characters (m), mostly ritual rules; only the Tan gong is proposed (east-asia-17).
- **The Yili funeral chapters:** Kanripo KR1d0025 did not clone (the repository is not public); not verified. Re-check.
- **The Pangu myth, the Fengsu tongyi Nüwa:** 3rd c. CE fragments; excerpts, not texts.
- **The Mu Tianzi zhuan:** late in form, low in interest.
- **The Japanese pseudo-histories** (Hotsuma tsutae, Takeuchi monjo, Uetsufumi, Kujiki Taiseikyō) **and the
  Japanese–Israelite theory:** forgeries.
- **The Korean pseudo-histories** (Hwandan gogi …) **and Blavatsky's "Stanzas of Dzyan":** forgeries.
- **The Senmyō** (Shoku Nihongi edicts, 697–789): Chinese-model state documents with a Buddhist frame; low C4.
- **The Kogo shūi, the Sendai kuji hongi:** derivative compilations.
- **The Nihon shoki, books 3–30:** a Chinese-style chronicle; only books 1–2 are proposed.
- **The Omoro sōshi** (1531–1623): late; no open base verified; Old Okinawan is poorly resourced.
- **Ainu yukar:** in the Pacific–Australia–Siberia survey.
- **The Gwanggaeto stele** (414): mostly campaign records and tomb-guard rules, with a myth of about 100 characters,
  partly effaced; no open text found (zh.wikisource 好太王碑 404).
- **Dangun and the founding myths in the Samguk sagi / Samguk yusa** (1145, 1280s): late and short, reworked in Buddhist
  and Confucian terms. The exception fails.
- **The Hyangga** (25 songs): the readings are deeply disputed; not readable with control.
- **Korean muga and Jeju bonpuri:** recorded in the 20th c.
- **The Irk Bitig** (930): Manichaean milieu, small; no open base verified.
- **The Yenisei epitaphs:** short, damaged, uncertain in reading and date.
- **The Ongin and Küli Čor inscriptions:** shorter and more damaged; an appendix to east-asia-12 at most.
- **The Sogdian Ancient Letters and the Mug documents:** no open original-language edition (Sims-Williams & Grenet 2023
  is copyrighted); Sogdian is weak.
- **Tocharian, Khotanese, Old Uyghur Buddhist literature, the Turfan Manichaean texts:** translations of an imported
  religion. The exception fails.
- **Bactrian documents:** documentary; for the Iran–India region if anywhere.
- **The Gesar and Jangar epics:** written in the 17th–20th c., Buddhist-coloured.
- **Bon gter-ma:** 11th c. onward. **Zhangzhung:** undeciphered.
- **The Oghuz Qaghan legend, Dede Korkut:** late; another region.
- **The Old Tibetan Annals** (PT 1288, 52 lines; ITJ 750, 255 lines; m): dry year-records; low C4.

## New languages

- **Classical and Archaic Chinese** (needed by -01, -04 to -10, -13 to -15, -17, -19 to -21, -24; the folder has never
  used it).
  - **Base:** Kanripo (CC BY-SA 4.0; `git clone` from github.com; TLS line-split texts with stanza IDs).
  - **Dictionaries and commentaries:**
    - the PD commentaries in Kanripo (Mao–Zheng–Kong, Zhu Xi, Wang Yi, Kong Anguo / Kong Yingda, Guo Xiang, Guo Pu);
    - *Shuowen*, *Erya*, *Guangya* (Kanripo);
    - en.wiktionary (CC BY-SA; glosses and Old Chinese reconstructions; reachable today, not in `domains.txt`);
    - the Unicode Unihan definitions;
    - Kroll, Schuessler, Karlgren and Baxter–Sagart (all copyrighted; consulted from memory only, marked as recalled).
  - **Morphology:** none in the ancient sense (Chinese is isolating). The tool should give per-character glosses from
    the commentaries.
  - **Controls:** Legge, Couvreur and Chamberlain (PD), used only after drafting.
  - **Set-up:**
    - a grammar mapping (particles 之 其 者 也 矣 焉 兮; aspect and modality);
    - a Hebrew transcription table for pinyin names (check whether the Academy of the Hebrew Language has rules;
      otherwise fix one in the corpus);
    - renderings for 天, 帝/上帝, 命, 德, 禮, 道, 氣, 神, 鬼;
    - a Kanripo-to-units tool, modelled on `egypt_tools.py`, verifying by the TLS IDs.
  - **Confidence:** high for the prose; medium for the Shijing; medium-low for the gao and the bronzes.
- **Old Japanese** (-02, -03, -11, -18, -22; used once, in the 12-line KJ excerpt).
  - **Base:** zh.wikisource (the kanbun prose, the Norito, the Fudoki) and ONCOJ (CC BY 4.0: the songs and the
    Man'yōshū, lemmatised and parsed, `lexicon.xml` with English glosses).
  - **Controls:** Chamberlain 1882 and Aston 1896 (PD); JMdict (EDRDG, CC BY-SA) for name readings.
  - **Set-up:**
    - a name table (kana readings to Hebrew);
    - a kanbun reading convention;
    - renderings for kami, tsumi, kegare, harae, mikoto;
    - an ONCOJ TEI parser (`<lb corresp=…>` lines and `<w lemma>`).
  - **Confidence:** medium-high with ONCOJ; medium for the Norito, whose particles are in man'yōgana and are not
    annotated.
- **Old Turkic** (-12).
  - **Base:** Radloff 1895 (PD) and turkbitig.com (licence unknown: a reading aid only).
  - **Dictionaries:** Radloff's glossary and Thomsen 1896 (both PD); Clauson and Tekin (both copyrighted).
  - **Set-up:** a transliteration convention and a name table.
  - **Confidence:** medium; the language is formulaic and well described.
- **Old Tibetan** (-16, -23).
  - **Base:** OTDO (CC BY 4.0; HTML pages with numbered lines and gap marks `[---]`; a parser is in the scratch folder).
  - **Dictionaries:** Jäschke 1881 and Das 1902 (PD); Bialek 2026 (copyrighted).
  - **Morphology:** none open. Needs a syllable-by-syllable gloss step.
  - **Confidence:** low-medium.
- **Middle Mongolian** (-25).
  - **Base:** none open in machine-readable form; the PD facsimile must be keyed in first.
  - **Dictionaries:** Kowalewski 1844–49 (PD); Haenisch 1939 and Lessing 1960 (both copyrighted); the Ming interlinear
    gloss is the built-in dictionary.
  - **Confidence:** low until the text exists.

## Hosts

Not in `domains.txt` (github.com, raw.githubusercontent.com, zh.wikisource.org and archive.org, which serve most of the
region, are already there):

- **otdo.aa-ken.jp**: Old Tibetan Documents Online, the CC BY 4.0 base of east-asia-16 and -23. It answered 200 today
  (on 2026-10-21 it was refused).
- **www.turkbitig.com**: the Orkhon runes and transliteration (east-asia-12); reached today.
- **en.wiktionary.org**: Classical Chinese glosses and Old Chinese reconstructions (all Chinese runs); reached today.
- **dl.ndl.go.jp**: the NDL scans of *Kokushi taikei* (Engishiki, Kojiki, Fudoki), to check the `〓` graphs and doubtful
  readings (east-asia-03, -22). It was reached on 2026-10-21; not re-checked today.
- **ja.wikisource.org**: the kana Ōharae, as a check (east-asia-03); reached today. Optional.
- **altaica.ru**: the PD facsimile of the Secret History transcription (east-asia-25); reached today. Only if that text
  is keyed in.
- **oncoj.ninjal.ac.jp**: the ONCOJ website (the data come from GitHub); reached today. Optional.
