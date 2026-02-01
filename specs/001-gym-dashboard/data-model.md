# Data Model: Gym Dashboard

This document outlines the key data entities for the Gym Dashboard feature.

## User
Represents the person using the app.

-   **id**: `string` (unique identifier)
-   **name**: `string`
-   **email**: `string`

## Workout
Represents a single workout session. This data will be fetched from the Hevy API.

-   **id**: `string` (unique identifier from Hevy)
-   **start_time**: `datetime`
-   **end_time**: `datetime`
-   **exercises**: `Exercise[]` (a list of exercises performed during the workout)

## Exercise
Represents a specific exercise performed during a workout.

-   **id**: `string` (unique identifier)
-   **name**: `string` (e.g., "Bench Press")
-   **sets**: `Set[]`

## Set
Represents a single set of an exercise.

-   **reps**: `number`
-   **weight**: `number`
-   **unit**: `string` (e.g., "kg", "lbs")

## Goal
Represents a user-defined goal for a specific exercise.

-   **id**: `string` (unique identifier)
-   **exercise_name**: `string`
-   **target_weight**: `number`
-   **target_reps**: `number`
-   **deadline**: `date`
-   **start_date**: `date`
