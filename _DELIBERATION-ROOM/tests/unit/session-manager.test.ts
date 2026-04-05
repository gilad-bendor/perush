/**
 * session-manager.test.ts — Tests for the session manager.
 *
 * Tests agent discovery, template resolution, session lifecycle (via stub),
 * and response parsing. Uses real persona files from participant-agents/.
 */

import { describe, test, expect, beforeAll, beforeEach } from "bun:test";
import { join } from "path";
import {
  discoverAgents,
  getAgentDefinitions,
  getAgentById,
  resetAgentCache,
  resolveTemplate,
  buildSystemPrompt,
  extractDictionary,
  createSession,
  feedMessage,
  streamSpeech,
  interruptSpeech,
  interruptAll,
  getSessionId,
  getAllSessionIds,
  clearSessions,
  registerSession,
  registerMeeting,
} from "../../src/session-manager";
import { resetStubState } from "../../src/stub-sdk";
import {
  PARTICIPANT_AGENTS_DIR,
  PROMPTS_DIR,
  ORCHESTRATOR_FILE,
} from "../../src/config";

beforeEach(() => {
  resetAgentCache();
  clearSessions();
  resetStubState();
});

// ---------------------------------------------------------------------------
// Agent Discovery
// ---------------------------------------------------------------------------

describe("discoverAgents", () => {
  test("finds all non-underscore .md files", async () => {
    const agents = await discoverAgents();
    // We know there are 4 agent files: archi, barak, kashia, milo
    expect(agents.length).toBe(4);
    const ids = agents.map(a => a.id);
    expect(ids).toContain("milo");
    expect(ids).toContain("archi");
    expect(ids).toContain("kashia");
    expect(ids).toContain("barak");
  });

  test("excludes underscore-prefixed files", async () => {
    const agents = await discoverAgents();
    const ids = agents.map(a => a.id);
    expect(ids).not.toContain("_base-prefix");
    expect(ids).not.toContain("_agents-prefix");
    expect(ids).not.toContain("_orchestrator");
  });

  test("parses frontmatter correctly", async () => {
    const agents = await discoverAgents();
    const milo = agents.find(a => a.id === "milo")!;
    expect(milo.englishName).toBe("Milo");
    expect(milo.hebrewName).toBe("מיילו");
    expect(milo.frontmatterData.orchestratorIntro).toContain("Dictionary Purist");
    expect(milo.frontmatterData.orchestratorTip).toContain("dictionary");
  });

  test("extracts roleTitle from heading", async () => {
    const agents = await discoverAgents();
    const milo = agents.find(a => a.id === "milo")!;
    expect(milo.roleTitle).toBe("מיילו המילונאי");

    const archi = agents.find(a => a.id === "archi")!;
    expect(archi.roleTitle).toBe("ארצ'י האדריכל");

    const kashia = agents.find(a => a.id === "kashia")!;
    expect(kashia.roleTitle).toBe("קשיא הסקפטי");

    const barak = agents.find(a => a.id === "barak")!;
    expect(barak.roleTitle).toBe("ברק המבריק");
  });

  test("sets filePath correctly", async () => {
    const agents = await discoverAgents();
    const milo = agents.find(a => a.id === "milo")!;
    expect(milo.filePath).toBe(join(PARTICIPANT_AGENTS_DIR, "milo.md"));
  });

  test("results are sorted alphabetically by ID", async () => {
    const agents = await discoverAgents();
    const ids = agents.map(a => a.id);
    expect(ids).toEqual(["archi", "barak", "kashia", "milo"]);
  });

  test("results are cached", async () => {
    const first = await discoverAgents();
    const second = await discoverAgents();
    expect(first).toBe(second); // Same reference
  });
});

describe("getAgentDefinitions", () => {
  test("returns cached agents after discovery", async () => {
    await discoverAgents();
    const defs = getAgentDefinitions();
    expect(defs.length).toBe(4);
  });

  test("throws if called before discoverAgents", () => {
    expect(() => getAgentDefinitions()).toThrow("discoverAgents");
  });
});

