import type { Workout } from '$lib/state/dashboard.svelte';
import type { PageServerLoad } from './$types';
import { fetchWorkouts } from '$lib/services/hevy';


export const load: PageServerLoad = async () => {
    try {
        const workouts = await fetchWorkouts();
        return { workouts };
    } catch (error) {
        console.error('Error fetching workouts:', error);
        return { workouts: [] };
    }
};
