---
layout: post
title: Rabbit by Beard Chicken
category: code
tags: 
  - Codepen
  - Sass
  - Haml
  - Dribbble
  - box-shadow
image: http://codepen.io/katydecorah/pen/uIEFy/image/large.png
---

<p data-height="500" data-theme-id="97" data-slug-hash="uIEFy" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/uIEFy'>Rabbit by Beard Chicken</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

This fun little animation was built from [Beard Chicken's Dribbble shot](http://dribbble.com/shots/1316513).

I was able to only use two elements for this animation by using `box-shadow`. 

The main element `.rabbit` is the rabbit's body. The `:before` is the tail, but then I used `box-shadow` to resize, recolor, and relocate the element's shadow into making the rabbit's eye. I created another `box-shadow` and made the rabbit's hind leg. Then I used multiple shadows to create the front leg.

Similarly, the rabbit's `:after` is one ear. By using `box-shadow`, I was able to create the second ear.

I created one cloud using pseudo elements, but then used `box-shadow` to display two more clouds.

The fourth value of `box-shadow` controls the size of the shadow, or `spread-radius`. I had severely under used this value, until today.

	box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color>


[box-shadow on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

The `spread-radius` is optional, but the value is set to 0 unless specified. If the `spread-radius` is greater than 0, then the shadow will grow. If the `spread-radius` is less than 0, then the shadow will shrink. When shrinking the shadow, you have to use very small units, otherwise the shadow will disappear.

So in the case of `.clouds`:

	.clouds {
		...
		box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 white;
	}

The first `box-shadow` creates a copy of the element, but is moved to the right 5em and down 2em. I slightly shrunk the new cloud, using -0.3em for the `spread-radius`. Naturally, I set the color of the cloud to white. For the second `box-shadow`, I moved it to the left 2em and down 2em, but kept it the same size. I set the `blur-radius` to 0 for both shadows so that there is no blur and I receive a crisp cloud.

Getting the `@keyframes` just right took a bit of adjusting, but I loved how this rabbit came to life!