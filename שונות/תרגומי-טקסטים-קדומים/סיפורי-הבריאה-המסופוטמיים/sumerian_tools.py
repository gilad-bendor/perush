"""Verify and build the Sumerian projects 3-7 of the creation corpus (Bird and Fish; Enki and the World Order;
the Farmer's Instructions; Hoe and Plough; Summer and Winter).

Written 2026-10-19 for `3-הציפור-והדג/` and `4-אנקי-וסדר-העולם/`; projects 5-7 added 2026-10-21 (Round 3, run 1) with
their own gates (`RESERVED_5_7`, `TOKEN_GATES_5_7`: renderings.md §9). Add a project as a PROJECTS entry.

Usage (from any directory):
  python3 -I sumerian_tools.py verify KEY [--strict]   checks (exit 1 on an error):
      1. every entry `### <label>` of the annotated file(s) has exactly one `> ` Hebrew line and one backticked
         transliteration line; no label is duplicated;
      2. coverage: the labels equal the ETCSL composite's line list, in order (with --strict: also no `[טרם תורגם]`);
      3. RESERVED strings (vocalization stripped) appear in a `>` line only when the entry's transliteration contains
         an allowed Sumerian word (listed per string); otherwise an error;
      3a. (projects 5-7) RESERVED_5_7 strings and TOKEN_GATES_5_7 (whole words, Hebrew prefixes stripped) likewise;
      4. TRAPS: names that read as Hebrew words when unvocalized (Utu, Uttu, Inana, *me*; Sumer, Urim) must be vocalized;
         Inana must be `אִינַנָּה`: the alef spelling (`אִינַאנָּה`, `אינאנה`) is an error even when vocalized
         (cross-corpus harmonization, 2026-10-21);
      5. translation.rtl.md (if present): its numbered lines equal the annotated `>` lines one to one;
      and it REPORTS (not an error) every pair of entries with identical transliteration but different Hebrew.
  python3 -I sumerian_tools.py build KEY                build translation.rtl.md from translation--intro.rtl.md +
      the annotated files: `## ` section headings, one numbered line `**N** …` per entry; an optional bullet
      `- **הערת שוליים:** …` becomes a footnote of that line. Then verify the result.
  python3 -I sumerian_tools.py grep KEY '<regex>'       every `>` line (stripped of niqqud) matching the regex, with label
      and transliteration (for consistency work; KEY may be "all" = projects 3, 4 and project 2's Sumerian texts).
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, '..', 'sources'))
PROJECTS = {
    '3': dict(dir='3-הציפור-והדג', annotated=['annotated.rtl.md'],
              etcsl='ETCSL/5.3.5--Debate-Bird-and-Fish/transliteration.md'),
    '4': dict(dir='4-אנקי-וסדר-העולם', annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md'],
              etcsl='ETCSL/1.1.3--Enki-and-the-World-Order/transliteration.md'),
    '5': dict(dir='5-הוראות-האיכר', annotated=['annotated.rtl.md'],
              etcsl='ETCSL/5.6.3--Farmers-Instructions/transliteration.md', gates57=True),
    '6': dict(dir='6-המעדר-והמחרשה', annotated=['annotated.rtl.md'],
              etcsl='ETCSL/5.3.1--Debate-Hoe-and-Plough/transliteration.md', gates57=True),
    '7': dict(dir='7-הקיץ-והחורף', annotated=['annotated.rtl.md'],
              etcsl='ETCSL/5.3.3--Debate-Summer-and-Winter/transliteration.md', gates57=True),
}
EXTRA_GREP = ['2-טקסטי-בריאה-ועדן/annotated-2-Enki-Ninhursag.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-3-Enki-Ninmah.rtl.md',
              '2-טקסטי-בריאה-ועדן/annotated-4-Hoe.rtl.md', '2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md']

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
# reserved Hebrew string (regex on the stripped line) -> transliteration words that allow it (regex); [] = never
RESERVED = {
    r'שרץ|שרצ|ישרצו': [],
    r'רמש|רומש': [],
    r'תנין|תנינ': [],
    r'נפש חיה': [],
    r'(^|[\s־"\'(])(ו?ה?)ברא|בראו': [],          # ברא (also inside בראותו, בראשונה): never
    r'(^|[\s־"\'(])ו?י?יצר|יצרו': [],
    r'עדן': [],
    r'רקיע': [],
    r'תהום': [],
    r'הבדיל|הבדל|יבדיל|ויבדל': [],
    r'למינ': [],
    r'טרם': [],
    r'עולם': [],
    r'אדמה|אדמת|האדמה': [],
    r'מלאכה|מלאכת': [],
    r'(^|[\s־"\'(])ו?[לבמ]?ה?עוף|עופות': [r'dal'],      # the noun עוף is not used for mušen (= צפור)
    r'(^|[\s־"\'(])ו?[יתנא]?עופ|(^|\s)ו?עף|עפה|עפו': [r'dal'],
    r'כנף|כנפ': [r'\bpa\b|\bpa-|a₂'],
    r'טוב|טובה|טובים|טובות': [r'dug₃|du₁₀'],
    r'ברך|ברכ|יבורך|מבורך': [r'šud₃|šud|dub₃|ka-aš'],
    r'(^|\s)ו?ה?עבד|עבוד': [r'kiĝ₂|kin\b|arad|ARAD'],      # arad "slave" = עבד (projects 5-7; law corpus *wardum*)
    r'צלם|דמות': [],
    r'פרו ורבו': [],
}
# projects 5-7 (renderings.md §9.6): substring gates on the stripped line, as RESERVED
RESERVED_5_7 = {
    r'חרש|חורש|חריש': [r'ur₁₁|uru₄|apin'],          # plough: only for uru₄ / apin
    r'עצבון|עיצבון': [],                              # Gen 3:17 (the verb dim₂ is plene עיצב)
    r'דרדר': [],
    r'קיץ|קייץ': [r'e₂-me-eš|e-me-eš|emeš'],          # Summer (also the hiphil "awake": avoid)
}
# projects 5-7: whole-word gates. Each token is tested with every Hebrew prefix split (ו, ה, ב, ל, מ, כ, ש and their
# pairs); a token whose base matches the regex needs the transliteration regex ([] = never). EXEMPT tokens pass.
TOKEN_GATES_5_7 = [
    (r'^(חורף|חורפ\S*)$', [r'en-te-en|en-te-na|enten'], 'Winter `חֹרֶף` only for *en-te-en*'),
    (r'^חרף$', [], 'defective `חרף`: write plene `חורף` (Winter) or `חירף` (taunt)'),
    (r'^(זרע|זרעו|זרעה|זרעך|זרעם|זרעים|זרעי|זורע|זורעים|זורעת|יזרע|יזרעו|תזרע|תזרעו|לזרוע|זרוע|הזריע|הזריעה|מזריע|זריעה)$',
     [r'numun|a ri|a-ri|\ba₂|zag'], '`זרע` only for *numun* / *a ri* (`זְרוֹעַ` "arm": *a₂*)'),
    (r'^(קציר|קצירה|קצירו|קצירך|קצירם|קצר|קצרו|קוצר|קוצרים|קוצרת|יקצר|יקצרו|תקצר|תקצרו|לקצור|קצור|קצורה|קצרה|קצרים)$',
     [r'buru₁₄|gur₁₀'], '`קציר` / `קצר` only for *buru₁₄* / *gur₁₀*'),
    (r'^(קר|קור|קרה|קרים|קרות|קרירות)$', [r'sed₄|šed₇|ḫalba|sed\b'], '`קר` / `קור` only for *sed₄* (a cold word)'),
    (r'^(חום|חם)$', [r'šeĝ₆|kum₂|izi|bil₂|ud'], '`חום` / `חם` only for a heat word'),
    (r'^(לקט|ליקט|ליקטה|ליקטו|לוקט|לוקטים|לוקטות|מלקט|מלקטים|מלקטות|ילקט|ילקטו|תלקט|תלקטו|ללקט|לקטו|לקיטה)$',
     [r'de₅'], '`לקט` only for *de₅* (= Akk. *laqātu*)'),
    (r'^(גן|גנים|גני|גנה|גנו|גנות|גנן|גננים|גנני)$', [r'kiri₆'], '`גן` / `גנן` only for *kiri₆*'),
    (r'^(מנחה|מנחת|מנחות|מנחתו|מנחתי|מנחתך|מנחותיו)$', [r'sa₂-dug₄'], '`מנחה` only for *sa₂-dug₄*'),
    (r'^(עפר|עפרה|עפרו)$', [r'saḫar'], '`עפר` only for *saḫar*'),
    (r'^(נח|נחו|ינוח|ינוחו|תנוח|הניח|הניחו|הנח|הניחי|מנוחה|לנוח|נוחו)$', [r'ne-ḫa|ne-ḫe|ne-eḫ'],
     '`נח` / `הניח` / `מנוחה` only for *ne-ḫa* (Akk. *nēḫu*)'),
    (r'^(נטע|נוטע|ניטע|נטעו|יטע|ייטע|לנטוע|נטיעה|נטעה)$', [], '`נטע` never (Gen 2:8, 9:20: literal `הֶעֱמִיד` / `בָּנָה`)'),
    (r'^(קוץ|קוצים|קוצי|קוצים)$', [], '`קוץ` never (Gen 3:18)'),
    (r'^(זעה|זיעה|זעת|זיעת)$', [], '`זיעה` never (Gen 3:19)'),
    (r'^(עצב|עצבו|עצבה|עצבי|עצבך|עצבם)$', [], 'unvocalized `עצב` (the noun of Gen 3:16–17): the verb *dim₂* is plene `עיצב`'),
    (r'^(ארור|ארורה|ארורים|אררה|אורר|אוררה)$', [], '`ארור` never (Gen 3:17)'),
    (r'^(שבת|שבתו|ישבתו|ישבות|תשבות|שובת|שבתה|שבות)$', [], '`שבת` never (Gen 8:22; `לשבת` "to sit": write `לֵישֵׁב`)'),
    (r'^(קין|קיין|הבל)$', [], '`קין` / `הבל` never'),
    (r'^(תבה|תיבה|התבה|התיבה)$', [], '`תבה` never'),
]
# ordinary words that a prefix split would turn into a gated word (checked after stripping a leading ו / ה / וה)
TOKEN_EXEMPT_5_7 = {'מגן', 'במגן', 'נוחה', 'בקר', 'בקרים', 'בקרו', 'בקרה', 'מקור', 'מקורו', 'מקורה', 'שקר', 'שקרים',
                    'מקרה', 'לחם', 'לחמו', 'לחמה', 'לחמם', 'לחמי', 'לחמך', 'מעצב', 'מעצבת', 'מעצבים', 'מעצבות',
                    'מנחה', 'מנחת', 'מנחות', 'מנחתו', 'הנחה', 'הגנה', 'כתבה', 'כתיבה', 'מכתבה', 'שגנו'}
HEB_PREFIXES = ['', 'ו', 'ה', 'ב', 'ל', 'מ', 'כ', 'ש', 'וה', 'וב', 'ול', 'ומ', 'וכ', 'וש', 'שב', 'של', 'שה', 'כש',
                'מה', 'לה', 'בה', 'כה', 'שמ', 'ושה', 'ושב', 'ושל', 'ומה', 'ובה', 'ולה', 'וכש']
TRAPS = {  # stripped token (prefixes allowed) -> (name, transliteration regex): must carry niqqud when the name is there
    'אותו': ('Utu (אוּתוּ)', r'\butu\b'), 'אוטו': ('Uttu (אוּטּוּ)', r'uttu'),
    'איננה': ('Inana (אִינַנָּה)', r'inana|inanna'),
    'שומר': ('Sumer (שׁוּמֶר)', r'ki-en-gi'), 'אור': ('Urim (אוּר)', r'urim'),
}
WRONG_FORMS = {  # stripped token (prefixes allowed) -> (correct form, transliteration regex): an error even when vocalized
    'אינאנה': ('Inana as `אִינַנָּה` (not `אִינַאנָּה`; harmonization 2026-10-21)', r'inana|inanna'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
BRK = re.compile(r'[\[\]⸢⸣⟨⟩«»]')


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
                ent[cur] = dict(heb=[], tr=[], fn=None, file=os.path.basename(p), section=None)
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
                e['tr'].append(ln.strip('`').strip())
            elif ln.startswith('- **הערת שוליים:**'):
                e['fn'] = ln[len('- **הערת שוליים:**'):].strip()
    return order, ent


def sections(paths):
    """Yield ('h', text) for ## headings and ('l', label) for entries, in file order."""
    for p in paths:
        if not os.path.exists(p):  # a not-yet-written file of a multi-file project
            continue
        for ln in open(p, encoding='utf-8'):
            ln = ln.rstrip('\n')
            if ln.startswith('## '):
                yield 'h', ln[3:].strip()
            m = re.match(r'^### (\S+)\s*$', ln)
            if m:
                yield 'l', m.group(1)


