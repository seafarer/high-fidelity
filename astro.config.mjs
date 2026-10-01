import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.highfidelity.dev",
  integrations: [react(), mdx(), sitemap()],
  // Listen on all interfaces so the dev server is reachable from devices on the local network.
  server: { host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
