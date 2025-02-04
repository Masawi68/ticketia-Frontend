import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use the dynamic port or default to 5173
    host: '0.0.0.0', // Ensure it listens on all interfaces
  },
})