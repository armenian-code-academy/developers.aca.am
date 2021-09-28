module.exports = {
  purge: [],

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5451ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
