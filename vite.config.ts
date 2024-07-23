import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['**/*.{png}', '**/*.{jpg}'],
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'RedStone',
      short_name: 'RedStone',
      description: 'Best card game by Leta Sonce',
      theme_color: '#46B4AC',
      background_color: '#46B4AC',
      display: 'standalone',
      orientation: 'landscape-primary',
      icons: [
        {
          src: '/assets/favicons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/assets/favicons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/assets/favicons/maskable-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})