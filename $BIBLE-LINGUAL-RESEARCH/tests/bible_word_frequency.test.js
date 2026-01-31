#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_word_frequency.js
 *
 * Run with: node bible_word_frequency.test.js
 */

import {
    parseArgs,
    parseRange,
    analyzeFrequency,
    getBookSection,
    isAramaicVerse,
} from '../bible_word_frequency.js';

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

console.log('\n=== bible_word_frequency.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses query argument', () => {
    const opts = parseArgs(['אור']);
    assertEqual(opts.query, 'אור');
    assertEqual(opts.groupBy, 'book');
    assertEqual(opts.format, 'text');
});

test('parses --group-by option', () => {
    const opts = parseArgs(['אור', '--group-by=section']);
    assertEqual(opts.groupBy, 'section');
});

test('parses --top option', () => {
    const opts = parseArgs(['אור', '--top=10']);
    assertEqual(opts.top, 10);
});

test('parses --min option', () => {
    const opts = parseArgs(['אור', '--min=5']);
    assertEqual(opts.min, 5);
});

test('parses --range option', () => {
    const opts = parseArgs(['אור', '--range=בראשית']);
    assertEqual(opts.range, 'בראשית');
});

test('parses --format option', () => {
    const opts = parseArgs(['אור', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --sort option', () => {
    const opts = parseArgs(['אור', '--sort=biblical']);
    assertEqual(opts.sort, 'biblical');
});

test('throws on invalid group-by', () => {
    assertThrows(() => parseArgs(['אור', '--group-by=invalid']), 'Invalid group-by');
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['אור', '--format=invalid']), 'Invalid format');
});

// ------------------------------------------
console.log('\ngetBookSection:');
// ------------------------------------------

test('returns correct section for Torah books', () => {
    assertEqual(getBookSection('בראשית'), 'תורה');
    assertEqual(getBookSection('דברים'), 'תורה');
});

test('returns correct section for prophets', () => {
    assertEqual(getBookSection('יהושע'), 'נביאים ראשונים');
    assertEqual(getBookSection('ישעיהו'), 'נביאים אחרונים');
});

test('returns correct section for writings', () => {
    assertEqual(getBookSection('תהילים'), 'כתובים');
    assertEqual(getBookSection('דניאל'), 'כתובים');
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

// ------------------------------------------
console.log('\nparseRange:');
// ------------------------------------------

test('returns null for empty range', () => {
    assertEqual(parseRange(null), null);
});

test('parses Torah section', () => {
    const result = parseRange('תורה');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 5);
});

test('parses single book', () => {
    const result = parseRange('בראשית');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 1);
});

// ------------------------------------------
console.log('\nanalyzeFrequency (integration):');
// ------------------------------------------

test('analyzes frequency by book', () => {
    const result = analyzeFrequency('אור', { groupBy: 'book', includeAramaic: false });
    assertTrue(result.total > 0);
    assertTrue(result.distribution.length > 0);
    assertEqual(result.groupBy, 'book');
});

test('analyzes frequency by section', () => {
    const result = analyzeFrequency('אור', { groupBy: 'section', includeAramaic: false });
    assertTrue(result.total > 0);
    assertTrue(result.distribution.length <= 4); // Max 4 sections
});

test('analyzes frequency with range filter', () => {
    const result = analyzeFrequency('אור', { groupBy: 'book', range: 'בראשית', includeAramaic: false });
    assertTrue(result.total > 0);
    for (const item of result.distribution) {
        assertEqual(item.key, 'בראשית');
    }
});

test('applies top filter', () => {
    const result = analyzeFrequency('אור', { groupBy: 'book', top: 3, includeAramaic: false });
    assertTrue(result.distribution.length <= 3);
});

test('applies min filter', () => {
    const result = analyzeFrequency('אור', { groupBy: 'book', min: 10, includeAramaic: false });
    for (const item of result.distribution) {
        assertTrue(item.count >= 10);
    }
});

test('calculates percentages', () => {
    const result = analyzeFrequency('אור', { groupBy: 'book', includeAramaic: false });
    for (const item of result.distribution) {
        assertTrue(parseFloat(item.percentage) >= 0);
        assertTrue(parseFloat(item.percentage) <= 100);
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