def etcsl_labels(rel):
    out = []
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        m = re.match(r'^(\d+[A-Za-z]*)\. ', ln)
        if m:
            out.append(m.group(1))
    return out


def norm_tr(s):
    s = re.sub(r'\*[^*]*\*', '', s)  # ETCSL notes
    s = re.sub(r'\([^)]*\)', '', s)
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩]', '', s).strip()


def check_reserved(label, heb, tr, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED.items():
        if re.search(pat, h):
            if allow and any(re.search(a, tr) for a in allow):
                continue
            problems.append(f'{label}: reserved string /{pat}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ''))


def check_tokens_5_7(label, heb, tr, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED_5_7.items():
        if re.search(pat, h) and not (allow and any(re.search(a, tr) for a in allow)):
            problems.append(f'{label}: reserved string /{pat}/ in "{heb}"' + (f' (allowed only with {allow})' if allow else ''))
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—…*⟨⟩{}]+', h):
        for part in tok.split('־'):
            if not part:
                continue
            # an exempt ordinary word is tested only as itself (with ו / ה), not by splitting off its first letters
            exempt = part in TOKEN_EXEMPT_5_7 or re.sub(r'^(וה|ו|ה)', '', part) in TOKEN_EXEMPT_5_7
            pres = ['', 'ו', 'ה', 'וה'] if exempt else HEB_PREFIXES
            for pat, allow, what in TOKEN_GATES_5_7:
                hit = any(part.startswith(pre) and re.search(pat, part[len(pre):]) for pre in pres
                          if len(part) > len(pre))
                if hit and not (allow and any(re.search(a, tr) for a in allow)):
                    problems.append(f'{label}: "{part}" – {what}')
                    break


def check_traps(label, heb, problems, tr=''):
    for tok in re.split(r'[\s,.;:!?"\'()\[\]–—]+', FN.sub('', heb)):
        if not tok:
            continue
        st = strip(tok)
        for part in st.split('־'):
            base = PREFIX.sub('', part, count=1)
            for trap, (what, rx) in TRAPS.items():
                if (part == trap or base == trap) and re.search(rx, tr):
                    if not NIQQUD.search(tok):
                        problems.append(f'{label}: unvocalized "{tok}" reads as a Hebrew word: write {what}')
            for wrong, (what, rx) in WRONG_FORMS.items():
                if (part == wrong or base == wrong) and re.search(rx, tr):
                    problems.append(f'{label}: "{tok}": write {what}')
        if re.search(r'־מה$', st) and re.search(r'\bme\b', tr) and not NIQQUD.search(tok.split('־')[-1]):
            problems.append(f'{label}: *me* must be vocalized (`הַ־מֶה`), got "{tok}"')


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
    if not strict and any(os.path.exists(p) for p in paths):  # a not-yet-written file of a multi-file project is a note
        for m in [x for x in problems if x.startswith('missing file')]:
            problems.remove(m)
            notes.append(m + ' (not yet drafted)')
    src = etcsl_labels(P['etcsl'])
    if order != src:
        missing = [x for x in src if x not in ent]
        extra = [x for x in order if x not in src]
        msg = f'coverage: {len(order)} entries vs {len(src)} ETCSL lines; missing {len(missing)} {missing[:12]}; extra {extra[:12]}'
        (problems if (strict or extra or not missing) else notes).append(msg)
    pending = 0
    for k in order:
        e = ent[k]
        if len(e['heb']) != 1:
            problems.append(f'entry {k}: {len(e["heb"])} ">" lines')
            continue
        if not e['tr']:
            problems.append(f'entry {k}: no backticked transliteration line')
        heb = e['heb'][0]
        if 'טרם תורגם' in heb:
            pending += 1
            continue
        # gates see the words whole: brackets inside a word (`ק[יץ]`, `חור⟨ף⟩`) and in the transliteration
        # (`e₂-[me]-⸢eš⸣`) are removed first (2026-10-22, project 7)
        gheb, gtr = BRK.sub('', heb), BRK.sub('', e['tr'][0] if e['tr'] else '')
        check_reserved(k, gheb, gtr, problems)
        if P.get('gates57'):
            check_tokens_5_7(k, gheb, gtr, problems)
        check_traps(k, heb, problems, e['tr'][0] if e['tr'] else '')
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    # identical transliteration, different Hebrew
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb']:
            by.setdefault(norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        if len(ks) > 1 and len({re.sub(r'[\[\]"“”]', '', strip(ent[k]['heb'][0])).strip() for k in ks}) > 1 and len(t.split()) > 2:
            notes.append(f'same transliteration, different Hebrew: {ks}: {t}')
    tp = os.path.join(d, 'translation.rtl.md')
    if os.path.exists(tp):
        tr = translation_lines(tp)
        al = [(k, FN.sub('', ent[k]['heb'][0]).rstrip()) for k in order if ent[k]['heb']]
        if len(tr) != len(al):
            problems.append(f'translation.rtl.md has {len(tr)} numbered lines, annotated {len(al)}')
        for (k1, h1), (k2, h2) in zip(al, tr):
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
    problems = []
    order, ent = parse_annotated(paths, problems)
    intro = open(os.path.join(d, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../sumerian_tools.py build ' + key +
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
    keys = list(PROJECTS) if key == 'all' else [key]
    for k in keys:
        P = PROJECTS[k]
        files += [os.path.join(HERE, P['dir'], a) for a in P['annotated']]
    if key == 'all':
        files += [os.path.join(HERE, x) for x in EXTRA_GREP]
    rx = re.compile(pat)
    for f in files:
        if not os.path.exists(f):
            continue
        order, ent = parse_annotated([f], [])
        for k in order:
            for h in ent[k]['heb']:
                if rx.search(strip(h)):
                    print(f'{os.path.basename(os.path.dirname(f))}/{os.path.basename(f)} {k}: {h}   ‹{ent[k]["tr"][0] if ent[k]["tr"] else ""}›')


def main():
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    if a[0] == 'verify':
        sys.exit(0 if verify(a[1], '--strict' in a) else 1)
    if a[0] == 'build':
        sys.exit(0 if build(a[1]) else 1)
    if a[0] == 'grep':
        grep(a[1], a[2])
        return
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
