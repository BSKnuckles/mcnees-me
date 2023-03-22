const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Oxygen Mono', 'sans-serif']
    },
    extend: {
      // colors: {
      //   gray: colors.zinc
      // }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
}
