---
layout: post
title: Escape by Carla Corrales
category: code
pen: mJeba
tags: 
  - Dribbble
  - CodePen
  - Haml
  - Sass
  - single element
  - gradient
  - transform
image: "https://dl.dropbox.com/s/q4he7hpqshi3khn/escape-elements.png"
---

<p data-height="399" data-theme-id="97" data-slug-hash="mJeba" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/mJeba'>Escape by Carla Corrales</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I have another single element project! I explored the Dribbble shot [Escape by Carla Corrales](http://drbl.in/jMcZ).

## .marker
The main element, `.marker`, is the map marker shape. The `:before` is the inner circles and the `:after` is the dial.

![element diagram](https://dl.dropbox.com/s/q4he7hpqshi3khn/escape-elements.png)

I created the marker shape by using a `border-radius: 100% 100% 0;`. Then I rotated the element 45 degrees, making it sit on its point. I used a linear gradient for the two-toned look of the background.

<figure>
<p data-height="400" data-theme-id="97" data-slug-hash="5139eb2825b88adf9495330f554a9c5b" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/5139eb2825b88adf9495330f554a9c5b'>Escape -- Observe 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of map marker style.</figcaption>
</figure>

## :before

I used the `:before` element for the inner background by using two gradients, linear and radial. Initially I used inset `box-shadow` to create the rings, but I lost a section of the two-toned background. Layering the radial gradient on top of the linear gradient worked better in this case and gave me a reason to tinker with gradients.

Below is a demonstration of the linear and radial gradients coming together.

<figure>
<p data-height="307" data-theme-id="97" data-slug-hash="85ed97e499e0eae1b5ba133f7a68dd2e" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/85ed97e499e0eae1b5ba133f7a68dd2e'>Escape -- :before -- demonstration</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of linear and radial gradient.</figcaption>
</figure>

## :after
I used the `:after` element for the dial. First, I created a rectangle using `border`. I used border because the dial is four-toned and I can set each border side to a different color. Next, I skewed and rotated the element. I skewed it until I squashed the height and elongated the width. 

The results were&hellip; dial-shaped!

<figure>
<p data-height="274" data-theme-id="97" data-slug-hash="2da5c6fd1fea85b62eef5c84568f6658" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/2da5c6fd1fea85b62eef5c84568f6658'>Escape -- :after -- demonstration</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of :after style.</figcaption>
</figure>

One last thing, did you give it a hover yet? Scroll back up there and do it. Yes, I am bossing you.

This baby is scalable. [Open it up in CodePen](http://codepen.io/katydecorah/pen/mJeba) and change the `$size` (easter egg: try a number less than 5em).
