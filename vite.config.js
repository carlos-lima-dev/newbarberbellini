import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Bellini Barbearia",
        short_name: "Bellini",
        description: "Barbearia de qualidade e estilo",
        theme_color: "#1E40AF",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/logo2.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo2.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo2.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});

