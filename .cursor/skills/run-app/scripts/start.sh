#!/usr/bin/env bash
set -euo pipefail

APP_ID="${1:-}"

if [[ -z "$APP_ID" ]]; then
  echo "Usage: start.sh <app-id>" >&2
  exit 2
fi

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
REGISTRY="$REPO_ROOT/.cursor/skills/run-app/apps.json"
RUNTIME_DIR="$REPO_ROOT/.cursor/skills/.runtime"

mkdir -p "$RUNTIME_DIR"

python3 - "$REGISTRY" "$APP_ID" "$REPO_ROOT" "$RUNTIME_DIR" <<'PY'
import datetime
import json
import os
import re
import subprocess
import sys
import time

registry_path, app_id, repo_root, runtime_dir = sys.argv[1:5]

with open(registry_path, "r", encoding="utf-8") as registry_file:
    registry = json.load(registry_file)

apps = registry.get("apps", [])
app = next((candidate for candidate in apps if candidate.get("id") == app_id), None)
if app is None:
    known = ", ".join(candidate.get("id", "") for candidate in apps) or "none"
    print(f"Unknown app: {app_id}. Known apps: {known}", file=sys.stderr)
    sys.exit(2)

state_path = os.path.join(runtime_dir, f"{app_id}.json")
log_path = os.path.join(runtime_dir, f"{app_id}.log")


def process_is_alive(pid):
    try:
        os.kill(pid, 0)
    except ProcessLookupError:
        return False
    except PermissionError:
        return True
    return True


if os.path.exists(state_path):
    with open(state_path, "r", encoding="utf-8") as state_file:
        state = json.load(state_file)
    pid = int(state.get("pid", 0) or 0)
    if pid and process_is_alive(pid):
        print(f"already-running\t{app_id}\t{app['name']}\t{state.get('url', '')}\t{pid}\t{log_path}")
        sys.exit(0)
    os.remove(state_path)

app_dir = os.path.join(repo_root, app["dir"])
if not os.path.isdir(app_dir):
    print(f"App folder not found: {app['dir']}", file=sys.stderr)
    sys.exit(1)

log_file = open(log_path, "ab", buffering=0)
log_file.write(f"\n--- starting {app['name']} at {datetime.datetime.now().isoformat(timespec='seconds')} ---\n".encode("utf-8"))

# Only scan log output written by this run; earlier runs leave stale URLs behind.
log_start_offset = log_file.tell()

process = subprocess.Popen(
    app["command"],
    cwd=app_dir,
    shell=True,
    stdout=log_file,
    stderr=subprocess.STDOUT,
    start_new_session=True,
)

url = ""
url_pattern = re.compile(r"https?://(?:localhost|127\.0\.0\.1|\[?::1\]?)[^\s)]+")

for _ in range(40):
    if process.poll() is not None:
        log_file.close()
        with open(log_path, "r", encoding="utf-8", errors="replace") as failed_log:
            recent_log = failed_log.read()[-1200:]
        print(f"Failed to start {app['name']} (exit {process.returncode}).\n{recent_log}", file=sys.stderr)
        sys.exit(process.returncode or 1)

    if os.path.exists(log_path):
        with open(log_path, "rb") as current_log:
            current_log.seek(log_start_offset)
            recent = current_log.read().decode("utf-8", errors="replace")
        match = url_pattern.search(recent)
        if match:
            url = match.group(0).rstrip(".,")
            break

    time.sleep(0.25)

if not url:
    url = f"http://localhost:{app.get('portHint', 3000)}"

started_at = datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z")
state = {
    "id": app_id,
    "name": app["name"],
    "pid": process.pid,
    "url": url,
    "command": app["command"],
    "dir": app["dir"],
    "log": log_path,
    "startedAt": started_at,
}

with open(state_path, "w", encoding="utf-8") as state_file:
    json.dump(state, state_file, indent=2)
    state_file.write("\n")

log_file.close()
print(f"started\t{app_id}\t{app['name']}\t{url}\t{process.pid}\t{log_path}")
PY
