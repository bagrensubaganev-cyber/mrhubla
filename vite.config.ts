
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // Sesuaikan dengan nama repository Anda di GitHub
  base: '/FormulirMR/',
  plugins: [
    react(),
    EnvironmentPlugin(['API_KEY'])
  ],
  server: {
    port: 3000
  }
});
