---
name: sveltekit-shadcn
description: Comprehensive guidelines and best practices for developing in this SvelteKit 3 + Svelte 5 (Runes) + Tailwind CSS v4 + shadcn-svelte starter template. Use this skill whenever creating or editing components, pages, routes, styling, dark mode, SEO, or adding shadcn-svelte primitives.
metadata:
  namespace: template
---

# AI Agent Guidelines: SvelteKit 3 + Svelte 5 + shadcn-svelte

Welcome AI Agent. This repository is a production-grade template using **SvelteKit 3**, **Svelte 5 (Runes)**, **Tailwind CSS v4**, and **shadcn-svelte** (Bits UI v2). Follow these exact guidelines to build features quickly and accurately.

---

## ⚡ Quick CLI Commands

- **Start dev server**: `pnpm dev`
- **Type check**: `pnpm check`
- **Lint & Format**: `pnpm lint` / `pnpm format`
- **Production build**: `pnpm build`
- **Sync AI rules**: `pnpm ai:sync`
- **Add a shadcn-svelte component**: `pnpm dlx shadcn-svelte@latest add <component>`

---

## 🎨 CSS Architecture & Complete Color System (`src/globale.css`)

> [!IMPORTANT]
> **Tailwind CSS v4 is CSS-first**. There is NO `tailwind.config.js`.
> All theme tokens, animations, and color definitions are located in [`src/globale.css`](src/globale.css).
> **NEVER hardcode raw hex/rgb values** (e.g. `#ffffff` or `rgb(0,0,0)`). Always use the semantic CSS tokens below so components automatically support Light & Dark modes seamlessly.

### 1. OKLCH Semantic Color Palette

| Token / Role | Tailwind Utility Classes | Light Mode (OKLCH) | Dark Mode (OKLCH) | Usage Guidance |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `bg-background` / `text-foreground` | `oklch(1 0 0)` (White) | `oklch(0.145 0 0)` (Dark Zinc) | Page root and main surface containers |
| **Card** | `bg-card` / `text-card-foreground` | `oklch(1 0 0)` (White) | `oklch(0.205 0 0)` (Elevated Zinc) | Cards, panels, dropdown sheets |
| **Popover** | `bg-popover` / `text-popover-foreground` | `oklch(1 0 0)` (White) | `oklch(0.205 0 0)` | Tooltips, popovers, context menus |
| **Primary** | `bg-primary` / `text-primary-foreground` | `oklch(0.205 0 0)` (Near Black) | `oklch(0.922 0 0)` (Near White) | Primary call-to-actions, active state |
| **Secondary** | `bg-secondary` / `text-secondary-foreground` | `oklch(0.97 0 0)` (Light Gray) | `oklch(0.269 0 0)` (Muted Dark) | Secondary buttons, subtle badges, chips |
| **Muted** | `bg-muted` / `text-muted-foreground` | `oklch(0.97 0 0)` / `oklch(0.556 0 0)` | `oklch(0.269 0 0)` / `oklch(0.708 0 0)` | Captions, subtitle text, disabled backgrounds |
| **Accent** | `bg-accent` / `text-accent-foreground` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Hover highlights, active list item backgrounds |
| **Destructive** | `bg-destructive` / `text-destructive` | `oklch(0.577 0.245 27.325)` (Red) | `oklch(0.704 0.191 22.216)` (Soft Red) | Delete buttons, destructive warnings, errors |
| **Border** | `border-border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Component outlines, card borders, table dividers |
| **Input** | `border-input` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 15%)` | Input and form control borders |
| **Ring** | `ring-ring` / `outline-ring` | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` | Focus rings & accessibility focus outlines |
| **Sidebar** | `bg-sidebar` / `text-sidebar-foreground` | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` | Navigation sidebars & drawers |
| **Charts (1-5)** | `text-chart-1` ... `text-chart-5` | Blue, Green, Yellow, Orange, Red | Tailored vibrant OKLCH variants | Data visualizations, metrics, badges |

