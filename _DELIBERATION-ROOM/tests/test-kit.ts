// What the tests are written with: node:test's describe/test/hooks, and a Jest-style expect() on node:assert -
// with the matchers these tests use, no more. Run with `node --test` (see package.json: NODE_ENV=test).
// (A copy of the RTL editor's tests/test-kit.ts - the projects stay independent - plus the timeouts below.)

import { AssertionError } from "node:assert";
import * as nodeTest from "node:test";
import { inspect } from "node:util";

export { describe, it } from "node:test";

type Body = () => unknown;

/** A test - with an optional timeout in ms as the last argument, as these tests write it (`test(name, fn, 30000)`). */
export function test(name: string, fn: Body, timeout?: number): void {
  void nodeTest.test(name, timeout === undefined ? {} : { timeout }, async () => { await fn(); });
}

/** The hooks - each with an optional timeout in ms, as test() */
export const beforeAll = (fn: Body, timeout?: number) => nodeTest.before(() => fn(), { timeout });
export const afterAll = (fn: Body, timeout?: number) => nodeTest.after(() => fn(), { timeout });
export const beforeEach = (fn: Body, timeout?: number) => nodeTest.beforeEach(() => fn(), { timeout });
export const afterEach = (fn: Body, timeout?: number) => nodeTest.afterEach(() => fn(), { timeout });

/** A value toEqual() matches by a rule of its own - expect.arrayContaining(). */
class Asymmetric {
  readonly describe: string;
  readonly matches: (actual: unknown) => boolean;
  constructor(describe: string, matches: (actual: unknown) => boolean) {
    this.describe = describe;
    this.matches = matches;
  }
  [inspect.custom]() { return this.describe; }
}

const show = (value: unknown) => inspect(value, { depth: 6, breakLength: Infinity, maxArrayLength: 50, maxStringLength: 500 });

/** Jest's toEqual(): deep, the types of objects not compared, and a property that is undefined the same as one left out. */
function equals(actual: unknown, expected: unknown): boolean {
  if (expected instanceof Asymmetric) return expected.matches(actual);
  if (Object.is(actual, expected)) return true;
  if (typeof actual !== "object" || typeof expected !== "object" || actual === null || expected === null) return false;
  if (Array.isArray(actual) !== Array.isArray(expected)) return false;
  if (actual instanceof Date || expected instanceof Date) {
    return actual instanceof Date && expected instanceof Date && actual.getTime() === expected.getTime();
  }
  if (actual instanceof RegExp || expected instanceof RegExp) return String(actual) === String(expected);
  if (actual instanceof Map || expected instanceof Map) {
    if (!(actual instanceof Map && expected instanceof Map) || actual.size !== expected.size) return false;
    return [...actual].every(([key, value]) => expected.has(key) && equals(value, expected.get(key)));
  }
  if (actual instanceof Set || expected instanceof Set) {
    if (!(actual instanceof Set && expected instanceof Set) || actual.size !== expected.size) return false;
    return [...actual].every(value => expected.has(value) || [...expected].some(other => equals(value, other)));
  }
  if (ArrayBuffer.isView(actual) || ArrayBuffer.isView(expected) || Array.isArray(actual)) {
    const a = actual as ArrayLike<unknown>, b = expected as ArrayLike<unknown>;
    return a.length === b.length && Array.from(a).every((value, i) => equals(value, b[i]));
  }
  const defined = (object: object) => Object.keys(object).filter(key => (object as Record<string, unknown>)[key] !== undefined);
  const keys = defined(actual), expectedKeys = defined(expected);
  return keys.length === expectedKeys.length
    && expectedKeys.every(key => Object.hasOwn(actual, key)
      && equals((actual as Record<string, unknown>)[key], (expected as Record<string, unknown>)[key]));
}

/** Jest's toMatchObject(): every property `expected` has, `actual` has as well - at any depth. */
function matchesObject(actual: unknown, expected: unknown): boolean {
  if (expected instanceof Asymmetric) return expected.matches(actual);
  if (typeof expected !== "object" || expected === null || typeof actual !== "object" || actual === null) return equals(actual, expected);
  if (Array.isArray(expected)) {
    return Array.isArray(actual) && actual.length === expected.length && expected.every((value, i) => matchesObject(actual[i], value));
  }
  if (expected instanceof Map || expected instanceof Set || expected instanceof Date || expected instanceof RegExp) return equals(actual, expected);
  return Object.entries(expected).every(([key, value]) => key in actual && matchesObject((actual as Record<string, unknown>)[key], value));
}

