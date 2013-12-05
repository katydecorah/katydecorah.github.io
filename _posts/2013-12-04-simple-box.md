---
layout: post
title: Simple Box
category: code
tags: 
  - CodePen
  - Sass
  - Haml
  - transform
image: http://codepen.io/katydecorah/pen/vrzmH/image/large.png
---

<p data-height="350" data-theme-id="97" data-slug-hash="vrzmH" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/vrzmH'>Simple Box</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

The `.box` is a single element. The main element styles the top of the box. When I first started, I wanted the main element to style the left side. I think that was knee-jerk reaction for wanting to move left to right. However, you will find that styling a single element box is much easier when the main element is the top. The top will serve as an important reference point for the remaining sides of the box.

After I rotated `.box` 45 degrees and skewed it -15deg for both x and y, I had the top of the box in place.

<p data-height="270" data-theme-id="97" data-slug-hash="8707388727c57ea3ff8ce3bc42af5f56" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/8707388727c57ea3ff8ce3bc42af5f56'>Simple Box, 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

The pseudo elements, `:before` and `:after` will create the left and right sides of the box. Because it's a box, I styled the sides with the same dimensions as the top, using the variable `$boxSize`.
 
I was curious where the `:before` and `:after` would lay before I started transforming them each individually. Without telling the transform otherwise, `:before` and `:after` will assume the same transform values (in this case skew and rotate) from the main element. Without applying each pseudo element's own skew and rotate, I ended up creating a stack of elements.

I added an experimental `:hover` to `.box`, so you can see the stack of elements in the example below.

<p data-height="270" data-theme-id="97" data-slug-hash="1ef155d2126eb89a515ed9873dc1b722" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/1ef155d2126eb89a515ed9873dc1b722'>Simple Box, 2</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

To get each side in place, I skewed each pseudo element 45 degrees and then translated into place. I translated each side relative to the size of the box, making the box scalable. If you adjust the `$boxSize` variable, the box will happily adjust to your liking. You will also notice a slight adjustment of `0.025` applied to the translate. I found that the sides did not match exactly how I liked them, so I made a small adjustment.

I added an experimental animation in the example below, so you can see the transform put to work.

<p data-height="270" data-theme-id="97" data-slug-hash="c363cbddcd4e63bf4b3940b4f8b68fc8" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/c363cbddcd4e63bf4b3940b4f8b68fc8'>Simple Box, 3</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I also tweaked the background to take `$mainColor`, adjust the hue, and lighten it slightly to add dimension to the box. 

And there you have it. A box.

Hooray! Box!