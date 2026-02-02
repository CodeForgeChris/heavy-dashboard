# Research: Automatically Open Browser with Vite

**Decision**: Use the `--open` flag in the `dev` script in `package.json`.

**Rationale**: Vite's development server has a built-in `--open` flag that automatically opens the application in the default browser. This is the simplest and most direct way to fulfill the requirement without adding any new dependencies or complex scripts. It's a standard feature of Vite and is well-documented.

**Alternatives Considered**:

*   **Custom script**: A custom script could be written to start the server and then open the browser. This was rejected because it adds unnecessary complexity and reinvents a feature that is already built into Vite.
*   **npm packages**: There are npm packages that can open a URL. This was rejected as it would add a new dependency for a trivial task, violating the "Minimalist Dependencies" principle.
