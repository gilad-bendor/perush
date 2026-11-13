"""The Old Babylonian school canon (Round 8 run 2, 2026-11-13): the Decad and the Tetrad.

Twelve texts, ETCSL composites (base, rank 1) + ORACC epsd2/literary lemma + morph (local zip, aligned by content):
  1-העשירייה (the Decad, in the order of the OB catalogues):
    SA  Šulgi A                 2.4.2.01  Q000395   annotated-SA.rtl.md
    LA  Lipit-Eštar A           2.5.5.1   Q000481   annotated-LA.rtl.md
    (the Song of the Hoe, 5.5.4: ../סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/ – pointer)
    IB  Inana B (nin-me-šar-ra) 4.07.2    Q000623   annotated-IB.rtl.md
    EL  Enlil A                 4.05.1    Q000619   annotated-EL.rtl.md
    KH  The Keš temple hymn     4.80.2    Q000751   annotated-KH.rtl.md
    EJ  Enki's Journey to Nibru 1.1.4     Q000335   annotated-EJ.rtl.md
    EB  Inana and Ebiḫ          1.3.2     Q000339   annotated-EB.rtl.md
    NG  Nungal A                4.28.1    Q000736   annotated-NG.rtl.md
    (Bilgameš and Ḫuwawa A, 1.8.1.5: ../אפוס-גילגמש/3-השירים-השומריים/ – pointer)
  2-הרביעייה (the Tetrad):
    LB  Lipit-Eštar B           2.5.5.2   Q000482   annotated-LB.rtl.md
    ID  Iddin-Dagan B           2.5.3.2   Q000448   annotated-ID.rtl.md
    EN  Enlil-bāni A            2.5.8.1   Q000499   annotated-EN.rtl.md   (range labels 1-3, 101-2, 103-5, 136-138)
    NI  Nisaba A                4.16.1    Q000733   annotated-NI.rtl.md   (OB 1…; the Lagaš stone version L.1…)

Built on ../העולם-התחתון/netherworld_tools.py (parser, the corpus-wide Sumerian RESERVED and TRAPS, check functions),
like ../אפוס-גילגמש/bilgames_tools.py, plus this corpus's gates (RESERVED_C), traps (TRAPS_C), formulas (FORMULAS_C):
the tables are in renderings.md §4.

Usage (python3 -I -B, from any directory):
  canon_tools.py verify KEY|all [--strict]   entries = the ETCSL line list; one `>` per entry; the backticked line =
        ETCSL's (variant notes ignored); reserved / gated strings licensed by the transliteration + the ORACC lemma line;
        name traps; formulas; the project's translation.rtl.md = the `>` lines; identical sources with different Hebrew.
  canon_tools.py build [1|2]                 translation.rtl.md of each project (texts in order, pointers included),
        from translation--intro.rtl.md, translation--intro-<KEY>.rtl.md and the annotated files; then verify.
  canon_tools.py lines KEY FROM TO           the base lines with the ORACC lemma + morph.
  canon_tools.py tr KEY FROM TO              ETCSL's English for the paragraphs that hold these lines (rank 3: AFTER
        drafting the lines).
  canon_tools.py skel KEY                    write the skeleton annotated-KEY.rtl.md (once; never over a drafted file).
  canon_tools.py rel KEY FROM TO [--min R]   the near-identical lines (difflib >= R, default 0.6) in this corpus and in
        every annotated file of the folder, with their Hebrew – copy where the Sumerian is the same.
  canon_tools.py grep all|KEY '<regex>'      this corpus's `>` lines (niqqud stripped) matching.
  canon_tools.py lexmap [KEY…]               Hebrew ↔ lemma map from the פירוק bullets (`form` – lemma … ("Hebrew")):
        a lemma with two Hebrew words, and a Hebrew word for two lemmas.
"""
import difflib
import glob
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, 'sources')
_spec = importlib.util.spec_from_file_location('netherworld_tools', os.path.join(ROOT, 'העולם-התחתון', 'netherworld_tools.py'))
nw = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(nw)

