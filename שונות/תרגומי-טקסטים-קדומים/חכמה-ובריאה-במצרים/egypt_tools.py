"""Tools of the Egyptian corpus (`חכמה-ובריאה-במצרים/`: the Instruction of Amenemope, the Egyptian creation texts, the
Book of the Heavenly Cow). Run with python3 -I -B from any folder.

    python3 -I -B egypt_tools.py units                    the texts (KEYs), their project folder and line counts
    python3 -I -B egypt_tools.py data KEY [FROM [TO]]     a translator's line data: each base line (with the bracket
                                                         marks), every word with its TLA lemma id, morphology and the
                                                         TLA's German gloss in context, the fixed lines (renderings §7)
                                                         and the lines of the corpus that repeat it, with their Hebrew
    python3 -I -B egypt_tools.py tr KEY [FROM [TO]]       the TLA's (or El Hawary's) German sentence translation: rank 3,
                                                         read only AFTER drafting the lines (guidelines §3)
    python3 -I -B egypt_tools.py fill FILE…               replace every `@` under a `### <label>` by the exact base line
    python3 -I -B egypt_tools.py lex '<regex>'            every corpus line whose transliteration or lemma id matches,
                                                         with its Hebrew: how a word was rendered so far
    python3 -I -B egypt_tools.py lemma TLA-ID|'<regex>'   the forms and German glosses of a TLA lemma (or the lemmas
                                                         whose German gloss matches) across the base texts
    python3 -I -B egypt_tools.py verify [KEY…] [--strict]
    python3 -I -B egypt_tools.py build [KEY…]             translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B egypt_tools.py grep '<regex>' [--all]   the unvocalized `>` lines of this corpus (--all: of every
                                                         corpus in the folder), with the source line
    python3 -I -B egypt_tools.py gates                    print the reserved / gated words, traps and formulas
    python3 -I -B egypt_tools.py selftest                 run the gates on the test lines of renderings.md §9

KEYs (renderings.md §1): AM (Amenemope, pBM EA 10474, labels page.line "1.1"…"28.1"), MK (Merikare E 130–138,
pPetersburg 1116A vs., labels "E130"…), MT (the Memphite Theology, Shabaka Stone, El Hawary's line labels "1a"…"64"),
PT571 PT486 PT527 PT600 (Pyramid Text spells, AED wall labels, e.g. "P/V/W.34"), HC (the Heavenly Cow, KV 17 Seti I,
columns "1"…"95"). Annotated file: <project>/annotated-<KEY>.rtl.md.

Base texts (../sources/): AED-TEI (TLA 2018, CC BY-SA 4.0) read through ../tools/aed2md.py; the Memphite Theology from
El-Hawary-2010--Wortschoepfung--OBO-243/memphite-transliteration.tsv (our transcription of El Hawary's edition).

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow the base's line list (none missing,
     duplicated or out of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals the base line exactly (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings in the bracket-free unvocalized `>` line: an error unless the line's licence text (its
     transliteration + TLA lemma ids) matches the licensing regex (renderings.md §5);
  5. TRAPS: unvocalized strings that read as another Hebrew word (renderings.md §5.3);
  6. FORMULAS: where the source line has a fixed formula, the Hebrew must have its fixed rendering (§6);
  7. FIXED lines (§7): the `>` line equals the fixed Hebrew (brackets, marks, punctuation and niqqud ignored), or the
     entry says `[סטייה מן הקבוע: <reason>]`;
  8. repeated lines (identical bracket-free source, 3+ words) with different Hebrew are listed (justify or fix).
Exit code 1 on any error of 1–7.
"""
import difflib
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import aed2md  # noqa: E402

AED = os.path.join(ROOT, "sources", "AED-TEI")
MT_TSV = os.path.join(ROOT, "sources", "El-Hawary-2010--Wortschoepfung--OBO-243", "memphite-transliteration.tsv")
MT_DE = os.path.join(ROOT, "sources", "El-Hawary-2010--Wortschoepfung--OBO-243", "memphite-german.tsv")

P1 = "1-מוסר-אמנמופה"
P2 = "2-בריאה-במצרים"
P3 = "3-ספר-הפרה-השמימית"
# KEY: (project, Hebrew title, kind, file, selection)
UNITS = {
    "AM": (P1, "מוּסַר אֲמֶנֶמוֹפֶּה", "aed", "Amenemope--pBM-EA-10474/5JO44VJZERAB3HQUHMFSMNXH6I.xml", None),
    "MK": (P2, "מֶרִיכָּרֶע: האל ובני האדם (E 130–138)", "aed-E", "Merikare--pPetersburg-1116A/YZSISQLOINELTMJDPXQ45O5IUU.xml", (130, 138)),
    "MT": (P2, "התאולוגיה של מֹף (אבן שַׁבַּכָּה)", "tsv", None, None),
    "PT571": (P2, "טקסט הפירמידות 571 (פֶּפִּי הראשון)", "aed", "PT-571--West-wall/RKYIL56JTJFP3JAJI2FTEWARKA.xml", None),
    "PT486": (P2, "טקסט הפירמידות 486 (פֶּפִּי הראשון)", "aed", "PT-486--West-wall/ZAV2GQBVWBDSBOQIX4JNXP3DYI.xml", None),
    "PT527": (P2, "טקסט הפירמידות 527 (מֶרֶנְרַא)", "aed", "PT-527--West-wall/UY2LJNHE4JEFLMATP2CN3YLXH4.xml", None),
    "PT600": (P2, "טקסט הפירמידות 600 (פֶּפִּי השני)", "aed", "PT-600--East-wall/NHY7Q7ERPNEWTK5BWG7KELURNU.xml", None),
    "HC": (P3, "ספר הפרה השמימית (קבר סֵתִי הראשון)", "aed", "Heavenly-Cow--KV17-Seti-I/WHEOIX5P5ZAVVFU4BGO6OWASV4.xml", None),
}
PROJECT_TITLES = {P1: "מוסר אמנמופה", P2: "בריאת העולם במצרים: מריכרע, התאולוגיה של מֹף, טקסטי הפירמידות",
                  P3: "ספר הפרה השמימית"}
