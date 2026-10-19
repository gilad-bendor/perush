# Verify the annotated files (and translation.rtl.md) of projects 3-6 of the law corpus (laws_config.PROJECTS).
# usage: python3 -I laws_verify.py <KEY> [file-number ...] [--strict] [--quiet]
#   KEY = LE | MAL | LI | UN
# Checks:
#  1. entries: the "### <label>" entries of each annotated file are the base text's lines of its range, in order;
#     lines not drafted are counted (an error with --strict, or when the file has no "טרם תורגם" placeholder);
#  2. sections: a "## §N (a–b): …" heading of a law that the base text marks (LE, MAL, LI) covers exactly that law's
#     lines; for Ur-Namma (no law marks in the composite) a heading's "(a–b)" must equal its first and last entry;
#  3. exactly one "> " Hebrew line per entry;
#  4. reserved words (the LH list of 2-חוקי-חמורבי/renderings.md §4 + this corpus's additions) absent from ">" lines;
#     lemma-gated words (`נגף`, `משפט`, `בתולה`, `צעק`, `המית`, `שלם` (D) …) only where the original has their cognate;
#  5. fixed formulas: where the normalization (Akkadian) or the transliteration (Sumerian) of a line matches a fixed
#     formula, the bare Hebrew contains the fixed Hebrew – the SAME Hebrew as in the Laws of Hammurabi;
#  6. cross-collection: an identical normalization (>= 2 words) in LH or in another project with different Hebrew is
#     listed for review ("REVIEW"), as are identical normalizations inside the project;
#  7. translation.rtl.md lines == annotated ">" lines (when no file number is given).
# Written 2026-10-18.
import sys, os, re, glob, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import laws_config as C

NB = r'(?<![א-ת])'
NE = r'(?![א-ת])'
# the LH reserved list (2-חוקי-חמורבי/verify.py), unchanged ...
RESERVED = [NB + w + NE for w in ['יומת', 'יומתו', 'ויומת', 'נגח', 'הנגח', 'הועד', 'והועד', 'אלהים', 'האלהים', 'נקי', 'ונקה', 'נקה',
                                   'חפשי', 'לחפשי', 'מהומה', 'מטר', 'שחין', 'קללה', 'צדקה', 'טרף', 'טרפה', 'מחתרת', 'במחתרת', 'רעהו', 'רעך',
                                   'יסקל', 'סקול', 'פדיון', 'פלילים', 'בפלילים', 'אסון', 'ירפא', 'ורפא', 'רפא', 'ינצו', 'יריבן', 'מרצע',
                                   'ברית', 'תורה', 'התורה']] + \
    [r'שמר', r'(\S+) תחת \1', NB + r'ו?ירצע' + NE, NB + r'ו?רצע' + NE]
# ... plus the additions of projects 3-6 (corpus renderings.md §6): Deut 22 / 25 and Covenant-Code words whose
# cuneiform counterparts are other words
RESERVED += [NB + w + NE for w in ['יבם', 'יבמה', 'ייבם', 'יבמתו', 'יבמי', 'ליבם', 'מאורשה', 'ארוסה', 'אורשה', 'ארש', 'מוהר',
                                   'יכנו', 'הכה', 'יכה', 'ויכה', 'הכהו', 'יכוהו', 'הכו', 'המכה', 'יחצון', 'וחצו', 'יחצו',
                                   'תחוס', 'מבשיו', 'יוסיף', 'נבלה', 'ענה', 'עינה', 'הסיג', 'יסיג', 'מסיג', 'תסיג', 'נאף', 'ינאף', 'הנואף', 'נואף']]
RESERVED_RE = [re.compile(p) for p in RESERVED]

