---
title: "Image Crop & Export"
description: "A browser-only tool for cropping one photo into every size a CMS needs and downloading them as WebP files."
date: 2026-04-27
tags: ["React", "TypeScript", "Canvas API", "WebP"]
type: "app"
demoUrl: "https://imgconvert-zeta.vercel.app"
githubUrl: "https://github.com/seafarer/imgconvert"
---

It's always frustrating to tell a non-technical client to open Canva, Photopea, or some other SaaS editor just to crop a photo, and WordPress's built-in crop tool, if you've used it, is pretty unpleasant. I thought why not just build a quick web app a client could use to eliminate this tiny frustration. Just drop in an image, adjust the crop for each preset size (hero, card, portrait), and export them all as optimized WebP files in one ZIP.

Everything runs in the browser. Nothing is uploaded, and the presets are a single file to edit for a given site. It warns when the source is too small for a preset, so clients don't unknowingly upscale a blurry photo.

The plan was to turn this into a WordPress plugin, and I still might.
