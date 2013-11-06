---
layout: post
title: Random Customizable Balloons
category: code
tags: 
  - Codepen
  - Sass
  - Haml
  - random
image: "http://codepen.io/katydecorah/pen/cdkHn/image/large.png"
published: true
---

<p data-height="550" data-theme-id="97" data-slug-hash="cdkHn" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/cdkHn'>Random Customizable Balloons</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I saw this [Dribbble shot](http://dribbble.com/shots/1297767) and decided to spin out a few ideas. I ended up creating customizable, random-generated, scalable balloons!

I started by creating a single `.balloon` element. I styled the main element for the actual balloon shape, the `:before` for where the balloon is tied, and `:after` for the string.

After I styled the first balloon, I absolutely positioned the balloon from the bottom, using the height of the string as the bottom value. I set the `html` and `body` height and width to 100% and hid the overflow, to keep my balloon on the page and at the bottom.

## Time for more balloons! 

I added more `.balloon` elements and wrote a Sass loop to give each balloon slight customizations. For example, I adjusted the hue of the balloons based on a predetermined color, and give it some opacity.

	background:rgba(adjust-hue($balloonColorStart,random(360)),0.5);

Here `$balloonColorStart` is defined at the top of my Sass file, to be easily changed.

In the Sass loop for the balloons, I created a variable called `$stringHeight` and set it to a random number up to 20em. I used `$stringHeight` for the height of the `:after` (which represents the string) and for the bottom value for each balloon element in the loop. Just like I had done before with my first balloon, but now dynamic.

I also created a variable, `$balloonLeft`, to increment itself after every iteration of the loop to be applied as the left value. This made sure the balloons remained evenly spaced out.

At this point, I thought I was finished, but when I changed the width and height of the balloons to make them smaller, I noticed that the they didn't scale so well. The pseudo elements were no longer centered at the bottom of the balloon and the balloons were awkwardly spaced.

## Let's make this thing scalable.

I decided that the balloon width, or `$balloonWidth`, would be the main variable in keeping my proportions tight. From this variable, I calculated the height of the balloons by hitting `height: $balloonWidth * 1.25`. Now the height and width of my balloons are in proporation.

Next, I adjusted my `:before`, or the rubber tie part of the balloon, to be in proportion with the width of the balloon. Here's what I came up with:

	width:$balloonWidth / 8;
    height:$balloonWidth / 14;
    bottom:($balloonWidth / 14) * -0.75;
    left: ($balloonWidth / 2) - ($balloonWidth / 14);

I went back and forth between setting the `$balloonWidth` from a low number and then to a high number and decided that those equations suited my rubber tie part of the balloon best.

For the balloon string, I did a similar guess and check. I only needed to control the left position of the `:after` element, to center the string on the balloon, and found  `left:($balloonWidth / 2.1);` to be the sweet spot.

I also adjusted the `$balloonLeft` variable to take into account the balloon width. By doing so I added a new variable, `$balloonProx` to tweak the proximity of the balloons: `$balloonLeft: $balloonLeft + ($balloonWidth/$balloonProx);`

Lastly, I added a slightly floaty animation. I used random for the animation time, for a more natural, whimsical feel. I'm all about the whimsies.