---
name: gembox-start
description: Bootstrap Gembox — sync Notion skills, materialize .cursor artifacts, optional repo scaffold. Trigger Run Gembox start.
---

# Gembox start

**Binding page:** https://www.notion.so/34150ba3919d804bac88fed97249ed3a

When the human's message includes **Run Gembox start** (§1 step 2), execute these steps top to bottom. **STOP** = MCP failure, Figma denied, git push rejected. **PROMPT** = new project needs path + name + GitHub owner (then continue).

## Steps

1. **Workspace** — single folder open; shell works. Do not scan sibling folders for `.git`.
2. **Notion** — if Integration page body is not already in this thread, `notion-fetch` Gembox Cursor Integration (full body). Failure → **STOP**.
3. **Figma** — confirm access to **Gembox Components** (`IgohaddARKIJHihXX0OE4Z`) via Figma MCP (`whoami` + `get_metadata` on file). Failure → **STOP**.
4. **Sync component skills** — each **(skill)** child under §5 Skill documents on Integration page: **Auto-generated** (+ **AI notes** if non-placeholder) → `.cursor/skills/gembox-<slug>/SKILL.md`. Replace entire file.
5. **Materialize artifacts** from Integration §4 collapsibles:
   - **Always-on rules** → `.cursor/rules/gembox-notion-always.mdc`
   - **Repo / GitHub Pages** → `.cursor/skills/gembox-repo/SKILL.md`
   - **Figma maker** → `.cursor/skills/gembox-figma-maker/SKILL.md`
   - **Help** → `.cursor/skills/gembox-help/SKILL.md`
   - **Publish** → `.cursor/skills/gembox-publish/SKILL.md`
   - **This command** → `.cursor/skills/gembox-start/SKILL.md` (this file)
6. **Repository path** — `git rev-parse --show-toplevel` from workspace cwd:
   - **Not a git repo (Path A — New):** prompt for parent path, repo name, GitHub owner → `git init` → hello-world scaffold per **`gembox-repo`** → offer push + Pages.
   - **Is git root (Path B — Refresh):** replace `.cursor/skills/` + rule from Notion; repair scaffold drift per **`gembox-repo`**; **no** new GitHub repo.
7. **Report** — list what was synced, materialized, and scaffolded.

**After Gembox start:** normal UI work uses local skills + Figma only — **not** re-fetching Notion every edit.
