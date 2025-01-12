import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	server: {
		 host:true,
    port:8000,
    watch:{
      usePolling:true

		proxy: {
			'/api': {
				target: 'https://www.balldontlie.io',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''), // Переписываем /api
			},
		},
	},
})
