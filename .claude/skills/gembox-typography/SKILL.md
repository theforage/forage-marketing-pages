---
name: gembox-typography
description: Gembox Typography — Figma + Notion. Load with parent gembox-design-system.
---

## Auto-generated

*Built 2026-05-26 from Notion + Figma. Say rebuild Typography skill to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-typography/SKILL.md`

# Typography
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
<td>**Typography page**</td>
<td>`3:3`</td>
</tr>
<tr>
<td>**Main component set**</td>
<td>`11443:100213` — `shared on Notion` (skip Deprecated)</td>
</tr>
</table>
Use `get_design_context` on the variant instance that matches your task — not generic HTML controls.
## Rules and usage (from design doc)
### Typeface: DM Sans
DM Sans is our primary typeface for all product interfaces. It's a low-contrast geometric sans-serif designed for excellent screen legibility.
### Characteristics
- **Open Counters**: Generous openings in letters enhance readability at small sizes
- **Tall x-height**: Provides good legibility and a modern appearance
- **Geometric Design**: Clean, simple letterforms with consistent shapes
- **Neutral Character**: Works well across different contexts
### Weights
We use two weights of DM Sans:
- **Normal**: For body text and most UI elements
- **Bold**: For headings and emphasis
> Note: While CSS standard "bold" is typically 700, our system uses 600 (Semi-Bold) as our functional "bold" weight for a softer appearance. This should be mapped correctly in Tailwind config.
	```javascript
