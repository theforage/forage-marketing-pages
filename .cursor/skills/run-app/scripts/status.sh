#!/usr/bin/env bash
set -euo pipefail

APP_ID="${1:-}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
RUNTIME_DIR="$REPO_ROOT/.cursor/skills/.runtime"

python3 - "$RUNTIME_DIR" "$APP_ID" <<'PY'
import glob
import json
import os
import sys

runtime_dir, requested_app = sys.argv[1:3]


def process_is_alive(pid):
    try:
        os.kill(pid, 0)
    except ProcessLookupError:
        return False
    except PermissionError:
        return True
    return True


if not os.path.isdir(runtime_dir):
    print("none")
    sys.exit(0)

if requested_app:
    state_paths = [os.path.join(runtime_dir, f"{requested_app}.json")]
else:
    state_paths = sorted(glob.glob(os.path.join(runtime_dir, "*.json")))

running = []

for state_path in state_paths:
    if not os.path.exists(state_path):
        continue

    with open(state_path, "r", encoding="utf-8") as state_file:
        state = json.load(state_file)

    pid = int(state.get("pid", 0) or 0)
    if pid and process_is_alive(pid):
        running.append(
            f"running\t{state.get('id', '')}\t{state.get('name', '')}\t{state.get('url', '')}\t{pid}"
        )
    else:
        os.remove(state_path)

if running:
    print("\n".join(running))
else:
    print("none")
PY
