import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import favicon from './public/favicon.ico';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  head: {
    links: [
      { rel: 'icon', type: 'image/x-icon', href: favicon },
    ],
  },
});