import { defineConfig } from 'astro/config';
import pageInsight from "astro-page-insight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [pageInsight(), tailwind()]
});