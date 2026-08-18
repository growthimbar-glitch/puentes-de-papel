// Datos estructurados (JSON-LD). Los datos salen de consts.ts.

import { SITE, SOCIALS, CONTACT, TEAM, CIFRAS } from './consts';

const abs = (path: string) => new URL(path, SITE.url).href;

const absPage = (path: string) => {
  const url = new URL(path, SITE.url);
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
};

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const personId = (slug: string) => `${absPage('/sobre-el-proyecto')}#${slug}`;

// SOCIALS deja la url vacía en las redes que todavía no existen.
const sameAs = SOCIALS.filter((social) => social.url !== '').map((social) => social.url);

const organization = {
  '@type': 'NGO',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: 'Puentes de Papel - Munay Ruray',
  url: `${SITE.url}/`,
  logo: {
    '@type': 'ImageObject',
    url: abs('/images/logo.webp'),
    caption: `Logo de ${SITE.name}`,
  },
  image: abs('/images/puentes-de-papel-grupo-voluntarios-adultos-mayores-historias.webp'),
  description: SITE.tagline,
  slogan: SITE.tagline,
  inLanguage: 'es-AR',
  foundingDate: CIFRAS.inicioISO,
  ...(sameAs.length > 0 && { sameAs }),
  parentOrganization: {
    '@type': 'Organization',
    name: SITE.org,
    url: SITE.orgUrl,
  },
  email: CONTACT.email,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: CONTACT.email,
    availableLanguage: ['Spanish'],
    areaServed: 'AR',
  },
  // Sin calle: no tenemos domicilio, pero ciudad y provincia sirven para búsquedas locales.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Córdoba',
    addressRegion: 'Córdoba',
    addressCountry: 'AR',
  },
  areaServed: [
    { '@type': 'City', name: 'Córdoba' },
    ...CIFRAS.provincias.map((provincia) => ({ '@type': 'State', name: provincia })),
    { '@type': 'Country', name: 'Argentina' },
  ],
  founder: TEAM.filter((member) => member.isFounder).map((member) => ({
    '@id': personId(member.slug),
  })),
  employee: TEAM.filter((member) => !member.isFounder).map((member) => ({
    '@id': personId(member.slug),
  })),
  knowsAbout: [
    'Voluntariado con adultos mayores',
    'Voluntariado en Córdoba',
    'Voluntariado social en Argentina',
    'Voluntariado a distancia',
    'Acompañamiento a adultos mayores',
    'Vínculos intergeneracionales',
    'Intercambio de cartas',
    'Soledad en la vejez',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  description: SITE.tagline,
  inLanguage: 'es-AR',
  publisher: { '@id': ORG_ID },
};

// En todas las páginas, para que ninguna referencia founder/employee quede colgada.
const people = TEAM.map((member) => ({
  '@type': 'Person',
  '@id': personId(member.slug),
  name: member.name,
  jobTitle: member.jobTitle,
  description: member.description,
  image: abs(member.image),
  url: absPage('/sobre-el-proyecto'),
  worksFor: { '@id': ORG_ID },
}));

const baseGraph = [organization, website, ...people];

// Un solo bloque por página: los nodos propios se suman al grafo base.
export function jsonLdString(extraNodes: Record<string, unknown>[] = []): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [...baseGraph, ...extraNodes],
  })
    .replace(/</g, '\\u003c');
}

interface ArticleInput {
  path: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  image?: string;
  imageAlt?: string;
}

// author y publisher apuntan al NGO por @id: Google exige ambas.
export function newsArticleNode(article: ArticleInput) {
  const url = absPage(article.path);
  return {
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: url,
    url,
    headline: article.title,
    description: article.description,
    datePublished: article.pubDate.toISOString(),
    dateModified: (article.updatedDate ?? article.pubDate).toISOString(),
    inLanguage: 'es-AR',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: abs(article.image),
        ...(article.imageAlt && { caption: article.imageAlt }),
      },
    }),
  };
}

export function faqPageNode(path: string, items: { pregunta: string; respuesta: string }[]) {
  const url = absPage(path);
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}

// Muestra "Inicio › Noticias › Nota" en el resultado de búsqueda.
export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absPage(items[items.length - 1].path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absPage(item.path),
    })),
  };
}
