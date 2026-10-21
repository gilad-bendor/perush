# World survey – East and Central Asia: ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Region: China (pre-Qin texts, and Han texts that keep older tradition), Japan, Korea, Tibet, Mongolia and the steppe, Central Asia (Old Turkic, Sogdian, Tocharian).
Legend: **verified** = fetched today (2026-10-21) from this session, expected content seen; **reported** = from my scholarly knowledge or catalogues, not fetched. Bible benefit and Soul benefit are each rated HIGH / MED-HIGH / MEDIUM / LOW.

**Method note.** The session's shared web-search quota (200 searches across all ten agents) ran out after my sixth search. Everything after that comes from direct fetches of known hosts (curl, WebFetch, `git ls-remote`/shallow `git clone` of public repos, and the archive.org and Crossref catalogue APIs) plus my own knowledge of the field. Bibliographic details I could not check are marked "verify". A follow-up session with a fresh search quota should check the "verify" items, above all the open-access status of Kern & Meyer 2017 and Barbieri-Low & Yates 2015, and the Hebrew translations.
Downloads are cached under `/tmp/claude-0/-home-user-perush/009325a3-391a-55eb-9c0e-32e1e254e6c6/scratchpad/world/east-central-asia/`: the ONCOJ release clone, the Kanripo clones of the Shijing, Shangshu, Chuci, Shanhaijing and Zhouyi, and the probe files.

Scope boundary. Ainu oral epics (*kamuy yukar*) and Siberian traditions are in the Pacific–Australia–Siberia survey, so they get only a cross-reference here. Bactrian and Khotanese are noted under §3.

---

## 0. Key findings

1. **The Shijing (Book of Odes) is the best all-round candidate in the region.**
   - Its Zhou founding hymns give unusually concrete typological contacts with Genesis and Exodus:
     - **"Sheng min"** (Mao 245): Hou Ji's mother conceives by treading in God's footprint; the exposed infant is guarded by oxen and sheep and warmed by birds, and "Hou Ji wailed… his voice filled the road" ↔ Ex 2:1–10, Gen 21:15–17. Its final stanza goes further: "the fragrance begins to rise, Shangdi is pleased and enjoys it… Hou Ji founded the sacrifice, and down to today there has been no fault or regret" ↔ **Gen 8:20–21**, the *reaḥ ha-niḥoaḥ* after the flood, which falls in the commentary's empty block.
     - **"Huang yi"** (241): "Majestic is Shangdi, looking down in splendour; he surveyed the four quarters" ↔ Gen 11:5, 18:21, Deut 32:8–9.
   - The Guofeng love songs and laments are a large "soul" corpus.
   - **Verified:** a clean, line-split base text, the TLS text in Kanripo, can be cloned from GitHub. Legge 1871/1876 and Couvreur 1896 are public domain.
   - **Hebrew:** only about 40 poems have ever been translated (some overlap), spread over six translators. A full apparatus-rich translation would be new.
2. **A Chinese "flood and the ordering of the world" corpus fits Gen 6–11 (no commentary yet) well.**
   - Its texts (sizes are my verified character counts on the Kanripo/TLS text where given):
     - *Shangshu* **Yao dian** (the flood "swelling to heaven, embracing the mountains, overtopping the hills" ↔ Gen 7:19–20; the calendar ↔ Gen 1:14), 1,305 characters;
     - **Yu gong** (the world divided into nine provinces after the flood, with their soils, products and rivers ↔ **Gen 10**, the Table of Nations), 1,206 characters;
     - **Hong fan** (Gun dammed the flood and Heaven withheld the Great Plan; Yu received it ↔ the post-flood covenant and law, Gen 9:1–17), 1,074 characters;
     - **Lü xing** (Shangdi orders Chong and Li to "cut the communication between earth and heaven" ↔ Gen 11:1–9 and 3:24; penal fines ↔ Ex 21:30), 963 characters;
     - the **Bin/Sui Gong xu** bronze (c. 900 BCE?): "Heaven commanded Yu to spread out the soil, follow the mountains and dredge the rivers";
     - Shanhaijing 18 (Gun steals the self-swelling soil); the Tianwen flood questions; Mencius; Huainanzi 6 (Nüwa mends the broken sky and stops the flood ↔ Gen 7:11); the Rong Cheng shi "nine provinces".
   - **The contrast with Genesis is instructive:** the Chinese flood is not a punishment. It is a disorder of the land, and it is ended by labour and by ordering the earth.
3. **The Kojiki, Book 1, is the richest mythic narrative in the region for Gen 1–3 and the patriarchs.** All of these are typological (no contact):
   - the land "like floating oil, drifting like a jellyfish" ↔ Gen 1:2;
   - land congealed from the brine ↔ 1:9;
   - the first birth fails because the woman spoke first ↔ Gen 3:16–17;
   - the "leech-child" set adrift in a reed boat ↔ Ex 2:3;
   - Izanami in Yomi, with the food of the dead and the forbidden look ↔ Gen 19:26;
   - the origin of death, "1,000 a day die, 1,500 are born" ↔ Gen 3:19, 6:3;
   - Susanoo's expulsion after his sins against the rice fields ↔ Lev 16;
   - **the eight-headed serpent Yamata-no-Orochi** ↔ Leviathan / *tanninim* (Gen 1:21, the unit being edited now);
   - Ōkuninushi tested by Susanoo and fleeing with his daughter and his treasures ↔ Jacob and Laban, Gen 29–31;
   - two sisters offered, the beautiful one chosen and the ugly one sent back, which makes human life short ↔ Gen 29:16–26 and 6:3;
   - the sea-god's daughter who gives birth as a *wani* (sea monster) and forbids her husband to look.

   **Verified:** the full original text (Shinpukuji tradition) is on zh.wikisource. All 112 Kojiki songs are in **ONCOJ** (CC BY 4.0, cloned; lemmatised and parsed, with English glosses).
4. **The Norito (Engishiki book 8, 927 CE, with older ritual language) are a surprising Leviticus comparandum.**
   - The **Great Purification (Ōharae)** lists the "heavenly sins": breaking the ridges and channels of rice fields, flaying alive or backwards, defecating in sacred space.
   - It also lists the "earthly sins":
     - cutting living or dead skin, "white people" and growths (↔ Lev 13);
     - sex with one's mother, one's child, mother and daughter, and with animals (↔ **Lev 18:7, 17, 23; 20:14–16**);
     - sorcery (↔ Ex 22:17).
   - Then the sins are carried by rivers to the sea, swallowed, blown into the netherworld and "lost" there (↔ **Lev 16:21–22**, Mic 7:19).
   - **Verified:** the full Ōharae is on ja.wikisource, and the PD *Kokushi taikei* vol. 13 (Engishiki, 1897–1901) is on the NDL digital collection.
