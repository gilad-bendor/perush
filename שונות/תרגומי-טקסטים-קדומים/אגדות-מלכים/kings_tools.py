"""Verify, build and look up the legends-of-kings corpus (אגדות-מלכים/): Enmerkar and the Lord of Aratta (ETCSL 1.8.2.3,
key EA, Sumerian) and the Sargon Birth Legend (King 1907, key SB, Akkadian).

Written 2026-10-21 (Round 2, run 6), adapted from ../קינות-על-ערים/lament_tools.py and ../בניין-המקדש/temple_tools.py.
Add a project as a PROJECTS entry.

Usage (from any directory; run with python3 -I):
  kings_tools.py verify KEY [--strict]   KEY = EA | SB. Checks (exit 1 on an error):
      1. every entry `### <label>` has exactly one `> ` Hebrew line and one backticked transliteration line, which
         equals the base text's line (ETCSL for EA, King 1907 for SB; ETCSL's *…* notes and variant parentheses
         ignored); no label is duplicated;
      2. coverage: the labels equal the base text's line list, in order (a not-yet-written file is a note; --strict:
         error, and every `[טרם תורגם]` is an error);
      3. RESERVED strings (niqqud stripped) in a `>` line only when the transliteration has a licensing word;
      4. TRAPS: names that read as Hebrew words unvocalized must carry niqqud when the name is in the transliteration
         (`>` lines and `## ` headings);
      5. FORMULAS: the fixed renderings (renderings.md §3) wherever their source occurs;
      6. translation.rtl.md (if present): its numbered lines equal the annotated `>` lines one to one;
      and REPORTS (not an error) identical transliterations with different Hebrew.
  kings_tools.py build KEY      translation.rtl.md from translation--intro.rtl.md + the annotated files (`## `
      headings, `**N** …` lines, `- **הערת שוליים:** …` bullets as footnotes); then verify.
  kings_tools.py grep KEY|all '<regex>'   `>` lines (niqqud stripped) matching; all = this corpus + the Sumerian texts
      of the lament, temple and creation corpora.
  kings_tools.py lines KEY FROM-TO        the base text's lines for a label range.
  kings_tools.py conc EA [<out.md>]       ETCSL ↔ ORACC Q000369 line concordance (ORACC's unlabelled variant lines are
      aligned by position) with a similarity check.
  kings_tools.py data EA FROM TO <out>    a translator's line-data file: ETCSL transliteration, ORACC lemma + morph,
      the ETCSL translation paragraph at its first line, and Mittermayer 2009's German line (from the OCR; check the
      PDF page before relying on it).
  kings_tools.py pars KEY FROM TO         for each line of the range, the other lines of the text with the same or a
      near-identical transliteration (ratio >= 0.75) and the Hebrew already given to them: the "earlier copies" table
      for a translator of a repeated passage.
"""
import difflib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, 'sources')
PROJECTS = {
    'EA': dict(dir='1-אנמרכר-ואדון-ארטה',
               annotated=['annotated-1.rtl.md', 'annotated-2.rtl.md', 'annotated-3.rtl.md', 'annotated-4.rtl.md'],
               base='etcsl', etcsl='ETCSL/1.8.2.3--Enmerkar-and-the-Lord-of-Aratta/transliteration.md',
               etcsl_tr='ETCSL/1.8.2.3--Enmerkar-and-the-Lord-of-Aratta/translation.md',
               oracc='ORACC/epsd2-literary--Q000369--Enmerkar-and-the-Lord-of-Aratta/Q000369--lemmatised-morph.md',
               mitt='Mittermayer-2009--Enmerkara-und-der-Herr-von-Arata--OBO-239/mittermayer-2009.txt'),
    'SB': dict(dir='2-אגדת-הולדת-סרגון', annotated=['annotated.rtl.md'], base='king',
               king='King-1907--Chronicles-concerning-Early-Babylonian-Kings-II/legend-of-sargon--King-1907-pp87-96.md'),
}
EXTRA_GREP = [os.path.join(ROOT, x) for x in (
    'קינות-על-ערים/1-הקינה-על-אור/annotated-1.rtl.md', 'קינות-על-ערים/1-הקינה-על-אור/annotated-2.rtl.md',
    'קינות-על-ערים/1-הקינה-על-אור/annotated-3.rtl.md', 'קינות-על-ערים/2-קללת-אכד/annotated-1.rtl.md',
    'קינות-על-ערים/2-קללת-אכד/annotated-2.rtl.md',
    'בניין-המקדש/1-גליליות-גודאה/annotated-A1.rtl.md', 'בניין-המקדש/1-גליליות-גודאה/annotated-A2.rtl.md',
    'בניין-המקדש/1-גליליות-גודאה/annotated-A3.rtl.md', 'בניין-המקדש/1-גליליות-גודאה/annotated-A4.rtl.md',
    'בניין-המקדש/1-גליליות-גודאה/annotated-B1.rtl.md', 'בניין-המקדש/1-גליליות-גודאה/annotated-B2.rtl.md',
    'בניין-המקדש/1-גליליות-גודאה/annotated-B3.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/annotated-2-Enki-Ninhursag.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/annotated-3-Enki-Ninmah.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/annotated-4-Hoe.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/annotated-5-Grain-Sheep.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/3-הציפור-והדג/annotated.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/4-אנקי-וסדר-העולם/annotated-1.rtl.md',
    'סיפורי-הבריאה-המסופוטמיים/4-אנקי-וסדר-העולם/annotated-2.rtl.md')]

