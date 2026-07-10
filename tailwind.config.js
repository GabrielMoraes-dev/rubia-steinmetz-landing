/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0A",
          900: "#171717",
          600: "#6B6B6B",
          300: "#A3A3A3",
          100: "#E8E8E8",
        },
        gold: {
          light: "#F6D875",
          DEFAULT: "#D4AF37",
          dark: "#9C7A1E",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
