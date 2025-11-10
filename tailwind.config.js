/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { 200: "#D5DAE1" },
        black: { DEFAULT: "#000", 500: "#1D2235" },
        blue: { 500: "#2b77e7" },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
      },
      boxShadow: { card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' },

      // 👇 Gradient animation
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradientShift 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
