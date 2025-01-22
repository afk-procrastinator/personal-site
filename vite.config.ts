import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Redirect all 404s to index.html for SPA routing
      '*': {
        target: '/',
        rewrite: () => '/index.html'
      }
    }
  },
});
