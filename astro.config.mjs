import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Custom domain: the site is served from the ROOT of snarksnark.com, so there
  // is no `base`. Setting base: '/snark' here emits asset URLs like
  // /snark/_astro/index.css, which 404 on a custom domain — the HTML loads, no
  // CSS or JS loads, and you get a black rectangle. Ask us how we know.
  // (If you ever revert to jamiegunn.github.io/snark, put base: '/snark' back.)
  site: 'https://snarksnark.com',
  output: 'static',
  // Pages preload on hover, so the contempt arrives before you even click.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({
      // The integration injects Tailwind's base styles; theme customization
      // (brand colors, fonts, animations) lives in tailwind.config.mjs.
      applyBaseStyles: true,
    }),
  ],
  compressHTML: true,
});
