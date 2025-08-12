/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8", // Blue 700
          light: "#60a5fa",   // Blue 400
          dark: "#1e40af"     // Blue 800
        }
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
