#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_cooccurrences.js
 *
 * Run with: node bible_cooccurrences.test.js
 */

import {
    parseArgs,
    parseRange,
    isAramaicVerse,
    isStopword,
    analyzeCooccurrences,
    analyzeWordPair,
    STOPWORDS,
    SECTION_NAMES,
} from '../bible_cooccurrences.js';

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

console.log('\n=== bible_cooccurrences.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses single word argument', () => {
    const opts = parseArgs(['מים']);
    assertEqual(opts.word1, 'מים');
    assertEqual(opts.word2, null);
    assertEqual(opts.proximity, 'verse');
});

test('parses two word arguments', () => {
    const opts = parseArgs(['מים', 'ארץ']);
    assertEqual(opts.word1, 'מים');
    assertEqual(opts.word2, 'ארץ');
});

test('parses --proximity=verse option', () => {
    const opts = parseArgs(['מים', '--proximity=verse']);
    assertEqual(opts.proximity, 'verse');
});

test('parses --proximity=adjacent option', () => {
    const opts = parseArgs(['מים', '--proximity=adjacent']);
    assertEqual(opts.proximity, 'adjacent');
});

test('parses --proximity=N option', () => {
    const opts = parseArgs(['מים', '--proximity=5']);
    assertEqual(opts.proximity, 'distance');
    assertEqual(opts.proximityDistance, 5);
});

test('parses --top option', () => {
    const opts = parseArgs(['מים', '--top=10']);
    assertEqual(opts.top, 10);
});

test('parses --min option', () => {
    const opts = parseArgs(['מים', '--min=5']);
    assertEqual(opts.min, 5);
});

test('parses --show-examples option', () => {
    const opts = parseArgs(['מים', '--show-examples=3']);
    assertEqual(opts.showExamples, 3);
});

test('parses --by-strong option', () => {
    const opts = parseArgs(['מים', '--by-strong']);
    assertTrue(opts.byStrong);
});

test('parses --range option', () => {
    const opts = parseArgs(['מים', '--range=בראשית']);
    assertEqual(opts.range, 'בראשית');
});

test('parses --include-aramaic option', () => {
    const opts = parseArgs(['מים', '--include-aramaic']);
    assertTrue(opts.includeAramaic);
});

test('parses --include-stopwords option', () => {
    const opts = parseArgs(['מים', '--include-stopwords']);
    assertTrue(opts.includeStopwords);
});

test('parses --no-points option', () => {
    const opts = parseArgs(['מים', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --format=json option', () => {
    const opts = parseArgs(['מים', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['מים', '--format=invalid']), 'Invalid format');
});

test('throws on invalid proximity', () => {
    assertThrows(() => parseArgs(['מים', '--proximity=invalid']), 'Invalid proximity');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['מים', '--unknown']), 'Unknown option');
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
    assertEqual(result.books.size, 5);
});

test('parses single book', () => {
    const result = parseRange('בראשית');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 1);
});

test('throws on unknown book', () => {
    assertThrows(() => parseRange('unknown'), 'Unknown book');
});

// ------------------------------------------
console.log('\nisAramaicVerse:');
// ------------------------------------------

test('identifies Genesis 31:47 as Aramaic', () => {
    assertTrue(isAramaicVerse('בראשית', 30, 46));
});

test('identifies non-Aramaic verse', () => {
    assertTrue(!isAramaicVerse('בראשית', 0, 0));
});

test('identifies Daniel Aramaic section', () => {
    assertTrue(isAramaicVerse('דניאל', 2, 5));
});

// ------------------------------------------
console.log('\nisStopword:');
// ------------------------------------------

test('identifies את as stopword', () => {
    assertTrue(isStopword('את'));
});

test('identifies אשר as stopword', () => {
    assertTrue(isStopword('אשר'));
});

test('does not mark content words as stopwords', () => {
    assertTrue(!isStopword('מים'));
    assertTrue(!isStopword('ארץ'));
    assertTrue(!isStopword('אלהים'));
});

// ------------------------------------------
console.log('\nSTOPWORDS:');
// ------------------------------------------

test('contains common function words', () => {
    assertTrue(STOPWORDS.has('את'));
    assertTrue(STOPWORDS.has('אשר'));
    assertTrue(STOPWORDS.has('על'));
    assertTrue(STOPWORDS.has('אל'));
    assertTrue(STOPWORDS.has('מן'));
});

test('contains pronouns', () => {
    assertTrue(STOPWORDS.has('הוא'));
    assertTrue(STOPWORDS.has('היא'));
    assertTrue(STOPWORDS.has('אני'));
});

// ------------------------------------------
console.log('\nSECTION_NAMES:');
// ------------------------------------------

test('contains Torah', () => {
    assertTrue(SECTION_NAMES['תורה'].includes('בראשית'));
    assertEqual(SECTION_NAMES['תורה'].length, 5);
});

test('contains Prophets', () => {
    assertTrue(SECTION_NAMES['נביאים'].includes('ישעיהו'));
});

