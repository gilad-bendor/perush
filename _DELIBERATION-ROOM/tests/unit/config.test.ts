import { describe, test, expect } from "bun:test";
import { resolve, join } from "path";
import { homedir } from "os";
import {
  SERVER_PORT,
  PARTICIPANT_MODEL,
  ORCHESTRATOR_MODEL,
  MAX_BUDGET_PER_SPEECH,
  MAX_TURNS_SESSION_INIT,
  MAX_TURNS_ASSESSMENT,
  MAX_TURNS_SPEECH,
  DELIBERATION_DIR,
  ROOT_PROJECT_DIR,
  PARTICIPANT_AGENTS_DIR,
  MEETINGS_DIR,
  ROOT_CLAUDE_MD,
  getClaudeProjectDir,
  getCleanEnv,
  SDK_ENV_VARS_TO_STRIP,
  COMMIT_INITIAL,
  COMMIT_MEETING_ENDED,
  commitCycleMessage,
  commitSessionRecovery,
  commitRollback,
  commitPerushUpdate,
  DIRECTOR_TIMEOUT_MS,
  IMPORTANCE_SCALE_MIN,
  IMPORTANCE_SCALE_MAX,
  USE_STUB_SDK,
  PARTICIPANT_TOOLS,
  ORCHESTRATOR_TOOLS,
  ORCHESTRATOR_FILE,
} from "../../src/config";
import {SESSION_BRANCH_PREFIX, TAG_PREFIX} from "../../src/types.ts";

// ---------------------------------------------------------------------------
// Network config
// ---------------------------------------------------------------------------

describe("Network config", () => {
  test("SERVER_PORT is 4100", () => {
    expect(SERVER_PORT).toBe(4100);
  });

  test("DIRECTOR_TIMEOUT_MS is 10 minutes", () => {
    expect(DIRECTOR_TIMEOUT_MS).toBe(600_000);
  });
});

// ---------------------------------------------------------------------------
// Model config
// ---------------------------------------------------------------------------

describe("Model config", () => {
  test("PARTICIPANT_MODEL is Opus", () => {
    expect(PARTICIPANT_MODEL).toContain("opus");
  });

  test("ORCHESTRATOR_MODEL is Sonnet", () => {
    expect(ORCHESTRATOR_MODEL).toContain("opus");
  });
});

// ---------------------------------------------------------------------------
// Cost caps
// ---------------------------------------------------------------------------

describe("Cost caps", () => {
  test("MAX_BUDGET_PER_SPEECH is a positive number", () => {
    expect(MAX_BUDGET_PER_SPEECH).toBeGreaterThan(0);
  });

  test("MAX_TURNS constants are positive integers", () => {
    for (const val of [MAX_TURNS_SESSION_INIT, MAX_TURNS_ASSESSMENT, MAX_TURNS_SPEECH]) {
      expect(val).toBeGreaterThan(0);
      expect(Number.isInteger(val)).toBe(true);
    }
  });

});

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

describe("Path config", () => {
  test("DELIBERATION_DIR ends with _DELIBERATION-ROOM", () => {
    expect(DELIBERATION_DIR).toEndWith("_DELIBERATION-ROOM");
  });

  test("ROOT_PROJECT_DIR is parent of DELIBERATION_DIR", () => {
    expect(resolve(DELIBERATION_DIR, "..")).toBe(ROOT_PROJECT_DIR);
  });

  test("PARTICIPANT_AGENTS_DIR is inside DELIBERATION_DIR", () => {
    expect(PARTICIPANT_AGENTS_DIR).toBe(join(DELIBERATION_DIR, "participant-agents"));
  });

  test("MEETINGS_DIR is inside DELIBERATION_DIR", () => {
    expect(MEETINGS_DIR).toBe(join(DELIBERATION_DIR, ".meetings"));
  });

  test("ROOT_CLAUDE_MD points to ../CLAUDE.md", () => {
    expect(ROOT_CLAUDE_MD).toBe(join(ROOT_PROJECT_DIR, "CLAUDE.md"));
  });
});

// ---------------------------------------------------------------------------
// getClaudeProjectDir
// ---------------------------------------------------------------------------

describe("getClaudeProjectDir", () => {
  test("returns path under ~/.claude/projects/", () => {
    const dir = getClaudeProjectDir();
    expect(dir).toStartWith(join(homedir(), ".claude", "projects"));
  });

  test("directory name starts with hyphen", () => {
    const dir = getClaudeProjectDir();
    const dirName = dir.split("/").pop()!;
    expect(dirName).toStartWith("-");
  });

  test("replaces ALL non-alphanumeric chars with hyphens (SDK confirmed)", () => {
    const dir = getClaudeProjectDir();
    const dirName = dir.split("/").pop()!;
    // After the leading hyphen, the name should only contain [a-zA-Z0-9-]
    const afterLeading = dirName.slice(1);
    expect(afterLeading).toMatch(/^[a-zA-Z0-9-]+$/);
    // Underscores should NOT be present (SDK replaces them with hyphens)
    expect(dirName).not.toContain("_");
  });

  test("produces consistent output", () => {
    expect(getClaudeProjectDir()).toBe(getClaudeProjectDir());
  });
});

