const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					100: '#BBC0C3',
					300: '#8D949A',
					800: '#414549',
					DEFAULT: '#414549',
				},
				orange: {
					200: '#F3CFAA',
					250: '#EFBF8F',
					300: '#EAAB6C',
					350: '#E6994C',
					400: '#E38F3B',
					450: '#DF8020',
					600: '#C07021',
					DEFAULT: '#F3CFAA',
				},
				Dkorange: {
					DEFAULT: '#F3CFAA',
				},
			},
			fontFamily: {
				sans: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				xs: '30rem',
				sm: '40rem',
				md: '48rem',
				lg: '64rem',
				xl: '80rem',
				'2xl': '96rem',
				'3xl': '120rem',
			},
		},
	},
	plugins: [require('tailwindcss-logical')],
};
