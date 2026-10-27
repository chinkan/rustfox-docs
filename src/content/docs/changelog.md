---
title: Changelog
description: What changed for people running RustFox, from the shipped 1.0.7 release back through 1.0.2.
---

This page is the short product summary. The full list is the [RustFox CHANGELOG](https://github.com/chinkan/RustFox/blob/main/CHANGELOG.md). Tags and release assets are on [GitHub Releases](https://github.com/chinkan/RustFox/releases).

Behavior that already has a home stays there: [Providers](/rustfox-docs/providers/), [Troubleshooting](/rustfox-docs/troubleshooting/), [Update](/rustfox-docs/update/), [Features](/rustfox-docs/features/), [Commands](/rustfox-docs/commands/), and [Portal](/rustfox-docs/portal/).

## 1.0.7

Shipped as [v1.0.7](https://github.com/chinkan/RustFox/releases/tag/v1.0.7). xAI and OpenCode can be the Active provider. Portal Settings can edit MCP servers. A timed-out schedule can continue from a saved checkpoint. A second start on the same fox-home fails fast.

### Providers

- **xAI (Grok) is an Active peer.** Chat goes to `https://api.x.ai/v1`. The default model is `grok-4.7`. The setup wizard does not ask for the key. A bare model id `xai` stays on xAI, or refuses when the key or base URL is missing. It does not hop to another provider. See [Providers](/rustfox-docs/providers/#xai) and [Troubleshooting](/rustfox-docs/troubleshooting/#xai-bare-id-and-a-missing-key).
- **OpenCode can be Active** when the Go base URL and API key are set. Leave-Go is HTTP 402, or HTTP 429 that is a Go usage limit. A missing `x-opencode-session` header is not leave-Go. Chat and the model list send that header. Without the peer path, OpenCode stays detect-only (absent, no credentials, or ready) and chat refuses instead of hopping. See [Providers](/rustfox-docs/providers/#opencode).

### Chat

- **Reply-to.** Replying to a Telegram message includes that quote in the Active turn. The queued text and the saved transcript use the same composed message.
- **Continuity.** If the chat already has history, a cold "what I can do" menu is caught and rewritten. A second menu becomes a short clarification. This applies to every Active provider.
- **`/models`.** The next primary chat uses the model you pick, without a restart, and RustFox saves `default_provider`. If the disk write fails, the live model still changes and Telegram says it was not saved. A bot or persona with its own model keeps that model. An agent with no model of its own follows Active.
- **`/fallback`.** List, add, and remove chain entries. An add must be a fully qualified `provider/model`. The cap is 5. The change is saved immediately.
- **Ollama and tools.** A normal user turn keeps tools. If Ollama returns `no user query found`, RustFox retries once on the same model without tools, then walks the fallback chain. An OpenRouter-style id such as `deepseek/…` is rejected when the resolved provider is Ollama. Falling back onto a tool-weak Ollama also drops tools.
- **Stuck loops.** The same tool call with the same arguments stops the loop instead of hanging the portal. The LLM HTTP timeout defaults to 180 seconds (`llm_request_timeout_secs`). Duplicate tool names keep the first registration. Several empty-progress rounds in a row ask for a clarification instead of calling the model without end.
- The online banner shows the current model, the same one `/models` calls Active.

### Schedule

- A message that arrives **during a scheduled run waits**. It does not steer that run, and Telegram skips the eyes reaction. Steering stays on a normal interactive turn. After the schedule finishes, the waiting message starts as its own user turn.
- A **wall-clock timeout** stops the run and asks you. It does not retry by itself. Use the inline Retry and Cancel buttons, or `/retry` and `/cancel` with the id. Retry continues from the saved transcript when a checkpoint exists. An interrupted tool is not treated as success and is not run again. With no checkpoint, Retry replays the run. Cancel clears the checkpoint. Retry is eligible immediately.
- `/config` can set `scheduler.run_timeout_secs`. That key needs a restart. The floor is on [Features](/rustfox-docs/features/#schedule).

### MCP and setup

- **Portal Settings** can add Exa and Jina presets and a custom HTTP server, turn a server on or off without a restart, and delete a custom server. HTTP servers can send headers. A Bearer token can be `env:NAME` or `secret:NAME`. A plaintext MCP credential in config is moved into the secret store on load.
- The setup wizard has a **skippable Exa page** (no key, with a privacy consent). Skip leaves Exa off. The thin CLI still does not ask about MCP. If Exa is off, Telegram can offer Enable once in that conversation. The web search stub stays until you enable it.

### Running the process

- A normal start takes an exclusive lock on `{fox-home}/rustfox.lock`. A second start on that home fails immediately. A different `RUSTFOX_HOME` is fine. `status`, `restart`, `stop`, `install`, and `--setup` do not hold the lock. `rustfox --version` and `rustfox -V` print the version and exit 0. They do not start the bot. Stop the service and kill stray processes before an upgrade. Steps are on [Update](/rustfox-docs/update/).
- Shell verbs are `install`, `uninstall`, `status`, `start`, `stop`, `restart`, and `run`. `remove` and `--service` still work and print a note to use the new spelling. On macOS, `stop` unloads the agent so KeepAlive cannot start it again.
- **`/selfupgrade`** accepts only a bare command (`auto`), `main`, or `release`. Any other argument is rejected. It is not a git branch name. `main` refuses when there is no source tree next to the binary. Portal Settings uses the same three labels. See [Update](/rustfox-docs/update/).
- **`/logs`** sends `{fox-home}/logs/rustfox.log`. The file rotates at 32 MiB. On macOS the LaunchAgent no longer redirects that log into Library/Logs.

### Windows

The Windows binary in this release is not code-signed. With Smart App Control on, unsigned `rustfox.exe` cannot be opened, and there is no Run anyway. Leave Smart App Control on, or build RustFox on a machine that does not enforce it. If SmartScreen shows "Windows protected your PC", choose More info, then Run anyway.

## 1.0.6

[v1.0.6](https://github.com/chinkan/RustFox/releases/tag/v1.0.6) (2026-10-14). Bug fixes.

- Plan titles that contain `:` work on Windows. The file name is encoded. Plans an older build had hidden are recovered the first time a plan tool runs. If that name is already taken, the recovered plan is kept as "title (recovered)" and the existing plan is left as it is.
- Titles that differ only by letter case no longer overwrite each other. A plan that was already overwritten that way in 1.0.4 or 1.0.5 is not restored.
- Sandbox mode starts on macOS.

## 1.0.5

[v1.0.5](https://github.com/chinkan/RustFox/releases/tag/v1.0.5) (2026-10-13). Sandbox mode, steering, and schedule timezones.

- **`execute_command` can run in a sandbox** limited to the workspace: bubblewrap on Linux, Seatbelt on macOS. Windows refuses sandbox mode and stays trusted. Choose the mode in the setup wizard or the portal. If the sandbox cannot start, the command fails instead of running unconfined.
- A message sent **during an interactive turn** can steer that turn.
- A scheduled run has a wall-clock timeout, so one hung run does not block the scheduler. A stale `running` row is reconciled.
- Setup accepts any OpenRouter model id. The API key is stored in the secret store.
- Each schedule can use an IANA timezone. The default is the system zone, or `[general] timezone`. Built-in crons, including the nightly summary, use that zone. A five-field cron is accepted. Seconds default to 0. Older recurring rows stay on UTC.
- Fallback can run after any model failure. Context compaction no longer drops skills.
- `read_file`, `write_file`, `list_files`, and `send_file` do not follow symlinks out of the workspace. On Windows, symlinks and junctions are rejected. A subagent only receives tools its parent also has. A block-style `tools:` list in `AGENT.md` keeps the sandbox read tools.
- Portal tasks and reminders reach the owning bot and that owner's Telegram chat.
- On Linux, secrets use the file vault. Wizard secrets land in the vault the bot opens. `config.toml.bak` is owner-only.

## 1.0.4

[v1.0.4](https://github.com/chinkan/RustFox/releases/tag/v1.0.4) (2026-10-04).

- Every schedule belongs to one bot. The prompt and the result, including failure, cancel, and max-iterations, are written into that bot's chat with a `[schedule:<id>]` marker. A task started in the portal is also written to that bot's Telegram conversation.
- First-run setup asks four fields. Ollama is the local choice.
- On a release binary, Settings can connect Google (Gmail read and compose) in one step. A source build hides that control or puts it under Advanced.
- `fully_silent` on a bot hides tool-call UI in Telegram. The final reply still sends.
- Retrieved PDF pages can be read with vision. Image OCR uses the pinned traditional-Chinese model.
- The portal Memory page can browse facts and knowledge separately.
- In a multi-bot setup, tool-call UI stays on the bot that owns the turn.

## 1.0.3

[v1.0.3](https://github.com/chinkan/RustFox/releases/tag/v1.0.3) (2026-09-29). Security hardening.

The MCP client moved to a patched major version. Secret-store keys and nonces come from the operating system random source. Setup and secret-store logs no longer include sensitive identifiers.

## 1.0.2

[v1.0.2](https://github.com/chinkan/RustFox/releases/tag/v1.0.2) (2026-09-28).

The portal can manage skills, agents, a GitHub installer, and tasks. When a model returns HTTP 429, RustFox can walk a fallback chain. A failed run can sit on a re-run queue.

Earlier notes, including 1.0.1 and 1.0.0, stay in the [CHANGELOG](https://github.com/chinkan/RustFox/blob/main/CHANGELOG.md).
