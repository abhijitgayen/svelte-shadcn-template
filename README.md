# SvelteKit + shadcn-svelte Starter Template

[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![SvelteKit 3](https://img.shields.io/badge/SvelteKit-3-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn--svelte](https://img.shields.io/badge/shadcn--svelte-Bits_UI-000000?logo=shadcnui&logoColor=white)](https://shadcn-svelte.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO Ready](https://img.shields.io/badge/SEO-Optimized-success?logo=google&logoColor=white)](https://developers.google.com/search)
[![AI Ready](https://img.shields.io/badge/AI_Skills-Unified-8A2BE2?logo=openai&logoColor=white)](AGENTS.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-ready starter template featuring **Svelte 5 (Runes)**, **SvelteKit 3**, **Tailwind CSS v4**, and **shadcn-svelte** (Bits UI v2). It comes preconfigured with **top-tier SEO** (meta tags, Open Graph, Twitter cards, JSON-LD structured data, dynamic XML sitemap, `robots.txt`), a **Unified AI Skill Hub** (single source of truth for Cursor, Claude Code, GitHub Copilot, Windsurf, Devin), dark mode via `mode-watcher`, Lucide icons, static adapter support, strict TypeScript, ESLint, and Prettier.

---

## ✨ Features

- ⚡ **Svelte 5 & SvelteKit 3**: Built on Svelte 5 utilizing modern Runes (`$state`, `$props`, `$derived`, `$effect`, snippets).
- 🤖 **Unified AI Skill (Single Source of Truth)**:
  - All AI instructions live in a single file: [`AGENTS.md`](AGENTS.md).
  - Synchronized via `pnpm ai:sync` across **Cursor** (`.cursorrules`, `.cursor/rules`), **Claude Code** (`CLAUDE.md`), **GitHub Copilot** (`.github/copilot-instructions.md`), and **Windsurf** (`.windsurfrules`).
  - Ensures any AI tool writes strictly idiomatic Svelte 5 runes, Tailwind v4 CSS-first tokens, and valid SEO.
- 🔍 **Top-Tier SEO Setup Out of the Box**:
  - Centralized site configuration in `src/lib/config/site.ts`.
  - Reusable, Svelte 5 rune-based `<SEO />` component (`#lib/components/seo/index.js`).
  - Automatic Open Graph (`og:*`), Twitter Cards (`summary_large_image`), and canonical URL generation.
  - Google Rich Results ready: Schema.org **JSON-LD structured data** (`WebSite`, `SoftwareApplication`, `Article`, etc.).
  - Static prerendered **XML Sitemap** (`/sitemap.xml`) and search-engine compliant `robots.txt`.
  - Modern web app manifest (`site.webmanifest`) and responsive theme-color meta tags.
  - Pre-designed, high-resolution Open Graph social preview template (`static/og.svg`).
- 🎨 **shadcn-svelte & Bits UI v2**: Fully accessible, unstyled primitives beautifully styled with Tailwind CSS and Tailwind Variants.
- 🌈 **Tailwind CSS v4**: Ultra-fast, CSS-first architecture configured with `@tailwindcss/vite`, modern OKLCH theme colors, and CSS variables.
- 🌙 **Seamless Dark Mode**: Zero-flicker light/dark theme switching configured out of the box via [`mode-watcher`](https://github.com/svecosystem/mode-watcher).
- 🧩 **Pre-installed Components**: Includes sample components (`button`, `accordion`, `badge`) and starter demo pages (`/` and `/hero`).
- 💎 **Lucide Icons**: Ready-to-use vector icons from [`@lucide/svelte`](https://lucide.dev).
- 🚀 **Static Site Ready**: Pre-configured with [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static) for easy deployment to GitHub Pages, Cloudflare Pages, Netlify, or Vercel.
- 🛠️ **Developer Experience**:
  - TypeScript strict typing.
  - ESLint 9/10 with `eslint-plugin-svelte`.
  - Prettier with automatic Tailwind class sorting (`prettier-plugin-tailwindcss`) and Svelte formatting.
  - Custom import aliases (`#lib/*`, `#components/*`, and `$lib/*`).

---

## 🛠️ Tech Stack

| Technology                                                      | Purpose                                           |
| :-------------------------------------------------------------- | :------------------------------------------------ |
| **[Svelte 5](https://svelte.dev)**                              | Modern reactive web framework with Runes          |
| **[SvelteKit 3](https://svelte.dev/docs/kit)**                  | Full-stack application router & static generation |
| **[Tailwind CSS v4](https://tailwindcss.com)**                  | Utility-first styling with `@tailwindcss/vite`    |
| **[shadcn-svelte](https://shadcn-svelte.com)**                  | Component library built on Bits UI & Tailwind     |
| **[Bits UI v2](https://bits-ui.com)**                           | Headless, accessible component primitives         |
| **[mode-watcher](https://github.com/svecosystem/mode-watcher)** | Dark mode & theme manager for SvelteKit           |
| **[@lucide/svelte](https://lucide.dev)**                        | Modern icon set                                   |
| **[Schema.org JSON-LD](https://schema.org)**                    | Structured data for Google & search engines       |
| **[Unified AI Skills](AGENTS.md)**                              | Single source of truth for all AI tools           |
| **[Vite 8](https://vite.dev)**                                  | Fast build tool & dev server                      |
| **[TypeScript](https://www.typescriptlang.org)**                | Static type checking                              |

---

## 📁 Project Structure

```text
svelte-shadcn-template/
├── AGENTS.md                 # 🤖 Master AI Development Manual (Single Source of Truth)
├── CLAUDE.md                 # Claude Code configuration (synced from AGENTS.md)
├── .cursorrules              # Cursor IDE configuration (synced from AGENTS.md)
├── .cursor/rules/            # Cursor MDC rules (synced from AGENTS.md)
├── .github/
│   └── copilot-instructions.md # GitHub Copilot configuration (synced from AGENTS.md)
├── .windsurfrules            # Windsurf IDE configuration (synced from AGENTS.md)
├── skills/
│   └── sveltekit-shadcn/     # Antigravity/Agent skill (synced from AGENTS.md)
├── scripts/
│   └── sync-ai-rules.js      # Automatic sync script for all AI tools
├── src/
│   ├── lib/
│   │   ├── assets/           # Static assets imported via JS (e.g., favicon.svg)
│   │   ├── components/
│   │   │   ├── seo/          # Svelte 5 Rune-based SEO component
│   │   │   └── ui/           # shadcn-svelte UI components (button, accordion, badge, etc.)
│   │   ├── config/
│   │   │   └── site.ts       # Centralized SEO metadata, URLs, and social links
│   │   ├── utils.ts          # Utility functions (cn helper with clsx and tw-merge)
│   │   └── index.ts          # Library entry point (exports siteConfig, SEO, etc.)
│   ├── routes/
│   │   ├── +error.svelte     # Custom error page (with noindex SEO)
│   │   ├── +layout.svelte    # Root layout (ModeWatcher, default SEO, global styles)
│   │   ├── +layout.ts        # Layout options (prerender enabled)
│   │   ├── +page.svelte      # Home page demo (with rich JSON-LD SEO)
│   │   ├── hero/
│   │   │   └── +page.svelte  # Responsive hero section demo
│   │   └── sitemap.xml/
│   │       └── +server.ts    # Dynamic/static XML sitemap generator
│   ├── app.d.ts              # Global TypeScript declarations
│   ├── app.html              # HTML shell template (manifest, icons, theme-color)
│   └── globale.css           # Global Tailwind CSS v4 & theme design tokens (OKLCH)
├── static/
│   ├── favicon.svg           # Scalable vector favicon
│   ├── og.svg                # 1200x630 Open Graph social preview template
│   ├── robots.txt            # Search crawler directives + Sitemap link
│   └── site.webmanifest      # PWA & web application manifest
├── components.json           # shadcn-svelte CLI configuration
├── eslint.config.js          # ESLint flat configuration
├── package.json              # Project scripts and dependencies
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite & SvelteKit configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or v20+ recommended) and [pnpm](https://pnpm.io/) (or `npm`/`yarn`/`bun`) installed.

### 1. Clone or Use This Template

```sh
git clone https://github.com/<your-username>/<your-repo-name>.git my-project
cd my-project
```

### 2. Install Dependencies

```sh
pnpm install
```

### 3. Start Development Server

```sh
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You can also start the server and open it automatically with:

```sh
pnpm dev -- --open
```

---

## 🤖 Unified AI Skill (Single Source of Truth)

You don't need to maintain separate instruction files for Cursor, Claude, Copilot, or Windsurf. Everything is managed from **one central file**:

```text
                  ┌─────────────────┐
                  │    AGENTS.md    │  <-- Single Source of Truth (Edit Here)
                  └────────┬────────┘
        ┌──────────────────┼──────────────────┬─────────────────┐
        ▼                  ▼                  ▼                 ▼
   .cursorrules        CLAUDE.md       copilot-instructions   .windsurfrules
   (Cursor IDE)      (Claude Code)       (GitHub Copilot)      (Windsurf IDE)
```

### How to Use:

1. **Edit in one place**: Whenever you want to add guidelines or change project conventions, update [`AGENTS.md`](AGENTS.md).
2. **Sync in one command**:
   ```sh
   pnpm ai:sync
   ```
   This automatically propagates the rules to `.cursorrules`, `CLAUDE.md`, `.github/copilot-instructions.md`, `.windsurfrules`, and `skills/sveltekit-shadcn/SKILL.md`.

Now, any AI tool you use will immediately understand:

- Strict **Svelte 5 Runes** (`$state`, `$props`, `$derived`, `$effect`, snippets).
- **Tailwind CSS v4**'s CSS-first architecture in `src/globale.css`.
- **shadcn-svelte** and **Bits UI** component patterns.
- Automatic **`<SEO />`** and `/sitemap.xml` registration.

---

## 🔍 SEO & Search Engine Optimization

This template includes a complete SEO engine designed to give your project top rankings in Google, Bing, and other search engines.

### 1. Configure Your Site Metadata

Update `src/lib/config/site.ts` with your domain, brand name, and social handles:

```ts
export const siteConfig = {
	name: 'My Awesome Product',
	shortName: 'MyProduct',
	description: 'The best platform for building modern web applications.',
	url: 'https://myawesomeproduct.com',
	ogImage: 'https://myawesomeproduct.com/og.svg',
	author: 'Your Name or Company',
	twitterHandle: '@yourhandle',
	keywords: ['Svelte', 'Web App', 'SaaS', 'Tailwind CSS']
	// ...
};
```

### 2. Using the `<SEO />` Component on Any Route

Import `<SEO />` from `#lib/components/seo/index.js` or `$lib`:

```svelte
<script lang="ts">
	import { SEO } from '#lib/components/seo/index.js';
</script>

<SEO
	title="Pricing Plans"
	description="Choose the right subscription plan for your team."
	keywords={['pricing', 'saas subscription', 'plans']}
	type="website"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Pro Subscription',
		description: 'Annual team membership',
		offers: {
			'@type': 'Offer',
			price: '29',
			priceCurrency: 'USD'
		}
	}}
/>
```

#### Available `<SEO />` Props:

| Prop            | Type                 | Default                  | Description                                                   |
| :-------------- | :------------------- | :----------------------- | :------------------------------------------------------------ |
| `title`         | `string`             | `siteConfig.name`        | Page title (automatically suffixed with `\| siteConfig.name`) |
| `description`   | `string`             | `siteConfig.description` | Page description for meta & Open Graph tags                   |
| `canonical`     | `string`             | Current route URL        | Explicit canonical URL (prevents duplicate content penalties) |
| `keywords`      | `string[] \| string` | `siteConfig.keywords`    | Meta keywords                                                 |
| `image`         | `string`             | `siteConfig.ogImage`     | URL or path to Open Graph & Twitter share preview image       |
| `imageAlt`      | `string`             | `formattedTitle`         | Alternative text description for the preview image            |
| `type`          | `string`             | `'website'`              | Open Graph type (`website`, `article`, etc.)                  |
| `noindex`       | `boolean`            | `false`                  | Set to `true` on error/admin pages to block indexing          |
| `nofollow`      | `boolean`            | `false`                  | Tell search engines not to follow links on this page          |
| `publishedTime` | `string`             | `undefined`              | ISO date string for blog posts / articles                     |
| `modifiedTime`  | `string`             | `undefined`              | ISO date string for article modifications                     |
| `author`        | `string`             | `siteConfig.author`      | Content author                                                |
| `jsonLd`        | `object \| array`    | `WebSite` Schema         | Custom Schema.org JSON-LD structured data                     |

### 3. Automatic XML Sitemap (`/sitemap.xml`)

A static/dynamic XML sitemap is automatically generated via `src/routes/sitemap.xml/+server.ts`. When you run `pnpm build`, it prerenders to `build/sitemap.xml`.

To register new pages in the sitemap, simply add them to the `routes` array in `src/routes/sitemap.xml/+server.ts`:

```ts
const routes: SitemapRoute[] = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: '/hero', priority: '0.8', changefreq: 'monthly' },
	{ path: '/pricing', priority: '0.9', changefreq: 'weekly' }
];
```

### 4. `robots.txt` & Search Crawler Directives

- Crawlers are allowed by default in `static/robots.txt`.
- Your `sitemap.xml` location is automatically announced to crawlers:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://yourdomain.com/sitemap.xml
  ```

---

## 🧩 Adding shadcn-svelte Components

You can easily add new components using the official `shadcn-svelte` CLI.

```sh
pnpm dlx shadcn-svelte@latest add <component-name>
```

### Examples:

```sh
# Add dialog modal
pnpm dlx shadcn-svelte@latest add dialog

# Add dropdown menu
pnpm dlx shadcn-svelte@latest add dropdown-menu

# Add input & card
pnpm dlx shadcn-svelte@latest add input card
```

Components are placed directly into `src/lib/components/ui/<component>/`, giving you complete control to inspect and customize their code.

### Importing Components

You can import components using either standard SvelteKit `$lib` aliases or the configured subpath aliases:

```svelte
<script lang="ts">
	// Using subpath import
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Accordion from '#lib/components/ui/accordion/index.js';

	// Or using $lib
	import { Badge } from '$lib/components/ui/badge';
</script>

<Button variant="default">Click me</Button>
<Badge variant="secondary">New</Badge>
```

---

## 🌙 Dark Mode

Dark mode is handled automatically with [`mode-watcher`](https://github.com/svecosystem/mode-watcher).

1. **Root Setup**: `<ModeWatcher />` is mounted inside `src/routes/+layout.svelte`.
2. **Toggle Theme**: Import `toggleMode` or `setMode` anywhere in your application:

```svelte
<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '#lib/components/ui/button/index.js';
</script>

<Button onclick={toggleMode} variant="outline">
	Toggle Theme ({$mode})
</Button>
```

Theme colors are defined in `src/globale.css` using the `@custom-variant dark (&:is(.dark *));` directive and CSS variables for both light and dark modes.

---

## 📜 Available Scripts

| Command            | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| `pnpm dev`         | Starts the Vite development server with HMR                        |
| `pnpm build`       | Generates an optimized production build (including `/sitemap.xml`) |
| `pnpm preview`     | Locally previews the production build                              |
| `pnpm check`       | Runs `svelte-check` against TypeScript definitions                 |
| `pnpm check:watch` | Runs type checking in watch mode                                   |
| `pnpm lint`        | Runs Prettier format check and ESLint                              |
| `pnpm format`      | Formats codebase with Prettier and Tailwind plugin                 |
| `pnpm ai:sync`     | Synchronizes all AI tool configs from `AGENTS.md`                  |

---

## 🚢 Deployment

### Static Hosting (Default)

This template is configured with [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static) and `prerender = true` in `src/routes/+layout.ts`.

When you run:

```sh
pnpm build
```

The output static HTML/CSS/JS files are written to the `build/` directory, ready to deploy to:

- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- AWS S3, Firebase Hosting, Nginx, or Apache

### Switching Adapters for SSR / Server Routes

If your application requires server endpoints, dynamic database connections, or request-time SSR:

1. Install your desired adapter (e.g., `@sveltejs/adapter-node`, `@sveltejs/adapter-auto`, or `@sveltejs/adapter-cloudflare`):
   ```sh
   pnpm add -D @sveltejs/adapter-node
   ```
2. Update `vite.config.ts`:
   ```ts
   import { defineConfig } from 'vite';
   import { sveltekit } from '@sveltejs/kit/vite';
   import tailwindcss from '@tailwindcss/vite';
   import adapter from '@sveltejs/adapter-node';

   export default defineConfig({
   	plugins: [
   		tailwindcss(),
   		sveltekit({
   			adapter: adapter()
   		})
   	]
   });
   ```
3. Remove or adjust `export const prerender = true;` in `src/routes/+layout.ts` as needed.

---

## 🎨 Theming & Customization

The color system is configured in `src/globale.css` using modern **OKLCH** color values. You can easily modify primary colors, border radiuses, backgrounds, and accents:

```css
:root {
	--radius: 0.625rem;
	--background: oklch(1 0 0);
	--foreground: oklch(0.145 0 0);
	--primary: oklch(0.205 0 0);
	--primary-foreground: oklch(0.985 0 0);
	/* ... */
}

.dark {
	--background: oklch(0.145 0 0);
	--foreground: oklch(0.985 0 0);
	--primary: oklch(0.922 0 0);
	--primary-foreground: oklch(0.205 0 0);
	/* ... */
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
