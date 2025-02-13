import { resolve } from "path";
import { defineConfig } from "vite";

export default {
      //config options
    css: {
        devSourcemap: true 
    },
    build: {
        rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'src/pages/contacto/contacto.html'),
        nosotros: resolve(__dirname, 'src/pages/Nosotros/nosotros.html')
    
        }

    }
}