# lemma-gated Hebrew words: (Hebrew regex on the bare line, regex that the normalization / lemma / transliteration
# must match, label)
GATED = [
    (NB + r'[ובלה]*(נגף|נגפו|ינגף|הנוגף|נגפה|נגוף)' + NE, r'nak[aā]p|ikkip|ikkim|nakkāp|munakkip|ikkipū|du7|ru5', '`נגף` only for *nakāpu*'),
    (NB + r'[ובלה]*משפט(ים|י)?' + NE, r'šipṭ|šapāṭ', '`משפט` only for *šipṭu*'),
    (NB + r'[ובלה]*בתול(ה|ת|ים|ות|תה|תו)?' + NE, r'batult|batūl|batul|batultu', '`בתולה` only for *batultu*'),
    (NB + r'[ובלה]*(צעק|צעקה|תצעק|יצעק|צעקו)' + NE, r'šasû|issi|išassi|tašassi|tassi|ištasi|iltasi|šisīt|šasāʾ|tasassi|isassi', '`צעק` only for *šasû*'),
    (NB + r'[ובלה]*(המית|והמית|ימית|תמית|המיתה|המיתו|ימיתו)' + NE, r'uštam[iī]t|šumūt|mâtu Š|ušmīt|ušmat|ušmāt|uštamīt|uš2|ug7', '`המית` only for *mâtu* Š'),
    (NB + r'[ובלה]*(זונה|זונות)' + NE, r'ḫarimt|ḫarīmt|ḫarmat|kar-kid|kar-ke4|harimt', '`זונה` only for *ḫarimtu* (Gilgameš corpus)'),
    (NB + r'[ובלה]*(קדשה|קדשות)' + NE, r'qadišt|qadilt|nu-gig', '`קדשה` only for *qadištu*'),
    (NB + r'[ובלה]*(ישלם|ישלמו|ישלמנה|ישלמנו|שלם ישלם|ישלמה)' + NE, r'ušall[ai]m|šullum|ušallamū|ušallimū|uš?šallam|šalāmu', '`שלם` (D) only for *šullumu*'),
]

