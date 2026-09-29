/**
 * English Wiktionary via the MediaWiki API (CC BY-SA 4.0).
 * Category members -> wikitext of each page -> the language section only.
 * WMF asks for a descriptive User-Agent with contact; set SLF_CONTACT.
 */
import { http } from '../util/http.js';
import { saveFile, safeName } from '../util/manifest.js';

const API = 'https://en.wiktionary.org/w/api.php';

export async function categoryMembers(category: string): Promise<string[]> {
  const titles: string[] = [];
  let cont: string | undefined;
  do {
    const url = `${API}?action=query&list=categorymembers&cmtitle=${encodeURIComponent('Category:' + category)}` +
      `&cmlimit=500&cmnamespace=0&format=json${cont ? `&cmcontinue=${encodeURIComponent(cont)}` : ''}`;
    const res = await http().get(url, { accept: 'application/json' });
    if (res.status !== 200) throw new Error(`wiktionary ${res.status}`);
    const j = res.json<{ query?: { categorymembers: Array<{ title: string }> }; continue?: { cmcontinue: string } }>();
    for (const m of j.query?.categorymembers ?? []) titles.push(m.title);
    cont = j.continue?.cmcontinue;
  } while (cont);
  return titles;
}

export async function wikitext(titles: string[]): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const url = `${API}?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&formatversion=2&titles=${encodeURIComponent(batch.join('|'))}`;
    const res = await http().get(url, { accept: 'application/json' });
    if (res.status !== 200) throw new Error(`wiktionary ${res.status}`);
    const j = res.json<{ query?: { pages: Array<{ title: string; revisions?: Array<{ slots: { main: { content: string } } }> }> } }>();
    for (const p of j.query?.pages ?? []) {
      const c = p.revisions?.[0]?.slots.main.content;
      if (c) out[p.title] = c;
    }
  }
  return out;
}

/** Extract the `==Language==` level-2 section from a Wiktionary page. */
export function languageSection(text: string, language: string): string | undefined {
  const re = new RegExp(`^==\\s*${language.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*==\\s*$`, 'm');
  const m = re.exec(text);
  if (!m) return undefined;
  const rest = text.slice(m.index + m[0].length);
  const next = /^==[^=].*==\s*$/m.exec(rest);
  return (next ? rest.slice(0, next.index) : rest).trim();
}

const CATEGORY_LANGUAGE: Record<string, string> = {
  'Ugaritic lemmas': 'Ugaritic',
  'Mehri lemmas': 'Mehri',
  'Soqotri lemmas': 'Soqotri',
  'Harsusi lemmas': 'Harsusi',
  'Shehri lemmas': 'Shehri',
};

export async function dumpCategory(sourceId: string, category: string): Promise<number> {
  const lang = CATEGORY_LANGUAGE[category] ?? category.replace(/ lemmas$/, '');
  const titles = await categoryMembers(category);
  console.log(`[wiktionary] ${category}: ${titles.length} pages`);
  const texts = await wikitext(titles);
  const entries = Object.entries(texts).map(([title, full]) => ({ title, language: lang, section: languageSection(full, lang) ?? full }));
  await saveFile(sourceId, `wiktionary/${safeName(category)}.json`, JSON.stringify(entries, null, 2), {
    url: `${API}?action=query&list=categorymembers&cmtitle=Category:${category}`,
    licence: 'CC BY-SA 4.0',
  });
  return entries.length;
}
