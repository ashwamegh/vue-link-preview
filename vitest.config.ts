import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.spec.js', 'tests/**/*.test.js']
  },
});
