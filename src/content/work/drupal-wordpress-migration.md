---
title: "Drupal → WordPress migration"
summary: "25,000 posts migrated from an end-of-life Drupal platform"
year: "2025"
tags: ["Drupal", "WordPress", "Migration", "AI-assisted tooling", "WP-CLI", "MySQL"]
metrics: ["25,000 posts migrated", "~30% under budget"]
featured: true
order: 2
category: "Publisher migration"
cardTitle: "Drupal → WordPress"
cardBlurb: "Moving 25,000 posts off an end-of-life Drupal platform."
stat: "−30%"
statLabel: "Under budget"
---

**At a glance**
- Role: Lead developer, discovery through launch
- Timeline: Fall 2025
- Scale: ~25,000 posts, going back to 2005, with 25GB of media
- Stack: Drupal 7, WordPress, MySQL, WP-CLI, AI-assisted migration tooling

**The situation**
A publisher's Drupal 7 site had reached end of life. It no longer received security updates, and there was no one left on the team who could work in Drupal. Years of content had accumulated across ad hoc content types and inconsistent field usage, and nobody fully understood the content model. Everything needed to move to WordPress without losing structure, media, or URLs.

**The fix**
While there are numerous plugins that claim to migrate Drupal to WordPress, at this scale and level of customization it just doesn't work. To map out the migration as clearly as possible before starting I inventoried the entire content model in the database instead of the admin screens. Drupal 7 spreads content across dozens of field tables, so I used SQL to map what was actually there: which content types were in use, which fields were populated and how, where taxonomies overlapped, and which records were orphaned or broken. That discovery shaped the migration plan and surfaced edge cases before any code was written.

From there I built AI-assisted tooling to classify content, reconcile inconsistent taxonomies, and flag anything ambiguous for human review. Automated validation compared source and destination after every batch, so problems were caught while they were still cheap to fix.

The AI handled volume. Knowing both platforms is what made it work. Understanding how Drupal stores content and how WordPress expects to receive it meant I could tell the tooling exactly what to do and recognize quickly when its output was wrong.

**The result**
All 25,000 posts moved with structure, media, and URLs intact, and the project came in roughly 30% under the original budget.