# the variant witnesses a translator consults (printed by `data KEY --wit`)
WITNESSES = {
    "AM": ["Amenemope--tLouvre-E-17173/J54RCGRIM5CYLB5T27RUS5G7D4.xml", "Amenemope--oKairo-SR-1840/WWBWAINUHFAXBCPM4JT7CR4EZA.xml",
           "Amenemope--tMoskau-I.1.d.324/IC4YJ45UHFF53NCIOCBKQZ4UXE.xml", "Amenemope--pStockholm-MM-18416/HRK4O53VK5GX7AKGVDXUWXIQEU.xml",
           "Amenemope--tTurin-CGT-58005/BG2HK57AOVAXPLDFLPF2LEN3ZE.xml"],
    "MK": ["Merikare--pMoskau-4658/Z3IP3NIFJVGTNIV47MWEMXKQJQ.xml", "Merikare--pCarlsberg-VI/FTVMO4SFGBHHBA4RTMZITSRNAM.xml"],
    "HC": ["Heavenly-Cow--Tutankhamun-shrine/62AD3D3IY5EMTHDDJZ5UV42RWM.xml", "Heavenly-Cow--KV9-Ramses-VI/ENW4HOGRDVHFFB4UNYYQZQ4ZKY.xml"],
    "PT571": ["PT-571--West-wall-south/PFW6EIFCGRBQ5KWI44CEVLMVAI.xml"],
    "PT486": ["PT-486--East-wall/43NPRIN3UJGCJN7UOHQKGNYJLA.xml"],
}
NIQ = "֑-ֽֿ-ׇ"


# ---------------------------------------------------------------- base texts
def _pt_label(lab):
    return re.sub(r"\s*=.*$", "", lab).strip().replace(" ", ".")


def _alt_gaps(words):
    """Amenemope: AED's <gap/> between two analyses of ONE written word (no text is lost there) -> ' / '."""
    out = []
    for i, w in enumerate(words):
        if w["feats"] == "gap" and out and i + 1 < len(words) and words[i + 1]["feats"] != "gap":
            a = re.sub(r"[^a-zꜣꜥḥḫẖšḏṯ]", "", out[-1]["surf"].lower())
            b = re.sub(r"[^a-zꜣꜥḥḫẖšḏṯ]", "", words[i + 1]["surf"].lower())
            if a and b and difflib.SequenceMatcher(None, a, b).ratio() >= 0.5:
                out.append({"id": "", "surf": "/", "lemma": "", "feats": "alt", "gloss": ""})
                continue
        out.append(w)
    return out


_DATA = {}


def rows(key):
    """[row], row = {label, text, words: [{surf, lemma, feats, gloss}], sents, orig}."""
    if key in _DATA:
        return _DATA[key]
    proj, title, kind, f, sel = UNITS[key]
    out = []
    if kind == "tsv":
        if not os.path.exists(MT_TSV):
            sys.exit(f"missing {MT_TSV}")
        for l in open(MT_TSV, encoding="utf-8"):
            if l.startswith("#") or not l.strip():
                continue
            c = l.rstrip("\n").split("\t")
            out.append({"label": c[0].strip(), "text": c[1].strip(), "words": [], "sents": [], "orig": c[0].strip()})
    else:
        lines = aed2md.parse(os.path.join(AED, f))
        for i, ln in enumerate(lines):
            lab = ln["label"]
            if kind == "aed-E":
                if not (sel[0] <= i + 1 <= sel[1]):
                    continue
                lab = f"E{i + 1}"
            elif key.startswith("PT"):
                lab = _pt_label(lab)
            words = _alt_gaps(ln["words"]) if key == "AM" else ln["words"]
            out.append({"label": lab, "text": " ".join(w["surf"] for w in words), "words": words,
                        "sents": ln["sents"], "orig": ln["label"]})
    _DATA[key] = out
    return out


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def plain_src(t):
    """A base line without bracket marks: for comparisons and licences."""
    t = re.sub(r"\{[^}]*\}", "", t or "")
    t = re.sub(r"[\[\]⸢⸣⟨⟩()?]", "", t)
    t = t.replace("…", " ").replace(" / ", " ").replace(" | ", " ")
    return re.sub(r"\s+", " ", t).strip()


def license_text(key, lab):
    r = row(key, lab)
    if not r:
        return ""
    lems = " ".join(sorted({"tla" + w["lemma"].replace("tla", "") for w in r["words"] if w.get("lemma")}))
    t = plain_src(r["text"])
    # a word split across two lines: also join the edge tokens with the neighbours
    rs = rows(key)
    i = rs.index(r)
    extra = ""
    if i > 0 and plain_src(rs[i - 1]["text"]).split() and t.split():
        extra += " " + plain_src(rs[i - 1]["text"]).split()[-1] + t.split()[0]
    if i + 1 < len(rs) and plain_src(rs[i + 1]["text"]).split() and t.split():
        extra += " " + t.split()[-1] + plain_src(rs[i + 1]["text"]).split()[0]
    return (t + extra + " | " + lems).lower()


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, UNITS[key][0], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, UNITS[key][0], f"translation-{key}.rtl.md")


