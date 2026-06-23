# Gara Digital

Sitio web corporativo de Gara Digital, una agencia publicitaria de Panamá. Presenta sus servicios, portafolio, clientes, cobertura de eventos y canales de contacto mediante una experiencia responsiva y optimizada para buscadores.

## Tecnologías

- Next.js 15 con App Router y Turbopack
- React 19 y TypeScript
- Tailwind CSS 4
- React Hook Form y Sonner
- ESLint y Prettier
- `next-sitemap` para generar `sitemap.xml` y `robots.txt`

## Requisitos

- Node.js 20 LTS o una versión posterior compatible con Next.js 15
- npm 10 o superior

## Instalación

```bash
git clone https://github.com/USUARIO/gara-digital.git
cd gara-digital
npm ci
```

`npm ci` instala exactamente las versiones registradas en `package-lock.json`.

## Configuración

Copia la plantilla de variables de entorno:

```bash
cp .env.example .env.local
```

En PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Configura la variable siguiente:

| Variable               | Requerida        | Descripción                                                                                 |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Sí en producción | URL canónica pública, sin `/` final. En desarrollo usa `http://localhost:3000` por defecto. |

No publiques `.env.local` ni otros archivos `.env`. La variable tiene el prefijo `NEXT_PUBLIC_`, por lo que su valor queda expuesto al cliente y no debe contener secretos.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Comandos disponibles:

```bash
npm run lint          # análisis estático
npm run typecheck     # comprobación de tipos
npm run format:check  # validación de formato
npm run build         # compilación de producción y sitemap
npm run start         # servidor sobre una compilación existente
```

## Despliegue

### Vercel

1. Importa el repositorio en Vercel.
2. Define `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
3. Conserva `npm run build` como comando de compilación y `.next` como salida administrada por Vercel.
4. Despliega. El script `postbuild` generará el sitemap y `robots.txt` en `public/`.

### Servidor Node.js

```bash
npm ci
npm run build
npm run start
```

Define `NEXT_PUBLIC_SITE_URL` en el entorno del servidor antes de compilar. El puerto predeterminado es `3000`; puede cambiarse con la variable `PORT`.

## Estructura

```text
gara-digital/
├── app/                    # rutas, layout global, metadatos y estilos
│   ├── blog/               # página de contenidos
│   ├── clientes/           # clientes y testimonios
│   ├── contacto/           # información y formulario de contacto
│   ├── eventos/            # cobertura de eventos
│   ├── nosotros/           # presentación de la agencia
│   ├── portafolio/         # trabajos destacados
│   └── servicios/          # catálogo de servicios
├── components/             # componentes reutilizables de interfaz
├── lib/                    # utilidades compartidas
├── public/                 # imágenes y recursos estáticos
├── .github/workflows/      # validación automática en GitHub Actions
├── next-sitemap.config.js  # sitemap y robots.txt
└── package.json            # scripts y dependencias
```

El formulario valida los datos en el navegador y prepara un mensaje dirigido a WhatsApp; actualmente no almacena información ni llama a una API propia.

## Calidad y contribución

Antes de abrir un pull request, ejecuta:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Los commits siguen [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:` y `ci:`. Mantén cada commit enfocado en un solo propósito y evita mezclar cambios funcionales con formato general.

## Licencia

Este proyecto es privado. Todos los derechos reservados por Gara Digital.
