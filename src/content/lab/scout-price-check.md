---
title: "Scout"
description: "A mobile price checker for garage sales: snap a photo, identify the item, and pull comparable eBay listings in seconds."
date: 2026-09-23
tags: ["Next.js", "OpenAI", "eBay API", "Vercel"]
type: "app"
demoUrl: "https://scout-price-check.vercel.app"
---

An experiment in how fast I could get a usable resale price while standing in someone's driveway. Take a photo of a record, receiver, camera, or other small item, and a vision model identifies it and writes a search query. Scout then pulls active used eBay listings, filters out broken items, accessories, and mismatches, and has the model review the remaining titles to keep only complete, matching products.

The pricing is deliberately cautious. The model never sees prices or supplies them; the range comes only from the reviewed listings, and a wide spread withholds a number entirely. A simple set of buying rules turns that range into a maximum I should pay, with extra margin for electronics.

It's a garage-sale toy, not a calibrated pricing tool. eBay's public API only exposes active listings, not sold ones, so the estimate is based on asking prices.