# fixed formulas: (project kinds, regex on the normalization (Akk.) / transliteration (Sum.), Hebrew regex, label)
# The Hebrew is LH's (2-חוקי-חמורבי/renderings.md §1); LE uses OB normalization like LH; MAL its MA forms (ORACC norm).
AKK = [
    (r'^(u )?šumma\b', NB + r'ו?אם' + NE, 'šumma = אם'),
    (r'\bšumma awīlum\b(?! šū)', r'אם איש', 'F1'),
    (r'\bšumma aʾīlu\b', r'אם איש', 'F1 (MA)'),
    (r'\bawīlum šū\b|\bawīlam šuāti\b|\baʾīla šuātu\b|\baʾīlu šū\b', r'האיש ההוא', 'F2'),
    (r'\biddâk\b', NB + r'ו?[ית]הרג' + NE, 'F3'),
    (r'\biddakkū\b', NB + r'ו?יהרגו' + NE, 'F3'),
    (r'\bidukkūšu\b', r'יהרגוהו', 'F4'),
    (r'\binaddin\b', r'[ית]תן', 'F5'),
    (r'\binaddinū\b', r'יתנו', 'F5'),
    (r'\bišaqqal\b', r'ישקול', 'F6'),
    (r'\bišaqqalū\b', r'ישקלו', 'F6'),
    (r'\biriab\b', r'יחליף', 'F7'),
    (r'\bušallam', r'ישל[םמ]', 'F8'),
    (r'\bileqqe', r'[ית]קח', 'F9'),
    (r'\bitâr\b', r'ישוב|תשוב', 'F10'),
    (r'ana š[iī]mtim', r'לגורל', 'F11'),
    (r'maḫar ilim', r'לפני האל', 'F12'),
    (r'\bn[iī]š ilim\b', r'חיי האל', 'F13'),
    (r'\bmār awīlim\b', r'בן איש', 'F16'),
    (r'\bmārat awīlim\b', r'בת איש', 'F16'),
    (r'\baššat awīlim\b|\baššat aʾīle\b', r'אשת איש', 'F16'),
    (r'\bwarad awīlim\b', r'עבד איש', 'F16'),
    (r'\bamat awīlim\b', r'אמת איש', 'F16'),
    (r'\bmuškēn', r'מסכן', 'F16'),
    (r'\bbēl (alpim|bītim|bitim|eqlim|kirîm|ḫulqim|ḫubullim|awātim|aššatim|wardim|amtim|kalbim|igāri|nipûtim)\b', r'בעל', 'F17'),
    (r'\brugummâm\b', r'תביעה', 'F18'),
    (r'\bnakkāp|\bikkip|\bikkim', r'נגף', 'F32'),
    (r'\bušēdi', r'הודיע', 'F32'),
    (r'\bbābt', r'רובע', 'F32'),
    (r'\bkišp', r'כשפ', 'F34'),
    (r'\bandurār', r'דרור', 'F24'),
    (r'\bmaṣṣarūt|\bmaṣṣartim\b', r'נצירה', 'F25'),
    (r'\b(imtaḫaṣ|imḫaṣ|amḫaṣ|maḫāṣ|imtaḫṣ|mitḫuṣ|meḫeṣ|imaḫḫuṣ|imḫaṣ)', r'מח[וי]?[צץ]|מחיצת|מחצ', 'F29'),
    (r'\bdayyān', r'דיינ|דיין', 'F35'),
    (r'\bdīn(um|am|im|ām|āt|šu)\b', r'דין|דיני|דינ', 'F35'),
    (r'\bdīn napištim\b', r'דין נפשות', 'F36'),
    (r'\bmīšar', r'מישרים', 'F38'),
    (r'\bš[iī]b[iī](mi)?\b|\bš[iī]bū\b|\bšībūtu\b|\bšēbūtu\b', r'עדים|עדיו|עדי', 'F15'),
    (r'\btamkār', r'תגר', 'F41'),
    (r'\bekall', r'היכל', 'F42'),
    (r'\b(ištariq|išriq|šarrāq|šarāq|išriqu|šarqim|šariqtim)', r'גנב', 'F21'),
    (r'\bnārum\b|\bnārim\b', r'נהר', 'F33'),
    (r'\bterḫat', r'מהר', 'LH §2'),
    (r'\bizuzz|\bizūzū', r'יחלוק', 'LH zâzu = חלק'),
    (r'\bšīm\b|\bšīmum\b|\bšīmam\b|\bšīmšu\b|\bšīmišu\b', r'מחיר', 'LH šīmum = מחיר'),
    (r'\bkilallān\b|\bkilallin\b', r'שניהם|שניהן|משניהם', 'LH kilallān = שניהם'),
    (r'\bṣimdat šarrim\b', r'תקנת המלך', 'LH ṣimdat šarrim'),
    (r'\bimât\b', NB + r'ו?[ית]מות' + NE, 'LE imât = ימות'),
    (r'\bul iballuṭ\b', r'לא יחיה|לא תחיה', 'LE ul iballuṭ = לא יחיה'),
    (r'\bnipût', r'משכון', 'LH nipûtum = משכון'),
    (r'\bṣibt|\bṣibass', r'תוספת', 'LH ṣibtum = תוספת'),
    (r'\bḫubull', r'חוב', 'LH ḫubullum = חוב'),
    (r'\balmatt|\balmattu\b|\balmattum\b|\balmanāt', r'אלמנ', 'cognate'),
    (r'\bidukkū\b', r'יהרגו', 'F4'),
    # Middle Assyrian (MAL A; ORACC norm writes h for ḫ)
    (r'\biddan\b', r'[ית]תן', 'F5 (MA iddan)'),
    (r'\bilaqqe', r'[ית]קח', 'F9 (MA ilaqqe)'),
    (r'\bubtaʾʾer', r'בי?רר', 'LH bâru D = ברר'),
    (r'\buktaʾʾin', r'כונ[ןנ]', 'LH F20 kunnu = כונן'),
    (r'\bimah?h?uṣ|\bimhaṣ|\bimahṣ', r'מח[וי]?[צץ]|מחצ', 'F29 (MA)'),
    (r'\b[hḫ][iī]ṭ(a|u|ašu|āni)\b', r'חטא|חטאו|חטאה|חטאים', 'corpus ḫīṭu = חטא'),
    (r'\bara[nm](ša|šu|a)?\b', r'עון|עונ', 'LH F37 arnu = עון'),
    (r'\bbatult', r'בתול', 'batultu = בתולה [cognate]'),
    (r'\b[hḫ]arimt', r'זונ', 'Gilgameš ḫarimtu = זונה'),
    (r'\bqadilt|\bqadišt', r'קדש', 'qadištu = קדשה'),
    (r'\bId\b', r'נהר', 'F33 the River (ordeal)'),
    (r'\b(mussa|mutiša)\b', r'בעל', 'LH mutum = בעל'),
    (r'\b[hḫ]aṭṭāte\b', r'שבט', 'LH ḫaṭṭu = שבט'),
    (r'\bkišpē\b', r'כשפ', 'F34'),
]
SUM = [
    (r'^tukum-bi\b|\btukum-bi\b', NB + r'ו?אם' + NE, 'tukum-bi = אם'),
    (r'\bi3-la2-e\b|\bi3-na-la2-e\b|\bhe2-na-la2-e\b', r'ישקול|תשקול|ישקלו', 'la2 = šaqālu = ישקול (LH F6)'),
    (r'\bi3-gaz-e\b|\bin-gaz-e\b|\bi3-gaz-e-dam\b|\bba-ab-gaz\b', NB + r'ו?[ית]הרג' + NE, 'gaz = dâku = יהרג (LH F3)'),
    (r'\bib2-su-su\b|\bib2-su-su-ne\b|\bib2-su-su-e\b', r'יחליפ|יחליף|תחליף', 'su = riābu = יחליף (LH F7)'),
    (r'\bku3-babbar\b', r'כסף', 'ku3-babbar = כסף'),
    (r'\bgeme2\b', r'אמה|אמת|אמהות|האמה|אמות', 'geme2 = אמה'),
    (r'\bARAD2\b|\bir11\b|\barad2\b', r'עבד', 'ARAD2 = עבד'),
    (r'\b{d}i7\b|\bi7-de3\b|\bi7-lu2-ru-gu2', r'נהר', 'i7 = nāru = נהר (LH F33)'),
]