type Outcome = { pass: boolean, message: string, expected?: unknown, diff?: boolean };

/** What a function threw when called - or, under `.rejects`, the reason itself. */
type Thrown = { threw: false } | { threw: true, error: unknown };

function thrownBy(actual: unknown, rejected: boolean): Thrown {
  if (rejected) return { threw: true, error: actual };
  if (typeof actual !== "function") throw new TypeError(`toThrow() needs a function, not ${show(actual)}`);
  try {
    actual();
    return { threw: false };
  } catch (error) {
    return { threw: true, error };
  }
}

function lengthOf(value: unknown): number | undefined {
  return typeof value === "string" || Array.isArray(value) ? value.length
    : (value as { length?: unknown } | null)?.length as number | undefined;
}

const MATCHERS = {
  toBe: (actual: unknown, expected: unknown): Outcome =>
    ({ pass: Object.is(actual, expected), message: `to be ${show(expected)}`, expected, diff: true }),
  toEqual: (actual: unknown, expected: unknown): Outcome =>
    ({ pass: equals(actual, expected), message: `to equal ${show(expected)}`, expected, diff: true }),
  toMatchObject: (actual: unknown, expected: object): Outcome =>
    ({ pass: matchesObject(actual, expected), message: `to match the object ${show(expected)}`, expected, diff: true }),
  toContain: (actual: unknown, item: unknown): Outcome => {
    const pass = typeof actual === "string" ? typeof item === "string" && actual.includes(item)
      : actual !== null && typeof actual === "object" && Symbol.iterator in actual
        ? [...actual as Iterable<unknown>].some(value => Object.is(value, item)) : false;
    return { pass, message: `to contain ${show(item)}` };
  },
  toBeNull: (actual: unknown): Outcome => ({ pass: actual === null, message: "to be null" }),
  toBeUndefined: (actual: unknown): Outcome => ({ pass: actual === undefined, message: "to be undefined" }),
  toBeDefined: (actual: unknown): Outcome => ({ pass: actual !== undefined, message: "to be defined" }),
  toBeTruthy: (actual: unknown): Outcome => ({ pass: !!actual, message: "to be truthy" }),
  toBeFalsy: (actual: unknown): Outcome => ({ pass: !actual, message: "to be falsy" }),
  toHaveLength: (actual: unknown, length: number): Outcome =>
    ({ pass: lengthOf(actual) === length, message: `to have length ${length} (it has ${lengthOf(actual)})` }),
  toBeGreaterThan: (actual: unknown, than: number | bigint): Outcome =>
    ({ pass: (actual as number) > than, message: `to be greater than ${show(than)}` }),
  toBeGreaterThanOrEqual: (actual: unknown, than: number | bigint): Outcome =>
    ({ pass: (actual as number) >= than, message: `to be greater than or equal to ${show(than)}` }),
  toBeLessThan: (actual: unknown, than: number | bigint): Outcome =>
    ({ pass: (actual as number) < than, message: `to be less than ${show(than)}` }),
  toBeLessThanOrEqual: (actual: unknown, than: number | bigint): Outcome =>
    ({ pass: (actual as number) <= than, message: `to be less than or equal to ${show(than)}` }),
  toBeCloseTo: (actual: unknown, expected: number, digits = 2): Outcome => ({
    pass: typeof actual === "number" && Math.abs(expected - actual) < 10 ** -digits / 2,
    message: `to be close to ${expected} (to ${digits} digits)`,
  }),
  toMatch: (actual: unknown, pattern: RegExp | string): Outcome => ({
    pass: typeof actual === "string" && (typeof pattern === "string" ? actual.includes(pattern) : new RegExp(pattern).test(actual)),
    message: `to match ${show(pattern)}`,
  }),
  toStartWith: (actual: unknown, start: string): Outcome =>
    ({ pass: typeof actual === "string" && actual.startsWith(start), message: `to start with ${show(start)}` }),
  toEndWith: (actual: unknown, end: string): Outcome =>
    ({ pass: typeof actual === "string" && actual.endsWith(end), message: `to end with ${show(end)}` }),
  toHaveProperty: (actual: unknown, path: string | string[], ...value: [unknown?]): Outcome => {
    let at: unknown = actual, has = true;
    for (const key of Array.isArray(path) ? path : path.split(".")) {
      if (at === null || at === undefined || !(key in Object(at))) { has = false; break; }
      at = (at as Record<string, unknown>)[key];
    }
    const pass = has && (value.length === 0 || equals(at, value[0]));
    return { pass, message: `to have the property ${show(path)}${value.length ? ` equal to ${show(value[0])}` : ""}` };
  },
  // Called apart: what it is given is the outcome of calling the function (see thrownBy()).
  toThrow: (thrown: Thrown, expected?: string | RegExp | Error | (new (...args: never[]) => unknown)): Outcome => {
    const error = thrown.threw ? thrown.error : undefined;
    const message = error instanceof Error ? error.message : String(error);
    const pass = thrown.threw && (expected === undefined ? true
      : typeof expected === "string" ? message.includes(expected)
      : expected instanceof RegExp ? expected.test(message)
      : expected instanceof Error ? message === expected.message
      : error instanceof expected);
    const what = expected === undefined ? "" : ` ${typeof expected === "function" ? expected.name : show(expected)}`;
    return { pass, message: `to throw${what}${thrown.threw ? ` (it threw ${show(error)})` : " (it threw nothing)"}` };
  },
};

