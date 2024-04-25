/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#408A7E',
        'text-primary': '#B0B0B0',
        'landing-background-color': '#F9F8FE',
        'page-background': '#FAFAFA',
        'modal-backdrop': '#00000088',
        'table-tile': '#00000044',
        'chat-title': '#F2F5F5',
        'chat-bg': '#EEEAE3'
      },
      backgroundImage: {
        'landing-background':
          'radial-gradient(circle at top left, #408a7e65 10%,white ),radial-gradient(circle at bottom right,#408a7e65 10%, white );'
      }
    }
  },
  plugins: []
}
