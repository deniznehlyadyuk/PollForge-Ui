import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), dts(), react()],
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
    proxy: {
      '/auth': {
        target: 'https://localhost:7126',
        changeOrigin: true,
        secure: false,
      },
      '/authorized-endpoint': {
        target: 'https://localhost:7126',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
