/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			sand: '#ecd4b6',
			viva: '#be3455',
			pale: '#f0cfc3',
			air: '#c4ced6',
			khaki: '#c3b296',
			white: '#f6f5f7',
			blue: '#001f3f',
			'gray-dark': '#273444',
			'gray-light': '#d3dce6'
		},
		fontFamily: {
			'zen-antique':['Zen Antique'],
			body: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			backgroundImage: {
				symbol: "url('/favicon.svg')"
			}
		}
	},
	plugins: []
}
