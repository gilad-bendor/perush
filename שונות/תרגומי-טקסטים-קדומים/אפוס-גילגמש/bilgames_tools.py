"""The Sumerian Bilgameš poems (project 3 of the Gilgameš corpus; Round 6 run 1, 2026-11-06).

Five texts, ETCSL 1.8.1.1–1.8.1.5.1 + ORACC epsd2/literary Q000361–Q000366 (lemma + morph, aligned by content):
  HA  Bilgameš and Ḫuwawa, Version A   (1.8.1.5,   Q000365)  annotated-HA.rtl.md
  HB  Bilgameš and Ḫuwawa, Version B   (1.8.1.5.1, Q000366)  annotated-HB.rtl.md
  BH  Bilgameš and the Bull of Heaven  (1.8.1.2,   Q000362)  annotated-BH.rtl.md   labels A1…, MT.A1…, U3.A1…
  AG  Bilgameš and Aga                 (1.8.1.1,   Q000361)  annotated-AG.rtl.md
  DB  The Death of Bilgameš            (1.8.1.3,   Q000363)  annotated-DB-1.rtl.md (Nibru A1…, N2.1…),
                                                             annotated-DB-2.rtl.md (Me-Turan MT.A1…)
(Bilgameš, Enkidu and the Netherworld, ETCSL 1.8.1.4, stays whole in ../העולם-התחתון/4-…: key GEN of
netherworld_tools.py; the reading translation points to it.)

Built on ../העולם-התחתון/netherworld_tools.py (the GEN key is the model): its parser, its corpus-wide RESERVED and
TRAPS, plus this project's own gates (RESERVED_B, TRAPS_B) and formulas (FORMULAS_B).

Usage (from any directory; python3 -I):
  bilgames_tools.py verify KEY|all [--strict]   as netherworld_tools verify (entries = the ETCSL line list; one `>`
        per entry; the backticked line = ETCSL's, variant notes ignored; reserved / gated strings licensed by the
        transliteration + the ORACC lemma line; name traps; formulas; translation.rtl.md = the `>` lines), and for DB
        also the excerpt check: the flood references (../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md
        §3, Me-Turan F 3–41, 123–128) must have the same Hebrew as MT.F… here.
  bilgames_tools.py build                       translation.rtl.md (all five texts, HA HB BH AG [GEN pointer] DB)
        from translation--intro.rtl.md, translation--intro-<KEY>.rtl.md and the annotated files; then verify all.
  bilgames_tools.py lines KEY FROM TO           the base lines with the ORACC lemma + morph.
  bilgames_tools.py skel KEY FILE FROM TO       write a skeleton (backticked line + `> טרם תורגם`) – once, never over
        a drafted file.
  bilgames_tools.py excerpt                     the flood-references excerpt beside the MT.F lines here.
  bilgames_tools.py rel KEY FROM TO [--min R]   for each line, the most similar lines (difflib ratio >= R, default
        0.6) in the other Bilgameš texts and in GEN, with the Hebrew already given – copy where the Sumerian is the same.
  bilgames_tools.py grep all|KEY '<regex>'      `>` lines (niqqud stripped) matching.
"""
import difflib
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

