// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const NOTICIAS_DIR = './src/content/noticias';

// Fecha de cada nota, para el lastmod del sitemap. Clave: '/noticias/<slug>/'.
function fechasDeNoticias() {
  const fechas = new Map();
  for (const file of readdirSync(NOTICIAS_DIR)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(`${NOTICIAS_DIR}/${file}`, 'utf-8');
    const fecha = raw.match(/^updatedDate:\s*(\S+)/m) ?? raw.match(/^pubDate:\s*(\S+)/m);
    if (fecha) fechas.set(`/noticias/${file.replace(/\.md$/, '')}/`, new Date(fecha[1]));
  }
  return fechas;
}

const lastmodNoticias = fechasDeNoticias();

// https://astro.build/config
export default defineConfig({
  site: 'https://puentesdepapel.munayruray.com',
  // URLs viejas. Astro genera una página con meta refresh + canonical, que funciona
  // en cualquier host; Railway sirve con Caddy y no lee public/_redirects.
  // Con barra final para que el canonical coincida con el de la página real y con el sitemap.
  redirects: {
    '/formas-de-participar': '/voluntariado-adultos-mayores/',
    '/instituciones': '/instituciones-residencias/',
  },
  // El CSS pesa ~12 KB y colgaba de él la carga de las fuentes: en línea sale un salto de red.
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Solo las notas tienen fecha real; inventarla en el resto sería ruido.
      serialize(item) {
        const fecha = lastmodNoticias.get(new URL(item.url).pathname);
        if (fecha) item.lastmod = fecha.toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
