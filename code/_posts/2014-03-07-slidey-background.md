---
layout: post
title: Slidey background
category: code
tags:
- Haml
- Sass
image: http://farm4.staticflickr.com/3326/13012960323_1ca9571922.jpg
pen: whobi
redirect_from: /code/2014/03/07/slidey-background/

---

<p data-height="300" data-theme-id="97" data-slug-hash="whobi" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/whobi'>Slidey Background</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Each box above is an anchor tag with a `linear-gradient`. On hover, the `background-position` changes to reveal the second half of the link's gradient.

## Creating the gradient

I created an even gradient for each link where the lighter color ends at 50% and the darker color starts at 50%. The gradient doesn't repeat, but it's twice it's size on either the x or y axis. For example, the up (&uarr;) link has `background-size: 100% 200%`. Unless I change the `background-position`, then the second half of the gradient will remain hidden because it's clipped by the size of the element.

<figure>
<p data-height="500" data-theme-id="97" data-slug-hash="faf98b949f3b126b2c2d809367798c0f" data-default-tab="result" class='codepen img-half'>See the Pen <a href='http://codepen.io/katydecorah/pen/faf98b949f3b126b2c2d809367798c0f'>Slidey Background: Demo 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration of the gradient</figcaption>
</figure>

The demo above illustrates:

1. The actual size of the gradient.
2. The size of the element clips the gradient to reveal the first half of the gradient.
3. Changing the `background-position` pulls the second half of the gradient into view.

## Hover

On hover, I set the `background-position` to move 100% on the same axis that I doubled in size. For the up (&uarr;) link, the rule is `background-position: 0 100%;`. The new position paired with a `transition` pulls the second half of the gradient into view.

## Fat lip

Did you notice the lip of the darker gradient peaking in? The lip is adjustable on `$start`. Try changing the value. If the variable is 0, then the lip of the second half of the gradient disappears.

## Thoughts
I love the sliding between the left (&larr;) and right (&rarr;) links. It appears that they are both tugging at the same rectangle. I'll have to hold onto this idea.
