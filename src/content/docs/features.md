---
title: Features
description: What RustFox can do with tools, MCP, schedule, and memory, and the limits on each.
---

This page is a catalog: what each capability is, and where it stops. Daily chat is [Telegram](/rustfox-docs/telegram/). Wizard and `config.toml` are [Config](/rustfox-docs/config/). The browser UI is [Portal](/rustfox-docs/portal/). The operator reference is [GUIDE.md](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md).

## tools

RustFox runs an agent loop. Your message goes to the Active model. The model may call tools. RustFox runs those calls until it has a reply, or until it hits the iteration cap.

File and command tools stay inside `sandbox.allowed_directory` (default `workspace` under the fox-home, `RUSTFOX_HOME` or `~/.rustfox`). The loop stops at `agent.max_iterations` (default 25).

| Group | Names | Limit |
| --- | --- | --- |
| Files and shell | `read_file`, `write_file`, `list_files`, `send_file`, `execute_command`, `try_new_tech` | Sandbox directory only. `try_new_tech` is a Rust or JS experiment in that sandbox |
| Persona files | `read_soul_file`, `update_soul_file`, `revert_soul_file` | `SOUL.md`, `AGENTS.md`, and `USER.md`. `USER.md` is shared under the fox-home |
| Memory | `remember`, `recall`, `search_memory` | See [memory](#memory) |
| Schedule | `schedule_task`, `list_scheduled_tasks`, `get_scheduled_task_history`, `cancel_scheduled_task`, `task_reruns` | Current bot only. See [schedule](#schedule) |
| Skills and agents | `read_skill_file`, `write_skill_file`, `reload_skills`, `invoke_agent`, `spawn_agents`, and the agent-file reload tools | `invoke_agent` and `spawn_agents` nest at most 2 deep and reject cycles. A peer summary is prefixed with `via:` |
| Plans | `plan_create`, `plan_update`, `plan_view` | The plan file is `.rustfox_plan.json` in the sandbox |
| Upgrade | `self_upgrade` | Same `auto` / `main` / `release` mapping as Telegram. Steps are on [Update](/rustfox-docs/update/) |

A bot's tool list follows `[[bots]]` `tools`, then `agents/<persona>/AGENT.md`, then install defaults. `/tools` lists what that bot registered, including MCP tools. Command spellings are on [Commands](/rustfox-docs/commands/).

Related skill and agent file tools (`patch_skill`, `reload_agents`, `reload_skills_and_agents`) are in [GUIDE.md — Built-in tools](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#built-in-tools).

## MCP

[Model Context Protocol](https://modelcontextprotocol.io/) servers add tools RustFox does not ship. Declare them as `[[mcp_servers]]`: a stdio `command`, or an HTTP `url`. Each tool is namespaced `mcp_<server>_<tool>` (for example `mcp_git_git_log`).

Servers people connect include Git, Filesystem, Brave Search, GitHub, Fetch, SQLite, Puppeteer, and Threads. A Filesystem server can read paths outside the RustFox sandbox. That access is the MCP server's, separate from `read_file` / `write_file`.

`/config` can set `mcp.<name>.enabled`. It cannot change MCP `command`, `args`, or `env`. The toggle needs `/restart`. Syntax and examples are in [GUIDE.md — MCP](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#mcp-server-integration). The block's place in the file is on [Config](/rustfox-docs/config/).

## schedule

Cron and one-shot tasks persist in SQLite. A failed run can sit on the dead-letter rerun queue (`task_reruns`).

Every row has a `bot_id`. There is no global cron and no schedule shared between bots. A run uses that bot's prompt and tools. It writes the prompt and the result into that bot's conversation, and each written segment includes the schedule id. Failure, cancel, and max-iterations write a result turn. The portal Tasks page and `list_scheduled_tasks` show only the current bot. Disable and delete affect only that bot.

A task opened in the portal is stored as user `web` and platform `portal`. That segment is also written into the owning bot's Telegram conversation, so the next reply in that chat can see the prompt and the result. There is no approval step before the run.

One scheduled agent call has a wall-clock timeout (`scheduler.run_timeout_secs`, default 900 seconds). The runner is single-consumer. Values under 60 seconds are rejected at config load. `0` means the default.

The Tasks page is on [Portal](/rustfox-docs/portal/). Per-bot rules are in [GUIDE.md — Per-bot schedules](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#per-bot-schedules).

When Active is xAI, the scheduler can run. Scheduled runs while OpenCode is Active are not part of the OpenCode peer lock. Provider choice is on [Providers](/rustfox-docs/providers/).

## memory

Conversation history is SQLite under the fox-home (`rustfox.db` by default). Bots in one process share that database. A conversation is keyed by platform, bot id, and user id, so each Telegram bot stays separate from the others and from portal chat.

Search is hybrid vector plus FTS5. The default embedding model is `qwen/qwen3-embedding-8b`. Matching past messages can be injected on a turn (chat-history RAG). `/queryrewrite` toggles rewriting an ambiguous follow-up before that search. The default for new sessions is off (`memory.query_rewriter_enabled`).

`remember`, `recall`, and `search_memory` store and search long-term knowledge. The portal Memory page searches the same store. A nightly job can summarize long conversations. Conversations can be soft-archived: still searchable, left out of the active context.

The transcript for every Active provider, including OpenCode, is this SQLite history. The OpenCode `x-opencode-session` header is not the transcript. That header is on [Providers](/rustfox-docs/providers/#opencode).

Clearing one Telegram chat is `/clear` on [Telegram](/rustfox-docs/telegram/). Field names are in [GUIDE.md — Configuration](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#configuration) and [GUIDE.md — Long-term memory](https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md#long-term-memory).
