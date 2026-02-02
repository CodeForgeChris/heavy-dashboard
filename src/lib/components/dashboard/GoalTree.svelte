<!-- src/lib/components/dashboard/GoalTree.svelte -->
<script lang="ts">
  import { SvelteFlow, type Node, type Edge } from '@xyflow/svelte';
  import '@xyflow/svelte/dist/style.css';
  import type { Goal } from '$lib/state/dashboard.svelte';

  type Props = {
    goals: Goal[];
  };
  let { goals }: Props = $props();

  const initialNodes: Node[] = goals.map((goal, i) => ({
    id: goal.id,
    type: 'default',
    data: { label: `${goal.exercise_name}: ${goal.target_weight}kg x ${goal.target_reps}` },
    position: { x: i * 250, y: 100 },
  }));

  const initialEdges: Edge[] = []; // No edges for now, just a list of goals

</script>

<div style="height: 500px;">
  <SvelteFlow nodes={initialNodes} edges={initialEdges} fitView />
</div>
