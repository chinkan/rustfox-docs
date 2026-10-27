---
title: How to contribute
description: Open a RustFox code pull request, or a rustfox-docs content pull request. ADRs stay in the RustFox repository.
---

Two repositories. Code and product decisions go to RustFox. This site's pages go to rustfox-docs. Architecture decision records stay in RustFox [`docs/adr/`](https://github.com/chinkan/RustFox/tree/main/docs/adr). This page does not copy them.

## RustFox code

Repository: [chinkan/RustFox](https://github.com/chinkan/RustFox). The project license is MIT. The steps below match [CONTRIBUTING.md](https://github.com/chinkan/RustFox/blob/main/CONTRIBUTING.md).

- **Bugs or feature requests.** Open an [issue](https://github.com/chinkan/RustFox/issues).
- **Code or in-repo docs.** Fork, branch from `main`, and keep the change focused.
- **Before you open the pull request.** Run `cargo fmt`, `cargo clippy -- -D warnings`, and `cargo test`.
- **Pull request.** Push and open it against `main`. Say what changed and why.
- **Screenshots.** If you add a screenshot or GIF to the README or other docs, give the image descriptive `alt` text.

A decision that needs a record is an ADR in that `docs/adr/` tree, in the RustFox repository. Do not add the ADR to this site.

## rustfox-docs content

Repository: [chinkan/rustfox-docs](https://github.com/chinkan/rustfox-docs). These pages are the English user guide (Getting started, How to use, Commands, How to contribute).

1. Fork and branch from `main`.
2. Edit Markdown under `src/content/docs/`. The sidebar is the `sidebar` array in `astro.config.mjs`.
3. Write in-page links with the `/rustfox-docs` prefix, for example `[Setup](/rustfox-docs/setup/)`. Starlight 0.42 does not rewrite Markdown links.
4. Run `npm install` if you need to, then `npm run build`. The build has to exit 0.
5. Open a pull request against `main`. **Edit this page** on the published site opens the same repo.

Link an ADR when a page needs the decision. Do not vendor the ADR tree into `src/content/docs/`. The public site is English-only. GUIDE, the ADR list, and architecture notes stay in the RustFox repository; link out instead of adding them to the sidebar.

Stack pins and the `starlight-versions` placeholder are in [NOTES.md](https://github.com/chinkan/rustfox-docs/blob/main/NOTES.md). Do not bump those pins in a content-only change.
