import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    client: z.string(),
    role: z.string(),
    period: z.coerce.string(),
    team: z.string().optional(),
    status: z.enum(['shipped', 'in-progress', 'placeholder']),
    award: z.string().optional(),
    heroOneLiner: z.string(),
    pullQuote: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    metrics: z
      .array(
        z.object({
          value: z.coerce.string(),
          label: z.string(),
          from: z.coerce.string().optional(),
        }),
      )
      .optional(),
    coverImage: z.string().optional(),
    logo: z.string().optional(),
    videoId: z.string().optional(),
    awards: z
      .array(
        z.object({
          label: z.string(),
          year: z.coerce.string().optional(),
          title: z.string(),
          description: z.string().optional(),
        }),
      )
      .optional(),
    publishedAt: z.coerce.string().optional(),
  }),
});

export const collections = { cases };
