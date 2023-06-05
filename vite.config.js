import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@pages': path.resolve(__dirname, './src/components/pages/'),
			'@ui': path.resolve(__dirname, './src/components/ui/'),
			'@scss': path.resolve(__dirname, './src/styles/'),
			'@api': path.resolve(__dirname, './src/api/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/vars.scss";',
			},
		},
	},
})