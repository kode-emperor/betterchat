/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{html,ts}"],
  theme: {
      extend: {
          fontFamily: {
              inter: [ "Inter", "sans-serif" ],
              //stanley: ["stanley"]
          }
    },
  },
  plugins: [],
}
