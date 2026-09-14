## Auto-generated

*Built 2026-05-26 from Notion + Figma. Say rebuild Colors skill to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-colors/SKILL.md`
---
name: gembox-colors
description: Gembox Colors — Figma + Notion. Load with parent gembox-design-system.
---
# Colors
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
<td>**Colors page**</td>
<td>`2:17`</td>
</tr>
<tr>
<td>**Main component set**</td>
<td>`1231:12680` — `Forage Brand Colors` (skip Deprecated)</td>
</tr>
</table>
Use `get_design_context` on the variant instance that matches your task — not generic HTML controls.
## Rules and usage (from design doc)
### UI Colors
UI colors are the **primary set to use in product UI**. They are purpose-driven names (Text, Action, Success, Warning, Danger, Info, Accent, etc.) that point to specific Core values.
> Guideline: In most cases, use UI colors. They carry meaning, are consistent, and can be updated centrally if we ever adjust their Core mappings.
**Families include:**
- **Text / Subtle / Disabled** – for body copy and secondary states
- **Background / Hover / Border** – for surfaces and structural elements
- **Action** – generally reserved for interactive elements (buttons, links, CTAs)
- **Success / Warning / Danger / Info** – for status and feedback states
- **Accent** – violet-based highlights
- **Brand** – the main brand identity color
- **White** – utility color
---
### Core Colors
Core colors are **raw color scales**. They have **no inherent meaning**. Each scale (e.g., Gray, Navy, Green, Yellow, Red, Teal, Violet, Lime) includes 10 steps (`000–900`) created from adjustments in hue, saturation, and lightness.
- Core colors are the “paint buckets.”
- UI colors are the **labels** that give those buckets meaning.
> Example: UI/Danger/Primary is an alias to a shade in the Core Red palette. The Core Red scale itself does not mean “danger” until it is referenced through the UI color system.
---
### Accessibility
- **Primary + Background pairs** in UI colors are designed for contrast. Use them together where possible.
- **Text** is dark gray (not pure black) to reduce visual harshness.
- **Disabled text** (gray 600) should be used carefully, as it may not always pass contrast checks.
- **Action colors** are generally used for interactivity. Using them for non-interactive elements may cause confusion.
---
### Interaction & States
Colors can shift slightly for interaction states:
- **Hover:** generally one step darker
- **Active:** sometimes an additional step darker for pressed states
- **Focus:** indicated by the system focus ring layered on top
---
### Guidelines in Practice
- Use **UI colors** for all functional UI elements.
- Core colors should generally only be used for decorative or marketing purposes.
- Stick with **UI family pairings** (Primary + Background) for semantic clarity.
- Using aliases (UI colors) keeps the system flexible—if a Core mapping changes, the UI stays consistent without updates in code.
---
### Code for Figma / JSON
Below is the JSON configuration for our color system. This defines Core values and UI aliases so designers, developers, and QA can work from the same source of truth.
```json
{
  "UI": {
    "Text": { "alias": "Core/Gray/900" },
    "Subtle": { "alias": "Core/Gray/700" },
    "Disabled": { "alias": "Core/Gray/600" },
    "Border": { "alias": "Core/Gray/300" },
    "Hover": { "alias": "Core/Gray/100" },
    "Background": { "alias": "Core/Gray/000" },

    "Danger/Background": { "alias": "Core/Red/000" },
    "Danger/Support": { "alias": "Core/Red/700" },
    "Danger/Primary": { "alias": "Core/Red/800" },
    "Danger/Emphasis": { "alias": "Core/Red/900" },

    "Warn/Background": { "alias": "Core/Yellow/000" },
    "Warn/Support": { "alias": "Core/Yellow/700" },
    "Warn/Primary": { "alias": "Core/Yellow/800" },
    "Warn/Emphasis": { "alias": "Core/Yellow/900" },

    "Success/Background": { "alias": "Core/Green/000" },
    "Success/Support": { "alias": "Core/Green/700" },
    "Success/Primary": { "alias": "Core/Green/800" },
    "Success/Emphasis": { "alias": "Core/Green/900" },

    "Info/Background": { "alias": "Core/Teal/000" },
    "Info/Support": { "alias": "Core/Teal/300" },
    "Info/Primary": { "alias": "Core/Teal/600" },
    "Info/Emphasis": { "alias": "Core/Teal/700" },

    "Action/Background": { "alias": "Core/Navy/000" },
    "Action/Support": { "alias": "Core/Navy/200" },
    "Action/Primary": { "alias": "Core/Navy/400" },
    "Action/Emphasis": { "alias": "Core/Navy/500" },

    "Accent/Background": { "alias": "Core/Violet/000" },
    "Accent/Support": { "alias": "Core/Violet/400" },
    "Accent/Primary": { "alias": "Core/Violet/600" },
    "Accent/Emphasis": { "alias": "Core/Violet/900" },

    "Brand": { "alias": "Core/Navy/500" },
    "White": { "alias": "Core/White" }
  },

  "Core/Gray": {
    "000": "#FBFBFB",
    "100": "#F7F7F7",
    "200": "#EFEFEF",
    "300": "#E4E4E4",
    "400": "#D6D6D6",
    "500": "#BDBDBD",
    "600": "#949494",
    "700": "#757575",
    "800": "#5F5F5F",
    "900": "#3F3F3F"
  },

  "Core/Navy": {
    "000": "#F6FAFE",
    "100": "#C9DEF8",
    "200": "#76ADEB",
    "300": "#4D95E5",
    "400": "#1C6AB3",
    "500": "#134C8B",
    "600": "#113F78",
    "700": "#0F3867",
    "800": "#0C2E55",
    "900": "#0A2442"
  },

  "Core/Green": {
    "000": "#FBFEFC",
    "100": "#DBFAE0",
    "200": "#B2F1C8",
    "300": "#8CE996",
    "400": "#69DB7C",
    "500": "#51CF66",
    "600": "#40C057",
    "700": "#37B34D

## Human reference (designers)

---

## AI notes

```
