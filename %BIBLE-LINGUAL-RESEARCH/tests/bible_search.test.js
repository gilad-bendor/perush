#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_search.js
 *
 * Run with: ./bible_search.test.js
 */

import {
    parseArgs,
    parseRange,
    performSearch,
    highlightVerse,
    groupByBook,
    groupByStrong,
    countByBook,
    countByStrong,
    TORAH,
    NEVIIM,
    KETUVIM,
} from '../bible_search.js';

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

function assertFalse(value, message = '') {
    if (value) {
        throw new Error(message || 'Expected false but got true');
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

console.log('\n=== bible_search.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses simple query', () => {
    const result = parseArgs(['אור']);
    assertEqual(result.query, 'אור');
    assertEqual(result.maxResults, 100);
    assertEqual(result.format, 'text');
    assertEqual(result.groupBy, 'none');
});

test('parses --max option', () => {
    const result = parseArgs(['אור', '--max=50']);
    assertEqual(result.maxResults, 50);
});

test('parses -n option', () => {
    const result = parseArgs(['אור', '-n', '25']);
    assertEqual(result.maxResults, 25);
});

test('parses --format option', () => {
    const result = parseArgs(['אור', '--format=json']);
    assertEqual(result.format, 'json');
});

test('parses --group-by option', () => {
    const result = parseArgs(['אור', '--group-by=book']);
    assertEqual(result.groupBy, 'book');
});

test('parses --range option', () => {
    const result = parseArgs(['אור', '--range=בראשית']);
    assertEqual(result.range, 'בראשית');
});

test('parses --no-points option', () => {
    const result = parseArgs(['אור', '--no-points']);
    assertTrue(result.noPoints);
});

test('parses --count-only option', () => {
    const result = parseArgs(['אור', '--count-only']);
    assertTrue(result.countOnly);
});

test('parses --help option', () => {
    const result = parseArgs(['--help']);
    assertTrue(result.help);
});

test('parses multiple options', () => {
    const result = parseArgs(['אור', '--max=20', '--format=summary', '--range=תורה', '--no-points']);
    assertEqual(result.query, 'אור');
    assertEqual(result.maxResults, 20);
    assertEqual(result.format, 'summary');
    assertEqual(result.range, 'תורה');
    assertTrue(result.noPoints);
});

test('throws on invalid group-by', () => {
    assertThrows(() => parseArgs(['אור', '--group-by=invalid']), 'Invalid group-by');
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['אור', '--format=invalid']), 'Invalid format');
});

test('throws on invalid max (too high)', () => {
    assertThrows(() => parseArgs(['אור', '--max=20000']), 'Invalid max');
});