module.exports = {
  theme: {
    fontWeight: {
      normal: 400,
      bold: 600, // Override default bold (700) to use Semi-Bold (600)
    }
  }
}

	```
### Size Scale
Our type scale is built on a modular progression based on the perfect fifth ratio (1.5), creating harmonious proportions between sizes.
<table header-row="true">
<tr>
<td>Size Name</td>
<td>px</td>
<td>rem</td>
<td>Scale Ratio</td>
</tr>
<tr>
<td>xs</td>
<td>12px</td>
<td>0.75</td>
<td>0.75 × base</td>
</tr>
<tr>
<td>sm</td>
<td>14px</td>
<td>0.875</td>
<td>0.875 × base</td>
</tr>
<tr>
<td>md</td>
<td>16px</td>
<td>1</td>
<td>Base size</td>
</tr>
<tr>
<td>lg</td>
<td>18px</td>
<td>1.125</td>
<td>1.125 × base</td>
</tr>
<tr>
<td>xl</td>
<td>22px</td>
<td>1.375</td>
<td>1.375 × base</td>
</tr>
<tr>
<td>2xl</td>
<td>26px</td>
<td>1.625</td>
<td>1.625 × base</td>
</tr>
<tr>
<td>3xl</td>
<td>34px</td>
<td>2.125</td>
<td>2.125 × base</td>
</tr>
<tr>
<td>4xl</td>
<td>46px</td>
<td>2.875</td>
<td>2.875 × base</td>
</tr>
<tr>
<td>5xl</td>
<td>58px</td>
<td>3.625</td>
<td>3.625 × base</td>
</tr>
<tr>
<td>6xl</td>
<td>70px</td>
<td>4.375</td>
<td>4.375 × base</td>
</tr>
</table>
### Line Height Scale
Line heights are optimized for DM Sans's characteristics and mapped to Tailwind's leading classes. Our line height values are based on accessibility requirements, optical principles, and DM Sans's tall x-height characteristics.
### Scientific Rationale
**1.5 for Body Text (xs-lg)**: Meets WCAG 2.1 Level AA accessibility requirements and accommodates DM Sans's tall x-height. Small text requires more vertical breathing room for optimal readability.
**1.3 for Medium Headings (xl-2xl)**: Provides visual distinction from body text while maintaining readability. Medium-sized headings need less vertical space than body text but more than large headings.
**1.2 for Large Headings (3xl-4xl)**: Creates cohesive heading blocks that don't appear to "float apart." Large text can support tighter line spacing due to increased character size.
**1.1 for Display Text (5xl-6xl)**: Maximizes visual impact while maintaining legibility. Display text requires minimal line spacing to create powerful, unified headline blocks.
<table header-row="true">
<tr>
<td>Tailwind Class</td>
<td>Value</td>
<td>Ratio</td>
<td>Use Case</td>
</tr>
<tr>
<td>leading-none</td>
<td>1</td>
<td>1.0</td>
<td>Very tight spacing, used sparingly for specific UI elements</td>
</tr>
<tr>
<td>leading-tight</td>
<td>1.1</td>
<td>1.1</td>
<td>Display headlines (5xl, 6xl)</td>
</tr>
<tr>
<td>leading-snug</td>
<td>1.2</td>
<td>1.2</td>
<td>Large headings (3xl, 4xl)</td>
</tr>
<tr>
<td>leading-normal</td>
<td>1.3</td>
<td>1.3</td>
<td>Medium headings (xl, 2xl)</td>
</tr>
<tr>
<td>leading-relaxed</td>
<td>1.5</td>
<td>1.5</td>
<td>All body text (xs, sm, md, lg)</td>
</tr>
<tr>
<td>leading-loose</td>
<td>1.8</td>
<td>1.8</td>
<td>Specialized content requiring extra spacing</td>
</tr>
</table>
### Text Styles
This comprehensive table defines our complete typography system. Each style has precise specifications for size, line height, weight, letter spacing, case, and usage.
<table header-row="true">
<tr>
<td>Style Name</td>
<td>Size</td>
<td>Line Height</td>
<td>Weight</td>
<td>Letter Spacing</td>
<td>Case</td>
<td>Usage</td>
</tr>
<tr>
<td>Callout</td>
<td>xs (12px)</td>
<td>leading-relaxed (1.5)</td>
<td>Normal</td>
<td>0.05em</td>
<td>UPPERCASE</td>
<td>Labels, badges, tags, annotations</td>
</tr>
<tr>
<td>Body XS</td>
<td>xs (12px)</td>
<td>leading-relaxed (1.5)</td>
<td>Normal</td>
<td>0</td>
<td>Sentence case</td>
<td>Legal text, footnotes, captions</td>
</tr>
<tr>
<td>Body SM</td>
<td>sm (14px)</td>
<td>leading-relaxed (1.5)</td>
<td>Normal</td>
<td>0</td>
<td>Sentence case</td>
<td>Secondary text, UI labels, metadata</td>
</tr>
<tr>
<td>Body MD</td>
<td>md (16px)</td>
<td>leading-relaxed (1.5)</td>
<td>Normal</td>
<td>0</td>
<td>Sentence case</td>
<td>Primary body text, default for most content</td>
</tr>
<tr>
<td>Body LG</td>
<td>lg (18px)</td>
<td>leading-relaxed (1.5)</td>
<td>Normal</td>
<td>0</td>
<td>Sentence case</td>
<td>Enhanced body text, featured content</td>
</tr>
<tr>
<td>Title XL</td>
<td>xl (22px)</td>
<td>leading-normal (1.3)</td>
<td>Bold</td>
<td>-0.01em</td>
<td>Title Case</td>
<td>Minor headings (H3, H4)</td>
</tr>
<tr>
<td>Title 2XL</td>
<td>2xl (26px)</td>
<td>leading-normal (1.3)</td>
<td>Bold</td>
<td>-0.01em</td>
<td>Title Case</td>
<td>H2 headings, section headers</td>
</tr>
<tr>
<td>Title 3XL</td>
<td>3xl (34px)</td>
<td>leading-snug (1.2)</td>
<td>Bold</td>
<td>-0.015em</td>
<td>Title Case</td>
<td>H1 headings, page titles</td>
</tr>
<tr>
<td>Hero 4XL</td>
<td>4xl (46px)</td>
<td>leading-snug (1.2)</td>
<td>Bold</td>
<td>-0.02em</td>
<td>Title Case</td>
<td>Featured page titles, major headings</td>
</tr>
<tr>
<td>Hero 5XL</td>
<td>5xl (58px)</td>
<td>leading-tight (1.1)</td>
<td>Bold</td>
<td>-0.02em</td>
<td>Title Case</td>
<td>Hero headlines, feature titles</td>
</tr>
<tr>
<td>Hero 6XL</td>
<td>6xl (70px)</td>
<td>leading-tight (1.1)</td>
<td>Bold</td>
<td>-0.025em</td>
<td>Title Case</td>
<td>Display headlines, brand moments</td>
</tr>
</table>
### Line Length
Text containers must adhere to maximum line length requirements to ensure readability:
- **Maximum width**: 45rem (720px)
- This ensures optimal line length for readability across all device sizes
## Human reference (designers)
