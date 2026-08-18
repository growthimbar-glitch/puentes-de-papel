// Configuración central del sitio Puentes de Papel

export const SITE = {
  name: 'Puentes de Papel',
  tagline: 'Conectando generaciones a través de historias y memorias.',
  org: 'Munay Ruray',
  orgUrl: 'https://munayruray.com',
  url: 'https://puentesdepapel.munayruray.com',
} as const;

// Navegación principal. Con barra final: es la forma canónica y la que declara el sitemap.
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre el proyecto', href: '/sobre-el-proyecto/' },
  { label: 'Formas de participar', href: '/voluntariado-adultos-mayores/' },
  { label: 'Instituciones', href: '/instituciones-residencias/' },
  { label: 'Noticias', href: '/noticias/' },
] as const;


export const OG_IMAGES: Record<string, { width: number; height: number; alt: string }> = {
  '/images/puentes-de-papel-conversacion-parque-adulto-mayor-voluntaria.webp': {
    width: 2816,
    height: 1536,
    alt: 'Una voluntaria conversa con un adulto mayor en un parque durante un encuentro de Puentes de Papel',
  },
  '/images/puentes-de-papel-grupo-voluntarios-adultos-mayores-historias.webp': {
    width: 2816,
    height: 1536,
    alt: 'Un grupo de voluntarios y adultos mayores comparte historias en un encuentro de Puentes de Papel',
  },
  '/images/puentes-de-papel-encuentro-generacional-voluntaria-adulta-mayor.webp': {
    width: 2816,
    height: 1536,
    alt: 'Una voluntaria joven acompaña a una adulta mayor durante un encuentro de Puentes de Papel',
  },
};

export const OG_IMAGE_DEFAULT = '/images/puentes-de-papel-grupo-voluntarios-adultos-mayores-historias.webp';

// Formularios de Google Forms
export const FORMS = {
  voluntarios:
    'https://docs.google.com/forms/d/e/1FAIpQLSe14EEGJmNhw72yo7nNSw-o7KzoO0cySyORClABWr1cNYVKaA/viewform',
  adultosMayores:
    'https://docs.google.com/forms/d/e/1FAIpQLSezOOuEhchF9VfSwY-XW5qhxI66qFAPbIrtb4tbl16yyZl11g/viewform',
  residencias:
    'https://docs.google.com/forms/d/e/1FAIpQLSfsgUEHVjzWmmuFFbbEfn_klaTzJIUB2Bag4J0LrVA8ofJrgw/viewform',
} as const;

// Datos de contacto.
export const CONTACT = {
  email: 'puentesdepapel@imbinstitute.com',
  emailHref: 'mailto:puentesdepapel@imbinstitute.com',
} as const;

// Redes sociales. Dejá `url` vacío ('') para ocultar el ícono en el footer.
export const SOCIALS = [
  { label: 'Instagram', url: 'https://www.instagram.com/_puentesdepapel_/', icon: 'instagram' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@puentes.de.papel', icon: 'tiktok' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/puentes-de-papel/', icon: 'linkedin' },
] as const;

// Cifras del proyecto, confirmadas por la fundadora en agosto de 2026.
export const CIFRAS = {
  inicio: 'abril de 2026',
  inicioISO: '2026-04',
  residencias: 9,
  residenciasAlInicio: 2,
  // El dato exacto es 83; se publica redondeado para que no envejezca a cada alta.
  personasMayores: 80,
  voluntarios: '+500',
  provincias: ['Córdoba', 'Santa Fe', 'Buenos Aires'],
  // Se publica el reparto por provincia, no la lista de instituciones.
  porProvincia: [
    { provincia: 'Córdoba', cantidad: 4 },
    { provincia: 'Santa Fe', cantidad: 3 },
    { provincia: 'Buenos Aires', cantidad: 2 },
  ],
} as const;

export const MEDIOS = [
  {
    medio: 'Telefe Córdoba',
    formato: 'Nota en televisión',
    fecha: '20 de mayo de 2026',
    resumen: 'Participantes de ambas generaciones cuentan cómo funciona el intercambio de cartas.',
    url: '/noticias/nota-telefe-cordoba/',
    urlLabel: 'Ver la nota',
  },
  {
    medio: 'Radio Cristal / VCP',
    formato: 'Entrevista en radio',
    fecha: '18 de mayo de 2026',
    resumen: 'Entrevista sobre el origen del proyecto y el trabajo con residencias.',
    url: 'https://www.instagram.com/_puentesdepapel_/reel/DYe1JN9OFlw/',
    urlLabel: 'Ver la entrevista en Instagram',
  },
] as const;

// Referentes del equipo, para los nodos Person de JSON-LD (ver src/seo.ts).
export const TEAM = [
  {
    name: 'Dana Graciano',
    slug: 'dana-graciano',
    jobTitle: 'Fundadora y Coordinadora General',
    image: '/images/dana-graciano.webp',
    description:
      'Fundadora de Puentes de Papel. Coordina el proyecto que conecta generaciones a través del intercambio de cartas entre jóvenes y personas mayores.',
    isFounder: true,
  },
  {
    name: 'Paula Laurenti',
    slug: 'paula-laurenti',
    jobTitle: 'Comunicación, Marketing y Alianzas',
    image: '/images/paula-laurenti.webp',
    description:
      'Coordina la comunicación institucional, las redes sociales, las campañas de difusión y el vínculo con organizaciones e instituciones.',
    isFounder: false,
  },
  {
    name: 'Rosario Ferrer',
    slug: 'rosario-ferrer',
    jobTitle: 'Desarrollo Institucional y Relaciones Estratégicas',
    image: '/images/rosario-ferrer.webp',
    description:
      'Acompaña la planificación institucional, el desarrollo de nuevas iniciativas y la construcción de alianzas que amplían el impacto del proyecto.',
    isFounder: false,
  },
] as const;

// Datos bancarios para donaciones
export const BANK = {
  banco: 'Brubank',
  titular: 'DANA PAULA GRACIANO',
  cuit: '27-40249261-4',
  cuenta: '1304886721001',
  alias: 'puentes.de.papel',
  cbu: '1430001713048867210013',
} as const;