NIQQUD = re.compile('[֑-ֽֿ-ׇ]')  # keeps the maqaf U+05BE
B = r'(^|[\s־"\'(\[–—])'          # word start
E = r'($|[\s,.;:!?"\')\]–—־])'    # word end
P = r'ו?[לבכמהש]{0,2}'            # Hebrew proclitics

# ---- reserved Hebrew (regex on the niqqud-stripped `>` line) -> transliteration regexes that license it ([] = never)
RESERVED_COMMON = {
    # inherited from the Sumerian corpora (lament §5, temple §5, creation §5)
    B + P + r'עולם': [],
    B + r'טרם' + E: [],
    r'אדמה|אדמת': [],
    B + r'ו?ה?ברא' + E + '|בראו|בראתי|נברא': [],
    r'תהום': [],
    r'מלאכה|מלאכת': [],
    r'אלהים|אלוהים': [],
    r'כבוד|כבודו|כבודה|כבודם': [],
    r'שכינה': [],
    B + r'ו?[לבכהש]{0,2}(קדוש|קודש|קדש|קדשה|הקדיש|מקודש|קדושה)' + E: [],  # not `מקדש` (gated below)
    B + P + r'מלאך|מלאכים|מלאכי' + E: [],
    r'איכה|קינה|קינת': [],
    # Gen 11 (the confusion of tongues) and Gen 10
    B + P + r'(שפה|שפת|שפתם|שפתו|שפתי|שפות)' + E: [r'šaptu|\bšap-ti|\bša-ap-ti'],
    r'דברים אחדים': [],
    B + r'ו?נ?(בלל|נבלה|יבלל|בלבל|מבולבל)': [],
    B + r'ו?[לב]?(פוץ|נפוץ|הפיץ|הפיצם|יפיץ|נפוצו|ויפץ)' + E: [],
    r'שנער|' + B + P + r'בבל' + E + '|' + B + P + r'מגדל' + E + '|' + B + P + r'מגדלים' + E: [],
    r'נעשה לנו שם|נעשה לנו': [],
    B + P + r'(חמר|החמר|בחמר)' + E: [r'esir|ESIR|iddî|iṭṭ'],
    B + P + r'(כופר|כפר|בכופר|בכפר)' + E: [r'kupr|kup-ri|ku-up-ri'],
    B + P + r'(לבנה|לבנים|לבנת|לבני|ללבנים)' + E: [r'šeg₁₂|šeg12|libitt|SIG₄|babbar|dadag'],
    B + P + r'(טיט|בטיט)' + E: [r'(^|[\s-])im(-|\s|$)|im-ma|im-e\b|ṭīd|ṭi-iṭ'],
    # Exod 2 / 4 (the birth of Moses; the heavy mouth)
    B + P + r'(תבה|תבת|התבה|בתבה)' + E: [],
    r'גומא|גמא' + E: [],
    B + P + r'(סוף|בסוף|הסוף)' + E: [],
    B + P + r'(יאור|יאר|היאורה|היאור)' + E: [],
    B + r'(משה|משיתהו|משיתיהו|ימשה|משני)' + E: [],
    B + r'ו?ת?(חמרה|ותחמרה)' + E: [],
    B + P + r'(זפת|בזפת)' + E: [],
    B + P + r'(כבד|כבדה|כבדי|כבדים|כובד)' + E: [r'dugud|kabt|kab-t|kab₂|dugud'],
    # general gated words of the Sumerian corpora
    r'טוב|טובה|טובים|טובות': [r'dug₃|du₁₀|ṭāb|ṭa-a-b|DÙG'],
    r'ברך|ברכ|יבורך|מבורך': [r'šud₃|dub₃|karāb|ka-ra-ab'],
    B + r'ו?(ה|י|ת|א|נ|ל)?שוב' + E + '|' + B + r'ו?(ה|י|ת|א|נ|ל|לה|וה|מ)שיב(ה|ו|ני|נו|ם|הו|ים)?' + E + '|' + B + r'ו?(ישובו|ישוב|תשוב|נשוב|אשוב)' + E + '|' + B + r'ו?שבה?' + E: [r'\bgur|-gur|gi₄|gi4|\bgi\b|târ|ta-a-r|tu-ur'],
    B + P + r'(עוף|עופות|עף|עפה|עפו|יעוף|תעוף)' + E: [r'\bdal|-dal|\bdal₃|i-ša-\'u|ša-\'u'],
    B + r'ו?ה?עבד|עבוד': [r'kiĝ₂|kin\b|arad₂|ARAD|ardu'],
    r'מקדש': [r'eš₃'],
    r'היכל': [r'e₂-gal|ekall'],
    r'ארור|ארר|אורר': [r'nam\b.*ku₅|nam-ku₅|nam ku₅|nam\b.*kud|ašš?\b.*bal'],
    B + P + r'(ארך|אֶרֶךְ)' + E: [],  # Uruk = אוּרוּךְ (guidelines §6.4); `ארך` only in the apparatus
    B + P + r'(נכרי|נכריה|נכרים)' + E: [r'kur₂'],
    B + P + r'(השליך|השליכה|השליכתני|השליכני|ישליך|תשליך|תשליכהו|השלכה|השליכו|השלכתי)' + E: [r'\bnadû|id-dan|id-da-an|id-di|ŠUB|šub\b|-šub|\bri\b|-ri\b|ri-ri'],
    B + P + r'(נהר|הנהר|נהרות|נהרה)' + E: [r'nāru|nâru|\[nâ\]ri|na-a-ri|id₂|íd|ÍD|\bi₇'],
    r'קרא|קורא|יקרא|נקרא|קראו': [r'sa₄|nabû|na-bi|zakār|šuma'],
}
RESERVED = {'EA': RESERVED_COMMON, 'SB': RESERVED_COMMON}

