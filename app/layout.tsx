import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL("https://rustfox-docs.vercel.app"),
  title: "Rustfox — Self-Hosted Telegram AI Assistant",
  description:
    "RustFox is a self-hosted Telegram AI assistant written in Rust. It leverages large language models via OpenRouter to perform intelligent tasks, execute tools, manage schedules, and maintain persistent memory.",
  keywords: [
    "Rust",
    "Telegram",
    "AI Assistant",
    "Self-Hosted",
    "OpenRouter",
    "LLM",
    "Agentic",
    "MCP",
    "SQLite",
    "Bot",
  ],
  authors: [{ name: "chinkan", url: "https://github.com/chinkan" }],
  openGraph: {
    title: "Rustfox — Self-Hosted Telegram AI Assistant",
    description:
      "A powerful, self-hosted, agentic Telegram AI assistant written in Rust, powered by OpenRouter LLM with built-in sandboxed tools, scheduling, persistent memory, and MCP server integration.",
    url: "https://rustfox-docs.vercel.app",
    siteName: "Rustfox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rustfox — Self-Hosted Telegram AI Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustfox — Self-Hosted Telegram AI Assistant",
    description:
      "A powerful, self-hosted, agentic Telegram AI assistant written in Rust, powered by OpenRouter LLM.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Rustfox",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Linux, macOS, Windows",
              description:
                "RustFox is a self-hosted Telegram AI assistant written in Rust. It leverages large language models via OpenRouter to perform intelligent tasks, execute tools, manage schedules, and maintain persistent memory.",
              url: "https://github.com/chinkan/RustFox",
              author: {
                "@type": "Person",
                name: "chinkan",
                url: "https://github.com/chinkan",
              },
              license: "https://www.apache.org/licenses/LICENSE-2.0",
              programmingLanguage: "Rust",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
