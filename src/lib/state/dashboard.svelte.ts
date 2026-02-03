// src/lib/state/dashboard.svelte.ts
import { writable } from 'svelte/store';
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
  const { subscribe, update } = writable<DashboardState>({
    workouts: [],
    goals: [],
    isLoading: false,
    error: null,
  });

  function init(initialData: { workouts: Workout[] }) {
    update(state => ({...state, workouts: initialData.workouts}));
  }

  function addGoal(goal: Omit<Goal, 'id' | 'start_date'>) {
    const newGoal: Goal = {
      ...goal,
      id: crypto.randomUUID(),
      start_date: new Date().toISOString(),
    };
    update(state => ({ ...state, goals: [...state.goals, newGoal] }));
  }

  function updateGoal(updatedGoal: Goal) {
    update(state => {
      const index = state.goals.findIndex(g => g.id === updatedGoal.id);
      if (index !== -1) {
        const newGoals = [...state.goals];
        newGoals[index] = updatedGoal;
        return { ...state, goals: newGoals };
      }
      return state;
    });
  }

  return {
    subscribe,
    init,
    addGoal,
    updateGoal,
  };
}

export const dashboardState = createDashboardState();

