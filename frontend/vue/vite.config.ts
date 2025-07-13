import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/vue",
  build: {
    emptyOutDir: false,
    outDir: path.join(import.meta.dirname, "../../dist/vue"),
  },
  plugins: [vue(), vueJsx(), tailwindcss()],
  publicDir: path.join(import.meta.dirname, "../../public"),
  server: {
    port: 3500,
    proxy: {
      // "/": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\//, ""),
      //   target: "http://localhost:3000/",
      // },
      // "/angular": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/angular/, ""),
      //   target: "http://localhost:3100/angular",
      // },
      // "/nest": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/nest/, ""),
      //   target: "http://localhost:3200/nest",
      // },
      // "/react": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/react/, ""),
      //   target: "http://localhost:3300/react",
      // },
      // "/springboot": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/springboot/, ""),
      //   target: "http://localhost:3400/springboot",
      // },
      // "/vue": {
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/vue/, ""),
      //   target: "http://localhost:3500/vue",
      // },
    },
    strictPort: true,
  },
});
