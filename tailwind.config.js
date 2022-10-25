/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'Open Sans': ['Open Sans', 'sans-serif'],
      'MyFont': ['"Open Sans"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      primary: {
        25: '#FBFCFE',
        50: '#F5F8FC',
        100: '#EBF2F8',
        150: '#66afe9',
        200: '#D6E4F1',
        300: '#C2D7E9',
        400: '#99BDDB',
        500: '#70A2CD',
        600: '#5C95C5',
        700: '#337AB7',
        800: '#4c7a9a',
        900: '#386B8F', 
      }
      
    },

    extend: {},
  },
  plugins: [],
}

