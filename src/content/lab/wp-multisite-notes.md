---
title: "Notes on running WordPress multisite at scale"
description: "What actually breaks when you take a WordPress multisite network past a handful of sites, and how to plan for it."
date: 2024-06-14
tags: ["WordPress", "Multisite", "DevOps"]
type: "article"
featured: false
---

Running a 36-site WordPress multisite network surfaces problems that never show up at 3 or 4 sites: plugin conflicts that only appear at scale, deploy pipelines that need to account for per-site configuration, and editorial permissions that get harder to reason about the more properties share infrastructure.

This is a running set of notes on what held up under scale, what didn't, and what I'd set up differently starting from scratch. Full writeup in progress.