test('throws on invalid max (too low)', () => {
    assertThrows(() => parseArgs(['אור', '--max=0']), 'Invalid max');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['אור', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\nparseRange:');
// ------------------------------------------

test('returns null for empty range', () => {
    assertEqual(parseRange(null), null);
    assertEqual(parseRange(undefined), null);
    assertEqual(parseRange(''), null);
});

test('parses Torah section', () => {
    const result = parseRange('תורה');
    assertTrue(result.books.has('בראשית'));
    assertTrue(result.books.has('שמות'));
    assertTrue(result.books.has('דברים'));
    assertEqual(result.books.size, 5);
});

test('parses Neviim section', () => {
    const result = parseRange('נביאים');
    assertTrue(result.books.has('יהושע'));
    assertTrue(result.books.has('ישעיהו'));
    assertFalse(result.books.has('בראשית'));
});

test('parses Ketuvim section', () => {
    const result = parseRange('כתובים');
    assertTrue(result.books.has('תהילים'));
    assertTrue(result.books.has('איוב'));
    assertFalse(result.books.has('בראשית'));
});

test('parses single book', () => {
    const result = parseRange('בראשית');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 1);
    assertTrue(result.chapterFilter('בראשית', 0));
    assertTrue(result.chapterFilter('בראשית', 49));
});

test('parses book with chapter range', () => {
    const result = parseRange('בראשית 1-11');
    assertTrue(result.books.has('בראשית'));
    assertTrue(result.chapterFilter('בראשית', 0));  // Chapter 1 (0-indexed)
    assertTrue(result.chapterFilter('בראשית', 10)); // Chapter 11
    assertFalse(result.chapterFilter('בראשית', 11)); // Chapter 12
});

test('parses book with single chapter', () => {
    const result = parseRange('בראשית 5');
    assertTrue(result.books.has('בראשית'));
    assertFalse(result.chapterFilter('בראשית', 3)); // Chapter 4
    assertTrue(result.chapterFilter('בראשית', 4));  // Chapter 5
    assertFalse(result.chapterFilter('בראשית', 5)); // Chapter 6
});

test('throws on unknown book', () => {
    assertThrows(() => parseRange('unknown'), 'Unknown book or section');
});

test('throws on invalid chapter range', () => {
    assertThrows(() => parseRange('בראשית abc'), 'Invalid chapter range');
});

// ------------------------------------------
console.log('\nhighlightVerse:');
// ------------------------------------------

test('highlights matched words', () => {
    const words = ['אלהים', 'ברא', 'את', 'השמים'];
    const result = highlightVerse(words, [1, 3], false);
    assertEqual(result, 'אלהים **ברא** את **השמים**');
});

test('highlights single word', () => {
    const words = ['בראשית', 'ברא', 'אלהים'];
    const result = highlightVerse(words, [2], false);
    assertEqual(result, 'בראשית ברא **אלהים**');
});

test('removes nikud when noPoints is true', () => {
    const words = ['בְּרֵאשִׁית', 'בָּרָא', 'אֱלֹהִים'];
    const result = highlightVerse(words, [1], true);
    assertTrue(result.includes('**ברא**'));
    assertFalse(result.includes('בָּרָא'));
});

// ------------------------------------------
console.log('\ngroupByBook:');
// ------------------------------------------

test('groups matches by book', () => {
    const matches = [
        { verse: { book: 'בראשית' } },
        { verse: { book: 'שמות' } },
        { verse: { book: 'בראשית' } },
    ];
    const groups = groupByBook(matches);
    assertEqual(groups.get('בראשית').length, 2);
    assertEqual(groups.get('שמות').length, 1);
});

// ------------------------------------------
console.log('\ngroupByStrong:');
// ------------------------------------------

test('groups matches by Strong number', () => {
    const matches = [
        { verse: { strongs: [430, 1254, 853] }, matchedWordIndexes: [0, 1] }, // אלהים, ברא
        { verse: { strongs: [1254, 853, 776] }, matchedWordIndexes: [0] }, // ברא
        { verse: { strongs: [430, 559, 1961] }, matchedWordIndexes: [0] }, // אלהים
    ];
    const groups = groupByStrong(matches);
    assertEqual(groups.get(430).length, 2); // First and third matches
    assertEqual(groups.get(1254).length, 2); // First and second matches
});

// ------------------------------------------
console.log('\ncountByBook:');
// ------------------------------------------

test('counts matches by book', () => {
    const matches = [
        { verse: { book: 'בראשית' } },
        { verse: { book: 'שמות' } },
        { verse: { book: 'בראשית' } },
        { verse: { book: 'בראשית' } },
    ];
    const counts = countByBook(matches);
    assertEqual(counts.get('בראשית'), 3);
    assertEqual(counts.get('שמות'), 1);
});

// ------------------------------------------
console.log('\ncountByStrong:');
// ------------------------------------------

test('counts matches by Strong number', () => {
    const matches = [
        { verse: { strongs: [430, 1254] }, matchedWordIndexes: [0, 1] },
        { verse: { strongs: [430, 559] }, matchedWordIndexes: [0, 1] },
    ];
    const counts = countByStrong(matches);
    assertEqual(counts.get(430), 2);
    assertEqual(counts.get(1254), 1);
    assertEqual(counts.get(559), 1);
});

// ------------------------------------------
console.log('\nConstants:');
// ------------------------------------------

test('TORAH contains correct books', () => {
    assertEqual(TORAH.length, 5);
    assertEqual(TORAH[0], 'בראשית');
    assertEqual(TORAH[4], 'דברים');
});

test('NEVIIM contains prophets', () => {
    assertTrue(NEVIIM.includes('יהושע'));
    assertTrue(NEVIIM.includes('ישעיהו'));
    assertTrue(NEVIIM.includes('מלאכי'));
});

test('KETUVIM contains writings', () => {
    assertTrue(KETUVIM.includes('תהילים'));
    assertTrue(KETUVIM.includes('איוב'));
    assertTrue(KETUVIM.includes('דניאל'));
});

// ------------------------------------------
console.log('\nperformSearch (integration):');
// ------------------------------------------

test('basic search finds results', () => {
    const result = performSearch('אור', { maxResults: 10 });
    assertTrue(result.matches.length > 0);
    assertTrue(result.filteredCount > 0);
});

test('Strong number search works', () => {
    const result = performSearch('<430>', { maxResults: 10 });
    assertTrue(result.matches.length > 0);
    assertTrue(result.strongMatches.length > 0);
    assertEqual(result.strongMatches[0].strongNumber, 430);
});

test('range filter limits to Torah', () => {
    const result = performSearch('אלהים', { maxResults: 100, range: 'תורה' });
    assertTrue(result.matches.length > 0);
    for (const match of result.matches) {
        assertTrue(TORAH.includes(match.verse.book), `${match.verse.book} should be in Torah`);
    }
});

test('range filter limits to single book', () => {
    const result = performSearch('אלהים', { maxResults: 100, range: 'בראשית' });
    assertTrue(result.matches.length > 0);
    for (const match of result.matches) {
        assertEqual(match.verse.book, 'בראשית');
    }
});

test('range filter with chapter range', () => {
    const result = performSearch('אלהים', { maxResults: 100, range: 'בראשית 1-2' });
    assertTrue(result.matches.length > 0);
    for (const match of result.matches) {
        assertEqual(match.verse.book, 'בראשית');
        assertTrue(match.verse.chapterIndex <= 1, `Chapter ${match.verse.chapterIndex + 1} should be 1 or 2`);
    }
});

test('count-only mode returns empty matches array', () => {
    const result = performSearch('אור', { maxResults: 10, countOnly: true });
    assertEqual(result.matches.length, 0);
    assertTrue(result.filteredCount > 0);
});

test('maxResults truncates results', () => {
    const result = performSearch('את', { maxResults: 5 });
    assertEqual(result.matches.length, 5);
    assertTrue(result.truncated);
});

test('pattern search with @ works', () => {
    // ה@ל@ך should match הלך, הולך, etc.
    const result = performSearch('ה@ל@ך', { maxResults: 10 });
    assertTrue(result.matches.length > 0);
});

test('exact word boundary search', () => {
    // " אור " should only match exact word אור
    const result = performSearch(' אור ', { maxResults: 10 });
    assertTrue(result.matches.length > 0);
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