D1, D2 = '1-העשירייה', '2-הרביעייה'
TEXTS = {
    'SA': dict(p=D1, name='Šulgi A', no='2.4.2.01', slug='Shulgi-A', q='Q000395'),
    'LA': dict(p=D1, name='Lipit-Eštar A', no='2.5.5.1', slug='Lipit-Eshtar-A', q='Q000481'),
    'IB': dict(p=D1, name='Inana B', no='4.07.2', slug='Inana-B', q='Q000623'),
    'EL': dict(p=D1, name='Enlil A', no='4.05.1', slug='Enlil-A', q='Q000619'),
    'KH': dict(p=D1, name='The Keš temple hymn', no='4.80.2', slug='Kesh-Temple-Hymn', q='Q000751'),
    'EJ': dict(p=D1, name="Enki's Journey to Nibru", no='1.1.4', slug='Enkis-Journey-to-Nibru', q='Q000335'),
    'EB': dict(p=D1, name='Inana and Ebiḫ', no='1.3.2', slug='Inana-and-Ebih', q='Q000339'),
    'NG': dict(p=D1, name='Nungal A', no='4.28.1', slug='Nungal-A', q='Q000736'),
    'LB': dict(p=D2, name='Lipit-Eštar B', no='2.5.5.2', slug='Lipit-Eshtar-B', q='Q000482'),
    'ID': dict(p=D2, name='Iddin-Dagan B', no='2.5.3.2', slug='Iddin-Dagan-B', q='Q000448'),
    'EN': dict(p=D2, name='Enlil-bāni A', no='2.5.8.1', slug='Enlil-bani-A', q='Q000499'),
    'NI': dict(p=D2, name='Nisaba A', no='4.16.1', slug='Nisaba-A', q='Q000733',
               versions=[('Old Babylonian version', ''), ('A version of the beginning', 'L.')]),
}
for _k, _t in TEXTS.items():
    _t['etcsl'] = f'ETCSL/{_t["no"]}--{_t["slug"]}/transliteration.md'
    _t['etr'] = f'ETCSL/{_t["no"]}--{_t["slug"]}/translation.md'
    _t['oracc'] = f'ORACC/epsd2-literary--{_t["q"]}--{_t["slug"]}/{_t["q"]}--lemmatised-morph.md'
# reading order of each project; 'ptr:NAME' = a pointer file translation--pointer-NAME.rtl.md
ORDER = {D1: ['SA', 'LA', 'ptr:HOE', 'IB', 'EL', 'KH', 'EJ', 'EB', 'NG', 'ptr:HA'], D2: ['LB', 'ID', 'EN', 'NI']}
KEYS = [k for d in (D1, D2) for k in ORDER[d] if not k.startswith('ptr:')]

