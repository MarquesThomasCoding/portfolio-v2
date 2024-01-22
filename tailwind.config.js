/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        smoothApparition: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        flip: {
          '0%': { transform: 'rotateY(360deg)' }
        }
      },
      animation: {
        smoothApparition: 'smoothApparition .5s ease-in-out',
        flip: 'flip 2s calc(.2s * var(--i))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}