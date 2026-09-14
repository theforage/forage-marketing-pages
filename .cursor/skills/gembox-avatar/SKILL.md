## Auto-generated

*Built 2026-06-03 from Notion + Figma. Say gembox update avatar to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-avatar/SKILL.md`
---
name: gembox-avatar
description: Gembox Avatar User — photo or initial; seven sizes; optional attention indicator. Load with parent gembox-design-system.
---
# Avatar
Load parent `gembox-design-system` first.
## Figma source of truth
<table header-row="true">
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>**fileKey**</td>
<td>`IgohaddARKIJHihXX0OE4Z`</td>
</tr>
<tr>
<td>**Avatar page**</td>
<td>`1487:10840`</td>
</tr>
<tr>
<td>**Main component set**</td>
<td>`11181:9777` — `Avatar User`</td>
</tr>
<tr>
<td>**Demo**</td>
<td>`13858:10935` — DEMO — User avatar (sizes, image, indicator)</td>
</tr>
</table>
Use `get_design_context` on the **Avatar User** variant that matches your task — not generic HTML controls or deprecated square avatars on the canvas.
## Variant properties (Figma)
- **size** — `XS (16)` through `XXXL (96)` (seven T-shirt sizes)
- **showImage** — profile photo when uploaded; otherwise first initial on action background
- **showIndicator** — red attention dot at top-right when user should check menu/notification/next step
## Example instances
- `11181:9778` — Size=XS (16)
- `11181:9783` — Size=SM (24)
- `11181:9788` — Size=MD (32)
- `11181:9798` — Size=L (48)
- `11181:9803` — Size=XL (64)
- `13855:4997` — Size=XXL (80)
- `13855:5041` — Size=XXXL (96)
## Nested parts
When `showIndicator` is true, the avatar nests **Indicator** instances (danger/off variants sized per avatar — e.g. `Indicator/xs/Danger/Off` on XS). Resolve indicator tokens from nested INSTANCE output in Figma MCP, not invented dots.
## Props (from human doc)
<table header-row="true">
<tr>
<td>Prop</td>
<td>Values</td>
<td>Default</td>
</tr>
<tr>
<td>`size`</td>
<td>`XS (16)` \| `SM (24)` \| `MD (32)` \| `L (48)` \| `XL (64)` \| `XXL (80)` \| `XXXL (96)`</td>
<td>`XS (16)`</td>
</tr>
<tr>
<td>`showImage`</td>
<td>boolean</td>
<td>`false`</td>
</tr>
<tr>
<td>`showIndicator`</td>
<td>boolean</td>
<td>`true`</td>
</tr>
</table>
## Sizes (16px base — rem for docs)
<table header-row="true">
<tr>
<td>Size</td>
<td>Figma label</td>
<td>px</td>
<td>rem</td>
</tr>
<tr>
<td>Extra small</td>
<td>XS (16)</td>
<td>16</td>
<td>1</td>
</tr>
<tr>
<td>Small</td>
<td>SM (24)</td>
<td>24</td>
<td>1.5</td>
</tr>
<tr>
<td>Medium</td>
<td>MD (32)</td>
<td>32</td>
<td>2</td>
</tr>
<tr>
<td>Large</td>
<td>L (48)</td>
<td>48</td>
<td>3</td>
</tr>
<tr>
<td>XL</td>
<td>XL (64)</td>
<td>64</td>
<td>4</td>
</tr>
<tr>
<td>Double XL</td>
<td>XXL (80)</td>
<td>80</td>
<td>5</td>
</tr>
<tr>
<td>Triple XL</td>
<td>XXXL (96)</td>
<td>96</td>
<td>6</td>
</tr>
</table>
## Colors and intents
- **Background (initial state):** `ui/action/background`
- **Initial letter:** `ui/action/primary`
- **Indicator:** danger / attention red (standard indicator treatment)
- **Flavors** (alternate disc treatments) may be added later — until published in Figma, use **action** only for Avatar User.
## Rules and usage (distilled)
- **When:** signed-in user, comment author, list identity — real people with accounts.
- **When not:** partner/school/company marks (use Logos); generic non-person placeholders.
- **Image:** uploaded profile photo when available; else **first initial** only.
- **Indicator:** only when there is a real follow-up (menu, notification, task) — not decoration.
- **Mobile:** stack related buttons full width; primary closest to content (see Button doc for groups).
- **Disabled avatars** (when used as controls): `aria-disabled`, `aria-describedby` tooltip with **specific** blocking reason; `cursor: not-allowed`.
- **Do not** stretch/crop outside the circular frame; **do not** use indicator without linked destination.
## Accessibility
- Meaningful **`aria-label`** when the avatar identifies someone; decorative when name is adjacent.
- Avatar that opens UI must be a **button** (or named link) with focus ring.
- Indicator: do not rely on red dot alone — pair with copy or accessible notification state.
- Profile **alt text** when not redundant; initials readable at all sizes.
Figma fingerprint: `1487:10840/11181:9777/size+showImage+showIndicator/7/92189ec00b91`
## Human reference
