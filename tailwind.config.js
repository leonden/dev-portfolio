/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rota: ["Rota", "sans-serif"],
        mentra: ["Mentra", "sans-serif"],
        symmetrika: ["Symmetrika", "sans-serif"],
        tostada: ["Tostada", "serif"],
        wagon: ["Wagon", "serif"],
      },
    },
    plugins: [],
  },
};
