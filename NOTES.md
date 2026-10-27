# Notes

## `starlight-versions` pin and breakage risk

Pinned to **`starlight-versions@0.10.1`** (folder-archive model). Do not float this dependency.

The plugin is early development. Upstream says to expect frequent updates and breaking changes. It is not a Starlight built-in. The published peer range is `@astrojs/starlight >= 0.39.0`, and the package ships TypeScript source rather than a built artifact. This site runs it on Astro 7.4.2 and Starlight 0.42.7. A Starlight or plugin upgrade can break the build, the version switcher, or sidebar generation. Re-test `npm run build` before bumping the pin.

The config schema rejects an empty `versions` array (`At least one version of the documentation must be defined.`). On `dev` or `build`, a configured slug that has no `src/content/docs/<slug>/` directory is filled by copying the current docs. That would invent a release archive. This repo therefore keeps a scaffold only:

- `src/content/docs/archive-placeholder/`
- `src/content/versions/archive-placeholder.json`

**Latest / current** is this repository's `main`. The scaffold label is "No release archive yet". `starlight-llms-txt` 0.12 applies `exclude` only to `llms-small.txt`, so the scaffold page is omitted there and still appears in `llms-full.txt`. Its version `redirect` is `root`, because the scaffold has only an index page. `same-page` would 404 (for example `/update/` → `/archive-placeholder/update/`). Add a real archive after a RustFox GitHub Release tag, one docs version at a time, and choose `same-page` only when that archive has the same pages. Docs lag is expected. Docs versioning is not a release gate.

## ADRs

Architecture decision records stay in the RustFox repository under `docs/adr/` for contributors. Published pages summarize behavior in plain language and do not link ADR bodies. This site does not vendor the ADR tree.
