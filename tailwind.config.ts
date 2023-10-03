import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'grey-lines': 'url(./src/lib/background-assets/grey-lines.svg)',
				'grey-lines-lg': 'url(./src/lib/background-assets/grey-lines-lg.svg)',
				'pink-lines': 'url(./src/lib/background-assets/pink-lines.svg)',
				'pink-lines-lg': 'url(./src/lib/background-assets/pink-lines-lg.svg)',
				'faq-dots': 'url(./src/lib/background-assets/faq-dots.svg)',
				dots: 'url(./src/lib/background-assets/dots.svg)',
				'dots-lg': 'url(./src/lib/background-assets/dots-lg.svg)'
			},
			content: { confetti: 'url(./src/lib/background-assets/confetti.svg)' },
			fontFamily: {
				satoshi: 'Satoshi',
				'cera-pro': 'Cera Pro',
				charm: 'Charm',
				aeonik: 'Aeonik'
			}
		}
	},
	plugins: []
} satisfies Config;
