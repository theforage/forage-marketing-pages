## Auto-generated

*Built 2026-05-26. Ask to rebuild Layout skill to refresh from sources.*
**Gembox start copies this block to:** `.cursor/skills/gembox-layout/SKILL.md`
---
name: gembox-layout
description: Gembox page layouts — Split, Full, Shorts only; spacing tokens from Sizing collection.
---
# Layout
Load parent `gembox-design-system` first.
## Approved layouts (only these three)
Do **not** invent a third column, extra shell, or one-off page grid.
### 1. Split page
- **Structure:** `aside` + `article` (primary + secondary column).
- **Desktop:** Side by side within page grid — Figma frames `>xl`, `>lg`, `>md`.
- **Mobile (**`base`** / small):** Stack vertically — aside then article unless a written spec reverses order.
- **Figma section:** `9421:94478` — [Split page](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=9421-94478)
- **Regions:** `header`, `main` (with `aside` + `article` in flex), `footer`. Preserve semantics when stacking.
### 2. Full page
- **Structure:** Single main column — header, main, optional callouts, footer. **No** persistent secondary column.
- **Desktop:** Max width + horizontal inset from guidelines (`>lg`).
- **Mobile:** Stack header → main → footer; full-width sections at `base` / 480px frames.
- **Figma section:** `9421:94673` — [Full page](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=9421-94673)
### 3. Shorts
- **Component:** `Layout/Shorts` set — short-form density only.
- **Do not** use for marketing or standard app shells that should be Split or Full.
- **Figma section:** `9421:94777` — variants `Shorts=>lg`, `Shorts=>md`, `Shorts=base` (`9421:94779`, `9421:94875`, `9421:94842`).
## Spacing tokens (Sizing — mandatory)
Use token names only. Flag **13px, 15px, 19px** as errors.
<table>
<tr>
<td>Token</td>
<td>px</td>
</tr>
<tr>
<td>Spacing/4xs</td>
<td>4</td>
</tr>
<tr>
<td>Spacing/2xs</td>
<td>8</td>
</tr>
<tr>
<td>Spacing/xs</td>
<td>10</td>
</tr>
<tr>
<td>Spacing/sm</td>
<td>12</td>
</tr>
<tr>
<td>Spacing/md</td>
<td>16</td>
</tr>
<tr>
<td>Spacing/lg</td>
<td>20</td>
</tr>
<tr>
<td>Spacing/xl</td>
<td>24</td>
</tr>
<tr>
<td>Spacing/2xl</td>
<td>32</td>
</tr>
<tr>
<td>Spacing/3xl</td>
<td>48</td>
</tr>
<tr>
<td>Spacing/4xl</td>
<td>64</td>
</tr>
</table>
Pair with Typography vertical rhythm (8px base unit). Long text max line length **45rem / 720px** where Typography applies.
## Breakpoints
- Start from Figma breakpoint strips on each layout. If a frame is not in the file, it is not an approved target.
- Honor **Bleed** / max-content annotations in Figma.
## Figma file
- **fileKey:** `IgohaddARKIJHihXX0OE4Z`
- **Layout canvas:** `7666:4485` (scan sections above; skip Deprecated)
## Human reference (not for agents to re-fetch every edit)
