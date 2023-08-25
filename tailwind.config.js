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
        'gray-200': '#E7EBEF',
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
      },

      boxShadow: {
        input: '0px 0px 0px 2px rgba(0, 199, 86, 0.15)',
        error: '0px 0px 0px 2px rgba(239, 68, 68, 0.35)',
      },

      animation: {
        shake: 'shakeInput 500ms ease-in-out',
      },

      keyframes: {
        shakeInput: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },

          '20%, 60%': {
            transform: 'translateX(7px)',
          },

          '40%, 80%': {
            transform: 'translateX(-7px)',
          },
        },
      },
    },
  },
  plugins: [],
}
