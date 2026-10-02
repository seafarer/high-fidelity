---
title: "How this website was made"
description: "A local Qwen model, three coding harnesses, one prompt, and Claude Design to bring the best ideas together."
date: 2026-10-02
tags: ["Qwen", "Local LLMs", "Opencode", "Codex", "Claude Code", "Claude Design"]
type: "article"
images:
  - src: "./images/how-this-site-was-made/codex-version.jpg"
    alt: "The design coded by Qwen3.8-27B with Codex as the harness"
    caption: "The design coded by Qwen3.8-27B with Codex as the harness"
  - src: "./images/how-this-site-was-made/opencode-version.jpg"
    alt: "The design coded by Qwen3.8-27B with Opencode as the harness"
    caption: "The design coded by Qwen3.8-27B with Opencode as the harness"
---

Over the last several months I took about ten stabs at redesigning this site with AI design tools, and never got anything close to good, even with solid copy, decent ideas, and a name like "High Fidelity" to lean into. The site was several years out of date, though, and I wanted something better quickly.

Enter Qwen3.8-27B. I got a new Mac last month, since my previous machine was five years old, and stretched for 64GB of RAM so I could experiment with running local models. Using them through Ollama has been interesting but slow for most work. Then I came across [Splash](https://inco.ai/blog/splash/), an open-source inference engine from Inco built around specific models rather than every model. It pairs Qwen3.8-27B with a trained draft model for speculative decoding and kernels tuned to the model's exact shape, and Inco measures it at about twice the decode speed of the next-fastest engine. That was enough to give it a hard test: redesign my website.

Splash launches coding harnesses directly against the local model (`splash opencode`, `splash claude`, and so on), so I pointed Qwen at the existing site through three of them, Opencode, Codex, and Claude Code, and gave all three the same prompt:

> The site in this folder has a pretty generic design. Please improve it. Try making it big and bold, maybe a colorful-yet-brutalist aesthetic, or illustrated, blocky and funky. Make sure the design fits with the content however. Do not review any previous agent plans, other git branches, or current design inspiration documents hidden in this repo. I want the design to be greenfield, inspired from just the code and content in the repo, and my prompt. You can use *some* influence from current color and type, if desired, but don't feel restrained by that.

Each harness produced something different, and all three were surprisingly good. I liked them more than anything I'd gotten from the frontier models, though the prompt and direction were different, so it isn't a one-to-one comparison. Opencode's was my favorite, followed by Codex, then Claude Code. Each took about an hour at an average of 40 tokens per second. Inco's own benchmarks show 74 tokens per second on short prompts and 54 at 32K of context, so for long agentic sessions that felt about right. None of them were ready for prime time.

So I took my two favorites, Opencode's and Codex's, into Claude Design (Opus 5.5, medium thinking), told it what I liked and disliked about each, and asked for a hybrid. It more or less one-shotted the design you're looking at now. From there it took several more days of refining components, tightening copy, and writing the case studies and lab entries to get it where I wanted it.

Yes, the neo-brutalist style may be starting to feel overdone, and it isn't everyone's taste. But it's fun, and it's an aesthetic I can get behind. What struck me most is that, with clear direction and someone willing to judge the results, LLMs can now get past safe grids and static type to a design with real impact.