TRAPS = {  # stripped token (prefixes allowed) -> (name, transliteration regex)
    'אותו': ('Utu (אוּתוּ)', r'\{d\}utu\b'), 'איננה': ('Inana (אִינַנָּה)', r'inana|inanna'),
    'אן': ('An (אַן)', r'(^|\s)an-(ne₂|ra|na)|\{d\}an\b|\ban-na\b'),
    'שומר': ('Sumer (שׁוּמֶר)', r'ki-en-gi'), 'אור': ('Urim (אוּר)', r'urim|uri₂'),
    'אנשן': ('Anšan (אַנְשָׁן)', r'anšan'), 'אכי': ('Aqqi (אַקִּי)', r'Ak-ki'),
    'זובי': ('Zubi (זוּבִּי)', r'zubi|zu-bi'), 'שיבוט': ('*a-eštub* (מֵי־הַשִּׁבּוּט; Modern "cloning")', r'a-eštub'), 'אשתר': ('Ištar (אִשְׁתַּר)', r'Iš-tar'),
    # 2026-10-21 harmonization: *ra-gaba* = צִיר "envoy", always vocalized (unvocalized `צירי` reads "my birth pangs")
    'ציר': ('*ra-gaba* (צִיר)', r'ra₂?-gaba'), 'צירי': ('*ra-gaba* (צִירִי)', r'ra₂?-gaba'), 'צירה': ('*ra-gaba* (צִירָהּ)', r'ra₂?-gaba'),
}
PREFIX = re.compile(r'^(ו|ה|ב|ל|מ|כ|ש|וה|וב|ול|ומ|וכ|וש|שב|של|כש|מה|לה|בה)?')
FN = re.compile(r'\[\^[^\]]+\]')
# fixed formulas: (transliteration regex, required Hebrew regex on the stripped `>` line, description)
# (fixed in renderings.md §3 before drafting; a translator of the first copy may revise one with a reason)
FORMULAS = {'EA': [
    (r'u₃-na-dug₄ u₃-na-de₃-taḫ', r'כשתדבר אליו, כשתוסיף לו', 'the commission (§3)'),
    (r'e-ne-ra dug₄-mu-na-ab$', r'אמור לו!', '"say to him!" (§3)'),
    (r'^ur₅-gin₇ ḫu-mu-na-ab-be₂-a-ka$', r'^כאשר כך אמר לו', '"when he had spoken thus" (§3)'),
    (r'ḫur-saĝ 5 ḫur-saĝ 6 ḫur-saĝ 7-e im-me-re-bal-bal', r'^הררים חמישה, הררים שישה, הררים שבעה – חצה\.$', 'the journey (§3)'),
    (r'^igi mu-un-il₂ aratta\{ki\}-aš ba-te$', r'^עיניים נשא – אל ארטה קרב\.$', 'the arrival (§3)'),
    (r'ĝiri₃ ḫul₂(-la)? m[iu]-ni-in-gub$', r'רגל שמחה הציב\.$', 'the glad foot (§3)'),
    (r'^nam-nir-ĝal₂ lugal-a-na mu-un-zu$', r'^את סמכות מלכו – הודיע\.$', 'the authority (§3)'),
    (r'^bur₂-ra-bi inim šag₄-ga-na bi₂-ib₂?-be₂$', r'^בגלוי – את דברי לבו אומר[.:]$', '"openly" (§3)'),
    (r'^kiĝ₂-gi₄-a en aratta\{ki\}-ra mu-na-ab-bal-e$', r'^השליח – אל אדון ארטה – \(את הדבר\) מוסר:$', 'the delivery (§3)'),
    (r'mu-e-ši-in-gi₄', r'אליך שלחני', '"has sent me to you" (§3)'),
    (r'dug₄-ga-ni nam-ĝu₁₀ taḫ-a-ni nam-ĝu₁₀$', r'אמירתו, מה לי\? תוספתו, מה לי\?$', '"what is it to me" (§3)'),
    (r'lugal-ĝu₁₀ a-na bi₂-in-dug₄ a-na bi₂-in-taḫ-am₃$', r'^מלכי – מה אמר, מה הוסיף – \(הנה\):$', '"what my king said" (§3)'),
    (r'ur₅ ḫe₂-en-na-nam-ma', r'כך אכן היה', '"so indeed it was" (§3)'),
    (r'gu₃ mu-(un-)?na-de₂-e$', r'פונה:$', '*gu₃ de₂* = פונה (§3)'),
    (r'kiĝ₂-gi₄-a kur-še₃ du-ur₂$', r'לשליח ההולך אל ההר', 'the messenger going to the mountain (§3)'),
    (r'inim mu-na-ab-taḫ-e$', r'דבר מוסיף לו:$', '"adds words to him" (§3)'),
    (r'ka-ni dugud', r'פיו כבד', 'the heavy mouth (§3)'),
], 'SB': [
    (r'Ak-ki \{amêlu\}nâḳ-mê', r'אקי דולה־המים', 'Aqqi the water-drawer (§4)'),
    (r'ḳup-pi|ḳu-up-pu', r'קפה|קופה|קפת|קופת', '*quppu* = קֻפָּה (§4)'),
]}


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
    out = []
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        m = re.match(r'^(\d+[A-Za-z]*|[A-D])\. (.*?)\s*$', ln.rstrip('\n'))
        if m:
            out.append((m.group(1), m.group(2)))
    return out


