import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ['react', 'react-dom']
		}
	},
	resolve: {
		alias: {
			'@pages/': path.join(__dirname, '/src/pages/'),
			'@conponents/': path.join(__dirname, '/src/components/'),
			'@layouts/': path.join(__dirname, '/src/layouts/'),
			'@utils/': path.join(__dirname, '/src/utils/')
		}
	}
})
