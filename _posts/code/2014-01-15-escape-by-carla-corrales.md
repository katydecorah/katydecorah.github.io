---
layout: post
title: Escape by Carla Corrales
category: code
pen: mJeba
tags:
- Dribbble
- CodePen
- Sass
- single element
- animation
image: http://farm3.staticflickr.com/2881/12730618224_35decb3433.jpg
dribbble: http://drbl.in/jMcZ
pen: mJeba
redirect_from: /code/2014/01/15/escape-by-carla-corrales/

---


<p data-height="450" data-theme-id="97" data-slug-hash="mJeba" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/mJeba'>Escape by Carla Corrales</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I have another single element project! I explored the Dribbble shot [Escape by Carla Corrales](http://drbl.in/jMcZ).

## .marker
The main element, `.marker`, is the map marker shape. The `:before` is the inner circles and the `:after` is the dial.

![element diagram](http://farm3.staticflickr.com/2881/12730618224_35decb3433.jpg)

I created the marker shape by using a `border-radius: 100% 100% 0;`. Then I rotated the element 45 degrees, making it sit on its point. I used a linear gradient for the two-toned look of the background.

<figure>
<p data-height="400" data-theme-id="97" data-slug-hash="5139eb2825b88adf9495330f554a9c5b" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/5139eb2825b88adf9495330f554a9c5b'>Escape -- Observe 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of map marker style.</figcaption>
</figure>

## :before

I used the `:before` element for the inner background. I created the inner rings by using two gradients, linear and radial. Initially I used inset `box-shadow` to create the rings, but I lost a section of the two-toned background. Layering the radial gradient on top of the linear gradient worked better in this case and gave me a reason to tinker with gradients.

Below is a demonstration of the linear and radial gradients coming together.

<figure>
<p data-height="307" data-theme-id="97" data-slug-hash="85ed97e499e0eae1b5ba133f7a68dd2e" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/85ed97e499e0eae1b5ba133f7a68dd2e'>Escape -- :before -- demonstration</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of linear and radial gradients.</figcaption>
</figure>

## :after
I used the `:after` element for the dial. First, I created a rectangle using `border`. I used border because the dial is four-toned and I can set each border side to a different color. Next, I skewed and rotated the element. I skewed it until I squashed the height and elongated the width.

The results were&hellip; dial-shaped!

<figure>
<p data-height="274" data-theme-id="97" data-slug-hash="2da5c6fd1fea85b62eef5c84568f6658" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/2da5c6fd1fea85b62eef5c84568f6658'>Escape -- :after -- demonstration</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of :after style.</figcaption>
</figure>

This baby is scalable. [Open it up in CodePen](http://codepen.io/katydecorah/pen/mJeba) and change the `$size` (easter egg: try a number less than 5em).

One last thing, did you give it a hover yet? Scroll back up there and do it. Yes, I am bossing you.

### Updated 01/18/2014

I wanted to give this Pen a little more pizazz by making the dial spin immediately and then spin again on hover. To make this happen, I needed to trade in my `transition` for `animation`, but more importantly, I needed to learn more about `animation-play-state`. I had never thought to use this property until I read Lea Verou's, [Smooth state animations with animation-play-state](http://lea.verou.me/2014/01/smooth-state-animations-with-animation-play-state/).

Starting out, I added the `animation` to `.marker:after` and I added `animation-play-state` to `.marker:hover:after`. I wanted the animation to play and then play again on `:hover`. After trying out all of the values and combinations of values, I finally began to understand this property. I like to think about `animation-play-state` like watching a movie and the remote is my `:hover` target.

<h4>{% include icons/play.svg %} <code>animation-play-state: running;</code></h4>

For my first try, I used the value `running`. Nothing happened. The animation was already running and then on `:hover`, I asked it to run again.

If I'm watching a movie and press play then my action won't be productive.

<h4>{% include icons/pause.svg %} <code>animation-play-state: paused;</code></h4>

Next, I tried the alternate value, `paused`. It kind of worked. The animation didn't play when I was hovering, but it played once I hovered off of the target.

If I'm watching a movie and I press pause, the movie will pause. I'm guessing that the animation restarted because it triggered the original `animation` on `.marker:after` to run again. (I need to look into this.)

<h4>{% include icons/pause.svg %} {% include icons/play.svg %} <code>animation-play-state: paused, running;</code></h4>

A little confused with my previous tries, I checked out [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state). I read that both values can be used, which led me to try `paused, running`. This value worked great! The dial spun on `:hover`.

I was watching a movie, I paused it and then played it again.

This example might be a little stilted; I definitely plan on exploring `animation-play-state` more!