def king_lines(rel):
    out = []
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        m = re.match(r'^\*\*(I{1,2}) (\d+)\*\* (.*?)(?:\s+—\s+King:.*)?\s*$', ln.rstrip('\n'))
        if m:
            out.append((f'{m.group(1)}.{m.group(2)}', m.group(3)))
    return out


def base_lines(key):
    P = PROJECTS[key]
    return etcsl_lines(P['etcsl']) if P['base'] == 'etcsl' else king_lines(P['king'])


def clean_tr(s):
    s = re.sub(r'\s*\*[^*]*\*', '', s)            # ETCSL catalogue notes
    s = re.sub(r'\s*\(\*[^)]*\)', '', s)           # ETCSL variant parentheses (*1 ms. has instead:* …)
    s = re.sub(r'(?<=[\]\w)}])[¹²³⁴⁵⁶⁷⁸⁹]+', '', s)  # King's footnote numbers
    return re.sub(r'\s+', ' ', s).strip()


def norm_tr(s):
    s = clean_tr(s)
    return re.sub(r'[\[\]⸢⸣?!«»⟨⟩]', '', s).strip()


def check_reserved(key, label, heb, tr, problems):
    h = strip(FN.sub('', heb))
    for pat, allow in RESERVED[key].items():
        if re.search(pat, h):
            if allow and any(re.search(a, tr) or re.search(a, norm_tr(tr)) for a in allow):
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


