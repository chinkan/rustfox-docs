---
title: Usage
description: Configure RustFox with the setup wizard, run it, and install the background service.
---

## Configure

Browser wizard:

```bash
./rustfox --setup
```

Terminal wizard:

```bash
./rustfox --setup --cli
```

The wizard asks for the provider (OpenRouter or Ollama), API key, model (a shortcut or any typed `provider/model` id), bot token, and system prompt.

An empty `allowed_user_ids` on any bot is a hard error at config load. The process will not start.

## Run

```bash
rustfox
# or with a custom config:
rustfox --config /path/to/config.toml
```

A bare `rustfox` starts the bot. For a version check, use `rustfox --version` or `rustfox -V` (prints the version, exits 0, does not start the bot or the scheduler). For service health, use `rustfox status`.

## Background service

```bash
rustfox install   # Linux (systemd), macOS (launchd), or Windows
rustfox status
```

`status`, `restart`, `stop`, and `install` stay usable while a bot is running. They are not a second bot start. See [Upgrade & selfupgrade](/rustfox-docs/upgrade/) for the flock and the kill-all rule.

## Settings

Full configuration reference: [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#configuration).

| Setting | Description |
| --- | --- |
| `[[bots]]` | Array of Telegram bots, each with `id`, `bot_token`, `allowed_user_ids`, `persona`, and optional `model` / `tools` overrides |
| `telegram.*` | Legacy single-bot section (deprecated alias when `[[bots]]` is present) |
| `openrouter.api_key` | OpenRouter API key ([openrouter.ai/keys](https://openrouter.ai/keys)) |
| `openrouter.model` | Default LLM model ID (`provider/model`; wizard shortcuts or any typed id; default: `moonshotai/kimi-k2.6`) |
| `[[provider]]` | Additional LLM providers (Ollama, LM Studio, any OpenAI-compatible endpoint); model strings use `provider/model_id` |
| `[fallback] chain` | Ordered model fallback list, for example `["openrouter/…", "ollama/llama3.1"]` |
| `[portal]` | Web portal settings (`enabled`, `port`, `bind`, `token_sha256`) |
| `sandbox.allowed_directory` | Directory for sandboxed file and command operations |
| `mcp_servers` | List of MCP servers to connect (see [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#mcp-server-integration)) |

The built-in portal, when enabled, is served by the same binary and is off by default. Keep `bind` on loopback or a private network. Portal and MCP setup beyond this table stay in the RustFox GUIDE, not on this site.
