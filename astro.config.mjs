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
      name: 'Newsreader',
      cssVariable: '--font-display',
      weights: ['300 600'],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-body',
      weights: ['300 700'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