def check_formulas(key, label, heb, tr, problems):
    h = re.sub(r'[\[\]⟨⟩"\'“”]', '', strip(FN.sub('', heb))).strip()
    t = norm_tr(tr)
    for trx, hrx, what in FORMULAS[key]:
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
    src = base_lines(key)
    srcd = dict(src)
    labels = [k for k, _ in src]
    if order != labels:
        missing = [x for x in labels if x not in ent]
        extra = [x for x in order if x not in srcd]
        present = [x for x in labels if x in ent]
        msg = f'coverage: {len(order)} entries vs {len(labels)} base lines; missing {len(missing)} {missing[:12]}; extra {extra[:12]}'
        if extra or present != order:
            problems.append(msg + ('' if present == order else '; order differs from the base text'))
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
            problems.append(f'entry {k}: transliteration differs from the base text:\n    A: {tr}\n    E: {clean_tr(srcd[k])}')
        heb = e['heb'][0]
        if 'טרם תורגם' in heb:
            pending += 1
            continue
        check_reserved(key, k, heb, tr, problems)
        check_traps(k, heb, problems, tr)
        check_formulas(key, k, heb, tr, problems)
    # name traps in headings: a trap word unvocalized in a `## ` heading is an error when the section has the name
    for p in paths:
        if not os.path.exists(p):
            continue
        for ln in open(p, encoding='utf-8'):
            if ln.startswith('## '):
                for tok in re.split(r'[\s,.;:!?"\'()\[\]–—]+', ln[3:]):
                    base = PREFIX.sub('', strip(tok), count=1)
                    if base in ('אותו', 'איננה', 'אן', 'שומר', 'אכי', 'אשתר') and not NIQQUD.search(tok):
                        problems.append(f'heading "{ln.strip()}": unvocalized "{tok}"')
    if pending:
        (problems if strict else notes).append(f'{pending} entries not yet drafted')
    by = {}
    for k in order:
        e = ent[k]
        if e['tr'] and e['heb'] and 'טרם תורגם' not in e['heb'][0]:
            by.setdefault(norm_tr(e['tr'][0]), []).append(k)
    for t, ks in by.items():
        hs = {re.sub(r'[\[\]"“”⟨⟩?]', '', strip(ent[k]['heb'][0])).strip() for k in ks}
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
    head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../kings_tools.py build ' + key +
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


