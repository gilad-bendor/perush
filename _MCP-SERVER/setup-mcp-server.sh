#!/bin/bash -eu

CLAUDE_CONFIG="$HOME/Library/Application Support/Claude/claude_desktop_config.json"

# The JSON file "$CLAUDE_CONFIG" should contain the path ".mcpServers.biblical-commentary" with the value $MCP_CONFIG_JSON
MCP_CONFIG_JSON='
  {
    "command": "node",
    "args": [
      "'"$( realpath "mcp-server.js" )"'"
    ],
    "cwd": "'"$( realpath "." )"'",
    "env": {
      "NODE_ENV": "production"
    }
  }
'
if [[ "$( jq -c '.mcpServers."biblical-commentary"' "$CLAUDE_CONFIG" 2>/dev/null || true )" == "$( jq -c . <<<"$MCP_CONFIG_JSON" )" ]] ; then
  echo "Info: Claude config for mcpServers-->biblical-commentary already exists at \"$CLAUDE_CONFIG\"" 1>&2
else
  mkdir -p "$( dirname "$CLAUDE_CONFIG" )"
  if ! jq . "$CLAUDE_CONFIG" >/dev/null 2>&1 ; then
    echo '{ "mcpServers": {} }' > "$CLAUDE_CONFIG"
  fi

  # Use jq to update the JSON file
  UPDATED_CONFIG_JSON="$(
    jq --argjson newConfig "$MCP_CONFIG_JSON" \
      '.mcpServers."biblical-commentary" = $newConfig' \
      "$CLAUDE_CONFIG"
  )"
  BACKUP_FILE="$CLAUDE_CONFIG.bak.$( date +%Y%m%d%H%M%S )"
  cp "$CLAUDE_CONFIG" "$BACKUP_FILE"
  echo "$UPDATED_CONFIG_JSON" > "$CLAUDE_CONFIG"
  echo "Info: Updated Claude config file at \"$CLAUDE_CONFIG\"  (backup at \"$BACKUP_FILE\")" 1>&2
fi
