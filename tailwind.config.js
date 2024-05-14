/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Raleway', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
      },

      colors: {
        'primary-blue': '#02274F',
        'primary-yellow': '#FDCF00',
      },

      dropShadow: {
        card: '0px 0px 64px 0px rgba(0, 0, 0, 0.25)',
      },

      width: {
        card: '28rem',
      },

      height: {
        98: '27rem',
        card: '33rem',
      },
    },
  },
  plugins: [],
}

// box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.25);
