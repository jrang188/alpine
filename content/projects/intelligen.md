---
title: "IntelliGEN"
date: 2023-05-21T14:20:27-07:00
description: "Full-stack app that allows you to generate quizzes from your notes using ChatGPT-3.5"
layout: article
cover: /projects/intelligen-1_16x9.png
---

[Github Repo link](https://github.com/Aryan-B/Stormhacks)

::gallery
---
images:
  - /projects/intelligen-1_16x9.png
  - /projects/intelligen-2_16x9.png
  - /projects/intelligen-3_16x9.png
  - /projects/intelligen-4_16x9.png
  - /projects/intelligen-5_16x9.png
---
::

## Inspiration

Sometimes when you go through a course’s content, finding practice problems and questions can be difficult. We wanted to harness the power of Open AI's GPT 3.5 API and the Google Cloud Vision API to help students create their own quizzes so that they can study more effectively.

## What it does

intelliGEN is a quiz generator app that converts course slides (PDF format) into quizzes. By leveraging the Google Cloud Vision API, it extracts text from the slides using OCR and passes it to OpenAI's API to generate customized quizzes based on the course content.

## How we built it

We built intelliGEN by integrating the Google Cloud Vision API and OpenAI's API into our app. We developed the necessary algorithms and logic to parse the PDF slides, extract text, and generate quizzes dynamically based on the extracted content.

## Challenges we ran into

- Developing the correct prompts for GPT 3.5.
- Implementing context analysis into our app, as GPT 3.5 does not have context management.
- Integrating Google Cloud Vision API into the app, as GCP requires us to store the output text in Google Cloud Storage.
- Lack of time to fully integrate the frontend react app with the backend server.

## Accomplishments that we're proud of

We are proud that we got to use AI to help students learn more effectively. We are also proud of our context management algorithm that we developed that enables us to customize based on each user's needs.

## What we learned

During the development of intelliGEN, we gained valuable insights into leveraging AI technologies, specifically Open AI's large language models and Google's AI-powered OCR technology.

## What's next for intelliGEN

In the future, we plan to polish the frontend and backend integration. We also hope to implement ways to further personalize the user's experience.

[See our Devpost here!](https://devpost.com/software/intelligen)

This project is a submission for [StormHacks 2023](https://stormhacks.com/) at Simon Fraser University.

## Tech Stack

- React
- Node.js
- Express
- OpenAI GPT-3.5 API
- Google Cloud Vision API
- Google Cloud Storage
- Axios
- MongoDB
- Mongoose
- TailwindCSS
