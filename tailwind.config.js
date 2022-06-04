const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: ['./src/components/SideBar.js'],
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