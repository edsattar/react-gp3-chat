/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#35596c",
          500: "#0f2936",
          600: "#091d2b",
          700: "#051926",
          800: "#060f14",
        },
        secondary: {
          300: "#7ac5d7",
          500: "#219ebc",
          800: "#00b5e0",
        },
        tertiary: {
          50: "#fff8e6",
          100: "#fff1cd",
        },
        accent: {
          500: "#fb8500",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