test('contains Writings', () => {
    assertTrue(SECTION_NAMES['כתובים'].includes('תהילים'));
});

// ------------------------------------------
console.log('\nanalyzeCooccurrences (integration):');
// ------------------------------------------

test('analyzes co-occurrences for word', () => {
    const result = analyzeCooccurrences('אור', { top: 10 });
    assertTrue(result.totalVerses > 0, `Expected totalVerses > 0, got ${result.totalVerses}`);
    assertTrue(result.cooccurrences.length > 0, 'Expected at least one co-occurrence');
    assertEqual(result.query, 'אור');
});

test('respects top limit', () => {
    const result = analyzeCooccurrences('אור', { top: 5 });
    assertTrue(result.cooccurrences.length <= 5);
});

test('respects min filter', () => {
    const result = analyzeCooccurrences('אור', { min: 10, top: 100 });
    for (const entry of result.cooccurrences) {
        assertTrue(entry.count >= 10, `Expected count >= 10, got ${entry.count}`);
    }
});

test('includes examples when requested', () => {
    const result = analyzeCooccurrences('אור', { showExamples: 2, top: 5 });
    assertTrue(result.cooccurrences.length > 0);
    // Some entries should have examples
    const hasExamples = result.cooccurrences.some(e => e.examples && e.examples.length > 0);
    assertTrue(hasExamples, 'Expected at least one entry with examples');
});

test('filters by range', () => {
    const result = analyzeCooccurrences('אור', { range: 'בראשית', top: 10 });
    assertTrue(result.totalVerses > 0);
    assertTrue(result.totalVerses < 200, `Expected fewer verses in בראשית, got ${result.totalVerses}`);
});

test('handles proximity=adjacent', () => {
    const result = analyzeCooccurrences('אור', { proximity: 'adjacent', top: 10 });
    assertEqual(result.proximity, 'adjacent');
});

test('handles proximity=distance', () => {
    const result = analyzeCooccurrences('אור', { proximity: 'distance', proximityDistance: 3, top: 10 });
    assertEqual(result.proximity, 'distance');
    assertEqual(result.proximityDistance, 3);
});

test('includes Strong\'s numbers for co-occurring words', () => {
    const result = analyzeCooccurrences('אור', { top: 10 });
    // Some entries should have Strong's numbers
    const hasStrongs = result.cooccurrences.some(e => e.strongNumbers && e.strongNumbers.length > 0);
    assertTrue(hasStrongs, 'Expected at least one entry with Strong\'s numbers');
});

test('returns percentage for each co-occurrence', () => {
    const result = analyzeCooccurrences('אור', { top: 10 });
    for (const entry of result.cooccurrences) {
        assertTrue(entry.percentage !== undefined);
        const pct = parseFloat(entry.percentage);
        assertTrue(pct >= 0 && pct <= 100, `Expected percentage between 0-100, got ${pct}`);
    }
});

// ------------------------------------------
console.log('\nanalyzeWordPair (integration):');
// ------------------------------------------

test('analyzes word pair co-occurrence', () => {
    const result = analyzeWordPair('מים', 'ארץ');
    assertTrue(result.word1Count > 0, `Expected word1Count > 0, got ${result.word1Count}`);
    assertTrue(result.word2Count > 0, `Expected word2Count > 0, got ${result.word2Count}`);
    assertTrue(result.cooccurrenceCount >= 0);
});

test('calculates percentages for both words', () => {
    const result = analyzeWordPair('מים', 'ארץ');
    assertTrue(result.percentage1 !== undefined);
    assertTrue(result.percentage2 !== undefined);
});

test('provides distribution by book', () => {
    const result = analyzeWordPair('מים', 'ארץ');
    assertTrue(result.distribution.length > 0, 'Expected distribution to have entries');
    for (const entry of result.distribution) {
        assertTrue(entry.book !== undefined);
        assertTrue(entry.count > 0);
    }
});

test('includes examples when requested', () => {
    const result = analyzeWordPair('מים', 'ארץ', { showExamples: 3 });
    assertTrue(result.examples.length > 0, 'Expected at least one example');
    assertTrue(result.examples.length <= 3);
});

test('respects proximity=adjacent for word pair', () => {
    const result = analyzeWordPair('יהוה', 'אלהים', { proximity: 'adjacent' });
    assertEqual(result.proximity, 'adjacent');
    // The compound name יהוה אלהים is common
    assertTrue(result.cooccurrenceCount > 0, 'Expected adjacent יהוה אלהים occurrences');
});

test('respects range filter for word pair', () => {
    const fullResult = analyzeWordPair('מים', 'ארץ');
    const rangeResult = analyzeWordPair('מים', 'ארץ', { range: 'בראשית' });
    assertTrue(rangeResult.cooccurrenceCount <= fullResult.cooccurrenceCount,
        'Filtered result should have fewer or equal co-occurrences');
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
