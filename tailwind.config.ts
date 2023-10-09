import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'chaos-black': '#101010',
        tin: '#909090',
        'ghost-white': '#f7f6ff',
        'carte-blanche': '#eeecff',
        'if-i-could-fly': '#6e5de7',
        'nostalgia-perfume': '#dcd9f8',
        jet: '#353535',
        'flawed-white': '#fffbfb',
        'shadow-mountain': '#575757',
        'white-as-heaven': '#fefeff',
        'glimpse-of-pink': '#fff2f6',
        'pale-grey': '#fdfdff'
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
