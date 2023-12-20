/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      mukta: "Mukta",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          // display: "none",
          width: "20px",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar::-webkit-scrollbar": {
          width: "10px",
          height: "20px",
        },

        ".scrollbar::-webkit-scrollbar-track": {
          "border-radius": "100vh",
          background: "#f7f4ed",
        },

        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#e0cbcb",
          "border-radius": "100vh",
          // border: "3px solid #f6f7ed",
        },

        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#c0a0b9",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
