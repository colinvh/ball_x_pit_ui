import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Netlify adapter for deployment
		adapter: adapter({
			// Optional: Configure edge functions
			edge: false,
			// Optional: Configure split testing
			split: false
		})
	}
};

export default config;
