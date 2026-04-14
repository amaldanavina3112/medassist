import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'MedAssist – Medicine Reminder',
        short_name: 'MedAssist',
        description: 'Your personal medicine reminder, tracker & stock manager',
        theme_color: '#f9a8d4',
        background_color: '#fdf2f8',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        id: 'medassist-app',
        categories: ['health', 'medical', 'lifestyle'],
        icons: [
          {
            src: '/pill-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: "Today's Schedule",
            short_name: 'Today',
            description: "View today's medicine schedule",
            url: '/',
            icons: [{ src: '/pill-icon.svg', sizes: 'any' }]
          },
          {
            name: 'Check Stock',
            short_name: 'Stock',
            description: 'Check medicine inventory',
            url: '/stock',
            icons: [{ src: '/pill-icon.svg', sizes: 'any' }]
          },
          {
            name: 'Notifications',
            short_name: 'Reminders',
            description: 'Set reminder times',
            url: '/notifications',
            icons: [{ src: '/pill-icon.svg', sizes: 'any' }]
          }
        ],
        screenshots: [],
        prefer_related_applications: false,
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        injectionPoint: undefined,
      },
    })
  ]
})
