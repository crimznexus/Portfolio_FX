// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://muhammadfaizan.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  // Self-hosted at build time: no request to a font CDN at runtime.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
