import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.info(path.resolve(__dirname, './src'));
  return {
    plugins: [react()],
    base: env.VITE_BASE,
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      open: true,
      port: parseInt(env.VITE_SERVER_PORT) || 5173,
    },
    build: {
      outDir: env.VITE_BUILD_OUTDIR,
    },
  };
});
