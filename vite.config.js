// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // otras opciones de configuración
  server: {
    // Configurar para manejar todas las rutas
    fallback: 'index.html',
  },
});
