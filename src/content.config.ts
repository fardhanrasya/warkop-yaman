import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Tim Warkop Yaman'),
    category: z.string().default('Cerita'),
    heroImage: image().optional(),
    images: z.array(image()).optional(),
  }),
});

export const collections = { blog };
