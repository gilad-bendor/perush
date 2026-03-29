import { describe, test, expect, beforeEach } from "bun:test";
import {
  stubQuery,
  extractStubResponseBlock,
  parseStubYaml,
  resetStubState,
  type StubSDKMessage,
  type StubSDKSystemMessage,
  type StubSDKAssistantMessage,
  type StubSDKResultSuccess,
  type StubSDKStreamEvent,
} from "../../src/stub-sdk";

beforeEach(() => {
  resetStubState();
});

// ---------------------------------------------------------------------------
// extractStubResponseBlock
// ---------------------------------------------------------------------------

describe("extractStubResponseBlock", () => {
  test("extracts block between markers", () => {
    const prompt = `Some prompt\n\n---stub-response---\nkey: value\n---end-stub-response---`;
    expect(extractStubResponseBlock(prompt)).toBe("key: value");
  });

  test("returns null when no markers present", () => {
    expect(extractStubResponseBlock("plain prompt")).toBeNull();
  });

  test("returns null when only start marker present", () => {
    expect(extractStubResponseBlock("text\n---stub-response---\ndata")).toBeNull();
  });

  test("handles multiline content", () => {
    const prompt = `prompt\n---stub-response---\nline1: a\nline2: b\n---end-stub-response---`;
    expect(extractStubResponseBlock(prompt)).toBe("line1: a\nline2: b");
  });

  test("trims whitespace", () => {
    const prompt = `prompt\n---stub-response---\n  key: value  \n---end-stub-response---`;
    expect(extractStubResponseBlock(prompt)).toBe("key: value");
  });
});

// ---------------------------------------------------------------------------
// parseStubYaml
// ---------------------------------------------------------------------------

describe("parseStubYaml", () => {
  test("parses simple key-value pairs", () => {
    const result = parseStubYaml("name: Milo\nage: 42");
    expect(result).toEqual({ name: "Milo", age: 42 });
  });

  test("parses numbers", () => {
    const result = parseStubYaml("selfImportance: 7\ncost: 3.50");
    expect(result).toEqual({ selfImportance: 7, cost: 3.5 });
  });

  test("parses booleans", () => {
    const result = parseStubYaml("active: true\ndeleted: false");
    expect(result).toEqual({ active: true, deleted: false });
  });

  test("strips double quotes from strings", () => {
    const result = parseStubYaml('summary: "some text here"');
    expect(result).toEqual({ summary: "some text here" });
  });

  test("strips single quotes from strings", () => {
    const result = parseStubYaml("summary: 'some text here'");
    expect(result).toEqual({ summary: "some text here" });
  });

  test("handles multiline block with pipe", () => {
    const result = parseStubYaml("text: |\n  line one\n  line two\n  line three");
    expect(result).toEqual({ text: "line one\nline two\nline three" });
  });

  test("handles empty input", () => {
    expect(parseStubYaml("")).toEqual({});
  });

  test("ignores non-matching lines", () => {
    const result = parseStubYaml("# comment\nkey: value\n  indented");
    expect(result).toEqual({ key: "value" });
  });
});

// ---------------------------------------------------------------------------
// stubQuery — basic operation
// ---------------------------------------------------------------------------

describe("stubQuery — basic", () => {
  test("yields system init message first", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: hello\n---end-stub-response---",
      options: { title: "test", model: "test-model" },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
    }

    expect(messages.length).toBeGreaterThanOrEqual(3); // init, assistant, result
    expect(messages[0].type).toBe("system");
    expect((messages[0] as StubSDKSystemMessage).subtype).toBe("init");
  });

  test("init message contains session_id", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: x\n---end-stub-response---",
      options: { title: "test" },
    });

    for await (const msg of q) {
      if (msg.type === "system" && (msg as StubSDKSystemMessage).subtype === "init") {
        expect((msg as StubSDKSystemMessage).session_id).toBeTruthy();
        break;
      }
    }
  });

  test("generates unique session IDs", async () => {
    const ids: string[] = [];
    for (let i = 0; i < 3; i++) {
      const q = stubQuery({
        prompt: "test\n---stub-response---\ntext: x\n---end-stub-response---",
        options: { title: "test" },
      });
      for await (const msg of q) {
        if (msg.type === "system") {
          ids.push((msg as StubSDKSystemMessage).session_id);
          break;
        }
      }
    }
    expect(new Set(ids).size).toBe(3);
  });

  test("yields assistant message with response text", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: hello world\n---end-stub-response---",
      options: { title: "test" },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
    }

    const assistant = messages.find(m => m.type === "assistant") as StubSDKAssistantMessage;
    expect(assistant).toBeDefined();
    expect(assistant.message.content[0].text).toBe("hello world");
  });

  test("yields result message last", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: done\n---end-stub-response---",
      options: { title: "test" },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
    }

    const last = messages[messages.length - 1] as StubSDKResultSuccess;
    expect(last.type).toBe("result");
    expect(last.subtype).toBe("success");
    expect(last.result).toBe("done");
    expect(last.total_cost_usd).toBeGreaterThanOrEqual(0);
  });
});

// ---------------------------------------------------------------------------
// stubQuery — JSON response (non-text key)
// ---------------------------------------------------------------------------

