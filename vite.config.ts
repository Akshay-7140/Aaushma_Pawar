// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import {defineConfig} from 'vite';

// export default defineConfig(() => {
//   return {
//     plugins: [react(), tailwindcss()],
//     resolve: {
//       alias: {
//         '@': path.resolve(import.meta.dirname, '.'),
//       },
//     },
//     server: {
//       host: '0.0.0.0',
//       port: 3000,
//       hmr: process.env.DISABLE_HMR !== 'true',
//       watch: process.env.DISABLE_HMR === 'true' ? null : {},
//     },
//   };
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Aaushma_Pawar/',
})
