/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFF3ED',
          200: '#FFD3C9',
          300: '#FFA7A6',
          400: '#DB7980',
          500: '#B75363',
        },
        neutral: {
          100: '#FEFEFE',
          200: '#CCCCCC',
          300: '#9F9F9F',
          400: '#707070',
          500: '#414141',
          600: '#121212',
        },
        state: {
          success: '#57CC7C',
          error: '#FF653F',
        },
      },
      boxShadow: {
        'shadow-pink': '0px 8px 28px 0px rgba(255, 167, 166, 0.15)',
        'shadow-neutral': '0px 8px 28px 0px rgba(159, 159, 159, 0.15)',
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
