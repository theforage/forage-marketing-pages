---
name: gembox-help
description: Short cheat sheet after §1 setup. Trigger Gembox help.
---

# Gembox help

After the human has run **§1** (setup paste on [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a)), print this cheat sheet. **Do not** re-run Gembox start.

## What you can say

| Command | What happens |
|---------|----------------|
| **Build … in the prototype** | Load local `gembox-*` skills + Gembox Components Figma only |
| **Gembox publish** | Commit, push, GitHub Pages, return live URL (`gembox-publish`) |
| **Put this HTML in Figma** | `gembox-figma-maker` — serve locally, capture, return frame link |
| **Gembox help** | This cheat sheet (alias: `gembox help`) |

## Golden rule (one line)

**Never** ship visible UI that is not in Gembox Components + a matching `.cursor/skills/gembox-<slug>/SKILL.md`. No substitutes for prototypes.

## Links

- **Styleguide:** [Gembox Styleguide](https://www.notion.so/20e50ba3919d80519907e6fc0337d3b8)
- **Figma Components:** [Gembox Components](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components) (`IgohaddARKIJHihXX0OE4Z`)
- **Integration hub:** https://www.notion.so/34150ba3919d804bac88fed97249ed3a

## Maintainer commands (only if asked)

- **gembox update** — refresh Notion Auto-generated blocks (§6 on Integration page)
- **gembox build** — rare full regen (Skill pack page)

## If this skill is missing

Point the human to **§1 Start here** on the Integration page — not a second bootstrap.
