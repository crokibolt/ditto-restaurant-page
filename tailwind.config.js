/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%' : {transform: 'translateX(100vw)'},
          '100%': {transform: 'translateX(0)'}
        },
        disappear: {
          '0%' : {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100vw)'}
        }
      },
      animation: {
        appear: 'appear 1s ease-in-out 1',
        disappear: 'disappear 300ms ease-in-out infinite',
      }
    },
  fontFamily: {
    'tangerine': ['Tangerine' , 'ui-sans-seriff','sans-seriff', 'Roboto'],
  }
  },
  plugins: [],
}

