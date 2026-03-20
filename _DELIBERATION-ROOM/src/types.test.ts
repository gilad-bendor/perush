import { describe, test, expect } from "bun:test";
import {
  createFormattedTime,
  parseFormattedTime,
  MeetingModeSchema,
  AgentDefinitionSchema,
  ConversationMessageSchema,
  PrivateAssessmentSchema,
  ManagerDecisionSchema,
  CycleRecordSchema,
  MeetingSchema,
  MeetingSummarySchema,
  ServerMessageSchema,
  ClientMessageSchema, MeetingSummary, ServerMessage, ClientMessage, Meeting,
} from "./types";

// ---------------------------------------------------------------------------
// FormattedTime
// ---------------------------------------------------------------------------

describe("FormattedTime", () => {
  test("createFormattedTime produces correct format", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0); // Feb 27 2026 14:30:00
    const ft = createFormattedTime(date);
    expect(ft).toMatch(/^2026-02-27 14:30:00 \(\d+\)$/);
  });

  test("createFormattedTime with no argument uses current time", () => {
    const before = Date.now();
    const ft = createFormattedTime();
    const after = Date.now();
    const parsed = parseFormattedTime(ft);
    expect(parsed.getTime()).toBeGreaterThanOrEqual(before);
    expect(parsed.getTime()).toBeLessThanOrEqual(after);
  });

  test("parseFormattedTime round-trips correctly", () => {
    const original = new Date(2026, 1, 27, 14, 30, 45);
    const ft = createFormattedTime(original);
    const parsed = parseFormattedTime(ft);
    expect(parsed.getTime()).toBe(original.getTime());
  });

  test("parseFormattedTime throws on invalid input", () => {
    expect(() => parseFormattedTime("not a time")).toThrow("Invalid FormattedTime");
    expect(() => parseFormattedTime("2026-02-27 14:30:00")).toThrow("Invalid FormattedTime");
  });

  test("createFormattedTime pads single digits", () => {
    const date = new Date(2026, 0, 5, 3, 7, 9); // Jan 5 2026 03:07:09
    const ft = createFormattedTime(date);
    expect(ft).toMatch(/^2026-01-05 03:07:09/);
  });
});

// ---------------------------------------------------------------------------
// MeetingMode
// ---------------------------------------------------------------------------

describe("MeetingModeSchema", () => {
  test("accepts valid mode", () => {
    expect(MeetingModeSchema.parse("Perush-Development")).toBe("Perush-Development");
  });

  test("rejects invalid mode", () => {
    expect(() => MeetingModeSchema.parse("InvalidMode")).toThrow();
  });
});

// ---------------------------------------------------------------------------
// AgentDefinition
// ---------------------------------------------------------------------------

describe("AgentDefinitionSchema", () => {
  const valid = {
    id: "milo",
    englishName: "Milo",
    hebrewName: "מיילו",
    roleTitle: "המילונאי",
    managerIntro: "The Dictionary Purist.",
    managerTip: "Bring in when words need checking.",
    filePath: "/path/to/milo.md",
  };

  test("accepts valid agent definition", () => {
    expect(AgentDefinitionSchema.parse(valid)).toEqual(valid);
  });

  test("rejects missing required fields", () => {
    const { id, ...missing } = valid;
    expect(() => AgentDefinitionSchema.parse(missing)).toThrow();
  });
});

// ---------------------------------------------------------------------------
// ConversationMessage
// ---------------------------------------------------------------------------

describe("ConversationMessageSchema", () => {
  test("accepts valid message", () => {
    const msg = {
      speaker: "milo",
      content: "הנה הערה חשובה",
      timestamp: createFormattedTime(),
    };
    expect(ConversationMessageSchema.parse(msg)).toEqual(msg);
  });

  test("rejects missing content", () => {
    expect(() => ConversationMessageSchema.parse({
      speaker: "milo",
      timestamp: createFormattedTime(),
    })).toThrow();
  });
});

// ---------------------------------------------------------------------------
// PrivateAssessment
// ---------------------------------------------------------------------------

