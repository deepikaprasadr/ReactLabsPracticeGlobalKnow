/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // change the default port
    open: true  // opens browser
  }
})*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
    esbuild:{
      loader:'jsx',
       include: /src\/.*\.(js|jsx)$/,
    exclude: [],
 
  }, server:{
    port: 3000,
    open: true 
    
    }
})

