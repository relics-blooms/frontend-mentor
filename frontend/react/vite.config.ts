import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  base: "/react",
  build: {
    emptyOutDir: false,
    outDir: path.join(import.meta.dirname, "../../dist/react"),
  },
  plugins: [react()],
});
