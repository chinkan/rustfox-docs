---
title: Getting started
description: What RustFox is, and the short path through setup, config, Telegram, the portal, and updates.
---

RustFox is an open-source, self-hosted Telegram AI assistant written in Rust. It runs in Telegram, calls sandboxed tools, and keeps conversation memory in SQLite. The default model path is OpenRouter. Ollama is the local option. Setup is a single binary plus a wizard, with an optional systemd, launchd, or Windows service.

Source, releases, and architecture decision records live in the [RustFox repository](https://github.com/chinkan/RustFox). This site is the English user guide. **Latest** is this docs repository's [`main`](https://github.com/chinkan/rustfox-docs) branch. A docs archive is added after a RustFox GitHub Release. Docs may lag the tag. Versioning is not a release gate.

## Path

1. [Setup](/rustfox-docs/setup/) — download a release binary, or build from source in the advanced section.
2. [Config](/rustfox-docs/config/) — fill the wizard, or edit `config.toml`.
3. Use it in [Telegram](/rustfox-docs/telegram/). Turn on the [portal](/rustfox-docs/portal/) when you want the browser UI.
4. [Update](/rustfox-docs/update/) with `/selfupgrade`, or by replacing the binary.

Spellings for the shell and the bot are on [Commands](/rustfox-docs/commands/). What the assistant can do is on [Features](/rustfox-docs/features/). Which provider is Active is on [Providers](/rustfox-docs/providers/). Locked failure symptoms are on [Troubleshooting](/rustfox-docs/troubleshooting/). What changed in recent releases is on [Changelog](/rustfox-docs/changelog/).

Before the first install, and before every update, confirm that no stray `rustfox` process is using the same fox-home (`RUSTFOX_HOME`, default `~/.rustfox`). The same rule is on [Setup](/rustfox-docs/setup/) and [Update](/rustfox-docs/update/).

`rustfox --version` and `rustfox -V` print the package version and exit 0. They do not start the bot or the scheduler. Prefer `rustfox status` when you want service health. A bare `rustfox` starts the bot, so it is the wrong health check.
