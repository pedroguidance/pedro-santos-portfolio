import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://pedrosantos.design',
  trailingSlash: 'never',

  output: 'server',
  adapter: vercel({
    edgeMiddleware: false,
  }),

  integrations: [
    sitemap(),
    mdx(),
  ],

  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: false,
  },

  experimental: {
    contentIntellisense: true,
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
