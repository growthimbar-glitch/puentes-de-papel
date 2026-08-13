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
  phone: '+54 9 3518 68-2293',
  phoneHref: 'tel:+5493518682293',
} as const;

// Redes sociales. Dejá `url` vacío ('') para ocultar el ícono en el footer.
export const SOCIALS = [
  { label: 'Instagram', url: 'https://www.instagram.com/_puentesdepapel_/', icon: 'instagram' },
  { label: 'Facebook', url: '', icon: 'facebook' }, // TODO: agregar link real
  { label: 'YouTube', url: '', icon: 'youtube' }, // TODO: agregar link real
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
