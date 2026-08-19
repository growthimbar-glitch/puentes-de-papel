// Astro no optimiza lo que vive en public/, así que las variantes -800/-1200 se generan a mano.

import { existsSync } from 'node:fs';

const ANCHOS = [800, 1200];

// Devuelve undefined si la imagen todavía no tiene variantes: el src solo sigue funcionando.
export function srcsetFor(src: string): string | undefined {
  const variantes = ANCHOS
    .map((ancho) => ({ ancho, path: src.replace(/\.webp$/, `-${ancho}.webp`) }))
    .filter(({ path }) => existsSync(`public${path}`));

  if (variantes.length === 0) return undefined;
  return variantes.map(({ ancho, path }) => `${path} ${ancho}w`).join(', ');
}
