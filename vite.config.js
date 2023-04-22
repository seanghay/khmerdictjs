import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  assetsInclude: [
    "**/*.zip"
  ],
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm,zip}'],
        maximumFileSizeToCacheInBytes: 5097152,
      },
      includeAssets: ['favicon.ico', 'apple-icon.png', 'masked-icon.svg'], 
      manifest: {
        name: 'Khmer Dictionary',
        short_name: 'KhmerDict',
        description: 'Fast Khmer Dictionary',
        theme_color: '#2A2F4F',
        icons: [
          {
            "src": "\/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image\/png",
            "density": "0.75"
          },
          {
            "src": "\/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image\/png",
            "density": "1.0"
          },
          {
            "src": "\/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image\/png",
            "density": "1.5"
          },
          {
            "src": "\/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image\/png",
            "density": "2.0"
          },
          {
            "src": "\/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image\/png",
            "density": "3.0"
          },
          {
            "src": "\/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image\/png",
            "density": "4.0"
          }
        ]
      }
    })
  ]
})

