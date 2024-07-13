/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    colors: {
      'white': '#f8fafc',
      'black': '#111827'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