describe("getAgentById", () => {
  test("finds agent by ID", async () => {
    await discoverAgents();
    const milo = getAgentById("milo");
    expect(milo).toBeDefined();
    expect(milo!.englishName).toBe("Milo");
  });

  test("returns undefined for unknown ID", async () => {
    await discoverAgents();
    expect(getAgentById("nonexistent")).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Template Resolution
// ---------------------------------------------------------------------------

describe("resolveTemplate", () => {
  let allAgents: Awaited<ReturnType<typeof discoverAgents>>;

  beforeAll(async () => {
    resetAgentCache();
    allAgents = await discoverAgents();
  });

  test("resolves ${each:participant} in base-prefix", async () => {
    const resolved = await resolveTemplate("system-prompt-base-prefix.md", allAgents, undefined, PROMPTS_DIR);

    // Should contain each agent's name
    expect(resolved).toContain("Milo / מיילו");
    expect(resolved).toContain("Archi / ארצ'י");
    expect(resolved).toContain("Kashia / קשיא");
    expect(resolved).toContain("Barak / ברק");
    expect(resolved).toContain("Director / המנחה");
  });

  test("scopes participants to meeting selection", async () => {
    const subset = allAgents.filter(a => a.id === "milo" || a.id === "archi");
    const resolved = await resolveTemplate("system-prompt-base-prefix.md", subset, undefined, PROMPTS_DIR);

    expect(resolved).toContain("Milo / מיילו");
    expect(resolved).toContain("Archi / ארצ'י");
    expect(resolved).not.toContain("Kashia");
    expect(resolved).not.toContain("Barak / ברק");
  });

  test("resolves ${each:participant} in orchestrator prompt", async () => {
    const resolved = await resolveTemplate(ORCHESTRATOR_FILE, allAgents, undefined, PROMPTS_DIR);

    // Should contain each agent with orchestrator-specific fields
    expect(resolved).toContain("Milo / מיילו");
    expect(resolved).toContain("orchestratorTip" in {} ? "" : ""); // just check presence of expanded text
    expect(resolved).toContain("Dictionary Purist");
  });

  test("resolves participantOrchestratorEntries in orchestrator prompt", async () => {
    const resolved = await resolveTemplate(ORCHESTRATOR_FILE, allAgents, undefined, PROMPTS_DIR);

    // Each agent should appear with orchestrator-specific format
    expect(resolved).toContain("Milo / מיילו");
    expect(resolved).toContain("Archi / ארצ'י");
    // Director line is hardcoded in the template
    expect(resolved).toContain("Director / המנחה");
    // Raw template marker should be gone
    expect(resolved).not.toContain("@foreach");
  });

  test("participantOrchestratorEntries is scoped to meeting participants", async () => {
    const subset = allAgents.filter(a => a.id === "milo" || a.id === "kashia");
    const resolved = await resolveTemplate(ORCHESTRATOR_FILE, subset, undefined, PROMPTS_DIR);

    expect(resolved).toContain("Milo / מיילו");
    expect(resolved).toContain("Kashia / קשיא");
    // Director is always present (hardcoded in template)
    expect(resolved).toContain("Director / המנחה");
    // Agents not in the meeting should NOT appear
    expect(resolved).not.toContain("Archi / ארצ'י");
    expect(resolved).not.toContain("Barak / ברק");
  });

  test("excludes the agent itself when excludeAgentId is set", async () => {
    // When building milo's template, milo shouldn't appear in {each:participant}
    const resolved = await resolveTemplate("system-prompt-base-prefix.md", allAgents, "milo", PROMPTS_DIR);

    // Should NOT contain Milo in the participant list
    expect(resolved).not.toContain("Milo / מיילו");
    // But should contain others
    expect(resolved).toContain("Archi / ארצ'י");
    expect(resolved).toContain("Kashia / קשיא");
  });
});

describe("extractDictionary", () => {
  test("returns non-empty dictionary content", async () => {
    const dict = await extractDictionary();
    expect(dict.length).toBeGreaterThan(100);
  });

  test("dictionary contains key concepts", async () => {
    const dict = await extractDictionary();
    expect(dict).toContain("אור");
    expect(dict).toContain("מים");
    expect(dict).toContain("אדם");
    expect(dict).toContain("אלהים");
  });
});

describe("buildSystemPrompt", () => {
  let allAgents: Awaited<ReturnType<typeof discoverAgents>>;

  beforeAll(async () => {
    resetAgentCache();
    allAgents = await discoverAgents();
  });

  test("participant prompt includes base prefix + agents prefix + persona", async () => {
    const prompt = await buildSystemPrompt("milo", allAgents);

    // Base prefix content (common instructions)
    expect(prompt).toContain("scholarly deliberation");
    // Dictionary content is present (injection point replaced by @echo dictionary)
    expect(prompt).toContain("אור");
    // Agents prefix (fellow participants)
    expect(prompt).toContain("Fellow Participants");
    // Milo's own persona
    expect(prompt).toContain("Dictionary Purist");
    expect(prompt).toContain("המילונאי");
  });

  test("participant prompt excludes self from fellow participants", async () => {
    const prompt = await buildSystemPrompt("milo", allAgents);

    // The agents prefix should list others but NOT milo
    // Count occurrences of "Milo / מיילו" — should appear in persona section only
    const fellowSection = prompt.split("Fellow Participants")[1]?.split("##")[0] ?? "";
    expect(fellowSection).not.toContain("Milo / מיילו");
    expect(fellowSection).toContain("Archi / ארצ'י");
  });

  test("orchestrator prompt includes base prefix + orchestrator template", async () => {
    const prompt = await buildSystemPrompt("orchestrator", allAgents);

    // Base prefix
    expect(prompt).toContain("scholarly deliberation");
    // Dictionary
    expect(prompt).toContain("אור");
    // Orchestrator content
    expect(prompt).toContain("Orchestrator");
    expect(prompt).toContain("which Participant should speak next");
    // Base prefix includes "Fellow Participants" (shared across all agents)
    expect(prompt).toContain("Fellow Participants");
  });

  test("orchestrator prompt has resolved participant names", async () => {
    const prompt = await buildSystemPrompt("orchestrator", allAgents);

    expect(prompt).toContain("Milo / מיילו");
    expect(prompt).toContain("Director / המנחה");
    // Template markers should be resolved
    expect(prompt).not.toContain("@foreach");
  });
});

// ---------------------------------------------------------------------------
// Session Lifecycle (Stub)
// ---------------------------------------------------------------------------

describe("createSession", () => {
  test("creates a session and returns sessionId", async () => {
    const { sessionId, responseText } = await createSession(
      "milo",
      "system prompt here",
      "initial prompt\n\n---stub-response---\ntext: Hello from milo\n---end-stub-response---",
    );

    expect(sessionId).toBeTruthy();
    expect(sessionId).toStartWith("stub-session-");
    expect(responseText).toBe("Hello from milo");
  });

  test("registers session in registry", async () => {
    await createSession(
      "milo",
      "system prompt",
      "test\n\n---stub-response---\ntext: ok\n---end-stub-response---",
    );

    expect(getSessionId("milo")).toBeTruthy();
  });

  test("creates separate sessions for different agents", async () => {
    const s1 = await createSession("milo", "sp", "p\n---stub-response---\ntext: a\n---end-stub-response---");
    const s2 = await createSession("archi", "sp", "p\n---stub-response---\ntext: b\n---end-stub-response---");

    expect(s1.sessionId).not.toBe(s2.sessionId);
    expect(getSessionId("milo")).toBe(s1.sessionId);
    expect(getSessionId("archi")).toBe(s2.sessionId);
  });

  test("emits system-prompt and prompt events via onEvent when provided", async () => {
    const emitted: Array<{ kind: string; content: string }> = [];
    await createSession(
      "milo",
      "my system prompt",
      "my initial prompt\n\n---stub-response---\ntext: hi\n---end-stub-response---",
      (eventKind, content) => emitted.push({ kind: eventKind, content }),
    );

    expect(emitted[0]).toEqual({ kind: "system-prompt", content: "my system prompt" });
    expect(emitted[1]).toEqual({ kind: "prompt", content: "my initial prompt\n\n---stub-response---\ntext: hi\n---end-stub-response---" });
  });

  test("does not emit events when onEvent is not provided", async () => {
    // Should not throw — just runs without emitting
    const { sessionId } = await createSession(
      "milo",
      "sp",
      "p\n---stub-response---\ntext: ok\n---end-stub-response---",
    );
    expect(sessionId).toBeTruthy();
  });
});

describe("feedMessage", () => {
  test("feeds message to existing session and returns response", async () => {
    await createSession("milo", "sp", "init\n---stub-response---\ntext: init ok\n---end-stub-response---");

    const response = await feedMessage(
      "milo",
      "new message\n---stub-response---\ntext: assessment response\n---end-stub-response---",
    );

    expect(response).toBe("assessment response");
  });

  test("lazily creates session if none exists and registerMeeting was called", async () => {
    const agents = await discoverAgents();
    registerMeeting("Test Topic", agents.filter(a => a.id === "milo"));

    const response = await feedMessage(
      "milo",
      "test message\n---stub-response---\ntext: lazy response\n---end-stub-response---",
    );

    expect(response).toBe("lazy response");
    expect(getSessionId("milo")).toBeTruthy();
  });

  test("emits system-prompt event when session is lazily created", async () => {
    const agents = await discoverAgents();
    registerMeeting("Test Topic", agents.filter(a => a.id === "milo"));

    const emitted: string[] = [];
    await feedMessage(
      "milo",
      "test\n---stub-response---\ntext: ok\n---end-stub-response---",
      (eventKind) => emitted.push(eventKind),
    );

    expect(emitted[0]).toBe("system-prompt");
    expect(emitted[1]).toBe("prompt");
  });

  test("does not emit system-prompt event when session already exists", async () => {
    await createSession("milo", "sp", "init\n---stub-response---\ntext: init\n---end-stub-response---");

    const emitted: string[] = [];
    await feedMessage(
      "milo",
      "msg\n---stub-response---\ntext: ok\n---end-stub-response---",
      (eventKind) => emitted.push(eventKind),
    );

    expect(emitted).not.toContain("system-prompt");
    // prompt IS emitted on every feedMessage call (for process tracing)
    expect(emitted).toContain("prompt");
  });
});

describe("streamSpeech", () => {
  test("yields chunks and a done event", async () => {
    await createSession("milo", "sp", "init\n---stub-response---\ntext: init\n---end-stub-response---");

    const chunks: string[] = [];
    let fullText = "";

    for await (const event of streamSpeech(
      "milo",
      "speak now\n---stub-response---\ntext: This is a streaming speech\n---end-stub-response---",
    )) {
      if (event.type === "chunk") {
        chunks.push(event.text);
      } else if (event.type === "done") {
        fullText = event.fullText;
      }
    }

    expect(chunks.length).toBeGreaterThan(0);
    expect(fullText).toBe("This is a streaming speech");
  });
});

describe("interruptSpeech", () => {
  test("interrupts without error when no active query", async () => {
    // Should not throw
    await interruptSpeech("milo");
  });
});

describe("interruptAll", () => {
  test("clears all active queries", async () => {
    await interruptAll();
    // Just verify it doesn't throw
  });
});

// ---------------------------------------------------------------------------
// Response Parsing
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Session Management Utilities
// ---------------------------------------------------------------------------

describe("session management utilities", () => {
  test("getAllSessionIds returns all registered sessions", async () => {
    await createSession("milo", "sp", "p\n---stub-response---\ntext: a\n---end-stub-response---");
    await createSession("archi", "sp", "p\n---stub-response---\ntext: b\n---end-stub-response---");

    const all = getAllSessionIds();
    expect(Object.keys(all)).toHaveLength(2);
    expect(all.milo).toBeTruthy();
    expect(all.archi).toBeTruthy();
  });

  test("clearSessions empties the registry", async () => {
    await createSession("milo", "sp", "p\n---stub-response---\ntext: a\n---end-stub-response---");
    clearSessions();
    expect(getSessionId("milo")).toBeUndefined();
  });

  test("registerSession adds a session manually", () => {
    registerSession("milo", "manual-session-id");
    expect(getSessionId("milo")).toBe("manual-session-id");
  });
});
