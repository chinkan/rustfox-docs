---
title: Config
description: Fill the RustFox setup wizard or the main config.toml fields. The full settings table stays in the RustFox GUIDE.
---

The old Usage page covered the wizard, running the binary, and the background service. The wizard and `config.toml` are on this page. Daily chat is [Telegram](/rustfox-docs/telegram/). The browser UI is [Portal](/rustfox-docs/portal/). Installing the binary and the service is [Setup](/rustfox-docs/setup/).

## Wizard

Browser wizard:

```bash
rustfox --setup
```

Terminal wizard:

```bash
rustfox --setup --cli
```

The wizard asks for the provider (OpenRouter or Ollama), API key, model (a shortcut or any typed `provider/model` id), bot token, and system prompt. Get the bot token from [@BotFather](https://t.me/BotFather). Get an OpenRouter key from [openrouter.ai/keys](https://openrouter.ai/keys). Your Telegram user id (for the allowlist) comes from a bot such as [@userinfobot](https://t.me/userinfobot).

An empty `allowed_user_ids` on any bot is a hard error at config load. The process will not start.

To add another bot, run the wizard again and choose **Add another bot** (or answer `y` in the terminal wizard). Enter a bot id, a BotFather token, and an allowed user id. The first extra bot turns a legacy `[telegram]` section into `[[bots]]`. Restart so both bots start. You can also add one from Telegram with `/agents create` ([Commands](/rustfox-docs/commands/)).

## Where config.toml lives

RustFox reads `config.toml` on startup. The wizard writes that same file (`config.toml` in the directory it was given).

- `rustfox --config /path/to/config.toml`, or a positional path such as `rustfox /path/to/config.toml`, uses that file.
- Otherwise, a `config.toml` in the current directory wins.
- Otherwise, RustFox uses `config.toml` under the fox-home (`RUSTFOX_HOME`, default `~/.rustfox`) when that file exists.
- When neither file exists yet, the path is `config.toml` in the current directory. The wizard creates it there.

Flag spellings are on [Commands](/rustfox-docs/commands/). Copy [`config.example.toml`](https://github.com/chinkan/RustFox/blob/main/config.example.toml) when you want a commented file instead of the wizard.

## What you fill in

After the wizard saves, the bot token and the OpenRouter key are in the secret store. `config.toml` keeps a `secret:` reference, not the raw value. Do not paste tokens into Telegram chat.

A one-bot file looks like this (the user id is yours; the `secret:` strings are references, not the token or the key):

```toml
[[bots]]
id = "main"
bot_token = "secret:bot.main.token"
allowed_user_ids = [123456789]
persona = "main"

[openrouter]
api_key = "secret:openrouter.api_key"
model = "moonshotai/kimi-k2.6"
```

| What you set | Role |
| --- | --- |
| `[[bots]]` | One block per Telegram bot: `id`, `bot_token`, `allowed_user_ids`, `persona`, and optional `model` / `tools` |
| `[telegram]` | Legacy single-bot section. When `[[bots]]` is present, it is a deprecated alias |
| `openrouter.api_key` | OpenRouter key, stored as `secret:openrouter.api_key` |
| `openrouter.model` | Default model id (`provider/model`). Wizard shortcuts are a short list; any typed id is allowed. Default: `moonshotai/kimi-k2.6` |
| `sandbox.allowed_directory` | Directory for sandboxed file and command tools. Default is `workspace` under the fox-home |

A second bot is another `[[bots]]` block with its own id, token reference, allowlist, and persona. Model and tools for a bot follow `[[bots]]` fields, then `agents/<persona>/AGENT.md`, then install defaults.

Ollama is the local choice in the wizard. Extra endpoints (another `[[provider]]` block) and the `[fallback] chain` are written in TOML when you need them. Per-provider setup is not on this page. The field list is in [GUIDE.md — Configuration](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#configuration).

Portal `enabled`, `port`, `bind`, and `token_sha256` are covered on [Portal](/rustfox-docs/portal/). MCP servers are a `[[mcp_servers]]` list; the syntax is in [GUIDE.md — MCP](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#mcp-server-integration).

Next: [Telegram](/rustfox-docs/telegram/) to talk to the bot, or [Portal](/rustfox-docs/portal/) if you want the browser UI.
