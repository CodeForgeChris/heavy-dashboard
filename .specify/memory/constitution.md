<!--
---
- Version change: 1.0.0 → 1.1.0
- List of modified principles:
    - None
- Added sections:
    - Build Stability
- Removed sections:
    - None
- Templates requiring updates (✅ updated / ⚠ pending):
    - ✅ .specify/memory/constitution.md
    - ⚠ .specify/templates/plan-template.md
    - ⚠ .specify/templates/spec-template.md
    - ⚠ .specify/templates/tasks-template.md
    - ⚠ .gemini/commands/speckit.analyze.toml
    - ⚠ .gemini/commands/speckit.checklist.toml
    - ⚠ .gemini/commands/speckit.clarify.toml
    - ⚠ .gemini/commands/speckit.constitution.toml
    - ⚠ .gemini/commands/speckit.implement.toml
    - ⚠ .gemini/commands/speckit.plan.toml
    - ⚠ .gemini/commands/speckit.specify.toml
    - ⚠ .gemini/commands/speckit.tasks.toml
    - ⚠ .gemini/commands/speckit.taskstoissues.toml
- Follow-up TODOs:
    - Review and update the plan, spec, and tasks templates to align with the new constitution.
---
-->
# Heavy Constitution

## Core Principles

### I. Single-File Entry Point
The application should be accessible and executable through a single entry point file, simplifying the process of launching and interacting with the application.

### II. Minimalist Dependencies
Use only essential libraries to maintain a lightweight and manageable codebase. This reduces complexity and potential conflicts, making the project easier to maintain.

### III. Code Reuse and Modularity
Prioritize the creation of reusable functions. Before implementing new logic, thoroughly check for existing functions that can be adapted or extended. This promotes a modular architecture and reduces code duplication.

### IV. Design Pattern Adoption
When a problem corresponds to a known design pattern, the established pattern should be used. This leverages proven solutions and improves the clarity and maintainability of the code.

### V. Layered Abstraction
Implement solutions using multiple levels of abstraction. Create generic, reusable functions that are then composed or specialized by more concrete functions. This separates concerns and allows for a more flexible and scalable architecture.

### VI. Domain-Driven Design
Structure the application around the core domain concepts. Think in terms of use cases, services, and repositories to create a model that is closely aligned with the problem it solves.

### VII. Simplicity and Cleanliness
Strive for a simple and clean codebase. This includes writing clear, concise, and well-documented code that is easy to understand and modify.

### VIII. Build Stability
After any feature is merged, the project must be in a state where `npm install` and the build command (`npm run build`) execute without errors. This ensures the main branch is always stable and ready for deployment or further development.

## Development Workflow

The development process should follow the principles outlined in this constitution. All new features and changes must be aligned with these core principles.

## Review Process

All code contributions will be reviewed to ensure compliance with the constitution. The review process will focus on adherence to the principles of minimalism, reusability, abstraction, and design pattern adoption.

## Governance

This constitution is the guiding document for the "Heavy" project. All development practices and decisions should be in alignment with these principles. Amendments to this constitution must be documented, and the version number must be updated according to semantic versioning.

**Version**: 1.1.0 | **Ratified**: 2026-02-01 | **Last Amended**: 2026-02-01