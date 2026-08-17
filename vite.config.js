import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "app",
  base: "/AlgoPath/",
  publicDir: "../public",
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"]
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