def _range(src, a, b):
    labels = [k for k, _ in src]
    i, j = labels.index(a), labels.index(b)
    return src[i:j + 1]


def lines(key, rng):
    a, _, b = rng.partition('-')
    for k, t in _range(base_lines(key), a, b or a):
        print(f'{k}. {t}')


# ---- EA helpers: ORACC alignment, ETCSL translation paragraphs, Mittermayer's German
def oracc_entries(rel):
    out, cur = [], None
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        ln = ln.rstrip('\n').rstrip()
        m = re.match(r'^\*\*([^*]+)\*\* (.*)$', ln)
        if m:
            cur = [m.group(1), m.group(2).strip(), '']
            out.append(cur)
            continue
        m = re.match(r'^\s*<sub>lem: (.*)</sub>$', ln)
        if m and cur:
            cur[2] = m.group(1)
    return out


def oracc_aligned(key):
    """{ETCSL label: (ORACC transliteration, lem)}; ORACC 'None' lines (variant lines) take the next ETCSL label after
    the last labelled ORACC line; ORACC 'Š' is its typo for 'C'."""
    P = PROJECTS[key]
    src = [k for k, _ in etcsl_lines(P['etcsl'])]
    res = {}
    last = -1
    for lab, tr, lem in oracc_entries(P['oracc']):
        lab = {'Š': 'C'}.get(lab, lab)
        if lab == 'None':
            if last + 1 < len(src):
                lab = src[last + 1]
            else:
                continue
        if lab in src:
            last = src.index(lab)
            res[lab] = (tr, lem)
    return res


def etcsl_paragraphs(rel):
    res = {}
    for ln in open(os.path.join(SRC, rel), encoding='utf-8'):
        m = re.match(r'^\*\*(\d+[A-Z]?)(?:-(\d+[A-Z]?))?\.\*\* (.*)$', ln.rstrip('\n'))
        if m:
            res[m.group(1)] = (m.group(1) + ('-' + m.group(2) if m.group(2) else ''), m.group(3))
    return res


def mitt_lines(rel):
    """Mittermayer's 'Rekonstruierter Text mit Übersetzung' (chapter 9, OCR): {line number: [lines]} (Sumerian and
    German both appear; the German is usually the second)."""
    txt = open(os.path.join(SRC, rel), encoding='utf-8', errors='replace').read().split('\n')
    try:
        a = max(i for i, l in enumerate(txt) if l.strip().startswith('9. REKONSTRUIERTER TEXT'))
        b = max(i for i, l in enumerate(txt) if l.strip().startswith('10. PARTITUR'))
    except ValueError:
        return {}
    res = {}
    for l in txt[a:b]:
        m = re.match(r'^\s{0,9}(\d{1,3})(f\.|ff\.)?\s+(\S.*)$', l)
        if m and not re.match(r'(Textedition|Rekonstruierter Text)', m.group(3).strip()):
            res.setdefault(m.group(1), []).append(re.sub(r'\s{2,}', ' ', m.group(3)).strip())
    return res


