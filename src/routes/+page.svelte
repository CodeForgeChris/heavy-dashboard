<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { dashboardState } from '$lib/state/dashboard.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import DashboardOverviewCharts from '$lib/components/dashboard/DashboardOverviewCharts.svelte';
  import ExercisePerformanceChart from '$lib/components/dashboard/ExercisePerformanceChart.svelte'; // New Import
  import ProgressiveOverload from '$lib/components/dashboard/ProgressiveOverload.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import GoalForm from '$lib/components/dashboard/GoalForm.svelte';
  import type { PageData } from './$types';
  import type { Workout } from '$lib/state/dashboard.svelte';

  export let data: PageData;
  
  let GoalTree = null;
  let allExerciseNames: string[] = [];
  let selectedExerciseName: string | undefined;

  onMount(async () => {
    const module = await import('$lib/components/dashboard/GoalTree.svelte');
    GoalTree = module.default;

    // Populate allExerciseNames after workouts are loaded
    dashboardState.subscribe($state => {
      if ($state.workouts && $state.workouts.length > 0) {
        const exercises = new Set<string>();
        $state.workouts.forEach((workout: Workout) => {
          workout.exercises.forEach(exercise => {
            exercises.add(exercise.name);
          });
        });
        allExerciseNames = Array.from(exercises).sort();
        if (!selectedExerciseName && allExerciseNames.length > 0) {
          selectedExerciseName = allExerciseNames[0]; // Select the first exercise by default
        }
      }
    });
  });

  dashboardState.init(data);

  const { goals, isLoading, error } = dashboardState;

  async function openGoalModal() {
    if (browser) {
      const { modalStore } = await import('skeleton-ui');
      modalStore.open({
        title: 'Create a new goal',
        body: GoalForm,
        bodyProps: { modalStore },
      });
    }
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
    <p>Loading dashboard...</p>
  {:else if error}
    <p class="text-red-500">{error}</p>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="lg:col-span-2">
        <Card>
          <DashboardOverviewCharts />
        </Card>
      </div>
      <Card>
        <h2 class="text-xl font-bold mb-2">Goals</h2>
        {#if GoalTree}
          <svelte:component this={GoalTree} {goals} />
        {:else}
          <p>Loading Goal Tree...</p>
        {/if}
      </Card>
      <div class="lg:col-span-2">
        <ProgressiveOverload workouts={$dashboardState.workouts} />
      </div>

      <div class="lg:col-span-2">
        <Card>
          <h2 class="text-xl font-bold mb-2">Detailed Exercise Performance</h2>
          {#if allExerciseNames.length > 0}
            <div class="mb-4">
              <label for="exercise-select" class="block text-sm font-medium text-gray-700">Select Exercise:</label>
              <select id="exercise-select" bind:value={selectedExerciseName} class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {#each allExerciseNames as name}
                  <option value={name}>{name}</option>
                {/each}
              </select>
            </div>
            {#if selectedExerciseName}
              <ExercisePerformanceChart exerciseTemplateId={selectedExerciseName} />
            {:else}
              <p>Please select an exercise to view its performance.</p>
            {/if}
          {:else}
            <p>No exercises found to analyze performance.</p>
          {/if}
        </Card>
      </div>
    </div>
  {/if}
</div>

{#if browser}
  <Modal />
{/if}
