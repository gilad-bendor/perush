# Verify the LH annotated files (and translation.rtl.md if present).
# usage: python3 -I verify.py [file-number ...] [--strict]      (no number = every annotated file that exists)
# Checks:
#  1. entries: the "### <line>" entries of each file are the composite lines of its range, in order; lines not yet
#     drafted are reported as a count (an error with --strict, or when the file has no "טרם תורגם" placeholder);
#  2. sections: every "## §N (a–b)" heading covers exactly the composite lines of law N, and each law is one section;
#  3. exactly one "> " Hebrew line per entry;
#  4. reserved words absent from the ">" lines (renderings.md §4);
#  5. formula consistency: where the CDLI normalization of a line matches a fixed formula, the (niqqud- and
#     bracket-stripped) Hebrew contains the fixed Hebrew (renderings.md §1);
#  6. identical normalizations (>= 2 words) -> identical Hebrew (listed for review, not counted as errors);
#  7. translation.rtl.md lines == annotated ">" lines (when every file exists and no number is given).
# Written 2026-10-17 for חוקים-ובריתות/2-חוקי-חמורבי.
import sys, re, os, glob, collections, unicodedata
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lh_config as C

HERE = C.HERE


def strip(s):
    s = unicodedata.normalize('NFC', s)
    return re.sub('[֑-ֽֿ-ׇ]', '', s)  # keep maqaf U+05BE


def bare(s):
    return re.sub(r'\s+', ' ', re.sub(r'[\[\]⟨⟩{}()?*…]', ' ', strip(s))).strip()


def parse_annot(fn):
    ents = []; secs = []; cur = None; placeholders = []
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip('\n')
        if l.startswith('## '):
            secs.append({'head': l[3:], 'ents': []}); cur = None; continue
        if 'טרם תורגם' in l and l.strip().startswith('<!--'):
            placeholders.append(l.strip())
        m = re.match(r"### (\d+'?)\s*$", l)
        if m:
            cur = {'n': m.group(1), 'heb': [], 'sec': secs[-1]['head'] if secs else ''}
            ents.append(cur)
            if secs:
                secs[-1]['ents'].append(m.group(1))
            continue
        if cur is not None and l.startswith('> '):
            cur['heb'].append(l[2:].strip())
    return ents, secs, placeholders


NB = r'(?<![א-ת])'
NE = r'(?![א-ת])'
RESERVED = [NB + w + NE for w in ['יומת', 'יומתו', 'ויומת', 'נגח', 'הנגח', 'הועד', 'והועד', 'אלהים', 'האלהים', 'נקי', 'ונקה', 'נקה',
                                   'חפשי', 'לחפשי', 'מהומה', 'מטר', 'שחין', 'קללה', 'צדקה', 'טרף', 'טרפה', 'מחתרת', 'במחתרת', 'רעהו', 'רעך',
                                   'יסקל', 'סקול', 'פדיון', 'פלילים', 'בפלילים', 'אסון', 'ירפא', 'ורפא', 'רפא', 'ינצו', 'יריבן', 'מרצע',
                                   'ברית', 'תורה', 'התורה']] + \
    [r'שמר', r'(\S+) תחת \1', NB + r'ו?ירצע' + NE, NB + r'ו?רצע' + NE]
RESERVED_RE = [re.compile(p) for p in RESERVED]
# `משפט` is allowed only for its cognate *šipṭu* (corpus renderings §5; LH has it once, epil. 3429')
MISHPAT = re.compile(NB + r'[ובלה]*משפט(ים|י)?' + NE)

