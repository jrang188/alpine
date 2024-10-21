---
title: SoundSurf
date: '2024-10-07T00:00:00.000Z'
description: Voice-activated AI-powered Web Browser
layout: article
cover: ''
---

# SoundSurf

[Github Link](https://github.com/jrang188/stormhacks2024)

:nuxt-img{alt="SoundSurf" src="/projects/soundsurf.jpg"}

**SoundSurf** is a voice-activated AI-powered web browser designed to help people with physical disabilities access the Internet. It was inspired by a relative of our teammate who, unfortunately, experienced such a tragedy. This project led our team to win Stormhacks 2024 and the Best Social Good Hacks award.

The browser uses electron.js because if we were to fork Chromium, our mentors said we wouldn't finish in 24 hours. We created a browser instead of something simpler like a Chrome extension because of permission issues that users need to grant, which we think would make it inaccessible for those who physically can't interact with the mouse. Thus, the browser. The UI on the browser is just simple HTML and CSS, which makes electron.js more accessible.

We then used OpenAI's Whisper to parse speech-to-text as using the built-in Chromium speech-to-text requires a GCP API key when running outside a Chromium browser. We also implemented an audio-filtering functionality to ensure that users can use this in crowded environments, which is the case for hackathon judging sessions. For simple commands, we could implement functions to deal with them without needing an LLM to process them further.

However, for complex cases, such as pressing a specific button or filling out a form, we needed help from an LLM. Therefore, we developed a FastAPI server that receives raw HTML and the user's prompt, parses them using OpenAI GPT-4 to find the correct accessibility selector, and returns it to the browser. The browser would then query the selector and interact with it. This is still a work in progress as most websites nowadays are not simple static websites but rather dynamic websites that are probably coded using React, Vue, or other frontend frameworks. Therefore, the HTML that was usually passed in is generally too complex and uses too many OpenAI tokens, which makes it unscalable.

In the future, we definitely should try to fine-tune models that specifically deal with websites and rework our browser's logic, as we put too many things in our `preload.js` file, with some items that could have been placed in `renderer.js` instead.

::button-link{href="https://devpost.com/software/soundsurf"}
Check out our devpost here
::
