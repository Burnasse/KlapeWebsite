const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img' : "url('../assets/images/landingImg2.jpg')",
        'corse-img' : "url('../assets/images/landingImg.jpg')",
        'reunion-img' : "url('../assets/images/reunionImg.jpg')",
        'astro-img' : "url('../assets/images/astroImg.jpg')",
        'paca-img' : "url('../assets/images/pacaImg.jpg')",
        'architect-img' : "url('../assets/images/architectImg.jpg')",
      }),
      colors: {
        trueGray: colors.trueGray,
        gray: colors.gray,
        black: colors.black
      },
      fontFamily: {
        sans: ["Poiret One", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}