B, E, P = nw.B, nw.E, nw.P
# This corpus's gates (renderings.md §4.1), added to netherworld_tools' corpus-wide RESERVED.
RESERVED_C = {
    # the vocabulary of the Psalms, the genre's biblical counterpart: reserved, or gated to its real counterpart
    B + P + r'(תהילה|תהילת|תהילתו|תהילתה|תהילתך|תהילתם|תהלה|תהלת|תהלות|תהילות)' + E: [r'za₃-mi₂|za₃-mim|zami\['],
    B + P + r'(הלל|הללו|הללויה|יהלל|יהללו|מהלל|מהולל|מהוללת|אהלל|נהלל|הילל|הללה|תהלל|תהללי)' + E: [],
    B + P + r'(מזמור|מזמורי|מזמורים)' + E + r'|סלה': [],
    B + P + r'(זמרה|זמרת|זימרה|זמר|זמרים|זמרו|יזמר|אזמרה|מזמר|מזמרת)' + E: [r'en₃-du|\bnar\b|nar-|\bnar\[|tigi|šir₃|šir\['],
    B + P + r'(בחר|בחרה|בחרו|בחרני|יבחר|נבחר|נבחרת|בחיר|בחירו|בחירה|הנבחר|בוחר)' + E: [r'pa₃|pad₃|pad\['],
    B + P + r'(משיח|משיחו|משח|משחו|משחה|נמשח|משוח|למשוח)' + E: [],
    B + P + r'(צדק|צדיק|צדיקים|צדקה|צדקתו|צדקתך|הצדיק|יצדק)' + E: [],
    B + P + r'(ישר|ישרה|ישרים|ישרות|מישרים|מישור|יושר|ביושר|הישר|יישר|יישרה|ליישר)' + E: [r'si-sa₂|si sa₂|si-sa\b|sa₂-sa₂|sa₂-e|si\[be in order|sa\[equal|sa₂-di'],
    B + P + r'(משפט|משפטו|משפטים|שפט|שופט|שופטת|ישפוט|נשפט|שפטה|לשפוט)' + E: [r'(^|[\s-])di(-|\s|$)|di\[|eš-bar|eš₂-bar|di-ku₅|ku₅\['],
    B + P + r'(תורה|תורת|תורתו|ברית|בריתו|חסד|חסדו|חסדים|גאל|גואל|גאולה|צבאות|ישועה|הושיע|מושיע)' + E: [],
    B + P + r'(רחמים|רחום|ריחם|מרחם|ירחם|רחמיו|רחמיה|תרחם|רחמי)' + E: [r'arḫuš|arhuš|arḫuš\[|ša₃-la₂|šag₄-la₂|ša₃ la₂'],
    B + P + r'(סלח|סליחה|יסלח|נסלח|כיפר|כפרה)' + E: [],
    B + P + r'(חטא|חטאה|חטאת|חטאים|חוטא|חוטאים|פשע|פשעים|עוון|עוונות)' + E: [r'nam-tag|nam-tag-ga|tag\[touch|ša₃-dab|ĝiš-gi₄?-gal₂|ḫul'],
    B + P + r'(גבור|גיבור|גבורים|גיבורים|גיבורה|גבורה|גבורת|גבורתו|גבורתה|הגיבור|הגבורה|גיבורי)' + E: [r'ur-saĝ|ursaĝ|ur-saĝ\[|nam-ur-saĝ|kalag|kal-ga|kalga|nam-kal|\bĝuruš|nir-ĝal₂|meš₃|ur-saŋ|ursaŋ|nam-ursaŋ'],
    B + P + r'(דגן|דגנה|ודגן)' + E: [r'ezina|ašnan|še\b|še-|še\[|da-gan|dagan'],
}
TRAPS_C = {
    'כש': ('Keš (כֵּשׁ)', r'keš₃|keš\['),
    'בכש': ('Keš (בְּכֵשׁ)', r'keš₃|keš\['),
    'דגן': ('Dagan in Iddin-Dagan (אִידִּין־דָּגָן)', r'da-gan|dagan'),
    'ננה': ('Nanna (נַנָּה)', r'\{d\}nanna|nanna\b|Nanna'),
    'אגדה': ('Agade (אַגָּדֶה)', r'a-ga-de₃|agade'),
    'אבח': ('Ebiḫ (אֶבִּיחַ)', r'e-bi₂-iḫ|ebiḫ|ebih'),
    'אביח': ('Ebiḫ (אֶבִּיחַ)', r'e-bi₂-iḫ|ebiḫ|ebih'),
}
# (keys, source regex on the cleaned transliteration, required Hebrew regex on the stripped `>` line, description)
FORMULAS_C = [
    (' '.join(TEXTS), r'za₃-mi₂\s*$|za₃-mi₂ ?$', r'תְּ?הִ?י?לָּ?ה|תהילה|תהלה', '*X za₃-mi₂* (doxology) = X – תהילה!'),
    (' '.join(TEXTS), r'gu₃ mu-(un-)?na-de₂-e$', r'(פונה|פנה|פנתה|פונים|פנו|פונות) אל', '*gu₃ de₂* = פונה אל (GEN)'),
    (' '.join(TEXTS), r'inim mu-(un-)?(na-)?(ni-)?ib-gi₄-gi₄$', r'(משיב|משיבה|משיבים|השיב|השיבה|השיבו) .*דבר', '*inim gi₄* = משיב … דבר (GEN 176)'),
]

