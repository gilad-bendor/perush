# Shared configuration of the LH project scripts (build_data.py, verify.py, build_translation.py).
# Written 2026-10-17 for חוקים-ובריתות/2-חוקי-חמורבי.
import os, re, json

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(HERE, '../../sources/CDLI/P464358--Laws-of-Hammurabi-composite')
ATF = os.path.join(SRC_DIR, 'P464358.atf')
STELE = os.path.join(SRC_DIR, 'P249253.atf')
SEAL_MD = os.path.join(HERE, '../../sources/SEAL/CH-Prologue-Epilogue--node-7520/node-7520.md')

# Annotated files: (number, slug, first composite line, last composite line, Hebrew title)
FILES = [
    ('01', 'prologue', '1', '303', 'הפרולוג'),
    ('02', 'laws-1-25', '304', '618', 'החוקים §1–§25'),
    ('03', 'laws-26-41', '619', '822', 'החוקים §26–§41'),
    ('04', 'laws-42-65-100', '823', "1129'", 'החוקים §42–§65, הפער, §100'),
    ('05', 'laws-101-126', "1130'", "1450'", 'החוקים §101–§126'),
    ('06', 'laws-127-149', "1451'", "1757'", 'החוקים §127–§149'),
    ('07', 'laws-150-172', "1758'", "2127'", 'החוקים §150–§172'),
    ('08', 'laws-173-194', "2128'", "2502'", 'החוקים §173–§194'),
    ('09', 'laws-195-240', "2503'", "2828'", 'החוקים §195–§240'),
    ('10', 'laws-241-282', "2829'", "3143'", 'החוקים §241–§282'),
    ('11', 'epilogue-1', "3144'", "3343'", 'האפילוג, חלק א'),
    ('12', 'epilogue-2', "3344'", "3641'", 'האפילוג, חלק ב: הברכה והקללות'),
]

# Topic headings of the clean translation (## level), by the first law of the group.
TOPICS = [
    (1, 'דין, עדות וכשפים'),
    (6, 'גניבה, חטיפה, עבדים נמלטים, פריצה, שוד ואש'),
    (26, 'אנשי הצבא ונחלותיהם'),
    (42, 'שדות, השקיה וגנים'),
    (66, 'הפער במצבה'),
    (100, 'התגר והשוליה'),
    (108, 'מוכרת השכר'),
    (112, 'הובלה, חוב, משכון ונצירה'),
    (127, 'נישואים, ניאוף, שבי, גירושים ומחלה'),
    (150, 'רכוש האשה, עריות, מהר ושלוחים'),
    (162, 'ירושה, בני האמה, נשים מוקדשות'),
    (185, 'אימוץ ומינקת'),
    (195, 'חבלות: באב, בעין, בעצם, בשן, בלחי; מריבה; האשה ההרה'),
    (215, 'רופאים, גלב, בנאי וספן'),
    (241, 'שוורים: משכון, שכירות, נזקים והשור הנגף'),
    (253, 'אריס, אכר ורועה'),
    (268, 'דמי שכירות: בהמות, פועלים, בעלי מלאכה, ספינות'),
    (278, 'קניית עבדים'),
]


def lineno_key(n):
    """sortable key of a composite line label ('304', "1130'")"""
    return int(n.rstrip("'"))


