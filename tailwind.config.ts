module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-1turn)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      screens: {
        "max-w-1022": { max: "1022px" },
        "w-1022": "1022px",
      },
    },
  },
  plugins: [],
};
