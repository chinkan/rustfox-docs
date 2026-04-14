"use client";

import { Terminal, Copy } from "lucide-react";

function CodeBlock({
  step,
  command,
  comment,
}: {
  step: string;
  command: string;
  comment: string;
}) {
  return (
    <div className="group relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-amber-400 font-medium">
          {step}
        </span>
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 px-2 py-1 rounded-md hover:bg-zinc-800"
          aria-label={`Copy command: ${command}`}
          onClick={() => {
            if (typeof navigator !== "undefined") {
              navigator.clipboard.writeText(command);
            }
          }}
        >
          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
          Copy
        </button>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <span className="text-xs text-zinc-500 font-mono">{comment}</span>
        </div>
        <div className="p-4">
          <code className="font-mono text-sm text-zinc-100">
            <span className="text-zinc-500 select-none">$ </span>
            {command}
          </code>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    step: "Step 1 — Build",
    command: "cargo build --release",
    comment: "Compile the release binary (requires Rust toolchain)",
  },
  {
    step: "Step 2 — Configure",
    command: "./setup.sh",
    comment: "Browser wizard to configure Telegram token, OpenRouter key, etc.",
  },
  {
    step: "Step 3 — Run",
    command: "cargo run --bin rustfox",
    comment: "Start the bot — it will listen for Telegram messages",
  },
];

export default function Installation() {
  return (
    <section
      id="get-started"
      className="py-24 bg-zinc-950"
      aria-labelledby="installation-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="installation-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Get started{" "}
            <span className="gradient-text">in seconds</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Three commands. That&apos;s all you need to have a self-hosted AI
            assistant running on Telegram.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-8">
          <h3 className="text-white font-semibold mb-3 text-sm">
            Prerequisites
          </h3>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">→</span>
              <span>
                <span className="text-zinc-300">Rust toolchain</span> — install
                via{" "}
                <code className="text-amber-400 text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">
                  rustup.rs
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">→</span>
              <span>
                <span className="text-zinc-300">Telegram Bot Token</span> — get
                from{" "}
                <code className="text-amber-400 text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">
                  @BotFather
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">→</span>
              <span>
                <span className="text-zinc-300">OpenRouter API Key</span> —
                sign up at{" "}
                <code className="text-amber-400 text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">
                  openrouter.ai
                </code>
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <CodeBlock key={index} {...step} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm mb-4">
            Need help? Check the full documentation on GitHub.
          </p>
          <a
            href="https://github.com/chinkan/RustFox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors duration-200"
            aria-label="Read the full documentation on GitHub"
          >
            Read the docs on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
