/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",  // ← scan everything in frontend/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}