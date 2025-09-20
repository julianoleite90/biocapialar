/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'artrocel-green': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce4bc',
          300: '#8dd08d',
          400: '#5bb35b',
          500: '#4CAF50',
          600: '#388E3C',
          700: '#2e7d32',
          800: '#276c2a',
          900: '#1b5e20',
        },
        'artrocel-gold': {
          50: '#fefcf7',
          100: '#fdf8e8',
          200: '#fbeec3',
          300: '#f8e09a',
          400: '#f4cc6c',
          500: '#CDB77B',
          600: '#c4a85f',
          700: '#b8964a',
          800: '#9a7a3d',
          900: '#7d6333',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
