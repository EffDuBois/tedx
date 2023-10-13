/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      margin:{
        "guttermd":"15vw",
        "gutter":"5vw"
      }
    },
  },
  plugins: [require("preline/plugin")],
};
