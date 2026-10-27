---
title: Commands
description: RustFox OS CLI and the Active Telegram bot commands. Planned supervisor slash commands are not shipped.
---

Two lists: the shell, then the Telegram bot. Descriptions match the shipped CLI and [GUIDE.md — Bot commands](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#bot-commands). This page does not add commands beyond that inventory.

## OS CLI

- **Bare `rustfox` and `rustfox run`.** Foreground start. `run` is the same as a bare `rustfox`. Both start the bot. They are the wrong health check.
- **`rustfox --setup`.** Browser wizard. **`rustfox --setup --cli`** is the terminal wizard. How to answer it is on [Config](/rustfox-docs/config/).
- **`rustfox --config <path>`.** Use that config file for this process. A positional path that is not a verb does the same thing (`rustfox /path/to/config.toml`, or `rustfox run /path/to/config.toml`). Where RustFox looks when you omit a path is on [Config](/rustfox-docs/config/).
- **`rustfox install`.** Write the OS service (systemd user unit, launchd agent, or Windows service) and start it. **`rustfox uninstall`** stops the service, then removes the unit. **`rustfox remove`** is a deprecated alias of `uninstall`. It still runs and prints a note to use `uninstall`.
- **`rustfox status`**, **`start`**, **`stop`**, and **`restart`.** Service control. They stay usable while a bot is running. They are not a second bot start. `restart` restarts the current service. It does not upgrade. Upgrade is on [Update](/rustfox-docs/update/). If no service is installed, `start`, `stop`, `restart`, and `uninstall` fail and tell you to run `install` first.
- **`rustfox --version` and `rustfox -V`.** Print the package version and exit 0. They do not start the bot or the scheduler. Prefer `rustfox status` for health. Detail is on [Update](/rustfox-docs/update/).
- **`--help` and `-h` are not in this list.**
- **`rustfox --service <verb>`.** Deprecated wrapper around the same verbs (`install`, `uninstall`, `remove`, `status`, `start`, `stop`, `restart`). It still runs and prints a note. Prefer the bare verb (`rustfox install`, not `rustfox --service install`).

**Kill-stray / fox-home.** Before install or any upgrade, stop the service and kill stray `rustfox` processes that share the same fox-home (`RUSTFOX_HOME`, default `~/.rustfox`). A service restart does not clear a bare or foreground process. On a normal start, an exclusive flock on `rustfox.lock` in that home makes a second start fail fast. Flock is a belt. It does not replace stop plus kill-stray. Steps are on [Setup](/rustfox-docs/setup/) and [Update](/rustfox-docs/update/).

## Telegram bot commands

Active commands only. Each one is available to users already on that bot's allowlist.

| Command | What it does |
| --- | --- |
| `/start` | Welcome message and the command list |
| `/clear` | Clear conversation history |
| `/tools` | List available tools |
| `/skills` | List loaded skills |
| `/verbose` | Toggle live tool-call progress |
| `/queryrewrite` | Toggle RAG query rewriting for memory search |
| `/update-skills` | Re-sync bundled skills and agents. Local edits are backed up first |
| `/models` | Browse and change the LLM model |
| `/format` | Switch message format: `rich`, `markdown`, or `auto` |
| `/portal` | Portal URLs for this network. See [Portal](/rustfox-docs/portal/) |
| `/config` | Show or set allowlisted `config.toml` keys. Secrets stay redacted |
| `/config show` | Redacted config summary. The sandbox path is read-only |
| `/config keys` | Which keys are editable, which need a restart, and which are denied |
| `/config set <key> <value>` | Validate, copy `config.toml` to `config.toml.bak`, then write. Secrets are denied |
| `/selfupgrade` | Upgrade in place. Bare, `main`, or `release` only. See [Update](/rustfox-docs/update/) |
| `/restart` | Reply, then exit so the service manager or your shell starts the process again. This is not an upgrade |
| `/agents` | List bot ids and personas. Tokens are shown as `bot_token=***` |
| `/agents show <id>` | One bot, token redacted |
| `/agents create <id>` | Create `agents/<id>/`, then take a one-shot BotFather token, append `[[bots]]`, and restart |
| `/agents cancel` | Abort a pending token bind |

`/config set` never edits bot tokens, API keys, the portal token, or `allowed_user_ids`. The key map is in [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#config-slash-map-allowlist). For `/agents create`, send the BotFather token as the next message. That message is deleted best-effort, the token is stored as `secret:bot.<id>.token`, and replies do not echo it.

`/supervise`, `/tasks`, and the other supervisor slash commands are **not shipped**. The planned list is in [GUIDE.md — Bot commands](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#bot-commands).
