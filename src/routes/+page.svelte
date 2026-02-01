<script lang="ts">
  import { dashboardState } from '$lib/state/dashboard';
  import Card from '$lib/components/ui/Card.svelte';
  import ProgressChart from '$lib/components/dashboard/ProgressChart.svelte';
  import GoalTree from '$lib/components/dashboard/GoalTree.svelte';
  import ProgressiveOverload from '$lib/components/dashboard/ProgressiveOverload.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import GoalForm from '$lib/components/dashboard/GoalForm.svelte';
  import { modalStore } from 'skeleton-ui';

  const { workouts, goals, isLoading, error, loadWorkouts } = dashboardState;

  loadWorkouts();

  function openGoalModal() {
    modalStore.open({
      title: 'Create a new goal',
      body: GoalForm,
    });
  }
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Gym Dashboard</h1>
    <button class="btn variant-filled-primary" on:click={openGoalModal}>
      New Goal
    </button>
  </div>

  {#if isLoading}
    <p>Loading workouts...</p>
  {:else if error}
    <p class="text-red-500">{error}</p>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <h2 class="text-xl font-bold mb-2">Bench Press Progress</h2>
        <ProgressChart {workouts} exerciseName="Bench Press" />
      </Card>
      <Card>
        <h2 class="text-xl font-bold mb-2">Goals</h2>
        <GoalTree {goals} />
      </Card>
      <div class="lg:col-span-2">
        <ProgressiveOverload {workouts} />
      </div>
    </div>
  {/if}
</div>

<Modal />

