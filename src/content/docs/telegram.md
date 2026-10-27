---
title: Telegram
description: Day-to-day use of RustFox in Telegram after the wizard has saved your bot token and allowlist.
---

Finish [Setup](/rustfox-docs/setup/) and [Config](/rustfox-docs/config/) first. Then open your bot in Telegram and send a message.

Only Telegram user ids in `allowed_user_ids` can talk to that bot. Anyone else is ignored. An empty allowlist refuses to start.

## A normal chat

Send a question the way you would message a person. You can drop a file in the chat. RustFox calls sandboxed tools (files, commands, and any MCP tools you configured) and keeps the conversation in SQLite under the fox-home.

When more than one bot is configured, each bot is its own Telegram chat, with its own persona, model, and tool list. They share one fox-home. Adding a bot is on [Config](/rustfox-docs/config/).

## Commands you will actually type

The full Active list, including subforms, is on [Commands](/rustfox-docs/commands/). These are the ones that come up in daily use:

| Command | Use it when |
| --- | --- |
| `/start` | You want the short welcome and the command list |
| `/clear` | You want this chat's history cleared |
| `/models` | You want a different model for this bot |
| `/verbose` | You want tool progress on or off |
| `/portal` | You want the browser URLs for this machine ([Portal](/rustfox-docs/portal/)) |
| `/config` | You want to read or change an allowlisted setting |
| `/restart` | You changed a setting that only applies after a process restart |
| `/agents` | You want to list bots, or create one and bind a token |
| `/selfupgrade` | You want to upgrade in place |

`/selfupgrade` (bare, `main`, or `release`) is documented on [Update](/rustfox-docs/update/). It is not the same as `/restart`.

`/config set` only writes allowlisted keys. It does not accept bot tokens or API keys. After a write that needs a restart, send `/restart`. The allowlist of keys is in [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#config-slash-map-allowlist).

Supervisor commands such as `/supervise` and `/tasks` are not shipped. See [Commands](/rustfox-docs/commands/).
