#!/usr/bin/env bun
/**
 * Tests 2, 3, 5, 17, 18: Basic query, init message, streaming, result message, assistant message
 */

import { query } from "@anthropic-ai/claude-agent-sdk";

console.log("=== Test 2/3/5/17/18: Basic Query + Init + Streaming + Result + Assistant ===\n");

// Remove nested session detection
const cleanEnv = { ...process.env };
delete cleanEnv.CLAUDECODE;
delete cleanEnv.CLAUDE_CODE_ENTRYPOINT;
delete cleanEnv.CLAUDE_CODE_SSE_PORT;

const allMessages: any[] = [];

const abortController = new AbortController();
// Safety timeout: kill after 90s
const safetyTimer = setTimeout(() => {
  console.log("\n!!! SAFETY TIMEOUT - aborting query");
  abortController.abort();
}, 90_000);

const q = query({
  prompt: "Respond with exactly: SMOKE_TEST_OK. Nothing else.",
  options: {
    model: "claude-haiku-4-5",
    includePartialMessages: true,
    systemPrompt: "You are a minimal test bot. Respond exactly as instructed, with no extra text.",
    maxTurns: 1,
    permissionMode: "bypassPermissions",
    allowDangerouslySkipPermissions: true,
    abortController,
    env: cleanEnv,
    stderr: (data: string) => {
      if (data.trim().length > 0) {
        console.error("[STDERR]", data.trim().substring(0, 300));
      }
    },
  }
});

let sessionId: string | undefined;
let streamEventCount = 0;
let streamEventTypes = new Set<string>();
let resultMsg: any = null;
let assistantMsgs: any[] = [];
let initMsg: any = null;

try {
  for await (const msg of q) {
    allMessages.push(msg);

    if (msg.type === "system" && "subtype" in msg && msg.subtype === "init") {
      initMsg = msg;
      sessionId = msg.session_id;
      console.log("--- Init Message ---");
      console.log("  session_id:", msg.session_id);
      console.log("  model:", msg.model);
      console.log("  cwd:", msg.cwd);
      console.log("  tools:", msg.tools?.length, "tools available");
      console.log("  permissionMode:", msg.permissionMode);
      console.log("  claude_code_version:", msg.claude_code_version);
      console.log("  All fields:", Object.keys(msg).sort().join(", "));
    }

    if (msg.type === "stream_event") {
      streamEventCount++;
      const evt = (msg as any).event;
      if (evt?.type) streamEventTypes.add(evt.type);
      if (evt?.type === "content_block_delta" && evt?.delta?.type === "text_delta") {
        process.stdout.write(evt.delta.text);
      }
    }

    if (msg.type === "assistant") {
      assistantMsgs.push(msg);
    }

    if (msg.type === "result") {
      resultMsg = msg;
    }
  }
} catch (err: any) {
  console.error("\n!!! ERROR:", err.message);
  console.error("Messages received before error:", allMessages.length);
  for (const msg of allMessages) {
    console.log(`  ${msg.type}${(msg as any).subtype ? "/" + (msg as any).subtype : ""}`);
  }
}

clearTimeout(safetyTimer);

console.log("\n\n--- Summary ---");
console.log(`Total messages: ${allMessages.length}`);
console.log(`Message types: ${[...new Set(allMessages.map(m => m.type))].join(", ")}`);
console.log(`Session ID: ${sessionId}`);
console.log(`Init message received: ${!!initMsg}`);

console.log(`\n--- Streaming (Test 5) ---`);
console.log(`Stream events: ${streamEventCount}`);
console.log(`Stream event types: ${[...streamEventTypes].join(", ")}`);

console.log(`\n--- Assistant Messages (Test 18) ---`);
console.log(`Count: ${assistantMsgs.length}`);
if (assistantMsgs.length > 0) {
  const first = assistantMsgs[0];
  console.log(`  Fields: ${Object.keys(first).sort().join(", ")}`);
  console.log(`  message.content type: ${Array.isArray(first.message?.content) ? "array" : typeof first.message?.content}`);
  if (Array.isArray(first.message?.content)) {
    for (const block of first.message.content) {
      console.log(`  Content block: type=${block.type}, text=${block.text?.substring(0, 80)}`);
    }
  }
}

console.log(`\n--- Result Message (Test 17) ---`);
if (resultMsg) {
  console.log(`  Fields: ${Object.keys(resultMsg).sort().join(", ")}`);
  console.log(`  subtype: ${resultMsg.subtype}`);
  console.log(`  result: "${resultMsg.result?.substring(0, 100)}"`);
  console.log(`  total_cost_usd: ${resultMsg.total_cost_usd}`);
  console.log(`  num_turns: ${resultMsg.num_turns}`);
  console.log(`  duration_ms: ${resultMsg.duration_ms}`);
  console.log(`  is_error: ${resultMsg.is_error}`);
  console.log(`  stop_reason: ${resultMsg.stop_reason}`);
  console.log(`  usage:`, JSON.stringify(resultMsg.usage));
  console.log(`  modelUsage:`, JSON.stringify(resultMsg.modelUsage));
  console.log(`  permission_denials:`, resultMsg.permission_denials);
} else {
  console.log("  NO RESULT MESSAGE RECEIVED!");
}
