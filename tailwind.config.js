module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Signika', 'sans-serif'],
      'display': ['Fredoka One', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
