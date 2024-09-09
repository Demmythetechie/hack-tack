/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 3vw, 2.5vw)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}