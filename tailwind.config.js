const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/components/SideBar.js', './src/components/'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        borderRadius: theme['hover'],
      })
    })
  ],
}