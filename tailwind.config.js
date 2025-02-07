/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        smg_orange: 'rgb(255, 120, 1)',
        smg_orange_light: 'rgb(255, 120, 1, 0.8)',
      },
    },
  },
  plugins: [],
}

