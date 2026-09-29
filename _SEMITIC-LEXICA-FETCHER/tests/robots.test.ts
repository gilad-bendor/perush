import { test } from 'node:test';
import assert from 'node:assert/strict';
import { crawlDelayFor, isAllowed, parseRobots } from '../src/util/robots.js';

const sample = `
User-agent: *
Disallow: /private/
Allow: /private/public-note.html
Crawl-delay: 5

User-agent: semitic-lexica-fetcher
Disallow: /cgi-bin/heavy*
Allow: /cgi-bin/
`;

test('robots: wildcard group applies to unknown agents', () => {
  const r = parseRobots(sample);
  assert.equal(isAllowed(r, 'SomeBot/1.0', '/private/x.html'), false);
  assert.equal(isAllowed(r, 'SomeBot/1.0', '/private/public-note.html'), true);
  assert.equal(isAllowed(r, 'SomeBot/1.0', '/anything'), true);
  assert.equal(crawlDelayFor(r, 'SomeBot/1.0'), 5);
});

test('robots: specific group wins and supports * wildcard', () => {
  const r = parseRobots(sample);
  const ua = 'semitic-lexica-fetcher/0.1 (+research use)';
  assert.equal(isAllowed(r, ua, '/cgi-bin/heavy-query.cgi'), false);
  assert.equal(isAllowed(r, ua, '/cgi-bin/response.cgi'), true);
  assert.equal(isAllowed(r, ua, '/private/x.html'), true, 'specific group has no /private rule');
  assert.equal(crawlDelayFor(r, ua), undefined);
});

test('robots: empty file allows everything', () => {
  const r = parseRobots('');
  assert.equal(isAllowed(r, 'x', '/whatever'), true);
});
