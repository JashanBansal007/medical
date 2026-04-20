/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3F3',
          100: '#CCE7E7',
          200: '#99CFCF',
          300: '#66B7B7',
          400: '#339F9F',
          500: '#0D4F4F', // Main deep teal
          600: '#0B4545',
          700: '#093B3B',
          800: '#073131',
          900: '#052727',
        },
        cream: {
          50: '#FDFCFB',
          100: '#FBF9F6',
          200: '#F7F4ED', // Main cream
          300: '#F0EAE0',
          400: '#E9E0D3',
        },
        saffron: {
          50: '#FFF5EB',
          100: '#FFEBD6',
          200: '#FFD7AD',
          300: '#FFC385',
          400: '#FFAF5C',
          500: '#FF9933', // Main saffron
          600: '#E68A2E',
          700: '#CC7A29',
          800: '#B36B24',
          900: '#995C1F',
        },
        navy: {
          50: '#E8ECF2',
          100: '#D1D9E5',
          200: '#A3B3CB',
          300: '#758DB1',
          400: '#476797',
          500: '#1A365D', // Main navy
          600: '#173054',
          700: '#142A4B',
          800: '#112442',
          900: '#0E1E39',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
