---
title: "AI-assisted content migration toolkit"
description: "A small CLI that classifies legacy CMS content and flags edge cases for human review before a migration runs."
date: 2024-11-02
tags: ["AI", "migrations", "CLI", "Node.js"]
type: "note"
featured: true
---

The tooling that came out of the [Drupal → WordPress migration](/work/drupal-wordpress-migration) case study, generalized into something that isn't tied to one client's content model.

The core idea: point it at an export of the source content, and it classifies each item against the destination content model, scores its confidence, and produces a report of everything that needs a human to look at before the migration batch runs, instead of finding out after.

Still evolving. Writeup and a public version are on the list.