def read_annotated(key):
    """({label: hebrew}, label sequence, {label: source line}, {label: entry text}, problems) or None."""
    p = annotated_path(key)
    if not os.path.exists(p):
        return None
    heb, seq, src, body, probs = {}, [], {}, {}, []
    cur = None
    for l in open(p, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in heb:
                probs.append(f"duplicate entry {cur}")
            heb[cur], body[cur] = [], []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is None:
            continue
        body[cur].append(l)
        if l.startswith("> "):
            heb[cur].append(l[2:].strip())
        elif l.startswith("`") and cur not in src and not heb[cur]:
            src[cur] = l.strip()
    for k, v in heb.items():
        if len(v) != 1:
            probs.append(f"entry {k}: {len(v)} '>' lines")
    return ({k: (v[0] if v else "") for k, v in heb.items()}, seq, src,
            {k: "\n".join(v) for k, v in body.items()}, probs)


def present_keys():
    return [k for k in UNITS if os.path.exists(annotated_path(k))]


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(k)
        out[k] = a[0] if a else {}
    return out


def strip_marks(s):
    """Hebrew without brackets, editorial marks, footnote refs, quotation marks and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״{}]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- gates (renderings.md §5–§6)
W = r"(?<![א-ת])[ובלמהכש]{0,3}"     # optional prefixes at a word start
WN = r"(?<![א-ת])[ובלהכש]{0,3}"     # the same without מ
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licensing regex on the licence text or None = never, why)
RESERVED = [
    # --- Gen 1–2 and the dossier's words: never in an Egyptian line (no Egyptian cognate) ---
    (W + alt("אלוהים", "אלהים", "אלוהי", "אלהי", "אלוהיו", "אלוהינו", "אלוהיך") + E, None, "nṯr = אֵל / nṯr.w = אֵלִים; אֱלֹהִים never (§5.1)"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "ויברא", "יברא", "בראם", "בוראו", "בוראם") + E, None,
     "the root ברא never: jri̯ = עָשָׂה, qmꜣ = יָצַר?, ms = יָלַד, ḫpr = נִהְיָה (§5.1); Gen 1's `בָּרָא` only in the apparatus"),
    (W + alt("תנין", "תנינים", "התנין", "התנינים") + E, None, "msḥ (crocodile) = תִּמְסָח; `תַּנִּין` never in a line (the dossier rule; Ex 7:9 in the apparatus)"),
    (W + alt("לויתן", "לוויתן") + E, None, "לִוְיָתָן never"),
    (W + alt("תהום", "תהומות", "התהום", "תהומה") + E, None, "Nun = נוּן; `תְּהוֹם` never (Gen 1:2 in the apparatus)"),
    (W + alt("תהו", "ותהו", "בהו", "ובהו") + E, None, "תֹּהוּ / בֹּהוּ never"),
    (W + alt("רקיע", "הרקיע", "רקיעים") + E, None, "p.t = שָׁמַיִם; רָקִיעַ never"),
    (W + alt("שאול", "שאולה") + E, None, "dwꜣ.t = הַדּוּאַת (transliterated); שְׁאוֹל never"),
    (W + alt("מבול", "המבול") + E, None, "no flood in these texts: מַבּוּל never"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "וישבות", "שבתה", "שבות") + E, None, "the root שבת never (Gen 2:2–3): ḥtp = נָח (Ex 20:11 `וַיָּנַח`)"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות") + E, None, "ṯꜣw = רוּחַ (the dossier's E130); נְשָׁמָה never (Gen 2:7 in the apparatus)"),
    (W + alt("נחם", "ניחם", "נחמתי", "וינחם", "נחמה", "התנחם", "נחמו") + E, None, "the root נחם never (Gen 6:6–7): no Egyptian word for 'regret' in the Cow"),
    (W + alt("התעצב", "ויתעצב", "עצב", "עצבון", "עיצבון") + E, None, "עצב never (Gen 6:6, 3:16–17)"),
    (W + alt("מחה", "אמחה", "ימחה", "נמחה", "מחו", "מחית") + E, None, "the root מחה never (Gen 6:7, 7:4, 23): render the Egyptian verb by its own sense"),
    (W + alt("יצר", "יצרו", "יצרה", "יצרי", "וייצר", "יוצר", "יוצרו", "יוצרם", "ייצר", "יצרתי") + E, r"qmꜣ", "the root יצר only for qmꜣ 'create' [equivalent Gen 2:7] (the noun יֵצֶר of Gen 6:5 never; qd 'build' = בָּנָה)"),
    (W + alt("אדמה", "האדמה", "אדמתו") + E, None, "אֲדָמָה never (no Egyptian cognate; tꜣ = אֶרֶץ, ꜣḥ.t = שָׂדֶה)"),
    (W + alt("רוח", "רוחות", "הרוח", "רוחו", "רוחי", "רוחה", "רוחם") + E, r"ṯꜣw|ṯꜣ,w|\bnfw|šw\b|šw,t|ṯꜣ\.wj", "רוּחַ only for ṯꜣw 'breath, wind, air' (the dossier's E130) [equivalent Gen 1:2, 2:7]"),
    (W + alt("צלם", "צלמו", "צלמיו", "צלמים", "בצלמו", "צלמי") + E, r"snn|ẖnty|tjt|twt|ẖnt", "צֶלֶם only for snn (the dossier's E131) and the image words (twt, tjt): Gen 1:26–27"),
    (W + alt("דמות", "דמותו", "בדמות", "כדמות", "דמותם") + E, r"twt|tjt|qj|qd\b", "דְּמוּת only for twt / tjt / qj 'form' (Gen 1:26)"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "היטיב", "ייטב", "טובו", "טובי", "טובתו", "טובתי", "מיטב", "הטוב", "הטובה") + E, r"nfr",
     "טוֹב only for nfr [equivalent Gen 1] (ꜣḫ 'useful, better' = מוֹעִיל / the 'better than' saying מוּטָב … מִ־)"),
    (W + alt("תורה", "תורת", "תורתי", "תורתו", "התורה", "תורות") + E, None, "תּוֹרָה never: sbꜣ.yt = מוּסָר (Prov 1:8, 23:12) [equivalent]"),
    # --- Amenemope and the Torah / Proverbs (renderings §4.3) ---
    (W + alt("גבול", "גבולות", "גבולי", "גבולו", "הגבול", "הגבולות", "גבולה", "גבולם") + E, r"tšj|tꜣš|tš,jw|tšjw|tšj", "גְּבוּל only for tꜣš / tšj 'boundary' [equivalent Deut 19:14, Prov 22:28]"),
    (W + alt("הסיג", "תסיג", "מסיג", "תסג", "יסיג", "הסגת", "נסוג", "נסג", "השיג") + E, None, "the root סוג / נסג never (Deut 19:14, 27:17, Prov 22:28): rmni̯ = הֵזִיז / נָשָׂא, hꜣd = פָּלַשׁ"),
    (W + alt("אלמנה", "אלמנות", "אלמנת", "האלמנה", "אלמנתו") + E, r"ḫꜣr|ḫꜣrj|ḫꜣ\(rj\)|ḫꜣrt", "אַלְמָנָה only for ḫꜣr.t [equivalent Prov 23:10 (the emendation `גבול אלמנה`), Deut 24:19–21]"),
    (W + alt("יתום", "יתומים", "היתום", "יתומה", "יתומי") + E, None, "יָתוֹם never: nmḥ = דַּל (Late Egyptian 'poor man'; Prov 23:10 `יְתוֹמִים` in the apparatus)"),
    (W + alt("איפה", "האיפה", "איפות", "איפת", "ואיפה") + E, r"jp,t|jp\.t|\bjpt|jp\b", "אֵיפָה only for jp.t (the oipe) [cognate: an Egyptian loanword, Deut 25:14–15, Lev 19:36, Prov 20:10]"),
    (W + alt("פלס", "הפלס", "פלסים") + E, r"jws|jwsw|jws,w|jwsꜣ", "פֶּלֶס only for jws(w) 'the hand-balance' [equivalent Prov 16:11, Isa 40:12]"),
    (W + alt("מאזנים", "מאזני", "המאזנים", "מאזניו", "מאזניים") + E, r"mḫꜣ|mḫꜣy|mḫꜣ,t|mḫꜣ\(y\)", "מֹאזְנַיִם only for mḫꜣ.t 'the balance' [equivalent Lev 19:36, Prov 16:11, 11:1]"),
    (W + alt("שחד", "השחד", "שוחד") + E, None, "שֹׁחַד never: fqꜣ 'reward' = שָׂכָר (Ex 23:8, Deut 16:19 in the apparatus)"),
    (W + alt("עור", "עיוור", "עוור", "העור", "העיוור", "העוור", "עורים", "עיוורים", "עוורים") + E, r"kꜣmn|kꜣmꜣn|špw|bꜣk", "עִוֵּר only for kꜣmn 'blind' [equivalent Lev 19:14, Deut 27:18]"),
    (W + alt("פסח", "הפסח", "פסחים", "פיסח") + E, r"qbqb", "פִּסֵּחַ only for qbqb 'lame' [equivalent Lev 21:18]"),
    (W + alt("גר", "הגר", "גרים", "לגר", "גרך") + E, None, "גֵּר never (no Egyptian word for the resident alien in these texts)"),
    (W + alt("מוסר", "המוסר", "מוסרי", "מוסרו") + E, r"sbꜣ|sbꜣ,yt|sbꜣyt|sbꜣ,y\(t\)|sbꜣ\.yt|sbꜣ,tj", "מוּסָר only for sbꜣ.yt [equivalent Prov 1:8, 23:12]"),
    (W + alt("שלושים", "שלשים", "שלישים", "השלושים", "השלשים") + E, r"\b30\b|mꜥbꜣ|mꜥbꜣ,yt", "שְׁלֹשִׁים only for the number 30 / the Thirty (Prov 22:20)"),
    (W + alt("חם", "החם", "חמים", "החמים", "חמם") + E, r"šmm|šmw|\bšm\b|šmmt|srf", "the hot man: pꜣ šmm = הַחַם (always vocalized: Ham, Gen 9:18)"),
    (W + alt("כסיל", "הכסיל", "כסילים", "אויל", "האויל", "אוילים", "נבל", "הנבל") + E, r"wḫꜣ|\bḫm\b|ḫm,w", "the fool words of Proverbs only for the Egyptian fool words: wḫꜣ = כְּסִיל, ḫm 'the ignorant' = הַבּוּר? (renderings §4.3)"),
    # --- Egyptian loanwords in Hebrew (renderings §4.2): only for their Egyptian source ---
    (W + alt("תבה", "תיבה", "התבה", "התיבה", "תבת", "תיבת", "תבתו", "תיבתו", "תבתך", "תיבתך") + E, r"ḏbꜣ|ḏb\(ꜣ\)|ḏbꜣ,t|ṯbt|db\.t", "תֵּבָה only for ḏbꜣ.t 'chest, coffin' [cognate: Egyptian loanword, Gen 6:14, Ex 2:3]"),
    (W + alt("יאור", "היאור", "יאורים", "היאורים", "יאורי", "יאוריהם", "יאר") + E, r"jtrw|jtr\b|jwtr|jtwr|jtr,w|jꜣtr|\bjtrw", "יְאֹר only for jtrw 'river' [cognate: Egyptian loanword, Gen 41:1, Ex 2:3]"),
    (W + alt("סוף", "הסוף", "בסוף", "כסוף") + E, r"ṯwf|ṯwfj|twfj", "סוּף only for ṯwfj 'papyrus thicket' [cognate: loanword, Ex 2:3]; 'end' = קֵץ / אַחֲרִית"),
    (W + alt("אחו", "האחו", "באחו") + E, r"ꜣḫ\b|ꜣḫ,w|ꜣḫ-w|ꜣḫw", "אָחוּ only for ꜣḫ(w) 'reed meadow' [cognate: loanword, Gen 41:2]"),
    (W + alt("פרעה", "פרעו", "לפרעה", "הפרעה") + E, r"pr-ꜥꜣ|pr-ꜥꜣ", "פַּרְעֹה only for pr-ꜥꜣ 'the Great House' [cognate]; nsw = מֶלֶךְ, ḥm=f = הוֹד מַלְכוּתוֹ"),
    (W + alt("חרטם", "חרטמים", "החרטם", "החרטמים", "חרטמי") + E, r"ḥr,j-tp|ḥry-tp|ḥr\(,j\)-tp|ḥrj-tp", "חַרְטֹם only for ḥry-tp [cognate: loanword, Gen 41:8, Ex 7:11]"),
    (W + alt("שש", "השש", "בשש") + E, r"šs\b|šs,w|\bšsr|šsꜣ", "שֵׁשׁ 'linen' only for šs [cognate] (always vocalized: 'six')"),
    (W + alt("קסת", "הקסת") + E, r"gstj|gst", "קֶסֶת only for gstj 'the scribe's palette' [cognate: loanword, Ezek 9:2]"),
    (W + alt("טבעת", "הטבעת", "טבעות", "טבעתו") + E, r"ḏbꜥ,t|ḏbꜥ\.t|ḏbꜥt|ḫtm", "טַבַּעַת only for ḏbꜥ.t 'seal' [cognate: loanword, Gen 41:42]; ḏbꜥ 'finger' = אֶצְבַּע"),
    (W + alt("חותם", "החותם", "חתם", "חתום", "חתומה", "נחתם", "חותמו") + E, r"ḫtm|ḫtm,w|ḫtm\.t", "the root חתם only for ḫtm 'seal' [cognate: loanword, Gen 38:18]"),
    (W + alt("שיטה", "שיטים", "עצי שיטים") + E, r"šnḏ|šnḏ,t", "שִׁטָּה only for šnḏ.t 'acacia' [cognate: loanword, Ex 25:5]"),
    (W + alt("קוף", "קופים", "הקוף", "הקופים") + E, r"\bgf\b|gjf|gfn|ꜥnꜥn", "קוֹף only for gf [cognate: loanword, 1 Kgs 10:22]; the baboon jꜥnꜥ = בַּבּוּן"),
    (W + alt("זרת", "הזרת", "בזרת") + E, None, "זֶרֶת never: ḏr.t 'hand' = יָד"),
    # --- other corpora's reservations, carried over for safety ---
    (W + alt("צדק", "צדיק", "צדקה", "הצדיק", "הצדק", "צדקתו", "צדיקים") + E, None, "צֶדֶק / צַדִּיק never: mꜣꜥ.t = אֱמֶת, mꜣꜥ-ḫrw = אֲמִתִּי־קוֹל (renderings §4.1)"),
    (W + alt("משפט", "המשפט", "משפטו", "משפטי", "משפטים", "משפטך") + E, None, "מִשְׁפָּט never: qnb.t = בֵּית־דִּין, wpi̯ = שָׁפַט? (renderings §4.1)"),
    (W + alt("ברית", "הברית", "בריתי", "בריתו") + E, None, "בְּרִית never"),
    (W + alt("עולם", "עולמים", "לעולם", "העולם") + E, None, "עוֹלָם never: nḥḥ = נֶצַח, ḏ.t = עַד (the cross-corpus rule; Prov 22:28 `גְּבוּל עוֹלָם` in the apparatus)"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line; condition regex on the licence text: if it matches, the unvocalized string is an error;
# None = always), why. Renderings §5.3 "Always vocalized".
TRAPS = [
    (RW + r"(?:רע|הרע)" + RE_, r"\brꜥ\b|rꜥw|\bRꜥ", "Re is רַא (renderings §3): an unvocalized רע where the source has Rꜥ is a trap ('evil')"),
    (RW + r"(?:פתח)" + RE_, r"ptḥ|pth", "Ptah must be vocalized פְּתָח ('open')"),
    (RW + r"(?:גב)" + RE_, r"gb\b|gbb", "Geb must be vocalized גֶּבּ ('back')"),
    (RW + r"(?:מין)" + RE_, r"mnw\b|mnw\{tj\}|mnw", "Min must be vocalized מִין ('kind', Gen 1:21 `לְמִינֵהוּ`)"),
    (RW + r"(?:חם|החם)" + RE_, r"šmm", "the hot man must be vocalized הַחַם (Ham, Gen 9:18; Ps 105:23 `בְּאֶרֶץ חָם`)"),
    (RW + r"(?:אלים|אלי|אלה|אלת|אלתו|אלתי)" + RE_, r"nṯr", "'gods' / 'god of' / 'goddess' must be vocalized אֵלִים / אֵלֵי / אֵלָה / אֵלַת"),
    (RW + r"(?:און)" + RE_, r"jwnw|jwn,w|ꜣwnw", "Heliopolis must be vocalized אוֹן ('strength', 'iniquity')"),
    (RW + r"(?:מף|נף)" + RE_, r"mn-nfr|ḥw,t-kꜣ-ptḥ|jnb-ḥḏ|jnb.w-ḥḏ", "Memphis must be vocalized מֹף"),
    (RW + r"(?:בא)" + RE_, r"\bbꜣ\b|bꜣ=|bꜣ\.", "the ba must be vocalized בָּא ('came')"),
    (RW + r"(?:כא)" + RE_, r"\bkꜣ\b|kꜣ=|kꜣ\.", "the ka must be vocalized כָּא"),
    (RW + r"(?:נון)" + RE_, r"nwn|nw,w|nnw", "Nun must be vocalized נוּן (the primeval water; Joshua's father)"),
    (RW + r"(?:נות)" + RE_, r"nw,t|nwt", "Nut must be vocalized נוּת"),
    (RW + r"(?:שו)" + RE_, r"šw\b|šw\.|šw=", "Shu must be vocalized שׁוּ"),
    (RW + r"(?:סת)" + RE_, r"stš|sth|swtḫ", "Seth must be vocalized סֵת (never שֵׁת)"),
    (RW + r"(?:שי|שאי)" + RE_, r"šꜣy", "Shai (Fate) must be vocalized שַׁאי ('gift')"),
    (RW + r"(?:מאת)" + RE_, r"mꜣꜥ,t|mꜣꜥt", "the goddess Maat must be vocalized מַאַת ('from', 'by')"),
    (RW + r"(?:שש)" + RE_, r"šs\b", "linen must be vocalized שֵׁשׁ ('six')"),
]

# (regex on the bracket-free source line, regex the bracket-free unvocalized Hebrew must match, what)
FORMULAS = [
    (r"^ḥw,t mḥ-1?\d\.t$|^ḥw,t mḥ-2\d\.t$|^ḥw,t mḥ-30\.t$|ḥw,t tp\.t", r"(?:^|\s)הבית ה", "ḥw.t mḥ-N.t = `הַבַּיִת הָ…` (§6.1; the chapter heading, 'house')"),
    (r"(?:^|\s)m-jri̯(?=\s|$)", r"(?:^|\s)[ו]?אל ", "m-jri̯ X = `אַל` + future (§6.2)"),
    (r"\bꜣḫ\b.*\br\b", r"(?:^|\s)[ו]?מוטב ", "ꜣḫ X r Y (better X than Y) = `מוּטָב X מִ־Y` (§6.3)"),
    (r"\bpꜣ šmm\b|\bpꜣyw =k šmm\b", r"(?:^|\s)[ו]?[ל]?(?:ה)?חם(?:\s|$|[,.;:])", "pꜣ šmm = `הַחַם` (§6.4)"),
    (r"\bgr mꜣꜥ\b", r"(?:ה)?שותק (?:ה)?(?:אמיתי|באמת)", "gr mꜣꜥ = `הַשּׁוֹתֵק הָאֲמִתִּי` (§6.4)"),
    (r"\bn ḫpr\.t\b|\bn ḫp\[?r\]?\.t\b", r"(?:^|\s)[ו]?טרם ", "n ḫpr.t X = `טֶרֶם נִהְיָה X` (§6.5)"),
    (r"\bḏ\(d\)-mdw\b|\bḏd-mdw\b", r"(?:^|\s)[ו]?(?:דברים לאמר|נאמר)|אמירה", "ḏd-mdw = `דְּבָרִים לֵאמֹר:` (§6.5)"),
]


def fixed_lines():
    p = os.path.join(HERE, "renderings.md")
    out = {}
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 7.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Lines"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        heb = cells[2].strip("`").strip()
        for lab in re.split(r";\s*", cells[0]):
            m = re.match(r"^([A-Z]+\d*) (\S+)$", lab.strip())
            if m:
                out[(m.group(1), m.group(2))] = (cells[1].strip("`"), heb)
    return out


def lic(rx, key, lab):
    return rx is None or re.search(rx, license_text(key, lab), re.I) is not None


def check_line(key, lab, heb, body, fixed, out):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    src = plain_src((row(key, lab) or {}).get("text", ""))
    for rx, allow, why in RESERVED:
        if re.search(rx, plain) and not (allow and lic(allow, key, lab)):
            if "[היתר שער:" in body and re.search(r"\[היתר שער: [^\]]*" + re.escape(re.search(rx, plain).group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: {why}\n    {heb}\n    src: {src}")
            bad += 1
    for rx, cond, why in TRAPS:
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    for srx, hrx, what in FORMULAS:
        if re.search(srx, src) and not re.search(hrx, nopunct(plain)):
            if "[סטייה מן הנוסחה" in body:
                continue
            out.append(f"FORMULA {key} {lab}: {what}\n    {heb}\n    src: {src}")
            bad += 1
    if (key, lab) in fixed:
        fh = fixed[(key, lab)][1]
        if nopunct(strip_marks(fh)) != nopunct(plain) and "[סטייה מן הקבוע" not in body:
            out.append(f"FIXED {key} {lab}: differs from renderings §7\n    fixed: {fh}\n    here:  {heb}")
            bad += 1
    return bad


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
    keys = keys or present_keys()
    fixed = fixed_lines()
    bad = 0
    for key in keys:
        if key not in UNITS:
            print(f"unknown KEY {key}")
            bad += 1
            continue
        a = read_annotated(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, body, probs = a
        ordr = order(key)
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in ordr if x not in heb]
        extra = [x for x in seq if x not in ordr]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in the base: {extra}")
            bad += 1
        if [x for x in seq if x in ordr] != [x for x in ordr if x in heb]:
            print(f"{key}: entries out of the base's order")
            bad += 1
        msgs = []
        for k in seq:
            if not heb[k].strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            s = src.get(k)
            r = row(key, k)
            if s is None:
                print(f"{key} {k}: no backticked source line")
                bad += 1
            elif s == "`@`":
                print(f"{key} {k}: `@` not filled (run fill)")
                bad += 1
            elif r and s.strip("`") != r["text"]:
                print(f"{key} {k}: source line differs from the base\n    A: {s}\n    B: `{r['text']}`")
                bad += 1
            bad += check_line(key, k, heb[k], body.get(k, ""), fixed, msgs)
        for m in msgs:
            print(m)
        tr = translation_lines(key)
        if tr is not None:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != heb[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {heb[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (base {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = plain_src(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical bracket-free source) with different Hebrew (justify in the apparatus or fix):")
    for nk, lst in groups.items():
        hs = [(k2, lab, allh.get(k2, {}).get(lab)) for k2, lab in lst]
        hs = [h for h in hs if h[2]]
        if len(hs) < 2 or (keys and not any(h[0] in keys for h in hs)):
            continue
        if len({nopunct(strip_marks(h[2])) for h in hs}) > 1:
            nd += 1
            print(f"- {nk}")
            for k2, lab, h in hs:
                print(f"    {k2} {lab}: {h}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


# ---------------------------------------------------------------- data, tr, fill, lex, lemma, grep
def _similar(key, lab, nk, corpus, allh, fixed, thr=0.75):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            r = 1.0
        elif len(nk.split()) >= 3 and abs(len(n2) - len(nk)) < 0.5 * len(nk):
            r = difflib.SequenceMatcher(None, nk, n2).ratio()
            if r < thr:
                continue
        else:
            continue
        h = allh.get(k2, {}).get(l2) or (fixed.get((k2, l2)) or (None, None))[1] or "(not yet drafted)"
        out.append((r, k2, l2, n2, h))
    out.sort(key=lambda x: -x[0])
    return out


def _corpus():
    return [(k2, r["label"], plain_src(r["text"])) for k2 in UNITS for r in rows(k2)]


def cmd_units():
    for k, u in UNITS.items():
        print(f"{k}\t{u[0]}\t{len(rows(k))} lines\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def _span(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    return rs[i:j + 1]


def cmd_data(key, a=None, b=None, wit=False):
    corpus = _corpus()
    allh = all_hebrew()
    fixed = fixed_lines()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    print("Words: surface – TLA lemma id (morphology) \"the TLA's German gloss in context\" (a dictionary aid, not a "
          "translation: check the form yourself).\n")
    for r in sp:
        print(f"### {r['label']}" + (f"   (AED: [{r['orig']}])" if r["orig"] != r["label"] else ""))
        print(f"`{r['text']}`")
        for w in r["words"]:
            if w["feats"] == "alt":
                print("- `/` – AED gives two analyses of the same written word (no text lost)")
            else:
                print(f"- {aed2md.fmt_word(w)}")
        if (key, r["label"]) in fixed:
            print(f"- FIXED (renderings §7): {fixed[(key, r['label'])][1]}")
        nk = plain_src(r["text"])
        if nk and len(nk.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh, fixed)[:6]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} `{n2}` → {h}")
        print()
    if wit and key in WITNESSES:
        print("\n# The other witnesses (AED; consult for variants: say in the apparatus where they differ)\n")
        for f in WITNESSES[key]:
            p = os.path.join(AED, f)
            print(f"## {aed2md.title(p)} ({f.split('/')[0]})")
            for l in aed2md.parse(p):
                print(f"- [{l['label']}] `{l['text']}`")
            print()


def cmd_tr(key, a=None, b=None):
    if UNITS[key][2] == "tsv":
        de = {}
        if os.path.exists(MT_DE):
            for l in open(MT_DE, encoding="utf-8"):
                if not l.startswith("#") and "\t" in l:
                    c = l.rstrip("\n").split("\t")
                    de[c[0].strip()] = c[1]
        for r in _span(key, a, b):
            print(f"[{r['label']}] {de.get(r['label'], '(none)')}")
        return
    trs = aed2md.translations(os.path.join(AED, UNITS[key][3]))
    seen = []
    for r in _span(key, a, b):
        for s in r["sents"]:
            if s not in seen:
                seen.append(s)
                print(f"[{r['label']}] {trs.get(s, '(no translation)')}")


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z]+\d*)\.rtl\.md$", path)
    if not m or m.group(1) not in UNITS:
        sys.exit("not an annotated-<KEY>.rtl.md file")
    key = m.group(1)
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
            continue
        if ln.strip() == "`@`" and cur:
            r = row(key, cur)
            if r:
                text[i] = "`" + r["text"] + "`"
                n += 1
            else:
                print(f"no base line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


def cmd_lex(pat):
    rx = re.compile(pat, re.I)
    allh = all_hebrew()
    for k in UNITS:
        for r in rows(k):
            if rx.search(r["text"]) or rx.search(license_text(k, r["label"])):
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: `{r['text']}`\n    {h or '(not yet drafted)'}")


def cmd_lemma(q):
    """A lemma id (tla12345 / 12345) → its forms and glosses; else a regex on the glosses → the lemmas."""
    idq = re.sub(r"^tla", "", q) if re.match(r"^(tla)?\d+$", q) else None
    found = {}
    for f in sorted(glob.glob(os.path.join(AED, "*", "*.xml"))):
        if re.search(r"_(st|wt|hiero)\.xml$", f):
            continue
        for ln in aed2md.parse(f):
            for w in ln["words"]:
                lem = w.get("lemma", "").replace("tla", "")
                if not lem:
                    continue
                if (idq and lem == idq) or (not idq and re.search(q, w.get("gloss", ""), re.I)):
                    e = found.setdefault(lem, {"forms": {}, "gloss": {}, "feats": {}})
                    e["forms"][w["surf"]] = e["forms"].get(w["surf"], 0) + 1
                    e["gloss"][w["gloss"]] = e["gloss"].get(w["gloss"], 0) + 1
                    e["feats"][w["feats"]] = e["feats"].get(w["feats"], 0) + 1
    for lem, e in sorted(found.items(), key=lambda x: -sum(x[1]["forms"].values())):
        print(f"tla{lem}: {sum(e['forms'].values())}×  forms: {', '.join(f'{k} ({v})' for k, v in sorted(e['forms'].items(), key=lambda x: -x[1])[:8])}")
        print(f"    glosses: {'; '.join(f'{k} ({v})' for k, v in sorted(e['gloss'].items(), key=lambda x: -x[1])[:5])}")
        print(f"    morphology: {'; '.join(f'{k} ({v})' for k, v in sorted(e['feats'].items(), key=lambda x: -x[1])[:4])}")


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if rx.search(strip_marks(heb[lab])):
                    print(f"{k} {lab}: {heb[lab]}   ‹{(row(k, lab) or {}).get('text', '')}›")
        return
    for f in sorted(glob.glob(os.path.join(ROOT, "*", "**", "annotated*.rtl.md"), recursive=True)):
        srcl, lab = None, None
        for ln in open(f, encoding="utf-8"):
            if ln.startswith("### "):
                srcl, lab = None, ln[4:].strip()
            elif ln.startswith("`") and srcl is None:
                srcl = ln.strip()
            elif ln.startswith("> ") and rx.search(strip_marks(ln[2:])):
                print(f"{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()[:140]}   ‹{(srcl or '')[:100]}›")


def cmd_gates():
    print("RESERVED (Hebrew regex | licensed by | why):")
    for rx, allow, why in RESERVED:
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why})")
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for s, h, w in FORMULAS:
        print(f"  {s}  →  {h}   ({w})")


def cmd_selftest():
    """Run the gates on the test lines of renderings.md §9: | KEY label | expect (ok/err) | Hebrew |."""
    p = os.path.join(HERE, "renderings.md")
    insec, n, fails = False, 0, 0
    fixed = fixed_lines()
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 9.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Line"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z]+\d*) (\S+)$", cells[0])
        if not m:
            continue
        key, lab = m.groups()
        heb = cells[2].strip("`")
        msgs = []
        b = check_line(key, lab, heb, "", fixed, msgs)
        got = "err" if b else "ok"
        n += 1
        if got != cells[1]:
            fails += 1
            print(f"SELFTEST FAIL {key} {lab}: expected {cells[1]}, got {got}\n    {heb}")
            for x in msgs:
                print("   ", x.replace("\n", "\n    "))
    print(f"selftest: {n} lines, {fails} failure(s)")
    return fails == 0


# ---------------------------------------------------------------- build
def sections(key):
    out, cur = [], None
    for l in open(annotated_path(key), encoding="utf-8"):
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


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../egypt_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../egypt_tools.py build\n-->\n\n")


def build_one(key):
    pdir = os.path.join(HERE, UNITS[key][0])
    ip = os.path.join(pdir, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {UNITS[key][1]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n## {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{n}]"
                notes.append(f"[^{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    text = head + intro + "\n" + "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(translation_path(key), "w", encoding="utf-8").write(text)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build_project(proj, keys):
    pdir = os.path.join(HERE, proj)
    hp = os.path.join(pdir, "translation--head.rtl.md")
    head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {PROJECT_TITLES[proj]}"
    parts = [GENERATED.format(src="translation--head.rtl.md and translation-<KEY>.rtl.md") + head]
    for k in keys:
        src = open(translation_path(k), encoding="utf-8").read().split("\n")
        src = [l for l in src if not (l.startswith("<!--") or l.startswith("GENERATED") or l.startswith("Built by")
                                       or l.startswith("To change") or l == "-->")]
        fix = lambda s, k=k: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", s)
        body = []
        for l in src:
            if l.strip() == "---":
                continue
            body.append("#" + fix(l) if (l.startswith("# ") or l.startswith("## ")) else fix(l))
        while body and not body[0].strip():
            body.pop(0)
        parts.append("\n\n" + "\n".join(body).rstrip("\n"))
    open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write("".join(parts) + "\n")
    print(f"{proj}/translation.rtl.md: {', '.join(keys)}")


def build(keys=None):
    pk = [k for k in present_keys() if not keys or k in keys]
    for k in pk:
        build_one(k)
    bad = 0
    for proj in (P1, P2, P3):
        ks = [k for k in present_keys() if UNITS[k][0] == proj]
        if not ks:
            continue
        if len(ks) == 1 and proj != P2:
            # one text in the project: translation.rtl.md = translation-<KEY>.rtl.md under the project head
            pass
        build_project(proj, ks)
        p = os.path.join(HERE, proj, "translation.rtl.md")
        comb = [l for l in open(p, encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        srcl = []
        for k in ks:
            srcl += [re.sub(r"\[\^([^\]]+)\]", lambda m, k=k: f"[^{k}-{m.group(1)}]", l)
                     for l in open(translation_path(k), encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        if comb != srcl:
            print(f"{proj}: combined numbered lines differ from the per-file translations")
            bad += 1
        txt = open(p, encoding="utf-8").read()
        refs = re.findall(r"\[\^([^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^([^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(f"{proj}: footnote mismatch ({len(refs)} refs, {len(defs)} defs)")
            bad += 1
    ok = verify(present_keys())
    return ok and bad == 0


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "units":
        return cmd_units()
    if cmd == "data" and rest:
        return cmd_data(*rest[:3], wit="--wit" in a)
    if cmd == "tr" and rest:
        return cmd_tr(*rest[:3])
    if cmd == "fill" and rest:
        for p in rest:
            cmd_fill(p)
        return
    if cmd == "lex" and rest:
        return cmd_lex(rest[0])
    if cmd == "lemma" and rest:
        return cmd_lemma(rest[0])
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build(rest) else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "gates":
        return cmd_gates()
    if cmd == "selftest":
        sys.exit(0 if cmd_selftest() else 1)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()