PDIR = os.path.join(HERE, '3-השירים-השומריים')
TEXTS = {
    'HA': dict(name='Bilgameš and Ḫuwawa A', etcsl='ETCSL/1.8.1.5--Bilgames-and-Huwawa-A/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000365--Gilgamesh-and-Huwawa-A/Q000365--lemmatised-morph.md',
               annotated=['annotated-HA.rtl.md']),
    'HB': dict(name='Bilgameš and Ḫuwawa B', etcsl='ETCSL/1.8.1.5.1--Bilgames-and-Huwawa-B/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000366--Gilgamesh-and-Huwawa-B/Q000366--lemmatised-morph.md',
               annotated=['annotated-HB.rtl.md']),
    'BH': dict(name='Bilgameš and the Bull of Heaven', etcsl='ETCSL/1.8.1.2--Bilgames-and-the-Bull-of-Heaven/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000362--Gilgamesh-and-the-Bull-of-Heaven/Q000362--lemmatised-morph.md',
               annotated=['annotated-BH.rtl.md'],
               versions=[('unknown provenance', ''), ('Me-Turan', 'MT.'), ('Ur III', 'U3.')]),
    'AG': dict(name='Bilgameš and Aga', etcsl='ETCSL/1.8.1.1--Bilgames-and-Aga/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000361--Gilgamesh-and-Aga/Q000361--lemmatised-morph.md',
               annotated=['annotated-AG.rtl.md']),
    'DB': dict(name='The Death of Bilgameš', etcsl='ETCSL/1.8.1.3--Death-of-Bilgames/transliteration.md',
               oracc='ORACC/epsd2-literary--Q000363--Death-of-Gilgamesh/Q000363--lemmatised-morph.md',
               annotated=['annotated-DB-1.rtl.md', 'annotated-DB-2.rtl.md'],
               versions=[('A version from Nibru', ''), ('Another version from Nibru', 'N2.'), ('Me-Turan', 'MT.')]),
}
ORDER = ['HA', 'HB', 'BH', 'AG', 'DB']

B, E, P = nw.B, nw.E, nw.P
# This project's gates (renderings §23.6), added to netherworld_tools' corpus-wide RESERVED (which already holds
# שאול, תמוז, עולם, טרם, אלהים, קינה, כבוד, ברא, יצר, תהום, רקיע, בדל, מלאך, סולם, לילית; gated עפר, טיט, שוב, עזב,
# לקח, ידע, נחש, שד, טוב, כופר, גן, היכל, חתן, בכה …).
RESERVED_B = {
    r'תבה|תיבה|תיבת': [],
    r'כרוב|כרובים': [],
    B + P + r'(עדן)' + E: [],
    r'פתר|פתרון|פותר': [],
    B + P + r'(הבל|הבלים)' + E: [],
    B + P + r'(שמר|שומר|שומרי|שומרים|ישמור|ישמר|שמרו|לשמור|שמירה|משמר|משמרת)' + E: [r'ki-en-gi'],   # Sumer `שׁוּמֶר` (trap)
    r'חמדה|נחמד': [],
    B + P + r'(עזר|כנגדו)' + E: [],
    B + P + r'(ארור|ארורים|ארר|אאר|יאר|תאר|נאר|ארורה|לארר|מארה)' + E: [r'aš₂|\baša\b|ašax|aša₂|arār|asag'],
    B + P + r'(עץ|עצים|עצי|עצו)' + E + r'|' + B + P + r'(עצי|עץ)־': [r'ĝiš|ĝeš|\{ĝiš\}|ŋeš|ŋiš'],
    B + P + r'(ארז|ארזים|ארזי|הארז|ארזו)' + E + r'|' + B + P + r'(ארזי|ארז)־': [r'erin|eren'],
    B + P + r'(נפלים|נפילים|גבורים|הגבורים)' + E + r'|אנשי השם': [],
    B + P + r'(אד|ערפל|מבול|המבול)' + E: [r'a-ma-ru|amaru|a-ma-ru₁₀'],
    B + P + r'(נשמה|נשמת|נשמתו)' + E: [],
    B + P + r'(צלם|צלמו|דמות|כדמותו)' + E: [],
    B + P + r'(זקנים|זקני|הזקנים|זקן|זקני־)' + E + r'|' + B + P + r'זקני־': [r'ab-ba|ab-ba-|abba|šu-gi|šu-gi₄|um-ma'],
    B + P + r'(ילדים|הילדים|ילד|ילדי)' + E: [r'dumu|tud|di₄-di₄|banda₃'],
    B + P + r'(עצה|עצת|יעץ|יועץ|נועץ|נועצו|יועצו|ויועץ|ייעץ|התייעץ)' + E: [r'ad gi₄|ad-gi₄|ad ĝar|ša₃-gal|na de₅|šag₄ ĝal₂'],
}
TRAPS_B = {
    'חוווה': ('Ḫuwawa (חוּוָוָה)', r'ḫu-wa-wa|huwawa|ḫuwawa'),
    'חווה': ('Ḫuwawa (חוּוָוָה; unvocalized also "Eve" / "farm")', r'ḫu-wa-wa|huwawa|ḫuwawa'),
    'אגא': ('Aga (אַגָּא)', r'(^|\s|\[)ag-ga|aga\b'),
    'אגה': ('Aga (אַגָּא)', r'(^|\s|\[)ag-ga|aga\b'),
    'כיש': ('Kiš (כִּישׁ; unvocalized also "Kish", 1 Sam 9:1)', r'kiš\{ki\}|kiš\b'),
    'ננה': ('Nanna (נַנָּה)', r'\{d\}nanna|nanna\b'),
    'סוּן': ('Ninsun (נִינְסוּן)', r'nin-sumun|ninsun'),
    'אנו': ('An (אַן; `אנו` unvocalized "we")', r'(^|\s)an-ne₂|\{d\}an\b'),
}
# (key, source regex on the cleaned transliteration, required Hebrew regex on the stripped `>` line, description)
FORMULAS_B = [
    ('HA HB BH AG DB', r'gu₃ mu-(un-)?na-de₂-e$|gu₃ mu-(un-)?na-de₂-[\[]?e', r'(פונה|פנה|פנתה|פונים|פנו|פונות) אל', '*gu₃ de₂* = פונה אל (GEN)'),
    ('HA HB BH AG DB', r'inim mu-(un-)?(na-)?(ni-)?ib-gi₄-gi₄$', r'(משיב|משיבה|משיבים|השיב|השיבה|השיבו) .*דבר', '*inim gi₄* = משיב … דבר (GEN 176)'),
    ('HA HB', r'mu-ĝu₁₀ ga-am₃-ĝar', r'אשים את שמי|שמי אשים', '*mu-ĝu₁₀ ga-am₃-ĝar* = אשים את שמי (*šuma šakānu*)'),
    ('HA HB AG DB', r'en kul-aba₄\{ki\}', r'אדון כ(ו)?לבה', '*en kul-aba₄{ki}* = אדון כֻּלַּבָּה'),
    ('HA HB BH AG DB', r'\{d\}nin-sumun₂?', r'נינסון', 'Ninsun = נִינְסוּן'),
]

