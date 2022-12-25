/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          primary: '#F9FAFB',
          normal: '#344054'
        },
        purple: {
          primary: '#7F56D9'
        }
      }
    },
  },
  plugins: [],
}