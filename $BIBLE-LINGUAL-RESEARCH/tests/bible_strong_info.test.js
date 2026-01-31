#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_strong_info.js
 *
 * Run with: node bible_strong_info.test.js
 */

import {
    parseQuery,
    parseArgs,
    lookupByNumbers,
    lookupByHebrew,
    getOccurrenceCount,
    getExamples,
    TYPE_ALIASES,
} from '../bible_strong_info.js';

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

function assertDeepEqual(actual, expected, message = '') {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
        throw new Error(`${message}\n    Expected: ${expectedStr}\n    Actual: ${actualStr}`);
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

console.log('\n=== bible_strong_info.js Tests ===\n');

// ------------------------------------------
console.log('parseQuery:');
// ------------------------------------------

test('parses single number', () => {
    const result = parseQuery('216');
    assertEqual(result.type, 'numbers');
    assertDeepEqual(result.numbers, [216]);
});

test('parses number with H prefix', () => {
    const result = parseQuery('H216');
    assertEqual(result.type, 'numbers');
    assertDeepEqual(result.numbers, [216]);
});

test('parses number range', () => {
    const result = parseQuery('215-220');
    assertEqual(result.type, 'numbers');
    assertEqual(result.numbers.length, 6);
    assertEqual(result.numbers[0], 215);
    assertEqual(result.numbers[5], 220);
});

test('parses comma-separated list', () => {
    const result = parseQuery('215,216,430');
    assertEqual(result.type, 'numbers');
    assertDeepEqual(result.numbers, [215, 216, 430]);
});

test('parses comma-separated with spaces', () => {
    const result = parseQuery('215, 216, 430');
    assertEqual(result.type, 'numbers');
    assertDeepEqual(result.numbers, [215, 216, 430]);
});

test('parses Hebrew pattern', () => {
    const result = parseQuery('אור');
    assertEqual(result.type, 'hebrew');
    assertEqual(result.pattern, 'אור');
});

test('parses Hebrew pattern with nikud', () => {
    const result = parseQuery('אוֹר');
    assertEqual(result.type, 'hebrew');
    assertEqual(result.pattern, 'אוֹר');
});

// ------------------------------------------
console.log('\nparseArgs:');
// ------------------------------------------

test('parses query argument', () => {
    const opts = parseArgs(['216']);
    assertEqual(opts.query, '216');
});

test('parses --type option', () => {
    const opts = parseArgs(['אור', '--type=verb']);
    assertEqual(opts.typeFilter, 'Verb');
});

test('parses --type option (lowercase input)', () => {
    const opts = parseArgs(['אור', '--type=noun']);
    assertEqual(opts.typeFilter, 'Noun');
});

test('parses --show-occurrences option', () => {
    const opts = parseArgs(['216', '--show-occurrences']);
    assertTrue(opts.showOccurrences);
});

test('parses --show-examples option', () => {
    const opts = parseArgs(['216', '--show-examples=3']);
    assertEqual(opts.showExamples, 3);
});

test('parses --format option', () => {
    const opts = parseArgs(['216', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['216', '--format=invalid']), 'Invalid format');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['216', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\nTYPE_ALIASES:');
// ------------------------------------------

test('maps verb correctly', () => {
    assertEqual(TYPE_ALIASES['verb'], 'Verb');
    assertEqual(TYPE_ALIASES['פועל'], 'Verb');
});

test('maps noun correctly', () => {
    assertEqual(TYPE_ALIASES['noun'], 'Noun');
    assertEqual(TYPE_ALIASES['שם עצם'], 'Noun');
});

test('maps name correctly', () => {
    assertEqual(TYPE_ALIASES['name'], 'Name');
    assertEqual(TYPE_ALIASES['שם פרטי'], 'Name');
});

// ------------------------------------------
console.log('\nlookupByNumbers (integration):');
// ------------------------------------------

test('looks up single Strong number', () => {
    const results = lookupByNumbers([430], { showOccurrences: false, showExamples: 0 });
    assertEqual(results.length, 1);
    assertEqual(results[0].strongNumber, 430);
    assertTrue(results[0].word.includes('אֱלהִים') || results[0].searchable.includes('אלהי'));
});

test('looks up range of Strong numbers', () => {
    const results = lookupByNumbers([215, 216, 217], { showOccurrences: false, showExamples: 0 });
    assertTrue(results.length >= 2);
});

test('filters by type', () => {
    const results = lookupByNumbers([215, 216], { typeFilter: 'Verb', showOccurrences: false, showExamples: 0 });
    for (const r of results) {
        assertEqual(r.typeEnglish, 'Verb');
    }
});

test('includes occurrence count when requested', () => {
    const results = lookupByNumbers([430], { showOccurrences: true, showExamples: 0 });
    assertTrue(results[0].occurrences > 0);
});

test('includes examples when requested', () => {
    const results = lookupByNumbers([430], { showOccurrences: false, showExamples: 2 });
    assertTrue(results[0].examples.length > 0);
    assertTrue(results[0].examples[0].location !== undefined);
});

// ------------------------------------------
console.log('\nlookupByHebrew (integration):');
// ------------------------------------------

test('looks up Hebrew root', () => {
    const results = lookupByHebrew('אור', { showOccurrences: false, showExamples: 0 });
    assertTrue(results.length >= 2); // Should find at least H215, H216
});

test('filters Hebrew results by type', () => {
    const results = lookupByHebrew('אור', { typeFilter: 'Verb', showOccurrences: false, showExamples: 0 });
    for (const r of results) {
        assertEqual(r.typeEnglish, 'Verb');
    }
});

test('returns empty array for non-existent root', () => {
    const results = lookupByHebrew('xyz', { showOccurrences: false, showExamples: 0 });
    assertEqual(results.length, 0);
});

// ------------------------------------------
console.log('\ngetOccurrenceCount:');
// ------------------------------------------

test('returns positive count for common word', () => {
    const count = getOccurrenceCount(430); // אלהים
    assertTrue(count > 500, `Expected count > 500, got ${count}`);
});

test('returns 0 for non-existent number', () => {
    const count = getOccurrenceCount(99999);
    assertEqual(count, 0);
});

// ------------------------------------------
console.log('\ngetExamples:');
// ------------------------------------------

test('returns requested number of examples', () => {
    const examples = getExamples(430, 3);
    assertTrue(examples.length >= 1 && examples.length <= 3);
});

test('examples have required fields', () => {
    const examples = getExamples(430, 1);
    assertTrue(examples.length > 0);
    assertTrue(examples[0].location !== undefined);
    assertTrue(examples[0].text !== undefined);
    assertTrue(examples[0].matchedWords !== undefined);
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
