---
title: Install
description: Install a RustFox release binary or the source build script, then clear stray processes that share the fox-home.
---

Pick one install path. Stop anything already using the fox-home before you replace the binary. See [Before you install](#before-you-install).

## Option A — Download a release

Download an archive from the [Releases page](https://github.com/chinkan/RustFox/releases):

```bash
tar xzf rustfox-*.tar.gz
# Windows: expand the .zip from the Releases page instead
```

### Windows: Smart App Control and SmartScreen

- **Unsigned by default.** GitHub [Releases](https://github.com/chinkan/RustFox/releases) Windows zips are **unsigned** today. Treat every published `rustfox.exe` like any other unsigned build under Smart App Control.
- **Smart App Control (SAC).** Unsigned `rustfox.exe` builds are blocked on Windows with SAC turned on, and there is no "Run anyway" button. If you build from source and hit `os error 4551`, build on a machine that does not enforce SAC. Turning Smart App Control off is not the recommended fix. Turning it back on can require a Windows reset when optional diagnostic data is off.
- **SmartScreen.** An unsigned download may still show "Windows protected your PC". Click **More info**, then **Run anyway**. This is separate from SAC.
- **Code signing (planned, deferred).** [ADR-0027](https://github.com/chinkan/RustFox/blob/main/docs/adr/0027-windows-code-signing.md) locks Option A (SignPath Foundation) as the plan. Implementation is deferred: CI does not run SignPath or `REQUIRE_SIGNING` yet. Windows release binaries stay unsigned until the maintainer resumes that work. Planned credit when live: free code signing provided by SignPath.io, certificate by SignPath Foundation.
- **Privacy.** RustFox is self-hosted. Depending on your config it may talk to **Telegram** (bot API) and an LLM provider such as **OpenRouter** (or a local Ollama / OpenAI-compatible endpoint you choose). SignPath is not used at runtime. It would only sign the Windows release binary in CI if signing is later enabled.

## Option B — Build from source

The recommended script clones the repo, builds the embedded web UI, then installs the binary:

```bash
git clone https://github.com/chinkan/RustFox && cd RustFox
./scripts/build-all.sh --install
```

`build-all.sh` builds the web portal frontend first (`npm ci` + `vite build`), then the Rust binary. The portal UI is compiled into the binary, so build order matters. If you do not need the portal, plain `cargo install --path . --locked` still works. Details and the failure modes are on [Build from source](/rustfox-docs/build-from-source/).

## Before you install

Do this before the first install and before `cargo install` replaces a binary that is already running:

1. `rustfox stop` (or `systemctl --user stop rustfox`).
2. Confirm **no stray** `rustfox` process shares the same fox-home (`RUSTFOX_HOME` / `~/.rustfox`). Kill those strays. A service restart does not clear a bare or foreground process.
3. Install (option A or B above).
4. Start **once** (`rustfox start`, `systemctl --user start rustfox`, or a single bare start).

`rustfox --version` and `rustfox -V` print the package version and exit 0. They do not start the bot or the scheduler. Prefer `rustfox status` for health. A bare `rustfox` starts the bot.

One fox-home maps to an exclusive **flock** on `rustfox.lock` (one bot and scheduler). A second start with the same home fails fast. Different `RUSTFOX_HOME` values may run side by side. Service verbs (`status`, `restart`, `stop`, `install`) and `--setup` stay usable while a bot is running. Flock is a belt. It does not replace stop plus kill-all before install or upgrade. Decision record: [ADR-0046](https://github.com/chinkan/RustFox/blob/main/docs/adr/0046-register-start-time-single-instance-flock-and-safe-version.md) ([#289](https://github.com/chinkan/RustFox/issues/289)).

Next: [Usage](/rustfox-docs/usage/) for the wizard, run command, and background service. Upgrade rules are on [Upgrade & selfupgrade](/rustfox-docs/upgrade/).
