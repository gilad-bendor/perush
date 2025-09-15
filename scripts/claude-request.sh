#!/bin/bash -eu
set -o pipefail
cd "$( dirname "$( dirname "$( realpath "$0" )" )" )" || exit 1

MAX_TOKENS=32000
THINKING_BUDGET=0    # set to 0 to prevent thinking
API_KEY="$( grep '^sk-' claude-api-key.txt )"

FILE="${1:-/dev/stdin}"

# Help.
if [[ ( "$FILE" == "-h" ) || ( "$FILE" == "--help" ) ]] ; then
  echo "
Usage:     $0 llm-session-file
Example llm-session-file:

    ######## MODEL: claude-sonnet-4-20250514
    ######## SYSTEM
    ...
    ######## USER
    ...
    ######## ASSISTANT
    ...
    ######## IGNORE
    ...
    ######## USER
    ...
  "
  exit 0
fi

if [[ ! -f "$FILE" ]] ; then
  echo "File not found: $FILE"
  exit 1
fi

# Extract the model name
MODEL="$( gawk '/^######## MODEL: / { print $3; exit; }' "$FILE" )"
if [[ -z "$MODEL" ]] ; then
  echo "Model not found. Expected a line like:     ######## MODEL: claude-sonnet-4-20250514"
  exit 1
fi

# Extract the SYSTEM prompt
SYSTEM="$(
  gawk '
    BEGIN {
      in_section = 0;
    }
    /^######## / && in_section {
      exit;
    }
    in_section {
      print "  " $0;
    }
    /^######## SYSTEM/ {
      in_section = 1;
    }
  ' "$FILE"
)"

YAML_PAYLOAD="
model: $MODEL
max_tokens: $MAX_TOKENS
$(
  if [[ -n "$SYSTEM" ]] ; then
    echo "system: |"
    echo "$SYSTEM"
  fi
)
$(
  if (( THINKING_BUDGET > 0 )) ; then
    echo "thinking:"
    echo "  type: enabled"
    echo "  budget_tokens: $THINKING_BUDGET"
  fi
)
messages:
$(
  # Extract the USER/ASSISTANT messages
  gawk '
    BEGIN {
      in_section = 0;
    }
    /^> THINKING: / {
      next; // ignore thinking that were appended to the input file by this script - on LLM response
    }
    /^######## / {
      in_section = 0;
    }
    in_section {
      print "      " $0;
    }
    /^######## MODEL: / {
      next;
    }
    /^######## SYSTEM/ {
      next;
    }
    /^######## ASSISTANT/ {
      in_section = 1;
      print "  - role: assistant"
      print "    content: |"
      next;
    }
    /^######## USER/ {
      in_section = 1;
      print "  - role: user"
      print "    content: |"
      next;
    }
    /^######## IGNORE/ {
      in_section = 0;
      next;
    }
    /^######## / {
      print "Error at line " NR ": a line starting with \"####\" must be followed by either \"USER\" or \"MESSAGE\"" > "/dev/stderr"
      exit 1
    }
  ' "$FILE"
)
"

# echo "$YAML_PAYLOAD"

JSON_PAYLOAD="$(
  yq e -o=json <<< "$YAML_PAYLOAD" |
  jq '
    def trim: sub("^[ \t\r\n]+"; "") | sub("[ \t\r\n]+$"; "");
    walk(if type == "string" then trim else . end)
  '
)"
# echo "$JSON_PAYLOAD"

# Make sure the last role is "user".
LAST_ROLE="$( jq '.messages[-1].role' <<< "$JSON_PAYLOAD" )"
if [[ "$LAST_ROLE" != '"user"' ]] ; then
  echo "Last role is $LAST_ROLE - while it should be \"user\"" 1>&2
  exit 1
fi

# === Send the request ===
echo "Sending request to Anthropic API with model: $MODEL - and thinking-budget = $THINKING_BUDGET tokens..." | grep -E --color '[^ ]*[0-9][^ ]*' 1>&2
RESPONSE="$(
    curl \
        -s "https://api.anthropic.com/v1/messages" \
        -H "x-api-key: $API_KEY" \
        -H "Content-Type: application/json" \
        -H "anthropic-version: 2023-06-01" \
        -d "$JSON_PAYLOAD"
    )"

function expect() {
  local JSON_VALUE
  JSON_VALUE="$( jq "$1" <<< "$RESPONSE" )"
  if [[ "$JSON_VALUE" != "$2" ]] ; then
    echo "Error:   Response path \"$1\" --->   $JSON_VALUE    while expecting:    $2" 1>&2
    jq . <<< "$RESPONSE" 1>&2
    exit 1
  fi
}
expect '.type' '"message"'
expect '.role' '"assistant"'
expect '.stop_reason' '"end_turn"'

FORMATTED_RESPONSE="$(
  # Prefix all "thinking" response content-blocks with "> THINKING:   "
  jq -r '
      .content[] |
      if .type == "text" then
        .text
      elif .type == "thinking" then
        .thinking | split("\n")[] | "> THINKING:   " + .
      else
        error("unexpected type: \(.type)")
      end
    ' <<< "$RESPONSE" |
  # Insert separators above and below the "thinking" response content-blocks - for better readability
  gawk '
      {
        currentIsThinking = 0;
      }
      /^> THINKING:   / {
        currentIsThinking = 1;
      }
      !lastIsThinking && currentIsThinking {
        print "> THINKING:   --------------------------------------------------------------------------------"
      }
      lastIsThinking && !currentIsThinking {
        print "> THINKING:   --------------------------------------------------------------------------------"
        print "";
      }
      {
        print;
        lastIsThinking = currentIsThinking;
      }
    '
)"


echo "========================================================================================================================"
echo
echo "$FORMATTED_RESPONSE"
echo
echo "========================================================================================================================"

if [[ -w "$FILE" ]] ; then
  {
    echo
    echo
    echo "######## ASSISTANT"
    echo
    echo "$FORMATTED_RESPONSE"
    echo
  } >> "$FILE"
fi

jq '.usage' <<< "$RESPONSE"
