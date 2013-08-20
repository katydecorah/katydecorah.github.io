---
layout: post
title: Optical Illusion
category: coding
tags: 
- CodePen
- Sass
- Haml
image: http://katydecorah.com/img/optical-illusion.png
---

I gave an optical illusion a try to flex my Sass skills. 

In Haml, I spun out a list with 200 items. I put a width on the entire list of 100em and hid the overflow on the body. I wanted to make sure that each row remained in a row, but was wide enough to stretch across the browser. This came in handy when shifting the rows to create the illusion.

I styled each list item the same, 5em square with a gray border-top. This makes 20 items in each row. Every even list item has a background of black.

Next I had to shift every other row in order to create the optical illusion. Knowing I have 20 items in each row, I knew the range for each row (the first 1-20, the second 21-40 and so on.) I wrote a @while loop to build an nth-child range and to increment to every other row.

<p data-height="500" data-theme-id="97" data-slug-hash="gwAmk" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/gwAmk'>Optical Illusion</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>
