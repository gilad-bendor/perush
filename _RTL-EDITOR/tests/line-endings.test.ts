import { describe, expect, test } from "bun:test";
import { lineEndingOf, toLf, withLineEnding } from "../src/line-endings";

describe("line endings", () => {
    test("toLf() turns CRLF into LF, and leaves a lone CR alone", () => {
        expect(toLf("a\r\nb\r\n")).toBe("a\nb\n");
        expect(toLf("a\rb\n")).toBe("a\rb\n");
    });

    test("lineEndingOf() reads a uniform file", () => {
        expect(lineEndingOf("a\r\nb\r\n")).toBe("\r\n");
        expect(lineEndingOf("a\nb\n")).toBe("\n");
    });

    test("lineEndingOf() takes the majority of a mixed file, and LF on a tie or no line break", () => {
        expect(lineEndingOf("a\r\nb\r\nc\n")).toBe("\r\n");
        expect(lineEndingOf("a\r\nb\nc\n")).toBe("\n");
        expect(lineEndingOf("a\r\nb\n")).toBe("\n");
        expect(lineEndingOf("abc")).toBe("\n");
        expect(lineEndingOf("")).toBe("\n");
    });

    test("withLineEnding() round-trips a CRLF file through LF", () => {
        const onDisk = "א\r\n\r\nב\r\n";
        expect(withLineEnding(toLf(onDisk), lineEndingOf(onDisk))).toBe(onDisk);
        expect(withLineEnding("a\nb", "\n")).toBe("a\nb");
    });
});
