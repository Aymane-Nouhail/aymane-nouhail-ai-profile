import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { plugin as markdown } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Set base path for GitHub Pages deployment
  base: mode === 'production' ? '/aymane-nouhail-ai-profile/' : '/',
  plugins: [
    react(),
    markdown(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
