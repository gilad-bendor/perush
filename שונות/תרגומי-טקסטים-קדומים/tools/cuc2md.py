#!/usr/bin/env python3
"""The Copenhagen Ugaritic Corpus (CUC, Zenodo 10.5281/zenodo.10695308, CC BY-NC 4.0) -> line data and Markdown.

CUC is a Text-Fabric dataset (tf/<version>/*.tf) plus per-tablet word parses (auto_parsing/<v>/KTU 1.x.tsv: surface
form, morphological parse, DULAT lemma, POS, English gloss; reviewed/ has human-checked parses for a few tablets).
This module reads the .tf files directly (no text-fabric package needed) and builds, per tablet, the KTU line list
with its readings marked the way the corpus files of this folder mark them:

    [ ]   restored letters (CUC emen=restored; KTU's square brackets)
    ⸢ ⸣   damaged / uncertain letters (CUC cert=False on a letter that is not restored; KTU's italics.
          CUC's cert is True for a certain letter: 1.100, a well-kept tablet, is ~99% True)
    ⟨ ⟩   letters omitted by the scribe, supplied (emen=missing; KTU < >)
    { }   letters written by mistake, to be deleted (emen=excised or redundant; KTU « » / { })
    x     a lost or illegible letter;  .  the word divider;  b/d  an alternative reading (CUC alt)

Labels: "<column>:<line>" for tablets with columns ("III:38"), the bare line number for one-column tablets ("62").
KTU's own line numbering (= CUC's) is the base numbering of the translations.

Usage (run with python3 -I):
  python3 -I tools/cuc2md.py md  <cuc-dir> <tablet> [<tablet>…] [--out DIR]   # KTU-1.3.md etc. (default sources/CUC/text/)
  python3 -I tools/cuc2md.py lines <cuc-dir> <tablet> [FROM [TO]]            # print labelled lines
  python3 -I tools/cuc2md.py json <cuc-dir> <out.json> <tablet> [<tablet>…]   # line data for the corpus tool
<cuc-dir> is the unzipped release, sources/CUC/cuc-v0.2.8-unzipped/DT-UCPH-cuc-0408967 ; <tablet> is "1.3" or "KTU 1.3".
"""
import json, os, re, sys

TF_VERSION = '0.2.8'
PARSE_VERSION = '0.2.7'


def _readtf(path):
    vals, edge = {}, False
    with open(path, encoding='utf-8') as f:
        lines = f.read().split('\n')
    i = 0
    while i < len(lines) and lines[i].startswith('@'):
        if lines[i] == '@edge':
            edge = True
        i += 1
    i += 1
    n = 0
    for ln in lines[i:]:
        if ln == '':
            n += 1
            continue
        if '\t' in ln:
            spec, v = ln.split('\t', 1)
            nodes = []
            for part in spec.split(','):
                if '-' in part:
                    a, b = part.split('-')
                    nodes += range(int(a), int(b) + 1)
                else:
                    nodes.append(int(part))
            for k in nodes:
                vals[k] = v
            n = nodes[-1]
        else:
            n += 1
            vals[n] = ln
    return vals


def _slots(spec):
    r = []
    for p in spec.split(','):
        if '-' in p:
            a, b = p.split('-')
            r += range(int(a), int(b) + 1)
        else:
            r.append(int(p))
    return r


