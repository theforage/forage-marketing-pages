#!/usr/bin/env bash
# Serve the whole marketing-pages repo over HTTP so the landing page, every
# page, and the shared toolbar in shared/ all resolve.
#
# Usage: ./serve.sh [port]   (default port: 8000)
set -euo pipefail

PORT="${1:-8000}"
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

echo "Serving Forage marketing pages from: $ROOT"
echo
echo "  Landing page : http://localhost:${PORT}/"
echo "  Starter page : http://localhost:${PORT}/starter-page/"
echo
echo "Press Ctrl+C to stop."
echo

exec python3 -m http.server "$PORT"
