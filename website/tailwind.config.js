/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown-900': '#3b2a18',
        'brand-brown-700': '#6b4e2d',
        'brand-brown-600': '#8c6d46',
        'brand-brown-300': '#c5b092',
        'brand-brown-100': '#f0e8dc',
        'brand-cream': '#f8f4f0',
        'brand-orange': '#d97742',
        'brand-green': '#8a9a5b',
        'brand-red': '#c14732',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}