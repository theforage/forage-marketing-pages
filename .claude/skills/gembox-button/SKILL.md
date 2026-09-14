---
name: gembox-button
description: Gembox Button — primary/secondary/tertiary/compact; sizes hero/default/small; states, intents, loading, mobile stacking, ButtonGroup.
---

## Auto-generated

*Built 2026-06-01 from Notion + Figma. Say gembox update button to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-button/SKILL.md`

# Button
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
<td>**Button page**</td>
<td>`49:2305`</td>
</tr>
<tr>
<td>**Main component set**</td>
<td>`6050:13714` — `Button` (scan **Components** section; skip Deprecated)</td>
</tr>
<tr>
<td>**ButtonGroup**</td>
<td>`13659:15007` — mobile/desktop button stacks</td>
</tr>
<tr>
<td>**Read Me**</td>
<td>`5194:129736` — documentation on canvas</td>
</tr>
</table>
Use `get_design_context` on the variant instance that matches your task (see matrix below), not generic buttons.
## Variant matrix (Figma property names)
**Style** × **Size** × **State** — all combinations exist on component set `6050:13714`.
<table header-row="true">
<tr>
<td>Style</td>
<td>Sizes</td>
<td>States</td>
</tr>
<tr>
<td>**Primary**</td>
<td>Small (`28px` height), Default (`42px`), Hero (`60px`)</td>
<td>Default, Hover, Active, Disabled</td>
</tr>
<tr>
<td>**Secondary**</td>
<td>Small, Default, Hero</td>
<td>Default, Hover, Active, Disabled</td>
</tr>
<tr>
<td>**Tertiary**</td>
<td>Small, Default, Hero</td>
<td>Default, Hover, Active, Disabled</td>
</tr>
<tr>
<td>**Compact**</td>
<td>Small, Default, Hero</td>
<td>Default, Hover, Active, Disabled</td>
</tr>
</table>
Example instance IDs (Primary / Default / Default): `7027:24415`.  
Example (Primary / Small / Default): `7027:24451`.  
Example (Primary / Hero / Default): `7027:24169`.
## Default (md) measurements — Primary Default
From Figma `7027:24415` (bind tokens in code, do not hardcode hex if variables exist):
<table header-row="true">
<tr>
<td>Property</td>
<td>Token / value</td>
</tr>
<tr>
<td>Height</td>
<td>`42px`</td>
</tr>
<tr>
<td>Horizontal padding</td>
<td>`Spacing/lg` → **20px**</td>
</tr>
<tr>
<td>Vertical padding</td>
<td>`Spacing/md` → **16px**</td>
</tr>
<tr>
<td>Border radius</td>
<td>**6px**</td>
</tr>
<tr>
<td>Label</td>
<td>DM Sans **Medium**, **16px**, line-height **16px**</td>
</tr>
<tr>
<td>Icon gap</td>
<td>**8px**</td>
</tr>
<tr>
<td>Fill</td>
<td>`ui/action/primary`</td>
</tr>
<tr>
<td>Label color</td>
<td>`ui/white`</td>
</tr>
<tr>
<td>Border (primary)</td>
<td>2px `ui/action/primary` on outer + inner</td>
</tr>
</table>
**Small:** height **28px** (Figma Small row).  
**Hero:** height **60px** (Figma Hero row).  
Padding labels on Sizes section: **12px**, **15px**, **20px**, **24px**, **26px** depending on size row — always take from the variant you implement.
## Props (API shape from design system)
<table header-row="true">
<tr>
<td>Prop</td>
<td>Values</td>
<td>Default</td>
<td>Notes</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>`style`</td>
<td>`compact` \\</td>
<td>`primary` \\</td>
<td>`secondary` \\</td>
<td>`tertiary`</td>
<td>`primary`</td>
<td>Visual hierarchy</td>
</tr>
<tr>
<td>`size`</td>
<td>`hero` \\</td>
<td>`default` \\</td>
<td>`small`</td>
<td>`default`</td>
<td>Affects height, padding, type</td>
<td></td>
</tr>
<tr>
<td>`state`</td>
<td>`active` \\</td>
<td>`default` \\</td>
<td>`disabled` \\</td>
<td>`hover`</td>
<td>`default`</td>
<td>Implement `:hover` / `:active` / `:disabled` in CSS</td>
</tr>
<tr>
<td>`iconLeft`</td>
<td>boolean</td>
<td>`false`</td>
<td>Max **one** icon per button (left **or** right, not both unless spec says)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>`iconRight`</td>
<td>boolean</td>
<td>`false`</td>
<td>Directional icons after text; action icons before</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>`title`</td>
<td>string</td>
<td>—</td>
<td>Button label</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>`hasDropdown`</td>
<td>boolean</td>
<td>`false`</td>
<td>Chevron-down indicator (smaller FA icon)</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
## Style usage (when to use which)
- **Primary** — main action per section; **one primary per section** when possible.
- **Secondary** — secondary actions; outlined (white fill + primary border in Figma).
- **Tertiary** — subtle actions; ghost-like (transparent fill, primary text).
- **Compact** — minimal padding; often icon-forward or tight toolbars.
## Intent colors (manual in Figma — do not invent)
- **Default / action:** `ui/action/primary` (blue) — most actions.
- **Danger:** red — destructive (delete, remove). Use danger tokens from Gembox; not for every “cancel”.
- **Success / Warn:** reserve for **alerts**, not routine buttons unless spec says otherwise.
Destructive primary example pattern in prototypes: outlined or solid danger using `ui/danger-*` tokens.
## Icons
- **Left / right:** Gembox utility icons (Figma `Icon/utility/regular/*`), not npm icon packs.
- **Dropdown:** `chevron-down` (12px in default md).
- **Loading:** `spinner-third` with animation (FontAwesome Regular per human doc).
- **Rule:** One icon per button in a **group**; do not icon every button in a row.
## Loading state
- Treat as **disabled** visually + **`cursor: not-allowed`**.
- Replace label with **"Loading"** (or spec copy) and show **spinner-third**.
- Non-interactive while loading.
## Disabled state
- **`cursor: not-allowed`** in CSS.
- **`aria-disabled="true"`** when inactive but focusable for tooltip.
- **`aria-describedby`** → tooltip explaining **why** (specific copy from PM, not “Not available”).
- Tooltip required when disabled — explain the **actual** blocking condition (e.g. “Please complete all required fields and provide your email address.”).
## Mobile — button order and width
- Stack buttons **full width** on small viewports.
- **Primary closest to content** — primary **above** secondary/tertiary.
- Use **ButtonGroup** component (`13659:15007`) for 2- or 3-button stacks at fill / 720 / 540 widths.
## Button groups (Figma)
Component set **`ButtonGroup`** (`13659:15007`): variants for 2 or 3 buttons, sizes xs/sm/md/lg, form widths fill / 720 / 540. Prefer this for form footers instead of hand-rolled flex stacks.
## Label text — no wrap (required)
- Button label text **must not wrap** inside the control. Keep **one line** only (`white-space: nowrap` in CSS).
- Size the button to the label + padding, or truncate with ellipsis when a fixed width is specified in design — **never** stack label copy on multiple lines.
- If copy is too long for the layout, shorten the label or use a **link** / tertiary pattern — do not wrap the button label.
## Best practices (from human doc)
- One **primary** per section for clear hierarchy.
- Consistent **size** within a button group.
- Use for actions, submits, opening dialogs — not for navigation (use links/nav patterns).
- **Do not** use success/warn button colors for generic actions.
## HTML/CSS prototype pattern (vanilla)
Match existing prototype classes when present: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.btn-secondary-compact`, `.btn-compact`, size modifiers `.btn-sm`. Heights: default **42px**, compact row **\~32px** min-height, small **36px** where `.btn-sm` applies. Always prefer **`var(--gb-*)`** from `config/gembox-tokens.css`.
## Related components
- **Tooltip** — required for disabled explainers (`7952:1509` pattern on Button page playground).
- **Social Buttons** — separate set `5110:11830` (Google, SSO, LinkedIn) — do not mix with standard Button styles unless spec names them.
Figma fingerprint: `49:2305/6050:13714/Style+Size+State/48`
## Human reference

---

## AI notes

- *(Team overrides.)*
