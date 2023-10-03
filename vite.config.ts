import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const svelteKitPlugin = sveltekit();
const svgPlugin = svg();

export default defineConfig({
	plugins: [svelteKitPlugin, svgPlugin],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
