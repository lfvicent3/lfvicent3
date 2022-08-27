module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        lovely: ['Lovely', 'cursive']
      }
    },
  },
  plugins: [
    require('tailwind-dracula')('dracula'),
  ],
}