describe("stubQuery — JSON response", () => {
  test("returns JSON-stringified data when no text key", async () => {
    const q = stubQuery({
      prompt: `test\n---stub-response---\nnextSpeaker: "Milo"\nvibe: "הדיון זורם."\n---end-stub-response---`,
      options: { title: "test" },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
    }

    const result = messages.find(m => m.type === "result") as StubSDKResultSuccess;
    const parsed = JSON.parse(result.result);
    expect(parsed.nextSpeaker).toBe("Milo");
    expect(parsed.vibe).toBe("הדיון זורם.");
  });
});

// ---------------------------------------------------------------------------
// stubQuery — streaming
// ---------------------------------------------------------------------------

describe("stubQuery — streaming", () => {
  test("emits stream_event messages when includePartialMessages is true", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: This is a longer response for streaming\n---end-stub-response---",
      options: { title: "test", includePartialMessages: true },
    });

    const streamEvents: StubSDKStreamEvent[] = [];
    for await (const msg of q) {
      if (msg.type === "stream_event") {
        streamEvents.push(msg as StubSDKStreamEvent);
      }
    }

    expect(streamEvents.length).toBeGreaterThan(0);
    // Verify stream event structure
    const first = streamEvents[0];
    expect(first.event.type).toBe("content_block_delta");
    expect(first.event.delta.type).toBe("text_delta");
    expect(first.event.delta.text).toBeTruthy();
  });

  test("concatenated stream chunks equal the full response", async () => {
    const fullText = "This is a longer response that will be chunked for streaming";
    const q = stubQuery({
      prompt: `test\n---stub-response---\ntext: ${fullText}\n---end-stub-response---`,
      options: { title: "test", includePartialMessages: true },
    });

    let accumulated = "";
    for await (const msg of q) {
      if (msg.type === "stream_event") {
        accumulated += (msg as StubSDKStreamEvent).event.delta.text;
      }
    }

    expect(accumulated).toBe(fullText);
  });

  test("does not emit stream_event when includePartialMessages is false", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: some response\n---end-stub-response---",
      options: { title: "test", includePartialMessages: false },
    });

    for await (const msg of q) {
      expect(msg.type).not.toBe("stream_event");
    }
  });
});

// ---------------------------------------------------------------------------
// stubQuery — session resume
// ---------------------------------------------------------------------------

describe("stubQuery — session resume", () => {
  test("uses provided session ID when resuming", async () => {
    // First query: get a session ID
    let sessionId = "";
    const q1 = stubQuery({
      prompt: "first\n---stub-response---\ntext: hello\n---end-stub-response---",
      options: { title: "test" },
    });
    for await (const msg of q1) {
      if (msg.type === "system") {
        sessionId = (msg as StubSDKSystemMessage).session_id;
        break;
      }
    }
    // Drain remaining
    for await (const _ of q1) {}

    // Second query: resume
    const q2 = stubQuery({
      prompt: "second\n---stub-response---\ntext: world\n---end-stub-response---",
      options: { title: "test", resume: sessionId },
    });
    for await (const msg of q2) {
      if (msg.type === "system") {
        expect((msg as StubSDKSystemMessage).session_id).toBe(sessionId);
        break;
      }
    }
  });
});

// ---------------------------------------------------------------------------
// stubQuery — interrupt
// ---------------------------------------------------------------------------

describe("stubQuery — interrupt", () => {
  test("interrupt() stops the generator", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: a very long response that should be interrupted before completion surely\n---end-stub-response---",
      options: { title: "test", includePartialMessages: true },
    });

    const messages: StubSDKMessage[] = [];
    let count = 0;
    for await (const msg of q) {
      messages.push(msg);
      count++;
      if (count === 2) {
        await q.interrupt();
      }
    }

    // Should have stopped early (init + maybe 1-2 stream events)
    expect(messages.length).toBeLessThan(10);
  });

  test("return() stops the generator (AsyncGenerator standard)", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: long text here\n---end-stub-response---",
      options: { title: "test", includePartialMessages: true },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
      if (messages.length === 1) {
        await q.return();
        break;
      }
    }

    // Should have only the init message
    expect(messages.length).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// stubQuery — no response block
// ---------------------------------------------------------------------------

describe("stubQuery — no response block", () => {
  test("returns empty JSON when no stub-response markers", async () => {
    const q = stubQuery({
      prompt: "just a plain prompt with no stub markers",
      options: { title: "test" },
    });

    const messages: StubSDKMessage[] = [];
    for await (const msg of q) {
      messages.push(msg);
    }

    const result = messages.find(m => m.type === "result") as StubSDKResultSuccess;
    expect(result.result).toBe("{}");
  });
});

// ---------------------------------------------------------------------------
// stubQuery — model and tools in init
// ---------------------------------------------------------------------------

describe("stubQuery — options in init", () => {
  test("init message reflects the model option", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: x\n---end-stub-response---",
      options: { title: "test", model: "claude-opus-4-6" },
    });

    for await (const msg of q) {
      if (msg.type === "system") {
        expect((msg as StubSDKSystemMessage).model).toBe("claude-opus-4-6");
        break;
      }
    }
  });

  test("init message reflects tools option", async () => {
    const q = stubQuery({
      prompt: "test\n---stub-response---\ntext: x\n---end-stub-response---",
      options: { title: "test", tools: ["Read", "Grep"] },
    });

    for await (const msg of q) {
      if (msg.type === "system") {
        expect((msg as StubSDKSystemMessage).tools).toEqual(["Read", "Grep"]);
        break;
      }
    }
  });
});
