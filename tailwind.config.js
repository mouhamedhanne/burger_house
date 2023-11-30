/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary color and hover
        primary: "#ffc045",
        primary_hover: "#f5b029",

        //secondary color and hover
        secondary: "#3d2514",
        secondary_hover: "#231105",

        //red_primary color and hover
        red_primary: "#bf2222",
        red_primary_hover: "#990e0e",
      },

      fontFamily: {
        font_secondary: ['"Alfa Slab One"'],
      },
    },
  },
  plugins: [],
};
