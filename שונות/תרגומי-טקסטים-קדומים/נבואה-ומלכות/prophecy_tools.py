"""Tools of the prophecy-and-kingship corpus (`נבואה-ומלכות/`): the Assyrian prophecies (SAA 9, ORACC saao/saa09)
and Advice to a Prince (eBL L/2/5). Written 2026-10-21 (Round 3, run 3), adapted from ../קולות-היום-יום/kol_tools.py.
A text is a UNITS entry (one base text, one or more annotated files); a project is a group of units that builds one
translation.rtl.md.

Usage (from any directory; always `python3 -I -B`):
  prophecy_tools.py units                        list the units, their base texts and files
  prophecy_tools.py data UNIT [FROM [TO]]        a translator's data: per line the label, the transliteration (SAA) or
                                                 the eBL normalization (Advice), the SAAo normalization / the eBL
                                                 variant normalizations, the lemmas, the rank-3 translation
  prophecy_tools.py fill FILE                    replace every backticked line written as `@` with the base text's line
  prophecy_tools.py shared                       lines whose normalization recurs (inside a unit and across units): the
                                                 repeated lines and formulas, with the Hebrew already drafted
  prophecy_tools.py verify [UNIT|PROJECT …] [--strict]   (exit 1 on an error)
        1. every `### <label>` entry has one `> ` line and one backticked base line, equal to the base text's
           (whitespace normalized); no duplicate labels; coverage = the base line list, in order (a not-yet-drafted
           file / `[טרם תורגם]` is a note; --strict: an error);
        2. RESERVED and gated strings (renderings.md §5), niqqud stripped, licensed by the line's transliteration +
           normalization + lemmas (Advice: normalization + variants + lemmas);
        3. TRAPS: names that read as Hebrew words unvocalized (renderings §6), when the name is in the line;
        4. FORMULAS (renderings §2): a source phrase requires its fixed Hebrew;
        5. translation.rtl.md of the project (if present): its numbered lines equal the `>` lines one to one;
        and REPORTS (not errors) identical normalizations with different Hebrew, within the corpus.
  prophecy_tools.py build PROJECT                translation.rtl.md from translation--intro.rtl.md + the annotated files
                                                 (unit headings, the `## ` section headings, `**label** …` lines,
                                                 `- **הערת שוליים:** …` bullets as footnotes); then verify
  prophecy_tools.py grep (PROJECT|all|every) '<regex>'   `>` lines (niqqud stripped); all = this corpus; every = all
                                                 corpora
  prophecy_tools.py lookup '<regex>'             earlier corpora: the Hebrew of every line whose backticked source
                                                 lines (transliteration or normalization) match
PROJECTS: PROPH (1-נבואות-אשוריות), ADV (2-עצה-לנסיך).
"""
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, 'sources')
SAA = os.path.join(SRC, 'ORACC', 'saao-saa09--Assyrian-Prophecies')
EBL = os.path.join(SRC, 'eBL')

PROJ_DIRS = {'PROPH': '1-נבואות-אשוריות', 'ADV': '2-עצה-לנסיך'}


def _saa(n, p, title, files):
    return dict(proj='PROPH', kind='saa', base=f'SAA09-{n}--{p}', title=title, files=files)


# Order = reading order in the clean translation. Titles are the Hebrew unit headings.
UNITS = {
    'S01': _saa('001', 'P333952', 'נבואות עידוד לאֵסַרְחַדּוֹן (SAA 9 1)', ['annotated-01.rtl.md']),
    'S02': _saa('002', 'P337152', 'נבואות על בבל ועל ביסוס מלכותו של המלך (SAA 9 2)', ['annotated-02.rtl.md']),
    'S03': _saa('003', 'P334927', 'אמנת אַשּׁוּר (SAA 9 3)', ['annotated-03.rtl.md']),
    'S04': _saa('004', 'P336677', 'שבר מקובץ נבואות עידוד (SAA 9 4)', ['annotated-04-11.rtl.md']),
    'S05': _saa('005', 'P337153', 'נבואה לאם המלך (SAA 9 5)', ['annotated-04-11.rtl.md']),
    'S06': _saa('006', 'P336678', 'נבואה מפי תַּשְׁמֵטוּ־אֵרֵשׁ מאַרְבֵּאִיל (SAA 9 6)', ['annotated-04-11.rtl.md']),
    'S07': _saa('007', 'P334928', 'נבואות לבן־המלך אַשּׁוּר־בָּנִי־אַפְלִי (SAA 9 7)', ['annotated-04-11.rtl.md']),
    'S08': _saa('008', 'P334828', 'דברים על העֵילָמִים (SAA 9 8)', ['annotated-04-11.rtl.md']),
    'S09': _saa('009', 'P337163', 'דברי עידוד לאַשּׁוּר־בָּנִי־אַפְלִי (SAA 9 9)', ['annotated-04-11.rtl.md']),
    'S10': _saa('010', 'P314355', 'שבר נבואה (SAA 9 10)', ['annotated-04-11.rtl.md']),
    'S11': _saa('011', 'P313634', 'דין וחשבון על חזיון ועל נבואה לאַשּׁוּר־בָּנִי־אַפְלִי (SAA 9 11)', ['annotated-04-11.rtl.md']),
    'AP': dict(proj='ADV', kind='ebl', folder='Advice-to-a-Prince', title='עצה לנסיך', files=['annotated.rtl.md']),
}

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
P = r'ו?[הבלמכש]?'                 # one-letter prefixes
V = r'ו?[הבלמכש]?[איתנ]?'          # prefixes + an imperfect prefix

