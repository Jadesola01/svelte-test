import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'black-1': '#101010',
				'gray-1': '#909090',
				'white-1': '#f7f6ff',
				'white-2': '#eeecff',
				'purple-1': '#6e5de7',
				'purple-2': '#dcd9f8',
				'gray-2': '#353535',
				'white-3': '#fffbfb',
				'gray-3': '#575757',
				'white-4': '#fefeff',
				'pink-1': '#fff2f6',
				'gray-4': '#fdfdff',
				'gray-5': '#6A6A6A',
				'gray-6': '#636363',
				'gray-7': '#c7c7c7'
			},
			backgroundImage: {
				'grey-lines': 'url(/backgrounds/grey-lines.svg)',
				'grey-lines-lg': 'url(/backgrounds/grey-lines-lg.svg)',
				'pink-lines': 'url(/backgrounds/pink-lines.svg)',
				'pink-lines-lg': 'url(/backgrounds/pink-lines-lg.svg)',
				'faq-dots': 'url(/backgrounds/faq-dots.svg)',
				dots: 'url(/backgrounds/dots.svg)',
				'dots-lg': 'url(/backgrounds/dots-lg.svg)',
				'dots-about-us': 'url(/backgrounds/dots-about-us.svg)',
				'dots-about-us-lg': 'url(/backgrounds/dots-about-us-lg.svg)'
			},
			content: { confetti: 'url(/backgrounds/confetti.svg)' },
			fontFamily: {
				satoshi: 'Satoshi',
				charm: 'Charm',
				aeonik: 'Aeonik'
			}
		}
	},
	plugins: []
} satisfies Config;
