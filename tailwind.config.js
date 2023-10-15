/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      margin: {
        gutterbig: "2vw",
        gutter: "5vw",
      },
      backgroundColor: {
        main: "black",
        invert: "white",
      },
      colors: {
        main: "white",
        invert: "black",
        ted: "red"
      },
    },
  },
  plugins: [require("preline/plugin")],
};
