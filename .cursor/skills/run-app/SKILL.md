---
name: run-app
description: >-
  Start a local Forage Prototypes app in the background for PMs, QAs,
  and designers. Invoke for /run-app, run app, start app, run Clyde, start the
  Clyde & Co Eligibility Quiz, or explicit local app-running intent.
disable-model-invocation: true
metadata:
  category: automation
---

# Run App

## Overview

Start a local prototype app without asking the user to open a terminal or know
the underlying command. The agent chooses an app from `apps.json`, starts it in
the background with the skill script, then gives the user the local URL.

Audience: PMs, QAs, and designers. Keep replies short, plain-English, and
focused on the app URL.

## 1. Triggers

Activate only when the user clearly wants to run a local prototype app.

| Activate | Do not activate |
|----------|-----------------|
| `/run-app` | Casual design discussion mentioning Clyde |
| `run app` / `start app` | Requests to publish GitHub Pages |
| `run Clyde` | Requests to edit the app UI |
| `start the Clyde quiz` | Requests to inspect code only |
| `open the eligibility quiz locally` | Generic browser questions |

## 2. App Registry

Read the app list from:

```bash
.cursor/skills/run-app/apps.json
```

Each app entry includes:

- `id`: stable app id to pass to scripts
- `name`: friendly name for the user
- `aliases`: phrases that can match the user's request
- `dir`: app folder, relative to the repository root
- `command`: local command to run inside the app folder
- `portHint`: fallback port when the command does not print a URL

Current apps (see `apps.json` for the source of truth — update this list if it
changes):

- **All Prototypes (landing + every demo)** — `id: all` — **the default.** Serves
  the repo root so the landing page, every prototype, and the shared toolbar all
  work. Use this unless the user explicitly names a different app.
- **Sim Builder Latest In Progress** — `id: sim-builder-latest-in-progress`
- **Clyde & Co Eligibility Quiz** — `id: clyde-co-eligibility-quiz` — uses ES
  modules, so it must be served over HTTP rather than opened with `file://`.
- **Student sign-up** — `id: student-signup`
- **AI Task types** — `id: ai-simulations` — needs HTTP for the version
  switcher to resolve `../../shared/`.

## 3. Workflow

1. If the user named an app, match it by `id`, `name`, or `aliases`.
2. If the user did not name an app, use `all` (All Prototypes). Never ask which
   app to run — `all` serves every prototype, so it is always a safe default.
3. Before starting, check whether the app is already running:

   ```bash
   .cursor/skills/run-app/scripts/status.sh <app-id>
   ```

4. If status returns `running`, report the existing URL and do not start another copy.
5. Otherwise start it from the repository root:

   ```bash
   .cursor/skills/run-app/scripts/start.sh <app-id>
   ```

6. Interpret script output:

   - `started<TAB>id<TAB>name<TAB>url<TAB>pid<TAB>log` means the app started.
   - `already-running<TAB>id<TAB>name<TAB>url<TAB>pid<TAB>log` means reuse the existing app.
   - Any non-zero exit means summarize the error in plain English.

7. Reply with the app name, clickable URL, and how to stop it.

## 4. Response Templates

### App Started

```markdown
Started **{app name}**.

Open it here: {url}

When you're done, say `/stop-app`.
```

### Already Running

```markdown
**{app name}** is already running.

Open it here: {url}

When you're done, say `/stop-app`.
```

## 5. Guardrails

- Never ask the user which app to run. A bare `/run-app` always means `all`.
- Do not ask the user to run terminal commands.
- Do not install packages globally.
- Use the `command` field from `apps.json` for each app; do not invent a different serve command.
- Do not start duplicate servers for the same tracked app.
- Keep implementation details out of the user response unless they ask.
- Do not modify Gembox skills, `catalog.json`, or app source code as part of this skill.
