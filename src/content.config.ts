import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const versionFields = {
  firstPublished: z.string(),          // "2026-03-15"
  version: z.string(),                  // "0.1"
  lastModified: z.string().optional(),  // 首发时不填，修订时填
};

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    title: z.string(),
    definition: z.string(),
    description: z.string(),
    ...versionFields,
    relatedConcepts: z.array(z.string()).optional(),
    relatedMethods: z.array(z.string()).optional(),
  }),
});

const methodology = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/methodology' }),
  schema: z.object({
    title: z.string(),
    conclusion: z.string(),
    description: z.string(),
    ...versionFields,
    relatedConcepts: z.array(z.string()).optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    description: z.string(),
    ...versionFields,
    relatedConcepts: z.array(z.string()).optional(),
    relatedMethods: z.array(z.string()).optional(),
  }),
});

const evidence = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evidence' }),
  schema: z.object({
    title: z.string(),
    conclusion: z.string(),
    description: z.string(),
    source: z.string(),
    ...versionFields,
    relatedConcepts: z.array(z.string()).optional(),
    relatedMethods: z.array(z.string()).optional(),
  }),
});

export const collections = { concepts, methodology, guides, evidence };
