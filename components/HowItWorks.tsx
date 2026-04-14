import {
  MessageSquare,
  Search,
  Cpu,
  Zap,
  Archive,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Receives message via Telegram",
    description:
      "User sends a message to the Rustfox Telegram bot. The bot validates the sender ID against the allowlist before processing.",
  },
  {
    number: "02",
    icon: Search,
    title: "Retrieves relevant context with vector search (RAG)",
    description:
      "Rustfox queries the SQLite vector store using semantic embeddings to find relevant past conversations and memory snippets.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Enters agentic loop: calls tools, executes plans, invokes subagents",
    description:
      "The LLM enters a multi-step agentic loop — calling built-in tools, MCP servers, scheduling tasks, or delegating to specialized subagents.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Streams LLM responses token-by-token in real time",
    description:
      "Tokens are streamed from OpenRouter and delivered to Telegram with live message editing, so users see the response as it's generated.",
  },
  {
    number: "05",
    icon: Archive,
    title: "Persists everything in SQLite with automatic summarization",
    description:
      "All messages, tool calls, and context are persisted in SQLite. A nightly job summarizes chat history to keep memory lean and searchable.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-zinc-950"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From Telegram message to intelligent response — five steps that make
            Rustfox tick.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden sm:block" aria-hidden="true" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex gap-6 group"
                >
                  {/* Step number + icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-1 group-hover:border-amber-500/50 transition-colors duration-300">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {step.number}
                      </span>
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors duration-300" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3 sm:pt-4 pb-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-amber-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
