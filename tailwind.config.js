/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'green-300': '#00C756',
        blue: '#0B2653',
        'gray-600': '#9B9B9B',
      },

      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'IBM-plex-sans': [
          'IBM Plex Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },

      backgroundImage: {
        'arrow-dropdown': 'url("./src/assets/icons/arrow_link.svg")'
      }
    },
  },
  plugins: [],
}
