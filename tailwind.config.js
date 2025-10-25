/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#f9f0f3",
          DEFAULT: "#ec8fae",
          dark: "#c76c8a",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
    },
  },
  plugins: [],
};
