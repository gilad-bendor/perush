#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_semantic_field.js
 *
 * Run with: ./bible_semantic_field.test.js
 */

import {
    parseArgs,
    parseRange,
    isStopword,
    calculatePMI,
    findDirectAssociations,
    buildSemanticField,
    STOPWORDS,
    CATEGORY_ALIASES,
} from '../bible_semantic_field.js';

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

console.log('\n=== bible_semantic_field.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses concept argument', () => {
    const opts = parseArgs(['מים']);
    assertEqual(opts.concept, 'מים');
    assertEqual(opts.depth, 1);
    assertEqual(opts.format, 'text');
});

test('parses --depth option', () => {
    const opts = parseArgs(['מים', '--depth=2']);
    assertEqual(opts.depth, 2);
});

test('parses --min-strength option', () => {
    const opts = parseArgs(['מים', '--min-strength=0.2']);
    assertEqual(opts.minStrength, 0.2);
});

test('parses --top option', () => {
    const opts = parseArgs(['מים', '--top=10']);
    assertEqual(opts.top, 10);
});

test('parses --category=noun option', () => {
    const opts = parseArgs(['מים', '--category=noun']);
    assertEqual(opts.category, 'Noun');
});

test('parses --category=verb option', () => {
    const opts = parseArgs(['מים', '--category=verb']);
    assertEqual(opts.category, 'Verb');
});

test('parses --category=all option', () => {
    const opts = parseArgs(['מים', '--category=all']);
    assertEqual(opts.category, null);
});

test('parses --show-examples option', () => {
    const opts = parseArgs(['מים', '--show-examples=3']);
    assertEqual(opts.showExamples, 3);
});

test('parses --range option', () => {
    const opts = parseArgs(['מים', '--range=בראשית']);
    assertEqual(opts.range, 'בראשית');
});

test('parses --no-points option', () => {
    const opts = parseArgs(['מים', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --format=json option', () => {
    const opts = parseArgs(['מים', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --format=graph option', () => {
    const opts = parseArgs(['מים', '--format=graph']);
    assertEqual(opts.format, 'graph');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['מים', '--format=invalid']), 'Invalid format');
});

test('throws on invalid depth', () => {
    assertThrows(() => parseArgs(['מים', '--depth=5']), 'Invalid depth');
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

// ------------------------------------------
console.log('\nisStopword:');
// ------------------------------------------

test('identifies את as stopword', () => {
    assertTrue(isStopword('את'));
});

test('does not mark content words as stopwords', () => {
    assertTrue(!isStopword('מים'));
});

// ------------------------------------------
console.log('\nSTOPWORDS:');
// ------------------------------------------

test('contains common function words', () => {
    assertTrue(STOPWORDS.has('את'));
    assertTrue(STOPWORDS.has('אשר'));
});

// ------------------------------------------
console.log('\nCATEGORY_ALIASES:');
// ------------------------------------------

test('maps noun correctly', () => {
    assertEqual(CATEGORY_ALIASES['noun'], 'Noun');
});

test('maps verb correctly', () => {
    assertEqual(CATEGORY_ALIASES['verb'], 'Verb');
});

test('maps all to null', () => {
    assertEqual(CATEGORY_ALIASES['all'], null);
});

// ------------------------------------------
console.log('\ncalculatePMI:');
// ------------------------------------------

test('returns 0 for no cooccurrences', () => {
    assertEqual(calculatePMI(0, 100, 100, 1000), 0);
});

test('returns 0 for zero word counts', () => {
    assertEqual(calculatePMI(10, 0, 100, 1000), 0);
    assertEqual(calculatePMI(10, 100, 0, 1000), 0);
});

test('returns positive value for positive association', () => {
    const pmi = calculatePMI(50, 100, 200, 1000);
    assertTrue(pmi > 0, `Expected PMI > 0, got ${pmi}`);
    assertTrue(pmi <= 1, `Expected PMI <= 1, got ${pmi}`);
});

test('higher cooccurrence gives higher PMI', () => {
    const pmi1 = calculatePMI(10, 100, 200, 1000);
    const pmi2 = calculatePMI(50, 100, 200, 1000);
    assertTrue(pmi2 > pmi1, `Expected ${pmi2} > ${pmi1}`);
});

// ------------------------------------------
console.log('\nfindDirectAssociations (integration):');
// ------------------------------------------

test('finds associations for word', () => {
    const result = findDirectAssociations('אור', { top: 10, minStrength: 0 });
    assertTrue(result.associations.length > 0, 'Expected at least one association');
    assertTrue(result.queryVerseCount > 0, 'Expected positive query verse count');
    assertTrue(result.totalVerses > 0, 'Expected positive total verses');
});

test('respects top limit', () => {
    const result = findDirectAssociations('אור', { top: 5, minStrength: 0 });
    assertTrue(result.associations.length <= 5);
});

test('respects min-strength filter', () => {
    const result = findDirectAssociations('אור', { top: 50, minStrength: 0.3 });
    for (const assoc of result.associations) {
        assertTrue(assoc.strength >= 0.3, `Expected strength >= 0.3, got ${assoc.strength}`);
    }
});

test('returns associations sorted by strength', () => {
    const result = findDirectAssociations('אור', { top: 10, minStrength: 0 });
    for (let i = 1; i < result.associations.length; i++) {
        assertTrue(result.associations[i - 1].strength >= result.associations[i].strength,
            'Expected associations sorted by strength descending');
    }
});

test('includes examples when requested', () => {
    const result = findDirectAssociations('אור', { top: 5, minStrength: 0, showExamples: 2 });
    // Some associations should have examples
    const hasExamples = result.associations.some(a => a.examples && a.examples.length > 0);
    assertTrue(hasExamples, 'Expected at least one association with examples');
});

// ------------------------------------------
console.log('\nbuildSemanticField (integration):');
// ------------------------------------------

test('builds semantic field at depth 1', () => {
    const result = buildSemanticField('אור', { depth: 1, top: 10, minStrength: 0 });
    assertEqual(result.concept, 'אור');
    assertTrue(result.depth1.length > 0, 'Expected depth1 associations');
    assertTrue(result.depth2 === undefined, 'Expected no depth2 for depth=1');
});

test('builds semantic field at depth 2', () => {
    const result = buildSemanticField('אור', { depth: 2, top: 10, minStrength: 0 });
    assertEqual(result.concept, 'אור');
    assertTrue(result.depth1.length > 0, 'Expected depth1 associations');
    assertTrue(result.depth2 !== undefined, 'Expected depth2 for depth=2');
});

test('includes Strong\'s matches', () => {
    const result = buildSemanticField('<אור>', { depth: 1, top: 10, minStrength: 0 });
    assertTrue(result.strongMatches !== undefined);
});

test('filters by category', () => {
    const result = buildSemanticField('אור', { depth: 1, top: 20, minStrength: 0, category: 'Verb' });
    for (const assoc of result.depth1) {
        if (assoc.type) {
            assertEqual(assoc.type, 'Verb');
        }
    }
});

test('respects range filter', () => {
    const fullResult = buildSemanticField('אור', { depth: 1, top: 10, minStrength: 0 });
    const rangeResult = buildSemanticField('אור', { depth: 1, top: 10, minStrength: 0, range: 'בראשית' });
    assertTrue(rangeResult.queryVerseCount <= fullResult.queryVerseCount,
        'Filtered result should have fewer or equal verses');
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
