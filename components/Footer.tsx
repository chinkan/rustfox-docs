import Link from "next/link";
import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-black border-t border-zinc-900 py-12"
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + description */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <span className="text-xl font-bold text-white">🦊 Rustfox</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              Self-hosted Telegram AI assistant. Free to use and self-host.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="https://github.com/chinkan/RustFox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
              aria-label="View Rustfox on GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">chinkan/RustFox</span>
            </Link>
            <span className="inline-flex items-center gap-2 text-xs text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              <span className="text-amber-400">⚖️</span>
              Apache 2.0 License
            </span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Rustfox. Free to use and self-host.</p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" aria-hidden="true" />{" "}
            in Hong Kong
          </p>
        </div>
      </div>
    </footer>
  );
}
