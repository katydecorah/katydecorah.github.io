---
title: Make your Slack status the weather forecast

image: 2018-05-11-weather-status-0.png
tags:
  - Node.js
  - AWS
  - API
---

Filed under: things we probably don't need, but idk I want it.

A bit ago, I made a [weatherbot](https://katydecorah.com/code/weatherbot/) for our household Slack to remind us of nice weather so we can go for walks and of inclement weather so we can move the cars and hunker down. Since I spend a fair amount of time in Slack, I considered what it would be like to create a weather widget using a user's status.

So I did:

{% include img.html src='2018-05-11-weather-status-0.png' alt="screenshot of Slack where the user's status is a sun emoji with the forecast: Clear for the hour 59℉" class='img-half' width='508' height='286' %}

The emoji offers an idea about what's going on outside our window and then we can hover to get full details. I've set it up so that if the _feels like_ temperature differs from the actual temperature, it'll also let us know in the status.

It's fun.

## Under the hood

Every 20 minutes, Amazon Web Services will run the code to update the Slack user status of an extra (sandbox) account in our workspace. And that code will:

1. [Fetch the current weather forecast](https://github.com/katydecorah/weather-status/blob/568c5eb37642cd48d410e202fb68de063a588332/index.js#L13-L29) for my area.
2. Convert Dark Sky's forecasted weather icon to [a similar emoji](https://github.com/katydecorah/weather-status/blob/568c5eb37642cd48d410e202fb68de063a588332/index.js#L31-L45).
3. [Format the forecast](https://github.com/katydecorah/weather-status/blob/568c5eb37642cd48d410e202fb68de063a588332/index.js#L47-L63) summary.
4. [Update the status and emoji](https://github.com/katydecorah/weather-status/blob/568c5eb37642cd48d410e202fb68de063a588332/index.js#L74-L90) in Slack.

You can [find the code on GitHub](https://github.com/katydecorah/weather-status).
