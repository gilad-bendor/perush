#!/usr/bin/env node
/**
 * semitic-lexica-fetcher CLI
 *
 *   list                       show the registry
 *   status [id …]              probe live availability of each source (no downloads)
 *   fetch <id …> | --all-open  download everything the registry classes as 'open'
 *   crawl <id> --accept-terms  crawl a small web database (starling|slonline|webonary)
 *   wiktionary                 dump the Wiktionary categories
 *   fetch-url <id> <url>       save one openly published file under data/<id>/
 *   pdf-split <profile> <pdf>  split a purchased/scanned PDF into entries (needs pdfjs-dist)
 *
 * Environment: SLF_CONTACT (e-mail for the User-Agent), SLF_DATA_DIR, SLF_CACHE_DIR,
 * GOOGLE_BOOKS_API_KEY (optional), NODE_USE_ENV_PROXY=1 if you sit behind an HTTPS proxy.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { SOURCES, findSource } from './registry.js';
import type { SourceSpec, StatusReport } from './types.js';
import * as ia from './fetchers/archiveOrg.js';
import * as dspace from './fetchers/dspace.js';
import * as gb from './fetchers/googleBooks.js';
import * as ht from './fetchers/hathitrust.js';
import * as wk from './fetchers/wiktionary.js';
import * as starling from './fetchers/starling.js';
import * as slonline from './fetchers/slonline.js';
import * as webonary from './fetchers/webonary.js';
import { http } from './util/http.js';
import { DATA_ROOT, saveFile, safeName } from './util/manifest.js';
import { PROFILES } from './pdf/profiles.js';
import { entriesToJsonl, pdfToPages, splitEntries } from './pdf/entrySplitter.js';

function usage(): never {
  console.log(`usage: cli <list|status|fetch|crawl|wiktionary|fetch-url|pdf-split> …  (see header of cli.ts)`);
  process.exit(1);
}

function listSources(): void {
  for (const s of SOURCES) {
    console.log(`${s.id.padEnd(32)} [${s.access.padEnd(11)}] ${s.role.padEnd(11)} ${s.title}`);
  }
}

async function probeOne(s: SourceSpec): Promise<StatusReport> {
  const live: StatusReport['live'] = [];
  const add = (probe: string, result: string, ok = true): void => { live.push({ probe, result, ok }); };
  const tryRun = async (label: string, fn: () => Promise<void>) => {
    try { await fn(); } catch (e) { add(label, `error: ${(e as Error).message}`, false); }
  };
  for (const id of s.ids?.archiveOrgItems ?? []) {
    await tryRun(`archive.org:${id}`, async () => {
      const p = await ia.probe(id);
      add(`archive.org:${id}`, `${p.access}${p.title ? ` — ${p.title}` : ''} [${p.collections.join(',')}]`, p.access !== 'missing');
    });
  }
  for (const q of s.ids?.archiveOrgQueries ?? []) {
    await tryRun(`archive.org search`, async () => {
      const hits = await ia.searchItems(q, 20);
      add(`archive.org search: ${q}`, hits.length ? hits.map((h) => `${h.identifier} (${h.year ?? '?'}) ${h.title ?? ''}`).join(' ; ') : 'no hits');
    });
  }
  if (s.ids?.dspace?.handle) {
    const { base, handle } = s.ids.dspace;
    await tryRun(`dspace:${handle}`, async () => {
      const item = await dspace.itemByHandle(base, handle);
      if (!item) { add(`dspace:${handle}`, 'not found', false); return; }
      const bs = await dspace.bitstreams(base, item.uuid);
      add(`dspace:${handle}`, `${item.name} — ${bs.filter((b) => /pdf/i.test(b.mimeType ?? b.name)).length} PDF bitstream(s)`);
    });
  } else if (s.ids?.dspace?.base && s.fetcher === 'dspace') {
    await tryRun('dspace search', async () => {
      const items = await dspace.searchItems(s.ids!.dspace!.base, s.title.split(' — ')[0].split(' (')[0]);
      add('dspace search', items.length ? items.map((i) => `${i.handle} ${i.name}`).join(' ; ') : 'no hits', items.length > 0);
    });
  }
  for (const id of s.ids?.googleBooksIds ?? []) {
    await tryRun(`google-books:${id}`, async () => {
      const v = await gb.volume(id);
      add(`google-books:${id}`, v ? gb.summarize(v) : 'not found', !!v);
    });
  }
  if (s.ids?.googleBooksQuery) {
    await tryRun('google-books search', async () => {
      const vs = await gb.search(s.ids!.googleBooksQuery!);
      add(`google-books search: ${s.ids!.googleBooksQuery}`, vs.length ? vs.map(gb.summarize).join(' ; ') : 'no hits');
    });
  }
  for (const o of s.ids?.hathiOclc ?? []) await tryRun(`hathitrust oclc ${o}`, async () => add(`hathitrust oclc ${o}`, ht.describe(await ht.byOclc(o)).join(' | ')));
  for (const r of s.ids?.hathiRecord ?? []) await tryRun(`hathitrust record ${r}`, async () => add(`hathitrust record ${r}`, ht.describe(await ht.byRecord(r)).join(' | ')));
  for (const c of s.ids?.wiktionaryCategories ?? []) await tryRun(`wiktionary ${c}`, async () => add(`wiktionary ${c}`, `${(await wk.categoryMembers(c)).length} pages`));
  for (const u of s.ids?.urls ?? []) {
    await tryRun(`HEAD ${u}`, async () => {
      const res = await http().get(u, { noCache: true });
      add(`GET ${u}`, `HTTP ${res.status} (${res.headers['content-type'] ?? '?'}, ${res.body.length} bytes)`, res.status < 400);
    });
  }
  return { id: s.id, checkedAt: new Date().toISOString(), access: s.access, live };
}

async function status(ids: string[]): Promise<void> {
  const targets = ids.length ? ids.map((i) => findSource(i) ?? usage()) : SOURCES;
  const reports: StatusReport[] = [];
  for (const s of targets) {
    console.log(`\n== ${s.id} [${s.access}] ${s.title}`);
    const r = await probeOne(s);
    for (const l of r.live) console.log(`  ${l.ok ? '✓' : '✗'} ${l.probe}: ${l.result}`);
    if (!r.live.length) console.log('  (no live probes; see notes)');
    for (const n of s.notes) console.log(`  · ${n}`);
    reports.push(r);
  }
  await fs.mkdir(DATA_ROOT, { recursive: true });
  await fs.writeFile(path.join(DATA_ROOT, 'status.json'), JSON.stringify(reports, null, 2));
  console.log(`\nstatus written to ${path.join(DATA_ROOT, 'status.json')}`);
}

async function fetchSource(s: SourceSpec): Promise<void> {
  if (s.access !== 'open') {
    console.log(`[${s.id}] access=${s.access}: automated download not allowed by policy. See notes:`);
    for (const n of s.notes) console.log(`  · ${n}`);
    // Open excerpts attached to a non-open source (e.g. Rosetta pages) are still fine:
    for (const id of s.ids?.archiveOrgItems ?? []) await ia.downloadItem(s.id, id);
    return;
  }
  for (const id of s.ids?.archiveOrgItems ?? []) await ia.downloadItem(s.id, id);
  for (const q of s.ids?.archiveOrgQueries ?? []) {
    for (const h of await ia.searchItems(q, 20)) await ia.downloadItem(s.id, h.identifier);
  }
  if (s.ids?.dspace) {
    const { base, handle } = s.ids.dspace;
    let item = handle ? await dspace.itemByHandle(base, handle) : undefined;
    if (!item) {
      const hits = await dspace.searchItems(base, s.title.split(' — ')[0].split(' (')[0]);
      item = hits[0];
      if (item) console.log(`[dspace] resolved by search: ${item.handle} ${item.name}`);
    }
    if (item) await dspace.downloadPdfs(s.id, base, item, s.licence);
    else console.warn(`[dspace] nothing found for ${s.id}`);
  }
  for (const c of s.ids?.wiktionaryCategories ?? []) await wk.dumpCategory(s.id, c);
  for (const u of s.ids?.urls ?? []) {
    if (!/\.pdf(\?|$)/i.test(u)) continue;
    const res = await http().get(u);
    if (res.status === 200) await saveFile(s.id, `urls/${safeName(path.basename(new URL(u).pathname))}`, res.body, { url: u, licence: s.licence });
  }
}

async function crawl(id: string, acceptTerms: boolean, max?: number): Promise<void> {
  const s = findSource(id) ?? usage();
  if (s.access === 'terms-check' && !acceptTerms) {
    console.error(`[${id}] this site has no explicit reuse licence. Read its terms/copyright page, then re-run with --accept-terms.`);
    for (const u of s.ids?.urls ?? []) console.error(`  ${u}`);
    process.exit(2);
  }
  switch (s.fetcher) {
    case 'starling': await starling.crawlSemitic(s.id, { maxPages: max }); break;
    case 'slonline': await slonline.crawl(s.id, { maxEntries: max }); break;
    case 'webonary': await webonary.crawl(s.id, { maxEntries: max }); break;
    default: console.error(`[${id}] has no crawler (fetcher=${s.fetcher})`); process.exit(2);
  }
}

async function pdfSplit(profileId: string, file: string, sample: boolean): Promise<void> {
  const profile = PROFILES[profileId];
  if (!profile) { console.error(`unknown profile; available: ${Object.keys(PROFILES).join(', ')}`); process.exit(2); }
  const pages = await pdfToPages(file);
  if (sample) {
    for (const p of pages.slice(0, 12)) { console.log(`--- page ${p.page} ---`); for (const l of p.lines.slice(0, 40)) console.log(l); }
    return;
  }
  const entries = splitEntries(pages, profile);
  const out = path.join(DATA_ROOT, 'pdf-split', `${safeName(path.basename(file, '.pdf'))}.${profileId}.jsonl`);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, entriesToJsonl(entries));
  console.log(`${entries.length} entries -> ${out}`);
}

async function main(): Promise<void> {
  const [cmd, ...rest] = process.argv.slice(2);
  const flags = new Set(rest.filter((a) => a.startsWith('--')));
  const args = rest.filter((a) => !a.startsWith('--'));
  const maxFlag = rest.find((a) => a.startsWith('--max='));
  const max = maxFlag ? Number(maxFlag.slice(6)) : undefined;
  switch (cmd) {
    case 'list': listSources(); break;
    case 'status': await status(args); break;
    case 'fetch': {
      const targets = flags.has('--all-open') ? SOURCES.filter((s) => s.access === 'open') : args.map((i) => findSource(i) ?? usage());
      if (!targets.length) usage();
      for (const s of targets) { console.log(`\n== fetch ${s.id}`); await fetchSource(s); }
      break;
    }
    case 'crawl': if (!args[0]) usage(); await crawl(args[0], flags.has('--accept-terms'), max); break;
    case 'wiktionary': for (const c of findSource('wiktionary-semitic')!.ids!.wiktionaryCategories!) await wk.dumpCategory('wiktionary-semitic', c); break;
    case 'fetch-url': {
      if (args.length < 2) usage();
      const res = await http().get(args[1]);
      if (res.status !== 200) { console.error(`HTTP ${res.status}`); process.exit(1); }
      const e = await saveFile(args[0], `urls/${safeName(path.basename(new URL(args[1]).pathname) || 'index.html')}`, res.body, { url: args[1] });
      console.log(`saved ${e.savedAs} (${e.bytes} bytes)`);
      break;
    }
    case 'pdf-split': if (args.length < 2) usage(); await pdfSplit(args[0], args[1], flags.has('--sample')); break;
    default: usage();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
