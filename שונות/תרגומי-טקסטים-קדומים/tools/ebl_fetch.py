#!/usr/bin/env python3
"""
Fetch a chapter of a text from the eBL corpus (electronic Babylonian Library, LMU Munich)
and build a readable working edition from it.

    python3 -I ebl_fetch.py <genre> <category> <index> <stage> <chapter> <out-dir> [--no-glossary]

Example (Gilgameš, Standard Babylonian, Tablet XI):
    python3 -I ebl_fetch.py L 1 4 "Standard Babylonian" XI ../sources/eBL/Gilgamesh-SB-XI

List all corpus texts and their chapters:
    python3 -I ebl_fetch.py --list

Output (in <out-dir>):
    _raw/text.json                  the text's metadata (intro, chapter list, references)
    _raw/chapter-display.json       the full chapter (lines, lemmatization, manuscripts, notes, ATF)
    _raw/words/<lemma>.json         eBL dictionary entries of every lemma in the chapter
    _raw/bibliography/<id>.json     every bibliography item cited in the notes
    chapter.atf                     the eBL edition in ATF (reconstruction + every manuscript + translation + notes)
    reading-edition.md              per line: normalized Akkadian, eBL translation, lemma glosses, notes, parallels,
                                    and the manuscripts' transliterations
    glossary.md                     every lemma: eBL dictionary meaning + the lines it occurs in
    manuscripts.md                  table of the manuscripts (sigla, museum numbers, period, provenance)
    bibliography.md                 the cited bibliography (resolves the @bib{...} keys used in the notes)

Re-running is cheap: anything already in _raw/ is not downloaded again (delete _raw/ to refresh).
"""

import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://www.ebl.lmu.de/api"
SITE = "https://www.ebl.lmu.de"


def fetch_json(url, cache_path, retries=3):
    if os.path.exists(cache_path):
        with open(cache_path, encoding="utf-8") as f:
            return json.load(f)
    last_error = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "perush-translation-tools/1.0"})
            with urllib.request.urlopen(req, timeout=180) as r:
                data = r.read()
            parsed = json.loads(data)
            os.makedirs(os.path.dirname(cache_path), exist_ok=True)
            with open(cache_path, "wb") as f:
                f.write(data)
            return parsed
        except Exception as e:  # network hiccups: retry with backoff
            last_error = e
            time.sleep(2 * (attempt + 1))
    print(f"  ! failed: {url} ({last_error})", file=sys.stderr)
    return None


def q(s):
    return urllib.parse.quote(s, safe="")


def safe_name(s):
    return re.sub(r"[^\w.\-]+", "_", s)


def parts_text(parts):
    """eBL 'parts' arrays (StringPart / EmphasisPart / ...) -> markdown."""
    out = []
    for p in parts or []:
        t = p.get("text", "")
        if p.get("type") == "EmphasisPart" and t.strip():
            out.append(f"*{t}*")
        else:
            out.append(t)
    return "".join(out)


def atf_inline_to_md(s):
    """Convert eBL inline markup in notes/translations to markdown."""
    s = re.sub(r"@i\{([^}]*)\}", r"*\1*", s)
    s = re.sub(r"@akk\{([^}]*)\}", r"*\1*", s)
    s = re.sub(r"@sux\{([^}]*)\}", r"*\1*", s)
    s = re.sub(r"@bib\{([^}@]*)@?([^}]*)\}", lambda m: f"[{m.group(1)}{(': ' + m.group(2)) if m.group(2) else ''}]", s)
    return s


def list_texts():
    req = urllib.request.Request(f"{API}/texts", headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=180) as r:
        texts = json.loads(r.read())
    for t in texts:
        chapters = ", ".join(f"{c['stage']}/{c['name']}" for c in t.get("chapters", []))
        print(f"{t['genre']} {t['category']} {t['index']}\t{t['name']}\t[{chapters}]")


