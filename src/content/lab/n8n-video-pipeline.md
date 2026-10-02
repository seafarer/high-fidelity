---
title: "An AI video pipeline in n8n"
description: "An experiment in chaining text, image, video, and voice AI through n8n, from a single idea to a finished short video and a matching blog post."
date: 2025-04-01
tags: ["n8n", "Automation", "Midjourney", "Kling", "ElevenLabs", "Creatomate"]
type: "note"
videos:
  - src: "/media/n8n-video-pipeline/tower-of-babel.mp4"
    title: "Tower of Babel: a short produced by the pipeline"
    caption: "A finished short from the pipeline: the Tower of Babel episode."
    poster: "./images/n8n-video-pipeline/poster.jpg"
    vertical: true
---

In the spring of 2025 I wanted to see how far I could get by wiring several AI services together with n8n. The goal was to start from a single idea and end with a finished short video, uploaded as a draft to YouTube and TikTok, plus a matching blog post, without touching anything in between.

I needed a subject that could fill a lot of short videos, so I picked "ancient mysteries," in the spirit of the old Ancient Aliens TV show.

**How it worked**
- **Ideas:** A detailed prompt generated each video as a row in a spreadsheet: the idea, title, description, an intro script and a "claims" script, notes on setting and cinematic style, five scene prompts, and an opening and closing emoji.
- **Visuals:** n8n sent each scene prompt to Midjourney for a starter image (through [PiAPI](https://piapi.ai/), an unofficial API, since Midjourney didn't offer one), then passed that image to a Kling video model on Replicate to bring it to life.
- **Voice:** At the same time, the scripts went to ElevenLabs to become the voiceover.
- **Assembly:** Once every piece was back, n8n handed them to a Creatomate template that stitched the clips and voiceover into the finished video.
- **Publishing:** n8n uploaded the video to YouTube and TikTok as drafts, with an optimized title, description, and hashtags.
- **Blog:** While the uploads ran, it generated a Markdown post with front matter (excerpt, tags, and categories) and reused the Midjourney thumbnail as its hero image.

The last step would have been publishing the blog post automatically, but by then I'd learned what I set out to learn.

**What I took away**
n8n is very good at the unglamorous part: moving data between API-based services, waiting on slow jobs, and routing each piece to the right place. The interesting part was combining four kinds of generation (text, image, video, and audio) into one pipeline, where each step's output became the next step's input. The same pattern applies well beyond novelty videos, to any process that pulls content from several services into one finished deliverable.
