"""Tools of the everyday-voices corpus (`קולות-היום-יום/`): the OB love lyrics (ORACC AkkLove), the Sumerian proverbs
(ETCSL 6.1) and the letters (ETCSL 5.5.1, 3.3.x). Written 2026-10-21 (Round 2, run 7), adapted from
../קינות-על-ערים/lament_tools.py and ../בניין-המקדש/temple_tools.py. A text is a UNITS entry (one base text, one or more
annotated files); a project is a group of units that builds one translation.rtl.md.

Usage (from any directory; always `python3 -I`):
  kol_tools.py units                          list the units, their base texts and files
  kol_tools.py data UNIT [FROM [TO]]          a translator's data: per line the label, the transliteration, the ORACC
                                              normalization / lemmas (+ morph), the rank-3 translation (at the unit's first
                                              line); for a proverb selection only the selected proverbs
  kol_tools.py fill FILE                      replace every backticked transliteration written as `@` with the base text's
                                              line (exactly), so a translator never retypes the transliteration
  kol_tools.py verify [UNIT|PROJECT …] [--strict]   (exit 1 on an error)
        1. every `### <label>` entry has one `> ` line and one backticked transliteration, equal to the base text's
           (whitespace normalized); no duplicate labels; coverage = the base line list (or the selection), in order
           (a not-yet-drafted file / `[טרם תורגם]` is a note; --strict: an error);
        2. RESERVED and gated strings (renderings.md §5), niqqud stripped, licensed by the transliteration + the
           ORACC normalization + the lemmas of that line;
        3. TRAPS: names that read as Hebrew words unvocalized (renderings §6), when the name is in the line;
        4. FORMULAS (renderings §3.3 and the fixed refrains);
        5. translation.rtl.md of the project (if present): its numbered lines equal the `>` lines one to one;
        and REPORTS (not errors) identical transliterations with different Hebrew, within the corpus.
  kol_tools.py build PROJECT                  translation.rtl.md from translation--intro.rtl.md + the units' annotated files
                                              (unit headings, the `## ` section headings, `**label** …` lines, proverb numbers,
                                              `- **הערת שוליים:** …` bullets as footnotes); then verify
  kol_tools.py grep (PROJECT|all|every) '<regex>'   `>` lines (niqqud stripped) matching; all = this corpus; every =
                                              this corpus + every earlier corpus
  kol_tools.py lookup '<regex>'               earlier corpora: the Hebrew of every line whose transliteration matches
                                              (how a word was rendered before: grep by lemma/form, guidelines §5.2 ★)
PROJECTS: LOVE (1-שירי-אהבה), PROV (2-משלים-שומריים), LET (3-מכתבים).
"""
import glob
import html
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, 'sources')
AKK = os.path.join(SRC, 'ORACC', 'akklove--Akkadian-Love-Literature')

PROJ_DIRS = {'LOVE': '1-שירי-אהבה', 'PROV': '2-משלים-שומריים', 'LET': '3-מכתבים'}


def _akk(n, ident, title, files):
    return dict(proj='LOVE', kind='akk', base=f'LAOS4-{n}--{ident}', title=title, files=files)


