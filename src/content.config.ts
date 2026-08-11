import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de Noticias: pensada para escalar a medida que se publiquen notas.
// Los archivos viven en src/content/noticias/*.md
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias };
