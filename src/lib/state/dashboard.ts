// src/lib/state/dashboard.ts
import { fetchWorkouts } from '../services/hevy';

// Data types from data-model.md
// ... (interfaces remain the same)

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Workout {
  id: string;
  start_time: string;
  end_time: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: Set[];
}

export interface Set {
  reps: number;
  weight: number;
  unit: string;
}

export interface Goal {
  id: string;
  exercise_name: string;
  target_weight: number;
  target_reps: number;
  deadline: string;
  start_date: string;
}

type DashboardState = {
  workouts: Workout[];
  goals: Goal[];
  isLoading: boolean;
  error: string | null;
};

function createDashboardState() {
  const state = $state<DashboardState>({
    workouts: [],
    goals: [],
    isLoading: false,
    error: null,
  });

  async function loadWorkouts() {
    state.isLoading = true;
    state.error = null;
    try {
      state.workouts = await fetchWorkouts();
    } catch (e: any) {
      state.error = e.message;
    } finally {
      state.isLoading = false;
    }
  }

  function addGoal(goal: Omit<Goal, 'id' | 'start_date'>) {
    const newGoal: Goal = {
      ...goal,
      id: crypto.randomUUID(),
      start_date: new Date().toISOString(),
    };
    state.goals.push(newGoal);
  }

  function updateGoal(updatedGoal: Goal) {
    const index = state.goals.findIndex(g => g.id === updatedGoal.id);
    if (index !== -1) {
      state.goals[index] = updatedGoal;
    }
  }

  return {
    get workouts() { return state.workouts; },
    get goals() { return state.goals; },
    get isLoading() { return state.isLoading; },
    get error() { return state.error; },
    loadWorkouts,
    addGoal,
    updateGoal,
  };
}

export const dashboardState = createDashboardState();

