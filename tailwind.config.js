/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "0px", max: "500px" },
        tablet: { min: "501px", max: "768px" },
      },
      colors: {
        orange: "#f26422",
        "bright-blue": "#0e9af2",
        "navy-blue": "#003470",
        "dark-grey": "#363636",
        "pastel-blue": "#cddae2",
        "slate-blue": "#b4c2cd",
      },
    },
  },
  plugins: [],
};
