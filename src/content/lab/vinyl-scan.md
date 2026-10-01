---
title: "Vinyl Scan"
description: "A local-first app for photographing, identifying, grading, and triaging a record collection, built around buying whole collections at estate sales."
date: 2026-10-01
tags: ["React", "Node.js", "SQLite", "OpenAI", "Discogs API", "PWA"]
type: "app"
featured: true
images:
  - src: "./images/vinyl-scan/vinyl-scan-5.jpeg"
    alt: "Phone capture screen with cover and label photos"
    caption: "Mobile capture of cover and center label, then Save & Analyze"
  - src: "./images/vinyl-scan/vinyl-scan-4.jpeg"
    alt: "Review Discogs master releases"
    caption: "Review Discogs release matches."
  - src: "./images/vinyl-scan/vinyl-scan-2.jpeg"
    alt: "Review images for each Discogs release"
    caption: "Review images for each Discogs release"
  - src: "./images/vinyl-scan/vinyl-scan-3.jpeg"
    alt: "See pressing details and matrix runout information"
    caption: "See pressing details and matrix runout information to help record identification"
  - src: "./images/vinyl-scan/vinyl-scan-1.jpeg"
    alt: "Price estimates, links, and confirmations"
    caption: "Price estimates, links, and confirmations"
  - src: "./images/vinyl-scan/vinyl-scan-6.png"
    alt: "Collection review"
    caption: "Collection review"
---

I've been collecting records for about a year and recently started buying small collections at estate sales. That changes the problem: instead of cataloging one record at a time, I need to get through a few hundred quickly and decide what to keep, sell, or pass on. None of the consumer collection apps I tried were built for that, so I built my own.

The workflow is phone first. Photograph the cover and center label, hit save, and move on to the next record. In the background, a vision model reads the artist, title, catalog number, label, and pressing clues, then Discogs supplies the matching master release, its pressings, and grade-aware price suggestions. Analysis runs as durable jobs that survive a closed browser or a server restart, so a stack of records can be photographed in one pass and reviewed later.

Initially I set this up so that review would just happen at a desk. However, the more I used it the more I wanted analysis to be a second screen activity when I had downtime, which meant that the processing needed to be as mobile friendly as the capture. After a few iterations I think I have it where I want it for now. the right pressing gets confirmed against Discogs' release galleries, and each record gets noted as keep, sell, wholesale, or junk. Everything lives in SQLite with the original photos on my own machine, with search, bulk edits, and CSV export for the parts that end up on a selling platform. 

This is an ongoing personal project and gets used every time a new box of records comes home. In a future phase, I'd like to be able to push the collection to Discogs via API and keep the inventory updated two-ways. For now tho, Im still working through the boxes.
