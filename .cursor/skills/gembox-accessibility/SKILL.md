## Auto-generated

*Built 2026-05-26 from Notion design doc. Say rebuild Accessibility skill to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-accessibility/SKILL.md`
---
name: gembox-accessibility
description: Gembox Accessibility — documentation skill. Load with parent gembox-design-system.
---
# Accessibility
Load parent `gembox-design-system` first.
## Guidance
> "Most people are taught that 'web accessibility means that people with disabilities can use the Web'—the official definition from the W3C. This is wrong. Web accessibility means that people can use the web."
	— Anne Gibson, *Reframing Accessibility for the Web*
---
## Why Accessibility Matters
Forage's Gembox design system is built with accessibility at its core, ensuring that all users — regardless of ability — can discover, access, and use our products effectively.
According to the World Health Organization, approximately **16% of the world's population has a disability**, not including temporary or situational impairments.
### Designing for accessibility benefits everyone:
- **Permanent disabilities**: ensures equal access to education and opportunity
- **Temporary limitations**: maintains usability during challenges (e.g., broken arm, lost glasses)
- **Situational constraints**: improves usability in suboptimal conditions (e.g., sunlight, noise)
> When you consider accessibility from the beginning and incorporate it throughout the design process, it becomes a built-in inclusive practice — not an afterthought.
## Our Accessibility Principles
Gembox principles align with WCAG's core principles and draw from inclusive design and usability research.
### **Perceivable**
Information and interface elements must be presented in ways users can perceive.
We ensure:
- Text alternatives for all non-text content
- Captions and alternatives for multimedia
- Content adaptable in different formats
- Enhanced visual and auditory access options
### **Operable**
User interface components and navigation must be operable by all users.
We ensure:
- Full keyboard accessibility
- Adequate time to read and interact with content
- No seizure-inducing or physically adverse content
- Navigable and consistent UI patterns
### **Understandable**
Information and operation of the UI must be clear and predictable.
We ensure:
- Readable, comprehensible components
- Predictable design and interaction
- Support for error prevention and correction
## Design Guidelines
### **Color and Contrast**
- All color combinations meet **WCAG 2.1 AA** contrast standards:
	- 4.5:1 for regular text
	- 3:1 for large text and UI graphics
- Never rely on color alone for meaning — always pair with:
	- Text labels
	- Icons/symbols
	- Patterns or shape variation
### **Typography and Readability**
- Text resizable up to 200% without loss of content or functionality
- Line length capped at ~80 characters
- Clear typographic hierarchy
- Left-aligned body text for readability
### **Keyboard Navigation and Focus**
- Logical tab order across all interfaces
- Visible, high-contrast focus indicators
- No keyboard traps
- Skip links for bypassing repeated content
### **Screen Readers and Assistive Tech**
- Semantic HTML structures
- Alt text for all images
- Accessible names for interactive elements
- ARIA attributes used where necessary
### **Forms and Input**
- Properly associated labels
- Clear, actionable error messages
- Logical grouping of related fields
- Never rely solely on placeholder text as a label
### **Motion and Animation**
- All animations respect user `prefers-reduced-motion` settings
- No flashing content (≤ 3 flashes/sec)
- Controls available to pause or hide movement
- Animations are purposeful and enhance usability
## Testing for Accessibility
Gembox follows **WCAG 2.1 AA** as a baseline but goes beyond compliance by testing usability.
### Our process includes:
- Automated audits with accessibility testing tools
- Manual keyboard-only navigation tests
- Manual reviews against WCAG success criteria
> We prioritize designing for people, not just for checkboxes
## Resources for Designers and Developers
- [Nielsen Norman Group Accessibility Guidelines](https://www.nngroup.com/topic/accessibility/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [UK Government Accessibility Posters](https://accessibility.blog.gov.uk/2016/09/02/accessibility-posters-now-available-in-english-french-german-and-italian/)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
## Human reference
