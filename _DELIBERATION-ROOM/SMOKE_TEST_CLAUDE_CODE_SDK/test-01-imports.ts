#!/usr/bin/env bun
/**
 * Test 1: Package Installation and Basic Import
 * Verify what the SDK exports and their types.
 */

import * as sdk from "@anthropic-ai/claude-agent-sdk";

console.log("=== Test 1: Package Exports ===\n");

// List all exports
const exports = Object.keys(sdk);
console.log("All exports:", exports);

// Check types of key exports
for (const key of exports) {
  const val = (sdk as any)[key];
  console.log(`  ${key}: ${typeof val}`);
}

// Specifically check the ones the Deliberation Room needs
console.log("\n--- Key exports for Deliberation Room ---");
console.log("query:", typeof sdk.query);
console.log("listSessions:", typeof (sdk as any).listSessions);
console.log("tool:", typeof (sdk as any).tool);
console.log("createSdkMcpServer:", typeof (sdk as any).createSdkMcpServer);
