# Shared configuration of the scripts for projects 3-6 of the law and treaty corpus (חוקים-ובריתות/):
#   LE  = 3-חוקי-אשנונה                      (CDLI P480696 composite + exemplars A, B, C)
#   MAL = 4-החוקים-האשוריים-התיכונים-A        (ORACC tcma/laws P281779, MAL A = KAV 1)
#   LI  = 5-חוקי-ליפית-אישתר                  (CDLI P464355 composite + 13 exemplars)
#   UN  = 6-חוקי-אור-נמה                      (CDLI P432130 composite + 9 exemplars)
# Used by laws_build_data.py, laws_verify.py, laws_build_translation.py, laws_lookup.py (this folder).
# The Laws of Hammurabi (project 2) keep their own scripts (2-חוקי-חמורבי/lh_config.py); laws_lookup.py and
# laws_verify.py read LH's annotated files read-only for the cross-collection checks.
# Written 2026-10-18.
import os, re, json, glob, collections

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, '..', 'sources'))

# Annotated files per project: (number, slug, first label, last label, Hebrew title)
PROJECTS = {
    'LE': {
        'folder': '3-חוקי-אשנונה',
        'kind': 'cdli',
        'composite': os.path.join(SRC, 'CDLI/P480696--Laws-of-Eshnunna-composite/P480696.atf'),
        'witnesses': [('A', 'IM 51059', 'P480693'), ('B', 'IM 52614', 'P480694'), ('C', 'IM —, ex. 03', 'P480695')],
        'files': [('1', 'prologue-laws-1-60', '1', '195', 'הפתיחה והחוקים §1–§60')],
        'title': 'חוקי אשנונה',
    },
    'MAL': {
        'folder': '4-החוקים-האשוריים-התיכונים-A',
        'kind': 'oracc',
        'lemmatised': os.path.join(SRC, 'ORACC/tcma-laws--P281779--Middle-Assyrian-Laws-A/P281779--lemmatised.md'),
        'translation': os.path.join(SRC, 'ORACC/tcma-laws--P281779--Middle-Assyrian-Laws-A/P281779--translation-de-Ridder.md'),
        'files': [('1', 'laws-1-24', 'o i 1', 'o iii 81', 'החוקים §1–§24'),
                  ('2', 'laws-25-40', 'o iii 82', 'r v 106', 'החוקים §25–§40'),
                  ('3', 'laws-41-59', 'r vi 1', 'r viii 65', 'החוקים §41–§59 והקולופון')],
        'title': 'החוקים האשוריים התיכונים, לוח A',
    },
    'LI': {
        'folder': '5-חוקי-ליפית-אישתר',
        'kind': 'cdli',
        'composite': os.path.join(SRC, 'CDLI/P464355--Laws-of-Lipit-Ishtar-composite/P464355.atf'),
        'witnesses': 'auto',
        'files': [('1', 'prologue', '1', "107'", 'הפרולוג'), ('2', 'laws', "108'", "429'", 'החוקים'),
                  ('3', 'epilogue', "430'", "503'", 'האפילוג והקולופון')],
        'title': 'חוקי ליפית־אישתר',
    },
    'UN': {
        'folder': '6-חוקי-אור-נמה',
        'kind': 'cdli',
        'composite': os.path.join(SRC, 'CDLI/P432130--Laws-of-Ur-Namma-composite/P432130.atf'),
        'witnesses': 'auto',
        'files': [('1', 'prologue', '1', '181', 'הפרולוג'), ('2', 'laws', '181.a', 'f008', 'החוקים'),
                  ('3', 'epilogue', 'g009', "g028'", 'האפילוג')],
        'title': 'חוקי אור־נמה',
    },
}

LH_DIR = os.path.join(HERE, '2-חוקי-חמורבי')

LABEL_RE = re.compile(r"^([0-9a-z][0-9a-z.'\-]*?)\.\s+(.*)$")


