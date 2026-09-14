## Auto-generated

*Built 2026-05-26 from Notion + Figma. Say gembox update input to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-input/SKILL.md`
---
name: gembox-input
description: Gembox Input — Figma + Notion. Load with parent gembox-design-system.
---
# Input
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
<td>**Input page**</td>
<td>`74:3778`</td>
</tr>
<tr>
<td>**Main component set**</td>
<td>`9690:8354` — `Input` (skip Deprecated)</td>
</tr>
</table>
Use `get_design_context` on the variant instance that matches your task — not generic HTML controls.
## Variant properties (Figma)
- **State**
- **size**
- **state**
- **Usage**
## Example instances
- `9690:8315` — State=Default
- `9700:4763` — State=Active
- `9717:17132` — State=Error
- `9700:4936` — State=Disabled
- `9718:17427` — size=sm, state=Default, Usage=Flag
- `9718:17430` — size=md, state=Default, Usage=Flag
## Rules and usage (from design doc)
### States
Inputs can exist in four main states:
- **Default** – Idle, ready for user input.
- **Active** – Focused, when the user is typing or interacting.
- **Disabled** – Not available for input; shown with reduced opacity.
- **Error** – Indicates invalid or missing information. Typically triggered after a form submission, though may appear inline in some cases.
- **Optional** - This is an edge case. It should be generally understood that inputs are optional. So this should only be used when the all other fields on form are mandatory and that fact has been indicated at the top of the form. 
---
### Labels
- Every input should have a **label**.
- Labels appear above the field.
- Required fields are marked with a **red asterisk**.
---
### Description (Optional)
- Appears below the label.
- Provides context, examples, or instructions.
- Should be concise and plain language.
---
### Help Message vs Placeholder
- Help can appear below the input field as needed
- Help replaces the role of traditional **placeholder text**.
- Used for hints, guidance, or validation feedback. Keep it very short!
>
	**Accessibility Note:**
	- Placeholder text is generally **not recommended**.
	- Default browser placeholders (e.g., light gray text in Chrome) fail contrast requirements and can be mistaken for user-entered data.
	- Help messages are the preferred way to provide guidance.
---
### Icons
Inputs may include icons inside or adjacent to the field:
- **Left icon (inside field):** search, calendar, etc.
- **Right icon (inside field):** dropdown arrows for selects, eye icon for password visibility.
- **Outside icon (next to field):** used for additional context or actions (e.g., priority flags, AI helpers).
---
### Menus
- Inputs can trigger a **dropdown menu** below.
- Commonly used in selects or searchable fields.
- Menu indicators (chevron up/down) are typically shown on the right.
---
### Accessibility
- Always use **labels** (never rely on placeholder text alone).
- Maintain sufficient contrast for all text (labels, descriptions, help messages).
- Clearly indicate required fields with both a **visual marker** (red asterisk) and a **programmatic marker** (e.g., `aria-required`).
- Icons used for actions (e.g., clear, show/hide password) must have accessible labels.
- Inputs should generally be **stacked vertically**, not placed side by side, for better readability and intuitive tabbing order.
- **Maximum field width:** 540px (≈ **33.75rem**, assuming a 16px base). Fields should not exceed this width. They may scale narrower (e.g., on mobile).
---
### Implementation Notes
- Inputs should stretch or shrink to fit their container, but never exceed the maximum width.
- Spacing between label, input, and help text should be consistent.
- Error messages should use the **UI/Danger/Primary** color for text and borders.
- Disabled inputs should not accept focus or interaction.
---
## Human reference (designers)
