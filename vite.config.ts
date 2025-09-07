import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      // Ensure proper building for Cloudflare Pages
      entry: 'src/index.tsx'
    }),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ],
  build: {
    // Optimize build for Cloudflare Pages
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['__STATIC_CONTENT_MANIFEST']
    }
  },
  resolve: {
    alias: {
      // Add path aliases if needed
      '@': '/src'
    }
  }
})
