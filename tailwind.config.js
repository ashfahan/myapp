const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: "#FEAD74",
      },
    },
  },
  important: true,
  plugins: [],
};