nw.RESERVED_KEY.update({k: RESERVED_B for k in TEXTS})
nw.TRAPS_KEY.update({k: TRAPS_B for k in TEXTS})
for keys, trx, hrx, what in FORMULAS_B:
    for k in keys.split():
        nw.FORMULAS.append((k, trx, hrx, what))

FLOOD_REF = os.path.join(ROOT, 'סיפורי-המבול-המסופוטמיים', '6-אזכורי-המבול', 'annotated.rtl.md')
strip, FN = nw.strip, nw.FN


def _norm_sum(s):
    """A transliteration folded for alignment (ORACC ŋ = ĝ, brackets and notes dropped)."""
    s = nw.clean_tr(s).replace('ŋ', 'ĝ').replace('Ŋ', 'Ĝ')
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩()<>]', '', s).strip()


def oracc_aligned(key, src):
    """ORACC lemma lines aligned to the ETCSL lines by content (difflib over the folded transliterations); ORACC has
    the variant lines of ETCSL's notes as lines of their own and many unlabelled lines, so position alone fails."""
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
            for i in range(i1, i2):   # best match inside the block
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
        src = nw.etcsl_lines(T['etcsl'], T.get('versions'))
        lem = oracc_aligned(key, src)
        _SRC[key] = [(lab, t, t + ' ' + lem[i]) for i, (lab, t) in enumerate(src)]
    return _SRC[key]


def paths(key):
    return [os.path.join(PDIR, a) for a in TEXTS[key]['annotated']]


