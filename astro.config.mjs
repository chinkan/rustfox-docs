// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
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
		starlight({
			title: 'RustFox',
			description:
				'English user docs for RustFox, a self-hosted Telegram AI assistant. Latest tracks this repo’s main branch.',
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
						'Self-hosted Telegram AI assistant written in Rust. These files are the English user docs: getting started, how to use (setup, config, Telegram, portal, update), commands, and how to contribute. Latest docs track the rustfox-docs main branch.',
					details:
						'Architecture Decision Records stay in the RustFox repository under docs/adr/. This site links them and does not replace them. Docs archives lag RustFox release tags and are not a release gate. Before install or upgrade, stop the service and kill stray rustfox processes that share the same fox-home. rustfox --version and rustfox -V print the version and exit 0 without starting the bot. Prefer rustfox status for health. Do not use a bare rustfox as a probe. Old install, build-from-source, usage, and upgrade URLs redirect to the how-to pages.',
					optionalLinks: [
						{
							label: 'RustFox repository',
							url: 'https://github.com/chinkan/RustFox',
							description: 'Source, releases, and the ADR tree',
						},
						{
							label: 'ADR-0030',
							url: 'https://github.com/chinkan/RustFox/blob/main/docs/adr/0030-selfupgrade-main-or-release.md',
							description: 'Self-upgrade main, release, or bare auto',
						},
						{
							label: 'ADR-0046',
							url: 'https://github.com/chinkan/RustFox/blob/main/docs/adr/0046-register-start-time-single-instance-flock-and-safe-version.md',
							description: 'Start-time flock and safe --version (#289)',
						},
					],
					exclude: ['archive-placeholder', 'archive-placeholder/**'],
				}),
			],
		}),
	],
});
