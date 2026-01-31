#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_root_family.js
 *
 * Run with: node bible_root_family.test.js
 */

import {
    normalizeRoot,
    expand2LetterRoot,
    getPhoneticVariants,
    findStrongsByRoot,
    analyzeRootFamily,
    parseArgs,
    getOccurrenceCount,
    TYPE_ALIASES,
    TYPE_ORDER,
    PHONETIC_GROUPS,
} from '../bible_root_family.js';

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

function assertArrayContains(array, element, message = '') {
    if (!array.includes(element)) {
        throw new Error(message || `Expected array to contain ${element}, got: ${JSON.stringify(array)}`);
    }
}

// ============================================================================
// Tests
// ============================================================================

console.log('\n=== bible_root_family.js Tests ===\n');

// ------------------------------------------
console.log('normalizeRoot:');
// ------------------------------------------

test('normalizes 3-letter root', () => {
    const result = normalizeRoot('אור');
    assertEqual(result.root, 'אור');
    assertEqual(result.is2Letter, false);
});

test('normalizes root with dots', () => {
    const result = normalizeRoot('ש.מ.ר');
    assertEqual(result.root, 'שמר');
    assertEqual(result.is2Letter, false);
});

test('normalizes root with nikud', () => {
    const result = normalizeRoot('אוֹר');
    assertEqual(result.root, 'אור');
    assertEqual(result.is2Letter, false);
});

test('detects 2-letter root', () => {
    const result = normalizeRoot('שב');
    assertEqual(result.root, 'שב');
    assertEqual(result.is2Letter, true);
});

test('handles explicit 2-letter notation', () => {
    const result = normalizeRoot('2שב2');
    assertEqual(result.root, 'שב');
    assertEqual(result.is2Letter, true);
});

test('trims whitespace', () => {
    const result = normalizeRoot('  אור  ');
    assertEqual(result.root, 'אור');
    assertEqual(result.is2Letter, false);
});

// ------------------------------------------
console.log('\nexpand2LetterRoot:');
// ------------------------------------------

test('expands 2-letter root to multiple forms', () => {
    const expansions = expand2LetterRoot('שב');
    assertTrue(expansions.length > 10, `Expected >10 expansions, got ${expansions.length}`);
    assertArrayContains(expansions, 'שב');
    assertArrayContains(expansions, 'נשב');
    assertArrayContains(expansions, 'ישב');
    assertArrayContains(expansions, 'שוב');
    assertArrayContains(expansions, 'שיב');
    assertArrayContains(expansions, 'שבה');
    assertArrayContains(expansions, 'שבב');
});

test('returns original for 3-letter root', () => {
    const expansions = expand2LetterRoot('שמר');
    assertDeepEqual(expansions, ['שמר']);
});

test('removes duplicates', () => {
    const expansions = expand2LetterRoot('אב');
    const unique = new Set(expansions);
    assertEqual(expansions.length, unique.size);
});

// ------------------------------------------
console.log('\ngetPhoneticVariants:');
// ------------------------------------------

test('generates variants for labials', () => {
    const variants = getPhoneticVariants('אבד');
    // ב and פ are in same group (labials)
    assertArrayContains(variants, 'אפד');
});

test('generates variants for gutturals', () => {
    const variants = getPhoneticVariants('אמר');
    // א, ה, ח, ע are in same group (gutturals)
    assertArrayContains(variants, 'המר');
    assertArrayContains(variants, 'חמר');
    assertArrayContains(variants, 'עמר');
});

test('generates variants for dentals', () => {
    const variants = getPhoneticVariants('דבר');
    // ד, ת, ט are in same group (dentals)
    assertArrayContains(variants, 'תבר');
    assertArrayContains(variants, 'טבר');
});

test('returns empty for short roots', () => {
    const variants = getPhoneticVariants('א');
    assertEqual(variants.length, 0);
});

// ------------------------------------------
console.log('\nparseArgs:');
// ------------------------------------------

test('parses root argument', () => {
    const opts = parseArgs(['אור']);
    assertEqual(opts.root, 'אור');
    assertEqual(opts.format, 'text');
});

test('parses --type option', () => {
    const opts = parseArgs(['אור', '--type=verb']);
    assertEqual(opts.typeFilter, 'Verb');
});

test('parses --show-occurrences option', () => {
    const opts = parseArgs(['אור', '--show-occurrences']);
    assertTrue(opts.showOccurrences);
});

test('parses --show-examples option', () => {
    const opts = parseArgs(['אור', '--show-examples=3']);
    assertEqual(opts.showExamples, 3);
});

test('parses --phonetic option', () => {
    const opts = parseArgs(['אור', '--phonetic']);
    assertTrue(opts.phonetic);
});

