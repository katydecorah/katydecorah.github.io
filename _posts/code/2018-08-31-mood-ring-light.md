---
title: Create a mood ring with Glitch, Slack, and LIFX
category: code
image: https://c2.staticflickr.com/2/1853/43483318775_29ff560576_o.png
tags:
- API
- bots
---

Earlier this year I attended a [Slack Session](https://slackhq.com/join-us-for-slack-sessions) called *Building your first Slack integration*. It gave me a ton of ideas. Naturally, I decided to turn my office lamp into a mood ring as dictated by the emoji in my Slack status.

Here's the mood ring in action:

<iframe src="https://player.vimeo.com/video/287725439?color=f6f6f6&title=0&byline=0&portrait=0" width="852" height="479" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Under the hood

Using [Glitch](https://glitch.com/), I created an [Express](https://expressjs.com/) app that listens for Slack's [Events API](https://api.slack.com/events-api). In this case, I'm listening for changes made to my Slack user (which includes my status).

Once I change my status, [my Glitch app](https://glitch.com/~mood-ring-light) will parse the emoji from the response. Next, it finds a color value based on `mood.json`. This file maps emoji with a hex value. Finally, the color is sent to the [LIFX API](https://api.developer.lifx.com/) where it sets my light bulb.

This was a really fun way to experiment both with Glitch and the Slack Events API.

You can check out the [code on Glitch](https://glitch.com/~mood-ring-light) and the README to learn how I configured my Slack app.
