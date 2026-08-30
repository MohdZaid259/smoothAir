/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors matching KAD Air Conditioning reference site
        'kad-blue': {
          50: '#f0f5fb',
          100: '#e1eaf7',
          200: '#c3d6ef',
          300: '#a5c1e7',
          400: '#5179b7',
          500: '#174EA0',
          600: '#154E9F',
          700: '#162B6A',
          800: '#0D1F47',
          900: '#081124',
        },
        'kad-dark': '#333333',
        'kad-link': '#337AB7',
      }
    }
  }
}
