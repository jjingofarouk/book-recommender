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
        foreground: "var(--foreground)",
        background: "var(--background)",
        "gray-light": "var(--gray-light)",
      },
      backgroundOpacity: {
        5: "0.05",
        10: "0.1",
        20: "0.2",
        50: "0.5",
      },
    },
  },
  plugins: [],
};