nw.RESERVED_KEY.update({k: RESERVED_C for k in TEXTS})
nw.TRAPS_KEY.update({k: TRAPS_C for k in TEXTS})
for keys, trx, hrx, what in FORMULAS_C:
    for k in keys.split():
        nw.FORMULAS.append((k, trx, hrx, what))
# Magan `מָגָן` licenses the corpus-wide `גן` gate here too (as in bilgames_tools); *gi₄* written *gi*.
for _k in list(nw.RESERVED):
    if '(גן|גנה' in _k:
        nw.RESERVED[_k] = nw.RESERVED[_k] + [r'ma₂-gan|magan']
    if '(שוב|שבה' in _k:
        nw.RESERVED[_k] = nw.RESERVED[_k] + [r'gi-gi|\bgi\[turn|-in-gi\b|-ni-gi\b']

strip, FN = nw.strip, nw.FN
# *eš₃* `מִקְדָּשׁ` (renderings §2): the corpus-wide `קדש` gate read `מקדש` as מ + קדש; here a temple word passes
# (2026-11-13, T1's open decision 1). `קדוש`, `קודש`, `הקדיש` stay reserved.
for _k in list(nw.RESERVED):
    if _k.startswith('קדשה|'):
        _v = nw.RESERVED.pop(_k)
        nw.RESERVED[B + r'(?!ו?[הבלכש]{0,2}מקדש)' + P + r'(קדש|קדשה|קדשים|קדשות)' + E] = _v



def etcsl_lines(rel, versions=None):
    """[(label, transliteration)] – as netherworld_tools.etcsl_lines, also reading range labels (`1-3.`, `101-2.`)."""
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
        m = re.match(r'^(\d+[A-Za-z]*(?:-\d+)?)\. (.*?)\s*$', ln)
        if m:
            out.append((pre + seg + m.group(1), m.group(2)))
    return out


def _norm_sum(s):
    s = nw.clean_tr(s).replace('ŋ', 'ĝ').replace('Ŋ', 'Ĝ')
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩()<>]', '', s).strip()


def oracc_aligned(key, src):
    """ORACC lemma lines aligned to the ETCSL lines by content (difflib), as bilgames_tools."""
    lem = nw.oracc_lem(TEXTS[key]['oracc'])
    otr = [_norm_sum(re.sub(r'^\*\*[^*]+\*\* ', '', a)) for a, _ in lem]
    etr = [_norm_sum(t) for _, t in src]
    out = [''] * len(src)
    sm = difflib.SequenceMatcher(None, etr, otr, autojunk=False)
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == 'equal':
            for d in range(i2 - i1):
                out[i1 + d] = lem[j1 + d][1]
        elif tag == 'replace':
            for i in range(i1, i2):
                best, bj = 0, None
                for j in range(j1, j2):
                    r = difflib.SequenceMatcher(None, etr[i], otr[j], autojunk=False).ratio()
                    if r > best:
                        best, bj = r, j
                if bj is not None and best >= 0.5:
                    out[i] = lem[bj][1]
    return out


_SRC = {}


def source(key):
    """[(label, ETCSL transliteration, licence string = transliteration + ORACC lemma line)]"""
    if key not in _SRC:
        T = TEXTS[key]
        src = etcsl_lines(T['etcsl'], T.get('versions'))
        lem = oracc_aligned(key, src)
        # the licence omits ETCSL's italic notes ("*Cited in OB catalogue from Urim …*" tripped the Urim trap: IB 1)
        _SRC[key] = [(lab, t, nw.clean_tr(t) + ' ' + lem[i]) for i, (lab, t) in enumerate(src)]
    return _SRC[key]


def pdir(key):
    return os.path.join(HERE, TEXTS[key]['p'])


def paths(key):
    return [os.path.join(pdir(key), f'annotated-{key}.rtl.md')]


