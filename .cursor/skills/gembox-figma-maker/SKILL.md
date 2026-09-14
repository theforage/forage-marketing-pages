---
name: gembox-figma-maker
description: HTML prototype → Figma capture via headless Playwright. On demand only — not for normal UI work.
---

# Gembox Figma maker

## When to load

Human asks to **put HTML into Figma**, **refresh a Figma frame**, or run **`generate_figma_design`**.

## Procedure (mandatory)

1. **Serve locally** — `python3 -m http.server <port>` from repo root. **`file://` is not supported.**
2. **`generate_figma_design`** — new or existing file; record **`captureId`**.
3. **Headless Playwright** submit against served URL + `captureId`. **Do not** use visible browser, `open`, or browser MCP for capture. Run ephemerally — **do not** check capture scripts into product repos.
4. **Poll** until **completed**; return Figma node link.
5. **Gate/layout:** before capture, unhide `<main>` and remove prototype gate (same as `?figma=1`).

## Design meaning

- HTML-import frames = pixel-faithful renders.
- Engineering handoff with Gembox **instances** = separate path (`use_figma` + auto layout + component library).

## Auto layout (Gembox Figma builds)

When building with Gembox component instances: use auto layout for structural regions; parent first; bind tokens where supported.
