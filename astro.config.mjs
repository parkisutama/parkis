import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    rehypePlugins: [
      rehypeHeadingIds,
    ],
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },

  integrations: [partytown()],
});