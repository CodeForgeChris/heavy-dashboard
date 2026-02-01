<!-- src/lib/components/ui/Modal.svelte -->
<script lang="ts">
  import { modalStore } from 'skeleton-ui';
</script>

{#if $modalStore}
  <div class="modal-container">
    <div class="modal">
      <slot />
    </div>
  </div>
{/if}
