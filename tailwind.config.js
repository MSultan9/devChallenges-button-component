/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': {
          light: 'rgba(41, 98, 255, 0.1)',
          DEFAULT: '#3D5AFE',
          dark: '#0039CB'
        },
        'custom-secondary': {
          light: 'rgba(41, 98, 255, 0.1)',
          DEFAULT: '#455A64',
          dark: '#1C313A'
        },
        'custom-danger': {
          light: 'rgba(41, 98, 255, 0.1)',
          DEFAULT: '#D32F2F',
          dark: '#9A0007'
        },
        'custom-gray': {
          200: '#FAFBFD',
          300: '#9E9E9E',
          400: '#E0E0E0',
          500: '#3F3F3F',
          600: '#AEAEAE',
          700: '#828282',
          800: '#333333'
        },
      },
      boxShadow: {
        '3xl': '0px 2px 3px rgba(51, 51, 51, 0.2)',
      }
    },
  },
  plugins: [],
}

