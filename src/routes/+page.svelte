<script lang="ts">
  import { Button } from "#lib/components/ui/button/index.js";
  import * as Accordion from "#lib/components/ui/accordion/index.js";
  import { toggleMode } from 'mode-watcher';
  console.log('hello calling toggleMode')
</script>


<main class="min-h-screen p-8 flex flex-col justify-center items-center
 gap-4">
 <Button onclick={toggleMode} variant="outline">
  Toggle Dark Mode
</Button>

    <div class="flex gap-4">
      <Button>Default Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
    <Accordion.Root type="single" class="max-w-md w-full mt-6">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is SvelteKit?</Accordion.Trigger>
        <Accordion.Content>
          SvelteKit is the official full-stack framework for Svelte. It handles
          routing, server-side rendering, and much more out of the box.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Shadcn-Svelte?</Accordion.Trigger>
        <Accordion.Content>
          Shadcn-Svelte is a collection of copy-paste UI components built with
          Tailwind CSS and Bits UI — designed specifically for Svelte projects.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Do I need to know Tailwind?</Accordion.Trigger>
        <Accordion.Content>
          Basic Tailwind knowledge helps, but you can get pretty far just using
          the components as-is without touching the underlying styles.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
</main>
