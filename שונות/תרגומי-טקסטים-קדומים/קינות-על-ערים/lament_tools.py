"""Verify and build the city-lament corpus (the Lament for Ur, ETCSL 2.2.2; the Curse of Agade, ETCSL 2.1.5).

Written 2026-10-19, adapted from ../סיפורי-הבריאה-המסופוטמיים/sumerian_tools.py. Add a project as a PROJECTS entry.
ETCSL segment labels (the Agade Ur III fragments, "## Segment A" … in transliteration.md) become `A1`, `A2` … here.

Usage (from any directory):
  python3 -I lament_tools.py verify KEY [--strict]   KEY = LU | CA. Checks (exit 1 on an error):
      1. every entry `### <label>` has exactly one `> ` Hebrew line and one backticked transliteration line, which
         equals ETCSL's line (notes in *…* and variant parentheses ignored); no label is duplicated;
      2. coverage: the labels equal the ETCSL line list, in order (a not-yet-written file is a note; --strict: error,
         and every `[טרם תורגם]` is an error);
      3. RESERVED strings (niqqud stripped) in a `>` line only when the transliteration has a licensing word;
      4. TRAPS: names that read as Hebrew words unvocalized must carry niqqud when the name is in the transliteration;
      5. FORMULAS: fixed refrain renderings (renderings.md §3) wherever their Sumerian occurs;
      6. translation.rtl.md (if present): its numbered lines equal the annotated `>` lines one to one;
      and REPORTS (not an error) identical transliterations with different Hebrew.
  python3 -I lament_tools.py build KEY      translation.rtl.md from translation--intro.rtl.md + the annotated files
      (`## ` headings, `**N** …` lines, `- **הערת שוליים:** …` bullets as footnotes); then verify.
  python3 -I lament_tools.py grep KEY '<regex>'   `>` lines (niqqud stripped) matching; KEY = LU | CA | all
      (all = both projects + the Sumerian texts of the creation corpus, projects 2–4).
  python3 -I lament_tools.py lines KEY FROM-TO   print ETCSL's transliteration of a label range (for briefs).
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, '..', 'sources'))
CRE = os.path.normpath(os.path.join(HERE, '..', 'סיפורי-הבריאה-המסופוטמיים'))
PROJECTS = {
    'LU': dict(dir='1-הקינה-על-אור', annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md', 'annotated-3.rtl.md'],
               etcsl='ETCSL/2.2.2--Lament-for-Ur/transliteration.md'),
    'CA': dict(dir='2-קללת-אכד', annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md'],
               etcsl='ETCSL/2.1.5--Curse-of-Agade/transliteration.md'),
}
EXTRA_GREP = [os.path.join(CRE, x) for x in (
    '2-טקסטי-בריאה-ועדן/annotated-2-Enki-Ninhursag.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-3-Enki-Ninmah.rtl.md',
    '2-טקסטי-בריאה-ועדן/annotated-4-Hoe.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md',
    '3-הציפור-והדג/annotated.rtl.md', '4-אנקי-וסדר-העולם/annotated-1.rtl.md', '4-אנקי-וסדר-העולם/annotated-2.rtl.md')]

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
# reserved Hebrew (regex on the niqqud-stripped line) -> transliteration regexes that license it; [] = never
RESERVED = {
    B + r'ו?ה?איכה' + E: [],
    r'קינה|קינת|קינות|קונן|מקוננ': [],
    B + r'ו?[לבכמ]?ה?כבוד|כבודו|כבודה|כבודם': [],
    r'שכינה': [],
    B + r'ו?[לבמה]?(גלות|גולה|הגלה|הוגלה|הוגלו|הגלו|גלתה|גלו)' + E: [],
    r'בת ציון|בת עמי|בת אור|בת אכד|' + B + r'ציון' + E + '|ירושלים': [],
    r'עולם': [],
    B + r'טרם' + E: [],
    r'אדמה|אדמת': [],
    B + r'ו?ה?ברא' + E + '|בראו|בראתי': [],
    B + r'ו?י?יצר' + E: [],
    r'תהום': [],
    r'מלאכה|מלאכת': [],
    r'אלהים|אלוהים': [],
    r'נטש|נוטש': [r'muš₃'],
    r'עזב|עוזב': [r'taka₄|tag₄|da₁₃|\bšub|-šub'],
    r'ארר|ארור|אורר': [r'nam\b.*ku₅|nam-ku₅|nam ku₅|na-aĝ₂\b.*kud'],
    r'קלל|קללה|קללת': [r'aš₂?\b.*bal|aš₂?-bal'],
    B + r'ו?[לב]?ה?(תל|תלים|תלי|תלה)' + E: [r'du₆'],
    B + r'ו?[לבמהשכ]{0,2}(ה?תנכר|ינכר|נכר|נוכר|ניכר)': [r'kur₂'],
    r'אויב|אויבים|כאויב': [r'erim₂|kur₂'],
    r'טיט': [r'(^|\s)im(-|\s|$)'],
    B + r'ו?(ה|י|ת|א|נ|ל)?שוב' + E + '|' + B + r'ו?(ה|י|ת|א|נ|ל)שיב|ישובו|ישוב|תשוב': [r'\bgur|-gur|gi₄|gi4|\bgi\b'],
    r'טוב|טובה|טובים|טובות': [r'dug₃|du₁₀'],
    r'ברך|ברכ|יבורך|מבורך': [r'šud₃|dub₃'],
    B + r'ו?[לבמה]?(עוף|עופות|עף|עפה|עפו|יעוף|תעוף)' + E: [r'\bdal|-dal'],
    B + r'ו?ה?עבד|עבוד': [r'kiĝ₂|kin\b'],
}
TRAPS = {  # stripped token (prefixes allowed) -> (name, transliteration regex)
    'אותו': ('Utu (אוּתוּ)', r'\{d\}utu\b'), 'איננה': ('Inana (אִינַנָּה)', r'inana|inanna'),
    'אור': ('Urim / Ki-ur (אוּר)', r'urim|ki-ur₃'), 'אומה': ('Umma (אוּמָּה)', r'umma\{ki\}'),
    'באו': ('Bau (בָּאוּ)', r'ba-u₂'), 'אן': ('An (אַן)', r'(^|\s)an-(ne₂|ra|na)|\{d\}an\b'),
    'שומר': ('Sumer (שׁוּמֶר)', r'ki-en-gi'), 'כש': ('Keš (כֵּשׁ)', r'keš₃'), 'שרא': ('Šara (שַׁרָא)', r'šara'),
    'ציר': ('*ra-gaba* (צִיר, always vocalized; 2026-10-21)', r'ra-gaba'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
# fixed refrains: (transliteration regex, required Hebrew regex on the stripped `>` line, description)
FORMULAS = [
    (r'muš₃ mi-ni-in-ga amaš-a-na lil₂-e', r'נטש(ה)?, את דיר(ו|ה) – למשב\.$', 'LU 1–34 refrain (renderings §3)'),
    (r'^uru₂ a-še-er gig-ga a-še-er-zu ĝar-ra$', r'^עיר – אנחה מרה, אנחתך שומה!$', 'LU 39'),
    (r'^a-še-er-zu gig-ga-am₃ uru₂ a-še-er-zu ĝar-ra$', r'^אנחתך מרה היא, עיר – אנחתך שומה!$', 'LU 40, 43'),
    (r'a-še-er gig-ga-am₃ a-še-er-zu ĝar-ra$', r' – אנחה מרה היא, אנחתך שומה!$', 'LU 47–61'),
    (r'uĝ₃-e še am₃-ša₄$', r'– העם נוהה\.?$', 'the people moan (LU 172–)'),
    (r'mu(-un)?-na-te er₂ gig i₃-še₈-še₈$', r'ני?גשה אליו – דמעות מרות היא בוכה\.$', 'LU 81–83 (renderings §3)'),
    (r'en₃-še₃', r'עד מתי', '*en₃-še₃* = עד מתי'),
    (r'me-li-e-a', r'אוי לי', '*me-li-e-a* = אוי לי'),
    (r'nam\b.*ku₅|nam-ku₅|nam ku₅|na-aĝ₂\b.*kud', r'אר(ר|ור|רה|רו)', '*nam … ku₅* = ארר'),
    # the cross-corpus harmonization (2026-10-21): one Hebrew per source word in all corpora
    (r'za-gin₃', r'ספיר', '*za-gin₃* = סַפִּיר (decision 1)'),
    (r'šu-ur₂-men', r'שורבין', '*šu-ur₂-men* = שׁוּרְבִּין (decision 3)'),
    (r'ra-gaba', r'(^|[\s־])[והבלמכש]{0,2}ציר', '*ra-gaba* = צִיר (decision 4)'),
    (r'sizkur₂', r'תפיל', '*sizkur₂* = תְּפִלָּה (decision 6)'),
    (r'a-ra-zu', r'תחנון', '*a-ra-zu* = תַּחֲנוּן (decision 6)'),
    (r'(^|[\s-])mušen($|[\s-])', r'צי?פו?ר', '*mušen* = צִפּוֹר (decision 7)'),
    (r'guru₇', r'כרי', '*guru₇* = כְּרִי (decision 11)'),
    (r'en₃-du(?![₀-₉])', r'זמר', '*en₃-du* = זִמְרָה (decision 12)'),
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
    """[(label, transliteration)] from an etcsl2md transliteration.md; segment X line N -> label XN."""
    out, seg = [], ''
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
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
    src = etcsl_lines(P['etcsl'])
    srcd = dict(src)
    labels = [k for k, _ in src]
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
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../lament_tools.py build ' + key +
            ' from translation--intro.rtl.md and the annotated `>` lines (section headings = the annotated `## ` lines;\n'
            'footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated file(s) and rebuild.\n-->\n\n')
    out, notes, n = [], [], 0
    for kind, v in sections(paths):
        if kind == 'h':
            out.append(f'\n## {v}\n')
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


def grep(key, pat):
    files = []
    for k in (list(PROJECTS) if key == 'all' else [key]):
        P = PROJECTS[k]
        files += [os.path.join(HERE, P['dir'], a) for a in P['annotated']]
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


def lines(key, rng):
    src = etcsl_lines(PROJECTS[key]['etcsl'])
    a, _, b = rng.partition('-')
    labels = [k for k, _ in src]
    i, j = labels.index(a), labels.index(b or a)
    for k, t in src[i:j + 1]:
        print(f'{k}. {t}')


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
    if a[0] == 'lines' and len(a) > 2:
        lines(a[1], a[2])
        return
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
