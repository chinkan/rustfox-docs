import {
  Package,
  MessageCircle,
  Brain,
  Bot,
  Clock,
  Shield,
  Layers,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Easy Setup",
    description:
      "Build from source with Cargo. Browser-based setup wizard for quick configuration. Ready in minutes.",
  },
  {
    icon: MessageCircle,
    title: "Telegram Native",
    description:
      "Built for Telegram with streaming responses, live editing, and private per-user conversations.",
  },
  {
    icon: Brain,
    title: "Persistent Memory",
    description:
      "SQLite + vector embeddings store and retrieve context across sessions using semantic RAG search.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Multi-step agentic loops with subagent delegation, tool calling, and plan execution.",
  },
  {
    icon: Clock,
    title: "Scheduling",
    description:
      "Schedule one-shot or recurring tasks. List and cancel active schedules via chat commands.",
  },
  {
    icon: Shield,
    title: "Sandboxed Tools",
    description:
      "File I/O, directory listing, and command execution run in a controlled, sandboxed environment.",
  },
  {
    icon: Layers,
    title: "MCP Integration",
    description:
      "Connect unlimited external tools through the Model Context Protocol for infinite extensibility.",
  },
  {
    icon: Zap,
    title: "OpenRouter LLM",
    description:
      "Powered by OpenRouter — use any LLM including kimi-k2.5, GPT-4, Claude, and more.",
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="all-features"
      className="py-24 bg-black"
      aria-labelledby="all-features-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="all-features-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            All the features,{" "}
            <span className="gradient-text">zero compromises</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every capability you&apos;d expect from a modern AI assistant, packaged
            as a lean, self-hosted Rust binary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 card-hover group"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-500/20 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
