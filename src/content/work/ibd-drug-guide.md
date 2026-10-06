---
title: "An interactive treatment guide for IBD"
summary: "A guided quiz and dynamic drug finder that helps people with inflammatory bowel disease compare treatments, built with Thor Studio for the American Gastroenterological Association"
client: "American Gastroenterological Association"
year: "2024–2025"
tags: ["Astro", "React", "TypeScript", "Jotai", "Tailwind"]
metrics: ["A user-centered interface for complex medical information"]
featured: false
order: 5
category: "Healthcare"
cardTitle: "IBD drug guide"
cardBlurb: "A guided quiz and drug finder that turns dense treatment data into a shortlist patients can bring to their doctor."
stat: "58"
statLabel: "Treatments compared"
images:
  - src: "./images/ibd-drug-guide/home.png"
    alt: "IBD drug guide homepage with a Take the quiz call to action"
    caption: "The guide's homepage, built as a fast static Astro site."
  - src: "./images/ibd-drug-guide/quiz.png"
    alt: "Quiz screen asking whether the visitor is a patient, caregiver, or health care professional"
    caption: "The quiz opens by asking who's using it, with a live count of matching treatments as the user interacts."
  - src: "./images/ibd-drug-guide/treatments.png"
    alt: "Treatment finder with filters, grouping, priority ordering, and an expanded drug detail panel"
    caption: "The drug finder enables users to filter by route and drug class, group by brand or generic name, and order by what matters."
  - src: "./images/ibd-drug-guide/filters-mobile.png"
    alt: "Mobile filter drawer with sex, route of administration, and pregnancy questions"
    caption: "On phones, two filters sections are combined into a single drawer."
---

**At a glance**
- Client: The American Gastroenterological Association (AGA), through agency partner [Thor Studio](https://www.thor-studio.com/)
- Role: Front-end engineer and technical partner, from discovery through launch
- Team: Thor's lead engineer and art director, plus a contract UX designer
- Stack: Astro, React, TypeScript, Jotai, Tailwind
- Live Site: [ibddrugguide.gastro.org](https://ibddrugguide.gastro.org/)

**The situation**
People living with inflammatory bowel disease have a lot of treatment options and it can be overwhelming: oral, injected, and infused drugs, 11 different drug classes, each with its own trade-offs in safety, efficacy, and convenience, and considerations like pregnancy that change the answer. The AGA wanted a guide that patients, caregivers, and health care professionals could use to help narrow that list before a conversation with their doctor.

The project ran more than 18 months, with input from doctors, patients, advocacy groups, and the drug companies themselves. I was involved from discovery through launch.

**The work**
Early on I worked with Thor to turn the scope into development requirements and choose the platform. We went with Astro and Tailwind as most of the site is content that should be fast and simple, while Astro let us drop React in spots where the experience needed to be interactive. Part of the appeal was also pulling drug information and categories from WordPress at build time, so the AGA's team could manage content in a familiar CMS. That connection proved unreliable in practice, so later in the project we replaced it with static JSON files as we found that content ultimately would not change that often.

I built the two interactive pieces in React and TypeScript:
- **The quiz** walks visitors through a short set of questions (who they are, sex assigned at birth, preferred routes of administration, pregnancy plans, and more) with a live count of matching treatments as they answer.
- **The drug finder** takes those answers as filters and lets people refine further by route and drug class, group results by brand or generic name, order them by their treatment priorities, and expand any treatment into its full details.

Quiz answers and finder filters share state through Jotai, so the two tools stay in sync as people move between them. Thor's lead engineer wrote the recommendation algorithm and the loading logic behind it and owned deployment while I created the interface that reflected this data design.

**Designing with real data**
I worked closely with Thor's art director and a contract UX designer, and some of the design decisions only became clear once the interface was running on actual data.

How the quiz worked had been debated for a long time. We looked at a lot of existing ideas and the design team mocked up several examples. I built an interactive functional prototype, after which I advocated for dropping auto-scroll and adding explicit previous and next buttons. From there we worked out together how to put every question on a single page, so users could scroll back, change an answer, and immediately see how their results changed. We wanted to let people explore their options rather than feel locked into a set of results. 

The drug finder had the opposite problem, which was a huge amount of data with the potential for many different states, filters, and clickable options. It would have been easy to get carried away with providing a button, link or filter that addressed each unique app state. Once content was in place however, I moved to consolidate filters and links that varied from screen-to-screen in the static designs to create a unified UX. 

**The result**
The guide launched on the AGA's site in November 2025. My contributions were completed in April 2025, and the site has continued to evolve since. Now, instead of reading through dozens of drug websites or combing through drugs.com, a patient can answer a few questions and leave list of treatments to discuss with their doctor, tailored to their unique preferences and situation.
