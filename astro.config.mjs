import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";

// Treat single newlines in Markdown as line breaks (like GitHub comments), so a bold label
// on its own line stays on its own line instead of running into the paragraph below it.
const lineBreaks = {
  name: "line-breaks",
  text(node, ctx) {
    if (!node.value.includes("\n")) return;
    const nodes = [];
    node.value.split("\n").forEach((part, i) => {
      if (i > 0) nodes.push({ type: "break" });
      if (part) nodes.push({ type: "text", value: part });
    });
    ctx.replaceNode(node, nodes);
  },
};

export default defineConfig({
  site: "https://www.highfidelity.dev",
  integrations: [react(), mdx(), sitemap()],
  markdown: { processor: satteri({ mdastPlugins: [lineBreaks] }) },
  // Listen on all interfaces so the dev server is reachable from devices on the local network.
  server: { host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
