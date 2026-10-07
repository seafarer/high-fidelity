---
title: "Taking a print magazine all in on the web"
summary: "A greenfield WordPress publication for the American Council of Engineering Companies, built with Thor Studio"
client: "American Council of Engineering Companies"
year: "2025"
tags: ["WordPress", "Gutenberg", "React", "JavaScript", "ACF", "Twig", "Composer", "Tailwind", "PHP"]
metrics: ["8 custom Gutenberg blocks", "250 stories published in the first year"]
featured: false
order: 6
category: "Publishing"
cardTitle: "Engineering Inc."
cardBlurb: "A greenfield WordPress home for ACEC's magazine as it moved from print to digital-first, built around custom blocks a print-first team could actually use."
stat: "250"
statLabel: "Stories in year one"
images:
  - src: "./images/engineering-inc/home.png"
    alt: "Engineering Inc. homepage with a featured story, sponsored Industry Insights, and the Engineering Influence podcast"
    caption: "The Engineering Inc. homepage: featured stories, sponsored industry insights, and the Engineering Influence podcast."
---

**At a glance**
- Client: The American Council of Engineering Companies (ACEC), through agency partner [Thor Studio](https://www.thor-studio.com/)
- Role: WordPress lead developer and the site's long-term host
- Team: Thor Studio, with design by 82 Local
- Timeline: January to September 2025
- Stack: WordPress, custom Gutenberg blocks (React, @wordpress/scripts), ACF, Twig (Timber), Composer, Tailwind, PHP
- Live: [engineeringinc.acec.org](https://engineeringinc.acec.org/)

**The situation**
Engineering Inc. is the magazine for ACEC, and until 2025 never had a standalone website. Blog posts and podcast episodes lived on a section of acec.org and went out through the newsletter, while the magazine itself was print. When ACEC decided to end the print publication, they went all in on the web. ACEC's team already knew WordPress from their main site and wanted Engineering Inc. to stay on it, and Thor knew my WordPress work from previous projects, so they brought me in to lead development of the new site.

**The work**
Building a greenfield website for Engineering Inc. mean we there was no technical debt and nothing legacy we needed to build around. The primary constraint was that the editors were used to the longer print publishing cycles and the familiarity of a word processor. Since the ACEC team was new to publishing through a web CMS and a faster digital release cadence, making the editing experience easy was a top priority. Leaning into the block editor made the most sense for both ease of use and long-term maintenance.

The magazine had a lot of print-oriented design the team wanted to keep, such as stylized pull quotes, headshots paired with content for Q&As, recurring award features, lightbox modals, and more. An off-the-shelf block plugin would have given editors far more than they needed and brought its own styling problems. ACF blocks were the other common route, but they didn't work well with the block editor's iframed canvas under Block API version 3, and they make for a clunky editing experience anyway. Our solution was to go with native blocks using WordPress's React-based block tooling, letting the designs integrate directly into the editor.

I set up the block development workflow, creating a custom plugin with build tooling and the conventions for each block and shipped the first few blocks before Thor's lead engineer ran with it. There are eight in all, each tailored to something their editors actually publish. As an example, we developed a pull quote that is highly versatile: it can swing left or right, accept an optional headshot with name, title, and company, and take any of the theme's colors, while adapting its styling automatically.

Underneath the blocks, I modeled the content the way the magazine is organized, with custom post types for features, departments, series, and issues, so a print issue's structure carries over to the web. ACF handles settings that don't need a place in the layout, such as setting an article as sponsored or managing the homepage hero slider.

Thor's lead engineer handled the content migration, including the magazine's PDF issues, the blog, and the podcasts, along with a netFORUM integration and registration wall.

**Finishing the design in the browser**
82 Local designed the site, with Thor's designer acting as art director. The static designs covered only the core desktop pages (home, archive, and article) plus explorations of a few key blocks. I extrapolated the rest, including mobile layouts and interactions, and finished the design in the browser with the 82 Local designer, Thor's art director and lead engineer, and ACEC's stakeholders reacting to the real thing as it came together.

**Built to run well**
Because the site was new from the ground up, we developed security and operations as part of the foundation. It launched on a current version of PHP, with two-factor authentication and a non-default login URL to cut down on automated attacks. I host it long term on Digital Ocean, with automated off-site backups to AWS, uptime monitoring, and CircleCI deploys that lint the PHP, run a smoke test after each release, and alert the team if anything fails.

**The result**
Engineering Inc. now has a full-time publication home on the web, with an editing experience built around how its team actually works. The client loves the site, and Thor Studio and ACEC continue to evolve the digital publication through an ongoing partnership.
