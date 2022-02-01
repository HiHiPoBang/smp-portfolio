const PRIMARY_COLOR = '#333333';
const SECONDARY_BG_COLOR = '#A4A6D5';
const SECONDARY_COLOR = '#6c6fa8';
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        primary: SECONDARY_BG_COLOR,
      },
      backgroundColor: {
        primary: SECONDARY_BG_COLOR,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
