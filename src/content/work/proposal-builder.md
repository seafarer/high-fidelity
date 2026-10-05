---
title: "Vibe-coded client prototype to production tool"
summary: "A client brought me a prototype built in Lovable. I took it the last 20% via code audit, database, auth, workflow, and hosting"
client: "Adventure Outdoors"
year: "2026"
tags: ["React", "TypeScript", "Supabase", "Vercel", "Resend", "Lovable"]
metrics: ["~4,700 lines of generated code removed", "A single source of truth"]
featured: true
order: 1
category: "Prototype to production"
cardTitle: "Proposal builder"
cardBlurb: "A client's Lovable prototype, taken to production with auth, a database, and a review-and-confirm workflow."
stat: "−4.7K"
statLabel: "Lines of AI code cut"
images:
  - src: "./images/proposal-builder/image-1.png"
    alt: "Proposal Builder screen one"
    caption: "Proposal Builder screen one"
  - src: "./images/proposal-builder/image-2.png"
    alt: "Proposal Builder screen two"
    caption: "Proposal Builder screen two"
---

**At a glance**
- Client: [Adventure Outdoors](https://www.coloradoraft.com), a Colorado adventure company and a client of 20 years
- Role: Audit, engineering, design, hosting, and ongoing maintenance
- Starting point: A working prototype the owner built himself in Lovable
- Stack: React, TypeScript, Supabase (Postgres, auth, row-level security), Resend, Vercel

**The situation**
Proposals for corporate groups, weddings, and travel agents started from a Microsoft Word template. Each salesperson duplicated it for every new customer, so dozens of slightly different copies were floating around, with outdated pricing, inconsistent terms, and edits that never made it back to the original.

The owner found Lovable and designed a replacement himself. He got about 80% of the way there, then stopped at the hard part. Finishing it with more prompting would have left the business depending on an AI tool for every future change, with no one who actually understood the code, and none of the real infrastructure a sales team needs: accounts, a database, a way to send proposals out, and a way to get them back.

**The fix**
I took the exported code and audited it first. About half of it was dead weight: unused UI components, leftover scaffolding, and pricing and business content tangled into one large page. I removed roughly 4,700 lines, moved all the proposal state and pricing into one place, and pulled the adventure catalog, terms, and vendor presets into plain data files that can be edited without touching the interface.

Then I built what the prototype was missing. Supabase provides the database, staff logins, and row-level security, so the sales team can manage every proposal while customers can only view the one they were sent. Proposals move through a real workflow: drafted, reviewed internally, sent to the customer as a draft, finalized, and confirmed by the customer, with email notifications through Resend when they accept. I finished the design and layout to the client's specifications, including clean print and PDF output.

It's now hosted on Vercel where I can maintain and oversee it.

**The result**
Every proposal now lives in one system. The whole sales team works from the same activities, pricing, and options, with enough flexibility to tailor each quote to the group, and there's no longer Word files across multiple folders and computers that need to be kept track of.
