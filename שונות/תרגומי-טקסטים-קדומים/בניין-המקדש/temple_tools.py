"""Verify and build the temple-building corpus (the Gudea Cylinders A and B, ETCSL 2.1.7 / ORACC Q000377).

Written 2026-10-20, adapted from ../קינות-על-ערים/lament_tools.py. Add a project as a PROJECTS entry.
Labels are the RIME / Edzard 1997 column-line labels, written `A.i.1` … `B.xxiv.17` (cylinder.column.line);
they equal ETCSL's `*A1.1*` and ORACC's `A i 1` one to one (checked by `conc`). ETCSL's running composite numbers
(1–1363, with gaps for lost lines) are kept in `1-גליליות-גודאה/concordance.md`.

Usage (from any directory):
  python3 -I temple_tools.py verify KEY [--strict]   KEY = GU. Checks (exit 1 on an error):
      1. every entry `### <label>` has exactly one `> ` Hebrew line and one backticked transliteration line equal to
         ETCSL's line (ETCSL's *…* notes and variant parentheses ignored); no label is duplicated;
      2. coverage: the labels equal the ETCSL line list, in order (a not-yet-written file is a note; --strict: error,
         and every `[טרם תורגם]` is an error);
      3. RESERVED strings (niqqud stripped) in a `>` line only when the transliteration has a licensing word;
      4. TRAPS: names that read as Hebrew words unvocalized must carry niqqud when the name is in the transliteration;
      5. FORMULAS: fixed renderings (renderings.md §3) wherever their Sumerian occurs;
      6. translation.rtl.md (if present): its numbered lines equal the annotated `>` lines one to one;
      and REPORTS (not an error) identical transliterations with different Hebrew.
  python3 -I temple_tools.py build KEY      translation.rtl.md from translation--intro.rtl.md + the annotated files
      (`## ` headings, `**label** …` lines, `- **הערת שוליים:** …` bullets as footnotes); then verify.
  python3 -I temple_tools.py grep KEY|all '<regex>'   `>` lines (niqqud stripped) matching; all = this corpus +
      the city-lament corpus + the Sumerian texts of the creation corpus.
  python3 -I temple_tools.py lines KEY FROM TO   ETCSL's transliteration of a label range (A.i.1 A.vii.30).
  python3 -I temple_tools.py data KEY FROM TO <out.md>   translator data: per line ETCSL's transliteration, the
      ORACC lemma + morph line, and the two rank-3 translations (ETCSL paragraphs; ETCSRI units) at their first line.
  python3 -I temple_tools.py conc KEY [<out.md>]   the label concordance (ETCSL composite no. ↔ RIME label ↔ ORACC),
      with a similarity check of ETCSL against ORACC per line.
"""
import difflib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, '..', 'sources'))
LAM = os.path.normpath(os.path.join(HERE, '..', 'קינות-על-ערים'))
CRE = os.path.normpath(os.path.join(HERE, '..', 'סיפורי-הבריאה-המסופוטמיים'))
PROJECTS = {
    'GU': dict(dir='1-גליליות-גודאה',
               annotated=['annotated-A1.rtl.md', 'annotated-A2.rtl.md', 'annotated-A3.rtl.md', 'annotated-A4.rtl.md',
                          'annotated-B1.rtl.md', 'annotated-B2.rtl.md', 'annotated-B3.rtl.md'],
               etcsl='ETCSL/2.1.7--Gudea-Cylinders/transliteration.md',
               etcsl_tr='ETCSL/2.1.7--Gudea-Cylinders/translation.md',
               oracc='ORACC/epsd2-royal--Q000377--Gudea-Cylinders/Q000377--lemmatised-morph.md',
               etcsri='ORACC/etcsri--Q000377--Gudea-Cylinders/Q000377--etcsri-translation.md'),
}
EXTRA_GREP = [os.path.join(LAM, x) for x in (
    '1-הקינה-על-אור/annotated-1.rtl.md', '1-הקינה-על-אור/annotated-2.rtl.md', '1-הקינה-על-אור/annotated-3.rtl.md',
    '2-קללת-אכד/annotated-1.rtl.md', '2-קללת-אכד/annotated-2.rtl.md')] + [os.path.join(CRE, x) for x in (
    '2-טקסטי-בריאה-ועדן/annotated-2-Enki-Ninhursag.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-3-Enki-Ninmah.rtl.md',
    '2-טקסטי-בריאה-ועדן/annotated-4-Hoe.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md',
    '3-הציפור-והדג/annotated.rtl.md', '4-אנקי-וסדר-העולם/annotated-1.rtl.md', '4-אנקי-וסדר-העולם/annotated-2.rtl.md')]

