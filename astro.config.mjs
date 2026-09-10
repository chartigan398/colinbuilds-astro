// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://colinbuilds.com',
  // Listen on IPv6 (::). Linux dual-stack (bindv6only=0) also accepts IPv4, so
  // Chrome's localhost -> ::1 does not get ERR_CONNECTION_REFUSED.
  server: {
    host: '::',
  },
  redirects: {
    '/labs/compare-hub': '/compare/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
