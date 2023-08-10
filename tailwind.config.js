/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'green-300': '#00C756',
        blue: '#0B2653',
        'gray-600': '#9B9B9B',
        'gray-100': '#f6f7f8',
      },

      fontSize: {
        title: '2.5rem',
      },

      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'IBM-plex-sans': [
          'IBM Plex Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        inter: 'Inter, sans-serif',
      },

      backgroundImage: {
        'arrow-dropdown': 'url("./src/assets/icons/arrow_link.svg")',
        'header-reforestation':
          'url("./src/assets/imgs/reforestation/bg-header-reforestation.wepb")',
      },
    },
  },
  plugins: [],
}
