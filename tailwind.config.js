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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(12px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
      });
    },
  ],
};