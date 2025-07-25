/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackk: "#262836",
        bluee: "#57aac8",
        greenn: "#8af1aa",
        redd: "#f0394b",
      },
    },
  },
  plugins: [],
};
