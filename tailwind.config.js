/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
