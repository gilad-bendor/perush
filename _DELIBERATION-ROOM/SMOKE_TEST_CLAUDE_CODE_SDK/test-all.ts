import { query, listSessions, getSessionMessages } from "@anthropic-ai/claude-agent-sdk";
import { writeFileSync, appendFileSync, existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import { homedir } from "os";

const LOG = "/tmp/sdk-smoke-test.log";
writeFileSync(LOG, `=== SDK Smoke Test - ${new Date().toISOString()} ===\n\n`);
const log = (s: string) => appendFileSync(LOG, s + "\n");
const logSection = (name: string) => log(`\n${"=".repeat(60)}\n${name}\n${"=".repeat(60)}`);

// Clean env to avoid nested session detection
const cleanEnv = { ...process.env };
delete cleanEnv.CLAUDECODE;
delete cleanEnv.CLAUDE_CODE_ENTRYPOINT;
delete cleanEnv.CLAUDE_CODE_SSE_PORT;

const baseOpts = {
  model: "claude-haiku-4-5",
  maxTurns: 1,
  permissionMode: "bypassPermissions" as const,
  allowDangerouslySkipPermissions: true,
  env: cleanEnv,
};

async function collectMessages(q: any): Promise<any[]> {
  const msgs: any[] = [];
  for await (const msg of q) msgs.push(msg);
  return msgs;
}

// ============================================================
// TEST 2 + 3: Basic query + init message
// ============================================================
async function test_02_03() {
  logSection("TEST 2+3: Basic Query + Init Message");

  const msgs = await collectMessages(query({
    prompt: "Respond with exactly: SMOKE_TEST_OK",
    options: { ...baseOpts, systemPrompt: "You are a test bot. Reply exactly as instructed." }
  }));

  log(`Total messages: ${msgs.length}`);
  log(`Message types: ${msgs.map(m => m.type + (m.subtype ? "/" + m.subtype : "")).join(", ")}`);

  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  if (init) {
    log(`\nInit message fields: ${Object.keys(init).sort().join(", ")}`);
    log(`  session_id: ${init.session_id} (type: ${typeof init.session_id})`);
    log(`  model: ${init.model}`);
    log(`  cwd: ${init.cwd}`);
    log(`  tools: [${init.tools?.join(", ")}]`);
    log(`  permissionMode: ${init.permissionMode}`);
    log(`  claude_code_version: ${init.claude_code_version}`);
    log(`  uuid: ${init.uuid}`);
    log(`  agents: ${JSON.stringify(init.agents)}`);
    log(`  mcp_servers: ${JSON.stringify(init.mcp_servers)}`);
    log(`  slash_commands: ${JSON.stringify(init.slash_commands)}`);
    log(`  output_style: ${init.output_style}`);
    log(`  skills: ${JSON.stringify(init.skills)}`);
    log(`  plugins: ${JSON.stringify(init.plugins)}`);
  } else {
    log("!!! NO INIT MESSAGE");
  }

  const result = msgs.find(m => m.type === "result");
  if (result) {
    log(`\nResult message:`);
    log(`  subtype: ${result.subtype}`);
    log(`  result text: "${result.result?.substring(0, 200)}"`);
    log(`  total_cost_usd: ${result.total_cost_usd}`);
    log(`  num_turns: ${result.num_turns}`);
    log(`  duration_ms: ${result.duration_ms}`);
    log(`  is_error: ${result.is_error}`);
    log(`  stop_reason: ${result.stop_reason}`);
    log(`  usage: ${JSON.stringify(result.usage)}`);
    log(`  modelUsage: ${JSON.stringify(result.modelUsage)}`);
    log(`  permission_denials: ${JSON.stringify(result.permission_denials)}`);
    log(`  All fields: ${Object.keys(result).sort().join(", ")}`);
  }

  const assistant = msgs.find(m => m.type === "assistant");
  if (assistant) {
    log(`\nAssistant message:`);
    log(`  All fields: ${Object.keys(assistant).sort().join(", ")}`);
    log(`  message.content type: ${Array.isArray(assistant.message?.content) ? "array" : typeof assistant.message?.content}`);
    if (Array.isArray(assistant.message?.content)) {
      for (const block of assistant.message.content) {
        log(`  Content block: type=${block.type}, text="${block.text?.substring(0, 100)}"`);
      }
    }
    log(`  parent_tool_use_id: ${assistant.parent_tool_use_id}`);
    log(`  uuid: ${assistant.uuid}`);
    log(`  session_id: ${assistant.session_id}`);
  }

  return init?.session_id;
}

// ============================================================
// TEST 4: Session Resume
// ============================================================
async function test_04(sessionId: string) {
  logSection("TEST 4: Session Resume");

  log(`Resuming session: ${sessionId}`);
  const msgs = await collectMessages(query({
    prompt: "What was the exact text I asked you to respond with in my first message?",
    options: { ...baseOpts, resume: sessionId }
  }));

  log(`Total messages: ${msgs.length}`);
  log(`Message types: ${msgs.map(m => m.type + (m.subtype ? "/" + m.subtype : "")).join(", ")}`);

  // Check if we get a NEW init message on resume
  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  log(`New init message on resume: ${!!init}`);
  if (init) {
    log(`  Same session_id? ${init.session_id === sessionId}`);
    log(`  Session ID: ${init.session_id}`);
  }

  const result = msgs.find(m => m.type === "result");
  log(`Result text: "${result?.result?.substring(0, 200)}"`);
  log(`Contains SMOKE_TEST_OK? ${result?.result?.includes("SMOKE_TEST_OK")}`);

  return sessionId;
}

// ============================================================
// TEST 5: Streaming (includePartialMessages)
// ============================================================
async function test_05() {
  logSection("TEST 5: Streaming (includePartialMessages)");

  const msgs = await collectMessages(query({
    prompt: "Write a single paragraph about the color blue. Keep it under 50 words.",
    options: {
      ...baseOpts,
      includePartialMessages: true,
      systemPrompt: "You are a brief writer."
    }
  }));

  const streamEvents = msgs.filter(m => m.type === "stream_event");
  log(`Stream events: ${streamEvents.length}`);

  const eventTypes = new Set<string>();
  let textChunks = 0;
  let totalText = "";
  for (const se of streamEvents) {
    const evt = se.event;
    if (evt?.type) eventTypes.add(evt.type);
    if (evt?.type === "content_block_delta" && evt?.delta?.type === "text_delta") {
      textChunks++;
      totalText += evt.delta.text;
    }
  }

  log(`Stream event types: ${[...eventTypes].join(", ")}`);
  log(`Text chunks: ${textChunks}`);
  log(`Total streamed text length: ${totalText.length}`);
  log(`Sample text: "${totalText.substring(0, 100)}..."`);

  // Check fields on a stream_event message
  if (streamEvents.length > 0) {
    const sample = streamEvents[0];
    log(`\nStream event fields: ${Object.keys(sample).sort().join(", ")}`);
    log(`  parent_tool_use_id: ${sample.parent_tool_use_id}`);
    log(`  uuid: ${sample.uuid}`);
    log(`  session_id: ${sample.session_id}`);
  }
}

// ============================================================
// TEST 6: Tool Progress Messages
// ============================================================
async function test_06() {
  logSection("TEST 6: Tool Progress Messages");

  const msgs = await collectMessages(query({
    prompt: "List the files in the current directory using the Glob tool with pattern '*'.",
    options: {
      ...baseOpts,
      includePartialMessages: true,
      maxTurns: 3,
    }
  }));

  const toolProgress = msgs.filter(m => m.type === "tool_progress");
  log(`Tool progress messages: ${toolProgress.length}`);

  if (toolProgress.length > 0) {
    const sample = toolProgress[0];
    log(`\nSample tool_progress fields: ${Object.keys(sample).sort().join(", ")}`);
    log(`  tool_name: ${sample.tool_name}`);
    log(`  tool_use_id: ${sample.tool_use_id}`);
    log(`  parent_tool_use_id: ${sample.parent_tool_use_id}`);
    log(`  elapsed_time_seconds: ${sample.elapsed_time_seconds}`);
    log(`  task_id: ${sample.task_id}`);
  }

  // Also check for tool_use_summary
  const toolSummary = msgs.filter(m => m.type === "tool_use_summary");
  log(`\nTool use summary messages: ${toolSummary.length}`);
  if (toolSummary.length > 0) {
    log(`  summary: ${toolSummary[0].summary?.substring(0, 100)}`);
  }

  // Check for tool_use blocks in assistant messages
  const assistantMsgs = msgs.filter(m => m.type === "assistant");
  for (const am of assistantMsgs) {
    const toolUses = am.message?.content?.filter((b: any) => b.type === "tool_use") || [];
    if (toolUses.length > 0) {
      log(`\nTool use in assistant message:`);
      for (const tu of toolUses) {
        log(`  tool: ${tu.name}, id: ${tu.id}, input keys: ${Object.keys(tu.input || {}).join(", ")}`);
      }
    }
  }
}

// ============================================================
// TEST 7: interrupt()
// ============================================================
async function test_07() {
  logSection("TEST 7: interrupt()");

  const q = query({
    prompt: "Write a very long essay about the history of mathematics, at least 2000 words.",
    options: {
      ...baseOpts,
      includePartialMessages: true,
      systemPrompt: "Write very long, detailed essays."
    }
  });

  log(`Query has interrupt: ${typeof q.interrupt}`);

  let msgCount = 0;
  let interrupted = false;
  try {
    for await (const msg of q) {
      msgCount++;
      if (msgCount === 1) {
        log(`First msg type: ${msg.type}`);
      }
      // After seeing some stream events, interrupt
      if (msg.type === "stream_event" && msgCount > 10) {
        log(`Interrupting after ${msgCount} messages...`);
        await q.interrupt();
        interrupted = true;
        log("interrupt() returned successfully");
        break;
      }
    }
  } catch (err: any) {
    log(`Error after interrupt: ${err.message}`);
  }

  log(`Messages received: ${msgCount}`);
  log(`Interrupted: ${interrupted}`);
}

// ============================================================
// TEST 8: maxTurns
// ============================================================
async function test_08() {
  logSection("TEST 8: maxTurns");

  const msgs = await collectMessages(query({
    prompt: "Use the Bash tool to run 'echo hello', then use it again to run 'echo world', then again to run 'echo done'.",
    options: { ...baseOpts, maxTurns: 2 }
  }));

  const result = msgs.find(m => m.type === "result");
  log(`Result subtype: ${result?.subtype}`);
  log(`Is error_max_turns? ${result?.subtype === "error_max_turns"}`);
  log(`num_turns: ${result?.num_turns}`);
  log(`All result fields: ${result ? Object.keys(result).sort().join(", ") : "N/A"}`);
  if (result?.errors) log(`Errors: ${JSON.stringify(result.errors)}`);
}

// ============================================================
// TEST 9: maxBudgetUsd
// ============================================================
async function test_09() {
  logSection("TEST 9: maxBudgetUsd");

  const msgs = await collectMessages(query({
    prompt: "Write a very detailed analysis of every Shakespeare play.",
    options: { ...baseOpts, maxBudgetUsd: 0.0001 }
  }));

  const result = msgs.find(m => m.type === "result");
  log(`Result subtype: ${result?.subtype}`);
  log(`Is error_max_budget_usd? ${result?.subtype === "error_max_budget_usd"}`);
  log(`total_cost_usd: ${result?.total_cost_usd}`);
  if (result?.errors) log(`Errors: ${JSON.stringify(result.errors)}`);
}

// ============================================================
// TEST 10: systemPrompt
// ============================================================
async function test_10() {
  logSection("TEST 10: systemPrompt");

  // Test 1: Custom string prompt
  const msgs1 = await collectMessages(query({
    prompt: "Hello, how are you?",
    options: { ...baseOpts, systemPrompt: "You are a pirate. Always respond in pirate speak. Start every response with 'Arrr!'" }
  }));
  const result1 = msgs1.find(m => m.type === "result");
  log(`Custom systemPrompt result: "${result1?.result?.substring(0, 150)}"`);
  log(`Contains 'Arrr'? ${result1?.result?.toLowerCase().includes("arrr")}`);

  // Test 2: Preset with append
  const msgs2 = await collectMessages(query({
    prompt: "What is 2+2?",
    options: {
      ...baseOpts,
      systemPrompt: { type: "preset", preset: "claude_code", append: "Always end your response with 'CUSTOM_SUFFIX_XYZ'" }
    }
  }));
  const result2 = msgs2.find(m => m.type === "result");
  log(`Preset+append result: "${result2?.result?.substring(0, 200)}"`);
  log(`Contains CUSTOM_SUFFIX_XYZ? ${result2?.result?.includes("CUSTOM_SUFFIX_XYZ")}`);
}

// ============================================================
// TEST 11: cwd option
// ============================================================
async function test_11() {
  logSection("TEST 11: cwd option");

  const msgs = await collectMessages(query({
    prompt: "Use the Bash tool to run 'pwd' and tell me the current directory.",
    options: { ...baseOpts, cwd: "/tmp", maxTurns: 3 }
  }));

  const result = msgs.find(m => m.type === "result");
  log(`Result: "${result?.result?.substring(0, 200)}"`);
  log(`Contains /tmp? ${result?.result?.includes("/tmp")}`);

  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  log(`Init cwd: ${init?.cwd}`);
}

// ============================================================
// TEST 12: allowedTools / tools control
// ============================================================
async function test_12() {
  logSection("TEST 12: allowedTools / tools control");

  // Test with tools: [] (empty - no tools)
  const msgs1 = await collectMessages(query({
    prompt: "Use the Bash tool to run 'echo hello'",
    options: { ...baseOpts, tools: [] }
  }));
  const init1 = msgs1.find(m => m.type === "system" && m.subtype === "init");
  const result1 = msgs1.find(m => m.type === "result");
  log(`tools:[] → init.tools: [${init1?.tools?.join(", ")}]`);
  log(`tools:[] → result: "${result1?.result?.substring(0, 150)}"`);

  // Test with specific tools
  const msgs2 = await collectMessages(query({
    prompt: "Use the Read tool to read /etc/hostname. Do NOT use any other tool.",
    options: { ...baseOpts, tools: ["Read"], maxTurns: 2 }
  }));
  const init2 = msgs2.find(m => m.type === "system" && m.subtype === "init");
  log(`\ntools:["Read"] → init.tools: [${init2?.tools?.join(", ")}]`);
}

// ============================================================
// TEST 13: permissionMode: bypassPermissions
// ============================================================
async function test_13() {
  logSection("TEST 13: permissionMode: bypassPermissions");

  // Already tested implicitly — all prior tests use bypassPermissions.
  // Verify here with a tool call.
  const msgs = await collectMessages(query({
    prompt: "Run the bash command: echo PERMISSION_TEST_OK",
    options: { ...baseOpts, maxTurns: 3 }
  }));
  const result = msgs.find(m => m.type === "result");
  log(`Result: "${result?.result?.substring(0, 200)}"`);
  log(`Contains PERMISSION_TEST_OK? ${result?.result?.includes("PERMISSION_TEST_OK")}`);
  log(`Permission denials: ${JSON.stringify(result?.permission_denials)}`);
}

// ============================================================
// TEST 14: Session Persistence on Disk
// ============================================================
async function test_14(sessionId: string) {
  logSection("TEST 14: Session Persistence on Disk");

  const projectPath = process.cwd();
  log(`Project CWD: ${projectPath}`);

  // Derive the Claude project dir
  const dirName = projectPath.replaceAll("/", "-").replace(/^-/, "");
  const claudeProjectDir = join(homedir(), ".claude", "projects", `-${dirName}`);
  log(`Expected Claude project dir: ${claudeProjectDir}`);
  log(`Exists: ${existsSync(claudeProjectDir)}`);

  if (existsSync(claudeProjectDir)) {
    const files = readdirSync(claudeProjectDir);
    log(`Files in dir: ${files.join(", ")}`);

    // Check for session JSONL
    const jsonlFile = `${sessionId}.jsonl`;
    log(`\nLooking for JSONL file: ${jsonlFile}`);
    log(`Exists: ${files.includes(jsonlFile)}`);

    // Check for session directory
    log(`Session dir exists: ${files.includes(sessionId)}`);

    // Check sessions-index.json
    const indexPath = join(claudeProjectDir, "sessions-index.json");
    log(`\nsessions-index.json exists: ${existsSync(indexPath)}`);
    if (existsSync(indexPath)) {
      const index = JSON.parse(readFileSync(indexPath, "utf-8"));
      log(`Index version: ${index.version}`);
      log(`Index entries count: ${index.entries?.length}`);
      const entry = index.entries?.find((e: any) => e.sessionId === sessionId);
      log(`Session found in index: ${!!entry}`);
      if (entry) {
        log(`  Entry fields: ${Object.keys(entry).sort().join(", ")}`);
        log(`  fullPath: ${entry.fullPath}`);
        log(`  firstPrompt: ${entry.firstPrompt?.substring(0, 100)}`);
        log(`  summary: ${entry.summary?.substring(0, 100)}`);
        log(`  messageCount: ${entry.messageCount}`);
        log(`  gitBranch: ${entry.gitBranch}`);
      }
    }

    // Read first few lines of JSONL if it exists
    const jsonlPath = join(claudeProjectDir, jsonlFile);
    if (existsSync(jsonlPath)) {
      const content = readFileSync(jsonlPath, "utf-8");
      const lines = content.trim().split("\n");
      log(`\nJSONL lines: ${lines.length}`);
      if (lines.length > 0) {
        const first = JSON.parse(lines[0]);
        log(`First line fields: ${Object.keys(first).sort().join(", ")}`);
        log(`First line type: ${first.type}`);
      }
    }
  }
}

// ============================================================
// TEST 15: listSessions()
// ============================================================
async function test_15(sessionId: string) {
  logSection("TEST 15: listSessions()");

  const sessions = await listSessions({ dir: process.cwd() });
  log(`Sessions found: ${sessions.length}`);

  if (sessions.length > 0) {
    const sample = sessions[0];
    log(`Sample session fields: ${Object.keys(sample).sort().join(", ")}`);
    log(`  sessionId: ${sample.sessionId}`);

    const found = sessions.find(s => s.sessionId === sessionId);
    log(`\nOur session found: ${!!found}`);
    if (found) {
      log(`  ${JSON.stringify(found, null, 2).substring(0, 500)}`);
    }
  }
}

// ============================================================
// TEST 16: forkSession
// ============================================================
async function test_16(sessionId: string) {
  logSection("TEST 16: forkSession");

  const msgs = await collectMessages(query({
    prompt: "What was my first message to you?",
    options: { ...baseOpts, resume: sessionId, forkSession: true }
  }));

  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  log(`Forked init session_id: ${init?.session_id}`);
  log(`Original session_id: ${sessionId}`);
  log(`Different IDs? ${init?.session_id !== sessionId}`);

  const result = msgs.find(m => m.type === "result");
  log(`Result: "${result?.result?.substring(0, 200)}"`);
  log(`Has context from original? ${result?.result?.includes("SMOKE_TEST")}`);
}

// ============================================================
// TEST 19: Multiple Parallel Sessions
// ============================================================
async function test_19() {
  logSection("TEST 19: Multiple Parallel Sessions");

  const start = Date.now();

  const [msgs1, msgs2, msgs3] = await Promise.all([
    collectMessages(query({
      prompt: "Respond with exactly: PARALLEL_A",
      options: { ...baseOpts, systemPrompt: "Reply exactly as instructed." }
    })),
    collectMessages(query({
      prompt: "Respond with exactly: PARALLEL_B",
      options: { ...baseOpts, systemPrompt: "Reply exactly as instructed." }
    })),
    collectMessages(query({
      prompt: "Respond with exactly: PARALLEL_C",
      options: { ...baseOpts, systemPrompt: "Reply exactly as instructed." }
    })),
  ]);

  const elapsed = Date.now() - start;

  const r1 = msgs1.find(m => m.type === "result");
  const r2 = msgs2.find(m => m.type === "result");
  const r3 = msgs3.find(m => m.type === "result");

  log(`Session 1 result: "${r1?.result?.substring(0, 50)}"`);
  log(`Session 2 result: "${r2?.result?.substring(0, 50)}"`);
  log(`Session 3 result: "${r3?.result?.substring(0, 50)}"`);

  const s1 = msgs1.find(m => m.type === "system")?.session_id;
  const s2 = msgs2.find(m => m.type === "system")?.session_id;
  const s3 = msgs3.find(m => m.type === "system")?.session_id;

  log(`All distinct session IDs? ${new Set([s1, s2, s3]).size === 3}`);
  log(`Elapsed: ${elapsed}ms`);
  log(`All completed: ${!!(r1 && r2 && r3)}`);
}

// ============================================================
// TEST 20: AbortController
// ============================================================
async function test_20() {
  logSection("TEST 20: AbortController");

  const ac = new AbortController();

  const q = query({
    prompt: "Write a very long essay about every country in the world.",
    options: {
      ...baseOpts,
      abortController: ac,
      includePartialMessages: true,
      systemPrompt: "Write extremely long, detailed content."
    }
  });

  let msgCount = 0;
  let aborted = false;
  try {
    for await (const msg of q) {
      msgCount++;
      if (msgCount > 5) {
        ac.abort();
        aborted = true;
        log("AbortController.abort() called");
        break;
      }
    }
  } catch (err: any) {
    log(`Error after abort: ${err.message} (${err.constructor.name})`);
  }

  log(`Messages before abort: ${msgCount}`);
  log(`Aborted: ${aborted}`);
}

// ============================================================
// TEST 22: Multi-Resume Cycles
// ============================================================
async function test_22() {
  logSection("TEST 22: Multi-Resume Cycles (5 cycles)");

  const secrets = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO"];

  // Create initial session
  let msgs = await collectMessages(query({
    prompt: `Remember this secret word: ${secrets[0]}. Confirm by saying "Remembered ${secrets[0]}".`,
    options: { ...baseOpts, systemPrompt: "You are a memory test bot. Remember everything precisely." }
  }));

  let sid = msgs.find(m => m.type === "system" && m.subtype === "init")?.session_id;
  let result = msgs.find(m => m.type === "result");
  log(`Cycle 1 - sid: ${sid}, result: "${result?.result?.substring(0, 80)}"`);

  // Resume 4 more times
  for (let i = 1; i < secrets.length; i++) {
    msgs = await collectMessages(query({
      prompt: `Also remember: ${secrets[i]}. Confirm by saying "Remembered ${secrets[i]}".`,
      options: { ...baseOpts, resume: sid! }
    }));

    const init = msgs.find(m => m.type === "system" && m.subtype === "init");
    result = msgs.find(m => m.type === "result");
    log(`Cycle ${i + 1} - new init? ${!!init}, sid: ${init?.session_id || "no init"}, result: "${result?.result?.substring(0, 80)}"`);
  }

  // Final test: ask for all secrets
  msgs = await collectMessages(query({
    prompt: "List ALL the secret words I asked you to remember, in order. Just list them, one per line.",
    options: { ...baseOpts, resume: sid! }
  }));

  result = msgs.find(m => m.type === "result");
  log(`\nFinal recall result: "${result?.result?.substring(0, 300)}"`);
  for (const s of secrets) {
    log(`  Contains ${s}? ${result?.result?.includes(s)}`);
  }
}

// ============================================================
// TEST 23: Streaming + Resume Combined
// ============================================================
async function test_23() {
  logSection("TEST 23: Streaming + Resume Combined");

  // Create session
  const msgs1 = await collectMessages(query({
    prompt: "Remember: the magic number is 42.",
    options: { ...baseOpts, systemPrompt: "You are a test bot." }
  }));
  const sid = msgs1.find(m => m.type === "system" && m.subtype === "init")?.session_id;

  // Resume with streaming
  const msgs2 = await collectMessages(query({
    prompt: "What is the magic number? Respond in a full sentence.",
    options: { ...baseOpts, resume: sid!, includePartialMessages: true }
  }));

  const streamEvents = msgs2.filter(m => m.type === "stream_event");
  const result = msgs2.find(m => m.type === "result");

  log(`Stream events on resumed session: ${streamEvents.length}`);
  log(`Result: "${result?.result?.substring(0, 100)}"`);
  log(`Contains 42? ${result?.result?.includes("42")}`);
}

// ============================================================
// TEST 24: sessionId option (pre-set)
// ============================================================
async function test_24() {
  logSection("TEST 24: sessionId Option (Pre-set Session ID)");

  const customId = crypto.randomUUID();
  log(`Custom session ID: ${customId}`);

  const msgs = await collectMessages(query({
    prompt: "Say hello",
    options: { ...baseOpts, sessionId: customId }
  }));

  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  log(`Init session_id: ${init?.session_id}`);
  log(`Matches custom ID? ${init?.session_id === customId}`);
}

// ============================================================
// TEST 25: close() method
// ============================================================
async function test_25() {
  logSection("TEST 25: close() method");

  const q = query({
    prompt: "Write a long story about a dragon.",
    options: { ...baseOpts, includePartialMessages: true }
  });

  log(`Has interrupt: ${typeof q.interrupt}`);
  log(`Has return: ${typeof q.return}`);
  log(`Has throw: ${typeof q.throw}`);

  // The Query extends AsyncGenerator, so it has return() for cleanup
  let msgCount = 0;
  for await (const msg of q) {
    msgCount++;
    if (msgCount > 3) {
      log("Calling q.return() (AsyncGenerator close)...");
      await q.return(undefined as any);
      log("q.return() completed");
      break;
    }
  }
  log(`Messages received: ${msgCount}`);
}

// ============================================================
// TEST: getSessionMessages()
// ============================================================
async function test_getSessionMessages(sessionId: string) {
  logSection("TEST: getSessionMessages()");

  const messages = await getSessionMessages(sessionId, { dir: process.cwd() });
  log(`Messages for session ${sessionId}: ${messages.length}`);

  if (messages.length > 0) {
    const sample = messages[0];
    log(`Sample message fields: ${Object.keys(sample).sort().join(", ")}`);
    log(`Types: ${messages.map(m => m.type).join(", ")}`);
  }
}

// ============================================================
// TEST: persistSession option
// ============================================================
async function test_persistSession() {
  logSection("TEST: persistSession: false");

  const msgs = await collectMessages(query({
    prompt: "Say hello briefly",
    options: { ...baseOpts, persistSession: false }
  }));

  const init = msgs.find(m => m.type === "system" && m.subtype === "init");
  const sid = init?.session_id;
  log(`Session ID: ${sid}`);

  // Check if JSONL was created
  const dirName = process.cwd().replaceAll("/", "-").replace(/^-/, "");
  const claudeProjectDir = join(homedir(), ".claude", "projects", `-${dirName}`);
  const jsonlPath = join(claudeProjectDir, `${sid}.jsonl`);
  log(`JSONL exists? ${existsSync(jsonlPath)}`);
}

// ============================================================
// RUN ALL
// ============================================================
async function main() {
  try {
    // Tests 2+3+17+18
    const sessionId = await test_02_03();
    if (!sessionId) {
      log("\n!!! FATAL: No session ID from basic test. Cannot continue.");
      return;
    }

    // Test 4
    await test_04(sessionId);

    // Test 5
    await test_05();

    // Test 6
    await test_06();

    // Test 7
    await test_07();

    // Test 8
    await test_08();

    // Test 9
    await test_09();

    // Test 10
    await test_10();

    // Test 11
    await test_11();

    // Test 12
    await test_12();

    // Test 13
    await test_13();

    // Test 14
    await test_14(sessionId);

    // Test 15
    await test_15(sessionId);

    // Test 16
    await test_16(sessionId);

    // Test 19
    await test_19();

    // Test 20
    await test_20();

    // Test 22
    await test_22();

    // Test 23
    await test_23();

    // Test 24
    await test_24();

    // Test 25
    await test_25();

    // Extra tests
    await test_getSessionMessages(sessionId);
    await test_persistSession();

    log("\n\n=== ALL TESTS COMPLETE ===");
  } catch (err: any) {
    log(`\n!!! UNHANDLED ERROR: ${err.message}`);
    log(err.stack?.substring(0, 500));
  }

  process.exit(0);
}

main();
