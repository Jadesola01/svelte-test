import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'black-923': '#101010',
        'gray-642': '#909090',
        'white-157': '#f7f6ff',
        'white-265': '#eeecff',
        'indigo-527': '#6e5de7',
        'lavender-212': '#dcd9f8',
        'gray-856': '#353535',
        'white-057': '#fffbfb',
        'gray-614': '#575757',
        'white-103': '#fefeff',
        'pink-188': '#fff2f6',
        'gray-427': '#fdfdff'
      },
      backgroundImage: {
        'grey-lines': 'url(/backgrounds/grey-lines.svg)',
        'grey-lines-lg': 'url(/backgrounds/grey-lines-lg.svg)',
        'pink-lines': 'url(/backgrounds/pink-lines.svg)',
        'pink-lines-lg': 'url(/backgrounds/pink-lines-lg.svg)',
        'faq-dots': 'url(/backgrounds/faq-dots.svg)',
        dots: 'url(/backgrounds/dots.svg)',
        'dots-lg': 'url(/backgrounds/dots-lg.svg)'
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
