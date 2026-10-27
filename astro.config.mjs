// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightVersions from 'starlight-versions';

const site = 'https://chinkan.github.io/rustfox-docs/';

// Project Pages. `base` keeps assets, sidebar, and search under /rustfox-docs/.
// `site` is the public URL (no custom domain). An absolute `base` replaces
// the path in `site` when Astro builds canonical URLs, so the prefix is not doubled.
// Starlight 0.42 does not rewrite Markdown links, so in-page links in
// src/content/docs include the `/rustfox-docs` prefix themselves.
export default defineConfig({
	site,
	base: '/rustfox-docs',
	// Static meta-refresh redirects are not prefixed with `base`. Destinations
	// include `/rustfox-docs` so bookmarks stay on this project site.
	// `build-from-source` keeps the hash so it opens the advanced section.
	redirects: {
		'/install': '/rustfox-docs/setup/',
		'/build-from-source': '/rustfox-docs/setup/#build-from-source',
		'/usage': '/rustfox-docs/config/',
		'/upgrade': '/rustfox-docs/update/',
	},
	integrations: [
		// astro-mermaid must run before Starlight so Sätteri sees the diagram transform.
		mermaid({
			autoTheme: true,
			// Mermaid 12 reads the top-level flag. Nested flowchart.htmlLabels
			// still emits HTML labels, which clip the command lanes.
			mermaidConfig: {
				htmlLabels: false,
			},
		}),
		starlight({
			title: 'RustFox',
			description:
				'English user docs for RustFox, a self-hosted Telegram AI assistant: how to use, features, providers, and troubleshooting. Latest tracks this repo’s main branch.',
			editLink: {
				baseUrl: 'https://github.com/chinkan/rustfox-docs/edit/main/',
			},
			social: [
				{
					icon: 'github',
					label: 'RustFox on GitHub',
					href: 'https://github.com/chinkan/RustFox',
				},
			],
			sidebar: [
				{ label: 'Getting started', link: '/' },
				{
					label: 'How to use',
					items: [
						{ label: 'Setup', slug: 'setup' },
						{ label: 'Config', slug: 'config' },
						{ label: 'Telegram', slug: 'telegram' },
						{ label: 'Portal', slug: 'portal' },
						{ label: 'Update', slug: 'update' },
					],
				},
				{ label: 'Commands', slug: 'commands' },
				{ label: 'Features', slug: 'features' },
				{ label: 'Providers', slug: 'providers' },
				{ label: 'Troubleshooting', slug: 'troubleshooting' },
				{ label: 'How to contribute', slug: 'how-to-contribute' },
			],
			plugins: [
				// `versions` cannot be empty (plugin schema). The slug below is a
				// scaffold directory, not a RustFox release. See NOTES.md.
				starlightVersions({
					current: { label: 'Latest' },
					versions: [
						{
							slug: 'archive-placeholder',
							label: 'No release archive yet',
							// Only an index page exists. same-page would 404 (for example /upgrade/ → /archive-placeholder/upgrade/).
							redirect: 'root',
						},
					],
				}),
				starlightLlmsTxt({
					projectName: 'RustFox',
					description:
						'Self-hosted Telegram AI assistant written in Rust. These files are the English user docs: getting started, how to use (setup, config, Telegram, portal, update), commands, features (tools, MCP, schedule, memory), providers (OpenRouter, OpenCode, xAI, Ollama), troubleshooting, and how to contribute. Latest docs track the rustfox-docs main branch.',
					details:
						'Architecture decision records stay in the RustFox repository under docs/adr/ for developers. This site does not send end users to those files. Features is a capability catalog. Providers covers choose, credential, and Active or peer, including the OpenCode x-opencode-session header (MissingSessionID is not leave-Go) and a bare xai refusal with no silent hop. Troubleshooting covers those symptoms, HTTP 401 and 402 credits, and portal access. Docs archives lag RustFox release tags and are not a release gate. Before install or upgrade, stop the service and kill stray rustfox processes that share the same fox-home. rustfox --version and rustfox -V print the version and exit 0 without starting the bot. Prefer rustfox status for health. Do not use a bare rustfox as a probe. Old install, build-from-source, usage, and upgrade URLs redirect to the how-to pages.',
					optionalLinks: [
						{
							label: 'RustFox repository',
							url: 'https://github.com/chinkan/RustFox',
							description: 'Source and GitHub releases',
						},
						{
							label: 'RustFox GUIDE',
							url: 'https://github.com/chinkan/RustFox/blob/main/docs/GUIDE.md',
							description: 'Longer operator notes, including self-upgrade and commands',
						},
						{
							label: 'Portal access',
							url: 'https://github.com/chinkan/RustFox/blob/main/docs/portal-access.md',
							description: 'How to reach the portal on loopback, LAN, or Tailscale',
						},
					],
					exclude: ['archive-placeholder', 'archive-placeholder/**'],
				}),
			],
		}),
	],
});
