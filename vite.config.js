/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    coverage: {
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/**/*.test.*',
        'src/test/**',
        'src/main.jsx',
        'src/Firebase/**',
        'src/assets/**',
      ],
      reporter: ['text', 'lcov'],
    },
  },
})
