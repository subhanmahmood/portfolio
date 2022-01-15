module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {
      transform: ['hover'],
      rotate: ['group-hover'],
      translate: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
