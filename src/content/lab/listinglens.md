---
title: "ListingLens"
description: "Proofs of concept for using vision AI to find gaps in vacation rental listings, comparing photos and copy across booking channels."
date: 2026-05-10
tags: ["Vision AI", "Gemini", "Claude", "OpenAI", "Playwright", "Cloud Run"]
type: "app"
---

ListingLens came out of a product idea with a marketer: help vacation rental owners find the gaps in their listings. Does the Airbnb listing mention the hot tub that's clearly in the direct-booking site's photos? Which amenities are shown but never named? It turned into three small proofs of concept.

PropVision scrapes a listing's images and sends them through interchangeable vision models from Anthropic, OpenAI, and Google, so we could compare cost and quality on the same photos. ListingLens builds on it: give it a direct booking URL and an Airbnb URL, and it analyzes the direct site's photos and copy against the Airbnb listing to produce an amenity matrix, scores, and prioritized fixes. A third piece, a Python OTA scraper, handles listing text from Airbnb and VRBO, since VRBO blocks ordinary scraping.

The tools worked, but it turned out Beyond had already built this into their platform, so we didn't take it further. It was still a great way to push the limits of vision analysis on real listing photos.
