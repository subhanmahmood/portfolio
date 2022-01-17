module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Outfit', 'ui-sans-serif', 'system-ui']
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