---
name: stop-app
description: >-
  Stop or terminate a local Forage Prototypes app that was started
  by the run-app skill. Invoke for /stop-app, stop app, terminate app, stop
  Clyde, kill the quiz server, or explicit local app termination intent.
disable-model-invocation: true
metadata:
  category: automation
---

# Stop App

## Overview

Stop a local prototype app that was started by `run-app`. The agent reads the
tracked runtime state, stops the stored background process, clears the state
file, and gives a short confirmation.

Audience: PMs, QAs, and designers. Do not ask the user to find PIDs, ports, or
terminal sessions.

## 1. Triggers

Activate only when the user clearly wants to stop a local prototype app.

| Activate | Do not activate |
|----------|-----------------|
| `/stop-app` | Requests to close a browser tab only |
| `stop app` / `terminate app` | Requests to publish or undeploy GitHub Pages |
| `stop Clyde` | Requests to edit Clyde quiz content |
| `kill the quiz server` | Generic process-management questions |
| `shut down the local app` | Casual mentions of local apps |

## 2. Runtime State

`run-app` stores app state under:

```bash
.cursor/skills/.runtime/
```

Use the status script to see what is currently tracked:

```bash
.cursor/skills/run-app/scripts/status.sh
```

Status output:

- `running<TAB>id<TAB>name<TAB>url<TAB>pid`
- `none`

## 3. Workflow

1. If the user named an app, match it to a tracked app id.
2. If the user did not name an app, run status:

   ```bash
   .cursor/skills/run-app/scripts/status.sh
   ```

3. If no apps are running, tell the user there is nothing to stop.
4. If exactly one app is running, stop it.
5. If multiple apps are running in the future, ask which one to stop unless the user asked to stop all.
6. Stop a named app:

   ```bash
   .cursor/skills/stop-app/scripts/stop.sh <app-id>
   ```

7. Stop all tracked apps only when the user explicitly asks:

   ```bash
   .cursor/skills/stop-app/scripts/stop.sh --all
   ```

8. Interpret script output:

   - `stopped<TAB>id<TAB>name<TAB>url<TAB>pid` means stopped cleanly.
   - `killed<TAB>id<TAB>name<TAB>url<TAB>pid` means force-stopped after timeout.
   - `not-running<TAB>id` means that app was not tracked as running.
   - `none` means no tracked apps were running.

## 4. Response Templates

### App Stopped

```markdown
Stopped **{app name}**.
```

### Nothing Running

```markdown
No local apps are running right now.
```

### Choose App

```markdown
Which app should I stop?

- {app name}
```

## 5. Guardrails

- Do not ask the user to run terminal commands.
- Do not use broad process-kill commands outside the tracked runtime state.
- Do not stop unrelated dev servers or user terminals.
- If state is missing or stale, say no local apps are running.
- Keep implementation details out of the user response unless they ask.
