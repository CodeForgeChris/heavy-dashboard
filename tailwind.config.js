import { skeleton } from 'skeleton-ui/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/skeleton-ui/dist/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: ['dark']
    })
  ],
}
