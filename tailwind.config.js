/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  theme: {
    fontSize: {
      xs: ["0.75vw", { lineHeight: "1vw" }],
      sm: ["0.875vw", { lineHeight: "1.25vw" }],
      base: ["1vw", { lineHeight: "1.5vw" }],
      lg: ["1.125vw", { lineHeight: "1.75vw" }],
      xl: ["1.25vw", { lineHeight: "1.75vw" }],
      "1.5xl": ["1.45vw", { lineHeight: "1.75vw" }],
      "2xl": ["1.5vw", { lineHeight: "2vw" }],
      "3xl": ["1.875vw", { lineHeight: "2.25vw" }],
      "4xl": ["2.25vw", { lineHeight: "2.5vw" }],
      "5xl": ["3vw", { lineHeight: "1" }],
      "6xl": ["3.75vw", { lineHeight: "1" }],
      "7xl": ["4.5vw", { lineHeight: "1" }],
      "8xl": ["6vw", { lineHeight: "1" }],
      "9xl": ["8vw", { lineHeight: "1" }],
    },
    extend: {
      width: {
        card: "32vw",
      },
      height: {
        card: "32vw",
      },
      margin: {
        gutterbig: "4vw",
        gutter: "5vw",
      },
      minWidth: {
        card: "32vw",
      },
      minHeight: {
        card: "32vw",
      },
      backgroundColor: {
        main: "#040410",
        invert: "white",
      },
      colors: {
        main: "white",
        invert: "#040410",
        ted: "red",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
