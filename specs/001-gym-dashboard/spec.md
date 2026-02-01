# Feature Specification: Gym Dashboard

**Feature Branch**: `001-gym-dashboard`
**Created**: 2026-02-01
**Status**: Draft
**Input**: User description: "I want to create a gym dashboard that gets shows my curent progress and shows me my gym goals for the week, like what party I should increase and how the progressive overvload , the dashobard is a help for me to see where I have to fokus and to see where is my current sate and progress, it should keep me motivated to reach my goals on an easy insight."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Progress and Goals (Priority: P1)

As a user, I want to see a dashboard that shows my current gym progress and my weekly goals, so I can stay motivated and focused on my training.

**Why this priority**: This is the core functionality of the feature request.

**Independent Test**: The dashboard can be tested independently by providing mock data for user's progress and goals and verifying that it is displayed correctly.

**Acceptance Scenarios**:

1.  **Given** I am logged in, **When** I navigate to the dashboard, **Then** I should see my current progress for key exercises.
2.  **Given** I am on the dashboard, **When** I look at my weekly goals, **Then** I should see which exercises I need to focus on and suggestions for progressive overload.

---

### User Story 2 - Create and Edit Goals (Priority: P2)

As a user, I want to be able to create and edit my exercise goals, so I can keep my training plan up to date.

**Why this priority**: This is a key feature that allows users to customize their experience.

**Independent Test**: The goal creation/editing functionality can be tested independently of the dashboard display.

**Acceptance Scenarios**:

1.  **Given** I am on the dashboard, **When** I click the "Add Goal" button, **Then** I should be presented with a form to create a new goal.
2.  **Given** I am editing an existing goal, **When** I save the changes, **Then** the goal should be updated and reflected on the dashboard.

### Edge Cases

- What happens when a user has no progress data?
- How does the system handle a user with no goals set?
- What happens if the data for an exercise is incomplete?

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The system MUST display the user's current progress.
-   **FR-002**: The system MUST display the user's weekly goals.
-   **FR-003**: The system MUST provide suggestions for progressive overload based on the user's past performance (e.g., if they completed all reps/sets, suggest a small weight increase).
-   **FR-004**: Users' workout data MUST be imported from the Hevy app via their API.
-   **FR-005**: The system MUST allow users to set specific exercise goals (e.g., increase bench press weight, run a faster 5k).

### Assumptions

- The user has a Hevy app account and has granted permission for this application to access their data.

### Dependencies

- The application will depend on the Hevy app API (https://api.hevyapp.com/docs/#/Workouts/get_v1_workouts) for workout data. The availability and performance of this external API will affect our application.

### Key Entities *(include if feature involves data)*

-   **User**: Represents the person using the app.
-   **Workout**: Represents a single workout session, containing a list of exercises performed.
-   **Exercise**: Represents a specific exercise, with attributes like name, sets, reps, and weight.
-   **Goal**: Represents a user's goal, with attributes like exercise, target (e.g., weight, reps), and deadline.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: 90% of users can find their current progress within 10 seconds of opening the dashboard.
-   **SC-002**: Daily active users of the dashboard increase by 25% within the first month of launch.
-   **SC-003**: 80% of users report feeling more motivated to reach their goals after using the dashboard for two weeks.
-   **SC-004**: The number of user-set goals increases by 40% in the first month.