import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextOffset, parseRecords } from '../src/fetchers/starling.js';
import { languageSection } from '../src/fetchers/wiktionary.js';
import { isEntryUrl, parseEntry } from '../src/fetchers/webonary.js';
import { classify } from '../src/fetchers/archiveOrg.js';
import { extractLinks, htmlToText } from '../src/util/html.js';

test('starling: records parsed from field/value lines, continuation lines merged', () => {
  const html = `
<html><body>
<p><b>Proto-Semitic:</b> *ʔab-<br><b>Meaning:</b> father<br>
<b>Ugaritic:</b> ảb [DUL 5]<br><b>Mehri:</b> ḥayb [JM 3]<br><b>Jibbali:</b> ʔiy [JJ 1]<br>
<b>Soqotri:</b> ʔe [LS 49]<br><b>Notes:</b> Common Semitic;
see also SED I No. 1.</p><hr>
<p><b>Proto-Semitic:</b> *ʔabn-<br><b>Meaning:</b> stone<br><b>Ugaritic:</b> ảbn [DUL 8]</p>
<a href="/cgi-bin/response.cgi?root=config&amp;basename=/data/semham/semet&amp;first=21">next</a>
</body></html>`;
  const recs = parseRecords(html);
  assert.equal(recs.length, 2);
  assert.equal(recs[0]['Proto-Semitic'], '*ʔab-');
  assert.equal(recs[0]['Soqotri'], 'ʔe [LS 49]');
  assert.equal(recs[0]['Notes'], 'Common Semitic; see also SED I No. 1.');
  assert.equal(recs[1]['Ugaritic'], 'ảbn [DUL 8]');
  assert.equal(nextOffset(html, 1, 20), 21);
  assert.equal(nextOffset(html, 21, 20), undefined);
});

test('wiktionary: level-2 language section extraction', () => {
  const page = `==Hebrew==\nfoo\n\n==Ugaritic==\n===Noun===\n{{uga-noun}}\n# father\n\n==Arabic==\nbar`;
  assert.equal(languageSection(page, 'Ugaritic'), '===Noun===\n{{uga-noun}}\n# father');
  assert.equal(languageSection(page, 'Akkadian'), undefined);
});

test('webonary: entry url pattern and class-based parsing', () => {
  assert.equal(isEntryUrl('https://www.webonary.org/soqotra/en/gb48e748a-47c3-4f70-9e76-d14d8d4bce48/'), true);
  assert.equal(isEntryUrl('https://www.webonary.org/soqotra/en/browse/?letter=a'), false);
  const html = `<div class="entry"><span class="mainheadword"><span lang="sqt">ʕeb</span></span>
  <span class="partofspeech">n</span> <span class="definitionorgloss"><span lang="en">father</span></span>
  <span class="definitionorgloss"><span lang="ar">أب</span></span></div>`;
  const e = parseEntry('u', html);
  assert.equal(e.headword, 'ʕeb');
  assert.deepEqual(e.partOfSpeech, ['n']);
  assert.deepEqual(e.glosses, ['father', 'أب']);
});

test('archive.org: lending items are never classed downloadable', () => {
  assert.equal(classify({ metadata: { 'access-restricted-item': 'true', collection: ['inlibrary', 'printdisabled'] }, files: [{ name: 'x_djvu.txt', format: 'DjVuTXT' }] }), 'borrow-only');
  assert.equal(classify({ metadata: { collection: 'americana' }, files: [{ name: 'x_djvu.txt', format: 'DjVuTXT' }] }), 'downloadable');
  assert.equal(classify({ metadata: { collection: 'americana' }, files: [{ name: 'x.jp2.zip' }] }), 'metadata-only');
  assert.equal(classify(undefined), 'missing');
});

test('html helpers: links resolved, entities decoded, text extracted', () => {
  const html = `<p>Hello&nbsp;<a href="/words/12">ʕeb &amp; co</a><br>line2</p>`;
  assert.deepEqual(extractLinks(html, 'http://x.test/a/'), [{ href: 'http://x.test/words/12', text: 'ʕeb & co' }]);
  assert.equal(htmlToText(html), 'Hello ʕeb & co\nline2');
});