# reserved Hebrew (regex on the niqqud-stripped `>` line) -> regexes on the licensing text; [] = never
RESERVED = {
    # "fear not": ירא only for palāḫu (renderings §2.1)
    B + V + r'(ירא|יראו|יראי|יראה|יראת|יראתי|יראים)' + E: [r'palāhu|palāḫu|palah|pallah|pallih|palih|pa-lah|pal-lah|puluhtu|puluḫtu'],
    # the prophet: נבא only for raggimu / raggintu / ragāmu, maḫḫû
    r'נביא|נבואה|נבואת|ניבא|ניבאה|התנבא|' + B + V + r'(נבא|נבאה|נבאו)' + E: [r'raggimu|raggintu|ragāmu|irtugum|irgum|raggim|raggint|ra-gi-mu|rag-gi'],
    # well-being: שלום / השלים only for šulmu, salāmu, salmu (and šalāmu / šullumu)
    B + V + r'(שלום|שלומ\S*|השלמ\S*|השלים|ישלים|אשלים|תשלים|השלימו|שלמ|שלם|שלמים)' + E: [r'šulmu|šulme|šulam|salāmu|salmu|salmūti|šalāmu|šullumu|šalmu|usallam|ussallim|sallim'],
    # "I am": אנוכי only for anāku
    r'אנוכי|אנכי': [r'anāku|anākū|anākūma|anākūni'],
    # the shield of Gen 15:1: מגן only for arītu
    B + P + r'(מגן|מגנך|מגני|מגנו|מגנה)' + E: [r'arītu|arītka|a-ri-it'],
    # trust: בטח / הבטיח / מבטח only for takālu, tukultu
    r'בטח|הבטיח|הבטחת|מבטח|אבטיח|יבטיח': [r'takālu|tukultu|tukulti|uttakkil|tatakkil|takkil'],
    # love
    r'אהב|אוהב|אהוב': [r'râmu|raʾāmu|raʾām|artâm|ritūmu|narāmu'],
    # the cognate of taqānu: תקן only for taqānu / taqnu
    B + V + r'(תקן|תקנ\S*|תיקן|תיקנ\S*|מתוקן|מתוקנ\S*|תוקן)' + E: [r'taqānu|taqnu|taqnūti|utaqqan|tataqqun|tuqnu|tuqunni|tuqun\b'],
    # wing
    B + P + r'(כנף|כנפ\S*)' + E: [r'kappu\['],
    B + P + r'(אגף|אגפ\S*)' + E: [r'agappu\[|akappi|agappīya|aqappu'],
    # heir / succession
    r'יורש|ירוש|ירש': [r'aplu|rēdûtu|rēdûti|rēdûtēka|apla|apli\b'],
    # slaughter
    r'טבח': [r'ṭabahhu|ṭabāhu|ṭabāḫu|aṭabbah|ṭabahhi'],
    # good: טוב only for ṭābu (damqu = נאה)
    B + P + r'(טוב|טובה|טובים|טובות|טובו|טובתו)' + E: [r'ṭābu|ṭābtu|ṭūbu|ṭiābu|ṭābi|ṭāb\b|ṭābtu'],
    # palace: היכל only for ēkallu (the temple corpus's *e₂-gal* = היכל)
    B + P + r'(היכל|היכלי|היכלך|היכלו|היכלה|היכלות|היכלם)' + E: [r'ēkallu|ēkalli|ēkall|E₂\.GAL'],
    # never in this corpus
    r'ברית': [],
    B + V + r'(שמר|שומר|שמור|שמרו|שמרתי|משמר|משמרת)' + E: [],
    r'עולם': [],
    r'אלהים|אלוהים|יהוה': [],
    r'(^|\s)ה?תיבה|(^|\s)ה?תבה(\s|$)': [],
    r'עשתרת': [],
    r'צדק|צדיק': [],
    r'שאול': [],
    B + P + r'(נחש|נחשים)' + E: [r'ṣerru'],          # Gilgameš, Etana: נחש only for ṣerru
    B + P + r'(משיח|משוח)' + E: [],
    r'קדש|קודש|קדוש|מקדש': [r'kiṣṣu|kiṣṣī|ešertu'],   # Enūma eliš: kiṣṣu = קֹדֶשׁ (renderings §4)
    r'דביר': [r'atmanu|atman'],                     # Enūma eliš: atmanu = דְּבִיר
    # Advice / law terms
    r'משפט': [r'šipṭu|dīnu'],                       # šipṭu (law corpus) = משפט; dīnu = דין (§4: משפט only if noted)
    r'שוחד|שחד': [r'ṭātu|ṭāssun|ṭātu'],
    B + P + r'(מבול)' + E: [r'abūbu'],
    B + V + r'(קרא|קראו|קראתי|נקרא)' + E: [r'nabû\b|nabû\[name|šasû|šisītu|šisīt'],
}
# name traps: stripped token (prefixes allowed) -> (name, licensing regex on the line)
TRAPS = {
    'בל': ('Bēl (בֵּל)', r'(^|\s)Bel\b|Bel\[|\{d\}EN\b'),
    'סין': ('Sîn (סִין)', r'(^|\s)Sin\b|Sîn|\{d\}30|Sin\['),
    'נבו': ('Nabû (נָבוּ)', r'Nabu|Nabû|\{d\}AG|\{d\}PA'),
    'אנו': ('Anu (אָנוּ)', r'(^|\s)anu\b|Anu\b|\{d\}a-nu'),
    'גמר': ('Gimir (גֹּמֶר)', r'Gimir|gi-mir'),
    'מני': ('Mannaya (מִנִּי)', r'Mannaya|man-na'),
    'כלח': ('Kalḫu (כֶּלַח)', r'Kalha|Kalhi|Kalhitu|kal-ha|kal-hi'),
    'צור': ('Ṣurri (צֹר)', r'Ṣurri|ṣur-ri'), 'צר': ('Ṣurri (צֹר)', r'Ṣurri|ṣur-ri'),
    'אלי': ('my god (אֵלִי)', r'ilīya|ilī\b'),
    'אמה': ('amtu (אָמָה)', r'amtu|GEME₂'),
    'אוי': ('ūʾa (אוֹי)', r'ūʾa|u₂-a\b'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')

# fixed formulas: (regex on the licensing text (translit + norm + lemmas), required regex on the stripped `>` line,
# description). Checked only when the Hebrew line has no `[…]`-only content.
FORMULAS = [
    (r'(^|\s)lā tapallah(\s|$)', r'אל תירא(?!י)', '*lā tapallah* = `אַל תִּירָא` (renderings §2.1)'),
    (r'(^|\s)lā tapallihi(\s|$)', r'אל תיראי', '*lā tapallihi* = `אַל תִּירְאִי` (renderings §2.1)'),
    (r'norm:.*\banāku\b', r'אנוכי', '*anāku* = `אָנֹכִי` (renderings §2.2)'),
    (r'norm:.*\bIssar ša Arbail\b', r'אשתר של ארבאיל', '*Issar ša Arbail* = `אִשְׁתַּר שֶׁל אַרְבֵּאִיל`'),
    (r'norm:.*\bBelet-Arbail\b', r'גבירת ארבאיל', '*Bēlet-Arbail* = `גְּבִירַת אַרְבֵּאִיל`'),
    (r'norm:.*\bšar(ru)? Mat-Aššur\b', r'מלך אשור', '*šar Mat-Aššur* = `מֶלֶךְ אַשּׁוּר`'),
    (r'norm:.*\bša pî\b', r'מפי', '*ša pî* PN = `מִפִּי` PN (renderings §2.3)'),
    (r'norm:.*\bissu pî\b', r'מן פי', '*issu pî* PN = `מִן פִּי` PN (renderings §2.3)'),
    (r'norm:.*\bmār Arbail\b', r'בן ארבאיל', '*mār Arbail* = `בֶּן אַרְבֵּאִיל`'),
    (r'norm:.*\bmarʾat Arbail\b', r'בת ארבאיל', '*marʾat Arbail* = `בַּת אַרְבֵּאִיל`'),
    (r'norm:.*\bArbailaya\b', r'הארבאילי', '*Arbailaya* = `הָאַרְבֵּאִילִי`'),
    (r'norm:.*\babat\b', r'דבר', '*abat* DN = `דְּבַר` DN (renderings §2.4)'),
    (r'norm:.*\bšulm(u|e|a)', r'שלום|שלומ', '*šulmu* = `שָׁלוֹם` (renderings §3)'),
    (r'norm:.*\bnaʾʾid', r'הלל', '*naʾʾidanni* = `הַלְּלֵנִי` (renderings §2.6)'),
    (r'norm:.*\bmaṣṣart', r'נצירה|נצירת', '*maṣṣartu* = `נְצִירָה`'),
    (r'naṣāru\[', r'נצר|נוצר|נצור|נציר|[איתנ]צו?ר', '*naṣāru* = `נָצַר` (never `שָׁמַר`)'),
    (r'taqānu\[|taqnu\[', r'תקן|תקנ|תיקן|תיקנ|מתוקן|מתוקנ|תוקן', '*taqānu* = `תקן` [cognate] (renderings §3)'),
    (r'norm:.*\būm(āti|ē) arkūt(e|i)\b', r'ימים ארוכים', '*ūmāti arkūte* = `יָמִים אֲרֻכִּים` (renderings §2.7)'),
    (r'norm:.*\bšanāti dārāt(e|i)\b', r'שנות נצח', '*šanāti dārāte* = `שְׁנוֹת נֶצַח` (renderings §2.7)'),
    (r'norm:.*\bnapāh šamši\b', r'זריחת השמש', '*napāh šamši* = `זְרִיחַת הַשֶּׁמֶשׁ` (renderings §2.8)'),
    (r'norm:.*\brabâ šamši\b', r'שקיעת השמש', '*rabâ šamši* = `שְׁקִיעַת הַשֶּׁמֶשׁ` (renderings §2.8)'),
    (r'norm:.*\bsigarrāte\b', r'סוגר', '*sigarru* = `סוּגַר` [cognate] (renderings §2.9)'),
    (r'norm:.*\bmaddanāti\b', r'מדות|מידות', '*maddattu* = `מִדָּה` [cognate] (renderings §2.9)'),
    (r'norm:.*\bsalmūti\b', r'אנשי (ה)?שלום', '*salmūti* = `אַנְשֵׁי שָׁלוֹם` (renderings §2.9)'),
    (r'norm:.*\badê\b', r'אמנה|אמנת', '*adê* = `אֲמָנָה` (the treaty corpus)'),
    (r'norm:.*\braggimu\b', r'נביא', '*raggimu* = `נָבִיא` (the treaty corpus)'),
    (r'norm:.*\braggintu\b', r'נביאה', '*raggintu* = `נְבִיאָה`'),
    (r'norm:.*\b(irtugum|irgumūni)\b', r'נבא|ניבא|התנבא', '*ragāmu* = `נִבָּא`'),
    (r'norm:.*\bmūr(ī|īša|i)\b', r'עגל|עגלי|עגלה', '*mūru* = `עֵגֶל` (renderings §3)'),
    (r'norm:.*\bina libbi ūʾa\b', r'בתוך האוי', '*ina libbi ūʾa* = `בְּתוֹךְ הָאוֹי` (renderings §2.10)'),
    (r'norm:.*\baplu\b', r'יורש', '*aplu* = `יוֹרֵשׁ` (the treaty corpus)'),
    (r'norm:.*\bbēt rēdût', r'בית הירושה', '*bēt rēdûti* = `בֵּית הַיְּרֻשָּׁה` (EST)'),
    (r'norm:.*\b(kēnu|kēnūti|kēni|kēnūni)\b', r'נאמן|נאמנ', '*kēnu* = `נֶאֱמָן` (renderings §3)'),
    (r'nakru\[', r'אויב|אויבי|אויבך|אויבו|אויביו|אויביך|אויבים|אויבת', '*nakru* = `אוֹיֵב` (the treaty corpus)'),
    (r'ayyābu\[', r'(^|[\s־])[ובלמהש]?צר(י|יו|יך|ך|ים|יה|יהם)?($|[\s,.;:!?])', '*ayyābu* = `צַר` (Gilgameš)'),
    (r'urkiūte lū kî pāniūte', r'האחרונות יהיו כראשונות', '*urkiūte lū kî pāniūte* = `הָאַחֲרוֹנוֹת יִהְיוּ כָּרִאשׁוֹנוֹת` (renderings §2.11)'),
    (r'takālu\[', r'בטח|הבטח|מבטח|תבטח', '*takālu* = `בָּטַח`, D `הִבְטִיחַ` (Gilgameš)'),
    (r'norm:.*\bilāni rabiūt(i|e)\b|ilū rabûtu', r'האלים הגדולים', '*ilāni rabiūti* = `הָאֵלִים הַגְּדוֹלִים`'),
    (r'norm:.*\bimittu?\b.*šumēl|norm:.*\bimittīka\b|norm:.*\bimittīya\b', r'ימין|ימינ|מימין', '*imittu* = `יָמִין`'),
    (r'norm:.*\bšumēl', r'שמאל|משמאל', '*šumēlu* = `שְׂמֹאל` [cognate]'),
    # Advice to a Prince
    (r'qâlu I', r'האזין|האזינו|יאזין|יאזינו', '*qâlu* = `הֶאֱזִין` (the earlier corpora; renderings §4)'),
    (r'dīnu I', r'דין|דינ', '*dīnu* = `דִּין` (the treaty corpus)'),
    (r'tupšikku I', r'סל(\s|$|,|\.)|סלים|סלו', '*tupšikku* = `סַל` (Enūma eliš; the temple corpus *dusu*)'),
    (r'ummiānu I', r'אומן|אומנ|אמן|אמנ', '*ummânu* = `אֻמָּן` (the temple and wisdom corpora)'),
    (r'rubû I', r'נשיא|נשיאי|נשיאיו', '*rubû* = `נָשִׂיא` (Gilgameš)'),
    (r'ahû I', r'זר|זרה|זרים|זרות', '*ahû* "foreign" = `זָר` (renderings §4)'),
]


def strip(s):
    return NIQQUD.sub('', s)


def ws(s):
    return re.sub(r'\s+', ' ', s).strip()


# ---------------------------------------------------------------- base texts
def saa_label(lab):
    return re.sub(r'\.?\s+', '.', lab.strip())


def read_saa(unit):
    """[(label, translit, norm, lem)] from the SAAo lemmatised .md; rank-3 {label: text}."""
    base = UNITS[unit]['base']
    out, cur = [], None
    for ln in open(os.path.join(SAA, base + '--lemmatised.md'), encoding='utf-8'):
        ln = ln.rstrip('\n').rstrip()
        m = re.match(r'^\*\*(.+?)\*\* (.*)$', ln)
        if m:
            cur = [saa_label(m.group(1)), ws(m.group(2)), '', '']
            out.append(cur)
            continue
        if cur is None:
            continue
        s = ln.strip()
        if s.startswith('norm:'):
            cur[2] = ws(s[5:])
        elif s.startswith('<sub>lem:'):
            cur[3] = ws(re.sub(r'</?sub>', '', s)[4:])
    tr = {}
    p = os.path.join(SAA, base + '--translation.md')
    if os.path.exists(p):
        for ln in open(p, encoding='utf-8'):
            m = re.match(r'^\*\*\[(.+?)\]\*\* (.*)$', ln.rstrip())
            if m:
                tr[saa_label(m.group(1).split('-')[0].split('–')[0])] = ws(m.group(2))
    return [tuple(x) for x in out], tr


def saa_marks(unit):
    """{label: [marks after that line]} -- the rulings and breaks of the tablet (`*(… ruling)*`, `*(… break …)*`)"""
    marks, last = {}, None
    for ln in open(os.path.join(SAA, UNITS[unit]['base'] + '--lemmatised.md'), encoding='utf-8'):
        m = re.match(r'^\*\*(.+?)\*\* ', ln)
        if m:
            last = saa_label(m.group(1))
            continue
        m = re.match(r'^\*\((.+)\)\*\s*$', ln.strip())
        if m:
            marks.setdefault(last, []).append(m.group(1))
    return marks


def read_ebl(unit):
    """[(label, normalization, variants, lemmas)] from the eBL reading-edition.md; rank-3 {label: T}; atf {label: [..]}.
    A line with an empty N (Advice 45) takes its lemma forms as the normalization (marked in `data`)."""
    path = os.path.join(EBL, UNITS[unit]['folder'], 'reading-edition.md')
    out, tr, atf = [], {}, {}
    cur = None
    inatf = False
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^### (\S+)\s*$', ln)
        if m:
            cur = [m.group(1), '', [], '']
            out.append(cur)
            continue
        if cur is None:
            continue
        if ln.startswith('```'):
            inatf = not inatf
            continue
        if inatf:
            atf.setdefault(cur[0], []).append(ln)
        elif ln.startswith('- **N:**'):
            cur[1] = ws(ln[8:])
        elif ln.startswith('- **N (variant'):
            cur[2].append(ws(ln.split(':**', 1)[1]))
        elif ln.startswith('- **T:**'):
            tr[cur[0]] = ws(ln[8:])
        elif ln.startswith('- **L:**'):
            cur[3] = ws(ln[8:])
            if not cur[1]:
                cur[1] = ' '.join(re.findall(r'\*([^*]+)\* ←', ln))
                cur.append('from-lemmas')
    res = []
    for x in out:
        res.append((x[0], x[1], ' / '.join(x[2]), x[3]))
    return res, tr, atf


def base_lines(unit):
    """[(label, source line (backticked), norm (SAA) / variants (eBL), lem)], rank3."""
    if UNITS[unit]['kind'] == 'saa':
        return read_saa(unit)
    lines, tr, _ = read_ebl(unit)
    return lines, tr


# ---------------------------------------------------------------- annotated files
def unit_paths(unit):
    U = UNITS[unit]
    d = os.path.join(HERE, PROJ_DIRS[U['proj']])
    return [os.path.join(d, f) for f in U['files']]


def units_of(path):
    return [k for k, U in UNITS.items() if os.path.basename(path) in U['files']
            and os.path.dirname(os.path.abspath(path)).endswith(PROJ_DIRS[U['proj']])]


def parse_annotated(path, problems=None):
    """{unit: (order, entries)} from one annotated file; units are marked by `<!-- unit: KEY -->` lines (a file of one
    unit may omit the marker)."""
    res = {}
    if not os.path.exists(path):
        return res
    uo = units_of(path)
    unit = uo[0] if len(uo) == 1 else None
    cur = None
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^<!-- unit: (\S+) -->', ln)
        if m:
            unit = m.group(1)
            cur = None
            continue
        m = re.match(r'^### (\S+)\s*$', ln)
        if m:
            if unit is None:
                if problems is not None:
                    problems.append(f'{os.path.basename(path)}: entry {m.group(1)} before any unit marker')
                continue
            order, ent = res.setdefault(unit, ([], {}))
            cur = m.group(1)
            if cur in ent and problems is not None:
                problems.append(f'{unit}: duplicate entry {cur}')
            ent[cur] = dict(heb=[], tr=[], fn=None, file=os.path.basename(path))
            order.append(cur)
            continue
        if ln.startswith('## ') or ln.startswith('# '):
            cur = None
            continue
        if cur is None or unit is None:
            continue
        e = res[unit][1][cur]
        if ln.startswith('> '):
            e['heb'].append(ln[2:].rstrip())
        elif ln.startswith('`') and not e['tr'] and not e['heb']:
            s = ln.strip()
            e['tr'].append(s[1:-1].strip() if s.endswith('`') and len(s) > 1 else s.strip('`'))
        elif ln.startswith('- **הערת שוליים:**'):
            e['fn'] = ln[len('- **הערת שוליים:**'):].strip()
    return res


def unit_entries(unit, problems=None):
    order, ent = [], {}
    seen = set()
    for p in unit_paths(unit):
        if p in seen:
            continue
        seen.add(p)
        r = parse_annotated(p, problems)
        if unit in r:
            o, e = r[unit]
            for k in o:
                if k in ent and problems is not None:
                    problems.append(f'{unit}: duplicate entry {k}')
            order += o
            ent.update(e)
    return order, ent


# ---------------------------------------------------------------- checks
def license_text(unit, label, tr, base):
    b = base.get(label)
    s = tr
    if b:
        s += ' norm: ' + (b[2] if UNITS[unit]['kind'] == 'saa' else b[1] + ' / ' + b[2]) + ' lem: ' + b[3]
    return s


def check_reserved(unit, label, heb, lic, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED.items():
        if re.search(pat, h):
            if allow and any(re.search(a, lic) for a in allow):
                continue
            problems.append(f'{unit} {label}: reserved string /{pat}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ' (never)'))


def check_traps(unit, label, heb, lic, problems):
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—…]+', FN.sub('', heb)):
        if not tok:
            continue
        st = strip(tok)
        for part, raw in zip(st.split('־'), tok.split('־')):
            b = PREFIX.sub('', part, count=1)
            for trap, (what, rx) in TRAPS.items():
                if (part == trap or b == trap) and re.search(rx, lic) and not NIQQUD.search(raw):
                    problems.append(f'{unit} {label}: unvocalized "{tok}" reads as a Hebrew word: write {what}')


def check_formulas(unit, label, heb, lic, problems):
    h = re.sub(r'[\[\]⟨⟩?*]', '', strip(FN.sub('', heb))).strip()
    h = re.sub(r'\s+', ' ', h)
    for trx, hrx, what in FORMULAS:
        if re.search(trx, lic) and not re.search(hrx, h):
            problems.append(f'{unit} {label}: formula {what}: expected /{hrx}/ in "{heb}"')


def translation_lines(path):
    out = []
    unit = None
    for ln in open(path, encoding='utf-8'):
        m = re.match(r'^<!-- unit: (\S+) -->', ln)
        if m:
            unit = m.group(1)
        m = re.match(r'^\*\*([^*]+)\*\* (.*)$', ln.rstrip('\n'))
        if m:
            out.append((unit, m.group(1), FN.sub('', m.group(2)).rstrip().rstrip(' ').rstrip()))
    return out


def norm_cmp(s):
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩#]', '', s).strip()


def verify_units(units, strict=False, quiet=False):
    problems, notes = [], []
    allheb = []
    for unit in units:
        lines, _ = base_lines(unit)
        base = {x[0]: x for x in lines}
        labels = [x[0] for x in lines]
        before = len(problems)
        missing_files = [os.path.basename(p) for p in unit_paths(unit) if not os.path.exists(p)]
        order, ent = unit_entries(unit, problems)
        if missing_files and not order:
            (problems if strict else notes).append(f'{unit}: not yet drafted ({", ".join(sorted(set(missing_files)))})')
            continue
        if order != labels:
            missing = [x for x in labels if x not in ent]
            extra = [x for x in order if x not in base]
            present = [x for x in labels if x in ent]
            msg = f'{unit}: coverage {len(order)} entries vs {len(labels)} base lines; missing {len(missing)} {missing[:10]}; extra {extra[:10]}'
            if extra or present != order:
                problems.append(msg + ('' if present == order else '; order differs from the base text'))
            else:
                (problems if strict else notes).append(msg)
        pending = 0
        for k in order:
            e = ent[k]
            if len(e['heb']) != 1:
                problems.append(f'{unit} entry {k}: {len(e["heb"])} ">" lines')
                continue
            tr = e['tr'][0] if e['tr'] else ''
            if not tr:
                problems.append(f'{unit} entry {k}: no backticked base line')
            elif tr == '@':
                problems.append(f'{unit} entry {k}: placeholder `@` not filled (run fill)')
            elif k in base and ws(tr) != ws(base[k][1]):
                problems.append(f'{unit} entry {k}: base line differs from the base text:\n    A: {tr}\n    B: {base[k][1]}')
            heb = e['heb'][0]
            if 'טרם תורגם' in heb:
                pending += 1
                continue
            lic = license_text(unit, k, tr, base)
            check_reserved(unit, k, heb, lic, problems)
            check_traps(unit, k, heb, lic, problems)
            check_formulas(unit, k, heb, lic, problems)
            key = base[k][2] if (k in base and UNITS[unit]['kind'] == 'saa') else (base[k][1] if k in base else tr)
            allheb.append((unit, k, norm_cmp(key), heb))
        if pending:
            (problems if strict else notes).append(f'{unit}: {pending} entries not yet drafted')
        if not quiet:
            n = len(problems) - before
            print(f'unit {unit}: {len(order)}/{len(labels)} entries; ' + ('OK' if n == 0 else f'{n} problem(s)'))
    by = {}
    for unit, k, t, h in allheb:
        by.setdefault(t, []).append((unit, k, re.sub(r'[\[\]"“”⟨⟩.,;:!?–—]', '', strip(FN.sub('', h))).strip()))
    for t, ks in by.items():
        toks = [x for x in t.split() if x != '—']
        if len(ks) > 1 and len({re.sub(r'\s+', ' ', h) for _, _, h in ks}) > 1 and len(toks) >= 2:
            notes.append(f'same normalization, different Hebrew: {[(u + " " + k) for u, k, _ in ks]}: {t}')
    for proj in sorted({UNITS[u]['proj'] for u in units}):
        tp = os.path.join(HERE, PROJ_DIRS[proj], 'translation.rtl.md')
        if not os.path.exists(tp):
            continue
        tl = translation_lines(tp)
        al = []
        for u in [k for k, U in UNITS.items() if U['proj'] == proj]:
            o, e = unit_entries(u)
            al += [(u, k, FN.sub('', e[k]['heb'][0]).rstrip()) for k in o if e[k]['heb']]
        if len(tl) != len(al):
            problems.append(f'{proj}: translation.rtl.md has {len(tl)} numbered lines, the annotated files {len(al)}')
        for a, t in zip(al, tl):
            if a != t:
                problems.append(f'{proj}: translation mismatch at {a[0]} {a[1]} / {t[0]} {t[1]}:\n    A: {a[2]}\n    T: {t[2]}')
                break
    print('verify: ' + ('OK' if not problems else f'{len(problems)} problem(s)'))
    for p in problems:
        print('  - ' + p)
    for n in notes:
        print('  · ' + n)
    return not problems


# ---------------------------------------------------------------- commands
def cmd_units():
    for k, U in UNITS.items():
        lines, _ = base_lines(k)
        print(f'{k:4} {U["proj"]:5} {len(lines):4} lines  {",".join(U["files"])}  {U["title"]}')


def cmd_data(unit, a=None, b=None):
    lines, tr = base_lines(unit)
    labels = [x[0] for x in lines]
    i = labels.index(a) if a else 0
    j = labels.index(b) if b else len(labels) - 1
    kind = UNITS[unit]['kind']
    atf = read_ebl(unit)[2] if kind == 'ebl' else {}
    marks = saa_marks(unit) if kind == 'saa' else {}
    if i == 0 and marks.get(None):
        print('    [' + '; '.join(marks[None]) + ']')
    for lab, t, n, l in lines[i:j + 1]:
        print(f'{lab} | {t}')
        if kind == 'saa':
            if n:
                print(f'    norm: {n}')
        else:
            if n:
                print(f'    variant N: {n}')
            for x in atf.get(lab, []):
                print(f'    ATF {x}')
        if l:
            print(f'    lem: {l}')
        if lab in tr:
            print(f'    R3: {tr[lab]}')
        if marks.get(lab):
            print('    [' + '; '.join(marks[lab]) + ']')


def cmd_fill(path):
    path = os.path.abspath(path)
    text = open(path, encoding='utf-8').read().split('\n')
    uo = units_of(path)
    unit = uo[0] if len(uo) == 1 else None
    base = {}
    cur = None
    n = 0
    for i, ln in enumerate(text):
        m = re.match(r'^<!-- unit: (\S+) -->', ln)
        if m:
            unit = m.group(1)
            continue
        m = re.match(r'^### (\S+)\s*$', ln)
        if m:
            cur = m.group(1)
            continue
        if ln.strip() == '`@`' and cur and unit:
            if unit not in base:
                base[unit] = {x[0]: x[1] for x in base_lines(unit)[0]}
            if cur in base[unit]:
                text[i] = '`' + base[unit][cur] + '`'
                n += 1
            else:
                print(f'no base line {unit} {cur}')
    open(path, 'w', encoding='utf-8').write('\n'.join(text))
    print(f'{os.path.basename(path)}: {n} base lines filled')


def cmd_shared():
    """repeated normalizations (≥ 2 tokens) across the SAA units, with the drafted Hebrew where present"""
    occ = {}
    heb = {}
    for unit, U in UNITS.items():
        if U['kind'] != 'saa':
            continue
        lines, _ = base_lines(unit)
        o, e = unit_entries(unit)
        for lab, t, n, l in lines:
            toks = [x for x in n.split() if x != '—']
            if len(toks) < 2:
                continue
            k = ' '.join(toks)
            occ.setdefault(k, []).append(f'{unit} {lab}')
            if lab in e and e[lab]['heb']:
                heb.setdefault(k, []).append(f'{unit} {lab}: {e[lab]["heb"][0]}')
    for k, v in sorted(occ.items(), key=lambda kv: (-len(kv[1]), kv[0])):
        if len(v) > 1:
            print(f'{len(v)}× {k}: {", ".join(v)}')
            for h in heb.get(k, []):
                print(f'     {h}')


def cmd_build(proj):
    d = os.path.join(HERE, PROJ_DIRS[proj])
    intro = open(os.path.join(d, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../prophecy_tools.py build ' + proj +
            ' from translation--intro.rtl.md and the annotated `>` lines (unit and section headings = the annotated `## `\n'
            'lines; footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated file(s) and rebuild.\n-->\n\n')
    out, notes, n = [], [], 0
    units = [k for k, U in UNITS.items() if U['proj'] == proj]
    for unit in units:
        U = UNITS[unit]
        order, ent = unit_entries(unit)
        if not order:
            continue
        if len(units) > 1:
            out.append(f'\n<!-- unit: {unit} -->\n## {U["title"]}\n')
        else:
            out.append(f'\n<!-- unit: {unit} -->')
        heads = {}
        seen = set()
        for p in unit_paths(unit):
            if p in seen or not os.path.exists(p):
                continue
            seen.add(p)
            uo = units_of(p)
            cu = uo[0] if len(uo) == 1 else None
            pend = None
            for ln in open(p, encoding='utf-8'):
                ln = ln.rstrip('\n')
                m = re.match(r'^<!-- unit: (\S+) -->', ln)
                if m:
                    cu = m.group(1)
                    continue
                if ln.startswith('## ') and cu == unit:
                    pend = ln[3:].strip()
                m = re.match(r'^### (\S+)\s*$', ln)
                if m and cu == unit and pend:
                    heads[m.group(1)] = pend
                    pend = None
        hl = '###' if len(units) > 1 else '##'
        for k in order:
            e = ent[k]
            if k in heads:
                out.append(f'\n{hl} {heads[k]}\n')
            ref = ''
            if e['fn']:
                n += 1
                ref = f'[^{n}]'
                notes.append(f'[^{n}]: {e["fn"]}')
            out.append(f'**{k}** {e["heb"][0]}{ref}  ')
    text = head + intro + '\n' + '\n'.join(out) + '\n' + ('\n---\n\n' + '\n\n'.join(notes) + '\n' if notes else '')
    open(os.path.join(d, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
    print(f'{PROJ_DIRS[proj]}/translation.rtl.md written: {sum(1 for x in out if x.startswith("**"))} lines, {n} footnotes')
    return verify_units(units, quiet=True)


def cmd_grep(scope, pat):
    rx = re.compile(pat)
    if scope in PROJ_DIRS:
        files = glob.glob(os.path.join(HERE, PROJ_DIRS[scope], 'annotated*.rtl.md'))
    else:
        files = glob.glob(os.path.join(HERE, '*', 'annotated*.rtl.md'))
        if scope == 'every':
            files += [f for f in glob.glob(os.path.join(ROOT, '*', '**', 'annotated*.rtl.md'), recursive=True)
                      if not f.startswith(HERE)]
    for f in sorted(set(files)):
        tr = None
        lab = None
        for ln in open(f, encoding='utf-8'):
            m = re.match(r'^### (\S+)', ln)
            if m:
                lab, tr = m.group(1), None
            elif ln.startswith('`') and tr is None:
                tr = ln.strip()
            elif ln.startswith('> ') and rx.search(strip(ln)):
                print(f'{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()}   ‹{(tr or "")[:90]}›')


def cmd_lookup(pat, lim=6):
    """every backticked source line (all of them: transliteration, `N:` normalization …) of each entry is searched"""
    rx = re.compile(pat)
    hits = {}
    for f in glob.glob(os.path.join(ROOT, '*', '**', 'annotated*.rtl.md'), recursive=True):
        src = []
        for ln in open(f, encoding='utf-8'):
            if ln.startswith('### '):
                src = []
            elif ln.startswith('`') and ln.rstrip().endswith('`'):
                src.append(ln.strip())
            elif ln.startswith('> ') and src and any(rx.search(s) for s in src):
                k = os.path.relpath(f, ROOT).split('/')[0]
                hits.setdefault(k, []).append(ln[2:].strip()[:120] + '  ‹' + ' | '.join(src)[:140] + '›')
    for k, v in hits.items():
        print('==', k, len(v))
        for x in v[:lim]:
            print('  ', x)


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    c = a[0]
    if c == 'units':
        cmd_units()
    elif c == 'data' and len(a) >= 2:
        cmd_data(a[1], a[2] if len(a) > 2 else None, a[3] if len(a) > 3 else None)
    elif c == 'fill' and len(a) >= 2:
        for p in a[1:]:
            cmd_fill(p)
    elif c == 'shared':
        cmd_shared()
    elif c == 'verify':
        args = [x for x in a[1:] if not x.startswith('--')]
        units = []
        for x in args or list(PROJ_DIRS):
            units += [k for k, U in UNITS.items() if U['proj'] == x] if x in PROJ_DIRS else [x]
        sys.exit(0 if verify_units(units, '--strict' in a) else 1)
    elif c == 'build' and len(a) >= 2:
        sys.exit(0 if cmd_build(a[1]) else 1)
    elif c == 'grep' and len(a) >= 3:
        cmd_grep(a[1], a[2])
    elif c == 'lookup' and len(a) >= 2:
        cmd_lookup(a[1], int(a[2]) if len(a) > 2 else 6)
    else:
        sys.exit(__doc__)


if __name__ == '__main__':
    main()
