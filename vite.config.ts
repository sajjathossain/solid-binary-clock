import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  base: '/solid-binary-clock/',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
