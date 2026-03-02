import { query } from "@anthropic-ai/claude-agent-sdk";
import { writeFileSync, appendFileSync } from "fs";

const LOG = "/tmp/sdk-test-debug.log";
const log = (s: string) => { appendFileSync(LOG, s + "\n"); console.log(s); };

writeFileSync(LOG, "START\n");
log("Before query()");

const cleanEnv = { ...process.env };
delete cleanEnv.CLAUDECODE;
delete cleanEnv.CLAUDE_CODE_ENTRYPOINT;
delete cleanEnv.CLAUDE_CODE_SSE_PORT;

const q = query({
  prompt: "Say OK",
  options: {
    model: "claude-haiku-4-5",
    maxTurns: 1,
    permissionMode: "bypassPermissions",
    allowDangerouslySkipPermissions: true,
    env: cleanEnv,
    stderr: (data: string) => log("[STDERR] " + data.substring(0, 300)),
  }
});

log("After query()");

setTimeout(() => {
  log("TIMEOUT at 30s");
  process.exit(1);
}, 30000);

(async () => {
  try {
    for await (const msg of q) {
      log(`MSG: type=${msg.type}`);
    }
    log("DONE");
  } catch (e: any) {
    log("ERROR: " + e.message);
  }
  process.exit(0);
})();