# (normalization regex, Hebrew regex that must be present in the bare Hebrew line, label)
FORMULAS = [
    (r'^(u )?šumma\b', NB + r'ו?אם' + NE, 'šumma = אם'),
    (r'\bšumma awīlum\b(?! šū)', r'אם איש', 'F1'),  # 'šumma awīlum šū' = 'אם האיש ההוא' (F1 + F2; T2, epil. 3312')
    (r'\bawīlum šū\b', r'האיש ההוא', 'F2'),
    (r'\bawīlam šuāti\b', r'האיש ההוא', 'F2'),
    (r'\biddâk\b', NB + r'ו?[ית]הרג' + NE, 'F3'),  # T8: a feminine subject (the ale-wife, §109) = `תהרג`
    (r'\biddakkū\b', NB + r'ו?יהרגו' + NE, 'F3'),
    (r'\bidukkūšu\b', r'יהרגוהו', 'F4'),
    (r'\binaddin\b', r'[ית]תן', 'F5'),  # T5: a feminine subject (the mother, §150) = `תתן`
    (r'\binaddinū\b', r'יתנו', 'F5'),
    (r'\bišaqqal\b', r'ישקול', 'F6'),
    (r'\bišaqqalū\b', r'ישקלו', 'F6'),
    (r'\biriab\b', r'יחליף', 'F7'),
    (r'\biri(a|ā)bbū|\biriabū', r'יחליפו', 'F7'),
    (r'\bušallam', r'ישל[םמ]', 'F8'),  # T11: the plural `ישלמו` (§172) has a medial mem
    (r'\bileqqe', r'[ית]קח', 'F9'),  # T8: a feminine subject (§111) = `תקח`
    (r'ana š[iī]mtim', r'לגורל', 'F11'),
    (r'maḫar ilim', r'לפני האל', 'F12'),
    (r'\bnīš ilim\b', r'חיי האל', 'F13'),
    (r'\bmār awīlim\b', r'בן איש', 'F16'),
    (r'\bmārat awīlim\b', r'בת איש', 'F16'),
    (r'\baššat awīlim\b', r'אשת איש', 'F16'),
    (r'\bwarad awīlim\b', r'עבד איש', 'F16'),
    (r'\bamat awīlim\b', r'אמת איש', 'F16'),
    (r'\bmuškēn', r'מסכן', 'F16'),
    (r'\bbēl (alpim|bītim|eqlim|kirîm|ḫulqim|ḫubullim|awātim|aššatim|wardim|amtim)\b', r'בעל', 'F17'),
    (r'\brugummâm\b', r'תביעה', 'F18'),
    (r'\bnakkāp', r'נגף', 'F32'),
    (r'\bikkip', r'נגף', 'F32'),
    (r'\bušēdī', r'הודיע', 'F32'),
    (r'\bkišp', r'כשפ', 'F34'),
    (r'\bandurār', r'דרור', 'F24'),
    (r'\bmaṣṣarūt', r'נצירה', 'F25'),
    (r'\b(imtaḫaṣ|imḫaṣ|amḫaṣ|maḫāṣ|imtaḫṣ|mitḫuṣ)', r'מח[וי]?[צץ]', 'F29'),  # T5: the final form ץ (`מחץ`)
    (r'\bdayyān', r'דיינ|דיין', 'F35'),
    (r'\bdīn(um|am|im|ām|āt|šu)', r'דין|דיני|דינ', 'F35'),
    (r'\bmīšar', r'מישרים', 'F38'),
    (r'\bš[iī]b[iī](mi)?\b|\bš[iī]bū\b', r'עדים|עדיו|עדי', 'F15'),
    (r'\b(iqallû|qalû)', r'קל', 'F28'),
    (r'\btamkār', r'תגר', 'F41'),
    (r'\bekall', r'היכל', 'F42'),
    (r'\bḫulq', r'אבד', 'F22'),
    (r'\b(ištariq|išriq|šarrāq|šarāq|išriqu)', r'גנב', 'F21'),
    (r'\bnārum\b|\bnārim\b', r'נהר', 'F33'),
    (r'\bnadīt', r'נדית', '§2'),
    (r'\bqadišt', r'קדש', '§2'),
    (r'\balmatt', r'אלמנ', 'cognate'),
    (r'\bšeriktu|\bšerikta|\bšeriktim|\bšeriktaša', r'שלוחים|שלוחי', '§2'),
    (r'\bterḫat', r'מהר', '§2'),
]