type Matcher = keyof typeof MATCHERS;
type Arguments<M extends Matcher> = (typeof MATCHERS)[M] extends (actual: never, ...args: infer A) => Outcome ? A : never;
type Matchers<R> = { [M in Matcher]: (...args: Arguments<M>) => R };
type Expectation = Matchers<void> & {
  not: Matchers<void>,
  resolves: Matchers<Promise<void>> & { not: Matchers<Promise<void>> },
  rejects: Matchers<Promise<void>> & { not: Matchers<Promise<void>> },
};

function check(name: Matcher, actual: unknown, args: unknown[], negate: boolean, rejected: boolean): void {
  const subject = name === "toThrow" ? thrownBy(actual, rejected) : actual;
  const outcome = (MATCHERS[name] as (actual: unknown, ...args: unknown[]) => Outcome)(subject, ...args);
  if (outcome.pass === !negate) return;
  const shown = name === "toThrow" ? (rejected ? "the rejection" : "the function") : show(actual);
  throw new AssertionError({
    message: `expected ${shown} ${negate ? "not " : ""}${outcome.message}`,
    actual: outcome.diff ? actual : undefined,
    expected: outcome.diff ? outcome.expected : undefined,
    operator: name,
    stackStartFn: check,
  });
}

function matchers<R>(run: (name: Matcher, args: unknown[]) => R): Matchers<R> {
  return Object.fromEntries(Object.keys(MATCHERS).map(name => [name, (...args: unknown[]) => run(name as Matcher, args)])) as Matchers<R>;
}

/** What a promise settles to, checked - `resolves` that it fulfils, `rejects` that it rejects. */
function settled(promise: unknown, rejects: boolean, negate: boolean): Matchers<Promise<void>> {
  return matchers(async (name, args) => {
    let value: unknown, rejected = false;
    try {
      value = await promise;
    } catch (error) {
      value = error;
      rejected = true;
    }
    if (rejected !== rejects) {
      throw new AssertionError({
        message: rejects ? `expected the promise to reject, and it resolved to ${show(value)}`
          : `expected the promise to resolve, and it rejected with ${show(value)}`,
        stackStartFn: check,
      });
    }
    check(name, value, args, negate, rejects);
  });
}

export const expect = Object.assign((actual: unknown): Expectation => ({
  ...matchers((name, args) => check(name, actual, args, false, false)),
  not: matchers((name, args) => check(name, actual, args, true, false)),
  resolves: Object.assign(settled(actual, false, false), { not: settled(actual, false, true) }),
  rejects: Object.assign(settled(actual, true, false), { not: settled(actual, true, true) }),
}), {
  /** An array holding every one of `items` - among others, in any order. */
  arrayContaining: (items: readonly unknown[]): never => new Asymmetric(`ArrayContaining ${show(items)}`, actual =>
    Array.isArray(actual) && items.every(item => actual.some(value => equals(value, item)))) as never,
});
