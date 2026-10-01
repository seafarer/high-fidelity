---
title: "Trimm"
description: "A focused desktop app for trimming audio loops into clean samples, built for Teenage Engineering's EP series."
date: 2026-08-02
tags: ["Electron", "React", "TypeScript", "Web Audio", "Teenage Engineering"]
type: "app"
featured: true
images:
  - src: "./images/trimm/editor.png"
    alt: "Trimm waveform editor with in and out markers"
    caption: "Sample-accurate waveform with zero-crossing snap on the in and out markers."
---

Trimm does one thing: turn a pile of audio files into tight, usable samples. I built it mainly for Teenage Engineering's EP series samplers, which use an unusual sample rate. Drop in a batch of MP3s or loops, zoom into a sample-accurate waveform, set in and out points (with optional snapping to zero crossings so cuts don't click), audition the loop, and export a normalized mono 46 kHz WAV ready to load onto the EP. It remembers your output folder and advances to the next file automatically, so working through a whole folder is fast.

Everything runs locally. Decoding, playback, resampling, normalization, and WAV encoding all happen on the machine, with no uploads and no account. It builds for both Apple silicon and Intel Macs.

It has become the best tool I've used for this job, paid ones included. I've been tempted to release it, but it hasn't had the testing a public release deserves, and I'm not ready to support an open-source project. For now it stays a personal tool.
