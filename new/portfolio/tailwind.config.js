module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  extend: {
    invert: {
      25: '.25',
      50: '.5',
      75: '.75',
    }
  },
  variants: {
    extend: {
      invert: ['hover', 'focus'],
      space: ['hover', 'focus']
    }
  },
  plugins: [],
}