ROMAN = 'i ii iii iv v vi vii viii ix x xi xii xiii xiv xv xvi xvii xviii xix xx xxi xxii xxiii xxiv xxv xxvi xxvii xxviii xxix xxx'.split()
NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
P = r'ו?[לבכמשה]{0,2}'            # Hebrew prefixes
# reserved Hebrew (regex on the niqqud-stripped line) -> transliteration regexes that license it; [] = never
RESERVED = {
    # the Tabernacle and Temple words of the Bible comparison (renderings §5)
    r'משכן|משכנ': [],
    r'אוהל מועד|אהל מועד': [],
    B + P + r'(כבוד|כבודו|כבודה|כבודם)' + E: [],
    r'שכינה': [],
    r'תבנית': [],
    r'מלאכה|מלאכת|מלאכתו': [],
    B + P + r'(נדב|נדבה|נדבת|נדיב|נדיבי|התנדב|מתנדב)': [],
    r'תרומה|תרומת': [],
    r'חכם לב|חכמי לב|חכמת לב': [],
    B + r'ו?[לבכשה]{0,2}(קודש|קדש|קדוש|קדושה|קדשים|קודשים|הקדיש|קידש|מקודש|התקדש)' + E: [],
    B + P + r'(תמים|תמימה|תמימים)' + E: [],
    r'ניחוח|קטורת': [],
    r'כרוב|כרובים': [],
    B + P + r'(ארון)' + E: [],
    B + P + r'(שבת|שבתון|שבתות)' + E: [],
    r'יובל': [],
    r'מזבח': [],
    r'בצלאל|אהליאב': [],
    r'פתר|פותר|פתרון': [],
    # inherited never-words (creation and lament corpora)
    r'עולם': [],
    B + r'טרם' + E: [],
    r'אדמה|אדמת': [],
    B + r'ו?ה?ברא' + E + '|בראו|בראתי': [],
    B + r'ו?י?יצר' + E: [],
    r'תהום': [],
    r'אלהים|אלוהים': [],
    r'רקיע': [],
    B + P + r'עדן' + E: [],
    r'גלות|גולה': [],
    # gated: the Hebrew word of a key comparison only beside its Sumerian counterpart
    B + P + r'(חלום|חלומ|חלמתי|חלם)': [r'ma-mu|mamud|ma-mud'],
    r'חזיון': [r'maš-ĝi₆'],
    B + P + r'(פשו?ר|פושר|יפשו?ר|אפשו?ר|תפשו?ר|פשרו|פשרה|פשורו)' + E: [r'bur₂'],
    B + P + r'(מקדש|מקדשו|מקדשה|מקדשי|מקדשים)' + E: [r'eš₃'],
    r'היכל': [r'e₂-gal'],
    B + P + r'(יסוד|יסודות|יסודו|יסודה|יסודותיו|ייסד|יסד|יסדו)' + E: [r'ki-ĝal₂|\buš\b|-uš\b|uš-|ki-ur₃'],
    r'מצבה|מצבות': [r'na-ru₂|na-du₃-a|(^|\s)na(\s|-)'],
    B + P + r'(ארז|ארזים|ארזי)' + E: [r'erin|eren'],
    B + P + r'(לבנה|לבנים|לבני|לבנת|לבנתו|לבנתה)' + E: [r'šeg₁₂|sig₄|še-eb|babbar|dadag'],
    r'מלבן': [r'u₃-šub|ušub|u₃-šub'],
    B + P + r'(צורה|צורת|צורתו|צורות)' + E: [r'ĝiš-ḫur|ĝeš-ḫur|ĝiš-hur'],
    B + P + r'(אמן|אמנים|אמני|אמנות)' + E: [r'um-mi-a|ummia'],
    r'טיט': [r'(^|\s)im(-|\s|$)|im-'],
    r'עזב|עוזב': [r'taka₄|tag₄|da₁₃|\bšub|-šub'],
    r'נטש|נוטש': [r'muš₃'],
    r'ארר|ארור|אורר': [r'nam\b.*ku₅|nam-ku₅|nam ku₅|na-aĝ₂\b.*kud'],
    B + r'ו?[לבמהשכ]{0,2}(ה?תנכר|ינכר|נכר|נוכר|ניכר)': [r'kur₂'],
    r'אויב|אויבים|כאויב': [r'erim₂|kur₂'],
    B + r'ו?(ה|י|ת|א|נ|ל)?שוב' + E + '|' + B + r'ו?(ה|י|ת|א|נ|ל)שיב' + E + '|' + B + r'ו?(ישובו|ישוב|תשוב)' + E: [r'\bgur|-gur|gi₄|gi4|\bgi\b'],
    r'טוב|טובה|טובים|טובות': [r'dug₃|du₁₀'],
    r'ברך|ברכ|בירך|יבורך|מבורך': [r'šud₃|šudu₃|dub₃'],
    B + r'ו?[לבמה]?(עוף|עופות|עף|עפה|עפו|יעוף|תעוף)' + E: [r'\bdal|-dal'],
    B + r'ו?ה?עבד|עבוד|עבודה': [r'kiĝ₂|kin\b|arad₂|\bir₃'],
    B + P + r'(דרור)' + E: [r'ama-ar-gi₄|ama-gi₄|ama-ar-gi'],
}
TRAPS = {  # stripped token (prefixes allowed) -> (name, transliteration regex)
    'אותו': ('Utu (אוּתוּ)', r'\{d\}utu\b'), 'איננה': ('Inana (אִינַנָּה)', r'inana|inanna'),
    'אור': ('Urim / Šar-ur / Ki-ur (אוּר)', r'urim|ki-ur₃|šar₂-ur₃|šar-ur'),
    'באו': ('Bau (בָּאוּ)', r'ba-u₂|\{d\}ba-ba₆|ba-ba₆'), 'אן': ('An (אַן)', r'(^|\s)an(-(ne₂|ra|na|ki)|\s|$)|\{d\}an\b'),
    'שומר': ('Sumer (שׁוּמֶר)', r'ki-en-gi'), 'מגן': ('Magan (מָגָן)', r'ma₂-gan'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
# fixed formulas: (transliteration regex, required Hebrew regex on the stripped `>` line, description)
FORMULAS = [
    (r'^e₂-ninnu$', r'אנינו', 'E-ninnu'),
    (r'\bmaš-ĝi₆', r'חזיון', '*maš-ĝi₆* = חזיון (לילה)'),
    (r'ma-mu₂?-|ma-mu₂\b|ma-mud', r'חלו?[מם]', '*ma-mu(d)* = חלום'),
    (r'bur₂-bur₂|\bbur₂-', r'פשו?ר|פושר', '*bur₂* (dream) = פשר'),
    (r'ĝiš-ḫur|ĝeš-ḫur', r'צור(ה|ת|תו|ות)', '*ĝiš-ḫur* = צורה'),
    (r'u₃-šub', r'מלבן', '*u₃-šub* = מלבן'),
    (r'\{ĝiš\}eren|\{ĝiš\}erin|\berin\b|\beren\b', r'ארז', '*erin* = ארז'),
    (r'nam\b.*ku₅|nam-ku₅|nam ku₅|na-aĝ₂\b.*kud', r'אר(ר|ור|רה|רו)', '*nam … ku₅* = ארר'),
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


def etcsl_lines(rel):
    """[(label, transliteration, composite no.)]: ETCSL `N. *A1.1* text` -> `A.i.1`."""
    out = []
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        m = re.match(r'^(\d+[A-Za-z]*)\. \*([AB])(\d+)\.(\d+)\*\s*(.*?)\s*$', ln.rstrip('\n'))
        if m:
            n, c, col, li, t = m.groups()
            out.append((f'{c}.{ROMAN[int(col) - 1]}.{li}', t, n))
    return out


def oracc_lines(rel):
    """{label: (transliteration, lem line)} from cdl2md output (`**A i 1** …` + `<sub>lem: …</sub>`)."""
    out, cur = {}, None
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^\*\*([AB]) ([ivx]+) (\d+)\*\* (.*?)\s*$', ln)
        if m:
            cur = f'{m.group(1)}.{m.group(2)}.{m.group(3)}'
            out[cur] = [m.group(4), '']
            continue
        m = re.match(r'^\s*<sub>lem: (.*)</sub>', ln)
        if m and cur:
            out[cur][1] = m.group(1)
    return out


def clean_tr(s):
    s = re.sub(r'\s*\*[^*]*\*', '', s)            # ETCSL catalogue notes
    s = re.sub(r'\s*\(\*[^)]*\)', '', s)           # variant parentheses (*1 ms. has instead:* …)
    return re.sub(r'\s+', ' ', s).strip()


def norm_tr(s):
    s = clean_tr(s)
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩]', '', s).strip()


def check_reserved(label, heb, tr, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED.items():
        if re.search(pat, h):
            if allow and any(re.search(a, tr) for a in allow):
                continue
            problems.append(f'{label}: reserved string /{pat}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ''))


def check_traps(label, heb, problems, tr=''):
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—]+', FN.sub('', heb)):
        if not tok:
            continue
        st = strip(tok)
        for part, raw in zip(st.split('־'), tok.split('־')):
            base = PREFIX.sub('', part, count=1)
            for trap, (what, rx) in TRAPS.items():
                if (part == trap or base == trap) and re.search(rx, tr) and not NIQQUD.search(raw):
                    problems.append(f'{label}: unvocalized "{tok}" reads as a Hebrew word: write {what}')
        if re.search(r'־מה$', st) and re.search(r'(^|\s)me(-|\s|$)', tr) and not NIQQUD.search(tok.split('־')[-1]):
            problems.append(f'{label}: *me* must be vocalized (`הַ־מֶה`), got "{tok}"')


def check_formulas(label, heb, tr, problems):
    h = re.sub(r'[\[\]⟨⟩]', '', strip(FN.sub('', heb))).strip()
    t = clean_tr(tr)
    for trx, hrx, what in FORMULAS:
        if re.search(trx, t) and not re.search(hrx, h):
            problems.append(f'{label}: formula {what}: expected /{hrx}/ in "{heb}"')


def translation_lines(path):
    out = []
    for ln in open(path, encoding='utf-8'):
        m = re.match(r'^\*\*([AB]\.[ivx]+\.\d+)\*\* (.*)$', ln.rstrip('\n'))
        if m:
            out.append((m.group(1), FN.sub('', m.group(2)).rstrip()))
    return out


def verify(key, strict=False):
    Pj = PROJECTS[key]
    d = os.path.join(HERE, Pj['dir'])
    paths = [os.path.join(d, a) for a in Pj['annotated']]
    problems, notes = [], []
    order, ent = parse_annotated(paths, problems)
    if not strict:
        for m in [x for x in problems if x.startswith('missing file')]:
            problems.remove(m)
            notes.append(m + ' (not yet drafted)')
    src = etcsl_lines(Pj['etcsl'])
    srcd = {k: t for k, t, _ in src}
    labels = [k for k, _, _ in src]
    if order != labels:
        missing = [x for x in labels if x not in ent]
        extra = [x for x in order if x not in srcd]
        present = [x for x in labels if x in ent]
        msg = f'coverage: {len(order)} entries vs {len(labels)} ETCSL lines; missing {len(missing)} {missing[:12]}; extra {extra[:12]}'
        if extra or present != order:
            problems.append(msg + ('' if present == order else '; order differs from ETCSL'))
        else:
            (problems if strict else notes).append(msg)
    pending = 0
    for k in order:
        e = ent[k]
        if len(e['heb']) != 1:
            problems.append(f'entry {k}: {len(e["heb"])} ">" lines')
            continue
        tr = e['tr'][0] if e['tr'] else ''
        if not tr:
            problems.append(f'entry {k}: no backticked transliteration line')
        elif k in srcd and clean_tr(tr) != clean_tr(srcd[k]):
            problems.append(f'entry {k}: transliteration differs from ETCSL:\n    A: {tr}\n    E: {clean_tr(srcd[k])}')
        heb = e['heb'][0]
        if 'טרם תורגם' in heb:
            pending += 1
            continue
        check_reserved(k, heb, tr, problems)
        check_traps(k, heb, problems, tr)
        check_formulas(k, heb, tr, problems)
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb']:
            by.setdefault(norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        hs = {re.sub(r'[\[\]"“”⟨⟩]', '', strip(ent[k]['heb'][0])).strip() for k in ks}
        if len(ks) > 1 and len(hs) > 1 and len(t.split()) > 2:
            notes.append(f'same transliteration, different Hebrew: {ks}: {t}')
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
    print(f'project {key} ({Pj["dir"]}): {len(order)} entries; ' + ('OK' if not problems else f'{len(problems)} problem(s)'))
    for p in problems:
        print('  - ' + p)
    for n in notes:
        print('  · ' + n)
    return not problems


def build(key):
    Pj = PROJECTS[key]
    d = os.path.join(HERE, Pj['dir'])
    paths = [os.path.join(d, a) for a in Pj['annotated']]
    order, ent = parse_annotated(paths, [])
    intro = open(os.path.join(d, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../temple_tools.py build ' + key +
            ' from translation--intro.rtl.md and the annotated `>` lines (section headings = the annotated `## ` lines;\n'
            'footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated file(s) and rebuild.\n-->\n\n')
    out, notes, n = [], [], 0
    cyl = None
    for kind, v in sections(paths):
        if kind == 'h':
            out.append(f'\n## {v}\n')
        else:
            e = ent[v]
            if v[0] != cyl:
                cyl = v[0]
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


def grep(key, pat):
    files = []
    for k in (list(PROJECTS) if key == 'all' else [key]):
        Pj = PROJECTS[k]
        files += [os.path.join(HERE, Pj['dir'], a) for a in Pj['annotated']]
    if key == 'all':
        files += EXTRA_GREP
    rx = re.compile(pat)
    for f in files:
        if not os.path.exists(f):
            continue
        order, ent = parse_annotated([f], [])
        for k in order:
            for h in ent[k]['heb']:
                if rx.search(strip(h)):
                    print(f'{os.path.basename(os.path.dirname(f))}/{os.path.basename(f)} {k}: {h}   ‹{ent[k]["tr"][0] if ent[k]["tr"] else ""}›')


def _range(src, a, b):
    labels = [k for k, _, _ in src]
    return src[labels.index(a):labels.index(b) + 1]


def lines(key, a, b):
    for k, t, n in _range(etcsl_lines(PROJECTS[key]['etcsl']), a, b):
        print(f'{k} ({n}). {t}')


def rank3(Pj):
    """ETCSL paragraphs keyed by their first RIME label; ETCSRI units keyed by label."""
    src = etcsl_lines(Pj['etcsl'])
    num2lab = {n: k for k, _, n in src}
    et = {}
    for ln in open(os.path.join(SRC, Pj['etcsl_tr']), encoding='utf-8'):
        m = re.match(r'^\*\*(\d+)[^*]*?\.\*\* (.*)$', ln.rstrip('\n'))
        if m:
            rng = re.match(r'^\*\*([^*]+?)\.\*\*', ln).group(1)
            lab = num2lab.get(m.group(1))
            if lab:
                et[lab] = (rng, m.group(2))
    sri = {}
    p = os.path.join(SRC, Pj['etcsri'])
    if os.path.exists(p):
        for ln in open(p, encoding='utf-8'):
            m = re.match(r'^\*\*\[Cylinder.([AB]).([ivx]+).(\d+)[^\]]*\]\*\* (.*)$', ln.rstrip('\n'))
            if m:
                sri[f'{m.group(1)}.{m.group(2)}.{m.group(3)}'] = m.group(4)
    return et, sri


def data(key, a, b, out):
    Pj = PROJECTS[key]
    orc = oracc_lines(Pj['oracc'])
    et, sri = rank3(Pj)
    L = [f'# Translator data {key} {a}–{b}', '',
         'Per line: label (ETCSL composite no.); ETCSL transliteration (copy it exactly into the annotated file);',
         'ORACC epsd2/royal Q000377 lemma{morph;base}. Rank 3 (read only AFTER your own reading): ETCSL paragraph',
         '(composite range) and ETCSRI unit, printed at their first line.', '']
    for k, t, n in _range(etcsl_lines(Pj['etcsl']), a, b):
        L.append(f'## {k} ({n})')
        L.append(f'ETCSL: `{t}`')
        if k in orc:
            L.append(f'ORACC: {orc[k][0]}')
            L.append(f'lem: {orc[k][1]}')
        if k in et:
            L.append(f'> ETCSL tr. [{et[k][0]}]: {et[k][1]}')
        if k in sri:
            L.append(f'> ETCSRI tr. [{k}]: {sri[k]}')
        L.append('')
    open(out, 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    print(f'{out}: {sum(1 for x in L if x.startswith("## "))} lines')


def conc(key, out=None):
    Pj = PROJECTS[key]
    src = etcsl_lines(Pj['etcsl'])
    orc = oracc_lines(Pj['oracc'])
    def nm(s):
        s = s.replace('ŋ', 'ĝ')
        s = re.sub(r'\*[^*]*\*|\(.*?\)', '', s)
        return re.sub(r'[\[\]⸢⸣?!<>⟨⟩«»#*\s.…]', '', s)
    rows, low = [], []
    prev = 0
    for k, t, n in src:
        r = difflib.SequenceMatcher(None, nm(t), nm(orc.get(k, ['', ''])[0])).ratio() if k in orc else 0
        gap = ''
        num = int(re.match(r'\d+', n).group(0))
        if num != prev + 1:
            gap = f'ETCSL {prev + 1}–{num - 1} = lost lines' if num - 1 > prev + 1 else f'ETCSL {prev + 1} = lost line'
        prev = num
        if r < 0.6:
            low.append(k)
        rows.append(f'| {k} | {n} | {"✓" if k in orc else "—"} | {r:.2f} | {gap} |')
    print(f'{len(src)} ETCSL lines, {len(orc)} ORACC lines, {sum(1 for k, _, _ in src if k not in orc)} only in ETCSL, '
          f'{sum(1 for k in orc if k not in {x for x, _, _ in src})} only in ORACC; low similarity (<0.6, broken lines): {low}')
    if out:
        head = ['# Concordance: RIME / Edzard 1997 labels ↔ ETCSL composite numbers ↔ ORACC Q000377', '',
                'Generated by `../temple_tools.py conc GU`. Label = cylinder.column.line (Edzard 1997, RIME 3/1.1.7 CylA, CylB; '
                '= ETCSL `*A1.1*` = ORACC `A i 1`). ETCSL no. = ETCSL\'s running composite number (1–1363); its gaps are lines '
                'that are lost on the cylinders (counted by ETCSL, not given a RIME label). Sim. = similarity of the ETCSL and ORACC '
                'transliterations (low values are broken lines, written differently: `…` vs `...`).', '',
                '| Label | ETCSL no. | ORACC | Sim. | Note |', '|---|---|---|---|---|']
        open(out, 'w', encoding='utf-8').write('\n'.join(head + rows) + '\n')
        print('written', out)


def main():
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    if a[0] == 'verify':
        sys.exit(0 if verify(a[1], '--strict' in a) else 1)
    if a[0] == 'build':
        sys.exit(0 if build(a[1]) else 1)
    if a[0] == 'grep' and len(a) > 2:
        return grep(a[1], a[2])
    if a[0] == 'lines' and len(a) > 3:
        return lines(a[1], a[2], a[3])
    if a[0] == 'data' and len(a) > 4:
        return data(a[1], a[2], a[3], a[4])
    if a[0] == 'conc':
        return conc(a[1], a[2] if len(a) > 2 else None)
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
