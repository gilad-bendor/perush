"""Tools of the wisdom corpus (Ludlul bēl nēmeqi, the Babylonian Theodicy). Run with python3 -I from any directory.

    python3 -I wisdom_tools.py pars KEY            before drafting: every line of KEY that eBL links to another line
                                                    (exact or "cf."), and every line whose normalization is identical
                                                    to another line of the corpus, with the Hebrew already given to
                                                    the other copy (Gilgameš lines from ../אפוס-גילגמש).
    python3 -I wisdom_tools.py verify [KEY…] [--strict]
    python3 -I wisdom_tools.py build                generate translation-<KEY>.rtl.md for every drafted file and the
                                                    combined translation.rtl.md of each project, then verify them.
    python3 -I wisdom_tools.py grep '<regex>'       search the unvocalized `>` lines of the whole corpus
                                                    (and of the Gilgameš corpus with --gilg), with eBL's lemmas.
    python3 -I wisdom_tools.py lemma '<regex>'      every line of the corpus whose eBL lemmas match, with its Hebrew
                                                    (how a word was rendered so far).

KEY = I II III IV V (Ludlul, 1-לודלול/annotated-<KEY>.rtl.md), Th1 Th2 (the Theodicy, lines 1–143 and 144–297,
2-התאודיציה-הבבלית/annotated-<KEY>.rtl.md). See wisdom_config.TEXTS.

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow eBL's line list (none missing, duplicated, out
     of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  3. RESERVED strings in the unvocalized `>` lines: each hit is an error unless the line's eBL lemmas contain an
     allowed lemma (widen the allow-list for a lemma variant rather than bend the Hebrew);
  4. TRAPS: unvocalized strings that read as another Hebrew word (אלי "to me" for "my god", בל "not" for Bēl …);
  5. repeated lines: eBL exact parallels inside the corpus, and identical normalizations, with different Hebrew
     (after stripping brackets, marks and niqqud) – reported, to be justified in the apparatus or fixed.
Exit code 1 on any error of 1–4.

build: translation-<KEY>.rtl.md = translation--intro-<KEY>.rtl.md (title `# …` + introduction, written by the
translator) + the annotated `## ` headings and `> ` lines (`**<label>** <Hebrew>` + two spaces); a bullet
`- **הערת שוליים:** …` in an entry becomes a numbered footnote. The project's translation.rtl.md =
translation--head.rtl.md + every built translation-<KEY>.rtl.md (title demoted to ##, headings to ###, footnote labels
prefixed by the key).
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wisdom_config import (HERE, TEXTS, BY_KEY, PAR_L_RE, ebl_lines, read_annotated, annotated_path,
                           translation_path, key_for, gilgamesh_hebrew, strip_marks)

W = r"(?<![א-ת])[ובלמהכש]{0,2}"
E = r"(?![א-ת])"
# (regex on the unvocalized line, allowed eBL lemma prefixes or None = never, why)
RESERVED = [
    (W + r"(?:אלוהים|אלהים|אלוה|אלוהיי?|אלהי)" + E, None, "ilu = אֵל / אֵלִי / הָאֵלִים, never אֱלֹהִים / אֱלוֹהַּ (Job's word)"),
    (W + r"(?:שטן|השטן)" + E, None, "no satan in the Akkadian"),
    (W + r"(?:עולם|לעולם|עולמים)" + E, None, "dārû / ṣâtu = נֶצַח / עַד, never עוֹלָם"),
    (W + r"טרם" + E, None, "טֶרֶם only for a real 'not yet' construction"),
    (W + r"(?:רקיע|עדן|תבה|תיבה|כרובים?)" + E, None, "Genesis words with no Akkadian counterpart here"),
    (W + r"(?:שאול|שאולה)" + E, None, "the netherworld (erṣetu) = אֶרֶץ; arallû etc. transliterated; never שְׁאוֹל"),
    (W + r"(?:הבל|הבלים)" + E, None, "הֶבֶל (Qohelet) is not used; šāru 'wind' = רוּחַ, zaqīqu = מַשַּׁב"),
    (W + r"(?:גואלי?|גאל|גאלני)" + E, None, "no Akkadian go'el (Job 19:25): gamālu 'spare' = חָמַל, eṭēru 'save' = הִצִּיל"),
    (W + r"(?:מלאך|מלאכי|מלאכים)" + E, None, "no malʾak: mār šipri = שָׁלִיחַ"),
    (W + r"(?:תם|תמים|תומתי|תומתו|בתומי)" + E, None, "תָּם / תֻּמָּה (Job 1:1; 2:3, 9; 27:5) have no Akkadian cognate here: keep them out"),
    (W + r"(?:עזב|עזבני|עזבתני|עזבוני|עזבה|עזבו|נעזב|נעזבתי|יעזוב|תעזוב|עזוב|עזבת|עזבתי|עזבוהו)" + E,
     ["ezēbu"], "עָזַב only for ezēbu [cognate; Ps 22:2]"),
    (W + r"(?:טוב|טובה|טובים|טובות|הטיב|היטיב|ייטב|יטב|טובו|טובי|טובתו|טובתי|מיטב)" + E,
     ["ṭābu", "ṭiābu", "ṭūbu", "ṭābtu", "ṭūbtu", "ṭubbātu"], "טוֹב only for its cognate ṭābu / ṭiābu / ṭūbu (creation corpus)"),
    (W + r"(?:ישר|ישרה|ישרים|מישרים|יישר|ישרו|יושר)" + E, ["išaru", "išartu", "išertu", "ešēru", "mīšaru", "išariš", "šūšuru", "mušēšir", "bussuru"],
     "ישר only for its cognate išaru / ešēru / mīšaru (Job 1:1 `תָּם וְיָשָׁר`)"),
    (W + r"(?:רחם|רחמים|רחום|רחמיו|ירחם|ירחמו|רחמה|רחמי|רחמני|תרחם|ריחם|ריחמה|ריחמו|מרחם|רחמנות)" + E,
     ["rēmu", "rêmu", "rēmēnû", "rēmānû", "rīmu", "rēmūtu", "rēmu"], "רחם only for rēmu / rêmu / rēmēnû [cognate]"),
    (W + r"(?:ידע|ידעתי|ידעו|יודע|יודעת|יודעים|ידעה|יידע|ידוע|אדע|תדע|נדע|ידעת|דעת|ידיעה|יודעי|הודיע|יודיע)" + E,
     ["edû", "mūdû", "idû", "wadû", "lāmādu", "mudû", "ṭēmu", "le'û", "leʾû", "lamādu", "ḫakāmu", "ḫasāsu", "nēmequ", "šūdû", "šudû", "mūdûtu", "lā mūdû", "pakku", "palkû"],
     "ידע only for edû (Gilgameš corpus); דַּעַת for ṭēmu (flood corpus) is allowed"),
    (W + r"(?:עפר|העפר|עפרות)" + E, ["eperu", "epru", "eprū"], "עָפָר reserved for eperu (Gen 3:19; Job 42:6)"),
    (W + r"(?:טיט|הטיט)" + E, ["ṭiṭṭu", "ṭīdu", "ṭiddu", "ṭīṭu"], "טִיט reserved for ṭiṭṭu / ṭīdu"),
    (W + r"(?:קבר|קברי|קברו|הקבר|קברים|קבורה|לקבורה|קבורתי|נקבר|קובר|קוברי)" + E,
     ["qabru", "qebēru", "qēbiru", "qubūru", "qebru"], "קבר only for its cognate qabru / qebēru"),
    (W + r"(?:לקח|לקחו|לקחה|לקחני|ילקח|נלקח|יקח|תקח|אקח|קח|לוקח|לקחתי)" + E, ["leqû", "laqû"], "לָקַח only for leqû [cognate] (Gilgameš corpus)"),
    (W + r"(?:נחש|נחשים)" + E, ["ṣerru", "bašmu", "ṣīru", "mušḫuššu", "šibbu"], "נָחָשׁ only for the snake words"),
    (W + r"(?:ארור|ארורה|ארר|מארה|מארת|מארות)" + E, ["arāru", "arratu", "erretu", "arru"], "ארר only for arāru / arratu"),
    (W + r"(?:חסד|חסדו|חסדי|חסדה|חסדיו|חסדים)" + E, ["dumqu", "damāqu", "dunqu", "damqu", "damiqtu"], "חֶסֶד only for dumqu (Gilgameš corpus)"),
    (W + r"(?:שלום|שלומי|שלומו|לשלום|השלים|שלם|שלמה|שלמים|ישלם|שילם|משלים|שלמות)" + E,
     ["šulmu", "šalāmu", "šalmu", "salāmu", "salīmu", "šullumu", "šalmiš", "šalāmu", "šūlumu", "šullumu", "gamāru",
      "šulmān", "ka-silim"],
     "שלם only for šulmu / šalāmu / salāmu [cognate]"),
    (W + r"(?:נקי|נקיה|נקיים|ניקה|נוקה|ינקה)" + E, ["ebbu", "zakû", "ullulu", "ellu", "zakāru"], "נָקִי only for zakû / ebbu (Job 4:7 `מִי הוּא נָקִי אָבָד`)"),
    (W + r"(?:צדיק|צדיקים|צדק|צדקה|צדקתי|הצדיק|צדקו|יצדק|נצטדק)" + E, None,
     "Akkadian has no ṣdq here: kittu = אֱמֶת, kīnu = נֶאֱמָן, išaru = יָשָׁר; never צַדִּיק / צֶדֶק (Job's key word)"),
    (W + r"(?:רשע|רשעים|רשעה|הרשיע)" + E, ["raggu", "ṣēnu", "lemnu", "raggiš", "ṣēnû", "rušû"],
     "רָשָׁע only for raggu / ṣēnu (Gilgameš corpus raggu = רָשָׁע)"),
]

# Unvocalized strings that read as another word. (regex on the RAW line, lemma prefixes that make the hit an
# error, or None = always an error, why)
V = "֑-ׇ"
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
TRAPS = [
    (RW + r"אלי" + RE_, ["ilu I, -ya", "ilu I, -ī", "ilu I, -ia"], "'my god' must be vocalized אֵלִי (unvocalized it reads 'to me')"),
    (RW + r"אלה" + RE_, ["ištaru", "ištartu", "iltu"], "'goddess' must be vocalized אֵלָה (unvocalized it reads 'these' / 'oath')"),
    (RW + r"בל" + RE_, ["Bēl"], "Bēl must be vocalized בֵּל (unvocalized it reads 'not')"),
    (rf"(?<![{V}א-ת])[־]?שכן" + RE_, ["Šakkan", "Šubši"], "Šakkan must be vocalized שַׁכַּן (unvocalized it reads 'dwelt')"),
    (RW + r"אלו" + RE_, ["alû"], "the alû demon must be vocalized אַלּוּ (unvocalized it reads 'these')"),
    (RW + r"שמחת" + RE_, ["Šamḫat"], "Šamḫat must be vocalized"),
    (RW + r"נבו" + RE_, ["Nabû"], "Nabû = נָבוּ must be vocalized (note נְבוֹ, ישעיהו מו:א)"),
    (RW + r"רע" + RE_, ["ibru"], "'friend' must be vocalized רֵעַ (unvocalized it reads 'evil')"),
]


def lemma_ok(lemmas, allowed):
    return any(any(x.startswith(a) for a in allowed) for x in lemmas)


def present_keys():
    return [t[0] for t in TEXTS if os.path.exists(annotated_path(t[0]))]


def all_data():
    return {t[0]: ebl_lines(t[0]) for t in TEXTS}


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(annotated_path(k))
        out[k] = a[0] if a else {}
    return out


def norm_key(n):
    n = re.sub(r"[\[\]⸢⸣?!<>()|]", "", n or "")
    return re.sub(r"\s+", " ", n).strip()


def pars(key):
    data = all_data()
    heb = all_hebrew()
    order, norm, trans, lem, par, atf = data[key]
    print(f"# Repeated / parallel lines of {key} ({BY_KEY[key][7]})\n")
    nk = {}
    for k2, d in data.items():
        for lab in d[0]:
            n = norm_key(d[1].get(lab))
            if n and not re.fullmatch(r"[.… ]*", n) and len(n.split()) >= 3:
                nk.setdefault(n, []).append((k2, lab))
    for lab in order:
        out = []
        for p in par.get(lab, []):
            m = PAR_L_RE.match(p)
            if not m:
                out.append(f"  - eBL: {p} (outside the corpora; not checked)")
                continue
            cf, cat, tno, stage, ch, l2 = m.groups()
            if cat == "II":
                k2 = key_for(tno, ch, l2)
                h = heb.get(k2, {}).get(l2) if k2 else None
                n2 = data[k2][1].get(l2) if k2 else None
                out.append(f"  - eBL {'cf. ' if cf else ''}{k2 or p} {l2}: {n2}\n      Hebrew: {h or '(not yet drafted)'}")
            elif cat == "I" and tno == "4":
                h = gilgamesh_hebrew(ch, l2)
                out.append(f"  - eBL {'cf. ' if cf else ''}Gilgameš SB {ch} {l2}\n      Hebrew (Gilgameš corpus): {h or '(none)'}")
            else:
                out.append(f"  - eBL: {p} (another eBL text; not translated here)")
        n = norm_key(norm.get(lab))
        for (k2, l2) in nk.get(n, []):
            if (k2, l2) != (key, lab):
                out.append(f"  - identical normalization: {k2} {l2}\n      Hebrew: {heb.get(k2, {}).get(l2) or '(not yet drafted)'}")
        if out:
            print(f"- **{lab}** `{norm.get(lab)}`")
            print("\n".join(out))
    return 0


def translation_lines(key):
    p = translation_path(key)
    if not os.path.exists(p):
        return None
    out, seq = {}, []
    for l in open(p, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            out[m.group(1)] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            seq.append(m.group(1))
    return out, seq


def verify(keys, strict=False):
    pk = present_keys()
    keys = keys or pk
    data = all_data()
    heb = all_hebrew()
    bad = 0
    for key in keys:
        if key not in pk:
            print(f"{key}: no annotated file yet")
            if strict:
                bad += 1
            continue
        order, norm, trans, lem, par, atf = data[key]
        ent, seq, probs = read_annotated(annotated_path(key))
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in order if x not in ent]
        extra = [x for x in seq if x not in order]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in eBL: {extra}")
            bad += 1
        if [x for x in seq if x in order] != [x for x in order if x in ent]:
            print(f"{key}: entries out of eBL order")
            bad += 1
        empty = [k for k in seq if not ent[k].strip()]
        if empty:
            print(f"{key}: empty '>' lines: {empty}")
            bad += 1
        tr = translation_lines(key)
        if tr is not None:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != ent[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {ent[k]}")
                    bad += 1
        for k in seq:
            plain = strip_marks(ent[k])
            for rx, allowed, why in RESERVED:
                if re.search(rx, plain):
                    if allowed and (lemma_ok(lem.get(k, []), allowed) or lemma_ok((norm.get(k) or "").split(), allowed)):
                        continue
                    print(f"RESERVED {key} {k}: /{rx[:60]}…/ – {why}\n    {ent[k]}\n    lemmas: {', '.join(lem.get(k, []))}")
                    bad += 1
            for rx, lemmas, why in TRAPS:
                if re.search(rx, ent[k]) and (lemmas is None or lemma_ok(lem.get(k, []), lemmas)):
                    print(f"UNVOCALIZED {key} {k}: {why}\n    {ent[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (eBL {len(order)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    # repeated lines
    print("\nRepeated lines with different Hebrew (justify in the apparatus or fix):")
    seen, nd = set(), 0
    nk = {}
    for k2, d in data.items():
        for lab in d[0]:
            n = norm_key(d[1].get(lab))
            if n and len(n.split()) >= 3 and not re.fullmatch(r"[.… ]*", n):
                nk.setdefault(n, []).append((k2, lab))
    pairs = []
    for k2, d in data.items():
        for lab, lst in d[4].items():
            for p in lst:
                m = PAR_L_RE.match(p)
                if m and m.group(2) == "II" and not m.group(1):
                    k3 = key_for(m.group(3), m.group(5), m.group(6))
                    if k3:
                        pairs.append(((k2, lab), (k3, m.group(6)), "eBL"))
    for n, lst in nk.items():
        for i in range(len(lst)):
            for j in range(i + 1, len(lst)):
                pairs.append((lst[i], lst[j], "same normalization"))
    for a, b, why in pairs:
        pair = tuple(sorted([a, b]))
        if pair in seen:
            continue
        seen.add(pair)
        if keys and a[0] not in keys and b[0] not in keys:
            continue
        h1, h2 = heb.get(a[0], {}).get(a[1]), heb.get(b[0], {}).get(b[1])
        if h1 is None or h2 is None or strip_marks(h1) == strip_marks(h2):
            continue
        nd += 1
        print(f"- ({why}) {a[0]} {a[1]} ≠ {b[0]} {b[1]}\n    {data[a[0]][1].get(a[1])}\n    {data[b[0]][1].get(b[1])}\n    {h1}\n    {h2}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


def sections(path):
    """[('h', heading) | ('l', label, hebrew, footnote)] of an annotated file, in order."""
    out, cur, fn = [], None, None
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        if l.startswith("## "):
            out.append(("h", l[3:].strip()))
            cur = None
        elif l.startswith("# "):
            cur = None
        elif re.match(r"^### (\S+)\s*$", l):
            cur = l[4:].strip()
            out.append(["l", cur, "", ""])
        elif cur and l.startswith("> "):
            out[-1][2] = l[2:].strip()
        elif cur and l.startswith("- **הערת שוליים:**"):
            out[-1][3] = l[len("- **הערת שוליים:**"):].strip()
    return out


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by {who} from {src}.\n"
             "To change the text, edit those files and run: python3 -I {cmd}\n-->\n\n")


def build_one(key):
    d = os.path.dirname(annotated_path(key))
    ip = os.path.join(d, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {BY_KEY[key][7]}"
    out, notes, n = [], [], 0
    for s in sections(annotated_path(key)):
        if s[0] == "h":
            out.append(f"\n## {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{n}]"
                notes.append(f"[^{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    head = GENERATED.format(who="../wisdom_tools.py build",
                            src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md",
                            cmd="../wisdom_tools.py build")
    text = head + intro + "\n" + "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(translation_path(key), "w", encoding="utf-8").write(text)
    print(f"translation-{key}.rtl.md: {sum(1 for s in sections(annotated_path(key)) if s[0] == 'l')} lines, {n} footnotes")


def build_project(project, keys):
    pdir = os.path.join(HERE, project)
    hp = os.path.join(pdir, "translation--head.rtl.md")
    head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {project}"
    parts = [GENERATED.format(who="../wisdom_tools.py build", src="translation--head.rtl.md and translation-<KEY>.rtl.md",
                              cmd="../wisdom_tools.py build") + head]
    for k in keys:
        src = open(translation_path(k), encoding="utf-8").read().split("\n")
        src = [l for l in src if not (l.startswith("<!--") or l.startswith("GENERATED") or l.startswith("Built by")
                                       or l.startswith("To change") or l == "-->")]
        fix = lambda s: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", s)
        body = []
        for l in src:
            if l.strip() == "---":
                continue
            if l.startswith("# ") or l.startswith("## "):
                body.append("#" + fix(l))
            else:
                body.append(fix(l))
        while body and not body[0].strip():
            body.pop(0)
        parts.append("\n\n" + "\n".join(body).rstrip("\n"))
    open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write("".join(parts) + "\n")
    print(f"{project}/translation.rtl.md: {', '.join(keys)}")


def build():
    pk = present_keys()
    for k in pk:
        build_one(k)
    for project in sorted({t[1] for t in TEXTS}):
        ks = [t[0] for t in TEXTS if t[1] == project and t[0] in pk]
        if ks:
            build_project(project, ks)
    # verify the combined files against the per-key files
    bad = 0
    for project in sorted({t[1] for t in TEXTS}):
        p = os.path.join(HERE, project, "translation.rtl.md")
        if not os.path.exists(p):
            continue
        comb = [l for l in open(p, encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        src = []
        for k in [t[0] for t in TEXTS if t[1] == project and t[0] in pk]:
            src += [re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", l)
                    for l in open(translation_path(k), encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        if comb != src:
            print(f"{project}: combined numbered lines differ from the per-file translations")
            bad += 1
        txt = open(p, encoding="utf-8").read()
        refs = re.findall(r"\[\^([^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^([^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)) or len(defs) != len(set(defs)):
            print(f"{project}: footnote mismatch ({len(refs)} refs, {len(defs)} defs)")
            bad += 1
    ok = verify(pk)
    return ok and bad == 0


def grep(pat, gilg=False):
    rx = re.compile(pat)
    data = all_data()
    for k in present_keys():
        ent, seq, _ = read_annotated(annotated_path(k))
        for lab in seq:
            if rx.search(strip_marks(ent[lab])):
                print(f"{k} {lab}: {ent[lab]}   ‹{', '.join(data[k][3].get(lab, []))}›")
    if gilg:
        g = os.path.join(os.path.dirname(HERE), "אפוס-גילגמש")
        sys.path.insert(0, g)
        import gilg_config
        for t in gilg_config.TEXTS:
            a = gilg_config.read_annotated(gilg_config.annotated_path(t[0]))
            if not a:
                continue
            for lab in a[1]:
                if rx.search(strip_marks(a[0][lab])):
                    print(f"Gilg {t[0]} {lab}: {a[0][lab]}")


def lemma(pat):
    rx = re.compile(pat)
    data = all_data()
    heb = all_hebrew()
    for t in TEXTS:
        k = t[0]
        for lab in data[k][0]:
            if any(rx.search(x) for x in data[k][3].get(lab, [])):
                print(f"{k} {lab}: `{data[k][1].get(lab)}`\n    {heb.get(k, {}).get(lab, '(not yet drafted)')}")


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "pars" and rest:
        sys.exit(pars(rest[0]))
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build() else 1)
    if cmd == "grep" and rest:
        grep(rest[0], "--gilg" in a)
        return
    if cmd == "lemma" and rest:
        lemma(rest[0])
        return
    sys.exit(__doc__)


if __name__ == "__main__":
    main()
