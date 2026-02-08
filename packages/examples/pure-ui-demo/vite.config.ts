import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    }) as any,
    Components({
      dts: 'src/components.d.ts',
    }) as any,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pure-ui/core': resolve(__dirname, '../../pure-ui/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
