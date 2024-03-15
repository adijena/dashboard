/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        golden: "#EDA358",
        cream:"#F5E8DD",
        offWhite:"#EEEDEB",
        offGrey:"#C7C8CC",
        drkPrimary: "#222831",
        drkSec: "#393E46",
        drkBtn: "#FFEDD8",
        drkTextMid: "#D8D8D8",
        drkTextPrimary: "#F1F1F1",
        brown:"#331D2C"
      },
    },
  },
  plugins: [],
}

