import Link from "next/link";
import { Github, Star, ExternalLink, Terminal, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          Open source · Apache 2.0
        </div>

        {/* Illustration row */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Rust logo SVG */}
          <div className="w-12 h-12 flex items-center justify-center" aria-label="Rust programming language logo">
            <svg viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <circle cx="72" cy="72" r="68" fill="#CE422B" />
              <path d="M67.5 24L72 16L76.5 24H67.5Z" fill="white"/>
              <path d="M67.5 120L72 128L76.5 120H67.5Z" fill="white"/>
              <path d="M24 67.5L16 72L24 76.5V67.5Z" fill="white"/>
              <path d="M120 67.5L128 72L120 76.5V67.5Z" fill="white"/>
              <circle cx="72" cy="72" r="28" stroke="white" strokeWidth="6" fill="none"/>
              <path d="M44 72H100" stroke="white" strokeWidth="5" strokeLinecap="round"/>
              <path d="M72 44V100" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
          <Zap className="w-5 h-5 text-amber-400" aria-hidden="true" />
          {/* Telegram logo */}
          <div className="w-12 h-12 flex items-center justify-center" aria-label="Telegram logo">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <circle cx="120" cy="120" r="120" fill="#2CA5E0"/>
              <path d="M176 74L152.5 172C152.5 172 149 181 139 177L107 152L95 162L98 130L163 71C163 71 167.5 68.5 165.5 72.5C163.5 76.5 98 130 98 130" fill="white" fillOpacity="0.9"/>
              <path d="M84 168L95 130L109 143L84 168Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block">Rustfox</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Self-Hosted AI
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-zinc-300">
            Telegram Assistant
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          A powerful, self-hosted, agentic Telegram AI assistant written in{" "}
          <span className="text-amber-400 font-medium">Rust</span>, powered by
          OpenRouter LLM with built-in sandboxed tools, scheduling, persistent
          memory, and MCP server integration.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://github.com/chinkan/RustFox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            aria-label="View Rustfox on GitHub"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            View on GitHub
          </Link>
          <Link
            href="https://github.com/chinkan/RustFox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-7 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Star Rustfox on GitHub"
          >
            <Star className="w-5 h-5 text-amber-400" aria-hidden="true" />
            Star on GitHub
          </Link>
          <Link
            href="https://github.com/chinkan/RustFox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="View Live Demo on GitHub"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Live Demo
          </Link>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="flex-1 text-center text-xs text-zinc-500 font-mono">
                terminal
              </div>
            </div>
            <div className="p-5 font-mono text-sm space-y-2 text-left">
              <div className="flex items-start gap-2">
                <Terminal className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-zinc-500">$ </span>
                <span className="text-zinc-200">cargo build --release</span>
              </div>
              <div className="text-green-400/80 text-xs pl-6">
                ✓ Compiling rustfox v0.1.0
              </div>
              <div className="flex items-start gap-2 mt-3">
                <Terminal className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-zinc-500">$ </span>
                <span className="text-zinc-200">./setup.sh</span>
              </div>
              <div className="text-blue-400/80 text-xs pl-6">
                ℹ Opening setup wizard in browser...
              </div>
              <div className="flex items-start gap-2 mt-3">
                <Terminal className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-zinc-500">$ </span>
                <span className="text-zinc-200">cargo run --bin rustfox</span>
              </div>
              <div className="text-green-400/80 text-xs pl-6">
                🦊 RustFox is running and listening on Telegram...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
