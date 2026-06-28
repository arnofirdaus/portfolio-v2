import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arnofirdaus.github.io',
  base: '/portfolio-v2',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});