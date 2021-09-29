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
        textPrimary: '#374151',
        textLight: '#484848',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
