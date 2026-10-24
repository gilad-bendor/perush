"""The Septuagint (Rahlfs 1935, from Greek Wikisource raw wikitext) as verses, and a search over them.

    python3 -I -B tools/lxx_verses.py grep '<regex>' [BOOK…]   every LXX verse whose letters match (the regex is matched
                                                              against the verse with diacritics removed and in lower
                                                              case, so write 'κητ' for κῆτος, κήτη …)
    python3 -I -B tools/lxx_verses.py show BOOK CH:V           one verse (BOOK = genesis, exodus, leviticus, deuteronomy,
                                                              isaiah, job, jonah, amos, micah, zechariah, psalms)
    python3 -I -B tools/lxx_verses.py books                    the books on disk

The wikitext files are in ../sources/LXX-Rahlfs-1935--el-wikisource/ (git-ignored: licence unclear, see its README;
re-fetch with the URLs there). Psalms use the LXX numbering (LXX 73 = MT 74); their files are psalms/ps-lxx-<N>.wikitext.
Verse markers are {{κ|<n>}}, chapters ===<n>===. Reads untrusted downloads with re only.
"""
import glob
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
DIR = os.path.join(HERE, "..", "sources", "LXX-Rahlfs-1935--el-wikisource")


def _strip(s):
    s = re.sub(r"\[\[[^\]|]*\|([^\]]*)\]\]", r"\1", s)
    s = re.sub(r"\[\[([^\]]*)\]\]", r"\1", s)
    s = re.sub(r"'''?|<[^>]+>", "", s)
    return re.sub(r"\s+", " ", unicodedata.normalize("NFC", s)).strip()


def flat(s):
    s = unicodedata.normalize("NFD", s)
    return "".join(c for c in s if not unicodedata.combining(c)).lower().replace("ς", "σ")


def _verses(text, chapter=None):
    out = []
    parts = re.split(r"^===\s*(\d+)\s*===\s*$", text, flags=re.M) if chapter is None else ["", str(chapter), text]
    for i in range(1, len(parts) - 1, 2):
        ch, body = parts[i], parts[i + 1]
        body = re.sub(r"\{\{(?!κ\|)[^}]*\}\}", "", body)
        seg = re.split(r"\{\{κ\|(\d+)\}\}", body)
        for k in range(1, len(seg) - 1, 2):
            out.append((int(ch), int(seg[k]), _strip(seg[k + 1])))
    return out


def books():
    b = {}
    for f in glob.glob(os.path.join(DIR, "*-rahlfs.wikitext")):
        b[os.path.basename(f).split("-")[0]] = f
    if glob.glob(os.path.join(DIR, "psalms", "ps-lxx-*.wikitext")):
        b["psalms"] = os.path.join(DIR, "psalms")
    return b


def verses(book):
    f = books()[book]
    if book == "psalms":
        out = []
        for p in sorted(glob.glob(os.path.join(f, "ps-lxx-*.wikitext"))):
            n = int(re.search(r"(\d+)", os.path.basename(p)).group(1))
            out += _verses(open(p, encoding="utf-8").read(), n)
        return out
    return _verses(open(f, encoding="utf-8").read())


def main(a):
    if not a:
        sys.exit(__doc__)
    if a[0] == "books":
        for k, v in sorted(books().items()):
            print(k, v)
    elif a[0] == "show":
        ch, v = a[2].split(":")
        for c, n, t in verses(a[1]):
            if c == int(ch) and n == int(v):
                print(f"{a[1]} {c}:{n} {t}")
    elif a[0] == "grep":
        rx = re.compile(flat(a[1]))
        for b in (a[2:] or sorted(books())):
            for c, n, t in verses(b):
                if rx.search(flat(t)):
                    print(f"{b} {c}:{n} {t}")
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main(sys.argv[1:])
