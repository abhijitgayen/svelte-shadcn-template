# Common Pitfalls & Mistakes in Svelte 5 + Tailwind v4 + shadcn-svelte

Avoid these common issues when writing or modifying code in this template:

## 1. Svelte 5 Rune Mistakes

| Anti-Pattern (Svelte 4) | Correct Pattern (Svelte 5) | Why |
| :--- | :--- | :--- |
| `export let prop = 'default'` | `let { prop = 'default' }: Props = $props()` | Svelte 5 uses `$props()` rune |
| `let count = 0; count++` | `let count = $state(0); count++` | `$state()` triggers reactivity |
| `$: doubled = count * 2` | `const doubled = $derived(count * 2)` | `$derived()` replaces reactive assignments |
| `$: { console.log(count); }` | `$effect(() => { console.log(count); })` | `$effect()` handles side effects |
| `<slot />` | `{@render children?.()}` with `Snippet` | Svelte 5 replaces slots with snippets |
| `<button on:click={fn}>` | `<button onclick={fn}>` | Svelte 5 uses standard event attributes |

## 2. Tailwind CSS v4 Pitfalls

- **Do NOT create `tailwind.config.js` or `tailwind.config.ts`**: Tailwind v4 is CSS-first. All configurations, `@theme` overrides, and custom utilities belong in `src/globale.css`.
- **Do NOT hardcode raw hex colors**: Always use semantic design tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`, etc.) so components automatically adapt to dark and light modes.
- **Do NOT manually concatenate classes without `cn()`**: Always import `cn` from `#lib/utils.js` or `$lib/utils` to merge Tailwind classes cleanly without conflicts.

## 3. SEO Mistakes

- **Forgetting `<SEO />` on new routes**: Always declare `<SEO title="..." description="..." />` in public routes.
- **Forgetting `sitemap.xml`**: Always register new routes in `src/routes/sitemap.xml/+server.ts`.
- **Not setting `noindex` on error/private pages**: Always set `noindex={true}` and `nofollow={true}` on 404/500/dashboard pages.
- **Relative image URLs in SEO**: Open Graph and Twitter cards require absolute image URLs. The `<SEO />` component automatically resolves relative paths using `siteConfig.url`.

## 4. shadcn-svelte Component Guidelines

- **Import path**: Prefer `#lib/components/ui/<component>/index.js` or `$lib/components/ui/<component>`.
- **Bits UI**: Use compound components (e.g., `<Accordion.Root>`, `<Accordion.Item>`, `<Accordion.Trigger>`, `<Accordion.Content>`).
