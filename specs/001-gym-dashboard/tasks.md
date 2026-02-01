# Tasks: Gym Dashboard

**Input**: Design documents from `/specs/001-gym-dashboard/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize SvelteKit project with Vite and TypeScript
- [x] T002 Install dependencies: `@xyflow/svelte`, `@unovis/svelte`, `tailwindcss`, `skeleton-ui`, `lucide-svelte`, `vitest`
- [x] T003 [P] Configure Tailwind CSS for the project
- [x] T004 [P] Configure Skeleton UI and the dark theme
- [x] T005 [P] Create the project directory structure as defined in `plan.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T006 Create the Hevy API service in `src/lib/services/hevy.ts` to fetch workout data
- [x] T007 [P] Implement authentication for the Hevy API using the API key from `.env`
- [x] T008 [P] Define data types for workouts, exercises, and goals in `src/lib/state/dashboard.ts`
- [x] T009 Create the dashboard state management using Svelte 5 Runes in `src/lib/state/dashboard.ts`
- [x] T010 Configure Vitest for unit and component testing

---

## Phase 3: User Story 1 - View Progress and Goals (Priority: P1) 🎯 MVP

**Goal**: Display the user's gym progress and weekly goals on a dashboard.

**Independent Test**: The dashboard can be tested with mock data to ensure all components render correctly.

### Implementation for User Story 1

- [x] T011 [P] [US1] Create the main dashboard layout in `src/routes/+page.svelte`
- [x] T012 [P] [US1] Create the `Card.svelte` component in `src/lib/components/ui/Card.svelte`
- [x] T013 [P] [US1] Create the `Icon.svelte` component in `src/lib/components/ui/Icon.svelte`
- [x] T014 [US1] Create the `ProgressChart.svelte` component in `src/lib/components/dashboard/ProgressChart.svelte` using Unovis
- [x] T015 [US1] Create the `GoalTree.svelte` component in `src/lib/components/dashboard/GoalTree.svelte` using Svelte Flow
- [x] T016 [US1] Integrate `ProgressChart.svelte` and `GoalTree.svelte` into the main dashboard page
- [x] T017 [US1] Connect the dashboard components to the state management and fetch data from the Hevy API service on mount
- [x] T018 [US1] Implement logic to calculate and display progressive overload suggestions

---

## Phase 4: User Story 2 - Create and Edit Goals (Priority: P2)

**Goal**: Allow users to create and edit their exercise goals.

**Independent Test**: The goal creation and editing functionality can be tested independently of the dashboard.

### Implementation for User Story 2

- [x] T025 [P] [US2] Create a `GoalForm.svelte` component in `src/lib/components/dashboard/GoalForm.svelte`
- [x] T026 [P] [US2] Create a `Modal.svelte` component in `src/lib/components/ui/Modal.svelte` to host the goal form
- [x] T027 [US2] Add state management logic for creating and editing goals in `src/lib/state/dashboard.ts`
- [x] T028 [US2] Add a button to the dashboard to open the goal creation modal
- [x] T029 [US2] When a goal is created or edited, update the `GoalTree.svelte` component

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T019 [P] Implement responsive design for the dashboard to ensure it works on mobile and tablet devices
- [x] T020 [P] Add loading indicators while data is being fetched
- [x] T021 [P] Implement error handling for API calls and display user-friendly error messages
- [x] T022 [P] Implement empty state for the progress chart when there is no data
- [x] T023 [P] Implement empty state for the goal tree when there are no goals
- [x] T024 [P] Handle incomplete exercise data gracefully in the UI

## Dependencies & Execution Order

- **Phase 1** must be completed before **Phase 2**.
- **Phase 2** must be completed before **Phase 3**.
- **Phase N** can be worked on after **Phase 3** is complete.

Within **Phase 3**, the UI components can be developed in parallel. However, the integration tasks (T016, T017, T018) should be done after the individual components are ready.
