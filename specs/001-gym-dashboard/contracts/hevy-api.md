# Hevy App API Contract

This document defines the contract for interacting with the Hevy app API.

## Get Workouts

-   **Endpoint**: `GET /v1/workouts`
-   **Description**: Fetches a list of workouts for the authenticated user.
-   **Authentication**: Requires an API key or OAuth token.
-   **URL**: `https://api.hevyapp.com/docs/#/Workouts/get_v1_workouts`

### Response Body (Example)

```json
[
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
]
```
