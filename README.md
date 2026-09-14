# Forage Marketing Pages

Static **marketing page prototypes** for Forage product and design review, built with Gembox, the Forage Design System.

**Repo:** github.com/theforage/forage-marketing-pages

Sibling of [forage-gembox-prototypes](https://github.com/theforage/forage-gembox-prototypes). Same infrastructure: shared demo toolbar, a cover page linking to every page, Gembox tokens/fonts, and the Gembox skills.

## Run locally

Serve the **whole repo** from the root so the landing page, every page, and the shared toolbar (**All prototypes** + **Prototype internal use only**) all work. Opening HTML over `file://` will **not** follow those links. The toolbar is defined once in `shared/` — add new toolbar buttons there, not in each page.

### Option A — one command (no Node)

```bash
./serve.sh
```

Then open <http://localhost:8000/>. Custom port: `./serve.sh 8080`. Stop with Ctrl+C.

### Option B — npx

```bash
npx --yes serve .
```

Then open the URL it prints (usually <http://localhost:3000/>).

## Add a new page

1. Duplicate `starter-page/` to a new folder (e.g. `product-launch/`).
2. Add a row to the table in `index.html` linking to it.
3. Add the folder to the `cp -r` list in `.github/workflows/deploy-pages.yml`.

Each page loads the shared toolbar with `<script src="../shared/prototype-toolbar.js"></script>` and Gembox tokens from `../config/gembox-tokens.css`.

## Layout

| Path | What |
|------|------|
| `index.html`, `landing.css` | Cover page linking to every marketing page |
| `starter-page/` | Starter page to duplicate |
| `shared/` | Shared demo toolbar (`prototype-toolbar.js` / `.css`) |
| `config/gembox-tokens.css` | Gembox design tokens |
| `assets/landing/` | Logos and icons for the cover page |
| `.claude/skills/`, `.cursor/skills/` | Gembox design-system skills |

## GitHub Pages

Deploys via **Deploy static marketing pages to GitHub Pages** on push to `main`. If you only see the README, set **Settings → Pages → Build and deployment** to **GitHub Actions**.

**Gembox / Cursor:** Skills live under `.cursor/skills/` and `.claude/skills/`. Golden rule: never build UI that is not in the design system.