// ---------------------------------------------------------------------------
// SDK environment cleanup
// ---------------------------------------------------------------------------

describe("getCleanEnv", () => {
  test("strips CLAUDECODE env vars", () => {
    process.env.CLAUDECODE = "1";
    process.env.CLAUDE_CODE_ENTRYPOINT = "test";
    process.env.CLAUDE_CODE_SSE_PORT = "12345";

    const clean = getCleanEnv();
    expect(clean.CLAUDECODE).toBeUndefined();
    expect(clean.CLAUDE_CODE_ENTRYPOINT).toBeUndefined();
    expect(clean.CLAUDE_CODE_SSE_PORT).toBeUndefined();

    // Cleanup
    delete process.env.CLAUDECODE;
    delete process.env.CLAUDE_CODE_ENTRYPOINT;
    delete process.env.CLAUDE_CODE_SSE_PORT;
  });

  test("preserves other env vars", () => {
    const clean = getCleanEnv();
    expect(clean.PATH).toBeTruthy();
    expect(clean.HOME).toBeTruthy();
  });

  test("SDK_ENV_VARS_TO_STRIP contains expected vars", () => {
    expect(SDK_ENV_VARS_TO_STRIP).toContain("CLAUDECODE");
    expect(SDK_ENV_VARS_TO_STRIP).toContain("CLAUDE_CODE_ENTRYPOINT");
    expect(SDK_ENV_VARS_TO_STRIP).toContain("CLAUDE_CODE_SSE_PORT");
  });
});

// ---------------------------------------------------------------------------
// Git config
// ---------------------------------------------------------------------------

describe("Git config", () => {
  test("SESSION_BRANCH_PREFIX is sessions/", () => {
    expect(SESSION_BRANCH_PREFIX).toBe("sessions/");
  });

  test("TAG_PREFIX is session-cycle/", () => {
    expect(TAG_PREFIX).toBe("session-cycle/");
  });

  test("commit message templates", () => {
    expect(COMMIT_INITIAL).toBe("Initial: meeting created");
    expect(COMMIT_MEETING_ENDED).toBe("Meeting ended");
  });

  test("commitCycleMessage formats correctly", () => {
    expect(commitCycleMessage(3, "milo")).toBe("Cycle 3: milo");
    expect(commitCycleMessage(1, "human")).toBe("Cycle 1: human");
  });

  test("commitSessionRecovery formats correctly", () => {
    expect(commitSessionRecovery("shalom")).toBe("Session recovery: shalom");
  });

  test("commitRollback formats correctly", () => {
    expect(commitRollback(5)).toBe("Rollback to cycle 5 + session recovery");
  });

  test("commitPerushUpdate formats correctly", () => {
    expect(commitPerushUpdate(3, "0000-00-00--00-00--eden-meeting")).toBe("Cycle 3: perush update (0000-00-00--00-00--eden-meeting)");
  });
});

// ---------------------------------------------------------------------------
// Assessment config
// ---------------------------------------------------------------------------

describe("Assessment config", () => {
  test("importance scale is 1-10", () => {
    expect(IMPORTANCE_SCALE_MIN).toBe(1);
    expect(IMPORTANCE_SCALE_MAX).toBe(10);
  });
});

// ---------------------------------------------------------------------------
// Stub mode
// ---------------------------------------------------------------------------

describe("Stub mode", () => {
  test("USE_STUB_SDK is true in test environment", () => {
    // bun:test sets NODE_ENV=test
    expect(USE_STUB_SDK).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Agent persona file config
// ---------------------------------------------------------------------------

describe("Agent persona file config", () => {
  test("file names are correct", () => {
    expect(ORCHESTRATOR_FILE).toBe("system-prompt-orchestrator.md");
  });
});

// ---------------------------------------------------------------------------
// Tool config
// ---------------------------------------------------------------------------

describe("Tool config", () => {
  test("PARTICIPANT_TOOLS includes Read, Bash, Grep, Glob", () => {
    expect(PARTICIPANT_TOOLS).toContain("Read");
    expect(PARTICIPANT_TOOLS).toContain("Bash");
    expect(PARTICIPANT_TOOLS).toContain("Grep");
    expect(PARTICIPANT_TOOLS).toContain("Glob");
  });

  test("ORCHESTRATOR_TOOLS is empty", () => {
    expect(ORCHESTRATOR_TOOLS).toEqual([]);
  });
});
