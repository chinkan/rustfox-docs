const technologies = [
  {
    name: "Rust",
    description: "Systems programming language",
    emoji: "🦀",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "OpenRouter",
    description: "LLM API gateway",
    emoji: "🔀",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "SQLite",
    description: "Embedded database",
    emoji: "🗄️",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Telegram Bot API",
    description: "Messaging platform",
    emoji: "✈️",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "MCP Protocol",
    description: "Model Context Protocol",
    emoji: "🔌",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "Kimi K2.5",
    description: "Default LLM model",
    emoji: "🌙",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Next.js 15",
    description: "This docs site",
    emoji: "▲",
    color: "text-white",
    bg: "bg-white/5 border-white/10",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    emoji: "🌊",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
];

export default function BuiltWith() {
  return (
    <section
      id="built-with"
      className="py-24 bg-black"
      aria-labelledby="built-with-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="built-with-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Built with
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A carefully chosen stack for performance, reliability, and
            extensibility.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`border rounded-xl p-4 flex flex-col items-center gap-2 text-center card-hover ${tech.bg}`}
            >
              <span className="text-3xl" role="img" aria-label={tech.name}>
                {tech.emoji}
              </span>
              <span className={`font-semibold text-sm ${tech.color}`}>
                {tech.name}
              </span>
              <span className="text-zinc-500 text-xs">{tech.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
