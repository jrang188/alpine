---
title: HHA Haiti Hospital Management Platform
date: 2024-05-15T16:03:19.000Z
description: Developed a hospital management platform for Hope Health Action (HHA) using React, Express, TypeScript, MongoDB, and Node.js.
layout: article
cover: projects/hha1_16x9.png
---

[Github Repo link](https://github.com/drbfraser/HHA-HaitiHospital)

::gallery
---
images:
  - /projects/hha1_16x9.png
  - /projects/hha2_16x9.png
  - /projects/hha3_16x9.png
---
::

Developed a hospital management platform for [Hope Health Action (HHA)](https://hopehealthaction.org/) to be used in Haiti to manage their hospital and healthcare initiatives. The platform's main features are departmental report generation, broken equipment tracking, employee of the month management, message board, and case study management. This platform aims to reduce the paperwork and manual data entry required by the hospital staff.

## Role

In this project, I was the product owner, coordinating with clients and identifying requirements for the platform. I also worked on frontend, especially the Report Generation Forms, ensuring that the forms are modular and easily customizable for future use. I also worked on the backend, setting up the connection to connection to send logs to Grafana Loki. In addition, I developed the necessary seeder script to set up the MongoDB database in the production environment. I also worked on setting up the Grafana dashboard to monitor the platform. Lastly, I also debugged the docker-compose file to ensure robustness for production deployment.

## Architecture

:nuxt-img{alt="hha4_16x9.png" src="/projects/hha4_16x9.png"}

The current architecture is a simple, monolithic MERN stack application running on a VM or VPS. Each layer is contained within a Docker container and orchestrated using Docker Compose. A FluentBit container collects and forwards the logs and metrics to Grafana.

If the hospital's operation has expanded and there is a more stringent requirement for high availability (HA), I wrote an article evaluating the options that HHA can do to the application's architecture and deployment strategy. The article also does an even deeper dive into the app's current architecture. Here is the link to the article:

[Making Haiti HHA More Cloud Native](https://www.justinang.com/posts/cloud_native_haiti)

## Stack

- React
- Express
- MongoDB
- Mongoose
- Node.js
- TypeScript
- Passpost.js
- Bootstrap
- Mocha
- Cypress
- Caddy
- GitHub Actions
- Docker
- Docker Compose
- Grafana
- FluentBit
- AWS
