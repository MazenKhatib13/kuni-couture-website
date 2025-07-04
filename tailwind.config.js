/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#006167',
          700: '#025157',
        },
        accent: {
          500: '#998543',
          600: '#b8a05c',
        }
      },
      fontFamily: {
        'malayalam': ['Malayalam MN', 'Montserrat', 'sans-serif'],
        'body': ['Malayalam MN', 'Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 