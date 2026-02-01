

import type { Workout, Exercise, Set } from '../state/dashboard';

const HEVY_API_URL = 'https://api.hevyapp.com/v1/workouts';

async function fetchWorkoutsFromApi(): Promise<Workout[]> {
  const response = await fetch(HEVY_API_URL, {
    headers: {
      'Authorization': `Bearer ${VITE_HEVY_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch workouts from Hevy API');
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
  }
];

async function fetchMockWorkouts(): Promise<Workout[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockWorkouts);
    }, 1000);
  });
}

export async function fetchWorkouts(): Promise<Workout[]> {
  if (dev) {
    return fetchMockWorkouts();
  } else {
    return fetchWorkoutsFromApi();
  }
}

