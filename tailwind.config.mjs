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
			blue: '#001f3f'
		},
		fontFamily: {
			'zen-antique': ['Zen Antique'],
			young: ['Young Serif'],
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
				gakubuti: '54px'
			},
			boxShadow: {
				newm: '-14px 14px 28px #a69780,14px -14px 28px #e0cdad'
			},
			colors: {
				sandGra: 'linear-gradient(225deg, #d1bea1, #b0a087)'
			}
		}
	},
	plugins: []
}
