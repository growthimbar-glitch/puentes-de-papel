# Puentes de Papel

**Puentes de Papel** es una iniciativa de **Munay Ruray** diseñada para conectar generaciones a través de historias y memorias. La plataforma une a jóvenes voluntarios con personas mayores para compartir historias de vida, rescatar memorias y generar vínculos significativos.

Este sitio web está construido utilizando [Astro](https://astro.build/) y estilizado con [Tailwind CSS](https://tailwindcss.com/) y [Lucide Icons](https://lucide.dev/).

---

## Tecnologías y Requisitos

*   **Entorno:** [Bun](https://bun.sh/) (recomendado) o Node.js v22.12.0 o superior.
*   **Framework:** Astro v6.
*   **Estilos:** Tailwind CSS v4.

---

## Inicio Rápido

1.  **Instalar dependencias:**
    ```bash
    bun install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en el archivo de plantilla `.env.example`:
    ```bash
    cp .env.example .env
    ```
    *(Ver detalles de configuración más abajo)*.

3.  **Correr en modo de desarrollo:**
    ```bash
    bun dev
    ```
    El servidor local se abrirá en `http://localhost:4321`.

4.  **Compilar para producción:**
    ```bash
    bun build
    ```
    El resultado estático se generará en la carpeta `dist/` listo para ser desplegado.

---

## Variables de Entorno (`.env`)

Actualmente el sitio es **100% estático y no requiere variables de entorno**:

*   Los **formularios** (voluntarios, residencias y adultos mayores) se realizan mediante **Google Forms externos**, cuyas respuestas se almacenan automáticamente en Google Sheets.
*   Las **donaciones** se muestran como **datos de transferencia bancaria** (Banco / CBU / Alias) directamente en la página, en la sección *"Colaborá con Puentes de Papel"*.

El archivo `.env.example` se conserva como plantilla para futuras integraciones.

---

## Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos (imágenes, fuentes, favicons)
├── src/
│   ├── components/      # Componentes reutilizables de Astro
│   │   ├── BaseLayout.astro       # Layout base (head, SEO, navbar, footer)
│   │   ├── Navbar.astro           # Barra de navegación sticky compartida
│   │   ├── Footer.astro           # Pie de página completo compartido
│   │   └── Card.astro             # Tarjeta reutilizable
│   ├── content/         # Contenido de colecciones
│   │   └── noticias/              # Notas de la sección Noticias (Markdown)
│   ├── content.config.ts # Definición de la colección "noticias"
│   ├── consts.ts        # Configuración central (nav, redes, contacto, forms, banco)
│   ├── pages/           # Páginas del sitio (rutas automáticas de Astro)
│   │   ├── index.astro                 # Home (resumen + CTA + enlaces)
│   │   ├── sobre-el-proyecto.astro     # Historia, misión, equipo, esencia
│   │   ├── voluntariado-adultos-mayores.astro  # Voluntariado, donaciones, colaborar
│   │   ├── instituciones-residencias.astro     # Residencias, escuelas, empresas
│   │   └── noticias/
│   │       ├── index.astro             # Listado de noticias
│   │       └── [...slug].astro         # Detalle de cada nota
│   └── styles/          # Estilos globales CSS
├── public/_redirects    # Redirects 301 de Cloudflare Pages (URLs viejas -> nuevas)
├── .env.example         # Plantilla de variables de entorno (sin variables requeridas)
├── astro.config.mjs     # Configuración del proyecto Astro
└── package.json         # Dependencias y scripts
```
