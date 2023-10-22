/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
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
			'deep-blue': '#001f3f'
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
			},
			width: {
				gold: '61.8%'
			},
			keyframes: {
				aura: {
					'0%': {
						background:
							'linear-gradient(305deg, rgba(216, 50, 50, 1) 0 %, rgba(229, 155, 155, 1) 27 %, rgba(230, 150, 231, 1) 39 %, rgba(244, 184, 72, 1) 48 %, rgba(236, 195, 137, 1) 59 %, rgba(245, 136, 136, 1) 76 %, rgba(240, 243, 240, 1) 88 %, rgba(236, 255, 236, 1) 99 %)'
					},
					'100%': {
						background:
							'linear-gradient(305deg, rgba(159,37,37,1) 0%, rgba(160,111,111,1) 16%, rgba(154,94,155,1) 31%, rgba(187,160,109,1) 41%, rgba(189,153,87,1) 48%, rgba(165,132,85,1) 55%, rgba(146,74,74,1) 66%, rgba(7,105,7,1) 76%, rgba(62,80,62,1) 99%)'
					}
				}
			},
			animation: {
				aura: 'aura 1.2s ease 2s 1 forwards'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}
