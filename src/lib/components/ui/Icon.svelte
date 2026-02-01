<!-- src/lib/components/ui/Icon.svelte -->
<script lang="ts">
  import type { Icon as LucideIcon } from 'lucide-svelte';
  import { dynamic } from 'svelte/dynamic';

  type Props = {
    icon: string;
    [key: string]: any;
  };
  let { icon, ...props }: Props = $props();

  const iconComponent = dynamic(() =>
    import('lucide-svelte').then((mod) => mod[icon] as LucideIcon)
  );
</script>

<svelte:component this={iconComponent} {...props} />
