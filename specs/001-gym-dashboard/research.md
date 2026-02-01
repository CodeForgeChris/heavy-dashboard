# Research & Decisions: Gym Dashboard

## Core Framework & Build
-   **Decision**: Svelte 5 with Runes for state management.
-   **Rationale**: User specified. Runes (`$state`, `$effect`) provide a modern and fine-grained reactivity model.
-   **Alternatives considered**: None, as this was a directive.

## Build Tool
-   **Decision**: Vite.
-   **Rationale**: User specified. It's the standard, fast, and efficient build tool for SvelteKit.
-   **Alternatives considered**: None.

## Language
-   **Decision**: TypeScript (Strict mode).
-   **Rationale**: User specified. Provides type safety and better developer experience.
-   **Alternatives considered**: JavaScript.

## Visualization Engine
-   **Decision**: Svelte Flow for diagrams and Unovis for charts.
-   **Rationale**: User specified. Svelte Flow is ideal for node-based UIs like goal trees. Unovis is a modular, high-performance charting library suitable for data visualization.
-   **Alternatives considered**: Avoided heavier libraries like D3.js directly, as per user request.

## UI & Styling
-   **Decision**: Tailwind CSS with Skeleton UI (optional) and Lucide-Svelte icons.
-   **Rationale**: User specified. This combination provides a utility-first CSS framework for rapid UI development, a component library for consistency, and a clean icon set. Dark mode by default.
-   **Alternatives considered**: None.

## Data & Backend
-   **Decision**: Local-first architecture with a REST API wrapper for the Hevy app endpoint.
-   **Rationale**: User specified. The application will run entirely in the browser, fetching data from the local Hevy app. State will be managed by Svelte 5 Runes.
-   **Alternatives considered**: A dedicated backend was explicitly ruled out.
