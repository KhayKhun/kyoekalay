/** @type {import('tailwindcss').Config} */
module.exports = {
	publicPath: './',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	purge: ['./src/**/*.astro'],
	theme: {
		extend: {},
	},
	plugins: [],
}
