module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Outfit', 'ui-sans-serif', 'system-ui'],
      'code': ['ui-monospace', "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
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