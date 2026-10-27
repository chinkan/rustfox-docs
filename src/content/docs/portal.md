---
title: Portal
description: Turn on the built-in web portal, sign in, and open chat, agents, memory, tasks, and settings.
---

RustFox can serve a browser UI from the **same binary**. There is no separate frontend to deploy. The portal is **off by default**.

## Turn it on

In `config.toml`:

```toml
[portal]
enabled = true
port = 8090
bind = "127.0.0.1"        # keep loopback or a private network
token_sha256 = "<sha256>" # hash of your login token
```

Generate a token and its hash:

```bash
python3 -c 'import hashlib,secrets; t=secrets.token_hex(32); print("token:", t); print("token_sha256:", hashlib.sha256(t.encode()).hexdigest())'
```

Put the hash in `token_sha256`. Type the token itself on the login screen. Keep the token out of git and out of Telegram chat.

Restart after you change portal settings (`rustfox restart`, or `/restart` in Telegram). Then open `http://127.0.0.1:8090` on the machine that runs RustFox.

If you have not set a hash, the startup log can print a temporary token (`journalctl --user -u rustfox` and look for `temporary login`). That token lasts for the life of the process. Pin a hash when you want a stable login.

## What each page is for

| Page | What you can do |
| --- | --- |
| Chat | Talk to the agent in the browser and watch tool calls stream. History is separate from Telegram |
| Agents | Browse configured sub-agents |
| Memory | Search the conversation and knowledge store, and browse recent entries |
| Tasks | List cron and one-shot tasks, view run history, pause or resume |
| Settings | Inspect the active config (secrets masked). Self-upgrade here uses the same `auto`, `main`, and `release` choices as Telegram |

Those upgrade choices are on [Update](/rustfox-docs/update/). Ask the bot `/portal` when you want the URLs it can see on this host ([Commands](/rustfox-docs/commands/)).

## Reach it from another device

Keep `bind` on loopback or a private network. The public internet is out of scope. LAN addresses, Tailscale, and login notes are in the RustFox [portal access](https://github.com/chinkan/RustFox/blob/main/docs/portal-access.md) runbook. `/portal` in Telegram lists URLs for the current network and does not invent addresses the bind cannot serve.

A white or blank page on a source build usually means the web UI was not embedded. Use `./scripts/build-all.sh` on [Setup](/rustfox-docs/setup/#build-from-source). Release binaries from GitHub already include the UI.
