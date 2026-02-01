import { VITE_HEVY_API_KEY } from '$env/static/private';
import type { Workout } from '$lib/state/dashboard';
import type { PageServerLoad } from './$types';

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

export const load: PageServerLoad = async () => {
    try {
        const workouts = await fetchWorkoutsFromApi();
        return { workouts };
    } catch (error) {
        console.error('Error fetching workouts:', error);
        return { workouts: [] };
    }
};