def parse_composite():
    """list of dicts: n, section ('prologue'/'epilogue'/'law N'), law (int or None), atf, ts, en, notes"""
    out = []; section = None; cur = None; pend = []
    for raw in open(ATF, encoding='utf-8'):
        l = raw.rstrip('\r\n')
        if l.startswith('@prologue') or l.startswith('@epilogue') or l.startswith('@law'):
            section = l[1:].strip(); continue
        m = re.match(r"^(\d+'?)\.\s*(.*)$", l)
        if m:
            cur = {'n': m.group(1), 'section': section, 'atf': m.group(2).strip(), 'ts': '', 'en': '', 'notes': pend}
            pend = []; out.append(cur); continue
        if l.startswith('#tr.ts:') and cur:
            cur['ts'] = l[7:].strip(); continue
        if l.startswith('#tr.en:') and cur:
            cur['en'] = l[7:].strip(); continue
        if l.startswith('$'):
            pend.append(l)
        elif l.startswith('#') and not l.startswith('#atf') and cur:
            cur['notes'].append(l)
    for x in out:
        s = x['section']
        x['law'] = None
        if s.startswith('law'):
            x['law'] = s.split()[1]
        k = lineno_key(x['n'])
        # the composite labels the lines after the gap 'law 65': 1121' ends §65 (restored), 1122' is broken, 1123'-1129' end §100
        if x['n'] == "1122'":
            x['law'] = 'gap'
        elif 1123 <= k <= 1129:
            x['law'] = '100'
    return out


def parse_stele():
    out = []; surf = 'obv.'; col = None
    for raw in open(STELE, encoding='utf-8'):
        l = raw.rstrip('\r\n')
        if l.startswith('@reverse'):
            surf = 'rev.'; continue
        m = re.match(r'@column (\S+)', l)
        if m:
            col = m.group(1); continue
        m = re.match(r"^(\d+'?)\.\s*(.*)$", l)
        if m:
            out.append({'surf': surf, 'col': col, 'line': m.group(1), 'atf': m.group(2).strip()})
    return out


def align_stele(L):
    import difflib
    W = parse_stele()
    def key(s):
        return re.sub(r'\s+', ' ', re.sub(r'[\[\]#!?<>⸢⸣]', '', s)).strip()
    sm = difflib.SequenceMatcher(None, [key(x['atf']) for x in L], [key(x['atf']) for x in W], autojunk=False)
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag in ('equal', 'replace') and (i2 - i1) == (j2 - j1):
            for k in range(i2 - i1):
                w = W[j1 + k]; x = L[i1 + k]
                x['stele'] = f"{w['surf']} {w['col']}:{w['line']}"
                x['stele_col'] = (w['surf'], int(w['col'])); x['stele_line'] = w['line']
                if w['atf'] != x['atf']:
                    x['stele_atf'] = w['atf']
    return L


ROMAN = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'] + [''] * 40


def to_roman(n):
    vals = [(50, 'l'), (40, 'xl'), (10, 'x'), (9, 'ix'), (5, 'v'), (4, 'iv'), (1, 'i')]
    s = ''
    for v, r in vals:
        while n >= v:
            s += r; n -= v
    return s


def parse_seal():
    """{(roman col, line): {'atf':…, 'lemmas':…}} and the translation paragraph"""
    d = {}; col = None; cur = None; tr = ''
    if not os.path.exists(SEAL_MD):
        return d, tr
    lines = open(SEAL_MD, encoding='utf-8').read().split('\n')
    intr = False
    for l in lines:
        if l.startswith('## Translation'):
            intr = True; continue
        if intr:
            if l.startswith('## '):
                break
            tr += l + '\n'; continue
        m = re.match(r'- col\. ([ivxl]+)\.?\s*$', l)
        if m:
            col = m.group(1); continue
        m = re.match(r'\*\*(\d+)\*\* (.*)$', l)
        if m and col:
            cur = {'atf': m.group(2).strip(), 'lemmas': ''}; d[(col, m.group(1))] = cur; continue
        if cur is not None and l.strip().startswith('lemmas:'):
            cur['lemmas'] = l.strip()[7:].strip()
    return d, tr


def seal_key(x):
    if 'stele_col' not in x:
        return None
    surf, c = x['stele_col']
    n = c if surf == 'obv.' else c + 23
    return (to_roman(n), x['stele_line'])


def file_of(n):
    k = lineno_key(n)
    for f in FILES:
        if lineno_key(f[2]) <= k <= lineno_key(f[3]):
            return f
    return None
