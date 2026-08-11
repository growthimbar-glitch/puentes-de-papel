// -----------------------------------------------------------------------------
// Configuración central del sitio Puentes de Papel
// -----------------------------------------------------------------------------
// Este archivo concentra los datos compartidos por navbar, footer y páginas.
// Editá acá una sola vez y se refleja en todo el sitio.
// -----------------------------------------------------------------------------

export const SITE = {
  name: 'Puentes de Papel',
  tagline: 'Conectando generaciones a través de historias y memorias.',
  org: 'Munay Ruray',
  orgUrl: 'https://munayruray.com',
  url: 'https://puentesdepapel.munayruray.com',
} as const;

// Navegación principal (usada por navbar y footer).
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre el proyecto', href: '/sobre-el-proyecto' },
  { label: 'Formas de participar', href: '/formas-de-participar' },
  { label: 'Instituciones', href: '/instituciones' },
  { label: 'Noticias', href: '/noticias' },
] as const;

// Formularios de Google Forms (destino final actual).
// TODO: si en el futuro cambia la URL final del formulario, actualizar acá.
export const FORMS = {
  voluntarios:
    'https://docs.google.com/forms/d/e/1FAIpQLSe14EEGJmNhw72yo7nNSw-o7KzoO0cySyORClABWr1cNYVKaA/viewform',
  adultosMayores:
    'https://docs.google.com/forms/d/e/1FAIpQLSezOOuEhchF9VfSwY-XW5qhxI66qFAPbIrtb4tbl16yyZl11g/viewform',
  residencias:
    'https://docs.google.com/forms/d/e/1FAIpQLSfsgUEHVjzWmmuFFbbEfn_klaTzJIUB2Bag4J0LrVA8ofJrgw/viewform',
} as const;

// Datos de contacto.
// TODO: reemplazar por el email real de contacto de Puentes de Papel.
export const CONTACT = {
  email: 'hola@puentesdepapel.munayruray.com', // TODO: email real
} as const;

// Redes sociales. Dejá `url` vacío ('') para ocultar el ícono en el footer.
// TODO: reemplazar los placeholders por los links reales de cada red.
export const SOCIALS = [
  { label: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram' }, // TODO
  { label: 'Facebook', url: '', icon: 'facebook' }, // TODO
  { label: 'YouTube', url: 'https://www.youtube.com/', icon: 'youtube' }, // TODO
] as const;

// Datos bancarios para donaciones (se muestran en /formas-de-participar).
export const BANK = {
  banco: 'Brubank',
  titular: 'DANA PAULA GRACIANO',
  cuit: '27-40249261-4',
  cuenta: '1304886721001',
  alias: 'puentes.de.papel',
  cbu: '1430001713048867210013',
} as const;
