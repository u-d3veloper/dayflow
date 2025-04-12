import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Dayflow',
          short_name: 'Dayflow',
          description: 'This is Dayflow',
          background_color:"#ffffff",
          theme_color: '#ffffff',
          start_url:"/index.html",
          icons: [
            {
              src: "web-app-manifest-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "web-app-manifest-512x512.png",
              size: "512x512",
              type: "image/png",
              purpose: "any"
            }
          ],
        }
      }),
    ],
  };
});
