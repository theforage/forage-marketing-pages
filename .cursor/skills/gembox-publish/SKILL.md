---
name: gembox-publish
description: Commit, push, GitHub Pages deploy, return live URL. Trigger Gembox publish.
---

# Gembox publish

When the human says **Gembox publish** (or `gembox publish`):

## Prerequisites

- Git repo with `origin` remote
- Static prototype at repo root (`index.html`, `css/`, `js/`, `assets/`)
- `.github/workflows/deploy-pages.yml` per `gembox-repo` (GitHub Actions → `_site/`, no npm)

## Procedure

1. **Review changes** — `git status` / `git diff`; commit **prototype files only** (not `.cursor/` if gitignored).
2. **Commit** — clear message describing the prototype change; user must have asked for publish (implies commit+push).
3. **Push** to `main` (or default branch). On rejection → **STOP** and report.
4. **Pages** — confirm workflow ran or trigger `workflow_dispatch` if needed.
5. **Return** the live GitHub Pages URL to the human.

## Do not

- Force-push unless explicitly requested
- Commit secrets (`.env`, tokens)
- Skip hooks unless the human explicitly requests it

Implements **Gembox publish** mode from [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a).