def norm_label(s):
    """'181.a' / '181a' / '008' / "108'" -> a canonical key ('181a', '8', "108'")"""
    s = s.strip().replace('.', '')
    m = re.match(r"^([a-z]?)0*(\d+)(.*)$", s)
    if m:
        return m.group(1) + m.group(2) + m.group(3)
    return s


def parse_cdli(fn):
    """CDLI composite ATF -> list of dicts: n (label), section ('prologue'/'epilogue'/'law N'/'colophon'), law,
    atf, ts (CDLI normalization, Akkadian only), en (CDLI English), notes ($-lines and # comments before/after)."""
    out = []; section = None; cur = None; pend = []
    for raw in open(fn, encoding='utf-8'):
        l = raw.rstrip('\r\n').rstrip()
        if l.startswith('@'):
            w = l[1:].strip()
            if w.split()[0] in ('prologue', 'epilogue', 'law', 'colophon'):
                section = w
            continue
        if l.startswith('>>') or l.startswith('&') or l.startswith('#atf'):
            continue
        m = LABEL_RE.match(l)
        if m and not l.startswith('#') and not l.startswith('$'):
            cur = {'n': m.group(1), 'section': section, 'atf': m.group(2).strip(), 'ts': '', 'en': '', 'notes': pend}
            pend = []; out.append(cur); continue
        if l.startswith('#tr.ts:') and cur:
            cur['ts'] = l[7:].strip(); continue
        if l.startswith('#tr.en:') and cur:
            cur['en'] = l[7:].strip(); continue
        if l.startswith('$'):
            pend.append(l)
        elif l.startswith('#') and cur:
            cur['notes'].append(l)
    for x in out:
        s = x['section'] or ''
        x['law'] = s.split(None, 1)[1].strip() if s.startswith('law') else None
    return out


def parse_witness(fn):
    """witness ATF -> list of (ref, atf, composite-link-key)"""
    out = []; surf = 'obv.'; col = ''; last = None
    for raw in open(fn, encoding='utf-8'):
        l = raw.rstrip('\r\n').rstrip()
        if l.startswith('@obverse'):
            surf = 'obv.'; col = ''; continue
        if l.startswith('@reverse'):
            surf = 'rev.'; col = ''; continue
        if l.startswith('@left') or l.startswith('@edge') or l.startswith('@bottom') or l.startswith('@top'):
            surf = l[1:].split()[0]; col = ''; continue
        m = re.match(r'@column (\S+)', l)
        if m:
            col = m.group(1); continue
        if l.startswith('>>') and last is not None:
            k = l.split()[-1] if len(l.split()) >= 2 else ''
            last[2].append(norm_label(k)); continue
        m = LABEL_RE.match(l)
        if m and not l.startswith(('#', '$', '@', '&')):
            ref = f"{surf}{(' ' + col) if col else ''} {m.group(1)}"
            last = [ref, m.group(2).strip(), []]; out.append(last)
    return out


def cdli_witnesses(P):
    """[(siglum, museum, P-number, path)] for a CDLI project"""
    folder = os.path.dirname(P['composite'])
    if P['witnesses'] == 'auto':
        res = []
        js = os.path.join(folder, os.path.basename(P['composite']).replace('.atf', '.json'))
        d = json.load(open(js, encoding='utf-8'))[0]
        for w in d.get('witnesses') or []:
            W = w['witness']
            pn = 'P%06d' % W['id']
            path = os.path.join(folder, pn + '.atf')
            if os.path.exists(path):
                ex = (W.get('designation') or '').split(',')[-1].strip().replace('ex. ', 'ex')
                res.append((ex, W.get('museum_no') or '', pn, path))
        return res
    return [(s, mus, pn, os.path.join(folder, pn + '.atf')) for s, mus, pn in P['witnesses']]


def attach_witnesses(L, P):
    byk = {norm_label(x['n']): x for x in L}
    for x in L:
        x['wit'] = []
    for sig, mus, pn, path in cdli_witnesses(P):
        for ref, atf, keys in parse_witness(path):
            for k in keys:
                if k in byk:
                    byk[k]['wit'].append((sig, ref, atf))
    return L


