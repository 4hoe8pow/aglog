import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	site: 'https://agni.ninja',
	integrations: [
		sitemap(),
		tailwind(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		})
	]
})
