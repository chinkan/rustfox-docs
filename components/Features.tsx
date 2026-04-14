import { MessageSquare, Wrench, Database } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
  items,
  accentColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  accentColor: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 card-hover group">
      <div
        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${accentColor} mb-4`}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
            <span className="text-amber-400 mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-zinc-950"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Everything you need in a{" "}
            <span className="gradient-text">self-hosted AI assistant</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            RustFox packs everything into a single binary — from intelligent
            conversation to persistent memory and external tool integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={MessageSquare}
            title="Telegram Bot Interface"
            description="Secure, private Telegram bot that responds only to configured user IDs. Real-time streaming responses with live message editing."
            items={[
              "User allowlist by Telegram ID",
              "Streaming token-by-token responses",
              "Live message editing as AI types",
              "Chat history with RAG search",
            ]}
            accentColor="bg-blue-500/10 text-blue-400"
          />
          <FeatureCard
            icon={Wrench}
            title="MCP & External Tools"
            description="Integrate unlimited external tools via the Model Context Protocol. Built-in sandboxed tools for file operations and command execution."
            items={[
              "MCP server integration",
              "File read/write sandbox",
              "Directory listing & shell commands",
              "Bot Skills & Agents Layer",
            ]}
            accentColor="bg-amber-500/10 text-amber-400"
          />
          <FeatureCard
            icon={Database}
            title="Persistent Memory"
            description="SQLite-backed persistent memory with vector embeddings for semantic search. Automatic nightly summarization keeps context fresh."
            items={[
              "SQLite persistent storage",
              "Vector embedding search (RAG)",
              "Nightly chat summarization",
              "Cross-session memory recall",
            ]}
            accentColor="bg-emerald-500/10 text-emerald-400"
          />
        </div>
      </div>
    </section>
  );
}
