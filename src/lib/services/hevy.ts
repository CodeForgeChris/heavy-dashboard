
import { dev } from '$app/environment';
import type { Workout, Exercise, Set } from '../state/dashboard.svelte';

// Assuming VITE_HEVY_API_KEY is available in the environment
const VITE_HEVY_API_KEY = import.meta.env.VITE_HEVY_API_KEY;

const HEVY_API_BASE_URL = 'https://api.hevyapp.com/v1';

async function fetchWorkoutsFromApi(): Promise<Workout[]> {
  const response = await fetch(`${HEVY_API_BASE_URL}/workouts`, {
    headers: {
      'Authorization': `Bearer ${VITE_HEVY_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch workouts from Hevy API');
  }

  return await response.json();
}

async function fetchExerciseHistoryFromApi(exerciseTemplateId: string): Promise<any[]> { // TODO: Define proper type
  const response = await fetch(`${HEVY_API_BASE_URL}/exercise_history/${exerciseTemplateId}`, {
    headers: {
      'Authorization': `Bearer ${VITE_HEVY_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch exercise history for ${exerciseTemplateId} from Hevy API`);
  }

  return await response.json();
}

const mockWorkouts: Workout[] = [
  {
    "id": "workout_id_1",
    "start_time": "2026-01-25T08:00:00Z",
    "end_time": "2026-01-25T09:00:00Z",
    "exercises": [
      {
        "id": "exercise_id_1",
        "name": "Bench Press",
        "sets": [
          { "reps": 10, "weight": 100, "unit": "kg" },
          { "reps": 8, "weight": 105, "unit": "kg" }
        ]
      },
      {
        "id": "exercise_id_2",
        "name": "Squat",
        "sets": [
          { "reps": 12, "weight": 120, "unit": "kg" },
          { "reps": 10, "weight": 125, "unit": "kg" }
        ]
      }
    ]
  },
  {
    "id": "workout_id_2",
    "start_time": "2026-01-27T10:00:00Z",
    "end_time": "2026-01-27T11:00:00Z",
    "exercises": [
      {
        "id": "exercise_id_3",
        "name": "Deadlift",
        "sets": [
          { "reps": 5, "weight": 180, "unit": "kg" },
          { "reps": 3, "weight": 190, "unit": "kg" }
        ]
      },
      {
        "id": "exercise_id_1",
        "name": "Bench Press",
        "sets": [
          { "reps": 8, "weight": 105, "unit": "kg" },
          { "reps": 6, "weight": 110, "unit": "kg" }
        ]
      }
    ]
  }
];

const mockExerciseHistory = [
  { date: "2025-12-01", value: 90, metric: "1RM" },
  { date: "2026-01-01", value: 100, metric: "1RM" },
  { date: "2026-01-25", value: 105, metric: "1RM" },
  { date: "2026-01-27", value: 110, metric: "1RM" },
];


async function fetchMockWorkouts(): Promise<Workout[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockWorkouts);
    }, 1000);
  });
}

async function fetchMockExerciseHistory(): Promise<any[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockExerciseHistory);
        }, 500);
    });
}

export async function fetchWorkouts(): Promise<Workout[]> {
  if (dev) {
    return fetchMockWorkouts();
  } else {
    return fetchWorkoutsFromApi();
  }
}

export async function fetchExerciseHistory(exerciseTemplateId: string): Promise<any[]> { // TODO: Define proper type
    if (dev) {
        return fetchMockExerciseHistory();
    } else {
        return fetchExerciseHistoryFromApi(exerciseTemplateId);
    }
}


