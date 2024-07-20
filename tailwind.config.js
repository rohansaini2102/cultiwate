module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cultiwate: {
          light: '#E5E7EB',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};