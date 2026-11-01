<script>
  import { Button } from '#lib/components/ui/button/index.js';
  import { Badge } from '#lib/components/ui/badge/index.js';
  import {ArrowRight} from '@lucide/svelte';
  import { toggleMode } from 'mode-watcher';
</script>

<section class="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 py-24 md:py-32 text-center lg:py-40">
 <Button onclick={toggleMode} variant="outline">
  Toggle Dark Mode
</Button>
  <Badge variant="secondary" class="mb-4">
    <span class="mr-2 rounded-full bg-primary px-1.5 py-0.5 text-xs font-semibold text-primary-foreground">New</span>
    SvelteKit 3.0 is out!
  </Badge>

  <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance max-w-3xl leading-tight">
    Build faster with <span class="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">SvelteKit</span>
  </h1>

  <p class="mx-auto max-w-175 text-muted-foreground text-lg sm:text-xl text-balance">
    The modern full-stack framework paired with beautiful, accessible UI components.
    Everything you need to ship production-ready apps today.
  </p>

  <div class="flex flex-col gap-4 min-[400px]:flex-row justify-center mt-4">
    <Button size="lg" class="gap-2">
      Get Started <ArrowRight class="size-4" />
    </Button>
    <Button size="lg" variant="outline">Learn More</Button>
  </div>
</section>
