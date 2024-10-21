---
title: Bike Theft Alarm
date: 2023-04-13T00:00:00.000Z
description: 'Embedded bike theft alarm for the Beaglebone Green build on C and Vue.js '
layout: article
cover: /projects/bbg_with_gps.jpeg
---

# Bike Theft Alarm

[Github Link](https://github.com/djennedy/bike433)

:nuxt-img{alt="BBG with GPS module" src="/projects/bbg_with_gps.jpeg"}

:nuxt-img{alt="BBG" src="/projects/bbg.png"}

- Developed a multi-threaded anti-theft bicycle device on the Beaglebone Green (BBG) using **C**, **Pthreads**, **Embedded Linux**, and **PWM**.
- Leveraged **C** and **Pthreads** to establish a multi-threaded **UDP** relay that enables the alarm to communicate with a remote server, empowering users to trigger the alarm, know the current location, and be alerted remotely.
- Integrated an external **GPS** module connected through **UART** and the joystick connected through **GPIO,** and implemented the logic that controls the lock/unlock state and the alarm's trigger based on **GPS** movement using **C**.
- Developed a web interface to control the anti-theft device and receive status updates on the bicycle using **Vue.js, Socket.io,** and **Node.js**
