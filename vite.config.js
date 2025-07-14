import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // hapus base url "/soko-test" jika ingin testing di lokal
  base: process.env.VITE_BASE_PATH || "",
});