def parse_atf_blocks(atf):
    """Split the chapter ATF into per-line blocks keyed by the line number (as written, e.g. '148', '3\\'')."""
    blocks, current, key = {}, [], None
    pending_prefix = []  # #tr lines precede the reconstruction line
    for raw in atf.splitlines():
        line = raw.rstrip()
        m = re.match(r"^(\S+)\. %n ", line)
        if m:
            if key is not None:
                blocks.setdefault(key, []).append(current)
            key, current = m.group(1), pending_prefix + [line]
            pending_prefix = []
        elif line.startswith("#tr."):
            pending_prefix.append(line)
        elif key is not None and line:
            current.append(line)
    if key is not None:
        blocks.setdefault(key, []).append(current)
    return blocks


def line_number_label(n):
    if n.get("type") == "LineNumberRange" or ("start" in n and "end" in n):
        return line_number_label(n["start"]) + "-" + line_number_label(n["end"])
    num = n.get("number")
    s = str(num) if num is not None else "?"
    if n.get("hasPrime"):
        s += "'"
    if n.get("suffixModifier"):
        s += n["suffixModifier"]
    if n.get("prefixModifier"):
        s = n["prefixModifier"] + "+" + s
    return s


def main(argv):
    if len(argv) >= 2 and argv[1] == "--list":
        list_texts()
        return
    if len(argv) < 7:
        print(__doc__)
        sys.exit(1)
    genre, category, index, stage, chapter, out_dir = argv[1:7]
    with_glossary = "--no-glossary" not in argv
    raw = os.path.join(out_dir, "_raw")
    os.makedirs(raw, exist_ok=True)

    text_url = f"{API}/texts/{genre}/{category}/{index}"
    chap_url = f"{text_url}/chapters/{q(stage)}/{q(chapter)}/display"
    web_url = f"{SITE}/corpus/{genre}/{category}/{index}/{q(stage)}/{q(chapter)}"
    print(f"text:    {text_url}\nchapter: {chap_url}")
    text = fetch_json(text_url, os.path.join(raw, "text.json"))
    chap = fetch_json(chap_url, os.path.join(raw, "chapter-display.json"))
    if not chap or not chap.get("lines"):
        print("No lines in this chapter (edition not yet published on eBL?).")
        sys.exit(2)

    title = parts_text(chap.get("title"))
    record = chap.get("record", {})
    authors = "; ".join(f"{a.get('prefix', '')} {a.get('name', '')} ({a.get('role', '').lower()})".strip() for a in record.get("authors", []))
    translators = "; ".join(f"{a.get('prefix', '')} {a.get('name', '')}".strip() for a in record.get("translators", []))
    head = (
        f"# {chap.get('textName')} – {stage} {chapter}: “{title}”\n\n"
        f"- Source: eBL corpus – {web_url}\n"
        f"- API: {chap_url}\n"
        f"- Edition: {authors}\n"
        f"- Translation: {translators}\n"
        f"- Generated by `tools/ebl_fetch.py` on {time.strftime('%Y-%m-%d')} – do not edit by hand; re-run the tool instead.\n\n"
    )

    with open(os.path.join(out_dir, "chapter.atf"), "w", encoding="utf-8") as f:
        f.write(chap.get("atf", ""))

    # --- lemmas
    line_lemmas = []  # (line label, [(form, [lemma ids])])
    all_lemmas = {}
    for ln in chap["lines"]:
        label = line_number_label(ln["number"])
        forms = []
        for v in ln.get("variants", [])[:1]:
            for tok in v.get("reconstruction", []):
                lem = tok.get("uniqueLemma") or []
                if tok.get("lemmatizable") and lem:
                    forms.append((tok.get("value", ""), lem))
                    for l in lem:
                        all_lemmas.setdefault(l, []).append(label)
        line_lemmas.append((label, forms))

    words = {}
    if with_glossary:
        print(f"dictionary: {len(all_lemmas)} lemmas")
        for i, lemma in enumerate(sorted(all_lemmas)):
            w = fetch_json(f"{API}/words/{q(lemma)}", os.path.join(raw, "words", safe_name(lemma) + ".json"))
            if w:
                words[lemma] = w
            if (i + 1) % 50 == 0:
                print(f"  {i + 1}/{len(all_lemmas)}")

    def short_gloss(lemma, limit=70):
        g = re.sub(r"\s*\\?\[[^\]]*\\?\]", "", gloss(lemma)).split(";")[0].strip().strip('"').replace('"', "")
        return g if len(g) <= limit else g[:limit].rsplit(" ", 1)[0] + "…"

    def gloss(lemma):
        w = words.get(lemma)
        if not w:
            return ""
        return (w.get("meaning") or "").replace("\n", " ").strip()

    with open(os.path.join(out_dir, "glossary.md"), "w", encoding="utf-8") as f:
        f.write(head)
        f.write("Meanings are from the eBL dictionary (largely based on CDA – Black, George & Postgate, *A Concise Dictionary of Akkadian*). "
                "Stem-specific meanings (G, D, Š, N…) follow the main gloss.\n\n")
        for lemma in sorted(all_lemmas, key=lambda s: s.lower()):
            w = words.get(lemma, {})
            lines = ", ".join(dict.fromkeys(all_lemmas[lemma]))
            f.write(f"## {lemma}\n\n- **Meaning:** {gloss(lemma) or '—'}\n")
            for am in w.get("amplifiedMeanings", []) or []:
                meaning = (am.get("meaning") or "").replace("\n", " ").strip()
                if meaning:
                    f.write(f"  - {am.get('key', '')}: {meaning}\n")
            if w.get("logograms"):
                f.write(f"- **Logograms:** {', '.join(' '.join(l.get('logogram', [])) for l in w['logograms'])}\n")
            f.write(f"- **Lines:** {lines}\n- **eBL:** {SITE}/dictionary/{q(lemma)}\n\n")

    # --- bibliography
    bib_ids = set(re.findall(r"@bib\{([^}@]+)", chap.get("atf", "")))
    for ref in (text or {}).get("references", []):
        if ref.get("id"):
            bib_ids.add(ref["id"])
    with open(os.path.join(out_dir, "bibliography.md"), "w", encoding="utf-8") as f:
        f.write(head)
        for bid in sorted(bib_ids):
            b = fetch_json(f"{API}/bibliography/{q(bid)}", os.path.join(raw, "bibliography", safe_name(bid) + ".json"))
            if not b:
                f.write(f"- **{bid}**: (not resolved)\n")
                continue
            auth = "; ".join(f"{a.get('family', '')}, {a.get('given', '')}" for a in b.get("author", []) or b.get("editor", []) or [])
            year = ""
            issued = b.get("issued", {}).get("date-parts") or []
            if issued and issued[0]:
                year = str(issued[0][0])
            container = b.get("container-title") or b.get("collection-title") or ""
            extra = ", ".join(x for x in [container, str(b.get("volume", "") or ""), str(b.get("page", "") or "")] if x)
            f.write(f"- **{bid}**: {auth} ({year}). *{b.get('title', '')}*{(' – ' + extra) if extra else ''}\n")

    # --- sigla: eBL's API gives only manuscript ids; the ATF lists the manuscripts of each line in the same order
    blocks = parse_atf_blocks(chap.get("atf", ""))
    sigla, seen = {}, {}
    for ln in chap["lines"]:
        label = line_number_label(ln["number"])
        occurrence = seen.get(label, 0)
        nvar = max(1, len(ln.get("variants", [])))  # each variant reconstruction has its own ATF block
        seen[label] = occurrence + nvar
        block_list = blocks.get(label, [])
        block = [b for blk in block_list[occurrence:occurrence + nvar] for b in blk]
        ms_atf = [b for b in block if not b.startswith(("#", "//", "$")) and " %n " not in b]
        ms_ids = [m.get("manuscriptId") for v in ln.get("variants", []) for m in v.get("manuscripts", [])]
        if len(ms_atf) == len(ms_ids):
            for mid, b in zip(ms_ids, ms_atf):
                sigla.setdefault(mid, b.split(" ", 1)[0])

    # --- manuscripts
    mss = chap.get("manuscripts", [])
    with open(os.path.join(out_dir, "manuscripts.md"), "w", encoding="utf-8") as f:
        f.write(head)
        f.write("| Siglum | Museum no. | Period | Provenance | Type | Old sigla | Notes |\n|---|---|---|---|---|---|---|\n")
        for m in mss:
            prov, per, typ = m.get("provenance", ""), m.get("period", ""), m.get("type", "")
            sig = sigla.get(m.get("id"), "?")
            mn = m.get("museumNumber") or {}
            museum = f"{mn.get('prefix', '')} {mn.get('number', '')}{('.' + mn['suffix']) if mn.get('suffix') else ''}".strip()
            old = ", ".join(o.get("siglum", "") for o in m.get("oldSigla", []))
            notes = (m.get("notes") or "").replace("\n", " ").replace("|", "/")
            f.write(f"| {sig} | {museum} | {per} | {prov} | {typ} | {old} | {notes} |\n")

    # --- reading edition
    seen = {}
    with open(os.path.join(out_dir, "reading-edition.md"), "w", encoding="utf-8") as f:
        f.write(head)
        f.write("Per line: **N** = normalized Akkadian reconstruction (`|` metrical foot, `||` caesura); **T** = eBL English translation; "
                "**L** = lemmas with eBL dictionary glosses; then notes, parallel lines, and the manuscripts' transliterations (ATF). "
                "Bibliography keys like [RN117: 889] are resolved in `bibliography.md` (RN117 = George 2003).\n\n")
        for ln, (label, forms) in zip(chap["lines"], line_lemmas):
            occurrence = seen.get(label, 0)
            nvar = max(1, len(ln.get("variants", [])))  # each variant reconstruction has its own ATF block
            seen[label] = occurrence + nvar
            block_list = blocks.get(label, [])
            block = [b for blk in block_list[occurrence:occurrence + nvar] for b in blk]
            recons = [b.split(" %n ", 1)[1] for b in block if " %n " in b]
            recon = recons[0] if recons else ""
            # A line can have several variant reconstructions (eBL "variants"): the ATF repeats the line number.
            variant_recons = recons[1:]
            tr = " ".join(parts_text(t.get("parts")) for t in ln.get("translation", []) if t.get("language") == "en")
            # Notes: the chapter ATF omits many of them, so take them from the JSON variants (fall back to the ATF).
            notes = []
            for v in ln.get("variants", []):
                content = (v.get("note") or {}).get("content") or []
                text = "".join(t.get("value", "") for t in content).strip()
                if text:
                    notes.append(atf_inline_to_md(text))
            def _norm(s):
                return re.sub(r"\W+", "", s)
            joined = _norm(" ".join(notes))
            for b in block:
                if b.startswith("#note:"):
                    n = atf_inline_to_md(b[len("#note: "):])
                    if _norm(n) not in joined:
                        notes.append(n)
            parallels = [b[3:] for b in block if b.startswith("// ")]
            mss_lines = [b for b in block if not b.startswith(("#", "//", "$")) and " %n " not in b]
            section = "\n---\n\n" if ln.get("isBeginningOfSection") else ""
            f.write(f"{section}### {label}\n\n")
            f.write(f"- **N:** {recon}\n")
            for vr in variant_recons:
                f.write(f"- **N (variant, other manuscripts):** {vr}\n")
            if tr:
                f.write(f"- **T:** {tr}\n")
            if forms:
                gl = "; ".join(f"*{form}* ← {', '.join(lem)}{(' “' + short_gloss(lem[0]) + '”') if gloss(lem[0]) else ''}" for form, lem in forms)
                f.write(f"- **L:** {gl}\n")
            for n in notes:
                f.write(f"- **Note:** {n}\n")
            if parallels:
                f.write(f"- **Parallels:** {'; '.join(parallels)}\n")
            if mss_lines:
                f.write("\n```\n" + "\n".join(mss_lines) + "\n```\n")
            f.write("\n")
    print(f"done: {out_dir}")


if __name__ == "__main__":
    main(sys.argv)
