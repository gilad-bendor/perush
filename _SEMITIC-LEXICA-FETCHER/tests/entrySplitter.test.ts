import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitEntries, entriesToJsonl } from '../src/pdf/entrySplitter.js';
import { PROFILES } from '../src/pdf/profiles.js';

test('dulat profile splits transliterated headwords with POS tags', () => {
  const pages = [{
    page: 12,
    lines: [
      'A DICTIONARY OF THE UGARITIC LANGUAGE',
      'ảb (I) n. m. "father" (cf. Hb. ʔāb, Akk. abu)',
      '1.6 VI 4; 1.14 I 41; also ảbk "your father"',
      'ảbd vb. G "to perish" ; cf. Hb. ʔābad',
      '12',
      'ảbn n. f. "stone"',
    ],
  }];
  const entries = splitEntries(pages, PROFILES.dulat);
  assert.deepEqual(entries.map((e) => e.headword), ['ảb (I)', 'ảbd', 'ảbn']);
  assert.equal(entries[0].lines.length, 2, 'continuation line attached to first entry');
  assert.equal(entries[0].page, 12);
  const jsonl = entriesToJsonl(entries);
  assert.equal(jsonl.trim().split('\n').length, 3);
});

test('johnstone-mehri profile tracks root sections', () => {
  const pages = [{
    page: 3,
    lines: [
      'MEHRI LEXICON',
      'ʔBD',
      'ʔābəd v. to run away; to be lost',
      'hābūd (pl. hābūdət) lost thing',
      'BKY',
      'bəkō to weep',
      '3',
    ],
  }];
  const entries = splitEntries(pages, PROFILES['johnstone-mehri']);
  assert.deepEqual(entries.map((e) => [e.section, e.headword]), [
    ['ʔBD', 'ʔābəd'],
    ['ʔBD', 'hābūd'],
    ['BKY', 'bəkō'],
  ]);
});

test('firstPage skips front matter', () => {
  const pages = [
    { page: 1, lines: ['preface text', 'ảb n. m. "father"'] },
    { page: 2, lines: ['ảbd vb. "to perish"'] },
  ];
  const entries = splitEntries(pages, { ...PROFILES.dulat, firstPage: 1 });
  assert.deepEqual(entries.map((e) => e.headword), ['ảbd']);
});
