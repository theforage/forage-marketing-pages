# /next project config

## Context doc

Path: `docs/CONTEXT.md`

## Changelog

Path: `docs/CHANGELOG.md`
Order: newest first (insert each new entry immediately after the file header)
Baseline: first tracked session is commit `3826ee8` (26 July 2026)

### Entry template

```markdown
## <day month year> — <commit subject or "Session wrap-up (no commit)">

**Commit:** `<short hash>` or _none_  
**Pushed:** yes | no

- <3–6 bullets: what changed from a product/user perspective — outcomes and behavior, not file names>
- <focus on what a teammate or stakeholder would care about after an hour of work>

---
```

Write bullets for a **shareable session summary** (stakeholder-friendly), not a git diff. Pull detail from `git show HEAD` and the context doc when helpful.

## Confirmation links

Always include in the final /next summary:

- Repo: https://github.com/theforage/forage-gembox-prototypes
- GitHub Pages: https://theforage.github.io/forage-gembox-prototypes/
- Changelog: `docs/CHANGELOG.md` (latest entry at top)