KEYTOK = ['šumma', 'awīlum', 'aʾīlu', 'iddâk', 'inaddin', 'išaqqal', 'iriab', 'ušallam', 'ileqqe', 'utâr', 'itâr', 'maḫar', 'kīma']


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    key = args[0]; nums = args[1:]
    strict = '--strict' in sys.argv; quiet = '--quiet' in sys.argv
    P = C.PROJECTS[key]
    L = C.parse(key); byn = {x['n']: x for x in L}
    lawlines = C.law_lines(L)
    sumerian = key in ('LI', 'UN')
    forms = SUM if sumerian else AKK
    probs = 0; allents = []; missing_total = 0
    heb_by_norm = collections.defaultdict(set)
    for f in C.files(key, L):
        num, slug, a, b, title = f
        if nums and num not in nums:
            continue
        fn = C.annotated_path(key, f)
        if not os.path.exists(fn):
            print(f'file {num}: no annotated file'); continue
        ents, secs, ph = C.parse_annot(fn); allents += ents
        exp = [x['n'] for x in C.rows_of(L, a, b)]
        got = [e['n'] for e in ents]
        extra = [x for x in got if x not in exp]
        missing = [x for x in exp if x not in got]
        if extra:
            probs += 1; print(f'file {num}: extra entries {extra[:20]}')
        if [x for x in got if x in exp] != [x for x in exp if x in got]:
            probs += 1; print(f'file {num}: entries out of order')
        if len(set(got)) != len(got):
            probs += 1; print(f'file {num}: duplicate entries {[k for k, v in collections.Counter(got).items() if v > 1][:10]}')
        if missing:
            missing_total += len(missing)
            laws_missing = sorted({byn[x]['law'] or byn[x]['section'] or '?' for x in missing}, key=lambda s: (len(s), s))
            msg = f'file {num}: {len(missing)} lines not drafted (laws/sections: {", ".join(laws_missing[:40])})'
            if strict or not ph:
                probs += 1; msg = 'ERROR ' + msg
            print(msg)
        for s in secs:
            m = re.match(r'§\s*(\S+?)(?:[–-](\S+?))?\s*\(([^)–-]+)[–-]([^)]+)\)', s['head'])
            if not m:
                continue
            law = m.group(1); ra, rb = m.group(3).strip(), m.group(4).strip()
            if s['ents'] and (s['ents'][0] != ra or s['ents'][-1] != rb):
                probs += 1; print(f'file {num}: section "{s["head"][:40]}": range ({ra}–{rb}) but entries {s["ents"][0]}…{s["ents"][-1]}')
            if lawlines and not m.group(2):
                expl = lawlines.get(law)
                if expl is None:
                    probs += 1; print(f'file {num}: section §{law}: no such law in the base text')
                elif s['ents'] != expl:
                    probs += 1; print(f'file {num}: section §{law} has {len(s["ents"])} lines {s["ents"][:2]}… but the law has {expl[0]}…{expl[-1]} ({len(expl)})')
        for e in ents:
            if len(e['heb']) != 1:
                probs += 1; print(f'file {num} {e["n"]}: {len(e["heb"])} Hebrew lines'); continue
            h = C.strip_niqqud(e['heb'][0]); hb = C.bare(e['heb'][0])
            for r in RESERVED_RE:
                if r.search(h):
                    probs += 1; print(f'file {num} {e["n"]}: reserved /{r.pattern}/ in: {h}')
            s = byn.get(e['n'])
            if not s:
                continue
            src = ' '.join([s['ts'], s.get('lem', ''), s['atf']])
            for hre, lre, lab in GATED:
                if re.search(hre, h) and not re.search(lre, src):
                    probs += 1; print(f'file {num} {e["n"]}: {lab}: {h}')
            text = s['atf'] if sumerian else s['ts']
            for pat, heb, lab in forms:
                if re.search(pat, text) and not re.search(heb, hb):
                    probs += 1; print(f'file {num} {e["n"]}: {lab}: /{heb}/ expected for "{text}"; got: {h}')
            if not sumerian and len(s['ts'].split()) >= 2:
                heb_by_norm[s['ts']].add(hb)
    # 6. identical normalizations: inside the project, and against LH and the other projects
    if not quiet:
        for nrm, hs in heb_by_norm.items():
            if len(hs) > 1:
                print(f'REVIEW (inside {key}) identical normalization, different Hebrew: {nrm}')
                for h in sorted(hs):
                    print('      ', h)
        others = collections.defaultdict(set)
        for k, lab, norm, h in C.all_pairs(tuple(x for x in ('LH', 'LE', 'MAL') if x != key)):
            if len(norm.split()) >= 2:
                others[norm].add((k, lab, C.bare(h)))
        for nrm, hs in heb_by_norm.items():
            if nrm in others:
                theirs = {h for _, _, h in others[nrm]}
                if not (hs & theirs) or len(hs | theirs) > 1:
                    print(f'REVIEW (cross-collection) identical normalization: {nrm}')
                    for h in sorted(hs):
                        print(f'       {key}: {h}')
                    for k, lab, h in sorted(others[nrm])[:4]:
                        print(f'       {k} {lab}: {h}')
    tr = os.path.join(C.HERE, P['folder'], 'translation.rtl.md')
    if os.path.exists(tr) and not nums:
        tl = {}
        for l in open(tr, encoding='utf-8'):
            m = re.match(r"\*\*([^*]+?)\*\* (.*?)\s*$", l.rstrip())  # labels may contain spaces (MAL: "o i 3")
            if m:
                tl[m.group(1)] = re.sub(r'\[\^[^\]]+\]', '', m.group(2)).strip()
        for e in allents:
            if e['heb'] and tl.get(e['n']) != e['heb'][0].strip():
                probs += 1; print(f'translation mismatch {e["n"]}: {tl.get(e["n"])!r} vs {e["heb"][0]!r}')
        print('translation lines:', len(tl), 'annotated entries:', len(allents))
    print(f'{key}: entries: {len(allents)}, not drafted: {missing_total}, problems: {probs}')


main()
