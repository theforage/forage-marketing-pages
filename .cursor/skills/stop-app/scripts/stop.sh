#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-}"

if [[ -z "$TARGET" ]]; then
  echo "Usage: stop.sh <app-id|--all>" >&2
  exit 2
fi

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
RUNTIME_DIR="$REPO_ROOT/.cursor/skills/.runtime"

python3 - "$RUNTIME_DIR" "$TARGET" <<'PY'
import glob
import json
import os
import signal
import sys
import time

runtime_dir, target = sys.argv[1:3]


def process_is_alive(pid):
    try:
        os.kill(pid, 0)
    except ProcessLookupError:
        return False
    except PermissionError:
        return True
    return True


def stop_process_group(pid):
    if not pid or not process_is_alive(pid):
        return "not-running"

    try:
        pgid = os.getpgid(pid)
        os.killpg(pgid, signal.SIGTERM)
    except ProcessLookupError:
        return "not-running"

    for _ in range(20):
        if not process_is_alive(pid):
            return "stopped"
        time.sleep(0.2)

    try:
        os.killpg(os.getpgid(pid), signal.SIGKILL)
    except ProcessLookupError:
        return "stopped"

    return "killed"


if not os.path.isdir(runtime_dir):
    print("none")
    sys.exit(0)

if target == "--all":
    state_paths = sorted(glob.glob(os.path.join(runtime_dir, "*.json")))
else:
    state_paths = [os.path.join(runtime_dir, f"{target}.json")]

if not state_paths or all(not os.path.exists(path) for path in state_paths):
    print("none" if target == "--all" else f"not-running\t{target}")
    sys.exit(0)

results = []

for state_path in state_paths:
    if not os.path.exists(state_path):
        continue

    with open(state_path, "r", encoding="utf-8") as state_file:
        state = json.load(state_file)

    pid = int(state.get("pid", 0) or 0)
    result = stop_process_group(pid)
    app_id = state.get("id", os.path.basename(state_path).removesuffix(".json"))
    name = state.get("name", app_id)
    url = state.get("url", "")

    try:
        os.remove(state_path)
    except FileNotFoundError:
        pass

    results.append(f"{result}\t{app_id}\t{name}\t{url}\t{pid}")

print("\n".join(results) if results else "none")
PY
