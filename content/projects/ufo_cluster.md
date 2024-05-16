---
title: "Global UFO Sightings Cluster"
date: 2022-12-09T16:46:15-07:00
description: "A machine learning project meant to identify clusters of UFO sightings globally."
layout: article
---

<!-- {{< github repo="jrang188/Global-UFO-Sightings-Cluster" >}}
![Global UFO Sightings Cluster](feature.png "Global UFO Sightings Cluster") -->

The main purpose of the project is to identify clusters of UFO sighting locations. The question that we are focusing on is “Do UFO sightings appear more in North America generally, compared to the rest of the world?”. The source of data is the [NUFORC UFO sightings database](https://nuforc.org/databank/). The data source required quite an extensive amount of cleaning using Pandas because of the numerous invalid user inputs. Prior to training, we geocoded the location text inputs for each row with the Google Maps API. We then built and trained a K-Means Cluster using Scikit-Learn.

## Tech Stack

- Python 3
- Pandas
- Requests
- Google Maps API
- Python-dotenv
- Scikit-learn
- Matplotlib
- Seaborn
- Folium
