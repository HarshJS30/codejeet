import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'0.0.0.0',
    proxy: {
      // Replace `/api` with your API endpoint
      '/api': {
        target: 'https://v6.exchangerate-api.com',  // The target API base URL
        changeOrigin: true,  // Ensure the origin is modified
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' from the request path
      },
    },
  },
});