describe("PrivateAssessmentSchema", () => {
  test("accepts valid assessment", () => {
    const assessment = {
      agent: "milo",
      selfImportance: 7,
      humanImportance: 4,
      summary: "יש כאן בעיה מילונית",
    };
    expect(PrivateAssessmentSchema.parse(assessment)).toEqual(assessment);
  });

  test("rejects selfImportance out of range", () => {
    expect(() => PrivateAssessmentSchema.parse({
      agent: "milo",
      selfImportance: 0,
      humanImportance: 5,
      summary: "test",
    })).toThrow();

    expect(() => PrivateAssessmentSchema.parse({
      agent: "milo",
      selfImportance: 11,
      humanImportance: 5,
      summary: "test",
    })).toThrow();
  });

  test("rejects non-integer importance", () => {
    expect(() => PrivateAssessmentSchema.parse({
      agent: "milo",
      selfImportance: 5.5,
      humanImportance: 5,
      summary: "test",
    })).toThrow();
  });

  test("accepts boundary values 1 and 10", () => {
    const low = PrivateAssessmentSchema.parse({
      agent: "milo", selfImportance: 1, humanImportance: 1, summary: "low",
    });
    expect(low.selfImportance).toBe(1);

    const high = PrivateAssessmentSchema.parse({
      agent: "milo", selfImportance: 10, humanImportance: 10, summary: "high",
    });
    expect(high.selfImportance).toBe(10);
  });
});

// ---------------------------------------------------------------------------
// ManagerDecision
// ---------------------------------------------------------------------------

describe("ManagerDecisionSchema", () => {
  test("accepts valid decision", () => {
    const decision = { nextSpeaker: "archi", vibe: "הדיון זורם" };
    expect(ManagerDecisionSchema.parse(decision)).toEqual(decision);
  });

  test("accepts human as next speaker", () => {
    const decision = { nextSpeaker: "human", vibe: "הגיע הזמן למנחה" };
    expect(ManagerDecisionSchema.parse(decision)).toEqual(decision);
  });
});

// ---------------------------------------------------------------------------
// CycleRecord
// ---------------------------------------------------------------------------

describe("CycleRecordSchema", () => {
  test("accepts valid cycle record", () => {
    const cycle = {
      cycleNumber: 1,
      speech: {
        speaker: "milo",
        content: "הערה חשובה",
        timestamp: createFormattedTime(),
      },
      assessments: {
        archi: {
          agent: "archi",
          selfImportance: 5,
          humanImportance: 3,
          summary: "נקודה מעניינת",
        },
      },
      managerDecision: {
        nextSpeaker: "milo",
        vibe: "דיון פורה",
      },
    };
    expect(CycleRecordSchema.parse(cycle)).toEqual(cycle);
  });

  test("rejects non-positive cycle number", () => {
    expect(() => CycleRecordSchema.parse({
      cycleNumber: 0,
      speech: { speaker: "milo", content: "x", timestamp: createFormattedTime() },
      assessments: {},
      managerDecision: { nextSpeaker: "archi", vibe: "ok" },
    })).toThrow();
  });
});

// ---------------------------------------------------------------------------
// Meeting
// ---------------------------------------------------------------------------

describe("MeetingSchema", () => {
  const validMeeting: Meeting = {
    meetingId: "2026-02-01--10-41--test-meeting-001",
    mode: "Perush-Development" as const,
    title: "גן עדן",
    openingPrompt: "בואו נדון בבראשית ב:ד",
    participants: ["milo", "archi", "kashia"],
    cycles: [],
    startedAt: createFormattedTime(),
    sessionIds: { milo: "sess-1", archi: "sess-2", kashia: "sess-3", manager: "sess-4" },
  };

  test("accepts valid meeting", () => {
    expect(MeetingSchema.parse(validMeeting)).toEqual(validMeeting);
  });

  test("accepts meeting with optional fields", () => {
    const withOptional = {
      ...validMeeting,
      lastEngagedAt: createFormattedTime(),
      totalCostEstimate: 3.50,
    };
    expect(MeetingSchema.parse(withOptional)).toEqual(withOptional);
  });

  test("rejects empty participants array", () => {
    expect(() => MeetingSchema.parse({
      ...validMeeting,
      participants: [],
    })).toThrow();
  });

  test("rejects missing required fields", () => {
    const { title, ...missing } = validMeeting;
    expect(() => MeetingSchema.parse(missing)).toThrow();
  });
});

// ---------------------------------------------------------------------------
// MeetingSummary
// ---------------------------------------------------------------------------

