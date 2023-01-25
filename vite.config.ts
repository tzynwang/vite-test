import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/vite-test',
    server: {
      open: true,
      port: parseInt(env.PORT),
    },
    build: {
      outDir: env.BUILD_OUTPUT,
    },
  };
});
