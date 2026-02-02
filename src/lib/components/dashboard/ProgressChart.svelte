<!-- src/lib/components/dashboard/ProgressChart.svelte -->
<script lang="ts">
  import type { Workout } from '$lib/state/dashboard.svelte';

  type Props = {
    workouts: Workout[];
    exerciseName: string;
  };
  let { workouts, exerciseName }: Props = $props();

  type DataRecord = { x: Date; y: number };

  const data = $derived(workouts.flatMap(workout =>
    workout.exercises
      .filter(e => e.name === exerciseName)
      .flatMap(e => e.sets.map(s => ({
        x: new Date(workout.start_time),
        y: s.weight
      })))
  ));
</script>

{#if data.length > 1}
  <p>Chart functionality is currently unavailable.</p>
{:else}
  <p>Not enough data to display a chart for {exerciseName}.</p>
{/if}
