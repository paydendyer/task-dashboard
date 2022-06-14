const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/components/SideBar.js', './src/components/Sidebar.js', './src/components/Budget/AddExpenseForm.js', './src/components/Budget/BudgetApp.js', './src/components/Notes/AddNote.js'],
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