class CUC:
    def __init__(self, cucdir):
        self.dir = cucdir
        d = os.path.join(cucdir, 'tf', TF_VERSION)
        self.f = {}
        for name in ['otype', 'sign', 'emen', 'cert', 'alt', 'trailer', 'trailer_emen', 'g_cons', 'line', 'column',
                     'tablet', 'side', 'cont', 'oslots', 'tablet_info']:
            p = os.path.join(d, name + '.tf')
            if os.path.exists(p):
                self.f[name] = _readtf(p)
        # node ranges per type
        self.types = {}
        with open(os.path.join(d, 'otype.tf'), encoding='utf-8') as fh:
            for ln in fh:
                m = re.match(r'^(\d+)-(\d+)\t(\w+)', ln)
                if m:
                    self.types[m.group(3)] = (int(m.group(1)), int(m.group(2)))
        self.osl = {n: _slots(s) for n, s in self.f['oslots'].items()}
        self._index()

    def _range(self, t):
        a, b = self.types[t]
        return range(a, b + 1)

    def _index(self):
        # slot -> word
        self.slot2word = {}
        for w in self._range('word'):
            for s in self.osl.get(w, []):
                self.slot2word[s] = w
        self.tablets = {}
        for t in self._range('tablet'):
            self.tablets[self.f['tablet'][t]] = t
        slot2line = {}
        for ln in self._range('line'):
            for s in self.osl.get(ln, []):
                slot2line[s] = ln
        slot2col = {}
        for c in self._range('column'):
            for s in self.osl.get(c, []):
                slot2col[s] = c
        self.slot2line, self.slot2col = slot2line, slot2col

    def tablet_lines(self, name):
        """[(label, line_node, column, line_no, side)] in tablet order."""
        if not name.startswith('KTU'):
            name = 'KTU ' + name
        t = self.tablets[name]
        seen, out = set(), []
        for s in self.osl[t]:
            ln = self.slot2line.get(s)
            if ln is None or ln in seen:
                continue
            seen.add(ln)
            col = self.f['column'].get(self.slot2col.get(s), '')
            out.append((ln, col))
        cols = {c for _, c in out}
        res = []
        for ln, col in out:
            no = self.f['line'].get(ln, '')
            label = f'{col}:{no}' if (len(cols) > 1 or (col and col != 'I')) else f'{no}'
            res.append((label, ln, col, no, self.f.get('side', {}).get(ln, '')))
        return res

    def render_line(self, ln):
        """The line as text with the folder's bracket marks, and its words [(word_node, plain_consonants)]."""
        sl = self.osl[ln]
        F = self.f
        words, lastw = [], None
        groups = []          # [(word, [slots])] in line order
        for s in sl:
            w = self.slot2word.get(s)
            if not groups or groups[-1][0] != w:
                groups.append((w, []))
            groups[-1][1].append(s)
            if w is not None and w != lastw:
                words.append(w)
                lastw = w
        sp = (' ', '\xa0', '')
        out_chars = []       # (char, state)
        for w, ss in groups:
            letters = [i for i, s in enumerate(ss) if F['sign'].get(s, '') not in sp]
            last = letters[-1] if letters else -1
            prev_lac = False
            for i, s in enumerate(ss):
                ch = F['sign'].get(s, '')
                em = F['emen'].get(s, '')
                st = {'restored': 'R', 'missing': 'M', 'excised': 'E', 'redundant': 'E'}.get(em, '')
                if ch in sp:
                    if i > last and letters:
                        continue          # the trailer slots: written below
                    if st == 'R':         # a lost stretch inside the word's span
                        if not prev_lac:
                            out_chars.append(('…', 'R'))
                        prev_lac = True
                    elif letters and i < last:
                        out_chars.append((' ', ''))
                    continue
                prev_lac = False
                if F['cert'].get(s) == 'False' and st == '':
                    st = 'U'
                alt = F['alt'].get(s)
                if alt:
                    ch = ch + '/' + alt
                out_chars.append((ch, st))
            if w is not None and F['trailer'].get(w) == '.':
                te = F['trailer_emen'].get(w, '')
                tst = 'R' if te == 'restored' else ('E' if te in ('excised', 'redundant') else '')
                out_chars += [(' ', ''), ('.', tst), (' ', '')]
            else:
                out_chars.append((' ', ''))
        # collapse spaces; a space takes the state of a bracket run only if both neighbours have it
        text = ''
        opener = {'R': '[', 'M': '⟨', 'E': '{', 'U': '⸢'}
        closer = {'R': ']', 'M': '⟩', 'E': '}', 'U': '⸣'}
        # compute effective states for spaces
        eff = []
        for i, (ch, st) in enumerate(out_chars):
            if ch == ' ':
                prev = next((out_chars[j][1] for j in range(i - 1, -1, -1) if out_chars[j][0] != ' '), '')
                nxt = next((out_chars[j][1] for j in range(i + 1, len(out_chars)) if out_chars[j][0] != ' '), '')
                eff.append((' ', prev if prev == nxt and prev in opener else ''))
            else:
                eff.append((ch, st))
        cur = ''
        for ch, st in eff:
            if st != cur:
                if cur in closer:
                    text += closer[cur]
                if st in opener:
                    text += opener[st]
                cur = st
            text += ch
        if cur in closer:
            text += closer[cur]
        text = re.sub(r' +', ' ', text).strip()
        text = re.sub(r'\[ ', ' [', text)
        text = re.sub(r' \]', '] ', text)
        text = re.sub(r' +', ' ', text).strip()
        cont = F['cont'].get(ln) == 'continued'
        return text, [(w, F['g_cons'].get(w, '')) for w in words], cont


def load_parses(cucdir, tablet):
    """{line-label: [(surface, parse, dulat, pos, gloss, comment)]} from auto_parsing (and reviewed, marked)."""
    tab = tablet if tablet.startswith('KTU') else 'KTU ' + tablet
    res = {}
    for kind, path in (('auto', os.path.join(cucdir, 'auto_parsing', PARSE_VERSION, tab + '.tsv')),
                       ('reviewed', os.path.join(cucdir, 'reviewed', tab + '.tsv')),
                       ('reviewed', os.path.join(cucdir, 'reviewed', tab + '.txt'))):
        if not os.path.exists(path):
            continue
        cur = None
        with open(path, encoding='utf-8') as fh:
            for ln in fh:
                ln = ln.rstrip('\n')
                if ln.startswith('# '):
                    m = re.match(r'# KTU [\d.]+ (?:([IVX]+):)?(\S+)', ln)
                    if m:
                        col, no = m.group(1), m.group(2)
                        cur = (kind, col, no)
                        res.setdefault(cur, [])
                    continue
                if not ln.strip() or ln.startswith('id\t') or cur is None:
                    continue
                parts = ln.split('\t') + [''] * 7
                res[cur].append(tuple(parts[1:7]))
    return res