def conc(key, out=None):
    P = PROJECTS[key]
    src = etcsl_lines(P['etcsl'])
    orc = oracc_aligned(key)

    def nm(s):
        s = s.replace('ŋ', 'ĝ')
        s = re.sub(r'\*[^*]*\*|\(.*?\)', '', s)
        return re.sub(r'[\[\]⸢⸣?!<>⟨⟩«»#*\s.…]', '', s)
    rows, low = [], []
    for k, t in src:
        r = difflib.SequenceMatcher(None, nm(t), nm(orc[k][0])).ratio() if k in orc else 0
        if k in orc and r < 0.6:
            low.append(k)
        rows.append(f'| {k} | {"✓" if k in orc else "—"} | {r:.2f} |')
    only_e = [k for k, _ in src if k not in orc]
    print(f'{len(src)} ETCSL lines, {len(orc)} aligned ORACC lines; only in ETCSL: {only_e}; low similarity (<0.6): {low}')
    if out:
        head = ['# Concordance: ETCSL 1.8.2.3 ↔ ORACC epsd2/literary Q000369', '',
                'Generated by `../kings_tools.py conc EA`. ORACC numbers the lines as ETCSL; its lines with manuscript '
                'variants carry no label in the export ("None") and are aligned here by position; its "Š" is "C" '
                '(the alternative lines A–D for 400–403). Sim. = similarity of the two transliterations.', '',
                f'Only in ETCSL (no ORACC line): {", ".join(only_e) or "none"}. Low similarity: {", ".join(low) or "none"}.', '',
                '| ETCSL | ORACC | Sim. |', '|---|---|---|']
        open(out, 'w', encoding='utf-8').write('\n'.join(head + rows) + '\n')
        print('written', out)


def data(key, a, b, out):
    P = PROJECTS[key]
    orc = oracc_aligned(key)
    par = etcsl_paragraphs(P['etcsl_tr'])
    mitt = mitt_lines(P['mitt'])
    L = [f'# Translator data {key} {a}–{b}', '',
         'Per line: ETCSL label; ETCSL transliteration (copy it exactly into the annotated file); ORACC Q000369',
         'transliteration and lemma{morph;base}. Rank 3 (read only AFTER your own reading): the ETCSL translation',
         'paragraph at its first line; Mittermayer 2009 (OCR of ch. 9, Sumerian and German lines with this number;',
         'check the PDF page for any reading you rely on).', '']
    for k, t in _range(etcsl_lines(P['etcsl']), a, b):
        L.append(f'## {k}')
        L.append(f'ETCSL: `{t}`')
        if k in orc:
            L.append(f'ORACC: {orc[k][0]}')
            L.append(f'lem: {orc[k][1]}')
        if k in par:
            L.append(f'> ETCSL tr. [{par[k][0]}]: {par[k][1]}')
        num = re.match(r'\d+', k)
        if num and num.group(0) in mitt and not re.search(r'[A-Z]$', k):
            for x in mitt[num.group(0)][:3]:
                L.append(f'> Mittermayer {num.group(0)}: {x}')
        L.append('')
    open(out, 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    print(f'{out}: {sum(1 for x in L if x.startswith("## "))} lines')


def pars(key, a, b):
    P = PROJECTS[key]
    src = base_lines(key)
    d = os.path.join(HERE, P['dir'])
    order, ent = parse_annotated([os.path.join(d, x) for x in P['annotated']], [])
    nm = {k: norm_tr(t) for k, t in src}
    for k, t in _range(src, a, b):
        hits = []
        for k2, t2 in src:
            if k2 == k or len(nm[k].split()) < 3:
                continue
            r = difflib.SequenceMatcher(None, nm[k], nm[k2]).ratio()
            if r >= 0.75:
                heb = ent[k2]['heb'][0] if k2 in ent and ent[k2]['heb'] else '(not yet drafted)'
                hits.append((r, k2, t2, heb))
        if hits:
            print(f'{k}: `{t}`')
            for r, k2, t2, heb in sorted(hits, key=lambda x: -x[0]):
                print(f'    {r:.2f} {k2}: `{t2}`\n         > {heb}')


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
    if a[0] == 'conc':
        conc(a[1], a[2] if len(a) > 2 else None)
        return
    if a[0] == 'data' and len(a) > 4:
        data(a[1], a[2], a[3], a[4])
        return
    if a[0] == 'pars' and len(a) > 3:
        pars(a[1], a[2], a[3])
        return
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
