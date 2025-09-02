/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D8B277",
          gold2: "#C89D5D",
          brown: "#5A4632",
          dark: "#121212",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31,38,135,0.15)",
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
};