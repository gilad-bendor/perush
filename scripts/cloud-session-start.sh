#!/bin/bash
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0   # does nothing on your Mac
[ -x /opt/node26/bin/node ] || exit 0
echo 'export PATH="/opt/node26/bin:$PATH"' >> "$CLAUDE_ENV_FILE"

