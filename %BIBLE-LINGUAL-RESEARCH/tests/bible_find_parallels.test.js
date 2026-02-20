#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_find_parallels.js
 *
 * Run with: ./bible_find_parallels.test.js
 */

import {
    parseArgs,
    parseReference,
    parseRange,
    parseNumber,
    buildIDF,
    getVerseSignature,
    calculateSimilarity,
    getSharedStrongs,
    findVerse,
    findParallels,
    STOPWORD_STRONGS,
} from '../bible_find_parallels.js';

// ============================================================================
// Test Utilities
// ============================================================================

let testCount = 0;
let passCount = 0;
let failCount = 0;

function test(name, fn) {
    testCount++;
    try {
        fn();
        passCount++;
        console.log(`  ✓ ${name}`);
    } catch (error) {
        failCount++;
        console.log(`  ✗ ${name}`);
        console.log(`    Error: ${error.message}`);
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`${message}\n    Expected: ${JSON.stringify(expected)}\n    Actual: ${JSON.stringify(actual)}`);
    }
}

function assertTrue(value, message = '') {
    if (!value) {
        throw new Error(message || 'Expected true but got false');
    }
}

function assertThrows(fn, expectedMessage) {
    try {
        fn();
        throw new Error(`Expected function to throw, but it didn't`);
    } catch (error) {
        if (expectedMessage && !error.message.includes(expectedMessage)) {
            throw new Error(`Expected error message to contain "${expectedMessage}", got: "${error.message}"`);
        }
    }
}

// ============================================================================
// Tests
// ============================================================================

console.log('\n=== bible_find_parallels.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses reference argument', () => {
    const opts = parseArgs(['בראשית 1:1']);
    assertEqual(opts.reference, 'בראשית 1:1');
    assertEqual(opts.format, 'text');
});

test('parses --min-similarity option', () => {
    const opts = parseArgs(['בראשית 1:1', '--min-similarity=0.5']);
    assertEqual(opts.minSimilarity, 0.5);
});

test('parses --max-results option', () => {
    const opts = parseArgs(['בראשית 1:1', '--max-results=10']);
    assertEqual(opts.maxResults, 10);
});

test('parses --same-book option', () => {
    const opts = parseArgs(['בראשית 1:1', '--same-book']);
    assertTrue(opts.sameBook);
});

test('parses --different-book option', () => {
    const opts = parseArgs(['בראשית 1:1', '--different-book']);
    assertTrue(opts.differentBook);
});

test('parses --highlight option', () => {
    const opts = parseArgs(['בראשית 1:1', '--highlight']);
    assertTrue(opts.highlight);
});

test('parses --range option', () => {
    const opts = parseArgs(['בראשית 1:1', '--range=תורה']);
    assertEqual(opts.range, 'תורה');
});

