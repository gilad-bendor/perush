#!/bin/bash -eu
cd "$( dirname "$( realpath "$0" )" )" || exit 1
node \
    --import 'data:text/javascript,
      import { register } from "node:module";
      import { pathToFileURL } from "node:url";
      register("ts-node/esm", pathToFileURL("./"));
    ' \
    "mcp-server.ts" "$@" | tee /tmp/mcp-server.log
#node --loader "ts-node/esm" "mcp-server.ts" "$@"
