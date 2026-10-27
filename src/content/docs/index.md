---
title: Getting started
description: What RustFox is, and the shortest path from install to a running Telegram assistant.
---

RustFox is an open-source, self-hosted Telegram AI assistant written in Rust. It runs in Telegram, calls sandboxed tools, and keeps conversation memory in SQLite. The default model path is OpenRouter. Ollama is the local option. Setup is a single binary plus a wizard, with an optional systemd, launchd, or Windows service.

Source, releases, and architecture decision records live in the [RustFox repository](https://github.com/chinkan/RustFox). This site is the English user guide. **Latest** is this docs repository's [`main`](https://github.com/chinkan/rustfox-docs) branch. A docs archive is added after a RustFox GitHub Release. Docs may lag the tag. Versioning is not a release gate.

## Path

1. [Install](/rustfox-docs/install/) a release binary, or [build from source](/rustfox-docs/build-from-source/).
2. [Configure and run](/rustfox-docs/usage/) with the setup wizard, then optionally install a background service.
3. [Upgrade](/rustfox-docs/upgrade/) with `/selfupgrade`, or by a manual upgrade. Stop the service and kill stray processes that share the same fox-home first.

Before the first install, and before every upgrade, confirm that no stray `rustfox` process is using the same fox-home (`RUSTFOX_HOME`, default `~/.rustfox`). The same rule is on [Install](/rustfox-docs/install/) and [Upgrade & selfupgrade](/rustfox-docs/upgrade/).

## Check the binary without starting the bot

`rustfox --version` and `rustfox -V` print the package version and exit 0. They do not start the bot or the scheduler.

Prefer `rustfox status` (or `systemctl --user status rustfox`) when you want service health. A bare `rustfox` starts the bot, so it is the wrong health check.

Operator detail beyond these pages lives in [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md) in the RustFox repository.