def parse_oracc_mal(P):
    """MAL A: lines from the cdl2md extraction (label, transliteration, norm, lem) + § from the de Ridder units."""
    L = []; cur = None
    for l in open(P['lemmatised'], encoding='utf-8'):
        l = l.rstrip('\n')
        m = re.match(r'^\*\*((?:o|r|e|l)\s+[ivx]+\s+\d+\'?)\*\*\s?(.*?)\s*$', l)
        if m:
            cur = {'n': m.group(1), 'atf': m.group(2).strip(), 'ts': '', 'lem': '', 'en': '', 'notes': [], 'wit': []}
            L.append(cur); continue
        if cur is not None and l.strip().startswith('norm:'):
            cur['ts'] = l.strip()[5:].strip(); continue
        m = re.match(r'^\s*<sub>lem:\s*(.*)</sub>\s*$', l)
        if cur is not None and m:
            cur['lem'] = m.group(1).strip(); continue
        m = re.match(r'^\*\((.*)\)\*\s*$', l.strip())
        if m and cur is not None and 'ruling' in m.group(1):
            cur['notes'].append('$ ' + m.group(1))
    # the translation units: unit i (1..59) = §i, unit 60 = the colophon
    units = []
    for l in open(P['translation'], encoding='utf-8'):
        m = re.match(r'^\*\*\[([^\]]+)\]\*\*\s*(.*?)\s*$', l.rstrip('\n'))
        if m:
            units.append((re.sub(r'\s+', ' ', m.group(1)).strip(), re.sub(r'\s+', ' ', m.group(2))))
    starts = {}
    for i, (lab, txt) in enumerate(units, 1):
        starts[lab] = ('colophon' if i == 60 else str(i), txt)
    law = None
    for x in L:
        if x['n'] in starts:
            law, txt = starts[x['n']]
            x['en'] = txt
        x['law'] = law if law != 'colophon' else None
        x['section'] = 'colophon' if law == 'colophon' else f'law {law}'
    return L


def parse(key):
    P = PROJECTS[key]
    if P['kind'] == 'cdli':
        L = attach_witnesses(parse_cdli(P['composite']), P)
    else:
        L = parse_oracc_mal(P)
    return L


def files(key, L=None):
    """the annotated files of a project with their label ranges resolved: [(num, slug, first, last, title)]"""
    return PROJECTS[key]['files']


def rows_of(L, first, last):
    labs = [x['n'] for x in L]
    a, b = labs.index(first), labs.index(last)
    return L[a:b + 1]


def annotated_path(key, f):
    P = PROJECTS[key]
    return os.path.join(HERE, P['folder'], f'annotated-{f[0]}--{f[1]}.rtl.md')


def law_lines(L):
    d = collections.OrderedDict()
    for x in L:
        if x['law']:
            d.setdefault(x['law'], []).append(x['n'])
    return d


# ---- Hebrew helpers (shared with the verify and lookup scripts) ----
import unicodedata


def strip_niqqud(s):
    s = unicodedata.normalize('NFC', s)
    return re.sub('[֑-ֽֿ-ׇ]', '', s)  # keep maqaf U+05BE


def bare(s):
    return re.sub(r'\s+', ' ', re.sub(r'[\[\]⟨⟩{}()?*…]', ' ', strip_niqqud(s))).strip()


def parse_annot(fn):
    """annotated file -> (entries, sections, placeholders); entry: n, heb [..], norm (the `N:` line), sec"""
    ents = []; secs = []; cur = None; ph = []
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip('\n')
        if l.startswith('## '):
            secs.append({'head': l[3:], 'ents': []}); cur = None; continue
        if 'טרם תורגם' in l and l.strip().startswith('<!--'):
            ph.append(l.strip())
        m = re.match(r"### (\S.*?)\s*$", l)
        if m:
            cur = {'n': m.group(1), 'heb': [], 'norm': '', 'sec': secs[-1]['head'] if secs else ''}
            ents.append(cur)
            if secs:
                secs[-1]['ents'].append(m.group(1))
            continue
        if cur is not None and l.startswith('> '):
            cur['heb'].append(l[2:].strip()); continue
        m = re.match(r"^`N: (.*)`\s*$", l.strip())
        if cur is not None and m:
            cur['norm'] = m.group(1)
    return ents, secs, ph


