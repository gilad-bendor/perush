# Log File

> **Spin-out from `CLAUDE.md`.** Read when working on logging, reading server output, or debugging via log files.

All logging goes through `src/logs.ts` via `logInfo()`, `logWarn()`, `logError()`. Each call specifies a **log category** (e.g., `"sdk"`, `"orchestrator"`, `"server"`) that can be toggled on/off in `logsConfig`. Output goes to both the console and a log file.

- **Path**: `process.env.LOG_PATH`, or `./.logs/YYYY-MM-DD--HH-MM-SS-NNN.log` (timestamped at app startup).
- **Durability**: fsynced after every write.
- **Resilience**: if the file is deleted while the app is running, it is recreated on the next log.

## Log Line Structure

Every log entry starts with a single header line:

```
TTTTTTTT [LEVEL] [category] [context] label
```

| Field | Example | Meaning |
|-------|---------|---------|
| `TTTTTTTT` | `00003842` | Milliseconds since app startup, zero-padded to 8 digits |
| `[LEVEL]` | `[INFO]`, `[WARN]`, `[ERROR]` | Severity, padded to 7 chars |
| `[category]` | `[sdk]`, `[orchestrator]` | Log category from `logsConfig` |
| `[context]` | `[C12]`, `[N/A]` | The WebSocket `messageId` that triggered this operation (`C<n>` for client messages, `S<n>` for server messages), or `[N/A]` if outside a request context |
| `label` | `Assessment done for milo` | Free-text description |

When data is attached (the optional `data` parameter), it is rendered as YAML on subsequent lines, each **indented with 4 spaces**:

```
00003842 [INFO]  [orchestrator] [C5] Assessment done for milo
    selfImportance: 7
    humanImportance: 5
    summary: "..."
```

## Helper Scripts

| Script | What it does |
|--------|-------------|
| `./scripts/active-logs-path.sh` | Prints the path to the most recent log file in `.logs/` |
| `./scripts/active-logs-full.sh` | Prints the full content of the most recent log file |
| `./scripts/active-logs-full.sh -f` | Follows the log file in real time (`tail -f`) |
| `./scripts/active-logs-short.sh` | Prints only header lines (strips data lines), by filtering out lines starting with 4 spaces. Use this for a quick overview of what happened without the verbose YAML payloads |
| `./scripts/active-logs-short.sh -f` | Follows the log file in real time, header lines only |

## Debugging Tips

- `./scripts/active-logs-full.sh -f` — watch logs in real time while the server runs.
- `./scripts/active-logs-short.sh -f` — watch header lines only in real time (no YAML payloads).
- `./scripts/active-logs-short.sh` — quick scan of all events without data noise.
- `./scripts/active-logs-full.sh | grep '\[sdk\]'` — filter by category.
- `./scripts/active-logs-full.sh | grep '\[C12\]'` — trace all events triggered by a specific client message.
