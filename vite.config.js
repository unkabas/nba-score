import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://www.balldontlie.io',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''), // Переписываем /api
			},
		},
	},
})
