---
layout: post
title: Haml clock
category: code
tags:
- CodePen
- Haml
- Sass
- responsive
pen: xADtE
image: http://farm3.staticflickr.com/2813/12730353565_9761bd9128_o.png
redirect_from: /code/2013/09/05/haml-clock/
---


<p data-height="400" data-theme-id="97" data-slug-hash="xADtE" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/xADtE'>Haml Clock</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

After creating the [Haml calendar]({{site.url}}/code/2013/08/26/haml-calendar), I decided to go for a Haml clock.

How it works:

1. Haml provides the initial time.
2. Internal Sass rotates the hands of the clock to portray that time.
3. CSS animation keeps the hands ticking.

Initially I only used an inline style to set the rotation of each hand. I wanted to write the animation/keyframes in the external stylesheet, but that wasn't going to work. The animation kept reseting to 0. For example, if it's 1:15, the minute hand would initially start at 15 (rotate 90 degrees) and then rotate slowly to the next minute (96 degrees). Instead the animation would only start 0 degrees; I couldn't get the inline rotation to speak with my external animation. To make the animation work, I wrote internal Sass so that the first keyframe was at the starting time and not reverting to 0.

## Features

I spent some extra time figuring out how to support different timezones. The clock is currently set at UTC-4 (EST). You can easily change the timezone in the Haml, it's the very first variable.

The CSS is all em-based and happily responsive. When the width/height is too small, then the digital time displays.

For an added bonus: the background color darkens as the day progresses. (My better half suggested that one.)

## Credits

I received design and color inspiration from [Dribbble](http://dribbble.com/shots/1221456-Flat-Watch-2). Also, I used [Hugo Giraudel's items on a circle mixin](http://hugogiraudel.com/2013/04/02/items-on-circle/). I really love that mixin!
