/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/style.css', './index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#DC1637',
        },
        zinc: {
          100: '#f0f2f5',
        },
      },
      screens: {
        mb: { max: '869px' },
        md: { min: '869px' },
      },
      backgroundImage: {
        'grade-gray': "url('./src/assets/rect_bg_gray.svg')",
        'grade-red': "url('./src/assets/rect_bg_red.svg')",
        'gradient-default': 'linear-gradient(0deg,#DC1637,transparent 95%)',
        'gradient-white': 'linear-gradient(0deg, #f0f2f5,transparent 95%)',
        union: "url('./src/assets/bg-union.svg')",
      },
      animation: {
        'fade-in': 'FADE_IN 0.45s 1 cubic-bezier(0.7,0.7,0.7,0.7)',
      },
      keyframes: {
        FADE_IN: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
