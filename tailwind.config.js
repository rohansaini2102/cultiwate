module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cultiwate: {
          lightest: '#F1F8E9',
          light: '#DCEDC8',
          DEFAULT: '#8BC34A',
          dark: '#689F38',
          darkest: '#33691E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};