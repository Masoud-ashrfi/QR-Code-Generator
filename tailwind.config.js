/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0  10px 10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
