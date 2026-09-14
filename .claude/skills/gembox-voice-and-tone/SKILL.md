---
name: gembox-voice-and-tone
description: Gembox Voice and Tone — documentation skill. Load with parent gembox-design-system.
---

## Auto-generated

*Built 2026-05-26 from Notion design doc. Say rebuild Voice and Tone skill to refresh.*
**Gembox start copies this block to:** `.cursor/skills/gembox-voice-and-tone/SKILL.md`

# Voice and Tone
Load parent `gembox-design-system` first.
## Guidance
> This page sets specific voice and tone expectations for our product.
---
## Why this page exists
Forage helps people build real skills toward real roles. Our product copy should sound confident, respectful, and direct but never performative or condescending. People should find the Forage product to be friendly and understand what we offer, what we need from them, and what happens next.
## Greet the user by name
When you know the user's name or preferred identifier in context (for example after sign-in), greet them by name on welcome surfaces, progress nudges, and confirmations. Use names sparingly so greetings stay sincere, not repetitive. Do not infer a name from partial or ambiguous data.
## Voice (who we sound like)
- **Human and professional:** We speak like a thoughtful coach or program lead. We are warm, not cutesy.
- **Plain language first:** Prefer everyday words; define jargon the first time it appears if students must see it. Target about **eighth-grade / about 14-year-old** reading level on most surfaces unless a flow legally or clinically needs denser language—short sentences, familiar words, and one main idea per sentence beat cleverness.
- **Action-oriented:** Prefer verbs that describe what the user can do next.
- **Inclusive by default:** Avoid idioms that do not translate well; avoid stereotypes; do not assume background knowledge beyond what the screen already taught.
## Tone (how we modulate)
Adjust warmth and brevity by context. Empty states can be a little more encouraging. Errors should be calmer and more precise. Success should be brief and specific.
### Audience and register
Our audience skews younger. An informal tone is fine when it stays respectful, especially in lighter moments. Serious flows (opportunities, grades, compliance, bad errors) stay straightforward and calm.
### Reading level and clarity (accessibility)
Aim for roughly **eighth-grade readability** (about **14-year-old** reading level) wherever people are learning what to do next. Prefer **short sentences**, **common words**, and **plain structure** so copy stays accessible to people who are skimming, tired, or using assistive tech. Warmth is good; **performative quirkiness** or "random" energy is not—if a line sounds like a bit or an inside joke, rewrite it so the meaning still lands without the bounce.
## Regional spelling and vocabulary (one global string set)
We ship the **same customer-visible strings** in the **United States, United Kingdom, and Australia** (and beyond), and we do **not** yet have **full per-locale string localization** in the app. Until we do, writers should **avoid wording that forces a regional English fight** or that makes one market look like the mistake.
**Principles**
- Prefer **synonyms or phrasing** that do not hinge on Atlantic spelling differences when you can say the same thing without picking **-our** vs **-or**, **-ise** vs **-ize**, **-re** vs **-er**, and so on.
- If you **must** use a word that splits by region, **pick one spelling and reuse it** across that screen or flow, and align with **content / design ops** on any **house default** for the codebase so we do not ship **mixed** English in one view.
- Avoid **school- or government-specific labels** that mean different things by country (for example terms for grades or exams) unless the product already localizes that concept.
**High-friction spelling pairs** (treat as "stop and think" before shipping global copy): **color / colour**, **center / centre**, **organize & organization / organise & organisation**, **recognize / recognise**, **behavior / behaviour**, and similar **-ize / -ise**, **-or / -our**, **-er / -re** patterns.
When two regions use **different everyday words** for the same idea (not only spelling), prefer language that is **widely understandable** across US / UK / AU, or that matches how the **feature is named elsewhere in the product**, and stay **consistent within the screen**.
## Capitalization (Forage rule)
Use title case for:
- **Headlines** on screens and major section headings
- **Primary buttons** and high-emphasis calls to action
- **Field labels** (form labels and comparable control labels)
**Reference:** Apple's Human Interface Guidelines recommend **title-style capitalization** for short control labels such as buttons. See Apple's [Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons) guidance (including the link to Apple's style guide from that page).
## Errors and validation copy
- Say **what went wrong** in plain language (no blame).
- Always pair the problem with a **next step**: what to change, retry, or who to contact, plus **how** (link, email path, or button).
- Avoid passive dead-ends such as "Invalid entry" with no hint **which** field or **which** rule failed.
## Emojis
Across major product design systems, the prevailing advice is restraint with emoji. That matters most where people rely on **text** to understand what to do next. Emoji can communicate emotion and shorthand meaning very efficiently, but they are not dependable for every user: low vision, different assistive-tech announcements, and cultural differences in interpretation all matter. When in doubt, say it in words.
Forage default: Avoid emoji in headlines and page titles. Never use emoji on buttons. If emoji ever appears in supporting body copy, use it rarely, keep the meaning clear in words alone, and check accessibility and localization before shipping.
## Punctuation
Do not use **stacked or repeated punctuation** for emphasis (for example multiple exclamation points, multiple question marks, or chaotic mixes like `?!?!`). Use **one** ending mark per sentence. If you need more energy, rewrite the sentence or split it—do not add more marks.
## Human-authored copy for the site and product
All text we add to our website and product should be authored and owned by humans. Do not paste from other organizations' documentation. Do not publish straight from an AI draft without a careful human pass. Models can help brainstorm or reorganize ideas. They do not replace judgment on accuracy, tone, inclusivity, or legal sensitivity.
There is broad consensus in the industry on principles such as clarity, calm errors, and inclusive language. Consensus is not permission to reuse someone else's sentences. Write fresh copy so we respect others' work and avoid plagiarism or trademark risk.
## Human reference
