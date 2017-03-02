---
title: WeatherBot goes outside
category: code
image: https://c1.staticflickr.com/1/584/33134069845_e0d27177f0_z.jpg
tags:
- bots
---

Last week I talked about how I built a [WeatherBot](/code/weatherbot/) that gives us a heads up if there will be snow over the next several hours. The recent warm weather inspired me to add warm weather alerts:

![WeatherBot Slack Post](https://c1.staticflickr.com/3/2013/32728005310_a1b45ffb85_b.jpg)
<div class='caption'>Cloudy and warm</div>

![Partly cloudy WeatherBot](https://c1.staticflickr.com/3/2860/32318481893_bf18077b2d_b.jpg)
<div class='caption'>Party cloudy and warm</div>

## How it works

1. Run through the [data over the next hour](https://github.com/katydecorah/weatherbot/blob/b87279fad57486fdd06db164fd4801930e85fef4/index.js#L54-L58).
2. If the [temperature is between 50℉ and 90℉ and there probably won't be any precipitation](https://github.com/katydecorah/weatherbot/blob/b87279fad57486fdd06db164fd4801930e85fef4/index.js#L57) (less than 20% chance), [post to Slack](https://github.com/katydecorah/weatherbot/blob/b87279fad57486fdd06db164fd4801930e85fef4/index.js#L68-L75).
3. Also, [translate the Dark Sky icon in the request to an emoji](https://github.com/katydecorah/weatherbot/blob/b87279fad57486fdd06db164fd4801930e85fef4/index.js#L16-L27) and use that for the Slack message icon to indicate just _how_ nice it is outside right now. (I modified the original post to Slack script to [include a parameter for emoji](https://github.com/katydecorah/weatherbot/blob/b87279fad57486fdd06db164fd4801930e85fef4/index.js#L95) to help make this fun little feature happen.)

I'm looking forward to using this bot as a reminder to close my laptop and go for a walk.
