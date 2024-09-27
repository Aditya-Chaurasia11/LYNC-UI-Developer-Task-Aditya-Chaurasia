import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Expose the server on the network
    port: 3000,  // Optional: Specify the port (default is 3000)
    open: true,  // Optional: Automatically open the app in the browser
  },
})
