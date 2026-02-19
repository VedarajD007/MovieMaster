import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    terserOptions: {
      compress: {
        drop_console: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons']
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name].[hash][extname]';
          } else if (/\.css$/.test(name ?? '')) {
            return 'css/[name].[hash][extname]';
          } else if (/\.woff2?$/.test(name ?? '')) {
            return 'fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
})
