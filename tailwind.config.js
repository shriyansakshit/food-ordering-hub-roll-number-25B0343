/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#8B2020",
        "brand-dark": "#6B1818",
      },
    },
  },
  plugins: [],
}