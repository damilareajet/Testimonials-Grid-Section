/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      //  Primary
        violet:"#7d5ba6",
        darkgrayishblue:"#2f3e52",
        darkblackishblue:"#1a242f",
        white:"#FFFFFF",
        // Neutral
        lightgray:"#CECECE",
        lightgrayishblue:"#F0F8FF"
      },
    },
  },
  plugins: [],
}