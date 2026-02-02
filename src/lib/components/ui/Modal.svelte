<!-- src/lib/components/ui/Modal.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  let modalStore;

  onMount(async () => {
    const skeleton = await import('skeleton-ui');
    modalStore = skeleton.modalStore;
  });
</script>

{#if modalStore && $modalStore}
  <div class="modal-container">
    <div class="modal">
      <slot />
    </div>
  </div>
{/if}
