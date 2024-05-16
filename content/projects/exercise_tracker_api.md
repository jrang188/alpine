---
title: "Exercise Tracker API"
date: 2023-04-11T16:47:02-07:00
description: "A simple exercise tracker api using Express, TypeScript, Prisma, and an SQL database."
layout: article
cover: /projects/exercise_tracker_api.png
---

[Github Repo link](https://github.com/jrang188/exercise-tracker)

This [project](https://exercise-tracker-qqnz.onrender.com/) is based on the [FreeCodeCamp Backend Development & API Certification project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker). However, I decided to do it differently from the requirements to learn and try new technologies.

Here are the differences and their reasons:

- Use of TypeScript
  - I wanted to gain more experience using TypeScript
- Prisma ORM over Mongoose
  - I enjoy the way Prisma keeps the database in sync
  - I really like how easy it is to enforce schemas and how it ensures type-safety
- PostgreSQL/MySQL over MongoDB
  - I personally prefer using a relational database over a noSQL database because it's more structured
  - I kind of wanna try using AWS RDS or Render's Database as a Service
  - Since I also wanted to try out using serverless databases, I also decided to try out using Planetscale, which is a serverless MySQL database.
- Deployed through Render
  - I was planning to deploy to AWS Elastic Beanstalk cause I am trying to learn more about AWS, failed for some reason. Will look back into it
  - Alternative is to use Render, which is another PaaS that I wanted to try, ever since Heroku starts limiting their free tier

<!-- {{< button href="https://exercise-tracker-qqnz.onrender.com/" target="externalLinkTarget">}}
Try it out here!
{{< /button >}} -->

## Tech Stack

- Express
- Prisma ORM
- TypeScript
- PostgreSQL via Render / MySQL via PlanetScale
- Render