def excerpt_entries():
    """[(label list, [`>` lines])] of the flood references' §3 (the Death of Bilgameš, Me-Turan F)."""
    out, on, cur = [], False, None
    for ln in open(FLOOD_REF, encoding='utf-8'):
        ln = ln.rstrip('\n')
        if ln.startswith('## '):
            on, cur = ln.startswith('## 3.'), None
            continue
        m = re.match(r'^### F (\d+)(?:[–-](\d+))?\s*$', ln)
        if on and m:
            a, b = int(m.group(1)), int(m.group(2) or m.group(1))
            cur = (['MT.F%d' % i for i in range(a, b + 1)], [])
            out.append(cur)
        elif on and cur and ln.startswith('> '):
            cur[1].append(ln[2:].rstrip())
    return out


def check_excerpt(ent, problems, notes, strict):
    for labs, hebs in excerpt_entries():
        mine = [ent[x]['heb'][0] for x in labs if x in ent and ent[x]['heb']]
        if len(mine) != len(labs) or any('טרם תורגם' in h for h in mine):
            (problems if strict else notes).append(f'excerpt {labs[0]}: not yet drafted here')
            continue
        if len(hebs) != len(mine) or not all(nw.same_heb(a, b) for a, b in zip(hebs, mine)):
            problems.append(f'excerpt {"/".join(labs)}: the flood references differ:\n    F: {" | ".join(hebs)}\n    D: {" | ".join(mine)}')


