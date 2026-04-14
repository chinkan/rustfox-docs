import Link from "next/link";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white hover:text-amber-400 transition-colors duration-200"
          aria-label="Rustfox home"
        >
          <span className="text-lg">🦊</span>
          <span>Rustfox</span>
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors duration-200">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors duration-200">
            How it works
          </Link>
          <Link href="#get-started" className="hover:text-white transition-colors duration-200">
            Get started
          </Link>
        </div>

        <Link
          href="https://github.com/chinkan/RustFox"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 px-4 py-1.5 rounded-lg transition-all duration-200"
          aria-label="View source on GitHub"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </div>
    </nav>
  );
}