describe("MeetingSummarySchema", () => {
  test("accepts valid summary", () => {
    const summary: MeetingSummary = {
      meetingId: "2026-02-01--10-41--test-001",
      branch: "sessions/2026-02-01--10-41--test-001",
      lastActivity: "2026-02-27",
      lastCommitMsg: "Cycle 5: milo",
    };
    expect(MeetingSummarySchema.parse(summary)).toEqual(summary);
  });

  test("accepts optional fields", () => {
    const summary: MeetingSummary = {
      meetingId: "2026-02-01--10-41--test-001",
      branch: "sessions/2026-02-01--10-41--test-001",
      lastActivity: "2026-02-27",
      lastCommitMsg: "Cycle 5: milo",
      title: "גן עדן",
      cycleCount: 5,
      participants: ["milo", "archi"],
    };
    expect(MeetingSummarySchema.parse(summary)).toEqual(summary);
  });
});

// ---------------------------------------------------------------------------
// Server → Client messages
// ---------------------------------------------------------------------------

describe("ServerMessageSchema", () => {
  test("accepts speech message", () => {
    const msg: ServerMessage = { type: "speech" as const, messageId: "S1", speaker: "milo", content: "הערה", timestamp: createFormattedTime() };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts speech-chunk message", () => {
    const msg: ServerMessage = { type: "speech-chunk" as const, messageId: "S2", speaker: "milo", delta: "חלק" };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts assessment message", () => {
    const msg: ServerMessage = {
      type: "assessment" as const,
      messageId: "S3",
      agent: "milo",
      selfImportance: 7,
      humanImportance: 4,
      summary: "test",
    };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts vibe message", () => {
    const msg: ServerMessage = { type: "vibe" as const, messageId: "S4", vibe: "הדיון זורם", nextSpeaker: "archi" };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts phase message", () => {
    const msg: ServerMessage = { type: "phase" as const, messageId: "S5", phase: "assessing" as const };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts phase message with activeSpeaker", () => {
    const msg: ServerMessage = { type: "phase" as const, messageId: "S6", phase: "speaking" as const, activeSpeaker: "milo" };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("rejects invalid phase value", () => {
    expect(() => ServerMessageSchema.parse({
      type: "phase", messageId: "S7", phase: "invalid-phase",
    })).toThrow();
  });

  test("accepts error message", () => {
    const msg: ServerMessage = { type: "error" as const, messageId: "S8", message: "something went wrong" };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts rollback-progress message", () => {
    const msg: ServerMessage = { type: "rollback-progress" as const, messageId: "S9", step: "git-reset" as const, detail: "resetting..." };
    expect(ServerMessageSchema.parse(msg)).toEqual(msg);
  });

  test("rejects unknown message type", () => {
    expect(() => ServerMessageSchema.parse({ type: "unknown", messageId: "S0" })).toThrow();
  });
});

// ---------------------------------------------------------------------------
// Client → Server messages
// ---------------------------------------------------------------------------

describe("ClientMessageSchema", () => {
  test("accepts human-speech message", () => {
    const msg: ClientMessage = { type: "human-speech" as const, messageId: "C1", content: "הנה הערתי" };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts command message", () => {
    const msg: ClientMessage = { type: "command" as const, messageId: "C2", command: "/end" };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts start-meeting message", () => {
    const msg: ClientMessage = {
      type: "start-meeting" as const,
      messageId: "C3",
      title: "גן עדן",
      participants: ["milo", "archi"],
    };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("rejects start-meeting with empty title", () => {
    expect(() => ClientMessageSchema.parse({
      type: "start-meeting",
      messageId: "C4",
      title: "",
      participants: ["milo"],
    })).toThrow();
  });

  test("rejects start-meeting with empty participants", () => {
    expect(() => ClientMessageSchema.parse({
      type: "start-meeting",
      messageId: "C5",
      title: "test",
      participants: [],
    })).toThrow();
  });

  test("accepts attention message", () => {
    const msg: ClientMessage = { type: "attention" as const, messageId: "C6" };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts rollback message", () => {
    const msg: ClientMessage = { type: "rollback" as const, messageId: "C7", targetCycleNumber: 3 };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("accepts rollback to cycle 0 (opening prompt)", () => {
    const msg: ClientMessage = { type: "rollback" as const, messageId: "C8", targetCycleNumber: 0 };
    expect(ClientMessageSchema.parse(msg)).toEqual(msg);
  });

  test("rejects rollback with negative cycle", () => {
    expect(() => ClientMessageSchema.parse({
      type: "rollback",
      messageId: "C9",
      targetCycleNumber: -1,
    })).toThrow();
  });

  test("rejects unknown message type", () => {
    expect(() => ClientMessageSchema.parse({ type: "unknown", messageId: "C0" })).toThrow();
  });
});
