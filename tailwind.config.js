/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  daisyui: {
    themes: [ "dark",'cupcake'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],

}

