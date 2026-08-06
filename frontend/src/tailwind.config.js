/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        ivory: '#F9F7F4',
        bone: '#EDE9E3',
        sand: '#C9BFB0',
        taupe: '#9E9189',
        charcoal: '#1C1C1C',
        ink: '#2E2C2A',
        mist: '#F2EFE9',
      },

      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },

      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },

  plugins: [],
};