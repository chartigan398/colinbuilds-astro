import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // Keep Vite on this package's tsconfig, not the parent Astro one.
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        target: 'ES2022',
        useDefineForClassFields: true,
        module: 'ESNext',
        moduleResolution: 'bundler',
        strict: true,
      },
    },
  },
});