5. **Oracle-bone inscriptions are now workable in part.**
   - **Adam Schwartz, *The Oracle Bone Inscriptions from Huayuanzhuang East* (De Gruyter 2019)** is open access, CC BY-NC-ND 3.0 (Crossref licence metadata verified). It is a complete Shang corpus with transcription, translation and commentary.
   - Its paired positive/negative charges ("Will it rain? / It will not rain?") are the closest living analogue of the yes/no oracle of **1 Sam 23:9–12** and the Urim (Ex 28:30). The topics (childbirth, toothache, dreams, ancestors' curses) are a first-rate "soul" window.
6. **Steppe and Central Asia: three solid candidates.**
   - **The Secret History of the Mongols** (1228?; 282 §§; the Mongolian is kept in Chinese-character transcription with an interlinear Chinese gloss). It has the wolf-and-doe origin, Alan Qo'a's conception by light, the five arrows, Temüjin killing his half-brother and his mother's lament (↔ Gen 4), and blood-brotherhood and betrayal. De Rachewiltz's translation is CC BY-NC-ND (2015 shorter version on CEDAR; reported; the host is blocked here).
   - **The Orkhon inscriptions** (Kül Tegin 732, Bilge Qaghan 735, Tonyukuk c. 720s). "When the blue sky above and the brown earth below were made, between them the sons of men were made" ↔ Gen 1:1, 26. They also contain a Deuteronomy-like historical sermon: "O Türk people, hear!", with apostasy, punishment by Tengri, and a warning against the "sweet words and soft silks" of China ↔ Deut 6:4, 7:3–4, 8, 28–32. Radloff 1894–95 is PD (verified); Thomsen 1896 is PD (reported).
   - **The Sogdian Ancient Letters** (c. 313 CE). Miwnay, abandoned in Dunhuang: "I would rather be a dog's or a pig's wife than yours!" Small, but for this project it is a match for the Mesopotamian letters in `קולות-היום-יום/`.
7. **The excavated Chinese cosmogonies are a "quick win" for Gen 1:1–2, the current work.**
   - *Taiyi sheng shui* ("The Great One gave birth to water; the water returned and assisted the Great One, and thus heaven was formed", c. 300 BCE, Guodian, c. 305 characters; full text verified on zh.wikisource).
   - *Hengxian* (Shanghai Museum: "in the beginning there was nothing… qi generated itself"; c. 500 characters).
   - The **Chu Silk Manuscript** (Fuxi in the dark, formless primordial state ↔ *tohu wa-bohu, ḥoshekh*; the pillars of heaven; the sun and moon born later ↔ Gen 1:14–18).
   - Tsinghua ***Chu ju*** (an ancestress dies giving birth through her split side ↔ Gen 2:21 *ṣelaʿ*, 35:16–19).
8. **Access, the big facts** (all verified today):
   - **ctext.org is unusable by script.** It shows a JavaScript bot challenge, its terms forbid scraping, and the API needs a paid key.
   - **Kanripo's website returns 403, but its GitHub repositories clone fine.** They are the best open source for Chinese base texts.
   - **Wikimedia API calls return 429** (rate-limited, probably by the parallel agents); WebFetch of the same pages works.
   - **OTDO** (Old Tibetan Documents Online), **TITUS**, **CEDAR** (WWU), the TLS dictionary, Baxter–Sagart at Michigan, StarLing, zdic, the Korean national databases and bitig.kz are **blocked by the proxy**.
   - **IDP, Gallica, HathiTrust, Brill and academia.edu return 403.**
   - **OAPEN PDFs sit behind an Anubis anti-bot wall.**
   - **CHANT (CUHK) and the Academia Sinica bronze database need a login.**
9. **Hebrew translations are almost absent for everything except the philosophers.**
   - There are about 11 Hebrew Daodejing translations (e.g. Dan Daor & Yoav Ariel 2007), Zhuangzi (Daor 2010), Mencius (Daor 2009), the Analects (Leslie & Porat 1960; Katz 2006) and the Yijing (1993, verify).
   - The Shijing has only about 40 poems in Hebrew; the Shangshu, Chuci, oracle bones, bronzes, Kojiki, Norito, Secret History and Orkhon have none (as far as I could check). Yaakov Raz, *המיתולוגיה היפנית* (Mapa 2000), is a retelling, not a translation.
10. **LLM readiness**, from strongest to weakest. It shapes the order:
    - **Classical Chinese:** strong.
    - **Shijing and Shangshu (Archaic Chinese):** medium. They are hard but heavily commented.
    - **Old Japanese:** medium. The kanbun prose is easy; the man'yōgana songs need ONCOJ, which solves most of the problem.
    - **Western Zhou bronze Chinese:** medium-weak. Loan graphs; work from a consensus transcription.
    - **Oracle-bone Chinese:** weak from the graphs; workable from a published transcription and a translation.
    - **Middle Mongolian, Old Turkic:** medium.
    - **Old Tibetan ritual, Sogdian:** weak.
    - **Tocharian, Hyangga (Old Korean):** very weak.

---

## 1. Ranked shortlist (table)

| # | Text | Language · date (composition / oral) · earliest ms | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul benefit | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Shijing**: Zhou and Shang hymns (Da ya, Song) + a Guofeng selection; eventually all 305 | Archaic Chinese · c. 1000–600 BCE, oral and ritual · Anhui Univ. Warring States slips (c. 350 BCE, 58 Guofeng poems); Shanghai Museum *Kongzi shilun*; Fuyang Han slips; received Mao text | 305 poems, c. 39,000 characters (Song-dynasty count) · complete | Gen 8:20–21, 9:20; Ex 2; Gen 21:15–17; Gen 11:5, 18:21; Deut 32:8–9; covenant / "Mandate" ↔ Deut 28, 1 Sam 15:28 | love songs, laments, drought prayer (Yun han), the farmer's year (Qi yue) | MED-HIGH / HIGH | Kanripo KR1c0001 (TLS text, line-split; **verified**, licence reported CC BY-SA), zh.wikisource (**verified**); Legge, Couvreur PD | HIGH |
| 2 | **Flood and world-ordering corpus**: Shangshu Yao dian, Yu gong, Hong fan, Lü xing + Bin Gong xu + Rong Cheng shi + Shanhaijing / Mencius / Tianwen / Huainanzi flood passages | Archaic and Classical Chinese · bronze c. 900 BCE (?); Shangshu chapters Western Zhou to 4th c. BCE · bronze itself; Tsinghua and Shanghai Museum slips; received text | c. 6,000–7,000 characters · good (the bronze is unprovenanced) | **Gen 6–11**: 7:11, 7:19–20, 9:1–17, **10**, 11:1–9; Gen 1:14; Ex 21:30 | how the ancients thought of order, labour and kingship | HIGH (typological) / MED-HIGH | Kanripo KR1b0001 (**verified**); zh.wikisource; bronze: no open edition | MED-HIGH |
| 3 | **Kojiki** Book 1 (+ Books 2–3 selectively) + its 112 songs | Old Japanese in kanbun and man'yōgana · 712 CE, from oral recitation (Hieda no Are) of 6th–7th-c. court traditions · Shinpukuji-bon 1371–72 | 3 books (c. 45,000 characters, verify); Book 1 c. ⅓ · complete | Gen 1:2, 1:9, 1:21 (Orochi), 2–3, 3:16–19, 6:3, 19:26, 29:16–26, 31:19–35; Lev 16; Ex 2:3 | death and grief, purity, love songs, comic and grotesque gods | MED-HIGH / HIGH | zh.wikisource (**verified**); NDL *Kokushi taikei* PD; songs in **ONCOJ** (CC BY 4.0, **verified**) | HIGH |
| 4 | **Norito** (Engishiki 8): Ōharae, Toshigoi, Hishizume, Michiae, Ōtonohogai, Izumo kamuyogoto … | Old Japanese (senmyō style) · compiled 905–927, formulas of the 7th–8th c. or older · Kujō-ke manuscript, late Heian (verify) | 27 prayers; Ōharae c. 900 characters · complete | **Lev 18; 20:14–16; Lev 13; Lev 16:21–22**; Ex 22:17; Deut 11:13–17; Ex 12:23 | how a priest addressed gods; sin as pollution washed away | MED-HIGH / HIGH | ja.wikisource (**verified**, converted script); NDL *Kokushi taikei* vol. 13 (**verified**, PD) | MED-HIGH |
| 5 | **Shang oracle-bone inscriptions**: the Huadong corpus (Schwartz 2019) + a topical Heji selection | Shang Chinese · c. 1250–1050 BCE · the bones themselves | Huadong c. 560 pieces / c. 2,500 inscriptions (verify); Heji c. 41,956 items · fragmentary but formulaic | 1 Sam 23:9–12, 14:41; Ex 28:30; Deut 18:10–11; Deut 11:14; Gen 40–41 (dreams) | a king's fears: rain, childbirth, toothache, dreams, ancestors' anger, human sacrifice | MEDIUM / HIGH | **Schwartz 2019 OA, CC BY-NC-ND 3.0** (Crossref **verified**); Yin Qi Wen Yuan (free, JS); CHANT (login) | MEDIUM |
| 6 | **Excavated cosmogonies**: Taiyi sheng shui, Hengxian, Chu Silk Manuscript, Tsinghua Chu ju (+ Laozi 25, 42) | Chu script · c. 4th c. BCE · the manuscripts (c. 300 BCE) | c. 2,500 characters together · good, except the silk (damaged) | **Gen 1:1–2, 1:6–8, 1:14–18**, 2:21; Prov 8:22–31; Job 38:4–6 | how creation was imagined without a creator-speaker | MED-HIGH / MED-HIGH | zh.wikisource (Taiyi **verified**); others reported | MEDIUM (palaeographic readings) |
| 7 | **Chuci**: Tianwen, Nine Songs, Summons of the Soul (+ Lisao) | Classical Chinese of Chu · 4th–3rd c. BCE (the Nine Songs from older shamanic cult) · Wang Yi's edition, 2nd c. CE; Song prints | Tianwen c. 1,550 characters / 172 questions; Nine Songs 11 hymns · complete | Job 38–39; Gen 1:2; Ex 2 (Hou Ji); Ps 139:8–9 | shamanic love-hymns to gods, a hymn for the war-dead, calling back a soul | MEDIUM / HIGH | Kanripo KR4a0001 (**verified**); zh.wikisource | HIGH |
| 8 | **Secret History of the Mongols** | Middle Mongolian in Chinese transcription · 1228 (or 1252; debated), from 12th–13th-c. oral epic and genealogy · Ming transcription c. 1380s | 282 §§ · complete | Gen 4; 25–27; 37; 49; Eccl 4:12; Num 30 (vows) | a mother's lament, brotherhood, honour, hunger | MEDIUM / HIGH | CEDAR shorter version, CC BY-NC-ND (reported, host blocked); romanised text in Ligeti / de Rachewiltz (©) | MEDIUM |
| 9 | **Orkhon inscriptions** (Kül Tegin, Bilge Qaghan, Tonyukuk) | Old Turkic, runic · 716–735 CE · the steles | c. 200 lines · good (Bilge more damaged) | Gen 1:1, 1:26–27; Deut 6:4, 7:3–4, 8, 28–32; Judg 2 | a ruler's grief and pride, a people's history told as a sermon | MEDIUM / MED-HIGH | Radloff 1895 PD (**verified** archive.org); Thomsen 1896 PD (reported); turkbitig.com (**verified**, source not named) | MED-HIGH |
| 10 | **Western Zhou bronze inscriptions** (Shi Qiang pan, Qiu Lai pan, Da Yu ding, He zun, Mao Gong ding, San shi pan, Zhen yi, Hu ding, Bin Gong xu) | Western Zhou Chinese · c. 1000–771 BCE · the bronzes | c. 2,500 characters for this selection · good | Gen 31:44–54 (boundary oath); Deut 25:2–3 (lashes); Gen 17:7; Lev 10:9 (drink); Deut 26:5–10 (ancestral recital) | gift, rank, ancestor-praise, oaths | MEDIUM / MEDIUM | no open edition; Sinica DB (login, personal use **verified**); zh.wikisource partial (**verified** Mao Gong ding, "interpreted text") | MED-LOW |
| 11 | **Shanhaijing** (Hainei jing 18, Dahuang jing; bird and fish entries of the Shan jing) | Classical Chinese · 4th c. BCE – 1st c. CE strata · Guo Pu ed. 4th c. CE; Song prints | 18 books, c. 31,000 characters · complete | **Gen 1:20–22** (birds, fish, monsters), Lev 11 / Deut 14 (animal lists), Gen 2:10–14 (Kunlun's rivers), Gen 10 | monsters, omens, medicine, a world map of wonders | MEDIUM / MED-HIGH | Kanripo KR3l0090 (Siku text, **verified**) | MED-HIGH |
| 12 | **Daybooks, demonography and a resurrection tale** (Shuihudi *Rishu* incl. "Spellbinding"; Fangmatan "Dan"; Baoshan prayers) | Qin and Chu Chinese · 4th–3rd c. BCE · the manuscripts | c. 6,000 characters for the selection · good | Deut 18:10–11; Lev 19:26, 31; Deut 26:14; 1 Sam 28; 2 Kgs 1:2 | ghosts, demons, lucky days, what the dead want | MEDIUM / HIGH | Chinese editions (©); no open translation (reported) | MEDIUM |
| 13 | **Zhangjiashan legal texts** (*Ernian lüling*, *Zouyanshu*) | Han Chinese · 186 BCE (Qin law behind it) · tomb manuscript | c. 27,000 characters; select · good | **Ex 21–23**, Deut 19–25, Num 35 | real legal cases, incl. the widow beside her husband's coffin | MED-HIGH / MEDIUM | Barbieri-Low & Yates 2015 (Brill; OA reported – verify) | MEDIUM |
| 14 | **Fudoki** (Izumo complete; Hitachi, Harima, Bungo, Hizen; *itsubun* fragments) | Old Japanese in kanbun · 713–c. 733, from local oral lore · medieval copies | 5 texts, medium · Izumo complete, others partial | Gen 18–19 (theoxeny: Mt Fuji and Mt Tsukuba), Gen 3:24 (the snake gods' boundary), Gen 11 | local gods, swan-maidens, Urashima | MEDIUM / HIGH | Japanese editions; open text reported (ja.wikisource, verify) | MEDIUM |
| 15 | **Zhouyi** core text (hexagram and line statements) | Western Zhou Chinese · c. 9th c. BCE · Shanghai Museum slips c. 300 BCE; Mawangdui 168 BCE | 64 hexagrams / 386 lines, c. 4,000+ characters · complete | Gen 49 (animal oracles), Num 23–24, Urim | omen-poetry: "not robbers but wooers" | LOW-MED / HIGH | Kanripo KR1a0001 (**verified**); Legge SBE 16 PD | MEDIUM |
| 16 | **Old Tibetan Dunhuang narratives** (PT 1287 Chronicle origin; PT 1286; funerary narratives PT 1042, 1068, 1134, 1136; IOL Tib J 731; dice divination PT 1047) | Old Tibetan · 8th–10th c., keeping pre-Buddhist ritual · the manuscripts (sealed cave, c. 1000) | medium · good | Gen 28:12 (sky-cord), Gen 3 (first death), Gen 22 / Lev 1 (horse as substitute) | death ritual, the soul's journey, songs (*mgur*) | LOW-MED / HIGH | OTDO (blocked here; reported open); Gallica / IDP (403) | LOW |
| 17 | **Sogdian Ancient Letters** (+ Mug marriage contract 710 CE) | Sogdian · c. 313 CE · originals (BL) | 5 letters + fragments · good | Deut 24:1–4; Ex 21:10; Gen 31:14–16 | an abandoned wife, a merchant's despair | LOW-MED / HIGH | Reichelt 1931 (PD status verify); UW Silk Road translations (**verified**, ©) | LOW-MED |
| 18 | **Man'yōshū** selection (Hitomaro's laments, Okura, Azuma-uta, Sakimori-uta) | Old Japanese · c. 600–759 · Katsura-bon (11th c., partial), Nishi Honganji-bon (complete) | 4,516 poems · complete | Eccl, Ps 90 (typological, weak) | grief, poverty, border soldiers leaving home | LOW / HIGH | **ONCOJ** (CC BY 4.0, 4,693 files, **verified**) | HIGH |
| 19 | **Gwanggaeto stele** (Jumong founding myth) + Samguk sagi / Yi Gyubo versions | Classical Chinese (Goguryeo) · 414 CE · the stele | c. 1,775 characters; myth c. 100 · partly effaced | Ex 2 (exposed egg / child); **Ex 14** (river crossing on turtles and reeds) | royal myth of descent | MEDIUM / MEDIUM | text reported on Korean databases (blocked); ko.wikisource | MED-HIGH |
| 20 | **Chinese myth fragments** (Lüshi chunqiu "Ben wei": Yi Yin's mother turned into a mulberry for looking back; Fengsu tongyi: Nüwa moulds humans of yellow earth; Huainanzi 3, 4, 6, 8) | Classical Chinese · 239 BCE – c. 195 CE (older myth) · Song prints; Fengsu tongyi fragment via Taiping yulan 983 | short · good | **Gen 19:17, 26**; **Gen 2:7**; Gen 2:10–14; Gen 7:11 | myth as Han scholars kept it | MED-HIGH / MEDIUM | Kanripo / zh.wikisource (reported) | HIGH (a quick win) |

---

## 2. The survey

### 2.1 China

#### A. Shijing 詩經 (Book of Odes): the top candidate
**Archaic Chinese · composed c. 1000–600 BCE (the Zhou Song hymns are the oldest, c. 10th c.; the Guofeng mostly 8th–7th c.), oral and ritual, anthologised by c. 600–500 BCE · earliest witnesses:**
- the Anhui University Warring States bamboo slips (c. 4th c. BCE; 58 Guofeng poems; published 2019);
- the Shanghai Museum *Kongzi shilun* (a discussion of the Odes, c. 300 BCE);
- the Fuyang Han slips (165 BCE);
- the Xiping stone classics (175 CE);
- the received Mao text.

**Size and preservation:** 305 poems, c. 39,000 characters (Zheng Genglao's Song count); complete.
- *What it is.* The songs an ancient hearer knew by heart:
  - the 160 "Airs of the States": courtship, elopement, wedding songs, a deserted wife, soldiers longing for home, satire on the lords ("Big rat, big rat, don't eat our millet!");
  - the court odes, the Ya;
  - the temple hymns of Zhou, Lu and Shang, the Song.
  - The Da ya cycle (Sheng min, Gong Liu, Mian, Huang yi, Da ming, Wen wang) is the Zhou "national epic", from the miraculous birth of the first ancestor to the conquest of Shang.
- *Bible parallels* (all typological; no contact):
  - **Sheng min (Mao 245) ↔ Ex 2:1–10 and Gen 21:15–17.** Jiang Yuan conceives by treading on God's toe-print. The newborn is laid in a narrow lane (oxen and sheep shelter him), in a forest (woodcutters find him) and on ice (birds cover him with their wings). "When the birds went away, Hou Ji wailed; long and loud, his voice filled the road." The cry of the abandoned child heard and rescued is the shared motif.
  - **Sheng min stanza 8 ↔ Gen 8:20–21.** "We fill the *dou* vessels… the fragrance begins to rise; Shangdi, at ease, enjoys it: how fragrant, how timely! Hou Ji founded the sacrifice, and without fault or regret it has come down to today." Hou Ji is also the first farmer (↔ Noah, *ish ha-adamah*, 9:20). This is the most concrete contact I found in the region for the commentary's empty block 8:20–11:26.
  - **Huang yi (241) ↔ Gen 11:5, 18:21; Deut 32:8–9; Ps 33:13–14.** "Majestic is Shangdi, looking down in splendour; he surveyed the four quarters, seeking where the people could be settled… he looked to the west and gave them a dwelling."
  - **Wen wang (235), Da ming (236).** "Heaven's Mandate is not constant" (天命靡常) ↔ Deut 28, 1 Sam 15:28. The transfer of the Mandate from Shang to Zhou is a theology of election that can be lost; the classic comparison with covenant theology is debated, but common in comparative religion.
  - **Xuan niao (303) ↔ Gen 18–21.** "Heaven commanded the dark bird to descend and give birth to Shang" (Jiandi swallows a swallow's egg).
  - **Qi yue (154), the farmer's year by months ↔ Gen 8:22** and the Gezer calendar.
  - **Yun han (258), a king's prayer in drought ↔ Deut 11:17, 1 Kgs 17–18.**
  - **Huang niao (131), lament for the three nobles buried alive with Duke Mu of Qin ↔ the theology of human sacrifice (Gen 22; Deut 12:31).**
- *Soul.* This is the oldest large body of Chinese lyric. It covers love from flirting to divorce, war, labour, feasting, the dead and the ancestors, and the experience of Heaven as silent ("Vast Heaven, you are not kind!", Jie nan shan).
- *Base text and tools.*
  - **Kanripo KR1c0001** 毛詩: base edition "tls" (the Thesaurus Linguarum Sericarum text). Each verse is on its own line and each stanza carries an ID (e.g. "SHI 245.2"), with the Mao prefaces. **Verified**: `git clone https://github.com/kanripo/KR1c0001` worked, and I saw Sheng min.
    - Licence: Kanripo states CC BY-SA (reported; no licence file in the repo).
  - **zh.wikisource 詩經** (verified: 詩經/生民 fetched; CC BY-SA, PD text).
  - Translations and glosses:
    - Legge, *The She King* (1871/1876; PD, archive.org) and Legge, SBE 3 (1879, the religious odes; PD);
    - Couvreur, *Cheu king* (1896; Chinese + French + Latin; PD, archive.org `cheukingtextech00couvgoog`, reported);
    - Karlgren, *The Book of Odes* (1950) and *Glosses* (BMFEA; ©);
    - Waley 1937/1996 (©), Kern (Oxford Bibliographies 2023, verified via Crossref; his translation is forthcoming, verify).
  - Dictionaries:
    - Kroll, *Student's Dictionary of Classical and Medieval Chinese* (Brill 2015/2017; ©);
    - Schuessler, *ABC Etymological Dictionary of Old Chinese* (2007; ©);
    - Baxter–Sagart 2014 Old Chinese reconstruction (the list is reported as a free download; the Google Site redirects to a Google sign-in from here);
    - the commentary tradition (Mao, Zheng Xuan, Kong Yingda, Zhu Xi, Ma Ruichen), which is all PD.
  - **Hebrew:** he.wikipedia (verified via WebFetch) lists six partial Hebrew translations:
    - Lichtenbaum 1943–45 (3 poems, via German);
    - Aharon Shabtai, *שירי אהבה סיניים* (Tamuz 1981; 5 poems);
    - Dan Daor, *108 שירים מן הקלאסיקה הסינית* (Hargol 2002; 7 poems, from the Chinese);
    - Daor, *משתה לאדם בודד* (Hargol 2010; 6 poems);
    - Chaim Tadmon, *הלבנה והרוח* (Dehak 2016; c. 14–16 poems, via English);
    - Ofer Waldman (online 2014–19; 4 poems).

    The Hebrew Wikipedia article also says that Dror Green's *נהר האהבה* (1990) is a pseudo-translation. **No full Hebrew Shijing exists.**
- *Feasibility.* The archaic vocabulary, rare graphs and loan characters are hard, but every line has 2,000 years of commentary. An LLM handles it at a medium-good level, with Karlgren-style gloss checking. Size: start with the c. 40 Da ya and Song hymns (c. 8,000 characters), then the Guofeng.
- *Benefit*: Bible MED-HIGH / Soul HIGH. *Recommendation*: **the first East Asian corpus.** Start with Sheng min, Huang yi, Xuan niao, Wen wang, Qi yue and Yun han, then the Guofeng.

#### B. The flood and the ordering of the world (a corpus)
**Archaic and Classical Chinese · composition dates are given per text below · base texts: Kanripo KR1b0001 尚書 (TLS text; verified: chapter list and character counts computed today); the bronze on its own.**

The texts:
1. **Yao dian 堯典 (with Shun dian).** 1,305 characters. Composition is debated: a Warring States composition (c. 5th–4th c. BCE) drawing on older lore.
   - Yao orders Xi and He to observe the sun and stars and fix the year of 366 days and the four seasons ↔ Gen 1:14.
   - "The surging flood waters harm everywhere; vast, they embrace the mountains and overtop the hills; swelling, they reach to heaven" (湯湯洪水方割，蕩蕩懷山襄陵，浩浩滔天) ↔ **Gen 7:19–20**.
   - Gun is appointed and fails after nine years; Shun's punishments and exile of the "four criminals".
2. **Yu gong 禹貢.** 1,206 characters (verified count). Probably 5th–3rd c. BCE.
   - After the flood Yu "spread out the land, followed the mountains, cut the trees, and fixed the high mountains and great rivers". He divides the world into **nine provinces**, with each one's soil grade, tribute and waterways, and finally into five concentric zones.
   - ↔ **Gen 10** (the Table of Nations, "by their lands, their languages, their families, their nations"), 9:19, 11:8. This is the closest structural analogue of a post-flood "map of the world" outside the ANE. It is typological.
   - The Shanghai Museum ***Rong Cheng shi*** (c. 300 BCE) has a **different** nine-province list (Dorofeeva-Lichtmann, WSWG page found by search). This is useful to show that the scheme varied.
3. **Hong fan 洪範.** 1,074 characters. Date debated (Western Zhou core? or 4th c. BCE).
   - "Of old Gun dammed the flood and threw the five phases into disorder; Di was angry and did not give him the Great Plan in nine categories… Gun was executed, Yu succeeded, and Heaven gave Yu the Great Plan."
   - ↔ **Gen 9:1–17**: law and order granted after the flood.
4. **Lü xing 呂刑.** 963 characters.
   - Chi You's rebellion and the Miao's cruel punishments; Shangdi "commanded Chong and Li to cut the communication between earth and heaven" (乃命重黎絕地天通) ↔ **Gen 11:1–9** (Babel), 3:24, 28:12. Guoyu "Chu yu" explains the myth.
   - Then a scale of redemption fines for the five punishments ↔ Ex 21:30 *kofer*, Num 35:31.
5. **Bin/Sui Gong xu 豳/遂公盨.** 98 characters. Mid–late Western Zhou (c. 900–850 BCE); bought on the Hong Kong market in 2002 (Poly Art Museum), **unprovenanced**.
   - "Heaven commanded Yu to spread out the land (敷土), follow the mountains and dredge the rivers, and then he set out the lands and fixed the levies, sent down the people and supervised their virtue…" This is the earliest witness to the Yu myth, centuries before the Shangshu.
   - Key studies (Early China 35–36, 2012–13; Crossref-verified):
     - Chen Shu, "Collected Interpretations of the X Gong Xu" (transcriptions and translations by 19 scholars);
     - Constance Cook, "Sage King Yu and the Bin Gong Xu" (she reads it as a harvest song to Yu);
     - Xing Wen, "The Suigong Xu Calligraphy and Inscription" (late Western Zhou date; discusses authenticity).

     All three are ©.
6. **Myth fragments** (Classical Chinese):
   - Shanhaijing 18 (Hainei jing): "the flood swelled to heaven; Gun stole Di's self-swelling soil to dam it without waiting for Di's command; Di had Zhurong kill Gun at Feather Mountain; Gun gave birth to Yu (from his belly)" ↔ Prometheus rather than Noah.
   - Tianwen's Gun–Yu questions.
   - Mencius 3A4 and 3B9 (the flood in Yao's time, snakes and dragons driven into the marshes ↔ Gen 1:21 *tanninim*? weak).
   - **Huainanzi 6 "Lan ming"**: the four pillars broke, fire raged, waters "flooded without ceasing"; Nüwa smelted five-coloured stones to patch the sky, cut the turtle's legs for pillars, and killed the black dragon ↔ **Gen 7:11** (the windows of heaven and the fountains of the deep).
- *Bible.* The corpus lets the commentary see **what a flood story looks like without sin and punishment.**
  - In China the flood is a primeval disorder. It is ended by labour, by dredging rivers, and by dividing the land and setting tribute.
  - The "covenant" that follows is a cosmic-political order (Hong fan), not a promise to all flesh.
  - Classic studies: Mark Edward Lewis, *The Flood Myths of Early China* (SUNY 2006; ©); Anne Birrell, *Chinese Mythology* (1993; ©); Derk Bodde, "Myths of Ancient China" (1961); Michael Puett, *To Become a God* (2002) on Chong–Li.
  - Consensus: the comparison is typological; it is accepted as illuminating, and nobody proposes contact.
- *Soul.* The ancient Chinese moral imagination of order (治), of rulers as labourers, and of Heaven that gives and withdraws charters.
- *Base text and tools.*
  - Kanripo KR1b0001 (verified).
  - Legge, SBE 3 (*Shu King*, 1879; PD, archive.org verified); Couvreur, *Chou king* 1897 (PD, reported); Karlgren, *The Book of Documents* (BMFEA 1950; ©).
  - **Kern & Meyer (eds.), *Origins of Chinese Political Philosophy: Studies in the Composition and Thought of the Shangshu* (Brill 2017; Crossref-verified)**: reported to be **open access** (verify; brill.com returns 403 to scripts).
  - The Tsinghua slips give manuscript versions of other Shangshu-type chapters (*Jin teng*, *Yin gao*, *Fu Yue zhi ming*), all published in Chinese.
  - **Warning:** the Shangshu chapters found only in the "Old Text" (Guwen) version are 4th-c. CE forgeries (Mei Ze). They include **Da Yu mo**, Wu zi zhi ge, Tang gao, Tai shi and Wu cheng. Do not use them as ancient. My count of the 28–29 authentic "New Text" chapters is 17,507 characters.
- *Feasibility.* The Yao dian and Yu gong are medium in difficulty (the Yu gong is full of place names and soil terms). The Zhou "Gao" chapters are notoriously difficult ("佶屈聱牙", Han Yu) but are not needed for this corpus. The bronze needs a consensus transcription (Chen Shu's table).
- *Benefit*: Bible HIGH (typological) / Soul MED-HIGH. *Recommendation*: **a strong second project**, keyed to Gen 6–11 and built as a corpus of c. 6–7k characters.

#### C. Shang oracle-bone inscriptions 甲骨文
**Shang Chinese · c. 1250–1050 BCE (Wu Ding to Di Xin) · the bones themselves · c. 150,000 inscribed pieces, of which the Heji 合集 (1978–82) holds 41,956 rubbings · fragmentary, but formulaic: preface, charge, prognostication, verification.**
- *What it is.* The king's questions to his ancestors and to Di, on turtle plastrons and ox scapulae, cracked with fire:
  - "Crack-making on *jiashen*, Que divined: Fu Hao's childbearing will be good." The verification adds: "On the 31st day she gave birth; it was not good: a girl."
  - Toothache ("is it Father Yi who harms the king?"), dreams, rain, harvest, hunts, wars, eclipses.
  - Human sacrifice ("offer 300 Qiang").
  - The names of the four directions and their winds (Heji 14294).
- *Bible.* The positive/negative pairing ("It will rain / It might not rain") is a structural analogue of the binary oracle:
  - **1 Sam 23:9–12** ("Will Saul come down? – He will come down"), 14:41 (Urim and Tummim), 28:6 ("neither by dreams nor by Urim");
  - also Deut 18:10–11 (forbidden divination) and Deut 11:14 (rain in its season);
  - "Di commands the rain" ↔ the theology of 1 Kgs 17:1.

  This is a typological comparison; Urim scholarship (e.g. Van Dam 1997) uses it rarely, and that is a gap.
- *Soul.* An exceptional window: a ruler's private fears, in tens of thousands of short records, with the outcome often noted.
- *Base text and tools.*
  - **Adam C. Schwartz, *The Oracle Bone Inscriptions from Huayuanzhuang East*** (De Gruyter Mouton 2019; DOI 10.1515/9781501505294). Crossref licence: **CC BY-NC-ND 3.0** (verified). The doi.org link redirects to degruyterbrill.com (HTTP 202 to curl: a challenge page; PDF not tested).
    - It covers the Huadong H3 pit, whose diviner was a prince, not the king. Health, rites and learning dominate. It gives transcriptions, translations and notes. Size c. 560 pieces / c. 2,500 inscriptions (verify).
  - Keightley, *Sources of Shang History* (1978): on archive.org only as lending (`sourcesofshanghi0000keig`, access-restricted, verified). An "opensource" copy (`keightley-sources-of-shang-history-1978`) is an **unauthorised upload – do not use**.
  - Takashima Ken-ichi, *Studies of Fascicle Three of Inscriptions from the Yin Ruins* (IHP 2010; Bingbian translations; ©, reported).
  - Yin Qi Wen Yuan 殷契文渊 (jgw.aynu.edu.cn: HTTP 200, a JS app; free registration reported; c. 240,000 image records).
  - Open datasets: OBIMD (*Scientific Data* 2026; 10,077 images with transcriptions) and HUST-OBC (from search results).
  - CHANT 漢達文庫 (CUHK): **login required** (verified).
- *Feasibility.* An LLM cannot reliably read the graphs. It *can* translate a published modern-character transcription (釋文), because the language is formulaic and the vocabulary small. Identifications of graphs remain disputed, and the apparatus must show alternatives. Work from Schwartz plus a topical selection from Heji, with Keightley's and Takashima's readings consulted where accessible.
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: **translate the Huadong corpus (open) as a corpus of "voices"**, plus a themed Heji selection (childbirth, dreams, rain, the four winds).

#### D. Western Zhou bronze inscriptions 金文
**Western Zhou Chinese · c. 1045–771 BCE · the bronzes · c. 16,700 inscribed bronzes in Wu Zhenfeng's *Mingtu* (2012, plus later supplements); Jicheng 集成 12,113 items (1984–94) · cast, so well preserved.**
- *What it is.* Dedications cast to commemorate royal gifts, appointments, land deals and law cases, ending "may sons and grandsons forever treasure and use it".
- *Candidates:*
  - **Shi Qiang pan** 史牆盤 (284 characters: a recital of seven Zhou kings and the scribe's ancestors ↔ Deut 26:5–10, Ps 78);
  - **Qiu Lai pan** 逑盤 (2003; 372 characters; twelve kings);
  - **Da Yu ding** 大盂鼎 (291 characters: Shang lost the Mandate through drunkenness ↔ the Jiu gao, Lev 10:9, Gen 9:20–27);
  - **He zun** 何尊 (122 characters: "I will dwell in this central land" 宅茲中或);
  - **Mao Gong ding** 毛公鼎 (497 characters, the longest);
  - **San shi pan** 散氏盤 (c. 350 characters: a boundary treaty with oath and curse ↔ **Gen 31:44–54**, Laban's heap);
  - **Zhen yi** 𠑇匜 (157 characters: a judgment where the loser's sentence of 1,000 lashes is reduced and he swears an oath ↔ **Deut 25:2–3**, Ex 22:10);
  - **Hu ding** 曶鼎 (law cases on slaves and grain theft ↔ Ex 21–22);
  - **Bin Gong xu** (see B).
- *Bible.* Mostly legal-ritual and covenant formulary: oaths with self-curses, boundary treaties, the "forever" formula ↔ Gen 17:7. The parallels are typological; specific and good for the law block (priority 4).
- *Soul.* Medium. The language is formulaic, but the human situations are real (a lawsuit, a reward, pride in ancestors).
- *Base text and tools.*
  - **No open critical edition.** Jicheng and Mingtu are print and ©.
  - The Academia Sinica 殷周金文暨青銅器資料庫 (bronze.asdc.sinica.edu.tw) answers 200 but needs a **login**; its terms allow personal, non-commercial use only (verified).
  - zh.wikisource has some famous ones; **Mao Gong ding verified**, but the page itself says it is an "interpreted text, not the original inscription", 75% proofread.
  - Translations:
    - Cook & Goldin (eds.), *A Source Book of Ancient Chinese Bronze Inscriptions* (SSEC 2016/2020; availability verify);
    - Shaughnessy, *Sources of Western Zhou History* (1991; ©);
    - Robert Eno's free teaching reader "Inscriptional Records of the Western Zhou" (Indiana Univ.; the host scholarworks.iu.edu is blocked here; reported).
- *Feasibility.* Medium-low. An LLM knows the famous inscriptions (risk: recalling memorised translations), and archaic graphs and loans need a consensus transcription. A selection of c. 10 long inscriptions (c. 2,500 characters) is manageable.
- *Benefit*: Bible MEDIUM / Soul MEDIUM. *Recommendation*: a later, smaller project, keyed to oaths and law (San shi pan, Zhen yi, Hu ding) and to the ancestral recitals.

#### E. Excavated cosmogonies (Guodian, Shanghai Museum, Chu silk, Tsinghua)
**Chu script, Classical Chinese · c. 4th c. BCE · the manuscripts (Guodian tomb c. 300 BCE; Zidanku silk c. 300 BCE; Shanghai Museum and Tsinghua slips from the antiquities market, c. 305 BCE by C14) · c. 2,500 characters together.**
- **Taiyi sheng shui** 太一生水 (Guodian, 14 slips, c. 305 characters). "The Great One gave birth to water; water returned and assisted the Great One, and thus heaven was formed; heaven returned and assisted the Great One, and thus earth was formed…" Then come spirits, yin–yang, the four seasons, hot and cold, wet and dry, and the year.
  - ↔ **Gen 1:2** (water before heaven), 1:6–8 (the *raqiaʿ* formed in the waters). It is typological, and Allan 2003 (*T'oung Pao*) compares it with water cosmogonies.
  - **Verified** on zh.wikisource (two reading versions with variant notes).
- **Hengxian** 恆先 (Shanghai Museum III, 13 slips, c. 510 characters). "In the beginning there was Constancy, nothing at all: simplicity, stillness, emptiness… qi generated itself"; names and things arise.
  - ↔ Gen 1:1–2. The contrast is creation without a speaking creator, and **naming as part of creation** ↔ Gen 1:5, 2:19–20.
  - Translations: Brindley et al. (*Dao* 2013/2016; ©, Crossref-verified).
- **Chu Silk Manuscript** 楚帛書 (Zidanku; c. 900 characters in three texts; damaged).
  - Text B: in the dark, formless beginning (夢夢墨墨，亡章弼弼) ↔ ***tohu wa-bohu*, *ḥoshekh***, Fuxi takes a wife and four children are born (the four seasons and the four directions), who mark out heaven and earth; Yandi has Zhurong set up the four pillars; after 1,000 and 100 years the sun and moon are born ↔ Gen 1:14–18 (luminaries after the earth) and Job 38:4–6.
  - Text A: astral omens; Text C: the twelve months, with taboos.
  - Edition: **Li Ling, *The Chu Silk Manuscripts from Zidanku, Changsha*, vols. I–II** (CUHK Press 2020, 2025; Crossref-verified; ©).
- **Chu ju** 楚居 (Tsinghua I, 2010; 16 slips). The Chu royal ancestors' origin.
  - Ji Lian marries Bi Zhui; their child **is born by bursting from his mother's side (潰自脅出); she dies**; the shamans wrap her with thorns (*chu* 楚), which gives the name Chu.
  - ↔ **Gen 2:21** (*ṣelaʿ*), Gen 35:16–19 (Rachel dying in childbirth; the naming). Typological and short.
- Also the Guodian *Laozi* (c. 2,000 characters, about one third of the received text). Chapter 25 ("there was something formed out of chaos, born before heaven and earth") ↔ Gen 1:1–2, Prov 8:22–31.
- *Soul.* How Warring States thinkers and ritualists imagined the beginning: impersonal, generative, numerical.
- *Feasibility.* The texts are short. Their readings depend on palaeographic decisions, so translate from a consensus "broad transcription" (寬式釋文) and show the alternatives. The Chinese editions are ©, but the transcribed text is short and factual.
- *Benefit*: Bible MED-HIGH (Gen 1:1–2, the current work) / Soul MED-HIGH. *Recommendation*: **a quick win now**, as a comparison file for Gen 1:1–2.

#### F. Chuci 楚辭 (Songs of Chu): Tianwen, Nine Songs, Summons of the Soul
**Classical Chinese (Chu) · 4th–3rd c. BCE (attributed to Qu Yuan, c. 340–278 BCE; the Nine Songs rework older shamanic hymns) · Wang Yi, *Chuci zhangju*, 2nd c. CE; Song prints · Tianwen c. 1,550 characters / 172 questions; Nine Songs 11 hymns; complete.**
- *What it is.*
  - **Tianwen 天問**: "Of the beginning of old, who told the tale? When above and below had no form, how could they be examined?…"
    - Then question after question on the nine-layered sky, the pillars, the sun's course, Kunlun, the ten suns, Nüwa's body ("who made her?"), Gun and Yu and the flood, and the exposed Hou Ji ("why was he placed on the ice, and why did the birds warm him?").
    - Jiandi and the swallow's egg, and the fall of Xia and Shang.
  - **Jiu ge 九歌**: hymns sung by shamans and shamanesses courting gods (the Lord in the Clouds, the Ladies of the Xiang, the Lord of Fate, the River Earl, the Mountain Spirit) and **Guo shang**, a hymn for the soldiers fallen in battle.
  - **Zhao hun 招魂**: a shaman calls a soul back from the four directions (giants that eat men, ten suns, red ants like elephants) to the joys of home.
- *Bible.*
  - Tianwen ↔ **Job 38–39** (a catalogue of cosmic questions; but here the questions are asked *of* tradition, not by God), Gen 1:2, Ps 104.
  - Zhao hun ↔ Ps 139:8–9.
  - Nine Songs ↔ Song of Songs and Hos 2 (divine-human love; typological).
- *Soul.* HIGH: shamanic ecstasy, love-longing for a god, grief for the war-dead.
- *Base text and tools.* **Kanripo KR4a0001** 楚辭 (TLS base; **verified**, Tianwen = file 3); zh.wikisource. Translations: Hawkes 1959/1985 (©; archive.org lending only), Field, *Tian wen* (1986; ©), Sukhu, *The Songs of Chu* (2017; ©). Hebrew: none found (verify whether Daor's anthologies include Chuci).
- *Feasibility.* HIGH for the Nine Songs and Zhao hun; medium for the Tianwen (riddling allusions to lost myths; the commentaries disagree).
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: a strong "soul" project; the Tianwen fits beside Job and Gen 1.

#### G. Shanhaijing 山海經 (Classic of Mountains and Seas)
**Classical Chinese · strata from the 4th c. BCE (Shan jing) to Han (Hai jing, Dahuang jing) · Guo Pu's edition (4th c. CE); Song prints · 18 books, c. 31,000 characters; complete.**
- *What it is.* A ritual-geographical inventory. Mountain by mountain it lists:
  - minerals, plants, **birds, fish and beasts**, each with its look, its cry, and what happens if you eat it ("eating it cures goitre");
  - the gods of each range and their offerings.

  The "Seas" books describe strange peoples, Kunlun, Xihe bathing the ten suns, the Torch Dragon whose opened eyes are day, and the nine-headed serpent Xiangliu killed by Yu.
- *Bible.*
  - **Gen 1:20–22** (birds, fish and monsters as created kinds, the unit now in progress): the Shanhaijing is the opposite pole, a world full of hybrid, omen-bearing creatures.
  - Lev 11 / Deut 14 (animal lists with dietary rules) ↔ its "eat it and…" formula.
  - Gen 2:10–14 ↔ the rivers flowing from Kunlun (a classic comparison).
  - Gen 10 (peoples at the edges of the world).
  - Job 41:10 (Leviathan's eyes "like the eyelids of the dawn") ↔ the Torch Dragon.

  All typological.
- *Soul.* MED-HIGH: wonder, fear, medicine, how the edge of the world was imagined.
- *Base text and tools.* **Kanripo KR3l0090** 山海經 (Wenyuange Siku text; **verified**); zh.wikisource. Translations: Birrell 1999 (Penguin; ©), Strassberg, *A Chinese Bestiary* (2002; ©), Fracasso (Italian; ©). Hebrew: Ofer Waldman, partial, unpublished (he.wikipedia).
- *Feasibility.* Medium-high. Many rare characters and unidentifiable animals; the formulaic style helps.
- *Benefit*: Bible MEDIUM / Soul MED-HIGH. *Recommendation*: an **excerpt for Gen 1:20–22 now** (the bird and fish entries of a few ranges, plus Hainei jing 18 for the flood); the full text later.

#### H. Zhouyi 周易 core text
**Western Zhou Chinese · c. 9th c. BCE (line statements) · Shanghai Museum Chu slips (c. 300 BCE; c. ⅓ of the text), Mawangdui silk (168 BCE), Fuyang (165 BCE) · 64 hexagram statements + 386 line statements, c. 4,000+ characters; complete.**
- *What it is.* Divinatory phrases and miniature poems: "the dragons fight in the wilds, their blood is black and yellow"; "a crane calls in the shade, its young answer"; "not robbers – wooers"; "the hen-pheasant…"
- *Bible.* Gen 49 (Jacob's animal oracles), Num 23–24. Weak.
- *Soul.* HIGH: the oldest Chinese "folk poetry" under the oracle.
- *Base text and tools.* **Kanripo KR1a0001** (TLS; **verified**); Legge, SBE 16 (1882; PD); Rutt, *Zhouyi* (1996; ©: the best "Bronze Age" reading); Shaughnessy 1996 / 2014 (©). Hebrew: a full Yijing translation is listed (1993; the translators' names on he.wikipedia are garbled; verify).
- *Feasibility.* Medium. Very terse, so every line is an interpretive choice; this is best done with the excavated variants.
- *Benefit*: LOW-MED / HIGH. *Recommendation*: a later "soul" project.

#### I. Daybooks, demons and the dead (Shuihudi, Fangmatan, Baoshan, Jiudian)
**Qin and Chu Chinese · 4th–3rd c. BCE (Baoshan 316 BCE; Shuihudi tomb 217 BCE; Fangmatan c. 239 BCE) · the manuscripts · a selection of c. 6,000 characters; good.**
- **Shuihudi *Rishu* "Jie" 詰** ("Spellbinding", c. 70 entries). How to recognise and expel demons that haunt a house: the "spirit who steals children", the "ghost who loves women", and how to use peach-wood bows, white stones and shoes. Also hemerologies: good and bad days for marriage, building, travel, and the bad day on which Yu married the daughter of Tushan.
- **Fangmatan "Dan" 丹** (8 slips). Dan died and came back after three years, released by the Director of Fates' scribe. He reports what the dead dislike (many clothes; spilt offerings; people spitting during the rite).
- **Baoshan**: divination and prayer records for the dying official Shao Tuo, with offerings to ancestors and spirits ("the drowned", "the Lord of the Earth").
- *Bible.* Deut 18:10–11 (*meʿonen*: lucky days), Lev 19:26, 31; Deut 26:14 (giving to the dead); 1 Sam 28; 2 Kgs 1:2 (inquiring about illness). Typological, and good for the law and ritual blocks.
- *Soul.* HIGH: everyday fears and the household cosmos.
- *Tools.* The Chinese editions (Shuihudi 1990; Wuhan 2014 *Qin jiandu heji*; ©). Translations:
  - Harper, "A Chinese Demonography of the Third Century B.C." (HJAS 1985; ©);
  - Harper's "Spellbinding" in Lopez (ed.), *Religions of China in Practice* (Princeton 1996; Crossref-verified; ©);
  - Harper & Kalinowski (eds.), *Books of Fate and Popular Culture in Early China* (Brill 2017; OA status verify);
  - Cook, *Death in Ancient China* (Brill 2006; ©).
- *Feasibility.* Medium. Technical vocabulary and loan graphs, but the published transcriptions are good.
- *Benefit*: MEDIUM / HIGH. *Recommendation*: a good "soul" project of medium size.

#### J. Zhangjiashan legal texts (*Ernian lüling* 二年律令, *Zouyanshu* 奏讞書)
**Han Chinese · 186 BCE burial (statutes of 186 BCE; Qin and early Han law) · tomb M247 manuscript · c. 27 statute sections + 22 cases; good.**
- *What it is.* The oldest substantial Chinese statute collection, with real judicial cases. One case: a widow had sex with a lover behind her husband's coffin; the court debates whether that is "unfilial".
- *Bible.* **Ex 21–23** (assault, injury to slaves, striking parents ↔ Ex 21:15, 17; theft of livestock; homicide by poison or *gu* sorcery ↔ Ex 22:17), Deut 19–25, Num 35. Casuistic form, typological.
- *Base text and tools.* **A. Barbieri-Low & R. Yates, *Law, State, and Society in Early Imperial China*** (Brill 2015, 2 vols; critical edition and translation). I believe it is **open access** (verify; brill.com gives 403 here). Hulsewé, *Remnants of Ch'in Law* (1985; ©) for the Shuihudi statutes.
- *Feasibility.* Medium. Legal Chinese is well studied.
- *Benefit*: MED-HIGH (law block) / MEDIUM. *Recommendation*: a candidate for the law corpus (`חוקים-ובריתות/`) as a far comparandum. It is late by the user's standard (186 BCE), but it is the earliest Chinese law that survives.

#### K. Myth fragments in Han and pre-Han prose (a quick-win corpus)
- **Lüshi chunqiu 14.2 "Ben wei" (239 BCE).** Yi Yin's mother is told in a dream: "when the mortar sweats water, go east and do not look back". She looks back, the town is flooded, she becomes a hollow mulberry, and the baby Yi Yin is found in it ↔ **Gen 19:17, 26** (Lot's wife) and Ex 2. A classic comparison (e.g. Allan, *The Heir and the Sage*, 1981; ©).
- **Fengsu tongyi (Ying Shao, c. 195 CE; known only from Taiping yulan 983 CE).** Nüwa moulds humans from yellow earth. Tiring, she drags a rope through mud, and so the rich come from the moulded ones and the poor from the rope ↔ **Gen 2:7**. Short; the myth is older, the text late.
- **Huainanzi (139 BCE).**
  - Ch. 3: "before heaven and earth had form… the Great Beginning".
  - Ch. 4: Kunlun and its four rivers ↔ Gen 2:10–14.
  - Ch. 6: Nüwa and the broken sky.
  - Ch. 8: Yi shoots the ten suns.

  Translation: Major et al. 2010 (Columbia; ©).
- **Pangu** (Xu Zheng, *Sanwu liji* and *Wuyun linian ji*, 3rd c. CE). A cosmic giant whose body becomes the world ↔ Tiāmat. **Late**, possibly influenced by South Asian myth; flag it.
- *Base text.* Kanripo and zh.wikisource (reported). *Benefit*: Bible MED-HIGH / Soul MEDIUM. *Recommendation*: **a short comparanda file now**, together with E.

#### L. The philosophers and the histories (brief)
- **Daodejing** (Guodian c. 300 BCE; Mawangdui; received). It has c. 11 Hebrew translations (Daor & Ariel 2007 from the Chinese; others), so a new one adds little. Chapters 1, 4, 6, 25, 42 are useful comparanda for Gen 1 and Prov 8 in a file of excerpts.
- **Analects** (Warring States compilation; Hebrew: Leslie & Porat 1960; Katz 2006). LOW.
- **Mozi** ("Will of Heaven"; "Explaining Ghosts", with ghost-vengeance stories ↔ Gen 4:10), **Zuozhuan** (dreams, ghosts, oaths and covenants *meng* 盟 ↔ Gen 15, Ex 24; huge, 4th c. BCE), **Guoyu**. MEDIUM for later rounds. The Zuozhuan's covenant-oath texts (and the Houma covenant tablets, 5th c. BCE, c. 5,000 tablets with oath and self-curse) are a good comparandum for Deut 27–29; they are noted in §3.

### 2.2 Japan

#### M. Kojiki 古事記 (712)
**Old Japanese written in Chinese characters (kanbun with Japanese word order; man'yōgana for songs and names) · compiled 711–712 by Ō no Yasumaro from the recitation of Hieda no Are. The court traditions behind it are 6th–7th c. (the lost *Teiki* and *Kyūji*); the myths are older but have been reworked into royal ideology · earliest MS: Shinpukuji-bon 真福寺本 (1371–72) · 3 books (c. 45,000 characters, verify); 112 songs; complete.**
- *What it is.*
  - **Book 1 (Age of the Gods):**
    - the first gods "when heaven and earth first opened"; the young land "like floating oil, drifting like a jellyfish";
    - Izanagi and Izanami stir the brine with a jewelled spear and land congeals; their marriage round the pillar;
    - the first child, the leech-child, is a failure because the woman spoke first, and is set adrift in a reed boat;
    - the birth of the islands and the gods; Izanami dies giving birth to fire;
    - Izanagi goes to Yomi; she has eaten the food of Yomi; he looks at her rotting body, flees and blocks the pass with a boulder. She vows "I will kill 1,000 of your people a day", he answers "I will build 1,500 birth-huts a day";
    - his washing (misogi) gives birth to Amaterasu, Tsukuyomi and Susanoo;
    - Susanoo's outrages (breaking the dikes, filling the channels, flaying a horse backwards, defecating in the hall); Amaterasu's withdrawal into the rock cave and the darkness; the gods' comic dance draws her out;
    - Susanoo is expelled (fined, beard and nails cut); Ōgetsuhime is killed and crops grow from her body;
    - **Yamata-no-Orochi**: an eight-headed, eight-tailed serpent stretching over eight valleys, with a girl to be devoured; Susanoo makes it drunk, cuts it up, and finds a sword in its tail. Then the first song, "Eightfold clouds rise…";
    - Ōkuninushi (the White Hare of Inaba; killed twice by his brothers and revived; tested by Susanoo with snakes, centipedes and fire; flees with Suseri-hime and Susanoo's sword, bow and koto);
    - the descent of Ninigi; the two daughters of the mountain god (he keeps the beautiful one and returns the ugly one, so human life is as short as blossoms);
    - the brothers of the sea and the mountain; the sea-god's palace; Toyotama-hime gives birth in the form of a *wani* and forbids him to look.
  - **Books 2–3**: Jimmu's eastern march (guided by a giant crow), Yamato Takeru's tragic campaigns and death songs, love songs of emperors.
- *Bible* (all typological; no contact; but the density of motifs is unusual):
  - Gen 1:2, 1:9;
  - Gen 2:18–24 and 3:16–17 (the gender order of the first marriage);
  - Gen 3:19 and 6:3 (origin of death and short life);
  - Gen 19:26 (the forbidden look);
  - **Gen 1:21 / Ps 74:13–14 / Isa 27:1** (the multi-headed serpent and the sword; for the *tanninim* unit);
  - Lev 16:21–22 (Susanoo's expulsion with his sins);
  - Gen 29:16–26 (two sisters: the elder "ugly", the younger beautiful);
  - Gen 31:19–35 (the flight with the father-in-law's treasures);
  - Gen 25–27 (rival brothers);
  - Ex 2:3 (the reed boat);
  - Gen 8:7 (the crow guide).

  Comparative studies: Yoshida Atsuhiko, Ōbayashi Taryō (Japanese myth in Eurasian context; ©); Witzel, *The Origins of the World's Mythologies* (2012; ©).
  - **Warning:** the "Japanese–Israelite common ancestry" theories (*Nichiyu dōsoron*, N. McLeod 1870s onward) are pseudo-history; do not cite them.
- *Soul.* HIGH: death and pollution, grief (Izanagi's weeping produces a goddess), the comic and the grotesque, love songs, the hero's lonely death (Yamato Takeru's song "Yamato, most excellent of lands").
- *Base text and tools.*
  - **zh.wikisource 古事記**, three books, collated on the Shinpukuji MS (**verified**: 上卷 includes the preface, the Orochi episode and the song).
  - ja.wikisource gives *Kokushi taikei* (1897–1901; PD), with the NDL scan (**verified** for the index page).
  - **ONCOJ** (Oxford–NINJAL Corpus of Old Japanese, CC BY 4.0). **Verified**: `git clone https://github.com/ONCOJ/data` works.
    - Contents: 4,991 TEI files, incl. **KK.1–112 = the Kojiki songs**, NSK = 133 Nihon shoki songs, MYS = 4,693 Man'yōshū items, FK = 20 Fudoki songs, BS = 21 Bussokuseki poems, SNK = Shoku Nihongi songs.
    - Each line carries the man'yōgana original, a phonemic transcription, lemma IDs, a syntactic parse and a lexicon with English definitions (e.g. *kumwo* "cloud").
    - The current release holds poetry only; there are no Norito or Senmyō.
  - Translations:
    - Chamberlain 1882 (PD; on sacred-texts, which is **Cloudflare-blocked** here; LibriVox audio on archive.org);
    - Philippi 1968 (Princeton; ©);
    - Heldt, *The Kojiki: An Account of Ancient Matters* (Columbia 2014; ©, Crossref-verified).
  - Japanese annotated editions: NKBT, SNKBZ (©).
  - Old Japanese tools: Frellesvig, *A History of the Japanese Language* (2010; ©); Vovin's Man'yōshū volumes (©); the *Jidaibetsu kokugo daijiten* (©).
  - **Hebrew:** no translation found. Yaakov Raz, *המיתולוגיה היפנית* (Mapa 2000) retells a large selection.
- *Feasibility.* HIGH. The kanbun prose is easy for an LLM (with Japanese readings of names to be fixed by a glossary). The songs are hard, but ONCOJ solves them.
- *Benefit*: Bible MED-HIGH / Soul HIGH. *Recommendation*: **the first Japanese project: Book 1 complete (c. 15,000 characters), with all its songs.** Use the **Nihon shoki** Age-of-Gods books (vols. 1–2, with their "one writing says…" variants) as the apparatus of variants (Aston 1896 PD, archive.org **verified**: `nihongi1asto`, no access restriction).

#### N. Norito 祝詞 (Engishiki book 8)
**Old Japanese in senmyō style (large characters for content words, small ones for particles) · Engishiki compiled 905–927, promulgated 967. The Ōharae and Toshigoi formulas are generally dated to the 7th–early 8th c. (the Ōharae is ritually attested from the Taihō code, 701), with older strata · earliest MS: the Kujō-ke manuscript of the Engishiki (late Heian, Tokyo National Museum; includes book 8 – verify) · 27 prayers; complete.**
- *What it is.* The words priests spoke to the gods at the state rites:
  - **Toshigoi** (prayer for the year's harvest: "the late-ripening rice… in ears eight hand-spans long");
  - **Ōtonohogai** (blessing of the palace);
  - **Hishizume** (pacifying fire: it retells Izanami's death in giving birth to fire);
  - **Michiae** (feasting the road-gods so that demons stop at the crossroads);
  - **Tatari-gami utsushi-yaru** (sending away cursing gods);
  - the Izumo governor's congratulatory words;
  - a spell in **Chinese** spoken by immigrant scribes (Yamato-no-Aya) at the purification;
  - and the **Ōharae** (Great Purification of the last day of the sixth and twelfth months).
- *Bible.* The Ōharae's lists:
  - "heavenly sins" (*amatsu tsumi*): breaking ridges, filling channels, opening sluices, double-sowing, planting stakes, flaying alive, flaying backwards, defecating;
  - "earthly sins" (*kunitsu tsumi*), quoted from the ja.wikisource text (verified): cutting living skin, cutting dead skin, white people (*shirahito*), *kokumi*, the sin of violating one's own mother, one's own child, mother and child, child and mother, the sin of violating animals, the calamity of crawling insects, of the gods on high, of the birds on high, killing animals and practising sorcery.

  Parallels:
  - **Lev 18:7, 17, 23; 20:14–16** (the same incest pairs and bestiality, in a list);
  - Lev 13 (white skin disease, ↔ *shirahito*; Ex 4:6, Num 12:10);
  - Lev 21:18–20 (blemishes);
  - Ex 22:17 (sorcery);
  - **Lev 16:21–22** and Mic 7:19: the sins are loaded on purification objects, carried by the rivers to the sea, swallowed by Hayaakitsu-hime, blown by Ibukido-nushi to the netherworld, where Hayasasura-hime "wanders off and loses them".

  This is the strongest Leviticus comparandum in East Asia. It is typological: there is no contact, but the logic of sin as removable pollution is parallel, and so is the mixture of moral and physical defilement. Studies: Philippi 1959 introduction; Naumann (German, ©); Bock, *Engi-shiki* (1970–72; ©).
- *Soul.* HIGH: the cadence of liturgy, a farming people's fears.
- *Base text and tools.*
  - **ja.wikisource 六月晦大祓祝詞** (**verified**: the full text in kanji-kana with okurigana, plus a hiragana version; the man'yōgana has been converted). It cites the NDL scan of *Engishiki* book 8.
  - **NDL Digital Collection pid 991103 = *Kokushi taikei* vol. 13** (title verified; Engishiki; PD).
  - The NIJL kokusho database (kokusho.nijl.ac.jp: 200) for manuscript images.
  - Translations: **Satow, "Ancient Japanese Rituals"** (TASJ 7, 9, 1879–81; PD; the TASJ volumes are on archive.org, items for vols. 1, 8 seen; the parts with the norito need locating); Florenz, *Japanische Annalen / Die historischen Quellen der Shinto-Religion* (1919; PD in the EU, verify); Philippi, *Norito* (1959 / Princeton 1990; ©, archive.org lending only, verified); Bock 1970 (©).
- *Feasibility.* Medium-high. Liturgical Old Japanese with set formulas, and modern Japanese commentaries exist. It is not in ONCOJ's current release; the older OCOJ had a phonemic Norito text (search result).
- *Benefit*: Bible MED-HIGH (Lev 13, 16, 18, 20) / Soul HIGH. *Recommendation*: **translate the Ōharae now as a Leviticus comparandum (c. 900 characters)**, then the other 26 prayers as a liturgy corpus.

#### O. Fudoki 風土記 (713–c. 733)
**Kanbun with Old Japanese names and songs · ordered 713; Izumo completed 733 · medieval copies · Izumo complete; Hitachi, Harima, Bungo, Hizen partial; plus *itsubun* fragments quoted in later works.**
- Themes:
  - **Izumo:** the land-pulling myth (a god hauls pieces of land across the sea with a rope and ties them down).
  - **Hitachi:**
    - the ancestor god visits Mount Fuji, which refuses him lodging because of its harvest festival, so it is cursed with eternal snow, while welcoming Mount Tsukuba is blessed ↔ **Gen 18–19** (theoxeny: hospitality rewarded, refusal punished);
    - Matachi drives the horned snake-gods (*yato no kami*) up into the hills with a boundary stake: "above here the land of the gods, below the land of men" ↔ Gen 3:24, Gen 6:1–4.
  - **Fragments:** Urashima (Tango), the swan-maiden (Ōmi).
- Base text: Japanese editions (©); open text on ja.wikisource (reported; verify). Translations: Aoki, *Records of Wind and Earth* (AAS 1997; ©). *Benefit*: MEDIUM / HIGH. *Recommendation*: later, after the Kojiki.

#### P. Man'yōshū 万葉集 and the Kiki songs
**Old Japanese · c. 600–759 (some songs attributed earlier) · Katsura-bon (11th c., partial), Nishi Honganji-bon (late Kamakura, complete) · 20 books, 4,516 poems.**
- Highlights:
  - Hitomaro's laments for his wife and for princes;
  - Yamanoue no Okura's **"Dialogue on Poverty"** (5.892) and his poems on children;
  - the Azuma-uta (eastern folk songs);
  - the **Sakimori-uta** (frontier guards leaving parents and wives).

  For "soul" this is one of the best poetic corpora in the world. The Bible link is weak (laments ↔ 2 Sam 1; transience ↔ Ps 90, Eccl).
- **ONCOJ has all of it, fully annotated** (CC BY 4.0, verified). The ONCOJ "KK" and "NSK" songs (245) could be a separate small corpus, *Kiki kayō*: oral songs often older than the chronicles.
- Hebrew: individual poems in anthologies (e.g. Lea Goldberg's translations via German; Doron B. Cohen's work: BGU article found by search); no full translation.
- *Benefit*: LOW / HIGH. *Recommendation*: a "soul" project once Kojiki and Norito are done; the feasibility is the best in the region thanks to ONCOJ.

#### Q. Other Japanese (brief)
- **Nihon shoki** (720, 30 books). Use it as the variant witness to the Kojiki (see M). Its later books are Chinese-style history.
- **Kogo shūi** (807, the Inbe clan's grievances: variant myths); **Senmyō** (62 imperial edicts in *Shoku Nihongi*, 697–789). MEDIUM-LOW.
- **Ryukyu *Omoro sōshi*** (compiled 1531–1623; 1,554 songs of the noro priestesses, oral and older). The Old Okinawan language is hard and poorly resourced. Soul MED-HIGH; feasibility LOW.
- **Ainu *kamuy yukar***: see the Pacific–Australia–Siberia survey. Aozora card 44909 = Chiri Yukie, *Ainu shin'yōshū* (PD; **verified**).

### 2.3 Korea

#### R. Gwanggaeto stele 廣開土王碑 (414) and the Jumong founding myth
**Classical Chinese (Goguryeo) · 414 CE · the stele at Ji'an (Jilin) · c. 1,775 characters, part effaced; the myth section c. 100 characters.**
- *What it is.* "Of old, when the founding ancestor King Chumo laid the foundation, he came from Northern Buyeo; he was the son of the Heavenly Emperor, his mother the daughter of the River Lord (Habaek); he broke the egg and came down…"
  - At the river he says: "I am the son of the August Heaven and of the daughter of the River Lord: join the reeds and float up the turtles for me!" The turtles float up, and he crosses.
  - The rest records the king's campaigns, and rules for the tomb-guard households.
  - Later versions add the egg thrown to animals who protect it, and the river crossing on fish and turtles: Samguk sagi (1145) and Yi Gyubo's *Dongmyeong-wang pyeon* (1193).
- *Bible.* **Ex 14** (crossing on a path made by the waters' creatures), Ex 2 / Sheng min (the exposed egg-child). Typological.
- *Soul.* MEDIUM: royal myth.
- *Base text.* The text is in Korean national databases (db.history.go.kr, encykorea.aks.ac.kr; the first is blocked here, the second answers 200, content not checked); rubbings (Sakai/Mizutani; ©). zh.wikisource page not found under two titles. *Benefit*: MEDIUM / MEDIUM. *Recommendation*: a short comparandum for Ex 2 and 14, with the Samguk sagi version.

#### S. Dangun (Samguk yusa, c. 1281–89) and the Korean founding myths
- **Dangun:**
  - Hwanin's son Hwanung descends to Mount Taebaek with 3,000 followers and three heavenly seals, and rules wind, rain and clouds;
  - a bear and a tiger want to become human; on garlic and mugwort, out of the sunlight, the bear becomes a woman in 21 days, and Dangun is born.
- **Lateness:** the earliest text is from the 1280s, quoting a lost "Wei shu" and "Old Records". It is reworked in Buddhist terms (Hwanin = Śakra/Indra). Short (c. 300 characters).
- Bible: Gen 6:1–4 (typological). Also the egg-born founders: Bak Hyeokgeose, and Kim Suro, who descends in a golden box to the **Gujiga** chant ("Turtle, turtle, put out your head, or we will roast and eat you").
- *Benefit*: LOW-MED / MEDIUM. *Recommendation*: an excerpt only, with a lateness flag. Text: ko.wikisource 삼국유사 (HTTP 200; content not inspected).

#### T. Hyangga 鄕歌
**Old Korean in *hyangchal* (Chinese characters used for Korean sounds and words) · 6th–10th c. · 14 songs in Samguk yusa (1280s), 11 by Gyunyeo (*Gyunyeo-jeon* 1075).**
- Very fine poems. Example: Wolmyeong's *Jemangmae-ga* (requiem for his sister): "like leaves that fall from one branch in early autumn wind, we do not know where we go".
- **The readings are deeply disputed** (Ogura 1929, Yang Ju-dong 1942, Kim Wan-jin 1980 and later). An LLM cannot do this responsibly.
- *Benefit*: LOW / HIGH. *Recommendation*: only if a modern scholarly reading is followed and labelled as such; low priority.

#### U. Korean shamanic songs (*muga*)
- *Baridegi* (the abandoned seventh princess fetches the water of life from the underworld) and the Jeju *bonpuri* (*Cheonjiwang bonpuri*: heaven and earth stuck together at first, two suns and two moons shot down, rival brothers cheating in a flower contest ↔ Gen 1:16, Gen 4, 27).
- Oral, but **recorded in the 20th c.** (Akiba & Akamatsu 1937 onwards; Jin Seong-gi). Strong motifs, modern recording, dialect.
- *Recommendation*: §3 level; possibly a typological note for Gen 1:16.

### 2.4 Tibet

#### V. Old Tibetan Dunhuang documents (8th–10th c.)
**Old Tibetan · 8th–10th c. MSS from the Dunhuang library cave (sealed c. 1000); they keep pre-Buddhist (not "Bon" in the later sense) ritual and myth · Paris Pelliot tibétain (PT) and London IOL Tib J · medium; good.**
- **PT 1287, Old Tibetan Chronicle:**
  - the first king Nyatri Tsenpo descends from heaven by the sky-cord (*dmu thag*);
  - **Drigum Tsenpo** cuts his cord in a duel and becomes the first king to die and leave a body in a tomb ↔ **Gen 3** (origin of death), Gen 28:12 (a link between heaven and earth);
  - songs (*mgur*) of kings and ministers.
- **PT 1286** (genealogies and principalities). **PT 1288 + IOL Tib J 750, Old Tibetan Annals** (650–764; dry annals).
- **Funerary narrative and ritual texts:** PT 1042 (Lalou 1953, "Rituel Bon-po des funérailles royales"), PT 1068, PT 1134, PT 1136, PT 1194.
  - In these, origin narratives (*rabs*) of the first death and the first funeral justify the rites. A horse or yak is a substitute and guide for the dead.
  - ↔ Gen 22:13 (the substitute), Lev 1. Typological.
  - IOL Tib J 731 (the origin of horses).
- **PT 1047 and IOL Tib J 740** (dice and other divination books with oracle verses: "soul").
- *Soul.* HIGH: death, the soul's journey, divination, songs.
- *Base text and tools.*
  - **OTDO** (otdo.aa-ken.jp; transliterations of most of these): **blocked by the proxy** here (connection reset), reported open.
  - Images: Gallica (403) and IDP (403) from this session.
  - Translations:
    - Bacot, Thomas & Toussaint, *Documents de Touen-houang relatifs à l'histoire du Tibet* (1940–46; © status verify);
    - Dotson, *The Old Tibetan Annals* (ÖAW 2009; ©, Crossref-verified);
    - Bellezza, *Death and Beyond in Ancient Tibet* (ÖAW 2013; on austriaca.at, not open as far as I could see);
    - Thomas, *Ancient Folk-Literature from North-Eastern Tibet* (1957; ©);
    - Stein's and Macdonald's French studies.
  - Dictionaries: Jäschke 1881 (PD); Bialek, *Old Literary Tibetan* (Brill 2026; Crossref-verified; ©).
- *Feasibility.* LOW. The ritual vocabulary is obscure and the texts are archaic; an LLM's Old Tibetan is weak beyond Classical Tibetan. Access is blocked here.
- *Benefit*: LOW-MED / HIGH. *Recommendation*: a later project; first add otdo.aa-ken.jp to the allowlist and check the ÖAW/OTDO licences.

### 2.5 Mongolia and the steppe

#### W. The Secret History of the Mongols (*Mongqol-un niuča tobčaʾan*)
**Middle Mongolian, kept in Chinese-character phonetic transcription with an interlinear Chinese word gloss and a Chinese section summary (Ming, *Yuan chao bi shi* 元朝秘史) · composed 1228 per the colophon ("Year of the Rat"; 1240 or 1252 also argued: Atwood argues 1252), from 12th–13th-c. oral epic, genealogy and song · earliest witness: Ming transcription (Hongwu era, c. 1380s; printed fragments and later complete copies) · 282 sections; complete.**
- *What it is.*
  - "There was a bluish-grey wolf born with his destiny ordained by Heaven above; his wife was a fallow doe."
  - The genealogy; the widow Alan Qo'a conceives through a shining yellow man who enters by the smoke-hole (her sons doubt it); she teaches **unity with five arrows**.
  - Temüjin's boyhood in poverty after his father's poisoning; he and Qasar **kill their half-brother Begter** over a fish. Their mother Hö'elün rebukes them: "Like a dog biting its own afterbirth… like a lion that cannot hold its rage…".
  - Börte's capture and recovery; the blood-brotherhood (*anda*) with Jamuqa and its breakdown; Jamuqa's request to be killed without shedding blood; Chinggis's wars and laws.
- *Bible.*
  - **Gen 4** (fratricide, and the mother's/God's reproach);
  - Gen 25–27 (brothers and the blessing), Gen 37;
  - Gen 49 (testaments);
  - the arrows ↔ Eccl 4:12;
  - origin of a people from animal ancestors ↔ the eponym genealogies of Gen 10, 25 (typological).
- *Soul.* HIGH: the inner world of a nomadic people (hunger, honour, the bonds of *anda*), told with formulaic epic songs.
- *Base text and tools.*
  - **De Rachewiltz, *The Secret History of the Mongols* (Brill 2004/2006, 3 vols; ©)**, and the **2015 "shorter version" (ed. J.C. Street) on Western CEDAR, CC BY-NC-ND 4.0** (search result; the host cedar.wwu.edu is **blocked** here).
  - Romanised text: Ligeti 1971; de Rachewiltz, *Index* 1972 (©). The Chinese transcription is PD (Sibu congkan facsimile).
  - Other translations: Cleaves 1982 (©; the archive.org copy is a patron upload – avoid); Onon 2001 (©); **Atwood, Penguin Classics 2023** (©).
  - Dictionaries: Haenisch, *Wörterbuch zu Manghol un niuca tobca'an* (1939; ©?), Lessing 1960 (©).
  - **Built-in help:** the Ming interlinear Chinese gloss of every word.
  - Hebrew: none found (verify).
- *Feasibility.* MEDIUM. Middle Mongolian is reasonably described, and the gloss reduces the risk. A Hebrew translation directly from the Mongolian would be a first.
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: **a top-10 project**: §§1–80 (origins to Temüjin's youth) first.

#### X. The Orkhon inscriptions (Old Turkic, runic)
**Old Turkic · Tonyukuk c. 716–725; Kül Tegin 732 (text by Yollïg Tegin); Bilge Qaghan 735 · the steles (Mongolia) · c. 200 lines across the three; Kül Tegin and Tonyukuk good, Bilge Qaghan damaged.**
- *What it is.* Kül Tegin East 1: "When the blue sky above and the brown earth below were made, between the two the sons of men were made. Over the sons of men my ancestors Bumïn Qaghan and Istämi Qaghan sat…"
  - Then a sermon: "O Türk people, hear!" The people forsook their own qaghan, became slaves to China, their sons slaves and their daughters servants. Heaven (Tengri) punished them and then raised the founders.
  - It warns against the Chinese, "whose words are sweet and whose silks are soft", who lure the people to settle near them and perish.
  - Kül Tegin's deeds in battle (his horses named, killed under him) and the qaghan's grief.
- *Bible.*
  - Gen 1:1 / 1:26 (the heaven–earth pair, then humanity between them);
  - **Deut 6:4** ("hear!"), **Deut 7:3–4** and **Num 25** (assimilation with seducers), **Deut 8, 28–32**, **Judg 2:11–19** (the cycle of apostasy, punishment, deliverance).

  A typological but structurally striking historical-theological sermon: a good comparandum for the Deuteronomic frame.
- *Soul.* MED-HIGH: grief for a brother, steppe values.
- *Base text and tools.*
  - Radloff, *Die alttürkischen Inschriften der Mongolei* (1894–95; **verified** PD on archive.org, public-domain mark).
  - Thomsen, *Inscriptions de l'Orkhon déchiffrées* (1896; PD; archive.org item not found by my catalogue query; verify).
  - Ross & Thomsen, "The Orkhon Inscriptions" (BSOS 1930; archive.org with a PD mark, **verified** as uploaded; check the US status).
  - Tekin, *A Grammar of Orkhon Turkic* (1968; ©; archive.org lending only, verified).
  - Clauson, *An Etymological Dictionary of Pre-Thirteenth-Century Turkish* (1972; ©); Erdal, *A Grammar of Old Turkic* (2004; ©).
  - Online: turkbitig.com (**verified**: Bilge Qaghan in runes, transliteration and Turkish; source not named, licence not stated); bitig.kz (**blocked**).
- *Feasibility.* MED-HIGH. Old Turkic is formulaic and well described, and an LLM is fair at it.
- *Benefit*: Bible MEDIUM / Soul MED-HIGH. *Recommendation*: **a good medium project**: all three steles, plus the Ongin and Kuli Chor inscriptions as an appendix.

#### Y. Irk Bitig (Old Turkic "Book of Omens") and the Yenisei epitaphs
- **Irk Bitig:**
  - Dunhuang manuscript BL Or.8212/161, runic script, dated by its colophon to 930 (or 942); 65 omens.
  - Each is a tiny picture with a verdict ("the grey horse… know thus: it is good"); some are poems about hawks, deer and a lost slave.
  - Editions: Thomsen 1912 (JRAS; PD), Tekin 1993 (©).
  - Soul HIGH, Bible LOW (Gen 44:5). Small and feasible.
- **Yenisei epitaphs** (Kyrgyz, 8th–10th c.?; c. 150 short laments in the voice of the dead: "I did not have enough of my land… my wife, my sons, I was separated from you"). Soul HIGH, but the texts are short, damaged and uncertain in reading and date. They go to §3 unless combined with the Irk Bitig.

### 2.6 Central Asia

#### Z. The Sogdian Ancient Letters (c. 313 CE) and the Mug documents
**Sogdian (Middle Iranian) · c. 313 CE (the letters refer to the fall of Luoyang in 311) · originals in the British Library (Stein 1907, a watchtower west of Dunhuang) · 5 nearly complete letters + fragments.**
- *What it is.*
  - **Letters 1 and 3** are from Miwnay, stranded in Dunhuang with her daughter after her husband abandoned her. To him: "I obeyed your command and came to Dunhuang… I would rather be a dog's or a pig's wife than yours!" Her daughter adds her own lines.
  - **Letter 2** is from Nanai-vandak, a merchant, to Samarkand: the emperor has fled, Luoyang has burned, the "Huns" are coming, his agents are dead.
- *Bible.* Deut 24:1–4 (abandonment and divorce), Gen 31:14–16 (daughters' complaint against a father). The **Mug** archive (Dēwāštīč, 8th c.) includes a **marriage contract of 710 CE** with the husband's obligations and divorce terms ↔ **Ex 21:10–11**. Weak to medium.
- *Soul.* HIGH. It is a perfect match for the Mesopotamian letters already translated (`קולות-היום-יום/`).
- *Base text and tools.*
  - Reichelt, *Die soghdischen Handschriftenreste des Britischen Museums* II (1931; PD status verify).
  - **Sims-Williams & Grenet, *The "Ancient Letters" and Other Early Sogdian Documents and Inscriptions*** (Corpus Inscriptionum Iranicarum 2023; ©; reviews Crossref-verified).
  - Sims-Williams' English translations of letters 1, 2, 3, 5 on the UW Silk Road site (**verified**; ©, educational).
  - Gharib, *Sogdian Dictionary* (1995; ©).
- *Feasibility.* LOW-MED. Sogdian is specialist and an LLM is weak at it; work only from the CII edition (paid or library).
- *Benefit*: LOW-MED / HIGH. *Recommendation*: a small "voices" item later, if the CII edition can be used.

#### AA. Tocharian A and B
- Tocharian A and B are attested in 5th–8th c. manuscripts from the Tarim Basin (Kucha, Turfan).
  - Almost all are Buddhist translations or adaptations (*Maitreyasamitināṭaka*, *Udānālaṅkāra*, jātakas, karma texts).
  - There are also secular documents: caravan passes, monastery accounts, medical and magical texts, a few love-poem fragments.
- No pre-Buddhist oral tradition survives.
- **CEToM** (cetom.univie.ac.at: **verified**, 200; editions with translations and glossary).
- An LLM would be very weak at it.
- *Benefit*: LOW / LOW-MED. *Recommendation*: no; record only.

---

## 3. Also considered (one line each)

- **Shangshu "Old Text" chapters** (Da Yu mo, Wu zi zhi ge, Zhonghui zhi gao, Tang gao, Yi xun, Tai jia, Xian you yi de, Yue ming, Tai shi, Wu cheng, Lü ao, Weizi zhi ming, Cai Zhong zhi ming, Zhou guan, Jun Chen, Bi ming, Jun Ya, Jiong ming): **4th-c. CE forgeries** (Mei Ze); exclude.
- **The "modern text" Bamboo Annals (*jinben Zhushu jinian*)**: a later reconstruction; use only the *guben* quotations.
- **"Genesis encoded in Chinese characters"** (Kang & Nelson, *The Discovery of Genesis*, 1979: 船 "boat" = vessel + eight + mouth): **pseudo-scholarship**; do not cite.
- **Japanese pseudo-histories:** *Hotsuma tsutae* (Edo-period forgery in "divine letters"), *Takeuchi monjo*, *Uetsufumi*, *Kujiki Taiseikyō* (1679 forgery; the 9th-c. *Sendai kuji hongi* is a genuine but derivative compilation), *Tsugaru sotosangunshi* (1970s forgery). Also the *Nichiyu dōsoron* (Japanese–Israelite theory). All excluded.
- **Korean pseudo-histories:** *Hwandan gogi* (1911/1979), *Gyuwon sahwa*, *Budoji*: forgeries; exclude.
- **Blavatsky's "Stanzas of Dzyan"** (supposedly an archaic Tibetan text): a **hoax**; exclude.
- **Jiahu, Banpo and Dadiwan signs** (Neolithic marks): proto-writing at most; no text.
- **Analects, Mencius, Zhuangzi, Liezi, Daodejing as whole translations**: Hebrew translations exist (Daor and others); low added value. Use them as excerpts only.
- **Zuozhuan, Guoyu, Shiji, Liji, Lüshi chunqiu (whole)**: very large and later (4th–1st c. BCE); excerpt the myth, oath and dream passages.
- **Houma and Wenxian covenant tablets** (5th c. BCE; c. 5,000 tablets with oaths and self-curses ↔ Deut 27–29): good for the law block. They are formulaic and repetitive, the editions are Chinese (©), and there is no open text; a short sample later.
- **Mu Tianzi zhuan** (found 281 CE; journey to the Queen Mother of the West): late, low.
- **Mawangdui** (Laozi, Yijing, Huangdi sijing, *Wushi'er bingfang* with healing spells, the Taiyi diagram): the spells are a "soul" candidate (Harper, *Early Chinese Medical Literature*, 1998; ©). Medium, later.
- **The other Tsinghua slips** (Xinian annals; *Bao xun*, King Wen's deathbed testament ↔ Gen 49, Deut 31–33; *Qi ye* drinking songs; *Chi jiu zhi ji Tang zhi wu*, Yi Yin as a bird healing the Xia king of the snakes under his bed): excellent, but available only in the Chinese edition (©) and in scattered English. A future "Tsinghua selection" project.
- **Pangu myth** (3rd c. CE): late, possibly South Asian influence; a footnote to Enūma eliš only.
- **Nihon shoki** as a whole: use its Age-of-Gods variants with the Kojiki; the rest is chronicle.
- **Senmyō, Kogo shūi**: medium-low; later.
- **Omoro sōshi**: soul MED-HIGH, but the language is very hard; later.
- **Ainu yukar**: see the Pacific–Australia–Siberia survey.
- **Dangun, Gujiga, Gongmudoha-ga**: tiny and late-attested; excerpts.
- **Korean *muga* / Jeju *bonpuri***: oral, but recorded in the 20th c.; a typological note only.
- **Gesar epic (Tibet/Mongolia), Jangar (Oirat/Kalmyk)**: oral epics written down in the 17th–20th c.; huge, late, Buddhist-coloured; exclude for now.
- **Bon *gter-ma* scriptures**: "rediscovered" from the 11th c. onwards; late and not Old Tibetan; exclude.
- **Zhangzhung-language fragments**: undeciphered in substance; exclude.
- **Khotanese** (Book of Zambasta, etc.): Buddhist; low. **Bactrian documents** (4th–8th c.; Sims-Williams; contracts and letters): worth a line in the Iran–India survey (they are not mentioned there); a "voices" corpus at most.
- **Turfan Manichaean texts** (Middle Persian, Parthian, Sogdian, Old Uyghur; the cosmogony, hymns, and the **Xuastvanift** confession of sins ↔ Lev 5:5, 16:21): interesting, but late (8th–10th c.), not old oral tradition, and Iranian/Christian-derived. Low-medium.
- **Oghuz Qaghan legend** (Uyghur script, 15th-c. MS), **Dede Korkut** (Oghuz, 16th-c. MSS): late; Dede Korkut belongs to the Anatolia/Caucasus surveys if anywhere.
- **Old Uyghur Buddhist literature**: Buddhist translations; low.
- **Tocharian**: see AA; record only.
- **Yenisei epitaphs**: short and damaged; possibly an appendix to the Irk Bitig.

---

## 4. Access notes (tested 2026-10-21 from this session)

**Works (HTTP 200, content seen):**
- **github.com via git (read-only, public repos).**
  - `git clone --depth 1 https://github.com/ONCOJ/data` (58 MB; README states CC BY 4.0).
  - `https://github.com/kanripo/KR1c0001` (Shijing), `KR1b0001` (Shangshu), `KR4a0001` (Chuci), `KR3l0090` (Shanhaijing), `KR1a0001` (Zhouyi): all cloned.
  - The `gh api` and raw.githubusercontent.com routes are **not** enabled for these repos in this session; plain `git` works.
- **zh.wikisource.org.** 詩經/生民 and 太一生水 via the API (then **429 Too Many Requests**). 古事記, 古事記/上卷 and 毛公鼎 via WebFetch.
- **ja.wikisource.org** (WebFetch): 大祓詞, 六月晦大祓祝詞, 古事記.
- **he.wikipedia.org** (WebFetch): the Hebrew-translation lists.
  - The **Wikimedia API from curl/python returns 429** after a request or two (shared IP); use WebFetch or slow down.
- **archive.org** (the advancedsearch and metadata APIs work).
  - PD and open: Aston *Nihongi* (`nihongi1asto`), Radloff 1895 (`diealtturkischeninschriftendermongol`), Legge *Chinese Classics* (`chineseclassics08legggoog`, NOT_IN_COPYRIGHT), Ross/Thomsen 1930 (`orkhoninscriptions`).
  - Lending only (restricted): Tekin 1968, Keightley 1978, Philippi *Norito* 1990, Philippi *Kojiki* reprint.
  - Avoid as unauthorised: `keightley-sources-of-shang-history-1978`, `Cleaves1982SecretHistoryMongols`.
- **dl.ndl.go.jp**: pid 991103 = *Kokushi taikei* vol. 13 (Engishiki).
- **aozora.gr.jp**: card 44909, *Ainu shin'yōshū*.
- **oncoj.ninjal.ac.jp**: front page.
- **cetom.univie.ac.at**: CEToM.
- **depts.washington.edu/silkroad**: the Sogdian letters.
- **turkbitig.com**: the Bilge Qaghan text.
- **api.crossref.org**: licence metadata, e.g. Schwartz 2019 CC BY-NC-ND 3.0.
- **jti.lib.virginia.edu**: up, but it says "texts may not be downloaded or copied".
- Front pages only (200; content not checked): kokusho.nijl.ac.jp, cbeta.org, gushiwen.cn, shidianguji.com, zhonghuadiancang.com, encykorea.aks.ac.kr, ko.wikisource.org, library.bdrc.io, benyehuda.org.

**Login or paywall:**
- **chant.org** (CUHK CHANT): login page.
- **bronze.asdc.sinica.edu.tw**: login; personal non-commercial use only.
- **inscription.asdc.sinica.edu.tw**: the pre-Qin lexicon; 200, content minimal.
- **jgw.aynu.edu.cn** (Yin Qi Wen Yuan): 200, but a JavaScript app (registration reported).
- **sites.google.com/site/baxtersagartoc**: redirects to a Google sign-in for the Drive files.

**Blocked for scripts:**
- **ctext.org**: a JavaScript challenge page ("Checking the security of your connection"), and the terms of service forbid scraping. **api.ctext.org**: `ERR_REQUIRES_AUTHENTICATION` (registered IP or paid key).
- **www.kanripo.org**: 403 (but GitHub works).
- **sacred-texts.com**: Cloudflare "Just a moment".
- **library.oapen.org** bitstreams: Anubis proof-of-work wall (the front page gives 200).
- **brill.com**: 403 (also via WebFetch).
- 403 also from: idp.bl.uk, gallica.bnf.fr, hathitrust.org (www and babel), academia.edu, iranicaonline.org, kokugakuin.ac.jp, hxwd.org (TLS), sogdians.si.edu, nli.org.il, simania.co.il.
- **degruyterbrill.com** (from doi.org): 202 challenge.

**Proxy refused (connection reset or 502; a future session needs these in the allowlist):**
- otdo.aa-ken.jp (Old Tibetan Documents Online), titus.uni-frankfurt.de, cedar.wwu.edu (the Secret History OA), scholarworks.iu.edu (Eno's readers);
- tls.uni-hd.de, ocbaxtersagart.lsait.lsa.umich.edu, starling.rinet.ru, www.zdic.net, www.guoxuedashi.net, www.guoxue.com, www.hanziyuan.net, ctwx.tsinghua.edu.cn, www.mawangdui.org, www.jianbo.org, lingshu.ihp.sinica.edu.tw, www.ihp.sinica.edu.tw, ndweb.iis.sinica.edu.tw (503);
- bitig.kz, irq.kaznu.kz, turkic-world.org;
- db.history.go.kr, db.itkc.or.kr, kyujanggak.snu.ac.kr, sillok.history.go.kr, www.heritage.go.kr, koreascience.kr;
- k-amc.kokugakuin.ac.jp, eos.kokugakuin.ac.jp, www2.dhii.jp/nijl, kokugo.ninjal.ac.jp, texta.ninjal.ac.jp;
- vsarpj.orinst.ox.ac.uk (the old OCOJ), www.digitaltibetan.org, himalaya.socanth.cam.ac.uk;
- ota.bodleian.ox.ac.uk, openaccess.leidenuniv.nl, scholarlypublications.universiteitleiden.nl, sogdian.org, gutendex.com.

**Practical recipe for a translation session.**
- Chinese base texts: `git clone` from github.com/kanripo (the TLS line-split text where available), cross-checked with zh.wikisource through WebFetch.
- Old Japanese: `git clone` ONCOJ.
- Kojiki prose: zh.wikisource.
- Norito: ja.wikisource + NDL.
- Old Turkic: the Radloff PDF from archive.org.
- Oracle bones: the Schwartz 2019 PDF. Test the De Gruyter download first, or get the OAPEN copy via a browser.

---

## 5. Sources consulted

Searches made before the quota ran out (6):
- ONCOJ licence: https://oncoj.ninjal.ac.jp/ ; https://github.com/ONCOJ/data
- Oracle-bone databases: https://www.nature.com/articles/s41597-026-06967-0 (OBIMD) ; https://arxiv.org/abs/2401.15365 (HUST-OBC) ; https://digitalorientalist.com/2021/03/05/online-resources-for-chinese-palaeography-part-two/
- Bin Gong xu: https://www.cambridge.org/core/journals/early-china (Chen Shu; Cook; Xing Wen, Early China 35–36) ; https://wsproject.org/archive/conferences/wswg/17/nine2.html (Rong Cheng shi nine provinces)
- Secret History OA: https://cedar.wwu.edu/cedarbooks/4 ; https://en.wikipedia.org/wiki/Igor_de_Rachewiltz
- Hebrew Shijing: https://he.wikipedia.org/wiki/הקלאסיקה_של_השירים ; https://he.wikipedia.org/wiki/משתמש:The_duke/ספרים_סיניים_עתיקים_עם_שמותיהם_בעברית
- Hebrew Kojiki: https://he.wikipedia.org/wiki/קוג'יקי ; https://www.nli.org.il/he/books/NNL_ALEPH990020343180205171/NLI (Raz, *המיתולוגיה היפנית*, Mapa 2000)

Pages and repositories fetched:
- https://github.com/kanripo/KR1c0001 , KR1b0001 , KR4a0001 , KR3l0090 , KR1a0001 (git)
- https://zh.wikisource.org/wiki/詩經/生民 ; https://zh.wikisource.org/wiki/太一生水 ; https://zh.wikisource.org/wiki/古事記 ; https://zh.wikisource.org/wiki/古事記/上卷 ; https://zh.wikisource.org/wiki/毛公鼎
- https://ja.wikisource.org/wiki/大祓詞 ; https://ja.wikisource.org/wiki/六月晦大祓祝詞 ; https://ja.wikisource.org/wiki/古事記
- https://dl.ndl.go.jp/pid/991103
- https://archive.org/details/nihongi1asto ; https://archive.org/details/diealtturkischeninschriftendermongol ; https://archive.org/details/orkhoninscriptions ; https://archive.org/details/chineseclassics08legggoog ; https://archive.org/details/cheukingtextech00couvgoog ; https://archive.org/details/sacredbooksofeas0003jame
- https://www.aozora.gr.jp/cards/001529/card44909.html
- https://cetom.univie.ac.at/ ; https://depts.washington.edu/silkroad/texts/sogdlet.html ; https://www.turkbitig.com/orhun-yazitlari/
- https://bronze.asdc.sinica.edu.tw/ ; https://www.chant.org/ ; https://jgw.aynu.edu.cn/ ; https://jti.lib.virginia.edu/japanese/
- https://api.ctext.org/gettext (auth error) ; https://ctext.org/book-of-poetry/sheng-min (bot challenge)
- Crossref metadata: 10.1515/9781501505294 (Schwartz 2019, CC BY-NC-ND 3.0) ; 10.1163/9789004343504 (Kern & Meyer 2017) ; 10.1017/s0362502800000468 / …0444 / …0456 (X Gong xu studies) ; 10.1553/0x001a81e8 (Dotson 2009) ; 10.2307/jj.26047396 (Li Ling 2025) ; 10.7312/held16388 (Heldt 2014) ; 10.1163/9789004488991 (Kroll) ; 10.1515/9780824861339 (Schuessler) ; 10.1163/9789004745926 (Bialek 2026) ; 10.1515/9780691234601-023 (Harper, "Spellbinding")
