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

      gridTemplateColumns: {
        'talk-with-us': 'minmax(0, 39.5rem) minmax(0, 1fr)',
        'sidebar-admin': 'max-content max-content',
        'new-post-form': 'repeat(4, 1fr)',
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
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
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
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding-top)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: {
            transform: 'translateX(calc(100% + var(--viewport-padding-top)))',
          },
        },
      },
    },
  },
  plugins: [],
}
