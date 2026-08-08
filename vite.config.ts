import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const seraProxy = {
  "/api/sera": {
    target: "https://api.sera.cx",
    changeOrigin: true,
    secure: true,
    rewrite: (path: string) => path.replace(/^\/api\/sera/, "/api/v1"),
  },
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: seraProxy,
  },
  preview: {
    port: 4173,
    host: true,
    proxy: seraProxy,
  },
});
