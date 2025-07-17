import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'LumiUI',
      fileName: 'lumi-ui',
      formats: ['umd'],
    },
    rollupOptions: {
      // 排除的打包模块
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
