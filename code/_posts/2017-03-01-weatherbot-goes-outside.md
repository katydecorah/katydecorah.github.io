---
title: WeatherBot goes outside

image: 2017-03-01-weatherbot-goes-outside-0.jpg
tags:
  - Node.js
  - AWS
  - API
emoji: ❄️
---

Last week I talked about how I built a [WeatherBot](/code/weatherbot/) that gives us a heads up if there will be snow over the next several hours. The recent warm weather inspired me to add warm weather alerts:

{% include img.html src='2017-03-01-weatherbot-goes-outside-1.jpg' alt='WeatherBot Slack Post' class='img-half' %}

<div class='caption'>Cloudy and warm</div>

{% include img.html src='2017-03-01-weatherbot-goes-outside-2.jpg' alt='Partly cloudy WeatherBot' class='img-half' %}

<div class='caption'>Party cloudy and warm</div>

## How it works

1. Get the [current weather data](https://github.com/katydecorah/weatherbot/blob/edfd30d850aa6ca521b32e126c7d93677df06029/index.js#L41).
2. If the [temperature is between 50℉ and 90℉ and there probably won't be any precipitation](https://github.com/katydecorah/weatherbot/blob/edfd30d850aa6ca521b32e126c7d93677df06029/index.js#L55) (less than 20% chance), [post to Slack](https://github.com/katydecorah/weatherbot/blob/edfd30d850aa6ca521b32e126c7d93677df06029/index.js#L69-L72).
3. Also, [translate the Dark Sky icon in the request to an emoji](https://github.com/katydecorah/weatherbot/blob/edfd30d850aa6ca521b32e126c7d93677df06029/index.js#L15-L27) and use that for the Slack message icon to indicate just _how_ nice it is outside right now. (I modified the original post to Slack script to [include a parameter for emoji](https://github.com/katydecorah/weatherbot/blob/edfd30d850aa6ca521b32e126c7d93677df06029/index.js#L92) to help make this fun little feature happen.)

I'm looking forward to using this bot as a reminder to close my laptop and go for a walk.