test('parses --no-points option', () => {
    const opts = parseArgs(['בראשית 1:1', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --format=json option', () => {
    const opts = parseArgs(['בראשית 1:1', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['בראשית 1:1', '--format=invalid']), 'Invalid format');
});

test('throws on conflicting book options', () => {
    assertThrows(() => parseArgs(['בראשית 1:1', '--same-book', '--different-book']), 'Cannot use both');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['בראשית 1:1', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\nparseReference:');
// ------------------------------------------

test('parses Arabic numeral reference', () => {
    const ref = parseReference('בראשית 1:1');
    assertEqual(ref.book, 'בראשית');
    assertEqual(ref.chapter, 1);
    assertEqual(ref.verse, 1);
});

test('parses Hebrew numeral reference', () => {
    const ref = parseReference('בראשית א:א');
    assertEqual(ref.book, 'בראשית');
    assertEqual(ref.chapter, 1);
    assertEqual(ref.verse, 1);
});

test('parses mixed reference', () => {
    const ref = parseReference('בראשית 1:ב');
    assertEqual(ref.book, 'בראשית');
    assertEqual(ref.chapter, 1);
    assertEqual(ref.verse, 2);
});

test('throws on invalid format', () => {
    assertThrows(() => parseReference('בראשית'), 'Invalid reference format');
});

test('throws on unknown book', () => {
    assertThrows(() => parseReference('unknown 1:1'), 'Unknown book');
});

// ------------------------------------------
console.log('\nparseNumber:');
// ------------------------------------------

test('parses Arabic numeral', () => {
    assertEqual(parseNumber('42'), 42);
});

test('parses single Hebrew letter', () => {
    assertEqual(parseNumber('א'), 1);
    assertEqual(parseNumber('י'), 10);
});

test('parses compound Hebrew numeral', () => {
    assertEqual(parseNumber('יב'), 12);
    assertEqual(parseNumber('כג'), 23);
});

// ------------------------------------------
console.log('\nparseRange:');
// ------------------------------------------

test('returns null for empty range', () => {
    assertEqual(parseRange(null), null);
});

test('parses section name', () => {
    const result = parseRange('תורה');
    assertTrue(result.books.has('בראשית'));
});

test('parses single book', () => {
    const result = parseRange('בראשית');
    assertTrue(result.books.has('בראשית'));
});

// ------------------------------------------
console.log('\nSTOPWORD_STRONGS:');
// ------------------------------------------

test('contains את', () => {
    assertTrue(STOPWORD_STRONGS.has(853));
});

test('contains אשר', () => {
    assertTrue(STOPWORD_STRONGS.has(834));
});

// ------------------------------------------
console.log('\ngetVerseSignature:');
// ------------------------------------------

test('extracts Strong\'s numbers from verse', () => {
    const verse = {
        strongs: [1234, 853, 5678, 0, 9012],
        words: ['a', 'b', 'c', 'd', 'e'],
    };
    const sig = getVerseSignature(verse);
    // Should exclude 853 (stopword) and 0
    assertTrue(sig.length === 3);
    assertTrue(sig.some(s => s.strong === 1234));
    assertTrue(sig.some(s => s.strong === 5678));
    assertTrue(sig.some(s => s.strong === 9012));
});

test('returns empty for verse with only stopwords', () => {
    const verse = {
        strongs: [853, 834, 0],
        words: ['a', 'b', 'c'],
    };
    const sig = getVerseSignature(verse);
    assertEqual(sig.length, 0);
});

// ------------------------------------------
console.log('\ncalculateSimilarity:');
// ------------------------------------------

test('returns 0 for empty signatures', () => {
    const idf = new Map();
    assertEqual(calculateSimilarity([], [], idf), 0);
    assertEqual(calculateSimilarity([{ strong: 1 }], [], idf), 0);
});

test('returns 1 for identical signatures', () => {
    const sig = [{ strong: 100, position: 0 }, { strong: 200, position: 1 }];
    const idf = new Map([[100, 1], [200, 1]]);
    assertEqual(calculateSimilarity(sig, sig, idf), 1);
});

test('returns intermediate value for partial overlap', () => {
    const sig1 = [{ strong: 100, position: 0 }, { strong: 200, position: 1 }];
    const sig2 = [{ strong: 100, position: 0 }, { strong: 300, position: 1 }];
    const idf = new Map([[100, 1], [200, 1], [300, 1]]);
    const similarity = calculateSimilarity(sig1, sig2, idf);
    assertTrue(similarity > 0);
    assertTrue(similarity < 1);
});

// ------------------------------------------
console.log('\ngetSharedStrongs:');
// ------------------------------------------

test('returns shared Strong\'s numbers', () => {
    const sig1 = [{ strong: 100 }, { strong: 200 }];
    const sig2 = [{ strong: 100 }, { strong: 300 }];
    const shared = getSharedStrongs(sig1, sig2);
    assertEqual(shared.length, 1);
    assertEqual(shared[0], 100);
});

test('returns empty for no overlap', () => {
    const sig1 = [{ strong: 100 }];
    const sig2 = [{ strong: 200 }];
    const shared = getSharedStrongs(sig1, sig2);
    assertEqual(shared.length, 0);
});

// ------------------------------------------
console.log('\nfindVerse:');
// ------------------------------------------

test('finds existing verse', () => {
    const verse = findVerse('בראשית', 1, 1);
    assertEqual(verse.book, 'בראשית');
    // Verse object uses 0-based chapterIndex and verseIndex
    assertEqual(verse.chapterIndex, 0);
    assertEqual(verse.verseIndex, 0);
});

test('throws for non-existent verse', () => {
    assertThrows(() => findVerse('בראשית', 999, 999), 'Verse not found');
});

// ------------------------------------------
console.log('\nbuildIDF (integration):');
// ------------------------------------------

test('builds IDF weights', () => {
    const { idf, total } = buildIDF({});
    assertTrue(idf.size > 0, 'Expected IDF to have entries');
    assertTrue(total > 0, 'Expected total verses > 0');
});

test('high-frequency words have lower IDF', () => {
    const { idf } = buildIDF({});
    // H430 (אלהים) is very common
    // H8675 is rare (or doesn't exist)
    const commonIDF = idf.get(430) || 10;  // אלהים
    // Any rare word should have higher IDF
    assertTrue(commonIDF < 5, `Expected common word to have low IDF, got ${commonIDF}`);
});

// ------------------------------------------
console.log('\nfindParallels (integration):');
// ------------------------------------------

test('finds parallels for Genesis 1:1', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.2, maxResults: 10 });
    assertTrue(result.source.reference === 'בראשית א:א');
    assertTrue(result.parallels.length >= 0);
});

test('source has text and strongs', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.5, maxResults: 5 });
    assertTrue(result.source.text.length > 0);
    assertTrue(result.source.strongs.length > 0);
});

test('respects max-results limit', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.1, maxResults: 5 });
    assertTrue(result.parallels.length <= 5);
});

test('same-book filter works', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.2, maxResults: 50, sameBook: true });
    for (const p of result.parallels) {
        assertEqual(p.book, 'בראשית');
    }
});

test('different-book filter works', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.2, maxResults: 50, differentBook: true });
    for (const p of result.parallels) {
        assertTrue(p.book !== 'בראשית', `Expected different book, got ${p.book}`);
    }
});

test('parallels have similarity scores', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.2, maxResults: 10 });
    for (const p of result.parallels) {
        assertTrue(p.similarity >= 0.2, `Expected similarity >= 0.2, got ${p.similarity}`);
        assertTrue(p.similarity <= 1, `Expected similarity <= 1, got ${p.similarity}`);
    }
});

test('parallels are sorted by similarity', () => {
    const result = findParallels('בראשית 1:1', { minSimilarity: 0.2, maxResults: 20 });
    for (let i = 1; i < result.parallels.length; i++) {
        assertTrue(result.parallels[i - 1].similarity >= result.parallels[i].similarity,
            'Expected parallels sorted by similarity descending');
    }
});

// ============================================================================
// Summary
// ============================================================================

console.log('\n=== Test Summary ===');
console.log(`Total: ${testCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);

if (failCount > 0) {
    process.exit(1);
}