def parses_for(parses, col, no, kind='auto'):
    return parses.get((kind, col or None, str(no))) or parses.get((kind, col, str(no))) or []


def tablet_data(cuc, tablet):
    parses = load_parses(cuc.dir, tablet)
    rows = []
    for label, ln, col, no, side in cuc.tablet_lines(tablet):
        text, words, cont = cuc.render_line(ln)
        c = col if ':' in label else None
        rows.append({'label': label, 'text': text, 'side': side, 'cont': cont,
                     'words': [g for _, g in words],
                     'parse': parses_for(parses, c, no, 'auto') or parses_for(parses, col, no, 'auto'),
                     'reviewed': parses_for(parses, c, no, 'reviewed') or parses_for(parses, col, no, 'reviewed')})
    return rows


def _merge(parses):
    """One row per (surface, lemma, gloss): the POS alternatives joined with ' | '."""
    out, idx = [], {}
    for surf, morph, dulat, pos, gloss, com in parses:
        k = (surf, dulat, gloss)
        if k in idx:
            row = out[idx[k]]
            if pos and pos not in row[3].split(' | '):
                row[3] = row[3] + ' | ' + pos
            if com and com not in row[5]:
                row[5] = (row[5] + '; ' + com).strip('; ')
        else:
            idx[k] = len(out)
            out.append([surf, morph, dulat, pos, gloss, com])
    return [tuple(r) for r in out]


def _fmt_parse(p):
    surf, morph, dulat, pos, gloss, com = p
    s = f'`{surf}` – {dulat or "?"}; {pos or "?"}; "{gloss or "?"}"'
    if com:
        s += f' ({com})'
    return s


def write_md(cuc, tablet, outdir):
    tab = tablet if tablet.startswith('KTU') else 'KTU ' + tablet
    rows = tablet_data(cuc, tab)
    info = cuc.f.get('tablet_info', {}).get(cuc.tablets[tab], '')
    os.makedirs(outdir, exist_ok=True)
    path = os.path.join(outdir, tab.replace(' ', '-') + '.md')
    with open(path, 'w', encoding='utf-8') as out:
        out.write(f'# {tab} – the Copenhagen Ugaritic Corpus (CUC v{TF_VERSION}; parses {PARSE_VERSION})\n\n')
        out.write('Generated by `tools/cuc2md.py` from the CUC Text-Fabric dataset (CC BY-NC 4.0; Højgaard, Naaijer, '
                  'Notarius et al., built on KTU³). Git-ignored (guidelines §8). Marks: `[ ]` restored, `⸢ ⸣` damaged '
                  '(KTU italics), `⟨ ⟩` omitted by the scribe, `{ }` to be deleted, `x` a lost letter, `.` the word '
                  'divider. The parses are CUC\'s machine parses (DULAT lemma, POS, gloss): **check every one** – '
                  'they are often wrong or list several candidates.\n\n')
        if info:
            out.write(f'Tablet note (CUC): {info}\n\n')
        side = ''
        for r in rows:
            if r['side'] != side and r['side']:
                out.write(f'\n*({r["side"]})*\n\n')
                side = r['side']
            out.write(f'**{r["label"]}** `{r["text"]}`' + (' (continued on the next line)' if r['cont'] else '') + '\n')
            for p in _merge(r['parse']):
                out.write(f'- {_fmt_parse(p)}\n')
            if r['reviewed']:
                out.write('- *reviewed parse (CUC `reviewed/`):*\n')
                for p in _merge(r['reviewed']):
                    out.write(f'  - {_fmt_parse(p)}\n')
            out.write('\n')
    return path, len(rows)


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 1
    cmd, cucdir = argv[0], argv[1]
    cuc = CUC(cucdir)
    if cmd == 'md':
        args = argv[2:]
        outdir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'sources', 'CUC', 'text')
        if '--out' in args:
            i = args.index('--out')
            outdir = args[i + 1]
            args = args[:i] + args[i + 2:]
        for t in args:
            p, n = write_md(cuc, t, outdir)
            print(f'{p}: {n} lines')
    elif cmd == 'lines':
        t = argv[2]
        rows = tablet_data(cuc, t)
        labels = [r['label'] for r in rows]
        a = labels.index(argv[3]) if len(argv) > 3 else 0
        b = labels.index(argv[4]) if len(argv) > 4 else (a if len(argv) > 3 else len(rows) - 1)
        for r in rows[a:b + 1]:
            print(f'{r["label"]}\t{r["text"]}')
    elif cmd == 'json':
        out = argv[2]
        data = {}
        for t in argv[3:]:
            tab = t if t.startswith('KTU') else 'KTU ' + t
            data[tab] = tablet_data(cuc, tab)
        with open(out, 'w', encoding='utf-8') as fh:
            json.dump(data, fh, ensure_ascii=False, indent=0)
        print(out)
    else:
        print(__doc__)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
