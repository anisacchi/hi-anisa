/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        100: '#FFF3ED',
        200: '#FFD3C9',
        300: '#FFA7A6',
        400: '#B75363',
        500: '#7A1F3D',
      },
      neutral: {
        100: '#FDFDFD',
        200: '#A8A8A8',
        300: '#676767',
        400: '#3B3B3B',
        500: '#242424',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['--var(--font-nunito)'],
      },
      animation: {
        wiggle: 'wiggle 3s infinite',
        'spin-slow': 'spin 3s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
};
