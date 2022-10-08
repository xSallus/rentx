/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/style.css',
		'./index.html',
		'./src/**/*.vue'
	],
  theme: {
    extend: {
			colors: {
				red: {
					'600': '#DC1637'
				}
			},
			screens: {
				'mb': {'max': '869px'}
			},
			backgroundImage: {
				'grade-gray': "url('./src/assets/rect_bg_gray.svg')",
				'grade-red': "url('./src/assets/rect_bg_red.svg')"
			}
		},
  },
  plugins: [],
}
