# Notes

## `starlight-versions` pin and breakage risk

Pinned to **`starlight-versions@0.10.1`** (folder-archive model). Do not float this dependency.

The plugin is early development. Upstream says to expect frequent updates and breaking changes. It is not a Starlight built-in. The published peer range is `@astrojs/starlight >= 0.39.0`, and the package ships TypeScript source rather than a built artifact. This site runs it on Astro 7.4.2 and Starlight 0.42.7. A Starlight or plugin upgrade can break the build, the version switcher, or sidebar generation. Re-test `npm run build` before bumping the pin.

The config schema rejects an empty `versions` array (`At least one version of the documentation must be defined.`). On `dev` or `build`, a configured slug that has no `src/content/docs/<slug>/` directory is filled by copying the current docs. That would invent a release archive. This repo keeps a **folder archive** per RustFox GitHub Release tag:

- **Latest / current** — this repository's `main` (tip after the latest archived tag; today post-**v1.0.8** / next train).
- **Archived** — `src/content/docs/v1.0.8/` plus `src/content/versions/v1.0.8.json`, slug **`v1.0.8`**, label **`v1.0.8`**, `redirect: same-page` because the archive has the same page set as Latest.

Starlight slugifies folder segments with `github-slugger`, so a directory named `v1.0.8` becomes `v108` unless each archived page sets an explicit frontmatter `slug:` (`v1.0.8`, `v1.0.8/setup`, …). Keep that pattern for future dotted release tags.

`starlight-llms-txt` 0.12 applies `exclude` only to `llms-small.txt`, so archived pages are omitted there and still appear in `llms-full.txt`. `/archive-placeholder/` redirects to `/v1.0.8/`. Add the next archive after a RustFox GitHub Release tag, one docs version at a time. Docs lag is expected. Docs versioning is not a release gate.

## ADRs

Architecture decision records stay in the RustFox repository under `docs/adr/` for contributors. Published pages summarize behavior in plain language and do not link ADR bodies. This site does not vendor the ADR tree.
