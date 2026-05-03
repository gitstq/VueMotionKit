import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      root: 'playground',
      plugins: [vue()],
      resolve: {
        alias: {
          'vue-motion-kit': resolve(__dirname, 'src'),
        },
      },
      server: {
        port: 5173,
      },
    }
  }

  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        include: ['src/**/*.ts', 'src/**/*.vue'],
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'VueMotionKit',
        formats: ['es', 'cjs'],
        fileName: (format) => `vue-motion-kit.${format === 'es' ? 'js' : 'cjs'}`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      cssCodeSplit: false,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
