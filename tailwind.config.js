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
        200: '#FFE4DB',
        300: '#FFD3C9',
        400: '#FFC2BC',
        500: '#FFA7A6',
        600: '#DB7980',
        700: '#B75363',
        800: '#93344C',
        900: '#7A1F3D',
      },
      neutral: {
        100: '#FDFDFD',
        200: '#ECECEC',
        300: '#A8A8A8',
        400: '#808080',
        500: '#676767',
        600: '#414141',
        700: '#3B3B3B',
        800: '#2E2E2E',
        900: '#242424',
      },
      success: '#ACE67E',
      warning: '#F4EB45',
      info: '#93BAFF',
      danger: '#FFAEA5',
    },
    extend: {
      fontFamily: {
        nunito: ['--var(--font-nunito)'],
      },
      boxShadow: {
        primary: '0px 8px 28px 0px rgba(183, 83, 99, 0.20)',
        neutral: '0px 8px 28px 0px rgba(59, 59, 59, 0.20)',
      },
      animation: {
        wiggle: 'wiggle 3s infinite',
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