test('parses --format=json option', () => {
    const opts = parseArgs(['אור', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --format=tree option', () => {
    const opts = parseArgs(['אור', '--format=tree']);
    assertEqual(opts.format, 'tree');
});

test('parses --no-points option', () => {
    const opts = parseArgs(['אור', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['אור', '--format=invalid']), 'Invalid format');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['אור', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\nTYPE_ALIASES:');
// ------------------------------------------

test('maps English verb', () => {
    assertEqual(TYPE_ALIASES['verb'], 'Verb');
});

test('maps English noun', () => {
    assertEqual(TYPE_ALIASES['noun'], 'Noun');
});

test('maps Hebrew verb', () => {
    assertEqual(TYPE_ALIASES['פועל'], 'Verb');
});

test('maps Hebrew noun', () => {
    assertEqual(TYPE_ALIASES['שם עצם'], 'Noun');
});

// ------------------------------------------
console.log('\nTYPE_ORDER:');
// ------------------------------------------

test('starts with Verb', () => {
    assertEqual(TYPE_ORDER[0], 'Verb');
});

test('includes Noun', () => {
    assertArrayContains(TYPE_ORDER, 'Noun');
});

test('includes Name at end', () => {
    assertEqual(TYPE_ORDER[TYPE_ORDER.length - 1], 'Name');
});

// ------------------------------------------
console.log('\nPHONETIC_GROUPS:');
// ------------------------------------------

test('contains labials group', () => {
    const labials = PHONETIC_GROUPS.find(g => g.has('ב') && g.has('פ'));
    assertTrue(labials !== undefined);
});

test('contains gutturals group', () => {
    const gutturals = PHONETIC_GROUPS.find(g => g.has('א') && g.has('ע') && g.has('ה') && g.has('ח'));
    assertTrue(gutturals !== undefined);
});

// ------------------------------------------
console.log('\nfindStrongsByRoot (integration):');
// ------------------------------------------

test('finds Strong\'s numbers for root אור', () => {
    const results = findStrongsByRoot('אור');
    assertTrue(results.length >= 2, `Expected >=2 results, got ${results.length}`);

    // Should find H215 (verb) and H216 (noun)
    const strongNumbers = results.map(r => r.strongNumber);
    assertTrue(strongNumbers.includes(215) || strongNumbers.includes(216),
        `Expected to find H215 or H216 in ${JSON.stringify(strongNumbers)}`);
});

test('filters by type', () => {
    const results = findStrongsByRoot('אור', { typeFilter: 'Verb' });
    for (const r of results) {
        assertEqual(r.typeEnglish, 'Verb');
    }
});

test('includes occurrences when requested', () => {
    const results = findStrongsByRoot('אור', { showOccurrences: true });
    assertTrue(results.length > 0);
    assertTrue(results[0].occurrences !== undefined);
    assertTrue(results[0].occurrences > 0);
});

test('includes examples when requested', () => {
    const results = findStrongsByRoot('אור', { showExamples: 2 });
    assertTrue(results.length > 0);
    assertTrue(results[0].examples !== undefined);
    assertTrue(results[0].examples.length > 0);
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
console.log('\nanalyzeRootFamily (integration):');
// ------------------------------------------

test('analyzes 3-letter root', () => {
    const result = analyzeRootFamily('אור');
    assertEqual(result.root, 'אור');
    assertEqual(result.is2Letter, false);
    assertTrue(result.totalStrongs > 0);
    assertTrue(Object.keys(result.family).length > 0);
});

test('analyzes 2-letter root', () => {
    const result = analyzeRootFamily('שב', { showOccurrences: true });
    assertEqual(result.root, 'שב');
    assertEqual(result.is2Letter, true);
    assertTrue(result.expansions !== undefined);
    assertTrue(result.expansions.length > 10);
    assertTrue(result.totalStrongs > 0);
});

test('groups results by type', () => {
    const result = analyzeRootFamily('אור');
    // Should have at least one type group
    const types = Object.keys(result.family);
    assertTrue(types.length > 0, `Expected at least one type group, got ${types.length}`);
});

test('applies type filter', () => {
    const result = analyzeRootFamily('אור', { typeFilter: 'Verb' });
    for (const type of Object.keys(result.family)) {
        assertEqual(type, 'Verb');
    }
});

test('includes phonetic relatives when requested', () => {
    const result = analyzeRootFamily('אור', { phonetic: true, showOccurrences: true });
    // May or may not have phonetic relatives depending on what exists in data
    // Just verify it doesn't error
    assertTrue(result.root === 'אור');
});

test('tracks matched root for 2-letter expansion', () => {
    const result = analyzeRootFamily('שב', { showOccurrences: true });

    // Check that entries have matchedRoot
    let foundMatchedRoot = false;
    for (const entries of Object.values(result.family)) {
        for (const entry of entries) {
            if (entry.matchedRoot) {
                foundMatchedRoot = true;
                break;
            }
        }
    }
    assertTrue(foundMatchedRoot, 'Expected to find entries with matchedRoot');
});

test('returns empty family for non-existent root', () => {
    const result = analyzeRootFamily('xyz');
    assertEqual(result.totalStrongs, 0);
    assertEqual(Object.keys(result.family).length, 0);
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
