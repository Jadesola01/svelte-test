import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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
