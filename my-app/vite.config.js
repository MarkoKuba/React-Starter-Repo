import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [viteReact(), tailwindcss()],
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
})
