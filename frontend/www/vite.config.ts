import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    emptyOutDir: false,
    outDir: path.join(import.meta.dirname, "../../dist"),
  },
  plugins: [react(), tailwindcss()],
  publicDir: path.join(import.meta.dirname, "../../public"),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $: fileURLToPath(new URL("../../public", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/angular": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/angular/, ""),
        target: "http://localhost:3100/angular",
      },
      "/nest": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nest/, ""),
        target: "http://localhost:3200/nest",
      },
      "/react": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/react/, ""),
        target: "http://localhost:3300/react",
      },
      "/springboot": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/springboot/, ""),
        target: "http://localhost:3400/springboot",
      },
      "/vue": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vue/, ""),
        target: "http://localhost:3500/vue",
      },
    },
    strictPort: true,
  },
});
