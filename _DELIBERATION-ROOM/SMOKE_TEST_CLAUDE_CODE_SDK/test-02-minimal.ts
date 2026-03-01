#!/usr/bin/env bun
/**
 * Minimal test: just try to create a query and see what happens
 */

import { query } from "@anthropic-ai/claude-agent-sdk";

// Remove nested session detection
const cleanEnv = { ...process.env };
delete cleanEnv.CLAUDECODE;
delete cleanEnv.CLAUDE_CODE_ENTRYPOINT;
delete cleanEnv.CLAUDE_CODE_SSE_PORT;

console.log("Starting query...");
console.log("CWD:", process.cwd());

try {
  const q = query({
    prompt: "Say OK",
    options: {
      model: "claude-haiku-4-5-20251001",
      maxTurns: 1,
      permissionMode: "bypassPermissions",
      allowDangerouslySkipPermissions: true,
      env: cleanEnv,
      stderr: (data: string) => {
        console.error("[STDERR]", data.substring(0, 500));
      },
    }
  });

  console.log("Query object created, type:", typeof q);
  console.log("Is async iterable:", Symbol.asyncIterator in q);

  let count = 0;
  for await (const msg of q) {
    count++;
    console.log(`MSG #${count}: type=${msg.type}, subtype=${"subtype" in msg ? (msg as any).subtype : "N/A"}`);
    if (count > 20) {
      console.log("Stopping after 20 messages");
      break;
    }
  }
  console.log(`Done. Total messages: ${count}`);
} catch (err: any) {
  console.error("ERROR:", err.message);
  console.error("Stack:", err.stack?.substring(0, 500));
}
