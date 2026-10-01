---
title: "Island Embed"
description: "A WordPress plugin that drops a built Astro site into any page with a shortcode."
date: 2026-09-04
tags: ["Astro", "React", "WordPress", "PHP", "Shadow DOM"]
type: "github"
githubUrl: "https://github.com/seafarer/island-embed"
---

This started with a client request: they wanted full, SPA-style microsites living inside their WordPress site. We don't control that site, and spinning up custom build systems or tooling for each microsite felt heavy. Building the microsite in Astro was easy, so the question became whether a plugin could just display an Astro `dist` folder.

The proof of concept is a small WordPress plugin with a shortcode that embeds the built Astro island, plus a custom REST route that serves it live content. The island fetches fresh data on every page load, so publishing in WordPress shows up without a rebuild. Its styles render inside a shadow root, so the host theme's CSS can't break the layout and the island's CSS can't leak out.

I doubt it will ever be useful beyond the original case, but it was a fun proof of concept for mixing a modern frontend into a site you don't own.
