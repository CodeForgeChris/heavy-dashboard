<!-- src/lib/components/dashboard/GoalForm.svelte -->
<script lang="ts">
  import { dashboardState, type Goal } from '$lib/state/dashboard.svelte';

  export let modalStore: any;

  let goal: Partial<Goal> = {};

  function handleSubmit() {
    if (goal.exercise_name && goal.target_weight && goal.target_reps && goal.deadline) {
      dashboardState.addGoal(goal as Omit<Goal, 'id' | 'start_date'>);
      modalStore.close();
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col gap-4">
    <label class="label">
      <span>Exercise Name</span>
      <input class="input" type="text" bind:value={goal.exercise_name} required />
    </label>
    <label class="label">
      <span>Target Weight</span>
      <input class="input" type="number" bind:value={goal.target_weight} required />
    </label>
    <label class="label">
      <span>Target Reps</span>
      <input class="input" type="number" bind:value={goal.target_reps} required />
    </label>
    <label class="label">
      <span>Deadline</span>
      <input class="input" type="date" bind:value={goal.deadline} required />
    </label>
    <button type="submit" class="btn variant-filled-primary">Save Goal</button>
  </div>
</form>
