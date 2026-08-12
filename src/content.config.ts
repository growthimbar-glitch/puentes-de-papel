import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de Noticias: pensada para escalar a medida que se publiquen notas.
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    showHeroImage: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias };
