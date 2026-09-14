## Auto-generated

---
name: gembox-slat
description: >-
  Gembox SlatContainer (Figma page). Load with parent gembox-design-system.
---

# Slat / SlatContainer

## Sources

| | |
|---|---|
| **Notion** | [SlatContainer](https://www.notion.so/36c50ba3919d8175bc13fde550ff1ed8) |
| **Figma page** | [Slat container](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=13653-2284) (`13653:2284`) |

### Build steps
1. Always load parent `gembox-design-system` first.
2. `get_metadata` with `fileKey` `IgohaddARKIJHihXX0OE4Z` and `nodeId` `13653:2284`.
3. `get_design_context` on the variant you ship (Inner / Outer / Shaded / Unbordered).

## Variants (Figma property names)

| Property | Values | Use |
|----------|--------|-----|
| **Size** | `Inner`, `Outer` | **Inner** — Title 3 (22/28) + optional numbered disc. **Outer** — Title 4 (18/27) + optional 32px icon slot. |
| **Style** | `Default`, `Shaded`, `Unbordered` | **Shaded** — gray shell, no border (task cards). **Default** — white + border. |
| **Usage** | `Default`, draggable | Draggable shows inline grip in header lead (not a top tab). |

Both sizes use **Body md** (16/24) for supporting copy.

## Layout

- Shell max **572px**; content slot max **540px**.
- Header row: **16px** padding, **16px** gap; lead group (drag + disc/icon) **10px** gap.
- Expanded **Default** body: **1px** top border `--ui/background`.
- Chevron: **16px**, action primary; collapsed points **right**, expanded points **down** (Figma enrollment / `13950:8025` / `313:16563`).

## Rules

- Do not use legacy **xl/md** naming — map to **Inner/Outer**.
- Do not use top-center floating drag tabs; drag lives in the header lead.
- Nested slats inside a shaded parent use **Outer**; numbered task/question slats use **Inner** + disc.
