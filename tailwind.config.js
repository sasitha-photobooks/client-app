/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary:'#131B23',
      secondary:'#63696E',
      accent:'#F9F21D',
      background:'#FAFAFA'
    },
    fontFamily: {
      title: ['"Fredericka the Great"', 'serif'],
      display: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'camera-pattern': "url('assets/bg-camera-pattern.png')",
      }
    },
  },
  plugins: [],
}