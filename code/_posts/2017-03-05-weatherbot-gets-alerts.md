---
title: WeatherBot gets alerts
image: 2017-03-05-weatherbot-gets-alerts-0.png
tags:
  - Node.js
  - AWS
  - API
---

I didn't expect [WeatherBot](/code/weatherbot/) to become [a series](/code/weatherbot-goes-outside/) of posts, but the weather has been ~~fluctuating so much~~ scary.

WeatherBot has severe weather alerts now:

{% include img.html src='2017-03-05-weatherbot-gets-alerts-1.png' alt='WeatherBot severe weather alerts' class='img-full' width='1526' height='334' %}

## How it works

1. If [any alerts occur in the request](https://github.com/katydecorah/weatherbot/blob/f38539459a9295f6ce2e13edffa842d2136341c5/index.js#L74), then [loop through them](https://github.com/katydecorah/weatherbot/blob/f38539459a9295f6ce2e13edffa842d2136341c5/index.js#L82-L85).
2. Get the [title, start, expiration date, and link to the alert](https://github.com/katydecorah/weatherbot/blob/f38539459a9295f6ce2e13edffa842d2136341c5/index.js#L83).
3. Check the [severity of the alert and assign an emoji](https://github.com/katydecorah/weatherbot/blob/f38539459a9295f6ce2e13edffa842d2136341c5/index.js#L87-L89) (advisory :grey_exclamation:, watch :exclamation:, warning :bangbang:).
4. [Post to Slack](https://github.com/katydecorah/weatherbot/blob/f38539459a9295f6ce2e13edffa842d2136341c5/index.js#L91-L93).

I'm looking forward to using this bot as a reminder to open up my laptop and stay inside :grimacing:.
