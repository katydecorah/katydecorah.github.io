---
title: Snowflaker
category: code
tags:
- CodePen
- Sass
- Haml
- box-shadow
image: http://i.imgur.com/yNv3nmo.gif
codepen: zxBRKv
---

<p data-height="350" data-theme-id="97" data-slug-hash="zxBRKv" data-default-tab="result" data-user="katydecorah" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/zxBRKv/'>Snowflaker</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I really wanted to build something last night, heck, something *seasonal*. Something to celebrate the fact that I'm done teaching and my free-time is katy-time.

I decided to try a snowflake.

## Building it out

With Haml, I spit out 3 `div` tags to act as the snowflake's `.spindles`. I paired the Haml loop with a Sass loop to criss cross the spindles dynamically.

![3 spindles](https://farm9.staticflickr.com/8580/16033995566_3db0647312.jpg)

I created `$w` to manage the width of each spindle and sized the height at 1em. I always like to have at least one dimension at 1em, because I'll drop a `font-size` on that element or its parent to allow the project to scale with respect to 1em.

Next, I used `box-shadow` on the `:before` and `:after` to build the snowflake patterns off the spindles. This took some time to get just right because I had to think in terms of each spindle. Each spindle is part of the pattern pie. Eventually, I got the `:before` to look like this thanks to `box-shadow`:

![before element](https://farm8.staticflickr.com/7475/15874027017_3a78f5be77.jpg)

I added `box-shadow` to the `:after` to build the final pattern:

![after element](https://farm8.staticflickr.com/7473/15874038007_0ce9287beb.jpg)

To really break it down, a single spindle looks like this:

![annotated single spindle](https://farm9.staticflickr.com/8619/15873786249_526deab8da.jpg)

Now put your finger at the top of the spindle and turn the bottom at (360/number of spindles) degrees and you’ll get the snowflake pattern.


## Making it scale

I refactored the code to use variables wherever possible with the premise that if I add more spindles then the pattern would purr.

And it did!

If you update the number of spindles in the Haml and Sass, you'll get a different snowflake. Here is 3 through 26 spindles:

![scaling spindles](http://i.imgur.com/yNv3nmo.gif)

You can play with the width of the spindles and patterns, too!

That was fun.
