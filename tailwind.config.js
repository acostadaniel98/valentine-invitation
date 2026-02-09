/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff4d6d",
        softPink: "#fff0f3",
        gold: "#d4af37",
      },
      fontFamily: {
        romantic: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