def translation_sections(path):
    """{KEY: [(label, Hebrew)]} from the combined translation (each text opens with `<!-- text: KEY -->`)."""
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
        lic_b = re.sub(r'[\[\]⸢⸣?!]', '', lic)   # a gate reads the word whole (guidelines §5.2, Scripts)
        heb_b = re.sub(r'[\[\]]', '', heb)
        nw.check_reserved(k, heb_b, lic + ' ' + lic_b, problems, key)
        nw.check_traps(k, heb_b, lic + ' ' + lic_b, problems, key)
        nw.check_formulas(key, k, heb, tr, problems)
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    if key == 'DB':
        check_excerpt(ent, problems, notes, strict)
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb'] and 'טרם תורגם' not in e['heb'][0]:
            by.setdefault(nw.norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        hs = {re.sub(r'[\[\]"“”⟨⟩?*.,;:!\'–]', '', strip(ent[k]['heb'][0])).replace('  ', ' ').strip() for k in ks}
        if len(ks) > 1 and len(hs) > 1 and len(t.split()) > 2:
            notes.append(f'same source, different Hebrew: {ks}: {t}')
    tp = os.path.join(PDIR, 'translation.rtl.md')
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


def build():
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../bilgames_tools.py build from translation--intro.rtl.md, '
            'translation--intro-<KEY>.rtl.md and the annotated `>` lines\n(section headings = the annotated `## ` lines; '
            'footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated files and rebuild.\n-->\n\n')
    parts = [open(os.path.join(PDIR, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')]
    notes, n = [], 0
    for key in ORDER:
        if key == 'DB':
            gp = os.path.join(PDIR, 'translation--pointer-GEN.rtl.md')
            if os.path.exists(gp):
                parts.append(open(gp, encoding='utf-8').read().rstrip('\n'))
        ip = os.path.join(PDIR, f'translation--intro-{key}.rtl.md')
        intro = open(ip, encoding='utf-8').read().rstrip('\n') if os.path.exists(ip) else f'# {TEXTS[key]["name"]}'
        out = [f'<!-- text: {key} -->', intro]
        order, ent = nw.parse_annotated([p for p in paths(key) if os.path.exists(p)], [])
        for kind, v in nw.sections([p for p in paths(key) if os.path.exists(p)]):
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
    open(os.path.join(PDIR, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
    print(f'translation.rtl.md written, {n} footnotes')
    return all([verify(k) for k in ORDER])


def lines(key, a, b):
    src = source(key)
    labels = [x[0] for x in src]
    for lab, t, lic in src[labels.index(a):labels.index(b) + 1]:
        print(f'### {lab}\n`{t}`\n    {lic[len(t):].strip()}')


def skel(key, fname, a, b):
    p = os.path.join(PDIR, fname)
    if os.path.exists(p) and any(l.startswith('> ') and 'טרם תורגם' not in l for l in open(p, encoding='utf-8')):
        sys.exit(f'{fname} has drafted lines: not overwritten')
    src = source(key)
    labels = [x[0] for x in src]
    out = [f'# {TEXTS[key]["name"]} – תרגום מוער\n\n(הכותרת והפסקאות של הקובץ: המתרגם.)\n\n---\n']
    for lab, t, _ in src[labels.index(a):labels.index(b) + 1]:
        out.append(f'### {lab}\n`{t}`\n> טרם תורגם\n')
    open(p, 'w', encoding='utf-8').write('\n'.join(out))
    print(f'{fname}: {labels.index(b) - labels.index(a) + 1} entries')


def excerpt():
    order, ent = nw.parse_annotated([p for p in paths('DB') if os.path.exists(p)], [])
    src = dict((l, t) for l, t, _ in source('DB'))
    for labs, hebs in excerpt_entries():
        for i, lab in enumerate(labs):
            print(f'### {lab}  `{src.get(lab, "?")}`')
            print(f'    F: {hebs[i] if i < len(hebs) else "(merged)"}')
            if lab in ent and ent[lab]['heb']:
                print(f'    D: {ent[lab]["heb"][0]}')


def _all_entries():
    """[(text, label, folded transliteration, Hebrew)] of the five texts and GEN."""
    out = []
    for key in ORDER:
        order, ent = nw.parse_annotated([p for p in paths(key) if os.path.exists(p)], [])
        for k in order:
            e = ent[k]
            if e['tr'] and e['heb'] and 'טרם תורגם' not in e['heb'][0]:
                out.append((key, k, _norm_sum(e['tr'][0]), e['heb'][0]))
    G = nw.PROJECTS['GEN']
    order, ent = nw.parse_annotated([os.path.join(nw.HERE, G['dir'], a) for a in G['annotated']], [])
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb']:
            out.append(('GEN', k, _norm_sum(e['tr'][0]), e['heb'][0]))
    return out


def rel(key, a, b, minr=0.6):
    pool = _all_entries()
    src = source(key)
    labels = [x[0] for x in src]
    for lab, t, _ in src[labels.index(a):labels.index(b) + 1]:
        f = _norm_sum(t)
        hits = []
        for k2, l2, t2, h2 in pool:
            if k2 == key and l2 == lab:
                continue
            r = difflib.SequenceMatcher(None, f, t2, autojunk=False).ratio()
            if r >= minr:
                hits.append((r, k2, l2, t2, h2))
        if hits:
            print(f'### {lab}  `{t}`')
            for r, k2, l2, t2, h2 in sorted(hits, reverse=True)[:4]:
                print(f'    {r:.2f} {k2} {l2}: `{t2}`\n         > {h2}')


def grep(key, pat):
    rx = re.compile(pat)
    keys = ORDER if key == 'all' else [key]
    for k in keys:
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


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    if a[0] == 'verify' and len(a) > 1:
        keys = ORDER if a[1] == 'all' else [a[1]]
        sys.exit(0 if all([verify(k, '--strict' in a) for k in keys]) else 1)
    if a[0] == 'build':
        sys.exit(0 if build() else 1)
    if a[0] == 'lines' and len(a) > 3:
        return lines(a[1], a[2], a[3])
    if a[0] == 'skel' and len(a) > 4:
        return skel(a[1], a[2], a[3], a[4])
    if a[0] == 'excerpt':
        return excerpt()
    if a[0] == 'rel' and len(a) > 3:
        m = float(a[a.index('--min') + 1]) if '--min' in a else 0.6
        return rel(a[1], a[2], a[3], m)
    if a[0] == 'grep' and len(a) > 2:
        return grep(a[1], a[2])
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
