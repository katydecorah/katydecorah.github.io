---
title: Simple box

tags:
  - Sass
  - Haml
image: http://codepen.io/katydecorah/pen/vrzmH/image/large.png
pen: vrzmH
redirect_from: /code/2013/12/04/simple-box/
---

<p data-height="350" data-theme-id="97" data-slug-hash="vrzmH" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/vrzmH'>Simple Box</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

The `.box` is a single element. I used the `transform` property and pseudo elements to achieve the result.

The main element is the top of the box. Initially, I made the main element the left side of the box. I think that was knee-jerk reaction for wanting to move left to right. However, styling this box is much easier when the main element is the top. The top will serve as an important reference point for the remaining sides of the box.

I started by drawing out a square and then rotating it 45 degrees and skewing it -15 degrees.

I added an `animation` in the example below to demonstrate the `transform` values used in creating the box top.

<p data-height="270" data-theme-id="97" data-slug-hash="8707388727c57ea3ff8ce3bc42af5f56" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/8707388727c57ea3ff8ce3bc42af5f56'>Simple Box, 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I used pseudo elements, `:before` and `:after`, to create the left and right sides of the box. Since it's a box, I styled the sides with the same dimensions as the top, using the variable `$boxSize`.

I was curious where `:before` and `:after` would lay before I started transforming them individually. Without telling the transform otherwise, `:before` and `:after` assumed the same transform values (in this case, skew and rotate) from the main element. Without applying each pseudo element's own skew and rotate, I ended up creating a stack of elements.

I added an `animation` in the example below to demonstrate the stack of elements before I transformed them into sides.

<p data-height="270" data-theme-id="97" data-slug-hash="1ef155d2126eb89a515ed9873dc1b722" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/1ef155d2126eb89a515ed9873dc1b722'>Simple Box, 2</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

To create the sides, I skewed each pseudo element 45 degrees and then translated it into place. I translated each side relative to the size of the box, making the box scalable. If you adjust `$boxSize`, the box will happily scale to your input. I also applied a slight adjustment of `0.025` to the translate. I found that the sides didn't match up exactly how I liked them, so I persuaded them into place.

I added an `animation` in the example below to demonstrate the `transform` (skew and translate) used to create the sides of the box.

<p data-height="270" data-theme-id="97" data-slug-hash="c363cbddcd4e63bf4b3940b4f8b68fc8" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/c363cbddcd4e63bf4b3940b4f8b68fc8'>Simple Box, 3</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I also tweaked the background for each element to take `$mainColor`, adjust the hue, and lighten it slightly to add dimension to the box.

And there you have it, a box.

Hooray! Box!
