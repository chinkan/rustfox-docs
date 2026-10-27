import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { docsVersionsLoader } from 'starlight-versions/loader';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Starlight 0.42 reads this collection for UI strings. English defaults are built in.
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
	versions: defineCollection({ loader: docsVersionsLoader() }),
};
