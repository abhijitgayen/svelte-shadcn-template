# SvelteKit + shadcn-svelte Starter Template

[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![SvelteKit 3](https://img.shields.io/badge/SvelteKit-3-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn--svelte](https://img.shields.io/badge/shadcn--svelte-Bits_UI-000000?logo=shadcnui&logoColor=white)](https://shadcn-svelte.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-ready, opinionated starter template featuring **Svelte 5 (Runes)**, **SvelteKit 3**, **Tailwind CSS v4**, and **shadcn-svelte** (Bits UI v2). It comes preconfigured with dark mode via `mode-watcher`, Lucide icons, static adapter support, strict TypeScript, ESLint, and Prettier.

---

## ✨ Features

- ⚡ **Svelte 5 & SvelteKit 3**: Built on Svelte 5 utilizing modern Runes (`$state`, `$props`, `$derived`, `$effect`, snippets).
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
| **[Vite 8](https://vite.dev)**                                  | Fast build tool & dev server                      |
| **[TypeScript](https://www.typescriptlang.org)**                | Static type checking                              |

---

## 📁 Project Structure

```text
svelte-shadcn-template/
├── src/
│   ├── lib/
│   │   ├── assets/           # Static assets imported via JS (e.g., favicon.svg)
│   │   ├── components/
│   │   │   └── ui/           # shadcn-svelte UI components (button, accordion, badge, etc.)
│   │   ├── utils.ts          # Utility functions (cn helper with clsx and tw-merge)
│   │   └── index.ts          # Library entry point
│   ├── routes/
│   │   ├── +error.svelte     # Custom error page
│   │   ├── +layout.svelte    # Root layout (ModeWatcher, fonts, global styles)
│   │   ├── +layout.ts        # Layout options (prerender enabled)
│   │   ├── +page.svelte      # Home page demo (buttons, accordion, dark mode toggle)
│   │   └── hero/
│   │       └── +page.svelte  # Responsive hero section demo
│   ├── app.d.ts              # Global TypeScript declarations
│   ├── app.html              # HTML shell template
│   └── globale.css           # Global Tailwind CSS v4 & theme design tokens (OKLCH)
├── static/                   # Static files served at the root URL
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

_(Or `npm install`, `yarn install`, `bun install`)_

### 3. Start Development Server

```sh
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You can also start the server and open it automatically with:

```sh
pnpm dev -- --open
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

| Command            | Description                                        |
| :----------------- | :------------------------------------------------- |
| `pnpm dev`         | Starts the Vite development server with HMR        |
| `pnpm build`       | Generates an optimized production build            |
| `pnpm preview`     | Locally previews the production build              |
| `pnpm check`       | Runs `svelte-check` against TypeScript definitions |
| `pnpm check:watch` | Runs type checking in watch mode                   |
| `pnpm lint`        | Runs Prettier format check and ESLint              |
| `pnpm format`      | Formats codebase with Prettier and Tailwind plugin |

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

If your application requires server endpoints, SSR with dynamic request handling, or database connections on the server:

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
