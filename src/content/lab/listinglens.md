---
title: "ListingLens"
description: "Proofs of concept for using vision AI to find gaps in vacation rental listings, comparing photos and copy across booking channels."
date: 2026-05-10
tags: ["Vision AI", "Gemini", "Claude", "OpenAI", "Playwright", "Cloud Run"]
type: "app"
images:
  - src: "./images/listinglens/listinglens-1.png"
    alt: "Direct vs Airbnb Gap Analysis Image Scan"
    caption: "Direct vs Airbnb Gap Analysis Image Scan"
  - src: "./images/listinglens/listinglens-3.png"
    alt: "Direct vs Airbnb Gap Analysis Priority Issues Found"
    caption: "Direct vs Airbnb Gap Analysis Priority Issues Found"
  - src: "./images/listinglens/listinglens-2.png"
    alt: "Direct vs Airbnb Gap Analysis Content Matrix"
    caption: "Direct vs Airbnb Gap Analysis Content Matrix"
  - src: "./images/listinglens/propvision-1.png"
    alt: "Image scrape provider analysis 1"
    caption: "Image scrape provider analysis 1"
  - src: "./images/listinglens/propvision-2.png"
    alt: "Image scrape provider analysis 2"
    caption: "Image scrape provider analysis 2"
---

ListingLens came out of a product idea with a marketer: help vacation rental owners find the gaps in their listings. Does the Airbnb listing mention the hot tub that's clearly in the direct-booking site's photos? Which amenities are shown but never named? It turned into three small proofs of concept.

PropVision scrapes a listing's images and sends them through interchangeable vision models from Anthropic, OpenAI, and Google, so we could compare cost and quality on the same photos. ListingLens builds on it: give it a direct booking URL and an Airbnb URL, and it analyzes the direct site's photos and copy against the Airbnb listing to produce an amenity matrix, scores, and prioritized fixes. A third piece, a Python OTA scraper, handles listing text from Airbnb and VRBO, since VRBO blocks ordinary scraping.

The tools worked as intended and a great test for what is possible with vision analysis. We are still exploring ways to bring a product like this to market but there are similar tools built within propietary apps that we'd have to differentiate from.  

