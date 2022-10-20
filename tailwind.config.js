/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'nunito': ['Open Sans', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      'sleuth': '#236A91'
    },

    extend: {},
  },
  plugins: [],
}

