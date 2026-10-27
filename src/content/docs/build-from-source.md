---
title: Build from source
description: Build the RustFox binary with the portal embedded, and avoid the two compile-order traps.
---

Build from a clone of [chinkan/RustFox](https://github.com/chinkan/RustFox). Clear stray processes that share the fox-home before `cargo install` replaces a live binary. The stop and kill-all steps are on [Install](/rustfox-docs/install/).

## One-command build

```bash
./scripts/build-all.sh                # web (vite) → dist → cargo build --release
./scripts/build-all.sh --install      # ...then install to ~/.cargo/bin/rustfox
./scripts/build-all.sh --skip-web     # reuse existing web/dist (Rust only)
./scripts/build-all.sh --profile dev  # debug build (faster compile)
```

The portal frontend is embedded into the binary at compile time (`include_dir!("web/dist")`). The script exists because of two traps:

1. **Build order.** Cargo before `vite build` embeds a stale or empty dist, and the portal renders a white screen. `build-all.sh` runs the web build first and fails if `web/dist/index.html` is missing.
2. **Stale embedding.** `include_dir!` has no Cargo change-fingerprint, so updating dist alone does not trigger a rebuild. The script touches the embedding module to force re-embedding.

If you do not need the portal, `cargo install --path . --locked` still produces a binary.

## Portal preview without Telegram or an LLM

```bash
cargo run --release --example portal_preview   # serves the real embedded UI + seeded demo data
```

## End-to-end regression gate

From the RustFox repository:

```bash
node e2e-verify.mjs     # Playwright: login → chat SSE → agents → memory → tasks → settings
```

That gate covers portal pages against the embedded-dist binary, including a stub-dist control that catches a white screen. CI builds the web UI before Cargo tests. The same sequence applies to release builds.

After the binary is installed, continue with [Usage](/rustfox-docs/usage/).
