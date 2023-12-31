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
      "1.5xl": ["1.45vw", { lineHeight: "2.1vw" }],
      "2xl": ["1.5vw", { lineHeight: "2.25vw" }],
      "3xl": ["1.875vw", { lineHeight: "2.25vw" }],
      "4xl": ["2.25vw", { lineHeight: "2.5vw" }],
      "5xl": ["3vw", { lineHeight: "1" }],
      "6xl": ["3.75vw", { lineHeight: "1" }],
      "6.5xl": ["4.1vw", { lineHeight: "1" }],
      "7xl": ["4.5vw", { lineHeight: "1" }],
      "7.5xl": ["5.25vw", { lineHeight: "1" }],
      "8xl": ["6vw", { lineHeight: "1" }],
      "9xl": ["8vw", { lineHeight: "1" }],
    },
    extend: {
      fontSize: {
        sms: ["3vw", { lineHeight: "4vw" }],
        mds: ["3.5vw", { lineHeight: "5vw" }],
        lgs: ["4vw", { lineHeight: "6vw" }],
        xls: ["4.5vw", { lineHeight: "7vw" }],
        "1.5xls": ["5vw", { lineHeight: "7.5vw" }],
        "2xls": ["5.8vw", { lineHeight: "8.4vw" }],
        "3xls": ["6vw", { lineHeight: "9vw" }],
        "4xls": ["7.5vw", { lineHeight: "9vw" }],
        "4.5xls": ["9vw", { lineHeight: "10vw" }],
        "5xls": ["10.5vw", { lineHeight: "12vw" }],
        "6xls": ["12vw", { lineHeight: "1" }],
        "6.5xls": ["15vw", { lineHeight: "1" }],
        "7xls": ["16.4vw", { lineHeight: "1" }],
        "7.5xls": ["18vw", { lineHeight: "1" }],
        "8xls": ["21vw", { lineHeight: "1" }],
        "9xls": ["24vw", { lineHeight: "1" }],
      },
      width: {
        card: "26vw",
        team: "18vw",
        teamm: "75vw",
      },
      height: {
        card: "26vw",
        team: "26vw",
        teamm: "65vw",
      },
      margin: {
        gutterbig: "4vw",
        gutter: "3vw",
      },
      minWidth: {
        card: "26vw",
      },
      minHeight: {
        card: "26vw",
      },
      backgroundColor: {
        main: "#000000",
        invert: "white",
      },
      colors: {
        main: "white",
        invert: "#000000",
        ted: "#e32020",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