KEYLEMMA_TOKENS = ['šumma', 'awīlum', 'iddâk', 'inaddin', 'išaqqal', 'iriab', 'ušallam', 'ileqqe', 'utâr', 'maḫar', 'kīma']


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    strict = '--strict' in sys.argv
    L = C.parse_composite(); byn = {x['n']: x for x in L}
    lawlines = collections.OrderedDict()
    for x in L:
        if x['law']:
            lawlines.setdefault(x['law'], []).append(x['n'])
    want = args or [f[0] for f in C.FILES if glob.glob(os.path.join(HERE, f'annotated-{f[0]}--*.rtl.md'))]
    probs = 0; heb_by_norm = collections.defaultdict(set); allents = []; missing_total = 0
    for f in C.FILES:
        num, slug, a, b, title = f
        if num not in want:
            continue
        files = glob.glob(os.path.join(HERE, f'annotated-{num}--*.rtl.md'))
        if not files:
            print(f'file {num}: no annotated file'); continue
        ents, secs, ph = parse_annot(files[0]); allents += ents
        exp = [x['n'] for x in L if C.lineno_key(a) <= C.lineno_key(x['n']) <= C.lineno_key(b)]
        got = [e['n'] for e in ents]
        extra = [x for x in got if x not in exp]
        missing = [x for x in exp if x not in got]
        if extra:
            probs += 1; print(f'file {num}: extra entries {extra[:20]}')
        order = [x for x in got if x in exp]
        if order != [x for x in exp if x in got]:
            probs += 1
            for i, (x, y) in enumerate(zip(order, [x for x in exp if x in got])):
                if x != y:
                    print(f'file {num}: order differs at #{i}: got {x}, expected {y}'); break
        if len(set(got)) != len(got):
            probs += 1; print(f'file {num}: duplicate entries {[k for k, v in collections.Counter(got).items() if v > 1][:10]}')
        if missing:
            missing_total += len(missing)
            laws_missing = sorted({byn[x]['law'] or byn[x]['section'] for x in missing}, key=lambda s: (len(s), s))
            msg = f'file {num}: {len(missing)} lines not drafted (laws/sections: {", ".join(laws_missing[:40])})'
            if strict or not ph:
                probs += 1; msg = 'ERROR ' + msg
            print(msg)
        # sections
        for s in secs:
            m = re.match(r'§(\d+)(?:[–-](\d+))?\s*\(', s['head'])
            if not m:
                continue
            law = m.group(1) + ('-' + m.group(2) if m.group(2) else '')
            expl = lawlines.get(law)
            if expl is None:
                probs += 1; print(f'file {num}: section §{law}: no such law in the composite'); continue
            if s['ents'] != expl:
                probs += 1; print(f'file {num}: section §{law} has lines {s["ents"][:3]}…{s["ents"][-2:]} but the law has {expl[0]}…{expl[-1]} ({len(expl)})')
        for e in ents:
            if len(e['heb']) != 1:
                probs += 1; print(f'file {num} {e["n"]}: {len(e["heb"])} Hebrew lines'); continue
            h = strip(e['heb'][0]); hb = bare(e['heb'][0])
            for r in RESERVED_RE:
                if r.search(h):
                    probs += 1; print(f'file {num} {e["n"]}: reserved /{r.pattern}/ in: {h}')
            s = byn.get(e['n'])
            if re.search(NB + r'[ובלה]*(נגף|נגפו|ינגף|הנוגף|נַגָּף)' + NE, h) and not (s and re.search(r'nak[aā]p|ikkip|nakkāp|munakkip|ikkipū', s['ts'])):
                probs += 1; print(f'file {num} {e["n"]}: `נגף` without *nakāpu*: {h}')
            if MISHPAT.search(h) and not (s and re.search(r'šipṭ', s['ts'])):
                probs += 1; print(f'file {num} {e["n"]}: `משפט` without *šipṭu*: {h}')
            if not s:
                continue
            for pat, heb, lab in FORMULAS:
                if re.search(pat, s['ts']) and not re.search(heb, hb):
                    probs += 1; print(f'file {num} {e["n"]}: {lab}: /{heb}/ expected for "{s["ts"]}"; got: {h}')
            if len(s['ts'].split()) >= 2:
                heb_by_norm[s['ts']].add(hb)
    for nrm, hs in heb_by_norm.items():
        if len(hs) > 1:
            print(f'REVIEW identical normalization, different Hebrew: {nrm}')
            for h in sorted(hs):
                print('      ', h)
    tr = os.path.join(HERE, 'translation.rtl.md')
    if os.path.exists(tr) and not args:
        tl = {}
        for l in open(tr, encoding='utf-8'):
            m = re.match(r"\*\*(\d+'?)\*\* (.*?)\s*$", l.rstrip())
            if m:
                tl[m.group(1)] = re.sub(r'\[\^[^\]]+\]', '', m.group(2)).strip()
        for e in allents:
            if e['heb'] and tl.get(e['n']) != e['heb'][0].strip():
                probs += 1; print(f'translation mismatch {e["n"]}: {tl.get(e["n"])!r} vs {e["heb"][0]!r}')
        print('translation lines:', len(tl), 'annotated entries:', len(allents))
    print('entries:', len(allents), 'not drafted:', missing_total, 'problems:', probs)


main()
