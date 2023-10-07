import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const svelteKitPlugin = sveltekit();
const svgPlugin = svg();

export default defineConfig({
	plugins: [svelteKitPlugin, svgPlugin],
	resolve: {
		alias: {
			src: resolve(__dirname, 'src')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
