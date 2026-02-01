<!-- src/lib/components/dashboard/ProgressiveOverload.svelte -->
<script lang="ts">
  import type { Workout } from '$lib/state/dashboard';
  import Card from '$lib/components/ui/Card.svelte';

  type Props = {
    workouts: Workout[];
  };
  let { workouts }: Props = $props();

  function calculateSuggestions(workouts: Workout[]) {
    const suggestions: string[] = [];
    const exerciseMap = new Map<string, { weight: number, reps: number, date: Date }[]>();

    for (const workout of workouts) {
      for (const exercise of workout.exercises) {
        if (!exerciseMap.has(exercise.name)) {
          exerciseMap.set(exercise.name, []);
        }
        const exerciseData = exerciseMap.get(exercise.name)!;
        for (const set of exercise.sets) {
          exerciseData.push({
            weight: set.weight,
            reps: set.reps,
            date: new Date(workout.start_time),
          });
        }
      }
    }

    for (const [exercise, data] of exerciseMap.entries()) {
      if (data.length > 1) {
        const lastTwo = data.slice(-2);
        const [first, second] = lastTwo;
        if (second.weight > first.weight) {
          suggestions.push(`Good job on increasing the weight for ${exercise}!`);
        } else if (second.reps > first.reps) {
          suggestions.push(`You increased your reps for ${exercise}! Keep it up!`);
        } else {
          suggestions.push(`For ${exercise}, try to increase the weight or reps next time.`);
        }
      }
    }
    return suggestions;
  }

  const suggestions = $derived(calculateSuggestions(workouts));

</script>

<Card>
  <h2 class="text-xl font-bold mb-2">Progressive Overload Suggestions</h2>
  <ul>
    {#each suggestions as suggestion}
      <li>{suggestion}</li>
    {/each}
  </ul>
</Card>
