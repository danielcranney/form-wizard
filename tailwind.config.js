const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    backgroundSize: {
      "50%": "50%",
    },
    colors: {
      transparent: "transparent",
      black: "#25282a",
      gray: {
        100: "#F3F4F6",
        200: "#DEE3ED",
        300: "#AFB6C4",
        400: "#929AA7",
        500: "#6C7580",
        600: "#424750",
        700: "#2E3138",
        800: "#272A2F",
      },
      white: "#fff",
      primary: {
        main: "#00AF66",
        alt: "#38F491",
        100: "#E5F7EF",
        200: "#ccefe0",
        300: "#b2e7d1",
        400: "#99dfc2",
        500: "#7fd7b2",
        900: "#007a5a",
      },
      red: colors.rose,
    },
    extend: {
      fontFamily: {
        display: ['"neue-haas-unica"', "sans-serif"],
        body: ['"neue-haas-unica"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
