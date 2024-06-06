import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'rioovs.github.io',
  // base: 'my-repo',
  integrations: [sitemap(), robotsTxt({
    sitemap: ["rioovs.github.io/sitemap-index.xml", "rioovs.github.io/sitemap-0.xml"]
  })
    , solidJs(), UnoCSS({
      injectReset: true
    }), icon(), svelte()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  // output: "server",
  // adapter: vercel(),
  vite: {
    assetsInclude: "**/*.riv"
  }
});