# Order = reading order in the clean translation. Titles are the Hebrew unit headings.
UNITS = {
    # --- project 1: love lyrics and dialogues (OB), then the love incantations (OAkk / OB)
    'L10': _akk('10', 'X001003', 'נַנָּיָה וּמוּאָתִי: שיר אהבה לאֲבִי־אֶשׁוּחַ (LAOS 4 10, בבל)', ['annotated-10.rtl.md']),
    'L15': _akk('15', 'P305850', 'שיר השנה החדשה לרִים־סִין (LAOS 4 15, לרסה)', ['annotated-15.rtl.md']),
    'L16': _akk('16', 'X001013', 'דו־שיח של אוהבים: "האוהב הנאמן" (LAOS 4 16, סיפר)', ['annotated-16.rtl.md']),
    'L04': _akk('04', 'P252226', 'דברי הדחייה: "אני בוז לנערה" (LAOS 4 04)', ['annotated-04.rtl.md']),
    'L07': _akk('07', 'X001001', 'בוא, רועה, אהוב אִשְׁתַּר (LAOS 4 07)', ['annotated-07.rtl.md']),
    'L06': _akk('06', 'P424004', '"איה אהובי?" – סדרת שירי אִירְתוּם לעַמִּי־דִּיתָנָה (LAOS 4 06, כִּישׁ)', ['annotated-06.rtl.md']),
    'L02': _akk('02', 'P251898', 'בת הגולה – "לבי שמח" (LAOS 4 02, סיפר)', ['annotated-02.rtl.md']),
    'L03': _akk('03', 'P254179', '"אשים לב, אצפה": שיר הנערה (LAOS 4 03)', ['annotated-03.rtl.md']),
    'L01': _akk('01', 'P392087', 'הדו־שיח הגדול: "כתפוח הבשל" (LAOS 4 01)', ['annotated-01.rtl.md']),
    'L13': _akk('13', 'X001006', '"קום ואאהבך": שיר מכִּישׁ (LAOS 4 13)', ['annotated-13.rtl.md']),
    'L18': _akk('18', 'P252332', 'שורות של מחזה גס: "עמדי באור החלונות" (LAOS 4 18)', ['annotated-18.rtl.md']),
    'L17': _akk('17', 'P429343', 'חמשה שירי אִירְתוּם לעַמִּי־צָדוּקָה (LAOS 4 17, סיפר)', ['annotated-17.rtl.md']),
    'L05': _akk('05', 'P251711', 'בת סִין הנעלה (LAOS 4 05)', ['annotated-05.rtl.md']),
    'L14a': _akk('14a', 'X001007', 'שירי שׁוּ־סִין מכִּישׁ (א) (LAOS 4 14a)', ['annotated-14.rtl.md']),
    'L14b': _akk('14b', 'X001008', 'שירי שׁוּ־סִין מכִּישׁ (ב) (LAOS 4 14b)', ['annotated-14.rtl.md']),
    'L14c': _akk('14c', 'X001009', 'שירי שׁוּ־סִין מכִּישׁ (ג) (LAOS 4 14c)', ['annotated-14.rtl.md']),
    'L14d': _akk('14d', 'X001010', 'שירי שׁוּ־סִין מכִּישׁ (ד) (LAOS 4 14d)', ['annotated-14.rtl.md']),
    'L14e': _akk('14e', 'X001011', 'שירי שׁוּ־סִין מכִּישׁ (ה) (LAOS 4 14e)', ['annotated-14.rtl.md']),
    'L14f': _akk('14f', 'X001012', 'שירי שׁוּ־סִין מכִּישׁ (ו) (LAOS 4 14f)', ['annotated-14.rtl.md']),
    'L22': _akk('22', 'P285640', 'לחש האהבה מכִּישׁ (אכדית עתיקה, LAOS 4 22)', ['annotated-22.rtl.md']),
    'L20': _akk('20', 'P252006', 'לחש אהבה: "בנות אָנוּ" (LAOS 4 20)', ['annotated-20-26.rtl.md']),
    'L23': _akk('23', 'P252071', 'לחש אהבה: "קרעתי את הקוץ" (LAOS 4 23)', ['annotated-20-26.rtl.md']),
    'L24': _akk('24', 'P274691', 'לחש לכיבוי אש הלב (LAOS 4 24, לרסה)', ['annotated-20-26.rtl.md']),
    'L25': _akk('25', 'P305832', 'לחש להשקטת לב זועם (LAOS 4 25, לרסה)', ['annotated-20-26.rtl.md']),
    'L26': _akk('26', 'P296059', 'לחש אהבה: "קרניו זהב" (LAOS 4 26, לרסה)', ['annotated-20-26.rtl.md']),
    # --- project 2: the Sumerian proverbs
    'P1': dict(proj='PROV', kind='sux', etcsl='6.1.01--Proverbs-Collection-1', q='Q000795--Proverbs-Collection-1',
               title='אוסף המשלים 1 (ETCSL 6.1.01)', files=['annotated-c1-1.rtl.md', 'annotated-c1-2.rtl.md',
                                                         'annotated-c1-3.rtl.md'], proverbs=True),
    'P2': dict(proj='PROV', kind='sux', etcsl='6.1.02--Proverbs-Collection-2-6', q='Q000796--Proverbs-Collection-2-6',
               title='מבחר מאוסף 2 (ETCSL 6.1.02)', files=['annotated-c2.rtl.md'], proverbs=True,
               select='2.15 2.16 2.17 2.18 2.19 2.20 2.22 2.23 2.27 2.28 2.29 2.30 2.32 2.33 2.34 2.37 2.38 2.40 2.47 '
                      '2.49 2.52 2.53 2.54 2.58 2.60 2.62 2.65 2.67 2.68 2.69 2.71 2.72 2.75 2.81 2.82 2.93 2.118 '
                      '2.119 2.121 2.122 2.123 2.124 2.138 2.141 2.142 2.146 2.155 2.157 2.158 2.159 2.160'),
    'P3': dict(proj='PROV', kind='sux', etcsl='6.1.03--Proverbs-Collection-3', q='Q000797--Proverbs-Collection-3',
               title='מבחר מאוסף 3 (ETCSL 6.1.03)', files=['annotated-c3.rtl.md'], proverbs=True,
               select='3.5 3.6 3.9 3.13 3.15 3.16 3.17 3.22 3.23 3.33 3.41 3.44 3.55 3.64 3.69 3.86 3.97 3.103 '
                      '3.112 3.114 3.118 3.127 3.134 3.159 3.160 3.170 3.171 3.175 3.176 3.177 3.183 3.190'),
    # --- project 3: the letters
    'LUD': dict(proj='LET', kind='sux', etcsl='5.5.1--Message-of-Ludigira-to-his-mother', q='Q000775--Message-of-Ludigira-to-his-mother',
                title='שליחותו של לוּ־דִּינְגִּירָה אל אמו (ETCSL 5.5.1)', files=['annotated-ludigira.rtl.md']),
    'UGU': dict(proj='LET', kind='sux', etcsl='3.3.07--Letter-Ugubi-to-his-mother', q='Q000579--Letter-Ugubi-to-his-mother',
                title='מכתב אוּגוּבִּי אל אמו (ETCSL 3.3.07)', files=['annotated-letters.rtl.md']),
    'ABA': dict(proj='LET', kind='sux', etcsl='3.3.06--Letter-Aba-tah-lugalga-to-his-brothers', q='Q000578--Letter-Aba-tah-lugalga-to-his-brothers',
                title='מכתב אַבָּא־תַּח־לוּגַלְגָּה אל אחיו (ETCSL 3.3.06)', files=['annotated-letters.rtl.md']),
    'URS': dict(proj='LET', kind='sux', etcsl='3.3.01--Letter-Ur-saga-to-a-king', q='Q000573--Letter-Ur-saga-to-a-king',
                title='מכתב אוּר־שַׂגָּה אל המלך: בית אבי (ETCSL 3.3.01)', files=['annotated-letters.rtl.md']),
    'INA': dict(proj='LET', kind='sux', etcsl='3.3.10--Letter-Inanaka-to-Nintinuga', q='Q000582--Letter-Inanaka-to-Nintinuga',
                title='מכתב אִינַנָּקָה אל האלה נִין־תִּין־אוּגָּה (ETCSL 3.3.10)', files=['annotated-letters.rtl.md']),
    'GUD': dict(proj='LET', kind='sux', etcsl='3.3.20--Letter-Gudea-to-his-personal-deity', q='Q000592--Letter-Gudea-to-his-personal-deity',
                title='מכתב גּוּדֵאָה אל אלוהו האישי (ETCSL 3.3.20)', files=['annotated-letters.rtl.md']),
    'SAM': dict(proj='LET', kind='sux', etcsl='3.3.08--Letter-Shamash-tab-to-Ilak-niid', q='Q000580--Letter-Shamash-tab-to-Ilak-niid',
                title='מכתב שַׁמַשׁ־טָאב אל אִילַק־נִיאִיד: חשבון הדרך (ETCSL 3.3.08)', files=['annotated-letters.rtl.md']),
    'IN1': dict(proj='LET', kind='sux', etcsl='3.3.11--Letter-Inim-Inana-to-Enlil-massu', q='Q000583--Letter-Inim-Inana-to-Enlil-massu',
                title='מכתב אִינִים־אִינַנָּה אל אֶנְלִיל־מַסּוּ (ETCSL 3.3.11)', files=['annotated-letters.rtl.md']),
    'IN2': dict(proj='LET', kind='sux', etcsl='3.3.12--Letter-Inim-Inana-to-Lugal-ibila', q='Q000584--Letter-Inim-Inana-to-Lugal-ibila',
                title='מכתב אִינִים־אִינַנָּה אל לוּגַל־אִיבִּילָה: אל תזניח את השומרית (ETCSL 3.3.12)', files=['annotated-letters.rtl.md']),
}

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
P = r'ו?[הבלמכש]?'                 # one-letter prefixes
# reserved Hebrew (regex on the niqqud-stripped `>` line) -> regexes on the licensing text (transliteration + norm +
# lemmas of the line); [] = never
RESERVED = {
    B + P + r'שיר(ה|ים|י|ת|ו)?' + E: [r'šir₃|širu'],
    r'שושנ|חבצלת|לבנון|' + B + P + r'(מור|לבונה|נרד|כרכם|קנמון|צוף)' + E: [],
    B + P + r'משל(ים|י)?' + E: [],
    r'צדק|צדיק': [],
    B + P + r'(ה?הבל|הבלים)' + E: [],
    B + P + r'יראת' + '|' + B + P + r'מוסר' + E: [],
    r'אלהים|אלוהים|יהוה': [],
    r'שאול': [],
    r'עולם': [],
    r'מנעול': [],
    B + P + r'פרי(ה|ו|ך|י)?' + E: [r'^SUX'],          # never in Akkadian (inbu = תנובה); allowed in Sumerian (gurun)
    B + P + r'דוד(י|ך|ו|ה|ים|יך|יו|ייך|יה|ינו|נו)?' + E: [r'dādu|dadū|dādū|da-a-d|da-di|da-du|šūdadu'],
    r'אהב|אוהב|אהוב': [r'râmu|rāmu|raʾīmu|rāʾimu|ruʾāmu|narāmu|ritūmu|murtâmu|na-ra-mi|ra-i-mi|ra-mi-|ki aĝ₂|ki-aĝ₂|ki aŋ₂|aŋ[measure]|aĝ₂'],
    r'צחק|צחוק': [r'ṣīhtu|ṣīḫtu|ṣiāhu|ṣiāḫu|ṣâhu|ṣīḫ|ṣīh|ṣūhiš|ṣūḫiš|ṣuhhu'],
    r'תפוח': [r'hašhūru|ḫašḫūru|ḫašḫur|hašhur|hašhur'],
    B + P + r'(גן|גנה|גנו|גני|גנים|גנת|גנך|גנם|גננו)' + E: [r'kirû|kiri₆|kirâ|kirî'],
    B + P + r'(יונה|יונת|יונים|יונתי)' + E: [r'summatu|tu-gur₄|tu{mušen}|tu-gur4'],
    r'דבש': [r'dišpu|lal₃'],
    B + P + r'(יין|יינו|ייני|יינה)' + E: [r'karānu|kurunnu|ĝeštin|ŋeštin'],
    B + P + r'(שמן|שמנים|שמנך|שמני)' + E: [r'šamnu|(^|\s|-)i₃(-|\s|$)|i₃-|ia₂|ellu'],
    B + P + r'(כלה|כלתה|כלתו|כלתי|כלות)' + E: [r'kallatu|kallātu|hīrtu|ḫīrtu|emi|e₂-gi₄-a|e₂-gi₄'],
    B + P + r'(ערש|ערשי|ערשה|ערשנו)' + E: [r'eršu'],
    r'משכב': [r'mayyālu|majālu|ki-nu₂|ki-nu₂'],
    B + P + r'(רעיה|רעיתי|רעיתו|רעייה)' + E: [r'marhītu|marḫītu'],
    r'חבק|חיבק': [r'habābu|ḫabābu'],
    r'(^|\s)ו?[ילתנ]?לפת|לפתה|לפתי|לופת': [r'edēru'],
    B + P + r'(נשק|נשקה|נשקי|ינשק|תנשק|נשיקה|נשיקות|נשקו)' + E: [r'našāqu|kakku|su-ub|su-ub'],
    r'שמאל': [r'šumēlu|gub₃'],
    B + r'ו?(קום|קומי|קומה|קומו)' + E: [r'tebû|zig₃|gana'],
    B + r'ו?(לכה|לכי|לכו)' + E: [r'alāku|ĝen|ŋen|(^|\s)du(\s|$)'],
    B + r'ו?(בוא|בואי|בואה|בואו)' + E: [r'erēbu|bâʾu|ku₄|kur[enter]|ĝen|ŋen'],
    r'חכמה|' + B + P + r'(חכם|חכמים|חכמת)' + E: [r'nam-kug-zu|kug-zu|nēmequ|emqu|namkugzu|kugzu'],
    r'תועב': [r'niĝ₂-gig|niŋ₂-gig|an-zil|ikkib|niŋgig'],
    r'רשע': [r'erim₂|raggu|niŋerim|nig₂-erim'],
    r'כסיל|אויל|אולת': [r'lil₂|lillu'],
    B + P + r'(טוב|טובה|טובים|טובות|טובו)' + E: [r'dug₃|du₁₀|ṭābu|ṭiābu|ṭūbu|ṭâbu|dug[good]'],
    B + r'ו?(ה|י|ת|א|נ|ל)?שוב' + E + '|' + B + r'ו?(ה|י|ת|א|נ|ל)שיב|ישובו|ישוב|תשוב|שבה|שבו': [r'gi₄|\bgur|-gur|târu|tuāru|tūru|gi[turn]|gur[turn]'],
    B + r'ו?[לבמה]?(ברך|בירך|ברכה|ברכת|ברכו|ברכה|בירכה|בירכו|יברך|תברך|אברך|נברך|מבורך|יבורך|בורך|ברוך|ברכות)' + E: [r'karābu|ikribu|šud₃|šudu₃|kiriš'],
    r'ארר|ארור|אורר': [r'arāru|nam\b.*ku₅|nam-ku₅'],
    r'קלל': [r'aš₂|(^|\s)aš(\s|$)|aš[curse]|arratu'],
    B + r'ו?[לבמהשכ]{0,2}(נכרי|נכריה|נכריים|נכרים|נכר|התנכר)' + E: [r'kur₂|nakru|lukur|nakāru'],
    B + P + r'(עבד|עבדו|עבדי|עבדך|עבדים)' + E: [r'arad|wardu|ir₃|ARAD|IR₃'],
    B + P + r'(מבול)' + E: [r'amaru|a-ma-ru|abūbu'],
}
# name traps: stripped token (prefixes allowed) -> (name, licensing regex on the line)
TRAPS = {
    'אותו': ('Utu (אוּתוּ)', r'\{d\}utu\b|Utu\['), 'איננה': ('Inana (אִינַנָּה)', r'inana|inanna|Inanak'),
    'אור': ('Urim (אוּר)', r'urim|Urim'), 'אן': ('An (אַן)', r'(^|\s)an-(ne₂|ra|na)|\{d\}an\b|An\['),
    'אנו': ('Anu (אָנוּ)', r'(^|\s)\{d\}a-nu|(^|\s)a-nu-(um|um₂|ni)|Anum\[|Anu\['), 'סין': ('Sîn (סִין)', r'Sîn|{d}EN\.ZU|{d}suen|30'),
    'באו': ('Bau (בָּאוּ)', r'ba-u₂|ba-ba₆'), 'ארורו': ('Aruru (אֲרוּרוּ)', r'a-ru-ru'),
    'דוד': ('dādu (דּוֹד)', r'dādu|da-di|da-du|da-a-d'), 'דודי': ('dādu (דּוֹדִי)', r'dādu|da-di|da-du|da-a-d'),
    'דודים': ('dādū (דּוֹדִים)', r'dādu|da-du|da-a-d'), 'כלה': ('kallatu (כַּלָּה)', r'kallatu|kallātu|hīrtu|ḫīrtu|emi|e₂-gi₄'),
    'אמה': ('amtu / geme₂ (אָמָה)', r'geme₂|amtu|GEME₂'), 'אלי': ('my god (אֵלִי)', r'diĝir-ĝu₁₀|diŋir-ŋu₁₀|ilī\b|ilu\[god\].*-ia'),
    'אהבים': ('ritūmu (אֳהָבִים)', r'ritūmu'), 'בלילי': ('Belili (בֵּלִילִי)', r'bi-li-li|Belili'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
# fixed formulas: (regex on the transliteration, required regex on the stripped `>` line, description)
FORMULAS = [
    (r'u₃-na(-a)?-dug₄', r'אמור:?', 'letter opening *X-ra u₃-na-dug₄* = `אל X אֱמֹר:` (renderings §3.3)'),
    (r'na-ab-be₂-a$', r'^זה אשר .* אומר:$', 'letter opening *Y na-ab-be₂-a* = `זֶה אֲשֶׁר Y אוֹמֵר:`'),
    (r'a-ma-ru-kam', r'מבול הוא!', 'letter closing *a-ma-ru-kam* = `מַבּוּל הוּא!`'),
    (r'niĝ₂-gig', r'תועבת|תועבה', '*niĝ₂-gig* = `תּוֹעֵבָה`'),
    (r'ezen nu-(ub-)?tuku', r'אין לו חג', '*ezen nu-tuku* = `אֵין לוֹ חַג`'),
]


def strip(s):
    return NIQQUD.sub('', s)


def ws(s):
    return re.sub(r'\s+', ' ', s).strip()


# ---------------------------------------------------------------- base texts
def akk_label(lab):
    return re.sub(r'\.?\s+', '.', lab.strip())


def read_akk(unit):
    """[(label, translit, norm, lem)] from the ORACC AkkLove lemmatised .md; rank-3 {label: text}."""
    base = UNITS[unit]['base']
    out, cur = [], None
    for ln in open(os.path.join(AKK, base + '--lemmatised.md'), encoding='utf-8'):
        ln = ln.rstrip('\n').rstrip()
        m = re.match(r'^\*\*(.+?)\*\* (.*)$', ln)
        if m:
            cur = [akk_label(m.group(1)), ws(m.group(2)), '', '']
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
    p = os.path.join(AKK, base + '--translation.md')
    if os.path.exists(p):
        for ln in open(p, encoding='utf-8'):
            m = re.match(r'^\*\*\[(.+?)\]\*\* (.*)$', ln.rstrip())
            if m:
                tr[akk_label(m.group(1).split('-')[0].split('–')[0])] = ws(m.group(2))
    return [tuple(x) for x in out], tr


def etcsl_xml_lines(unit):
    """[(label, proverb-number-or-None)] in order, from the ETCSL TEI (segment letter + line n)."""
    U = UNITS[unit]
    num = U['etcsl'].split('--')[0]
    s = open(os.path.join(SRC, 'ETCSL', U['etcsl'], f'c.{num}.xml'), encoding='utf-8', errors='replace').read()
    out = []
    for m in re.finditer(r'<l n="([^"]+)" id="c[0-9]+\.([A-Z]+)?\.?([^"]*)"', s):
        n, seg, rest = m.group(1), m.group(2), m.group(3)
        prov = None
        if U.get('proverbs'):
            parts = rest.split('.')
            prov = '.'.join(parts[:2]) if len(parts) >= 3 else None
        out.append(((seg or '') + n, prov))
    return out


def etcsl_md_lines(unit):
    """[(label, translit)] from the etcsl2md transliteration.md; segment X line N -> XN."""
    U = UNITS[unit]
    out, seg = [], ''
    for ln in open(os.path.join(SRC, 'ETCSL', U['etcsl'], 'transliteration.md'), encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^## Segment (\w+)', ln)
        if m:
            seg = m.group(1)
            continue
        m = re.match(r'^(\d+[A-Za-z]*)\. (.*?)\s*$', ln)
        if m:
            out.append((seg + m.group(1), m.group(2)))
    return out


def clean_tr(s):
    s = re.sub(r'\s*\(\*[^)]*\)', '', s)          # variant parentheses (*1 ms. has instead:* …)
    s = re.sub(r'\s*\*[^*]*\*', '', s)             # ETCSL catalogue notes *…*
    return ws(s)


def read_sux(unit):
    """[(label, translit, '', lem+morph)], rank-3 {label: text}, {label: proverb}."""
    U = UNITS[unit]
    md = etcsl_md_lines(unit)
    xl = etcsl_xml_lines(unit)
    prov = {}
    if U.get('proverbs'):
        # the md and the xml list the same lines in the same order
        if len(md) == len(xl):
            prov = {md[i][0]: xl[i][1] for i in range(len(md))}
        else:
            d = dict(xl)
            prov = {k: d.get(k) for k, _ in md}
    # ORACC lemmas + morph
    lem = {}
    qd = os.path.join(SRC, 'ORACC', 'epsd2-literary--' + U['q'])
    qf = glob.glob(os.path.join(qd, '*--lemmatised-morph.md'))
    if qf:
        cur = None
        byprov = {}
        for ln in open(qf[0], encoding='utf-8'):
            ln = ln.rstrip()
            m = re.match(r'^\*\*(.+?)\*\* (.*)$', ln)
            if m:
                lab = m.group(1)
                mm = re.match(r'proverb (\S+), (\S+)', lab)
                cur = (mm.group(1), mm.group(2)) if mm else lab
                continue
            if cur is not None and ln.strip().startswith('<sub>lem:'):
                byprov[cur] = ws(re.sub(r'</?sub>', '', ln.strip())[4:])
                cur = None
        for lab, _ in md:
            if U.get('proverbs'):
                n = re.match(r'[A-Z]*(\d+[A-Za-z]*)', lab).group(1)
                lem[lab] = byprov.get((prov.get(lab), n), '')
            else:
                lem[lab] = byprov.get(lab, '')
    # rank-3 translation
    tr = {}
    num = U['etcsl'].split('--')[0]
    tx = open(os.path.join(SRC, 'ETCSL', U['etcsl'], f't.{num}.xml'), encoding='utf-8', errors='replace').read()

    def ttext(frag):
        frag = re.sub(r'<note.*?</note>', '', frag, flags=re.S)
        frag = re.sub(r'<[^>]+>', '', frag)
        frag = re.sub(r'&([A-Za-z]+);', lambda m: {'c': 'š', 'C': 'Š', 'g': 'ĝ', 'G': 'Ĝ', 'h': 'ḫ', 'H': 'Ḫ', 'X': '…', 'aacute': 'á',
                                                     'oacute': 'ó', 'amacr': 'ā', 'imacr': 'ī', 'umacr': 'ū', 'emacr': 'ē',
                                                     'icirc': 'î', 'acirc': 'â', 'ucirc': 'û', 'ecirc': 'ê', 't': 'ṭ', 's': 'ṣ',
                                                     'aleph': 'ʾ', 'commat': '@'}.get(m.group(1), ''), frag)
        return ws(html.unescape(frag))
    if U.get('proverbs'):
        first = {}
        for lab, pv in prov.items():
            first.setdefault(pv, lab)
        for m in re.finditer(r'<lg[^>]*n="([^"]+)"[^>]*>(.*?)</lg>', tx, re.S):
            if m.group(1) in first:
                tr[first[m.group(1)]] = ttext(m.group(2))
    else:
        labels = [k for k, _ in md]
        for m in re.finditer(r'<p[^>]*n="([^"]+)"[^>]*>(.*?)</p>', tx, re.S):
            a = m.group(1).split('-')[0]
            if a in labels:
                tr[a] = ttext(m.group(2))
    return [(k, ws(t), '', lem.get(k, '')) for k, t in md], tr, prov


def base_lines(unit):
    """[(label, translit, norm, lem)], rank3, proverb map; restricted to a selection."""
    U = UNITS[unit]
    if U['kind'] == 'akk':
        lines, tr = read_akk(unit)
        return lines, tr, {}
    lines, tr, prov = read_sux(unit)
    if U.get('select'):
        sel = set(U['select'].split())
        lines = [x for x in lines if prov.get(x[0]) in sel]
    return lines, tr, prov


# ---------------------------------------------------------------- annotated files
def unit_paths(unit):
    U = UNITS[unit]
    d = os.path.join(HERE, PROJ_DIRS[U['proj']])
    return [os.path.join(d, f) for f in U['files']]


def parse_annotated(path, problems=None):
    """{unit: (order, entries)} from one annotated file; units are marked by `<!-- unit: KEY -->` lines (a file of one
    unit may omit the marker if the file belongs to exactly one unit)."""
    res = {}
    if not os.path.exists(path):
        return res
    units_of_file = [k for k, U in UNITS.items() if os.path.basename(path) in U['files']
                     and os.path.dirname(path).endswith(PROJ_DIRS[U['proj']])]
    unit = units_of_file[0] if len(units_of_file) == 1 else None
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
            e['tr'].append(ln.strip()[1:-1].strip() if ln.strip().endswith('`') else ln.strip().strip('`'))
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
        s += ' ' + b[1] + ' ' + b[2] + ' ' + b[3]
    if UNITS[unit]['kind'] == 'sux':
        s = 'SUX ' + s
    return s


def check_reserved(unit, label, heb, lic, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED.items():
        if re.search(pat, h):
            if allow and any(re.search(a, lic) for a in allow):
                continue
            problems.append(f'{unit} {label}: reserved string /{pat}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ' (never)'))


def check_traps(unit, label, heb, lic, problems):
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—]+', FN.sub('', heb)):
        if not tok:
            continue
        st = strip(tok)
        for part, raw in zip(st.split('־'), tok.split('־')):
            base = PREFIX.sub('', part, count=1)
            for trap, (what, rx) in TRAPS.items():
                if (part == trap or base == trap) and re.search(rx, lic) and not NIQQUD.search(raw):
                    problems.append(f'{unit} {label}: unvocalized "{tok}" reads as a Hebrew word: write {what}')


def check_formulas(unit, label, heb, tr, problems):
    h = re.sub(r'[\[\]⟨⟩]', '', strip(FN.sub('', heb))).strip()
    t = clean_tr(tr)
    for trx, hrx, what in FORMULAS:
        if re.search(trx, t) and not re.search(hrx, h):
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
            out.append((unit, m.group(1), FN.sub('', m.group(2)).rstrip()))
    return out


def norm_cmp(s):
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩#]', '', clean_tr(s)).strip()


def verify_units(units, strict=False, quiet=False):
    problems, notes = [], []
    allheb = []
    for unit in units:
        U = UNITS[unit]
        lines, _, prov = base_lines(unit)
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
                problems.append(f'{unit} entry {k}: no backticked transliteration line')
            elif tr == '@':
                problems.append(f'{unit} entry {k}: transliteration placeholder `@` not filled (run fill)')
            elif k in base and ws(clean_tr(tr)) != ws(clean_tr(base[k][1])):
                problems.append(f'{unit} entry {k}: transliteration differs from the base text:\n    A: {tr}\n    B: {base[k][1]}')
            heb = e['heb'][0]
            if 'טרם תורגם' in heb:
                pending += 1
                continue
            lic = license_text(unit, k, tr, base)
            check_reserved(unit, k, heb, lic, problems)
            check_traps(unit, k, heb, lic, problems)
            check_formulas(unit, k, heb, tr, problems)
            allheb.append((unit, k, norm_cmp(tr), heb))
        if pending:
            (problems if strict else notes).append(f'{unit}: {pending} entries not yet drafted')
        if not quiet:
            n = len(problems) - before
            print(f'unit {unit}: {len(order)}/{len(labels)} entries; ' + ('OK' if n == 0 else f'{n} problem(s)'))
    by = {}
    for unit, k, t, h in allheb:
        by.setdefault(t, []).append((unit, k, re.sub(r'[\[\]"“”⟨⟩.,;:!?]', '', strip(h)).strip()))
    for t, ks in by.items():
        if len(ks) > 1 and len({h for _, _, h in ks}) > 1 and len(t.split()) > 2 and '…' not in t and 'x' not in t.split():
            notes.append(f'same transliteration, different Hebrew: {[(u + " " + k) for u, k, _ in ks]}: {t}')
    # translation files
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
        lines, _, _ = base_lines(k)
        print(f'{k:5} {U["proj"]:5} {len(lines):4} lines  {",".join(U["files"])}  {U["title"]}')


def cmd_data(unit, a=None, b=None):
    lines, tr, prov = base_lines(unit)
    labels = [x[0] for x in lines]
    i = labels.index(a) if a else 0
    j = labels.index(b) if b else len(labels) - 1
    lastp = None
    for lab, t, n, l in lines[i:j + 1]:
        pv = prov.get(lab)
        if pv and pv != lastp:
            print(f'\n=== proverb {pv}' + (f'   ETCSL: {tr[lab]}' if lab in tr else ''))
            lastp = pv
        print(f'{lab} | {t}')
        if n:
            print(f'    norm: {n}')
        if l:
            print(f'    lem: {l}')
        if lab in tr and not pv:
            print(f'    R3: {tr[lab]}')


def cmd_fill(path):
    path = os.path.abspath(path)
    text = open(path, encoding='utf-8').read().split('\n')
    unit = None
    units_of_file = [k for k, U in UNITS.items() if os.path.basename(path) in U['files']]
    if len(units_of_file) == 1:
        unit = units_of_file[0]
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
    print(f'{os.path.basename(path)}: {n} transliterations filled')


def cmd_build(proj):
    d = os.path.join(HERE, PROJ_DIRS[proj])
    intro = open(os.path.join(d, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../kol_tools.py build ' + proj +
            ' from translation--intro.rtl.md and the annotated `>` lines (unit and section headings = the annotated `## `\n'
            'lines; footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated file(s) and rebuild.\n-->\n\n')
    out, notes, n = [], [], 0
    for unit in [k for k, U in UNITS.items() if U['proj'] == proj]:
        U = UNITS[unit]
        order, ent = unit_entries(unit)
        if not order:
            continue
        _, _, prov = base_lines(unit)
        out.append(f'\n<!-- unit: {unit} -->\n## {U["title"]}\n')
        # section headings of this unit, in file order
        heads = {}
        seen = set()
        for p in unit_paths(unit):
            if p in seen or not os.path.exists(p):
                continue
            seen.add(p)
            cu = UNITS[unit]['files'] and (unit if len([k for k, X in UNITS.items() if os.path.basename(p) in X['files']]) == 1 else None)
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
        lastp = None
        for k in order:
            e = ent[k]
            if k in heads:
                out.append(f'\n### {heads[k]}\n')
            pv = prov.get(k)
            if pv and pv != lastp:
                out.append(f'\n*{pv}*  ')
                lastp = pv
            ref = ''
            if e['fn']:
                n += 1
                ref = f'[^{n}]'
                notes.append(f'[^{n}]: {e["fn"]}')
            out.append(f'**{k}** {e["heb"][0]}{ref}  ')
    text = head + intro + '\n' + '\n'.join(out) + '\n' + ('\n---\n\n' + '\n\n'.join(notes) + '\n' if notes else '')
    open(os.path.join(d, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
    print(f'{PROJ_DIRS[proj]}/translation.rtl.md written: {sum(1 for x in out if x.startswith("**"))} lines, {n} footnotes')
    return verify_units([k for k, U in UNITS.items() if U['proj'] == proj], quiet=True)


def cmd_grep(scope, pat):
    rx = re.compile(pat)
    files = []
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
    rx = re.compile(pat)
    hits = {}
    for f in glob.glob(os.path.join(ROOT, '*', '**', 'annotated*.rtl.md'), recursive=True):
        tr = None
        for ln in open(f, encoding='utf-8'):
            if ln.startswith('### '):
                tr = None
            elif ln.startswith('`') and tr is None:
                tr = ln.strip()
            elif ln.startswith('> ') and tr and rx.search(tr):
                k = os.path.relpath(f, ROOT).split('/')[0]
                hits.setdefault(k, []).append(ln[2:].strip()[:120] + '  ‹' + tr[:110] + '›')
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
