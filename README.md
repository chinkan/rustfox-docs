# rustfox-docs

English user docs for [RustFox](https://github.com/chinkan/RustFox), published with [Starlight](https://starlight.astro.build/) on GitHub Pages.

Public site (no custom domain): <https://chinkan.github.io/rustfox-docs/>

**Latest** docs are this repo's `main` branch. Architecture decision records stay in the RustFox repo under [`docs/adr/`](https://github.com/chinkan/RustFox/tree/main/docs/adr). This site links them. It does not copy the ADR tree.

## Stack

| Package | Pin |
| --- | --- |
| `astro` | 7.4.2 |
| `@astrojs/starlight` | 0.42.7 |
| `starlight-llms-txt` | 0.12.0 (peer `@astrojs/starlight` >= 0.41; emits `llms.txt`, `llms-full.txt`, `llms-small.txt`) |
| `starlight-versions` | **0.10.1** (pinned) |

`starlight-versions` is an early plugin and can break on upgrade. Read [NOTES.md](NOTES.md) before bumping it. Node.js **22.12** or newer is required.

## Local commands

```bash
npm install
npm run dev      # http://localhost:4321/rustfox-docs/
npm run build    # static site in dist/
npm run preview  # serve dist/

# pnpm works from package.json as well
pnpm install
pnpm dev
pnpm build
pnpm exec astro dev
```

`npm run astro -- --help` lists the Astro CLI.

## GitHub Pages

The site is deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main` (`withastro/action` and `actions/deploy-pages`).

In the repository settings, open **Pages** and set **Build and deployment → Source** to **GitHub Actions**. There is no custom domain.