def all_pairs(keys=('LH', 'LE', 'MAL', 'LI', 'UN')):
    """[(project, label, normalization, Hebrew)] from every existing annotated file"""
    res = []
    for k in keys:
        if k == 'LH':
            fns = sorted(glob.glob(os.path.join(LH_DIR, 'annotated-*.rtl.md')))
        else:
            fns = sorted(glob.glob(os.path.join(HERE, PROJECTS[k]['folder'], 'annotated-*.rtl.md')))
        for fn in fns:
            ents, _, _ = parse_annot(fn)
            for e in ents:
                if e['heb']:
                    res.append((k, e['n'], e['norm'], e['heb'][0]))
    return res


# Topic headings of the clean translations (## level), by the first law of each group (laws_build_translation.py).
TOPICS = {
    'LE': [('1', 'מחירים ושכר'), ('12', 'הנתפש בשדה ובבית, ביום ובלילה'), ('14', 'שכר הכובס; אשראי'),
           ('17', 'מֹהַר ונישואים'), ('18a', 'תוספת, הלוואה ומשכון'), ('25', 'מֹהַר, נישואים ושבי'),
           ('31', 'אמה; גידול ילדים'), ('36', 'נצירה'), ('38', 'שותפות, גאולת בית, קנייה ומכירה'),
           ('42', 'חבלות'), ('48', 'דין המלך'), ('49', 'עבדים'), ('53', 'השור הנַּגָּף, הכלב השוטה והקיר הנוטה'),
           ('59', 'גירושים'), ('60', 'הנוצר שהתרשל')],
    'MAL': [('1', 'אשה שגנבה ושדיברה חוצפה'), ('7', 'יד שהובלה: חבלות בין אשה לאיש'), ('10', 'רצח בבית איש'),
            ('12', 'אשת איש ואיש אחר: ברחוב, בפונדק ובבית'), ('17', 'הדיבה; איש שבא על עמיתו'),
            ('21', 'המחץ שהפיל; הדרך, הסרסורית והאשה שמשכה את עצמה'), ('25', 'האלמנה, מתנות הנישואים והירושה'),
            ('36', 'הבעל שהלך, הגירושים והערבון'), ('40', 'הרעלה ברחוב והפילגש'),
            ('42', 'האירוסין, הערבון, השבויה והאלמנה'), ('47', 'הכשפים'), ('48', 'בת החייב; בני הזונה'),
            ('50', 'המפיל את אשר בבטנה'), ('55', 'הבתולה'), ('57', 'עונשי הבעל לאשתו')],
    'LI': [('4', 'ספינות'), ('7', 'גנים ושטחים זנוחים'), ('12', 'עבדים ומקתו'), ('17', 'המאשים שלא כונן'),
           ('18', 'מס הבית'), ('20', 'ילדים מגודלים'), ('21a', 'בנות: מענק, ירושה, נישואין'),
           ('24', 'בני הנשים, האמה והזונה'), ('28', 'האשה החולה'), ('29', 'החתן, הזונה, המענק והשי'),
           ('33', 'הדיבה על הבת'), ('34', 'השור השכור')],
    'UN': [('1', 'הריגה, גזלה ועצירה'), ('4', 'עבדים ונישואיהם'), ('6', 'אשת הבחור והאמה'),
           ('9', 'עזיבת האשה והאלמנה'), ('12?', 'האוגבבתו; ההאשמות ומבחן הנהר'), ('15', 'החתן; העבד הנמלט'),
           ('18', 'חבלות בגוף'), ('23?', 'האלמנה בבית חמיה; האמה וגבירתה; המוחץ בת איש ואמה'),
           ('27', 'עדים'), ('29', 'שדות'), ('@b001', 'החוקים הנוספים (b001–f008): שכירות, ירושה, נצירה, נישואין, בקר')],
}