### 2. Border Radius Scale
The base radius is defined via `--radius: 0.625rem;` (10px):
- `rounded-sm`: `calc(var(--radius) - 4px)` = 6px
- `rounded-md`: `calc(var(--radius) - 2px)` = 8px
- `rounded-lg`: `var(--radius)` = 10px
- `rounded-xl`: `calc(var(--radius) + 4px)` = 14px

### 3. Animations & Transitions
- Configured with `tw-animate-css` (`@import "tw-animate-css";`).
- Supports standard animation utilities like `animate-in`, `animate-out`, `fade-in`, `zoom-in`, `slide-in-from-top`, etc.

### 4. How Dark Mode Operates
- Dark variant is activated via: `@custom-variant dark (&:is(.dark *));`.
- Controlled by `mode-watcher` which toggles the `.dark` class on `document.documentElement`.
- To style dark-mode overrides if ever needed: use `dark:bg-...` or `dark:text-...`.

---

## 🛑 Strict Development Rules (Never Break These)

1. **Svelte 5 Runes Only**:
   - ❌ NEVER use `export let prop = '...'` -> ✅ `let { prop = '...' }: Props = $props()`
   - ❌ NEVER use `let count = 0; count++` -> ✅ `let count = $state(0); count++`
   - ❌ NEVER use `$: doubled = count * 2` -> ✅ `const doubled = $derived(count * 2)`
   - ❌ NEVER use `$: { ... }` -> ✅ `$effect(() => { ... })`
   - ❌ NEVER use `<slot />` -> ✅ `Snippet` and `{@render children?.()}`
   - ❌ NEVER use `on:click={...}` -> ✅ `onclick={...}`

2. **Tailwind CSS v4 & Styling Rules**:
   - ❌ NEVER create `tailwind.config.js` or `tailwind.config.ts`.
   - Global CSS and theme tokens are in `src/globale.css` using `@import "tailwindcss";`.
   - Always merge conditional classes with `cn(...)` from `#lib/utils.js`.

3. **SEO & Sitemap Rules**:
   - Every public page MUST include `<SEO title="..." description="..." />` imported from `#lib/components/seo/index.js`.
   - Every new public route MUST be added to `routes` in `src/routes/sitemap.xml/+server.ts`.
   - Error and private pages must specify `<SEO noindex={true} nofollow={true} />`.

4. **Import Aliases**:
   - `#lib/*` -> `src/lib/*`
   - `#components/*` -> `src/lib/components/*`
   - `$lib/*` -> `src/lib/*`

---

## 🧩 Copy-Paste Snippets

### Standard Component (`src/lib/components/...`)
```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '#lib/utils.js';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    children?: Snippet;
  }

  let { title, description, class: className, children, ...restProps }: Props = $props();
</script>

<div class={cn('rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm', className)} {...restProps}>
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-semibold tracking-tight">{title}</h3>
  </div>
  {#if description}
    <p class="mt-1 text-sm text-muted-foreground">{description}</p>
  {/if}
  {#if children}
    <div class="mt-4">
      {@render children()}
    </div>
  {/if}
</div>
```

### Standard Route (`src/routes/<path>/+page.svelte`)
```svelte
<script lang="ts">
  import { SEO } from '#lib/components/seo/index.js';
  import { Button } from '#lib/components/ui/button/index.js';
</script>

<SEO
  title="Page Title"
  description="High-converting description for search engines."
  keywords={['keyword1', 'keyword2']}
/>

<main class="mx-auto max-w-5xl px-6 py-12">
  <h1 class="text-3xl font-bold tracking-tight text-foreground">Page Title</h1>
  <p class="mt-2 text-muted-foreground">Page subtitle or description.</p>
  <div class="mt-6 flex gap-3">
    <Button>Primary Action</Button>
    <Button variant="outline">Secondary Action</Button>
  </div>
</main>
```
