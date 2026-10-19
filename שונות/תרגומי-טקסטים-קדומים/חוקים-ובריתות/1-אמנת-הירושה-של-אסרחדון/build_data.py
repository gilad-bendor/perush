# Build est.json (composite + Tayinat aligned + P&W/Lauinger translation units) for the part translators.
# usage: python3 -I build_data.py ../../sources/ORACC/saao-saa02--Q009186--Esarhaddon-Succession-Treaty   (writes est.json in the cwd)

import re, json, sys
D = sys.argv[1]
def parse(fn):
    out = []; cur = None
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip('\n')
        m = re.match(r'\*\*(o [^*]+)\*\* (.*?)\s*$', l)
        if m:
            cur = {'label': m.group(1).strip(), 'tl': m.group(2).strip(), 'norm': '', 'lem': ''}; out.append(cur); continue
        if cur and l.strip().startswith('norm:'): cur['norm'] = l.strip()[5:].strip()
        elif cur and l.strip().startswith('<sub>lem:'): cur['lem'] = l.strip()[9:].replace('</sub>', '').strip()
        elif l.startswith('*(') and cur is not None: cur.setdefault('after', []).append(l.strip())
    return out
comp = parse(D + '/Q009186--lemmatised.md')
tay = parse(D + '/P500551--Tayinat--lemmatised.md')
# translations
def ptr(fn):
    units = []; head = None
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip()
        if l.startswith('## '): head = l[3:]; continue
        m = re.match(r'\*\*\[([^\]]+)\]\*\* (.*)', l)
        if m:
            rng = m.group(1); first = rng.split(' – ')[0]
            units.append({'first': first, 'rng': rng, 'text': m.group(2).strip(), 'head': head}); head = None
    return units
pw = ptr(D + '/Q009186--translation-Parpola-Watanabe.md')
tt = ptr(D + '/P500551--Tayinat--translation.md')
for c in comp: c['n'] = c['label'][2:]
idx = {c['n']: i for i, c in enumerate(comp)}
# attach P&W units and headings
for u in pw:
    i = idx.get(u['first'][2:])
    if i is None: print('PW unmatched', u['first']); continue
    comp[i]['pw'] = u['rng'] + ': ' + u['text']
    if u['head']: comp[i]['sec'] = u['head']
# Tayinat
for t in tay:
    cn = t['label'][2:].split('_T_')[0]
    t['cn'] = cn
for c in comp: c['tay'] = []
unplaced = []
last = None
for t in tay:
    cn = t['cn'].rstrip('?')
    keys = re.split('[–-]', cn) if cn else []
    k = keys[0] if keys else ''
    if k in idx:
        comp[idx[k]]['tay'].append(t); last = idx[k]
    else:
        # attach to the preceding placed composite line, flagged
        t['unplaced'] = True
        if last is not None: comp[last]['tay'].append(t)
        else: unplaced.append(t)
ttu = {u['first']: u for u in tt}
for t in tay:
    u = ttu.get(t['label'])
    if u: t['tr'] = u['rng'] + ': ' + u['text']
json.dump({'comp': comp, 'unplaced': unplaced}, open('est.json', 'w'), ensure_ascii=False, indent=0)
print(len(comp), sum(len(c['tay']) for c in comp), len(unplaced))
for c in comp:
    if 'sec' in c: print(c['n'], c['sec'])
