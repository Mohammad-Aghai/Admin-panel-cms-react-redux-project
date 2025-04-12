import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.png', 
        'mask-icon.svg'
      ],
      manifest: {
        name: 'Mohammad Aghai PWA CMS',
        short_name: 'CMS_PROJECT',
        description: 'This is a PWA-compatible CMS project that works seamlessly across all platforms.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: '/apple-icon-180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
        screenshots: [
          {
            src: '/screenShot.png',
            sizes: '1121x631',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screenShot2.png',
            sizes: '802x605',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
      }
      
    }),
  ],
});
