# Quickstart: Gym Dashboard

This guide provides instructions for setting up and running the Gym Dashboard application.

## Prerequisites

-   Node.js and npm installed.
-   Access to the Hevy app API.

## Setup

1.  **Clone the repository**:
    ```bash
    # This step is skipped as per the constitution
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure API access**:
    -   Create a `.env` file in the root of the project.
    -   Add your Hevy app API key to the `.env` file:
        ```
        VITE_HEVY_API_KEY=your_api_key
        ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Open the application**:
    -   Open your browser and navigate to `http://localhost:5173`.

## How to Use

1.  The dashboard will automatically fetch and display your workout data from the Hevy app.
2.  Your progress for key exercises will be visualized in charts.
3.  You can set new goals for specific exercises.
4.  The dashboard will provide suggestions for progressive overload based on your performance.
