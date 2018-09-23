---
title: Power Up Preloader by Mantas Ba&#269;iu&#353;ka

tags:
  - Sass
pen: BfuGF
image: https://farm3.staticflickr.com/2860/12730278733_e045273427_o.png
browser: Chrome 32.0.1700.102
---

<p data-height="300" data-theme-id="97" data-slug-hash="bcc619ac0a04ac70e948a41d26e49a24" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/bcc619ac0a04ac70e948a41d26e49a24'>Power Up Preloader (GIF) by Mantas Bačiuška</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I created another scalable, chameleon, single element project. This is based off of the Dribbble shot, [Power Up Preloader by Mantas Ba&#269;iu&#353;ka](http://dribbble.com/shots/1399080-Power-Up-Preloader-GIF).

Hover over the battery for LIGHTNING CHARGE (please flick your lights on and off as you read this sentence).

## Elements

The main element, `.battery`, is the outline of the battery. The `:before` is the inner animating gradient and the `:after` is the battery contact.

<figure>
<p data-height="300" data-theme-id="97" data-slug-hash="0a06bd9d7d5ae8b750e3bd8653dd63ef" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/0a06bd9d7d5ae8b750e3bd8653dd63ef'>Power Up Preloader - deconstructed</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of elements.</figcaption>
</figure>

## You best customize

Like my previous Pens, I also made this one scalable. Try changing `$size` in the Sass. I added a few conditions for when `$size` is less than 4em, because when $size is teeny the positioning gets thrown off. To help it along, I added a `background-color` to `.battery` to hide the pixel off-ness.

The color of the battery and background will adjust according to `$accent`. Darkish grays look pretty dope.

## Repeating gradients repeating gradients

The magic of this whole thing is the animated gradient. The first step was creating a gradient that was a pattern. The beginning and end must match seamlessly. I carefully crafted (jk, I guessed until I got it right) the `repeating-linear-gradient` into a pattern.

    background: repeating-linear-gradient(-45deg, $bg, $bg 3%, $accent 3%, $accent 25%);

<figure>
<p data-height="283" data-theme-id="97" data-slug-hash="7398c4a1664923574f6af529db07d019" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/7398c4a1664923574f6af529db07d019'>Power Up Preloader -- swatch</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of gradient</figcaption>
</figure>

The animation moves the `background-position` of the gradient horizontally. In `@keyframes` I set `to {background-position:(($size /2) - $border) 0;}`. I used a variable here so that the gradient stays in proportion.

I coupled the `@keyframes` with `animation: charge 0.5s infinite linear;` on `:before`. Once the `background-position` gets to `(($size /2) - $border)` it runs again, but it's seamless so we can't tell.

It took me a few tries to get the `repeating-linear-gradient` just right. Gradients are so useful, but dang&hellip; I need to spend more time with them. For instance, I didn't know until about a month ago that the repeating function existed for linear and radial.

I think I'll need to do some more experiments with gradients.
