---
name: gembox-repo
description: Vanilla HTML/CSS/JS prototype shell and GitHub Pages. Load on Gembox start or when publishing a prototype.
---

# Gembox repo (prototype shell)

Load parent `gembox-design-system` when building UI inside the scaffold.

## Stack (required)

- **Vanilla only:** HTML, CSS, JavaScript — **no** npm, Vite, React, or bundlers unless the human **explicitly** requests another stack.
- **Local run:** double-click **`index.html`** (`file://`). **No install** and **no dev server** for normal use.
- **Relative paths only:** `css/`, `js/`, `assets/` must work from `file://` and GitHub Pages.

## Default layout

| Path | Purpose |
|------|---------|
| `index.html` | Page entry |
| `css/tokens.css` | Gembox CSS variables (from Figma Components) |
| `css/styles.css` | Component + layout styles |
| `js/main.js` | Light interactions |
| `assets/` | Gembox SVGs and images |
| `README.md` | How to open locally + Pages URL when published |

## Hello-world default

Unless the task includes full page markup: Gembox **Site Banner** + empty `<main>`. **Do not** add `package.json` or bundlers by default.

## Tokens (`css/tokens.css`)

Regenerate from Gembox Components (`IgohaddARKIJHihXX0OE4Z`) when missing or stale — never hand-invent token subsets.

## GitHub Pages

**Human command:** **Gembox publish** (`gembox-publish` skill) — commit, push, deploy, return live URL.

Add `.github/workflows/deploy-pages.yml` that copies static prototype files into `_site/` (no npm build). Triggers: `push` to `main` + `workflow_dispatch`. Pages **Source** = **GitHub Actions**.

## Product repos vs Gembox workflow

Prototype repositories hold **product HTML/CSS/JS only**. **Do not** check in `.cursor/` as source of truth — Gembox start materializes skills and rules **locally** (gitignored). Figma capture scripts run **ephemerally** in the agent session (see `gembox-figma-maker`).

## Path A vs Path B

| Workspace root | Action |
|----------------|--------|
| Not a git repo | **Path A — New:** prompt parent path, repo name, GitHub owner → scaffold + optional `gh repo create` |
| Is git root | **Path B — Refresh:** sync skills + rule; repair scaffold drift; **no** duplicate repo |
