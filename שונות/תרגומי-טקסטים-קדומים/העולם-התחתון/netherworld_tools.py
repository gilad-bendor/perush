"""Verify and build the netherworld corpus (the Descent of Ištar, eBL L/1/8; Inana's Descent, ETCSL 1.4.1;
Nergal and Ereškigal, eBL L/1/6 MB + SB; Bilgameš, Enkidu and the Netherworld, ETCSL 1.8.1.4 + ORACC Q000364).

Written 2026-10-21 (round 2, run 5), adapted from ../קינות-על-ערים/lament_tools.py (Sumerian) and the wisdom corpus's
wisdom_tools.py (Akkadian eBL texts). Add a project as a PROJECTS entry.

Usage (from any directory):
  python3 -I netherworld_tools.py verify KEY [--strict]   KEY = IS | IN | NE | GEN. Checks (exit 1 on an error):
      1. every entry `### <label>` has exactly one `> ` Hebrew line and one backticked source line, which equals the
         base text's line (IS: the eBL normalization, metrical bars ignored; IN: ETCSL's transliteration, notes in
         *…* and variant parentheses ignored); no label is duplicated;
      2. coverage: the labels equal the base text's line list, in order (IS: eBL SB 1–138 then the NA chapter as
         NA1…NA11; IN: ETCSL incl. the pluses). A not-yet-written file is a note (--strict: error);
      3. RESERVED strings (niqqud stripped) in a `>` line only when the source has a licensing word (IS: the eBL
         lemmas + normalization; IN: the transliteration + the ORACC lemmas of the line);
      4. TRAPS: names that read as Hebrew words unvocalized must carry niqqud when the name is in the source;
      5. FORMULAS: the fixed renderings of renderings.md §2–§4 wherever their source occurs;
      6. translation.rtl.md (if present): its numbered lines equal the annotated `>` lines one to one;
      and REPORTS (not an error) identical sources with different Hebrew.
  python3 -I netherworld_tools.py build KEY      translation.rtl.md from translation--intro.rtl.md + the annotated
      files (`## ` headings, `**N** …` lines, `- **הערת שוליים:** …` bullets as footnotes); then verify.
  python3 -I netherworld_tools.py lines KEY FROM TO   the base text's lines with eBL lemmas / ORACC lemma + morph.
  python3 -I netherworld_tools.py xii FROM TO   GEN lines with the Gilgameš XII entries that cite them ("BN N")
      and their Hebrew – the Sumerian takes XII's Hebrew where the Akkadian renders it word for word.
  python3 -I netherworld_tools.py grep all|KEY '<regex>'   `>` lines (niqqud stripped) matching, in this corpus
      (KEY) or in every corpus of the folder (all) – grep before fixing a Hebrew word.
"""
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, 'sources')
PROJECTS = {
    'IS': dict(dir='1-ירידת-אישתר', annotated=['annotated.rtl.md'], kind='ebl',
               ebl=[('', 'eBL/Descent-of-Ishtar-SB/reading-edition.md'),
                    ('NA', 'eBL/Descent-of-Ishtar-NA/reading-edition.md')]),
    'IN': dict(dir='2-ירידת-אינאנה', annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md'], kind='etcsl',
               etcsl='ETCSL/1.4.1--Inanas-Descent/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000343--Inanas-Descent/Q000343--lemmatised-morph.md'),
    # Round 3, run 5 (2026-10-21). NE: the Middle Babylonian (Amarna) chapter first, labelled MB.<eBL label>, then the
    # Standard Babylonian chapter with eBL's labels (a+1 … f+1).
    'NE': dict(dir='3-נרגל-וארשכיגל', annotated=['annotated-MB.rtl.md', 'annotated-SB-1.rtl.md', 'annotated-SB-2.rtl.md'],
               kind='ebl',
               ebl=[('MB.', 'eBL/Nergal-and-Ereshkigal-MB/reading-edition.md'),
                    ('', 'eBL/Nergal-and-Ereshkigal-SB/reading-edition.md')]),
    # GEN: ETCSL 1.8.1.4, five recensions: Version A (plain numbers), then UET 6 58 (U58.n), UET 6 59 (U59.An, U59.Bn),
    # UET 6 60 (U60.n), Me-Turan (MT.An, MT.Bn). ORACC Q000364 is aligned by position.
    'GEN': dict(dir='4-גילגמש-אנקידו-והעולם-התחתון',
                annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md', 'annotated-3.rtl.md', 'annotated-4.rtl.md'],
                kind='etcsl', etcsl='ETCSL/1.8.1.4--Gilgamesh-Enkidu-and-the-Netherworld/transliteration.md',
                oracc='ORACC/epsd2-literary--Q000364--Gilgamesh-Enkidu-and-the-Netherworld/Q000364--lemmatised-morph.md',
                versions=[('Version A', ''), ('UET 6 58', 'U58.'), ('UET 6 59', 'U59.'), ('UET 6 60', 'U60.'),
                          ('Me-Turan', 'MT.')]),
}

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
P = r'ו?[הבלמכש]{0,2}'            # Hebrew prefixes
# reserved Hebrew (regex on the niqqud-stripped line) -> source regexes that license it; [] = never
RESERVED = {
    r'שאול': [],
    r'תמוז': [],
    r'עשתר|עשתור': [],
    B + P + r'רפאים' + E: [],
    r'צלמות': [],
    r'אבדון': [],
    r'תחתית|תחתיות': [],
    B + P + r'בור' + E: [],
    B + P + r'(עירום|עירם|ערום|ערומה|ערומים|ערוה|ערות|ערותה|מערומיה)' + E: [],
    B + P + r'(אוב|אובות)' + E + r'|ידעוני|יידעוני|התגודד|יתגודד|קרחה': [],
    r'קדשה|' + B + P + r'קדש' + E: [],
    r'עולם': [],
    B + r'טרם' + E: [],
    r'אלהים|אלוהים': [],
    r'קינה|קינת|קינות|קונן|מקוננ|מספד': [],
    B + P + r'(כבוד|כבודו|כבודה|כבודם)' + E: [],
    r'שכינה': [],
    B + r'ו?ה?ברא' + E + r'|בראו|בראתי': [],
    B + r'ו?י?יצר' + E: [],
    r'תהום': [],
    # Round 3, run 5 (renderings §11.6)
    B + P + r'(סולם|סלם|סולמות)' + E: [],
    B + P + r'(מלאך|מלאכי|מלאכים|מלאכו|מלאכיו|מלאכה־|מלאכך)' + E: [],
    r'לילית': [],
    B + P + r'(הבדיל|יבדיל|מבדיל|נבדל|נבדלו|הבדילו|הבדל|הבדלה|בדל)' + E: [],
    r'רקיע': [],
    B + P + r'(גלות|גולה|הגלה|הוגלה|הוגלו|הגלו)' + E: [],
    # gated
    r'עפר': [r'\bepr|\beper|saḫar|saḫar|sahar'],
    r'טיט': [r'ṭiṭṭ|ṭīd|(^|\s)im(-|\s|$)'],
    B + P + r'(שוב|שבה|שבים|שבו|ישוב|תשוב|השיב|השיבה|ישיב|משיב|משיבה|משיבים|השבתי|תשיבי|השיבי|השיבו|שיבה)' + E:
        [r'târ|tayyār|târ|tur\b|uttēr|turr|gi₄|\bgur|-gur|terr'],
    r'עזב|עוזב|נעזב': [r'ezēb|īzib|ezib|\bšub|-šub|taka₄|tag₄'],
    B + P + r'(לקח|לקחה|לקחו|קח|קחי|יקח|תיקח|נלקח|ניקח|לקחת)' + E: [r'leq|liq|ilq|(^|\s|-)ti(-|\s|$)|šu\b.*\bti\b|ba-ni-in-ti'],
    B + P + r'(ידע|ידעה|ידעו|יודע|יודעת|יודעים|יודעות|ידעתי|תדע|נודע)' + E: [r'\bed[êûeiī]|īd[êûeiīu]|ūd|uʾadd|\b[lu]?udd[iīa]|wadû|\bzu\b|-zu-|mu-un-zu|nu-zu'],
    B + P + r'(נחש|נחשים|נחשי)' + E: [r'muš(?![₂₃])'],
    B + P + r'(שד|שדי|שדים)' + E + r'|' + B + P + r'שדי־|' + B + P + r'שד־': [r'gal₅-la₂|gal5-la2|gala\[|galla'],
    r'שרט|שורט': [r'ḫur|hur\['],
    r'עוון|עוונ': [r'nam-tag'],
    r'פדיון|פדה|פדיונ': [r'napṭir|ipṭir'],
    B + P + r'(טוב|טובה|טובים|טובות)' + E: [r'ṭāb|ṭiāb|ṭūb|dug₃|du₁₀|dug\['],
    r'כופר|' + B + P + r'כפר' + E: [r'kupr'],
    r'קטרת|קטורת': [r'qutr'],
    r'(^|[\s"\'(\[–—])ו?[הבלמכ]{0,2}(גן|גנה|גנו|גני|גנים|גנך)' + E: [r'kiri₆|kiri6|kirû|kir[iî]'],
    r'פוכו': [r'ellag|pukk'],
    B + P + r'(היכל|היכלו|היכלה|ההיכל|היכלות)' + E: [r'e₂-gal|ēkall|ekall'],
    B + P + r'(חתן|חתני|חתנה|חתניהן|חתנך)' + E: [r'ḫāwir|ḫāʾir|ḫāmir|hāwiru'],
    B + P + r'(בוכה|בוכים|בוכות|בכה|בכו|בכתה|אבכה|תבכה|יבכה|בכי|בוכי)' + E: [r'bak[kûiī]|ibak|lubk|er₂|er2|šeš₂|še₈'],
}
TRAPS = {  # stripped token (prefixes allowed) -> (name, source regex)
    'איננה': ('Inana (אִינַנָּה)', r'inana|inanna|ga-ša-an-na|Inanak'),
    'אותו': ('Utu (אוּתוּ)', r'\{d\}utu\b|Utu\['),
    'אור': ('Urim (אוּר)', r'urim'),
    'אומה': ('Umma (אוּמָּה)', r'umma\{ki\}'),
    'שרא': ('Šara (שַׁרָא)', r'šara\b'),
    'אן': ('An (אַן)', r'\{d\}an\b|(^|\s)an-(ne₂|ra|na)\b'),
    'סין': ('Sîn (סִין)', r'sîn|sin\b'),
    'בלילי': ('Belili (בֵּלִילִי)', r'belili|bēlili'),
    'כות': ('Kutha (כּוּת)', r'kutû|kute'),
    'נטי': ('Neti (נֵטִי)', r'ne-ti|bi₂-ti'),
    'ארשכיגל': ('Ereškigal (אֶרֶשְׁכִּיגַל)', r'ereš|aš-\(š\)rigingal'),
    'נמתר': ('Namtar (נַמְתָּר)', r'namtar'),
    'דומוזי': ('Dumuzi (דּוּמוּזִי)', r'dum[uū]zi|dumu-zid'),
    # 2026-10-21 harmonization: words that read as other words unvocalized
    'ציר': ('*ra-gaba* (צִיר; unvocalized also "hinge", "pang")', r'ra-gaba'),
    'צירי': ('*ra-gaba* (צִירִי; unvocalized "my birth pangs")', r'ra-gaba'),
    'צירה': ('*ra-gaba* (צִירָהּ)', r'ra-gaba'),
    'פוך': ('*šembizid* (הַפּוּךְ; unvocalized `הפוך` "reversed")', r'šembizid'),
    # Round 3, run 5 (renderings §11.2)
    'אנו': ('Anu (אָנוּ; unvocalized "we")', r'(^|[\s\[])ān[uiu]|\banu\b'),
    'ככה': ('Kakka (כַּכָּה; unvocalized "thus")', r'\bkak+a\b'),
    'ארה': ('Erra (אֶרָּה)', r'\berra\b'),
    'פוכו': ('*ellag* (הַפּוּכּוּ; unvocalized "his opposite")', r'ellag|pukk'),
    'מכו': ('*e-ke₄-ma* (הַמֵּכּוּ)', r'e-ke₄-ma|e-AG|mekk|mikk'),
    'אט': ('*gidim* / *eṭemmu* (אִט; unvocalized "slowly")', r'gidim|eṭemm'),
    'אטים': ('*gidim* (אִטִּים)', r'gidim|eṭemm'),
    'אטו': ('*gidim* (אִטּוֹ)', r'gidim|eṭemm'),
    'שומר': ('Sumer (שׁוּמֶר; unvocalized "guard")', r'ki-en-gi'),
    'עלמת': ('*ki-sikil-lil₂-la₂* (עַלְמַת־הַמַּשַּׁב)', r'lil₂-la₂'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
# fixed formulas: (KEY or '*', source regex, required Hebrew regex on the stripped `>` line, description)
FORMULAS = [
    ('IN', r'kur-r?a ba-(e-a-)?ed₃$|kur-a ba-e-a-ed₃$', r'אל הארץ ירדה\.?$', 'Sum. *kur-ra ba-e-a-ed₃* = אל הארץ ירדה'),
    ('IS', r'ana erṣeti \|\| urid', r'אל הארץ ירדה', 'Akk. *ana erṣeti urid* = אל הארץ ירדה'),
    ('IN', r'^ta-am₃ ne-e$', r'^"מה זה\?"$', 'the gate question'),
    ('IN', r'^si-a \{d\}inana me kur-ra-ke₄ šu al-du₇-du₇$', r'^"בדממה, איננה! ה־מה של הארץ – ביד מושלמים\.$', 'the gate answer 1'),
    ('IN', r'^\{d\}inana ĝarza kur-ra-ke₄ ka-zu na-an-ba-e$', r'^איננה, לפולחן הארץ – אל תפתחי פיך!"$', 'the gate answer 2'),
    ('IN', r'abula \d-kam-ma ku₄-ku₄-da-ni-ta', r'^כשבאה אל השער ה(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי),$', 'the gate entry'),
    ('IN', r'lu₂ ba-da-an-ze₂-er$', r' – הסירו מעליה\.$', 'the stripping'),
    ('IS', r'ušēribšī-ma \| umtaṣṣi \| ittabal', r'^בשער ה(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי) הביאה – הסיר, נטל את ', 'the gate formula'),
    ('IS', r'^ammīni \| atû \| tatbal', r'^"למה, שוער, נטלת את ', 'the question'),
    ('IS', r'^erbī \| bēltī \| ša bēlet', r'^"בואי, גבירתי; של גבירת הארץ – כך פולחניה\."$', 'the answer'),
    ('IS', r'ušēṣīšī-ma \| uttērši', r'^בשער ה(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי) הוציאה – השיב לה את ', 'the exit formula'),
    ('IS', r'annīta \|\| ina šemê', r'^ארשכיגל – כשמעה את זאת,$', 'Ereškigal hearing this'),
    ('IN', r'nam-ba-da-an-gam-e$|nam-ba-da-\[an\]-gam-e$', r'אל יכריע', '*gam* = הכריע'),
    ('IN', r'u₂ nam-til₃', r'עשב החיים', '*u₂ nam-til₃* = עשב החיים'),
    ('IN', r'a nam-til₃', r'מי החיים', '*a nam-til₃* = מי החיים'),
    ('IS', r'mê \(\|\) balāṭi', r'מי החיים', '*mê balāṭi* = מי החיים'),
    ('IN', r'nam-tag', r'עוון', '*nam-tag* = עוון'),
    ('IN', r'tug₂-mu-dur₇-ra', r'בגד־אבל', '*tug₂-mu-dur₇-ra* = בגד־אבל'),
    ('IS', r'\[?k\]?arra \| labiš', r'מעטה אבל', '*karru* = מעטה אבל (Adapa)'),
    # 2026-10-21 cross-corpus harmonization (renderings §10)
    ('IN', r'za-gin₃', r'ספיר', '*za-gin₃* = ספיר'),
    ('IS', r'uqn[iîû]', r'ספיר', '*uqnû* = ספיר'),
    ('IN', r'šembizid', r'(^|\s)ה?פוך(\s|$)', '*šembizid* = פוך'),
    ('IN', r'ra-gaba', r'(^|\s)ציר(י|ה)?(\s|$)', '*ra-gaba* = ציר'),
    ('IN', r'^me mu-\[?un-ur₄', r'^את ה־מה אספה, אל ידה תלתה;$', '*me mu-un-ur₄-ur₄* = את הַ־מֶה אספה (EWO 65)'),
    ('IN', r'^\[?siki\]?-ni ga-raš', r'היא קוטפת\.?$', '*ur₄* of hair = קוטפת'),
    # Round 3, run 5: Nergal and Ereškigal (renderings §11.5)
    ('NE', r'pâš[ua]!? ī?puš-ma!? iqabbi ana .* amāta izakkar$', r'פתח(ה)? את פי(ו|ה) ואמר(ה)?, אל .+ דבר דיבר(ה)?:$', 'the speech formula'),
    ('NE', r'annīta ina šem[îê]š[ua]', r'כשמע(ו|ה) את זאת', '*annīta ina šemîšu* = כשמעו את זאת'),
    ('NE', r'arkāt simmilat šamāmī', r'במדרגות השמים הארוכות', '*arkāt simmilat šamāmī* = במדרגות השמים הארוכות'),
    ('NE', r'simmil', r'מדרגות', '*simmiltu* = מדרגות'),
    ('NE', r'mār šipr', r'שליח', '*mār šipri* = שליח'),
    ('NE', r'ana bāb āni ellil u ea', r'אל שער אנו, אנליל ואאה', 'the gate of Anu, Enlil and Ea'),
    ('NE', r'ānu ellil u ea īmurūšū', r'^אנו, אנליל ואאה ראוהו', 'Anu, Enlil and Ea saw him'),
    ('NE', r'bāba ušēriba ila kaka', r'^בשער ה(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי) הביאו את האל ככה', 'Kakka through the gates'),
    ('NE', r'ūma ṣallū(-ma)? šarratu ereškigal u erra', r'ישנו המלכה ארשכיגל וארה', 'the 7-day refrain'),
    ('NE', r'ušellī-ma!? mītūti ikkalū balṭūti', r'^אעלה את המתים, ויאכלו את החיים,$', 'raise the dead (Ištar 19)'),
    ('NE', r'el balṭūti ušamʾad mītūti', r'^על החיים ארבה את המתים', 'the dead outnumber (Gilg. VI 100)'),
    ('NE', r'zikar u sinniš', r'זכר ונקבה', '*zikar u sinniš* = זכר ונקבה'),
    # Bilgameš, Enkidu and the Netherworld
    ('GEN', r'kur-r[ae] im-ma-an-dab₅|kur-ra im-ma-an-dab', r'הארץ אחזתהו', 'the refrain (XII)'),
    ('GEN', r'nam-tar nu-(un-)?dab', r'נמתר לא אחזו', 'Namtar did not seize him (XII)'),
    ('GEN', r'igi (bi₂|i-ni)-(in-)?du₈-am₃ a-na-gin₇ an-ak$', r'ראית\?" "ראיתי\." "איך נעשה ל(ו|ה|הם)\?"$', 'the interrogation formula'),
    ('GEN', r'^a-na-gin₇ i₃-ĝal₂$', r'איך (הוא|היא|הם)\?"$', 'the Me-Turan / U59 question'),
    ('GEN', r'\{ĝiš\}ellag', r'פוכו', '*ellag* = פוכו (XII)'),
    ('GEN', r'\{ĝiš\}e-ke₄-ma', r'מכו', '*e-ke₄-ma* = מכו (XII)'),
    ('GEN', r'(^|\s)gidim', r'(^|\s|־|")(ה|ו|ב|ל|מ|וה|של)?(אט|אטו|אטים|אטה|אטם)(\s|$|[,.;:!?"־])', '*gidim* = אט (XII)'),
    ('GEN', r'ki-sikil lil₂-la₂', r'עלמת־המשב', '*ki-sikil-lil₂-la₂* = עלמת־המשב'),
    ('GEN', r'gu₃ mu-(un-)?na-de₂-e', r'(פונה|פנתה|פנה) אל', '*gu₃ de₂* = פנה אל'),
    ('GEN', r'muš tu₆ nu-zu', r'נחש אשר קסם אינו יודע', 'the snake immune to spells'),
]


def strip(s):
    return NIQQUD.sub('', s)


def parse_annotated(paths, problems):
    order, ent = [], {}
    cur = None
    for p in paths:
        if not os.path.exists(p):
            problems.append(f'missing file {os.path.basename(p)}')
            continue
        for ln in open(p, encoding='utf-8'):
            ln = ln.rstrip('\n')
            m = re.match(r'^### (\S+)\s*$', ln)
            if m:
                cur = m.group(1)
                if cur in ent:
                    problems.append(f'duplicate entry {cur}')
                ent[cur] = dict(heb=[], tr=[], fn=None, file=os.path.basename(p))
                order.append(cur)
                continue
            if ln.startswith('## ') or ln.startswith('# '):
                cur = None
                continue
            if cur is None:
                continue
            e = ent[cur]
            if ln.startswith('> '):
                e['heb'].append(ln[2:].rstrip())
            elif ln.startswith('`') and not e['tr'] and not e['heb']:
                e['tr'].append(ln.strip().strip('`').strip())
            elif ln.startswith('- **הערת שוליים:**'):
                e['fn'] = ln[len('- **הערת שוליים:**'):].strip()
    return order, ent


def sections(paths):
    for p in paths:
        if not os.path.exists(p):
            continue
        for ln in open(p, encoding='utf-8'):
            ln = ln.rstrip('\n')
            if ln.startswith('## '):
                yield 'h', ln[3:].strip()
            m = re.match(r'^### (\S+)\s*$', ln)
            if m:
                yield 'l', m.group(1)


def ebl_lines(P):
    """[(label, normalization, lemma-string)] from ebl_fetch reading-edition.md files (prefix + eBL label)."""
    out = []
    for prefix, rel in P['ebl']:
        lab = None
        for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
            ln = ln.rstrip('\n')
            m = re.match(r'^### (\S+)\s*$', ln)
            if m:
                lab = prefix + m.group(1)
                out.append([lab, '', ''])
                continue
            if lab is None:
                continue
            if ln.startswith('- **N:**') and not out[-1][1]:
                out[-1][1] = ln[len('- **N:**'):].strip()
            elif ln.startswith('- **N (variant'):
                out[-1][2] += ' ' + ln.split(':**', 1)[1]
            elif ln.startswith('- **L:**'):
                out[-1][2] += ' ' + ' '.join(re.findall(r'← (\S+(?: [IVX]+)?)', ln))
    return [tuple(x) for x in out]


def etcsl_lines(rel, versions=None):
    """[(label, transliteration)]; with `versions` [(heading substring, label prefix)], a bold version heading
    (`**A version from Urim (UET 6 58)**`) sets the prefix and resets the segment letter."""
    out, seg, pre = [], '', ''
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        ln = ln.rstrip('\n')
        if versions and re.match(r'^\*\*[^*]+\*\*\s*$', ln):
            for sub, p in versions:
                if sub in ln:
                    pre, seg = p, ''
            continue
        m = re.match(r'^## Segment (\w+)', ln)
        if m:
            seg = m.group(1)
            continue
        m = re.match(r'^(\d+[A-Za-z]*)\. (.*?)\s*$', ln)
        if m:
            out.append((pre + seg + m.group(1), m.group(2)))
    return out


def oracc_lem(rel):
    """[lemma line] in ORACC order (aligned with ETCSL by position)."""
    out, cur = [], None
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        ln = ln.rstrip('\n')
        if re.match(r'^\*\*[^*]+\*\* ', ln):
            out.append([ln, ''])
        elif ln.strip().startswith('<sub>lem:') and out:
            out[-1][1] = re.sub(r'</?sub>', '', ln.strip())
    return out


def source(key):
    """[(label, source line for the annotated backticks, licence string)]"""
    P = PROJECTS[key]
    if P['kind'] == 'ebl':
        return [(lab, n, n + ' ' + lem) for lab, n, lem in ebl_lines(P)]
    src = etcsl_lines(P['etcsl'], P.get('versions'))
    lem = oracc_lem(P['oracc'])
    out = []
    for i, (lab, t) in enumerate(src):
        extra = lem[i][1] if i < len(lem) else ''
        out.append((lab, t, t + ' ' + extra))
    return out


def clean_tr(s):
    s = re.sub(r'\s*\(\*[^)]*\)', '', s)   # variant parentheses first (2026-10-22: else their words leaked)
    s = re.sub(r'\s*\*[^*]*\*', '', s)
    return re.sub(r'\s+', ' ', s).strip()


def clean_norm(s):
    return re.sub(r'\s+', ' ', re.sub(r'\(\|\)|\|\||\|', ' ', s)).strip()


def norm_tr(s):
    s = clean_tr(clean_norm(s))
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩()<>-]', '', s).strip()


def check_reserved(label, heb, lic, problems):
    lic = lic + ' ' + lic.replace('h', 'ḫ').replace('H', 'Ḫ')   # eBL writes ḫ as h (2026-10-22)
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED.items():
        if re.search(pat, h):
            if allow and any(re.search(a, lic, re.I) for a in allow):
                continue
            problems.append(f'{label}: reserved string /{pat[:40]}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ''))


def check_traps(label, heb, lic, problems):
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—]+', FN.sub('', heb)):
        if not tok:
            continue
        st = strip(tok)
        for part, raw in zip(st.split('־'), tok.split('־')):
            base = PREFIX.sub('', part, count=1)
            for trap, (what, rx) in TRAPS.items():
                if (part == trap or base == trap) and re.search(rx, lic, re.I) and not NIQQUD.search(raw):
                    problems.append(f'{label}: unvocalized "{tok}" – write {what}')
        if re.search(r'־מה$', st) and re.search(r'(^|\s)me(-|\s|$)|me\[', lic) and not NIQQUD.search(tok.split('־')[-1]):
            problems.append(f'{label}: *me* must be vocalized (`הַ־מֶה`), got "{tok}"')


def check_formulas(key, label, heb, tr, problems):
    h = re.sub(r'[\[\]⟨⟩]', '', strip(FN.sub('', heb))).strip()
    t = re.sub(r'[⸢⸣]', '', clean_tr(tr))   # half-brackets hid formulas (2026-10-22, GEN MT.B68)
    for k, trx, hrx, what in FORMULAS:
        if k not in (key, '*'):
            continue
        if re.search(trx, t) and not re.search(hrx, h):
            problems.append(f'{label}: formula {what}: expected /{hrx}/ in "{heb}"')


def translation_lines(path):
    out = []
    for ln in open(path, encoding='utf-8'):
        m = re.match(r'^\*\*([^*]+)\*\* (.*)$', ln.rstrip('\n'))
        if m:
            out.append((m.group(1), FN.sub('', m.group(2)).rstrip()))
    return out


def verify(key, strict=False):
    P = PROJECTS[key]
    d = os.path.join(HERE, P['dir'])
    paths = [os.path.join(d, a) for a in P['annotated']]
    problems, notes = [], []
    order, ent = parse_annotated(paths, problems)
    if not strict:
        for m in [x for x in problems if x.startswith('missing file')]:
            problems.remove(m)
            notes.append(m + ' (not yet drafted)')
    src = source(key)
    srcd = {lab: (t, lic) for lab, t, lic in src}
    labels = [lab for lab, _, _ in src]
    if order != labels:
        missing = [x for x in labels if x not in ent]
        extra = [x for x in order if x not in srcd]
        present = [x for x in labels if x in ent]
        msg = f'coverage: {len(order)} entries vs {len(labels)} source lines; missing {len(missing)} {missing[:12]}; extra {extra[:12]}'
        if extra or present != order:
            problems.append(msg + ('' if present == order else '; order differs from the source'))
        else:
            (problems if strict else notes).append(msg)
    cmp = clean_norm if P['kind'] == 'ebl' else clean_tr
    pending = 0
    for k in order:
        e = ent[k]
        if len(e['heb']) != 1:
            problems.append(f'entry {k}: {len(e["heb"])} ">" lines')
            continue
        tr = e['tr'][0] if e['tr'] else ''
        if not tr:
            problems.append(f'entry {k}: no backticked source line')
        elif k in srcd and srcd[k][0] and cmp(tr) != cmp(srcd[k][0]):
            problems.append(f'entry {k}: source line differs:\n    A: {tr}\n    S: {cmp(srcd[k][0])}')
        heb = e['heb'][0]
        if 'טרם תורגם' in heb:
            pending += 1
            continue
        lic = srcd.get(k, ('', tr))[1]
        check_reserved(k, heb, lic, problems)
        check_traps(k, heb, lic, problems)
        check_formulas(key, k, heb, tr, problems)
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb']:
            by.setdefault(norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        hs = {re.sub(r'[\[\]"“”⟨⟩?*.,;:!\'–]', '', strip(ent[k]['heb'][0])).replace('  ', ' ').strip() for k in ks}
        if len(ks) > 1 and len(hs) > 1 and len(t.split()) > 2:
            notes.append(f'same source, different Hebrew: {ks}: {t}')
    tp = os.path.join(d, 'translation.rtl.md')
    if os.path.exists(tp):
        tl = translation_lines(tp)
        al = [(k, FN.sub('', ent[k]['heb'][0]).rstrip()) for k in order if ent[k]['heb']]
        if len(tl) != len(al):
            problems.append(f'translation.rtl.md has {len(tl)} numbered lines, annotated {len(al)}')
        for (k1, h1), (k2, h2) in zip(al, tl):
            if k1 != k2 or h1 != h2:
                problems.append(f'translation mismatch at {k1}/{k2}:\n    A: {h1}\n    T: {h2}')
                break
    print(f'project {key} ({P["dir"]}): {len(order)} entries; ' + ('OK' if not problems else f'{len(problems)} problem(s)'))
    for p in problems:
        print('  - ' + p)
    for n in notes:
        print('  · ' + n)
    return not problems


def build(key):
    P = PROJECTS[key]
    d = os.path.join(HERE, P['dir'])
    paths = [os.path.join(d, a) for a in P['annotated']]
    order, ent = parse_annotated(paths, [])
    intro = open(os.path.join(d, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../netherworld_tools.py build ' + key +
            ' from translation--intro.rtl.md and the annotated `>` lines (section headings = the annotated `## ` lines;\n'
            'footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated file(s) and rebuild.\n-->\n\n')
    out, notes, n = [], [], 0
    for kind, v in sections(paths):
        if kind == 'h':
            out.append(f'\n## {re.sub(r"^[0-9A-Za-z.+]+(?:[–-][0-9A-Za-z.+]+)?: ", "", v)}\n')
        else:
            e = ent[v]
            ref = ''
            if e['fn']:
                n += 1
                ref = f'[^{n}]'
                notes.append(f'[^{n}]: {e["fn"]}')
            out.append(f'**{v}** {e["heb"][0]}{ref}  ')
    text = head + intro + '\n' + '\n'.join(out) + '\n' + ('\n---\n\n' + '\n\n'.join(notes) + '\n' if notes else '')
    open(os.path.join(d, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
    print(f'translation.rtl.md written: {sum(1 for k, _ in sections(paths) if k == "l")} lines, {n} footnotes')
    return verify(key)


def all_annotated():
    for f in sorted(glob.glob(os.path.join(ROOT, '**', 'annotated*.rtl.md'), recursive=True)):
        if '/sources/' in f:
            continue
        yield f


def grep(key, pat):
    if key == 'all':
        files = list(all_annotated())
    else:
        P = PROJECTS[key]
        files = [os.path.join(HERE, P['dir'], a) for a in P['annotated']]
    rx = re.compile(pat)
    for f in files:
        if not os.path.exists(f):
            continue
        order, ent = parse_annotated([f], [])
        for k in order:
            for h in ent[k]['heb']:
                if rx.search(strip(h)):
                    print(f'{os.path.relpath(f, ROOT)} {k}: {h}   ‹{ent[k]["tr"][0] if ent[k]["tr"] else ""}›')


def lines(key, a, b):
    src = source(key)
    labels = [x[0] for x in src]
    i, j = labels.index(a), labels.index(b)
    for lab, t, lic in src[i:j + 1]:
        print(f'### {lab}\n`{t}`\n    {lic[len(t):].strip()}')


XII = os.path.join(ROOT, 'אפוס-גילגמש', '1-הנוסח-הבבלי-התקני', 'annotated-XII.rtl.md')


# Gilgameš XII (the Akkadian translation of GEN 171–303) aligned with ETCSL by content (the coordinator, 2026-10-21;
# the "BN N" references in annotated-XII follow George 2003's numbering, which runs ~1 ahead of ETCSL there).
# ETCSL line -> XII labels. Lines without a key have no Akkadian counterpart (183, 203–204, 231, 270–303 except below);
# XII 31, 37a, 51–54, 64–71, 84–85 have no Version A counterpart (corrected by the translator of 136–253, 2026-10-22).
XII_CONC = {
    '171': '1', '172': '2', '173': '3', '174': '4', '175': '5', '176': '6', '177': '7', '178': '8', '179': '9',
    '180': '10', '181': '11', '182': '12', '184': '13', '185': '14', '186': '15', '187': '16',
    '188': '17', '189': '18', '190': '19', '191': '20', '192': '21', '193': '22', '194': '23', '195': '24',
    '196': '25', '197': '26', '198': '27', '199': '28', '200': '28', '201': '29', '202': '30',
    '205': '32', '206': '33', '207': '34', '208': '35', '209': '36', '210': '37', '211': '38', '212': '39',
    '213': '40', '214': '41', '215': '42', '216': '43', '217': '44', '218': '45', '219': '46', '220': '47',
    '221': '55', '222': '56', '223': '55', '224': '57 58', '225': '59', '226': '60', '227': '61',     '228': '62', '229': '63 72', '230': '72', '232': '73 74', '233': '75', '234': '76', '235': '77', '236': '78',
    '237': '79', '238': '80 81', '239': '82', '240': '83', '241': '86', '242': '87', '243': '88', '244': '89',
    '245': '91', '246': '90 92', '247': '93', '248': '94 95', '249': '96', '250': '98', '251': '97', '252': '99',     '253': '100 101', '254': '102', '255': '103', '256': '104', '257': '105', '258': '106', '259': '107',
    '260': '108', '261': '109', '262': '110', '263': '111 112', '264': '113', '265': '114', '266': '115',
    '267': '116', '268': '117', '269': '118', '290': '148', '291': '149', '292': '152', '293': '153',
    '294': '144', '295': '145', '296': '145', '300': '146', '301': '147',
    # Me-Turan (the translator of part 4, 2026-10-22)
    'MT.A1': '38',
    'MT.A2': '39 40',
    'MT.A3': '42',
    'MT.A5': '43',
    'MT.A6': '44',
    'MT.A7': '45',
    'MT.A8': '46',
    'MT.A9': '47',
    'MT.A10': '51',
    'MT.A11': '51 55',
    'MT.A12': '55',
    'MT.A14': '52',
    'MT.A15': '53',
    'MT.A16': '54',
    'MT.A17': '56',
    'MT.A19': '57',
    'MT.A20': '58',
    'MT.A21': '59',
    'MT.A23': '60',
    'MT.A24': '61',
    'MT.B1': '102',
    'MT.B3': '103',
    'MT.B4': '104',
    'MT.B6': '105',
    'MT.B7': '106',
    'MT.B9': '107',
    'MT.B10': '108',
    'MT.B11A': '109',
    'MT.B12': '109',
    'MT.B13': '110',
    'MT.B15': '111',
    'MT.B16': '112',
    'MT.B17': '113',
    'MT.B19': '114',
    'MT.B20': '115',
    'MT.B22': '116',
    'MT.B38': '',
    'MT.B40': '',
    'MT.B41': '',
}


def xii(a, b):
    """GEN lines FROM–TO with their Gilgameš XII counterparts (XII_CONC) and XII's Hebrew: the Sumerian takes XII's
    Hebrew where the Akkadian renders it word for word (guidelines §5.2, "a formula takes the same Hebrew across
    languages"); where they differ, the difference is a finding for the apparatus."""
    order, ent = parse_annotated([XII], [])
    src = source('GEN')
    labels = [x[0] for x in src]
    for lab, t, _ in src[labels.index(a):labels.index(b) + 1]:
        print(f'### {lab}  `{t}`')
        for xl in XII_CONC.get(lab, '').split():
            e = ent.get(xl)
            if e:
                print(f'    XII {xl}: `{e["tr"][0] if e["tr"] else ""}`\n        > {e["heb"][0] if e["heb"] else ""}')


def main():
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    if a[0] == 'verify':
        sys.exit(0 if verify(a[1], '--strict' in a) else 1)
    if a[0] == 'build':
        sys.exit(0 if build(a[1]) else 1)
    if a[0] == 'grep' and len(a) > 2:
        grep(a[1], a[2])
        return
    if a[0] == 'xii' and len(a) > 2:
        xii(a[1], a[2])
        return
    if a[0] == 'lines' and len(a) > 3:
        lines(a[1], a[2], a[3])
        return
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