def translation_sections(path):
    out, cur = {}, None
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^<!-- text: (\w+) -->', ln)
        if m:
            cur = m.group(1)
            out[cur] = []
            continue
        m = re.match(r'^\*\*([^*]+)\*\* (.*)$', ln)
        if m and cur:
            out[cur].append((m.group(1), FN.sub('', m.group(2)).rstrip()))
    return out


def verify(key, strict=False):
    problems, notes = [], []
    order, ent = nw.parse_annotated(paths(key), problems)
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
    pending = 0
    for k in order:
        e = ent[k]
        if len(e['heb']) != 1:
            problems.append(f'entry {k}: {len(e["heb"])} ">" lines')
            continue
        tr = e['tr'][0] if e['tr'] else ''
        if not tr:
            problems.append(f'entry {k}: no backticked source line')
        elif k in srcd and nw.clean_tr(tr) != nw.clean_tr(srcd[k][0]):
            problems.append(f'entry {k}: source line differs:\n    A: {tr}\n    S: {nw.clean_tr(srcd[k][0])}')
        heb = e['heb'][0]
        if 'טרם תורגם' in heb:
            pending += 1
            continue
        lic = srcd.get(k, ('', tr))[1]
        lic_b = re.sub(r'[\[\]⸢⸣?!]', '', lic)
        heb_b = re.sub(r'[\[\]]', '', heb)
        nw.check_reserved(k, heb_b, lic + ' ' + lic_b, problems, key)
        nw.check_traps(k, heb_b, lic + ' ' + lic_b, problems, key)
        nw.check_formulas(key, k, heb, tr, problems)
        if len(re.findall(r'[א-ת]+', heb)) > 2 and re.search(r'[֑-ֽֿ-ׇ]', heb) and len(re.findall(r'[֑-ֽֿ-ׇ]', heb)) > 0.6 * len(re.findall(r'[א-ת]', heb)):
            problems.append(f'{k}: the line looks fully vocalized (draft unvocalized, plene): "{heb}"')
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb'] and 'טרם תורגם' not in e['heb'][0]:
            by.setdefault(nw.norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        hs = {re.sub(r'[\[\]"“”⟨⟩?*.,;:!\'–]', '', strip(ent[k]['heb'][0])).replace('  ', ' ').strip() for k in ks}
        if len(ks) > 1 and len(hs) > 1 and len(t.split()) > 2:
            notes.append(f'same source, different Hebrew: {ks}: {t}')
    tp = os.path.join(pdir(key), 'translation.rtl.md')
    if os.path.exists(tp):
        tl = translation_sections(tp).get(key)
        al = [(k, FN.sub('', ent[k]['heb'][0]).rstrip()) for k in order if ent[k]['heb']]
        if tl is None:
            (problems if strict else notes).append('translation.rtl.md has no section for this text (run build)')
        elif tl != al:
            if len(tl) != len(al):
                problems.append(f'translation.rtl.md has {len(tl)} lines for {key}, annotated {len(al)}')
            for (k1, h1), (k2, h2) in zip(al, tl):
                if k1 != k2 or h1 != h2:
                    problems.append(f'translation mismatch at {k1}/{k2}:\n    A: {h1}\n    T: {h2}')
                    break
    print(f'{key} ({TEXTS[key]["name"]}): {len(order)} entries; ' + ('OK' if not problems else f'{len(problems)} problem(s)'))
    for p in problems:
        print('  - ' + p)
    for n in notes:
        print('  · ' + n)
    return not problems


def build(which=None):
    ok = True
    for d in (D1, D2):
        if which and not d.startswith(which):
            continue
        P = os.path.join(HERE, d)
        head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../canon_tools.py build from translation--intro.rtl.md, '
                'translation--intro-<KEY>.rtl.md, translation--pointer-<NAME>.rtl.md and the annotated `>` lines\n'
                '(section headings = the annotated `## ` lines; footnotes = the `הערת שוליים` bullets). '
                'To change the text, edit the annotated files and rebuild.\n-->\n\n')
        parts = [open(os.path.join(P, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')]
        notes, n = [], 0
        for key in ORDER[d]:
            if key.startswith('ptr:'):
                gp = os.path.join(P, f'translation--pointer-{key[4:]}.rtl.md')
                if os.path.exists(gp):
                    parts.append(open(gp, encoding='utf-8').read().rstrip('\n'))
                continue
            ap = [p for p in paths(key) if os.path.exists(p)]
            if not ap:
                continue
            ip = os.path.join(P, f'translation--intro-{key}.rtl.md')
            intro = open(ip, encoding='utf-8').read().rstrip('\n') if os.path.exists(ip) else f'# {TEXTS[key]["name"]}'
            out = [f'<!-- text: {key} -->', intro]
            order, ent = nw.parse_annotated(ap, [])
            for kind, v in nw.sections(ap):
                if kind == 'h':
                    out.append(f'\n### {re.sub(r"^[0-9A-Za-z.+]+(?:[–-][0-9A-Za-z.+]+)?: ", "", v)}\n')
                else:
                    e = ent[v]
                    ref = ''
                    if e['fn']:
                        n += 1
                        ref = f'[^{n}]'
                        notes.append(f'[^{n}]: {e["fn"]}')
                    out.append(f'**{v}** {e["heb"][0]}{ref}  ')
            parts.append('\n'.join(out))
        text = head + '\n\n'.join(parts) + '\n' + ('\n---\n\n' + '\n\n'.join(notes) + '\n' if notes else '')
        open(os.path.join(P, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
        print(f'{d}/translation.rtl.md written, {n} footnotes')
        ok = all([verify(k) for k in ORDER[d] if not k.startswith('ptr:')]) and ok
    return ok


def _range(key, a, b):
    src = source(key)
    labels = [x[0] for x in src]
    return src[labels.index(a):labels.index(b) + 1]


def lines(key, a, b):
    for lab, t, lic in _range(key, a, b):
        print(f'### {lab}\n`{t}`\n    {lic[len(t):].strip()}')


def tr(key, a, b):
    """ETCSL's English paragraphs (translation.md) covering the labels a..b (by the paragraph's line span)."""
    want = [x[0] for x in _range(key, a, b)]
    num = lambda s: int(re.match(r'(?:L\.)?(\d+)', s).group(1))
    lo, hi = num(want[0]), num(want[-1])
    for ln in open(os.path.join(SRC, TEXTS[key]['etr']), encoding='utf-8'):
        m = re.match(r'^\*?\*?(\d+)[A-Za-z]*(?:[-–](\d+)[A-Za-z]*)?\.?\*?\*?', ln.strip())
        if m:
            s, e = int(m.group(1)), int(m.group(2) or m.group(1))
            if e >= lo and s <= hi:
                print(ln.rstrip())


def skel(key):
    p = paths(key)[0]
    if os.path.exists(p) and any(l.startswith('> ') and 'טרם תורגם' not in l for l in open(p, encoding='utf-8')):
        sys.exit(f'{os.path.basename(p)} has drafted lines: not overwritten')
    out = [f'# {TEXTS[key]["name"]} – תרגום מוער\n\n(הכותרות `## ` והפסקאות: המתרגם.)\n\n---\n']
    for lab, t, _ in source(key):
        out.append(f'### {lab}\n`{t}`\n> טרם תורגם\n')
    open(p, 'w', encoding='utf-8').write('\n'.join(out))
    print(f'{os.path.basename(p)}: {len(source(key))} entries')


def _pool():
    """[(file, label, folded transliteration, Hebrew)] of every annotated file under the folder (Sumerian entries)."""
    out = []
    for f in glob.glob(os.path.join(ROOT, '**', 'annotated*.rtl.md'), recursive=True):
        try:
            order, ent = nw.parse_annotated([f], [])
        except Exception:
            continue
        rel = os.path.relpath(f, ROOT)
        for k in order:
            e = ent[k]
            if e['tr'] and e['heb'] and 'טרם תורגם' not in e['heb'][0]:
                out.append((rel, k, _norm_sum(e['tr'][0]), e['heb'][0]))
    return out


def rel(key, a, b, minr=0.6):
    pool = _pool()
    mine = os.path.relpath(paths(key)[0], ROOT)
    for lab, t, _ in _range(key, a, b):
        f = _norm_sum(t)
        if len(f) < 8:
            continue
        hits = []
        for f2, l2, t2, h2 in pool:
            if f2 == mine and l2 == lab:
                continue
            if abs(len(t2) - len(f)) > max(len(f), 10):
                continue
            r = difflib.SequenceMatcher(None, f, t2, autojunk=False).ratio()
            if r >= minr:
                hits.append((r, f2, l2, t2, h2))
        if hits:
            print(f'### {lab}  `{t}`')
            for r, f2, l2, t2, h2 in sorted(hits, reverse=True)[:4]:
                print(f'    {r:.2f} {f2} {l2}: `{t2}`\n         > {h2}')


def grep(key, pat):
    rx = re.compile(pat)
    for k in (KEYS if key == 'all' else [key]):
        for p in paths(k):
            if not os.path.exists(p):
                continue
            order, ent = nw.parse_annotated([p], [])
            for lab in order:
                for h in ent[lab]['heb']:
                    if rx.search(strip(h)):
                        print(f'{k} {lab}: {h}   ‹{ent[lab]["tr"][0] if ent[lab]["tr"] else ""}›')
    if key == 'all':
        print('(other corpora: python3 -I ../העולם-התחתון/netherworld_tools.py grep all …)')


def lexmap(keys):
    """From the פירוק bullets: segments `form` – lemma … ("Hebrew")."""
    lem2heb, heb2lem = {}, {}
    for k in keys or KEYS:
        p = paths(k)[0]
        if not os.path.exists(p):
            continue
        lab = None
        for ln in open(p, encoding='utf-8'):
            m = re.match(r'^### (\S+)', ln)
            if m:
                lab = m.group(1)
            if not ln.startswith('- **פירוק:**'):
                continue
            for seg in re.split(r';\s+(?=`)', ln[len('- **פירוק:**'):]):
                m = re.search(r'`[^`]+`\s*[–-]\s*\*?([^\s*",;(]+)', seg)
                h = re.findall(r'\("([^"]+)"\)', seg)
                if m and h:
                    lm = m.group(1).strip()
                    hh = strip(h[-1]).strip()
                    lem2heb.setdefault(lm, {}).setdefault(hh, []).append(f'{k} {lab}')
                    heb2lem.setdefault(hh, {}).setdefault(lm, []).append(f'{k} {lab}')
    print('== lemmas with more than one Hebrew')
    for lm, d in sorted(lem2heb.items()):
        if len(d) > 1:
            print(f'{lm}: ' + '; '.join(f'{h} ({len(v)}: {v[0]})' for h, v in d.items()))
    print('== Hebrew words for more than one lemma')
    for h, d in sorted(heb2lem.items()):
        if len(d) > 1:
            print(f'{h}: ' + '; '.join(f'{lm} ({len(v)}: {v[0]})' for lm, v in d.items()))


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    if a[0] == 'verify' and len(a) > 1:
        keys = KEYS if a[1] == 'all' else [a[1]]
        sys.exit(0 if all([verify(k, '--strict' in a) for k in keys]) else 1)
    if a[0] == 'build':
        sys.exit(0 if build(a[1] if len(a) > 1 else None) else 1)
    if a[0] == 'lines' and len(a) > 3:
        return lines(a[1], a[2], a[3])
    if a[0] == 'tr' and len(a) > 3:
        return tr(a[1], a[2], a[3])
    if a[0] == 'skel' and len(a) > 1:
        return skel(a[1])
    if a[0] == 'rel' and len(a) > 3:
        m = float(a[a.index('--min') + 1]) if '--min' in a else 0.6
        return rel(a[1], a[2], a[3], m)
    if a[0] == 'grep' and len(a) > 2:
        return grep(a[1], a[2])
    if a[0] == 'lexmap':
        return lexmap(a[1:])
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
