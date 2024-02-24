/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			height: {
				"27.5": "110px",
				"213": "852px",
			},
			width: {
				"367.5": "1470px",
				"172": "688px",
			}
		},
	},
	plugins: [
  ]
};				