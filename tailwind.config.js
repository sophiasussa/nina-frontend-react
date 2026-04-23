/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#84D1D0",
        secondary: "#FC9E98",
      },
    },
  },
  plugins: [],
}
