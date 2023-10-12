---
title: Simple split color
tags:
  - Sass
  - CodePen
image: 2013-09-13-simple-split-color.png
---

The effect is achieved on a single element using the properties border and box-sizing.

<p data-height="450" data-theme-id="97" data-slug-hash="ElaeD" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/ElaeD'>Simple Split Color Element</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

The border, only manipulating one side, must be half of the element's width for a vertical split. For a horizontal split the border must be half of the element's height.

In the example, the circle is `20em` wide and has a border left width of `10em`. I set the border color to white with a really low alpha (rgba) so that the border would pick up the color of the background, but add a light white on top.

Universally, I set the box-sizing to border box. If I didn't set the box-sizing, then my shape would be warped with dimensions of `30em` width and `20em` height. Setting the box-sizing to border box allows the border to be included in the width/height of the element.
